import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';

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
    private documentService: FinancialDocumentService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.documentService.getById(id).subscribe({
          next: (doc) => {
            this.personName = doc.personName || '';
            this.documentLabel = `${doc.documentCategory === 'INVOICE' ? 'FAC' : 'DOC'} ${doc.documentNumber}`;
            this.description = `Pago de doc. ${this.documentLabel}, ${this.personName}`;
            
            this.documents = [{
              documentLabel: this.documentLabel,
              issueDate: doc.issueDate,
              type: doc.documentCategory === 'INVOICE' ? 'Factura' : 'Documento',
              value: doc.total || 0,
              balance: doc.total || 0,
              amountToPay: 0.0
            }];
          },
          error: () => {
            alert('Error al cargar la información del documento');
          }
        });
      }
    });
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
