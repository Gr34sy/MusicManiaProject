"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YourFavorites": () => (/* binding */ YourFavorites)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function YourFavorites() {
  //input states
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    artistInput = _useState2[0],
    setArtistInput = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    albumInput = _useState4[0],
    setAlbumInput = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    trackInput = _useState6[0],
    setTrackInput = _useState6[1];

  //favorites states
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getLocalArtists()),
    _useState8 = _slicedToArray(_useState7, 2),
    favArtists = _useState8[0],
    setFavArtists = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getLocalAlbums()),
    _useState10 = _slicedToArray(_useState9, 2),
    favAlbums = _useState10[0],
    setFavAlbums = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getLocalTracks()),
    _useState12 = _slicedToArray(_useState11, 2),
    favTracks = _useState12[0],
    setFavTracks = _useState12[1];

  //setting state
  function addArtist(e) {
    e.preventDefault();
    setFavArtists([].concat(_toConsumableArray(favArtists), [artistInput]));
  }
  function addAlbum(e) {
    e.preventDefault();
    setFavAlbums([].concat(_toConsumableArray(favAlbums), [albumInput]));
  }
  function addTrack(e) {
    e.preventDefault();
    setFavTracks([].concat(_toConsumableArray(favTracks), [trackInput]));
  }

  //deleting items
  function deleteArtist(e) {
    e.preventDefault();
    setFavTracks(function (prevArtists) {
      return prevArtists.filter(function (artist, id) {
        return id != e.target.getAttribute('data-id');
      });
    });
  }

  // setting local storage
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem('artists', JSON.stringify(favArtists));
  }, [favArtists]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem('albums', JSON.stringify(favAlbums));
  }, [favAlbums]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem('tracks', JSON.stringify(favTracks));
  }, [favTracks]);

  //getting local storage items
  function getLocalArtists() {
    var artists = localStorage.getItem('artists');
    if (artists) {
      return JSON.parse(localStorage.getItem('artists'));
    } else {
      return [];
    }
  }
  function getLocalAlbums() {
    var albums = localStorage.getItem('albums');
    if (albums) {
      return JSON.parse(localStorage.getItem('albums'));
    } else {
      return [];
    }
  }
  function getLocalTracks() {
    var tracks = localStorage.getItem('tracks');
    if (tracks) {
      return JSON.parse(localStorage.getItem('tracks'));
    } else {
      return [];
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "favorites__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "favorites__title"
  }, "These are your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "favorites!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "favorites__type"
  }, "Artists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "custom-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "favorites__form",
    onSubmit: addArtist
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "custom-input input--favorites",
    placeholder: "Write here an artist u want to add",
    value: artistInput,
    onChange: function onChange(e) {
      return setArtistInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "custom-button"
  }, "Add ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "custom-list"
  }, favArtists.map(function (artist, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "artist-line",
      key: id,
      "data-id": id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, artist), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete",
      onClick: d
    }, "Delete"));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "favorites__type"
  }, "Albums"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "custom-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "favorites__form",
    onSubmit: addAlbum
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "custom-input input--favorites",
    placeholder: "Write here an album u want to add",
    value: albumInput,
    onChange: function onChange(e) {
      return setAlbumInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "custom-button"
  }, "Add ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "custom-list"
  }, favAlbums.map(function (album, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "album-line",
      key: id,
      "data-id": id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, album), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete"
    }, "Delete"));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "favorites__type"
  }, "Tracks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "custom-list-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "favorites__form",
    onSubmit: addTrack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "custom-input input--favorites",
    placeholder: "Write here a track u want to add",
    value: trackInput,
    onChange: function onChange(e) {
      return setTrackInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "custom-button"
  }, "Add ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "custom-list"
  }, favTracks.map(function (track, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "track-line",
      key: id,
      "data-id": id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, track), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete"
    }, "Delete"));
  }))));
}

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
/* harmony import */ var _YourFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(212);









function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_YourFavorites__WEBPACK_IMPORTED_MODULE_7__.YourFavorites, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e8d9a01daa4d2353029")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUVmLFVBQVc7SUFBQyxRQUFRLEVBQUcsa0JBQUFZLENBQUM7TUFBQSxPQUFJWCxhQUFhLENBQUNXLENBQUMsQ0FBQ1MsTUFBTSxDQUFDVyxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDL0s7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFlLFVBQWMsQ0FDMUQsZUFDUDtJQUFJLFNBQVMsRUFBQztFQUFhLEdBQ3RCdkIsU0FBUyxDQUFDd0IsR0FBRyxDQUFDLFVBQUNHLEtBQUssRUFBQ2hCLEVBQUU7SUFBQSxvQkFDcEI7TUFBSSxTQUFTLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBRUEsRUFBRztNQUFDLFdBQVNBO0lBQUcsZ0JBQUMsc0VBQUlnQixLQUFLLENBQUs7TUFBUSxTQUFTLEVBQUM7SUFBOEIsWUFBZ0IsQ0FBSztFQUFBLENBQ25JLENBQ0osQ0FDQSxDQUNDLENBQ1A7QUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SDJCO0FBQ0Q7QUFDb0I7QUFDVTtBQUN4QjtBQUNGO0FBQ2tCO0FBQ007QUFDTjtBQUVoRCxTQUFTUyxHQUFHLEdBQUU7RUFDVixvQkFDSSx1SUFDQSwyREFBQyx5REFBYSxPQUFFLENBVWI7QUFFWDtBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1osNERBQVUsQ0FBQ1MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQywyREFBQyxHQUFHLE9BQUUsQ0FBQzs7Ozs7Ozs7VUM3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9Zb3VyRmF2b3JpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gWW91ckZhdm9yaXRlcygpe1xyXG4gICAgLy9pbnB1dCBzdGF0ZXNcclxuICAgIGNvbnN0IFthcnRpc3RJbnB1dCwgc2V0QXJ0aXN0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FsYnVtSW5wdXQsIHNldEFsYnVtSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RyYWNrSW5wdXQsIHNldFRyYWNrSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vZmF2b3JpdGVzIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhdkFydGlzdHMsIHNldEZhdkFydGlzdHNdID0gdXNlU3RhdGUoZ2V0TG9jYWxBcnRpc3RzKCkpO1xyXG4gICAgY29uc3QgW2ZhdkFsYnVtcywgc2V0RmF2QWxidW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQWxidW1zKCkpO1xyXG4gICAgY29uc3QgW2ZhdlRyYWNrcywgc2V0RmF2VHJhY2tzXSA9IHVzZVN0YXRlKGdldExvY2FsVHJhY2tzKCkpO1xyXG5cclxuICAgIC8vc2V0dGluZyBzdGF0ZVxyXG4gICAgZnVuY3Rpb24gYWRkQXJ0aXN0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGYXZBcnRpc3RzKFsuLi5mYXZBcnRpc3RzLCBhcnRpc3RJbnB1dF0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQWxidW0oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZhdkFsYnVtcyhbLi4uZmF2QWxidW1zLCBhbGJ1bUlucHV0XSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUcmFjayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmF2VHJhY2tzKFsuLi5mYXZUcmFja3MsIHRyYWNrSW5wdXRdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vZGVsZXRpbmcgaXRlbXNcclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFydGlzdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmF2VHJhY2tzKChwcmV2QXJ0aXN0cyk9PnByZXZBcnRpc3RzLmZpbHRlcihcclxuICAgICAgICAgICAgKGFydGlzdCxpZCk9PmlkICE9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR0aW5nIGxvY2FsIHN0b3JhZ2VcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpc3RzJywgSlNPTi5zdHJpbmdpZnkoZmF2QXJ0aXN0cykpXHJcbiAgICB9LFtmYXZBcnRpc3RzXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxidW1zJywgSlNPTi5zdHJpbmdpZnkoZmF2QWxidW1zKSlcclxuICAgIH0sW2ZhdkFsYnVtc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyYWNrcycsIEpTT04uc3RyaW5naWZ5KGZhdlRyYWNrcykpXHJcbiAgICB9LFtmYXZUcmFja3NdKVxyXG5cclxuXHJcblxyXG4gICAgLy9nZXR0aW5nIGxvY2FsIHN0b3JhZ2UgaXRlbXNcclxuICAgIGZ1bmN0aW9uIGdldExvY2FsQXJ0aXN0cygpe1xyXG4gICAgICAgIGxldCBhcnRpc3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGlzdHMnKTtcclxuICAgICAgICBpZihhcnRpc3RzKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGlzdHMnKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMb2NhbEFsYnVtcygpe1xyXG4gICAgICAgIGxldCBhbGJ1bXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zJyk7XHJcbiAgICAgICAgaWYoYWxidW1zKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYnVtcycpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExvY2FsVHJhY2tzKCl7XHJcbiAgICAgICAgbGV0IHRyYWNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFja3MnKTtcclxuICAgICAgICBpZih0cmFja3Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJhY2tzJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdGl0bGVcIj5UaGVzZSBhcmUgeW91ciA8c3Bhbj5mYXZvcml0ZXMhPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QXJ0aXN0czwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCIgb25TdWJtaXQ9e2FkZEFydGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYW4gYXJ0aXN0IHUgd2FudCB0byBhZGRcIiB2YWx1ZT17YXJ0aXN0SW5wdXR9IG9uQ2hhbmdlPXtlID0+c2V0QXJ0aXN0SW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZBcnRpc3RzLm1hcCgoYXJ0aXN0LGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aXN0LWxpbmVcIiBrZXk9e2lkfSBkYXRhLWlkPXtpZH0+PHA+e2FydGlzdH08L3A+PGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCIgb25DbGljaz17ZH0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QWxidW1zPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIiBvblN1Ym1pdD17YWRkQWxidW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFsYnVtIHUgd2FudCB0byBhZGRcIiB2YWx1ZT17YWxidW1JbnB1dH0gb25DaGFuZ2U9e2UgPT4gc2V0QWxidW1JbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZhdkFsYnVtcy5tYXAoKGFsYnVtLGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiIGtleT17aWR9IGRhdGEtaWQ9e2lkfT48cD57YWxidW19PC9wPjxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPlRyYWNrczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCIgb25TdWJtaXQ9e2FkZFRyYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhIHRyYWNrIHUgd2FudCB0byBhZGRcIiB2YWx1ZT17dHJhY2tJbnB1dH0gb25DaGFuZ2U9eyBlID0+IHNldFRyYWNrSW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZUcmFja3MubWFwKCh0cmFjayxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIiBrZXk9e2lkfSBkYXRhLWlkPXtpZH0+PHA+e3RyYWNrfTwvcD48YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiOyBcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHtOYXZiYXJ9IGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vSGVyb1wiO1xyXG5pbXBvcnQgeyBBcnRpc3RCcm93c2VyIH0gZnJvbSBcIi4vQXJ0aXN0QnJvd3NlclwiO1xyXG5pbXBvcnQgeyBBcnRpc3RDb21wYXJpc29uIH0gZnJvbSBcIi4vQXJ0aXN0Q29tcGFyaXNvblwiO1xyXG5pbXBvcnQgeyBZb3VyRmF2b3JpdGVzIH0gZnJvbSBcIi4vWW91ckZhdm9yaXRlc1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8WW91ckZhdm9yaXRlcy8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SGVyby8+XHJcblxyXG4gICAgICAgIDxBcnRpc3RCcm93c2VyLz5cclxuXHJcbiAgICAgICAgPEFydGlzdENvbXBhcmlzb24vPiAqL31cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwLz4pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWU4ZDlhMDFkYWE0ZDIzNTMwMjlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIllvdXJGYXZvcml0ZXMiLCJhcnRpc3RJbnB1dCIsInNldEFydGlzdElucHV0IiwiYWxidW1JbnB1dCIsInNldEFsYnVtSW5wdXQiLCJ0cmFja0lucHV0Iiwic2V0VHJhY2tJbnB1dCIsImdldExvY2FsQXJ0aXN0cyIsImZhdkFydGlzdHMiLCJzZXRGYXZBcnRpc3RzIiwiZ2V0TG9jYWxBbGJ1bXMiLCJmYXZBbGJ1bXMiLCJzZXRGYXZBbGJ1bXMiLCJnZXRMb2NhbFRyYWNrcyIsImZhdlRyYWNrcyIsInNldEZhdlRyYWNrcyIsImFkZEFydGlzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEFsYnVtIiwiYWRkVHJhY2siLCJkZWxldGVBcnRpc3QiLCJwcmV2QXJ0aXN0cyIsImZpbHRlciIsImFydGlzdCIsImlkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcnRpc3RzIiwiZ2V0SXRlbSIsInBhcnNlIiwiYWxidW1zIiwidHJhY2tzIiwidmFsdWUiLCJtYXAiLCJkIiwiYWxidW0iLCJ0cmFjayIsImNyZWF0ZVJvb3QiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmJhciIsIkhlcm8iLCJBcnRpc3RCcm93c2VyIiwiQXJ0aXN0Q29tcGFyaXNvbiIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==