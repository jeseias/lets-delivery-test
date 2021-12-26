"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/infra/cache/index.ts":
/*!**********************************!*\
  !*** ./src/infra/cache/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageAdapter": () => (/* reexport safe */ _local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.LocalStorageAdapter)
/* harmony export */ });
/* harmony import */ var _local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage-adapter */ "./src/infra/cache/local-storage-adapter.ts");



/***/ }),

/***/ "./src/infra/cache/local-storage-adapter.ts":
/*!**************************************************!*\
  !*** ./src/infra/cache/local-storage-adapter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageAdapter": () => (/* binding */ LocalStorageAdapter)
/* harmony export */ });
class LocalStorageAdapter {
    set(key, value) {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            localStorage.removeItem(key);
        }
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}


/***/ }),

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
const removeCharacterAdapter = (character) => {
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


/***/ }),

/***/ "./src/main/factories/cache/local-storage-adapter.ts":
/*!***********************************************************!*\
  !*** ./src/main/factories/cache/local-storage-adapter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeLocalStorageAdapter": () => (/* binding */ makeLocalStorageAdapter)
/* harmony export */ });
/* harmony import */ var _infra_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infra/cache */ "./src/infra/cache/index.ts");

const makeLocalStorageAdapter = () => new _infra_cache__WEBPACK_IMPORTED_MODULE_0__.LocalStorageAdapter();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce4114f84c3574569a27")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kM2QzNDg2YzMyYWNkZDM5MGEwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p1RjtBQUNoRjtBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0dBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxJQUFJLG9HQUF1QjtBQUMzQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvR0FBdUI7QUFDdEM7QUFDQTtBQUNBLElBQUksb0dBQXVCO0FBQzNCO0FBQ087QUFDUCxXQUFXLG9HQUF1QjtBQUNsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCb0Q7QUFDN0MsMENBQTBDLDZEQUFtQjs7Ozs7Ozs7O1VDRHBFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9pbmZyYS9jYWNoZS9pbmRleC50cyIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL2luZnJhL2NhY2hlL2xvY2FsLXN0b3JhZ2UtYWRhcHRlci50cyIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL21haW4vYWRhcHRlcnMvZmF2b3JpdGVzLWNoYXJhY3RlcnMtYWRhcHRlci50cyIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL21haW4vZmFjdG9yaWVzL2NhY2hlL2xvY2FsLXN0b3JhZ2UtYWRhcHRlci50cyIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtYWRhcHRlcic7XG4iLCJleHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIgfSBmcm9tIFwiQC9tYWluL2ZhY3Rvcmllcy9jYWNoZS9sb2NhbC1zdG9yYWdlLWFkYXB0ZXJcIjtcbmV4cG9ydCBjb25zdCBzYXZlQ2hhcmFjdGVyQWRhcHRlciA9IChjaGFyYWN0ZXIpID0+IHtcbiAgICBsZXQgY2hhcmFjdGVycyA9IGdldENoYXJhY3RlckFkYXB0ZXIoKTtcbiAgICBpZiAoY2hhcmFjdGVycykge1xuICAgICAgICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgICAgcmV0dXJuIG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyKCkuc2V0KCdjaGFyYWN0ZXJzJywgY2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGNoYXJhY3RlcnMgPSBuZXcgQXJyYXkoY2hhcmFjdGVyKTtcbiAgICBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlcigpLnNldCgnY2hhcmFjdGVycycsIGNoYXJhY3RlcnMpO1xufTtcbmV4cG9ydCBjb25zdCByZW1vdmVDaGFyYWN0ZXJBZGFwdGVyID0gKGNoYXJhY3RlcikgPT4ge1xuICAgIGxldCBjaGFyYWN0ZXJzID0gZ2V0Q2hhcmFjdGVyQWRhcHRlcigpO1xuICAgIGlmIChjaGFyYWN0ZXJzKSB7XG4gICAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgICByZXR1cm4gbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgY2hhcmFjdGVycyA9IG5ldyBBcnJheShjaGFyYWN0ZXIpO1xuICAgIG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyKCkuc2V0KCdjaGFyYWN0ZXJzJywgY2hhcmFjdGVycyk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlckFkYXB0ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyKCkuZ2V0KCdjaGFyYWN0ZXJzJyk7XG59O1xuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlQWRhcHRlciB9IGZyb20gXCJAL2luZnJhL2NhY2hlXCI7XG5leHBvcnQgY29uc3QgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIgPSAoKSA9PiBuZXcgTG9jYWxTdG9yYWdlQWRhcHRlcigpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2U0MTE0Zjg0YzM1NzQ1NjlhMjdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=