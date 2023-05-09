(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+G8U":
/*!*****************************************************!*\
  !*** ./src/app/_components/alignment-cube/index.ts ***!
  \*****************************************************/
/*! exports provided: AlignmentCubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alignment_cube_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alignment-cube.component */ "zUWA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentCubeComponent", function() { return _alignment_cube_component__WEBPACK_IMPORTED_MODULE_0__["AlignmentCubeComponent"]; });




/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tobias\Git\Forschung\ETARA-Dev\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1aVU":
/*!********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light", "px-2", "z"], ["routerLink", "start", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "dataCube", 1, "nav-link", "active"], ["routerLink", "goldStandardBuilder", 1, "nav-link", "active"], ["routerLink", "settings", 1, "nav-link", "active"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ETARA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DataCube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GoldStandardBuilder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgei1pbmRleDogMTA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "1lay":
/*!***************************************!*\
  !*** ./src/app/models/MappingType.ts ***!
  \***************************************/
/*! exports provided: MappingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingType", function() { return MappingType; });
var MappingType;
(function (MappingType) {
    MappingType[MappingType["LocalToWeb"] = 0] = "LocalToWeb";
    MappingType[MappingType["WebToLocal"] = 1] = "WebToLocal";
    MappingType[MappingType["Bidirectional"] = 2] = "Bidirectional";
})(MappingType || (MappingType = {}));


/***/ }),

/***/ "2maj":
/*!******************************************************!*\
  !*** ./src/app/pages/gsb-page/gsb-page.component.ts ***!
  \******************************************************/
/*! exports provided: GsbPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsbPageComponent", function() { return GsbPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_gold_standard_builder_gold_standard_builder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components/gold-standard-builder/gold-standard-builder.component */ "5q67");


class GsbPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
GsbPageComponent.ɵfac = function GsbPageComponent_Factory(t) { return new (t || GsbPageComponent)(); };
GsbPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GsbPageComponent, selectors: [["app-gsb-page"]], decls: 1, vars: 0, template: function GsbPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gold-standard-builder");
    } }, directives: [_components_gold_standard_builder_gold_standard_builder_component__WEBPACK_IMPORTED_MODULE_1__["GoldStandardBuilderComponent"]], styles: ["app-gold-standard-builder[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnc2ItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJnc2ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1nb2xkLXN0YW5kYXJkLWJ1aWxkZXJ7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "44TH":
/*!****************************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/builder/mapping-table/mapping-table.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MappingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingTableComponent", function() { return MappingTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/gsb.service */ "S+OK");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_classes/Utils */ "vWX8");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");










function MappingTableComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r3.gsbService.showFullLocalPath ? entry_r8.path : ctx_r3.utils.formatLocalPath(entry_r8.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MappingTableComponent_div_2_div_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingTableComponent_div_2_div_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingTableComponent_div_2_div_1_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingTableComponent_div_2_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r9.path);
} }
function MappingTableComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingTableComponent_div_2_div_1_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MappingTableComponent_div_2_div_1_mat_icon_5_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MappingTableComponent_div_2_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingTableComponent_div_2_div_1_mat_icon_7_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingTableComponent_div_2_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const mapping_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.gsbService.removeMapping(mapping_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MappingTableComponent_div_2_div_1_div_13_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapping_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mapping_r2.localEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mapping_r2.type === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mapping_r2.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mapping_r2.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mapping_r2.webEntries);
} }
function MappingTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingTableComponent_div_2_div_1_Template, 14, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gsbService.currentMappings);
} }
class MappingTableComponent {
    constructor(gsbService, cdr) {
        this.gsbService = gsbService;
        this.cdr = cdr;
        this.showFullPathLocal = false;
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"]();
    }
    log() {
        console.log(this.gsbService.currentMappings);
    }
}
MappingTableComponent.ɵfac = function MappingTableComponent_Factory(t) { return new (t || MappingTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_1__["GsbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MappingTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MappingTableComponent, selectors: [["app-mapping-table"]], decls: 3, vars: 2, consts: [["color", "primary", 3, "ngModel", "ngModelChange"], ["class", "mapping-wrapper", 4, "ngIf"], [1, "mapping-wrapper"], ["class", "mapping", 4, "ngFor", "ngForOf"], [1, "mapping"], [1, "relation-container"], ["class", "entry", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "relationType"], [4, "ngIf"], [1, "action"], ["mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "entry"], [3, "innerHtml"]], template: function MappingTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MappingTableComponent_Template_mat_slide_toggle_ngModelChange_0_listener($event) { return ctx.gsbService.showFullLocalPath = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " show full path\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingTableComponent_div_2_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gsbService.showFullLocalPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gsbService.currentMappings);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".mapping-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px black solid;\n  margin: 0.5rem;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%] {\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid gray;\n  padding: 0.75rem;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-left: 2px black solid;\n  border-right: 2px black solid;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hcHBpbmctdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ1E7RUFDRSxnQkFBQTtBQUNWO0FBSUk7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFGTjtBQWdCQTtFQUNFLFNBQUE7QUFkRiIsImZpbGUiOiJtYXBwaW5nLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHBpbmctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLm1hcHBpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG4gICAgbWFyZ2luOiAwLjVyZW07XG5cbiAgICAucmVsYXRpb24tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmVudHJ5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2aWRlciB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItbGVmdDogMnB4IGJsYWNrIHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggYmxhY2sgc29saWQ7XG5cbiAgICAgIC5hY3Rpb24ge1xuXG4gICAgICB9XG5cbiAgICAgIC5yZWxhdGlvblR5cGUge1xuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "473E":
/*!********************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/index.ts ***!
  \********************************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.component */ "WWyf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return _ui_component__WEBPACK_IMPORTED_MODULE_0__["UiComponent"]; });




/***/ }),

/***/ "5q67":
/*!**************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/gold-standard-builder.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GoldStandardBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoldStandardBuilderComponent", function() { return GoldStandardBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_interfaces */ "rGDM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_classes/Utils */ "vWX8");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/gsb.service */ "S+OK");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./builder/builder.component */ "KdjQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _final_alignmnet_final_alignment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./final-alignmnet/final-alignment.component */ "OO+a");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../json-viewer/json-viewer.component */ "GSch");

























const _c0 = ["stepper"];
const _c1 = ["builder"];
function GoldStandardBuilderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select Databases");
} }
function GoldStandardBuilderComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r15.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r15.label, " ");
} }
function GoldStandardBuilderComponent_ng_container_16_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r17.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r17.class, " ");
} }
function GoldStandardBuilderComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GoldStandardBuilderComponent_ng_container_16_mat_option_1_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.currentLocalDatabaseSchema.classes);
} }
function GoldStandardBuilderComponent_ng_container_21_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r20, " ");
} }
function GoldStandardBuilderComponent_ng_container_21_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r21, " ");
} }
function GoldStandardBuilderComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-optgroup", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GoldStandardBuilderComponent_ng_container_21_ng_container_2_Template, 3, 2, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-optgroup", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GoldStandardBuilderComponent_ng_container_21_mat_option_4_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.identifiers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.predicates);
} }
function GoldStandardBuilderComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ErrorMsg: ", ctx_r5.errorMsg.errMsg, "");
} }
function GoldStandardBuilderComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r22.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r22.name, " ");
} }
function GoldStandardBuilderComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Prepare Api Response");
} }
function GoldStandardBuilderComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Api response loading ... (", ctx_r8.gsbService.loadingTries, " of ", ctx_r8.gsbService.maxLoadingTries, " tries)");
} }
function GoldStandardBuilderComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You can try again another 50 entities or go back and define another identifier.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldStandardBuilderComponent_div_37_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.gsbService.nextEntity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unable to retrieve a valid api response. (Tested ", ctx_r9.gsbService.loadingTries, " different entities)");
} }
function GoldStandardBuilderComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please delete the parts of the response you don't need. Use the icon on the left of the selected part.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-json-viewer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jsonChangeEvent", function GoldStandardBuilderComponent_div_38_Template_app_json_viewer_jsonChangeEvent_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeApiResponse($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jsonData", ctx_r10.gsbService.currentWebEntity.reducedResponse);
} }
function GoldStandardBuilderComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Entity Mapping");
} }
function GoldStandardBuilderComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next entity loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoldStandardBuilderComponent_app_builder_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-builder", null, 26);
} }
function GoldStandardBuilderComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Final Alignmnet");
} }
class GoldStandardBuilderComponent {
    constructor(connection, dialog, _fb, cdr, _dialog, gsbService) {
        this.connection = connection;
        this.dialog = dialog;
        this._fb = _fb;
        this.cdr = cdr;
        this._dialog = _dialog;
        this.gsbService = gsbService;
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]();
        this.webDbSelected = false;
        this.localDbSelected = false;
        this.localSchemaLoaded = false;
        this.localSchemaError = false;
        this.useIdentifierMap = true;
        this.showFullPathLocal = true;
        this.showFullPathWeb = false;
        this.localSortMethod = '';
        this.localEntityLoaded = false;
        this.localPathSearchValue = '';
        this.localValueSearchValue = '';
        this.webSortMethod = '';
        this.weblEntityLoaded = false;
        this.webPathSearchValue = '';
        this.webValueSearchValue = '';
        this.localHashIds = new Set();
        this.localMappingEntries = new Set();
        this.webHashIds = new Set();
        this.webMappingEntries = new Set();
        this.webEntityModFinished = false;
        this.dbSelectionForm = _fb.group({
            localDatabase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            webDatabase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            identifier: [{ value: '', disabled: !this.localSchemaLoaded }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            inputType: [{ value: '', disabled: !this.localSchemaLoaded }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.connection.getDatabases().then((res) => {
            this.databases = res.databases;
        });
        this.connection.getApis().then((res) => {
            this.apis = res.apis;
        });
    }
    changeLocalDatabase(dbName) {
        this.localDbSelected = false;
        this.localSchemaLoaded = false;
        this.localSchemaError = false;
        this.dbSelectionForm.get('identifier').setValue('');
        this.dbSelectionForm.get('identifier').disable();
        this.dbSelectionForm.get('inputType').setValue('');
        this.dbSelectionForm.get('inputType').disable();
        this.loadLocalDatabasesData(dbName);
        this.loadLocalDatabasesSchema(dbName);
    }
    changeInputType(inputType) {
        this.identifiers = this.getIdetifier(inputType);
        this.predicates = this.getPredicates(inputType);
        this.dbSelectionForm.get('identifier').enable();
    }
    loadLocalDatabasesData(dbName) {
        this.connection.getLocalDatabaseData(dbName).then((res) => {
            this.currentLocalDatabase = res;
            this.localDbSelected = true;
            if (this.currentLocalDatabase.identifierMapContent !== '') {
                this.useIdentifierMap = false;
            }
        });
    }
    loadLocalDatabasesSchema(dbName) {
        this.connection.getLocalDatabaseSchema(dbName).subscribe((schema) => {
            this.currentLocalDatabaseSchema = schema;
            this.localSchemaLoaded = true;
            this.dbSelectionForm.get('inputType').enable();
        }, (error) => {
            this.errorMsg = error.error;
            this.localSchemaError = true;
        });
    }
    loadWebDatabasesData(dbName) {
        this.connection.getWebDatabaseData(dbName).then((res) => {
            this.currentWebDatabase = res;
            this.webDbSelected = true;
        });
    }
    debugMode() {
        this.selectedIndex = 1;
        this.gsbService.debugMode();
    }
    mappingSelectionFinished() {
        this.gsbService.generateFinalAlignment();
        this.stepper.next();
    }
    changeApiResponse(e) {
        this.gsbService.changeWebReducedResponse(e);
    }
    respChangeFinished() {
        this.webEntityModFinished = true;
        this.builder.init();
        this.cdr.detectChanges();
        this.builder.showLines();
        this.builder.markNewPaths();
    }
    selectionChange(index) {
        if (!this.gsbService.finishedLoading) {
            return;
        }
        if (index === 1) {
            _classes_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].delay(500).then(() => {
                this.builder.showLines();
            });
        }
        else {
            this.builder.hideLines();
        }
    }
    startGSB() {
        this.stepper.steps.get(0).completed = true;
        this.stepper.steps.get(0).editable = false;
        const identifier = this.dbSelectionForm.get('identifier').value;
        const inputType = this.dbSelectionForm.get('inputType').value;
        this.gsbService.startNewAlignment(this.currentLocalDatabase, this.currentWebDatabase, identifier, inputType);
    }
    nextEntity() {
        this.builder.clearLines();
        this.webEntityModFinished = false;
        this.gsbService.nextEntity();
    }
    getIdetifier(inputType) {
        const identifier = [];
        for (const value of this.currentLocalDatabaseSchema.identifier) {
            const predicate = value.predicate;
            const contains = this.currentLocalDatabaseSchema.structure.some((entry) => (entry.subject === inputType && entry.predicate === predicate));
            if (contains) {
                identifier.push(predicate);
            }
        }
        return identifier;
    }
    getPredicates(inputType) {
        const predicates = [];
        for (const value of this.currentLocalDatabaseSchema.functionality) {
            const predicate = value.predicate;
            const contains = this.currentLocalDatabaseSchema.structure.some((entry) => (entry.subject === inputType && entry.predicate === predicate));
            if (contains) {
                predicates.push(predicate);
            }
        }
        return predicates;
    }
}
GoldStandardBuilderComponent.ɵfac = function GoldStandardBuilderComponent_Factory(t) { return new (t || GoldStandardBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_6__["GsbService"])); };
GoldStandardBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoldStandardBuilderComponent, selectors: [["app-gold-standard-builder"]], viewQuery: function GoldStandardBuilderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.builder = _t.first);
    } }, decls: 53, vars: 14, consts: [["linear", "", 3, "selectedIndex", "selectionChange"], ["stepper", ""], ["matStepLabel", ""], [3, "formGroup"], [1, "container-flex"], [1, "container-flex-item"], ["appearance", "fill"], ["formControlName", "localDatabase", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "inputType", 3, "selectionChange"], [4, "ngIf"], ["formControlName", "identifier"], ["formControlName", "webDatabase", 3, "selectionChange"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "disabled", "click"], [1, "stepper"], ["mat-raised-button", "", "matStepperNext", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "matStepperPrevious", ""], [3, "value"], ["label", "identifier"], [4, "ngFor", "ngForOf"], ["label", "predicates"], [1, "center"], ["aria-hidden", "false", "aria-label", "error", "inline", "true", 2, "font-size", "4rem"], [3, "jsonData", "jsonChangeEvent"], ["builder", ""]], template: function GoldStandardBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GoldStandardBuilderComponent_Template_mat_horizontal_stepper_selectionChange_0_listener($event) { return ctx.selectionChange($event.selectedIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GoldStandardBuilderComponent_ng_template_3_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select local database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GoldStandardBuilderComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.changeLocalDatabase($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoldStandardBuilderComponent_mat_option_11_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GoldStandardBuilderComponent_Template_mat_select_selectionChange_15_listener($event) { return ctx.changeInputType($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GoldStandardBuilderComponent_ng_container_16_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GoldStandardBuilderComponent_ng_container_21_Template, 5, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GoldStandardBuilderComponent_p_22_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select web database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GoldStandardBuilderComponent_Template_mat_select_selectionChange_27_listener($event) { return ctx.loadWebDatabasesData($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GoldStandardBuilderComponent_mat_option_28_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldStandardBuilderComponent_Template_button_click_29_listener() { return ctx.startGSB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GoldStandardBuilderComponent_ng_template_32_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldStandardBuilderComponent_Template_button_click_34_listener() { return ctx.respChangeFinished(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GoldStandardBuilderComponent_div_36_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, GoldStandardBuilderComponent_div_37_Template, 11, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GoldStandardBuilderComponent_div_38_Template, 7, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, GoldStandardBuilderComponent_ng_template_40_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldStandardBuilderComponent_Template_button_click_42_listener() { return ctx.gsbService.generateSuggestions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Generate Final Alignment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoldStandardBuilderComponent_Template_button_click_44_listener() { return ctx.nextEntity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next Entity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Edit API Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, GoldStandardBuilderComponent_div_48_Template, 6, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, GoldStandardBuilderComponent_app_builder_49_Template, 2, 0, "app-builder", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, GoldStandardBuilderComponent_ng_template_51_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-final-alignmnet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dbSelectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.databases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLocalDatabaseSchema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLocalDatabaseSchema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localSchemaError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.apis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.dbSelectionForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.gsbService.finishedLoadingWebEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gsbService.finishedLoadingWebEntity && !ctx.gsbService.loadingNextEntityFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gsbService.loadingNextEntityFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gsbService.finishedLoadingWebEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gsbService.finishedLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gsbService.finishedLoading);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _final_alignmnet_final_alignment_component__WEBPACK_IMPORTED_MODULE_13__["FinalAlignmentComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOptgroup"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_17__["JsonViewerComponent"], _builder_builder_component__WEBPACK_IMPORTED_MODULE_8__["BuilderComponent"]], styles: [".container-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 100%;\n  background-color: var(--primary-darker-color);\n  padding: 5px 0;\n  border-radius: 10px;\n}\n.container-flex-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  gap: 1em;\n}\n.container-flex-item[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1% 0;\n}\n.container-flex-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n.container-flex-item[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-left: 3%;\n  justify-self: flex-start;\n  align-self: center;\n  color: white;\n}\n.content-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  gap: 1em;\n  padding: 0 0.5rem 0 0.5rem;\n}\n.content-header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnb2xkLXN0YW5kYXJkLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUFKO0FBSUk7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBTUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKTjtBQVNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7QUFORjtBQU9FO0VBQ0UsZ0JBQUE7QUFMSjtBQVFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFRQTtFQUNFLFNBQUE7QUFMRjtBQVFBO0VBQ0UsU0FBQTtBQUxGIiwiZmlsZSI6ImdvbGQtc3RhbmRhcmQtYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLy9tYXJnaW46IDElIDElIDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFya2VyLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgJi1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBnYXA6IDFlbTtcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICoge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMSUgMDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIH1cblxuICAgIG1hdC1zbGlkZS10b2dnbGUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xuICAqIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG59XG4uc3RlcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMntcbiAgbWFyZ2luOiAwO1xufVxuXG5we1xuICBtYXJnaW46IDA7XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ "6OPa":
/*!*************************************************************************!*\
  !*** ./src/assets/data/alignments/filipo/sample_dblp_sample_arxiv.json ***!
  \*************************************************************************/
/*! exports provided: system, alignments, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"system\":\"FiLiPo\",\"alignments\":[{\"metrics\":{\"data_availability\":0.9518072289156626,\"confidence\":0.9518072289156626},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#title\"]}],\"api_path\":[\"feed.entry.title\"]},{\"metrics\":{\"data_availability\":0.996268656716418,\"confidence\":0.996268656716418},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#primaryFullCreatorName\"]}],\"api_path\":[\"feed.entry.author[*].name\"]},{\"metrics\":{\"data_availability\":0.8674698795180723,\"confidence\":0.8674698795180723},\"relation_path\":[{\"path\":[\"http://www.w3.org/2000/01/rdf-schema#label\"]}],\"api_path\":[\"feed.entry.title\"]},{\"metrics\":{\"data_availability\":0.9960629921259843,\"confidence\":0.9960629921259843},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"http://www.w3.org/2000/01/rdf-schema#label\"]}],\"api_path\":[\"feed.entry.author[*].name\"]},{\"metrics\":{\"data_availability\":1,\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#orderedCreators\",\"http://www.w3.org/2000/01/rdf-schema#label\"]}],\"api_path\":[\"feed.entry.author[*].name\"]},{\"metrics\":{\"data_availability\":1,\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#orderedCreators\",\"https://dblp.org/rdf/schema-2020-07-01#primaryFullCreatorName\"]}],\"api_path\":[\"feed.entry.author[*].name\"]}],\"name\":\"sample_dblp_sample_arxiv_filipo\"}");

/***/ }),

/***/ "8Uzo":
/*!*********************************************!*\
  !*** ./src/app/_classes/alignment/index.ts ***!
  \*********************************************/
/*! exports provided: Metric, Mapping, RelationPath, Alignment, AlignmentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Metric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Metric */ "mjl+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Metric", function() { return _Metric__WEBPACK_IMPORTED_MODULE_0__["Metric"]; });

/* harmony import */ var _Mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mapping */ "UI+o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mapping", function() { return _Mapping__WEBPACK_IMPORTED_MODULE_1__["Mapping"]; });

/* harmony import */ var _RelationPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelationPath */ "UU1k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationPath", function() { return _RelationPath__WEBPACK_IMPORTED_MODULE_2__["RelationPath"]; });

/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alignment */ "CPwY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alignment", function() { return _Alignment__WEBPACK_IMPORTED_MODULE_3__["Alignment"]; });

/* harmony import */ var _alignment_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alignment-container */ "KU5j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentContainer", function() { return _alignment_container__WEBPACK_IMPORTED_MODULE_4__["AlignmentContainer"]; });








/***/ }),

/***/ "AJaE":
/*!********************************!*\
  !*** ./src/assets/settings.ts ***!
  \********************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
const settings = {
    regexRelSearch: /(#(\w)+)$|(\/[\w]+)$/g,
    regexRelReplace: /[#/]/g,
    joinSymbol: '🡢',
    regexApiSearch: /(\.[\w-\w]+(\[\*\])*)$/g,
    regexApiReplace: /[./]/g,
    regexApiReplaceWildcard: /(\[\*\])*$/g,
    rayCasterWorkingLayer: 1
};


/***/ }),

/***/ "AZzU":
/*!********************************************************************************!*\
  !*** ./src/app/pages/alignment-viewer-page/alignment-viewer-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: AlignmentViewerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentViewerPageComponent", function() { return AlignmentViewerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_alignment_cube_alignment_selector_alignment_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components/alignment-cube/alignment-selector/alignment-selector.component */ "JpYR");


class AlignmentViewerPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlignmentViewerPageComponent.ɵfac = function AlignmentViewerPageComponent_Factory(t) { return new (t || AlignmentViewerPageComponent)(); };
AlignmentViewerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlignmentViewerPageComponent, selectors: [["app-alignment-viewer-page"]], decls: 1, vars: 0, template: function AlignmentViewerPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-data-selector");
    } }, directives: [_components_alignment_cube_alignment_selector_alignment_selector_component__WEBPACK_IMPORTED_MODULE_1__["AlignmentSelectorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGlnbm1lbnQtdmlld2VyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Ag4z":
/*!****************************************!*\
  !*** ./src/app/models/ViewModeEnum.ts ***!
  \****************************************/
/*! exports provided: ViewMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMode", function() { return ViewMode; });
var ViewMode;
(function (ViewMode) {
    ViewMode["View3D"] = "View3D";
    ViewMode["View2DAlignment"] = "Alignment";
    ViewMode["View2DApi"] = "Api";
    ViewMode["View2DRelation"] = "Relation";
})(ViewMode || (ViewMode = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    version: __webpack_require__(/*! ../../package.json */ "kiQV").version,
    baseUrl: 'http://localhost:8080/etara',
    webserviceManagerEndpoint: '/webserviceManager',
    apiManagerEndpoint: '/apiManager',
    apiCallEndpoint: '/apiManager/call',
    apiToFlatJson: '/apiManager/flatJson',
    jsonDiffEndpoint: '/apiManager/jsonDiff',
    dbManagerEndpoint: '/dbManager',
    dbSchemaEndpoint: '/dbManager/schema',
    dbKnowledgeBaseEndpoint: '/dbManager/knowledge',
    gsbSuggestions: '/gsb/suggestions',
    gsbFinalAlignment: '/gsb/saveFinalAlignment',
    gsbEndpoint: '/gsb',
    webservicesEndpoint: '/webservices'
};


/***/ }),

/***/ "B6vo":
/*!***********************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/DataCubeCreator.ts ***!
  \***********************************************************/
/*! exports provided: DataCubeCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCubeCreator", function() { return DataCubeCreator; });
/* harmony import */ var _ResourceTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceTracker */ "oNFq");
/* harmony import */ var _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThreeJsUtil */ "FBGG");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "VHTt");
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "rqH8");
/* harmony import */ var _assets_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/settings */ "AJaE");





class DataCubeCreator {
    constructor(alignmentCubeService) {
        this.alignmentCubeService = alignmentCubeService;
        this.alignmentModel = alignmentCubeService.alignmentContainer;
        this.scene = alignmentCubeService.scene;
        this.cubeTracker = new _ResourceTracker__WEBPACK_IMPORTED_MODULE_0__["ResourceTracker"]();
    }
    /**
     * Adds the dataCubes to the scene. ViewMode determines which will be created.
     */
    addDataCubes() {
        const viewMode = this.alignmentCubeService.viewMode;
        this.alignmentModel.alignments.forEach((alignment, index) => {
            // Check if only the specified alignment should be generated
            if (!(viewMode !== _models__WEBPACK_IMPORTED_MODULE_2__["ViewMode"].View2DAlignment || (this.alignmentCubeService.selectedAlignmentIndex === index))) {
                return;
            }
            alignment.mappings.forEach((mapping) => {
                // Each Mapping can have multiple api paths
                mapping.apiPaths.forEach((apiPath) => {
                    const indexApi = this.alignmentModel.apiLabels.findIndex((value) => value === apiPath);
                    // Check if only the specified api path should be generated
                    if (!(viewMode !== _models__WEBPACK_IMPORTED_MODULE_2__["ViewMode"].View2DApi || (this.alignmentCubeService.selectedApiPathIndex === indexApi))) {
                        return;
                    }
                    // Each Mapping can have multiple relation paths
                    mapping.relationPaths.forEach((rel) => {
                        const indexRel = this.alignmentModel.getRelationPathIndex(rel.paths);
                        // Check if only the specified relationPath should be generated
                        if (!(viewMode !== _models__WEBPACK_IMPORTED_MODULE_2__["ViewMode"].View2DRelation
                            || (this.alignmentCubeService.selectedRelationPathLabelIndex === indexRel))) {
                            return;
                        }
                        const cube = this.createDataCube(alignment, mapping, apiPath, rel, index);
                        this.scene.add(cube);
                        this.cubeTracker.track(cube);
                    });
                });
            });
        });
    }
    /**
     * Generates a label, with all information about the mapping.
     * @param dataSetName
     * @param apiPath
     * @param relationPaths
     * @param metricName
     * @param metricValue
     * @private
     */
    makeDataCubeLabel(dataSetName, apiPath, relationPaths, metricName, metricValue) {
        const divElement = document.createElement('div');
        const divElementDataSetName = document.createElement('div');
        divElementDataSetName.textContent = 'alignment: ' + dataSetName;
        const divElementApi = document.createElement('div');
        divElementApi.textContent = 'api_path: ' + apiPath;
        if (this.alignmentCubeService.showFullApiPath) {
            divElementApi.textContent = 'api_path: ' + apiPath;
        }
        else {
            divElementApi.textContent = 'api_path: ' + apiPath.match(_assets_settings__WEBPACK_IMPORTED_MODULE_4__["settings"].regexApiSearch)[0].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_4__["settings"].regexApiReplace, '');
        }
        const divElementRel = document.createElement('div');
        divElementRel.textContent = 'relation_path:';
        const ulElement = document.createElement('ul');
        for (const path of relationPaths) {
            const liElement = document.createElement('li');
            if (this.alignmentCubeService.showFullRelationPath) {
                liElement.textContent = path;
            }
            else {
                liElement.textContent = path.match(_assets_settings__WEBPACK_IMPORTED_MODULE_4__["settings"].regexRelSearch)[0].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_4__["settings"].regexRelReplace, '');
            }
            ulElement.appendChild(liElement);
        }
        const divElementMetric = document.createElement('div');
        divElementMetric.textContent = `${metricName}: ${metricValue}`;
        divElementRel.appendChild(ulElement);
        divElement.className = 'label';
        divElement.style.marginTop = '-0.5em';
        divElement.appendChild(divElementDataSetName);
        divElement.appendChild(divElementApi);
        divElement.appendChild(divElementRel);
        divElement.appendChild(divElementMetric);
        divElement.style.zIndex = '10';
        const meshLabel = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__["CSS2DObject"](divElement);
        meshLabel.traverse((object1) => {
            object1.visible = false;
        });
        return meshLabel;
    }
    /**
     * Creates a cube for the given mapping and specified api/relation path.
     * @param alignment
     * @param mapping
     * @param apiPath
     * @param relPath
     * @param zIndex
     * @private
     */
    createDataCube(alignment, mapping, apiPath, relPath, zIndex) {
        const relationPath = relPath.paths;
        const indexX = this.alignmentModel.apiLabels.indexOf(apiPath) + 1;
        const indexY = this.alignmentModel.getRelationPathIndex(relationPath) + 1;
        const met = mapping.metrics.find(metric => metric.name === this.alignmentCubeService.selectedMetric);
        if (met === undefined) {
            return;
        }
        // value range between 0 and 1
        const size = Math.max(0, Math.min(met.value, 1));
        const text = String(size);
        let color;
        // color.setHex(Math.random() * 0xffffff);
        // color = this.alignmentModel.getColorForMapping(mapping.apiPath, mapping.relationPaths.join());
        color = this.alignmentModel.getScaleColorForMapping(apiPath, relationPath.join(), size);
        if (size > 0) {
            const cube = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_1__["ThreeJsUtil"].createCube(size, color, indexX, indexY, zIndex);
            // make visible to raycaster witch works on layer 1
            cube.layers.enable(_assets_settings__WEBPACK_IMPORTED_MODULE_4__["settings"].rayCasterWorkingLayer);
            const label = this.makeDataCubeLabel(alignment.name, apiPath, relationPath, this.alignmentCubeService.selectedMetric, size);
            label.position.set(0, 1.5, 0);
            cube.add(label);
            return cube;
        }
        return null;
    }
    /**
     * Delete all cubes created by this
     */
    disposeCubes() {
        this.cubeTracker.dispose();
    }
}


/***/ }),

/***/ "Bw4D":
/*!********************************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-sidebar-left/ui-sidebar-left.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UiSidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSidebarLeftComponent", function() { return UiSidebarLeftComponent; });
/* harmony import */ var _engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/alignment-cube.service */ "vcHc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models */ "VHTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");









function UiSidebarLeftComponent_div_0_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alignment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", alignment_r6.name, " ");
} }
function UiSidebarLeftComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Datasets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UiSidebarLeftComponent_div_0_mat_checkbox_4_Template, 2, 2, "mat-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.engineService.alignmentContainer.alignments);
} }
function UiSidebarLeftComponent_div_1_div_6_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alignment_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", alignment_r10.name, " ");
} }
function UiSidebarLeftComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UiSidebarLeftComponent_div_1_div_6_Template_mat_radio_group_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.changeSelectedAlignment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UiSidebarLeftComponent_div_1_div_6_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r8.selectedAlignmentControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.engineService.alignmentContainer.alignments);
} }
function UiSidebarLeftComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Datasets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.visible = !ctx_r14.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UiSidebarLeftComponent_div_1_div_6_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.visible);
} }
function UiSidebarLeftComponent_div_2_div_6_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", label_r18, " ");
} }
function UiSidebarLeftComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UiSidebarLeftComponent_div_2_div_6_Template_mat_radio_group_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.changeSelectedApi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UiSidebarLeftComponent_div_2_div_6_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r16.selectedApiControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r16.engineService.alignmentContainer.apiLabels);
} }
function UiSidebarLeftComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Api Paths");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.visible = !ctx_r22.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UiSidebarLeftComponent_div_2_div_6_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.visible);
} }
function UiSidebarLeftComponent_div_3_div_6_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relation_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", relation_r26.join("->"), " ");
} }
function UiSidebarLeftComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UiSidebarLeftComponent_div_3_div_6_Template_mat_radio_group_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.changeSelectedRelationPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UiSidebarLeftComponent_div_3_div_6_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r24.selectedRelationControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r24.engineService.alignmentContainer.relationPathLabels);
} }
function UiSidebarLeftComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Relation Paths");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.visible = !ctx_r30.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UiSidebarLeftComponent_div_3_div_6_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.visible);
} }
function UiSidebarLeftComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r33.engineService.resetOrbitControls(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reset OrbitControls");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r35.engineService.clearScene(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Clear Scene");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r36.engineService.reloadScene(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Reload Scene");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r37.engineService.removeAxisLabels(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Clear Labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r38.engineService.setOrbitControlPosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Reset Orbit Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r39.engineService.changeCamera(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Switch Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r40.engineService.toggleGridHelper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Toggle GridHelper");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r41.engineService.toggleAxisHelper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Toggle AxisHelper");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_div_6_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r42.engineService.toggleCameraHelper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Toggle CameraHelper");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UiSidebarLeftComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSidebarLeftComponent_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r43.visible = !ctx_r43.visible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UiSidebarLeftComponent_div_4_div_6_Template, 28, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.visible);
} }
class UiSidebarLeftComponent {
    constructor(fb, engineService) {
        this.fb = fb;
        this.engineService = engineService;
        this.ViewModeEnum = _models__WEBPACK_IMPORTED_MODULE_2__["ViewMode"];
        this.visible = true;
    }
    ngOnInit() {
        this.selectedAlignmentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.selectedApiControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.selectedRelationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
    }
    changeSelectedAlignment() {
        this.engineService.setSelectedDataSet(this.selectedAlignmentControl.value);
    }
    changeSelectedApi() {
        this.engineService.setSelectedApiLabel(this.selectedApiControl.value);
    }
    changeSelectedRelationPath() {
        this.engineService.setSelectedRelationPathLabel(this.selectedRelationControl.value);
    }
}
UiSidebarLeftComponent.ɵfac = function UiSidebarLeftComponent_Factory(t) { return new (t || UiSidebarLeftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__["AlignmentCubeService"])); };
UiSidebarLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UiSidebarLeftComponent, selectors: [["app-ui-sidebar-left"]], decls: 5, vars: 5, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "checked", 4, "ngFor", "ngForOf"], [3, "checked"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "card-title"], [1, "btn-close", 3, "click"], ["class", "card-body", 4, "ngIf"], [3, "formControl", "change"], [1, "d-flex", "flex-column", "justify-content-between"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "p-1", 3, "value", 4, "ngFor", "ngForOf"], [1, "p-1", 3, "value"], [1, "row", "m-1"], [1, "btn", "btn-secondary", 3, "click"]], template: function UiSidebarLeftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UiSidebarLeftComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UiSidebarLeftComponent_div_1_Template, 7, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UiSidebarLeftComponent_div_2_Template, 7, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UiSidebarLeftComponent_div_3_Template, 7, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UiSidebarLeftComponent_div_4_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.engineService.viewMode === ctx.ViewModeEnum.View2DAlignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.engineService.viewMode === ctx.ViewModeEnum.View2DApi);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.engineService.viewMode === ctx.ViewModeEnum.View2DRelation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1aS1zaWRlYmFyLWxlZnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "CPwY":
/*!*************************************************!*\
  !*** ./src/app/_classes/alignment/Alignment.ts ***!
  \*************************************************/
/*! exports provided: Alignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alignment", function() { return Alignment; });
/* harmony import */ var _Mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mapping */ "UI+o");
/* harmony import */ var _Metric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Metric */ "mjl+");
/* harmony import */ var _RelationPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelationPath */ "UU1k");



class Alignment {
    constructor() {
        this._mappings = [];
        this._metricsNames = new Set();
    }
    addMapping(mapping) {
        this._mappings.push(mapping);
    }
    addAlignment(iAlginment) {
        iAlginment.alignments.forEach(mapping => {
            const newMetrics = [];
            // tslint:disable-next-line:forin
            for (const metricsKey in mapping.metrics) {
                newMetrics.push(new _Metric__WEBPACK_IMPORTED_MODULE_1__["Metric"](metricsKey, mapping.metrics[metricsKey]));
                this._metricsNames.add(metricsKey);
            }
            const relationPath = [];
            mapping.relation_path.forEach(paths => {
                relationPath.push(new _RelationPath__WEBPACK_IMPORTED_MODULE_2__["RelationPath"](paths.path));
            });
            const newMapping = new _Mapping__WEBPACK_IMPORTED_MODULE_0__["Mapping"](mapping.api_path, relationPath, newMetrics);
            this._mappings.push(newMapping);
        });
    }
    compareTo(a) {
        return this.name.localeCompare(a.name);
    }
    get mappings() {
        return this._mappings;
    }
    get name() {
        return this._name;
    }
    get metricsNames() {
        return this._metricsNames;
    }
    set name(value) {
        this._name = value;
    }
}


/***/ }),

/***/ "DlHR":
/*!********************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/db-selecector/db-selecector.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DbSelecectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbSelecectorComponent", function() { return DbSelecectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class DbSelecectorComponent {
    constructor() { }
    ngOnInit() {
    }
}
DbSelecectorComponent.ɵfac = function DbSelecectorComponent_Factory(t) { return new (t || DbSelecectorComponent)(); };
DbSelecectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DbSelecectorComponent, selectors: [["app-db-selecector"]], decls: 2, vars: 0, template: function DbSelecectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "db-selecector works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYi1zZWxlY2VjdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "EL4v":
/*!************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-sidebar-left/index.ts ***!
  \************************************************************************/
/*! exports provided: UiSidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-sidebar-left.component */ "Bw4D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSidebarLeftComponent", function() { return _ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_0__["UiSidebarLeftComponent"]; });




/***/ }),

/***/ "FBGG":
/*!*******************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/ThreeJsUtil.ts ***!
  \*******************************************************/
/*! exports provided: ThreeJsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeJsUtil", function() { return ThreeJsUtil; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");


class ThreeJsUtil {
    /**
     * Creates a line between point1 and point2
     * @param point1 - start point
     * @param point2 - end point
     * @param color - color of the line
     */
    static createLine(point1, point2, color = 0xb2b2b2) {
        const points = [];
        points.push(point1);
        points.push(point2);
        const col = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](color);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]().setFromPoints(points);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: col });
        return new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, material);
    }
    /**
     * Create a cube with no areas, only edges.
     */
    static createOutlineCube(width, height, depth) {
        const g = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](width, height, depth);
        const edges = new three__WEBPACK_IMPORTED_MODULE_0__["EdgesGeometry"](g);
        const line = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](edges, new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: 0x11ffff }));
        line.position.set(width / 2 + 0.5, height / 2 + 0.5, depth / 2 - 0.5);
        return line;
    }
    /**
     * Create a basic cube.
     * @param scale
     * @param color
     * @param x - x position
     * @param y - y position
     * @param z - z position
     */
    static createCube(scale, color, x, y, z) {
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](scale, scale, scale);
        const material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({ color });
        const cube = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;
        return cube;
    }
    /**
     * @param baseWidth
     * @param content - label text
     * @param style - background color
     * @private
     */
    static createHTMLCanvasLabel(baseWidth, fontSize, content, style = 'gray') {
        const borderSize = 2;
        const ctx = document.createElement('canvas').getContext('2d');
        const font = `${fontSize}px bold sans-serif`;
        ctx.font = font;
        // measure how long the content will be
        const textWidth = ctx.measureText(content).width;
        const doubleBorderSize = borderSize * 2;
        const width = baseWidth + doubleBorderSize;
        const height = fontSize + doubleBorderSize;
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        // need to set font again after resizing canvas
        ctx.font = font;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = style;
        ctx.fillRect(0, 0, width, height);
        // scale to fit but don't stretch
        const scaleFactor = Math.min(1, baseWidth / textWidth);
        ctx.translate(width / 2, height / 2);
        ctx.scale(scaleFactor, 1);
        ctx.fillStyle = 'white';
        ctx.fillText(content, 0, 0);
        return ctx.canvas;
    }
}


/***/ }),

/***/ "GSch":
/*!******************************************************************!*\
  !*** ./src/app/_components/json-viewer/json-viewer.component.ts ***!
  \******************************************************************/
/*! exports provided: JsonViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonViewerComponent", function() { return JsonViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");




class JsonViewerComponent {
    constructor() {
        this.jsonData = '';
        this.jsonChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_1__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'tree';
        this.editorOptionsConfig.modes = ['code', 'tree'];
        this.editorOptionsConfig.enableTransform = false;
        // @ts-ignore
        // remove unneeded actions from context menu
        this.editorOptionsConfig.onCreateMenu = (items, node) => {
            items = items.filter((item) => {
                return item.text === 'Remove';
            });
            return items;
        };
    }
    saveChanges(e) {
        this.jsonData = e;
        this.jsonChangeEvent.emit(e);
    }
}
JsonViewerComponent.ɵfac = function JsonViewerComponent_Factory(t) { return new (t || JsonViewerComponent)(); };
JsonViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonViewerComponent, selectors: [["app-json-viewer"]], inputs: { jsonData: "jsonData" }, outputs: { jsonChangeEvent: "jsonChangeEvent" }, decls: 1, vars: 2, consts: [[3, "options", "data", "change"]], template: function JsonViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "json-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JsonViewerComponent_Template_json_editor_change_0_listener($event) { return ctx.saveChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.editorOptionsConfig)("data", ctx.jsonData);
    } }, directives: [_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_1__["JsonEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqc29uLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: PathFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path_formatter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path-formatter.service */ "Lzwh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathFormatterService", function() { return _path_formatter_service__WEBPACK_IMPORTED_MODULE_0__["PathFormatterService"]; });




/***/ }),

/***/ "JpYR":
/*!***********************************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/alignment-selector/alignment-selector.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AlignmentSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentSelectorComponent", function() { return AlignmentSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ajv */ "eDuk");
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsonSchema_alignment_schema_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/jsonSchema/alignment.schema.json */ "xICz");
var _assets_jsonSchema_alignment_schema_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/jsonSchema/alignment.schema.json */ "xICz", 1);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







const _c0 = ["fileSelector"];
function AlignmentSelectorComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r2.system);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r2.alignments.length);
} }
class AlignmentSelectorComponent {
    constructor() {
        this.newAlignmentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alignments = [];
    }
    ngOnInit() {
        this.ajv = new ajv__WEBPACK_IMPORTED_MODULE_1___default.a({ allErrors: true });
        this.ajv.addSchema(_assets_jsonSchema_alignment_schema_json__WEBPACK_IMPORTED_MODULE_2__, 'mySchema');
    }
    readFiles() {
        const fileSelector = this.fileSelector.nativeElement;
        fileSelector.onchange = () => {
            for (const file of fileSelector.files) {
                const reader = new FileReader();
                reader.onload = () => {
                    try {
                        const fileJson = JSON.parse(reader.result.toString());
                        const check = this.parseAndLog(fileJson);
                        if (!check) {
                            let errorMessage = 'JSONSchemaError \n';
                            for (const error of this.ajv.errors) {
                                errorMessage += error.message + '\n';
                            }
                            alert(errorMessage);
                        }
                        else {
                            const alignment = JSON.parse(reader.result.toString());
                            this.alignments.push(alignment);
                            this.addAlignment(alignment);
                        }
                    }
                    catch (e) {
                        alert(e);
                    }
                };
                reader.readAsText(file);
            }
        };
        fileSelector.click();
    }
    addAlignment(alignment) {
        this.newAlignmentAdded.emit(alignment);
    }
    parseAndLog(json) {
        return this.ajv.validate('mySchema', json);
    }
}
AlignmentSelectorComponent.ɵfac = function AlignmentSelectorComponent_Factory(t) { return new (t || AlignmentSelectorComponent)(); };
AlignmentSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlignmentSelectorComponent, selectors: [["app-data-selector"]], viewQuery: function AlignmentSelectorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileSelector = _t.first);
    } }, outputs: { newAlignmentAdded: "newAlignmentAdded" }, decls: 26, vars: 1, consts: [[1, "card", "m-1"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["type", "file", "id", "fileSelector", "multiple", "multiple", "accept", "application/json", 1, "form-control", 2, "display", "none"], ["fileSelector", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function AlignmentSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Choose the Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlignmentSelectorComponent_Template_button_click_7_listener() { return ctx.readFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add next file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AlignmentSelectorComponent_tr_25_Template, 8, 3, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alignments);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".header[_ngcontent-%COMP%] {\n  color: #36A0FF;\n  font-size: 27px;\n  padding: 10px;\n}\n\n.bigicon[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #36A0FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxpZ25tZW50LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6ImFsaWdubWVudC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBjb2xvcjogIzM2QTBGRjtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYmlnaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICMzNkEwRkY7XG59XG4iXX0= */"] });


/***/ }),

/***/ "KU5j":
/*!***********************************************************!*\
  !*** ./src/app/_classes/alignment/alignment-container.ts ***!
  \***********************************************************/
/*! exports provided: AlignmentContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentContainer", function() { return AlignmentContainer; });
/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alignment */ "CPwY");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "VphZ");



class AlignmentContainer {
    constructor() {
        this._alignments = [];
        this._relationPathLabels = [];
        this._apiLabels = [];
        this._metricsNames = new Set();
        this._colorMapping = new Map();
        this._colorScaleMapping = new Map();
    }
    addAlignment(ac) {
        const alignment = new _Alignment__WEBPACK_IMPORTED_MODULE_0__["Alignment"]();
        alignment.name = ac.name;
        alignment.addAlignment(ac);
        alignment.mappings.forEach((mapping, index) => {
            let newApi = false;
            let newRelation = false;
            mapping.apiPaths.forEach((apiPath) => {
                mapping.relationPaths.forEach((rel) => {
                    const relationPaths = rel.paths;
                    const relationPathJoin = relationPaths.join();
                    if (!this.apiLabels.some(s => s === apiPath)) {
                        this.apiLabels.push(apiPath);
                        newApi = true;
                    }
                    if (!this._relationPathLabels.some(s => this.arrayEquals(s, relationPaths))) {
                        this._relationPathLabels.push(relationPaths);
                        newRelation = true;
                    }
                    const random = Math.random();
                    const color = d3__WEBPACK_IMPORTED_MODULE_2__["interpolateSinebow"](random);
                    const colorScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleSequential"](t => d3__WEBPACK_IMPORTED_MODULE_2__["hsl"](random * 360, t, 0.5).toString());
                    // const colorScale = d3.scaleSequential(t => d3.hsl(random * 360, t, 0.5).toString());
                    if (newApi || newRelation) {
                        // obviously no mapping
                        // const color = new Color(Math.random() * 0xFFFFFF);
                        if (newApi) {
                            const newRelationMap = new Map();
                            newRelationMap.set(relationPaths.join(), new three__WEBPACK_IMPORTED_MODULE_1__["Color"](color));
                            this.colorMapping.set(apiPath, newRelationMap);
                            const newRelationScaleMap = new Map();
                            newRelationScaleMap.set(relationPaths.join(), colorScale);
                            this.colorScaleMapping.set(apiPath, newRelationScaleMap);
                        }
                        else {
                            const relationMap = this.colorMapping.get(apiPath);
                            relationMap.set(relationPaths.join(), new three__WEBPACK_IMPORTED_MODULE_1__["Color"](color));
                            const relationScaleMap = this.colorScaleMapping.get(apiPath);
                            relationScaleMap.set(relationPaths.join(), colorScale);
                        }
                    }
                    else {
                        // check if mapping exist
                        const relationPathMap = this.colorMapping.get(apiPath);
                        const relationPathScaleMap = this.colorScaleMapping.get(apiPath);
                        if (relationPathMap !== undefined) {
                            const mapColor = relationPathMap.get(relationPaths.join());
                            const mapScaleColor = relationPathMap.get(relationPaths.join());
                            if (mapColor === undefined) {
                                relationPathMap.set(relationPaths.join(), new three__WEBPACK_IMPORTED_MODULE_1__["Color"](color));
                                relationPathScaleMap.set(relationPaths.join(), colorScale);
                            }
                        }
                        else {
                            const newRelationMap = new Map();
                            const newRelationScaleMap = new Map();
                            newRelationMap.set(relationPaths.join(), new three__WEBPACK_IMPORTED_MODULE_1__["Color"](color));
                            newRelationScaleMap.set(relationPaths.join(), colorScale);
                            this.colorMapping.set(apiPath, newRelationMap);
                            this.colorScaleMapping.set(apiPath, newRelationScaleMap);
                        }
                    }
                });
            });
        });
        // Add all metric keys
        for (const elem of alignment.metricsNames) {
            this._metricsNames.add(elem);
        }
        this.alignments.push(alignment);
        return true;
    }
    sortApiLabels() {
        this.apiLabels.sort((a, b) => a.localeCompare(b));
    }
    sortRelationLabels() {
        this.relationPathLabels.sort((a, b) => a.join().localeCompare(b.join()));
    }
    arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
    getRelationPathIndex(searchPaths) {
        let searchIndex = -1;
        this._relationPathLabels.some((relationPaths, index) => {
            if (this.arrayEquals(relationPaths, searchPaths)) {
                searchIndex = index;
                return true;
            }
        });
        return searchIndex;
    }
    getColorForMapping(apiPath, relationPath) {
        const relationMap = this.colorMapping.get(apiPath);
        return relationMap.get(relationPath);
    }
    getScaleColorForMapping(apiPath, relationPath, value) {
        const relationMap = this.colorScaleMapping.get(apiPath);
        const scale = relationMap.get(relationPath);
        const color = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](scale(value));
        return color;
    }
    get alignments() {
        return this._alignments;
    }
    get apiLabels() {
        return this._apiLabels;
    }
    get relationPathLabels() {
        return this._relationPathLabels;
    }
    get colorScaleMapping() {
        return this._colorScaleMapping;
    }
    get colorMapping() {
        return this._colorMapping;
    }
    get metricsNames() {
        return this._metricsNames;
    }
}


/***/ }),

/***/ "Kd3W":
/*!*************************************************************!*\
  !*** ./src/assets/data/alignments/example/scigraph_v3.json ***!
  \*************************************************************/
/*! exports provided: system, alignments, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"system\":\"DORIS (PCA)\",\"alignments\":[{\"metrics\":{\"confidence\":0.7606060606060606},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#title\"]}],\"api_path\":[\"message.title[*]\"]},{\"metrics\":{\"confidence\":0.95},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#pagination\"]}],\"api_path\":[\"message.page\"]},{\"metrics\":{\"confidence\":0.5040816326530613},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#primaryAffiliation\"]}],\"api_path\":[\"message.author[*].affiliation[*]\"]},{\"metrics\":{\"confidence\":0.8},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedIn\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"http://www.wikidata.org/prop/direct/P356\"]}],\"api_path\":[\"message.DOI\"]},{\"metrics\":{\"confidence\":0.8},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournal\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolume\"]}],\"api_path\":[\"message.volume\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolumeIssue\"]}],\"api_path\":[\"message.journal-issue.issue\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedAsPartOf\",\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]}],\"name\":\"dblp_crossref_v3\"}");

/***/ }),

/***/ "KdjQ":
/*!********************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/builder/builder.component.ts ***!
  \********************************************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_classes/Utils */ "vWX8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/gsb.service */ "S+OK");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mapping_table_mapping_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapping-table/mapping-table.component */ "44TH");
/* harmony import */ var _classes_gsb_lines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_classes/gsb/lines */ "qxED");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../_pipes/highlight.pipe */ "q7FT");
























function BuilderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_button_13_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeLocalPathSearchValue("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuilderComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_button_32_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeLocalValueSearchValue("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuilderComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alignment_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alignment_r13.localEntity.valueList[0].subject, " ");
} }
function BuilderComponent_button_76_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_button_76_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r15.webPathSearchValue = ""; return ctx_r15.updateLines(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuilderComponent_button_95_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_button_95_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r17.webValueSearchValue = ""; return ctx_r17.updateLines(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuilderComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ... loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "hide": a0, "unknown": a1 }; };
function BuilderComponent_div_112_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_div_112_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const entry_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.clickLocalMappingEntry(entry_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_div_112_div_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const entry_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.changeWebPathSearchValue(ctx_r23.utils.formatLocalPath(entry_r20.path), $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_div_112_div_1_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const entry_r20 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.changeWebValueSearchValue(entry_r20.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", entry_r20.hash)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, !ctx_r19.searchMethod(entry_r20.path, ctx_r19.localPathSearchValue) || !ctx_r19.searchMethod(entry_r20.value, ctx_r19.localValueSearchValue), !ctx_r19.gsbService.localKnownPathStore.has(entry_r20.path)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx_r19.gsbService.showFullLocalPath ? entry_r20.path : ctx_r19.utils.formatLocalPath(entry_r20.path), ctx_r19.localPathSearchValue), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, entry_r20.value, ctx_r19.localValueSearchValue), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BuilderComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BuilderComponent_div_112_div_1_Template, 14, 13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.localEntityFiltered.valueList[0].fullKnowledge);
} }
function BuilderComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ... loading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuilderComponent_div_115_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_div_115_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const entry_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.clickWebMappingEntry(entry_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_div_115_div_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const entry_r26 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.changeLocalPathSearchValue(entry_r26.path, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_div_115_div_1_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const entry_r26 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.changeLocalValueSearchValue(entry_r26.value, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", entry_r26.hash)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, !ctx_r25.searchMethod(entry_r26.path, ctx_r25.webPathSearchValue) || !ctx_r25.searchMethod(entry_r26.value, ctx_r25.webValueSearchValue), !ctx_r25.gsbService.webKnownPathStore.has(entry_r26.path)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, entry_r26.path, ctx_r25.webPathSearchValue), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, entry_r26.value, ctx_r25.webValueSearchValue), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BuilderComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BuilderComponent_div_115_div_1_Template, 14, 13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.weblEntityFiltered.dictionary);
} }
class BuilderComponent {
    constructor(connection, dialog, _fb, cdr, _dialog, gsbService, renderer) {
        this.connection = connection;
        this.dialog = dialog;
        this._fb = _fb;
        this.cdr = cdr;
        this._dialog = _dialog;
        this.gsbService = gsbService;
        this.renderer = renderer;
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]();
        this.showFullPathLocal = true;
        this.showFullPathWeb = false;
        this.localSortByPathMethod = '';
        this.localSortByValueMethod = '';
        this.localEntityLoaded = false;
        this.localPathSearchValue = '';
        this.localValueSearchValue = '';
        this.webSortByPathMethod = '';
        this.webSortByValueMethod = '';
        this.weblEntityLoaded = false;
        this.webPathSearchValue = '';
        this.webValueSearchValue = '';
        this.localHashIds = new Set();
        this.localMappingEntries = new Set();
        this.webHashIds = new Set();
        this.webMappingEntries = new Set();
    }
    ngOnInit() {
        this.init();
        this._currentLeaderLineAlignment = _classes_gsb_lines__WEBPACK_IMPORTED_MODULE_8__["LeaderLineAlignment"].build(this.gsbService.currentAlignment, this.renderer);
    }
    clickLocalMappingEntry(localEntry) {
        const triggerID = localEntry.hash;
        const element = document.getElementById(triggerID);
        if (this.localMappingEntries.has(localEntry)) {
            this.localMappingEntries.delete(localEntry);
            this.renderer.removeClass(element, 'clicked');
        }
        else {
            this.localMappingEntries.add(localEntry);
            this.renderer.addClass(element, 'clicked');
        }
    }
    clickWebMappingEntry(webEntry) {
        const triggerID = webEntry.hash;
        const element = document.getElementById(triggerID);
        if (this.webMappingEntries.has(webEntry)) {
            this.webMappingEntries.delete(webEntry);
            this.renderer.removeClass(element, 'clicked');
        }
        else {
            this.webMappingEntries.add(webEntry);
            this.renderer.addClass(element, 'clicked');
        }
    }
    addMapping(type) {
        lodash__WEBPACK_IMPORTED_MODULE_6__["defer"](() => {
            if (this.localMappingEntries.size !== 0 && this.webMappingEntries.size !== 0) {
                for (const entry of this.localMappingEntries) {
                    const localElem = document.getElementById(entry.hash);
                    this.renderer.addClass(localElem, 'used');
                    this.renderer.removeClass(localElem, 'clicked');
                }
                for (const entry of this.webMappingEntries) {
                    const webElem = document.getElementById(entry.hash);
                    this.renderer.addClass(webElem, 'used');
                    this.renderer.removeClass(webElem, 'clicked');
                }
                const mappingObj = {
                    type,
                    localEntries: Array.from(this.localMappingEntries),
                    webEntries: Array.from(this.webMappingEntries)
                };
                this.gsbService.addMapping(mappingObj);
                const newMapping = _classes_gsb_lines__WEBPACK_IMPORTED_MODULE_8__["LeaderLineMapping"].build(mappingObj);
                this._currentLeaderLineAlignment.addMapping(newMapping, true);
                this.localMappingEntries.clear();
                this.webMappingEntries.clear();
            }
        });
    }
    updateLines() {
        this._currentLeaderLineAlignment.updateLines();
    }
    // Sort Web
    sortByPathWeb() {
        switch (this.webSortByPathMethod) {
            case 'alphaAsc':
                this.sortByPathWebAsc();
                break;
            case 'alphaDesc':
                this.sortByPathWebDesc();
                break;
            default:
                this.weblEntityFiltered.dictionary = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gsbService.currentWebEntity.dictionary);
        }
        this.updateLines();
    }
    sortByPathWebAsc() {
        this.weblEntityFiltered.dictionary.sort((a, b) => a.path.localeCompare(b.path));
    }
    sortByPathWebDesc() {
        this.weblEntityFiltered.dictionary.sort((a, b) => b.path.localeCompare(a.path));
    }
    sortByValueWeb() {
        switch (this.webSortByValueMethod) {
            case 'alphaAsc':
                this.sortByValueWebAsc();
                break;
            case 'alphaDesc':
                this.sortByValueWebDesc();
                break;
            default:
                // tslint:disable-next-line:max-line-length
                this.localEntityFiltered.valueList[0].fullKnowledge = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gsbService.currentLocalEntity.valueList[0].fullKnowledge);
        }
        this.updateLines();
    }
    sortByValueWebAsc() {
        this.weblEntityFiltered.dictionary.sort((a, b) => a.value.localeCompare(b.value));
    }
    sortByValueWebDesc() {
        this.weblEntityFiltered.dictionary.sort((a, b) => b.value.localeCompare(a.value));
    }
    // Sort Local
    sortByPathLocal() {
        switch (this.localSortByPathMethod) {
            case 'alphaAsc':
                this.sortByPathLocalAsc();
                break;
            case 'alphaDesc':
                this.sortByPathLocalDesc();
                break;
            default:
                // tslint:disable-next-line:max-line-length
                this.localEntityFiltered.valueList[0].fullKnowledge = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gsbService.currentLocalEntity.valueList[0].fullKnowledge);
        }
        this.updateLines();
    }
    sortByPathLocalAsc() {
        this.localEntityFiltered.valueList[0].fullKnowledge.sort((a, b) => {
            const ap = this.utils.formatLocalPath(a.path);
            const bp = this.utils.formatLocalPath(b.path);
            return ap.localeCompare(bp);
        });
    }
    sortByPathLocalDesc() {
        this.localEntityFiltered.valueList[0].fullKnowledge.sort((a, b) => {
            const ap = this.utils.formatLocalPath(a.path);
            const bp = this.utils.formatLocalPath(b.path);
            return bp.localeCompare(ap);
        });
    }
    sortByValueLocal() {
        switch (this.localSortByValueMethod) {
            case 'alphaAsc':
                this.sortByValueLocalAsc();
                break;
            case 'alphaDesc':
                this.sortByValueLocalDesc();
                break;
            default:
                // tslint:disable-next-line:max-line-length
                this.localEntityFiltered.valueList[0].fullKnowledge = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gsbService.currentLocalEntity.valueList[0].fullKnowledge);
        }
        this.updateLines();
    }
    sortByValueLocalAsc() {
        this.localEntityFiltered.valueList[0].fullKnowledge.sort((b, a) => {
            return a.value.localeCompare(b.value);
        });
    }
    sortByValueLocalDesc() {
        this.localEntityFiltered.valueList[0].fullKnowledge.sort((a, b) => {
            return a.value.localeCompare(b.value);
        });
    }
    changeLocalValueSearchValue(value, event) {
        event.stopPropagation();
        this.localValueSearchValue = value;
        this.updateLines();
    }
    changeWebValueSearchValue(value, event) {
        this.webValueSearchValue = value;
        this.updateLines();
        event.stopPropagation();
    }
    changeLocalPathSearchValue(value, event) {
        this.localPathSearchValue = value;
        this.updateLines();
        event.stopPropagation();
    }
    changeWebPathSearchValue(value, event) {
        event.stopPropagation();
        this.webPathSearchValue = value;
        this.updateLines();
    }
    searchMethod(a, b) {
        const al = a.toLowerCase();
        const bl = b.toLowerCase();
        return (al.includes(bl) || bl.includes(al));
    }
    init() {
        this.webEntity = this.gsbService.currentWebEntity;
        this.localEntity = this.gsbService.currentLocalEntity;
        this.weblEntityFiltered = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.webEntity);
        this.localEntityFiltered = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.localEntity);
        this.currentLocalDatabase = this.gsbService.localDatabase;
        this.currentWebDatabase = this.gsbService.webDatabase;
    }
    markNewPaths() {
        for (const localEntry of this.localEntity.valueList[0].fullKnowledge) {
            if (!this.gsbService.localKnownPathStore.has(localEntry.path)) {
                const localElem = document.getElementById(localEntry.hash);
                this.renderer.addClass(localElem, 'unknown');
            }
        }
        for (const webEntry of this.webEntity.dictionary) {
            if (!this.gsbService.webKnownPathStore.has(webEntry.path)) {
                const webElem = document.getElementById(webEntry.hash);
                this.renderer.addClass(webElem, 'unknown');
            }
        }
    }
    openMappingTable() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.minHeight = '70vh';
        dialogConfig.maxWidth = '90vw';
        dialogConfig.minWidth = '70vw';
        const dialogRef = this._dialog.open(_mapping_table_mapping_table_component__WEBPACK_IMPORTED_MODULE_7__["MappingTableComponent"], dialogConfig).afterClosed().toPromise().then(() => {
            this._currentLeaderLineAlignment.deleteLines();
            this._currentLeaderLineAlignment = _classes_gsb_lines__WEBPACK_IMPORTED_MODULE_8__["LeaderLineAlignment"].build(this.gsbService.currentAlignment, this.renderer);
            this.clearUsedClass();
            this.markUsedElems();
            this._currentLeaderLineAlignment.drawLines();
            this.updateLines();
        });
    }
    clearUsedClass() {
        for (const localEntry of this.localEntity.valueList[0].fullKnowledge) {
            const localElem = document.getElementById(localEntry.hash);
            this.renderer.removeClass(localElem, 'used');
        }
        for (const webEntry of this.webEntity.dictionary) {
            const webElem = document.getElementById(webEntry.hash);
            this.renderer.removeClass(webElem, 'used');
        }
    }
    markUsedElems() {
        for (const mapping of this.gsbService.currentMappings) {
            for (const localEntry of mapping.localEntries) {
                const localElem = document.getElementById(localEntry.hash);
                this.renderer.addClass(localElem, 'used');
            }
            for (const webEntry of mapping.webEntries) {
                const webElem = document.getElementById(webEntry.hash);
                this.renderer.addClass(webElem, 'used');
            }
        }
    }
    hideLines() {
        console.log('hide lines');
        this._currentLeaderLineAlignment.hideLines();
    }
    showLines() {
        this._currentLeaderLineAlignment.showLines();
    }
    selectionChange(index) {
        if (index === 1) {
            _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].delay(1000).then(() => {
                this._currentLeaderLineAlignment.showLines();
            });
        }
        else {
            this._currentLeaderLineAlignment.hideLines();
        }
    }
    entityChange(i) {
        this.webMappingEntries.clear();
        this.localMappingEntries.clear();
        this._currentLeaderLineAlignment.deleteLines();
        this.gsbService.changeCurrentAlignment(i);
        this.init();
        this.cdr.detectChanges();
        _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].delay(1000).then(() => {
            console.log('redraw now');
            this._currentLeaderLineAlignment = _classes_gsb_lines__WEBPACK_IMPORTED_MODULE_8__["LeaderLineAlignment"].build(this.gsbService.currentAlignment, this.renderer);
            console.log(this._currentLeaderLineAlignment.mappings);
            this._currentLeaderLineAlignment.drawLines();
            this.clearUsedClass();
            this.markUsedElems();
            this.markNewPaths();
        });
        console.log('change finished');
    }
    clearLines() {
        this._currentLeaderLineAlignment.deleteLines();
    }
}
BuilderComponent.ɵfac = function BuilderComponent_Factory(t) { return new (t || BuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_3__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_5__["GsbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
BuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuilderComponent, selectors: [["app-builder"]], decls: 116, vars: 22, consts: [[1, "builder-container"], [1, "builder-header"], [1, "header-side"], [1, "content-header"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "example-form-field", "searchbar"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", ""], ["appearance", "fill"], [3, "ngModel", "selectionChange", "ngModelChange"], ["value", ""], ["value", "alphaAsc"], ["value", "alphaDesc"], [1, "filler-div"], ["color", "primary"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "controls"], [1, "controls-mapping"], ["appearance", "fill", 1, "center"], [1, "builder-body"], [1, "entries-wrapper"], [4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [3, "value"], [4, "ngFor", "ngForOf"], [1, "entry", 3, "id", "ngClass", "click"], [1, "path"], ["mat-button", "", "aria-label", "Clear", 3, "click"], [3, "innerHtml"], [1, "value"]], template: function BuilderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuilderComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) { return ctx.gsbService.showFullLocalPath = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " show full path ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_12_listener($event) { return ctx.localPathSearchValue = $event; })("ngModelChange", function BuilderComponent_Template_input_ngModelChange_12_listener() { return ctx.updateLines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BuilderComponent_button_13_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sort Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BuilderComponent_Template_mat_select_selectionChange_20_listener() { return ctx.sortByPathLocal(); })("ngModelChange", function BuilderComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.localSortByPathMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Alphabetical (Asc)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Alphabetical (Desc) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Search Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_31_listener($event) { return ctx.localValueSearchValue = $event; })("ngModelChange", function BuilderComponent_Template_input_ngModelChange_31_listener() { return ctx.updateLines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BuilderComponent_button_32_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sort Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BuilderComponent_Template_mat_select_selectionChange_39_listener() { return ctx.sortByValueLocal(); })("ngModelChange", function BuilderComponent_Template_mat_select_ngModelChange_39_listener($event) { return ctx.localSortByValueMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Alphabetical (Asc)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Alphabetical (Desc) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Entity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BuilderComponent_Template_mat_select_selectionChange_50_listener($event) { return ctx.entityChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BuilderComponent_mat_option_51_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_52_listener() { return ctx.openMappingTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Show Mappings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Add new Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_58_listener() { return ctx.addMapping(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "west");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_61_listener() { return ctx.addMapping(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "sync_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_64_listener() { return ctx.addMapping(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "east");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Search Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_75_listener($event) { return ctx.webPathSearchValue = $event; })("ngModelChange", function BuilderComponent_Template_input_ngModelChange_75_listener() { return ctx.updateLines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, BuilderComponent_button_76_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sort Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BuilderComponent_Template_mat_select_selectionChange_83_listener() { return ctx.sortByPathWeb(); })("ngModelChange", function BuilderComponent_Template_mat_select_ngModelChange_83_listener($event) { return ctx.webSortByPathMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "No Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Alphabetical (Asc)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Alphabetical (Desc) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Search Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_94_listener($event) { return ctx.webValueSearchValue = $event; })("ngModelChange", function BuilderComponent_Template_input_ngModelChange_94_listener() { return ctx.updateLines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, BuilderComponent_button_95_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sort Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BuilderComponent_Template_mat_select_selectionChange_102_listener() { return ctx.sortByValueWeb(); })("ngModelChange", function BuilderComponent_Template_mat_select_ngModelChange_102_listener($event) { return ctx.webSortByValueMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "No Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Alphabetical (Asc)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Alphabetical (Desc) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, BuilderComponent_div_111_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, BuilderComponent_div_112_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, BuilderComponent_div_114_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, BuilderComponent_div_115_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Local DB: ", ctx.currentLocalDatabase.label, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gsbService.showFullLocalPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.localPathSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localPathSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.localSortByPathMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.localValueSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localValueSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.localSortByValueMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.gsbService.currentIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gsbService.entityAlignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Web DB: ", ctx.currentWebDatabase.label, " (", ctx.currentWebDatabase.name, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webPathSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webPathSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webSortByPathMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webValueSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webValueSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webSortByValueMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gsbService.finishedLoadingLocalEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gsbService.finishedLoadingWebEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webEntity);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], pipes: [_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_18__["HighlightPipe"]], styles: [".builder-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-side[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px black solid;\n  border-radius: 6px;\n  margin: 0 0 0.5rem 0;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-side[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-content: baseline;\n  gap: 1em;\n  padding: 0 0.5rem 0 0.5rem;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .header-side[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .filler-div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 0 0.5rem 0;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .filler-div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem 0 1rem;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .filler-div[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px grey solid;\n  border-radius: 6px;\n  padding: 0.5rem;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-header[_ngcontent-%COMP%]   .filler-div[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .controls-mapping[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px black solid;\n  border-radius: 6px;\n  margin: 0 0 0.5rem 0;\n  overflow: auto;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px grey solid;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 0.5rem;\n  margin: 0.5rem;\n  gap: 1em;\n  min-height: 40px;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  min-width: 30%;\n  max-width: 60%;\n  word-break: break-word;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 30%;\n  max-width: 60%;\n  word-break: break-word;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 1rem;\n  line-height: 0;\n  min-width: 2rem;\n  z-index: 1;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry.unknown[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry.used[_ngcontent-%COMP%] {\n  background: lightgray;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry.clicked[_ngcontent-%COMP%] {\n  background: #ffd740;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .entries-wrapper[_ngcontent-%COMP%]   .entry.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.builder-container[_ngcontent-%COMP%]   .builder-body[_ngcontent-%COMP%]   .filler-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnVpbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNOO0FBQ007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtBQUNSO0FBQ1E7RUFDRSxZQUFBO0FBQ1Y7QUFJSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS1E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUhWO0FBU0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBU0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBUlI7QUFXUTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBVFY7QUFZUTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFWVjtBQWFRO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFYVjtBQWVRO0VBQ0UsNkJBQUE7QUFiVjtBQWdCUTtFQUNFLHFCQUFBO0FBZFY7QUFpQlE7RUFDRSxtQkFBQTtBQWZWO0FBa0JRO0VBQ0UsYUFBQTtBQWhCVjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFuQk47QUF3QkE7RUFDRSxtQkFBQTtBQXJCRjtBQXdCQTtFQUNFLFNBQUE7QUFyQkY7QUF3QkE7RUFDRSxTQUFBO0FBckJGIiwiZmlsZSI6ImJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVpbGRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLmJ1aWxkZXItaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhlYWRlci1zaWRle1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcblxuICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgICAgICAgZ2FwOiAxZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xuXG4gICAgICAgIC5zZWFyY2hiYXJ7XG4gICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpbGxlci1kaXYge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuXG4gICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250cm9scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgICAgICAuY29udHJvbHMtbWFwcGluZ3tcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ1aWxkZXItYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuZW50cmllcy13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgLmVudHJ5IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBncmV5IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICBnYXA6IDFlbTtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcblxuXG4gICAgICAgIC5wYXRoIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgIH1cblxuICAgICAgICAmLnVua25vd257XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgICAgIH1cblxuICAgICAgICAmLnVzZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY2xpY2tlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjE1LCA2NCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmhpZGV7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5maWxsZXItZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmgye1xuICBtYXJnaW46IDA7XG59XG5cbnB7XG4gIG1hcmdpbjogMDtcbn1cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "Kun9":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/databases/db-information/db-information.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DbInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbInformationComponent", function() { return DbInformationComponent; });
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_interfaces */ "rGDM");
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
















function DbInformationComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DbInformationComponent_mat_tab_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.dbConfiguration.label = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "identifierMap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DbInformationComponent_mat_tab_5_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.dbConfiguration.identifierMap = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DbInformationComponent_mat_tab_5_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.dbConfiguration.path = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dbConfiguration.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dbConfiguration.identifierMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dbConfiguration.path);
} }
function DbInformationComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "json-editor", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r1.editorOptionsConfig)("data", ctx_r1.dbConfiguration);
} }
class DbInformationComponent {
    constructor(connection, _snackBar, data) {
        this.connection = connection;
        this._snackBar = _snackBar;
        this.data = data;
        this.dbConfiguration = data;
    }
    ngOnInit() {
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'code';
        this.editorOptionsConfig.modes = ['code'];
        this.connection.getLocalDatabaseData(this.data.label).then((res) => {
            this.dbConfiguration.label = res.label;
            this.dbConfiguration.identifierMap = res.identifierMap;
            this.dbConfiguration.path = res.path;
        });
    }
    onJSONChange() {
        this.dbConfiguration = this.editor.get();
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', { duration: 2000 });
    }
    save() {
        const dbConfigurationChanged = this.editor.get();
        this.connection.updateDatabase(this.dbConfiguration, dbConfigurationChanged).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to save changes');
        });
    }
    delete() {
        this.connection.deleteDatabase(this.dbConfiguration.label).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to delete');
        });
    }
}
DbInformationComponent.ɵfac = function DbInformationComponent_Factory(t) { return new (t || DbInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DbInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DbInformationComponent, selectors: [["app-db-information"]], viewQuery: function DbInformationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, decls: 15, vars: 4, consts: [[1, "group-container", 3, "selectedIndexChange"], ["label", "Configuration Form", 4, "ngIf"], ["label", "Configuration File"], [4, "ngIf"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["label", "Configuration Form"], [1, "form-container"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "options", "data"]], template: function DbInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Database:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedIndexChange", function DbInformationComponent_Template_mat_tab_group_selectedIndexChange_4_listener() { return ctx.onJSONChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DbInformationComponent_mat_tab_5_Template, 14, 3, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DbInformationComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DbInformationComponent_Template_button_click_11_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DbInformationComponent_Template_button_click_13_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.dbConfiguration.label, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dbConfiguration);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", null);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_3__["JsonEditorComponent"]], styles: [".group-container[_ngcontent-%COMP%] {\n  min-width: 50vw;\n  min-height: 50vh;\n  max-height: 95vh;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  min-width: 50vw;\n  min-height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGItaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRiLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwLWNvbnRhaW5lcntcbiAgbWluLXdpZHRoOiA1MHZ3O1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBtYXgtaGVpZ2h0OiA5NXZoO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWluLXdpZHRoOiA1MHZ3O1xuICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuIl19 */"] });


/***/ }),

/***/ "LlcP":
/*!******************************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-infobar-top/ui-infobar-top.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UiInfobarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInfobarTopComponent", function() { return UiInfobarTopComponent; });
/* harmony import */ var _engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/alignment-cube.service */ "vcHc");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "VHTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");






class UiInfobarTopComponent {
    // @Input() engineService: AlignmentCubeService;
    constructor(engineService) {
        this.engineService = engineService;
    }
    ngOnInit() {
    }
    changeViewMode() {
        switch (this.engineService.viewMode) {
            case _models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View2DAlignment:
                this.engineService.changeViewMode(_models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View2DApi);
                break;
            case _models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View2DApi:
                this.engineService.changeViewMode(_models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View2DRelation);
                break;
            case _models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View2DRelation:
                this.engineService.changeViewMode(_models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View3D);
                break;
            case _models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View3D:
                this.engineService.changeViewMode(_models__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].View2DAlignment);
                break;
        }
    }
}
UiInfobarTopComponent.ɵfac = function UiInfobarTopComponent_Factory(t) { return new (t || UiInfobarTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__["AlignmentCubeService"])); };
UiInfobarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UiInfobarTopComponent, selectors: [["app-ui-infobar-top"]], decls: 4, vars: 1, consts: [["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UiInfobarTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UiInfobarTopComponent_Template_button_click_0_listener() { return ctx.changeViewMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "cameraswitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.engineService.viewMode, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], encapsulation: 2 });


/***/ }),

/***/ "Luw/":
/*!*******************************************************************************!*\
  !*** ./src/app/_components/apis/api-information/api-information.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ApiInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInformationComponent", function() { return ApiInformationComponent; });
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_interfaces */ "rGDM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
















function ApiInformationComponent_mat_tab_5_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_ng_container_20_Template_input_ngModelChange_4_listener($event) { const parameter_r3 = ctx.$implicit; return parameter_r3.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_ng_container_20_Template_input_ngModelChange_8_listener($event) { const parameter_r3 = ctx.$implicit; return parameter_r3.filter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_ng_container_20_Template_input_ngModelChange_12_listener($event) { const parameter_r3 = ctx.$implicit; return parameter_r3.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_ng_container_20_Template_input_ngModelChange_16_listener($event) { const parameter_r3 = ctx.$implicit; return parameter_r3.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const parameter_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", parameter_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", parameter_r3.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", parameter_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", parameter_r3.status);
} }
function ApiInformationComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.apiConfiguration.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "format");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.apiConfiguration.format = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.apiConfiguration.label = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "url");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ApiInformationComponent_mat_tab_5_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.apiConfiguration.url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ApiInformationComponent_mat_tab_5_ng_container_20_Template, 17, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.apiConfiguration.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.apiConfiguration.format);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.apiConfiguration.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.apiConfiguration.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.apiConfiguration.parameters);
} }
function ApiInformationComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "json-editor", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r1.editorOptionsConfig)("data", ctx_r1.apiConfiguration);
} }
class ApiInformationComponent {
    constructor(connection, _snackBar, data) {
        this.connection = connection;
        this._snackBar = _snackBar;
        this.data = data;
        this.apiConfiguration = data;
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', { duration: 2000 });
    }
    ngOnInit() {
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'code';
        this.editorOptionsConfig.modes = ['code'];
    }
    save() {
        const apiConfigurationChanged = this.editor.get();
        this.connection.updateApi(this.apiConfiguration, apiConfigurationChanged).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to save changes');
        });
    }
    onJSONChange() {
        this.apiConfiguration = this.editor.get();
    }
    delete() {
        this.connection.deleteApi(this.apiConfiguration.label).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to delete');
        });
    }
}
ApiInformationComponent.ɵfac = function ApiInformationComponent_Factory(t) { return new (t || ApiInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ApiInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ApiInformationComponent, selectors: [["app-api-information"]], viewQuery: function ApiInformationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, decls: 15, vars: 4, consts: [[1, "group-container", 3, "selectedIndexChange"], ["label", "Configuration Form", 4, "ngIf"], ["label", "Configuration File"], [4, "ngIf"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["label", "Configuration Form"], [1, "form-container"], ["matInput", "", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "options", "data"]], template: function ApiInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Api:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedIndexChange", function ApiInformationComponent_Template_mat_tab_group_selectedIndexChange_4_listener() { return ctx.onJSONChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ApiInformationComponent_mat_tab_5_Template, 21, 5, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ApiInformationComponent_ng_container_7_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ApiInformationComponent_Template_button_click_11_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ApiInformationComponent_Template_button_click_13_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.apiConfiguration.label, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.apiConfiguration);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", null);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorComponent"]], styles: [".group-container[_ngcontent-%COMP%] {\n  min-width: 50vw;\n  min-height: 50vh;\n  max-height: 95vh;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  min-width: 50vw;\n  min-height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBpLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJhcGktaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAtY29udGFpbmVye1xuICBtaW4td2lkdGg6IDUwdnc7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIG1heC1oZWlnaHQ6IDk1dmg7XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDUwdnc7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "LzbG":
/*!********************************************************************************!*\
  !*** ./src/assets/data/alignments/doris/sample_dblp_sample_arxiv_overlap.json ***!
  \********************************************************************************/
/*! exports provided: system, alignments, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"system\":\"DORIS (Overlap)\",\"alignments\":[{\"metrics\":{\"confidence\":0.9102564102564102},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#title\"]}],\"api_path\":[\"feed.entry.title\"]},{\"metrics\":{\"confidence\":0.14102564102564102},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#otherFullCreatorName\"]}],\"api_path\":[\"feed.entry.author[*].name\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#primaryFullCreatorName\"]}],\"api_path\":[\"feed.entry.author[*].name\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"http://www.w3.org/2000/01/rdf-schema#label\"]}],\"api_path\":[\"feed.entry.author[*].name\"]}],\"name\":\"sample_dblp_sample_arxiv_overlap\"}");

/***/ }),

/***/ "Lzwh":
/*!*****************************************************!*\
  !*** ./src/app/_services/path-formatter.service.ts ***!
  \*****************************************************/
/*! exports provided: PathFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathFormatterService", function() { return PathFormatterService; });
/* harmony import */ var _assets_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/settings */ "AJaE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PathFormatterService {
    constructor() {
        this.apiPathFull = true;
        this.apiWithWildcard = false;
        this.relationPathFull = true;
    }
    formatApiPath(path) {
        const context = path.match(_assets_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].regexApiSearch);
        if (context == null) {
            return path;
        }
        for (let i = 0; i < context.length; i++) {
            context[i] = context[i].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].regexApiReplace, '');
        }
        // remove wildcards
        for (let i = 0; i < context.length; i++) {
            context[i] = context[i].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].regexApiReplaceWildcard, '');
        }
        return context.join();
    }
    formatRelationPath(path) {
        const context = path.match(_assets_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].regexRelSearch);
        if (context == null) {
            return path;
        }
        for (let i = 0; i < context.length; i++) {
            context[i] = context[i].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].regexRelReplace, '');
        }
        return context.join();
    }
    joinRelPaths(paths) {
        return paths.join(_assets_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].joinSymbol);
    }
}
PathFormatterService.ɵfac = function PathFormatterService_Factory(t) { return new (t || PathFormatterService)(); };
PathFormatterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PathFormatterService, factory: PathFormatterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MGmQ":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/mapping-suggestion-tool/mapping-editor/mapping-editor.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: MappingEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingEditorComponent", function() { return MappingEditorComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/gsb.service */ "S+OK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _mapping_suggestion_mapping_suggestion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mapping-suggestion/mapping-suggestion.component */ "T+2G");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");







class MappingEditorComponent {
    constructor(data, gsbService) {
        this.data = data;
        this.gsbService = gsbService;
    }
    ngOnInit() {
    }
    deleteSuggestion() {
        this.gsbService.suggestionContainer.suggestions.splice(this.data.index, 1);
    }
}
MappingEditorComponent.ɵfac = function MappingEditorComponent_Factory(t) { return new (t || MappingEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_1__["GsbService"])); };
MappingEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MappingEditorComponent, selectors: [["app-mapping-editor"]], decls: 6, vars: 1, consts: [[3, "suggestionMapping"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close", "click"]], template: function MappingEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-mapping-suggestion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MappingEditorComponent_Template_button_click_4_listener() { return ctx.deleteSuggestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("suggestionMapping", ctx.data.entry);
    } }, directives: [_mapping_suggestion_mapping_suggestion_component__WEBPACK_IMPORTED_MODULE_3__["MappingSuggestionComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBwaW5nLWVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NdcZ":
/*!******************************************************************!*\
  !*** ./src/app/pages/data-cube-page/data-cube-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DataCubePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCubePageComponent", function() { return DataCubePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_alignment_cube_alignment_cube_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_components/alignment-cube/alignment-cube.component */ "zUWA");


class DataCubePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataCubePageComponent.ɵfac = function DataCubePageComponent_Factory(t) { return new (t || DataCubePageComponent)(); };
DataCubePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataCubePageComponent, selectors: [["app-data-cube-page"]], decls: 1, vars: 0, template: function DataCubePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alignment-cube");
    } }, directives: [_components_alignment_cube_alignment_cube_component__WEBPACK_IMPORTED_MODULE_1__["AlignmentCubeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWN1YmUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "OO+a":
/*!************************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/final-alignmnet/final-alignment.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FinalAlignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalAlignmentComponent", function() { return FinalAlignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_classes/Utils */ "vWX8");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/gsb.service */ "S+OK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _mapping_suggestion_tool_mapping_editor_mapping_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapping-suggestion-tool/mapping-editor/mapping-editor.component */ "MGmQ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");













function FinalAlignmentComponent_div_5_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r6.gsbService.showFullLocalPath ? entry_r11 : ctx_r6.utils.formatLocalPath(entry_r11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FinalAlignmentComponent_div_5_ng_container_1_div_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalAlignmentComponent_div_5_ng_container_1_div_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalAlignmentComponent_div_5_ng_container_1_div_1_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalAlignmentComponent_div_5_ng_container_1_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r12);
} }
function FinalAlignmentComponent_div_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FinalAlignmentComponent_div_5_ng_container_1_div_1_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FinalAlignmentComponent_div_5_ng_container_1_div_1_mat_icon_5_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FinalAlignmentComponent_div_5_ng_container_1_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FinalAlignmentComponent_div_5_ng_container_1_div_1_mat_icon_7_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FinalAlignmentComponent_div_5_ng_container_1_div_1_div_9_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinalAlignmentComponent_div_5_ng_container_1_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const suggestionMapping_r2 = ctx_r14.$implicit; const i_r3 = ctx_r14.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openMappingEditor(suggestionMapping_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestionMapping_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionMapping_r2.general.localEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionMapping_r2.general.type === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionMapping_r2.general.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionMapping_r2.general.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionMapping_r2.general.webEntries);
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r24 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r19.gsbService.showFullLocalPath ? entry_r24 : ctx_r19.utils.formatLocalPath(entry_r24), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r25);
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_mat_icon_5_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_mat_icon_7_Template, 2, 0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_div_9_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const suggestionMapping_r2 = ctx_r27.$implicit; const i_r3 = ctx_r27.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.openMappingEditor(suggestionMapping_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestionEntry_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionEntry_r17.template.localEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionEntry_r17.template.type === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionEntry_r17.template.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionEntry_r17.template.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionEntry_r17.template.webEntries);
} }
function FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_div_1_Template, 14, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suggestionEntry_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionEntry_r17.selected);
} }
function FinalAlignmentComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinalAlignmentComponent_div_5_ng_container_1_div_1_Template, 14, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FinalAlignmentComponent_div_5_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suggestionMapping_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestionMapping_r2.general.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionMapping_r2.suggestions);
} }
function FinalAlignmentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinalAlignmentComponent_div_5_ng_container_1_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gsbService.suggestionContainer.suggestions);
} }
class FinalAlignmentComponent {
    constructor(gsbService, cdr, _dialog, _snackBar) {
        this.gsbService = gsbService;
        this.cdr = cdr;
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]();
    }
    ngOnInit() {
    }
    openMappingEditor(entry, index) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = { entry, index };
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.minHeight = '70vh';
        dialogConfig.maxWidth = '90vw';
        dialogConfig.minWidth = '70vw';
        const dialogRef = this._dialog.open(_mapping_suggestion_tool_mapping_editor_mapping_editor_component__WEBPACK_IMPORTED_MODULE_4__["MappingEditorComponent"], dialogConfig);
    }
    saveFinalAlignment() {
        this.gsbService.generateFinalAlignment();
        this.gsbService.saveFinalAlignment().then((resp) => {
            this._snackBar.open('Saved!!!', 'Close');
        }, (err) => {
            this._snackBar.open('Failed to save!!!', 'Close');
        });
    }
}
FinalAlignmentComponent.ɵfac = function FinalAlignmentComponent_Factory(t) { return new (t || FinalAlignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_2__["GsbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
FinalAlignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinalAlignmentComponent, selectors: [["app-final-alignmnet"]], inputs: { finalAlignment: "finalAlignment" }, decls: 11, vars: 1, consts: [[1, "stepper"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "mapping-wrapper", 4, "ngIf"], [1, "mapping-wrapper"], [4, "ngFor", "ngForOf"], ["class", "mapping", 4, "ngIf"], [1, "mapping"], [1, "relation-container"], ["class", "entry", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "relationType"], [4, "ngIf"], [1, "edit"], ["mat-button", "", "aria-label", "edit", 3, "click"], [1, "entry"], [3, "innerHtml"]], template: function FinalAlignmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Final Alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinalAlignmentComponent_Template_button_click_3_listener() { return ctx.saveFinalAlignment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FinalAlignmentComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinalAlignmentComponent_Template_button_click_8_listener() { return ctx.saveFinalAlignment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gsbService.suggestionContainer);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".mapping-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%] {\n  display: flex;\n  border: 2px black solid;\n  margin: 0.5rem;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%] {\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid gray;\n  padding: 0.75rem;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-left: 2px black solid;\n  border-right: 2px black solid;\n}\n.mapping-wrapper[_ngcontent-%COMP%]   .mapping[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-left: 2px black solid;\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: ce;\n  align-items: center;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluYWwtYWxpZ25tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNRO0VBQ0UsZ0JBQUE7QUFDVjtBQUlJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBRk47QUFhSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFYTjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZEY7QUFpQkE7RUFDRSxTQUFBO0FBZEYiLCJmaWxlIjoiZmluYWwtYWxpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHBpbmctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLm1hcHBpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XG4gICAgbWFyZ2luOiAwLjVyZW07XG5cbiAgICAucmVsYXRpb24tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmVudHJ5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2aWRlciB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItbGVmdDogMnB4IGJsYWNrIHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggYmxhY2sgc29saWQ7XG5cbiAgICAgIC5hY3Rpb24ge1xuXG4gICAgICB9XG5cbiAgICAgIC5yZWxhdGlvblR5cGUge1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVkaXR7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItbGVmdDogMnB4IGJsYWNrIHNvbGlkO1xuICAgIH1cblxuICB9XG59XG5cbi5zdGVwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ "OqFy":
/*!************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/alignment-selector/index.ts ***!
  \************************************************************************/
/*! exports provided: AlignmentSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alignment_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alignment-selector.component */ "JpYR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentSelectorComponent", function() { return _alignment_selector_component__WEBPACK_IMPORTED_MODULE_0__["AlignmentSelectorComponent"]; });




/***/ }),

/***/ "Pxif":
/*!*******************************************************!*\
  !*** ./src/assets/templates/webservice_template.json ***!
  \*******************************************************/
/*! exports provided: webservice, db, returnTemplate, errorType, inputs, latency, maxRequests, where, type, maxRequestsPerMinute, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"webservice\":\"/{ws-name}/{pathname}\",\"db\":\"scigraph\",\"returnTemplate\":\"{ws-name}/{ws-name}.json.ftl\",\"errorType\":\"jsonWithStatus\",\"inputs\":[\"doi\"],\"latency\":\"1000\",\"maxRequests\":\"2000\",\"where\":[[\"?subject\",\"doi\",\"$doi\"]],\"type\":\"precise\",\"maxRequestsPerMinute\":\"60\"}");

/***/ }),

/***/ "Qlnh":
/*!*********************************************!*\
  !*** ./src/app/_components/navbar/index.ts ***!
  \*********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ "1aVU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return _navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"]; });




/***/ }),

/***/ "QwFO":
/*!******************************************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/mapping-suggestion-tool/mapping-view/mapping-view.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MappingViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingViewComponent", function() { return MappingViewComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/gsb.service */ "S+OK");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_classes/Utils */ "vWX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");







function MappingViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx_r0.gsbService.showFullLocalPath ? entry_r6 : ctx_r0.utils.formatLocalPath(entry_r6), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function MappingViewComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MappingViewComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MappingViewComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MappingViewComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r7);
} }
function MappingViewComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", entry_r15.value, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function MappingViewComponent_div_17_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MappingViewComponent_div_17_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MappingViewComponent_div_17_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MappingViewComponent_div_17_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](entry_r16.value);
} }
function MappingViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MappingViewComponent_div_17_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MappingViewComponent_div_17_mat_icon_6_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MappingViewComponent_div_17_mat_icon_7_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MappingViewComponent_div_17_mat_icon_8_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MappingViewComponent_div_17_div_10_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapping_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", mapping_r8.localEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mapping_r8.type === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mapping_r8.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mapping_r8.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", mapping_r8.webEntries);
} }
class MappingViewComponent {
    constructor(data, gsbService) {
        this.data = data;
        this.gsbService = gsbService;
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"]();
    }
    ngOnInit() {
    }
}
MappingViewComponent.ɵfac = function MappingViewComponent_Factory(t) { return new (t || MappingViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_1__["GsbService"])); };
MappingViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MappingViewComponent, selectors: [["app-mapping-view"]], decls: 18, vars: 6, consts: [[1, "suggestions-wrapper"], [1, "mapping-wrapper"], [1, "mapping"], [1, "relation-container"], ["class", "entry", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "relationType"], [4, "ngIf"], ["class", "mapping-wrapper", 4, "ngFor", "ngForOf"], [1, "entry"], [3, "innerHtml"]], template: function MappingViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MappingViewComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MappingViewComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MappingViewComponent_mat_icon_10_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MappingViewComponent_mat_icon_11_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MappingViewComponent_div_13_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MappingViewComponent_div_17_Template, 11, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data.template.localEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.template.type === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.template.type === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.template.type === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data.template.webEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data.mappings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".suggestions-wrapper[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.mapping[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  display: flex;\n  border: 2px black solid;\n}\n\n.mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%] {\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid gray;\n  padding: 0.75rem;\n}\n\n.mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n\n.mapping[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-left: 2px black solid;\n  border-right: 2px black solid;\n}\n\n.mapping[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-right: 2px black solid;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hcHBpbmctdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFFTTtFQUNFLGdCQUFBO0FBQVI7O0FBSUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFGSjs7QUFhRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFYSjs7QUFjQTtFQUNFLFNBQUE7QUFYRiIsImZpbGUiOiJtYXBwaW5nLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VnZ2VzdGlvbnMtd3JhcHBlcntcbiAgcGFkZGluZzogMXJlbTtcblxufVxuXG4ubWFwcGluZyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcblxuICAucmVsYXRpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmVudHJ5IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBibGFjayBzb2xpZDtcblxuICAgIC5hY3Rpb24ge1xuXG4gICAgfVxuXG4gICAgLnJlbGF0aW9uVHlwZSB7XG5cbiAgICB9XG4gIH1cblxuICAuc2VsZWN0e1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggYmxhY2sgc29saWQ7XG4gIH1cbn1cbnAge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "RuOE":
/*!*************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/index.ts ***!
  \*************************************************/
/*! exports provided: SceneLoader, PickHelper, ResourceTracker, ThreeJsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SceneLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneLoader */ "XRQQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneLoader", function() { return _SceneLoader__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"]; });

/* harmony import */ var _PickHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PickHelper */ "jiic");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickHelper", function() { return _PickHelper__WEBPACK_IMPORTED_MODULE_1__["PickHelper"]; });

/* harmony import */ var _ResourceTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceTracker */ "oNFq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceTracker", function() { return _ResourceTracker__WEBPACK_IMPORTED_MODULE_2__["ResourceTracker"]; });

/* harmony import */ var _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThreeJsUtil */ "FBGG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeJsUtil", function() { return _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_3__["ThreeJsUtil"]; });







/***/ }),

/***/ "S+OK":
/*!******************************************!*\
  !*** ./src/app/_services/gsb.service.ts ***!
  \******************************************/
/*! exports provided: GsbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsbService", function() { return GsbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _backend_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend-connection.service */ "sJrL");
/* harmony import */ var _assets_data_testEntities_apiEntity_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/testEntities/apiEntity.json */ "qxpx");
var _assets_data_testEntities_apiEntity_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/testEntities/apiEntity.json */ "qxpx", 1);
/* harmony import */ var _assets_data_testEntities_localEntity_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/testEntities/localEntity.json */ "X6Pe");
var _assets_data_testEntities_localEntity_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/testEntities/localEntity.json */ "X6Pe", 1);
/* harmony import */ var _assets_data_testEntities_localDb_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/testEntities/localDb.json */ "Timg");
var _assets_data_testEntities_localDb_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/testEntities/localDb.json */ "Timg", 1);
/* harmony import */ var _assets_data_testEntities_webDb_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/data/testEntities/webDb.json */ "YTW6");
var _assets_data_testEntities_webDb_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/testEntities/webDb.json */ "YTW6", 1);
/* harmony import */ var _assets_data_testEntities_exampleSuggestion_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/data/testEntities/exampleSuggestion.json */ "i9bZ");
var _assets_data_testEntities_exampleSuggestion_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/testEntities/exampleSuggestion.json */ "i9bZ", 1);
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_classes/Utils */ "vWX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");










class GsbService {
    constructor(connection) {
        this.connection = connection;
        this._entityAlignments = [];
        this._regexApiStore = [];
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_7__["Utils"]();
        this.showFullLocalPath = false;
        this.loadingTries = 1;
        this.maxLoadingTries = 50;
        this.finishedLoadingLocalEntity = false;
        this.finishedLoadingWebEntity = false;
        this.finishedNewEntity = false;
        this.suggestionsLoaded = false;
        this.finishedFinalAlignment = false;
        this.loadingNextEntityFailed = false;
    }
    startNewAlignment(localDb, webDb, identifier, inputType) {
        this._entityAlignments = [];
        this._localDatabase = localDb;
        this._webDatabase = webDb;
        this._selectedLocalIdentifier = identifier;
        this._selectedInputType = inputType;
        this._localKnownPathStore = new Set();
        this._webKnownPathStore = new Set();
        this.nextEntity().then(r => this.saveLocalKnownPaths());
    }
    removeMapping(mapping) {
        const i = this.currentMappings.indexOf(mapping);
        this.currentMappings.splice(i, 1);
    }
    addMapping(mapping) {
        this.currentMappings.push(mapping);
    }
    changeCurrentAlignment(i) {
        if (i < 0 && i >= this.entityAlignments.length) {
            return;
        }
        this._currentAlignment = this.entityAlignments[i];
        this._currentLocalEntity = this._currentAlignment.localEntity;
        this._currentWebEntity = this._currentAlignment.webEntity;
        this._currentIndex = i;
    }
    nextEntity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.saveLocalKnownPaths();
            this.finishedNewEntity = false;
            this.finishedLoadingLocalEntity = false;
            this.finishedLoadingWebEntity = false;
            this.loadingNextEntityFailed = false;
            // if (this._currentAlignment !== undefined) {
            //     this._entityAlignments.push(this._currentAlignment);
            // }
            this.loadingTries = 1;
            const list = [];
            while (this.loadingTries <= this.maxLoadingTries && !this.finishedLoadingWebEntity) {
                yield this.loadLocalEntity();
                list.push(this._currentLocalEntity.valueList[0].subject);
                yield this.loadWebEntity(this._currentLocalEntity.valueList[0].subject);
                this.loadingTries++;
            }
            if (this.loadingTries > this.maxLoadingTries) {
                this.loadingNextEntityFailed = true;
                console.log([...new Set(list)]);
                return;
            }
            this._currentAlignment = { mappings: [], localEntity: this.currentLocalEntity, webEntity: this.currentWebEntity };
            this._entityAlignments.push(this._currentAlignment);
            this._currentIndex = this._entityAlignments.length - 1;
            this.finishedNewEntity = true;
        });
    }
    loadLocalEntity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const identifier = this._selectedLocalIdentifier;
            const inputType = this._selectedInputType;
            this._currentLocalEntity = yield this.connection.getLocalEntity(this.localDatabase.label, identifier, inputType, 1).toPromise();
            this.utils.addHashToLocalEntity(this._currentLocalEntity);
            this.finishedLoadingLocalEntity = true;
        });
    }
    loadWebEntity(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.connection.getWebEntity(this.webDatabase.label, value, this._regexApiStore).toPromise().then(resp => {
                this._currentWebEntity = resp;
                this.utils.addHashToWebEntity(this._currentWebEntity);
                this.finishedLoadingWebEntity = true;
            }, err => {
                console.log(err);
            });
        });
    }
    debugMode() {
        this._currentWebEntity = _assets_data_testEntities_apiEntity_json__WEBPACK_IMPORTED_MODULE_2__;
        this._currentLocalEntity = _assets_data_testEntities_localEntity_json__WEBPACK_IMPORTED_MODULE_3__;
        this._localDatabase = _assets_data_testEntities_localDb_json__WEBPACK_IMPORTED_MODULE_4__;
        this._webDatabase = _assets_data_testEntities_webDb_json__WEBPACK_IMPORTED_MODULE_5__;
        this.utils.addHashToWebEntity(this._currentWebEntity);
        this._currentAlignment = { mappings: [], localEntity: this.currentLocalEntity, webEntity: this.currentWebEntity };
        this.entityAlignments.push(this._currentAlignment);
        this._suggestionContainer = _assets_data_testEntities_exampleSuggestion_json__WEBPACK_IMPORTED_MODULE_6__;
        this.suggestionsLoaded = true;
        this.finishedLoadingLocalEntity = true;
        this.finishedLoadingWebEntity = true;
        this.finishedNewEntity = true;
    }
    changeWebReducedResponse(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._currentWebEntity.reducedResponse = value;
            this.connection.postToFlatJson(value).toPromise().then((resp) => {
                this._currentWebEntity.dictionary = resp.dictionary;
                this.utils.addHashToWebEntity(this._currentWebEntity);
            });
            const diff = this.connection.postJsonDiff(this._currentWebEntity.originalResponse, value).toPromise().then((resp) => {
                this._regexApiStore = [...new Set(resp.regex)];
            });
        });
    }
    generateSuggestions() {
        this.suggestionsLoaded = false;
        const mappings = [];
        for (const alignment of this._entityAlignments) {
            for (const elem of alignment.mappings) {
                mappings.push(elem);
            }
        }
        this.connection.postSuggestions(mappings).toPromise().then((resp) => {
            this._suggestionContainer = resp;
            this.suggestionsLoaded = true;
        });
    }
    generateFinalAlignment() {
        this.finishedFinalAlignment = false;
        const mappings = [];
        for (const suggestion of this._suggestionContainer.suggestions) {
            const general = suggestion.general;
            if (general.selected) {
                mappings.push({ localEntries: general.localEntries, webEntries: general.webEntries, type: general.type });
            }
            for (const mapping of suggestion.suggestions) {
                const template = mapping.template;
                if (template.selected) {
                    mappings.push({ localEntries: template.localEntries, webEntries: template.webEntries, type: template.type });
                }
            }
        }
        this._finalAlignment = { mappings, localLabel: this._localDatabase.label, webLabel: this._webDatabase.label };
        this.finishedFinalAlignment = true;
    }
    saveFinalAlignment() {
        return this.connection.postFinalAlignment(this.finalAlignment).toPromise();
    }
    saveLocalKnownPaths() {
        if (this._currentLocalEntity === undefined || this._currentWebEntity === undefined) {
            return;
        }
        else {
            console.log(this._currentLocalEntity);
            console.log(this._currentWebEntity);
        }
        for (const entry of this._currentLocalEntity.valueList[0].fullKnowledge) {
            if (!this._localKnownPathStore.has(entry.path)) {
                this._localKnownPathStore.add(entry.path);
            }
        }
        for (const entry of this._currentWebEntity.dictionary) {
            if (!this._webKnownPathStore.has(entry.path)) {
                this._webKnownPathStore.add(entry.path);
            }
        }
    }
    get currentAlignment() {
        return this._currentAlignment;
    }
    get currentMappings() {
        return this._currentAlignment.mappings;
    }
    get currentWebEntity() {
        return this._currentWebEntity;
    }
    get currentLocalEntity() {
        return this._currentLocalEntity;
    }
    get localDatabase() {
        return this._localDatabase;
    }
    get webDatabase() {
        return this._webDatabase;
    }
    get finishedLoading() {
        return this.finishedLoadingLocalEntity && this.finishedLoadingWebEntity && this.finishedNewEntity;
    }
    get entityAlignments() {
        return this._entityAlignments;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    get finalAlignment() {
        return this._finalAlignment;
    }
    get suggestionContainer() {
        return this._suggestionContainer;
    }
    get localKnownPathStore() {
        return this._localKnownPathStore;
    }
    get webKnownPathStore() {
        return this._webKnownPathStore;
    }
}
GsbService.ɵfac = function GsbService_Factory(t) { return new (t || GsbService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__["BackendConnectionService"])); };
GsbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: GsbService, factory: GsbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/navbar/navbar.component */ "1aVU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px auto;\n  padding: 0px 0px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiAwcHggMHB4O1xufVxuXG4uYXBwLWNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "T+2G":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/mapping-suggestion-tool/mapping-suggestion/mapping-suggestion.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: MappingSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingSuggestionComponent", function() { return MappingSuggestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/gsb.service */ "S+OK");
/* harmony import */ var _classes_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_classes/Utils */ "vWX8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _mapping_view_mapping_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapping-view/mapping-view.component */ "QwFO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");













function MappingSuggestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.gsbService.showFullLocalPath ? entry_r7 : ctx_r0.utils.formatLocalPath(entry_r7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MappingSuggestionComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingSuggestionComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingSuggestionComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingSuggestionComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingSuggestionComponent_ng_container_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openMappingTable(ctx_r8.suggestionMapping.suggestions[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MappingSuggestionComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r10);
} }
function MappingSuggestionComponent_ng_container_20_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r19 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r14.gsbService.showFullLocalPath ? entry_r19 : ctx_r14.utils.formatLocalPath(entry_r19), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MappingSuggestionComponent_ng_container_20_div_3_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingSuggestionComponent_ng_container_20_div_3_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingSuggestionComponent_ng_container_20_div_3_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingSuggestionComponent_ng_container_20_div_3_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r20);
} }
function MappingSuggestionComponent_ng_container_20_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MappingSuggestionComponent_ng_container_20_div_3_Template_mat_checkbox_ngModelChange_3_listener($event) { const suggestion_r12 = ctx.$implicit; return suggestion_r12.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MappingSuggestionComponent_ng_container_20_div_3_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MappingSuggestionComponent_ng_container_20_div_3_mat_icon_10_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MappingSuggestionComponent_ng_container_20_div_3_mat_icon_11_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MappingSuggestionComponent_ng_container_20_div_3_mat_icon_12_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingSuggestionComponent_ng_container_20_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const suggestion_r12 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.openMappingTable(suggestion_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MappingSuggestionComponent_ng_container_20_div_3_div_18_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", suggestion_r12.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestion_r12.template.localEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", suggestion_r12.counter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestion_r12.template.type === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestion_r12.template.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestion_r12.template.type === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestion_r12.template.webEntries);
} }
function MappingSuggestionComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Individual Mappings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MappingSuggestionComponent_ng_container_20_div_3_Template, 20, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.suggestionMapping.suggestions);
} }
class MappingSuggestionComponent {
    constructor(gsbService, cdr, _dialog) {
        this.gsbService = gsbService;
        this.cdr = cdr;
        this._dialog = _dialog;
        this.utils = new _classes_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"]();
        this.useGeneral = true;
        this.useIndividual = false;
    }
    ngOnInit() {
    }
    toggleUseGeneral() {
        this.useGeneral = !this.useGeneral;
        this.useIndividual = !this.useGeneral;
    }
    toggleUseIndividual() {
        this.useIndividual = !this.useIndividual;
        this.useGeneral = !this.useGeneral;
    }
    openMappingTable(entry) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = entry;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.minHeight = '70vh';
        dialogConfig.maxWidth = '90vw';
        dialogConfig.minWidth = '70vw';
        const dialogRef = this._dialog.open(_mapping_view_mapping_view_component__WEBPACK_IMPORTED_MODULE_4__["MappingViewComponent"], dialogConfig).afterClosed().toPromise().then(() => {
            this.cdr.detectChanges();
        });
    }
}
MappingSuggestionComponent.ɵfac = function MappingSuggestionComponent_Factory(t) { return new (t || MappingSuggestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_1__["GsbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MappingSuggestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MappingSuggestionComponent, selectors: [["app-mapping-suggestion"]], inputs: { suggestionMapping: "suggestionMapping" }, decls: 21, vars: 9, consts: [[1, "suggestions-wrapper"], [1, "mapping"], [1, "select"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "relation-container"], ["class", "entry", 4, "ngFor", "ngForOf"], [1, "divider"], [3, "innerHtml"], [1, "relationType"], [4, "ngIf"], [1, "action"], [1, "flex-grow-1"], [1, "entry"], ["mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["class", "mapping-wrapper", 4, "ngFor", "ngForOf"], [1, "mapping-wrapper"]], template: function MappingSuggestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "General Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MappingSuggestionComponent_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.suggestionMapping.general.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingSuggestionComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MappingSuggestionComponent_mat_icon_11_Template, 2, 0, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MappingSuggestionComponent_mat_icon_12_Template, 2, 0, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MappingSuggestionComponent_mat_icon_13_Template, 2, 0, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MappingSuggestionComponent_ng_container_15_Template, 4, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MappingSuggestionComponent_div_17_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MappingSuggestionComponent_ng_container_20_Template, 4, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.suggestionMapping.general.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestionMapping.general.localEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.suggestionMapping.general.counter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestionMapping.general.type === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestionMapping.general.type === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestionMapping.general.type === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestionMapping.suggestions.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestionMapping.general.webEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestionMapping.suggestions.length >= 1);
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".suggestions-wrapper[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.mapping[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  display: flex;\n  border: 2px black solid;\n}\n\n.mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%] {\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid gray;\n  padding: 0.75rem;\n}\n\n.mapping[_ngcontent-%COMP%]   .relation-container[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n\n.mapping[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-left: 2px black solid;\n  border-right: 2px black solid;\n}\n\n.mapping[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-right: 2px black solid;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hcHBpbmctc3VnZ2VzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFFTTtFQUNFLGdCQUFBO0FBQVI7O0FBSUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFGSjs7QUFhRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFYSjs7QUFjQTtFQUNFLFNBQUE7QUFYRiIsImZpbGUiOiJtYXBwaW5nLXN1Z2dlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VnZ2VzdGlvbnMtd3JhcHBlcntcbiAgcGFkZGluZzogMXJlbTtcblxufVxuXG4ubWFwcGluZyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcblxuICAucmVsYXRpb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmVudHJ5IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBibGFjayBzb2xpZDtcblxuICAgIC5hY3Rpb24ge1xuXG4gICAgfVxuXG4gICAgLnJlbGF0aW9uVHlwZSB7XG5cbiAgICB9XG4gIH1cblxuICAuc2VsZWN0e1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggYmxhY2sgc29saWQ7XG4gIH1cbn1cbnAge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Timg":
/*!***************************************************!*\
  !*** ./src/assets/data/testEntities/localDb.json ***!
  \***************************************************/
/*! exports provided: path, identifierMapContent, identifierMap, source, label, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"path\":\"C:\\\\Users\\\\mauri\\\\Documents\\\\Workspace\\\\DBs\\\\crossref\\\\tdb\",\"identifierMapContent\":{\"indexedDateTime\":\"<http://example/com/crossref/indexedDateTime>\",\"issuedTimeStamp\":\"<http://example/com/crossref/issuedTimeStamp>\",\"subject\":\"<http://example/com/crossref/subject>\",\"createdDateTime\":\"<http://example/com/crossref/createdDateTime>\",\"shortTitle\":\"<http://example/com/crossref/shortTitle>\",\"type\":\"<http://example/com/crossref/type>\",\"printIssn\":\"<http://example/com/crossref/printIssn>\",\"shortContainerTitle\":\"<http://example/com/crossref/shortContainerTitle>\",\"issuedDatePartsMonth\":\"<http://example/com/crossref/issuedDatePartsMonth>\",\"score\":\"<http://example/com/crossref/score>\",\"affiliation\":\"<http://example/com/crossref/affiliation>\",\"printIsbn\":\"<http://example/com/crossref/printIsbn>\",\"indexedTimeStamp\":\"<http://example/com/crossref/indexedTimeStamp>\",\"indexedDatePartsDay\":\"<http://example/com/crossref/indexedDatePartsDay>\",\"citationCount\":\"<http://example/com/crossref/citationCount>\",\"given\":\"<http://example/com/crossref/given>\",\"issue\":\"<http://example/com/crossref/issue>\",\"author\":\"<http://example/com/crossref/author>\",\"indexedDatePartsMonth\":\"<http://example/com/crossref/indexedDatePartsMonth>\",\"publishedPrintDatePartsYear\":\"<http://example/com/crossref/publishedPrintDatePartsYear>\",\"volume\":\"<http://example/com/crossref/volume>\",\"indexedDatePartsYear\":\"<http://example/com/crossref/indexedDatePartsYear>\",\"issn\":\"<http://example/com/crossref/issn>\",\"createdDatePartsMonth\":\"<http://example/com/crossref/createdDatePartsMonth>\",\"doiPrefix\":\"<http://example/com/crossref/doiPrefix>\",\"containerTitle\":\"<http://example/com/crossref/containerTitle>\",\"createdDatePartsYear\":\"<http://example/com/crossref/createdDatePartsYear>\",\"referenceCount\":\"<http://example/com/crossref/referenceCount>\",\"otherOriginalTitle\":\"<http://example/com/crossref/otherOriginalTitle>\",\"publisher\":\"<http://example/com/crossref/publisher>\",\"page\":\"<http://example/com/crossref/page>\",\"doi\":\"<http://example/com/crossref/doi>\",\"otherShortTitle\":\"<http://example/com/crossref/otherShortTitle>\",\"issuedDatePartsYear\":\"<http://example/com/crossref/issuedDatePartsYear>\",\"publishedPrintDatePartsMonth\":\"<http://example/com/crossref/publishedPrintDatePartsMonth>\",\"electronicIssn\":\"<http://example/com/crossref/electronicIssn>\",\"isbn\":\"<http://example/com/crossref/isbn>\",\"createdTimeStamp\":\"<http://example/com/crossref/createdTimeStamp>\",\"link\":\"<http://example/com/crossref/link>\",\"title\":\"<http://example/com/crossref/title>\",\"issuedDatePartsDay\":\"<http://example/com/crossref/issuedDatePartsDay>\",\"otherShortContainerTitle\":\"<http://example/com/crossref/otherShortContainerTitle>\",\"publishedPrintDatePartsDay\":\"<http://example/com/crossref/publishedPrintDatePartsDay>\",\"member\":\"<http://example/com/crossref/member>\",\"otherContainerTitle\":\"<http://example/com/crossref/otherContainerTitle>\",\"createdDatePartsDay\":\"<http://example/com/crossref/createdDatePartsDay>\",\"url\":\"<http://example/com/crossref/url>\",\"originalTitle\":\"<http://example/com/crossref/originalTitle>\",\"issuedDateTime\":\"<http://example/com/crossref/issuedDateTime>\",\"family\":\"<http://example/com/crossref/family>\"},\"identifierMap\":\"configs\\\\identifierMaps\\\\crossref.json\",\"source\":\"C:\\\\Users\\\\mauri\\\\Documents\\\\Workspace\\\\DBs\\\\crossref\\\\sample_crossref.nt\",\"label\":\"crossref\"}");

/***/ }),

/***/ "Tu0g":
/*!*************************************************************!*\
  !*** ./src/assets/data/alignments/example/scigraph_v4.json ***!
  \*************************************************************/
/*! exports provided: system, alignments, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"system\":\"DORIS (PCA)\",\"alignments\":[{\"metrics\":{\"confidence\":0.8606060606060606},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#title\"]}],\"api_path\":[\"message.title[*]\"]},{\"metrics\":{\"confidence\":0.95},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#pagination\"]}],\"api_path\":[\"message.page\"]},{\"metrics\":{\"confidence\":0.8040816326530612},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#primaryAffiliation\"]}],\"api_path\":[\"message.author[*].affiliation[*]\"]},{\"metrics\":{\"confidence\":0.95},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedIn\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"http://www.wikidata.org/prop/direct/P356\"]}],\"api_path\":[\"message.DOI\"]},{\"metrics\":{\"confidence\":0.95},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournal\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolume\"]}],\"api_path\":[\"message.volume\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolumeIssue\"]}],\"api_path\":[\"message.journal-issue.issue\"]},{\"metrics\":{\"confidence\":0.2},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedAsPartOf\",\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]}],\"name\":\"dblp_crossref_v4\"}");

/***/ }),

/***/ "UI+o":
/*!***********************************************!*\
  !*** ./src/app/_classes/alignment/Mapping.ts ***!
  \***********************************************/
/*! exports provided: Mapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapping", function() { return Mapping; });
/* harmony import */ var _RelationPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelationPath */ "UU1k");

class Mapping {
    constructor(apiPath, relationPaths, metrics) {
        this._apiPaths = apiPath;
        this._relationPaths = relationPaths;
        this._metrics = metrics;
    }
    get apiPaths() {
        return this._apiPaths;
    }
    get relationPaths() {
        return this._relationPaths;
    }
    get metrics() {
        return this._metrics;
    }
    addRelationPath(relationPaths) {
        if (Array.isArray(relationPaths)) {
            if (relationPaths.length === 0) {
                return;
            }
            if (relationPaths[0] instanceof _RelationPath__WEBPACK_IMPORTED_MODULE_0__["RelationPath"]) {
                for (const relationPath of relationPaths) {
                    this._relationPaths.push(relationPath);
                }
            }
            else {
                const rel = new _RelationPath__WEBPACK_IMPORTED_MODULE_0__["RelationPath"](relationPaths);
                this._relationPaths.push(rel);
            }
        }
        else {
            this._relationPaths.push(relationPaths);
        }
    }
    addApiPath(apiPath) {
        if (Array.isArray(apiPath)) {
            for (const path of apiPath) {
                this._apiPaths.push(path);
            }
        }
        else {
            this._apiPaths.push(apiPath);
        }
    }
}


/***/ }),

/***/ "UKXl":
/*!*******************************************************!*\
  !*** ./src/app/pages/schema-page/schema.component.ts ***!
  \*******************************************************/
/*! exports provided: SchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaComponent", function() { return SchemaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");



class SchemaComponent {
    constructor() {
    }
    ngOnInit() {
        this.code = `
            {
              "$schema": "http://json-schema.org/draft-07/schema#",
              "$id": "https://example.com/alignment.schema.json",
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "system":{
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "alignments": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/mapping"
                  }
                }
              },
              "required": [
                "name",
                "alignments"
              ],


              "definitions": {
                "mapping": {
                  "type": "object",
                  "properties": {
                    "api_path": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "relation_path": {
                      "type": "array",
                      "items": {
                        "$ref": "#/definitions/relationPath"
                      }
                    },
                    "metrics": {
                      "type": "object",
                      "patternProperties": {
                        "": {
                          "type": "number"
                        }
                      }
                    }
                  },
                  "required": [
                    "api_path",
                    "relation_path",
                    "metrics"
                  ]
                },
                "relationPath": {
                  "type": "object",
                  "properties": {
                    "path": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }`;
    }
}
SchemaComponent.ɵfac = function SchemaComponent_Factory(t) { return new (t || SchemaComponent)(); };
SchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchemaComponent, selectors: [["app-schema"]], decls: 6, vars: 2, consts: [["mat-raised-button", "", "href", "../../../assets/jsonSchema/alignment.schema.json"], [3, "highlight", "lineNumbers"]], template: function SchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Download here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.code)("lineNumbers", true);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["Highlight"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlbWEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UU1k":
/*!****************************************************!*\
  !*** ./src/app/_classes/alignment/RelationPath.ts ***!
  \****************************************************/
/*! exports provided: RelationPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationPath", function() { return RelationPath; });
class RelationPath {
    constructor(paths) {
        this._paths = paths;
    }
    addPath(path) {
        this._paths.push(path);
    }
    compareTo(b) {
        return this.paths.toString().localeCompare(b.toString());
    }
    get paths() {
        return this._paths;
    }
    toString() {
        return this.paths.join();
    }
}


/***/ }),

/***/ "VHTt":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: ViewMode, MappingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewModeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewModeEnum */ "Ag4z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewMode", function() { return _ViewModeEnum__WEBPACK_IMPORTED_MODULE_0__["ViewMode"]; });

/* harmony import */ var _MappingType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MappingType */ "1lay");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MappingType", function() { return _MappingType__WEBPACK_IMPORTED_MODULE_1__["MappingType"]; });





/***/ }),

/***/ "WSlw":
/*!*************************************************************!*\
  !*** ./src/assets/data/alignments/example/scigraph_v1.json ***!
  \*************************************************************/
/*! exports provided: system, alignments, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"system\":\"DORIS (PCA)\",\"alignments\":[{\"metrics\":{\"confidence\":0.5606060606060606},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#title\"]}],\"api_path\":[\"message.title[*]\"]},{\"metrics\":{\"confidence\":0.75},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#pagination\"]}],\"api_path\":[\"message.page\"]},{\"metrics\":{\"confidence\":0.20408163265306123},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#primaryAffiliation\"]}],\"api_path\":[\"message.author[*].affiliation[*]\"]},{\"metrics\":{\"confidence\":0.75},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedIn\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"http://www.wikidata.org/prop/direct/P356\"]}],\"api_path\":[\"message.DOI\"]},{\"metrics\":{\"confidence\":0.75},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournal\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolume\"]}],\"api_path\":[\"message.volume\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolumeIssue\"]}],\"api_path\":[\"message.journal-issue.issue\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedAsPartOf\",\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]}],\"name\":\"dblp_crossref_v1\"}");

/***/ }),

/***/ "WWyf":
/*!***************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui.component.ts ***!
  \***************************************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-sidebar-left/ui-sidebar-left.component */ "Bw4D");
/* harmony import */ var _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-sidebar-right/ui-sidebar-right.component */ "YZTg");
/* harmony import */ var _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-infobar-bottom/ui-infobar-bottom.component */ "rgXw");
/* harmony import */ var _ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-infobar-top/ui-infobar-top.component */ "LlcP");
/* harmony import */ var _engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../engine/alignment-cube.service */ "vcHc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");









class UiComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], viewQuery: function UiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_0__["UiSidebarLeftComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_1__["UiSidebarRightComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_2__["UiInfobarBottomComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_3__["UiInfobarTopComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.leftSidebar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rightSidebar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.bottomInfobar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.topInfobar = _t.first);
    } }, inputs: { engineService: "engineService" }, decls: 4, vars: 0, consts: [[1, "ui-wrapper"], [1, "ui-wrapper-top"], [1, "ui-wrapper-left"], [1, "ui-wrapper-right"]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-ui-infobar-top", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-ui-sidebar-left", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-ui-sidebar-right", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_3__["UiInfobarTopComponent"], _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_0__["UiSidebarLeftComponent"], _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_1__["UiSidebarRightComponent"]], styles: [".ui-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ui-wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.ui-wrapper-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  z-index: 10;\n  height: 80%;\n  max-width: 20%;\n  margin: 1rem;\n  display: inline-block;\n}\n.ui-wrapper-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 10;\n  width: 20%;\n  max-width: 20%;\n  margin: 1rem;\n  display: inline-block;\n}\n.ui-wrapper-top[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  margin: 1rem;\n}\n.label[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: sans-serif;\n  padding: 2px;\n  background: rgba(0, 0, 0, 0.6);\n}\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQURGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFGRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUhGO0FBT0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFKRjtBQVFBO0VBQ0Usb0JBQUE7QUFMRjtBQVFBOztFQUVFLGFBQUE7QUFMRjtBQVFBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBUUE7RUFDRSxnQkFBQTtBQUxGIiwiZmlsZSI6InVpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgKiB7XG4gICAgei1pbmRleDogMTA7XG5cbiAgfVxufVxuXG4udWktd3JhcHBlci1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1heC13aWR0aDogMjAlO1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuXG4udWktd3JhcHBlci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMjAlO1xuICBtYXgtd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLnVpLXdyYXBwZXItdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMXJlbTtcblxufVxuXG4ubGFiZWwge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNik7XG5cbn1cblxuLmV4YW1wbGUtYWN0aW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ "X6Pe":
/*!*******************************************************!*\
  !*** ./src/assets/data/testEntities/localEntity.json ***!
  \*******************************************************/
/*! exports provided: predicate, valueList, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"predicate\":\"http://example/com/crossref/doi\",\"valueList\":[{\"fullKnowledge\":[{\"path\":\"http://example/com/crossref/issue\",\"value\":\"12\",\"hash\":\"733ae4bdfcffaa21f9e28908633cdafe\"},{\"path\":\"http://example/com/crossref/indexedTimeStamp\",\"value\":\"1616687130897\",\"hash\":\"620374e3c04d61814b8733ac25a74731\"},{\"path\":\"http://example/com/crossref/createdDatePartsMonth\",\"value\":\"6\",\"hash\":\"cae76c8ba528c4641ca33042605b7ecf\"},{\"path\":\"http://example/com/crossref/indexedDatePartsYear\",\"value\":\"2021\",\"hash\":\"3cb73d74603576bf9bee0e5cfb75855d\"},{\"path\":\"http://example/com/crossref/depositedDatePartMonth\",\"value\":\"9\",\"hash\":\"824bc2ab82cf18cb623272e61d0ab039\"},{\"path\":\"http://example/com/crossref/indexedDateTime\",\"value\":\"2021-03-25T15:45:30Z\",\"hash\":\"5255d2d84edda1eb8d352b7fd77394e8\"},{\"path\":\"http://example/com/crossref/link\",\"value\":\"http://xplorestaging.ieee.org/ielx7/83/8821493/08733990.pdf?arnumber=8733990\",\"hash\":\"5612278074d68f6c061426b1371735f7\"},{\"path\":\"http://example/com/crossref/publishedPrintDatePartsMonth\",\"value\":\"6\",\"hash\":\"082a1f22a375924aa006fe7d6d6c89de\"},{\"path\":\"http://example/com/crossref/publisher\",\"value\":\"Institute of Electrical and Electronics Engineers (IEEE)\",\"hash\":\"362ae5484ef6f44c20ad1f94ca04f075\"},{\"path\":\"http://example/com/crossref/depositedTimeStamp\",\"value\":\"1568990310000\",\"hash\":\"0b8ebc2c233cf9755ac9abb81d9ae328\"},{\"path\":\"http://example/com/crossref/onlineDatePartsDate\",\"value\":\"0\",\"hash\":\"ebf0d26fea8687bcf2f0efd34ea4c2b0\"},{\"path\":\"http://example/com/crossref/issuedDatePartsMonth\",\"value\":\"12\",\"hash\":\"0340fade8b4344d9c2884eb56a3cb169\"},{\"path\":\"http://example/com/crossref/subject\",\"value\":\"Computer Graphics and Computer-Aided Design\",\"hash\":\"19af601f181d1a2de5510efb748b6839\"},{\"path\":\"http://example/com/crossref/score\",\"value\":\"1\",\"hash\":\"67eb4ea9c174c6647fe5ad4fe184422c\"},{\"path\":\"http://example/com/crossref/printIssn\",\"value\":\"1057-7149\",\"hash\":\"7ee6a4c94523d25014389559dd9bf9bb\"},{\"path\":\"http://example/com/crossref/doiPrefix\",\"value\":\"10.1109\",\"hash\":\"14afb628565a53b5faae48429710aa5d\"},{\"path\":\"http://example/com/crossref/indexedDatePartsDate\",\"value\":\"25\",\"hash\":\"6eaaf137e2060cc7a6ea906c2f83856f\"},{\"path\":\"http://example/com/crossref/volume\",\"value\":\"28\",\"hash\":\"7d898705ad33cbf19651fdf30a87b5c0\"},{\"path\":\"http://example/com/crossref/referenceCount\",\"value\":\"39\",\"hash\":\"f6ca0fb47be5c0539533576ed406c4b3\"},{\"path\":\"http://example/com/crossref/doi\",\"value\":\"10.1109/tip.2019.2920510\",\"hash\":\"58438e44566c797323069dcfe08df6f7\"},{\"path\":\"http://example/com/crossref/page\",\"value\":\"5897-5909\",\"hash\":\"50bb91390a163ac166537af69c5a7e74\"},{\"path\":\"http://example/com/crossref/issn\",\"value\":\"1941-0042\",\"hash\":\"7e1550be6c658b3c686fb7115d0f1c6d\"},{\"path\":\"http://example/com/crossref/createdDatePartsYear\",\"value\":\"2019\",\"hash\":\"19bfc04c05e51f6c6f308932f1a60308\"},{\"path\":\"http://example/com/crossref/publishedPrintTimeStamp\",\"value\":\"1560195095000\",\"hash\":\"39106c33983e8c668940996aa01e02be\"},{\"path\":\"http://example/com/crossref/issn\",\"value\":\"1057-7149\",\"hash\":\"a32a1cc11b9290ef7df4f67a337622e8\"},{\"path\":\"http://example/com/crossref/shortContainerTitle\",\"value\":\"IEEE Trans. on Image Process.\",\"hash\":\"e137bf555ae33ad8bcdf58e1db2b23e5\"},{\"path\":\"http://example/com/crossref/containerTitle\",\"value\":\"IEEE Transactions on Image Processing\",\"hash\":\"f5ee49e2b8b0fba91ba298a340f195a2\"},{\"path\":\"http://example/com/crossref/publishedPrintDateTime\",\"value\":\"2019-06-10T19:31:35Z\",\"hash\":\"972985beb253533a2143d2f813077098\"},{\"path\":\"http://example/com/crossref/indexedDatePartsMonth\",\"value\":\"3\",\"hash\":\"212bf1d3811c3a1072e024c63e54a36a\"},{\"path\":\"http://example/com/crossref/createdTimeStamp\",\"value\":\"1560195095000\",\"hash\":\"443ac6b31169715489412889606c2592\"},{\"path\":\"http://example/com/crossref/electronicIssn\",\"value\":\"1941-0042\",\"hash\":\"47572f1143c0b6de4d3e2237a25280d4\"},{\"path\":\"http://example/com/crossref/depositedDateTime\",\"value\":\"2019-09-20T14:38:30Z\",\"hash\":\"73c179bcb4115655bf5c4f0a6e9733d6\"},{\"path\":\"http://example/com/crossref/citationCount\",\"value\":\"6\",\"hash\":\"3301a9ecfb98e885c90b7f25eef72d4d\"},{\"path\":\"http://example/com/crossref/title\",\"value\":\"Robust Face Image Super-Resolution via Joint Learning of Subdivided Contextual Model\",\"hash\":\"3e5646bea6a8938ed356e588a25dcb6e\"},{\"path\":\"http://example/com/crossref/onlineDatePartsYear\",\"value\":\"0\",\"hash\":\"1cf829f6f8f719cbd24922e5bae7f8c4\"},{\"path\":\"http://example/com/crossref/url\",\"value\":\"http://dx.doi.org/10.1109/tip.2019.2920510\",\"hash\":\"9b5a7b5ed3ff52361146702972e69fc4\"},{\"path\":\"http://example/com/crossref/type\",\"value\":\"journal-article\",\"hash\":\"9dcb35dba0480073f062473cac0c82a5\"},{\"path\":\"http://example/com/crossref/issuedDatePartsYear\",\"value\":\"2019\",\"hash\":\"1347361693a0471c8be23812e44a92f3\"},{\"path\":\"http://example/com/crossref/depositedDatePartYear\",\"value\":\"2019\",\"hash\":\"9876a04676bec9490988e50565038b94\"},{\"path\":\"http://example/com/crossref/createdDatePartsDate\",\"value\":\"10\",\"hash\":\"de12cd240fc004f541dec363e8a118e0\"},{\"path\":\"http://example/com/crossref/createdDateTime\",\"value\":\"2019-06-10T19:31:35Z\",\"hash\":\"00efbe68e440a460b91a05280e6d2024\"},{\"path\":\"http://example/com/crossref/subject\",\"value\":\"Software\",\"hash\":\"4cf875f8c3e5991bbc5f0fb07c7139db\"},{\"path\":\"http://example/com/crossref/depositedDatePartDay\",\"value\":\"20\",\"hash\":\"861a51932a29f5529329c84743bd9c3a\"},{\"path\":\"http://example/com/crossref/onlineDatePartsMonth\",\"value\":\"0\",\"hash\":\"93e8195151c7f8127a8975eedbf082ef\"},{\"path\":\"http://example/com/crossref/publishedPrintDatePartsYear\",\"value\":\"2019\",\"hash\":\"b6321d8fb1dde3cd97f40afb7825c226\"},{\"path\":\"http://example/com/crossref/member\",\"value\":\"263\",\"hash\":\"43a73d4274fbd9d98942f5da78e250d7\"},{\"path\":\"http://example/com/crossref/publishedPrintDatePartsDay\",\"value\":\"10\",\"hash\":\"86cbc43919f0d94eaa3aa49091000e5e\"}],\"subject\":\"10.1109/tip.2019.2920510\",\"value\":\"http://example/com/crossref/paper1930\"}]}");

/***/ }),

/***/ "XKEC":
/*!********************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/LabelCreator.ts ***!
  \********************************************************/
/*! exports provided: LabelCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelCreator", function() { return LabelCreator; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _ResourceTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceTracker */ "oNFq");
/* harmony import */ var _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThreeJsUtil */ "FBGG");



class LabelCreator {
    constructor(alignmentCubeService, labelFormatter) {
        this.alignmentCubeService = alignmentCubeService;
        this.labelFormatter = labelFormatter;
        this.alignmentModel = alignmentCubeService.alignmentContainer;
        this.scene = alignmentCubeService.scene;
        this.labelTracker = new _ResourceTracker__WEBPACK_IMPORTED_MODULE_1__["ResourceTracker"]();
    }
    /**
     * Create the label for the x Axis ( Api Paths )
     *
     * @param xStart - x position of start edge
     * @param yStart - y position of start edge
     * @param zStart - z position of start edge
     * @param xOffset
     * @param yOffset
     * @param zOffset
     * @param rotation - rotation radiant ( use Math.PI)
     * @param withLines - set if you need a visual support to the edge of the outline cube
     */
    addLabelsX(xStart, yStart, zStart, xOffset = 0, yOffset = 0, zOffset = 0, rotation = 0, withLines = false) {
        this.alignmentModel.apiLabels.forEach((apiPath, index) => {
            const x = xStart + xOffset + index;
            const y = yStart + yOffset;
            const z = zStart + zOffset;
            const context = this.labelFormatter.formatApiPath(apiPath);
            const label = this.attachLabelToObject(context, this.alignmentCubeService.outlineBox, x, y, z, 400, 'blue', rotation, true);
            this.labelTracker.track(label);
            if (withLines) {
                const line = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createLine(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](x, yStart, zStart), label.position);
                this.scene.add(line);
                this.labelTracker.track(line);
                this.alignmentCubeService.outlineBox.add(line);
            }
            this.alignmentCubeService.outlineBox.add(label);
        });
    }
    /**
     * Create the label for the y Axis ( Relation Paths )
     *
     * @param xStart - x position of start edge
     * @param yStart - y position of start edge
     * @param zStart - z position of start edge
     * @param xOffset
     * @param yOffset
     * @param zOffset
     * @param rotation - rotation radiant ( use Math.PI)
     * @param withLines - set if you need a visual support to the edge of the outline cube
     */
    addLabelsY(xStart, yStart, zStart, xOffset = 0, yOffset = 0, zOffset = 0, rotation = 0, withLines = false) {
        this.alignmentModel.relationPathLabels.forEach((relationPath, index) => {
            const labels = [];
            const x = xStart + xOffset;
            const y = yStart + yOffset + index;
            const z = zStart + zOffset;
            relationPath.forEach((path) => {
                labels.push(this.labelFormatter.formatRelationPath(path));
            });
            const labelContext = this.labelFormatter.joinRelPaths(labels);
            const label = this.attachLabelToObject(labelContext, this.alignmentCubeService.outlineBox, x, y, z, 400, 'gray', rotation, true);
            this.labelTracker.track(label);
            if (withLines) {
                const line = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createLine(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](xStart, y, zStart), label.position);
                this.scene.add(line);
                this.labelTracker.track(line);
                this.alignmentCubeService.outlineBox.add(line);
            }
            this.alignmentCubeService.outlineBox.add(label);
        });
    }
    /**
     * Create the label for the z Axis ( Alignments )
     *
     * @param xStart - x position of start edge
     * @param yStart - y position of start edge
     * @param zStart - z position of start edge
     * @param xOffset
     * @param yOffset
     * @param zOffset
     * @param rotation - rotation radiant ( use Math.PI)
     * @param withLines - set if you need a visual support to the edge of the outline cube
     */
    addLabelsZ(xStart, yStart, zStart, xOffset = 0, yOffset = 0, zOffset = 0, rotation = 0, withLines = false) {
        const depth = this.alignmentModel.alignments.length;
        for (let i = 0; i < depth; i++) {
            const x = xStart + xOffset;
            // const x = xStart + (depth - 1 - i) * 0.8 + xOffset;
            const y = yStart + yOffset;
            const z = zStart - depth + 1 + i + zOffset;
            const content = this.alignmentModel.alignments[i].name;
            const label = this.attachLabelToObject(content, this.alignmentCubeService.outlineBox, x, y, z, 400, 'gray', rotation, true);
            this.labelTracker.track(label);
            if (withLines) {
                const line = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createLine(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](xStart, yStart, z), label.position);
                this.scene.add(line);
                this.labelTracker.track(line);
                this.alignmentCubeService.outlineBox.add(line);
            }
            this.alignmentCubeService.outlineBox.add(label);
        }
    }
    /**
     * Attach a label to an Object3D.
     * @param content - label text
     * @param object
     * @param x - x position relative to object center
     * @param y - y position relative to object center
     * @param z - z position relative to object center
     * @param labelWidth
     * @param style - color for background
     * @param rotation - rotation radiant ( use Math.PI)
     * @param visible
     * @private
     */
    attachLabelToObject(content, object, x = 0, y = 1, z = 0, labelWidth = 100, style = 'gray', rotation = 0, visible = false) {
        const canvas = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createHTMLCanvasLabel(labelWidth, 40, content, style);
        const texture = new three__WEBPACK_IMPORTED_MODULE_0__["CanvasTexture"](canvas);
        // because our canvas is likely not a power of 2
        // in both dimensions set the filtering appropriately.
        texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
        texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["ClampToEdgeWrapping"];
        texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["ClampToEdgeWrapping"];
        const labelMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["SpriteMaterial"]({
            map: texture,
            transparent: true,
        });
        labelMaterial.rotation = rotation;
        const labelBaseScale = 0.01;
        const label = new three__WEBPACK_IMPORTED_MODULE_0__["Sprite"](labelMaterial);
        object.add(label);
        label.position.set(x, y, z);
        label.scale.x = canvas.width * labelBaseScale;
        label.scale.y = canvas.height * labelBaseScale;
        label.traverse((object1) => {
            object1.visible = visible;
        });
        return label;
    }
    /**
     * Delete all labels created by this
     */
    disposeLabels() {
        this.labelTracker.dispose();
    }
}


/***/ }),

/***/ "XRQQ":
/*!*******************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/SceneLoader.ts ***!
  \*******************************************************/
/*! exports provided: SceneLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneLoader", function() { return SceneLoader; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _LabelCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelCreator */ "XKEC");
/* harmony import */ var _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThreeJsUtil */ "FBGG");
/* harmony import */ var _DataCubeCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataCubeCreator */ "B6vo");
/* harmony import */ var _ResourceTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResourceTracker */ "oNFq");





class SceneLoader {
    constructor(alignmentCubeService, pathFormatterService) {
        this.alignmentCubeService = alignmentCubeService;
        this.alignmentModel = alignmentCubeService.alignmentContainer;
        this.scene = alignmentCubeService.scene;
        this.labelCreator = new _LabelCreator__WEBPACK_IMPORTED_MODULE_1__["LabelCreator"](alignmentCubeService, pathFormatterService);
        this.dataCubeCreator = new _DataCubeCreator__WEBPACK_IMPORTED_MODULE_3__["DataCubeCreator"](alignmentCubeService);
        this.resTracker = new _ResourceTracker__WEBPACK_IMPORTED_MODULE_4__["ResourceTracker"]();
    }
    /**
     * 2D View with x: ApiPath and y: datasets
     */
    load2DSceneRelation() {
        const width = this.alignmentModel.apiLabels.length;
        const height = 1;
        const depth = this.alignmentModel.alignments.length;
        this.alignmentCubeService.outlineBox = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createOutlineCube(width, height, depth);
        this.resTracker.track(this.alignmentCubeService.outlineBox);
        this.scene.add(this.alignmentCubeService.outlineBox);
        const xStart = -width / 2;
        const yStart = -height / 2;
        const zStart = depth / 2;
        this.labelCreator.addLabelsX(xStart, yStart, zStart, 0.5, 0, 2.5, Math.PI / 2);
        this.labelCreator.addLabelsZ(xStart, yStart, zStart, -2.5, 0, -0.5, 0);
        this.dataCubeCreator.addDataCubes();
        this.alignmentCubeService.orbitControls.enableRotate = false;
        this.alignmentCubeService.orbitControls.enablePan = false;
        const newPosition = this.alignmentCubeService.outlineBox.position.clone();
        const y = this.alignmentModel.relationPathLabels.length + 1;
        if (this.alignmentCubeService.currentCamera instanceof three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]) {
            this.alignmentCubeService.changeCamera();
        }
        this.alignmentCubeService.currentCamera.position.set(newPosition.x, y, newPosition.z);
    }
    /**
     * 2D View with x: ApiPath and y: RelationPath
     */
    load2DSceneAlignment() {
        const width = this.alignmentModel.apiLabels.length;
        const height = this.alignmentModel.relationPathLabels.length;
        const depth = 1;
        this.alignmentCubeService.outlineBox = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createOutlineCube(width, height, depth);
        this.resTracker.track(this.alignmentCubeService.outlineBox);
        this.scene.add(this.alignmentCubeService.outlineBox);
        const xStart = -width / 2;
        const yStart = -height / 2;
        const zStart = depth / 2;
        this.labelCreator.addLabelsX(xStart, yStart, zStart, 0.5, -2.5, 0, Math.PI / 2);
        this.labelCreator.addLabelsY(xStart, yStart, zStart, -2.5, 0.5, 0);
        this.dataCubeCreator.addDataCubes();
        this.alignmentCubeService.orbitControls.enableRotate = false;
        this.alignmentCubeService.orbitControls.enablePan = false;
        const newPosition = this.alignmentCubeService.outlineBox.position.clone();
        const z = this.alignmentModel.alignments.length + 1;
        if (this.alignmentCubeService.currentCamera instanceof three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]) {
            this.alignmentCubeService.changeCamera();
        }
        this.alignmentCubeService.currentCamera.position.set(newPosition.x, newPosition.y, z);
    }
    /**
     * 2D View with x: Dataset and y: RelationPath
     */
    load2DSceneApi() {
        const width = 1;
        const height = this.alignmentModel.relationPathLabels.length;
        const depth = this.alignmentModel.alignments.length;
        this.alignmentCubeService.outlineBox = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createOutlineCube(width, height, depth);
        this.resTracker.track(this.alignmentCubeService.outlineBox);
        this.scene.add(this.alignmentCubeService.outlineBox);
        const xStart = -width / 2;
        const yStart = -height / 2;
        const zStart = depth / 2;
        this.labelCreator.addLabelsY(xStart, yStart, zStart, 0, 0.5, 2.5);
        this.labelCreator.addLabelsZ(-xStart, yStart, zStart, 0, -2.5, -0.5, Math.PI / 2);
        this.dataCubeCreator.addDataCubes();
        this.alignmentCubeService.orbitControls.enableRotate = false;
        this.alignmentCubeService.orbitControls.enablePan = false;
        const newPosition = this.alignmentCubeService.outlineBox.position.clone();
        const x = this.alignmentModel.apiLabels.length + 1;
        if (this.alignmentCubeService.currentCamera instanceof three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]) {
            this.alignmentCubeService.changeCamera();
        }
        this.alignmentCubeService.currentCamera.position.set(x, newPosition.y, newPosition.z);
    }
    load3DScene() {
        const width = this.alignmentModel.apiLabels.length;
        const height = this.alignmentModel.relationPathLabels.length;
        const depth = this.alignmentModel.alignments.length;
        this.alignmentCubeService.outlineBox = _ThreeJsUtil__WEBPACK_IMPORTED_MODULE_2__["ThreeJsUtil"].createOutlineCube(width, height, depth);
        this.resTracker.track(this.alignmentCubeService.outlineBox);
        this.scene.add(this.alignmentCubeService.outlineBox);
        const xStart = -width / 2;
        const yStart = -height / 2;
        const zStart = depth / 2;
        this.alignmentCubeService.orbitControls.enableRotate = true;
        this.alignmentCubeService.orbitControls.enablePan = true;
        this.alignmentCubeService.orbitControls.target.copy(this.alignmentCubeService.outlineBox.position.clone());
        // Labels
        this.labelCreator.addLabelsX(xStart, yStart, zStart, 0.5, -2.5, 0, Math.PI / 2);
        this.labelCreator.addLabelsY(xStart, yStart, zStart, -2.5, 0.5, 0);
        this.labelCreator.addLabelsZ(-xStart, yStart, zStart, 2.5, 0, -0.5);
        // DataCubes
        this.dataCubeCreator.addDataCubes();
        this.alignmentCubeService.orbitControls.enableRotate = true;
        this.alignmentCubeService.orbitControls.enablePan = true;
        const newPosition = this.alignmentCubeService.outlineBox.position.clone();
        const a = this.alignmentModel.apiLabels.length;
        const b = this.alignmentModel.relationPathLabels.length;
        const z = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) + 1;
        this.alignmentCubeService.currentCamera.position.set(newPosition.x + 1, newPosition.y + 1, z);
    }
    /**
     * Removes all objects of the scene.
     */
    clearScene() {
        this.labelCreator.disposeLabels();
        this.dataCubeCreator.disposeCubes();
        this.resTracker.dispose();
    }
}


/***/ }),

/***/ "YTW6":
/*!*************************************************!*\
  !*** ./src/assets/data/testEntities/webDb.json ***!
  \*************************************************/
/*! exports provided: name, format, label, parameters, url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Semantic Scholar\",\"format\":\"json\",\"label\":\"s2\",\"parameters\":[{\"filter\":[\"http://www.wikidata.org/prop/direct/P356\"],\"name\":\"q\",\"type\":\"https://dblp.org/rdf/schema-2020-07-01#Publication\",\"status\":\"required\"}],\"url\":\"https://api.semanticscholar.org/v1/paper/{q}\"}");

/***/ }),

/***/ "YZTg":
/*!**********************************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-sidebar-right/ui-sidebar-right.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UiSidebarRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSidebarRightComponent", function() { return UiSidebarRightComponent; });
/* harmony import */ var _engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/alignment-cube.service */ "vcHc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "UhP/");











function UiSidebarRightComponent_div_6_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", metric_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", metric_r2, " ");
} }
function UiSidebarRightComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Metric:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function UiSidebarRightComponent_div_6_Template_mat_select_selectionChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.changeMetric(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, UiSidebarRightComponent_div_6_mat_option_5_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cube Label Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-slide-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UiSidebarRightComponent_div_6_Template_mat_slide_toggle_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.changeRelationPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Full Relation Path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-slide-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UiSidebarRightComponent_div_6_Template_mat_slide_toggle_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.changeApiPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Full Api Path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Axis Label Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UiSidebarRightComponent_div_6_Template_mat_slide_toggle_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeApiPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Full Relation Path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UiSidebarRightComponent_div_6_Template_mat_slide_toggle_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.changeApiPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Full Api Path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Cube Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Other Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UiSidebarRightComponent_div_6_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.engineService.changeCamera(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Change Perspektive");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.metricChoiceControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.engineService.alignmentContainer.metricsNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.fullRelationPathControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.fullApiPathControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.fullApiPathControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.fullApiPathControl);
} }
class UiSidebarRightComponent {
    constructor(fb, engineService) {
        this.fb = fb;
        this.engineService = engineService;
        this.visible = false;
    }
    ngOnInit() {
        this.fullRelationPathControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.fullApiPathControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.fullApiPathAxisControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.fullRelationPathAxisControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.metricChoiceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    changeMetric() {
        this.engineService.setMetric(this.metricChoiceControl.value);
    }
    changeRelationPath() {
        this.engineService.setShowRelationFullPath(this.fullRelationPathControl.value);
    }
    changeApiPath() {
        this.engineService.setShowApiFullPath(this.fullApiPathControl.value);
    }
}
UiSidebarRightComponent.ɵfac = function UiSidebarRightComponent_Factory(t) { return new (t || UiSidebarRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__["AlignmentCubeService"])); };
UiSidebarRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UiSidebarRightComponent, selectors: [["app-ui-sidebar-right"]], decls: 7, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "card-title"], [1, "btn-close", 3, "click"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], ["appearance", "fill"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "m-1"], ["color", "primary", 3, "formControl", "change"], ["disabled", "", "color", "primary", 3, "formControl", "change"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function UiSidebarRightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UiSidebarRightComponent_Template_button_click_5_listener() { return ctx.visible = !ctx.visible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UiSidebarRightComponent_div_6_Template, 31, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], encapsulation: 2 });


/***/ }),

/***/ "Yqmq":
/*!**************************************************************!*\
  !*** ./src/app/pages/setting-page/setting-page.component.ts ***!
  \**************************************************************/
/*! exports provided: SettingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageComponent", function() { return SettingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _components_webservices_webservices_overview_webservices_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_components/webservices/webservices-overview/webservices-overview.component */ "pjTy");
/* harmony import */ var _components_apis_api_overview_api_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_components/apis/api-overview/api-overview.component */ "ni54");
/* harmony import */ var _components_databases_db_overview_databases_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_components/databases/db-overview/databases-overview.component */ "ypJX");





class SettingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingPageComponent.ɵfac = function SettingPageComponent_Factory(t) { return new (t || SettingPageComponent)(); };
SettingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingPageComponent, selectors: [["app-setting-page"]], decls: 7, vars: 0, consts: [["mat-align-tabs", "center"], ["label", "Webservices"], ["label", "APIs"], ["label", "DBs"]], template: function SettingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-webservices-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-api-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-databases-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _components_webservices_webservices_overview_webservices_overview_component__WEBPACK_IMPORTED_MODULE_2__["WebservicesOverviewComponent"], _components_apis_api_overview_api_overview_component__WEBPACK_IMPORTED_MODULE_3__["ApiOverviewComponent"], _components_databases_db_overview_databases_overview_component__WEBPACK_IMPORTED_MODULE_4__["DatabasesOverviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Z2iF":
/*!***********************************************!*\
  !*** ./src/assets/templates/db_template.json ***!
  \***********************************************/
/*! exports provided: path, identifierMap, source, label, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"path\":\"C:\\\\Users\\\\{user}\\\\{pathToDB}\\\\tdb\",\"identifierMap\":\"configs\\\\identifierMaps\\\\scigraph.json\",\"source\":\"C:\\\\Users\\\\{user}\\\\{pathToDB}\\\\scigraph.nt\",\"label\":\"{db_label}\"}");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_alignment_cube_ui_ui_infobar_bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/alignment-cube/ui/ui-infobar-bottom */ "yzgQ");
/* harmony import */ var _components_alignment_cube_ui_ui_infobar_top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/alignment-cube/ui/ui-infobar-top */ "zAyI");
/* harmony import */ var _components_alignment_cube_ui_ui_sidebar_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/alignment-cube/ui/ui-sidebar-left */ "EL4v");
/* harmony import */ var _components_alignment_cube_ui_ui_sidebar_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/alignment-cube/ui/ui-sidebar-right */ "eLXK");
/* harmony import */ var _components_alignment_cube_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/alignment-cube/ui */ "473E");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/navbar */ "Qlnh");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/start-page/start-page.component */ "dwuU");
/* harmony import */ var _pages_data_cube_page_data_cube_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/data-cube-page/data-cube-page.component */ "NdcZ");
/* harmony import */ var _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/setting-page/setting-page.component */ "Yqmq");
/* harmony import */ var _components_alignment_cube__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/alignment-cube */ "+G8U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_alignment_cube_alignment_selector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_components/alignment-cube/alignment-selector */ "OqFy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _pages_schema_page_schema_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/schema-page/schema.component */ "UKXl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _pages_gsb_page_gsb_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/gsb-page/gsb-page.component */ "2maj");
/* harmony import */ var _components_gold_standard_builder_gold_standard_builder_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_components/gold-standard-builder/gold-standard-builder.component */ "5q67");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _components_webservices_webservices_overview_webservices_overview_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_components/webservices/webservices-overview/webservices-overview.component */ "pjTy");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _components_webservices_webservice_information_webservice_information_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_components/webservices/webservice-information/webservice-information.component */ "eEPH");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _components_databases_db_overview_databases_overview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_components/databases/db-overview/databases-overview.component */ "ypJX");
/* harmony import */ var _components_apis_api_overview_api_overview_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_components/apis/api-overview/api-overview.component */ "ni54");
/* harmony import */ var _components_apis_api_information_api_information_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_components/apis/api-information/api-information.component */ "Luw/");
/* harmony import */ var _components_databases_db_information_db_information_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_components/databases/db-information/db-information.component */ "Kun9");
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _components_webservices_webservice_create_form_webservice_create_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_components/webservices/webservice-create-form/webservice-create-form.component */ "qtLS");
/* harmony import */ var _components_gold_standard_builder_builder_mapping_table_mapping_table_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./_components/gold-standard-builder/builder/mapping-table/mapping-table.component */ "44TH");
/* harmony import */ var _components_gold_standard_builder_db_selecector_db_selecector_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./_components/gold-standard-builder/db-selecector/db-selecector.component */ "DlHR");
/* harmony import */ var _components_gold_standard_builder_builder_builder_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./_components/gold-standard-builder/builder/builder.component */ "KdjQ");
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./_pipes/highlight.pipe */ "q7FT");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_services/backend-connection.service */ "sJrL");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_services/gsb.service */ "S+OK");
/* harmony import */ var _components_json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./_components/json-viewer/json-viewer.component */ "GSch");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/test/test.component */ "lEda");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _components_gold_standard_builder_final_alignmnet_final_alignment_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./_components/gold-standard-builder/final-alignmnet/final-alignment.component */ "OO+a");
/* harmony import */ var _components_gold_standard_builder_mapping_suggestion_tool_mapping_suggestion_tool_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./_components/gold-standard-builder/mapping-suggestion-tool/mapping-suggestion-tool.component */ "i/le");
/* harmony import */ var _components_gold_standard_builder_mapping_suggestion_tool_mapping_suggestion_mapping_suggestion_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./_components/gold-standard-builder/mapping-suggestion-tool/mapping-suggestion/mapping-suggestion.component */ "T+2G");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _components_gold_standard_builder_mapping_suggestion_tool_mapping_view_mapping_view_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./_components/gold-standard-builder/mapping-suggestion-tool/mapping-view/mapping-view.component */ "QwFO");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/badge */ "8Qe2");
/* harmony import */ var _components_gold_standard_builder_mapping_suggestion_tool_mapping_editor_mapping_editor_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./_components/gold-standard-builder/mapping-suggestion-tool/mapping-editor/mapping-editor.component */ "MGmQ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _components_alignment_viewer_alignment_viewer_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./_components/alignment-viewer/alignment-viewer.component */ "oQNN");
/* harmony import */ var _pages_alignment_viewer_page_alignment_viewer_page_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/alignment-viewer-page/alignment-viewer-page.component */ "AZzU");
/* harmony import */ var _components_apis_api_create_form_api_create_form_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./_components/apis/api-create-form/api-create-form.component */ "fH7T");
/* harmony import */ var _components_databases_db_create_form_db_create_form_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./_components/databases/db-create-form/db-create-form.component */ "dk3I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/core */ "8Y7J");




































































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_67__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_67__["ɵɵdefineInjector"]({ providers: [
        _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_50__["BackendConnectionService"],
        _services_gsb_service__WEBPACK_IMPORTED_MODULE_51__["GsbService"],
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_18__["HIGHLIGHT_OPTIONS"],
            useValue: {
                fullLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js */ "highlight-js").then(__webpack_require__.t.bind(null, /*! highlight.js */ "FIf5", 7))
            }
        },
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__["MatSnackBar"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_18__["HighlightModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"],
            _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_42__["NgJsonEditorModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_44__["MatStepperModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_54__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_58__["MatProgressBarModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_60__["MatBadgeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_67__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_alignment_cube_ui__WEBPACK_IMPORTED_MODULE_6__["UiComponent"],
        _components_alignment_cube_ui_ui_infobar_bottom__WEBPACK_IMPORTED_MODULE_2__["UiInfobarBottomComponent"],
        _components_alignment_cube_ui_ui_infobar_top__WEBPACK_IMPORTED_MODULE_3__["UiInfobarTopComponent"],
        _components_alignment_cube_ui_ui_sidebar_left__WEBPACK_IMPORTED_MODULE_4__["UiSidebarLeftComponent"],
        _components_alignment_cube_ui_ui_sidebar_right__WEBPACK_IMPORTED_MODULE_5__["UiSidebarRightComponent"],
        _components_navbar__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_10__["StartPageComponent"],
        _pages_data_cube_page_data_cube_page_component__WEBPACK_IMPORTED_MODULE_11__["DataCubePageComponent"],
        _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_12__["SettingPageComponent"],
        _components_alignment_cube__WEBPACK_IMPORTED_MODULE_13__["AlignmentCubeComponent"],
        _components_alignment_cube_alignment_selector__WEBPACK_IMPORTED_MODULE_15__["AlignmentSelectorComponent"],
        _pages_schema_page_schema_component__WEBPACK_IMPORTED_MODULE_19__["SchemaComponent"],
        _pages_gsb_page_gsb_page_component__WEBPACK_IMPORTED_MODULE_27__["GsbPageComponent"],
        _components_gold_standard_builder_gold_standard_builder_component__WEBPACK_IMPORTED_MODULE_28__["GoldStandardBuilderComponent"],
        _components_webservices_webservices_overview_webservices_overview_component__WEBPACK_IMPORTED_MODULE_31__["WebservicesOverviewComponent"],
        _components_webservices_webservice_information_webservice_information_component__WEBPACK_IMPORTED_MODULE_33__["WebserviceInformationComponent"],
        _components_databases_db_overview_databases_overview_component__WEBPACK_IMPORTED_MODULE_38__["DatabasesOverviewComponent"],
        _components_apis_api_overview_api_overview_component__WEBPACK_IMPORTED_MODULE_39__["ApiOverviewComponent"],
        _components_apis_api_information_api_information_component__WEBPACK_IMPORTED_MODULE_40__["ApiInformationComponent"],
        _components_databases_db_information_db_information_component__WEBPACK_IMPORTED_MODULE_41__["DbInformationComponent"],
        _components_webservices_webservice_create_form_webservice_create_form_component__WEBPACK_IMPORTED_MODULE_45__["WebserviceCreateFormComponent"],
        _components_gold_standard_builder_builder_mapping_table_mapping_table_component__WEBPACK_IMPORTED_MODULE_46__["MappingTableComponent"],
        _components_gold_standard_builder_db_selecector_db_selecector_component__WEBPACK_IMPORTED_MODULE_47__["DbSelecectorComponent"],
        _components_gold_standard_builder_builder_builder_component__WEBPACK_IMPORTED_MODULE_48__["BuilderComponent"],
        _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_49__["HighlightPipe"],
        _components_json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_52__["JsonViewerComponent"],
        _pages_test_test_component__WEBPACK_IMPORTED_MODULE_53__["TestComponent"],
        _components_gold_standard_builder_final_alignmnet_final_alignment_component__WEBPACK_IMPORTED_MODULE_55__["FinalAlignmentComponent"],
        _components_gold_standard_builder_mapping_suggestion_tool_mapping_suggestion_tool_component__WEBPACK_IMPORTED_MODULE_56__["MappingSuggestionToolComponent"],
        _components_gold_standard_builder_mapping_suggestion_tool_mapping_suggestion_mapping_suggestion_component__WEBPACK_IMPORTED_MODULE_57__["MappingSuggestionComponent"],
        _components_gold_standard_builder_mapping_suggestion_tool_mapping_view_mapping_view_component__WEBPACK_IMPORTED_MODULE_59__["MappingViewComponent"],
        _components_gold_standard_builder_mapping_suggestion_tool_mapping_editor_mapping_editor_component__WEBPACK_IMPORTED_MODULE_61__["MappingEditorComponent"],
        _components_alignment_viewer_alignment_viewer_component__WEBPACK_IMPORTED_MODULE_63__["AlignmentViewerComponent"],
        _pages_alignment_viewer_page_alignment_viewer_page_component__WEBPACK_IMPORTED_MODULE_64__["AlignmentViewerPageComponent"],
        _components_apis_api_create_form_api_create_form_component__WEBPACK_IMPORTED_MODULE_65__["ApiCreateFormComponent"],
        _components_databases_db_create_form_db_create_form_component__WEBPACK_IMPORTED_MODULE_66__["DbCreateFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_18__["HighlightModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"],
        _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_42__["NgJsonEditorModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_44__["MatStepperModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_54__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_58__["MatProgressBarModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_60__["MatBadgeModule"]] }); })();


/***/ }),

/***/ "ZscJ":
/*!******************************************************************!*\
  !*** ./src/app/_interfaces/settings/IWebserviceConfiguration.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "dk3I":
/*!**********************************************************************************!*\
  !*** ./src/app/_components/databases/db-create-form/db-create-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DbCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbCreateFormComponent", function() { return DbCreateFormComponent; });
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _assets_templates_db_template_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/templates/db_template.json */ "Z2iF");
var _assets_templates_db_template_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/templates/db_template.json */ "Z2iF", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");














class DbCreateFormComponent {
    constructor(connection, _snackBar) {
        this.connection = connection;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        // Init jsonEditor for configuration file
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'code';
        this.editorOptionsConfig.modes = ['code'];
        this.dbTemplate = _assets_templates_db_template_json__WEBPACK_IMPORTED_MODULE_3__;
        this.dbLabel = '';
        this.dbTemplate.label = this.dbLabel;
    }
    onDBNameChange() {
        this.dbTemplate = this.configEditor.get();
        this.dbTemplate.label = this.dbLabel;
        this.configEditor.data = this.dbTemplate;
    }
    save() {
        const config = this.configEditor.get();
        this.connection.addNewDatabase(config).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to add new service');
        });
    }
    onJSONChange() {
        this.dbTemplate = this.configEditor.get();
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', { duration: 2000 });
    }
}
DbCreateFormComponent.ɵfac = function DbCreateFormComponent_Factory(t) { return new (t || DbCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
DbCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DbCreateFormComponent, selectors: [["app-db-create-form"]], viewQuery: function DbCreateFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.configEditor = _t.first);
    } }, decls: 15, vars: 5, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [1, "group-container"], ["label", "Configuration File"], [3, "options", "data"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled", "click"]], template: function DbCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Create a new database configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "database label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DbCreateFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.dbLabel = $event; })("ngModelChange", function DbCreateFormComponent_Template_input_ngModelChange_6_listener() { return ctx.onDBNameChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "json-editor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DbCreateFormComponent_Template_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.dbLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.editorOptionsConfig)("data", ctx.dbTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.dbLabel);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYi1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "dwuU":
/*!**********************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.ts ***!
  \**********************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class StartPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartPageComponent.ɵfac = function StartPageComponent_Factory(t) { return new (t || StartPageComponent)(); };
StartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartPageComponent, selectors: [["app-start-page"]], decls: 2, vars: 0, template: function StartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to ETARA your benchmark system for alignments.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "eEPH":
/*!****************************************************************************************************!*\
  !*** ./src/app/_components/webservices/webservice-information/webservice-information.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WebserviceInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebserviceInformationComponent", function() { return WebserviceInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_interfaces */ "rGDM");
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ace-builds */ "bU/s");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "UhP/");




















const _c0 = ["editor"];
function WebserviceInformationComponent_ng_container_6_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r4.label, " ");
} }
function WebserviceInformationComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "webservice-path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.webserviceConfiguration.configuration.webservice = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "errorType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_mat_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.webserviceConfiguration.configuration.errorType = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_mat_select_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "jsonWithStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_mat_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.webserviceConfiguration.configuration.type = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_mat_select_ngModelChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "precise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "fuzzy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "latency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.webserviceConfiguration.configuration.latency = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "maxRequestsPerMinute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.webserviceConfiguration.configuration.maxRequestsPerMinute = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "maxRequests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.webserviceConfiguration.configuration.maxRequests = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "returnTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.webserviceConfiguration.configuration.returnTemplate = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_input_ngModelChange_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_mat_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.webserviceConfiguration.configuration.db = $event; })("ngModelChange", function WebserviceInformationComponent_ng_container_6_Template_mat_select_ngModelChange_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, WebserviceInformationComponent_ng_container_6_mat_option_42_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.webservice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.errorType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.latency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.maxRequestsPerMinute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.maxRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.returnTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.webserviceConfiguration.configuration.db);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.databases);
} }
function WebserviceInformationComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "json-editor", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.editorOptionsConfig)("data", ctx_r1.webserviceConfiguration.configuration);
} }
class WebserviceInformationComponent {
    constructor(connection, _snackBar, data) {
        this.connection = connection;
        this._snackBar = _snackBar;
        this.data = data;
        this.viewAsString = false;
        this.connection.getDatabases().then((res) => {
            this.databases = res.databases;
        });
    }
    ngOnInit() {
        this.webserviceLabel = this.data;
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'code';
        this.editorOptionsConfig.modes = ['code'];
        this.editorOptionsReturnTemplate = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorOptions"]();
        this.editorOptionsReturnTemplate.mode = 'text';
        this.editorOptionsReturnTemplate.modes = ['text'];
        this.connection.getWebserviceConfiguration(this.data).then((res) => {
            this.webserviceConfiguration = res;
            ace_builds__WEBPACK_IMPORTED_MODULE_5__["config"].set('fontSize', '14px');
            ace_builds__WEBPACK_IMPORTED_MODULE_5__["config"].set('basePath', 'https://unpkg.com/ace-builds@1.4.13/src-noconflict');
            this.aceEditor = ace_builds__WEBPACK_IMPORTED_MODULE_5__["edit"](this.editor.nativeElement);
            // aceEditor.setTheme('ace/theme/twilight');
            this.aceEditor.session.setMode('ace/mode/ftl');
            this.aceEditor.session.setValue(this.webserviceConfiguration.returnTemplate);
        });
    }
    onValueChange() {
        this.configEditor.data = this.webserviceConfiguration.configuration;
        this.webserviceConfiguration.configuration = this.configEditor.get();
    }
    onJSONChange() {
        this.webserviceConfiguration.configuration = this.configEditor.get();
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', { duration: 2000 });
    }
    save() {
        const config = this.configEditor.get();
        const returnTemplate = this.aceEditor.session.getValue();
        this.connection.updateWebservice(this.webserviceLabel, config, returnTemplate).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to save changes');
        });
    }
    delete() {
        this.connection.deleteWebservice(this.webserviceLabel).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to delete');
        });
    }
}
WebserviceInformationComponent.ɵfac = function WebserviceInformationComponent_Factory(t) { return new (t || WebserviceInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_2__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
WebserviceInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebserviceInformationComponent, selectors: [["app-webservice-information"]], viewQuery: function WebserviceInformationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.configEditor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    } }, decls: 19, vars: 4, consts: [[1, "group-container", 3, "selectedIndexChange"], ["label", "Configuration Form"], [4, "ngIf"], ["label", "Configuration File"], ["label", "Return Template"], [2, "width", "70vw", "height", "70vh"], ["editor", ""], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", 3, "mat-dialog-close", "click"], [1, "form-container"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "jsonWithStatus"], ["value", "precise"], ["value", "fuzzy"], ["matInput", "", "disabled", "", 3, "ngModel", "ngModelChange"], ["value", "None"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "options", "data"]], template: function WebserviceInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Webservice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function WebserviceInformationComponent_Template_mat_tab_group_selectedIndexChange_4_listener() { return ctx.onJSONChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WebserviceInformationComponent_ng_container_6_Template, 43, 9, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WebserviceInformationComponent_ng_container_8_Template, 2, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebserviceInformationComponent_Template_button_click_15_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebserviceInformationComponent_Template_button_click_17_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webserviceConfiguration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.webserviceConfiguration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", null);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_4__["JsonEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWJzZXJ2aWNlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "eLXK":
/*!*************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-sidebar-right/index.ts ***!
  \*************************************************************************/
/*! exports provided: UiSidebarRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-sidebar-right.component */ "YZTg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiSidebarRightComponent", function() { return _ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_0__["UiSidebarRightComponent"]; });




/***/ }),

/***/ "fH7T":
/*!*******************************************************************************!*\
  !*** ./src/app/_components/apis/api-create-form/api-create-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ApiCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCreateFormComponent", function() { return ApiCreateFormComponent; });
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _assets_templates_api_template_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/templates/api_template.json */ "gDGz");
var _assets_templates_api_template_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/templates/api_template.json */ "gDGz", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");














class ApiCreateFormComponent {
    constructor(connection, _snackBar) {
        this.connection = connection;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        // Init jsonEdeitor for configuration file
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'code';
        this.editorOptionsConfig.modes = ['code'];
        this.editorOptionsReturnTemplate = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorOptions"]();
        this.editorOptionsReturnTemplate.mode = 'text';
        this.editorOptionsReturnTemplate.modes = ['text'];
        this.apiTemplate = _assets_templates_api_template_json__WEBPACK_IMPORTED_MODULE_3__;
        this.apiLabel = '';
        this.configEditor.data = this.apiTemplate;
    }
    onApiNameChange() {
        this.apiTemplate = this.configEditor.get();
        this.apiTemplate.label = this.apiLabel;
        this.configEditor.data = this.apiTemplate;
        this.apiConfiguration = this.configEditor.get();
    }
    onJSONChange() {
        this.apiTemplate = this.configEditor.get();
    }
    save() {
        const config = this.configEditor.get();
        this.connection.addNewApi(config).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to add new service');
        });
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', { duration: 2000 });
    }
}
ApiCreateFormComponent.ɵfac = function ApiCreateFormComponent_Factory(t) { return new (t || ApiCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
ApiCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ApiCreateFormComponent, selectors: [["app-api-create-form"]], viewQuery: function ApiCreateFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.configEditor = _t.first);
    } }, decls: 15, vars: 6, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [1, "group-container", 3, "selectedIndexChange"], ["label", "Configuration File"], [3, "options", "data"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled", "click"]], template: function ApiCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Create a new custom api configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "api label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ApiCreateFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.apiLabel = $event; })("ngModelChange", function ApiCreateFormComponent_Template_input_ngModelChange_6_listener() { return ctx.onApiNameChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function ApiCreateFormComponent_Template_mat_tab_group_selectedIndexChange_7_listener() { return ctx.onJSONChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "json-editor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ApiCreateFormComponent_Template_button_click_13_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.apiLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.editorOptionsConfig)("data", ctx.apiTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", ctx.apiConfiguration)("disabled", !ctx.apiConfiguration);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_0__["JsonEditorComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogClose"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n}\n\n.group-container[_ngcontent-%COMP%] {\n  min-width: 50vw;\n  min-height: 50vh;\n  max-height: 95vh;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  min-width: 50vw;\n  min-height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBpLWNyZWF0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJhcGktY3JlYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmdyb3VwLWNvbnRhaW5lcntcbiAgbWluLXdpZHRoOiA1MHZ3O1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBtYXgtaGVpZ2h0OiA5NXZoO1xufVxuXG4uZm9ybS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWluLXdpZHRoOiA1MHZ3O1xuICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "ftpp":
/*!*********************************************************!*\
  !*** ./src/app/_interfaces/AlignmentCube/IAlignment.ts ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "gDGz":
/*!************************************************!*\
  !*** ./src/assets/templates/api_template.json ***!
  \************************************************/
/*! exports provided: name, format, label, parameters, url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"{api_long_name}\",\"format\":\"json\",\"label\":\"{api_short_name}\",\"parameters\":[{\"filter\":[\"http://www.wikidata.org/prop/direct/P356\"],\"name\":\"q\",\"type\":\"https://dblp.org/rdf/schema-2020-07-01#Publication\",\"status\":\"required\"}],\"url\":\"http://localhost:8080/etara/webservices/dblp/work?doi={q}\"}");

/***/ }),

/***/ "i/le":
/*!****************************************************************************************************************!*\
  !*** ./src/app/_components/gold-standard-builder/mapping-suggestion-tool/mapping-suggestion-tool.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MappingSuggestionToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingSuggestionToolComponent", function() { return MappingSuggestionToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/gsb.service */ "S+OK");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _mapping_suggestion_mapping_suggestion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapping-suggestion/mapping-suggestion.component */ "T+2G");












const _c0 = ["stepper"];
function MappingSuggestionToolComponent_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingSuggestionToolComponent_ng_container_2_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.finishedEvent.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Finish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MappingSuggestionToolComponent_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MappingSuggestionToolComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MappingSuggestionToolComponent_ng_container_2_ng_container_6_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingSuggestionToolComponent_ng_container_2_ng_container_7_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-mapping-suggestion", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingSuggestionToolComponent_ng_container_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r3 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteSuggestion(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suggestionMapping_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (_r0.selectedIndex + 1) / (ctx_r1.gsbService.suggestionContainer.suggestions.length + 1) * 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.selectedIndex == _r0.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.selectedIndex != _r0.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestionMapping", suggestionMapping_r2);
} }
class MappingSuggestionToolComponent {
    constructor(gsbService, cdr, _dialog) {
        this.gsbService = gsbService;
        this.cdr = cdr;
        this._dialog = _dialog;
        this.finishedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    log() {
        console.log(this.gsbService.suggestionContainer);
    }
    deleteSuggestion(index) {
        this.gsbService.suggestionContainer.suggestions.splice(index, 1);
    }
}
MappingSuggestionToolComponent.ɵfac = function MappingSuggestionToolComponent_Factory(t) { return new (t || MappingSuggestionToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_1__["GsbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MappingSuggestionToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MappingSuggestionToolComponent, selectors: [["app-mapping-suggestion-tool"]], viewQuery: function MappingSuggestionToolComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, outputs: { finishedEvent: "finishedEvent" }, decls: 3, vars: 1, consts: [["stepper", ""], [4, "ngFor", "ngForOf"], [1, "header"], ["mat-raised-button", "", "matStepperPrevious", ""], [3, "value"], [4, "ngIf"], [3, "suggestionMapping"], [1, "footer"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "matStepperNext", "", "color", "primary"]], template: function MappingSuggestionToolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingSuggestionToolComponent_ng_container_2_Template, 12, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gsbService.suggestionContainer.suggestions);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatHorizontalStepper"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStep"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperPrevious"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _mapping_suggestion_mapping_suggestion_component__WEBPACK_IMPORTED_MODULE_7__["MappingSuggestionComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperNext"]], styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .mat-horizontal-stepper-header-container {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFwcGluZy1zdWdnZXN0aW9uLXRvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQTZELGFBQUE7QUFEN0QiLCJmaWxlIjoibWFwcGluZy1zdWdnZXN0aW9uLXRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICp7XG5cbiAgfVxufVxuLmZvb3RlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHsgICBkaXNwbGF5OiBub25lOyB9XG4iXX0= */"] });


/***/ }),

/***/ "i9bZ":
/*!*************************************************************!*\
  !*** ./src/assets/data/testEntities/exampleSuggestion.json ***!
  \*************************************************************/
/*! exports provided: suggestions, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"suggestions\":[{\"general\":{\"counter\":1,\"type\":0,\"webEntries\":[\"year\"],\"selected\":true,\"localEntries\":[\"http://example/com/crossref/issuedDatePartsYear\"]},\"suggestions\":[{\"template\":{\"type\":0,\"webEntries\":[\"year\"],\"localEntries\":[\"http://example/com/crossref/issuedDatePartsYear\"]},\"mappings\":[{\"type\":0,\"webEntries\":[{\"value\":\"2018\",\"key\":\"year\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/issuedDatePartsYear\",\"value\":\"2018\"}]}],\"counter\":1,\"selected\":false}]},{\"general\":{\"counter\":1,\"type\":0,\"webEntries\":[\"year\"],\"selected\":true,\"localEntries\":[\"http://example/com/crossref/createdDatePartsYear\"]},\"suggestions\":[{\"template\":{\"type\":0,\"webEntries\":[\"year\"],\"localEntries\":[\"http://example/com/crossref/createdDatePartsYear\"]},\"mappings\":[{\"type\":0,\"webEntries\":[{\"value\":\"2018\",\"key\":\"year\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/createdDatePartsYear\",\"value\":\"2018\"}]}],\"counter\":1,\"selected\":false}]},{\"general\":{\"counter\":1,\"type\":0,\"webEntries\":[\"year\"],\"selected\":true,\"localEntries\":[\"http://example/com/crossref/publishedPrintDatePartsYear\"]},\"suggestions\":[{\"template\":{\"type\":0,\"webEntries\":[\"year\"],\"localEntries\":[\"http://example/com/crossref/publishedPrintDatePartsYear\"]},\"mappings\":[{\"type\":0,\"webEntries\":[{\"value\":\"2018\",\"key\":\"year\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/publishedPrintDatePartsYear\",\"value\":\"2018\"}]}],\"counter\":1,\"selected\":false}]},{\"general\":{\"counter\":4,\"type\":0,\"webEntries\":[\"authors[*].name\"],\"selected\":true,\"localEntries\":[\"http://example/com/crossref/author, http://example/com/crossref/family\"]},\"suggestions\":[{\"template\":{\"type\":0,\"webEntries\":[\"authors[1].name\"],\"localEntries\":[\"http://example/com/crossref/author, http://example/com/crossref/family\"]},\"mappings\":[{\"type\":0,\"webEntries\":[{\"value\":\"E. Kodra\",\"key\":\"authors[1].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Kodra\"}]}],\"counter\":1,\"selected\":false},{\"template\":{\"type\":0,\"webEntries\":[\"authors[0].name\"],\"localEntries\":[\"http://example/com/crossref/author, http://example/com/crossref/family\"]},\"mappings\":[{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"T. Vandal\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Vandal\"}]},{\"type\":0,\"webEntries\":[{\"value\":\"A. Sharma\",\"key\":\"authors[0].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Sharma\"}]}],\"counter\":2,\"selected\":false},{\"template\":{\"type\":0,\"webEntries\":[\"authors[3].name\"],\"localEntries\":[\"http://example/com/crossref/author, http://example/com/crossref/family\"]},\"mappings\":[{\"type\":0,\"webEntries\":[{\"value\":\"J. Dittrich\",\"key\":\"authors[3].name\"}],\"localEntries\":[{\"path\":\"http://example/com/crossref/author, http://example/com/crossref/family\",\"value\":\"Dittrich\"}]}],\"counter\":1,\"selected\":false}]}]}");

/***/ }),

/***/ "jiic":
/*!******************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/PickHelper.ts ***!
  \******************************************************/
/*! exports provided: PickHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickHelper", function() { return PickHelper; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

class PickHelper {
    constructor(layer = 0) {
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
        this.raycaster.layers.set(layer);
        this.raycaster.layers.enable(layer);
    }
    pick(normalizedPosition, scene, camera) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
            // this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject.material.color.setHex(this.pickedObjectSavedColor);
            this.pickedObject.children.forEach((object) => object.visible = false);
            this.pickedObject = undefined;
        }
        // cast a ray through the frustum
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        // console.log(intersectedObjects);
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.pickedObject = intersectedObjects[0].object;
            this.pickedObject.children.forEach((object) => object.visible = true);
            // save its color
            // this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
            this.pickedObjectSavedColor = this.pickedObject.material.color.getHex();
            // set its emissive color to flashing red/yellow
            // this.pickedObject.material.emissive.setHex(0xFF0000);
            this.pickedObject.material.color.setHex(0xFF0000);
        }
    }
}


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"etara-frontend\",\"version\":\"0.0.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"serve\":\"ng serve\",\"serve:open\":\"ng serve -o\",\"start\":\"nodemon server.js\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build:both\":\"npm run build && npm run build:prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"^11.2.14\",\"@angular/cdk\":\"^11.2.13\",\"@angular/common\":\"^11.2.14\",\"@angular/compiler\":\"^11.2.14\",\"@angular/core\":\"^11.2.14\",\"@angular/forms\":\"^11.2.14\",\"@angular/material\":\"^11.2.13\",\"@angular/platform-browser\":\"^11.2.14\",\"@angular/platform-browser-dynamic\":\"^11.2.14\",\"@angular/router\":\"^11.2.14\",\"@maaxgr/ang-jsoneditor\":\"^11.0.0\",\"ace-builds\":\"^1.4.13\",\"ajv\":\"^6.12.6\",\"bootstrap\":\"^5.0.1\",\"bootstrap-icons\":\"^1.5.0\",\"leader-line\":\"^1.0.7\",\"ts-md5\":\"^1.2.9\",\"d3\":\"^6.7.0\",\"d3-scale-chromatic\":\"^3.0.0\",\"express\":\"^4.17.1\",\"jsoneditor\":\"^9.5.7\",\"lodash\":\"^4.17.21\",\"ngx-highlightjs\":\"^4.1.4\",\"nodemon\":\"^2.0.7\",\"rxjs\":\"~6.6.6\",\"three\":\"^0.126.1\",\"tslib\":\"^2.1.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.1102.14\",\"@angular/cli\":\"^11.2.14\",\"@angular/compiler-cli\":\"^11.2.14\",\"@angular/language-service\":\"^11.2.14\",\"@types/d3\":\"^6.7.0\",\"@types/jasmine\":\"^3.6.11\",\"@types/jasminewd2\":\"^2.0.9\",\"@types/node\":\"^14.17.3\",\"@types/three\":\"^0.126.0\",\"@types/webgl2\":\"^0.0.5\",\"codelyzer\":\"^6.0.1\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"karma\":\"~6.2.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.6.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~9.1.1\",\"tslint\":\"~6.1.3\",\"typescript\":\"~4.0.7\"}}");

/***/ }),

/***/ "lEda":
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _services_gsb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_services/gsb.service */ "S+OK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_gold_standard_builder_mapping_suggestion_tool_mapping_suggestion_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_components/gold-standard-builder/mapping-suggestion-tool/mapping-suggestion-tool.component */ "i/le");




class TestComponent {
    constructor(gsbService) {
        this.gsbService = gsbService;
    }
    ngOnInit() {
        this.gsbService.debugMode();
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_gsb_service__WEBPACK_IMPORTED_MODULE_0__["GsbService"])); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 1, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mapping-suggestion-tool");
    } }, directives: [_components_gold_standard_builder_mapping_suggestion_tool_mapping_suggestion_tool_component__WEBPACK_IMPORTED_MODULE_2__["MappingSuggestionToolComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "llMo":
/*!*************************************************************!*\
  !*** ./src/app/_interfaces/settings/IWebserviceOverview.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "lv3r":
/*!*************************************************************!*\
  !*** ./src/assets/data/alignments/example/scigraph_v2.json ***!
  \*************************************************************/
/*! exports provided: system, alignments, name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"system\":\"DORIS (PCA)\",\"alignments\":[{\"metrics\":{\"confidence\":0.6606060606060606},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#title\"]}],\"api_path\":[\"message.title[*]\"]},{\"metrics\":{\"confidence\":0.85},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#pagination\"]}],\"api_path\":[\"message.page\"]},{\"metrics\":{\"confidence\":0.40408163265306124},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#authoredBy\",\"https://dblp.org/rdf/schema-2020-07-01#primaryAffiliation\"]}],\"api_path\":[\"message.author[*].affiliation[*]\"]},{\"metrics\":{\"confidence\":0.75},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedIn\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"http://www.wikidata.org/prop/direct/P356\"]}],\"api_path\":[\"message.DOI\"]},{\"metrics\":{\"confidence\":0.75},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournal\"]}],\"api_path\":[\"message.short-container-title[*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolume\"]}],\"api_path\":[\"message.volume\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedInJournalVolumeIssue\"]}],\"api_path\":[\"message.journal-issue.issue\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]},{\"metrics\":{\"confidence\":1},\"relation_path\":[{\"path\":[\"https://dblp.org/rdf/schema-2020-07-01#publishedAsPartOf\",\"https://dblp.org/rdf/schema-2020-07-01#yearOfPublication\"]}],\"api_path\":[\"message.published-print.date-parts[*][*]\"]}],\"name\":\"dblp_crossref_v2\"}");

/***/ }),

/***/ "mjl+":
/*!**********************************************!*\
  !*** ./src/app/_classes/alignment/Metric.ts ***!
  \**********************************************/
/*! exports provided: Metric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metric", function() { return Metric; });
class Metric {
    constructor(name, value) {
        this._name = name;
        this._value = value;
    }
    get name() {
        return this._name;
    }
    get value() {
        return this._value;
    }
}


/***/ }),

/***/ "ni54":
/*!*************************************************************************!*\
  !*** ./src/app/_components/apis/api-overview/api-overview.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApiOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiOverviewComponent", function() { return ApiOverviewComponent; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_interfaces */ "rGDM");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _api_information_api_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-information/api-information.component */ "Luw/");
/* harmony import */ var _api_create_form_api_create_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-create-form/api-create-form.component */ "fH7T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











function ApiOverviewComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ApiOverviewComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.apis.indexOf(element_r12));
} }
function ApiOverviewComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ApiOverviewComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r13.label, " ");
} }
function ApiOverviewComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ApiOverviewComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r14.name, " ");
} }
function ApiOverviewComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Format");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ApiOverviewComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r15.format, " ");
} }
function ApiOverviewComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ApiOverviewComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ApiOverviewComponent_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.openApiInformation(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ApiOverviewComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 15);
} }
function ApiOverviewComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 16);
} }
class ApiOverviewComponent {
    constructor(connection, _dialog) {
        this.connection = connection;
        this._dialog = _dialog;
        this.displayedColumns = ['index', 'label', 'name', 'format', 'actions'];
    }
    ngOnInit() {
        this.loadApis();
    }
    loadApis() {
        this.connection.getApis().then((res) => {
            this.apis = res.apis;
        });
    }
    openApiInformation(api) {
        console.log(api);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = api;
        // disable closing by clicking outside of dialog window
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.maxWidth = '90vw';
        const dialogRef = this._dialog.open(_api_information_api_information_component__WEBPACK_IMPORTED_MODULE_3__["ApiInformationComponent"], dialogConfig).afterClosed().toPromise().then(() => this.loadApis());
    }
    openCreateApi() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // disable closing by clicking outside of dialog window
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.maxWidth = '90vw';
        const dialogRef = this._dialog.open(_api_create_form_api_create_form_component__WEBPACK_IMPORTED_MODULE_4__["ApiCreateFormComponent"], dialogConfig);
        dialogRef.afterClosed().toPromise().then(() => this.loadApis());
    }
}
ApiOverviewComponent.ɵfac = function ApiOverviewComponent_Factory(t) { return new (t || ApiOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ApiOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ApiOverviewComponent, selectors: [["app-api-overview"]], decls: 21, vars: 3, consts: [[1, "main"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "label"], ["matColumnDef", "name"], ["matColumnDef", "format"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["aria-hidden", "false", "aria-label", "See details"], ["mat-header-row", ""], ["mat-row", ""]], template: function ApiOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ApiOverviewComponent_Template_button_click_1_listener() { return ctx.openCreateApi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add API");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ApiOverviewComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ApiOverviewComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ApiOverviewComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ApiOverviewComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ApiOverviewComponent_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ApiOverviewComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ApiOverviewComponent_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ApiOverviewComponent_td_15_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ApiOverviewComponent_th_17_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ApiOverviewComponent_td_18_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ApiOverviewComponent_tr_19_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ApiOverviewComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.apis);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "nxSl":
/*!***********************************************!*\
  !*** ./src/app/_interfaces/settings/IApis.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "oJYa":
/*!***************************************************!*\
  !*** ./src/app/_interfaces/settings/IDatabase.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "oNFq":
/*!***********************************************************!*\
  !*** ./src/app/_classes/threeJsHelper/ResourceTracker.ts ***!
  \***********************************************************/
/*! exports provided: ResourceTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTracker", function() { return ResourceTracker; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

// https://threejsfundamentals.org/threejs/lessons/threejs-cleanup.html
class ResourceTracker {
    constructor() {
        this.resources = new Set();
    }
    track(resource) {
        if (!resource) {
            return resource;
        }
        // handle children and when material is an array of materials or
        // uniform is array of textures
        if (Array.isArray(resource)) {
            resource.forEach(res => this.track(res));
            return resource;
        }
        if (resource.dispose || resource instanceof three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]) {
            this.resources.add(resource);
        }
        if (resource instanceof three__WEBPACK_IMPORTED_MODULE_0__["Mesh"]) {
            this.track(resource.geometry);
            this.track(resource.material);
            this.track(resource.children);
        }
        else if (resource instanceof three__WEBPACK_IMPORTED_MODULE_0__["Material"]) {
            // We have to check if there are any textures on the material
            for (const value of Object.values(resource)) {
                if (value instanceof three__WEBPACK_IMPORTED_MODULE_0__["Texture"]) {
                    this.track(value);
                }
            }
        }
        return resource;
    }
    untrack(resource) {
        this.resources.delete(resource);
    }
    dispose() {
        for (const resource of this.resources) {
            if (resource instanceof three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]) {
                if (resource.parent) {
                    resource.parent.remove(resource);
                }
            }
            if (resource.dispose) {
                resource.dispose();
            }
        }
        this.resources.clear();
    }
}


/***/ }),

/***/ "oQNN":
/*!****************************************************************************!*\
  !*** ./src/app/_components/alignment-viewer/alignment-viewer.component.ts ***!
  \****************************************************************************/
/*! exports provided: AlignmentViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentViewerComponent", function() { return AlignmentViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class AlignmentViewerComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlignmentViewerComponent.ɵfac = function AlignmentViewerComponent_Factory(t) { return new (t || AlignmentViewerComponent)(); };
AlignmentViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlignmentViewerComponent, selectors: [["app-alignment-viewer"]], decls: 2, vars: 0, template: function AlignmentViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alignment-viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGlnbm1lbnQtdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "pjTy":
/*!************************************************************************************************!*\
  !*** ./src/app/_components/webservices/webservices-overview/webservices-overview.component.ts ***!
  \************************************************************************************************/
/*! exports provided: WebservicesOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebservicesOverviewComponent", function() { return WebservicesOverviewComponent; });
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _webservice_information_webservice_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webservice-information/webservice-information.component */ "eEPH");
/* harmony import */ var _webservice_create_form_webservice_create_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webservice-create-form/webservice-create-form.component */ "qtLS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











function WebservicesOverviewComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.webservices.indexOf(element_r12));
} }
function WebservicesOverviewComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
} }
function WebservicesOverviewComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r14.path, " ");
} }
function WebservicesOverviewComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_15_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cloud_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_15_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cloud_queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WebservicesOverviewComponent_td_15_mat_icon_1_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WebservicesOverviewComponent_td_15_mat_icon_2_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.status == "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.status == "online");
} }
function WebservicesOverviewComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WebservicesOverviewComponent_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const element_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.openWebserviceInformation(element_r18.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WebservicesOverviewComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 19);
} }
function WebservicesOverviewComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 20);
} }
class WebservicesOverviewComponent {
    constructor(_connection, _dialog) {
        this._connection = _connection;
        this._dialog = _dialog;
        // displayedColumns: string[] = ['index', 'endpoint', 'path', 'status', 'actions'];
        this.displayedColumns = ['index', 'name', 'path', 'status', 'actions'];
    }
    ngOnInit() {
        this.reloadData();
    }
    openWebserviceInformation(name) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.data = name;
        // disable closing by clicking outside of dialog window
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.maxWidth = '90vw';
        const dialogRef = this._dialog.open(_webservice_information_webservice_information_component__WEBPACK_IMPORTED_MODULE_2__["WebserviceInformationComponent"], dialogConfig);
        dialogRef.afterClosed().toPromise().then(() => this.reloadData());
    }
    openCreateWebservice() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        // disable closing by clicking outside of dialog window
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.maxWidth = '90vw';
        const dialogRef = this._dialog.open(_webservice_create_form_webservice_create_form_component__WEBPACK_IMPORTED_MODULE_3__["WebserviceCreateFormComponent"], dialogConfig);
        dialogRef.afterClosed().toPromise().then(() => this.reloadData());
    }
    reloadData() {
        this._connection.getWebservices().subscribe((res) => {
            this.webservices = res.webservices;
        });
    }
}
WebservicesOverviewComponent.ɵfac = function WebservicesOverviewComponent_Factory(t) { return new (t || WebservicesOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
WebservicesOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WebservicesOverviewComponent, selectors: [["app-webservices-overview"]], decls: 21, vars: 3, consts: [[1, "main"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "path"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["color", "warn", "aria-label", "true", 4, "ngIf"], ["color", "primary", "aria-label", "true", 4, "ngIf"], ["color", "warn", "aria-label", "true"], ["color", "primary", "aria-label", "true"], ["aria-hidden", "false", "aria-label", "See details"], ["mat-header-row", ""], ["mat-row", ""]], template: function WebservicesOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WebservicesOverviewComponent_Template_button_click_1_listener() { return ctx.openCreateWebservice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add Webservice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WebservicesOverviewComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WebservicesOverviewComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, WebservicesOverviewComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WebservicesOverviewComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WebservicesOverviewComponent_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WebservicesOverviewComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WebservicesOverviewComponent_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WebservicesOverviewComponent_td_15_Template, 3, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WebservicesOverviewComponent_th_17_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WebservicesOverviewComponent_td_18_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, WebservicesOverviewComponent_tr_19_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, WebservicesOverviewComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.webservices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: ["td[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2Vic2VydmljZXMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoid2Vic2VydmljZXMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZD5tYXQtaWNvbntcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuIl19 */"] });


/***/ }),

/***/ "q7FT":
/*!******************************************!*\
  !*** ./src/app/_pipes/highlight.pipe.ts ***!
  \******************************************/
/*! exports provided: HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class HighlightPipe {
    transform(wholeText, searchQuery) {
        if (!searchQuery) {
            return wholeText;
        }
        const re = new RegExp(searchQuery, 'gi');
        return wholeText.replace(re, '<mark>$&</mark>');
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });


/***/ }),

/***/ "qtLS":
/*!****************************************************************************************************!*\
  !*** ./src/app/_components/webservices/webservice-create-form/webservice-create-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WebserviceCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebserviceCreateFormComponent", function() { return WebserviceCreateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @maaxgr/ang-jsoneditor */ "5oPT");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ace-builds */ "bU/s");
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _assets_templates_webservice_template_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/templates/webservice_template.json */ "Pxif");
var _assets_templates_webservice_template_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/templates/webservice_template.json */ "Pxif", 1);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");



















const _c0 = ["editor"];
function WebserviceCreateFormComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", entry_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", entry_r2.label, " ");
} }
class WebserviceCreateFormComponent {
    constructor(connection, _snackBar) {
        this.connection = connection;
        this._snackBar = _snackBar;
        this.returnTemplate = '';
        this.viewAsString = false;
        this.connection.getDatabases().then((res) => {
            this.databases = res.databases;
        });
    }
    ngOnInit() {
        // Init jsonEdeitor for configuration file
        this.editorOptionsConfig = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorOptions"]();
        this.editorOptionsConfig.mode = 'code';
        this.editorOptionsConfig.modes = ['code'];
        this.editorOptionsReturnTemplate = new _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorOptions"]();
        this.editorOptionsReturnTemplate.mode = 'text';
        this.editorOptionsReturnTemplate.modes = ['text'];
        this.webserviceTemplate = _assets_templates_webservice_template_json__WEBPACK_IMPORTED_MODULE_5__;
        this.webserviceLabel = '';
    }
    ngAfterViewInit() {
        // Init ace editor for return template
        ace_builds__WEBPACK_IMPORTED_MODULE_3__["config"].set('fontSize', '14px');
        ace_builds__WEBPACK_IMPORTED_MODULE_3__["config"].set('basePath', 'https://unpkg.com/ace-builds@1.4.13/src-noconflict');
        this.aceEditor = ace_builds__WEBPACK_IMPORTED_MODULE_3__["edit"](this.editor.nativeElement);
        // aceEditor.setTheme('ace/theme/twilight');
        this.aceEditor.session.setMode('ace/mode/ftl');
        this.aceEditor.session.setValue('{}');
        this.aceEditor.on('change', () => {
            this.onReturnTemplateChange();
        });
    }
    onReturnTemplateChange() {
        this.returnTemplate = this.aceEditor.session.getValue();
    }
    onWebserviceNameChange() {
        this.webserviceTemplate = this.configEditor.get();
        this.webserviceTemplate.webservice = '/' + this.webserviceLabel + '/{pathname}';
        this.webserviceTemplate.returnTemplate = '/' + this.webserviceLabel + '/' + this.webserviceLabel + '.json.ftl';
        this.configEditor.data = this.webserviceTemplate;
        this.webserviceConfiguration = this.configEditor.get();
    }
    onJSONChange() {
        this.webserviceTemplate = this.configEditor.get();
    }
    onValueChange() {
        this.configEditor.data = this.webserviceTemplate;
        this.webserviceConfiguration = this.configEditor.get();
    }
    save() {
        const config = this.configEditor.get();
        const returnTemplate = this.aceEditor.session.getValue();
        this.connection.addNewWebservice(this.webserviceLabel, config, returnTemplate).toPromise().then(() => {
            this.openSnackBar('Saved');
        }, (error) => {
            this.openSnackBar('Unable to add new service');
        });
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', { duration: 2000 });
    }
}
WebserviceCreateFormComponent.ɵfac = function WebserviceCreateFormComponent_Factory(t) { return new (t || WebserviceCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_1__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
WebserviceCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebserviceCreateFormComponent, selectors: [["app-webservice-create-form"]], viewQuery: function WebserviceCreateFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.configEditor = _t.first);
    } }, decls: 61, vars: 14, consts: [[1, "group-container", 3, "selectedIndexChange"], ["label", "Configuration Form"], [1, "form-container"], ["matInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "jsonWithStatus"], ["value", "precise"], ["value", "fuzzy"], ["matInput", "", "disabled", "", 3, "ngModel", "ngModelChange"], ["value", "None"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Configuration File"], [3, "options", "data"], ["label", "Return Template"], [2, "width", "70vw", "height", "70vh"], ["editor", ""], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled", "click"], [3, "value"]], template: function WebserviceCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create a new custom webservice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function WebserviceCreateFormComponent_Template_mat_tab_group_selectedIndexChange_3_listener() { return ctx.onJSONChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "webservice label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.webserviceLabel = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_9_listener() { return ctx.onWebserviceNameChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "webservice-path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_13_listener($event) { return ctx.webserviceTemplate.webservice = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_13_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "errorType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_mat_select_ngModelChange_17_listener($event) { return ctx.webserviceTemplate.errorType = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_mat_select_ngModelChange_17_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "jsonWithStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.webserviceTemplate.type = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_mat_select_ngModelChange_23_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "precise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "fuzzy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "latency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_31_listener($event) { return ctx.webserviceTemplate.latency = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_31_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "maxRequestsPerMinute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_35_listener($event) { return ctx.webserviceTemplate.maxRequestsPerMinute = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_35_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "maxRequests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_39_listener($event) { return ctx.webserviceTemplate.maxRequests = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_39_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "returnTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_43_listener($event) { return ctx.webserviceTemplate.returnTemplate = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_input_ngModelChange_43_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WebserviceCreateFormComponent_Template_mat_select_ngModelChange_47_listener($event) { return ctx.webserviceTemplate.db = $event; })("ngModelChange", function WebserviceCreateFormComponent_Template_mat_select_ngModelChange_47_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, WebserviceCreateFormComponent_mat_option_50_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "json-editor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebserviceCreateFormComponent_Template_button_click_59_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.webservice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.errorType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.latency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.maxRequestsPerMinute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.maxRequests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.returnTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.webserviceTemplate.db);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.databases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.editorOptionsConfig)("data", ctx.webserviceTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.webserviceConfiguration);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _maaxgr_ang_jsoneditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditorComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogClose"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n}\n\n.group-container[_ngcontent-%COMP%] {\n  min-width: 50vw;\n  min-height: 50vh;\n  max-height: 95vh;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  min-width: 50vw;\n  min-height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2Vic2VydmljZS1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoid2Vic2VydmljZS1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uZ3JvdXAtY29udGFpbmVye1xuICBtaW4td2lkdGg6IDUwdnc7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIG1heC1oZWlnaHQ6IDk1dmg7XG59XG5cbi5mb3JtLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4td2lkdGg6IDUwdnc7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "qxED":
/*!***************************************!*\
  !*** ./src/app/_classes/gsb/lines.ts ***!
  \***************************************/
/*! exports provided: LeaderLineMapping, LeaderLineAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderLineMapping", function() { return LeaderLineMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderLineAlignment", function() { return LeaderLineAlignment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "VHTt");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "vWX8");



class LeaderLineMapping {
    constructor(type, localElems = new Map(), webElems = new Map()) {
        this._localElems = localElems;
        this._webElems = webElems;
        this._lines = new Set();
        this._type = type;
    }
    static build(mapping) {
        const localElems = new Map();
        const webElems = new Map();
        for (const localEntry of mapping.localEntries) {
            const localElem = document.getElementById(localEntry.hash);
            localElems.set(localEntry.hash, localElem);
        }
        for (const webEntry of mapping.webEntries) {
            const webElem = document.getElementById(webEntry.hash);
            webElems.set(webEntry.hash, webElem);
        }
        const newMapping = new LeaderLineMapping(mapping.type, localElems, webElems);
        return newMapping;
    }
    /**
     * Method sets the renderer.
     * @param renderer - Renderer to use.
     */
    setRenderer(renderer) {
        this.renderer = renderer;
    }
    addLocalElem(id, elem) {
        this._localElems.set(id, elem);
    }
    addWebElem(id, elem) {
        this._webElems.set(id, elem);
    }
    drawLines() {
        this.deleteLines();
        for (const localElem of this._localElems.values()) {
            for (const webElem of this._webElems.values()) {
                const line = new LeaderLine(localElem, webElem);
                line.setOptions({
                    startSocket: 'right', endSocket: 'left', color: 'gray'
                });
                switch (this._type) {
                    case _models__WEBPACK_IMPORTED_MODULE_1__["MappingType"].LocalToWeb:
                        line.setOptions({
                            startPlug: 'behind', endPlug: 'arrow1'
                        });
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_1__["MappingType"].WebToLocal:
                        line.setOptions({
                            startPlug: 'arrow1', endPlug: 'behind'
                        });
                        break;
                    case _models__WEBPACK_IMPORTED_MODULE_1__["MappingType"].Bidirectional:
                        line.setOptions({
                            startPlug: 'arrow1', endPlug: 'arrow1'
                        });
                        break;
                }
                this._lines.add(line);
                localElem.classList.add('used');
                webElem.classList.add('used');
                line.position();
            }
        }
    }
    deleteLines() {
        for (const line of this._lines) {
            line.remove();
        }
        this._lines.clear();
    }
    updateLines() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].delay(10);
            for (const line of this._lines) {
                if (line.start.classList.contains('hide') || line.end.classList.contains('hide')) {
                    line.hide('none');
                }
                else {
                    line.show();
                }
                line.position();
            }
        });
    }
    /**
     * Method sets the color of the line object's line.
     * @param color - Color to set.
     * @private
     */
    setLineColor(color) {
        for (const line of this._lines) {
            line.setOptions({
                color
            });
        }
    }
    /**
     * Method sets the type of the mapping.
     * @private
     * @param type
     */
    setMappingType(type) {
        this._type = type;
        this.drawLines();
    }
    get localElems() {
        return this._localElems;
    }
    get webElems() {
        return this._webElems;
    }
    get type() {
        return this._type;
    }
    get lines() {
        return this._lines;
    }
}
class LeaderLineAlignment {
    constructor(render) {
        this._mappings = new Set();
        this.renderer = render;
    }
    get mappings() {
        return this._mappings;
    }
    static build(alignment, render) {
        const leaderLine = new LeaderLineAlignment(render);
        for (const mapping of alignment.mappings) {
            const localElems = new Map();
            const webElems = new Map();
            for (const localEntry of mapping.localEntries) {
                const localElem = document.getElementById(localEntry.hash);
                localElems.set(localEntry.hash, localElem);
            }
            for (const webEntry of mapping.webEntries) {
                const webElem = document.getElementById(webEntry.hash);
                webElems.set(webEntry.hash, webElem);
            }
            const newMapping = new LeaderLineMapping(mapping.type, localElems, webElems);
            leaderLine.addMapping(newMapping, false);
        }
        return leaderLine;
    }
    addMapping(mapping, draw = false) {
        this._mappings.add(mapping);
        mapping.setRenderer(this.renderer);
        if (draw) {
            mapping.drawLines();
        }
    }
    addGSBMapping(mapping) {
        const newMapping = LeaderLineMapping.build(mapping);
        this.addMapping(newMapping);
    }
    deleteMapping() {
    }
    drawLines() {
        for (const mapping of this._mappings) {
            mapping.drawLines();
        }
    }
    updateLines() {
        for (const mapping of this._mappings) {
            mapping.updateLines();
        }
    }
    hideLines() {
        for (const mapping of this._mappings) {
            for (const line of mapping.lines) {
                line.hide('none');
                line.position();
            }
        }
    }
    showLines() {
        this.updateLines();
    }
    deleteLines() {
        for (const mapping of this._mappings) {
            mapping.deleteLines();
        }
    }
    removeMapping(mapping) {
        this.mappings.delete(mapping);
        this.deleteLines();
        this.drawLines();
        _Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].delay(50);
        this.updateLines();
    }
}


/***/ }),

/***/ "qxpx":
/*!*****************************************************!*\
  !*** ./src/assets/data/testEntities/apiEntity.json ***!
  \*****************************************************/
/*! exports provided: dictionary, originalResponse, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dictionary\":[{\"path\":\"references[20].authors[0].authorId\",\"value\":\"2064762548\"},{\"path\":\"references[32].isInfluential\",\"value\":\"true\"},{\"path\":\"references[9].intent[0]\",\"value\":\"background\"},{\"path\":\"citations[9].authors[1].name\",\"value\":\"Jinshan Pan\"},{\"path\":\"year\",\"value\":\"2019\"},{\"path\":\"is_open_access\",\"value\":\"false\"},{\"path\":\"references[1].authors[1].name\",\"value\":\"T. Kanade\"},{\"path\":\"references[26].paperId\",\"value\":\"c397408e784004240e866d0f31cea7b9e44fdd0c\"},{\"path\":\"citations[7].authors[4].name\",\"value\":\"Guangcheng Wang\"},{\"path\":\"references[31].arxivId\",\"value\":\"1511.02228\"},{\"path\":\"citations[3].authors[5].authorId\",\"value\":\"46347050\"},{\"path\":\"references[28].doi\",\"value\":\"10.1109/TCSVT.2015.2400772\"},{\"path\":\"references[30].authors[2].name\",\"value\":\"Kaiming He\"},{\"path\":\"references[31].year\",\"value\":\"2015\"},{\"path\":\"references[26].authors[4].authorId\",\"value\":\"1713887\"},{\"path\":\"references[23].authors[2].authorId\",\"value\":\"144725609\"},{\"path\":\"citations[0].authors[3].authorId\",\"value\":\"\"},{\"path\":\"references[19].title\",\"value\":\"Fast Facial Image Super-Resolution via Local Linear Transformations for Resource-Limited Applications\"},{\"path\":\"citations[2].authors[3].authorId\",\"value\":\"1519062623\"},{\"path\":\"references[9].year\",\"value\":\"2005\"},{\"path\":\"references[23].year\",\"value\":\"2013\"},{\"path\":\"references[11].title\",\"value\":\"Face hallucination VIA sparse coding\"},{\"path\":\"references[12].doi\",\"value\":\"10.1093/comjnl/bxm075\"},{\"path\":\"references[3].title\",\"value\":\"Think Globally, Fit Locally: Unsupervised Learning of Low Dimensional Manifold\"},{\"path\":\"references[24].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[22].title\",\"value\":\"A Comprehensive Survey to Face Hallucination\"},{\"path\":\"references[21].url\",\"value\":\"https://www.semanticscholar.org/paper/170102b7809b43691b06618cdbbc90c8dbc2dd27\"},{\"path\":\"references[23].authors[0].name\",\"value\":\"Liang Chen\"},{\"path\":\"references[36].authors[3].name\",\"value\":\"Ming Li\"},{\"path\":\"references[25].authors[2].name\",\"value\":\"Zhongyuan Wang\"},{\"path\":\"citations[6].arxivId\",\"value\":\"2111.10634\"},{\"path\":\"references[21].authors[2].authorId\",\"value\":\"144855557\"},{\"path\":\"citations[0].authors[0].name\",\"value\":\"Surendra Nagar\"},{\"path\":\"authors[2].authorId\",\"value\":\"2117896344\"},{\"path\":\"references[36].arxivId\",\"value\":\"1704.08063\"},{\"path\":\"citations[1].title\",\"value\":\"Deep Learning-based Face Super-resolution: A Survey\"},{\"path\":\"citations[0].year\",\"value\":\"2021\"},{\"path\":\"references[15].arxivId\",\"value\":\"\"},{\"path\":\"citations[5].authors[2].name\",\"value\":\"Zhenbing Liu\"},{\"path\":\"references[21].paperId\",\"value\":\"170102b7809b43691b06618cdbbc90c8dbc2dd27\"},{\"path\":\"citations[3].authors[5].name\",\"value\":\"C. Busch\"},{\"path\":\"references[24].authors[0].authorId\",\"value\":\"2118187952\"},{\"path\":\"references[5].authors[0].name\",\"value\":\"Hong Chang\"},{\"path\":\"references[21].doi\",\"value\":\"10.1109/TCSVT.2013.2244798\"},{\"path\":\"references[36].year\",\"value\":\"2017\"},{\"path\":\"references[10].authors[2].name\",\"value\":\"S. Shan\"},{\"path\":\"citations[4].authors[3].authorId\",\"value\":\"47111778\"},{\"path\":\"citations[5].year\",\"value\":\"2020\"},{\"path\":\"references[37].doi\",\"value\":\"10.1109/CVPR.2017.19\"},{\"path\":\"references[15].year\",\"value\":\"2010\"},{\"path\":\"references[35].authors[4].name\",\"value\":\"Kyoung Mu Lee\"},{\"path\":\"topics[1].topicId\",\"value\":\"10302\"},{\"path\":\"citations[1].arxivId\",\"value\":\"2101.03749\"},{\"path\":\"references[37].authors[2].authorId\",\"value\":\"3108066\"},{\"path\":\"references[13].authors[2].name\",\"value\":\"C. Qi\"},{\"path\":\"references[24].authors[3].name\",\"value\":\"Zhen Han\"},{\"path\":\"references[27].authors[4].name\",\"value\":\"Zhen Han\"},{\"path\":\"references[33].paperId\",\"value\":\"ddfc978b3a149015c9e517fbfe1b8563df5e7356\"},{\"path\":\"references[22].authors[4].authorId\",\"value\":\"2149869567\"},{\"path\":\"references[23].intent\",\"value\":\"[]\"},{\"path\":\"references[37].intent\",\"value\":\"[]\"},{\"path\":\"references[27].authors[2].authorId\",\"value\":\"143869248\"},{\"path\":\"citations[3].authors[0].name\",\"value\":\"Vishal M. Chudasama\"},{\"path\":\"references[34].isInfluential\",\"value\":\"false\"},{\"path\":\"references[5].authors[2].authorId\",\"value\":\"2112719095\"},{\"path\":\"citations[4].doi\",\"value\":\"10.1016/j.patcog.2020.107539\"},{\"path\":\"references[26].authors[0].authorId\",\"value\":\"1708439\"},{\"path\":\"references[17].authors[1].name\",\"value\":\"John Wright\"},{\"path\":\"references[18].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"references[13].url\",\"value\":\"https://www.semanticscholar.org/paper/d035c8bef0e0619fd68ab2cc1c9e71dfd730aefe\"},{\"path\":\"references[28].url\",\"value\":\"https://www.semanticscholar.org/paper/91b1a59b9e0e7f4db0828bf36654b84ba53b0557\"},{\"path\":\"references[11].authors[2].authorId\",\"value\":\"50032052\"},{\"path\":\"citations[5].url\",\"value\":\"https://www.semanticscholar.org/paper/cd66f122b75fdd4ed743fa92c3783a2458a6b223\"},{\"path\":\"citations[4].authors[7].authorId\",\"value\":\"123275544\"},{\"path\":\"references[11].authors[0].name\",\"value\":\"Jianchao Yang\"},{\"path\":\"references[22].authors[1].name\",\"value\":\"D. Tao\"},{\"path\":\"references[14].authors[1].name\",\"value\":\"Hui He\"},{\"path\":\"references[28].authors[0].authorId\",\"value\":\"1783889\"},{\"path\":\"references[24].arxivId\",\"value\":\"\"},{\"path\":\"references[37].url\",\"value\":\"https://www.semanticscholar.org/paper/df0c54fe61f0ffb9f0e36a17c2038d9a1964cba3\"},{\"path\":\"references[4].paperId\",\"value\":\"6254833a3e48df65a535678959aa2b670f54d465\"},{\"path\":\"references[27].arxivId\",\"value\":\"\"},{\"path\":\"citations[8].intent[0]\",\"value\":\"background\"},{\"path\":\"references[14].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[27].isInfluential\",\"value\":\"false\"},{\"path\":\"references[25].authors[2].authorId\",\"value\":\"38655501\"},{\"path\":\"references[37].authors[6].name\",\"value\":\"J. Totz\"},{\"path\":\"references[6].doi\",\"value\":\"10.1109/TIP.2003.819861\"},{\"path\":\"references[34].intent[0]\",\"value\":\"methodology\"},{\"path\":\"citations[4].url\",\"value\":\"https://www.semanticscholar.org/paper/aceb3d7f3cbe9f6035b84444436d7fb5cd46916b\"},{\"path\":\"references[10].authors[4].authorId\",\"value\":\"2104086\"},{\"path\":\"references[19].doi\",\"value\":\"10.1109/TCSVT.2011.2163461\"},{\"path\":\"citations[5].authors[5].authorId\",\"value\":\"144361019\"},{\"path\":\"references[16].authors[1].authorId\",\"value\":\"1688283\"},{\"path\":\"citations[6].authors[1].name\",\"value\":\"M. Rahmati\"},{\"path\":\"citations[6].isInfluential\",\"value\":\"false\"},{\"path\":\"references[6].url\",\"value\":\"https://www.semanticscholar.org/paper/eae2e0fa72e898c289365c0af16daf57a7a6cf40\"},{\"path\":\"references[12].url\",\"value\":\"https://www.semanticscholar.org/paper/b189282ec4c65f4229105e1b62e0012f7ab551cb\"},{\"path\":\"citations[5].intent\",\"value\":\"[]\"},{\"path\":\"references[13].doi\",\"value\":\"10.1109/ICME.2009.5202492\"},{\"path\":\"references[24].authors[4].authorId\",\"value\":\"2146032451\"},{\"path\":\"references[7].authors[2].authorId\",\"value\":\"2055029893\"},{\"path\":\"citations[5].doi\",\"value\":\"10.1109/TCYB.2020.2970104\"},{\"path\":\"references[14].paperId\",\"value\":\"09ad57265a1f0dfd60b3360daa499f5e93059c22\"},{\"path\":\"citations[0].paperId\",\"value\":\"f425c983257ace8b18604286b2f1b602db213046\"},{\"path\":\"references[5].url\",\"value\":\"https://www.semanticscholar.org/paper/b4018623293585e06e5ec159d11a9178f9f99380\"},{\"path\":\"citations[4].isInfluential\",\"value\":\"false\"},{\"path\":\"references[8].authors[1].authorId\",\"value\":\"50295995\"},{\"path\":\"references[29].doi\",\"value\":\"10.1109/TMM.2015.2434216\"},{\"path\":\"citations[4].authors[3].name\",\"value\":\"Yi Yu\"},{\"path\":\"references[13].authors[2].authorId\",\"value\":\"145175070\"},{\"path\":\"references[22].arxivId\",\"value\":\"\"},{\"path\":\"references[22].authors[2].name\",\"value\":\"Xinbo Gao\"},{\"path\":\"references[19].year\",\"value\":\"2011\"},{\"path\":\"references[30].authors[0].authorId\",\"value\":\"30459277\"},{\"path\":\"references[10].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[31].authors[1].authorId\",\"value\":\"2173683\"},{\"path\":\"references[31].authors[0].name\",\"value\":\"R. Timofte\"},{\"path\":\"references[31].authors[2].authorId\",\"value\":\"1681236\"},{\"path\":\"references[36].authors[4].authorId\",\"value\":\"1681921\"},{\"path\":\"references[14].venue\",\"value\":\"Pattern Recognit.\"},{\"path\":\"references[8].authors[0].authorId\",\"value\":\"31843833\"},{\"path\":\"references[25].venue\",\"value\":\"IEEE Transactions on Multimedia\"},{\"path\":\"references[19].url\",\"value\":\"https://www.semanticscholar.org/paper/510257c8cedc079aae88ccbf3dd10a84051c8fdc\"},{\"path\":\"citations[6].authors[0].authorId\",\"value\":\"2142114752\"},{\"path\":\"references[0].venue\",\"value\":\"IEEE Trans. Pattern Anal. Mach. Intell.\"},{\"path\":\"references[15].authors[0].name\",\"value\":\"Jinjun Wang\"},{\"path\":\"references[37].authors[2].name\",\"value\":\"Ferenc Husz�r\"},{\"path\":\"references[4].authors[0].authorId\",\"value\":\"33383055\"},{\"path\":\"citations[8].paperId\",\"value\":\"80746a36bd92dc2fe3338d5fc3a589e05d3278a5\"},{\"path\":\"citations[6].authors[0].name\",\"value\":\"Ali Abbasi\"},{\"path\":\"citations[3].arxivId\",\"value\":\"\"},{\"path\":\"references[17].intent[0]\",\"value\":\"background\"},{\"path\":\"references[36].url\",\"value\":\"https://www.semanticscholar.org/paper/bd8f77b7d3b9d272f7a68defc1412f73e5ac3135\"},{\"path\":\"references[14].authors[1].authorId\",\"value\":\"2111891265\"},{\"path\":\"references[11].doi\",\"value\":\"10.1109/ICIP.2008.4711992\"},{\"path\":\"references[17].authors[3].authorId\",\"value\":\"50032052\"},{\"path\":\"references[35].authors[2].authorId\",\"value\":\"48206011\"},{\"path\":\"references[29].url\",\"value\":\"https://www.semanticscholar.org/paper/9c0cda8cb2337fb0cf78051bd0fc6b086d7efbfc\"},{\"path\":\"citations[6].title\",\"value\":\"Identity-Preserving Pose-Robust Face Hallucination Through Face Subspace Prior\"},{\"path\":\"citations[7].authors[1].authorId\",\"value\":\"144808832\"},{\"path\":\"references[18].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[6].url\",\"value\":\"https://www.semanticscholar.org/paper/dc2ea22eca985c9456bb3d6f9820a348d02885b4\"},{\"path\":\"references[11].authors[3].authorId\",\"value\":\"153652752\"},{\"path\":\"references[17].intent[1]\",\"value\":\"methodology\"},{\"path\":\"citations[6].venue\",\"value\":\"ArXiv\"},{\"path\":\"references[12].arxivId\",\"value\":\"\"},{\"path\":\"citations[7].authors[0].name\",\"value\":\"Baojin Huang\"},{\"path\":\"references[10].authors[0].authorId\",\"value\":\"48385803\"},{\"path\":\"references[0].title\",\"value\":\"Neural Network-Based Face Detection\"},{\"path\":\"references[15].authors[5].name\",\"value\":\"Yihong Gong\"},{\"path\":\"references[17].arxivId\",\"value\":\"\"},{\"path\":\"references[5].doi\",\"value\":\"10.1109/CVPR.2004.1315043\"},{\"path\":\"references[0].arxivId\",\"value\":\"\"},{\"path\":\"references[11].isInfluential\",\"value\":\"false\"},{\"path\":\"references[30].title\",\"value\":\"Image Super-Resolution Using Deep Convolutional Networks\"},{\"path\":\"influentialCitationCount\",\"value\":\"0\"},{\"path\":\"references[35].year\",\"value\":\"2017\"},{\"path\":\"citations[3].authors[1].authorId\",\"value\":\"2059027389\"},{\"path\":\"topics[0].url\",\"value\":\"https://www.semanticscholar.org/topic/57450\"},{\"path\":\"references[29].paperId\",\"value\":\"9c0cda8cb2337fb0cf78051bd0fc6b086d7efbfc\"},{\"path\":\"references[37].authors[1].name\",\"value\":\"Lucas Theis\"},{\"path\":\"references[32].year\",\"value\":\"2015\"},{\"path\":\"references[34].authors[0].name\",\"value\":\"Yibing Song\"},{\"path\":\"references[34].authors[0].authorId\",\"value\":\"2255687\"},{\"path\":\"references[36].doi\",\"value\":\"10.1109/CVPR.2017.713\"},{\"path\":\"topics[3].topic\",\"value\":\"algorithm\"},{\"path\":\"references[0].authors[0].authorId\",\"value\":\"39682833\"},{\"path\":\"references[36].venue\",\"value\":\"2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\"},{\"path\":\"citations[3].authors[2].authorId\",\"value\":\"3004725\"},{\"path\":\"references[15].authors[4].name\",\"value\":\"Thomas S. Huang\"},{\"path\":\"citations[1].venue\",\"value\":\"ACM Computing Surveys\"},{\"path\":\"references[30].venue\",\"value\":\"IEEE Transactions on Pattern Analysis and Machine Intelligence\"},{\"path\":\"references[18].authors[0].name\",\"value\":\"Chengdong Lan\"},{\"path\":\"citations[7].intent[0]\",\"value\":\"background\"},{\"path\":\"citations[1].authors[3].name\",\"value\":\"Jiayi Ma\"},{\"path\":\"references[17].authors[2].authorId\",\"value\":\"153652752\"},{\"path\":\"citations[7].authors[2].authorId\",\"value\":\"38655501\"},{\"path\":\"citations[9].arxivId\",\"value\":\"\"},{\"path\":\"references[6].venue\",\"value\":\"IEEE Transactions on Image Processing\"},{\"path\":\"references[24].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"references[6].title\",\"value\":\"Image quality assessment: from error visibility to structural similarity\"},{\"path\":\"references[34].authors[2].name\",\"value\":\"Shengfeng He\"},{\"path\":\"references[27].year\",\"value\":\"2015\"},{\"path\":\"references[31].authors[1].name\",\"value\":\"R. Rothe\"},{\"path\":\"references[4].authors[1].name\",\"value\":\"H. Shum\"},{\"path\":\"references[7].authors[2].name\",\"value\":\"Q. Xue\"},{\"path\":\"references[10].authors[1].authorId\",\"value\":\"48437987\"},{\"path\":\"citations[4].authors[4].authorId\",\"value\":\"144307145\"},{\"path\":\"citations[7].authors[3].name\",\"value\":\"Kui Jiang\"},{\"path\":\"references[4].authors[1].authorId\",\"value\":\"93596028\"},{\"path\":\"references[2].paperId\",\"value\":\"7c850f4c56f184891f3ccfe2de6213881dc0e08c\"},{\"path\":\"references[36].title\",\"value\":\"SphereFace: Deep Hypersphere Embedding for Face Recognition\"},{\"path\":\"references[19].venue\",\"value\":\"IEEE Transactions on Circuits and Systems for Video Technology\"},{\"path\":\"citations[5].paperId\",\"value\":\"cd66f122b75fdd4ed743fa92c3783a2458a6b223\"},{\"path\":\"references[7].authors[1].name\",\"value\":\"Q. Tian\"},{\"path\":\"references[31].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[19].paperId\",\"value\":\"510257c8cedc079aae88ccbf3dd10a84051c8fdc\"},{\"path\":\"references[25].isInfluential\",\"value\":\"true\"},{\"path\":\"references[28].year\",\"value\":\"2015\"},{\"path\":\"citations[4].authors[4].name\",\"value\":\"J. Xie\"},{\"path\":\"references[14].title\",\"value\":\"Super-resolution of human face image using canonical correlation analysis\"},{\"path\":\"references[34].authors[1].name\",\"value\":\"Jiawei Zhang\"},{\"path\":\"references[5].isInfluential\",\"value\":\"true\"},{\"path\":\"references[25].title\",\"value\":\"Noise Robust Face Hallucination via Locality-Constrained Representation\"},{\"path\":\"references[13].arxivId\",\"value\":\"\"},{\"path\":\"references[6].isInfluential\",\"value\":\"true\"},{\"path\":\"references[17].authors[0].name\",\"value\":\"Jianchao Yang\"},{\"path\":\"references[6].paperId\",\"value\":\"eae2e0fa72e898c289365c0af16daf57a7a6cf40\"},{\"path\":\"references[24].authors[3].authorId\",\"value\":\"144725609\"},{\"path\":\"references[26].authors[4].name\",\"value\":\"Chunjie Zhang\"},{\"path\":\"references[37].authors[5].name\",\"value\":\"Alykhan Tejani\"},{\"path\":\"citations[2].authors[4].authorId\",\"value\":\"144725609\"},{\"path\":\"references[21].authors[1].authorId\",\"value\":\"\"},{\"path\":\"references[22].authors[1].authorId\",\"value\":\"143719920\"},{\"path\":\"references[29].year\",\"value\":\"2015\"},{\"path\":\"references[25].authors[3].name\",\"value\":\"Zhen Han\"},{\"path\":\"references[36].authors[4].name\",\"value\":\"B. Raj\"},{\"path\":\"references[14].isInfluential\",\"value\":\"false\"},{\"path\":\"references[3].year\",\"value\":\"2003\"},{\"path\":\"citations[4].authors[0].name\",\"value\":\"Guangwei Gao\"},{\"path\":\"citations[4].authors[6].authorId\",\"value\":\"2111076685\"},{\"path\":\"citations[4].arxivId\",\"value\":\"\"},{\"path\":\"references[14].doi\",\"value\":\"10.1016/j.patcog.2010.02.007\"},{\"path\":\"references[23].authors[3].authorId\",\"value\":\"2111131284\"},{\"path\":\"citations[2].paperId\",\"value\":\"1bc897f87e5e0c61c496cdccdd168577a62ed501\"},{\"path\":\"references[11].year\",\"value\":\"2008\"},{\"path\":\"citations[6].year\",\"value\":\"2021\"},{\"path\":\"citations[0].authors[1].name\",\"value\":\"Ankush Jain\"},{\"path\":\"citations[0].authors[2].authorId\",\"value\":\"2149921717\"},{\"path\":\"citations[5].authors[1].name\",\"value\":\"Long Sun\"},{\"path\":\"references[20].isInfluential\",\"value\":\"true\"},{\"path\":\"references[20].title\",\"value\":\"An efficient local-structure-based face-hallucination method\"},{\"path\":\"references[1].title\",\"value\":\"Limits on super-resolution and how to break them\"},{\"path\":\"references[13].title\",\"value\":\"Position-based face hallucination method\"},{\"path\":\"references[24].title\",\"value\":\"Noise Face Image Hallucination via Data-Driven Local Eigentransformation\"},{\"path\":\"references[5].title\",\"value\":\"Super-resolution through neighbor embedding\"},{\"path\":\"references[7].authors[3].name\",\"value\":\"N. Sebe\"},{\"path\":\"citations[2].authors[2].authorId\",\"value\":\"1708439\"},{\"path\":\"references[14].url\",\"value\":\"https://www.semanticscholar.org/paper/09ad57265a1f0dfd60b3360daa499f5e93059c22\"},{\"path\":\"references[10].authors[3].name\",\"value\":\"Xilin Chen\"},{\"path\":\"references[5].venue\",\"value\":\"CVPR 2004\"},{\"path\":\"references[15].isInfluential\",\"value\":\"false\"},{\"path\":\"references[3].arxivId\",\"value\":\"\"},{\"path\":\"references[8].year\",\"value\":\"2005\"},{\"path\":\"references[5].authors[1].name\",\"value\":\"D. Yeung\"},{\"path\":\"references[10].authors[5].authorId\",\"value\":\"2108584873\"},{\"path\":\"references[8].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[23].url\",\"value\":\"https://www.semanticscholar.org/paper/baf38dbaaf81bfd250376ce7fc38d76c3821b309\"},{\"path\":\"citations[1].authors[2].authorId\",\"value\":\"2108681776\"},{\"path\":\"references[13].isInfluential\",\"value\":\"false\"},{\"path\":\"references[27].authors[0].name\",\"value\":\"Liang Chen\"},{\"path\":\"references[28].intent[0]\",\"value\":\"background\"},{\"path\":\"references[35].venue\",\"value\":\"2017 IEEE Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)\"},{\"path\":\"references[6].authors[2].name\",\"value\":\"H. Sheikh\"},{\"path\":\"references[25].intent[2]\",\"value\":\"result\"},{\"path\":\"references[13].venue\",\"value\":\"2009 IEEE International Conference on Multimedia and Expo\"},{\"path\":\"references[30].authors[3].name\",\"value\":\"Xiaoou Tang\"},{\"path\":\"citations[1].year\",\"value\":\"2021\"},{\"path\":\"references[31].venue\",\"value\":\"2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\"},{\"path\":\"references[20].venue\",\"value\":\"2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)\"},{\"path\":\"references[24].venue\",\"value\":\"PCM\"},{\"path\":\"references[1].venue\",\"value\":\"Proceedings IEEE Conference on Computer Vision and Pattern Recognition. CVPR 2000 (Cat. No.PR00662)\"},{\"path\":\"references[1].authors[1].authorId\",\"value\":\"1733113\"},{\"path\":\"references[30].year\",\"value\":\"2014\"},{\"path\":\"references[23].doi\",\"value\":\"10.1109/ICIP.2013.6738201\"},{\"path\":\"references[16].authors[0].authorId\",\"value\":\"2363813\"},{\"path\":\"references[21].authors[2].name\",\"value\":\"Pingkun Yan\"},{\"path\":\"references[35].authors[1].name\",\"value\":\"Sanghyun Son\"},{\"path\":\"references[25].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[6].authors[0].name\",\"value\":\"Zhou Wang\"},{\"path\":\"citations[6].doi\",\"value\":\"10.36227/techrxiv.17055734\"},{\"path\":\"references[29].authors[3].authorId\",\"value\":\"1685088\"},{\"path\":\"citations[8].title\",\"value\":\"MSFSR: A Multi-Stage Face Super-Resolution with Accurate Facial Representation via Enhanced Facial Boundaries\"},{\"path\":\"references[10].authors[3].authorId\",\"value\":\"46772547\"},{\"path\":\"references[0].authors[1].name\",\"value\":\"S. Baluja\"},{\"path\":\"arxivId\",\"value\":\"\"},{\"path\":\"topics[0].topic\",\"value\":\"Anatomy, Regional\"},{\"path\":\"citations[3].venue\",\"value\":\"IEEE Transactions on Biometrics, Behavior, and Identity Science\"},{\"path\":\"references[35].title\",\"value\":\"Enhanced Deep Residual Networks for Single Image Super-Resolution\"},{\"path\":\"references[25].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"references[27].url\",\"value\":\"https://www.semanticscholar.org/paper/1b1eb9b758676f9b249ef17bb473cfd38c11e62d\"},{\"path\":\"references[35].authors[1].authorId\",\"value\":\"2055453482\"},{\"path\":\"topics[2].topicId\",\"value\":\"199704\"},{\"path\":\"references[25].intent[0]\",\"value\":\"background\"},{\"path\":\"references[28].authors[1].authorId\",\"value\":\"144847940\"},{\"path\":\"references[24].authors[5].authorId\",\"value\":\"144398790\"},{\"path\":\"citations[2].authors[0].authorId\",\"value\":\"2146032451\"},{\"path\":\"references[16].isInfluential\",\"value\":\"true\"},{\"path\":\"references[3].authors[1].authorId\",\"value\":\"9330607\"},{\"path\":\"references[18].year\",\"value\":\"2010\"},{\"path\":\"references[30].authors[1].name\",\"value\":\"Chen Change Loy\"},{\"path\":\"references[11].authors[2].name\",\"value\":\"Yi Ma\"},{\"path\":\"references[20].arxivId\",\"value\":\"\"},{\"path\":\"citations[0].arxivId\",\"value\":\"\"},{\"path\":\"references[36].authors[3].authorId\",\"value\":\"2150655769\"},{\"path\":\"references[10].authors[6].name\",\"value\":\"Debin Zhao\"},{\"path\":\"citations[0].authors[3].name\",\"value\":\"Ajay Kumar\"},{\"path\":\"numCiting\",\"value\":\"38\"},{\"path\":\"references[33].arxivId\",\"value\":\"\"},{\"path\":\"citations[3].year\",\"value\":\"2021\"},{\"path\":\"references[7].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[0].title\",\"value\":\"Adaptive optimal multi-features learning based representation for face hallucination\"},{\"path\":\"citations[3].title\",\"value\":\"E-ComSupResNet: Enhanced Face Super-Resolution Through Compact Network\"},{\"path\":\"references[22].authors[3].authorId\",\"value\":\"67180560\"},{\"path\":\"references[16].year\",\"value\":\"2010\"},{\"path\":\"references[4].arxivId\",\"value\":\"\"},{\"path\":\"citations[0].venue\",\"value\":\"Expert Syst. Appl.\"},{\"path\":\"citations[8].venue\",\"value\":\"2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)\"},{\"path\":\"citations[0].authors[0].authorId\",\"value\":\"20921873\"},{\"path\":\"references[37].authors[7].name\",\"value\":\"Zehan Wang\"},{\"path\":\"references[10].authors[5].name\",\"value\":\"Xiaohua Zhang\"},{\"path\":\"citations[3].authors[4].authorId\",\"value\":\"151434651\"},{\"path\":\"references[12].isInfluential\",\"value\":\"false\"},{\"path\":\"references[14].authors[0].authorId\",\"value\":\"39925162\"},{\"path\":\"references[27].authors[3].name\",\"value\":\"Qing Li\"},{\"path\":\"references[23].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"authors[1].authorId\",\"value\":\"9416881\"},{\"path\":\"references[29].title\",\"value\":\"Learning-Based Joint Super-Resolution and Deblocking for a Highly Compressed Image\"},{\"path\":\"references[37].authors[1].authorId\",\"value\":\"2073063\"},{\"path\":\"citations[4].year\",\"value\":\"2021\"},{\"path\":\"references[35].authors[3].name\",\"value\":\"Seungjun Nah\"},{\"path\":\"references[19].arxivId\",\"value\":\"\"},{\"path\":\"references[15].authors[3].authorId\",\"value\":\"39157653\"},{\"path\":\"references[36].authors[1].name\",\"value\":\"Yandong Wen\"},{\"path\":\"citations[8].authors[1].authorId\",\"value\":\"2108053052\"},{\"path\":\"citations[2].url\",\"value\":\"https://www.semanticscholar.org/paper/1bc897f87e5e0c61c496cdccdd168577a62ed501\"},{\"path\":\"references[23].isInfluential\",\"value\":\"false\"},{\"path\":\"numCitedBy\",\"value\":\"10\"},{\"path\":\"references[17].url\",\"value\":\"https://www.semanticscholar.org/paper/f99d0bd1f1288fe35d46f719125844bfbaf544e3\"},{\"path\":\"references[20].url\",\"value\":\"https://www.semanticscholar.org/paper/e604febddc6294574cb6ca32d9f3e9af690e3200\"},{\"path\":\"references[11].authors[1].name\",\"value\":\"Hao Tang\"},{\"path\":\"authors[2].url\",\"value\":\"https://www.semanticscholar.org/author/2117896344\"},{\"path\":\"references[37].authors[5].authorId\",\"value\":\"41203992\"},{\"path\":\"references[37].authors[8].name\",\"value\":\"W. Shi\"},{\"path\":\"references[20].intent[0]\",\"value\":\"background\"},{\"path\":\"references[6].year\",\"value\":\"2004\"},{\"path\":\"citations[9].authors[1].authorId\",\"value\":\"9416881\"},{\"path\":\"references[30].doi\",\"value\":\"10.1109/TPAMI.2015.2439281\"},{\"path\":\"references[7].arxivId\",\"value\":\"\"},{\"path\":\"references[9].isInfluential\",\"value\":\"true\"},{\"path\":\"citations[5].authors[4].name\",\"value\":\"Cheng Pang\"},{\"path\":\"references[16].venue\",\"value\":\"Image Vis. Comput.\"},{\"path\":\"references[12].paperId\",\"value\":\"b189282ec4c65f4229105e1b62e0012f7ab551cb\"},{\"path\":\"references[35].paperId\",\"value\":\"7ba5d3808e117e7a68dc40331ce1d483ceeedcb2\"},{\"path\":\"references[27].venue\",\"value\":\"Multimedia Tools and Applications\"},{\"path\":\"references[29].authors[0].authorId\",\"value\":\"1943622\"},{\"path\":\"citations[9].year\",\"value\":\"2020\"},{\"path\":\"citations[3].paperId\",\"value\":\"684dca76b28358a9cabf60283ab6dcc68ba17385\"},{\"path\":\"references[0].paperId\",\"value\":\"3d76ef8e61395a6e9c32627f1f108772d084e2e9\"},{\"path\":\"references[0].authors[2].name\",\"value\":\"T. Kanade\"},{\"path\":\"references[37].authors[6].authorId\",\"value\":\"1853456\"},{\"path\":\"references[10].authors[0].name\",\"value\":\"W. Gao\"},{\"path\":\"references[8].title\",\"value\":\"Hallucinating face by eigentransformation\"},{\"path\":\"references[1].year\",\"value\":\"2000\"},{\"path\":\"references[20].authors[0].name\",\"value\":\"Hui Zhuo\"},{\"path\":\"references[8].venue\",\"value\":\"IEEE Trans. Syst. Man Cybern. Part C\"},{\"path\":\"references[17].authors[2].name\",\"value\":\"Thomas S. Huang\"},{\"path\":\"fieldsOfStudy[0]\",\"value\":\"Computer Science\"},{\"path\":\"authors[1].name\",\"value\":\"Jinshan Pan\"},{\"path\":\"references[30].url\",\"value\":\"https://www.semanticscholar.org/paper/66e9dc728b5041271bff0cd6ac0d7eadcd88442f\"},{\"path\":\"citations[9].doi\",\"value\":\"10.1109/TIP.2020.3023580\"},{\"path\":\"citations[2].intent[0]\",\"value\":\"background\"},{\"path\":\"references[5].intent[0]\",\"value\":\"background\"},{\"path\":\"references[15].paperId\",\"value\":\"2f7713dcc35e7c05becf3be5522f36c9546b0364\"},{\"path\":\"references[30].authors[2].authorId\",\"value\":\"39353098\"},{\"path\":\"references[17].doi\",\"value\":\"10.1109/TIP.2010.2050625\"},{\"path\":\"citations[8].authors[2].authorId\",\"value\":\"2146032451\"},{\"path\":\"references[14].year\",\"value\":\"2010\"},{\"path\":\"references[22].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[2].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[7].year\",\"value\":\"2005\"},{\"path\":\"references[27].title\",\"value\":\"A novel face super resolution approach for noisy images using contour feature and standard deviation prior\"},{\"path\":\"references[9].authors[1].authorId\",\"value\":\"1756114\"},{\"path\":\"references[36].authors[2].name\",\"value\":\"Zhiding Yu\"},{\"path\":\"references[16].title\",\"value\":\"A new ranking method for principal components analysis and its application to face image analysis\"},{\"path\":\"citations[3].intent\",\"value\":\"[]\"},{\"path\":\"references[17].authors[3].name\",\"value\":\"Yi Ma\"},{\"path\":\"references[30].isInfluential\",\"value\":\"true\"},{\"path\":\"references[15].authors[2].authorId\",\"value\":\"144782042\"},{\"path\":\"references[35].authors[0].name\",\"value\":\"Bee Lim\"},{\"path\":\"references[0].year\",\"value\":\"1998\"},{\"path\":\"references[16].authors[1].name\",\"value\":\"G. Giraldi\"},{\"path\":\"citations[6].paperId\",\"value\":\"dc2ea22eca985c9456bb3d6f9820a348d02885b4\"},{\"path\":\"citations[9].authors[2].authorId\",\"value\":\"1708439\"},{\"path\":\"authors[0].name\",\"value\":\"Liang Chen\"},{\"path\":\"references[32].paperId\",\"value\":\"b5f3e5d2912bedbcd9458952d664b08db6aed962\"},{\"path\":\"references[5].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[13].year\",\"value\":\"2009\"},{\"path\":\"citations[5].authors[3].name\",\"value\":\"Huimin Lu\"},{\"path\":\"references[27].doi\",\"value\":\"10.1007/s11042-015-3145-9\"},{\"path\":\"citations[9].url\",\"value\":\"https://www.semanticscholar.org/paper/9f2442c12c1dfde6dcd1986b6b12dc92f14aeb92\"},{\"path\":\"references[29].authors[2].authorId\",\"value\":\"2644084\"},{\"path\":\"references[36].authors[2].authorId\",\"value\":\"1751019\"},{\"path\":\"references[6].authors[3].name\",\"value\":\"Eero P. Simoncelli\"},{\"path\":\"references[16].arxivId\",\"value\":\"\"},{\"path\":\"references[10].arxivId\",\"value\":\"\"},{\"path\":\"references[16].authors[0].name\",\"value\":\"C. Thomaz\"},{\"path\":\"references[36].authors[1].authorId\",\"value\":\"145357606\"},{\"path\":\"references[9].paperId\",\"value\":\"cec734d7097ab6b1e60d95228ffd64248eb89d66\"},{\"path\":\"references[10].authors[1].name\",\"value\":\"B. Cao\"},{\"path\":\"references[12].year\",\"value\":\"2009\"},{\"path\":\"citations[5].authors[0].name\",\"value\":\"Rushi Lan\"},{\"path\":\"citations[1].authors[0].authorId\",\"value\":\"1708439\"},{\"path\":\"citations[8].year\",\"value\":\"2020\"},{\"path\":\"references[26].authors[0].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"references[2].authors[1].authorId\",\"value\":\"2149269035\"},{\"path\":\"references[8].isInfluential\",\"value\":\"false\"},{\"path\":\"references[15].authors[0].authorId\",\"value\":\"71563118\"},{\"path\":\"references[9].doi\",\"value\":\"10.1109/CVPR.2005.177\"},{\"path\":\"isOpenAccess\",\"value\":\"false\"},{\"path\":\"topics[1].url\",\"value\":\"https://www.semanticscholar.org/topic/10302\"},{\"path\":\"references[20].authors[1].name\",\"value\":\"K. Lam\"},{\"path\":\"references[30].authors[3].authorId\",\"value\":\"50295995\"},{\"path\":\"references[26].authors[3].name\",\"value\":\"Zhen Han\"},{\"path\":\"references[36].authors[0].authorId\",\"value\":\"36326884\"},{\"path\":\"authors[2].name\",\"value\":\"Qing Li\"},{\"path\":\"references[26].arxivId\",\"value\":\"\"},{\"path\":\"references[21].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[9].authors[4].authorId\",\"value\":\"2108053052\"},{\"path\":\"citations[1].authors[1].authorId\",\"value\":\"2109501904\"},{\"path\":\"references[37].authors[3].authorId\",\"value\":\"145372820\"},{\"path\":\"references[5].year\",\"value\":\"2004\"},{\"path\":\"references[33].title\",\"value\":\"Face super resolution based on parent patch prior for VLQ scenarios\"},{\"path\":\"references[10].url\",\"value\":\"https://www.semanticscholar.org/paper/2485c98aa44131d1a2f7d1355b1e372f2bb148ad\"},{\"path\":\"references[28].paperId\",\"value\":\"91b1a59b9e0e7f4db0828bf36654b84ba53b0557\"},{\"path\":\"references[2].year\",\"value\":\"2003\"},{\"path\":\"references[20].doi\",\"value\":\"10.1109/ICASSP.2012.6288119\"},{\"path\":\"references[29].authors[1].authorId\",\"value\":\"3192517\"},{\"path\":\"references[10].year\",\"value\":\"2008\"},{\"path\":\"references[23].authors[4].authorId\",\"value\":\"1708439\"},{\"path\":\"references[2].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[9].authors[0].authorId\",\"value\":\"48950628\"},{\"path\":\"references[3].venue\",\"value\":\"J. Mach. Learn. Res.\"},{\"path\":\"references[25].paperId\",\"value\":\"51ebd2067aa0e66d0d66e2b018b95f5e85993206\"},{\"path\":\"references[22].paperId\",\"value\":\"5a0d82e4efb74b1d74baea9ec794c1c66e637571\"},{\"path\":\"isPublisherLicensed\",\"value\":\"true\"},{\"path\":\"references[22].authors[0].authorId\",\"value\":\"144050305\"},{\"path\":\"references[4].year\",\"value\":\"2004\"},{\"path\":\"references[15].authors[1].authorId\",\"value\":\"1706007\"},{\"path\":\"references[37].authors[4].authorId\",\"value\":\"49931957\"},{\"path\":\"citations[8].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[9].authors[3].authorId\",\"value\":\"1519062623\"},{\"path\":\"references[11].venue\",\"value\":\"2008 15th IEEE International Conference on Image Processing\"},{\"path\":\"references[26].authors[2].name\",\"value\":\"Chao Liang\"},{\"path\":\"references[33].venue\",\"value\":\"Multimedia Tools and Applications\"},{\"path\":\"citations[8].authors[0].authorId\",\"value\":\"2140010411\"},{\"path\":\"references[29].arxivId\",\"value\":\"\"},{\"path\":\"references[9].url\",\"value\":\"https://www.semanticscholar.org/paper/cec734d7097ab6b1e60d95228ffd64248eb89d66\"},{\"path\":\"references[22].venue\",\"value\":\"International Journal of Computer Vision\"},{\"path\":\"references[11].intent[0]\",\"value\":\"background\"},{\"path\":\"references[10].doi\",\"value\":\"10.1109/TSMCA.2007.909557\"},{\"path\":\"references[26].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"references[2].authors[0].authorId\",\"value\":\"2115277167\"},{\"path\":\"citations[2].doi\",\"value\":\"10.1109/TIP.2021.3086595\"},{\"path\":\"references[20].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[36].authors[5].name\",\"value\":\"Le Song\"},{\"path\":\"references[33].authors[0].name\",\"value\":\"Liang Chen\"},{\"path\":\"citations[4].authors[6].name\",\"value\":\"Meng Yang\"},{\"path\":\"citations[6].intent[0]\",\"value\":\"background\"},{\"path\":\"references[33].url\",\"value\":\"https://www.semanticscholar.org/paper/ddfc978b3a149015c9e517fbfe1b8563df5e7356\"},{\"path\":\"authors[0].authorId\",\"value\":\"2146032451\"},{\"path\":\"citations[9].paperId\",\"value\":\"9f2442c12c1dfde6dcd1986b6b12dc92f14aeb92\"},{\"path\":\"references[2].authors[2].name\",\"value\":\"M. Kang\"},{\"path\":\"citations[1].url\",\"value\":\"https://www.semanticscholar.org/paper/0aff8d059bccd20014f250b8e87cf205dfc04f5b\"},{\"path\":\"citations[8].authors[0].name\",\"value\":\"Yunchen Zhang\"},{\"path\":\"citations[1].doi\",\"value\":\"10.1145/3485132\"},{\"path\":\"references[24].authors[2].authorId\",\"value\":\"1708439\"},{\"path\":\"references[0].isInfluential\",\"value\":\"true\"},{\"path\":\"references[10].authors[6].authorId\",\"value\":\"1725937\"},{\"path\":\"references[16].url\",\"value\":\"https://www.semanticscholar.org/paper/8b56e33f33e582f3e473dba573a16b598ed9bcdc\"},{\"path\":\"references[15].title\",\"value\":\"Locality-constrained Linear Coding for image classification\"},{\"path\":\"citations[4].authors[5].authorId\",\"value\":\"51460259\"},{\"path\":\"references[13].intent\",\"value\":\"[]\"},{\"path\":\"references[6].authors[1].name\",\"value\":\"A. Bovik\"},{\"path\":\"references[26].title\",\"value\":\"Face image super-resolution through locality-induced support regression\"},{\"path\":\"references[37].authors[0].authorId\",\"value\":\"1779917\"},{\"path\":\"references[2].url\",\"value\":\"https://www.semanticscholar.org/paper/7c850f4c56f184891f3ccfe2de6213881dc0e08c\"},{\"path\":\"citations[4].authors[1].name\",\"value\":\"Guangwei Gao\"},{\"path\":\"citations[2].authors[4].name\",\"value\":\"Zhen Han\"},{\"path\":\"references[34].paperId\",\"value\":\"006a6e6efc6582b57fbbf6c689e29b69a0be1ce2\"},{\"path\":\"references[22].authors[4].name\",\"value\":\"Jie Li\"},{\"path\":\"citations[3].authors[3].authorId\",\"value\":\"34711412\"},{\"path\":\"references[23].authors[0].authorId\",\"value\":\"2146032451\"},{\"path\":\"references[19].authors[1].authorId\",\"value\":\"2068345080\"},{\"path\":\"citations[0].authors[1].authorId\",\"value\":\"49148100\"},{\"path\":\"references[13].authors[0].name\",\"value\":\"Xiang-Wang Ma\"},{\"path\":\"references[13].paperId\",\"value\":\"d035c8bef0e0619fd68ab2cc1c9e71dfd730aefe\"},{\"path\":\"references[24].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"references[11].authors[3].name\",\"value\":\"Thomas S. Huang\"},{\"path\":\"references[33].doi\",\"value\":\"10.1007/s11042-016-3611-z\"},{\"path\":\"references[29].authors[3].name\",\"value\":\"Chia-Wen Lin\"},{\"path\":\"references[18].paperId\",\"value\":\"fed5e5a9be8947aa553ea4f526405b672a2ac36c\"},{\"path\":\"citations[4].paperId\",\"value\":\"aceb3d7f3cbe9f6035b84444436d7fb5cd46916b\"},{\"path\":\"references[37].authors[4].name\",\"value\":\"Andrew P. Aitken\"},{\"path\":\"references[27].authors[4].authorId\",\"value\":\"144725609\"},{\"path\":\"references[26].isInfluential\",\"value\":\"false\"},{\"path\":\"references[23].arxivId\",\"value\":\"\"},{\"path\":\"references[7].authors[4].name\",\"value\":\"J. Ma\"},{\"path\":\"references[24].doi\",\"value\":\"10.1007/978-3-319-13168-9_19\"},{\"path\":\"citations[2].authors[5].authorId\",\"value\":\"2780029\"},{\"path\":\"citations[1].authors[1].name\",\"value\":\"Chenyang Wang\"},{\"path\":\"references[19].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[2].doi\",\"value\":\"10.1109/MSP.2003.1203207\"},{\"path\":\"references[29].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[14].authors[3].name\",\"value\":\"Junping Zhang\"},{\"path\":\"citations[7].year\",\"value\":\"2020\"},{\"path\":\"references[22].authors[2].authorId\",\"value\":\"10699750\"},{\"path\":\"references[28].arxivId\",\"value\":\"\"},{\"path\":\"references[8].paperId\",\"value\":\"791d46aa9cdd40bc9d82067a2e9b71785c62838b\"},{\"path\":\"citations[7].isInfluential\",\"value\":\"false\"},{\"path\":\"references[1].authors[0].authorId\",\"value\":\"145347688\"},{\"path\":\"references[3].paperId\",\"value\":\"8db95dbd08e4ee64fb258e5380e78cfa507ed94d\"},{\"path\":\"references[27].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"references[35].authors[0].authorId\",\"value\":\"144717485\"},{\"path\":\"references[32].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[9].authors[1].name\",\"value\":\"B. Triggs\"},{\"path\":\"citations[0].authors[2].name\",\"value\":\"Pramod Kumar Singh\"},{\"path\":\"citations[7].arxivId\",\"value\":\"\"},{\"path\":\"citations[4].authors[1].authorId\",\"value\":\"3306402\"},{\"path\":\"references[10].authors[4].name\",\"value\":\"Delong Zhou\"},{\"path\":\"citations[3].authors[3].name\",\"value\":\"K. Raja\"},{\"path\":\"citations[2].authors[1].authorId\",\"value\":\"9416881\"},{\"path\":\"citations[9].isInfluential\",\"value\":\"true\"},{\"path\":\"references[19].authors[1].name\",\"value\":\"Ning Wu\"},{\"path\":\"topics[2].topic\",\"value\":\"Flexed Sidebent Rotated\"},{\"path\":\"references[34].venue\",\"value\":\"IJCAI\"},{\"path\":\"citations[5].title\",\"value\":\"MADNet: A Fast and Lightweight Network for Single-Image Super Resolution\"},{\"path\":\"citations[5].venue\",\"value\":\"IEEE Transactions on Cybernetics\"},{\"path\":\"references[37].title\",\"value\":\"Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network\"},{\"path\":\"references[33].authors[0].authorId\",\"value\":\"2146032451\"},{\"path\":\"fieldsOfStudy[1]\",\"value\":\"Medicine\"},{\"path\":\"references[28].authors[0].name\",\"value\":\"Muwei Jian\"},{\"path\":\"citations[2].year\",\"value\":\"2021\"},{\"path\":\"references[29].authors[4].authorId\",\"value\":\"1692617\"},{\"path\":\"references[5].authors[2].name\",\"value\":\"Yimin Xiong\"},{\"path\":\"references[36].authors[0].name\",\"value\":\"Weiyang Liu\"},{\"path\":\"references[2].authors[2].authorId\",\"value\":\"1839581\"},{\"path\":\"references[20].year\",\"value\":\"2012\"},{\"path\":\"authors[0].url\",\"value\":\"https://www.semanticscholar.org/author/2146032451\"},{\"path\":\"references[7].venue\",\"value\":\"2005 IEEE International Conference on Multimedia and Expo\"},{\"path\":\"venue\",\"value\":\"IEEE Transactions on Image Processing\"},{\"path\":\"references[7].title\",\"value\":\"Neighborhood issue in single-frame image super-resolution\"},{\"path\":\"citations[9].authors[0].authorId\",\"value\":\"2146032451\"},{\"path\":\"topics[3].url\",\"value\":\"https://www.semanticscholar.org/topic/291901\"},{\"path\":\"references[3].authors[0].name\",\"value\":\"L. Saul\"},{\"path\":\"references[17].year\",\"value\":\"2010\"},{\"path\":\"citations[5].authors[5].name\",\"value\":\"Xiaonan Luo\"},{\"path\":\"title\",\"value\":\"Robust Face Image Super-Resolution via Joint Learning of Subdivided Contextual Model\"},{\"path\":\"references[10].venue\",\"value\":\"IEEE Transactions on Systems, Man, and Cybernetics - Part A: Systems and Humans\"},{\"path\":\"references[35].authors[2].name\",\"value\":\"Heewon Kim\"},{\"path\":\"references[31].isInfluential\",\"value\":\"false\"},{\"path\":\"references[30].arxivId\",\"value\":\"1501.00092\"},{\"path\":\"references[3].authors[0].authorId\",\"value\":\"1796044\"},{\"path\":\"references[37].authors[7].authorId\",\"value\":\"34627233\"},{\"path\":\"references[0].authors[0].name\",\"value\":\"H. Rowley\"},{\"path\":\"references[1].arxivId\",\"value\":\"\"},{\"path\":\"references[15].venue\",\"value\":\"2010 IEEE Computer Society Conference on Computer Vision and Pattern Recognition\"},{\"path\":\"references[18].title\",\"value\":\"Face hallucination with shape parameters projection constraint\"},{\"path\":\"references[30].authors[0].name\",\"value\":\"Chao Dong\"},{\"path\":\"references[21].authors[0].authorId\",\"value\":\"7828998\"},{\"path\":\"references[21].year\",\"value\":\"2013\"},{\"path\":\"references[37].venue\",\"value\":\"2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\"},{\"path\":\"references[26].venue\",\"value\":\"Signal Process.\"},{\"path\":\"references[19].isInfluential\",\"value\":\"false\"},{\"path\":\"references[32].intent[0]\",\"value\":\"background\"},{\"path\":\"references[12].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[32].doi\",\"value\":\"10.1109/CVPR.2016.182\"},{\"path\":\"references[10].title\",\"value\":\"The CAS-PEAL Large-Scale Chinese Face Database and Baseline Evaluations\"},{\"path\":\"references[0].authors[2].authorId\",\"value\":\"1733113\"},{\"path\":\"citations[1].authors[3].authorId\",\"value\":\"8555475\"},{\"path\":\"references[11].arxivId\",\"value\":\"\"},{\"path\":\"references[30].authors[1].authorId\",\"value\":\"1717179\"},{\"path\":\"references[20].paperId\",\"value\":\"e604febddc6294574cb6ca32d9f3e9af690e3200\"},{\"path\":\"references[7].authors[0].name\",\"value\":\"Xu Su\"},{\"path\":\"references[35].authors[4].authorId\",\"value\":\"2135837\"},{\"path\":\"references[34].authors[4].name\",\"value\":\"Qingxiong Yang\"},{\"path\":\"references[0].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[32].authors[2].authorId\",\"value\":\"2135837\"},{\"path\":\"references[36].authors[5].authorId\",\"value\":\"1779453\"},{\"path\":\"references[14].authors[2].authorId\",\"value\":\"144309189\"},{\"path\":\"citations[7].authors[0].authorId\",\"value\":\"1581795258\"},{\"path\":\"references[7].authors[0].authorId\",\"value\":\"2106352399\"},{\"path\":\"references[7].authors[1].authorId\",\"value\":\"144876831\"},{\"path\":\"citations[7].authors[1].name\",\"value\":\"Zheng He\"},{\"path\":\"references[25].authors[0].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"references[34].url\",\"value\":\"https://www.semanticscholar.org/paper/006a6e6efc6582b57fbbf6c689e29b69a0be1ce2\"},{\"path\":\"references[3].doi\",\"value\":\"10.1162/153244304322972667\"},{\"path\":\"references[15].authors[4].authorId\",\"value\":\"153652752\"},{\"path\":\"references[32].url\",\"value\":\"https://www.semanticscholar.org/paper/b5f3e5d2912bedbcd9458952d664b08db6aed962\"},{\"path\":\"references[18].venue\",\"value\":\"ACM Multimedia\"},{\"path\":\"references[27].paperId\",\"value\":\"1b1eb9b758676f9b249ef17bb473cfd38c11e62d\"},{\"path\":\"references[5].paperId\",\"value\":\"b4018623293585e06e5ec159d11a9178f9f99380\"},{\"path\":\"references[1].doi\",\"value\":\"10.1109/CVPR.2000.854852\"},{\"path\":\"references[32].arxivId\",\"value\":\"1511.04587\"},{\"path\":\"citations[0].intent\",\"value\":\"[]\"},{\"path\":\"references[27].authors[2].name\",\"value\":\"Chao Liang\"},{\"path\":\"references[26].year\",\"value\":\"2014\"},{\"path\":\"references[29].venue\",\"value\":\"IEEE Transactions on Multimedia\"},{\"path\":\"references[34].authors[2].authorId\",\"value\":\"2548483\"},{\"path\":\"references[26].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[7].intent\",\"value\":\"[]\"},{\"path\":\"references[16].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[14].arxivId\",\"value\":\"\"},{\"path\":\"doi\",\"value\":\"10.1109/TIP.2019.2920510\"},{\"path\":\"citations[1].authors[0].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"references[15].authors[5].authorId\",\"value\":\"144768792\"},{\"path\":\"citations[6].authors[1].authorId\",\"value\":\"143707367\"},{\"path\":\"references[34].doi\",\"value\":\"10.24963/ijcai.2017/633\"},{\"path\":\"references[21].authors[0].name\",\"value\":\"Xiaoqiang Lu\"},{\"path\":\"references[34].authors[1].authorId\",\"value\":\"1519062623\"},{\"path\":\"references[10].paperId\",\"value\":\"2485c98aa44131d1a2f7d1355b1e372f2bb148ad\"},{\"path\":\"citations[2].title\",\"value\":\"Multi-Stage Degradation Homogenization for Super-Resolution of Face Images With Extreme Degradations\"},{\"path\":\"citations[5].isInfluential\",\"value\":\"false\"},{\"path\":\"references[37].authors[3].name\",\"value\":\"Jose Caballero\"},{\"path\":\"references[37].authors[8].authorId\",\"value\":\"152554375\"},{\"path\":\"references[1].url\",\"value\":\"https://www.semanticscholar.org/paper/66d890912381e2536d2dbc117a0ce59158c3be90\"},{\"path\":\"citations[2].venue\",\"value\":\"IEEE Transactions on Image Processing\"},{\"path\":\"topics[2].url\",\"value\":\"https://www.semanticscholar.org/topic/199704\"},{\"path\":\"references[4].isInfluential\",\"value\":\"false\"},{\"path\":\"url\",\"value\":\"https://www.semanticscholar.org/paper/d8c1ed5070958836eef2d2c239ac12963996f756\"},{\"path\":\"references[18].authors[3].authorId\",\"value\":\"144725609\"},{\"path\":\"references[22].authors[3].name\",\"value\":\"Xuelong Li\"},{\"path\":\"references[27].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"references[13].authors[1].authorId\",\"value\":\"47539666\"},{\"path\":\"references[31].authors[0].authorId\",\"value\":\"1732855\"},{\"path\":\"references[21].authors[1].name\",\"value\":\"Yuan Yuan\"},{\"path\":\"references[24].isInfluential\",\"value\":\"true\"},{\"path\":\"references[37].paperId\",\"value\":\"df0c54fe61f0ffb9f0e36a17c2038d9a1964cba3\"},{\"path\":\"references[17].authors[1].authorId\",\"value\":\"143607492\"},{\"path\":\"references[25].year\",\"value\":\"2014\"},{\"path\":\"references[25].arxivId\",\"value\":\"\"},{\"path\":\"references[35].intent[1]\",\"value\":\"methodology\"},{\"path\":\"citations[8].url\",\"value\":\"https://www.semanticscholar.org/paper/80746a36bd92dc2fe3338d5fc3a589e05d3278a5\"},{\"path\":\"references[24].authors[0].name\",\"value\":\"Xiaohui Dong\"},{\"path\":\"citations[7].authors[3].authorId\",\"value\":\"51360637\"},{\"path\":\"citations[7].title\",\"value\":\"Lightweight Progressive Residual Clique Network for Image Super-Resolution\"},{\"path\":\"references[26].url\",\"value\":\"https://www.semanticscholar.org/paper/c397408e784004240e866d0f31cea7b9e44fdd0c\"},{\"path\":\"citations[3].authors[0].authorId\",\"value\":\"38824959\"},{\"path\":\"citations[4].authors[2].name\",\"value\":\"Guangwei Gao\"},{\"path\":\"references[4].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[35].intent[0]\",\"value\":\"background\"},{\"path\":\"citations[7].venue\",\"value\":\"2020 IEEE 32nd International Conference on Tools with Artificial Intelligence (ICTAI)\"},{\"path\":\"references[34].authors[3].name\",\"value\":\"Linchao Bao\"},{\"path\":\"references[33].isInfluential\",\"value\":\"false\"},{\"path\":\"references[4].authors[0].name\",\"value\":\"Zhouchen Lin\"},{\"path\":\"references[24].url\",\"value\":\"https://www.semanticscholar.org/paper/3e649f31eb2916213d5b064dd4f3225ff689651e\"},{\"path\":\"references[10].authors[2].authorId\",\"value\":\"145455919\"},{\"path\":\"references[31].title\",\"value\":\"Seven Ways to Improve Example-Based Single Image Super Resolution\"},{\"path\":\"references[18].authors[3].name\",\"value\":\"Zhen Han\"},{\"path\":\"citations[7].authors[2].name\",\"value\":\"Zhongyuan Wang\"},{\"path\":\"topics[0].topicId\",\"value\":\"57450\"},{\"path\":\"topics[3].topicId\",\"value\":\"291901\"},{\"path\":\"references[6].arxivId\",\"value\":\"\"},{\"path\":\"references[10].isInfluential\",\"value\":\"true\"},{\"path\":\"citationVelocity\",\"value\":\"0\"},{\"path\":\"references[26].doi\",\"value\":\"10.1016/j.sigpro.2014.02.014\"},{\"path\":\"references[31].paperId\",\"value\":\"af0892ab043b1a37f3e8f81b148c66369d64d391\"},{\"path\":\"references[37].authors[0].name\",\"value\":\"C. Ledig\"},{\"path\":\"references[27].authors[0].authorId\",\"value\":\"2146032451\"},{\"path\":\"citations[4].authors[5].name\",\"value\":\"Jian Yang\"},{\"path\":\"references[17].isInfluential\",\"value\":\"false\"},{\"path\":\"references[9].arxivId\",\"value\":\"\"},{\"path\":\"references[18].authors[2].name\",\"value\":\"Kebin Huang\"},{\"path\":\"references[15].authors[1].name\",\"value\":\"Jianchao Yang\"},{\"path\":\"references[13].authors[0].authorId\",\"value\":\"3138386\"},{\"path\":\"references[34].year\",\"value\":\"2017\"},{\"path\":\"references[16].doi\",\"value\":\"10.1016/j.imavis.2009.11.005\"},{\"path\":\"citations[1].intent\",\"value\":\"[]\"},{\"path\":\"references[15].authors[2].name\",\"value\":\"Kai Yu\"},{\"path\":\"references[31].authors[2].name\",\"value\":\"L. Gool\"},{\"path\":\"references[0].intent[0]\",\"value\":\"background\"},{\"path\":\"references[3].url\",\"value\":\"https://www.semanticscholar.org/paper/8db95dbd08e4ee64fb258e5380e78cfa507ed94d\"},{\"path\":\"references[35].arxivId\",\"value\":\"1707.02921\"},{\"path\":\"references[14].authors[3].authorId\",\"value\":\"47539666\"},{\"path\":\"references[33].year\",\"value\":\"2017\"},{\"path\":\"citations[8].doi\",\"value\":\"10.1109/CVPRW50498.2020.00260\"},{\"path\":\"references[22].intent[0]\",\"value\":\"background\"},{\"path\":\"references[35].authors[3].authorId\",\"value\":\"40648435\"},{\"path\":\"references[15].authors[3].name\",\"value\":\"Fengjun Lv\"},{\"path\":\"references[11].paperId\",\"value\":\"2e38ff75a80ec92111261bf368781c7eef89eb14\"},{\"path\":\"references[33].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[31].doi\",\"value\":\"10.1109/CVPR.2016.206\"},{\"path\":\"references[18].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"citations[1].isInfluential\",\"value\":\"false\"},{\"path\":\"references[4].url\",\"value\":\"https://www.semanticscholar.org/paper/6254833a3e48df65a535678959aa2b670f54d465\"},{\"path\":\"references[36].paperId\",\"value\":\"bd8f77b7d3b9d272f7a68defc1412f73e5ac3135\"},{\"path\":\"citations[1].authors[2].name\",\"value\":\"Xianming Liu\"},{\"path\":\"references[18].url\",\"value\":\"https://www.semanticscholar.org/paper/fed5e5a9be8947aa553ea4f526405b672a2ac36c\"},{\"path\":\"references[28].authors[1].name\",\"value\":\"K. Lam\"},{\"path\":\"references[17].title\",\"value\":\"Image Super-Resolution Via Sparse Representation\"},{\"path\":\"references[35].url\",\"value\":\"https://www.semanticscholar.org/paper/7ba5d3808e117e7a68dc40331ce1d483ceeedcb2\"},{\"path\":\"citations[4].intent\",\"value\":\"[]\"},{\"path\":\"references[9].authors[0].name\",\"value\":\"N. Dalal\"},{\"path\":\"references[14].authors[2].name\",\"value\":\"Xin Fan\"},{\"path\":\"references[4].doi\",\"value\":\"10.1109/TPAMI.2004.1261081\"},{\"path\":\"references[26].authors[3].authorId\",\"value\":\"144725609\"},{\"path\":\"references[16].paperId\",\"value\":\"8b56e33f33e582f3e473dba573a16b598ed9bcdc\"},{\"path\":\"references[29].authors[2].name\",\"value\":\"Boqi Zhuang\"},{\"path\":\"references[3].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[8].arxivId\",\"value\":\"\"},{\"path\":\"references[24].authors[2].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"references[19].authors[0].authorId\",\"value\":\"39925162\"},{\"path\":\"references[28].title\",\"value\":\"Simultaneous Hallucination and Recognition of Low-Resolution Faces Based on Singular Value Decomposition\"},{\"path\":\"references[8].url\",\"value\":\"https://www.semanticscholar.org/paper/791d46aa9cdd40bc9d82067a2e9b71785c62838b\"},{\"path\":\"references[9].title\",\"value\":\"Histograms of oriented gradients for human detection\"},{\"path\":\"references[9].venue\",\"value\":\"2005 IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR'05)\"},{\"path\":\"references[18].authors[0].authorId\",\"value\":\"3216340\"},{\"path\":\"citations[0].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[3].authors[4].name\",\"value\":\"Raghavendra Ramachandra\"},{\"path\":\"references[0].authors[1].authorId\",\"value\":\"1767244\"},{\"path\":\"references[18].doi\",\"value\":\"10.1145/1873951.1874103\"},{\"path\":\"references[21].arxivId\",\"value\":\"\"},{\"path\":\"references[1].paperId\",\"value\":\"66d890912381e2536d2dbc117a0ce59158c3be90\"},{\"path\":\"references[37].year\",\"value\":\"2016\"},{\"path\":\"references[1].authors[0].name\",\"value\":\"S. Baker\"},{\"path\":\"references[12].authors[0].name\",\"value\":\"H. Greenspan\"},{\"path\":\"citations[3].doi\",\"value\":\"10.1109/TBIOM.2021.3059196\"},{\"path\":\"references[24].year\",\"value\":\"2014\"},{\"path\":\"references[17].venue\",\"value\":\"IEEE Transactions on Image Processing\"},{\"path\":\"citations[2].authors[3].name\",\"value\":\"Jiawei Zhang\"},{\"path\":\"references[17].authors[0].authorId\",\"value\":\"1706007\"},{\"path\":\"references[20].authors[1].authorId\",\"value\":\"144847940\"},{\"path\":\"citations[3].url\",\"value\":\"https://www.semanticscholar.org/paper/684dca76b28358a9cabf60283ab6dcc68ba17385\"},{\"path\":\"citations[4].authors[7].name\",\"value\":\"Jian Zhang\"},{\"path\":\"references[25].authors[3].authorId\",\"value\":\"144725609\"},{\"path\":\"references[28].venue\",\"value\":\"IEEE Transactions on Circuits and Systems for Video Technology\"},{\"path\":\"references[13].authors[1].name\",\"value\":\"Junping Zhang\"},{\"path\":\"references[8].doi\",\"value\":\"10.1109/TSMCC.2005.848171\"},{\"path\":\"references[32].authors[0].name\",\"value\":\"Jiwon Kim\"},{\"path\":\"citations[7].authors[4].authorId\",\"value\":\"2042656075\"},{\"path\":\"references[37].isInfluential\",\"value\":\"false\"},{\"path\":\"references[2].authors[1].name\",\"value\":\"Min Kyu Park\"},{\"path\":\"references[11].url\",\"value\":\"https://www.semanticscholar.org/paper/2e38ff75a80ec92111261bf368781c7eef89eb14\"},{\"path\":\"citations[4].authors[2].authorId\",\"value\":\"3306402\"},{\"path\":\"references[22].year\",\"value\":\"2013\"},{\"path\":\"references[18].authors[2].authorId\",\"value\":\"2111005\"},{\"path\":\"references[1].intent[0]\",\"value\":\"background\"},{\"path\":\"references[0].url\",\"value\":\"https://www.semanticscholar.org/paper/3d76ef8e61395a6e9c32627f1f108772d084e2e9\"},{\"path\":\"references[18].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[22].doi\",\"value\":\"10.1007/s11263-013-0645-9\"},{\"path\":\"citations[9].authors[2].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"references[24].paperId\",\"value\":\"3e649f31eb2916213d5b064dd4f3225ff689651e\"},{\"path\":\"citations[2].isInfluential\",\"value\":\"true\"},{\"path\":\"references[32].venue\",\"value\":\"2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\"},{\"path\":\"citations[9].authors[0].name\",\"value\":\"Liang Chen\"},{\"path\":\"references[33].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"references[7].doi\",\"value\":\"10.1109/ICME.2005.1521623\"},{\"path\":\"citations[3].isInfluential\",\"value\":\"false\"},{\"path\":\"references[23].paperId\",\"value\":\"baf38dbaaf81bfd250376ce7fc38d76c3821b309\"},{\"path\":\"citations[5].authors[4].authorId\",\"value\":\"2054086734\"},{\"path\":\"references[25].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"citations[2].authors[5].name\",\"value\":\"Linchao Bao\"},{\"path\":\"references[24].authors[5].name\",\"value\":\"Ge Gao\"},{\"path\":\"citations[7].paperId\",\"value\":\"1535eebff109eb753b695003599764991691bb62\"},{\"path\":\"references[0].doi\",\"value\":\"10.1109/34.655647\"},{\"path\":\"references[27].authors[3].authorId\",\"value\":\"1930238\"},{\"path\":\"citations[3].authors[1].name\",\"value\":\"Kartik Nighania\"},{\"path\":\"references[2].venue\",\"value\":\"IEEE Signal Process. Mag.\"},{\"path\":\"references[5].authors[1].authorId\",\"value\":\"1739816\"},{\"path\":\"references[22].url\",\"value\":\"https://www.semanticscholar.org/paper/5a0d82e4efb74b1d74baea9ec794c1c66e637571\"},{\"path\":\"references[31].url\",\"value\":\"https://www.semanticscholar.org/paper/af0892ab043b1a37f3e8f81b148c66369d64d391\"},{\"path\":\"authors[1].url\",\"value\":\"https://www.semanticscholar.org/author/9416881\"},{\"path\":\"references[7].paperId\",\"value\":\"6555c0e5764eacfcd09106450b6e3152daa8e449\"},{\"path\":\"references[18].arxivId\",\"value\":\"\"},{\"path\":\"references[14].authors[0].name\",\"value\":\"Hua Huang\"},{\"path\":\"references[24].authors[4].name\",\"value\":\"Liang Chen\"},{\"path\":\"references[21].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[22].authors[0].name\",\"value\":\"N. Wang\"},{\"path\":\"citations[3].authors[2].name\",\"value\":\"K. Upla\"},{\"path\":\"references[2].title\",\"value\":\"Super-resolution image reconstruction: a technical overview\"},{\"path\":\"references[32].title\",\"value\":\"Accurate Image Super-Resolution Using Very Deep Convolutional Networks\"},{\"path\":\"references[30].intent[1]\",\"value\":\"methodology\"},{\"path\":\"references[21].title\",\"value\":\"Image Super-Resolution Via Double Sparsity Regularized Manifold Learning\"},{\"path\":\"citations[9].intent[0]\",\"value\":\"background\"},{\"path\":\"references[17].paperId\",\"value\":\"f99d0bd1f1288fe35d46f719125844bfbaf544e3\"},{\"path\":\"references[36].intent[0]\",\"value\":\"methodology\"},{\"path\":\"references[6].authors[0].authorId\",\"value\":\"41210105\"},{\"path\":\"references[15].doi\",\"value\":\"10.1109/CVPR.2010.5540018\"},{\"path\":\"references[23].authors[3].name\",\"value\":\"Yang Xia\"},{\"path\":\"references[3].isInfluential\",\"value\":\"false\"},{\"path\":\"references[11].authors[0].authorId\",\"value\":\"1706007\"},{\"path\":\"citations[0].doi\",\"value\":\"10.1016/j.eswa.2021.116141\"},{\"path\":\"references[35].isInfluential\",\"value\":\"true\"},{\"path\":\"references[8].authors[1].name\",\"value\":\"Xiaoou Tang\"},{\"path\":\"references[34].authors[3].authorId\",\"value\":\"2780029\"},{\"path\":\"references[30].intent[0]\",\"value\":\"background\"},{\"path\":\"references[33].authors[3].name\",\"value\":\"Qing Li\"},{\"path\":\"references[12].authors[0].authorId\",\"value\":\"143942875\"},{\"path\":\"references[30].paperId\",\"value\":\"66e9dc728b5041271bff0cd6ac0d7eadcd88442f\"},{\"path\":\"references[32].authors[1].authorId\",\"value\":\"2119170990\"},{\"path\":\"references[21].venue\",\"value\":\"IEEE Transactions on Circuits and Systems for Video Technology\"},{\"path\":\"references[23].venue\",\"value\":\"2013 IEEE International Conference on Image Processing\"},{\"path\":\"references[3].authors[1].name\",\"value\":\"S. Roweis\"},{\"path\":\"references[6].authors[1].authorId\",\"value\":\"1747569\"},{\"path\":\"references[2].arxivId\",\"value\":\"\"},{\"path\":\"citations[5].arxivId\",\"value\":\"\"},{\"path\":\"references[32].authors[2].name\",\"value\":\"Kyoung Mu Lee\"},{\"path\":\"references[33].authors[3].authorId\",\"value\":\"1930238\"},{\"path\":\"references[11].authors[1].authorId\",\"value\":\"2109238630\"},{\"path\":\"references[37].arxivId\",\"value\":\"1609.04802\"},{\"path\":\"references[32].authors[0].authorId\",\"value\":\"3968500\"},{\"path\":\"citations[1].paperId\",\"value\":\"0aff8d059bccd20014f250b8e87cf205dfc04f5b\"},{\"path\":\"references[4].venue\",\"value\":\"\"},{\"path\":\"citations[9].authors[3].name\",\"value\":\"Jiawei Zhang\"},{\"path\":\"references[2].authors[0].name\",\"value\":\"Sung Cheol Park\"},{\"path\":\"references[29].isInfluential\",\"value\":\"false\"},{\"path\":\"references[33].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"references[2].isInfluential\",\"value\":\"false\"},{\"path\":\"citations[5].authors[0].authorId\",\"value\":\"36034272\"},{\"path\":\"references[12].venue\",\"value\":\"Comput. J.\"},{\"path\":\"references[23].authors[4].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"references[7].url\",\"value\":\"https://www.semanticscholar.org/paper/6555c0e5764eacfcd09106450b6e3152daa8e449\"},{\"path\":\"references[33].authors[4].authorId\",\"value\":\"2115884025\"},{\"path\":\"paperId\",\"value\":\"d8c1ed5070958836eef2d2c239ac12963996f756\"},{\"path\":\"references[32].authors[1].name\",\"value\":\"Jung Kwon Lee\"},{\"path\":\"references[7].authors[3].authorId\",\"value\":\"1703601\"},{\"path\":\"references[5].authors[0].authorId\",\"value\":\"120076009\"},{\"path\":\"references[34].title\",\"value\":\"Learning to Hallucinate Face Images via Component Generation and Enhancement\"},{\"path\":\"references[19].authors[0].name\",\"value\":\"Hua Huang\"},{\"path\":\"citations[0].url\",\"value\":\"https://www.semanticscholar.org/paper/f425c983257ace8b18604286b2f1b602db213046\"},{\"path\":\"abstract\",\"value\":\"In this paper, we focus on restoring high-resolution facial images under noisy low-resolution scenarios. This problem is a challenging problem as the most important structures and details of captured facial images are missing. To address this problem, we propose a novel local patch-based face super-resolution (FSR) method via the joint learning of the contextual model. The contextual model is based on the topology consisting of contextual sub-patches, which provide more useful structural information than the commonly used local contextual structures due to the finer patch size. In this way, the contextual models are able to recover the missing local structures in target patches. In order to further strengthen the structural compensation function of contextual topology, we introduce the recognition feature as additional regularity. Based on the contextual model, we formulate the super-resolved procedure as a contextual joint representation with respect to the target patch and its adjacent patches. The high-resolution image is obtained by weighting contextual estimations. Both quantitative and qualitative validations show that the proposed method performs favorably against state-of-the-art algorithms.\"},{\"path\":\"citations[8].authors[2].name\",\"value\":\"Liang Chen\"},{\"path\":\"citations[9].authors[4].name\",\"value\":\"Yi Wu\"},{\"path\":\"references[5].arxivId\",\"value\":\"\"},{\"path\":\"references[6].authors[3].authorId\",\"value\":\"1689350\"},{\"path\":\"references[33].authors[2].name\",\"value\":\"Zhen Han\"},{\"path\":\"references[12].title\",\"value\":\"Super-Resolution in Medical Imaging\"},{\"path\":\"references[34].arxivId\",\"value\":\"1708.00223\"},{\"path\":\"references[6].intent[0]\",\"value\":\"background\"},{\"path\":\"references[23].title\",\"value\":\"A joint learning based face hallucination approach for low quality face image\"},{\"path\":\"references[8].authors[0].name\",\"value\":\"Xiaogang Wang\"},{\"path\":\"references[4].title\",\"value\":\"Fundamental limits of reconstruction-based superresolution algorithms under local translation\"},{\"path\":\"citations[4].authors[0].authorId\",\"value\":\"3306402\"},{\"path\":\"references[29].authors[4].name\",\"value\":\"C. Yeh\"},{\"path\":\"references[34].authors[4].authorId\",\"value\":\"1777434\"},{\"path\":\"citations[8].arxivId\",\"value\":\"\"},{\"path\":\"references[7].authors[4].authorId\",\"value\":\"3179335\"},{\"path\":\"references[25].authors[0].authorId\",\"value\":\"1708439\"},{\"path\":\"citations[2].authors[2].name\",\"value\":\"Junjun Jiang\"},{\"path\":\"citations[8].authors[1].name\",\"value\":\"Yi Wu\"},{\"path\":\"citations[5].authors[2].authorId\",\"value\":\"1904697\"},{\"path\":\"references[25].url\",\"value\":\"https://www.semanticscholar.org/paper/51ebd2067aa0e66d0d66e2b018b95f5e85993206\"},{\"path\":\"citations[7].url\",\"value\":\"https://www.semanticscholar.org/paper/1535eebff109eb753b695003599764991691bb62\"},{\"path\":\"citations[5].authors[3].authorId\",\"value\":\"143663452\"},{\"path\":\"references[26].authors[1].authorId\",\"value\":\"144328091\"},{\"path\":\"citations[9].title\",\"value\":\"Robust Face Super-Resolution via Position Relation Model Based on Global Face Context\"},{\"path\":\"topics[1].topic\",\"value\":\"Face\"},{\"path\":\"citations[7].doi\",\"value\":\"10.1109/ICTAI50040.2020.00122\"},{\"path\":\"is_publisher_licensed\",\"value\":\"true\"},{\"path\":\"citations[9].venue\",\"value\":\"IEEE Transactions on Image Processing\"},{\"path\":\"references[15].intent[0]\",\"value\":\"background\"},{\"path\":\"citations[5].authors[1].authorId\",\"value\":\"1476719517\"},{\"path\":\"references[33].authors[4].name\",\"value\":\"Zheng Lu\"},{\"path\":\"references[28].isInfluential\",\"value\":\"false\"},{\"path\":\"references[27].intent\",\"value\":\"[]\"},{\"path\":\"references[1].isInfluential\",\"value\":\"false\"},{\"path\":\"references[23].authors[1].name\",\"value\":\"R. Hu\"},{\"path\":\"references[36].isInfluential\",\"value\":\"false\"},{\"path\":\"references[6].authors[2].authorId\",\"value\":\"2387140\"},{\"path\":\"corpusId\",\"value\":\"184485848\"},{\"path\":\"references[25].doi\",\"value\":\"10.1109/TMM.2014.2311320\"},{\"path\":\"references[15].url\",\"value\":\"https://www.semanticscholar.org/paper/2f7713dcc35e7c05becf3be5522f36c9546b0364\"},{\"path\":\"citations[2].authors[1].name\",\"value\":\"Jinshan Pan\"},{\"path\":\"references[29].authors[0].name\",\"value\":\"Li-Wei Kang\"},{\"path\":\"citations[4].title\",\"value\":\"Constructing multilayer locality-constrained matrix regression framework for noise robust face super-resolution\"},{\"path\":\"references[24].intent[0]\",\"value\":\"background\"},{\"path\":\"references[23].authors[2].name\",\"value\":\"Zhen Han\"},{\"path\":\"citations[9].intent[1]\",\"value\":\"methodology\"},{\"path\":\"citations[4].venue\",\"value\":\"Pattern Recognit.\"},{\"path\":\"citations[2].arxivId\",\"value\":\"\"},{\"path\":\"references[33].authors[2].authorId\",\"value\":\"144725609\"},{\"path\":\"references[26].authors[2].authorId\",\"value\":\"143869248\"},{\"path\":\"citations[2].authors[0].name\",\"value\":\"Liang Chen\"},{\"path\":\"references[29].authors[1].name\",\"value\":\"Chih-Chung Hsu\"},{\"path\":\"references[35].doi\",\"value\":\"10.1109/CVPRW.2017.151\"}],\"originalResponse\":{\"is_publisher_licensed\":true,\"venue\":\"IEEE Transactions on Image Processing\",\"references\":[{\"venue\":\"IEEE Trans. Pattern Anal. Mach. Intell.\",\"isInfluential\":true,\"year\":1998,\"title\":\"Neural Network-Based Face Detection\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"3d76ef8e61395a6e9c32627f1f108772d084e2e9\",\"url\":\"https://www.semanticscholar.org/paper/3d76ef8e61395a6e9c32627f1f108772d084e2e9\",\"authors\":[{\"name\":\"H. Rowley\",\"authorId\":\"39682833\"},{\"name\":\"S. Baluja\",\"authorId\":\"1767244\"},{\"name\":\"T. Kanade\",\"authorId\":\"1733113\"}],\"doi\":\"10.1109/34.655647\"},{\"venue\":\"Proceedings IEEE Conference on Computer Vision and Pattern Recognition. CVPR 2000 (Cat. No.PR00662)\",\"isInfluential\":false,\"year\":2000,\"title\":\"Limits on super-resolution and how to break them\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"66d890912381e2536d2dbc117a0ce59158c3be90\",\"url\":\"https://www.semanticscholar.org/paper/66d890912381e2536d2dbc117a0ce59158c3be90\",\"authors\":[{\"name\":\"S. Baker\",\"authorId\":\"145347688\"},{\"name\":\"T. Kanade\",\"authorId\":\"1733113\"}],\"doi\":\"10.1109/CVPR.2000.854852\"},{\"venue\":\"IEEE Signal Process. Mag.\",\"isInfluential\":false,\"year\":2003,\"title\":\"Super-resolution image reconstruction: a technical overview\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"7c850f4c56f184891f3ccfe2de6213881dc0e08c\",\"url\":\"https://www.semanticscholar.org/paper/7c850f4c56f184891f3ccfe2de6213881dc0e08c\",\"authors\":[{\"name\":\"Sung Cheol Park\",\"authorId\":\"2115277167\"},{\"name\":\"Min Kyu Park\",\"authorId\":\"2149269035\"},{\"name\":\"M. Kang\",\"authorId\":\"1839581\"}],\"doi\":\"10.1109/MSP.2003.1203207\"},{\"venue\":\"J. Mach. Learn. Res.\",\"isInfluential\":false,\"year\":2003,\"title\":\"Think Globally, Fit Locally: Unsupervised Learning of Low Dimensional Manifold\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"8db95dbd08e4ee64fb258e5380e78cfa507ed94d\",\"url\":\"https://www.semanticscholar.org/paper/8db95dbd08e4ee64fb258e5380e78cfa507ed94d\",\"authors\":[{\"name\":\"L. Saul\",\"authorId\":\"1796044\"},{\"name\":\"S. Roweis\",\"authorId\":\"9330607\"}],\"doi\":\"10.1162/153244304322972667\"},{\"venue\":\"\",\"isInfluential\":false,\"year\":2004,\"title\":\"Fundamental limits of reconstruction-based superresolution algorithms under local translation\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"6254833a3e48df65a535678959aa2b670f54d465\",\"url\":\"https://www.semanticscholar.org/paper/6254833a3e48df65a535678959aa2b670f54d465\",\"authors\":[{\"name\":\"Zhouchen Lin\",\"authorId\":\"33383055\"},{\"name\":\"H. Shum\",\"authorId\":\"93596028\"}],\"doi\":\"10.1109/TPAMI.2004.1261081\"},{\"venue\":\"CVPR 2004\",\"isInfluential\":true,\"year\":2004,\"title\":\"Super-resolution through neighbor embedding\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"b4018623293585e06e5ec159d11a9178f9f99380\",\"url\":\"https://www.semanticscholar.org/paper/b4018623293585e06e5ec159d11a9178f9f99380\",\"authors\":[{\"name\":\"Hong Chang\",\"authorId\":\"120076009\"},{\"name\":\"D. Yeung\",\"authorId\":\"1739816\"},{\"name\":\"Yimin Xiong\",\"authorId\":\"2112719095\"}],\"doi\":\"10.1109/CVPR.2004.1315043\"},{\"venue\":\"IEEE Transactions on Image Processing\",\"isInfluential\":true,\"year\":2004,\"title\":\"Image quality assessment: from error visibility to structural similarity\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"eae2e0fa72e898c289365c0af16daf57a7a6cf40\",\"url\":\"https://www.semanticscholar.org/paper/eae2e0fa72e898c289365c0af16daf57a7a6cf40\",\"authors\":[{\"name\":\"Zhou Wang\",\"authorId\":\"41210105\"},{\"name\":\"A. Bovik\",\"authorId\":\"1747569\"},{\"name\":\"H. Sheikh\",\"authorId\":\"2387140\"},{\"name\":\"Eero P. Simoncelli\",\"authorId\":\"1689350\"}],\"doi\":\"10.1109/TIP.2003.819861\"},{\"venue\":\"2005 IEEE International Conference on Multimedia and Expo\",\"isInfluential\":false,\"year\":2005,\"title\":\"Neighborhood issue in single-frame image super-resolution\",\"intent\":[],\"arxivId\":null,\"paperId\":\"6555c0e5764eacfcd09106450b6e3152daa8e449\",\"url\":\"https://www.semanticscholar.org/paper/6555c0e5764eacfcd09106450b6e3152daa8e449\",\"authors\":[{\"name\":\"Xu Su\",\"authorId\":\"2106352399\"},{\"name\":\"Q. Tian\",\"authorId\":\"144876831\"},{\"name\":\"Q. Xue\",\"authorId\":\"2055029893\"},{\"name\":\"N. Sebe\",\"authorId\":\"1703601\"},{\"name\":\"J. Ma\",\"authorId\":\"3179335\"}],\"doi\":\"10.1109/ICME.2005.1521623\"},{\"venue\":\"IEEE Trans. Syst. Man Cybern. Part C\",\"isInfluential\":false,\"year\":2005,\"title\":\"Hallucinating face by eigentransformation\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"791d46aa9cdd40bc9d82067a2e9b71785c62838b\",\"url\":\"https://www.semanticscholar.org/paper/791d46aa9cdd40bc9d82067a2e9b71785c62838b\",\"authors\":[{\"name\":\"Xiaogang Wang\",\"authorId\":\"31843833\"},{\"name\":\"Xiaoou Tang\",\"authorId\":\"50295995\"}],\"doi\":\"10.1109/TSMCC.2005.848171\"},{\"venue\":\"2005 IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR'05)\",\"isInfluential\":true,\"year\":2005,\"title\":\"Histograms of oriented gradients for human detection\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"cec734d7097ab6b1e60d95228ffd64248eb89d66\",\"url\":\"https://www.semanticscholar.org/paper/cec734d7097ab6b1e60d95228ffd64248eb89d66\",\"authors\":[{\"name\":\"N. Dalal\",\"authorId\":\"48950628\"},{\"name\":\"B. Triggs\",\"authorId\":\"1756114\"}],\"doi\":\"10.1109/CVPR.2005.177\"},{\"venue\":\"IEEE Transactions on Systems, Man, and Cybernetics - Part A: Systems and Humans\",\"isInfluential\":true,\"year\":2008,\"title\":\"The CAS-PEAL Large-Scale Chinese Face Database and Baseline Evaluations\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"2485c98aa44131d1a2f7d1355b1e372f2bb148ad\",\"url\":\"https://www.semanticscholar.org/paper/2485c98aa44131d1a2f7d1355b1e372f2bb148ad\",\"authors\":[{\"name\":\"W. Gao\",\"authorId\":\"48385803\"},{\"name\":\"B. Cao\",\"authorId\":\"48437987\"},{\"name\":\"S. Shan\",\"authorId\":\"145455919\"},{\"name\":\"Xilin Chen\",\"authorId\":\"46772547\"},{\"name\":\"Delong Zhou\",\"authorId\":\"2104086\"},{\"name\":\"Xiaohua Zhang\",\"authorId\":\"2108584873\"},{\"name\":\"Debin Zhao\",\"authorId\":\"1725937\"}],\"doi\":\"10.1109/TSMCA.2007.909557\"},{\"venue\":\"2008 15th IEEE International Conference on Image Processing\",\"isInfluential\":false,\"year\":2008,\"title\":\"Face hallucination VIA sparse coding\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"2e38ff75a80ec92111261bf368781c7eef89eb14\",\"url\":\"https://www.semanticscholar.org/paper/2e38ff75a80ec92111261bf368781c7eef89eb14\",\"authors\":[{\"name\":\"Jianchao Yang\",\"authorId\":\"1706007\"},{\"name\":\"Hao Tang\",\"authorId\":\"2109238630\"},{\"name\":\"Yi Ma\",\"authorId\":\"50032052\"},{\"name\":\"Thomas S. Huang\",\"authorId\":\"153652752\"}],\"doi\":\"10.1109/ICIP.2008.4711992\"},{\"venue\":\"Comput. J.\",\"isInfluential\":false,\"year\":2009,\"title\":\"Super-Resolution in Medical Imaging\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"b189282ec4c65f4229105e1b62e0012f7ab551cb\",\"url\":\"https://www.semanticscholar.org/paper/b189282ec4c65f4229105e1b62e0012f7ab551cb\",\"authors\":[{\"name\":\"H. Greenspan\",\"authorId\":\"143942875\"}],\"doi\":\"10.1093/comjnl/bxm075\"},{\"venue\":\"2009 IEEE International Conference on Multimedia and Expo\",\"isInfluential\":false,\"year\":2009,\"title\":\"Position-based face hallucination method\",\"intent\":[],\"arxivId\":null,\"paperId\":\"d035c8bef0e0619fd68ab2cc1c9e71dfd730aefe\",\"url\":\"https://www.semanticscholar.org/paper/d035c8bef0e0619fd68ab2cc1c9e71dfd730aefe\",\"authors\":[{\"name\":\"Xiang-Wang Ma\",\"authorId\":\"3138386\"},{\"name\":\"Junping Zhang\",\"authorId\":\"47539666\"},{\"name\":\"C. Qi\",\"authorId\":\"145175070\"}],\"doi\":\"10.1109/ICME.2009.5202492\"},{\"venue\":\"Pattern Recognit.\",\"isInfluential\":false,\"year\":2010,\"title\":\"Super-resolution of human face image using canonical correlation analysis\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"09ad57265a1f0dfd60b3360daa499f5e93059c22\",\"url\":\"https://www.semanticscholar.org/paper/09ad57265a1f0dfd60b3360daa499f5e93059c22\",\"authors\":[{\"name\":\"Hua Huang\",\"authorId\":\"39925162\"},{\"name\":\"Hui He\",\"authorId\":\"2111891265\"},{\"name\":\"Xin Fan\",\"authorId\":\"144309189\"},{\"name\":\"Junping Zhang\",\"authorId\":\"47539666\"}],\"doi\":\"10.1016/j.patcog.2010.02.007\"},{\"venue\":\"2010 IEEE Computer Society Conference on Computer Vision and Pattern Recognition\",\"isInfluential\":false,\"year\":2010,\"title\":\"Locality-constrained Linear Coding for image classification\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"2f7713dcc35e7c05becf3be5522f36c9546b0364\",\"url\":\"https://www.semanticscholar.org/paper/2f7713dcc35e7c05becf3be5522f36c9546b0364\",\"authors\":[{\"name\":\"Jinjun Wang\",\"authorId\":\"71563118\"},{\"name\":\"Jianchao Yang\",\"authorId\":\"1706007\"},{\"name\":\"Kai Yu\",\"authorId\":\"144782042\"},{\"name\":\"Fengjun Lv\",\"authorId\":\"39157653\"},{\"name\":\"Thomas S. Huang\",\"authorId\":\"153652752\"},{\"name\":\"Yihong Gong\",\"authorId\":\"144768792\"}],\"doi\":\"10.1109/CVPR.2010.5540018\"},{\"venue\":\"Image Vis. Comput.\",\"isInfluential\":true,\"year\":2010,\"title\":\"A new ranking method for principal components analysis and its application to face image analysis\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"8b56e33f33e582f3e473dba573a16b598ed9bcdc\",\"url\":\"https://www.semanticscholar.org/paper/8b56e33f33e582f3e473dba573a16b598ed9bcdc\",\"authors\":[{\"name\":\"C. Thomaz\",\"authorId\":\"2363813\"},{\"name\":\"G. Giraldi\",\"authorId\":\"1688283\"}],\"doi\":\"10.1016/j.imavis.2009.11.005\"},{\"venue\":\"IEEE Transactions on Image Processing\",\"isInfluential\":false,\"year\":2010,\"title\":\"Image Super-Resolution Via Sparse Representation\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"f99d0bd1f1288fe35d46f719125844bfbaf544e3\",\"url\":\"https://www.semanticscholar.org/paper/f99d0bd1f1288fe35d46f719125844bfbaf544e3\",\"authors\":[{\"name\":\"Jianchao Yang\",\"authorId\":\"1706007\"},{\"name\":\"John Wright\",\"authorId\":\"143607492\"},{\"name\":\"Thomas S. Huang\",\"authorId\":\"153652752\"},{\"name\":\"Yi Ma\",\"authorId\":\"50032052\"}],\"doi\":\"10.1109/TIP.2010.2050625\"},{\"venue\":\"ACM Multimedia\",\"isInfluential\":false,\"year\":2010,\"title\":\"Face hallucination with shape parameters projection constraint\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"fed5e5a9be8947aa553ea4f526405b672a2ac36c\",\"url\":\"https://www.semanticscholar.org/paper/fed5e5a9be8947aa553ea4f526405b672a2ac36c\",\"authors\":[{\"name\":\"Chengdong Lan\",\"authorId\":\"3216340\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Kebin Huang\",\"authorId\":\"2111005\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"}],\"doi\":\"10.1145/1873951.1874103\"},{\"venue\":\"IEEE Transactions on Circuits and Systems for Video Technology\",\"isInfluential\":false,\"year\":2011,\"title\":\"Fast Facial Image Super-Resolution via Local Linear Transformations for Resource-Limited Applications\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"510257c8cedc079aae88ccbf3dd10a84051c8fdc\",\"url\":\"https://www.semanticscholar.org/paper/510257c8cedc079aae88ccbf3dd10a84051c8fdc\",\"authors\":[{\"name\":\"Hua Huang\",\"authorId\":\"39925162\"},{\"name\":\"Ning Wu\",\"authorId\":\"2068345080\"}],\"doi\":\"10.1109/TCSVT.2011.2163461\"},{\"venue\":\"2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)\",\"isInfluential\":true,\"year\":2012,\"title\":\"An efficient local-structure-based face-hallucination method\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"e604febddc6294574cb6ca32d9f3e9af690e3200\",\"url\":\"https://www.semanticscholar.org/paper/e604febddc6294574cb6ca32d9f3e9af690e3200\",\"authors\":[{\"name\":\"Hui Zhuo\",\"authorId\":\"2064762548\"},{\"name\":\"K. Lam\",\"authorId\":\"144847940\"}],\"doi\":\"10.1109/ICASSP.2012.6288119\"},{\"venue\":\"IEEE Transactions on Circuits and Systems for Video Technology\",\"isInfluential\":false,\"year\":2013,\"title\":\"Image Super-Resolution Via Double Sparsity Regularized Manifold Learning\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"170102b7809b43691b06618cdbbc90c8dbc2dd27\",\"url\":\"https://www.semanticscholar.org/paper/170102b7809b43691b06618cdbbc90c8dbc2dd27\",\"authors\":[{\"name\":\"Xiaoqiang Lu\",\"authorId\":\"7828998\"},{\"name\":\"Yuan Yuan\",\"authorId\":null},{\"name\":\"Pingkun Yan\",\"authorId\":\"144855557\"}],\"doi\":\"10.1109/TCSVT.2013.2244798\"},{\"venue\":\"International Journal of Computer Vision\",\"isInfluential\":false,\"year\":2013,\"title\":\"A Comprehensive Survey to Face Hallucination\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"5a0d82e4efb74b1d74baea9ec794c1c66e637571\",\"url\":\"https://www.semanticscholar.org/paper/5a0d82e4efb74b1d74baea9ec794c1c66e637571\",\"authors\":[{\"name\":\"N. Wang\",\"authorId\":\"144050305\"},{\"name\":\"D. Tao\",\"authorId\":\"143719920\"},{\"name\":\"Xinbo Gao\",\"authorId\":\"10699750\"},{\"name\":\"Xuelong Li\",\"authorId\":\"67180560\"},{\"name\":\"Jie Li\",\"authorId\":\"2149869567\"}],\"doi\":\"10.1007/s11263-013-0645-9\"},{\"venue\":\"2013 IEEE International Conference on Image Processing\",\"isInfluential\":false,\"year\":2013,\"title\":\"A joint learning based face hallucination approach for low quality face image\",\"intent\":[],\"arxivId\":null,\"paperId\":\"baf38dbaaf81bfd250376ce7fc38d76c3821b309\",\"url\":\"https://www.semanticscholar.org/paper/baf38dbaaf81bfd250376ce7fc38d76c3821b309\",\"authors\":[{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"},{\"name\":\"Yang Xia\",\"authorId\":\"2111131284\"},{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"}],\"doi\":\"10.1109/ICIP.2013.6738201\"},{\"venue\":\"PCM\",\"isInfluential\":true,\"year\":2014,\"title\":\"Noise Face Image Hallucination via Data-Driven Local Eigentransformation\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"3e649f31eb2916213d5b064dd4f3225ff689651e\",\"url\":\"https://www.semanticscholar.org/paper/3e649f31eb2916213d5b064dd4f3225ff689651e\",\"authors\":[{\"name\":\"Xiaohui Dong\",\"authorId\":\"2118187952\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"},{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"},{\"name\":\"Ge Gao\",\"authorId\":\"144398790\"}],\"doi\":\"10.1007/978-3-319-13168-9_19\"},{\"venue\":\"IEEE Transactions on Multimedia\",\"isInfluential\":true,\"year\":2014,\"title\":\"Noise Robust Face Hallucination via Locality-Constrained Representation\",\"intent\":[\"background\",\"methodology\",\"result\"],\"arxivId\":null,\"paperId\":\"51ebd2067aa0e66d0d66e2b018b95f5e85993206\",\"url\":\"https://www.semanticscholar.org/paper/51ebd2067aa0e66d0d66e2b018b95f5e85993206\",\"authors\":[{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Zhongyuan Wang\",\"authorId\":\"38655501\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"}],\"doi\":\"10.1109/TMM.2014.2311320\"},{\"venue\":\"Signal Process.\",\"isInfluential\":false,\"year\":2014,\"title\":\"Face image super-resolution through locality-induced support regression\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"c397408e784004240e866d0f31cea7b9e44fdd0c\",\"url\":\"https://www.semanticscholar.org/paper/c397408e784004240e866d0f31cea7b9e44fdd0c\",\"authors\":[{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Chao Liang\",\"authorId\":\"143869248\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"},{\"name\":\"Chunjie Zhang\",\"authorId\":\"1713887\"}],\"doi\":\"10.1016/j.sigpro.2014.02.014\"},{\"venue\":\"Multimedia Tools and Applications\",\"isInfluential\":false,\"year\":2015,\"title\":\"A novel face super resolution approach for noisy images using contour feature and standard deviation prior\",\"intent\":[],\"arxivId\":null,\"paperId\":\"1b1eb9b758676f9b249ef17bb473cfd38c11e62d\",\"url\":\"https://www.semanticscholar.org/paper/1b1eb9b758676f9b249ef17bb473cfd38c11e62d\",\"authors\":[{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Chao Liang\",\"authorId\":\"143869248\"},{\"name\":\"Qing Li\",\"authorId\":\"1930238\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"}],\"doi\":\"10.1007/s11042-015-3145-9\"},{\"venue\":\"IEEE Transactions on Circuits and Systems for Video Technology\",\"isInfluential\":false,\"year\":2015,\"title\":\"Simultaneous Hallucination and Recognition of Low-Resolution Faces Based on Singular Value Decomposition\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"91b1a59b9e0e7f4db0828bf36654b84ba53b0557\",\"url\":\"https://www.semanticscholar.org/paper/91b1a59b9e0e7f4db0828bf36654b84ba53b0557\",\"authors\":[{\"name\":\"Muwei Jian\",\"authorId\":\"1783889\"},{\"name\":\"K. Lam\",\"authorId\":\"144847940\"}],\"doi\":\"10.1109/TCSVT.2015.2400772\"},{\"venue\":\"IEEE Transactions on Multimedia\",\"isInfluential\":false,\"year\":2015,\"title\":\"Learning-Based Joint Super-Resolution and Deblocking for a Highly Compressed Image\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"9c0cda8cb2337fb0cf78051bd0fc6b086d7efbfc\",\"url\":\"https://www.semanticscholar.org/paper/9c0cda8cb2337fb0cf78051bd0fc6b086d7efbfc\",\"authors\":[{\"name\":\"Li-Wei Kang\",\"authorId\":\"1943622\"},{\"name\":\"Chih-Chung Hsu\",\"authorId\":\"3192517\"},{\"name\":\"Boqi Zhuang\",\"authorId\":\"2644084\"},{\"name\":\"Chia-Wen Lin\",\"authorId\":\"1685088\"},{\"name\":\"C. Yeh\",\"authorId\":\"1692617\"}],\"doi\":\"10.1109/TMM.2015.2434216\"},{\"venue\":\"IEEE Transactions on Pattern Analysis and Machine Intelligence\",\"isInfluential\":true,\"year\":2014,\"title\":\"Image Super-Resolution Using Deep Convolutional Networks\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":\"1501.00092\",\"paperId\":\"66e9dc728b5041271bff0cd6ac0d7eadcd88442f\",\"url\":\"https://www.semanticscholar.org/paper/66e9dc728b5041271bff0cd6ac0d7eadcd88442f\",\"authors\":[{\"name\":\"Chao Dong\",\"authorId\":\"30459277\"},{\"name\":\"Chen Change Loy\",\"authorId\":\"1717179\"},{\"name\":\"Kaiming He\",\"authorId\":\"39353098\"},{\"name\":\"Xiaoou Tang\",\"authorId\":\"50295995\"}],\"doi\":\"10.1109/TPAMI.2015.2439281\"},{\"venue\":\"2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\",\"isInfluential\":false,\"year\":2015,\"title\":\"Seven Ways to Improve Example-Based Single Image Super Resolution\",\"intent\":[\"methodology\"],\"arxivId\":\"1511.02228\",\"paperId\":\"af0892ab043b1a37f3e8f81b148c66369d64d391\",\"url\":\"https://www.semanticscholar.org/paper/af0892ab043b1a37f3e8f81b148c66369d64d391\",\"authors\":[{\"name\":\"R. Timofte\",\"authorId\":\"1732855\"},{\"name\":\"R. Rothe\",\"authorId\":\"2173683\"},{\"name\":\"L. Gool\",\"authorId\":\"1681236\"}],\"doi\":\"10.1109/CVPR.2016.206\"},{\"venue\":\"2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\",\"isInfluential\":true,\"year\":2015,\"title\":\"Accurate Image Super-Resolution Using Very Deep Convolutional Networks\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":\"1511.04587\",\"paperId\":\"b5f3e5d2912bedbcd9458952d664b08db6aed962\",\"url\":\"https://www.semanticscholar.org/paper/b5f3e5d2912bedbcd9458952d664b08db6aed962\",\"authors\":[{\"name\":\"Jiwon Kim\",\"authorId\":\"3968500\"},{\"name\":\"Jung Kwon Lee\",\"authorId\":\"2119170990\"},{\"name\":\"Kyoung Mu Lee\",\"authorId\":\"2135837\"}],\"doi\":\"10.1109/CVPR.2016.182\"},{\"venue\":\"Multimedia Tools and Applications\",\"isInfluential\":false,\"year\":2017,\"title\":\"Face super resolution based on parent patch prior for VLQ scenarios\",\"intent\":[\"methodology\"],\"arxivId\":null,\"paperId\":\"ddfc978b3a149015c9e517fbfe1b8563df5e7356\",\"url\":\"https://www.semanticscholar.org/paper/ddfc978b3a149015c9e517fbfe1b8563df5e7356\",\"authors\":[{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"},{\"name\":\"R. Hu\",\"authorId\":\"144328091\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"},{\"name\":\"Qing Li\",\"authorId\":\"1930238\"},{\"name\":\"Zheng Lu\",\"authorId\":\"2115884025\"}],\"doi\":\"10.1007/s11042-016-3611-z\"},{\"venue\":\"IJCAI\",\"isInfluential\":false,\"year\":2017,\"title\":\"Learning to Hallucinate Face Images via Component Generation and Enhancement\",\"intent\":[\"methodology\"],\"arxivId\":\"1708.00223\",\"paperId\":\"006a6e6efc6582b57fbbf6c689e29b69a0be1ce2\",\"url\":\"https://www.semanticscholar.org/paper/006a6e6efc6582b57fbbf6c689e29b69a0be1ce2\",\"authors\":[{\"name\":\"Yibing Song\",\"authorId\":\"2255687\"},{\"name\":\"Jiawei Zhang\",\"authorId\":\"1519062623\"},{\"name\":\"Shengfeng He\",\"authorId\":\"2548483\"},{\"name\":\"Linchao Bao\",\"authorId\":\"2780029\"},{\"name\":\"Qingxiong Yang\",\"authorId\":\"1777434\"}],\"doi\":\"10.24963/ijcai.2017/633\"},{\"venue\":\"2017 IEEE Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)\",\"isInfluential\":true,\"year\":2017,\"title\":\"Enhanced Deep Residual Networks for Single Image Super-Resolution\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":\"1707.02921\",\"paperId\":\"7ba5d3808e117e7a68dc40331ce1d483ceeedcb2\",\"url\":\"https://www.semanticscholar.org/paper/7ba5d3808e117e7a68dc40331ce1d483ceeedcb2\",\"authors\":[{\"name\":\"Bee Lim\",\"authorId\":\"144717485\"},{\"name\":\"Sanghyun Son\",\"authorId\":\"2055453482\"},{\"name\":\"Heewon Kim\",\"authorId\":\"48206011\"},{\"name\":\"Seungjun Nah\",\"authorId\":\"40648435\"},{\"name\":\"Kyoung Mu Lee\",\"authorId\":\"2135837\"}],\"doi\":\"10.1109/CVPRW.2017.151\"},{\"venue\":\"2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\",\"isInfluential\":false,\"year\":2017,\"title\":\"SphereFace: Deep Hypersphere Embedding for Face Recognition\",\"intent\":[\"methodology\"],\"arxivId\":\"1704.08063\",\"paperId\":\"bd8f77b7d3b9d272f7a68defc1412f73e5ac3135\",\"url\":\"https://www.semanticscholar.org/paper/bd8f77b7d3b9d272f7a68defc1412f73e5ac3135\",\"authors\":[{\"name\":\"Weiyang Liu\",\"authorId\":\"36326884\"},{\"name\":\"Yandong Wen\",\"authorId\":\"145357606\"},{\"name\":\"Zhiding Yu\",\"authorId\":\"1751019\"},{\"name\":\"Ming Li\",\"authorId\":\"2150655769\"},{\"name\":\"B. Raj\",\"authorId\":\"1681921\"},{\"name\":\"Le Song\",\"authorId\":\"1779453\"}],\"doi\":\"10.1109/CVPR.2017.713\"},{\"venue\":\"2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)\",\"isInfluential\":false,\"year\":2016,\"title\":\"Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network\",\"intent\":[],\"arxivId\":\"1609.04802\",\"paperId\":\"df0c54fe61f0ffb9f0e36a17c2038d9a1964cba3\",\"url\":\"https://www.semanticscholar.org/paper/df0c54fe61f0ffb9f0e36a17c2038d9a1964cba3\",\"authors\":[{\"name\":\"C. Ledig\",\"authorId\":\"1779917\"},{\"name\":\"Lucas Theis\",\"authorId\":\"2073063\"},{\"name\":\"Ferenc Husz�r\",\"authorId\":\"3108066\"},{\"name\":\"Jose Caballero\",\"authorId\":\"145372820\"},{\"name\":\"Andrew P. Aitken\",\"authorId\":\"49931957\"},{\"name\":\"Alykhan Tejani\",\"authorId\":\"41203992\"},{\"name\":\"J. Totz\",\"authorId\":\"1853456\"},{\"name\":\"Zehan Wang\",\"authorId\":\"34627233\"},{\"name\":\"W. Shi\",\"authorId\":\"152554375\"}],\"doi\":\"10.1109/CVPR.2017.19\"}],\"year\":2019,\"topics\":[{\"topicId\":\"57450\",\"topic\":\"Anatomy, Regional\",\"url\":\"https://www.semanticscholar.org/topic/57450\"},{\"topicId\":\"10302\",\"topic\":\"Face\",\"url\":\"https://www.semanticscholar.org/topic/10302\"},{\"topicId\":\"199704\",\"topic\":\"Flexed Sidebent Rotated\",\"url\":\"https://www.semanticscholar.org/topic/199704\"},{\"topicId\":\"291901\",\"topic\":\"algorithm\",\"url\":\"https://www.semanticscholar.org/topic/291901\"}],\"is_open_access\":false,\"abstract\":\"In this paper, we focus on restoring high-resolution facial images under noisy low-resolution scenarios. This problem is a challenging problem as the most important structures and details of captured facial images are missing. To address this problem, we propose a novel local patch-based face super-resolution (FSR) method via the joint learning of the contextual model. The contextual model is based on the topology consisting of contextual sub-patches, which provide more useful structural information than the commonly used local contextual structures due to the finer patch size. In this way, the contextual models are able to recover the missing local structures in target patches. In order to further strengthen the structural compensation function of contextual topology, we introduce the recognition feature as additional regularity. Based on the contextual model, we formulate the super-resolved procedure as a contextual joint representation with respect to the target patch and its adjacent patches. The high-resolution image is obtained by weighting contextual estimations. Both quantitative and qualitative validations show that the proposed method performs favorably against state-of-the-art algorithms.\",\"numCitedBy\":10,\"citationVelocity\":0,\"title\":\"Robust Face Image Super-Resolution via Joint Learning of Subdivided Contextual Model\",\"isPublisherLicensed\":true,\"url\":\"https://www.semanticscholar.org/paper/d8c1ed5070958836eef2d2c239ac12963996f756\",\"numCiting\":38,\"corpusId\":184485848,\"citations\":[{\"venue\":\"Expert Syst. Appl.\",\"isInfluential\":false,\"year\":2021,\"title\":\"Adaptive optimal multi-features learning based representation for face hallucination\",\"intent\":[],\"arxivId\":null,\"paperId\":\"f425c983257ace8b18604286b2f1b602db213046\",\"url\":\"https://www.semanticscholar.org/paper/f425c983257ace8b18604286b2f1b602db213046\",\"authors\":[{\"name\":\"Surendra Nagar\",\"authorId\":\"20921873\"},{\"name\":\"Ankush Jain\",\"authorId\":\"49148100\"},{\"name\":\"Pramod Kumar Singh\",\"authorId\":\"2149921717\"},{\"name\":\"Ajay Kumar\",\"authorId\":null}],\"doi\":\"10.1016/j.eswa.2021.116141\"},{\"venue\":\"ACM Computing Surveys\",\"isInfluential\":false,\"year\":2021,\"title\":\"Deep Learning-based Face Super-resolution: A Survey\",\"intent\":[],\"arxivId\":\"2101.03749\",\"paperId\":\"0aff8d059bccd20014f250b8e87cf205dfc04f5b\",\"url\":\"https://www.semanticscholar.org/paper/0aff8d059bccd20014f250b8e87cf205dfc04f5b\",\"authors\":[{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"},{\"name\":\"Chenyang Wang\",\"authorId\":\"2109501904\"},{\"name\":\"Xianming Liu\",\"authorId\":\"2108681776\"},{\"name\":\"Jiayi Ma\",\"authorId\":\"8555475\"}],\"doi\":\"10.1145/3485132\"},{\"venue\":\"IEEE Transactions on Image Processing\",\"isInfluential\":true,\"year\":2021,\"title\":\"Multi-Stage Degradation Homogenization for Super-Resolution of Face Images With Extreme Degradations\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"1bc897f87e5e0c61c496cdccdd168577a62ed501\",\"url\":\"https://www.semanticscholar.org/paper/1bc897f87e5e0c61c496cdccdd168577a62ed501\",\"authors\":[{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"},{\"name\":\"Jinshan Pan\",\"authorId\":\"9416881\"},{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"},{\"name\":\"Jiawei Zhang\",\"authorId\":\"1519062623\"},{\"name\":\"Zhen Han\",\"authorId\":\"144725609\"},{\"name\":\"Linchao Bao\",\"authorId\":\"2780029\"}],\"doi\":\"10.1109/TIP.2021.3086595\"},{\"venue\":\"IEEE Transactions on Biometrics, Behavior, and Identity Science\",\"isInfluential\":false,\"year\":2021,\"title\":\"E-ComSupResNet: Enhanced Face Super-Resolution Through Compact Network\",\"intent\":[],\"arxivId\":null,\"paperId\":\"684dca76b28358a9cabf60283ab6dcc68ba17385\",\"url\":\"https://www.semanticscholar.org/paper/684dca76b28358a9cabf60283ab6dcc68ba17385\",\"authors\":[{\"name\":\"Vishal M. Chudasama\",\"authorId\":\"38824959\"},{\"name\":\"Kartik Nighania\",\"authorId\":\"2059027389\"},{\"name\":\"K. Upla\",\"authorId\":\"3004725\"},{\"name\":\"K. Raja\",\"authorId\":\"34711412\"},{\"name\":\"Raghavendra Ramachandra\",\"authorId\":\"151434651\"},{\"name\":\"C. Busch\",\"authorId\":\"46347050\"}],\"doi\":\"10.1109/TBIOM.2021.3059196\"},{\"venue\":\"Pattern Recognit.\",\"isInfluential\":false,\"year\":2021,\"title\":\"Constructing multilayer locality-constrained matrix regression framework for noise robust face super-resolution\",\"intent\":[],\"arxivId\":null,\"paperId\":\"aceb3d7f3cbe9f6035b84444436d7fb5cd46916b\",\"url\":\"https://www.semanticscholar.org/paper/aceb3d7f3cbe9f6035b84444436d7fb5cd46916b\",\"authors\":[{\"name\":\"Guangwei Gao\",\"authorId\":\"3306402\"},{\"name\":\"Guangwei Gao\",\"authorId\":\"3306402\"},{\"name\":\"Guangwei Gao\",\"authorId\":\"3306402\"},{\"name\":\"Yi Yu\",\"authorId\":\"47111778\"},{\"name\":\"J. Xie\",\"authorId\":\"144307145\"},{\"name\":\"Jian Yang\",\"authorId\":\"51460259\"},{\"name\":\"Meng Yang\",\"authorId\":\"2111076685\"},{\"name\":\"Jian Zhang\",\"authorId\":\"123275544\"}],\"doi\":\"10.1016/j.patcog.2020.107539\"},{\"venue\":\"IEEE Transactions on Cybernetics\",\"isInfluential\":false,\"year\":2020,\"title\":\"MADNet: A Fast and Lightweight Network for Single-Image Super Resolution\",\"intent\":[],\"arxivId\":null,\"paperId\":\"cd66f122b75fdd4ed743fa92c3783a2458a6b223\",\"url\":\"https://www.semanticscholar.org/paper/cd66f122b75fdd4ed743fa92c3783a2458a6b223\",\"authors\":[{\"name\":\"Rushi Lan\",\"authorId\":\"36034272\"},{\"name\":\"Long Sun\",\"authorId\":\"1476719517\"},{\"name\":\"Zhenbing Liu\",\"authorId\":\"1904697\"},{\"name\":\"Huimin Lu\",\"authorId\":\"143663452\"},{\"name\":\"Cheng Pang\",\"authorId\":\"2054086734\"},{\"name\":\"Xiaonan Luo\",\"authorId\":\"144361019\"}],\"doi\":\"10.1109/TCYB.2020.2970104\"},{\"venue\":\"ArXiv\",\"isInfluential\":false,\"year\":2021,\"title\":\"Identity-Preserving Pose-Robust Face Hallucination Through Face Subspace Prior\",\"intent\":[\"background\"],\"arxivId\":\"2111.10634\",\"paperId\":\"dc2ea22eca985c9456bb3d6f9820a348d02885b4\",\"url\":\"https://www.semanticscholar.org/paper/dc2ea22eca985c9456bb3d6f9820a348d02885b4\",\"authors\":[{\"name\":\"Ali Abbasi\",\"authorId\":\"2142114752\"},{\"name\":\"M. Rahmati\",\"authorId\":\"143707367\"}],\"doi\":\"10.36227/techrxiv.17055734\"},{\"venue\":\"2020 IEEE 32nd International Conference on Tools with Artificial Intelligence (ICTAI)\",\"isInfluential\":false,\"year\":2020,\"title\":\"Lightweight Progressive Residual Clique Network for Image Super-Resolution\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"1535eebff109eb753b695003599764991691bb62\",\"url\":\"https://www.semanticscholar.org/paper/1535eebff109eb753b695003599764991691bb62\",\"authors\":[{\"name\":\"Baojin Huang\",\"authorId\":\"1581795258\"},{\"name\":\"Zheng He\",\"authorId\":\"144808832\"},{\"name\":\"Zhongyuan Wang\",\"authorId\":\"38655501\"},{\"name\":\"Kui Jiang\",\"authorId\":\"51360637\"},{\"name\":\"Guangcheng Wang\",\"authorId\":\"2042656075\"}],\"doi\":\"10.1109/ICTAI50040.2020.00122\"},{\"venue\":\"2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)\",\"isInfluential\":false,\"year\":2020,\"title\":\"MSFSR: A Multi-Stage Face Super-Resolution with Accurate Facial Representation via Enhanced Facial Boundaries\",\"intent\":[\"background\"],\"arxivId\":null,\"paperId\":\"80746a36bd92dc2fe3338d5fc3a589e05d3278a5\",\"url\":\"https://www.semanticscholar.org/paper/80746a36bd92dc2fe3338d5fc3a589e05d3278a5\",\"authors\":[{\"name\":\"Yunchen Zhang\",\"authorId\":\"2140010411\"},{\"name\":\"Yi Wu\",\"authorId\":\"2108053052\"},{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"}],\"doi\":\"10.1109/CVPRW50498.2020.00260\"},{\"venue\":\"IEEE Transactions on Image Processing\",\"isInfluential\":true,\"year\":2020,\"title\":\"Robust Face Super-Resolution via Position Relation Model Based on Global Face Context\",\"intent\":[\"background\",\"methodology\"],\"arxivId\":null,\"paperId\":\"9f2442c12c1dfde6dcd1986b6b12dc92f14aeb92\",\"url\":\"https://www.semanticscholar.org/paper/9f2442c12c1dfde6dcd1986b6b12dc92f14aeb92\",\"authors\":[{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\"},{\"name\":\"Jinshan Pan\",\"authorId\":\"9416881\"},{\"name\":\"Junjun Jiang\",\"authorId\":\"1708439\"},{\"name\":\"Jiawei Zhang\",\"authorId\":\"1519062623\"},{\"name\":\"Yi Wu\",\"authorId\":\"2108053052\"}],\"doi\":\"10.1109/TIP.2020.3023580\"}],\"fieldsOfStudy\":[\"Computer Science\",\"Medicine\"],\"isOpenAccess\":false,\"arxivId\":null,\"paperId\":\"d8c1ed5070958836eef2d2c239ac12963996f756\",\"authors\":[{\"name\":\"Liang Chen\",\"authorId\":\"2146032451\",\"url\":\"https://www.semanticscholar.org/author/2146032451\"},{\"name\":\"Jinshan Pan\",\"authorId\":\"9416881\",\"url\":\"https://www.semanticscholar.org/author/9416881\"},{\"name\":\"Qing Li\",\"authorId\":\"2117896344\",\"url\":\"https://www.semanticscholar.org/author/2117896344\"}],\"doi\":\"10.1109/TIP.2019.2920510\",\"influentialCitationCount\":0}}");

/***/ }),

/***/ "rGDM":
/*!**************************************!*\
  !*** ./src/app/_interfaces/index.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlignmentCube_IAlignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlignmentCube/IAlignment */ "ftpp");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_IWebserviceOverview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/IWebserviceOverview */ "llMo");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_IWebserviceConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/IWebserviceConfiguration */ "ZscJ");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_IDatabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/IDatabase */ "oJYa");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_IApis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/IApis */ "nxSl");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "rgXw":
/*!************************************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UiInfobarBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInfobarBottomComponent", function() { return UiInfobarBottomComponent; });
/* harmony import */ var _engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/alignment-cube.service */ "vcHc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class UiInfobarBottomComponent {
    constructor(engineService) {
        this.engineService = engineService;
    }
    ngOnInit() {
    }
}
UiInfobarBottomComponent.ɵfac = function UiInfobarBottomComponent_Factory(t) { return new (t || UiInfobarBottomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_0__["AlignmentCubeService"])); };
UiInfobarBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UiInfobarBottomComponent, selectors: [["app-ui-infobar-bottom"]], decls: 2, vars: 0, template: function UiInfobarBottomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ui-infobar-bottom works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "sJrL":
/*!*********************************************************!*\
  !*** ./src/app/_services/backend-connection.service.ts ***!
  \*********************************************************/
/*! exports provided: BackendConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendConnectionService", function() { return BackendConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_interfaces */ "rGDM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class BackendConnectionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getApis() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiManagerEndpoint).toPromise();
        });
    }
    getWebserviceConfiguration(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const body = {
                mode: 'webserviceInformation',
                name
            };
            return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webserviceManagerEndpoint, body).toPromise();
        });
    }
    getLocalDatabaseData(dbName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            queryParams = queryParams.append('label', dbName);
            return yield this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbManagerEndpoint, { params: queryParams }).toPromise();
        });
    }
    getWebDatabaseData(apiName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            queryParams = queryParams.append('label', apiName);
            return yield this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiManagerEndpoint, { params: queryParams }).toPromise();
        });
    }
    getWebEntity(apiName, value, regex) {
        const body = {
            label: apiName,
            value,
            regex
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiCallEndpoint, body);
    }
    // Databases
    getDatabases() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbManagerEndpoint).toPromise();
        });
    }
    getLocalDatabaseSchema(dbName) {
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        queryParams = queryParams.append('label', dbName);
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbSchemaEndpoint, { params: queryParams });
    }
    getLocalEntity(dbName, predicate, inputType, limit) {
        const body = {
            label: dbName,
            predicate,
            inputType,
            // inputType: 'https://dblp.org/rdf/schema-2020-07-01#Publication',
            // inputType: 'http://example/com/crossref/Publication',
            limit
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbKnowledgeBaseEndpoint, body);
    }
    updateDatabase(oldDb, newDb) {
        const body = {
            mode: 'update',
            db: oldDb,
            newDb
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbManagerEndpoint, body);
    }
    deleteDatabase(label) {
        const body = {
            mode: 'delete',
            label
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbManagerEndpoint, body);
    }
    addNewDatabase(config) {
        const body = {
            mode: 'new',
            db: config
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dbManagerEndpoint, body);
    }
    // Webservices
    getWebservices() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webserviceManagerEndpoint);
    }
    addNewWebservice(label, configuration, returnTemplate) {
        const body = {
            name: label,
            mode: 'new',
            configuration,
            returnTemplate
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webserviceManagerEndpoint, body);
    }
    updateWebservice(label, configuration, returnTemplate) {
        const lastIndex = configuration.returnTemplate.lastIndexOf('\\');
        const returnTemplateName = configuration.returnTemplate.substring(lastIndex + 1);
        const body = {
            name: label,
            mode: 'update',
            configuration,
            returnTemplate,
            returnTemplateName
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webserviceManagerEndpoint, body);
    }
    deleteWebservice(webserviceName) {
        const body = {
            mode: 'delete',
            name: webserviceName
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webserviceManagerEndpoint, body);
    }
    // APIs
    updateApi(oldApi, newApi) {
        const body = {
            mode: 'update',
            api: oldApi,
            newApi
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiManagerEndpoint, body);
    }
    deleteApi(label) {
        const body = {
            mode: 'delete',
            label
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiManagerEndpoint, body);
    }
    addNewApi(config) {
        const body = {
            mode: 'new',
            api: config
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiManagerEndpoint, body);
    }
    // GSB
    postToFlatJson(json) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiToFlatJson, json);
    }
    postJsonDiff(original, modified) {
        const body = {
            original,
            modified
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jsonDiffEndpoint, body);
    }
    postSuggestions(mappings) {
        const body = {
            mappings
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].gsbSuggestions, body);
    }
    postFinalAlignment(finalAlignment) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].gsbFinalAlignment, { webLabel: finalAlignment.webLabel, localLabel: finalAlignment.localLabel, alignment: finalAlignment });
    }
}
BackendConnectionService.ɵfac = function BackendConnectionService_Factory(t) { return new (t || BackendConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BackendConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BackendConnectionService, factory: BackendConnectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vWX8":
/*!***********************************!*\
  !*** ./src/app/_classes/Utils.ts ***!
  \***********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-md5 */ "kScs");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/settings */ "AJaE");


class Utils {
    /**
     * Methods sets thread to sleep for an amount of milliseconds.
     * @param ms - Amount of milliseconds to sleep.
     * @private
     */
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Returns md5 hash of string.
     * @param str - String to hash.
     */
    getMd5Hash(str) {
        return ts_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(str);
    }
    addHashToLocalEntity(entity) {
        for (const entry of entity.valueList[0].fullKnowledge) {
            entry.hash = ts_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(entry.path + entry.value).toString();
        }
    }
    addHashToWebEntity(entity) {
        console.log(entity);
        for (const entry of entity.dictionary) {
            entry.hash = ts_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(entry.path + entry.value).toString();
        }
    }
    formatApiPath(path) {
        const context = path.match(_assets_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].regexApiSearch);
        for (let i = 0; i < context.length; i++) {
            context[i] = context[i].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].regexApiReplace, '');
        }
        // remove wildcards
        for (let i = 0; i < context.length; i++) {
            context[i] = context[i].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].regexApiReplaceWildcard, '');
        }
        return context.join();
    }
    formatLocalPathShort(path) {
        const context = path.match(_assets_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].regexRelSearch);
        for (let i = 0; i < context.length; i++) {
            context[i] = context[i].replace(_assets_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].regexRelReplace, '');
        }
        return context.join();
    }
    formatLocalPath(path) {
        const paths = path.split(', ');
        const formattedPaths = [];
        for (const subpath of paths) {
            formattedPaths.push(this.formatLocalPathShort(subpath));
        }
        return formattedPaths.join(' 🡢 ');
    }
    joinRelPaths(paths) {
        return paths.join(_assets_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].joinSymbol);
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/start-page/start-page.component */ "dwuU");
/* harmony import */ var _pages_data_cube_page_data_cube_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/data-cube-page/data-cube-page.component */ "NdcZ");
/* harmony import */ var _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/setting-page/setting-page.component */ "Yqmq");
/* harmony import */ var _components_alignment_cube_alignment_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/alignment-cube/alignment-selector */ "OqFy");
/* harmony import */ var _pages_schema_page_schema_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/schema-page/schema.component */ "UKXl");
/* harmony import */ var _components_webservices_webservices_overview_webservices_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/webservices/webservices-overview/webservices-overview.component */ "pjTy");
/* harmony import */ var _components_gold_standard_builder_gold_standard_builder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/gold-standard-builder/gold-standard-builder.component */ "5q67");
/* harmony import */ var _components_gold_standard_builder_builder_builder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/gold-standard-builder/builder/builder.component */ "KdjQ");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/test/test.component */ "lEda");
/* harmony import */ var _pages_gsb_page_gsb_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/gsb-page/gsb-page.component */ "2maj");
/* harmony import */ var _pages_alignment_viewer_page_alignment_viewer_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/alignment-viewer-page/alignment-viewer-page.component */ "AZzU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");














const routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    { path: 'start', component: _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_1__["StartPageComponent"] },
    { path: 'dataCube', component: _pages_data_cube_page_data_cube_page_component__WEBPACK_IMPORTED_MODULE_2__["DataCubePageComponent"] },
    { path: 'settings', component: _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_3__["SettingPageComponent"] },
    { path: 'currentTest', component: _components_alignment_cube_alignment_selector__WEBPACK_IMPORTED_MODULE_4__["AlignmentSelectorComponent"] },
    { path: 'schema', component: _pages_schema_page_schema_component__WEBPACK_IMPORTED_MODULE_5__["SchemaComponent"] },
    { path: 'goldStandardBuilder', component: _components_gold_standard_builder_gold_standard_builder_component__WEBPACK_IMPORTED_MODULE_7__["GoldStandardBuilderComponent"] },
    { path: 'gsbPage', component: _pages_gsb_page_gsb_page_component__WEBPACK_IMPORTED_MODULE_10__["GsbPageComponent"] },
    { path: 'webservicesOverview', component: _components_webservices_webservices_overview_webservices_overview_component__WEBPACK_IMPORTED_MODULE_6__["WebservicesOverviewComponent"] },
    { path: 'test', component: _components_gold_standard_builder_builder_builder_component__WEBPACK_IMPORTED_MODULE_8__["BuilderComponent"] },
    { path: 'testPage', component: _pages_test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"] },
    { path: 'viewer', component: _pages_alignment_viewer_page_alignment_viewer_page_component__WEBPACK_IMPORTED_MODULE_11__["AlignmentViewerPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vcHc":
/*!*****************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/engine/alignment-cube.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AlignmentCubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentCubeService", function() { return AlignmentCubeService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "rqH8");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "VHTt");
/* harmony import */ var _classes_threeJsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_classes/threeJsHelper */ "RuOE");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services */ "J9tS");









class AlignmentCubeService {
    constructor(ngZone, labelFormatter) {
        this.ngZone = ngZone;
        this.labelFormatter = labelFormatter;
        this.showFullApiPath = true;
        this.showFullRelationPath = true;
        // variables
        this.rayCasterWorkingLayer = 1;
        this.cameraWidth = 10;
        this.frameId = null;
        this._selectedAlignmentIndex = 0;
        this._selectedApiPathIndex = 0;
        this._selectedRelationPathLabelIndex = 0;
        this.pickPosition = { x: 0, y: 0 };
        this.cubeTracker = new _classes_threeJsHelper__WEBPACK_IMPORTED_MODULE_5__["ResourceTracker"]();
        this.resTracker = new _classes_threeJsHelper__WEBPACK_IMPORTED_MODULE_5__["ResourceTracker"]();
        this.labelTracker = new _classes_threeJsHelper__WEBPACK_IMPORTED_MODULE_5__["ResourceTracker"]();
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    initialize(canvas) {
        // The first step is to get the reference of the canvas element from our HTML document
        this._viewMode = _models__WEBPACK_IMPORTED_MODULE_4__["ViewMode"].View3D;
        this.canvas = canvas.nativeElement;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;
        // renderer
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        // labelrender
        this.labelRenderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__["CSS2DRenderer"]();
        this.labelRenderer.setSize(width, height);
        document.getElementById('engine-wrapper-label').appendChild(this.labelRenderer.domElement);
        // create the scene
        this._scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        // cameras
        this.cameraPersp = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, aspect, 0.01, 100);
        this.cameraOrtho = new three__WEBPACK_IMPORTED_MODULE_0__["OrthographicCamera"](-this.cameraWidth * aspect, this.cameraWidth * aspect, this.cameraWidth, -this.cameraWidth, 0.01, 100);
        this._currentCamera = this.cameraPersp;
        this._currentCamera.position.set(3, 5, 15);
        this._scene.add(this._currentCamera);
        // soft white light
        this.light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0xFFFFFF, 1);
        this.light.position.set(-10, 0, 10);
        const light2 = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0xFFFFFF, 0.8);
        light2.position.set(0, 100, 10);
        this._scene.add(this.light);
        this._scene.add(light2);
        // controls
        this._orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](this._currentCamera, this.labelRenderer.domElement);
        this._orbitControls.minDistance = 5;
        this._orbitControls.maxDistance = 50;
        this.pickHelper = new _classes_threeJsHelper__WEBPACK_IMPORTED_MODULE_5__["PickHelper"](this.rayCasterWorkingLayer);
        this.clearPickPosition();
    }
    /**
     * Loads the scene for the specified alignment data
     *
     * @param alignmentContainer - Alignment data to visualize
     */
    loadSceneForAlignmentContainer(alignmentContainer) {
        this._alignmentContainer = alignmentContainer;
        if (this.sceneLoader === undefined) {
            this.sceneLoader = new _classes_threeJsHelper__WEBPACK_IMPORTED_MODULE_5__["SceneLoader"](this, this.labelFormatter);
        }
        if (this._selectedMetric === undefined) {
            this._selectedMetric = alignmentContainer.metricsNames.values().next().value;
        }
        switch (this._viewMode) {
            case _models__WEBPACK_IMPORTED_MODULE_4__["ViewMode"].View2DAlignment:
                this.sceneLoader.load2DSceneAlignment();
                break;
            case _models__WEBPACK_IMPORTED_MODULE_4__["ViewMode"].View3D:
                this.sceneLoader.load3DScene();
                break;
            case _models__WEBPACK_IMPORTED_MODULE_4__["ViewMode"].View2DApi:
                this.sceneLoader.load2DSceneApi();
                break;
            case _models__WEBPACK_IMPORTED_MODULE_4__["ViewMode"].View2DRelation:
                this.sceneLoader.load2DSceneRelation();
                break;
        }
    }
    /**
     * Contains all functions for ongoing changes.
     */
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            // Desktop
            window.addEventListener('mousemove', (event) => {
                this.setPickPosition(event);
            });
            window.addEventListener('mouseout', () => {
                this.clearPickPosition();
            });
            window.addEventListener('mouseleave', () => {
                this.clearPickPosition();
            });
            // Mobile
            window.addEventListener('touchstart', (event) => {
                this.setPickPosition(event);
            });
            window.addEventListener('touchmove', (event) => {
                this.setPickPosition(event);
            });
            window.addEventListener('touchcancel', () => {
                this.clearPickPosition();
            });
            window.addEventListener('touchend', () => {
                this.clearPickPosition();
            });
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    /**
     * Contains all function for correct rendering the scene.
     * @private
     */
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        this.pickHelper.pick(this.pickPosition, this._scene, this._currentCamera);
        this.renderer.clear();
        this._currentCamera.lookAt(this._outlineBox.position);
        this.renderer.render(this._scene, this._currentCamera);
        this.labelRenderer.render(this._scene, this._currentCamera);
    }
    /**
     * Methode to resize the canvas
     * @private
     */
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;
        this.cameraPersp.aspect = aspect;
        this.cameraPersp.updateProjectionMatrix();
        this.cameraOrtho.left = -this.cameraWidth * aspect;
        this.cameraOrtho.right = this.cameraWidth * aspect;
        this.cameraOrtho.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.labelRenderer.setSize(width, height);
    }
    resetOrbitControls() {
        this._orbitControls.reset();
        this._orbitControls.target.copy(this._outlineBox.position.clone());
    }
    setOrbitControlPosition() {
        this._currentCamera.lookAt(this._outlineBox.position);
        this._orbitControls.update();
    }
    /**
     * Swap camera between perspective and orthographic.
     */
    changeCamera() {
        const position = this._currentCamera.position.clone();
        this._currentCamera = (this._currentCamera instanceof three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]) ? this.cameraOrtho : this.cameraPersp;
        this._currentCamera.position.copy(position);
        this._orbitControls.object = this._currentCamera;
        this._currentCamera.lookAt(this._orbitControls.target.x, this._orbitControls.target.y, this._orbitControls.target.z);
        this.resize();
    }
    toggleGridHelper(size = 10, divisions = 10) {
        if (this.gridHelper === null || this.gridHelper === undefined) {
            this.gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__["GridHelper"](size, divisions);
            this._scene.add(this.gridHelper);
        }
        else {
            this._scene.remove(this.gridHelper);
            this.gridHelper = null;
        }
    }
    toggleAxisHelper(size = 10) {
        if (this.axisHelper === null || this.axisHelper === undefined) {
            this.axisHelper = new three__WEBPACK_IMPORTED_MODULE_0__["AxesHelper"](size);
            this._scene.add(this.axisHelper);
        }
        else {
            this._scene.remove(this.axisHelper);
            this.axisHelper = null;
        }
    }
    toggleCameraHelper() {
        if (this.cameraHelper === null || this.cameraHelper === undefined) {
            if (this._currentCamera instanceof three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]) {
                this.cameraHelper = new three__WEBPACK_IMPORTED_MODULE_0__["CameraHelper"](this.cameraOrtho);
            }
            else {
                this.cameraHelper = new three__WEBPACK_IMPORTED_MODULE_0__["CameraHelper"](this.cameraPersp);
            }
            this._scene.add(this.cameraHelper);
        }
        else {
            this._scene.remove(this.cameraHelper);
            this.cameraHelper = null;
        }
    }
    /**
     * Picker Functions
     */
    getCanvasRelativePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) * this.canvas.width / rect.width,
            y: (event.clientY - rect.top) * this.canvas.height / rect.height,
        };
    }
    setPickPosition(event) {
        const pos = this.getCanvasRelativePosition(event);
        this.pickPosition.x = (pos.x / this.canvas.width) * 2 - 1;
        this.pickPosition.y = (pos.y / this.canvas.height) * -2 + 1; // note we flip Y
    }
    clearPickPosition() {
        // unlike the mouse which always has a position
        // if the user stops touching the screen we want
        // to stop picking. For now we just pick a value
        // unlikely to pick something
        this.pickPosition.x = -100000;
        this.pickPosition.y = -100000;
    }
    clearScene() {
        this.labelTracker.dispose();
        this.cubeTracker.dispose();
        this.resTracker.dispose();
        this.sceneLoader.clearScene();
    }
    reloadScene() {
        this.clearScene();
        this.loadSceneForAlignmentContainer(this.alignmentContainer);
    }
    setMetric(metric) {
        this._selectedMetric = metric;
        this.reloadScene();
    }
    removeAxisLabels() {
        this.labelTracker.dispose();
    }
    setShowApiFullPath(value) {
        this.showFullApiPath = value;
        this.reloadScene();
    }
    setShowRelationFullPath(value) {
        this.showFullRelationPath = value;
        this.reloadScene();
    }
    setSelectedDataSet(index) {
        if (index >= 0 && index < this.alignmentContainer.alignments.length) {
            this._selectedAlignmentIndex = index;
            this.reloadScene();
        }
    }
    setSelectedApiLabel(index) {
        if (index >= 0 && index < this.alignmentContainer.apiLabels.length) {
            this._selectedApiPathIndex = index;
            this.reloadScene();
        }
    }
    setSelectedRelationPathLabel(index) {
        console.log(`${index} -> ${this.alignmentContainer.relationPathLabels[index].join()}`);
        if (index >= 0 && index < this.alignmentContainer.relationPathLabels.length) {
            console.log('Changed index to ' + index);
            this._selectedRelationPathLabelIndex = index;
            this.reloadScene();
        }
    }
    changeViewMode(mode) {
        this._viewMode = mode;
        this.reloadScene();
    }
    set alignmentContainer(model) {
        this._alignmentContainer = model;
    }
    get alignmentContainer() {
        return this._alignmentContainer;
    }
    get viewMode() {
        return this._viewMode;
    }
    get currentCamera() {
        return this._currentCamera;
    }
    get orbitControls() {
        return this._orbitControls;
    }
    get outlineBox() {
        return this._outlineBox;
    }
    set outlineBox(value) {
        this._outlineBox = value;
    }
    get selectedAlignmentIndex() {
        return this._selectedAlignmentIndex;
    }
    get selectedApiPathIndex() {
        return this._selectedApiPathIndex;
    }
    get selectedRelationPathLabelIndex() {
        return this._selectedRelationPathLabelIndex;
    }
    get selectedMetric() {
        return this._selectedMetric;
    }
    get scene() {
        return this._scene;
    }
}
AlignmentCubeService.ɵfac = function AlignmentCubeService_Factory(t) { return new (t || AlignmentCubeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_6__["PathFormatterService"])); };
AlignmentCubeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlignmentCubeService, factory: AlignmentCubeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xICz":
/*!*****************************************************!*\
  !*** ./src/assets/jsonSchema/alignment.schema.json ***!
  \*****************************************************/
/*! exports provided: $schema, $id, type, properties, required, definitions, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"http://json-schema.org/draft-07/schema#\",\"$id\":\"https://example.com/alignment.schema.json\",\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"system\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"alignments\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/mapping\"}}},\"required\":[\"name\",\"alignments\"],\"definitions\":{\"mapping\":{\"type\":\"object\",\"properties\":{\"api_path\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}},\"relation_path\":{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/relationPath\"}},\"metrics\":{\"type\":\"object\",\"patternProperties\":{\"\":{\"type\":\"number\"}}}},\"required\":[\"api_path\",\"relation_path\",\"metrics\"]},\"relationPath\":{\"type\":\"object\",\"properties\":{\"path\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}}}}}");

/***/ }),

/***/ "ypJX":
/*!***********************************************************************************!*\
  !*** ./src/app/_components/databases/db-overview/databases-overview.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DatabasesOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasesOverviewComponent", function() { return DatabasesOverviewComponent; });
/* harmony import */ var _services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/backend-connection.service */ "sJrL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _db_information_db_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db-information/db-information.component */ "Kun9");
/* harmony import */ var _db_create_form_db_create_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db-create-form/db-create-form.component */ "dk3I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");










function DatabasesOverviewComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatabasesOverviewComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.databases.indexOf(element_r12));
} }
function DatabasesOverviewComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatabasesOverviewComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r13.label, " ");
} }
function DatabasesOverviewComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatabasesOverviewComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r14.path, " ");
} }
function DatabasesOverviewComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Identifier Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatabasesOverviewComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r15.identifierMap, " ");
} }
function DatabasesOverviewComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatabasesOverviewComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatabasesOverviewComponent_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.openDbInformation(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DatabasesOverviewComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 15);
} }
function DatabasesOverviewComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 16);
} if (rf & 2) {
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", i_r20);
} }
class DatabasesOverviewComponent {
    constructor(connection, _dialog) {
        this.connection = connection;
        this._dialog = _dialog;
        this.displayedColumns = ['index', 'label', 'path', 'identifierMap', 'actions'];
        this.loadDBs();
    }
    ngOnInit() {
    }
    loadDBs() {
        this.connection.getDatabases().then((res) => {
            this.databases = res.databases;
        });
    }
    openDbInformation(db) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.data = db;
        // disable closing by clicking outside of dialog window
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.maxWidth = '90vw';
        const dialogRef = this._dialog.open(_db_information_db_information_component__WEBPACK_IMPORTED_MODULE_2__["DbInformationComponent"], dialogConfig).afterClosed().toPromise().then(() => this.loadDBs());
    }
    openCreateDB() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        // disable closing by clicking outside of dialog window
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.maxHeight = '100vh';
        dialogConfig.maxWidth = '90vw';
        const dialogRef = this._dialog.open(_db_create_form_db_create_form_component__WEBPACK_IMPORTED_MODULE_3__["DbCreateFormComponent"], dialogConfig);
        dialogRef.afterClosed().toPromise().then(() => this.loadDBs());
    }
}
DatabasesOverviewComponent.ɵfac = function DatabasesOverviewComponent_Factory(t) { return new (t || DatabasesOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backend_connection_service__WEBPACK_IMPORTED_MODULE_0__["BackendConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
DatabasesOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DatabasesOverviewComponent, selectors: [["app-databases-overview"]], decls: 21, vars: 3, consts: [[1, "main"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "label"], ["matColumnDef", "path"], ["matColumnDef", "identifierMap"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "id", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["aria-hidden", "false", "aria-label", "See details"], ["mat-header-row", ""], ["mat-row", "", 3, "id"]], template: function DatabasesOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatabasesOverviewComponent_Template_button_click_1_listener() { return ctx.openCreateDB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DatabasesOverviewComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DatabasesOverviewComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DatabasesOverviewComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DatabasesOverviewComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DatabasesOverviewComponent_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DatabasesOverviewComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DatabasesOverviewComponent_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DatabasesOverviewComponent_td_15_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DatabasesOverviewComponent_th_17_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DatabasesOverviewComponent_td_18_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DatabasesOverviewComponent_tr_19_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DatabasesOverviewComponent_tr_20_Template, 1, 1, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.databases);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhYmFzZXMtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yzgQ":
/*!**************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-infobar-bottom/index.ts ***!
  \**************************************************************************/
/*! exports provided: UiInfobarBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-infobar-bottom.component */ "rgXw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiInfobarBottomComponent", function() { return _ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_0__["UiInfobarBottomComponent"]; });




/***/ }),

/***/ "zAyI":
/*!***********************************************************************!*\
  !*** ./src/app/_components/alignment-cube/ui/ui-infobar-top/index.ts ***!
  \***********************************************************************/
/*! exports provided: UiInfobarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-infobar-top.component */ "LlcP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiInfobarTopComponent", function() { return _ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_0__["UiInfobarTopComponent"]; });




/***/ }),

/***/ "zUWA":
/*!************************************************************************!*\
  !*** ./src/app/_components/alignment-cube/alignment-cube.component.ts ***!
  \************************************************************************/
/*! exports provided: AlignmentCubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentCubeComponent", function() { return AlignmentCubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/alignment-cube.service */ "vcHc");
/* harmony import */ var _assets_data_alignments_example_scigraph_v1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/alignments/example/scigraph_v1.json */ "WSlw");
var _assets_data_alignments_example_scigraph_v1_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/alignments/example/scigraph_v1.json */ "WSlw", 1);
/* harmony import */ var _assets_data_alignments_example_scigraph_v2_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/data/alignments/example/scigraph_v2.json */ "lv3r");
var _assets_data_alignments_example_scigraph_v2_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/alignments/example/scigraph_v2.json */ "lv3r", 1);
/* harmony import */ var _assets_data_alignments_example_scigraph_v3_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/data/alignments/example/scigraph_v3.json */ "Kd3W");
var _assets_data_alignments_example_scigraph_v3_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/alignments/example/scigraph_v3.json */ "Kd3W", 1);
/* harmony import */ var _assets_data_alignments_example_scigraph_v4_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/alignments/example/scigraph_v4.json */ "Tu0g");
var _assets_data_alignments_example_scigraph_v4_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/alignments/example/scigraph_v4.json */ "Tu0g", 1);
/* harmony import */ var _assets_data_alignments_filipo_sample_dblp_sample_arxiv_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/data/alignments/filipo/sample_dblp_sample_arxiv.json */ "6OPa");
var _assets_data_alignments_filipo_sample_dblp_sample_arxiv_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/alignments/filipo/sample_dblp_sample_arxiv.json */ "6OPa", 1);
/* harmony import */ var _assets_data_alignments_doris_sample_dblp_sample_arxiv_overlap_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/data/alignments/doris/sample_dblp_sample_arxiv_overlap.json */ "LzbG");
var _assets_data_alignments_doris_sample_dblp_sample_arxiv_overlap_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/alignments/doris/sample_dblp_sample_arxiv_overlap.json */ "LzbG", 1);
/* harmony import */ var _classes_alignment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_classes/alignment */ "8Uzo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _alignment_selector_alignment_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alignment-selector/alignment-selector.component */ "JpYR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/ui.component */ "WWyf");















const _c0 = ["rendererCanvas"];
const _c1 = ["labelRendererCanvas"];
function AlignmentCubeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-data-selector", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newAlignmentAdded", function AlignmentCubeComponent_div_0_Template_app_data_selector_newAlignmentAdded_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onAlignmentAdded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlignmentCubeComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.startAnimation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Generate AlignmentCube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlignmentCubeComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startAnimationExample(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Generate Example 1 System");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlignmentCubeComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.startAnimationExample2Systems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generate Example 2 Systems");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.alignmentModel.alignments.length < 1);
} }
function AlignmentCubeComponent_app_ui_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ui", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("engineService", ctx_r1.engServ);
} }
// import alignmentArxiv from ''
class AlignmentCubeComponent {
    constructor(engServ) {
        this.engServ = engServ;
        this.alignmentModel = new _classes_alignment__WEBPACK_IMPORTED_MODULE_8__["AlignmentContainer"]();
    }
    ngOnInit() {
        this.showAddAlignmentComponent = true;
        this.animationStarted = false;
        this.selectedAlignments = [];
        this.engServ.initialize(this.rendererCanvas);
    }
    onAlignmentAdded(alignment) {
        this.alignmentModel.addAlignment(alignment);
    }
    startAnimation() {
        this.showAddAlignmentComponent = false;
        this.animationStarted = true;
        this.engServ.loadSceneForAlignmentContainer(this.alignmentModel);
        this.engServ.animate();
    }
    startAnimationExample() {
        this.showAddAlignmentComponent = false;
        this.animationStarted = true;
        const sciV1 = _assets_data_alignments_example_scigraph_v1_json__WEBPACK_IMPORTED_MODULE_2__;
        const sciV2 = _assets_data_alignments_example_scigraph_v2_json__WEBPACK_IMPORTED_MODULE_3__;
        const sciV3 = _assets_data_alignments_example_scigraph_v3_json__WEBPACK_IMPORTED_MODULE_4__;
        const sciV4 = _assets_data_alignments_example_scigraph_v4_json__WEBPACK_IMPORTED_MODULE_5__;
        this.alignmentModel.addAlignment(sciV1);
        this.alignmentModel.addAlignment(sciV2);
        this.alignmentModel.addAlignment(sciV3);
        this.alignmentModel.addAlignment(sciV4);
        this.alignmentModel.sortApiLabels();
        this.alignmentModel.sortRelationLabels();
        this.engServ.loadSceneForAlignmentContainer(this.alignmentModel);
        this.engServ.animate();
    }
    startAnimationExample2Systems() {
        this.showAddAlignmentComponent = false;
        this.animationStarted = true;
        const dorisAlignment = _assets_data_alignments_filipo_sample_dblp_sample_arxiv_json__WEBPACK_IMPORTED_MODULE_6__;
        const filipoAlignment = _assets_data_alignments_doris_sample_dblp_sample_arxiv_overlap_json__WEBPACK_IMPORTED_MODULE_7__;
        this.alignmentModel.addAlignment(filipoAlignment);
        this.alignmentModel.addAlignment(dorisAlignment);
        this.alignmentModel.sortApiLabels();
        this.alignmentModel.sortRelationLabels();
        this.engServ.loadSceneForAlignmentContainer(this.alignmentModel);
        this.engServ.animate();
    }
}
AlignmentCubeComponent.ɵfac = function AlignmentCubeComponent_Factory(t) { return new (t || AlignmentCubeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_alignment_cube_service__WEBPACK_IMPORTED_MODULE_1__["AlignmentCubeService"])); };
AlignmentCubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlignmentCubeComponent, selectors: [["app-alignment-cube"]], viewQuery: function AlignmentCubeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelRendererCanvas = _t.first);
    } }, decls: 8, vars: 4, consts: [["class", "h-100 d-flex flex-column align-items-center justify-content-center", "style", "height: 100%", 4, "ngIf"], [3, "engineService", 4, "ngIf"], ["id", "graph-frame", 1, "graph-frame"], ["id", "engine-wrapper", 1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""], ["id", "engine-wrapper-label", 1, "engine-wrapper-label"], [1, "h-100", "d-flex", "flex-column", "align-items-center", "justify-content-center", 2, "height", "100%"], [3, "newAlignmentAdded"], ["mat-raised-button", "", "color", "primary", 1, "m-1", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "m-1", 3, "click"], [3, "engineService"]], template: function AlignmentCubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlignmentCubeComponent_div_0_Template, 8, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlignmentCubeComponent_app_ui_2_Template, 1, 1, "app-ui", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddAlignmentComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.animationStarted ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animationStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _alignment_selector_alignment_selector_component__WEBPACK_IMPORTED_MODULE_10__["AlignmentSelectorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _ui_ui_component__WEBPACK_IMPORTED_MODULE_12__["UiComponent"]], styles: [".engine-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: -2;\n}\n.engine-wrapper[_ngcontent-%COMP%]   #renderCanvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  touch-action: none;\n}\n.engine-wrapper-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGlnbm1lbnQtY3ViZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBR0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtBO0VBQ0Usa0JBQUE7RUFHQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFKRiIsImZpbGUiOiJhbGlnbm1lbnQtY3ViZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmdpbmUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy90b3A6IDA7XG4gIC8vcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTI7XG5cbiAgI3JlbmRlckNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uZW5naW5lLXdyYXBwZXItbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vdG9wOiAwO1xuICAvL3JpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], [{
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    }]).catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map