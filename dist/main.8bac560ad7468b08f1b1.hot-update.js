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
            loading && (react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__["default"]),
            !loading && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Character Not Found"),
            character && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_2__.Character, Object.assign({}, character)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);


/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonTheme": () => (/* binding */ SkeletonTheme),
/* harmony export */   "default": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * @internal
 */
const SkeletonThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/* eslint-disable react/no-array-index-key */
const defaultEnableAnimation = true;
// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation, }) {
    const style = {};
    if (direction === 'rtl')
        style['--animation-direction'] = 'reverse';
    if (typeof duration === 'number')
        style['--animation-duration'] = `${duration}s`;
    if (!enableAnimation)
        style['--pseudo-element-display'] = 'none';
    if (typeof width === 'string' || typeof width === 'number')
        style.width = width;
    if (typeof height === 'string' || typeof height === 'number')
        style.height = height;
    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
        style.borderRadius = borderRadius;
    if (circle)
        style.borderRadius = '50%';
    if (typeof baseColor !== 'undefined')
        style['--base-color'] = baseColor;
    if (typeof highlightColor !== 'undefined')
        style['--highlight-color'] = highlightColor;
    return style;
}
function Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {
    var _a, _b;
    const contextStyleOptions = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext);
    const propsStyleOptions = { ...originalPropsStyleOptions };
    // DO NOT overwrite style options from the context if `propsStyleOptions`
    // has properties explicity set to undefined
    for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
        if (typeof value === 'undefined') {
            delete propsStyleOptions[key];
        }
    }
    // Props take priority over context
    const styleOptions = {
        ...contextStyleOptions,
        ...propsStyleOptions,
        circle,
    };
    // `styleProp` has the least priority out of everything
    const style = {
        ...styleProp,
        ...styleOptionsToCssProperties(styleOptions),
    };
    let className = 'react-loading-skeleton';
    if (customClassName)
        className += ` ${customClassName}`;
    const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;
    const elements = [];
    // Without the <br />, the skeleton lines will all run together if
    // `width` is specified
    for (let i = 0; i < count; i++) {
        const skeletonSpan = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: className, style: style, key: i }, "\u200C"));
        if (inline) {
            elements.push(skeletonSpan);
        }
        else {
            elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i },
                skeletonSpan,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)));
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: containerClassName, "data-testid": containerTestId, "aria-live": "polite", "aria-busy": (_b = styleOptions.enableAnimation) !== null && _b !== void 0 ? _b : defaultEnableAnimation }, Wrapper
        ? elements.map((el, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, { key: i }, el))
        : elements));
}

function SkeletonTheme({ children, ...styleOptions }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SkeletonThemeContext.Provider, { value: styleOptions }, children));
}




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df4c54f77b5fd3777d32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YmFjNTYwYWQ3NDY4YjA4ZjFiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3QztBQUNZO0FBQ1Y7QUFDSTtBQUNJO0FBQ0k7QUFDdEQsb0JBQW9CLGlCQUFpQjtBQUNyQyw0QkFBNEIsK0NBQVE7QUFDcEMsc0NBQXNDLCtDQUFRO0FBQzlDLDhCQUE4QiwrQ0FBUTtBQUN0QyxrQ0FBa0MsK0NBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHLElBQUksVUFBVTtBQUNqRCxRQUFRLGdEQUFtQixDQUFDLGtEQUFJLElBQUksMkRBQTJEO0FBQy9GLFlBQVksZ0RBQW1CLENBQUMsbURBQUssSUFBSSwrSUFBK0k7QUFDeEwsWUFBWSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLG1LQUFtSztBQUMzTSxnQkFBZ0IsZ0RBQW1CLENBQUMsb0RBQVEsSUFBSSw2QkFBNkI7QUFDN0UsUUFBUSxnREFBbUIsQ0FBQyxpREFBRztBQUMvQix3QkFBd0IsOERBQVE7QUFDaEMsaUNBQWlDLGdEQUFtQjtBQUNwRCx5QkFBeUIsZ0RBQW1CLENBQUMsK0RBQVMsa0JBQWtCO0FBQ3hFO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdEQUFtQixHQUFHOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0lBQWdJO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEpBQThKO0FBQ2xMO0FBQ0EsZ0NBQWdDLDZDQUFnQjtBQUNoRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQiw4QkFBOEIsZ0RBQW1CLFdBQVcsNENBQTRDO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFtQixDQUFDLDJDQUFjLElBQUksUUFBUTtBQUN4RTtBQUNBLGdCQUFnQixnREFBbUI7QUFDbkM7QUFDQTtBQUNBLFlBQVksZ0RBQW1CLFdBQVcsZ01BQWdNO0FBQzFPLGtDQUFrQyxnREFBbUIsWUFBWSxRQUFRO0FBQ3pFO0FBQ0E7O0FBRUEseUJBQXlCLDJCQUEyQjtBQUNwRCxZQUFZLGdEQUFtQixrQ0FBa0MscUJBQXFCO0FBQ3RGOztBQUU4Qzs7Ozs7Ozs7O1VDakY5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSW5wdXQsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IE1kU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMnO1xuY29uc3QgSG9tZXBhZ2UgPSAoeyBzZWFyY2hDaGFyYWN0ZXIgfSkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2hhcmFjdGVyLCBzZXRDaGFyYWN0ZXJdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4ge1xuICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhcmFjdGVyID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgc2VhcmNoQ2hhcmFjdGVyLnNlYXJjaChuYW1lKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXIocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcIjV2d1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoOiBcIjhyZW1cIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZWVlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIHlvdXIgY2hhcmFjdGVyIGhlcmVcIiwgaDogXCIxMDAlXCIsIGZvbnRTaXplOiBcIjRyZW1cIiwgYm9yZGVyOiBcIm5vbmVcIiwgdmFsdWU6IG5hbWUsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI2VlZVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgdzogXCI5cmVtXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGJnOiBcIiNlZWVcIiwgaDogXCIxMDAlXCIsIG9uQ2xpY2s6IGhhbmRsZVNlYXJjaENoYXJhY3RlciB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRTZWFyY2gsIHsgc2l6ZTogXCI3cmVtXCIsIGNvbG9yOiBcIiMxMTFcIiB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmcgJiYgKFNrZWxldG9uKSxcbiAgICAgICAgICAgICFsb2FkaW5nICYmIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkNoYXJhY3RlciBOb3QgRm91bmRcIiksXG4gICAgICAgICAgICBjaGFyYWN0ZXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChDaGFyYWN0ZXIsIE9iamVjdC5hc3NpZ24oe30sIGNoYXJhY3RlcikpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgU2tlbGV0b25UaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5jb25zdCBkZWZhdWx0RW5hYmxlQW5pbWF0aW9uID0gdHJ1ZTtcbi8vIEZvciBwZXJmb3JtYW5jZSAmIGNsZWFubGluZXNzLCBkb24ndCBhZGQgYW55IGlubGluZSBzdHlsZXMgdW5sZXNzIHdlIGhhdmUgdG9cbmZ1bmN0aW9uIHN0eWxlT3B0aW9uc1RvQ3NzUHJvcGVydGllcyh7IGJhc2VDb2xvciwgaGlnaGxpZ2h0Q29sb3IsIHdpZHRoLCBoZWlnaHQsIGJvcmRlclJhZGl1cywgY2lyY2xlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCBlbmFibGVBbmltYXRpb24gPSBkZWZhdWx0RW5hYmxlQW5pbWF0aW9uLCB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJylcbiAgICAgICAgc3R5bGVbJy0tYW5pbWF0aW9uLWRpcmVjdGlvbiddID0gJ3JldmVyc2UnO1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdudW1iZXInKVxuICAgICAgICBzdHlsZVsnLS1hbmltYXRpb24tZHVyYXRpb24nXSA9IGAke2R1cmF0aW9ufXNgO1xuICAgIGlmICghZW5hYmxlQW5pbWF0aW9uKVxuICAgICAgICBzdHlsZVsnLS1wc2V1ZG8tZWxlbWVudC1kaXNwbGF5J10gPSAnbm9uZSc7XG4gICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJylcbiAgICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICBpZiAodHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicpXG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICBpZiAodHlwZW9mIGJvcmRlclJhZGl1cyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGJvcmRlclJhZGl1cyA9PT0gJ251bWJlcicpXG4gICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9IGJvcmRlclJhZGl1cztcbiAgICBpZiAoY2lyY2xlKVxuICAgICAgICBzdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICBpZiAodHlwZW9mIGJhc2VDb2xvciAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHN0eWxlWyctLWJhc2UtY29sb3InXSA9IGJhc2VDb2xvcjtcbiAgICBpZiAodHlwZW9mIGhpZ2hsaWdodENvbG9yICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgc3R5bGVbJy0taGlnaGxpZ2h0LWNvbG9yJ10gPSBoaWdobGlnaHRDb2xvcjtcbiAgICByZXR1cm4gc3R5bGU7XG59XG5mdW5jdGlvbiBTa2VsZXRvbih7IGNvdW50ID0gMSwgd3JhcHBlcjogV3JhcHBlciwgY2xhc3NOYW1lOiBjdXN0b21DbGFzc05hbWUsIGNvbnRhaW5lckNsYXNzTmFtZSwgY29udGFpbmVyVGVzdElkLCBjaXJjbGUgPSBmYWxzZSwgc3R5bGU6IHN0eWxlUHJvcCwgLi4ub3JpZ2luYWxQcm9wc1N0eWxlT3B0aW9ucyB9KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBjb250ZXh0U3R5bGVPcHRpb25zID0gUmVhY3QudXNlQ29udGV4dChTa2VsZXRvblRoZW1lQ29udGV4dCk7XG4gICAgY29uc3QgcHJvcHNTdHlsZU9wdGlvbnMgPSB7IC4uLm9yaWdpbmFsUHJvcHNTdHlsZU9wdGlvbnMgfTtcbiAgICAvLyBETyBOT1Qgb3ZlcndyaXRlIHN0eWxlIG9wdGlvbnMgZnJvbSB0aGUgY29udGV4dCBpZiBgcHJvcHNTdHlsZU9wdGlvbnNgXG4gICAgLy8gaGFzIHByb3BlcnRpZXMgZXhwbGljaXR5IHNldCB0byB1bmRlZmluZWRcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcmlnaW5hbFByb3BzU3R5bGVPcHRpb25zKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzU3R5bGVPcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvcHMgdGFrZSBwcmlvcml0eSBvdmVyIGNvbnRleHRcbiAgICBjb25zdCBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmNvbnRleHRTdHlsZU9wdGlvbnMsXG4gICAgICAgIC4uLnByb3BzU3R5bGVPcHRpb25zLFxuICAgICAgICBjaXJjbGUsXG4gICAgfTtcbiAgICAvLyBgc3R5bGVQcm9wYCBoYXMgdGhlIGxlYXN0IHByaW9yaXR5IG91dCBvZiBldmVyeXRoaW5nXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC4uLnN0eWxlUHJvcCxcbiAgICAgICAgLi4uc3R5bGVPcHRpb25zVG9Dc3NQcm9wZXJ0aWVzKHN0eWxlT3B0aW9ucyksXG4gICAgfTtcbiAgICBsZXQgY2xhc3NOYW1lID0gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuICAgIGlmIChjdXN0b21DbGFzc05hbWUpXG4gICAgICAgIGNsYXNzTmFtZSArPSBgICR7Y3VzdG9tQ2xhc3NOYW1lfWA7XG4gICAgY29uc3QgaW5saW5lID0gKF9hID0gc3R5bGVPcHRpb25zLmlubGluZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2U7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgICAvLyBXaXRob3V0IHRoZSA8YnIgLz4sIHRoZSBza2VsZXRvbiBsaW5lcyB3aWxsIGFsbCBydW4gdG9nZXRoZXIgaWZcbiAgICAvLyBgd2lkdGhgIGlzIHNwZWNpZmllZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBza2VsZXRvblNwYW4gPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHN0eWxlLCBrZXk6IGkgfSwgXCJcXHUyMDBDXCIpKTtcbiAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaChza2VsZXRvblNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7IGtleTogaSB9LFxuICAgICAgICAgICAgICAgIHNrZWxldG9uU3BhbixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBjb250YWluZXJDbGFzc05hbWUsIFwiZGF0YS10ZXN0aWRcIjogY29udGFpbmVyVGVzdElkLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImFyaWEtYnVzeVwiOiAoX2IgPSBzdHlsZU9wdGlvbnMuZW5hYmxlQW5pbWF0aW9uKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBkZWZhdWx0RW5hYmxlQW5pbWF0aW9uIH0sIFdyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHsga2V5OiBpIH0sIGVsKSlcbiAgICAgICAgOiBlbGVtZW50cykpO1xufVxuXG5mdW5jdGlvbiBTa2VsZXRvblRoZW1lKHsgY2hpbGRyZW4sIC4uLnN0eWxlT3B0aW9ucyB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNrZWxldG9uVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBzdHlsZU9wdGlvbnMgfSwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IHsgU2tlbGV0b25UaGVtZSwgU2tlbGV0b24gYXMgZGVmYXVsdCB9O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGY0YzU0Zjc3YjVmZDM3NzdkMzJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=