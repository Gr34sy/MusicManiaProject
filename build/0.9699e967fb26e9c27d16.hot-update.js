self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\page\\js\\ArtistBrowser.js: Unexpected token (69:42)\n\n\u001b[0m \u001b[90m 67 |\u001b[39m                             \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m key\u001b[33m=\u001b[39m{id} data\u001b[33m-\u001b[39mname\u001b[33m=\u001b[39m{artist\u001b[33m.\u001b[39mname}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 68 |\u001b[39m                                 {artist\u001b[33m.\u001b[39mname}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 69 |\u001b[39m                                 \u001b[33m<\u001b[39m\u001b[33mp\u001b[39m onClick\u001b[33m=>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 70 |\u001b[39m                                     {artist\u001b[33m.\u001b[39mname}\u001b[0m\n\u001b[0m \u001b[90m 71 |\u001b[39m                                 \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mp\u001b[39m\u001b[33m>\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 72 |\u001b[39m                                 \u001b[33m<\u001b[39m\u001b[33ma\u001b[39m href\u001b[33m=\u001b[39m{artist\u001b[33m.\u001b[39murl} className\u001b[33m=\u001b[39m\u001b[32m\"lastFM-artist-link lastFM-artist-link--screen\"\u001b[39m target\u001b[33m=\u001b[39m\u001b[32m\"_blank\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:367:12)\n    at JSXParserMixin.raise (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3706:19)\n    at JSXParserMixin.unexpected (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3744:16)\n    at JSXParserMixin.jsxParseIdentifier (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:7947:12)\n    at JSXParserMixin.jsxParseNamespacedName (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:7957:23)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8055:22)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8075:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8068:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8099:33)");

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _ArtistBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _ArtistBrowser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ArtistBrowser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ArtistComparison__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);








function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_4__.Hero, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ArtistBrowser__WEBPACK_IMPORTED_MODULE_5__.ArtistBrowser, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ArtistComparison__WEBPACK_IMPORTED_MODULE_6__.ArtistComparison, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c34b8c90ed3ae73de20c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45Njk5ZTk2N2ZiMjZlOWMyN2QxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ0Q7QUFDb0I7QUFDVTtBQUN4QjtBQUNGO0FBQ2tCO0FBQ007QUFFdEQsU0FBU1MsR0FBRyxHQUFFO0VBQ1Ysb0JBQ0ksdUlBRUEsMkRBQUMsMkNBQU0sT0FBRSxlQUVULDJEQUFDLHVDQUFJLE9BQUUsZUFFUCwyREFBQyx5REFBYSxPQUFFLGVBRWhCLDJEQUFDLCtEQUFnQixPQUFFLENBRWhCO0FBRVg7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdaLDREQUFVLENBQUNTLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMsMkRBQUMsR0FBRyxPQUFFLENBQUM7Ozs7Ozs7O1VDM0JuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjsgXHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7TmF2YmFyfSBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuL0hlcm9cIjtcclxuaW1wb3J0IHsgQXJ0aXN0QnJvd3NlciB9IGZyb20gXCIuL0FydGlzdEJyb3dzZXJcIjtcclxuaW1wb3J0IHsgQXJ0aXN0Q29tcGFyaXNvbiB9IGZyb20gXCIuL0FydGlzdENvbXBhcmlzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SGVyby8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RCcm93c2VyLz5cclxuXHJcbiAgICAgICAgPEFydGlzdENvbXBhcmlzb24vPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAvPikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMzRiOGM5MGVkM2FlNzNkZTIwY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmJhciIsIkhlcm8iLCJBcnRpc3RCcm93c2VyIiwiQXJ0aXN0Q29tcGFyaXNvbiIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==