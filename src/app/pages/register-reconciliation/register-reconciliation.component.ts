import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { BankingService } from '../../core/services/banking.service';
import { AccountService } from '../../core/services/account.service';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Account } from '../../models/account.model';
import * as XLSX from 'xlsx';

export interface BankStatementLine {
  id: string;
  date: string;
  description: string;
  amount: number;
  matchedTransactionId?: string;
}

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

  allMovements: any[] = [];
  movements: any[] = [];
  selectedMovementIds: Set<string> = new Set();
  
  bankStatementLines: BankStatementLine[] = [];
  
  initialBalance: number = 0;
  totalIncomes: number = 0;
  totalExpenses: number = 0;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bankingService: BankingService,
    private accountService: AccountService,
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
        accountName: '', 
        description: recon.description || '',
        status: recon.status || 'Pendiente',
        statementBalance: recon.statementBalance,
        accountingBalance: recon.accountingBalance,
        difference: recon.difference
      };
      this.initialBalance = Number(recon.initialBalance) || 0;
      
      if (recon.bankAccountId) {
        this.accountService.getById(recon.bankAccountId).subscribe(acc => {
          this.reconciliation.accountName = acc ? acc.name : recon.bankAccountId;
        });
      }
      
      if (recon.bankAccountId) {
        this.bankingService.getTransactions(recon.bankAccountId).subscribe(txs => {
          this.allMovements = txs.filter(tx => !tx.bankReconciliationId || tx.bankReconciliationId === id);
          this.selectedMovementIds.clear();
          this.allMovements.forEach(tx => {
            if (tx.bankReconciliationId === id) {
              this.selectedMovementIds.add(tx.id);
            }
          });
          this.filterMovements();
        });
      }
    });
  }
  
  loadUnreconciledMovements() {
    this.allMovements = [];
    this.movements = [];
  }

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account) {
    this.reconciliation.bankAccountId = account.id;
    this.reconciliation.accountName = account.name;
    this.isAccountModalVisible = false;
    
    this.bankingService.getAccountStatement(account.id, undefined, this.reconciliation.reconciliationDate).subscribe(statement => {
      this.initialBalance = statement.initialBalance || 0;
      
      this.bankingService.getTransactions(account.id).subscribe(txs => {
        this.allMovements = txs.filter(tx => !tx.bankReconciliationId || tx.bankReconciliationId === this.reconciliationId);
        if (this.reconciliationId) {
          this.allMovements.forEach(tx => {
            if (tx.bankReconciliationId === this.reconciliationId) {
              this.selectedMovementIds.add(tx.id);
            }
          });
        }
        this.filterMovements();
      });
    });
  }

  onDateChange() {
    this.filterMovements();
  }

  filterMovements() {
    if (!this.reconciliation.reconciliationDate) {
      this.movements = [...this.allMovements];
      this.calculateTotals();
      return;
    }
    
    const parts = this.reconciliation.reconciliationDate.split('-');
    const cutDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), 23, 59, 59, 999);
    
    this.movements = this.allMovements.filter(tx => {
      let txDate = new Date(tx.date);
      if (typeof tx.date === 'string' && tx.date.length === 10 && tx.date.indexOf('-') === 4) {
        const txParts = tx.date.split('-');
        txDate = new Date(Number(txParts[0]), Number(txParts[1]) - 1, Number(txParts[2]), 12, 0, 0);
      }
      return txDate.getTime() <= cutDate.getTime();
    });
    this.calculateTotals();
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
    this.totalIncomes = 0;
    this.totalExpenses = 0;

    this.movements.forEach(m => {
      if (this.selectedMovementIds.has(m.id)) {
        const amount = Number(m.amount) || 0;
        if (m.transactionType === 'Egreso' || m.type === 'Egreso') {
          this.totalExpenses += amount;
        } else {
          this.totalIncomes += amount;
        }
      }
    });

    this.reconciliation.accountingBalance = this.initialBalance + this.totalIncomes - this.totalExpenses;
    this.reconciliation.difference = Number(this.reconciliation.statementBalance) - this.reconciliation.accountingBalance;
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

  // --- Bank Statement Import Logic ---
  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as any[][];
      
      this.bankStatementLines = [];
      let startParsing = false;

      for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (!row || row.length === 0) continue;
        
        // Assume format is [Date, Description, Amount]
        // Very basic parsing for demo.
        if (row[0] && String(row[0]).match(/\d/)) {
          const rawDate = row[0];
          const rawDesc = row[1] || '';
          const rawAmount = Number(row[2]) || 0;

          if (rawAmount !== 0) {
            this.bankStatementLines.push({
              id: Math.random().toString(36).substring(7),
              date: this.parseExcelDate(rawDate),
              description: rawDesc,
              amount: rawAmount
            });
          }
        }
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }

  parseExcelDate(excelDate: any): string {
    if (typeof excelDate === 'number') {
      const d = new Date((excelDate - (25567 + 2)) * 86400 * 1000);
      return d.toISOString().split('T')[0];
    }
    // assume string YYYY-MM-DD or DD/MM/YYYY
    if (typeof excelDate === 'string' && excelDate.includes('/')) {
      const parts = excelDate.split('/');
      if (parts[2].length === 4) return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return String(excelDate);
  }

  autoReconcile() {
    // Basic auto-match logic: find same amount (+/- margin)
    this.bankStatementLines.forEach(bl => {
      if (bl.matchedTransactionId) return;

      const bankAmount = Math.abs(bl.amount);
      const possibleMatches = this.movements.filter(m => {
        if (this.selectedMovementIds.has(m.id)) return false; // already selected
        const mAmount = Number(m.amount);
        return Math.abs(mAmount - bankAmount) < 0.01;
      });

      if (possibleMatches.length > 0) {
        // match the first one
        const match = possibleMatches[0];
        bl.matchedTransactionId = match.id;
        this.selectedMovementIds.add(match.id);
      }
    });

    this.calculateTotals();
  }
  // ------------------------------------

  save(close: boolean) {
    if (close && Math.abs(this.reconciliation.difference) > 0.001) {
      alert('No se puede cerrar la conciliación si la diferencia no es cero.');
      return;
    }

    this.reconciliation.status = close ? 'Concluida' : 'Pendiente';

    const payload = {
      bankAccountId: this.reconciliation.bankAccountId,
      reconciliationDate: this.reconciliation.reconciliationDate,
      description: this.reconciliation.description,
      status: this.reconciliation.status,
      statementBalance: this.reconciliation.statementBalance,
      accountingBalance: this.reconciliation.accountingBalance,
      initialBalance: this.initialBalance,
      totalIncomes: this.totalIncomes,
      totalExpenses: this.totalExpenses,
      reconciledBalance: this.reconciliation.accountingBalance,
      difference: this.reconciliation.difference,
      transactionIds: Array.from(this.selectedMovementIds)
    };

    if (this.reconciliationId) {
      this.bankingService.updateReconciliation(this.reconciliationId, payload).subscribe(() => {
        alert('Conciliación actualizada exitosamente');
        this.router.navigate(['/bank-reconciliations']);
      }, err => {
        alert(err.error?.message || 'Error al guardar');
      });
    } else {
      this.bankingService.createReconciliation(payload).subscribe(() => {
        alert('Conciliación guardada exitosamente');
        this.router.navigate(['/bank-reconciliations']);
      }, err => {
        alert(err.error?.message || 'Error al guardar');
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
        alert('Error al generar el reporte PDF.');
      }
    });
  }

  private reconciliationDateStr() {
    return this.reconciliation.reconciliationDate || this.reconciliationId;
  }
}
