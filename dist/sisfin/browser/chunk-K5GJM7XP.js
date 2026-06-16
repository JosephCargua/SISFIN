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
  ReceivablesService
} from "./chunk-TOXVX26F.js";
import {
  PayablesService
} from "./chunk-4EMRTJSM.js";
import {
  AccountService
} from "./chunk-OIQRSETW.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EFJID6OG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
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

// src/app/pages/register-document/register-document.component.ts
function RegisterDocumentComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
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
function RegisterDocumentComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
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
function RegisterDocumentComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("value", p_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r3.identification, " - ", p_r3.name, " ");
  }
}
function RegisterDocumentComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4.label, " ");
  }
}
function RegisterDocumentComponent_div_75_tr_25_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275property("value", p_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r9.code, " - ", p_r9.name, " ");
  }
}
function RegisterDocumentComponent_div_75_tr_25_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r10.label, " ");
  }
}
function RegisterDocumentComponent_div_75_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_2_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.quantity, $event) || (line_r7.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_2_listener() {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onServiceLineChange(line_r7));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 44)(4, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_select_ngModelChange_4_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.productId, $event) || (line_r7.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_select_ngModelChange_4_listener() {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onProductSelected(line_r7));
    });
    \u0275\u0275elementStart(5, "option", 17);
    \u0275\u0275text(6, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, RegisterDocumentComponent_div_75_tr_25_option_7_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_9_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.unit, $event) || (line_r7.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_11_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.unitPrice, $event) || (line_r7.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_11_listener() {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onServiceLineChange(line_r7));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_select_ngModelChange_13_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.ivaRate, $event) || (line_r7.ivaRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_select_ngModelChange_13_listener() {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onServiceLineChange(line_r7));
    });
    \u0275\u0275template(14, RegisterDocumentComponent_div_75_tr_25_option_14_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_16_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.retIr, $event) || (line_r7.retIr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_18_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.retIva, $event) || (line_r7.retIva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_20_listener($event) {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.discount, $event) || (line_r7.discount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_75_tr_25_Template_input_ngModelChange_20_listener() {
      const line_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onServiceLineChange(line_r7));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 49);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "button", 50);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_75_tr_25_Template_button_click_25_listener() {
      const i_r11 = \u0275\u0275restoreView(_r6).index;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.removeServiceLine(i_r11));
    });
    \u0275\u0275elementStart(26, "span", 4);
    \u0275\u0275text(27, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r7 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.quantity);
    \u0275\u0275property("name", "qty" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.productId);
    \u0275\u0275property("name", "prod" + i_r11);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r7.products);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.unit);
    \u0275\u0275property("name", "unit" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.unitPrice);
    \u0275\u0275property("name", "price" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.ivaRate);
    \u0275\u0275property("name", "iva" + i_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.ivaOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.retIr);
    \u0275\u0275property("name", "retIr" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.retIva);
    \u0275\u0275property("name", "retIva" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.discount);
    \u0275\u0275property("name", "disc" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 19, line_r7.subtotal, "1.2-2"));
  }
}
function RegisterDocumentComponent_div_75_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2, "Sin detalles");
    \u0275\u0275elementEnd()();
  }
}
function RegisterDocumentComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "table", 39)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275text(22, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, RegisterDocumentComponent_div_75_tr_25_Template, 28, 22, "tr", 40)(26, RegisterDocumentComponent_div_75_tr_26_Template, 3, 0, "tr", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 42);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_75_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.addServiceLine());
    });
    \u0275\u0275text(28, " Agregar detalle ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r7.serviceLines);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.serviceLines.length === 0);
  }
}
function RegisterDocumentComponent_div_76_tr_15_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r15 = ctx.$implicit;
    \u0275\u0275property("value", a_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", a_r15.code, " - ", a_r15.name, " ");
  }
}
function RegisterDocumentComponent_div_76_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_76_tr_15_Template_select_ngModelChange_2_listener($event) {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.accountId, $event) || (line_r14.accountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_76_tr_15_Template_select_ngModelChange_2_listener() {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onAccountSelected(line_r14));
    });
    \u0275\u0275elementStart(3, "option", 17);
    \u0275\u0275text(4, "Seleccionar cuenta...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RegisterDocumentComponent_div_76_tr_15_option_5_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_76_tr_15_Template_input_ngModelChange_7_listener($event) {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.debit, $event) || (line_r14.debit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_76_tr_15_Template_input_ngModelChange_9_listener($event) {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.credit, $event) || (line_r14.credit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_76_tr_15_Template_input_ngModelChange_11_listener($event) {
      const line_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.description, $event) || (line_r14.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "button", 53);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_76_tr_15_Template_button_click_13_listener() {
      const i_r16 = \u0275\u0275restoreView(_r13).index;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.removeAccountLine(i_r16));
    });
    \u0275\u0275elementStart(14, "span", 4);
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r14 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r14.accountId);
    \u0275\u0275property("name", "acc" + i_r16);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r7.accounts);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r14.debit);
    \u0275\u0275property("name", "debit" + i_r16);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r14.credit);
    \u0275\u0275property("name", "credit" + i_r16);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r14.description);
    \u0275\u0275property("name", "accDesc" + i_r16);
  }
}
function RegisterDocumentComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "table", 39)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275template(15, RegisterDocumentComponent_div_76_tr_15_Template, 16, 9, "tr", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 42);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_76_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.addAccountLine());
    });
    \u0275\u0275text(17, " Agregar cuenta ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r7.accountLines);
  }
}
function RegisterDocumentComponent_div_77_tr_13_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cc_r20 = ctx.$implicit;
    \u0275\u0275property("value", cc_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cc_r20.code, " - ", cc_r20.name, " ");
  }
}
function RegisterDocumentComponent_div_77_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_77_tr_13_Template_select_ngModelChange_2_listener($event) {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r19.costCenterId, $event) || (line_r19.costCenterId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_77_tr_13_Template_select_ngModelChange_2_listener() {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onCostCenterSelected(line_r19));
    });
    \u0275\u0275elementStart(3, "option", 17);
    \u0275\u0275text(4, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RegisterDocumentComponent_div_77_tr_13_option_5_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_77_tr_13_Template_input_ngModelChange_7_listener($event) {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r19.amount, $event) || (line_r19.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_77_tr_13_Template_input_ngModelChange_9_listener($event) {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r19.percentage, $event) || (line_r19.percentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 53);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_77_tr_13_Template_button_click_11_listener() {
      const i_r21 = \u0275\u0275restoreView(_r18).index;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.removeCostCenterLine(i_r21));
    });
    \u0275\u0275elementStart(12, "span", 4);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r19 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r19.costCenterId);
    \u0275\u0275property("name", "cc" + i_r21);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r7.costCenters);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r19.amount);
    \u0275\u0275property("name", "ccAmt" + i_r21);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r19.percentage);
    \u0275\u0275property("name", "ccPct" + i_r21);
  }
}
function RegisterDocumentComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "table", 39)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275template(13, RegisterDocumentComponent_div_77_tr_13_Template, 14, 7, "tr", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 42);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_77_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.addCostCenterLine());
    });
    \u0275\u0275text(15, " Agregar centro de costo ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r7.costCenterLines);
  }
}
function RegisterDocumentComponent_div_78_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_78_tr_15_Template_select_ngModelChange_2_listener($event) {
      const line_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(line_r24.retentionType, $event) || (line_r24.retentionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 55);
    \u0275\u0275text(4, "Ret. IR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 56);
    \u0275\u0275text(6, "Ret. IVA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_78_tr_15_Template_input_ngModelChange_8_listener($event) {
      const line_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(line_r24.percentage, $event) || (line_r24.percentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_78_tr_15_Template_input_ngModelChange_8_listener() {
      const line_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onRetentionChange(line_r24));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_78_tr_15_Template_input_ngModelChange_10_listener($event) {
      const line_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(line_r24.base, $event) || (line_r24.base = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_div_78_tr_15_Template_input_ngModelChange_10_listener() {
      const line_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onRetentionChange(line_r24));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 53);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_78_tr_15_Template_button_click_15_listener() {
      const i_r25 = \u0275\u0275restoreView(_r23).index;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.removeRetentionLine(i_r25));
    });
    \u0275\u0275elementStart(16, "span", 4);
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r24.retentionType);
    \u0275\u0275property("name", "retType" + i_r25);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", line_r24.percentage);
    \u0275\u0275property("name", "retPct" + i_r25);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r24.base);
    \u0275\u0275property("name", "retBase" + i_r25);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 7, line_r24.amount, "1.2-2"));
  }
}
function RegisterDocumentComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "table", 39)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275template(15, RegisterDocumentComponent_div_78_tr_15_Template, 18, 10, "tr", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 42);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_78_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.addRetentionLine());
    });
    \u0275\u0275text(17, " Agregar retenci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r7.retentionLines);
  }
}
function RegisterDocumentComponent_div_79_tr_13_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    \u0275\u0275property("value", opt_r29.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r29.label, " ");
  }
}
function RegisterDocumentComponent_div_79_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_79_tr_13_Template_select_ngModelChange_2_listener($event) {
      const line_r28 = \u0275\u0275restoreView(_r27).$implicit;
      \u0275\u0275twoWayBindingSet(line_r28.paymentMethod, $event) || (line_r28.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, RegisterDocumentComponent_div_79_tr_13_option_3_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_79_tr_13_Template_input_ngModelChange_5_listener($event) {
      const line_r28 = \u0275\u0275restoreView(_r27).$implicit;
      \u0275\u0275twoWayBindingSet(line_r28.amount, $event) || (line_r28.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_div_79_tr_13_Template_input_ngModelChange_7_listener($event) {
      const line_r28 = \u0275\u0275restoreView(_r27).$implicit;
      \u0275\u0275twoWayBindingSet(line_r28.reference, $event) || (line_r28.reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "button", 53);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_79_tr_13_Template_button_click_9_listener() {
      const i_r30 = \u0275\u0275restoreView(_r27).index;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.removePaymentLine(i_r30));
    });
    \u0275\u0275elementStart(10, "span", 4);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r28 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r28.paymentMethod);
    \u0275\u0275property("name", "payMeth" + i_r30);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.paymentMethodOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r28.amount);
    \u0275\u0275property("name", "payAmt" + i_r30);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r28.reference);
    \u0275\u0275property("name", "payRef" + i_r30);
  }
}
function RegisterDocumentComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "table", 39)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275template(13, RegisterDocumentComponent_div_79_tr_13_Template, 12, 7, "tr", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 42);
    \u0275\u0275listener("click", function RegisterDocumentComponent_div_79_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.addPaymentLine());
    });
    \u0275\u0275text(15, " Agregar forma de pago ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r7.paymentLines);
  }
}
var RegisterDocumentComponent = class _RegisterDocumentComponent {
  documentService;
  payablesService;
  receivablesService;
  accountService;
  inventoryService;
  automationService;
  activeTab = "services";
  saving = false;
  issueDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  personType = "CUSTOMER";
  documentCategory = "INVOICE";
  documentNumber = "";
  authorization = "";
  personId = "";
  personName = "";
  personIdentification = "";
  reference = "";
  seller = "";
  dueDays = 30;
  purchaseOrderRef = "";
  description = "";
  ice = 0;
  serviceLines = [];
  accountLines = [];
  costCenterLines = [];
  retentionLines = [];
  paymentLines = [];
  suppliers = [];
  customers = [];
  accounts = [];
  products = [];
  costCenters = [];
  sellerOptions = [
    { value: "", label: "Seleccionar vendedor..." },
    { value: "vendedor-1", label: "Vendedor principal" },
    { value: "vendedor-2", label: "Vendedor secundario" }
  ];
  personTypeOptions = [
    { value: "CUSTOMER", label: "Cliente" },
    { value: "SUPPLIER", label: "Proveedor" }
  ];
  documentCategoryOptions = [
    { value: "INVOICE", label: "Factura" },
    { value: "CREDIT_NOTE", label: "Nota de cr\xE9dito" },
    { value: "DEBIT_NOTE", label: "Nota de d\xE9bito" }
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
  constructor(documentService, payablesService, receivablesService, accountService, inventoryService, automationService) {
    this.documentService = documentService;
    this.payablesService = payablesService;
    this.receivablesService = receivablesService;
    this.accountService = accountService;
    this.inventoryService = inventoryService;
    this.automationService = automationService;
  }
  ngOnInit() {
    this.loadLookups();
  }
  get personOptions() {
    const source = this.personType === "CUSTOMER" ? this.customers : this.suppliers;
    return source.map((p) => ({
      id: p.id,
      identification: p.identification,
      name: p.name
    }));
  }
  loadLookups() {
    this.payablesService.getSuppliers().subscribe({
      next: (data) => this.suppliers = data
    });
    this.receivablesService.getCustomers().subscribe({
      next: (data) => this.customers = data
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
  }
  onPersonTypeChange() {
    this.personId = "";
    this.personName = "";
    this.personIdentification = "";
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  onPersonSelected() {
    const person = this.personOptions.find((p) => p.id === this.personId);
    if (person) {
      this.personName = person.name;
      this.personIdentification = person.identification;
    }
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
    const base = line.quantity * line.unitPrice - line.discount;
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
      discount += line.discount;
      const base = line.quantity * line.unitPrice - line.discount;
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
        data: __spreadProps(__spreadValues({}, line), { extraDiscount: 0 })
      });
    }
    for (const line of this.accountLines) {
      lines.push({ lineType: "ACCOUNT", sortOrder: order++, data: __spreadValues({}, line) });
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
      lines.push({ lineType: "PAYMENT", sortOrder: order++, data: __spreadValues({}, line) });
    }
    return lines;
  }
  save() {
    if (!this.documentNumber.trim()) {
      alert("Ingrese el n\xFAmero de documento");
      return;
    }
    if (!this.personId && !this.personName.trim()) {
      alert("Seleccione la persona del documento");
      return;
    }
    if (!this.description.trim()) {
      alert("La descripci\xF3n es obligatoria");
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
      entryType: "NON_ELECTRONIC",
      documentNumber: this.documentNumber.trim(),
      authorization: this.authorization || void 0,
      personId: this.personId || void 0,
      personName: this.personName || void 0,
      personIdentification: this.personIdentification || void 0,
      reference: this.reference || void 0,
      seller: this.seller || void 0,
      dueDays: this.dueDays,
      purchaseOrderRef: this.purchaseOrderRef || void 0,
      description: this.description.trim(),
      ice: this.ice,
      lines: this.buildLines()
    }).subscribe({
      next: () => {
        alert("Documento no electr\xF3nico registrado correctamente");
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
    this.personType = "CUSTOMER";
    this.documentCategory = "INVOICE";
    this.documentNumber = "";
    this.authorization = "";
    this.personId = "";
    this.personName = "";
    this.personIdentification = "";
    this.reference = "";
    this.seller = "";
    this.dueDays = 30;
    this.purchaseOrderRef = "";
    this.description = "";
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
  static \u0275fac = function RegisterDocumentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterDocumentComponent)(\u0275\u0275directiveInject(FinancialDocumentService), \u0275\u0275directiveInject(PayablesService), \u0275\u0275directiveInject(ReceivablesService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(InventoryService), \u0275\u0275directiveInject(AutomationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterDocumentComponent, selectors: [["app-register-document"]], decls: 135, vars: 61, consts: [[1, "register-document-container"], [1, "page-header"], ["routerLink", "/journal-entries", 1, "btn", "btn-secondary", "btn-guide"], [1, "info-banner"], [1, "material-icons"], [1, "card", "document-info"], [1, "form-row"], [1, "form-group"], ["type", "date", "name", "issueDate", 3, "ngModelChange", "ngModel"], [1, "form-group", "doc-type-group"], [1, "doc-type-row"], ["name", "personType", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "documentCategory", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "documentNumber", "placeholder", "N\xFAmero f\xEDsico del documento", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "authorization", "placeholder", "N\xFAmero de autorizaci\xF3n", 3, "ngModelChange", "ngModel"], ["name", "personId", "required", "", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "text", "name", "reference", 3, "ngModelChange", "ngModel"], ["name", "seller", 3, "ngModelChange", "ngModel"], [1, "form-group", "due-days"], [1, "due-row"], ["type", "number", "name", "dueDays", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "purchaseOrderRef", "placeholder", "Buscar orden...", 3, "ngModelChange", "ngModel"], [1, "card", "detail-section"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], ["class", "tab-panel", 4, "ngIf"], [1, "footer-section"], [1, "footer-left", "card"], ["name", "description", "rows", "5", "required", "", "placeholder", "Descripci\xF3n del documento...", 3, "ngModelChange", "ngModel"], [1, "totals-panel", "card"], [1, "total-row"], ["type", "number", "name", "ice", "step", "0.01", "min", "0", 1, "ice-input", 3, "ngModelChange", "ngModel"], [1, "total-row", "total-final"], ["type", "button", 1, "btn", "btn-primary", "btn-save", 3, "click", "disabled"], [3, "value"], [1, "tab-panel"], [1, "table-container"], [1, "detail-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "number", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel", "name"], [1, "col-product"], [3, "ngModelChange", "ngModel", "name"], ["type", "text", 3, "ngModelChange", "ngModel", "name"], ["type", "number", "step", "0.01", "min", "0", 3, "ngModelChange", "ngModel", "name"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "subtotal-cell"], ["type", "button", "title", "Eliminar", 1, "btn-icon", "btn-danger", 3, "click"], [3, "ngValue"], ["colspan", "10", 1, "empty-row"], ["type", "button", 1, "btn-icon", "btn-danger", 3, "click"], ["type", "number", "step", "0.01", "min", "0", "max", "100", 3, "ngModelChange", "ngModel", "name"], ["value", "IR"], ["value", "IVA"]], template: function RegisterDocumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Registrar Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 2);
      \u0275\u0275text(5, " Gu\xEDa para Intermitentes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "span", 4);
      \u0275\u0275text(8, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, " Importante: De acuerdo con la normativa del SRI, los documentos electr\xF3nicos deben ser autorizados en el momento de su emisi\xF3n. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 5)(12, "h2");
      \u0275\u0275text(13, "Informaci\xF3n del Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "label");
      \u0275\u0275text(17, "Fecha de Emisi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.issueDate, $event) || (ctx.issueDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 9)(20, "label");
      \u0275\u0275text(21, "Tipo de Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 10)(23, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personType, $event) || (ctx.personType = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_Template_select_ngModelChange_23_listener() {
        return ctx.onPersonTypeChange();
      });
      \u0275\u0275template(24, RegisterDocumentComponent_option_24_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.documentCategory, $event) || (ctx.documentCategory = $event);
        return $event;
      });
      \u0275\u0275template(26, RegisterDocumentComponent_option_26_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 7)(28, "label");
      \u0275\u0275text(29, "# de Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.documentNumber, $event) || (ctx.documentNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 7)(32, "label");
      \u0275\u0275text(33, "Autorizaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.authorization, $event) || (ctx.authorization = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 6)(36, "div", 7)(37, "label");
      \u0275\u0275text(38, "Persona *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_select_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.personId, $event) || (ctx.personId = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_Template_select_ngModelChange_39_listener() {
        return ctx.onPersonSelected();
      });
      \u0275\u0275elementStart(40, "option", 17);
      \u0275\u0275text(41, "Buscar persona...");
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, RegisterDocumentComponent_option_42_Template, 2, 3, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 7)(44, "label");
      \u0275\u0275text(45, "Referencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reference, $event) || (ctx.reference = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 7)(48, "label");
      \u0275\u0275text(49, "Vendedor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_select_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.seller, $event) || (ctx.seller = $event);
        return $event;
      });
      \u0275\u0275template(51, RegisterDocumentComponent_option_51_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 20)(53, "label");
      \u0275\u0275text(54, "Vencimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 21)(56, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dueDays, $event) || (ctx.dueDays = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "d\xEDas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 7)(60, "label");
      \u0275\u0275text(61, "Orden Compra/Venta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_62_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.purchaseOrderRef, $event) || (ctx.purchaseOrderRef = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "section", 24)(64, "div", 25)(65, "button", 26);
      \u0275\u0275listener("click", function RegisterDocumentComponent_Template_button_click_65_listener() {
        return ctx.setTab("services");
      });
      \u0275\u0275text(66, " Servicios ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 26);
      \u0275\u0275listener("click", function RegisterDocumentComponent_Template_button_click_67_listener() {
        return ctx.setTab("accounts");
      });
      \u0275\u0275text(68, " Cuentas ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 26);
      \u0275\u0275listener("click", function RegisterDocumentComponent_Template_button_click_69_listener() {
        return ctx.setTab("costCenter");
      });
      \u0275\u0275text(70, " Centro de Costo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "button", 26);
      \u0275\u0275listener("click", function RegisterDocumentComponent_Template_button_click_71_listener() {
        return ctx.setTab("retention");
      });
      \u0275\u0275text(72, " Retenci\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 26);
      \u0275\u0275listener("click", function RegisterDocumentComponent_Template_button_click_73_listener() {
        return ctx.setTab("payment");
      });
      \u0275\u0275text(74, " Formas de Pago ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(75, RegisterDocumentComponent_div_75_Template, 29, 2, "div", 27)(76, RegisterDocumentComponent_div_76_Template, 18, 1, "div", 27)(77, RegisterDocumentComponent_div_77_Template, 16, 1, "div", 27)(78, RegisterDocumentComponent_div_78_Template, 18, 1, "div", 27)(79, RegisterDocumentComponent_div_79_Template, 16, 1, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "section", 28)(81, "div", 29)(82, "div", 7)(83, "label");
      \u0275\u0275text(84, "Descripci\xF3n *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "textarea", 30);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_textarea_ngModelChange_85_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 31)(87, "div", 32)(88, "span");
      \u0275\u0275text(89, "Subtotal 15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 32)(94, "span");
      \u0275\u0275text(95, "Subtotal 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 32)(100, "span");
      \u0275\u0275text(101, "Subtotal 0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "span");
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 32)(106, "span");
      \u0275\u0275text(107, "Descuento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 32)(112, "span");
      \u0275\u0275text(113, "IVA 15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "span");
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 32)(118, "span");
      \u0275\u0275text(119, "IVA 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 32)(124, "span");
      \u0275\u0275text(125, "ICE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_126_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.ice, $event) || (ctx.ice = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RegisterDocumentComponent_Template_input_ngModelChange_126_listener() {
        return ctx.recalcTotals();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 34)(128, "span");
      \u0275\u0275text(129, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "span");
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "button", 35);
      \u0275\u0275listener("click", function RegisterDocumentComponent_Template_button_click_133_listener() {
        return ctx.save();
      });
      \u0275\u0275text(134);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.issueDate);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.personType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.personTypeOptions);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.documentCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.documentCategoryOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.documentNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.authorization);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.personId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.personOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.reference);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.seller);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sellerOptions);
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
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 40, ctx.totals.subtotal15, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 43, ctx.totals.subtotal5, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 46, ctx.totals.subtotal0, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 49, ctx.totals.discount, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 52, ctx.totals.iva15, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 55, ctx.totals.iva5, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.ice);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 58, ctx.totals.total, "1.2-2"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Guardando..." : "Guardar", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.register-document-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 0;\n}\n.btn-guide[_ngcontent-%COMP%] {\n  text-decoration: none;\n  white-space: nowrap;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.document-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: #334155;\n}\n.doc-type-group[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.doc-type-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.doc-type-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n}\n.xml-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  margin: 0;\n  white-space: nowrap;\n}\n.xml-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.person-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.person-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.person-row[_ngcontent-%COMP%]   .person-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.due-days[_ngcontent-%COMP%]   .due-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.due-days[_ngcontent-%COMP%]   .due-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.due-days[_ngcontent-%COMP%]   .due-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n.detail-section[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #e2e8f0;\n  margin: 0 -24px 20px;\n  padding: 0 24px;\n  gap: 4px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #3b82f6;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}\n.detail-table[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.detail-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.detail-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 60px;\n  padding: 6px 8px;\n  font-size: 13px;\n}\n.detail-table[_ngcontent-%COMP%]   .col-product[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.detail-table[_ngcontent-%COMP%]   .subtotal-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: right;\n  white-space: nowrap;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.footer-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .footer-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer-left[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n.attachments[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.attachments[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.attachments[_ngcontent-%COMP%]   .attach-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.petty-cash[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.petty-cash[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #475569;\n  cursor: pointer;\n}\n.petty-cash[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\n.totals-panel[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #475569;\n}\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-weight: 500;\n  color: #1e293b;\n}\n.ice-input[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n  padding: 4px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n}\n.total-final[_ngcontent-%COMP%] {\n  border-bottom: none;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 2px solid #e2e8f0;\n}\n.total-final[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #3b82f6;\n}\n.btn-save[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=register-document.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterDocumentComponent, [{
    type: Component,
    args: [{ selector: "app-register-document", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="register-document-container">\r
  <div class="page-header">\r
    <h1>Registrar Documento</h1>\r
    <a routerLink="/journal-entries" class="btn btn-secondary btn-guide">\r
      Gu\xEDa para Intermitentes\r
    </a>\r
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
          <select\r
            [(ngModel)]="personType"\r
            name="personType"\r
            (ngModelChange)="onPersonTypeChange()"\r
          >\r
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
        </div>\r
      </div>\r
      <div class="form-group">\r
        <label># de Documento</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="documentNumber"\r
          name="documentNumber"\r
          placeholder="N\xFAmero f\xEDsico del documento"\r
        />\r
      </div>\r
      <div class="form-group">\r
        <label>Autorizaci\xF3n</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="authorization"\r
          name="authorization"\r
          placeholder="N\xFAmero de autorizaci\xF3n"\r
        />\r
      </div>\r
    </div>\r
\r
    <div class="form-row">\r
      <div class="form-group">\r
        <label>Persona *</label>\r
        <select\r
          [(ngModel)]="personId"\r
          name="personId"\r
          required\r
          (ngModelChange)="onPersonSelected()"\r
        >\r
          <option value="">Buscar persona...</option>\r
          <option *ngFor="let p of personOptions" [value]="p.id">\r
            {{ p.identification }} - {{ p.name }}\r
          </option>\r
        </select>\r
      </div>\r
      <div class="form-group">\r
        <label>Referencia</label>\r
        <input type="text" [(ngModel)]="reference" name="reference" />\r
      </div>\r
      <div class="form-group">\r
        <label>Vendedor</label>\r
        <select [(ngModel)]="seller" name="seller">\r
          <option *ngFor="let opt of sellerOptions" [value]="opt.value">\r
            {{ opt.label }}\r
          </option>\r
        </select>\r
      </div>\r
      <div class="form-group due-days">\r
        <label>Vencimiento</label>\r
        <div class="due-row">\r
          <input type="number" [(ngModel)]="dueDays" name="dueDays" min="0" />\r
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
                <input type="text" [(ngModel)]="line.unit" [name]="'unit' + i" />\r
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
              <td colspan="10" class="empty-row">Sin detalles</td>\r
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
        <label>Descripci\xF3n *</label>\r
        <textarea\r
          [(ngModel)]="description"\r
          name="description"\r
          rows="5"\r
          required\r
          placeholder="Descripci\xF3n del documento..."\r
        ></textarea>\r
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
`, styles: ["/* src/app/pages/register-document/register-document.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.register-document-container {\n  max-width: 1400px;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 0;\n}\n.btn-guide {\n  text-decoration: none;\n  white-space: nowrap;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner .material-icons {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.document-info h2 {\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: #334155;\n}\n.doc-type-group {\n  grid-column: span 2;\n}\n.doc-type-row {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.doc-type-row select {\n  flex: 1;\n  min-width: 120px;\n}\n.xml-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  margin: 0;\n  white-space: nowrap;\n}\n.xml-btn .material-icons {\n  font-size: 18px;\n}\n.field-hint {\n  font-size: 12px;\n  color: #64748b;\n}\n.person-row {\n  display: flex;\n  gap: 8px;\n}\n.person-row select {\n  flex: 1;\n}\n.person-row .person-name {\n  flex: 1;\n}\n.due-days .due-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.due-days .due-row input {\n  width: 80px;\n}\n.due-days .due-row span {\n  color: #64748b;\n  font-size: 14px;\n}\n.detail-section {\n  padding-top: 0;\n}\n.tabs {\n  display: flex;\n  border-bottom: 2px solid #e2e8f0;\n  margin: 0 -24px 20px;\n  padding: 0 24px;\n  gap: 4px;\n}\n.tab {\n  padding: 12px 20px;\n  border: none;\n  background: transparent;\n  color: #64748b;\n  font-weight: 500;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s;\n}\n.tab:hover {\n  color: #3b82f6;\n}\n.tab.active {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}\n.detail-table {\n  font-size: 13px;\n}\n.detail-table input,\n.detail-table select {\n  width: 100%;\n  min-width: 60px;\n  padding: 6px 8px;\n  font-size: 13px;\n}\n.detail-table .col-product select {\n  min-width: 180px;\n}\n.detail-table .subtotal-cell {\n  font-weight: 600;\n  text-align: right;\n  white-space: nowrap;\n}\n.empty-row {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.btn-sm {\n  margin-top: 12px;\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.footer-section {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .footer-section {\n    grid-template-columns: 1fr;\n  }\n}\n.footer-left textarea {\n  width: 100%;\n  resize: vertical;\n}\n.attachments {\n  margin-top: 16px;\n}\n.attachments label {\n  display: block;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.attachments .attach-hint {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.petty-cash {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.petty-cash .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #475569;\n  cursor: pointer;\n}\n.petty-cash select {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\n.totals-panel {\n  padding: 20px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n  color: #475569;\n}\n.total-row span:last-child {\n  font-weight: 500;\n  color: #1e293b;\n}\n.ice-input {\n  width: 90px;\n  text-align: right;\n  padding: 4px 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n}\n.total-final {\n  border-bottom: none;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 2px solid #e2e8f0;\n}\n.total-final span:last-child {\n  color: #3b82f6;\n}\n.btn-save {\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=register-document.component.css.map */\n"] }]
  }], () => [{ type: FinancialDocumentService }, { type: PayablesService }, { type: ReceivablesService }, { type: AccountService }, { type: InventoryService }, { type: AutomationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterDocumentComponent, { className: "RegisterDocumentComponent", filePath: "src/app/pages/register-document/register-document.component.ts", lineNumber: 42 });
})();
export {
  RegisterDocumentComponent
};
//# sourceMappingURL=chunk-K5GJM7XP.js.map
