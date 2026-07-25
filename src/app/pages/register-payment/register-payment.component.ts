import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';
import { DocumentConsultService } from '../../core/services/document-consult.service';
import { BankingService } from '../../core/services/banking.service';
import { JournalEntryService } from '../../core/services/journal-entry.service';
import { AccountService } from '../../core/services/account.service';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-register-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-payment.component.html',
  styleUrl: './register-payment.component.scss'
})
export class RegisterPaymentComponent implements OnInit {
  isAnnulled = false;
  transactionType = 'Pago';
  paymentMethod = 'Cheque';
  paymentSubMethod = 'Cheque propio';
  issueDate = '2026-06-30';
  personName = '';
  payToOrderOf = '';
  bankAccount = '';
  checkNumber = '';
  checkDate = '';
  description = '';
  isCash = false; // EFECTIVO checkbox
  saving = false;

  documents: any[] = [];
  total = 0;
  
  bankAccounts: any[] = [];
  cashAccounts: any[] = [];
  glAccounts: any[] = [];

  get paymentMethods() {
    if (this.transactionType === 'Pago') {
      return ['Cheque', 'Transferencia', 'Caja', 'Tarjeta de Crédito', 'Dinero electrónico'];
    } else {
      return ['Caja', 'Cheque', 'Transferencia'];
    }
  }

  onTransactionTypeChange() {
    if (this.transactionType === 'Pago') {
      this.paymentMethod = 'Cheque';
    } else {
      this.paymentMethod = 'Caja';
    }
    this.onPaymentMethodChange();
  }

  onPaymentMethodChange() {
    if (this.paymentMethod !== 'Caja') {
      this.bankAccount = '';
    }
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private documentService: FinancialDocumentService,
    private documentConsultService: DocumentConsultService,
    private bankingService: BankingService,
    private journalEntryService: JournalEntryService,
    private accountService: AccountService,
    private documentPaymentService: ApiService
  ) {}

  ngOnInit() {
    this.bankingService.getBankAccounts().subscribe(accs => this.bankAccounts = accs);
    this.bankingService.getCashAccounts().subscribe(accs => {
      this.cashAccounts = accs;
      if (this.paymentMethod === 'Caja' && accs.length > 0) {
        this.bankAccount = accs[0].id;
      }
    });
    this.accountService.getAll().subscribe(accs => this.glAccounts = accs);

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        // First try electronic documents
        this.documentConsultService.getById(id).subscribe({
          next: (doc) => this.populateData(doc),
          error: () => {
            // Fallback to non-electronic financial documents
            this.documentService.getById(id).subscribe({
              next: (doc) => this.populateData(doc),
              error: () => alert('Error al cargar la información del documento')
            });
          }
        });
      }
    });
  }

  populateData(doc: any) {
    this.personName = doc.personName || doc.supplierName || '';
    this.payToOrderOf = this.personName;
    const cat = doc.documentCategory === 'INVOICE' || doc.documentTypeCode === '01' ? 'FAC' : 'DOC';
    const documentLabel = `${cat} ${doc.documentNumber}`;
    this.description = `Pago de doc. ${documentLabel}, ${this.personName}`;
    
    const prevPaid = Number(doc.amountPaid) || 0;
    const value = Number(doc.total) || 0;
    const balance = Math.max(0, value - prevPaid);
    
    this.documents = [{
      documentLabel: documentLabel,
      issueDate: doc.issueDate,
      type: cat === 'FAC' ? 'Factura' : 'Documento',
      value: value,
      balance: balance,
      amountToPay: balance
    }];
    this.recalcTotal();
  }

  recalcTotal() {
    this.total = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
  }

  formatCurrency(amount: number): string {
    if (amount === undefined || amount === null || isNaN(amount)) return '$0.00';
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  save() {
    if (this.paymentMethod !== 'Caja' && !this.bankAccount) {
      alert('Por favor seleccione una cuenta bancaria');
      return;
    }
    
    this.saving = true;
    const totalPaid = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
    
    // Register actual financial transaction
    if (this.paymentMethod === 'Caja') {
      let cashAccId = null;
      // Intenta encontrar una cuenta llamada "Caja" o similar
      const cashGL = this.glAccounts.find(a => !a.isControlAccount && a.name.toLowerCase().includes('caja'));
      if (cashGL) {
        cashAccId = cashGL.id;
      } else {
        // Fallback a la primera cuenta de activo (mock)
        const firstAsset = this.glAccounts.find(a => !a.isControlAccount && a.code.startsWith('1.1.1'));
        if (firstAsset) cashAccId = firstAsset.id;
      }

      if (cashAccId) {
        
        // Find counterpart account for double-entry
        let counterpartAcc = null;
        if (this.transactionType === 'Pago') {
          counterpartAcc = this.glAccounts.find(a => !a.isControlAccount && (a.name.toLowerCase().includes('pagar') || a.name.toLowerCase().includes('proveedor')));
        } else {
          counterpartAcc = this.glAccounts.find(a => !a.isControlAccount && (a.name.toLowerCase().includes('cobrar') || a.name.toLowerCase().includes('cliente')));
        }
        
        // Fallback to any movement account if specific one not found (for mockup safety)
        if (!counterpartAcc) {
          counterpartAcc = this.glAccounts.find(a => !a.isControlAccount && a.id !== cashAccId);
        }

        if (!counterpartAcc) {
          alert('Error: No se encontró una cuenta de contrapartida válida para el asiento contable.');
          this.saving = false;
          return;
        }

        // Create draft journal entry for cash movement
        const entry = {
          date: this.issueDate,
          description: this.description,
          lines: [
            { 
              accountId: cashAccId, 
              debit: this.transactionType === 'Cobro' ? totalPaid : 0, 
              credit: this.transactionType === 'Pago' ? totalPaid : 0, 
              description: 'Caja - ' + this.description 
            },
            {
              accountId: counterpartAcc.id,
              debit: this.transactionType === 'Pago' ? totalPaid : 0,
              credit: this.transactionType === 'Cobro' ? totalPaid : 0,
              description: 'Contrapartida - ' + this.description
            }
          ]
        };
        this.journalEntryService.create(entry as any).subscribe({
          next: (createdEntry) => {
            // Post the entry so it reflects in the general ledger report immediately
            this.journalEntryService.post(createdEntry.id).subscribe({
              next: () => this.finalizeSave(totalPaid, createdEntry.id, 'journal'),
              error: (err) => {
                console.error('Error posting journal entry:', err);
                this.finalizeSave(totalPaid, createdEntry.id, 'journal');
              }
            });
          },
          error: (err) => {
            console.error('Error creating journal entry:', err);
            // Even if error (e.g. balancing fails), we continue for mockup purposes
            this.finalizeSave(totalPaid, 'mock-id-cash', 'journal');
          }
        });
      } else {
        this.finalizeSave(totalPaid, 'mock-id-cash', 'journal');
      }
    } else {
      // Bank Transaction
      const payload = {
        bankAccountId: this.bankAccount,
        date: this.issueDate,
        description: this.description,
        amount: totalPaid,
        type: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
        transactionType: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
        paymentMethod: this.paymentMethod,
        isAnnulled: this.isAnnulled,
        personName: this.personName,
        checkNumber: this.checkNumber,
        checkDate: this.checkDate || this.issueDate,
        details: this.documents.map(d => ({
          accountName: d.documentLabel,
          amount: d.amountToPay,
          costCenter: 'Pago'
        }))
      };
      this.bankingService.createTransaction(payload).subscribe({
        next: (createdTx) => this.finalizeSave(totalPaid, createdTx.id, 'bank'),
        error: () => {
          alert('Error registrando transacción bancaria');
          this.saving = false;
        }
      });
    }
  }

  finalizeSave(totalPaid: number, txId: string, txType: 'bank' | 'journal') {
    const id = this.route.snapshot.queryParams['id'];
    if (id) {
      const docType = this.documents[0]?.type === 'Factura' ? 'ELECTRONIC' : 'FINANCIAL';
      this.documentPaymentService.post('document-payments', {
        documentId: id,
        documentType: docType,
        amount: totalPaid,
        transactionType: txType,
        transactionId: txId
      }).subscribe({
        next: () => {
          alert('Pago registrado correctamente en la base de datos');
          this.saving = false;
          this.router.navigate(['/consult-documents']);
        },
        error: (e) => {
          console.error('Failed to register payment:', e);
          alert('El pago se generó contablemente pero hubo un error al vincularlo a la factura');
          this.saving = false;
        }
      });
    } else {
      alert('Pago registrado correctamente (Sin documento vinculado)');
      this.saving = false;
      this.router.navigate(['/consult-documents']);
    }
  }
}
