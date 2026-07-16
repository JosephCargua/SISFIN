import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-bank-movements',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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

  movements = [
    { 
      emision: '07/07/2026', 
      comprobante: '202607000001', 
      comprobanteType: 'Cobro',
      persona: 'ANNE SOPHIE CARDIN', 
      transaccionType: 'Transacción',
      transaccionDetail: 'Transferencia/NC # 124847047',
      cuenta: 'PAPANGU TURISMO CIA. LTDA',
      total: 420.00
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

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
    this.filters.cuentaBancaria = acc.name;
    this.closeAccountModal();
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  }

  navigateToAdd(type: string) {
    this.showActionMenu = false;
    // For now they all go to the same general registration screen
    this.router.navigate(['/register-bank-movement']);
  }
}
