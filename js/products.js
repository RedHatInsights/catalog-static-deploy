(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{375:function(e,t,n){"use strict";var r=n(24),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),p=n(90),f=n(164),d=n(165),m=n(395),b=n(437),h=n(41),y=n.n(h),v=n(42),g=n(384),O=n.n(g),E=n(168),P=n.n(E),T=n(410);function j(){var e=y()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return j=function(){return e},e}function _(){var e=y()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return _=function(){return e},e}function I(){var e=y()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return I=function(){return e},e}function w(){var e=y()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return w=function(){return e},e}function D(){var e=y()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return D=function(){return e},e}var k=v.b.div(D()),C=Object(v.b)(T.TextInput)(w()),N=v.b.span(I()),L=Object(v.b)(P.a)(_()),R=Object(v.b)(O.a)(j()),x=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,o=e.isClearable;return(u.a.createElement(m.ToolbarItem,null,u.a.createElement(k,null,u.a.createElement(C,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),u.a.createElement(N,null,o&&t&&u.a.createElement(L,{width:"16",height:"16",onClick:function(){return n("")}})||u.a.createElement(R,null)))))};x.propTypes={onFilterChange:l.a.func.isRequired,placeholder:l.a.string,searchValue:l.a.string,isClearable:l.a.bool},x.defaultProps={searchValue:"",isClearable:!1};var S=x,F=n(390),A=n(391),B=n(91),q=n(380);n.d(t,"b",(function(){return M}));var V=function(e){var t=e.title,n=c()(e,["title"]);return(u.a.createElement(p.Button,n,t))};V.propTypes={title:l.a.string.isRequired};var G={TopToolbar:F.b,TopToolbarTitle:F.a,Toolbar:function(e){var t=o()({},e);return(u.a.createElement(q.a,o()({className:"pf-u-pr-lg"},t)))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:m.ToolbarItem,FilterToolbarItem:S,Link:B.a,Level:f.Level,LevelItem:d.LevelItem,Button:V,AppTabs:A.a},M={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=G},376:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(411),c=n.n(a),i=n(16);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return s({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?s({},e,{search:void 0}):e}(n)):t.push(n)}})}},377:function(e,t,n){"use strict";var r=n(402);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},379:function(e,t,n){"use strict";var r=n(24),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),p=n(402),f=n(167),d=n(51),m=function(e){var t=e.meta,n=t.limit,r=t.count,a=t.offset,i=e.apiProps,s=e.apiRequest,l=e.className,m=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return u.a.createElement("div",{className:l},u.a.createElement(f.Pagination,o()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return s(i,{offset:a,limit:t})},page:Object(d.b)(n,a),onSetPage:function(e,t,r){var o={offset:Object(d.c)(t,n),limit:n},a=function(){return s(i,o)};return r?Object(p.a)(a,250)():a()},direction:"down",isCompact:m},b)))};m.propTypes={meta:l.a.shape({count:l.a.number,limit:l.a.number.isRequired,offset:l.a.number.isRequired}),apiRequest:l.a.func.isRequired,apiProps:l.a.any,className:l.a.string,isCompact:l.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(41),o=n.n(r),a=n(42),c=n(423),i=n(164);function u(){var e=o()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return u=function(){return e},e}function s(){var e=o()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return s=function(){return e},e}function l(){var e=o()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return l=function(){return e},e}var p=Object(a.b)(c.Toolbar)(l()),f=a.b.div(s()),d=Object(a.b)(i.Level)(u())},382:function(e,t,n){"use strict";n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return E})),n.d(t,"h",(function(){return P})),n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return j})),n.d(t,"m",(function(){return _})),n.d(t,"j",(function(){return I})),n.d(t,"k",(function(){return w})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return k})),n.d(t,"l",(function(){return C})),n.d(t,"n",(function(){return N})),n.d(t,"i",(function(){return L}));var r=n(40),o=n.n(r),a=n(1),c=n.n(a),i=n(26),u=n.n(i),s=n(0),l=n.n(s),p=n(558),f=n(44),d=n(3),m=n(389),b=n(51);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a,t=e.filter,n=u()(e,["filter"]);return{type:d.p,meta:{filter:t},payload:m.l(t,n)}},g=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return e(v.apply(void 0,t))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return{type:d.r,meta:{filter:e},payload:m.k(t.limit,t.offset,e)}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return{type:d.s,meta:{filter:t.filter},payload:m.j(e,t)}},P=function(e){return{type:d.o,payload:m.f(e)}},T=function(e,t){return function(n){return n({type:d.b,payload:y({},e,{isDisabled:!0,isTemporary:!0})}),n({type:d.a,payload:m.a(y({},e),t).then((function(){return n(v())})).catch((function(e){throw n({type:d.I}),e})),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding portfolio",description:"Portfolio ".concat(e.name," was added successfully.")}}}})}},j=function(e,t){return{type:d.c,payload:m.b(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding products",description:"Products were successfully added to portfolio."}}}}},_=function(e){return function(t,n){return t({type:d.Y,payload:e}),m.q(e,{getState:n}).then((function(){return t(v())})).then((function(){return t({type:f.ADD_NOTIFICATION,payload:{dismissable:!0,variant:"success",title:"Success updating portfolio",description:"The portfolio was updated successfully."}})})).catch((function(e){throw t({type:d.I}),e})).catch((function(e){return t({type:"".concat(d.Y,"_REJECTED"),payload:e})}))}},I=function(e){return function(t,n){return t({type:d.e,payload:e}),t({type:d.D,payload:m.m(e).then((function(r){var o=r.restore_key;t({type:f.ADD_NOTIFICATION,payload:{variant:"success",title:"Success removing portfolio",dismissable:!0,description:l.a.createElement("span",null,"The portfolio was removed successfully. You can ",l.a.createElement("a",{href:"#",onClick:function(n){n.preventDefault(),t(function(e,t){return function(n,r){return n({type:f.CLEAR_NOTIFICATIONS}),m.p(e,t).then((function(e){return n({type:f.ADD_NOTIFICATION,payload:{variant:"success",dismissable:!0,title:"Portfolio ".concat(e.name," has been restored")}}),n(g(r().portfolioReducer.portfolios.meta))}))}}(e,o))}},"Undo")," this action if this was a mistake.")}});var a=n().portfolioReducer.portfolios,c=a.meta,i=a.data;return t(g(y({},c,{offset:0===i.length?0:c.offset})))})).catch((function(e){throw t({type:d.I}),e}))})}},w=function(e,t){return function(n,r){n({type:"".concat(d.E,"_PENDING")});var o=r().portfolioReducer,a=o.portfolioItems.meta,c=o.selectedPortfolio.id;return m.n(e).then((function(e){return n(E(c,{offset:0,limit:a.limit,filter:""})).then((function(){return e}))})).then((function(r){return n({type:f.ADD_NOTIFICATION,payload:{variant:"success",title:"Products removed",dismissable:!0,description:l.a.createElement(p.a,{id:"portfolio.remove-portfolio-items",defaultMessage:"You have removed {count, number} {count, plural,\n            one {product}\n            other {products}\n          } from the {portfolioName} portfolio. {undo} if this was a mistake.",values:{count:e.length,portfolioName:t,undo:l.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),n(function(e,t){return function(n){return n({type:"".concat(d.G,"_PENDING")}),m.o(e).then((function(){return n({type:"".concat(d.G,"_FULFILLED")})})).then((function(){return n({type:f.CLEAR_NOTIFICATIONS})})).then((function(){return n(E(t))})).then((function(){return n({type:f.ADD_NOTIFICATION,payload:{variant:"success",dismissable:!0,title:"Products have been restored"}})})).catch((function(e){return n({type:"".concat(d.G,"_REJECTED"),payload:e})}))}}(r,c))}},"Undo")}})}})})).then((function(){return n({type:"".concat(d.E,"_FULFILLED")})})).catch((function(e){return n({type:"".concat(d.E,"_REJECTED"),payload:e})}))}},D=function(e){return function(t){return t({type:"COPY_PORTFOLIO_PENDING"}),m.c(e).then((function(e){return t({type:"COPY_PORTFOLIO_FULFILLED"}),t({type:f.ADD_NOTIFICATION,payload:{variant:"success",title:"You have successfully copied a portfolio",description:"".concat(e.name," has been copied."),dismissable:!0}}),e})).catch((function(e){return t({type:"COPY_PORTFOLIO_REJECTED",payload:e})}))}},k=function(e,t,n){return function(r){return m.d(e,t).then((function(e){return r({type:f.ADD_NOTIFICATION,payload:{variant:"success",title:"You have successfully copied a product",description:"".concat(e.name," has been copied into ").concat(n.name),dismissable:!0}}),e})).catch((function(e){return r({type:"COPY_PORTFOLIO_ITEM_REJECTED",payload:e})}))}},C=function(){return{type:d.F}},N=function(e){return function(t,n){return t({type:d.Z,payload:e}),m.r(e,{getState:n}).then((function(){return t({type:d.W,payload:e}),e})).then((function(e){return t({type:f.ADD_NOTIFICATION,payload:{variant:"success",title:'Product "'.concat(e.name,'" was successfully updated'),dismissable:!0}})})).catch((function(e){throw t({type:d.H}),e})).catch((function(e){return t({type:"".concat(d.Z,"_REJECTED"),payload:e})}))}},L=function(e){return function(t,n){return t({type:"".concat(d.J,"_PENDING")}),m.i(e).then((function(e){var r=o()(e,2),a=r[0],c=r[1];return t({type:"".concat(d.J,"_FULFILLED"),payload:{portfolioItem:a,portfolio:n().portfolioReducer.selectedPortfolio,source:c}})}))}}},383:function(e,t,n){"use strict";var r=n(24),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),p=n(91),f=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?u.a.createElement(p.a,o()({pathname:n},r),t):t};f.propTypes={pathname:l.a.string,children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]).isRequired},t.a=f},385:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return h})),n.d(r,"getPlatformItems",(function(){return y})),n.d(r,"getPlatformInventories",(function(){return v})),n.d(r,"getServiceOffering",(function(){return g}));var o=n(1),a=n.n(o),c=n(3),i=n(40),u=n.n(i),s=n(62),l=n(11),p=n(51);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(s.a)(),m=Object(s.b)(),b=function(){return m.post("".concat(l.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return u()(e,1)[0].sources}))},h=function(e){return d.get("".concat(l.h,"/sources/").concat(e))},y=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(l.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(l.i,"/service_offerings"))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?d.get("".concat(l.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(l.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([d.get("".concat(l.i,"/service_offerings/").concat(e)),d.get("".concat(l.h,"/sources/").concat(t)).then((function(e){return d.get("".concat(l.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=u()(e,2);return{service:t[0],source:t[1]}}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return T})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return I}));var P=function(){return function(e){return e((function(e){return e({type:"".concat(c.k,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.k,"_REJECTED"),payload:t})}))}))}},T=function(e,t,n){return{type:c.n,payload:y(e,t,n),meta:E({platformId:e,filter:t},n)}},j=function(e){return{type:c.j,payload:h(e)}},_=function(e,t,n){return{type:c.l,payload:v(e,t,n)}},I=function(){return{type:c.v,payload:g.apply(r,arguments)}}},386:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(419),c=n(420),i=n(34),u=n(383);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:o.a.createElement(a.Breadcrumb,null,e.map((function(t,n){var r=t.title,a=t.pathname,i=t.searchParams;return(o.a.createElement(u.a,{pathname:e.length!==n+1?a:void 0,searchParams:i,nav:!0,exact:!0,key:a,className:"pf-c-breadcrumb__item"},o.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r)))})))}},389:function(e,t,n){"use strict";n.d(t,"l",(function(){return P})),n.d(t,"k",(function(){return T})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return _})),n.d(t,"j",(function(){return I})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return k})),n.d(t,"q",(function(){return N})),n.d(t,"m",(function(){return R})),n.d(t,"n",(function(){return A})),n.d(t,"r",(function(){return q})),n.d(t,"e",(function(){return G})),n.d(t,"o",(function(){return M})),n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return J})),n.d(t,"s",(function(){return Y})),n.d(t,"i",(function(){return K})),n.d(t,"g",(function(){return z})),n.d(t,"p",(function(){return H}));var r=n(46),o=n.n(r),a=n(26),c=n.n(a),i=n(63),u=n.n(i),s=n(20),l=n.n(s),p=n(1),f=n.n(p),d=n(62),m=n(11),b=n(92),h=n(51);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Object(d.a)(),O=Object(d.e)(),E=Object(d.f)();function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a,n=t.limit,r=t.offset;return g.get("".concat(m.c,"/portfolios?filter[name][contains_i]=").concat(e,"&limit=").concat(n,"&offset=").concat(r))}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return g.get("".concat(m.c,"/portfolio_items?filter[name][contains_i]=").concat(n,"&limit=").concat(e,"&offset=").concat(t)).then((function(e){var t=e.data.reduce((function(e,t,n){return t.portfolio_id?v({},e,f()({},t.portfolio_id,e[t.portfolio_id]?[].concat(l()(e[t.portfolio_id]),[n]):[n])):e}),{});return g.get("".concat(m.c,"/portfolios?").concat(Object.keys(t).map((function(e){return"filter[id][]=".concat(e)})).join("&"))).then((function(n){var r=n.data;return{portfolioItems:e,portfolioReference:t,portfolios:r}}))})).then((function(e){var t=e.portfolioItems,n=e.portfolioReference;return e.portfolios.forEach((function(e){var r=e.id,o=e.name;return n[r]&&n[r].forEach((function(e){t.data[e].portfolioName=o}))})),t}))}function j(e){return g.get("".concat(m.c,"/portfolio_items/").concat(e))}function _(e){return O.showPortfolio(e)}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a,n=t.limit,r=t.offset,o=t.filter,a=void 0===o?"":o;return g.get("".concat(m.c,"/portfolios/").concat(e,"/portfolio_items?filter[name][contains_i]=").concat(a,"&limit=").concat(n,"&offset=").concat(r))}function w(e,t){return D.apply(this,arguments)}function D(){return(D=u()(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.createPortfolio(t);case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",r);case 5:if(!(n&&n.length>0)){e.next=7;break}return e.abrupt("return",k(r,n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return C.apply(this,arguments)}function C(){return(C=u()(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(n.map((function(e){return E.createPortfolioItem({portfolio_id:t,service_offering_ref:e})}))));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return L.apply(this,arguments)}function L(){return(L=u()(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,a=c()(t,["id"]),e.next=3,O.updatePortfolio(r,Object(b.c)(a,"Portfolio",n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return x.apply(this,arguments)}function x(){return(x=u()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.destroyPortfolio(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return F.apply(this,arguments)}function F(){return(F=u()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.destroyPortfolioItem(t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return B.apply(this,arguments)}function B(){return(B=u()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=u()(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:return n=e.sent,r=n.restore_key,e.abrupt("return",{portfolioItemId:t,restoreKey:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return V.apply(this,arguments)}function V(){return(V=u()(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,a=c()(t,["id"]),e.next=3,E.updatePortfolioItem(r,Object(b.c)(a,"PortfolioItem",n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.get("".concat(m.c,"/portfolios"),{params:{filter:{name:e}}})}var M=function(e){return Promise.all(e.map((function(e){var t=e.portfolioItemId,n=e.restoreKey;return E.unDeletePortfolioItem(t,{restore_key:n})})))},U=function(e){return O.postCopyPortfolio(e)},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E.postCopyPortfolioItem(e,t)},Y=function(e,t,n){var r=new FormData;return r.append("content",t,t.name),n?g.patch("".concat(m.c,"/icons/").concat(n),r):(r.append("portfolio_item_id",e),g.post("".concat(m.c,"/icons"),r,{headers:{accept:"application/json","Content-Type":"multipart/form-data; boundary=".concat(r._boundary)}}))},K=function(e){return Promise.all([g.get("".concat(m.c,"/portfolio_items/").concat(e.portfolioItem)),g.get("".concat(m.h,"/sources/").concat(e.source)).catch((function(e){if(404===e.status)return{object:"platform",notFound:!0};throw e}))])},z=function(e,t){return e.selectedPortfolio&&e.selectedPortfolio.id===t?e.selectedPortfolio:e.portfolios.data.find((function(e){return e.id===t}))},H=function(e,t){return g.post("".concat(m.c,"/portfolios/").concat(e,"/undelete"),{restore_key:t})}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(24),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),p=n(165),f=n(23),d=n(43),m=n(436),b=n(52),h=n(386),y=n(380),v=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,a=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return(u.a.createElement(y.c,o()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":"")},a),r&&u.a.createElement("div",{className:"pf-u-mb-md"}," ",u.a.createElement(h.a,null)),t))};v.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,paddingBottom:l.a.bool,breadcrumbs:l.a.bool,breadcrumbsSpacing:l.a.bool},v.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=v;var g=function(e){var t=e.title,n=e.description,r=e.children,a=e.noData,s=c()(e,["title","description","children","noData"]);return(u.a.createElement(i.Fragment,null,u.a.createElement(y.b,o()({className:Object(m.a)({"pf-u-mb-lg":!a})},s),u.a.createElement(p.LevelItem,null,u.a.createElement(d.TextContent,{className:"top-toolbar-title"},u.a.createElement(f.Text,{component:f.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&u.a.createElement(f.Text,{className:"top-toolbar-title-description",component:f.TextVariants.p},n))),r)))};g.propTypes={title:l.a.node,description:l.a.node,children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]),noData:l.a.bool},g.defaultProps={title:u.a.createElement(b.h,null)}},391:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(424),u=n(425),s=n(16),l=n(376),p=function(e){var t=e.tabItems,n=Object(l.a)().push,r=Object(s.h)(),a=r.pathname,c=r.search,p=t.find((function(e){var t=e.name;return a.includes(t)}));return o.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return o.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},392:function(e,t,n){"use strict";var r=n(24),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),p=n(375),f=Object(i.createContext)(),d=function(e){var t=e.component,n=c()(e,["component"]);return(u.a.createElement(f.Consumer,null,(function(e){var r=e.componentMapper,o="string"==typeof t?r[t]:t;return u.a.createElement(o,n)})))};d.propTypes={component:l.a.oneOfType([l.a.string,l.a.node,l.a.func,l.a.element]).isRequired};var m=function e(t){return t.hidden?null:t.map((function(t){var n=t.hidden,r=t.fields,a=t.key,i=c()(t,["hidden","fields","key"]);return n?null:r?u.a.createElement(d,o()({key:a},i),e(r)):u.a.createElement(d,o()({key:a},i))}))},b=function(e){var t=e.schema,n=e.componentMapper;return(u.a.createElement(f.Provider,{value:{render:m,componentMapper:n}},m(t.fields)))};b.propTypes={schema:l.a.shape({fields:l.a.array.isRequired}).isRequired,componentMapper:l.a.object},b.defaultProps={componentMapper:p.a},t.a=b},394:function(e,t,n){"use strict";var r=n(40),o=n.n(r),a=n(41),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),p=n(42),f=n(34),d=n(52),m=n(407),b=n.n(m),h=n(416);function y(){var e=c()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return y=function(){return e},e}var v=Object(p.b)(h.LazyLoadImage)(y(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function g(){var e=c()(["\n  display: inline-block;\n  height: ",";\n"]);return g=function(){return e},e}var O=p.b.div(g(),(function(e){var t=e.height;return"".concat(t,"px")})),E=function(e){var t=e.src,n=e.height,r=e.sourceId,a=Object(i.useState)(!1),c=o()(a,2),s=c[0],l=c[1],p=Object(i.useState)(!1),m=o()(p,2),h=m[0],y=m[1],g=Object(f.useSelector)((function(e){return e.platformReducer.platformIconMapping})),E=r?g[r]:b.a;return u.a.createElement(O,{height:n},!s&&u.a.createElement(d.c,{height:n}),u.a.createElement(v,{threshold:2e3,delayTime:0,hidden:!s,height:s?n:0,onError:function(){return y(!0)},onLoad:function(){return l(!0)},src:!t||h?E:t}))};E.propTypes={src:l.a.string,platformId:l.a.string,style:l.a.object,height:l.a.number,sourceId:l.a.string},E.defaultProps={style:{},height:40};t.a=E},398:function(e,t,n){"use strict";var r=n(41),o=n.n(r);function a(){var e=o()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return a=function(){return e},e}var c=n(42).b.div(a());t.a=c},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(90),u=n(99),s=n(100),l=n(101),p=n(439),f=n(23),d=n(43),m=n(91),b=function(e){var t=e.title,n=e.Icon,r=e.description,a=e.PrimaryAction,c=e.renderDescription;return(o.a.createElement("div",{className:"pf-u-mt-xl"},o.a.createElement(u.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},o.a.createElement(s.EmptyStateIcon,{icon:n}),o.a.createElement(d.TextContent,null,o.a.createElement(f.Text,{component:f.TextVariants.h1},t)),o.a.createElement(l.EmptyStateBody,null,r,c()),o.a.createElement(p.EmptyStateSecondaryActions,null,a&&o.a.createElement(a,null)))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string.isRequired,PrimaryAction:c.a.any,renderDescription:c.a.func},t.b=b;var h=function(e){var t=e.url,n=e.label,r=e.hasPermission;return void 0!==r&&r&&o.a.createElement(m.a,{pathname:t,preserveSearch:!0},o.a.createElement(i.Button,{variant:"primary"},n))};h.propTypes={url:c.a.string.isRequired,label:c.a.string.isRequired}},403:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(41),o=n.n(r),a=n(42),c=n(65),i=n(98);function u(){var e=o()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return u=function(){return e},e}function s(){var e=o()(["\n  height: 330px;\n  position: relative;\n"]);return s=function(){return e},e}var l=Object(a.b)(c.Card)(s()),p=Object(a.b)(i.GalleryItem)(u(),(function(e){return e.isDisabled?"block":"none"}))},404:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(405),u=n(23),s=n(102),l=n(52),p=function(){return o.a.createElement("div",null,o.a.createElement(u.Text,{component:u.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,n=e.items,r=e.renderEmptyState;return t?o.a.createElement(l.b,null):0===n.length?r?r():o.a.createElement(p,null):o.a.createElement(i.Section,{type:"content"},o.a.createElement(s.Gallery,{gutter:"md",className:"content-gallery"},n))};f.propTypes={isLoading:c.a.bool,items:c.a.array,renderEmptyState:c.a.func},t.a=f},407:function(e,t,n){e.exports=n.p+"fonts/card-icon-default.svg"},408:function(e,t,n){"use strict";var r=n(26),o=n.n(r),a=n(41),c=n.n(a),i=n(0),u=n.n(i),s=n(42),l=n(2),p=n.n(l);function f(){var e=c()(["\n  overflow: hidden;\n"]);return f=function(){return e},e}var d=s.b.div(f()),m=function(e){var t=e.toDisplay,n=void 0===t?[]:t,r=o()(e,["toDisplay"]);return n.map((function(e){return u.a.createElement(d,{key:"card-prop-".concat(e)},r[e])}))};m.propTypes={toDisplay:p.a.arrayOf(p.a.oneOfType([p.a.string,p.a.node,p.a.arrayOf(p.a.node)]))},m.defaultProps={toDisplay:[]},t.a=m},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(41),o=n.n(r),a=n(42),c=n(66);function i(){var e=o()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0 24px 24px;\n"]);return i=function(){return e},e}var u=Object(a.b)(c.CardBody)(i())},433:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(434),u=function(e){var t=e.handleCheck,n=e.isChecked,r=e.id;return(o.a.createElement(i.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:n,onChange:t,"aria-label":"card checkbox",id:r}))};u.propTypes={handleCheck:c.a.func,isChecked:c.a.bool,id:c.a.string},t.a=u},435:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(24),c=n.n(a),i=n(26),u=n.n(i),s=n(0),l=n.n(s),p=n(2),f=n.n(p),d=n(23),m=n(43),b=n(408),h=n(383),y=n(398),v=n(409),g=function(e){var t=e.name,n=(e.display_name,e.distributor),r=e.pathname,o=e.searchParams,a=e.preserveSearch,i=e.portfolioName,p=u()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return(l.a.createElement(v.a,null,l.a.createElement(m.TextContent,null,l.a.createElement(h.a,{pathname:r,searchParams:o,preserveSearch:a},l.a.createElement(d.Text,{component:d.TextVariants.h3,title:t},l.a.createElement(y.a,null,t))),n&&l.a.createElement(d.Text,{component:d.TextVariants.small},n),i&&l.a.createElement(s.Fragment,null,l.a.createElement(d.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),l.a.createElement(d.Text,null,i))),l.a.createElement(b.a,c()({toDisplay:[p.description?"description":"long_description"]},p))))};g.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(o()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=g},438:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(1),o=n.n(r),a=n(26),c=n.n(a),i=n(375);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.groupName,n=e.hidden,r=void 0!==n&&n,o=c()(e,["groupName","hidden"]);return{component:i.b.TOOLBAR_GROUP,key:"".concat(t,"/single-toolbar-item-group"),fields:r?[]:[{component:i.b.TOOLBAR_ITEM,key:"".concat(t,"/single-toolbar-item"),fields:[o]}]}},p=function(e){var t=e.pathname,n=e.preserveSearch,r=c()(e,["pathname","preserveSearch"]);return{component:i.b.LINK,pathname:t,preserveSearch:n,key:"".concat(r.key,"/button-link"),isDisabled:r.isDisabled,fields:[s({component:i.b.BUTTON},r)]}}},482:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(417),u=n(418),s=n(164),l=n(11),p=n(394),f=n(433),d=n(435),m=n(403),b=function(e){return o.a.createElement(m.b,{isDisabled:e.removeInProgress&&e.isSelected},o.a.createElement(m.a,null,o.a.createElement(i.CardHeader,{className:"card_header"},o.a.createElement(s.Level,null,o.a.createElement(p.a,{src:"".concat(l.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&o.a.createElement(f.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),o.a.createElement(d.a,e),o.a.createElement(u.CardFooter,null)))};b.propTypes={id:c.a.string,platformId:c.a.string,service_offering_source_ref:c.a.string,isSelectable:c.a.bool,isSelected:c.a.bool,onSelect:c.a.func,orderUrl:c.a.string,removeInProgress:c.a.bool,portfolio_id:c.a.string},t.a=b},673:function(e,t,n){"use strict";n.r(t);var r=n(24),o=n.n(r),a=n(40),c=n.n(a),i=n(1),u=n.n(i),s=n(0),l=n.n(s),p=n(34),f=n(446),d=n.n(f),m=n(384),b=n.n(m),h=n(382),y=n(92),v=n(482),g=n(375),O=n(438),E=n(379),P=function(e){var t=e.meta,n=e.fetchProducts,r=e.isLoading,o=e.filterProps,a=o.searchValue,c=o.onFilterChange,i=o.placeholder;return{fields:[{component:g.b.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:g.b.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:g.b.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:g.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[Object(O.b)({groupName:"filter-group",component:g.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:a,onFilterChange:c,placeholder:i,isClearable:!0})]},{component:g.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:E.a,key:"products-pagination",meta:t,apiProps:a,apiRequest:n,isDisabled:r,isCompact:!0}]:[]}]}]}]}},T=n(392),j=n(51),_=n(404),I=n(385),w=n(377),D=n(399),k=n(90),C=n(145),N=n(53);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=Object(w.a)((function(e,t,n){n(!0),t(Object(h.e)(e,j.a)).then((function(){return n(!1)}))}),1e3),S={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},F=function(e,t){switch(t.type){case"setFetching":return R({},e,{isFetching:t.payload});case"setFilterValue":return R({},e,{filterValue:t.payload});case"setFilteringFlag":return R({},e,{isFiltering:t.payload})}return e};t.default=function(){var e=Object(s.useContext)(C.a).release,t=Object(s.useReducer)(F,S),n=c()(t,2),r=n[0],a=r.isFetching,i=r.filterValue,u=r.isFiltering,f=n[1],m=Object(p.useDispatch)(),g=Object(p.useSelector)((function(e){return e.portfolioReducer.portfolioItems})),O=g.data,w=g.meta;Object(s.useEffect)((function(){Promise.all([m(Object(h.e)(void 0,j.a)),m(Object(I.c)())]).then((function(){return f({type:"setFetching",payload:!1})})),Object(y.d)(),insights.chrome.appNavClick({id:"products",secondaryNav:!0})}),[]);var L=function(e){f({type:"setFilterValue",payload:e}),x(e,m,(function(e){return f({type:"setFilteringFlag",payload:e})}))},R=O.map((function(e){return l.a.createElement(v.a,o()({key:e.id,pathname:e.portfolio_id&&N.t},(n=(t=e).portfolio_id,r=t.id,a=t.service_offering_source_ref,n&&r&&a?{pathname:n&&N.t,searchParams:{portfolio:n,"portfolio-item":r,source:a}}:{}),e,{toDisplay:[]}));var t,n,r,a})),A={PrimaryAction:w.noData?function(){return l.a.createElement("a",{href:"".concat(e,"settings/sources/new")},l.a.createElement(k.Button,{variant:"primary"},"Add source"))}:function(){return l.a.createElement(k.Button,{variant:"link",onClick:function(){return L("")}},"Clear all filters")},title:w.noData?"No products yet":"No results found",description:w.noData?"Configure a source to add products into portfolios.":"No results match the filter criteria. Remove all filters or clear all filters to show results.",Icon:w.noData?d.a:b.a};return l.a.createElement("div",null,l.a.createElement(T.a,{schema:P({filterProps:{searchValue:i,onFilterChange:L,placeholder:"Filter by product..."},title:"Products",isLoading:u||a,meta:w,fetchProducts:function(){return m(h.e.apply(void 0,arguments))}})}),l.a.createElement(_.a,{isLoading:u||a,items:R,renderEmptyState:function(){return l.a.createElement(D.b,A)}}),w.count>0&&l.a.createElement("div",{className:"pf-u-p-lg global-primary-background content-layout"},l.a.createElement(E.a,{dropDirection:"up",meta:w,apiRequest:function(){return m(h.e.apply(void 0,arguments))}})))}}}]);
//# sourceMappingURL=../sourcemaps/products.js.map