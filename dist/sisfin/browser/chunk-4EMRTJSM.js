import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/payables.service.ts
var PayablesService = class _PayablesService {
  api;
  constructor(api) {
    this.api = api;
  }
  getSuppliers() {
    return this.api.get("suppliers");
  }
  createSupplier(supplier) {
    return this.api.post("suppliers", supplier);
  }
  getSupplierInvoices(supplierId) {
    const endpoint = supplierId ? `supplier-invoices?supplierId=${supplierId}` : "supplier-invoices";
    return this.api.get(endpoint);
  }
  createSupplierInvoice(invoice) {
    return this.api.post("supplier-invoices", invoice);
  }
  createSupplierPayment(payment) {
    return this.api.post("supplier-payments", payment);
  }
  static \u0275fac = function PayablesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayablesService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PayablesService, factory: _PayablesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayablesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  PayablesService
};
//# sourceMappingURL=chunk-4EMRTJSM.js.map
