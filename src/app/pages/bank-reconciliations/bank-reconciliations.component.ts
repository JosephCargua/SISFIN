import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../../core/services/banking.service';
import { AccountService } from '../../core/services/account.service';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';

@Component({
  selector: 'app-bank-reconciliations',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AccountSelectorModalComponent],
  templateUrl: './bank-reconciliations.component.html',
  styleUrl: './bank-reconciliations.component.scss'
})
export class BankReconciliationsComponent implements OnInit {
  reconciliations: any[] = [];
  bankAccounts: any[] = [];
  isAccountModalVisible = false;
  
  filters = {
    bankId: '',
    bankName: '',
    text: '',
    dateFrom: '',
    dateTo: ''
  };

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: any) {
    this.filters.bankId = account.id;
    this.filters.bankName = account.name;
    this.isAccountModalVisible = false;
  }
  isDeleteModalVisible = false;
  reconciliationToDeleteId: string | null = null;

  constructor(
    private bankingService: BankingService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReconciliations();
    // Usually bank accounts would be loaded, but since reconciliation saves bankAccountId as string,
    // we'll try to map it using AccountService.
    this.accountService.getAll().subscribe(accs => {
      this.bankAccounts = accs;
      this.mapAccountNames();
    });
  }

  loadReconciliations() {
    this.bankingService.getReconciliations().subscribe(data => {
      this.reconciliations = data;
      this.mapAccountNames();
    });
  }

  get filteredReconciliations() {
    return this.reconciliations.filter(rec => {
      const matchBank = !this.filters.bankId || rec.bankAccountId === this.filters.bankId;
      
      let matchDate = true;
      if (this.filters.dateFrom && rec.reconciliationDate) {
        matchDate = matchDate && new Date(rec.reconciliationDate) >= new Date(this.filters.dateFrom);
      }
      if (this.filters.dateTo && rec.reconciliationDate) {
        matchDate = matchDate && new Date(rec.reconciliationDate) <= new Date(this.filters.dateTo);
      }
      
      let matchText = true;
      if (this.filters.text) {
         const txt = this.filters.text.toLowerCase();
         matchText = (rec.description && rec.description.toLowerCase().includes(txt)) ||
                     (rec.status && rec.status.toLowerCase().includes(txt));
      }
      
      return matchBank && matchDate && matchText;
    });
  }

  mapAccountNames() {
    if (this.bankAccounts.length > 0 && this.reconciliations.length > 0) {
      this.reconciliations.forEach(r => {
        const acc = this.bankAccounts.find(a => a.id === r.bankAccountId || a.name === r.bankAccountId);
        r.accountName = acc ? acc.name : r.bankAccountId; // Fallback if uuid is stored or name is stored
      });
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Number(amount) || 0);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  editReconciliation(id: string) {
    this.router.navigate(['/register-reconciliation', id]);
  }

  deleteReconciliation(id: string) {
    this.reconciliationToDeleteId = id;
    this.isDeleteModalVisible = true;
  }

  confirmDelete() {
    if (this.reconciliationToDeleteId) {
      this.bankingService.deleteReconciliation(this.reconciliationToDeleteId).subscribe({
        next: () => {
          this.isDeleteModalVisible = false;
          this.reconciliationToDeleteId = null;
          this.loadReconciliations();
        },
        error: (err) => {
          console.error('Error deleting reconciliation:', err);
          alert('Hubo un error al eliminar la conciliación.');
          this.isDeleteModalVisible = false;
          this.reconciliationToDeleteId = null;
        }
      });
    }
  }

  cancelDelete() {
    this.isDeleteModalVisible = false;
    this.reconciliationToDeleteId = null;
  }
}
