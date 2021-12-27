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
    const [characterName, setCharacterName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const name = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().name;
    const handleLoadCharacter = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        const httpResponse = yield loadCharacter.load(characterName);
        if (httpResponse) {
            setCharacter(httpResponse);
        }
        setLoading(false);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setCharacterName(parse);
        handleLoadCharacter();
    }, [name]);
    const handleAddToFavorites = () => {
        saveFavorites({
            name: characterName,
            img: character.img
        });
    };
    if (loading)
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
    if (!character)
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No Character found");
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, { p: "2rem", my: "1rem", alignItems: "center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, { mr: "2rem", h: "100%" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, { src: character.img, height: "100%", alt: character.name })),
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
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, { mr: "1rem", onClick: handleAddToFavorites, "aria-label": "add to favorites" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdFavorite, null))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { label: character.gender, placement: "right" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null, character.gender === 'male' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdMale, { size: "3rem", "aria-label": "male" }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdFemale, { size: "3rem", "aria-label": "female" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailedCharacter);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2dc98778c8f0ba05f18f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jY2Q1NmIxOTJkYWYxNTE2MTQ4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNtRDtBQUMwQztBQUMzRDtBQUM0QjtBQUNqQjtBQUM3Qyw2QkFBNkIsOEJBQThCO0FBQzNELHNDQUFzQywrQ0FBUTtBQUM5Qyw4Q0FBOEMsK0NBQVE7QUFDdEQsa0NBQWtDLCtDQUFRO0FBQzFDLGlCQUFpQiwyREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSxnREFBbUI7QUFDbEM7QUFDQSxlQUFlLGdEQUFtQjtBQUNsQyxZQUFZLGdEQUFtQixDQUFDLGtEQUFJLElBQUksNkNBQTZDO0FBQ3JGLFFBQVEsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSx1QkFBdUI7QUFDMUQsWUFBWSxnREFBbUIsQ0FBQyxtREFBSyxJQUFJLHlEQUF5RDtBQUNsRyxRQUFRLGdEQUFtQixDQUFDLGlEQUFHO0FBQy9CLFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSw2Q0FBNkM7QUFDeEYsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLFlBQVk7QUFDdkQsWUFBWSxnREFBbUIsQ0FBQyxpREFBRztBQUNuQyxnQkFBZ0IsZ0RBQW1CLENBQUMscURBQU8sSUFBSSwyQkFBMkI7QUFDMUUsa0RBQWtELGdEQUFtQixDQUFDLGtEQUFJLElBQUksS0FBSyxnREFBSSxzQ0FBc0M7QUFDN0gsb0JBQW9CLGdEQUFtQixDQUFDLG1EQUFLLElBQUksMkJBQTJCO0FBQzVFLG9CQUFvQixnREFBbUIsQ0FBQyxpREFBRyxJQUFJLFlBQVk7QUFDM0Qsd0JBQXdCLGdEQUFtQixDQUFDLHFEQUFPLElBQUksMkJBQTJCO0FBQ2xGLHdCQUF3QixnREFBbUIsQ0FBQyxrREFBSTtBQUNoRCxZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksWUFBWTtBQUN2RCxZQUFZLGdEQUFtQixDQUFDLGtEQUFJLElBQUksNkNBQTZDO0FBQ3JGLGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDhDQUE4QztBQUM3RixvQkFBb0IsZ0RBQW1CLENBQUMsb0RBQU0sSUFBSSw2RUFBNkU7QUFDL0gsd0JBQXdCLGdEQUFtQixDQUFDLHNEQUFVO0FBQ3RELGdCQUFnQixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDZDQUE2QztBQUM1RixvQkFBb0IsZ0RBQW1CLENBQUMsaURBQUcsc0NBQXNDLGdEQUFtQixDQUFDLGtEQUFNLElBQUksb0NBQW9DLElBQUksZ0RBQW1CLENBQUMsb0RBQVEsSUFBSSxzQ0FBc0M7QUFDN047QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7O1VDOURqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2RldGFpbGVkLWNoYXJhY3Rlci9kZXRhaWxlZC1jaGFyYWN0ZXIudHN4Iiwid2VicGFjazovL2xldHMtZGVsaXZlcnkvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGl2aWRlciwgRmxleCwgSGVhZGluZywgSW1hZ2UsIFRleHQsIFRvb2x0aXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IE1kRmF2b3JpdGUsIE1kRmVtYWxlLCBNZE1hbGUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmNvbnN0IERldGFpbGVkQ2hhcmFjdGVyID0gKHsgbG9hZENoYXJhY3Rlciwgc2F2ZUZhdm9yaXRlcyB9KSA9PiB7XG4gICAgY29uc3QgW2NoYXJhY3Rlciwgc2V0Q2hhcmFjdGVyXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2NoYXJhY3Rlck5hbWUsIHNldENoYXJhY3Rlck5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBuYW1lID0gdXNlUGFyYW1zKCkubmFtZTtcbiAgICBjb25zdCBoYW5kbGVMb2FkQ2hhcmFjdGVyID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IHlpZWxkIGxvYWRDaGFyYWN0ZXIubG9hZChjaGFyYWN0ZXJOYW1lKTtcbiAgICAgICAgaWYgKGh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgc2V0Q2hhcmFjdGVyKGh0dHBSZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2hhcmFjdGVyTmFtZShwYXJzZSk7XG4gICAgICAgIGhhbmRsZUxvYWRDaGFyYWN0ZXIoKTtcbiAgICB9LCBbbmFtZV0pO1xuICAgIGNvbnN0IGhhbmRsZUFkZFRvRmF2b3JpdGVzID0gKCkgPT4ge1xuICAgICAgICBzYXZlRmF2b3JpdGVzKHtcbiAgICAgICAgICAgIG5hbWU6IGNoYXJhY3Rlck5hbWUsXG4gICAgICAgICAgICBpbWc6IGNoYXJhY3Rlci5pbWdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbiAgICBpZiAoIWNoYXJhY3RlcilcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiTm8gQ2hhcmFjdGVyIGZvdW5kXCIpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IHA6IFwiMnJlbVwiLCBteTogXCIxcmVtXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgbXI6IFwiMnJlbVwiLCBoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IGNoYXJhY3Rlci5pbWcsIGhlaWdodDogXCIxMDAlXCIsIGFsdDogY2hhcmFjdGVyLm5hbWUgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgeyBmb250U2l6ZTogXCI2eGxcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9LCBjaGFyYWN0ZXIubmFtZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERpdmlkZXIsIHsgbWI6IFwiMXJlbVwiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCB7IGFzOiBcImgyXCIsIGZvbnRTaXplOiBcIjR4bFwiIH0sIFwiUG93ZXJzXCIpLFxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5wc2lQb3dlcnMubWFwKHBvd2VyID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsga2V5OiB1dWlkKCksIG1sOiBcIjFyZW1cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7IHNyYzogcG93ZXIuaW1nLCBoOiBcIjVyZW1cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgbWw6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIHsgYXM6IFwiaDRcIiwgZm9udFNpemU6IFwiM3hsXCIgfSwgcG93ZXIubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHBvd2VyLmRlc2NyaXB0aW9uKSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEaXZpZGVyLCB7IG15OiBcIjFyZW1cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBtdDogXCIxcmVtXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJBZGQgdG8gZmF2b3JpdGVzXCIsIHBsYWNlbWVudDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgbXI6IFwiMXJlbVwiLCBvbkNsaWNrOiBoYW5kbGVBZGRUb0Zhdm9yaXRlcywgXCJhcmlhLWxhYmVsXCI6IFwiYWRkIHRvIGZhdm9yaXRlc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1kRmF2b3JpdGUsIG51bGwpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCB7IGxhYmVsOiBjaGFyYWN0ZXIuZ2VuZGVyLCBwbGFjZW1lbnQ6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCwgY2hhcmFjdGVyLmdlbmRlciA9PT0gJ21hbGUnID8gUmVhY3QuY3JlYXRlRWxlbWVudChNZE1hbGUsIHsgc2l6ZTogXCIzcmVtXCIsIFwiYXJpYS1sYWJlbFwiOiBcIm1hbGVcIiB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRGZW1hbGUsIHsgc2l6ZTogXCIzcmVtXCIsIFwiYXJpYS1sYWJlbFwiOiBcImZlbWFsZVwiIH0pKSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IERldGFpbGVkQ2hhcmFjdGVyO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmRjOTg3NzhjOGYwYmEwNWYxOGZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=