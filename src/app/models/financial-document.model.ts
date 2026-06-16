export type DocumentPersonType = 'SUPPLIER' | 'CUSTOMER';

export type DocumentEntryType = 'NON_ELECTRONIC' | 'PURCHASE_EXPENSE';

export type DocumentCategory =
  | 'INVOICE'
  | 'CREDIT_NOTE'
  | 'DEBIT_NOTE'
  | 'PURCHASE_LIQUIDATION'
  | 'RETENTION';

export type FinancialDocumentLineType =
  | 'SERVICE'
  | 'ACCOUNT'
  | 'COST_CENTER'
  | 'RETENTION'
  | 'PAYMENT';

export type RetentionEmissionType = 'PHYSICAL' | 'ELECTRONIC';

export type PaymentTimeUnit = 'DAYS' | 'MONTHS';

export interface ServiceLine {
  quantity: number;
  productId: string;
  productCode: string;
  productName: string;
  unit: string;
  unitPrice: number;
  ivaRate: number;
  retIr: string;
  retIva: string;
  discountPercent: number;
  discount: number;
  extraDiscount: number;
  subtotal: number;
}

export interface AccountDetailLine {
  quantity: number;
  accountId: string;
  accountCode: string;
  accountName: string;
  unitValue: number;
  ivaRate: number;
  icePercent: number;
  retIr: string;
  retIva: string;
  discountPercent: number;
  discount: number;
  subtotal: number;
}

export interface AccountLine {
  accountId: string;
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
  description: string;
}

export interface CostCenterDetailLine {
  quantity: number;
  itemId: string;
  itemLabel: string;
  subtotal: number;
  projectRef: string;
  costCenterId: string;
  costCenterName: string;
}

export interface CostCenterLine {
  costCenterId: string;
  costCenterName: string;
  amount: number;
  percentage: number;
}

export interface RetentionLine {
  expense: string;
  retentionName: string;
  retentionType: string;
  sriCode: string;
  base: number;
  percentage: number;
  amount: number;
}

export interface PaymentLine {
  paymentMethod: string;
  term: number;
  timeUnit: PaymentTimeUnit;
  amount: number;
  reference?: string;
}

export interface FinancialDocumentLinePayload {
  lineType: FinancialDocumentLineType;
  sortOrder: number;
  data: Record<string, unknown>;
}

export interface CreateFinancialDocumentDto {
  issueDate: string;
  personType: DocumentPersonType;
  documentCategory: DocumentCategory;
  entryType: DocumentEntryType;
  documentNumber: string;
  authorization?: string;
  personId?: string;
  personName?: string;
  personIdentification?: string;
  reference?: string;
  dueDays?: number;
  purchaseOrderRef?: string;
  seller?: string;
  description?: string;
  payWithPettyCash?: boolean;
  pettyCashAccountId?: string;
  ice?: number;
  retentionMeta?: {
    emissionDate: string;
    fiscalMonth: number;
    fiscalYear: number;
    emissionType: RetentionEmissionType;
    documentNumber: string;
    authorization: string;
  };
  lines: FinancialDocumentLinePayload[];
}

export interface FinancialDocument {
  id: string;
  issueDate: string;
  personType: DocumentPersonType;
  documentCategory: DocumentCategory;
  documentNumber: string;
  authorization: string | null;
  personId: string | null;
  personName: string | null;
  personIdentification: string | null;
  reference: string | null;
  dueDays: number;
  purchaseOrderRef: string | null;
  description: string | null;
  payWithPettyCash: boolean;
  pettyCashAccountId: string | null;
  subtotal15: number;
  subtotal5: number;
  subtotal0: number;
  discount: number;
  iva15: number;
  iva5: number;
  ice: number;
  total: number;
  lines: FinancialDocumentLinePayload[];
  createdAt: string;
}

export interface ParsedXmlDocument {
  issueDate: string;
  documentNumber: string;
  authorization: string | null;
  personName: string;
  personIdentification: string | null;
  documentCategory: string;
  lines: FinancialDocumentLinePayload[];
  totals: {
    subtotal15: number;
    subtotal5: number;
    subtotal0: number;
    discount: number;
    iva15: number;
    iva5: number;
    ice: number;
    total: number;
  };
}
