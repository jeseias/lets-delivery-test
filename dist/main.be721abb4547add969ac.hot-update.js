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



const FavoritesPage = ({ getFavoritesCharacters, remove }) => {
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
/******/ 	__webpack_require__.h = () => ("5b839f7785d7c1e5bdd6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZTcyMWFiYjQ1NDdhZGQ5NjlhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEI7QUFDUTtBQUM5RCx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0EsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLFVBQVU7QUFDakQsUUFBUSxnREFBbUIsQ0FBQyxxREFBTztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksNEZBQTRGLDhCQUE4QixnREFBbUIsQ0FBQyx1RUFBaUIsSUFBSSxvQ0FBb0M7QUFDM087QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7OztVQ1Q3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2Zhdm9yaXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgR3JpZCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgRmF2b3JpdGVDaGFyYWN0ZXIgfSBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzJztcbmNvbnN0IEZhdm9yaXRlc1BhZ2UgPSAoeyBnZXRGYXZvcml0ZXNDaGFyYWN0ZXJzLCByZW1vdmUgfSkgPT4ge1xuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBnZXRGYXZvcml0ZXNDaGFyYWN0ZXJzKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcIjV2d1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgXCJGYXZvcml0ZXMgUGFnZVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDQsIDFmcilcIiwgZ2FwOiBcIjFyZW1cIiwgZ3JpZFRlbXBsYXRlUm93czogXCJyZXBlYXQoYXV0bywgNXJlbSlcIiB9LCBjaGFyYWN0ZXJzLm1hcChjaGFyYWN0ZXIgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChGYXZvcml0ZUNoYXJhY3RlciwgeyBjaGFyYWN0ZXI6IGNoYXJhY3RlciwgcmVtb3ZlOiB0cnVlIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXNQYWdlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWI4MzlmNzc4NWQ3YzFlNWJkZDZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=