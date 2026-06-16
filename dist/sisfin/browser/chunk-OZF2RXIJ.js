import {
  PayablesService
} from "./chunk-4EMRTJSM.js";
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

// src/app/pages/payables/payables.component.ts
function PayablesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Crear Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function PayablesComponent_div_13_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createSupplier());
    });
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "Identificaci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.identification, $event) || (ctx_r1.newSupplier.identification = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label");
    \u0275\u0275text(11, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_13_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSupplier.name, $event) || (ctx_r1.newSupplier.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 15)(14, "button", 16);
    \u0275\u0275listener("click", function PayablesComponent_div_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showSupplierForm = false);
    });
    \u0275\u0275text(15, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275text(17, "Crear Proveedor");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.identification);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSupplier.name);
  }
}
function PayablesComponent_div_14_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r4 = ctx.$implicit;
    \u0275\u0275property("value", supplier_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", supplier_r4.identification, " - ", supplier_r4.name, " ");
  }
}
function PayablesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Registrar Factura de Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function PayablesComponent_div_14_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createInvoice());
    });
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "Proveedor *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_14_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInvoice.supplierId, $event) || (ctx_r1.newInvoice.supplierId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 19);
    \u0275\u0275text(10, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PayablesComponent_div_14_option_11_Template, 2, 3, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 12)(13, "label");
    \u0275\u0275text(14, "N\xFAmero de Factura *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_14_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInvoice.invoiceNumber, $event) || (ctx_r1.newInvoice.invoiceNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "label");
    \u0275\u0275text(18, "Fecha de Emisi\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_14_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInvoice.issueDate, $event) || (ctx_r1.newInvoice.issueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "label");
    \u0275\u0275text(22, "Fecha de Vencimiento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_14_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInvoice.dueDate, $event) || (ctx_r1.newInvoice.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "label");
    \u0275\u0275text(27, "Subtotal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_14_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInvoice.subtotal, $event) || (ctx_r1.newInvoice.subtotal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "label");
    \u0275\u0275text(31, "IVA *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_14_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newInvoice.tax, $event) || (ctx_r1.newInvoice.tax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 12)(34, "label");
    \u0275\u0275text(35, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 26);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 15)(39, "button", 16);
    \u0275\u0275listener("click", function PayablesComponent_div_14_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showInvoiceForm = false);
    });
    \u0275\u0275text(40, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 17);
    \u0275\u0275text(42, "Registrar Factura");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInvoice.supplierId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.suppliers);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInvoice.invoiceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInvoice.issueDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInvoice.dueDate);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInvoice.subtotal);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newInvoice.tax);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(37, 8, ctx_r1.getTotal(), "1.2-2"));
  }
}
function PayablesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Registrar Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function PayablesComponent_div_15_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createPayment());
    });
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12)(6, "label");
    \u0275\u0275text(7, "Monto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_15_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPayment.amount, $event) || (ctx_r1.newPayment.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "label");
    \u0275\u0275text(11, "Fecha de Pago *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPayment.paymentDate, $event) || (ctx_r1.newPayment.paymentDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "label");
    \u0275\u0275text(15, "M\xE9todo de Pago *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PayablesComponent_div_15_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPayment.paymentMethod, $event) || (ctx_r1.newPayment.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 31);
    \u0275\u0275text(18, "Efectivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 32);
    \u0275\u0275text(20, "Transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 33);
    \u0275\u0275text(22, "Cheque");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
    \u0275\u0275listener("click", function PayablesComponent_div_15_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPaymentForm = false);
    });
    \u0275\u0275text(25, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 17);
    \u0275\u0275text(27, "Registrar Pago");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPayment.amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPayment.paymentDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPayment.paymentMethod);
  }
}
function PayablesComponent_tr_42_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PayablesComponent_tr_42_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const invoice_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPaymentForm(invoice_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "payment");
    \u0275\u0275elementEnd()();
  }
}
function PayablesComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275template(24, PayablesComponent_tr_42_button_24_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invoice_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invoice_r7.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invoice_r7.supplier == null ? null : invoice_r7.supplier.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, invoice_r7.issueDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, invoice_r7.dueDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, invoice_r7.total, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, invoice_r7.paidAmount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 21, invoice_r7.balance, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(invoice_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", invoice_r7.balance > 0);
  }
}
var PayablesComponent = class _PayablesComponent {
  payablesService;
  suppliers = [];
  invoices = [];
  showSupplierForm = false;
  showInvoiceForm = false;
  showPaymentForm = false;
  newSupplier = {
    identification: "",
    name: ""
  };
  newInvoice = {
    supplierId: "",
    invoiceNumber: "",
    issueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
    subtotal: 0,
    tax: 0
  };
  newPayment = {
    supplierInvoiceId: "",
    amount: 0,
    paymentDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    paymentMethod: "CASH"
  };
  constructor(payablesService) {
    this.payablesService = payablesService;
  }
  ngOnInit() {
    this.loadSuppliers();
    this.loadInvoices();
  }
  loadSuppliers() {
    this.payablesService.getSuppliers().subscribe({
      next: (data) => {
        this.suppliers = data;
      },
      error: (error) => {
        console.error("Error loading suppliers:", error);
      }
    });
  }
  loadInvoices() {
    this.payablesService.getSupplierInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
      },
      error: (error) => {
        console.error("Error loading invoices:", error);
      }
    });
  }
  createSupplier() {
    this.payablesService.createSupplier(this.newSupplier).subscribe({
      next: () => {
        alert("Proveedor creado exitosamente");
        this.showSupplierForm = false;
        this.resetSupplierForm();
        this.loadSuppliers();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear el proveedor");
      }
    });
  }
  createInvoice() {
    this.payablesService.createSupplierInvoice(this.newInvoice).subscribe({
      next: () => {
        alert("Factura creada exitosamente");
        this.showInvoiceForm = false;
        this.resetInvoiceForm();
        this.loadInvoices();
      },
      error: (error) => {
        alert(error.error?.message || "Error al crear la factura");
      }
    });
  }
  createPayment() {
    this.payablesService.createSupplierPayment(this.newPayment).subscribe({
      next: () => {
        alert("Pago registrado exitosamente");
        this.showPaymentForm = false;
        this.resetPaymentForm();
        this.loadInvoices();
      },
      error: (error) => {
        alert(error.error?.message || "Error al registrar el pago");
      }
    });
  }
  openPaymentForm(invoiceId) {
    this.newPayment.supplierInvoiceId = invoiceId;
    const invoice = this.invoices.find((i) => i.id === invoiceId);
    if (invoice) {
      this.newPayment.amount = invoice.balance;
    }
    this.showPaymentForm = true;
  }
  resetSupplierForm() {
    this.newSupplier = { identification: "", name: "" };
  }
  resetInvoiceForm() {
    this.newInvoice = {
      supplierId: "",
      invoiceNumber: "",
      issueDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
      subtotal: 0,
      tax: 0
    };
  }
  resetPaymentForm() {
    this.newPayment = {
      supplierInvoiceId: "",
      amount: 0,
      paymentDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      paymentMethod: "CASH"
    };
  }
  getTotal() {
    return this.newInvoice.subtotal + this.newInvoice.tax;
  }
  static \u0275fac = function PayablesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayablesComponent)(\u0275\u0275directiveInject(PayablesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayablesComponent, selectors: [["app-payables"]], decls: 43, vars: 4, consts: [[1, "payables-container"], [1, "page-header"], [1, "btn", "btn-secondary", 3, "click"], [1, "material-icons"], [1, "btn", "btn-primary", 3, "click"], ["class", "create-form card", 4, "ngIf"], [1, "invoices-list", "card"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "create-form", "card"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "identification", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["name", "supplierId", "required", "", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "invoiceNumber", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "issueDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dueDate", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "subtotal", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "tax", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "readonly", "", 1, "readonly", 3, "value"], [3, "value"], ["type", "number", "name", "amount", "step", "0.01", "min", "0", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "paymentDate", "required", "", 3, "ngModelChange", "ngModel"], ["name", "paymentMethod", "required", "", 3, "ngModelChange", "ngModel"], ["value", "CASH"], ["value", "TRANSFER"], ["value", "CHECK"], [1, "badge", "badge-success"], ["class", "btn-icon btn-success", "title", "Registrar Pago", 3, "click", 4, "ngIf"], ["title", "Registrar Pago", 1, "btn-icon", "btn-success", 3, "click"]], template: function PayablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Cuentas por Pagar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 2);
      \u0275\u0275listener("click", function PayablesComponent_Template_button_click_5_listener() {
        return ctx.showSupplierForm = !ctx.showSupplierForm;
      });
      \u0275\u0275elementStart(6, "span", 3);
      \u0275\u0275text(7, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Proveedor ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function PayablesComponent_Template_button_click_9_listener() {
        return ctx.showInvoiceForm = !ctx.showInvoiceForm;
      });
      \u0275\u0275elementStart(10, "span", 3);
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Nueva Factura ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, PayablesComponent_div_13_Template, 18, 2, "div", 5)(14, PayablesComponent_div_14_Template, 43, 11, "div", 5)(15, PayablesComponent_div_15_Template, 28, 3, "div", 5);
      \u0275\u0275elementStart(16, "div", 6)(17, "h2");
      \u0275\u0275text(18, "Facturas de Proveedores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "table")(21, "thead")(22, "tr")(23, "th");
      \u0275\u0275text(24, "N\xFAmero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Proveedor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Fecha Emisi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Vencimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Pagado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Saldo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "tbody");
      \u0275\u0275template(42, PayablesComponent_tr_42_Template, 25, 24, "tr", 8);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.showSupplierForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showInvoiceForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaymentForm);
      \u0275\u0275advance(27);
      \u0275\u0275property("ngForOf", ctx.invoices);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.payables-container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #a7f3d0;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=payables.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayablesComponent, [{
    type: Component,
    args: [{ selector: "app-payables", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="payables-container">\r
  <div class="page-header">\r
    <h1>Cuentas por Pagar</h1>\r
    <div>\r
      <button class="btn btn-secondary" (click)="showSupplierForm = !showSupplierForm">\r
        <span class="material-icons">person_add</span>\r
        Proveedor\r
      </button>\r
      <button class="btn btn-primary" (click)="showInvoiceForm = !showInvoiceForm">\r
        <span class="material-icons">add</span>\r
        Nueva Factura\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="showSupplierForm" class="create-form card">\r
    <h2>Crear Proveedor</h2>\r
    <form (ngSubmit)="createSupplier()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Identificaci\xF3n *</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="newSupplier.identification"\r
            name="identification"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Nombre *</label>\r
          <input type="text" [(ngModel)]="newSupplier.name" name="name" required />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showSupplierForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Crear Proveedor</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div *ngIf="showInvoiceForm" class="create-form card">\r
    <h2>Registrar Factura de Proveedor</h2>\r
    <form (ngSubmit)="createInvoice()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Proveedor *</label>\r
          <select [(ngModel)]="newInvoice.supplierId" name="supplierId" required>\r
            <option value="">Seleccione...</option>\r
            <option *ngFor="let supplier of suppliers" [value]="supplier.id">\r
              {{ supplier.identification }} - {{ supplier.name }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>N\xFAmero de Factura *</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="newInvoice.invoiceNumber"\r
            name="invoiceNumber"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Fecha de Emisi\xF3n *</label>\r
          <input type="date" [(ngModel)]="newInvoice.issueDate" name="issueDate" required />\r
        </div>\r
        <div class="form-group">\r
          <label>Fecha de Vencimiento *</label>\r
          <input type="date" [(ngModel)]="newInvoice.dueDate" name="dueDate" required />\r
        </div>\r
      </div>\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Subtotal *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newInvoice.subtotal"\r
            name="subtotal"\r
            step="0.01"\r
            min="0"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>IVA *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newInvoice.tax"\r
            name="tax"\r
            step="0.01"\r
            min="0"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Total</label>\r
          <input type="text" [value]="getTotal() | number: '1.2-2'" readonly class="readonly" />\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showInvoiceForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Registrar Factura</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div *ngIf="showPaymentForm" class="create-form card">\r
    <h2>Registrar Pago</h2>\r
    <form (ngSubmit)="createPayment()">\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Monto *</label>\r
          <input\r
            type="number"\r
            [(ngModel)]="newPayment.amount"\r
            name="amount"\r
            step="0.01"\r
            min="0"\r
            required\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Fecha de Pago *</label>\r
          <input type="date" [(ngModel)]="newPayment.paymentDate" name="paymentDate" required />\r
        </div>\r
        <div class="form-group">\r
          <label>M\xE9todo de Pago *</label>\r
          <select [(ngModel)]="newPayment.paymentMethod" name="paymentMethod" required>\r
            <option value="CASH">Efectivo</option>\r
            <option value="TRANSFER">Transferencia</option>\r
            <option value="CHECK">Cheque</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary" (click)="showPaymentForm = false">\r
          Cancelar\r
        </button>\r
        <button type="submit" class="btn btn-primary">Registrar Pago</button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <div class="invoices-list card">\r
    <h2>Facturas de Proveedores</h2>\r
    <div class="table-container">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>N\xFAmero</th>\r
            <th>Proveedor</th>\r
            <th>Fecha Emisi\xF3n</th>\r
            <th>Vencimiento</th>\r
            <th>Total</th>\r
            <th>Pagado</th>\r
            <th>Saldo</th>\r
            <th>Estado</th>\r
            <th>Acciones</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let invoice of invoices">\r
            <td>{{ invoice.invoiceNumber }}</td>\r
            <td>{{ invoice.supplier?.name }}</td>\r
            <td>{{ invoice.issueDate | date: 'dd/MM/yyyy' }}</td>\r
            <td>{{ invoice.dueDate | date: 'dd/MM/yyyy' }}</td>\r
            <td>{{ invoice.total | number: '1.2-2' }}</td>\r
            <td>{{ invoice.paidAmount | number: '1.2-2' }}</td>\r
            <td>{{ invoice.balance | number: '1.2-2' }}</td>\r
            <td>\r
              <span class="badge badge-success">{{ invoice.status }}</span>\r
            </td>\r
            <td>\r
              <button\r
                *ngIf="invoice.balance > 0"\r
                class="btn-icon btn-success"\r
                (click)="openPaymentForm(invoice.id)"\r
                title="Registrar Pago"\r
              >\r
                <span class="material-icons">payment</span>\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/payables/payables.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.payables-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #d1fae5;\n  color: #065f46;\n}\n.btn-icon:hover {\n  background: #a7f3d0;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n/*# sourceMappingURL=payables.component.css.map */\n"] }]
  }], () => [{ type: PayablesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayablesComponent, { className: "PayablesComponent", filePath: "src/app/pages/payables/payables.component.ts", lineNumber: 21 });
})();
export {
  PayablesComponent
};
//# sourceMappingURL=chunk-OZF2RXIJ.js.map
