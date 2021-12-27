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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");




const Sidebar = () => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { gridColumn: "1/2", gridRow: "1/-1", borderRight: "1px solid #eee" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { alignItems: "center", justifyContent: "center", p: "2rem" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Menu")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { mt: "5rem", p: "1rem" }, routes.map(item => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), onClick: () => navigate(item.route), borderRadius: ".2rem", fontSize: "1.5rem", my: ".5rem", cursor: "pointer", bg: "blackAlpha.100", p: "1rem 2rem", transition: "all ease-in-out .25s", _hover: { bg: 'blackAlpha.300' } }, item.name))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef6c7b5cab24e63944d8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOGQ2ZTBiNTJmOWM0ODdhNmEwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRCO0FBQ1A7QUFDYjtBQUNsQztBQUNBLHFCQUFxQiw2REFBVztBQUNoQyxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksbUVBQW1FO0FBQzFHLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSwyREFBMkQ7QUFDL0YsWUFBWSxnREFBbUIsQ0FBQyxxREFBTztBQUN2QyxRQUFRLGdEQUFtQixDQUFDLGlEQUFHLElBQUksdUJBQXVCLHNCQUFzQixnREFBbUIsQ0FBQyxpREFBRyxJQUFJLEtBQUssZ0RBQUksd01BQXdNLHdCQUF3QjtBQUNwVjtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7O1VDWHZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGdyaWRDb2x1bW46IFwiMS8yXCIsIGdyaWRSb3c6IFwiMS8tMVwiLCBib3JkZXJSaWdodDogXCIxcHggc29saWQgI2VlZVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgcDogXCIycmVtXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgXCJNZW51XCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgbXQ6IFwiNXJlbVwiLCBwOiBcIjFyZW1cIiB9LCByb3V0ZXMubWFwKGl0ZW0gPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogdXVpZCgpLCBvbkNsaWNrOiAoKSA9PiBuYXZpZ2F0ZShpdGVtLnJvdXRlKSwgYm9yZGVyUmFkaXVzOiBcIi4ycmVtXCIsIGZvbnRTaXplOiBcIjEuNXJlbVwiLCBteTogXCIuNXJlbVwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBiZzogXCJibGFja0FscGhhLjEwMFwiLCBwOiBcIjFyZW0gMnJlbVwiLCB0cmFuc2l0aW9uOiBcImFsbCBlYXNlLWluLW91dCAuMjVzXCIsIF9ob3ZlcjogeyBiZzogJ2JsYWNrQWxwaGEuMzAwJyB9IH0sIGl0ZW0ubmFtZSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWY2YzdiNWNhYjI0ZTYzOTQ0ZDhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=