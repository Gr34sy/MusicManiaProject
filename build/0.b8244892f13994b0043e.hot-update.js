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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    areDetailsVisible = _useState8[0],
    setAreDetailsVisible = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "Click on artist to get details!",
      stats: {
        playcount: 0,
        listeners: 0
      },
      tags: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    artistDetails = _useState10[0],
    setArtistDetails = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    artistTopTracks = _useState12[0],
    setArtistTopTracks = _useState12[1];
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
    e.preventDefault();
    setDetailsFilterValue(e.target.getAttribute('data-name'));
    if (areDetailsVisible === false) {
      setAreDetailsVisible(true);
    }
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
    }, "Check out this artist on Last.fm!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: artist.url,
      className: "lastFM-artist-link lastFM-artist-link--mobile",
      target: "_blank"
    }, "Artist profile"));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lack-of-details",
    style: areDetailsVisible ? {
      display: 'none'
    } : {
      display: 'block'
    }
  }, "Click on artist for more details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-box",
    style: areDetailsVisible ? {
      display: 'block'
    } : {
      display: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, artistDetails.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Top Tracks:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details__artistinfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "artistinfo__stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "artistinfo__playcount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Playcount:"), artistDetails.stats.playcount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "artistinfo__listeners"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Listeners:"), artistDetails.stats.playcount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "artistinfo__tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Tags:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), artistDetails.tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "genre-box"
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
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
/******/ 	__webpack_require__.h = () => ("fa249990ae743a294402")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDLDJEQUFDLEdBQUcsT0FBRSxDQUFDOzs7Ozs7OztVQzNCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyVmFsdWUsIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkZXRhaWxzRmlsdGVyVmFsdWUsIHNldERldGFpbHNGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgW2FyZURldGFpbHNWaXNpYmxlLCBzZXRBcmVEZXRhaWxzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFthcnRpc3REZXRhaWxzLCBzZXRBcnRpc3REZXRhaWxzXSA9IHVzZVN0YXRlKHtuYW1lOiBcIkNsaWNrIG9uIGFydGlzdCB0byBnZXQgZGV0YWlscyFcIixzdGF0czoge3BsYXljb3VudDogMCwgbGlzdGVuZXJzOiAwfSwgdGFnczpbXX0pO1xyXG4gICAgY29uc3QgW2FydGlzdFRvcFRyYWNrcywgc2V0QXJ0aXN0VG9wVHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPXRhZy5nZXR0b3BhcnRpc3RzJnRhZz0ke2Jyb3dzZXJGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QnJvd3NlckZpbHRlcihkYXRhLnRvcGFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgIH0sIFticm93c2VyRmlsdGVyVmFsdWVdKTtcclxuXHJcblxyXG4gICAgLy91c2VFZmZlY3QgdHlsa28gcG8gdXBkYXRlIGRldGFpbHNGaWx0ZXJWYWx1ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkZXRhaWxzRmlsdGVyVmFsdWUpe1xyXG4gICAgICAgICAgICAvL3NldHRpbmcgYXJ0aXN0ZGV0YWlscyBzdGF0ZVxyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD0ke2RldGFpbHNGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3REZXRhaWxzKGRhdGEuYXJ0aXN0KSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICAgICAgLy9zZXR0aW5nIHRvcHRyYWNrcyBzdGF0ZVxyXG4gICAgICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXR0b3B0cmFja3MmYXJ0aXN0PSR7ZGV0YWlsc0ZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdFRvcFRyYWNrcyhkYXRhLnRvcHRyYWNrcy50cmFjaykpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtkZXRhaWxzRmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJDaGFuZ2UoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTGluZUNsaWNrKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXREZXRhaWxzRmlsdGVyVmFsdWUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcblxyXG4gICAgICAgIGlmKGFyZURldGFpbHNWaXNpYmxlPT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBzZXRBcmVEZXRhaWxzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1icm93c2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicm93c2VyX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgPHNwYW4+bXVzaWMgYXJ0aXN0czwvc3Bhbj4gYXJvdW5kIHRoZSBnbG9iZSFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyX19maWx0ZXJcIiB2YWx1ZT17YnJvd3NlckZpbHRlclZhbHVlfSBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0YWxcIj5NZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudSBtZXRhbFwiPk51IE1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJvY2tcIj5Sb2NrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicm93c2VyX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHticm93c2VyRmlsdGVyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcnRpc3QsIGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtbmFtZT17YXJ0aXN0Lm5hbWV9IG9uQ2xpY2s9e2hhbmRsZUxpbmVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1zY3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgb3V0IHRoaXMgYXJ0aXN0IG9uIExhc3QuZm0hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlIGxpbmsgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tbW9iaWxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFydGlzdCBwcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxhY2stb2YtZGV0YWlsc1wiICBzdHlsZT17YXJlRGV0YWlsc1Zpc2libGUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHtkaXNwbGF5OiAnYmxvY2snfX0+Q2xpY2sgb24gYXJ0aXN0IGZvciBtb3JlIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYm94XCIgc3R5bGU9e2FyZURldGFpbHNWaXNpYmxlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aXN0RGV0YWlscy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ub3AgVHJhY2tzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19hcnRpc3RpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGlzdGluZm9fX3BsYXljb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXljb3VudDo8L3NwYW4+e2FydGlzdERldGFpbHMuc3RhdHMucGxheWNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGlzdGluZm9fX2xpc3RlbmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpc3RlbmVyczo8L3NwYW4+e2FydGlzdERldGFpbHMuc3RhdHMucGxheWNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGlzdGluZm9fX3RhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UYWdzOjwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3REZXRhaWxzLnRhZ3MubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFnKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnRpc3RpbmZvX190b3B0cmFja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdFRvcFRyYWNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRyYWNrLGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cmFjayxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+PHNwYW4+e2lkKzF9PC9zcGFuPnt0cmFjay5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIHsgYXJ0aXN0RGV0YWlscyA9PT0gdHJ1ZSA/XHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxwPnthcnRpc3REZXRhaWxzLm5hbWV9PC9wPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIDogPHA+IENsaWNrIG9uIGFydGlzdCB0byBnZXQgZGV0YWlscyE8L3A+XHJcbi8vIH1cclxuXHJcbiIsImltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7IFxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge05hdmJhcn0gZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi9IZXJvXCI7XHJcbmltcG9ydCB7IEFydGlzdEJyb3dzZXIgfSBmcm9tIFwiLi9BcnRpc3RCcm93c2VyXCI7XHJcbmltcG9ydCB7IEFydGlzdENvbXBhcmlzb24gfSBmcm9tIFwiLi9BcnRpc3RDb21wYXJpc29uXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPEhlcm8vPlxyXG5cclxuICAgICAgICA8QXJ0aXN0QnJvd3Nlci8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RDb21wYXJpc29uLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwLz4pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmEyNDk5OTBhZTc0M2EyOTQ0MDJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGlzdEJyb3dzZXIiLCJicm93c2VyRmlsdGVyVmFsdWUiLCJzZXRCcm93c2VyRmlsdGVyVmFsdWUiLCJicm93c2VyRmlsdGVyIiwic2V0QnJvd3NlckZpbHRlciIsImRldGFpbHNGaWx0ZXJWYWx1ZSIsInNldERldGFpbHNGaWx0ZXJWYWx1ZSIsImFyZURldGFpbHNWaXNpYmxlIiwic2V0QXJlRGV0YWlsc1Zpc2libGUiLCJuYW1lIiwic3RhdHMiLCJwbGF5Y291bnQiLCJsaXN0ZW5lcnMiLCJ0YWdzIiwiYXJ0aXN0RGV0YWlscyIsInNldEFydGlzdERldGFpbHMiLCJhcnRpc3RUb3BUcmFja3MiLCJzZXRBcnRpc3RUb3BUcmFja3MiLCJyb290QVBJIiwia2V5QVBJIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJ0b3BhcnRpc3RzIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidG9wdHJhY2tzIiwidHJhY2siLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUxpbmVDbGljayIsImdldEF0dHJpYnV0ZSIsIm1hcCIsImlkIiwidXJsIiwiZGlzcGxheSIsInRhZyIsImZpbHRlciIsImNyZWF0ZVJvb3QiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmJhciIsIkhlcm8iLCJBcnRpc3RDb21wYXJpc29uIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9