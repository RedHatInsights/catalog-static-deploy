(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1086:function(e,t,a){"use strict";a.r(t);var n=a(151),r=a.n(n),o=a(129),l=a.n(o),i=a(0),s=a.n(i),c=a(25),m=a(67),p=a(68),u=a(631),f=a.n(u),d=a(130),b=a(674),g=a(737),O=a(663),E=a(599),y=a(857),v=a(147),h=a(77),T=a(858),j=a(753),L=a(12),P=a(733),k=a(630),I=a(735),w=a(734),C=a(671),N=function(){return(N=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},M=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},_=["description","modified"],F=function(e){var t=e.name,a=e.id,n=M(e,["name","id"]);return s.a.createElement(E.a,null,s.a.createElement(I.a,{key:a,ouiaId:"platform-"+a},s.a.createElement(y.a,null,s.a.createElement(C.a,{height:40,sourceId:a})),s.a.createElement(w.a,null,s.a.createElement(v.a,null,s.a.createElement(k.a,{pathname:L.t,searchParams:{platform:a}},s.a.createElement(h.a,{title:t,className:"pf-u-mb-0",component:h.b.h3},s.a.createElement(P.a,null,t)))),s.a.createElement(j.a,N({},N({name:t},n),{toDisplay:_}))),s.a.createElement(T.a,null)))},x=a(760),R=a(684),S=a(153),V=a(675),B=a(26);t.default=function(){var e=Object(B.a)(),t=Object(i.useState)(""),a=l()(t,2),n=a[0],o=a[1],u=Object(c.e)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),E=u.platforms,y=u.isLoading,v=Object(c.d)(),h=Object(i.useContext)(S.a).userIdentity.identity.user.is_org_admin;Object(i.useEffect)((function(){v(Object(O.c)()),Object(d.d)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var T=function(){return s.a.createElement(i.Fragment,null,s.a.createElement(p.TextContent,null,s.a.createElement(m.Text,{component:m.TextVariants.p},e(V.a.configureSourceTitle)),h?s.a.createElement(m.Text,{component:m.TextVariants.p},e(V.a.connectSource,{a:function(e){return s.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},e)}})):s.a.createElement(m.Text,null,e(V.a.contactAdmin))))},j={items:E.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return s.a.createElement(F,r()({ouiaId:"platform-".concat(e.id),key:e.id},e))})),isLoading:y&&0===E.length};return s.a.createElement(i.Fragment,null,s.a.createElement(b.a,{schema:Object(x.b)({onFilterChange:function(e){return o(e)},searchValue:n,title:e(V.a.title)})}),s.a.createElement(g.a,r()({},j,{renderEmptyState:function(){return s.a.createElement(R.b,{title:e(V.a.noPlatforms),renderDescription:T,Icon:f.a})}})))}},628:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(240),l=a(184),i=a(36),s=function(){return(s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t=e.meta,a=t.limit,n=void 0===a?50:a,m=t.count,p=void 0===m?0:m,u=t.offset,f=void 0===u?0:u,d=e.apiProps,b=e.apiRequest,g=e.className,O=void 0===g?"":g,E=e.isCompact,y=void 0!==E&&E,v=c(e,["meta","apiProps","apiRequest","className","isCompact"]);return r.a.createElement("div",{className:O},r.a.createElement(l.a,s({perPage:n||50,itemCount:p||0,onPerPageSelect:function(e,t){return b(d,{offset:f,limit:t})},page:Object(i.b)(n,f),onSetPage:function(e,t,a){var r={offset:Object(i.c)(t,n),limit:n},l=function(){return b(d,r)};return a?Object(o.a)(l,250)():l()},dropDirection:"down",isCompact:y},v)))}},675:function(e,t,a){"use strict";var n=a(27),r=Object(n.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=r},760:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(882),r=a(670),o=a(628),l=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.title;return{fields:[{component:r.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:r.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:n},{component:r.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:r.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:r.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:a,placeholder:"Filter by platform"}]},{component:r.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(e){var t=e.title,a=e.paddingBottom,o=e.tabItems;return{fields:[{component:r.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:a,fields:[{component:r.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:r.b.LEVEL_ITEM,key:"tabs-level-item",fields:o?[{component:n.a,key:"platform-tabs",tabItems:o}]:[]}]}]}},s=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.meta,l=e.apiRequest,i=e.filterPlaceholder;return{fields:[{component:r.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:r.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:r.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:r.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:a,placeholder:i}]},{component:r.b.LEVEL_ITEM,key:"pagination-level-item",fields:n.count>0?[{component:o.a,key:"platform-pagination",apiRequest:l,meta:n,isCompact:!0}]:[]}]}]}]}}},857:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(2),r=a(0),o=a(1),l=a(62),i=a.n(l),s=a(193),c=a(76),m=a(242);const p=e=>{var{children:t=null,className:a="",id:l,onExpand:p,toggleButtonProps:u}=e,f=Object(n.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return r.createElement(s.b.Consumer,null,({cardId:e})=>r.createElement("div",Object.assign({className:Object(o.css)(i.a.cardHeader,a),id:l},f),p&&r.createElement("div",{className:Object(o.css)(i.a.cardHeaderToggle)},r.createElement(c.a,Object.assign({variant:"plain",type:"button",onClick:t=>{p(t,e)}},u),r.createElement("span",{className:Object(o.css)(i.a.cardHeaderToggleIcon)},r.createElement(m.a,{"aria-hidden":"true"})))),t))};p.displayName="CardHeader"},858:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),r=a(0),o=a(62),l=a.n(o),i=a(1);const s=e=>{var{children:t=null,className:a="",component:o="div"}=e,s=Object(n.__rest)(e,["children","className","component"]);const c=o;return r.createElement(c,Object.assign({className:Object(i.css)(l.a.cardFooter,a)},s),t)};s.displayName="CardFooter"}}]);
//# sourceMappingURL=../sourcemaps/platforms~31ecd969.js.map