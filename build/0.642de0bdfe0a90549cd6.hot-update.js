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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("77ad11944336a6f99651")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRWYsVUFBVztJQUFDLFFBQVEsRUFBRyxrQkFBQVksQ0FBQztNQUFBLE9BQUlYLGFBQWEsQ0FBQ1csQ0FBQyxDQUFDUyxNQUFNLENBQUNXLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUMvSztJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWUsVUFBYyxDQUMxRCxlQUNQO0lBQUksU0FBUyxFQUFDO0VBQWEsR0FDdEJ2QixTQUFTLENBQUN3QixHQUFHLENBQUMsVUFBQ0UsS0FBSyxFQUFDZixFQUFFO0lBQUEsb0JBQ3BCO01BQUksU0FBUyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUVBLEVBQUc7TUFBQyxXQUFTQTtJQUFHLGdCQUFDLHNFQUFJZSxLQUFLLENBQUs7TUFBUSxTQUFTLEVBQUM7SUFBOEIsWUFBZ0IsQ0FBSztFQUFBLENBQ25JLENBQ0osQ0FDQSxDQUNDLENBQ1A7QUFFZjs7Ozs7Ozs7VUM5SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL1lvdXJGYXZvcml0ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBZb3VyRmF2b3JpdGVzKCl7XHJcbiAgICAvL2lucHV0IHN0YXRlc1xyXG4gICAgY29uc3QgW2FydGlzdElucHV0LCBzZXRBcnRpc3RJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWxidW1JbnB1dCwgc2V0QWxidW1JbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHJhY2tJbnB1dCwgc2V0VHJhY2tJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgLy9mYXZvcml0ZXMgc3RhdGVzXHJcbiAgICBjb25zdCBbZmF2QXJ0aXN0cywgc2V0RmF2QXJ0aXN0c10gPSB1c2VTdGF0ZShnZXRMb2NhbEFydGlzdHMoKSk7XHJcbiAgICBjb25zdCBbZmF2QWxidW1zLCBzZXRGYXZBbGJ1bXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxBbGJ1bXMoKSk7XHJcbiAgICBjb25zdCBbZmF2VHJhY2tzLCBzZXRGYXZUcmFja3NdID0gdXNlU3RhdGUoZ2V0TG9jYWxUcmFja3MoKSk7XHJcblxyXG4gICAgLy9zZXR0aW5nIHN0YXRlXHJcbiAgICBmdW5jdGlvbiBhZGRBcnRpc3QoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZhdkFydGlzdHMoWy4uLmZhdkFydGlzdHMsIGFydGlzdElucHV0XSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbGJ1bShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmF2QWxidW1zKFsuLi5mYXZBbGJ1bXMsIGFsYnVtSW5wdXRdKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRyYWNrKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGYXZUcmFja3MoWy4uLmZhdlRyYWNrcywgdHJhY2tJbnB1dF0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGluZyBpdGVtc1xyXG4gICAgZnVuY3Rpb24gZGVsZXRlQXJ0aXN0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGYXZUcmFja3MoKHByZXZBcnRpc3RzKT0+cHJldkFydGlzdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYXJ0aXN0LGlkKT0+aWQgIT0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHRpbmcgbG9jYWwgc3RvcmFnZVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FydGlzdHMnLCBKU09OLnN0cmluZ2lmeShmYXZBcnRpc3RzKSlcclxuICAgIH0sW2ZhdkFydGlzdHNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGJ1bXMnLCBKU09OLnN0cmluZ2lmeShmYXZBbGJ1bXMpKVxyXG4gICAgfSxbZmF2QWxidW1zXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHJhY2tzJywgSlNPTi5zdHJpbmdpZnkoZmF2VHJhY2tzKSlcclxuICAgIH0sW2ZhdlRyYWNrc10pXHJcblxyXG5cclxuXHJcbiAgICAvL2dldHRpbmcgbG9jYWwgc3RvcmFnZSBpdGVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxBcnRpc3RzKCl7XHJcbiAgICAgICAgbGV0IGFydGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aXN0cycpO1xyXG4gICAgICAgIGlmKGFydGlzdHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJ0aXN0cycpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExvY2FsQWxidW1zKCl7XHJcbiAgICAgICAgbGV0IGFsYnVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGJ1bXMnKTtcclxuICAgICAgICBpZihhbGJ1bXMpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxUcmFja3MoKXtcclxuICAgICAgICBsZXQgdHJhY2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYWNrcycpO1xyXG4gICAgICAgIGlmKHRyYWNrcyl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFja3MnKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSAgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190aXRsZVwiPlRoZXNlIGFyZSB5b3VyIDxzcGFuPmZhdm9yaXRlcyE8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BcnRpc3RzPC9oMj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3QtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2Zvcm1cIiBvblN1Ym1pdD17YWRkQXJ0aXN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhcnRpc3QgdSB3YW50IHRvIGFkZFwiIHZhbHVlPXthcnRpc3RJbnB1dH0gb25DaGFuZ2U9e2UgPT5zZXRBcnRpc3RJbnB1dChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uXCI+QWRkIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZhdkFydGlzdHMubWFwKChhcnRpc3QsaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhcnRpc3QtbGluZVwiIGtleT17aWR9PjxwPnthcnRpc3R9PC9wPjxidXR0b24gY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvbiBidXR0b24tLWRlbGV0ZVwiIGRhdGEtaWQ9e2lkfSBvbkNsaWNrPXtkZWxldGVBcnRpc3R9PkRlbGV0ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdHlwZVwiPkFsYnVtczwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCIgb25TdWJtaXQ9e2FkZEFsYnVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjdXN0b20taW5wdXQgaW5wdXQtLWZhdm9yaXRlc1wiIHBsYWNlaG9sZGVyPVwiV3JpdGUgaGVyZSBhbiBhbGJ1bSB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e2FsYnVtSW5wdXR9IG9uQ2hhbmdlPXtlID0+IHNldEFsYnVtSW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZBbGJ1bXMubWFwKChhbGJ1bSxpZCk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFsYnVtLWxpbmVcIiBrZXk9e2lkfSBkYXRhLWlkPXtpZH0+PHA+e2FsYnVtfTwvcD48YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIj5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5UcmFja3M8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiIG9uU3VibWl0PXthZGRUcmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYSB0cmFjayB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e3RyYWNrSW5wdXR9IG9uQ2hhbmdlPXsgZSA9PiBzZXRUcmFja0lucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmF2VHJhY2tzLm1hcCgodHJhY2ssaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmFjay1saW5lXCIga2V5PXtpZH0gZGF0YS1pZD17aWR9PjxwPnt0cmFja308L3A+PGJ1dHRvbiBjbGFzc05hbWU9XCJjdXN0b20tYnV0dG9uIGJ1dHRvbi0tZGVsZXRlXCI+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzdhZDExOTQ0MzM2YTZmOTk2NTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIllvdXJGYXZvcml0ZXMiLCJhcnRpc3RJbnB1dCIsInNldEFydGlzdElucHV0IiwiYWxidW1JbnB1dCIsInNldEFsYnVtSW5wdXQiLCJ0cmFja0lucHV0Iiwic2V0VHJhY2tJbnB1dCIsImdldExvY2FsQXJ0aXN0cyIsImZhdkFydGlzdHMiLCJzZXRGYXZBcnRpc3RzIiwiZ2V0TG9jYWxBbGJ1bXMiLCJmYXZBbGJ1bXMiLCJzZXRGYXZBbGJ1bXMiLCJnZXRMb2NhbFRyYWNrcyIsImZhdlRyYWNrcyIsInNldEZhdlRyYWNrcyIsImFkZEFydGlzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEFsYnVtIiwiYWRkVHJhY2siLCJkZWxldGVBcnRpc3QiLCJwcmV2QXJ0aXN0cyIsImZpbHRlciIsImFydGlzdCIsImlkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcnRpc3RzIiwiZ2V0SXRlbSIsInBhcnNlIiwiYWxidW1zIiwidHJhY2tzIiwidmFsdWUiLCJtYXAiLCJhbGJ1bSIsInRyYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==