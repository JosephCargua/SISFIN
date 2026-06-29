import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalEntryService } from '../../core/services/journal-entry.service';
import { AccountService } from '../../core/services/account.service';
import {
  JournalEntry,
  CreateJournalEntryDto,
  JournalEntryLine,
  JournalEntryStatus,
} from '../../models/journal-entry.model';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-journal-entries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-entries.component.html',
  styleUrl: './journal-entries.component.scss',
})
export class JournalEntriesComponent implements OnInit {
  entries: JournalEntry[] = [];
  accounts: Account[] = [];
  showCreateForm = false;
  statusFilter: JournalEntryStatus | '' = '';

  // Exponer el enum para el template
  JournalEntryStatus = JournalEntryStatus;

  newEntry: CreateJournalEntryDto = {
    date: new Date().toISOString().split('T')[0],
    description: '',
    lines: [
      { accountId: '', debit: 0, credit: 0 },
      { accountId: '', debit: 0, credit: 0 },
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
  ) {}

  ngOnInit() {
    this.loadEntries();
    this.loadAccounts();
  }

  loadEntries() {
    this.journalEntryService.getAll().subscribe({
      next: (data) => {
        this.entries = data;
      },
      error: (error) => {
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
    this.newEntry.lines.push({ accountId: '', debit: 0, credit: 0 });
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
        { accountId: '', debit: 0, credit: 0 },
        { accountId: '', debit: 0, credit: 0 },
      ],
    };
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.resetForm();
    }
  }
}

