import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/account.service.ts
var AccountService = class _AccountService {
  api;
  constructor(api) {
    this.api = api;
  }
  getAll() {
    return this.api.get("accounts");
  }
  getHierarchy() {
    return this.api.get("accounts/hierarchy");
  }
  getById(id) {
    return this.api.get(`accounts/${id}`);
  }
  getByCode(code) {
    return this.api.get(`accounts/code/${code}`);
  }
  create(account) {
    return this.api.post("accounts", account);
  }
  deactivate(id) {
    return this.api.patch(`accounts/${id}/deactivate`, {});
  }
  activate(id) {
    return this.api.patch(`accounts/${id}/activate`, {});
  }
  static \u0275fac = function AccountService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  AccountService
};
//# sourceMappingURL=chunk-OIQRSETW.js.map
