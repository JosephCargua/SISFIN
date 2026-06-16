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

export interface BankTransaction {
  id: string;
  bankAccountId: string;
  bankAccount?: BankAccount;
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER';
  amount: number;
  description: string | null;
  reference: string | null;
  date: Date;
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
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER';
  amount: number;
  description?: string;
  reference?: string;
  date: string;
}

