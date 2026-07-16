import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';
import { DocumentConsultService } from '../../core/services/document-consult.service';

@Component({
  selector: 'app-document-crossing',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  
  mockAccounts = [
    { code: '1.1.1.1', name: 'Caja', group: 'Activo' },
    { code: '1.1.1.2', name: 'Caja Chica', group: 'Activo' },
    { code: '1.1.1.3.1', name: 'Banco Internacional', group: 'Activo' },
    { code: '1.1.1.4', name: 'Banco dinero electrónico', group: 'Activo' },
    { code: '1.1.2.1', name: 'Activos Financieros con cambios en resultados', group: 'Activo' },
    { code: '1.1.2.2', name: 'Activos Financieros Disponibles para la Venta', group: 'Activo' },
    { code: '1.1.2.3', name: 'Activos Financieros mantenidos hasta el vencimiento', group: 'Activo' },
    { code: '1.1.2.4', name: '(-) Provisión por Deterioro', group: 'Activo' },
    { code: '1.1.2.5.1', name: 'Clientes Comerciales', group: 'Activo' },
  ];

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
    
    const id = this.route.snapshot.queryParams['id'];
    const paidDocs = JSON.parse(localStorage.getItem('paidDocuments') || '{}');
    let prevPaid = 0;
    if (id && paidDocs[id]) {
      if (typeof paidDocs[id] === 'object' && paidDocs[id].amount) {
        prevPaid = paidDocs[id].amount;
      } else if (typeof paidDocs[id] === 'string') {
        prevPaid = Number(doc.total) || 0;
      }
    }
    
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

  selectAccount(acc: any) {
    this.accounts.push({
      accountName: acc.name,
      amountToPay: 0
    });
    this.showAccountModal = false;
  }

  save() {
    this.saving = true;
    setTimeout(() => {
      const id = this.route.snapshot.queryParams['id'];
      if (id) {
        const totalPaid = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
        const paidDocs = JSON.parse(localStorage.getItem('paidDocuments') || '{}');
        let currentRecord = paidDocs[id];
        let prevAmount = 0;
        if (typeof currentRecord === 'object' && currentRecord !== null) {
          prevAmount = currentRecord.amount || 0;
        }
        
        paidDocs[id] = { amount: prevAmount + totalPaid, status: 'Cruzado' };
        localStorage.setItem('paidDocuments', JSON.stringify(paidDocs));
      }
      alert('Cruce de documentos registrado correctamente');
      this.saving = false;
      this.router.navigate(['/consult-documents']);
    }, 1000);
  }
}
