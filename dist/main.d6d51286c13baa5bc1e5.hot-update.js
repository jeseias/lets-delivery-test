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
        const characters = setCharacters();
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
/******/ 	__webpack_require__.h = () => ("ca8dd6113f580ce9984e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNmQ1MTI4NmMxM2JhYTViYzFlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRztBQUNRO0FBQzlELHlCQUF5QixlQUFlO0FBQ3hDLHdDQUF3QywrQ0FBUTtBQUNoRCxJQUFJLGdEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLFVBQVU7QUFDakQsUUFBUSxnREFBbUIsQ0FBQyxxREFBTztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksNEZBQTRGLDhCQUE4QixnREFBbUIsQ0FBQyx1RUFBaUIsSUFBSSxzQ0FBc0M7QUFDN087QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7OztVQ1o3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2Zhdm9yaXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhdm9yaXRlQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5jb25zdCBGYXZvcml0ZXNQYWdlID0gKHsgZmV0Y2gsIHJlbW92ZSB9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBzZXRDaGFyYWN0ZXJzKCk7XG4gICAgfSwgW2NoYXJhY3RlcnNdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwiNXZ3XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBcIkZhdm9yaXRlcyBQYWdlXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoNCwgMWZyKVwiLCBnYXA6IFwiMXJlbVwiLCBncmlkVGVtcGxhdGVSb3dzOiBcInJlcGVhdChhdXRvLCA1cmVtKVwiIH0sIGNoYXJhY3RlcnMubWFwKGNoYXJhY3RlciA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhdm9yaXRlQ2hhcmFjdGVyLCB7IGNoYXJhY3RlcjogY2hhcmFjdGVyLCByZW1vdmU6IHJlbW92ZSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhOGRkNjExM2Y1ODBjZTk5ODRlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9