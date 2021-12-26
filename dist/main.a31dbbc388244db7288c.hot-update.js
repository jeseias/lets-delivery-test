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
/******/ 	__webpack_require__.h = () => ("50e24e6ea41194237422")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMzFkYmJjMzg4MjQ0ZGI3Mjg4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VCO0FBQ0Y7QUFDYjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQVc7QUFDaEMsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLCtFQUErRTtBQUN0SCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSx1QkFBdUIsc0JBQXNCLGdEQUFtQixDQUFDLGlEQUFHLElBQUksS0FBSyxnREFBSSxvRkFBb0Y7QUFDeE0sWUFBWSxnREFBbUIsK0JBQStCO0FBQzlEO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7VUNyQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vbGF5b3V0cy9zaWRlYmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTZWFyY2gnLFxuICAgICAgICByb3V0ZTogJy8nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGYXZvcml0ZXMnLFxuICAgICAgICByb3V0ZTogJy9mYXZvcml0ZXMnXG4gICAgfVxuXTtcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgZ3JpZENvbHVtbjogXCIxLzJcIiwgZ3JpZFJvdzogXCIxLy0xXCIsIGJveFNoYWRvdzogXCIwIDFyZW0gMnJlbSByZ2JhKDAsMCwwLCAuMDkpXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIlNpZGViYXJcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcIjVyZW1cIiwgcDogXCIxcmVtXCIgfSwgcm91dGVzLm1hcChpdGVtID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBrZXk6IHV1aWQoKSwgb25DbGljazogKCkgPT4gbmF2aWdhdGUoaXRlbS5yb3V0ZSksIGJvcmRlclJhZGl1czogXCIuMnJlbVwiLCBmb250RmFtaWx5OiBcIjJyZW1cIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInR5cG9ncmFwaHlcIiwgT2JqZWN0LmFzc2lnbih7fSwgaXRlbS5uYW1lKSkpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUwZTI0ZTZlYTQxMTk0MjM3NDIyXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9