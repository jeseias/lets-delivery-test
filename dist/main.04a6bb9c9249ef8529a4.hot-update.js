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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");


const FavoritesPage = ({ getFavoritesCharacters }) => {
    const characters = getFavoritesCharacters();
    console.log(characters);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, null, "Favorites Page"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null, characters.map(character => react__WEBPACK_IMPORTED_MODULE_0__.createElement(FavoriteCharacter, Object.assign({}, character))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c17a0ec6234f3d9db290")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNGE2YmI5YzkyNDllZjg1MjlhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNzQjtBQUNoRCx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQSxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsaURBQUcsb0NBQW9DLGdEQUFtQixvQ0FBb0M7QUFDMUg7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7OztVQ1Q3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2Zhdm9yaXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuY29uc3QgRmF2b3JpdGVzUGFnZSA9ICh7IGdldEZhdm9yaXRlc0NoYXJhY3RlcnMgfSkgPT4ge1xuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBnZXRGYXZvcml0ZXNDaGFyYWN0ZXJzKCk7XG4gICAgY29uc29sZS5sb2coY2hhcmFjdGVycyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcIjV2d1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgXCJGYXZvcml0ZXMgUGFnZVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsIGNoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhdm9yaXRlQ2hhcmFjdGVyLCBPYmplY3QuYXNzaWduKHt9LCBjaGFyYWN0ZXIpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxN2EwZWM2MjM0ZjNkOWRiMjkwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9