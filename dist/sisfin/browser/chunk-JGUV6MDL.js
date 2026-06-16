import {
  ActivatedRoute
} from "./chunk-EFJID6OG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HXWGHL77.js";
import {
  ApiService
} from "./chunk-JY7PP6BA.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U6ZAUMMI.js";

// src/app/pages/reports/reports.component.ts
function ReportsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label");
    \u0275\u0275text(2, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_15_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.date, $event) || (ctx_r1.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.date);
  }
}
function ReportsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 3)(2, "label");
    \u0275\u0275text(3, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.startDate, $event) || (ctx_r1.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "label");
    \u0275\u0275text(7, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_16_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.endDate, $event) || (ctx_r1.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.endDate);
  }
}
function ReportsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2, "Configuraci\xF3n de Firmas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "h4");
    \u0275\u0275text(5, "Primera Fila");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 3)(8, "label");
    \u0275\u0275text(9, "Nombre (Izquierda)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[0].name, $event) || (ctx_r1.signatures.row1[0].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 3)(12, "label");
    \u0275\u0275text(13, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[0].role, $event) || (ctx_r1.signatures.row1[0].role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 3)(16, "label");
    \u0275\u0275text(17, "Organizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[0].org, $event) || (ctx_r1.signatures.row1[0].org = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 3)(20, "label");
    \u0275\u0275text(21, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[0].location, $event) || (ctx_r1.signatures.row1[0].location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 18)(24, "div", 3)(25, "label");
    \u0275\u0275text(26, "Nombre (Derecha)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[1].name, $event) || (ctx_r1.signatures.row1[1].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 3)(29, "label");
    \u0275\u0275text(30, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[1].role, $event) || (ctx_r1.signatures.row1[1].role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 3)(33, "label");
    \u0275\u0275text(34, "Organizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[1].org, $event) || (ctx_r1.signatures.row1[1].org = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 3)(37, "label");
    \u0275\u0275text(38, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row1[1].location, $event) || (ctx_r1.signatures.row1[1].location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 17)(41, "h4");
    \u0275\u0275text(42, "Segunda Fila");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 18)(44, "div", 3)(45, "label");
    \u0275\u0275text(46, "Nombre (Izquierda)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[0].name, $event) || (ctx_r1.signatures.row2[0].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 3)(49, "label");
    \u0275\u0275text(50, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[0].role, $event) || (ctx_r1.signatures.row2[0].role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 3)(53, "label");
    \u0275\u0275text(54, "Organizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[0].org, $event) || (ctx_r1.signatures.row2[0].org = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 3)(57, "label");
    \u0275\u0275text(58, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[0].location, $event) || (ctx_r1.signatures.row2[0].location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 18)(61, "div", 3)(62, "label");
    \u0275\u0275text(63, "Nombre (Centro)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[1].name, $event) || (ctx_r1.signatures.row2[1].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 3)(66, "label");
    \u0275\u0275text(67, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[1].role, $event) || (ctx_r1.signatures.row2[1].role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 3)(70, "label");
    \u0275\u0275text(71, "Organizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[1].org, $event) || (ctx_r1.signatures.row2[1].org = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 3)(74, "label");
    \u0275\u0275text(75, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[1].location, $event) || (ctx_r1.signatures.row2[1].location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 18)(78, "div", 3)(79, "label");
    \u0275\u0275text(80, "Nombre (Derecha)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[2].name, $event) || (ctx_r1.signatures.row2[2].name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 3)(83, "label");
    \u0275\u0275text(84, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[2].role, $event) || (ctx_r1.signatures.row2[2].role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 3)(87, "label");
    \u0275\u0275text(88, "Organizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_89_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[2].org, $event) || (ctx_r1.signatures.row2[2].org = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 3)(91, "label");
    \u0275\u0275text(92, "Ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_17_Template_input_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.signatures.row2[2].location, $event) || (ctx_r1.signatures.row2[2].location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[0].name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[0].role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[0].org);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[0].location);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[1].name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[1].role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[1].org);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row1[1].location);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[0].name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[0].role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[0].org);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[0].location);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[1].name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[1].role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[1].org);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[1].location);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[2].name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[2].role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[2].org);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.signatures.row2[2].location);
  }
}
var ReportsComponent = class _ReportsComponent {
  api;
  route;
  reportType = "balance-sheet";
  date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  startDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1).toISOString().split("T")[0];
  endDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  signatures = {
    row1: [
      {
        name: "Hno. Miguel Angel Cargua",
        role: "PRESIDENTE",
        org: "MOVIMIENTO JUAN XXIII",
        location: "VICARIATO DE PUYO"
      },
      {
        name: "Ing. Daniela Reyes D.",
        role: "CONTADORA",
        org: "MOVIMIENTO JUAN XXIII",
        location: "VICARIATO DE PUYO"
      }
    ],
    row2: [
      {
        name: "Hermana Leonor Torres",
        role: "ECONOMA",
        org: "MOVIMIENTO JUAN XXIII",
        location: "VICARIATO DE PUYO"
      },
      {
        name: "Padre. Jose Castillo",
        role: "GUIA ESPIRITUAL DEL MOVIMIENTO JUAN XXIII- VAP",
        org: "",
        location: ""
      },
      {
        name: "Mons. Rafael Cob Garcia",
        role: "OBISPO DEL VAP",
        org: "",
        location: ""
      }
    ]
  };
  constructor(api, route) {
    this.api = api;
    this.route = route;
  }
  ngOnInit() {
    const type = this.route.snapshot.queryParamMap.get("type");
    if (type === "balance-sheet" || type === "income-statement") {
      this.reportType = type;
    }
  }
  downloadPDF() {
    let endpoint = "";
    let params = {};
    if (this.reportType === "balance-sheet") {
      endpoint = "reports/balance-sheet/pdf";
      params = { date: this.date };
    } else if (this.reportType === "income-statement") {
      endpoint = "reports/income-statement/pdf";
      params = {
        startDate: this.startDate,
        endDate: this.endDate,
        signatures: JSON.stringify(this.signatures)
      };
    }
    this.api.downloadFile(endpoint, params).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.reportType}-${this.date}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        alert("Error al generar el reporte");
      }
    });
  }
  downloadExcel() {
    let endpoint = "";
    let params = {};
    if (this.reportType === "balance-sheet") {
      endpoint = "reports/balance-sheet/excel";
      params = { date: this.date };
    } else if (this.reportType === "income-statement") {
      endpoint = "reports/income-statement/excel";
      params = { startDate: this.startDate, endDate: this.endDate };
    }
    this.api.downloadFile(endpoint, params).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.reportType}-${this.date}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        alert("Error al generar el reporte");
      }
    });
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 27, vars: 4, consts: [[1, "reports-container"], [1, "page-header"], [1, "report-selector", "card"], [1, "form-group"], [3, "ngModelChange", "ngModel"], ["value", "balance-sheet"], ["value", "income-statement"], ["class", "form-group", 4, "ngIf"], ["class", "form-row", 4, "ngIf"], ["class", "signatures-section card", 4, "ngIf"], [1, "form-actions"], [1, "btn", "btn-danger", 3, "click"], [1, "material-icons"], [1, "btn", "btn-success", 3, "click"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "signatures-section", "card"], [1, "signatures-row"], [1, "signature-group"], ["type", "text", 3, "ngModelChange", "ngModel"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Reportes Contables");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "h2");
      \u0275\u0275text(6, "Seleccionar Reporte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "label");
      \u0275\u0275text(9, "Tipo de Reporte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportType, $event) || (ctx.reportType = $event);
        return $event;
      });
      \u0275\u0275elementStart(11, "option", 5);
      \u0275\u0275text(12, "Balance General");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 6);
      \u0275\u0275text(14, "Estado de Resultados");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, ReportsComponent_div_15_Template, 4, 1, "div", 7)(16, ReportsComponent_div_16_Template, 9, 2, "div", 8)(17, ReportsComponent_div_17_Template, 94, 20, "div", 9);
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_19_listener() {
        return ctx.downloadPDF();
      });
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21, "picture_as_pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Descargar PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_23_listener() {
        return ctx.downloadExcel();
      });
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25, "table_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Descargar Excel ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportType);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.reportType === "balance-sheet");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "income-statement");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "income-statement");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.reports-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.signatures-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.signatures-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.signatures-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 500;\n  color: #475569;\n  grid-column: 1/-1;\n}\n.signatures-section[_ngcontent-%COMP%]   .signatures-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.signatures-section[_ngcontent-%COMP%]   .signature-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.signatures-section[_ngcontent-%COMP%]   .signature-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.signatures-section[_ngcontent-%COMP%]   .signature-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.signatures-section[_ngcontent-%COMP%]   .signature-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 10px;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="reports-container">\r
  <div class="page-header">\r
    <h1>Reportes Contables</h1>\r
  </div>\r
\r
  <div class="report-selector card">\r
    <h2>Seleccionar Reporte</h2>\r
    <div class="form-group">\r
      <label>Tipo de Reporte</label>\r
      <select [(ngModel)]="reportType">\r
        <option value="balance-sheet">Balance General</option>\r
        <option value="income-statement">Estado de Resultados</option>\r
      </select>\r
    </div>\r
\r
    <div *ngIf="reportType === 'balance-sheet'" class="form-group">\r
      <label>Fecha</label>\r
      <input type="date" [(ngModel)]="date" />\r
    </div>\r
\r
    <div *ngIf="reportType === 'income-statement'" class="form-row">\r
      <div class="form-group">\r
        <label>Fecha Inicio</label>\r
        <input type="date" [(ngModel)]="startDate" />\r
      </div>\r
      <div class="form-group">\r
        <label>Fecha Fin</label>\r
        <input type="date" [(ngModel)]="endDate" />\r
      </div>\r
    </div>\r
\r
    <div *ngIf="reportType === 'income-statement'" class="signatures-section card">\r
      <h3>Configuraci\xF3n de Firmas</h3>\r
      \r
      <div class="signatures-row">\r
        <h4>Primera Fila</h4>\r
        <div class="signature-group">\r
          <div class="form-group">\r
            <label>Nombre (Izquierda)</label>\r
            <input type="text" [(ngModel)]="signatures.row1[0].name" />\r
          </div>\r
          <div class="form-group">\r
            <label>Rol</label>\r
            <input type="text" [(ngModel)]="signatures.row1[0].role" />\r
          </div>\r
          <div class="form-group">\r
            <label>Organizaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row1[0].org" />\r
          </div>\r
          <div class="form-group">\r
            <label>Ubicaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row1[0].location" />\r
          </div>\r
        </div>\r
\r
        <div class="signature-group">\r
          <div class="form-group">\r
            <label>Nombre (Derecha)</label>\r
            <input type="text" [(ngModel)]="signatures.row1[1].name" />\r
          </div>\r
          <div class="form-group">\r
            <label>Rol</label>\r
            <input type="text" [(ngModel)]="signatures.row1[1].role" />\r
          </div>\r
          <div class="form-group">\r
            <label>Organizaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row1[1].org" />\r
          </div>\r
          <div class="form-group">\r
            <label>Ubicaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row1[1].location" />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="signatures-row">\r
        <h4>Segunda Fila</h4>\r
        <div class="signature-group">\r
          <div class="form-group">\r
            <label>Nombre (Izquierda)</label>\r
            <input type="text" [(ngModel)]="signatures.row2[0].name" />\r
          </div>\r
          <div class="form-group">\r
            <label>Rol</label>\r
            <input type="text" [(ngModel)]="signatures.row2[0].role" />\r
          </div>\r
          <div class="form-group">\r
            <label>Organizaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row2[0].org" />\r
          </div>\r
          <div class="form-group">\r
            <label>Ubicaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row2[0].location" />\r
          </div>\r
        </div>\r
\r
        <div class="signature-group">\r
          <div class="form-group">\r
            <label>Nombre (Centro)</label>\r
            <input type="text" [(ngModel)]="signatures.row2[1].name" />\r
          </div>\r
          <div class="form-group">\r
            <label>Rol</label>\r
            <input type="text" [(ngModel)]="signatures.row2[1].role" />\r
          </div>\r
          <div class="form-group">\r
            <label>Organizaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row2[1].org" />\r
          </div>\r
          <div class="form-group">\r
            <label>Ubicaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row2[1].location" />\r
          </div>\r
        </div>\r
\r
        <div class="signature-group">\r
          <div class="form-group">\r
            <label>Nombre (Derecha)</label>\r
            <input type="text" [(ngModel)]="signatures.row2[2].name" />\r
          </div>\r
          <div class="form-group">\r
            <label>Rol</label>\r
            <input type="text" [(ngModel)]="signatures.row2[2].role" />\r
          </div>\r
          <div class="form-group">\r
            <label>Organizaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row2[2].org" />\r
          </div>\r
          <div class="form-group">\r
            <label>Ubicaci\xF3n</label>\r
            <input type="text" [(ngModel)]="signatures.row2[2].location" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="form-actions">\r
      <button class="btn btn-danger" (click)="downloadPDF()">\r
        <span class="material-icons">picture_as_pdf</span>\r
        Descargar PDF\r
      </button>\r
      <button class="btn btn-success" (click)="downloadExcel()">\r
        <span class="material-icons">table_chart</span>\r
        Descargar Excel\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/pages/reports/reports.component.scss */\n.reports-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card h2 {\n  margin: 0 0 20px 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #475569;\n  font-size: 14px;\n}\n.form-group input,\n.form-group select {\n  padding: 10px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn.btn-danger {\n  background: #dc2626;\n  color: white;\n}\n.btn.btn-danger:hover {\n  background: #b91c1c;\n}\n.btn.btn-success {\n  background: #16a34a;\n  color: white;\n}\n.btn.btn-success:hover {\n  background: #15803d;\n}\n.signatures-section {\n  margin-top: 24px;\n}\n.signatures-section h3 {\n  margin: 0 0 20px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.signatures-section h4 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 500;\n  color: #475569;\n  grid-column: 1/-1;\n}\n.signatures-section .signatures-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.signatures-section .signature-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.signatures-section .signature-group .form-group {\n  margin-bottom: 0;\n}\n.signatures-section .signature-group .form-group label {\n  font-size: 13px;\n  color: #64748b;\n}\n.signatures-section .signature-group .form-group input {\n  font-size: 13px;\n  padding: 8px 10px;\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/pages/reports/reports.component.ts", lineNumber: 14 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-JGUV6MDL.js.map
