import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/app/core/services/inventory.service.ts
var InventoryService = class _InventoryService {
  api;
  constructor(api) {
    this.api = api;
  }
  getProducts() {
    return this.api.get("products");
  }
  getProductById(id) {
    return this.api.get(`products/${id}`);
  }
  createProduct(product) {
    return this.api.post("products", product);
  }
  getMovements(productId) {
    const endpoint = productId ? `inventory-movements?productId=${productId}` : "inventory-movements";
    return this.api.get(endpoint);
  }
  createMovement(movement) {
    return this.api.post("inventory-movements", movement);
  }
  static \u0275fac = function InventoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryService, factory: _InventoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  InventoryService
};
//# sourceMappingURL=chunk-RXEC6QSF.js.map
