import {
  JournalEntryService
} from "./chunk-2Q7MZH63.js";
import {
  AccountService
} from "./chunk-OIQRSETW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HXWGHL77.js";
import "./chunk-JY7PP6BA.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/general-ledger/general-ledger.component.ts
function GeneralLedgerComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r1 = ctx.$implicit;
    \u0275\u0275property("value", account_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", account_r1.code, " - ", account_r1.name, " ");
  }
}
function GeneralLedgerComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p");
    \u0275\u0275text(2, "Cargando...");
    \u0275\u0275elementEnd()();
  }
}
function GeneralLedgerComponent_div_32_div_8_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const movement_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, movement_r2.journalEntry == null ? null : movement_r2.journalEntry.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(movement_r2.journalEntry == null ? null : movement_r2.journalEntry.entryNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(movement_r2.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, movement_r2.debit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, movement_r2.credit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 15, movement_r2.balance, "1.2-2"), " ");
  }
}
function GeneralLedgerComponent_div_32_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "N\xFAmero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "D\xE9bito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Saldo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, GeneralLedgerComponent_div_32_div_8_tr_17_Template, 17, 18, "tr", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot")(19, "tr", 23)(20, "td", 24)(21, "strong");
    \u0275\u0275text(22, "Saldo Final");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 25)(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.ledgerData.movements);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 2, ctx_r2.ledgerData.finalBalance, "1.2-2"));
  }
}
function GeneralLedgerComponent_div_32_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "p")(2, "strong");
    \u0275\u0275text(3, "No se encontraron movimientos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Para generar un libro mayor, necesitas: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul")(7, "li");
    \u0275\u0275text(8, "Crear asientos contables en el ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Libro Diario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "strong");
    \u0275\u0275text(13, "Postear");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " los asientos (no pueden estar en borrador)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Asegurarte de que las fechas de los asientos est\xE9n dentro del rango seleccionado");
    \u0275\u0275elementEnd()()();
  }
}
function GeneralLedgerComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, GeneralLedgerComponent_div_32_div_8_Template, 27, 5, "div", 19)(9, GeneralLedgerComponent_div_32_div_9_Template, 17, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Libro Mayor - ", ctx_r2.ledgerData.account == null ? null : ctx_r2.ledgerData.account.code, " - ", ctx_r2.ledgerData.account == null ? null : ctx_r2.ledgerData.account.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Per\xEDodo: ", \u0275\u0275pipeBind2(6, 6, ctx_r2.startDate, "dd/MM/yyyy"), " - ", \u0275\u0275pipeBind2(7, 9, ctx_r2.endDate, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.ledgerData.movements && ctx_r2.ledgerData.movements.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.ledgerData.movements || ctx_r2.ledgerData.movements.length === 0);
  }
}
var GeneralLedgerComponent = class _GeneralLedgerComponent {
  journalEntryService;
  accountService;
  accounts = [];
  selectedAccountId = "";
  startDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1).toISOString().split("T")[0];
  endDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  ledgerData = null;
  loading = false;
  constructor(journalEntryService, accountService) {
    this.journalEntryService = journalEntryService;
    this.accountService = accountService;
  }
  ngOnInit() {
    this.loadAccounts();
  }
  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        this.accounts = data.filter((a) => a.isActive);
      },
      error: (error) => {
        console.error("Error loading accounts:", error);
      }
    });
  }
  generateLedger() {
    if (!this.selectedAccountId) {
      alert("Por favor seleccione una cuenta");
      return;
    }
    this.loading = true;
    this.ledgerData = null;
    this.journalEntryService.getGeneralLedger(this.selectedAccountId, this.startDate, this.endDate).subscribe({
      next: (data) => {
        this.ledgerData = data;
        this.loading = false;
        if (!data.movements || data.movements.length === 0) {
          alert("No se encontraron movimientos para esta cuenta en el per\xEDodo seleccionado.\n\nAseg\xFArate de:\n1. Tener asientos contables creados\n2. Que los asientos est\xE9n POSTEADOS (no borradores)\n3. Que las fechas de los asientos est\xE9n dentro del rango seleccionado");
        }
      },
      error: (error) => {
        console.error("Error loading ledger:", error);
        let errorMessage = "Error al cargar el libro mayor";
        if (error.status === 404) {
          errorMessage = "Cuenta no encontrada. Por favor seleccione otra cuenta.";
        } else if (error.status === 400) {
          errorMessage = error.error?.message || "Datos inv\xE1lidos. Verifique las fechas y la cuenta seleccionada.";
        } else if (error.status === 0) {
          errorMessage = "No se pudo conectar al servidor. Verifique que el backend est\xE9 ejecut\xE1ndose.";
        }
        alert(errorMessage);
        this.loading = false;
      }
    });
  }
  static \u0275fac = function GeneralLedgerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeneralLedgerComponent)(\u0275\u0275directiveInject(JournalEntryService), \u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneralLedgerComponent, selectors: [["app-general-ledger"]], decls: 33, vars: 7, consts: [[1, "general-ledger-container"], [1, "page-header"], [1, "filters", "card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["name", "accountId", "required", "", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "name", "startDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "endDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "material-icons"], ["class", "loading card", 4, "ngIf"], ["class", "ledger-results card", 4, "ngIf"], [3, "value"], [1, "loading", "card"], [1, "ledger-results", "card"], [1, "ledger-header"], ["class", "table-container", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "totals-row"], ["colspan", "5"], [1, "text-right", "balance"], [1, "text-right"], [1, "no-data"]], template: function GeneralLedgerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Libro Mayor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "h2");
      \u0275\u0275text(6, "Filtros");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function GeneralLedgerComponent_Template_form_ngSubmit_7_listener() {
        return ctx.generateLedger();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label");
      \u0275\u0275text(11, "Cuenta *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function GeneralLedgerComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedAccountId, $event) || (ctx.selectedAccountId = $event);
        return $event;
      });
      \u0275\u0275elementStart(13, "option", 7);
      \u0275\u0275text(14, "Seleccione una cuenta...");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, GeneralLedgerComponent_option_15_Template, 2, 3, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Fecha Inicio *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function GeneralLedgerComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 5)(21, "label");
      \u0275\u0275text(22, "Fecha Fin *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function GeneralLedgerComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 5)(25, "label");
      \u0275\u0275text(26, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 11)(28, "span", 12);
      \u0275\u0275text(29, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Generar Libro Mayor ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(31, GeneralLedgerComponent_div_31_Template, 3, 0, "div", 13)(32, GeneralLedgerComponent_div_32_Template, 10, 12, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedAccountId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.accounts);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ledgerData && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.general-ledger-container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: 20px;\n  align-items: end;\n}\n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #64748b;\n}\n.ledger-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.ledger-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.ledger-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.balance[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-weight: 600;\n  border-top: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   td.balance[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1e293b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.no-data[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #64748b;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.no-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  display: inline-block;\n  margin: 20px 0;\n  padding-left: 20px;\n}\n.no-data[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n/*# sourceMappingURL=general-ledger.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneralLedgerComponent, [{
    type: Component,
    args: [{ selector: "app-general-ledger", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="general-ledger-container">
  <div class="page-header">
    <h1>Libro Mayor</h1>
  </div>

  <div class="filters card">
    <h2>Filtros</h2>
    <form (ngSubmit)="generateLedger()">
      <div class="form-row">
        <div class="form-group">
          <label>Cuenta *</label>
          <select [(ngModel)]="selectedAccountId" name="accountId" required>
            <option value="">Seleccione una cuenta...</option>
            <option *ngFor="let account of accounts" [value]="account.id">
              {{ account.code }} - {{ account.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Fecha Inicio *</label>
          <input type="date" [(ngModel)]="startDate" name="startDate" required />
        </div>
        <div class="form-group">
          <label>Fecha Fin *</label>
          <input type="date" [(ngModel)]="endDate" name="endDate" required />
        </div>
        <div class="form-group">
          <label>&nbsp;</label>
          <button type="submit" class="btn btn-primary" [disabled]="loading">
            <span class="material-icons">search</span>
            Generar Libro Mayor
          </button>
        </div>
      </div>
    </form>
  </div>

  <div *ngIf="loading" class="loading card">
    <p>Cargando...</p>
  </div>

  <div *ngIf="ledgerData && !loading" class="ledger-results card">
    <div class="ledger-header">
      <h2>
        Libro Mayor - {{ ledgerData.account?.code }} -
        {{ ledgerData.account?.name }}
      </h2>
      <p>
        Per\xEDodo: {{ startDate | date: 'dd/MM/yyyy' }} -
        {{ endDate | date: 'dd/MM/yyyy' }}
      </p>
    </div>

    <div *ngIf="ledgerData.movements && ledgerData.movements.length > 0" class="table-container">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>N\xFAmero</th>
            <th>Descripci\xF3n</th>
            <th>D\xE9bito</th>
            <th>Cr\xE9dito</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let movement of ledgerData.movements">
            <td>{{ movement.journalEntry?.date | date: 'dd/MM/yyyy' }}</td>
            <td>{{ movement.journalEntry?.entryNumber }}</td>
            <td>{{ movement.description || '-' }}</td>
            <td class="text-right">{{ movement.debit | number: '1.2-2' }}</td>
            <td class="text-right">{{ movement.credit | number: '1.2-2' }}</td>
            <td class="text-right balance">
              {{ movement.balance | number: '1.2-2' }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="totals-row">
            <td colspan="5"><strong>Saldo Final</strong></td>
            <td class="text-right balance">
              <strong>{{ ledgerData.finalBalance | number: '1.2-2' }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div *ngIf="!ledgerData.movements || ledgerData.movements.length === 0" class="no-data">
      <p>
        <strong>No se encontraron movimientos</strong>
      </p>
      <p>
        Para generar un libro mayor, necesitas:
      </p>
      <ul>
        <li>Crear asientos contables en el <strong>Libro Diario</strong></li>
        <li><strong>Postear</strong> los asientos (no pueden estar en borrador)</li>
        <li>Asegurarte de que las fechas de los asientos est\xE9n dentro del rango seleccionado</li>
      </ul>
    </div>
  </div>
</div>

`, styles: ["/* src/app/pages/general-ledger/general-ledger.component.scss */\n.general-ledger-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.filters form .form-row {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  gap: 20px;\n  align-items: end;\n}\n.filters form .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.filters form .form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.filters form .form-group input,\n.filters form .form-group select {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.filters form .form-group input:focus,\n.filters form .form-group select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.loading {\n  text-align: center;\n  padding: 40px;\n  color: #64748b;\n}\n.ledger-header {\n  margin-bottom: 24px;\n}\n.ledger-header h2 {\n  margin: 0 0 8px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.ledger-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\ntable tbody td.text-right {\n  text-align: right;\n}\ntable tbody td.balance {\n  font-weight: 500;\n  color: #1e293b;\n}\ntable tfoot .totals-row {\n  background: #f8fafc;\n  font-weight: 600;\n  border-top: 2px solid #e2e8f0;\n}\ntable tfoot .totals-row td {\n  padding: 12px;\n}\ntable tfoot .totals-row td.balance {\n  font-size: 16px;\n  color: #1e293b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.no-data {\n  padding: 40px 20px;\n  text-align: center;\n  color: #64748b;\n}\n.no-data p {\n  margin: 12px 0;\n}\n.no-data ul {\n  text-align: left;\n  display: inline-block;\n  margin: 20px 0;\n  padding-left: 20px;\n}\n.no-data ul li {\n  margin: 8px 0;\n}\n/*# sourceMappingURL=general-ledger.component.css.map */\n"] }]
  }], () => [{ type: JournalEntryService }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneralLedgerComponent, { className: "GeneralLedgerComponent", filePath: "src/app/pages/general-ledger/general-ledger.component.ts", lineNumber: 15 });
})();
export {
  GeneralLedgerComponent
};
//# sourceMappingURL=chunk-UT4RI3IX.js.map
