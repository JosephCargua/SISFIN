import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DocumentConsultService } from '../../core/services/document-consult.service';
import { DocumentConsultItem } from '../../models/document-consult.model';
import { BankingService } from '../../core/services/banking.service';
import { JournalEntryService } from '../../core/services/journal-entry.service';
import Swal from 'sweetalert2';
import { ExcelExportService } from '../../core/services/excel-export.service';

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
    statusFilter: 'ALL',
    emissionFilter: 'ALL',
    dateFrom: '',
    dateTo: '',
    personType: 'ALL',
    purchaseOrder: '',
  };

  documentTypes = [
    { value: 'ALL', label: 'Todos' },
    { value: '01', label: 'Factura' },
    { value: '02', label: 'Nota de Venta' },
    { value: '03', label: 'Liquidación de Compra' },
    { value: '41', label: 'Liquidación de Compra por Reembolso' },
    { value: '48', label: 'Liquidación de Compra de Bienes Muebles Usados' },
    { value: '06', label: 'Documentos Emitidos por Instituciones Financieras' },
    { value: '08', label: 'Documentos de Importación' },
    { value: '09', label: 'Otros Documentos Autorizados' },
    { value: '05', label: 'Nota de Débito' },
    { value: '04', label: 'Nota de Crédito' },
    { value: '00', label: 'Nota de Crédito Interna' },
    { value: 'NA', label: 'Documento no autorizado' },
    { value: '11', label: 'DNA de Importacion / Factura Proforma' },
    { value: '12', label: 'Declaración Aduanera Única' },
    { value: '15', label: 'Tickets Aéreos' },
    { value: '16', label: 'Boletos o entradas a espectáculos públicos' },
    { value: '17', label: 'Carta de porte aéreo' },
    { value: '19', label: 'Tiquetes o vales emitidos por maquinas registradoras' },
    { value: '20', label: 'Documentos Emitidos por Instituciones del Estado' },
  ];

  statusOptions = [
    { value: 'ALL', label: 'Todos' },
    { value: 'PENDING', label: 'Pendiente' },
    { value: 'ANNULLED', label: 'Anulado' },
    { value: 'COLLECTED', label: 'Cobrado' },
    { value: 'PAID', label: 'Pagado' },
  ];

  emissionOptions = [
    { value: 'ALL', label: 'Todos' },
    { value: 'FISICA', label: 'Fisica' },
    { value: 'ELECTRONICA', label: 'Electronica' },
  ];

  personTypes = [
    { value: 'ALL', label: 'Todos' },
    { value: 'CUSTOMER', label: 'Cliente' },
    { value: 'SUPPLIER', label: 'Proveedor' },
  ];

  quickFilters = [
    { key: 'ELECTRONIC', label: 'Seleccionar Electrónicos' },
    { key: 'UNAUTHORIZED', label: 'Documentos no autorizados' },
    { key: 'RETENTION_PENDING', label: 'Retenciones no autorizadas' },
  ];

  constructor(
    private consultService: DocumentConsultService,
    private bankingService: BankingService,
    private journalEntryService: JournalEntryService,
    private router: Router,
    private excelService: ExcelExportService
  ) {}

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
    if (this.filters.statusFilter !== 'ALL') {
      payload['statusFilter'] = this.filters.statusFilter;
    }
    if (this.filters.emissionFilter !== 'ALL') {
      payload['emissionFilter'] = this.filters.emissionFilter;
    }
    if (this.filters.dateFrom) payload['dateFrom'] = this.filters.dateFrom;
    if (this.filters.dateTo) payload['dateTo'] = this.filters.dateTo;
    if (this.filters.personType && this.filters.personType !== 'ALL') {
      payload['personType'] = this.filters.personType;
    }
    if (this.filters.purchaseOrder) {
      payload['purchaseOrder'] = this.filters.purchaseOrder;
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

  editDocument(doc: DocumentConsultItem) {
    // Check if it's an electronic document and it's not homologated (REVIEWED means Homologado)
    if (doc.reviewStatus && doc.reviewStatus !== 'REVIEWED') {
      alert('Para acceder, la factura electrónica debe estar homologada primero.');
      return;
    }
    const route = doc.personTypeLabel === 'Proveedor' ? '/register-purchase-expense' : '/register-document';
    this.router.navigate([route], { queryParams: { id: doc.id } });
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

  getRemainingBalance(doc: DocumentConsultItem): number {
    return doc.balance || 0;
  }

  getDisplayStatus(doc: DocumentConsultItem): string {
    if (doc.isPaid) {
      return 'Pagado';
    } else if (doc.amountPaid && doc.amountPaid > 0) {
      return 'Parcial';
    }
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
    const columns = [
      { header: 'Emisión', key: 'Emision', width: 12 },
      { header: 'Persona', key: 'Persona', width: 35 },
      { header: 'Documento', key: 'Documento', width: 25 },
      { header: 'Estado', key: 'Estado', width: 15 },
      { header: 'Neto', key: 'Neto', width: 12, isCurrency: true },
      { header: 'Impuestos', key: 'Imp', width: 12, isCurrency: true },
      { header: 'Total', key: 'Total', width: 12, isCurrency: true },
      { header: 'Retención', key: 'Ret', width: 12, isCurrency: true }
    ];

    const dataToExport = this.documents.map((d) => ({
      Emision: new Date(d.issueDate).toLocaleDateString(),
      Persona: d.supplierName,
      Documento: d.documentLabel,
      Estado: d.statusLabel,
      Neto: Number(d.netAmount) || 0,
      Imp: Number(d.taxAmount) || 0,
      Total: Number(d.total) || 0,
      Ret: Number(d.retentionAmount) || 0
    }));

    this.excelService.exportToExcel({
      title: 'Consulta de Documentos',
      subtitle: `Período: ${this.filters.dateFrom || '-'} a ${this.filters.dateTo || '-'}`,
      fileName: `Consulta_Documentos_${new Date().toISOString().split('T')[0]}`,
      columns: columns,
      data: dataToExport
    });
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
    Swal.fire({
      title: '¿Anular documento?',
      text: '¿Está seguro de anular este documento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f59e0b',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Sí, anular',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.consultService.annulDocument(doc.id).subscribe({
          next: () => {
            Swal.fire('Anulado', 'Documento anulado correctamente.', 'success');
            this.activeDropdown = null;
            this.search(); // Refresh list
          },
          error: (err) => {
            Swal.fire('Error', 'Error al anular documento', 'error');
            console.error(err);
          }
        });
      }
    });
  }

  eliminarDocumento(doc: DocumentConsultItem) {
    Swal.fire({
      title: '¿Eliminar documento?',
      text: '¿Está seguro de eliminar este documento de forma definitiva?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.consultService.deleteDocument(doc.id).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'Documento eliminado correctamente.', 'success');
            this.search(); // Refresh list so it disappears
          },
          error: (err) => {
            Swal.fire('Error', 'Error al eliminar el documento. Es posible que tenga pagos asociados.', 'error');
            console.error(err);
          }
        });
      }
    });
  }

  hasPayments(doc: DocumentConsultItem): boolean {
    return !!doc.amountPaid && doc.amountPaid > 0;
  }

  revertirPago(doc: DocumentConsultItem, silent: boolean = false) {
    if (silent) {
      this.executeRevertirPago(doc, silent);
      return;
    }

    Swal.fire({
      title: '¿Revertir pago?',
      text: '¿Está seguro de revertir el pago de este documento? Esta acción eliminará las transacciones bancarias o contables generadas.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Sí, revertir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.executeRevertirPago(doc, false);
      }
    });
  }

  private executeRevertirPago(doc: DocumentConsultItem, silent: boolean) {
    this.consultService.revertPayments(doc.id).subscribe({
      next: () => {
        this.activeDropdown = null;
        if (!silent) {
          Swal.fire('Revertido', 'Pago revertido con éxito.', 'success');
          this.search(); // Forzar actualización de la lista
        }
      },
      error: (e) => {
        if (!silent) Swal.fire('Error', 'Error al revertir el pago', 'error');
        console.error(e);
      }
    });
  }

  modificarPago(doc: DocumentConsultItem) {
    Swal.fire({
      title: '¿Modificar pago?',
      text: 'Para modificar el pago, primero se anulará el pago actual (y sus movimientos bancarios/contables) y se le redirigirá a la pantalla de pago para volver a ingresarlo. ¿Desea continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0ea5e9',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Revertir pago de forma silenciosa
        this.revertirPago(doc, true);
        // Navegar a register-payment
        const route = '/register-payment';
        this.router.navigate([route], { queryParams: { id: doc.id } });
      }
    });
  }
}
