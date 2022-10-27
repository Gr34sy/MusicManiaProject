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
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
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
      tags: {
        tag: []
      }
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    artistDetails = _useState10[0],
    setArtistDetails = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    artistTopTracks = _useState12[0],
    setArtistTopTracks = _useState12[1];
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
  }, "Click on artist for more details"), artistDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Listeners:"), artistDetails.stats.listeners), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "artistinfo__tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Tags:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), artistDetails.tags.tag.map(function (tag, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: id,
      className: "genre-box--browser"
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
/******/ 	__webpack_require__.h = () => ("2c0dd9f8417163170093")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QjtJQUFHLFNBQVMsRUFBQztFQUF1QixnQkFDaEMsc0ZBQXVCLEVBQUNNLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDQyxTQUFTLENBQ3JELGVBRUo7SUFBRyxTQUFTLEVBQUM7RUFBdUIsZ0JBQ2hDLHNGQUF1QixFQUFDSSxhQUFhLENBQUNMLEtBQUssQ0FBQ0UsU0FBUyxDQUNyRCxlQUVKO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QixpRkFBa0IscUZBQUssRUFDdEJHLGFBQWEsQ0FBQ0YsSUFBSSxDQUFDQyxHQUFHLENBQUMyQixHQUFHLENBQ3ZCLFVBQUMzQixHQUFHLEVBQUM0QixFQUFFO0lBQUEsb0JBQ047TUFBSyxHQUFHLEVBQUVBLEVBQUc7TUFBQyxTQUFTLEVBQUM7SUFBb0IsR0FDeEM1QixHQUFHLENBQUNMLElBQUksQ0FDUDtFQUFBLENBQUMsQ0FDVixDQUNDLENBQ0osZUFFTjtJQUFJLFNBQVMsRUFBQztFQUF1QixHQUNwQ1EsZUFBZSxDQUNmNEIsTUFBTSxDQUNILFVBQUNaLEtBQUssRUFBQ1MsRUFBRTtJQUFBLE9BQ0xBLEVBQUUsR0FBQyxFQUFFO0VBQUEsQ0FDUixDQUNKLENBQ0FELEdBQUcsQ0FDQSxVQUFDUixLQUFLLEVBQUNTLEVBQUU7SUFBQSxvQkFDTDtNQUFJLEdBQUcsRUFBRUE7SUFBRyxnQkFBQyx5RUFBT0EsRUFBRSxHQUFDLENBQUMsQ0FBUSxFQUFDVCxLQUFLLENBQUN4QixJQUFJLENBQU07RUFBQSxDQUNwRCxDQUNKLENBQ0ksQ0FDSCxDQUNILENBRUwsQ0FDQTtBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcEtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9BcnRpc3RCcm93c2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RCcm93c2VyKCl7XHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcblxyXG5cclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyVmFsdWUsIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkZXRhaWxzRmlsdGVyVmFsdWUsIHNldERldGFpbHNGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgW2FyZURldGFpbHNWaXNpYmxlLCBzZXRBcmVEZXRhaWxzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFthcnRpc3REZXRhaWxzLCBzZXRBcnRpc3REZXRhaWxzXSA9IHVzZVN0YXRlKHtuYW1lOiBcIkNsaWNrIG9uIGFydGlzdCB0byBnZXQgZGV0YWlscyFcIixzdGF0czoge3BsYXljb3VudDogMCwgbGlzdGVuZXJzOiAwfSwgdGFnczp7dGFnOltdfX0pO1xyXG4gICAgY29uc3QgW2FydGlzdFRvcFRyYWNrcywgc2V0QXJ0aXN0VG9wVHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD10YWcuZ2V0dG9wYXJ0aXN0cyZ0YWc9JHticm93c2VyRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEJyb3dzZXJGaWx0ZXIoZGF0YS50b3BhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICB9LCBbYnJvd3NlckZpbHRlclZhbHVlXSk7XHJcblxyXG5cclxuICAgIC8vdXNlRWZmZWN0IHR5bGtvIHBvIHVwZGF0ZSBkZXRhaWxzRmlsdGVyVmFsdWVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZGV0YWlsc0ZpbHRlclZhbHVlKXtcclxuICAgICAgICAgICAgLy9zZXR0aW5nIGFydGlzdGRldGFpbHMgc3RhdGVcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0aW5mbyZhcnRpc3Q9JHtkZXRhaWxzRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QXJ0aXN0RGV0YWlscyhkYXRhLmFydGlzdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vc2V0dGluZyB0b3B0cmFja3Mgc3RhdGVcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0dG9wdHJhY2tzJmFydGlzdD0ke2RldGFpbHNGaWx0ZXJWYWx1ZX0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3RUb3BUcmFja3MoZGF0YS50b3B0cmFja3MudHJhY2spKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGV0YWlsc0ZpbHRlclZhbHVlXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRmlsdGVyQ2hhbmdlKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRCcm93c2VyRmlsdGVyVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpbmVDbGljayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RGV0YWlsc0ZpbHRlclZhbHVlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG5cclxuICAgICAgICBpZihhcmVEZXRhaWxzVmlzaWJsZT09PWZhbHNlKXtcclxuICAgICAgICAgICAgc2V0QXJlRGV0YWlsc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fZmlsdGVyXCIgdmFsdWU9e2Jyb3dzZXJGaWx0ZXJWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1ldGFsXCI+TWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnUgbWV0YWxcIj5OdSBNZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyb2NrXCI+Um9jazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnJvd3NlckZpbHRlci5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aXN0LCBpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLW5hbWU9e2FydGlzdC5uYW1lfSBvbkNsaWNrPXtoYW5kbGVMaW5lQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aXN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tc2NyZWVuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIG91dCB0aGlzIGFydGlzdCBvbiBMYXN0LmZtIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIG1vYmlsZSBsaW5rICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLW1vYmlsZVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnRpc3QgcHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWNrLW9mLWRldGFpbHNcIiAgc3R5bGU9e2FyZURldGFpbHNWaXNpYmxlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7ZGlzcGxheTogJ2Jsb2NrJ319PkNsaWNrIG9uIGFydGlzdCBmb3IgbW9yZSBkZXRhaWxzPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7YXJ0aXN0RGV0YWlscyAmJig8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYm94XCIgc3R5bGU9e2FyZURldGFpbHNWaXNpYmxlID8ge2Rpc3BsYXk6ICdibG9jayd9IDoge2Rpc3BsYXk6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc19faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aXN0RGV0YWlscy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ub3AgVHJhY2tzOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzX19hcnRpc3RpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGlzdGluZm9fX3BsYXljb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXljb3VudDo8L3NwYW4+e2FydGlzdERldGFpbHMuc3RhdHMucGxheWNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGlzdGluZm9fX2xpc3RlbmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxpc3RlbmVyczo8L3NwYW4+e2FydGlzdERldGFpbHMuc3RhdHMubGlzdGVuZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhZ3M6PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGlzdERldGFpbHMudGFncy50YWcubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFnLGlkKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImdlbnJlLWJveC0tYnJvd3NlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJ0aXN0aW5mb19fdG9wdHJhY2tzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3RUb3BUcmFja3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cmFjayxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDwxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHJhY2ssaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PjxzcGFuPntpZCsxfTwvc3Bhbj57dHJhY2submFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIHsgYXJ0aXN0RGV0YWlscyA9PT0gdHJ1ZSA/XHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxwPnthcnRpc3REZXRhaWxzLm5hbWV9PC9wPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIDogPHA+IENsaWNrIG9uIGFydGlzdCB0byBnZXQgZGV0YWlscyE8L3A+XHJcbi8vIH1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJjMGRkOWY4NDE3MTYzMTcwMDkzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RCcm93c2VyIiwicm9vdEFQSSIsImtleUFQSSIsImJyb3dzZXJGaWx0ZXJWYWx1ZSIsInNldEJyb3dzZXJGaWx0ZXJWYWx1ZSIsImJyb3dzZXJGaWx0ZXIiLCJzZXRCcm93c2VyRmlsdGVyIiwiZGV0YWlsc0ZpbHRlclZhbHVlIiwic2V0RGV0YWlsc0ZpbHRlclZhbHVlIiwiYXJlRGV0YWlsc1Zpc2libGUiLCJzZXRBcmVEZXRhaWxzVmlzaWJsZSIsIm5hbWUiLCJzdGF0cyIsInBsYXljb3VudCIsImxpc3RlbmVycyIsInRhZ3MiLCJ0YWciLCJhcnRpc3REZXRhaWxzIiwic2V0QXJ0aXN0RGV0YWlscyIsImFydGlzdFRvcFRyYWNrcyIsInNldEFydGlzdFRvcFRyYWNrcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInRvcHRyYWNrcyIsInRyYWNrIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVMaW5lQ2xpY2siLCJnZXRBdHRyaWJ1dGUiLCJtYXAiLCJpZCIsInVybCIsImRpc3BsYXkiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9