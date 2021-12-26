"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/components/character/index.tsx":
/*!*********************************************************!*\
  !*** ./src/presentation/components/character/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _main_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/main/constants */ "./src/main/constants/index.ts");






const Character = ({ name, img, psiPowers }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const slug = name.replace(' ', '-');
    const CharacterLink = `${_main_constants__WEBPACK_IMPORTED_MODULE_1__.AppRoutes.Characters}/${slug}`;
    const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, { p: "2rem", my: "1rem", alignItems: "center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { h: "15rem", mr: "2rem" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, { src: img, height: "100%" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, { fontSize: "5xl", textTransform: "uppercase" }, name),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, { mb: "1rem" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, { as: "h3", fontSize: "2xl" }, "Powers"),
                psiPowers.map(power => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])() },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, { as: "h3", fontSize: "2xl", fontWeight: "normal" }, power.name))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, { mt: "1rem" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { label: "Add to favorites", placement: "left" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, { mr: "1rem" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdFavorite, null))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { label: "More details", placement: "right" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: handleGoToDetailedPage },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdRemoveRedEye, null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68e7cfb3b56c9bb5e82e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYWZhODY4Yzc3MzRiMWY1NGU2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNkQ7QUFDckQ7QUFDMEI7QUFDYjtBQUNGO0FBQzdDLHFCQUFxQixzQkFBc0I7QUFDM0MscUJBQXFCLDZEQUFXO0FBQ2hDO0FBQ0EsNkJBQTZCLGlFQUFvQixDQUFDLEdBQUcsS0FBSztBQUMxRCxtRUFBbUUsU0FBUyxRQUFRO0FBQ3BGLFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw2Q0FBNkM7QUFDckYsUUFBUSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLHdCQUF3QjtBQUMzRCxZQUFZLGdEQUFtQixDQUFDLG1EQUFLLElBQUksMEJBQTBCO0FBQ25FLFFBQVEsZ0RBQW1CLENBQUMsaURBQUc7QUFDL0IsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDZDQUE2QztBQUN4RixZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksWUFBWTtBQUN2RCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHO0FBQ25DLGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDJCQUEyQjtBQUMxRSx3Q0FBd0MsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxLQUFLLGdEQUFJLElBQUk7QUFDaEYsb0JBQW9CLGdEQUFtQixDQUFDLHFEQUFPLElBQUksaURBQWlEO0FBQ3BHLFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSxZQUFZO0FBQ3BELGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDhDQUE4QztBQUM3RixvQkFBb0IsZ0RBQW1CLENBQUMsb0RBQU0sSUFBSSxZQUFZO0FBQzlELHdCQUF3QixnREFBbUIsQ0FBQyxzREFBVTtBQUN0RCxnQkFBZ0IsZ0RBQW1CLENBQUMscURBQU8sSUFBSSwyQ0FBMkM7QUFDMUYsb0JBQW9CLGdEQUFtQixDQUFDLG9EQUFNLElBQUksaUNBQWlDO0FBQ25GLHdCQUF3QixnREFBbUIsQ0FBQywwREFBYztBQUMxRDtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7O1VDN0J6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMvY2hhcmFjdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpdmlkZXIsIEZsZXgsIEhlYWRpbmcsIEltYWdlLCBUb29sdGlwIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBNZEZhdm9yaXRlLCBNZFJlbW92ZVJlZEV5ZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBcHBSb3V0ZXMgfSBmcm9tICdAL21haW4vY29uc3RhbnRzJztcbmNvbnN0IENoYXJhY3RlciA9ICh7IG5hbWUsIGltZywgcHNpUG93ZXJzIH0pID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3Qgc2x1ZyA9IG5hbWUucmVwbGFjZSgnICcsICctJyk7XG4gICAgY29uc3QgQ2hhcmFjdGVyTGluayA9IGAke0FwcFJvdXRlcy5DaGFyYWN0ZXJzfS8ke3NsdWd9YDtcbiAgICBjb25zdCBoYW5kbGVHb1RvRGV0YWlsZWRQYWdlID0gKCkgPT4gbmF2aWdhdGUoQ2hhcmFjdGVyTGluaywgeyBzdGF0ZTogeyBuYW1lIH0gfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsgcDogXCIycmVtXCIsIG15OiBcIjFyZW1cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBoOiBcIjE1cmVtXCIsIG1yOiBcIjJyZW1cIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IGltZywgaGVpZ2h0OiBcIjEwMCVcIiB9KSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCB7IGZvbnRTaXplOiBcIjV4bFwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiIH0sIG5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEaXZpZGVyLCB7IG1iOiBcIjFyZW1cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgeyBhczogXCJoM1wiLCBmb250U2l6ZTogXCIyeGxcIiB9LCBcIlBvd2Vyc1wiKSxcbiAgICAgICAgICAgICAgICBwc2lQb3dlcnMubWFwKHBvd2VyID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBrZXk6IHV1aWQoKSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIHsgYXM6IFwiaDNcIiwgZm9udFNpemU6IFwiMnhsXCIsIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIgfSwgcG93ZXIubmFtZSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IG10OiBcIjFyZW1cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJBZGQgdG8gZmF2b3JpdGVzXCIsIHBsYWNlbWVudDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgbXI6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kRmF2b3JpdGUsIG51bGwpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IGxhYmVsOiBcIk1vcmUgZGV0YWlsc1wiLCBwbGFjZW1lbnQ6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiBoYW5kbGVHb1RvRGV0YWlsZWRQYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kUmVtb3ZlUmVkRXllLCBudWxsKSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OGU3Y2ZiM2I1NmM5YmI1ZTgyZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==