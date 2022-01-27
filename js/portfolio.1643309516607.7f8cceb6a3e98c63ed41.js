"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[5824],{5866:(e,t,r)=>{t.gk={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},t.fP=r(35183).createIcon(t.gk),t.ZP=t.fP},39173:(e,t,r)=>{r.d(t,{Z:()=>p});var o=r(30624),n=r.n(o),a=r(45697),l=r.n(a),i=r(94184),c=r.n(i),u=r(60485),s=function(e){var t=e.className,r=e.title,o=c()(t);return n().createElement(u.D,{headingLevel:"h1",size:"2xl",className:o,"widget-type":"InsightsPageHeaderTitle"}," ",r," ")};const p=s;s.propTypes={title:l().node.isRequired,className:l().string}},7002:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var o=r(29439),n=r(4942),a=r(30624),l=r.n(a),i=r(14494),c=r(334),u=r(45697),s=r.n(u),p=r(63035),f=function(e,t,r){if(r||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))},d=r(11608),m=r(49827),h=r(89231),y=r(77503),v=r(81624),b=r(47786),g=r(52579),P=r(36722),O=r(9456),I=r(94002),E=r(20240),T=r(44058),w=r(66678),R=r(91703),L=r(21976);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e){var t=e.fromProducts,r=e.title,o=e.description;return l().createElement(w.Z,{schema:{fields:[{component:R.H.TOP_TOOLBAR,breadcrumbs:!t,key:"portfolio-top-toolbar",fields:[{component:L.Z,key:"back-to-products",hidden:!t},{component:R.H.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",title:r,description:o}]}]}})};k.propTypes={title:s().node,description:s().node,fromProducts:s().bool};var x=(0,a.lazy)((function(){return Promise.all([r.e(2679),r.e(3144),r.e(3059),r.e(5142),r.e(3452)]).then(r.bind(r,3452))})),A=(0,a.lazy)((function(){return Promise.all([r.e(2679),r.e(3144),r.e(5432),r.e(3814)]).then(r.bind(r,81166))})),F=(0,a.lazy)((function(){return Promise.all([r.e(2679),r.e(4026),r.e(7781)]).then(r.bind(r,55251))})),S={selectedItems:[],firstSelectedProduct:void 0,removeInProgress:!1,filterValue:"",copyInProgress:!1,isFetching:!0,isFiltering:!1},C=(0,v.Z)((function(e,t,r,o){r(!0),t((0,p.$W)()?(0,y.cP)(e,o):(0,h.cP)(e,o)).then((function(){return r(!1)}))}),1e3),B=function(e,t){var r,o,n=t.type,a=t.payload,l=void 0===a?{}:a;return{selectItem:Z(Z({},e),{},{selectedItems:(r=e.selectedItems,o=l.selectedItem,r.includes(o)?f(f([],r.slice(0,r.indexOf(o)),!0),r.slice(r.indexOf(o)+1),!0):f(f([],r,!0),[o],!1)),firstSelectedProduct:l.product||e.firstSelectedProduct}),setRemoveInProgress:Z(Z({},e),{},{removeInProgress:l}),removeSuccessful:Z(Z({},e),{},{selectedItems:[],removeInProgress:!1}),setFilterValue:Z(Z({},e),{},{filterValue:l,isFiltering:!0}),setCopyInProgress:Z(Z({},e),{},{copyInProgress:l}),setIsFetching:Z(Z({},e),{},{isFetching:l}),setFilteringFlag:Z(Z({},e),{},{isFiltering:l})}[n]};const _=function(){var e,t,r,n,u=(0,T.Z)(),s=(0,a.useReducer)(B,Z(Z({},S),{},{filterValue:(null==u||null===(e=u.portfolioItems)||void 0===e?void 0:e.filter)||""})),f=(0,o.Z)(s,2),v=f[0],w=f[1],R=(0,b.Z)(["portfolio","from-products"]),L=(0,o.Z)(R,1)[0],j=L.portfolio,_=L["from-products"],V=(0,c.useRouteMatch)(P.hT).url,W=(0,c.useHistory)(),N=(0,i.I0)(),z=(0,E.Z)(),M=(0,i.v9)((function(e){var t=e.portfolioReducer;return{portfolio:t.selectedPortfolio,portfolioItem:t.portfolioItem,meta:t.portfolioItems.meta}})),D=M.portfolio,$=M.portfolioItem,K=M.meta,q=(0,g.Z)([D,$]),G=function(e){return w({type:"setIsFetching",payload:!0}),Promise.all([N((0,p.$W)()?(0,m.dw)():(0,d.dw)()),N((0,p.$W)()?(0,y.al)(e):(0,h.al)(e)),N((0,p.$W)()?(0,y.cP)(e,null==u?void 0:u.portfolioItems):(0,h.cP)(e,null==u?void 0:u.portfolioItems))]).then((function(e){return z.current&&w({type:"setIsFetching",payload:!1}),e})).catch((function(){return w({type:"setIsFetching",payload:!1})}))};(0,a.useEffect)((function(){return G(j),(0,p.k3)(),function(){q(),N((0,p.$W)()?(0,y.So)():(0,h.So)())}}),[]),(0,a.useEffect)((function(){!0!==z.current||v.isFetching||W.location.pathname!==P.hT||(G(j),(0,p.k3)())}),[j,W.location.pathname]);var H={portfolioRoute:V,addProductsRoute:"".concat(V,"/add-products"),editPortfolioRoute:"".concat(V,"/edit-portfolio"),removePortfolioRoute:"".concat(V,"/remove-portfolio"),sharePortfolioRoute:"".concat(V,"/share-portfolio"),workflowPortfolioRoute:"".concat(V,"/edit-workflow"),portfolioItemRoute:"".concat(V,"/portfolio-item")};return!1===(null===(t=D.metadata)||void 0===t||null===(r=t.user_capabilities)||void 0===r?void 0:r.show)?l().createElement(O.M,null):l().createElement(a.Suspense,{fallback:l().createElement(k,{fromProducts:"true"===_,title:D.name,description:D.description})},l().createElement(c.Switch,null,l().createElement(I.Z,{path:H.addProductsRoute,userCapabilities:null===(n=D.metadata)||void 0===n?void 0:n.user_capabilities,requiredCapabilities:"update"},l().createElement(F,{portfolioRoute:H.portfolioRoute})),l().createElement(c.Route,{path:H.portfolioItemRoute},l().createElement(A,{portfolioLoaded:!(null!=v&&v.isFetching)})),l().createElement(c.Route,{path:H.portfolioRoute},l().createElement(x,{routes:H,fromProducts:"true"===_,handleFilterChange:function(e){w({type:"setFilterValue",payload:e}),C(j,N,(function(e){return w({type:"setFilteringFlag",payload:e})}),Z(Z({},K),{},{offset:0,filter:e}))},removeProducts:function(e){return function(e){w({type:"setRemoveInProgress",payload:!0}),N((0,p.$W)()?(0,y.qy)(e,D.name,v.firstSelectedProduct):(0,h.qy)(e,D.name,v.firstSelectedProduct)).then((function(){return w({type:"removeSucessfull"})})).catch((function(){return w({type:"setRemoveInProgress",payload:!1})}))}(e)},copyPortfolio:function(){return w({type:"setCopyInProgress",payload:!0}),N((0,p.$W)()?(0,y.Yh)(j):(0,h.Yh)(j)).then((function(e){var t=e.id;return W.push({pathname:P.hT,search:"?portfolio=".concat(t)})})).then((function(){return w({type:"setCopyInProgress",payload:!1})})).then((function(){return N((0,p.$W)()?y.eV:h.eV)})).catch((function(){return w({type:"setCopyInProgress",payload:!1})}))},state:v,stateDispatch:w}))))}},20240:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(30624);const n=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e}},21976:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(30624),n=r.n(o),a=r(65832),l=r(5866),i=r(64466),c=r(20697),u=r(23349);const s=function(){var e=(0,u.Z)();return n().createElement("div",{className:"pf-u-mb-md"},n().createElement(l.ZP,{className:"pf-u-mr-sm"}),n().createElement(a.Button,{variant:"link",ouiaId:"back-to-products",component:function(){return n().createElement(c.Z,{pathname:"/products"},e(i.Z.backToProducts))}}))}},57464:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(30624),n=r.n(o),a=r(65832),l=r(334),i=r(74798);const c=function(e){var t=e.tabItems,r=(0,i.Z)().push,o=(0,l.useLocation)(),c=o.pathname,u=o.search,s=t.find((function(e){var t=e.name;return c.includes(t)}));return n().createElement(a.Tabs,{activeKey:s?s.eventKey:0,onSelect:function(e,o){return r({pathname:t[o].name,search:u})}},t.map((function(e){return n().createElement(a.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},91703:(e,t,r)=>{r.d(t,{Z:()=>A,H:()=>x});var o=r(30624),n=r.n(o),a=r(45697),l=r.n(a),i=r(65832),c=r(29163),u=r(81778),s=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},f=c.ZP.div(v||(v=s(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),d=(0,c.ZP)(i.TextInput)(b||(b=s(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),m=c.ZP.span(g||(g=s(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),h=(0,c.ZP)(u.CloseIcon)(P||(P=s(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),y=(0,c.ZP)(u.SearchIcon)(O||(O=s(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"])));var v,b,g,P,O,I=r(15811),E=r(57464),T=r(20697),w=r(18682),R=function(){return(R=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},L=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},j=function(e){var t=e.title,r=L(e,["title"]);return n().createElement(i.Button,R({},r),t)};j.propTypes={title:l().string.isRequired};var Z=function(e){var t=e.title,r=L(e,["title"]);return n().createElement(i.Label,R({},r),t)};Z.propTypes={title:l().string.isRequired};var k={TopToolbar:I.Z,TopToolbarTitle:I.y,Toolbar:function(e){var t=e.children,r=L(e,["children"]);return n().createElement(w.N_,R({className:"pf-u-p-0"},r),n().createElement(i.ToolbarContent,{className:"pf-u-pl-0"},t))},ToolbarGroup:w.ED,ToolbarItem:i.ToolbarItem,FilterToolbarItem:function(e){var t=e.searchValue,r=void 0===t?"":t,o=e.onFilterChange,a=e.placeholder,l=e.isClearable,c=void 0!==l&&l,u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["searchValue","onFilterChange","placeholder","isClearable"]);return n().createElement(i.ToolbarItem,null,n().createElement(f,null,n().createElement(d,p({id:"toolbar-filter",placeholder:a,value:r,type:"text",onChange:o,"aria-label":a},u)),n().createElement(m,null,c&&r&&n().createElement(h,{width:"16",height:"16",onClick:function(){return o("")}})||n().createElement(y,null))))},Link:T.Z,Level:i.Level,LevelItem:i.LevelItem,Button:j,AppTabs:E.Z,Label:Z},x={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs",LABEL:"Label"};const A=k},66678:(e,t,r)=>{r.d(t,{Z:()=>p});var o=r(30624),n=r.n(o),a=r(91703),l=function(){return(l=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},c=(0,o.createContext)({}),u=function(e){var t=e.component,r=i(e,["component"]);return n().createElement(c.Consumer,null,(function(e){var o=e.componentMapper,a="string"==typeof t?o&&o[t]:t;return a?n().createElement(a,l({},r)):null}))},s=function(e){return e.map((function(e){var t=e.hidden,r=e.fields,o=e.key,a=i(e,["hidden","fields","key"]);return t?null:r?n().createElement(u,l({key:o},a),s(r)):n().createElement(u,l({key:o},a))}))};const p=function(e){var t=e.schema,r=e.componentMapper,o=void 0===r?a.Z:r;return n().createElement(c.Provider,{value:{render:s,componentMapper:o}},s(t.fields))}},52579:(e,t,r)=>{r.d(t,{Z:()=>y});var o,n,a=r(30624),l=r(334),i=r(14494),c=r(90060),u=r(36722),s=(u.oQ,{"portfolio-item":["source","portfolio"],"edit-survey":["source","portfolio","portfolio-item"]}),p=((o={})[u.hT]=function(e){return e().portfolioReducer.selectedPortfolio.name},o[u.YJ]=function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name},o[u.PC]=function(){return"Edit survey"},o[u.kp]=function(){return"Add products"},o[u.AG]=function(e){return e().platformReducer.selectedPlatform.name},o[u.rg]=function(e){return e().platformReducer.serviceOffering.service.name},o[u.A5]=function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,o=t.order;return r.name+" # "+o.id},o[u.Kf]=function(){return"Edit product"},o),f=((n={})[u.hT]={pathname:u.oQ,title:"Portfolios",searchParams:{}},n[u.AG]={pathname:u.gw,title:"Platforms",searchParams:{}},n[u.A5]={pathname:u.Xr,title:"Orders",searchParams:{}},n),d=function(){return(d=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},m=function(e,t,r){if(r||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))},h=function(e,t){return void 0===e&&(e=""),void 0===t&&(t={}),function(r,o){if(0===e.length)return r({type:c.EL,payload:[]});var n=[];"/portfolios/portfolio"===e&&n.push("/portfolios"),e.startsWith("/portfolios/portfolio/portfolio-item")&&(n[0]="/portfolios",n[1]="/portfolio",e.startsWith("/portfolios/portfolio/portfolio-item/")&&(n[2]="/portfolio-item")),e.startsWith("/platforms/platform")&&(n[0]="/platforms");var a=(e=e.replace(n[0],"")).replace(/^\//,"").split("/").reduce((function(e,r,a){var l,i,c=""+(a>0&&e[a-1]?e[a-1].pathname:"")+n[a]+"/"+r,u=p[c];if(!u)return e;var h=d(d({},a>0&&(null===(i=e[a-1])||void 0===i?void 0:i.searchParams)),t[r]?((l={})[r]=t[r],l):{});s[r]&&s[r].forEach((function(e){h[e]=t[e]})),f[c]&&(e=[f[c]]);var y=u(o);return y?m(m([],e,!0),[{pathname:c,searchParams:h,title:y}],!1):e}),[]);return a.length>0&&f[a[0].pathname]&&(a=m([f[a[0].pathname]],a,!0)),r({type:c.EL,payload:a})}};const y=function(e){void 0===e&&(e=[]);var t=(0,i.I0)(),r=(0,l.useLocation)(),o=r.pathname,n=r.search;if(0===e.length)return t(h("",{}));var c=new URLSearchParams(n),u={};return c.forEach((function(e,t){u[t]=e})),(0,a.useEffect)((function(){t(h(o,u))}),function(e,t,r){if(r||2===arguments.length)for(var o,n=0,a=t.length;n<a;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}([o],e,!0)),function(){return t(h("",{}))}}}}]);
//# sourceMappingURL=../sourcemaps/portfolio.7200ede839153161a5e73db2ddd9a632.js.map