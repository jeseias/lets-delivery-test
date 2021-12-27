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
        setCharacters(fetch());
    }, []);
    const handleRemove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name) => {
        remove(name);
        setCharacters();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Favorites Page"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, { gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", gridTemplateRows: "repeat(auto, 5rem)" }, characters[0]
            ? (characters.map(character => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.FavoriteCharacter, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), character: character, remove: handleRemove })))
            : react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Found 0 favorites"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc74835c593a92f71687")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YTM3NmU5ZDY1Nzk3MWI4YjFhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ1Y7QUFDUTtBQUM1QjtBQUNsQyx5QkFBeUIsZUFBZTtBQUN4Qyx3Q0FBd0MsK0NBQVE7QUFDaEQsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMLHlCQUF5QixrREFBVztBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVksZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxVQUFVO0FBQ2pELFFBQVEsZ0RBQW1CLENBQUMscURBQU87QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLDRGQUE0RjtBQUNoSSwyQ0FBMkMsZ0RBQW1CLENBQUMsdUVBQWlCLElBQUksS0FBSyxnREFBSSxnREFBZ0Q7QUFDN0ksY0FBYyxnREFBbUI7QUFDakM7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7OztVQ25CN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhdm9yaXRlQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5jb25zdCBGYXZvcml0ZXNQYWdlID0gKHsgZmV0Y2gsIHJlbW92ZSB9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoZmV0Y2goKSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9IHVzZUNhbGxiYWNrKChuYW1lKSA9PiB7XG4gICAgICAgIHJlbW92ZShuYW1lKTtcbiAgICAgICAgc2V0Q2hhcmFjdGVycygpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwiNXZ3XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIkZhdm9yaXRlcyBQYWdlXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwgMWZyKVwiLCBnYXA6IFwiMXJlbVwiLCBncmlkVGVtcGxhdGVSb3dzOiBcInJlcGVhdChhdXRvLCA1cmVtKVwiIH0sIGNoYXJhY3RlcnNbMF1cbiAgICAgICAgICAgID8gKGNoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhdm9yaXRlQ2hhcmFjdGVyLCB7IGtleTogdXVpZCgpLCBjaGFyYWN0ZXI6IGNoYXJhY3RlciwgcmVtb3ZlOiBoYW5kbGVSZW1vdmUgfSkpKVxuICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIkZvdW5kIDAgZmF2b3JpdGVzXCIpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlc1BhZ2U7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYzc0ODM1YzU5M2E5MmY3MTY4N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==