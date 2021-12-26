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



const FavoritesPage = ({ save, remove }) => {
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
/******/ 	__webpack_require__.h = () => ("d322e794a3ef6dbb3b80")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YjgzOWY3Nzg1ZDdjMWU1YmRkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEI7QUFDUTtBQUM5RCx5QkFBeUIsY0FBYztBQUN2QztBQUNBLFlBQVksZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxVQUFVO0FBQ2pELFFBQVEsZ0RBQW1CLENBQUMscURBQU87QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLDRGQUE0Riw4QkFBOEIsZ0RBQW1CLENBQUMsdUVBQWlCLElBQUksb0NBQW9DO0FBQzNPO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7VUNUN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9mYXZvcml0ZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhdm9yaXRlQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5jb25zdCBGYXZvcml0ZXNQYWdlID0gKHsgc2F2ZSwgcmVtb3ZlIH0pID0+IHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gZ2V0RmF2b3JpdGVzQ2hhcmFjdGVycygpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCI1dndcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIFwiRmF2b3JpdGVzIFBhZ2VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCg0LCAxZnIpXCIsIGdhcDogXCIxcmVtXCIsIGdyaWRUZW1wbGF0ZVJvd3M6IFwicmVwZWF0KGF1dG8sIDVyZW0pXCIgfSwgY2hhcmFjdGVycy5tYXAoY2hhcmFjdGVyID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmF2b3JpdGVDaGFyYWN0ZXIsIHsgY2hhcmFjdGVyOiBjaGFyYWN0ZXIsIHJlbW92ZTogdHJ1ZSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQzMjJlNzk0YTNlZjZkYmIzYjgwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9