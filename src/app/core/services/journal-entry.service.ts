import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  JournalEntry,
  CreateJournalEntryDto,
  JournalEntryStatus,
} from '../../models/journal-entry.model';

@Injectable({
  providedIn: 'root',
})
export class JournalEntryService {
  constructor(private api: ApiService) {}

  getAll(
    startDate?: string,
    endDate?: string,
    status?: JournalEntryStatus,
  ): Observable<JournalEntry[]> {
    const params: any = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;
    if (status) params.status = status;

    const queryString = new URLSearchParams(params).toString();
    return this.api.get<JournalEntry[]>(
      `journal-entries${queryString ? '?' + queryString : ''}`,
    );
  }

  getById(id: string): Observable<JournalEntry> {
    return this.api.get<JournalEntry>(`journal-entries/${id}`);
  }

  create(entry: CreateJournalEntryDto): Observable<JournalEntry> {
    return this.api.post<JournalEntry>('journal-entries', entry);
  }

  post(id: string): Observable<JournalEntry> {
    return this.api.patch<JournalEntry>(`journal-entries/${id}/post`, {});
  }

  cancel(id: string, reason: string): Observable<JournalEntry> {
    return this.api.patch<JournalEntry>(`journal-entries/${id}/cancel`, {
      reason,
    });
  }

  getGeneralLedger(
    accountId: string,
    startDate: string,
    endDate: string,
    costCenterId?: string,
  ): Observable<any> {
    const params: any = { accountId, startDate, endDate };
    if (costCenterId) params.costCenterId = costCenterId;

    const queryString = new URLSearchParams(params).toString();
    return this.api.get<any>(`journal-entries/general-ledger?${queryString}`);
  }
}

