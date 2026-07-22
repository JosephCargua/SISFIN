import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account.service';
import { Account, AccountType, CreateAccountDto } from '../../models/account.model';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  accountsHierarchy: Account[] = [];
  showCreateForm = false;
  isEditing = false;
  editingAccountId: string | null = null;
  accountTypes = Object.values(AccountType);
  accountTypeLabels: Record<AccountType, string> = {
    [AccountType.ASSET]: 'Activo',
    [AccountType.LIABILITY]: 'Pasivo',
    [AccountType.EQUITY]: 'Patrimonio',
    [AccountType.INCOME]: 'Ingresos',
    [AccountType.EXPENSE]: 'Gastos',
  };

  newAccount: CreateAccountDto = {
    code: '',
    name: '',
    type: AccountType.ASSET,
    parentId: null,
    isControlAccount: false,
  };

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.loadAccounts();
    this.loadHierarchy();
  }

  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        this.accounts = data;
      },
      error: (error) => {
        console.error('Error loading accounts:', error);
        alert('Error al cargar las cuentas');
      },
    });
  }

  loadHierarchy() {
    this.accountService.getHierarchy().subscribe({
      next: (data) => {
        this.accountsHierarchy = data;
      },
      error: (error) => {
        console.error('Error loading hierarchy:', error);
      },
    });
  }

  createAccount() {
    if (!this.newAccount.code || !this.newAccount.name) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    if (this.isEditing && this.editingAccountId) {
      this.accountService.update(this.editingAccountId, this.newAccount).subscribe({
        next: () => {
          alert('Cuenta actualizada exitosamente');
          this.showCreateForm = false;
          this.isEditing = false;
          this.editingAccountId = null;
          this.resetForm();
          this.loadAccounts();
          this.loadHierarchy();
        },
        error: (error) => {
          console.error('Error updating account:', error);
          alert(error.error?.message || 'Error al actualizar la cuenta');
        },
      });
    } else {
      this.accountService.create(this.newAccount).subscribe({
        next: () => {
          alert('Cuenta creada exitosamente');
          this.showCreateForm = false;
          this.resetForm();
          this.loadAccounts();
          this.loadHierarchy();
        },
        error: (error) => {
          console.error('Error creating account:', error);
          alert(error.error?.message || 'Error al crear la cuenta');
        },
      });
    }
  }

  editAccount(account: Account) {
    this.isEditing = true;
    this.editingAccountId = account.id;
    this.newAccount = {
      code: account.code,
      name: account.name,
      type: account.type,
      parentId: account.parentId || null,
      isControlAccount: account.isControlAccount,
    };
    this.showCreateForm = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  resetForm() {
    this.newAccount = {
      code: '',
      name: '',
      type: AccountType.ASSET,
      parentId: null,
      isControlAccount: false,
    };
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.resetForm();
      this.isEditing = false;
      this.editingAccountId = null;
    }
  }

  deactivateAccount(account: Account) {
    import('sweetalert2').then(module => {
      const Swal = module.default;
      Swal.fire({
        title: `¿Está seguro de desactivar la cuenta "${account.code} - ${account.name}"?`,
        html: `Nota: No se puede desactivar una cuenta que:<br/>- Tenga cuentas hijas activas<br/>- Tenga movimientos en asientos posteados`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, desactivar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.accountService.deactivate(account.id).subscribe({
            next: () => {
              alert('Cuenta desactivada exitosamente');
              this.loadAccounts();
              this.loadHierarchy();
            },
            error: (error) => {
              console.error('Error deactivating account:', error);
              alert(
                error.error?.message ||
                  'Error al desactivar la cuenta. Verifique que no tenga cuentas hijas activas ni movimientos.',
              );
            },
          });
        }
      });
    });
  }

  activateAccount(account: Account) {
    this.accountService.activate(account.id).subscribe({
      next: () => {
        alert('Cuenta activada exitosamente');
        this.loadAccounts();
        this.loadHierarchy();
      },
      error: (error) => {
        console.error('Error activating account:', error);
        alert(error.error?.message || 'Error al activar la cuenta');
      },
    });
  }
}

