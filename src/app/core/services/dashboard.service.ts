import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface DashboardData {
  date: string;
  balanceSheet: {
    assets: Array<{ code: string; name: string; balance: number }>;
    liabilities: Array<{ code: string; name: string; balance: number }>;
    equity: Array<{ code: string; name: string; balance: number }>;
    totalAssets: number;
    totalLiabilities: number;
    totalEquity: number;
  };
  incomeStatement: {
    income: Array<{ code: string; name: string; balance: number }>;
    expenses: Array<{ code: string; name: string; balance: number }>;
    totalIncome: number;
    totalExpenses: number;
  };
  bankAccounts: {
    accounts: Array<{ id: string; name: string; balance: number }>;
    totalBalance: number;
  };
  cashAccounts: {
    accounts: Array<{ id: string; name: string; balance: number }>;
    totalBalance: number;
  };
  totalReceivables: number;
  totalPayables: number;
  summary: {
    totalAssets: number;
    totalLiabilities: number;
    totalEquity: number;
    totalIncome: number;
    totalExpenses: number;
    netIncome: number;
    totalCash: number;
    totalReceivables: number;
    totalPayables: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private api: ApiService) {}

  getDashboardData(date?: string): Observable<DashboardData> {
    const params = date ? { date } : {};
    return this.api.get<DashboardData>('dashboard', params);
  }
}

