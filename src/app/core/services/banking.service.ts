import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  BankAccount,
  CashAccount,
  BankTransaction,
  CreateBankAccountDto,
  CreateCashAccountDto,
  CreateBankTransactionDto,
} from '../../models/banking.model';

@Injectable({
  providedIn: 'root',
})
export class BankingService {
  constructor(private api: ApiService) {}

  getBankAccounts(): Observable<BankAccount[]> {
    return this.api.get<BankAccount[]>('bank-accounts');
  }

  createBankAccount(account: CreateBankAccountDto): Observable<BankAccount> {
    return this.api.post<BankAccount>('bank-accounts', account);
  }

  getCashAccounts(): Observable<CashAccount[]> {
    return this.api.get<CashAccount[]>('cash-accounts');
  }

  createCashAccount(account: CreateCashAccountDto): Observable<CashAccount> {
    return this.api.post<CashAccount>('cash-accounts', account);
  }

  getAllTransactions(): Observable<BankTransaction[]> {
    return this.api.get<BankTransaction[]>('bank-transactions');
  }

  getTransactions(bankAccountId?: string): Observable<BankTransaction[]> {
    const endpoint = bankAccountId
      ? `bank-transactions/bank-account/${bankAccountId}`
      : 'bank-transactions';
    return this.api.get<BankTransaction[]>(endpoint);
  }

  getTransactionById(id: string): Observable<BankTransaction> {
    return this.api.get<BankTransaction>(`bank-transactions/${id}`);
  }

  createTransaction(transaction: CreateBankTransactionDto): Observable<BankTransaction> {
    return this.api.post<BankTransaction>('bank-transactions', transaction);
  }

  updateTransaction(id: string, transaction: CreateBankTransactionDto): Observable<BankTransaction> {
    return this.api.put<BankTransaction>(`bank-transactions/${id}`, transaction);
  }
}

