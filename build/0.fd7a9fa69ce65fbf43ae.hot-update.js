"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistComparison": () => (/* binding */ ArtistComparison)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ArtistComparison() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    comparisonFilterValue = _useState4[0],
    setComparisonFilterValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    comparisonFilter = _useState6[0],
    setComparisonFilter = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [comparisonFilterValue]);
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-comparison"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "comparison-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "comparison__title"
  }, "Search artists similar to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "favorite!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "comparison__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "comparison__input",
    onChange: handleInputChange,
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "main-page__button"
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("456e4df7cd2b20a3ced3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZDdhOWZhNjljZTY1ZmJmNDNhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDRztBQUNjO0FBRXJDLFNBQVNJLGdCQUFnQixHQUFFO0VBRTlCLGdCQUFvQ0QsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUF6Q0UsVUFBVTtJQUFFQyxhQUFhO0VBRWhDLGlCQUEwREgsK0NBQVEsRUFBRTtJQUFBO0lBQTdESSxxQkFBcUI7SUFBRUMsd0JBQXdCO0VBQ3RELGlCQUFnREwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFyRE0sZ0JBQWdCO0lBQUVDLG1CQUFtQjtFQUU1Q1IsZ0RBQVMsQ0FBQyxZQUFJLENBRWQsQ0FBQyxFQUFDLENBQUNLLHFCQUFxQixDQUFDLENBQUM7RUFFMUIsU0FBU0ksaUJBQWlCLENBQUNDLENBQUMsRUFBQztJQUN6Qk4sYUFBYSxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2pDO0VBRUEsb0JBQ0k7SUFBUyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQWdCLGdCQUMzQjtJQUFJLFNBQVMsRUFBQztFQUFtQixtREFDRSxxRkFBc0IsQ0FDcEQsZUFFTDtJQUFNLFNBQVMsRUFBQztFQUFrQixnQkFDOUI7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFNBQVMsRUFBQyxtQkFBbUI7SUFBQyxRQUFRLEVBQUVILGlCQUFrQjtJQUFDLEtBQUssRUFBRU47RUFBVyxFQUFFLGVBQ2xHO0lBQVEsU0FBUyxFQUFDO0VBQW1CLFlBQWdCLENBQ2xELGVBQ1A7SUFBSyxTQUFTLEVBQUM7RUFBVSxnQkFDckIsMkRBQUMsdUNBQUksT0FBRyxlQUNSLDJEQUFDLHVDQUFJLE9BQUUsZUFDUCwyREFBQyx1Q0FBSSxPQUFFLGVBQ1AsMkRBQUMsdUNBQUksT0FBRSxDQUNMLENBQ0osQ0FDQTtBQUVsQjs7Ozs7Ozs7VUN2Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdENvbXBhcmlzb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0Q29tcGFyaXNvbigpe1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkZpbHRlclZhbHVlLCBzZXRDb21wYXJpc29uRmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb21wYXJpc29uRmlsdGVyLCBzZXRDb21wYXJpc29uRmlsdGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBcclxuICAgIH0sW2NvbXBhcmlzb25GaWx0ZXJWYWx1ZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1jb21wYXJpc29uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyaXNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb21wYXJpc29uX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaCBhcnRpc3RzIHNpbWlsYXIgdG8geW91ciA8c3Bhbj5mYXZvcml0ZSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb21wYXJpc29uX19pbnB1dFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0VmFsdWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haW4tcGFnZV9fYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NTZlNGRmN2NkMmIyMGEzY2VkM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdENvbXBhcmlzb24iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNvbXBhcmlzb25GaWx0ZXJWYWx1ZSIsInNldENvbXBhcmlzb25GaWx0ZXJWYWx1ZSIsImNvbXBhcmlzb25GaWx0ZXIiLCJzZXRDb21wYXJpc29uRmlsdGVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9