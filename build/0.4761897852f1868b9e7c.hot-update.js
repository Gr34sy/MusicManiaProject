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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
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
      fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(detailsFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setArtistTopTracks(data);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("79535de3e17dcb3ea55b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUksRUFBRWIsTUFBTSxDQUFDYyxHQUFJO01BQUMsU0FBUyxFQUFDLCtDQUErQztNQUFDLE1BQU0sRUFBQztJQUFRLHVDQUUxRixlQUdKO01BQUcsSUFBSSxFQUFFZCxNQUFNLENBQUNjLEdBQUk7TUFBQyxTQUFTLEVBQUMsK0NBQStDO01BQUMsTUFBTSxFQUFDO0lBQVEsb0JBRTFGLENBQ0g7RUFBQSxDQUFDLENBQ1QsQ0FDQSxDQUNILGVBR047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIscUVBQVMsZUFDVDtJQUFRLE9BQU8sRUFBRTtNQUFBLE9BQUlaLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDQyxhQUFhLENBQUM7SUFBQTtFQUFDLGFBQWlCLENBQy9ELENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7VUM5R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyVmFsdWUsIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkZXRhaWxzRmlsdGVyVmFsdWUsIHNldERldGFpbHNGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbYXJ0aXN0RGV0YWlscywgc2V0QXJ0aXN0RGV0YWlsc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2FydGlzdFRvcFRyYWNrcywgc2V0QXJ0aXN0VG9wVHJhY2tzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD10YWcuZ2V0dG9wYXJ0aXN0cyZ0YWc9JHticm93c2VyRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEJyb3dzZXJGaWx0ZXIoZGF0YS50b3BhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICB9LCBbYnJvd3NlckZpbHRlclZhbHVlXSk7XHJcblxyXG5cclxuICAgIC8vdXNlRWZmZWN0IHR5bGtvIHBvIHVwZGF0ZSBkZXRhaWxzRmlsdGVyVmFsdWVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZGV0YWlsc0ZpbHRlclZhbHVlKXtcclxuICAgICAgICAgICAgLy9zZXR0aW5nIGFydGlzdGRldGFpbHMgc3RhdGVcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0aW5mbyZhcnRpc3Q9JHtkZXRhaWxzRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QXJ0aXN0RGV0YWlscyhkYXRhLmFydGlzdCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vc2V0dGluZyB0b3B0cmFja3Mgc3RhdGVcclxuICAgICAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0aW5mbyZhcnRpc3Q9JHtkZXRhaWxzRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QXJ0aXN0VG9wVHJhY2tzKGRhdGEpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGV0YWlsc0ZpbHRlclZhbHVlXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRmlsdGVyQ2hhbmdlKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRCcm93c2VyRmlsdGVyVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxpbmVDbGljayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RGV0YWlsc0ZpbHRlclZhbHVlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcnRpc3QtYnJvd3NlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIDxzcGFuPm11c2ljIGFydGlzdHM8L3NwYW4+IGFyb3VuZCB0aGUgZ2xvYmUhXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fZmlsdGVyXCIgdmFsdWU9e2Jyb3dzZXJGaWx0ZXJWYWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1ldGFsXCI+TWV0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnUgbWV0YWxcIj5OdSBNZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyb2NrXCI+Um9jazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzZXItbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJvd3Nlcl9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnJvd3NlckZpbHRlci5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXJ0aXN0LCBpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLW5hbWU9e2FydGlzdC5uYW1lfSBvbkNsaWNrPXtoYW5kbGVMaW5lQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aXN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tc2NyZWVuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIG91dCB0aGlzIGFydGlzdCBvbiBsYXN0LmZtIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIG1vYmlsZSBsaW5rICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGlzdC51cmx9IGNsYXNzTmFtZT1cImxhc3RGTS1hcnRpc3QtbGluayBsYXN0Rk0tYXJ0aXN0LWxpbmstLW1vYmlsZVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnRpc3QgcHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PmNvbnNvbGUubG9nKGRldGFpbHNGaWx0ZXIpfT5kaXNwbGF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5NTM1ZGUzZTE3ZGNiM2VhNTViXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RCcm93c2VyIiwiYnJvd3NlckZpbHRlclZhbHVlIiwic2V0QnJvd3NlckZpbHRlclZhbHVlIiwiYnJvd3NlckZpbHRlciIsInNldEJyb3dzZXJGaWx0ZXIiLCJkZXRhaWxzRmlsdGVyVmFsdWUiLCJzZXREZXRhaWxzRmlsdGVyVmFsdWUiLCJhcnRpc3REZXRhaWxzIiwic2V0QXJ0aXN0RGV0YWlscyIsImFydGlzdFRvcFRyYWNrcyIsInNldEFydGlzdFRvcFRyYWNrcyIsInJvb3RBUEkiLCJrZXlBUEkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInRvcGFydGlzdHMiLCJhcnRpc3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUxpbmVDbGljayIsImdldEF0dHJpYnV0ZSIsIm1hcCIsImlkIiwibmFtZSIsInVybCIsImxvZyIsImRldGFpbHNGaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9