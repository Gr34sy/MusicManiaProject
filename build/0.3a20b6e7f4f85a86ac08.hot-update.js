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
    }, tag.name);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b3a7d8907aa0e0e2454")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsRUFBQ0ssYUFBYSxDQUFDSixLQUFLLENBQUNDLFNBQVMsQ0FDckQsZUFFSjtJQUFHLFNBQVMsRUFBQztFQUF1QixnQkFDaEMsc0ZBQXVCLEVBQUNHLGFBQWEsQ0FBQ0osS0FBSyxDQUFDQyxTQUFTLENBQ3JELGVBRUo7SUFBRyxTQUFTLEVBQUM7RUFBa0IsZ0JBQzNCLGlGQUFrQixxRkFBSyxFQUN0QkcsYUFBYSxDQUFDRCxJQUFJLENBQUM2QixHQUFHLENBQ25CLFVBQUNJLEdBQUc7SUFBQSxvQkFDSDtNQUFLLFNBQVMsRUFBQztJQUFXLEdBQ3RCQSxHQUFHLENBQUNyQyxJQUFJLENBQ1A7RUFBQSxDQUFDLENBQ1YsQ0FDRCxDQUNGLGVBRU47SUFBSSxTQUFTLEVBQUM7RUFBdUIsR0FDcENPLGVBQWUsQ0FDZitCLE1BQU0sQ0FDSCxVQUFDYixLQUFLLEVBQUNTLEVBQUU7SUFBQSxPQUNMQSxFQUFFLEdBQUMsRUFBRTtFQUFBLENBQ1IsQ0FDSixDQUNBRCxHQUFHLENBQ0EsVUFBQ1IsS0FBSyxFQUFDUyxFQUFFO0lBQUEsb0JBQ0w7TUFBSSxHQUFHLEVBQUVBO0lBQUcsZ0JBQUMseUVBQU9BLEVBQUUsR0FBQyxDQUFDLENBQVEsRUFBQ1QsS0FBSyxDQUFDekIsSUFBSSxDQUFNO0VBQUEsQ0FDcEQsQ0FDSixDQUNJLENBQ0gsQ0FFSixDQUVKLENBQ0E7QUFFbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pLQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXJ0aXN0QnJvd3Nlcigpe1xyXG4gICAgY29uc3QgW2Jyb3dzZXJGaWx0ZXJWYWx1ZSwgc2V0QnJvd3NlckZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCdtZXRhbCcpO1xyXG4gICAgY29uc3QgW2Jyb3dzZXJGaWx0ZXIsc2V0QnJvd3NlckZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RldGFpbHNGaWx0ZXJWYWx1ZSwgc2V0RGV0YWlsc0ZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBbYXJlRGV0YWlsc1Zpc2libGUsIHNldEFyZURldGFpbHNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2FydGlzdERldGFpbHMsIHNldEFydGlzdERldGFpbHNdID0gdXNlU3RhdGUoe25hbWU6IFwiQ2xpY2sgb24gYXJ0aXN0IHRvIGdldCBkZXRhaWxzIVwiLHN0YXRzOiB7cGxheWNvdW50OiAwLCBsaXN0ZW5lcnM6IDB9LCB0YWdzOltdfSk7XHJcbiAgICBjb25zdCBbYXJ0aXN0VG9wVHJhY2tzLCBzZXRBcnRpc3RUb3BUcmFja3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9dGFnLmdldHRvcGFydGlzdHMmdGFnPSR7YnJvd3NlckZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRCcm93c2VyRmlsdGVyKGRhdGEudG9wYXJ0aXN0cy5hcnRpc3QpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgfSwgW2Jyb3dzZXJGaWx0ZXJWYWx1ZV0pO1xyXG5cclxuXHJcbiAgICAvL3VzZUVmZmVjdCB0eWxrbyBwbyB1cGRhdGUgZGV0YWlsc0ZpbHRlclZhbHVlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGRldGFpbHNGaWx0ZXJWYWx1ZSl7XHJcbiAgICAgICAgICAgIC8vc2V0dGluZyBhcnRpc3RkZXRhaWxzIHN0YXRlXHJcbiAgICAgICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldGluZm8mYXJ0aXN0PSR7ZGV0YWlsc0ZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdERldGFpbHMoZGF0YS5hcnRpc3QpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gICAgICAgICAgICAvL3NldHRpbmcgdG9wdHJhY2tzIHN0YXRlXHJcbiAgICAgICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldHRvcHRyYWNrcyZhcnRpc3Q9JHtkZXRhaWxzRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QXJ0aXN0VG9wVHJhY2tzKGRhdGEudG9wdHJhY2tzLnRyYWNrKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2RldGFpbHNGaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlckNoYW5nZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0QnJvd3NlckZpbHRlclZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMaW5lQ2xpY2soZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldERldGFpbHNGaWx0ZXJWYWx1ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuXHJcbiAgICAgICAgaWYoYXJlRGV0YWlsc1Zpc2libGU9PT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHNldEFyZURldGFpbHNWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWJyb3dzZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJyb3dzZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIGFsbCA8c3Bhbj5tdXNpYyBhcnRpc3RzPC9zcGFuPiBhcm91bmQgdGhlIGdsb2JlIVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJyb3dzZXJfX2ZpbHRlclwiIHZhbHVlPXticm93c2VyRmlsdGVyVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPk1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm51IG1ldGFsXCI+TnUgTWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9ja1wiPlJvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VyLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyb3dzZXJfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jyb3dzZXJGaWx0ZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uYW1lPXthcnRpc3QubmFtZX0gb25DbGljaz17aGFuZGxlTGluZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLXNjcmVlblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBvdXQgdGhpcyBhcnRpc3Qgb24gTGFzdC5mbSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBtb2JpbGUgbGluayAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1tb2JpbGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJ0aXN0IHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFjay1vZi1kZXRhaWxzXCIgIHN0eWxlPXthcmVEZXRhaWxzVmlzaWJsZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge2Rpc3BsYXk6ICdibG9jayd9fT5DbGljayBvbiBhcnRpc3QgZm9yIG1vcmUgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1ib3hcIiBzdHlsZT17YXJlRGV0YWlsc1Zpc2libGUgPyB7ZGlzcGxheTogJ2Jsb2NrJ30gOiB7ZGlzcGxheTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthcnRpc3REZXRhaWxzLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRvcCBUcmFja3M6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNfX2FydGlzdGluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3RpbmZvX19zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fcGxheWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxheWNvdW50Ojwvc3Bhbj57YXJ0aXN0RGV0YWlscy5zdGF0cy5wbGF5Y291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fbGlzdGVuZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGlzdGVuZXJzOjwvc3Bhbj57YXJ0aXN0RGV0YWlscy5zdGF0cy5wbGF5Y291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhZ3M6PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdERldGFpbHMudGFncy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YWcpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fdG9wdHJhY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3RUb3BUcmFja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cmFjayxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDwxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHJhY2ssaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PjxzcGFuPntpZCsxfTwvc3Bhbj57dHJhY2submFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyB7IGFydGlzdERldGFpbHMgPT09IHRydWUgP1xyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgICA8cD57YXJ0aXN0RGV0YWlscy5uYW1lfTwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA6IDxwPiBDbGljayBvbiBhcnRpc3QgdG8gZ2V0IGRldGFpbHMhPC9wPlxyXG4vLyB9XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYjNhN2Q4OTA3YWEwZTBlMjQ1NFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0QnJvd3NlciIsImJyb3dzZXJGaWx0ZXJWYWx1ZSIsInNldEJyb3dzZXJGaWx0ZXJWYWx1ZSIsImJyb3dzZXJGaWx0ZXIiLCJzZXRCcm93c2VyRmlsdGVyIiwiZGV0YWlsc0ZpbHRlclZhbHVlIiwic2V0RGV0YWlsc0ZpbHRlclZhbHVlIiwiYXJlRGV0YWlsc1Zpc2libGUiLCJzZXRBcmVEZXRhaWxzVmlzaWJsZSIsIm5hbWUiLCJzdGF0cyIsInBsYXljb3VudCIsImxpc3RlbmVycyIsInRhZ3MiLCJhcnRpc3REZXRhaWxzIiwic2V0QXJ0aXN0RGV0YWlscyIsImFydGlzdFRvcFRyYWNrcyIsInNldEFydGlzdFRvcFRyYWNrcyIsInJvb3RBUEkiLCJrZXlBUEkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInRvcGFydGlzdHMiLCJhcnRpc3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ0b3B0cmFja3MiLCJ0cmFjayIsImhhbmRsZUZpbHRlckNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTGluZUNsaWNrIiwiZ2V0QXR0cmlidXRlIiwibWFwIiwiaWQiLCJ1cmwiLCJkaXNwbGF5IiwidGFnIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==