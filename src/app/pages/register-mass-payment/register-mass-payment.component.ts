import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';
import Swal from 'sweetalert2';
import { PersonaSelectorModalComponent } from '../../components/persona-selector-modal/persona-selector-modal.component';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-register-mass-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, PersonaSelectorModalComponent],
  templateUrl: './register-mass-payment.component.html',
  styleUrls: ['./register-mass-payment.component.scss']
})
export class RegisterMassPaymentComponent implements OnInit {
  transactionType = 'Pago';
  paymentMethod = 'Cheque - Cheque propio';
  issueDate = new Date().toISOString().split('T')[0];
  
  payToOrderOf = '';
  bankAccount = '';
  bankAccounts: any[] = [];
  
  checkNumber = '';
  checkDate = new Date().toISOString().split('T')[0];
  description = '';
  isAnnulled = false;
  
  saving = false;

  documents: any[] = [];
  total = 0;
  
  showPersonaModal = false;
  currentSelectingRowIndex: number | null = null;

  get paymentMethods() {
    return ['Transferencia', 'Cheque - Cheque propio', 'Efectivo', 'Tarjeta de Crédito', 'Cruce de Documentos'];
  }

  constructor(
    private router: Router,
    private bankingService: BankingService
  ) {}

  ngOnInit() {
    this.bankingService.getBankAccounts().subscribe(accs => this.bankAccounts = accs);
  }

  onTransactionTypeChange() {
    // Si cambia el tipo, se mantiene
  }

  addDocument() {
    this.documents.push({
      personaId: '',
      personName: '',
      documentLabel: '',
      issueDate: this.issueDate,
      type: 'Factura',
      value: 0,
      balance: 0,
      amountToPay: 0
    });
  }

  removeDocument(index: number) {
    this.documents.splice(index, 1);
    this.recalcTotal();
  }
  
  openPersonaModal(index: number) {
    this.currentSelectingRowIndex = index;
    this.showPersonaModal = true;
  }

  onPersonaSelected(person: Persona) {
    if (this.currentSelectingRowIndex !== null && this.documents[this.currentSelectingRowIndex]) {
      this.documents[this.currentSelectingRowIndex].personName = person.nombre;
      this.documents[this.currentSelectingRowIndex].personaId = person.id!;
    }
    this.currentSelectingRowIndex = null;
  }

  recalcTotal() {
    this.total = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
  }

  formatCurrency(amount: number): string {
    if (amount === undefined || amount === null || isNaN(amount)) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  resetForm() {
    this.transactionType = 'Pago';
    this.paymentMethod = 'Cheque - Cheque propio';
    this.issueDate = new Date().toISOString().split('T')[0];
    this.payToOrderOf = '';
    this.bankAccount = '';
    this.checkNumber = '';
    this.checkDate = new Date().toISOString().split('T')[0];
    this.description = '';
    this.isAnnulled = false;
    this.documents = [];
    this.total = 0;
  }

  save() {
    if (this.total <= 0 && this.documents.length > 0) {
      Swal.fire('Error', 'El monto a pagar total debe ser mayor a 0', 'warning');
      return;
    }

    if (this.documents.length === 0) {
      Swal.fire('Error', 'Debe agregar al menos un documento al detalle', 'warning');
      return;
    }

    this.saving = true;

    const payload: any = {
      bankAccountId: this.bankAccount || null,
      date: this.issueDate,
      description: this.description,
      amount: this.total,
      type: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
      transactionType: 'Cobro/Pago Masivo',
      paymentMethod: this.paymentMethod,
      payToOrderOf: this.payToOrderOf,
      checkNumber: this.checkNumber,
      checkDate: this.checkDate,
      isAnnulled: this.isAnnulled,
      details: this.documents.map(d => ({
        accountName: d.documentLabel || 'S/N', // For backwards compatibility if needed
        amount: d.amountToPay,
        costCenter: 'N/A',
        
        personaId: d.personaId || null,
        personName: d.personName || null,
        documentNumber: d.documentLabel || null,
        documentType: d.type || null,
        documentIssueDate: d.issueDate || null
      }))
    };

    this.bankingService.createTransaction(payload).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Pago masivo guardado correctamente', 'success').then(() => {
          this.router.navigate(['/payment-records']);
        });
        this.saving = false;
      },
      error: () => {
        Swal.fire('Error', 'Hubo un problema al guardar', 'error');
        this.saving = false;
      }
    });
  }
}
