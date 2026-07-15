import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DocumentConsultService } from '../../core/services/document-consult.service';
import { DocumentConsultItem } from '../../models/document-consult.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consult-documents',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './consult-documents.component.html',
  styleUrl: './consult-documents.component.scss',
})
export class ConsultDocumentsComponent implements OnInit {
  searchExpanded = true;
  loading = false;
  documents: DocumentConsultItem[] = [];
  selectedIds = new Set<string>();
  activeDropdown: string | null = null;

  filters = {
    documentNumber: '',
    person: '',
    documentTypeCode: 'ALL',
    reviewStatus: 'ALL',
    processingStatus: 'ALL',
    emissionFilter: 'ALL',
    dateFrom: '',
    dateTo: '',
    personType: 'SUPPLIER',
    purchaseOrder: '',
    quickFilter: '',
  };

  documentTypes = [
    { value: 'ALL', label: 'Todos' },
    { value: '01', label: 'Factura' },
    { value: '03', label: 'Liquidación de compra' },
    { value: '04', label: 'Nota de crédito' },
    { value: '05', label: 'Nota de débito' },
    { value: '07', label: 'Retención' },
  ];

  statusOptions = [
    { value: 'ALL', label: 'Todos' },
    { value: 'PENDING_REVIEW', label: 'Por revisar' },
    { value: 'REVIEWED', label: 'Revisado' },
    { value: 'NOT_REVIEWED', label: 'No revisado' },
  ];

  processingOptions = [
    { value: 'ALL', label: 'Todos' },
    { value: 'PARTIAL', label: 'Parcial' },
    { value: 'PENDING_PROCESS', label: 'Por procesar' },
  ];

  personTypes = [
    { value: 'SUPPLIER', label: 'Proveedor' },
    { value: 'CUSTOMER', label: 'Cliente' },
  ];

  quickFilters = [
    { key: 'ELECTRONIC', label: 'Seleccionar Electrónicos' },
    { key: 'UNAUTHORIZED', label: 'Documentos no autorizados' },
    { key: 'RETENTION_PENDING', label: 'Retenciones no autorizadas' },
  ];

  constructor(private consultService: DocumentConsultService) {}

  ngOnInit() {
    this.search();
  }

  toggleSearchPanel() {
    this.searchExpanded = !this.searchExpanded;
  }

  applyQuickFilter(key: string) {
    this.filters.quickFilter =
      this.filters.quickFilter === key ? '' : key;
    this.search();
  }

  search() {
    this.loading = true;
    const payload: Record<string, string> = {};

    if (this.filters.documentNumber) {
      payload['documentNumber'] = this.filters.documentNumber;
    }
    if (this.filters.person) payload['person'] = this.filters.person;
    if (this.filters.documentTypeCode !== 'ALL') {
      payload['documentTypeCode'] = this.filters.documentTypeCode;
    }
    if (this.filters.reviewStatus !== 'ALL') {
      payload['reviewStatus'] = this.filters.reviewStatus;
    }
    if (this.filters.processingStatus !== 'ALL') {
      payload['processingStatus'] = this.filters.processingStatus;
    }
    if (this.filters.dateFrom) payload['dateFrom'] = this.filters.dateFrom;
    if (this.filters.dateTo) payload['dateTo'] = this.filters.dateTo;
    if (this.filters.quickFilter) {
      payload['quickFilter'] = this.filters.quickFilter;
    }

    this.consultService.search(payload).subscribe({
      next: (data) => {
        this.documents = data;
        this.loading = false;
        this.selectedIds.clear();
      },
      error: () => {
        this.loading = false;
        alert('Error al consultar documentos');
      },
    });
  }

  clearFilters() {
    this.filters = {
      documentNumber: '',
      person: '',
      documentTypeCode: 'ALL',
      reviewStatus: 'ALL',
      processingStatus: 'ALL',
      emissionFilter: 'ALL',
      dateFrom: '',
      dateTo: '',
      personType: 'SUPPLIER',
      purchaseOrder: '',
      quickFilter: '',
    };
    this.search();
  }

  toggleSelect(id: string) {
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }
  }

  toggleSelectAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedIds.clear();
    if (checked) {
      this.documents.forEach((d) => this.selectedIds.add(d.id));
    }
  }

  isAllSelected(): boolean {
    return (
      this.documents.length > 0 &&
      this.documents.every((d) => this.selectedIds.has(d.id))
    );
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  getDisplayStatus(doc: DocumentConsultItem): string {
    return 'Pendiente';
  }

  getStatusIcon(doc: DocumentConsultItem): string {
    const status = this.getDisplayStatus(doc);
    if (status === 'Pagado' || status === 'Cobrado') {
      return 'check';
    }
    return 'schedule'; // Pendiente icon
  }

  getStatusStyle(doc: DocumentConsultItem): any {
    const status = this.getDisplayStatus(doc);
    if (status === 'Pagado' || status === 'Cobrado') {
      return { color: '#16a34a', display: 'flex', 'align-items': 'center', 'font-size': '12px', 'margin-top': '4px' };
    }
    return { color: '#64748b', display: 'flex', 'align-items': 'center', 'font-size': '12px', 'margin-top': '4px' };
  }

  exportExcel() {
    const headers = [
      'Emisión',
      'Persona',
      'Documento',
      'Estado',
      'Neto',
      'Imp.',
      'Total',
      'Ret.',
    ];
    const rows = this.documents.map((d) => [
      d.issueDate,
      d.supplierName,
      d.documentLabel,
      d.statusLabel,
      d.netAmount,
      d.taxAmount,
      d.total,
      d.retentionAmount,
    ]);
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `documentos-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  viewDocument(doc: DocumentConsultItem) {
    Swal.fire({
      icon: 'info',
      html: `
        <div style="font-size: 16px; color: #334155; line-height: 1.5;">
          Documento: ${doc.documentLabel}<br>
          Proveedor: ${doc.supplierName}<br>
          Clave: <br><span style="word-break: break-all; font-size: 14px;">${doc.accessKey || 'No disponible'}</span><br>
          Total: ${this.formatCurrency(doc.total)}
        </div>
      `,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0ea5e9'
    });
  }

  toggleDropdown(id: string) {
    if (this.activeDropdown === id) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = id;
    }
  }

  anularDocumento(doc: DocumentConsultItem) {
    if (confirm('¿Está seguro de anular el documento?')) {
      this.consultService.annulDocument(doc.id).subscribe({
        next: () => {
          alert('Documento anulado');
          this.activeDropdown = null;
          this.search(); // Refresh list
        },
        error: (err) => {
          alert('Error al anular documento');
          console.error(err);
        }
      });
    }
  }
}
