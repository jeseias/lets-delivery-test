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



const FavoritesPage = ({ fetch, remove }) => {
    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const characters = fetch();
        setCharacters();
    }, [characters]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Favorites Page"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, { gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", gridTemplateRows: "repeat(auto, 5rem)" }, characters.map(character => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.FavoriteCharacter, { character: character, remove: remove })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d6d51286c13baa5bc1e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNTUzOTg4MzNkMGM0OGZjN2ZmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRztBQUNRO0FBQzlELHlCQUF5QixlQUFlO0FBQ3hDLHdDQUF3QywrQ0FBUTtBQUNoRCxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw0RkFBNEYsOEJBQThCLGdEQUFtQixDQUFDLHVFQUFpQixJQUFJLHNDQUFzQztBQUM3TztBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7O1VDYjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vcGFnZXMvZmF2b3JpdGVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgR3JpZCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgRmF2b3JpdGVDaGFyYWN0ZXIgfSBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzJztcbmNvbnN0IEZhdm9yaXRlc1BhZ2UgPSAoeyBmZXRjaCwgcmVtb3ZlIH0pID0+IHtcbiAgICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGZldGNoKCk7XG4gICAgICAgIHNldENoYXJhY3RlcnMoKTtcbiAgICB9LCBbY2hhcmFjdGVyc10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCI1dndcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIFwiRmF2b3JpdGVzIFBhZ2VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCg0LCAxZnIpXCIsIGdhcDogXCIxcmVtXCIsIGdyaWRUZW1wbGF0ZVJvd3M6IFwicmVwZWF0KGF1dG8sIDVyZW0pXCIgfSwgY2hhcmFjdGVycy5tYXAoY2hhcmFjdGVyID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmF2b3JpdGVDaGFyYWN0ZXIsIHsgY2hhcmFjdGVyOiBjaGFyYWN0ZXIsIHJlbW92ZTogcmVtb3ZlIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXNQYWdlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDZkNTEyODZjMTNiYWE1YmMxZTVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=