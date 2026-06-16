import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/banking.service.ts
var BankingService = class _BankingService {
  api;
  constructor(api) {
    this.api = api;
  }
  getBankAccounts() {
    return this.api.get("bank-accounts");
  }
  createBankAccount(account) {
    return this.api.post("bank-accounts", account);
  }
  getCashAccounts() {
    return this.api.get("cash-accounts");
  }
  createCashAccount(account) {
    return this.api.post("cash-accounts", account);
  }
  getTransactions(bankAccountId) {
    const endpoint = bankAccountId ? `bank-transactions?bankAccountId=${bankAccountId}` : "bank-transactions";
    return this.api.get(endpoint);
  }
  createTransaction(transaction) {
    return this.api.post("bank-transactions", transaction);
  }
  static \u0275fac = function BankingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankingService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BankingService, factory: _BankingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  BankingService
};
//# sourceMappingURL=chunk-X5QM4QGZ.js.map
