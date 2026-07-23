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

  deleteTransaction(id: string): Observable<void> {
    return this.api.delete<void>(`bank-transactions/${id}`);
  }

  getAccountStatement(bankAccountId: string, startDate?: string, endDate?: string): Observable<any> {
    const params: any = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;
    return this.api.get<any>(`bank-transactions/bank-account/${bankAccountId}/statement`, params);
  }

  // --- Bank Reconciliations ---
  getReconciliations(): Observable<any[]> {
    return this.api.get<any[]>('bank-reconciliations');
  }

  getReconciliationById(id: string): Observable<any> {
    return this.api.get<any>(`bank-reconciliations/${id}`);
  }

  createReconciliation(data: any): Observable<any> {
    return this.api.post<any>('bank-reconciliations', data);
  }

  updateReconciliation(id: string, data: any): Observable<any> {
    return this.api.put<any>(`bank-reconciliations/${id}`, data);
  }

  deleteReconciliation(id: string): Observable<void> {
    return this.api.delete<void>(`bank-reconciliations/${id}`);
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

