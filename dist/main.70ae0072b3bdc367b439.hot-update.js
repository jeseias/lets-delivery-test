"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/pages/favorites/favorites.tsx":
/*!********************************************************!*\
  !*** ./src/presentation/pages/favorites/favorites.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _presentation_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/presentation/components */ "./src/presentation/components/index.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");




const FavoritesPage = ({ fetch, remove }) => {
    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        consle.log(fetch());
        setCharacters(fetch());
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Favorites Page"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, { gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", gridTemplateRows: "repeat(auto, 5rem)" }, characters[0]
            ? (characters.map(character => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.FavoriteCharacter, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), character: character, remove: remove })))
            : react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Found 0 favorites"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("289a60d96c23bdd2affd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MGFlMDA3MmIzYmRjMzY3YjQzOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0c7QUFDUTtBQUM1QjtBQUNsQyx5QkFBeUIsZUFBZTtBQUN4Qyx3Q0FBd0MsK0NBQVE7QUFDaEQsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLFVBQVU7QUFDakQsUUFBUSxnREFBbUIsQ0FBQyxxREFBTztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksNEZBQTRGO0FBQ2hJLDJDQUEyQyxnREFBbUIsQ0FBQyx1RUFBaUIsSUFBSSxLQUFLLGdEQUFJLDBDQUEwQztBQUN2SSxjQUFjLGdEQUFtQjtBQUNqQztBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7O1VDaEI3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBHcmlkLCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBGYXZvcml0ZUNoYXJhY3RlciB9IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuY29uc3QgRmF2b3JpdGVzUGFnZSA9ICh7IGZldGNoLCByZW1vdmUgfSkgPT4ge1xuICAgIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zbGUubG9nKGZldGNoKCkpO1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKGZldGNoKCkpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwiNXZ3XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIkZhdm9yaXRlcyBQYWdlXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwgMWZyKVwiLCBnYXA6IFwiMXJlbVwiLCBncmlkVGVtcGxhdGVSb3dzOiBcInJlcGVhdChhdXRvLCA1cmVtKVwiIH0sIGNoYXJhY3RlcnNbMF1cbiAgICAgICAgICAgID8gKGNoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhdm9yaXRlQ2hhcmFjdGVyLCB7IGtleTogdXVpZCgpLCBjaGFyYWN0ZXI6IGNoYXJhY3RlciwgcmVtb3ZlOiByZW1vdmUgfSkpKVxuICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkZvdW5kIDAgZmF2b3JpdGVzXCIpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlc1BhZ2U7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyODlhNjBkOTZjMjNiZGQyYWZmZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==