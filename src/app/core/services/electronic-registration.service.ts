import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  DocumentLineItem,
  DocumentProcessingStatus,
  DocumentReviewStatus,
  ElectronicDocumentRegistration,
  HomologateDocumentDto,
  LineItemHomologationForm,
} from '../../models/electronic-registration.model';

@Injectable({
  providedIn: 'root',
})
export class ElectronicRegistrationService {
  constructor(private api: ApiService) {}

  getDocuments(
    processingStatus?: DocumentProcessingStatus,
  ): Observable<ElectronicDocumentRegistration[]> {
    const params = processingStatus ? { processingStatus } : undefined;
    return this.api.get<ElectronicDocumentRegistration[]>(
      'electronic-document-registrations',
      params,
    );
  }

  uploadDocument(file: File): Observable<ElectronicDocumentRegistration> {
    return this.api.uploadFile<ElectronicDocumentRegistration>(
      'electronic-document-registrations/upload',
      file,
    );
  }

  updateReviewStatus(
    id: string,
    reviewStatus: DocumentReviewStatus,
  ): Observable<ElectronicDocumentRegistration> {
    return this.api.patch<ElectronicDocumentRegistration>(
      `electronic-document-registrations/${id}/review-status`,
      { reviewStatus },
    );
  }

  getLineItems(documentId: string) {
    return this.api.get<DocumentLineItem[]>(
      `electronic-document-registrations/${documentId}/line-items`,
    );
  }

  homologateLineItem(
    documentId: string,
    lineItemId: string,
    data: LineItemHomologationForm,
  ) {
    return this.api.patch<DocumentLineItem>(
      `electronic-document-registrations/${documentId}/line-items/${lineItemId}`,
      {
        mappingType: data.mappingType,
        internalCode: data.internalCode || undefined,
        unit: data.unit || undefined,
        mappedProductId:
          data.mappingType === 'PRODUCT' ? data.mappedProductId : undefined,
        mappedAccountId:
          data.mappingType === 'ACCOUNT' ? data.mappedAccountId : undefined,
      },
    );
  }

  homologate(
    id: string,
    data: HomologateDocumentDto,
  ): Observable<ElectronicDocumentRegistration> {
    return this.api.patch<ElectronicDocumentRegistration>(
      `electronic-document-registrations/${id}/homologate`,
      data,
    );
  }

  markReady(id: string): Observable<ElectronicDocumentRegistration> {
    return this.api.patch<ElectronicDocumentRegistration>(
      `electronic-document-registrations/${id}/ready`,
      {},
    );
  }

  deleteDocument(id: string): Observable<void> {
    return this.api.delete<void>(`electronic-document-registrations/${id}`);
  }
}
