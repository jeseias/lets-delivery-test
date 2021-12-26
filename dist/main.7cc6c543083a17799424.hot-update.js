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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { onClick: () => remove(name) },
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
/******/ 	__webpack_require__.h = () => ("8b7102c112e16aab23fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43Y2M2YzU0MzA4M2ExNzc5OTQyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3FCO0FBQ3VCO0FBQ1Y7QUFDZjtBQUM3Qyw2QkFBNkIsYUFBYSxXQUFXLFVBQVU7QUFDL0QscUJBQXFCLDZEQUFXO0FBQ2hDO0FBQ0EsNkJBQTZCLGlFQUFvQixDQUFDLEdBQUcsS0FBSztBQUMxRCxtRUFBbUUsU0FBUyxRQUFRO0FBQ3BGLFlBQVksZ0RBQW1CLENBQUMsaURBQUc7QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxtREFBSyxJQUFJLHFCQUFxQjtBQUMxRCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUk7QUFDaEMsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLGtEQUFrRDtBQUM3RixnQkFBZ0IsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSw2QkFBNkI7QUFDeEUsb0JBQW9CLGdEQUFtQixDQUFDLHNEQUFVLElBQUksY0FBYztBQUNwRSxZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksMkNBQTJDO0FBQ3RGLGdCQUFnQixnREFBbUIsQ0FBQyxpREFBRyxJQUFJLG9EQUFvRDtBQUMvRixvQkFBb0IsZ0RBQW1CLENBQUMsMERBQWMsSUFBSSxjQUFjO0FBQ3hFO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7OztVQ3JCakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2Zhdm9yaXRlLWNoYXJhY3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIEltYWdlLCBUb29sdGlwIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBNZEZhdm9yaXRlLCBNZFJlbW92ZVJlZEV5ZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gJ0AvbWFpbi9jb25zdGFudHMnO1xuY29uc3QgRmF2b3JpdGVDaGFyYWN0ZXIgPSAoeyBjaGFyYWN0ZXI6IHsgaW1nLCBuYW1lIH0sIHJlbW92ZSB9KSA9PiB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IHNsdWcgPSBuYW1lLnJlcGxhY2UoJyAnLCAnLScpO1xuICAgIGNvbnN0IENoYXJhY3RlckxpbmsgPSBgJHtBcHBSb3V0ZXMuQ2hhcmFjdGVyc30vJHtzbHVnfWA7XG4gICAgY29uc3QgaGFuZGxlR29Ub0RldGFpbGVkUGFnZSA9ICgpID0+IG5hdmlnYXRlKENoYXJhY3RlckxpbmssIHsgc3RhdGU6IHsgbmFtZSB9IH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2UsIHsgc3JjOiBpbWcsIGg6IFwiMTAwJVwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIG51bGwsIG5hbWUpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IFwiUmVtb3ZlIGZyb20gZmF2b3JpdGVcIiwgcGxhY2VtZW50OiBcImxlZnRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG9uQ2xpY2s6ICgpID0+IHJlbW92ZShuYW1lKSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kRmF2b3JpdGUsIHsgc2l6ZTogXCI0cmVtXCIgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJNb3JlIGRldGFpbHNcIiwgcGxhY2VtZW50OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBvbkNsaWNrOiBoYW5kbGVHb1RvRGV0YWlsZWRQYWdlLCBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRSZW1vdmVSZWRFeWUsIHsgc2l6ZTogXCI0cmVtXCIgfSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZUNoYXJhY3RlcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhiNzEwMmMxMTJlMTZhYWIyM2ZjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9