"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/pages/detailed-character/index.tsx":
/*!*************************************************************!*\
  !*** ./src/presentation/pages/detailed-character/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");




const DetailedCharacter = () => {
    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { name, img, gender, psiPowers } = character;
    if (!character) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, { p: "2rem", my: "1rem", alignItems: "center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { h: "15rem", mr: "2rem" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, { src: img, height: "100%" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, { fontSize: "5xl", textTransform: "uppercase" }, name),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, { mb: "1rem" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, { as: "h3", fontSize: "2xl" }, "Powers"),
                psiPowers.map(power => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])() },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, { as: "h3", fontSize: "2xl", fontWeight: "normal" }, power.name))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, { mt: "1rem" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { label: "Add to favorites", placement: "left" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, { mr: "1rem" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdFavorite, null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailedCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae14d2ad7b480ab847d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41OWQ0M2E2ODE1ZGIxYmM0YWNhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQytDO0FBQ3JEO0FBQ1U7QUFDNUM7QUFDQSxzQ0FBc0MsK0NBQVE7QUFDOUMsWUFBWSwrQkFBK0I7QUFDM0M7QUFDQSxlQUFlLGdEQUFtQjtBQUNsQztBQUNBLFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw2Q0FBNkM7QUFDckYsUUFBUSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLHdCQUF3QjtBQUMzRCxZQUFZLGdEQUFtQixDQUFDLG1EQUFLLElBQUksMEJBQTBCO0FBQ25FLFFBQVEsZ0RBQW1CLENBQUMsaURBQUc7QUFDL0IsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDZDQUE2QztBQUN4RixZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksWUFBWTtBQUN2RCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHO0FBQ25DLGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDJCQUEyQjtBQUMxRSx3Q0FBd0MsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxLQUFLLGdEQUFJLElBQUk7QUFDaEYsb0JBQW9CLGdEQUFtQixDQUFDLHFEQUFPLElBQUksaURBQWlEO0FBQ3BHLFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSxZQUFZO0FBQ3BELGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDhDQUE4QztBQUM3RixvQkFBb0IsZ0RBQW1CLENBQUMsb0RBQU0sSUFBSSxZQUFZO0FBQzlELHdCQUF3QixnREFBbUIsQ0FBQyxzREFBVTtBQUN0RDtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7VUN6QmpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vcGFnZXMvZGV0YWlsZWQtY2hhcmFjdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGl2aWRlciwgRmxleCwgSGVhZGluZywgSW1hZ2UsIFRvb2x0aXAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgTWRGYXZvcml0ZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmNvbnN0IERldGFpbGVkQ2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IHsgbmFtZSwgaW1nLCBnZW5kZXIsIHBzaVBvd2VycyB9ID0gY2hhcmFjdGVyO1xuICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkxvYWRpbmcuLi5cIik7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IHA6IFwiMnJlbVwiLCBteTogXCIxcmVtXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgaDogXCIxNXJlbVwiLCBtcjogXCIycmVtXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2UsIHsgc3JjOiBpbWcsIGhlaWdodDogXCIxMDAlXCIgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgeyBmb250U2l6ZTogXCI1eGxcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9LCBuYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGl2aWRlciwgeyBtYjogXCIxcmVtXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIHsgYXM6IFwiaDNcIiwgZm9udFNpemU6IFwiMnhsXCIgfSwgXCJQb3dlcnNcIiksXG4gICAgICAgICAgICAgICAgcHNpUG93ZXJzLm1hcChwb3dlciA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsga2V5OiB1dWlkKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCB7IGFzOiBcImgzXCIsIGZvbnRTaXplOiBcIjJ4bFwiLCBmb250V2VpZ2h0OiBcIm5vcm1hbFwiIH0sIHBvd2VyLm5hbWUpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBtdDogXCIxcmVtXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IFwiQWRkIHRvIGZhdm9yaXRlc1wiLCBwbGFjZW1lbnQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG1yOiBcIjFyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZEZhdm9yaXRlLCBudWxsKSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZENoYXJhY3RlcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFlMTRkMmFkN2I0ODBhYjg0N2Q1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9