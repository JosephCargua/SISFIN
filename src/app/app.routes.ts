import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'accounts',
        loadComponent: () =>
          import('./pages/accounts/accounts.component').then(
            (m) => m.AccountsComponent,
          ),
      },
      {
        path: 'journal-entries',
        loadComponent: () =>
          import('./pages/journal-entries/journal-entries.component').then(
            (m) => m.JournalEntriesComponent,
          ),
      },
      {
        path: 'general-ledger',
        loadComponent: () =>
          import('./pages/general-ledger/general-ledger.component').then(
            (m) => m.GeneralLedgerComponent,
          ),
      },
      {
        path: 'electronic-invoices',
        loadComponent: () =>
          import(
            './pages/electronic-invoices/electronic-invoices.component'
          ).then((m) => m.ElectronicInvoicesComponent),
      },
      {
        path: 'consult-documents',
        loadComponent: () =>
          import('./pages/consult-documents/consult-documents.component').then(
            (m) => m.ConsultDocumentsComponent,
          ),
      },
      {
        path: 'register-document',
        loadComponent: () =>
          import('./pages/register-document/register-document.component').then(
            (m) => m.RegisterDocumentComponent,
          ),
      },
      {
        path: 'register-purchase-expense',
        loadComponent: () =>
          import(
            './pages/register-purchase-expense/register-purchase-expense.component'
          ).then((m) => m.RegisterPurchaseExpenseComponent),
      },
      {
        path: 'register-payment',
        loadComponent: () =>
          import(
            './pages/register-payment/register-payment.component'
          ).then((m) => m.RegisterPaymentComponent),
      },
      {
        path: 'document-crossing',
        loadComponent: () =>
          import(
            './pages/document-crossing/document-crossing.component'
          ).then((m) => m.DocumentCrossingComponent),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports.component').then(
            (m) => m.ReportsComponent,
          ),
      },
      {
        path: 'trial-balance',
        loadComponent: () =>
          import('./pages/trial-balance/trial-balance.component').then(
            (m) => m.TrialBalanceComponent,
          ),
      },
      {
        path: 'retentions',
        loadComponent: () =>
          import('./pages/retentions/retentions.component').then(
            (m) => m.RetentionsComponent,
          ),
      },
      {
        path: 'ats',
        loadComponent: () =>
          import('./pages/ats/ats.component').then((m) => m.ATSComponent),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./pages/inventory/inventory.component').then(
            (m) => m.InventoryComponent,
          ),
      },
      {
        path: 'receivables',
        loadComponent: () =>
          import('./pages/receivables/receivables.component').then(
            (m) => m.ReceivablesComponent,
          ),
      },
      {
        path: 'payables',
        loadComponent: () =>
          import('./pages/payables/payables.component').then(
            (m) => m.PayablesComponent,
          ),
      },
      {
        path: 'banking',
        loadComponent: () =>
          import('./pages/banking/banking.component').then(
            (m) => m.BankingComponent,
          ),
      },
      {
        path: 'bank-movements',
        loadComponent: () =>
          import('./pages/bank-movements/bank-movements.component').then(
            (m) => m.BankMovementsComponent,
          ),
      },
      {
        path: 'register-bank-movement',
        loadComponent: () =>
          import('./pages/register-bank-movement/register-bank-movement.component').then(
            (m) => m.RegisterBankMovementComponent,
          ),
      },
      {
        path: 'cost-centers',
        loadComponent: () =>
          import('./pages/cost-centers/cost-centers.component').then(
            (m) => m.CostCentersComponent,
          ),
      },
      {
        path: 'period-locks',
        loadComponent: () =>
          import('./pages/period-locks/period-locks.component').then(
            (m) => m.PeriodLocksComponent,
          ),
      },
    ],
  },
];
