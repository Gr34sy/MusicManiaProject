"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(189);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var _mui_lab_TabList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var _mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);
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
    className: "tabPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card__members"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Dylan \u201EFunny Man\u201D Alvarez"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jorel \u201EJ-Dog\u201D Decker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "George \u201EJohnny 3 Tears\u201D Ragan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jordon \u201ECharlie Scene\u201D Terrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Daniel \u201EDanny\u201D Murillo "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "2",
    className: "tabPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card__members"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Swan Songs (2008)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jorel \u201EJ-Dog\u201D Decker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "George \u201EJohnny 3 Tears\u201D Ragan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jordon \u201ECharlie Scene\u201D Terrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Daniel \u201EDanny\u201D Murillo "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "George \u201EJohnny 3 Tears\u201D Ragan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jordon \u201ECharlie Scene\u201D Terrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Daniel \u201EDanny\u201D Murillo "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Dylan \u201EFunny Man\u201D Alvarez"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jorel \u201EJ-Dog\u201D Decker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "George \u201EJohnny 3 Tears\u201D Ragan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jordon \u201ECharlie Scene\u201D Terrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Daniel \u201EDanny\u201D Murillo "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "George \u201EJohnny 3 Tears\u201D Ragan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Jordon \u201ECharlie Scene\u201D Terrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Daniel \u201EDanny\u201D Murillo "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "3",
    className: "tabPanel"
  }, "Item Thre")));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8c18af90766274ae8e08")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NWIwOGNmNDUyZGFkYjE2OWMyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0s7QUFDQTtBQUNTO0FBQ047QUFDRTtBQUUxQixTQUFTTSxPQUFPLEdBQUc7RUFDaEMsc0JBQTBCTiwyQ0FBYyxDQUFDLEdBQUcsQ0FBQztJQUFBO0lBQXRDUSxLQUFLO0lBQUVDLFFBQVE7RUFFdEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7SUFDeENILFFBQVEsQ0FBQ0csUUFBUSxDQUFDO0VBQ3BCLENBQUM7RUFFRCxvQkFDRSxpREFBQyx5REFBRztJQUFDLEVBQUUsRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBTTtNQUFFQyxVQUFVLEVBQUU7SUFBTztFQUFFLGdCQUM3QyxpREFBQywyREFBVTtJQUFDLEtBQUssRUFBRU47RUFBTSxnQkFDdkIsaURBQUMseURBQUc7SUFBQyxFQUFFLEVBQUU7TUFBRU8sWUFBWSxFQUFFLENBQUM7TUFBRUMsV0FBVyxFQUFFO0lBQVU7RUFBRSxnQkFDbkQsaURBQUMsd0RBQU87SUFBQyxRQUFRLEVBQUVOLFlBQWE7SUFBQyxjQUFXO0VBQXNCLGdCQUNoRSxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxjQUFjO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNyQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxhQUFhO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxlQUNwQyxpREFBQyx5REFBRztJQUFDLEtBQUssRUFBQyxVQUFVO0lBQUMsS0FBSyxFQUFDO0VBQUcsRUFBRSxDQUN6QixDQUNOLGVBQ04saURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUFVLGdCQUN0QztJQUFJLFNBQVMsRUFBQztFQUFlLGdCQUMzQixtR0FBa0MsZUFDbEMsOEZBQTZCLGVBQzdCLHVHQUFzQyxlQUN0Qyx3R0FBdUMsZUFDdkMsaUdBQWdDLENBQzdCLENBQ0ksZUFFWCxpREFBQyx5REFBUTtJQUFDLEtBQUssRUFBQyxHQUFHO0lBQUMsU0FBUyxFQUFDO0VBQVUsZ0JBQ3hDO0lBQUksU0FBUyxFQUFDO0VBQWUsZ0JBQ3pCLGlGQUEwQixlQUMxQiw4RkFBNkIsZUFDN0IsdUdBQXNDLGVBQ3RDLHdHQUF1QyxlQUN2QyxpR0FBZ0MsZUFDaEMsdUdBQXNDLGVBQ3RDLHdHQUF1QyxlQUN2QyxpR0FBZ0MsZUFDaEMsbUdBQWtDLGVBQ2xDLDhGQUE2QixlQUM3Qix1R0FBc0MsZUFDdEMsd0dBQXVDLGVBQ3ZDLGlHQUFnQyxlQUNoQyx1R0FBc0MsZUFDdEMsd0dBQXVDLGVBQ3ZDLGlHQUFnQyxDQUM3QixDQUNJLGVBRVgsaURBQUMseURBQVE7SUFBQyxLQUFLLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUFVLGVBRTdCLENBRUEsQ0FDVDtBQUVWOzs7Ozs7OztVQzlEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvTGFiVGFicy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xyXG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICdAbXVpL2xhYi9UYWJDb250ZXh0JztcclxuaW1wb3J0IFRhYkxpc3QgZnJvbSAnQG11aS9sYWIvVGFiTGlzdCc7XHJcbmltcG9ydCBUYWJQYW5lbCBmcm9tICdAbXVpL2xhYi9UYWJQYW5lbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYWJUYWJzKCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIHR5cG9ncmFwaHk6ICdib2R5MSd9fT5cclxuICAgICAgPFRhYkNvbnRleHQgdmFsdWU9e3ZhbHVlfSA+XHJcbiAgICAgICAgPEJveCBzeD17eyBib3JkZXJCb3R0b206IDEsIGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX0+XHJcbiAgICAgICAgICA8VGFiTGlzdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkJhbmQgTWVtYmVyc1wiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkRpc2NvZ3JhcGh5XCIgdmFsdWU9XCIyXCIvPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiQ29uY2VydHNcIiB2YWx1ZT1cIjNcIi8+XHJcbiAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMVwiIGNsYXNzTmFtZT1cInRhYlBhbmVsXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZF9fbWVtYmVyc1wiPlxyXG4gICAgICAgICAgICA8bGk+RHlsYW4g4oCeRnVubnkgTWFu4oCdIEFsdmFyZXo8L2xpPlxyXG4gICAgICAgICAgICA8bGk+Sm9yZWwg4oCeSi1Eb2figJ0gRGVja2VyPC9saT5cclxuICAgICAgICAgICAgPGxpPkdlb3JnZSDigJ5Kb2hubnkgMyBUZWFyc+KAnSBSYWdhbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3Jkb24g4oCeQ2hhcmxpZSBTY2VuZeKAnSBUZXJyZWxsPC9saT5cclxuICAgICAgICAgICAgPGxpPkRhbmllbCDigJ5EYW5ueeKAnSBNdXJpbGxvIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkX19tZW1iZXJzXCI+XHJcbiAgICAgICAgICAgIDxsaT5Td2FuIFNvbmdzICgyMDA4KTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3JlbCDigJ5KLURvZ+KAnSBEZWNrZXI8L2xpPlxyXG4gICAgICAgICAgICA8bGk+R2VvcmdlIOKAnkpvaG5ueSAzIFRlYXJz4oCdIFJhZ2FuPC9saT5cclxuICAgICAgICAgICAgPGxpPkpvcmRvbiDigJ5DaGFybGllIFNjZW5l4oCdIFRlcnJlbGw8L2xpPlxyXG4gICAgICAgICAgICA8bGk+RGFuaWVsIOKAnkRhbm554oCdIE11cmlsbG8gPC9saT5cclxuICAgICAgICAgICAgPGxpPkdlb3JnZSDigJ5Kb2hubnkgMyBUZWFyc+KAnSBSYWdhbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3Jkb24g4oCeQ2hhcmxpZSBTY2VuZeKAnSBUZXJyZWxsPC9saT5cclxuICAgICAgICAgICAgPGxpPkRhbmllbCDigJ5EYW5ueeKAnSBNdXJpbGxvIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5EeWxhbiDigJ5GdW5ueSBNYW7igJ0gQWx2YXJlejwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3JlbCDigJ5KLURvZ+KAnSBEZWNrZXI8L2xpPlxyXG4gICAgICAgICAgICA8bGk+R2VvcmdlIOKAnkpvaG5ueSAzIFRlYXJz4oCdIFJhZ2FuPC9saT5cclxuICAgICAgICAgICAgPGxpPkpvcmRvbiDigJ5DaGFybGllIFNjZW5l4oCdIFRlcnJlbGw8L2xpPlxyXG4gICAgICAgICAgICA8bGk+RGFuaWVsIOKAnkRhbm554oCdIE11cmlsbG8gPC9saT5cclxuICAgICAgICAgICAgPGxpPkdlb3JnZSDigJ5Kb2hubnkgMyBUZWFyc+KAnSBSYWdhbjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5Kb3Jkb24g4oCeQ2hhcmxpZSBTY2VuZeKAnSBUZXJyZWxsPC9saT5cclxuICAgICAgICAgICAgPGxpPkRhbmllbCDigJ5EYW5ueeKAnSBNdXJpbGxvIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjNcIiBjbGFzc05hbWU9XCJ0YWJQYW5lbFwiPlxyXG4gICAgICAgICAgSXRlbSBUaHJlXHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuXHJcbiAgICAgIDwvVGFiQ29udGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YzE4YWY5MDc2NjI3NGFlOGUwOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlRhYiIsIlRhYkNvbnRleHQiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJMYWJUYWJzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIndpZHRoIiwidHlwb2dyYXBoeSIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==