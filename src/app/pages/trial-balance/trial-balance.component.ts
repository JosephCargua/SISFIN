import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import {
  TrialBalanceFlatRow,
  TrialBalanceNode,
  TrialBalanceReport,
} from '../../models/trial-balance.model';

interface AccountOption {
  id: string;
  code: string;
  name: string;
}

@Component({
  selector: 'app-trial-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trial-balance.component.html',
  styleUrl: './trial-balance.component.scss',
})
export class TrialBalanceComponent implements OnInit {
  searchExpanded = true;
  loading = false;
  report: TrialBalanceReport | null = null;
  flatRows: TrialBalanceFlatRow[] = [];
  expandedIds = new Set<string>();
  accounts: AccountOption[] = [];

  filters = {
    accountId: '',
    dateFrom: '',
    dateTo: '',
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    const year = new Date().getFullYear();
    this.filters.dateFrom = `${year}-01-01`;
    this.filters.dateTo = `${year}-12-31`;
    this.api.get<AccountOption[]>('accounts').subscribe({
      next: (data) => (this.accounts = data),
      error: (err) => console.error('Error loading accounts:', err),
    });
    this.consult();
  }

  toggleSearchPanel() {
    this.searchExpanded = !this.searchExpanded;
  }

  consult() {
    if (!this.filters.dateFrom || !this.filters.dateTo) {
      alert('Seleccione el rango de fechas');
      return;
    }

    this.loading = true;
    const params: Record<string, string> = {
      startDate: this.filters.dateFrom,
      endDate: this.filters.dateTo,
    };
    if (this.filters.accountId) {
      params['accountId'] = this.filters.accountId;
    }

    this.api
      .get<TrialBalanceReport>('reports/trial-balance', params)
      .subscribe({
        next: (data) => {
          this.report = data;
          this.expandedIds.clear();
          data.rows.forEach((r) => this.expandedIds.add(r.id));
          this.rebuildFlatRows();
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          alert('Error al generar el balance de comprobación');
        },
      });
  }

  rebuildFlatRows() {
    this.flatRows = [];
    if (!this.report) return;
    for (const root of this.report.rows) {
      this.flattenNode(root, 0);
    }
  }

  private flattenNode(node: TrialBalanceNode, depth: number) {
    const hasChildren = node.children.length > 0;
    this.flatRows.push({ ...node, depth, hasChildren });
    if (hasChildren && this.expandedIds.has(node.id)) {
      for (const child of node.children) {
        this.flattenNode(child, depth + 1);
      }
    }
  }

  toggleExpand(nodeId: string) {
    if (this.expandedIds.has(nodeId)) {
      this.expandedIds.delete(nodeId);
    } else {
      this.expandedIds.add(nodeId);
    }
    this.rebuildFlatRows();
  }

  isExpanded(nodeId: string): boolean {
    return this.expandedIds.has(nodeId);
  }

  formatCurrency(amount: number): string {
    if (!amount) return '$0.00';
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  formatDateDisplay(iso: string): string {
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  exportExcel() {
    if (!this.report) return;
    const headers = [
      'Cuenta',
      'Saldo Inicial',
      'Debe',
      'Haber',
      'Deudor',
      'Acreedor',
    ];
    const rows = this.flatRows.map((r) => [
      `${'  '.repeat(r.depth)}${r.code} ${r.name}`,
      r.initialBalance,
      r.periodDebit,
      r.periodCredit,
      r.debtorBalance,
      r.creditorBalance,
    ]);
    const totals = this.report.totals;
    rows.push([
      'TOTALES',
      totals.initialBalance,
      totals.periodDebit,
      totals.periodCredit,
      totals.debtorBalance,
      totals.creditorBalance,
    ]);
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `balance-comprobacion-${this.report.startDate}-${this.report.endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
