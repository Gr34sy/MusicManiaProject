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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    artistInput = _useState2[0],
    setArtistInput = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    albumInput = _useState4[0],
    setAlbumInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    trackInput = _useState6[0],
    setTrackInput = _useState6[1];

  //localStorage states
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    favArtists = _useState8[0],
    setFavArtists = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    favAlbums = _useState10[0],
    setFavAlbums = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    favTracks = _useState12[0],
    setFavTracks = _useState12[1];
  function addTrack() {
    return 0;
  }
  function addTrack() {
    return 0;
  }
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
    className: "custom-button",
    onClick: addArtist
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
    className: "custom-button",
    onClick: addAlbum
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
    className: "custom-button",
    onClick: addTrack
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
/******/ 	__webpack_require__.h = () => ("c8ff7cf213babe36e6c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEUyQjtBQUNEO0FBQ29CO0FBQ1U7QUFDeEI7QUFDRjtBQUNrQjtBQUNNO0FBQ047QUFFaEQsU0FBU1csR0FBRyxHQUFFO0VBQ1Ysb0JBQ0ksdUlBQ0EsMkRBQUMseURBQWEsT0FBRSxDQVViO0FBRVg7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdaLDREQUFVLENBQUNTLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMsMkRBQUMsR0FBRyxPQUFFLENBQUM7Ozs7Ozs7O1VDN0JuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvWW91ckZhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBZb3VyRmF2b3JpdGVzKCl7XHJcbiAgICAvL2lucHV0IHN0YXRlc1xyXG4gICAgY29uc3QgW2FydGlzdElucHV0LCBzZXRBcnRpc3RJbnB1dF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2FsYnVtSW5wdXQsIHNldEFsYnVtSW5wdXRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt0cmFja0lucHV0LCBzZXRUcmFja0lucHV0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgLy9sb2NhbFN0b3JhZ2Ugc3RhdGVzXHJcbiAgICBjb25zdCBbZmF2QXJ0aXN0cywgc2V0RmF2QXJ0aXN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZmF2QWxidW1zLCBzZXRGYXZBbGJ1bXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ZhdlRyYWNrcywgc2V0RmF2VHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVHJhY2soKXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkVHJhY2soKXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3RpdGxlXCI+VGhlc2UgYXJlIHlvdXIgPHNwYW4+ZmF2b3JpdGVzITwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPkFydGlzdHM8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFydGlzdCB1IHdhbnQgdG8gYWRkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIiBvbkNsaWNrPXthZGRBcnRpc3R9PkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpc3QtbGluZVwiPjxwPmt1cGFzPC9wPiA8YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpc3QtbGluZVwiPjxwPmt1cGFzPC9wPiA8YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPkFsYnVtczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYW4gYWxidW0gdSB3YW50IHRvIGFkZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJ0ZXh0XCJjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCIgb25DbGljaz17YWRkQWxidW19PkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGJ1bS1saW5lXCI+PHA+a3VwYXM8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+VHJhY2tzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhIHRyYWNrIHUgd2FudCB0byBhZGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiIG9uQ2xpY2s9e2FkZFRyYWNrfT5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhY2stbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7IFxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge05hdmJhcn0gZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi9IZXJvXCI7XHJcbmltcG9ydCB7IEFydGlzdEJyb3dzZXIgfSBmcm9tIFwiLi9BcnRpc3RCcm93c2VyXCI7XHJcbmltcG9ydCB7IEFydGlzdENvbXBhcmlzb24gfSBmcm9tIFwiLi9BcnRpc3RDb21wYXJpc29uXCI7XHJcbmltcG9ydCB7IFlvdXJGYXZvcml0ZXMgfSBmcm9tIFwiLi9Zb3VyRmF2b3JpdGVzXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxZb3VyRmF2b3JpdGVzLz5cclxuICAgICAgICBcclxuICAgICAgICB7LyogPE5hdmJhci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxIZXJvLz5cclxuXHJcbiAgICAgICAgPEFydGlzdEJyb3dzZXIvPlxyXG5cclxuICAgICAgICA8QXJ0aXN0Q29tcGFyaXNvbi8+ICovfVxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAvPikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOGZmN2NmMjEzYmFiZTM2ZTZjN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiWW91ckZhdm9yaXRlcyIsImFydGlzdElucHV0Iiwic2V0QXJ0aXN0SW5wdXQiLCJhbGJ1bUlucHV0Iiwic2V0QWxidW1JbnB1dCIsInRyYWNrSW5wdXQiLCJzZXRUcmFja0lucHV0IiwiZmF2QXJ0aXN0cyIsInNldEZhdkFydGlzdHMiLCJmYXZBbGJ1bXMiLCJzZXRGYXZBbGJ1bXMiLCJmYXZUcmFja3MiLCJzZXRGYXZUcmFja3MiLCJhZGRUcmFjayIsImFkZEFydGlzdCIsImFkZEFsYnVtIiwiY3JlYXRlUm9vdCIsIlJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTmF2YmFyIiwiSGVybyIsIkFydGlzdEJyb3dzZXIiLCJBcnRpc3RDb21wYXJpc29uIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9