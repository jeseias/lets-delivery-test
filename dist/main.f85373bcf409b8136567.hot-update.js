self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> @keyframes react-loading-skeleton {\n|     100% {\n|         transform: translateX(100%);");

/***/ }),

/***/ "./src/presentation/pages/home/index.tsx":
/*!***********************************************!*\
  !*** ./src/presentation/pages/home/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _presentation_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/presentation/components */ "./src/presentation/components/index.ts");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ "./node_modules/react-loading-skeleton/dist/skeleton.css");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__);
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
/******/ 	__webpack_require__.h = () => ("a5176cccc7e386e49b27")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mODUzNzNiY2Y0MDliODEzNjU2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNZO0FBQ1Y7QUFDWTtBQUNKO0FBQ2xELG9CQUFvQixpQkFBaUI7QUFDckMsNEJBQTRCLCtDQUFRO0FBQ3BDLHNDQUFzQywrQ0FBUTtBQUM5Qyw4QkFBOEIsK0NBQVE7QUFDdEMsa0NBQWtDLCtDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLFVBQVU7QUFDakQsUUFBUSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLDJEQUEyRDtBQUMvRixZQUFZLGdEQUFtQixDQUFDLG1EQUFLLElBQUksK0lBQStJO0FBQ3hMLFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSxtS0FBbUs7QUFDM00sZ0JBQWdCLGdEQUFtQixDQUFDLG9EQUFRLElBQUksNkJBQTZCO0FBQzdFLFFBQVEsZ0RBQW1CLENBQUMsaURBQUc7QUFDL0IsdUJBQXVCLGdEQUFtQjtBQUMxQyxpQ0FBaUMsZ0RBQW1CO0FBQ3BELHlCQUF5QixnREFBbUIsQ0FBQywrREFBUyxrQkFBa0I7QUFDeEU7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7OztVQzlDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9ob21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSW5wdXQsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IE1kU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnO1xuY29uc3QgSG9tZXBhZ2UgPSAoeyBzZWFyY2hDaGFyYWN0ZXIgfSkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2hhcmFjdGVyLCBzZXRDaGFyYWN0ZXJdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhcmFjdGVyID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VhcmNoQ2hhcmFjdGVyLnNlYXJjaChuYW1lKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXIocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcIjV2d1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoOiBcIjhyZW1cIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZWVlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIHlvdXIgY2hhcmFjdGVyIGhlcmVcIiwgaDogXCIxMDAlXCIsIGZvbnRTaXplOiBcIjRyZW1cIiwgYm9yZGVyOiBcIm5vbmVcIiwgdmFsdWU6IG5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI2VlZVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgdzogXCI5cmVtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJnOiBcIiNlZWVcIiwgaDogXCIxMDAlXCIsIG9uQ2xpY2s6IGhhbmRsZVNlYXJjaENoYXJhY3RlciB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRTZWFyY2gsIHsgc2l6ZTogXCI3cmVtXCIsIGNvbG9yOiBcIiMxMTFcIiB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKSxcbiAgICAgICAgICAgICFsb2FkaW5nICYmIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkNoYXJhY3RlciBOb3QgRm91bmRcIiksXG4gICAgICAgICAgICBjaGFyYWN0ZXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChDaGFyYWN0ZXIsIE9iamVjdC5hc3NpZ24oe30sIGNoYXJhY3RlcikpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTUxNzZjY2NjN2UzODZlNDliMjdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=