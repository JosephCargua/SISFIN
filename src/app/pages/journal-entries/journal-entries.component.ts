import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalEntryService } from '../../core/services/journal-entry.service';
import { AccountService } from '../../core/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  JournalEntry,
  CreateJournalEntryDto,
  JournalEntryLine,
  JournalEntryStatus,
} from '../../models/journal-entry.model';
import { Account } from '../../models/account.model';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';

@Component({
  selector: 'app-journal-entries',
  standalone: true,
  imports: [CommonModule, FormsModule, AccountSelectorModalComponent],
  templateUrl: './journal-entries.component.html',
  styleUrl: './journal-entries.component.scss',
})
export class JournalEntriesComponent implements OnInit {
  entries: JournalEntry[] = [];
  accounts: Account[] = [];
  showCreateForm = false;
  isEditing = false;
  editingEntryId: string | null = null;
  statusFilter: JournalEntryStatus | '' = '';
  startDateFilter: string = '';
  endDateFilter: string = '';
  searchTerm: string = '';

  isAccountModalVisible = false;
  activeLineIndex: number = -1;

  // Exponer el enum para el template
  JournalEntryStatus = JournalEntryStatus;

  newEntry: CreateJournalEntryDto = {
    date: new Date().toISOString().split('T')[0],
    description: '',
    lines: [
      { accountId: '', accountName: '', debit: 0, credit: 0 },
      { accountId: '', accountName: '', debit: 0, credit: 0 },
    ],
  };

  statusLabels: Record<JournalEntryStatus, string> = {
    [JournalEntryStatus.DRAFT]: 'Borrador',
    [JournalEntryStatus.POSTED]: 'Posteado',
    [JournalEntryStatus.CANCELLED]: 'Anulado',
  };

  constructor(
    private journalEntryService: JournalEntryService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEntries();
    this.loadAccounts();

    this.route.queryParams.subscribe(params => {
      if (params['edit']) {
        this.loadEntryForEditing(params['edit']);
      }
    });
  }

  loadEntries() {
    this.journalEntryService.getAll(this.startDateFilter, this.endDateFilter, (this.statusFilter as JournalEntryStatus) || undefined, this.searchTerm).subscribe({
      next: (data: JournalEntry[]) => {
        this.entries = data;
      },
      error: (error: any) => {
        console.error('Error loading entries:', error);
        alert('Error al cargar los asientos');
      },
    });
  }

  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        this.accounts = data.filter((a) => a.isActive && !a.isControlAccount);
      },
      error: (error) => {
        console.error('Error loading accounts:', error);
      },
    });
  }

  addLine() {
    this.newEntry.lines.push({ accountId: '', accountName: '', debit: 0, credit: 0 });
  }

  openAccountModal(index: number) {
    this.activeLineIndex = index;
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account) {
    if (this.activeLineIndex >= 0 && this.activeLineIndex < this.newEntry.lines.length) {
      this.newEntry.lines[this.activeLineIndex].accountId = account.id;
      this.newEntry.lines[this.activeLineIndex].accountName = `${account.code} - ${account.name}`;
    }
    this.isAccountModalVisible = false;
  }

  removeLine(index: number) {
    if (this.newEntry.lines.length > 2) {
      this.newEntry.lines.splice(index, 1);
    }
  }

  validateDoubleEntry(): boolean {
    const totalDebit = this.newEntry.lines.reduce((sum, line) => sum + (line.debit || 0), 0);
    const totalCredit = this.newEntry.lines.reduce(
      (sum, line) => sum + (line.credit || 0),
      0,
    );
    return Math.abs(totalDebit - totalCredit) <= 0.01;
  }

  createEntry() {
    if (!this.validateDoubleEntry()) {
      alert('Error: La suma de débitos debe igualar la suma de créditos');
      return;
    }

    if (this.newEntry.lines.length < 2) {
      alert('Debe tener al menos 2 líneas');
      return;
    }

    if (this.isEditing && this.editingEntryId) {
      this.journalEntryService.update(this.editingEntryId, this.newEntry).subscribe({
        next: () => {
          alert('Asiento actualizado exitosamente');
          this.showCreateForm = false;
          this.isEditing = false;
          this.editingEntryId = null;
          this.router.navigate([], { queryParams: { edit: null }, queryParamsHandling: 'merge' });
          this.resetForm();
          this.loadEntries();
        },
        error: (error) => {
          console.error('Error updating entry:', error);
          alert(error.error?.message || 'Error al actualizar el asiento');
        },
      });
    } else {
      this.journalEntryService.create(this.newEntry).subscribe({
        next: () => {
          alert('Asiento creado exitosamente');
          this.showCreateForm = false;
          this.resetForm();
          this.loadEntries();
        },
        error: (error) => {
          console.error('Error creating entry:', error);
          alert(error.error?.message || 'Error al crear el asiento');
        },
      });
    }
  }

  editEntry(entry: JournalEntry) {
    this.loadEntryForEditing(entry.id);
  }

  loadEntryForEditing(id: string) {
    this.journalEntryService.getById(id).subscribe({
      next: (entry) => {
        this.isEditing = true;
        this.editingEntryId = id;
        this.showCreateForm = true;
        this.newEntry = {
          date: new Date(entry.date).toISOString().split('T')[0],
          description: entry.description || undefined,
          reference: entry.reference || undefined,
          lines: entry.lines.map(line => ({
            accountId: line.accountId,
            accountName: line.account ? `${line.account.code} - ${line.account.name}` : '',
            debit: line.debit,
            credit: line.credit,
            description: line.description
          }))
        };
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (error) => {
        console.error('Error loading entry for edit:', error);
        alert('Error al cargar el asiento para editar');
      }
    });
  }

  postEntry(id: string) {
    import('sweetalert2').then(module => {
      const Swal = module.default;
      Swal.fire({
        title: '¿Está seguro de postear este asiento?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, postear',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.journalEntryService.post(id).subscribe({
            next: () => {
              alert('Asiento posteado exitosamente');
              this.loadEntries();
            },
            error: (error) => {
              console.error('Error posting entry:', error);
              alert(error.error?.message || 'Error al postear el asiento');
            },
          });
        }
      });
    });
  }

  cancelEntry(id: string) {
    import('sweetalert2').then(module => {
      const Swal = module.default;
      Swal.fire({
        title: 'Anular asiento',
        input: 'text',
        inputLabel: 'Ingrese la razón de anulación:',
        inputPlaceholder: 'Razón...',
        showCancelButton: true,
        confirmButtonText: 'Anular',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
          if (!value) {
            return '¡Debe ingresar una razón!';
          }
          return null;
        }
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          this.journalEntryService.cancel(id, result.value).subscribe({
            next: () => {
              alert('Asiento anulado exitosamente');
              this.loadEntries();
            },
            error: (error) => {
              console.error('Error cancelling entry:', error);
              alert(error.error?.message || 'Error al anular el asiento');
            },
          });
        }
      });
    });
  }

  getTotalDebit(): number {
    return this.newEntry.lines.reduce((sum, line) => sum + (line.debit || 0), 0);
  }

  getTotalCredit(): number {
    return this.newEntry.lines.reduce((sum, line) => sum + (line.credit || 0), 0);
  }

  getDifference(): number {
    return Math.abs(this.getTotalDebit() - this.getTotalCredit());
  }

  resetForm() {
    this.newEntry = {
      date: new Date().toISOString().split('T')[0],
      description: '',
      lines: [
        { accountId: '', accountName: '', debit: 0, credit: 0 },
        { accountId: '', accountName: '', debit: 0, credit: 0 },
      ],
    };
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.resetForm();
      this.isEditing = false;
      this.editingEntryId = null;
      if (this.route.snapshot.queryParams['edit']) {
        this.router.navigate([], { queryParams: { edit: null }, queryParamsHandling: 'merge' });
      }
    }
  }
}

