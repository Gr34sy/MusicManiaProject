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
  }, albums.map(album))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
/******/ 	__webpack_require__.h = () => ("a65d391f920e3aa8224c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yZTE1NTNjMzZiZWI1MzczMDBlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDQTtBQUNTO0FBQ047QUFDRTtBQUUxQixTQUFTTSxPQUFPLE9BQVc7RUFBQSxJQUFUQyxNQUFNLFFBQU5BLE1BQU07RUFDckMsc0JBQTBCUCwyQ0FBYyxDQUFDLEdBQUcsQ0FBQztJQUFBO0lBQXRDUyxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7SUFDeENILFFBQVEsQ0FBQ0csUUFBUSxDQUFDO0VBQ3BCLENBQUM7RUFFRCxvQkFDRSxpREFBQyx5REFBRztJQUFDLEVBQUUsRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxVQUFVLEVBQUU7SUFBTztFQUFFLGdCQUM3QyxpREFBQywyREFBVTtJQUFDLEtBQUssRUFBRU47RUFBTSxnQkFDdkIsaURBQUMseURBQUc7SUFBQyxFQUFFLEVBQUU7TUFBRU8sWUFBWSxFQUFFLENBQUM7TUFBRUMsV0FBVyxFQUFFO0lBQVU7RUFBRSxnQkFDbkQsaURBQUMsd0RBQU87SUFBQyxRQUFRLEVBQUVOLFlBQWE7SUFBQyxjQUFXO0VBQXNCLGdCQUNoRSxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxjQUFjO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNyQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxhQUFhO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNwQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxZQUFZO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxDQUMzQixDQUNOLGVBQ04saURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBZSxnQkFDM0IsbUdBQWtDLGVBQ2xDLDhGQUE2QixlQUM3Qix1R0FBc0MsZUFDdEMsd0dBQXVDLGVBQ3ZDLGlHQUFnQyxDQUM3QixDQUNJLGVBRVgsaURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBbUIsR0FDOUJKLE1BQU0sQ0FBQ1csR0FBRyxDQUNSQyxLQUFLLENBQ1AsQ0FDRSxDQUNJLGVBRVgsaURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUF3RCxnQkFDcEY7SUFBSSxTQUFTLEVBQUM7RUFBaUIsZ0JBQzdCLDBFQUFJO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUssWUFBWSxlQUNyRCwwRUFBSTtJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFLLFdBQVcsZUFDcEQsMEVBQUk7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBSyxXQUFXLGVBQ3BELDBFQUFJO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUssZ0JBQWdCLENBQ3RELENBQ0ksQ0FFQSxDQUNUO0FBRVY7Ozs7Ozs7O1VDdERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vcGFnZS9qcy9MYWJUYWJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XHJcbmltcG9ydCBUYWJDb250ZXh0IGZyb20gJ0BtdWkvbGFiL1RhYkNvbnRleHQnO1xyXG5pbXBvcnQgVGFiTGlzdCBmcm9tICdAbXVpL2xhYi9UYWJMaXN0JztcclxuaW1wb3J0IFRhYlBhbmVsIGZyb20gJ0BtdWkvbGFiL1RhYlBhbmVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhYlRhYnMoe2FsYnVtc30pIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnLCB0eXBvZ3JhcGh5OiAnYm9keTEnfX0+XHJcbiAgICAgIDxUYWJDb250ZXh0IHZhbHVlPXt2YWx1ZX0gPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgPFRhYkxpc3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJCYW5kIE1lbWJlcnNcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJEaXNjb2dyYXBoeVwiIHZhbHVlPVwiMlwiLz5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlRvcCBUcmFja3NcIiB2YWx1ZT1cIjNcIi8+XHJcbiAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMVwiIGNsYXNzTmFtZT1cInRhYlBhbmVsIGN1c3RvbS1zY3JvbGxiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX19tZW1iZXJzXCI+XHJcbiAgICAgICAgICAgIDxsaT5EeWxhbiDigJ5GdW5ueSBNYW7igJ0gQWx2YXJlejwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3JlbCDigJ5KLURvZ+KAnSBEZWNrZXI8L2xpPlxyXG4gICAgICAgICAgICA8bGk+R2VvcmdlIOKAnkpvaG5ueSAzIFRlYXJz4oCdIFJhZ2FuPC9saT5cclxuICAgICAgICAgICAgPGxpPkpvcmRvbiDigJ5DaGFybGllIFNjZW5l4oCdIFRlcnJlbGw8L2xpPlxyXG4gICAgICAgICAgICA8bGk+RGFuaWVsIOKAnkRhbm554oCdIE11cmlsbG8gPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMlwiIGNsYXNzTmFtZT1cInRhYlBhbmVsIGN1c3RvbS1zY3JvbGxiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX19kaXNjb2dyYXBoeVwiPlxyXG4gICAgICAgICAgICB7YWxidW1zLm1hcChcclxuICAgICAgICAgICAgICAoYWxidW0pXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjNcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbCBjdXN0b20tc2Nyb2xsYmFyIGt1cGEgY2h1aiBkdXBhIGN5Y2Ugd2Fkb3dpY2VcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX190b3B0cmFja3NcIj5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLW11c2ljXCI+PC9pPkVsIFBhc288L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+QmVybGluPC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLW11c2ljXCI+PC9pPldhcnNhdzwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5Mb3MgQW5nZWxlczwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICA8L1RhYkNvbnRleHQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTY1ZDM5MWY5MjBlM2FhODIyNGNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUYWIiLCJUYWJDb250ZXh0IiwiVGFiTGlzdCIsIlRhYlBhbmVsIiwiTGFiVGFicyIsImFsYnVtcyIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJ3aWR0aCIsInR5cG9ncmFwaHkiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIm1hcCIsImFsYnVtIl0sInNvdXJjZVJvb3QiOiIifQ==