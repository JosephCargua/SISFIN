import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CompanySettings {
  id?: string;
  companyName: string;
  ruc: string;
  signatures: { role: string; name: string }[];
  defaultAccounts: {
    payableAccountId: string | null;
    receivableAccountId: string | null;
    inventoryAccountId: string | null;
    salesAccountId: string | null;
    cogsAccountId: string | null;
    expenseAccountId: string | null;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = `${environment.apiUrl}/company-settings`;

  constructor(private http: HttpClient) {}

  getSettings(): Observable<CompanySettings> {
    return this.http.get<CompanySettings>(this.apiUrl);
  }

  updateSettings(data: Partial<CompanySettings>): Observable<CompanySettings> {
    return this.http.put<CompanySettings>(this.apiUrl, data);
  }
}
