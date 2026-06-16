import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FinancialDocumentService } from '../../core/services/financial-document.service';
import { PayablesService } from '../../core/services/payables.service';
import { AccountService } from '../../core/services/account.service';
import { InventoryService } from '../../core/services/inventory.service';
import { AutomationService } from '../../core/services/automation.service';
import { BankingService } from '../../core/services/banking.service';
import {
  ServiceLine,
  AccountDetailLine,
  CostCenterDetailLine,
  RetentionLine,
  PaymentLine,
  DocumentPersonType,
  DocumentCategory,
  RetentionEmissionType,
  FinancialDocumentLinePayload,
} from '../../models/financial-document.model';
import { Supplier } from '../../models/payables.model';
import { Account } from '../../models/account.model';
import { Product } from '../../models/inventory.model';
import { CostCenter } from '../../models/automation.model';
import { CashAccount } from '../../models/banking.model';

type DetailTab = 'services' | 'accounts' | 'costCenter' | 'retention' | 'payment';

@Component({
  selector: 'app-register-purchase-expense',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-purchase-expense.component.html',
  styleUrl: './register-purchase-expense.component.scss',
})
export class RegisterPurchaseExpenseComponent implements OnInit {
  @ViewChild('personSelect') personSelect?: ElementRef<HTMLSelectElement>;

  activeTab: DetailTab = 'services';
  saving = false;
  parsingXml = false;
  showPersonPicker = false;

  issueDate = new Date().toISOString().split('T')[0];
  personType: DocumentPersonType = 'SUPPLIER';
  documentCategory: DocumentCategory = 'INVOICE';
  documentNumber = '';
  authorization = '';
  personId = '';
  personName = '';
  personIdentification = '';
  reference = '';
  dueDays = 0;
  purchaseOrderRef = '';
  description = '';
  payWithPettyCash = false;
  pettyCashAccountId = '';
  ice = 0;

  retentionEmissionDate = new Date().toISOString().split('T')[0];
  retentionFiscalMonth = new Date().getMonth() + 1;
  retentionFiscalYear = new Date().getFullYear();
  retentionEmissionType: RetentionEmissionType = 'PHYSICAL';
  retentionDocumentNumber = '';
  retentionAuthorization = '';

  serviceLines: ServiceLine[] = [];
  accountLines: AccountDetailLine[] = [];
  costCenterLines: CostCenterDetailLine[] = [];
  retentionLines: RetentionLine[] = [];
  paymentLines: PaymentLine[] = [];

  suppliers: Supplier[] = [];
  accounts: Account[] = [];
  products: Product[] = [];
  costCenters: CostCenter[] = [];
  cashAccounts: CashAccount[] = [];

  personTypeOptions = [
    { value: 'SUPPLIER' as DocumentPersonType, label: 'Proveedor' },
    { value: 'CUSTOMER' as DocumentPersonType, label: 'Cliente' },
  ];

  documentCategoryOptions = [
    { value: 'INVOICE' as DocumentCategory, label: 'Factura' },
    { value: 'CREDIT_NOTE' as DocumentCategory, label: 'Nota de crédito' },
    { value: 'DEBIT_NOTE' as DocumentCategory, label: 'Nota de débito' },
    {
      value: 'PURCHASE_LIQUIDATION' as DocumentCategory,
      label: 'Liquidación de compra',
    },
    { value: 'RETENTION' as DocumentCategory, label: 'Retención' },
  ];

  ivaOptions = [
    { value: 15, label: '15%' },
    { value: 5, label: '5%' },
    { value: 0, label: '0%' },
  ];

  monthOptions = [
    { value: 1, label: 'enero' },
    { value: 2, label: 'febrero' },
    { value: 3, label: 'marzo' },
    { value: 4, label: 'abril' },
    { value: 5, label: 'mayo' },
    { value: 6, label: 'junio' },
    { value: 7, label: 'julio' },
    { value: 8, label: 'agosto' },
    { value: 9, label: 'septiembre' },
    { value: 10, label: 'octubre' },
    { value: 11, label: 'noviembre' },
    { value: 12, label: 'diciembre' },
  ];

  retentionEmissionTypeOptions = [
    { value: 'PHYSICAL' as RetentionEmissionType, label: 'Física' },
    { value: 'ELECTRONIC' as RetentionEmissionType, label: 'Electrónica' },
  ];

  retentionTypeOptions = [
    { value: 'RENTA', label: 'Renta' },
    { value: 'IVA', label: 'IVA' },
    { value: 'ISD', label: 'ISD' },
  ];

  paymentMethodOptions = [
    { value: '20', label: 'Otros con Utilización del Sistema Financiero' },
    { value: '01', label: 'Sin utilización del Sistema Financiero' },
    { value: '15', label: 'Compensación de Deudas' },
    { value: '16', label: 'Tarjeta de débito' },
    { value: '17', label: 'Dinero Electrónico' },
    { value: '18', label: 'Tarjeta Prepago' },
    { value: '19', label: 'Tarjeta de crédito' },
    { value: '21', label: 'Endoso de títulos' },
  ];

  timeUnitOptions = [
    { value: 'DAYS', label: 'días' },
    { value: 'MONTHS', label: 'meses' },
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
    private accountService: AccountService,
    private inventoryService: InventoryService,
    private automationService: AutomationService,
    private bankingService: BankingService,
  ) {}

  ngOnInit() {
    this.loadLookups();
    this.addServiceLine();
  }

  loadLookups() {
    this.payablesService.getSuppliers().subscribe({
      next: (data) => (this.suppliers = data),
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
    this.bankingService.getCashAccounts().subscribe({
      next: (data) => (this.cashAccounts = data),
    });
  }

  setTab(tab: DetailTab) {
    this.activeTab = tab;
  }

  openPersonSearch() {
    this.showPersonPicker = true;
    setTimeout(() => this.personSelect?.nativeElement.focus(), 0);
  }

  onPersonSelected() {
    const supplier = this.suppliers.find((s) => s.id === this.personId);
    if (supplier) {
      this.personName = supplier.name;
      this.personIdentification = supplier.identification;
      this.showPersonPicker = false;
    }
  }

  onXmlSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.parsingXml = true;
    this.documentService.parseXml(file).subscribe({
      next: (parsed) => {
        this.issueDate = parsed.issueDate;
        this.documentNumber = parsed.documentNumber;
        this.authorization = parsed.authorization || '';
        this.personName = parsed.personName;
        this.personIdentification = parsed.personIdentification || '';
        this.documentCategory = 'INVOICE';

        const matched = this.suppliers.find(
          (s) => s.identification === parsed.personIdentification,
        );
        if (matched) {
          this.personId = matched.id;
        }

        this.serviceLines = parsed.lines
          .filter((l) => l.lineType === 'SERVICE')
          .map((l) => {
            const d = l.data as Record<string, number | string>;
            const quantity = Number(d['quantity']) || 1;
            const unitPrice = Number(d['unitPrice']) || 0;
            const discount = Number(d['discount']) || 0;
            const extraDiscount = Number(d['extraDiscount']) || 0;
            const gross = quantity * unitPrice;
            const discountPercent =
              gross > 0 ? this.round2((discount / gross) * 100) : 0;

            return {
              quantity,
              productId: '',
              productCode: String(d['productCode'] || ''),
              productName: String(d['productName'] || ''),
              unit: String(d['unit'] || 'UND'),
              unitPrice,
              ivaRate: Number(d['ivaRate']) || 0,
              retIr: String(d['retIr'] || ''),
              retIva: String(d['retIva'] || ''),
              discountPercent,
              discount,
              extraDiscount,
              subtotal: Number(d['subtotal']) || 0,
            };
          });

        if (this.serviceLines.length === 0) {
          this.addServiceLine();
        } else {
          this.serviceLines.forEach((line) => this.recalcServiceLine(line));
        }

        this.recalcTotals();
        this.parsingXml = false;
        input.value = '';
      },
      error: (err) => {
        alert(err.error?.message || 'Error al cargar el XML');
        this.parsingXml = false;
        input.value = '';
      },
    });
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
      retIr: '',
      retIva: '',
      discountPercent: 0,
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
    const gross = line.quantity * line.unitPrice;
    line.discount = this.round2((gross * line.discountPercent) / 100);
    const base = gross - line.discount - line.extraDiscount;
    line.subtotal = this.round2(Math.max(base, 0));
  }

  onServiceLineChange(line: ServiceLine) {
    this.recalcServiceLine(line);
    this.recalcTotals();
  }

  addAccountLine() {
    const line: AccountDetailLine = {
      quantity: 1,
      accountId: '',
      accountCode: '',
      accountName: '',
      unitValue: 0,
      ivaRate: 15,
      icePercent: 0,
      retIr: '',
      retIva: '',
      discountPercent: 0,
      discount: 0,
      subtotal: 0,
    };
    this.accountLines.push(line);
    this.recalcAccountLine(line);
  }

  removeAccountLine(index: number) {
    this.accountLines.splice(index, 1);
  }

  onAccountSelected(line: AccountDetailLine) {
    const account = this.accounts.find((a) => a.id === line.accountId);
    if (account) {
      line.accountCode = account.code;
      line.accountName = account.name;
    }
  }

  recalcAccountLine(line: AccountDetailLine) {
    const gross = line.quantity * line.unitValue;
    line.discount = this.round2((gross * line.discountPercent) / 100);
    line.subtotal = this.round2(Math.max(gross - line.discount, 0));
  }

  onAccountLineChange(line: AccountDetailLine) {
    this.recalcAccountLine(line);
  }

  addCostCenterLine() {
    this.costCenterLines.push({
      quantity: 1,
      itemId: '',
      itemLabel: '',
      subtotal: 0,
      projectRef: '',
      costCenterId: '',
      costCenterName: '',
    });
  }

  removeCostCenterLine(index: number) {
    this.costCenterLines.splice(index, 1);
  }

  onCostCenterItemSelected(line: CostCenterDetailLine) {
    const account = this.accounts.find((a) => a.id === line.itemId);
    if (account) {
      line.itemLabel = `${account.code} - ${account.name}`;
      return;
    }

    const product = this.products.find((p) => p.id === line.itemId);
    if (product) {
      line.itemLabel = `${product.code} - ${product.name}`;
    }
  }

  onCostCenterSelected(line: CostCenterDetailLine) {
    const cc = this.costCenters.find((c) => c.id === line.costCenterId);
    if (cc) {
      line.costCenterName = cc.name;
    }
  }

  addRetentionLine() {
    this.retentionLines.push({
      expense: '',
      retentionName: '',
      retentionType: 'RENTA',
      sriCode: '',
      base: 0,
      percentage: 0,
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
      paymentMethod: '20',
      term: 0,
      timeUnit: 'DAYS',
      amount: 0,
    });
  }

  removePaymentLine(index: number) {
    this.paymentLines.splice(index, 1);
  }

  recalcTotals() {
    let subtotal15 = 0;
    let subtotal5 = 0;
    let subtotal0 = 0;
    let discount = 0;
    let iva15 = 0;
    let iva5 = 0;

    for (const line of this.serviceLines) {
      const lineDiscount = line.discount + line.extraDiscount;
      discount += lineDiscount;
      const base = line.subtotal;

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

  buildLines(): FinancialDocumentLinePayload[] {
    const lines: FinancialDocumentLinePayload[] = [];
    let order = 0;

    for (const line of this.serviceLines) {
      lines.push({
        lineType: 'SERVICE',
        sortOrder: order++,
        data: { ...line },
      });
    }
    for (const line of this.accountLines) {
      lines.push({
        lineType: 'ACCOUNT',
        sortOrder: order++,
        data: { ...line },
      });
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
      lines.push({
        lineType: 'PAYMENT',
        sortOrder: order++,
        data: { ...line },
      });
    }

    return lines;
  }

  save() {
    if (!this.documentNumber.trim()) {
      alert('Ingrese el número de documento');
      return;
    }
    if (!this.personName.trim() && !this.personId) {
      alert('Seleccione o indique la persona del documento');
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
        entryType: 'PURCHASE_EXPENSE',
        documentNumber: this.documentNumber.trim(),
        authorization: this.authorization || undefined,
        personId: this.personId || undefined,
        personName: this.personName || undefined,
        personIdentification: this.personIdentification || undefined,
        reference: this.reference || undefined,
        dueDays: this.dueDays,
        purchaseOrderRef: this.purchaseOrderRef || undefined,
        description: this.description || undefined,
        payWithPettyCash: this.payWithPettyCash,
        pettyCashAccountId: this.payWithPettyCash
          ? this.pettyCashAccountId || undefined
          : undefined,
        ice: this.ice,
        retentionMeta:
          this.retentionLines.length > 0 ||
          this.retentionDocumentNumber ||
          this.retentionAuthorization
            ? {
                emissionDate: this.retentionEmissionDate,
                fiscalMonth: this.retentionFiscalMonth,
                fiscalYear: this.retentionFiscalYear,
                emissionType: this.retentionEmissionType,
                documentNumber: this.retentionDocumentNumber,
                authorization: this.retentionAuthorization,
              }
            : undefined,
        lines: this.buildLines(),
      })
      .subscribe({
        next: () => {
          alert('Compra o gasto registrado correctamente');
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
    this.personType = 'SUPPLIER';
    this.documentCategory = 'INVOICE';
    this.documentNumber = '';
    this.authorization = '';
    this.personId = '';
    this.personName = '';
    this.personIdentification = '';
    this.reference = '';
    this.dueDays = 0;
    this.purchaseOrderRef = '';
    this.description = '';
    this.payWithPettyCash = false;
    this.pettyCashAccountId = '';
    this.ice = 0;
    this.retentionEmissionDate = this.issueDate;
    this.retentionFiscalMonth = new Date().getMonth() + 1;
    this.retentionFiscalYear = new Date().getFullYear();
    this.retentionEmissionType = 'PHYSICAL';
    this.retentionDocumentNumber = '';
    this.retentionAuthorization = '';
    this.serviceLines = [];
    this.accountLines = [];
    this.costCenterLines = [];
    this.retentionLines = [];
    this.paymentLines = [];
    this.addServiceLine();
    this.recalcTotals();
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  private round2(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
