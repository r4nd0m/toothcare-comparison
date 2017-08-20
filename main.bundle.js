webpackJsonp([1,4],{

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 189;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(201);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(308),
        styles: [__webpack_require__(302)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainview_mainview_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__insurance_provider_insurance_provider_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__mainview_mainview_component__["a" /* MainviewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__insurance_provider_insurance_provider_component__["a" /* InsuranceProviderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceProviderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsuranceProviderComponent = (function () {
    function InsuranceProviderComponent() {
        this.removeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InsuranceProviderComponent.prototype.ngOnInit = function () {
    };
    InsuranceProviderComponent.prototype.addPrice = function () {
        this.provider.addPrice();
    };
    InsuranceProviderComponent.prototype.removeProvider = function () {
        this.removeEmitter.emit(null);
    };
    return InsuranceProviderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* InsuranceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model__["a" /* InsuranceProvider */]) === "function" && _a || Object)
], InsuranceProviderComponent.prototype, "provider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onRemove'),
    __metadata("design:type", Object)
], InsuranceProviderComponent.prototype, "removeEmitter", void 0);
InsuranceProviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'insurance-provider',
        template: __webpack_require__(309),
        styles: [__webpack_require__(303)]
    }),
    __metadata("design:paramtypes", [])
], InsuranceProviderComponent);

var _a;
//# sourceMappingURL=insurance-provider.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainviewComponent = (function () {
    function MainviewComponent() {
        this.providers = [];
        this.missing_tooth_price = 1500;
        this.missing_teeth_min = 2;
        this.missing_teeth_max = 15;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.providers.push(new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* InsuranceProvider */]("AOK Premium", [
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](37, 39), 25.2),
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](40, 49), 38.18),
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](50, 59), 50.14),
        ], 90), new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* InsuranceProvider */]("AOK optimal", [
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](37, 39), 17.44),
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](40, 49), 25.99),
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](50, 59), 37.51),
        ], 70), new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* InsuranceProvider */]("AOK kompakt", [
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](37, 39), 11.85),
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](40, 49), 17.91),
            new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* InsurancePrice */](new __WEBPACK_IMPORTED_MODULE_1__model__["c" /* InsurancePeriod */](50, 59), 26.23),
        ], 50));
    }
    MainviewComponent.prototype.ngOnInit = function () {
    };
    MainviewComponent.prototype.addProvider = function () {
        this.providers.push(new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* InsuranceProvider */]());
    };
    MainviewComponent.prototype.removeProvider = function (index) {
        this.providers.splice(index, 1);
    };
    MainviewComponent.prototype.calculate = function () {
        var _this = this;
        this.lineChartColors.splice(0, this.lineChartData.length);
        this.lineChartData = [];
        this.lineChartLabels.splice(0, this.lineChartLabels.length);
        for (var teeth_count = this.missing_teeth_min; teeth_count <= this.missing_teeth_max; teeth_count++) {
            this.lineChartLabels.push(teeth_count);
        }
        this.providers.forEach(function (provider) {
            var result = { label: provider.name, data: [] };
            for (var teeth_count = _this.missing_teeth_min; teeth_count <= _this.missing_teeth_max; teeth_count++) {
                result.data.push(_this.calculateForProvider(provider, teeth_count).overpaid);
            }
            _this.lineChartData.push(result);
            var random_color_rgb = _this.getRandomColor();
            _this.lineChartColors.push({
                backgroundColor: 'rgba(' + random_color_rgb + ',0.1)',
                borderColor: 'rgba(' + random_color_rgb + ',1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            });
        });
    };
    MainviewComponent.prototype.calculateForProvider = function (provider, missing_teeth) {
        var total_years = provider.prices.reduce(function (acc, price) {
            var total_years = 1 + price.period.end - price.period.start;
            return acc + total_years;
        }, 0);
        var total_treatment_price = missing_teeth * this.missing_tooth_price;
        var total_coverage_price = provider.prices.reduce(function (acc, price) {
            var total_years = 1 + price.period.end - price.period.start;
            var period_price = price.price * total_years * 12;
            return acc + period_price;
        }, 0);
        var self_paid = total_treatment_price * (1 - provider.coverage_part / 100); // how much to pay except the coverage
        var total_paid = self_paid + total_coverage_price; // how much will be paid by user during the insurance time
        return {
            name: provider.name,
            total_years: total_years,
            total_coverage_price: total_coverage_price,
            total_treatment_price: total_treatment_price,
            self_paid: self_paid,
            total_paid: total_paid,
            overpaid: total_paid - total_treatment_price
        };
    };
    MainviewComponent.prototype.getRandomColor = function () {
        return [
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 228),
            Math.floor(Math.random() * 228)
        ].join(',');
    };
    return MainviewComponent;
}());
MainviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mainview',
        template: __webpack_require__(310),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [])
], MainviewComponent);

//# sourceMappingURL=mainview.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "input {\r\n\tmin-width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".inputs{\r\n\twidth: 50%;\r\n\tfloat: left\r\n}\r\n.results{\r\n\twidth: 50%;\r\n\tfloat: right;\r\n}\r\n.diagram{\r\n\tclear: both;\r\n\tfloat: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 64,
	"./af.js": 64,
	"./ar": 71,
	"./ar-dz": 65,
	"./ar-dz.js": 65,
	"./ar-kw": 66,
	"./ar-kw.js": 66,
	"./ar-ly": 67,
	"./ar-ly.js": 67,
	"./ar-ma": 68,
	"./ar-ma.js": 68,
	"./ar-sa": 69,
	"./ar-sa.js": 69,
	"./ar-tn": 70,
	"./ar-tn.js": 70,
	"./ar.js": 71,
	"./az": 72,
	"./az.js": 72,
	"./be": 73,
	"./be.js": 73,
	"./bg": 74,
	"./bg.js": 74,
	"./bn": 75,
	"./bn.js": 75,
	"./bo": 76,
	"./bo.js": 76,
	"./br": 77,
	"./br.js": 77,
	"./bs": 78,
	"./bs.js": 78,
	"./ca": 79,
	"./ca.js": 79,
	"./cs": 80,
	"./cs.js": 80,
	"./cv": 81,
	"./cv.js": 81,
	"./cy": 82,
	"./cy.js": 82,
	"./da": 83,
	"./da.js": 83,
	"./de": 86,
	"./de-at": 84,
	"./de-at.js": 84,
	"./de-ch": 85,
	"./de-ch.js": 85,
	"./de.js": 86,
	"./dv": 87,
	"./dv.js": 87,
	"./el": 88,
	"./el.js": 88,
	"./en-au": 89,
	"./en-au.js": 89,
	"./en-ca": 90,
	"./en-ca.js": 90,
	"./en-gb": 91,
	"./en-gb.js": 91,
	"./en-ie": 92,
	"./en-ie.js": 92,
	"./en-nz": 93,
	"./en-nz.js": 93,
	"./eo": 94,
	"./eo.js": 94,
	"./es": 96,
	"./es-do": 95,
	"./es-do.js": 95,
	"./es.js": 96,
	"./et": 97,
	"./et.js": 97,
	"./eu": 98,
	"./eu.js": 98,
	"./fa": 99,
	"./fa.js": 99,
	"./fi": 100,
	"./fi.js": 100,
	"./fo": 101,
	"./fo.js": 101,
	"./fr": 104,
	"./fr-ca": 102,
	"./fr-ca.js": 102,
	"./fr-ch": 103,
	"./fr-ch.js": 103,
	"./fr.js": 104,
	"./fy": 105,
	"./fy.js": 105,
	"./gd": 106,
	"./gd.js": 106,
	"./gl": 107,
	"./gl.js": 107,
	"./gom-latn": 108,
	"./gom-latn.js": 108,
	"./he": 109,
	"./he.js": 109,
	"./hi": 110,
	"./hi.js": 110,
	"./hr": 111,
	"./hr.js": 111,
	"./hu": 112,
	"./hu.js": 112,
	"./hy-am": 113,
	"./hy-am.js": 113,
	"./id": 114,
	"./id.js": 114,
	"./is": 115,
	"./is.js": 115,
	"./it": 116,
	"./it.js": 116,
	"./ja": 117,
	"./ja.js": 117,
	"./jv": 118,
	"./jv.js": 118,
	"./ka": 119,
	"./ka.js": 119,
	"./kk": 120,
	"./kk.js": 120,
	"./km": 121,
	"./km.js": 121,
	"./kn": 122,
	"./kn.js": 122,
	"./ko": 123,
	"./ko.js": 123,
	"./ky": 124,
	"./ky.js": 124,
	"./lb": 125,
	"./lb.js": 125,
	"./lo": 126,
	"./lo.js": 126,
	"./lt": 127,
	"./lt.js": 127,
	"./lv": 128,
	"./lv.js": 128,
	"./me": 129,
	"./me.js": 129,
	"./mi": 130,
	"./mi.js": 130,
	"./mk": 131,
	"./mk.js": 131,
	"./ml": 132,
	"./ml.js": 132,
	"./mr": 133,
	"./mr.js": 133,
	"./ms": 135,
	"./ms-my": 134,
	"./ms-my.js": 134,
	"./ms.js": 135,
	"./my": 136,
	"./my.js": 136,
	"./nb": 137,
	"./nb.js": 137,
	"./ne": 138,
	"./ne.js": 138,
	"./nl": 140,
	"./nl-be": 139,
	"./nl-be.js": 139,
	"./nl.js": 140,
	"./nn": 141,
	"./nn.js": 141,
	"./pa-in": 142,
	"./pa-in.js": 142,
	"./pl": 143,
	"./pl.js": 143,
	"./pt": 145,
	"./pt-br": 144,
	"./pt-br.js": 144,
	"./pt.js": 145,
	"./ro": 146,
	"./ro.js": 146,
	"./ru": 147,
	"./ru.js": 147,
	"./sd": 148,
	"./sd.js": 148,
	"./se": 149,
	"./se.js": 149,
	"./si": 150,
	"./si.js": 150,
	"./sk": 151,
	"./sk.js": 151,
	"./sl": 152,
	"./sl.js": 152,
	"./sq": 153,
	"./sq.js": 153,
	"./sr": 155,
	"./sr-cyrl": 154,
	"./sr-cyrl.js": 154,
	"./sr.js": 155,
	"./ss": 156,
	"./ss.js": 156,
	"./sv": 157,
	"./sv.js": 157,
	"./sw": 158,
	"./sw.js": 158,
	"./ta": 159,
	"./ta.js": 159,
	"./te": 160,
	"./te.js": 160,
	"./tet": 161,
	"./tet.js": 161,
	"./th": 162,
	"./th.js": 162,
	"./tl-ph": 163,
	"./tl-ph.js": 163,
	"./tlh": 164,
	"./tlh.js": 164,
	"./tr": 165,
	"./tr.js": 165,
	"./tzl": 166,
	"./tzl.js": 166,
	"./tzm": 168,
	"./tzm-latn": 167,
	"./tzm-latn.js": 167,
	"./tzm.js": 168,
	"./uk": 169,
	"./uk.js": 169,
	"./ur": 170,
	"./ur.js": 170,
	"./uz": 172,
	"./uz-latn": 171,
	"./uz-latn.js": 171,
	"./uz.js": 172,
	"./vi": 173,
	"./vi.js": 173,
	"./x-pseudo": 174,
	"./x-pseudo.js": 174,
	"./yo": 175,
	"./yo.js": 175,
	"./zh-cn": 176,
	"./zh-cn.js": 176,
	"./zh-hk": 177,
	"./zh-hk.js": 177,
	"./zh-tw": 178,
	"./zh-tw.js": 178
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 305;


/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<mainview></mainview>"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<p>\r\n\tName: <input name=\"provider_name\" [(ngModel)]=\"provider.name\" value=\"{{provider.name}}\">\r\n\t<a href=\"#\" (click)=\"removeProvider()\">[x]</a>\r\n\t<br>\r\n\tCoverage part (%): <input name=\"provider_coverage_part\" [(ngModel)]=\"provider.coverage_part\" value=\"{{provider.coverage_part}}\">\r\n\t<br>\r\n\tPrices: \r\n\t\t<span *ngFor=\"let price of provider.prices\">\r\n\t\t\t<br>\r\n\t\t\tAge <input name=\"period_start\" [(ngModel)]=\"price.period.start\" placeholder=\"Age at period start\" type=\"number\" min=\"16\" max=\"70\">\r\n\t\t\t- <input name=\"period_end\" [(ngModel)]=\"price.period.end\" placeholder=\"Age at period end\" type=\"number\" min=\"16\" max=\"70\">\r\n\t\t\t:\r\n\t\t\t<input name=\"period_price\" [(ngModel)]=\"price.price\" placeholder=\"Price\" type=\"text\">\r\n\t\t</span>\r\n\t\t<span *ngIf=\"provider.prices.length === 0\">no prices added</span>\r\n\t\t<br>\r\n\t\t<a href=\"#\" (click)=\"addPrice()\">add price</a>\r\n</p>"

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<div class=\"inputs\">\r\n\t<h2>Providers:</h2>\r\n\t<insurance-provider *ngFor=\"let provider of providers; let i=index;\" [(provider)]=\"providers[i]\" (onRemove)=\"removeProvider(i)\"></insurance-provider>\r\n\t<span *ngIf=\"providers.length === 0\">No providers selected</span>\r\n\t<a (click)=\"addProvider()\" href=\"#\">add provider</a>\r\n\r\n\t<h2>Missing tooth price:</h2>\r\n\t<input type=\"number\" [(ngModel)]=\"missing_tooth_price\">\r\n\r\n\t<h2>Calculate for missing teeth between:</h2>\r\n\t<input type=\"number\" [(ngModel)]=\"missing_teeth_min\">\r\n\t<input type=\"number\" [(ngModel)]=\"missing_teeth_max\">\r\n</div>\r\n<div class=\"results\">\r\n\t<h2>Results *:</h2> <a href=\"#\" (click)=\"calculate()\">(re-)calculate</a>\r\n\t* positive overpaids are bad\r\n\r\n<canvas class=\"diagram\" *ngIf=\"lineChartData.length > 0\" baseChart width=\"400\" height=\"400\"\r\n\t[datasets]=\"lineChartData\"\r\n\t[labels]=\"lineChartLabels\"\r\n\t[options]=\"lineChartOptions\"\r\n\t[colors]=\"lineChartColors\"\r\n\t[legend]=\"lineChartLegend\"\r\n\t[chartType]=\"lineChartType\"\r\n\t(chartHover)=\"chartHovered($event)\"\r\n\t(chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>"

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InsurancePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InsurancePeriod; });
var InsuranceProvider = (function () {
    function InsuranceProvider(name, prices, coverage_part) {
        this.name = ""; // provider's name
        this.prices = [];
        this.coverage_part = 0;
        if (name !== undefined) {
            this.name = name;
        }
        if (prices !== undefined) {
            this.prices = prices;
        }
        if (coverage_part !== undefined) {
            this.coverage_part = coverage_part;
        }
    }
    InsuranceProvider.prototype.addPrice = function (price) {
        if (price !== undefined) {
            this.prices.push(price);
        }
        else {
            this.prices.push(new InsurancePrice());
        }
    };
    return InsuranceProvider;
}());

var InsurancePrice = (function () {
    function InsurancePrice(period, price) {
        this.period = new InsurancePeriod();
        this.price = 0; // insurance price during the selected period
        if (period !== undefined) {
            this.period = period;
        }
        if (price !== undefined) {
            this.price = price;
        }
    }
    return InsurancePrice;
}());

var InsurancePeriod = (function () {
    function InsurancePeriod(start, end) {
        if (start !== undefined) {
            this.start = start;
        }
        if (end !== undefined) {
            this.end = end;
        }
    }
    return InsurancePeriod;
}());

//# sourceMappingURL=model.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.bundle.js.map