"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/pages/detailed-character/detailed-character.tsx":
/*!**************************************************************************!*\
  !*** ./src/presentation/pages/detailed-character/detailed-character.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const DetailedCharacter = ({ loadCharacter, saveFavorites }) => {
    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const name = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().name;
    const handleLoadCharacter = (characterName) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        const httpResponse = yield loadCharacter.load(characterName);
        if (httpResponse) {
            setCharacter(httpResponse);
        }
        setLoading(false);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => { handleLoadCharacter(name.replace('-', ' ')); }, [name]);
    if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
    }
    if (!character) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No Character found");
    }
    const handleAddToFavorites = () => {
        saveFavorites({
            name: 'characterName',
            img: character.img
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { p: "2rem", my: "1rem", alignItems: "center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { mr: "2rem", h: "100%" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, { src: character.img, height: "100%" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, { fontSize: "6xl", textTransform: "uppercase" }, character.name),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, { mb: "1rem" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, { as: "h2", fontSize: "4xl" }, "Powers"),
                character.psiPowers.map(power => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { key: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(), ml: "1rem", alignItems: "center" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, { src: power.img, h: "5rem" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { ml: "1rem" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, { as: "h4", fontSize: "3xl" }, power.name),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, power.description)))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, { my: "1rem" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { mt: "1rem", justifyContent: "space-between" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: "Add to favorites", placement: "left" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, { mr: "1rem", onClick: handleAddToFavorites },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdFavorite, null))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: character.gender, placement: "right" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null, character.gender === 'male' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdMale, { size: "3rem" }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdFemale, { size: "3rem" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailedCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("416ed48d25fc25c7efa8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zOGFjMTQ1N2E4OTJmODliNDhkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNtRDtBQUMwQztBQUMzRDtBQUM0QjtBQUNqQjtBQUM3Qyw2QkFBNkIsOEJBQThCO0FBQzNELHNDQUFzQywrQ0FBUTtBQUM5QyxrQ0FBa0MsK0NBQVE7QUFDMUMsaUJBQWlCLDJEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVMsU0FBUyw4Q0FBOEM7QUFDcEU7QUFDQSxlQUFlLGdEQUFtQjtBQUNsQztBQUNBO0FBQ0EsZUFBZSxnREFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw2Q0FBNkM7QUFDckYsUUFBUSxnREFBbUIsQ0FBQyxpREFBRyxJQUFJLHVCQUF1QjtBQUMxRCxZQUFZLGdEQUFtQixDQUFDLG1EQUFLLElBQUksb0NBQW9DO0FBQzdFLFFBQVEsZ0RBQW1CLENBQUMsaURBQUc7QUFDL0IsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDZDQUE2QztBQUN4RixZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksWUFBWTtBQUN2RCxZQUFZLGdEQUFtQixDQUFDLGlEQUFHO0FBQ25DLGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDJCQUEyQjtBQUMxRSxrREFBa0QsZ0RBQW1CLENBQUMsa0RBQUksSUFBSSxLQUFLLGdEQUFJLHNDQUFzQztBQUM3SCxvQkFBb0IsZ0RBQW1CLENBQUMsbURBQUssSUFBSSwyQkFBMkI7QUFDNUUsb0JBQW9CLGdEQUFtQixDQUFDLGlEQUFHLElBQUksWUFBWTtBQUMzRCx3QkFBd0IsZ0RBQW1CLENBQUMscURBQU8sSUFBSSwyQkFBMkI7QUFDbEYsd0JBQXdCLGdEQUFtQixDQUFDLGtEQUFJO0FBQ2hELFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSxZQUFZO0FBQ3ZELFlBQVksZ0RBQW1CLENBQUMsa0RBQUksSUFBSSw2Q0FBNkM7QUFDckYsZ0JBQWdCLGdEQUFtQixDQUFDLHFEQUFPLElBQUksOENBQThDO0FBQzdGLG9CQUFvQixnREFBbUIsQ0FBQyxvREFBTSxJQUFJLDJDQUEyQztBQUM3Rix3QkFBd0IsZ0RBQW1CLENBQUMsc0RBQVU7QUFDdEQsZ0JBQWdCLGdEQUFtQixDQUFDLHFEQUFPLElBQUksNkNBQTZDO0FBQzVGLG9CQUFvQixnREFBbUIsQ0FBQyxpREFBRyxzQ0FBc0MsZ0RBQW1CLENBQUMsa0RBQU0sSUFBSSxjQUFjLElBQUksZ0RBQW1CLENBQUMsb0RBQVEsSUFBSSxjQUFjO0FBQy9LO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7OztVQzVEakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5Ly4vc3JjL3ByZXNlbnRhdGlvbi9wYWdlcy9kZXRhaWxlZC1jaGFyYWN0ZXIvZGV0YWlsZWQtY2hhcmFjdGVyLnRzeCIsIndlYnBhY2s6Ly9sZXRzLWRlbGl2ZXJ5L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIERpdmlkZXIsIEZsZXgsIEhlYWRpbmcsIEltYWdlLCBUZXh0LCBUb29sdGlwIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBNZEZhdm9yaXRlLCBNZEZlbWFsZSwgTWRNYWxlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5jb25zdCBEZXRhaWxlZENoYXJhY3RlciA9ICh7IGxvYWRDaGFyYWN0ZXIsIHNhdmVGYXZvcml0ZXMgfSkgPT4ge1xuICAgIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBuYW1lID0gdXNlUGFyYW1zKCkubmFtZTtcbiAgICBjb25zdCBoYW5kbGVMb2FkQ2hhcmFjdGVyID0gKGNoYXJhY3Rlck5hbWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zdCBodHRwUmVzcG9uc2UgPSB5aWVsZCBsb2FkQ2hhcmFjdGVyLmxvYWQoY2hhcmFjdGVyTmFtZSk7XG4gICAgICAgIGlmIChodHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNldENoYXJhY3RlcihodHRwUmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGhhbmRsZUxvYWRDaGFyYWN0ZXIobmFtZS5yZXBsYWNlKCctJywgJyAnKSk7IH0sIFtuYW1lXSk7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbiAgICB9XG4gICAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiTm8gQ2hhcmFjdGVyIGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVBZGRUb0Zhdm9yaXRlcyA9ICgpID0+IHtcbiAgICAgICAgc2F2ZUZhdm9yaXRlcyh7XG4gICAgICAgICAgICBuYW1lOiAnY2hhcmFjdGVyTmFtZScsXG4gICAgICAgICAgICBpbWc6IGNoYXJhY3Rlci5pbWdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBwOiBcIjJyZW1cIiwgbXk6IFwiMXJlbVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG1yOiBcIjJyZW1cIiwgaDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1hZ2UsIHsgc3JjOiBjaGFyYWN0ZXIuaW1nLCBoZWlnaHQ6IFwiMTAwJVwiIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIHsgZm9udFNpemU6IFwiNnhsXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIgfSwgY2hhcmFjdGVyLm5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEaXZpZGVyLCB7IG1iOiBcIjFyZW1cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgeyBhczogXCJoMlwiLCBmb250U2l6ZTogXCI0eGxcIiB9LCBcIlBvd2Vyc1wiKSxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIucHNpUG93ZXJzLm1hcChwb3dlciA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IGtleTogdXVpZCgpLCBtbDogXCIxcmVtXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IHBvd2VyLmltZywgaDogXCI1cmVtXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG1sOiBcIjFyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCB7IGFzOiBcImg0XCIsIGZvbnRTaXplOiBcIjN4bFwiIH0sIHBvd2VyLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCBwb3dlci5kZXNjcmlwdGlvbikpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGl2aWRlciwgeyBteTogXCIxcmVtXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsgbXQ6IFwiMXJlbVwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IFwiQWRkIHRvIGZhdm9yaXRlc1wiLCBwbGFjZW1lbnQ6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG1yOiBcIjFyZW1cIiwgb25DbGljazogaGFuZGxlQWRkVG9GYXZvcml0ZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRGYXZvcml0ZSwgbnVsbCkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIHsgbGFiZWw6IGNoYXJhY3Rlci5nZW5kZXIsIHBsYWNlbWVudDogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLCBjaGFyYWN0ZXIuZ2VuZGVyID09PSAnbWFsZScgPyBSZWFjdC5jcmVhdGVFbGVtZW50KE1kTWFsZSwgeyBzaXplOiBcIjNyZW1cIiB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRGZW1hbGUsIHsgc2l6ZTogXCIzcmVtXCIgfSkpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRGV0YWlsZWRDaGFyYWN0ZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MTZlZDQ4ZDI1ZmMyNWM3ZWZhOFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==