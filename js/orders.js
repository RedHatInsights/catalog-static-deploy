(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{376:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(20),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(91),f=n(165),d=n(166),m=n(396),b=n(438),y=n(31),h=n.n(y),v=n(32),g=n(385),O=n.n(g),E=n(169),j=n.n(E),P=n(411);function T(){var e=h()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return T=function(){return e},e}function _(){var e=h()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return _=function(){return e},e}function w(){var e=h()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return w=function(){return e},e}function I(){var e=h()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return I=function(){return e},e}function L(){var e=h()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return L=function(){return e},e}var D=v.b.div(L()),F=Object(v.b)(P.TextInput)(I()),N=v.b.span(w()),R=Object(v.b)(j.a)(_()),x=Object(v.b)(O.a)(T()),C=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,a=e.isClearable;return(l.a.createElement(m.ToolbarItem,null,l.a.createElement(D,null,l.a.createElement(F,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),l.a.createElement(N,null,a&&t&&l.a.createElement(R,{width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(x,null)))))};C.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},C.defaultProps={searchValue:"",isClearable:!1};var k=C,S=n(391),q=n(392),B=n(92),A=n(381);n.d(t,"b",(function(){return M}));var V=function(e){var t=e.title,n=c()(e,["title"]);return(l.a.createElement(p.Button,n,t))};V.propTypes={title:s.a.string.isRequired};var G={TopToolbar:S.b,TopToolbarTitle:S.a,Toolbar:function(e){var t=a()({},e);return(l.a.createElement(A.a,a()({className:"pf-u-pr-lg"},t)))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:m.ToolbarItem,FilterToolbarItem:k,Link:B.a,Level:f.Level,LevelItem:d.LevelItem,Button:V,AppTabs:q.a},M={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=G},377:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(412),c=n.n(o),i=n(14);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return u({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?u({},e,{search:void 0}):e}(n)):t.push(n)}})}},378:function(e,t,n){"use strict";var r=n(403);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},380:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(20),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(403),f=n(168),d=n(52),m=function(e){var t=e.meta,n=t.limit,r=t.count,o=t.offset,i=e.apiProps,u=e.apiRequest,s=e.className,m=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:s},l.a.createElement(f.Pagination,a()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return u(i,{offset:o,limit:t})},page:Object(d.b)(n,o),onSetPage:function(e,t,r){var a={offset:Object(d.c)(t,n),limit:n},o=function(){return u(i,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:m},b)))};m.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(31),a=n.n(r),o=n(32),c=n(424),i=n(165);function l(){var e=a()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return l=function(){return e},e}function u(){var e=a()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return u=function(){return e},e}function s(){var e=a()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return s=function(){return e},e}var p=Object(o.b)(c.Toolbar)(s()),f=o.b.div(u()),d=Object(o.b)(i.Level)(l())},384:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(20),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(92),f=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?l.a.createElement(p.a,a()({pathname:n},r),t):t};f.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=f},386:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return y})),n.d(r,"getPlatformItems",(function(){return h})),n.d(r,"getPlatformInventories",(function(){return v})),n.d(r,"getServiceOffering",(function(){return g}));var a=n(1),o=n.n(a),c=n(3),i=n(37),l=n.n(i),u=n(63),s=n(11),p=n(52);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(u.a)(),m=Object(u.b)(),b=function(){return m.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},y=function(e){return d.get("".concat(s.h,"/sources/").concat(e))},h=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(s.i,"/service_offerings"))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?d.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(s.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([d.get("".concat(s.i,"/service_offerings/").concat(e)),d.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return d.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return P})),n.d(t,"d",(function(){return T})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return w}));var j=function(){return function(e){return e((function(e){return e({type:"".concat(c.k,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.k,"_REJECTED"),payload:t})}))}))}},P=function(e,t,n){return{type:c.n,payload:h(e,t,n),meta:E({platformId:e,filter:t},n)}},T=function(e){return{type:c.j,payload:y(e)}},_=function(e,t,n){return{type:c.l,payload:v(e,t,n)}},w=function(){return{type:c.v,payload:g.apply(r,arguments)}}},387:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(420),c=n(421),i=n(38),l=n(384);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(t,n){var r=t.title,o=t.pathname,i=t.searchParams;return(a.a.createElement(l.a,{pathname:e.length!==n+1?o:void 0,searchParams:i,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r)))})))}},391:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(25),a=n.n(r),o=n(20),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(166),f=n(24),d=n(44),m=n(437),b=n(53),y=n(387),h=n(381),v=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,o=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return(l.a.createElement(h.c,a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":"")},o),r&&l.a.createElement("div",{className:"pf-u-mb-md"}," ",l.a.createElement(y.a,null)),t))};v.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},v.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=v;var g=function(e){var t=e.title,n=e.description,r=e.children,o=e.noData,u=c()(e,["title","description","children","noData"]);return(l.a.createElement(i.Fragment,null,l.a.createElement(h.b,a()({className:Object(m.a)({"pf-u-mb-lg":!o})},u),l.a.createElement(p.LevelItem,null,l.a.createElement(d.TextContent,{className:"top-toolbar-title"},l.a.createElement(f.Text,{component:f.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&l.a.createElement(f.Text,{className:"top-toolbar-title-description",component:f.TextVariants.p},n))),r)))};g.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},g.defaultProps={title:l.a.createElement(b.h,null)}},392:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(425),l=n(426),u=n(14),s=n(377),p=function(e){var t=e.tabItems,n=Object(s.a)().push,r=Object(u.h)(),o=r.pathname,c=r.search,p=t.find((function(e){var t=e.name;return o.includes(t)}));return a.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return a.a.createElement(l.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},393:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(20),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(376),f=Object(i.createContext)(),d=function(e){var t=e.component,n=c()(e,["component"]);return(l.a.createElement(f.Consumer,null,(function(e){var r=e.componentMapper,a="string"==typeof t?r[t]:t;return l.a.createElement(a,n)})))};d.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var m=function e(t){return t.hidden?null:t.map((function(t){var n=t.hidden,r=t.fields,o=t.key,i=c()(t,["hidden","fields","key"]);return n?null:r?l.a.createElement(d,a()({key:o},i),e(r)):l.a.createElement(d,a()({key:o},i))}))},b=function(e){var t=e.schema,n=e.componentMapper;return(l.a.createElement(f.Provider,{value:{render:m,componentMapper:n}},m(t.fields)))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},t.a=b},395:function(e,t,n){"use strict";var r=n(37),a=n.n(r),o=n(31),c=n.n(o),i=n(0),l=n.n(i),u=n(2),s=n.n(u),p=n(32),f=n(38),d=n(53),m=n(408),b=n.n(m),y=n(417);function h(){var e=c()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return h=function(){return e},e}var v=Object(p.b)(y.LazyLoadImage)(h(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function g(){var e=c()(["\n  display: inline-block;\n  height: ",";\n"]);return g=function(){return e},e}var O=p.b.div(g(),(function(e){var t=e.height;return"".concat(t,"px")})),E=function(e){var t=e.src,n=e.height,r=e.sourceId,o=Object(i.useState)(!1),c=a()(o,2),u=c[0],s=c[1],p=Object(i.useState)(!1),m=a()(p,2),y=m[0],h=m[1],g=Object(f.useSelector)((function(e){return e.platformReducer.platformIconMapping})),E=r?g[r]:b.a;return l.a.createElement(O,{height:n},!u&&l.a.createElement(d.c,{height:n}),l.a.createElement(v,{threshold:2e3,delayTime:0,hidden:!u,height:u?n:0,onError:function(){return h(!0)},onLoad:function(){return s(!0)},src:!t||y?E:t}))};E.propTypes={src:s.a.string,platformId:s.a.string,style:s.a.object,height:s.a.number,sourceId:s.a.string},E.defaultProps={style:{},height:40};t.a=E},408:function(e,t,n){e.exports=n.p+"fonts/card-icon-default.svg"},433:function(e,t,n){"use strict";var r=n(20),a=n.n(r),o=n(37),c=n.n(o),i=n(1),l=n.n(i),u=n(0),s=n.n(u),p=n(45),f=n(3),d=n(47),m=n.n(d),b=n(64),y=n.n(b),h=n(63),v=n(11),g=n(52);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=Object(h.c)(),P=(Object(h.d)(),Object(h.f)()),T=(Object(h.h)(),Object(h.a)());function _(e){return P.listServicePlans(e)}function w(e){return I.apply(this,arguments)}function I(){return(I=y()(m.a.mark((function e(t){var n,r,o,c,i,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.service_parameters,r=n.providerControlParameters,o=a()(n,["providerControlParameters"]),c=a()(t,["service_parameters"]),e.next=3,j.createOrder();case 3:return i=e.sent,(l={}).count=1,l=E({},l,{},c,{service_parameters:o,provider_control_parameters:r||{}}),e.next=9,j.addToOrder(i.id,l);case 9:return e.abrupt("return",j.submitOrder(i.id));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){return T.get("".concat(v.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},D=function(e){return T.get("".concat(v.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))};var F=n(2),N=n.n(F),R=n(21),x=n(54),C=function(e){var t=e.id,n=e.dispatch;return(s.a.createElement(u.Fragment,null,"You can track the progress of Order # ",t," in your"," ",s.a.createElement(R.b,{onClick:function(){return n(Object(p.clearNotifications)())},to:x.k},"Orders")," ","page."))};C.propTypes={id:N.a.string.isRequired,dispatch:N.a.func.isRequired};var k=C;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"e",(function(){return B})),n.d(t,"f",(function(){return A})),n.d(t,"a",(function(){return V})),n.d(t,"d",(function(){return G})),n.d(t,"c",(function(){return M})),n.d(t,"b",(function(){return J}));var B=function(e){return{type:f.w,payload:_(e)}},A=function(e){return function(t){return t({type:f.T,payload:w(e).then((function(e){var n=e.id;return t(Object(p.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:s.a.createElement(k,{id:n,dispatch:t}),dismissable:!0}))}))})}},V=function(e){return function(t,n){t({type:"".concat(f.d,"_PENDING")});var r=n().orderReducer.orderDetail;return function(e){return j.cancelOrder(e)}(e).then((function(){return r.order.state="Canceled",r.approvalRequest&&r.approvalRequest.length>0&&(r.approvalRequest[0].state="canceled"),t({type:f.O,payload:q({},r)}),r})).then((function(e){return t(Object(p.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(f.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(f.d,"_REJECTED"),payload:e})}))}},G=function(e,t){return function(n){var r=Object.entries(e).filter((function(e){var t=c()(e,2)[1];return t&&t.length>0})).map((function(e){var t=c()(e,2),n=t[0],r=t[1];return Array.isArray(r)?r.map((function(e){return"filter[".concat(n,"][]=").concat(e)})).join("&"):"filter[".concat(n,"][contains_i]=").concat(r)})).join("&");return n({type:"".concat(f.h,"_PENDING")}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.a;return T.get("".concat(v.c,"/orders?").concat(e,"&limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return L(e.data.map((function(e){return e.id}))).then((function(t){return D(t.data.map((function(e){return e.portfolio_item_id}))).then((function(n){return E({portfolioItems:n},e,{data:e.data.map((function(e){return E({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))}(r,t).then((function(e){var t=e.portfolioItems,o=a()(e,["portfolioItems"]);return n({type:f.P,payload:t}),n({type:"".concat(f.h,"_FULFILLED"),meta:{filter:r},payload:o})})).catch((function(e){return n({type:"".concat(f.h,"_REJECTED"),payload:e})}))}},M=function(e){return function(t){return t({type:"".concat(f.O,"_PENDING")}),function(e){return Promise.all([T.get("".concat(v.c,"/orders/").concat(e.order)),T.get("".concat(v.c,"/order_items/").concat(e["order-item"])),T.get("".concat(v.c,"/portfolio_items/").concat(e["portfolio-item"])).catch((function(e){if(404===e.status)return{object:"Portfolio item",notFound:!0};throw e})),T.get("".concat(v.h,"/sources/").concat(e.platform)).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),T.get("".concat(v.c,"/order_items/").concat(e["order-item"],"/progress_messages")),T.get("".concat(v.c,"/portfolios/").concat(e.portfolio)).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e})),T.get("".concat(v.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var n=c()(e,7),r=n[0],a=n[1],o=n[2],i=n[3],l=n[4],u=n[5],s=n[6];return t({type:"".concat(f.O,"_FULFILLED"),payload:{order:r,orderItem:a,portfolioItem:o,platform:i,progressMessages:l,portfolio:u,approvalRequest:s}})})).catch((function(e){return t({type:"".concat(f.O,"_REJECTED"),payload:e})}))}},J=function(e){return function(t){return t({type:"".concat(f.f,"_PENDING")}),function(e){return T.get("".concat(v.c,"/order_items/").concat(e,"/approval_requests"))}(e).then((function(e){return t({type:"".concat(f.f,"_FULFILLED"),payload:e}),e})).catch((function(e){return t({type:"".concat(f.f,"_REJECTED"),payload:e})}))}}},672:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(550),c=n(393),i=n(376),l=function(){return{fields:[{component:i.b.TOP_TOOLBAR,className:"orders bg-fill pf-u-p-lg",key:"orders-toolbar",fields:[{component:i.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},u=n(37),s=n.n(u),p=n(1),f=n.n(p),d=n(38),m=n(78),b=n(46),y=n(39),h=n(95),v=n(56),g=n(100),O=n(101),E=n(102),j=n(479),P=n(440),T=n(91),_=n(406),w=n(644),I=n(655),L=n(656),D=n(385),F=n.n(D),N=n(433),R=n(386),x=n(53),C=n(2),k=n.n(C),S=n(130),q=n(125),B=n(129),A=n(128),V=n(165),G=n(166),M=n(415),J=n(416),U=n(24),K=n(44),z=n(97),Y=n(180),H=n.n(Y),Q=n(395),W=n(11),X=function(e){var t=e.orderItems;return t[0]&&"".concat(W.c,"/portfolio_items/").concat(t[0].portfolio_item_id,"/icon")},Z=function(e,t){var n=e.orderItems,r=e.id,a=n[0]&&t.find((function(e){var t=e.id;return n[0].portfolio_item_id===t}));return a?a.name:"Order ".concat(r)},$=n(92),ee=n(54),te=Object(r.memo)((function(e){var t=e.item,n=Object(d.useSelector)((function(e){var n,r,a,o=e.portfolioReducer.portfolioItems.data,c=(n=o,r=t.orderItems,(a=r[0]&&n.find((function(e){var t=e.id;return r[0].portfolio_item_id===t})))?{orderPlatform:a.service_offering_source_ref,orderPortfolio:a.portfolio_id}:{});return{orderPlatform:c.orderPlatform,orderPortfolio:c.orderPortfolio,orderName:Z(t,o)}})),r=n.orderPlatform,o=n.orderPortfolio,c=n.orderName,i=t.orderItems[0]&&t.orderItems[0]||{},l={order:t.id,"order-item":i.id,"portfolio-item":i.portfolio_item_id,platform:r,portfolio:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(q.DataListItem,{"aria-labelledby":"".concat(t.id,"-expand"),className:"data-list-expand-fix"},a.a.createElement(A.DataListItemRow,null,a.a.createElement(B.DataListItemCells,{dataListCells:[a.a.createElement(S.DataListCell,{key:"1"},a.a.createElement(M.Split,{gutter:"sm"},a.a.createElement(J.SplitItem,null,a.a.createElement(Q.a,{height:60,src:X(t),sourceId:r})),a.a.createElement(J.SplitItem,{isFilled:!0},a.a.createElement(K.TextContent,null,a.a.createElement(b.Grid,{gutter:"sm",className:"pf-u-gg-md"},a.a.createElement(y.GridItem,null,a.a.createElement(V.Level,null,a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.h5},a.a.createElement($.a,{pathname:ee.m,searchParams:l},c," # ",t.id))),a.a.createElement(G.LevelItem,null,a.a.createElement($.a,{pathname:ee.l,searchParams:l},"Failed"===t.state&&a.a.createElement(H.a,{className:"pf-u-mr-sm icon-danger-fill"}),t.state)))),a.a.createElement(y.GridItem,null,a.a.createElement(V.Level,null,a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.small},"Ordered ",a.a.createElement(z.DateFormat,{date:t.created_at,variant:"relative"}))),a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.small},"Ordered by ",t.owner)),a.a.createElement(G.LevelItem,null,a.a.createElement(U.Text,{className:"pf-u-mb-0",component:U.TextVariants.small},"Last updated ",a.a.createElement(z.DateFormat,{date:t.orderItems[0]&&t.orderItems[0].updated_at,variant:"relative"}))))))))))]}))))}),(function(e,t){return e.id===t.id}));te.propTypes={item:k.a.object.isRequired};var ne=te,re=n(380),ae=n(378),oe=n(52);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=Object(ae.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe.a,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;r(!0),n(Object(N.d)(e,t)).then((function(){return r(!1)}))}),1e3),ue={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""}},se=function(e,t){switch(t.type){case"setFetching":return ie({},e,{isFetching:t.payload});case"setFilterValue":return ie({},e,{filters:(n=t.payload,r=e.filterType,a=e.filters,ie({},a,f()({},r,n)))});case"replaceFilterChip":return ie({},e,{filters:t.payload});case"setFilteringFlag":return ie({},e,{isFiltering:t.payload});case"setFilterType":return ie({},e,{filterType:t.payload})}var n,r,a;return e},pe=function(){var e=Object(r.useReducer)(se,ue),t=s()(e,2),n=t[0],o=n.isFetching,c=n.isFiltering,i=n.filterType,l=n.filters,u=t[1],p=Object(d.useSelector)((function(e){return e.orderReducer.orders})),D=p.data,C=p.meta,k=Object(d.useDispatch)();Object(r.useEffect)((function(){u({type:"setFetching",payload:!0}),Promise.all([k(Object(N.d)(l,C)),k(Object(R.c)())]).then((function(){return u({type:"setFetching",payload:!1})}))}),[]);var S=function(e,t){return u({type:"setFetching",payload:!0}),k(Object(N.d)(l,t)).then((function(){return u({type:"setFetching",payload:!1})})).catch((function(){return u({type:"setFetching",payload:!1})}))},q=function(e){u({type:"setFilterValue",payload:e}),le(ie({},l,f()({},i,e)),C,k,(function(e){return u({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(b.Grid,{gutter:"md"},a.a.createElement(y.GridItem,null,a.a.createElement(_.Section,{type:"content"},!C.noData&&a.a.createElement(w.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(l).filter((function(e){var t=s()(e,2)[1];return t&&t.length>0})).map((function(e){var t=s()(e,2),n=t[0],r=t[1];return{category:n,type:n,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,n){var r=s()(t,1)[0];if(n)return u({type:"replaceFilterChip",payload:ue.filters}),le(ue.filters,C,k,(function(e){return u({type:"setFilteringFlag",payload:e})}));var a=ie({},l);"state"===r.type?a[r.type]=a[r.type].filter((function(e){return e!==r.chips[0].name})):a[r.type]="",u({type:"replaceFilterChip",payload:a}),le(a,C,k,(function(e){return u({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return u({type:"setFilterType",payload:t})},value:i,items:[{filterValues:{items:[{value:"Failed",label:"Failed"},{value:"Completed",label:"Completed"},{value:"Approval Pending",label:"Approval Pending"}],value:l.state,onChange:function(e,t){return q(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:l.owner,onChange:function(e,t){return q(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(re.a,{isDisabled:o||c,apiRequest:S,meta:C,isCompact:!0})}),a.a.createElement(m.DataList,{"aria-label":"order-list"},c||o?a.a.createElement(x.d,null):D.length>0?D.map((function(e,t){return a.a.createElement(ne,{key:e.id,index:t,item:e})})):a.a.createElement(I.EmptyTable,null,a.a.createElement(v.Bullseye,null,a.a.createElement(g.EmptyState,null,a.a.createElement(v.Bullseye,null,a.a.createElement(O.EmptyStateIcon,{icon:F.a})),a.a.createElement(h.Title,{size:"lg"},C.noData?"No orders":"No results found"),a.a.createElement(E.EmptyStateBody,null,C.noData?"No orders have been created.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),a.a.createElement(P.EmptyStateSecondaryActions,null,!C.noData&&a.a.createElement(T.Button,{variant:"link",onClick:function(){u({type:"setFilteringFlag",payload:!0}),q("")}},"Clear all filters")))))),a.a.createElement(L.TableToolbar,null,a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(j.Flex,{className:"example-border",breakpointMods:[{modifier:"justify-content-flex-end"}]},C.count>0&&a.a.createElement(re.a,{className:"pf-u-mt-0",isDisabled:o||c,apiRequest:S,meta:C})))))))};t.default=function(){return Object(r.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(c.a,{schema:l()}),a.a.createElement(pe,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders.js.map