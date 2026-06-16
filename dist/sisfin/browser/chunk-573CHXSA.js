import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/financial-document.service.ts
var FinancialDocumentService = class _FinancialDocumentService {
  api;
  constructor(api) {
    this.api = api;
  }
  getAll() {
    return this.api.get("financial-documents");
  }
  getById(id) {
    return this.api.get(`financial-documents/${id}`);
  }
  create(dto) {
    return this.api.post("financial-documents", dto);
  }
  parseXml(file) {
    return this.api.uploadFile("financial-documents/parse-xml", file);
  }
  static \u0275fac = function FinancialDocumentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinancialDocumentService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FinancialDocumentService, factory: _FinancialDocumentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinancialDocumentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  FinancialDocumentService
};
//# sourceMappingURL=chunk-573CHXSA.js.map
