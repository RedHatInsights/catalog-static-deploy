(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{426:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},428:function(e,t,n){"use strict";var o=n(429);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(o.a)(e,t,n)}},429:function(e,t,n){"use strict";var o=n(456),r=n.n(o);function i(e){var t=null,n=null,o=new Promise((function(e,o){t=e,n=o}));return e&&e.then((function(e){t&&t(e)}),(function(e){n&&n(e)})),{promise:o,resolve:function(e){t&&t(e)},reject:function(e){n&&n(e)},cancel:function(){t=null,n=null}}}
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
var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},s=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,n=r()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=n,t=null,n=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];t&&t();var r=e.apply(void 0,n),a=i(r),u=a.promise,s=a.cancel;return t=s,u}),{func:n}},e.prototype.getDebouncedFunction=function(e){var t,n=(t=this.config.options).key.apply(t,e);return null==n?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[n]||(this.debounceCache[n]=this._createDebouncedFunction()),this.debounceCache[n])},e}();t.a=function(e,t,n){var o=a({},u,n),r=new s({func:e,wait:t,options:o});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.getDebouncedFunction(e).func;return n.apply(void 0,e)}}},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=o.__importStar(n(0)),i=o.__importDefault(n(209)),a=n(4),u=n(46);var s;!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(s=t.TextInputTypes||(t.TextInputTypes={}));class c extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified")}render(){const e=this.props,{innerRef:t,className:n,type:s,value:c,onChange:l,validated:f,isReadOnly:p,isRequired:d,isDisabled:m}=e,h=o.__rest(e,["innerRef","className","type","value","onChange","validated","isReadOnly","isRequired","isDisabled"]);return r.createElement("input",Object.assign({},h,{className:a.css(i.default.formControl,f===u.ValidatedOptions.success&&i.default.modifiers.success,f===u.ValidatedOptions.warning&&i.default.modifiers.warning,n),onChange:this.handleChange,type:s,value:c,"aria-invalid":f===u.ValidatedOptions.error,required:d,disabled:m,readOnly:p,ref:t}))}}t.TextInputBase=c,c.displayName="TextInputBase",c.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,type:s.text,onChange:()=>{}},t.TextInput=r.forwardRef((e,t)=>r.createElement(c,Object.assign({},e,{innerRef:t})))},443:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},456:function(e,t,n){"use strict";function o(e){return"function"==typeof e?e():e}function r(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,a=void 0,u=void 0,s=[];return function(){var l=o(t),f=(new Date).getTime(),p=!i||f-i>l;i=f;for(var d=arguments.length,m=Array(d),h=0;h<d;h++)m[h]=arguments[h];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(a?clearTimeout(u):a=r(),s.push(m),u=setTimeout(c.bind(this),l),n.accumulate){var v=s.length-1;return a.promise.then((function(e){return e[v]}))}return a.promise};function c(){var t=a;clearTimeout(u),Promise.resolve(n.accumulate?e.call(this,s):e.apply(this,s[s.length-1])).then(t.resolve,t.reject),s=[],a=null}}},848:function(e,t,n){"use strict";n.r(t);var o=n(56),r=n.n(o),i=n(87),a=n.n(i),u=n(0),s=n.n(u),c=n(11),l=n.n(c),f=n(26),p=n(53),d=n(489),m=n(490),h=n(84),v=n(454),b=n(428),g=n(515),y=n(10),O=n(82),_=n(122),w=n(436),x=n(431),j=function(e){return Object(g.k)(e,{limit:100,offset:0}).then((function(e){return e.data.filter((function(e){return e.metadata.user_capabilities.update})).map((function(e){var t=e.name;return{value:e.id,label:t}}))}))},R=function(e,t,n){return{fields:[{component:"copy-name-display",name:"portfolio_item_name",label:t(w.a.name),getName:e,fieldSpy:"portfolio_id"},{component:"initial-select",name:"portfolio_id",label:t(w.a.portfolio),isRequired:!0,loadOptions:Object(b.a)(j),isSearchable:!0,options:n,menuIsPortal:!0}]}},C=function(e){var t=e.portfolioId,n=e.portfolioItemId,o=e.closeUrl,i=e.search,u=e.portfolioName,c=Object(O.a)().formatMessage,l=Object(f.useDispatch)(),b=Object(p.g)().push,g=function(){var e=a()(r.a.mark((function e(o){var i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(Object(v.i)(o.portfolio_id));case 2:return i=e.sent,a=i.value,e.abrupt("return",l(Object(v.d)(n,o,a)).then((function(e){var t=e.id,n=e.service_offering_source_ref;return b({pathname:y.t,search:"?portfolio=".concat(o.portfolio_id,"&portfolio-item=").concat(t,"&source=").concat(n)})})).then((function(){return o.portfolio_id===t&&l(Object(v.f)(t))})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(d.Modal,{isOpen:!0,title:c(x.a.copyItemTitle),onClose:function(){return b({pathname:o,search:i})},variant:"small"},s.a.createElement(m.c,{initialValues:{portfolio_id:t},schema:R((function(e){return Object(h.f)().getPortfolioItemNextName(n,e).then((function(e){return e.next_name}))}),c,[{value:t,label:u}]),onSubmit:g,onCancel:function(){return b({pathname:o,search:i})},formContainer:"modal",templateProps:{submitLabel:c(_.a.save),disableSubmit:["validating","submitting"]}}))};C.propTypes={closeUrl:l.a.string.isRequired,portfolioId:l.a.string,portfolioItemId:l.a.string.isRequired,search:l.a.string.isRequired,portfolioName:l.a.string.isRequired},t.default=C}}]);
//# sourceMappingURL=../sourcemaps/copy-portfolio-item-modal~31ecd969.js.map