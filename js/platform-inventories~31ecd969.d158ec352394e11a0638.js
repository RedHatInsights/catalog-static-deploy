(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1008:function(e,t,a){"use strict";a.r(t);var n=a(107),r=a.n(n),s=a(40),o=a.n(s),i=a(0),l=a.n(i),c=a(25),p=a(106),m=a(632),f=a.n(m),d=a(241),u=a(130),y=a(654),g=a(36),_=a(670),b=a(771),v=a(693),h=a(149),M=a(77),x=a(753),O=a(704),S=a(764),F=a(763),j=a(108),E=a(634),P=a(27),T=function(){var e=Object(P.a)();return l.a.createElement(M.a,{component:M.b.h1},e(E.a.noItems))},w=function(e){var t=e.data,a=e.columns,n=e.isCompact,r=void 0!==n&&n,s=e.isLoading,o=void 0!==s&&s,c=e.actionResolver,p=e.areActionsDisabled,m=e.borders,f=void 0===m||m,d=e.routes,u=void 0===d?function(){return null}:d,y=e.titlePlural,g=e.renderEmptyState,_=e.ouiaId,b=Object(i.useState)([]),v=b[0],h=b[1];return Object(i.useEffect)((function(){h(t)}),[t]),o?l.a.createElement(j.e,null):l.a.createElement(i.Fragment,null,0===v.length?g?g():l.a.createElement(T,null):l.a.createElement(i.Fragment,null,u(),l.a.createElement(x.a,{ouiaId:_,"aria-label":y+" table",variant:r?O.b.compact:void 0,borders:f,rows:v,cells:a,actionResolver:c,areActionsDisabled:p},l.a.createElement(S.a,null),l.a.createElement(F.a,null))))},N=a(134),R=a.n(N),z=a(627),I=a(660),C=a(109),B=a(129),k=a(655);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},W=Object(h.a)((function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.a;n(!0),a(Object(_.a)(e,t,r)).then((function(){return n(!1)}))}),1e3),V=function(e,t){switch(t.type){case"setFetching":return L(L({},e),{},{isFetching:t.payload});case"setFilterValue":return L(L({},e),{},{filterValue:t.payload});case"setFilteringFlag":return L(L({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(P.a)(),t=Object(i.useRef)([e(B.a.name),e(B.a.description),e(B.a.created),e(k.a.workflowColumn)]).current,a=Object(i.useReducer)(V,A),n=r()(a,2),s=n[0],o=s.filterValue,m=s.isFetching,h=s.isFiltering,M=n[1],x=Object(c.e)((function(e){return e.platformReducer.platformInventories})),O=x.data,S=x.meta,F=Object(c.e)((function(e){return e.platformReducer.selectedPlatform})),j=Object(c.d)(),E=Object(C.a)(["platform"]),T=r()(E,1)[0].platform,N=Object(p.g)();Object(i.useEffect)((function(){j(Object(_.a)(T,o,g.a)).then((function(){return M({type:"setFetching",payload:!1})})),Object(u.e)()}),[]);var D=O?function(e){return e.reduce((function(e,t,a){var n=t.id,r=t.name,s=t.description,o=t.created_at,c=t.workflow;return[].concat(R()(e),[{id:n,key:a,isOpen:!1,cells:[r,s,l.a.createElement(i.Fragment,{key:"date"},l.a.createElement(u.a,{date:o})),c]}])}),[])}(O):[],H=F?F.name:"";return l.a.createElement(i.Fragment,null,l.a.createElement(y.a,{schema:Object(b.a)({onFilterChange:function(e){M({type:"setFilterValue",payload:e}),W(T,e,j,(function(e){return M({type:"setFilteringFlag",payload:e})}),L(L({},S),{},{offset:0}))},searchValue:o,filterPlaceholder:e(k.a.inventoriesFilter),meta:S,apiRequest:function(e,t){return j(Object(_.a)(T,o,t))}})}),l.a.createElement(d.Section,{type:"content"},l.a.createElement(w,{ouiaId:"PlatformsTable",title:H,data:D,columns:t,isLoading:m||h,actionResolver:function(e){return[{title:"Set approval",onClick:function(){return N.push({pathname:"/platform/platform-inventories/edit-workflow",search:"?platform=".concat(T,"&inventory=").concat(e.id)})}}]},renderEmptyState:function(){return l.a.createElement(v.b,{title:"No inventories",Icon:f.a,description:e(""===o?k.a.noInventoriesDescription:k.a.noInventoriesFilterDescription)})}})),S.count>0&&l.a.createElement(I.a,null,l.a.createElement(z.a,{dropDirection:"up",meta:S,apiRequest:function(e,t){return j(Object(_.a)(T,o,t))}})))}},621:function(e,t,a){"use strict";t.__esModule=!0,a(680),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},632:function(e,t,a){"use strict";t.__esModule=!0,t.SearchIconConfig={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.SearchIcon=a(98).createIcon(t.SearchIconConfig),t.default=t.SearchIcon},634:function(e,t,a){"use strict";var n=a(29),r=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=r},655:function(e,t,a){"use strict";var n=a(29),r=Object(n.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"To get started, add an Ansible Tower cluster as a source."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summmary"},mqttClientId:{id:"platform.mqttClientId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}});t.a=r},660:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(630),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t=e.children,a=e.className,n=i(e,["children","className"]);return r.a.createElement("div",o({className:Object(s.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},n),t)}},680:function(e,t,a){var n=a(7),r=a(681);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);e.exports=r.locals||{}},681:function(e,t,a){(t=a(8)(!1)).push([e.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-xs__content--MaxWidth: 21.875rem;\n  --pf-c-empty-state--m-xs__body--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-empty-state--m-xs--button--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-empty-state--m-xs--PaddingTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingRight: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingBottom: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingLeft: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__icon--MarginBottom: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__primary--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__secondary--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-xs {\n    --pf-c-empty-state--PaddingTop: var(--pf-c-empty-state--m-xs--PaddingTop);\n    --pf-c-empty-state--PaddingRight: var(--pf-c-empty-state--m-xs--PaddingRight);\n    --pf-c-empty-state--PaddingBottom: var(--pf-c-empty-state--m-xs--PaddingBottom);\n    --pf-c-empty-state--PaddingLeft: var(--pf-c-empty-state--m-xs--PaddingLeft);\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-xs__content--MaxWidth);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xs__icon--MarginBottom);\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xs__body--MarginTop);\n    --pf-c-empty-state__primary--MarginTop: var(--pf-c-empty-state--m-xs__primary--MarginTop);\n    --pf-c-empty-state__secondary--MarginTop: var(--pf-c-empty-state--m-xs__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xs .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xs__body--FontSize); }\n    .pf-c-empty-state.pf-m-xs .pf-c-button {\n      --pf-c-button--FontSize: var(--pf-c-empty-state--m-xs--button--FontSize); }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),e.exports=t},693:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),s=a(827),o=a(828),i=a(147),l=a(77),c=a(829),p=a(849),m=a(76),f=a(620);t.b=function(e){var t=e.title,a=e.Icon,n=e.description,m=e.PrimaryAction,f=e.renderDescription,d=void 0===f?function(){return null}:f;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(s.a,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(o.a,{icon:a}),r.a.createElement(i.a,null,r.a.createElement(l.a,{component:l.b.h1},t)),r.a.createElement(c.a,null,n,d()),r.a.createElement(p.a,null,m&&r.a.createElement(m,null))))};var d=function(e){var t=e.url,a=e.label,n=e.hasPermission,s=void 0!==n&&n,o=e.id;return s?r.a.createElement(f.a,{id:o,pathname:t,preserveSearch:!0},r.a.createElement(m.a,{variant:"primary"},a)):null}},827:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n,r=a(2),s=a(0),o=a(1),i=a(621),l=a.n(i);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(n||(n={}));const c=e=>{var{children:t,className:a="",variant:i=n.full,isFullHeight:c}=e,p=Object(r.__rest)(e,["children","className","variant","isFullHeight"]);return s.createElement("div",Object.assign({className:Object(o.css)(l.a.emptyState,"xs"===i&&l.a.modifiers.xs,"small"===i&&l.a.modifiers.sm,"large"===i&&l.a.modifiers.lg,"xl"===i&&l.a.modifiers.xl,c&&l.a.modifiers.fullHeight,a)},p),s.createElement("div",{className:Object(o.css)(l.a.emptyStateContent)},t))};c.displayName="EmptyState"},828:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a(0),s=a(1),o=a(621),i=a.n(o);const l=e=>{var{className:t="",icon:a,component:o,variant:l="icon"}=e,c=Object(n.__rest)(e,["className","icon","component","variant"]);const p=Object(s.css)(i.a.emptyStateIcon,t);return"icon"===l?r.createElement(a,Object.assign({className:p},c,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(o,null))};l.displayName="EmptyStateIcon"},829:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a(0),s=a(1),o=a(621),i=a.n(o);const l=e=>{var{children:t,className:a=""}=e,o=Object(n.__rest)(e,["children","className"]);return r.createElement("div",Object.assign({className:Object(s.css)(i.a.emptyStateBody,a)},o),t)};l.displayName="EmptyStateBody"},849:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a(0),s=a(1),o=a(621),i=a.n(o);const l=e=>{var{children:t=null,className:a=""}=e,o=Object(n.__rest)(e,["children","className"]);return r.createElement("div",Object.assign({className:Object(s.css)(i.a.emptyStateSecondary,a)},o),t)};l.displayName="EmptyStateSecondaryActions"}}]);
//# sourceMappingURL=../sourcemaps/platform-inventories~31ecd969.js.map