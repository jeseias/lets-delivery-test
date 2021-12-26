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
/******/ 	__webpack_require__.h = () => ("4ae463744307ccb0690f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NTk5ODUxYjE2M2Q0NDUzMGE5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEI7QUFDUTtBQUM5RCx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLFlBQVksZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxVQUFVO0FBQ2pELFFBQVEsZ0RBQW1CLENBQUMscURBQU87QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLDRGQUE0Riw4QkFBOEIsZ0RBQW1CLENBQUMsdUVBQWlCLElBQUksb0NBQW9DO0FBQzNPO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7VUNUN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9mYXZvcml0ZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEZhdm9yaXRlQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5jb25zdCBGYXZvcml0ZXNQYWdlID0gKHsgZmV0Y2gsIHJlbW92ZSB9KSA9PiB7XG4gICAgY29uc3QgY2hhcmFjdGVycyA9IGZldGNoKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcIjV2d1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgXCJGYXZvcml0ZXMgUGFnZVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KDQsIDFmcilcIiwgZ2FwOiBcIjFyZW1cIiwgZ3JpZFRlbXBsYXRlUm93czogXCJyZXBlYXQoYXV0bywgNXJlbSlcIiB9LCBjaGFyYWN0ZXJzLm1hcChjaGFyYWN0ZXIgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChGYXZvcml0ZUNoYXJhY3RlciwgeyBjaGFyYWN0ZXI6IGNoYXJhY3RlciwgcmVtb3ZlOiB0cnVlIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXNQYWdlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGFlNDYzNzQ0MzA3Y2NiMDY5MGZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=