(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{546:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},548:function(e,t,n){"use strict";var o=n(565),r=n.n(o);function c(e){var t=null,n=null,o=new Promise((function(e,o){t=e,n=o}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:o,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},u=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=r()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];t&&t();var r=e.apply(void 0,n),a=c(r),i=a.promise,u=a.cancel;return t=u,i}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var o=a({},i,n),r=new u({func:e,wait:t,options:o});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},549:function(e,t,n){"use strict";var o=n(548);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(o.a)(e,t,n)}},565:function(e,t,n){"use strict";function o(e){return"function"==typeof e?e():e}function r(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=void 0,a=void 0,i=void 0,u=[];return function(){var l=o(t),p=(new Date).getTime(),f=!c||p-c>l;c=p;for(var h=arguments.length,b=Array(h),d=0;d<h;d++)b[d]=arguments[d];if(f&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[b])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(b)));if(a?clearTimeout(i):a=r(),u.push(b),i=setTimeout(s.bind(this),l),n.accumulate){var m=u.length-1;return a.promise.then((function(e){return e[m]}))}return a.promise};function s(){var t=a;clearTimeout(i),Promise.resolve(n.accumulate?e.call(this,u):e.apply(this,u[u.length-1])).then(t.resolve,t.reject),u=[],a=null}}},568:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},571:function(e,t,n){"use strict";var o=n(2),r=n.n(o),c=n(568),a=n.n(c),i=n(60);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return"string"==typeof e?e.split("?")[0]:"object"===a()(e)?s(s({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,n=e.keepHash,o=Object(i.g)();return s(s({},o),{},{push:function(e){var r=e;return n&&o.location.hash.length>0&&(r="object"===a()(r)?s(s({},r),{},{hash:o.location.hash}):"".concat(r).concat(o.location.hash)),t?o.push(l(r)):o.push(r)}})}},610:function(e,t,n){"use strict";var o=n(0),r=n(155),c=n(111),a=n(7),i=n(110),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const s=n.n(i).a||i,l=(e,t)=>Object(c.b)(Object.assign(Object.assign({},a.a),{locale:"en"}),Object(a.c)(),e,t);class p extends o.Component{shouldComponentUpdate(e){const t=this.props,{values:n}=t,o=u(t,["values"]),{values:r}=e,c=u(e,["values"]);return!s(r,n)||!s(o,c)}render(){return o.createElement(r.a.Consumer,null,e=>{this.props.defaultMessage||Object(a.h)(e);const{formatMessage:t=l,textComponent:n=o.Fragment}=e||{},{id:r,description:c,defaultMessage:i,values:u,children:s,tagName:p=n}=this.props;let f=t({id:r,description:c,defaultMessage:i},u);return Array.isArray(f)||(f=[f]),"function"==typeof s?s(...f):p?o.createElement(p,null,...f):f})}}p.displayName="FormattedMessage",p.defaultProps={values:{}},t.a=p},629:function(e,t,n){"use strict";n.r(t);var o=n(34),r=n.n(o),c=n(2),a=n.n(c),i=n(0),u=n.n(i),s=n(1),l=n.n(s),p=n(28),f=n(486),h=n(69),b=n(44),d=n(491),m=n(492),v=n(575),y=n(558),g=n.n(y),O=n(549),j=function(e){return{fields:[{component:g.a.SELECT,name:"selectedWorkflows",label:"",loadOptions:Object(O.a)(e),multi:!0,isSearchable:!0,isClearable:!0}]}},w=n(20),S=n.n(w),P=n(610),k=n(66),E=n(99),D=n(12),F=n(70),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.map((function(e){return"filter[id][]=".concat(e)})).join("&");return Object(E.a)().get("".concat(D.a,"/workflows?filter[name][contains]=").concat(e,"&").concat(n||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},C=function(e,t,n){var o=e?e.map((function(e){return Object(E.i)().unlinkWorkflow(e,n)})):[],r=t?t.map((function(e){return Object(E.i)().linkWorkflow(e,n)})):[];return Promise.all([].concat(S()(o),S()(r)))},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:F.a.limit,offset:F.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o="app_name=".concat(e.appName,"&object_type=").concat(e.objectType,"&object_id=").concat(e.objectId),r="&limit=".concat(t.limit,"&offset=").concat(t.offset),c="&filter[name][contains]=".concat(n);return Object(E.a)().get("".concat(D.a,"/workflows?").concat(o).concat(c).concat(r))},_=n(140),R=n(71),W=n(72),L=n(571);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={isFetching:!0},q=function(e,t){switch(t.type){case"setFetching":return I(I({},e),{},{isFetching:t.payload});default:return e}},H=function(e){var t=e.objectType,n=e.removeQuery,o=e.keepHash,c=e.querySelector,a=e.pushParam,s=e.objectName,l=void 0===s?function(){return t}:s,y=Object(i.useReducer)(q,N),g=r()(y,2),O=g[0].isFetching,w=g[1],S=Object(p.useSelector)((function(e){return e.approvalReducer.resolvedWorkflows})),E=S.data,M=S.meta,I=Object(p.useDispatch)(),H=Object(L.a)({removeQuery:n,keepHash:o}),A=Object(W.a)([c]),Q=r()(A,1)[0];Object(i.useEffect)((function(){I(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:F.a.limit,offset:F.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:k.a.RESOLVE_WORKFLOWS,payload:T(e,t,n)}}({objectType:t,appName:D.b[t],objectId:Q[c]},M)).then((function(){return w({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(f.Modal,{title:"Set approval process",isOpen:!0,onClose:function(){return H.push(a)},isSmall:!0},O&&u.a.createElement(R.i,null),!O&&u.a.createElement(d.Stack,{gutter:"md"},u.a.createElement(m.StackItem,null,u.a.createElement(h.TextContent,null,u.a.createElement(b.Text,null,"Select approval processes for"," ",u.a.createElement("strong",null,l(Q[c]))))),u.a.createElement(m.StackItem,null,u.a.createElement(v.b,{initialValues:{selectedWorkflows:E?E.map((function(e){return e.id})):void 0},onSubmit:function(e,n){var o=n.getState().initialValues.selectedWorkflows||[],r=e.selectedWorkflows||[];H.push(a);var s,l,p,f=o.filter((function(e){return r.findIndex((function(t){return t===e}))<0})),h=r.filter((function(e){return o.findIndex((function(t){return t===e}))<0}));(f.length>0||h.length>0)&&I((s=f,l=h,p={object_type:t,app_name:D.b[t],object_id:Q[c]},function(e){return e({type:k.a.UPDATE_WORKFLOWS,payload:C(s,l,p).then((function(){return e(Object(_.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:u.a.createElement(i.Fragment,null,s.length>0?u.a.createElement(P.a,{id:"workflows.update_workflows",defaultMessage:"{count, number} {count, plural, one {approval process was}\n                    other {approval processes were}} unlinked successfully. ",values:{count:s.length}}):"",l.length>0?u.a.createElement(P.a,{id:"workflows.update_workflows",defaultMessage:"{count, number} {count, plural, one {approval process was}\n                    other {approval processes were}} linked successfully.",values:{count:l.length}}):"")}))}))})}))},onCancel:function(){return H.push(a)},schema:j(x),formContainer:"modal",buttonsLabels:{submitLabel:"Save"}}))))};H.propTypes={pushParam:l.a.oneOfType([l.a.string,l.a.shape({pathname:l.a.string.isRequired,search:l.a.string})]).isRequired,objectType:l.a.string.isRequired,objectName:l.a.func,removeQuery:l.a.bool,querySelector:l.a.oneOf(["portfolio","platform","inventory","portfolio-item"]).isRequired,keepHash:l.a.bool},H.defaultProps={keepHash:!1};t.default=H}}]);
//# sourceMappingURL=../sourcemaps/edit-approval-workflow~31ecd969.js.map