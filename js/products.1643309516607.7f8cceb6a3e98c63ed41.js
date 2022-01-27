"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[2893],{24774:(e,t,r)=>{t.a=void 0;const n=r(21988),a=n.__importStar(r(30624)),o=r(38296),l=n.__importDefault(r(86192));t.a=e=>{var{hasGutter:t,className:r="",children:i=null}=e,s=n.__rest(e,["hasGutter","className","children"]);return a.createElement("div",Object.assign({},s,{className:o.css(l.default.level,t&&l.default.modifiers.gutter,r)}),i)},t.a.displayName="Level"},2112:(e,t,r)=>{t.MS={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.R0=r(35183).createIcon(t.MS),t.ZP=t.R0},39173:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(30624),a=r.n(n),o=r(45697),l=r.n(o),i=r(94184),s=r.n(i),c=r(60485),u=function(e){var t=e.className,r=e.title,n=s()(t);return a().createElement(c.D,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"}," ",r," ")};const p=u;u.propTypes={title:l().node.isRequired,className:l().string}},1797:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var n=r(87462),a=r(29439),o=r(4942),l=r(30624),i=r.n(l),s=r(14494),c=r(2112),u=r(48794),p=r(89231),f=r(77503),d=r(63035),m=r(59797),g=r(91703),v=r(77172);const h=function(e){var t=e.meta,r=e.fetchProducts,n=e.isLoading,a=e.filterProps,o=a.searchValue,l=a.onFilterChange,i=a.placeholder;return{fields:[{component:g.H.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:g.H.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:g.H.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:g.H.TOOLBAR,key:"main-portfolio-toolbar",fields:[{groupName:"filter-group",component:g.H.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:o,onFilterChange:l,placeholder:i,isClearable:!0}]},{component:g.H.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:v.Z,key:"products-pagination",meta:t,apiProps:o,apiRequest:r,isDisabled:n,isCompact:!0}]:[]}]}]}]}};var y=r(66678),b=r(7247),O=r(59837),T=r(11608),E=r(49827),P=r(81624),M=r(33188),L=r(6202),I=r(20018),Z=r(63540),w=r(63853),x=r(36722),_=r(92183),C=r(44058),F=r(72510),R=r(97881);const S=(0,r(50049).vU)({addSource:{id:"products.empty.add-source",defaultMessage:"Add source"},configureSource:{id:"products.empty.configure-source",defaultMessage:"Configure a source and add products into portfolios."},title:{id:"products.toolbar.title",defaultMessage:"Products"}});var A=r(53352),j=r(23349);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=(0,P.Z)((function(e,t,r){r(!0),t((0,d.$W)()?(0,f._r)(e,b.he):(0,p._r)(e,b.he)).then((function(){return r(!1)}))}),1e3),V={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},N=function(e,t){switch(t.type){case"setFetching":return D(D({},e),{},{isFetching:t.payload});case"setFilterValue":return D(D({},e),{},{filterValue:t.payload});case"setFilteringFlag":return D(D({},e),{},{isFiltering:t.payload})}return e};const H=function(){var e,t=(0,j.Z)(),r=(0,C.Z)(),o=(0,l.useContext)(w.Z).release,g=(0,l.useReducer)(N,D(D({},V),{},{filterValue:(null==r||null===(e=r.products)||void 0===e?void 0:e.filter)||""})),b=(0,a.Z)(g,2),P=b[0],k=P.isFetching,H=P.filterValue,z=P.isFiltering,W=b[1],G=(0,l.useContext)(F.Z).userIdentity.identity.user.is_org_admin,K=(0,s.I0)(),q=(0,s.v9)((function(e){return e.portfolioReducer.portfolioItems})),U=q.meta||{count:q.count},$=q.data||q.results;(0,l.useEffect)((function(){var e,t;Promise.all([K((0,d.$W)()?(0,f._r)(null==r||null===(e=r.products)||void 0===e?void 0:e.filter,null==r?void 0:r.products):(0,p._r)(null==r||null===(t=r.products)||void 0===t?void 0:t.filter,null==r?void 0:r.products)),K((0,d.$W)()?(0,E.dw)():(0,T.dw)())]).then((function(){return W({type:"setFetching",payload:!1})})),(0,d.k3)()}),[]);var J=function(e){W({type:"setFilterValue",payload:e}),B(e,K,(function(e){return W({type:"setFilteringFlag",payload:e})}))},Y=$.map((function(e){return i().createElement(m.Z,(0,n.Z)({key:e.id,pathname:e.portfolio_id&&x.YJ},(r=(t=e).portfolio_id,a=t.id,o=t.service_offering_source_ref,r&&a&&o?{pathname:r&&x.YJ,searchParams:{portfolio:r,"portfolio-item":a,source:o,"from-products":"true"}}:{}),e,{toDisplay:[]}));var t,r,a,o})),Q={PrimaryAction:U.noData?function(){return G&&i().createElement("a",{href:"".concat(o,"settings/sources/new")},i().createElement(L.Button,{ouiaId:"add-source",variant:"primary"},t(S.addSource)))}:function(){return i().createElement(L.Button,{ouiaId:"clear-filter",variant:"link",onClick:function(){return J("")}},t(R.Z.clearFilters))},title:U.noData?t(R.Z.noProducts):t(R.Z.noResults),renderDescription:function(){return i().createElement(l.Fragment,null,i().createElement(I.TextContent,null,i().createElement(Z.Text,{component:Z.TextVariants.p},U.noData?t(S.configureSource):t(R.Z.noResultsDescription)),G?i().createElement(Z.Text,{component:Z.TextVariants.p},t(A.Z.connectSource,{a:function(e){return i().createElement(l.Fragment,null,i().createElement("a",{href:"".concat(document.baseURI,"settings/sources")},e))}})):i().createElement(Z.Text,null,t(A.Z.contactAdmin))))},Icon:U.noData?c.ZP:u.ZP};return i().createElement(l.Fragment,null,i().createElement(y.Z,{schema:h({filterProps:{searchValue:H,onFilterChange:J,placeholder:t(R.Z.filterByProduct)},title:t(S.title),isLoading:z||k,meta:U,fetchProducts:(0,d.$W)()?function(){return K(f._r.apply(void 0,arguments))}:function(){return K(p._r.apply(void 0,arguments))}})}),i().createElement(O.Z,{isLoading:z||k,items:Y,renderEmptyState:function(){return i().createElement(M.Z,Q)}}),U.count>0&&i().createElement(_.Z,null,i().createElement(v.Z,{dropDirection:"up",meta:U,apiRequest:function(e,t){var n,a;return K((0,d.$W)()?(0,f._r)(null==r||null===(n=r.products)||void 0===n?void 0:n.filter,t):(0,p._r)(null==r||null===(a=r.products)||void 0===a?void 0:a.filter,t))}})))}},53352:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(50049).vU)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"Ansible Automation Services Catalog can be added by following the"},platformsDocTitle:{id:"platforms.doc.title",defaultMessage:"Ansible Automation Platform 2.0 BETA documentation"},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summary"},platformDetails:{id:"platforms.details",defaultMessage:"Details"},platformActivity:{id:"platforms.activity",defaultMessage:"Activity"},cloudConnectorId:{id:"platform.cloudConnectorId",defaultMessage:"RedHat Connect Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"},refreshTooltip:{id:"platforms.refreshTooltip",defaultMessage:"Refresh platform"},lastRefreshMessage:{id:"platforms.lastRefreshMessage",defaultMessage:"Last refresh message"},availabilityMessage:{id:"platforms.availabilityMessage",defaultMessage:"Availability message"}})},57464:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(30624),a=r.n(n),o=r(65832),l=r(334),i=r(74798);const s=function(e){var t=e.tabItems,r=(0,i.Z)().push,n=(0,l.useLocation)(),s=n.pathname,c=n.search,u=t.find((function(e){var t=e.name;return s.includes(t)}));return a().createElement(o.Tabs,{activeKey:u?u.eventKey:0,onSelect:function(e,n){return r({pathname:t[n].name,search:c})}},t.map((function(e){return a().createElement(o.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},91703:(e,t,r)=>{r.d(t,{Z:()=>F,H:()=>C});var n=r(30624),a=r.n(n),o=r(45697),l=r.n(o),i=r(65832),s=r(29163),c=r(81778),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=s.ZP.div(h||(h=u(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),d=(0,s.ZP)(i.TextInput)(y||(y=u(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),m=s.ZP.span(b||(b=u(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),g=(0,s.ZP)(c.CloseIcon)(O||(O=u(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),v=(0,s.ZP)(c.SearchIcon)(T||(T=u(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"])));var h,y,b,O,T,E=r(15811),P=r(57464),M=r(20697),L=r(18682),I=function(){return(I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},w=function(e){var t=e.title,r=Z(e,["title"]);return a().createElement(i.Button,I({},r),t)};w.propTypes={title:l().string.isRequired};var x=function(e){var t=e.title,r=Z(e,["title"]);return a().createElement(i.Label,I({},r),t)};x.propTypes={title:l().string.isRequired};var _={TopToolbar:E.Z,TopToolbarTitle:E.y,Toolbar:function(e){var t=e.children,r=Z(e,["children"]);return a().createElement(L.N_,I({className:"pf-u-p-0"},r),a().createElement(i.ToolbarContent,{className:"pf-u-pl-0"},t))},ToolbarGroup:L.ED,ToolbarItem:i.ToolbarItem,FilterToolbarItem:function(e){var t=e.searchValue,r=void 0===t?"":t,n=e.onFilterChange,o=e.placeholder,l=e.isClearable,s=void 0!==l&&l,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["searchValue","onFilterChange","placeholder","isClearable"]);return a().createElement(i.ToolbarItem,null,a().createElement(f,null,a().createElement(d,p({id:"toolbar-filter",placeholder:o,value:r,type:"text",onChange:n,"aria-label":o},c)),a().createElement(m,null,s&&r&&a().createElement(g,{width:"16",height:"16",onClick:function(){return n("")}})||a().createElement(v,null))))},Link:M.Z,Level:i.Level,LevelItem:i.LevelItem,Button:w,AppTabs:P.Z,Label:x},C={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs",LABEL:"Label"};const F=_},66678:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(30624),a=r.n(n),o=r(91703),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},s=(0,n.createContext)({}),c=function(e){var t=e.component,r=i(e,["component"]);return a().createElement(s.Consumer,null,(function(e){var n=e.componentMapper,o="string"==typeof t?n&&n[t]:t;return o?a().createElement(o,l({},r)):null}))},u=function(e){return e.map((function(e){var t=e.hidden,r=e.fields,n=e.key,o=i(e,["hidden","fields","key"]);return t?null:r?a().createElement(c,l({key:n},o),u(r)):a().createElement(c,l({key:n},o))}))};const p=function(e){var t=e.schema,r=e.componentMapper,n=void 0===r?o.Z:r;return a().createElement(s.Provider,{value:{render:u,componentMapper:n}},u(t.fields))}}}]);
//# sourceMappingURL=../sourcemaps/products.faa550f9ad1bf033f190a707b67fcfa5.js.map