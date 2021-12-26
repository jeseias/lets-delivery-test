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
    const characters = fetch();
    useEffect(() => { }, []);
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
/******/ 	__webpack_require__.h = () => ("b5c9833ec52a90a4eb27")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MjdmZDY5OTkzNTUzMjg1YTViZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEI7QUFDUTtBQUM5RCx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLHVCQUF1QjtBQUN2QixZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw0RkFBNEYsOEJBQThCLGdEQUFtQixDQUFDLHVFQUFpQixJQUFJLHNDQUFzQztBQUM3TztBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7O1VDVjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vcGFnZXMvZmF2b3JpdGVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBHcmlkLCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBGYXZvcml0ZUNoYXJhY3RlciB9IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMnO1xuY29uc3QgRmF2b3JpdGVzUGFnZSA9ICh7IGZldGNoLCByZW1vdmUgfSkgPT4ge1xuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBmZXRjaCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwiNXZ3XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIkZhdm9yaXRlcyBQYWdlXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwgMWZyKVwiLCBnYXA6IFwiMXJlbVwiLCBncmlkVGVtcGxhdGVSb3dzOiBcInJlcGVhdChhdXRvLCA1cmVtKVwiIH0sIGNoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhdm9yaXRlQ2hhcmFjdGVyLCB7IGNoYXJhY3RlcjogY2hhcmFjdGVyLCByZW1vdmU6IHJlbW92ZSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI1Yzk4MzNlYzUyYTkwYTRlYjI3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9