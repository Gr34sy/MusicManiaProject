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
  fetch(' http://ws.audioscrobbler.com//2.0/?method=artist.getinfo&artist=Breaking Benjamin&api_key=4d2a662e3ae0be5759a731d889e084d1&format=json').then(function (response) {
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
/******/ 	__webpack_require__.h = () => ("8760ab6fd40dd23f669d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNmIxODE4MjI3MmJkMzYzZjdmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVuQixTQUFTQyxhQUFhLEdBQUU7RUFFM0JDLEtBQUssQ0FBQyx5SUFBeUksQ0FBQyxDQUMvSUMsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO01BQ1gsT0FBT0QsUUFBUTtJQUNuQjtJQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7RUFDaEMsQ0FBQyxDQUFDLENBQ0pKLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUM7RUFBQSxFQUFDLFNBQ2xDLENBQUMsVUFBQU8sR0FBRztJQUFBLE9BQUlGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDRCxHQUFHLENBQUM7RUFBQSxFQUFDO0VBRTlCLG9CQUNJO0lBQVMsU0FBUyxFQUFDO0VBQWdCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QjtJQUFJLFNBQVMsRUFBQztFQUFnQiwrQkFDZix5RkFBMEIsdUJBQ3BDLGVBRUw7SUFBRyxTQUFTLEVBQUM7RUFBVSxXQUFVLGVBQ2pDO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QjtJQUFJLFNBQVMsRUFBQztFQUFjLGdCQUN4QiwwSUFBeUUsZUFDekUsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLGVBQ2YsZ0ZBQWUsZUFDZixnRkFBZSxlQUNmLGdGQUFlLENBQ2QsQ0FDSCxlQUdOO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCLDBGQUF3QixDQUN0QixDQUVKLENBQ0E7QUFFbEI7Ozs7Ozs7O1VDakRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIFxyXG4gICAgZmV0Y2goJyBodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLy8yLjAvP21ldGhvZD1hcnRpc3QuZ2V0aW5mbyZhcnRpc3Q9QnJlYWtpbmcgQmVuamFtaW4mYXBpX2tleT00ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSZmb3JtYXQ9anNvbicpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgIH0pXHJcblx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuXHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1icm93c2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicm93c2VyX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgPHNwYW4+bXVzaWMgYXJ0aXN0czwvc3Bhbj4gYXJvdW5kIHRoZSBnbG9iZSFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdC1iYXJcIj5GaWx0cjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicm93c2VyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YSBTbGlwa25vdCBTbGlwa25vdFNsaXBrbm90U2xpcGtub3RTbGlwa25vdFNsaXBrbm90U2xpcGtub3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2FsaXZhPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhbGl2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TYWxpdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrIGZvciBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NzYwYWI2ZmQ0MGRkMjNmNjY5ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFydGlzdEJyb3dzZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==