import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { BankingService } from '../../core/services/banking.service';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-register-reconciliation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AccountSelectorModalComponent],
  templateUrl: './register-reconciliation.component.html',
  styleUrl: './register-reconciliation.component.scss'
})
export class RegisterReconciliationComponent implements OnInit {
  
  reconciliationId: string | null = null;
  isAccountModalVisible = false;
  
  reconciliation = {
    reconciliationDate: new Date().toISOString().split('T')[0],
    bankAccountId: '',
    accountName: '',
    description: '',
    status: 'Pendiente',
    statementBalance: 0,
    accountingBalance: 0,
    difference: 0
  };

  movements: any[] = [];
  selectedMovementIds: Set<string> = new Set();
  initialBalance: number = 0;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bankingService: BankingService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.reconciliationId = params.get('id');
      if (this.reconciliationId) {
        this.loadReconciliation(this.reconciliationId);
      } else {
        this.loadUnreconciledMovements();
      }
    });
  }

  loadReconciliation(id: string) {
    this.bankingService.getReconciliationById(id).subscribe(recon => {
      this.reconciliation = {
        reconciliationDate: recon.reconciliationDate ? new Date(recon.reconciliationDate).toISOString().split('T')[0] : '',
        bankAccountId: recon.bankAccountId,
        accountName: recon.bankAccountId, // ideally fetch name
        description: recon.description || '',
        status: recon.status || 'Pendiente',
        statementBalance: recon.statementBalance,
        accountingBalance: recon.accountingBalance,
        difference: recon.difference
      };
      
      // Load movements for this reconciliation + unassigned if we want them to add more.
      // For simplicity we load all unassigned AND assigned to this ID.
      this.bankingService.getTransactions().subscribe(txs => {
        this.movements = txs.filter(tx => !tx.bankReconciliationId || tx.bankReconciliationId === id);
        
        // Mark as selected those that belong to this reconciliation
        this.selectedMovementIds.clear();
        this.movements.forEach(tx => {
          if (tx.bankReconciliationId === id) {
            this.selectedMovementIds.add(tx.id);
          }
        });
        
        this.calculateTotals();
      });
    });
  }
  
  loadUnreconciledMovements() {
    this.bankingService.getTransactions().subscribe(txs => {
      this.movements = txs.filter(tx => !tx.bankReconciliationId);
      this.calculateTotals();
    });
  }

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account) {
    this.reconciliation.bankAccountId = account.id;
    this.reconciliation.accountName = account.name;
    // Optional: reload movements filtered by this account
  }

  toggleMovement(id: string, event: any) {
    if (event.target.checked) {
      this.selectedMovementIds.add(id);
    } else {
      this.selectedMovementIds.delete(id);
    }
    this.calculateTotals();
  }

  isSelected(id: string): boolean {
    return this.selectedMovementIds.has(id);
  }

  calculateTotals() {
    let accBal = 0;
    this.movements.forEach(m => {
      if (this.selectedMovementIds.has(m.id)) {
        accBal += Number(m.amount) || 0;
      }
    });
    this.reconciliation.accountingBalance = accBal;
    this.reconciliation.difference = Number(this.reconciliation.statementBalance) - this.reconciliation.accountingBalance;
    this.initialBalance = Number(this.reconciliation.statementBalance) - this.reconciliation.accountingBalance;
  }

  onStatementBalanceChange() {
    this.calculateTotals();
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
    return new Date(dateStr).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  save() {
    const payload = {
      bankAccountId: this.reconciliation.bankAccountId,
      reconciliationDate: this.reconciliation.reconciliationDate,
      description: this.reconciliation.description,
      status: this.reconciliation.status,
      statementBalance: this.reconciliation.statementBalance,
      accountingBalance: this.reconciliation.accountingBalance,
      difference: this.reconciliation.difference,
      transactionIds: Array.from(this.selectedMovementIds)
    };

    if (this.reconciliationId) {
      this.bankingService.updateReconciliation(this.reconciliationId, payload).subscribe(() => {
        alert('Conciliación actualizada exitosamente');
        this.router.navigate(['/bank-reconciliations']);
      });
    } else {
      this.bankingService.createReconciliation(payload).subscribe(() => {
        alert('Conciliación guardada exitosamente');
        this.router.navigate(['/bank-reconciliations']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/bank-reconciliations']);
  }

  downloadPDF() {
    if (!this.reconciliationId) return;
    this.api.downloadFile(`bank-reconciliations/${this.reconciliationId}/pdf`).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `conciliacion-${this.reconciliationDateStr()}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Error al descargar PDF:', error);
        alert('Error al generar el reporte PDF. Revise la consola.');
      }
    });
  }

  private reconciliationDateStr() {
    return this.reconciliation.reconciliationDate || this.reconciliationId;
  }
}
