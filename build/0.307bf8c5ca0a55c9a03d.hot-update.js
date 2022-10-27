"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistBrowser": () => (/* binding */ ArtistBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ArtistBrowser() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('metal'),
    _useState2 = _slicedToArray(_useState, 2),
    filterValue = _useState2[0],
    setFilterValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    browserFilter = _useState4[0],
    setBrowserFilter = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    filterDetails = _useState6[0],
    setFilterDetails = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    artistDetails = _useState8[0],
    setArtistDetails = _useState8[1];
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(rootAPI, "/?method=tag.gettopartists&tag=").concat(filterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setBrowserFilter(data.topartists.artist);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, [filterValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(filterDetails, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setArtistDetails(data);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, [filterDetails]);
  function handleFilterChange(e) {
    e.preventDefault();
    setFilterValue(e.target.value);
  }
  function handleLineClick(e) {
    e.preventDefault();
    console.log(e.target.getAttribute('data-name'));
    console.log(artistDetails);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "browser__title"
  }, "Browse all ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "music artists"), " around the globe!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "browser__filter",
    value: filterValue,
    onChange: handleFilterChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "metal"
  }, "Metal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "nu metal"
  }, "Nu Metal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "rock"
  }, "Rock")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "browser__list"
  }, browserFilter.map(function (artist, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      "data-name": artist.name,
      onClick: handleLineClick
    }, artist.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: artist.url,
      className: "lastFM-artist-link lastFM-artist-link--screen",
      target: "_blank"
    }, "Check out this artist on last.fm!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: artist.url,
      className: "lastFM-artist-link lastFM-artist-link--mobile",
      target: "_blank"
    }, "Artist profile"));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-box"
  })));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ebe6f10878f5b9b5241")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVCQUNwQyxlQUVMO0lBQVEsU0FBUyxFQUFDLGlCQUFpQjtJQUFDLEtBQUssRUFBRU4sV0FBWTtJQUFDLFFBQVEsRUFBRXVCO0VBQW1CLGdCQUNqRjtJQUFRLEtBQUssRUFBQztFQUFPLFdBQWUsZUFDcEM7SUFBUSxLQUFLLEVBQUM7RUFBVSxjQUFrQixlQUMxQztJQUFRLEtBQUssRUFBQztFQUFNLFVBQWMsQ0FDN0IsZUFDVDtJQUFLLFNBQVMsRUFBQztFQUFrQixnQkFDN0I7SUFBSSxTQUFTLEVBQUM7RUFBZSxHQUN4QnJCLGFBQWEsQ0FBQzZCLEdBQUcsQ0FDZCxVQUFDWixNQUFNLEVBQUVhLEVBQUU7SUFBQSxvQkFDWDtNQUFJLEdBQUcsRUFBRUE7SUFBRyxnQkFDUjtNQUFHLGFBQVdiLE1BQU0sQ0FBQ2MsSUFBSztNQUFDLE9BQU8sRUFBRUw7SUFBZ0IsR0FDL0NULE1BQU0sQ0FBQ2MsSUFBSSxDQUNaLGVBRUo7TUFBRyxJQUFJLEVBQUVkLE1BQU0sQ0FBQ2UsR0FBSTtNQUFDLFNBQVMsRUFBQywrQ0FBK0M7TUFBQyxNQUFNLEVBQUM7SUFBUSx1Q0FFMUYsZUFHSjtNQUFHLElBQUksRUFBRWYsTUFBTSxDQUFDZSxHQUFJO01BQUMsU0FBUyxFQUFDLCtDQUErQztNQUFDLE1BQU0sRUFBQztJQUFRLG9CQUUxRixDQUNIO0VBQUEsQ0FBQyxDQUNULENBQ0EsQ0FDSCxlQUdOO0lBQUssU0FBUyxFQUFDO0VBQWEsRUFRdEIsQ0FFSixDQUNBO0FBRWxCOzs7Ozs7OztVQ2xHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0QnJvd3Nlcigpe1xyXG4gICAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtmaWx0ZXJEZXRhaWxzLCBzZXRGaWx0ZXJEZXRhaWxzXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFthcnRpc3REZXRhaWxzLCBzZXRBcnRpc3REZXRhaWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPXRhZy5nZXR0b3BhcnRpc3RzJnRhZz0ke2ZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRCcm93c2VyRmlsdGVyKGRhdGEudG9wYXJ0aXN0cy5hcnRpc3QpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgfSwgW2ZpbHRlclZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD0ke2ZpbHRlckRldGFpbHN9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdERldGFpbHMoZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICB9LCBbZmlsdGVyRGV0YWlsc10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlckNoYW5nZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmlsdGVyVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpbmVDbGljayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aXN0RGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1icm93c2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicm93c2VyX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgPHNwYW4+bXVzaWMgYXJ0aXN0czwvc3Bhbj4gYXJvdW5kIHRoZSBnbG9iZSFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyX19maWx0ZXJcIiB2YWx1ZT17ZmlsdGVyVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPk1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51IG1ldGFsXCI+TnUgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9ja1wiPlJvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXJfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jyb3dzZXJGaWx0ZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uYW1lPXthcnRpc3QubmFtZX0gb25DbGljaz17aGFuZGxlTGluZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLXNjcmVlblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBvdXQgdGhpcyBhcnRpc3Qgb24gbGFzdC5mbSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgbGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogeyBicm93c2VyRGV0YWlscy5sZW5ndGghPTAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJvd3NlckRldGFpbHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aXN0LCBpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR9PnthcnRpc3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6PHA+Q2xpY2sgYXJ0aXN0IHRvIHNlZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlYmU2ZjEwODc4ZjViOWI1MjQxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RCcm93c2VyIiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsImJyb3dzZXJGaWx0ZXIiLCJzZXRCcm93c2VyRmlsdGVyIiwiZmlsdGVyRGV0YWlscyIsInNldEZpbHRlckRldGFpbHMiLCJhcnRpc3REZXRhaWxzIiwic2V0QXJ0aXN0RGV0YWlscyIsInJvb3RBUEkiLCJrZXlBUEkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInRvcGFydGlzdHMiLCJhcnRpc3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUxpbmVDbGljayIsImxvZyIsImdldEF0dHJpYnV0ZSIsIm1hcCIsImlkIiwibmFtZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=