import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-EFJID6OG.js";
import {
  CommonModule,
  Component,
  NgForOf,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-U6ZAUMMI.js";

// src/app/components/layout/layout.component.ts
function LayoutComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var LayoutComponent = class _LayoutComponent {
  menuItems = [
    { label: "Inicio", route: "/dashboard", icon: "home" },
    {
      label: "Plan de Cuentas",
      route: "/accounts",
      icon: "account_tree"
    },
    {
      label: "Libro Diario",
      route: "/journal-entries",
      icon: "book"
    },
    {
      label: "Libro Mayor",
      route: "/general-ledger",
      icon: "library_books"
    },
    {
      label: "Documentos no electr\xF3nicos",
      route: "/register-document",
      icon: "description"
    },
    {
      label: "Compras o Gastos",
      route: "/register-purchase-expense",
      icon: "shopping_cart"
    },
    {
      label: "Registro Electr\xF3nico",
      route: "/electronic-invoices",
      icon: "receipt_long"
    },
    {
      label: "Consultar Documentos",
      route: "/consult-documents",
      icon: "manage_search"
    },
    {
      label: "Retenciones",
      route: "/retentions",
      icon: "description"
    },
    {
      label: "ATS",
      route: "/ats",
      icon: "file_copy"
    },
    {
      label: "Reportes",
      route: "/reports",
      icon: "assessment"
    },
    {
      label: "Balance de Comprobaci\xF3n",
      route: "/trial-balance",
      icon: "account_balance"
    },
    {
      label: "Inventario",
      route: "/inventory",
      icon: "inventory"
    },
    {
      label: "Cuentas por Cobrar",
      route: "/receivables",
      icon: "account_balance_wallet"
    },
    {
      label: "Cuentas por Pagar",
      route: "/payables",
      icon: "payment"
    },
    {
      label: "Bancos y Caja",
      route: "/banking",
      icon: "account_balance"
    },
    {
      label: "Centros de Costo",
      route: "/cost-centers",
      icon: "business"
    },
    {
      label: "Cierre de Per\xEDodo",
      route: "/period-locks",
      icon: "lock"
    }
  ];
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 15, vars: 1, consts: [[1, "layout-container"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-nav"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "main-content"], [1, "top-bar"], [1, "content-area"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "material-icons"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Movimiento Juan XXIII");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Sistema Contable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 3);
      \u0275\u0275template(8, LayoutComponent_a_8_Template, 5, 3, "a", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "main", 5)(10, "header", 6)(11, "h2");
      \u0275\u0275text(12, "Sistema Contable Del Movimiento Juan XXIII");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275element(14, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.menuItems);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgForOf], styles: ["\n\n.layout-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  background: #1e293b;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 24px 20px;\n  border-bottom: 1px solid #334155;\n}\n.sidebar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.sidebar-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  color: #cbd5e1;\n  text-decoration: none;\n  transition: all 0.2s;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #334155;\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #334155;\n  color: white;\n  border-left-color: #3b82f6;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px 32px;\n  border-bottom: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.top-bar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [RouterModule, CommonModule], template: '<div class="layout-container">\r\n  <aside class="sidebar">\r\n    <div class="sidebar-header">\r\n      <h1>Movimiento Juan XXIII</h1>\r\n      <p>Sistema Contable</p>\r\n    </div>\r\n    <nav class="sidebar-nav">\r\n      <a\r\n        *ngFor="let item of menuItems"\r\n        [routerLink]="item.route"\r\n        routerLinkActive="active"\r\n        class="nav-item"\r\n      >\r\n        <span class="material-icons">{{ item.icon }}</span>\r\n        <span>{{ item.label }}</span>\r\n      </a>\r\n    </nav>\r\n  </aside>\r\n  <main class="main-content">\r\n    <header class="top-bar">\r\n      <h2>Sistema Contable Del Movimiento Juan XXIII</h2>\r\n    </header>\r\n    <div class="content-area">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n', styles: ["/* src/app/components/layout/layout.component.scss */\n.layout-container {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.sidebar {\n  width: 260px;\n  background: #1e293b;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n}\n.sidebar-header {\n  padding: 24px 20px;\n  border-bottom: 1px solid #334155;\n}\n.sidebar-header h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n}\n.sidebar-header p {\n  margin: 4px 0 0 0;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.sidebar-nav {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  color: #cbd5e1;\n  text-decoration: none;\n  transition: all 0.2s;\n  border-left: 3px solid transparent;\n}\n.nav-item .material-icons {\n  font-size: 20px;\n}\n.nav-item:hover {\n  background: #334155;\n  color: white;\n}\n.nav-item.active {\n  background: #334155;\n  color: white;\n  border-left-color: #3b82f6;\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.top-bar {\n  background: white;\n  padding: 20px 32px;\n  border-bottom: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.top-bar h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.content-area {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/components/layout/layout.component.ts", lineNumber: 12 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-TUQKD4FI.js").then((m) => m.DashboardComponent)
      },
      {
        path: "accounts",
        loadComponent: () => import("./chunk-SSUZVACC.js").then((m) => m.AccountsComponent)
      },
      {
        path: "journal-entries",
        loadComponent: () => import("./chunk-Q63OBOHT.js").then((m) => m.JournalEntriesComponent)
      },
      {
        path: "general-ledger",
        loadComponent: () => import("./chunk-UT4RI3IX.js").then((m) => m.GeneralLedgerComponent)
      },
      {
        path: "electronic-invoices",
        loadComponent: () => import("./chunk-VEIUXRUR.js").then((m) => m.ElectronicInvoicesComponent)
      },
      {
        path: "consult-documents",
        loadComponent: () => import("./chunk-RE6SCSRD.js").then((m) => m.ConsultDocumentsComponent)
      },
      {
        path: "register-document",
        loadComponent: () => import("./chunk-K5GJM7XP.js").then((m) => m.RegisterDocumentComponent)
      },
      {
        path: "register-purchase-expense",
        loadComponent: () => import("./chunk-TXNJCCSM.js").then((m) => m.RegisterPurchaseExpenseComponent)
      },
      {
        path: "reports",
        loadComponent: () => import("./chunk-JGUV6MDL.js").then((m) => m.ReportsComponent)
      },
      {
        path: "trial-balance",
        loadComponent: () => import("./chunk-VMK4OHDN.js").then((m) => m.TrialBalanceComponent)
      },
      {
        path: "retentions",
        loadComponent: () => import("./chunk-YE2FGNV2.js").then((m) => m.RetentionsComponent)
      },
      {
        path: "ats",
        loadComponent: () => import("./chunk-WLUNBON5.js").then((m) => m.ATSComponent)
      },
      {
        path: "inventory",
        loadComponent: () => import("./chunk-3J4T7JZ6.js").then((m) => m.InventoryComponent)
      },
      {
        path: "receivables",
        loadComponent: () => import("./chunk-SETNMYB4.js").then((m) => m.ReceivablesComponent)
      },
      {
        path: "payables",
        loadComponent: () => import("./chunk-OZF2RXIJ.js").then((m) => m.PayablesComponent)
      },
      {
        path: "banking",
        loadComponent: () => import("./chunk-WGOW6JWN.js").then((m) => m.BankingComponent)
      },
      {
        path: "cost-centers",
        loadComponent: () => import("./chunk-FWG7CX2G.js").then((m) => m.CostCentersComponent)
      },
      {
        path: "period-locks",
        loadComponent: () => import("./chunk-JEMTKTPG.js").then((m) => m.PeriodLocksComponent)
      }
    ]
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "SISFIN";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />\r\n", styles: ["/* src/app/app.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
