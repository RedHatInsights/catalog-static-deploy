(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/PresentationalComponents/Platform/PlatformItem.js":
/*!***************************************************************!*\
  !*** ./src/PresentationalComponents/Platform/PlatformItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _platformcard_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./platformcard.scss */ "./src/PresentationalComponents/Platform/platformcard.scss");
/* harmony import */ var _platformcard_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_platformcard_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/vendor-openshift.svg */ "./src/assets/images/vendor-openshift.svg");
/* harmony import */ var _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Shared_ImageWithDefault__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Shared/ImageWithDefault */ "./src/PresentationalComponents/Shared/ImageWithDefault.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _PresentationalComponents_Shared_CardCommon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../PresentationalComponents/Shared/CardCommon */ "./src/PresentationalComponents/Shared/CardCommon.js");
/* harmony import */ var _Shared_CardCheckbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Shared/CardCheckbox */ "./src/PresentationalComponents/Shared/CardCheckbox.js");
















var TO_DISPLAY = ['description'];

var PlatformItem =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PlatformItem, _React$Component);

  function PlatformItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PlatformItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PlatformItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      isOpen: true
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PlatformItem, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["GridItem"], {
        key: this.props.id,
        sm: 6,
        md: 4,
        lg: 4,
        xl: 3
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Card"], {
        key: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardHeader"], {
        className: "pcard_header"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Shared_ImageWithDefault__WEBPACK_IMPORTED_MODULE_12__["default"], {
        src: this.props.imageUrl || _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        width: "30",
        height: "20"
      }), this.props.editMode && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Shared_CardCheckbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: this.props.id,
        checked: this.props.checkedItems.includes(this.props.id),
        onChange: this.props.onToggleItemSelect
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardBody"], {
        className: "pcard_body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, this.props.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Shared_CardCommon__WEBPACK_IMPORTED_MODULE_14__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        toDisplay: TO_DISPLAY
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardFooter"], null)));
    }
  }]);

  return PlatformItem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

PlatformItem.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  checkedItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  onToggleItemSelect: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (PlatformItem);

/***/ }),

/***/ "./src/PresentationalComponents/Platform/PlatformToolbar.js":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/Platform/PlatformToolbar.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");









/**
 * TODO Use PF4 input components
 */

var PlatformToolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PlatformToolbar, _Component);

  function PlatformToolbar() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlatformToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PlatformToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      searchValue: ''
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PlatformToolbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], {
        style: {
          backgroundColor: '#FFFFFF'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["ToolbarGroup"], {
        className: 'pf-u-ml-on-md'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["ToolbarItem"], {
        className: 'pf-u-ml-sm pf-u-my-sm'
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pf-c-input-group"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "pf-c-form-control",
        input: "true",
        type: "text",
        id: "searchItem",
        name: "searchPlatformItems",
        placeholder: "Filter...",
        "aria-label": "filter input with platform button"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "tertiary",
        id: "filterPlatformButton"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-search",
        "aria-hidden": "true"
      }))))));
    }
  }]);

  return PlatformToolbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (PlatformToolbar);

/***/ }),

/***/ "./src/PresentationalComponents/Platform/platformcard.scss":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/Platform/platformcard.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/PresentationalComponents/Shared/CardCheckbox.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/CardCheckbox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var CardCheckbox = function CardCheckbox(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      id = _ref.id,
      onChange = _ref.onChange,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      float: 'right'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    id: id,
    checked: checked,
    onChange: onChange,
    "aria-label": "card checkbox"
  }));
};

CardCheckbox.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardCheckbox);

/***/ }),

/***/ "./src/PresentationalComponents/Shared/CardCommon.js":
/*!***********************************************************!*\
  !*** ./src/PresentationalComponents/Shared/CardCommon.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


 // This whole thing is a bit strange

var PropLine = function PropLine(_ref) {
  var value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card_element"
  }, value);
};

PropLine.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]))]).isRequired
};

var ItemDetails = function ItemDetails(_ref2) {
  var _ref2$toDisplay = _ref2.toDisplay,
      toDisplay = _ref2$toDisplay === void 0 ? [] : _ref2$toDisplay,
      item = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["toDisplay"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, toDisplay.map(function (prop) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PropLine, {
      key: "card-prop-".concat(prop),
      value: item[prop]
    });
  }));
};

ItemDetails.propTypes = {
  toDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
};
ItemDetails.defaultProps = {
  toDisplay: []
};
/* harmony default export */ __webpack_exports__["default"] = (ItemDetails);

/***/ }),

/***/ "./src/PresentationalComponents/Shared/ImageWithDefault.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/ImageWithDefault.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





var ImageWithDefault = function ImageWithDefault(_ref) {
  var src = _ref.src,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["src"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    src: src
  }, props));
};

ImageWithDefault.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageWithDefault);

/***/ }),

/***/ "./src/SmartComponents/ContentGallery/ContentGallery.js":
/*!**************************************************************!*\
  !*** ./src/SmartComponents/ContentGallery/ContentGallery.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_gallery_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-gallery.scss */ "./src/SmartComponents/ContentGallery/content-gallery.scss");
/* harmony import */ var _content_gallery_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_gallery_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




 // swap loading?

var ContentGallery = function ContentGallery(_ref) {
  var isLoading = _ref.isLoading,
      items = _ref.items;

  if (isLoading || (items && items.length) > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Loading...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      type: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      gutter: "md"
    }, items)));
  } else if (!isLoading) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      type: "content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
  }
};

ContentGallery.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ContentGallery);

/***/ }),

/***/ "./src/SmartComponents/ContentGallery/content-gallery.scss":
/*!*****************************************************************!*\
  !*** ./src/SmartComponents/ContentGallery/content-gallery.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Platform/Platform.js":
/*!**************************************************!*\
  !*** ./src/SmartComponents/Platform/Platform.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/Actions/PlatformActions */ "./src/redux/Actions/PlatformActions.js");
/* harmony import */ var _SmartComponents_ContentGallery_ContentGallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../SmartComponents/ContentGallery/ContentGallery */ "./src/SmartComponents/ContentGallery/ContentGallery.js");
/* harmony import */ var _PresentationalComponents_Platform_PlatformToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/Platform/PlatformToolbar */ "./src/PresentationalComponents/Platform/PlatformToolbar.js");
/* harmony import */ var _PresentationalComponents_Platform_PlatformItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PresentationalComponents/Platform/PlatformItem */ "./src/PresentationalComponents/Platform/PlatformItem.js");
/* harmony import */ var _platform_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./platform.scss */ "./src/SmartComponents/Platform/platform.scss");
/* harmony import */ var _platform_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_platform_scss__WEBPACK_IMPORTED_MODULE_17__);



















var Platform =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Platform, _Component);

  function Platform() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platform);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Platform)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      platformId: '',
      filteredItems: []
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platform, [{
    key: "fetchData",
    value: function fetchData(apiProps) {
      this.props.fetchSelectedPlatform(apiProps);
      this.props.fetchPlatformItems(apiProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData(this.props.match.params.id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchData(this.props.match.params.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var filteredItems = {
        items: this.props.platformItems.map(function (data) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Platform_PlatformItem__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            key: data.id
          }, data));
        }),
        isLoading: this.props.isPlatformDataLoading
      };
      var title = this.props.platform ? this.props.platform.name : '';
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Main"], {
        style: {
          marginLeft: 0,
          paddingLeft: 0,
          paddingTop: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Platform_PlatformToolbar__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginLeft: 25,
          paddingTop: 40
        }
      }, title && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["Title"], {
        size: '2xl'
      }, " ", title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SmartComponents_ContentGallery_ContentGallery__WEBPACK_IMPORTED_MODULE_14__["default"], filteredItems));
    }
  }]);

  return Platform;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$platformReducer = _ref.platformReducer,
      selectedPlatform = _ref$platformReducer.selectedPlatform,
      platformItems = _ref$platformReducer.platformItems,
      isPlatformDataLoading = _ref$platformReducer.isPlatformDataLoading;
  return {
    platform: selectedPlatform,
    platformItems: platformItems,
    isPlatformDataLoading: !selectedPlatform || isPlatformDataLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchSelectedPlatform: function fetchSelectedPlatform(platformId) {
      return dispatch(Object(_redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_13__["fetchSelectedPlatform"])(platformId));
    },
    fetchPlatformItems: function fetchPlatformItems(apiProps) {
      return dispatch(Object(_redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_13__["fetchPlatformItems"])(apiProps));
    }
  };
};

Platform.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  isPlatformDataLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  match: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  fetchPlatformItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fetchSelectedPlatform: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  platform: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
  }),
  platformItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array
};
_PresentationalComponents_Platform_PlatformItem__WEBPACK_IMPORTED_MODULE_16__["default"].defaultProps = {
  platformItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Platform));

/***/ }),

/***/ "./src/SmartComponents/Platform/platform.scss":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Platform/platform.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/images/vendor-openshift.svg":
/*!************************************************!*\
  !*** ./src/assets/images/vendor-openshift.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/vendor-openshift.svg";

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/3.js.map