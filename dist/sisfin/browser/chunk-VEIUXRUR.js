import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
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
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/electronic-registration.service.ts
var ElectronicRegistrationService = class _ElectronicRegistrationService {
  api;
  constructor(api) {
    this.api = api;
  }
  getDocuments(processingStatus) {
    const params = processingStatus ? { processingStatus } : void 0;
    return this.api.get("electronic-document-registrations", params);
  }
  uploadDocument(file) {
    return this.api.uploadFile("electronic-document-registrations/upload", file);
  }
  updateReviewStatus(id, reviewStatus) {
    return this.api.patch(`electronic-document-registrations/${id}/review-status`, { reviewStatus });
  }
  getLineItems(documentId) {
    return this.api.get(`electronic-document-registrations/${documentId}/line-items`);
  }
  homologateLineItem(documentId, lineItemId, data) {
    return this.api.patch(`electronic-document-registrations/${documentId}/line-items/${lineItemId}`, {
      mappingType: data.mappingType,
      internalCode: data.internalCode || void 0,
      unit: data.unit || void 0,
      mappedProductId: data.mappingType === "PRODUCT" ? data.mappedProductId : void 0,
      mappedAccountId: data.mappingType === "ACCOUNT" ? data.mappedAccountId : void 0
    });
  }
  homologate(id, data) {
    return this.api.patch(`electronic-document-registrations/${id}/homologate`, data);
  }
  markReady(id) {
    return this.api.patch(`electronic-document-registrations/${id}/ready`, {});
  }
  deleteDocument(id) {
    return this.api.delete(`electronic-document-registrations/${id}`);
  }
  static \u0275fac = function ElectronicRegistrationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElectronicRegistrationService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ElectronicRegistrationService, factory: _ElectronicRegistrationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElectronicRegistrationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/pages/electronic-invoices/electronic-invoices.component.ts
function ElectronicInvoicesComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Procesando archivos...");
    \u0275\u0275elementEnd();
  }
}
function ElectronicInvoicesComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.uploadError);
  }
}
function ElectronicInvoicesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 4);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, " Informaci\xF3n: Tus comprobantes han sido procesados parcialmente y necesitan de tu revisi\xF3n para completar la carga correctamente. ");
    \u0275\u0275elementEnd()();
  }
}
function ElectronicInvoicesComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, " No hay documentos en esta secci\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    \u0275\u0275property("value", acc_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r5.code, " - ", acc_r5.name, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r6 = ctx.$implicit;
    \u0275\u0275property("value", acc_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r6.code, " - ", acc_r6.name, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cc_r7 = ctx.$implicit;
    \u0275\u0275property("value", cc_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cc_r7.code, " - ", cc_r7.name, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r8 = ctx.$implicit;
    \u0275\u0275property("value", acc_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r8.code, " - ", acc_r8.name, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r9 = ctx.$implicit;
    \u0275\u0275property("value", code_r9.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", code_r9.code, " - ", code_r9.description, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r10 = ctx.$implicit;
    \u0275\u0275property("value", code_r10.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", code_r10.code, " - ", code_r10.description, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r13 = ctx.$implicit;
    \u0275\u0275property("value", u_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r13, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_24_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    \u0275\u0275property("value", p_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r15.code, " - ", p_r15.name, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_24_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const line_r12 = \u0275\u0275nextContext().ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappedProductId, $event) || (ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappedProductId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 42);
    \u0275\u0275text(2, "Buscar producto...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_24_option_3_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r12 = \u0275\u0275nextContext().ngIf;
    const doc_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappedProductId);
    \u0275\u0275property("name", "product_" + line_r12.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.products);
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_25_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r17 = ctx.$implicit;
    \u0275\u0275property("value", acc_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r17.code, " - ", acc_r17.name, " ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_25_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const line_r12 = \u0275\u0275nextContext().ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappedAccountId, $event) || (ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappedAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 42);
    \u0275\u0275text(2, "Buscar cuenta...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_25_option_3_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r12 = \u0275\u0275nextContext().ngIf;
    const doc_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappedAccountId);
    \u0275\u0275property("name", "accountMap_" + line_r12.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_p_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pendientes: ", ctx_r0.getPendingLineItemsCount(doc_r3.id), " productos por homologar ");
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53)(3, "h4");
    \u0275\u0275text(4, "Mis Productos y Cuentas Contables");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40)(6, "label");
    \u0275\u0275text(7, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template_input_ngModelChange_8_listener($event) {
      const line_r12 = \u0275\u0275restoreView(_r11).ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getLineForm(doc_r3.id, line_r12.id).internalCode, $event) || (ctx_r0.getLineForm(doc_r3.id, line_r12.id).internalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 55)(10, "label", 56)(11, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template_input_ngModelChange_11_listener($event) {
      const line_r12 = \u0275\u0275restoreView(_r11).ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType, $event) || (ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Cuentas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 56)(14, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template_input_ngModelChange_14_listener($event) {
      const line_r12 = \u0275\u0275restoreView(_r11).ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType, $event) || (ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Productos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 40)(17, "label");
    \u0275\u0275text(18, "Unidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template_select_ngModelChange_19_listener($event) {
      const line_r12 = \u0275\u0275restoreView(_r11).ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getLineForm(doc_r3.id, line_r12.id).unit, $event) || (ctx_r0.getLineForm(doc_r3.id, line_r12.id).unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_option_20_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 40)(22, "label");
    \u0275\u0275text(23, "Producto / Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_24_Template, 4, 3, "select", 59)(25, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_select_25_Template, 4, 3, "select", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 60)(27, "h4");
    \u0275\u0275text(28, "Productos de mi Proveedor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 61);
    \u0275\u0275text(30, " (Se listan s\xF3lo aquellos productos que no est\xE1n homologados) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 62)(32, "label");
    \u0275\u0275text(33, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 62)(37, "label");
    \u0275\u0275text(38, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 62)(42, "label");
    \u0275\u0275text(43, "Iva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 63)(47, "button", 64);
    \u0275\u0275listener("click", function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template_button_click_47_listener() {
      const line_r12 = \u0275\u0275restoreView(_r11).ngIf;
      const doc_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.acceptLineItem(doc_r3.id, line_r12));
    });
    \u0275\u0275elementStart(48, "span", 4);
    \u0275\u0275text(49, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_p_51_Template, 2, 1, "p", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const line_r12 = ctx.ngIf;
    const doc_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getLineForm(doc_r3.id, line_r12.id).internalCode);
    \u0275\u0275property("name", "intCode_" + line_r12.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", "mapType_" + line_r12.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", "mapType_" + line_r12.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getLineForm(doc_r3.id, line_r12.id).unit);
    \u0275\u0275property("name", "unit_" + line_r12.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.units);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType === "PRODUCT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getLineForm(doc_r3.id, line_r12.id).mappingType === "ACCOUNT");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(line_r12.supplierCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(line_r12.supplierDescription);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(line_r12.ivaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.acceptingLineId === line_r12.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.acceptingLineId === line_r12.id ? "Guardando..." : "Aceptar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getPendingLineItemsCount(doc_r3.id) > 1);
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Todos los productos del proveedor han sido homologados. Puede presionar Homologar para finalizar el documento. ");
    \u0275\u0275elementEnd();
  }
}
function ElectronicInvoicesComponent_ng_container_47_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 34)(2, "div", 35)(3, "div", 36)(4, "button", 37);
    \u0275\u0275listener("click", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.homologate(doc_r3.id));
    });
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 38)(9, "div", 39)(10, "div", 40)(11, "label");
    \u0275\u0275text(12, "Cuenta Por Pagar *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).payableAccountId, $event) || (ctx_r0.getForm(doc_r3.id).payableAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 42);
    \u0275\u0275text(15, "Buscar cuenta...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ElectronicInvoicesComponent_ng_container_47_tr_32_option_16_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 40)(18, "label");
    \u0275\u0275text(19, "Cuenta Propina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).tipAccountId, $event) || (ctx_r0.getForm(doc_r3.id).tipAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 42);
    \u0275\u0275text(22, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ElectronicInvoicesComponent_ng_container_47_tr_32_option_23_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 40)(25, "label");
    \u0275\u0275text(26, "Centro de Costo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).costCenterId, $event) || (ctx_r0.getForm(doc_r3.id).costCenterId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 42);
    \u0275\u0275text(29, "Buscar centro...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ElectronicInvoicesComponent_ng_container_47_tr_32_option_30_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 40)(32, "label");
    \u0275\u0275text(33, "Cuenta Recurrente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).recurringAccountId, $event) || (ctx_r0.getForm(doc_r3.id).recurringAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 42);
    \u0275\u0275text(36, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ElectronicInvoicesComponent_ng_container_47_tr_32_option_37_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label", 45)(39, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).useRecurringAccount, $event) || (ctx_r0.getForm(doc_r3.id).useRecurringAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Usar Cuenta Recurrente ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 39)(42, "h4", 47);
    \u0275\u0275text(43, " Generaci\xF3n de retenciones en documento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 40)(45, "label");
    \u0275\u0275text(46, "Retenci\xF3n IR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).retentionIrCode, $event) || (ctx_r0.getForm(doc_r3.id).retentionIrCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(48, "option", 42);
    \u0275\u0275text(49, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, ElectronicInvoicesComponent_ng_container_47_tr_32_option_50_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 40)(52, "label");
    \u0275\u0275text(53, "Retenci\xF3n IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).retentionIvaCode, $event) || (ctx_r0.getForm(doc_r3.id).retentionIvaCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(55, "option", 42);
    \u0275\u0275text(56, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ElectronicInvoicesComponent_ng_container_47_tr_32_option_57_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "label", 45)(59, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).generateRetention, $event) || (ctx_r0.getForm(doc_r3.id).generateRetention = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Generar Retenci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "label", 45)(62, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ElectronicInvoicesComponent_ng_container_47_tr_32_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r4);
      const doc_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.getForm(doc_r3.id).updatePersonData, $event) || (ctx_r0.getForm(doc_r3.id).updatePersonData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Actualizar datos en la persona ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 48)(65, "h3", 49);
    \u0275\u0275text(66, " Homologaci\xF3n de Productos y Cuentas ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_container_67_Template, 52, 17, "ng-container", 50)(68, ElectronicInvoicesComponent_ng_container_47_tr_32_ng_template_68_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const allHomologated_r18 = \u0275\u0275reference(69);
    const doc_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.homologatingId === doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.homologatingId === doc_r3.id ? "Procesando..." : "Homologar", " ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).payableAccountId);
    \u0275\u0275property("name", "payable_" + doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).tipAccountId);
    \u0275\u0275property("name", "tip_" + doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).costCenterId);
    \u0275\u0275property("name", "cost_" + doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.costCenters);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).recurringAccountId);
    \u0275\u0275property("name", "recurring_" + doc_r3.id)("disabled", !ctx_r0.getForm(doc_r3.id).useRecurringAccount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.accounts);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).useRecurringAccount);
    \u0275\u0275property("name", "useRecurring_" + doc_r3.id);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).retentionIrCode);
    \u0275\u0275property("name", "retIr_" + doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.retentionIrCodes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).retentionIvaCode);
    \u0275\u0275property("name", "retIva_" + doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.retentionIvaCodes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).generateRetention);
    \u0275\u0275property("name", "genRet_" + doc_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.getForm(doc_r3.id).updatePersonData);
    \u0275\u0275property("name", "updPerson_" + doc_r3.id);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.getPendingLineItem(doc_r3.id))("ngIfElse", allHomologated_r18);
  }
}
function ElectronicInvoicesComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr")(2, "td")(3, "input", 16);
    \u0275\u0275listener("change", function ElectronicInvoicesComponent_ng_container_47_Template_input_change_3_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSelect(doc_r3.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 25);
    \u0275\u0275listener("click", function ElectronicInvoicesComponent_ng_container_47_Template_button_click_15_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewXml(doc_r3));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 26);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 28)(23, "button", 29);
    \u0275\u0275listener("click", function ElectronicInvoicesComponent_ng_container_47_Template_button_click_23_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleExpand(doc_r3.id));
    });
    \u0275\u0275elementStart(24, "span", 4);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 30);
    \u0275\u0275listener("click", function ElectronicInvoicesComponent_ng_container_47_Template_button_click_26_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewXml(doc_r3));
    });
    \u0275\u0275elementStart(27, "span", 4);
    \u0275\u0275text(28, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 31);
    \u0275\u0275listener("click", function ElectronicInvoicesComponent_ng_container_47_Template_button_click_29_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteDocument(doc_r3.id));
    });
    \u0275\u0275elementStart(30, "span", 4);
    \u0275\u0275text(31, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(32, ElectronicInvoicesComponent_ng_container_47_tr_32_Template, 70, 29, "tr", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("row-expanded", ctx_r0.isExpanded(doc_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.selectedIds.has(doc_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 15, doc_r3.issueDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", doc_r3.authorizationDate ? \u0275\u0275pipeBind2(9, 18, doc_r3.authorizationDate, "dd/MM/yyyy") : "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r3.documentNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r3.supplierName);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", doc_r3.fileName || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r3.documentLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getReviewClass(doc_r3.reviewStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getReviewLabel(doc_r3.reviewStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r3.reason || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.isExpanded(doc_r3.id) ? "Contraer" : "Expandir opciones");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isExpanded(doc_r3.id) ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.isExpanded(doc_r3.id));
  }
}
var ElectronicInvoicesComponent = class _ElectronicInvoicesComponent {
  registrationService;
  api;
  activeTab = "partial";
  partialDocuments = [];
  pendingDocuments = [];
  selectedIds = /* @__PURE__ */ new Set();
  expandedId = null;
  homologationForms = /* @__PURE__ */ new Map();
  lineItemsByDoc = /* @__PURE__ */ new Map();
  lineItemForms = /* @__PURE__ */ new Map();
  accounts = [];
  products = [];
  costCenters = [];
  retentionIrCodes = [];
  retentionIvaCodes = [];
  units = ["UN", "KG", "LT", "MT", "GL", "BX", "SR"];
  uploading = false;
  homologatingId = null;
  acceptingLineId = null;
  uploadError = "";
  dragOver = false;
  constructor(registrationService, api) {
    this.registrationService = registrationService;
    this.api = api;
  }
  ngOnInit() {
    this.loadDocuments();
    this.loadCatalogs();
  }
  get activeDocuments() {
    return this.activeTab === "partial" ? this.partialDocuments : this.pendingDocuments;
  }
  loadCatalogs() {
    forkJoin({
      accounts: this.api.get("accounts"),
      products: this.api.get("products"),
      costCenters: this.api.get("cost-centers"),
      retentionCodes: this.api.get("tax-calculations/retention-codes")
    }).subscribe({
      next: ({ accounts, products, costCenters, retentionCodes }) => {
        this.accounts = accounts;
        this.products = products;
        this.costCenters = costCenters;
        this.retentionIrCodes = retentionCodes.filter((c) => c.type === "SOURCE");
        this.retentionIvaCodes = retentionCodes.filter((c) => c.type === "IVA");
      },
      error: (err) => console.error("Error loading catalogs:", err)
    });
  }
  loadDocuments() {
    this.registrationService.getDocuments("PARTIAL").subscribe({
      next: (data) => {
        this.partialDocuments = data;
        this.syncForms(data);
      },
      error: (err) => console.error("Error loading partial documents:", err)
    });
    this.registrationService.getDocuments("PENDING_PROCESS").subscribe({
      next: (data) => {
        this.pendingDocuments = data;
        this.syncForms(data);
      },
      error: (err) => console.error("Error loading pending documents:", err)
    });
  }
  syncForms(docs) {
    for (const doc of docs) {
      this.homologationForms.set(doc.id, this.formFromDocument(doc));
    }
  }
  formFromDocument(doc) {
    return {
      payableAccountId: doc.payableAccountId || "",
      tipAccountId: doc.tipAccountId || "",
      costCenterId: doc.costCenterId || "",
      recurringAccountId: doc.recurringAccountId || "",
      useRecurringAccount: doc.useRecurringAccount || false,
      retentionIrCode: doc.retentionIrCode || "",
      retentionIvaCode: doc.retentionIvaCode || "",
      generateRetention: doc.generateRetention || false,
      updatePersonData: doc.updatePersonData || false
    };
  }
  getForm(docId) {
    if (!this.homologationForms.has(docId)) {
      const doc = [...this.partialDocuments, ...this.pendingDocuments].find((d) => d.id === docId);
      this.homologationForms.set(docId, doc ? this.formFromDocument(doc) : this.emptyForm());
    }
    return this.homologationForms.get(docId);
  }
  emptyForm() {
    return {
      payableAccountId: "",
      tipAccountId: "",
      costCenterId: "",
      recurringAccountId: "",
      useRecurringAccount: false,
      retentionIrCode: "",
      retentionIvaCode: "",
      generateRetention: false,
      updatePersonData: false
    };
  }
  accountLabel(id) {
    const account = this.accounts.find((a) => a.id === id);
    return account ? `${account.code} - ${account.name}` : "";
  }
  setTab(tab) {
    this.activeTab = tab;
    this.selectedIds.clear();
    this.expandedId = null;
  }
  toggleExpand(docId) {
    if (this.expandedId === docId) {
      this.expandedId = null;
      return;
    }
    this.expandedId = docId;
    this.loadLineItems(docId);
  }
  isExpanded(docId) {
    return this.expandedId === docId;
  }
  loadLineItems(docId) {
    this.registrationService.getLineItems(docId).subscribe({
      next: (items) => {
        this.lineItemsByDoc.set(docId, items);
        for (const item of items) {
          const key = this.lineFormKey(docId, item.id);
          if (!this.lineItemForms.has(key)) {
            this.lineItemForms.set(key, this.emptyLineForm());
          }
        }
      },
      error: (err) => console.error("Error loading line items:", err)
    });
  }
  lineFormKey(docId, lineId) {
    return `${docId}_${lineId}`;
  }
  getLineItems(docId) {
    return this.lineItemsByDoc.get(docId) || [];
  }
  getPendingLineItem(docId) {
    return this.getLineItems(docId).find((l) => !l.isHomologated) || null;
  }
  getPendingLineItemsCount(docId) {
    return this.getLineItems(docId).filter((l) => !l.isHomologated).length;
  }
  getLineForm(docId, lineId) {
    const key = this.lineFormKey(docId, lineId);
    if (!this.lineItemForms.has(key)) {
      this.lineItemForms.set(key, this.emptyLineForm());
    }
    return this.lineItemForms.get(key);
  }
  emptyLineForm() {
    return {
      mappingType: "PRODUCT",
      internalCode: "",
      unit: "UN",
      mappedProductId: "",
      mappedAccountId: ""
    };
  }
  acceptLineItem(docId, line) {
    const form = this.getLineForm(docId, line.id);
    if (form.mappingType === "PRODUCT" && !form.mappedProductId) {
      alert("Seleccione el producto o cuenta a homologar");
      return;
    }
    if (form.mappingType === "ACCOUNT" && !form.mappedAccountId) {
      alert("Seleccione la cuenta contable a homologar");
      return;
    }
    this.acceptingLineId = line.id;
    this.registrationService.homologateLineItem(docId, line.id, form).subscribe({
      next: () => {
        this.acceptingLineId = null;
        this.loadLineItems(docId);
      },
      error: (err) => {
        this.acceptingLineId = null;
        alert(err.error?.message || "Error al aceptar la homologaci\xF3n");
      }
    });
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files?.length) {
      this.uploadFiles(Array.from(input.files));
      input.value = "";
    }
  }
  onDrop(event) {
    event.preventDefault();
    this.dragOver = false;
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.uploadFiles(Array.from(files));
    }
  }
  onDragOver(event) {
    event.preventDefault();
    this.dragOver = true;
  }
  onDragLeave() {
    this.dragOver = false;
  }
  uploadFiles(files) {
    this.uploading = true;
    this.uploadError = "";
    let completed = 0;
    let hadError = false;
    files.forEach((file) => {
      this.registrationService.uploadDocument(file).subscribe({
        next: () => {
          completed++;
          if (completed === files.length) {
            this.uploading = false;
            if (!hadError)
              this.loadDocuments();
          }
        },
        error: (err) => {
          hadError = true;
          completed++;
          this.uploadError = err.error?.message || `Error al subir ${file.name}`;
          if (completed === files.length) {
            this.uploading = false;
            this.loadDocuments();
          }
        }
      });
    });
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
      this.activeDocuments.forEach((d) => this.selectedIds.add(d.id));
    }
  }
  isAllSelected() {
    return this.activeDocuments.length > 0 && this.activeDocuments.every((d) => this.selectedIds.has(d.id));
  }
  homologate(docId) {
    const form = this.getForm(docId);
    if (!form.payableAccountId) {
      alert("Seleccione la cuenta por pagar antes de homologar");
      return;
    }
    const pending = this.getPendingLineItemsCount(docId);
    if (pending > 0) {
      alert(`Quedan ${pending} producto(s) del proveedor por homologar. Use Aceptar en cada \xEDtem.`);
      return;
    }
    this.homologatingId = docId;
    this.registrationService.homologate(docId, {
      payableAccountId: form.payableAccountId || void 0,
      tipAccountId: form.tipAccountId || void 0,
      costCenterId: form.costCenterId || void 0,
      recurringAccountId: form.recurringAccountId || void 0,
      useRecurringAccount: form.useRecurringAccount,
      retentionIrCode: form.retentionIrCode || void 0,
      retentionIvaCode: form.retentionIvaCode || void 0,
      generateRetention: form.generateRetention,
      updatePersonData: form.updatePersonData
    }).subscribe({
      next: () => {
        this.homologatingId = null;
        this.expandedId = null;
        this.loadDocuments();
      },
      error: (err) => {
        this.homologatingId = null;
        alert(err.error?.message || "Error al homologar el documento");
      }
    });
  }
  updateReviewStatus(id, status) {
    this.registrationService.updateReviewStatus(id, status).subscribe({
      next: () => this.loadDocuments(),
      error: (err) => alert(err.error?.message || "Error al actualizar el estado")
    });
  }
  markReady(id) {
    this.registrationService.markReady(id).subscribe({
      next: () => this.loadDocuments(),
      error: (err) => alert(err.error?.message || "Error al marcar como listo")
    });
  }
  deleteDocument(id) {
    if (!confirm("\xBFEliminar este documento del registro?"))
      return;
    this.registrationService.deleteDocument(id).subscribe({
      next: () => {
        if (this.expandedId === id)
          this.expandedId = null;
        this.homologationForms.delete(id);
        this.lineItemsByDoc.delete(id);
        this.loadDocuments();
      },
      error: (err) => alert(err.error?.message || "Error al eliminar")
    });
  }
  viewXml(doc) {
    alert(`Documento: ${doc.documentLabel}
Proveedor: ${doc.supplierName}
` + (doc.accessKey ? `Clave: ${doc.accessKey}
` : "") + (doc.total != null ? `Total: $${doc.total}` : ""));
  }
  getReviewLabel(status) {
    const labels = {
      REVIEWED: "Revisado",
      NOT_REVIEWED: "No revisado",
      PENDING_REVIEW: "Por Revisar"
    };
    return labels[status];
  }
  getReviewClass(status) {
    const classes = {
      REVIEWED: "status-reviewed",
      NOT_REVIEWED: "status-not-reviewed",
      PENDING_REVIEW: "status-pending-review"
    };
    return classes[status];
  }
  static \u0275fac = function ElectronicInvoicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElectronicInvoicesComponent)(\u0275\u0275directiveInject(ElectronicRegistrationService), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ElectronicInvoicesComponent, selectors: [["app-electronic-invoices"]], decls: 51, vars: 16, consts: [["allHomologated", ""], [1, "electronic-registration-container"], [1, "page-header"], [1, "btn", "btn-primary", "upload-btn"], [1, "material-icons"], ["type", "file", "accept", ".xml,application/xml,text/xml,*/*", "multiple", "", "hidden", "", 3, "change", "disabled"], [1, "upload-zone", 3, "drop", "dragover", "dragleave"], [1, "material-icons", "upload-icon"], ["class", "upload-hint", 4, "ngIf"], ["class", "upload-error", 4, "ngIf"], [1, "tabs"], ["type", "button", 1, "tab", 3, "click"], ["class", "info-banner", 4, "ngIf"], [1, "documents-list", "card"], [1, "table-container"], [1, "col-check"], ["type", "checkbox", 3, "change", "checked"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "upload-hint"], [1, "upload-error"], [1, "info-banner"], ["colspan", "9", 1, "empty-row"], [1, "supplier-cell"], ["type", "button", 1, "doc-link", 3, "click", "title"], [1, "status-badge", 3, "ngClass"], [1, "reason-cell"], [1, "actions-cell"], ["type", "button", 1, "btn-icon", "btn-expand", 3, "click", "title"], ["type", "button", "title", "Ver detalle", 1, "btn-icon", 3, "click"], ["type", "button", "title", "Eliminar", 1, "btn-icon", "btn-danger", 3, "click"], ["class", "expand-row", 4, "ngIf"], [1, "expand-row"], ["colspan", "9"], [1, "homologation-panel"], [1, "panel-top-actions"], ["type", "button", 1, "btn", "btn-primary", "btn-homologate-top", 3, "click", "disabled"], [1, "homologation-columns"], [1, "homologation-col"], [1, "form-group"], [3, "ngModelChange", "ngModel", "name"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "name", "disabled"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "name"], [1, "section-title"], [1, "product-homologation-section"], [1, "product-homologation-title"], [4, "ngIf", "ngIfElse"], [3, "value"], [1, "product-homologation-grid"], [1, "product-homologation-side"], ["type", "text", "placeholder", "C\xF3digo interno", 3, "ngModelChange", "ngModel", "name"], [1, "mapping-type-group"], [1, "radio-label"], ["type", "radio", "value", "ACCOUNT", 3, "ngModelChange", "name", "ngModel"], ["type", "radio", "value", "PRODUCT", 3, "ngModelChange", "name", "ngModel"], [3, "ngModel", "name", "ngModelChange", 4, "ngIf"], [1, "product-homologation-side", "supplier-side"], [1, "supplier-hint"], [1, "readonly-field"], [1, "accept-line-actions"], ["type", "button", 1, "btn", "btn-primary", "btn-accept", 3, "click", "disabled"], ["class", "pending-items-note", 4, "ngIf"], [1, "pending-items-note"], [1, "all-homologated-msg"]], template: function ElectronicInvoicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1");
      \u0275\u0275text(3, "Registro Electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "label", 3)(5, "span", 4);
      \u0275\u0275text(6, "upload_file");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Subir XML / Documento ");
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275listener("change", function ElectronicInvoicesComponent_Template_input_change_8_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275listener("drop", function ElectronicInvoicesComponent_Template_div_drop_9_listener($event) {
        return ctx.onDrop($event);
      })("dragover", function ElectronicInvoicesComponent_Template_div_dragover_9_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function ElectronicInvoicesComponent_Template_div_dragleave_9_listener() {
        return ctx.onDragLeave();
      });
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "cloud_upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Arrastre archivos XML o documentos aqu\xED, o use el bot\xF3n de subida");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, ElectronicInvoicesComponent_span_14_Template, 2, 0, "span", 8)(15, ElectronicInvoicesComponent_span_15_Template, 2, 1, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275listener("click", function ElectronicInvoicesComponent_Template_button_click_17_listener() {
        return ctx.setTab("partial");
      });
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function ElectronicInvoicesComponent_Template_button_click_19_listener() {
        return ctx.setTab("pending");
      });
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, ElectronicInvoicesComponent_div_21_Template, 5, 0, "div", 12);
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "table")(25, "thead")(26, "tr")(27, "th", 15)(28, "input", 16);
      \u0275\u0275listener("change", function ElectronicInvoicesComponent_Template_input_change_28_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "F. Emisi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "F. Autorizaci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "N\xB0 Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Proveedor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Documento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Motivo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "Acciones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "tbody");
      \u0275\u0275template(46, ElectronicInvoicesComponent_tr_46_Template, 3, 0, "tr", 17)(47, ElectronicInvoicesComponent_ng_container_47_Template, 33, 21, "ng-container", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 19)(49, "span");
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275classProp("drag-over", ctx.dragOver);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadError);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "partial");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Parciales (", ctx.partialDocuments.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "pending");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Por procesar (", ctx.pendingDocuments.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "partial");
      \u0275\u0275advance(7);
      \u0275\u0275property("checked", ctx.isAllSelected());
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", ctx.activeDocuments.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.activeDocuments);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" P\xE1gina 1 de 1 \u2014 Total: ", ctx.activeDocuments.length, " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group[_ngcontent-%COMP%]   input.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.readonly[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #cbd5e1;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.electronic-registration-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 8px;\n  padding: 32px;\n  text-align: center;\n  margin-bottom: 24px;\n  background: white;\n  transition: border-color 0.2s, background 0.2s;\n}\n.upload-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.upload-zone[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.upload-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.upload-zone[_ngcontent-%COMP%]   .upload-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #3b82f6;\n  font-size: 14px;\n}\n.upload-zone[_ngcontent-%COMP%]   .upload-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin-bottom: 0;\n  border-bottom: 2px solid #e2e8f0;\n}\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n.tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background: #dbeafe;\n  border: 1px solid #93c5fd;\n  border-radius: 6px;\n  margin: 16px 0;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.col-check[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.supplier-cell[_ngcontent-%COMP%] {\n  max-width: 220px;\n  word-break: break-word;\n}\n.reason-cell[_ngcontent-%COMP%] {\n  max-width: 280px;\n  font-size: 13px;\n  color: #64748b;\n}\n.doc-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #3b82f6;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 0;\n  text-decoration: underline;\n}\n.doc-link[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-reviewed[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: white;\n}\n.status-not-reviewed[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.status-pending-review[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   .status-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  color: #64748b;\n  padding: 0;\n  vertical-align: middle;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-icon.btn-success[_ngcontent-%COMP%]:hover {\n  background: #d1fae5;\n  color: #059669;\n}\n.btn-icon.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-reviewed-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.status-not-reviewed-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.status-pending-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 32px !important;\n}\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 16px;\n  font-size: 13px;\n  color: #64748b;\n}\ntr.row-expanded[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.expand-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  border-bottom: 2px solid #e2e8f0;\n  background: #fafbfc;\n}\n.homologation-panel[_ngcontent-%COMP%] {\n  padding: 20px 24px 16px;\n  border-top: 1px solid #e2e8f0;\n}\n.panel-top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.btn-homologate-top[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-homologate-top[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.homologation-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .homologation-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.homologation-col[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n}\n.homologation-col[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.homologation-col[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.homologation-col[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n  background: white;\n}\n.homologation-col[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.homologation-col[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #475569;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.product-homologation-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 2px solid #e2e8f0;\n}\n.product-homologation-title[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  text-align: center;\n}\n.product-homologation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 20px;\n}\n@media (max-width: 768px) {\n  .product-homologation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.product-homologation-side[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 14px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.product-homologation-side[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.product-homologation-side[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.product-homologation-side[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.product-homologation-side[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n  background: white;\n}\n.product-homologation-side.supplier-side[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 4px;\n  padding: 12px;\n}\n.supplier-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-style: italic;\n  margin: -8px 0 12px 0;\n}\n.mapping-type-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #475569;\n  cursor: pointer;\n}\n.readonly-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.readonly-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.readonly-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 10px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #1e293b;\n  word-break: break-word;\n}\n.accept-line-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.btn-accept[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 110px;\n}\n.btn-accept[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pending-items-note[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 13px;\n  color: #b45309;\n  text-align: right;\n}\n.all-homologated-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px;\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  border-radius: 6px;\n  color: #065f46;\n  font-size: 14px;\n}\n.all-homologated-msg[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.btn-expand[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n/*# sourceMappingURL=electronic-invoices.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElectronicInvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-electronic-invoices", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="electronic-registration-container">\r
  <div class="page-header">\r
    <h1>Registro Electr\xF3nico</h1>\r
    <label class="btn btn-primary upload-btn">\r
      <span class="material-icons">upload_file</span>\r
      Subir XML / Documento\r
      <input\r
        type="file"\r
        accept=".xml,application/xml,text/xml,*/*"\r
        multiple\r
        hidden\r
        (change)="onFileSelected($event)"\r
        [disabled]="uploading"\r
      />\r
    </label>\r
  </div>\r
\r
  <div\r
    class="upload-zone"\r
    [class.drag-over]="dragOver"\r
    (drop)="onDrop($event)"\r
    (dragover)="onDragOver($event)"\r
    (dragleave)="onDragLeave()"\r
  >\r
    <span class="material-icons upload-icon">cloud_upload</span>\r
    <p>Arrastre archivos XML o documentos aqu\xED, o use el bot\xF3n de subida</p>\r
    <span class="upload-hint" *ngIf="uploading">Procesando archivos...</span>\r
    <span class="upload-error" *ngIf="uploadError">{{ uploadError }}</span>\r
  </div>\r
\r
  <div class="tabs">\r
    <button\r
      type="button"\r
      class="tab"\r
      [class.active]="activeTab === 'partial'"\r
      (click)="setTab('partial')"\r
    >\r
      Parciales ({{ partialDocuments.length }})\r
    </button>\r
    <button\r
      type="button"\r
      class="tab"\r
      [class.active]="activeTab === 'pending'"\r
      (click)="setTab('pending')"\r
    >\r
      Por procesar ({{ pendingDocuments.length }})\r
    </button>\r
  </div>\r
\r
  <div class="info-banner" *ngIf="activeTab === 'partial'">\r
    <span class="material-icons">info</span>\r
    <span>\r
      Informaci\xF3n: Tus comprobantes han sido procesados parcialmente y necesitan\r
      de tu revisi\xF3n para completar la carga correctamente.\r
    </span>\r
  </div>\r
\r
  <div class="documents-list card">\r
    <div class="table-container">\r
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
            <th>F. Emisi\xF3n</th>\r
            <th>F. Autorizaci\xF3n</th>\r
            <th>N\xB0 Documento</th>\r
            <th>Proveedor</th>\r
            <th>Documento</th>\r
            <th>Estado</th>\r
            <th>Motivo</th>\r
            <th>Acciones</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="activeDocuments.length === 0">\r
            <td colspan="9" class="empty-row">\r
              No hay documentos en esta secci\xF3n\r
            </td>\r
          </tr>\r
          <ng-container *ngFor="let doc of activeDocuments">\r
            <tr [class.row-expanded]="isExpanded(doc.id)">\r
              <td>\r
                <input\r
                  type="checkbox"\r
                  [checked]="selectedIds.has(doc.id)"\r
                  (change)="toggleSelect(doc.id)"\r
                />\r
              </td>\r
              <td>{{ doc.issueDate | date: 'dd/MM/yyyy' }}</td>\r
              <td>\r
                {{\r
                  doc.authorizationDate\r
                    ? (doc.authorizationDate | date: 'dd/MM/yyyy')\r
                    : '-'\r
                }}\r
              </td>\r
              <td>{{ doc.documentNumber }}</td>\r
              <td class="supplier-cell">{{ doc.supplierName }}</td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="doc-link"\r
                  (click)="viewXml(doc)"\r
                  [title]="doc.fileName || ''"\r
                >\r
                  {{ doc.documentLabel }}\r
                </button>\r
              </td>\r
              <td>\r
                <span\r
                  class="status-badge"\r
                  [ngClass]="getReviewClass(doc.reviewStatus)"\r
                >\r
                  {{ getReviewLabel(doc.reviewStatus) }}\r
                </span>\r
              </td>\r
              <td class="reason-cell">{{ doc.reason || '-' }}</td>\r
              <td class="actions-cell">\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-expand"\r
                  [title]="isExpanded(doc.id) ? 'Contraer' : 'Expandir opciones'"\r
                  (click)="toggleExpand(doc.id)"\r
                >\r
                  <span class="material-icons">{{\r
                    isExpanded(doc.id) ? 'keyboard_arrow_up' : 'keyboard_arrow_down'\r
                  }}</span>\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn-icon"\r
                  title="Ver detalle"\r
                  (click)="viewXml(doc)"\r
                >\r
                  <span class="material-icons">description</span>\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn-icon btn-danger"\r
                  title="Eliminar"\r
                  (click)="deleteDocument(doc.id)"\r
                >\r
                  <span class="material-icons">delete</span>\r
                </button>\r
              </td>\r
            </tr>\r
            <tr *ngIf="isExpanded(doc.id)" class="expand-row">\r
              <td colspan="9">\r
                <div class="homologation-panel">\r
                  <div class="panel-top-actions">\r
                    <button\r
                      type="button"\r
                      class="btn btn-primary btn-homologate-top"\r
                      [disabled]="homologatingId === doc.id"\r
                      (click)="homologate(doc.id)"\r
                    >\r
                      <span class="material-icons">sync</span>\r
                      {{\r
                        homologatingId === doc.id ? 'Procesando...' : 'Homologar'\r
                      }}\r
                    </button>\r
                  </div>\r
                  <div class="homologation-columns">\r
                    <div class="homologation-col">\r
                      <div class="form-group">\r
                        <label>Cuenta Por Pagar *</label>\r
                        <select\r
                          [(ngModel)]="getForm(doc.id).payableAccountId"\r
                          [name]="'payable_' + doc.id"\r
                        >\r
                          <option value="">Buscar cuenta...</option>\r
                          <option *ngFor="let acc of accounts" [value]="acc.id">\r
                            {{ acc.code }} - {{ acc.name }}\r
                          </option>\r
                        </select>\r
                      </div>\r
                      <div class="form-group">\r
                        <label>Cuenta Propina</label>\r
                        <select\r
                          [(ngModel)]="getForm(doc.id).tipAccountId"\r
                          [name]="'tip_' + doc.id"\r
                        >\r
                          <option value="">Seleccionar...</option>\r
                          <option *ngFor="let acc of accounts" [value]="acc.id">\r
                            {{ acc.code }} - {{ acc.name }}\r
                          </option>\r
                        </select>\r
                      </div>\r
                      <div class="form-group">\r
                        <label>Centro de Costo</label>\r
                        <select\r
                          [(ngModel)]="getForm(doc.id).costCenterId"\r
                          [name]="'cost_' + doc.id"\r
                        >\r
                          <option value="">Buscar centro...</option>\r
                          <option *ngFor="let cc of costCenters" [value]="cc.id">\r
                            {{ cc.code }} - {{ cc.name }}\r
                          </option>\r
                        </select>\r
                      </div>\r
                      <div class="form-group">\r
                        <label>Cuenta Recurrente</label>\r
                        <select\r
                          [(ngModel)]="getForm(doc.id).recurringAccountId"\r
                          [name]="'recurring_' + doc.id"\r
                          [disabled]="!getForm(doc.id).useRecurringAccount"\r
                        >\r
                          <option value="">Seleccionar...</option>\r
                          <option *ngFor="let acc of accounts" [value]="acc.id">\r
                            {{ acc.code }} - {{ acc.name }}\r
                          </option>\r
                        </select>\r
                      </div>\r
                      <label class="checkbox-label">\r
                        <input\r
                          type="checkbox"\r
                          [(ngModel)]="getForm(doc.id).useRecurringAccount"\r
                          [name]="'useRecurring_' + doc.id"\r
                        />\r
                        Usar Cuenta Recurrente\r
                      </label>\r
                    </div>\r
\r
                    <div class="homologation-col">\r
                      <h4 class="section-title">\r
                        Generaci\xF3n de retenciones en documento\r
                      </h4>\r
                      <div class="form-group">\r
                        <label>Retenci\xF3n IR</label>\r
                        <select\r
                          [(ngModel)]="getForm(doc.id).retentionIrCode"\r
                          [name]="'retIr_' + doc.id"\r
                        >\r
                          <option value="">Seleccionar...</option>\r
                          <option\r
                            *ngFor="let code of retentionIrCodes"\r
                            [value]="code.code"\r
                          >\r
                            {{ code.code }} - {{ code.description }}\r
                          </option>\r
                        </select>\r
                      </div>\r
                      <div class="form-group">\r
                        <label>Retenci\xF3n IVA</label>\r
                        <select\r
                          [(ngModel)]="getForm(doc.id).retentionIvaCode"\r
                          [name]="'retIva_' + doc.id"\r
                        >\r
                          <option value="">Seleccionar...</option>\r
                          <option\r
                            *ngFor="let code of retentionIvaCodes"\r
                            [value]="code.code"\r
                          >\r
                            {{ code.code }} - {{ code.description }}\r
                          </option>\r
                        </select>\r
                      </div>\r
                      <label class="checkbox-label">\r
                        <input\r
                          type="checkbox"\r
                          [(ngModel)]="getForm(doc.id).generateRetention"\r
                          [name]="'genRet_' + doc.id"\r
                        />\r
                        Generar Retenci\xF3n\r
                      </label>\r
                      <label class="checkbox-label">\r
                        <input\r
                          type="checkbox"\r
                          [(ngModel)]="getForm(doc.id).updatePersonData"\r
                          [name]="'updPerson_' + doc.id"\r
                        />\r
                        Actualizar datos en la persona\r
                      </label>\r
                    </div>\r
                  </div>\r
\r
                  <div class="product-homologation-section">\r
                    <h3 class="product-homologation-title">\r
                      Homologaci\xF3n de Productos y Cuentas\r
                    </h3>\r
\r
                    <ng-container *ngIf="getPendingLineItem(doc.id) as line; else allHomologated">\r
                      <div class="product-homologation-grid">\r
                        <div class="product-homologation-side">\r
                          <h4>Mis Productos y Cuentas Contables</h4>\r
                          <div class="form-group">\r
                            <label>C\xF3digo</label>\r
                            <input\r
                              type="text"\r
                              [(ngModel)]="getLineForm(doc.id, line.id).internalCode"\r
                              [name]="'intCode_' + line.id"\r
                              placeholder="C\xF3digo interno"\r
                            />\r
                          </div>\r
                          <div class="mapping-type-group">\r
                            <label class="radio-label">\r
                              <input\r
                                type="radio"\r
                                [name]="'mapType_' + line.id"\r
                                value="ACCOUNT"\r
                                [(ngModel)]="getLineForm(doc.id, line.id).mappingType"\r
                              />\r
                              Cuentas\r
                            </label>\r
                            <label class="radio-label">\r
                              <input\r
                                type="radio"\r
                                [name]="'mapType_' + line.id"\r
                                value="PRODUCT"\r
                                [(ngModel)]="getLineForm(doc.id, line.id).mappingType"\r
                              />\r
                              Productos\r
                            </label>\r
                          </div>\r
                          <div class="form-group">\r
                            <label>Unidad</label>\r
                            <select\r
                              [(ngModel)]="getLineForm(doc.id, line.id).unit"\r
                              [name]="'unit_' + line.id"\r
                            >\r
                              <option *ngFor="let u of units" [value]="u">\r
                                {{ u }}\r
                              </option>\r
                            </select>\r
                          </div>\r
                          <div class="form-group">\r
                            <label>Producto / Cuenta</label>\r
                            <select\r
                              *ngIf="getLineForm(doc.id, line.id).mappingType === 'PRODUCT'"\r
                              [(ngModel)]="getLineForm(doc.id, line.id).mappedProductId"\r
                              [name]="'product_' + line.id"\r
                            >\r
                              <option value="">Buscar producto...</option>\r
                              <option *ngFor="let p of products" [value]="p.id">\r
                                {{ p.code }} - {{ p.name }}\r
                              </option>\r
                            </select>\r
                            <select\r
                              *ngIf="getLineForm(doc.id, line.id).mappingType === 'ACCOUNT'"\r
                              [(ngModel)]="getLineForm(doc.id, line.id).mappedAccountId"\r
                              [name]="'accountMap_' + line.id"\r
                            >\r
                              <option value="">Buscar cuenta...</option>\r
                              <option *ngFor="let acc of accounts" [value]="acc.id">\r
                                {{ acc.code }} - {{ acc.name }}\r
                              </option>\r
                            </select>\r
                          </div>\r
                        </div>\r
\r
                        <div class="product-homologation-side supplier-side">\r
                          <h4>Productos de mi Proveedor</h4>\r
                          <p class="supplier-hint">\r
                            (Se listan s\xF3lo aquellos productos que no est\xE1n\r
                            homologados)\r
                          </p>\r
                          <div class="readonly-field">\r
                            <label>C\xF3digo</label>\r
                            <span>{{ line.supplierCode }}</span>\r
                          </div>\r
                          <div class="readonly-field">\r
                            <label>Producto</label>\r
                            <span>{{ line.supplierDescription }}</span>\r
                          </div>\r
                          <div class="readonly-field">\r
                            <label>Iva</label>\r
                            <span>{{ line.ivaLabel }}</span>\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <div class="accept-line-actions">\r
                        <button\r
                          type="button"\r
                          class="btn btn-primary btn-accept"\r
                          [disabled]="acceptingLineId === line.id"\r
                          (click)="acceptLineItem(doc.id, line)"\r
                        >\r
                          <span class="material-icons">check</span>\r
                          {{\r
                            acceptingLineId === line.id\r
                              ? 'Guardando...'\r
                              : 'Aceptar'\r
                          }}\r
                        </button>\r
                      </div>\r
                      <p class="pending-items-note" *ngIf="getPendingLineItemsCount(doc.id) > 1">\r
                        Pendientes: {{ getPendingLineItemsCount(doc.id) }} productos por homologar\r
                      </p>\r
                    </ng-container>\r
\r
                    <ng-template #allHomologated>\r
                      <p class="all-homologated-msg">\r
                        <span class="material-icons">check_circle</span>\r
                        Todos los productos del proveedor han sido homologados.\r
                        Puede presionar Homologar para finalizar el documento.\r
                      </p>\r
                    </ng-template>\r
                  </div>\r
                </div>\r
              </td>\r
            </tr>\r
          </ng-container>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="table-footer">\r
      <span> P\xE1gina 1 de 1 \u2014 Total: {{ activeDocuments.length }} </span>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/electronic-invoices/electronic-invoices.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.form-group input.readonly,\n.form-group select.readonly,\n.form-group textarea.readonly {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n}\n.table-container {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: #f1f5f9;\n}\ntable thead th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #475569;\n  font-size: 14px;\n  border-bottom: 2px solid #e2e8f0;\n}\ntable tbody tr {\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.2s;\n}\ntable tbody tr:hover {\n  background: #f8fafc;\n}\ntable tbody td {\n  padding: 12px;\n  color: #1e293b;\n  font-size: 14px;\n}\n.badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.badge.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.btn.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-secondary {\n  background: #e2e8f0;\n  color: #475569;\n}\n.btn.btn-secondary:hover {\n  background: #cbd5e1;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.electronic-registration-container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.upload-btn {\n  cursor: pointer;\n  margin: 0;\n}\n.upload-zone {\n  border: 2px dashed #cbd5e1;\n  border-radius: 8px;\n  padding: 32px;\n  text-align: center;\n  margin-bottom: 24px;\n  background: white;\n  transition: border-color 0.2s, background 0.2s;\n}\n.upload-zone.drag-over {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.upload-zone .upload-icon {\n  font-size: 48px;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.upload-zone p {\n  color: #64748b;\n  margin: 0;\n}\n.upload-zone .upload-hint {\n  display: block;\n  margin-top: 8px;\n  color: #3b82f6;\n  font-size: 14px;\n}\n.upload-zone .upload-error {\n  display: block;\n  margin-top: 8px;\n  color: #dc2626;\n  font-size: 14px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  margin-bottom: 0;\n  border-bottom: 2px solid #e2e8f0;\n}\n.tabs .tab {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tabs .tab:hover {\n  color: #1e293b;\n}\n.tabs .tab.active {\n  color: #3b82f6;\n  border-bottom-color: #3b82f6;\n}\n.info-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background: #dbeafe;\n  border: 1px solid #93c5fd;\n  border-radius: 6px;\n  margin: 16px 0;\n  color: #1e40af;\n  font-size: 14px;\n}\n.info-banner .material-icons {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.col-check {\n  width: 40px;\n}\n.supplier-cell {\n  max-width: 220px;\n  word-break: break-word;\n}\n.reason-cell {\n  max-width: 280px;\n  font-size: 13px;\n  color: #64748b;\n}\n.doc-link {\n  background: none;\n  border: none;\n  color: #3b82f6;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 0;\n  text-decoration: underline;\n}\n.doc-link:hover {\n  color: #2563eb;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-reviewed {\n  background: #22c55e;\n  color: white;\n}\n.status-not-reviewed {\n  background: #ef4444;\n  color: white;\n}\n.status-pending-review {\n  background: #f59e0b;\n  color: white;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.actions-cell .status-menu {\n  display: inline-flex;\n  gap: 2px;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n.btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 4px;\n  background: transparent;\n  cursor: pointer;\n  color: #64748b;\n  padding: 0;\n  vertical-align: middle;\n}\n.btn-icon:hover {\n  background: #f1f5f9;\n}\n.btn-icon .material-icons {\n  font-size: 20px;\n}\n.btn-icon.btn-success:hover {\n  background: #d1fae5;\n  color: #059669;\n}\n.btn-icon.btn-danger:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-reviewed-icon {\n  color: #22c55e;\n}\n.status-not-reviewed-icon {\n  color: #ef4444;\n}\n.status-pending-icon {\n  color: #f59e0b;\n}\n.empty-row {\n  text-align: center;\n  color: #94a3b8;\n  padding: 32px !important;\n}\n.table-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 16px;\n  font-size: 13px;\n  color: #64748b;\n}\ntr.row-expanded {\n  background: #f8fafc;\n}\n.expand-row td {\n  padding: 0 !important;\n  border-bottom: 2px solid #e2e8f0;\n  background: #fafbfc;\n}\n.homologation-panel {\n  padding: 20px 24px 16px;\n  border-top: 1px solid #e2e8f0;\n}\n.panel-top-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n.btn-homologate-top {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-homologate-top .material-icons {\n  font-size: 18px;\n}\n.homologation-columns {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .homologation-columns {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.homologation-col .section-title {\n  margin: 0 0 16px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n}\n.homologation-col .form-group {\n  margin-bottom: 14px;\n}\n.homologation-col .form-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 6px;\n}\n.homologation-col .form-group select {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n  background: white;\n}\n.homologation-col .form-group select:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.homologation-col .form-group select:disabled {\n  background: #f1f5f9;\n  cursor: not-allowed;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #475569;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.checkbox-label input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.product-homologation-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 2px solid #e2e8f0;\n}\n.product-homologation-title {\n  margin: 0 0 20px 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  text-align: center;\n}\n.product-homologation-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: 20px;\n}\n@media (max-width: 768px) {\n  .product-homologation-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.product-homologation-side h4 {\n  margin: 0 0 14px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.product-homologation-side .form-group {\n  margin-bottom: 12px;\n}\n.product-homologation-side .form-group label {\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.product-homologation-side .form-group input,\n.product-homologation-side .form-group select {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 4px;\n  font-size: 14px;\n  background: white;\n}\n.product-homologation-side.supplier-side {\n  background: #f8fafc;\n  border-radius: 4px;\n  padding: 12px;\n}\n.supplier-hint {\n  font-size: 12px;\n  color: #64748b;\n  font-style: italic;\n  margin: -8px 0 12px 0;\n}\n.mapping-type-group {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.radio-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #475569;\n  cursor: pointer;\n}\n.readonly-field {\n  margin-bottom: 12px;\n}\n.readonly-field label {\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.readonly-field span {\n  display: block;\n  padding: 8px 10px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #1e293b;\n  word-break: break-word;\n}\n.accept-line-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.btn-accept {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 110px;\n}\n.btn-accept .material-icons {\n  font-size: 18px;\n}\n.pending-items-note {\n  margin: 12px 0 0;\n  font-size: 13px;\n  color: #b45309;\n  text-align: right;\n}\n.all-homologated-msg {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px;\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  border-radius: 6px;\n  color: #065f46;\n  font-size: 14px;\n}\n.all-homologated-msg .material-icons {\n  color: #22c55e;\n}\n.btn-expand .material-icons {\n  color: #3b82f6;\n}\n/*# sourceMappingURL=electronic-invoices.component.css.map */\n"] }]
  }], () => [{ type: ElectronicRegistrationService }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ElectronicInvoicesComponent, { className: "ElectronicInvoicesComponent", filePath: "src/app/pages/electronic-invoices/electronic-invoices.component.ts", lineNumber: 28 });
})();
export {
  ElectronicInvoicesComponent
};
//# sourceMappingURL=chunk-VEIUXRUR.js.map
