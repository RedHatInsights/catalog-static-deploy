(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1085:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a(600),s=a(912),o=a(888),i=a(77),m=a(147),u=a(358),d=a(193),f=a(221),p=a(779),g=a(677),b=a(741),E=a(752),O=a(751),v=a(881),h=a.n(v),j=a(729),I=a(647),y=a(26),w=a(727),x=a(829),M=a(237),C=a(596),N=a(597),_=a(614),P=a(615),z=a(848),k=a.n(z),S=function(e){var t=e.orderItem,a=e.progressMessages,n=e.formatMessage;return r.a.createElement(C.a,{hasGutter:!0},r.a.createElement(N.a,{md:12,lg:6,xl:4},r.a.createElement(_.a,{hasGutter:!0},r.a.createElement(P.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(m.a,null,r.a.createElement(i.a,{className:"pf-u-mb-md",component:i.b.h2},n(I.a.orderItemParameters))),(null==t?void 0:t.service_parameters)&&r.a.createElement(k.a,{src:t.service_parameters})))))),r.a.createElement(N.a,{md:12,lg:6,xl:8},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(m.a,null,r.a.createElement(i.a,{className:"pf-u-mb-md",component:i.b.h2},n(I.a.orderProgressMessages))),r.a.createElement(k.a,{src:a})))))},W=a(153),A=a(130),F=function(){return(F=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},V=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var l=arguments[t],c=0,s=l.length;c<s;c++,r++)n[r]=l[c];return n};t.default=function(){var e=Object(y.a)(),t=Object(n.useState)(!0),a=t[0],v=t[1],C=Object(l.d)(),N=Object(l.e)((function(e){return e.orderReducer.orderDetail})).order,_=Object(l.e)((function(e){return e.orderReducer.orderProvision})),P=Object(n.useContext)(W.a).permissions,z=Object(A.b)(P,["catalog:order_processes:link"]);if(!a&&function(e){return!e||!e.orderItems||0===e.orderItems.length}(_))return r.a.createElement(c.a,{id:"no-order-provision"},r.a.createElement(s.a,{direction:{default:"column"},grow:{default:"grow"}},r.a.createElement(c.a,null,r.a.createElement(h.a,{size:"xl"})),r.a.createElement(c.a,null,r.a.createElement(o.a,{headingLevel:"h1",size:"2xl"},e(I.a.noOrderProvision)))));var k=[{title:"Updated",cellFormatters:z?[p.b]:[]},{title:"Type"},{title:"Activity"},{title:""}],D=function(e,t){var a,n=Object(w.b)(e.state);return{id:e.id,isOpen:!1,cells:[{title:r.a.createElement(i.a,{className:"pf-u-mb-0",component:i.b.small},r.a.createElement(M.DateFormat,{date:e.updated_at,type:"exact"}))},{title:r.a.createElement(i.a,{className:"pf-u-mb-0",component:i.b.small},r.a.createElement(g.a,null,(a=e.process_scope||t(I.a.defaultOrderItemType),(null==a?void 0:a.charAt(0).toUpperCase())+(null==a?void 0:a.slice(1)))))},{title:r.a.createElement(i.a,{className:"pf-u-mb-0",component:i.b.small},r.a.createElement(g.a,null,e.name))},{title:r.a.createElement(g.a,null,r.a.createElement(m.a,{style:{color:x.a[e.state].color}},x.a[e.state].icon," ",t(w.a[n])))}]}},G=function(e,t,a){var n=[D(e,t)];if(z&&_.progressMessageItems&&_.progressMessageItems.length>0){var l=_.progressMessageItems.find((function(t){return t.orderItemId===e.id}));l&&n.push(function(e,t,a,n){return{parent:2*n,cells:[{title:r.a.createElement(S,{orderItem:e,progressMessages:t,formatMessage:a})}]}}(e,l.progressMessages,t,a))}return n},H=function(){return _.orderItems.reduce((function(t,a,n){var r=G(a,e,n);return V(t,r)}),[])},J=Object(n.useState)(H()),L=J[0],R=J[1];Object(n.useEffect)((function(){v(!0),Promise.all([C(Object(j.d)(N.id))]).then((function(){return v(!1)}))}),[]),Object(n.useEffect)((function(){R(H())}),[null==_?void 0:_.orderItems]);return r.a.createElement(m.a,null,a?r.a.createElement(c.a,null,r.a.createElement(s.a,{direction:{default:"column"},grow:{default:"grow"}},r.a.createElement(c.a,{id:"fetching-order-provision"},r.a.createElement(o.a,{headingLevel:"h1",size:"xl"},e(I.a.fetchingOrderProvision))),r.a.createElement(c.a,null,r.a.createElement(u.a,{size:"xl"})))):r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(i.a,{className:"pf-u-mb-md",component:i.b.h2},e(I.a.activity)),r.a.createElement(b.a,{"aria-label":"Order provisioning activity",cells:k,rows:L,onCollapse:z?function(e,t,a,n){var r,l,c=(r=L,l=n.id,r.map((function(e){return e.id===l?F(F({},e),{isOpen:!e.isOpen}):F({},e)})));R(c)}:void 0},r.a.createElement(E.a,null),r.a.createElement(O.a,null)))))}},881:function(e,t,a){"use strict";t.__esModule=!0,t.InfoIconConfig={name:"InfoIcon",height:512,width:192,svgPath:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z",yOffset:0,xOffset:0},t.InfoIcon=a(97).createIcon(t.InfoIconConfig),t.default=t.InfoIcon},912:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),r=a(0),l=a(1),c=a(830),s=a.n(c),o=a(24);const i=e=>{var{children:t=null,className:a="",spacer:c,spaceItems:i,grow:m,shrink:u,flex:d,direction:f,alignItems:p,alignContent:g,alignSelf:b,align:E,justifyContent:O,display:v,fullWidth:h,flexWrap:j}=e,I=Object(n.__rest)(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return r.createElement("div",Object.assign({className:Object(l.css)(s.a.flex,Object(o.e)(c,s.a),Object(o.e)(i,s.a),Object(o.e)(m,s.a),Object(o.e)(u,s.a),Object(o.e)(d,s.a),Object(o.e)(f,s.a),Object(o.e)(p,s.a),Object(o.e)(g,s.a),Object(o.e)(b,s.a),Object(o.e)(E,s.a),Object(o.e)(O,s.a),Object(o.e)(v,s.a),Object(o.e)(h,s.a),Object(o.e)(j,s.a),a)},I),t)};i.displayName="Flex"}}]);
//# sourceMappingURL=../sourcemaps/order-provision~31ecd969.js.map