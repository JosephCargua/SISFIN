import {
  JournalEntryService
} from "./chunk-2Q7MZH63.js";
import {
  AccountService
} from "./chunk-OIQRSETW.js";
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

// src/app/models/journal-entry.model.ts
var JournalEntryStatus;
(function(JournalEntryStatus2) {
  JournalEntryStatus2["DRAFT"] = "DRAFT";
  JournalEntryStatus2["POSTED"] = "POSTED";
  JournalEntryStatus2["CANCELLED"] = "CANCELLED";
})(JournalEntryStatus || (JournalEntryStatus = {}));

// src/app/pages/journal-entries/journal-entries.component.ts
function JournalEntriesComponent_div_8_tr_122_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r5 = ctx.$implicit;
    \u0275\u0275property("value", account_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", account_r5.code, " - ", account_r5.name, " ");
  }
}
function JournalEntriesComponent_div_8_tr_122_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function JournalEntriesComponent_div_8_tr_122_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeLine(i_r7));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_div_8_tr_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_div_8_tr_122_Template_select_ngModelChange_2_listener($event) {
      const line_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(line_r4.accountId, $event) || (line_r4.accountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 8);
    \u0275\u0275text(4, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, JournalEntriesComponent_div_8_tr_122_option_5_Template, 2, 3, "option", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_div_8_tr_122_Template_input_ngModelChange_7_listener($event) {
      const line_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(line_r4.debit, $event) || (line_r4.debit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function JournalEntriesComponent_div_8_tr_122_Template_input_input_7_listener() {
      const line_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(line_r4.credit = 0);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_div_8_tr_122_Template_input_ngModelChange_9_listener($event) {
      const line_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(line_r4.credit, $event) || (line_r4.credit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function JournalEntriesComponent_div_8_tr_122_Template_input_input_9_listener() {
      const line_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(line_r4.debit = 0);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_div_8_tr_122_Template_input_ngModelChange_11_listener($event) {
      const line_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(line_r4.description, $event) || (line_r4.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, JournalEntriesComponent_div_8_tr_122_button_13_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r4.accountId);
    \u0275\u0275property("name", "account" + i_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.accounts);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r4.debit);
    \u0275\u0275property("name", "debit" + i_r7);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r4.credit);
    \u0275\u0275property("name", "credit" + i_r7);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r4.description);
    \u0275\u0275property("name", "desc" + i_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.newEntry.lines.length > 2);
  }
}
function JournalEntriesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h2");
    \u0275\u0275text(2, "Crear Nuevo Asiento Contable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "details")(5, "summary")(6, "span", 3);
    \u0275\u0275text(7, "help_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " \xBFC\xF3mo crear un asiento? (Click para ver ayuda) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "h4");
    \u0275\u0275text(11, "Principio de Partida Doble");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "La suma de D\xC9BITOS debe igualar la suma de CR\xC9DITOS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16, "Pasos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ol")(18, "li");
    \u0275\u0275text(19, "Completa fecha y descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Agrega l\xEDneas (m\xEDnimo 2): ");
    \u0275\u0275elementStart(22, "ul")(23, "li");
    \u0275\u0275text(24, "Selecciona una cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li");
    \u0275\u0275text(26, "Ingresa monto en ");
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "D\xE9bito");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " O ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " (no ambos)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Verifica que los totales sean iguales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Crea el asiento (se guarda como BORRADOR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li");
    \u0275\u0275text(38, "POSTEA el asiento para hacerlo oficial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "h4");
    \u0275\u0275text(40, "Ejemplo: Compra de mercader\xEDas por $500");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "table", 15)(42, "thead")(43, "tr")(44, "th");
    \u0275\u0275text(45, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "D\xE9bito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Cr\xE9dito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody")(51, "tr")(52, "td");
    \u0275\u0275text(53, "1.3.01 - Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "500.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "-");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "tr")(59, "td");
    \u0275\u0275text(60, "1.1.01 - Caja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td");
    \u0275\u0275text(64, "500.00");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "tr", 16)(66, "td")(67, "strong");
    \u0275\u0275text(68, "TOTALES");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td")(70, "strong");
    \u0275\u0275text(71, "500.00");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "td")(73, "strong");
    \u0275\u0275text(74, "500.00");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(75, "h4");
    \u0275\u0275text(76, "Estados:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ul")(78, "li")(79, "strong");
    \u0275\u0275text(80, "BORRADOR:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " Puedes editarlo, NO aparece en reportes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "li")(83, "strong");
    \u0275\u0275text(84, "POSTEADO:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " Ya no se puede editar, S\xCD aparece en reportes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "li")(87, "strong");
    \u0275\u0275text(88, "ANULADO:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " Cancelado, NO aparece en reportes");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(90, "form", 17);
    \u0275\u0275listener("ngSubmit", function JournalEntriesComponent_div_8_Template_form_ngSubmit_90_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createEntry());
    });
    \u0275\u0275elementStart(91, "div", 18)(92, "div", 19)(93, "label");
    \u0275\u0275text(94, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_div_8_Template_input_ngModelChange_95_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEntry.date, $event) || (ctx_r1.newEntry.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 19)(97, "label");
    \u0275\u0275text(98, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_div_8_Template_input_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEntry.description, $event) || (ctx_r1.newEntry.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 22)(101, "div", 23)(102, "h3");
    \u0275\u0275text(103, "L\xEDneas del Asiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 24);
    \u0275\u0275listener("click", function JournalEntriesComponent_div_8_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addLine());
    });
    \u0275\u0275elementStart(105, "span", 3);
    \u0275\u0275text(106, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, " Agregar L\xEDnea ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 25)(109, "table")(110, "thead")(111, "tr")(112, "th");
    \u0275\u0275text(113, "Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "th");
    \u0275\u0275text(115, "D\xE9bito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "th");
    \u0275\u0275text(117, "Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "th");
    \u0275\u0275text(119, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(120, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "tbody");
    \u0275\u0275template(122, JournalEntriesComponent_div_8_tr_122_Template, 14, 10, "tr", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "tfoot")(124, "tr", 26)(125, "td")(126, "strong");
    \u0275\u0275text(127, "Totales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "td")(129, "strong");
    \u0275\u0275text(130);
    \u0275\u0275pipe(131, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "td")(133, "strong");
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "td", 27)(137, "span");
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "number");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(140, "div", 28)(141, "button", 29);
    \u0275\u0275listener("click", function JournalEntriesComponent_div_8_Template_button_click_141_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCreateForm());
    });
    \u0275\u0275text(142, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "button", 30);
    \u0275\u0275text(144, " Crear Asiento ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(95);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEntry.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEntry.description);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.newEntry.lines);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 11, ctx_r1.getTotalDebit(), "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 14, ctx_r1.getTotalCredit(), "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-success", ctx_r1.getDifference() <= 0.01)("text-danger", ctx_r1.getDifference() > 0.01);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Diferencia: ", \u0275\u0275pipeBind2(139, 17, ctx_r1.getDifference(), "1.2-2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.validateDoubleEntry() || ctx_r1.getDifference() > 0.01);
  }
}
function JournalEntriesComponent_tr_41_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function JournalEntriesComponent_tr_41_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const entry_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postEntry(entry_r9.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_tr_41_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function JournalEntriesComponent_tr_41_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const entry_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEntry(entry_r9.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntriesComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 38);
    \u0275\u0275template(19, JournalEntriesComponent_tr_41_button_19_Template, 3, 0, "button", 39)(20, JournalEntriesComponent_tr_41_button_20_Template, 3, 0, "button", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r9.entryNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 14, entry_r9.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r9.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 17, entry_r9.totalDebit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 20, entry_r9.totalCredit, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-warning", entry_r9.status === ctx_r1.JournalEntryStatus.DRAFT)("badge-success", entry_r9.status === ctx_r1.JournalEntryStatus.POSTED)("badge-danger", entry_r9.status === ctx_r1.JournalEntryStatus.CANCELLED);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.statusLabels[entry_r9.status], " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", entry_r9.status === ctx_r1.JournalEntryStatus.DRAFT);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", entry_r9.status !== ctx_r1.JournalEntryStatus.CANCELLED);
  }
}
var JournalEntriesComponent = class _JournalEntriesComponent {
  journalEntryService;
  accountService;
  entries = [];
  accounts = [];
  showCreateForm = false;
  statusFilter = "";
  // Exponer el enum para el template
  JournalEntryStatus = JournalEntryStatus;
  newEntry = {
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    description: "",
    lines: [
      { accountId: "", debit: 0, credit: 0 },
      { accountId: "", debit: 0, credit: 0 }
    ]
  };
  statusLabels = {
    [JournalEntryStatus.DRAFT]: "Borrador",
    [JournalEntryStatus.POSTED]: "Posteado",
    [JournalEntryStatus.CANCELLED]: "Anulado"
  };
  constructor(journalEntryService, accountService) {
    this.journalEntryService = journalEntryService;
    this.accountService = accountService;
  }
  ngOnInit() {
    this.loadEntries();
    this.loadAccounts();
  }
  loadEntries() {
    this.journalEntryService.getAll().subscribe({
      next: (data) => {
        this.entries = data;
      },
      error: (error) => {
        console.error("Error loading entries:", error);
        alert("Error al cargar los asientos");
      }
    });
  }
  loadAccounts() {
    this.accountService.getAll().subscribe({
      next: (data) => {
        this.accounts = data.filter((a) => a.isActive && !a.isControlAccount);
      },
      error: (error) => {
        console.error("Error loading accounts:", error);
      }
    });
  }
  addLine() {
    this.newEntry.lines.push({ accountId: "", debit: 0, credit: 0 });
  }
  removeLine(index) {
    if (this.newEntry.lines.length > 2) {
      this.newEntry.lines.splice(index, 1);
    }
  }
  validateDoubleEntry() {
    const totalDebit = this.newEntry.lines.reduce((sum, line) => sum + (line.debit || 0), 0);
    const totalCredit = this.newEntry.lines.reduce((sum, line) => sum + (line.credit || 0), 0);
    return Math.abs(totalDebit - totalCredit) <= 0.01;
  }
  createEntry() {
    if (!this.validateDoubleEntry()) {
      alert("Error: La suma de d\xE9bitos debe igualar la suma de cr\xE9ditos");
      return;
    }
    if (this.newEntry.lines.length < 2) {
      alert("Debe tener al menos 2 l\xEDneas");
      return;
    }
    this.journalEntryService.create(this.newEntry).subscribe({
      next: () => {
        alert("Asiento creado exitosamente");
        this.showCreateForm = false;
        this.resetForm();
        this.loadEntries();
      },
      error: (error) => {
        console.error("Error creating entry:", error);
        alert(error.error?.message || "Error al crear el asiento");
      }
    });
  }
  postEntry(id) {
    if (confirm("\xBFEst\xE1 seguro de postear este asiento?")) {
      this.journalEntryService.post(id).subscribe({
        next: () => {
          alert("Asiento posteado exitosamente");
          this.loadEntries();
        },
        error: (error) => {
          console.error("Error posting entry:", error);
          alert(error.error?.message || "Error al postear el asiento");
        }
      });
    }
  }
  cancelEntry(id) {
    const reason = prompt("Ingrese la raz\xF3n de anulaci\xF3n:");
    if (reason) {
      this.journalEntryService.cancel(id, reason).subscribe({
        next: () => {
          alert("Asiento anulado exitosamente");
          this.loadEntries();
        },
        error: (error) => {
          console.error("Error cancelling entry:", error);
          alert(error.error?.message || "Error al anular el asiento");
        }
      });
    }
  }
  getTotalDebit() {
    return this.newEntry.lines.reduce((sum, line) => sum + (line.debit || 0), 0);
  }
  getTotalCredit() {
    return this.newEntry.lines.reduce((sum, line) => sum + (line.credit || 0), 0);
  }
  getDifference() {
    return Math.abs(this.getTotalDebit() - this.getTotalCredit());
  }
  resetForm() {
    this.newEntry = {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      description: "",
      lines: [
        { accountId: "", debit: 0, credit: 0 },
        { accountId: "", debit: 0, credit: 0 }
      ]
    };
  }
  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    if (!this.showCreateForm) {
      this.resetForm();
    }
  }
  static \u0275fac = function JournalEntriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JournalEntriesComponent)(\u0275\u0275directiveInject(JournalEntryService), \u0275\u0275directiveInject(AccountService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalEntriesComponent, selectors: [["app-journal-entries"]], decls: 42, vars: 6, consts: [[1, "journal-entries-container"], [1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], ["class", "create-form card", 4, "ngIf"], [1, "entries-list", "card"], [1, "list-header"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "create-form", "card"], [1, "help-box"], [1, "help-content"], [1, "example-table"], [1, "total-row"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "description", "placeholder", "Descripci\xF3n del asiento", 3, "ngModelChange", "ngModel"], [1, "lines-section"], [1, "lines-header"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "lines-table"], [1, "totals-row"], ["colspan", "2"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["required", "", 3, "ngModelChange", "ngModel", "name"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "step", "0.01", "min", "0", 3, "ngModelChange", "input", "ngModel", "name"], ["type", "text", "placeholder", "Descripci\xF3n", 3, "ngModelChange", "ngModel", "name"], ["type", "button", "class", "btn-icon", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-icon", 3, "click"], [1, "badge"], [1, "action-buttons"], ["class", "btn-icon btn-success", "title", "Postear", 3, "click", 4, "ngIf"], ["class", "btn-icon btn-danger", "title", "Anular", 3, "click", 4, "ngIf"], ["title", "Postear", 1, "btn-icon", "btn-success", 3, "click"], ["title", "Anular", 1, "btn-icon", "btn-danger", 3, "click"]], template: function JournalEntriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Libro Diario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function JournalEntriesComponent_Template_button_click_4_listener() {
        return ctx.toggleCreateForm();
      });
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Nuevo Asiento ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, JournalEntriesComponent_div_8_Template, 145, 20, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "h2");
      \u0275\u0275text(12, "Asientos Contables");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function JournalEntriesComponent_Template_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function JournalEntriesComponent_Template_select_change_13_listener() {
        return ctx.loadEntries();
      });
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Borrador");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 9);
      \u0275\u0275text(19, "Posteado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 9);
      \u0275\u0275text(21, "Anulado");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 10)(23, "table")(24, "thead")(25, "tr")(26, "th");
      \u0275\u0275text(27, "N\xFAmero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Descripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "D\xE9bito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Cr\xE9dito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275template(41, JournalEntriesComponent_tr_41_Template, 21, 23, "tr", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.JournalEntryStatus.DRAFT);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.JournalEntryStatus.POSTED);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.JournalEntryStatus.CANCELLED);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.entries);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: ["\n\n.journal-entries-container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-section[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-section[_ngcontent-%COMP%]   .lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-section[_ngcontent-%COMP%]   .lines-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-weight: 600;\n  border-top: 2px solid #e2e8f0;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lines-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   .totals-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.create-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.list-header[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon.btn-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-icon.btn-success[_ngcontent-%COMP%]:hover {\n  background: #a7f3d0;\n}\n.btn-icon.btn-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-icon.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n.help-box[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-left: 4px solid #3b82f6;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 24px;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  color: #1e40af;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:hover {\n  color: #1e3a8a;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #bfdbfe;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 16px 0 8px 0;\n  color: #1e293b;\n  font-size: 16px;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #475569;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], \n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  padding-left: 24px;\n  color: #475569;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .example-table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px 0;\n  border-collapse: collapse;\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .example-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .example-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .example-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .example-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1e293b;\n}\n.help-box[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .example-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.total-row[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  font-weight: 600;\n}\n/*# sourceMappingURL=journal-entries.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalEntriesComponent, [{
    type: Component,
    args: [{ selector: "app-journal-entries", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="journal-entries-container">
  <div class="page-header">
    <h1>Libro Diario</h1>
    <button class="btn btn-primary" (click)="toggleCreateForm()">
      <span class="material-icons">add</span>
      Nuevo Asiento
    </button>
  </div>

  <div *ngIf="showCreateForm" class="create-form card">
    <h2>Crear Nuevo Asiento Contable</h2>
    
    <div class="help-box">
      <details>
        <summary>
          <span class="material-icons">help_outline</span>
          \xBFC\xF3mo crear un asiento? (Click para ver ayuda)
        </summary>
        <div class="help-content">
          <h4>Principio de Partida Doble</h4>
          <p><strong>La suma de D\xC9BITOS debe igualar la suma de CR\xC9DITOS</strong></p>
          
          <h4>Pasos:</h4>
          <ol>
            <li>Completa fecha y descripci\xF3n</li>
            <li>Agrega l\xEDneas (m\xEDnimo 2):
              <ul>
                <li>Selecciona una cuenta</li>
                <li>Ingresa monto en <strong>D\xE9bito</strong> O <strong>Cr\xE9dito</strong> (no ambos)</li>
              </ul>
            </li>
            <li>Verifica que los totales sean iguales</li>
            <li>Crea el asiento (se guarda como BORRADOR)</li>
            <li>POSTEA el asiento para hacerlo oficial</li>
          </ol>

          <h4>Ejemplo: Compra de mercader\xEDas por $500</h4>
          <table class="example-table">
            <thead>
              <tr>
                <th>Cuenta</th>
                <th>D\xE9bito</th>
                <th>Cr\xE9dito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.3.01 - Inventario</td>
                <td>500.00</td>
                <td>-</td>
              </tr>
              <tr>
                <td>1.1.01 - Caja</td>
                <td>-</td>
                <td>500.00</td>
              </tr>
              <tr class="total-row">
                <td><strong>TOTALES</strong></td>
                <td><strong>500.00</strong></td>
                <td><strong>500.00</strong></td>
              </tr>
            </tbody>
          </table>

          <h4>Estados:</h4>
          <ul>
            <li><strong>BORRADOR:</strong> Puedes editarlo, NO aparece en reportes</li>
            <li><strong>POSTEADO:</strong> Ya no se puede editar, S\xCD aparece en reportes</li>
            <li><strong>ANULADO:</strong> Cancelado, NO aparece en reportes</li>
          </ul>
        </div>
      </details>
    </div>
    <form (ngSubmit)="createEntry()">
      <div class="form-row">
        <div class="form-group">
          <label>Fecha *</label>
          <input type="date" [(ngModel)]="newEntry.date" name="date" required />
        </div>
        <div class="form-group">
          <label>Descripci\xF3n</label>
          <input
            type="text"
            [(ngModel)]="newEntry.description"
            name="description"
            placeholder="Descripci\xF3n del asiento"
          />
        </div>
      </div>

      <div class="lines-section">
        <div class="lines-header">
          <h3>L\xEDneas del Asiento</h3>
          <button type="button" class="btn btn-secondary btn-sm" (click)="addLine()">
            <span class="material-icons">add</span>
            Agregar L\xEDnea
          </button>
        </div>

        <div class="lines-table">
          <table>
            <thead>
              <tr>
                <th>Cuenta</th>
                <th>D\xE9bito</th>
                <th>Cr\xE9dito</th>
                <th>Descripci\xF3n</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let line of newEntry.lines; let i = index">
                <td>
                  <select [(ngModel)]="line.accountId" [name]="'account' + i" required>
                    <option value="">Seleccione...</option>
                    <option *ngFor="let account of accounts" [value]="account.id">
                      {{ account.code }} - {{ account.name }}
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    [(ngModel)]="line.debit"
                    [name]="'debit' + i"
                    step="0.01"
                    min="0"
                    (input)="line.credit = 0"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    [(ngModel)]="line.credit"
                    [name]="'credit' + i"
                    step="0.01"
                    min="0"
                    (input)="line.debit = 0"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    [(ngModel)]="line.description"
                    [name]="'desc' + i"
                    placeholder="Descripci\xF3n"
                  />
                </td>
                <td>
                  <button
                    *ngIf="newEntry.lines.length > 2"
                    type="button"
                    class="btn-icon"
                    (click)="removeLine(i)"
                  >
                    <span class="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="totals-row">
                <td><strong>Totales</strong></td>
                <td><strong>{{ getTotalDebit() | number: '1.2-2' }}</strong></td>
                <td><strong>{{ getTotalCredit() | number: '1.2-2' }}</strong></td>
                <td colspan="2">
                  <span
                    [class.text-success]="getDifference() <= 0.01"
                    [class.text-danger]="getDifference() > 0.01"
                  >
                    Diferencia: {{ getDifference() | number: '1.2-2' }}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-secondary" (click)="toggleCreateForm()">
          Cancelar
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="!validateDoubleEntry() || getDifference() > 0.01"
        >
          Crear Asiento
        </button>
      </div>
    </form>
  </div>

  <div class="entries-list card">
    <div class="list-header">
      <h2>Asientos Contables</h2>
      <select [(ngModel)]="statusFilter" (change)="loadEntries()">
        <option value="">Todos los estados</option>
        <option [value]="JournalEntryStatus.DRAFT">Borrador</option>
        <option [value]="JournalEntryStatus.POSTED">Posteado</option>
        <option [value]="JournalEntryStatus.CANCELLED">Anulado</option>
      </select>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>N\xFAmero</th>
            <th>Fecha</th>
            <th>Descripci\xF3n</th>
            <th>D\xE9bito</th>
            <th>Cr\xE9dito</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let entry of entries">
            <td>{{ entry.entryNumber }}</td>
            <td>{{ entry.date | date: 'dd/MM/yyyy' }}</td>
            <td>{{ entry.description || '-' }}</td>
            <td>{{ entry.totalDebit | number: '1.2-2' }}</td>
            <td>{{ entry.totalCredit | number: '1.2-2' }}</td>
            <td>
              <span
                class="badge"
                [class.badge-warning]="entry.status === JournalEntryStatus.DRAFT"
                [class.badge-success]="entry.status === JournalEntryStatus.POSTED"
                [class.badge-danger]="entry.status === JournalEntryStatus.CANCELLED"
              >
                {{ statusLabels[entry.status] }}
              </span>
            </td>
            <td>
              <div class="action-buttons">
                <button
                  *ngIf="entry.status === JournalEntryStatus.DRAFT"
                  class="btn-icon btn-success"
                  (click)="postEntry(entry.id)"
                  title="Postear"
                >
                  <span class="material-icons">check</span>
                </button>
                <button
                  *ngIf="entry.status !== JournalEntryStatus.CANCELLED"
                  class="btn-icon btn-danger"
                  (click)="cancelEntry(entry.id)"
                  title="Anular"
                >
                  <span class="material-icons">cancel</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

`, styles: ["/* src/app/pages/journal-entries/journal-entries.component.scss */\n.journal-entries-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.create-form form .form-row {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.create-form form .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.create-form form .form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.create-form form .form-group input,\n.create-form form .form-group select {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.create-form form .form-group input:focus,\n.create-form form .form-group select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.create-form form .lines-section {\n  margin: 24px 0;\n}\n.create-form form .lines-section .lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.create-form form .lines-section .lines-header h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.create-form form .lines-table {\n  overflow-x: auto;\n}\n.create-form form .lines-table table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.create-form form .lines-table table thead {\n  background: #f1f5f9;\n}\n.create-form form .lines-table table thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.create-form form .lines-table table tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n}\n.create-form form .lines-table table tbody tr:hover {\n  background: #f8fafc;\n}\n.create-form form .lines-table table tbody td {\n  padding: 8px 12px;\n}\n.create-form form .lines-table table tbody td input,\n.create-form form .lines-table table tbody td select {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.create-form form .lines-table table tfoot .totals-row {\n  background: #f8fafc;\n  font-weight: 600;\n  border-top: 2px solid #e2e8f0;\n}\n.create-form form .lines-table table tfoot .totals-row td {\n  padding: 12px;\n}\n.create-form form .form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.list-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.list-header select {\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon.btn-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-icon.btn-success:hover {\n  background: #a7f3d0;\n}\n.btn-icon.btn-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-icon.btn-danger:hover {\n  background: #fecaca;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn.btn-secondary.btn-sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.text-success {\n  color: #065f46;\n}\n.text-danger {\n  color: #991b1b;\n}\n.help-box {\n  background: #eff6ff;\n  border-left: 4px solid #3b82f6;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 24px;\n}\n.help-box details summary {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  color: #1e40af;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.help-box details summary .material-icons {\n  font-size: 20px;\n}\n.help-box details summary:hover {\n  color: #1e3a8a;\n}\n.help-box details .help-content {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #bfdbfe;\n}\n.help-box details .help-content h4 {\n  margin: 16px 0 8px 0;\n  color: #1e293b;\n  font-size: 16px;\n}\n.help-box details .help-content p {\n  margin: 8px 0;\n  color: #475569;\n}\n.help-box details .help-content ol,\n.help-box details .help-content ul {\n  margin: 8px 0;\n  padding-left: 24px;\n  color: #475569;\n}\n.help-box details .help-content ol li,\n.help-box details .help-content ul li {\n  margin: 4px 0;\n}\n.help-box details .help-content .example-table {\n  width: 100%;\n  margin: 16px 0;\n  border-collapse: collapse;\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.help-box details .help-content .example-table thead {\n  background: #f1f5f9;\n}\n.help-box details .help-content .example-table thead th {\n  padding: 8px 12px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #475569;\n}\n.help-box details .help-content .example-table tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n}\n.help-box details .help-content .example-table tbody tr td {\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1e293b;\n}\n.help-box details .help-content .example-table tbody tr.total-row {\n  background: #f8fafc;\n  font-weight: 600;\n}\n/*# sourceMappingURL=journal-entries.component.css.map */\n"] }]
  }], () => [{ type: JournalEntryService }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalEntriesComponent, { className: "JournalEntriesComponent", filePath: "src/app/pages/journal-entries/journal-entries.component.ts", lineNumber: 21 });
})();
export {
  JournalEntriesComponent
};
//# sourceMappingURL=chunk-Q63OBOHT.js.map
