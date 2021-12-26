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
        setError();
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
            character && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_1__.Character, Object.assign({}, character)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4e270cf55f7d13590a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YjRiMzhhYjM1Yzg0ODc3MzIyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNZO0FBQ1Y7QUFDWTtBQUN0RCxvQkFBb0IsaUJBQWlCO0FBQ3JDLDRCQUE0QiwrQ0FBUTtBQUNwQyxzQ0FBc0MsK0NBQVE7QUFDOUMsOEJBQThCLCtDQUFRO0FBQ3RDLGtDQUFrQywrQ0FBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksMkRBQTJEO0FBQy9GLFlBQVksZ0RBQW1CLENBQUMsbURBQUssSUFBSSwrSUFBK0k7QUFDeEwsWUFBWSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLG1LQUFtSztBQUMzTSxnQkFBZ0IsZ0RBQW1CLENBQUMsb0RBQVEsSUFBSSw2QkFBNkI7QUFDN0UsUUFBUSxnREFBbUIsQ0FBQyxpREFBRztBQUMvQix1QkFBdUIsZ0RBQW1CO0FBQzFDLHlCQUF5QixnREFBbUIsQ0FBQywrREFBUyxrQkFBa0I7QUFDeEU7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7OztVQ3pDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9ob21lL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSW5wdXQsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IE1kU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5jb25zdCBIb21lcGFnZSA9ICh7IHNlYXJjaENoYXJhY3RlciB9KSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldEVycm9yKCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFyYWN0ZXIgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBzZWFyY2hDaGFyYWN0ZXIuc2VhcmNoKG5hbWUpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNldENoYXJhY3RlcihyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwiNXZ3XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGg6IFwiOHJlbVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlZWVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBwbGFjZWhvbGRlcjogXCJTZWFyY2ggeW91ciBjaGFyYWN0ZXIgaGVyZVwiLCBoOiBcIjEwMCVcIiwgZm9udFNpemU6IFwiNHJlbVwiLCBib3JkZXI6IFwibm9uZVwiLCB2YWx1ZTogbmFtZSwgb25DaGFuZ2U6IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjZWVlXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCB3OiBcIjlyZW1cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgYmc6IFwiI2VlZVwiLCBoOiBcIjEwMCVcIiwgb25DbGljazogaGFuZGxlU2VhcmNoQ2hhcmFjdGVyIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZFNlYXJjaCwgeyBzaXplOiBcIjdyZW1cIiwgY29sb3I6IFwiIzExMVwiIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgbG9hZGluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJMb2FkaW5nLi4uXCIpLFxuICAgICAgICAgICAgY2hhcmFjdGVyICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hhcmFjdGVyLCBPYmplY3QuYXNzaWduKHt9LCBjaGFyYWN0ZXIpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM0ZTI3MGNmNTVmN2QxMzU5MGE1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9