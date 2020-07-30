(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{377:function(e,t,n){"use strict";t.__esModule=!0,n(392),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},378:function(e,t,n){"use strict";var a=n(379);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(a.a)(e,t,n)}},381:function(e,t,n){"use strict";var a=n(376),r=n.n(a),o=n(40),c=n.n(o),i=n(0),s=n.n(i),l=n(10),p=n.n(l),u=n(379),m=n(178),f=n(51),d=function(e){var t=e.meta,n=t.limit,a=t.count,o=t.offset,i=e.apiProps,l=e.apiRequest,p=e.className,d=e.isCompact,y=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return s.a.createElement("div",{className:p},s.a.createElement(m.Pagination,r()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(e,t){return l(i,{offset:o,limit:t})},page:Object(f.b)(n,o),onSetPage:function(e,t,a){var r={offset:Object(f.c)(t,n),limit:n},o=function(){return l(i,r)};return a?Object(u.a)(o,250)():o()},direction:"down",isCompact:d},y)))};d.propTypes={meta:p.a.shape({count:p.a.number,limit:p.a.number.isRequired,offset:p.a.number.isRequired}),apiRequest:p.a.func.isRequired,apiProps:p.a.any,className:p.a.string,isCompact:p.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},384:function(e,t,n){"use strict";n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return C}));var a={};n.r(a),n.d(a,"getPlatforms",(function(){return g})),n.d(a,"getPlatform",(function(){return _})),n.d(a,"getPlatformItems",(function(){return b})),n.d(a,"getPlatformInventories",(function(){return v})),n.d(a,"getServiceOffering",(function(){return h}));var r=n(1),o=n.n(r),c=n(2),i=n(31),s=n.n(i),l=n(66),p=n(12),u=n(51);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=Object(l.a)(),y=Object(l.b)(),g=function(){return y.post("".concat(p.i,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return s()(e,1)[0].sources}))},_=function(e){return d.get("".concat(p.i,"/sources/").concat(e))},b=function(e,t,n){var a=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(p.j,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(a).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(p.j,"/service_offerings"))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.a;return e?d.get("".concat(p.j,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(p.j,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},h=function(e,t){return Promise.all([d.get("".concat(p.j,"/service_offerings/").concat(e)),d.get("".concat(p.i,"/sources/").concat(t)).then((function(e){return d.get("".concat(p.i,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return f(f({},e),{},{icon_url:n})}))}))]).then((function(e){var t=s()(e,2);return{service:t[0],source:t[1]}}))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){return function(e){return e({type:"".concat(c.k,"_PENDING")}),g().then((function(t){return e({type:"".concat(c.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.k,"_REJECTED"),payload:t})}))}},S=function(e,t,n){return{type:c.n,payload:b(e,t,n),meta:O({platformId:e,filter:t},n)}},x=function(e){return{type:c.j,payload:_(e)}},j=function(e,t,n){return{type:c.l,payload:v(e,t,n)}},C=function(){return{type:c.v,payload:h.apply(a,arguments)}}},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(4),c=a.__importDefault(n(377));var i;!function(e){e.small="small",e.large="large",e.xl="xl",e.full="full"}(i=t.EmptyStateVariant||(t.EmptyStateVariant={})),t.EmptyState=e=>{var{children:t,className:n="",variant:s=i.full,isFullHeight:l}=e,p=a.__rest(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:o.css(c.default.emptyState,"small"===s&&c.default.modifiers.sm,"large"===s&&c.default.modifiers.lg,"xl"===s&&c.default.modifiers.xl,l&&c.default.modifiers.fullHeight,n)},p),r.createElement("div",{className:o.css(c.default.emptyStateContent)},t))},t.EmptyState.displayName="EmptyState"},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(4),c=a.__importDefault(n(377));t.EmptyStateIcon=e=>{var{className:t="",icon:n,component:i,variant:s="icon"}=e,l=a.__rest(e,["className","icon","component","variant"]);const p=o.css(c.default.emptyStateIcon,t);return"icon"===s?r.createElement(n,Object.assign({className:p},l,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(i,null))},t.EmptyStateIcon.displayName="EmptyStateIcon"},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(4),c=a.__importDefault(n(377));t.EmptyStateBody=e=>{var{children:t,className:n=""}=e,i=a.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:o.css(c.default.emptyStateBody,n)},i),t)},t.EmptyStateBody.displayName="EmptyStateBody"},390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=a.__importDefault(n(181)),c=n(4),i=()=>{};class s extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:n,onChange:s,isValid:l,isDisabled:p,isChecked:u,label:m,checked:f,defaultChecked:d,description:y}=e,g=a.__rest(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),_={};return([!0,!1].includes(f)||!0===u)&&(_.checked=f||u),s!==i&&(_.checked=u),[!1,!0].includes(d)&&(_.defaultChecked=d),_.checked=null!==_.checked&&_.checked,r.createElement("div",{className:c.css(o.default.check,n)},r.createElement("input",Object.assign({},g,{className:c.css(o.default.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:p,ref:e=>e&&(e.indeterminate=null===u)},_)),m&&r.createElement("label",{className:c.css(o.default.checkLabel,p&&o.default.modifiers.disabled),htmlFor:g.id},m),y&&r.createElement("div",{className:c.css(o.default.checkDescription)},y))}}t.Checkbox=s,s.displayName="Checkbox",s.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:i}},392:function(e,t,n){var a=n(7),r=n(393);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},393:function(e,t,n){(t=n(8)(!1)).push([e.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),e.exports=t},395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(4),c=a.__importDefault(n(95));t.CardHeader=e=>{var{children:t=null,className:n=""}=e,i=a.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:o.css(c.default.cardHeader,n)},i),t)},t.CardHeader.displayName="CardHeader"},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(52),s=n(386),l=n(387),p=n(389),u=n(404),m=n(35),f=n(50),d=n(383),y=function(e){var t=e.title,n=e.Icon,a=e.description,o=e.PrimaryAction,c=e.renderDescription;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(s.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:n}),r.a.createElement(f.TextContent,null,r.a.createElement(m.Text,{component:m.TextVariants.h1},t)),r.a.createElement(p.EmptyStateBody,null,a,c()),r.a.createElement(u.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))};y.defaultProps={renderDescription:function(){return null}},y.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string,PrimaryAction:c.a.any,renderDescription:c.a.func},t.b=y;var g=function(e){var t=e.url,n=e.label,a=e.hasPermission,o=void 0!==a&&a,c=e.id;return o&&r.a.createElement(d.a,{id:c,pathname:t,preserveSearch:!0},r.a.createElement(i.Button,{variant:"primary"},n))};g.propTypes={url:c.a.string.isRequired,label:c.a.string.isRequired,id:c.a.string,hasPermission:c.a.bool}},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=n(4),c=a.__importDefault(n(377));t.EmptyStateSecondaryActions=e=>{var{children:t=null,className:n=""}=e,i=a.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:o.css(c.default.emptyStateSecondary,n)},i),t)},t.EmptyStateSecondaryActions.displayName="EmptyStateSecondaryActions"},407:function(e,t,n){"use strict";var a=n(40),r=n.n(a),o=n(19),c=n.n(o),i=n(0),s=n.n(i),l=n(20),p=n(10),u=n.n(p);function m(){var e=c()(["\n  overflow: hidden;\n"]);return m=function(){return e},e}var f=l.b.div(m()),d=function(e){var t=e.toDisplay,n=void 0===t?[]:t,a=r()(e,["toDisplay"]);return n.map((function(e){return s.a.createElement(f,{key:"card-prop-".concat(e)},a[e])}))};d.propTypes={toDisplay:u.a.arrayOf(u.a.oneOfType([u.a.string,u.a.node,u.a.arrayOf(u.a.node)]))},d.defaultProps={toDisplay:[]},t.a=d},408:function(e,t,n){"use strict";var a=n(19),r=n.n(a);function o(){var e=r()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return o=function(){return e},e}var c=n(20).b.div(o());t.a=c},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(19),r=n.n(a),o=n(20),c=n(73);function i(){var e=r()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0 !important;\n  margin: 0 24px 16px;\n"]);return i=function(){return e},e}var s=Object(o.b)(c.CardBody)(i())},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var a=n(40),r=n.n(a),o=n(19),c=n.n(o),i=n(0),s=n.n(i),l=n(20),p=n(72),u=n(103);function m(){var e=c()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return m=function(){return e},e}function f(){var e=c()(["\n  height: 330px;\n  position: relative;\n"]);return f=function(){return e},e}var d=Object(l.b)(p.Card)(f()),y=Object(l.b)((function(e){e.isDisabled;var t=r()(e,["isDisabled"]);return s.a.createElement(u.GalleryItem,t)}))(m(),(function(e){return e.isDisabled?"block":"none"}))},411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),r=a.__importStar(n(0)),o=a.__importDefault(n(95)),c=n(4);t.CardFooter=e=>{var{children:t=null,className:n="",component:i="div"}=e,s=a.__rest(e,["children","className","component"]);const l=i;return r.createElement(l,Object.assign({className:c.css(o.default.cardFooter,n)},s),t)},t.CardFooter.displayName="CardFooter"},413:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(97),s=n(35),l=n(106),p=n(53),u=function(){return r.a.createElement("div",null,r.a.createElement(s.Text,{component:s.TextVariants.h1},"No items found"))},m=function(e){var t=e.isLoading,n=e.items,a=e.renderEmptyState;return t?r.a.createElement(p.b,null):0===n.length?a?a():r.a.createElement(u,null):r.a.createElement(i.Section,{type:"content"},r.a.createElement(l.Gallery,{hasGutter:!0,className:"content-gallery"},n))};m.propTypes={isLoading:c.a.bool,items:c.a.array,renderEmptyState:c.a.func},t.a=m},414:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=function(e){var t=e.children;return r.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};i.propTypes={children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)])},t.a=i},428:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=n(390),s=function(e){var t=e.handleCheck,n=e.isChecked,a=e.id;return r.a.createElement(i.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:n,onChange:t,"aria-label":"card checkbox",id:a})};s.propTypes={handleCheck:c.a.func,isChecked:c.a.bool,id:c.a.string},t.a=s},429:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(376),c=n.n(o),i=n(40),s=n.n(i),l=n(0),p=n.n(l),u=n(10),m=n.n(u),f=n(35),d=n(50),y=n(407),g=n(442),_=n(408),b=n(409),v=function(e){var t=e.name,n=(e.display_name,e.distributor),a=e.pathname,r=e.searchParams,o=e.preserveSearch,i=e.portfolioName,u=s()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return p.a.createElement(b.a,null,p.a.createElement(d.TextContent,null,p.a.createElement(g.a,{pathname:a,searchParams:r,preserveSearch:o},p.a.createElement(f.Text,{component:f.TextVariants.h3,title:t},p.a.createElement(_.a,null,t))),n&&p.a.createElement(f.Text,{component:f.TextVariants.small},n),i&&p.a.createElement(l.Fragment,null,p.a.createElement(f.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),p.a.createElement(f.Text,null,i))),p.a.createElement(y.a,c()({toDisplay:[u.description?"description":"long_description"]},u)))};v.propTypes={name:m.a.string,display_name:m.a.string,distributor:m.a.string,long_description:m.a.string,description:m.a.string,pathname:m.a.string,preserveSearch:m.a.bool,searchParams:m.a.shape(r()({},m.a.string,m.a.string)),portfolioName:m.a.string},t.a=v},443:function(e,t,n){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0,transform:""},t.WrenchIcon=n(172).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},474:function(e,t,n){"use strict";var a=n(19),r=n.n(a),o=n(0),c=n.n(o),i=n(10),s=n.n(i),l=n(395),p=n(411),u=n(67),m=n(12),f=n(421),d=n(428),y=n(429),g=n(410),_=n(20);function b(){var e=r()(["\n  flex: 1;\n"]);return b=function(){return e},e}var v=Object(_.b)(u.Level)(b()),h=function(e){return c.a.createElement(g.b,{isDisabled:e.removeInProgress&&e.isSelected},c.a.createElement(g.a,null,c.a.createElement(l.CardHeader,null,c.a.createElement(v,null,c.a.createElement(f.a,{src:"".concat(m.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&c.a.createElement(d.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),c.a.createElement(y.a,e),c.a.createElement(p.CardFooter,null)))};h.propTypes={id:s.a.string,platformId:s.a.string,service_offering_source_ref:s.a.string,isSelectable:s.a.bool,isSelected:s.a.bool,onSelect:s.a.func,orderUrl:s.a.string,removeInProgress:s.a.bool,portfolio_id:s.a.string,metadata:s.a.shape({user_capabilities:s.a.shape({destroy:s.a.bool}).isRequired}).isRequired},t.a=h},691:function(e,t,n){"use strict";n.r(t);var a=n(376),r=n.n(a),o=n(31),c=n.n(o),i=n(1),s=n.n(i),l=n(0),p=n.n(l),u=n(23),m=n(443),f=n.n(m),d=n(397),y=n.n(d),g=n(394),_=n(94),b=n(474),v=n(406),h=n(381),E=function(e){var t=e.meta,n=e.fetchProducts,a=e.isLoading,r=e.filterProps,o=r.searchValue,c=r.onFilterChange,i=r.placeholder;return{fields:[{component:v.b.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:v.b.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:v.b.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:v.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[{groupName:"filter-group",component:v.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:c,placeholder:i,isClearable:!0}]},{component:v.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:h.a,key:"products-pagination",meta:t,apiProps:o,apiRequest:n,isDisabled:a,isCompact:!0}]:[]}]}]}]}},O=n(403),P=n(51),S=n(413),x=n(384),j=n(378),C=n(399),T=n(52),N=n(50),k=n(35),D=n(144),M=n(9),F=n(414),w=n(108),I=n(58);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=Object(j.a)((function(e,t,n){n(!0),t(Object(g.e)(e,P.a)).then((function(){return n(!1)}))}),1e3),V={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},z=function(e,t){switch(t.type){case"setFetching":return L(L({},e),{},{isFetching:t.payload});case"setFilterValue":return L(L({},e),{},{filterValue:t.payload});case"setFilteringFlag":return L(L({},e),{},{isFiltering:t.payload})}return e};t.default=function(){var e,t=Object(w.a)(),n=Object(l.useContext)(D.a).release,a=Object(l.useReducer)(z,L(L({},V),{},{filterValue:(null==t||null===(e=t.products)||void 0===e?void 0:e.filter)||""})),o=c()(a,2),i=o[0],s=i.isFetching,m=i.filterValue,d=i.isFiltering,v=o[1],P=Object(l.useContext)(I.a).userIdentity.identity.user.is_org_admin,j=Object(u.useDispatch)(),R=Object(u.useSelector)((function(e){return e.portfolioReducer.portfolioItems})),q=R.data,A=R.meta;Object(l.useEffect)((function(){var e;Promise.all([j(Object(g.e)(null==t||null===(e=t.products)||void 0===e?void 0:e.filter,null==t?void 0:t.products)),j(Object(x.c)())]).then((function(){return v({type:"setFetching",payload:!1})})),Object(_.c)(),insights.chrome.appNavClick({id:"products",secondaryNav:!0})}),[]);var W=function(e){v({type:"setFilterValue",payload:e}),B(e,j,(function(e){return v({type:"setFilteringFlag",payload:e})}))},H=q.map((function(e){return p.a.createElement(b.a,r()({key:e.id,pathname:e.portfolio_id&&M.t},(n=(t=e).portfolio_id,a=t.id,o=t.service_offering_source_ref,n&&a&&o?{pathname:n&&M.t,searchParams:{portfolio:n,"portfolio-item":a,source:o}}:{}),e,{toDisplay:[]}));var t,n,a,o})),G={PrimaryAction:A.noData?function(){return P&&p.a.createElement("a",{href:"".concat(n,"settings/sources/new")},p.a.createElement(T.Button,{variant:"primary"},"Add source"))}:function(){return p.a.createElement(T.Button,{variant:"link",onClick:function(){return W("")}},"Clear all filters")},title:A.noData?"No products yet":"No results found",renderDescription:function(){return p.a.createElement(l.Fragment,null,p.a.createElement(N.TextContent,null,p.a.createElement(k.Text,{component:k.TextVariants.p},A.noData?"Configure a source and add products into portfolios.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),P?p.a.createElement(k.Text,{component:k.TextVariants.p},"To connect to a source, go to"," ",p.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},"Sources")," under Settings."):p.a.createElement(k.Text,null,"Contact your organization administrator to setup sources for Catalog.")))},Icon:A.noData?f.a:y.a};return p.a.createElement(l.Fragment,null,p.a.createElement(O.a,{schema:E({filterProps:{searchValue:m,onFilterChange:W,placeholder:"Filter by product"},title:"Products",isLoading:d||s,meta:A,fetchProducts:function(){return j(g.e.apply(void 0,arguments))}})}),p.a.createElement(S.a,{isLoading:d||s,items:H,renderEmptyState:function(){return p.a.createElement(C.b,G)}}),A.count>0&&p.a.createElement(F.a,null,p.a.createElement(h.a,{dropDirection:"up",meta:A,apiRequest:function(e,n){var a;return j(Object(g.e)(null==t||null===(a=t.products)||void 0===a?void 0:a.filter,n))}})))}}}]);
//# sourceMappingURL=../sourcemaps/products~31ecd969.js.map