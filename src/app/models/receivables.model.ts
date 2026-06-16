export interface Customer {
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

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customer?: Customer;
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

export interface Payment {
  id: string;
  invoiceId: string;
  invoice?: Invoice;
  amount: number;
  paymentDate: Date;
  paymentMethod: string;
  reference: string | null;
  createdAt: Date;
}

export interface CreateCustomerDto {
  identification: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface CreateInvoiceDto {
  customerId: string;
  issueDate: string;
  dueDate: string;
  subtotal: number;
  tax: number;
  description?: string;
}

export interface CreatePaymentDto {
  invoiceId: string;
  amount: number;
  paymentDate: string;
  paymentMethod: string;
  reference?: string;
}

