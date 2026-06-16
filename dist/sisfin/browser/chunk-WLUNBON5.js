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
  NgForOf,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/ats/ats.component.ts
function ATSComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r1 = ctx.$implicit;
    \u0275\u0275property("value", month_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r1.name, " ");
  }
}
function ATSComponent_tr_43_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td")(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ats_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ats_r2.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ats_r2.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.months[ats_r2.month - 1].name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ats_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 5, ats_r2.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
var ATSComponent = class _ATSComponent {
  taxService;
  atsList = [];
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  loading = false;
  months = [
    { value: 1, name: "Enero" },
    { value: 2, name: "Febrero" },
    { value: 3, name: "Marzo" },
    { value: 4, name: "Abril" },
    { value: 5, name: "Mayo" },
    { value: 6, name: "Junio" },
    { value: 7, name: "Julio" },
    { value: 8, name: "Agosto" },
    { value: 9, name: "Septiembre" },
    { value: 10, name: "Octubre" },
    { value: 11, name: "Noviembre" },
    { value: 12, name: "Diciembre" }
  ];
  constructor(taxService) {
    this.taxService = taxService;
  }
  ngOnInit() {
    this.loadATS();
  }
  loadATS() {
    this.taxService.getATS(this.selectedYear, this.selectedMonth).subscribe({
      next: (data) => {
        this.atsList = data;
      },
      error: (error) => {
        console.error("Error loading ATS:", error);
      }
    });
  }
  generateATS() {
    this.loading = true;
    this.taxService.generateATS(this.selectedYear, this.selectedMonth).subscribe({
      next: () => {
        alert("ATS generado exitosamente");
        this.loading = false;
        this.loadATS();
      },
      error: (error) => {
        alert(error.error?.message || "Error al generar el ATS");
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ATSComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ATSComponent)(\u0275\u0275directiveInject(TaxService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ATSComponent, selectors: [["app-ats"]], decls: 44, vars: 7, consts: [[1, "ats-container"], [1, "page-header"], [1, "filters", "card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "number", "name", "year", "required", "", 3, "ngModelChange", "ngModel", "min", "max"], ["name", "month", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "material-icons"], [1, "ats-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [3, "value"], [1, "badge", "badge-success"]], template: function ATSComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Anexo Transaccional Simplificado (ATS)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "h2");
      \u0275\u0275text(6, "Generar ATS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function ATSComponent_Template_form_ngSubmit_7_listener() {
        return ctx.generateATS();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label");
      \u0275\u0275text(11, "A\xF1o *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ATSComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "label");
      \u0275\u0275text(15, "Mes *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ATSComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275template(17, ATSComponent_option_17_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 5)(19, "label");
      \u0275\u0275text(20, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 9)(22, "span", 10);
      \u0275\u0275text(23, "file_download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Generar ATS ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 11)(26, "h2");
      \u0275\u0275text(27, "ATS Generados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "table")(30, "thead")(31, "tr")(32, "th");
      \u0275\u0275text(33, "Per\xEDodo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "A\xF1o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Mes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Fecha de Generaci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "tbody");
      \u0275\u0275template(43, ATSComponent_tr_43_Template, 13, 8, "tr", 13);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
      \u0275\u0275property("min", 2020)("max", 2030);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.months);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.atsList);
    }
  }, dependencies: [CommonModule, NgForOf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: ["\n\n.ats-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=ats.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ATSComponent, [{
    type: Component,
    args: [{ selector: "app-ats", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="ats-container">
  <div class="page-header">
    <h1>Anexo Transaccional Simplificado (ATS)</h1>
  </div>

  <div class="filters card">
    <h2>Generar ATS</h2>
    <form (ngSubmit)="generateATS()">
      <div class="form-row">
        <div class="form-group">
          <label>A\xF1o *</label>
          <input
            type="number"
            [(ngModel)]="selectedYear"
            name="year"
            [min]="2020"
            [max]="2030"
            required
          />
        </div>
        <div class="form-group">
          <label>Mes *</label>
          <select [(ngModel)]="selectedMonth" name="month" required>
            <option *ngFor="let month of months" [value]="month.value">
              {{ month.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>&nbsp;</label>
          <button type="submit" class="btn btn-primary" [disabled]="loading">
            <span class="material-icons">file_download</span>
            Generar ATS
          </button>
        </div>
      </div>
    </form>
  </div>

  <div class="ats-list card">
    <h2>ATS Generados</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Per\xEDodo</th>
            <th>A\xF1o</th>
            <th>Mes</th>
            <th>Estado</th>
            <th>Fecha de Generaci\xF3n</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let ats of atsList">
            <td>{{ ats.period }}</td>
            <td>{{ ats.year }}</td>
            <td>{{ months[ats.month - 1].name }}</td>
            <td>
              <span class="badge badge-success">{{ ats.status }}</span>
            </td>
            <td>{{ ats.createdAt | date: 'dd/MM/yyyy HH:mm' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

`, styles: ["/* src/app/pages/ats/ats.component.scss */\n.ats-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=ats.component.css.map */\n"] }]
  }], () => [{ type: TaxService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ATSComponent, { className: "ATSComponent", filePath: "src/app/pages/ats/ats.component.ts", lineNumber: 14 });
})();
export {
  ATSComponent
};
//# sourceMappingURL=chunk-WLUNBON5.js.map
