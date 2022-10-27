"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistBrowser": () => (/* binding */ ArtistBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ArtistBrowser() {
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
  fetch("".concat(rootAPI, "/?method=artist.getTags&artist=Red%20Hot%20Chili%20Peppers&user=RJ&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
    if (response.ok) {
      return response;
    }
    throw Error(response.status);
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return console.log(response);
  })["catch"](function (err) {
    return console.error(err);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "browser__title"
  }, "Browse all ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "music artists"), " around the globe!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "list-bar"
  }, "Filtr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "browser-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva Slipknot SlipknotSlipknotSlipknotSlipknotSlipknotSlipknot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Saliva"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click for details"))));
}

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _ArtistBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
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
/******/ 	__webpack_require__.h = () => ("80c81bdff17a51f50563")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMzA3M2FjY2I3ZDI5MjM2YjZjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVuQixTQUFTQyxhQUFhLEdBQUU7RUFFM0IsSUFBTUMsT0FBTyxHQUFHLGtDQUFrQztFQUNsRCxJQUFNQyxNQUFNLEdBQUcsa0NBQWtDO0VBQ2pEQyxLQUFLLFdBQUlGLE9BQU8sd0ZBQThFQyxNQUFNLGtCQUFlLENBQ2xIRSxJQUFJLENBQUMsVUFBQUMsUUFBUSxFQUFJO0lBQ2QsSUFBR0EsUUFBUSxDQUFDQyxFQUFFLEVBQUM7TUFDWCxPQUFPRCxRQUFRO0lBQ25CO0lBQ0EsTUFBTUUsS0FBSyxDQUFDRixRQUFRLENBQUNHLE1BQU0sQ0FBQztFQUNoQyxDQUFDLENBQUMsQ0FDSkosSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNJLElBQUksRUFBRTtFQUFBLEVBQUMsQ0FDakNMLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUssT0FBTyxDQUFDQyxHQUFHLENBQUNOLFFBQVEsQ0FBQztFQUFBLEVBQUMsU0FDbEMsQ0FBQyxVQUFBTyxHQUFHO0lBQUEsT0FBSUYsT0FBTyxDQUFDRyxLQUFLLENBQUNELEdBQUcsQ0FBQztFQUFBLEVBQUM7RUFFOUIsb0JBQ0k7SUFBUyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQy9CO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCO0lBQUksU0FBUyxFQUFDO0VBQWdCLCtCQUNmLHlGQUEwQix1QkFDcEMsZUFFTDtJQUFHLFNBQVMsRUFBQztFQUFVLFdBQVUsZUFDakM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQzdCO0lBQUksU0FBUyxFQUFDO0VBQWMsZ0JBQ3hCLDBJQUF5RSxlQUN6RSxnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsQ0FDZCxDQUNILGVBR047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMEZBQXdCLENBQ3RCLENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7Ozs7Ozs7OztBQ25EMkI7QUFDRDtBQUNvQjtBQUNVO0FBQ3hCO0FBQ0Y7QUFDa0I7QUFDTTtBQUV0RCxTQUFTUyxHQUFHLEdBQUU7RUFDVixvQkFDSSx1SUFFQSwyREFBQywyQ0FBTSxPQUFFLGVBRVQsMkRBQUMsdUNBQUksT0FBRSxlQUVQLDJEQUFDLHlEQUFhLE9BQUUsZUFFaEIsMkRBQUMsK0RBQWdCLE9BQUUsQ0FFaEI7QUFFWDtBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1gsNERBQVUsQ0FBQ1EsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQywyREFBQyxHQUFHLE9BQUUsQ0FBQzs7Ozs7Ozs7VUMzQm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCdcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSdcclxuICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldFRhZ3MmYXJ0aXN0PVJlZCUyMEhvdCUyMENoaWxpJTIwUGVwcGVycyZ1c2VyPVJKJmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgfSlcclxuXHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0LnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG5cdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWJyb3dzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyb3dzZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIGFsbCA8c3Bhbj5tdXNpYyBhcnRpc3RzPC9zcGFuPiBhcm91bmQgdGhlIGdsb2JlIVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXN0LWJhclwiPkZpbHRyPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhIFNsaXBrbm90IFNsaXBrbm90U2xpcGtub3RTbGlwa25vdFNsaXBrbm90U2xpcGtub3RTbGlwa25vdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2xpY2sgZm9yIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7IFxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge05hdmJhcn0gZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi9IZXJvXCI7XHJcbmltcG9ydCB7IEFydGlzdEJyb3dzZXIgfSBmcm9tIFwiLi9BcnRpc3RCcm93c2VyXCI7XHJcbmltcG9ydCB7IEFydGlzdENvbXBhcmlzb24gfSBmcm9tIFwiLi9BcnRpc3RDb21wYXJpc29uXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPEhlcm8vPlxyXG5cclxuICAgICAgICA8QXJ0aXN0QnJvd3Nlci8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RDb21wYXJpc29uLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwLz4pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODBjODFiZGZmMTdhNTFmNTA1NjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpc3RCcm93c2VyIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJjcmVhdGVSb290IiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZiYXIiLCJIZXJvIiwiQXJ0aXN0Q29tcGFyaXNvbiIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==