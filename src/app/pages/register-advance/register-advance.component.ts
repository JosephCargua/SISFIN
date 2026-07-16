import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';

import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-register-advance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AccountSelectorModalComponent],
  templateUrl: './register-advance.component.html',
  styleUrl: './register-advance.component.scss'
})
export class RegisterAdvanceComponent implements OnInit {
  
  movementId: string | null = null;
  
  isAccountModalVisible = false;
  currentEditingRowIndex: number | null = null;
  targetField: 'main' | 'detail' = 'main';
  
  movement = {
    tipoMovimiento: 'Egreso', // usually advance is an egreso
    tipoAnticipo: 'Proveedor',
    metodo: 'Cheque', 
    fechaEmision: new Date().toISOString().split('T')[0],
    cuentaBancaria: 'b567b458-1234-4567-8901-abcdefabcdef', 
    persona: '',
    paguese: '',
    numeroCheque: '',
    fechaCheque: new Date().toISOString().split('T')[0],
    descripcion: ''
  };

  accountsDetails: any[] = [
    { cuenta: '', monto: 0, centroCosto: '', proyecto: '' }
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
      this.movement.tipoMovimiento = tx.transactionType || 'Egreso';
      this.movement.metodo = 'Anticipo';
      this.movement.tipoAnticipo = tx.paymentMethod === 'Anticipo' ? 'Proveedor' : (tx.paymentMethod || 'Proveedor');
      this.movement.fechaEmision = tx.date ? new Date(tx.date).toISOString().split('T')[0] : '';
      this.movement.cuentaBancaria = tx.bankAccountId || '';
      this.movement.persona = tx.personName || '';
      this.movement.paguese = tx.payToOrderOf || '';
      this.movement.numeroCheque = tx.checkNumber || '';
      this.movement.fechaCheque = tx.checkDate ? new Date(tx.checkDate).toISOString().split('T')[0] : '';
      this.movement.descripcion = tx.description || '';
      
      if (tx.details && tx.details.length > 0) {
        this.accountsDetails = tx.details.map((d: any) => ({
          cuenta: d.accountName,
          monto: d.amount,
          centroCosto: d.costCenter,
          proyecto: d.project
        }));
      }
    });
  }

  openAccountModal(target: 'main' | 'detail', index: number | null = null) {
    this.targetField = target;
    this.currentEditingRowIndex = index;
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account) {
    if (this.targetField === 'main') {
      this.movement.cuentaBancaria = account.name;
    } else if (this.targetField === 'detail' && this.currentEditingRowIndex !== null) {
      this.accountsDetails[this.currentEditingRowIndex].cuenta = account.name;
    }
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
      // Sum logic can be modified, for now use first amount or simple sum if needed, but UI shows individual row sums not a total. We will store sum.
      amount: this.accountsDetails.reduce((a, b) => a + (Number(b.monto) || 0), 0),
      type: this.movement.tipoMovimiento,
      transactionType: this.movement.tipoMovimiento,
      paymentMethod: 'Anticipo',
      personName: this.movement.persona,
      payToOrderOf: this.movement.paguese,
      checkNumber: this.movement.numeroCheque,
      checkDate: this.movement.fechaCheque,
      details: this.accountsDetails.map(d => ({
        accountName: d.cuenta || 'N/A',
        amount: Number(d.monto) || 0,
        costCenter: d.centroCosto,
        project: d.proyecto
      }))
    };

    if (this.movementId) {
      this.bankingService.updateTransaction(this.movementId, payload).subscribe(() => {
        alert('Anticipo actualizado exitosamente');
        this.router.navigate(['/bank-movements']);
      });
    } else {
      this.bankingService.createTransaction(payload).subscribe(() => {
        alert('Anticipo registrado exitosamente');
        this.router.navigate(['/bank-movements']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/bank-movements']);
  }
}
