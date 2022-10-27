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
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (comparisonFilterValue) {
      //setting artistdetails state
      fetch("".concat(rootAPI, "/?method=artist.getsimilar&artist=").concat(detailsFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setComparisonFilter(data.artist);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, [comparisonFilterValue]);
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
    className: "main-page__button",
    onCLick: true
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f676a3ac05f12f861379")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZjkwNzBiMjk5Y2U5OTg3ZmFlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDRztBQUNjO0FBRXJDLFNBQVNJLGdCQUFnQixHQUFFO0VBQzlCLElBQU1DLE9BQU8sR0FBRyxrQ0FBa0M7RUFDbEQsSUFBTUMsTUFBTSxHQUFHLGtDQUFrQztFQUVqRCxnQkFBb0NILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBekNJLFVBQVU7SUFBRUMsYUFBYTtFQUVoQyxpQkFBMERMLCtDQUFRLEVBQUU7SUFBQTtJQUE3RE0scUJBQXFCO0lBQUVDLHdCQUF3QjtFQUN0RCxpQkFBZ0RQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBckRRLGdCQUFnQjtJQUFFQyxtQkFBbUI7RUFFNUNWLGdEQUFTLENBQUMsWUFBSTtJQUNWLElBQUdPLHFCQUFxQixFQUFDO01BQ3JCO01BQ0FJLEtBQUssV0FBSVIsT0FBTywrQ0FBcUNTLGtCQUFrQixzQkFBWVIsTUFBTSxrQkFBZSxDQUN2R1MsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtRQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO1VBQ1gsT0FBT0QsUUFBUTtRQUNuQjtRQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7TUFDaEMsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBQyxVQUFBQyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUcsVUFBQU0sSUFBSTtRQUFBLE9BQUlULG1CQUFtQixDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQztNQUFBLEVBQUMsU0FDM0MsQ0FBQyxVQUFBQyxHQUFHO1FBQUEsT0FBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDckM7RUFDSixDQUFDLEVBQUMsQ0FBQ2QscUJBQXFCLENBQUMsQ0FBQztFQUUxQixTQUFTaUIsaUJBQWlCLENBQUNDLENBQUMsRUFBQztJQUN6Qm5CLGFBQWEsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDakM7RUFFQSxvQkFDSTtJQUFTLFNBQVMsRUFBQztFQUFtQixnQkFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCO0lBQUksU0FBUyxFQUFDO0VBQW1CLG1EQUNFLHFGQUFzQixDQUNwRCxlQUVMO0lBQU0sU0FBUyxFQUFDO0VBQWtCLGdCQUM5QjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDLG1CQUFtQjtJQUFDLFFBQVEsRUFBRUgsaUJBQWtCO0lBQUMsS0FBSyxFQUFFbkI7RUFBVyxFQUFFLGVBQ2xHO0lBQVEsU0FBUyxFQUFDLG1CQUFtQjtJQUFDLE9BQU87RUFBQSxZQUFnQixDQUMxRCxlQUNQO0lBQUssU0FBUyxFQUFDO0VBQVUsZ0JBQ3JCLDJEQUFDLHVDQUFJLE9BQUcsZUFDUiwyREFBQyx1Q0FBSSxPQUFFLGVBQ1AsMkRBQUMsdUNBQUksT0FBRSxlQUNQLDJEQUFDLHVDQUFJLE9BQUUsQ0FDTCxDQUNKLENBQ0E7QUFFbEI7Ozs7Ozs7O1VDckRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RDb21wYXJpc29uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdENvbXBhcmlzb24oKXtcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhcmlzb25GaWx0ZXJWYWx1ZSwgc2V0Q29tcGFyaXNvbkZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkZpbHRlciwgc2V0Q29tcGFyaXNvbkZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY29tcGFyaXNvbkZpbHRlclZhbHVlKXtcclxuICAgICAgICAgICAgLy9zZXR0aW5nIGFydGlzdGRldGFpbHMgc3RhdGVcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0c2ltaWxhciZhcnRpc3Q9JHtkZXRhaWxzRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0Q29tcGFyaXNvbkZpbHRlcihkYXRhLmFydGlzdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtjb21wYXJpc29uRmlsdGVyVmFsdWVdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGUpe1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtY29tcGFyaXNvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmlzb24tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggYXJ0aXN0cyBzaW1pbGFyIHRvIHlvdXIgPHNwYW4+ZmF2b3JpdGUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb21wYXJpc29uX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9faW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dFZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWluLXBhZ2VfX2J1dHRvblwiIG9uQ0xpY2s+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNjc2YTNhYzA1ZjEyZjg2MTM3OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdENvbXBhcmlzb24iLCJyb290QVBJIiwia2V5QVBJIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjb21wYXJpc29uRmlsdGVyVmFsdWUiLCJzZXRDb21wYXJpc29uRmlsdGVyVmFsdWUiLCJjb21wYXJpc29uRmlsdGVyIiwic2V0Q29tcGFyaXNvbkZpbHRlciIsImZldGNoIiwiZGV0YWlsc0ZpbHRlclZhbHVlIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9