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
  // function deleteArtist(e){

  // }

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
      className: "custom-button button--delete"
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
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, track), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "custom-button button--delete"
    }, "Delete"));
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("441c6fcbc702887c1647")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRUE7SUFBRyxnQkFBQyxzRUFBSUUsS0FBSyxDQUFLO01BQVEsU0FBUyxFQUFDO0lBQThCLFlBQWdCLENBQUs7RUFBQSxDQUN0SCxDQUNKLENBQ0EsQ0FDQyxDQUNQO0FBRWY7Ozs7Ozs7O1VDekhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9Zb3VyRmF2b3JpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gWW91ckZhdm9yaXRlcygpe1xyXG4gICAgLy9pbnB1dCBzdGF0ZXNcclxuICAgIGNvbnN0IFthcnRpc3RJbnB1dCwgc2V0QXJ0aXN0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FsYnVtSW5wdXQsIHNldEFsYnVtSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RyYWNrSW5wdXQsIHNldFRyYWNrSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vZmF2b3JpdGVzIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhdkFydGlzdHMsIHNldEZhdkFydGlzdHNdID0gdXNlU3RhdGUoZ2V0TG9jYWxBcnRpc3RzKCkpO1xyXG4gICAgY29uc3QgW2ZhdkFsYnVtcywgc2V0RmF2QWxidW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQWxidW1zKCkpO1xyXG4gICAgY29uc3QgW2ZhdlRyYWNrcywgc2V0RmF2VHJhY2tzXSA9IHVzZVN0YXRlKGdldExvY2FsVHJhY2tzKCkpO1xyXG5cclxuICAgIC8vc2V0dGluZyBzdGF0ZVxyXG4gICAgZnVuY3Rpb24gYWRkQXJ0aXN0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGYXZBcnRpc3RzKFsuLi5mYXZBcnRpc3RzLCBhcnRpc3RJbnB1dF0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQWxidW0oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZhdkFsYnVtcyhbLi4uZmF2QWxidW1zLCBhbGJ1bUlucHV0XSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUcmFjayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmF2VHJhY2tzKFsuLi5mYXZUcmFja3MsIHRyYWNrSW5wdXRdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vZGVsZXRpbmcgaXRlbXNcclxuICAgIC8vIGZ1bmN0aW9uIGRlbGV0ZUFydGlzdChlKXtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0dGluZyBsb2NhbCBzdG9yYWdlXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJ0aXN0cycsIEpTT04uc3RyaW5naWZ5KGZhdkFydGlzdHMpKVxyXG4gICAgfSxbZmF2QXJ0aXN0c10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYnVtcycsIEpTT04uc3RyaW5naWZ5KGZhdkFsYnVtcykpXHJcbiAgICB9LFtmYXZBbGJ1bXNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmFja3MnLCBKU09OLnN0cmluZ2lmeShmYXZUcmFja3MpKVxyXG4gICAgfSxbZmF2VHJhY2tzXSlcclxuXHJcbiAgICAvL2dldHRpbmcgbG9jYWwgc3RvcmFnZSBpdGVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxBcnRpc3RzKCl7XHJcbiAgICAgICAgbGV0IGFydGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aXN0cycpO1xyXG4gICAgICAgIGlmKGFydGlzdHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aXN0cycpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExvY2FsQWxidW1zKCl7XHJcbiAgICAgICAgbGV0IGFsYnVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGJ1bXMnKTtcclxuICAgICAgICBpZihhbGJ1bXMpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxUcmFja3MoKXtcclxuICAgICAgICBsZXQgdHJhY2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYWNrcycpO1xyXG4gICAgICAgIGlmKHRyYWNrcyl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFja3MnKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190aXRsZVwiPlRoZXNlIGFyZSB5b3VyIDxzcGFuPmZhdm9yaXRlcyE8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BcnRpc3RzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIiBvblN1Ym1pdD17YWRkQXJ0aXN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhcnRpc3QgdSB3YW50IHRvIGFkZFwiIHZhbHVlPXthcnRpc3RJbnB1dH0gb25DaGFuZ2U9e2UgPT5zZXRBcnRpc3RJbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZhdkFydGlzdHMubWFwKChhcnRpc3QsaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpc3QtbGluZVwiIGtleT17aWR9PjxwPnthcnRpc3R9PC9wPjxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPkFsYnVtczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCIgb25TdWJtaXQ9e2FkZEFsYnVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhbGJ1bSB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e2FsYnVtSW5wdXR9IG9uQ2hhbmdlPXtlID0+IHNldEFsYnVtSW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZBbGJ1bXMubWFwKChhbGJ1bSxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsYnVtLWxpbmVcIiBrZXk9e2lkfT48cD57YWxidW19PC9wPjxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPlRyYWNrczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCIgb25TdWJtaXQ9e2FkZFRyYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhIHRyYWNrIHUgd2FudCB0byBhZGRcIiB2YWx1ZT17dHJhY2tJbnB1dH0gb25DaGFuZ2U9eyBlID0+IHNldFRyYWNrSW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZUcmFja3MubWFwKCh0cmFjayxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRyYWNrLWxpbmVcIiBrZXk9e2lkfT48cD57dHJhY2t9PC9wPjxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ0MWM2ZmNiYzcwMjg4N2MxNjQ3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJZb3VyRmF2b3JpdGVzIiwiYXJ0aXN0SW5wdXQiLCJzZXRBcnRpc3RJbnB1dCIsImFsYnVtSW5wdXQiLCJzZXRBbGJ1bUlucHV0IiwidHJhY2tJbnB1dCIsInNldFRyYWNrSW5wdXQiLCJnZXRMb2NhbEFydGlzdHMiLCJmYXZBcnRpc3RzIiwic2V0RmF2QXJ0aXN0cyIsImdldExvY2FsQWxidW1zIiwiZmF2QWxidW1zIiwic2V0RmF2QWxidW1zIiwiZ2V0TG9jYWxUcmFja3MiLCJmYXZUcmFja3MiLCJzZXRGYXZUcmFja3MiLCJhZGRBcnRpc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRBbGJ1bSIsImFkZFRyYWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcnRpc3RzIiwiZ2V0SXRlbSIsInBhcnNlIiwiYWxidW1zIiwidHJhY2tzIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJhcnRpc3QiLCJpZCIsImFsYnVtIiwidHJhY2siXSwic291cmNlUm9vdCI6IiJ9