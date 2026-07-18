import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';
import { CreateBankAccountDto, CheckSequence } from '../../models/banking.model';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';

@Component({
  selector: 'app-register-bank-account',
  standalone: true,
  imports: [CommonModule, FormsModule, AccountSelectorModalComponent],
  templateUrl: './register-bank-account.component.html',
  styleUrl: './register-bank-account.component.scss'
})
export class RegisterBankAccountComponent implements OnInit {
  activeTab: string = 'datosGenerales';
  isAccountModalVisible = false;

  formData: CreateBankAccountDto = {
    accountNumber: '',
    bankName: '',
    name: '',
    accountType: 'Cuenta de Ahorros',
    city: '',
    checkFormat: '',
    forCollectionFormat: false,
    accountId: '',
    isActive: true,
    checkSequences: []
  };

  accountName: string = '';
  bankOptions = [
    'Banco Amazonas',
    'Banco Bolivariano',
    'Banco Coopnacional',
    'Banco D-Miro',
    'Banco de Desarrollo del Ecuador (BDE)',
    'Banco de Machala',
    'Banco del Austro',
    'Banco del Pacífico',
    'Banco Guayaquil',
    'Banco Internacional',
    'Banco Litoral',
    'Banco Pichincha',
    'Banco ProCredit',
    'Banco Solidario',
    'Banco VisionFund Ecuador',
    'BanEcuador',
    'BIESS',
    'Citibank',
    'Cooperativa 15 de Abril',
    'Cooperativa 29 de Octubre',
    'Cooperativa Alianza del Valle',
    'Cooperativa Andalucía',
    'Cooperativa Atuntaqui',
    'Cooperativa Cacpeco',
    'Cooperativa CACPE Pastaza',
    'Cooperativa COOPROGRESO',
    'Cooperativa El Sagrario',
    'Cooperativa Jardín Azuayo',
    'Cooperativa JEP',
    'Cooperativa Mushuc Runa',
    'Cooperativa Oscus',
    'Cooperativa Pablo Muñoz Vega',
    'Cooperativa Policía Nacional',
    'Cooperativa Riobamba',
    'Cooperativa San Francisco',
    'Cooperativa San Francisco de Asís',
    'Cooperativa San José',
    'Cooperativa Santa Rosa',
    'Cooperativa Tulcán',
    'Mutualista Azuay',
    'Mutualista Imbabura',
    'Mutualista Pichincha',
    'Produbanco',
    'Otro...'
  ];
  formatOptions = ['Bco. Guayaquil', 'Bco. Pichincha', 'Bco. Pacífico'];

  constructor(
    private bankingService: BankingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // In a real app we would load the existing account
    }
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: any) {
    this.formData.accountId = account.id;
    this.accountName = account.name;
    this.isAccountModalVisible = false;
  }

  addSequence() {
    if (!this.formData.checkSequences) {
      this.formData.checkSequences = [];
    }
    this.formData.checkSequences.push({
      startSequence: '',
      endSequence: '',
      isActive: true
    });
  }

  removeSequence(index: number) {
    if (this.formData.checkSequences) {
      this.formData.checkSequences.splice(index, 1);
    }
  }

  save() {
    if (!this.formData.name || !this.formData.accountNumber || !this.formData.accountId || !this.formData.bankName || !this.formData.city) {
      alert('Por favor, complete los campos obligatorios (*)');
      return;
    }

    this.bankingService.createBankAccount(this.formData).subscribe({
      next: (res) => {
        alert('Cuenta bancaria guardada con éxito');
        this.router.navigate(['/banking']); // O donde corresponda
      },
      error: (err) => {
        console.error(err);
        alert('Error al guardar la cuenta');
      }
    });
  }
}
