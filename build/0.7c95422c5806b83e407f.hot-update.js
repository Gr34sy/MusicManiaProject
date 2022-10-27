"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourFavorites": () => (/* binding */ YourFavorites)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function YourFavorites() {
  //input states
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    artistInput = _useState2[0],
    setArtistInput = _useState2[1];

  //localStorage states
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    favArtists = _useState4[0],
    setFavArtists = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    favAlbums = _useState6[0],
    setFavAlbums = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    favTracks = _useState8[0],
    setFavTracks = _useState8[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "favorites__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "favorites__title"
  }, "These are your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "favorites!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "favorites__type"
  }, "Artists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "custom-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "favorites__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "custom-input input--favorites",
    placeholder: "Write here an artist u want to add"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "text",
    className: "custom-button"
  }, "Add ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "custom-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "artist-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "kupas"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "custom-button button--delete"
  }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "artist-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "kupas"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "custom-button button--delete"
  }, "Delete")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "favorites__type"
  }, "Albums"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "custom-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "favorites__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "custom-input input--favorites",
    placeholder: "Write here an album u want to add"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "text",
    className: "custom-button"
  }, "Add ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "custom-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "album-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "kupas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "album-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "kupas")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "favorites__type"
  }, "Tracks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "custom-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "favorites__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "custom-input input--favorites",
    placeholder: "Write here a track u want to add"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "text",
    className: "custom-button"
  }, "Add ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "custom-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "track-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "kupas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "track-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "kupas")))));
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
/* harmony import */ var _YourFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(212);









function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_YourFavorites__WEBPACK_IMPORTED_MODULE_7__.YourFavorites, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8ec36977a61ab9957d7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxJQUFJLENBQUNDLE1BQU0sZUFBQywyREFBQyxHQUFHLE9BQUUsQ0FBQzs7Ozs7Ozs7VUM3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9Zb3VyRmF2b3JpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFlvdXJGYXZvcml0ZXMoKXtcclxuICAgIC8vaW5wdXQgc3RhdGVzXHJcbiAgICBjb25zdCBbYXJ0aXN0SW5wdXQsIHNldEFydGlzdElucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIC8vbG9jYWxTdG9yYWdlIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhdkFydGlzdHMsIHNldEZhdkFydGlzdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ZhdkFsYnVtcywgc2V0RmF2QWxidW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmYXZUcmFja3MsIHNldEZhdlRyYWNrc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190aXRsZVwiPlRoZXNlIGFyZSB5b3VyIDxzcGFuPmZhdm9yaXRlcyE8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BcnRpc3RzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhcnRpc3QgdSB3YW50IHRvIGFkZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJ0ZXh0XCJjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCI+PHA+a3VwYXM8L3A+IDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCI+PHA+a3VwYXM8L3A+IDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QWxidW1zPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhbGJ1bSB1IHdhbnQgdG8gYWRkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsYnVtLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPlRyYWNrczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYSB0cmFjayB1IHdhbnQgdG8gYWRkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhY2stbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7IFxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge05hdmJhcn0gZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi9IZXJvXCI7XHJcbmltcG9ydCB7IEFydGlzdEJyb3dzZXIgfSBmcm9tIFwiLi9BcnRpc3RCcm93c2VyXCI7XHJcbmltcG9ydCB7IEFydGlzdENvbXBhcmlzb24gfSBmcm9tIFwiLi9BcnRpc3RDb21wYXJpc29uXCI7XHJcbmltcG9ydCB7IFlvdXJGYXZvcml0ZXMgfSBmcm9tIFwiLi9Zb3VyRmF2b3JpdGVzXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxZb3VyRmF2b3JpdGVzLz5cclxuICAgICAgICBcclxuICAgICAgICB7LyogPE5hdmJhci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxIZXJvLz5cclxuXHJcbiAgICAgICAgPEFydGlzdEJyb3dzZXIvPlxyXG5cclxuICAgICAgICA8QXJ0aXN0Q29tcGFyaXNvbi8+ICovfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAvPikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOGVjMzY5NzdhNjFhYjk5NTdkN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiWW91ckZhdm9yaXRlcyIsImFydGlzdElucHV0Iiwic2V0QXJ0aXN0SW5wdXQiLCJmYXZBcnRpc3RzIiwic2V0RmF2QXJ0aXN0cyIsImZhdkFsYnVtcyIsInNldEZhdkFsYnVtcyIsImZhdlRyYWNrcyIsInNldEZhdlRyYWNrcyIsImNyZWF0ZVJvb3QiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmJhciIsIkhlcm8iLCJBcnRpc3RCcm93c2VyIiwiQXJ0aXN0Q29tcGFyaXNvbiIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==