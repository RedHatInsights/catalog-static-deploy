(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{334:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(25),o=r.n(c),i=r(37),s=r.n(i),l=r(81),u=r.n(l),m=r(0),p=r.n(m),d=r(3),f=r.n(d),v=r(24),b=r(46),h=function(e,t,r){var n=Object.entries(t).map((function(e){var t=u()(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(n)})).join("&");return r?"".concat(e).concat(n.length>0?"&".concat(n):""):n.length>0?"?".concat(n):""},O=function(e){var t=e.pathname,r=e.searchParams,n=e.nav,a=e.preserveSearch,c=s()(e,["pathname","searchParams","nav","preserveSearch"]),i=Object(v.h)().search,l=n?b.c:b.b,u={pathname:t,search:h(i,r,a)};return p.a.createElement(l,o()({to:u},c))};O.propTypes={pathname:f.a.string.isRequired,searchParams:f.a.shape(a()({},f.a.string,f.a.string)),nav:f.a.bool,preserveSearch:f.a.bool},O.defaultProps={nav:!1,preserveSearch:!1,searchParams:{}},t.a=O},335:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(24);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.h)(),r=t.search,n=new URLSearchParams(r);return[e.reduce((function(e,t){return i({},e,a()({},t,n.get(t)))}),{}),r,n]}},342:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getPlatforms",(function(){return v})),r.d(n,"getPlatform",(function(){return b})),r.d(n,"getPlatformItems",(function(){return h})),r.d(n,"getPlatformInventories",(function(){return O})),r.d(n,"getServiceOffering",(function(){return g}));var a=r(1),c=r.n(a),o=r(2),i=r(81),s=r.n(i),l=r(54),u=r(11),m=r(47);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=Object(l.a)(),f=Object(l.b)(),v=function(){return f.post("".concat(u.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return s()(e,1)[0].sources}))},b=function(e){return d.get("".concat(u.h,"/sources/").concat(e))},h=function(e,t,r){var n=t?"&filter[name][contains_i]=".concat(t):"";return e?d.get("".concat(u.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(n).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):d.get("".concat(u.i,"/service_offerings"))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;return e?d.get("".concat(u.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(r?"&limit=".concat(r.limit,"&offset=").concat(r.offset):"")):d.get("".concat(u.i,"/service_inventories?limit=").concat(r.limit,"&offset=").concat(r.offset))},g=function(e,t){return Promise.all([d.get("".concat(u.i,"/service_offerings/").concat(e)),d.get("".concat(u.h,"/sources/").concat(t)).then((function(e){return d.get("".concat(u.h,"/source_types/").concat(e.source_type_id)).then((function(t){var r=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{icon_url:r})}))}))]).then((function(e){var t=s()(e,2);return{service:t[0],source:t[1]}}))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return I})),r.d(t,"d",(function(){return P})),r.d(t,"a",(function(){return T})),r.d(t,"e",(function(){return L}));var j=function(){return function(e){return e((function(e){return e({type:"".concat(o.j,"_PENDING")}),v().then((function(t){return e({type:"".concat(o.j,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(o.j,"_REJECTED"),payload:t})}))}))}},I=function(e,t,r){return{type:o.m,payload:h(e,t,r),meta:E({platformId:e,filter:t},r)}},P=function(e){return{type:o.i,payload:b(e)}},T=function(e,t,r){return{type:o.k,payload:O(e,t,r)}},L=function(){return{type:o.u,payload:g.apply(n,arguments)}}},343:function(e,t,r){"use strict";var n=r(25),a=r.n(n),c=r(37),o=r.n(c),i=r(0),s=r.n(i),l=r(3),u=r.n(l),m=r(334),p=function(e){var t=e.children,r=e.pathname,n=o()(e,["children","pathname"]);return r?s.a.createElement(m.a,a()({pathname:r},n),t):t};p.propTypes={pathname:u.a.string,children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)]).isRequired},t.a=p},348:function(e,t,r){"use strict";var n=r(81),a=r.n(n),c=r(0),o=r.n(c),i=r(3),s=r.n(i),l=r(32),u=r(368),m=r(48),p=r(359),d=r.n(p),f=function(e){var t=e.src,r=e.height,n=e.sourceId,i=Object(c.useState)(!1),s=a()(i,2),p=s[0],f=s[1],v=Object(c.useState)(!1),b=a()(v,2),h=b[0],O=b[1],g=Object(l.useSelector)((function(e){return e.platformReducer.platformIconMapping})),y=n?g[n]:d.a;return o.a.createElement("div",{className:"display-inline-block"},!p&&o.a.createElement(m.c,{height:r}),o.a.createElement(u.LazyLoadImage,{threshold:2e3,delayTime:0,height:p?r:0,style:{height:p?r:0},className:"card-image ".concat(p?"":"hide"),onError:function(){return O(!0)},onLoad:function(){return f(!0)},src:!t||h?y:t}))};f.propTypes={src:s.a.string,platformId:s.a.string,style:s.a.object,height:s.a.number,sourceId:s.a.string},f.defaultProps={style:{},height:40},t.a=f},351:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(376),o=r(377),i=r(32),s=r(343);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(c.Breadcrumb,null,e.map((function(t,r){var n=t.title,c=t.pathname,i=t.searchParams;return a.a.createElement(s.a,{pathname:e.length!==r+1?c:void 0,searchParams:i,nav:!0,exact:!0,key:c,className:"pf-c-breadcrumb__item"},a.a.createElement(o.BreadcrumbItem,{isActive:e.length===r+1},n))})))}},359:function(e,t,r){e.exports=r.p+"fonts/card-icon-default.svg"},391:function(e,t,r){"use strict";var n=r(81),a=r.n(n),c=r(37),o=r.n(c),i=r(1),s=r.n(i),l=r(0),u=r.n(l),m=r(39),p=r(2),d=r(41),f=r.n(d),v=r(54),b=r(11),h=r(47);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=Object(v.c)(),E=(Object(v.d)(),Object(v.f)()),j=(Object(v.h)(),Object(v.a)());function I(e){return E.listServicePlans(e)}var P=function(e){return j.get("".concat(b.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},T=function(e){return j.get("".concat(b.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))};var L=r(3),x=r.n(L),_=r(46),D=r(49),w=function(e){var t=e.id,r=e.dispatch;return u.a.createElement(l.Fragment,null,"You can track the progress of Order # ",t," in your"," ",u.a.createElement(_.b,{onClick:function(){return r(Object(m.clearNotifications)())},to:D.k},"Orders")," ","page.")};w.propTypes={id:x.a.string.isRequired,dispatch:x.a.func.isRequired};var N=w;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"d",(function(){return k})),r.d(t,"e",(function(){return q})),r.d(t,"a",(function(){return C})),r.d(t,"c",(function(){return V})),r.d(t,"b",(function(){return F}));var k=function(e){return{type:p.v,payload:I(e)}},q=function(e){return function(t){return t({type:p.S,payload:(r=e,f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.service_parameters,a=n.providerControlParameters,c=o()(n,["providerControlParameters"]),i=o()(r,["service_parameters"]),e.next=3,f.a.awrap(y.createOrder());case 3:return s=e.sent,(l={}).count=1,l=g({},l,{},i,{service_parameters:c,provider_control_parameters:a||{}}),e.next=9,f.a.awrap(y.addToOrder(s.id,l));case 9:return e.abrupt("return",y.submitOrder(s.id));case 10:case"end":return e.stop()}}))).then((function(e){var r=e.id;return t(Object(m.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:u.a.createElement(N,{id:r,dispatch:t}),dismissable:!0}))}))});var r,n,a,c,i,s,l}},C=function(e){return function(t,r){t({type:"".concat(p.d,"_PENDING")});var n=r().orderReducer.orderDetail;return function(e){return y.cancelOrder(e)}(e).then((function(){return n.order.state="Canceled",n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:p.N,payload:S({},n)}),n})).then((function(e){return t(Object(m.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(p.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(p.d,"_REJECTED"),payload:e})}))}},V=function(e,t,r){return function(n){return n({type:"".concat(p.g,"_PENDING")}),function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.a;return j.get("".concat(b.c,"/orders?filter[").concat(e,"][contains_i]=").concat(t,"&limit=").concat(r.limit,"&offset=").concat(r.offset)).then((function(e){return P(e.data.map((function(e){return e.id}))).then((function(t){return T(t.data.map((function(e){return e.portfolio_item_id}))).then((function(r){return g({portfolioItems:r},e,{data:e.data.map((function(e){return g({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))}(e,t,r).then((function(e){var r=e.portfolioItems,a=o()(e,["portfolioItems"]);return n({type:p.O,payload:r}),n({type:"".concat(p.g,"_FULFILLED"),meta:{filter:t},payload:a})})).catch((function(e){return n({type:"".concat(p.g,"_REJECTED"),payload:e})}))}},F=function(e){return function(t){return t({type:"".concat(p.N,"_PENDING")}),function(e){return Promise.all([j.get("".concat(b.c,"/orders/").concat(e.order)),j.get("".concat(b.c,"/order_items/").concat(e["order-item"])),j.get("".concat(b.c,"/portfolio_items/").concat(e["portfolio-item"])),j.get("".concat(b.h,"/sources/").concat(e.platform)),j.get("".concat(b.c,"/order_items/").concat(e["order-item"],"/progress_messages")),j.get("".concat(b.c,"/portfolios/").concat(e.portfolio)),j.get("".concat(b.c,"/order_items/").concat(e["order-item"],"/approval_requests"))])}(e).then((function(e){var r=a()(e,7),n=r[0],c=r[1],o=r[2],i=r[3],s=r[4],l=r[5],u=r[6];return t({type:"".concat(p.N,"_FULFILLED"),payload:{order:n,orderItem:c,portfolioItem:o,platform:i,progressMessages:s,portfolio:l,approvalRequest:u}})})).catch((function(e){return t({type:"".concat(p.N,"_REJECTED"),payload:e})}))}}},413:function(e,t,r){"use strict";var n,a,c=r(26),o=r.n(c),i=r(0),s=r(24),l=r(32),u=r(1),m=r.n(u),p=r(2),d=r(49),f=(d.s,{"portfolio-item":["source"]}),v=(n={},m()(n,d.u,(function(e){return e().portfolioReducer.selectedPortfolio.name})),m()(n,d.t,(function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name})),m()(n,d.e,(function(){return"Edit survey"})),m()(n,d.b,(function(){return"Add products"})),m()(n,d.p,(function(e){return e().platformReducer.selectedPlatform.name})),m()(n,d.q,(function(e){return e().platformReducer.serviceOffering.service.name})),m()(n,d.m,(function(e){var t=e().orderReducer.orderDetail,r=t.portfolioItem,n=t.order;return"".concat(r.name," # ").concat(n.id)})),n),b=(a={},m()(a,d.u,{pathname:d.s,title:"Portfolios",searchParams:{}}),m()(a,d.p,{pathname:d.n,title:"Platforms",searchParams:{}}),m()(a,d.m,{pathname:d.k,title:"Orders",searchParams:{}}),a);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,n){if(0===e.length)return r({type:p.z,payload:[]});var a=e.replace(/^\//,"").split("/").reduce((function(e,r,a){var c="".concat(a>0&&e[a-1]?e[a-1].pathname:"","/").concat(r),i=v[c];if(!i)return e;var s=O({},a>0&&e[a-1].searchParams,{},t[r]?m()({},r,t[r]):{});return f[r]&&f[r].forEach((function(e){s[e]=t[e]})),[].concat(o()(e),[{pathname:c,searchParams:s,title:i(n)}])}),[]);return a.length>0&&b[a[0].pathname]&&(a=[b[a[0].pathname]].concat(o()(a))),r({type:p.z,payload:a})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(l.useDispatch)(),r=Object(s.h)(),n=r.pathname,a=r.search;if(0===e.length)return t(g("",{}));var c=new URLSearchParams(a),u={};return c.forEach((function(e,t){u[t]=e})),Object(i.useEffect)((function(){t(g(n,u))}),[n].concat(o()(e))),function(){return t(g("",{}))}}},618:function(e,t,r){"use strict";r.r(t);var n=r(81),a=r.n(n),c=r(0),o=r.n(c),i=r(24),s=r(454),l=r(608),u=r(144),m=r(146),p=r(363),d=r(364),f=r(85),v=r(86),b=r(32),h=r(391),O=r(3),g=r.n(O),y=r(371),E=function(e){var t=e.portfolioItemName,r=e.orderId;return o.a.createElement(y.Title,{size:"3xl"},t," # ",r)};E.propTypes={portfolioItemName:g.a.string.isRequired,orderId:g.a.string.isRequired};var j=E,I=r(468),P=r(82),T=r(352),L=r(609),x=r.n(L),_=function(e){var t=e.name,r=e.cancelOrder,n=e.onClose,a=e.isOpen;return o.a.createElement(T.Modal,{isOpen:a,onClose:n,title:" ",header:o.a.createElement(y.Title,{size:"2xl",headingLevel:"h2"},o.a.createElement(x.a,{fill:"#F0AB00"})," Cancel order"),isSmall:!0,actions:[o.a.createElement(P.Button,{onClick:r,key:"cancel-order",id:"cancel-order",variant:"danger"},"Cancel order"),o.a.createElement(P.Button,{onClick:n,key:"keep-order",id:"keep-order",variant:"link"},"Keep order")],isFooterLeftAligned:!0},"Are you sure you want to cancel ",t,"?")};_.propTypes={name:g.a.string.isRequired,cancelOrder:g.a.func.isRequired,onClose:g.a.func.isRequired,isOpen:g.a.bool};var D=_,w=["Approval Pending"],N=function(e){return w.includes(e)},R=function(e){var t=e.state,r=e.orderId,n=e.portfolioItemName,i=Object(b.useDispatch)(),s=Object(c.useState)(!1),l=a()(s,2),u=l[0],m=l[1];return o.a.createElement(c.Fragment,null,o.a.createElement(D,{onClose:function(){return m(!1)},isOpen:u,cancelOrder:function(){return i(Object(h.a)(r))},name:n}),o.a.createElement(I.ActionGroup,null,o.a.createElement(P.Button,{onClick:function(){return m(!0)},isDisabled:!N(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action"},"Cancel order"),o.a.createElement(P.Button,{isDisabled:!0,type:"button"},"Reorder")))};R.propTypes={state:g.a.string,orderId:g.a.string.isRequired,portfolioItemName:g.a.string.isRequired};var S=R,k=r(38),q=r(20),C=r(460),V=r.n(C),F=r(349),U=r(348),A=r(11),B=function(e){var t=e.jobName,r=e.state,n=e.orderRequestDate,a=e.orderUpdateDate,c=e.owner,i=e.portfolioItemId,s=e.sourceId;return o.a.createElement(p.Split,{className:"pf-u-mt-sm"},o.a.createElement(d.SplitItem,{className:"pf-u-mr-md"},o.a.createElement(U.a,{sourceId:s,height:60,src:"".concat(A.c,"/portfolio_items/").concat(i,"/icon")})),o.a.createElement(d.SplitItem,null,o.a.createElement(u.Level,null,o.a.createElement(m.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(y.Title,{headingLevel:"h5",size:"md"},t)),o.a.createElement(m.LevelItem,null,o.a.createElement(y.Title,{headingLevel:"h5",size:"md"},"Status:"," ","Failed"===r&&o.a.createElement(V.a,{className:"pf-u-mr-sm icon-danger-fill"})," ",r))),o.a.createElement(u.Level,null,o.a.createElement(m.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(k.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Ordered ",o.a.createElement(F.DateFormat,{date:n,type:"relative"})))),o.a.createElement(m.LevelItem,{className:"pf-u-mr-lg"},o.a.createElement(k.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Ordered by ",c))),o.a.createElement(m.LevelItem,null,o.a.createElement(k.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Last updated ",o.a.createElement(F.DateFormat,{date:a,type:"relative"})))))))};B.propTypes={portfolioItemId:g.a.string.isRequired,sourceId:g.a.string.isRequired,state:g.a.string.isRequired,jobName:g.a.string.isRequired,orderRequestDate:g.a.string.isRequired,orderUpdateDate:g.a.string.isRequired,owner:g.a.string.isRequired};var z=B,J=r(612),G=r(482),M=r(334),Y=function(e){var t=e.baseUrl,r=e.isFetching,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.state;return[{link:"",title:"Order details"},{link:"/approval",title:"Approval"},{link:"/provision",title:"Provision",isDisabled:!0},{link:"/lifecycle",title:"Lifecycle",isDisabled:"Completed"!==t}]}(Object(b.useSelector)((function(e){return e.orderReducer.orderDetail||{}})).order);return o.a.createElement(G.Nav,null,o.a.createElement(J.NavList,{className:"orders-side-nav-list"},o.a.createElement("li",{className:"pf-c-nav__item orders-nav-section-group"},o.a.createElement(k.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.small},"Order steps"))),n.map((function(e){var n=e.link,a=e.title,c=e.isDisabled;return o.a.createElement("li",{key:n||a,className:"pf-c-nav__item orders-side-nav-item orders-side-nav-category".concat(c||r?" disabled":"")},o.a.createElement(M.a,{exact:!0,nav:!0,pathname:"".concat(t).concat(n),preserveSearch:!0,className:"pf-c-nav__link orders-side-nav-link",activeClassName:"pf-m-active"},a))}))))};Y.propTypes={baseUrl:g.a.string.isRequired,isFetching:g.a.bool};var K=Y,H=r(423),Q=r(424),W=r(431),X=r.n(W),Z=function(){var e=Object(b.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,r=e.platform,n=e.progressMessages,a=e.portfolio,c=e.orderItem;return o.a.createElement(k.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.h2},"Order details"),o.a.createElement(H.TextList,{component:H.TextListVariants.dl},o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Order ID"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},t.id),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Ordered"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},o.a.createElement(F.DateFormat,{date:t.created_at,variant:"relative"})),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Portfolio"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},a.name),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Platform"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},r.name)),o.a.createElement("hr",{className:"pf-c-divider"}),o.a.createElement(q.Text,{component:q.TextVariants.h2},"Order parameters"),o.a.createElement(X.a,{src:c.service_parameters}),o.a.createElement(q.Text,{component:q.TextVariants.h2},"Progress messages"),o.a.createElement(X.a,{src:n.data}))},$=function(){var e=Object(b.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,r=e.approvalRequest;return o.a.createElement(k.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.h2},"Approval requests"),r.data.map((function(e){return o.a.createElement(H.TextList,{key:e.id,component:H.TextListVariants.dl},o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Request ID"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(document.baseURI,"ansible/catalog/approval/requests/detail/").concat(e.approval_request_ref)},e.approval_request_ref)),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Request created"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},o.a.createElement(F.DateFormat,{date:t.created_at,variant:"relative"})),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"State"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},e.state),e.reason&&o.a.createElement(c.Fragment,null,o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Approval reason"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},e.reason)),e.request_completed_at&&o.a.createElement(c.Fragment,null,o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dt},"Completed at"),o.a.createElement(Q.TextListItem,{component:Q.TextListItemVariants.dd},o.a.createElement(F.DateFormat,{date:e.request_completed_at,variant:"relative"}))))})))},ee=r(48),te=r(335),re=r(49),ne=function(){var e=Object(te.a)([]),t=a()(e,2)[1],r=Object(i.i)(re.m).url,n=Object(b.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),c=n.order,s=n.orderItem;return"Completed"!==c.state?o.a.createElement(i.a,{to:{pathname:r,search:t}}):o.a.createElement("div",null,o.a.createElement("a",{href:s.external_url,target:"_blank",rel:"noopener noreferrer"},"Manage product"))},ae=r(351),ce=r(413),oe=r(342),ie=["order-item","portfolio-item","platform","portfolio","order"];t.default=function(){var e=Object(c.useState)(!0),t=a()(e,2),r=t[0],n=t[1],O=Object(te.a)(ie),g=a()(O,1)[0],y=Object(b.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),E=Object(i.i)(re.m),I=Object(b.useDispatch)(),P=Object(ce.a)([y]);if(Object(c.useEffect)((function(){return insights.chrome.appNavClick({id:"orders",secondaryNav:!0}),n(!0),Promise.all([I(Object(oe.c)()),I(Object(h.b)(g))]).then((function(){return n(!1)})),function(){return P()}}),[]),!r&&0===Object.keys(y).length)return o.a.createElement(i.a,{to:re.k});var T=y.order,L=y.portfolioItem,x=y.platform,_=y.orderItem;return o.a.createElement(s.Stack,{className:"orders bg-fill"},o.a.createElement(l.StackItem,{className:"orders separator pf-u-p-lg"},r?o.a.createElement(ee.e,null):o.a.createElement(c.Fragment,null,o.a.createElement(u.Level,{className:"pf-u-mb-md"},o.a.createElement(ae.a,null)),o.a.createElement(u.Level,null,o.a.createElement(m.LevelItem,null,o.a.createElement(j,{portfolioItemName:L.name,orderId:T.id})),o.a.createElement(m.LevelItem,null,o.a.createElement(S,{portfolioItemName:L.name,orderId:T.id,state:T.state}))),o.a.createElement(u.Level,null,o.a.createElement(z,{portfolioItemId:L.id,sourceId:x.id,state:T.state,jobName:L.name,orderRequestDate:T.created_at,orderUpdateDate:_.updated_at,owner:T.owner})))),o.a.createElement(l.StackItem,{className:"pf-u-pt-xl"},o.a.createElement(p.Split,{gutter:"md",className:"orders-nav-layout"},o.a.createElement(d.SplitItem,{className:"order-detail-nav-cotainer"},o.a.createElement(K,{isFetching:r,baseUrl:E.url})),o.a.createElement(d.SplitItem,{className:"order-detail-content-cotainer"},r?o.a.createElement(f.Bullseye,null,o.a.createElement(v.Spinner,null)):o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"".concat(E.url,"/approval"),component:$}),o.a.createElement(i.b,{path:"".concat(E.url,"/provision"),render:function(){return o.a.createElement("div",null,"provision")}}),o.a.createElement(i.b,{path:"".concat(E.url,"/lifecycle")},o.a.createElement(ne,null)),o.a.createElement(i.b,{path:E.url,component:Z}))))))}}}]);
//# sourceMappingURL=../sourcemaps/order-detail.js.map