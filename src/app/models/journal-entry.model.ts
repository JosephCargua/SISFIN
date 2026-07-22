export enum JournalEntryStatus {
  DRAFT = 'DRAFT',
  POSTED = 'POSTED',
  CANCELLED = 'CANCELLED',
}

export interface JournalEntryLine {
  id?: string;
  accountId: string;
  accountName?: string;
  account?: any;
  debit: number;
  credit: number;
  description?: string;
  costCenterId?: string;
  reference?: string;
}

export interface JournalEntry {
  id: string;
  entryNumber: string;
  date: Date;
  description: string | null;
  status: JournalEntryStatus;
  currencyId: string | null;
  totalDebit: number;
  totalCredit: number;
  costCenterId: string | null;
  reference: string | null;
  cancellationReason: string | null;
  cancelledBy: string | null;
  cancelledAt: Date | null;
  lines: JournalEntryLine[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateJournalEntryDto {
  date: string;
  description?: string;
  currencyId?: string;
  costCenterId?: string;
  reference?: string;
  lines: JournalEntryLine[];
}

