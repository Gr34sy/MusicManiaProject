self["webpackHotUpdatees6_react"](0,{

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _LabTabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LabTabs__WEBPACK_IMPORTED_MODULE_1__);
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
  }, []);
  console.log(artistAlbums);
  return artistData && artistAlbums && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../images/Hu wallpaper 2.jpg",
    alt: "HU",
    className: "card__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figcaption", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__title"
  }, artistData.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_LabTabs__WEBPACK_IMPORTED_MODULE_1___default()), {
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

/***/ }),

/***/ 52:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\page\\js\\LabTabs.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (38:12)\n\n\u001b[0m \u001b[90m 36 |\u001b[39m           \u001b[33m<\u001b[39m\u001b[33mul\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"card__discography\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 |\u001b[39m             {\u001b[33m<\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[33mSwan\u001b[39m \u001b[33mSongs\u001b[39m (\u001b[35m2008\u001b[39m)\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 38 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[33mAmerican\u001b[39m \u001b[33mTragedy\u001b[39m (\u001b[35m2011\u001b[39m)\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[33mNotes\u001b[39m \u001b[36mfrom\u001b[39m the \u001b[33mUnderground\u001b[39m (\u001b[35m2013\u001b[39m)\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[33mDay\u001b[39m \u001b[36mof\u001b[39m the \u001b[33mDead\u001b[39m (\u001b[35m2015\u001b[39m)\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[33mFive\u001b[39m (\u001b[35m2017\u001b[39m)\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:367:12)\n    at JSXParserMixin.raise (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:3706:19)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8172:18)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8184:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:8198:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12875:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (C:\\Users\\Greasy\\Desktop\\wszystko\\strony\\projekty\\MusicManiaProject\\node_modules\\@babel\\parser\\lib\\index.js:12615:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ea42e1ef8c651c1e90f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CLGdCQUU5QjtJQUFNLFNBQVMsRUFBQztFQUFvQixPQUFTLGVBQzdDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsQ0FDeEMsQ0FDSixDQU9KO0FBR2Q7Ozs7Ozs7Ozs7Ozs7OztVQ3RHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExhYlRhYnMgZnJvbSBcIi4vTGFiVGFic1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoe2FydGlzdH0pe1xyXG4gICAgY29uc3Qgcm9vdEFQSSA9ICdodHRwOi8vd3MuYXVkaW9zY3JvYmJsZXIuY29tLzIuMCc7XHJcbiAgICBjb25zdCBrZXlBUEkgPSAnNGQyYTY2MmUzYWUwYmU1NzU5YTczMWQ4ODllMDg0ZDEnO1xyXG5cclxuICAgIGNvbnN0W2FydGlzdERhdGEsIHNldEFydGlzdERhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0W2FydGlzdEFsYnVtcywgc2V0QXJ0aXN0QWxidW1zXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldGluZm8mYXJ0aXN0PSR7YXJ0aXN0fSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuICggZGF0YSA9PiBzZXRBcnRpc3REYXRhKGRhdGEuYXJ0aXN0KSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldHRvcGFsYnVtcyZhcnRpc3Q9JHthcnRpc3R9JmFwaV9rZXk9JHtrZXlBUEl9JmZvcm1hdD1qc29uYClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldEFydGlzdEFsYnVtcyhkYXRhLnRvcGFsYnVtcy5hbGJ1bSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhcnRpc3RBbGJ1bXMpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIChhcnRpc3REYXRhICYmIGFydGlzdEFsYnVtcyAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvSHUgd2FsbHBhcGVyIDIuanBnXCIgYWx0PVwiSFVcIiBjbGFzc05hbWU9XCJjYXJkX19pbWdcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGVcIj57YXJ0aXN0RGF0YS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgPExhYlRhYnMgYWxidW1zPXthcnRpc3RBbGJ1bXN9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZ2VucmVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRyYXAgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmFwIE1ldGFsXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJhcGNvcmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTnUgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWx0ZXJuYXRpdmUgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFyZG9tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+SGFyZCBMZXZlbDo8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5zXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAxMCBzcGFuw7N3ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX251bWJlclwiPjY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NvY2lhbC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInNtLWljb25cIj48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtc3F1YXJlLWZhY2Vib29rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJzbS1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXNxdWFyZS1pbnN0YWdyYW1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInNtLWljb25cIj48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEteW91dHViZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZWE0MmUxZWY4YzY1MWMxZTkwZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxhYlRhYnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJhcnRpc3QiLCJyb290QVBJIiwia2V5QVBJIiwiYXJ0aXN0RGF0YSIsInNldEFydGlzdERhdGEiLCJhcnRpc3RBbGJ1bXMiLCJzZXRBcnRpc3RBbGJ1bXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInRvcGFsYnVtcyIsImFsYnVtIiwibG9nIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=