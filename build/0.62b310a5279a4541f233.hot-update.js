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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "Click on artist to get details!"
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    artistDetails = _useState8[0],
    setArtistDetails = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    artistTopTracks = _useState10[0],
    setArtistTopTracks = _useState10[1];
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

  //useEffect tylko po update detailsFilterValue
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (detailsFilterValue) {
      //setting artistdetails state
      fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(detailsFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setArtistDetails(data.artist);
      })["catch"](function (err) {
        return console.error(err);
      });

      //setting toptracks state
      fetch("".concat(rootAPI, "/?method=artist.gettoptracks&artist=").concat(detailsFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setArtistTopTracks(data.toptracks.track);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, [detailsFilterValue]);
  function handleFilterChange(e) {
    e.preventDefault();
    setBrowserFilterValue(e.target.value);
  }
  function handleLineClick(e) {
    setDetailsFilterValue(e.target.getAttribute('data-name'));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, artistDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "top"
  }))));
}

// { artistDetails === true ?
//     <div>
//         <p>{artistDetails.name}</p>
//     </div>
// : <p> Click on artist to get details!</p>
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("735c5b08ad197068dd53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxNQUFNLENBQUNoQixJQUFJLENBQ1osZUFFSjtNQUFHLElBQUksRUFBRWdCLE1BQU0sQ0FBQ2UsR0FBSTtNQUFDLFNBQVMsRUFBQywrQ0FBK0M7TUFBQyxNQUFNLEVBQUM7SUFBUSx1Q0FFMUYsZUFHSjtNQUFHLElBQUksRUFBRWYsTUFBTSxDQUFDZSxHQUFJO01BQUMsU0FBUyxFQUFDLCtDQUErQztNQUFDLE1BQU0sRUFBQztJQUFRLG9CQUUxRixDQUNIO0VBQUEsQ0FBQyxDQUNULENBQ0EsQ0FDSCxlQUdOO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCLHNFQUFJOUIsYUFBYSxDQUFDRCxJQUFJLENBQUssZUFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBSyxFQUFPLENBQ3pCLENBRUosQ0FDQTtBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcEhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RCcm93c2VyKCl7XHJcbiAgICBjb25zdCBbYnJvd3NlckZpbHRlclZhbHVlLCBzZXRCcm93c2VyRmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoJ21ldGFsJyk7XHJcbiAgICBjb25zdCBbYnJvd3NlckZpbHRlcixzZXRCcm93c2VyRmlsdGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGV0YWlsc0ZpbHRlclZhbHVlLCBzZXREZXRhaWxzRmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW2FydGlzdERldGFpbHMsIHNldEFydGlzdERldGFpbHNdID0gdXNlU3RhdGUoe25hbWU6IFwiQ2xpY2sgb24gYXJ0aXN0IHRvIGdldCBkZXRhaWxzIVwifSk7XHJcbiAgICBjb25zdCBbYXJ0aXN0VG9wVHJhY2tzLCBzZXRBcnRpc3RUb3BUcmFja3NdID0gdXNlU3RhdGUoKTtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPXRhZy5nZXR0b3BhcnRpc3RzJnRhZz0ke2Jyb3dzZXJGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QnJvd3NlckZpbHRlcihkYXRhLnRvcGFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgIH0sIFticm93c2VyRmlsdGVyVmFsdWVdKTtcclxuXHJcblxyXG4gICAgLy91c2VFZmZlY3QgdHlsa28gcG8gdXBkYXRlIGRldGFpbHNGaWx0ZXJWYWx1ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkZXRhaWxzRmlsdGVyVmFsdWUpe1xyXG4gICAgICAgICAgICAvL3NldHRpbmcgYXJ0aXN0ZGV0YWlscyBzdGF0ZVxyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD0ke2RldGFpbHNGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3REZXRhaWxzKGRhdGEuYXJ0aXN0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICAgICAgLy9zZXR0aW5nIHRvcHRyYWNrcyBzdGF0ZVxyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXR0b3B0cmFja3MmYXJ0aXN0PSR7ZGV0YWlsc0ZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdFRvcFRyYWNrcyhkYXRhLnRvcHRyYWNrcy50cmFjaykpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtkZXRhaWxzRmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJDaGFuZ2UoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTGluZUNsaWNrKGUpe1xyXG4gICAgICAgIHNldERldGFpbHNGaWx0ZXJWYWx1ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWJyb3dzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyb3dzZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIGFsbCA8c3Bhbj5tdXNpYyBhcnRpc3RzPC9zcGFuPiBhcm91bmQgdGhlIGdsb2JlIVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXJfX2ZpbHRlclwiIHZhbHVlPXticm93c2VyRmlsdGVyVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPk1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51IG1ldGFsXCI+TnUgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9ja1wiPlJvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXJfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jyb3dzZXJGaWx0ZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uYW1lPXthcnRpc3QubmFtZX0gb25DbGljaz17aGFuZGxlTGluZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLXNjcmVlblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBvdXQgdGhpcyBhcnRpc3Qgb24gbGFzdC5mbSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgbGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aXN0RGV0YWlscy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyB7IGFydGlzdERldGFpbHMgPT09IHRydWUgP1xyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgICA8cD57YXJ0aXN0RGV0YWlscy5uYW1lfTwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA6IDxwPiBDbGljayBvbiBhcnRpc3QgdG8gZ2V0IGRldGFpbHMhPC9wPlxyXG4vLyB9XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MzVjNWIwOGFkMTk3MDY4ZGQ1M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0QnJvd3NlciIsImJyb3dzZXJGaWx0ZXJWYWx1ZSIsInNldEJyb3dzZXJGaWx0ZXJWYWx1ZSIsImJyb3dzZXJGaWx0ZXIiLCJzZXRCcm93c2VyRmlsdGVyIiwiZGV0YWlsc0ZpbHRlclZhbHVlIiwic2V0RGV0YWlsc0ZpbHRlclZhbHVlIiwibmFtZSIsImFydGlzdERldGFpbHMiLCJzZXRBcnRpc3REZXRhaWxzIiwiYXJ0aXN0VG9wVHJhY2tzIiwic2V0QXJ0aXN0VG9wVHJhY2tzIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInRvcHRyYWNrcyIsInRyYWNrIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVMaW5lQ2xpY2siLCJnZXRBdHRyaWJ1dGUiLCJtYXAiLCJpZCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=