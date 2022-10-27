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
    return setBrowser(response.topartists.artist);
  })["catch"](function (err) {
    return console.error(err);
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    browser = _useState2[0],
    setBrowser = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);
  console.log(browser);
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
/******/ 	__webpack_require__.h = () => ("88f428736cb1c667d4e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OWMwYWY1NjJiOGQ0YmJlMzk2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUU1QyxTQUFTRyxhQUFhLEdBQUU7RUFFM0IsSUFBTUMsT0FBTyxHQUFHLGtDQUFrQztFQUNsRCxJQUFNQyxNQUFNLEdBQUcsa0NBQWtDO0VBQ2pEQyxLQUFLLDZIQUE2SCxDQUNqSUMsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO01BQ1gsT0FBT0QsUUFBUTtJQUNuQjtJQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7RUFDaEMsQ0FBQyxDQUFDLENBQ0pKLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlLLFVBQVUsQ0FBQ0wsUUFBUSxDQUFDTSxVQUFVLENBQUNDLE1BQU0sQ0FBQztFQUFBLEVBQUMsU0FDbkQsQ0FBQyxVQUFBQyxHQUFHO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztFQUFBLEVBQUM7RUFFOUIsZ0JBQTZCZCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWxDaUIsT0FBTztJQUFDTixVQUFVO0VBRXpCWixnREFBUyxDQUFFLFlBQUksQ0FFZixDQUFDLEVBR0QsRUFBRSxDQUFDO0VBRUhnQixPQUFPLENBQUNHLEdBQUcsQ0FBQ0QsT0FBTyxDQUFDO0VBQ3BCLG9CQUNJO0lBQVMsU0FBUyxFQUFDO0VBQWdCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QjtJQUFJLFNBQVMsRUFBQztFQUFnQiwrQkFDZix5RkFBMEIsdUJBQ3BDLGVBRUw7SUFBRyxTQUFTLEVBQUM7RUFBVSxXQUFVLGVBQ2pDO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QjtJQUFJLFNBQVMsRUFBQztFQUFjLEVBSXZCLENBQ0gsZUFHTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QiwwRkFBd0IsQ0FDdEIsQ0FFSixDQUNBO0FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkQyQjtBQUNEO0FBQ29CO0FBQ1U7QUFDeEI7QUFDRjtBQUNrQjtBQUNNO0FBRXRELFNBQVNTLEdBQUcsR0FBRTtFQUNWLG9CQUNJLHVJQUVBLDJEQUFDLDJDQUFNLE9BQUUsZUFFVCwyREFBQyx1Q0FBSSxPQUFFLGVBRVAsMkRBQUMseURBQWEsT0FBRSxlQUVoQiwyREFBQywrREFBZ0IsT0FBRSxDQUVoQjtBQUVYO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHWCw0REFBVSxDQUFDUSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDLDJEQUFDLEdBQUcsT0FBRSxDQUFDOzs7Ozs7OztVQzNCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCdcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSdcclxuICAgIGZldGNoKGBodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMC8/bWV0aG9kPXRhZy5nZXR0b3BhcnRpc3RzJnRhZz1kaXNjbyZhcGlfa2V5PTRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJmZvcm1hdD1qc29uYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgfSlcclxuXHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0LnRoZW4ocmVzcG9uc2UgPT4gc2V0QnJvd3NlcihyZXNwb25zZS50b3BhcnRpc3RzLmFydGlzdCkpXHJcblx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgIGNvbnN0IFticm93c2VyLHNldEJyb3dzZXJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICAgXHJcbiAgICAsXHJcbiAgICBbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhicm93c2VyKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtYmFyXCI+RmlsdHI8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7YnJvd3Nlci5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aXN0LCBpZCk9PiA8bGkga2V5PXtpZH0+e2FydGlzdC5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrIGZvciBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiOyBcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtOYXZiYXJ9IGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vSGVyb1wiO1xyXG5pbXBvcnQgeyBBcnRpc3RCcm93c2VyIH0gZnJvbSBcIi4vQXJ0aXN0QnJvd3NlclwiO1xyXG5pbXBvcnQgeyBBcnRpc3RDb21wYXJpc29uIH0gZnJvbSBcIi4vQXJ0aXN0Q29tcGFyaXNvblwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxIZXJvLz5cclxuXHJcbiAgICAgICAgPEFydGlzdEJyb3dzZXIvPlxyXG5cclxuICAgICAgICA8QXJ0aXN0Q29tcGFyaXNvbi8+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcC8+KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg4ZjQyODczNmNiMWM2NjdkNGU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RCcm93c2VyIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJzZXRCcm93c2VyIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImJyb3dzZXIiLCJsb2ciLCJjcmVhdGVSb290IiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZiYXIiLCJIZXJvIiwiQXJ0aXN0Q29tcGFyaXNvbiIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==