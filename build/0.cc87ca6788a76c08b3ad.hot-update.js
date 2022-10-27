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
      return function () {
        setComparisonData();
      };
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
  }, comparisonData && comparisonFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {
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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\page\\js\\Card.js: JSX attributes must only be assigned a non-empty expression. (72:25)\n\n\u001b[0m \u001b[90m 70 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 71 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mfigure\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 72 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{} alt\u001b[33m=\u001b[39m\u001b[32m\"picture of an artist\"\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card__img\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 73 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mfigcaption\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 74 |\u001b[39m                     \u001b[33m<\u001b[39m\u001b[33mh3\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card__title\"\u001b[39m\u001b[33m>\u001b[39m{artistData\u001b[33m.\u001b[39mname}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh3\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 75 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mfigcaption\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:367:12)\n    at JSXParserMixin.raise (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3706:19)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:7995:16)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8056:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8075:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8068:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8099:33)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8115:32)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8115:32)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81cd7e876599d179778b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsRUFBQyxDQUUxRCxDQUNKLENBQ0E7QUFFbEI7Ozs7Ozs7Ozs7Ozs7OztVQy9EQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0Q29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RDb21wYXJpc29uKCl7XHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtjb21wYXJpc29uRmlsdGVyLCBzZXRDb21wYXJpc29uRmlsdGVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkRhdGEsIHNldENvbXBhcmlzb25EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihjb21wYXJpc29uRmlsdGVyKXtcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0c2ltaWxhciZhcnRpc3Q9JHtjb21wYXJpc29uRmlsdGVyfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldENvbXBhcmlzb25EYXRhKGRhdGEuc2ltaWxhcmFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbXBhcmlzb25EYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtjb21wYXJpc29uRmlsdGVyXSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKXtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldENvbXBhcmlzb25GaWx0ZXIoaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1jb21wYXJpc29uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyaXNvbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb21wYXJpc29uX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaCBhcnRpc3RzIHNpbWlsYXIgdG8geW91ciA8c3Bhbj5mYXZvcml0ZSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX2Zvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjb21wYXJpc29uX19pbnB1dFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2lucHV0VmFsdWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1haW4tcGFnZV9fYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wYXJpc29uRGF0YSAmJiBjb21wYXJpc29uRmlsdGVyICYmIDxDYXJkIGFydGlzdD17Y29tcGFyaXNvbkZpbHRlcn0ga2V5PXswfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21wYXJpc29uRGF0YSAmJiBcclxuICAgICAgICAgICAgICAgICAgICBjb21wYXJpc29uRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGFydGlzdCxpZCk9PmlkPDcpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJ0aXN0LCBpZCk9PiA8Q2FyZCBhcnRpc3Q9e2FydGlzdC5uYW1lfSBrZXk9e2lkKzF9Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgxY2Q3ZTg3NjU5OWQxNzk3NzhiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0Q29tcGFyaXNvbiIsInJvb3RBUEkiLCJrZXlBUEkiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNvbXBhcmlzb25GaWx0ZXIiLCJzZXRDb21wYXJpc29uRmlsdGVyIiwiY29tcGFyaXNvbkRhdGEiLCJzZXRDb21wYXJpc29uRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwic2ltaWxhcmFydGlzdHMiLCJhcnRpc3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwiaWQiLCJtYXAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==