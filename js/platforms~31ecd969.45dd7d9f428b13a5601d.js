(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{365:function(t,e,n){"use strict";e.__esModule=!0,n(380),e.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},369:function(t,e,n){"use strict";var a=n(364),r=n.n(a),o=n(47),c=n.n(o),i=n(0),s=n.n(i),p=n(10),l=n.n(p),m=n(367),f=n(174),u=n(49),d=function(t){var e=t.meta,n=e.limit,a=e.count,o=e.offset,i=t.apiProps,p=t.apiRequest,l=t.className,d=t.isCompact,y=c()(t,["meta","apiProps","apiRequest","className","isCompact"]);return s.a.createElement("div",{className:l},s.a.createElement(f.Pagination,r()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(t,e){return p(i,{offset:o,limit:e})},page:Object(u.b)(n,o),onSetPage:function(t,e,a){var r={offset:Object(u.c)(e,n),limit:n},o=function(){return p(i,r)};return a?Object(m.a)(o,250)():o()},direction:"down",isCompact:d},y)))};d.propTypes={meta:l.a.shape({count:l.a.number,limit:l.a.number.isRequired,offset:l.a.number.isRequired}),apiRequest:l.a.func.isRequired,apiProps:l.a.any,className:l.a.string,isCompact:l.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},e.a=d},372:function(t,e,n){"use strict";n.d(e,"c",(function(){return x})),n.d(e,"b",(function(){return S})),n.d(e,"d",(function(){return j})),n.d(e,"a",(function(){return P})),n.d(e,"e",(function(){return T}));var a={};n.r(a),n.d(a,"getPlatforms",(function(){return _})),n.d(a,"getPlatform",(function(){return g})),n.d(a,"getPlatformItems",(function(){return b})),n.d(a,"getPlatformInventories",(function(){return v})),n.d(a,"getServiceOffering",(function(){return h}));var r=n(1),o=n.n(r),c=n(2),i=n(31),s=n.n(i),p=n(63),l=n(12),m=n(49);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=Object(p.a)(),y=Object(p.b)(),_=function(){return y.post("".concat(l.i,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(t){return t.data.application_types})).then((function(t){return s()(t,1)[0].sources}))},g=function(t){return d.get("".concat(l.i,"/sources/").concat(t))},b=function(t,e,n){var a=e?"&filter[name][contains_i]=".concat(e):"";return t?d.get("".concat(l.j,"/sources/").concat(t,"/service_offerings?filter[archived_at][nil]").concat(a).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(l.j,"/service_offerings"))},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;return t?d.get("".concat(l.j,"/sources/").concat(t,"/service_inventories?filter[name][contains_i]=").concat(e).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(l.j,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},h=function(t,e){return Promise.all([d.get("".concat(l.j,"/service_offerings/").concat(t)),d.get("".concat(l.i,"/sources/").concat(e)).then((function(t){return d.get("".concat(l.i,"/source_types/").concat(t.source_type_id)).then((function(e){var n=e.icon_url;return u(u({},t),{},{icon_url:n})}))}))]).then((function(t){var e=s()(t,2);return{service:e[0],source:e[1]}}))};function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x=function(){return function(t){return t({type:"".concat(c.k,"_PENDING")}),_().then((function(e){return t({type:"".concat(c.k,"_FULFILLED"),payload:e})})).catch((function(e){return t({type:"".concat(c.k,"_REJECTED"),payload:e})}))}},S=function(t,e,n){return{type:c.n,payload:b(t,e,n),meta:O({platformId:t,filter:e},n)}},j=function(t){return{type:c.j,payload:g(t)}},P=function(t,e,n){return{type:c.l,payload:v(t,e,n)}},T=function(){return{type:c.v,payload:h.apply(a,arguments)}}},374:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(5),c=a.__importDefault(n(365));var i;!function(t){t.small="small",t.large="large",t.xl="xl",t.full="full"}(i=e.EmptyStateVariant||(e.EmptyStateVariant={})),e.EmptyState=t=>{var{children:e,className:n="",variant:s=i.full,isFullHeight:p}=t,l=a.__rest(t,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:o.css(c.default.emptyState,"small"===s&&c.default.modifiers.sm,"large"===s&&c.default.modifiers.lg,"xl"===s&&c.default.modifiers.xl,p&&c.default.modifiers.fullHeight,n)},l),r.createElement("div",{className:o.css(c.default.emptyStateContent)},e))},e.EmptyState.displayName="EmptyState"},375:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(5),c=a.__importDefault(n(365));e.EmptyStateIcon=t=>{var{className:e="",icon:n,component:i,variant:s="icon"}=t,p=a.__rest(t,["className","icon","component","variant"]);const l=o.css(c.default.emptyStateIcon,e);return"icon"===s?r.createElement(n,Object.assign({className:l},p,{"aria-hidden":"true"})):r.createElement("div",{className:l},r.createElement(i,null))},e.EmptyStateIcon.displayName="EmptyStateIcon"},377:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(5),c=a.__importDefault(n(365));e.EmptyStateBody=t=>{var{children:e,className:n=""}=t,i=a.__rest(t,["children","className"]);return r.createElement("div",Object.assign({className:o.css(c.default.emptyStateBody,n)},i),e)},e.EmptyStateBody.displayName="EmptyStateBody"},380:function(t,e,n){var a=n(7),r=n(381);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);t.exports=r.locals||{}},381:function(t,e,n){(e=n(8)(!1)).push([t.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),t.exports=e},383:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(5),c=a.__importDefault(n(92));e.CardHeader=t=>{var{children:e=null,className:n=""}=t,i=a.__rest(t,["children","className"]);return r.createElement("div",Object.assign({className:o.css(c.default.cardHeader,n)},i),e)},e.CardHeader.displayName="CardHeader"},387:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(50),s=n(374),p=n(375),l=n(377),m=n(393),f=n(35),u=n(48),d=n(371),y=function(t){var e=t.title,n=t.Icon,a=t.description,o=t.PrimaryAction,c=t.renderDescription;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(s.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(p.EmptyStateIcon,{icon:n}),r.a.createElement(u.TextContent,null,r.a.createElement(f.Text,{component:f.TextVariants.h1},e)),r.a.createElement(l.EmptyStateBody,null,a,c()),r.a.createElement(m.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))};y.defaultProps={renderDescription:function(){return null}},y.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string,PrimaryAction:c.a.any,renderDescription:c.a.func},e.b=y;var _=function(t){var e=t.url,n=t.label,a=t.hasPermission,o=void 0!==a&&a,c=t.id;return o&&r.a.createElement(d.a,{id:c,pathname:e,preserveSearch:!0},r.a.createElement(i.Button,{variant:"primary"},n))};_.propTypes={url:c.a.string.isRequired,label:c.a.string.isRequired,id:c.a.string,hasPermission:c.a.bool}},393:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(5),c=a.__importDefault(n(365));e.EmptyStateSecondaryActions=t=>{var{children:e=null,className:n=""}=t,i=a.__rest(t,["children","className"]);return r.createElement("div",Object.assign({className:o.css(c.default.emptyStateSecondary,n)},i),e)},e.EmptyStateSecondaryActions.displayName="EmptyStateSecondaryActions"},395:function(t,e,n){"use strict";var a=n(47),r=n.n(a),o=n(21),c=n.n(o),i=n(0),s=n.n(i),p=n(22),l=n(10),m=n.n(l);function f(){var t=c()(["\n  overflow: hidden;\n"]);return f=function(){return t},t}var u=p.b.div(f()),d=function(t){var e=t.toDisplay,n=void 0===e?[]:e,a=r()(t,["toDisplay"]);return n.map((function(t){return s.a.createElement(u,{key:"card-prop-".concat(t)},a[t])}))};d.propTypes={toDisplay:m.a.arrayOf(m.a.oneOfType([m.a.string,m.a.node,m.a.arrayOf(m.a.node)]))},d.defaultProps={toDisplay:[]},e.a=d},396:function(t,e,n){"use strict";var a=n(21),r=n.n(a);function o(){var t=r()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return o=function(){return t},t}var c=n(22).b.div(o());e.a=c},397:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(21),r=n.n(a),o=n(22),c=n(70);function i(){var t=r()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0 !important;\n  margin: 0 24px 24px;\n"]);return i=function(){return t},t}var s=Object(o.b)(c.CardBody)(i())},398:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return y}));var a=n(47),r=n.n(a),o=n(21),c=n.n(o),i=n(0),s=n.n(i),p=n(22),l=n(69),m=n(99);function f(){var t=c()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return f=function(){return t},t}function u(){var t=c()(["\n  height: 330px;\n  position: relative;\n"]);return u=function(){return t},t}var d=Object(p.b)(l.Card)(u()),y=Object(p.b)((function(t){t.isDisabled;var e=r()(t,["isDisabled"]);return s.a.createElement(m.GalleryItem,e)}))(f(),(function(t){return t.isDisabled?"block":"none"}))},399:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=a.__importDefault(n(92)),c=n(5);e.CardFooter=t=>{var{children:e=null,className:n="",component:i="div"}=t,s=a.__rest(t,["children","className","component"]);const p=i;return r.createElement(p,Object.assign({className:c.css(o.default.cardFooter,n)},s),e)},e.CardFooter.displayName="CardFooter"},401:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(93),s=n(35),p=n(102),l=n(51),m=function(){return r.a.createElement("div",null,r.a.createElement(s.Text,{component:s.TextVariants.h1},"No items found"))},f=function(t){var e=t.isLoading,n=t.items,a=t.renderEmptyState;return e?r.a.createElement(l.b,null):0===n.length?a?a():r.a.createElement(m,null):r.a.createElement(i.Section,{type:"content"},r.a.createElement(p.Gallery,{hasGutter:!0,className:"content-gallery"},n))};f.propTypes={isLoading:c.a.bool,items:c.a.array,renderEmptyState:c.a.func},e.a=f},434:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n(469),r=n(390),o=n(369),c=function(t){var e=t.searchValue,n=t.onFilterChange,a=t.title;return{fields:[{component:r.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:r.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:a},{component:r.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:r.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:r.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:e,onFilterChange:n,placeholder:"Filter by platform"}]},{component:r.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(t){var e=t.title,n=t.paddingBottom,o=t.tabItems;return{fields:[{component:r.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:n,fields:[{component:r.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:e},{component:r.b.LEVEL_ITEM,key:"tabs-level-item",fields:o?[{component:a.a,key:"platform-tabs",tabItems:o}]:[]}]}]}},s=function(t){var e=t.searchValue,n=t.onFilterChange,a=t.meta,c=t.apiRequest,i=t.filterPlaceholder;return{fields:[{component:r.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:r.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:r.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:r.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:e,onFilterChange:n,placeholder:i}]},{component:r.b.LEVEL_ITEM,key:"pagination-level-item",fields:a.count>0?[{component:o.a,key:"platform-pagination",apiRequest:c,meta:a,isCompact:!0}]:[]}]}]}]}}},550:function(t,e,n){t.exports=n.p+"fonts/platform-default.svg"},551:function(t,e,n){t.exports=n.p+"fonts/platform-openshift.svg"},552:function(t,e,n){t.exports=n.p+"fonts/platform-amazon.png"},553:function(t,e,n){t.exports=n.p+"fonts/platform-tower.png"},684:function(t,e,n){"use strict";n.r(e);var a=n(364),r=n.n(a),o=n(31),c=n.n(o),i=n(0),s=n.n(i),p=n(23),l=n(35),m=n(48),f=n(385),u=n.n(f),d=n(91),y=n(392),_=n(401),g=n(372),b=n(1),v=n.n(b),h=n(47),E=n.n(h),O=n(10),x=n.n(O),S=n(383),j=n(399),P=n(99),T=n(550),M=n.n(T),N=n(551),C=n.n(N),L=n(552),w=n.n(L),D=n(553),F=n.n(D),I=function(t){var e=t.src,n=E()(t,["src"]);return s.a.createElement("img",r()({src:e},n))};I.propTypes={src:x.a.string.isRequired};var k=I,R=n(395),B=n(9),z=n(396),V=n(371),q=n(398),A=n(397);function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var W=["description","modified"],G={1:C.a,2:w.a,3:F.a},J=function(t){var e=t.name,n=t.id,a=E()(t,["name","id"]);return s.a.createElement(P.GalleryItem,null,s.a.createElement(q.a,{key:n},s.a.createElement(S.CardHeader,null,s.a.createElement(k,{src:G[a.source_type_id]||M.a,width:"80",height:"40"})),s.a.createElement(A.a,null,s.a.createElement(m.TextContent,null,s.a.createElement(V.a,{pathname:B.r,searchParams:{platform:n}},s.a.createElement(l.Text,{title:e,className:"pf-u-mb-0",component:l.TextVariants.h3},s.a.createElement(z.a,null,e)))),s.a.createElement(R.a,r()({},function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){v()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:e},a),{toDisplay:W}))),s.a.createElement(j.CardFooter,null)))};J.propTypes={history:x.a.object,imageUrl:x.a.string,name:x.a.string,source_type_id:x.a.string,id:x.a.string};var U=J,K=n(434),Q=n(387),X=n(56);e.default=function(){var t=Object(i.useState)(""),e=c()(t,2),n=e[0],a=e[1],o=Object(p.useSelector)((function(t){var e=t.platformReducer;return{platforms:e.platforms,isLoading:e.isPlatformDataLoading}})),f=o.platforms,b=o.isLoading,v=Object(p.useDispatch)(),h=Object(i.useContext)(X.a).userIdentity.identity.user.is_org_admin;Object(i.useEffect)((function(){v(Object(g.c)()),Object(d.c)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var E=function(){return s.a.createElement(i.Fragment,null,s.a.createElement(m.TextContent,null,s.a.createElement(l.Text,{component:l.TextVariants.p},"Configure a source in order to add products to portfolios."),h?s.a.createElement(l.Text,{component:l.TextVariants.p},"To connect to a source, go to"," ",s.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},"Sources")," under Settings."):s.a.createElement(l.Text,null,"Contact your organization administrator to setup sources for Catalog.")))},O={items:f.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return s.a.createElement(U,r()({key:t.id},t))})),isLoading:b&&0===f.length};return s.a.createElement(i.Fragment,null,s.a.createElement(y.a,{schema:Object(K.b)({onFilterChange:function(t){return a(t)},searchValue:n,title:"Platforms"})}),s.a.createElement(_.a,r()({},O,{renderEmptyState:function(){return s.a.createElement(Q.b,{title:"No platforms yet",renderDescription:E,Icon:u.a})}})))}}}]);
//# sourceMappingURL=../sourcemaps/platforms~31ecd969.js.map