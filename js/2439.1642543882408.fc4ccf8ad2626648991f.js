"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[2439],{47126:(e,r,t)=>{t.d(r,{Gq:()=>s,iu:()=>i,F_:()=>u,GY:()=>c});var n=t(22437),o=t(35388),a=(0,n.Hx)(),s=function(e){return a.get(o.Vs+"/portfolio_items/"+e+"/service_plans/?extra=true")},i=function(e,r){return a.patch(o.Vs+"/service_plans/"+e+"/",r)},u=function(e,r){return void 0===r&&(r={}),a.post(o.Vs+"/service_plans/",e)},c=function(e,r){return a.post(o.Vs+"$/service_plans/"+e+"/reset/")}},40229:(e,r,t)=>{t.d(r,{Z:()=>n});const n=(0,t(50049).vU)({orderedBy:{id:"orders.common.orderedBy",defaultMessage:"Ordered by {owner}"},orderedByLabel:{id:"orders.approval.orderedBy",defaultMessage:"Ordered by"},lastUpdated:{id:"orders.common.lastUpdated",defaultMessage:"Last updated"},compositeTitle:{id:"orders.common.compositeTitle",defaultMessage:"{name} - Order # {id}"},detailTitle:{id:"orders.detail.title",defaultMessage:"Order ID {id}"},orderSuccess:{id:"orders.notification.success",defaultMessage:"You can track the progress of Order # {id} in your <link>Orders</link> page."},noOrdersTitle:{id:"orders.list.empty.title",defaultMessage:"No orders"},noOrdersDescription:{id:"orders.list.empty.description",defaultMessage:"No orders have been created."},noApprovalRequests:{id:"orders.approval.no-requests",defaultMessage:"We were unable to find any approval requests for this order."},creatingApprovalRequest:{id:"orders.approval.creating",defaultMessage:"Creating approval request"},approvalTitle:{id:"orders.approval.title",defaultMessage:"Summary"},approvalDetail:{id:"orders.approval.view-detail",defaultMessage:"View this order's approval request details"},approvalCreated:{id:"orders.approval.details.created",defaultMessage:"Request created"},approvalReason:{id:"orders.approval.details.reason",defaultMessage:"Approval reason"},approvalCompleted:{id:"orders.approval.details.completed",defaultMessage:"Completed at"},orderDetails:{id:"orders.common.details",defaultMessage:"Order details"},menuApproval:{id:"orders.menu.approval",defaultMessage:"Approval"},menuProvision:{id:"orders.menu.provision",defaultMessage:"Provision"},menuLifecycle:{id:"orders.menu.lifecycle",defaultMessage:"Lifecycle"},menuSteps:{id:"orders.menu.steps",defaultMessage:"Order steps"},objectsNotFound:{id:"order.detail.not-found",defaultMessage:"The {objects} for this order {count, plural, one {is} other {are}} not available"},orderID:{id:"orders.order.detail.ID",defaultMessage:"Order ID"},orderParameters:{id:"orders.order.detail.parameters",defaultMessage:"Order parameters"},orderItemParameters:{id:"orders.order.provision.parameters",defaultMessage:"Parameters"},defaultOrderItemType:{id:"orders.order.default_type",defaultMessage:"Product"},orderProgressMessages:{id:"orders.order.detail.messages",defaultMessage:"Progress messages"},lifecycleLink:{id:"orders.order.lifecycle.link",defaultMessage:"Manage product"},cancelOrder:{id:"orders.actions.cancel",defaultMessage:"Cancel order"},reOrder:{id:"orders.actions.reorder",defaultMessage:"Reorder"},keepOrder:{id:"orders.actions.keep",defaultMessage:"Keep order"},cancelDescription:{id:"orders.cancel.description",defaultMessage:"Are you sure you want to cancel {name}?"},backToOrders:{id:"orders.toolbar.backLink",defaultMessage:"Back to orders"},orderDate:{id:"orders.approval.order-date",defaultMessage:"Order date"},approvalParameters:{id:"orders.approval.parameters",defaultMessage:"Parameters"},activity:{id:"orders.approval.activity",defaultMessage:"Activity"},artifacts:{id:"orders.artifacts",defaultMessage:"Order artifacts"},noOrderProvision:{id:"orders.provision.no-items",defaultMessage:"We were unable to find provisioning data for this order."},fetchingOrderProvision:{id:"orders.provision.fetching-provision",defaultMessage:"Retrieving order provisioning data"}})},69048:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(30624),o=t.n(n),a=t(334),s=t(83215),i=t(36722),u=t(40229),c=t(23349);const l=function(e){var r=e.id,t=e.dispatch,n=e.portfolioItemId,l=e.portfolioId,d=e.platformId,f=e.orderItemId;return(0,c.Z)()(u.Z.orderSuccess,{id:r,link:function(e){return o().createElement(a.Link,{onClick:function(){return t((0,s.L1)())},to:{pathname:i.A5,search:"?order="+r+"&order-item="+f+"&portfolio-item="+n+"&platform="+d+"&portfolio="+l}},e)}})}},85132:(e,r,t)=>{t.d(r,{MX:()=>x,gP:()=>j,zr:()=>L,AU:()=>M,kL:()=>P,g3:()=>E});var n=t(83215),o=t(90060),a=t(22437),s=t(35388),i=t(7247),u=t(14816),c=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function s(e){try{u(n.next(e))}catch(e){a(e)}}function i(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,i)}u((n=n.apply(e,r||[])).next())}))},l=function(e,r){var t,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},d=(0,a.Hx)(),f=function(e){return c(void 0,void 0,void 0,(function(){var r,t,n,o,a;return l(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,d.get(s.Vs+"/orders/"+e+"/order_items/")];case 1:return t=i.sent(),r=t.results,[3,3];case 2:if(n=i.sent(),r=[],404!==n.status&&400!==n.status)throw n;return u.Z.replace({pathname:"/404",state:{from:u.Z.location}}),[3,3];case 3:return o=[],a=r.map((function(e){return d.get(s.Vs+"/order_items/"+e.id+"/progress_messages/").then((function(r){return o.push({orderItemId:e.id||"",progressMessages:r.results}),o}))})),[4,Promise.all(a)];case 4:return i.sent(),[2,{orderItems:r,progressMessageItems:o}]}}))}))},p=function(){return(p=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},v=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function s(e){try{u(n.next(e))}catch(e){a(e)}}function i(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,i)}u((n=n.apply(e,r||[])).next())}))},m=function(e,r){var t,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},h=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},y=(0,a.Hx)(),g=function(e,r){var t,n,o,a;return v(void 0,void 0,void 0,(function(){var i,u,c;return m(this,(function(l){switch(l.label){case 0:return t=e.service_parameters,n=t.providerControlParameters,o=h(t,["providerControlParameters"]),a=h(e,["service_parameters"]),[4,y.post(s.Vs+"/orders/")];case 1:return i=l.sent(),(u={}).count=1,u=p(p(p({},u),a),{service_parameters:o,provider_control_parameters:n||{}}),[4,y.post(s.Vs+"/orders/"+i.id+"/order_items/",p({id:i.id,name:"orderItem_"+i.id,portfolio_item:r.id},u))];case 2:return c=l.sent(),[2,y.post(s.Vs+"/orders/"+i.id+"/submit/").then((function(e){return p(p({},e),{orderItem:c})}))]}}))}))},b=t(69048),_=(t(80758),t(47126)),w=t(30624),O=t.n(w),I=function(){return(I=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},P=function(e){return{type:o._f,payload:(0,_.Gq)(e)}},E=function(e,r){return function(t){return t({type:o.LL,payload:g(e,r).then((function(e){var o=e.id,a=e.orderItem;return t((0,n.wN)({variant:"success",title:"Your order has been accepted successfully",description:O().createElement(b.Z,{id:o,dispatch:t,portfolioItemId:r.id,portfolioId:r.portfolio,platformId:r.service_offering_source_ref,orderItemId:a.id}),dismissable:!0}))}))})}},M=function(e,r){return void 0===r&&(r=i.he),function(t){var n=Object.entries(e).filter((function(e){var r=e[1];return r&&r.length>0})).map((function(e){var r=e[0],t=e[1];return Array.isArray(t)?t.map((function(e){return r+"="+e})).join("&"):r+"="+t})).join("&");return r.sortBy&&(n=n+"&sort_by="+r.sortBy+":"+(r.sortDirection||"desc")),t({type:o.m7+"_PENDING"}),function(e,r){return void 0===e&&(e=""),void 0===r&&(r=i.he),y.get(s.Vs+"/orders/?extra=true"+((null==e?void 0:e.length)>1?"&":"")+e+"&page_size="+r.limit+"&page="+(r.offset||1))}(n,r).then((function(a){var s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(a,[]);return t({type:o.m7+"_FULFILLED",meta:I(I({},r),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:s})})).catch((function(e){return t({type:o.m7+"_REJECTED",payload:e})}))}},j=function(e){return function(r){return r({type:o.g1+"_PENDING"}),function(e){return r=e.order,c(void 0,void 0,void 0,(function(){var e,t,n,o,a,i,c,f;return l(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,d.get(s.Vs+"/orders/"+r+"/?extra=true")];case 1:return e=l.sent(),[3,3];case 2:if(t=l.sent(),e={},404!==t.status&&400!==t.status)throw t;return u.Z.replace({pathname:"/404",state:{from:u.Z.location}}),[3,3];case 3:return n=null===(c=null==e?void 0:e.extra_data)||void 0===c?void 0:c.order_items,o=n[0],a={object:"Product",notFound:!0},o&&(a=null===(f=o.extra_data)||void 0===f?void 0:f.portfolio_item),i=[d.get(s.np+"/sources/"+a.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),d.get(s.Vs+"/order_items/"+o.id+"/progress_messages/").catch((function(){return{object:"Messages",notFound:!0}})),d.get(s.Vs+"/portfolios/"+a.portfolio).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(i).then((function(r){var t=r[0],n=r[1],s=r[2];return[e,o,a,t,n,s]}))]}}))}));var r}(e).then((function(e){var t=e[0],n=e[1],a=e[2],s=e[3],i=e[4],u=e[5];return r({type:o.g1+"_FULFILLED",payload:{order:t,orderItem:n,portfolioItem:a,platform:s,progressMessages:i,portfolio:u}})})).catch((function(e){return r({type:o.g1+"_REJECTED",payload:e})}))}},x=function(e){return function(r){return r({type:o.tU+"_PENDING"}),(t=e,y.get(s.Vs+"/orders/"+t+"/approval_requests/").then((function(e){var r=e.results.map((function(e){var r;return r=e.approval_request_ref,y.get(s._R+"/requests/"+r+"/?extra=true").then((function(e){return e&&e.extra_data>0&&e.number_of_children>0?e.extra_data.subrequests:[e]}))}));return Promise.all(r).then((function(e){var r;return{data:(null===(r=null==e?void 0:e[0])||void 0===r?void 0:r.map((function(e){var r,t=e.actions,n=h(e,["actions"]);return p(p({},n),{updated:(null==t?void 0:t.length)>0?null===(r=t.pop())||void 0===r?void 0:r.created_at:n.created_at})})))||[]}}))}))).then((function(e){return r({type:o.tU+"_FULFILLED",payload:e}),e})).catch((function(e){return r({type:o.tU+"_REJECTED",payload:e})}));var t}},L=function(e){return function(r){return r({type:o.sE+"_PENDING"}),function(e){return v(void 0,void 0,void 0,(function(){return m(this,(function(r){switch(r.label){case 0:return[4,f(e)];case 1:return[2,r.sent()]}}))}))}(e).then((function(e){var t=e.orderItems,n=e.progressMessageItems;return r({type:o.sE+"_FULFILLED",payload:{orderItems:t,progressMessageItems:n}})})).catch((function(e){return r({type:o.sE+"_REJECTED",payload:e})}))}}},2482:(e,r,t)=>{t.d(r,{sl:()=>L,MX:()=>F,gP:()=>k,zr:()=>V,AU:()=>D,kL:()=>j,g3:()=>x});var n=t(30624),o=t.n(n),a=t(83215),s=t(90060),i=t(22437),u=t(35388),c=t(7247),l=t(14816),d=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function s(e){try{u(n.next(e))}catch(e){a(e)}}function i(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,i)}u((n=n.apply(e,r||[])).next())}))},f=function(e,r){var t,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},p=(0,i.Hx)(),v=function(e){return d(void 0,void 0,void 0,(function(){var r,t,n,o,a;return f(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,p.get(u.Vs+"/order_items/?order_id="+e)];case 1:return t=s.sent(),r=t.data,[3,3];case 2:if(n=s.sent(),r=[],404!==n.status&&400!==n.status)throw n;return l.Z.replace({pathname:"/404",state:{from:l.Z.location}}),[3,3];case 3:return o=[],a=r.map((function(e){return p.get(u.Vs+"/order_items/"+e.id+"/progress_messages").then((function(r){return o.push({orderItemId:e.id||"",progressMessages:r.data}),o}))})),[4,Promise.all(a)];case 4:return s.sent(),[2,{orderItems:r,progressMessageItems:o}]}}))}))},m=function(){return(m=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},h=function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function s(e){try{u(n.next(e))}catch(e){a(e)}}function i(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,i)}u((n=n.apply(e,r||[])).next())}))},y=function(e,r){var t,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},g=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},b=(0,i.Xd)(),_=((0,i.O9)(),(0,i.HK)()),w=(0,i.Hx)(),O=(0,i.mY)(),I=function(e){return _.listServicePlans(e)},P=t(69048),E=t(80758),M=function(){return(M=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},j=function(e){return{type:s._f,payload:I(e)}},x=function(e,r){return function(t){return t({type:s.LL,payload:(n=e,h(void 0,void 0,void 0,(function(){var e,r,t;return y(this,(function(o){switch(o.label){case 0:return i=n.service_parameters,u=i.providerControlParameters,c=g(i,["providerControlParameters"]),l=g(n,["service_parameters"]),[4,b.createOrder()];case 1:return e=o.sent(),(r={}).count=1,r=m(m(m({},r),l),{service_parameters:c,provider_control_parameters:u||{}}),[4,b.addToOrder(e.id,r)];case 2:return t=o.sent(),[2,b.submitOrder(e.id).then((function(e){return m(m({},e),{orderItem:t})}))]}}))}))).then((function(e){var n=e.id,s=e.orderItem;return t((0,a.wN)({variant:"success",title:"Your order has been accepted successfully",description:o().createElement(P.Z,{id:n,dispatch:t,portfolioItemId:r.id,portfolioId:r.portfolio_id,platformId:r.service_offering_source_ref,orderItemId:s.id}),dismissable:!0}))}))});var n,i,u,c,l}},L=function(e){return function(r,t){r({type:s.Qm+"_PENDING"});var n=t().orderReducer.orderDetail;return function(e){return b.cancelOrder(e)}(e).then((function(){return n.order.state=E.OrderStateEnum.Canceled,n.approvalRequest&&n.approvalRequest.data.length>0&&(n.approvalRequest.data[0].state="canceled"),r({type:s.g1,payload:M({},n)}),n})).then((function(e){return r((0,a.wN)({variant:"success",title:"Your order has been canceled successfully",description:"Order #"+e.order.id+" was canceled.",dismissable:!0}))})).then((function(){return r({type:s.Qm+"_FULFILLED"})})).catch((function(e){r({type:s.Qm+"_REJECTED",payload:e})}))}},D=function(e,r){return void 0===r&&(r=c.he),function(t){var n=Object.entries(e).filter((function(e){var r=e[1];return r&&r.length>0})).map((function(e){var r=e[0],t=e[1];return Array.isArray(t)?t.map((function(e){return"filter["+r+"][]="+e})).join("&"):"filter["+r+"][contains_i]="+t})).join("&");return r.sortBy&&(n=n+"&sort_by="+r.sortBy+":"+(r.sortDirection||"desc")),t({type:s.m7+"_PENDING"}),function(e,r){return void 0===e&&(e=""),void 0===r&&(r=c.he),w.get(u.Vs+"/orders?"+e+"&limit="+r.limit+"&offset="+r.offset).then((function(e){return(r=e.data.map((function(e){return e.id})),w.get(u.Vs+"/order_items?limit="+(3*r.length||c.he.limit)+(r.length?"&":"")+r.map((function(e){return"filter[order_id][]="+e})).join("&"))).then((function(r){return(t=r.data.map((function(e){return e.portfolio_item_id})),w.get(u.Vs+"/portfolio_items?"+t.map((function(e){return"filter[id][]="+e})).join("&"))).then((function(t){return m(m({portfolioItems:t},e),{data:e.data.map((function(e){return m(m({},e),{orderItems:r.data.filter((function(r){return r.order_id===e.id}))})}))})}));var t}));var r}))}(n,r).then((function(o){var a=o.portfolioItems,i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(o,["portfolioItems"]);return t({type:s.F0,payload:a}),t({type:s.m7+"_FULFILLED",meta:M(M({},r),{filter:n,filters:e,storeState:!0,stateKey:"orders"}),payload:i})})).catch((function(e){return t({type:s.m7+"_REJECTED",payload:e})}))}},k=function(e){return function(r){return r({type:s.g1+"_PENDING"}),function(e){if(Object.values(e).some((function(e){return!e})))return r=e.order,d(void 0,void 0,void 0,(function(){var e,t,n,o,a,s;return f(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,p.get(u.Vs+"/orders/"+r)];case 1:return e=i.sent(),[3,3];case 2:if(t=i.sent(),e={},404!==t.status&&400!==t.status)throw t;return l.Z.replace({pathname:"/404",state:{from:l.Z.location}}),[3,3];case 3:n={object:"Order item",notFound:!0},i.label=4;case 4:return i.trys.push([4,6,,7]),[4,p.get(u.Vs+"/order_items/?order_id="+e.id)];case 5:return o=i.sent(),n=o.data[0],[3,7];case 6:return i.sent(),[3,7];case 7:a={object:"Product",notFound:!0},i.label=8;case 8:return i.trys.push([8,10,,11]),[4,p.get(u.Vs+"/portfolio_items/"+n.portfolio_item_id)];case 9:return a=i.sent(),[3,11];case 10:return i.sent(),[3,11];case 11:return s=[p.get(u.np+"/sources/"+a.service_offering_source_ref).catch((function(){return{object:"Platform",notFound:!0}})),p.get(u.Vs+"/order_items/"+n.id+"/progress_messages").catch((function(){return{object:"Messages",notFound:!0}})),p.get(u.Vs+"/portfolios/"+a.portfolio_id).catch((function(){return{object:"Portfolio",notFound:!0}}))],[2,Promise.all(s).then((function(r){var t=r[0],o=r[1],s=r[2];return[e,n,a,t,o,s]}))]}}))}));var r,t=[w.get(u.Vs+"/orders/"+e.order).catch((function(e){if(404===e.status||400===e.status)return l.Z.replace({pathname:"/404",state:{from:l.Z.location}});throw e})),w.get(u.Vs+"/order_items/"+e["order-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Order item",notFound:!0};throw e})),w.get(u.Vs+"/portfolio_items/"+e["portfolio-item"]).catch((function(e){if(404===e.status||400===e.status)return{object:"Product",notFound:!0};throw e})),w.get(u.np+"/sources/"+e.platform).catch((function(e){if(404===e.status||400===e.status)return{object:"Platform",notFound:!0};throw e})),w.get(u.Vs+"/orders/"+e.order+"/progress_messages").catch((function(e){if(404===e.status||400===e.status)return{};throw e})),w.get(u.Vs+"/portfolios/"+e.portfolio).catch((function(e){if(404===e.status||400===e.status)return{object:"Portfolio",notFound:!0};throw e}))];return Promise.all(t)}(e).then((function(e){var t=e[0],n=e[1],o=e[2],a=e[3],i=e[4],u=e[5];return r({type:s.g1+"_FULFILLED",payload:{order:t,orderItem:n,portfolioItem:o,platform:a,progressMessages:i,portfolio:u}})})).catch((function(e){return r({type:s.g1+"_REJECTED",payload:e})}))}},F=function(e){return function(r){return r({type:s.tU+"_PENDING"}),function(e){return w.get(u.Vs+"/order_items/"+e+"/approval_requests").then((function(e){var r=e.data.map((function(e){var r,t;return r=e.approval_request_ref,O.post(u._R+"/graphql",{query:(t=r,'query {\n  requests(id: "'+t+'") {\n    id\n    number_of_children\n    decision\n    group_name\n    created_at\n    state\n    actions {\n      id\n      created_at\n    }\n    requests {\n      id\n      number_of_children\n      decision\n      group_name\n      state\n      parent_id\n      created_at\n      actions {\n        id\n        created_at\n      }\n    }\n  }\n}')},{"x-rh-persona":"approval/requester"}).then((function(e){var r=e.data.requests;return r&&r.length>0&&r[0].number_of_children>0?r[0].requests:r}))}));return Promise.all(r).then((function(e){var r;return{data:(null===(r=null==e?void 0:e[0])||void 0===r?void 0:r.map((function(e){var r,t=e.actions,n=g(e,["actions"]);return m(m({},n),{updated:(null==t?void 0:t.length)>0?null===(r=t.pop())||void 0===r?void 0:r.created_at:n.created_at})})))||[]}}))}))}(e).then((function(e){return r({type:s.tU+"_FULFILLED",payload:e}),e})).catch((function(e){return r({type:s.tU+"_REJECTED",payload:e})}))}},V=function(e){return function(r){return r({type:s.sE+"_PENDING"}),function(e){return h(void 0,void 0,void 0,(function(){return y(this,(function(r){switch(r.label){case 0:return[4,v(e)];case 1:return[2,r.sent()]}}))}))}(e).then((function(e){var t=e.orderItems,n=e.progressMessageItems;return r({type:s.sE+"_FULFILLED",payload:{orderItems:t,progressMessageItems:n}})})).catch((function(e){return r({type:s.sE+"_REJECTED",payload:e})}))}}}}]);
//# sourceMappingURL=../sourcemaps/2439.ef1b647a648f26878b1caf1d2206baa5.js.map