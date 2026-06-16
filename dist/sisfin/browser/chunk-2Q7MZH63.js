import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/journal-entry.service.ts
var JournalEntryService = class _JournalEntryService {
  api;
  constructor(api) {
    this.api = api;
  }
  getAll(startDate, endDate, status) {
    const params = {};
    if (startDate)
      params.startDate = startDate;
    if (endDate)
      params.endDate = endDate;
    if (status)
      params.status = status;
    const queryString = new URLSearchParams(params).toString();
    return this.api.get(`journal-entries${queryString ? "?" + queryString : ""}`);
  }
  getById(id) {
    return this.api.get(`journal-entries/${id}`);
  }
  create(entry) {
    return this.api.post("journal-entries", entry);
  }
  post(id) {
    return this.api.patch(`journal-entries/${id}/post`, {});
  }
  cancel(id, reason) {
    return this.api.patch(`journal-entries/${id}/cancel`, {
      reason
    });
  }
  getGeneralLedger(accountId, startDate, endDate, costCenterId) {
    const params = { accountId, startDate, endDate };
    if (costCenterId)
      params.costCenterId = costCenterId;
    const queryString = new URLSearchParams(params).toString();
    return this.api.get(`journal-entries/general-ledger?${queryString}`);
  }
  static \u0275fac = function JournalEntryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JournalEntryService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JournalEntryService, factory: _JournalEntryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalEntryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  JournalEntryService
};
//# sourceMappingURL=chunk-2Q7MZH63.js.map
