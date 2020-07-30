(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{377:function(e,t,a){"use strict";t.__esModule=!0,a(392),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},378:function(e,t,a){"use strict";var n=a(379);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,a)}},386:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=a(4),i=n.__importDefault(a(377));var o;!function(e){e.small="small",e.large="large",e.xl="xl",e.full="full"}(o=t.EmptyStateVariant||(t.EmptyStateVariant={})),t.EmptyState=e=>{var{children:t,className:a="",variant:s=o.full,isFullHeight:l}=e,p=n.__rest(e,["children","className","variant","isFullHeight"]);return r.createElement("div",Object.assign({className:c.css(i.default.emptyState,"small"===s&&i.default.modifiers.sm,"large"===s&&i.default.modifiers.lg,"xl"===s&&i.default.modifiers.xl,l&&i.default.modifiers.fullHeight,a)},p),r.createElement("div",{className:c.css(i.default.emptyStateContent)},t))},t.EmptyState.displayName="EmptyState"},387:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=a(4),i=n.__importDefault(a(377));t.EmptyStateIcon=e=>{var{className:t="",icon:a,component:o,variant:s="icon"}=e,l=n.__rest(e,["className","icon","component","variant"]);const p=c.css(i.default.emptyStateIcon,t);return"icon"===s?r.createElement(a,Object.assign({className:p},l,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(o,null))},t.EmptyStateIcon.displayName="EmptyStateIcon"},389:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=a(4),i=n.__importDefault(a(377));t.EmptyStateBody=e=>{var{children:t,className:a=""}=e,o=n.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:c.css(i.default.emptyStateBody,a)},o),t)},t.EmptyStateBody.displayName="EmptyStateBody"},390:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=n.__importDefault(a(181)),i=a(4),o=()=>{};class s extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:a,onChange:s,isValid:l,isDisabled:p,isChecked:m,label:f,checked:d,defaultChecked:u,description:y}=e,_=n.__rest(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),g={};return([!0,!1].includes(d)||!0===m)&&(g.checked=d||m),s!==o&&(g.checked=m),[!1,!0].includes(u)&&(g.defaultChecked=u),g.checked=null!==g.checked&&g.checked,r.createElement("div",{className:i.css(c.default.check,a)},r.createElement("input",Object.assign({},_,{className:i.css(c.default.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:p,ref:e=>e&&(e.indeterminate=null===m)},g)),f&&r.createElement("label",{className:i.css(c.default.checkLabel,p&&c.default.modifiers.disabled),htmlFor:_.id},f),y&&r.createElement("div",{className:i.css(c.default.checkDescription)},y))}}t.Checkbox=s,s.displayName="Checkbox",s.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:o}},392:function(e,t,a){var n=a(7),r=a(393);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(r,c);e.exports=r.locals||{}},393:function(e,t,a){(t=a(8)(!1)).push([e.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),e.exports=t},395:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=a(4),i=n.__importDefault(a(95));t.CardHeader=e=>{var{children:t=null,className:a=""}=e,o=n.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:c.css(i.default.cardHeader,a)},o),t)},t.CardHeader.displayName="CardHeader"},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=a(52),s=a(386),l=a(387),p=a(389),m=a(404),f=a(35),d=a(50),u=a(383),y=function(e){var t=e.title,a=e.Icon,n=e.description,c=e.PrimaryAction,i=e.renderDescription;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(s.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:a}),r.a.createElement(d.TextContent,null,r.a.createElement(f.Text,{component:f.TextVariants.h1},t)),r.a.createElement(p.EmptyStateBody,null,n,i()),r.a.createElement(m.EmptyStateSecondaryActions,null,c&&r.a.createElement(c,null))))};y.defaultProps={renderDescription:function(){return null}},y.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string,PrimaryAction:i.a.any,renderDescription:i.a.func},t.b=y;var _=function(e){var t=e.url,a=e.label,n=e.hasPermission,c=void 0!==n&&n,i=e.id;return c&&r.a.createElement(u.a,{id:i,pathname:t,preserveSearch:!0},r.a.createElement(o.Button,{variant:"primary"},a))};_.propTypes={url:i.a.string.isRequired,label:i.a.string.isRequired,id:i.a.string,hasPermission:i.a.bool}},404:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=a(4),i=n.__importDefault(a(377));t.EmptyStateSecondaryActions=e=>{var{children:t=null,className:a=""}=e,o=n.__rest(e,["children","className"]);return r.createElement("div",Object.assign({className:c.css(i.default.emptyStateSecondary,a)},o),t)},t.EmptyStateSecondaryActions.displayName="EmptyStateSecondaryActions"},407:function(e,t,a){"use strict";var n=a(40),r=a.n(n),c=a(19),i=a.n(c),o=a(0),s=a.n(o),l=a(20),p=a(10),m=a.n(p);function f(){var e=i()(["\n  overflow: hidden;\n"]);return f=function(){return e},e}var d=l.b.div(f()),u=function(e){var t=e.toDisplay,a=void 0===t?[]:t,n=r()(e,["toDisplay"]);return a.map((function(e){return s.a.createElement(d,{key:"card-prop-".concat(e)},n[e])}))};u.propTypes={toDisplay:m.a.arrayOf(m.a.oneOfType([m.a.string,m.a.node,m.a.arrayOf(m.a.node)]))},u.defaultProps={toDisplay:[]},t.a=u},408:function(e,t,a){"use strict";var n=a(19),r=a.n(n);function c(){var e=r()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return c=function(){return e},e}var i=a(20).b.div(c());t.a=i},409:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(19),r=a.n(n),c=a(20),i=a(73);function o(){var e=r()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0 !important;\n  margin: 0 24px 16px;\n"]);return o=function(){return e},e}var s=Object(c.b)(i.CardBody)(o())},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return y}));var n=a(40),r=a.n(n),c=a(19),i=a.n(c),o=a(0),s=a.n(o),l=a(20),p=a(72),m=a(103);function f(){var e=i()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return f=function(){return e},e}function d(){var e=i()(["\n  height: 330px;\n  position: relative;\n"]);return d=function(){return e},e}var u=Object(l.b)(p.Card)(d()),y=Object(l.b)((function(e){e.isDisabled;var t=r()(e,["isDisabled"]);return s.a.createElement(m.GalleryItem,t)}))(f(),(function(e){return e.isDisabled?"block":"none"}))},411:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),c=n.__importDefault(a(95)),i=a(4);t.CardFooter=e=>{var{children:t=null,className:a="",component:o="div"}=e,s=n.__rest(e,["children","className","component"]);const l=o;return r.createElement(l,Object.assign({className:i.css(c.default.cardFooter,a)},s),t)},t.CardFooter.displayName="CardFooter"},413:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=a(97),s=a(35),l=a(106),p=a(53),m=function(){return r.a.createElement("div",null,r.a.createElement(s.Text,{component:s.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,a=e.items,n=e.renderEmptyState;return t?r.a.createElement(p.b,null):0===a.length?n?n():r.a.createElement(m,null):r.a.createElement(o.Section,{type:"content"},r.a.createElement(l.Gallery,{hasGutter:!0,className:"content-gallery"},a))};f.propTypes={isLoading:i.a.bool,items:i.a.array,renderEmptyState:i.a.func},t.a=f},414:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=function(e){var t=e.children;return r.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};o.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=o},428:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=a(390),s=function(e){var t=e.handleCheck,a=e.isChecked,n=e.id;return r.a.createElement(o.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:a,onChange:t,"aria-label":"card checkbox",id:n})};s.propTypes={handleCheck:i.a.func,isChecked:i.a.bool,id:i.a.string},t.a=s},429:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(376),i=a.n(c),o=a(40),s=a.n(o),l=a(0),p=a.n(l),m=a(10),f=a.n(m),d=a(35),u=a(50),y=a(407),_=a(442),g=a(408),h=a(409),v=function(e){var t=e.name,a=(e.display_name,e.distributor),n=e.pathname,r=e.searchParams,c=e.preserveSearch,o=e.portfolioName,m=s()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return p.a.createElement(h.a,null,p.a.createElement(u.TextContent,null,p.a.createElement(_.a,{pathname:n,searchParams:r,preserveSearch:c},p.a.createElement(d.Text,{component:d.TextVariants.h3,title:t},p.a.createElement(g.a,null,t))),a&&p.a.createElement(d.Text,{component:d.TextVariants.small},a),o&&p.a.createElement(l.Fragment,null,p.a.createElement(d.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),p.a.createElement(d.Text,null,o))),p.a.createElement(y.a,i()({toDisplay:[m.description?"description":"long_description"]},m)))};v.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(r()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=v},499:function(e,t,a){"use strict";var n=a(40),r=a.n(n),c=a(19),i=a.n(c),o=a(0),s=a.n(o),l=a(10),p=a.n(l),m=a(395),f=a(411),d=a(67),u=a(421),y=a(428),_=a(429),g=a(410),h=a(20);function v(){var e=i()(["\n  flex: 1;\n"]);return v=function(){return e},e}var b=Object(h.b)(d.Level)(v()),E=function(e){e.src;var t=r()(e,["src"]);return s.a.createElement(g.a,{key:t.id},s.a.createElement(m.CardHeader,null,s.a.createElement(b,null,s.a.createElement(u.a,{height:40,sourceId:t.source_id}),t.editMode&&s.a.createElement(y.a,{id:t.id,isChecked:t.checked,handleCheck:t.onToggleItemSelect}))),s.a.createElement(_.a,t),s.a.createElement(f.CardFooter,null))};E.propTypes={id:p.a.string.isRequired,service_offering_icon_id:p.a.string,source_id:p.a.string,platformId:p.a.string,name:p.a.string,editMode:p.a.bool,checked:p.a.bool,onToggleItemSelect:p.a.func,src:p.a.string},t.a=E},632:function(e,t,a){"use strict";a.r(t);var n=a(376),r=a.n(n),c=a(31),i=a.n(c),o=a(1),s=a.n(o),l=a(0),p=a.n(l),m=a(23),f=a(397),d=a.n(f),u=a(94),y=a(403),_=a(51),g=a(384),h=a(499),v=a(444),b=a(399),E=a(378),x=a(413),S=a(52),O=a(381),C=a(414),M=a(54),N=a(9);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},P=function(e,t){switch(t.type){case"setFetching":return k(k({},e),{},{isFetching:t.payload});case"setFilterValue":return k(k({},e),{},{filterValue:t.payload});case"setFilteringFlag":return k(k({},e),{},{isFiltering:t.payload});default:return e}},F=Object(E.a)((function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:_.a;n(!0),a(Object(g.b)(e,t,r)).then((function(){return n(!1)}))}),1e3);t.default=function(){var e=Object(M.a)(["platform"]),t=i()(e,1)[0].platform,a=Object(l.useReducer)(P,T),n=i()(a,2),c=n[0],o=c.filterValue,s=c.isFetching,f=c.isFiltering,E=n[1],j=Object(m.useSelector)((function(e){var a=e.platformReducer.platformItems;return a[t]?a[t]:{data:[],meta:_.a}})),D=j.data,w=j.meta,B=Object(m.useSelector)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),I=B.platform,z=B.platformIconMapping,R=Object(m.useDispatch)();Object(l.useEffect)((function(){R(Object(g.b)(t,o,_.a)).then((function(){return E({type:"setFetching",payload:!1})})),Object(u.c)()}),[t]);var V=function(e){E({type:"setFilterValue",payload:e}),F(t,e,R,(function(e){return E({type:"setFilteringFlag",payload:e})}),k(k({},w),{},{offset:0}))},L={items:D?D.map((function(e){return p.a.createElement(h.a,r()({key:e.id,pathname:N.q,searchParams:{service:e.id},preserveSearch:!0,src:z[t]},e))})):[]},H=I?I.name:"";return p.a.createElement(l.Fragment,null,p.a.createElement(y.a,{schema:Object(v.a)({onFilterChange:V,searchValue:o,filterPlaceholder:"Filter by template",meta:w,apiRequest:function(e,a){return R(Object(g.b)(t,o,a))}})}),p.a.createElement(x.a,r()({title:H,isLoading:s||f,renderEmptyState:function(){return p.a.createElement(b.b,{title:""===o?"No templates":"No results found",Icon:d.a,PrimaryAction:function(){return""!==o?p.a.createElement(S.Button,{onClick:function(){return V("")},variant:"link"},"Clear all filters"):null},description:""===o?"This platform has no templates.":"No results match the filter critera. Remove all filters or clear all filters to show results."})}},L)),w.count>0&&p.a.createElement(C.a,null,p.a.createElement(O.a,{dropDirection:"up",meta:w,apiRequest:function(e,a){return R(Object(g.b)(t,o,a))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~31ecd969.js.map