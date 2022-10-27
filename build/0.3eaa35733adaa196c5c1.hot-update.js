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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    albumInput = _useState4[0],
    setAlbumInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
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
  function addArtist(e) {
    e.preventDefault();
    localStorage.setItem('artists', _toConsumableArray(artists));
    return 0;
  }
  function addAlbum() {
    e.preventDefault();
    return 0;
  }
  function addTrack() {
    e.preventDefault();
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
    placeholder: "Write here an artist u want to add",
    value: artistInput,
    onChange: function onChange(e) {
      return setArtistInput(e.target.value);
    }
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
    placeholder: "Write here an album u want to add",
    value: albumInput,
    onChange: function onChange(e) {
      return setAlbumInput(e.target.value);
    }
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
    placeholder: "Write here a track u want to add",
    value: trackInput,
    onChange: function onChange(e) {
      return setTrackInput(e.target.value);
    }
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
/******/ 	__webpack_require__.h = () => ("3f437d5b3997a487cb9a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9Zb3VyRmF2b3JpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFlvdXJGYXZvcml0ZXMoKXtcclxuICAgIC8vaW5wdXQgc3RhdGVzXHJcbiAgICBjb25zdCBbYXJ0aXN0SW5wdXQsIHNldEFydGlzdElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFthbGJ1bUlucHV0LCBzZXRBbGJ1bUlucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0cmFja0lucHV0LCBzZXRUcmFja0lucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICAvL2xvY2FsU3RvcmFnZSBzdGF0ZXNcclxuICAgIGNvbnN0IFtmYXZBcnRpc3RzLCBzZXRGYXZBcnRpc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmYXZBbGJ1bXMsIHNldEZhdkFsYnVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZmF2VHJhY2tzLCBzZXRGYXZUcmFja3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBcnRpc3QoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpc3RzJywgWy4uLmFydGlzdHNdKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEFsYnVtKCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRyYWNrKCl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdGl0bGVcIj5UaGVzZSBhcmUgeW91ciA8c3Bhbj5mYXZvcml0ZXMhPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QXJ0aXN0czwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYW4gYXJ0aXN0IHUgd2FudCB0byBhZGRcIiB2YWx1ZT17YXJ0aXN0SW5wdXR9IG9uQ2hhbmdlPXtlID0+c2V0QXJ0aXN0SW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiIG9uQ2xpY2s9e2FkZEFydGlzdH0+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCI+PHA+a3VwYXM8L3A+IDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCI+PHA+a3VwYXM8L3A+IDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QWxidW1zPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhbGJ1bSB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e2FsYnVtSW5wdXR9IG9uQ2hhbmdlPXtlID0+IHNldEFsYnVtSW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiIG9uQ2xpY2s9e2FkZEFsYnVtfT5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsYnVtLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPlRyYWNrczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYSB0cmFjayB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e3RyYWNrSW5wdXR9IG9uQ2hhbmdlPXsgZSA9PiBzZXRUcmFja0lucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIiBvbkNsaWNrPXthZGRUcmFja30+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmFjay1saW5lXCI+PHA+a3VwYXM8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiOyBcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtOYXZiYXJ9IGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vSGVyb1wiO1xyXG5pbXBvcnQgeyBBcnRpc3RCcm93c2VyIH0gZnJvbSBcIi4vQXJ0aXN0QnJvd3NlclwiO1xyXG5pbXBvcnQgeyBBcnRpc3RDb21wYXJpc29uIH0gZnJvbSBcIi4vQXJ0aXN0Q29tcGFyaXNvblwiO1xyXG5pbXBvcnQgeyBZb3VyRmF2b3JpdGVzIH0gZnJvbSBcIi4vWW91ckZhdm9yaXRlc1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8WW91ckZhdm9yaXRlcy8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SGVyby8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RCcm93c2VyLz5cclxuXHJcbiAgICAgICAgPEFydGlzdENvbXBhcmlzb24vPiAqL31cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwLz4pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2Y0MzdkNWIzOTk3YTQ4N2NiOWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIllvdXJGYXZvcml0ZXMiLCJhcnRpc3RJbnB1dCIsInNldEFydGlzdElucHV0IiwiYWxidW1JbnB1dCIsInNldEFsYnVtSW5wdXQiLCJ0cmFja0lucHV0Iiwic2V0VHJhY2tJbnB1dCIsImZhdkFydGlzdHMiLCJzZXRGYXZBcnRpc3RzIiwiZmF2QWxidW1zIiwic2V0RmF2QWxidW1zIiwiZmF2VHJhY2tzIiwic2V0RmF2VHJhY2tzIiwiYWRkQXJ0aXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFydGlzdHMiLCJhZGRBbGJ1bSIsImFkZFRyYWNrIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVSb290IiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZiYXIiLCJIZXJvIiwiQXJ0aXN0QnJvd3NlciIsIkFydGlzdENvbXBhcmlzb24iLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=