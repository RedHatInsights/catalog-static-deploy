(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1019:function(t,e,a){"use strict";a.r(e);var n=a(94),r=a.n(n),s=a(26),o=a.n(s),i=a(0),l=a.n(i),c=a(27),p=a(102),m=a(592),f=a.n(m),d=a(522),u=a(127),y=a(580),g=a(37),_=a(575),v=a(675),b=a(614),h=a(144),M=a(75),x=a(1013),O=a(711),S=a(1018),F=a(1014),j=a(108),E=a(567),P=a(28),T=function(){var t=Object(P.a)();return l.a.createElement(M.a,{component:M.b.h1},t(E.a.noItems))},w=function(t){var e=t.data,a=t.columns,n=t.isCompact,r=void 0!==n&&n,s=t.isLoading,o=void 0!==s&&s,c=t.actionResolver,p=t.areActionsDisabled,m=t.borders,f=void 0===m||m,d=t.routes,u=void 0===d?function(){return null}:d,y=t.titlePlural,g=t.renderEmptyState,_=t.ouiaId,v=Object(i.useState)([]),b=v[0],h=v[1];return Object(i.useEffect)((function(){h(e)}),[e]),o?l.a.createElement(j.e,null):l.a.createElement(i.Fragment,null,0===b.length?g?g():l.a.createElement(T,null):l.a.createElement(i.Fragment,null,u(),l.a.createElement(x.a,{ouiaId:_,"aria-label":y+" table",variant:r?O.b.compact:void 0,borders:f,rows:b,cells:a,actionResolver:c,areActionsDisabled:p},l.a.createElement(S.a,null),l.a.createElement(F.a,null))))},N=a(106),R=a.n(N),z=a(561),I=a(585),C=a(107),B=a(126),D=a(581);function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function A(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var L={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},W=Object(h.a)((function(t,e,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:g.a;n(!0),a(Object(_.a)(t,e,r)).then((function(){return n(!1)}))}),1e3),V=function(t,e){switch(e.type){case"setFetching":return A(A({},t),{},{isFetching:e.payload});case"setFilterValue":return A(A({},t),{},{filterValue:e.payload});case"setFilteringFlag":return A(A({},t),{},{isFiltering:e.payload});default:return t}};e.default=function(){var t=Object(P.a)(),e=Object(i.useRef)([t(B.a.name),t(B.a.description),t(B.a.created),t(D.a.workflowColumn)]).current,a=Object(i.useReducer)(V,L),n=r()(a,2),s=n[0],o=s.filterValue,m=s.isFetching,h=s.isFiltering,M=n[1],x=Object(c.e)((function(t){return t.platformReducer.platformInventories})),O=x.data,S=x.meta,F=Object(c.e)((function(t){return t.platformReducer.selectedPlatform})),j=Object(c.d)(),E=Object(C.a)(["platform"]),T=r()(E,1)[0].platform,N=Object(p.g)();Object(i.useEffect)((function(){j(Object(_.a)(T,o,g.a)).then((function(){return M({type:"setFetching",payload:!1})})),Object(u.e)()}),[]);var k=O?function(t){return t.reduce((function(t,e,a){var n=e.id,r=e.name,s=e.description,o=e.created_at,c=e.workflow;return[].concat(R()(t),[{id:n,key:a,isOpen:!1,cells:[r,s,l.a.createElement(i.Fragment,{key:"date"},l.a.createElement(u.a,{date:o})),c]}])}),[])}(O):[],H=F?F.name:"";return l.a.createElement(i.Fragment,null,l.a.createElement(y.a,{schema:Object(v.a)({onFilterChange:function(t){M({type:"setFilterValue",payload:t}),W(T,t,j,(function(t){return M({type:"setFilteringFlag",payload:t})}),A(A({},S),{},{offset:0}))},searchValue:o,filterPlaceholder:t(D.a.inventoriesFilter),meta:S,apiRequest:function(t,e){return j(Object(_.a)(T,o,e))}})}),l.a.createElement(d.a,{type:"content"},l.a.createElement(w,{ouiaId:"PlatformsTable",title:H,data:k,columns:e,isLoading:m||h,actionResolver:function(t){return[{title:"Set approval",onClick:function(){return N.push({pathname:"/platform/platform-inventories/edit-workflow",search:"?platform=".concat(T,"&inventory=").concat(t.id)})}}]},renderEmptyState:function(){return l.a.createElement(b.b,{title:"No inventories",Icon:f.a,description:t(""===o?D.a.noInventoriesDescription:D.a.noInventoriesFilterDescription)})}})),S.count>0&&l.a.createElement(I.a,null,l.a.createElement(z.a,{dropDirection:"up",meta:S,apiRequest:function(t,e){return j(Object(_.a)(T,o,e))}})))}},553:function(t,e,a){"use strict";e.__esModule=!0,a(598),e.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},567:function(t,e,a){"use strict";var n=a(30),r=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});e.a=r},581:function(t,e,a){"use strict";var n=a(30),r=Object(n.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"To get started, add an Ansible Tower cluster as a source."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summary"},platformDetails:{id:"platforms.details",defaultMessage:"Details"},platformActivity:{id:"platforms.activity",defaultMessage:"Activity"},cloudConnectorId:{id:"platform.cloudConnectorId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}});e.a=r},585:function(t,e,a){"use strict";var n=a(0),r=a.n(n),s=a(628),o=function(){return(o=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a};e.a=function(t){var e=t.children,a=t.className,n=i(t,["children","className"]);return r.a.createElement("div",o({className:Object(s.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},n),e)}},592:function(t,e,a){"use strict";e.__esModule=!0,e.SearchIconConfig={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},e.SearchIcon=a(93).createIcon(e.SearchIconConfig),e.default=e.SearchIcon},598:function(t,e,a){var n=a(9),r=a(599);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};n(r,s);t.exports=r.locals||{}},599:function(t,e,a){(e=a(10)(!1)).push([t.i,".pf-c-empty-state {\n  --pf-c-empty-state--PaddingTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingRight: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--PaddingLeft: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__content--MaxWidth: none;\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__content--c-title--m-lg--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state__primary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__primary--secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--child--MarginRight: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state__secondary--child--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--child--MarginLeft: calc(var(--pf-global--spacer--xs) / 2);\n  --pf-c-empty-state--m-xs__content--MaxWidth: 21.875rem;\n  --pf-c-empty-state--m-xs__body--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-empty-state--m-xs--button--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-empty-state--m-xs--PaddingTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingRight: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingBottom: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs--PaddingLeft: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__icon--MarginBottom: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__primary--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-xs__secondary--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state--m-sm__content--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg__content--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--pf-c-empty-state--PaddingTop) var(--pf-c-empty-state--PaddingRight) var(--pf-c-empty-state--PaddingBottom) var(--pf-c-empty-state--PaddingLeft);\n  text-align: center; }\n  .pf-c-empty-state.pf-m-xs {\n    --pf-c-empty-state--PaddingTop: var(--pf-c-empty-state--m-xs--PaddingTop);\n    --pf-c-empty-state--PaddingRight: var(--pf-c-empty-state--m-xs--PaddingRight);\n    --pf-c-empty-state--PaddingBottom: var(--pf-c-empty-state--m-xs--PaddingBottom);\n    --pf-c-empty-state--PaddingLeft: var(--pf-c-empty-state--m-xs--PaddingLeft);\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-xs__content--MaxWidth);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xs__icon--MarginBottom);\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xs__body--MarginTop);\n    --pf-c-empty-state__primary--MarginTop: var(--pf-c-empty-state--m-xs__primary--MarginTop);\n    --pf-c-empty-state__secondary--MarginTop: var(--pf-c-empty-state--m-xs__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xs .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xs__body--FontSize); }\n    .pf-c-empty-state.pf-m-xs .pf-c-button {\n      --pf-c-button--FontSize: var(--pf-c-empty-state--m-xs--button--FontSize); }\n  .pf-c-empty-state.pf-m-sm {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-sm__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-lg {\n    --pf-c-empty-state__content--MaxWidth: var(--pf-c-empty-state--m-lg__content--MaxWidth); }\n  .pf-c-empty-state.pf-m-xl {\n    --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n    --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n    --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize);\n    --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n    .pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n      font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n  .pf-c-empty-state.pf-m-full-height {\n    height: 100%; }\n\n.pf-c-empty-state__content {\n  max-width: var(--pf-c-empty-state__content--MaxWidth); }\n  .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n    font-size: var(--pf-c-empty-state__content--c-title--m-lg--FontSize); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__content > .pf-c-button.pf-m-primary,\n.pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state__primary--MarginTop); }\n  .pf-c-empty-state__content > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n  .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n    margin-top: var(--pf-c-empty-state__primary--secondary--MarginTop); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n  .pf-c-empty-state__secondary > * {\n    margin-right: var(--pf-c-empty-state__secondary--child--MarginRight);\n    margin-bottom: var(--pf-c-empty-state__secondary--child--MarginBottom);\n    margin-left: var(--pf-c-empty-state__secondary--child--MarginLeft); }\n\n.pf-m-overpass-font .pf-c-empty-state .pf-c-empty-state__content > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--lg); }\n",""]),t.exports=e},614:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(0),r=a.n(n),s=a(736),o=a(737),i=a(139),l=a(75),c=a(738),p=a(797),m=a(68),f=a(558);e.b=function(t){var e=t.title,a=t.Icon,n=t.description,m=t.PrimaryAction,f=t.renderDescription,d=void 0===f?function(){return null}:f;return r.a.createElement("div",{className:"pf-u-mt-xl"},r.a.createElement(s.a,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(o.a,{icon:a}),r.a.createElement(i.a,null,r.a.createElement(l.a,{component:l.b.h1},e)),r.a.createElement(c.a,null,n,d()),r.a.createElement(p.a,null,m&&r.a.createElement(m,null))))};var d=function(t){var e=t.url,a=t.label,n=t.hasPermission,s=void 0!==n&&n,o=t.id;return s?r.a.createElement(f.a,{id:o,pathname:e,preserveSearch:!0},r.a.createElement(m.a,{variant:"primary"},a)):null}},736:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n,r=a(2),s=a(0),o=a(1),i=a(553),l=a.n(i);!function(t){t.xs="xs",t.small="small",t.large="large",t.xl="xl",t.full="full"}(n||(n={}));const c=t=>{var{children:e,className:a="",variant:i=n.full,isFullHeight:c}=t,p=Object(r.__rest)(t,["children","className","variant","isFullHeight"]);return s.createElement("div",Object.assign({className:Object(o.css)(l.a.emptyState,"xs"===i&&l.a.modifiers.xs,"small"===i&&l.a.modifiers.sm,"large"===i&&l.a.modifiers.lg,"xl"===i&&l.a.modifiers.xl,c&&l.a.modifiers.fullHeight,a)},p),s.createElement("div",{className:Object(o.css)(l.a.emptyStateContent)},e))};c.displayName="EmptyState"},737:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a(2),r=a(0),s=a(1),o=a(553),i=a.n(o);const l=t=>{var{className:e="",icon:a,component:o,variant:l="icon"}=t,c=Object(n.__rest)(t,["className","icon","component","variant"]);const p=Object(s.css)(i.a.emptyStateIcon,e);return"icon"===l?r.createElement(a,Object.assign({className:p},c,{"aria-hidden":"true"})):r.createElement("div",{className:p},r.createElement(o,null))};l.displayName="EmptyStateIcon"},738:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a(2),r=a(0),s=a(1),o=a(553),i=a.n(o);const l=t=>{var{children:e,className:a=""}=t,o=Object(n.__rest)(t,["children","className"]);return r.createElement("div",Object.assign({className:Object(s.css)(i.a.emptyStateBody,a)},o),e)};l.displayName="EmptyStateBody"},797:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a(2),r=a(0),s=a(1),o=a(553),i=a.n(o);const l=t=>{var{children:e=null,className:a=""}=t,o=Object(n.__rest)(t,["children","className"]);return r.createElement("div",Object.assign({className:Object(s.css)(i.a.emptyStateSecondary,a)},o),e)};l.displayName="EmptyStateSecondaryActions"}}]);
//# sourceMappingURL=../sourcemaps/platform-inventories~31ecd969.js.map