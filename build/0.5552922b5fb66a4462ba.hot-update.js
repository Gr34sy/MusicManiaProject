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
  function deleteTracks(e) {
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
      onClick: deleteAlbumt
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
      onClick: deleteArtist
    }, "Delete"));
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b72dba47ada08b6ef07")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NTUyOTIyYjVmYjY2YTQ0NjJiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFckMsU0FBU0csYUFBYSxHQUFFO0VBQzNCO0VBQ0EsZ0JBQXNDRiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTNDRyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsaUJBQW9DSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXpDSyxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQW9DTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXpDTyxVQUFVO0lBQUVDLGFBQWE7O0VBRWhDO0VBQ0EsaUJBQW9DUiwrQ0FBUSxDQUFDUyxlQUFlLEVBQUUsQ0FBQztJQUFBO0lBQXhEQyxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQWtDWCwrQ0FBUSxDQUFDWSxjQUFjLEVBQUUsQ0FBQztJQUFBO0lBQXJEQyxTQUFTO0lBQUVDLFlBQVk7RUFDOUIsa0JBQWtDZCwrQ0FBUSxDQUFDZSxjQUFjLEVBQUUsQ0FBQztJQUFBO0lBQXJEQyxTQUFTO0lBQUVDLFlBQVk7O0VBRTlCO0VBQ0EsU0FBU0MsU0FBUyxDQUFDQyxDQUFDLEVBQUM7SUFDakJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCVCxhQUFhLDhCQUFLRCxVQUFVLElBQUVQLFdBQVcsR0FBRTtFQUMvQztFQUVBLFNBQVNrQixRQUFRLENBQUNGLENBQUMsRUFBQztJQUNoQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEJOLFlBQVksOEJBQUtELFNBQVMsSUFBRVIsVUFBVSxHQUFFO0VBQzVDO0VBRUEsU0FBU2lCLFFBQVEsQ0FBQ0gsQ0FBQyxFQUFDO0lBQ2hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkgsWUFBWSw4QkFBS0QsU0FBUyxJQUFFVCxVQUFVLEdBQUU7RUFDNUM7O0VBRUE7RUFDQSxTQUFTZ0IsWUFBWSxDQUFDSixDQUFDLEVBQUM7SUFDcEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBRWxCVCxhQUFhLENBQUMsVUFBQ2EsV0FBVztNQUFBLE9BQUdBLFdBQVcsQ0FBQ0MsTUFBTSxDQUMzQyxVQUFDQyxNQUFNLEVBQUNDLEVBQUU7UUFBQSxPQUFHQSxFQUFFLElBQUlSLENBQUMsQ0FBQ1MsTUFBTSxDQUFDQyxZQUFZLENBQUMsU0FBUyxDQUFDO01BQUEsRUFDdEQ7SUFBQSxFQUFDO0VBQ047RUFDQSxTQUFTQyxXQUFXLENBQUNYLENBQUMsRUFBQztJQUNuQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFFbEJOLFlBQVksQ0FBQyxVQUFDaUIsVUFBVTtNQUFBLE9BQUdBLFVBQVUsQ0FBQ04sTUFBTSxDQUN4QyxVQUFDTyxLQUFLLEVBQUNMLEVBQUU7UUFBQSxPQUFHQSxFQUFFLElBQUlSLENBQUMsQ0FBQ1MsTUFBTSxDQUFDQyxZQUFZLENBQUMsU0FBUyxDQUFDO01BQUEsRUFDckQ7SUFBQSxFQUFDO0VBQ047RUFDQSxTQUFTSSxZQUFZLENBQUNkLENBQUMsRUFBQztJQUNwQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFFbEJILFlBQVksQ0FBQyxVQUFDaUIsVUFBVTtNQUFBLE9BQUdBLFVBQVUsQ0FBQ1QsTUFBTSxDQUN4QyxVQUFDVSxLQUFLLEVBQUNSLEVBQUU7UUFBQSxPQUFHQSxFQUFFLElBQUlSLENBQUMsQ0FBQ1MsTUFBTSxDQUFDQyxZQUFZLENBQUMsU0FBUyxDQUFDO01BQUEsRUFDckQ7SUFBQSxFQUFDO0VBQ047O0VBRUE7RUFDQTVCLGdEQUFTLENBQUMsWUFBSTtJQUNWbUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQzdCLFVBQVUsQ0FBQyxDQUFDO0VBQy9ELENBQUMsRUFBQyxDQUFDQSxVQUFVLENBQUMsQ0FBQztFQUVmVCxnREFBUyxDQUFDLFlBQUk7SUFDVm1DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMxQixTQUFTLENBQUMsQ0FBQztFQUM3RCxDQUFDLEVBQUMsQ0FBQ0EsU0FBUyxDQUFDLENBQUM7RUFFZFosZ0RBQVMsQ0FBQyxZQUFJO0lBQ1ZtQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxRQUFRLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDdkIsU0FBUyxDQUFDLENBQUM7RUFDN0QsQ0FBQyxFQUFDLENBQUNBLFNBQVMsQ0FBQyxDQUFDOztFQUlkO0VBQ0EsU0FBU1AsZUFBZSxHQUFFO0lBQ3RCLElBQUkrQixPQUFPLEdBQUdKLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUM3QyxJQUFHRCxPQUFPLEVBQUM7TUFDUCxPQUFPRixJQUFJLENBQUNJLEtBQUssQ0FBQ04sWUFBWSxDQUFDSyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxNQUFJO01BQ0QsT0FBTyxFQUFFO0lBQ2I7RUFDSjtFQUNBLFNBQVM3QixjQUFjLEdBQUU7SUFDckIsSUFBSStCLE1BQU0sR0FBR1AsWUFBWSxDQUFDSyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzNDLElBQUdFLE1BQU0sRUFBQztNQUNOLE9BQU9MLElBQUksQ0FBQ0ksS0FBSyxDQUFDTixZQUFZLENBQUNLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDLE1BQUk7TUFDRCxPQUFPLEVBQUU7SUFDYjtFQUNKO0VBQ0EsU0FBUzFCLGNBQWMsR0FBRTtJQUNyQixJQUFJNkIsTUFBTSxHQUFHUixZQUFZLENBQUNLLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDM0MsSUFBR0csTUFBTSxFQUFDO01BQ04sT0FBT04sSUFBSSxDQUFDSSxLQUFLLENBQUNOLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUMsTUFBSTtNQUNELE9BQU8sRUFBRTtJQUNiO0VBQ0o7RUFFQSxvQkFDSTtJQUFNLFNBQVMsRUFBQztFQUFzQixnQkFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsbUNBQWdCLHNGQUF1QixDQUFLLGVBRTdFO0lBQUksU0FBUyxFQUFDO0VBQWlCLGFBQWEsZUFDNUM7SUFBUyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDO0lBQU0sU0FBUyxFQUFDLGlCQUFpQjtJQUFDLFFBQVEsRUFBRXZCO0VBQVUsZ0JBQ2xEO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUMsK0JBQStCO0lBQUMsV0FBVyxFQUFDLG9DQUFvQztJQUFDLEtBQUssRUFBRWYsV0FBWTtJQUFDLFFBQVEsRUFBRSxrQkFBQWdCLENBQUM7TUFBQSxPQUFHZixjQUFjLENBQUNlLENBQUMsQ0FBQ1MsTUFBTSxDQUFDaUIsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFFLGVBQ2pMO0lBQVEsSUFBSSxFQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUM7RUFBZSxVQUFjLENBQzFELGVBQ1A7SUFBSSxTQUFTLEVBQUM7RUFBYSxHQUN0Qm5DLFVBQVUsQ0FBQ29DLEdBQUcsQ0FBQyxVQUFDcEIsTUFBTSxFQUFDQyxFQUFFO0lBQUEsb0JBQ3RCO01BQUksU0FBUyxFQUFDLGFBQWE7TUFBQyxHQUFHLEVBQUVBO0lBQUcsZ0JBQUMsc0VBQUlELE1BQU0sQ0FBSztNQUFRLFNBQVMsRUFBQyw4QkFBOEI7TUFBQyxXQUFTQyxFQUFHO01BQUMsT0FBTyxFQUFFSjtJQUFhLFlBQWdCLENBQUs7RUFBQSxDQUM1SixDQUNKLENBQ0EsQ0FDQyxlQUVWO0lBQUksU0FBUyxFQUFDO0VBQWlCLFlBQVksZUFDM0M7SUFBUyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDO0lBQU0sU0FBUyxFQUFDLGlCQUFpQjtJQUFDLFFBQVEsRUFBRUY7RUFBUyxnQkFDakQ7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFNBQVMsRUFBQywrQkFBK0I7SUFBQyxXQUFXLEVBQUMsbUNBQW1DO0lBQUMsS0FBSyxFQUFFaEIsVUFBVztJQUFDLFFBQVEsRUFBRSxrQkFBQWMsQ0FBQztNQUFBLE9BQUliLGFBQWEsQ0FBQ2EsQ0FBQyxDQUFDUyxNQUFNLENBQUNpQixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDL0s7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFlLFVBQWMsQ0FDMUQsZUFDUDtJQUFJLFNBQVMsRUFBQztFQUFhLEdBQ3RCaEMsU0FBUyxDQUFDaUMsR0FBRyxDQUFDLFVBQUNkLEtBQUssRUFBQ0wsRUFBRTtJQUFBLG9CQUNwQjtNQUFJLFNBQVMsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFFQTtJQUFHLGdCQUFDLHNFQUFJSyxLQUFLLENBQUs7TUFBUSxTQUFTLEVBQUMsOEJBQThCO01BQUMsV0FBU0wsRUFBRztNQUFDLE9BQU8sRUFBRW9CO0lBQWEsWUFBZ0IsQ0FBSztFQUFBLENBQzFKLENBQ0osQ0FDQSxDQUNDLGVBRVY7SUFBSSxTQUFTLEVBQUM7RUFBaUIsWUFBWSxlQUMzQztJQUFTLFNBQVMsRUFBQztFQUFpQixnQkFDaEM7SUFBTSxTQUFTLEVBQUMsaUJBQWlCO0lBQUMsUUFBUSxFQUFFekI7RUFBUyxnQkFDakQ7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFNBQVMsRUFBQywrQkFBK0I7SUFBQyxXQUFXLEVBQUMsa0NBQWtDO0lBQUMsS0FBSyxFQUFFZixVQUFXO0lBQUMsUUFBUSxFQUFHLGtCQUFBWSxDQUFDO01BQUEsT0FBSVgsYUFBYSxDQUFDVyxDQUFDLENBQUNTLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUMvSztJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWUsVUFBYyxDQUMxRCxlQUNQO0lBQUksU0FBUyxFQUFDO0VBQWEsR0FDdEI3QixTQUFTLENBQUM4QixHQUFHLENBQUMsVUFBQ1gsS0FBSyxFQUFDUixFQUFFO0lBQUEsb0JBQ3BCO01BQUksU0FBUyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUVBO0lBQUcsZ0JBQUMsc0VBQUlRLEtBQUssQ0FBSztNQUFRLFNBQVMsRUFBQyw4QkFBOEI7TUFBQyxXQUFTUixFQUFHO01BQUMsT0FBTyxFQUFFSjtJQUFhLFlBQWdCLENBQUs7RUFBQSxDQUMxSixDQUNKLENBQ0EsQ0FDQyxDQUNQO0FBRWY7Ozs7Ozs7O1VDN0lBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9Zb3VyRmF2b3JpdGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gWW91ckZhdm9yaXRlcygpe1xyXG4gICAgLy9pbnB1dCBzdGF0ZXNcclxuICAgIGNvbnN0IFthcnRpc3RJbnB1dCwgc2V0QXJ0aXN0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2FsYnVtSW5wdXQsIHNldEFsYnVtSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RyYWNrSW5wdXQsIHNldFRyYWNrSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vZmF2b3JpdGVzIHN0YXRlc1xyXG4gICAgY29uc3QgW2ZhdkFydGlzdHMsIHNldEZhdkFydGlzdHNdID0gdXNlU3RhdGUoZ2V0TG9jYWxBcnRpc3RzKCkpO1xyXG4gICAgY29uc3QgW2ZhdkFsYnVtcywgc2V0RmF2QWxidW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQWxidW1zKCkpO1xyXG4gICAgY29uc3QgW2ZhdlRyYWNrcywgc2V0RmF2VHJhY2tzXSA9IHVzZVN0YXRlKGdldExvY2FsVHJhY2tzKCkpO1xyXG5cclxuICAgIC8vc2V0dGluZyBzdGF0ZVxyXG4gICAgZnVuY3Rpb24gYWRkQXJ0aXN0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGYXZBcnRpc3RzKFsuLi5mYXZBcnRpc3RzLCBhcnRpc3RJbnB1dF0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQWxidW0oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZhdkFsYnVtcyhbLi4uZmF2QWxidW1zLCBhbGJ1bUlucHV0XSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUcmFjayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0RmF2VHJhY2tzKFsuLi5mYXZUcmFja3MsIHRyYWNrSW5wdXRdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vZGVsZXRpbmcgaXRlbXNcclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFydGlzdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHNldEZhdkFydGlzdHMoKHByZXZBcnRpc3RzKT0+cHJldkFydGlzdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYXJ0aXN0LGlkKT0+aWQgIT0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsZXRlQWxidW0oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXRGYXZBbGJ1bXMoKHByZXZBbGJ1bXMpPT5wcmV2QWxidW1zLmZpbHRlcihcclxuICAgICAgICAgICAgKGFsYnVtLGlkKT0+aWQgIT0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVHJhY2tzKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2V0RmF2VHJhY2tzKChwcmV2VHJhY2tzKT0+cHJldlRyYWNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICh0cmFjayxpZCk9PmlkICE9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR0aW5nIGxvY2FsIHN0b3JhZ2VcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnRpc3RzJywgSlNPTi5zdHJpbmdpZnkoZmF2QXJ0aXN0cykpXHJcbiAgICB9LFtmYXZBcnRpc3RzXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxidW1zJywgSlNPTi5zdHJpbmdpZnkoZmF2QWxidW1zKSlcclxuICAgIH0sW2ZhdkFsYnVtc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyYWNrcycsIEpTT04uc3RyaW5naWZ5KGZhdlRyYWNrcykpXHJcbiAgICB9LFtmYXZUcmFja3NdKVxyXG5cclxuXHJcblxyXG4gICAgLy9nZXR0aW5nIGxvY2FsIHN0b3JhZ2UgaXRlbXNcclxuICAgIGZ1bmN0aW9uIGdldExvY2FsQXJ0aXN0cygpe1xyXG4gICAgICAgIGxldCBhcnRpc3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGlzdHMnKTtcclxuICAgICAgICBpZihhcnRpc3RzKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FydGlzdHMnKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMb2NhbEFsYnVtcygpe1xyXG4gICAgICAgIGxldCBhbGJ1bXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zJyk7XHJcbiAgICAgICAgaWYoYWxidW1zKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYnVtcycpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExvY2FsVHJhY2tzKCl7XHJcbiAgICAgICAgbGV0IHRyYWNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFja3MnKTtcclxuICAgICAgICBpZih0cmFja3Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJhY2tzJykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fdGl0bGVcIj5UaGVzZSBhcmUgeW91ciA8c3Bhbj5mYXZvcml0ZXMhPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmF2b3JpdGVzX190eXBlXCI+QXJ0aXN0czwvaDI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1c3RvbS1saXN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmF2b3JpdGVzX19mb3JtXCIgb25TdWJtaXQ9e2FkZEFydGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYW4gYXJ0aXN0IHUgd2FudCB0byBhZGRcIiB2YWx1ZT17YXJ0aXN0SW5wdXR9IG9uQ2hhbmdlPXtlID0+c2V0QXJ0aXN0SW5wdXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWJ1dHRvblwiPkFkZCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b20tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZBcnRpc3RzLm1hcCgoYXJ0aXN0LGlkKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXJ0aXN0LWxpbmVcIiBrZXk9e2lkfT48cD57YXJ0aXN0fTwvcD48YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIiBkYXRhLWlkPXtpZH0gb25DbGljaz17ZGVsZXRlQXJ0aXN0fT5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5BbGJ1bXM8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiIG9uU3VibWl0PXthZGRBbGJ1bX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYW4gYWxidW0gdSB3YW50IHRvIGFkZFwiIHZhbHVlPXthbGJ1bUlucHV0fSBvbkNoYW5nZT17ZSA9PiBzZXRBbGJ1bUlucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmF2QWxidW1zLm1hcCgoYWxidW0saWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbGJ1bS1saW5lXCIga2V5PXtpZH0+PHA+e2FsYnVtfTwvcD48YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIiBkYXRhLWlkPXtpZH0gb25DbGljaz17ZGVsZXRlQWxidW10fT5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYXZvcml0ZXNfX3R5cGVcIj5UcmFja3M8L2gyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXN0b20tbGlzdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZhdm9yaXRlc19fZm9ybVwiIG9uU3VibWl0PXthZGRUcmFja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY3VzdG9tLWlucHV0IGlucHV0LS1mYXZvcml0ZXNcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGhlcmUgYSB0cmFjayB1IHdhbnQgdG8gYWRkXCIgdmFsdWU9e3RyYWNrSW5wdXR9IG9uQ2hhbmdlPXsgZSA9PiBzZXRUcmFja0lucHV0KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b25cIj5BZGQgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmF2VHJhY2tzLm1hcCgodHJhY2ssaWQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0cmFjay1saW5lXCIga2V5PXtpZH0+PHA+e3RyYWNrfTwvcD48YnV0dG9uIGNsYXNzTmFtZT1cImN1c3RvbS1idXR0b24gYnV0dG9uLS1kZWxldGVcIiBkYXRhLWlkPXtpZH0gb25DbGljaz17ZGVsZXRlQXJ0aXN0fT5EZWxldGU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YjcyZGJhNDdhZGEwOGI2ZWYwN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiWW91ckZhdm9yaXRlcyIsImFydGlzdElucHV0Iiwic2V0QXJ0aXN0SW5wdXQiLCJhbGJ1bUlucHV0Iiwic2V0QWxidW1JbnB1dCIsInRyYWNrSW5wdXQiLCJzZXRUcmFja0lucHV0IiwiZ2V0TG9jYWxBcnRpc3RzIiwiZmF2QXJ0aXN0cyIsInNldEZhdkFydGlzdHMiLCJnZXRMb2NhbEFsYnVtcyIsImZhdkFsYnVtcyIsInNldEZhdkFsYnVtcyIsImdldExvY2FsVHJhY2tzIiwiZmF2VHJhY2tzIiwic2V0RmF2VHJhY2tzIiwiYWRkQXJ0aXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQWxidW0iLCJhZGRUcmFjayIsImRlbGV0ZUFydGlzdCIsInByZXZBcnRpc3RzIiwiZmlsdGVyIiwiYXJ0aXN0IiwiaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJkZWxldGVBbGJ1bSIsInByZXZBbGJ1bXMiLCJhbGJ1bSIsImRlbGV0ZVRyYWNrcyIsInByZXZUcmFja3MiLCJ0cmFjayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYXJ0aXN0cyIsImdldEl0ZW0iLCJwYXJzZSIsImFsYnVtcyIsInRyYWNrcyIsInZhbHVlIiwibWFwIiwiZGVsZXRlQWxidW10Il0sInNvdXJjZVJvb3QiOiIifQ==