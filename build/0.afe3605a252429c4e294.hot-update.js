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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(rootAPI, "/?method=artist.getinfo&artist=").concat(artist, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.status);
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setArtistData(data.similarartists.artist);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../images/Hu wallpaper 2.jpg",
    alt: "HU",
    className: "card__img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figcaption", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__title"
  }, "Hollywood Undead"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LabTabs__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("64c64e2ffc4792301b5c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZmUzNjA1YTI1MjQyOWM0ZTI5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTTtBQUNVO0FBRW5DLFNBQVNJLElBQUksT0FBVTtFQUFBLElBQVJDLE1BQU0sUUFBTkEsTUFBTTtFQUN4QixJQUFNQyxPQUFPLEdBQUcsa0NBQWtDO0VBQ2xELElBQU1DLE1BQU0sR0FBRyxrQ0FBa0M7RUFFakQsZ0JBQW1DTCwrQ0FBUSxFQUFFO0lBQUE7SUFBdkNNLFVBQVU7SUFBRUMsYUFBYTtFQUUvQk4sZ0RBQVMsQ0FBQyxZQUFJO0lBRVZPLEtBQUssV0FBSUosT0FBTyw0Q0FBa0NELE1BQU0sc0JBQVlFLE1BQU0sa0JBQWUsQ0FDeEZJLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7TUFDZCxJQUFHQSxRQUFRLENBQUNDLEVBQUUsRUFBQztRQUNYLE9BQU9ELFFBQVE7TUFDbkI7TUFDQSxNQUFNRSxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csTUFBTSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNqQ0wsSUFBSSxDQUFHLFVBQUFNLElBQUk7TUFBQSxPQUFJUixhQUFhLENBQUNRLElBQUksQ0FBQ0MsY0FBYyxDQUFDYixNQUFNLENBQUM7SUFBQSxFQUFDLFNBQ3BELENBQUMsVUFBQWMsR0FBRztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3JDLENBQUMsRUFBQyxFQUFFLENBQUM7RUFFTCxvQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUNqQix3RkFDSTtJQUFLLEdBQUcsRUFBQyw4QkFBOEI7SUFBQyxHQUFHLEVBQUMsSUFBSTtJQUFDLFNBQVMsRUFBQztFQUFXLEVBQUUsZUFDeEUsNEZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBYSxzQkFBc0IsQ0FDeEMsQ0FDUixlQUVULDJEQUFDLGdEQUFPLE9BQUUsZUFFVjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUN6QjtJQUFLLFNBQVMsRUFBQztFQUFXLGdCQUVwQixlQUVOO0lBQUssU0FBUyxFQUFDO0VBQVcsZUFFcEIsZUFFTjtJQUFLLFNBQVMsRUFBQztFQUFXLGFBRXBCLGVBRU47SUFBSyxTQUFTLEVBQUM7RUFBVyxjQUVwQixlQUVOO0lBQUssU0FBUyxFQUFDO0VBQVcsV0FFcEIsZUFFTjtJQUFLLFNBQVMsRUFBQztFQUFXLHVCQUVwQixDQUNKLGVBRU47SUFBSyxTQUFTLEVBQUM7RUFBWSxnQkFDdkIsb0ZBQWtCLGVBQ2xCO0lBQUssU0FBUyxFQUFDO0VBQW1CLGdCQUU5QjtJQUFNLFNBQVMsRUFBQztFQUFvQixPQUFTLGVBQzdDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsZUFDMUM7SUFBTSxTQUFTLEVBQUM7RUFBa0IsRUFBUSxlQUMxQztJQUFNLFNBQVMsRUFBQztFQUFrQixFQUFRLGVBQzFDO0lBQU0sU0FBUyxFQUFDO0VBQWtCLEVBQVEsQ0FDeEMsQ0FDSixDQU9KO0FBRWQ7Ozs7Ozs7O1VDdEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGFiVGFicyBmcm9tIFwiLi9MYWJUYWJzXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7YXJ0aXN0fSl7XHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcblxyXG4gICAgY29uc3RbYXJ0aXN0RGF0YSwgc2V0QXJ0aXN0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBmZXRjaChgJHtyb290QVBJfS8/bWV0aG9kPWFydGlzdC5nZXRpbmZvJmFydGlzdD0ke2FydGlzdH0mYXBpX2tleT0ke2tleUFQSX0mZm9ybWF0PWpzb25gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbiAoIGRhdGEgPT4gc2V0QXJ0aXN0RGF0YShkYXRhLnNpbWlsYXJhcnRpc3RzLmFydGlzdCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9IdSB3YWxscGFwZXIgMi5qcGdcIiBhbHQ9XCJIVVwiIGNsYXNzTmFtZT1cImNhcmRfX2ltZ1wiLz5cclxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkX190aXRsZVwiPkhvbGx5d29vZCBVbmRlYWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgIDxMYWJUYWJzLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZ2VucmVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRyYXAgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmFwIE1ldGFsXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbnJlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJhcGNvcmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTnUgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VucmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWx0ZXJuYXRpdmUgTWV0YWxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFyZG9tZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+SGFyZCBMZXZlbDo8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5zXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAxMCBzcGFuw7N3ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX251bWJlclwiPjY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXJkb21ldGVyX19zcGFuXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcmRvbWV0ZXJfX3NwYW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFyZG9tZXRlcl9fc3BhblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NvY2lhbC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInNtLWljb25cIj48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtc3F1YXJlLWZhY2Vib29rXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJzbS1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXNxdWFyZS1pbnN0YWdyYW1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cInNtLWljb25cIj48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEteW91dHViZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY0YzY0ZTJmZmM0NzkyMzAxYjVjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGFiVGFicyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZCIsImFydGlzdCIsInJvb3RBUEkiLCJrZXlBUEkiLCJhcnRpc3REYXRhIiwic2V0QXJ0aXN0RGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwic2ltaWxhcmFydGlzdHMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9