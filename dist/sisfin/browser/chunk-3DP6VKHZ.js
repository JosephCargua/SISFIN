import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/automation.service.ts
var AutomationService = class _AutomationService {
  api;
  constructor(api) {
    this.api = api;
  }
  getCostCenters() {
    return this.api.get("cost-centers");
  }
  getCostCentersHierarchy() {
    return this.api.get("cost-centers/hierarchy");
  }
  createCostCenter(costCenter) {
    return this.api.post("cost-centers", costCenter);
  }
  getPeriodLocks() {
    return this.api.get("period-locks");
  }
  createPeriodLock(lock) {
    return this.api.post("period-locks", lock);
  }
  toggleLock(id) {
    return this.api.patch(`period-locks/${id}/toggle`, {});
  }
  static \u0275fac = function AutomationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutomationService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AutomationService, factory: _AutomationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutomationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  AutomationService
};
//# sourceMappingURL=chunk-3DP6VKHZ.js.map
