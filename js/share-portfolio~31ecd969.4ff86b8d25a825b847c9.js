(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{376:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},378:function(e,t,n){"use strict";var r=n(379);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},379:function(e,t,n){"use strict";var r=n(398),o=n.n(r);function i(e){var t=null,n=null,r=new Promise((function(e,r){t=e,n=r}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:r,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
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
var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},u=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=o()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t&&t();var o=e.apply(void 0,n),a=i(o),s=a.promise,u=a.cancel;return t=u,s}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var r=a({},s,n),o=new u({func:e,wait:t,options:r});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},385:function(e,t,n){"use strict";t.__esModule=!0,n(418),t.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),o=r.__importStar(n(0)),i=r.__importDefault(n(176)),a=n(4),s=n(37);var u;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(u=t.TextInputTypes||(t.TextInputTypes={}));class c extends o.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:n,type:u,value:c,onChange:l,validated:p,isReadOnly:f,isRequired:d,isDisabled:m}=e,h=r.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return o.createElement("input",Object.assign({},h,{className:a.css(i.default.formControl,p===s.ValidatedOptions.success&&i.default.modifiers.success,n),onChange:this.handleChange,type:u,value:c,"aria-invalid":p===s.ValidatedOptions.error,required:d,disabled:m,readOnly:f,ref:t}))}}t.TextInputBase=c,c.displayName="TextInputBase",c.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:u.text,onChange:()=>{}},t.TextInput=o.forwardRef((e,t)=>o.createElement(c,Object.assign({},e,{innerRef:t})))},398:function(e,t,n){"use strict";function r(e){return"function"==typeof e?e():e}function o(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,a=void 0,s=void 0,u=[];return function(){var l=r(t),p=(new Date).getTime(),f=!i||p-i>l;i=p;for(var d=arguments.length,m=Array(d),h=0;h<d;h++)m[h]=arguments[h];if(f&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(a?clearTimeout(s):a=o(),u.push(m),s=setTimeout(c.bind(this),l),n.accumulate){var b=u.length-1;return a.promise.then((function(e){return e[b]}))}return a.promise};function c(){var t=a;clearTimeout(s),Promise.resolve(n.accumulate?e.call(this,u):e.apply(this,u[u.length-1])).then(t.resolve,t.reject),u=[],a=null}}},402:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},412:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(402),a=n.n(i),s=n(41);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return"string"==typeof e?e.split("?")[0]:"object"===a()(e)?c(c({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,n=e.keepHash,r=Object(s.g)();return c(c({},r),{},{push:function(e){var o=e;return n&&r.location.hash.length>0&&(o="object"===a()(o)?c(c({},o),{},{hash:r.location.hash}):"".concat(o).concat(r.location.hash)),t?r.push(l(o)):r.push(o)}})}},417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),o=r.__importStar(n(0)),i=r.__importDefault(n(385)),a=n(4);t.Stack=e=>{var{hasGutter:t=!1,className:n="",children:s=null,component:u="div"}=e,c=r.__rest(e,["hasGutter","className","children","component"]);const l=u;return o.createElement(l,Object.assign({},c,{className:a.css(i.default.stack,t&&i.default.modifiers.gutter,n)}),s)},t.Stack.displayName="Stack"},418:function(e,t,n){var r=n(7),o=n(419);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},419:function(e,t,n){(t=n(8)(!1)).push([e.i,".pf-l-stack {\n  --pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.pf-l-stack__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-stack.pf-m-gutter > *:not(:last-child) {\n  margin-bottom: var(--pf-l-stack--m-gutter--MarginBottom); }\n",""]),e.exports=t},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),o=r.__importStar(n(0)),i=r.__importDefault(n(385)),a=n(4);t.StackItem=e=>{var{isFilled:t=!1,className:n="",children:s=null}=e,u=r.__rest(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},u,{className:a.css(i.default.stackItem,t&&i.default.modifiers.fill,n)}),s)},t.StackItem.displayName="StackItem"},680:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(31),a=n.n(i),s=n(0),u=n.n(s),c=n(10),l=n.n(c),p=n(424),f=n(23),d=n(422),m=n(50),h=n(35),b=n(417),v=n(423),g=n(14),y=n.n(g),O=function(e,t,n,r,o,i){var a=r?function(e,t){return[{component:"sub-form",description:"Invite group",name:"new_share",key:"1",fields:[{name:"group-selection",component:"share-group-select",inputName:"group_uuid",selectName:"permissions",loadOptions:e,isSearchable:!0,permissions:t}]}]}(t,n):[],s=e.map((function(e){return function(e,t){return{component:"sub-form",name:"".concat(e.group_name),key:"".concat(e.group_name),fields:[{name:"".concat(e.group_name),label:"".concat(e.group_name),component:"share-group-edit",options:t,isClearable:!0}]}}(e,n)})),u=o?[{component:"sub-form",description:"Groups with access",name:"share_list",key:"share_list",fields:s}]:[];return{fields:[].concat(y()(a),y()(u))}},_=n(394),j=n(44),w=n.n(j),S=n(69),P=n.n(S),k=n(66),x=n(12),D=Object(k.a)(),E=Object(k.e)();function C(e){return T.apply(this,arguments)}function T(){return(T=P()(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("".concat(x.c,"/portfolios/").concat(t,"/share_info"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=n(2);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){return{type:N.S,payload:(t=R({},e),n={permissions:t.permissions.split(","),group_uuids:[t.group_uuid]},E.sharePortfolio(t.id,n)),meta:{notifications:{fulfilled:{variant:"success",title:"Success sharing portfolio",description:"The portfolio was shared successfully."}}}};var t,n},F=function(e){return{type:N.U,payload:(t=R({},e),n={permissions:t.permissions,group_uuids:[t.group_uuid]},E.unsharePortfolio(t.id,n)),meta:{notifications:{fulfilled:{variant:"success",title:"Success unsharing portfolio",description:"The portfolio was unshared successfully."}}}};var t,n},q=n(53);Object(k.g)();var L=n(54),B=n(412),G=n(106);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(e){var t,n,r,i,c,l,g,y,j=e.closeUrl,w=e.removeQuery,S=e.viewState,P=e.portfolioName,D=void 0===P?function(){return""}:P,E=Object(f.useDispatch)(),T=Object(B.a)({removeQuery:w,keepHash:!0}).push,I=Object(L.a)(["portfolio"]),R=a()(I,2),U=R[0].portfolio,V=R[1],A=Object(s.useState)(!0),H=a()(A,2),J=H[0],z=H[1],K=Object(f.useSelector)((function(e){return e.portfolioReducer.selectedPortfolio})),W=Object(f.useSelector)((function(e){return{shareInfo:e.shareReducer.shareInfo}})).shareInfo;Object(s.useEffect)((function(){var e;z(!0),E((e=U,{type:N.C,payload:C(e)})).then((function(){return z(!1)})).catch((function(){return z(!1)}))}),[]);var X=function(){return T({pathname:j,search:V})};if(!1===(null==K||null===(t=K.metadata)||void 0===t||null===(n=t.user_capabilities)||void 0===n?void 0:n.share)&&!1===(null==K||null===(r=K.metadata)||void 0===r||null===(i=r.user_capabilities)||void 0===i?void 0:i.unshare))return u.a.createElement(G.a,null);return u.a.createElement(d.Modal,{title:"Share portfolio",isOpen:!0,variant:"small",onClose:X},J&&u.a.createElement(q.h,null),!J&&u.a.createElement(b.Stack,{hasGutter:!0},u.a.createElement(v.StackItem,null,u.a.createElement(m.TextContent,null,u.a.createElement(h.Text,null,"Share ",u.a.createElement("strong",null,D(U))," portfolio"))),u.a.createElement(v.StackItem,null,u.a.createElement(p.c,{schema:O(W,(function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(k.a)().get("".concat(x.h,"/groups/").concat(e.length>0?"?name=".concat(e):"")).then((function(e){return e.data.map((function(e){var t=e.uuid;return{label:e.name,value:t}}))}))}(e)}),x.k,!1!==(null==K||null===(c=K.metadata)||void 0===c||null===(l=c.user_capabilities)||void 0===l?void 0:l.share),!1!==(null==K||null===(g=K.metadata)||void 0===g||null===(y=g.user_capabilities)||void 0===y?void 0:y.unshare)),schemaType:"default",onSubmit:function(e){var t=[];return e.group_uuid&&e.permissions&&t.push(E(M(Q({id:U},e)))),W.forEach((function(n){var r=n.permissions.sort().join(",");if(e[n.group_name]!==r)if(e[n.group_name])n.permissions.length>e[n.group_name].split(",").length?t.push(E(F({id:U,permissions:["update"],group_uuid:n.group_uuid}))):t.push(E(M({id:U,permissions:e[n.group_name],group_uuid:n.group_uuid})));else{var o=n.permissions.filter((function(e){return x.l.indexOf(e)>-1}));t.push(E(F({id:U,permissions:o,group_uuid:n.group_uuid})))}})),T({pathname:j,search:V}),Promise.all(t).then((function(){return E(Object(_.g)(S))}))},onCancel:X,validate:function(e){var t={};return e.group_uuid&&!e.permissions&&(t.permissions="Select the share permissions"),e.permissions&&!e.group_uuid&&(t.group_uuid="Select a group"),t},initialValues:Q(Q({},K),W.map((function(e){var t=e.permissions.filter((function(e){return x.l.indexOf(e)>-1})),n=e.group_name,r=x.k.find((function(e){return e.value===t.sort().join(",")}));return o()({},n,r?r.value:"Unknown")})).reduce((function(e,t){return Q(Q({},e),t)}),{})),formContainer:"modal",buttonsLabels:{submitLabel:"Apply"}}))))};V.propTypes={closeUrl:l.a.string.isRequired,removeQuery:l.a.bool,portfolioName:l.a.func,viewState:l.a.shape({count:l.a.number,limit:l.a.number,offset:l.a.number,filter:l.a.string})};t.default=V}}]);
//# sourceMappingURL=../sourcemaps/share-portfolio~31ecd969.js.map