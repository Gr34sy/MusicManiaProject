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
    setTrackInput([].concat(_toConsumableArray(favTracks), [trackInput]));
  }

  //deleting items
  function deleteArtist(e) {
    e.preventDefault();
    setFavArtists(function (prevArtists) {
      return prevArtists.filter(function (artist, id) {
        return id != e.target.getAttribute('data-id');
      });
    });
  }
  function deleteAlbum(e) {
    e.preventDefault();
    setFavAlbums(function (prevAlbums) {
      return prevAlbums.filter(function (album, id) {
        return id != e.target.getAttribute('data-id');
      });
    });
  }
  function deleteTrack(e) {
    e.preventDefault();
    setFavTracks(function (prevTracks) {
      return prevTracks.filter(function (track, id) {
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
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, artist), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete",
      "data-id": id,
      onClick: deleteArtist
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
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, album), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete",
      "data-id": id,
      onClick: deleteAlbum
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
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, track), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete",
      "data-id": id,
      onClick: deleteTrack
    }, "Delete"));
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e1bd1d7ed59dc25eba2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVNO0lBQVksWUFBZ0IsQ0FBSztFQUFBLENBQ3pKLENBQ0osQ0FDQSxDQUNDLENBQ1A7QUFFZjs7Ozs7Ozs7VUM5SUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL1lvdXJGYXZvcml0ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBZb3VyRmF2b3JpdGVzKCl7XHJcbiAgICAvL2lucHV0IHN0YXRlc1xyXG4gICAgY29uc3QgW2FydGlzdElucHV0LCBzZXRBcnRpc3RJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWxidW1JbnB1dCwgc2V0QWxidW1JbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHJhY2tJbnB1dCwgc2V0VHJhY2tJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgLy9mYXZvcml0ZXMgc3RhdGVzXHJcbiAgICBjb25zdCBbZmF2QXJ0aXN0cywgc2V0RmF2QXJ0aXN0c10gPSB1c2VTdGF0ZShnZXRMb2NhbEFydGlzdHMoKSk7XHJcbiAgICBjb25zdCBbZmF2QWxidW1zLCBzZXRGYXZBbGJ1bXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxBbGJ1bXMoKSk7XHJcbiAgICBjb25zdCBbZmF2VHJhY2tzLCBzZXRGYXZUcmFja3NdID0gdXNlU3RhdGUoZ2V0TG9jYWxUcmFja3MoKSk7XHJcblxyXG4gICAgLy9zZXR0aW5nIHN0YXRlXHJcbiAgICBmdW5jdGlvbiBhZGRBcnRpc3QoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZhdkFydGlzdHMoWy4uLmZhdkFydGlzdHMsIGFydGlzdElucHV0XSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbGJ1bShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmF2QWxidW1zKFsuLi5mYXZBbGJ1bXMsIGFsYnVtSW5wdXRdKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRyYWNrKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGYXZUcmFja3MoWy4uLmZhdlRyYWNrcywgdHJhY2tJbnB1dF0pO1xyXG4gICAgICAgIHNldFRyYWNrSW5wdXQoWy4uLmZhdlRyYWNrcywgdHJhY2tJbnB1dF0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGluZyBpdGVtc1xyXG4gICAgZnVuY3Rpb24gZGVsZXRlQXJ0aXN0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2V0RmF2QXJ0aXN0cygocHJldkFydGlzdHMpPT5wcmV2QXJ0aXN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChhcnRpc3QsaWQpPT5pZCAhPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVBbGJ1bShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHNldEZhdkFsYnVtcygocHJldkFsYnVtcyk9PnByZXZBbGJ1bXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYWxidW0saWQpPT5pZCAhPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxldGVUcmFjayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHNldEZhdlRyYWNrcygocHJldlRyYWNrcyk9PnByZXZUcmFja3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAodHJhY2ssaWQpPT5pZCAhPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0dGluZyBsb2NhbCBzdG9yYWdlXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aXN0cycsIEpTT04uc3RyaW5naWZ5KGZhdkFydGlzdHMpKVxyXG4gICAgfSxbZmF2QXJ0aXN0c10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYnVtcycsIEpTT04uc3RyaW5naWZ5KGZhdkFsYnVtcykpXHJcbiAgICB9LFtmYXZBbGJ1bXNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmFja3MnLCBKU09OLnN0cmluZ2lmeShmYXZUcmFja3MpKVxyXG4gICAgfSxbZmF2VHJhY2tzXSlcclxuXHJcblxyXG5cclxuICAgIC8vZ2V0dGluZyBsb2NhbCBzdG9yYWdlIGl0ZW1zXHJcbiAgICBmdW5jdGlvbiBnZXRMb2NhbEFydGlzdHMoKXtcclxuICAgICAgICBsZXQgYXJ0aXN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnRpc3RzJyk7XHJcbiAgICAgICAgaWYoYXJ0aXN0cyl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnRpc3RzJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxBbGJ1bXMoKXtcclxuICAgICAgICBsZXQgYWxidW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYnVtcycpO1xyXG4gICAgICAgIGlmKGFsYnVtcyl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGJ1bXMnKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMb2NhbFRyYWNrcygpe1xyXG4gICAgICAgIGxldCB0cmFja3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJhY2tzJyk7XHJcbiAgICAgICAgaWYodHJhY2tzKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYWNrcycpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3RpdGxlXCI+VGhlc2UgYXJlIHlvdXIgPHNwYW4+ZmF2b3JpdGVzITwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPkFydGlzdHM8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiIG9uU3VibWl0PXthZGRBcnRpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFydGlzdCB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e2FydGlzdElucHV0fSBvbkNoYW5nZT17ZSA9PnNldEFydGlzdElucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmF2QXJ0aXN0cy5tYXAoKGFydGlzdCxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFydGlzdC1saW5lXCIga2V5PXtpZH0+PHA+e2FydGlzdH08L3A+PGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCIgZGF0YS1pZD17aWR9IG9uQ2xpY2s9e2RlbGV0ZUFydGlzdH0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QWxidW1zPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIiBvblN1Ym1pdD17YWRkQWxidW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dCBpbnB1dC0tZmF2b3JpdGVzXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBoZXJlIGFuIGFsYnVtIHUgd2FudCB0byBhZGRcIiB2YWx1ZT17YWxidW1JbnB1dH0gb25DaGFuZ2U9e2UgPT4gc2V0QWxidW1JbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZhdkFsYnVtcy5tYXAoKGFsYnVtLGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWxidW0tbGluZVwiIGtleT17aWR9PjxwPnthbGJ1bX08L3A+PGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCIgZGF0YS1pZD17aWR9IG9uQ2xpY2s9e2RlbGV0ZUFsYnVtfT5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5UcmFja3M8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiIG9uU3VibWl0PXthZGRUcmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYSB0cmFjayB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e3RyYWNrSW5wdXR9IG9uQ2hhbmdlPXsgZSA9PiBzZXRUcmFja0lucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmF2VHJhY2tzLm1hcCgodHJhY2ssaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmFjay1saW5lXCIga2V5PXtpZH0+PHA+e3RyYWNrfTwvcD48YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIiBkYXRhLWlkPXtpZH0gb25DbGljaz17ZGVsZXRlVHJhY2t9PkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhlMWJkMWQ3ZWQ1OWRjMjVlYmEyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJZb3VyRmF2b3JpdGVzIiwiYXJ0aXN0SW5wdXQiLCJzZXRBcnRpc3RJbnB1dCIsImFsYnVtSW5wdXQiLCJzZXRBbGJ1bUlucHV0IiwidHJhY2tJbnB1dCIsInNldFRyYWNrSW5wdXQiLCJnZXRMb2NhbEFydGlzdHMiLCJmYXZBcnRpc3RzIiwic2V0RmF2QXJ0aXN0cyIsImdldExvY2FsQWxidW1zIiwiZmF2QWxidW1zIiwic2V0RmF2QWxidW1zIiwiZ2V0TG9jYWxUcmFja3MiLCJmYXZUcmFja3MiLCJzZXRGYXZUcmFja3MiLCJhZGRBcnRpc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRBbGJ1bSIsImFkZFRyYWNrIiwiZGVsZXRlQXJ0aXN0IiwicHJldkFydGlzdHMiLCJmaWx0ZXIiLCJhcnRpc3QiLCJpZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImRlbGV0ZUFsYnVtIiwicHJldkFsYnVtcyIsImFsYnVtIiwiZGVsZXRlVHJhY2siLCJwcmV2VHJhY2tzIiwidHJhY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFydGlzdHMiLCJnZXRJdGVtIiwicGFyc2UiLCJhbGJ1bXMiLCJ0cmFja3MiLCJ2YWx1ZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=