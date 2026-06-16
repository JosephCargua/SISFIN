import {
  AutomationService
} from "./chunk-3DP6VKHZ.js";
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/period-locks/period-locks.component.ts
function PeriodLocksComponent_div_8_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    \u0275\u0275property("value", month_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r3.name, " ");
  }
}
function PeriodLocksComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2");
    \u0275\u0275text(2, "Bloquear Per\xEDodo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 9);
    \u0275\u0275listener("ngSubmit", function PeriodLocksComponent_div_8_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createLock());
    });
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "label");
    \u0275\u0275text(7, "A\xF1o *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function PeriodLocksComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLock.year, $event) || (ctx_r1.newLock.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "label");
    \u0275\u0275text(11, "Mes *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function PeriodLocksComponent_div_8_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLock.month, $event) || (ctx_r1.newLock.month = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, PeriodLocksComponent_div_8_option_13_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
    \u0275\u0275listener("click", function PeriodLocksComponent_div_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm = false);
    });
    \u0275\u0275text(16, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275text(18, "Bloquear Per\xEDodo");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLock.year);
    \u0275\u0275property("min", 2020)("max", 2030);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLock.month);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.months);
  }
}
function PeriodLocksComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 20);
    \u0275\u0275listener("click", function PeriodLocksComponent_tr_29_Template_button_click_14_listener() {
      const lock_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLock(lock_r5.id));
    });
    \u0275\u0275elementStart(15, "span", 3);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const lock_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lock_r5.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.months[lock_r5.month - 1].name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", lock_r5.isLocked)("badge-danger", !lock_r5.isLocked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lock_r5.isLocked ? "Bloqueado" : "Desbloqueado", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lock_r5.lockedBy || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 10, lock_r5.lockedAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(lock_r5.isLocked ? "lock_open" : "lock");
  }
}
var PeriodLocksComponent = class _PeriodLocksComponent {
  automationService;
  periodLocks = [];
  showCreateForm = false;
  newLock = {
    year: (/* @__PURE__ */ new Date()).getFullYear(),
    month: (/* @__PURE__ */ new Date()).getMonth() + 1
  };
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
  constructor(automationService) {
    this.automationService = automationService;
  }
  ngOnInit() {
    this.loadPeriodLocks();
  }
  loadPeriodLocks() {
    this.automationService.getPeriodLocks().subscribe({
      next: (data) => {
        this.periodLocks = data;
      },
      error: (error) => {
        console.error("Error loading period locks:", error);
      }
    });
  }
  createLock() {
    this.automationService.createPeriodLock(this.newLock).subscribe({
      next: () => {
        alert("Per\xEDodo bloqueado exitosamente");
        this.showCreateForm = false;
        this.resetForm();
        this.loadPeriodLocks();
      },
      error: (error) => {
        alert(error.error?.message || "Error al bloquear el per\xEDodo");
      }
    });
  }
  toggleLock(id) {
    if (confirm("\xBFEst\xE1 seguro de cambiar el estado del bloqueo?")) {
      this.automationService.toggleLock(id).subscribe({
        next: () => {
          alert("Estado actualizado exitosamente");
          this.loadPeriodLocks();
        },
        error: (error) => {
          alert(error.error?.message || "Error al actualizar el estado");
        }
      });
    }
  }
  resetForm() {
    this.newLock = {
      year: (/* @__PURE__ */ new Date()).getFullYear(),
      month: (/* @__PURE__ */ new Date()).getMonth() + 1
    };
  }
  static \u0275fac = function PeriodLocksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PeriodLocksComponent)(\u0275\u0275directiveInject(AutomationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PeriodLocksComponent, selectors: [["app-period-locks"]], decls: 30, vars: 2, consts: [[1, "period-locks-container"], [1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], ["class", "create-form card", 4, "ngIf"], [1, "locks-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "create-form", "card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "number", "name", "year", "required", "", 3, "ngModelChange", "ngModel", "min", "max"], ["name", "month", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"], [1, "badge"], ["title", "Cambiar Estado", 1, "btn-icon", 3, "click"]], template: function PeriodLocksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Cierre de Per\xEDodo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function PeriodLocksComponent_Template_button_click_4_listener() {
        return ctx.showCreateForm = !ctx.showCreateForm;
      });
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Bloquear Per\xEDodo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, PeriodLocksComponent_div_8_Template, 19, 5, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "Per\xEDodos Bloqueados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "table")(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "A\xF1o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Mes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Bloqueado Por");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Fecha de Bloqueo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "tbody");
      \u0275\u0275template(29, PeriodLocksComponent_tr_29_Template, 17, 13, "tr", 7);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.periodLocks);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.period-locks-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=period-locks.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PeriodLocksComponent, [{
    type: Component,
    args: [{ selector: "app-period-locks", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="period-locks-container">
  <div class="page-header">
    <h1>Cierre de Per\xEDodo</h1>
    <button class="btn btn-primary" (click)="showCreateForm = !showCreateForm">
      <span class="material-icons">lock</span>
      Bloquear Per\xEDodo
    </button>
  </div>

  <div *ngIf="showCreateForm" class="create-form card">
    <h2>Bloquear Per\xEDodo</h2>
    <form (ngSubmit)="createLock()">
      <div class="form-row">
        <div class="form-group">
          <label>A\xF1o *</label>
          <input
            type="number"
            [(ngModel)]="newLock.year"
            name="year"
            [min]="2020"
            [max]="2030"
            required
          />
        </div>
        <div class="form-group">
          <label>Mes *</label>
          <select [(ngModel)]="newLock.month" name="month" required>
            <option *ngFor="let month of months" [value]="month.value">
              {{ month.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-secondary" (click)="showCreateForm = false">
          Cancelar
        </button>
        <button type="submit" class="btn btn-primary">Bloquear Per\xEDodo</button>
      </div>
    </form>
  </div>

  <div class="locks-list card">
    <h2>Per\xEDodos Bloqueados</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>A\xF1o</th>
            <th>Mes</th>
            <th>Estado</th>
            <th>Bloqueado Por</th>
            <th>Fecha de Bloqueo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let lock of periodLocks">
            <td>{{ lock.year }}</td>
            <td>{{ months[lock.month - 1].name }}</td>
            <td>
              <span
                class="badge"
                [class.badge-success]="lock.isLocked"
                [class.badge-danger]="!lock.isLocked"
              >
                {{ lock.isLocked ? 'Bloqueado' : 'Desbloqueado' }}
              </span>
            </td>
            <td>{{ lock.lockedBy || '-' }}</td>
            <td>{{ lock.lockedAt | date: 'dd/MM/yyyy HH:mm' }}</td>
            <td>
              <button class="btn-icon" (click)="toggleLock(lock.id)" title="Cambiar Estado">
                <span class="material-icons">{{ lock.isLocked ? 'lock_open' : 'lock' }}</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

`, styles: ["/* src/app/pages/period-locks/period-locks.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.period-locks-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn-icon:hover {\n  background: #cbd5e1;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n/*# sourceMappingURL=period-locks.component.css.map */\n"] }]
  }], () => [{ type: AutomationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PeriodLocksComponent, { className: "PeriodLocksComponent", filePath: "src/app/pages/period-locks/period-locks.component.ts", lineNumber: 14 });
})();
export {
  PeriodLocksComponent
};
//# sourceMappingURL=chunk-JEMTKTPG.js.map
