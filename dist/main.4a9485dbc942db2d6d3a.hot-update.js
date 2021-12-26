"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/layouts/sidebar/index.tsx":
/*!****************************************************!*\
  !*** ./src/presentation/layouts/sidebar/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");




const routes = [
    {
        name: 'Search',
        route: '/'
    },
    {
        name: 'Favorites',
        route: '/favorites'
    }
];
const Sidebar = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { gridColumn: "1/2", gridRow: "1/-1", boxShadow: "0 1rem 2rem rgba(0,0,0, .09)" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Sidebar"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { mt: "5rem", p: "1rem" }, routes.map(item => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), onClick: () => navigate(item.route), borderRadius: ".2rem", fontFamily: "2rem" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("typography", Object.assign({}, item.name))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae4154079e5c8c7e99ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YTk0ODVkYmM5NDJkYjJkNmQzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ0Q7QUFDYjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQVc7QUFDaEMsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLCtFQUErRTtBQUN0SCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSx1QkFBdUIsc0JBQXNCLGdEQUFtQixDQUFDLGlEQUFHLElBQUksS0FBSyxnREFBSSxvRkFBb0Y7QUFDeE0sWUFBWSxnREFBbUIsK0JBQStCO0FBQzlEO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7VUNyQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vbGF5b3V0cy9zaWRlYmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1NlYXJjaCcsXG4gICAgICAgIHJvdXRlOiAnLydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gICAgICAgIHJvdXRlOiAnL2Zhdm9yaXRlcydcbiAgICB9XG5dO1xuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBncmlkQ29sdW1uOiBcIjEvMlwiLCBncmlkUm93OiBcIjEvLTFcIiwgYm94U2hhZG93OiBcIjAgMXJlbSAycmVtIHJnYmEoMCwwLDAsIC4wOSlcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIFwiU2lkZWJhclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgbXQ6IFwiNXJlbVwiLCBwOiBcIjFyZW1cIiB9LCByb3V0ZXMubWFwKGl0ZW0gPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogdXVpZCgpLCBvbkNsaWNrOiAoKSA9PiBuYXZpZ2F0ZShpdGVtLnJvdXRlKSwgYm9yZGVyUmFkaXVzOiBcIi4ycmVtXCIsIGZvbnRGYW1pbHk6IFwiMnJlbVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHlwb2dyYXBoeVwiLCBPYmplY3QuYXNzaWduKHt9LCBpdGVtLm5hbWUpKSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWU0MTU0MDc5ZTVjOGM3ZTk5ZWNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=