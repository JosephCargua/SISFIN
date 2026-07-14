import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        // Load data based on ID
        this.personName = 'TRANSPORTES SACHA KASHA S.A.';
        this.documentLabel = 'FAC 001-019-000000293';
        this.description = `Doc. 001-019-000000293, 019 1600489619001 Ruth Iveth Soria Castro TBC2819 CESLAO MARIN SECTOR LA Y papanguturismo@yahoo.es`;
        
        this.documents = [{
          documentLabel: 'FAC 001-019-000000293',
          issueDate: '30/06/2026',
          type: 'Factura',
          value: 30.0,
          balance: 0.0,
          amountToPay: 0.0
        }];
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
