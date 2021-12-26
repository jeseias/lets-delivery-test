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
/* harmony export */   "removeCharacterAdapter": () => (/* binding */ removeCharacterAdapter),
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
const removeCharacterAdapter = (name) => {
    let characters = getCharacterAdapter();
    if (characters) {
        characters.filter(cha);
        return (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)().set('characters', characters);
    }
    characters = new Array();
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
/******/ 	__webpack_require__.h = () => ("0dfd9e6fad26f1a2da2b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNTZiZGZiZDM2ODFhMTc2MDg1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUY7QUFDaEY7QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9HQUF1QjtBQUN0QztBQUNBO0FBQ0EsSUFBSSxvR0FBdUI7QUFDM0I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0dBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxJQUFJLG9HQUF1QjtBQUMzQjtBQUNPO0FBQ1AsV0FBVyxvR0FBdUI7QUFDbEM7Ozs7Ozs7OztVQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvbWFpbi9hZGFwdGVycy9mYXZvcml0ZXMtY2hhcmFjdGVycy1hZGFwdGVyLnRzIiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gZnJvbSBcIkAvbWFpbi9mYWN0b3JpZXMvY2FjaGUvbG9jYWwtc3RvcmFnZS1hZGFwdGVyXCI7XG5leHBvcnQgY29uc3Qgc2F2ZUNoYXJhY3RlckFkYXB0ZXIgPSAoY2hhcmFjdGVyKSA9PiB7XG4gICAgbGV0IGNoYXJhY3RlcnMgPSBnZXRDaGFyYWN0ZXJBZGFwdGVyKCk7XG4gICAgaWYgKGNoYXJhY3RlcnMpIHtcbiAgICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICAgIHJldHVybiBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLnNldCgnY2hhcmFjdGVycycsIGNoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBjaGFyYWN0ZXJzID0gbmV3IEFycmF5KGNoYXJhY3Rlcik7XG4gICAgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hhcmFjdGVyQWRhcHRlciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNoYXJhY3RlcnMgPSBnZXRDaGFyYWN0ZXJBZGFwdGVyKCk7XG4gICAgaWYgKGNoYXJhY3RlcnMpIHtcbiAgICAgICAgY2hhcmFjdGVycy5maWx0ZXIoY2hhKTtcbiAgICAgICAgcmV0dXJuIG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyKCkuc2V0KCdjaGFyYWN0ZXJzJywgY2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGNoYXJhY3RlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLnNldCgnY2hhcmFjdGVycycsIGNoYXJhY3RlcnMpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJBZGFwdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLmdldCgnY2hhcmFjdGVycycpO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBkZmQ5ZTZmYWQyNmYxYTJkYTJiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9