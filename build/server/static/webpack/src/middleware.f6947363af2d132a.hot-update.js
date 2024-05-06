"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_intl_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/middleware */ \"(middleware)/./node_modules/next-intl/dist/development/middleware.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"(middleware)/./src/config.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_intl_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    defaultLocale: _config__WEBPACK_IMPORTED_MODULE_0__.defaultLocale,\n    locales: _config__WEBPACK_IMPORTED_MODULE_0__.locales,\n    pathnames: _config__WEBPACK_IMPORTED_MODULE_0__.pathnames,\n    localePrefix: _config__WEBPACK_IMPORTED_MODULE_0__.localePrefix\n}));\nconst config = {\n    matcher: [\n        // Enable a redirect to a matching locale at the root\n        \"/\",\n        // Set a cookie to remember the previous locale for\n        // all requests that have a locale prefix\n        \"/(fr|de|tr|ar|en)/:path*\",\n        // Enable redirects that add missing locales\n        // (e.g. `/pathnames` -> `/en/pathnames`)\n        \"/((?!_next|_vercel|.*\\\\..*).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvRDtBQUN1QjtBQUUzRSxpRUFBZUEsZ0VBQWdCQSxDQUFDO0lBQzlCSSxhQUFhQSxvREFBQUE7SUFDYkYsT0FBT0EsOENBQUFBO0lBQ1BELFNBQVNBLGdEQUFBQTtJQUNURSxZQUFZQSxtREFBQUE7QUFDZCxFQUFFLEVBQUM7QUFFSSxNQUFNRSxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1AscURBQXFEO1FBQ3JEO1FBRUEsbURBQW1EO1FBQ25ELHlDQUF5QztRQUN6QztRQUVBLDRDQUE0QztRQUM1Qyx5Q0FBeUM7UUFDekM7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTWlkZGxld2FyZSBmcm9tICduZXh0LWludGwvbWlkZGxld2FyZSc7XHJcbmltcG9ydCB7IHBhdGhuYW1lcywgbG9jYWxlcywgbG9jYWxlUHJlZml4LCBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWlkZGxld2FyZSh7XHJcbiAgZGVmYXVsdExvY2FsZSxcclxuICBsb2NhbGVzLFxyXG4gIHBhdGhuYW1lcyxcclxuICBsb2NhbGVQcmVmaXhcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFtcclxuICAgIC8vIEVuYWJsZSBhIHJlZGlyZWN0IHRvIGEgbWF0Y2hpbmcgbG9jYWxlIGF0IHRoZSByb290XHJcbiAgICAnLycsXHJcblxyXG4gICAgLy8gU2V0IGEgY29va2llIHRvIHJlbWVtYmVyIHRoZSBwcmV2aW91cyBsb2NhbGUgZm9yXHJcbiAgICAvLyBhbGwgcmVxdWVzdHMgdGhhdCBoYXZlIGEgbG9jYWxlIHByZWZpeFxyXG4gICAgJy8oZnJ8ZGV8dHJ8YXJ8ZW4pLzpwYXRoKicsXHJcblxyXG4gICAgLy8gRW5hYmxlIHJlZGlyZWN0cyB0aGF0IGFkZCBtaXNzaW5nIGxvY2FsZXNcclxuICAgIC8vIChlLmcuIGAvcGF0aG5hbWVzYCAtPiBgL2VuL3BhdGhuYW1lc2ApXHJcbiAgICAnLygoPyFfbmV4dHxfdmVyY2VsfC4qXFxcXC4uKikuKiknXHJcbiAgXVxyXG59OyJdLCJuYW1lcyI6WyJjcmVhdGVNaWRkbGV3YXJlIiwicGF0aG5hbWVzIiwibG9jYWxlcyIsImxvY2FsZVByZWZpeCIsImRlZmF1bHRMb2NhbGUiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});