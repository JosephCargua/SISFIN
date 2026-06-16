import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  DashboardService,
  DashboardData,
} from '../../core/services/dashboard.service';

export interface DashboardShortcut {
  label: string;
  icon: string;
  route: string;
  queryParams?: Record<string, string>;
}

type DashboardTab = 'shortcuts' | 'indicators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  activeTab: DashboardTab = 'shortcuts';
  dashboardData: DashboardData | null = null;
  loading = true;
  error: string | null = null;

  shortcuts: DashboardShortcut[] = [
    {
      label: 'Ingresar documentos no electrónicos',
      icon: 'description',
      route: '/register-document',
    },
    {
      label: 'Consultar documentos',
      icon: 'manage_search',
      route: '/consult-documents',
    },
    {
      label: 'Registrar compras o gastos',
      icon: 'shopping_cart',
      route: '/register-purchase-expense',
    },
    {
      label: 'Crear un servicio o producto',
      icon: 'inventory_2',
      route: '/inventory',
    },
    {
      label: 'Registrar una persona',
      icon: 'groups',
      route: '/payables',
    },
    {
      label: 'Balance de Comprobación',
      icon: 'balance',
      route: '/trial-balance',
    },
    {
      label: 'Reportes de Balance general',
      icon: 'pie_chart',
      route: '/reports',
      queryParams: { type: 'balance-sheet' },
    },
    {
      label: 'Reportes de Estado de resultados',
      icon: 'bar_chart',
      route: '/reports',
      queryParams: { type: 'income-statement' },
    },
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  setTab(tab: DashboardTab) {
    this.activeTab = tab;
  }

  loadDashboardData() {
    this.loading = true;
    this.error = null;

    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading dashboard data:', error);
        this.error = 'Error al cargar los indicadores';
        this.loading = false;
      },
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }
}
