import {
  AccountService
} from "./chunk-OIQRSETW.js";
import {
  CheckboxControlValueAccessor,
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
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/models/account.model.ts
var AccountType;
(function(AccountType2) {
  AccountType2["ASSET"] = "ASSET";
  AccountType2["LIABILITY"] = "LIABILITY";
  AccountType2["EQUITY"] = "EQUITY";
  AccountType2["INCOME"] = "INCOME";
  AccountType2["EXPENSE"] = "EXPENSE";
})(AccountType || (AccountType = {}));

// src/app/pages/accounts/accounts.component.ts
function AccountsComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p")(2, "strong");
    \u0275\u0275text(3, "\u26A0\uFE0F Importante:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Si seleccionas una cuenta padre, aseg\xFArate de que sea una ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Cuenta de Control");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Las cuentas de movimiento no pueden tener cuentas hijas.");
    \u0275\u0275elementEnd()();
  }
}
function AccountsComponent_div_8_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", type_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.accountTypeLabels[type_r3], " ");
  }
}
function AccountsComponent_div_8_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r4 = ctx.$implicit;
    \u0275\u0275property("value", account_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", account_r4.code, " - ", account_r4.name, " ", account_r4.isControlAccount ? "(Control)" : "(Movimiento)", " ");
  }
}
function AccountsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Crear Nueva Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AccountsComponent_div_8_div_3_Template, 11, 0, "div", 12);
    \u0275\u0275elementStart(4, "form", 13);
    \u0275\u0275listener("ngSubmit", function AccountsComponent_div_8_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAccount());
    });
    \u0275\u0275elementStart(5, "div", 14)(6, "label");
    \u0275\u0275text(7, "C\xF3digo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAccount.code, $event) || (ctx_r1.newAccount.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10, "Ejemplo: 1.1.01 (niveles separados por punto)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "label");
    \u0275\u0275text(13, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_8_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAccount.name, $event) || (ctx_r1.newAccount.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "label");
    \u0275\u0275text(17, "Tipo de Cuenta *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_8_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAccount.type, $event) || (ctx_r1.newAccount.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, AccountsComponent_div_8_option_19_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label")(22, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_8_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAccount.isControlAccount, $event) || (ctx_r1.newAccount.isControlAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Cuenta de Control ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "small");
    \u0275\u0275text(25, " Las cuentas de control agrupan otras cuentas y NO se usan en asientos. Si vas a crear cuentas hijas, marca esta opci\xF3n. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 14)(27, "label");
    \u0275\u0275text(28, "Cuenta Padre (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_8_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAccount.parentId, $event) || (ctx_r1.newAccount.parentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 21);
    \u0275\u0275text(31, "Ninguna (Cuenta Ra\xEDz)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, AccountsComponent_div_8_option_32_Template, 2, 4, "option", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "small");
    \u0275\u0275text(34, " Solo puedes seleccionar cuentas de Control como padre. Si seleccionas una cuenta de Movimiento, recibir\xE1s un error. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 14)(36, "label");
    \u0275\u0275text(37, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_8_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAccount.description, $event) || (ctx_r1.newAccount.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 23)(40, "button", 24);
    \u0275\u0275listener("click", function AccountsComponent_div_8_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateForm());
    });
    \u0275\u0275text(41, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 25);
    \u0275\u0275text(43, "Crear Cuenta");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.newAccount.parentId);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAccount.code);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAccount.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAccount.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.accountTypes);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAccount.isControlAccount);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAccount.parentId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.accounts);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAccount.description);
  }
}
function AccountsComponent_tr_29_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AccountsComponent_tr_29_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const account_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deactivateAccount(account_r6));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function AccountsComponent_tr_29_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AccountsComponent_tr_29_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const account_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activateAccount(account_r6));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function AccountsComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 28);
    \u0275\u0275template(15, AccountsComponent_tr_29_button_15_Template, 3, 0, "button", 29)(16, AccountsComponent_tr_29_button_16_Template, 3, 0, "button", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.accountTypeLabels[account_r6.type]);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", account_r6.isControlAccount)("badge-secondary", !account_r6.isControlAccount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", account_r6.isControlAccount ? "S\xED" : "No", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", account_r6.isActive)("badge-danger", !account_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", account_r6.isActive ? "Activa" : "Inactiva", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", account_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !account_r6.isActive);
  }
}
function AccountsComponent_div_34_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "[Control]");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_div_34_div_7_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "[Control]");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_div_34_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AccountsComponent_div_34_div_7_div_1_span_6_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r8.isControlAccount);
  }
}
function AccountsComponent_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, AccountsComponent_div_34_div_7_div_1_Template, 7, 3, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", account_r9.children);
  }
}
function AccountsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AccountsComponent_div_34_span_6_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AccountsComponent_div_34_div_7_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", account_r9.isControlAccount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", account_r9.children && account_r9.children.length > 0);
  }
}
var AccountsComponent = class _AccountsComponent {
  accountService;
  accounts = [];
  accountsHierarchy = [];
  showCreateForm = false;
  accountTypes = Object.values(AccountType);
  accountTypeLabels = {
    [AccountType.ASSET]: "Activo",
    [AccountType.LIABILITY]: "Pasivo",
    [AccountType.EQUITY]: "Patrimonio",
    [AccountType.INCOME]: "Ingresos",
    [AccountType.EXPENSE]: "Gastos"
  };
  newAccount = {
    code: "",
    name: "",
    type: AccountType.ASSET,
    parentId: null,
    isControlAccount: false
  };
  constructor(accountService) {
    this.accountService = accountService;
  }
  ngOnInit() {
    this.loadAccounts();
    this.loadHierarchy();
  }
  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        this.accounts = data;
      },
      error: (error) => {
        console.error("Error loading accounts:", error);
        alert("Error al cargar las cuentas");
      }
    });
  }
  loadHierarchy() {
    this.accountService.getHierarchy().subscribe({
      next: (data) => {
        this.accountsHierarchy = data;
      },
      error: (error) => {
        console.error("Error loading hierarchy:", error);
      }
    });
  }
  createAccount() {
    if (!this.newAccount.code || !this.newAccount.name) {
      alert("Por favor complete todos los campos requeridos");
      return;
    }
    this.accountService.create(this.newAccount).subscribe({
      next: () => {
        alert("Cuenta creada exitosamente");
        this.showCreateForm = false;
        this.resetForm();
        this.loadAccounts();
        this.loadHierarchy();
      },
      error: (error) => {
        console.error("Error creating account:", error);
        alert(error.error?.message || "Error al crear la cuenta");
      }
    });
  }
  resetForm() {
    this.newAccount = {
      code: "",
      name: "",
      type: AccountType.ASSET,
      parentId: null,
      isControlAccount: false
    };
  }
  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.resetForm();
    }
  }
  deactivateAccount(account) {
    if (confirm(`\xBFEst\xE1 seguro de desactivar la cuenta "${account.code} - ${account.name}"?

Nota: No se puede desactivar una cuenta que:
- Tenga cuentas hijas activas
- Tenga movimientos en asientos posteados`)) {
      this.accountService.deactivate(account.id).subscribe({
        next: () => {
          alert("Cuenta desactivada exitosamente");
          this.loadAccounts();
          this.loadHierarchy();
        },
        error: (error) => {
          console.error("Error deactivating account:", error);
          alert(error.error?.message || "Error al desactivar la cuenta. Verifique que no tenga cuentas hijas activas ni movimientos.");
        }
      });
    }
  }
  activateAccount(account) {
    this.accountService.activate(account.id).subscribe({
      next: () => {
        alert("Cuenta activada exitosamente");
        this.loadAccounts();
        this.loadHierarchy();
      },
      error: (error) => {
        console.error("Error activating account:", error);
        alert(error.error?.message || "Error al activar la cuenta");
      }
    });
  }
  static \u0275fac = function AccountsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsComponent)(\u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsComponent, selectors: [["app-accounts"]], decls: 35, vars: 3, consts: [[1, "accounts-container"], [1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], ["class", "create-form card", 4, "ngIf"], [1, "accounts-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "hierarchy-view", "card"], [1, "hierarchy-tree"], ["class", "tree-item", 4, "ngFor", "ngForOf"], [1, "create-form", "card"], ["class", "info-box", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "code", "placeholder", "Ej: 1.1.01", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "name", "placeholder", "Nombre de la cuenta", "required", "", 3, "ngModelChange", "ngModel"], ["name", "type", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "isControlAccount", 3, "ngModelChange", "ngModel"], ["name", "parentId", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "description", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "info-box"], [1, "badge"], [1, "action-buttons"], ["class", "btn-icon btn-danger", "title", "Desactivar", 3, "click", 4, "ngIf"], ["class", "btn-icon btn-success", "title", "Activar", 3, "click", 4, "ngIf"], ["title", "Desactivar", 1, "btn-icon", "btn-danger", 3, "click"], ["title", "Activar", 1, "btn-icon", "btn-success", 3, "click"], [1, "tree-item"], [1, "tree-node"], [1, "tree-code"], [1, "tree-name"], ["class", "tree-badge", 4, "ngIf"], ["class", "tree-children", 4, "ngIf"], [1, "tree-badge"], [1, "tree-children"], ["class", "tree-item child", 4, "ngFor", "ngForOf"], [1, "tree-item", "child"]], template: function AccountsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Plan de Cuentas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function AccountsComponent_Template_button_click_4_listener() {
        return ctx.toggleCreateForm();
      });
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Nueva Cuenta ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, AccountsComponent_div_8_Template, 44, 10, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "Lista de Cuentas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "table")(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "C\xF3digo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, AccountsComponent_tr_29_Template, 17, 15, "tr", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 8)(31, "h2");
      \u0275\u0275text(32, "Vista Jer\xE1rquica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275template(34, AccountsComponent_div_34_Template, 8, 4, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.accounts);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.accountsHierarchy);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.accounts-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.info-box[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-left: 4px solid #f59e0b;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 20px;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #92400e;\n  font-size: 14px;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #64748b;\n  font-size: 12px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border-left: 3px solid #3b82f6;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 100px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-name[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  background: #dbeafe;\n  color: #1e40af;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item.child[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item.child[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%] {\n  border-left-color: #94a3b8;\n  background: #ffffff;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item.child[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-code[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon.btn-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-icon.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.btn-icon.btn-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-icon.btn-success[_ngcontent-%COMP%]:hover {\n  background: #a7f3d0;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=accounts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsComponent, [{
    type: Component,
    args: [{ selector: "app-accounts", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="accounts-container">
  <div class="page-header">
    <h1>Plan de Cuentas</h1>
    <button class="btn btn-primary" (click)="toggleCreateForm()">
      <span class="material-icons">add</span>
      Nueva Cuenta
    </button>
  </div>

  <div *ngIf="showCreateForm" class="create-form card">
    <h2>Crear Nueva Cuenta</h2>
    
    <div class="info-box" *ngIf="newAccount.parentId">
      <p><strong>\u26A0\uFE0F Importante:</strong></p>
      <p>Si seleccionas una cuenta padre, aseg\xFArate de que sea una <strong>Cuenta de Control</strong>.</p>
      <p>Las cuentas de movimiento no pueden tener cuentas hijas.</p>
    </div>

    <form (ngSubmit)="createAccount()">
      <div class="form-group">
        <label>C\xF3digo *</label>
        <input
          type="text"
          [(ngModel)]="newAccount.code"
          name="code"
          placeholder="Ej: 1.1.01"
          required
        />
        <small>Ejemplo: 1.1.01 (niveles separados por punto)</small>
      </div>

      <div class="form-group">
        <label>Nombre *</label>
        <input
          type="text"
          [(ngModel)]="newAccount.name"
          name="name"
          placeholder="Nombre de la cuenta"
          required
        />
      </div>

      <div class="form-group">
        <label>Tipo de Cuenta *</label>
        <select [(ngModel)]="newAccount.type" name="type" required>
          <option *ngFor="let type of accountTypes" [value]="type">
            {{ accountTypeLabels[type] }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>
          <input
            type="checkbox"
            [(ngModel)]="newAccount.isControlAccount"
            name="isControlAccount"
          />
          Cuenta de Control
        </label>
        <small>
          Las cuentas de control agrupan otras cuentas y NO se usan en asientos.
          Si vas a crear cuentas hijas, marca esta opci\xF3n.
        </small>
      </div>

      <div class="form-group">
        <label>Cuenta Padre (Opcional)</label>
        <select [(ngModel)]="newAccount.parentId" name="parentId">
          <option [value]="null">Ninguna (Cuenta Ra\xEDz)</option>
          <option *ngFor="let account of accounts" [value]="account.id">
            {{ account.code }} - {{ account.name }}
            {{ account.isControlAccount ? '(Control)' : '(Movimiento)' }}
          </option>
        </select>
        <small>
          Solo puedes seleccionar cuentas de Control como padre.
          Si seleccionas una cuenta de Movimiento, recibir\xE1s un error.
        </small>
      </div>

      <div class="form-group">
        <label>Descripci\xF3n</label>
        <textarea
          [(ngModel)]="newAccount.description"
          name="description"
          rows="3"
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-secondary" (click)="toggleCreateForm()">
          Cancelar
        </button>
        <button type="submit" class="btn btn-primary">Crear Cuenta</button>
      </div>
    </form>
  </div>

  <div class="accounts-list card">
    <h2>Lista de Cuentas</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>C\xF3digo</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Control</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let account of accounts">
            <td>{{ account.code }}</td>
            <td>{{ account.name }}</td>
            <td>{{ accountTypeLabels[account.type] }}</td>
            <td>
              <span
                class="badge"
                [class.badge-success]="account.isControlAccount"
                [class.badge-secondary]="!account.isControlAccount"
              >
                {{ account.isControlAccount ? 'S\xED' : 'No' }}
              </span>
            </td>
            <td>
              <span
                class="badge"
                [class.badge-success]="account.isActive"
                [class.badge-danger]="!account.isActive"
              >
                {{ account.isActive ? 'Activa' : 'Inactiva' }}
              </span>
            </td>
            <td>
              <div class="action-buttons">
                <button
                  *ngIf="account.isActive"
                  class="btn-icon btn-danger"
                  (click)="deactivateAccount(account)"
                  title="Desactivar"
                >
                  <span class="material-icons">block</span>
                </button>
                <button
                  *ngIf="!account.isActive"
                  class="btn-icon btn-success"
                  (click)="activateAccount(account)"
                  title="Activar"
                >
                  <span class="material-icons">check_circle</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="hierarchy-view card">
    <h2>Vista Jer\xE1rquica</h2>
    <div class="hierarchy-tree">
      <div *ngFor="let account of accountsHierarchy" class="tree-item">
        <div class="tree-node">
          <span class="tree-code">{{ account.code }}</span>
          <span class="tree-name">{{ account.name }}</span>
          <span class="tree-badge" *ngIf="account.isControlAccount">[Control]</span>
        </div>
        <div *ngIf="account.children && account.children.length > 0" class="tree-children">
          <div *ngFor="let child of account.children" class="tree-item child">
            <div class="tree-node">
              <span class="tree-code">{{ child.code }}</span>
              <span class="tree-name">{{ child.name }}</span>
              <span class="tree-badge" *ngIf="child.isControlAccount">[Control]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/accounts/accounts.component.scss */\n.accounts-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.create-form form {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.create-form form .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.create-form form .form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.create-form form .form-group input,\n.create-form form .form-group select,\n.create-form form .form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.create-form form .form-group input:focus,\n.create-form form .form-group select:focus,\n.create-form form .form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.create-form form .form-group textarea {\n  resize: vertical;\n}\n.create-form form .form-actions {\n  grid-column: 1/-1;\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.info-box {\n  background: #fef3c7;\n  border-left: 4px solid #f59e0b;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 20px;\n}\n.info-box p {\n  margin: 8px 0;\n  color: #92400e;\n  font-size: 14px;\n}\n.info-box p strong {\n  font-weight: 600;\n}\n.form-group small {\n  display: block;\n  margin-top: 4px;\n  color: #64748b;\n  font-size: 12px;\n}\n.hierarchy-tree .tree-item {\n  margin-bottom: 8px;\n}\n.hierarchy-tree .tree-item .tree-node {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border-left: 3px solid #3b82f6;\n}\n.hierarchy-tree .tree-item .tree-node .tree-code {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 100px;\n}\n.hierarchy-tree .tree-item .tree-node .tree-name {\n  color: #1e293b;\n}\n.hierarchy-tree .tree-item .tree-node .tree-badge {\n  font-size: 11px;\n  padding: 2px 8px;\n  background: #dbeafe;\n  color: #1e40af;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.hierarchy-tree .tree-item.child {\n  margin-left: 32px;\n}\n.hierarchy-tree .tree-item.child .tree-node {\n  border-left-color: #94a3b8;\n  background: #ffffff;\n}\n.hierarchy-tree .tree-item.child .tree-node .tree-code {\n  color: #64748b;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon.btn-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-icon.btn-danger:hover {\n  background: #fecaca;\n}\n.btn-icon.btn-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-icon.btn-success:hover {\n  background: #a7f3d0;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n/*# sourceMappingURL=accounts.component.css.map */\n"] }]
  }], () => [{ type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsComponent, { className: "AccountsComponent", filePath: "src/app/pages/accounts/accounts.component.ts", lineNumber: 14 });
})();
export {
  AccountsComponent
};
//# sourceMappingURL=chunk-SSUZVACC.js.map
