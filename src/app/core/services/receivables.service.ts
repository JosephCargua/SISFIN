import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  Customer,
  Invoice,
  Payment,
  CreateCustomerDto,
  CreateInvoiceDto,
  CreatePaymentDto,
} from '../../models/receivables.model';

@Injectable({
  providedIn: 'root',
})
export class ReceivablesService {
  constructor(private api: ApiService) {}

  getCustomers(): Observable<Customer[]> {
    return this.api.get<Customer[]>('customers');
  }

  createCustomer(customer: CreateCustomerDto): Observable<Customer> {
    return this.api.post<Customer>('customers', customer);
  }

  getInvoices(customerId?: string): Observable<Invoice[]> {
    const endpoint = customerId ? `invoices?customerId=${customerId}` : 'invoices';
    return this.api.get<Invoice[]>(endpoint);
  }

  createInvoice(invoice: CreateInvoiceDto): Observable<Invoice> {
    return this.api.post<Invoice>('invoices', invoice);
  }

  createPayment(payment: CreatePaymentDto): Observable<Payment> {
    return this.api.post<Payment>('payments', payment);
  }
}

