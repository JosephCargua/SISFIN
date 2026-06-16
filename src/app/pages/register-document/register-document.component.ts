import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';
import { PayablesService } from '../../core/services/payables.service';
import { ReceivablesService } from '../../core/services/receivables.service';
import { AccountService } from '../../core/services/account.service';
import { InventoryService } from '../../core/services/inventory.service';
import { AutomationService } from '../../core/services/automation.service';
import {
  ServiceLine,
  AccountLine,
  CostCenterLine,
  RetentionLine,
  PaymentLine,
  DocumentPersonType,
  DocumentCategory,
  FinancialDocumentLinePayload,
} from '../../models/financial-document.model';
import { Supplier } from '../../models/payables.model';
import { Customer } from '../../models/receivables.model';
import { Account } from '../../models/account.model';
import { Product } from '../../models/inventory.model';
import { CostCenter } from '../../models/automation.model';

type DetailTab = 'services' | 'accounts' | 'costCenter' | 'retention' | 'payment';

interface PersonOption {
  id: string;
  identification: string;
  name: string;
}

@Component({
  selector: 'app-register-document',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-document.component.html',
  styleUrl: './register-document.component.scss',
})
export class RegisterDocumentComponent implements OnInit {
  activeTab: DetailTab = 'services';
  saving = false;

  issueDate = new Date().toISOString().split('T')[0];
  personType: DocumentPersonType = 'CUSTOMER';
  documentCategory: DocumentCategory = 'INVOICE';
  documentNumber = '';
  authorization = '';
  personId = '';
  personName = '';
  personIdentification = '';
  reference = '';
  seller = '';
  dueDays = 30;
  purchaseOrderRef = '';
  description = '';
  ice = 0;

  serviceLines: ServiceLine[] = [];
  accountLines: AccountLine[] = [];
  costCenterLines: CostCenterLine[] = [];
  retentionLines: RetentionLine[] = [];
  paymentLines: PaymentLine[] = [];

  suppliers: Supplier[] = [];
  customers: Customer[] = [];
  accounts: Account[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];

  sellerOptions = [
    { value: '', label: 'Seleccionar vendedor...' },
    { value: 'vendedor-1', label: 'Vendedor principal' },
    { value: 'vendedor-2', label: 'Vendedor secundario' },
  ];

  personTypeOptions = [
    { value: 'CUSTOMER' as DocumentPersonType, label: 'Cliente' },
    { value: 'SUPPLIER' as DocumentPersonType, label: 'Proveedor' },
  ];

  documentCategoryOptions = [
    { value: 'INVOICE' as DocumentCategory, label: 'Factura' },
    { value: 'CREDIT_NOTE' as DocumentCategory, label: 'Nota de crédito' },
    { value: 'DEBIT_NOTE' as DocumentCategory, label: 'Nota de débito' },
  ];

  ivaOptions = [
    { value: 15, label: '15%' },
    { value: 5, label: '5%' },
    { value: 0, label: '0%' },
  ];

  paymentMethodOptions = [
    { value: 'CASH', label: 'Efectivo' },
    { value: 'TRANSFER', label: 'Transferencia' },
    { value: 'CHECK', label: 'Cheque' },
    { value: 'CARD', label: 'Tarjeta' },
  ];

  totals = {
    subtotal15: 0,
    subtotal5: 0,
    subtotal0: 0,
    discount: 0,
    iva15: 0,
    iva5: 0,
    ice: 0,
    total: 0,
  };

  constructor(
    private documentService: FinancialDocumentService,
    private payablesService: PayablesService,
    private receivablesService: ReceivablesService,
    private accountService: AccountService,
    private inventoryService: InventoryService,
    private automationService: AutomationService,
  ) {}

  ngOnInit() {
    this.loadLookups();
  }

  get personOptions(): PersonOption[] {
    const source =
      this.personType === 'CUSTOMER' ? this.customers : this.suppliers;
    return source.map((p) => ({
      id: p.id,
      identification: p.identification,
      name: p.name,
    }));
  }

  loadLookups() {
    this.payablesService.getSuppliers().subscribe({
      next: (data) => (this.suppliers = data),
    });
    this.receivablesService.getCustomers().subscribe({
      next: (data) => (this.customers = data),
    });
    this.accountService.getAll().subscribe({
      next: (data) => (this.accounts = data),
    });
    this.inventoryService.getProducts().subscribe({
      next: (data) => (this.products = data),
    });
    this.automationService.getCostCenters().subscribe({
      next: (data) => (this.costCenters = data),
    });
  }

  onPersonTypeChange() {
    this.personId = '';
    this.personName = '';
    this.personIdentification = '';
  }

  setTab(tab: DetailTab) {
    this.activeTab = tab;
  }

  onPersonSelected() {
    const person = this.personOptions.find((p) => p.id === this.personId);
    if (person) {
      this.personName = person.name;
      this.personIdentification = person.identification;
    }
  }

  addServiceLine() {
    const line: ServiceLine = {
      quantity: 1,
      productId: '',
      productCode: '',
      productName: '',
      unit: 'UND',
      unitPrice: 0,
      ivaRate: 15,
      retIr: 0,
      retIva: 0,
      discount: 0,
      extraDiscount: 0,
      subtotal: 0,
    };
    this.serviceLines.push(line);
    this.recalcServiceLine(line);
    this.recalcTotals();
  }

  removeServiceLine(index: number) {
    this.serviceLines.splice(index, 1);
    this.recalcTotals();
  }

  onProductSelected(line: ServiceLine) {
    const product = this.products.find((p) => p.id === line.productId);
    if (product) {
      line.productCode = product.code;
      line.productName = product.name;
      line.unit = product.unit || 'UND';
      line.unitPrice = Number(product.averageCost);
      this.recalcServiceLine(line);
      this.recalcTotals();
    }
  }

  recalcServiceLine(line: ServiceLine) {
    const base = line.quantity * line.unitPrice - line.discount;
    line.subtotal = Math.round(base * 100) / 100;
  }

  onServiceLineChange(line: ServiceLine) {
    this.recalcServiceLine(line);
    this.recalcTotals();
  }

  recalcTotals() {
    let subtotal15 = 0;
    let subtotal5 = 0;
    let subtotal0 = 0;
    let discount = 0;
    let iva15 = 0;
    let iva5 = 0;

    for (const line of this.serviceLines) {
      discount += line.discount;
      const base = line.quantity * line.unitPrice - line.discount;

      if (line.ivaRate === 15) {
        subtotal15 += base;
        iva15 += base * 0.15;
      } else if (line.ivaRate === 5) {
        subtotal5 += base;
        iva5 += base * 0.05;
      } else {
        subtotal0 += base;
      }
    }

    const total =
      subtotal15 + subtotal5 + subtotal0 + iva15 + iva5 + this.ice;

    this.totals = {
      subtotal15: this.round2(subtotal15),
      subtotal5: this.round2(subtotal5),
      subtotal0: this.round2(subtotal0),
      discount: this.round2(discount),
      iva15: this.round2(iva15),
      iva5: this.round2(iva5),
      ice: this.ice,
      total: this.round2(total),
    };
  }

  addAccountLine() {
    this.accountLines.push({
      accountId: '',
      accountCode: '',
      accountName: '',
      debit: 0,
      credit: 0,
      description: '',
    });
  }

  removeAccountLine(index: number) {
    this.accountLines.splice(index, 1);
  }

  onAccountSelected(line: AccountLine) {
    const account = this.accounts.find((a) => a.id === line.accountId);
    if (account) {
      line.accountCode = account.code;
      line.accountName = account.name;
    }
  }

  addCostCenterLine() {
    this.costCenterLines.push({
      costCenterId: '',
      costCenterName: '',
      amount: 0,
      percentage: 0,
    });
  }

  removeCostCenterLine(index: number) {
    this.costCenterLines.splice(index, 1);
  }

  onCostCenterSelected(line: CostCenterLine) {
    const cc = this.costCenters.find((c) => c.id === line.costCenterId);
    if (cc) {
      line.costCenterName = cc.name;
    }
  }

  addRetentionLine() {
    this.retentionLines.push({
      retentionType: 'IR',
      percentage: 0,
      base: 0,
      amount: 0,
    });
  }

  removeRetentionLine(index: number) {
    this.retentionLines.splice(index, 1);
  }

  onRetentionChange(line: RetentionLine) {
    line.amount = this.round2((line.base * line.percentage) / 100);
  }

  addPaymentLine() {
    this.paymentLines.push({
      paymentMethod: 'TRANSFER',
      amount: 0,
      reference: '',
    });
  }

  removePaymentLine(index: number) {
    this.paymentLines.splice(index, 1);
  }

  buildLines(): FinancialDocumentLinePayload[] {
    const lines: FinancialDocumentLinePayload[] = [];
    let order = 0;

    for (const line of this.serviceLines) {
      lines.push({
        lineType: 'SERVICE',
        sortOrder: order++,
        data: { ...line, extraDiscount: 0 },
      });
    }
    for (const line of this.accountLines) {
      lines.push({ lineType: 'ACCOUNT', sortOrder: order++, data: { ...line } });
    }
    for (const line of this.costCenterLines) {
      lines.push({
        lineType: 'COST_CENTER',
        sortOrder: order++,
        data: { ...line },
      });
    }
    for (const line of this.retentionLines) {
      lines.push({
        lineType: 'RETENTION',
        sortOrder: order++,
        data: { ...line },
      });
    }
    for (const line of this.paymentLines) {
      lines.push({ lineType: 'PAYMENT', sortOrder: order++, data: { ...line } });
    }

    return lines;
  }

  save() {
    if (!this.documentNumber.trim()) {
      alert('Ingrese el número de documento');
      return;
    }
    if (!this.personId && !this.personName.trim()) {
      alert('Seleccione la persona del documento');
      return;
    }
    if (!this.description.trim()) {
      alert('La descripción es obligatoria');
      return;
    }
    if (this.serviceLines.length === 0) {
      alert('Agregue al menos un detalle en la pestaña Servicios');
      return;
    }

    this.saving = true;
    this.documentService
      .create({
        issueDate: this.issueDate,
        personType: this.personType,
        documentCategory: this.documentCategory,
        entryType: 'NON_ELECTRONIC',
        documentNumber: this.documentNumber.trim(),
        authorization: this.authorization || undefined,
        personId: this.personId || undefined,
        personName: this.personName || undefined,
        personIdentification: this.personIdentification || undefined,
        reference: this.reference || undefined,
        seller: this.seller || undefined,
        dueDays: this.dueDays,
        purchaseOrderRef: this.purchaseOrderRef || undefined,
        description: this.description.trim(),
        ice: this.ice,
        lines: this.buildLines(),
      })
      .subscribe({
        next: () => {
          alert('Documento no electrónico registrado correctamente');
          this.resetForm();
          this.saving = false;
        },
        error: (err) => {
          alert(err.error?.message || 'Error al guardar el documento');
          this.saving = false;
        },
      });
  }

  resetForm() {
    this.issueDate = new Date().toISOString().split('T')[0];
    this.personType = 'CUSTOMER';
    this.documentCategory = 'INVOICE';
    this.documentNumber = '';
    this.authorization = '';
    this.personId = '';
    this.personName = '';
    this.personIdentification = '';
    this.reference = '';
    this.seller = '';
    this.dueDays = 30;
    this.purchaseOrderRef = '';
    this.description = '';
    this.ice = 0;
    this.serviceLines = [];
    this.accountLines = [];
    this.costCenterLines = [];
    this.retentionLines = [];
    this.paymentLines = [];
    this.recalcTotals();
  }

  private round2(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
