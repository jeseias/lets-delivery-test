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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _presentation_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/presentation/components */ "./src/presentation/components/index.ts");
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { p: "5vw" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { alignItems: "center", h: "8rem", border: "1px solid #eee" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, { placeholder: "Search your character here", h: "100%", fontSize: "4rem", border: "none", value: name, onChange: (e) => setName(e.target.value) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { borderLeft: "1px solid #eee", alignItems: "center", justifyContent: "center", w: "9rem", cursor: "pointer", bg: "#eee", h: "100%", onClick: handleSearchCharacter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdSearch, { size: "7rem", color: "#111" }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null,
            loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Loading..."),
            !loading && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Character Not Found"),
            character && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.Character, Object.assign({}, character)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c263ca874b01ba681360")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMzQ4Y2Q1Yzk5ZTkxNDg5YTNhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNZO0FBQ1Y7QUFDWTtBQUN0RCxvQkFBb0IsaUJBQWlCO0FBQ3JDLDRCQUE0QiwrQ0FBUTtBQUNwQyxzQ0FBc0MsK0NBQVE7QUFDOUMsOEJBQThCLCtDQUFRO0FBQ3RDLGtDQUFrQywrQ0FBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVksZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxVQUFVO0FBQ2pELFFBQVEsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSwyREFBMkQ7QUFDL0YsWUFBWSxnREFBbUIsQ0FBQyxtREFBSyxJQUFJLCtJQUErSTtBQUN4TCxZQUFZLGdEQUFtQixDQUFDLGtEQUFJLElBQUksbUtBQW1LO0FBQzNNLGdCQUFnQixnREFBbUIsQ0FBQyxvREFBUSxJQUFJLDZCQUE2QjtBQUM3RSxRQUFRLGdEQUFtQixDQUFDLGlEQUFHO0FBQy9CLHVCQUF1QixnREFBbUI7QUFDMUMsaUNBQWlDLGdEQUFtQjtBQUNwRCx5QkFBeUIsZ0RBQW1CLENBQUMsK0RBQVMsa0JBQWtCO0FBQ3hFO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7VUM3Q3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS8uL3NyYy9wcmVzZW50YXRpb24vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIElucHV0LCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBNZFNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMnO1xuY29uc3QgSG9tZXBhZ2UgPSAoeyBzZWFyY2hDaGFyYWN0ZXIgfSkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2hhcmFjdGVyLCBzZXRDaGFyYWN0ZXJdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhcmFjdGVyID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VhcmNoQ2hhcmFjdGVyLnNlYXJjaChuYW1lKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXIocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcIjV2d1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoOiBcIjhyZW1cIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZWVlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIHlvdXIgY2hhcmFjdGVyIGhlcmVcIiwgaDogXCIxMDAlXCIsIGZvbnRTaXplOiBcIjRyZW1cIiwgYm9yZGVyOiBcIm5vbmVcIiwgdmFsdWU6IG5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI2VlZVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgdzogXCI5cmVtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJnOiBcIiNlZWVcIiwgaDogXCIxMDAlXCIsIG9uQ2xpY2s6IGhhbmRsZVNlYXJjaENoYXJhY3RlciB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRTZWFyY2gsIHsgc2l6ZTogXCI3cmVtXCIsIGNvbG9yOiBcIiMxMTFcIiB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKSxcbiAgICAgICAgICAgICFsb2FkaW5nICYmIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkNoYXJhY3RlciBOb3QgRm91bmRcIiksXG4gICAgICAgICAgICBjaGFyYWN0ZXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChDaGFyYWN0ZXIsIE9iamVjdC5hc3NpZ24oe30sIGNoYXJhY3RlcikpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzI2M2NhODc0YjAxYmE2ODEzNjBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=