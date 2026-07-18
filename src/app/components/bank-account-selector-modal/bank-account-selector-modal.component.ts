import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../../core/services/banking.service';
import { BankAccount } from '../../models/banking.model';

@Component({
  selector: 'app-bank-account-selector-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div *ngIf="isVisible" class="modal-backdrop" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
    <div class="modal-content" style="background: white; border-radius: 8px; width: 600px; max-width: 90vw; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; padding: 16px; border-bottom: 1px solid #e2e8f0;">
        <h3 style="margin: 0; font-size: 16px; color: #1e293b;">Seleccionar Cuenta Bancaria</h3>
        <span class="material-icons" (click)="closeModal()" style="cursor: pointer; color: #0ea5e9;">close</span>
      </div>
      <div class="modal-body" style="padding: 16px;">
        <div class="modal-filter" style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
          <label style="font-size: 13px; font-weight: 500; color: #334155;">Filtro:</label>
          <input type="text" [(ngModel)]="filterText" (input)="search()" style="flex: 1; padding: 6px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 13px;" />
          <button class="btn btn-primary" (click)="search()" style="background-color: #0ea5e9; border: none; color: white; padding: 6px 12px; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 13px;"><span class="material-icons" style="font-size: 16px;">search</span> Consultar</button>
        </div>
        <div class="table-scroll" style="max-height: 400px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 4px;">
          <table class="data-table" style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <thead style="background-color: #f1f5f9; color: #475569;">
              <tr>
                <th style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; text-align: left;">Número</th>
                <th style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; text-align: left;">Nombre</th>
                <th style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; text-align: left;">Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let acc of filteredAccounts" (click)="selectAccount(acc)" class="clickable-row" style="cursor: pointer; border-bottom: 1px solid #e2e8f0;">
                <td style="color: #0ea5e9; text-decoration: underline; padding: 10px 12px;">{{ acc.accountNumber }}</td>
                <td style="padding: 10px 12px; color: #334155;">{{ acc.bankName }}</td>
                <td style="padding: 10px 12px; color: #334155;">{{ acc.accountType }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination-info" style="padding: 12px 16px; font-size: 12px; color: #64748b;">
          Página 1 de 1. Total de registros: {{ filteredAccounts.length }}
        </div>
      </div>
    </div>
  </div>
  `
})
export class BankAccountSelectorModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() accountSelected = new EventEmitter<BankAccount>();
  @Output() close = new EventEmitter<void>();

  filterText: string = '';
  accounts: BankAccount[] = [];
  filteredAccounts: BankAccount[] = [];

  constructor(private bankingService: BankingService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.bankingService.getBankAccounts().subscribe({
      next: (data) => {
        this.accounts = data;
        this.filteredAccounts = [...this.accounts];
      },
      error: (err) => console.error('Failed to load bank accounts for modal', err)
    });
  }

  search() {
    if (!this.filterText.trim()) {
      this.filteredAccounts = [...this.accounts];
      return;
    }
    const term = this.filterText.toLowerCase();
    this.filteredAccounts = this.accounts.filter(a => 
      a.bankName?.toLowerCase().includes(term) || a.accountNumber?.toLowerCase().includes(term)
    );
  }

  selectAccount(account: BankAccount) {
    this.accountSelected.emit(account);
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
