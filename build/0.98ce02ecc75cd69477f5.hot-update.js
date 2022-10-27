"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Card(_ref) {
  var artist = _ref.artist;
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    artistData = _useState2[0],
    setArtistData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    artistAlbums = _useState4[0],
    setArtistAlbums = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(artist, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setArtistData(data.artist);
    })["catch"](function (err) {
      return console.error(err);
    });
    fetch("".concat(rootAPI, "/?method=artist.gettopalbums&artist=").concat(artist, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setArtistAlbums(data.topalbums.album);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, [artist]);
  return artistData && artistAlbums && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../images/Hu wallpaper 2.jpg",
    alt: "HU",
    className: "card__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figcaption", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__title"
  }, artistData.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LabTabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    albums: artistAlbums
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__genres"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "genre-box"
  }, "Trap Metal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "genre-box"
  }, "Rap Metal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "genre-box"
  }, "Rapcore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "genre-box"
  }, "Nu Metal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "genre-box"
  }, "Metal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "genre-box"
  }, "Alternative Metal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hardometer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hard Level:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hardometer__spans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__number"
  }, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hardometer__span"
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ba8833871e38815ed03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFTLGVBQzdDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsQ0FDeEMsQ0FDSixDQU9KO0FBR2Q7Ozs7Ozs7O1VDcEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGFiVGFicyBmcm9tIFwiLi9MYWJUYWJzXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7YXJ0aXN0fSl7XHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcblxyXG4gICAgY29uc3RbYXJ0aXN0RGF0YSwgc2V0QXJ0aXN0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3RbYXJ0aXN0QWxidW1zLCBzZXRBcnRpc3RBbGJ1bXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0aW5mbyZhcnRpc3Q9JHthcnRpc3R9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdERhdGEoZGF0YS5hcnRpc3QpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgZmV0Y2goYCR7cm9vdEFQSX0vP21ldGhvZD1hcnRpc3QuZ2V0dG9wYWxidW1zJmFydGlzdD0ke2FydGlzdH0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QXJ0aXN0QWxidW1zKGRhdGEudG9wYWxidW1zLmFsYnVtKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9LFthcnRpc3RdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAoYXJ0aXN0RGF0YSAmJiBhcnRpc3RBbGJ1bXMgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL0h1IHdhbGxwYXBlciAyLmpwZ1wiIGFsdD1cIkhVXCIgY2xhc3NOYW1lPVwiY2FyZF9faW1nXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmRfX3RpdGxlXCI+e2FydGlzdERhdGEubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgIDxMYWJUYWJzIGFsYnVtcz17YXJ0aXN0QWxidW1zfS8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2dlbnJlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICBUcmFwIE1ldGFsXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJhcCBNZXRhbFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICBSYXBjb3JlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE51IE1ldGFsXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1ldGFsXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFsdGVybmF0aXZlIE1ldGFsXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkhhcmQgTGV2ZWw6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuc1wiPiBcclxuICAgICAgICAgICAgICAgICAgICB7LyogMTAgc3BhbsOzdyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19udW1iZXJcIj42PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkX19zb2NpYWwtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJzbS1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXNxdWFyZS1mYWNlYm9va1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwic20taWNvblwiPjxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1zcXVhcmUtaW5zdGFncmFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJzbS1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXlvdXR1YmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmJhODgzMzg3MWUzODgxNWVkMDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYWJUYWJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJkIiwiYXJ0aXN0Iiwicm9vdEFQSSIsImtleUFQSSIsImFydGlzdERhdGEiLCJzZXRBcnRpc3REYXRhIiwiYXJ0aXN0QWxidW1zIiwic2V0QXJ0aXN0QWxidW1zIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ0b3BhbGJ1bXMiLCJhbGJ1bSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9