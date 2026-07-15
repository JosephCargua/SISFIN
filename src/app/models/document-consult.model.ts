import {
  DocumentProcessingStatus,
  DocumentReviewStatus,
} from './electronic-registration.model';

export interface DocumentConsultItem {
  id: string;
  issueDate: string;
  authorizationDate: string | null;
  supplierName: string;
  supplierIdentification: string | null;
  documentLabel: string;
  documentNumber: string;
  documentTypeCode: string;
  reviewStatus: DocumentReviewStatus;
  processingStatus: DocumentProcessingStatus;
  accessKey: string | null;
  netAmount: number;
  taxAmount: number;
  total: number;
  retentionAmount: number;
  statusLabel: string;
  personTypeLabel: string;
  isAccounted?: boolean;
  isPaid?: boolean;
  isReconciled?: boolean;
  isEmailed?: boolean;
}

export interface DocumentSearchFilters {
  documentNumber?: string;
  person?: string;
  documentTypeCode?: string;
  reviewStatus?: DocumentReviewStatus;
  processingStatus?: DocumentProcessingStatus;
  dateFrom?: string;
  dateTo?: string;
  personType?: string;
  quickFilter?: string;
  purchaseOrder?: string;
}
