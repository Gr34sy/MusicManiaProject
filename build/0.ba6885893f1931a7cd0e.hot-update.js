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
  fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=4d2a662e3ae0be5759a731d889e084d1&format=json").then(function (response) {
    if (response.ok) {
      return response;
    }
    throw Error(response.status);
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return setBrowser(response.topartists.artist);
  })["catch"](function (err) {
    return console.error(err);
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    browser = _useState2[0],
    setBrowser = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=4d2a662e3ae0be5759a731d889e084d1&format=json").then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return setBrowser(response.topartists.artist);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, []);
  console.log(browser);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "browser__title"
  }, "Browse all ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "music artists"), " around the globe!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "list-bar"
  }, "Filtr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "browser-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "browser-list"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click for details"))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ea3d823b8be71e47126")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYTY4ODU4OTNmMTkzMWE3Y2QwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUU1QyxTQUFTRyxhQUFhLEdBQUU7RUFFM0IsSUFBTUMsT0FBTyxHQUFHLGtDQUFrQztFQUNsRCxJQUFNQyxNQUFNLEdBQUcsa0NBQWtDO0VBQ2pEQyxLQUFLLDZIQUE2SCxDQUNqSUMsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO01BQ1gsT0FBT0QsUUFBUTtJQUNuQjtJQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7RUFDaEMsQ0FBQyxDQUFDLENBQ0pKLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlLLFVBQVUsQ0FBQ0wsUUFBUSxDQUFDTSxVQUFVLENBQUNDLE1BQU0sQ0FBQztFQUFBLEVBQUMsU0FDbkQsQ0FBQyxVQUFBQyxHQUFHO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztFQUFBLEVBQUM7RUFFOUIsZ0JBQTZCZCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWxDaUIsT0FBTztJQUFDTixVQUFVO0VBRXpCWixnREFBUyxDQUFDLFlBQUk7SUFDVkssS0FBSyw2SEFBNkgsQ0FDaklDLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7TUFDZCxJQUFHQSxRQUFRLENBQUNDLEVBQUUsRUFBQztRQUNYLE9BQU9ELFFBQVE7TUFDbkI7TUFDQSxNQUFNRSxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNqQ0wsSUFBSSxDQUFDLFVBQUFDLFFBQVE7TUFBQSxPQUFJSyxVQUFVLENBQUNMLFFBQVEsQ0FBQ00sVUFBVSxDQUFDQyxNQUFNLENBQUM7SUFBQSxFQUFDLFNBQ25ELENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3JDLENBQUMsRUFBQyxFQUFFLENBQUM7RUFFTEMsT0FBTyxDQUFDRyxHQUFHLENBQUNELE9BQU8sQ0FBQztFQUNwQixvQkFDSTtJQUFTLFNBQVMsRUFBQztFQUFnQixnQkFDL0I7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEI7SUFBSSxTQUFTLEVBQUM7RUFBZ0IsK0JBQ2YseUZBQTBCLHVCQUNwQyxlQUVMO0lBQUcsU0FBUyxFQUFDO0VBQVUsV0FBVSxlQUNqQztJQUFLLFNBQVMsRUFBQztFQUFrQixnQkFDN0I7SUFBSSxTQUFTLEVBQUM7RUFBYyxFQUl2QixDQUNILGVBR047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMEZBQXdCLENBQ3RCLENBRUosQ0FDQTtBQUVsQjs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0FydGlzdEJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFydGlzdEJyb3dzZXIoKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCdcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSdcclxuICAgIGZldGNoKGBodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMC8/bWV0aG9kPXRhZy5nZXR0b3BhcnRpc3RzJnRhZz1kaXNjbyZhcGlfa2V5PTRkMmE2NjJlM2FlMGJlNTc1OWE3MzFkODg5ZTA4NGQxJmZvcm1hdD1qc29uYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgfSlcclxuXHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0LnRoZW4ocmVzcG9uc2UgPT4gc2V0QnJvd3NlcihyZXNwb25zZS50b3BhcnRpc3RzLmFydGlzdCkpXHJcblx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgIGNvbnN0IFticm93c2VyLHNldEJyb3dzZXJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wLz9tZXRob2Q9dGFnLmdldHRvcGFydGlzdHMmdGFnPWRpc2NvJmFwaV9rZXk9NGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEmZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBzZXRCcm93c2VyKHJlc3BvbnNlLnRvcGFydGlzdHMuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGJyb3dzZXIpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFydGlzdC1icm93c2VyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJicm93c2VyX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSBhbGwgPHNwYW4+bXVzaWMgYXJ0aXN0czwvc3Bhbj4gYXJvdW5kIHRoZSBnbG9iZSFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdC1iYXJcIj5GaWx0cjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3Nlci1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicm93c2VyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHticm93c2VyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcnRpc3QsIGlkKT0+IDxsaSBrZXk9e2lkfT57YXJ0aXN0Lm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2xpY2sgZm9yIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFlYTNkODIzYjhiZTcxZTQ3MTI2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpc3RCcm93c2VyIiwicm9vdEFQSSIsImtleUFQSSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJzZXRCcm93c2VyIiwidG9wYXJ0aXN0cyIsImFydGlzdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImJyb3dzZXIiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9