(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/PresentationalComponents/Platform/PlatformCard.js":
/*!***************************************************************!*\
  !*** ./src/PresentationalComponents/Platform/PlatformCard.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/platform-default.svg */ "./src/assets/images/platform-default.svg");
/* harmony import */ var _assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/platform-openshift.svg */ "./src/assets/images/platform-openshift.svg");
/* harmony import */ var _assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/platform-amazon.png */ "./src/assets/images/platform-amazon.png");
/* harmony import */ var _assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Shared_ImageWithDefault__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Shared/ImageWithDefault */ "./src/PresentationalComponents/Shared/ImageWithDefault.js");
/* harmony import */ var _Shared_CardCommon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Shared/CardCommon */ "./src/PresentationalComponents/Shared/CardCommon.js");
/* harmony import */ var _platformcard_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platformcard.scss */ "./src/PresentationalComponents/Platform/platformcard.scss");
/* harmony import */ var _platformcard_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_platformcard_scss__WEBPACK_IMPORTED_MODULE_12__);













var TO_DISPLAY = ['description', 'modified']; // TO DO - use webpack to load all images

var platformTypeImg = {
  1: _assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  2: _assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9___default.a
};

var PlatformCard = function PlatformCard(_ref) {
  var name = _ref.name,
      id = _ref.id,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["name", "id"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GalleryItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/platforms/detail/".concat(id),
    className: "card-link"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    key: id,
    className: "content-gallery-card"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
    className: "pcard_header"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_ImageWithDefault__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: platformTypeImg[props.source_type_id] || _assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    width: "80",
    height: "40"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
    className: "pcard_body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", null, name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Shared_CardCommon__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    name: name
  }, props), {
    toDisplay: TO_DISPLAY
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null))));
};

PlatformCard.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  source_type_id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PlatformCard);

/***/ }),

/***/ "./src/PresentationalComponents/Platform/PlatformToolbar.js":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/Platform/PlatformToolbar.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Shared_top_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/top-toolbar */ "./src/PresentationalComponents/Shared/top-toolbar.js");
/* harmony import */ var _Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/FilterToolbarItem */ "./src/PresentationalComponents/Shared/FilterToolbarItem.js");
/* harmony import */ var _Shared_OrderToolbarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/OrderToolbarItem */ "./src/PresentationalComponents/Shared/OrderToolbarItem.js");







var PlatformToolbar = function PlatformToolbar(_ref) {
  var searchValue = _ref.searchValue,
      onFilterChange = _ref.onFilterChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_top_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Level"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    searchValue: searchValue,
    onFilterChange: onFilterChange,
    placeholder: "Find a product"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_OrderToolbarItem__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
};

PlatformToolbar.propTypes = {
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PlatformToolbar);

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/Actions/PlatformActions */ "./src/redux/Actions/PlatformActions.js");
/* harmony import */ var _SmartComponents_ContentGallery_ContentGallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../SmartComponents/ContentGallery/ContentGallery */ "./src/SmartComponents/ContentGallery/ContentGallery.js");
/* harmony import */ var _PresentationalComponents_Platform_PlatformToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/Platform/PlatformToolbar */ "./src/PresentationalComponents/Platform/PlatformToolbar.js");
/* harmony import */ var _PresentationalComponents_Platform_PlatformItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PresentationalComponents/Platform/PlatformItem */ "./src/PresentationalComponents/Platform/PlatformItem.js");
/* harmony import */ var _Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Helpers/Shared/helpers */ "./src/Helpers/Shared/helpers.js");
/* harmony import */ var _platform_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./platform.scss */ "./src/SmartComponents/Platform/platform.scss");
/* harmony import */ var _platform_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_platform_scss__WEBPACK_IMPORTED_MODULE_18__);




















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
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
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
      Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_17__["scrollToTop"])();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchData(this.props.match.params.id);
        Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_17__["scrollToTop"])();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filteredItems = {
        items: this.props.platformItems.filter(function (item) {
          return Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_17__["filterServiceOffering"])(item, _this2.state.filterValue);
        }).map(function (data) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Platform_PlatformItem__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            key: data.id
          }, data));
        }),
        isLoading: this.props.isPlatformDataLoading
      };
      var title = this.props.platform ? this.props.platform.name : '';
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Platform_PlatformToolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        searchValue: this.state.filterValue,
        onFilterChange: this.handleFilterChange
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "toolbar-padding"
      }, title && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Title"], {
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
    platformItems: selectedPlatform && platformItems[selectedPlatform.id],
    isPlatformDataLoading: !selectedPlatform || isPlatformDataLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    fetchSelectedPlatform: _redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_13__["fetchSelectedPlatform"],
    fetchPlatformItems: _redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_13__["fetchPlatformItems"]
  }, dispatch);
};

Platform.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  isPlatformDataLoading: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  match: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  fetchPlatformItems: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  fetchSelectedPlatform: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  platform: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string
  }),
  platformItems: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array
};
Platform.defaultProps = {
  platformItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Platform));

/***/ }),

/***/ "./src/SmartComponents/Platform/Platforms.js":
/*!***************************************************!*\
  !*** ./src/SmartComponents/Platform/Platforms.js ***!
  \***************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _SmartComponents_ContentGallery_ContentGallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../SmartComponents/ContentGallery/ContentGallery */ "./src/SmartComponents/ContentGallery/ContentGallery.js");
/* harmony import */ var _PresentationalComponents_Platform_PlatformCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/Platform/PlatformCard */ "./src/PresentationalComponents/Platform/PlatformCard.js");
/* harmony import */ var _PresentationalComponents_Platform_PlatformToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PresentationalComponents/Platform/PlatformToolbar */ "./src/PresentationalComponents/Platform/PlatformToolbar.js");
/* harmony import */ var _redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/Actions/PlatformActions */ "./src/redux/Actions/PlatformActions.js");
/* harmony import */ var _Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Helpers/Shared/helpers */ "./src/Helpers/Shared/helpers.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Platform */ "./src/SmartComponents/Platform/Platform.js");




















var platformsRoutes = {
  platforms: '',
  detail: '/detail/:id'
};

var Platforms =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Platforms, _Component);

  function Platforms() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platforms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Platforms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      filterValue: '',
      isOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "fetchData", function () {
      return _this.props.fetchPlatforms();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "handleFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "renderPlatforms", function () {
      var filteredItems = {
        items: _this.props.platforms.filter(function (_ref) {
          var name = _ref.name;
          return name.toLowerCase().includes(_this.state.filterValue.toLowerCase());
        }).map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Platform_PlatformCard__WEBPACK_IMPORTED_MODULE_15__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            key: item.id
          }, item));
        }),
        isLoading: _this.props.isLoading
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Platform_PlatformToolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onFilterChange: _this.handleFilterChange,
        searchValue: _this.state.filterValue
      }), _this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SmartComponents_ContentGallery_ContentGallery__WEBPACK_IMPORTED_MODULE_14__["default"], filteredItems));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platforms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_18__["scrollToTop"])();
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Level"], {
        className: "pf-u-pt-md pf-u-pr-xl pf-u-pl-xl"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["TextVariants"].h2
      }, "All Platforms "))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Section"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "/platforms".concat(platformsRoutes.detail),
        component: _Platform__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "/platforms".concat(platformsRoutes.platforms),
        render: function render() {
          return _this2.renderPlatforms();
        }
      })));
    }
  }]);

  return Platforms;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$platformReducer = _ref2.platformReducer,
      platforms = _ref2$platformReducer.platforms,
      isLoading = _ref2$platformReducer.isLoading,
      filterValue = _ref2$platformReducer.filterValue;
  return {
    platforms: platforms,
    isLoading: isLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPlatforms: function fetchPlatforms(apiProps) {
      return dispatch(Object(_redux_Actions_PlatformActions__WEBPACK_IMPORTED_MODULE_17__["fetchPlatforms"])(apiProps));
    }
  };
};

Platforms.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  hideModal: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  fetchPlatforms: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Platforms));

/***/ }),

/***/ "./src/assets/images/platform-amazon.png":
/*!***********************************************!*\
  !*** ./src/assets/images/platform-amazon.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/platform-amazon.png";

/***/ }),

/***/ "./src/assets/images/platform-default.svg":
/*!************************************************!*\
  !*** ./src/assets/images/platform-default.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/platform-default.svg";

/***/ }),

/***/ "./src/assets/images/platform-openshift.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/platform-openshift.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/platform-openshift.svg";

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/4.js.map