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
  }, albums.map(function (album, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: id
    }, "album");
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
/******/ 	__webpack_require__.h = () => ("f665d3e8ceff02265e97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNGY3N2M5NDdiMmZkMWUxNjJhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDQTtBQUNTO0FBQ047QUFDRTtBQUUxQixTQUFTTSxPQUFPLE9BQVc7RUFBQSxJQUFUQyxNQUFNLFFBQU5BLE1BQU07RUFDckMsc0JBQTBCUCwyQ0FBYyxDQUFDLEdBQUcsQ0FBQztJQUFBO0lBQXRDUyxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7SUFDeENILFFBQVEsQ0FBQ0csUUFBUSxDQUFDO0VBQ3BCLENBQUM7RUFFRCxvQkFDRSxpREFBQyx5REFBRztJQUFDLEVBQUUsRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxVQUFVLEVBQUU7SUFBTztFQUFFLGdCQUM3QyxpREFBQywyREFBVTtJQUFDLEtBQUssRUFBRU47RUFBTSxnQkFDdkIsaURBQUMseURBQUc7SUFBQyxFQUFFLEVBQUU7TUFBRU8sWUFBWSxFQUFFLENBQUM7TUFBRUMsV0FBVyxFQUFFO0lBQVU7RUFBRSxnQkFDbkQsaURBQUMsd0RBQU87SUFBQyxRQUFRLEVBQUVOLFlBQWE7SUFBQyxjQUFXO0VBQXNCLGdCQUNoRSxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxjQUFjO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNyQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxhQUFhO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNwQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxZQUFZO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxDQUMzQixDQUNOLGVBQ04saURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBZSxnQkFDM0IsbUdBQWtDLGVBQ2xDLDhGQUE2QixlQUM3Qix1R0FBc0MsZUFDdEMsd0dBQXVDLGVBQ3ZDLGlHQUFnQyxDQUM3QixDQUNJLGVBRVgsaURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUEyQixnQkFDdkQ7SUFBSSxTQUFTLEVBQUM7RUFBbUIsR0FDOUJKLE1BQU0sQ0FBQ1csR0FBRyxDQUNULFVBQUNDLEtBQUssRUFBQ0MsRUFBRTtJQUFBLG9CQUNSO01BQUksR0FBRyxFQUFFQTtJQUFHLFdBQVc7RUFBQSxDQUFDLENBQzFCLENBQ0UsQ0FDSSxlQUVYLGlEQUFDLHlEQUFRO0lBQUMsS0FBSyxFQUFDLEdBQUc7SUFBQyxTQUFTLEVBQUM7RUFBd0QsZ0JBQ3BGO0lBQUksU0FBUyxFQUFDO0VBQWlCLGdCQUM3QiwwRUFBSTtJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFLLFlBQVksZUFDckQsMEVBQUk7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBSyxXQUFXLGVBQ3BELDBFQUFJO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUssV0FBVyxlQUNwRCwwRUFBSTtJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFLLGdCQUFnQixDQUN0RCxDQUNJLENBRUEsQ0FDVDtBQUVWOzs7Ozs7OztVQ3ZEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvTGFiVGFicy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xyXG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICdAbXVpL2xhYi9UYWJDb250ZXh0JztcclxuaW1wb3J0IFRhYkxpc3QgZnJvbSAnQG11aS9sYWIvVGFiTGlzdCc7XHJcbmltcG9ydCBUYWJQYW5lbCBmcm9tICdAbXVpL2xhYi9UYWJQYW5lbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYWJUYWJzKHthbGJ1bXN9KSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3sgd2lkdGg6ICcxMDAlJywgdHlwb2dyYXBoeTogJ2JvZHkxJ319PlxyXG4gICAgICA8VGFiQ29udGV4dCB2YWx1ZT17dmFsdWV9ID5cclxuICAgICAgICA8Qm94IHN4PXt7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJyB9fT5cclxuICAgICAgICAgIDxUYWJMaXN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGFyaWEtbGFiZWw9XCJsYWIgQVBJIHRhYnMgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiQmFuZCBNZW1iZXJzXCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiRGlzY29ncmFwaHlcIiB2YWx1ZT1cIjJcIi8+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJUb3AgVHJhY2tzXCIgdmFsdWU9XCIzXCIvPlxyXG4gICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbCBjdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fbWVtYmVyc1wiPlxyXG4gICAgICAgICAgICA8bGk+RHlsYW4g4oCeRnVubnkgTWFu4oCdIEFsdmFyZXo8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Sm9yZWwg4oCeSi1Eb2figJ0gRGVja2VyPC9saT5cclxuICAgICAgICAgICAgPGxpPkdlb3JnZSDigJ5Kb2hubnkgMyBUZWFyc+KAnSBSYWdhbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3Jkb24g4oCeQ2hhcmxpZSBTY2VuZeKAnSBUZXJyZWxsPC9saT5cclxuICAgICAgICAgICAgPGxpPkRhbmllbCDigJ5EYW5ueeKAnSBNdXJpbGxvIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbCBjdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fZGlzY29ncmFwaHlcIj5cclxuICAgICAgICAgICAge2FsYnVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgKGFsYnVtLGlkKT0+XHJcbiAgICAgICAgICAgICAgKDxsaSBrZXk9e2lkfT5hbGJ1bTwvbGk+KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIzXCIgY2xhc3NOYW1lPVwidGFiUGFuZWwgY3VzdG9tLXNjcm9sbGJhciBrdXBhIGNodWogZHVwYSBjeWNlIHdhZG93aWNlXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fdG9wdHJhY2tzXCI+XHJcbiAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5FbCBQYXNvPC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLW11c2ljXCI+PC9pPkJlcmxpbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5XYXJzYXc8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+TG9zIEFuZ2VsZXM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG5cclxuICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY2NjVkM2U4Y2VmZjAyMjY1ZTk3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGFiIiwiVGFiQ29udGV4dCIsIlRhYkxpc3QiLCJUYWJQYW5lbCIsIkxhYlRhYnMiLCJhbGJ1bXMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwid2lkdGgiLCJ0eXBvZ3JhcGh5IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJtYXAiLCJhbGJ1bSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==