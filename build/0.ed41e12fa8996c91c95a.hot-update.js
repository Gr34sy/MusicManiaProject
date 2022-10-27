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
  var _useState = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState, 2),
    favArtists = _useState[0],
    setFavArtists = _useState[1];
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
/******/ 	__webpack_require__.h = () => ("d6ea8b8b03489b28c8fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZDQxZTEyZmE4OTk2YzkxYzk1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBRTFCLFNBQVNFLGFBQWEsR0FBRTtFQUUzQiwrQkFBb0NELDJDQUFRO0lBQXJDRSxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsb0JBQ0k7SUFBTSxTQUFTLEVBQUM7RUFBc0IsZ0JBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQWtCLG1DQUFnQixzRkFBdUIsQ0FBSyxlQUU3RTtJQUFJLFNBQVMsRUFBQztFQUFpQixhQUFhLGVBQzVDO0lBQVMsU0FBUyxFQUFDO0VBQWlCLGdCQUNoQztJQUFNLFNBQVMsRUFBQztFQUFpQixnQkFDN0I7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFNBQVMsRUFBQywrQkFBK0I7SUFBQyxXQUFXLEVBQUM7RUFBb0MsRUFBRSxlQUMvRztJQUFRLElBQUksRUFBQyxNQUFNO0lBQUEsU0FBUyxFQUFDO0VBQWUsVUFBYyxDQUN2RCxlQUNQO0lBQUksU0FBUyxFQUFDO0VBQWEsZ0JBQ3ZCO0lBQUksU0FBUyxFQUFDO0VBQWEsZ0JBQUMsOEVBQVksb0JBQUM7SUFBUSxTQUFTLEVBQUM7RUFBOEIsWUFBZ0IsQ0FBSyxlQUM5RztJQUFJLFNBQVMsRUFBQztFQUFhLGdCQUFDLDhFQUFZLG9CQUFDO0lBQVEsU0FBUyxFQUFDO0VBQThCLFlBQWdCLENBQUssQ0FDN0csQ0FDQyxlQUVWO0lBQUksU0FBUyxFQUFDO0VBQWlCLFlBQVksZUFDM0M7SUFBUyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDO0lBQU0sU0FBUyxFQUFDO0VBQWlCLGdCQUM3QjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDLCtCQUErQjtJQUFDLFdBQVcsRUFBQztFQUFtQyxFQUFFLGVBQzlHO0lBQVEsSUFBSSxFQUFDLE1BQU07SUFBQSxTQUFTLEVBQUM7RUFBZSxVQUFjLENBQ3ZELGVBQ1A7SUFBSSxTQUFTLEVBQUM7RUFBYSxnQkFDdkI7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFBQyw4RUFBWSxDQUFLLGVBQzVDO0lBQUksU0FBUyxFQUFDO0VBQVksZ0JBQUMsOEVBQVksQ0FBSyxDQUMzQyxDQUNDLGVBRVY7SUFBSSxTQUFTLEVBQUM7RUFBaUIsWUFBWSxlQUMzQztJQUFTLFNBQVMsRUFBQztFQUFpQixnQkFDaEM7SUFBTSxTQUFTLEVBQUM7RUFBaUIsZ0JBQzdCO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsV0FBVyxFQUFDO0VBQWtDLEVBQUUsZUFDN0c7SUFBUSxJQUFJLEVBQUMsTUFBTTtJQUFBLFNBQVMsRUFBQztFQUFlLFVBQWMsQ0FDdkQsZUFDUDtJQUFJLFNBQVMsRUFBQztFQUFhLGdCQUN2QjtJQUFJLFNBQVMsRUFBQztFQUFZLGdCQUFDLDhFQUFZLENBQUssZUFDNUM7SUFBSSxTQUFTLEVBQUM7RUFBWSxnQkFBQyw4RUFBWSxDQUFLLENBQzNDLENBQ0MsQ0FDUDtBQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DMkI7QUFDRDtBQUNvQjtBQUNVO0FBQ3hCO0FBQ0Y7QUFDa0I7QUFDTTtBQUNOO0FBRWhELFNBQVNTLEdBQUcsR0FBRTtFQUNWLG9CQUNJLHVJQUNBLDJEQUFDLHlEQUFhLE9BQUUsQ0FVYjtBQUVYO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHWiw0REFBVSxDQUFDUyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDLDJEQUFDLEdBQUcsT0FBRSxDQUFDOzs7Ozs7OztVQzdCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL1lvdXJGYXZvcml0ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gWW91ckZhdm9yaXRlcygpe1xyXG5cclxuICAgIGNvbnN0IFtmYXZBcnRpc3RzLCBzZXRGYXZBcnRpc3RzXSA9IHVzZVN0YXRlXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3RpdGxlXCI+VGhlc2UgYXJlIHlvdXIgPHNwYW4+ZmF2b3JpdGVzITwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPkFydGlzdHM8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFydGlzdCB1IHdhbnQgdG8gYWRkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInRleHRcImNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aXN0LWxpbmVcIj48cD5rdXBhczwvcD4gPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aXN0LWxpbmVcIj48cD5rdXBhczwvcD4gPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BbGJ1bXM8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFsYnVtIHUgd2FudCB0byBhZGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGJ1bS1saW5lXCI+PHA+a3VwYXM8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+VHJhY2tzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhIHRyYWNrIHUgd2FudCB0byBhZGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwidGV4dFwiY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmFjay1saW5lXCI+PHA+a3VwYXM8L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHJhY2stbGluZVwiPjxwPmt1cGFzPC9wPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjsgXHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7TmF2YmFyfSBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuL0hlcm9cIjtcclxuaW1wb3J0IHsgQXJ0aXN0QnJvd3NlciB9IGZyb20gXCIuL0FydGlzdEJyb3dzZXJcIjtcclxuaW1wb3J0IHsgQXJ0aXN0Q29tcGFyaXNvbiB9IGZyb20gXCIuL0FydGlzdENvbXBhcmlzb25cIjtcclxuaW1wb3J0IHsgWW91ckZhdm9yaXRlcyB9IGZyb20gXCIuL1lvdXJGYXZvcml0ZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFlvdXJGYXZvcml0ZXMvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiA8TmF2YmFyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPEhlcm8vPlxyXG5cclxuICAgICAgICA8QXJ0aXN0QnJvd3Nlci8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RDb21wYXJpc29uLz4gKi99XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcC8+KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ2ZWE4YjhiMDM0ODliMjhjOGZhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJZb3VyRmF2b3JpdGVzIiwiZmF2QXJ0aXN0cyIsInNldEZhdkFydGlzdHMiLCJjcmVhdGVSb290IiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZiYXIiLCJIZXJvIiwiQXJ0aXN0QnJvd3NlciIsIkFydGlzdENvbXBhcmlzb24iLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=