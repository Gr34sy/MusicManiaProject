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
    browserFilterValue = _useState2[0],
    setBrowserFilterValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    browserFilter = _useState4[0],
    setBrowserFilter = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    detailsFilterValue = _useState6[0],
    setDetailsFilterValue = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    detailsFilter = _useState8[0],
    setDetailsFilter = _useState8[1];
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(rootAPI, "/?method=tag.gettopartists&tag=").concat(browserFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
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
  }, [browserFilterValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(detailsFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setDetailsFilter(data.artist);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, [detailsFilterValue]);
  function handleFilterChange(e) {
    e.preventDefault();
    setBrowserFilterValue(e.target.value);
  }
  function handleLineClick(e) {
    e.preventDefault();
    setDetailsFilterValue(e.target.getAttribute('data-name'));
    console.log(detailsFilter);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "browser__title"
  }, "Browse all ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "music artists"), " around the globe!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "browser__filter",
    value: browserFilterValue,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return console.log(detailsFilter);
    }
  }, "display"))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15af1d69d9f5ab343120")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZjQ1OWVmYzYyMjZmYzRiYzJjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUU1QyxTQUFTRyxhQUFhLEdBQUU7RUFDM0IsZ0JBQW9ERCwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztJQUFBO0lBQTlERSxrQkFBa0I7SUFBRUMscUJBQXFCO0VBQ2hELGlCQUF5Q0gsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUE5Q0ksYUFBYTtJQUFDQyxnQkFBZ0I7RUFFckMsaUJBQW9ETCwrQ0FBUSxFQUFFO0lBQUE7SUFBdkRNLGtCQUFrQjtJQUFFQyxxQkFBcUI7RUFDaEQsaUJBQTBDUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQS9DUSxhQUFhO0lBQUVDLGdCQUFnQjtFQUV0QyxJQUFNQyxPQUFPLEdBQUcsa0NBQWtDO0VBQ2xELElBQU1DLE1BQU0sR0FBRyxrQ0FBa0M7RUFHakRaLGdEQUFTLENBQUMsWUFBTTtJQUNaYSxLQUFLLFdBQUlGLE9BQU8sNENBQWtDUixrQkFBa0Isc0JBQVlTLE1BQU0sa0JBQWUsQ0FDcEdFLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7TUFDZCxJQUFHQSxRQUFRLENBQUNDLEVBQUUsRUFBQztRQUNYLE9BQU9ELFFBQVE7TUFDbkI7TUFDQSxNQUFNRSxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNqQ0wsSUFBSSxDQUFHLFVBQUFNLElBQUk7TUFBQSxPQUFJZCxnQkFBZ0IsQ0FBQ2MsSUFBSSxDQUFDQyxVQUFVLENBQUNDLE1BQU0sQ0FBQztJQUFBLEVBQUMsU0FDbkQsQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUFBLEVBQUM7RUFDckMsQ0FBQyxFQUFFLENBQUNwQixrQkFBa0IsQ0FBQyxDQUFDO0VBRXhCSCxnREFBUyxDQUFDLFlBQU07SUFDWmEsS0FBSyxXQUFJRixPQUFPLDRDQUFrQ0osa0JBQWtCLHNCQUFZSyxNQUFNLGtCQUFlLENBQ3BHRSxJQUFJLENBQUMsVUFBQUMsUUFBUSxFQUFJO01BQ2QsSUFBR0EsUUFBUSxDQUFDQyxFQUFFLEVBQUM7UUFDWCxPQUFPRCxRQUFRO01BQ25CO01BQ0EsTUFBTUUsS0FBSyxDQUFDRixRQUFRLENBQUNHLE1BQU0sQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFDLFVBQUFDLFFBQVE7TUFBQSxPQUFJQSxRQUFRLENBQUNJLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDakNMLElBQUksQ0FBRyxVQUFBTSxJQUFJO01BQUEsT0FBSVYsZ0JBQWdCLENBQUNVLElBQUksQ0FBQ0UsTUFBTSxDQUFDO0lBQUEsRUFBQyxTQUN4QyxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUNyQyxDQUFDLEVBQUUsQ0FBQ2hCLGtCQUFrQixDQUFDLENBQUM7RUFFeEIsU0FBU21CLGtCQUFrQixDQUFDQyxDQUFDLEVBQUM7SUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCeEIscUJBQXFCLENBQUN1QixDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3pDO0VBRUEsU0FBU0MsZUFBZSxDQUFDSixDQUFDLEVBQUM7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCcEIscUJBQXFCLENBQUNtQixDQUFDLENBQUNFLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pEUixPQUFPLENBQUNTLEdBQUcsQ0FBQ3hCLGFBQWEsQ0FBQztFQUM5QjtFQUVBLG9CQUNJO0lBQVMsU0FBUyxFQUFDO0VBQWdCLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QjtJQUFJLFNBQVMsRUFBQztFQUFnQiwrQkFDZix5RkFBMEIsdUJBQ3BDLGVBRUw7SUFBUSxTQUFTLEVBQUMsaUJBQWlCO0lBQUMsS0FBSyxFQUFFTixrQkFBbUI7SUFBQyxRQUFRLEVBQUV1QjtFQUFtQixnQkFDeEY7SUFBUSxLQUFLLEVBQUM7RUFBTyxXQUFlLGVBQ3BDO0lBQVEsS0FBSyxFQUFDO0VBQVUsY0FBa0IsZUFDMUM7SUFBUSxLQUFLLEVBQUM7RUFBTSxVQUFjLENBQzdCLGVBQ1Q7SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQzdCO0lBQUksU0FBUyxFQUFDO0VBQWUsR0FDeEJyQixhQUFhLENBQUM2QixHQUFHLENBQ2QsVUFBQ1osTUFBTSxFQUFFYSxFQUFFO0lBQUEsb0JBQ1g7TUFBSSxHQUFHLEVBQUVBO0lBQUcsZ0JBQ1I7TUFBRyxhQUFXYixNQUFNLENBQUNjLElBQUs7TUFBQyxPQUFPLEVBQUVMO0lBQWdCLEdBQy9DVCxNQUFNLENBQUNjLElBQUksQ0FDWixlQUVKO01BQUcsSUFBSSxFQUFFZCxNQUFNLENBQUNlLEdBQUk7TUFBQyxTQUFTLEVBQUMsK0NBQStDO01BQUMsTUFBTSxFQUFDO0lBQVEsdUNBRTFGLGVBR0o7TUFBRyxJQUFJLEVBQUVmLE1BQU0sQ0FBQ2UsR0FBSTtNQUFDLFNBQVMsRUFBQywrQ0FBK0M7TUFBQyxNQUFNLEVBQUM7SUFBUSxvQkFFMUYsQ0FDSDtFQUFBLENBQUMsQ0FDVCxDQUNBLENBQ0gsZUFHTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQU14QjtJQUFRLE9BQU8sRUFBRTtNQUFBLE9BQUliLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDeEIsYUFBYSxDQUFDO0lBQUE7RUFBQyxhQUFpQixDQUMvRCxDQUVKLENBQ0E7QUFFbEI7Ozs7Ozs7O1VDakdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RCcm93c2VyKCl7XHJcbiAgICBjb25zdCBbYnJvd3NlckZpbHRlclZhbHVlLCBzZXRCcm93c2VyRmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoJ21ldGFsJyk7XHJcbiAgICBjb25zdCBbYnJvd3NlckZpbHRlcixzZXRCcm93c2VyRmlsdGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGV0YWlsc0ZpbHRlclZhbHVlLCBzZXREZXRhaWxzRmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW2RldGFpbHNGaWx0ZXIsIHNldERldGFpbHNGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9dGFnLmdldHRvcGFydGlzdHMmdGFnPSR7YnJvd3NlckZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRCcm93c2VyRmlsdGVyKGRhdGEudG9wYXJ0aXN0cy5hcnRpc3QpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgfSwgW2Jyb3dzZXJGaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0aW5mbyZhcnRpc3Q9JHtkZXRhaWxzRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldERldGFpbHNGaWx0ZXIoZGF0YS5hcnRpc3QpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgfSwgW2RldGFpbHNGaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlckNoYW5nZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0QnJvd3NlckZpbHRlclZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMaW5lQ2xpY2soZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldERldGFpbHNGaWx0ZXJWYWx1ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZXRhaWxzRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWJyb3dzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyb3dzZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIGFsbCA8c3Bhbj5tdXNpYyBhcnRpc3RzPC9zcGFuPiBhcm91bmQgdGhlIGdsb2JlIVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXJfX2ZpbHRlclwiIHZhbHVlPXticm93c2VyRmlsdGVyVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPk1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51IG1ldGFsXCI+TnUgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9ja1wiPlJvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXJfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jyb3dzZXJGaWx0ZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uYW1lPXthcnRpc3QubmFtZX0gb25DbGljaz17aGFuZGxlTGluZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLXNjcmVlblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBvdXQgdGhpcyBhcnRpc3Qgb24gbGFzdC5mbSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgbGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogeyBkZXRhaWxzRmlsdGVyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2lkfT57YXJ0aXN0Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+Y29uc29sZS5sb2coZGV0YWlsc0ZpbHRlcil9PmRpc3BsYXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTVhZjFkNjlkOWY1YWIzNDMxMjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdEJyb3dzZXIiLCJicm93c2VyRmlsdGVyVmFsdWUiLCJzZXRCcm93c2VyRmlsdGVyVmFsdWUiLCJicm93c2VyRmlsdGVyIiwic2V0QnJvd3NlckZpbHRlciIsImRldGFpbHNGaWx0ZXJWYWx1ZSIsInNldERldGFpbHNGaWx0ZXJWYWx1ZSIsImRldGFpbHNGaWx0ZXIiLCJzZXREZXRhaWxzRmlsdGVyIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTGluZUNsaWNrIiwiZ2V0QXR0cmlidXRlIiwibG9nIiwibWFwIiwiaWQiLCJuYW1lIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==