"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(206);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(148);
/* harmony import */ var _mui_lab_TabList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);
/* harmony import */ var _mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(210);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function LabTabs(_ref) {
  var albums = _ref.albums;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('1'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      width: '100%',
      typography: 'body1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: handleChange,
    "aria-label": "lab API tabs example"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Band Members",
    value: "1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Discography",
    value: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Top Tracks",
    value: "3"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "1",
    className: "tabPanel custom-scrollbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card__members"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Dylan \u201EFunny Man\u201D Alvarez"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jorel \u201EJ-Dog\u201D Decker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "George \u201EJohnny 3 Tears\u201D Ragan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jordon \u201ECharlie Scene\u201D Terrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Daniel \u201EDanny\u201D Murillo "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "2",
    className: "tabPanel custom-scrollbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card__discography"
  }, albums.filter(album, id).map(function (album, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: id
    }, album.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "3",
    className: "tabPanel custom-scrollbar kupa chuj dupa cyce wadowice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card__toptracks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-music"
  }), "El Paso"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-music"
  }), "Berlin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-music"
  }), "Warsaw"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-music"
  }), "Los Angeles")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b044974997df0c5a2cde")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjk2NzYxN2E0ZGY4ODk2OGVmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDQTtBQUNTO0FBQ047QUFDRTtBQUUxQixTQUFTTSxPQUFPLE9BQVc7RUFBQSxJQUFUQyxNQUFNLFFBQU5BLE1BQU07RUFDckMsc0JBQTBCUCwyQ0FBYyxDQUFDLEdBQUcsQ0FBQztJQUFBO0lBQXRDUyxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7SUFDeENILFFBQVEsQ0FBQ0csUUFBUSxDQUFDO0VBQ3BCLENBQUM7RUFFRCxvQkFDRSxpREFBQyx5REFBRztJQUFDLEVBQUUsRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxVQUFVLEVBQUU7SUFBTztFQUFFLGdCQUM3QyxpREFBQywyREFBVTtJQUFDLEtBQUssRUFBRU47RUFBTSxnQkFDdkIsaURBQUMseURBQUc7SUFBQyxFQUFFLEVBQUU7TUFBRU8sWUFBWSxFQUFFLENBQUM7TUFBRUMsV0FBVyxFQUFFO0lBQVU7RUFBRSxnQkFDbkQsaURBQUMsd0RBQU87SUFBQyxRQUFRLEVBQUVOLFlBQWE7SUFBQyxjQUFXO0VBQXNCLGdCQUNoRSxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxjQUFjO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNyQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxhQUFhO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNwQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxZQUFZO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxDQUMzQixDQUNOLGVBQ04saURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBZSxnQkFDM0IsbUdBQWtDLGVBQ2xDLDhGQUE2QixlQUM3Qix1R0FBc0MsZUFDdEMsd0dBQXVDLGVBQ3ZDLGlHQUFnQyxDQUM3QixDQUNJLGVBRVgsaURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBbUIsR0FDOUJKLE1BQU0sQ0FDTlcsTUFBTSxDQUFDQyxLQUFLLEVBQUNDLEVBQUUsQ0FBQyxDQUNoQkMsR0FBRyxDQUNGLFVBQUNGLEtBQUssRUFBQ0MsRUFBRTtJQUFBLG9CQUNSO01BQUksR0FBRyxFQUFFQTtJQUFHLEdBQUVELEtBQUssQ0FBQ0csSUFBSSxDQUFNO0VBQUEsQ0FBQyxDQUNqQyxDQUNFLENBQ0ksZUFFWCxpREFBQyx5REFBUTtJQUFDLEtBQUssRUFBQyxHQUFHO0lBQUMsU0FBUyxFQUFDO0VBQXdELGdCQUNwRjtJQUFJLFNBQVMsRUFBQztFQUFpQixnQkFDN0IsMEVBQUk7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBSyxZQUFZLGVBQ3JELDBFQUFJO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUssV0FBVyxlQUNwRCwwRUFBSTtJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFLLFdBQVcsZUFDcEQsMEVBQUk7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBSyxnQkFBZ0IsQ0FDdEQsQ0FDSSxDQUVBLENBQ1Q7QUFFVjs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0xhYlRhYnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcclxuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnQG11aS9sYWIvVGFiQ29udGV4dCc7XHJcbmltcG9ydCBUYWJMaXN0IGZyb20gJ0BtdWkvbGFiL1RhYkxpc3QnO1xyXG5pbXBvcnQgVGFiUGFuZWwgZnJvbSAnQG11aS9sYWIvVGFiUGFuZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiVGFicyh7YWxidW1zfSkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIHR5cG9ncmFwaHk6ICdib2R5MSd9fT5cclxuICAgICAgPFRhYkNvbnRleHQgdmFsdWU9e3ZhbHVlfSA+XHJcbiAgICAgICAgPEJveCBzeD17eyBib3JkZXJCb3R0b206IDEsIGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX0+XHJcbiAgICAgICAgICA8VGFiTGlzdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkJhbmQgTWVtYmVyc1wiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkRpc2NvZ3JhcGh5XCIgdmFsdWU9XCIyXCIvPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiVG9wIFRyYWNrc1wiIHZhbHVlPVwiM1wiLz5cclxuICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIxXCIgY2xhc3NOYW1lPVwidGFiUGFuZWwgY3VzdG9tLXNjcm9sbGJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRfX21lbWJlcnNcIj5cclxuICAgICAgICAgICAgPGxpPkR5bGFuIOKAnkZ1bm55IE1hbuKAnSBBbHZhcmV6PC9saT5cclxuICAgICAgICAgICAgPGxpPkpvcmVsIOKAnkotRG9n4oCdIERlY2tlcjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5HZW9yZ2Ug4oCeSm9obm55IDMgVGVhcnPigJ0gUmFnYW48L2xpPlxyXG4gICAgICAgICAgICA8bGk+Sm9yZG9uIOKAnkNoYXJsaWUgU2NlbmXigJ0gVGVycmVsbDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5EYW5pZWwg4oCeRGFubnnigJ0gTXVyaWxsbyA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIyXCIgY2xhc3NOYW1lPVwidGFiUGFuZWwgY3VzdG9tLXNjcm9sbGJhclwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRfX2Rpc2NvZ3JhcGh5XCI+XHJcbiAgICAgICAgICAgIHthbGJ1bXNcclxuICAgICAgICAgICAgLmZpbHRlcihhbGJ1bSxpZClcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAoYWxidW0saWQpPT5cclxuICAgICAgICAgICAgICAoPGxpIGtleT17aWR9PnthbGJ1bS5uYW1lfTwvbGk+KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIzXCIgY2xhc3NOYW1lPVwidGFiUGFuZWwgY3VzdG9tLXNjcm9sbGJhciBrdXBhIGNodWogZHVwYSBjeWNlIHdhZG93aWNlXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fdG9wdHJhY2tzXCI+XHJcbiAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5FbCBQYXNvPC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLW11c2ljXCI+PC9pPkJlcmxpbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5XYXJzYXc8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+TG9zIEFuZ2VsZXM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIwNDQ5NzQ5OTdkZjBjNWEyY2RlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGFiIiwiVGFiQ29udGV4dCIsIlRhYkxpc3QiLCJUYWJQYW5lbCIsIkxhYlRhYnMiLCJhbGJ1bXMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwid2lkdGgiLCJ0eXBvZ3JhcGh5IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJmaWx0ZXIiLCJhbGJ1bSIsImlkIiwibWFwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=