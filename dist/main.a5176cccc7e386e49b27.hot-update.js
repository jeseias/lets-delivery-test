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
            loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Loading..."),
            !loading && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Character Not Found"),
            character && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_2__.Character, Object.assign({}, character)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8bac560ad7468b08f1b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNTE3NmNjY2M3ZTM4NmU0OWIyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ3dDO0FBQ1k7QUFDVjtBQUNRO0FBQ0k7QUFDdEQsb0JBQW9CLGlCQUFpQjtBQUNyQyw0QkFBNEIsK0NBQVE7QUFDcEMsc0NBQXNDLCtDQUFRO0FBQzlDLDhCQUE4QiwrQ0FBUTtBQUN0QyxrQ0FBa0MsK0NBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksMkRBQTJEO0FBQy9GLFlBQVksZ0RBQW1CLENBQUMsbURBQUssSUFBSSwrSUFBK0k7QUFDeEwsWUFBWSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLG1LQUFtSztBQUMzTSxnQkFBZ0IsZ0RBQW1CLENBQUMsb0RBQVEsSUFBSSw2QkFBNkI7QUFDN0UsUUFBUSxnREFBbUIsQ0FBQyxpREFBRztBQUMvQix1QkFBdUIsZ0RBQW1CO0FBQzFDLGlDQUFpQyxnREFBbUI7QUFDcEQseUJBQXlCLGdEQUFtQixDQUFDLCtEQUFTLGtCQUFrQjtBQUN4RTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7O1VDOUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBJbnB1dCwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgTWRTZWFyY2ggfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cyc7XG5jb25zdCBIb21lcGFnZSA9ICh7IHNlYXJjaENoYXJhY3RlciB9KSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFyYWN0ZXIgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBzZWFyY2hDaGFyYWN0ZXIuc2VhcmNoKG5hbWUpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNldENoYXJhY3RlcihyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwiNXZ3XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGg6IFwiOHJlbVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNlZWVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBwbGFjZWhvbGRlcjogXCJTZWFyY2ggeW91ciBjaGFyYWN0ZXIgaGVyZVwiLCBoOiBcIjEwMCVcIiwgZm9udFNpemU6IFwiNHJlbVwiLCBib3JkZXI6IFwibm9uZVwiLCB2YWx1ZTogbmFtZSwgb25DaGFuZ2U6IChlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjZWVlXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCB3OiBcIjlyZW1cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgYmc6IFwiI2VlZVwiLCBoOiBcIjEwMCVcIiwgb25DbGljazogaGFuZGxlU2VhcmNoQ2hhcmFjdGVyIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZFNlYXJjaCwgeyBzaXplOiBcIjdyZW1cIiwgY29sb3I6IFwiIzExMVwiIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgbG9hZGluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJMb2FkaW5nLi4uXCIpLFxuICAgICAgICAgICAgIWxvYWRpbmcgJiYgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiQ2hhcmFjdGVyIE5vdCBGb3VuZFwiKSxcbiAgICAgICAgICAgIGNoYXJhY3RlciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KENoYXJhY3RlciwgT2JqZWN0LmFzc2lnbih7fSwgY2hhcmFjdGVyKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YmFjNTYwYWQ3NDY4YjA4ZjFiMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==