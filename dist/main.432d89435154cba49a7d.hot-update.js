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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { mt: "5rem", p: "1rem" }, routes.map(item => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), onClick: () => navi }, item.name))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37d97956ac667fd61e91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MzJkODk0MzUxNTRjYmE0OWE3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ0Q7QUFDYjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQVc7QUFDaEMsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLCtFQUErRTtBQUN0SCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSx1QkFBdUIsc0JBQXNCLGdEQUFtQixDQUFDLGlEQUFHLElBQUksS0FBSyxnREFBSSx5QkFBeUI7QUFDN0k7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7OztVQ3BCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9sYXlvdXRzL3NpZGViYXIvaW5kZXgudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICAgICAgcm91dGU6ICcvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRmF2b3JpdGVzJyxcbiAgICAgICAgcm91dGU6ICcvZmF2b3JpdGVzJ1xuICAgIH1cbl07XG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGdyaWRDb2x1bW46IFwiMS8yXCIsIGdyaWRSb3c6IFwiMS8tMVwiLCBib3hTaGFkb3c6IFwiMCAxcmVtIDJyZW0gcmdiYSgwLDAsMCwgLjA5KVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgXCJTaWRlYmFyXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBtdDogXCI1cmVtXCIsIHA6IFwiMXJlbVwiIH0sIHJvdXRlcy5tYXAoaXRlbSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsga2V5OiB1dWlkKCksIG9uQ2xpY2s6ICgpID0+IG5hdmkgfSwgaXRlbS5uYW1lKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzN2Q5Nzk1NmFjNjY3ZmQ2MWU5MVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==