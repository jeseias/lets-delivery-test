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
        console.log(fetch());
        setCharacters(fetch());
    }, []);
    const handleRemove = useC;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, null, "Favorites Page"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, { gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", gridTemplateRows: "repeat(auto, 5rem)" }, characters[0]
            ? (characters.map(character => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.FavoriteCharacter, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(), character: character, remove: remove })))
            : react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Found 0 favorites"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9debe67c2980a5a191d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNmI0NmNmYzI3YWU0NmNjOWQ0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0c7QUFDUTtBQUM1QjtBQUNsQyx5QkFBeUIsZUFBZTtBQUN4Qyx3Q0FBd0MsK0NBQVE7QUFDaEQsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw0RkFBNEY7QUFDaEksMkNBQTJDLGdEQUFtQixDQUFDLHVFQUFpQixJQUFJLEtBQUssZ0RBQUksMENBQTBDO0FBQ3ZJLGNBQWMsZ0RBQW1CO0FBQ2pDO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7VUNqQjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhdm9yaXRlQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5jb25zdCBGYXZvcml0ZXNQYWdlID0gKHsgZmV0Y2gsIHJlbW92ZSB9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoKCkpO1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKGZldGNoKCkpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSB1c2VDO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCI1dndcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIFwiRmF2b3JpdGVzIFBhZ2VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCg0LCAxZnIpXCIsIGdhcDogXCIxcmVtXCIsIGdyaWRUZW1wbGF0ZVJvd3M6IFwicmVwZWF0KGF1dG8sIDVyZW0pXCIgfSwgY2hhcmFjdGVyc1swXVxuICAgICAgICAgICAgPyAoY2hhcmFjdGVycy5tYXAoY2hhcmFjdGVyID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmF2b3JpdGVDaGFyYWN0ZXIsIHsga2V5OiB1dWlkKCksIGNoYXJhY3RlcjogY2hhcmFjdGVyLCByZW1vdmU6IHJlbW92ZSB9KSkpXG4gICAgICAgICAgICA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiRm91bmQgMCBmYXZvcml0ZXNcIikpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlkZWJlNjdjMjk4MGE1YTE5MWQwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9