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
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "artistinfo__name"
  }, artistDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details__artistinfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "details__name"
  }, artistDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "artistinfo__toptracks"
  }, artistTopTracks.filter(function (track, id) {
    return id < 10;
  }).map(function (track, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, id + 1), track.name);
  }))))));
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
/******/ 	__webpack_require__.h = () => ("a9e799f93ace21c9b04b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixHQUMvQ1gsTUFBTSxDQUFDaEIsSUFBSSxDQUNaLGVBRUo7TUFBRyxJQUFJLEVBQUVnQixNQUFNLENBQUNlLEdBQUk7TUFBQyxTQUFTLEVBQUMsK0NBQStDO01BQUMsTUFBTSxFQUFDO0lBQVEsdUNBRTFGLGVBR0o7TUFBRyxJQUFJLEVBQUVmLE1BQU0sQ0FBQ2UsR0FBSTtNQUFDLFNBQVMsRUFBQywrQ0FBK0M7TUFBQyxNQUFNLEVBQUM7SUFBUSxvQkFFMUYsQ0FDSDtFQUFBLENBQUMsQ0FDVCxDQUNBLENBQ0gsZUFHTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QjtJQUFHLFNBQVMsRUFBQztFQUFrQixHQUFFOUIsYUFBYSxDQUFDRCxJQUFJLENBQUssZUFDeEQ7SUFBSyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2hDO0lBQUcsU0FBUyxFQUFDO0VBQWUsR0FBRUMsYUFBYSxDQUFDRCxJQUFJLENBQUssZUFFckQ7SUFBSSxTQUFTLEVBQUM7RUFBdUIsR0FDcENHLGVBQWUsQ0FDZjZCLE1BQU0sQ0FDSCxVQUFDWCxLQUFLLEVBQUNTLEVBQUU7SUFBQSxPQUNMQSxFQUFFLEdBQUMsRUFBRTtFQUFBLENBQ1IsQ0FDSixDQUNBRCxHQUFHLENBQ0EsVUFBQ1IsS0FBSyxFQUFDUyxFQUFFO0lBQUEsb0JBQ0w7TUFBSSxHQUFHLEVBQUVBO0lBQUcsZ0JBQUMseUVBQU9BLEVBQUUsR0FBQyxDQUFDLENBQVEsRUFBQ1QsS0FBSyxDQUFDckIsSUFBSSxDQUFNO0VBQUEsQ0FDcEQsQ0FDSixDQUNJLENBQ0gsQ0FFSixDQUVKLENBQ0E7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0QnJvd3Nlcigpe1xyXG4gICAgY29uc3QgW2Jyb3dzZXJGaWx0ZXJWYWx1ZSwgc2V0QnJvd3NlckZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCdtZXRhbCcpO1xyXG4gICAgY29uc3QgW2Jyb3dzZXJGaWx0ZXIsc2V0QnJvd3NlckZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RldGFpbHNGaWx0ZXJWYWx1ZSwgc2V0RGV0YWlsc0ZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFthcnRpc3REZXRhaWxzLCBzZXRBcnRpc3REZXRhaWxzXSA9IHVzZVN0YXRlKHtuYW1lOiBcIkNsaWNrIG9uIGFydGlzdCB0byBnZXQgZGV0YWlscyFcIn0pO1xyXG4gICAgY29uc3QgW2FydGlzdFRvcFRyYWNrcywgc2V0QXJ0aXN0VG9wVHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPXRhZy5nZXR0b3BhcnRpc3RzJnRhZz0ke2Jyb3dzZXJGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QnJvd3NlckZpbHRlcihkYXRhLnRvcGFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgIH0sIFticm93c2VyRmlsdGVyVmFsdWVdKTtcclxuXHJcblxyXG4gICAgLy91c2VFZmZlY3QgdHlsa28gcG8gdXBkYXRlIGRldGFpbHNGaWx0ZXJWYWx1ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkZXRhaWxzRmlsdGVyVmFsdWUpe1xyXG4gICAgICAgICAgICAvL3NldHRpbmcgYXJ0aXN0ZGV0YWlscyBzdGF0ZVxyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD0ke2RldGFpbHNGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3REZXRhaWxzKGRhdGEuYXJ0aXN0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICAgICAgLy9zZXR0aW5nIHRvcHRyYWNrcyBzdGF0ZVxyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXR0b3B0cmFja3MmYXJ0aXN0PSR7ZGV0YWlsc0ZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdFRvcFRyYWNrcyhkYXRhLnRvcHRyYWNrcy50cmFjaykpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtkZXRhaWxzRmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJDaGFuZ2UoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTGluZUNsaWNrKGUpe1xyXG4gICAgICAgIHNldERldGFpbHNGaWx0ZXJWYWx1ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWJyb3dzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyb3dzZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIGFsbCA8c3Bhbj5tdXNpYyBhcnRpc3RzPC9zcGFuPiBhcm91bmQgdGhlIGdsb2JlIVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXJfX2ZpbHRlclwiIHZhbHVlPXticm93c2VyRmlsdGVyVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPk1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51IG1ldGFsXCI+TnUgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9ja1wiPlJvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXJfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jyb3dzZXJGaWx0ZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uYW1lPXthcnRpc3QubmFtZX0gb25DbGljaz17aGFuZGxlTGluZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLXNjcmVlblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBvdXQgdGhpcyBhcnRpc3Qgb24gbGFzdC5mbSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgbGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpc3RpbmZvX19uYW1lXCI+e2FydGlzdERldGFpbHMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19hcnRpc3RpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbHNfX25hbWVcIj57YXJ0aXN0RGV0YWlscy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpc3RpbmZvX190b3B0cmFja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdFRvcFRyYWNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRyYWNrLGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cmFjayxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+PHNwYW4+e2lkKzF9PC9zcGFuPnt0cmFjay5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIHsgYXJ0aXN0RGV0YWlscyA9PT0gdHJ1ZSA/XHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxwPnthcnRpc3REZXRhaWxzLm5hbWV9PC9wPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIDogPHA+IENsaWNrIG9uIGFydGlzdCB0byBnZXQgZGV0YWlscyE8L3A+XHJcbi8vIH1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE5ZTc5OWY5M2FjZTIxYzliMDRiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RCcm93c2VyIiwiYnJvd3NlckZpbHRlclZhbHVlIiwic2V0QnJvd3NlckZpbHRlclZhbHVlIiwiYnJvd3NlckZpbHRlciIsInNldEJyb3dzZXJGaWx0ZXIiLCJkZXRhaWxzRmlsdGVyVmFsdWUiLCJzZXREZXRhaWxzRmlsdGVyVmFsdWUiLCJuYW1lIiwiYXJ0aXN0RGV0YWlscyIsInNldEFydGlzdERldGFpbHMiLCJhcnRpc3RUb3BUcmFja3MiLCJzZXRBcnRpc3RUb3BUcmFja3MiLCJyb290QVBJIiwia2V5QVBJIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJ0b3BhcnRpc3RzIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidG9wdHJhY2tzIiwidHJhY2siLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUxpbmVDbGljayIsImdldEF0dHJpYnV0ZSIsIm1hcCIsImlkIiwidXJsIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==