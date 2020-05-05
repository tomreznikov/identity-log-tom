function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-step></app-main-step>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-step/finish-step.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish-step/finish-step.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinishStepFinishStepComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    Completed. Thank you, {{fullName}}.\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\" style=\"display: flex; justify-content: space-between;\">\n    <div>\n        Identitiy log\n    </div>\n    <div *ngIf=\"activeRoute === 'resize' || activeRoute === 'grouped'\">\n        <!-- <p-paginator [rows]=\"10\" [totalRecords]=\"1200\" [rowsPerPageOptions]=\"[10,20,30]\"></p-paginator> -->\n        <!-- <div>\n            <div *ngFor=\"let item of collection | paginate: { itemsPerPage: 1, currentPage: p }\">\n            </div>\n            <pagination-controls (pageChange)=\"changePage($event)\" maxSize=\"10\" previousLabel=\"Form\" nextLabel=\"Summary\"></pagination-controls>\n        </div> -->\n        <div *ngFor=\"let item of collection | paginate: { itemsPerPage: 1, currentPage: page }\"></div>\n        <pagination-template #p=\"paginationApi\" (pageChange)=\"page = $event; changePage($event)\" maxSize=\"10\">\n\n            <div style=\"display: flex;\">\n                <div class=\"pagination-previous\">\n                    <a (click)=\"goToPage('main')\" [style.color]=\"activeRoute === 'main' ? '#37009A' : '#9b9b9b'\"> Form </a>\n                </div>\n    \n                <div *ngFor=\"let page of p.pages\" [style.color]=\"p.getCurrent() === page.value && activeRoute !== 'grouped' ? '#37009A' : '#9b9b9b'\" style=\"padding-right: 10px; cursor: pointer;\">\n                    <a (click)=\"goToPage('resize'); p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\" style=\"color: #9b9b9b;\">\n                        <span>{{ page.label }}</span>\n                    </a>\n                    <div *ngIf=\"p.getCurrent() === page.value\">\n                        <span>{{ page.label }}</span>\n                    </div>\n                </div>\n    \n                <div class=\"pagination-next\">\n                    <a (click)=\"goToPage('grouped')\" [style.color]=\"activeRoute === 'grouped' ? '#37009A' : '#9b9b9b'\"> Summary </a>\n                </div>\n            </div>\n\n        </pagination-template>\n    </div>\n    <div *ngIf=\"activeRoute !== 'finish'\">\n        <p-button *ngIf=\"!activeRoute || activeRoute === 'main'\" [label]=\"activeRoute === 'grouped' ? 'EXPORT' : 'NEXT'\" icon=\"pi pi-arrow-right\" iconPos=\"right\" (click)=\"next()\"></p-button>\n        <p-button *ngIf=\"activeRoute === 'resize'\" icon=\"pi pi-arrow-right\" [label]=\"activeRoute === 'grouped' ? 'EXPORT' : 'NEXT'\" iconPos=\"right\" (click)=\"nextPage()\"></p-button>\n        <p-button *ngIf=\"activeRoute === 'grouped'\" [label]=\"activeRoute === 'grouped' ? 'EXPORT' : 'NEXT'\" iconPos=\"right\" (click)=\"export();\"></p-button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/grouping-step/grouping-step.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grouping-step/grouping-step.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupingStepGroupingStepComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width: 100%; height: 100%;\" id='my_dataviz_group'></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-header\" style=\"display: flex; justify-content: space-between;\">\n    <div *ngIf=\"!activeRoute || activeRoute === 'main'\">\n        Welcome\n    </div>\n    <div *ngIf=\"activeRoute !== 'main'\">\n        {{fullName}}\n    </div>\n    <div>\n        {{currentDate}}\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-step/main-step.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-step/main-step.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainStepMainStepComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"main-body\">\n    <div *ngIf=\"activeRoute === 'main'\" style=\"display: flex; justify-content: center;\">\n        <div class=\"form\">\n            <div class=\"form-name\">\n                <span class=\"ui-float-label\">\n                    <input id=\"float-input\" type=\"text\" size=\"30\" [(ngModel)]=\"fullName\" (ngModelChange)=\"changeName($event)\" pInputText>\n                    <label for=\"float-input\">Full Name</label>\n                </span>\n            </div>\n            <div>\n                <span class=\"ui-float-label\">\n                    <textarea [disabled]=\"false\" [rows]=\"5\" [cols]=\"30\" [(ngModel)]=\"itemsString\" (ngModelChange)=\"changeArea($event)\" id=\"float-textarea\" autoResize=\"false\" pInputTextarea></textarea>\n                    <label for=\"float-textarea\">Add items</label>\n                </span>\n            </div>\n            <div *ngIf=\"filename\" style=\"display: flex;\">\n                <button class=\"input-icon\" (click)=\"deleteFile()\">\n                    <i class=\"pi pi-times\"></i>\n                </button>\n                {{filename}}\n            </div>\n            <div class=\"upload-btn\">\n                <p-button [label]=\"buttonLabel\" icon=\"pi pi-upload\" iconPos=\"right\" (click)=\"uploader.click()\">\n                    <input #uploader hidden type=\"file\" accept=\".csv\" (change)=\"handleFileSelect($event)\"/>\n                </p-button>\n            </div>\n        </div>\n        <div class=\"tst\"></div>\n    </div>\n    <div *ngIf=\"activeRoute === 'resize'\" style=\"width: 100%; height: 100%;\">\n        <app-resize-step></app-resize-step>\n    </div>\n    <div *ngIf=\"activeRoute === 'grouped'\" style=\"width: 100%; height: 100%;\">\n        <app-grouping-step></app-grouping-step>\n    </div>\n    <div *ngIf=\"activeRoute === 'finish'\" style=\"width: 100%; height: 100%;\">\n        <app-finish-step></app-finish-step>\n    </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resize-step/resize-step.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resize-step/resize-step.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResizeStepResizeStepComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width: 100%; height: 100%;\" id='my_dataviz'></div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [// {
      //   path: '',
      //   redirectTo: '/main',
      //   pathMatch: 'full'
      // },
      // {
      //   path: '',
      //   children: [
      //     {
      //       path: 'main',
      //       component: MainStepComponent,
      //     },
      //     {
      //       path: 'resize',
      //       component: ResizeStepComponent,
      //     },
      //     {
      //       path: 'grouped',
      //       component: GroupingStepComponent,
      //     },
      //     {
      //       path: 'finish',
      //       component: FinishStepComponent,
      //     },
      //   ]
      // }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'adjustingCircle';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _main_step_main_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-step/main-step.component */
    "./src/app/main-step/main-step.component.ts");
    /* harmony import */


    var _resize_step_resize_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./resize-step/resize-step.component */
    "./src/app/resize-step/resize-step.component.ts");
    /* harmony import */


    var _grouping_step_grouping_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./grouping-step/grouping-step.component */
    "./src/app/grouping-step/grouping-step.component.ts");
    /* harmony import */


    var _finish_step_finish_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./finish-step/finish-step.component */
    "./src/app/finish-step/finish-step.component.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/fesm2015/primeng-paginator.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _main_step_main_step_component__WEBPACK_IMPORTED_MODULE_8__["MainStepComponent"], _resize_step_resize_step_component__WEBPACK_IMPORTED_MODULE_9__["ResizeStepComponent"], _grouping_step_grouping_step_component__WEBPACK_IMPORTED_MODULE_10__["GroupingStepComponent"], _finish_step_finish_step_component__WEBPACK_IMPORTED_MODULE_11__["FinishStepComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__["InputTextareaModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_15__["PaginatorModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/finish-step/finish-step.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/finish-step/finish-step.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinishStepFinishStepComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmlzaC1zdGVwL2ZpbmlzaC1zdGVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/finish-step/finish-step.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/finish-step/finish-step.component.ts ***!
    \******************************************************/

  /*! exports provided: FinishStepComponent */

  /***/
  function srcAppFinishStepFinishStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishStepComponent", function () {
      return FinishStepComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var FinishStepComponent = /*#__PURE__*/function () {
      function FinishStepComponent(mainServ) {
        _classCallCheck(this, FinishStepComponent);

        this.mainServ = mainServ;
      }

      _createClass(FinishStepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fullName = this.mainServ.fullName;
        }
      }]);

      return FinishStepComponent;
    }();

    FinishStepComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    FinishStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-finish-step',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finish-step.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/finish-step/finish-step.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finish-step.component.scss */
      "./src/app/finish-step/finish-step.component.scss"))["default"]]
    })], FinishStepComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  position: absolute;\n  bottom: 27px;\n  align-items: center;\n  width: calc(100% - 62px);\n  margin: 0px;\n  padding-left: 18px;\n}\n\n.pagination-previous {\n  padding-right: 10px;\n  cursor: pointer;\n}\n\n.pagination-next {\n  padding-right: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21yZXpuaWtvdjIvRG9jdW1lbnRzL0dpdEh1Yi9hZGp1c3RpbmdDaXJjbGUvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyN3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYycHgpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbn1cblxuLnBhZ2luYXRpb24tcHJldmlvdXMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2luYXRpb24tbmV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyN3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjJweCk7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG59XG5cbi5wYWdpbmF0aW9uLXByZXZpb3VzIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFnaW5hdGlvbi1uZXh0IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(mainServ) {
        _classCallCheck(this, FooterComponent);

        this.mainServ = mainServ;
        this.i = 0;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.mainServ.items.subscribe(event => {
          //   this.collection = event;
          // });
          this.collection = this.mainServ.items;
        }
      }, {
        key: "next",
        value: function next() {
          this.collection = this.mainServ.items; // this.i++;
          // this.activeRoute = this.routes[this.i];

          if (!this.activeRoute || this.activeRoute === 'main') {
            this.activeRoute = 'resize';
            this.page = 1;
            this.mainServ.selectedNum = this.page;
            this.mainServ.changeNum.emit(this.page);
            this.mainServ.activeRoute.emit(this.activeRoute);
          }

          if (this.activeRoute === 'resize') {
            var arr = this.mainServ.itemsString.split(',').map(function (element) {
              return element.trim();
            });

            if (!this.mainServ.items.length) {
              this.mainServ.items = arr.map(function (element) {
                return {
                  name: element.trim(),
                  group: 1,
                  radius: 50
                };
              });
              this.collection = this.mainServ.items;
            } else {
              this.mainServ.items.map(function (element, index) {
                element.name = arr[index];
                element.x = +element.x;
                element.y = +element.y;
                return element;
              });
            }
          }

          this.mainServ.activeRoute.emit(this.activeRoute);
        }
      }, {
        key: "changePage",
        value: function changePage(event) {
          this.mainServ.selectedNum = event;
          this.mainServ.changeNum.emit(event);
        }
      }, {
        key: "goToPage",
        value: function goToPage(page) {
          this.page = null;
          this.activeRoute = page;
          this.mainServ.activeRoute.emit(this.activeRoute);
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;

          if (this.page > this.collection.length) {
            this.goToPage('grouped');
          } else {
            this.mainServ.selectedNum = this.page;
            this.mainServ.changeNum.emit(this.page);
          }
        }
      }, {
        key: "export",
        value: function _export() {
          this.activeRoute = 'finish';
          this.mainServ.activeRoute.emit(this.activeRoute);
          this.mainServ.saveSVG.emit(true);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('p')], FooterComponent.prototype, "p", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/grouping-step/grouping-step.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/grouping-step/grouping-step.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupingStepGroupingStepComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwaW5nLXN0ZXAvZ3JvdXBpbmctc3RlcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/grouping-step/grouping-step.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/grouping-step/grouping-step.component.ts ***!
    \**********************************************************/

  /*! exports provided: GroupingStepComponent */

  /***/
  function srcAppGroupingStepGroupingStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupingStepComponent", function () {
      return GroupingStepComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var GroupingStepComponent = /*#__PURE__*/function () {
      function GroupingStepComponent(mainServ) {
        _classCallCheck(this, GroupingStepComponent);

        this.mainServ = mainServ;
        this.transform = {
          k: 1,
          x: 0,
          y: 0
        };
      }

      _createClass(GroupingStepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var width = +document.getElementById('my_dataviz_group').offsetWidth;
          var height = +document.getElementById('my_dataviz_group').offsetHeight;
          var newRadius;
          var data = this.mainServ.items;
          this.init(width, height, newRadius, data);
          this.mainServ.saveSVG.subscribe(function (event) {
            if (event) {
              var svg = document.getElementById('my_dataviz_group');
              var serializer = new XMLSerializer();
              var source = serializer.serializeToString(svg);

              if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
                source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
              }

              if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
                source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
              }

              source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
              var url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
              var a = document.createElement('a');
              a.href = url;
              a.download = "".concat(_this.mainServ.fullName, "_").concat(moment__WEBPACK_IMPORTED_MODULE_3__().format('MM/DD/YYYY'), ".svg");
              document.body.appendChild(a);
              a.click();
              setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
              }, 0);

              var _data = _this.mainServ.items.map(function (element) {
                var temp = Object.assign({}, element);
                delete temp.index;
                delete temp.vy;
                delete temp.vx;
                delete temp.fx;
                delete temp.fy;
                return temp;
              });

              var csvContent = _this.arrayToCSV({
                data: _data,
                columnDelimiter: ';'
              });

              var universalBOM = "\uFEFF";
              var encodedUri = 'data:text/csv; charset=utf-8,' + encodeURIComponent(universalBOM + csvContent);
              var link = document.createElement('a');
              link.setAttribute('href', encodedUri);
              link.setAttribute('download', "".concat(_this.mainServ.fullName, "_").concat(moment__WEBPACK_IMPORTED_MODULE_3__().format('MM/DD/YYYY'), ".csv"));
              document.body.appendChild(link);
              link.click();
            }
          });
        }
      }, {
        key: "init",
        value: function init(width, height, newRadius, data) {
          var self = this;
          var colorScale = d3.scaleOrdinal(['#b1cbfa', '#deecfc', '#8e98f5', '#9aceff', '#86a6df', '#ffffff']);
          var svg = d3.select('#my_dataviz_group').append('svg').attr('width', width).attr('height', height); // svg.call(d3.zoom()
          //   .extent([[0, 0], [width, height]])
          //   .scaleExtent([0.1, 2])
          //   .on('zoom', function () {
          //     transform = d3.event.transform;
          //     g.attr('transform', d3.event.transform);
          //   }));

          var zoom = d3.zoom().extent([[0, 0], [width, height]]).scaleExtent([-8 / 2, 4]).on('zoom', zoomed);
          svg.call(zoom);

          function zoomed() {
            self.transform = d3.event.transform;
            g.attr('transform', d3.event.transform);
          }

          var node2 = svg.selectAll('.resizingContainer').data(data).enter().append('g').append('circle').attr('class', 'resizingContainer').attr('id', function (d, i) {
            return 'resizingContainer' + i;
          }).attr('r', function (d) {
            if (!d.radius) {
              d.radius = 50;
            }

            return +d.radius + 6;
          }).attr('cx', function (d) {
            return d.x ? d.x : width / 2;
          }).attr('cy', function (d) {
            return d.y ? d.y : height / 2;
          }).style('opacity', '0').on('mouseover', handleMouseOver).on('mouseout', handleMouseOut).call(d3.drag().on('start', function (d) {
            dragstarted(d);
          }).on('drag', function (d, i) {
            d3.event.sourceEvent.stopPropagation();
            svg.select('#resizingContainer' + i).attr('r', function (c) {
              if (!c.radius) {
                c.radius = 50;
              }

              return Math.sqrt(Math.pow((+d3.event.sourceEvent.offsetX - self.transform.x) / self.transform.k - +this.attributes.cx.value, 2) + Math.pow((+d3.event.sourceEvent.offsetY - self.transform.y) / self.transform.k - +this.attributes.cy.value, 2)) + 6;
            });
            svg.select('#draggableCircle' + i).attr('r', function (c) {
              if (!c.radius) {
                c.radius = 50;
              }

              newRadius = Math.sqrt(Math.pow((+d3.event.sourceEvent.offsetX - self.transform.x) / self.transform.k - +this.attributes.cx.value, 2) + Math.pow((+d3.event.sourceEvent.offsetY - self.transform.y) / self.transform.k - +this.attributes.cy.value, 2));
              return newRadius;
            }); // svg.select('#draggableText' + i)
            //   .style("font-size", function (c) {
            //     if (!c.radius) {
            //       c.radius = 50;
            //     }
            //     let perc = ((newRadius - c.radius) / c.radius) * 100;
            //     return (c.radius < newRadius) ? 18 + (18 / 100 * perc) + "px" : 18 + "px";
            //   });
          }).on('end', function (d) {
            d.radius = +d3.select(this).attr('r');
            dragended(d);
          }));
          var node = svg.selectAll('.draggableCircle').data(data).enter().append('g').append('circle').attr('class', 'draggableCircle').attr('id', function (d, i) {
            return 'draggableCircle' + i;
          }).attr('r', function (d) {
            if (!d.radius) {
              d.radius = 50;
            }

            return +d.radius;
          }).attr('cx', function (d) {
            return d.x ? d.x : width / 2;
          }).attr('cy', function (d) {
            return d.y ? d.y : height / 2;
          }).style('fill', function (d, i) {
            return colorScale(d.group);
          }).on('mouseover', handleMouseOver).on('mouseout', handleMouseOut).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
          var node3 = svg.selectAll('.draggableText').data(data).enter().append('g').append('text').attr('id', function (d, i) {
            return 'draggableText' + i;
          }).attr('x', function (d) {
            return d.x ? d.x : width / 2;
          }).attr('y', function (d) {
            return d.y ? d.y : height / 2;
          }).attr('text-anchor', 'middle').style('font-size', 18 + 'px').style('cursor', 'pointer').on('mouseover', handleMouseOver).on('mouseout', handleMouseOut).text(function (d) {
            return d.name;
          });
          var g = svg.selectAll('g');
          var simulation = d3.forceSimulation().force("forceX", d3.forceX().strength(.09).x(width * .5)).force("forceY", d3.forceY().strength(.09).y(height * .5)).force("center", d3.forceCenter().x(width * .5).y(height * .5)).force("charge", d3.forceManyBody().strength(-60));
          initSimulation(true);

          function handleMouseOver(d, i) {
            document.getElementById('resizingContainer' + i).style.opacity = '1';
          }

          function handleMouseOut(d, i) {
            document.getElementById('resizingContainer' + i).style.opacity = '0';
          }

          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(.03).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }

          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(.03);
            d.fx = null;
            d.fy = null;
            initSimulation();
          }

          function initSimulation(queue) {
            simulation.nodes(data).force('collide', d3.forceCollide().strength(.5).radius(function (d) {
              if (!d.radius) {
                d.radius = 50;
              }

              return +d.radius + 10;
            }).iterations(1)).on('tick', function (d) {
              node.attr('cx', function (d) {
                return d.x;
              }).attr('cy', function (d) {
                return d.y;
              });
              node2.attr('cx', function (d, i) {
                return d.x;
              }).attr('cy', function (d, i) {
                if (i === data.length - 1 && queue) {
                  if (simulation.alpha() > 0.04) {
                    var xExtent = d3.extent(node2.data(), function (d) {
                      return d.x;
                    });
                    var yExtent = d3.extent(node2.data(), function (d) {
                      return d.y;
                    });
                    var xScale = width / (xExtent[1] - xExtent[0] + (d.radius * 2 + 12)) * 0.75;
                    var yScale = height / (yExtent[1] - yExtent[0] + (d.radius * 2 + 12)) * 0.75;
                    var minScale = Math.min(xScale, yScale);

                    if (minScale < 1) {
                      self.transform = d3.zoomIdentity.translate(width / 2, height / 2).scale(minScale).translate(-(xExtent[0] + xExtent[1]) / 2, -(yExtent[0] + yExtent[1]) / 2);
                      svg.call(zoom.transform, self.transform);
                    }
                  } else {
                    svg.call(zoom);
                  }
                }

                return d.y;
              });
              node3.attr('x', function (d) {
                return d.x;
              }).attr('y', function (d) {
                return d.y;
              });
            });
          }
        }
      }, {
        key: "arrayToCSV",
        value: function arrayToCSV(_ref) {
          var _ref$data = _ref.data,
              data = _ref$data === void 0 ? null : _ref$data,
              _ref$columnDelimiter = _ref.columnDelimiter,
              columnDelimiter = _ref$columnDelimiter === void 0 ? ',' : _ref$columnDelimiter,
              _ref$lineDelimiter = _ref.lineDelimiter,
              lineDelimiter = _ref$lineDelimiter === void 0 ? '\n' : _ref$lineDelimiter;
          var result, ctr, keys;

          if (data === null || !data.length) {
            return null;
          }

          keys = Object.keys(data[0]);
          result = '';
          result += keys.join(columnDelimiter);
          result += lineDelimiter;
          data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
              if (ctr > 0) {
                result += columnDelimiter;
              }

              result += typeof item[key] === 'string' && item[key].includes(columnDelimiter) ? "\"".concat(item[key], "\"") : item[key];
              ctr++;
            });
            result += lineDelimiter;
          });
          return result;
        }
      }]);

      return GroupingStepComponent;
    }();

    GroupingStepComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    GroupingStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grouping-step',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./grouping-step.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/grouping-step/grouping-step.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./grouping-step.component.scss */
      "./src/app/grouping-step/grouping-step.component.scss"))["default"]]
    })], GroupingStepComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-header {\n  border-bottom: 2px solid #37009A;\n  padding: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21yZXpuaWtvdjIvRG9jdW1lbnRzL0dpdEh1Yi9hZGp1c3RpbmdDaXJjbGUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzcwMDlBO1xuICAgIHBhZGRpbmc6IDE4cHg7XG59IiwiLmFwcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM3MDA5QTtcbiAgcGFkZGluZzogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(mainServ) {
        _classCallCheck(this, HeaderComponent);

        this.mainServ = mainServ;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMMM DD, YYYY');
          this.fullName = this.mainServ.fullName;
          this.mainServ.activeRoute.subscribe(function (element) {
            _this2.fullName = _this2.mainServ.fullName;
            _this2.activeRoute = element;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/main-step/main-step.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/main-step/main-step.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainStepMainStepComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form {\n  margin-top: 160px;\n}\n\n.ui-float-label > label {\n  font-weight: 400;\n  left: 0.8em;\n  top: 1.3em;\n}\n\n.ui-float-label textarea:focus ~ label, .ui-float-label textarea.ui-state-filled ~ label, .ui-float-label > input:focus ~ label, .ui-float-label > input.ui-state-filled ~ label, .ui-float-label > .ui-inputwrapper-focus ~ label, .ui-float-label > .ui-inputwrapper-filled ~ label {\n  top: -1em;\n  font-size: 12px;\n}\n\n.form .ui-inputtext:enabled:hover:not(.ui-state-error) {\n  border-color: #3935F5;\n}\n\n.ui-float-label {\n  display: block;\n  position: relative;\n  margin-bottom: 25px;\n}\n\n.form .ui-inputtext:enabled:focus:not(.ui-state-error) {\n  outline: 0 none;\n  outline-offset: 0;\n  box-shadow: 0 0 0 0.2em #37009a36;\n  border-color: #37009A;\n}\n\n.form .ui-inputtext {\n  background: #ffffff;\n  padding: 0.429em;\n  border: 2px solid #37009A;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0px;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 22px;\n  width: 400px;\n}\n\n.input-icon {\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21yZXpuaWtvdjIvRG9jdW1lbnRzL0dpdEh1Yi9hZGp1c3RpbmdDaXJjbGUvc3JjL2FwcC9tYWluLXN0ZXAvbWFpbi1zdGVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLXN0ZXAvbWFpbi1zdGVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0ksWUFBQTtBQ0NSOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluLXN0ZXAvbWFpbi1zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDE2MHB4O1xufVxuXG4udWktZmxvYXQtbGFiZWw+bGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGVmdDogLjhlbTtcbiAgICB0b3A6IDEuM2VtO1xufVxuXG4udWktZmxvYXQtbGFiZWwgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCwgLnVpLWZsb2F0LWxhYmVsIHRleHRhcmVhLnVpLXN0YXRlLWZpbGxlZCB+IGxhYmVsLCAudWktZmxvYXQtbGFiZWw+aW5wdXQ6Zm9jdXMgfiBsYWJlbCwgLnVpLWZsb2F0LWxhYmVsPmlucHV0LnVpLXN0YXRlLWZpbGxlZCB+IGxhYmVsLCAudWktZmxvYXQtbGFiZWw+LnVpLWlucHV0d3JhcHBlci1mb2N1cyB+IGxhYmVsLCAudWktZmxvYXQtbGFiZWw+LnVpLWlucHV0d3JhcHBlci1maWxsZWQgfiBsYWJlbCB7XG4gICAgdG9wOiAtMWVtO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvcm0gLnVpLWlucHV0dGV4dDplbmFibGVkOmhvdmVyOm5vdCgudWktc3RhdGUtZXJyb3IpIHtcbiAgICBib3JkZXItY29sb3I6ICMzOTM1RjU7XG59XG5cbi51aS1mbG9hdC1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtIC51aS1pbnB1dHRleHQ6ZW5hYmxlZDpmb2N1czpub3QoLnVpLXN0YXRlLWVycm9yKSB7XG4gICAgb3V0bGluZTogMCBub25lO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICMzNzAwOWEzNjtcbiAgICBib3JkZXItY29sb3I6ICMzNzAwOUE7XG59XG5cbi5mb3JtIC51aS1pbnB1dHRleHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMC40MjllbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzcwMDlBO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbn1cblxuLmlucHV0LWljb24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9IiwiLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNjBweDtcbn1cblxuLnVpLWZsb2F0LWxhYmVsID4gbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZWZ0OiAwLjhlbTtcbiAgdG9wOiAxLjNlbTtcbn1cblxuLnVpLWZsb2F0LWxhYmVsIHRleHRhcmVhOmZvY3VzIH4gbGFiZWwsIC51aS1mbG9hdC1sYWJlbCB0ZXh0YXJlYS51aS1zdGF0ZS1maWxsZWQgfiBsYWJlbCwgLnVpLWZsb2F0LWxhYmVsID4gaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgLnVpLWZsb2F0LWxhYmVsID4gaW5wdXQudWktc3RhdGUtZmlsbGVkIH4gbGFiZWwsIC51aS1mbG9hdC1sYWJlbCA+IC51aS1pbnB1dHdyYXBwZXItZm9jdXMgfiBsYWJlbCwgLnVpLWZsb2F0LWxhYmVsID4gLnVpLWlucHV0d3JhcHBlci1maWxsZWQgfiBsYWJlbCB7XG4gIHRvcDogLTFlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybSAudWktaW5wdXR0ZXh0OmVuYWJsZWQ6aG92ZXI6bm90KC51aS1zdGF0ZS1lcnJvcikge1xuICBib3JkZXItY29sb3I6ICMzOTM1RjU7XG59XG5cbi51aS1mbG9hdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtIC51aS1pbnB1dHRleHQ6ZW5hYmxlZDpmb2N1czpub3QoLnVpLXN0YXRlLWVycm9yKSB7XG4gIG91dGxpbmU6IDAgbm9uZTtcbiAgb3V0bGluZS1vZmZzZXQ6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICMzNzAwOWEzNjtcbiAgYm9yZGVyLWNvbG9yOiAjMzcwMDlBO1xufVxuXG4uZm9ybSAudWktaW5wdXR0ZXh0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC40MjllbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3MDA5QTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5pbnB1dC1pY29uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main-step/main-step.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-step/main-step.component.ts ***!
    \**************************************************/

  /*! exports provided: MainStepComponent */

  /***/
  function srcAppMainStepMainStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainStepComponent", function () {
      return MainStepComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var MainStepComponent = /*#__PURE__*/function () {
      function MainStepComponent(mainServ) {
        _classCallCheck(this, MainStepComponent);

        this.mainServ = mainServ;
        this.activeRoute = 'main';
        this.buttonLabel = 'Upload CSV';
        this.itemsString = '';
      }

      _createClass(MainStepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.mainServ.activeRoute.subscribe(function (event) {
            _this3.activeRoute = event;
          });
        }
      }, {
        key: "csvJSON",
        value: function csvJSON(csv) {
          var lines = csv.split("\n");
          var result = [];
          var headers = lines[0].split(";");

          for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(";");

            for (var j = 0; j < headers.length; j++) {
              obj[headers[j]] = currentline[j];
            }

            result.push(obj);
          }

          return result; // return JSON.stringify(result); //JSON
        }
      }, {
        key: "handleFileSelect",
        value: function handleFileSelect(evt) {
          var _this4 = this;

          var files = evt.target.files; // FileList object

          var file = files[0];
          this.filename = file.name;

          if (this.buttonLabel === 'Replace file') {
            this.itemsString = '';
            this.mainServ.itemsString = '';
            this.mainServ.items = [];
          }

          this.buttonLabel = 'Replace file';
          var reader = new FileReader();
          reader.readAsText(file);

          reader.onload = function (event) {
            var csv = _this4.csvJSON(event.target.result);

            _this4.mainServ.items = csv.map(function (element) {
              if (element && element.name && element.name !== ' ') {
                return element;
              }
            }).filter(Boolean);
            _this4.itemsString += _this4.mainServ.items.map(function (element) {
              return element.name;
            }).join(', ');
            _this4.mainServ.itemsString = _this4.itemsString;
          };

          this.uploader.nativeElement.value = '';
        }
      }, {
        key: "deleteFile",
        value: function deleteFile() {
          this.filename = null;
          this.buttonLabel = 'Upload CSV';
          this.itemsString = null;
          this.mainServ.items = [];
          this.mainServ.itemsString = null;
        }
      }, {
        key: "changeName",
        value: function changeName(event) {
          this.mainServ.fullName = event;
        }
      }, {
        key: "changeArea",
        value: function changeArea(event) {
          this.mainServ.itemsString = this.itemsString;
        }
      }]);

      return MainStepComponent;
    }();

    MainStepComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploader', {
      "static": false
    })], MainStepComponent.prototype, "uploader", void 0);
    MainStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-step',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-step.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-step/main-step.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-step.component.scss */
      "./src/app/main-step/main-step.component.scss"))["default"]]
    })], MainStepComponent);
    /***/
  },

  /***/
  "./src/app/resize-step/resize-step.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/resize-step/resize-step.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResizeStepResizeStepComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2l6ZS1zdGVwL3Jlc2l6ZS1zdGVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/resize-step/resize-step.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/resize-step/resize-step.component.ts ***!
    \******************************************************/

  /*! exports provided: ResizeStepComponent */

  /***/
  function srcAppResizeStepResizeStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeStepComponent", function () {
      return ResizeStepComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var ResizeStepComponent = /*#__PURE__*/function () {
      function ResizeStepComponent(mainServ) {
        _classCallCheck(this, ResizeStepComponent);

        this.mainServ = mainServ;
      }

      _createClass(ResizeStepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          var width = +document.getElementById('my_dataviz').offsetWidth;
          var height = +document.getElementById('my_dataviz').offsetHeight;
          var newRadius;
          var allData = [];
          var data = [];
          allData = this.mainServ.items;
          data[0] = this.mainServ.items[this.mainServ.selectedNum - 1];
          this.mainServ.changeNum.subscribe(function (event) {
            data[0] = _this5.mainServ.items[event - 1];
            d3.select('svg').remove();

            _this5.init(width, height, newRadius, data);
          });
          this.init(width, height, newRadius, data);
        }
      }, {
        key: "init",
        value: function init(width, height, newRadius, data) {
          var self = this;
          var colorScale = d3.scaleOrdinal(['#b1cbfa', '#deecfc', '#8e98f5', '#9aceff', '#86a6df', '#ffffff']);
          var box = d3.select('#my_dataviz').append('svg').attr('class', 'box').attr('width', width).attr('height', height);
          var resize = d3.drag().on('drag', function (d) {
            d3.event.sourceEvent.stopPropagation();
            g.selectAll('.resizingContainer').attr('r', function (c) {
              if (!c.radius) {
                c.radius = 50;
              }

              return Math.sqrt(Math.pow(+d3.event.sourceEvent.offsetX - +this.attributes.cx.value, 2) + Math.pow(+d3.event.sourceEvent.offsetY - +this.attributes.cy.value, 2)) + 6;
            });
            g.selectAll('.draggableCircle').attr('r', function (c) {
              if (!c.radius) {
                c.radius = 50;
              }

              newRadius = Math.sqrt(Math.pow(+d3.event.sourceEvent.offsetX - +this.attributes.cx.value, 2) + Math.pow(+d3.event.sourceEvent.offsetY - +this.attributes.cy.value, 2));
              return newRadius;
            }); // g.selectAll('text')
            //   .style('font-size', function (c) {
            //     if (!c.radius) {
            //       c.radius = 50;
            //     }
            //     let perc = ((newRadius - c.radius) / c.radius) * 100;
            //     return (c.radius < newRadius) ? 18 + (18 / 100 * perc) + 'px' : 18 + 'px';
            //   });
          }).on('end', function (d) {
            self.mainServ.items[self.mainServ.selectedNum - 1].radius = d3.select(this).attr('r');
          });
          var g = box.selectAll('.draggableCircle').data(data).enter().append('g');
          g.append('circle').attr('class', 'resizingContainer').attr('id', 'resizingContainer0').attr('cx', width / 2).attr('cy', height / 2).attr('r', function (d) {
            if (!d.radius) {
              d.radius = 50;
            }

            return +d.radius + 6;
          }).on('mouseover', handleMouseOver).on('mouseout', handleMouseOut).call(resize);
          g.append('circle').attr('class', 'draggableCircle').attr('id', 'draggableCircle0').attr('cx', width / 2).attr('cy', height / 2).attr('r', function (d) {
            if (!d.radius) {
              d.radius = 50;
            }

            return +d.radius;
          }).style('fill', function (d, i) {
            for (var index = 1; index < d.group; index++) {
              colorScale(index);
            }

            return colorScale(d.group);
          }).on('mouseover', handleMouseOver).on('mouseout', handleMouseOut);
          g.append('text').attr('x', width / 2).attr('y', height / 2).attr('text-anchor', 'middle').style('font-size', 18 + 'px').style('cursor', 'pointer').on('mouseover', handleMouseOver).on('mouseout', handleMouseOut).text(data[0].name);

          function handleMouseOver(d, i) {
            document.getElementById('resizingContainer0').style.opacity = '1';
          }

          function handleMouseOut(d, i) {
            document.getElementById('resizingContainer0').style.opacity = '0';
          }
        }
      }]);

      return ResizeStepComponent;
    }();

    ResizeStepComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    ResizeStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resize-step',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resize-step.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resize-step/resize-step.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resize-step.component.scss */
      "./src/app/resize-step/resize-step.component.scss"))["default"]]
    })], ResizeStepComponent);
    /***/
  },

  /***/
  "./src/app/services/main.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/main.service.ts ***!
    \******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainService = function MainService() {
      _classCallCheck(this, MainService);

      this.activeRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.items = [];
      this.selectedNum = 1;
      this.changeNum = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.saveSVG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MainService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tomreznikov2/Documents/GitHub/adjustingCircle/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map