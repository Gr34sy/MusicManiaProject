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
    fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(artist, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setArtistAlbums(data);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, []);
  return artistData && artistAlbums && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../images/Hu wallpaper 2.jpg",
    alt: "HU",
    className: "card__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figcaption", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__title"
  }, artistData.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LabTabs__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("0c2a4e65e45b0b6e11a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLENBQ3hDLENBQ0osQ0FPSjtBQUdkOzs7Ozs7OztVQ3JHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExhYlRhYnMgZnJvbSBcIi4vTGFiVGFic1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoe2FydGlzdH0pe1xyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG5cclxuICAgIGNvbnN0W2FydGlzdERhdGEsIHNldEFydGlzdERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W2FydGlzdEFsYnVtcywgc2V0QXJ0aXN0QWxidW1zXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldGluZm8mYXJ0aXN0PSR7YXJ0aXN0fSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3REYXRhKGRhdGEuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldGluZm8mYXJ0aXN0PSR7YXJ0aXN0fSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3RBbGJ1bXMoZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfSxbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIChhcnRpc3REYXRhICYmIGFydGlzdEFsYnVtcyAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvSHUgd2FsbHBhcGVyIDIuanBnXCIgYWx0PVwiSFVcIiBjbGFzc05hbWU9XCJjYXJkX19pbWdcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj57YXJ0aXN0RGF0YS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPExhYlRhYnMvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19nZW5yZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVHJhcCBNZXRhbFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICBSYXAgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmFwY29yZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdSBNZXRhbFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICBNZXRhbFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICBBbHRlcm5hdGl2ZSBNZXRhbFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXJkb21ldGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5IYXJkIExldmVsOjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhbnNcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDEwIHNwYW7Ds3cgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fbnVtYmVyXCI+Njwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc29jaWFsLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwic20taWNvblwiPjxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1zcXVhcmUtZmFjZWJvb2tcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInNtLWljb25cIj48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtc3F1YXJlLWluc3RhZ3JhbVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwic20taWNvblwiPjxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS15b3V0dWJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBjMmE0ZTY1ZTQ1YjBiNmUxMWE5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGFiVGFicyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZCIsImFydGlzdCIsInJvb3RBUEkiLCJrZXlBUEkiLCJhcnRpc3REYXRhIiwic2V0QXJ0aXN0RGF0YSIsImFydGlzdEFsYnVtcyIsInNldEFydGlzdEFsYnVtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=