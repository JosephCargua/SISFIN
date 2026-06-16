import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-U6ZAUMMI.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000"
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http;
  apiUrl = environment.apiUrl || "http://localhost:3000";
  constructor(http) {
    this.http = http;
  }
  get(endpoint, params) {
    return this.http.get(`${this.apiUrl}/${endpoint}`, { params });
  }
  post(endpoint, data) {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }
  patch(endpoint, data) {
    return this.http.patch(`${this.apiUrl}/${endpoint}`, data);
  }
  delete(endpoint) {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
  downloadFile(endpoint, params) {
    return this.http.get(`${this.apiUrl}/${endpoint}`, {
      params,
      responseType: "blob"
    });
  }
  uploadFile(endpoint, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/${endpoint}`, formData);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-JY7PP6BA.js.map
