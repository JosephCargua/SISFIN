import {
  RouterLink,
  RouterModule
} from "./chunk-EFJID6OG.js";
import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  api;
  constructor(api) {
    this.api = api;
  }
  getDashboardData(date) {
    const params = date ? { date } : {};
    return this.api.get("dashboard", params);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/pages/dashboard/dashboard.component.ts
function DashboardComponent_section_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("queryParams", item_r1.queryParams || null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function DashboardComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "h2", 6);
    \u0275\u0275text(2, "\xBFQu\xE9 deseas hacer?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275template(4, DashboardComponent_section_6_a_4_Template, 6, 4, "a", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.shortcuts);
  }
}
function DashboardComponent_section_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2, "Cargando indicadores...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_section_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function DashboardComponent_section_7_div_10_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(account_r4.balance));
  }
}
function DashboardComponent_section_7_div_10_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(account_r5.balance));
  }
}
function DashboardComponent_section_7_div_10_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(asset_r6.balance));
  }
}
function DashboardComponent_section_7_div_10_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const liability_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(liability_r7.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(liability_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(liability_r7.balance));
  }
}
function DashboardComponent_section_7_div_10_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const equity_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(equity_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(equity_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(equity_r8.balance));
  }
}
function DashboardComponent_section_7_div_10_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const income_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(income_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(income_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(income_r9.balance));
  }
}
function DashboardComponent_section_7_div_10_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const expense_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r10.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expense_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(expense_r10.balance));
  }
}
function DashboardComponent_section_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "span", 11);
    \u0275\u0275text(5, "account_balance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25)(7, "h3");
    \u0275\u0275text(8, "Total Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 24)(13, "span", 11);
    \u0275\u0275text(14, "trending_up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 25)(16, "h3");
    \u0275\u0275text(17, "Ingresos del Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 26);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 28)(21, "div", 24)(22, "span", 11);
    \u0275\u0275text(23, "trending_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "h3");
    \u0275\u0275text(26, "Gastos del Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 26);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 29)(30, "div", 24)(31, "span", 11);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 25)(34, "h3");
    \u0275\u0275text(35, "Utilidad Neta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 26);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 30)(39, "div", 31)(40, "h2")(41, "span", 11);
    \u0275\u0275text(42, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Efectivo y Bancos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 32)(45, "span", 33);
    \u0275\u0275text(46, "Total Disponible:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 34);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 35);
    \u0275\u0275template(50, DashboardComponent_section_7_div_10_div_50_Template, 5, 2, "div", 36)(51, DashboardComponent_section_7_div_10_div_51_Template, 5, 2, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 31)(53, "h2")(54, "span", 11);
    \u0275\u0275text(55, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Cuentas por Cobrar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 32)(58, "span", 34);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 31)(61, "h2")(62, "span", 11);
    \u0275\u0275text(63, "payment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Cuentas por Pagar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 32)(66, "span", 34);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 37)(69, "h2")(70, "span", 11);
    \u0275\u0275text(71, "assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 38)(75, "div", 39)(76, "h3");
    \u0275\u0275text(77, "Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 40);
    \u0275\u0275template(79, DashboardComponent_section_7_div_10_div_79_Template, 7, 3, "div", 36);
    \u0275\u0275elementStart(80, "div", 41)(81, "span", 42);
    \u0275\u0275text(82, "Total Activos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 43);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 39)(86, "h3");
    \u0275\u0275text(87, "Pasivos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 40);
    \u0275\u0275template(89, DashboardComponent_section_7_div_10_div_89_Template, 7, 3, "div", 36);
    \u0275\u0275elementStart(90, "div", 41)(91, "span", 42);
    \u0275\u0275text(92, "Total Pasivos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 43);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 39)(96, "h3");
    \u0275\u0275text(97, "Patrimonio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 40);
    \u0275\u0275template(99, DashboardComponent_section_7_div_10_div_99_Template, 7, 3, "div", 36);
    \u0275\u0275elementStart(100, "div", 41)(101, "span", 42);
    \u0275\u0275text(102, "Total Patrimonio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 43);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(105, "div", 44)(106, "h2")(107, "span", 11);
    \u0275\u0275text(108, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, " Estado de Resultados (Mes Actual) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 45)(111, "div", 46)(112, "h3");
    \u0275\u0275text(113, "Ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 40);
    \u0275\u0275template(115, DashboardComponent_section_7_div_10_div_115_Template, 7, 3, "div", 36);
    \u0275\u0275elementStart(116, "div", 41)(117, "span", 42);
    \u0275\u0275text(118, "Total Ingresos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span", 43);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(121, "div", 47)(122, "h3");
    \u0275\u0275text(123, "Gastos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 40);
    \u0275\u0275template(125, DashboardComponent_section_7_div_10_div_125_Template, 7, 3, "div", 36);
    \u0275\u0275elementStart(126, "div", 41)(127, "span", 42);
    \u0275\u0275text(128, "Total Gastos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 43);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(131, "div", 48)(132, "span", 49);
    \u0275\u0275text(133, "Utilidad Neta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "span", 50);
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.totalAssets), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.totalIncome), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.totalExpenses), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("card-success", ctx_r1.dashboardData.summary.netIncome >= 0)("card-danger", ctx_r1.dashboardData.summary.netIncome < 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.dashboardData.summary.netIncome >= 0 ? "arrow_upward" : "arrow_downward");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.netIncome), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.totalCash));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.bankAccounts.accounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.cashAccounts.accounts);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.totalReceivables));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.totalPayables));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Balance General (", \u0275\u0275pipeBind2(73, 30, ctx_r1.dashboardData.date, "dd/MM/yyyy"), ") ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.balanceSheet.assets);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.balanceSheet.totalAssets));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.balanceSheet.liabilities);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.balanceSheet.totalLiabilities));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.balanceSheet.equity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.balanceSheet.totalEquity));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.incomeStatement.income);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.incomeStatement.totalIncome));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.dashboardData.incomeStatement.expenses);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.dashboardData.incomeStatement.totalExpenses));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("positive", ctx_r1.dashboardData.summary.netIncome >= 0)("negative", ctx_r1.dashboardData.summary.netIncome < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(ctx_r1.dashboardData.summary.netIncome), " ");
  }
}
function DashboardComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3, "Indicadores financieros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function DashboardComponent_section_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadDashboardData());
    });
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Actualizar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, DashboardComponent_section_7_div_8_Template, 3, 0, "div", 16)(9, DashboardComponent_section_7_div_9_Template, 3, 1, "div", 17)(10, DashboardComponent_section_7_div_10_Template, 136, 33, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dashboardData && !ctx_r1.loading);
  }
}
var DashboardComponent = class _DashboardComponent {
  dashboardService;
  activeTab = "shortcuts";
  dashboardData = null;
  loading = true;
  error = null;
  shortcuts = [
    {
      label: "Ingresar documentos no electr\xF3nicos",
      icon: "description",
      route: "/register-document"
    },
    {
      label: "Consultar documentos",
      icon: "manage_search",
      route: "/consult-documents"
    },
    {
      label: "Registrar compras o gastos",
      icon: "shopping_cart",
      route: "/register-purchase-expense"
    },
    {
      label: "Crear un servicio o producto",
      icon: "inventory_2",
      route: "/inventory"
    },
    {
      label: "Registrar una persona",
      icon: "groups",
      route: "/payables"
    },
    {
      label: "Balance de Comprobaci\xF3n",
      icon: "balance",
      route: "/trial-balance"
    },
    {
      label: "Reportes de Balance general",
      icon: "pie_chart",
      route: "/reports",
      queryParams: { type: "balance-sheet" }
    },
    {
      label: "Reportes de Estado de resultados",
      icon: "bar_chart",
      route: "/reports",
      queryParams: { type: "income-statement" }
    }
  ];
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  setTab(tab) {
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
        console.error("Error loading dashboard data:", error);
        this.error = "Error al cargar los indicadores";
        this.loading = false;
      }
    });
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(amount);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 6, consts: [[1, "dashboard-container"], [1, "dashboard-tabs"], ["type", "button", 1, "dashboard-tab", 3, "click"], ["class", "shortcuts-panel", 4, "ngIf"], ["class", "indicators-panel", 4, "ngIf"], [1, "shortcuts-panel"], [1, "shortcuts-heading"], [1, "shortcuts-grid"], ["class", "shortcut-card", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "shortcut-card", 3, "routerLink", "queryParams"], [1, "shortcut-icon-wrap"], [1, "material-icons"], [1, "shortcut-label"], [1, "indicators-panel"], [1, "indicators-header"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "loading", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "dashboard-content", 4, "ngIf"], [1, "loading"], [1, "error"], [1, "dashboard-content"], [1, "summary-cards"], [1, "summary-card", "card-primary"], [1, "card-icon"], [1, "card-content"], [1, "card-value"], [1, "summary-card", "card-success"], [1, "summary-card", "card-danger"], [1, "summary-card"], [1, "balance-section"], [1, "balance-card", "card"], [1, "balance-total"], [1, "label"], [1, "value"], [1, "balance-details"], ["class", "balance-item", 4, "ngFor", "ngForOf"], [1, "balance-sheet-section", "card"], [1, "balance-sheet-grid"], [1, "balance-column"], [1, "balance-items"], [1, "balance-total-item"], [1, "total-label"], [1, "total-value"], [1, "income-statement-section", "card"], [1, "income-statement-grid"], [1, "income-column"], [1, "expense-column"], [1, "net-income"], [1, "net-label"], [1, "net-value"], [1, "balance-item"], [1, "account-name"], [1, "account-balance"], [1, "account-code"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_2_listener() {
        return ctx.setTab("shortcuts");
      });
      \u0275\u0275text(3, " Accesos directos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_4_listener() {
        return ctx.setTab("indicators");
      });
      \u0275\u0275text(5, " Indicadores ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, DashboardComponent_section_6_Template, 5, 1, "section", 3)(7, DashboardComponent_section_7_Template, 11, 3, "section", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "shortcuts");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "indicators");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "shortcuts");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "indicators");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dashboard-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 28px;\n}\n.dashboard-tab[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  border-top: 3px solid transparent;\n  margin-bottom: -1px;\n  transition:\n    color 0.2s,\n    background 0.2s,\n    border-color 0.2s;\n}\n.dashboard-tab[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n.dashboard-tab.active[_ngcontent-%COMP%] {\n  color: #1e293b;\n  background: #f8fafc;\n  border-top-color: #3b82f6;\n}\n.shortcuts-panel[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.shortcuts-heading[_ngcontent-%COMP%] {\n  margin: 0 0 32px 0;\n  font-size: 22px;\n  font-weight: 600;\n  color: #334155;\n}\n.shortcuts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px 24px;\n}\n@media (max-width: 1024px) {\n  .shortcuts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 520px) {\n  .shortcuts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n.shortcut-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n  padding: 8px;\n  border-radius: 8px;\n  transition: transform 0.15s;\n}\n.shortcut-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.shortcut-card[_ngcontent-%COMP%]:hover   .shortcut-icon-wrap[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n}\n.shortcut-card[_ngcontent-%COMP%]:hover   .shortcut-label[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.shortcut-icon-wrap[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #d1d5db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.shortcut-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #3b82f6;\n}\n.shortcut-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.4;\n  color: #475569;\n  max-width: 160px;\n  font-weight: 500;\n}\n.indicators-panel[_ngcontent-%COMP%]   .indicators-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.indicators-panel[_ngcontent-%COMP%]   .indicators-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.indicators-panel[_ngcontent-%COMP%]   .indicators-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  background: #e2e8f0;\n  color: #475569;\n}\n.indicators-panel[_ngcontent-%COMP%]   .indicators-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.indicators-panel[_ngcontent-%COMP%]   .indicators-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.loading[_ngcontent-%COMP%], \n.error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #64748b;\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fee2e2;\n  border-radius: 6px;\n  padding: 16px;\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n}\n.summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #475569;\n}\n.summary-card.card-primary[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.summary-card.card-primary[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.summary-card.card-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n}\n.summary-card.card-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.summary-card.card-danger[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #fee2e2;\n}\n.summary-card.card-danger[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n.summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n}\n.summary-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.balance-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.balance-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.balance-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.balance-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #3b82f6;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 16px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-total[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-total[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.balance-sheet-section[_ngcontent-%COMP%], \n.income-statement-section[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.balance-sheet-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.income-statement-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0 0 24px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.balance-sheet-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.income-statement-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #3b82f6;\n}\n.balance-sheet-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1200px) {\n  .balance-sheet-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.balance-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #475569;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr auto;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  align-items: center;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  text-align: right;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #e2e8f0;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-weight: 700;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1e293b;\n}\n.balance-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1e293b;\n}\n.income-statement-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n@media (max-width: 800px) {\n  .income-statement-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.income-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #475569;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.income-column[_ngcontent-%COMP%]   .balance-items[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.income-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80px 1fr auto;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  align-items: center;\n}\n.income-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-code[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.income-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n}\n.income-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-item[_ngcontent-%COMP%]   .account-balance[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  text-align: right;\n}\n.income-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #e2e8f0;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-weight: 700;\n}\n.income-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1e293b;\n}\n.income-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%], \n.expense-column[_ngcontent-%COMP%]   .balance-total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1e293b;\n}\n.net-income[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  margin-top: 24px;\n  font-weight: 700;\n  font-size: 18px;\n}\n.net-income[_ngcontent-%COMP%]   .net-label[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.net-income[_ngcontent-%COMP%]   .net-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.net-income[_ngcontent-%COMP%]   .net-value.positive[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.net-income[_ngcontent-%COMP%]   .net-value.negative[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="dashboard-container">\r
  <div class="dashboard-tabs">\r
    <button\r
      type="button"\r
      class="dashboard-tab"\r
      [class.active]="activeTab === 'shortcuts'"\r
      (click)="setTab('shortcuts')"\r
    >\r
      Accesos directos\r
    </button>\r
    <button\r
      type="button"\r
      class="dashboard-tab"\r
      [class.active]="activeTab === 'indicators'"\r
      (click)="setTab('indicators')"\r
    >\r
      Indicadores\r
    </button>\r
  </div>\r
\r
  <section *ngIf="activeTab === 'shortcuts'" class="shortcuts-panel">\r
    <h2 class="shortcuts-heading">\xBFQu\xE9 deseas hacer?</h2>\r
    <div class="shortcuts-grid">\r
      <a\r
        *ngFor="let item of shortcuts"\r
        class="shortcut-card"\r
        [routerLink]="item.route"\r
        [queryParams]="item.queryParams || null"\r
      >\r
        <span class="shortcut-icon-wrap">\r
          <span class="material-icons">{{ item.icon }}</span>\r
        </span>\r
        <span class="shortcut-label">{{ item.label }}</span>\r
      </a>\r
    </div>\r
  </section>\r
\r
  <section *ngIf="activeTab === 'indicators'" class="indicators-panel">\r
    <div class="indicators-header">\r
      <h2>Indicadores financieros</h2>\r
      <button type="button" class="btn btn-secondary" (click)="loadDashboardData()">\r
        <span class="material-icons">refresh</span>\r
        Actualizar\r
      </button>\r
    </div>\r
\r
    <div *ngIf="loading" class="loading">\r
      <p>Cargando indicadores...</p>\r
    </div>\r
\r
    <div *ngIf="error" class="error">\r
      <p>{{ error }}</p>\r
    </div>\r
\r
    <div *ngIf="dashboardData && !loading" class="dashboard-content">\r
      <div class="summary-cards">\r
        <div class="summary-card card-primary">\r
          <div class="card-icon">\r
            <span class="material-icons">account_balance</span>\r
          </div>\r
          <div class="card-content">\r
            <h3>Total Activos</h3>\r
            <p class="card-value">\r
              {{ formatCurrency(dashboardData.summary.totalAssets) }}\r
            </p>\r
          </div>\r
        </div>\r
\r
        <div class="summary-card card-success">\r
          <div class="card-icon">\r
            <span class="material-icons">trending_up</span>\r
          </div>\r
          <div class="card-content">\r
            <h3>Ingresos del Mes</h3>\r
            <p class="card-value">\r
              {{ formatCurrency(dashboardData.summary.totalIncome) }}\r
            </p>\r
          </div>\r
        </div>\r
\r
        <div class="summary-card card-danger">\r
          <div class="card-icon">\r
            <span class="material-icons">trending_down</span>\r
          </div>\r
          <div class="card-content">\r
            <h3>Gastos del Mes</h3>\r
            <p class="card-value">\r
              {{ formatCurrency(dashboardData.summary.totalExpenses) }}\r
            </p>\r
          </div>\r
        </div>\r
\r
        <div\r
          class="summary-card"\r
          [class.card-success]="dashboardData.summary.netIncome >= 0"\r
          [class.card-danger]="dashboardData.summary.netIncome < 0"\r
        >\r
          <div class="card-icon">\r
            <span class="material-icons">{{\r
              dashboardData.summary.netIncome >= 0\r
                ? 'arrow_upward'\r
                : 'arrow_downward'\r
            }}</span>\r
          </div>\r
          <div class="card-content">\r
            <h3>Utilidad Neta</h3>\r
            <p class="card-value">\r
              {{ formatCurrency(dashboardData.summary.netIncome) }}\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="balance-section">\r
        <div class="balance-card card">\r
          <h2>\r
            <span class="material-icons">account_balance</span>\r
            Efectivo y Bancos\r
          </h2>\r
          <div class="balance-total">\r
            <span class="label">Total Disponible:</span>\r
            <span class="value">{{\r
              formatCurrency(dashboardData.summary.totalCash)\r
            }}</span>\r
          </div>\r
          <div class="balance-details">\r
            <div\r
              class="balance-item"\r
              *ngFor="let account of dashboardData.bankAccounts.accounts"\r
            >\r
              <span class="account-name">{{ account.name }}</span>\r
              <span class="account-balance">{{\r
                formatCurrency(account.balance)\r
              }}</span>\r
            </div>\r
            <div\r
              class="balance-item"\r
              *ngFor="let account of dashboardData.cashAccounts.accounts"\r
            >\r
              <span class="account-name">{{ account.name }}</span>\r
              <span class="account-balance">{{\r
                formatCurrency(account.balance)\r
              }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="balance-card card">\r
          <h2>\r
            <span class="material-icons">account_balance_wallet</span>\r
            Cuentas por Cobrar\r
          </h2>\r
          <div class="balance-total">\r
            <span class="value">{{\r
              formatCurrency(dashboardData.summary.totalReceivables)\r
            }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="balance-card card">\r
          <h2>\r
            <span class="material-icons">payment</span>\r
            Cuentas por Pagar\r
          </h2>\r
          <div class="balance-total">\r
            <span class="value">{{\r
              formatCurrency(dashboardData.summary.totalPayables)\r
            }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="balance-sheet-section card">\r
        <h2>\r
          <span class="material-icons">assessment</span>\r
          Balance General ({{ dashboardData.date | date: 'dd/MM/yyyy' }})\r
        </h2>\r
        <div class="balance-sheet-grid">\r
          <div class="balance-column">\r
            <h3>Activos</h3>\r
            <div class="balance-items">\r
              <div\r
                class="balance-item"\r
                *ngFor="let asset of dashboardData.balanceSheet.assets"\r
              >\r
                <span class="account-code">{{ asset.code }}</span>\r
                <span class="account-name">{{ asset.name }}</span>\r
                <span class="account-balance">{{\r
                  formatCurrency(asset.balance)\r
                }}</span>\r
              </div>\r
              <div class="balance-total-item">\r
                <span class="total-label">Total Activos:</span>\r
                <span class="total-value">{{\r
                  formatCurrency(dashboardData.balanceSheet.totalAssets)\r
                }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="balance-column">\r
            <h3>Pasivos</h3>\r
            <div class="balance-items">\r
              <div\r
                class="balance-item"\r
                *ngFor="let liability of dashboardData.balanceSheet.liabilities"\r
              >\r
                <span class="account-code">{{ liability.code }}</span>\r
                <span class="account-name">{{ liability.name }}</span>\r
                <span class="account-balance">{{\r
                  formatCurrency(liability.balance)\r
                }}</span>\r
              </div>\r
              <div class="balance-total-item">\r
                <span class="total-label">Total Pasivos:</span>\r
                <span class="total-value">{{\r
                  formatCurrency(dashboardData.balanceSheet.totalLiabilities)\r
                }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="balance-column">\r
            <h3>Patrimonio</h3>\r
            <div class="balance-items">\r
              <div\r
                class="balance-item"\r
                *ngFor="let equity of dashboardData.balanceSheet.equity"\r
              >\r
                <span class="account-code">{{ equity.code }}</span>\r
                <span class="account-name">{{ equity.name }}</span>\r
                <span class="account-balance">{{\r
                  formatCurrency(equity.balance)\r
                }}</span>\r
              </div>\r
              <div class="balance-total-item">\r
                <span class="total-label">Total Patrimonio:</span>\r
                <span class="total-value">{{\r
                  formatCurrency(dashboardData.balanceSheet.totalEquity)\r
                }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="income-statement-section card">\r
        <h2>\r
          <span class="material-icons">bar_chart</span>\r
          Estado de Resultados (Mes Actual)\r
        </h2>\r
        <div class="income-statement-grid">\r
          <div class="income-column">\r
            <h3>Ingresos</h3>\r
            <div class="balance-items">\r
              <div\r
                class="balance-item"\r
                *ngFor="let income of dashboardData.incomeStatement.income"\r
              >\r
                <span class="account-code">{{ income.code }}</span>\r
                <span class="account-name">{{ income.name }}</span>\r
                <span class="account-balance">{{\r
                  formatCurrency(income.balance)\r
                }}</span>\r
              </div>\r
              <div class="balance-total-item">\r
                <span class="total-label">Total Ingresos:</span>\r
                <span class="total-value">{{\r
                  formatCurrency(dashboardData.incomeStatement.totalIncome)\r
                }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="expense-column">\r
            <h3>Gastos</h3>\r
            <div class="balance-items">\r
              <div\r
                class="balance-item"\r
                *ngFor="let expense of dashboardData.incomeStatement.expenses"\r
              >\r
                <span class="account-code">{{ expense.code }}</span>\r
                <span class="account-name">{{ expense.name }}</span>\r
                <span class="account-balance">{{\r
                  formatCurrency(expense.balance)\r
                }}</span>\r
              </div>\r
              <div class="balance-total-item">\r
                <span class="total-label">Total Gastos:</span>\r
                <span class="total-value">{{\r
                  formatCurrency(dashboardData.incomeStatement.totalExpenses)\r
                }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="net-income">\r
          <span class="net-label">Utilidad Neta:</span>\r
          <span\r
            class="net-value"\r
            [class.positive]="dashboardData.summary.netIncome >= 0"\r
            [class.negative]="dashboardData.summary.netIncome < 0"\r
          >\r
            {{ formatCurrency(dashboardData.summary.netIncome) }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/pages/dashboard/dashboard.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.dashboard-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dashboard-tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 28px;\n}\n.dashboard-tab {\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  border-top: 3px solid transparent;\n  margin-bottom: -1px;\n  transition:\n    color 0.2s,\n    background 0.2s,\n    border-color 0.2s;\n}\n.dashboard-tab:hover {\n  color: #1e293b;\n}\n.dashboard-tab.active {\n  color: #1e293b;\n  background: #f8fafc;\n  border-top-color: #3b82f6;\n}\n.shortcuts-panel {\n  padding-top: 8px;\n}\n.shortcuts-heading {\n  margin: 0 0 32px 0;\n  font-size: 22px;\n  font-weight: 600;\n  color: #334155;\n}\n.shortcuts-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px 24px;\n}\n@media (max-width: 1024px) {\n  .shortcuts-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 520px) {\n  .shortcuts-grid {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n.shortcut-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n  padding: 8px;\n  border-radius: 8px;\n  transition: transform 0.15s;\n}\n.shortcut-card:hover {\n  transform: translateY(-2px);\n}\n.shortcut-card:hover .shortcut-icon-wrap {\n  border-color: #3b82f6;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n}\n.shortcut-card:hover .shortcut-label {\n  color: #1e293b;\n}\n.shortcut-icon-wrap {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #d1d5db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.shortcut-icon-wrap .material-icons {\n  font-size: 40px;\n  color: #3b82f6;\n}\n.shortcut-label {\n  font-size: 13px;\n  line-height: 1.4;\n  color: #475569;\n  max-width: 160px;\n  font-weight: 500;\n}\n.indicators-panel .indicators-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.indicators-panel .indicators-header h2 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.indicators-panel .indicators-header .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  background: #e2e8f0;\n  color: #475569;\n}\n.indicators-panel .indicators-header .btn:hover {\n  background: #cbd5e1;\n}\n.indicators-panel .indicators-header .btn .material-icons {\n  font-size: 18px;\n}\n.loading,\n.error {\n  text-align: center;\n  padding: 40px;\n  color: #64748b;\n}\n.error {\n  color: #dc2626;\n  background: #fee2e2;\n  border-radius: 6px;\n  padding: 16px;\n}\n.dashboard-content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.summary-card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.summary-card .card-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n}\n.summary-card .card-icon .material-icons {\n  font-size: 28px;\n  color: #475569;\n}\n.summary-card.card-primary .card-icon {\n  background: #dbeafe;\n}\n.summary-card.card-primary .card-icon .material-icons {\n  color: #1e40af;\n}\n.summary-card.card-success .card-icon {\n  background: #d1fae5;\n}\n.summary-card.card-success .card-icon .material-icons {\n  color: #065f46;\n}\n.summary-card.card-danger .card-icon {\n  background: #fee2e2;\n}\n.summary-card.card-danger .card-icon .material-icons {\n  color: #991b1b;\n}\n.summary-card .card-content {\n  flex: 1;\n}\n.summary-card .card-content h3 {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n}\n.summary-card .card-content .card-value {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.balance-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.balance-card {\n  padding: 20px;\n}\n.balance-card h2 {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.balance-card h2 .material-icons {\n  font-size: 24px;\n  color: #3b82f6;\n}\n.balance-card .balance-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 16px;\n}\n.balance-card .balance-total .label {\n  font-size: 14px;\n  color: #64748b;\n}\n.balance-card .balance-total .value {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.balance-card .balance-details {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.balance-card .balance-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n}\n.balance-card .balance-item .account-name {\n  font-size: 14px;\n  color: #475569;\n}\n.balance-card .balance-item .account-balance {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.balance-sheet-section,\n.income-statement-section {\n  padding: 24px;\n}\n.balance-sheet-section h2,\n.income-statement-section h2 {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0 0 24px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.balance-sheet-section h2 .material-icons,\n.income-statement-section h2 .material-icons {\n  font-size: 24px;\n  color: #3b82f6;\n}\n.balance-sheet-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1200px) {\n  .balance-sheet-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.balance-column h3 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #475569;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.balance-column .balance-items {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.balance-column .balance-item {\n  display: grid;\n  grid-template-columns: 80px 1fr auto;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  align-items: center;\n}\n.balance-column .balance-item .account-code {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.balance-column .balance-item .account-name {\n  font-size: 14px;\n  color: #475569;\n}\n.balance-column .balance-item .account-balance {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  text-align: right;\n}\n.balance-column .balance-total-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #e2e8f0;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-weight: 700;\n}\n.balance-column .balance-total-item .total-label {\n  font-size: 14px;\n  color: #1e293b;\n}\n.balance-column .balance-total-item .total-value {\n  font-size: 16px;\n  color: #1e293b;\n}\n.income-statement-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n}\n@media (max-width: 800px) {\n  .income-statement-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.income-column h3,\n.expense-column h3 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #475569;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.income-column .balance-items,\n.expense-column .balance-items {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.income-column .balance-item,\n.expense-column .balance-item {\n  display: grid;\n  grid-template-columns: 80px 1fr auto;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  align-items: center;\n}\n.income-column .balance-item .account-code,\n.expense-column .balance-item .account-code {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n}\n.income-column .balance-item .account-name,\n.expense-column .balance-item .account-name {\n  font-size: 14px;\n  color: #475569;\n}\n.income-column .balance-item .account-balance,\n.expense-column .balance-item .account-balance {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  text-align: right;\n}\n.income-column .balance-total-item,\n.expense-column .balance-total-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: #e2e8f0;\n  border-radius: 6px;\n  margin-top: 8px;\n  font-weight: 700;\n}\n.income-column .balance-total-item .total-label,\n.expense-column .balance-total-item .total-label {\n  font-size: 14px;\n  color: #1e293b;\n}\n.income-column .balance-total-item .total-value,\n.expense-column .balance-total-item .total-value {\n  font-size: 16px;\n  color: #1e293b;\n}\n.net-income {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  margin-top: 24px;\n  font-weight: 700;\n  font-size: 18px;\n}\n.net-income .net-label {\n  color: #475569;\n}\n.net-income .net-value {\n  font-size: 20px;\n}\n.net-income .net-value.positive {\n  color: #065f46;\n}\n.net-income .net-value.negative {\n  color: #991b1b;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: DashboardService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 25 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-TUQKD4FI.js.map
