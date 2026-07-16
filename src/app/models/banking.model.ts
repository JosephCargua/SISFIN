export interface BankAccount {
  id: string;
  accountNumber: string;
  bankName: string;
  accountType: string;
  balance: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CashAccount {
  id: string;
  name: string;
  location: string | null;
  balance: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BankTransactionDetail {
  id?: string;
  bankTransactionId?: string;
  accountName: string;
  amount: number;
  costCenter?: string;
  project?: string;
}

export interface BankTransaction {
  id: string;
  bankAccountId: string;
  bankAccount?: BankAccount;
  type: string;
  amount: number;
  description: string | null;
  reference: string | null;
  date: Date;
  
  // Nuevos campos
  transactionType?: string;
  paymentMethod?: string;
  isAnnulled?: boolean;
  personName?: string;
  payToOrderOf?: string;
  checkNumber?: string;
  checkDate?: Date;
  details?: BankTransactionDetail[];

  createdAt: Date;
}

export interface CreateBankAccountDto {
  accountNumber: string;
  bankName: string;
  accountType: string;
  initialBalance?: number;
}

export interface CreateCashAccountDto {
  name: string;
  location?: string;
  initialBalance?: number;
}

export interface CreateBankTransactionDto {
  bankAccountId: string;
  type: string;
  amount: number;
  description?: string;
  reference?: string;
  date: string;
  
  transactionType?: string;
  paymentMethod?: string;
  isAnnulled?: boolean;
  personName?: string;
  payToOrderOf?: string;
  checkNumber?: string;
  checkDate?: string;
  details?: any[];
}

