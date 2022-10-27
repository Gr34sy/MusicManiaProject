"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistComparison": () => (/* binding */ ArtistComparison)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ArtistComparison() {
  var rootAPI = 'http://ws.audioscrobbler.com/2.0';
  var keyAPI = '4d2a662e3ae0be5759a731d889e084d1';
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    comparisonFilterValue = _useState4[0],
    setComparisonFilterValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    comparisonFilter = _useState6[0],
    setComparisonFilter = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (comparisonFilterValue) {
      //setting artistdetails state
      fetch("".concat(rootAPI, "/?method=artist.getsimilar&artist=").concat(detailsFilterValue, "&api_key=").concat(keyAPI, "&format=json")).then(function (response) {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setComparisonFilter(data.artist);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, [comparisonFilterValue]);
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "artist-comparison"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "comparison-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "comparison__title"
  }, "Search artists similar to your ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "favorite!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "comparison__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "comparison__input",
    onChange: handleInputChange,
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "main-page__button",
    onCLick: setComparisonFilter
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e5d61efab0676b1cb1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZGFiM2Q2NWEyNTVjNjI2MDUwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDRztBQUNjO0FBRXJDLFNBQVNJLGdCQUFnQixHQUFFO0VBQzlCLElBQU1DLE9BQU8sR0FBRyxrQ0FBa0M7RUFDbEQsSUFBTUMsTUFBTSxHQUFHLGtDQUFrQztFQUVqRCxnQkFBb0NILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBekNJLFVBQVU7SUFBRUMsYUFBYTtFQUVoQyxpQkFBMERMLCtDQUFRLEVBQUU7SUFBQTtJQUE3RE0scUJBQXFCO0lBQUVDLHdCQUF3QjtFQUN0RCxpQkFBZ0RQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBckRRLGdCQUFnQjtJQUFFQyxtQkFBbUI7RUFFNUNWLGdEQUFTLENBQUMsWUFBSTtJQUNWLElBQUdPLHFCQUFxQixFQUFDO01BQ3JCO01BQ0FJLEtBQUssV0FBSVIsT0FBTywrQ0FBcUNTLGtCQUFrQixzQkFBWVIsTUFBTSxrQkFBZSxDQUN2R1MsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtRQUNkLElBQUdBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDO1VBQ1gsT0FBT0QsUUFBUTtRQUNuQjtRQUNBLE1BQU1FLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLENBQUM7TUFDaEMsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBQyxVQUFBQyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDSSxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQ2pDTCxJQUFJLENBQUcsVUFBQU0sSUFBSTtRQUFBLE9BQUlULG1CQUFtQixDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQztNQUFBLEVBQUMsU0FDM0MsQ0FBQyxVQUFBQyxHQUFHO1FBQUEsT0FBSUMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDckM7RUFDSixDQUFDLEVBQUMsQ0FBQ2QscUJBQXFCLENBQUMsQ0FBQztFQUUxQixTQUFTaUIsaUJBQWlCLENBQUNDLENBQUMsRUFBQztJQUN6Qm5CLGFBQWEsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDakM7RUFFQSxvQkFDSTtJQUFTLFNBQVMsRUFBQztFQUFtQixnQkFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCO0lBQUksU0FBUyxFQUFDO0VBQW1CLG1EQUNFLHFGQUFzQixDQUNwRCxlQUVMO0lBQU0sU0FBUyxFQUFDO0VBQWtCLGdCQUM5QjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsU0FBUyxFQUFDLG1CQUFtQjtJQUFDLFFBQVEsRUFBRUgsaUJBQWtCO0lBQUMsS0FBSyxFQUFFbkI7RUFBVyxFQUFFLGVBQ2xHO0lBQVEsU0FBUyxFQUFDLG1CQUFtQjtJQUFDLE9BQU8sRUFBRUs7RUFBb0IsWUFBZ0IsQ0FDaEYsZUFDUDtJQUFLLFNBQVMsRUFBQztFQUFVLGdCQUNyQiwyREFBQyx1Q0FBSSxPQUFHLGVBQ1IsMkRBQUMsdUNBQUksT0FBRSxlQUNQLDJEQUFDLHVDQUFJLE9BQUUsZUFDUCwyREFBQyx1Q0FBSSxPQUFFLENBQ0wsQ0FDSixDQUNBO0FBRWxCOzs7Ozs7OztVQ3JEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3BhZ2UvanMvQXJ0aXN0Q29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpc3RDb21wYXJpc29uKCl7XHJcbiAgICBjb25zdCByb290QVBJID0gJ2h0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wJztcclxuICAgIGNvbnN0IGtleUFQSSA9ICc0ZDJhNjYyZTNhZTBiZTU3NTlhNzMxZDg4OWUwODRkMSc7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtjb21wYXJpc29uRmlsdGVyVmFsdWUsIHNldENvbXBhcmlzb25GaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2NvbXBhcmlzb25GaWx0ZXIsIHNldENvbXBhcmlzb25GaWx0ZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNvbXBhcmlzb25GaWx0ZXJWYWx1ZSl7XHJcbiAgICAgICAgICAgIC8vc2V0dGluZyBhcnRpc3RkZXRhaWxzIHN0YXRlXHJcbiAgICAgICAgICAgIGZldGNoKGAke3Jvb3RBUEl9Lz9tZXRob2Q9YXJ0aXN0LmdldHNpbWlsYXImYXJ0aXN0PSR7ZGV0YWlsc0ZpbHRlclZhbHVlfSZhcGlfa2V5PSR7a2V5QVBJfSZmb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4gKCBkYXRhID0+IHNldENvbXBhcmlzb25GaWx0ZXIoZGF0YS5hcnRpc3QpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbY29tcGFyaXNvbkZpbHRlclZhbHVlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKXtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aXN0LWNvbXBhcmlzb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJpc29uLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIGFydGlzdHMgc2ltaWxhciB0byB5b3VyIDxzcGFuPmZhdm9yaXRlITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29tcGFyaXNvbl9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNvbXBhcmlzb25fX2lucHV0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17aW5wdXRWYWx1ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFpbi1wYWdlX19idXR0b25cIiBvbkNMaWNrPXtzZXRDb21wYXJpc29uRmlsdGVyfT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlNWQ2MWVmYWIwNjc2YjFjYjFkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aXN0Q29tcGFyaXNvbiIsInJvb3RBUEkiLCJrZXlBUEkiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNvbXBhcmlzb25GaWx0ZXJWYWx1ZSIsInNldENvbXBhcmlzb25GaWx0ZXJWYWx1ZSIsImNvbXBhcmlzb25GaWx0ZXIiLCJzZXRDb21wYXJpc29uRmlsdGVyIiwiZmV0Y2giLCJkZXRhaWxzRmlsdGVyVmFsdWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJhcnRpc3QiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=