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
  fetch(' http://ws.audioscrobbler.com//2.0/?method=artist.getinfo&artist=Cher&api_key=4d2a662e3ae0be5759a731d889e084d1&format=json').then(function (response) {
    if (response.ok) {
      return response;
    }
    throw Error;
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7cdd3203e19576b38be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YjY0NGRmNWJjOThmNzY1NWRmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVuQixTQUFTQyxhQUFhLEdBQUU7RUFFM0JDLEtBQUssQ0FBQyw0SEFBNEgsQ0FBQyxDQUNsSUMsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO01BQ1gsT0FBT0QsUUFBUTtJQUNuQjtJQUNBLE1BQU1FLEtBQUs7RUFDZixDQUFDLENBQUMsQ0FDSkgsSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNHLElBQUksRUFBRTtFQUFBLEVBQUMsQ0FDakNKLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQztFQUFBLEVBQUMsU0FDbEMsQ0FBQyxVQUFBTSxHQUFHO0lBQUEsT0FBSUYsT0FBTyxDQUFDRyxLQUFLLENBQUNELEdBQUcsQ0FBQztFQUFBLEVBQUM7RUFFOUIsb0JBQ0k7SUFBUyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQy9CO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCO0lBQUksU0FBUyxFQUFDO0VBQWdCLCtCQUNmLHlGQUEwQix1QkFDcEMsZUFFTDtJQUFHLFNBQVMsRUFBQztFQUFVLFdBQVUsZUFDakM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQzdCO0lBQUksU0FBUyxFQUFDO0VBQWMsZ0JBQ3hCLDBJQUF5RSxlQUN6RSxnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsQ0FDZCxDQUNILGVBR047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMEZBQXdCLENBQ3RCLENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7VUNqREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0QnJvd3Nlcigpe1xyXG4gICAgXHJcbiAgICBmZXRjaCgnIGh0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vLzIuMC8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD1DaGVyJmFwaV9rZXk9NGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEmZm9ybWF0PWpzb24nKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IEVycm9yXHJcbiAgICB9KVxyXG5cdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHQudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXHJcblx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtYmFyXCI+RmlsdHI8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmEgU2xpcGtub3QgU2xpcGtub3RTbGlwa25vdFNsaXBrbm90U2xpcGtub3RTbGlwa25vdFNsaXBrbm90PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DbGljayBmb3IgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTdjZGQzMjAzZTE5NTc2YjM4YmVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpc3RCcm93c2VyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=