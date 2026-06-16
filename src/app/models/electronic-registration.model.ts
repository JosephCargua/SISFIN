export type DocumentReviewStatus =
  | 'REVIEWED'
  | 'NOT_REVIEWED'
  | 'PENDING_REVIEW';

export type DocumentProcessingStatus = 'PARTIAL' | 'PENDING_PROCESS';

export interface ElectronicDocumentRegistration {
  id: string;
  issueDate: string;
  authorizationDate: string | null;
  documentNumber: string;
  supplierName: string;
  supplierIdentification: string | null;
  documentTypeCode: string;
  documentLabel: string;
  reviewStatus: DocumentReviewStatus;
  processingStatus: DocumentProcessingStatus;
  reason: string | null;
  fileName: string | null;
  mimeType: string | null;
  accessKey: string | null;
  total: number | null;
  itemCount: number;
  payableAccountId: string | null;
  tipAccountId: string | null;
  costCenterId: string | null;
  recurringAccountId: string | null;
  useRecurringAccount: boolean;
  retentionIrCode: string | null;
  retentionIvaCode: string | null;
  generateRetention: boolean;
  updatePersonData: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HomologateDocumentDto {
  payableAccountId?: string;
  tipAccountId?: string;
  costCenterId?: string;
  recurringAccountId?: string;
  useRecurringAccount?: boolean;
  retentionIrCode?: string;
  retentionIvaCode?: string;
  generateRetention?: boolean;
  updatePersonData?: boolean;
}

export interface AccountOption {
  id: string;
  code: string;
  name: string;
}

export interface CostCenterOption {
  id: string;
  code: string;
  name: string;
}

export interface RetentionCodeOption {
  code: string;
  description: string;
  rate: number;
  type: string;
}

export type LineMappingType = 'PRODUCT' | 'ACCOUNT';

export interface DocumentLineItem {
  id: string;
  documentRegistrationId: string;
  supplierCode: string;
  supplierDescription: string;
  ivaLabel: string;
  quantity: number;
  unitPrice: number;
  isHomologated: boolean;
  mappingType: LineMappingType | null;
  internalCode: string | null;
  unit: string | null;
  mappedProductId: string | null;
  mappedAccountId: string | null;
}

export interface LineItemHomologationForm {
  mappingType: LineMappingType;
  internalCode: string;
  unit: string;
  mappedProductId: string;
  mappedAccountId: string;
}

export interface ProductOption {
  id: string;
  code: string;
  name: string;
}

export interface DocumentHomologationForm {
  payableAccountId: string;
  tipAccountId: string;
  costCenterId: string;
  recurringAccountId: string;
  useRecurringAccount: boolean;
  retentionIrCode: string;
  retentionIvaCode: string;
  generateRetention: boolean;
  updatePersonData: boolean;
}
