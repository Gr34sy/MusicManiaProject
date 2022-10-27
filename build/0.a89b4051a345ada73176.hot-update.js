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
    console.log(inputValue);
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
/******/ 	__webpack_require__.h = () => ("89d3442c639401157635")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3QvLi9wYWdlL2pzL0FydGlzdENvbXBhcmlzb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0Q29tcGFyaXNvbigpe1xyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkZpbHRlciwgc2V0Q29tcGFyaXNvbkZpbHRlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvbXBhcmlzb25EYXRhLCBzZXRDb21wYXJpc29uRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY29tcGFyaXNvbkZpbHRlcil7XHJcbiAgICAgICAgICAgIC8vc2V0dGluZyBhcnRpc3RkZXRhaWxzIHN0YXRlXHJcbiAgICAgICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldHNpbWlsYXImYXJ0aXN0PSR7Y29tcGFyaXNvbkZpbHRlcn0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRDb21wYXJpc29uRGF0YShkYXRhLnNpbWlsYXJhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtjb21wYXJpc29uRmlsdGVyXSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKXtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xyXG4gICAgICAgIHNldENvbXBhcmlzb25GaWx0ZXIoaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1jb21wYXJpc29uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyaXNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb21wYXJpc29uX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaCBhcnRpc3RzIHNpbWlsYXIgdG8geW91ciA8c3Bhbj5mYXZvcml0ZSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb21wYXJpc29uX19pbnB1dFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0VmFsdWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haW4tcGFnZV9fYnV0dG9uXCIgb25DbGljaz17aGFuZGxlU2VhcmNofT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFyaXNvbkZpbHRlciAmJiA8Q2FyZCBhcnRpc3Q9e2NvbXBhcmlzb25GaWx0ZXJ9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbXBhcmlzb25EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoYXJ0aXN0LGlkKT0+aWQ8NylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcnRpc3QsIGlkKT0+IDxDYXJkIGFydGlzdD17YXJ0aXN0Lm5hbWV9IGtleT17aWR9Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg5ZDM0NDJjNjM5NDAxMTU3NjM1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0Q29tcGFyaXNvbiIsInJvb3RBUEkiLCJrZXlBUEkiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNvbXBhcmlzb25GaWx0ZXIiLCJzZXRDb21wYXJpc29uRmlsdGVyIiwiY29tcGFyaXNvbkRhdGEiLCJzZXRDb21wYXJpc29uRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwic2ltaWxhcmFydGlzdHMiLCJhcnRpc3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwibG9nIiwiZmlsdGVyIiwiaWQiLCJtYXAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==