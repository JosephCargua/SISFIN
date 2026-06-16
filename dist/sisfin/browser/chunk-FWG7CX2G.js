import {
  AutomationService
} from "./chunk-3DP6VKHZ.js";
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/cost-centers/cost-centers.component.ts
function CostCentersComponent_div_8_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const center_r3 = ctx.$implicit;
    \u0275\u0275property("value", center_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", center_r3.code, " - ", center_r3.name, " ");
  }
}
function CostCentersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Crear Centro de Costo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function CostCentersComponent_div_8_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCostCenter());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "label");
    \u0275\u0275text(7, "C\xF3digo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CostCentersComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCostCenter.code, $event) || (ctx_r1.newCostCenter.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "label");
    \u0275\u0275text(11, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function CostCentersComponent_div_8_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCostCenter.name, $event) || (ctx_r1.newCostCenter.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 14)(14, "label");
    \u0275\u0275text(15, "Centro Padre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function CostCentersComponent_div_8_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCostCenter.parentId, $event) || (ctx_r1.newCostCenter.parentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 18);
    \u0275\u0275text(18, "Ninguno");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CostCentersComponent_div_8_option_19_Template, 2, 3, "option", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function CostCentersComponent_div_8_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm = false);
    });
    \u0275\u0275text(22, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275text(24, "Crear Centro de Costo");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCostCenter.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCostCenter.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCostCenter.parentId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.costCenters);
  }
}
function CostCentersComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const center_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(center_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(center_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", center_r4.isActive)("badge-danger", !center_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", center_r4.isActive ? "Activo" : "Inactivo", " ");
  }
}
function CostCentersComponent_div_28_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.name);
  }
}
function CostCentersComponent_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, CostCentersComponent_div_28_div_6_div_1_Template, 6, 2, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const center_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", center_r6.children);
  }
}
function CostCentersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CostCentersComponent_div_28_div_6_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const center_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(center_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(center_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", center_r6.children && center_r6.children.length > 0);
  }
}
var CostCentersComponent = class _CostCentersComponent {
  automationService;
  costCenters = [];
  costCentersHierarchy = [];
  showCreateForm = false;
  newCostCenter = {
    code: "",
    name: "",
    parentId: null
  };
  constructor(automationService) {
    this.automationService = automationService;
  }
  ngOnInit() {
    this.loadCostCenters();
    this.loadHierarchy();
  }
  loadCostCenters() {
    this.automationService.getCostCenters().subscribe({
      next: (data) => {
        this.costCenters = data;
      },
      error: (error) => {
        console.error("Error loading cost centers:", error);
      }
    });
  }
  loadHierarchy() {
    this.automationService.getCostCentersHierarchy().subscribe({
      next: (data) => {
        this.costCentersHierarchy = data;
      },
      error: (error) => {
        console.error("Error loading hierarchy:", error);
      }
    });
  }
  createCostCenter() {
    this.automationService.createCostCenter(this.newCostCenter).subscribe({
      next: () => {
        alert("Centro de Costo creado exitosamente");
        this.showCreateForm = false;
        this.resetForm();
        this.loadCostCenters();
        this.loadHierarchy();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear el centro de costo");
      }
    });
  }
  resetForm() {
    this.newCostCenter = {
      code: "",
      name: "",
      parentId: null
    };
  }
  static \u0275fac = function CostCentersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CostCentersComponent)(\u0275\u0275directiveInject(AutomationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CostCentersComponent, selectors: [["app-cost-centers"]], decls: 29, vars: 3, consts: [[1, "cost-centers-container"], [1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], ["class", "create-form card", 4, "ngIf"], [1, "cost-centers-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "hierarchy-view", "card"], [1, "hierarchy-tree"], ["class", "tree-item", 4, "ngFor", "ngForOf"], [1, "create-form", "card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "code", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["name", "parentId", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "badge"], [1, "tree-item"], [1, "tree-node"], [1, "tree-code"], [1, "tree-name"], ["class", "tree-children", 4, "ngIf"], [1, "tree-children"], ["class", "tree-item child", 4, "ngFor", "ngForOf"], [1, "tree-item", "child"]], template: function CostCentersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Centros de Costo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CostCentersComponent_Template_button_click_4_listener() {
        return ctx.showCreateForm = !ctx.showCreateForm;
      });
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Nuevo Centro de Costo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, CostCentersComponent_div_8_Template, 25, 5, "div", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "h2");
      \u0275\u0275text(11, "Lista de Centros de Costo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "table")(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "C\xF3digo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Estado");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "tbody");
      \u0275\u0275template(23, CostCentersComponent_tr_23_Template, 8, 7, "tr", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 8)(25, "h2");
      \u0275\u0275text(26, "Vista Jer\xE1rquica");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 9);
      \u0275\u0275template(28, CostCentersComponent_div_28_Template, 7, 3, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.costCenters);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.costCentersHierarchy);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cost-centers-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border-left: 3px solid #3b82f6;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 100px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-name[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item.child[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item.child[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%] {\n  border-left-color: #94a3b8;\n  background: #ffffff;\n}\n.hierarchy-tree[_ngcontent-%COMP%]   .tree-item.child[_ngcontent-%COMP%]   .tree-node[_ngcontent-%COMP%]   .tree-code[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=cost-centers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCentersComponent, [{
    type: Component,
    args: [{ selector: "app-cost-centers", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="cost-centers-container">\r
  <div class="page-header">\r
    <h1>Centros de Costo</h1>\r
    <button class="btn btn-primary" (click)="showCreateForm = !showCreateForm">\r
      <span class="material-icons">add</span>\r
      Nuevo Centro de Costo\r
    </button>\r
  </div>\r
\r
  <div *ngIf="showCreateForm" class="create-form card">\r
    <h2>Crear Centro de Costo</h2>\r
    <form (ngSubmit)="createCostCenter()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>C\xF3digo *</label>\r
          <input type="text" [(ngModel)]="newCostCenter.code" name="code" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Nombre *</label>\r
          <input type="text" [(ngModel)]="newCostCenter.name" name="name" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Centro Padre</label>\r
          <select [(ngModel)]="newCostCenter.parentId" name="parentId">\r
            <option [value]="null">Ninguno</option>\r
            <option *ngFor="let center of costCenters" [value]="center.id">\r
              {{ center.code }} - {{ center.name }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showCreateForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Crear Centro de Costo</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="cost-centers-list card">\r
    <h2>Lista de Centros de Costo</h2>\r
    <div class="table-container">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>C\xF3digo</th>\r
            <th>Nombre</th>\r
            <th>Estado</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let center of costCenters">\r
            <td>{{ center.code }}</td>\r
            <td>{{ center.name }}</td>\r
            <td>\r
              <span\r
                class="badge"\r
                [class.badge-success]="center.isActive"\r
                [class.badge-danger]="!center.isActive"\r
              >\r
                {{ center.isActive ? 'Activo' : 'Inactivo' }}\r
              </span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <div class="hierarchy-view card">\r
    <h2>Vista Jer\xE1rquica</h2>\r
    <div class="hierarchy-tree">\r
      <div *ngFor="let center of costCentersHierarchy" class="tree-item">\r
        <div class="tree-node">\r
          <span class="tree-code">{{ center.code }}</span>\r
          <span class="tree-name">{{ center.name }}</span>\r
        </div>\r
        <div *ngIf="center.children && center.children.length > 0" class="tree-children">\r
          <div *ngFor="let child of center.children" class="tree-item child">\r
            <div class="tree-node">\r
              <span class="tree-code">{{ child.code }}</span>\r
              <span class="tree-name">{{ child.name }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/cost-centers/cost-centers.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.cost-centers-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.hierarchy-tree .tree-item {\n  margin-bottom: 8px;\n}\n.hierarchy-tree .tree-item .tree-node {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border-left: 3px solid #3b82f6;\n}\n.hierarchy-tree .tree-item .tree-node .tree-code {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 100px;\n}\n.hierarchy-tree .tree-item .tree-node .tree-name {\n  color: #1e293b;\n}\n.hierarchy-tree .tree-item.child {\n  margin-left: 32px;\n}\n.hierarchy-tree .tree-item.child .tree-node {\n  border-left-color: #94a3b8;\n  background: #ffffff;\n}\n.hierarchy-tree .tree-item.child .tree-node .tree-code {\n  color: #64748b;\n}\n/*# sourceMappingURL=cost-centers.component.css.map */\n"] }]
  }], () => [{ type: AutomationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CostCentersComponent, { className: "CostCentersComponent", filePath: "src/app/pages/cost-centers/cost-centers.component.ts", lineNumber: 14 });
})();
export {
  CostCentersComponent
};
//# sourceMappingURL=chunk-FWG7CX2G.js.map
