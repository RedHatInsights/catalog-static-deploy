(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{364:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},366:function(e,t,n){"use strict";var r=n(367);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},367:function(e,t,n){"use strict";var r=n(386),o=n.n(r);function i(e){var t=null,n=null,r=new Promise((function(e,r){t=e,n=r}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:r,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
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
var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},u=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=o()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t&&t();var o=e.apply(void 0,n),a=i(o),c=a.promise,u=a.cancel;return t=u,c}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var r=a({},c,n),o=new u({func:e,wait:t,options:r});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),o=r.__importStar(n(0)),i=r.__importDefault(n(172)),a=n(5),c=n(37);var u;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(u=t.TextInputTypes||(t.TextInputTypes={}));class s extends o.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:n,type:u,value:s,onChange:l,validated:p,isReadOnly:f,isRequired:d,isDisabled:h}=e,b=r.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return o.createElement("input",Object.assign({},b,{className:a.css(i.default.formControl,p===c.ValidatedOptions.success&&i.default.modifiers.success,n),onChange:this.handleChange,type:u,value:s,"aria-invalid":p===c.ValidatedOptions.error,required:d,disabled:h,readOnly:f,ref:t}))}}t.TextInputBase=s,s.displayName="TextInputBase",s.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:u.text,onChange:()=>{}},t.TextInput=o.forwardRef((e,t)=>o.createElement(s,Object.assign({},e,{innerRef:t})))},386:function(e,t,n){"use strict";function r(e){return"function"==typeof e?e():e}function o(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,a=void 0,c=void 0,u=[];return function(){var l=r(t),p=(new Date).getTime(),f=!i||p-i>l;i=p;for(var d=arguments.length,h=Array(d),b=0;b<d;b++)h[b]=arguments[b];if(f&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[h])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(h)));if(a?clearTimeout(c):a=o(),u.push(h),c=setTimeout(s.bind(this),l),n.accumulate){var v=u.length-1;return a.promise.then((function(e){return e[v]}))}return a.promise};function s(){var t=a;clearTimeout(c),Promise.resolve(n.accumulate?e.call(this,u):e.apply(this,u[u.length-1])).then(t.resolve,t.reject),u=[],a=null}}},391:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},400:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(391),a=n.n(i),c=n(40);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return"string"==typeof e?e.split("?")[0]:"object"===a()(e)?s(s({},e),{},{search:void 0}):e};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.removeSearch,n=e.keepHash,r=Object(c.g)();return s(s({},r),{},{push:function(e){var o=e;return n&&r.location.hash.length>0&&(o="object"===a()(o)?s(s({},o),{},{hash:r.location.hash}):"".concat(o).concat(r.location.hash)),t?r.push(l(o)):r.push(o)}})}},489:function(e,t,n){"use strict";var r=n(21),o=n.n(r),i=n(22),a=n(97);function c(){var e=o()(["\n  overflow: hidden;\n"]);return c=function(){return e},e}var u=Object(i.b)(a.Bullseye)(c());t.a=u},686:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(42),a=n.n(i),c=n(67),u=n.n(c),s=n(31),l=n.n(s),p=n(0),f=n.n(p),d=n(10),h=n.n(d),b=n(23),v=n(410),m=n(95),y=n(412),g=n(389),O=n.n(g),j=n(12),w=n(366),P=n(422),S=Object(w.a)((function(e,t){return Object(P.e)(e).then((function(n){var r=n.data;if(!e||0===e.trim().length)throw"Required";if(r.find((function(n){return n.name===e&&n.id!==t})))throw"Name has already been taken"}))})),T=function(e,t,n){var r,o,i,a,c;return{fields:[{label:"Name",name:"name",component:O.a.TEXT_FIELD,isRequired:!0,maxLength:(null==t||null===(r=t.components)||void 0===r||null===(o=r.schemas)||void 0===o||null===(i=o.Portfolio)||void 0===i||null===(a=i.properties)||void 0===a||null===(c=a.name)||void 0===c?void 0:c.maxLength)||j.d,validate:[function(e){return S(e,n)}]},{label:"Description",component:O.a.TEXTAREA,name:"description"}]}},x=n(382),D=n(52),C=n(400),R=n(489),E=n(103),_=n(9),k=n(56);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t,n,r=e.removeQuery,o=e.closeTarget,i=e.viewState,c=Object(b.useDispatch)(),s=Object(p.useState)(!1),d=l()(s,2),h=d[0],g=d[1],O=Object(p.useState)(!0),j=l()(O,2),w=j[0],S=j[1],q=Object(p.useContext)(k.a).openApiSchema,N=Object(D.a)(["portfolio"]),F=l()(N,1)[0].portfolio,I=Object(C.a)({removeQuery:r,keepHash:!0}).push,A=Object(b.useSelector)((function(e){var t=e.portfolioReducer;return Object(P.g)(t,F)})),B=function(){var e=u()(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,c(Object(x.a)(t));case 3:return n=e.sent,g(!1),e.abrupt("return",n&&n.value&&n.value.id?I({pathname:_.u,search:"?portfolio=".concat(n.value.id)}):I(o));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=F&&A&&Object.keys(A).length>0;return!1===(null==A||null===(t=A.metadata)||void 0===t||null===(n=t.user_capabilities)||void 0===n?void 0:n.update)?f.a.createElement(E.a,null):f.a.createElement(v.Modal,{title:F?"Edit portfolio":"Create portfolio",isOpen:w,onClose:function(){return I(o)},variant:"small"},!F||Q?f.a.createElement(y.c,{schema:T(0,q,F),schemaType:"default",onSubmit:function(e){return A?(S(!1),c(Object(x.n)(e,i)).then((function(){return I(o)}))):B(e,i)},onCancel:function(){return I(o)},initialValues:L({},A),formContainer:"modal",buttonsLabels:{submitLabel:F?"Save":"Create"},disableSubmit:h?["pristine","diry"]:[]}):f.a.createElement(R.a,{className:"pf-u-m-md"},f.a.createElement(m.Spinner,null)))};N.propTypes={removeQuery:h.a.bool,closeTarget:h.a.oneOfType([h.a.string,h.a.shape({pathname:h.a.string.isRequired,search:h.a.string})]).isRequired,viewState:h.a.shape({count:h.a.number,limit:h.a.number,offset:h.a.number,filter:h.a.string})};t.default=N}}]);
//# sourceMappingURL=../sourcemaps/add-portfolio~31ecd969.js.map