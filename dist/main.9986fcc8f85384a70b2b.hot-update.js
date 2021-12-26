"use strict";
self["webpackHotUpdatelets_delivery"]("main",{

/***/ "./src/presentation/pages/detailed-character/index.tsx":
/*!*************************************************************!*\
  !*** ./src/presentation/pages/detailed-character/index.tsx ***!
  \*************************************************************/
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
    const characterName = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().name.replace('-', ' ');
    const handleLoadCharacter = () => __awaiter(void 0, void 0, void 0, function* () {
        const httpResponse = yield loadCharacter.load(characterName);
        setCharacter(httpResponse);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => { handleLoadCharacter(); }, []);
    if (!character) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
    }
    const handleAddToFavorites = () => {
        saveFavorites({
            name: characterName,
            img: chara
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
/******/ 	__webpack_require__.h = () => ("8d85a953bb049b407edb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OTg2ZmNjOGY4NTM4NGE3MGIyYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNtRDtBQUMwQztBQUMzRDtBQUM0QjtBQUNqQjtBQUM3Qyw2QkFBNkIsOEJBQThCO0FBQzNELHNDQUFzQywrQ0FBUTtBQUM5QywwQkFBMEIsMkRBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksZ0RBQVMsU0FBUyx3QkFBd0I7QUFDOUM7QUFDQSxlQUFlLGdEQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLDZDQUE2QztBQUNyRixRQUFRLGdEQUFtQixDQUFDLGlEQUFHLElBQUksdUJBQXVCO0FBQzFELFlBQVksZ0RBQW1CLENBQUMsbURBQUssSUFBSSxvQ0FBb0M7QUFDN0UsUUFBUSxnREFBbUIsQ0FBQyxpREFBRztBQUMvQixZQUFZLGdEQUFtQixDQUFDLHFEQUFPLElBQUksNkNBQTZDO0FBQ3hGLFlBQVksZ0RBQW1CLENBQUMscURBQU8sSUFBSSxZQUFZO0FBQ3ZELFlBQVksZ0RBQW1CLENBQUMsaURBQUc7QUFDbkMsZ0JBQWdCLGdEQUFtQixDQUFDLHFEQUFPLElBQUksMkJBQTJCO0FBQzFFLGtEQUFrRCxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLEtBQUssZ0RBQUksc0NBQXNDO0FBQzdILG9CQUFvQixnREFBbUIsQ0FBQyxtREFBSyxJQUFJLDJCQUEyQjtBQUM1RSxvQkFBb0IsZ0RBQW1CLENBQUMsaURBQUcsSUFBSSxZQUFZO0FBQzNELHdCQUF3QixnREFBbUIsQ0FBQyxxREFBTyxJQUFJLDJCQUEyQjtBQUNsRix3QkFBd0IsZ0RBQW1CLENBQUMsa0RBQUk7QUFDaEQsWUFBWSxnREFBbUIsQ0FBQyxxREFBTyxJQUFJLFlBQVk7QUFDdkQsWUFBWSxnREFBbUIsQ0FBQyxrREFBSSxJQUFJLDZDQUE2QztBQUNyRixnQkFBZ0IsZ0RBQW1CLENBQUMscURBQU8sSUFBSSw4Q0FBOEM7QUFDN0Ysb0JBQW9CLGdEQUFtQixDQUFDLG9EQUFNLElBQUksMkNBQTJDO0FBQzdGLHdCQUF3QixnREFBbUIsQ0FBQyxzREFBVTtBQUN0RCxnQkFBZ0IsZ0RBQW1CLENBQUMscURBQU8sSUFBSSw2Q0FBNkM7QUFDNUYsb0JBQW9CLGdEQUFtQixDQUFDLGlEQUFHLHNDQUFzQyxnREFBbUIsQ0FBQyxrREFBTSxJQUFJLGNBQWMsSUFBSSxnREFBbUIsQ0FBQyxvREFBUSxJQUFJLGNBQWM7QUFDL0s7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7O1VDcERqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xldHMtZGVsaXZlcnkvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2RldGFpbGVkLWNoYXJhY3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbGV0cy1kZWxpdmVyeS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaXZpZGVyLCBGbGV4LCBIZWFkaW5nLCBJbWFnZSwgVGV4dCwgVG9vbHRpcCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBNZEZhdm9yaXRlLCBNZEZlbWFsZSwgTWRNYWxlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5jb25zdCBEZXRhaWxlZENoYXJhY3RlciA9ICh7IGxvYWRDaGFyYWN0ZXIsIHNhdmVGYXZvcml0ZXMgfSkgPT4ge1xuICAgIGNvbnN0IFtjaGFyYWN0ZXIsIHNldENoYXJhY3Rlcl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IGNoYXJhY3Rlck5hbWUgPSB1c2VQYXJhbXMoKS5uYW1lLnJlcGxhY2UoJy0nLCAnICcpO1xuICAgIGNvbnN0IGhhbmRsZUxvYWRDaGFyYWN0ZXIgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgaHR0cFJlc3BvbnNlID0geWllbGQgbG9hZENoYXJhY3Rlci5sb2FkKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICBzZXRDaGFyYWN0ZXIoaHR0cFJlc3BvbnNlKTtcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBoYW5kbGVMb2FkQ2hhcmFjdGVyKCk7IH0sIFtdKTtcbiAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJMb2FkaW5nLi4uXCIpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVBZGRUb0Zhdm9yaXRlcyA9ICgpID0+IHtcbiAgICAgICAgc2F2ZUZhdm9yaXRlcyh7XG4gICAgICAgICAgICBuYW1lOiBjaGFyYWN0ZXJOYW1lLFxuICAgICAgICAgICAgaW1nOiBjaGFyYVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4LCB7IHA6IFwiMnJlbVwiLCBteTogXCIxcmVtXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgbXI6IFwiMnJlbVwiLCBoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBzcmM6IGNoYXJhY3Rlci5pbWcsIGhlaWdodDogXCIxMDAlXCIgfSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGluZywgeyBmb250U2l6ZTogXCI2eGxcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9LCBjaGFyYWN0ZXIubmFtZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERpdmlkZXIsIHsgbWI6IFwiMXJlbVwiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkaW5nLCB7IGFzOiBcImgyXCIsIGZvbnRTaXplOiBcIjR4bFwiIH0sIFwiUG93ZXJzXCIpLFxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci5wc2lQb3dlcnMubWFwKHBvd2VyID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXgsIHsga2V5OiB1dWlkKCksIG1sOiBcIjFyZW1cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7IHNyYzogcG93ZXIuaW1nLCBoOiBcIjVyZW1cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgbWw6IFwiMXJlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRpbmcsIHsgYXM6IFwiaDRcIiwgZm9udFNpemU6IFwiM3hsXCIgfSwgcG93ZXIubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHBvd2VyLmRlc2NyaXB0aW9uKSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEaXZpZGVyLCB7IG15OiBcIjFyZW1cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleCwgeyBtdDogXCIxcmVtXCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogXCJBZGQgdG8gZmF2b3JpdGVzXCIsIHBsYWNlbWVudDogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgbXI6IFwiMXJlbVwiLCBvbkNsaWNrOiBoYW5kbGVBZGRUb0Zhdm9yaXRlcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZEZhdm9yaXRlLCBudWxsKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgeyBsYWJlbDogY2hhcmFjdGVyLmdlbmRlciwgcGxhY2VtZW50OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsIGNoYXJhY3Rlci5nZW5kZXIgPT09ICdtYWxlJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWRNYWxlLCB7IHNpemU6IFwiM3JlbVwiIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChNZEZlbWFsZSwgeyBzaXplOiBcIjNyZW1cIiB9KSkpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZENoYXJhY3RlcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhkODVhOTUzYmIwNDliNDA3ZWRiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9