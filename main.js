(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    width: 100%;\n    padding: 0 auto;\n    /* display: block; */\n    /* justify-content: center; */\n    text-align: center;\n}\n\n.center a {\n    margin: 0 auto;\n}\n\n.center img {\n    margin: 0 auto;\n    max-width: 500px;\n    box-shadow: 12px 12px 7px rgba(0,0,0,0.5);\n    /* margin: 0 auto; */\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio-website-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_burger_review_burger_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/burger-review/burger-review.component */ "./src/app/components/burger-review/burger-review.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'jakes-review', component: _components_burger_review_burger_review_component__WEBPACK_IMPORTED_MODULE_5__["BurgerReviewComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_burger_review_burger_review_component__WEBPACK_IMPORTED_MODULE_5__["BurgerReviewComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/burger-review/burger-review.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/burger-review/burger-review.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    width: 100%;\n    padding: 0 auto;\n    text-align: center;\n}\n\n.center img {\n    margin: 0 auto;\n    max-width: 500px;\n}\n\nh1 {\n    font-family: Helvetica;\n    color: #b8B18E;\n    text-transform: uppercase;\n}\n\n.my-auto {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.row {\n    margin-bottom: 15px;\n}\n\n.pic {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/burger-review/burger-review.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/burger-review/burger-review.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h1 class=\"review\">This is my burger review for Matt</h1>\n  <br>\n  <div class=\"content\">\n    <!-- ROW ONE -->\n    <div class=\"row center\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-5 align-self-center\">\n        <p class=\"my-auto\">This is my comprehensive review of Jakes Burgers & Beer</p>\n      </div>\n      <div class=\"col-5\">\n        <img class=\"pic\" src=\"assets/img/jakes.png\" alt=\"\">\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n\n    <!-- ROW TWO -->\n    <div class=\"row center\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-5\">\n          <img class=\"pic\" src=\"assets/img/burger.jpg\" alt=\"\">\n        </div>\n      <div class=\"col-5 align-self-center\">\n        <p class=\"my-auto\">The burger was massive and delicious. The fries were the perfect blend of soft and crispy.</p>\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n\n    <!-- ROW THREE -->\n    <div class=\"row center\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-5 align-self-center\">\n        <p class=\"my-auto\">Overall, a solid burger. I give it an 8 out of 10.</p>\n      </div>\n      <div class=\"col-5\">\n        <img class=\"pic\" src=\"assets/img/good.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/burger-review/burger-review.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/burger-review/burger-review.component.ts ***!
  \*********************************************************************/
/*! exports provided: BurgerReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerReviewComponent", function() { return BurgerReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BurgerReviewComponent = /** @class */ (function () {
    function BurgerReviewComponent() {
    }
    BurgerReviewComponent.prototype.ngOnInit = function () {
    };
    BurgerReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-burger-review',
            template: __webpack_require__(/*! ./burger-review.component.html */ "./src/app/components/burger-review/burger-review.component.html"),
            styles: [__webpack_require__(/*! ./burger-review.component.css */ "./src/app/components/burger-review/burger-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BurgerReviewComponent);
    return BurgerReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    min-height: 100px;\n    position: relative;\n}\n\n.header-body {\n    width: 70%;\n    margin: auto auto;\n}\n\nbody {\n    font-family: Helvetica;\n    \n}\n\na {\n    color: #9FAC84;\n}\n\n/* EXPERIMENT*/\n\n/* NAVIGATION */\n\nnav {\n    width: 80%;\n    margin: 0 auto;\n    padding: 50px 0;\n    font-family: Helvetica;\n    /* box-shadow: 0px 5px 0px #dedede; */\n  }\n\nnav ul {\n    list-style: none;\n    /* text-align: center; */\n  }\n\nnav ul li {\n    display: inline-block;\n  }\n\nnav ul li a {\n    display: block;\n    padding: 8px 15px;\n    text-decoration: none;\n    color: #aaa;\n    /* font-weight: 800; */\n    /* text-transform: uppercase; */\n    margin: 0 10px;\n  }\n\nnav ul li a,\n  nav ul li a:after,\n  nav ul li a:before {\n    transition: all .5s;\n  }\n\nnav ul li a:hover {\n    color: #555;\n  }\n\n/* SHIFT */\n\nnav.shift ul li a {\n    position:relative;\n    z-index: 1;\n  }\n\nnav.shift ul li a:hover {\n    /* color: #91640F; */\n    color: #9FAC84;\n  }\n\nnav.shift ul li a:after {\n    /* display: block; */\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    width: 100%;\n    height: 1px;\n    content: '.';\n    color: transparent;\n    background: #E9EEE0;\n    visibility: none;\n    opacity: 0;\n    z-index: -1;\n  }\n\nnav.shift ul li a:hover:after {\n    opacity: 1;\n    visibility: visible;\n    height: 100%;\n  }\n\n/* EXPERIMENT END */\n\n@media only screen and (min-width: 450px) {\n    .header {\n        padding: 40px 80px 26px;\n    }\n\n    .header img {\n        max-height: 100px;\n    }\n\n    .site-title {\n        position: relative;\n    }\n\n    .site-nav {\n        float: right;\n        text-align: right;\n        margin: .5em 0 0;\n        max-width: 40%;\n    }\n\n    .site-nav li {\n        display: inline-block;\n    }\n\n    .list-pages {\n        list-style: none;\n        display: block;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n    }\n}\n\n@media only screen and (max-width: 450px) {\n  img {\n      width: 100%;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n  <div class=\"navbar justify-content-between \">\n    <a class=\"navbar-brand\" [routerLink]=\"['home']\"><img src=\"assets/img/logo.png\" alt=\"logo\"></a>\n    <nav class=\"inner shift\">\n      <ul class=\"navbar-nav site-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['home']\">HOME</a>\n        </li>\n        <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">ABOUT<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">PORTFOLIO</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">LINKEDIN</a>\n      </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['jakes-review']\">BURGER REVIEW</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    width: 100%;\n    padding: 0 auto;\n    /* display: block; */\n    /* justify-content: center; */\n    text-align: center;\n}\n\n.center img {\n    margin: 0 auto;\n    max-width: 500px;\n    box-shadow: 12px 12px 7px rgba(0,0,0,0.5);\n    /* margin: 0 auto; */\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <a href=\"#\"><img src=\"assets/img/main.png\" alt=\"RJ\"></a>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rjgrant/Desktop/CodeLife/portfolio-website-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map