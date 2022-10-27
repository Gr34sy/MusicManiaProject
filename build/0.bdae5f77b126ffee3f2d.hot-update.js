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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(local),
    _useState2 = _slicedToArray(_useState, 2),
    favArtists = _useState2[0],
    setFavArtists = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    favAlbums = _useState4[0],
    setFavAlbums = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    favTracks = _useState6[0],
    setFavTracks = _useState6[1];
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("efc100f2394d2e0373f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZGFlNWY3N2IxMjZmZmVlM2YyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBRTFCLFNBQVNFLGFBQWEsR0FBRTtFQUUzQixnQkFBb0NELCtDQUFRLENBQUNFLEtBQUssQ0FBQztJQUFBO0lBQTVDQyxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQWtDSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXZDSyxTQUFTO0lBQUVDLFlBQVk7RUFDOUIsaUJBQWtDTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXZDTyxTQUFTO0lBQUVDLFlBQVk7RUFFOUIsb0JBQ0k7SUFBTSxTQUFTLEVBQUM7RUFBc0IsZ0JBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQWtCLG1DQUFnQixzRkFBdUIsQ0FBSyxlQUU3RTtJQUFJLFNBQVMsRUFBQztFQUFpQixhQUFhLGVBQzVDO0lBQVMsU0FBUyxFQUFDO0VBQWlCLGdCQUNoQztJQUFNLFNBQVMsRUFBQztFQUFpQixnQkFDN0I7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFNBQVMsRUFBQywrQkFBK0I7SUFBQyxXQUFXLEVBQUM7RUFBb0MsRUFBRSxlQUMvRztJQUFRLElBQUksRUFBQyxNQUFNO0lBQUEsU0FBUyxFQUFDO0VBQWUsVUFBYyxDQUN2RCxlQUNQO0lBQUksU0FBUyxFQUFDO0VBQWEsZ0JBQ3ZCO0lBQUksU0FBUyxFQUFDO0VBQWEsZ0JBQUMsOEVBQVksb0JBQUM7SUFBUSxTQUFTLEVBQUM7RUFBOEIsWUFBZ0IsQ0FBSyxlQUM5RztJQUFJLFNBQVMsRUFBQztFQUFhLGdCQUFDLDhFQUFZLG9CQUFDO0lBQVEsU0FBUyxFQUFDO0VBQThCLFlBQWdCLENBQUssQ0FDN0csQ0FDQyxlQUVWO0lBQUksU0FBUyxFQUFDO0VBQWlCLFlBQVksZUFDM0M7SUFBUyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDO0lBQU0sU0FBUyxFQUFDO0VBQWlCLGdCQUM3QjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDLCtCQUErQjtJQUFDLFdBQVcsRUFBQztFQUFtQyxFQUFFLGVBQzlHO0lBQVEsSUFBSSxFQUFDLE1BQU07SUFBQSxTQUFTLEVBQUM7RUFBZSxVQUFjLENBQ3ZELGVBQ1A7SUFBSSxTQUFTLEVBQUM7RUFBYSxnQkFDdkI7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFBQyw4RUFBWSxDQUFLLGVBQzVDO0lBQUksU0FBUyxFQUFDO0VBQVksZ0JBQUMsOEVBQVksQ0FBSyxDQUMzQyxDQUNDLGVBRVY7SUFBSSxTQUFTLEVBQUM7RUFBaUIsWUFBWSxlQUMzQztJQUFTLFNBQVMsRUFBQztFQUFpQixnQkFDaEM7SUFBTSxTQUFTLEVBQUM7RUFBaUIsZ0JBQzdCO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsV0FBVyxFQUFDO0VBQWtDLEVBQUUsZUFDN0c7SUFBUSxJQUFJLEVBQUMsTUFBTTtJQUFBLFNBQVMsRUFBQztFQUFlLFVBQWMsQ0FDdkQsZUFDUDtJQUFJLFNBQVMsRUFBQztFQUFhLGdCQUN2QjtJQUFJLFNBQVMsRUFBQztFQUFZLGdCQUFDLDhFQUFZLENBQUssZUFDNUM7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFBQyw4RUFBWSxDQUFLLENBQzNDLENBQ0MsQ0FDUDtBQUVmOzs7Ozs7OztVQ2xEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvWW91ckZhdm9yaXRlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBZb3VyRmF2b3JpdGVzKCl7XHJcblxyXG4gICAgY29uc3QgW2ZhdkFydGlzdHMsIHNldEZhdkFydGlzdHNdID0gdXNlU3RhdGUobG9jYWwpO1xyXG4gICAgY29uc3QgW2ZhdkFsYnVtcywgc2V0RmF2QWxidW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtmYXZUcmFja3MsIHNldEZhdlRyYWNrc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190aXRsZVwiPlRoZXNlIGFyZSB5b3VyIDxzcGFuPmZhdm9yaXRlcyE8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BcnRpc3RzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhcnRpc3QgdSB3YW50IHRvIGFkZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJ0ZXh0XCJjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCI+PHA+a3VwYXM8L3A+IDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCI+PHA+a3VwYXM8L3A+IDxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QWxidW1zPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhbGJ1bSB1IHdhbnQgdG8gYWRkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsYnVtLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPlRyYWNrczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYSB0cmFjayB1IHdhbnQgdG8gYWRkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhY2stbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIj48cD5rdXBhczwvcD48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVmYzEwMGYyMzk0ZDJlMDM3M2YyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJZb3VyRmF2b3JpdGVzIiwibG9jYWwiLCJmYXZBcnRpc3RzIiwic2V0RmF2QXJ0aXN0cyIsImZhdkFsYnVtcyIsInNldEZhdkFsYnVtcyIsImZhdlRyYWNrcyIsInNldEZhdlRyYWNrcyJdLCJzb3VyY2VSb290IjoiIn0=