import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';
import { PersonaService } from '../../core/services/persona.service';
import Swal from 'sweetalert2';
import { PersonaSelectorModalComponent } from '../../components/persona-selector-modal/persona-selector-modal.component';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Persona } from '../../models/persona.model';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-register-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, PersonaSelectorModalComponent, AccountSelectorModalComponent],
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss']
})
export class RegisterPaymentComponent implements OnInit {
  transactionType = 'Cobro';
  paymentMethod = 'Caja';
  issueDate = new Date().toISOString().split('T')[0];
  
  personSearch = '';
  selectedPersonId = '';
  showPersonaModal = false;
  
  showAccountModal = false;
  accountSearch = '';
  selectedAccountId = '';
  
  bankAccount = '';
  bankAccounts: any[] = [];
  
  checkNumber = '';
  description = '';
  sendEmail = false;
  saving = false;

  activeTab = 'Documentos';

  // Tabs Data
  documents: any[] = [];
  advances: any[] = [];
  accounts: any[] = [];
  postdatedChecks: any[] = [];

  // Totals
  totalDocuments = 0;
  totalAdvances = 0;
  totalAccounts = 0;
  totalToPay = 0;

  get paymentMethods() {
    return ['Caja', 'Transferencia', 'Cheque', 'Tarjeta de Crédito', 'Dinero electrónico'];
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
    this.paymentMethod = 'Caja';
    this.documents = [];
    this.advances = [];
    this.accounts = [];
    this.postdatedChecks = [];
    this.recalcTotal();
  }

  openPersonaModal() {
    this.showPersonaModal = true;
  }

  onPersonaSelected(person: Persona) {
    this.personSearch = person.nombre;
    this.selectedPersonId = person.id!;
    if (person.bancoId) this.bankAccount = person.bancoId;
  }

  openAccountModal() {
    this.showAccountModal = true;
  }

  onAccountSelected(account: Account) {
    this.accountSearch = `${account.code} - ${account.name}`;
    this.selectedAccountId = account.id!;
  }

  // --- Documentos ---
  addDocument() {
    this.documents.push({
      documentLabel: '', issueDate: this.issueDate, type: 'Factura', value: 0, balance: 0, amountToPay: 0
    });
  }
  removeDocument(index: number) {
    this.documents.splice(index, 1);
    this.recalcTotal();
  }

  // --- Anticipos ---
  addAdvance() {
    this.advances.push({
      advanceLabel: '', issueDate: this.issueDate, balance: 0, amountToApply: 0
    });
  }
  removeAdvance(index: number) {
    this.advances.splice(index, 1);
    this.recalcTotal();
  }

  // --- Cuentas ---
  addAccount() {
    this.accounts.push({
      accountCode: '', accountName: '', description: '', amount: 0
    });
  }
  removeAccount(index: number) {
    this.accounts.splice(index, 1);
    this.recalcTotal();
  }

  // --- Posfechados ---
  addPostdatedCheck() {
    this.postdatedChecks.push({
      bank: '', checkNumber: '', amount: 0, date: this.issueDate
    });
  }
  removePostdatedCheck(index: number) {
    this.postdatedChecks.splice(index, 1);
    this.recalcTotal();
  }

  recalcTotal() {
    this.totalDocuments = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
    this.totalAdvances = this.advances.reduce((acc, adv) => acc + (adv.amountToApply || 0), 0);
    this.totalAccounts = this.accounts.reduce((acc, cta) => acc + (cta.amount || 0), 0);
    
    // Total a Pagar = Documentos - Anticipos +/- Cuentas (dependiendo si es cobro o pago)
    // Para simplificar, lo sumamos como valores absolutos que el usuario asigna.
    // Si es un cobro, los documentos suman, los anticipos restan lo que se cobra hoy, las cuentas pueden sumar/restar.
    this.totalToPay = (this.totalDocuments - this.totalAdvances) + this.totalAccounts;
    if (this.totalToPay < 0) this.totalToPay = 0;
  }

  formatCurrency(amount: number): string {
    if (amount === undefined || amount === null || isNaN(amount)) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', minimumFractionDigits: 2,
    }).format(amount);
  }

  resetForm() {
    this.transactionType = 'Cobro';
    this.paymentMethod = 'Caja';
    this.issueDate = new Date().toISOString().split('T')[0];
    this.personSearch = '';
    this.selectedPersonId = '';
    this.bankAccount = '';
    this.checkNumber = '';
    this.description = '';
    
    this.documents = [];
    this.advances = [];
    this.accounts = [];
    this.postdatedChecks = [];
    this.recalcTotal();
  }

  save() {
    if (!this.selectedPersonId && !this.personSearch) {
      Swal.fire('Error', 'Debe seleccionar una persona', 'warning');
      return;
    }
    
    if (this.totalToPay <= 0 && this.documents.length === 0 && this.accounts.length === 0) {
      Swal.fire('Error', 'El monto a registrar debe ser mayor a 0', 'warning');
      return;
    }

    this.saving = true;

    // Juntar detalles de todas las pestañas
    const payloadDetails: any[] = [];
    
    this.documents.forEach(d => payloadDetails.push({
      sourceType: 'DOCUMENT',
      accountName: d.documentLabel || 'S/N',
      documentNumber: d.documentLabel || 'S/N',
      amount: d.amountToPay,
      costCenter: 'N/A'
    }));

    this.advances.forEach(a => payloadDetails.push({
      sourceType: 'ANTICIPO',
      accountName: a.advanceLabel || 'Anticipo',
      documentNumber: a.advanceLabel || 'Anticipo',
      amount: -a.amountToApply, // Anticipos restan
      costCenter: 'N/A'
    }));

    this.accounts.forEach(c => payloadDetails.push({
      sourceType: 'ACCOUNT',
      accountName: c.accountName || c.accountCode || 'Cta',
      amount: c.amount,
      costCenter: 'N/A'
    }));

    const payload: any = {
      bankAccountId: this.bankAccount || null,
      personaId: this.selectedPersonId || null,
      personName: this.personSearch,
      date: this.issueDate,
      description: this.description,
      amount: this.totalToPay,
      type: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
      transactionType: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
      paymentMethod: this.paymentMethod,
      checkNumber: this.checkNumber,
      checkDate: this.issueDate,
      details: payloadDetails
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
