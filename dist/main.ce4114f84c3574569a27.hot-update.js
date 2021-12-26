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
/******/ 	__webpack_require__.h = () => ("b071759aa91801925a9f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZTQxMTRmODRjMzU3NDU2OWEyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUY7QUFDaEY7QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9HQUF1QjtBQUN0QztBQUNBO0FBQ0EsSUFBSSxvR0FBdUI7QUFDM0I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0dBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxJQUFJLG9HQUF1QjtBQUMzQjtBQUNPO0FBQ1AsV0FBVyxvR0FBdUI7QUFDbEM7Ozs7Ozs7OztVQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvbWFpbi9hZGFwdGVycy9mYXZvcml0ZXMtY2hhcmFjdGVycy1hZGFwdGVyLnRzIiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gZnJvbSBcIkAvbWFpbi9mYWN0b3JpZXMvY2FjaGUvbG9jYWwtc3RvcmFnZS1hZGFwdGVyXCI7XG5leHBvcnQgY29uc3Qgc2F2ZUNoYXJhY3RlckFkYXB0ZXIgPSAoY2hhcmFjdGVyKSA9PiB7XG4gICAgbGV0IGNoYXJhY3RlcnMgPSBnZXRDaGFyYWN0ZXJBZGFwdGVyKCk7XG4gICAgaWYgKGNoYXJhY3RlcnMpIHtcbiAgICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICAgIHJldHVybiBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLnNldCgnY2hhcmFjdGVycycsIGNoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBjaGFyYWN0ZXJzID0gbmV3IEFycmF5KGNoYXJhY3Rlcik7XG4gICAgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzKTtcbn07XG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hhcmFjdGVyQWRhcHRlciA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGNoYXJhY3RlcnMgPSBnZXRDaGFyYWN0ZXJBZGFwdGVyKCk7XG4gICAgaWYgKGNoYXJhY3RlcnMpIHtcbiAgICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICAgIHJldHVybiBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLnNldCgnY2hhcmFjdGVycycsIGNoYXJhY3RlcnMpO1xuICAgIH1cbiAgICBjaGFyYWN0ZXJzID0gbmV3IEFycmF5KGNoYXJhY3Rlcik7XG4gICAgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyQWRhcHRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5nZXQoJ2NoYXJhY3RlcnMnKTtcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMDcxNzU5YWE5MTgwMTkyNWE5ZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==