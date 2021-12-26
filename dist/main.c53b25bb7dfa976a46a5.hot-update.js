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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _main_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/main/constants */ "./src/main/constants/index.ts");





const FavoriteCharacter = ({ character: { img, name }, remove }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const slug = name.replace(' ', '-');
    const CharacterLink = `${_main_constants__WEBPACK_IMPORTED_MODULE_1__.AppRoutes.Characters}/${slug}`;
    const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, { src: img, h: "100%" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, null, name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: "Remove from favorite", placement: "left" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { onClick: () => remove() },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdFavorite, { size: "4rem" }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: "More details", placement: "right" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { onClick: handleGoToDetailedPage, cursor: "pointer" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdRemoveRedEye, { size: "4rem" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9c4498c55fda2a256007")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNTNiMjViYjdkZmE5NzZhNDZhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRDO0FBQ1Y7QUFDYjtBQUNGO0FBQzdDLDZCQUE2QixhQUFhLFdBQVcsVUFBVTtBQUMvRCxxQkFBcUIsNkRBQVc7QUFDaEM7QUFDQSw2QkFBNkIsaUVBQW9CLENBQUMsR0FBRyxLQUFLO0FBQzFELG1FQUFtRSxTQUFTLFFBQVE7QUFDcEYsWUFBWSxnREFBbUIsQ0FBQyxpREFBRztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLG1EQUFLLElBQUkscUJBQXFCO0FBQzFELFFBQVEsZ0RBQW1CLENBQUMscURBQU87QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxrREFBSTtBQUNoQyxZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksa0RBQWtEO0FBQzdGLGdCQUFnQixnREFBbUIsQ0FBQyxpREFBRyxJQUFJLHlCQUF5QjtBQUNwRSxvQkFBb0IsZ0RBQW1CLENBQUMsc0RBQVUsSUFBSSxjQUFjO0FBQ3BFLFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSwyQ0FBMkM7QUFDdEYsZ0JBQWdCLGdEQUFtQixDQUFDLGlEQUFHLElBQUksb0RBQW9EO0FBQy9GLG9CQUFvQixnREFBbUIsQ0FBQywwREFBYyxJQUFJLGNBQWM7QUFDeEU7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7O1VDckJqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZmF2b3JpdGUtY2hhcmFjdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBJbWFnZSwgVG9vbHRpcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTWRGYXZvcml0ZSwgTWRSZW1vdmVSZWRFeWUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSAnQC9tYWluL2NvbnN0YW50cyc7XG5jb25zdCBGYXZvcml0ZUNoYXJhY3RlciA9ICh7IGNoYXJhY3RlcjogeyBpbWcsIG5hbWUgfSwgcmVtb3ZlIH0pID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3Qgc2x1ZyA9IG5hbWUucmVwbGFjZSgnICcsICctJyk7XG4gICAgY29uc3QgQ2hhcmFjdGVyTGluayA9IGAke0FwcFJvdXRlcy5DaGFyYWN0ZXJzfS8ke3NsdWd9YDtcbiAgICBjb25zdCBoYW5kbGVHb1RvRGV0YWlsZWRQYWdlID0gKCkgPT4gbmF2aWdhdGUoQ2hhcmFjdGVyTGluaywgeyBzdGF0ZTogeyBuYW1lIH0gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IGltZywgaDogXCIxMDAlXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgbnVsbCwgbmFtZSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJSZW1vdmUgZnJvbSBmYXZvcml0ZVwiLCBwbGFjZW1lbnQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgb25DbGljazogKCkgPT4gcmVtb3ZlKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZEZhdm9yaXRlLCB7IHNpemU6IFwiNHJlbVwiIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IFwiTW9yZSBkZXRhaWxzXCIsIHBsYWNlbWVudDogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgb25DbGljazogaGFuZGxlR29Ub0RldGFpbGVkUGFnZSwgY3Vyc29yOiBcInBvaW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kUmVtb3ZlUmVkRXllLCB7IHNpemU6IFwiNHJlbVwiIH0pKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVDaGFyYWN0ZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YzQ0OThjNTVmZGEyYTI1NjAwN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==