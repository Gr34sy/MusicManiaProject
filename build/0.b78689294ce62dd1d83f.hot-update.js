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
  var rootAPI = 'http://ws.audioscrobbler.com/';
  fetch("".concat(rootAPI, "http://ws.audioscrobbler.com/2.0/?method=artist.getTags&artist=Red%20Hot%20Chili%20Peppers&user=RJ&api_key=YOUR_API_KEY&format=json")).then(function (response) {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7588bcc2766820c307da")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNzg2ODkyOTRjZTYyZGQxZDgzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVuQixTQUFTQyxhQUFhLEdBQUU7RUFFM0IsSUFBTUMsT0FBTyxHQUFHLCtCQUErQjtFQUMvQ0MsS0FBSyxXQUFJRCxPQUFPLHlJQUFzSSxDQUNySkUsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO01BQ1gsT0FBT0QsUUFBUTtJQUNuQjtJQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7RUFDaEMsQ0FBQyxDQUFDLENBQ0pKLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUM7RUFBQSxFQUFDLFNBQ2xDLENBQUMsVUFBQU8sR0FBRztJQUFBLE9BQUlGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDRCxHQUFHLENBQUM7RUFBQSxFQUFDO0VBRTlCLG9CQUNJO0lBQVMsU0FBUyxFQUFDO0VBQWdCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QjtJQUFJLFNBQVMsRUFBQztFQUFnQiwrQkFDZix5RkFBMEIsdUJBQ3BDLGVBRUw7SUFBRyxTQUFTLEVBQUM7RUFBVSxXQUFVLGVBQ2pDO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QjtJQUFJLFNBQVMsRUFBQztFQUFjLGdCQUN4QiwwSUFBeUUsZUFDekUsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLENBQ2QsQ0FDSCxlQUdOO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCLDBGQUF3QixDQUN0QixDQUVKLENBQ0E7QUFFbEI7Ozs7Ozs7O1VDbERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLydcclxuICAgIGZldGNoKGAke3Jvb3RBUEl9aHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAvP21ldGhvZD1hcnRpc3QuZ2V0VGFncyZhcnRpc3Q9UmVkJTIwSG90JTIwQ2hpbGklMjBQZXBwZXJzJnVzZXI9UkomYXBpX2tleT1ZT1VSX0FQSV9LRVkmZm9ybWF0PWpzb25gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICB9KVxyXG5cdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHQudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXHJcblx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtYmFyXCI+RmlsdHI8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmEgU2xpcGtub3QgU2xpcGtub3RTbGlwa25vdFNsaXBrbm90U2xpcGtub3RTbGlwa25vdFNsaXBrbm90PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DbGljayBmb3IgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzU4OGJjYzI3NjY4MjBjMzA3ZGFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpc3RCcm93c2VyIiwicm9vdEFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9