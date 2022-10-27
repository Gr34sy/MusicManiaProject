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






function LabTabs(albums) {
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
    }, album);
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
/******/ 	__webpack_require__.h = () => ("a5c33ce6b0819c11a111")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNWM3OGQ4MWI0ODBkMzg1MDNmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDQTtBQUNTO0FBQ047QUFDRTtBQUUxQixTQUFTTSxPQUFPLENBQUNDLE1BQU0sRUFBRTtFQUN0QyxzQkFBMEJQLDJDQUFjLENBQUMsR0FBRyxDQUFDO0lBQUE7SUFBdENTLEtBQUs7SUFBRUMsUUFBUTtFQUV0QixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztJQUN4Q0gsUUFBUSxDQUFDRyxRQUFRLENBQUM7RUFDcEIsQ0FBQztFQUVELG9CQUNFLGlEQUFDLHlEQUFHO0lBQUMsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRSxNQUFNO01BQUVDLFVBQVUsRUFBRTtJQUFPO0VBQUUsZ0JBQzdDLGlEQUFDLDJEQUFVO0lBQUMsS0FBSyxFQUFFTjtFQUFNLGdCQUN2QixpREFBQyx5REFBRztJQUFDLEVBQUUsRUFBRTtNQUFFTyxZQUFZLEVBQUUsQ0FBQztNQUFFQyxXQUFXLEVBQUU7SUFBVTtFQUFFLGdCQUNuRCxpREFBQyx3REFBTztJQUFDLFFBQVEsRUFBRU4sWUFBYTtJQUFDLGNBQVc7RUFBc0IsZ0JBQ2hFLGlEQUFDLHlEQUFHO0lBQUMsS0FBSyxFQUFDLGNBQWM7SUFBQyxLQUFLLEVBQUM7RUFBRyxFQUFFLGVBQ3JDLGlEQUFDLHlEQUFHO0lBQUMsS0FBSyxFQUFDLGFBQWE7SUFBQyxLQUFLLEVBQUM7RUFBRyxFQUFFLGVBQ3BDLGlEQUFDLHlEQUFHO0lBQUMsS0FBSyxFQUFDLFlBQVk7SUFBQyxLQUFLLEVBQUM7RUFBRyxFQUFFLENBQzNCLENBQ04sZUFDTixpREFBQyx5REFBUTtJQUFDLEtBQUssRUFBQyxHQUFHO0lBQUMsU0FBUyxFQUFDO0VBQTJCLGdCQUN2RDtJQUFJLFNBQVMsRUFBQztFQUFlLGdCQUMzQixtR0FBa0MsZUFDbEMsOEZBQTZCLGVBQzdCLHVHQUFzQyxlQUN0Qyx3R0FBdUMsZUFDdkMsaUdBQWdDLENBQzdCLENBQ0ksZUFFWCxpREFBQyx5REFBUTtJQUFDLEtBQUssRUFBQyxHQUFHO0lBQUMsU0FBUyxFQUFDO0VBQTJCLGdCQUN2RDtJQUFJLFNBQVMsRUFBQztFQUFtQixHQUM5QkosTUFBTSxDQUFDVyxHQUFHLENBQ1QsVUFBQ0MsS0FBSyxFQUFDQyxFQUFFO0lBQUEsb0JBQ1I7TUFBSSxHQUFHLEVBQUVBO0lBQUcsR0FBRUQsS0FBSyxDQUFNO0VBQUEsQ0FBQyxDQUM1QixDQUNFLENBQ0ksZUFFWCxpREFBQyx5REFBUTtJQUFDLEtBQUssRUFBQyxHQUFHO0lBQUMsU0FBUyxFQUFDO0VBQXdELGdCQUNwRjtJQUFJLFNBQVMsRUFBQztFQUFpQixnQkFDN0IsMEVBQUk7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBSyxZQUFZLGVBQ3JELDBFQUFJO0lBQUcsU0FBUyxFQUFDO0VBQW1CLEVBQUssV0FBVyxlQUNwRCwwRUFBSTtJQUFHLFNBQVMsRUFBQztFQUFtQixFQUFLLFdBQVcsZUFDcEQsMEVBQUk7SUFBRyxTQUFTLEVBQUM7RUFBbUIsRUFBSyxnQkFBZ0IsQ0FDdEQsQ0FDSSxDQUVBLENBQ1Q7QUFFVjs7Ozs7Ozs7VUN2REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9wYWdlL2pzL0xhYlRhYnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcclxuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnQG11aS9sYWIvVGFiQ29udGV4dCc7XHJcbmltcG9ydCBUYWJMaXN0IGZyb20gJ0BtdWkvbGFiL1RhYkxpc3QnO1xyXG5pbXBvcnQgVGFiUGFuZWwgZnJvbSAnQG11aS9sYWIvVGFiUGFuZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFiVGFicyhhbGJ1bXMpIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnLCB0eXBvZ3JhcGh5OiAnYm9keTEnfX0+XHJcbiAgICAgIDxUYWJDb250ZXh0IHZhbHVlPXt2YWx1ZX0gPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgPFRhYkxpc3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJCYW5kIE1lbWJlcnNcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJEaXNjb2dyYXBoeVwiIHZhbHVlPVwiMlwiLz5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlRvcCBUcmFja3NcIiB2YWx1ZT1cIjNcIi8+XHJcbiAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMVwiIGNsYXNzTmFtZT1cInRhYlBhbmVsIGN1c3RvbS1zY3JvbGxiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX19tZW1iZXJzXCI+XHJcbiAgICAgICAgICAgIDxsaT5EeWxhbiDigJ5GdW5ueSBNYW7igJ0gQWx2YXJlejwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3JlbCDigJ5KLURvZ+KAnSBEZWNrZXI8L2xpPlxyXG4gICAgICAgICAgICA8bGk+R2VvcmdlIOKAnkpvaG5ueSAzIFRlYXJz4oCdIFJhZ2FuPC9saT5cclxuICAgICAgICAgICAgPGxpPkpvcmRvbiDigJ5DaGFybGllIFNjZW5l4oCdIFRlcnJlbGw8L2xpPlxyXG4gICAgICAgICAgICA8bGk+RGFuaWVsIOKAnkRhbm554oCdIE11cmlsbG8gPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMlwiIGNsYXNzTmFtZT1cInRhYlBhbmVsIGN1c3RvbS1zY3JvbGxiYXJcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX19kaXNjb2dyYXBoeVwiPlxyXG4gICAgICAgICAgICB7YWxidW1zLm1hcChcclxuICAgICAgICAgICAgICAoYWxidW0saWQpPT5cclxuICAgICAgICAgICAgICAoPGxpIGtleT17aWR9PnthbGJ1bX08L2xpPilcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiM1wiIGNsYXNzTmFtZT1cInRhYlBhbmVsIGN1c3RvbS1zY3JvbGxiYXIga3VwYSBjaHVqIGR1cGEgY3ljZSB3YWRvd2ljZVwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRfX3RvcHRyYWNrc1wiPlxyXG4gICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+RWwgUGFzbzwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tdXNpY1wiPjwvaT5CZXJsaW48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbXVzaWNcIj48L2k+V2Fyc2F3PC9saT5cclxuICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLW11c2ljXCI+PC9pPkxvcyBBbmdlbGVzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgIDwvVGFiQ29udGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNWMzM2NlNmIwODE5YzExYTExMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlRhYiIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJMYWJUYWJzIiwiYWxidW1zIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIndpZHRoIiwidHlwb2dyYXBoeSIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwibWFwIiwiYWxidW0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=