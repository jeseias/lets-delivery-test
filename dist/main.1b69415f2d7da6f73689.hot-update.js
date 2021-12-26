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





const FavoriteCharacter = ({ img, name }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const CharacterLink = `${_main_constants__WEBPACK_IMPORTED_MODULE_1__.AppRoutes.Characters}/${slug}`;
    const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, { src: img, h: "100%" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, null, name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: "Remove from favorite", placement: "left" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdFavorite, { size: "4rem" }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: "More details", placement: "right", onClick: handleGoToDetailedPage },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdRemoveRedEye, { size: "4rem" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aabb40241b3d0d303d8c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYjY5NDE1ZjJkN2RhNmY3MzY4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRDO0FBQ1Y7QUFDYjtBQUNGO0FBQzdDLDZCQUE2QixXQUFXO0FBQ3hDLHFCQUFxQiw2REFBVztBQUNoQyw2QkFBNkIsaUVBQW9CLENBQUMsR0FBRyxLQUFLO0FBQzFELG1FQUFtRSxTQUFTLFFBQVE7QUFDcEYsWUFBWSxnREFBbUIsQ0FBQyxpREFBRztBQUNuQyxRQUFRLGdEQUFtQixDQUFDLG1EQUFLLElBQUkscUJBQXFCO0FBQzFELFFBQVEsZ0RBQW1CLENBQUMscURBQU87QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxrREFBSTtBQUNoQyxZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksa0RBQWtEO0FBQzdGLGdCQUFnQixnREFBbUIsQ0FBQyxpREFBRztBQUN2QyxvQkFBb0IsZ0RBQW1CLENBQUMsc0RBQVUsSUFBSSxjQUFjO0FBQ3BFLFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSw0RUFBNEU7QUFDdkgsZ0JBQWdCLGdEQUFtQixDQUFDLGlEQUFHO0FBQ3ZDLG9CQUFvQixnREFBbUIsQ0FBQywwREFBYyxJQUFJLGNBQWM7QUFDeEU7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7O1VDcEJqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvZmF2b3JpdGUtY2hhcmFjdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBJbWFnZSwgVG9vbHRpcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTWRGYXZvcml0ZSwgTWRSZW1vdmVSZWRFeWUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSAnQC9tYWluL2NvbnN0YW50cyc7XG5jb25zdCBGYXZvcml0ZUNoYXJhY3RlciA9ICh7IGltZywgbmFtZSB9KSA9PiB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IENoYXJhY3RlckxpbmsgPSBgJHtBcHBSb3V0ZXMuQ2hhcmFjdGVyc30vJHtzbHVnfWA7XG4gICAgY29uc3QgaGFuZGxlR29Ub0RldGFpbGVkUGFnZSA9ICgpID0+IG5hdmlnYXRlKENoYXJhY3RlckxpbmssIHsgc3RhdGU6IHsgbmFtZSB9IH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2UsIHsgc3JjOiBpbWcsIGg6IFwiMTAwJVwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIG5hbWUpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IFwiUmVtb3ZlIGZyb20gZmF2b3JpdGVcIiwgcGxhY2VtZW50OiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kRmF2b3JpdGUsIHsgc2l6ZTogXCI0cmVtXCIgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJNb3JlIGRldGFpbHNcIiwgcGxhY2VtZW50OiBcInJpZ2h0XCIsIG9uQ2xpY2s6IGhhbmRsZUdvVG9EZXRhaWxlZFBhZ2UgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZFJlbW92ZVJlZEV5ZSwgeyBzaXplOiBcIjRyZW1cIiB9KSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlQ2hhcmFjdGVyO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWFiYjQwMjQxYjNkMGQzMDNkOGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=