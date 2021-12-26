"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/components/favorite-character/index.tsx":
/*!******************************************************************!*\
  !*** ./src/presentation/components/favorite-character/index.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");



const FavoriteCharacter = ({ img, name }) => {
    const navigate = useNavigate();
    const CharacterLink = `${AppRoutes.Characters}/${slug}`;
    const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, { src: img, h: "100%" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, null, name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { label: "Remove from favorite", placement: "left" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdFavorite, { size: "4rem" }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { label: "More details", placement: "right" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdRemoveRedEye, { size: "4rem" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1a5cf3df2f5b0233404a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YjZhOGQ0YTM4ZjUxNzVhODc2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QztBQUNWO0FBQzVELDZCQUE2QixXQUFXO0FBQ3hDO0FBQ0EsNkJBQTZCLHFCQUFxQixHQUFHLEtBQUs7QUFDMUQsbUVBQW1FLFNBQVMsUUFBUTtBQUNwRixZQUFZLGdEQUFtQixDQUFDLGlEQUFHO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsbURBQUssSUFBSSxxQkFBcUI7QUFDMUQsUUFBUSxnREFBbUIsQ0FBQyxxREFBTztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLGtEQUFJO0FBQ2hDLFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSxrREFBa0Q7QUFDN0YsZ0JBQWdCLGdEQUFtQixDQUFDLGlEQUFHO0FBQ3ZDLG9CQUFvQixnREFBbUIsQ0FBQyxzREFBVSxJQUFJLGNBQWM7QUFDcEUsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDJDQUEyQztBQUN0RixnQkFBZ0IsZ0RBQW1CLENBQUMsaURBQUc7QUFDdkMsb0JBQW9CLGdEQUFtQixDQUFDLDBEQUFjLElBQUksY0FBYztBQUN4RTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7VUNsQmpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vY29tcG9uZW50cy9mYXZvcml0ZS1jaGFyYWN0ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIEltYWdlLCBUb29sdGlwIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBNZEZhdm9yaXRlLCBNZFJlbW92ZVJlZEV5ZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmNvbnN0IEZhdm9yaXRlQ2hhcmFjdGVyID0gKHsgaW1nLCBuYW1lIH0pID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgQ2hhcmFjdGVyTGluayA9IGAke0FwcFJvdXRlcy5DaGFyYWN0ZXJzfS8ke3NsdWd9YDtcbiAgICBjb25zdCBoYW5kbGVHb1RvRGV0YWlsZWRQYWdlID0gKCkgPT4gbmF2aWdhdGUoQ2hhcmFjdGVyTGluaywgeyBzdGF0ZTogeyBuYW1lIH0gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IGltZywgaDogXCIxMDAlXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgbmFtZSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJSZW1vdmUgZnJvbSBmYXZvcml0ZVwiLCBwbGFjZW1lbnQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRGYXZvcml0ZSwgeyBzaXplOiBcIjRyZW1cIiB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IGxhYmVsOiBcIk1vcmUgZGV0YWlsc1wiLCBwbGFjZW1lbnQ6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kUmVtb3ZlUmVkRXllLCB7IHNpemU6IFwiNHJlbVwiIH0pKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVDaGFyYWN0ZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYTVjZjNkZjJmNWIwMjMzNDA0YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==