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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");



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
    // const navigate = useNavigate()
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { gridColumn: "1/2", gridRow: "1/-1", boxShadow: "0 1rem 2rem rgba(0,0,0, .09)" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, null, "Sidebar"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { mt: "5rem", p: "1rem" }, routes.map(item => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(), onClick: () => navigate(item.route) }, item.name))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8c8808f3cbf1bf7ce99c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjUxMTkzMmUzM2NjMDUxNGJkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFDZDtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQW1CLENBQUMsaURBQUcsSUFBSSwrRUFBK0U7QUFDdEgsUUFBUSxnREFBbUIsQ0FBQyxxREFBTztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLGlEQUFHLElBQUksdUJBQXVCLHNCQUFzQixnREFBbUIsQ0FBQyxpREFBRyxJQUFJLEtBQUssZ0RBQUkseUNBQXlDO0FBQzdKO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7VUNuQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vbGF5b3V0cy9zaWRlYmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICAgICAgcm91dGU6ICcvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRmF2b3JpdGVzJyxcbiAgICAgICAgcm91dGU6ICcvZmF2b3JpdGVzJ1xuICAgIH1cbl07XG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgZ3JpZENvbHVtbjogXCIxLzJcIiwgZ3JpZFJvdzogXCIxLy0xXCIsIGJveFNoYWRvdzogXCIwIDFyZW0gMnJlbSByZ2JhKDAsMCwwLCAuMDkpXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIlNpZGViYXJcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcIjVyZW1cIiwgcDogXCIxcmVtXCIgfSwgcm91dGVzLm1hcChpdGVtID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBrZXk6IHV1aWQoKSwgb25DbGljazogKCkgPT4gbmF2aWdhdGUoaXRlbS5yb3V0ZSkgfSwgaXRlbS5uYW1lKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4Yzg4MDhmM2NiZjFiZjdjZTk5Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==