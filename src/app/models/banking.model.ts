export interface CheckSequence {
  id?: string;
  startSequence: string;
  endSequence: string;
  isActive: boolean;
}

export interface BankAccount {
  id: string;
  accountNumber: string;
  bankName: string;
  name?: string;
  accountType?: string;
  city?: string;
  checkFormat?: string;
  forCollectionFormat?: boolean;
  accountId: string;
  balance?: number;
  isActive: boolean;
  checkSequences?: CheckSequence[];
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

  bankReconciliationId?: string;

  createdAt: Date;
}

export interface CreateBankAccountDto {
  accountNumber: string;
  bankName: string;
  name?: string;
  accountType?: string;
  city?: string;
  checkFormat?: string;
  forCollectionFormat?: boolean;
  accountId: string;
  isActive?: boolean;
  checkSequences?: CheckSequence[];
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

