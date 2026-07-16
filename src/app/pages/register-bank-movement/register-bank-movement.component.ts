import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register-bank-movement',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-bank-movement.component.html',
  styleUrl: './register-bank-movement.component.scss'
})
export class RegisterBankMovementComponent implements OnInit {
  
  movement = {
    tipoMovimiento: 'Egreso',
    metodo: 'Cheque',
    anulado: false,
    fechaEmision: '2026-07-14',
    cuentaBancaria: '',
    persona: '',
    paguese: '',
    numeroCheque: '',
    fechaCheque: '2026-07-14',
    descripcion: ''
  };

  accountsDetails: any[] = [
    { cuenta: '', monto: 0, centroCosto: '', proyecto: '' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  addDetail() {
    this.accountsDetails.push({ cuenta: '', monto: 0, centroCosto: '', proyecto: '' });
  }

  removeDetail(index: number) {
    this.accountsDetails.splice(index, 1);
  }

  getTotal(): number {
    return this.accountsDetails.reduce((acc, curr) => acc + (Number(curr.monto) || 0), 0);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  }

  save() {
    alert('Movimiento registrado exitosamente');
    this.router.navigate(['/bank-movements']);
  }
}
