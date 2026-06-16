export interface Supplier {
  id: string;
  identification: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupplierInvoice {
  id: string;
  invoiceNumber: string;
  supplierId: string;
  supplier?: Supplier;
  issueDate: Date;
  dueDate: Date;
  subtotal: number;
  tax: number;
  total: number;
  status: 'PENDING' | 'PARTIAL' | 'PAID' | 'CANCELLED';
  paidAmount: number;
  balance: number;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupplierPayment {
  id: string;
  supplierInvoiceId: string;
  supplierInvoice?: SupplierInvoice;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  reference: string | null;
  createdAt: Date;
}

export interface CreateSupplierDto {
  identification: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface CreateSupplierInvoiceDto {
  supplierId: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  subtotal: number;
  tax: number;
  description?: string;
}

export interface CreateSupplierPaymentDto {
  supplierInvoiceId: string;
  amount: number;
  paymentDate: string;
  paymentMethod: string;
  reference?: string;
}

