import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HXWGHL77.js";
import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/trial-balance/trial-balance.component.ts
function TrialBalanceComponent_div_21_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r3 = ctx.$implicit;
    \u0275\u0275property("value", acc_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r3.code, " - ", acc_r3.name, " ");
  }
}
function TrialBalanceComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "label");
    \u0275\u0275text(4, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "span", 4);
    \u0275\u0275text(7, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function TrialBalanceComponent_div_21_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.accountId, $event) || (ctx_r1.filters.accountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 16);
    \u0275\u0275text(10, "Todas las cuentas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, TrialBalanceComponent_div_21_option_11_Template, 2, 3, "option", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "label");
    \u0275\u0275text(14, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function TrialBalanceComponent_div_21_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.dateFrom, $event) || (ctx_r1.filters.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "label");
    \u0275\u0275text(18, "Hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function TrialBalanceComponent_div_21_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.dateTo, $event) || (ctx_r1.filters.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "label");
    \u0275\u0275text(22, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275listener("click", function TrialBalanceComponent_div_21_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.consult());
    });
    \u0275\u0275text(24, " Consultar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.accountId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.accounts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.dateTo);
  }
}
function TrialBalanceComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "Generando balance...");
    \u0275\u0275elementEnd();
  }
}
function TrialBalanceComponent_div_22_div_4_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "Sin movimientos en el per\xEDodo");
    \u0275\u0275elementEnd()();
  }
}
function TrialBalanceComponent_div_22_div_4_tr_23_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function TrialBalanceComponent_div_22_div_4_tr_23_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleExpand(row_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(row_r5.id) ? "remove" : "add");
  }
}
function TrialBalanceComponent_div_22_div_4_tr_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function TrialBalanceComponent_div_22_div_4_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39)(2, "div", 40);
    \u0275\u0275template(3, TrialBalanceComponent_div_22_div_4_tr_23_button_3_Template, 3, 1, "button", 41)(4, TrialBalanceComponent_div_22_div_4_tr_23_span_4_Template, 1, 0, "span", 42);
    \u0275\u0275elementStart(5, "span", 43)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("control-row", row_r5.hasChildren);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-left", row_r5.depth * 20, "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.hasChildren);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r5.hasChildren);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(row_r5.initialBalance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(row_r5.periodDebit));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(row_r5.periodCredit));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(row_r5.debtorBalance));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(row_r5.creditorBalance));
  }
}
function TrialBalanceComponent_div_22_div_4_tfoot_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr", 46)(2, "td", 39)(3, "strong");
    \u0275\u0275text(4, "TOTALES");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 35)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 35)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 35)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 35)(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 35)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.report.totals.initialBalance));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.report.totals.periodDebit));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.report.totals.periodCredit));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.report.totals.debtorBalance));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.report.totals.creditorBalance));
  }
}
function TrialBalanceComponent_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "table", 29)(2, "thead")(3, "tr", 30)(4, "th", 31);
    \u0275\u0275text(5, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 32);
    \u0275\u0275text(7, "Saldo Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 33);
    \u0275\u0275text(9, "Sumas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 33);
    \u0275\u0275text(11, "Saldos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr", 34)(13, "th", 35);
    \u0275\u0275text(14, "Debe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 35);
    \u0275\u0275text(16, "Haber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 35);
    \u0275\u0275text(18, "Deudor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 35);
    \u0275\u0275text(20, "Acreedor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, TrialBalanceComponent_div_22_div_4_tr_22_Template, 3, 0, "tr", 36)(23, TrialBalanceComponent_div_22_div_4_tr_23_Template, 19, 13, "tr", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, TrialBalanceComponent_div_22_div_4_tfoot_24_Template, 20, 5, "tfoot", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", ctx_r1.flatRows.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.flatRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.report.totals);
  }
}
function TrialBalanceComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h2", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TrialBalanceComponent_div_22_div_3_Template, 2, 0, "div", 25)(4, TrialBalanceComponent_div_22_div_4_Template, 25, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Movimientos del ", ctx_r1.formatDateDisplay(ctx_r1.report.startDate), " al ", ctx_r1.formatDateDisplay(ctx_r1.report.endDate), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
var TrialBalanceComponent = class _TrialBalanceComponent {
  api;
  searchExpanded = true;
  loading = false;
  report = null;
  flatRows = [];
  expandedIds = /* @__PURE__ */ new Set();
  accounts = [];
  filters = {
    accountId: "",
    dateFrom: "",
    dateTo: ""
  };
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    this.filters.dateFrom = `${year}-01-01`;
    this.filters.dateTo = `${year}-12-31`;
    this.api.get("accounts").subscribe({
      next: (data) => this.accounts = data,
      error: (err) => console.error("Error loading accounts:", err)
    });
    this.consult();
  }
  toggleSearchPanel() {
    this.searchExpanded = !this.searchExpanded;
  }
  consult() {
    if (!this.filters.dateFrom || !this.filters.dateTo) {
      alert("Seleccione el rango de fechas");
      return;
    }
    this.loading = true;
    const params = {
      startDate: this.filters.dateFrom,
      endDate: this.filters.dateTo
    };
    if (this.filters.accountId) {
      params["accountId"] = this.filters.accountId;
    }
    this.api.get("reports/trial-balance", params).subscribe({
      next: (data) => {
        this.report = data;
        this.expandedIds.clear();
        data.rows.forEach((r) => this.expandedIds.add(r.id));
        this.rebuildFlatRows();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert("Error al generar el balance de comprobaci\xF3n");
      }
    });
  }
  rebuildFlatRows() {
    this.flatRows = [];
    if (!this.report)
      return;
    for (const root of this.report.rows) {
      this.flattenNode(root, 0);
    }
  }
  flattenNode(node, depth) {
    const hasChildren = node.children.length > 0;
    this.flatRows.push(__spreadProps(__spreadValues({}, node), { depth, hasChildren }));
    if (hasChildren && this.expandedIds.has(node.id)) {
      for (const child of node.children) {
        this.flattenNode(child, depth + 1);
      }
    }
  }
  toggleExpand(nodeId) {
    if (this.expandedIds.has(nodeId)) {
      this.expandedIds.delete(nodeId);
    } else {
      this.expandedIds.add(nodeId);
    }
    this.rebuildFlatRows();
  }
  isExpanded(nodeId) {
    return this.expandedIds.has(nodeId);
  }
  formatCurrency(amount) {
    if (!amount)
      return "$0.00";
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(amount);
  }
  formatDateDisplay(iso) {
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }
  exportExcel() {
    if (!this.report)
      return;
    const headers = [
      "Cuenta",
      "Saldo Inicial",
      "Debe",
      "Haber",
      "Deudor",
      "Acreedor"
    ];
    const rows = this.flatRows.map((r) => [
      `${"  ".repeat(r.depth)}${r.code} ${r.name}`,
      r.initialBalance,
      r.periodDebit,
      r.periodCredit,
      r.debtorBalance,
      r.creditorBalance
    ]);
    const totals = this.report.totals;
    rows.push([
      "TOTALES",
      totals.initialBalance,
      totals.periodDebit,
      totals.periodCredit,
      totals.debtorBalance,
      totals.creditorBalance
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `balance-comprobacion-${this.report.startDate}-${this.report.endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function TrialBalanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrialBalanceComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrialBalanceComponent, selectors: [["app-trial-balance"]], decls: 23, vars: 4, consts: [[1, "trial-balance-container"], [1, "page-header"], [1, "header-actions"], ["type", "button", "title", "Actualizar", 1, "btn", "btn-icon", 3, "click"], [1, "material-icons"], ["type", "button", "title", "Exportar Excel", 1, "btn", "btn-icon", 3, "click", "disabled"], [1, "info-banner"], [1, "search-panel", "card"], ["type", "button", 1, "search-panel-toggle", 3, "click"], ["class", "search-form", 4, "ngIf"], ["class", "results-panel card", 4, "ngIf"], [1, "search-form"], [1, "search-grid"], [1, "form-group"], [1, "input-with-icon"], ["name", "accountId", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "name", "dateFrom", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateTo", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-action"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "results-panel", "card"], [1, "movements-title"], ["class", "loading", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [1, "loading"], [1, "table-container"], [1, "trial-balance-table"], [1, "header-group"], ["rowspan", "2", 1, "col-account"], ["rowspan", "2", 1, "col-money"], ["colspan", "2", 1, "col-group"], [1, "header-sub"], [1, "col-money"], [4, "ngIf"], [3, "control-row", 4, "ngFor", "ngForOf"], ["colspan", "6", 1, "empty-row"], [1, "col-account"], [1, "account-cell"], ["type", "button", "class", "expand-btn", 3, "click", 4, "ngIf"], ["class", "expand-spacer", 4, "ngIf"], [1, "account-label"], ["type", "button", 1, "expand-btn", 3, "click"], [1, "expand-spacer"], [1, "totals-row"]], template: function TrialBalanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Balance de Comprobaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function TrialBalanceComponent_Template_button_click_5_listener() {
        return ctx.consult();
      });
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function TrialBalanceComponent_Template_button_click_8_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "table_view");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "span", 4);
      \u0275\u0275text(13, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, " Importante: Para realizar una correcta sumatoria de saldos del debe y el haber tiene que exportar el excel por cuentas auxiliares. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
      \u0275\u0275listener("click", function TrialBalanceComponent_Template_button_click_17_listener() {
        return ctx.toggleSearchPanel();
      });
      \u0275\u0275elementStart(18, "span", 4);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " B\xFAsqueda ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, TrialBalanceComponent_div_21_Template, 25, 4, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, TrialBalanceComponent_div_22_Template, 5, 4, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.flatRows.length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.searchExpanded ? "expand_less" : "expand_more");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searchExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.report);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.trial-balance-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  color: #475569;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  background: #dbeafe;\n  border: 1px solid #93c5fd;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.search-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.search-panel-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px 20px;\n  border: none;\n  background: #f8fafc;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  text-align: left;\n}\n.search-panel-toggle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.search-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.search-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: 16px;\n  align-items: end;\n}\n@media (max-width: 900px) {\n  .search-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 500px) {\n  .search-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: #94a3b8;\n  pointer-events: none;\n}\n.input-with-icon[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n.form-action[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 24px;\n}\n.results-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.movements-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px 20px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  border-bottom: 1px solid #e2e8f0;\n  background: #fafbfc;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.trial-balance-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.trial-balance-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\n.trial-balance-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-weight: 600;\n  color: #475569;\n  border-bottom: 2px solid #e2e8f0;\n}\n.trial-balance-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .header-group[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid #e2e8f0;\n}\n.trial-balance-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n}\n.trial-balance-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .col-group[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.trial-balance-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n}\n.trial-balance-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.trial-balance-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.control-row[_ngcontent-%COMP%] {\n  background: #fcfdfe;\n  font-weight: 500;\n}\n.trial-balance-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  border-top: 2px solid #cbd5e1;\n}\n.trial-balance-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.col-account[_ngcontent-%COMP%] {\n  min-width: 280px;\n  text-align: left;\n}\n.col-money[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n  padding: 10px 12px;\n}\n.account-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #cbd5e1;\n  border-radius: 3px;\n  background: white;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n}\n.expand-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n.expand-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.expand-spacer[_ngcontent-%COMP%] {\n  width: 22px;\n  flex-shrink: 0;\n}\n.account-label[_ngcontent-%COMP%] {\n  line-height: 1.3;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 32px !important;\n}\n/*# sourceMappingURL=trial-balance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrialBalanceComponent, [{
    type: Component,
    args: [{ selector: "app-trial-balance", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="trial-balance-container">\r
  <div class="page-header">\r
    <h1>Balance de Comprobaci\xF3n</h1>\r
    <div class="header-actions">\r
      <button type="button" class="btn btn-icon" title="Actualizar" (click)="consult()">\r
        <span class="material-icons">refresh</span>\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-icon"\r
        title="Exportar Excel"\r
        (click)="exportExcel()"\r
        [disabled]="!flatRows.length"\r
      >\r
        <span class="material-icons">table_view</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="info-banner">\r
    <span class="material-icons">info</span>\r
    <span>\r
      Importante: Para realizar una correcta sumatoria de saldos del debe y el\r
      haber tiene que exportar el excel por cuentas auxiliares.\r
    </span>\r
  </div>\r
\r
  <div class="search-panel card">\r
    <button type="button" class="search-panel-toggle" (click)="toggleSearchPanel()">\r
      <span class="material-icons">{{\r
        searchExpanded ? 'expand_less' : 'expand_more'\r
      }}</span>\r
      B\xFAsqueda\r
    </button>\r
\r
    <div class="search-form" *ngIf="searchExpanded">\r
      <div class="search-grid">\r
        <div class="form-group">\r
          <label>Cuenta</label>\r
          <div class="input-with-icon">\r
            <span class="material-icons">search</span>\r
            <select [(ngModel)]="filters.accountId" name="accountId">\r
              <option value="">Todas las cuentas</option>\r
              <option *ngFor="let acc of accounts" [value]="acc.id">\r
                {{ acc.code }} - {{ acc.name }}\r
              </option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>Desde</label>\r
          <input type="date" [(ngModel)]="filters.dateFrom" name="dateFrom" />\r
        </div>\r
        <div class="form-group">\r
          <label>Hasta</label>\r
          <input type="date" [(ngModel)]="filters.dateTo" name="dateTo" />\r
        </div>\r
        <div class="form-group form-action">\r
          <label>&nbsp;</label>\r
          <button type="button" class="btn btn-primary" (click)="consult()">\r
            Consultar\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="results-panel card" *ngIf="report">\r
    <h2 class="movements-title">\r
      Movimientos del {{ formatDateDisplay(report.startDate) }} al\r
      {{ formatDateDisplay(report.endDate) }}\r
    </h2>\r
\r
    <div *ngIf="loading" class="loading">Generando balance...</div>\r
\r
    <div class="table-container" *ngIf="!loading">\r
      <table class="trial-balance-table">\r
        <thead>\r
          <tr class="header-group">\r
            <th rowspan="2" class="col-account">Cuenta</th>\r
            <th rowspan="2" class="col-money">Saldo Inicial</th>\r
            <th colspan="2" class="col-group">Sumas</th>\r
            <th colspan="2" class="col-group">Saldos</th>\r
          </tr>\r
          <tr class="header-sub">\r
            <th class="col-money">Debe</th>\r
            <th class="col-money">Haber</th>\r
            <th class="col-money">Deudor</th>\r
            <th class="col-money">Acreedor</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="flatRows.length === 0">\r
            <td colspan="6" class="empty-row">Sin movimientos en el per\xEDodo</td>\r
          </tr>\r
          <tr\r
            *ngFor="let row of flatRows"\r
            [class.control-row]="row.hasChildren"\r
          >\r
            <td class="col-account">\r
              <div\r
                class="account-cell"\r
                [style.padding-left.px]="row.depth * 20"\r
              >\r
                <button\r
                  *ngIf="row.hasChildren"\r
                  type="button"\r
                  class="expand-btn"\r
                  (click)="toggleExpand(row.id)"\r
                >\r
                  <span class="material-icons">{{\r
                    isExpanded(row.id) ? 'remove' : 'add'\r
                  }}</span>\r
                </button>\r
                <span *ngIf="!row.hasChildren" class="expand-spacer"></span>\r
                <span class="account-label">\r
                  <strong>{{ row.code }}</strong> {{ row.name }}\r
                </span>\r
              </div>\r
            </td>\r
            <td class="col-money">{{ formatCurrency(row.initialBalance) }}</td>\r
            <td class="col-money">{{ formatCurrency(row.periodDebit) }}</td>\r
            <td class="col-money">{{ formatCurrency(row.periodCredit) }}</td>\r
            <td class="col-money">{{ formatCurrency(row.debtorBalance) }}</td>\r
            <td class="col-money">{{ formatCurrency(row.creditorBalance) }}</td>\r
          </tr>\r
        </tbody>\r
        <tfoot *ngIf="report.totals">\r
          <tr class="totals-row">\r
            <td class="col-account"><strong>TOTALES</strong></td>\r
            <td class="col-money">\r
              <strong>{{ formatCurrency(report.totals.initialBalance) }}</strong>\r
            </td>\r
            <td class="col-money">\r
              <strong>{{ formatCurrency(report.totals.periodDebit) }}</strong>\r
            </td>\r
            <td class="col-money">\r
              <strong>{{ formatCurrency(report.totals.periodCredit) }}</strong>\r
            </td>\r
            <td class="col-money">\r
              <strong>{{ formatCurrency(report.totals.debtorBalance) }}</strong>\r
            </td>\r
            <td class="col-money">\r
              <strong>{{ formatCurrency(report.totals.creditorBalance) }}</strong>\r
            </td>\r
          </tr>\r
        </tfoot>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/trial-balance/trial-balance.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.trial-balance-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  color: #475569;\n}\n.btn-icon:hover {\n  background: #f8fafc;\n}\n.btn-icon .material-icons {\n  font-size: 20px;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  background: #dbeafe;\n  border: 1px solid #93c5fd;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner .material-icons {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.search-panel {\n  padding: 0;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.search-panel-toggle {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px 20px;\n  border: none;\n  background: #f8fafc;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  text-align: left;\n}\n.search-panel-toggle:hover {\n  background: #f1f5f9;\n}\n.search-form {\n  padding: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.search-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: 16px;\n  align-items: end;\n}\n@media (max-width: 900px) {\n  .search-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 500px) {\n  .search-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .material-icons {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: #94a3b8;\n  pointer-events: none;\n}\n.input-with-icon select {\n  padding-left: 36px;\n}\n.form-action .btn-primary {\n  width: 100%;\n  padding: 10px 24px;\n}\n.results-panel {\n  padding: 0;\n  overflow: hidden;\n}\n.movements-title {\n  margin: 0;\n  padding: 16px 20px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  border-bottom: 1px solid #e2e8f0;\n  background: #fafbfc;\n}\n.loading {\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.table-container {\n  overflow-x: auto;\n}\n.trial-balance-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.trial-balance-table thead {\n  background: #f1f5f9;\n}\n.trial-balance-table thead th {\n  padding: 10px 12px;\n  font-weight: 600;\n  color: #475569;\n  border-bottom: 2px solid #e2e8f0;\n}\n.trial-balance-table thead .header-group th {\n  text-align: center;\n  border-bottom: 1px solid #e2e8f0;\n}\n.trial-balance-table thead .header-sub th {\n  text-align: right;\n  font-size: 12px;\n}\n.trial-balance-table thead .col-group {\n  text-align: center;\n}\n.trial-balance-table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n}\n.trial-balance-table tbody tr:hover {\n  background: #fafbfc;\n}\n.trial-balance-table tbody tr.control-row {\n  background: #fcfdfe;\n  font-weight: 500;\n}\n.trial-balance-table tfoot .totals-row {\n  background: #e2e8f0;\n  border-top: 2px solid #cbd5e1;\n}\n.trial-balance-table tfoot .totals-row td {\n  padding: 12px;\n}\n.col-account {\n  min-width: 280px;\n  text-align: left;\n}\n.col-money {\n  text-align: right;\n  white-space: nowrap;\n  padding: 10px 12px;\n}\n.account-cell {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.expand-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #cbd5e1;\n  border-radius: 3px;\n  background: white;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n}\n.expand-btn .material-icons {\n  font-size: 16px;\n  color: #64748b;\n}\n.expand-btn:hover {\n  background: #f1f5f9;\n}\n.expand-spacer {\n  width: 22px;\n  flex-shrink: 0;\n}\n.account-label {\n  line-height: 1.3;\n}\n.empty-row {\n  text-align: center;\n  color: #94a3b8;\n  padding: 32px !important;\n}\n/*# sourceMappingURL=trial-balance.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrialBalanceComponent, { className: "TrialBalanceComponent", filePath: "src/app/pages/trial-balance/trial-balance.component.ts", lineNumber: 24 });
})();
export {
  TrialBalanceComponent
};
//# sourceMappingURL=chunk-VMK4OHDN.js.map
