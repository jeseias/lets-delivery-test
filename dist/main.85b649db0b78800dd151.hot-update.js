"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/components/sidebar/sidebar.tsx":
/*!*********************************************************!*\
  !*** ./src/presentation/components/sidebar/sidebar.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _sidebar_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.data */ "./src/presentation/components/sidebar/sidebar.data.tsx");





const Sidebar = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { gridColumn: "1/2", gridRow: "1/-1", borderRight: "1px solid #eee" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, { alignItems: "center", justifyContent: "center", p: "3rem 2rem" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, null, "Menu")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { mt: "5rem", p: "1rem" }, _sidebar_data__WEBPACK_IMPORTED_MODULE_1__.routes.map(item => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(), onClick: () => navigate(item.route), borderRadius: ".2rem", fontSize: "1.5rem", my: ".5rem", cursor: "pointer", bg: "blackAlpha.100", p: "1rem 2rem", transition: "all ease-in-out .25s", _hover: { bg: 'blackAlpha.300' } }, item.name))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("276fae4dd46fc636e74a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NWI2NDlkYjBiNzg4MDBkZDE1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNQO0FBQ2I7QUFDTTtBQUN4QztBQUNBLHFCQUFxQiw2REFBVztBQUNoQyxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksbUVBQW1FO0FBQzFHLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSxnRUFBZ0U7QUFDcEcsWUFBWSxnREFBbUIsQ0FBQyxxREFBTztBQUN2QyxRQUFRLGdEQUFtQixDQUFDLGlEQUFHLElBQUksdUJBQXVCLEVBQUUscURBQVUsVUFBVSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLEtBQUssZ0RBQUksd01BQXdNLHdCQUF3QjtBQUNwVjtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7O1VDWnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NpZGViYXIuZGF0YSc7XG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGdyaWRDb2x1bW46IFwiMS8yXCIsIGdyaWRSb3c6IFwiMS8tMVwiLCBib3JkZXJSaWdodDogXCIxcHggc29saWQgI2VlZVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgcDogXCIzcmVtIDJyZW1cIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIk1lbnVcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBtdDogXCI1cmVtXCIsIHA6IFwiMXJlbVwiIH0sIHJvdXRlcy5tYXAoaXRlbSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsga2V5OiB1dWlkKCksIG9uQ2xpY2s6ICgpID0+IG5hdmlnYXRlKGl0ZW0ucm91dGUpLCBib3JkZXJSYWRpdXM6IFwiLjJyZW1cIiwgZm9udFNpemU6IFwiMS41cmVtXCIsIG15OiBcIi41cmVtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJnOiBcImJsYWNrQWxwaGEuMTAwXCIsIHA6IFwiMXJlbSAycmVtXCIsIHRyYW5zaXRpb246IFwiYWxsIGVhc2UtaW4tb3V0IC4yNXNcIiwgX2hvdmVyOiB7IGJnOiAnYmxhY2tBbHBoYS4zMDAnIH0gfSwgaXRlbS5uYW1lKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNzZmYWU0ZGQ0NmZjNjM2ZTc0YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==