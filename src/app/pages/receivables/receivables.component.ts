import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceivablesService } from '../../core/services/receivables.service';
import {
  Customer,
  Invoice,
  Payment,
  CreateCustomerDto,
  CreateInvoiceDto,
  CreatePaymentDto,
} from '../../models/receivables.model';

@Component({
  selector: 'app-receivables',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './receivables.component.html',
  styleUrl: './receivables.component.scss',
})
export class ReceivablesComponent implements OnInit {
  customers: Customer[] = [];
  invoices: Invoice[] = [];
  showCustomerForm = false;
  showInvoiceForm = false;
  showPaymentForm = false;
  selectedInvoiceId = '';

  newCustomer: CreateCustomerDto = {
    identification: '',
    name: '',
  };

  newInvoice: CreateInvoiceDto = {
    customerId: '',
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
    subtotal: 0,
    tax: 0,
  };

  newPayment: CreatePaymentDto = {
    invoiceId: '',
    amount: 0,
    paymentDate: new Date().toISOString().split('T')[0],
    paymentMethod: 'CASH',
  };

  constructor(private receivablesService: ReceivablesService) {}

  ngOnInit() {
    this.loadCustomers();
    this.loadInvoices();
  }

  loadCustomers() {
    this.receivablesService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (error) => {
        console.error('Error loading customers:', error);
      },
    });
  }

  loadInvoices() {
    this.receivablesService.getInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
      },
      error: (error) => {
        console.error('Error loading invoices:', error);
      },
    });
  }

  createCustomer() {
    this.receivablesService.createCustomer(this.newCustomer).subscribe({
      next: () => {
        alert('Cliente creado exitosamente');
        this.showCustomerForm = false;
        this.resetCustomerForm();
        this.loadCustomers();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear el cliente');
      },
    });
  }

  createInvoice() {
    this.receivablesService.createInvoice(this.newInvoice).subscribe({
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
    this.receivablesService.createPayment(this.newPayment).subscribe({
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
    this.selectedInvoiceId = invoiceId;
    this.newPayment.invoiceId = invoiceId;
    const invoice = this.invoices.find((i) => i.id === invoiceId);
    if (invoice) {
      this.newPayment.amount = invoice.balance;
    }
    this.showPaymentForm = true;
  }

  resetCustomerForm() {
    this.newCustomer = { identification: '', name: '' };
  }

  resetInvoiceForm() {
    this.newInvoice = {
      customerId: '',
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
      invoiceId: '',
      amount: 0,
      paymentDate: new Date().toISOString().split('T')[0],
      paymentMethod: 'CASH',
    };
  }

  getTotal(): number {
    return this.newInvoice.subtotal + this.newInvoice.tax;
  }
}

