import {
  InventoryService
} from "./chunk-RXEC6QSF.js";
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

// src/app/pages/inventory/inventory.component.ts
function InventoryComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h2");
    \u0275\u0275text(2, "Crear Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 15);
    \u0275\u0275listener("ngSubmit", function InventoryComponent_div_13_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createProduct());
    });
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 10)(6, "label");
    \u0275\u0275text(7, "C\xF3digo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.code, $event) || (ctx_r1.newProduct.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "label");
    \u0275\u0275text(11, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_13_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.name, $event) || (ctx_r1.newProduct.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Unidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_13_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.unit, $event) || (ctx_r1.newProduct.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 10)(19, "label");
    \u0275\u0275text(20, "Stock Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_13_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.initialStock, $event) || (ctx_r1.newProduct.initialStock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "label");
    \u0275\u0275text(24, "Costo Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_13_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newProduct.initialCost, $event) || (ctx_r1.newProduct.initialCost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 22)(27, "button", 23);
    \u0275\u0275listener("click", function InventoryComponent_div_13_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProductForm = false);
    });
    \u0275\u0275text(28, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 24);
    \u0275\u0275text(30, "Crear Producto");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.unit);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.initialStock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newProduct.initialCost);
  }
}
function InventoryComponent_div_14_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275property("value", product_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", product_r4.code, " - ", product_r4.name, " ");
  }
}
function InventoryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h2");
    \u0275\u0275text(2, "Registrar Movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 15);
    \u0275\u0275listener("ngSubmit", function InventoryComponent_div_14_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createMovement());
    });
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 10)(6, "label");
    \u0275\u0275text(7, "Producto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_14_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMovement.productId, $event) || (ctx_r1.newMovement.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 12);
    \u0275\u0275text(10, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InventoryComponent_div_14_option_11_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "label");
    \u0275\u0275text(14, "Tipo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_14_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMovement.type, $event) || (ctx_r1.newMovement.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 27);
    \u0275\u0275text(17, "Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 28);
    \u0275\u0275text(19, "Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 29);
    \u0275\u0275text(21, "Ajuste");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 10)(23, "label");
    \u0275\u0275text(24, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_14_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMovement.date, $event) || (ctx_r1.newMovement.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Cantidad *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_14_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMovement.quantity, $event) || (ctx_r1.newMovement.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Costo Unitario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_div_14_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMovement.unitCost, $event) || (ctx_r1.newMovement.unitCost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 22)(36, "button", 23);
    \u0275\u0275listener("click", function InventoryComponent_div_14_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showMovementForm = false);
    });
    \u0275\u0275text(37, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 24);
    \u0275\u0275text(39, "Registrar Movimiento");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMovement.productId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.products);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMovement.type);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMovement.date);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMovement.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMovement.unitCost);
  }
}
function InventoryComponent_tr_35_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.currentStock);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 10, product_r5.averageCost, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", product_r5.isActive)("badge-danger", !product_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r5.isActive ? "Activo" : "Inactivo", " ");
  }
}
function InventoryComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("value", product_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", product_r6.code, " - ", product_r6.name, " ");
  }
}
function InventoryComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const movement_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, movement_r7.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(movement_r7.product == null ? null : movement_r7.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", movement_r7.type === "IN" ? "Entrada" : movement_r7.type === "OUT" ? "Salida" : "Ajuste", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(movement_r7.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, movement_r7.unitCost, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 12, movement_r7.totalCost, "1.2-2"));
  }
}
var InventoryComponent = class _InventoryComponent {
  inventoryService;
  products = [];
  movements = [];
  showProductForm = false;
  showMovementForm = false;
  selectedProductId = "";
  newProduct = {
    code: "",
    name: "",
    unit: "UN",
    initialStock: 0,
    initialCost: 0
  };
  newMovement = {
    productId: "",
    type: "IN",
    quantity: 0,
    unitCost: 0,
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  };
  constructor(inventoryService) {
    this.inventoryService = inventoryService;
  }
  ngOnInit() {
    this.loadProducts();
    this.loadMovements();
  }
  loadProducts() {
    this.inventoryService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error("Error loading products:", error);
      }
    });
  }
  loadMovements() {
    this.inventoryService.getMovements(this.selectedProductId || void 0).subscribe({
      next: (data) => {
        this.movements = data;
      },
      error: (error) => {
        console.error("Error loading movements:", error);
      }
    });
  }
  createProduct() {
    this.inventoryService.createProduct(this.newProduct).subscribe({
      next: () => {
        alert("Producto creado exitosamente");
        this.showProductForm = false;
        this.resetProductForm();
        this.loadProducts();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear el producto");
      }
    });
  }
  createMovement() {
    this.inventoryService.createMovement(this.newMovement).subscribe({
      next: () => {
        alert("Movimiento creado exitosamente");
        this.showMovementForm = false;
        this.resetMovementForm();
        this.loadMovements();
        this.loadProducts();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear el movimiento");
      }
    });
  }
  resetProductForm() {
    this.newProduct = {
      code: "",
      name: "",
      unit: "UN",
      initialStock: 0,
      initialCost: 0
    };
  }
  resetMovementForm() {
    this.newMovement = {
      productId: "",
      type: "IN",
      quantity: 0,
      unitCost: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
  }
  onProductFilterChange() {
    this.loadMovements();
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)(\u0275\u0275directiveInject(InventoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], decls: 64, vars: 6, consts: [[1, "inventory-container"], [1, "page-header"], [1, "btn", "btn-secondary", 3, "click"], [1, "material-icons"], [1, "btn", "btn-primary", 3, "click"], ["class", "create-form card", 4, "ngIf"], [1, "products-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "movements-list", "card"], [1, "form-group"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "create-form", "card"], [3, "ngSubmit"], [1, "form-row"], ["type", "text", "name", "code", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "unit", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "initialStock", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "initialCost", "step", "0.01", "min", "0", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["name", "productId", "required", "", 3, "ngModelChange", "ngModel"], ["name", "type", "required", "", 3, "ngModelChange", "ngModel"], ["value", "IN"], ["value", "OUT"], ["value", "ADJUSTMENT"], ["type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "quantity", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "unitCost", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "badge"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Inventario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 2);
      \u0275\u0275listener("click", function InventoryComponent_Template_button_click_5_listener() {
        return ctx.showMovementForm = !ctx.showMovementForm;
      });
      \u0275\u0275elementStart(6, "span", 3);
      \u0275\u0275text(7, "swap_vert");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Movimiento ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function InventoryComponent_Template_button_click_9_listener() {
        return ctx.showProductForm = !ctx.showProductForm;
      });
      \u0275\u0275elementStart(10, "span", 3);
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Nuevo Producto ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, InventoryComponent_div_13_Template, 31, 5, "div", 5)(14, InventoryComponent_div_14_Template, 40, 6, "div", 5);
      \u0275\u0275elementStart(15, "div", 6)(16, "h2");
      \u0275\u0275text(17, "Productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7)(19, "table")(20, "thead")(21, "tr")(22, "th");
      \u0275\u0275text(23, "C\xF3digo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Unidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Costo Promedio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Estado");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, InventoryComponent_tr_35_Template, 15, 13, "tr", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 9)(37, "h2");
      \u0275\u0275text(38, "Movimientos de Inventario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 10)(40, "label");
      \u0275\u0275text(41, "Filtrar por Producto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_select_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedProductId, $event) || (ctx.selectedProductId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InventoryComponent_Template_select_change_42_listener() {
        return ctx.onProductFilterChange();
      });
      \u0275\u0275elementStart(43, "option", 12);
      \u0275\u0275text(44, "Todos");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, InventoryComponent_option_45_Template, 2, 3, "option", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 7)(47, "table")(48, "thead")(49, "tr")(50, "th");
      \u0275\u0275text(51, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th");
      \u0275\u0275text(53, "Producto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th");
      \u0275\u0275text(55, "Tipo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, "Cantidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Costo Unitario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Costo Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275template(63, InventoryComponent_tr_63_Template, 17, 15, "tr", 8);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.showProductForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMovementForm);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedProductId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.movements);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.inventory-container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n/*# sourceMappingURL=inventory.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryComponent, [{
    type: Component,
    args: [{ selector: "app-inventory", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="inventory-container">\r
  <div class="page-header">\r
    <h1>Inventario</h1>\r
    <div>\r
      <button class="btn btn-secondary" (click)="showMovementForm = !showMovementForm">\r
        <span class="material-icons">swap_vert</span>\r
        Movimiento\r
      </button>\r
      <button class="btn btn-primary" (click)="showProductForm = !showProductForm">\r
        <span class="material-icons">add</span>\r
        Nuevo Producto\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="showProductForm" class="create-form card">\r
    <h2>Crear Producto</h2>\r
    <form (ngSubmit)="createProduct()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>C\xF3digo *</label>\r
          <input type="text" [(ngModel)]="newProduct.code" name="code" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Nombre *</label>\r
          <input type="text" [(ngModel)]="newProduct.name" name="name" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Unidad *</label>\r
          <input type="text" [(ngModel)]="newProduct.unit" name="unit" required />\r
        </div>\r
      </div>\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Stock Inicial</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newProduct.initialStock"\r
            name="initialStock"\r
            min="0"\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Costo Inicial</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newProduct.initialCost"\r
            name="initialCost"\r
            step="0.01"\r
            min="0"\r
          />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showProductForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Crear Producto</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div *ngIf="showMovementForm" class="create-form card">\r
    <h2>Registrar Movimiento</h2>\r
    <form (ngSubmit)="createMovement()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Producto *</label>\r
          <select [(ngModel)]="newMovement.productId" name="productId" required>\r
            <option value="">Seleccione...</option>\r
            <option *ngFor="let product of products" [value]="product.id">\r
              {{ product.code }} - {{ product.name }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Tipo *</label>\r
          <select [(ngModel)]="newMovement.type" name="type" required>\r
            <option value="IN">Entrada</option>\r
            <option value="OUT">Salida</option>\r
            <option value="ADJUSTMENT">Ajuste</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Fecha *</label>\r
          <input type="date" [(ngModel)]="newMovement.date" name="date" required />\r
        </div>\r
      </div>\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Cantidad *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newMovement.quantity"\r
            name="quantity"\r
            min="0"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Costo Unitario *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newMovement.unitCost"\r
            name="unitCost"\r
            step="0.01"\r
            min="0"\r
            required\r
          />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showMovementForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Registrar Movimiento</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="products-list card">\r
    <h2>Productos</h2>\r
    <div class="table-container">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>C\xF3digo</th>\r
            <th>Nombre</th>\r
            <th>Unidad</th>\r
            <th>Stock</th>\r
            <th>Costo Promedio</th>\r
            <th>Estado</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let product of products">\r
            <td>{{ product.code }}</td>\r
            <td>{{ product.name }}</td>\r
            <td>{{ product.unit }}</td>\r
            <td>{{ product.currentStock }}</td>\r
            <td>{{ product.averageCost | number: '1.2-2' }}</td>\r
            <td>\r
              <span\r
                class="badge"\r
                [class.badge-success]="product.isActive"\r
                [class.badge-danger]="!product.isActive"\r
              >\r
                {{ product.isActive ? 'Activo' : 'Inactivo' }}\r
              </span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <div class="movements-list card">\r
    <h2>Movimientos de Inventario</h2>\r
    <div class="form-group">\r
      <label>Filtrar por Producto</label>\r
      <select [(ngModel)]="selectedProductId" (change)="onProductFilterChange()">\r
        <option value="">Todos</option>\r
        <option *ngFor="let product of products" [value]="product.id">\r
          {{ product.code }} - {{ product.name }}\r
        </option>\r
      </select>\r
    </div>\r
    <div class="table-container">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>Fecha</th>\r
            <th>Producto</th>\r
            <th>Tipo</th>\r
            <th>Cantidad</th>\r
            <th>Costo Unitario</th>\r
            <th>Costo Total</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let movement of movements">\r
            <td>{{ movement.date | date: 'dd/MM/yyyy' }}</td>\r
            <td>{{ movement.product?.name }}</td>\r
            <td>\r
              <span class="badge">\r
                {{ movement.type === 'IN' ? 'Entrada' : movement.type === 'OUT' ? 'Salida' : 'Ajuste' }}\r
              </span>\r
            </td>\r
            <td>{{ movement.quantity }}</td>\r
            <td>{{ movement.unitCost | number: '1.2-2' }}</td>\r
            <td>{{ movement.totalCost | number: '1.2-2' }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/inventory/inventory.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.inventory-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header div {\n  display: flex;\n  gap: 12px;\n}\n/*# sourceMappingURL=inventory.component.css.map */\n"] }]
  }], () => [{ type: InventoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src/app/pages/inventory/inventory.component.ts", lineNumber: 19 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-3J4T7JZ6.js.map
