"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/pages/favorites/index.tsx":
/*!****************************************************!*\
  !*** ./src/presentation/pages/favorites/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _presentation_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/presentation/components */ "./src/presentation/components/index.ts");



const FavoritesPage = ({ getFavoritesCharacters }) => {
    const characters = getFavoritesCharacters();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Favorites Page"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, { gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", gridTemplateRows: "repeat(auto, 5rem)" }, characters.map(character => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.FavoriteCharacter, { character: character, remove: true })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1c5d68af59a6c38febb6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NDgyZjY5ODQzMzhiODE2Y2Q2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEI7QUFDUTtBQUM5RCx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0EsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLFVBQVU7QUFDakQsUUFBUSxnREFBbUIsQ0FBQyxxREFBTztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksNEZBQTRGLDhCQUE4QixnREFBbUIsQ0FBQyx1RUFBaUIsSUFBSSxvQ0FBb0M7QUFDM087QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7OztVQ1Q3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2Zhdm9yaXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgR3JpZCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgRmF2b3JpdGVDaGFyYWN0ZXIgfSBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzJztcbmNvbnN0IEZhdm9yaXRlc1BhZ2UgPSAoeyBnZXRGYXZvcml0ZXNDaGFyYWN0ZXJzIH0pID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gZ2V0RmF2b3JpdGVzQ2hhcmFjdGVycygpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCI1dndcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIFwiRmF2b3JpdGVzIFBhZ2VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCg0LCAxZnIpXCIsIGdhcDogXCIxcmVtXCIsIGdyaWRUZW1wbGF0ZVJvd3M6IFwicmVwZWF0KGF1dG8sIDVyZW0pXCIgfSwgY2hhcmFjdGVycy5tYXAoY2hhcmFjdGVyID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmF2b3JpdGVDaGFyYWN0ZXIsIHsgY2hhcmFjdGVyOiBjaGFyYWN0ZXIsIHJlbW92ZTogdHJ1ZSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFjNWQ2OGFmNTlhNmMzOGZlYmI2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9