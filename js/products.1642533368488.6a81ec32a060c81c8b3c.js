"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[2893],{24774:(e,t,r)=>{t.a=void 0;const a=r(21988),n=a.__importStar(r(30624)),o=r(38296),l=a.__importDefault(r(86192));t.a=e=>{var{hasGutter:t,className:r="",children:i=null}=e,s=a.__rest(e,["hasGutter","className","children"]);return n.createElement("div",Object.assign({},s,{className:o.css(l.default.level,t&&l.default.modifiers.gutter,r)}),i)},t.a.displayName="Level"},2112:(e,t,r)=>{t.MS={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.R0=r(35183).createIcon(t.MS),t.ZP=t.R0},39173:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(30624),n=r.n(a),o=r(45697),l=r.n(o),i=r(94184),s=r.n(i),c=r(60485),u=function(e){var t=e.className,r=e.title,a=s()(t);return n().createElement(c.D,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"}," ",r," ")};const p=u;u.propTypes={title:l().node.isRequired,className:l().string}},1797:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var a=r(87462),n=r(29439),o=r(4942),l=r(30624),i=r.n(l),s=r(14494),c=r(2112),u=r(48794),p=r(89231),d=r(77503),f=r(63035),m=r(59797),g=r(91703),v=r(77172);const h=function(e){var t=e.meta,r=e.fetchProducts,a=e.isLoading,n=e.filterProps,o=n.searchValue,l=n.onFilterChange,i=n.placeholder;return{fields:[{component:g.H.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:g.H.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:g.H.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:g.H.TOOLBAR,key:"main-portfolio-toolbar",fields:[{groupName:"filter-group",component:g.H.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:l,placeholder:i,isClearable:!0}]},{component:g.H.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:v.Z,key:"products-pagination",meta:t,apiProps:o,apiRequest:r,isDisabled:a,isCompact:!0}]:[]}]}]}]}};var y=r(66678),b=r(7247),O=r(59837),T=r(11608),E=r(49827),P=r(81624),M=r(33188),L=r(6202),I=r(20018),_=r(63540),Z=r(63853),w=r(36722),S=r(92183),x=r(44058),C=r(72510),F=r(97881);const R=(0,r(50049).vU)({addSource:{id:"products.empty.add-source",defaultMessage:"Add source"},configureSource:{id:"products.empty.configure-source",defaultMessage:"Configure a source and add products into portfolios."},title:{id:"products.toolbar.title",defaultMessage:"Products"}});var A=r(53352),j=r(23349);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=(0,P.Z)((function(e,t,r){r(!0),t(localStorage.getItem("catalog_standalone")?(0,d._r)(e,b.he):(0,p._r)(e,b.he)).then((function(){return r(!1)}))}),1e3),V={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},N=function(e,t){switch(t.type){case"setFetching":return D(D({},e),{},{isFetching:t.payload});case"setFilterValue":return D(D({},e),{},{filterValue:t.payload});case"setFilteringFlag":return D(D({},e),{},{isFiltering:t.payload})}return e};const H=function(){var e,t=(0,j.Z)(),r=(0,x.Z)(),o=(0,l.useContext)(Z.Z).release,g=(0,l.useReducer)(N,D(D({},V),{},{filterValue:(null==r||null===(e=r.products)||void 0===e?void 0:e.filter)||""})),b=(0,n.Z)(g,2),P=b[0],k=P.isFetching,H=P.filterValue,z=P.isFiltering,G=b[1],K=(0,l.useContext)(C.Z).userIdentity.identity.user.is_org_admin,q=(0,s.I0)(),U=(0,s.v9)((function(e){return e.portfolioReducer.portfolioItems})),J=U.meta||{count:U.count},W=U.data||U.results;(0,l.useEffect)((function(){var e,t;Promise.all([q(localStorage.getItem("catalog_standalone")?(0,d._r)(null==r||null===(e=r.products)||void 0===e?void 0:e.filter,null==r?void 0:r.products):(0,p._r)(null==r||null===(t=r.products)||void 0===t?void 0:t.filter,null==r?void 0:r.products)),q(localStorage.getItem("catalog_standalone")?(0,E.dw)():(0,T.dw)())]).then((function(){return G({type:"setFetching",payload:!1})})),(0,f.k3)()}),[]);var Y=function(e){G({type:"setFilterValue",payload:e}),B(e,q,(function(e){return G({type:"setFilteringFlag",payload:e})}))},Q=W.map((function(e){return i().createElement(m.Z,(0,a.Z)({key:e.id,pathname:e.portfolio_id&&w.YJ},(r=(t=e).portfolio_id,n=t.id,o=t.service_offering_source_ref,r&&n&&o?{pathname:r&&w.YJ,searchParams:{portfolio:r,"portfolio-item":n,source:o,"from-products":"true"}}:{}),e,{toDisplay:[]}));var t,r,n,o})),X={PrimaryAction:J.noData?function(){return K&&i().createElement("a",{href:"".concat(o,"settings/sources/new")},i().createElement(L.Button,{ouiaId:"add-source",variant:"primary"},t(R.addSource)))}:function(){return i().createElement(L.Button,{ouiaId:"clear-filter",variant:"link",onClick:function(){return Y("")}},t(F.Z.clearFilters))},title:J.noData?t(F.Z.noProducts):t(F.Z.noResults),renderDescription:function(){return i().createElement(l.Fragment,null,i().createElement(I.TextContent,null,i().createElement(_.Text,{component:_.TextVariants.p},J.noData?t(R.configureSource):t(F.Z.noResultsDescription)),K?i().createElement(_.Text,{component:_.TextVariants.p},t(A.Z.connectSource,{a:function(e){return i().createElement(l.Fragment,null,i().createElement("a",{href:"".concat(document.baseURI,"settings/sources")},e))}})):i().createElement(_.Text,null,t(A.Z.contactAdmin))))},Icon:J.noData?c.ZP:u.ZP};return i().createElement(l.Fragment,null,i().createElement(y.Z,{schema:h({filterProps:{searchValue:H,onFilterChange:Y,placeholder:t(F.Z.filterByProduct)},title:t(R.title),isLoading:z||k,meta:J,fetchProducts:localStorage.getItem("catalog_standalone")?function(){return q(d._r.apply(void 0,arguments))}:function(){return q(p._r.apply(void 0,arguments))}})}),i().createElement(O.Z,{isLoading:z||k,items:Q,renderEmptyState:function(){return i().createElement(M.Z,X)}}),J.count>0&&i().createElement(S.Z,null,i().createElement(v.Z,{dropDirection:"up",meta:J,apiRequest:function(e,t){var a,n;return q(localStorage.getItem("catalog_standalone")?(0,d._r)(null==r||null===(a=r.products)||void 0===a?void 0:a.filter,t):(0,p._r)(null==r||null===(n=r.products)||void 0===n?void 0:n.filter,t))}})))}},53352:(e,t,r)=>{r.d(t,{Z:()=>a});const a=(0,r(50049).vU)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"Ansible Automation Services Catalog can be added by following the"},platformsDocTitle:{id:"platforms.doc.title",defaultMessage:"Ansible Automation Platform 2.0 BETA documentation"},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summary"},platformDetails:{id:"platforms.details",defaultMessage:"Details"},platformActivity:{id:"platforms.activity",defaultMessage:"Activity"},cloudConnectorId:{id:"platform.cloudConnectorId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}})},57464:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(30624),n=r.n(a),o=r(65832),l=r(334),i=r(74798);const s=function(e){var t=e.tabItems,r=(0,i.Z)().push,a=(0,l.useLocation)(),s=a.pathname,c=a.search,u=t.find((function(e){var t=e.name;return s.includes(t)}));return n().createElement(o.Tabs,{activeKey:u?u.eventKey:0,onSelect:function(e,a){return r({pathname:t[a].name,search:c})}},t.map((function(e){return n().createElement(o.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},91703:(e,t,r)=>{r.d(t,{Z:()=>C,H:()=>x});var a=r(30624),n=r.n(a),o=r(45697),l=r.n(o),i=r(65832),s=r(29163),c=r(81778),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=s.ZP.div(h||(h=u(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),f=(0,s.ZP)(i.TextInput)(y||(y=u(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),m=s.ZP.span(b||(b=u(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),g=(0,s.ZP)(c.CloseIcon)(O||(O=u(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),v=(0,s.ZP)(c.SearchIcon)(T||(T=u(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"])));var h,y,b,O,T,E=r(15811),P=r(57464),M=r(20697),L=r(18682),I=function(){return(I=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},_=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},Z=function(e){var t=e.title,r=_(e,["title"]);return n().createElement(i.Button,I({},r),t)};Z.propTypes={title:l().string.isRequired};var w=function(e){var t=e.title,r=_(e,["title"]);return n().createElement(i.Label,I({},r),t)};w.propTypes={title:l().string.isRequired};var S={TopToolbar:E.Z,TopToolbarTitle:E.y,Toolbar:function(e){var t=e.children,r=_(e,["children"]);return n().createElement(L.N_,I({className:"pf-u-p-0"},r),n().createElement(i.ToolbarContent,{className:"pf-u-pl-0"},t))},ToolbarGroup:L.ED,ToolbarItem:i.ToolbarItem,FilterToolbarItem:function(e){var t=e.searchValue,r=void 0===t?"":t,a=e.onFilterChange,o=e.placeholder,l=e.isClearable,s=void 0!==l&&l,c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["searchValue","onFilterChange","placeholder","isClearable"]);return n().createElement(i.ToolbarItem,null,n().createElement(d,null,n().createElement(f,p({id:"toolbar-filter",placeholder:o,value:r,type:"text",onChange:a,"aria-label":o},c)),n().createElement(m,null,s&&r&&n().createElement(g,{width:"16",height:"16",onClick:function(){return a("")}})||n().createElement(v,null))))},Link:M.Z,Level:i.Level,LevelItem:i.LevelItem,Button:Z,AppTabs:P.Z,Label:w},x={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs",LABEL:"Label"};const C=S},66678:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(30624),n=r.n(a),o=r(91703),l=function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},s=(0,a.createContext)({}),c=function(e){var t=e.component,r=i(e,["component"]);return n().createElement(s.Consumer,null,(function(e){var a=e.componentMapper,o="string"==typeof t?a&&a[t]:t;return o?n().createElement(o,l({},r)):null}))},u=function(e){return e.map((function(e){var t=e.hidden,r=e.fields,a=e.key,o=i(e,["hidden","fields","key"]);return t?null:r?n().createElement(c,l({key:a},o),u(r)):n().createElement(c,l({key:a},o))}))};const p=function(e){var t=e.schema,r=e.componentMapper,a=void 0===r?o.Z:r;return n().createElement(s.Provider,{value:{render:u,componentMapper:a}},u(t.fields))}}}]);
//# sourceMappingURL=../sourcemaps/products.9545f7d95dd34fb9d594fbe0a02a6524.js.map