import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-annulled-documents',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './annulled-documents.component.html',
  styleUrl: './annulled-documents.component.scss'
})
export class AnnulledDocumentsComponent {
  filters = {
    documentNumber: '',
    authNumber: '',
    documentType: 'Todos',
    dateFrom: '',
    dateTo: ''
  };

  documents = [
    {
      annulledDate: '24/06/2026',
      documentType: 'Retención',
      documentNumber: '001-011-000006098',
      direction: 'Recibido',
      authorization: '2406202607169170329700120010110000060980000609811'
    },
    {
      annulledDate: '24/06/2026',
      documentType: 'Retención',
      documentNumber: '001-011-000006098',
      direction: 'Recibido',
      authorization: '2406202607169170329700120010110000060980000609811'
    },
    {
      annulledDate: '19/06/2025',
      documentType: 'Factura',
      documentNumber: '001-100-000000026',
      direction: 'Emitido',
      authorization: '1906202501169001946500120011000000000261180669715'
    },
    {
      annulledDate: '13/05/2025',
      documentType: 'Factura',
      documentNumber: '001-100-000000021',
      direction: 'Emitido',
      authorization: '1305202501169001946500120011000000000210993507111'
    },
    {
      annulledDate: '21/02/2025',
      documentType: 'Factura',
      documentNumber: '001-100-000000015',
      direction: 'Emitido',
      authorization: '2102202501169001946500120011000000000150570702115'
    },
    {
      annulledDate: '19/02/2025',
      documentType: 'Factura',
      documentNumber: '001-100-000000012',
      direction: 'Emitido',
      authorization: '1902202501169001946500120011000000000120560736018'
    }
  ];

  search() {
    // Implement API search here
    console.log('Searching with filters', this.filters);
  }
}
