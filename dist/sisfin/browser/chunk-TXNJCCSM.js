import {
  BankingService
} from "./chunk-X5QM4QGZ.js";
import {
  FinancialDocumentService
} from "./chunk-573CHXSA.js";
import {
  AutomationService
} from "./chunk-3DP6VKHZ.js";
import {
  InventoryService
} from "./chunk-RXEC6QSF.js";
import {
  PayablesService
} from "./chunk-4EMRTJSM.js";
import {
  AccountService
} from "./chunk-OIQRSETW.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HXWGHL77.js";
import "./chunk-JY7PP6BA.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
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

// src/app/pages/register-purchase-expense/register-purchase-expense.component.ts
function RegisterPurchaseExpenseComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    \u0275\u0275property("value", opt_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r1.label, " ");
  }
}
function RegisterPurchaseExpenseComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.label, " ");
  }
}
function RegisterPurchaseExpenseComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Procesando XML...");
    \u0275\u0275elementEnd();
  }
}
function RegisterPurchaseExpenseComponent_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r3.identification, " - ", s_r3.name, " ");
  }
}
function RegisterPurchaseExpenseComponent_div_76_tr_27_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275property("value", p_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r8.code, " - ", p_r8.name, " ");
  }
}
function RegisterPurchaseExpenseComponent_div_76_tr_27_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r9.label, " ");
  }
}
function RegisterPurchaseExpenseComponent_div_76_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_2_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.quantity, $event) || (line_r6.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_2_listener() {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onServiceLineChange(line_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 55)(4, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_select_ngModelChange_4_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.productId, $event) || (line_r6.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_select_ngModelChange_4_listener() {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onProductSelected(line_r6));
    });
    \u0275\u0275elementStart(5, "option", 20);
    \u0275\u0275text(6, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RegisterPurchaseExpenseComponent_div_76_tr_27_option_7_Template, 2, 3, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_9_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.unit, $event) || (line_r6.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_11_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.unitPrice, $event) || (line_r6.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_11_listener() {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onServiceLineChange(line_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_select_ngModelChange_13_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.ivaRate, $event) || (line_r6.ivaRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_select_ngModelChange_13_listener() {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onServiceLineChange(line_r6));
    });
    \u0275\u0275template(14, RegisterPurchaseExpenseComponent_div_76_tr_27_option_14_Template, 2, 2, "option", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_16_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.retIr, $event) || (line_r6.retIr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_18_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.retIva, $event) || (line_r6.retIva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_20_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.discount, $event) || (line_r6.discount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_20_listener() {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onServiceLineChange(line_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_22_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.extraDiscount, $event) || (line_r6.extraDiscount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_input_ngModelChange_22_listener() {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onServiceLineChange(line_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 60);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "button", 61);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_76_tr_27_Template_button_click_27_listener() {
      const i_r10 = \u0275\u0275restoreView(_r5).index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeServiceLine(i_r10));
    });
    \u0275\u0275elementStart(28, "span", 3);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.quantity);
    \u0275\u0275property("name", "qty" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.productId);
    \u0275\u0275property("name", "prod" + i_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r6.products);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.unit);
    \u0275\u0275property("name", "unit" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.unitPrice);
    \u0275\u0275property("name", "price" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.ivaRate);
    \u0275\u0275property("name", "iva" + i_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r6.ivaOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.retIr);
    \u0275\u0275property("name", "retIr" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.retIva);
    \u0275\u0275property("name", "retIva" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.discount);
    \u0275\u0275property("name", "disc" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.extraDiscount);
    \u0275\u0275property("name", "extraDisc" + i_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 21, line_r6.subtotal, "1.2-2"));
  }
}
function RegisterPurchaseExpenseComponent_div_76_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "Sin detalles");
    \u0275\u0275elementEnd()();
  }
}
function RegisterPurchaseExpenseComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "table", 50)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Unidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Precio U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Ret. IR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Ret. IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Desc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "+ Desc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275template(27, RegisterPurchaseExpenseComponent_div_76_tr_27_Template, 30, 24, "tr", 51)(28, RegisterPurchaseExpenseComponent_div_76_tr_28_Template, 3, 0, "tr", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 53);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_76_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.addServiceLine());
    });
    \u0275\u0275text(30, " Agregar detalle ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(27);
    \u0275\u0275property("ngForOf", ctx_r6.serviceLines);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.serviceLines.length === 0);
  }
}
function RegisterPurchaseExpenseComponent_div_77_tr_15_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r14 = ctx.$implicit;
    \u0275\u0275property("value", a_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", a_r14.code, " - ", a_r14.name, " ");
  }
}
function RegisterPurchaseExpenseComponent_div_77_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_77_tr_15_Template_select_ngModelChange_2_listener($event) {
      const line_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.accountId, $event) || (line_r13.accountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_77_tr_15_Template_select_ngModelChange_2_listener() {
      const line_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onAccountSelected(line_r13));
    });
    \u0275\u0275elementStart(3, "option", 20);
    \u0275\u0275text(4, "Seleccionar cuenta...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RegisterPurchaseExpenseComponent_div_77_tr_15_option_5_Template, 2, 3, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_77_tr_15_Template_input_ngModelChange_7_listener($event) {
      const line_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.debit, $event) || (line_r13.debit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_77_tr_15_Template_input_ngModelChange_9_listener($event) {
      const line_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.credit, $event) || (line_r13.credit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_77_tr_15_Template_input_ngModelChange_11_listener($event) {
      const line_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.description, $event) || (line_r13.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "button", 64);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_77_tr_15_Template_button_click_13_listener() {
      const i_r15 = \u0275\u0275restoreView(_r12).index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeAccountLine(i_r15));
    });
    \u0275\u0275elementStart(14, "span", 3);
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r13 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r13.accountId);
    \u0275\u0275property("name", "acc" + i_r15);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r6.accounts);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r13.debit);
    \u0275\u0275property("name", "debit" + i_r15);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r13.credit);
    \u0275\u0275property("name", "credit" + i_r15);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r13.description);
    \u0275\u0275property("name", "accDesc" + i_r15);
  }
}
function RegisterPurchaseExpenseComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "table", 50)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "D\xE9bito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, RegisterPurchaseExpenseComponent_div_77_tr_15_Template, 16, 9, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 53);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_77_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.addAccountLine());
    });
    \u0275\u0275text(17, " Agregar cuenta ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r6.accountLines);
  }
}
function RegisterPurchaseExpenseComponent_div_78_tr_13_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cc_r19 = ctx.$implicit;
    \u0275\u0275property("value", cc_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cc_r19.code, " - ", cc_r19.name, " ");
  }
}
function RegisterPurchaseExpenseComponent_div_78_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_78_tr_13_Template_select_ngModelChange_2_listener($event) {
      const line_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(line_r18.costCenterId, $event) || (line_r18.costCenterId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_78_tr_13_Template_select_ngModelChange_2_listener() {
      const line_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onCostCenterSelected(line_r18));
    });
    \u0275\u0275elementStart(3, "option", 20);
    \u0275\u0275text(4, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RegisterPurchaseExpenseComponent_div_78_tr_13_option_5_Template, 2, 3, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_78_tr_13_Template_input_ngModelChange_7_listener($event) {
      const line_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(line_r18.amount, $event) || (line_r18.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_78_tr_13_Template_input_ngModelChange_9_listener($event) {
      const line_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(line_r18.percentage, $event) || (line_r18.percentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 64);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_78_tr_13_Template_button_click_11_listener() {
      const i_r20 = \u0275\u0275restoreView(_r17).index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeCostCenterLine(i_r20));
    });
    \u0275\u0275elementStart(12, "span", 3);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r18 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r18.costCenterId);
    \u0275\u0275property("name", "cc" + i_r20);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r6.costCenters);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r18.amount);
    \u0275\u0275property("name", "ccAmt" + i_r20);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r18.percentage);
    \u0275\u0275property("name", "ccPct" + i_r20);
  }
}
function RegisterPurchaseExpenseComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "table", 50)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Centro de Costo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, RegisterPurchaseExpenseComponent_div_78_tr_13_Template, 14, 7, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_78_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.addCostCenterLine());
    });
    \u0275\u0275text(15, " Agregar centro de costo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r6.costCenterLines);
  }
}
function RegisterPurchaseExpenseComponent_div_79_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_79_tr_15_Template_select_ngModelChange_2_listener($event) {
      const line_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(line_r23.retentionType, $event) || (line_r23.retentionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 66);
    \u0275\u0275text(4, "Ret. IR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 67);
    \u0275\u0275text(6, "Ret. IVA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_79_tr_15_Template_input_ngModelChange_8_listener($event) {
      const line_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(line_r23.percentage, $event) || (line_r23.percentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_79_tr_15_Template_input_ngModelChange_8_listener() {
      const line_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onRetentionChange(line_r23));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_79_tr_15_Template_input_ngModelChange_10_listener($event) {
      const line_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(line_r23.base, $event) || (line_r23.base = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_div_79_tr_15_Template_input_ngModelChange_10_listener() {
      const line_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onRetentionChange(line_r23));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 64);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_79_tr_15_Template_button_click_15_listener() {
      const i_r24 = \u0275\u0275restoreView(_r22).index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeRetentionLine(i_r24));
    });
    \u0275\u0275elementStart(16, "span", 3);
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r23.retentionType);
    \u0275\u0275property("name", "retType" + i_r24);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", line_r23.percentage);
    \u0275\u0275property("name", "retPct" + i_r24);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r23.base);
    \u0275\u0275property("name", "retBase" + i_r24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 7, line_r23.amount, "1.2-2"));
  }
}
function RegisterPurchaseExpenseComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "table", 50)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, RegisterPurchaseExpenseComponent_div_79_tr_15_Template, 18, 10, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 53);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_79_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.addRetentionLine());
    });
    \u0275\u0275text(17, " Agregar retenci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r6.retentionLines);
  }
}
function RegisterPurchaseExpenseComponent_div_80_tr_13_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r28 = ctx.$implicit;
    \u0275\u0275property("value", opt_r28.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r28.label, " ");
  }
}
function RegisterPurchaseExpenseComponent_div_80_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_80_tr_13_Template_select_ngModelChange_2_listener($event) {
      const line_r27 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(line_r27.paymentMethod, $event) || (line_r27.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, RegisterPurchaseExpenseComponent_div_80_tr_13_option_3_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_80_tr_13_Template_input_ngModelChange_5_listener($event) {
      const line_r27 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(line_r27.amount, $event) || (line_r27.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_div_80_tr_13_Template_input_ngModelChange_7_listener($event) {
      const line_r27 = \u0275\u0275restoreView(_r26).$implicit;
      \u0275\u0275twoWayBindingSet(line_r27.reference, $event) || (line_r27.reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "button", 64);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_80_tr_13_Template_button_click_9_listener() {
      const i_r29 = \u0275\u0275restoreView(_r26).index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removePaymentLine(i_r29));
    });
    \u0275\u0275elementStart(10, "span", 3);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r27 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r27.paymentMethod);
    \u0275\u0275property("name", "payMeth" + i_r29);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r6.paymentMethodOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r27.amount);
    \u0275\u0275property("name", "payAmt" + i_r29);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r27.reference);
    \u0275\u0275property("name", "payRef" + i_r29);
  }
}
function RegisterPurchaseExpenseComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "table", 50)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Forma de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, RegisterPurchaseExpenseComponent_div_80_tr_13_Template, 12, 7, "tr", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_div_80_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.addPaymentLine());
    });
    \u0275\u0275text(15, " Agregar forma de pago ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r6.paymentLines);
  }
}
function RegisterPurchaseExpenseComponent_select_98_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r31 = ctx.$implicit;
    \u0275\u0275property("value", c_r31.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r31.name, " ");
  }
}
function RegisterPurchaseExpenseComponent_select_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 68);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_select_98_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r6 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r6.pettyCashAccountId, $event) || (ctx_r6.pettyCashAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 20);
    \u0275\u0275text(2, "Seleccionar caja...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RegisterPurchaseExpenseComponent_select_98_option_3_Template, 2, 2, "option", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r6.pettyCashAccountId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r6.cashAccounts);
  }
}
var RegisterPurchaseExpenseComponent = class _RegisterPurchaseExpenseComponent {
  documentService;
  payablesService;
  accountService;
  inventoryService;
  automationService;
  bankingService;
  activeTab = "services";
  saving = false;
  parsingXml = false;
  issueDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  personType = "SUPPLIER";
  documentCategory = "INVOICE";
  documentNumber = "";
  authorization = "";
  personId = "";
  personName = "";
  personIdentification = "";
  reference = "";
  dueDays = 30;
  purchaseOrderRef = "";
  description = "";
  payWithPettyCash = false;
  pettyCashAccountId = "";
  ice = 0;
  serviceLines = [];
  accountLines = [];
  costCenterLines = [];
  retentionLines = [];
  paymentLines = [];
  suppliers = [];
  accounts = [];
  products = [];
  costCenters = [];
  cashAccounts = [];
  personTypeOptions = [
    { value: "SUPPLIER", label: "Proveedor" },
    { value: "CUSTOMER", label: "Cliente" }
  ];
  documentCategoryOptions = [
    { value: "INVOICE", label: "Factura" },
    { value: "CREDIT_NOTE", label: "Nota de cr\xE9dito" },
    { value: "DEBIT_NOTE", label: "Nota de d\xE9bito" },
    {
      value: "PURCHASE_LIQUIDATION",
      label: "Liquidaci\xF3n de compra"
    },
    { value: "RETENTION", label: "Retenci\xF3n" }
  ];
  ivaOptions = [
    { value: 15, label: "15%" },
    { value: 5, label: "5%" },
    { value: 0, label: "0%" }
  ];
  paymentMethodOptions = [
    { value: "CASH", label: "Efectivo" },
    { value: "TRANSFER", label: "Transferencia" },
    { value: "CHECK", label: "Cheque" },
    { value: "CARD", label: "Tarjeta" }
  ];
  totals = {
    subtotal15: 0,
    subtotal5: 0,
    subtotal0: 0,
    discount: 0,
    iva15: 0,
    iva5: 0,
    ice: 0,
    total: 0
  };
  constructor(documentService, payablesService, accountService, inventoryService, automationService, bankingService) {
    this.documentService = documentService;
    this.payablesService = payablesService;
    this.accountService = accountService;
    this.inventoryService = inventoryService;
    this.automationService = automationService;
    this.bankingService = bankingService;
  }
  ngOnInit() {
    this.loadLookups();
  }
  loadLookups() {
    this.payablesService.getSuppliers().subscribe({
      next: (data) => this.suppliers = data
    });
    this.accountService.getAll().subscribe({
      next: (data) => this.accounts = data
    });
    this.inventoryService.getProducts().subscribe({
      next: (data) => this.products = data
    });
    this.automationService.getCostCenters().subscribe({
      next: (data) => this.costCenters = data
    });
    this.bankingService.getCashAccounts().subscribe({
      next: (data) => this.cashAccounts = data
    });
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  onPersonSelected() {
    const supplier = this.suppliers.find((s) => s.id === this.personId);
    if (supplier) {
      this.personName = supplier.name;
      this.personIdentification = supplier.identification;
    }
  }
  onXmlSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.parsingXml = true;
    this.documentService.parseXml(file).subscribe({
      next: (parsed) => {
        this.issueDate = parsed.issueDate;
        this.documentNumber = parsed.documentNumber;
        this.authorization = parsed.authorization || "";
        this.personName = parsed.personName;
        this.personIdentification = parsed.personIdentification || "";
        this.documentCategory = "INVOICE";
        const matched = this.suppliers.find((s) => s.identification === parsed.personIdentification);
        if (matched) {
          this.personId = matched.id;
        }
        this.serviceLines = parsed.lines.filter((l) => l.lineType === "SERVICE").map((l) => {
          const d = l.data;
          return {
            quantity: Number(d["quantity"]) || 1,
            productId: "",
            productCode: String(d["productCode"] || ""),
            productName: String(d["productName"] || ""),
            unit: String(d["unit"] || "UND"),
            unitPrice: Number(d["unitPrice"]) || 0,
            ivaRate: Number(d["ivaRate"]) || 0,
            retIr: Number(d["retIr"]) || 0,
            retIva: Number(d["retIva"]) || 0,
            discount: Number(d["discount"]) || 0,
            extraDiscount: Number(d["extraDiscount"]) || 0,
            subtotal: Number(d["subtotal"]) || 0
          };
        });
        this.serviceLines.forEach((line) => this.recalcServiceLine(line));
        this.recalcTotals();
        this.parsingXml = false;
        input.value = "";
      },
      error: (err) => {
        alert(err.error?.message || "Error al cargar el XML");
        this.parsingXml = false;
        input.value = "";
      }
    });
  }
  addServiceLine() {
    const line = {
      quantity: 1,
      productId: "",
      productCode: "",
      productName: "",
      unit: "UND",
      unitPrice: 0,
      ivaRate: 15,
      retIr: 0,
      retIva: 0,
      discount: 0,
      extraDiscount: 0,
      subtotal: 0
    };
    this.serviceLines.push(line);
    this.recalcServiceLine(line);
    this.recalcTotals();
  }
  removeServiceLine(index) {
    this.serviceLines.splice(index, 1);
    this.recalcTotals();
  }
  onProductSelected(line) {
    const product = this.products.find((p) => p.id === line.productId);
    if (product) {
      line.productCode = product.code;
      line.productName = product.name;
      line.unit = product.unit || "UND";
      line.unitPrice = Number(product.averageCost);
      this.recalcServiceLine(line);
      this.recalcTotals();
    }
  }
  recalcServiceLine(line) {
    const base = line.quantity * line.unitPrice - line.discount - line.extraDiscount;
    line.subtotal = Math.round(base * 100) / 100;
  }
  onServiceLineChange(line) {
    this.recalcServiceLine(line);
    this.recalcTotals();
  }
  recalcTotals() {
    let subtotal15 = 0;
    let subtotal5 = 0;
    let subtotal0 = 0;
    let discount = 0;
    let iva15 = 0;
    let iva5 = 0;
    for (const line of this.serviceLines) {
      const lineDiscount = line.discount + line.extraDiscount;
      discount += lineDiscount;
      const base = line.quantity * line.unitPrice - lineDiscount;
      if (line.ivaRate === 15) {
        subtotal15 += base;
        iva15 += base * 0.15;
      } else if (line.ivaRate === 5) {
        subtotal5 += base;
        iva5 += base * 0.05;
      } else {
        subtotal0 += base;
      }
    }
    const total = subtotal15 + subtotal5 + subtotal0 + iva15 + iva5 + this.ice;
    this.totals = {
      subtotal15: this.round2(subtotal15),
      subtotal5: this.round2(subtotal5),
      subtotal0: this.round2(subtotal0),
      discount: this.round2(discount),
      iva15: this.round2(iva15),
      iva5: this.round2(iva5),
      ice: this.ice,
      total: this.round2(total)
    };
  }
  addAccountLine() {
    this.accountLines.push({
      accountId: "",
      accountCode: "",
      accountName: "",
      debit: 0,
      credit: 0,
      description: ""
    });
  }
  removeAccountLine(index) {
    this.accountLines.splice(index, 1);
  }
  onAccountSelected(line) {
    const account = this.accounts.find((a) => a.id === line.accountId);
    if (account) {
      line.accountCode = account.code;
      line.accountName = account.name;
    }
  }
  addCostCenterLine() {
    this.costCenterLines.push({
      costCenterId: "",
      costCenterName: "",
      amount: 0,
      percentage: 0
    });
  }
  removeCostCenterLine(index) {
    this.costCenterLines.splice(index, 1);
  }
  onCostCenterSelected(line) {
    const cc = this.costCenters.find((c) => c.id === line.costCenterId);
    if (cc) {
      line.costCenterName = cc.name;
    }
  }
  addRetentionLine() {
    this.retentionLines.push({
      retentionType: "IR",
      percentage: 0,
      base: 0,
      amount: 0
    });
  }
  removeRetentionLine(index) {
    this.retentionLines.splice(index, 1);
  }
  onRetentionChange(line) {
    line.amount = this.round2(line.base * line.percentage / 100);
  }
  addPaymentLine() {
    this.paymentLines.push({
      paymentMethod: "TRANSFER",
      amount: 0,
      reference: ""
    });
  }
  removePaymentLine(index) {
    this.paymentLines.splice(index, 1);
  }
  buildLines() {
    const lines = [];
    let order = 0;
    for (const line of this.serviceLines) {
      lines.push({
        lineType: "SERVICE",
        sortOrder: order++,
        data: __spreadValues({}, line)
      });
    }
    for (const line of this.accountLines) {
      lines.push({
        lineType: "ACCOUNT",
        sortOrder: order++,
        data: __spreadValues({}, line)
      });
    }
    for (const line of this.costCenterLines) {
      lines.push({
        lineType: "COST_CENTER",
        sortOrder: order++,
        data: __spreadValues({}, line)
      });
    }
    for (const line of this.retentionLines) {
      lines.push({
        lineType: "RETENTION",
        sortOrder: order++,
        data: __spreadValues({}, line)
      });
    }
    for (const line of this.paymentLines) {
      lines.push({
        lineType: "PAYMENT",
        sortOrder: order++,
        data: __spreadValues({}, line)
      });
    }
    return lines;
  }
  save() {
    if (!this.documentNumber.trim()) {
      alert("Ingrese el n\xFAmero de documento");
      return;
    }
    if (!this.personName.trim() && !this.personId) {
      alert("Seleccione o indique la persona del documento");
      return;
    }
    if (this.serviceLines.length === 0) {
      alert("Agregue al menos un detalle en la pesta\xF1a Servicios");
      return;
    }
    this.saving = true;
    this.documentService.create({
      issueDate: this.issueDate,
      personType: this.personType,
      documentCategory: this.documentCategory,
      entryType: "PURCHASE_EXPENSE",
      documentNumber: this.documentNumber.trim(),
      authorization: this.authorization || void 0,
      personId: this.personId || void 0,
      personName: this.personName || void 0,
      personIdentification: this.personIdentification || void 0,
      reference: this.reference || void 0,
      dueDays: this.dueDays,
      purchaseOrderRef: this.purchaseOrderRef || void 0,
      description: this.description || void 0,
      payWithPettyCash: this.payWithPettyCash,
      pettyCashAccountId: this.payWithPettyCash ? this.pettyCashAccountId || void 0 : void 0,
      ice: this.ice,
      lines: this.buildLines()
    }).subscribe({
      next: () => {
        alert("Compra o gasto registrado correctamente");
        this.resetForm();
        this.saving = false;
      },
      error: (err) => {
        alert(err.error?.message || "Error al guardar el documento");
        this.saving = false;
      }
    });
  }
  resetForm() {
    this.issueDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.personType = "SUPPLIER";
    this.documentCategory = "INVOICE";
    this.documentNumber = "";
    this.authorization = "";
    this.personId = "";
    this.personName = "";
    this.personIdentification = "";
    this.reference = "";
    this.dueDays = 30;
    this.purchaseOrderRef = "";
    this.description = "";
    this.payWithPettyCash = false;
    this.pettyCashAccountId = "";
    this.ice = 0;
    this.serviceLines = [];
    this.accountLines = [];
    this.costCenterLines = [];
    this.retentionLines = [];
    this.paymentLines = [];
    this.recalcTotals();
  }
  round2(value) {
    return Math.round(value * 100) / 100;
  }
  static \u0275fac = function RegisterPurchaseExpenseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterPurchaseExpenseComponent)(\u0275\u0275directiveInject(FinancialDocumentService), \u0275\u0275directiveInject(PayablesService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(InventoryService), \u0275\u0275directiveInject(AutomationService), \u0275\u0275directiveInject(BankingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPurchaseExpenseComponent, selectors: [["app-register-purchase-expense"]], decls: 148, vars: 64, consts: [[1, "register-purchase-expense-container"], [1, "page-header"], [1, "info-banner"], [1, "material-icons"], [1, "card", "document-info"], [1, "form-row"], [1, "form-group"], ["type", "date", "name", "issueDate", 3, "ngModelChange", "ngModel"], [1, "form-group", "doc-type-group"], [1, "doc-type-row"], ["name", "personType", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "documentCategory", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", "btn-sm", "xml-btn"], ["type", "file", "accept", ".xml,application/xml,text/xml", "hidden", "", 3, "change", "disabled"], ["class", "field-hint", 4, "ngIf"], ["type", "text", "name", "documentNumber", "placeholder", "001-001-000000001", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "authorization", "placeholder", "Clave de acceso", 3, "ngModelChange", "ngModel"], [1, "person-row"], ["name", "personId", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "text", "name", "personName", "placeholder", "Nombre", 1, "person-name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "reference", 3, "ngModelChange", "ngModel"], [1, "form-group", "due-days"], [1, "due-row"], ["type", "number", "name", "dueDays", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "purchaseOrderRef", "placeholder", "Buscar orden...", 3, "ngModelChange", "ngModel"], [1, "card", "detail-section"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], ["class", "tab-panel", 4, "ngIf"], [1, "footer-section"], [1, "footer-left", "card"], ["name", "description", "rows", "4", "placeholder", "Notas del documento...", 3, "ngModelChange", "ngModel"], [1, "attachments"], ["type", "button", "disabled", "", 1, "btn", "btn-secondary"], [1, "attach-hint"], [1, "petty-cash"], [1, "checkbox-label"], ["type", "checkbox", "name", "pettyCash", 3, "ngModelChange", "ngModel"], ["name", "pettyCashAccountId", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "totals-panel", "card"], [1, "total-row"], ["type", "number", "name", "ice", "step", "0.01", "min", "0", 1, "ice-input", 3, "ngModelChange", "ngModel"], [1, "total-row", "total-final"], ["type", "button", 1, "btn", "btn-primary", "btn-save", 3, "click", "disabled"], [3, "value"], [1, "field-hint"], [1, "tab-panel"], [1, "table-container"], [1, "detail-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "number", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel", "name"], [1, "col-product"], [3, "ngModelChange", "ngModel", "name"], ["type", "text", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "step", "0.01", "min", "0", 3, "ngModelChange", "ngModel", "name"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "subtotal-cell"], ["type", "button", "title", "Eliminar", 1, "btn-icon", "btn-danger", 3, "click"], [3, "ngValue"], ["colspan", "11", 1, "empty-row"], ["type", "button", 1, "btn-icon", "btn-danger", 3, "click"], ["type", "number", "step", "0.01", "min", "0", "max", "100", 3, "ngModelChange", "ngModel", "name"], ["value", "IR"], ["value", "IVA"], ["name", "pettyCashAccountId", 3, "ngModelChange", "ngModel"]], template: function RegisterPurchaseExpenseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Registrar Compras o Gastos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "span", 3);
      \u0275\u0275text(6, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, " Importante: De acuerdo con la normativa del SRI, los documentos electr\xF3nicos deben ser autorizados en el momento de su emisi\xF3n. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 4)(10, "h2");
      \u0275\u0275text(11, "Informaci\xF3n del Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "label");
      \u0275\u0275text(15, "Fecha de Emisi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.issueDate, $event) || (ctx.issueDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "label");
      \u0275\u0275text(19, "Tipo de Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personType, $event) || (ctx.personType = $event);
        return $event;
      });
      \u0275\u0275template(22, RegisterPurchaseExpenseComponent_option_22_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.documentCategory, $event) || (ctx.documentCategory = $event);
        return $event;
      });
      \u0275\u0275template(24, RegisterPurchaseExpenseComponent_option_24_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "label", 13)(26, "span", 3);
      \u0275\u0275text(27, "upload_file");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Cargar XML ");
      \u0275\u0275elementStart(29, "input", 14);
      \u0275\u0275listener("change", function RegisterPurchaseExpenseComponent_Template_input_change_29_listener($event) {
        return ctx.onXmlSelected($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, RegisterPurchaseExpenseComponent_span_30_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 6)(32, "label");
      \u0275\u0275text(33, "# de Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.documentNumber, $event) || (ctx.documentNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 6)(36, "label");
      \u0275\u0275text(37, "Autorizaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.authorization, $event) || (ctx.authorization = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 5)(40, "div", 6)(41, "label");
      \u0275\u0275text(42, "Persona");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 18)(44, "select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_select_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personId, $event) || (ctx.personId = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_select_ngModelChange_44_listener() {
        return ctx.onPersonSelected();
      });
      \u0275\u0275elementStart(45, "option", 20);
      \u0275\u0275text(46, "Buscar persona...");
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, RegisterPurchaseExpenseComponent_option_47_Template, 2, 3, "option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personName, $event) || (ctx.personName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 6)(50, "label");
      \u0275\u0275text(51, "Referencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reference, $event) || (ctx.reference = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 23)(54, "label");
      \u0275\u0275text(55, "Vencimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 24)(57, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dueDays, $event) || (ctx.dueDays = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "d\xEDas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 6)(61, "label");
      \u0275\u0275text(62, "Orden Compra/Venta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.purchaseOrderRef, $event) || (ctx.purchaseOrderRef = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "section", 27)(65, "div", 28)(66, "button", 29);
      \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_Template_button_click_66_listener() {
        return ctx.setTab("services");
      });
      \u0275\u0275text(67, " Servicios ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 29);
      \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_Template_button_click_68_listener() {
        return ctx.setTab("accounts");
      });
      \u0275\u0275text(69, " Cuentas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 29);
      \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_Template_button_click_70_listener() {
        return ctx.setTab("costCenter");
      });
      \u0275\u0275text(71, " Centro de Costo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 29);
      \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_Template_button_click_72_listener() {
        return ctx.setTab("retention");
      });
      \u0275\u0275text(73, " Retenci\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 29);
      \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_Template_button_click_74_listener() {
        return ctx.setTab("payment");
      });
      \u0275\u0275text(75, " Formas de Pago ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(76, RegisterPurchaseExpenseComponent_div_76_Template, 31, 2, "div", 30)(77, RegisterPurchaseExpenseComponent_div_77_Template, 18, 1, "div", 30)(78, RegisterPurchaseExpenseComponent_div_78_Template, 16, 1, "div", 30)(79, RegisterPurchaseExpenseComponent_div_79_Template, 18, 1, "div", 30)(80, RegisterPurchaseExpenseComponent_div_80_Template, 16, 1, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "section", 31)(82, "div", 32)(83, "div", 6)(84, "label");
      \u0275\u0275text(85, "Descripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "textarea", 33);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_textarea_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 34)(88, "label");
      \u0275\u0275text(89, "Adjuntos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "button", 35);
      \u0275\u0275text(91, " Administrar Adjuntos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 36);
      \u0275\u0275text(93, "Formatos: jpeg, jpg o pdf");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 37)(95, "label", 38)(96, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.payWithPettyCash, $event) || (ctx.payWithPettyCash = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, " Pagar con Caja Chica ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(98, RegisterPurchaseExpenseComponent_select_98_Template, 4, 2, "select", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 41)(100, "div", 42)(101, "span");
      \u0275\u0275text(102, "Subtotal 15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span");
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 42)(107, "span");
      \u0275\u0275text(108, "Subtotal 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 42)(113, "span");
      \u0275\u0275text(114, "Subtotal 0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 42)(119, "span");
      \u0275\u0275text(120, "Descuento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 42)(125, "span");
      \u0275\u0275text(126, "IVA 15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 42)(131, "span");
      \u0275\u0275text(132, "IVA 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134);
      \u0275\u0275pipe(135, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 42)(137, "span");
      \u0275\u0275text(138, "ICE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_139_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.ice, $event) || (ctx.ice = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RegisterPurchaseExpenseComponent_Template_input_ngModelChange_139_listener() {
        return ctx.recalcTotals();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 44)(141, "span");
      \u0275\u0275text(142, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "button", 45);
      \u0275\u0275listener("click", function RegisterPurchaseExpenseComponent_Template_button_click_146_listener() {
        return ctx.save();
      });
      \u0275\u0275text(147);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.issueDate);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.personType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.personTypeOptions);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.documentCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.documentCategoryOptions);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.parsingXml);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.parsingXml);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.documentNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.authorization);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.personId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.suppliers);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.personName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.reference);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.dueDays);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.purchaseOrderRef);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "services");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "accounts");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "costCenter");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "retention");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "payment");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "services");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "accounts");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "costCenter");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "retention");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "payment");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.payWithPettyCash);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.payWithPettyCash);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 43, ctx.totals.subtotal15, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 46, ctx.totals.subtotal5, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 49, ctx.totals.subtotal0, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 52, ctx.totals.discount, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(129, 55, ctx.totals.iva15, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 58, ctx.totals.iva5, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.ice);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(145, 61, ctx.totals.total, "1.2-2"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Guardando..." : "Guardar", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.register-purchase-expense-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.document-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: #334155;\n}\n.doc-type-group[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.doc-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.doc-type-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n}\n.xml-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  margin: 0;\n  white-space: nowrap;\n}\n.xml-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.person-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.person-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.person-row[_ngcontent-%COMP%]   .person-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.due-days[_ngcontent-%COMP%]   .due-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.due-days[_ngcontent-%COMP%]   .due-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.due-days[_ngcontent-%COMP%]   .due-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #e2e8f0;\n  margin: 0 -24px 20px;\n  padding: 0 24px;\n  gap: 4px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}\n.detail-table[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.detail-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.detail-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 60px;\n  padding: 6px 8px;\n  font-size: 13px;\n}\n.detail-table[_ngcontent-%COMP%]   .col-product[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.detail-table[_ngcontent-%COMP%]   .subtotal-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: right;\n  white-space: nowrap;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.footer-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .footer-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer-left[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.attachments[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.attachments[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.attachments[_ngcontent-%COMP%]   .attach-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.petty-cash[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.petty-cash[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #475569;\n  cursor: pointer;\n}\n.petty-cash[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\n.totals-panel[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #475569;\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  color: #1e293b;\n}\n.ice-input[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n  padding: 4px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n}\n.total-final[_ngcontent-%COMP%] {\n  border-bottom: none;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 2px solid #e2e8f0;\n}\n.total-final[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #3b82f6;\n}\n.btn-save[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=register-purchase-expense.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPurchaseExpenseComponent, [{
    type: Component,
    args: [{ selector: "app-register-purchase-expense", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="register-purchase-expense-container">\r
  <div class="page-header">\r
    <h1>Registrar Compras o Gastos</h1>\r
  </div>\r
\r
  <div class="info-banner">\r
    <span class="material-icons">info</span>\r
    <span>\r
      Importante: De acuerdo con la normativa del SRI, los documentos electr\xF3nicos\r
      deben ser autorizados en el momento de su emisi\xF3n.\r
    </span>\r
  </div>\r
\r
  <section class="card document-info">\r
    <h2>Informaci\xF3n del Documento</h2>\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label>Fecha de Emisi\xF3n</label>\r
        <input type="date" [(ngModel)]="issueDate" name="issueDate" />\r
      </div>\r
      <div class="form-group doc-type-group">\r
        <label>Tipo de Documento</label>\r
        <div class="doc-type-row">\r
          <select [(ngModel)]="personType" name="personType">\r
            <option *ngFor="let opt of personTypeOptions" [value]="opt.value">\r
              {{ opt.label }}\r
            </option>\r
          </select>\r
          <select [(ngModel)]="documentCategory" name="documentCategory">\r
            <option\r
              *ngFor="let opt of documentCategoryOptions"\r
              [value]="opt.value"\r
            >\r
              {{ opt.label }}\r
            </option>\r
          </select>\r
          <label class="btn btn-secondary btn-sm xml-btn">\r
            <span class="material-icons">upload_file</span>\r
            Cargar XML\r
            <input\r
              type="file"\r
              accept=".xml,application/xml,text/xml"\r
              hidden\r
              (change)="onXmlSelected($event)"\r
              [disabled]="parsingXml"\r
            />\r
          </label>\r
        </div>\r
        <span class="field-hint" *ngIf="parsingXml">Procesando XML...</span>\r
      </div>\r
      <div class="form-group">\r
        <label># de Documento</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="documentNumber"\r
          name="documentNumber"\r
          placeholder="001-001-000000001"\r
        />\r
      </div>\r
      <div class="form-group">\r
        <label>Autorizaci\xF3n</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="authorization"\r
          name="authorization"\r
          placeholder="Clave de acceso"\r
        />\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label>Persona</label>\r
        <div class="person-row">\r
          <select\r
            [(ngModel)]="personId"\r
            name="personId"\r
            (ngModelChange)="onPersonSelected()"\r
          >\r
            <option value="">Buscar persona...</option>\r
            <option *ngFor="let s of suppliers" [value]="s.id">\r
              {{ s.identification }} - {{ s.name }}\r
            </option>\r
          </select>\r
          <input\r
            type="text"\r
            [(ngModel)]="personName"\r
            name="personName"\r
            placeholder="Nombre"\r
            class="person-name"\r
          />\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>Referencia</label>\r
        <input type="text" [(ngModel)]="reference" name="reference" />\r
      </div>\r
      <div class="form-group due-days">\r
        <label>Vencimiento</label>\r
        <div class="due-row">\r
          <input\r
            type="number"\r
            [(ngModel)]="dueDays"\r
            name="dueDays"\r
            min="0"\r
          />\r
          <span>d\xEDas</span>\r
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label>Orden Compra/Venta</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="purchaseOrderRef"\r
          name="purchaseOrderRef"\r
          placeholder="Buscar orden..."\r
        />\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="card detail-section">\r
    <div class="tabs">\r
      <button\r
        type="button"\r
        class="tab"\r
        [class.active]="activeTab === 'services'"\r
        (click)="setTab('services')"\r
      >\r
        Servicios\r
      </button>\r
      <button\r
        type="button"\r
        class="tab"\r
        [class.active]="activeTab === 'accounts'"\r
        (click)="setTab('accounts')"\r
      >\r
        Cuentas\r
      </button>\r
      <button\r
        type="button"\r
        class="tab"\r
        [class.active]="activeTab === 'costCenter'"\r
        (click)="setTab('costCenter')"\r
      >\r
        Centro de Costo\r
      </button>\r
      <button\r
        type="button"\r
        class="tab"\r
        [class.active]="activeTab === 'retention'"\r
        (click)="setTab('retention')"\r
      >\r
        Retenci\xF3n\r
      </button>\r
      <button\r
        type="button"\r
        class="tab"\r
        [class.active]="activeTab === 'payment'"\r
        (click)="setTab('payment')"\r
      >\r
        Formas de Pago\r
      </button>\r
    </div>\r
\r
    <div class="tab-panel" *ngIf="activeTab === 'services'">\r
      <div class="table-container">\r
        <table class="detail-table">\r
          <thead>\r
            <tr>\r
              <th>Cant.</th>\r
              <th>Producto</th>\r
              <th>Unidad</th>\r
              <th>Precio U.</th>\r
              <th>IVA</th>\r
              <th>Ret. IR</th>\r
              <th>Ret. IVA</th>\r
              <th>Desc.</th>\r
              <th>+ Desc.</th>\r
              <th>Subtotal</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let line of serviceLines; let i = index">\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.quantity"\r
                  [name]="'qty' + i"\r
                  min="0"\r
                  step="0.01"\r
                  (ngModelChange)="onServiceLineChange(line)"\r
                />\r
              </td>\r
              <td class="col-product">\r
                <select\r
                  [(ngModel)]="line.productId"\r
                  [name]="'prod' + i"\r
                  (ngModelChange)="onProductSelected(line)"\r
                >\r
                  <option value="">Seleccionar...</option>\r
                  <option *ngFor="let p of products" [value]="p.id">\r
                    {{ p.code }} - {{ p.name }}\r
                  </option>\r
                </select>\r
              </td>\r
              <td>\r
                <input\r
                  type="text"\r
                  [(ngModel)]="line.unit"\r
                  [name]="'unit' + i"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.unitPrice"\r
                  [name]="'price' + i"\r
                  step="0.01"\r
                  min="0"\r
                  (ngModelChange)="onServiceLineChange(line)"\r
                />\r
              </td>\r
              <td>\r
                <select\r
                  [(ngModel)]="line.ivaRate"\r
                  [name]="'iva' + i"\r
                  (ngModelChange)="onServiceLineChange(line)"\r
                >\r
                  <option *ngFor="let opt of ivaOptions" [ngValue]="opt.value">\r
                    {{ opt.label }}\r
                  </option>\r
                </select>\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.retIr"\r
                  [name]="'retIr' + i"\r
                  step="0.01"\r
                  min="0"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.retIva"\r
                  [name]="'retIva' + i"\r
                  step="0.01"\r
                  min="0"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.discount"\r
                  [name]="'disc' + i"\r
                  step="0.01"\r
                  min="0"\r
                  (ngModelChange)="onServiceLineChange(line)"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.extraDiscount"\r
                  [name]="'extraDisc' + i"\r
                  step="0.01"\r
                  min="0"\r
                  (ngModelChange)="onServiceLineChange(line)"\r
                />\r
              </td>\r
              <td class="subtotal-cell">{{ line.subtotal | number: '1.2-2' }}</td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-danger"\r
                  (click)="removeServiceLine(i)"\r
                  title="Eliminar"\r
                >\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
            <tr *ngIf="serviceLines.length === 0">\r
              <td colspan="11" class="empty-row">Sin detalles</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <button type="button" class="btn btn-primary btn-sm" (click)="addServiceLine()">\r
        Agregar detalle\r
      </button>\r
    </div>\r
\r
    <div class="tab-panel" *ngIf="activeTab === 'accounts'">\r
      <div class="table-container">\r
        <table class="detail-table">\r
          <thead>\r
            <tr>\r
              <th>Cuenta</th>\r
              <th>D\xE9bito</th>\r
              <th>Cr\xE9dito</th>\r
              <th>Descripci\xF3n</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let line of accountLines; let i = index">\r
              <td>\r
                <select\r
                  [(ngModel)]="line.accountId"\r
                  [name]="'acc' + i"\r
                  (ngModelChange)="onAccountSelected(line)"\r
                >\r
                  <option value="">Seleccionar cuenta...</option>\r
                  <option *ngFor="let a of accounts" [value]="a.id">\r
                    {{ a.code }} - {{ a.name }}\r
                  </option>\r
                </select>\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.debit"\r
                  [name]="'debit' + i"\r
                  step="0.01"\r
                  min="0"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.credit"\r
                  [name]="'credit' + i"\r
                  step="0.01"\r
                  min="0"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="text"\r
                  [(ngModel)]="line.description"\r
                  [name]="'accDesc' + i"\r
                />\r
              </td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-danger"\r
                  (click)="removeAccountLine(i)"\r
                >\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <button type="button" class="btn btn-primary btn-sm" (click)="addAccountLine()">\r
        Agregar cuenta\r
      </button>\r
    </div>\r
\r
    <div class="tab-panel" *ngIf="activeTab === 'costCenter'">\r
      <div class="table-container">\r
        <table class="detail-table">\r
          <thead>\r
            <tr>\r
              <th>Centro de Costo</th>\r
              <th>Monto</th>\r
              <th>%</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let line of costCenterLines; let i = index">\r
              <td>\r
                <select\r
                  [(ngModel)]="line.costCenterId"\r
                  [name]="'cc' + i"\r
                  (ngModelChange)="onCostCenterSelected(line)"\r
                >\r
                  <option value="">Seleccionar...</option>\r
                  <option *ngFor="let cc of costCenters" [value]="cc.id">\r
                    {{ cc.code }} - {{ cc.name }}\r
                  </option>\r
                </select>\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.amount"\r
                  [name]="'ccAmt' + i"\r
                  step="0.01"\r
                  min="0"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.percentage"\r
                  [name]="'ccPct' + i"\r
                  step="0.01"\r
                  min="0"\r
                  max="100"\r
                />\r
              </td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-danger"\r
                  (click)="removeCostCenterLine(i)"\r
                >\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <button\r
        type="button"\r
        class="btn btn-primary btn-sm"\r
        (click)="addCostCenterLine()"\r
      >\r
        Agregar centro de costo\r
      </button>\r
    </div>\r
\r
    <div class="tab-panel" *ngIf="activeTab === 'retention'">\r
      <div class="table-container">\r
        <table class="detail-table">\r
          <thead>\r
            <tr>\r
              <th>Tipo</th>\r
              <th>%</th>\r
              <th>Base</th>\r
              <th>Valor</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let line of retentionLines; let i = index">\r
              <td>\r
                <select [(ngModel)]="line.retentionType" [name]="'retType' + i">\r
                  <option value="IR">Ret. IR</option>\r
                  <option value="IVA">Ret. IVA</option>\r
                </select>\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.percentage"\r
                  [name]="'retPct' + i"\r
                  step="0.01"\r
                  min="0"\r
                  (ngModelChange)="onRetentionChange(line)"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.base"\r
                  [name]="'retBase' + i"\r
                  step="0.01"\r
                  min="0"\r
                  (ngModelChange)="onRetentionChange(line)"\r
                />\r
              </td>\r
              <td>{{ line.amount | number: '1.2-2' }}</td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-danger"\r
                  (click)="removeRetentionLine(i)"\r
                >\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <button\r
        type="button"\r
        class="btn btn-primary btn-sm"\r
        (click)="addRetentionLine()"\r
      >\r
        Agregar retenci\xF3n\r
      </button>\r
    </div>\r
\r
    <div class="tab-panel" *ngIf="activeTab === 'payment'">\r
      <div class="table-container">\r
        <table class="detail-table">\r
          <thead>\r
            <tr>\r
              <th>Forma de pago</th>\r
              <th>Monto</th>\r
              <th>Referencia</th>\r
              <th></th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let line of paymentLines; let i = index">\r
              <td>\r
                <select [(ngModel)]="line.paymentMethod" [name]="'payMeth' + i">\r
                  <option\r
                    *ngFor="let opt of paymentMethodOptions"\r
                    [value]="opt.value"\r
                  >\r
                    {{ opt.label }}\r
                  </option>\r
                </select>\r
              </td>\r
              <td>\r
                <input\r
                  type="number"\r
                  [(ngModel)]="line.amount"\r
                  [name]="'payAmt' + i"\r
                  step="0.01"\r
                  min="0"\r
                />\r
              </td>\r
              <td>\r
                <input\r
                  type="text"\r
                  [(ngModel)]="line.reference"\r
                  [name]="'payRef' + i"\r
                />\r
              </td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-danger"\r
                  (click)="removePaymentLine(i)"\r
                >\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <button type="button" class="btn btn-primary btn-sm" (click)="addPaymentLine()">\r
        Agregar forma de pago\r
      </button>\r
    </div>\r
  </section>\r
\r
  <section class="footer-section">\r
    <div class="footer-left card">\r
      <div class="form-group">\r
        <label>Descripci\xF3n</label>\r
        <textarea\r
          [(ngModel)]="description"\r
          name="description"\r
          rows="4"\r
          placeholder="Notas del documento..."\r
        ></textarea>\r
      </div>\r
      <div class="attachments">\r
        <label>Adjuntos</label>\r
        <button type="button" class="btn btn-secondary" disabled>\r
          Administrar Adjuntos\r
        </button>\r
        <span class="attach-hint">Formatos: jpeg, jpg o pdf</span>\r
      </div>\r
      <div class="petty-cash">\r
        <label class="checkbox-label">\r
          <input type="checkbox" [(ngModel)]="payWithPettyCash" name="pettyCash" />\r
          Pagar con Caja Chica\r
        </label>\r
        <select\r
          *ngIf="payWithPettyCash"\r
          [(ngModel)]="pettyCashAccountId"\r
          name="pettyCashAccountId"\r
        >\r
          <option value="">Seleccionar caja...</option>\r
          <option *ngFor="let c of cashAccounts" [value]="c.id">\r
            {{ c.name }}\r
          </option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <div class="totals-panel card">\r
      <div class="total-row">\r
        <span>Subtotal 15%</span>\r
        <span>{{ totals.subtotal15 | number: '1.2-2' }}</span>\r
      </div>\r
      <div class="total-row">\r
        <span>Subtotal 5%</span>\r
        <span>{{ totals.subtotal5 | number: '1.2-2' }}</span>\r
      </div>\r
      <div class="total-row">\r
        <span>Subtotal 0%</span>\r
        <span>{{ totals.subtotal0 | number: '1.2-2' }}</span>\r
      </div>\r
      <div class="total-row">\r
        <span>Descuento</span>\r
        <span>{{ totals.discount | number: '1.2-2' }}</span>\r
      </div>\r
      <div class="total-row">\r
        <span>IVA 15%</span>\r
        <span>{{ totals.iva15 | number: '1.2-2' }}</span>\r
      </div>\r
      <div class="total-row">\r
        <span>IVA 5%</span>\r
        <span>{{ totals.iva5 | number: '1.2-2' }}</span>\r
      </div>\r
      <div class="total-row">\r
        <span>ICE</span>\r
        <input\r
          type="number"\r
          [(ngModel)]="ice"\r
          name="ice"\r
          step="0.01"\r
          min="0"\r
          (ngModelChange)="recalcTotals()"\r
          class="ice-input"\r
        />\r
      </div>\r
      <div class="total-row total-final">\r
        <span>Total</span>\r
        <span>{{ totals.total | number: '1.2-2' }}</span>\r
      </div>\r
      <button\r
        type="button"\r
        class="btn btn-primary btn-save"\r
        (click)="save()"\r
        [disabled]="saving"\r
      >\r
        {{ saving ? 'Guardando...' : 'Guardar' }}\r
      </button>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/pages/register-purchase-expense/register-purchase-expense.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.register-purchase-expense-container {\n  max-width: 1400px;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner .material-icons {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.document-info h2 {\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: #334155;\n}\n.doc-type-group {\n  grid-column: span 2;\n}\n.doc-type-row {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.doc-type-row select {\n  flex: 1;\n  min-width: 120px;\n}\n.xml-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  margin: 0;\n  white-space: nowrap;\n}\n.xml-btn .material-icons {\n  font-size: 18px;\n}\n.field-hint {\n  font-size: 12px;\n  color: #64748b;\n}\n.person-row {\n  display: flex;\n  gap: 8px;\n}\n.person-row select {\n  flex: 1;\n}\n.person-row .person-name {\n  flex: 1;\n}\n.due-days .due-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.due-days .due-row input {\n  width: 80px;\n}\n.due-days .due-row span {\n  color: #64748b;\n  font-size: 14px;\n}\n.detail-section {\n  padding-top: 0;\n}\n.tabs {\n  display: flex;\n  border-bottom: 2px solid #e2e8f0;\n  margin: 0 -24px 20px;\n  padding: 0 24px;\n  gap: 4px;\n}\n.tab {\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s;\n}\n.tab:hover {\n  color: #3b82f6;\n}\n.tab.active {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}\n.detail-table {\n  font-size: 13px;\n}\n.detail-table input,\n.detail-table select {\n  width: 100%;\n  min-width: 60px;\n  padding: 6px 8px;\n  font-size: 13px;\n}\n.detail-table .col-product select {\n  min-width: 180px;\n}\n.detail-table .subtotal-cell {\n  font-weight: 600;\n  text-align: right;\n  white-space: nowrap;\n}\n.empty-row {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.btn-sm {\n  margin-top: 12px;\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.footer-section {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .footer-section {\n    grid-template-columns: 1fr;\n  }\n}\n.footer-left textarea {\n  width: 100%;\n  resize: vertical;\n}\n.attachments {\n  margin-top: 16px;\n}\n.attachments label {\n  display: block;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.attachments .attach-hint {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.petty-cash {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.petty-cash .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #475569;\n  cursor: pointer;\n}\n.petty-cash select {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\n.totals-panel {\n  padding: 20px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #475569;\n}\n.total-row span:last-child {\n  font-weight: 500;\n  color: #1e293b;\n}\n.ice-input {\n  width: 90px;\n  text-align: right;\n  padding: 4px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n}\n.total-final {\n  border-bottom: none;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 2px solid #e2e8f0;\n}\n.total-final span:last-child {\n  color: #3b82f6;\n}\n.btn-save {\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=register-purchase-expense.component.css.map */\n"] }]
  }], () => [{ type: FinancialDocumentService }, { type: PayablesService }, { type: AccountService }, { type: InventoryService }, { type: AutomationService }, { type: BankingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPurchaseExpenseComponent, { className: "RegisterPurchaseExpenseComponent", filePath: "src/app/pages/register-purchase-expense/register-purchase-expense.component.ts", lineNumber: 35 });
})();
export {
  RegisterPurchaseExpenseComponent
};
//# sourceMappingURL=chunk-TXNJCCSM.js.map
