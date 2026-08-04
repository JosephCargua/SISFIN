import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';
import { DocumentConsultService } from '../../core/services/document-consult.service';
import { ApiService } from '../../core/services/api.service';
import { BankingService } from '../../core/services/banking.service';
import Swal from 'sweetalert2';

import { PersonaSelectorModalComponent } from '../../components/persona-selector-modal/persona-selector-modal.component';
import { Persona } from '../../models/persona.model';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-document-crossing',
  standalone: true,
  imports: [CommonModule, FormsModule, PersonaSelectorModalComponent, AccountSelectorModalComponent],
  templateUrl: './document-crossing.component.html',
  styleUrl: './document-crossing.component.scss'
})
export class DocumentCrossingComponent implements OnInit {
  issueDate = '2026-06-30';
  personName = '';
  documentLabel = '';
  balance = 0.0;
  transactionMethod = 'Cheque propio';
  description = '';
  saving = false;

  documents: any[] = [];
  advances: any[] = [];
  accounts: any[] = [];
  activeTab = 'Documentos';
  showAccountModal = false;
  showPersonaModal = false;
  targetPersonaIndex: number = -1; // -1 for main person, >=0 for advances

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private documentService: FinancialDocumentService,
    private documentConsultService: DocumentConsultService,
    private documentPaymentService: ApiService,
    private bankingService: BankingService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.documentConsultService.getById(id).subscribe({
          next: (doc) => this.populateData(doc),
          error: () => {
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
    const cat = doc.documentCategory === 'INVOICE' || doc.documentTypeCode === '01' ? 'FAC' : 'DOC';
    this.documentLabel = `${cat} ${doc.documentNumber}`;
    this.description = `Pago de doc. ${this.documentLabel}, ${this.personName}`;
    
    const prevPaid = Number(doc.amountPaid) || 0;
    const value = Number(doc.total) || 0;
    const balance = Math.max(0, value - prevPaid);
    
    this.balance = balance;
    
    this.documents = [{
      documentLabel: this.documentLabel,
      issueDate: doc.issueDate,
      type: cat === 'FAC' ? 'Factura' : 'Documento',
      value: value,
      balance: balance,
      amountToPay: balance
    }];
  }

  formatCurrency(amount: number): string {
    if (amount === undefined || amount === null || isNaN(amount)) return '$0.00';
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  addAdvance() {
    this.advances.push({
      person: this.personName,
      advance: '',
      issueDate: '',
      value: 0,
      balance: 0,
      amountToPay: 0
    });
  }

  addAccount() {
    this.showAccountModal = true;
  }

  onAccountSelected(acc: Account) {
    this.accounts.push({
      accountName: acc.name,
      amountToPay: 0
    });
  }

  openPersonaModal(index: number = -1) {
    this.targetPersonaIndex = index;
    this.showPersonaModal = true;
  }

  onPersonaSelected(persona: Persona) {
    if (this.targetPersonaIndex === -1) {
      this.personName = persona.nombre;
    } else {
      this.advances[this.targetPersonaIndex].person = persona.nombre;
    }
  }

  save() {
    this.saving = true;
    const totalPaid = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
    
    // Preparar transacción bancaria de tipo 'Cruce'
    const bankPayload: any = {
      bankAccountId: null, // As it is a crossing, might not hit a bank account directly, or could be mapped
      date: this.issueDate,
      description: this.description,
      amount: totalPaid,
      type: 'Egreso', // O Ingreso, dependiendo
      transactionType: 'Cruce',
      paymentMethod: this.transactionMethod,
      payToOrderOf: this.personName,
      personName: this.personName,
      details: this.documents.map(d => ({
        accountName: d.documentLabel || 'S/N',
        amount: d.amountToPay,
        costCenter: 'N/A'
      }))
    };

    this.bankingService.createTransaction(bankPayload).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Cruce de documentos registrado correctamente', 'success').then(() => {
          this.router.navigate(['/payment-records']);
        });
        this.saving = false;
      },
      error: () => {
        Swal.fire('Error', 'Hubo un problema al registrar el cruce', 'error');
        this.saving = false;
      }
    });
  }
}
