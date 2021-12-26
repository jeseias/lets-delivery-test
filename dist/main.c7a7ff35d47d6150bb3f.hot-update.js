"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/components/favorite-character/index.tsx":
/*!******************************************************************!*\
  !*** ./src/presentation/components/favorite-character/index.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");



const FavoriteCharacter = ({ img, name }) => {
    const CharacterLink = `${AppRoutes.Characters}/${slug}`;
    const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, { src: img, h: "100%" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, null, name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { label: "Remove from favorite", placement: "left" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdFavorite, { size: "4rem" }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { label: "More details", placement: "right" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdRemoveRedEye, { size: "4rem" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b6a8d4a38f5175a876d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jN2E3ZmYzNWQ0N2Q2MTUwYmIzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QztBQUNWO0FBQzVELDZCQUE2QixXQUFXO0FBQ3hDLDZCQUE2QixxQkFBcUIsR0FBRyxLQUFLO0FBQzFELG1FQUFtRSxTQUFTLFFBQVE7QUFDcEYsWUFBWSxnREFBbUIsQ0FBQyxpREFBRztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLG1EQUFLLElBQUkscUJBQXFCO0FBQzFELFFBQVEsZ0RBQW1CLENBQUMscURBQU87QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxrREFBSTtBQUNoQyxZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksa0RBQWtEO0FBQzdGLGdCQUFnQixnREFBbUIsQ0FBQyxpREFBRztBQUN2QyxvQkFBb0IsZ0RBQW1CLENBQUMsc0RBQVUsSUFBSSxjQUFjO0FBQ3BFLFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSwyQ0FBMkM7QUFDdEYsZ0JBQWdCLGdEQUFtQixDQUFDLGlEQUFHO0FBQ3ZDLG9CQUFvQixnREFBbUIsQ0FBQywwREFBYyxJQUFJLGNBQWM7QUFDeEU7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7O1VDakJqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZmF2b3JpdGUtY2hhcmFjdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBJbWFnZSwgVG9vbHRpcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTWRGYXZvcml0ZSwgTWRSZW1vdmVSZWRFeWUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5jb25zdCBGYXZvcml0ZUNoYXJhY3RlciA9ICh7IGltZywgbmFtZSB9KSA9PiB7XG4gICAgY29uc3QgQ2hhcmFjdGVyTGluayA9IGAke0FwcFJvdXRlcy5DaGFyYWN0ZXJzfS8ke3NsdWd9YDtcbiAgICBjb25zdCBoYW5kbGVHb1RvRGV0YWlsZWRQYWdlID0gKCkgPT4gbmF2aWdhdGUoQ2hhcmFjdGVyTGluaywgeyBzdGF0ZTogeyBuYW1lIH0gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IGltZywgaDogXCIxMDAlXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgbmFtZSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJSZW1vdmUgZnJvbSBmYXZvcml0ZVwiLCBwbGFjZW1lbnQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRGYXZvcml0ZSwgeyBzaXplOiBcIjRyZW1cIiB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IGxhYmVsOiBcIk1vcmUgZGV0YWlsc1wiLCBwbGFjZW1lbnQ6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kUmVtb3ZlUmVkRXllLCB7IHNpemU6IFwiNHJlbVwiIH0pKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVDaGFyYWN0ZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YjZhOGQ0YTM4ZjUxNzVhODc2ZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==