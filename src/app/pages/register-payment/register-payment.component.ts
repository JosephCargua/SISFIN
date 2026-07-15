import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';
import { DocumentConsultService } from '../../core/services/document-consult.service';

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

  get paymentMethods() {
    if (this.transactionType === 'Pago') {
      return ['Cheque', 'Transferencia', 'Caja Chica', 'Tarjeta de Crédito', 'Dinero electrónico'];
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
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private documentService: FinancialDocumentService,
    private documentConsultService: DocumentConsultService
  ) {}

  ngOnInit() {
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
    
    this.documents = [{
      documentLabel: documentLabel,
      issueDate: doc.issueDate,
      type: cat === 'FAC' ? 'Factura' : 'Documento',
      value: doc.total || 0,
      balance: doc.total || 0,
      amountToPay: 0.0
    }];
    this.recalcTotal();
  }

  recalcTotal() {
    this.total = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
  }

  save() {
    this.saving = true;
    setTimeout(() => {
      const id = this.route.snapshot.queryParams['id'];
      if (id) {
        const paidDocs = JSON.parse(localStorage.getItem('paidDocuments') || '{}');
        paidDocs[id] = this.transactionType === 'Pago' ? 'Pagado' : 'Cobrado';
        localStorage.setItem('paidDocuments', JSON.stringify(paidDocs));
      }
      alert('Pago registrado correctamente');
      this.saving = false;
      this.router.navigate(['/consult-documents']);
    }, 1000);
  }
}
