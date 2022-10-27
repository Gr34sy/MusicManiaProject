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
    e.prevent["default"];
    localStorage.setItem('artists', []);
    return 0;
  }
  function addAlbum() {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa2ff718426d565ff9eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUssQ0FDM0MsQ0FDQyxlQUVWO0lBQUksU0FBUyxFQUFDO0VBQWlCLFlBQVksZUFDM0M7SUFBUyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDO0lBQU0sU0FBUyxFQUFDO0VBQWlCLGdCQUM3QjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDLCtCQUErQjtJQUFDLFdBQVcsRUFBQyxrQ0FBa0M7SUFBQyxLQUFLLEVBQUViLFVBQVc7SUFBQyxRQUFRLEVBQUcsa0JBQUFTLENBQUM7TUFBQSxPQUFJUixhQUFhLENBQUNRLENBQUMsQ0FBQ00sTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDL0s7SUFBUSxJQUFJLEVBQUMsTUFBTTtJQUFBLFNBQVMsRUFBQyxlQUFlO0lBQUMsT0FBTyxFQUFFRjtFQUFTLFVBQWMsQ0FDMUUsZUFDUDtJQUFJLFNBQVMsRUFBQztFQUFhLGdCQUN2QjtJQUFJLFNBQVMsRUFBQztFQUFZLGdCQUFDLDhFQUFZLENBQUssZUFDNUM7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFBQyw4RUFBWSxDQUFLLENBQzNDLENBQ0MsQ0FDUDtBQUVmOzs7Ozs7OztVQ3RFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvWW91ckZhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBZb3VyRmF2b3JpdGVzKCl7XHJcbiAgICAvL2lucHV0IHN0YXRlc1xyXG4gICAgY29uc3QgW2FydGlzdElucHV0LCBzZXRBcnRpc3RJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWxidW1JbnB1dCwgc2V0QWxidW1JbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHJhY2tJbnB1dCwgc2V0VHJhY2tJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgLy9sb2NhbFN0b3JhZ2Ugc3RhdGVzXHJcbiAgICBjb25zdCBbZmF2QXJ0aXN0cywgc2V0RmF2QXJ0aXN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZmF2QWxidW1zLCBzZXRGYXZBbGJ1bXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2ZhdlRyYWNrcywgc2V0RmF2VHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQXJ0aXN0KGUpe1xyXG4gICAgICAgIGUucHJldmVudC5kZWZhdWx0XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGlzdHMnLCBbXSlcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbGJ1bSgpe1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRyYWNrKCl7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190aXRsZVwiPlRoZXNlIGFyZSB5b3VyIDxzcGFuPmZhdm9yaXRlcyE8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BcnRpc3RzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhcnRpc3QgdSB3YW50IHRvIGFkZFwiIHZhbHVlPXthcnRpc3RJbnB1dH0gb25DaGFuZ2U9e2UgPT5zZXRBcnRpc3RJbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJ0ZXh0XCJjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCIgb25DbGljaz17YWRkQXJ0aXN0fT5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aXN0LWxpbmVcIj48cD5rdXBhczwvcD4gPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aXN0LWxpbmVcIj48cD5rdXBhczwvcD4gPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BbGJ1bXM8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFsYnVtIHUgd2FudCB0byBhZGRcIiB2YWx1ZT17YWxidW1JbnB1dH0gb25DaGFuZ2U9e2UgPT4gc2V0QWxidW1JbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJ0ZXh0XCJjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCIgb25DbGljaz17YWRkQWxidW19PkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGJ1bS1saW5lXCI+PHA+a3VwYXM8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+VHJhY2tzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhIHRyYWNrIHUgd2FudCB0byBhZGRcIiB2YWx1ZT17dHJhY2tJbnB1dH0gb25DaGFuZ2U9eyBlID0+IHNldFRyYWNrSW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiIG9uQ2xpY2s9e2FkZFRyYWNrfT5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhY2stbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZhMmZmNzE4NDI2ZDU2NWZmOWViXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJZb3VyRmF2b3JpdGVzIiwiYXJ0aXN0SW5wdXQiLCJzZXRBcnRpc3RJbnB1dCIsImFsYnVtSW5wdXQiLCJzZXRBbGJ1bUlucHV0IiwidHJhY2tJbnB1dCIsInNldFRyYWNrSW5wdXQiLCJmYXZBcnRpc3RzIiwic2V0RmF2QXJ0aXN0cyIsImZhdkFsYnVtcyIsInNldEZhdkFsYnVtcyIsImZhdlRyYWNrcyIsInNldEZhdlRyYWNrcyIsImFkZEFydGlzdCIsImUiLCJwcmV2ZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFkZEFsYnVtIiwiYWRkVHJhY2siLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=