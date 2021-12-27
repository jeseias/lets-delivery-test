"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/pages/home/index.tsx":
/*!***********************************************!*\
  !*** ./src/presentation/pages/home/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.mjs");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ "./node_modules/react-loading-skeleton/dist/skeleton.css");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presentation_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/presentation/components */ "./src/presentation/components/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const Homepage = ({ searchCharacter }) => {
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const showError = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 5000);
    };
    const handleSearchCharacter = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        const response = yield searchCharacter.search(name);
        if (response) {
            setCharacter(response);
        }
        else {
            showError();
        }
        setLoading(false);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, { alignItems: "center", h: "8rem", border: "1px solid #eee" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, { placeholder: "Search your character here", h: "100%", fontSize: "4rem", border: "none", value: name, onChange: (e) => setName(e.target.value) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, { borderLeft: "1px solid #eee", alignItems: "center", justifyContent: "center", w: "9rem", cursor: "pointer", bg: "#eee", h: "100%", onClick: handleSearchCharacter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdSearch, { size: "7rem", color: "#111" }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null,
            loading && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], null)),
            !loading && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Character Not Found"),
            character && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_2__.Character, Object.assign({}, character)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38255e7e908ce8c7acc0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZjRjNTRmNzdiNWZkMzc3N2QzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNZO0FBQ1Y7QUFDSTtBQUNJO0FBQ0k7QUFDdEQsb0JBQW9CLGlCQUFpQjtBQUNyQyw0QkFBNEIsK0NBQVE7QUFDcEMsc0NBQXNDLCtDQUFRO0FBQzlDLDhCQUE4QiwrQ0FBUTtBQUN0QyxrQ0FBa0MsK0NBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksMkRBQTJEO0FBQy9GLFlBQVksZ0RBQW1CLENBQUMsbURBQUssSUFBSSwrSUFBK0k7QUFDeEwsWUFBWSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLG1LQUFtSztBQUMzTSxnQkFBZ0IsZ0RBQW1CLENBQUMsb0RBQVEsSUFBSSw2QkFBNkI7QUFDN0UsUUFBUSxnREFBbUIsQ0FBQyxpREFBRztBQUMvQix3QkFBd0IsZ0RBQW1CLENBQUMsOERBQVE7QUFDcEQsaUNBQWlDLGdEQUFtQjtBQUNwRCx5QkFBeUIsZ0RBQW1CLENBQUMsK0RBQVMsa0JBQWtCO0FBQ3hFO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7VUMvQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIElucHV0LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBNZFNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCAncmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L3NrZWxldG9uLmNzcyc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb21wb25lbnRzJztcbmNvbnN0IEhvbWVwYWdlID0gKHsgc2VhcmNoQ2hhcmFjdGVyIH0pID0+IHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NoYXJhY3Rlciwgc2V0Q2hhcmFjdGVyXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYXJhY3RlciA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHNlYXJjaENoYXJhY3Rlci5zZWFyY2gobmFtZSk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0Q2hhcmFjdGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNob3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCI1dndcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaDogXCI4cmVtXCIsIGJvcmRlcjogXCIxcHggc29saWQgI2VlZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHBsYWNlaG9sZGVyOiBcIlNlYXJjaCB5b3VyIGNoYXJhY3RlciBoZXJlXCIsIGg6IFwiMTAwJVwiLCBmb250U2l6ZTogXCI0cmVtXCIsIGJvcmRlcjogXCJub25lXCIsIHZhbHVlOiBuYW1lLCBvbkNoYW5nZTogKGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNlZWVcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIHc6IFwiOXJlbVwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBiZzogXCIjZWVlXCIsIGg6IFwiMTAwJVwiLCBvbkNsaWNrOiBoYW5kbGVTZWFyY2hDaGFyYWN0ZXIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kU2VhcmNoLCB7IHNpemU6IFwiN3JlbVwiLCBjb2xvcjogXCIjMTExXCIgfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFNrZWxldG9uLCBudWxsKSksXG4gICAgICAgICAgICAhbG9hZGluZyAmJiBlcnJvciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJDaGFyYWN0ZXIgTm90IEZvdW5kXCIpLFxuICAgICAgICAgICAgY2hhcmFjdGVyICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hhcmFjdGVyLCBPYmplY3QuYXNzaWduKHt9LCBjaGFyYWN0ZXIpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM4MjU1ZTdlOTA4Y2U4YzdhY2MwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9