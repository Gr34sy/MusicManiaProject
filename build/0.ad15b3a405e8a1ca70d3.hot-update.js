self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistComparison": () => (/* binding */ ArtistComparison)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card__WEBPACK_IMPORTED_MODULE_1__);
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
    setComparisonFilter(inputValue);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-comparison"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "comparison-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "comparison__title"
  }, "Search artists similar to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "favorite!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "comparison__form",
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "comparison__input",
    onChange: handleInputChange,
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "main-page__button",
    type: "submit"
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-box"
  }, comparisonFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
    artist: comparisonFilter,
    key: 0
  }), comparisonData && comparisonData.filter(function (artist, id) {
    return id < 7;
  }).map(function (artist, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
      artist: artist.name,
      key: id + 1
    });
  }))));
}

/***/ }),

/***/ 51:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\page\\js\\Card.js: Unexpected token (48:12)\n\n\u001b[0m \u001b[90m 46 |\u001b[39m         \u001b[33m.\u001b[39m\u001b[36mcatch\u001b[39m(err \u001b[33m=>\u001b[39m console\u001b[33m.\u001b[39merror(err))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 48 |\u001b[39m         ()\u001b[33m=>\u001b[39m\u001b[36mreturn\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 |\u001b[39m         \u001b[0m\n\u001b[0m \u001b[90m 50 |\u001b[39m     }\u001b[33m,\u001b[39m[])\u001b[0m\n\u001b[0m \u001b[90m 51 |\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:367:12)\n    at JSXParserMixin.raise (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3706:19)\n    at JSXParserMixin.unexpected (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3744:16)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:13350:22)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12875:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12615:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("08ca2844f1d4b72670b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RDb21wYXJpc29uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdENvbXBhcmlzb24oKXtcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhcmlzb25GaWx0ZXIsIHNldENvbXBhcmlzb25GaWx0ZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb21wYXJpc29uRGF0YSwgc2V0Q29tcGFyaXNvbkRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbXBhcmlzb25GaWx0ZXIpe1xyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRzaW1pbGFyJmFydGlzdD0ke2NvbXBhcmlzb25GaWx0ZXJ9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0Q29tcGFyaXNvbkRhdGEoZGF0YS5zaW1pbGFyYXJ0aXN0cy5hcnRpc3QpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29tcGFyaXNvbkZpbHRlcl0pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRDb21wYXJpc29uRmlsdGVyKGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtY29tcGFyaXNvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmlzb24tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggYXJ0aXN0cyBzaW1pbGFyIHRvIHlvdXIgPHNwYW4+ZmF2b3JpdGUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb21wYXJpc29uX19mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9faW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dFZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWluLXBhZ2VfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFyaXNvbkZpbHRlciAmJiA8Q2FyZCBhcnRpc3Q9e2NvbXBhcmlzb25GaWx0ZXJ9IGtleT17MH0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFyaXNvbkRhdGEgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChhcnRpc3QsaWQpPT5pZDw3KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFydGlzdCwgaWQpPT4gPENhcmQgYXJ0aXN0PXthcnRpc3QubmFtZX0ga2V5PXtpZCsxfS8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwOGNhMjg0NGYxZDRiNzI2NzBiN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdENvbXBhcmlzb24iLCJyb290QVBJIiwia2V5QVBJIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjb21wYXJpc29uRmlsdGVyIiwic2V0Q29tcGFyaXNvbkZpbHRlciIsImNvbXBhcmlzb25EYXRhIiwic2V0Q29tcGFyaXNvbkRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInNpbWlsYXJhcnRpc3RzIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlciIsImlkIiwibWFwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=