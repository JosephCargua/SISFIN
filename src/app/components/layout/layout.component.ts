import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  route?: string;
  icon?: string;
  children?: MenuItem[];
  expanded?: boolean;
  queryParams?: any;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  isMobile = false;
  sidebarOpen = false;

  menuItems: MenuItem[] = [
    { label: 'Inicio', route: '/dashboard', icon: 'home' },
    {
      label: 'Contabilidad',
      icon: 'receipt_long',
      expanded: false,
      children: [
        { label: 'Libro Diario', route: '/journal-entries', icon: 'book' },
        { label: 'Libro Mayor', route: '/general-ledger', icon: 'library_books' },
        { label: 'Registros de Pagos', route: '/payment-records', icon: 'receipt_long' },
        { label: 'Plan de Cuentas', route: '/accounts', icon: 'account_tree' },
        { label: 'Centros de Costo', route: '/cost-centers', icon: 'business' },
        { label: 'Cierre de Período', route: '/period-locks', icon: 'lock' },
        { label: 'Balance Comprobación', route: '/trial-balance', icon: 'account_balance' },
      ]
    },

    {
      label: 'Transacciones',
      icon: 'swap_horiz',
      expanded: false,
      children: [
        { label: 'Compras o Gastos', route: '/register-purchase-expense', icon: 'shopping_cart' },
        { 
          label: 'Cobros/Pagos', 
          icon: 'payments',
          expanded: false,
          children: [
            { label: 'Cobros/Pagos', route: '/payment-records' },
            { label: 'Cobros/Pagos Masivos', route: '/payment-records', queryParams: { view: 'masivo' } },
            { label: 'Pagos con Cruce', route: '/payment-records', queryParams: { view: 'cruce' } }
          ]
        },
        { label: 'Registro Electrónico', route: '/electronic-invoices', icon: 'receipt' },
        { label: 'Documentos no electrónicos', route: '/register-document', icon: 'description' },
        { label: 'Consultar Documentos', route: '/consult-documents', icon: 'manage_search' },
      ]
    },
    {
      label: 'Bancos',
      icon: 'attach_money',
      expanded: false,
      children: [
        { label: 'Registro de Bancos', route: '/register-bank-account', icon: 'account_balance' },
        { label: 'Estado de Cuenta', route: '/bank-statement', icon: 'account_balance_wallet' },
        { label: 'Movimientos', route: '/bank-movements', icon: 'sync_alt' },
        { label: 'Conciliaciones', route: '/bank-reconciliations', icon: 'fact_check' }
      ]
    },
    {
      label: 'Reportes y Anexos',
      icon: 'assessment',
      expanded: false,
      children: [
        { label: 'Reportes', route: '/reports', icon: 'bar_chart' },
        { label: 'Retenciones', route: '/retentions', icon: 'description' },
        { label: 'ATS', route: '/ats', icon: 'file_copy' },
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkMobile();
    // Close sidebar on navigation in mobile
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidebarOpen = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile();
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.sidebarOpen = true; // Always open on desktop
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleGroup(item: MenuItem) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
}

