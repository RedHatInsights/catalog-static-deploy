(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1009:function(t,e,a){"use strict";a.r(e);var n=a(117),r=a.n(n),o=a(164),c=a.n(o),s=a(0),i=a.n(s),p=a(21),l=a(97),m=a(626),f=a.n(m),d=a(221),u=a(119),y=a(644),g=a(32),_=a(643),b=a(744),v=a(675),h=a(130),x=a(160),M=a(728),O=a(687),S=a(738),j=a(737),F=a(99),E=a(630),P=a(20),T=function(){var t=Object(P.a)();return i.a.createElement(x.a,{component:x.b.h1},t(E.a.noItems))},w=function(t){var e=t.data,a=t.columns,n=t.isCompact,r=void 0!==n&&n,o=t.isLoading,c=void 0!==o&&o,p=t.actionResolver,l=t.areActionsDisabled,m=t.borders,f=void 0===m||m,d=t.routes,u=void 0===d?function(){return null}:d,y=t.titlePlural,g=t.renderEmptyState,_=Object(s.useState)([]),b=_[0],v=_[1];return Object(s.useEffect)((function(){v(e)}),[e]),c?i.a.createElement(F.e,null):i.a.createElement(s.Fragment,null,0===b.length?g?g():i.a.createElement(T,null):i.a.createElement(s.Fragment,null,u(),i.a.createElement(M.a,{"aria-label":y+" table",variant:r?O.b.compact:void 0,borders:f,rows:b,cells:a,actionResolver:p,areActionsDisabled:l},i.a.createElement(S.a,null),i.a.createElement(j.a,null))))},N=a(805),z=a.n(N),R=a(642),B=a(646),I=a(98),C=a(118),k=a(663);function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function W(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var L={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},A=Object(h.a)((function(t,e,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.a;n(!0),a(Object(_.a)(t,e,r)).then((function(){return n(!1)}))}),1e3),V=function(t,e){switch(e.type){case"setFetching":return W(W({},t),{},{isFetching:e.payload});case"setFilterValue":return W(W({},t),{},{filterValue:e.payload});case"setFilteringFlag":return W(W({},t),{},{isFiltering:e.payload});default:return t}};e.default=function(){var t=Object(P.a)(),e=Object(s.useRef)([t(C.a.name),t(C.a.description),t(C.a.created),t(k.a.workflowColumn)]).current,a=Object(s.useReducer)(V,L),n=r()(a,2),o=n[0],c=o.filterValue,m=o.isFetching,h=o.isFiltering,x=n[1],M=Object(p.useSelector)((function(t){return t.platformReducer.platformInventories})),O=M.data,S=M.meta,j=Object(p.useSelector)((function(t){return t.platformReducer.selectedPlatform})),F=Object(p.useDispatch)(),E=Object(I.a)(["platform"]),T=r()(E,1)[0].platform,N=Object(l.g)();Object(s.useEffect)((function(){F(Object(_.a)(T,c,g.a)).then((function(){return x({type:"setFetching",payload:!1})})),Object(u.d)()}),[]);var D=O?function(t){return t.reduce((function(t,e,a){var n=e.id,r=e.name,o=e.description,c=e.created_at,p=e.workflow;return[].concat(z()(t),[{id:n,key:a,isOpen:!1,cells:[r,o,i.a.createElement(s.Fragment,{key:"date"},i.a.createElement(u.a,{date:c})),p]}])}),[])}(O):[],H=j?j.name:"";return i.a.createElement(s.Fragment,null,i.a.createElement(y.a,{schema:Object(b.a)({onFilterChange:function(t){x({type:"setFilterValue",payload:t}),A(T,t,F,(function(t){return x({type:"setFilteringFlag",payload:t})}),W(W({},S),{},{offset:0}))},searchValue:c,filterPlaceholder:t(k.a.inventoriesFilter),meta:S,apiRequest:function(t,e){return F(Object(_.a)(T,c,e))}})}),i.a.createElement(d.Section,{type:"content"},i.a.createElement(w,{title:H,data:D,columns:e,isLoading:m||h,actionResolver:function(t){return[{title:"Set approval",onClick:function(){return N.push({pathname:"/platform/platform-inventories/edit-workflow",search:"?platform=".concat(T,"&inventory=").concat(t.id)})}}]},renderEmptyState:function(){return i.a.createElement(v.b,{title:"No inventories",Icon:f.a,description:t(""===c?k.a.noInventoriesDescription:k.a.noInventoriesFilterDescription)})}})),S.count>0&&i.a.createElement(B.a,null,i.a.createElement(R.a,{dropDirection:"up",meta:S,apiRequest:function(t,e){return F(Object(_.a)(T,c,e))}})))}},619:function(t,e,a){"use strict";e.__esModule=!0,a(659),e.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},626:function(t,e,a){"use strict";e.__esModule=!0,e.SearchIconConfig={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},e.SearchIcon=a(26).createIcon(e.SearchIconConfig),e.default=e.SearchIcon},630:function(t,e,a){"use strict";var n=a(22),r=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});e.a=r},646:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(696),c=function(){return(c=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e=t.children,a=t.className,n=s(t,["children","className"]);return r.a.createElement("div",c({className:Object(o.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},n),e)}},659:function(t,e,a){var n=a(7),r=a(660);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);t.exports=r.locals||{}},660:function(t,e,a){(e=a(8)(!1)).push([t.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-xs__content--MaxWidth: 21.875rem;\n  --pf-c-empty-state--m-xs__body--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-empty-state--m-xs--button--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-empty-state--m-xs--PaddingTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingRight: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingBottom: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingLeft: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__icon--MarginBottom: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__primary--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__secondary--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-xs {\n    --pf-c-empty-state--PaddingTop: var(--pf-c-empty-state--m-xs--PaddingTop);\n    --pf-c-empty-state--PaddingRight: var(--pf-c-empty-state--m-xs--PaddingRight);\n    --pf-c-empty-state--PaddingBottom: var(--pf-c-empty-state--m-xs--PaddingBottom);\n    --pf-c-empty-state--PaddingLeft: var(--pf-c-empty-state--m-xs--PaddingLeft);\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-xs__content--MaxWidth);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xs__icon--MarginBottom);\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xs__body--MarginTop);\n    --pf-c-empty-state__primary--MarginTop: var(--pf-c-empty-state--m-xs__primary--MarginTop);\n    --pf-c-empty-state__secondary--MarginTop: var(--pf-c-empty-state--m-xs__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xs .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xs__body--FontSize); }\n    .pf-c-empty-state.pf-m-xs .pf-c-button {\n      --pf-c-button--FontSize: var(--pf-c-empty-state--m-xs--button--FontSize); }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),t.exports=e},663:function(t,e,a){"use strict";var n=a(22),r=Object(n.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});e.a=r},675:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(0),r=a.n(n),o=a(811),c=a(812),s=a(333),i=a(160),p=a(813),l=a(834),m=a(159),f=a(623);e.b=function(t){var e=t.title,a=t.Icon,n=t.description,m=t.PrimaryAction,f=t.renderDescription,d=void 0===f?function(){return null}:f;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(o.a,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(c.a,{icon:a}),r.a.createElement(s.a,null,r.a.createElement(i.a,{component:i.b.h1},e)),r.a.createElement(p.a,null,n,d()),r.a.createElement(l.a,null,m&&r.a.createElement(m,null))))};var d=function(t){var e=t.url,a=t.label,n=t.hasPermission,o=void 0!==n&&n,c=t.id;return o?r.a.createElement(f.a,{id:c,pathname:e,preserveSearch:!0},r.a.createElement(m.a,{variant:"primary"},a)):null}},805:function(t,e,a){var n=a(806),r=a(807),o=a(351),c=a(808);t.exports=function(t){return n(t)||r(t)||o(t)||c()}},806:function(t,e,a){var n=a(352);t.exports=function(t){if(Array.isArray(t))return n(t)}},807:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},808:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},811:function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var n,r=a(1),o=a(0),c=a(2),s=a(619),i=a.n(s);!function(t){t.small="small",t.large="large",t.xl="xl",t.full="full"}(n||(n={}));const p=t=>{var{children:e,className:a="",variant:s=n.full,isFullHeight:p}=t,l=Object(r.__rest)(t,["children","className","variant","isFullHeight"]);return o.createElement("div",Object.assign({className:Object(c.css)(i.a.emptyState,"small"===s&&i.a.modifiers.sm,"large"===s&&i.a.modifiers.lg,"xl"===s&&i.a.modifiers.xl,p&&i.a.modifiers.fullHeight,a)},l),o.createElement("div",{className:Object(c.css)(i.a.emptyStateContent)},e))};p.displayName="EmptyState"},812:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(1),r=a(0),o=a(2),c=a(619),s=a.n(c);const i=t=>{var{className:e="",icon:a,component:c,variant:i="icon"}=t,p=Object(n.__rest)(t,["className","icon","component","variant"]);const l=Object(o.css)(s.a.emptyStateIcon,e);return"icon"===i?r.createElement(a,Object.assign({className:l},p,{"aria-hidden":"true"})):r.createElement("div",{className:l},r.createElement(c,null))};i.displayName="EmptyStateIcon"},813:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(1),r=a(0),o=a(2),c=a(619),s=a.n(c);const i=t=>{var{children:e,className:a=""}=t,c=Object(n.__rest)(t,["children","className"]);return r.createElement("div",Object.assign({className:Object(o.css)(s.a.emptyStateBody,a)},c),e)};i.displayName="EmptyStateBody"},834:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(1),r=a(0),o=a(2),c=a(619),s=a.n(c);const i=t=>{var{children:e=null,className:a=""}=t,c=Object(n.__rest)(t,["children","className"]);return r.createElement("div",Object.assign({className:Object(o.css)(s.a.emptyStateSecondary,a)},c),e)};i.displayName="EmptyStateSecondaryActions"}}]);
//# sourceMappingURL=../sourcemaps/platform-inventories~31ecd969.js.map