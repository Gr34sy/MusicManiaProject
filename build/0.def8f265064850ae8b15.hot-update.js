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

/***/ }),

/***/ 51:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\page\\js\\Card.js: Unexpected token (51:46)\n\n\u001b[0m \u001b[90m 49 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card__genres\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 50 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 51 |\u001b[39m                 {artistData\u001b[33m.\u001b[39mtags\u001b[33m.\u001b[39mmap((tag) \u001b[33m=>\u001b[39m()\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 52 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"genre-box\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 53 |\u001b[39m                  \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 54 |\u001b[39m                 )}\u001b[0m\n    at instantiate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:367:12)\n    at JSXParserMixin.raise (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3706:19)\n    at JSXParserMixin.unexpected (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3744:16)\n    at JSXParserMixin.parseParenAndDistinguishExpression (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:13652:12)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:13203:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12875:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12824:23)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1fe85f8304c7b905c647")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RDb21wYXJpc29uKCl7XHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtjb21wYXJpc29uRmlsdGVyLCBzZXRDb21wYXJpc29uRmlsdGVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkRhdGEsIHNldENvbXBhcmlzb25EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjb21wYXJpc29uRmlsdGVyKXtcclxuICAgICAgICAgICAgLy9zZXR0aW5nIGFydGlzdGRldGFpbHMgc3RhdGVcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0c2ltaWxhciZhcnRpc3Q9JHtjb21wYXJpc29uRmlsdGVyfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldENvbXBhcmlzb25EYXRhKGRhdGEuc2ltaWxhcmFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2NvbXBhcmlzb25GaWx0ZXJdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGUpe1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0Q29tcGFyaXNvbkZpbHRlcihpbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWNvbXBhcmlzb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJpc29uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGFydGlzdHMgc2ltaWxhciB0byB5b3VyIDxzcGFuPmZhdm9yaXRlITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX2lucHV0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRWYWx1ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFpbi1wYWdlX19idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wYXJpc29uRmlsdGVyICYmIDxDYXJkIGFydGlzdD17Y29tcGFyaXNvbkZpbHRlcn0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFyaXNvbkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChhcnRpc3QsaWQpPT5pZDw3KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFydGlzdCwgaWQpPT4gPENhcmQgYXJ0aXN0PXthcnRpc3QubmFtZX0ga2V5PXtpZH0vPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWZlODVmODMwNGM3YjkwNWM2NDdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RDb21wYXJpc29uIiwicm9vdEFQSSIsImtleUFQSSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiY29tcGFyaXNvbkZpbHRlciIsInNldENvbXBhcmlzb25GaWx0ZXIiLCJjb21wYXJpc29uRGF0YSIsInNldENvbXBhcmlzb25EYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJzaW1pbGFyYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJpZCIsIm1hcCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9