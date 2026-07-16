import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';

import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-register-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AccountSelectorModalComponent],
  templateUrl: './register-transaction.component.html',
  styleUrl: './register-transaction.component.scss'
})
export class RegisterTransactionComponent implements OnInit {
  
  movementId: string | null = null;
  isAccountModalVisible = false;
  
  movement = {
    tipoMovimiento: 'Ingreso',
    metodo: 'Transacción', 
    anulado: false,
    fechaEmision: new Date().toISOString().split('T')[0],
    cuentaBancaria: 'b567b458-1234-4567-8901-abcdefabcdef', 
    persona: '',
    paguese: '',
    numeroComprobante: '',
    esEfectivo: false,
    descripcion: ''
  };

  documentsDetails: any[] = [
    { documento: '', fechaEmision: '', tipoDocumento: '', valor: 0, saldo: 0, valorCobrar: 0 }
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bankingService: BankingService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movementId = params.get('id');
      if (this.movementId) {
        this.loadMovement(this.movementId);
      }
    });
  }

  loadMovement(id: string) {
    this.bankingService.getTransactionById(id).subscribe(tx => {
      this.movement.tipoMovimiento = tx.transactionType || 'Ingreso';
      this.movement.metodo = 'Transacción';
      this.movement.anulado = tx.isAnnulled || false;
      this.movement.fechaEmision = tx.date ? new Date(tx.date).toISOString().split('T')[0] : '';
      this.movement.cuentaBancaria = tx.bankAccountId || '';
      this.movement.persona = tx.personName || '';
      this.movement.numeroComprobante = tx.checkNumber || ''; // Reusing checkNumber for comprobante
      this.movement.descripcion = tx.description || '';
      
      // Map back details
      if (tx.details && tx.details.length > 0) {
        this.documentsDetails = tx.details.map((d: any) => ({
          documento: d.accountName, 
          fechaEmision: '', // Not strictly stored in detail
          tipoDocumento: d.costCenter || 'Factura', 
          valor: 0,
          saldo: 0,
          valorCobrar: d.amount
        }));
      }
    });
  }

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account) {
    this.movement.cuentaBancaria = account.name;
  }

  addDetail() {
    this.documentsDetails.push({ documento: '', fechaEmision: '', tipoDocumento: '', valor: 0, saldo: 0, valorCobrar: 0 });
  }

  removeDetail(index: number) {
    this.documentsDetails.splice(index, 1);
  }

  getTotal(): number {
    return this.documentsDetails.reduce((acc, curr) => acc + (Number(curr.valorCobrar) || 0), 0);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Number(amount) || 0);
  }

  save() {
    const payload: any = {
      bankAccountId: this.movement.cuentaBancaria,
      date: this.movement.fechaEmision,
      description: this.movement.descripcion,
      amount: this.getTotal(),
      type: this.movement.tipoMovimiento,
      transactionType: this.movement.tipoMovimiento,
      paymentMethod: this.movement.metodo,
      isAnnulled: this.movement.anulado,
      personName: this.movement.persona,
      checkNumber: this.movement.numeroComprobante,
      details: this.documentsDetails.map(d => ({
        accountName: d.documento || 'Documento',
        amount: Number(d.valorCobrar) || 0,
        costCenter: d.tipoDocumento
      }))
    };

    if (this.movementId) {
      this.bankingService.updateTransaction(this.movementId, payload).subscribe(() => {
        alert('Transacción actualizada exitosamente');
        this.router.navigate(['/bank-movements']);
      });
    } else {
      this.bankingService.createTransaction(payload).subscribe(() => {
        alert('Transacción registrada exitosamente');
        this.router.navigate(['/bank-movements']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/bank-movements']);
  }
}
