import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  DocumentConsultItem,
  DocumentSearchFilters,
} from '../../models/document-consult.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentConsultService {
  constructor(private api: ApiService) {}

  search(filters: DocumentSearchFilters): Observable<DocumentConsultItem[]> {
    const params: Record<string, string> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'ALL') {
        params[key] = value;
      }
    });
    return this.api.get<DocumentConsultItem[]>(
      'electronic-document-registrations/search',
      params,
    );
  }

  annulDocument(id: string): Observable<any> {
    return this.api.patch(`electronic-document-registrations/${id}/annul`, {});
  }
}
