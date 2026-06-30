import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { ElectronicRegistrationService } from '../../core/services/electronic-registration.service';
import {
  AccountOption,
  CostCenterOption,
  DocumentHomologationForm,
  DocumentLineItem,
  DocumentReviewStatus,
  ElectronicDocumentRegistration,
  LineItemHomologationForm,
  ProductOption,
  RetentionCodeOption,
} from '../../models/electronic-registration.model';
import { SearchableSelectComponent } from '../../components/searchable-select/searchable-select.component';

type TabKey = 'partial' | 'pending' | 'processed';

@Component({
  selector: 'app-electronic-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchableSelectComponent],
  templateUrl: './electronic-invoices.component.html',
  styleUrl: './electronic-invoices.component.scss',
})
export class ElectronicInvoicesComponent implements OnInit {
  activeTab: TabKey = 'partial';
  partialDocuments: ElectronicDocumentRegistration[] = [];
  pendingDocuments: ElectronicDocumentRegistration[] = [];
  processedDocuments: ElectronicDocumentRegistration[] = [];
  selectedIds = new Set<string>();
  expandedId: string | null = null;
  homologationForms = new Map<string, DocumentHomologationForm>();
  lineItemsByDoc = new Map<string, DocumentLineItem[]>();
  lineItemForms = new Map<string, LineItemHomologationForm>();
  accounts: AccountOption[] = [];
  products: ProductOption[] = [];
  costCenters: CostCenterOption[] = [];
  retentionIrCodes: RetentionCodeOption[] = [];
  retentionIvaCodes: RetentionCodeOption[] = [];
  units = ['UN', 'KG', 'LT', 'MT', 'GL', 'BX', 'SR'];
  uploading = false;
  homologatingId: string | null = null;
  acceptingLineId: string | null = null;
  uploadError = '';
  dragOver = false;

  constructor(
    private registrationService: ElectronicRegistrationService,
    private api: ApiService,
  ) {}

  ngOnInit() {
    this.loadDocuments();
    this.loadCatalogs();
  }

  get activeDocuments(): ElectronicDocumentRegistration[] {
    if (this.activeTab === 'partial') return this.partialDocuments;
    if (this.activeTab === 'pending') return this.pendingDocuments;
    return this.processedDocuments;
  }

  loadCatalogs() {
    forkJoin({
      accounts: this.api.get<AccountOption[]>('accounts'),
      products: this.api.get<ProductOption[]>('products'),
      costCenters: this.api.get<CostCenterOption[]>('cost-centers'),
      retentionCodes: this.api.get<RetentionCodeOption[]>(
        'tax-calculations/retention-codes',
      ),
    }).subscribe({
      next: ({ accounts, products, costCenters, retentionCodes }) => {
        this.accounts = accounts.map(a => ({ ...a, label: `${a.code} - ${a.name}` }));
        this.products = products.map(p => ({ ...p, label: `${p.code} - ${p.name}` }));
        this.costCenters = costCenters.map(c => ({ ...c, label: `${c.code} - ${c.name}` }));
        this.retentionIrCodes = retentionCodes
          .filter((c) => c.type === 'SOURCE')
          .map(r => ({ ...r, label: `${r.code} - ${r.description}` }));
        this.retentionIvaCodes = retentionCodes
          .filter((c) => c.type === 'IVA')
          .map(r => ({ ...r, label: `${r.code} - ${r.description}` }));
      },
      error: (err) => console.error('Error loading catalogs:', err),
    });
  }

  loadDocuments() {
    this.registrationService.getDocuments('PARTIAL').subscribe({
      next: (data) => {
        this.partialDocuments = data;
        this.syncForms(data);
      },
      error: (err) => console.error('Error loading partial documents:', err),
    });
    this.registrationService.getDocuments('PENDING_PROCESS').subscribe({
      next: (data) => {
        this.pendingDocuments = data;
        this.syncForms(data);
      },
      error: (err) => console.error('Error loading pending documents:', err),
    });
    this.registrationService.getDocuments('PROCESSED').subscribe({
      next: (data) => {
        this.processedDocuments = data;
        this.syncForms(data);
      },
      error: (err) => console.error('Error loading processed documents:', err),
    });
  }

  private syncForms(docs: ElectronicDocumentRegistration[]) {
    for (const doc of docs) {
      this.homologationForms.set(doc.id, this.formFromDocument(doc));
    }
  }

  private formFromDocument(doc: ElectronicDocumentRegistration): DocumentHomologationForm {
    return {
      payableAccountId: doc.payableAccountId || '',
      tipAccountId: doc.tipAccountId || '',
      costCenterId: doc.costCenterId || '',
      recurringAccountId: doc.recurringAccountId || '',
      useRecurringAccount: doc.useRecurringAccount || false,
      retentionIrCode: doc.retentionIrCode || '',
      retentionIvaCode: doc.retentionIvaCode || '',
      generateRetention: doc.generateRetention || false,
      updatePersonData: doc.updatePersonData || false,
    };
  }

  getForm(docId: string): DocumentHomologationForm {
    if (!this.homologationForms.has(docId)) {
      const doc = [...this.partialDocuments, ...this.pendingDocuments, ...this.processedDocuments].find(
        (d) => d.id === docId,
      );
      this.homologationForms.set(
        docId,
        doc ? this.formFromDocument(doc) : this.emptyForm(),
      );
    }
    return this.homologationForms.get(docId)!;
  }

  private emptyForm(): DocumentHomologationForm {
    return {
      payableAccountId: '',
      tipAccountId: '',
      costCenterId: '',
      recurringAccountId: '',
      useRecurringAccount: false,
      retentionIrCode: '',
      retentionIvaCode: '',
      generateRetention: false,
      updatePersonData: false,
    };
  }

  accountLabel(id: string): string {
    const account = this.accounts.find((a) => a.id === id);
    return account ? `${account.code} - ${account.name}` : '';
  }

  setTab(tab: TabKey) {
    this.activeTab = tab;
    this.selectedIds.clear();
    this.expandedId = null;
  }

  toggleExpand(docId: string) {
    if (this.expandedId === docId) {
      this.expandedId = null;
      return;
    }
    this.expandedId = docId;
    this.loadLineItems(docId);
  }

  isExpanded(docId: string): boolean {
    return this.expandedId === docId;
  }

  loadLineItems(docId: string) {
    this.registrationService.getLineItems(docId).subscribe({
      next: (items) => {
        this.lineItemsByDoc.set(docId, items);
        for (const item of items) {
          const key = this.lineFormKey(docId, item.id);
          if (!this.lineItemForms.has(key)) {
            this.lineItemForms.set(key, this.emptyLineForm());
          }
        }
      },
      error: (err) => console.error('Error loading line items:', err),
    });
  }

  lineFormKey(docId: string, lineId: string): string {
    return `${docId}_${lineId}`;
  }

  getLineItems(docId: string): DocumentLineItem[] {
    return this.lineItemsByDoc.get(docId) || [];
  }

  getPendingLineItem(docId: string): DocumentLineItem | null {
    return this.getLineItems(docId).find((l) => !l.isHomologated) || null;
  }

  getPendingLineItemsCount(docId: string): number {
    return this.getLineItems(docId).filter((l) => !l.isHomologated).length;
  }

  getLineForm(docId: string, lineId: string): LineItemHomologationForm {
    const key = this.lineFormKey(docId, lineId);
    if (!this.lineItemForms.has(key)) {
      this.lineItemForms.set(key, this.emptyLineForm());
    }
    return this.lineItemForms.get(key)!;
  }

  private emptyLineForm(): LineItemHomologationForm {
    return {
      mappingType: 'PRODUCT',
      internalCode: '',
      unit: 'UN',
      mappedProductId: '',
      mappedAccountId: '',
    };
  }

  acceptLineItem(docId: string, line: DocumentLineItem) {
    const form = this.getLineForm(docId, line.id);
    if (form.mappingType === 'PRODUCT' && !form.mappedProductId) {
      alert('Seleccione el producto o cuenta a homologar');
      return;
    }
    if (form.mappingType === 'ACCOUNT' && !form.mappedAccountId) {
      alert('Seleccione la cuenta contable a homologar');
      return;
    }

    this.acceptingLineId = line.id;
    this.registrationService.homologateLineItem(docId, line.id, form).subscribe({
      next: () => {
        this.acceptingLineId = null;
        this.loadLineItems(docId);
      },
      error: (err) => {
        this.acceptingLineId = null;
        alert(err.error?.message || 'Error al aceptar la homologación');
      },
    });
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      await this.processFiles(Array.from(input.files));
      input.value = '';
    }
  }

  async onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;
    const files = event.dataTransfer?.files;
    if (files?.length) {
      await this.processFiles(Array.from(files));
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave() {
    this.dragOver = false;
  }

  async processFiles(files: File[]) {
    this.uploading = true;
    this.uploadError = '';
    
    try {
      const finalFiles: File[] = [];
      
      for (const file of files) {
        if (file.name.toLowerCase().endsWith('.txt')) {
          const text = await file.text();
          const lines = text.split('\n').map(l => l.trim()).filter(l => l);
          if (lines.length > 0) lines.shift(); // Remove header
          
          for (const line of lines) {
            const cols = line.split('\t');
            if (cols.length < 11) continue;
            
            const [ruc, razonSocial, tipo, serie, clave, fAuto, fEmi, idReceptor, valSinImp, iva, total] = cols;
            const parts = serie.split('-');
            const estab = parts[0] || '001';
            const ptoEmi = parts[1] || '001';
            const secuencial = parts[2] || '000000001';
            
            const xml = `
            <factura>
              <infoTributaria>
                <ruc>${ruc}</ruc>
                <razonSocial><![CDATA[${razonSocial}]]></razonSocial>
                <codDoc>01</codDoc>
                <estab>${estab}</estab>
                <ptoEmi>${ptoEmi}</ptoEmi>
                <secuencial>${secuencial}</secuencial>
                <claveAcceso>${clave}</claveAcceso>
              </infoTributaria>
              <infoFactura>
                <fechaEmision>${fEmi}</fechaEmision>
                <importeTotal>${total}</importeTotal>
              </infoFactura>
              <detalles>
                <detalle>
                  <codigoPrincipal>TXT</codigoPrincipal>
                  <descripcion>Consolidado TXT</descripcion>
                  <cantidad>1</cantidad>
                  <precioUnitario>${valSinImp}</precioUnitario>
                  <impuestos>
                    <impuesto>
                      <tarifa>${iva}</tarifa>
                    </impuesto>
                  </impuestos>
                </detalle>
              </detalles>
            </factura>`;
            
            const xmlBlob = new Blob([xml], { type: 'application/xml' });
            const xmlFile = new File([xmlBlob], `${clave}.xml`, { type: 'application/xml' });
            finalFiles.push(xmlFile);
          }
        } else {
          finalFiles.push(file);
        }
      }
      
      if (finalFiles.length > 0) {
        this.uploadFiles(finalFiles);
      } else {
        this.uploading = false;
        this.uploadError = 'No se encontraron facturas válidas en el archivo TXT.';
      }
    } catch (e) {
      this.uploading = false;
      this.uploadError = 'Error al leer el archivo TXT.';
    }
  }

  uploadFiles(files: File[]) {
    let completed = 0;
    let hadError = false;

    files.forEach((file) => {
      this.registrationService.uploadDocument(file).subscribe({
        next: () => {
          completed++;
          if (completed === files.length) {
            this.uploading = false;
            if (!hadError) this.loadDocuments();
          }
        },
        error: (err) => {
          hadError = true;
          completed++;
          this.uploadError = err.error?.message || `Error al subir ${file.name}`;
          if (completed === files.length) {
            this.uploading = false;
            this.loadDocuments();
          }
        },
      });
    });
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
      this.activeDocuments.forEach((d) => this.selectedIds.add(d.id));
    }
  }

  isAllSelected(): boolean {
    return (
      this.activeDocuments.length > 0 &&
      this.activeDocuments.every((d) => this.selectedIds.has(d.id))
    );
  }

  homologate(docId: string) {
    const form = this.getForm(docId);
    if (!form.payableAccountId) {
      alert('Seleccione la cuenta por pagar antes de homologar');
      return;
    }

    const pending = this.getPendingLineItemsCount(docId);
    if (pending > 0) {
      alert(
        `Quedan ${pending} producto(s) del proveedor por homologar. Use Aceptar en cada ítem.`,
      );
      return;
    }

    this.homologatingId = docId;
    this.registrationService
      .homologate(docId, {
        payableAccountId: form.payableAccountId || undefined,
        tipAccountId: form.tipAccountId || undefined,
        costCenterId: form.costCenterId || undefined,
        recurringAccountId: form.recurringAccountId || undefined,
        useRecurringAccount: form.useRecurringAccount,
        retentionIrCode: form.retentionIrCode || undefined,
        retentionIvaCode: form.retentionIvaCode || undefined,
        generateRetention: form.generateRetention,
        updatePersonData: form.updatePersonData,
      })
      .subscribe({
        next: () => {
          this.homologatingId = null;
          this.expandedId = null;
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: 'success',
            title: 'La factura fue procesada correctamente'
          });
          this.loadDocuments();
        },
        error: (err) => {
          this.homologatingId = null;
          alert(err.error?.message || 'Error al homologar el documento');
        },
      });
  }

  updateReviewStatus(id: string, status: DocumentReviewStatus) {
    this.registrationService.updateReviewStatus(id, status).subscribe({
      next: () => this.loadDocuments(),
      error: (err) =>
        alert(err.error?.message || 'Error al actualizar el estado'),
    });
  }

  markReady(id: string) {
    this.registrationService.markReady(id).subscribe({
      next: () => this.loadDocuments(),
      error: (err) =>
        alert(err.error?.message || 'Error al marcar como listo'),
    });
  }

  deleteDocument(id: string) {
    import('sweetalert2').then(module => {
      const Swal = module.default;
      Swal.fire({
        title: '¿Eliminar este documento del registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.registrationService.deleteDocument(id).subscribe({
            next: () => {
              if (this.expandedId === id) this.expandedId = null;
              this.homologationForms.delete(id);
              this.lineItemsByDoc.delete(id);
              this.loadDocuments();
            },
            error: (err) => alert(err.error?.message || 'Error al eliminar'),
          });
        }
      });
    });
  }

  viewXml(doc: ElectronicDocumentRegistration) {
    alert(
      `Documento: ${doc.documentLabel}\nProveedor: ${doc.supplierName}\n` +
        (doc.accessKey ? `Clave: ${doc.accessKey}\n` : '') +
        (doc.total != null ? `Total: $${doc.total}` : ''),
    );
  }

  getReviewLabel(status: DocumentReviewStatus): string {
    const labels: Record<DocumentReviewStatus, string> = {
      REVIEWED: 'Revisado',
      NOT_REVIEWED: 'No revisado',
      PENDING_REVIEW: 'Por Revisar',
    };
    return labels[status];
  }

  getReviewClass(status: DocumentReviewStatus): string {
    const classes: Record<DocumentReviewStatus, string> = {
      REVIEWED: 'status-reviewed',
      NOT_REVIEWED: 'status-not-reviewed',
      PENDING_REVIEW: 'status-pending-review',
    };
    return classes[status];
  }
}
