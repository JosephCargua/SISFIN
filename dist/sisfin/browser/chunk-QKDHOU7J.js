import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/tax.service.ts
var TaxService = class _TaxService {
  api;
  constructor(api) {
    this.api = api;
  }
  getElectronicInvoices() {
    return this.api.get("electronic-invoices");
  }
  createElectronicInvoice(invoice) {
    return this.api.post("electronic-invoices", invoice);
  }
  authorizeInvoice(id) {
    return this.api.post(`electronic-invoices/${id}/authorize`, {});
  }
  getRetentions() {
    return this.api.get("retentions");
  }
  createRetention(retention) {
    return this.api.post("retentions", retention);
  }
  getATS(year, month) {
    let endpoint = "ats";
    if (year && month) {
      endpoint += `?year=${year}&month=${month}`;
    }
    return this.api.get(endpoint);
  }
  generateATS(year, month) {
    return this.api.post("ats/generate", { year, month });
  }
  static \u0275fac = function TaxService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaxService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaxService, factory: _TaxService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  TaxService
};
//# sourceMappingURL=chunk-QKDHOU7J.js.map
