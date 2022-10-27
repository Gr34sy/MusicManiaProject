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
      return function () {
        se;
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e9acd04fc5ac83e79488")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YjAxMzZkMzJiMzExODRiOTY2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDRztBQUNjO0FBRXJDLFNBQVNJLGdCQUFnQixHQUFFO0VBQzlCLElBQU1DLE9BQU8sR0FBRyxrQ0FBa0M7RUFDbEQsSUFBTUMsTUFBTSxHQUFHLGtDQUFrQztFQUVqRCxnQkFBb0NILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBekNJLFVBQVU7SUFBRUMsYUFBYTtFQUVoQyxpQkFBZ0RMLCtDQUFRLEVBQUU7SUFBQTtJQUFuRE0sZ0JBQWdCO0lBQUVDLG1CQUFtQjtFQUM1QyxpQkFBNENQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakRRLGNBQWM7SUFBRUMsaUJBQWlCO0VBRXhDVixnREFBUyxDQUFDLFlBQUk7SUFDVixJQUFHTyxnQkFBZ0IsRUFBQztNQUNoQkksS0FBSyxXQUFJUixPQUFPLCtDQUFxQ0ksZ0JBQWdCLHNCQUFZSCxNQUFNLGtCQUFlLENBQ3JHUSxJQUFJLENBQUMsVUFBQUMsUUFBUSxFQUFJO1FBQ2QsSUFBR0EsUUFBUSxDQUFDQyxFQUFFLEVBQUM7VUFDWCxPQUFPRCxRQUFRO1FBQ25CO1FBQ0EsTUFBTUUsS0FBSyxDQUFDRixRQUFRLENBQUNHLE1BQU0sQ0FBQztNQUNoQyxDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFDLFVBQUFDLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNJLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDakNMLElBQUksQ0FBRyxVQUFBTSxJQUFJO1FBQUEsT0FBSVIsaUJBQWlCLENBQUNRLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUM7TUFBQSxFQUFDLFNBQ3hELENBQUMsVUFBQUMsR0FBRztRQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUM7TUFBQSxFQUFDO01BRWpDLE9BQU8sWUFBTTtRQUNURyxFQUFFO01BQ04sQ0FBQztJQUNMO0VBQ0osQ0FBQyxFQUFDLENBQUNqQixnQkFBZ0IsQ0FBQyxDQUFDO0VBRXJCLFNBQVNrQixpQkFBaUIsQ0FBQ0MsQ0FBQyxFQUFDO0lBQ3pCcEIsYUFBYSxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNqQztFQUVBLFNBQVNDLFlBQVksQ0FBQ0gsQ0FBQyxFQUFDO0lBQ3BCQSxDQUFDLENBQUNJLGNBQWMsRUFBRTtJQUNsQnRCLG1CQUFtQixDQUFDSCxVQUFVLENBQUM7RUFDbkM7RUFFQSxvQkFDSTtJQUFTLFNBQVMsRUFBQztFQUFtQixnQkFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCO0lBQUksU0FBUyxFQUFDO0VBQW1CLG1EQUNFLHFGQUFzQixDQUNwRCxlQUVMO0lBQU0sU0FBUyxFQUFDLGtCQUFrQjtJQUFDLFFBQVEsRUFBRXdCO0VBQWEsZ0JBQ3REO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUMsbUJBQW1CO0lBQUMsUUFBUSxFQUFFSixpQkFBa0I7SUFBQyxLQUFLLEVBQUVwQjtFQUFXLEVBQUUsZUFDbEc7SUFBUSxTQUFTLEVBQUMsbUJBQW1CO0lBQUMsSUFBSSxFQUFDO0VBQVEsWUFBZ0IsQ0FDaEUsZUFDUDtJQUFLLFNBQVMsRUFBQztFQUFVLEdBQ3BCRSxnQkFBZ0IsaUJBQUksMkRBQUMsdUNBQUk7SUFBQyxNQUFNLEVBQUVBLGdCQUFpQjtJQUFDLEdBQUcsRUFBRTtFQUFFLEVBQUUsRUFDN0RFLGNBQWMsSUFDZkEsY0FBYyxDQUNic0IsTUFBTSxDQUFDLFVBQUNYLE1BQU0sRUFBQ1ksRUFBRTtJQUFBLE9BQUdBLEVBQUUsR0FBQyxDQUFDO0VBQUEsRUFBQyxDQUN6QkMsR0FBRyxDQUFDLFVBQUNiLE1BQU0sRUFBRVksRUFBRTtJQUFBLG9CQUFJLDJEQUFDLHVDQUFJO01BQUMsTUFBTSxFQUFFWixNQUFNLENBQUNjLElBQUs7TUFBQyxHQUFHLEVBQUVGLEVBQUUsR0FBQztJQUFFLEVBQUU7RUFBQSxFQUFDLENBRTFELENBQ0osQ0FDQTtBQUVsQjs7Ozs7Ozs7VUMvREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdENvbXBhcmlzb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0Q29tcGFyaXNvbigpe1xyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyaXNvbkZpbHRlciwgc2V0Q29tcGFyaXNvbkZpbHRlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvbXBhcmlzb25EYXRhLCBzZXRDb21wYXJpc29uRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoY29tcGFyaXNvbkZpbHRlcil7XHJcbiAgICAgICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldHNpbWlsYXImYXJ0aXN0PSR7Y29tcGFyaXNvbkZpbHRlcn0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRDb21wYXJpc29uRGF0YShkYXRhLnNpbWlsYXJhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29tcGFyaXNvbkZpbHRlcl0pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRDb21wYXJpc29uRmlsdGVyKGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtY29tcGFyaXNvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmlzb24tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggYXJ0aXN0cyBzaW1pbGFyIHRvIHlvdXIgPHNwYW4+ZmF2b3JpdGUhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb21wYXJpc29uX19mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9faW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtpbnB1dFZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYWluLXBhZ2VfX2J1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFyaXNvbkZpbHRlciAmJiA8Q2FyZCBhcnRpc3Q9e2NvbXBhcmlzb25GaWx0ZXJ9IGtleT17MH0vPn1cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFyaXNvbkRhdGEgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbkRhdGFcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChhcnRpc3QsaWQpPT5pZDw3KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFydGlzdCwgaWQpPT4gPENhcmQgYXJ0aXN0PXthcnRpc3QubmFtZX0ga2V5PXtpZCsxfS8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlOWFjZDA0ZmM1YWM4M2U3OTQ4OFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdENvbXBhcmlzb24iLCJyb290QVBJIiwia2V5QVBJIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjb21wYXJpc29uRmlsdGVyIiwic2V0Q29tcGFyaXNvbkZpbHRlciIsImNvbXBhcmlzb25EYXRhIiwic2V0Q29tcGFyaXNvbkRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInNpbWlsYXJhcnRpc3RzIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyIiwiaWQiLCJtYXAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==