(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{425:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},427:function(e,t,n){"use strict";var r=n(447),o=n.n(r);function a(e){var t=null,n=null,r=new Promise((function(e,r){t=e,n=r}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:r,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
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
var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},s=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=o()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t&&t();var o=e.apply(void 0,n),i=a(o),c=i.promise,s=i.cancel;return t=s,c}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var r=i({},c,n),o=new s({func:e,wait:t,options:r});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},428:function(e,t,n){"use strict";var r=n(427);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},437:function(e,t,n){"use strict";t.__esModule=!0,n(462),t.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},439:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},446:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(439),i=n.n(a),c=n(53);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){return"string"==typeof e?e.split("?")[0]:"object"===i()(e)?l(l({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,n=e.keepHash,r=Object(c.g)();return l(l({},r),{},{push:function(e){var o=e;return n&&r.location.hash.length>0&&(o="object"===i()(o)?l(l({},o),{},{hash:r.location.hash}):"".concat(o).concat(r.location.hash)),t?r.push(u(o)):r.push(o)}})}},447:function(e,t,n){"use strict";function r(e){return"function"==typeof e?e():e}function o(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=void 0,i=void 0,c=void 0,s=[];return function(){var u=r(t),f=(new Date).getTime(),p=!a||f-a>u;a=f;for(var d=arguments.length,m=Array(d),h=0;h<d;h++)m[h]=arguments[h];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(i?clearTimeout(c):i=o(),s.push(m),c=setTimeout(l.bind(this),u),n.accumulate){var b=s.length-1;return i.promise.then((function(e){return e[b]}))}return i.promise};function l(){var t=i;clearTimeout(c),Promise.resolve(n.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(t.resolve,t.reject),s=[],i=null}}},450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),o=r.__importStar(n(0)),a=r.__importDefault(n(437)),i=n(4);t.Stack=e=>{var{hasGutter:t=!1,className:n="",children:c=null,component:s="div"}=e,l=r.__rest(e,["hasGutter","className","children","component"]);const u=s;return o.createElement(u,Object.assign({},l,{className:i.css(a.default.stack,t&&a.default.modifiers.gutter,n)}),c)},t.Stack.displayName="Stack"},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),o=r.__importStar(n(0)),a=r.__importDefault(n(207)),i=n(4),c=n(45);var s;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(s=t.TextInputTypes||(t.TextInputTypes={}));class l extends o.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:n,type:s,value:l,onChange:u,validated:f,isReadOnly:p,isRequired:d,isDisabled:m}=e,h=r.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return o.createElement("input",Object.assign({},h,{className:i.css(a.default.formControl,f===c.ValidatedOptions.success&&a.default.modifiers.success,f===c.ValidatedOptions.warning&&a.default.modifiers.warning,n),onChange:this.handleChange,type:s,value:l,"aria-invalid":f===c.ValidatedOptions.error,required:d,disabled:m,readOnly:p,ref:t}))}}t.TextInputBase=l,l.displayName="TextInputBase",l.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:s.text,onChange:()=>{}},t.TextInput=o.forwardRef((e,t)=>o.createElement(l,Object.assign({},e,{innerRef:t})))},462:function(e,t,n){var r=n(6),o=n(463);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},463:function(e,t,n){(t=n(7)(!1)).push([e.i,".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n",""]),e.exports=t},464:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),o=r.__importStar(n(0)),a=r.__importDefault(n(437)),i=n(4);t.StackItem=e=>{var{isFilled:t=!1,className:n="",children:c=null}=e,s=r.__rest(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},s,{className:i.css(a.default.stackItem,t&&a.default.modifiers.fill,n)}),c)},t.StackItem.displayName="StackItem"},644:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n.n(r),a=n(1),i=n.n(a),c=n(0),s=n.n(c),l=n(11),u=n.n(l),f=n(26),p=n(473),d=n(65),m=n(43),h=n(450),b=n(464),v=n(474),g=n(451),y=n.n(g),O=n(428),j=function(e){return{fields:[{component:y.a.SELECT,name:"selectedWorkflows",label:"",loadOptions:Object(O.a)(e),multi:!0,isSearchable:!0,isClearable:!0}]}},k=n(17),w=n.n(k),_=n(63),S=n(84),P=n(13),x=n(66),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.map((function(e){return"filter[id][]=".concat(e)})).join("&");return Object(S.a)().get("".concat(P.a,"/workflows?filter[name][contains]=").concat(e,"&").concat(n||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},R=function(e,t,n){var r=e?e.map((function(e){return Object(S.i)().unlinkWorkflow(e,n)})):[],o=t?t.map((function(e){return Object(S.i)().linkWorkflow(e,n)})):[];return Promise.all([].concat(w()(r),w()(o)))},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:x.a.limit,offset:x.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="app_name=".concat(e.appName,"&object_type=").concat(e.objectType,"&object_id=").concat(e.objectId),o="&limit=".concat(t.limit,"&offset=").concat(t.offset),a="&filter[name][contains]=".concat(n);return Object(S.a)().get("".concat(P.a,"/workflows?").concat(r).concat(a).concat(o))},E=n(118),D=function(e){return e().i18nReducer.formatMessage},C=(0,n(52).defineMessages)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"}}),I=n(69),M=n(68),F=n(446),W=n(82),q=n(52),L=n(122);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={isFetching:!0},G=function(e,t){switch(t.type){case"setFetching":return H(H({},e),{},{isFetching:t.payload});default:return e}},Q=function(e){var t=e.objectType,n=e.removeQuery,r=e.keepHash,a=e.querySelector,i=e.pushParam,l=e.objectName,u=void 0===l?function(){return t}:l,g=Object(W.a)().formatMessage,y=Object(c.useRef)(g(Object(q.defineMessage)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,O=Object(c.useReducer)(G,B),k=o()(O,2),w=k[0].isFetching,S=k[1],V=Object(f.useSelector)((function(e){return e.approvalReducer.resolvedWorkflows})),H=V.data,Q=V.meta,A=Object(f.useDispatch)(),J=Object(F.a)({removeQuery:n,keepHash:r}),K=Object(M.a)([a]),U=o()(K,1)[0];Object(c.useEffect)((function(){A(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:x.a.limit,offset:x.a.offset},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:_.a.RESOLVE_WORKFLOWS,payload:T(e,t,n)}}({objectType:t,appName:P.b[t],objectId:U[a]},Q)).then((function(){return S({type:"setFetching",payload:!1})}))}),[]);return s.a.createElement(p.Modal,{title:y,isOpen:!0,onClose:function(){return J.push(i)},variant:"small"},w&&s.a.createElement(I.j,null),!w&&s.a.createElement(h.Stack,{hasGutter:!0},s.a.createElement(b.StackItem,null,s.a.createElement(d.TextContent,null,s.a.createElement(m.Text,null,g(C.setWorkflow,{strong:function(e){return s.a.createElement("strong",null,e)},objectName:u(U[a])})))),s.a.createElement(b.StackItem,null,s.a.createElement(v.c,{initialValues:{selectedWorkflows:H?H.map((function(e){return e.id})):void 0},onSubmit:function(e,n){var r=n.getState().initialValues.selectedWorkflows||[],o=e.selectedWorkflows||[];J.push(i);var c,s,l,u=r.filter((function(e){return o.findIndex((function(t){return t===e}))<0})),f=o.filter((function(e){return r.findIndex((function(t){return t===e}))<0}));(u.length>0||f.length>0)&&A((c=u,s=f,l={object_type:t,app_name:P.b[t],object_id:U[a]},function(e,t){var n=D(t);return e({type:_.a.UPDATE_WORKFLOWS,payload:R(c,s,l).then((function(){return e(Object(E.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:"".concat(c.length>0?n(C.unlinkNotification,{count:c.length}):"","\n          ").concat(s.length>0?n(C.linkNotification,{count:s.length}):"")}))}))})}))},onCancel:function(){return J.push(i)},schema:j(N),formContainer:"modal",templateProps:{submitLabel:g(L.a.save)}}))))};Q.propTypes={pushParam:u.a.oneOfType([u.a.string,u.a.shape({pathname:u.a.string.isRequired,search:u.a.string})]).isRequired,objectType:u.a.string.isRequired,objectName:u.a.func,removeQuery:u.a.bool,querySelector:u.a.oneOf(["portfolio","platform","inventory","portfolio-item"]).isRequired,keepHash:u.a.bool},Q.defaultProps={keepHash:!1};t.default=Q}}]);
//# sourceMappingURL=../sourcemaps/edit-approval-workflow~31ecd969.js.map