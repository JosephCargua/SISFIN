import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../../core/services/banking.service';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-bank-reconciliations',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './bank-reconciliations.component.html',
  styleUrl: './bank-reconciliations.component.scss'
})
export class BankReconciliationsComponent implements OnInit {
  reconciliations: any[] = [];
  bankAccounts: any[] = [];
  
  filters = {
    bankId: '',
    text: '',
    dateFrom: '',
    dateTo: ''
  };

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
    if(confirm('¿Está seguro de eliminar esta conciliación?')) {
      // Pending backend delete
      alert('Delete pending');
    }
  }
}
