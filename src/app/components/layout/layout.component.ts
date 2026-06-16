import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  menuItems = [
    { label: 'Inicio', route: '/dashboard', icon: 'home' },
    {
      label: 'Plan de Cuentas',
      route: '/accounts',
      icon: 'account_tree',
    },
    {
      label: 'Libro Diario',
      route: '/journal-entries',
      icon: 'book',
    },
    {
      label: 'Libro Mayor',
      route: '/general-ledger',
      icon: 'library_books',
    },
    {
      label: 'Documentos no electrónicos',
      route: '/register-document',
      icon: 'description',
    },
    {
      label: 'Compras o Gastos',
      route: '/register-purchase-expense',
      icon: 'shopping_cart',
    },
    {
      label: 'Registro Electrónico',
      route: '/electronic-invoices',
      icon: 'receipt_long',
    },
    {
      label: 'Consultar Documentos',
      route: '/consult-documents',
      icon: 'manage_search',
    },
    {
      label: 'Retenciones',
      route: '/retentions',
      icon: 'description',
    },
    {
      label: 'ATS',
      route: '/ats',
      icon: 'file_copy',
    },
    {
      label: 'Reportes',
      route: '/reports',
      icon: 'assessment',
    },
    {
      label: 'Balance de Comprobación',
      route: '/trial-balance',
      icon: 'account_balance',
    },
    {
      label: 'Inventario',
      route: '/inventory',
      icon: 'inventory',
    },
    {
      label: 'Cuentas por Cobrar',
      route: '/receivables',
      icon: 'account_balance_wallet',
    },
    {
      label: 'Cuentas por Pagar',
      route: '/payables',
      icon: 'payment',
    },
    {
      label: 'Bancos y Caja',
      route: '/banking',
      icon: 'account_balance',
    },
    {
      label: 'Centros de Costo',
      route: '/cost-centers',
      icon: 'business',
    },
    {
      label: 'Cierre de Período',
      route: '/period-locks',
      icon: 'lock',
    },
  ];
}

