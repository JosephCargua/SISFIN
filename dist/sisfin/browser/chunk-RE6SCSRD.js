import {
  RouterLink,
  RouterModule
} from "./chunk-EFJID6OG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HXWGHL77.js";
import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/core/services/document-consult.service.ts
var DocumentConsultService = class _DocumentConsultService {
  api;
  constructor(api) {
    this.api = api;
  }
  search(filters) {
    const params = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "ALL") {
        params[key] = value;
      }
    });
    return this.api.get("electronic-document-registrations/search", params);
  }
  static \u0275fac = function DocumentConsultService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentConsultService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentConsultService, factory: _DocumentConsultService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentConsultService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/pages/consult-documents/consult-documents.component.ts
var _c0 = () => ["/electronic-invoices"];
var _c1 = (a0) => ({ highlight: a0 });
function ConsultDocumentsComponent_div_16_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("value", t_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3.label, " ");
  }
}
function ConsultDocumentsComponent_div_16_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4.label, " ");
  }
}
function ConsultDocumentsComponent_div_16_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275property("value", p_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r5.label, " ");
  }
}
function ConsultDocumentsComponent_div_16_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pt_r6 = ctx.$implicit;
    \u0275\u0275property("value", pt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pt_r6.label, " ");
  }
}
function ConsultDocumentsComponent_div_16_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ConsultDocumentsComponent_div_16_button_51_Template_button_click_0_listener() {
      const qf_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyQuickFilter(qf_r8.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qf_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.filters.quickFilter === qf_r8.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qf_r8.label, " ");
  }
}
function ConsultDocumentsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "label");
    \u0275\u0275text(4, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.documentNumber, $event) || (ctx_r1.filters.documentNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "label");
    \u0275\u0275text(8, "Persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "span", 4);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.person, $event) || (ctx_r1.filters.person = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 15)(14, "label");
    \u0275\u0275text(15, "Tipo Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.documentTypeCode, $event) || (ctx_r1.filters.documentTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, ConsultDocumentsComponent_div_16_option_17_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "label");
    \u0275\u0275text(20, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.reviewStatus, $event) || (ctx_r1.filters.reviewStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(22, ConsultDocumentsComponent_div_16_option_22_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 15)(24, "label");
    \u0275\u0275text(25, "Procesamiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.processingStatus, $event) || (ctx_r1.filters.processingStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(27, ConsultDocumentsComponent_div_16_option_27_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 15)(29, "label");
    \u0275\u0275text(30, "Orden Compra/Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17)(32, "span", 4);
    \u0275\u0275text(33, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.purchaseOrder, $event) || (ctx_r1.filters.purchaseOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 15)(36, "label");
    \u0275\u0275text(37, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.dateFrom, $event) || (ctx_r1.filters.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 15)(40, "label");
    \u0275\u0275text(41, "Hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.dateTo, $event) || (ctx_r1.filters.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 15)(44, "label");
    \u0275\u0275text(45, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ConsultDocumentsComponent_div_16_Template_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filters.personType, $event) || (ctx_r1.filters.personType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(47, ConsultDocumentsComponent_div_16_option_47_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 27)(49, "span", 28);
    \u0275\u0275text(50, "Filtros r\xE1pidos:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ConsultDocumentsComponent_div_16_button_51_Template, 2, 3, "button", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 30)(53, "button", 31);
    \u0275\u0275listener("click", function ConsultDocumentsComponent_div_16_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(54, " Limpiar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 32);
    \u0275\u0275listener("click", function ConsultDocumentsComponent_div_16_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search());
    });
    \u0275\u0275elementStart(56, "span", 4);
    \u0275\u0275text(57, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Buscar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.documentNumber);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.person);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.documentTypeCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.reviewStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.processingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.processingOptions);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.purchaseOrder);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.dateTo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filters.personType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.personTypes);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.quickFilters);
  }
}
function ConsultDocumentsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Cargando documentos...");
    \u0275\u0275elementEnd();
  }
}
function ConsultDocumentsComponent_div_19_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2, "No se encontraron documentos");
    \u0275\u0275elementEnd()();
  }
}
function ConsultDocumentsComponent_div_19_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 38);
    \u0275\u0275listener("change", function ConsultDocumentsComponent_div_19_tr_24_Template_input_change_2_listener() {
      const doc_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelect(doc_r11.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 44)(7, "div", 45)(8, "span", 46);
    \u0275\u0275text(9, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "span", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td", 49)(16, "a", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 51);
    \u0275\u0275element(19, "span", 52);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 53)(22, "button", 54)(23, "span", 4);
    \u0275\u0275text(24, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 55)(26, "span", 4);
    \u0275\u0275text(27, "upload_file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 56);
    \u0275\u0275listener("click", function ConsultDocumentsComponent_div_19_tr_24_Template_button_click_28_listener() {
      const doc_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDocument(doc_r11));
    });
    \u0275\u0275elementStart(29, "span", 4);
    \u0275\u0275text(30, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 57)(32, "span", 4);
    \u0275\u0275text(33, "mail");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "td", 40);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 40);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 40);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 40);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedIds.has(doc_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 15, doc_r11.issueDate, "dd/MM/yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(doc_r11.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r11.personTypeLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c0))("queryParams", \u0275\u0275pureFunction1(19, _c1, doc_r11.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r11.documentLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(doc_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", doc_r11.statusLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(doc_r11.netAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(doc_r11.taxAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(doc_r11.total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(doc_r11.retentionAmount));
  }
}
function ConsultDocumentsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "table")(2, "thead")(3, "tr")(4, "th", 37)(5, "input", 38);
    \u0275\u0275listener("change", function ConsultDocumentsComponent_div_19_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Emisi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 39);
    \u0275\u0275text(13, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 40);
    \u0275\u0275text(15, "Neto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17, "Imp.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 40);
    \u0275\u0275text(19, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 40);
    \u0275\u0275text(21, "Ret.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, ConsultDocumentsComponent_div_19_tr_23_Template, 3, 0, "tr", 41)(24, ConsultDocumentsComponent_div_19_tr_24_Template, 42, 23, "tr", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.documents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documents);
  }
}
function ConsultDocumentsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total: ", ctx_r1.documents.length, " documento(s)");
  }
}
var ConsultDocumentsComponent = class _ConsultDocumentsComponent {
  consultService;
  searchExpanded = true;
  loading = false;
  documents = [];
  selectedIds = /* @__PURE__ */ new Set();
  filters = {
    documentNumber: "",
    person: "",
    documentTypeCode: "ALL",
    reviewStatus: "ALL",
    processingStatus: "ALL",
    emissionFilter: "ALL",
    dateFrom: "",
    dateTo: "",
    personType: "SUPPLIER",
    purchaseOrder: "",
    quickFilter: ""
  };
  documentTypes = [
    { value: "ALL", label: "Todos" },
    { value: "01", label: "Factura" },
    { value: "03", label: "Liquidaci\xF3n de compra" },
    { value: "04", label: "Nota de cr\xE9dito" },
    { value: "05", label: "Nota de d\xE9bito" },
    { value: "07", label: "Retenci\xF3n" }
  ];
  statusOptions = [
    { value: "ALL", label: "Todos" },
    { value: "PENDING_REVIEW", label: "Por revisar" },
    { value: "REVIEWED", label: "Revisado" },
    { value: "NOT_REVIEWED", label: "No revisado" }
  ];
  processingOptions = [
    { value: "ALL", label: "Todos" },
    { value: "PARTIAL", label: "Parcial" },
    { value: "PENDING_PROCESS", label: "Por procesar" }
  ];
  personTypes = [
    { value: "SUPPLIER", label: "Proveedor" },
    { value: "CUSTOMER", label: "Cliente" }
  ];
  quickFilters = [
    { key: "ELECTRONIC", label: "Seleccionar Electr\xF3nicos" },
    { key: "UNAUTHORIZED", label: "Documentos no autorizados" },
    { key: "RETENTION_PENDING", label: "Retenciones no autorizadas" }
  ];
  constructor(consultService) {
    this.consultService = consultService;
  }
  ngOnInit() {
    this.search();
  }
  toggleSearchPanel() {
    this.searchExpanded = !this.searchExpanded;
  }
  applyQuickFilter(key) {
    this.filters.quickFilter = this.filters.quickFilter === key ? "" : key;
    this.search();
  }
  search() {
    this.loading = true;
    const payload = {};
    if (this.filters.documentNumber) {
      payload["documentNumber"] = this.filters.documentNumber;
    }
    if (this.filters.person)
      payload["person"] = this.filters.person;
    if (this.filters.documentTypeCode !== "ALL") {
      payload["documentTypeCode"] = this.filters.documentTypeCode;
    }
    if (this.filters.reviewStatus !== "ALL") {
      payload["reviewStatus"] = this.filters.reviewStatus;
    }
    if (this.filters.processingStatus !== "ALL") {
      payload["processingStatus"] = this.filters.processingStatus;
    }
    if (this.filters.dateFrom)
      payload["dateFrom"] = this.filters.dateFrom;
    if (this.filters.dateTo)
      payload["dateTo"] = this.filters.dateTo;
    if (this.filters.quickFilter) {
      payload["quickFilter"] = this.filters.quickFilter;
    }
    this.consultService.search(payload).subscribe({
      next: (data) => {
        this.documents = data;
        this.loading = false;
        this.selectedIds.clear();
      },
      error: () => {
        this.loading = false;
        alert("Error al consultar documentos");
      }
    });
  }
  clearFilters() {
    this.filters = {
      documentNumber: "",
      person: "",
      documentTypeCode: "ALL",
      reviewStatus: "ALL",
      processingStatus: "ALL",
      emissionFilter: "ALL",
      dateFrom: "",
      dateTo: "",
      personType: "SUPPLIER",
      purchaseOrder: "",
      quickFilter: ""
    };
    this.search();
  }
  toggleSelect(id) {
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }
  }
  toggleSelectAll(event) {
    const checked = event.target.checked;
    this.selectedIds.clear();
    if (checked) {
      this.documents.forEach((d) => this.selectedIds.add(d.id));
    }
  }
  isAllSelected() {
    return this.documents.length > 0 && this.documents.every((d) => this.selectedIds.has(d.id));
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(amount);
  }
  getStatusClass(doc) {
    if (doc.statusLabel === "Revisado" || doc.statusLabel === "Procesado") {
      return "status-reviewed";
    }
    if (doc.statusLabel === "No revisado") {
      return "status-not-reviewed";
    }
    if (doc.statusLabel === "Pendiente" || doc.statusLabel === "Por revisar") {
      return "status-pending-review";
    }
    return "status-neutral";
  }
  exportExcel() {
    const headers = [
      "Emisi\xF3n",
      "Persona",
      "Documento",
      "Estado",
      "Neto",
      "Imp.",
      "Total",
      "Ret."
    ];
    const rows = this.documents.map((d) => [
      d.issueDate,
      d.supplierName,
      d.documentLabel,
      d.statusLabel,
      d.netAmount,
      d.taxAmount,
      d.total,
      d.retentionAmount
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `documentos-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  viewDocument(doc) {
    alert(`Documento: ${doc.documentLabel}
Proveedor: ${doc.supplierName}
Estado: ${doc.statusLabel}
Total: ${this.formatCurrency(doc.total)}`);
  }
  static \u0275fac = function ConsultDocumentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsultDocumentsComponent)(\u0275\u0275directiveInject(DocumentConsultService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsultDocumentsComponent, selectors: [["app-consult-documents"]], decls: 21, vars: 6, consts: [[1, "consult-documents-container"], [1, "page-header"], [1, "header-actions"], ["type", "button", "title", "Actualizar", 1, "btn", "btn-icon", 3, "click"], [1, "material-icons"], ["type", "button", "title", "Exportar Excel", 1, "btn", "btn-icon", 3, "click", "disabled"], [1, "search-panel", "card"], ["type", "button", 1, "search-panel-toggle", 3, "click"], ["class", "search-form", 4, "ngIf"], [1, "results-panel", "card"], ["class", "loading", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "table-footer", 4, "ngIf"], [1, "search-form"], [1, "search-grid"], [1, "form-group"], ["type", "text", "name", "documentNumber", "placeholder", "Buscar por n\xFAmero de documento", 3, "ngModelChange", "ngModel"], [1, "input-with-icon"], ["type", "text", "name", "person", "placeholder", "Buscar persona", 3, "ngModelChange", "ngModel"], ["name", "documentTypeCode", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "reviewStatus", 3, "ngModelChange", "ngModel"], ["name", "processingStatus", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "purchaseOrder", "placeholder", "Buscar orden", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateFrom", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateTo", 3, "ngModelChange", "ngModel"], ["name", "personType", 3, "ngModelChange", "ngModel"], [1, "quick-filters"], [1, "quick-filters-label"], ["type", "button", "class", "quick-filter-link", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "search-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], ["type", "button", 1, "quick-filter-link", 3, "click"], [1, "loading"], [1, "table-container"], [1, "col-check"], ["type", "checkbox", 3, "change", "checked"], [1, "col-actions"], [1, "col-money"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "9", 1, "empty-row"], [1, "person-cell"], [1, "person-info"], [1, "material-icons", "person-icon"], [1, "person-name"], [1, "person-type"], [1, "document-cell"], [1, "doc-link", 3, "routerLink", "queryParams"], [1, "doc-status", 3, "ngClass"], [1, "status-dot"], [1, "actions-cell"], ["type", "button", "title", "Editar", 1, "btn-icon", 3, "routerLink"], ["title", "Registro electr\xF3nico", 1, "btn-icon", 3, "routerLink"], ["type", "button", "title", "Ver", 1, "btn-icon", 3, "click"], ["type", "button", "title", "Enviar", 1, "btn-icon"], [1, "table-footer"]], template: function ConsultDocumentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Consultar documentos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function ConsultDocumentsComponent_Template_button_click_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ConsultDocumentsComponent_Template_button_click_8_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "table_view");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
      \u0275\u0275listener("click", function ConsultDocumentsComponent_Template_button_click_12_listener() {
        return ctx.toggleSearchPanel();
      });
      \u0275\u0275elementStart(13, "span", 4);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " B\xFAsqueda ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ConsultDocumentsComponent_div_16_Template, 59, 14, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275template(18, ConsultDocumentsComponent_div_18_Template, 2, 0, "div", 10)(19, ConsultDocumentsComponent_div_19_Template, 25, 3, "div", 11)(20, ConsultDocumentsComponent_div_20_Template, 3, 1, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.documents.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.searchExpanded ? "expand_less" : "expand_more");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searchExpanded);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.consult-documents-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  color: #475569;\n  text-decoration: none;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.search-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.search-panel-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px 20px;\n  border: none;\n  background: #f8fafc;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  text-align: left;\n}\n.search-panel-toggle[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.search-panel-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #64748b;\n}\n.search-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.search-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n  .search-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .search-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: #94a3b8;\n}\n.input-with-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n.quick-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 16px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.quick-filters-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.quick-filter-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 13px;\n  color: #3b82f6;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.quick-filter-link[_ngcontent-%COMP%]:hover, \n.quick-filter-link.active[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n  font-weight: 600;\n}\n.search-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.results-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n  color: #1e293b;\n  vertical-align: middle;\n}\n.col-check[_ngcontent-%COMP%] {\n  width: 44px;\n}\n.col-money[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.person-cell[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.person-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.person-info[_ngcontent-%COMP%]   .person-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.person-info[_ngcontent-%COMP%]   .person-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  line-height: 1.3;\n}\n.person-info[_ngcontent-%COMP%]   .person-type[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #64748b;\n}\n.document-cell[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-link[_ngcontent-%COMP%] {\n  display: block;\n  color: #3b82f6;\n  text-decoration: none;\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-reviewed[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-reviewed[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-not-reviewed[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-not-reviewed[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-pending-review[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-pending-review[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.document-cell[_ngcontent-%COMP%]   .doc-status.status-neutral[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  margin-right: 2px;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 32px !important;\n}\n.table-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  text-align: right;\n  font-size: 13px;\n  color: #64748b;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=consult-documents.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsultDocumentsComponent, [{
    type: Component,
    args: [{ selector: "app-consult-documents", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="consult-documents-container">\r
  <div class="page-header">\r
    <h1>Consultar documentos</h1>\r
    <div class="header-actions">\r
      <button type="button" class="btn btn-icon" title="Actualizar" (click)="search()">\r
        <span class="material-icons">refresh</span>\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-icon"\r
        title="Exportar Excel"\r
        (click)="exportExcel()"\r
        [disabled]="!documents.length"\r
      >\r
        <span class="material-icons">table_view</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="search-panel card">\r
    <button type="button" class="search-panel-toggle" (click)="toggleSearchPanel()">\r
      <span class="material-icons">{{\r
        searchExpanded ? 'expand_less' : 'expand_more'\r
      }}</span>\r
      B\xFAsqueda\r
    </button>\r
\r
    <div class="search-form" *ngIf="searchExpanded">\r
      <div class="search-grid">\r
        <div class="form-group">\r
          <label>Documento</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="filters.documentNumber"\r
            name="documentNumber"\r
            placeholder="Buscar por n\xFAmero de documento"\r
          />\r
        </div>\r
        <div class="form-group">\r
          <label>Persona</label>\r
          <div class="input-with-icon">\r
            <span class="material-icons">search</span>\r
            <input\r
              type="text"\r
              [(ngModel)]="filters.person"\r
              name="person"\r
              placeholder="Buscar persona"\r
            />\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>Tipo Documento</label>\r
          <select [(ngModel)]="filters.documentTypeCode" name="documentTypeCode">\r
            <option *ngFor="let t of documentTypes" [value]="t.value">\r
              {{ t.label }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Estado</label>\r
          <select [(ngModel)]="filters.reviewStatus" name="reviewStatus">\r
            <option *ngFor="let s of statusOptions" [value]="s.value">\r
              {{ s.label }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Procesamiento</label>\r
          <select [(ngModel)]="filters.processingStatus" name="processingStatus">\r
            <option *ngFor="let p of processingOptions" [value]="p.value">\r
              {{ p.label }}\r
            </option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Orden Compra/Venta</label>\r
          <div class="input-with-icon">\r
            <span class="material-icons">search</span>\r
            <input\r
              type="text"\r
              [(ngModel)]="filters.purchaseOrder"\r
              name="purchaseOrder"\r
              placeholder="Buscar orden"\r
            />\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label>Desde</label>\r
          <input type="date" [(ngModel)]="filters.dateFrom" name="dateFrom" />\r
        </div>\r
        <div class="form-group">\r
          <label>Hasta</label>\r
          <input type="date" [(ngModel)]="filters.dateTo" name="dateTo" />\r
        </div>\r
        <div class="form-group">\r
          <label>Tipo</label>\r
          <select [(ngModel)]="filters.personType" name="personType">\r
            <option *ngFor="let pt of personTypes" [value]="pt.value">\r
              {{ pt.label }}\r
            </option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="quick-filters">\r
        <span class="quick-filters-label">Filtros r\xE1pidos:</span>\r
        <button\r
          type="button"\r
          *ngFor="let qf of quickFilters"\r
          class="quick-filter-link"\r
          [class.active]="filters.quickFilter === qf.key"\r
          (click)="applyQuickFilter(qf.key)"\r
        >\r
          {{ qf.label }}\r
        </button>\r
      </div>\r
\r
      <div class="search-actions">\r
        <button type="button" class="btn btn-secondary" (click)="clearFilters()">\r
          Limpiar\r
        </button>\r
        <button type="button" class="btn btn-primary" (click)="search()">\r
          <span class="material-icons">search</span>\r
          Buscar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="results-panel card">\r
    <div *ngIf="loading" class="loading">Cargando documentos...</div>\r
\r
    <div class="table-container" *ngIf="!loading">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th class="col-check">\r
              <input\r
                type="checkbox"\r
                [checked]="isAllSelected()"\r
                (change)="toggleSelectAll($event)"\r
              />\r
            </th>\r
            <th>Emisi\xF3n</th>\r
            <th>Persona</th>\r
            <th>Documento</th>\r
            <th class="col-actions">Acciones</th>\r
            <th class="col-money">Neto</th>\r
            <th class="col-money">Imp.</th>\r
            <th class="col-money">Total</th>\r
            <th class="col-money">Ret.</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="documents.length === 0">\r
            <td colspan="9" class="empty-row">No se encontraron documentos</td>\r
          </tr>\r
          <tr *ngFor="let doc of documents">\r
            <td>\r
              <input\r
                type="checkbox"\r
                [checked]="selectedIds.has(doc.id)"\r
                (change)="toggleSelect(doc.id)"\r
              />\r
            </td>\r
            <td>{{ doc.issueDate | date: 'dd/MM/yyyy' }}</td>\r
            <td class="person-cell">\r
              <div class="person-info">\r
                <span class="material-icons person-icon">person</span>\r
                <div>\r
                  <span class="person-name">{{ doc.supplierName }}</span>\r
                  <span class="person-type">{{ doc.personTypeLabel }}</span>\r
                </div>\r
              </div>\r
            </td>\r
            <td class="document-cell">\r
              <a\r
                class="doc-link"\r
                [routerLink]="['/electronic-invoices']"\r
                [queryParams]="{ highlight: doc.id }"\r
              >\r
                {{ doc.documentLabel }}\r
              </a>\r
              <span class="doc-status" [ngClass]="getStatusClass(doc)">\r
                <span class="status-dot"></span>\r
                {{ doc.statusLabel }}\r
              </span>\r
            </td>\r
            <td class="actions-cell">\r
              <button\r
                type="button"\r
                class="btn-icon"\r
                title="Editar"\r
                [routerLink]="['/electronic-invoices']"\r
              >\r
                <span class="material-icons">edit</span>\r
              </button>\r
              <a\r
                class="btn-icon"\r
                title="Registro electr\xF3nico"\r
                [routerLink]="['/electronic-invoices']"\r
              >\r
                <span class="material-icons">upload_file</span>\r
              </a>\r
              <button\r
                type="button"\r
                class="btn-icon"\r
                title="Ver"\r
                (click)="viewDocument(doc)"\r
              >\r
                <span class="material-icons">visibility</span>\r
              </button>\r
              <button type="button" class="btn-icon" title="Enviar">\r
                <span class="material-icons">mail</span>\r
              </button>\r
            </td>\r
            <td class="col-money">{{ formatCurrency(doc.netAmount) }}</td>\r
            <td class="col-money">{{ formatCurrency(doc.taxAmount) }}</td>\r
            <td class="col-money">{{ formatCurrency(doc.total) }}</td>\r
            <td class="col-money">{{ formatCurrency(doc.retentionAmount) }}</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="table-footer" *ngIf="!loading">\r
      <span>Total: {{ documents.length }} documento(s)</span>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/consult-documents/consult-documents.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.consult-documents-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  color: #475569;\n  text-decoration: none;\n}\n.btn-icon:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.btn-icon .material-icons {\n  font-size: 20px;\n}\n.search-panel {\n  padding: 0;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.search-panel-toggle {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 14px 20px;\n  border: none;\n  background: #f8fafc;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  text-align: left;\n}\n.search-panel-toggle:hover {\n  background: #f1f5f9;\n}\n.search-panel-toggle .material-icons {\n  font-size: 22px;\n  color: #64748b;\n}\n.search-form {\n  padding: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.search-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n  .search-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .search-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .material-icons {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: #94a3b8;\n}\n.input-with-icon input {\n  padding-left: 36px;\n}\n.quick-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px 16px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.quick-filters-label {\n  font-size: 13px;\n  color: #64748b;\n}\n.quick-filter-link {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 13px;\n  color: #3b82f6;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.quick-filter-link:hover,\n.quick-filter-link.active {\n  color: #1d4ed8;\n  font-weight: 600;\n}\n.search-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.results-panel {\n  padding: 0;\n  overflow: hidden;\n}\n.loading {\n  padding: 40px;\n  text-align: center;\n  color: #64748b;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f8fafc;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n}\ntable tbody tr:hover {\n  background: #fafbfc;\n}\ntable tbody tr td {\n  padding: 12px;\n  font-size: 14px;\n  color: #1e293b;\n  vertical-align: middle;\n}\n.col-check {\n  width: 44px;\n}\n.col-money {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions {\n  width: 140px;\n}\n.person-cell {\n  min-width: 200px;\n}\n.person-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.person-info .person-icon {\n  font-size: 20px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.person-info .person-name {\n  display: block;\n  font-weight: 500;\n  line-height: 1.3;\n}\n.person-info .person-type {\n  display: block;\n  font-size: 12px;\n  color: #64748b;\n}\n.document-cell {\n  min-width: 180px;\n}\n.document-cell .doc-link {\n  display: block;\n  color: #3b82f6;\n  text-decoration: none;\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n.document-cell .doc-link:hover {\n  text-decoration: underline;\n}\n.document-cell .doc-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.document-cell .doc-status .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.document-cell .doc-status.status-reviewed {\n  color: #15803d;\n}\n.document-cell .doc-status.status-reviewed .status-dot {\n  background: #22c55e;\n}\n.document-cell .doc-status.status-not-reviewed {\n  color: #b91c1c;\n}\n.document-cell .doc-status.status-not-reviewed .status-dot {\n  background: #ef4444;\n}\n.document-cell .doc-status.status-pending-review {\n  color: #b45309;\n}\n.document-cell .doc-status.status-pending-review .status-dot {\n  background: #f59e0b;\n}\n.document-cell .doc-status.status-neutral {\n  color: #64748b;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.actions-cell .btn-icon {\n  width: 32px;\n  height: 32px;\n  border: none;\n  margin-right: 2px;\n}\n.empty-row {\n  text-align: center;\n  color: #94a3b8;\n  padding: 32px !important;\n}\n.table-footer {\n  padding: 12px 20px;\n  text-align: right;\n  font-size: 13px;\n  color: #64748b;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=consult-documents.component.css.map */\n"] }]
  }], () => [{ type: DocumentConsultService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsultDocumentsComponent, { className: "ConsultDocumentsComponent", filePath: "src/app/pages/consult-documents/consult-documents.component.ts", lineNumber: 15 });
})();
export {
  ConsultDocumentsComponent
};
//# sourceMappingURL=chunk-RE6SCSRD.js.map
