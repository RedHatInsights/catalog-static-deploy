(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(e,t,r){"use strict";var n=r(96);t.a=function(){return Object(n.a)(window.location.hash.substring(1))}},420:function(e,t,r){"use strict";var n=r(45),a=r.n(n),o=r(36),c=r.n(o),i=r(1),l=r.n(i),u=r(0),s=r.n(u),d=r(39),p=r(3),f=r(38),m=r.n(f),y=r(62),b=r.n(y),v=r(61),h=r(12),O=r(48);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=Object(v.c)(),P=(Object(v.d)(),Object(v.f)()),_=Object(v.a)();function F(e){return P.listServicePlans(e)}function w(e){return N.apply(this,arguments)}function N(){return(N=b()(m.a.mark((function e(t){var r,n,o,c,i,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.service_parameters,n=r.providerControlParameters,o=a()(r,["providerControlParameters"]),c=a()(t,["service_parameters"]),e.next=3,j.createOrder();case 3:return i=e.sent,(l={}).count=1,l=E({},l,{},c,{service_parameters:o,provider_control_parameters:n||{}}),e.next=9,j.addToOrder(i.id,l);case 9:return e.abrupt("return",j.submitOrder(i.id));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){return _.get("".concat(h.c,"/order_items?").concat(e.map((function(e){return"filter[order_id][]=".concat(e)})).join("&")))},D=function(e){return _.get("".concat(h.c,"/portfolio_items?").concat(e.map((function(e){return"filter[id][]=".concat(e)})).join("&")))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;return _.get("".concat(h.c,"/orders?").concat(e,"&limit=").concat(t.limit,"&offset=").concat(t.offset)).then((function(e){return T(e.data.map((function(e){return e.id}))).then((function(t){return D(t.data.map((function(e){return e.portfolio_item_id}))).then((function(r){return E({portfolioItems:r},e,{data:e.data.map((function(e){return E({},e,{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}))}))}))};var C=r(2),L=r.n(C),k=r(46),x=r(50),R=function(e){var t=e.id,r=e.dispatch;return(s.a.createElement(u.Fragment,null,"You can track the progress of Order # ",t," in your"," ",s.a.createElement(k.a,{onClick:function(){return r(Object(d.clearNotifications)())},to:x.k},"Orders")," ","page."))};R.propTypes={id:L.a.string.isRequired,dispatch:L.a.func.isRequired};var S=R;function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"e",(function(){return G})),r.d(t,"f",(function(){return V})),r.d(t,"a",(function(){return B})),r.d(t,"d",(function(){return J})),r.d(t,"c",(function(){return U})),r.d(t,"b",(function(){return Y}));var G=function(e){return{type:p.w,payload:F(e)}},V=function(e){return function(t){return t({type:p.T,payload:w(e).then((function(e){var r=e.id;return t(Object(d.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:s.a.createElement(S,{id:r,dispatch:t}),dismissable:!0}))}))})}},B=function(e){return function(t,r){t({type:"".concat(p.d,"_PENDING")});var n=r().orderReducer.orderDetail;return function(e){return j.cancelOrder(e)}(e).then((function(){return n.order.state="Canceled",n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:p.O,payload:A({},n)}),n})).then((function(e){return t(Object(d.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order ".concat("Order #".concat(e.order.id)," was canceled."),dismissable:!0}))})).then((function(){return t({type:"".concat(p.d,"_FULFILLED")})})).catch((function(e){t({type:"".concat(p.d,"_REJECTED"),payload:e})}))}},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.a;return function(r){var n=Object.entries(e).filter((function(e){var t=c()(e,2)[1];return t&&t.length>0})).map((function(e){var t=c()(e,2),r=t[0],n=t[1];return Array.isArray(n)?n.map((function(e){return"filter[".concat(r,"][]=").concat(e)})).join("&"):"filter[".concat(r,"][contains_i]=").concat(n)})).join("&");return r({type:"".concat(p.h,"_PENDING")}),I(n,t).then((function(o){var c=o.portfolioItems,i=a()(o,["portfolioItems"]);return r({type:p.P,payload:c}),r({type:"".concat(p.h,"_FULFILLED"),meta:A({},t,{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:i})})).catch((function(e){return r({type:"".concat(p.h,"_REJECTED"),payload:e})}))}},U=function(e){return function(t){return t({type:"".concat(p.O,"_PENDING")}),function(e){var t=[_.get("".concat(h.c,"/orders/").concat(e.order)),_.get("".concat(h.c,"/order_items/").concat(e["order-item"])),_.get("".concat(h.c,"/portfolio_items/").concat(e["portfolio-item"])).catch((function(e){if(404===e.status)return{object:"Product",notFound:!0};throw e})),_.get("".concat(h.c,"/order_items/").concat(e["order-item"],"/approval_requests")),_.get("".concat(h.c,"/order_items/").concat(e["order-item"],"/progress_messages"))];return e&&e.platform&&"undefined"!==e.platform&&t.push(_.get("".concat(h.i,"/sources/").concat(e.platform)).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e}))),e&&e.portfolio&&"undefined"!==e.portfolio&&t.push(_.get("".concat(h.c,"/portfolios/").concat(e.portfolio)).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))),Promise.all(t)}(e).then((function(e){var r=c()(e,7),n=r[0],a=r[1],o=r[2],i=r[3],l=r[4],u=r[5],s=r[6];return t({type:"".concat(p.O,"_FULFILLED"),payload:{order:n,orderItem:a,portfolioItem:o,platform:i,progressMessages:l,portfolio:u,approvalRequest:s}})})).catch((function(e){return t({type:"".concat(p.O,"_REJECTED"),payload:e})}))}},Y=function(e){return function(t){return t({type:"".concat(p.f,"_PENDING")}),function(e){return _.get("".concat(h.c,"/order_items/").concat(e,"/approval_requests"))}(e).then((function(e){return t({type:"".concat(p.f,"_FULFILLED"),payload:e}),e})).catch((function(e){return t({type:"".concat(p.f,"_REJECTED"),payload:e})}))}}},641:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(415),c=r(376),i=r(362),l=function(){return{fields:[{component:i.b.TOP_TOOLBAR,className:"orders bg-fill pf-u-p-lg",key:"orders-toolbar",fields:[{component:i.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},u=r(36),s=r.n(u),d=r(1),p=r.n(d),f=r(37),m=r(54),y=r(55),b=r(366),v=r(89),h=r(386),O=r(387),g=r(388),E=r(448),j=r(431),P=r(49),_=r(381),F=r(620),w=r(625),N=r(626),T=r(360),D=r.n(T),I=r(420),C=r(363),L=r(51),k=r(2),x=r.n(k),R=r(160),S=r(161),q=r(26),A=r(47),G=r(92),V=r(173),B=r.n(V),J=r(368),U=r(12),Y=function(e){var t=e.orderItems;return t[0]&&"".concat(U.c,"/portfolio_items/").concat(t[0].portfolio_item_id,"/icon")},M=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order ".concat(n)},z=r(355),K=r(50),H=r(32),Q=r.n(H),W=r(354),X=r.n(W),Z=r(45),$=r.n(Z),ee=r(425),te=r(33);function re(){var e=Q()(["\n  @media screen and (min-width: 768px) {\n    vertical-align: middle !important;\n    width: ",";\n    img {\n      object-fit: cover;\n    }\n  }\n"]);return re=function(){return e},e}var ne=x.a.oneOfType([x.a.node,x.a.arrayOf(x.a.node)]),ae=function(e){var t=e.children,r=e.className,n=$()(e,["children","className"]);return(a.a.createElement("table",X()({className:Object(ee.a)("pf-c-table","pf-m-grid-md",r)},n),t))};ae.propTypes={children:ne.isRequired,className:x.a.string};var oe=function(e){var t=e.children,r=$()(e,["children"]);return(a.a.createElement("tbody",r,t))};oe.propTypes={children:ne.isRequired};var ce=Object(te.b)((function(e){e.shrink;var t=e.children,r=$()(e,["shrink","children"]);return(a.a.createElement("td",r,t))}))(re(),(function(e){return e.shrink?"10%":"initial"})),ie={"Approval Pending":K.l,Completed:K.m},le=Object(n.memo)((function(e){var t=e.item,r=Object(f.useSelector)((function(e){var r,n,a,o=e.portfolioReducer.portfolioItems.data,c=(r=o,n=t.orderItems,(a=n[0]&&r.find((function(e){var t=e.id;return n[0].portfolio_item_id===t})))?{orderPlatform:a.service_offering_source_ref,orderPortfolio:a.portfolio_id}:{});return{orderPlatform:c.orderPlatform,orderPortfolio:c.orderPortfolio,orderName:M(t,o)}})),n=r.orderPlatform,o=r.orderPortfolio,c=r.orderName,i=t.orderItems[0]&&t.orderItems[0]||{},l={order:t.id,"order-item":i.id,"portfolio-item":i.portfolio_item_id,platform:n,portfolio:o};return a.a.createElement("tr",{"aria-labelledby":"".concat(t.id,"-expand"),className:"data-list-expand-fix"},a.a.createElement(ce,{shrink:!0,className:"pf-u-pl-xl"},a.a.createElement(J.a,{height:60,src:Y(t),sourceId:n})),a.a.createElement(ce,null,a.a.createElement(A.TextContent,null,a.a.createElement(m.Grid,{gutter:"sm",className:"pf-u-gg-md"},a.a.createElement(y.GridItem,null,a.a.createElement(R.Level,null,a.a.createElement(S.LevelItem,null,a.a.createElement(q.Text,{className:"pf-u-mb-0",component:q.TextVariants.h5},a.a.createElement(z.a,{pathname:K.n,searchParams:l},c," - Order # ",t.id))),a.a.createElement(S.LevelItem,null,a.a.createElement(z.a,{pathname:ie[t.state]||K.n,searchParams:l},"Failed"===t.state&&a.a.createElement(B.a,{className:"pf-u-mr-sm icon-danger-fill"}),t.state)))),a.a.createElement(y.GridItem,null,a.a.createElement(R.Level,null,a.a.createElement(S.LevelItem,null,a.a.createElement(q.Text,{className:"pf-u-mb-0",component:q.TextVariants.small},"Ordered ",a.a.createElement(G.DateFormat,{date:t.created_at,variant:"relative"}))),a.a.createElement(S.LevelItem,null,a.a.createElement(q.Text,{className:"pf-u-mb-0",component:q.TextVariants.small},"Ordered by ",t.owner)),a.a.createElement(S.LevelItem,null,a.a.createElement(q.Text,{className:"pf-u-mb-0",component:q.TextVariants.small},"Last updated ",a.a.createElement(G.DateFormat,{date:t.orderItems[0]&&t.orderItems[0].updated_at,variant:"relative"})))))))))}),(function(e,t){return e.id===t.id}));le.propTypes={item:x.a.object.isRequired};var ue=le,se=r(361),de=r(365),pe=r(48),fe=r(412);function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=Object(de.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe.a,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;n(!0),r(Object(I.d)(e,t)).then((function(){return n(!1)}))}),1e3),ve={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""}},he=function(e,t){switch(t.type){case"setFetching":return ye({},e,{isFetching:t.payload});case"setFilterValue":return ye({},e,{filters:(r=t.payload,n=e.filterType,a=e.filters,ye({},a,p()({},n,r)))});case"replaceFilterChip":return ye({},e,{filters:t.payload});case"setFilteringFlag":return ye({},e,{isFiltering:t.payload});case"setFilterType":return ye({},e,{filterType:t.payload})}var r,n,a;return e},Oe=function(){var e,t=Object(fe.a)(),r=Object(n.useReducer)(he,ye({},ve,{filters:(null==t?void 0:null===(e=t.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""}})),o=s()(r,2),c=o[0],i=c.isFetching,l=c.isFiltering,u=c.filterType,d=c.filters,T=o[1],k=Object(f.useSelector)((function(e){return e.orderReducer.orders})),x=k.data,R=k.meta,S=Object(f.useDispatch)();Object(n.useEffect)((function(){T({type:"setFetching",payload:!0}),Promise.all([S(Object(I.d)(d,null==t?void 0:t.orders)),S(Object(C.c)())]).then((function(){return T({type:"setFetching",payload:!1})}))}),[]);var q=function(e,t){return T({type:"setFetching",payload:!0}),S(Object(I.d)(d,t)).then((function(){return T({type:"setFetching",payload:!1})})).catch((function(){return T({type:"setFetching",payload:!1})}))},A=function(e){T({type:"setFilterValue",payload:e}),be(ye({},d,p()({},u,e)),ye({},R,{offset:0}),S,(function(e){return T({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(m.Grid,{gutter:"md"},a.a.createElement(y.GridItem,null,a.a.createElement(_.Section,{type:"content"},!R.noData&&a.a.createElement(F.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(d).filter((function(e){var t=s()(e,2)[1];return t&&t.length>0})).map((function(e){var t=s()(e,2),r=t[0],n=t[1];return{category:r,type:r,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})),onDelete:function(e,t,r){var n=s()(t,1)[0];if(r)return T({type:"replaceFilterChip",payload:ve.filters}),be(ve.filters,R,S,(function(e){return T({type:"setFilteringFlag",payload:e})}));var a=ye({},d);"state"===n.type?a[n.type]=a[n.type].filter((function(e){return e!==n.chips[0].name})):a[n.type]="",T({type:"replaceFilterChip",payload:a}),be(a,R,S,(function(e){return T({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return T({type:"setFilterType",payload:t})},value:u,items:[{filterValues:{items:[{value:"Approval Pending",label:"Approval Pending"},{value:"Canceled",label:"Canceled"},{value:"Completed",label:"Completed"},{value:"Created",label:"Created"},{value:"Failed",label:"Failed"},{value:"Ordered",label:"Ordered"}],value:d.state,onChange:function(e,t){return A(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:d.owner,onChange:function(e,t){return A(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(se.a,{isDisabled:i||l,apiRequest:q,meta:R,isCompact:!0})}),a.a.createElement(ae,{"aria-label":"order-list"},a.a.createElement(oe,null,i||l?a.a.createElement("tr",null,a.a.createElement("td",{className:"pf-u-p-0"},a.a.createElement(L.d,null))):x.length>0?x.map((function(e,t){return a.a.createElement(ue,{key:e.id,index:t,item:e})})):a.a.createElement(w.EmptyTable,null,a.a.createElement(v.Bullseye,null,a.a.createElement(h.EmptyState,null,a.a.createElement(v.Bullseye,null,a.a.createElement(O.EmptyStateIcon,{icon:D.a})),a.a.createElement(b.Title,{size:"lg"},R.noData?"No orders":"No results found"),a.a.createElement(g.EmptyStateBody,null,R.noData?"No orders have been created.":"No results match the filter criteria. Remove all filters or clear all filters to show results."),a.a.createElement(j.EmptyStateSecondaryActions,null,!R.noData&&a.a.createElement(P.Button,{variant:"link",onClick:function(){T({type:"setFilteringFlag",payload:!0}),A("")}},"Clear all filters"))))))),a.a.createElement(N.TableToolbar,null,a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(E.Flex,{className:"example-border",breakpointMods:[{modifier:"justify-content-flex-end"}]},R.count>0&&a.a.createElement(se.a,{className:"pf-u-mt-0",isDisabled:i||l,apiRequest:q,meta:R})))))))};t.default=function(){return Object(n.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(c.a,{schema:l()}),a.a.createElement(Oe,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders.js.map