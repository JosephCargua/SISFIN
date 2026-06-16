import {
  TaxService
} from "./chunk-QKDHOU7J.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/retentions/retentions.component.ts
function RetentionsComponent_div_8_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r3 = ctx.$implicit;
    \u0275\u0275property("value", code_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", code_r3.code, " - ", code_r3.name, " ");
  }
}
function RetentionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2");
    \u0275\u0275text(2, "Crear Retenci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 9);
    \u0275\u0275listener("ngSubmit", function RetentionsComponent_div_8_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createRetention());
    });
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "label");
    \u0275\u0275text(7, "Fecha de Emisi\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function RetentionsComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRetention.issueDate, $event) || (ctx_r1.newRetention.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "label");
    \u0275\u0275text(11, "C\xF3digo de Retenci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function RetentionsComponent_div_8_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRetention.retentionCode, $event) || (ctx_r1.newRetention.retentionCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, RetentionsComponent_div_8_option_13_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "label");
    \u0275\u0275text(17, "Identificaci\xF3n del Proveedor *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function RetentionsComponent_div_8_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRetention.supplierIdentification, $event) || (ctx_r1.newRetention.supplierIdentification = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 11)(20, "label");
    \u0275\u0275text(21, "Nombre del Proveedor *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RetentionsComponent_div_8_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRetention.supplierName, $event) || (ctx_r1.newRetention.supplierName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 10)(24, "div", 11)(25, "label");
    \u0275\u0275text(26, "Base Imponible *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function RetentionsComponent_div_8_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRetention.retentionBase, $event) || (ctx_r1.newRetention.retentionBase = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 11)(29, "label");
    \u0275\u0275text(30, "Porcentaje de Retenci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function RetentionsComponent_div_8_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newRetention.retentionPercentage, $event) || (ctx_r1.newRetention.retentionPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "label");
    \u0275\u0275text(34, "Monto de Retenci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 19);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 20)(38, "button", 21);
    \u0275\u0275listener("click", function RetentionsComponent_div_8_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm = false);
    });
    \u0275\u0275text(39, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 22);
    \u0275\u0275text(41, "Crear Retenci\xF3n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRetention.issueDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRetention.retentionCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.retentionCodes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRetention.supplierIdentification);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRetention.supplierName);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRetention.retentionBase);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRetention.retentionPercentage);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(36, 8, ctx_r1.calculateRetentionAmount(), "1.2-2"));
  }
}
function RetentionsComponent_tr_31_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 24);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const retention_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(retention_r4.retentionNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, retention_r4.issueDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(retention_r4.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(retention_r4.retentionCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 10, retention_r4.retentionBase, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 13, retention_r4.retentionAmount, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(retention_r4.status);
  }
}
var RetentionsComponent = class _RetentionsComponent {
  taxService;
  retentions = [];
  showCreateForm = false;
  newRetention = {
    issueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    supplierIdentification: "",
    supplierName: "",
    retentionCode: "312",
    retentionBase: 0,
    retentionPercentage: 0
  };
  retentionCodes = [
    { code: "312", name: "Renta - Servicios Profesionales" },
    { code: "344", name: "Renta - Arrendamientos" },
    { code: "401", name: "IVA - Servicios" }
  ];
  constructor(taxService) {
    this.taxService = taxService;
  }
  ngOnInit() {
    this.loadRetentions();
  }
  loadRetentions() {
    this.taxService.getRetentions().subscribe({
      next: (data) => {
        this.retentions = data;
      },
      error: (error) => {
        console.error("Error loading retentions:", error);
      }
    });
  }
  createRetention() {
    this.taxService.createRetention(this.newRetention).subscribe({
      next: () => {
        alert("Retenci\xF3n creada exitosamente");
        this.showCreateForm = false;
        this.resetForm();
        this.loadRetentions();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear la retenci\xF3n");
      }
    });
  }
  resetForm() {
    this.newRetention = {
      issueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      supplierIdentification: "",
      supplierName: "",
      retentionCode: "312",
      retentionBase: 0,
      retentionPercentage: 0
    };
  }
  calculateRetentionAmount() {
    return this.newRetention.retentionBase * this.newRetention.retentionPercentage / 100;
  }
  static \u0275fac = function RetentionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RetentionsComponent)(\u0275\u0275directiveInject(TaxService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RetentionsComponent, selectors: [["app-retentions"]], decls: 32, vars: 2, consts: [[1, "retentions-container"], [1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], ["class", "create-form card", 4, "ngIf"], [1, "retentions-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "create-form", "card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "date", "name", "issueDate", "required", "", 3, "ngModelChange", "ngModel"], ["name", "retentionCode", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "supplierIdentification", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "supplierName", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "retentionBase", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "retentionPercentage", "step", "0.01", "min", "0", "max", "100", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "readonly", "", 1, "readonly", 3, "value"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"], [1, "badge", "badge-success"]], template: function RetentionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Retenciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function RetentionsComponent_Template_button_click_4_listener() {
        return ctx.showCreateForm = !ctx.showCreateForm;
      });
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Nueva Retenci\xF3n ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, RetentionsComponent_div_8_Template, 42, 11, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "Listado de Retenciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "table")(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "N\xFAmero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Proveedor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "C\xF3digo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Base");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Monto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Estado");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody");
      \u0275\u0275template(31, RetentionsComponent_tr_31_Template, 19, 16, "tr", 7);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.retentions);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.retentions-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=retentions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RetentionsComponent, [{
    type: Component,
    args: [{ selector: "app-retentions", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="retentions-container">\r
  <div class="page-header">\r
    <h1>Retenciones</h1>\r
    <button class="btn btn-primary" (click)="showCreateForm = !showCreateForm">\r
      <span class="material-icons">add</span>\r
      Nueva Retenci\xF3n\r
    </button>\r
  </div>\r
\r
  <div *ngIf="showCreateForm" class="create-form card">\r
    <h2>Crear Retenci\xF3n</h2>\r
    <form (ngSubmit)="createRetention()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Fecha de Emisi\xF3n *</label>\r
          <input type="date" [(ngModel)]="newRetention.issueDate" name="issueDate" required />\r
        </div>\r
        <div class="form-group">\r
          <label>C\xF3digo de Retenci\xF3n *</label>\r
          <select [(ngModel)]="newRetention.retentionCode" name="retentionCode" required>\r
            <option *ngFor="let code of retentionCodes" [value]="code.code">\r
              {{ code.code }} - {{ code.name }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Identificaci\xF3n del Proveedor *</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="newRetention.supplierIdentification"\r
            name="supplierIdentification"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Nombre del Proveedor *</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="newRetention.supplierName"\r
            name="supplierName"\r
            required\r
          />\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Base Imponible *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newRetention.retentionBase"\r
            name="retentionBase"\r
            step="0.01"\r
            min="0"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Porcentaje de Retenci\xF3n *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newRetention.retentionPercentage"\r
            name="retentionPercentage"\r
            step="0.01"\r
            min="0"\r
            max="100"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Monto de Retenci\xF3n</label>\r
          <input\r
            type="text"\r
            [value]="calculateRetentionAmount() | number: '1.2-2'"\r
            readonly\r
            class="readonly"\r
          />\r
        </div>\r
      </div>\r
\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showCreateForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Crear Retenci\xF3n</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="retentions-list card">\r
    <h2>Listado de Retenciones</h2>\r
    <div class="table-container">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>N\xFAmero</th>\r
            <th>Fecha</th>\r
            <th>Proveedor</th>\r
            <th>C\xF3digo</th>\r
            <th>Base</th>\r
            <th>Monto</th>\r
            <th>Estado</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let retention of retentions">\r
            <td>{{ retention.retentionNumber }}</td>\r
            <td>{{ retention.issueDate | date: 'dd/MM/yyyy' }}</td>\r
            <td>{{ retention.supplierName }}</td>\r
            <td>{{ retention.retentionCode }}</td>\r
            <td>{{ retention.retentionBase | number: '1.2-2' }}</td>\r
            <td>{{ retention.retentionAmount | number: '1.2-2' }}</td>\r
            <td>\r
              <span class="badge badge-success">{{ retention.status }}</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/retentions/retentions.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.retentions-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=retentions.component.css.map */\n"] }]
  }], () => [{ type: TaxService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RetentionsComponent, { className: "RetentionsComponent", filePath: "src/app/pages/retentions/retentions.component.ts", lineNumber: 14 });
})();
export {
  RetentionsComponent
};
//# sourceMappingURL=chunk-YE2FGNV2.js.map
