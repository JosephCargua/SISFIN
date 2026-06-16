export interface ElectronicInvoice {
  id: string;
  accessKey: string;
  invoiceNumber: string;
  issueDate: Date;
  customerIdentification: string;
  customerName: string;
  subtotal: number;
  tax: number;
  total: number;
  status: 'DRAFT' | 'SENT' | 'AUTHORIZED' | 'REJECTED';
  xmlContent: string | null;
  authorizationDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Retention {
  id: string;
  accessKey: string;
  retentionNumber: string;
  issueDate: Date;
  supplierIdentification: string;
  supplierName: string;
  retentionCode: string;
  retentionBase: number;
  retentionPercentage: number;
  retentionAmount: number;
  status: 'DRAFT' | 'SENT' | 'AUTHORIZED' | 'REJECTED';
  xmlContent: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ATS {
  id: string;
  period: string;
  year: number;
  month: number;
  xmlContent: string | null;
  status: 'DRAFT' | 'GENERATED' | 'SUBMITTED';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateElectronicInvoiceDto {
  issueDate: string;
  customerIdentification: string;
  customerName: string;
  lines: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
    taxCode: string;
    taxRate: number;
  }>;
  environment?: '1' | '2';
}

export interface CreateRetentionDto {
  issueDate: string;
  supplierIdentification: string;
  supplierName: string;
  retentionCode: string;
  retentionBase: number;
  retentionPercentage: number;
  environment?: '1' | '2';
}

