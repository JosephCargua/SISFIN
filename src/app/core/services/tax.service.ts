import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  ElectronicInvoice,
  Retention,
  ATS,
  CreateElectronicInvoiceDto,
  CreateRetentionDto,
} from '../../models/tax.model';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  constructor(private api: ApiService) {}

  getElectronicInvoices(): Observable<ElectronicInvoice[]> {
    return this.api.get<ElectronicInvoice[]>('electronic-invoices');
  }

  createElectronicInvoice(invoice: CreateElectronicInvoiceDto): Observable<ElectronicInvoice> {
    return this.api.post<ElectronicInvoice>('electronic-invoices', invoice);
  }

  authorizeInvoice(id: string): Observable<ElectronicInvoice> {
    return this.api.post<ElectronicInvoice>(`electronic-invoices/${id}/authorize`, {});
  }

  getRetentions(): Observable<Retention[]> {
    return this.api.get<Retention[]>('retentions');
  }

  createRetention(retention: CreateRetentionDto): Observable<Retention> {
    return this.api.post<Retention>('retentions', retention);
  }

  getATS(year?: number, month?: number): Observable<ATS[]> {
    let endpoint = 'ats';
    if (year && month) {
      endpoint += `?year=${year}&month=${month}`;
    }
    return this.api.get<ATS[]>(endpoint);
  }

  generateATS(year: number, month: number): Observable<ATS> {
    return this.api.post<ATS>('ats/generate', { year, month });
  }
}

