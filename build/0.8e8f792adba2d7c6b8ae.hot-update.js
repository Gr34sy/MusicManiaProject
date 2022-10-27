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
    comparisonFilter = _useState4[0],
    setComparisonFilter = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    comparisonData = _useState6[0],
    setComparisonData = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (comparisonFilter) {
      //setting artistdetails state
      fetch("".concat(rootAPI, "/?method=artist.getsimilar&artist=").concat(comparisonFilter, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setComparisonData(data.similarartists.artist);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, [comparisonFilter]);
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    console.log();
    setComparisonFilter(inputValue);
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
    onClick: handleSearch
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-box"
  }, comparisonFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
    artist: comparisonFilter
  }), comparisonData.filter(function (artist, id) {
    return id < 7;
  }).map(function (artist, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
      artist: artist.name,
      key: id
    });
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a89b4051a345ada73176")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0FydGlzdENvbXBhcmlzb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0Q29tcGFyaXNvbigpe1xyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkZpbHRlciwgc2V0Q29tcGFyaXNvbkZpbHRlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvbXBhcmlzb25EYXRhLCBzZXRDb21wYXJpc29uRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY29tcGFyaXNvbkZpbHRlcil7XHJcbiAgICAgICAgICAgIC8vc2V0dGluZyBhcnRpc3RkZXRhaWxzIHN0YXRlXHJcbiAgICAgICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldHNpbWlsYXImYXJ0aXN0PSR7Y29tcGFyaXNvbkZpbHRlcn0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRDb21wYXJpc29uRGF0YShkYXRhLnNpbWlsYXJhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtjb21wYXJpc29uRmlsdGVyXSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKXtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICBzZXRDb21wYXJpc29uRmlsdGVyKGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtY29tcGFyaXNvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmlzb24tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggYXJ0aXN0cyBzaW1pbGFyIHRvIHlvdXIgPHNwYW4+ZmF2b3JpdGUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb21wYXJpc29uX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9faW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dFZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWluLXBhZ2VfX2J1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbXBhcmlzb25GaWx0ZXIgJiYgPENhcmQgYXJ0aXN0PXtjb21wYXJpc29uRmlsdGVyfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wYXJpc29uRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGFydGlzdCxpZCk9PmlkPDcpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJ0aXN0LCBpZCk9PiA8Q2FyZCBhcnRpc3Q9e2FydGlzdC5uYW1lfSBrZXk9e2lkfS8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhODliNDA1MWEzNDVhZGE3MzE3NlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdENvbXBhcmlzb24iLCJyb290QVBJIiwia2V5QVBJIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjb21wYXJpc29uRmlsdGVyIiwic2V0Q29tcGFyaXNvbkZpbHRlciIsImNvbXBhcmlzb25EYXRhIiwic2V0Q29tcGFyaXNvbkRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInNpbWlsYXJhcnRpc3RzIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsImxvZyIsImZpbHRlciIsImlkIiwibWFwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=