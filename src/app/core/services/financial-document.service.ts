import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  CreateFinancialDocumentDto,
  FinancialDocument,
  ParsedXmlDocument,
} from '../../models/financial-document.model';

@Injectable({
  providedIn: 'root',
})
export class FinancialDocumentService {
  constructor(private api: ApiService) {}

  getAll(): Observable<FinancialDocument[]> {
    return this.api.get<FinancialDocument[]>('financial-documents');
  }

  getById(id: string): Observable<FinancialDocument> {
    return this.api.get<FinancialDocument>(`financial-documents/${id}`);
  }

  create(dto: CreateFinancialDocumentDto): Observable<FinancialDocument> {
    return this.api.post<FinancialDocument>('financial-documents', dto);
  }

  parseXml(file: File): Observable<ParsedXmlDocument> {
    return this.api.uploadFile<ParsedXmlDocument>(
      'financial-documents/parse-xml',
      file,
    );
  }
}
