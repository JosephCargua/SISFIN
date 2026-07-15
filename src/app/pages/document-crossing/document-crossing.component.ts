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
    
    this.documents = [{
      documentLabel: this.documentLabel,
      issueDate: doc.issueDate,
      type: cat === 'FAC' ? 'Factura' : 'Documento',
      value: doc.total || 0,
      balance: doc.total || 0,
      amountToPay: 0.0
    }];
  }

  save() {
    this.saving = true;
    setTimeout(() => {
      alert('Documento cruzado correctamente');
      this.saving = false;
      this.router.navigate(['/consult-documents']);
    }, 1000);
  }
}
