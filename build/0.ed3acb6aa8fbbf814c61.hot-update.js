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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      name: 'saliva'
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    browserDetails = _useState6[0],
    setBrowserDetails = _useState6[1];
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
  function handleFilterChange(e) {
    e.preventDefault();
    setFilterValue(e.target.value);
  }
  function handleLineClick(e) {
    e.preventDefault();
    var artistName = e.target.getAttribute('data-name');
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
    className: "browser__list",
    onClick: handleLineClick
  }, browserFilter.map(function (artist, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: id,
      "data-name": artist.name
    }, artist.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
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
  }, browserDetails.length != 0 ? browserDetails.map(function (artist, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: id
    }, artist.name);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click artist to see details"))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("90a38c23fd12db85541c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLG9CQUUxRixDQUNIO0VBQUEsQ0FBQyxDQUNULENBQ0EsQ0FDSCxlQUdOO0lBQUssU0FBUyxFQUFDO0VBQWEsR0FDdEIzQixjQUFjLENBQUM0QixNQUFNLElBQUUsQ0FBQyxHQUN4QjVCLGNBQWMsQ0FBQ3lCLEdBQUcsQ0FDaEIsVUFBQ1osTUFBTSxFQUFFYSxFQUFFO0lBQUEsb0JBQ1A7TUFBRyxHQUFHLEVBQUVBO0lBQUcsR0FBRWIsTUFBTSxDQUFDZCxJQUFJLENBQUs7RUFBQSxDQUNoQyxDQUFDLGdCQUNILG9HQUFrQyxDQUVuQyxDQUVKLENBQ0E7QUFFbEI7Ozs7Ozs7O1VDN0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RCcm93c2VyKCl7XHJcbiAgICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCdtZXRhbCcpO1xyXG4gICAgY29uc3QgW2Jyb3dzZXJGaWx0ZXIsc2V0QnJvd3NlckZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYnJvd3NlckRldGFpbHMsIHNldEJyb3dzZXJEZXRhaWxzXSA9IHVzZVN0YXRlKFt7bmFtZTogJ3NhbGl2YSd9XSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD10YWcuZ2V0dG9wYXJ0aXN0cyZ0YWc9JHtmaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QnJvd3NlckZpbHRlcihkYXRhLnRvcGFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgIH0sIFtmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlckNoYW5nZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmlsdGVyVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpbmVDbGljayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYXJ0aXN0TmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWJyb3dzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyb3dzZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIGFsbCA8c3Bhbj5tdXNpYyBhcnRpc3RzPC9zcGFuPiBhcm91bmQgdGhlIGdsb2JlIVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXJfX2ZpbHRlclwiIHZhbHVlPXtmaWx0ZXJWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1ldGFsXCI+TWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnUgbWV0YWxcIj5OdSBNZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyb2NrXCI+Um9jazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fbGlzdFwiIG9uQ2xpY2s9e2hhbmRsZUxpbmVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHticm93c2VyRmlsdGVyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcnRpc3QsIGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9IGRhdGEtbmFtZT17YXJ0aXN0Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3QubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tc2NyZWVuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIG91dCB0aGlzIGFydGlzdCBvbiBsYXN0LmZtIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IGJyb3dzZXJEZXRhaWxzLmxlbmd0aCE9MCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICBicm93c2VyRGV0YWlscy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhcnRpc3QsIGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpZH0+e2FydGlzdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgIDo8cD5DbGljayBhcnRpc3QgdG8gc2VlIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MGEzOGMyM2ZkMTJkYjg1NTQxY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0QnJvd3NlciIsImZpbHRlclZhbHVlIiwic2V0RmlsdGVyVmFsdWUiLCJicm93c2VyRmlsdGVyIiwic2V0QnJvd3NlckZpbHRlciIsIm5hbWUiLCJicm93c2VyRGV0YWlscyIsInNldEJyb3dzZXJEZXRhaWxzIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTGluZUNsaWNrIiwiYXJ0aXN0TmFtZSIsImdldEF0dHJpYnV0ZSIsIm1hcCIsImlkIiwidXJsIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==