(window.webpackJsonp=window.webpackJsonp||[]).push([[49,11],{577:function(e,t,r){"use strict";var n=r(69),a=r.n(n),o=r(70),i=r.n(o),s=r(0),l=r.n(s),c=r(4),d=r.n(c),u=r(179),f=r(284),p=r(23),m=function(e){var t=e.meta,r=t.limit,n=t.count,o=t.offset,s=e.apiProps,c=e.apiRequest,d=e.className,m=e.isCompact,y=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:d},l.a.createElement(f.Pagination,a()({perPage:r||50,itemCount:n||0,onPerPageSelect:function(e,t){return c(s,{offset:o,limit:t})},page:Object(p.b)(r,o),onSetPage:function(e,t,n){var a={offset:Object(p.c)(t,r),limit:r},o=function(){return c(s,a)};return n?Object(u.a)(o,250)():o()},direction:"down",isCompact:m},y)))};m.propTypes={meta:d.a.shape({count:d.a.number,limit:d.a.number.isRequired,offset:d.a.number.isRequired}),apiRequest:d.a.func.isRequired,apiProps:d.a.any,className:d.a.string,isCompact:d.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},578:function(e,t,r){"use strict";var n=r(21),a=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=a},585:function(e,t,r){"use strict";var n=r(21),a=Object(n.b)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecicle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"}});t.a=a},639:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r(96),a=r(21),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=Object(a.b)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"}}),s=function(e){return e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()}))};t.a=o(o({},i),{created:n.a.created})},640:function(e,t,r){"use strict";r.d(t,"e",(function(){return R})),r.d(t,"f",(function(){return S})),r.d(t,"a",(function(){return x})),r.d(t,"d",(function(){return B})),r.d(t,"c",(function(){return q})),r.d(t,"b",(function(){return L}));var n=r(0),a=r.n(n),o=r(107),i=r(3),s=r(22),l=r(5),c=r(23),d=r(43),u=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))},f=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},p=Object(s.a)(),m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))},g=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},v=Object(s.c)(),h=(Object(s.d)(),Object(s.g)()),O=Object(s.a)(),j=Object(s.b)(),E=function(e){return h.listServicePlans(e)},_=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=c.a),O.get(l.e+"/orders?"+e+"&limit="+t.limit+"&offset="+t.offset).then((function(e){return(t=e.data.map((function(e){return e.id})),O.get(l.e+"/order_items?"+t.map((function(e){return"filter[order_id][]="+e})).join("&"))).then((function(t){return(r=t.data.map((function(e){return e.portfolio_item_id})),O.get(l.e+"/portfolio_items?"+r.map((function(e){return"filter[id][]="+e})).join("&"))).then((function(r){return m(m({portfolioItems:r},e),{data:e.data.map((function(e){return m(m({},e),{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}));var r}));var t}))},w=function(e){if(Object.values(e).some((function(e){return!e})))return t=e.order,u(void 0,void 0,void 0,(function(){var e,r,n,a,o,i;return f(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,p.get(l.e+"/orders/"+t)];case 1:return e=s.sent(),[3,3];case 2:if(r=s.sent(),e={},404!==r.status&&400!==r.status)throw r;return d.a.replace({pathname:"/404",state:{from:d.a.location}}),[3,3];case 3:n={object:"Order item",notFound:!0},s.label=4;case 4:return s.trys.push([4,6,,7]),[4,p.get(l.e+"/order_items?order_id="+e.id)];case 5:return a=s.sent(),n=a.data[0],[3,7];case 6:return s.sent(),[3,7];case 7:o={object:"Product",notFound:!0},s.label=8;case 8:return s.trys.push([8,10,,11]),[4,p.get(l.e+"/portfolio_items/"+n.portfolio_item_id)];case 9:return o=s.sent(),[3,11];case 10:return s.sent(),[3,11];case 11:return i=[p.get(l.k+"/sources/"+o.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),p.get(l.e+"/order_items/"+n.id+"/progress_messages").catch((function(){return{object:"Messages",notFound:!0}})),p.get(l.e+"/portfolios/"+o.portfolio_id).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(i).then((function(t){var r=t[0],a=t[1],i=t[2];return[e,n,o,r,a,i]}))]}}))}));var t,r=[O.get(l.e+"/orders/"+e.order).catch((function(e){if(404===e.status||400===e.status)return d.a.replace({pathname:"/404",state:{from:d.a.location}});throw e})),O.get(l.e+"/order_items/"+e["order-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),O.get(l.e+"/portfolio_items/"+e["portfolio-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),O.get(l.k+"/sources/"+e.platform).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),O.get(l.e+"/order_items/"+e["order-item"]+"/progress_messages").catch((function(e){if(404===e.status||400===e.status)return{};throw e})),O.get(l.e+"/portfolios/"+e.portfolio).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))];return Promise.all(r)},P=function(e){return O.get(l.e+"/order_items/"+e+"/approval_requests").then((function(e){var t=e.data.map((function(e){var t,r,n=e.approval_request_ref;return t=n,j.post(l.b+"/graphql",{query:(r=t,'query {\n  requests(id: "'+r+'") {\n    id\n    number_of_children\n    decision\n    group_name\n    state\n    actions {\n      id\n      created_at\n    }\n    requests {\n      id\n      number_of_children\n      decision\n      group_name\n      state\n      parent_id\n      actions {\n        id\n        created_at\n      }\n    }\n  }\n}')},{"x-rh-persona":"approval/requester"}).then((function(e){var t=e.data.requests;return t&&t.length>0&&t[0].number_of_children>0?t[0].requests:t}))}));return Promise.all(t).then((function(e){var t;return{data:(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.map((function(e){var t,r=e.actions,n=b(e,["actions"]);return m(m({},n),{updated:(null==r?void 0:r.length)>0?null===(t=r.pop())||void 0===t?void 0:t.created_at:void 0})})))||[]}}))}))},F=r(67),M=r(9),I=r(585),D=r(18),C=function(e){var t=e.id,r=e.dispatch,n=e.portfolioItemId,i=e.portfolioId,s=e.platformId,l=e.orderItemId;return Object(D.a)()(I.a.orderSuccess,{id:t,link:function(e){return a.a.createElement(F.a,{onClick:function(){return r(Object(o.clearNotifications)())},to:{pathname:M.o,search:"?order="+t+"&order-item="+l+"&portfolio-item="+n+"&platform="+s+"&portfolio="+i}},e)}})},T=r(77),k=function(){return(k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},R=function(e){return{type:i.z,payload:E(e)}},S=function(e,t){return function(r){return r({type:i.cb,payload:(n=e,y(void 0,void 0,void 0,(function(){var e,t,r;return g(this,(function(a){switch(a.label){case 0:return s=n.service_parameters,l=s.providerControlParameters,c=b(s,["providerControlParameters"]),d=b(n,["service_parameters"]),[4,v.createOrder()];case 1:return e=a.sent(),(t={}).count=1,t=m(m(m({},t),d),{service_parameters:c,provider_control_parameters:l||{}}),[4,v.addToOrder(e.id,t)];case 2:return r=a.sent(),[2,v.submitOrder(e.id).then((function(e){return m(m({},e),{orderItem:r})}))]}}))}))).then((function(e){var n=e.id,i=e.orderItem;return r(Object(o.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:a.a.createElement(C,{id:n,dispatch:r,portfolioItemId:t.id,portfolioId:t.portfolio_id,platformId:t.service_offering_source_ref,orderItemId:i.id}),dismissable:!0}))}))});var n,s,l,c,d}},x=function(e){return function(t,r){t({type:i.e+"_PENDING"});var n=r().orderReducer.orderDetail;return function(e){return v.cancelOrder(e)}(e).then((function(){return n.order.state=T.OrderStateEnum.Canceled,n.approvalRequest&&n.approvalRequest.length>0&&(n.approvalRequest[0].state="canceled"),t({type:i.V,payload:k({},n)}),n})).then((function(e){return t(Object(o.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order Order #"+e.order.id+" was canceled.",dismissable:!0}))})).then((function(){return t({type:i.e+"_FULFILLED"})})).catch((function(e){t({type:i.e+"_REJECTED",payload:e})}))}},B=function(e,t){return void 0===t&&(t=c.a),function(r){var n=Object.entries(e).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return Array.isArray(r)?r.map((function(e){return"filter["+t+"][]="+e})).join("&"):"filter["+t+"][contains_i]="+r})).join("&");return t.sortBy&&(n=n+"&sort_by="+t.sortBy+":"+(t.sortDirection||"desc")),r({type:i.i+"_PENDING"}),_(n,t).then((function(a){var o=a.portfolioItems,s=N(a,["portfolioItems"]);return r({type:i.X,payload:o}),r({type:i.i+"_FULFILLED",meta:k(k({},t),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:s})})).catch((function(e){return r({type:i.i+"_REJECTED",payload:e})}))}},q=function(e){return function(t){return t({type:i.V+"_PENDING"}),w(e).then((function(e){var r=e[0],n=e[1],a=e[2],o=e[3],s=e[4],l=e[5];return t({type:i.V+"_FULFILLED",payload:{order:r,orderItem:n,portfolioItem:a,platform:o,progressMessages:s,portfolio:l}})})).catch((function(e){return t({type:i.V+"_REJECTED",payload:e})}))}},L=function(e){return function(t){return t({type:i.g+"_PENDING"}),P(e).then((function(e){return t({type:i.g+"_FULFILLED",payload:e}),e})).catch((function(e){return t({type:i.g+"_REJECTED",payload:e})}))}}},754:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(670),i=r.n(o),s=r(690),l=r.n(s),c=r(621),d=r.n(c),u=r(755),f=r.n(u),p=r(756),m=r.n(p),y={Completed:{icon:a.a.createElement(l.a,null),color:"green"},"Approval Pending":{icon:a.a.createElement(f.a,null),color:"blue"},Ordered:{icon:a.a.createElement(m.a,null),color:"grey"},Failed:{icon:a.a.createElement(i.a,null),color:"red"},Canceled:{icon:a.a.createElement(d.a,null),color:"orange"},Created:{icon:a.a.createElement(m.a,null),color:"grey"}};t.a=y},948:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(181),i=r(598),s=r(595),l=function(){return{fields:[{component:s.b.TOP_TOOLBAR,className:"orders pf-u-p-lg",key:"orders-toolbar",fields:[{component:s.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},c=r(69),d=r.n(c),u=r(909),f=r.n(u),p=r(26),m=r.n(p),y=r(13),g=r.n(y),b=r(19),v=r(136),h=r(137),O=r(288),j=r(187),E=r(698),_=r(699),w=r(700),P=r(691),F=r(910),M=r(132),I=r(175),D=r(682),C=r(758),T=r(911),k=r(580),N=r.n(k),R=r(617),S=r(792),x=r(694),B=r(693),q=r(640),L=r(592),A=r(87),V=r(757),G=r(38),U=r(180),J=r(612),Y=r(5),z=r(576),K=r(9),W=r(639),X=r(635),H=r(754);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){g()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e,t,r,o){var i,s,l=e.orderItems[0]&&e.orderItems[0]||{},c=Z(Z(Z(Z({order:e.id},l.id?{"order-item":l.id}:{}),l.portfolio_item_id?{"portfolio-item":l.portfolio_item_id}:{}),t?{platform:t}:{}),r?{portfolio:r}:{}),u=Object(W.b)(e.state);return[{title:a.a.createElement(X.a,null,a.a.createElement(z.a,{pathname:K.o,searchParams:c},e.id))},{title:a.a.createElement(n.Fragment,null,a.a.createElement(J.a,{height:60,src:(i=e,s=i.orderItems,s[0]&&Y.e+"/portfolio_items/"+s[0].portfolio_item_id+"/icon"),sourceId:t}))},e.orderName,e.owner,{title:a.a.createElement(G.Text,{className:"pf-u-mb-0",component:G.TextVariants.small},a.a.createElement(U.DateFormat,{date:e.created_at,variant:"relative"}))},{title:a.a.createElement(G.Text,{className:"pf-u-mb-0",component:G.TextVariants.small},a.a.createElement(U.DateFormat,{date:e.orderItems[0]&&e.orderItems[0].updated_at,variant:"relative"}))},{title:a.a.createElement(X.a,null,a.a.createElement(V.Label,d()({},H.a[e.state],{variant:"outline"}),o(W.a[u])))}]},ee=r(577),te=r(106),re=r(23),ne=r(186),ae=r(578),oe=r(585),ie=r(96),se=r(18);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){g()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=Object(te.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re.a,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;n(!0),r(Object(q.d)(e,t)).then((function(){return n(!1)}))}),1e3),ue={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""},sortBy:{index:0,direction:R.a.desc}},fe=function(e,t){switch(t.type){case"setFetching":return ce(ce({},e),{},{isFetching:t.payload});case"setFilterValue":return ce(ce({},e),{},{filters:(r=t.payload,n=e.filterType,a=e.filters,ce(ce({},a),{},g()({},n,r)))});case"replaceFilterChip":return ce(ce({},e),{},{filters:t.payload});case"setFilteringFlag":return ce(ce({},e),{},{isFiltering:t.payload});case"setFilterType":return ce(ce({},e),{},{filterType:t.payload});case"setSortBy":return ce(ce({},e),{},{sortBy:t.payload,isFetching:!0})}var r,n,a;return e},pe={0:"id",3:"owner",4:"created_at",6:"state"},me=function(){var e,t,r,o=Object(se.a)(),i=Object(b.useDispatch)(),s=Object(ne.a)(),l=Object(n.useReducer)(fe,ce(ce({},ue),{},{filters:(null==s||null===(e=s.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""},sortBy:{direction:(null==s||null===(t=s.orders)||void 0===t?void 0:t.sortDirection)||R.a.desc,index:(null==s||null===(r=s.orders)||void 0===r?void 0:r.sortIndex)||0}})),c=m()(l,2),u=c[0],p=u.isFetching,y=u.isFiltering,k=u.filterType,V=u.filters,G=u.sortBy,U=c[1],J=Object(b.useSelector)((function(e){return e.orderReducer.orders})),Y=J.data,z=J.meta,K=[{title:o(oe.a.orderID)},o(ie.a.product),"",{title:o(oe.a.orderedByLabel)},{title:o(oe.a.orderDate)},o(ie.a.updated),{title:o(ie.a.status)}].map((function(e){return"object"!==f()(e)||p||y||0===Y.length?e:ce(ce({},e),{},{transforms:[S.a]})})),X=Object(b.useSelector)((function(e){return e.portfolioReducer.portfolioItems.data})),H=Y.map((function(e){var t=function(e,t){var r=e.orderItems,n=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return n?{orderPlatform:n.service_offering_source_ref,orderPortfolio:n.portfolio_id}:{}}(e,X),r=t.orderPlatform,n=t.orderPortfolio,a=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order "+n}(e,X);return $(ce(ce({},e),{},{orderName:a}),r,n,o)}));Object(n.useEffect)((function(){U({type:"setFetching",payload:!0}),Promise.all([i(Object(q.d)(V,null==s?void 0:s.orders)),i(Object(L.c)())]).then((function(){return U({type:"setFetching",payload:!1})}))}),[]);var Q=function(e,t){return U({type:"setFetching",payload:!0}),i(Object(q.d)(V,ce(ce({},t),{},{sortBy:pe[G.index],sortDirection:G.direction,sortIndex:G.index}))).then((function(){return U({type:"setFetching",payload:!1})})).catch((function(){return U({type:"setFetching",payload:!1})}))},Z=function(e){U({type:"setFilterValue",payload:e}),de(ce(ce({},V),{},g()({},k,e)),ce(ce({},z),{},{sortBy:pe[G.index],sortDirection:G.direction,sortIndex:G.index,offset:0}),i,(function(e){return U({type:"setFilteringFlag",payload:e})}))},te=function(){return U({type:"replaceFilterChip",payload:ue.filters}),de(ue.filters,ce(ce({},z),{},{sortBy:pe[G.index],sortDirection:G.direction,sortIndex:G.index}),i,(function(e){return U({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(v.Grid,{hasGutter:!0},a.a.createElement(h.GridItem,null,a.a.createElement(I.Section,{type:"content"},!z.noData&&a.a.createElement(D.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(V).filter((function(e){var t=m()(e,2)[1];return t&&t.length>0})).map((function(e){var t=m()(e,2),r=t[0],n=t[1];return{category:r,type:r,chips:Array.isArray(n)?n.map((function(e){return{name:e}})):[{name:n}]}})),onDelete:function(e,t,r){var n=m()(t,1)[0];if(r)return te();var a=ce({},V);"state"===n.type?a[n.type]=a[n.type].filter((function(e){return e!==n.chips[0].name})):a[n.type]="",U({type:"replaceFilterChip",payload:a}),de(a,z,i,(function(e){return U({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return U({type:"setFilterType",payload:t})},value:k,items:[{filterValues:{items:[{value:"Approval Pending",label:o(W.a.approvalPending)},{value:"Canceled",label:o(W.a.canceled)},{value:"Completed",label:o(W.a.completed)},{value:"Created",label:o(ie.a.created)},{value:"Failed",label:o(W.a.failed)},{value:"Ordered",label:o(W.a.ordered)}],value:V.state,onChange:function(e,t){return Z(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:V.owner,onChange:function(e,t){return Z(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(ee.a,{isDisabled:p||y,apiRequest:Q,meta:z,isCompact:!0})}),a.a.createElement(R.b,d()({"aria-label":"orders"},p||y||0!==Y.length?{sortBy:G,onSort:function(e,t,r){return U({type:"setSortBy",payload:{index:t,direction:r}}),i(Object(q.d)(V,ce(ce({},z),{},{sortBy:pe[t],sortDirection:r,sortIndex:t}))).then((function(){return U({type:"setFetching",payload:!1})}))}}:{},{cells:K,rows:p||y?[]:H,className:"orders-table"}),a.a.createElement(x.a,null),a.a.createElement(B.a,null)),!(p||y)&&0===Y.length&&a.a.createElement(C.EmptyTable,null,a.a.createElement(j.Bullseye,null,a.a.createElement(E.EmptyState,null,a.a.createElement(j.Bullseye,null,a.a.createElement(_.EmptyStateIcon,{icon:N.a})),a.a.createElement(O.Title,{headingLevel:"h1",size:"lg"},z.noData?o(oe.a.noOrdersTitle):o(ae.a.noResults)),a.a.createElement(w.EmptyStateBody,null,z.noData?o(oe.a.noOrdersDescription):o(ae.a.noResultsDescription)),!z.noData&&a.a.createElement(F.EmptyStateSecondaryActions,null,a.a.createElement(M.Button,{variant:"link",onClick:te},o(ae.a.clearFilters)))))),(p||y)&&a.a.createElement(A.e,null),a.a.createElement(T.TableToolbar,{className:"pf-u-mr-0"},a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(P.Flex,{justifyContent:{default:"justifyContentFlexEnd"}},z.count>0&&a.a.createElement(ee.a,{className:"pf-u-mt-0",isDisabled:p||y,apiRequest:Q,meta:z})))))))};t.default=function(){return Object(n.useEffect)((function(){insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.Stack,null,a.a.createElement(i.a,{schema:l()}),a.a.createElement(me,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders~91f4305a.js.map