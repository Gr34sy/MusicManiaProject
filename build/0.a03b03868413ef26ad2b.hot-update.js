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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ArtistBrowser() {
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
  fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=4d2a662e3ae0be5759a731d889e084d1&format=json").then(function (response) {
    if (response.ok) {
      return response;
    }
    throw Error(response.status);
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return setBrowser(response);
  })["catch"](function (err) {
    return console.error(err);
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    browser = _useState2[0],
    setBrowser = _useState2[1];
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click for details"))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d67ba713527e31150f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMDNiMDM4Njg0MTNlZjI2YWQyYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUVqQyxTQUFTRSxhQUFhLEdBQUU7RUFFM0IsSUFBTUMsT0FBTyxHQUFHLGtDQUFrQztFQUNsRCxJQUFNQyxNQUFNLEdBQUcsa0NBQWtDO0VBQ2pEQyxLQUFLLDZIQUE2SCxDQUNqSUMsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO01BQ1gsT0FBT0QsUUFBUTtJQUNuQjtJQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7RUFDaEMsQ0FBQyxDQUFDLENBQ0pKLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlLLFVBQVUsQ0FBQ0wsUUFBUSxDQUFDO0VBQUEsRUFBQyxTQUNqQyxDQUFDLFVBQUFNLEdBQUc7SUFBQSxPQUFJQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0VBQUEsRUFBQztFQUU5QixnQkFBNkJaLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBbENlLE9BQU87SUFBQ0osVUFBVTtFQUV6QixvQkFDSTtJQUFTLFNBQVMsRUFBQztFQUFnQixnQkFDL0I7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEI7SUFBSSxTQUFTLEVBQUM7RUFBZ0IsK0JBQ2YseUZBQTBCLHVCQUNwQyxlQUVMO0lBQUcsU0FBUyxFQUFDO0VBQVUsV0FBVSxlQUNqQztJQUFLLFNBQVMsRUFBQztFQUFrQixnQkFDN0I7SUFBSSxTQUFTLEVBQUM7RUFBYyxFQUV2QixDQUNILGVBR047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMEZBQXdCLENBQ3RCLENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7VUN6Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RCcm93c2VyKCl7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnXHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnXHJcbiAgICBmZXRjaChgaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAvP21ldGhvZD10YWcuZ2V0dG9wYXJ0aXN0cyZ0YWc9ZGlzY28mYXBpX2tleT00ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSZmb3JtYXQ9anNvbmApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgIH0pXHJcblx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdC50aGVuKHJlc3BvbnNlID0+IHNldEJyb3dzZXIocmVzcG9uc2UpKVxyXG5cdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICBjb25zdCBbYnJvd3NlcixzZXRCcm93c2VyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtYmFyXCI+RmlsdHI8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrIGZvciBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZDY3YmE3MTM1MjdlMzExNTBmMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXJ0aXN0QnJvd3NlciIsInJvb3RBUEkiLCJrZXlBUEkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwic2V0QnJvd3NlciIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImJyb3dzZXIiXSwic291cmNlUm9vdCI6IiJ9