(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{430:function(e,t,n){"use strict";var r=n(426),o=n.n(r),c=n(49),a=n.n(c),i=n(0),l=n.n(i),u=n(11),f=n.n(u),s=n(429),p=n(207),m=n(66),b=function(e){var t=e.meta,n=t.limit,r=t.count,c=t.offset,i=e.apiProps,u=e.apiRequest,f=e.className,b=e.isCompact,d=a()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:f},l.a.createElement(p.Pagination,o()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return u(i,{offset:c,limit:t})},page:Object(m.b)(n,c),onSetPage:function(e,t,r){var o={offset:Object(m.c)(t,n),limit:n},c=function(){return u(i,o)};return r?Object(s.a)(c,250)():c()},direction:"down",isCompact:b},d)))};b.propTypes={meta:f.a.shape({count:f.a.number,limit:f.a.number.isRequired,offset:f.a.number.isRequired}),apiRequest:f.a.func.isRequired,apiProps:f.a.any,className:f.a.string,isCompact:f.a.bool},b.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=b},438:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return L})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return T}));var r={};n.r(r),n.d(r,"getPlatforms",(function(){return O})),n.d(r,"getPlatform",(function(){return y})),n.d(r,"getPlatformItems",(function(){return v})),n.d(r,"getPlatformInventories",(function(){return g})),n.d(r,"getServiceOffering",(function(){return h}));var o=n(1),c=n.n(o),a=n(3),i=n(33),l=n.n(i),u=n(84),f=n(13),s=n(66);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(u.a)(),d=Object(u.b)(),O=function(){return d.post("".concat(f.i,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},y=function(e){return b.get("".concat(f.i,"/sources/").concat(e))},v=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?b.get("".concat(f.j,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):b.get("".concat(f.j,"/service_offerings"))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.a;return e?b.get("".concat(f.j,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):b.get("".concat(f.j,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},h=function(e,t){return Promise.all([b.get("".concat(f.j,"/service_offerings/").concat(e)),b.get("".concat(f.i,"/sources/").concat(t)).then((function(e){return b.get("".concat(f.i,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return m(m({},e),{},{icon_url:n})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){return function(e){return e({type:"".concat(a.l,"_PENDING")}),O().then((function(t){return e({type:"".concat(a.l,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(a.l,"_REJECTED"),payload:t})}))}},_=function(e,t,n){return{type:a.o,payload:v(e,t,n),meta:j({platformId:e,filter:t},n)}},L=function(e){return{type:a.k,payload:y(e)}},w=function(e,t,n){return{type:a.m,payload:g(e,t,n)}},T=function(){return{type:a.w,payload:h.apply(r,arguments)}}},526:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var r=n(578),o=n(447),c=n(430),a=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.title;return{fields:[{component:o.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:o.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:r},{component:o.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:o.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:o.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:"Filter by platform"}]},{component:o.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(e){var t=e.title,n=e.paddingBottom,c=e.tabItems;return{fields:[{component:o.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:n,fields:[{component:o.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:o.b.LEVEL_ITEM,key:"tabs-level-item",fields:c?[{component:r.a,key:"platform-tabs",tabItems:c}]:[]}]}]}},l=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.meta,a=e.apiRequest,i=e.filterPlaceholder;return{fields:[{component:o.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg",fields:[{component:o.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:o.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:o.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:i}]},{component:o.b.LEVEL_ITEM,key:"pagination-level-item",fields:r.count>0?[{component:c.a,key:"platform-pagination",apiRequest:a,meta:r,isCompact:!0}]:[]}]}]}]}}},558:function(e,t,n){"use strict";var r,o,c=n(17),a=n.n(c),i=n(0),l=n(53),u=n(26),f=n(1),s=n.n(f),p=n(3),m=n(10),b=(m.s,{"portfolio-item":["source"]}),d=(r={},s()(r,m.v,(function(e){return e().portfolioReducer.selectedPortfolio.name})),s()(r,m.t,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),s()(r,m.e,(function(){return"Edit survey"})),s()(r,m.b,(function(){return"Add products"})),s()(r,m.p,(function(e){return e().platformReducer.selectedPlatform.name})),s()(r,m.q,(function(e){return e().platformReducer.serviceOffering.service.name})),s()(r,m.m,(function(e){var t=e().orderReducer.orderDetail,n=t.portfolioItem,r=t.order;return"".concat(n.name," # ").concat(r.id)})),s()(r,m.u,(function(){return"Edit product"})),r),O=(o={},s()(o,m.v,{pathname:m.s,title:"Portfolios",searchParams:{}}),s()(o,m.p,{pathname:m.n,title:"Platforms",searchParams:{}}),s()(o,m.m,{pathname:m.j,title:"Orders",searchParams:{}}),o);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n,r){if(0===e.length)return n({type:p.B,payload:[]});var o=e.replace(/^\//,"").split("/").reduce((function(e,n,o){var c="".concat(o>0&&e[o-1]?e[o-1].pathname:"","/").concat(n),i=d[c];if(!i)return e;var l=v(v({},o>0&&e[o-1].searchParams),t[n]?s()({},n,t[n]):{});return b[n]&&b[n].forEach((function(e){l[e]=t[e]})),[].concat(a()(e),[{pathname:c,searchParams:l,title:i(r)}])}),[]);return o.length>0&&O[o[0].pathname]&&(o=[O[o[0].pathname]].concat(a()(o))),n({type:p.B,payload:o})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(u.useDispatch)(),n=Object(l.h)(),r=n.pathname,o=n.search;if(0===e.length)return t(g("",{}));var c=new URLSearchParams(o),f={};return c.forEach((function(e,t){f[t]=e})),Object(i.useEffect)((function(){t(g(r,f))}),[r].concat(a()(e))),function(){return t(g("",{}))}}},846:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n.n(r),c=n(0),a=n.n(c),i=n(53),l=n(119),u=n(438),f=n(68),s=n(26),p=n(558),m=n(10),b=n(460),d=n(526),O=n(69),y=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7),n.e(49)]).then(n.bind(null,833))})),v=Object(c.lazy)((function(){return Promise.all([n.e(9),n.e(11),n.e(10),n.e(8),n.e(48)]).then(n.bind(null,845))})),g=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(12),n.e(57)]).then(n.bind(null,834))})),h=[{eventKey:0,title:"Templates",name:"/platform/platform-templates"},{eventKey:1,title:"Inventories",name:"/platform/platform-inventories"}];t.default=function(){var e=Object(s.useDispatch)(),t=Object(f.a)(["platform"]),n=o()(t,1)[0].platform,r=Object(s.useSelector)((function(e){var t=e.platformReducer;return{selectedPlatform:t.selectedPlatform,serviceOffering:t.serviceOffering}})),P=r.selectedPlatform,j=r.serviceOffering,E=Object(p.a)([P,j]);return Object(c.useEffect)((function(){return insights.chrome.appNavClick({id:"platforms",secondaryNav:!0}),Promise.all([e(Object(u.d)(n)),e(Object(u.c)())]),Object(l.c)(),function(){E()}}),[n]),a.a.createElement(c.Fragment,null,a.a.createElement(i.b,{exact:!0,path:[m.o,m.p,m.r,"".concat(m.o,"/*")]},a.a.createElement(b.a,{schema:Object(d.c)({title:P.name,paddingBottom:!1,tabItems:h})})),a.a.createElement(c.Suspense,{fallback:a.a.createElement(O.f,null)},a.a.createElement(i.d,null,a.a.createElement(i.b,{path:m.q},a.a.createElement(g,null)),a.a.createElement(i.b,{path:m.o},a.a.createElement(v,null)),a.a.createElement(i.b,{path:[m.r,m.p]},a.a.createElement(y,null)))))}}}]);
//# sourceMappingURL=../sourcemaps/platform~91f4305a.js.map