"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[486],{72205:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n=r(30624),a=r.n(n),l=r(95995),o=r(66678),i=r(91703);var s=r(45237),c=r(54213),d=r(66031),u=r(92223),p=r(32875),f=r(93568),m=r(34168),y=r(47962),v=r(11608),h=r(49827),g=r(8666),E=r(62410),F=r(32642),b=r(35388),Z=r(20697),T=r(36722),x=r(31644),B=r(42413),_=function(){return(_=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var I=r(77172),O=r(81624),D=r(7247),C=r(44058),w=r(97881),S=r(40229),P=r(56682),A=r(23349),k=function(){return(k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},N=(0,O.Z)((function(e,t,r,n){void 0===t&&(t=D.he),n(!0),r((0,y.AU)(e,t)).then((function(){return n(!1)}))}),1e3),R={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""},sortBy:{index:0,direction:m.SortByDirection.desc}},j=function(e,t){switch(t.type){case"setFetching":return k(k({},e),{isFetching:t.payload});case"setFilterValue":return k(k({},e),{filters:(r=t.payload,n=e.filterType,a=e.filters,k(k({},a),((l={})[n]=r,l)))});case"replaceFilterChip":return k(k({},e),{filters:t.payload});case"setFilteringFlag":return k(k({},e),{isFiltering:t.payload});case"setFilterType":return k(k({},e),{filterType:t.payload});case"setSortBy":return k(k({},e),{sortBy:t.payload,isFetching:!0})}var r,n,a,l;return e},V={0:"id",3:"owner",4:"created_at",6:"state"};const L=function(){var e,t,r,o=(0,A.Z)(),i=(0,s.useDispatch)(),O=(0,C.Z)(),D=(0,n.useReducer)(j,k(k({},R),{filters:(null===(e=null==O?void 0:O.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""},sortBy:{direction:(null===(t=null==O?void 0:O.orders)||void 0===t?void 0:t.sortDirection)||m.SortByDirection.desc,index:(null===(r=null==O?void 0:O.orders)||void 0===r?void 0:r.sortIndex)||0}})),L=D[0],U=L.isFetching,G=L.isFiltering,H=L.filterType,q=L.filters,z=L.sortBy,W=D[1],J=(0,s.useSelector)((function(e){return e.orderReducer.orders})),K=J.data,M=J.meta,Q=[{title:o(S.Z.orderID)},o(P.Z.product),"",{title:o(S.Z.orderedByLabel)},{title:o(S.Z.orderDate)},o(P.Z.updated),{title:o(P.Z.status)}].map((function(e){return"object"!=typeof e||U||G||0===K.length?e:k(k({},e),{transforms:[m.sortable]})})),X=(0,s.useSelector)((function(e){return e.portfolioReducer.portfolioItems.data})),Y=K.map((function(e){var t=function(e,t){var r=e.orderItems,n=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return n?{orderPlatform:n.service_offering_source_ref,orderPortfolio:n.portfolio_id}:{}}(e,X),r=t.orderPlatform,i=t.orderPortfolio,s=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order "+n}(e,X);return function(e,t,r,o){var i,s,c=e.orderItems[0]&&e.orderItems[0]||{},d=_(_(_(_({order:e.id},c.id?{"order-item":c.id}:{}),c.portfolio_item_id?{"portfolio-item":c.portfolio_item_id}:{}),t?{platform:t}:{}),r?{portfolio:r}:{}),u=(0,x.C)(e.state);return[{title:a().createElement(m.TableText,null,a().createElement(Z.Z,{pathname:T.A5,searchParams:d},e.id))},{title:a().createElement(n.Fragment,null,a().createElement(F.Z,{height:60,src:(i=e,s=i.orderItems,s[0]&&b.Vs+"/portfolio_items/"+s[0].portfolio_item_id+"/icon"),sourceId:t}))},e.orderName,e.owner,{title:a().createElement(l.Text,{className:"pf-u-mb-0",component:l.TextVariants.small},a().createElement(E.Z,{date:e.created_at,variant:"relative"}))},{title:a().createElement(l.Text,{className:"pf-u-mb-0",component:l.TextVariants.small},a().createElement(E.Z,{date:e.orderItems[0]&&e.orderItems[0].updated_at,variant:"relative"}))},{title:a().createElement(m.TableText,null,a().createElement(l.Label,_({},B.Z[e.state],{variant:"outline"}),o(x.Z[u])))}]}(k(k({},e),{orderName:s}),r,i,o)}));(0,n.useEffect)((function(){var e;W({type:"setFetching",payload:!0}),Promise.all([i((0,y.AU)(q,null==O?void 0:O.orders)),i((null===(e=window.catalog)||void 0===e?void 0:e.standalone)?(0,h.dw)():(0,v.dw)())]).then((function(){return W({type:"setFetching",payload:!1})}))}),[]);var $=function(e,t){return W({type:"setFetching",payload:!0}),i((0,y.AU)(q,k(k({},t),{sortBy:V[z.index],sortDirection:z.direction,sortIndex:z.index}))).then((function(){return W({type:"setFetching",payload:!1})})).catch((function(){return W({type:"setFetching",payload:!1})}))},ee=function(e){var t;void 0===e&&(e=""),W({type:"setFilterValue",payload:e}),N(k(k({},q),((t={})[H]=e,t)),k(k({},M),{sortBy:V[z.index],sortDirection:z.direction,sortIndex:z.index,offset:0}),i,(function(e){return W({type:"setFilteringFlag",payload:e})}))},te=function(){return W({type:"replaceFilterChip",payload:R.filters}),N(R.filters,k(k({},M),{sortBy:V[z.index],sortDirection:z.direction,sortIndex:z.index}),i,(function(e){return W({type:"setFilteringFlag",payload:e})}))};return a().createElement(l.Grid,{hasGutter:!0},a().createElement(l.GridItem,null,a().createElement(c.Z,{type:"content"},!M.noData&&a().createElement(d.Z,{activeFiltersConfig:{filters:Object.entries(q).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return{category:t,type:t,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,r){var n=t[0];if(r)return te();var a=k({},q);"state"===n.type?a[n.type]=a[n.type].filter((function(e){var t;return e!==(null===(t=null==n?void 0:n.chips)||void 0===t?void 0:t[0].name)})):a[n.type]="",W({type:"replaceFilterChip",payload:a}),N(a,M,i,(function(e){return W({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return W({type:"setFilterType",payload:t})},value:H,items:[{filterValues:{items:[{value:"Approval Pending",label:o(x.Z.approvalPending)},{value:"Canceled",label:o(x.Z.canceled)},{value:"Completed",label:o(x.Z.completed)},{value:"Created",label:o(P.Z.created)},{value:"Failed",label:o(x.Z.failed)},{value:"Ordered",label:o(x.Z.ordered)}],value:q.state,onChange:function(e,t){return ee(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:q.owner,onChange:function(e,t){return ee(t)}},label:"Owner",value:"owner"}]},pagination:a().createElement(I.Z,{isDisabled:U||G,apiRequest:$,meta:M,isCompact:!0})}),a().createElement(m.Table,k({"aria-label":"orders"},U||G||0!==K.length?{sortBy:z,onSort:function(e,t,r){return W({type:"setSortBy",payload:{index:t,direction:r}}),i((0,y.AU)(q,k(k({},M),{sortBy:V[t],sortDirection:r,sortIndex:t}))).then((function(){return W({type:"setFetching",payload:!1})}))}}:{},{cells:Q,rows:U||G?[]:Y,className:"orders-table"}),a().createElement(m.TableHeader,null),a().createElement(m.TableBody,null)),!(U||G)&&0===K.length&&a().createElement(u.Z,null,a().createElement(l.Bullseye,null,a().createElement(l.EmptyState,null,a().createElement(l.Bullseye,null,a().createElement(l.EmptyStateIcon,{icon:f.SearchIcon})),a().createElement(l.Title,{headingLevel:"h1",size:"lg"},M.noData?o(S.Z.noOrdersTitle):o(w.Z.noResults)),a().createElement(l.EmptyStateBody,null,M.noData?o(S.Z.noOrdersDescription):o(w.Z.noResultsDescription)),!M.noData&&a().createElement(l.EmptyStateSecondaryActions,null,a().createElement(l.Button,{ouiaId:"clear-filter",variant:"link",onClick:te},o(w.Z.clearFilters)))))),(U||G)&&a().createElement(g.Wi,null),a().createElement(p.Z,{className:"pf-u-mr-0"},a().createElement("div",{className:"bottom-pagination-container"},a().createElement(l.Flex,{justifyContent:{default:"justifyContentFlexEnd"}},M&&M.count>0&&a().createElement(I.Z,{className:"pf-u-mt-0",isDisabled:U||G,apiRequest:$,meta:M})))))))},U=function(){return a().createElement(l.Stack,null,a().createElement(o.Z,{schema:{fields:[{component:i.H.TOP_TOOLBAR,className:"orders pf-u-p-lg",key:"orders-toolbar",fields:[{component:i.H.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}}),a().createElement(L,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders.418c9f48a2b202fcba8cdde6a5dfacd9.js.map