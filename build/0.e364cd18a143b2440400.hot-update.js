"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(204);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var _mui_lab_TabList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var _mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(208);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function LabTabs() {
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
    label: "Concerts",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Swan Songs (2008)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "American Tragedy (2011)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Notes from the Underground (2013)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Day of the Dead (2015)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Five (2017)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "New Empire, Vol. 1 (2020)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "New Empire, Vol. 2 (2020)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Hotel Kalifornia (2022)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "3",
    className: "tabPanel custom-scrollbar kupa chuj.dupa.cyce.wadowice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card__concerts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-solid fa-music"
  }), "El Paso"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-solid fa-music"
  }), "Berlin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-solid fa-music"
  }), "Warsaw"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-solid fa-music"
  }), "Los Angeles")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf1c2793c6a91992e10f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMzY0Y2QxOGExNDNiMjQ0MDQwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDQTtBQUNTO0FBQ047QUFDRTtBQUUxQixTQUFTTSxPQUFPLEdBQUc7RUFDaEMsc0JBQTBCTiwyQ0FBYyxDQUFDLEdBQUcsQ0FBQztJQUFBO0lBQXRDUSxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7SUFDeENILFFBQVEsQ0FBQ0csUUFBUSxDQUFDO0VBQ3BCLENBQUM7RUFFRCxvQkFDRSxpREFBQyx5REFBRztJQUFDLEVBQUUsRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxVQUFVLEVBQUU7SUFBTztFQUFFLGdCQUM3QyxpREFBQywyREFBVTtJQUFDLEtBQUssRUFBRU47RUFBTSxnQkFDdkIsaURBQUMseURBQUc7SUFBQyxFQUFFLEVBQUU7TUFBRU8sWUFBWSxFQUFFLENBQUM7TUFBRUMsV0FBVyxFQUFFO0lBQVU7RUFBRSxnQkFDbkQsaURBQUMsd0RBQU87SUFBQyxRQUFRLEVBQUVOLFlBQWE7SUFBQyxjQUFXO0VBQXNCLGdCQUNoRSxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxjQUFjO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNyQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxhQUFhO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNwQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxVQUFVO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxDQUN6QixDQUNOLGVBQ04saURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBZSxnQkFDM0IsbUdBQWtDLGVBQ2xDLDhGQUE2QixlQUM3Qix1R0FBc0MsZUFDdEMsd0dBQXVDLGVBQ3ZDLGlHQUFnQyxDQUM3QixDQUNJLGVBRVgsaURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBbUIsZ0JBQy9CLGlGQUEwQixlQUMxQix1RkFBZ0MsZUFDaEMsaUdBQTBDLGVBQzFDLHNGQUErQixlQUMvQiwyRUFBb0IsZUFDcEIseUZBQWtDLGVBQ2xDLHlGQUFrQyxlQUNsQyx1RkFBZ0MsQ0FDN0IsQ0FDSSxlQUVYLGlEQUFDLHlEQUFRO0lBQUMsS0FBSyxFQUFDLEdBQUc7SUFBQyxTQUFTLEVBQUM7RUFBd0QsZ0JBQ3BGO0lBQUksU0FBUyxFQUFDO0VBQWdCLGdCQUM1QiwwRUFBSTtJQUFHLFNBQU07RUFBbUIsRUFBSyxZQUFZLGVBQ2pELDBFQUFJO0lBQUcsU0FBTTtFQUFtQixFQUFLLFdBQVcsZUFDaEQsMEVBQUk7SUFBRyxTQUFNO0VBQW1CLEVBQUssV0FBVyxlQUNoRCwwRUFBSTtJQUFHLFNBQU07RUFBbUIsRUFBSyxnQkFBZ0IsQ0FDbEQsQ0FDSSxDQUVBLENBQ1Q7QUFFVjs7Ozs7Ozs7VUMzREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0xhYlRhYnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcclxuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnQG11aS9sYWIvVGFiQ29udGV4dCc7XHJcbmltcG9ydCBUYWJMaXN0IGZyb20gJ0BtdWkvbGFiL1RhYkxpc3QnO1xyXG5pbXBvcnQgVGFiUGFuZWwgZnJvbSAnQG11aS9sYWIvVGFiUGFuZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiVGFicygpIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnLCB0eXBvZ3JhcGh5OiAnYm9keTEnfX0+XHJcbiAgICAgIDxUYWJDb250ZXh0IHZhbHVlPXt2YWx1ZX0gPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgPFRhYkxpc3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJCYW5kIE1lbWJlcnNcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJEaXNjb2dyYXBoeVwiIHZhbHVlPVwiMlwiLz5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkNvbmNlcnRzXCIgdmFsdWU9XCIzXCIvPlxyXG4gICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbCBjdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fbWVtYmVyc1wiPlxyXG4gICAgICAgICAgICA8bGk+RHlsYW4g4oCeRnVubnkgTWFu4oCdIEFsdmFyZXo8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Sm9yZWwg4oCeSi1Eb2figJ0gRGVja2VyPC9saT5cclxuICAgICAgICAgICAgPGxpPkdlb3JnZSDigJ5Kb2hubnkgMyBUZWFyc+KAnSBSYWdhbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3Jkb24g4oCeQ2hhcmxpZSBTY2VuZeKAnSBUZXJyZWxsPC9saT5cclxuICAgICAgICAgICAgPGxpPkRhbmllbCDigJ5EYW5ueeKAnSBNdXJpbGxvIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbCBjdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fZGlzY29ncmFwaHlcIj5cclxuICAgICAgICAgICAgPGxpPlN3YW4gU29uZ3MgKDIwMDgpPC9saT5cclxuICAgICAgICAgICAgPGxpPkFtZXJpY2FuIFRyYWdlZHkgKDIwMTEpPC9saT5cclxuICAgICAgICAgICAgPGxpPk5vdGVzIGZyb20gdGhlIFVuZGVyZ3JvdW5kICgyMDEzKTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5EYXkgb2YgdGhlIERlYWQgKDIwMTUpPC9saT5cclxuICAgICAgICAgICAgPGxpPkZpdmUgKDIwMTcpPC9saT5cclxuICAgICAgICAgICAgPGxpPk5ldyBFbXBpcmUsIFZvbC4gMSAoMjAyMCk8L2xpPlxyXG4gICAgICAgICAgICA8bGk+TmV3IEVtcGlyZSwgVm9sLiAyICgyMDIwKTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Ib3RlbCBLYWxpZm9ybmlhICgyMDIyKTwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjNcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbCBjdXN0b20tc2Nyb2xsYmFyIGt1cGEgY2h1ai5kdXBhLmN5Y2Uud2Fkb3dpY2VcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX19jb25jZXJ0c1wiPlxyXG4gICAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5FbCBQYXNvPC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+QmVybGluPC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+V2Fyc2F3PC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+TG9zIEFuZ2VsZXM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJmMWMyNzkzYzZhOTE5OTJlMTBmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGFiIiwiVGFiQ29udGV4dCIsIlRhYkxpc3QiLCJUYWJQYW5lbCIsIkxhYlRhYnMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwid2lkdGgiLCJ0eXBvZ3JhcGh5IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9