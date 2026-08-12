import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JournalEntryService } from '../../core/services/journal-entry.service';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';
import { Account } from '../../models/account.model';
import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { ExcelExportService, ExcelColumn } from '../../core/services/excel-export.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
    private router: Router,
    private excelService: ExcelExportService
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

  exportToExcel() {
    if (!this.ledgerData || !this.ledgerData.movements) return;
    
    const columns: ExcelColumn[] = [
      { header: 'Fecha', key: 'Fecha', width: 15 },
      { header: 'Comprobante', key: 'Comprobante', width: 25 },
      { header: 'Detalle', key: 'Detalle', width: 45 },
      { header: 'Débito', key: 'Debe', width: 15, isCurrency: true },
      { header: 'Crédito', key: 'Haber', width: 15, isCurrency: true },
      { header: 'Saldo', key: 'Saldo', width: 15, isCurrency: true }
    ];

    const dataToExport = this.ledgerData.movements.map((mov: any) => ({
      Fecha: new Date(mov.date).toLocaleDateString(),
      Comprobante: mov.reference,
      Detalle: mov.description || '-',
      Debe: mov.debit > 0 ? Number(mov.debit) : 0,
      Haber: mov.credit > 0 ? Number(mov.credit) : 0,
      Saldo: Number(mov.balance)
    }));
    
    this.excelService.exportToExcel({
      title: `Libro Mayor: ${this.accountName}`,
      subtitle: `Período: ${this.startDate} a ${this.endDate}`,
      fileName: `Libro_Mayor_${this.accountName.split(' - ')[0]}_${this.startDate}`,
      columns: columns,
      data: dataToExport
    });
  }

  exportToPDF() {
    if (!this.ledgerData || !this.ledgerData.movements) return;
    const doc = new jsPDF();
    doc.text(`Libro Diario: ${this.accountName}`, 14, 15);
    doc.text(`Periodo: ${this.startDate} a ${this.endDate}`, 14, 22);

    const tableData = this.ledgerData.movements.map((mov: any) => [
      new Date(mov.date).toLocaleDateString(),
      mov.reference,
      mov.description,
      (mov.debit > 0 ? mov.debit : 0).toFixed(2),
      (mov.credit > 0 ? mov.credit : 0).toFixed(2),
      mov.balance.toFixed(2)
    ]);

    autoTable(doc, {
      startY: 30,
      head: [['Fecha', 'Comprobante', 'Detalle', 'Debe', 'Haber', 'Saldo']],
      body: tableData,
    });
    doc.save(`Libro_Diario_${this.accountName}_${this.startDate}.pdf`);
  }
}

