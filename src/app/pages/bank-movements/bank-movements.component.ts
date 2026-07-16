import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';

@Component({
  selector: 'app-bank-movements',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AccountSelectorModalComponent],
  templateUrl: './bank-movements.component.html',
  styleUrl: './bank-movements.component.scss'
})
export class BankMovementsComponent implements OnInit {
  isAccountModalVisible = false;
  searchedData = false;
  
  filters = {
    bankId: '',
    bankName: '',
    desde: '',
    hasta: '',
    tipo: 'Todos'
  };

  initialBalance: number = 0;
  filteredMovements: any[] = [];

  constructor(private router: Router, private bankingService: BankingService) {}

  ngOnInit() {
    // Inicializar fechas por defecto (1er dia del mes y hoy)
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.filters.desde = firstDay.toISOString().split('T')[0];
    this.filters.hasta = today.toISOString().split('T')[0];
  }

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: any) {
    this.filters.bankId = account.id;
    this.filters.bankName = account.name;
    this.isAccountModalVisible = false;
  }

  loadStatement() {
    if (!this.filters.bankId) {
      alert('Por favor selecciona un banco.');
      return;
    }

    if (!this.filters.desde || !this.filters.hasta) {
      alert('Por favor selecciona un rango de fechas.');
      return;
    }

    this.bankingService.getAccountStatement(this.filters.bankId, this.filters.desde, this.filters.hasta)
      .subscribe({
        next: (res) => {
          this.searchedData = true;
          this.initialBalance = res.initialBalance || 0;
          
          let currentBalance = this.initialBalance;
          
          // Apply Frontend Filters (e.g. Tipo: Todos/Ingreso/Egreso)
          let rawTransactions = res.transactions || [];
          if (this.filters.tipo !== 'Todos') {
            rawTransactions = rawTransactions.filter((tx: any) => 
              tx.transactionType === this.filters.tipo || tx.type === this.filters.tipo
            );
          }

          this.filteredMovements = rawTransactions.map((tx: any) => {
            const amount = Number(tx.amount) || 0;
            const isEgreso = tx.transactionType === 'Egreso' || tx.type === 'Egreso';
            
            // Calculate running balance
            if (isEgreso) {
              currentBalance -= amount;
            } else {
              currentBalance += amount;
            }

            return {
              ...tx,
              runningBalance: currentBalance
            };
          });
        },
        error: (err) => {
          console.error(err);
          alert('Error al obtener el estado de cuenta');
        }
      });
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
    const d = new Date(dateStr);
    d.setMinutes(d.getMinutes() + d.getTimezoneOffset()); // adjust for local tz issue when parsing yyyy-mm-dd
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  downloadPDF() {
    // Para futuras implementaciones si el usuario desea el PDF.
    alert('Funcionalidad de PDF en desarrollo para Estado de Cuenta.');
  }
}
