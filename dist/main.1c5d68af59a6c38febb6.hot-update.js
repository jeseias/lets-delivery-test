"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/main/adapters/favorites-characters-adapter.ts":
/*!***********************************************************!*\
  !*** ./src/main/adapters/favorites-characters-adapter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveCharacterAdapter": () => (/* binding */ saveCharacterAdapter),
/* harmony export */   "getCharacterAdapter": () => (/* binding */ getCharacterAdapter)
/* harmony export */ });
/* harmony import */ var _main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/main/factories/cache/local-storage-adapter */ "./src/main/factories/cache/local-storage-adapter.ts");

const saveCharacterAdapter = (character) => {
    let characters = getCharacterAdapter();
    if (characters) {
        characters.push(character);
        return (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)().set('characters', characters);
    }
    characters = new Array(character);
    (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)().set('characters', characters);
};
const getCharacterAdapter = () => {
    return (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)().get('characters');
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f7f5402658469ffe1d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYzVkNjhhZjU5YTZjMzhmZWJiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RjtBQUNoRjtBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0dBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxJQUFJLG9HQUF1QjtBQUMzQjtBQUNPO0FBQ1AsV0FBVyxvR0FBdUI7QUFDbEM7Ozs7Ozs7OztVQ1pBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9tYWluL2FkYXB0ZXJzL2Zhdm9yaXRlcy1jaGFyYWN0ZXJzLWFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIgfSBmcm9tIFwiQC9tYWluL2ZhY3Rvcmllcy9jYWNoZS9sb2NhbC1zdG9yYWdlLWFkYXB0ZXJcIjtcbmV4cG9ydCBjb25zdCBzYXZlQ2hhcmFjdGVyQWRhcHRlciA9IChjaGFyYWN0ZXIpID0+IHtcbiAgICBsZXQgY2hhcmFjdGVycyA9IGdldENoYXJhY3RlckFkYXB0ZXIoKTtcbiAgICBpZiAoY2hhcmFjdGVycykge1xuICAgICAgICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgICAgcmV0dXJuIG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyKCkuc2V0KCdjaGFyYWN0ZXJzJywgY2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGNoYXJhY3RlcnMgPSBuZXcgQXJyYXkoY2hhcmFjdGVyKTtcbiAgICBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLnNldCgnY2hhcmFjdGVycycsIGNoYXJhY3RlcnMpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJBZGFwdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLmdldCgnY2hhcmFjdGVycycpO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmN2Y1NDAyNjU4NDY5ZmZlMWQ5XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9