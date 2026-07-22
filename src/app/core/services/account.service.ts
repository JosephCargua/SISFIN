import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Account, CreateAccountDto } from '../../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private api: ApiService) {}

  getAll(): Observable<Account[]> {
    return this.api.get<Account[]>('accounts');
  }

  getHierarchy(): Observable<Account[]> {
    return this.api.get<Account[]>('accounts/hierarchy');
  }

  getById(id: string): Observable<Account> {
    return this.api.get<Account>(`accounts/${id}`);
  }

  getByCode(code: string): Observable<Account> {
    return this.api.get<Account>(`accounts/code/${code}`);
  }

  create(account: CreateAccountDto): Observable<Account> {
    return this.api.post<Account>('accounts', account);
  }

  update(id: string, account: Partial<CreateAccountDto>): Observable<Account> {
    return this.api.put<Account>(`accounts/${id}`, account);
  }

  deactivate(id: string): Observable<Account> {
    return this.api.patch<Account>(`accounts/${id}/deactivate`, {});
  }

  activate(id: string): Observable<Account> {
    return this.api.patch<Account>(`accounts/${id}/activate`, {});
  }
}

