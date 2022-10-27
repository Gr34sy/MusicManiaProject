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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3668cb9231ddc55bc3b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RDb21wYXJpc29uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdENvbXBhcmlzb24oKXtcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhcmlzb25GaWx0ZXIsIHNldENvbXBhcmlzb25GaWx0ZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjb21wYXJpc29uRGF0YSwgc2V0Q29tcGFyaXNvbkRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbXBhcmlzb25GaWx0ZXIpe1xyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRzaW1pbGFyJmFydGlzdD0ke2NvbXBhcmlzb25GaWx0ZXJ9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0Q29tcGFyaXNvbkRhdGEoZGF0YS5zaW1pbGFyYXJ0aXN0cy5hcnRpc3QpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW2NvbXBhcmlzb25GaWx0ZXJdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGUpe1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0Q29tcGFyaXNvbkZpbHRlcihpbnB1dFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWNvbXBhcmlzb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJpc29uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGFydGlzdHMgc2ltaWxhciB0byB5b3VyIDxzcGFuPmZhdm9yaXRlITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX2lucHV0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRWYWx1ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFpbi1wYWdlX19idXR0b25cIiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbXBhcmlzb25EYXRhICYmIGNvbXBhcmlzb25GaWx0ZXIgJiYgPENhcmQgYXJ0aXN0PXtjb21wYXJpc29uRmlsdGVyfSBrZXk9ezB9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbXBhcmlzb25EYXRhICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzb25EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoYXJ0aXN0LGlkKT0+aWQ8NylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcnRpc3QsIGlkKT0+IDxDYXJkIGFydGlzdD17YXJ0aXN0Lm5hbWV9IGtleT17aWQrMX0vPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTM2NjhjYjkyMzFkZGM1NWJjM2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RDb21wYXJpc29uIiwicm9vdEFQSSIsImtleUFQSSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiY29tcGFyaXNvbkZpbHRlciIsInNldENvbXBhcmlzb25GaWx0ZXIiLCJjb21wYXJpc29uRGF0YSIsInNldENvbXBhcmlzb25EYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJzaW1pbGFyYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCJpZCIsIm1hcCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9