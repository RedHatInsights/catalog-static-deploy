(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{428:function(e,o,r){"use strict";var l=r(427);o.a=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(l.a)(e,o,r)}},430:function(e,o,r){"use strict";var l=r(425),n=r.n(l),t=r(49),a=r.n(t),c=r(0),i=r.n(c),f=r(11),p=r.n(f),b=r(427),s=r(203),u=r(66),d=function(e){var o=e.meta,r=o.limit,l=o.count,t=o.offset,c=e.apiProps,f=e.apiRequest,p=e.className,d=e.isCompact,m=a()(e,["meta","apiProps","apiRequest","className","isCompact"]);return i.a.createElement("div",{className:p},i.a.createElement(s.Pagination,n()({perPage:r||50,itemCount:l||0,onPerPageSelect:function(e,o){return f(c,{offset:t,limit:o})},page:Object(u.b)(r,t),onSetPage:function(e,o,l){var n={offset:Object(u.c)(o,r),limit:r},t=function(){return f(c,n)};return l?Object(b.a)(t,250)():t()},direction:"down",isCompact:d},m)))};d.propTypes={meta:p.a.shape({count:p.a.number,limit:p.a.number.isRequired,offset:p.a.number.isRequired}),apiRequest:p.a.func.isRequired,apiProps:p.a.any,className:p.a.string,isCompact:p.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},o.a=d},449:function(e,o,r){"use strict";var l=r(0),n=r.n(l),t=r(11),a=r.n(t),c=function(e){var o=e.children;return n.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},o)};c.propTypes={children:a.a.oneOfType([a.a.node,a.a.arrayOf(a.a.node)])},o.a=c},454:function(e,o,r){"use strict";var l=r(52),n=Object(l.defineMessages)({shared:{id:"common.labels.shared",defaultMessage:"Shared"},portfolio:{id:"common.labels.portfolio",defaultMessage:"Portfolio"},platform:{id:"common.labels.platform",defaultMessage:"Platform"},name:{id:"common.labels.name",defaultMessage:"Name"},description:{id:"common.labels.description",defaultMessage:"Description"}});o.a=n},507:function(e,o,r){"use strict";o.__esModule=!0,o.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0,transform:""},o.WrenchIcon=r(201).createIcon(o.WrenchIconConfig),o.default=o.WrenchIcon},509:function(e,o,r){"use strict";r.d(o,"a",(function(){return p}));var l=r(1),n=r.n(l),t=r(49),a=r.n(t),c=r(442);function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,l)}return r}function f(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){n()(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}var p=function(e){var o=e.pathname,r=e.preserveSearch,l=a()(e,["pathname","preserveSearch"]);return{component:c.b.TOOLBAR_ITEM,key:"".concat(l.key,"/button-link"),fields:[{component:c.b.LINK,pathname:o,preserveSearch:r,key:"".concat(l.key,"/button-link"),isDisabled:l.isDisabled,fields:[f({component:c.b.BUTTON},l)]}]}}},523:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const l=r(2),n=l.__importStar(r(0)),t=r(4),a=l.__importDefault(r(219));o.Badge=e=>{var{isRead:o=!1,className:r="",children:c=""}=e,i=l.__rest(e,["isRead","className","children"]);return n.createElement("span",Object.assign({},i,{className:t.css(a.default.badge,o?a.default.modifiers.read:a.default.modifiers.unread,r)}),c)},o.Badge.displayName="Badge"},551:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const l=r(2),n=l.__importStar(r(0)),t=l.__importDefault(r(552)),a=r(57),c=r(4),i=l.__importDefault(r(90)),f={blue:t.default.modifiers.blue,cyan:t.default.modifiers.cyan,green:t.default.modifiers.green,orange:t.default.modifiers.orange,purple:t.default.modifiers.purple,red:t.default.modifiers.red,grey:""};o.Label=e=>{var{children:o,className:r="",color:p="grey",variant:b="filled",icon:s,onClose:u,closeBtn:d,closeBtnProps:m,href:_}=e,g=l.__rest(e,["children","className","color","variant","icon","onClose","closeBtn","closeBtnProps","href"]);const v=_?"a":"span",C=d||n.createElement(a.Button,Object.assign({type:"button",variant:"plain",onClick:u},Object.assign({"aria-label":"label-close-button"},m)),n.createElement(i.default,null));return n.createElement("span",Object.assign({},g,{className:c.css(t.default.label,f[p],"outline"===b&&t.default.modifiers.outline,r)}),n.createElement(v,Object.assign({className:c.css(t.default.labelContent)},_&&{href:_}),s&&n.createElement("span",{className:c.css(t.default.labelIcon)},s),o),u&&C)},o.Label.displayName="Label"},552:function(e,o,r){"use strict";o.__esModule=!0,r(553),o.default={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",modifiers:{blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",outline:"pf-m-outline"}}},553:function(e,o,r){var l=r(6),n=r(554);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var t={insert:"head",singleton:!1};l(n,t);e.exports=n.locals||{}},554:function(e,o,r){(o=r(7)(!1)).push([e.i,'.pf-c-label {\n  --pf-c-label--PaddingTop: var(--pf-global--spacer--xs);\n  --pf-c-label--PaddingRight: var(--pf-global--spacer--sm);\n  --pf-c-label--PaddingBottom: var(--pf-global--spacer--xs);\n  --pf-c-label--PaddingLeft: var(--pf-global--spacer--sm);\n  --pf-c-label--BorderRadius: var(--pf-global--BorderRadius--lg);\n  --pf-c-label--BackgroundColor: var(--pf-global--BackgroundColor--200);\n  --pf-c-label--Color: var(--pf-global--Color--100);\n  --pf-c-label--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-label__content--before--BorderWidth: 0;\n  --pf-c-label__content--before--BorderColor: transparent;\n  --pf-c-label--m-outline--BackgroundColor: var(--pf-global--BackgroundColor--100);\n  --pf-c-label--m-outline__content--before--BorderWidth: var(--pf-global--BorderWidth--sm);\n  --pf-c-label--m-outline__content--before--BorderColor: var(--pf-global--BorderColor--100);\n  --pf-c-label__content--link--hover--before--BorderWidth: var(--pf-global--BorderWidth--sm);\n  --pf-c-label__content--link--focus--before--BorderWidth: var(--pf-global--BorderWidth--sm);\n  --pf-c-label__content--link--hover--before--BorderColor: var(--pf-global--BorderColor--200);\n  --pf-c-label__content--link--focus--before--BorderColor: var(--pf-global--BorderColor--200);\n  --pf-c-label--m-outline__content--link--hover--before--BorderWidth: var(--pf-global--BorderWidth--md);\n  --pf-c-label--m-outline__content--link--focus--before--BorderWidth: var(--pf-global--BorderWidth--md);\n  --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-global--BorderColor--100);\n  --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-global--BorderColor--100);\n  --pf-c-label--m-blue--BackgroundColor: var(--pf-global--palette--blue-50);\n  --pf-c-label--m-blue__content--Color: var(--pf-global--info-color--200);\n  --pf-c-label--m-blue__icon--Color: var(--pf-global--primary-color--100);\n  --pf-c-label--m-blue__content--link--hover--before--BorderColor: var(--pf-global--primary-color--100);\n  --pf-c-label--m-blue__content--link--focus--before--BorderColor: var(--pf-global--primary-color--100);\n  --pf-c-label--m-outline--m-blue__content--before--BorderColor: var(--pf-global--active-color--200);\n  --pf-c-label--m-outline--m-blue__content--link--hover--before--BorderColor: var(--pf-global--active-color--200);\n  --pf-c-label--m-outline--m-blue__content--link--focus--before--BorderColor: var(--pf-global--active-color--200);\n  --pf-c-label--m-green--BackgroundColor: var(--pf-global--palette--green-50);\n  --pf-c-label--m-green__content--Color: var(--pf-global--success-color--200);\n  --pf-c-label--m-green__icon--Color: var(--pf-global--success-color--100);\n  --pf-c-label--m-green__content--link--hover--before--BorderColor: var(--pf-global--success-color--100);\n  --pf-c-label--m-green__content--link--focus--before--BorderColor: var(--pf-global--success-color--100);\n  --pf-c-label--m-outline--m-green__content--before--BorderColor: var(--pf-global--palette--green-100);\n  --pf-c-label--m-outline--m-green__content--link--hover--before--BorderColor: var(--pf-global--palette--green-100);\n  --pf-c-label--m-outline--m-green__content--link--focus--before--BorderColor: var(--pf-global--palette--green-100);\n  --pf-c-label--m-orange--BackgroundColor: var(--pf-global--palette--gold-50);\n  --pf-c-label--m-orange__content--Color: var(--pf-global--palette--gold-700);\n  --pf-c-label--m-orange__icon--Color: var(--pf-global--palette--orange-300);\n  --pf-c-label--m-orange__content--link--hover--before--BorderColor: var(--pf-global--palette--orange-300);\n  --pf-c-label--m-orange__content--link--focus--before--BorderColor: var(--pf-global--palette--orange-300);\n  --pf-c-label--m-outline--m-orange__content--before--BorderColor: var(--pf-global--palette--gold-100);\n  --pf-c-label--m-outline--m-orange__content--link--hover--before--BorderColor: var(--pf-global--palette--gold-100);\n  --pf-c-label--m-outline--m-orange__content--link--focus--before--BorderColor: var(--pf-global--palette--gold-100);\n  --pf-c-label--m-red--BackgroundColor: var(--pf-global--palette--red-50);\n  --pf-c-label--m-red__content--Color: var(--pf-global--palette--red-300);\n  --pf-c-label--m-red__icon--Color: var(--pf-global--danger-color--100);\n  --pf-c-label--m-red__content--link--hover--before--BorderColor: var(--pf-global--danger-color--100);\n  --pf-c-label--m-red__content--link--focus--before--BorderColor: var(--pf-global--danger-color--100);\n  --pf-c-label--m-outline--m-red__content--before--BorderColor: var(--pf-global--danger-color--100);\n  --pf-c-label--m-outline--m-red__content--link--hover--before--BorderColor: var(--pf-global--danger-color--100);\n  --pf-c-label--m-outline--m-red__content--link--focus--before--BorderColor: var(--pf-global--danger-color--100);\n  --pf-c-label--m-purple--BackgroundColor: var(--pf-global--palette--purple-50);\n  --pf-c-label--m-purple__content--Color: var(--pf-global--palette--purple-700);\n  --pf-c-label--m-purple__icon--Color: var(--pf-global--palette--purple-500);\n  --pf-c-label--m-purple__content--link--hover--before--BorderColor: var(--pf-global--palette--purple-500);\n  --pf-c-label--m-purple__content--link--focus--before--BorderColor: var(--pf-global--palette--purple-500);\n  --pf-c-label--m-outline--m-purple__content--before--BorderColor: var(--pf-global--palette--purple-100);\n  --pf-c-label--m-outline--m-purple__content--link--hover--before--BorderColor: var(--pf-global--palette--purple-100);\n  --pf-c-label--m-outline--m-purple__content--link--focus--before--BorderColor: var(--pf-global--palette--purple-100);\n  --pf-c-label--m-cyan--BackgroundColor: var(--pf-global--palette--cyan-50);\n  --pf-c-label--m-cyan__content--Color: var(--pf-global--default-color--300);\n  --pf-c-label--m-cyan__icon--Color: var(--pf-global--default-color--200);\n  --pf-c-label--m-cyan__content--link--hover--before--BorderColor: var(--pf-global--default-color--200);\n  --pf-c-label--m-cyan__content--link--focus--before--BorderColor: var(--pf-global--default-color--200);\n  --pf-c-label--m-outline--m-cyan__content--before--BorderColor: var(--pf-global--palette--cyan-100);\n  --pf-c-label--m-outline--m-cyan__content--link--hover--before--BorderColor: var(--pf-global--palette--cyan-100);\n  --pf-c-label--m-outline--m-cyan__content--link--focus--before--BorderColor: var(--pf-global--palette--cyan-100);\n  --pf-c-label__content--Color: var(--pf-global--Color--100);\n  --pf-c-label__icon--Color: var(--pf-global--Color--100);\n  --pf-c-label__icon--MarginRight: var(--pf-global--spacer--xs);\n  --pf-c-label__c-button--FontSize: var(--pf-global--FontSize--xs);\n  --pf-c-label__c-button--MarginTop: calc(var(--pf-global--spacer--form-element) * -1);\n  --pf-c-label__c-button--MarginRight: calc(var(--pf-global--spacer--form-element) * -1);\n  --pf-c-label__c-button--MarginBottom: calc(var(--pf-global--spacer--form-element) * -1);\n  --pf-c-label__c-button--MarginLeft: var(--pf-global--spacer--xs);\n  --pf-c-label__c-button--PaddingTop: var(--pf-global--spacer--xs);\n  --pf-c-label__c-button--PaddingRight: var(--pf-global--spacer--sm);\n  --pf-c-label__c-button--PaddingBottom: var(--pf-global--spacer--xs);\n  --pf-c-label__c-button--PaddingLeft: var(--pf-global--spacer--sm);\n  position: relative;\n  padding: var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);\n  font-size: var(--pf-c-label--FontSize);\n  color: var(--pf-c-label--Color);\n  white-space: nowrap;\n  background-color: var(--pf-c-label--BackgroundColor);\n  border-radius: var(--pf-c-label--BorderRadius); }\n  .pf-c-label.pf-m-blue {\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-blue--BackgroundColor);\n    --pf-c-label__content--Color: var(--pf-c-label--m-blue__content--Color);\n    --pf-c-label__icon--Color: var(--pf-c-label--m-blue__icon--Color);\n    --pf-c-label--m-outline__content--before--BorderColor: var(--pf-c-label--m-outline--m-blue__content--before--BorderColor);\n    --pf-c-label__content--link--hover--before--BorderColor: var(--pf-c-label--m-blue__content--link--hover--before--BorderColor);\n    --pf-c-label__content--link--focus--before--BorderColor: var(--pf-c-label--m-blue__content--link--focus--before--BorderColor);\n    --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-c-label--m-outline--m-blue__content--link--hover--before--BorderColor);\n    --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-c-label--m-outline--m-blue__content--link--focus--before--BorderColor); }\n  .pf-c-label.pf-m-green {\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-green--BackgroundColor);\n    --pf-c-label__content--Color: var(--pf-c-label--m-green__content--Color);\n    --pf-c-label__icon--Color: var(--pf-c-label--m-green__icon--Color);\n    --pf-c-label--m-outline__content--before--BorderColor: var(--pf-c-label--m-outline--m-green__content--before--BorderColor);\n    --pf-c-label__content--link--hover--before--BorderColor: var(--pf-c-label--m-green__content--link--hover--before--BorderColor);\n    --pf-c-label__content--link--focus--before--BorderColor: var(--pf-c-label--m-green__content--link--focus--before--BorderColor);\n    --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-c-label--m-outline--m-green__content--link--hover--before--BorderColor);\n    --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-c-label--m-outline--m-green__content--link--focus--before--BorderColor); }\n  .pf-c-label.pf-m-orange {\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-orange--BackgroundColor);\n    --pf-c-label__content--Color: var(--pf-c-label--m-orange__content--Color);\n    --pf-c-label__icon--Color: var(--pf-c-label--m-orange__icon--Color);\n    --pf-c-label--m-outline__content--before--BorderColor: var(--pf-c-label--m-outline--m-orange__content--before--BorderColor);\n    --pf-c-label__content--link--hover--before--BorderColor: var(--pf-c-label--m-orange__content--link--hover--before--BorderColor);\n    --pf-c-label__content--link--focus--before--BorderColor: var(--pf-c-label--m-orange__content--link--focus--before--BorderColor);\n    --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-c-label--m-outline--m-orange__content--link--hover--before--BorderColor);\n    --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-c-label--m-outline--m-orange__content--link--focus--before--BorderColor); }\n  .pf-c-label.pf-m-red {\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-red--BackgroundColor);\n    --pf-c-label__content--Color: var(--pf-c-label--m-red__content--Color);\n    --pf-c-label__icon--Color: var(--pf-c-label--m-red__icon--Color);\n    --pf-c-label--m-outline__content--before--BorderColor: var(--pf-c-label--m-outline--m-red__content--before--BorderColor);\n    --pf-c-label__content--link--hover--before--BorderColor: var(--pf-c-label--m-red__content--link--hover--before--BorderColor);\n    --pf-c-label__content--link--focus--before--BorderColor: var(--pf-c-label--m-red__content--link--focus--before--BorderColor);\n    --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-c-label--m-outline--m-red__content--link--hover--before--BorderColor);\n    --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-c-label--m-outline--m-red__content--link--focus--before--BorderColor); }\n  .pf-c-label.pf-m-purple {\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-purple--BackgroundColor);\n    --pf-c-label__content--Color: var(--pf-c-label--m-purple__content--Color);\n    --pf-c-label__icon--Color: var(--pf-c-label--m-purple__icon--Color);\n    --pf-c-label--m-outline__content--before--BorderColor: var(--pf-c-label--m-outline--m-purple__content--before--BorderColor);\n    --pf-c-label__content--link--hover--before--BorderColor: var(--pf-c-label--m-purple__content--link--hover--before--BorderColor);\n    --pf-c-label__content--link--focus--before--BorderColor: var(--pf-c-label--m-purple__content--link--focus--before--BorderColor);\n    --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-c-label--m-outline--m-purple__content--link--hover--before--BorderColor);\n    --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-c-label--m-outline--m-purple__content--link--focus--before--BorderColor); }\n  .pf-c-label.pf-m-cyan {\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-cyan--BackgroundColor);\n    --pf-c-label__content--Color: var(--pf-c-label--m-cyan__content--Color);\n    --pf-c-label__icon--Color: var(--pf-c-label--m-cyan__icon--Color);\n    --pf-c-label--m-outline__content--before--BorderColor: var(--pf-c-label--m-outline--m-cyan__content--before--BorderColor);\n    --pf-c-label__content--link--hover--before--BorderColor: var(--pf-c-label--m-cyan__content--link--hover--before--BorderColor);\n    --pf-c-label__content--link--focus--before--BorderColor: var(--pf-c-label--m-cyan__content--link--focus--before--BorderColor);\n    --pf-c-label--m-outline__content--link--hover--before--BorderColor: var(--pf-c-label--m-outline--m-cyan__content--link--hover--before--BorderColor);\n    --pf-c-label--m-outline__content--link--focus--before--BorderColor: var(--pf-c-label--m-outline--m-cyan__content--link--focus--before--BorderColor); }\n  .pf-c-label.pf-m-outline {\n    --pf-c-label__content--before--BorderWidth: var(--pf-c-label--m-outline__content--before--BorderWidth);\n    --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-outline__content--before--BorderColor);\n    --pf-c-label--BackgroundColor: var(--pf-c-label--m-outline--BackgroundColor); }\n    .pf-c-label.pf-m-outline a.pf-c-label__content:hover {\n      --pf-c-label__content--before--BorderWidth: var(--pf-c-label--m-outline__content--link--hover--before--BorderWidth);\n      --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-outline__content--link--hover--before--BorderColor); }\n    .pf-c-label.pf-m-outline a.pf-c-label__content:focus {\n      --pf-c-label__content--before--BorderWidth: var(--pf-c-label--m-outline__content--link--focus--before--BorderWidth);\n      --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-outline__content--link--focus--before--BorderColor); }\n  .pf-c-label .pf-c-button {\n    --pf-c-button--FontSize: var(--pf-c-label__c-button--FontSize);\n    --pf-c-button--PaddingTop: var(--pf-c-label__c-button--PaddingTop);\n    --pf-c-button--PaddingRight: var(--pf-c-label__c-button--PaddingRight);\n    --pf-c-button--PaddingBottom: var(--pf-c-label__c-button--PaddingBottom);\n    --pf-c-button--PaddingLeft: var(--pf-c-label__c-button--PaddingLeft);\n    margin-top: var(--pf-c-label__c-button--MarginTop);\n    margin-right: var(--pf-c-label__c-button--MarginRight);\n    margin-bottom: var(--pf-c-label__c-button--MarginBottom);\n    margin-left: var(--pf-c-label__c-button--MarginLeft); }\n\n.pf-c-label,\n.pf-c-label__content {\n  display: inline-flex;\n  align-items: center; }\n\n.pf-c-label__content {\n  color: var(--pf-c-label__content--Color); }\n  .pf-c-label__content::before {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    content: "";\n    border: var(--pf-c-label__content--before--BorderWidth) solid var(--pf-c-label__content--before--BorderColor);\n    border-radius: var(--pf-c-label--BorderRadius); }\n  a.pf-c-label__content {\n    cursor: pointer;\n    border: none; }\n    a.pf-c-label__content, a.pf-c-label__content:hover, a.pf-c-label__content:focus {\n      text-decoration: none; }\n    a.pf-c-label__content:hover {\n      --pf-c-label__content--before--BorderWidth: var(--pf-c-label__content--link--hover--before--BorderWidth);\n      --pf-c-label__content--before--BorderColor: var(--pf-c-label__content--link--hover--before--BorderColor); }\n    a.pf-c-label__content:focus {\n      --pf-c-label__content--before--BorderWidth: var(--pf-c-label__content--link--focus--before--BorderWidth);\n      --pf-c-label__content--before--BorderColor: var(--pf-c-label__content--link--focus--before--BorderColor); }\n\n.pf-c-label__icon {\n  margin-right: var(--pf-c-label__icon--MarginRight);\n  color: var(--pf-c-label__icon--Color); }\n',""]),e.exports=o},859:function(e,o,r){"use strict";r.r(o);var l=r(425),n=r.n(l),t=r(33),a=r.n(t),c=r(1),i=r.n(c),f=r(0),p=r.n(f),b=r(26),s=r(53),u=r(445),d=r.n(u),m=r(507),_=r.n(m),g=r(67),v=r(119),C=r(453),h=r(493),B=r(66),k=r(444),y=r(49),O=r.n(y),P=r(11),j=r.n(P),E=r(488),w=r(467),R=r(492),D=r(204),T=r(205),L=r(27),F=r(209),M=r(43),N=r(65),S=r(551),W=r(125),I=r(22),x=r.n(I),q=r(44),V=r(523),A=r(85),z=r(202),U=r(489),H=r(23);function J(){var e=x()(["\n  width: 100%;\n"]);return J=function(){return e},e}function K(){var e=x()(["\n  max-width: calc(100% - 80px);\n  width: calc(100% - 80px);\n"]);return K=function(){return e},e}var G=Object(H.b)(z.LevelItem)(K()),Q=Object(H.b)(A.Level)(J()),X=function(e){var o=e.id,r=e.to,l=e.portfolioName,n=e.portfolio_items,t=e.headerActions;return p.a.createElement(Q,null,p.a.createElement(G,null,p.a.createElement(N.TextContent,null,p.a.createElement(q.a,{to:r,id:"portfolio-link-".concat(o)},p.a.createElement(M.Text,{title:l,className:"pf-u-mb-0",component:M.TextVariants.h3},p.a.createElement(U.a,null,l))))),p.a.createElement(V.Badge,{isRead:!0},n),p.a.createElement("div",{onClick:function(e){return e.preventDefault()}},t))};X.propTypes={portfolioName:j.a.string.isRequired,portfolio_items:j.a.number,headerActions:j.a.node,id:j.a.string,to:j.a.shape({pathname:j.a.string.isRequired,search:j.a.string.isRequired}).isRequired},X.defaultProps={headerActions:[]};var Y=X,Z=r(432),$=r(10),ee=r(491),oe=r(490),re=r(82),le=r(122),ne=r(454);function te(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,l)}return r}var ae=["description"],ce=function(e){var o=e.portfolioId,r=e.handleCopyPortfolio,l=e.userCapabilities,n=l.share,t=l.copy,c=l.unshare,i=l.update,b=l.destroy,s=l.set_approval,u=Object(re.a)().formatMessage,d=Object(f.useState)(!1),m=a()(d,2),_=m[0],g=m[1],v=[];return(n||c)&&v.push(p.a.createElement(T.DropdownItem,{key:"share-portfolio-action",id:"share-portfolio-action",component:p.a.createElement(Z.a,{searchParams:{portfolio:o},pathname:$.w,preserveHash:!0},u(le.a.share))})),t&&v.push(p.a.createElement(T.DropdownItem,{key:"copy-portfolio-action",id:"copy-portfolio-action",onClick:function(){return r(o)}},u(le.a.copy))),s&&v.push(p.a.createElement(T.DropdownItem,{key:"workflow-portfolio-action",id:"workflow-portfolio-action",component:p.a.createElement(Z.a,{searchParams:{portfolio:o},pathname:$.d,preserveHash:!0},u(le.a.setApproval))})),i&&v.push(p.a.createElement(T.DropdownItem,{key:"edit-portfolio-action",id:"edit-portfolio-action",component:p.a.createElement(Z.a,{searchParams:{portfolio:o},pathname:$.c,preserveHash:!0},u(le.a.edit))})),b&&v.push(p.a.createElement(T.DropdownItem,{key:"remove-portfolio-action",id:"remove-portfolio-action",component:p.a.createElement(Z.a,{searchParams:{portfolio:o},pathname:$.v,preserveHash:!0},u(le.a.delete))})),0===v.length?null:p.a.createElement(D.Dropdown,{key:"portfolio-dropdown",id:"portfolio-".concat(o,"-dropdown"),isOpen:_,isPlain:!0,onSelect:function(){return g(!1)},position:L.DropdownPosition.right,toggle:p.a.createElement(F.KebabToggle,{id:"portfolio-".concat(o,"-toggle"),onToggle:function(e){return g(e)}}),dropdownItems:v})};ce.propTypes={portfolioId:j.a.string.isRequired,userCapabilities:j.a.shape({destroy:j.a.bool,update:j.a.bool,share:j.a.bool,unshare:j.a.bool,set_approval:j.a.bool,copy:j.a.bool}).isRequired,handleCopyPortfolio:j.a.func.isRequired};var ie=function(e){var o=e.imageUrl,r=e.isDisabled,l=e.name,t=e.id,a=e.handleCopyPortfolio,c=e.metadata,f=c.user_capabilities,b=c.statistics,s=b.shared_groups,u=b.portfolio_items,d=O()(e,["imageUrl","isDisabled","name","id","handleCopyPortfolio","metadata"]),m=Object(re.a)().formatMessage,_={pathname:$.u,search:"?portfolio=".concat(t)};return p.a.createElement(ee.b,{isDisabled:r},p.a.createElement(ee.a,null,p.a.createElement(w.CardHeader,null,p.a.createElement(Y,{id:t,to:_,portfolioName:l,portfolio_items:u||0,headerActions:p.a.createElement(ce,{portfolioId:t,userCapabilities:f,handleCopyPortfolio:a})})),p.a.createElement(oe.a,null,p.a.createElement(N.TextContent,{className:"pf-u-mb-md"},p.a.createElement(M.Text,{component:M.TextVariants.small,className:"pf-i-mb-sm"},"Last updated ",p.a.createElement(W.DateFormat,{date:d.updated_at||d.created_at,type:"relative"})),p.a.createElement(M.Text,{component:M.TextVariants.small},d.owner)),p.a.createElement(E.a,n()({},function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?te(Object(r),!0).forEach((function(o){i()(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}({name:l,imageUrl:o},d),{toDisplay:ae}))),p.a.createElement(R.CardFooter,null,s>0&&p.a.createElement(S.Label,{variant:"filled",color:"blue"},m(ne.a.shared)))))};ie.propTypes={history:j.a.object,imageUrl:j.a.string,name:j.a.string,id:j.a.string.isRequired,updated_at:j.a.string,created_at:j.a.string.isRequired,owner:j.a.string,isDisabled:j.a.bool,metadata:j.a.shape({user_capabilities:j.a.object.isRequired,statistics:j.a.shape({shared_groups:j.a.number,portfolio_items:j.a.number}).isRequired}).isRequired,handleCopyPortfolio:j.a.func.isRequired};var fe=ie,pe=r(442),be=r(509),se=r(430);function ue(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,l)}return r}function de(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?ue(Object(r),!0).forEach((function(o){i()(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}var me=function(e){var o=e.meta,r=e.fetchPortfolios,l=e.userPermissions,n=e.filterProps,t=n.searchValue,a=n.onFilterChange,c=n.placeholder;return{fields:[{component:pe.b.TOP_TOOLBAR,key:"portfolios-top-toolbar",fields:[{component:pe.b.TOP_TOOLBAR_TITLE,key:"portfolios-toolbar-title",title:"Portfolios",noData:o.noData},{component:pe.b.LEVEL,key:"portfolios-actions",fields:o.noData?[]:[{component:pe.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[{key:"portfolio-actions-group",component:pe.b.TOOLBAR_GROUP,fields:[{component:pe.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:t,onFilterChange:a,placeholder:c,isClearable:!0},de({hidden:0===o.count||!Object(v.a)(l,["catalog:portfolios:create"]),key:"create-portfolio"},Object(be.a)({pathname:"/portfolios/add-portfolio",variant:"primary",key:"create-portfolio-button","aria-label":"Create portfolio",title:"Create"}))]}]},{component:pe.b.LEVEL_ITEM,key:"pagination-item",fields:o.count>0?[{component:se.a,isCompact:!0,key:"portfolios-pagination",meta:o,apiRequest:r}]:[]}]}]}]}},_e=r(468),ge=r(428),ve=r(449),Ce=r(73),he=r(130),Be=r(448),ke=r(435);function ye(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,l)}return r}function Oe(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?ye(Object(r),!0).forEach((function(o){i()(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}var Pe=Object(ge.a)((function(e,o,r){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.a;r(!0),o(Object(k.h)(Oe(Oe({},l),{},{filter:e}))).then((function(){return r(!1)}))}),1e3),je={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},Ee=function(e,o){switch(o.type){case"setFetching":return Oe(Oe({},e),{},{isFetching:o.payload});case"setFilterValue":return Oe(Oe({},e),{},{filterValue:o.payload});case"setFilteringFlag":return Oe(Oe({},e),{},{isFiltering:o.payload})}return e};o.default=function(){var e,o=Object(re.a)().formatMessage,r=Object(he.a)(),l=Object(f.useReducer)(Ee,Oe(Oe({},je),{},{filterValue:(null==r||null===(e=r.portfolio)||void 0===e?void 0:e.filter)||""})),t=a()(l,2),c=t[0],i=c.filterValue,u=c.isFetching,m=c.isFiltering,B=t[1],y=Object(b.useSelector)((function(e){return e.portfolioReducer.portfolios})),O=y.data,P=y.meta,j=Object(b.useDispatch)(),E=Object(f.useContext)(Ce.a).permissions,w=Object(s.g)();Object(f.useEffect)((function(){j(Object(k.h)(null==r?void 0:r.portfolio)).then((function(){return B({type:"setFetching",payload:!1})})),Object(v.c)(),insights.chrome.appNavClick({id:"portfolios",secondaryNav:!0})}),[]);var R=function(e){B({type:"setFilterValue",payload:e}),Pe(e,j,(function(e){return B({type:"setFilteringFlag",payload:e})}),Oe(Oe({},P),{},{offset:0}))},D=function(e){return j(Object(k.c)(e)).then((function(e){var o=e.id;return w.push({pathname:$.u,search:"?portfolio=".concat(o)})}))},T={PrimaryAction:P.noData?function(){return p.a.createElement(_e.a,{url:$.a,id:"create-portfolio",label:"Create portfolio",hasPermission:Object(v.a)(E,["catalog:portfolios:create"])})}:function(){return p.a.createElement(g.Button,{variant:"link",onClick:function(){return R("")}},o(Be.a.clearFilters))},title:P.noData?o(ke.a.portfoliosNoData):o(Be.a.noResults),description:P.noData?o(ke.a.portfoliosNoDataDescription):o(Be.a.noResultsDescription),Icon:P.noData?_.a:d.a},L=O.map((function(e){return p.a.createElement(fe,n()({key:e.id},e,{handleCopyPortfolio:D}))}));return p.a.createElement(f.Fragment,null,p.a.createElement(C.a,{schema:me({meta:P,userPermissions:E,fetchPortfolios:function(e,o){return j(Object(k.h)(Oe({filter:i},o)))},filterProps:{searchValue:i,onFilterChange:R,placeholder:o(ke.a.portfoliosPlaceholder)}})}),p.a.createElement(h.a,{items:L,isLoading:u||m,renderEmptyState:function(){return p.a.createElement(_e.b,T)}}),P.count>0&&p.a.createElement(ve.a,null,p.a.createElement(se.a,{meta:P,apiRequest:function(e,o){return j(Object(k.h)(Oe({filter:i},o)))},dropDirection:"up"})))}}}]);
//# sourceMappingURL=../sourcemaps/portfolios~31ecd969.js.map