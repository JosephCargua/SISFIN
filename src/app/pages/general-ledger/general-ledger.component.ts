import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalEntryService } from '../../core/services/journal-entry.service';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';

@Component({
  selector: 'app-general-ledger',
  standalone: true,
  imports: [CommonModule, FormsModule, AccountSelectorModalComponent],
  templateUrl: './general-ledger.component.html',
  styleUrl: './general-ledger.component.scss',
})
export class GeneralLedgerComponent {
  accounts: Account[] = [];
  selectedAccountId = '';
  accountName = '';
  isAccountModalVisible = false;
  startDate = new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
  endDate = new Date().toISOString().split('T')[0];
  ledgerData: any = null;
  loading = false;

  constructor(
    private journalEntryService: JournalEntryService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        this.accounts = data.filter((a) => a.isActive);
      },
      error: (error) => {
        console.error('Error loading accounts:', error);
      },
    });
  }

  openAccountModal() {
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account) {
    this.selectedAccountId = account.id;
    this.accountName = `${account.code} - ${account.name}`;
    this.isAccountModalVisible = false;
  }

  generateLedger() {
    if (!this.selectedAccountId) {
      alert('Por favor seleccione una cuenta');
      return;
    }

    this.loading = true;
    this.ledgerData = null; // Limpiar datos anteriores

    this.journalEntryService
      .getGeneralLedger(this.selectedAccountId, this.startDate, this.endDate)
      .subscribe({
        next: (data) => {
          this.ledgerData = data;
          this.loading = false;

          if (!data.movements || data.movements.length === 0) {
            alert(
              'No se encontraron movimientos para esta cuenta en el período seleccionado.\n\n' +
                'Asegúrate de:\n' +
                '1. Tener asientos contables creados\n' +
                '2. Que los asientos estén POSTEADOS (no borradores)\n' +
                '3. Que las fechas de los asientos estén dentro del rango seleccionado',
            );
          }
        },
        error: (error) => {
          console.error('Error loading ledger:', error);
          let errorMessage = 'Error al cargar el libro mayor';

          if (error.status === 404) {
            errorMessage = 'Cuenta no encontrada. Por favor seleccione otra cuenta.';
          } else if (error.status === 400) {
            errorMessage =
              error.error?.message ||
              'Datos inválidos. Verifique las fechas y la cuenta seleccionada.';
          } else if (error.status === 0) {
            errorMessage =
              'No se pudo conectar al servidor. Verifique que el backend esté ejecutándose.';
          }

          alert(errorMessage);
          this.loading = false;
        },
      });
  }

  editJournalEntry(id: string) {
    if (id) {
      this.router.navigate(['/journal-entries'], { queryParams: { edit: id } });
    }
  }
}

