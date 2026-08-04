import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';
import { PersonaService } from '../../core/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss']
})
export class RegisterPaymentComponent implements OnInit {
  transactionType = 'Cobro';
  paymentMethod = 'Transferencia';
  issueDate = new Date().toISOString().split('T')[0];
  
  personSearch = '';
  selectedPersonId = '';
  persons: any[] = [];
  showPersonResults = false;
  
  bankAccount = '';
  bankAccounts: any[] = [];
  
  checkNumber = '';
  description = '';
  sendEmail = false;
  saving = false;

  documents: any[] = [];
  total = 0;

  get paymentMethods() {
    return ['Transferencia', 'Cheque', 'Efectivo', 'Tarjeta de Crédito', 'Cruce de Documentos'];
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private bankingService: BankingService,
    private personaService: PersonaService
  ) {}

  ngOnInit() {
    this.bankingService.getBankAccounts().subscribe(accs => this.bankAccounts = accs);
  }

  onTransactionTypeChange() {
    this.paymentMethod = 'Transferencia';
  }

  searchPersons() {
    if (this.personSearch.length < 2) {
      this.showPersonResults = false;
      return;
    }
    
    // Filtro rápido de personas (idealmente llamar a la API con param q)
    this.personaService.getPersonas().subscribe(data => {
      this.persons = data.filter(p => 
        p.nombre.toLowerCase().includes(this.personSearch.toLowerCase()) || 
        (p.ruc && p.ruc.includes(this.personSearch)) ||
        (p.cedula && p.cedula.includes(this.personSearch))
      );
      this.showPersonResults = true;
    });
  }

  selectPerson(person: any) {
    this.personSearch = person.nombre;
    this.selectedPersonId = person.id;
    this.showPersonResults = false;
    
    // Autocompletar cuenta bancaria si aplica
    if (person.bancoId) {
      this.bankAccount = person.bancoId;
    }
  }

  hidePersonResults() {
    setTimeout(() => this.showPersonResults = false, 200);
  }

  addDocument() {
    this.documents.push({
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
    this.transactionType = 'Cobro';
    this.paymentMethod = 'Transferencia';
    this.issueDate = new Date().toISOString().split('T')[0];
    this.personSearch = '';
    this.selectedPersonId = '';
    this.bankAccount = '';
    this.checkNumber = '';
    this.description = '';
    this.documents = [];
    this.total = 0;
  }

  save() {
    if (!this.selectedPersonId && !this.personSearch) {
      Swal.fire('Error', 'Debe seleccionar una persona', 'warning');
      return;
    }
    
    if (this.total <= 0 && this.documents.length > 0) {
      Swal.fire('Error', 'El monto a pagar debe ser mayor a 0', 'warning');
      return;
    }

    this.saving = true;

    const payload: any = {
      bankAccountId: this.bankAccount || null,
      personaId: this.selectedPersonId || null,
      personName: this.personSearch, // Fallback
      date: this.issueDate,
      description: this.description,
      amount: this.total,
      type: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
      transactionType: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
      paymentMethod: this.paymentMethod,
      checkNumber: this.checkNumber,
      checkDate: this.issueDate,
      details: this.documents.map(d => ({
        accountName: d.documentLabel || 'S/N',
        amount: d.amountToPay,
        costCenter: 'N/A'
      }))
    };

    this.bankingService.createTransaction(payload).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Transacción guardada correctamente', 'success').then(() => {
          this.router.navigate(['/payment-records']);
        });
        this.saving = false;
      },
      error: () => {
        Swal.fire('Error', 'Hubo un problema al guardar la transacción', 'error');
        this.saving = false;
      }
    });
  }
}
