import {
  BankingService
} from "./chunk-X5QM4QGZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵgetCurrentView,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/banking/banking.component.ts
function BankingComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "h2");
    \u0275\u0275text(2, "Crear Cuenta Bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 19);
    \u0275\u0275listener("ngSubmit", function BankingComponent_div_17_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createBankAccount());
    });
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "N\xFAmero de Cuenta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_17_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBankAccount.accountNumber, $event) || (ctx_r1.newBankAccount.accountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label");
    \u0275\u0275text(11, "Banco *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_17_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBankAccount.bankName, $event) || (ctx_r1.newBankAccount.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "label");
    \u0275\u0275text(15, "Tipo de Cuenta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_17_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBankAccount.accountType, $event) || (ctx_r1.newBankAccount.accountType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 24);
    \u0275\u0275text(18, "Corriente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 25);
    \u0275\u0275text(20, "Ahorros");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 12)(22, "label");
    \u0275\u0275text(23, "Saldo Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_17_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBankAccount.initialBalance, $event) || (ctx_r1.newBankAccount.initialBalance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 27)(26, "button", 28);
    \u0275\u0275listener("click", function BankingComponent_div_17_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBankAccountForm = false);
    });
    \u0275\u0275text(27, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 29);
    \u0275\u0275text(29, "Crear Cuenta");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBankAccount.accountNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBankAccount.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBankAccount.accountType);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBankAccount.initialBalance);
  }
}
function BankingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "h2");
    \u0275\u0275text(2, "Crear Caja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 19);
    \u0275\u0275listener("ngSubmit", function BankingComponent_div_18_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCashAccount());
    });
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_18_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCashAccount.name, $event) || (ctx_r1.newCashAccount.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label");
    \u0275\u0275text(11, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_18_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCashAccount.location, $event) || (ctx_r1.newCashAccount.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "label");
    \u0275\u0275text(15, "Saldo Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_18_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCashAccount.initialBalance, $event) || (ctx_r1.newCashAccount.initialBalance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 27)(18, "button", 28);
    \u0275\u0275listener("click", function BankingComponent_div_18_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCashAccountForm = false);
    });
    \u0275\u0275text(19, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275text(21, "Crear Caja");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCashAccount.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCashAccount.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCashAccount.initialBalance);
  }
}
function BankingComponent_div_19_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r5 = ctx.$implicit;
    \u0275\u0275property("value", account_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", account_r5.bankName, " - ", account_r5.accountNumber, " ");
  }
}
function BankingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "h2");
    \u0275\u0275text(2, "Registrar Transacci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 19);
    \u0275\u0275listener("ngSubmit", function BankingComponent_div_19_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createTransaction());
    });
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "Cuenta Bancaria *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_19_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTransaction.bankAccountId, $event) || (ctx_r1.newTransaction.bankAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 14);
    \u0275\u0275text(10, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BankingComponent_div_19_option_11_Template, 2, 3, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "label");
    \u0275\u0275text(14, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_19_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTransaction.type, $event) || (ctx_r1.newTransaction.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 34);
    \u0275\u0275text(17, "Dep\xF3sito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 35);
    \u0275\u0275text(19, "Retiro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 36);
    \u0275\u0275text(21, "Transferencia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 12)(23, "label");
    \u0275\u0275text(24, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_19_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTransaction.date, $event) || (ctx_r1.newTransaction.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "label");
    \u0275\u0275text(28, "Monto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_div_19_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newTransaction.amount, $event) || (ctx_r1.newTransaction.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 27)(31, "button", 28);
    \u0275\u0275listener("click", function BankingComponent_div_19_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTransactionForm = false);
    });
    \u0275\u0275text(32, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 29);
    \u0275\u0275text(34, "Registrar Transacci\xF3n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTransaction.bankAccountId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.bankAccounts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTransaction.type);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTransaction.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newTransaction.amount);
  }
}
function BankingComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    \u0275\u0275property("value", account_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", account_r6.bankName, " - ", account_r6.accountNumber, " ");
  }
}
function BankingComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, transaction_r7.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r7.bankAccount == null ? null : transaction_r7.bankAccount.accountNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", transaction_r7.type === "DEPOSIT" ? "Dep\xF3sito" : transaction_r7.type === "WITHDRAWAL" ? "Retiro" : "Transferencia", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, transaction_r7.amount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r7.description || "-");
  }
}
var BankingComponent = class _BankingComponent {
  bankingService;
  bankAccounts = [];
  cashAccounts = [];
  transactions = [];
  showBankAccountForm = false;
  showCashAccountForm = false;
  showTransactionForm = false;
  selectedAccountId = "";
  newBankAccount = {
    accountNumber: "",
    bankName: "",
    accountType: "CHECKING",
    initialBalance: 0
  };
  newCashAccount = {
    name: "",
    initialBalance: 0
  };
  newTransaction = {
    bankAccountId: "",
    type: "DEPOSIT",
    amount: 0,
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  };
  constructor(bankingService) {
    this.bankingService = bankingService;
  }
  ngOnInit() {
    this.loadBankAccounts();
    this.loadCashAccounts();
    this.loadTransactions();
  }
  loadBankAccounts() {
    this.bankingService.getBankAccounts().subscribe({
      next: (data) => {
        this.bankAccounts = data;
      },
      error: (error) => {
        console.error("Error loading bank accounts:", error);
      }
    });
  }
  loadCashAccounts() {
    this.bankingService.getCashAccounts().subscribe({
      next: (data) => {
        this.cashAccounts = data;
      },
      error: (error) => {
        console.error("Error loading cash accounts:", error);
      }
    });
  }
  loadTransactions() {
    this.bankingService.getTransactions(this.selectedAccountId || void 0).subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (error) => {
        console.error("Error loading transactions:", error);
      }
    });
  }
  createBankAccount() {
    this.bankingService.createBankAccount(this.newBankAccount).subscribe({
      next: () => {
        alert("Cuenta bancaria creada exitosamente");
        this.showBankAccountForm = false;
        this.resetBankAccountForm();
        this.loadBankAccounts();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear la cuenta");
      }
    });
  }
  createCashAccount() {
    this.bankingService.createCashAccount(this.newCashAccount).subscribe({
      next: () => {
        alert("Caja creada exitosamente");
        this.showCashAccountForm = false;
        this.resetCashAccountForm();
        this.loadCashAccounts();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear la caja");
      }
    });
  }
  createTransaction() {
    this.bankingService.createTransaction(this.newTransaction).subscribe({
      next: () => {
        alert("Transacci\xF3n registrada exitosamente");
        this.showTransactionForm = false;
        this.resetTransactionForm();
        this.loadTransactions();
        this.loadBankAccounts();
      },
      error: (error) => {
        alert(error.error?.message || "Error al registrar la transacci\xF3n");
      }
    });
  }
  resetBankAccountForm() {
    this.newBankAccount = {
      accountNumber: "",
      bankName: "",
      accountType: "CHECKING",
      initialBalance: 0
    };
  }
  resetCashAccountForm() {
    this.newCashAccount = {
      name: "",
      initialBalance: 0
    };
  }
  resetTransactionForm() {
    this.newTransaction = {
      bankAccountId: "",
      type: "DEPOSIT",
      amount: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
  }
  onAccountFilterChange() {
    this.loadTransactions();
  }
  getTotalBankBalance() {
    return this.bankAccounts.reduce((sum, a) => sum + a.balance, 0);
  }
  getTotalCashBalance() {
    return this.cashAccounts.reduce((sum, a) => sum + a.balance, 0);
  }
  static \u0275fac = function BankingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankingComponent)(\u0275\u0275directiveInject(BankingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankingComponent, selectors: [["app-banking"]], decls: 66, vars: 16, consts: [[1, "banking-container"], [1, "page-header"], [1, "btn", "btn-secondary", 3, "click"], [1, "material-icons"], [1, "btn", "btn-primary", 3, "click"], ["class", "create-form card", 4, "ngIf"], [1, "accounts-summary", "card"], [1, "summary-grid"], [1, "summary-item"], [1, "summary-value"], [1, "summary-total"], [1, "transactions-list", "card"], [1, "form-group"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "create-form", "card"], [3, "ngSubmit"], [1, "form-row"], ["type", "text", "name", "accountNumber", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "bankName", "required", "", 3, "ngModelChange", "ngModel"], ["name", "accountType", "required", "", 3, "ngModelChange", "ngModel"], ["value", "CHECKING"], ["value", "SAVINGS"], ["type", "number", "name", "initialBalance", "step", "0.01", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "location", 3, "ngModelChange", "ngModel"], ["name", "bankAccountId", "required", "", 3, "ngModelChange", "ngModel"], ["name", "type", "required", "", 3, "ngModelChange", "ngModel"], ["value", "DEPOSIT"], ["value", "WITHDRAWAL"], ["value", "TRANSFER"], ["type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "amount", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "badge"]], template: function BankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Bancos y Caja");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 2);
      \u0275\u0275listener("click", function BankingComponent_Template_button_click_5_listener() {
        return ctx.showCashAccountForm = !ctx.showCashAccountForm;
      });
      \u0275\u0275elementStart(6, "span", 3);
      \u0275\u0275text(7, "account_balance");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Caja ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 2);
      \u0275\u0275listener("click", function BankingComponent_Template_button_click_9_listener() {
        return ctx.showBankAccountForm = !ctx.showBankAccountForm;
      });
      \u0275\u0275elementStart(10, "span", 3);
      \u0275\u0275text(11, "account_balance");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Banco ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 4);
      \u0275\u0275listener("click", function BankingComponent_Template_button_click_13_listener() {
        return ctx.showTransactionForm = !ctx.showTransactionForm;
      });
      \u0275\u0275elementStart(14, "span", 3);
      \u0275\u0275text(15, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Transacci\xF3n ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, BankingComponent_div_17_Template, 30, 4, "div", 5)(18, BankingComponent_div_18_Template, 22, 3, "div", 5)(19, BankingComponent_div_19_Template, 35, 5, "div", 5);
      \u0275\u0275elementStart(20, "div", 6)(21, "h2");
      \u0275\u0275text(22, "Resumen de Cuentas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 7)(24, "div", 8)(25, "h3");
      \u0275\u0275text(26, "Cuentas Bancarias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 9);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p", 10);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3");
      \u0275\u0275text(34, "Cajas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 9);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 10);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 11)(41, "h2");
      \u0275\u0275text(42, "Transacciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 12)(44, "label");
      \u0275\u0275text(45, "Filtrar por Cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BankingComponent_Template_select_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedAccountId, $event) || (ctx.selectedAccountId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BankingComponent_Template_select_change_46_listener() {
        return ctx.onAccountFilterChange();
      });
      \u0275\u0275elementStart(47, "option", 14);
      \u0275\u0275text(48, "Todas");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, BankingComponent_option_49_Template, 2, 3, "option", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 16)(51, "table")(52, "thead")(53, "tr")(54, "th");
      \u0275\u0275text(55, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Monto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Descripci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275template(65, BankingComponent_tr_65_Template, 14, 11, "tr", 17);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.showBankAccountForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCashAccountForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showTransactionForm);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.bankAccounts.length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Total: $", \u0275\u0275pipeBind2(31, 10, ctx.getTotalBankBalance(), "1.2-2"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.cashAccounts.length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Total: $", \u0275\u0275pipeBind2(39, 13, ctx.getTotalCashBalance(), "1.2-2"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedAccountId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.bankAccounts);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.transactions);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.banking-container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #3b82f6;\n}\n.summary-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  color: #64748b;\n}\n.summary-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n.summary-item[_ngcontent-%COMP%]   .summary-total[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n/*# sourceMappingURL=banking.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankingComponent, [{
    type: Component,
    args: [{ selector: "app-banking", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="banking-container">\r
  <div class="page-header">\r
    <h1>Bancos y Caja</h1>\r
    <div>\r
      <button class="btn btn-secondary" (click)="showCashAccountForm = !showCashAccountForm">\r
        <span class="material-icons">account_balance</span>\r
        Caja\r
      </button>\r
      <button class="btn btn-secondary" (click)="showBankAccountForm = !showBankAccountForm">\r
        <span class="material-icons">account_balance</span>\r
        Banco\r
      </button>\r
      <button class="btn btn-primary" (click)="showTransactionForm = !showTransactionForm">\r
        <span class="material-icons">add</span>\r
        Transacci\xF3n\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="showBankAccountForm" class="create-form card">\r
    <h2>Crear Cuenta Bancaria</h2>\r
    <form (ngSubmit)="createBankAccount()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>N\xFAmero de Cuenta *</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="newBankAccount.accountNumber"\r
            name="accountNumber"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Banco *</label>\r
          <input type="text" [(ngModel)]="newBankAccount.bankName" name="bankName" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Tipo de Cuenta *</label>\r
          <select [(ngModel)]="newBankAccount.accountType" name="accountType" required>\r
            <option value="CHECKING">Corriente</option>\r
            <option value="SAVINGS">Ahorros</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Saldo Inicial</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newBankAccount.initialBalance"\r
            name="initialBalance"\r
            step="0.01"\r
          />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showBankAccountForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Crear Cuenta</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div *ngIf="showCashAccountForm" class="create-form card">\r
    <h2>Crear Caja</h2>\r
    <form (ngSubmit)="createCashAccount()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Nombre *</label>\r
          <input type="text" [(ngModel)]="newCashAccount.name" name="name" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Ubicaci\xF3n</label>\r
          <input type="text" [(ngModel)]="newCashAccount.location" name="location" />\r
        </div>\r
        <div class="form-group">\r
          <label>Saldo Inicial</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newCashAccount.initialBalance"\r
            name="initialBalance"\r
            step="0.01"\r
          />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showCashAccountForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Crear Caja</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div *ngIf="showTransactionForm" class="create-form card">\r
    <h2>Registrar Transacci\xF3n</h2>\r
    <form (ngSubmit)="createTransaction()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Cuenta Bancaria *</label>\r
          <select [(ngModel)]="newTransaction.bankAccountId" name="bankAccountId" required>\r
            <option value="">Seleccione...</option>\r
            <option *ngFor="let account of bankAccounts" [value]="account.id">\r
              {{ account.bankName }} - {{ account.accountNumber }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Tipo *</label>\r
          <select [(ngModel)]="newTransaction.type" name="type" required>\r
            <option value="DEPOSIT">Dep\xF3sito</option>\r
            <option value="WITHDRAWAL">Retiro</option>\r
            <option value="TRANSFER">Transferencia</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Fecha *</label>\r
          <input type="date" [(ngModel)]="newTransaction.date" name="date" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Monto *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newTransaction.amount"\r
            name="amount"\r
            step="0.01"\r
            min="0"\r
            required\r
          />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showTransactionForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Registrar Transacci\xF3n</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="accounts-summary card">\r
    <h2>Resumen de Cuentas</h2>\r
    <div class="summary-grid">\r
      <div class="summary-item">\r
        <h3>Cuentas Bancarias</h3>\r
        <p class="summary-value">{{ bankAccounts.length }}</p>\r
        <p class="summary-total">\r
          Total: \${{ getTotalBankBalance() | number: '1.2-2' }}\r
        </p>\r
      </div>\r
      <div class="summary-item">\r
        <h3>Cajas</h3>\r
        <p class="summary-value">{{ cashAccounts.length }}</p>\r
        <p class="summary-total">\r
          Total: \${{ getTotalCashBalance() | number: '1.2-2' }}\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="transactions-list card">\r
    <h2>Transacciones</h2>\r
    <div class="form-group">\r
      <label>Filtrar por Cuenta</label>\r
      <select [(ngModel)]="selectedAccountId" (change)="onAccountFilterChange()">\r
        <option value="">Todas</option>\r
        <option *ngFor="let account of bankAccounts" [value]="account.id">\r
          {{ account.bankName }} - {{ account.accountNumber }}\r
        </option>\r
      </select>\r
    </div>\r
    <div class="table-container">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>Fecha</th>\r
            <th>Cuenta</th>\r
            <th>Tipo</th>\r
            <th>Monto</th>\r
            <th>Descripci\xF3n</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let transaction of transactions">\r
            <td>{{ transaction.date | date: 'dd/MM/yyyy' }}</td>\r
            <td>{{ transaction.bankAccount?.accountNumber }}</td>\r
            <td>\r
              <span class="badge">\r
                {{ transaction.type === 'DEPOSIT' ? 'Dep\xF3sito' : transaction.type === 'WITHDRAWAL' ? 'Retiro' : 'Transferencia' }}\r
              </span>\r
            </td>\r
            <td>{{ transaction.amount | number: '1.2-2' }}</td>\r
            <td>{{ transaction.description || '-' }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/banking/banking.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.banking-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n}\n.summary-item {\n  background: #f8fafc;\n  padding: 20px;\n  border-radius: 8px;\n  border-left: 4px solid #3b82f6;\n}\n.summary-item h3 {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  color: #64748b;\n}\n.summary-item .summary-value {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n.summary-item .summary-total {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n/*# sourceMappingURL=banking.component.css.map */\n"] }]
  }], () => [{ type: BankingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankingComponent, { className: "BankingComponent", filePath: "src/app/pages/banking/banking.component.ts", lineNumber: 21 });
})();
export {
  BankingComponent
};
//# sourceMappingURL=chunk-WGOW6JWN.js.map
