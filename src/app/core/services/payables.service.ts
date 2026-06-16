import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  Supplier,
  SupplierInvoice,
  SupplierPayment,
  CreateSupplierDto,
  CreateSupplierInvoiceDto,
  CreateSupplierPaymentDto,
} from '../../models/payables.model';

@Injectable({
  providedIn: 'root',
})
export class PayablesService {
  constructor(private api: ApiService) {}

  getSuppliers(): Observable<Supplier[]> {
    return this.api.get<Supplier[]>('suppliers');
  }

  createSupplier(supplier: CreateSupplierDto): Observable<Supplier> {
    return this.api.post<Supplier>('suppliers', supplier);
  }

  getSupplierInvoices(supplierId?: string): Observable<SupplierInvoice[]> {
    const endpoint = supplierId
      ? `supplier-invoices?supplierId=${supplierId}`
      : 'supplier-invoices';
    return this.api.get<SupplierInvoice[]>(endpoint);
  }

  createSupplierInvoice(invoice: CreateSupplierInvoiceDto): Observable<SupplierInvoice> {
    return this.api.post<SupplierInvoice>('supplier-invoices', invoice);
  }

  createSupplierPayment(payment: CreateSupplierPaymentDto): Observable<SupplierPayment> {
    return this.api.post<SupplierPayment>('supplier-payments', payment);
  }
}

