import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-selector-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-selector-modal.component.html',
  styleUrl: './account-selector-modal.component.scss'
})
export class AccountSelectorModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() accountSelected = new EventEmitter<Account>();
  @Output() close = new EventEmitter<void>();

  filterText: string = '';
  accounts: Account[] = [];
  filteredAccounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        // Exclude parent accounts or leave all? The mockup shows 1.1.1.1 which is usually a child.
        // We will show all active accounts.
        this.accounts = data.filter(a => a.isActive);
        this.filteredAccounts = [...this.accounts];
      },
      error: (err) => console.error('Failed to load accounts for modal', err)
    });
  }

  search() {
    if (!this.filterText.trim()) {
      this.filteredAccounts = [...this.accounts];
      return;
    }
    const term = this.filterText.toLowerCase();
    this.filteredAccounts = this.accounts.filter(a => 
      a.name.toLowerCase().includes(term) || a.code.toLowerCase().includes(term)
    );
  }

  selectAccount(account: Account) {
    this.accountSelected.emit(account);
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
