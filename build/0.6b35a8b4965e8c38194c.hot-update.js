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
    fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(detailsFilter, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setDetailsArtist(data);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, [filterDetails]);
  function handleFilterChange(e) {
    e.preventDefault();
    setBrowserFilterValue(e.target.value);
  }
  function handleLineClick(e) {
    e.preventDefault();
    setDetailsFilter(e.target.getAttribute('data-name'));
    console.log(artistDetails);
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
  })));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b80e9c6e75ec3c262c94")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEIsdUJBQ3BDLGVBRUw7SUFBUSxTQUFTLEVBQUMsaUJBQWlCO0lBQUMsS0FBSyxFQUFFakMsa0JBQW1CO0lBQUMsUUFBUSxFQUFFeUI7RUFBbUIsZ0JBQ3hGO0lBQVEsS0FBSyxFQUFDO0VBQU8sV0FBZSxlQUNwQztJQUFRLEtBQUssRUFBQztFQUFVLGNBQWtCLGVBQzFDO0lBQVEsS0FBSyxFQUFDO0VBQU0sVUFBYyxDQUM3QixlQUNUO0lBQUssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QjtJQUFJLFNBQVMsRUFBQztFQUFlLEdBQ3hCdkIsYUFBYSxDQUFDZ0MsR0FBRyxDQUNkLFVBQUNmLE1BQU0sRUFBRWdCLEVBQUU7SUFBQSxvQkFDWDtNQUFJLEdBQUcsRUFBRUE7SUFBRyxnQkFDUjtNQUFHLGFBQVdoQixNQUFNLENBQUNpQixJQUFLO01BQUMsT0FBTyxFQUFFTjtJQUFnQixHQUMvQ1gsTUFBTSxDQUFDaUIsSUFBSSxDQUNaLGVBRUo7TUFBRyxJQUFJLEVBQUVqQixNQUFNLENBQUNrQixHQUFJO01BQUMsU0FBUyxFQUFDLCtDQUErQztNQUFDLE1BQU0sRUFBQztJQUFRLHVDQUUxRixlQUdKO01BQUcsSUFBSSxFQUFFbEIsTUFBTSxDQUFDa0IsR0FBSTtNQUFDLFNBQVMsRUFBQywrQ0FBK0M7TUFBQyxNQUFNLEVBQUM7SUFBUSxvQkFFMUYsQ0FDSDtFQUFBLENBQUMsQ0FDVCxDQUNBLENBQ0gsZUFHTjtJQUFLLFNBQVMsRUFBQztFQUFhLEVBUXRCLENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7VUNsR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyVmFsdWUsIHNldEJyb3dzZXJGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnbWV0YWwnKTtcclxuICAgIGNvbnN0IFticm93c2VyRmlsdGVyLHNldEJyb3dzZXJGaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkZXRhaWxzRmlsdGVyVmFsdWUsIHNldERldGFpbHNGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbZGV0YWlsc0ZpbHRlciwgc2V0RGV0YWlsc0ZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvb3RBUEkgPSAnaHR0cDovL3dzLmF1ZGlvc2Nyb2JibGVyLmNvbS8yLjAnO1xyXG4gICAgY29uc3Qga2V5QVBJID0gJzRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJztcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD10YWcuZ2V0dG9wYXJ0aXN0cyZ0YWc9JHticm93c2VyRmlsdGVyVmFsdWV9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEJyb3dzZXJGaWx0ZXIoZGF0YS50b3BhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICB9LCBbYnJvd3NlckZpbHRlclZhbHVlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD0ke2RldGFpbHNGaWx0ZXJ9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldERldGFpbHNBcnRpc3QoZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICB9LCBbZmlsdGVyRGV0YWlsc10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlckNoYW5nZShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0QnJvd3NlckZpbHRlclZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMaW5lQ2xpY2soZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldERldGFpbHNGaWx0ZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aXN0RGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1icm93c2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicm93c2VyX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgPHNwYW4+bXVzaWMgYXJ0aXN0czwvc3Bhbj4gYXJvdW5kIHRoZSBnbG9iZSFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJicm93c2VyX19maWx0ZXJcIiB2YWx1ZT17YnJvd3NlckZpbHRlclZhbHVlfSBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0YWxcIj5NZXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudSBtZXRhbFwiPk51IE1ldGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJvY2tcIj5Sb2NrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicm93c2VyX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHticm93c2VyRmlsdGVyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcnRpc3QsIGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtbmFtZT17YXJ0aXN0Lm5hbWV9IG9uQ2xpY2s9e2hhbmRsZUxpbmVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpc3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpc3QudXJsfSBjbGFzc05hbWU9XCJsYXN0Rk0tYXJ0aXN0LWxpbmsgbGFzdEZNLWFydGlzdC1saW5rLS1zY3JlZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgb3V0IHRoaXMgYXJ0aXN0IG9uIGxhc3QuZm0hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbW9iaWxlIGxpbmsgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aXN0LnVybH0gY2xhc3NOYW1lPVwibGFzdEZNLWFydGlzdC1saW5rIGxhc3RGTS1hcnRpc3QtbGluay0tbW9iaWxlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFydGlzdCBwcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHsgYnJvd3NlckRldGFpbHMubGVuZ3RoIT0wID9cclxuICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZXJEZXRhaWxzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGFydGlzdCwgaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2lkfT57YXJ0aXN0Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOjxwPkNsaWNrIGFydGlzdCB0byBzZWUgZGV0YWlsczwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiODBlOWM2ZTc1ZWMzYzI2MmM5NFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0QnJvd3NlciIsImJyb3dzZXJGaWx0ZXJWYWx1ZSIsInNldEJyb3dzZXJGaWx0ZXJWYWx1ZSIsImJyb3dzZXJGaWx0ZXIiLCJzZXRCcm93c2VyRmlsdGVyIiwiZGV0YWlsc0ZpbHRlclZhbHVlIiwic2V0RGV0YWlsc0ZpbHRlclZhbHVlIiwiZGV0YWlsc0ZpbHRlciIsInNldERldGFpbHNGaWx0ZXIiLCJyb290QVBJIiwia2V5QVBJIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJ0b3BhcnRpc3RzIiwiYXJ0aXN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2V0RGV0YWlsc0FydGlzdCIsImZpbHRlckRldGFpbHMiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUxpbmVDbGljayIsImdldEF0dHJpYnV0ZSIsImxvZyIsImFydGlzdERldGFpbHMiLCJtYXAiLCJpZCIsIm5hbWUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9