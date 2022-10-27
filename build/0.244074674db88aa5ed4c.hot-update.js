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
  function handleLineClick(e) {}
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
      key: id
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

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _ArtistBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _ArtistComparison__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);








function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_4__.Hero, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ArtistBrowser__WEBPACK_IMPORTED_MODULE_5__.ArtistBrowser, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ArtistComparison__WEBPACK_IMPORTED_MODULE_6__.ArtistComparison, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1002666869ba8ee9e100")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUNoQixVQUFDVixNQUFNLEVBQUVXLEVBQUU7SUFBQSxvQkFDUDtNQUFHLEdBQUcsRUFBRUE7SUFBRyxHQUFFWCxNQUFNLENBQUNkLElBQUksQ0FBSztFQUFBLENBQ2hDLENBQUMsZ0JBQ0gsb0dBQWtDLENBRW5DLENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7Ozs7Ozs7OztBQzVFMkI7QUFDRDtBQUNvQjtBQUNVO0FBQ3hCO0FBQ0Y7QUFDa0I7QUFDTTtBQUV0RCxTQUFTbUMsR0FBRyxHQUFFO0VBQ1Ysb0JBQ0ksdUlBRUEsMkRBQUMsMkNBQU0sT0FBRSxlQUVULDJEQUFDLHVDQUFJLE9BQUUsZUFFUCwyREFBQyx5REFBYSxPQUFFLGVBRWhCLDJEQUFDLCtEQUFnQixPQUFFLENBRWhCO0FBRVg7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdYLDREQUFVLENBQUNRLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMsMkRBQUMsR0FBRyxPQUFFLENBQUM7Ozs7Ozs7O1VDM0JuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0QnJvd3Nlcigpe1xyXG4gICAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Jyb3dzZXJEZXRhaWxzLCBzZXRCcm93c2VyRGV0YWlsc10gPSB1c2VTdGF0ZShbe25hbWU6ICdzYWxpdmEnfV0pO1xyXG4gICAgXHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9dGFnLmdldHRvcGFydGlzdHMmdGFnPSR7ZmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEJyb3dzZXJGaWx0ZXIoZGF0YS50b3BhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICB9LCBbZmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJDaGFuZ2UoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZpbHRlclZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMaW5lQ2xpY2soZSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1icm93c2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicm93c2VyX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgPHNwYW4+bXVzaWMgYXJ0aXN0czwvc3Bhbj4gYXJvdW5kIHRoZSBnbG9iZSFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyX19maWx0ZXJcIiB2YWx1ZT17ZmlsdGVyVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPk1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51IG1ldGFsXCI+TnUgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9ja1wiPlJvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXJfX2xpc3RcIiBvbkNsaWNrPXtoYW5kbGVMaW5lQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnJvd3NlckZpbHRlci5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aXN0LCBpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aXN0Lm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLXNjcmVlblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBvdXQgdGhpcyBhcnRpc3Qgb24gbGFzdC5mbSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tbW9iaWxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFydGlzdCBwcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBicm93c2VyRGV0YWlscy5sZW5ndGghPTAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJvd3NlckRldGFpbHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aXN0LCBpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR9PnthcnRpc3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6PHA+Q2xpY2sgYXJ0aXN0IHRvIHNlZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjsgXHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7TmF2YmFyfSBmcm9tIFwiLi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuL0hlcm9cIjtcclxuaW1wb3J0IHsgQXJ0aXN0QnJvd3NlciB9IGZyb20gXCIuL0FydGlzdEJyb3dzZXJcIjtcclxuaW1wb3J0IHsgQXJ0aXN0Q29tcGFyaXNvbiB9IGZyb20gXCIuL0FydGlzdENvbXBhcmlzb25cIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SGVyby8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RCcm93c2VyLz5cclxuXHJcbiAgICAgICAgPEFydGlzdENvbXBhcmlzb24vPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAvPikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMDAyNjY2ODY5YmE4ZWU5ZTEwMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0QnJvd3NlciIsImZpbHRlclZhbHVlIiwic2V0RmlsdGVyVmFsdWUiLCJicm93c2VyRmlsdGVyIiwic2V0QnJvd3NlckZpbHRlciIsIm5hbWUiLCJicm93c2VyRGV0YWlscyIsInNldEJyb3dzZXJEZXRhaWxzIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTGluZUNsaWNrIiwibWFwIiwiaWQiLCJ1cmwiLCJsZW5ndGgiLCJjcmVhdGVSb290IiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZiYXIiLCJIZXJvIiwiQXJ0aXN0Q29tcGFyaXNvbiIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==