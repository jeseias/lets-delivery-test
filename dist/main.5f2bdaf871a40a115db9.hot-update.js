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





const FavoriteCharacter = ({ character: { img, name } }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const slug = name.replace(' ', '-');
    const CharacterLink = `${_main_constants__WEBPACK_IMPORTED_MODULE_1__.AppRoutes.Characters}/${slug}`;
    const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, { src: img, h: "100%" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, null, name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: "Remove from favorite", placement: "left" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
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
/******/ 	__webpack_require__.h = () => ("5e9cc8d609e17d596ec5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZjJiZGFmODcxYTQwYTExNWRiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRDO0FBQ1Y7QUFDYjtBQUNGO0FBQzdDLDZCQUE2QixhQUFhLGFBQWE7QUFDdkQscUJBQXFCLDZEQUFXO0FBQ2hDO0FBQ0EsNkJBQTZCLGlFQUFvQixDQUFDLEdBQUcsS0FBSztBQUMxRCxtRUFBbUUsU0FBUyxRQUFRO0FBQ3BGLFlBQVksZ0RBQW1CLENBQUMsaURBQUc7QUFDbkMsUUFBUSxnREFBbUIsQ0FBQyxtREFBSyxJQUFJLHFCQUFxQjtBQUMxRCxRQUFRLGdEQUFtQixDQUFDLHFEQUFPO0FBQ25DLFFBQVEsZ0RBQW1CLENBQUMsa0RBQUk7QUFDaEMsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLGtEQUFrRDtBQUM3RixnQkFBZ0IsZ0RBQW1CLENBQUMsaURBQUc7QUFDdkMsb0JBQW9CLGdEQUFtQixDQUFDLHNEQUFVLElBQUksY0FBYztBQUNwRSxZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksMkNBQTJDO0FBQ3RGLGdCQUFnQixnREFBbUIsQ0FBQyxpREFBRyxJQUFJLG9EQUFvRDtBQUMvRixvQkFBb0IsZ0RBQW1CLENBQUMsMERBQWMsSUFBSSxjQUFjO0FBQ3hFO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7OztVQ3JCakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzL2Zhdm9yaXRlLWNoYXJhY3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgSW1hZ2UsIFRvb2x0aXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IE1kRmF2b3JpdGUsIE1kUmVtb3ZlUmVkRXllIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gJ0AvbWFpbi9jb25zdGFudHMnO1xuY29uc3QgRmF2b3JpdGVDaGFyYWN0ZXIgPSAoeyBjaGFyYWN0ZXI6IHsgaW1nLCBuYW1lIH0gfSkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBzbHVnID0gbmFtZS5yZXBsYWNlKCcgJywgJy0nKTtcbiAgICBjb25zdCBDaGFyYWN0ZXJMaW5rID0gYCR7QXBwUm91dGVzLkNoYXJhY3RlcnN9LyR7c2x1Z31gO1xuICAgIGNvbnN0IGhhbmRsZUdvVG9EZXRhaWxlZFBhZ2UgPSAoKSA9PiBuYXZpZ2F0ZShDaGFyYWN0ZXJMaW5rLCB7IHN0YXRlOiB7IG5hbWUgfSB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7IHNyYzogaW1nLCBoOiBcIjEwMCVcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCBudWxsLCBuYW1lKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IGxhYmVsOiBcIlJlbW92ZSBmcm9tIGZhdm9yaXRlXCIsIHBsYWNlbWVudDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZEZhdm9yaXRlLCB7IHNpemU6IFwiNHJlbVwiIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IFwiTW9yZSBkZXRhaWxzXCIsIHBsYWNlbWVudDogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgb25DbGljazogaGFuZGxlR29Ub0RldGFpbGVkUGFnZSwgY3Vyc29yOiBcInBvaW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kUmVtb3ZlUmVkRXllLCB7IHNpemU6IFwiNHJlbVwiIH0pKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVDaGFyYWN0ZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZTljYzhkNjA5ZTE3ZDU5NmVjNVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==