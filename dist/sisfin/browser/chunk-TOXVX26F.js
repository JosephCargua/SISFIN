import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/receivables.service.ts
var ReceivablesService = class _ReceivablesService {
  api;
  constructor(api) {
    this.api = api;
  }
  getCustomers() {
    return this.api.get("customers");
  }
  createCustomer(customer) {
    return this.api.post("customers", customer);
  }
  getInvoices(customerId) {
    const endpoint = customerId ? `invoices?customerId=${customerId}` : "invoices";
    return this.api.get(endpoint);
  }
  createInvoice(invoice) {
    return this.api.post("invoices", invoice);
  }
  createPayment(payment) {
    return this.api.post("payments", payment);
  }
  static \u0275fac = function ReceivablesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceivablesService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReceivablesService, factory: _ReceivablesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceivablesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  ReceivablesService
};
//# sourceMappingURL=chunk-TOXVX26F.js.map
