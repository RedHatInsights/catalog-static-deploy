(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{646:function(e,t,r){"use strict";var o,n,c=r(15),a=r.n(c),i=r(0),u=r(78),l=r(20),s=r(1),f=r.n(s),p=r(2),d=r(11),m=(d.w,{"portfolio-item":["source"]}),b=(o={},f()(o,d.A,(function(e){return e().portfolioReducer.selectedPortfolio.name})),f()(o,d.y,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),f()(o,d.g,(function(){return"Edit survey"})),f()(o,d.c,(function(){return"Add products"})),f()(o,d.t,(function(e){return e().platformReducer.selectedPlatform.name})),f()(o,d.u,(function(e){return e().platformReducer.serviceOffering.service.name})),f()(o,d.q,(function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,o=t.order;return"".concat(r.name," # ").concat(o.id)})),f()(o,d.z,(function(){return"Edit product"})),o),h=(n={},f()(n,d.A,{pathname:d.w,title:"Portfolios",searchParams:{}}),f()(n,d.t,{pathname:d.r,title:"Platforms",searchParams:{}}),f()(n,d.q,{pathname:d.m,title:"Orders",searchParams:{}}),n);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){f()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,o){if(0===e.length)return r({type:p.C,payload:[]});var n=e.replace(/^\//,"").split("/").reduce((function(e,r,n){var c="".concat(n>0&&e[n-1]?e[n-1].pathname:"","/").concat(r),i=b[c];if(!i)return e;var u=y(y({},n>0&&e[n-1].searchParams),t[r]?f()({},r,t[r]):{});return m[r]&&m[r].forEach((function(e){u[e]=t[e]})),[].concat(a()(e),[{pathname:c,searchParams:u,title:i(o)}])}),[]);return n.length>0&&h[n[0].pathname]&&(n=[h[n[0].pathname]].concat(a()(n))),r({type:p.C,payload:n})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(l.useDispatch)(),r=Object(u.h)(),o=r.pathname,n=r.search;if(0===e.length)return t(P("",{}));var c=new URLSearchParams(n),s={};return c.forEach((function(e,t){s[t]=e})),Object(i.useEffect)((function(){t(P(o,s))}),[o].concat(a()(e))),function(){return t(P("",{}))}}},654:function(e,t,r){"use strict";var o=r(0),n=r.n(o),c=r(57),a=r(704),i=r.n(a),u=r(41),l=r(560),s=r(23);t.a=function(){var e=Object(s.a)();return n.a.createElement("div",{className:"pf-u-mb-md"},n.a.createElement(i.a,{className:"pf-u-mr-sm"}),n.a.createElement(c.Button,{variant:"link",component:function(){return n.a.createElement(l.a,{pathname:"/products"},e(u.a.backToProducts))}}))}},668:function(e,t,r){"use strict";var o=r(0);t.a=function(){var e=Object(o.useRef)(!1);return Object(o.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e}},704:function(e,t,r){"use strict";t.__esModule=!0,t.AngleLeftIconConfig={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0,transform:""},t.AngleLeftIcon=r(73).createIcon(t.AngleLeftIconConfig),t.default=t.AngleLeftIcon},898:function(e,t,r){"use strict";r.r(t);var o=r(14),n=r.n(o),c=r(1),a=r.n(c),i=r(0),u=r.n(i),l=r(20),s=r(78),f=r(4),p=r.n(f),d=r(89),m=r(15),b=r.n(m),h=r(570),O=r(123),y=r(100),P=r(79),g=r(646),v=r(11),j=r(179),I=r(38),E=r(668),w=r(180),R=r(580),F=r(573),k=r(654);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){var t=e.fromProducts,r=e.title,o=e.description;return u.a.createElement(R.a,{schema:{fields:[{component:F.b.TOP_TOOLBAR,breadcrumbs:!t,key:"portfolio-top-toolbar",fields:[{component:k.a,key:"back-to-products",hidden:!t},{component:F.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",title:r,description:o}]}]}})};C.propTypes={title:p.a.node,description:p.a.node,fromProducts:p.a.bool};var D=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(59)]).then(r.bind(null,893))})),L=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(8),r.e(50)]).then(r.bind(null,890))})),T=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(15)]).then(r.bind(null,892))})),_={selectedItems:[],firstSelectedProduct:void 0,removeInProgress:!1,filterValue:"",copyInProgress:!1,isFetching:!0,isFiltering:!1},z=Object(y.a)((function(e,t,r,o){r(!0),t(Object(O.f)(e,o)).then((function(){return r(!1)}))}),1e3),V=function(e,t){var r,o,n=t.type,c=t.payload,a=void 0===c?{}:c;return{selectItem:S(S({},e),{},{selectedItems:(r=e.selectedItems,o=a.selectedItem,r.includes(o)?[].concat(b()(r.slice(0,r.indexOf(o))),b()(r.slice(r.indexOf(o)+1))):[].concat(b()(r),[o])),firstSelectedProduct:a.product||e.firstSelectedProduct}),setRemoveInProgress:S(S({},e),{},{removeInProgress:a}),removeSucessfull:S(S({},e),{},{selectedItems:[],removeInProgress:!1}),setFilterValue:S(S({},e),{},{filterValue:a,isFiltering:!0}),setCopyInProgress:S(S({},e),{},{copyInProgress:a}),setIsFetching:S(S({},e),{},{isFetching:a}),setFilteringFlag:S(S({},e),{},{isFiltering:a})}[n]};t.default=function(){var e,t=Object(w.a)(),r=Object(i.useReducer)(V,S(S({},_),{},{filterValue:(null==t||null===(e=t.portfolioItems)||void 0===e?void 0:e.filter)||""})),o=n()(r,2),c=o[0],a=o[1],f=Object(P.a)(["portfolio","from-products"]),p=n()(f,1)[0],m=p.portfolio,b=p["from-products"],y=Object(s.i)(v.A).url,R=Object(s.g)(),F=Object(l.useDispatch)(),k=Object(E.a)(),A=Object(l.useSelector)((function(e){var t=e.portfolioReducer;return{portfolio:t.selectedPortfolio,portfolioItem:t.portfolioItem,meta:t.portfolioItems.meta}})),N=A.portfolio,q=A.portfolioItem,x=A.meta,B=Object(g.a)([N,q]),J=function(e){return a({type:"setIsFetching",payload:!0}),Promise.all([F(Object(h.c)()),F(Object(O.i)(e)),F(Object(O.f)(e,null==t?void 0:t.portfolioItems))]).then((function(e){return k.current&&a({type:"setIsFetching",payload:!1}),e})).catch((function(){return a({type:"setIsFetching",payload:!1})}))};Object(i.useEffect)((function(){return insights.chrome.appNavClick({id:"true"===b?"products":"portfolios",secondaryNav:!0}),J(m),Object(d.c)(),function(){B(),F(Object(O.m)())}}),[]),Object(i.useEffect)((function(){!0!==k.current||c.isFetching||R.location.pathname!==v.A||(J(m),Object(d.c)())}),[m,R.location.pathname]);var M={portfolioRoute:y,addProductsRoute:"".concat(y,"/add-products"),editPortfolioRoute:"".concat(y,"/edit-portfolio"),removePortfolioRoute:"".concat(y,"/remove-portfolio"),sharePortfolioRoute:"".concat(y,"/share-portfolio"),workflowPortfolioRoute:"".concat(y,"/edit-workflow"),portfolioItemRoute:"".concat(y,"/portfolio-item")};return!1===N.metadata.user_capabilities.show?u.a.createElement(j.a,null):u.a.createElement(i.Suspense,{fallback:u.a.createElement(C,{fromProducts:"true"===b,title:N.name,description:N.description})},u.a.createElement(s.d,null,u.a.createElement(I.a,{path:M.addProductsRoute,userCapabilities:N.metadata.user_capabilities,requiredCapabilities:"update"},u.a.createElement(T,{portfolioRoute:M.portfolioRoute})),u.a.createElement(s.b,{path:M.portfolioItemRoute},u.a.createElement(L,{portfolioLoaded:!c.isFetching})),u.a.createElement(s.b,{path:M.portfolioRoute},u.a.createElement(D,{routes:M,fromProducts:"true"===b,handleFilterChange:function(e){a({type:"setFilterValue",payload:e}),z(m,F,(function(e){return a({type:"setFilteringFlag",payload:e})}),S(S({},x),{},{offset:0,filter:e}))},removeProducts:function(e){a({type:"setRemoveInProgress",payload:!0}),F(Object(O.l)(e,N.name,c.firstSelectedProduct)).then((function(){return a({type:"removeSucessfull"})})).catch((function(){return a({type:"setRemoveInProgress",payload:!1})}))},copyPortfolio:function(){return a({type:"setCopyInProgress",payload:!0}),F(Object(O.c)(m)).then((function(e){var t=e.id;return R.push({pathname:v.A,search:"?portfolio=".concat(t)})})).then((function(){return a({type:"setCopyInProgress",payload:!1})})).then((function(){return F(Object(O.g)())})).catch((function(){return a({type:"setCopyInProgress",payload:!1})}))},state:c,stateDispatch:a}))))}}}]);
//# sourceMappingURL=../sourcemaps/portfolio~31ecd969.js.map