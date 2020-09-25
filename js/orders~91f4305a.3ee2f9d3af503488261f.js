(window.webpackJsonp=window.webpackJsonp||[]).push([[47,12],{572:function(e,t,r){"use strict";var n=r(19),a=Object(n.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=a},576:function(e,t,r){"use strict";var n=r(83),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,o=t.keepHash,i=Object(n.g)();return a(a({},i),{push:function(e){var t=e;return o&&i.location.hash.length>0&&(t="object"==typeof t?a(a({},t),{hash:i.location.hash}):""+t+i.location.hash),r?i.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?a(a({},e),{search:void 0}):e}(t)):i.push(t)}})}},594:function(e,t,r){"use strict";var n=r(19),a=Object(n.b)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecicle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"}});t.a=a},596:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return y})),r.d(t,"d",(function(){return v})),r.d(t,"a",(function(){return b})),r.d(t,"e",(function(){return h}));var n=r(3),a=r(23),o=r(4),i=r(24),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=Object(a.a)(),c=Object(a.b)(),u=function(e,t,r){var n=t?"&filter[name][contains_i]="+t:"";return e?s.get(o.l+"/sources/"+e+"/service_offerings?filter[archived_at][nil]"+n+(r?"&limit="+r.limit+"&offset="+r.offset:"")):s.get(o.l+"/service_offerings")},d=function(e,t,r){return void 0===t&&(t=""),void 0===r&&(r=i.a),e?s.get(o.l+"/sources/"+e+"/service_inventories?filter[name][contains_i]="+t+(r?"&limit="+r.limit+"&offset="+r.offset:"")):s.get(o.l+"/service_inventories?limit="+r.limit+"&offset="+r.offset)},p=function(e,t){return Promise.all([s.get(o.l+"/service_offerings/"+e),s.get(o.k+"/sources/"+t).then((function(e){return s.get(o.k+"/source_types/"+e.source_type_id).then((function(t){var r=t.icon_url;return l(l({},e),{icon_url:r})}))}))]).then((function(e){return{service:e[0],source:e[1]}}))},f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(){return function(e){return e({type:n.n+"_PENDING"}),c.post(o.k+"/graphql",{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return e[0].sources})).then((function(t){return e({type:n.n+"_FULFILLED",payload:t})})).catch((function(t){return e({type:n.n+"_REJECTED",payload:t})}))}},y=function(e,t,r){return{type:n.q,payload:u(e,t,r),meta:f({platformId:e,filter:t},r)}},v=function(e){return{type:n.m,payload:(t=e,s.get(o.k+"/sources/"+t))};var t},b=function(e,t,r){return{type:n.o,payload:d(e,t,r)}},h=function(e,t){return{type:n.y,payload:p(e,t)}}},597:function(e,t,r){"use strict";r.d(t,"b",(function(){return S}));var n,a,o,i,l,s=r(0),c=r.n(s),u=r(13),d=r.n(u),p=r(130),f=r(956),m=r(154),y=r(541),v=r(554),b=r(20),h=r(825),g=r(826),O=r(824),_=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},E=function(){return(E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},w=b.b.div(n||(n=_(["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"],["\n  position: relative;\n  width: 300px;\n  height: 36px;\n"]))),P=Object(b.b)(O.a)(a||(a=_(["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"],["\n  position: absolute;\n  width: 300px;\n  padding-right: 34px;\n  background: transparent;\n"]))),T=b.b.span(o||(o=_(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"],["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n"]))),I=Object(b.b)(h.a)(i||(i=_(["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"],["\n  z-index: 1000;\n  fill: #72767b;\n  :hover {\n    fill: var(--pf-global--Color--100);\n    cursor: pointer;\n  }\n"]))),F=Object(b.b)(g.a)(l||(l=_(["\n  z-index: 1000;\n  fill: #72767b;\n"],["\n  z-index: 1000;\n  fill: #72767b;\n"]))),M=function(e){var t=e.searchValue,r=void 0===t?"":t,n=e.onFilterChange,a=e.placeholder,o=e.isClearable,i=void 0!==o&&o,l=j(e,["searchValue","onFilterChange","placeholder","isClearable"]);return c.a.createElement(m.a,null,c.a.createElement(w,null,c.a.createElement(P,E({id:"toolbar-filter",placeholder:a,value:r,type:"text",onChange:n,"aria-label":a},l)),c.a.createElement(T,null,i&&r&&c.a.createElement(I,{width:"16",height:"16",onClick:function(){return n("")}})||c.a.createElement(F,null))))},x=r(661),k=r(672),D=r(570),C=r(191),L=function(){return(L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},N=function(e){var t=e.title,r=R(e,["title"]);return c.a.createElement(p.a,L({},r),t)};N.propTypes={title:d.a.string.isRequired};var B={TopToolbar:x.b,TopToolbarTitle:x.a,Toolbar:function(e){var t=e.children,r=R(e,["children"]);return c.a.createElement(C.a,L({className:"pf-u-p-0"},r),c.a.createElement(f.a,{className:"pf-u-pl-0"},t))},ToolbarGroup:C.b,ToolbarItem:m.a,FilterToolbarItem:M,Link:D.a,Level:y.a,LevelItem:v.a,Button:N,AppTabs:k.a},S={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=B},603:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(597),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},s=Object(n.createContext)({}),c=function(e){var t=e.component,r=l(e,["component"]);return a.a.createElement(s.Consumer,null,(function(e){var n=e.componentMapper,o="string"==typeof t?n&&n[t]:t;return o?a.a.createElement(o,i({},r)):null}))},u=function(e){return e.map((function(e){var t=e.hidden,r=e.fields,n=e.key,o=l(e,["hidden","fields","key"]);return t?null:r?a.a.createElement(c,i({key:n},o),u(r)):a.a.createElement(c,i({key:n},o))}))};t.a=function(e){var t=e.schema,r=e.componentMapper,n=void 0===r?o.a:r;return a.a.createElement(s.Provider,{value:{render:u,componentMapper:n}},u(t.fields))}},666:function(e,t,r){"use strict";r.d(t,"b",(function(){return l}));var n=r(97),a=r(19),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=Object(a.b)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"}}),l=function(e){return e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()}))};t.a=o(o({},i),{created:n.a.created})},669:function(e,t,r){"use strict";r.d(t,"e",(function(){return L})),r.d(t,"f",(function(){return R})),r.d(t,"a",(function(){return N})),r.d(t,"d",(function(){return B})),r.d(t,"c",(function(){return S})),r.d(t,"b",(function(){return q}));var n=r(0),a=r.n(n),o=r(109),i=r(3),l=r(23),s=r(4),c=r(24),u=r(41),d=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},p=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},f=Object(l.a)(),m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((n=n.apply(e,t||[])).next())}))},v=function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},h=Object(l.c)(),g=(Object(l.d)(),Object(l.g)()),O=Object(l.a)(),_=Object(l.b)(),E=function(e){return g.listServicePlans(e)},j=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=c.a),O.get(s.e+"/orders?"+e+"&limit="+t.limit+"&offset="+t.offset).then((function(e){return(t=e.data.map((function(e){return e.id})),O.get(s.e+"/order_items?"+t.map((function(e){return"filter[order_id][]="+e})).join("&"))).then((function(t){return(r=t.data.map((function(e){return e.portfolio_item_id})),O.get(s.e+"/portfolio_items?"+r.map((function(e){return"filter[id][]="+e})).join("&"))).then((function(r){return m(m({portfolioItems:r},e),{data:e.data.map((function(e){return m(m({},e),{orderItems:t.data.filter((function(t){return t.order_id===e.id}))})}))})}));var r}));var t}))},w=function(e){if(Object.values(e).some((function(e){return!e})))return t=e.order,d(void 0,void 0,void 0,(function(){var e,r,n,a,o,i;return p(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,f.get(s.e+"/orders/"+t)];case 1:return e=l.sent(),[3,3];case 2:if(r=l.sent(),e={},404!==r.status&&400!==r.status)throw r;return u.a.replace({pathname:"/404",state:{from:u.a.location}}),[3,3];case 3:n={object:"Order item",notFound:!0},l.label=4;case 4:return l.trys.push([4,6,,7]),[4,f.get(s.e+"/order_items?order_id="+e.id)];case 5:return a=l.sent(),n=a.data[0],[3,7];case 6:return l.sent(),[3,7];case 7:o={object:"Product",notFound:!0},l.label=8;case 8:return l.trys.push([8,10,,11]),[4,f.get(s.e+"/portfolio_items/"+n.portfolio_item_id)];case 9:return o=l.sent(),[3,11];case 10:return l.sent(),[3,11];case 11:return i=[f.get(s.k+"/sources/"+o.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),f.get(s.e+"/order_items/"+n.id+"/progress_messages").catch((function(){return{object:"Messages",notFound:!0}})),f.get(s.e+"/portfolios/"+o.portfolio_id).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(i).then((function(t){var r=t[0],a=t[1],i=t[2];return[e,n,o,r,a,i]}))]}}))}));var t,r=[O.get(s.e+"/orders/"+e.order).catch((function(e){if(404===e.status||400===e.status)return u.a.replace({pathname:"/404",state:{from:u.a.location}});throw e})),O.get(s.e+"/order_items/"+e["order-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),O.get(s.e+"/portfolio_items/"+e["portfolio-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),O.get(s.k+"/sources/"+e.platform).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),O.get(s.e+"/order_items/"+e["order-item"]+"/progress_messages").catch((function(e){if(404===e.status||400===e.status)return{};throw e})),O.get(s.e+"/portfolios/"+e.portfolio).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))];return Promise.all(r)},P=function(e){return O.get(s.e+"/order_items/"+e+"/approval_requests").then((function(e){var t=e.data.map((function(e){var t,r,n=e.approval_request_ref;return t=n,_.post(s.b+"/graphql",{query:(r=t,'query {\n  requests(id: "'+r+'") {\n    id\n    number_of_children\n    decision\n    group_name\n    created_at\n    state\n    actions {\n      id\n      created_at\n    }\n    requests {\n      id\n      number_of_children\n      decision\n      group_name\n      state\n      parent_id\n      created_at\n      actions {\n        id\n        created_at\n      }\n    }\n  }\n}')},{"x-rh-persona":"approval/requester"}).then((function(e){var t=e.data.requests;return t&&t.length>0&&t[0].number_of_children>0?t[0].requests:t}))}));return Promise.all(t).then((function(e){var t;return{data:(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.map((function(e){var t,r=e.actions,n=b(e,["actions"]);return m(m({},n),{updated:(null==r?void 0:r.length)>0?null===(t=r.pop())||void 0===t?void 0:t.created_at:n.created_at})})))||[]}}))}))},T=r(67),I=r(8),F=r(594),M=r(17),x=function(e){var t=e.id,r=e.dispatch,n=e.portfolioItemId,i=e.portfolioId,l=e.platformId,s=e.orderItemId;return Object(M.a)()(F.a.orderSuccess,{id:t,link:function(e){return a.a.createElement(T.a,{onClick:function(){return r(Object(o.clearNotifications)())},to:{pathname:I.o,search:"?order="+t+"&order-item="+s+"&portfolio-item="+n+"&platform="+l+"&portfolio="+i}},e)}})},k=r(75),D=function(){return(D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},L=function(e){return{type:i.z,payload:E(e)}},R=function(e,t){return function(r){return r({type:i.cb,payload:(n=e,y(void 0,void 0,void 0,(function(){var e,t,r;return v(this,(function(a){switch(a.label){case 0:return l=n.service_parameters,s=l.providerControlParameters,c=b(l,["providerControlParameters"]),u=b(n,["service_parameters"]),[4,h.createOrder()];case 1:return e=a.sent(),(t={}).count=1,t=m(m(m({},t),u),{service_parameters:c,provider_control_parameters:s||{}}),[4,h.addToOrder(e.id,t)];case 2:return r=a.sent(),[2,h.submitOrder(e.id).then((function(e){return m(m({},e),{orderItem:r})}))]}}))}))).then((function(e){var n=e.id,i=e.orderItem;return r(Object(o.addNotification)({variant:"success",title:"Your order has been accepted successfully",description:a.a.createElement(x,{id:n,dispatch:r,portfolioItemId:t.id,portfolioId:t.portfolio_id,platformId:t.service_offering_source_ref,orderItemId:i.id}),dismissable:!0}))}))});var n,l,s,c,u}},N=function(e){return function(t,r){t({type:i.e+"_PENDING"});var n=r().orderReducer.orderDetail;return function(e){return h.cancelOrder(e)}(e).then((function(){return n.order.state=k.OrderStateEnum.Canceled,n.approvalRequest&&n.approvalRequest.data.length>0&&(n.approvalRequest.data[0].state="canceled"),t({type:i.V,payload:D({},n)}),n})).then((function(e){return t(Object(o.addNotification)({variant:"success",title:"Your order has been canceled successfully",description:"Order Order #"+e.order.id+" was canceled.",dismissable:!0}))})).then((function(){return t({type:i.e+"_FULFILLED"})})).catch((function(e){t({type:i.e+"_REJECTED",payload:e})}))}},B=function(e,t){return void 0===t&&(t=c.a),function(r){var n=Object.entries(e).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return Array.isArray(r)?r.map((function(e){return"filter["+t+"][]="+e})).join("&"):"filter["+t+"][contains_i]="+r})).join("&");return t.sortBy&&(n=n+"&sort_by="+t.sortBy+":"+(t.sortDirection||"desc")),r({type:i.i+"_PENDING"}),j(n,t).then((function(a){var o=a.portfolioItems,l=C(a,["portfolioItems"]);return r({type:i.X,payload:o}),r({type:i.i+"_FULFILLED",meta:D(D({},t),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:l})})).catch((function(e){return r({type:i.i+"_REJECTED",payload:e})}))}},S=function(e){return function(t){return t({type:i.V+"_PENDING"}),w(e).then((function(e){var r=e[0],n=e[1],a=e[2],o=e[3],l=e[4],s=e[5];return t({type:i.V+"_FULFILLED",payload:{order:r,orderItem:n,portfolioItem:a,platform:o,progressMessages:l,portfolio:s}})})).catch((function(e){return t({type:i.V+"_REJECTED",payload:e})}))}},q=function(e){return function(t){return t({type:i.g+"_PENDING"}),P(e).then((function(e){return t({type:i.g+"_FULFILLED",payload:e}),e})).catch((function(e){return t({type:i.g+"_REJECTED",payload:e})}))}}},672:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(953),i=r(829),l=r(83),s=r(576);t.a=function(e){var t=e.tabItems,r=Object(s.a)().push,n=Object(l.h)(),c=n.pathname,u=n.search,d=t.find((function(e){var t=e.name;return c.includes(t)}));return a.a.createElement(o.a,{activeKey:d?d.eventKey:0,onSelect:function(e,n){return r({pathname:t[n].name,search:u})}},t.map((function(e){return a.a.createElement(i.a,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name,disabled:e.disabled})})))}},755:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(911),i=r(912),l=r(913),s=r(914),c=r(813),u={Completed:{icon:a.a.createElement(o.a,null),color:"green"},"Approval Pending":{icon:a.a.createElement(i.a,null),color:"blue"},Ordered:{icon:a.a.createElement(l.a,null),color:"grey"},Failed:{icon:a.a.createElement(s.a,null),color:"red"},Canceled:{icon:a.a.createElement(c.a,null),color:"orange"},Created:{icon:a.a.createElement(l.a,null),color:"grey"}};t.a=u},983:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(564),i=r(603),l=r(597),s=function(){return{fields:[{component:l.b.TOP_TOOLBAR,className:"orders pf-u-p-lg",key:"orders-toolbar",fields:[{component:l.b.TOP_TOOLBAR_TITLE,key:"orders-toolbar-title",title:"Orders",className:""}]}]}},c=r(18),u=r(543),d=r(544),p=r(549),f=r(658),m=r(659),y=r(782),v=r(660),b=r(673),h=r(130),g=r(916),O=r(180),_=r(681),E=r(756),j=r(915),w=r(826),P=r(606),T=r(787),I=r(668),F=r(667),M=r(669),x=r(596),k=r(85),D=r(131),C=r(785),L=r(184),R=r(617),N=r(4),B=r(570),S=r(8),q=r(666),A=r(629),V=r(755),G=function(){return(G=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},U=function(e,t,r,o){var i,l,s=e.orderItems[0]&&e.orderItems[0]||{},c=G(G(G(G({order:e.id},s.id?{"order-item":s.id}:{}),s.portfolio_item_id?{"portfolio-item":s.portfolio_item_id}:{}),t?{platform:t}:{}),r?{portfolio:r}:{}),u=Object(q.b)(e.state);return[{title:a.a.createElement(A.a,null,a.a.createElement(B.a,{pathname:S.o,searchParams:c},e.id))},{title:a.a.createElement(n.Fragment,null,a.a.createElement(R.a,{height:60,src:(i=e,l=i.orderItems,l[0]&&N.e+"/portfolio_items/"+l[0].portfolio_item_id+"/icon"),sourceId:t}))},e.orderName,e.owner,{title:a.a.createElement(D.a,{className:"pf-u-mb-0",component:D.b.small},a.a.createElement(L.DateFormat,{date:e.created_at,variant:"relative"}))},{title:a.a.createElement(D.a,{className:"pf-u-mb-0",component:D.b.small},a.a.createElement(L.DateFormat,{date:e.orderItems[0]&&e.orderItems[0].updated_at,variant:"relative"}))},{title:a.a.createElement(A.a,null,a.a.createElement(C.a,G({},V.a[e.state],{variant:"outline"}),o(q.a[u])))}]},K=r(590),J=r(108),z=r(24),Y=r(189),H=r(572),W=r(594),X=r(97),Q=r(17),Z=function(){return(Z=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},$=Object(J.a)((function(e,t,r,n){void 0===t&&(t=z.a),n(!0),r(Object(M.d)(e,t)).then((function(){return n(!1)}))}),1e3),ee={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"state",filters:{state:[],owner:""},sortBy:{index:0,direction:P.a.desc}},te=function(e,t){switch(t.type){case"setFetching":return Z(Z({},e),{isFetching:t.payload});case"setFilterValue":return Z(Z({},e),{filters:(r=t.payload,n=e.filterType,a=e.filters,Z(Z({},a),((o={})[n]=r,o)))});case"replaceFilterChip":return Z(Z({},e),{filters:t.payload});case"setFilteringFlag":return Z(Z({},e),{isFiltering:t.payload});case"setFilterType":return Z(Z({},e),{filterType:t.payload});case"setSortBy":return Z(Z({},e),{sortBy:t.payload,isFetching:!0})}var r,n,a,o;return e},re={0:"id",3:"owner",4:"created_at",6:"state"},ne=function(){var e,t,r,o=Object(Q.a)(),i=Object(c.useDispatch)(),l=Object(Y.a)(),s=Object(n.useReducer)(te,Z(Z({},ee),{filters:(null===(e=null==l?void 0:l.orders)||void 0===e?void 0:e.filters)||{state:[],owner:""},sortBy:{direction:(null===(t=null==l?void 0:l.orders)||void 0===t?void 0:t.sortDirection)||P.a.desc,index:(null===(r=null==l?void 0:l.orders)||void 0===r?void 0:r.sortIndex)||0}})),D=s[0],C=D.isFetching,L=D.isFiltering,R=D.filterType,N=D.filters,B=D.sortBy,S=s[1],A=Object(c.useSelector)((function(e){return e.orderReducer.orders})),V=A.data,G=A.meta,J=[{title:o(W.a.orderID)},o(X.a.product),"",{title:o(W.a.orderedByLabel)},{title:o(W.a.orderDate)},o(X.a.updated),{title:o(X.a.status)}].map((function(e){return"object"!=typeof e||C||L||0===V.length?e:Z(Z({},e),{transforms:[T.a]})})),z=Object(c.useSelector)((function(e){return e.portfolioReducer.portfolioItems.data})),ne=V.map((function(e){var t=function(e,t){var r=e.orderItems,n=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return n?{orderPlatform:n.service_offering_source_ref,orderPortfolio:n.portfolio_id}:{}}(e,z),r=t.orderPlatform,n=t.orderPortfolio,a=function(e,t){var r=e.orderItems,n=e.id,a=r[0]&&t.find((function(e){var t=e.id;return r[0].portfolio_item_id===t}));return a?a.name:"Order "+n}(e,z);return U(Z(Z({},e),{orderName:a}),r,n,o)}));Object(n.useEffect)((function(){S({type:"setFetching",payload:!0}),Promise.all([i(Object(M.d)(N,null==l?void 0:l.orders)),i(Object(x.c)())]).then((function(){return S({type:"setFetching",payload:!1})}))}),[]);var ae=function(e,t){return S({type:"setFetching",payload:!0}),i(Object(M.d)(N,Z(Z({},t),{sortBy:re[B.index],sortDirection:B.direction,sortIndex:B.index}))).then((function(){return S({type:"setFetching",payload:!1})})).catch((function(){return S({type:"setFetching",payload:!1})}))},oe=function(e){var t;void 0===e&&(e=""),S({type:"setFilterValue",payload:e}),$(Z(Z({},N),((t={})[R]=e,t)),Z(Z({},G),{sortBy:re[B.index],sortDirection:B.direction,sortIndex:B.index,offset:0}),i,(function(e){return S({type:"setFilteringFlag",payload:e})}))},ie=function(){return S({type:"replaceFilterChip",payload:ee.filters}),$(ee.filters,Z(Z({},G),{sortBy:re[B.index],sortDirection:B.direction,sortIndex:B.index}),i,(function(e){return S({type:"setFilteringFlag",payload:e})}))};return a.a.createElement(u.a,{hasGutter:!0},a.a.createElement(d.a,null,a.a.createElement(O.Section,{type:"content"},!G.noData&&a.a.createElement(_.PrimaryToolbar,{activeFiltersConfig:{filters:Object.entries(N).filter((function(e){var t=e[1];return t&&t.length>0})).map((function(e){var t=e[0],r=e[1];return{category:t,type:t,chips:Array.isArray(r)?r.map((function(e){return{name:e}})):[{name:r}]}})),onDelete:function(e,t,r){var n=t[0];if(r)return ie();var a=Z({},N);"state"===n.type?a[n.type]=a[n.type].filter((function(e){var t;return e!==(null===(t=null==n?void 0:n.chips)||void 0===t?void 0:t[0].name)})):a[n.type]="",S({type:"replaceFilterChip",payload:a}),$(a,G,i,(function(e){return S({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return S({type:"setFilterType",payload:t})},value:R,items:[{filterValues:{items:[{value:"Approval Pending",label:o(q.a.approvalPending)},{value:"Canceled",label:o(q.a.canceled)},{value:"Completed",label:o(q.a.completed)},{value:"Created",label:o(X.a.created)},{value:"Failed",label:o(q.a.failed)},{value:"Ordered",label:o(q.a.ordered)}],value:N.state,onChange:function(e,t){return oe(t)}},label:"State",value:"state",type:"checkbox"},{filterValues:{value:N.owner,onChange:function(e,t){return oe(t)}},label:"Owner",value:"owner"}]},pagination:a.a.createElement(K.a,{isDisabled:C||L,apiRequest:ae,meta:G,isCompact:!0})}),a.a.createElement(P.b,Z({"aria-label":"orders"},C||L||0!==V.length?{sortBy:B,onSort:function(e,t,r){return S({type:"setSortBy",payload:{index:t,direction:r}}),i(Object(M.d)(N,Z(Z({},G),{sortBy:re[t],sortDirection:r,sortIndex:t}))).then((function(){return S({type:"setFetching",payload:!1})}))}}:{},{cells:J,rows:C||L?[]:ne,className:"orders-table"}),a.a.createElement(I.a,null),a.a.createElement(F.a,null)),!(C||L)&&0===V.length&&a.a.createElement(E.EmptyTable,null,a.a.createElement(p.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,null,a.a.createElement(m.a,{icon:w.a})),a.a.createElement(y.a,{headingLevel:"h1",size:"lg"},G.noData?o(W.a.noOrdersTitle):o(H.a.noResults)),a.a.createElement(v.a,null,G.noData?o(W.a.noOrdersDescription):o(H.a.noResultsDescription)),!G.noData&&a.a.createElement(b.a,null,a.a.createElement(h.a,{variant:"link",onClick:ie},o(H.a.clearFilters)))))),(C||L)&&a.a.createElement(k.e,null),a.a.createElement(j.TableToolbar,{className:"pf-u-mr-0"},a.a.createElement("div",{className:"bottom-pagination-container"},a.a.createElement(g.a,{justifyContent:{default:"justifyContentFlexEnd"}},G&&G.count>0&&a.a.createElement(K.a,{className:"pf-u-mt-0",isDisabled:C||L,apiRequest:ae,meta:G})))))))};t.default=function(){return Object(n.useEffect)((function(){window.insights.chrome.appNavClick({id:"orders",secondaryNav:!0})}),[]),a.a.createElement(o.a,null,a.a.createElement(i.a,{schema:s()}),a.a.createElement(ne,null))}}}]);
//# sourceMappingURL=../sourcemaps/orders~91f4305a.js.map