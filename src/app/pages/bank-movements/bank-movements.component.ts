import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';

import { BankAccountSelectorModalComponent } from '../../components/bank-account-selector-modal/bank-account-selector-modal.component';

@Component({
  selector: 'app-bank-movements',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, BankAccountSelectorModalComponent],
  templateUrl: './bank-movements.component.html',
  styleUrl: './bank-movements.component.scss'
})
export class BankMovementsComponent implements OnInit {
  searchExpanded = true;
  showAccountModal = false;
  showActionMenu = false;
  
  filters = {
    banco: '',
    tipo: 'Todos',
    desde: '01/01/2026',
    hasta: '14/07/2026',
    comprobante: '',
    cheque: '',
    persona: '',
    cuentaBancaria: '',
    centroCosto: '',
    origen: 'Todos',
    subtipo: 'Todos',
    estado: 'Todos',
    modulo: 'Todos'
  };

  tiposMovimiento = [
    'Todos',
    'Cheque',
    'Depósito',
    'Nota de Crédito',
    'Nota de Débito',
    'Transferencia'
  ];

  mockAccounts = [
    { number: '3200059580', name: 'PAPANGU TURISMO CIA. LTDA', type: 'Corriente' }
  ];

  movements: any[] = [];

  constructor(private router: Router, private bankingService: BankingService) {}

  ngOnInit() {
    this.loadMovements();
  }

  loadMovements() {
    this.bankingService.getAllTransactions().subscribe((data) => {
      // Map API data to the table format
      this.movements = data.map(tx => ({
        id: tx.id,
        emision: tx.date,
        comprobante: tx.checkNumber || 'S/N',
        comprobanteType: tx.transactionType || 'Movimiento',
        persona: tx.personName || 'No Especificada',
        transaccionType: tx.paymentMethod || 'Transferencia',
        transaccionDetail: tx.description || 'Sin detalle',
        cuenta: tx.bankAccountId, // ideally we would resolve the name
        total: tx.amount,
        // Used to route back to the correct screen:
        sourceForm: tx.paymentMethod === 'Anticipo' ? 'anticipo' : (tx.paymentMethod === 'Transacción' ? 'transaccion' : 'movimiento')
      }));
    });
  }

  toggleSearchPanel() {
    this.searchExpanded = !this.searchExpanded;
  }

  toggleActionMenu() {
    this.showActionMenu = !this.showActionMenu;
  }

  openAccountModal() {
    this.showAccountModal = true;
  }

  closeAccountModal() {
    this.showAccountModal = false;
  }

  selectAccount(acc: any) {
    this.filters.cuentaBancaria = acc.bankName;
    this.closeAccountModal();
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Number(amount) || 0);
  }

  navigateToAdd(type: string) {
    this.showActionMenu = false;
    if (type === 'transaccion') {
      this.router.navigate(['/register-transaction']);
    } else if (type === 'anticipo') {
      this.router.navigate(['/register-advance']);
    } else {
      this.router.navigate(['/register-bank-movement']);
    }
  }

  editMovement(m: any) {
    if (m.sourceForm === 'transaccion') {
      this.router.navigate(['/register-transaction', m.id]);
    } else if (m.sourceForm === 'anticipo') {
      this.router.navigate(['/register-advance', m.id]);
    } else {
      this.router.navigate(['/register-bank-movement', m.id]);
    }
  }
}
