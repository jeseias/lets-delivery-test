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
    (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)().set('characters', new Array(character));
};
const removeCharacterAdapter = (name) => {
    (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)()
        .set('characters', getCharacterAdapter().filter(item => item.name !== name));
};
const getCharacterAdapter = () => {
    return (0,_main_factories_cache_local_storage_adapter__WEBPACK_IMPORTED_MODULE_0__.makeLocalStorageAdapter)().get('characters');
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("afc268a7d2d60f31e15f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOTA4MmRjYjA5ZWIyMDg4ZDBjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUY7QUFDaEY7QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9HQUF1QjtBQUN0QztBQUNBLElBQUksb0dBQXVCO0FBQzNCO0FBQ087QUFDUCxJQUFJLG9HQUF1QjtBQUMzQjtBQUNBO0FBQ087QUFDUCxXQUFXLG9HQUF1QjtBQUNsQzs7Ozs7Ozs7O1VDZkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL21haW4vYWRhcHRlcnMvZmF2b3JpdGVzLWNoYXJhY3RlcnMtYWRhcHRlci50cyIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlTG9jYWxTdG9yYWdlQWRhcHRlciB9IGZyb20gXCJAL21haW4vZmFjdG9yaWVzL2NhY2hlL2xvY2FsLXN0b3JhZ2UtYWRhcHRlclwiO1xuZXhwb3J0IGNvbnN0IHNhdmVDaGFyYWN0ZXJBZGFwdGVyID0gKGNoYXJhY3RlcikgPT4ge1xuICAgIGxldCBjaGFyYWN0ZXJzID0gZ2V0Q2hhcmFjdGVyQWRhcHRlcigpO1xuICAgIGlmIChjaGFyYWN0ZXJzKSB7XG4gICAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgICByZXR1cm4gbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzKTtcbiAgICB9XG4gICAgbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5zZXQoJ2NoYXJhY3RlcnMnLCBuZXcgQXJyYXkoY2hhcmFjdGVyKSk7XG59O1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNoYXJhY3RlckFkYXB0ZXIgPSAobmFtZSkgPT4ge1xuICAgIG1ha2VMb2NhbFN0b3JhZ2VBZGFwdGVyKClcbiAgICAgICAgLnNldCgnY2hhcmFjdGVycycsIGdldENoYXJhY3RlckFkYXB0ZXIoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgIT09IG5hbWUpKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q2hhcmFjdGVyQWRhcHRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gbWFrZUxvY2FsU3RvcmFnZUFkYXB0ZXIoKS5nZXQoJ2NoYXJhY3RlcnMnKTtcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZmMyNjhhN2QyZDYwZjMxZTE1ZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==