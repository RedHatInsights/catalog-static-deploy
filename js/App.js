/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/apps/catalog/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _constants_ui_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants/ui-constants */ "./src/constants/ui-constants.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications.css */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.css");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_20__);





















smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_18___default.a.polyfill();

var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      chromeNavAvailable: true,
      auth: false,
      ignoreRedirect: true
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      insights.chrome.init();
      insights.chrome.auth.getUser().then(function () {
        return _this2.setState({
          auth: true
        });
      });

      try {
        insights.chrome.identifyApp('catalog');
        insights.chrome.navigation([{
          id: 'portfolios',
          title: 'Portfolios'
        }, {
          id: 'platforms',
          title: 'Platforms'
        }, {
          id: 'orders',
          title: 'Orders'
        }]);
        this.unregister = insights.chrome.on('APP_NAVIGATION', function (event) {
          /**
           * Handle navigation from insights main nav
           * Uses React history directly instead of browser history to avoid template realod.
           * only redirect after first application mount
           */
          if (!_this2.state.ignoreRedirect) {
            _this2.props.history.push("/".concat(event.navId));
          }

          _this2.setState({
            ignoreRedirect: false
          });
        });
      } catch (error) {
        this.setState({
          chromeNavAvailable: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unregister();
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.state.auth;

      if (!auth) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_16__["AppPlaceholder"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_13__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Main"], {
        style: {
          marginLeft: 0,
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
        style: {
          minHeight: _constants_ui_constants__WEBPACK_IMPORTED_MODULE_15__["MIN_SCREEN_HEIGHT"]
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["GridItem"], {
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_11__["Routes"], {
        childProps: this.props
      })))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])()(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");







var Platforms = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/platform/platforms */ "./src/smart-components/platform/platforms.js"));
  });
});
var Portfolios = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/portfolio/portfolios */ "./src/smart-components/portfolio/portfolios.js"));
  });
});
var Orders = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/order/orders */ "./src/smart-components/order/orders.js"));
  });
});
var paths = {
  platforms: '/platforms',
  portfolios: '/portfolios',
  portfolioItem: '/portfolios/:id',
  orders: '/orders'
};

var InsightsRoute = function InsightsRoute(_ref) {
  var rootClass = _ref.rootClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["rootClass"]);

  var root = document.getElementById('root');
  root.removeAttribute('class');
  root.classList.add("page__".concat(rootClass), 'pf-l-page__main', 'pf-c-page__main');
  root.setAttribute('role', 'main');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], rest);
};

InsightsRoute.propTypes = {
  rootClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
var Routes = function Routes(props) {
  var path = props.childProps.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_6__["AppPlaceholder"], null)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.portfolios,
    component: Portfolios,
    rootClass: "portfolios"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.platforms,
    component: Platforms,
    rootClass: "platforms"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.orders,
    component: Orders,
    rootClass: "catalog"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: function render() {
      return lodash_some__WEBPACK_IMPORTED_MODULE_5___default()(paths, function (p) {
        return p === path;
      }) ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: paths.portfolios
      });
    }
  })));
};
Routes.propTypes = {
  childProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

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

/***/ }),

/***/ "./src/assets/images/vendor-openshift.svg":
/*!************************************************!*\
  !*** ./src/assets/images/vendor-openshift.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/vendor-openshift.svg";

/***/ }),

/***/ "./src/constants/ui-constants.js":
/*!***************************************!*\
  !*** ./src/constants/ui-constants.js ***!
  \***************************************/
/*! exports provided: MIN_SCREEN_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SCREEN_HEIGHT", function() { return MIN_SCREEN_HEIGHT; });
var MIN_SCREEN_HEIGHT = 'calc(100vh - 76px)';

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilities_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/store */ "./src/utilities/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");






var pathName = window.location.pathname.split('/');
pathName.shift();
var release = '/';

if (pathName[0] === 'beta') {
  release = "/".concat(pathName.shift(), "/");
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _utilities_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "".concat(release).concat(pathName[0], "/").concat(pathName[1])
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/forms/portfolio-form.schema.js":
/*!********************************************!*\
  !*** ./src/forms/portfolio-form.schema.js ***!
  \********************************************/
/*! exports provided: createPortfolioSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortfolioSchema", function() { return createPortfolioSchema; });
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a data-driven-form schema for adding/editing portfolio
 * @param {bool} newRecord sets the variant of portfolio form
 * @param {Array} workflows array of options for workflows
 */

var createPortfolioSchema = function createPortfolioSchema(newRecord, workflows) {
  return {
    fields: [{
      label: newRecord ? 'New Portfolio Name' : 'Portfolio Name',
      name: 'name',
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].TEXT_FIELD,
      isRequired: true,
      validate: [{
        type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["validatorTypes"].REQUIRED
      }]
    }, {
      label: 'Description',
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].TEXTAREA,
      name: 'description'
    }, {
      label: 'Approval workflow',
      name: 'workflow_ref',
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].SELECT,
      options: workflows
    }]
  };
};

/***/ }),

/***/ "./src/forms/portfolio-share-form.schema.js":
/*!**************************************************!*\
  !*** ./src/forms/portfolio-share-form.schema.js ***!
  \**************************************************/
/*! exports provided: createPortfolioShareSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortfolioShareSchema", function() { return createPortfolioShareSchema; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Creates a data-driven-form schema for sharing/un-sharing portfolio
 */

var newShareSchema = function newShareSchema(rbacGroups, permissionVerbs) {
  return {
    fields: [{
      component: 'sub-form',
      title: 'Invite Group',
      name: 'new_share',
      key: '1',
      fields: [{
        name: 'group_uuid',
        component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_2__["componentTypes"].SELECT,
        options: rbacGroups
      }, {
        name: 'permissions',
        component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_2__["componentTypes"].SELECT,
        options: permissionVerbs
      }]
    }]
  };
};

var groupListSchema = function groupListSchema(groupFieldList) {
  return {
    fields: [{
      component: 'sub-form',
      title: 'Groups With Access',
      name: 'share_list',
      key: 'share_list',
      fields: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(groupFieldList)
    }]
  };
};

var groupShareSchema = function groupShareSchema(groupShareInfo, permissionVerbs) {
  return {
    component: 'sub-form',
    name: "".concat(groupShareInfo.group_name),
    key: "".concat(groupShareInfo.group_name),
    fields: [{
      name: "".concat(groupShareInfo.group_name),
      label: "".concat(groupShareInfo.group_name),
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_2__["componentTypes"].SELECT,
      options: permissionVerbs
    }]
  };
};

var createPortfolioShareSchema = function createPortfolioShareSchema(shareItems, permissionVerbs) {
  var shareInfo = shareItems.items;
  var rbacGroups = shareItems.groups;
  var formSchema = newShareSchema(rbacGroups, permissionVerbs);
  var groupInfoFields = shareInfo.map(function (group) {
    return groupShareSchema(group, permissionVerbs);
  });

  var shareListSchema = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, groupListSchema(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(groupInfoFields)));

  var portfolioSchema = {
    fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formSchema.fields), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(shareListSchema.fields))
  };
  return portfolioSchema;
};

/***/ }),

/***/ "./src/helpers/approval/approval-helper.js":
/*!*************************************************!*\
  !*** ./src/helpers/approval/approval-helper.js ***!
  \*************************************************/
/*! exports provided: getApprovalWorkflows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApprovalWorkflows", function() { return getApprovalWorkflows; });
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");

var getApprovalWorkflows = function getApprovalWorkflows() {
  return Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_0__["getWorkflowApi"])().listWorkflows();
};

/***/ }),

/***/ "./src/helpers/order/order-helper.js":
/*!*******************************************!*\
  !*** ./src/helpers/order/order-helper.js ***!
  \*******************************************/
/*! exports provided: getServicePlans, listOrders, sendSubmitOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServicePlans", function() { return getServicePlans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listOrders", function() { return listOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSubmitOrder", function() { return sendSubmitOrder; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");





/* eslint camelcase: 0 */

var api = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_4__["getOrderApi"])();
var portfolioItemApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_4__["getPortfolioItemApi"])();
function getServicePlans(portfolioItemId) {
  return portfolioItemApi.listServicePlans(portfolioItemId);
}
function listOrders() {
  return api.listOrders();
}
function sendSubmitOrder(_x) {
  return _sendSubmitOrder.apply(this, arguments);
}

function _sendSubmitOrder() {
  _sendSubmitOrder = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var _ref$service_paramete, providerControlParameters, service_parameters, parameters, order, orderItem;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$service_paramete = _ref.service_parameters, providerControlParameters = _ref$service_paramete.providerControlParameters, service_parameters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref$service_paramete, ["providerControlParameters"]), parameters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["service_parameters"]);
            _context.next = 3;
            return api.createOrder();

          case 3:
            order = _context.sent;
            orderItem = {};
            orderItem.count = 1;
            orderItem = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, orderItem, parameters, {
              service_parameters: service_parameters,
              provider_control_parameters: providerControlParameters
            });
            _context.next = 9;
            return api.addToOrder(order.id, orderItem);

          case 9:
            return _context.abrupt("return", api.submitOrder(order.id));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendSubmitOrder.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/platform/platform-helper.js":
/*!*************************************************!*\
  !*** ./src/helpers/platform/platform-helper.js ***!
  \*************************************************/
/*! exports provided: getPlatforms, getPlatform, getPlatformItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatforms", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatform", function() { return getPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatformItems", function() { return getPlatformItems; });
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");


var api = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_0__["getTopologicalUserApi"])();
function getPlatforms() {
  return api.listSources();
}
function getPlatform(platformId) {
  return api.showSource(platformId);
}
function getPlatformItems(apiProps, options) {
  var apiPromise = null;

  if (apiProps) {
    apiPromise = fetch("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__["TOPOLOGICAL_INVENTORY_API_BASE"], "/sources/").concat(apiProps, "/service_offerings?filter[archived_at][nil]").concat(options ? "&limit=".concat(options.limit, "&offset=").concat(options.offset) : '')).then(function (data) {
      return data.json();
    });
  } else {
    apiPromise = api.listServiceOfferings();
  }

  return apiPromise;
}

/***/ }),

/***/ "./src/helpers/portfolio/portfolio-helper.js":
/*!***************************************************!*\
  !*** ./src/helpers/portfolio/portfolio-helper.js ***!
  \***************************************************/
/*! exports provided: listPortfolios, getPortfolioItems, listPortfolioItems, getPortfolioItem, getPortfolio, getPortfolioItemsWithPortfolio, addPortfolio, addToPortfolio, updatePortfolio, removePortfolio, removePortfolioItem, removePortfolioItems, fetchProviderControlParameters, updatePortfolioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPortfolios", function() { return listPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolioItems", function() { return getPortfolioItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPortfolioItems", function() { return listPortfolioItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolioItem", function() { return getPortfolioItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolio", function() { return getPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolioItemsWithPortfolio", function() { return getPortfolioItemsWithPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPortfolio", function() { return addPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToPortfolio", function() { return addToPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePortfolio", function() { return updatePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePortfolio", function() { return removePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePortfolioItem", function() { return removePortfolioItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePortfolioItems", function() { return removePortfolioItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProviderControlParameters", function() { return fetchProviderControlParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePortfolioItem", function() { return updatePortfolioItem; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");






var portfolioApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_4__["getPortfolioApi"])();
var portfolioItemApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_4__["getPortfolioItemApi"])();
function listPortfolios() {
  return portfolioApi.listPortfolios();
}
function getPortfolioItems() {
  return listPortfolioItems();
}
function listPortfolioItems() {
  return portfolioItemApi.listPortfolioItems();
}
function getPortfolioItem(portfolioItemId) {
  return fetch("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_5__["CATALOG_API_BASE"], "/portfolio_items/").concat(portfolioItemId)).then(function (data) {
    return data.json();
  });
}
function getPortfolio(portfolioId) {
  return portfolioApi.showPortfolio(portfolioId);
}
function getPortfolioItemsWithPortfolio(portfolioId) {
  return fetch("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_5__["CATALOG_API_BASE"], "/portfolios/").concat(portfolioId, "/portfolio_items")).then(function (data) {
    return data.json();
  });
} // TO DO - change to use the API call that adds multiple items to a portfolio when available

function addPortfolio(_x, _x2) {
  return _addPortfolio.apply(this, arguments);
}

function _addPortfolio() {
  _addPortfolio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(portfolioData, items) {
    var portfolio;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return portfolioApi.createPortfolio(portfolioData);

          case 2:
            portfolio = _context.sent;

            if (portfolio) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", portfolio);

          case 5:
            if (!(items && items.length > 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", addToPortfolio(portfolio, items));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addPortfolio.apply(this, arguments);
}

function addToPortfolio(_x3, _x4) {
  return _addToPortfolio.apply(this, arguments);
}

function _addToPortfolio() {
  _addToPortfolio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(portfolioId, items) {
    var request;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            request =
            /*#__PURE__*/
            function () {
              var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
                var newItem;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return portfolioItemApi.createPortfolioItem({
                          service_offering_ref: item
                        });

                      case 2:
                        newItem = _context2.sent;

                        if (!newItem) {
                          _context2.next = 6;
                          break;
                        }

                        _context2.next = 6;
                        return portfolioApi.addPortfolioItemToPortfolio(portfolioId, {
                          portfolio_item_id: newItem.id
                        });

                      case 6:
                        return _context2.abrupt("return", newItem);

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function request(_x10) {
                return _ref.apply(this, arguments);
              };
            }();

            return _context3.abrupt("return", Promise.all(items.map(function (item) {
              return request(item);
            })));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _addToPortfolio.apply(this, arguments);
}

function updatePortfolio(_x5) {
  return _updatePortfolio.apply(this, arguments);
}

function _updatePortfolio() {
  _updatePortfolio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(portfolioData) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return portfolioApi.updatePortfolio(portfolioData.id, portfolioData);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updatePortfolio.apply(this, arguments);
}

function removePortfolio(_x6) {
  return _removePortfolio.apply(this, arguments);
}

function _removePortfolio() {
  _removePortfolio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(portfolioId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return portfolioApi.destroyPortfolio(portfolioId);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _removePortfolio.apply(this, arguments);
}

function removePortfolioItem(_x7) {
  return _removePortfolioItem.apply(this, arguments);
}

function _removePortfolioItem() {
  _removePortfolioItem = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(portfolioItemId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", portfolioItemApi.destroyPortfolioItem(portfolioItemId));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _removePortfolioItem.apply(this, arguments);
}

function removePortfolioItems(_x8) {
  return _removePortfolioItems.apply(this, arguments);
}

function _removePortfolioItems() {
  _removePortfolioItems = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(portfolioItemIds) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", Promise.all(portfolioItemIds.map(
            /*#__PURE__*/
            function () {
              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(itemId) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return removePortfolioItem(itemId);

                      case 2:
                        return _context7.abrupt("return", _context7.sent);

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x11) {
                return _ref2.apply(this, arguments);
              };
            }())));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _removePortfolioItems.apply(this, arguments);
}

function fetchProviderControlParameters(portfolioItemId) {
  return fetch("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_5__["CATALOG_API_BASE"], "/portfolio_items/").concat(portfolioItemId, "/provider_control_parameters")).then(function (data) {
    return data.json();
  }).then(function (data) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({
      required: []
    }, data, {
      properties: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, data.properties, {
        namespace: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, data.properties.namespace, {
          enum: Array.from(new Set(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(data.properties.namespace.enum)))
        })
      })
    });
  });
}
function updatePortfolioItem(_x9) {
  return _updatePortfolioItem.apply(this, arguments);
}

function _updatePortfolioItem() {
  _updatePortfolioItem = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(portfolioItem) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return fetch("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_5__["CATALOG_API_BASE"], "/portfolio_items/").concat(portfolioItem.id), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, portfolioItem, {
                workflow_ref: portfolioItem.workflow_ref || null
              }))
            });

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _updatePortfolioItem.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/rbac/rbac-helper.js":
/*!*****************************************!*\
  !*** ./src/helpers/rbac/rbac-helper.js ***!
  \*****************************************/
/*! exports provided: getRbacGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacGroups", function() { return getRbacGroups; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");



var api = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_2__["getRbacGroupApi"])();
function getRbacGroups() {
  return _getRbacGroups.apply(this, arguments);
}

function _getRbacGroups() {
  _getRbacGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.listGroups();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRbacGroups.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/share/share-helper.js":
/*!*******************************************!*\
  !*** ./src/helpers/share/share-helper.js ***!
  \*******************************************/
/*! exports provided: getShareInfo, sharePortfolio, unsharePortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return getShareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharePortfolio", function() { return sharePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsharePortfolio", function() { return unsharePortfolio; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");




var userApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_2__["getPortfolioApi"])();
function getShareInfo(_x) {
  return _getShareInfo.apply(this, arguments);
}

function _getShareInfo() {
  _getShareInfo = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(portfolioId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_3__["CATALOG_API_BASE"], "/portfolios/").concat(portfolioId, "/share_info")).then(function (data) {
              return data.json();
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getShareInfo.apply(this, arguments);
}

function sharePortfolio(_x2) {
  return _sharePortfolio.apply(this, arguments);
}

function _sharePortfolio() {
  _sharePortfolio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
    var policy;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            policy = {
              permissions: data.permissions.split(','),
              group_uuids: [data.group_uuid]
            };
            _context2.next = 3;
            return userApi.sharePortfolio(data.id, policy);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sharePortfolio.apply(this, arguments);
}

function unsharePortfolio(_x3) {
  return _unsharePortfolio.apply(this, arguments);
}

function _unsharePortfolio() {
  _unsharePortfolio = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
    var policy;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            policy = {
              permissions: data.permissions,
              group_uuids: [data.group_uuid]
            };
            _context3.next = 3;
            return userApi.unsharePortfolio(data.id, policy);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _unsharePortfolio.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/shared/helpers.js":
/*!***************************************!*\
  !*** ./src/helpers/shared/helpers.js ***!
  \***************************************/
/*! exports provided: scrollToTop, filterServiceOffering, allowNull, calcuateDiffDays, createModifiedLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterServiceOffering", function() { return filterServiceOffering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowNull", function() { return allowNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcuateDiffDays", function() { return calcuateDiffDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModifiedLabel", function() { return createModifiedLabel; });
var scrollToTop = function scrollToTop() {
  return document.getElementById('root').scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  });
};
var filterServiceOffering = function filterServiceOffering(_ref, filter) {
  var display_name = _ref.display_name,
      name = _ref.name;
  var filterAtrribute = display_name || name;
  return filterAtrribute.trim().toLowerCase().includes(filter.toLowerCase());
};
var allowNull = function allowNull(wrappedPropTypes) {
  return function (props, propName) {
    if (props[propName] === null) {
      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    return wrappedPropTypes.apply(void 0, [props, propName].concat(rest));
  };
};
var oneDay = 24 * 60 * 60 * 1000;
var calcuateDiffDays = function calcuateDiffDays(firstDate, secondDate) {
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
};
var createModifiedLabel = function createModifiedLabel(date, user) {
  return "Last modified ".concat(calcuateDiffDays(new Date(), date), " days ago").concat(user ? " by ".concat(user, ".") : '.');
};

/***/ }),

/***/ "./src/helpers/shared/pagination.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/pagination.js ***!
  \******************************************/
/*! exports provided: defaultSettings, getCurrentPage, getNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPage", function() { return getNewPage; });
var defaultSettings = {
  limit: 50,
  offset: 0
};
var getCurrentPage = function getCurrentPage() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(offset / limit) + 1;
};
var getNewPage = function getNewPage() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 ? arguments[1] : undefined;
  return (page - 1) * offset;
};

/***/ }),

/***/ "./src/helpers/shared/user-login.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/user-login.js ***!
  \******************************************/
/*! exports provided: getTopologicalUserApi, getPortfolioApi, getPortfolioItemApi, getOrderApi, getRbacAccessApi, getRbacPrincipalApi, getRbacGroupApi, getWorkflowApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopologicalUserApi", function() { return getTopologicalUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolioApi", function() { return getPortfolioApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortfolioItemApi", function() { return getPortfolioItemApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderApi", function() { return getOrderApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacAccessApi", function() { return getRbacAccessApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacPrincipalApi", function() { return getRbacPrincipalApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacGroupApi", function() { return getRbacGroupApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowApi", function() { return getWorkflowApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/approval-client */ "./node_modules/@redhat-cloud-services/approval-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_catalog_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/catalog-client */ "./node_modules/@redhat-cloud-services/catalog-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_catalog_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_catalog_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manageiq_topological_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @manageiq/topological_inventory */ "./node_modules/@manageiq/topological_inventory/dist/main.js");
/* harmony import */ var _manageiq_topological_inventory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_manageiq_topological_inventory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rbac_api_jsclient */ "./node_modules/rbac_api_jsclient/dist/main.js");
/* harmony import */ var rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5__);






var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();

var resolveInterceptor = function resolveInterceptor(response) {
  return response.data || response;
};

axiosInstance.interceptors.response.use(resolveInterceptor);
var portfolioApi = new _redhat_cloud_services_catalog_client__WEBPACK_IMPORTED_MODULE_2__["PortfolioApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_4__["CATALOG_API_BASE"], axiosInstance);
var portfolioItemApi = new _redhat_cloud_services_catalog_client__WEBPACK_IMPORTED_MODULE_2__["PortfolioItemApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_4__["CATALOG_API_BASE"], axiosInstance);
var orderApi = new _redhat_cloud_services_catalog_client__WEBPACK_IMPORTED_MODULE_2__["OrderApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_4__["CATALOG_API_BASE"], axiosInstance);
var workflowApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_1__["WorkflowApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_4__["APPROVAL_API_BASE"], axiosInstance);
var defaultClient = _manageiq_topological_inventory__WEBPACK_IMPORTED_MODULE_3__["ApiClient"].instance;
defaultClient.basePath = _utilities_constants__WEBPACK_IMPORTED_MODULE_4__["TOPOLOGICAL_INVENTORY_API_BASE"];
var userTopologicalApi = new _manageiq_topological_inventory__WEBPACK_IMPORTED_MODULE_3__["DefaultApi"]();
function getTopologicalUserApi() {
  return userTopologicalApi;
}
function getPortfolioApi() {
  return portfolioApi;
}
function getPortfolioItemApi() {
  return portfolioItemApi;
}
function getOrderApi() {
  return orderApi;
}
var defaultRbacClient = rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5__["ApiClient"].instance;
defaultRbacClient.basePath = _utilities_constants__WEBPACK_IMPORTED_MODULE_4__["RBAC_API_BASE"];
var rbacAccessApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5__["AccessApi"]();
var rbacPrincipalApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5__["PrincipalApi"]();
var rbacGroupApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_5__["GroupApi"]();
function getRbacAccessApi() {
  return rbacAccessApi;
}
function getRbacPrincipalApi() {
  return rbacPrincipalApi;
}
function getRbacGroupApi() {
  return rbacGroupApi;
}
function getWorkflowApi() {
  return workflowApi;
}

/***/ }),

/***/ "./src/presentational-components/platform/platform-card.js":
/*!*****************************************************************!*\
  !*** ./src/presentational-components/platform/platform-card.js ***!
  \*****************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/platform-default.svg */ "./src/assets/images/platform-default.svg");
/* harmony import */ var _assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/platform-openshift.svg */ "./src/assets/images/platform-openshift.svg");
/* harmony import */ var _assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_platform_openshift_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/platform-amazon.png */ "./src/assets/images/platform-amazon.png");
/* harmony import */ var _assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_platform_amazon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_image_with_default__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/image-with-default */ "./src/presentational-components/shared/image-with-default.js");
/* harmony import */ var _shared_card_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/card-common */ "./src/presentational-components/shared/card-common.js");
/* harmony import */ var _platform_card_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platform-card.scss */ "./src/presentational-components/platform/platform-card.scss");
/* harmony import */ var _platform_card_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_platform_card_scss__WEBPACK_IMPORTED_MODULE_12__);













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
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_image_with_default__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: platformTypeImg[props.source_type_id] || _assets_images_platform_default_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    width: "80",
    height: "40"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", null, name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_card_common__WEBPACK_IMPORTED_MODULE_11__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
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

/***/ "./src/presentational-components/platform/platform-card.scss":
/*!*******************************************************************!*\
  !*** ./src/presentational-components/platform/platform-card.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/presentational-components/platform/platform-item.js":
/*!*****************************************************************!*\
  !*** ./src/presentational-components/platform/platform-item.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _shared_card_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/card-icon */ "./src/presentational-components/shared/card-icon.js");
/* harmony import */ var _shared_card_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/card-checkbox */ "./src/presentational-components/shared/card-checkbox.js");
/* harmony import */ var _shared_service_offering_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service-offering-body */ "./src/presentational-components/shared/service-offering-body.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _platform_card_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platform-card.scss */ "./src/presentational-components/platform/platform-card.scss");
/* harmony import */ var _platform_card_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_platform_card_scss__WEBPACK_IMPORTED_MODULE_7__);









var PlatformItem = function PlatformItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    key: props.id,
    className: "content-gallery-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_card_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_6__["TOPOLOGICAL_INVENTORY_API_BASE"], "/service_offering_icons/").concat(props.service_offering_icon_id, "/icon_data"),
    style: {
      height: 40
    }
  }), props.editMode && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_card_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.id,
    isChecked: props.checked,
    handleCheck: props.onToggleItemSelect
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_service_offering_body__WEBPACK_IMPORTED_MODULE_5__["default"], props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null));
};

PlatformItem.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  service_offering_icon_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onToggleItemSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (PlatformItem);

/***/ }),

/***/ "./src/presentational-components/platform/platform-toolbar.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/platform/platform-toolbar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _shared_top_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");






var PlatformToolbar = function PlatformToolbar(_ref) {
  var searchValue = _ref.searchValue,
      onFilterChange = _ref.onFilterChange,
      title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_3__["TopToolbarTitle"], {
    title: title
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Level"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
    searchValue: searchValue,
    onFilterChange: onFilterChange,
    placeholder: "Filter by name..."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], null, children)));
};

PlatformToolbar.propTypes = {
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node)])
};
/* harmony default export */ __webpack_exports__["default"] = (PlatformToolbar);

/***/ }),

/***/ "./src/presentational-components/portfolio/porfolio-card.js":
/*!******************************************************************!*\
  !*** ./src/presentational-components/portfolio/porfolio-card.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_card_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/card-common */ "./src/presentational-components/shared/card-common.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _portfolio_card_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio-card-header */ "./src/presentational-components/portfolio/portfolio-card-header.js");
/* harmony import */ var _portfolio_card_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio-card.scss */ "./src/presentational-components/portfolio/portfolio-card.scss");
/* harmony import */ var _portfolio_card_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_portfolio_card_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");












var TO_DISPLAY = ['description'];

var createToolbarActions = function createToolbarActions(portfolioName, portfolioId, isOpen, setOpen) {
  return [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
    key: "portfolio-dropdown",
    isOpen: isOpen,
    isPlain: true,
    onSelect: function onSelect() {
      return setOpen(false);
    },
    position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownPosition"].right,
    toggle: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["KebabToggle"], {
      onToggle: setOpen
    }),
    dropdownItems: [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      key: "share-portfolio-action"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/portfolios/share/".concat(portfolioId),
      className: "pf-c-dropdown__menu-item"
    }, "Share")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownSeparator"], {
      key: "share-portfolio-separator"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      key: "edit-portfolio-action"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/portfolios/edit/".concat(portfolioId),
      className: "pf-c-dropdown__menu-item"
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      key: "remove-portfolio-action"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "/portfolios/remove/".concat(portfolioId),
      className: "pf-c-dropdown__menu-item destructive-color"
    }, "Delete"))]
  })];
};

var PortfolioCard = function PortfolioCard(_ref) {
  var imageUrl = _ref.imageUrl,
      name = _ref.name,
      id = _ref.id,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["imageUrl", "name", "id"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GalleryItem"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    className: "content-gallery-card"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    className: "card-link",
    to: "/portfolios/detail/".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_portfolio_card_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    portfolioName: name,
    headerActions: createToolbarActions(name, id, isOpen, setOpen)
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextVariants"].small
  }, Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_11__["createModifiedLabel"])(new Date(props.updated_at || props.created_at), props.owner))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_card_common__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
    name: name,
    imageUrl: imageUrl
  }, props), {
    toDisplay: TO_DISPLAY
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardFooter"], null))));
};

PortfolioCard.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  updated_at: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  created_at: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  owner: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioCard);

/***/ }),

/***/ "./src/presentational-components/portfolio/portfolio-card-header.js":
/*!**************************************************************************!*\
  !*** ./src/presentational-components/portfolio/portfolio-card-header.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _portfolio_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-card.scss */ "./src/presentational-components/portfolio/portfolio-card.scss");
/* harmony import */ var _portfolio_card_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_portfolio_card_scss__WEBPACK_IMPORTED_MODULE_3__);





var PortfolioCardHeader = function PortfolioCardHeader(_ref) {
  var portfolioName = _ref.portfolioName,
      headerActions = _ref.headerActions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Level"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "elipsis-text-overflow pf-u-mb-0",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h3
  }, portfolioName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], {
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, headerActions));
};

PortfolioCardHeader.propTypes = {
  portfolioName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  headerActions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node)
};
PortfolioCardHeader.defaultProps = {
  headerActions: []
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioCardHeader);

/***/ }),

/***/ "./src/presentational-components/portfolio/portfolio-card.scss":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/portfolio/portfolio-card.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/presentational-components/portfolio/portfolio-filter-toolbar.js":
/*!*****************************************************************************!*\
  !*** ./src/presentational-components/portfolio/portfolio-filter-toolbar.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");









var PortfolioFilterToolbar = function PortfolioFilterToolbar(_ref) {
  var addProductsRoute = _ref.addProductsRoute,
      isLoading = _ref.isLoading,
      removeProductsRoute = _ref.removeProductsRoute,
      editPortfolioRoute = _ref.editPortfolioRoute,
      removePortfolioRoute = _ref.removePortfolioRoute,
      sharePortfolioRoute = _ref.sharePortfolioRoute,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["addProductsRoute", "isLoading", "removeProductsRoute", "editPortfolioRoute", "removePortfolioRoute", "sharePortfolioRoute"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isKebabOpen = _useState2[0],
      setKebabOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    placeholder: 'Filter by name...'
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: addProductsRoute
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isDisabled: isLoading,
    variant: "primary",
    "aria-label": "Add Products to Portfolio"
  }, "Add products")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: removeProductsRoute
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isDisabled: isLoading,
    variant: "link",
    className: "destructive-color",
    "aria-label": "Remove Products from Portfolio"
  }, "Remove products"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    onToggle: setKebabOpen,
    position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["DropdownPosition"].right,
    toggle: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["KebabToggle"], {
      onToggle: setKebabOpen
    }),
    isOpen: isKebabOpen,
    isPlain: true,
    dropdownItems: [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
      "aria-label": "Share Portfolio",
      key: "share-portfolio"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: sharePortfolioRoute,
      role: "link",
      className: "pf-c-dropdown__menu-item"
    }, "Share")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["DropdownSeparator"], {
      key: "separator"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
      "aria-label": "Edit Portfolio",
      key: "edit-portfolio"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: editPortfolioRoute,
      role: "link",
      className: "pf-c-dropdown__menu-item"
    }, "Edit")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
      "aria-label": "Remove Portfolio",
      key: "delete-portfolio"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: removePortfolioRoute,
      role: "link",
      className: "pf-c-dropdown__menu-item destructive-color"
    }, "Delete"))]
  }))));
};

PortfolioFilterToolbar.propTypes = {
  addProductsRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  editPortfolioRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  sharePortfolioRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  removePortfolioRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  removeProductsRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioFilterToolbar);

/***/ }),

/***/ "./src/presentational-components/portfolio/portfolio-order-toolbar.js":
/*!****************************************************************************!*\
  !*** ./src/presentational-components/portfolio/portfolio-order-toolbar.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");








var selectStyles = {
  container: function container(base) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, base, {
      minWidth: 260
    });
  },
  valueContainer: function valueContainer(provided) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, provided, {
      padding: '1px 8px'
    });
  },
  control: function control(provided) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, provided, {
      height: 34
    });
  },
  input: function input(provided) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, provided, {
      paddingTop: 1,
      paddingBottom: 1
    });
  }
};

var PortfolioOrderToolbar = function PortfolioOrderToolbar(_ref) {
  var portfolioName = _ref.portfolioName,
      portfolioRoute = _ref.portfolioRoute,
      onClickAddToPortfolio = _ref.onClickAddToPortfolio,
      itemsSelected = _ref.itemsSelected,
      onOptionSelect = _ref.onOptionSelect,
      options = _ref.options,
      onFilterChange = _ref.onFilterChange,
      searchValue = _ref.searchValue,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_6__["TopToolbarTitle"], {
    title: "Add products: ".concat(portfolioName)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Level"], {
    className: "pf-u-mt-lg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onFilterChange: onFilterChange,
    searchValue: searchValue,
    placeholder: "Filter products"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "products-platform-select",
    styles: selectStyles,
    isMulti: false,
    placeholder: 'Filter by Platform',
    options: options,
    onChange: onOptionSelect
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: portfolioRoute
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "link",
    "aria-label": "Cancel Add products to Portfolio"
  }, "Cancel")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "primary",
    "aria-label": "Add products to Portfolio",
    type: "button",
    onClick: onClickAddToPortfolio,
    isDisabled: !itemsSelected
  }, "Add")))), children));
};

PortfolioOrderToolbar.propTypes = {
  portfolioName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  portfolioRoute: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onClickAddToPortfolio: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  itemsSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onOptionSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]).isRequired
  })).isRequired,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node)])
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioOrderToolbar);

/***/ }),

/***/ "./src/presentational-components/portfolio/portfolios-filter-toolbar.js":
/*!******************************************************************************!*\
  !*** ./src/presentational-components/portfolio/portfolios-filter-toolbar.js ***!
  \******************************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");








var PortfoliosFilterToolbar = function PortfoliosFilterToolbar(_ref) {
  var onFilterChange = _ref.onFilterChange,
      filterValue = _ref.filterValue,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onFilterChange", "filterValue"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    className: "pf-u-mt-md"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    searchValue: filterValue,
    onFilterChange: onFilterChange,
    placeholder: "Filter by name..."
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/portfolios/add-portfolio"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    "aria-label": "Create portfolio"
  }, "Create portfolio")))));
};

PortfoliosFilterToolbar.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PortfoliosFilterToolbar);

/***/ }),

/***/ "./src/presentational-components/shared/breadcrubms.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/shared/breadcrubms.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");








var patternsReducers = {
  portfolios: 'portfolioReducer.selectedPortfolio.name',
  platforms: 'platformReducer.selectedPlatform.name',
  orders: 'ordersReducer'
};
var fragmentMapper = {
  portfolios: {
    title: 'Portfolios'
  },
  detail: {},
  'add-products': {
    title: 'Add products'
  },
  'remove-products': {
    title: 'Remove products'
  },
  platforms: {
    title: 'Platforms'
  },
  orders: {
    title: 'Orders'
  },
  product: {
    reducer: 'portfolioReducer.portfolioItem.display_name'
  }
};

var createPaths = function createPaths(fragments) {
  var rootReducer = fragments.find(function (_ref) {
    var reducer = _ref.reducer;
    return reducer !== undefined;
  });
  var finalFragments = [];

  if (!rootReducer) {
    return finalFragments;
  } else {
    rootReducer = rootReducer.reducer;
  }

  var fragmentIndex = 0;
  fragments.forEach(function (_ref2) {
    var isId = _ref2.isId,
        urlFragment = _ref2.urlFragment;

    if (isId) {
      finalFragments[fragmentIndex - 1] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, finalFragments[fragmentIndex - 1], {
        path: "".concat(finalFragments[fragmentIndex - 1].path, "/").concat(urlFragment)
      });
      finalFragments = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(finalFragments.slice(0, fragmentIndex)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(finalFragments.slice(fragmentIndex + 1)));
    } else {
      finalFragments[fragmentIndex] = {
        reducer: fragmentMapper[urlFragment].reducer || rootReducer,
        path: fragmentIndex === 0 ? "/".concat(urlFragment) : "".concat(finalFragments[fragmentIndex - 1].path, "/").concat(urlFragment),
        urlFragment: urlFragment
      };
      fragmentIndex++;
    }
  });
  return finalFragments;
};

var findRoutes = function findRoutes(url) {
  var fragments = url.split('/').filter(function (item) {
    return item !== '';
  });
  var cleanFragments = fragments.map(function (key, index) {
    return {
      reducer: patternsReducers[key],
      urlFragment: key,
      index: index,
      isId: !!key.match(/^[0-9]+$/)
    };
  });

  if (cleanFragments.length === 0) {
    return [];
  }

  return createPaths(cleanFragments).map(function (fragment) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, fragment, {
      meta: fragmentMapper[Object.keys(fragmentMapper).find(function (key) {
        return fragment.urlFragment.includes(key);
      })]
    });
  });
};

var CatalogBreadrubms = function CatalogBreadrubms(_ref3) {
  var url = _ref3.match.url,
      reducers = _ref3.reducers;
  var routes = findRoutes(url);
  var items = routes.map(function (route, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbItem"], {
      key: route.path,
      isActive: route.path === url || index === routes.length - 1
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
      exact: true,
      to: route.path,
      isActive: function isActive() {
        return route.path === url || index === routes.length - 1;
      }
    }, route.meta.title || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(reducers, route.reducer)));
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Breadcrumb"], {
    style: {
      minHeight: 18
    }
  }, items.length > 1 && items);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    reducers: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state)
  };
};

CatalogBreadrubms.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  }).isRequired,
  reducers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(CatalogBreadrubms)));

/***/ }),

/***/ "./src/presentational-components/shared/card-checkbox.js":
/*!***************************************************************!*\
  !*** ./src/presentational-components/shared/card-checkbox.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var CardCheckbox = function CardCheckbox(_ref) {
  var handleCheck = _ref.handleCheck,
      isChecked = _ref.isChecked,
      id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      float: 'right'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    onClick: function onClick(event) {
      return event.stopPropagation();
    },
    checked: isChecked,
    onChange: handleCheck,
    "aria-label": "card checkbox",
    id: id
  }));
};

CardCheckbox.propTypes = {
  handleCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CardCheckbox);

/***/ }),

/***/ "./src/presentational-components/shared/card-common.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/shared/card-common.js ***!
  \*************************************************************/
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
/* harmony import */ var react_dotdotdot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dotdotdot */ "./node_modules/react-dotdotdot/src/index.js");
/* harmony import */ var react_dotdotdot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dotdotdot__WEBPACK_IMPORTED_MODULE_3__);





var PropLine = function PropLine(_ref) {
  var value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, value);
};

PropLine.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]))]).isRequired
};

var ItemDetails = function ItemDetails(_ref2) {
  var _ref2$toDisplay = _ref2.toDisplay,
      toDisplay = _ref2$toDisplay === void 0 ? [] : _ref2$toDisplay,
      item = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["toDisplay"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dotdotdot__WEBPACK_IMPORTED_MODULE_3___default.a, {
    clamp: 6
  }, toDisplay.map(function (prop) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PropLine, {
      key: "card-prop-".concat(prop),
      value: item[prop]
    });
  }));
};

ItemDetails.propTypes = {
  toDisplay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node)]))
};
ItemDetails.defaultProps = {
  toDisplay: []
};
/* harmony default export */ __webpack_exports__["default"] = (ItemDetails);

/***/ }),

/***/ "./src/presentational-components/shared/card-icon.js":
/*!***********************************************************!*\
  !*** ./src/presentational-components/shared/card-icon.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/vendor-openshift.svg */ "./src/assets/images/vendor-openshift.svg");
/* harmony import */ var _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_5__);







var CardIcon = function CardIcon(_ref) {
  var src = _ref.src,
      height = _ref.height;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isLoaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isUnknow = _useState4[0],
      setUnknown = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'inline-block'
    }
  }, !isLoaded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loader_placeholders__WEBPACK_IMPORTED_MODULE_4__["IconPlaceholder"], {
    style: {
      height: height
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    height: isLoaded ? height : 0,
    style: {
      height: isLoaded ? height : 0
    },
    className: "card-image ".concat(!isLoaded ? 'hide' : ''),
    onError: function onError() {
      return setUnknown(true);
    },
    onLoad: function onLoad() {
      return setLoaded(true);
    },
    src: isUnknow ? _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_5___default.a : src
  }));
};

CardIcon.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
CardIcon.defaultProps = {
  style: {},
  height: 40
};
/* harmony default export */ __webpack_exports__["default"] = (CardIcon);

/***/ }),

/***/ "./src/presentational-components/shared/filter-toolbar-item.js":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/shared/filter-toolbar-item.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var FilterToolbarItem = function FilterToolbarItem(_ref) {
  var searchValue = _ref.searchValue,
      onFilterChange = _ref.onFilterChange,
      placeholder = _ref.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], {
    className: "searchToolbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-c-input-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    placeholder: placeholder,
    value: searchValue,
    type: "text",
    onChange: onFilterChange,
    "aria-label": "Find product button"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "tertiary",
    id: "searchProductButton",
    onClick: function onClick() {
      return onFilterChange(searchValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search",
    "aria-hidden": "true"
  })))));
};

FilterToolbarItem.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
FilterToolbarItem.defaultProps = {
  searchValue: ''
};
/* harmony default export */ __webpack_exports__["default"] = (FilterToolbarItem);

/***/ }),

/***/ "./src/presentational-components/shared/image-with-default.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/image-with-default.js ***!
  \********************************************************************/
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

/***/ "./src/presentational-components/shared/loader-placeholders.js":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/shared/loader-placeholders.js ***!
  \*********************************************************************/
/*! exports provided: CardLoader, PortfolioLoader, AppPlaceholder, ToolbarTitlePlaceholder, ProductLoaderPlaceholder, IconPlaceholder, ShareLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLoader", function() { return CardLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioLoader", function() { return PortfolioLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlaceholder", function() { return AppPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitlePlaceholder", function() { return ToolbarTitlePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLoaderPlaceholder", function() { return ProductLoaderPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPlaceholder", function() { return IconPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareLoader", function() { return ShareLoader; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");








var CardLoader = function CardLoader(_ref) {
  var items = _ref.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    sm: 12,
    style: {
      padding: 24
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Gallery"], {
    gutter: "md"
  }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(items)).map(function (_item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GalleryItem"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
      style: {
        height: 350
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      height: 160,
      width: 300,
      speed: 2,
      primaryColor: "#f3f3f3",
      secondaryColor: "#ecebeb"
    }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "2",
      y: "99",
      rx: "3",
      ry: "3",
      width: "300",
      height: "6.4"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "2",
      y: "119.72",
      rx: "3",
      ry: "3",
      width: "290",
      height: "5.76"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "2",
      y: "139",
      rx: "3",
      ry: "3",
      width: "201",
      height: "6.4"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "-2.16",
      y: "0.67",
      rx: "0",
      ry: "0",
      width: "271.6",
      height: "82.74"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "136.84",
      y: "37.67",
      rx: "0",
      ry: "0",
      width: "6",
      height: "3"
    })))));
  }))));
};
CardLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
CardLoader.defaultProps = {
  items: 13
};
var PortfolioLoader = function PortfolioLoader(_ref2) {
  var items = _ref2.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 16,
    width: 300,
    speed: 2,
    primaryColor: "#FFFFFF",
    secondaryColor: "#FFFFFF"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "420",
    height: "16"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    sm: 12,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardLoader, {
    items: items
  })));
};
PortfolioLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
PortfolioLoader.defaultProps = {
  items: 5
};
var AppPlaceholder = function AppPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Main"], {
    style: {
      marginLeft: 0,
      padding: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 16,
    width: 300,
    speed: 2,
    primaryColor: "#FFFFFF",
    secondaryColor: "#FFFFFF"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "420",
    height: "10"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardLoader, null));
};
var ToolbarTitlePlaceholder = function ToolbarTitlePlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 21,
    width: 200,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "200",
    height: "21"
  }));
};
var ProductLoaderPlaceholder = function ProductLoaderPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 15,
    width: 200,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "200",
    height: "10"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      width: 300
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["List"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["List"], {
    speed: 3
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["List"], null)));
};
var IconPlaceholder = function IconPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", props, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    height: "40",
    width: "40"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "20",
    fill: "#ecebeb"
  })));
};
var ShareLoader = function ShareLoader() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    height: 800,
    width: 600,
    speed: 2,
    primaryColor: "#ffffff",
    secondaryColor: "#ecebeb"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "290",
    y: "225",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "168",
    y: "187",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "368",
    y: "280",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "28",
    y: "19",
    rx: "0",
    ry: "0",
    width: "518",
    height: "413"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "392",
    y: "380",
    rx: "0",
    ry: "0",
    width: "1",
    height: "60"
  }));
};

/***/ }),

/***/ "./src/presentational-components/shared/pf4-select-wrapper.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/pf4-select-wrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







var createOptions = function createOptions(options, inputValue, isRequired) {
  if (inputValue && isRequired) {
    return options;
  }

  var selectOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(options);

  return selectOptions.find(function (_ref) {
    var value = _ref.value;
    return value === undefined;
  }) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions) : [{
    label: isRequired ? 'Please choose' : 'None'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions));
};

var Select = function Select(_ref2) {
  var input = _ref2.input,
      options = _ref2.options,
      isReadOnly = _ref2.isReadOnly,
      isDisabled = _ref2.isDisabled,
      FieldProvider = _ref2.FieldProvider,
      isRequired = _ref2.isRequired,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["input", "options", "isReadOnly", "isDisabled", "FieldProvider", "isRequired"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormSelect"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input, rest, {
    isDisabled: isDisabled || isReadOnly
  }), createOptions(options, input.value, isRequired).map(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormSelectOption"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: props.value || props.label
    }, props, {
      label: props.label.toString()
    })) // eslint-disable-line react/prop-types
    ;
  }));
};

Select.propTypes = {
  input: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  })).isRequired,
  isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  FieldProvider: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

var Pf4SelectWrapper = function Pf4SelectWrapper(_ref3) {
  var componentType = _ref3.componentType,
      label = _ref3.label,
      isRequired = _ref3.isRequired,
      helperText = _ref3.helperText,
      meta = _ref3.meta,
      description = _ref3.description,
      hideLabel = _ref3.hideLabel,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["componentType", "label", "isRequired", "helperText", "meta", "description", "hideLabel"]);

  var error = meta.error,
      touched = meta.touched;
  var showError = touched && error;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    isRequired: isRequired,
    label: !hideLabel && label,
    fieldId: rest.id,
    isValid: !showError,
    helperText: helperText,
    helperTextInvalid: meta.error
  }, description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].small
  }, description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: label,
    isValid: !showError,
    isRequired: isRequired
  }, rest)));
};

Pf4SelectWrapper.propTypes = {
  componentType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  hideLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Pf4SelectWrapper);

/***/ }),

/***/ "./src/presentational-components/shared/service-offering-body.js":
/*!***********************************************************************!*\
  !*** ./src/presentational-components/shared/service-offering-body.js ***!
  \***********************************************************************/
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
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _card_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-common */ "./src/presentational-components/shared/card-common.js");







var ServiceOfferingCardBody = function ServiceOfferingCardBody(_ref) {
  var name = _ref.name,
      display_name = _ref.display_name,
      distributor = _ref.distributor,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["name", "display_name", "distributor"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
    style: {
      height: 240
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "elipsis-text-overflow",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].h3,
    title: display_name || name
  }, display_name || name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].small
  }, distributor, "\xA0")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_card_common__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    toDisplay: [props.long_description ? 'long_description' : 'description']
  })));
};

ServiceOfferingCardBody.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display_name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  distributor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  long_description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceOfferingCardBody);

/***/ }),

/***/ "./src/presentational-components/shared/top-toolbar.js":
/*!*************************************************************!*\
  !*** ./src/presentational-components/shared/top-toolbar.js ***!
  \*************************************************************/
/*! exports provided: default, TopToolbarTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbarTitle", function() { return TopToolbarTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _loader_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _breadcrubms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrubms */ "./src/presentational-components/shared/breadcrubms.js");
/* harmony import */ var _top_toolbar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-toolbar.scss */ "./src/presentational-components/shared/top-toolbar.scss");
/* harmony import */ var _top_toolbar_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_top_toolbar_scss__WEBPACK_IMPORTED_MODULE_5__);







var TopToolbar = function TopToolbar(_ref) {
  var children = _ref.children,
      paddingBottom = _ref.paddingBottom;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-u-pt-xl pf-u-pr-xl pf-u-pl-xl ".concat(paddingBottom ? 'pf-u-pb-xl' : '', " top-toolbar")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Level"], {
    className: "pf-u-mb-md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_breadcrubms__WEBPACK_IMPORTED_MODULE_4__["default"], null)), children);
};

TopToolbar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,
  paddingBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
TopToolbar.defaultProps = {
  paddingBottom: true
};
/* harmony default export */ __webpack_exports__["default"] = (TopToolbar);
var TopToolbarTitle = function TopToolbarTitle(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Level"], {
    className: "pf-u-mb-xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], {
    className: "top-toolbar-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h2
  }, title || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loader_placeholders__WEBPACK_IMPORTED_MODULE_3__["ToolbarTitlePlaceholder"], null)))), children));
};
TopToolbarTitle.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node)])
};

/***/ }),

/***/ "./src/presentational-components/shared/top-toolbar.scss":
/*!***************************************************************!*\
  !*** ./src/presentational-components/shared/top-toolbar.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/redux/action-types.js":
/*!***********************************!*\
  !*** ./src/redux/action-types.js ***!
  \***********************************/
/*! exports provided: FETCH_SERVICE_PLANS, FETCH_SERVICE_PLAN_PARAMETERS, UPDATE_SERVICE_DATA, SUBMIT_SERVICE_ORDER, SET_SELECTED_PLAN, LIST_ORDERS, FETCH_PLATFORM, FETCH_PLATFORMS, FETCH_PLATFORM_ITEMS, FETCH_PLATFORM_ITEM, FETCH_MULTIPLE_PLATFORM_ITEMS, FILTER_PLATFORM_ITEMS, FETCH_PORTFOLIOS, FETCH_PORTFOLIO_ITEM, FETCH_PORTFOLIO_ITEMS, FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO, FETCH_PORTFOLIO, FILTER_PORTFOLIO_ITEMS, ADD_PORTFOLIO, ADD_TO_PORTFOLIO, UPDATE_PORTFOLIO, REMOVE_PORTFOLIO, SELECT_PORTFOLIO_ITEM, FETCH_RBAC_GROUPS, SHARE_PORTFOLIO, UNSHARE_PORTFOLIO, QUERY_PORTFOLIO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_PLANS", function() { return FETCH_SERVICE_PLANS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SERVICE_PLAN_PARAMETERS", function() { return FETCH_SERVICE_PLAN_PARAMETERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SERVICE_DATA", function() { return UPDATE_SERVICE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_SERVICE_ORDER", function() { return SUBMIT_SERVICE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_PLAN", function() { return SET_SELECTED_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_ORDERS", function() { return LIST_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLATFORM", function() { return FETCH_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLATFORMS", function() { return FETCH_PLATFORMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLATFORM_ITEMS", function() { return FETCH_PLATFORM_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLATFORM_ITEM", function() { return FETCH_PLATFORM_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MULTIPLE_PLATFORM_ITEMS", function() { return FETCH_MULTIPLE_PLATFORM_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_PLATFORM_ITEMS", function() { return FILTER_PLATFORM_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PORTFOLIOS", function() { return FETCH_PORTFOLIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PORTFOLIO_ITEM", function() { return FETCH_PORTFOLIO_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PORTFOLIO_ITEMS", function() { return FETCH_PORTFOLIO_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO", function() { return FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PORTFOLIO", function() { return FETCH_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_PORTFOLIO_ITEMS", function() { return FILTER_PORTFOLIO_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PORTFOLIO", function() { return ADD_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_PORTFOLIO", function() { return ADD_TO_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PORTFOLIO", function() { return UPDATE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PORTFOLIO", function() { return REMOVE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PORTFOLIO_ITEM", function() { return SELECT_PORTFOLIO_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RBAC_GROUPS", function() { return FETCH_RBAC_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_PORTFOLIO", function() { return SHARE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSHARE_PORTFOLIO", function() { return UNSHARE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_PORTFOLIO", function() { return QUERY_PORTFOLIO; });
var FETCH_SERVICE_PLANS = 'FETCH_SERVICE_PLANS';
var FETCH_SERVICE_PLAN_PARAMETERS = 'FETCH_SERVICE_PLAN_PARAMETERS';
var UPDATE_SERVICE_DATA = 'UPDATE_SERVICE_DATA';
var SUBMIT_SERVICE_ORDER = 'SUBMIT_SERVICE_ORDER';
var SET_SELECTED_PLAN = 'SET_SELECTED_PLAN';
var LIST_ORDERS = 'LIST_ORDERS';
var FETCH_PLATFORM = 'FETCH_PLATFORM';
var FETCH_PLATFORMS = 'FETCH_PLATFORMS';
var FETCH_PLATFORM_ITEMS = 'FETCH_PLATFORM_ITEMS';
var FETCH_PLATFORM_ITEM = 'FETCH_PLATFORM_ITEM;';
var FETCH_MULTIPLE_PLATFORM_ITEMS = 'FETCH_MULTIPLE_PLATFORM_ITEMS';
var FILTER_PLATFORM_ITEMS = 'FILTER_PLATFORM_ITEMS';
var FETCH_PORTFOLIOS = 'FETCH_PORTFOLIOS';
var FETCH_PORTFOLIO_ITEM = 'FETCH_PORTFOLIO_ITEM';
var FETCH_PORTFOLIO_ITEMS = 'FETCH_PORTFOLIO_ITEMS';
var FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO = 'FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO';
var FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
var FILTER_PORTFOLIO_ITEMS = 'FILTER_PORTFOLIO_ITEMS';
var ADD_PORTFOLIO = 'ADD_PORTFOLIO';
var ADD_TO_PORTFOLIO = 'ADD_TO_PORTFOLIO';
var UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';
var REMOVE_PORTFOLIO = 'REMOVE_PORTFOLIO';
var SELECT_PORTFOLIO_ITEM = 'SELECT_PORTFOLIO_ITEM';
var FETCH_RBAC_GROUPS = 'FETCH_RBAC_GROUPS';
var SHARE_PORTFOLIO = 'SHARE_PORTFOLIO';
var UNSHARE_PORTFOLIO = 'UNSHARE_PORTFOLIO';
var QUERY_PORTFOLIO = 'QUERY_PORTFOLIO';

/***/ }),

/***/ "./src/redux/action-types/action-types-helper.js":
/*!*******************************************************!*\
  !*** ./src/redux/action-types/action-types-helper.js ***!
  \*******************************************************/
/*! exports provided: createAsyncActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncActionTypes", function() { return createAsyncActionTypes; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);



var createAsyncActionTypes = function createAsyncActionTypes(actionTypes, prefix) {
  return actionTypes.reduce(function (acc, curr) {
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(acc), [curr, "".concat(curr, "_PENDING"), "".concat(curr, "_FULFILLED"), "".concat(curr, "_REJECTED")]);
  }, []).reduce(function (acc, curr) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, curr, "".concat(prefix).concat(curr)));
  }, {});
};

/***/ }),

/***/ "./src/redux/action-types/approval-action-types.js":
/*!*********************************************************!*\
  !*** ./src/redux/action-types/approval-action-types.js ***!
  \*********************************************************/
/*! exports provided: ASYNC_ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_ACTIONS", function() { return ASYNC_ACTIONS; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types-helper */ "./src/redux/action-types/action-types-helper.js");


var APPROVAL_PREFIX = '@@catalog/approval/';
var asyncActionTypes = ['FETCH_WORKFLOWS'];
var ASYNC_ACTIONS = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_action_types_helper__WEBPACK_IMPORTED_MODULE_1__["createAsyncActionTypes"])(asyncActionTypes, APPROVAL_PREFIX));

/***/ }),

/***/ "./src/redux/actions/approval-actions.js":
/*!***********************************************!*\
  !*** ./src/redux/actions/approval-actions.js ***!
  \***********************************************/
/*! exports provided: fetchWorkflows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflows", function() { return fetchWorkflows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types_approval_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types/approval-action-types */ "./src/redux/action-types/approval-action-types.js");
/* harmony import */ var _helpers_approval_approval_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/approval/approval-helper */ "./src/helpers/approval/approval-helper.js");



var fetchWorkflows = function fetchWorkflows() {
  return {
    type: _action_types_approval_action_types__WEBPACK_IMPORTED_MODULE_1__["ASYNC_ACTIONS"].FETCH_WORKFLOWS,
    payload: Object(_helpers_approval_approval_helper__WEBPACK_IMPORTED_MODULE_2__["getApprovalWorkflows"])().then(function (_ref) {
      var data = _ref.data;
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data.map(function (_ref2) {
        var id = _ref2.id,
            name = _ref2.name;
        return {
          value: id,
          label: name
        };
      }));
    })
  };
};

/***/ }),

/***/ "./src/redux/actions/order-actions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/order-actions.js ***!
  \********************************************/
/*! exports provided: fetchServicePlans, fetchOrderList, updateServiceData, setSelectedPlan, sendSubmitOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchServicePlans", function() { return fetchServicePlans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOrderList", function() { return fetchOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServiceData", function() { return updateServiceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedPlan", function() { return setSelectedPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSubmitOrder", function() { return sendSubmitOrder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_order_order_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/order/order-helper */ "./src/helpers/order/order-helper.js");




var fetchServicePlans = function fetchServicePlans(portfolioItemId) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SERVICE_PLANS"],
    payload: _helpers_order_order_helper__WEBPACK_IMPORTED_MODULE_3__["getServicePlans"](portfolioItemId)
  };
};
var fetchOrderList = function fetchOrderList() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["LIST_ORDERS"],
    payload: _helpers_order_order_helper__WEBPACK_IMPORTED_MODULE_3__["listOrders"]().then(function (_ref) {
      var data = _ref.data;
      return data;
    })
  };
};
var updateServiceData = function updateServiceData(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_SERVICE_DATA"],
    payload: {
      serviceData: data
    }
  };
};
var setSelectedPlan = function setSelectedPlan(data) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["SET_SELECTED_PLAN"],
    payload: data
  };
};

var OrderNotification = function OrderNotification() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can track the progress of the order in your ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/orders"
  }, "Orders"), " page.");
};

var sendSubmitOrder = function sendSubmitOrder(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["SUBMIT_SERVICE_ORDER"],
    payload: _helpers_order_order_helper__WEBPACK_IMPORTED_MODULE_3__["sendSubmitOrder"](apiProps),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Your order has been accepted successfully',
          description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderNotification, null),
          dismissable: true
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/redux/actions/platform-actions.js":
/*!***********************************************!*\
  !*** ./src/redux/actions/platform-actions.js ***!
  \***********************************************/
/*! exports provided: fetchPlatforms, fetchPlatformItems, fetchMultiplePlatformItems, fetchSelectedPlatform, searchPlatformItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlatforms", function() { return fetchPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlatformItems", function() { return fetchPlatformItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMultiplePlatformItems", function() { return fetchMultiplePlatformItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSelectedPlatform", function() { return fetchSelectedPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlatformItems", function() { return searchPlatformItems; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_platform_platform_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/platform/platform-helper */ "./src/helpers/platform/platform-helper.js");





var doFetchPlatforms = function doFetchPlatforms() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORMS"],
    payload: _helpers_platform_platform_helper__WEBPACK_IMPORTED_MODULE_3__["getPlatforms"]().then(function (_ref) {
      var data = _ref.data;
      return data;
    })
  };
};

var fetchPlatforms = function fetchPlatforms() {
  return function (dispatch) {
    return dispatch(doFetchPlatforms());
  };
};
var fetchPlatformItems = function fetchPlatformItems(platformId, options) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM_ITEMS"],
    payload: _helpers_platform_platform_helper__WEBPACK_IMPORTED_MODULE_3__["getPlatformItems"](platformId, options),
    meta: {
      platformId: platformId
    }
  };
};
var fetchMultiplePlatformItems = function fetchMultiplePlatformItems(platformsId) {
  var platformPromisses = platformsId.map(function (platformId) {
    return _helpers_platform_platform_helper__WEBPACK_IMPORTED_MODULE_3__["getPlatformItems"](platformId).then(function (data) {
      return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, platformId, data);
    });
  });
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_MULTIPLE_PLATFORM_ITEMS"],
    payload: Promise.all(platformPromisses).then(function (data) {
      return data.reduce(function (acc, curr) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, acc, curr);
      }, {});
    })
  };
};
var fetchSelectedPlatform = function fetchSelectedPlatform(id) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM"],
    payload: _helpers_platform_platform_helper__WEBPACK_IMPORTED_MODULE_3__["getPlatform"](id)
  };
};
var searchPlatformItems = function searchPlatformItems(value) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["FILTER_PLATFORM_ITEMS"],
    payload: new Promise(function (resolve) {
      resolve(value);
    })
  };
};

/***/ }),

/***/ "./src/redux/actions/portfolio-actions.js":
/*!************************************************!*\
  !*** ./src/redux/actions/portfolio-actions.js ***!
  \************************************************/
/*! exports provided: doFetchPortfolios, fetchPortfolios, fetchPortfolioItems, fetchPortfolioItem, fetchPortfolioItemsWithPortfolio, fetchSelectedPortfolio, searchPortfolioItems, addPortfolio, addToPortfolio, updatePortfolio, removePortfolio, selectPortfolioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchPortfolios", function() { return doFetchPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPortfolios", function() { return fetchPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPortfolioItems", function() { return fetchPortfolioItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPortfolioItem", function() { return fetchPortfolioItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPortfolioItemsWithPortfolio", function() { return fetchPortfolioItemsWithPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSelectedPortfolio", function() { return fetchSelectedPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPortfolioItems", function() { return searchPortfolioItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPortfolio", function() { return addPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToPortfolio", function() { return addToPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePortfolio", function() { return updatePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePortfolio", function() { return removePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPortfolioItem", function() { return selectPortfolioItem; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/portfolio/portfolio-helper */ "./src/helpers/portfolio/portfolio-helper.js");



var doFetchPortfolios = function doFetchPortfolios(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PORTFOLIOS"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["listPortfolios"](apiProps).then(function (_ref) {
      var data = _ref.data;
      return data;
    })
  };
};
var fetchPortfolios = function fetchPortfolios(apiProps) {
  return function (dispatch) {
    return dispatch(doFetchPortfolios(apiProps));
  };
};
var fetchPortfolioItems = function fetchPortfolioItems(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PORTFOLIO_ITEMS"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["getPortfolioItems"](apiProps).then(function (_ref2) {
      var data = _ref2.data;
      return data;
    })
  };
};
var fetchPortfolioItem = function fetchPortfolioItem(portfolioItemId) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PORTFOLIO_ITEM"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["getPortfolioItem"](portfolioItemId)
  };
};
var fetchPortfolioItemsWithPortfolio = function fetchPortfolioItemsWithPortfolio(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["getPortfolioItemsWithPortfolio"](apiProps).then(function (_ref3) {
      var data = _ref3.data;
      return data;
    })
  };
};
var fetchSelectedPortfolio = function fetchSelectedPortfolio(id) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PORTFOLIO"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["getPortfolio"](id)
  };
};
var searchPortfolioItems = function searchPortfolioItems(value) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FILTER_PORTFOLIO_ITEMS"],
    payload: new Promise(function (resolve) {
      resolve(value);
    })
  };
};
var addPortfolio = function addPortfolio(portfolioData, items) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_PORTFOLIO"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["addPortfolio"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, portfolioData, {
      workflow_ref: portfolioData.workflow_ref || null
    }), items),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding portfolio',
          description: 'The portfolio was added successfully.'
        }
      }
    }
  };
};
var addToPortfolio = function addToPortfolio(portfolioId, items) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_PORTFOLIO"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["addToPortfolio"](portfolioId, items),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding products',
          description: 'Products were successfully added to portfolio.'
        }
      }
    }
  };
};
var updatePortfolio = function updatePortfolio(portfolioData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PORTFOLIO"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["updatePortfolio"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, portfolioData, {
      workflow_ref: portfolioData.workflow_ref || null
    })),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success updating portfolio',
          description: 'The portfolio was updated successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed updating portfolio',
          description: 'The portfolio was not updated successfuly.'
        }
      }
    }
  };
};
var removePortfolio = function removePortfolio(portfolio) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PORTFOLIO"],
    payload: _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_2__["removePortfolio"](portfolio),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing portfolio',
          description: 'The portfolio was removed successfully.'
        }
      }
    }
  };
};
var selectPortfolioItem = function selectPortfolioItem(portfolioItem) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["SELECT_PORTFOLIO_ITEM"],
    payload: portfolioItem
  };
};

/***/ }),

/***/ "./src/redux/actions/rbac-actions.js":
/*!*******************************************!*\
  !*** ./src/redux/actions/rbac-actions.js ***!
  \*******************************************/
/*! exports provided: fetchRbacGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRbacGroups", function() { return fetchRbacGroups; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_rbac_rbac_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/rbac/rbac-helper */ "./src/helpers/rbac/rbac-helper.js");


var fetchRbacGroups = function fetchRbacGroups() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_RBAC_GROUPS"],
    payload: Object(_helpers_rbac_rbac_helper__WEBPACK_IMPORTED_MODULE_1__["getRbacGroups"])().then(function (_ref) {
      var data = _ref.data;
      return data.map(function (_ref2) {
        var uuid = _ref2.uuid,
            name = _ref2.name;
        return {
          value: uuid,
          label: name
        };
      });
    })
  };
};

/***/ }),

/***/ "./src/redux/actions/share-actions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/share-actions.js ***!
  \********************************************/
/*! exports provided: fetchShareInfo, sharePortfolio, unsharePortfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchShareInfo", function() { return fetchShareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharePortfolio", function() { return sharePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsharePortfolio", function() { return unsharePortfolio; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_share_share_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/share/share-helper */ "./src/helpers/share/share-helper.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var fetchShareInfo = function fetchShareInfo(portfolioId) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["QUERY_PORTFOLIO"],
    payload: _helpers_share_share_helper__WEBPACK_IMPORTED_MODULE_1__["getShareInfo"](portfolioId)
  };
};
var sharePortfolio = function sharePortfolio(portfolioData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["SHARE_PORTFOLIO"],
    payload: _helpers_share_share_helper__WEBPACK_IMPORTED_MODULE_1__["sharePortfolio"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, portfolioData)),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success sharing portfolio',
          description: 'The portfolio was shared successfully.'
        }
      }
    }
  };
};
var unsharePortfolio = function unsharePortfolio(portfolioData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["UNSHARE_PORTFOLIO"],
    payload: _helpers_share_share_helper__WEBPACK_IMPORTED_MODULE_1__["unsharePortfolio"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, portfolioData)),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success unsharing portfolio',
          description: 'The portfolio was unshared successfully.'
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/redux/reducers/approval-reducer.js":
/*!************************************************!*\
  !*** ./src/redux/reducers/approval-reducer.js ***!
  \************************************************/
/*! exports provided: approvalInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvalInitialState", function() { return approvalInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_approval_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types/approval-action-types */ "./src/redux/action-types/approval-action-types.js");



var _ASYNC_ACTIONS$FETCH_;


var approvalInitialState = {
  isFetching: false,
  workflows: []
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isFetching: true
  });
};

var setWorkflows = function setWorkflows(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isFetching: false,
    workflows: payload
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_ASYNC_ACTIONS$FETCH_ = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTIONS$FETCH_, _action_types_approval_action_types__WEBPACK_IMPORTED_MODULE_2__["ASYNC_ACTIONS"].FETCH_WORKFLOWS_PENDING, setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTIONS$FETCH_, _action_types_approval_action_types__WEBPACK_IMPORTED_MODULE_2__["ASYNC_ACTIONS"].FETCH_WORKFLOWS_FULFILLED, setWorkflows), _ASYNC_ACTIONS$FETCH_);

/***/ }),

/***/ "./src/redux/reducers/order-reducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/order-reducer.js ***!
  \*********************************************/
/*! exports provided: orderInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderInitialState", function() { return orderInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var orderInitialState = {
  servicePlans: [],
  selectedPlan: {},
  serviceData: {},
  isLoading: true
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setServicePlans = function setServicePlans(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    servicePlans: payload,
    isLoading: false
  });
};

var setListOrder = function setListOrder(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    orders: payload,
    isLoading: false
  });
};

var setPlanParameters = function setPlanParameters(state, _ref3) {
  var payload = _ref3.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    planParameters: payload,
    isLoading: false
  });
};

var submitServiceOrder = function submitServiceOrder(state, _ref4) {
  var payload = _ref4.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, payload, {
    isLoading: false
  });
};

var updateServiceData = function updateServiceData(state, _ref5) {
  var payload = _ref5.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    serviceData: payload,
    isLoading: false
  });
};

var selectPlan = function selectPlan(state, _ref6) {
  var payload = _ref6.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedPlan: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SERVICE_PLANS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SERVICE_PLANS"], "_FULFILLED"), setServicePlans), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["LIST_ORDERS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["LIST_ORDERS"], "_FULFILLED"), setListOrder), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SERVICE_PLAN_PARAMETERS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_SERVICE_PLAN_PARAMETERS"], "_FULFILLED"), setPlanParameters), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["SUBMIT_SERVICE_ORDER"], "_FULFILLED"), submitServiceOrder), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, _action_types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_SERVICE_DATA"], updateServiceData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, _action_types__WEBPACK_IMPORTED_MODULE_2__["SET_SELECTED_PLAN"], selectPlan), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/platform-reducer.js":
/*!************************************************!*\
  !*** ./src/redux/reducers/platform-reducer.js ***!
  \************************************************/
/*! exports provided: platformInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platformInitialState", function() { return platformInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var platformInitialState = {
  isPlatformDataLoading: false,
  platforms: [],
  platformItems: {},
  platformItem: {},
  platform: {},
  filterValue: ''
}; // rename isPlatformLoading.. to isLoaing so we can use common action for loading states

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isPlatformDataLoading: true
  });
};

var setPlatforms = function setPlatforms(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    platforms: payload,
    isPlatformDataLoading: false
  });
};

var setPlatformItems = function setPlatformItems(state, _ref2) {
  var payload = _ref2.payload,
      platformId = _ref2.meta.platformId;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    platformItems: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.platformItems, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, platformId, payload)),
    isPlatformDataLoading: false
  });
};

var setMultiplePlatformItems = function setMultiplePlatformItems(state, _ref3) {
  var payload = _ref3.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    platformItems: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state.platformItems, payload),
    isPlatformDataLoading: false
  });
};

var setPortfolioItems = function setPortfolioItems(state, _ref4) {
  var payload = _ref4.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    portfolioItem: payload,
    isPlatformDataLoading: false
  });
};

var selectPlatform = function selectPlatform(state, _ref5) {
  var payload = _ref5.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedPlatform: payload,
    isLoading: false
  });
};

var filterPlatformItems = function filterPlatformItems(state, _ref6) {
  var payload = _ref6.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    filterValue: payload
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORMS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORMS"], "_FULFILLED"), setPlatforms), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM_ITEMS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM_ITEMS"], "_FULFILLED"), setPlatformItems), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM_ITEM"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM_ITEM"], "_FULFILLED"), setPortfolioItems), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLATFORM"], "_FULFILLED"), selectPlatform), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FILTER_PLATFORM_ITEMS"], "_FULFILLED"), filterPlatformItems), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_MULTIPLE_PLATFORM_ITEMS"], "_FULFILLED"), setMultiplePlatformItems), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/portfolio-reducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/portfolio-reducer.js ***!
  \*************************************************/
/*! exports provided: portfoliosInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfoliosInitialState", function() { return portfoliosInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var portfoliosInitialState = {
  portfolioItems: [],
  portfolioItem: {},
  portfolios: [],
  portfolio: {},
  filterValue: '',
  isLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setPortfolios = function setPortfolios(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    portfolios: payload,
    isLoading: false
  });
};

var setPortfolioItems = function setPortfolioItems(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    portfolioItems: payload,
    isLoading: false
  });
};

var setPortfolioItem = function setPortfolioItem(state, _ref3) {
  var payload = _ref3.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    portfolioItem: payload,
    isLoading: false
  });
};

var selectPortfolio = function selectPortfolio(state, _ref4) {
  var payload = _ref4.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedPortfolio: payload,
    isLoading: false
  });
};

var filterPortfolios = function filterPortfolios(state, _ref5) {
  var payload = _ref5.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    filterValue: payload
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIOS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIOS"], "_FULFILLED"), setPortfolios), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO_ITEMS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO_ITEMS"], "_FULFILLED"), setPortfolioItems), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO"], "_FULFILLED"), setPortfolioItems), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO_ITEM"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO_ITEM"], "_FULFILLED"), setPortfolioItem), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PORTFOLIO"], "_FULFILLED"), selectPortfolio), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, _action_types__WEBPACK_IMPORTED_MODULE_2__["FILTER_PORTFOLIO_ITEMS"], filterPortfolios), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["SELECT_PORTFOLIO_ITEM"], "_FULFILLED"), setPortfolioItem), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/rbac-reducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/rbac-reducer.js ***!
  \********************************************/
/*! exports provided: rbacInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rbacInitialState", function() { return rbacInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var _$concat$$concat;

 // Initial State

var rbacInitialState = {
  rbacGroups: [],
  isLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setRbacGroups = function setRbacGroups(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    rbacGroups: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_RBAC_GROUPS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_RBAC_GROUPS"], "_FULFILLED"), setRbacGroups), _$concat$$concat);

/***/ }),

/***/ "./src/redux/reducers/share-reducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/share-reducer.js ***!
  \*********************************************/
/*! exports provided: shareInfoInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareInfoInitialState", function() { return shareInfoInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var _$concat$$concat;

 // Initial State

var shareInfoInitialState = {
  shareInfo: [],
  isLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setShareInfo = function setShareInfo(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    shareInfo: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["QUERY_PORTFOLIO"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["QUERY_PORTFOLIO"], "_FULFILLED"), setShareInfo), _$concat$$concat);

/***/ }),

/***/ "./src/smart-components/common/form-renderer.js":
/*!******************************************************!*\
  !*** ./src/smart-components/common/form-renderer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../presentational-components/shared/pf4-select-wrapper */ "./src/presentational-components/shared/pf4-select-wrapper.js");









var buttonPositioning = {
  default: {},
  modal: {
    buttonOrder: ['cancel', 'reset', 'save'],
    buttonClassName: 'modal-form-right-align'
  }
};

var FormRenderer = function FormRenderer(_ref) {
  var componentMapper = _ref.componentMapper,
      formContainer = _ref.formContainer,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["componentMapper", "formContainer"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: buttonPositioning[formContainer].buttonClassName
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    formFieldsMapper: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["formFieldsMapper"], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      componentMapper: componentMapper
    }, _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__["componentTypes"].SELECT, _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])),
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["layoutMapper"]
  }, buttonPositioning[formContainer], rest)));
};

FormRenderer.propTypes = {
  componentMapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['default', 'modal'])
};
FormRenderer.defaultProps = {
  componentMapper: {},
  formContainer: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (FormRenderer);

/***/ }),

/***/ "./src/smart-components/common/order-modal.js":
/*!****************************************************!*\
  !*** ./src/smart-components/common/order-modal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/vendor-openshift.svg */ "./src/assets/images/vendor-openshift.svg");
/* harmony import */ var _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _presentational_components_shared_image_with_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../presentational-components/shared/image-with-default */ "./src/presentational-components/shared/image-with-default.js");
/* harmony import */ var _order_order_service_form_step_configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../order/order-service-form-step-configuration */ "./src/smart-components/order/order-service-form-step-configuration.js");










var OrderModal = function OrderModal(_ref) {
  var serviceData = _ref.serviceData,
      closeUrl = _ref.closeUrl,
      push = _ref.history.push;
  return serviceData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: true,
    hideTitle: true,
    onClose: function onClose() {
      return push(closeUrl);
    },
    style: {
      maxWidth: 800,
      minHeight: 300
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_presentational_components_shared_image_with_default__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: serviceData.imageUrl || _assets_images_vendor_openshift_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: "40"
  }), serviceData.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_order_order_service_form_step_configuration__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    closeUrl: closeUrl
  }, serviceData))) : null;
};

OrderModal.propTypes = {
  orderData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  serviceData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$orderReducer = _ref2.orderReducer,
      selectedItem = _ref2$orderReducer.selectedItem,
      servicePlans = _ref2$orderReducer.servicePlans;
  return {
    selectedItem: selectedItem,
    servicePlans: servicePlans
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(OrderModal)));

/***/ }),

/***/ "./src/smart-components/content-gallery/content-gallery.js":
/*!*****************************************************************!*\
  !*** ./src/smart-components/content-gallery/content-gallery.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");






var NoItems = function NoItems() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].h1
  }, "No items found"));
};

var ContentGallery = function ContentGallery(_ref) {
  var isLoading = _ref.isLoading,
      items = _ref.items;
  return isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_3__["CardLoader"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    type: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Gallery"], {
    gutter: "md",
    className: "content-gallery"
  }, items.length > 0 ? items : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoItems, null)));
};

ContentGallery.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ContentGallery);

/***/ }),

/***/ "./src/smart-components/order/order-service-form-step-configuration.js":
/*!*****************************************************************************!*\
  !*** ./src/smart-components/order/order-service-form-step-configuration.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var _redux_actions_order_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/order-actions */ "./src/redux/actions/order-actions.js");
/* harmony import */ var _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../helpers/portfolio/portfolio-helper */ "./src/helpers/portfolio/portfolio-helper.js");

















var OrderServiceFormStepConfiguration =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(OrderServiceFormStepConfiguration, _React$Component);

  function OrderServiceFormStepConfiguration() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, OrderServiceFormStepConfiguration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(OrderServiceFormStepConfiguration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      selectedPlanIdx: 0,
      controlParametersLoaded: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "optionRow", function (plan, _option, selectedId, onChange) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        id: plan.id,
        key: plan.id,
        value: plan.id,
        checked: selectedId === plan.id,
        name: plan.name,
        "aria-label": plan.description,
        onChange: onChange,
        label: plan.description
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handlePlanChange", function (arg, event) {
      var planId = event.currentTarget.value;

      _this.setState({
        selectedPlanIdx: _this.props.servicePlans.findIndex(function (plan) {
          return plan.id === planId;
        })
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "planOptions", function () {
      var selectedId = _this.props.servicePlans[_this.state.selectedPlanIdx].id;
      var onChange = _this.handlePlanChange;
      return _this.props.servicePlans.map(function (plan, option) {
        return _this.optionRow(plan, option, selectedId, onChange);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onSubmit", function (data) {
      var portfolioItemId = _this.props.id;
      var service_plan_id = _this.props.servicePlans[_this.state.selectedPlanIdx].id;

      _this.props.sendSubmitOrder({
        portfolio_item_id: portfolioItemId,
        service_plan_ref: service_plan_id,
        service_parameters: data
      });

      _this.props.history.push(_this.props.closeUrl);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(OrderServiceFormStepConfiguration, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.id;
      this.props.fetchPlans(id);
      Object(_helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_15__["fetchProviderControlParameters"])(id).then(function (providerControlParameters) {
        return _this2.setState({
          providerControlParameters: providerControlParameters,
          controlParametersLoaded: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          controlParametersLoaded = _this$state.controlParametersLoaded,
          providerControlParameters = _this$state.providerControlParameters;

      if (!this.props.isLoading && controlParametersLoaded) {
        var initialSchema = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props.servicePlans[this.state.selectedPlanIdx].create_json_schema);

        var formSchema = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialSchema, {
          properties: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            providerControlParameters: providerControlParameters
          }, initialSchema.properties)
        });

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
          gutter: "md"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Title"], {
          size: "lg"
        }, " Configuration ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Form"], null, this.props.servicePlans.length > 1 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Title"], {
          size: "md"
        }, "Select Plan:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.planOptions()))), !this.props.isLoading && this.props.servicePlans.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          schema: formSchema,
          onSubmit: this.onSubmit,
          schemaType: "mozilla",
          formContainer: "modal"
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Bullseye"], null, this.props.isLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        color: '#00b9e4'
      }, " Loading..."));
    }
  }]);

  return OrderServiceFormStepConfiguration;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

OrderServiceFormStepConfiguration.propTypes = {
  orderData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  fetchPlans: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  serviceData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  servicePlans: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  id: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  sendSubmitOrder: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
  }).isRequired,
  closeUrl: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
};
OrderServiceFormStepConfiguration.defaultProps = {
  servicePlans: []
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$orderReducer = _ref.orderReducer,
      isLoading = _ref$orderReducer.isLoading,
      servicePlans = _ref$orderReducer.servicePlans;
  return {
    isLoading: isLoading,
    servicePlans: servicePlans
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPlans: function fetchPlans(portfolioItemId) {
      return dispatch(Object(_redux_actions_order_actions__WEBPACK_IMPORTED_MODULE_14__["fetchServicePlans"])(portfolioItemId));
    },
    sendSubmitOrder: function sendSubmitOrder(data) {
      return dispatch(Object(_redux_actions_order_actions__WEBPACK_IMPORTED_MODULE_14__["sendSubmitOrder"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(OrderServiceFormStepConfiguration)));

/***/ }),

/***/ "./src/smart-components/order/orders-toolbar.js":
/*!******************************************************!*\
  !*** ./src/smart-components/order/orders-toolbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _orders_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.scss */ "./src/smart-components/order/orders.scss");
/* harmony import */ var _orders_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_orders_scss__WEBPACK_IMPORTED_MODULE_3__);





var OrdersToolbar = function OrdersToolbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    paddingBottom: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["ToolbarSection"], {
    "aria-label": "order-toolbar-heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["TextVariants"].h1
  }, "Orders"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrdersToolbar);

/***/ }),

/***/ "./src/smart-components/order/orders.js":
/*!**********************************************!*\
  !*** ./src/smart-components/order/orders.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redux_actions_order_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/order-actions */ "./src/redux/actions/order-actions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _orders_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orders-toolbar */ "./src/smart-components/order/orders-toolbar.js");
/* harmony import */ var _orders_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders.scss */ "./src/smart-components/order/orders.scss");
/* harmony import */ var _orders_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_orders_scss__WEBPACK_IMPORTED_MODULE_14__);
















var Orders =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Orders, _Component);

  function Orders() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Orders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Orders)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      orders: [],
      activeTabKey: 0,
      dataListExpanded: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleTabClick", function (_event, activeTabKey) {
      return _this.setState({
        activeTabKey: activeTabKey
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleDataItemToggle", function (id) {
      return _this.setState(function (_ref) {
        var dataListExpanded = _ref.dataListExpanded;
        return {
          dataListExpanded: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, dataListExpanded, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, id, !dataListExpanded[id]))
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderDataListItems", function (data) {
      return data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListItem"], {
          key: item.id,
          "aria-labelledby": "".concat(item.id, "-expand"),
          isExpanded: _this.state.dataListExpanded[item.id]
        }, data.id, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListToggle"], {
          id: item.id,
          "aria-label": "".concat(item.id, "-expand"),
          "aria-labelledby": "".concat(item.id, "-expand"),
          onClick: function onClick() {
            return _this.handleDataItemToggle(item.id);
          },
          isExpanded: _this.state.dataListExpanded[item.id]
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h4
        }, "Order ", item.id), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          style: {
            marginBottom: 0
          },
          component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].small
        }, item.created_at.toString()))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], {
          className: "order-cell",
          style: {
            alignSelf: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
          className: "text-align-right"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h5
        }, item.state))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListContent"], {
          "aria-label": "".concat(item.id, "-content"),
          isHidden: !_this.state.dataListExpanded[item.id]
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Orders, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.fetchOrders().then(function () {
        return _this2.setState({
          orders: _this2.props.orderList.items.sort(function (a, b) {
            return b.id - a.id;
          })
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.props.isLoading.isLoading;

      if (isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, "Loading");
      }

      var _this$state = this.state,
          orders = _this$state.orders,
          activeTabKey = _this$state.activeTabKey;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_orders_toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Tabs"], {
        className: "order-tabs",
        activeKey: activeTabKey,
        onSelect: this.handleTabClick
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Tab"], {
        eventKey: 0,
        title: "My orders",
        className: "pf-u-p-lg"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataList"], {
        "aria-label": "all-orders"
      }, this.renderDataListItems(orders))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Tab"], {
        eventKey: 1,
        title: "All orders",
        className: "pf-u-p-lg"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataList"], {
        "aria-label": "all-orders"
      }, this.renderDataListItems(orders))))));
    }
  }]);

  return Orders;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$orderReducer = _ref2.orderReducer,
      orders = _ref2$orderReducer.orders,
      isLoading = _ref2$orderReducer.isLoading;
  return {
    orderList: {
      items: orders
    },
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchOrders: function fetchOrders() {
      return dispatch(Object(_redux_actions_order_actions__WEBPACK_IMPORTED_MODULE_11__["fetchOrderList"])());
    }
  };
};

Orders.propTypes = {
  orderList: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  fetchOrders: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Orders));

/***/ }),

/***/ "./src/smart-components/order/orders.scss":
/*!************************************************!*\
  !*** ./src/smart-components/order/orders.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/platform/platform.js":
/*!***************************************************!*\
  !*** ./src/smart-components/platform/platform.js ***!
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/platform-actions */ "./src/redux/actions/platform-actions.js");
/* harmony import */ var _content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-gallery/content-gallery */ "./src/smart-components/content-gallery/content-gallery.js");
/* harmony import */ var _presentational_components_platform_platform_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../presentational-components/platform/platform-toolbar */ "./src/presentational-components/platform/platform-toolbar.js");
/* harmony import */ var _presentational_components_platform_platform_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../presentational-components/platform/platform-item */ "./src/presentational-components/platform/platform-item.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Pagination */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Pagination.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");





















var Platform =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Platform, _Component);

  function Platform() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platform);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Platform)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleOnPerPageSelect", function (limit) {
      return _this.props.fetchPlatformItems(_this.props.match.params.id, {
        offset: _this.props.paginationCurrent.offset,
        limit: limit
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleSetPage", function (number, debounce) {
      var options = {
        offset: Object(_helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_17__["getNewPage"])(number, _this.props.paginationCurrent.limit),
        limit: _this.props.paginationCurrent.limit
      };

      var request = function request() {
        return _this.props.fetchPlatformItems(_this.props.match.params.id, options);
      };

      if (debounce) {
        return Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_19__["default"])(request, 250)();
      }

      return request();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platform, [{
    key: "fetchData",
    value: function fetchData(apiProps, pagination) {
      this.props.fetchSelectedPlatform(apiProps);
      this.props.fetchPlatformItems(apiProps, pagination);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData(this.props.match.params.id, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_17__["defaultSettings"]);
      Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_16__["scrollToTop"])();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchData(this.props.match.params.id, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_17__["defaultSettings"]);
        Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_16__["scrollToTop"])();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filteredItems = {
        items: this.props.platformItems.filter(function (item) {
          return Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_16__["filterServiceOffering"])(item, _this2.state.filterValue);
        }).map(function (data) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_platform_platform_item__WEBPACK_IMPORTED_MODULE_15__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            key: data.id
          }, data));
        }),
        isLoading: this.props.isPlatformDataLoading
      };
      var title = this.props.platform ? this.props.platform.name : '';
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_platform_platform_toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        searchValue: this.state.filterValue,
        onFilterChange: this.handleFilterChange,
        title: title
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_18__["Pagination"], {
        itemsPerPage: this.props.paginationCurrent.limit || 50,
        numberOfItems: this.props.paginationCurrent.count || 50,
        onPerPageSelect: this.handleOnPerPageSelect,
        page: Object(_helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_17__["getCurrentPage"])(this.props.paginationCurrent.limit, this.props.paginationCurrent.offset),
        onSetPage: this.handleSetPage,
        direction: "down"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_13__["default"], filteredItems));
    }
  }]);

  return Platform;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$platformReducer = _ref.platformReducer,
      selectedPlatform = _ref$platformReducer.selectedPlatform,
      platformItems = _ref$platformReducer.platformItems,
      isPlatformDataLoading = _ref$platformReducer.isPlatformDataLoading;
  var platformItemsData = selectedPlatform && platformItems[selectedPlatform.id];
  return {
    paginationLinks: platformItemsData && platformItemsData.links,
    paginationCurrent: platformItemsData && platformItemsData.meta,
    platform: selectedPlatform,
    platformItems: platformItemsData && platformItemsData.data,
    isPlatformDataLoading: !selectedPlatform || isPlatformDataLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    fetchSelectedPlatform: _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_12__["fetchSelectedPlatform"],
    fetchPlatformItems: _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_12__["fetchPlatformItems"]
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
  platformItems: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array,
  paginationCurrent: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired
  })
};
Platform.defaultProps = {
  platformItems: [],
  paginationCurrent: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Platform));

/***/ }),

/***/ "./src/smart-components/platform/platforms.js":
/*!****************************************************!*\
  !*** ./src/smart-components/platform/platforms.js ***!
  \****************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../content-gallery/content-gallery */ "./src/smart-components/content-gallery/content-gallery.js");
/* harmony import */ var _presentational_components_platform_platform_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../presentational-components/platform/platform-card */ "./src/presentational-components/platform/platform-card.js");
/* harmony import */ var _presentational_components_platform_platform_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../presentational-components/platform/platform-toolbar */ "./src/presentational-components/platform/platform-toolbar.js");
/* harmony import */ var _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/platform-actions */ "./src/redux/actions/platform-actions.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./platform */ "./src/smart-components/platform/platform.js");



















var platformsRoutes = {
  platforms: '',
  detail: '/detail/:id'
};

var Platforms =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Platforms, _Component);

  function Platforms() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platforms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Platforms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      filterValue: '',
      isOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "fetchData", function () {
      return _this.props.fetchPlatforms();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderPlatforms", function () {
      var filteredItems = {
        items: _this.props.platforms.filter(function (_ref) {
          var name = _ref.name;
          return name.toLowerCase().includes(_this.state.filterValue.toLowerCase());
        }).map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_platform_platform_card__WEBPACK_IMPORTED_MODULE_14__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            key: item.id
          }, item));
        }),
        isLoading: _this.props.isLoading && _this.props.platforms.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_platform_platform_toolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onFilterChange: _this.handleFilterChange,
        searchValue: _this.state.filterValue,
        title: "Platforms"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_13__["default"], filteredItems));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platforms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_17__["scrollToTop"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Section"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "/platforms".concat(platformsRoutes.detail),
        component: _platform__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
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
      isPlatformDataLoading = _ref2$platformReducer.isPlatformDataLoading,
      filterValue = _ref2$platformReducer.filterValue;
  return {
    platforms: platforms,
    isLoading: isPlatformDataLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPlatforms: function fetchPlatforms(apiProps) {
      return dispatch(Object(_redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_16__["fetchPlatforms"])(apiProps));
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

/***/ "./src/smart-components/portfolio/add-portfolio-modal.js":
/*!***************************************************************!*\
  !*** ./src/smart-components/portfolio/add-portfolio-modal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var _redux_actions_approval_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/approval-actions */ "./src/redux/actions/approval-actions.js");
/* harmony import */ var _forms_portfolio_form_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/portfolio-form.schema */ "./src/forms/portfolio-form.schema.js");
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");












var AddPortfolioModal = function AddPortfolioModal(_ref) {
  var goBack = _ref.history.goBack,
      addPortfolio = _ref.addPortfolio,
      fetchPortfolios = _ref.fetchPortfolios,
      initialValues = _ref.initialValues,
      updatePortfolio = _ref.updatePortfolio,
      fetchWorkflows = _ref.fetchWorkflows,
      workflows = _ref.workflows;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchWorkflows();
  }, []);

  var onSubmit = function onSubmit(data) {
    return initialValues ? updatePortfolio(data).then(goBack).then(function () {
      return fetchPortfolios();
    }) : addPortfolio(data).then(goBack).then(function () {
      return fetchPortfolios();
    });
  };

  var onCancel = function onCancel() {
    return goBack();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: initialValues ? 'Edit portfolio' : 'Create portfolio',
    isOpen: true,
    onClose: onCancel,
    isSmall: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    schema: Object(_forms_portfolio_form_schema__WEBPACK_IMPORTED_MODULE_9__["createPortfolioSchema"])(!initialValues, workflows),
    schemaType: "default",
    onSubmit: onSubmit,
    onCancel: onCancel,
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues),
    formContainer: "modal",
    buttonsLabels: {
      submitLabel: 'Save'
    }
  })));
};

AddPortfolioModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired,
  addPortfolio: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  fetchPortfolios: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  updatePortfolio: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  workflows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]).isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  })).isRequired
};

var mapStateToProps = function mapStateToProps(_ref2, _ref3) {
  var workflows = _ref2.approvalReducer.workflows,
      portfolios = _ref2.portfolioReducer.portfolios;
  var id = _ref3.match.params.id;
  return {
    initialValues: id && portfolios.find(function (item) {
      return item.id === id;
    }),
    portfolioId: id,
    workflows: workflows
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addPortfolio: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_10__["addPortfolio"],
    updatePortfolio: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_10__["updatePortfolio"],
    fetchPortfolios: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_10__["fetchPortfolios"],
    fetchWorkflows: _redux_actions_approval_actions__WEBPACK_IMPORTED_MODULE_8__["fetchWorkflows"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AddPortfolioModal)));

/***/ }),

/***/ "./src/smart-components/portfolio/add-products-to-portfolio/add-products-gallery.js":
/*!******************************************************************************************!*\
  !*** ./src/smart-components/portfolio/add-products-to-portfolio/add-products-gallery.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content-gallery/content-gallery */ "./src/smart-components/content-gallery/content-gallery.js");





var AddProductsGallery = function AddProductsGallery(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    editMode: true
  }, props));
};

AddProductsGallery.propTypes = {
  checkedItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
};
AddProductsGallery.defaultProps = {
  checkedItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddProductsGallery);

/***/ }),

/***/ "./src/smart-components/portfolio/add-products-to-portfolio/add-products-pagination.js":
/*!*********************************************************************************************!*\
  !*** ./src/smart-components/portfolio/add-products-to-portfolio/add-products-pagination.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/platform-actions */ "./src/redux/actions/platform-actions.js");









var AddProductsPagination = function AddProductsPagination(_ref) {
  var _ref$meta = _ref.meta,
      limit = _ref$meta.limit,
      count = _ref$meta.count,
      offset = _ref$meta.offset,
      platformId = _ref.platformId,
      fetchPlatformItems = _ref.fetchPlatformItems;

  var handleOnPerPageSelect = function handleOnPerPageSelect(limit) {
    return fetchPlatformItems(platformId, {
      offset: offset,
      limit: limit
    });
  };

  var handleSetPage = function handleSetPage(number, debounce) {
    var options = {
      offset: Object(_helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_6__["getNewPage"])(number, limit),
      limit: limit
    };

    var request = function request() {
      return fetchPlatformItems(platformId, options);
    };

    if (debounce) {
      return Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4__["default"])(request, 250)();
    }

    return request();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
    itemsPerPage: limit || 50,
    numberOfItems: count || 50,
    onPerPageSelect: handleOnPerPageSelect,
    page: Object(_helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_6__["getCurrentPage"])(limit, offset),
    onSetPage: handleSetPage,
    direction: "down"
  });
};

AddProductsPagination.propTypes = {
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }),
  fetchPlatformItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  platformId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
AddProductsPagination.defaultProps = {
  meta: {
    count: 0,
    limit: 50,
    offset: 0
  }
};

var mapDistapchToProps = function mapDistapchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    fetchPlatformItems: _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_7__["fetchPlatformItems"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function () {
  return {};
}, mapDistapchToProps)(AddProductsPagination));

/***/ }),

/***/ "./src/smart-components/portfolio/add-products-to-portfolio/index.js":
/*!***************************************************************************!*\
  !*** ./src/smart-components/portfolio/add-products-to-portfolio/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _add_products_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-products-gallery */ "./src/smart-components/portfolio/add-products-to-portfolio/add-products-gallery.js");
/* harmony import */ var _add_products_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-products-pagination */ "./src/smart-components/portfolio/add-products-to-portfolio/add-products-pagination.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/platform-actions */ "./src/redux/actions/platform-actions.js");
/* harmony import */ var _presentational_components_platform_platform_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../presentational-components/platform/platform-item */ "./src/presentational-components/platform/platform-item.js");
/* harmony import */ var _presentational_components_portfolio_portfolio_order_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../presentational-components/portfolio/portfolio-order-toolbar */ "./src/presentational-components/portfolio/portfolio-order-toolbar.js");
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");



















var renderGalleryItems = function renderGalleryItems() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var checkItem = arguments.length > 1 ? arguments[1] : undefined;
  var checkedItems = arguments.length > 2 ? arguments[2] : undefined;
  var filter = arguments.length > 3 ? arguments[3] : undefined;
  return items.filter(function (item) {
    return Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_13__["filterServiceOffering"])(item, filter);
  }).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_platform_platform_item__WEBPACK_IMPORTED_MODULE_15__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
      key: item.id
    }, item, {
      editMode: true,
      onToggleItemSelect: function onToggleItemSelect() {
        return checkItem(item.id);
      },
      checked: checkedItems.includes(item.id)
    }));
  });
};

var AddProductsToPortfolio = function AddProductsToPortfolio(_ref) {
  var portfolio = _ref.portfolio,
      portfolioRoute = _ref.portfolioRoute,
      platforms = _ref.platforms,
      isLoading = _ref.isLoading,
      platformItems = _ref.platformItems,
      fetchPlatformItems = _ref.fetchPlatformItems,
      addToPortfolio = _ref.addToPortfolio,
      fetchPlatforms = _ref.fetchPlatforms,
      fetchPortfolioItemsWithPortfolio = _ref.fetchPortfolioItemsWithPortfolio,
      push = _ref.history.push;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      searchValue = _useState2[0],
      handleFilterChange = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      selectedPlatform = _useState4[0],
      setSelectedPlatform = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      checkedItems = _useState6[0],
      setCheckedItems = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPlatforms();
  }, []);

  var checkItem = function checkItem(itemId) {
    var index = checkedItems.indexOf(itemId);
    return index > -1 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checkedItems.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checkedItems.slice(index + 1))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checkedItems), [itemId]);
  };

  var items = selectedPlatform && platformItems[selectedPlatform.id] ? platformItems[selectedPlatform.id].data : [];
  var meta = selectedPlatform && platformItems[selectedPlatform.id] && platformItems[selectedPlatform.id].meta;

  var handleAddToPortfolio = function handleAddToPortfolio() {
    return addToPortfolio(portfolio.id, checkedItems).then(function () {
      return push(portfolioRoute);
    }).then(function () {
      return fetchPortfolioItemsWithPortfolio(portfolio.id);
    });
  };

  var onPlatformSelect = function onPlatformSelect(platform) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["pipe"])(setSelectedPlatform(platform), fetchPlatformItems(platform.id, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_12__["defaultSettings"]));
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Section"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_portfolio_portfolio_order_toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    portfolioName: "".concat(portfolio && portfolio.name || '', " new One"),
    onClickAddToPortfolio: handleAddToPortfolio,
    itemsSelected: checkedItems.length > 0,
    portfolioRoute: portfolioRoute,
    searchValue: searchValue,
    onFilterChange: function onFilterChange(value) {
      return handleFilterChange(value);
    },
    onOptionSelect: onPlatformSelect,
    options: platforms.map(function (platform) {
      return {
        value: platform.id,
        label: platform.name,
        id: platform.id
      };
    })
  }, meta && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_add_products_pagination__WEBPACK_IMPORTED_MODULE_11__["default"], {
    meta: meta,
    platformId: selectedPlatform.id
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_add_products_gallery__WEBPACK_IMPORTED_MODULE_10__["default"], {
    checkedItems: checkedItems,
    isLoading: isLoading,
    items: renderGalleryItems(items, function (itemId) {
      return setCheckedItems(checkItem(itemId));
    }, checkedItems, searchValue)
  }));
};

AddProductsToPortfolio.propTypes = {
  portfolio: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
  }),
  portfolioRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
  })).isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  platformItems: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  fetchPlatformItems: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  addToPortfolio: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired,
  fetchPortfolioItemsWithPortfolio: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchPlatforms: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$platformReducer = _ref2.platformReducer,
      platforms = _ref2$platformReducer.platforms,
      platformItems = _ref2$platformReducer.platformItems,
      isPlatformDataLoading = _ref2$platformReducer.isPlatformDataLoading;
  return {
    platforms: platforms,
    isLoading: isPlatformDataLoading,
    platformItems: platformItems
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addToPortfolio: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_17__["addToPortfolio"],
    fetchPlatforms: _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_14__["fetchPlatforms"],
    fetchPlatformItems: _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_14__["fetchPlatformItems"],
    fetchPortfolioItemsWithPortfolio: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_17__["fetchPortfolioItemsWithPortfolio"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddProductsToPortfolio)));

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item-detail/detail-toolbar-actions.js":
/*!****************************************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item-detail/detail-toolbar-actions.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");





var DetailToolbarActions = function DetailToolbarActions(_ref) {
  var orderUrl = _ref.orderUrl,
      editUrl = _ref.editUrl,
      isOpen = _ref.isOpen,
      setOpen = _ref.setOpen;
  return (// eslint-disable-line no-unused-vars
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: orderUrl
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary"
    }, "Order"))))
  );
};

DetailToolbarActions.propTypes = {
  orderUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  editUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  setOpen: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailToolbarActions);

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item-detail/edit-toolbar-actions.js":
/*!**************************************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item-detail/edit-toolbar-actions.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");





var EditToolbarActions = function EditToolbarActions(_ref) {
  var detailUrl = _ref.detailUrl,
      onSave = _ref.onSave,
      resetWorkflow = _ref.resetWorkflow;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: detailUrl
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "link",
    onClick: resetWorkflow
  }, "Cancel"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    onClick: onSave
  }, "Save")));
};

EditToolbarActions.propTypes = {
  detailUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  resetWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EditToolbarActions);

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item-detail/item-detail-description.js":
/*!*****************************************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item-detail/item-detail-description.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");




/**const getWorkflowTitle = (workflows, workflowRef) => {
 * let workflow = workflows.find(({ value }) => value === workflowRef);
 * return workflow ? workflow.label : 'None';
 * };
 */

var ItemDetailDescription = function ItemDetailDescription(_ref) {
  var product = _ref.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, product.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "javascript:void(0)"
  }, "Sample repository")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Overview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, product.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, product.long_description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: product.support_url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn more")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Documentation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: product.documentation_url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Doc link"))));
};

ItemDetailDescription.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    dscription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    long_description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    support_url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    documentation_url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  workflows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired,
  workflow: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_3__["allowNull"])(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  setWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemDetailDescription);

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item-detail/item-detail-info-bar.js":
/*!**************************************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item-detail/item-detail-info-bar.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var ItemDetailInfoBar = function ItemDetailInfoBar(_ref) {
  var product = _ref.product,
      source = _ref.source,
      portfolio = _ref.portfolio;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Platform ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), source.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Portfolio ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), portfolio.display_name || portfolio.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Vendor ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), product.distributor || 'Missing API data'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h6
  }, "Created at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), new Date(product.updated_at || product.created_at).toLocaleDateString()));
};

ItemDetailInfoBar.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    distributor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    updated_at: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    created_at: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  portfolio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    display_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemDetailInfoBar);

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item-detail/portfolio-item-detail-toolbar.js":
/*!***********************************************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item-detail/portfolio-item-detail-toolbar.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _edit_toolbar_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-toolbar-actions */ "./src/smart-components/portfolio/portfolio-item-detail/edit-toolbar-actions.js");
/* harmony import */ var _detail_toolbar_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-toolbar-actions */ "./src/smart-components/portfolio/portfolio-item-detail/detail-toolbar-actions.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _presentational_components_shared_card_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../presentational-components/shared/card-icon */ "./src/presentational-components/shared/card-icon.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");











var PortfolioItemDetailToolbar = function PortfolioItemDetailToolbar(_ref) {
  var url = _ref.url,
      isOpen = _ref.isOpen,
      product = _ref.product,
      setOpen = _ref.setOpen,
      setWorkflow = _ref.setWorkflow,
      handleUpdate = _ref.handleUpdate;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      float: 'left'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_presentational_components_shared_card_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_7__["CATALOG_API_BASE"], "/portfolio_items/").concat(product.id, "/icon"),
    height: 64
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Level"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].h1
  }, product.display_name || product.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Level"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: [url, "".concat(url, "/order")],
    render: function render() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_detail_toolbar_actions__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        isOpen: isOpen,
        setOpen: setOpen,
        orderUrl: "".concat(url, "/order"),
        editUrl: "".concat(url, "/edit")
      }, args));
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "".concat(url, "/edit"),
    render: function render() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_edit_toolbar_actions__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        detailUrl: url,
        onSave: handleUpdate,
        resetWorkflow: function resetWorkflow() {
          return setWorkflow(product.workflow_ref);
        }
      }, args));
    }
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Level"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].small
  }, product.distributor, "\xA0"))))));
};

PortfolioItemDetailToolbar.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    display_name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    distributor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    workflow_ref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired,
  setOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  setWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioItemDetailToolbar);

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item-detail/portfolio-item-detail.js":
/*!***************************************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item-detail/portfolio-item-detail.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_order_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/order-modal */ "./src/smart-components/common/order-modal.js");
/* harmony import */ var _item_detail_info_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-detail-info-bar */ "./src/smart-components/portfolio/portfolio-item-detail/item-detail-info-bar.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _item_detail_description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-detail-description */ "./src/smart-components/portfolio/portfolio-item-detail/item-detail-description.js");
/* harmony import */ var _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/platform-actions */ "./src/redux/actions/platform-actions.js");
/* harmony import */ var _redux_actions_approval_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../redux/actions/approval-actions */ "./src/redux/actions/approval-actions.js");
/* harmony import */ var _portfolio_item_detail_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio-item-detail-toolbar */ "./src/smart-components/portfolio/portfolio-item-detail/portfolio-item-detail-toolbar.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../helpers/portfolio/portfolio-helper */ "./src/helpers/portfolio/portfolio-helper.js");
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");






















var PortfolioItemDetail = function PortfolioItemDetail(_ref) {
  var _ref$match = _ref.match,
      path = _ref$match.path,
      url = _ref$match.url,
      portfolioItemId = _ref$match.params.portfolioItemId,
      push = _ref.history.push,
      pathname = _ref.location.pathname,
      source = _ref.source,
      product = _ref.product,
      portfolio = _ref.portfolio,
      isLoading = _ref.isLoading,
      workflows = _ref.workflows,
      fetchWorkflows = _ref.fetchWorkflows,
      fetchPlatforms = _ref.fetchPlatforms,
      fetchPortfolioItem = _ref.fetchPortfolioItem,
      selectPortfolioItem = _ref.selectPortfolioItem;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(product.workflow_ref),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      workflow = _useState4[0],
      setWorkflow = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchWorkflows();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPlatforms();
    fetchPortfolioItem(portfolioItemId);
  }, [path]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setWorkflow(product.workflow_ref);
  }, [isLoading]);

  var handleUpdate = function handleUpdate() {
    Object(_helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_18__["updatePortfolioItem"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, product, {
      workflow_ref: workflow
    })).then(function (updatedItem) {
      return selectPortfolioItem(updatedItem.json());
    }).then(function () {
      return push(url);
    });
  };

  if (pathname.match(/\/product\/[0-9]+\/edit/)) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
      to: url
    });
  }

  if (isLoading) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Section"], {
      style: {
        backgroundColor: 'white',
        minHeight: '100%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_20__["ProductLoaderPlaceholder"], null)));
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    style: {
      backgroundColor: 'white',
      minHeight: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "".concat(url, "/order"),
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_common_order_modal__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        closeUrl: url,
        serviceData: product
      }));
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_portfolio_item_detail_toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    url: url,
    isOpen: isOpen,
    product: product,
    setOpen: setOpen,
    handleUpdate: handleUpdate,
    setWorkflow: setWorkflow
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      padding: 32
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    md: 2
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_item_detail_info_bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    product: product,
    portfolio: portfolio,
    source: source
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    md: 10
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_item_detail_description__WEBPACK_IMPORTED_MODULE_13__["default"], {
    product: product,
    url: url,
    workflows: workflows,
    workflow: workflow,
    setWorkflow: setWorkflow
  })))));
};

PortfolioItemDetail.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  }).isRequired,
  portfolio: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  }),
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  }).isRequired,
  product: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  }).isRequired,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
  }).isRequired,
  workflows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_12__["allowNull"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string),
    label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  })).isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  fetchPlatforms: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  fetchPortfolioItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  selectPortfolioItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$portfolioReduce = _ref2.portfolioReducer,
      portfolioItem = _ref2$portfolioReduce.portfolioItem,
      isLoading = _ref2$portfolioReduce.isLoading,
      selectedPortfolio = _ref2$portfolioReduce.selectedPortfolio,
      platforms = _ref2.platformReducer.platforms,
      _ref2$approvalReducer = _ref2.approvalReducer,
      workflows = _ref2$approvalReducer.workflows,
      isFetching = _ref2$approvalReducer.isFetching;
  var portfolio = selectedPortfolio;
  var product = portfolioItem;
  var source;

  if (product && platforms) {
    source = platforms.find(function (item) {
      return item.id == product.service_offering_source_ref;
    }); // eslint-disable-line eqeqeq
  }

  return {
    isLoading: isLoading || !product || !portfolio || !source || isFetching,
    workflows: workflows,
    portfolio: portfolio,
    product: product,
    source: source
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])({
    fetchPlatforms: _redux_actions_platform_actions__WEBPACK_IMPORTED_MODULE_14__["fetchPlatforms"],
    fetchPortfolioItem: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_19__["fetchPortfolioItem"],
    fetchWorkflows: _redux_actions_approval_actions__WEBPACK_IMPORTED_MODULE_15__["fetchWorkflows"],
    selectPortfolioItem: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_19__["selectPortfolioItem"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(PortfolioItemDetail)));

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item.js":
/*!**********************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _presentational_components_shared_card_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../presentational-components/shared/card-icon */ "./src/presentational-components/shared/card-icon.js");
/* harmony import */ var _presentational_components_shared_card_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../presentational-components/shared/card-checkbox */ "./src/presentational-components/shared/card-checkbox.js");
/* harmony import */ var _presentational_components_shared_service_offering_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../presentational-components/shared/service-offering-body */ "./src/presentational-components/shared/service-offering-body.js");
/* harmony import */ var _portfolio_item_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio-item.scss */ "./src/smart-components/portfolio/portfolio-item.scss");
/* harmony import */ var _portfolio_item_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_portfolio_item_scss__WEBPACK_IMPORTED_MODULE_8__);










var PortfolioItem = function PortfolioItem(props) {
  var renderCardContent = function renderCardContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
      className: "card_header"
    }, props.isSelectable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_card_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      handleCheck: function handleCheck() {
        return props.onSelect(props.id);
      },
      isChecked: props.isSelected,
      id: props.id
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_card_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: "".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_4__["CATALOG_API_BASE"], "/portfolio_items/").concat(props.id, "/icon")
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_service_offering_body__WEBPACK_IMPORTED_MODULE_7__["default"], props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["GalleryItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "content-gallery-card"
  }, props.isSelectable ? renderCardContent() : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: props.orderUrl,
    className: "card-link"
  }, renderCardContent())));
};

PortfolioItem.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  hideModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isSelectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  orderUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioItem);

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio-item.scss":
/*!************************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio-item.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/smart-components/portfolio/portfolio.js":
/*!*****************************************************!*\
  !*** ./src/smart-components/portfolio/portfolio.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../content-gallery/content-gallery */ "./src/smart-components/content-gallery/content-gallery.js");
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");
/* harmony import */ var _add_products_to_portfolio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-products-to-portfolio */ "./src/smart-components/portfolio/add-products-to-portfolio/index.js");
/* harmony import */ var _presentational_components_portfolio_portfolio_filter_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../presentational-components/portfolio/portfolio-filter-toolbar */ "./src/presentational-components/portfolio/portfolio-filter-toolbar.js");
/* harmony import */ var _portfolio_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./portfolio-item */ "./src/smart-components/portfolio/portfolio-item.js");
/* harmony import */ var _add_portfolio_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-portfolio-modal */ "./src/smart-components/portfolio/add-portfolio-modal.js");
/* harmony import */ var _remove_portfolio_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./remove-portfolio-modal */ "./src/smart-components/portfolio/remove-portfolio-modal.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _remove_portfolio_items__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./remove-portfolio-items */ "./src/smart-components/portfolio/remove-portfolio-items.js");
/* harmony import */ var _helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../helpers/portfolio/portfolio-helper */ "./src/helpers/portfolio/portfolio-helper.js");
/* harmony import */ var _common_order_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common/order-modal */ "./src/smart-components/common/order-modal.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _portfolio_item_detail_portfolio_item_detail__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./portfolio-item-detail/portfolio-item-detail */ "./src/smart-components/portfolio/portfolio-item-detail/portfolio-item-detail.js");
/* harmony import */ var _share_portfolio_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./share-portfolio-modal */ "./src/smart-components/portfolio/share-portfolio-modal.js");






























var Portfolio =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Portfolio, _Component);

  function Portfolio() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Portfolio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Portfolio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      portfolioId: '',
      filteredItems: [],
      selectedItems: [],
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "fetchData", function (apiProps) {
      _this.props.fetchSelectedPortfolio(apiProps);

      _this.props.fetchPortfolioItemsWithPortfolio(apiProps);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "removeProducts", function () {
      _this.props.history.goBack();

      Object(_helpers_portfolio_portfolio_helper__WEBPACK_IMPORTED_MODULE_23__["removePortfolioItems"])(_this.state.selectedItems).then(function () {
        _this.fetchData(_this.props.match.params.id);

        _this.setState({
          selectedItems: []
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "handleItemSelect", function (selectedItem) {
      return _this.setState(function (_ref) {
        var selectedItems = _ref.selectedItems;
        return selectedItems.includes(selectedItem) ? {
          selectedItems: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectedItems.slice(0, selectedItems.indexOf(selectedItem))), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectedItems.slice(selectedItems.indexOf(selectedItem) + 1)))
        } : {
          selectedItems: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectedItems), [selectedItem])
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "filterItems", function (filterValue) {
      return _this.props.portfolioItems.filter(function (item) {
        return Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_21__["filterServiceOffering"])(item, filterValue);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "handleFilterChange", function (filterValue) {
      _this.setState({
        filterValue: filterValue
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "renderProducts", function (_ref2) {
      var title = _ref2.title,
          filteredItems = _ref2.filteredItems,
          addProductsRoute = _ref2.addProductsRoute,
          removeProductsRoute = _ref2.removeProductsRoute,
          editPortfolioRoute = _ref2.editPortfolioRoute,
          removePortfolioRoute = _ref2.removePortfolioRoute,
          sharePortfolioRoute = _ref2.sharePortfolioRoute;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_25__["TopToolbarTitle"], {
        title: title
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_presentational_components_portfolio_portfolio_filter_toolbar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        searchValue: _this.state.filterValue,
        onFilterChange: _this.handleFilterChange,
        addProductsRoute: addProductsRoute,
        removeProductsRoute: removeProductsRoute,
        editPortfolioRoute: editPortfolioRoute,
        removePortfolioRoute: removePortfolioRoute,
        sharePortfolioRoute: sharePortfolioRoute,
        isLoading: _this.props.isLoading
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/detail/:id/edit-portfolio",
        component: _add_portfolio_modal__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/detail/:id/remove-portfolio",
        component: _remove_portfolio_modal__WEBPACK_IMPORTED_MODULE_20__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/detail/:id/share-portfolio",
        component: _share_portfolio_modal__WEBPACK_IMPORTED_MODULE_27__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/detail/:id/order/:itemId",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_common_order_modal__WEBPACK_IMPORTED_MODULE_24__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
            closeUrl: _this.props.match.url
          }));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_14__["default"], filteredItems));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "renderAddProducts", function (_ref3) {
      var portfolioRoute = _ref3.portfolioRoute;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_add_products_to_portfolio__WEBPACK_IMPORTED_MODULE_16__["default"], {
        portfolio: _this.props.portfolio,
        portfolioRoute: portfolioRoute
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "renderRemoveProducts", function (_ref4) {
      var portfolioRoute = _ref4.portfolioRoute,
          filteredItems = _ref4.filteredItems,
          title = _ref4.title;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_remove_portfolio_items__WEBPACK_IMPORTED_MODULE_22__["default"], {
        filterValue: _this.state.filterValue,
        onFilterChange: _this.handleFilterChange,
        portfolioName: title,
        portfolioRoute: portfolioRoute,
        onRemove: _this.removeProducts,
        disableButton: _this.state.selectedItems.length === 0
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_14__["default"], filteredItems));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Portfolio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData(this.props.match.params.id);
      Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_21__["scrollToTop"])();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchData(this.props.match.params.id);
        Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_21__["scrollToTop"])();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var portfolioRoute = this.props.match.url;
      var addProductsRoute = "".concat(this.props.match.url, "/add-products");
      var removeProductsRoute = "".concat(this.props.match.url, "/remove-products");
      var editPortfolioRoute = "".concat(this.props.match.url, "/edit-portfolio");
      var removePortfolioRoute = "".concat(this.props.match.url, "/remove-portfolio");
      var sharePortfolioRoute = "".concat(this.props.match.url, "/share-portfolio");
      var orderUrl = "".concat(this.props.match.url, "/product");
      var title = this.props.portfolio ? this.props.portfolio.name : '';
      var filteredItems = {
        items: this.props.portfolioItems.filter(function (item) {
          return Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_21__["filterServiceOffering"])(item, _this2.state.filterValue);
        }).map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_portfolio_item__WEBPACK_IMPORTED_MODULE_18__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
            key: item.id
          }, item, {
            isSelectable: _this2.props.location.pathname.includes('/remove-products'),
            onSelect: _this2.handleItemSelect,
            isSelected: _this2.state.selectedItems.includes(item.id),
            orderUrl: "".concat(orderUrl, "/").concat(item.id)
          }));
        }),
        isLoading: this.props.isLoading && this.props.portfolioItems.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: addProductsRoute,
        render: function render(props) {
          return _this2.renderAddProducts(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            portfolioRoute: portfolioRoute
          }, props));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "".concat(orderUrl, "/:portfolioItemId"),
        component: _portfolio_item_detail_portfolio_item_detail__WEBPACK_IMPORTED_MODULE_26__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: removeProductsRoute,
        render: function render(props) {
          return _this2.renderRemoveProducts(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            filteredItems: filteredItems,
            portfolioRoute: portfolioRoute,
            title: title
          }, props));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: portfolioRoute,
        render: function render(props) {
          return _this2.renderProducts(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
            addProductsRoute: addProductsRoute,
            removeProductsRoute: removeProductsRoute,
            editPortfolioRoute: editPortfolioRoute,
            removePortfolioRoute: removePortfolioRoute,
            sharePortfolioRoute: sharePortfolioRoute,
            filteredItems: filteredItems,
            title: title
          }, props));
        }
      }));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var mapStateToProps = function mapStateToProps(_ref5) {
  var _ref5$portfolioReduce = _ref5.portfolioReducer,
      selectedPortfolio = _ref5$portfolioReduce.selectedPortfolio,
      portfolioItems = _ref5$portfolioReduce.portfolioItems,
      isLoading = _ref5$portfolioReduce.isLoading;
  return {
    portfolio: selectedPortfolio,
    portfolioItems: portfolioItems,
    isLoading: !selectedPortfolio || isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPortfolioItemsWithPortfolio: function fetchPortfolioItemsWithPortfolio(apiProps) {
      return dispatch(Object(_redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_15__["fetchPortfolioItemsWithPortfolio"])(apiProps));
    },
    fetchSelectedPortfolio: function fetchSelectedPortfolio(apiProps) {
      return dispatch(Object(_redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_15__["fetchSelectedPortfolio"])(apiProps));
    }
  };
};

Portfolio.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  fetchPortfolioItemsWithPortfolio: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  fetchSelectedPortfolio: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  match: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object,
  portfolio: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired
  }),
  location: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object,
  portfolioItems: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array
};
Portfolio.defaultProps = {
  portfolioItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Portfolio)));

/***/ }),

/***/ "./src/smart-components/portfolio/portfolios.js":
/*!******************************************************!*\
  !*** ./src/smart-components/portfolio/portfolios.js ***!
  \******************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../content-gallery/content-gallery */ "./src/smart-components/content-gallery/content-gallery.js");
/* harmony import */ var _presentational_components_portfolio_porfolio_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../presentational-components/portfolio/porfolio-card */ "./src/presentational-components/portfolio/porfolio-card.js");
/* harmony import */ var _presentational_components_portfolio_portfolios_filter_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../presentational-components/portfolio/portfolios-filter-toolbar */ "./src/presentational-components/portfolio/portfolios-filter-toolbar.js");
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");
/* harmony import */ var _add_portfolio_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-portfolio-modal */ "./src/smart-components/portfolio/add-portfolio-modal.js");
/* harmony import */ var _remove_portfolio_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remove-portfolio-modal */ "./src/smart-components/portfolio/remove-portfolio-modal.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./portfolio */ "./src/smart-components/portfolio/portfolio.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _share_portfolio_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./share-portfolio-modal */ "./src/smart-components/portfolio/share-portfolio-modal.js");






















var portfoliosRoutes = {
  portfolios: '',
  detail: 'detail/:id'
};

var Portfolios =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Portfolios, _Component);

  function Portfolios() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Portfolios);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Portfolios)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "fetchData", function () {
      _this.props.fetchPortfolios();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderItems", function (props) {
      var filteredItems = {
        items: _this.props.portfolios.filter(function (_ref) {
          var name = _ref.name;
          return name.toLowerCase().includes(_this.state.filterValue.trim().toLowerCase());
        }).map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_portfolio_porfolio_card__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            key: item.id
          }, item));
        }),
        isLoading: _this.props.isLoading && _this.props.portfolios.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_20__["TopToolbarTitle"], {
        title: "Portfolios"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_portfolio_portfolios_filter_toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onFilterChange: _this.onFilterChange,
        filterValue: _this.state.filterValue
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        exact: true,
        path: "/portfolios/add-portfolio",
        component: _add_portfolio_modal__WEBPACK_IMPORTED_MODULE_16__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/edit/:id",
        component: _add_portfolio_modal__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/remove/:id",
        component: _remove_portfolio_modal__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/portfolios/share/:id",
        component: _share_portfolio_modal__WEBPACK_IMPORTED_MODULE_21__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_content_gallery_content_gallery__WEBPACK_IMPORTED_MODULE_12__["default"], filteredItems));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Portfolios, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_18__["scrollToTop"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "/portfolios/".concat(portfoliosRoutes.detail),
        component: _portfolio__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        path: "/portfolios/".concat(portfoliosRoutes.portfolios),
        render: this.renderItems
      }));
    }
  }]);

  return Portfolios;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$portfolioReduce = _ref2.portfolioReducer,
      portfolios = _ref2$portfolioReduce.portfolios,
      isLoading = _ref2$portfolioReduce.isLoading,
      filterValue = _ref2$portfolioReduce.filterValue;
  return {
    portfolios: portfolios,
    isLoading: isLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchPortfolios: function fetchPortfolios(apiProps) {
      return dispatch(Object(_redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_15__["fetchPortfolios"])(apiProps));
    }
  };
};

Portfolios.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  portfolios: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  showModal: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  fetchPortfolios: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
Portfolios.defaultProps = {
  portfolios: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Portfolios));

/***/ }),

/***/ "./src/smart-components/portfolio/remove-portfolio-items.js":
/*!******************************************************************!*\
  !*** ./src/smart-components/portfolio/remove-portfolio-items.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../presentational-components/shared/top-toolbar */ "./src/presentational-components/shared/top-toolbar.js");
/* harmony import */ var _presentational_components_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../presentational-components/shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");







var RemovePortfolioItems = function RemovePortfolioItems(_ref) {
  var portfolioRoute = _ref.portfolioRoute,
      onRemove = _ref.onRemove,
      portfolioName = _ref.portfolioName,
      filterValue = _ref.filterValue,
      onFilterChange = _ref.onFilterChange,
      disableButton = _ref.disableButton;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_top_toolbar__WEBPACK_IMPORTED_MODULE_4__["TopToolbarTitle"], {
    title: "Remove products: ".concat(portfolioName)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Level"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_components_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Filter by name...",
    searchValue: filterValue,
    onFilterChange: onFilterChange
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: portfolioRoute
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "link",
    "aria-label": "Cancel removing portfolio items"
  }, "Cancel")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isDisabled: disableButton,
    variant: "danger",
    "aria-label": "Remove selected portfolio items",
    onClick: onRemove
  }, "Remove"))))));
};

RemovePortfolioItems.propTypes = {
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  portfolioRoute: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  portfolioName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  disableButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
RemovePortfolioItems.defaultProps = {
  disableButton: false
};
/* harmony default export */ __webpack_exports__["default"] = (RemovePortfolioItems);

/***/ }),

/***/ "./src/smart-components/portfolio/remove-portfolio-modal.js":
/*!******************************************************************!*\
  !*** ./src/smart-components/portfolio/remove-portfolio-modal.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var RemovePortfolioModal = function RemovePortfolioModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      removePortfolio = _ref.removePortfolio,
      fetchPortfolios = _ref.fetchPortfolios,
      portfolio = _ref.portfolio;

  var onSubmit = function onSubmit() {
    return removePortfolio(portfolio.id).then(function () {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(fetchPortfolios(), push('/portfolios'));
    });
  };

  var onCancel = function onCancel() {
    return goBack();
  };

  if (!portfolio) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: " ",
    isOpen: true,
    isSmall: true,
    hideTitle: true,
    onClose: onCancel,
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "cancel",
      variant: "secondary",
      type: "button",
      onClick: onCancel
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "submit",
      variant: "primary",
      type: "button",
      onClick: onSubmit
    }, "Confirm")]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h1
  }, "Removing Portfolio:  ", portfolio.name))));
};

RemovePortfolioModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removePortfolio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchPortfolios: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  portfolio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
};

var portfolioDetailsFromState = function portfolioDetailsFromState(state, id) {
  return state.portfolioReducer.portfolios.find(function (portfolio) {
    return portfolio.id === id;
  });
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  return {
    portfolio: portfolioDetailsFromState(state, id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__["addNotification"],
    fetchPortfolios: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_7__["fetchPortfolios"],
    removePortfolio: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_7__["removePortfolio"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemovePortfolioModal)));

/***/ }),

/***/ "./src/smart-components/portfolio/share-portfolio-modal.js":
/*!*****************************************************************!*\
  !*** ./src/smart-components/portfolio/share-portfolio-modal.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _forms_portfolio_share_form_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/portfolio-share-form.schema */ "./src/forms/portfolio-share-form.schema.js");
/* harmony import */ var _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/portfolio-actions */ "./src/redux/actions/portfolio-actions.js");
/* harmony import */ var _redux_actions_share_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/share-actions */ "./src/redux/actions/share-actions.js");
/* harmony import */ var _redux_actions_rbac_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/rbac-actions */ "./src/redux/actions/rbac-actions.js");
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");















var SharePortfolioModal = function SharePortfolioModal(_ref) {
  var goBack = _ref.history.goBack,
      isLoading = _ref.isLoading,
      fetchPortfolios = _ref.fetchPortfolios,
      initialValues = _ref.initialValues,
      fetchShareInfo = _ref.fetchShareInfo,
      sharePortfolio = _ref.sharePortfolio,
      fetchRbacGroups = _ref.fetchRbacGroups,
      shareInfo = _ref.shareInfo,
      portfolioId = _ref.portfolioId,
      rbacGroups = _ref.rbacGroups;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchShareInfo(portfolioId);
    fetchRbacGroups();
  }, []);

  var initialShares = function initialShares() {
    var initialGroupShareList = shareInfo.map(function (group) {
      var groupName = group.group_name;
      var options = permissionOptions.find(function (perm) {
        return perm.value === group.permissions.sort().join(',');
      });
      return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, groupName, options ? options.value : 'Unknown');
    });
    var initialShareList = initialGroupShareList.reduce(function (acc, curr) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, acc, curr);
    }, {});
    return initialShareList;
  };

  var onSubmit = function onSubmit(data) {
    var sharePromises = [];

    if (data.group_uuid && data.permissions) {
      sharePromises.push(sharePortfolio(data));
    }

    shareInfo.forEach(function (share) {
      var initialPerm = share.permissions.sort().join(',');

      if (data[share.group_name] !== initialPerm) {
        if (!data[share.group_name]) {
          sharePromises.push(Object(_redux_actions_share_actions__WEBPACK_IMPORTED_MODULE_11__["unsharePortfolio"])({
            id: portfolioId,
            permissions: share.permissions,
            group_uuid: share.group_uuid
          }));
        } else {
          if (share.permissions.length > data[share.group_name].split(',').length) {
            sharePromises.push(Object(_redux_actions_share_actions__WEBPACK_IMPORTED_MODULE_11__["unsharePortfolio"])({
              id: portfolioId,
              permissions: ['catalog:portfolios:write'],
              group_uuid: share.group_uuid
            }));
          } else {
            sharePromises.push(sharePortfolio({
              id: portfolioId,
              permissions: data[share.group_name],
              group_uuid: share.group_uuid
            }));
          }
        }
      }
    });
    Promise.all(sharePromises).then(goBack).then(function () {
      return fetchPortfolios();
    });
  };

  var onCancel = function onCancel() {
    return goBack();
  };

  var permissionOptions = [{
    value: 'catalog:portfolios:order,catalog:portfolios:read,catalog:portfolios:write',
    label: 'Can order/edit'
  }, {
    value: 'catalog:portfolios:order,catalog:portfolios:read',
    label: 'Can order/view'
  }];

  var shareItems = function shareItems() {
    var groupsWithNoSharing = rbacGroups.filter(function (item) {
      return !shareInfo.find(function (shareGroup) {
        return shareGroup.group_uuid === item.value;
      });
    });
    return {
      groups: groupsWithNoSharing,
      items: shareInfo
    };
  };

  if (rbacGroups.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
      title: 'Share portfolio',
      isOpen: true,
      isLarge: true,
      onClose: onCancel
    }, isLoading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_13__["ShareLoader"], null), !isLoading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        padding: 8
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Title"], {
      headingLevel: "h2",
      size: "1xl"
    }, "No groups available for sharing.")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
      title: 'Share portfolio',
      isOpen: true,
      isLarge: true,
      onClose: onCancel
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        padding: 8
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      schema: Object(_forms_portfolio_share_form_schema__WEBPACK_IMPORTED_MODULE_9__["createPortfolioShareSchema"])(shareItems(), permissionOptions),
      schemaType: "default",
      onSubmit: onSubmit,
      onCancel: onCancel,
      initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues, initialShares()),
      formContainer: "modal",
      buttonsLabels: {
        submitLabel: 'Send'
      }
    })));
  }
};

SharePortfolioModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  fetchPortfolios: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  fetchRbacGroups: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  sharePortfolio: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  unsharePortfolio: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  fetchShareInfo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  portfolioId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  shareInfo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  rbacGroups: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]).isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
  })).isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

var mapStateToProps = function mapStateToProps(_ref3, _ref4) {
  var rbacGroups = _ref3.rbacReducer.rbacGroups,
      portfolios = _ref3.portfolioReducer.portfolios,
      _ref3$shareReducer = _ref3.shareReducer,
      shareInfo = _ref3$shareReducer.shareInfo,
      isLoading = _ref3$shareReducer.isLoading;
  var id = _ref4.match.params.id;
  return {
    initialValues: id && portfolios.find(function (item) {
      return item.id === id;
    }),
    portfolioId: id,
    isLoading: isLoading,
    shareInfo: shareInfo,
    rbacGroups: rbacGroups
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    fetchRbacGroups: _redux_actions_rbac_actions__WEBPACK_IMPORTED_MODULE_12__["fetchRbacGroups"],
    fetchPortfolios: _redux_actions_portfolio_actions__WEBPACK_IMPORTED_MODULE_10__["fetchPortfolios"],
    sharePortfolio: _redux_actions_share_actions__WEBPACK_IMPORTED_MODULE_11__["sharePortfolio"],
    unsharePortfolio: _redux_actions_share_actions__WEBPACK_IMPORTED_MODULE_11__["unsharePortfolio"],
    fetchShareInfo: _redux_actions_share_actions__WEBPACK_IMPORTED_MODULE_11__["fetchShareInfo"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(SharePortfolioModal)));

/***/ }),

/***/ "./src/utilities/constants.js":
/*!************************************!*\
  !*** ./src/utilities/constants.js ***!
  \************************************/
/*! exports provided: CATALOG_API_BASE, TOPOLOGICAL_INVENTORY_API_BASE, APPROVAL_API_BASE, RBAC_API_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATALOG_API_BASE", function() { return CATALOG_API_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPOLOGICAL_INVENTORY_API_BASE", function() { return TOPOLOGICAL_INVENTORY_API_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVAL_API_BASE", function() { return APPROVAL_API_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBAC_API_BASE", function() { return RBAC_API_BASE; });
var CATALOG_API_BASE = "".concat("/api", "/catalog/v1.0");
var TOPOLOGICAL_INVENTORY_API_BASE = "".concat("/api", "/topological-inventory/v0.1");
var APPROVAL_API_BASE = "".concat("/api", "/approval/v1.0");
var RBAC_API_BASE = "".concat("/api", "/rbac/v1");

/***/ }),

/***/ "./src/utilities/store.js":
/*!********************************!*\
  !*** ./src/utilities/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/order-reducer */ "./src/redux/reducers/order-reducer.js");
/* harmony import */ var _redux_reducers_platform_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/platform-reducer */ "./src/redux/reducers/platform-reducer.js");
/* harmony import */ var _redux_reducers_portfolio_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/portfolio-reducer */ "./src/redux/reducers/portfolio-reducer.js");
/* harmony import */ var _redux_reducers_approval_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/reducers/approval-reducer */ "./src/redux/reducers/approval-reducer.js");
/* harmony import */ var _redux_reducers_rbac_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/reducers/rbac-reducer */ "./src/redux/reducers/rbac-reducer.js");
/* harmony import */ var _redux_reducers_share_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/reducers/share-reducer */ "./src/redux/reducers/share-reducer.js");











var registry = new _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["ReducerRegistry"]({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])({
  errorTitleKey: ['errors', 'message'],
  errorDescriptionKey: ['response.body.errors', 'errors', 'stack']
}), redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]);
registry.register({
  orderReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_5__["orderInitialState"]),
  platformReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_platform_reducer__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_reducers_platform_reducer__WEBPACK_IMPORTED_MODULE_6__["platformInitialState"]),
  portfolioReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_portfolio_reducer__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_reducers_portfolio_reducer__WEBPACK_IMPORTED_MODULE_7__["portfoliosInitialState"]),
  approvalReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_approval_reducer__WEBPACK_IMPORTED_MODULE_8__["default"], _redux_reducers_approval_reducer__WEBPACK_IMPORTED_MODULE_8__["approvalInitialState"]),
  rbacReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_rbac_reducer__WEBPACK_IMPORTED_MODULE_9__["default"], _redux_reducers_rbac_reducer__WEBPACK_IMPORTED_MODULE_9__["rbacInitialState"]),
  shareReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_share_reducer__WEBPACK_IMPORTED_MODULE_10__["default"], _redux_reducers_share_reducer__WEBPACK_IMPORTED_MODULE_10__["shareInfoInitialState"]),
  notifications: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notifications"]
});
/* harmony default export */ __webpack_exports__["default"] = (registry.getStore());

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map