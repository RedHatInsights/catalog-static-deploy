(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{373:function(e,t,n){"use strict";var r=n(22),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),f=n(89),p=n(162),d=n(163),m=n(393),b=n(435),y=n(41),h=n.n(y),v=n(42),g=n(382),O=n.n(g),E=n(166),P=n.n(E),T=n(408);function j(){var e=h()(["\n  z-index: 1000;\n  fill: #72767b;\n"]);return j=function(){return e},e}function _(){var e=h()(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]);return _=function(){return e},e}function I(){var e=h()(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]);return I=function(){return e},e}function w(){var e=h()(["\n  position: absolute;\n  width: 300px;\n  background: transparent;\n"]);return w=function(){return e},e}function D(){var e=h()(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]);return D=function(){return e},e}var C=v.b.div(D()),k=Object(v.b)(T.TextInput)(w()),N=v.b.span(I()),L=Object(v.b)(P.a)(_()),x=Object(v.b)(O.a)(j()),R=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,o=e.isClearable;return u.a.createElement(m.ToolbarItem,null,u.a.createElement(C,null,u.a.createElement(k,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),u.a.createElement(N,null,o&&t&&u.a.createElement(L,{width:"16",height:"16",onClick:function(){return n("")}})||u.a.createElement(x,null))))};R.propTypes={onFilterChange:l.a.func.isRequired,placeholder:l.a.string,searchValue:l.a.string,isClearable:l.a.bool},R.defaultProps={searchValue:"",isClearable:!1};var S=R,F=n(388),A=n(389),B=n(90),q=n(378);n.d(t,"b",(function(){return M}));var V=function(e){var t=e.title,n=c()(e,["title"]);return u.a.createElement(f.Button,n,t)};V.propTypes={title:l.a.string.isRequired};var G={TopToolbar:F.b,TopToolbarTitle:F.a,Toolbar:function(e){var t=o()({},e);return u.a.createElement(q.a,o()({className:"pf-u-pr-lg"},t))},ToolbarGroup:b.ToolbarGroup,ToolbarItem:m.ToolbarItem,FilterToolbarItem:S,Link:B.a,Level:p.Level,LevelItem:d.LevelItem,Button:V,AppTabs:A.a},M={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=G},374:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(409),c=n.n(a),i=n(25);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return s({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?s({},e,{search:void 0}):e}(n)):t.push(n)}})}},375:function(e,t,n){"use strict";var r=n(400);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},377:function(e,t,n){"use strict";var r=n(22),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),f=n(400),p=n(165),d=n(51),m=function(e){var t=e.meta,n=t.limit,r=t.count,a=t.offset,i=e.apiProps,s=e.apiRequest,l=e.className,m=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return u.a.createElement("div",{className:l},u.a.createElement(p.Pagination,o()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return s(i,{offset:a,limit:t})},page:Object(d.b)(n,a),onSetPage:function(e,t,r){var o={offset:Object(d.c)(t,n),limit:n},a=function(){return s(i,o)};return r?Object(f.a)(a,250)():a()},direction:"down",isCompact:m},b)))};m.propTypes={meta:l.a.shape({count:l.a.number,limit:l.a.number.isRequired,offset:l.a.number.isRequired}),apiRequest:l.a.func.isRequired,apiProps:l.a.any,className:l.a.string,isCompact:l.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(41),o=n.n(r),a=n(42),c=n(421),i=n(162);function u(){var e=o()(["\n  @media screen and (min-width: 768px) {\n    flex-wrap: nowrap;\n  }\n"]);return u=function(){return e},e}function s(){var e=o()(["\n  background-color: #ffffff;\n  .pf-c-breadcrumb__item {\n    .active {\n      color: var(--pf-c-breadcrumb__item--Color);\n      text-decoration: none;\n      pointer-events: none;\n    }\n  }\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  .top-toolbar-title {\n    min-width: 200px;\n  }\n  .top-toolbar-title-description {\n    word-break: break-word;\n  }\n"]);return s=function(){return e},e}function l(){var e=o()(["\n  background-color: #ffffff;\n  h2 {\n    margin-bottom: 0 !important;\n  }\n  position: relative;\n  top: 1px;\n"]);return l=function(){return e},e}var f=Object(a.b)(c.Toolbar)(l()),p=a.b.div(s()),d=Object(a.b)(i.Level)(u())},380:function(e,t,n){"use strict";n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return E})),n.d(t,"h",(function(){return P})),n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return j})),n.d(t,"m",(function(){return _})),n.d(t,"j",(function(){return I})),n.d(t,"k",(function(){return w})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return C})),n.d(t,"l",(function(){return k})),n.d(t,"n",(function(){return N})),n.d(t,"i",(function(){return L}));var r=n(40),o=n.n(r),a=n(1),c=n.n(a),i=n(26),u=n.n(i),s=n(0),l=n.n(s),f=n(556),p=n(44),d=n(3),m=n(387),b=n(51);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.a,t=e.filter,n=u()(e,["filter"]);return{type:d.p,meta:{filter:t},payload:m.l(t,n)}},g=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return e(v.apply(void 0,t))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return{type:d.r,meta:{filter:e},payload:m.k(t.limit,t.offset,e)}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return{type:d.s,meta:{filter:t.filter},payload:m.j(e,t)}},P=function(e){return{type:d.o,payload:m.f(e)}},T=function(e,t){return function(n){return n({type:d.b,payload:h({},e,{isDisabled:!0,isTemporary:!0})}),n({type:d.a,payload:m.a(h({},e),t).then((function(){return n(v())})).catch((function(e){throw n({type:d.I}),e})),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding portfolio",description:"Portfolio ".concat(e.name," was added successfully.")}}}})}},j=function(e,t){return{type:d.c,payload:m.b(e,t),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding products",description:"Products were successfully added to portfolio."}}}}},_=function(e){return function(t,n){return t({type:d.Y,payload:e}),m.q(e,{getState:n}).then((function(){return t(v())})).then((function(){return t({type:p.ADD_NOTIFICATION,payload:{dismissable:!0,variant:"success",title:"Success updating portfolio",description:"The portfolio was updated successfully."}})})).catch((function(e){throw t({type:d.I}),e})).catch((function(e){return t({type:"".concat(d.Y,"_REJECTED"),payload:e})}))}},I=function(e){return function(t,n){return t({type:d.e,payload:e}),t({type:d.D,payload:m.m(e).then((function(r){var o=r.restore_key;t({type:p.ADD_NOTIFICATION,payload:{variant:"success",title:"Success removing portfolio",dismissable:!0,description:l.a.createElement("span",null,"The portfolio was removed successfully. You can ",l.a.createElement("a",{href:"#",onClick:function(n){n.preventDefault(),t(function(e,t){return function(n,r){return n({type:p.CLEAR_NOTIFICATIONS}),m.p(e,t).then((function(e){return n({type:p.ADD_NOTIFICATION,payload:{variant:"success",dismissable:!0,title:"Portfolio ".concat(e.name," has been restored")}}),n(g(r().portfolioReducer.portfolios.meta))}))}}(e,o))}},"Undo")," this action if this was a mistake.")}});var a=n().portfolioReducer.portfolios,c=a.meta,i=a.data;return t(g(h({},c,{offset:0===i.length?0:c.offset})))})).catch((function(e){throw t({type:d.I}),e}))})}},w=function(e,t){return function(n,r){n({type:"".concat(d.E,"_PENDING")});var o=r().portfolioReducer,a=o.portfolioItems.meta,c=o.selectedPortfolio.id;return m.n(e).then((function(e){return n(E(c,{offset:0,limit:a.limit,filter:""})).then((function(){return e}))})).then((function(r){return n({type:p.ADD_NOTIFICATION,payload:{variant:"success",title:"Products removed",dismissable:!0,description:l.a.createElement(f.a,{id:"portfolio.remove-portfolio-items",defaultMessage:"You have removed {count, number} {count, plural,\n            one {product}\n            other {products}\n          } from the {portfolioName} portfolio. {undo} if this was a mistake.",values:{count:e.length,portfolioName:t,undo:l.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),n(function(e,t){return function(n){return n({type:"".concat(d.G,"_PENDING")}),m.o(e).then((function(){return n({type:"".concat(d.G,"_FULFILLED")})})).then((function(){return n({type:p.CLEAR_NOTIFICATIONS})})).then((function(){return n(E(t))})).then((function(){return n({type:p.ADD_NOTIFICATION,payload:{variant:"success",dismissable:!0,title:"Products have been restored"}})})).catch((function(e){return n({type:"".concat(d.G,"_REJECTED"),payload:e})}))}}(r,c))}},"Undo")}})}})})).then((function(){return n({type:"".concat(d.E,"_FULFILLED")})})).catch((function(e){return n({type:"".concat(d.E,"_REJECTED"),payload:e})}))}},D=function(e){return function(t){return t({type:"COPY_PORTFOLIO_PENDING"}),m.c(e).then((function(e){return t({type:"COPY_PORTFOLIO_FULFILLED"}),t({type:p.ADD_NOTIFICATION,payload:{variant:"success",title:"You have successfully copied a portfolio",description:"".concat(e.name," has been copied."),dismissable:!0}}),e})).catch((function(e){return t({type:"COPY_PORTFOLIO_REJECTED",payload:e})}))}},C=function(e,t,n){return function(r){return m.d(e,t).then((function(e){return r({type:p.ADD_NOTIFICATION,payload:{variant:"success",title:"You have successfully copied a product",description:"".concat(e.name," has been copied into ").concat(n.name),dismissable:!0}}),e})).catch((function(e){return r({type:"COPY_PORTFOLIO_ITEM_REJECTED",payload:e})}))}},k=function(){return{type:d.F}},N=function(e){return function(t,n){return t({type:d.Z,payload:e}),m.r(e,{getState:n}).then((function(){return t({type:d.W,payload:e}),e})).then((function(e){return t({type:p.ADD_NOTIFICATION,payload:{variant:"success",title:'Product "'.concat(e.name,'" was successfully updated'),dismissable:!0}})})).catch((function(e){throw t({type:d.H}),e})).catch((function(e){return t({type:"".concat(d.Z,"_REJECTED"),payload:e})}))}},L=function(e){return function(t){return t({type:"".concat(d.J,"_PENDING")}),m.i(e).then((function(e){var n=o()(e,3),r=n[0],a=n[1],c=n[2];return t({type:"".concat(d.J,"_FULFILLED"),payload:{portfolioItem:r,portfolio:a,source:c}})}))}}},381:function(e,t,n){"use strict";var r=n(22),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),f=n(90),p=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?u.a.createElement(f.a,o()({pathname:n},r),t):t};p.propTypes={pathname:l.a.string,children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]).isRequired},t.a=p},383:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return y})),n.d(r,"getPlatformItems",(function(){return h})),n.d(r,"getPlatformInventories",(function(){return v})),n.d(r,"getServiceOffering",(function(){return g}));var o=n(1),a=n.n(o),c=n(3),i=n(40),u=n.n(i),s=n(62),l=n(11),f=n(51);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(s.a)(),m=Object(s.b)(),b=function(){return m.post("".concat(l.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return u()(e,1)[0].sources}))},y=function(e){return d.get("".concat(l.h,"/sources/").concat(e))},h=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(l.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(l.i,"/service_offerings"))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.a;return e?d.get("".concat(l.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):d.get("".concat(l.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([d.get("".concat(l.i,"/service_offerings/").concat(e)),d.get("".concat(l.h,"/sources/").concat(t)).then((function(e){return d.get("".concat(l.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=u()(e,2);return{service:t[0],source:t[1]}}))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return T})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return I}));var P=function(){return function(e){return e((function(e){return e({type:"".concat(c.k,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.k,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.k,"_REJECTED"),payload:t})}))}))}},T=function(e,t,n){return{type:c.n,payload:h(e,t,n),meta:E({platformId:e,filter:t},n)}},j=function(e){return{type:c.j,payload:y(e)}},_=function(e,t,n){return{type:c.l,payload:v(e,t,n)}},I=function(){return{type:c.v,payload:g.apply(r,arguments)}}},384:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(417),c=n(418),i=n(34),u=n(381);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:o.a.createElement(a.Breadcrumb,null,e.map((function(t,n){var r=t.title,a=t.pathname,i=t.searchParams;return o.a.createElement(u.a,{pathname:e.length!==n+1?a:void 0,searchParams:i,nav:!0,exact:!0,key:a,className:"pf-c-breadcrumb__item"},o.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r))})))}},387:function(e,t,n){"use strict";n.d(t,"l",(function(){return O})),n.d(t,"k",(function(){return E})),n.d(t,"h",(function(){return P})),n.d(t,"f",(function(){return T})),n.d(t,"j",(function(){return j})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return I})),n.d(t,"q",(function(){return w})),n.d(t,"m",(function(){return D})),n.d(t,"n",(function(){return k})),n.d(t,"r",(function(){return N})),n.d(t,"e",(function(){return L})),n.d(t,"o",(function(){return x})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return S})),n.d(t,"s",(function(){return F})),n.d(t,"i",(function(){return A})),n.d(t,"g",(function(){return B})),n.d(t,"p",(function(){return q}));var r=n(26),o=n.n(r),a=n(46),c=n.n(a),i=n(18),u=n.n(i),s=n(1),l=n.n(s),f=n(62),p=n(11),d=n(91),m=n(51);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(f.a)(),v=Object(f.e)(),g=Object(f.f)();function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a,n=t.limit,r=t.offset;return h.get("".concat(p.c,"/portfolios?filter[name][contains_i]=").concat(e,"&limit=").concat(n,"&offset=").concat(r))}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return h.get("".concat(p.c,"/portfolio_items?filter[name][contains_i]=").concat(n,"&limit=").concat(e,"&offset=").concat(t)).then((function(e){var t=e.data.reduce((function(e,t,n){return t.portfolio_id?y({},e,l()({},t.portfolio_id,e[t.portfolio_id]?[].concat(u()(e[t.portfolio_id]),[n]):[n])):e}),{});return h.get("".concat(p.c,"/portfolios?").concat(Object.keys(t).map((function(e){return"filter[id][]=".concat(e)})).join("&"))).then((function(n){var r=n.data;return{portfolioItems:e,portfolioReference:t,portfolios:r}}))})).then((function(e){var t=e.portfolioItems,n=e.portfolioReference;return e.portfolios.forEach((function(e){var r=e.id,o=e.name;return n[r].forEach((function(e){t.data[e].portfolioName=o}))})),t}))}function P(e){return h.get("".concat(p.c,"/portfolio_items/").concat(e))}function T(e){return v.showPortfolio(e)}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a,n=t.limit,r=t.offset,o=t.filter,a=void 0===o?"":o;return h.get("".concat(p.c,"/portfolios/").concat(e,"/portfolio_items?filter[name][contains_i]=").concat(a,"&limit=").concat(n,"&offset=").concat(r))}function _(e,t){var n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.awrap(v.createPortfolio(e));case 2:if(n=r.sent){r.next=5;break}return r.abrupt("return",n);case 5:if(!(t&&t.length>0)){r.next=7;break}return r.abrupt("return",I(n,t));case 7:case"end":return r.stop()}}))}function I(e,t){return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(t.map((function(t){return g.createPortfolioItem({portfolio_id:e,service_offering_ref:t})}))));case 1:case"end":return n.stop()}}))}function w(e,t){var n,r;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.id,r=o()(e,["id"]),a.next=3,c.a.awrap(v.updatePortfolio(n,Object(d.c)(r,"Portfolio",t)));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}))}function D(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v.destroyPortfolio(e));case 1:case"end":return t.stop()}}))}function C(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.destroyPortfolioItem(e));case 1:case"end":return t.stop()}}))}function k(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(e.map((function(e){var t,n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.awrap(C(e));case 2:return t=r.sent,n=t.restore_key,r.abrupt("return",{portfolioItemId:e,restoreKey:n});case 5:case"end":return r.stop()}}))}))));case 1:case"end":return t.stop()}}))}function N(e,t){var n,r;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.id,r=o()(e,["id"]),a.next=3,c.a.awrap(g.updatePortfolioItem(n,Object(d.c)(r,"PortfolioItem",t)));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}))}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h.get("".concat(p.c,"/portfolios"),{params:{filter:{name:e}}})}var x=function(e){return Promise.all(e.map((function(e){var t=e.portfolioItemId,n=e.restoreKey;return g.unDeletePortfolioItem(t,{restore_key:n})})))},R=function(e){return v.postCopyPortfolio(e)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g.postCopyPortfolioItem(e,t)},F=function(e,t,n){var r=new FormData;return r.append("content",t,t.name),n?h.patch("".concat(p.c,"/icons/").concat(n),r):(r.append("portfolio_item_id",e),h.post("".concat(p.c,"/icons"),r,{headers:{accept:"application/json","Content-Type":"multipart/form-data; boundary=".concat(r._boundary)}}))},A=function(e){return Promise.all([h.get("".concat(p.c,"/portfolio_items/").concat(e.portfolioItem)),h.get("".concat(p.c,"/portfolios/").concat(e.portfolio)),h.get("".concat(p.h,"/sources/").concat(e.source)).catch((function(e){if(404===e.status)return{object:"platform",notFound:!0};throw e}))])},B=function(e,t){return e.selectedPortfolio&&e.selectedPortfolio.id===t?e.selectedPortfolio:e.portfolios.data.find((function(e){return e.id===t}))},q=function(e,t){return h.post("".concat(p.c,"/portfolios/").concat(e,"/undelete"),{restore_key:t})}},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(22),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),f=n(163),p=n(21),d=n(43),m=n(434),b=n(52),y=n(384),h=n(378),v=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,a=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return u.a.createElement(h.c,o()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":"")},a),r&&u.a.createElement("div",{className:"pf-u-mb-md"}," ",u.a.createElement(y.a,null)),t)};v.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,paddingBottom:l.a.bool,breadcrumbs:l.a.bool,breadcrumbsSpacing:l.a.bool},v.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=v;var g=function(e){var t=e.title,n=e.description,r=e.children,a=e.noData,s=c()(e,["title","description","children","noData"]);return u.a.createElement(i.Fragment,null,u.a.createElement(h.b,o()({className:Object(m.a)({"pf-u-mb-lg":!a})},s),u.a.createElement(f.LevelItem,null,u.a.createElement(d.TextContent,{className:"top-toolbar-title"},u.a.createElement(p.Text,{component:p.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&u.a.createElement(p.Text,{className:"top-toolbar-title-description",component:p.TextVariants.p},n))),r))};g.propTypes={title:l.a.node,description:l.a.node,children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]),noData:l.a.bool},g.defaultProps={title:u.a.createElement(b.h,null)}},389:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(422),u=n(423),s=n(25),l=n(374),f=function(e){var t=e.tabItems,n=Object(l.a)().push,r=Object(s.h)(),a=r.pathname,c=r.search,f=t.find((function(e){var t=e.name;return a.includes(t)}));return o.a.createElement(i.Tabs,{activeKey:f?f.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return o.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};f.propTypes={tabItems:c.a.array.isRequired},t.a=f},390:function(e,t,n){"use strict";var r=n(22),o=n.n(r),a=n(26),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),f=n(373),p=Object(i.createContext)(),d=function(e){var t=e.component,n=c()(e,["component"]);return u.a.createElement(p.Consumer,null,(function(e){var r=e.componentMapper,o="string"==typeof t?r[t]:t;return u.a.createElement(o,n)}))};d.propTypes={component:l.a.oneOfType([l.a.string,l.a.node,l.a.func,l.a.element]).isRequired};var m=function e(t){return t.hidden?null:t.map((function(t){var n=t.fields,r=t.key,a=c()(t,["fields","key"]);return n?u.a.createElement(d,o()({key:r},a),e(n)):u.a.createElement(d,o()({key:r},a))}))},b=function(e){var t=e.schema,n=e.componentMapper;return u.a.createElement(p.Provider,{value:{render:m,componentMapper:n}},m(t.fields))};b.propTypes={schema:l.a.shape({fields:l.a.array.isRequired}).isRequired,componentMapper:l.a.object},b.defaultProps={componentMapper:f.a},t.a=b},392:function(e,t,n){"use strict";var r=n(40),o=n.n(r),a=n(41),c=n.n(a),i=n(0),u=n.n(i),s=n(2),l=n.n(s),f=n(42),p=n(34),d=n(52),m=n(405),b=n.n(m),y=n(414);function h(){var e=c()(["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"]);return h=function(){return e},e}var v=Object(f.b)(y.LazyLoadImage)(h(),(function(e){var t=e.height;return e.hidden?"0px":"".concat(t,"px")||!1}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));function g(){var e=c()(["\n  display: inline-block;\n  height: ",";\n"]);return g=function(){return e},e}var O=f.b.div(g(),(function(e){var t=e.height;return"".concat(t,"px")})),E=function(e){var t=e.src,n=e.height,r=e.sourceId,a=Object(i.useState)(!1),c=o()(a,2),s=c[0],l=c[1],f=Object(i.useState)(!1),m=o()(f,2),y=m[0],h=m[1],g=Object(p.useSelector)((function(e){return e.platformReducer.platformIconMapping})),E=r?g[r]:b.a;return u.a.createElement(O,{height:n},!s&&u.a.createElement(d.c,{height:n}),u.a.createElement(v,{threshold:2e3,delayTime:0,hidden:!s,height:s?n:0,onError:function(){return h(!0)},onLoad:function(){return l(!0)},src:!t||y?E:t}))};E.propTypes={src:l.a.string,platformId:l.a.string,style:l.a.object,height:l.a.number,sourceId:l.a.string},E.defaultProps={style:{},height:40};t.a=E},396:function(e,t,n){"use strict";var r=n(41),o=n.n(r);function a(){var e=o()(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return a=function(){return e},e}var c=n(42).b.div(a());t.a=c},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(89),u=n(97),s=n(98),l=n(99),f=n(437),p=n(21),d=n(43),m=n(90),b=function(e){var t=e.title,n=e.Icon,r=e.description,a=e.PrimaryAction,c=e.renderDescription;return o.a.createElement("div",{className:"pf-u-mt-xl"},o.a.createElement(u.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},o.a.createElement(s.EmptyStateIcon,{icon:n}),o.a.createElement(d.TextContent,null,o.a.createElement(p.Text,{component:p.TextVariants.h1},t)),o.a.createElement(l.EmptyStateBody,null,r,c()),o.a.createElement(f.EmptyStateSecondaryActions,null,a&&o.a.createElement(a,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string.isRequired,PrimaryAction:c.a.any,renderDescription:c.a.func},t.b=b;var y=function(e){var t=e.url,n=e.label,r=e.hasPermission;return void 0!==r&&r&&o.a.createElement(m.a,{pathname:t,preserveSearch:!0},o.a.createElement(i.Button,{variant:"primary"},n))};y.propTypes={url:c.a.string.isRequired,label:c.a.string.isRequired}},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(41),o=n.n(r),a=n(42),c=n(64),i=n(96);function u(){var e=o()(["\n  position: relative;\n  ::after {\n    display: ",";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: '';\n    background-color: rgba(210, 210, 210, 0.5);\n    z-index: 1;\n    cursor: progress;\n  }\n"]);return u=function(){return e},e}function s(){var e=o()(["\n  height: 330px;\n  position: relative;\n"]);return s=function(){return e},e}var l=Object(a.b)(c.Card)(s()),f=Object(a.b)(i.GalleryItem)(u(),(function(e){return e.isDisabled?"block":"none"}))},402:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(403),u=n(21),s=n(100),l=n(52),f=function(){return o.a.createElement("div",null,o.a.createElement(u.Text,{component:u.TextVariants.h1},"No items found"))},p=function(e){var t=e.isLoading,n=e.items,r=e.renderEmptyState;return t?o.a.createElement(l.b,null):0===n.length?r?r():o.a.createElement(f,null):o.a.createElement(i.Section,{type:"content"},o.a.createElement(s.Gallery,{gutter:"md",className:"content-gallery"},n))};p.propTypes={isLoading:c.a.bool,items:c.a.array,renderEmptyState:c.a.func},t.a=p},405:function(e,t,n){e.exports=n.p+"fonts/card-icon-default.svg"},406:function(e,t,n){"use strict";var r=n(26),o=n.n(r),a=n(41),c=n.n(a),i=n(0),u=n.n(i),s=n(42),l=n(2),f=n.n(l);function p(){var e=c()(["\n  overflow: hidden;\n"]);return p=function(){return e},e}var d=s.b.div(p()),m=function(e){var t=e.toDisplay,n=void 0===t?[]:t,r=o()(e,["toDisplay"]);return n.map((function(e){return u.a.createElement(d,{key:"card-prop-".concat(e)},r[e])}))};m.propTypes={toDisplay:f.a.arrayOf(f.a.oneOfType([f.a.string,f.a.node,f.a.arrayOf(f.a.node)]))},m.defaultProps={toDisplay:[]},t.a=m},407:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(41),o=n.n(r),a=n(42),c=n(65);function i(){var e=o()(["\n  height: 230px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0 24px 24px;\n"]);return i=function(){return e},e}var u=Object(a.b)(c.CardBody)(i())},431:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(432),u=function(e){var t=e.handleCheck,n=e.isChecked,r=e.id;return o.a.createElement(i.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:n,onChange:t,"aria-label":"card checkbox",id:r})};u.propTypes={handleCheck:c.a.func,isChecked:c.a.bool,id:c.a.string},t.a=u},433:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(22),c=n.n(a),i=n(26),u=n.n(i),s=n(0),l=n.n(s),f=n(2),p=n.n(f),d=n(21),m=n(43),b=n(406),y=n(381),h=n(396),v=n(407),g=function(e){var t=e.name,n=(e.display_name,e.distributor),r=e.pathname,o=e.searchParams,a=e.preserveSearch,i=e.portfolioName,f=u()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return l.a.createElement(v.a,null,l.a.createElement(m.TextContent,null,l.a.createElement(y.a,{pathname:r,searchParams:o,preserveSearch:a},l.a.createElement(d.Text,{component:d.TextVariants.h3,title:t},l.a.createElement(h.a,null,t))),n&&l.a.createElement(d.Text,{component:d.TextVariants.small},n),i&&l.a.createElement(s.Fragment,null,l.a.createElement(d.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),l.a.createElement(d.Text,null,i))),l.a.createElement(b.a,c()({toDisplay:[f.description?"description":"long_description"]},f)))};g.propTypes={name:p.a.string,display_name:p.a.string,distributor:p.a.string,long_description:p.a.string,description:p.a.string,pathname:p.a.string,preserveSearch:p.a.bool,searchParams:p.a.shape(o()({},p.a.string,p.a.string)),portfolioName:p.a.string},t.a=g},436:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(1),o=n.n(r),a=n(26),c=n.n(a),i=n(373);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.groupName,n=e.hidden,r=void 0!==n&&n,o=c()(e,["groupName","hidden"]);return{component:i.b.TOOLBAR_GROUP,key:"".concat(t,"/single-toolbar-item-group"),fields:r?[]:[{component:i.b.TOOLBAR_ITEM,key:"".concat(t,"/single-toolbar-item"),fields:[o]}]}},f=function(e){var t=e.pathname,n=e.preserveSearch,r=c()(e,["pathname","preserveSearch"]);return{component:i.b.LINK,pathname:t,preserveSearch:n,key:"".concat(r.key,"/button-link"),isDisabled:r.isDisabled,fields:[s({component:i.b.BUTTON},r)]}}},480:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(415),u=n(416),s=n(162),l=n(11),f=n(392),p=n(431),d=n(433),m=n(401),b=function(e){return o.a.createElement(m.b,{isDisabled:e.removeInProgress&&e.isSelected},o.a.createElement(m.a,null,o.a.createElement(i.CardHeader,{className:"card_header"},o.a.createElement(s.Level,null,o.a.createElement(f.a,{src:"".concat(l.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&o.a.createElement(p.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),o.a.createElement(d.a,e),o.a.createElement(u.CardFooter,null)))};b.propTypes={id:c.a.string,platformId:c.a.string,service_offering_source_ref:c.a.string,isSelectable:c.a.bool,isSelected:c.a.bool,onSelect:c.a.func,orderUrl:c.a.string,removeInProgress:c.a.bool,portfolio_id:c.a.string},t.a=b},671:function(e,t,n){"use strict";n.r(t);var r=n(22),o=n.n(r),a=n(40),c=n.n(a),i=n(1),u=n.n(i),s=n(0),l=n.n(s),f=n(34),p=n(444),d=n.n(p),m=n(382),b=n.n(m),y=n(380),h=n(91),v=n(480),g=n(373),O=n(436),E=n(377),P=function(e){var t=e.meta,n=e.fetchProducts,r=e.isLoading,o=e.filterProps,a=o.searchValue,c=o.onFilterChange,i=o.placeholder;return{fields:[{component:g.b.TOP_TOOLBAR,key:"products-top-toolbar",fields:[{component:g.b.TOP_TOOLBAR_TITLE,key:"products-toolbar-title",title:"Products",description:"All products collected from your portfolios",noData:t.noData},{component:g.b.LEVEL,key:"Products-actions",fields:t.noData?[]:[{component:g.b.TOOLBAR,key:"main-portfolio-toolbar",fields:[Object(O.b)({groupName:"filter-group",component:g.b.FILTER_TOOLBAR_ITEM,key:"filter-input",searchValue:a,onFilterChange:c,placeholder:i,isClearable:!0})]},{component:g.b.LEVEL_ITEM,key:"pagination-item",fields:t.count>0?[{component:E.a,key:"products-pagination",meta:t,apiProps:a,apiRequest:n,isDisabled:r,isCompact:!0}]:[]}]}]}]}},T=n(390),j=n(51),_=n(402),I=n(383),w=n(375),D=n(397),C=n(89),k=n(143),N=n(53);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=Object(w.a)((function(e,t,n){n(!0),t(Object(y.e)(e,j.a)).then((function(){return n(!1)}))}),1e3),S={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},F=function(e,t){switch(t.type){case"setFetching":return x({},e,{isFetching:t.payload});case"setFilterValue":return x({},e,{filterValue:t.payload});case"setFilteringFlag":return x({},e,{isFiltering:t.payload})}return e};t.default=function(){var e=Object(s.useContext)(k.a).release,t=Object(s.useReducer)(F,S),n=c()(t,2),r=n[0],a=r.isFetching,i=r.filterValue,u=r.isFiltering,p=n[1],m=Object(f.useDispatch)(),g=Object(f.useSelector)((function(e){return e.portfolioReducer.portfolioItems})),O=g.data,w=g.meta;Object(s.useEffect)((function(){Promise.all([m(Object(y.e)(void 0,j.a)),m(Object(I.c)())]).then((function(){return p({type:"setFetching",payload:!1})})),Object(h.d)(),insights.chrome.appNavClick({id:"products",secondaryNav:!0})}),[]);var L=function(e){p({type:"setFilterValue",payload:e}),R(e,m,(function(e){return p({type:"setFilteringFlag",payload:e})}))},x=O.map((function(e){return l.a.createElement(v.a,o()({key:e.id,pathname:e.portfolio_id&&N.t},(n=(t=e).portfolio_id,r=t.id,a=t.service_offering_source_ref,n&&r&&a?{pathname:n&&N.t,searchParams:{portfolio:n,"portfolio-item":r,source:a}}:{}),e,{toDisplay:[]}));var t,n,r,a})),A={PrimaryAction:w.noData?function(){return l.a.createElement("a",{href:"".concat(e,"settings/sources/new")},l.a.createElement(C.Button,{variant:"primary"},"Add source"))}:function(){return l.a.createElement(C.Button,{variant:"link",onClick:function(){return L("")}},"Clear all filters")},title:w.noData?"No products yet":"No results found",description:w.noData?"Configure a source to add products into portfolios.":"No results match the filter criteria. Remove all filters or clear all filters to show results.",Icon:w.noData?d.a:b.a};return l.a.createElement("div",null,l.a.createElement(T.a,{schema:P({filterProps:{searchValue:i,onFilterChange:L,placeholder:"Filter by product..."},title:"Products",isLoading:u||a,meta:w,fetchProducts:function(){return m(y.e.apply(void 0,arguments))}})}),l.a.createElement(_.a,{isLoading:u||a,items:x,renderEmptyState:function(){return l.a.createElement(D.b,A)}}),w.count>0&&l.a.createElement("div",{className:"pf-u-p-lg global-primary-background content-layout"},l.a.createElement(E.a,{dropDirection:"up",meta:w,apiRequest:function(){return m(y.e.apply(void 0,arguments))}})))}}}]);
//# sourceMappingURL=../sourcemaps/products.js.map