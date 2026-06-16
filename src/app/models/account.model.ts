export enum AccountType {
  ASSET = 'ASSET',
  LIABILITY = 'LIABILITY',
  EQUITY = 'EQUITY',
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export interface Account {
  id: string;
  code: string;
  name: string;
  type: AccountType;
  parentId: string | null;
  parent?: Account;
  children?: Account[];
  isControlAccount: boolean;
  isActive: boolean;
  description: string | null;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAccountDto {
  code: string;
  name: string;
  type: AccountType;
  parentId?: string | null;
  isControlAccount?: boolean;
  description?: string | null;
}

