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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click artist to see details"), browserDetails)));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65da7ded5366d5274faa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZjY5NzNlOTViYTU1YTg4Y2IwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUU1QyxTQUFTRyxhQUFhLEdBQUU7RUFDM0IsZ0JBQXNDRCwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztJQUFBO0lBQWhERSxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsaUJBQXlDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTlDSSxhQUFhO0lBQUNDLGdCQUFnQjtFQUNyQyxpQkFBNENMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBakRNLGNBQWM7SUFBRUMsaUJBQWlCO0VBRXhDLElBQU1DLE9BQU8sR0FBRyxrQ0FBa0M7RUFDbEQsSUFBTUMsTUFBTSxHQUFHLGtDQUFrQztFQUdqRFYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pXLEtBQUssV0FBSUYsT0FBTyw0Q0FBa0NOLFdBQVcsc0JBQVlPLE1BQU0sa0JBQWUsQ0FDN0ZFLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7TUFDZCxJQUFHQSxRQUFRLENBQUNDLEVBQUUsRUFBQztRQUNYLE9BQU9ELFFBQVE7TUFDbkI7TUFDQSxNQUFNRSxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNqQ0wsSUFBSSxDQUFHLFVBQUFNLElBQUk7TUFBQSxPQUFJWixnQkFBZ0IsQ0FBQ1ksSUFBSSxDQUFDQyxVQUFVLENBQUNDLE1BQU0sQ0FBQztJQUFBLEVBQUMsU0FDbkQsQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUFBLEVBQUM7RUFDckMsQ0FBQyxFQUFFLENBQUNsQixXQUFXLENBQUMsQ0FBQztFQUVqQixTQUFTcUIsa0JBQWtCLENBQUNDLENBQUMsRUFBQztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEJ0QixjQUFjLENBQUNxQixDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2xDO0VBRUEsb0JBQ0k7SUFBUyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQy9CO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCO0lBQUksU0FBUyxFQUFDO0VBQWdCLCtCQUNmLHlGQUEwQix1QkFDcEMsZUFFTDtJQUFRLFNBQVMsRUFBQyxpQkFBaUI7SUFBQyxLQUFLLEVBQUV6QixXQUFZO0lBQUMsUUFBUSxFQUFFcUI7RUFBbUIsZ0JBQ2pGO0lBQVEsS0FBSyxFQUFDO0VBQU8sV0FBZSxlQUNwQztJQUFRLEtBQUssRUFBQztFQUFVLGNBQWtCLGVBQzFDO0lBQVEsS0FBSyxFQUFDO0VBQU0sVUFBYyxDQUM3QixlQUNUO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QjtJQUFJLFNBQVMsRUFBQztFQUFlLEdBQ3hCbkIsYUFBYSxDQUFDd0IsR0FBRyxDQUNkLFVBQUNULE1BQU0sRUFBRVUsRUFBRTtJQUFBLG9CQUNYO01BQUksR0FBRyxFQUFFQTtJQUFHLEdBQ1BWLE1BQU0sQ0FBQ1csSUFBSSxlQUNaO01BQUcsSUFBSSxFQUFFWCxNQUFNLENBQUNZLEdBQUk7TUFBQyxTQUFTLEVBQUMsK0NBQStDO01BQUMsTUFBTSxFQUFDO0lBQVEsdUNBRTFGLGVBQ0o7TUFBRyxJQUFJLEVBQUVaLE1BQU0sQ0FBQ1ksR0FBSTtNQUFDLFNBQVMsRUFBQywrQ0FBK0M7TUFBQyxNQUFNLEVBQUM7SUFBUSxvQkFFMUYsQ0FDSDtFQUFBLENBQUMsQ0FDVCxDQUNBLENBQ0gsZUFHTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QixvR0FBa0MsRUFDaEN6QixjQUFjLENBQ2QsQ0FFSixDQUNBO0FBRWxCOzs7Ozs7OztVQ25FQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0QnJvd3Nlcigpe1xyXG4gICAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Jyb3dzZXJEZXRhaWxzLCBzZXRCcm93c2VyRGV0YWlsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD10YWcuZ2V0dG9wYXJ0aXN0cyZ0YWc9JHtmaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QnJvd3NlckZpbHRlcihkYXRhLnRvcGFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgIH0sIFtmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlckNoYW5nZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmlsdGVyVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fZmlsdGVyXCIgdmFsdWU9e2ZpbHRlclZhbHVlfSBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0YWxcIj5NZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudSBtZXRhbFwiPk51IE1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJvY2tcIj5Sb2NrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicm93c2VyX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHticm93c2VyRmlsdGVyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcnRpc3QsIGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3QubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tc2NyZWVuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIG91dCB0aGlzIGFydGlzdCBvbiBsYXN0LmZtIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DbGljayBhcnRpc3QgdG8gc2VlIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBicm93c2VyRGV0YWlsc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjVkYTdkZWQ1MzY2ZDUyNzRmYWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdEJyb3dzZXIiLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlclZhbHVlIiwiYnJvd3NlckZpbHRlciIsInNldEJyb3dzZXJGaWx0ZXIiLCJicm93c2VyRGV0YWlscyIsInNldEJyb3dzZXJEZXRhaWxzIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaWQiLCJuYW1lIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==