import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PayablesService } from '../../core/services/payables.service';
import {
  Supplier,
  SupplierInvoice,
  SupplierPayment,
  CreateSupplierDto,
  CreateSupplierInvoiceDto,
  CreateSupplierPaymentDto,
} from '../../models/payables.model';

@Component({
  selector: 'app-payables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payables.component.html',
  styleUrl: './payables.component.scss',
})
export class PayablesComponent implements OnInit {
  suppliers: Supplier[] = [];
  invoices: SupplierInvoice[] = [];
  showSupplierForm = false;
  showInvoiceForm = false;
  showPaymentForm = false;

  newSupplier: CreateSupplierDto = {
    identification: '',
    name: '',
  };

  newInvoice: CreateSupplierInvoiceDto = {
    supplierId: '',
    invoiceNumber: '',
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
    subtotal: 0,
    tax: 0,
  };

  newPayment: CreateSupplierPaymentDto = {
    supplierInvoiceId: '',
    amount: 0,
    paymentDate: new Date().toISOString().split('T')[0],
    paymentMethod: 'CASH',
  };

  constructor(private payablesService: PayablesService) {}

  ngOnInit() {
    this.loadSuppliers();
    this.loadInvoices();
  }

  loadSuppliers() {
    this.payablesService.getSuppliers().subscribe({
      next: (data) => {
        this.suppliers = data;
      },
      error: (error) => {
        console.error('Error loading suppliers:', error);
      },
    });
  }

  loadInvoices() {
    this.payablesService.getSupplierInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
      },
      error: (error) => {
        console.error('Error loading invoices:', error);
      },
    });
  }

  createSupplier() {
    this.payablesService.createSupplier(this.newSupplier).subscribe({
      next: () => {
        alert('Proveedor creado exitosamente');
        this.showSupplierForm = false;
        this.resetSupplierForm();
        this.loadSuppliers();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear el proveedor');
      },
    });
  }

  createInvoice() {
    this.payablesService.createSupplierInvoice(this.newInvoice).subscribe({
      next: () => {
        alert('Factura creada exitosamente');
        this.showInvoiceForm = false;
        this.resetInvoiceForm();
        this.loadInvoices();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear la factura');
      },
    });
  }

  createPayment() {
    this.payablesService.createSupplierPayment(this.newPayment).subscribe({
      next: () => {
        alert('Pago registrado exitosamente');
        this.showPaymentForm = false;
        this.resetPaymentForm();
        this.loadInvoices();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al registrar el pago');
      },
    });
  }

  openPaymentForm(invoiceId: string) {
    this.newPayment.supplierInvoiceId = invoiceId;
    const invoice = this.invoices.find((i) => i.id === invoiceId);
    if (invoice) {
      this.newPayment.amount = invoice.balance;
    }
    this.showPaymentForm = true;
  }

  resetSupplierForm() {
    this.newSupplier = { identification: '', name: '' };
  }

  resetInvoiceForm() {
    this.newInvoice = {
      supplierId: '',
      invoiceNumber: '',
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      subtotal: 0,
      tax: 0,
    };
  }

  resetPaymentForm() {
    this.newPayment = {
      supplierInvoiceId: '',
      amount: 0,
      paymentDate: new Date().toISOString().split('T')[0],
      paymentMethod: 'CASH',
    };
  }

  getTotal(): number {
    return this.newInvoice.subtotal + this.newInvoice.tax;
  }
}

