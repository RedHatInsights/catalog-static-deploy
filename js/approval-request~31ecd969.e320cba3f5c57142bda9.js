(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1020:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a(519),o=a(895),i=a(886),u=a(138),s=a(327),m=a(514),d=a(515),f=a(540),p=a(541),b=a(181),E=a(203),h=a(73),v=a(979),g=a(980),j=a(806),O=a(675),w=a(1001),y=a(906),x=a(1006),I=a(1003),N=a(544),_=a(871),k=a.n(_),S=a(644),C=a(567),q=a(638),z=a(125),L=a(28),D=a(701),F=a(6),M=a(126),R=function(e,t,a,n){return new(a||(a=Promise))((function(r,c){function l(e){try{i(n.next(e))}catch(e){c(e)}}function o(e){try{i(n.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,o)}i((n=n.apply(e,t||[])).next())}))},T=function(e,t){var a,n,r,c,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(c){return function(o){return function(c){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,n=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!(r=l.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){l.label=c[1];break}if(6===c[0]&&l.label<r[1]){l.label=r[1],r=c;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(c);break}r[2]&&l.ops.pop(),l.trys.pop();continue}c=t.call(e,l)}catch(e){c=[6,e],n=0}finally{a=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}},W=["updated","group_name","decision"],A=function(e){return!e||!e.data||0===e.data.length};t.default=function(){var e=Object(L.a)(),t=Object(c.d)(),a=Object(n.useState)({}),_=a[0],G=a[1],P=Object(c.e)((function(e){return e.orderReducer.orderDetail})),V=P.order,B=P.approvalRequest,H=P.platform,J=P.orderItem,U=P.portfolio,K=P.portfolioItem,Q=Object(n.useState)(!0),X=Q[0],Y=Q[1];Object(n.useEffect)((function(){var e;(null==J?void 0:J.id)&&A(B)&&(Y(!0),(e=function(){return t(Object(S.b)(J.id))},R(void 0,void 0,void 0,(function(){var t,a;return T(this,(function(n){switch(n.label){case 0:t=0,n.label=1;case 1:return t<=F.i?[4,e()]:[3,4];case 2:return(null==(a=n.sent())?void 0:a.data.length)>0||t++>=F.i?[2,"Finished"]:[4,Object(M.b)(3e3)];case 3:return n.sent(),[3,1];case 4:return[2]}}))}))).then((function(){return Y(!1)})))}),[]);if(A(B)&&!X)return r.a.createElement(l.a,{id:"no-approval-requests"},r.a.createElement(o.a,{direction:{default:"column"},grow:{default:"grow"}},r.a.createElement(l.a,null,r.a.createElement(k.a,{size:"xl"})),r.a.createElement(l.a,null,r.a.createElement(i.a,{headingLevel:"h1",size:"2xl"},e(C.a.noApprovalRequests)))));var Z=[{title:"Updated",transforms:[j.a]},{title:"Name",transforms:[j.a]},"Decision"],$=function(e){return D.a[q.a[Object(q.b)(e.decision)].defaultMessage||"Unknown"]},ee=(null==B?void 0:B.data.map((function(t){return W.map((function(a){return"decision"===a?r.a.createElement(O.a,null,r.a.createElement(u.a,{style:{color:$(t).color}},$(t).icon," ",e(q.a[Object(q.b)(t[a])]))):"updated"===a?r.a.createElement(n.Fragment,null,r.a.createElement(N.a,{date:t[a],type:"exact"})):t[a]}))})).sort((function(e,t){return e[_.index]<t[_.index]?-1:e[_.index]<t[_.index]?1:0})))||[];return r.a.createElement(u.a,null,A(B)?r.a.createElement(l.a,null,r.a.createElement(o.a,{direction:{default:"column"},grow:{default:"grow"}},r.a.createElement(l.a,{id:"creating-approval-request"},r.a.createElement(i.a,{headingLevel:"h1",size:"xl"},e(C.a.creatingApprovalRequest))),r.a.createElement(l.a,null,r.a.createElement(s.a,{size:"xl"})))):r.a.createElement(m.a,{hasGutter:!0},r.a.createElement(d.a,{md:12,lg:6,xl:4},r.a.createElement(f.a,{hasGutter:!0},r.a.createElement(p.a,null,r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"pf-u-mb-md",component:h.b.h2},e(C.a.approvalTitle)),r.a.createElement(v.a,{component:v.b.dl},r.a.createElement(g.a,{component:g.b.dt},e(z.a.product)),r.a.createElement(g.a,{component:g.b.dd},K.name),r.a.createElement(g.a,{component:g.b.dt},e(C.a.orderID)),r.a.createElement(g.a,{component:g.b.dd},V.id),r.a.createElement(g.a,{component:g.b.dt},e(C.a.orderDate)),r.a.createElement(g.a,{component:g.b.dd},r.a.createElement(N.a,{date:V.created_at,variant:"relative"})),r.a.createElement(g.a,{component:g.b.dt},e(C.a.orderedByLabel)),r.a.createElement(g.a,{component:g.b.dd},V.owner),r.a.createElement(g.a,{component:g.b.dt},e(z.a.portfolio)),r.a.createElement(g.a,{component:g.b.dd},U.name),r.a.createElement(g.a,{component:g.b.dt},e(z.a.platform)),r.a.createElement(g.a,{component:g.b.dd},H.name))))),r.a.createElement(p.a,null,r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"pf-u-mb-md",component:h.b.h2},e(C.a.approvalParameters)),r.a.createElement(v.a,{className:"overflow-wrap",component:v.b.dl},Object.entries((null==J?void 0:J.service_parameters)||[]).map((function(e){var t=e[0],a=e[1];return r.a.createElement(n.Fragment,{key:t},r.a.createElement(g.a,{component:g.b.dt},t),r.a.createElement(g.a,{component:g.b.dd},a))})))))))),r.a.createElement(d.a,{md:12,lg:6,xl:8},r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"pf-u-mb-md",component:h.b.h2},e(C.a.activity)),r.a.createElement(w.a,{"aria-label":"Approval request activity",onSort:function(e,t,a){return G({index:t,direction:a})},sortBy:_,cells:Z,rows:_.direction===y.a.asc?ee:ee.reverse()},r.a.createElement(x.a,null),r.a.createElement(I.a,null)))))))}},871:function(e,t,a){"use strict";t.__esModule=!0,t.InfoIconConfig={name:"InfoIcon",height:512,width:192,svgPath:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z",yOffset:0,xOffset:0},t.InfoIcon=a(92).createIcon(t.InfoIconConfig),t.default=t.InfoIcon},895:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(2),r=a(0),c=a(1),l=a(723),o=a.n(l),i=a(27);const u=e=>{var{children:t=null,className:a="",spacer:l,spaceItems:u,grow:s,shrink:m,flex:d,direction:f,alignItems:p,alignContent:b,alignSelf:E,align:h,justifyContent:v,display:g,fullWidth:j,flexWrap:O}=e,w=Object(n.__rest)(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return r.createElement("div",Object.assign({className:Object(c.css)(o.a.flex,Object(i.e)(l,o.a),Object(i.e)(u,o.a),Object(i.e)(s,o.a),Object(i.e)(m,o.a),Object(i.e)(d,o.a),Object(i.e)(f,o.a),Object(i.e)(p,o.a),Object(i.e)(b,o.a),Object(i.e)(E,o.a),Object(i.e)(h,o.a),Object(i.e)(v,o.a),Object(i.e)(g,o.a),Object(i.e)(j,o.a),Object(i.e)(O,o.a),a)},w),t)};u.displayName="Flex"},979:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var n,r=a(2),c=a(0),l=a(1);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(n||(n={}));const o=e=>{var{children:t=null,className:a="",component:o=n.ul}=e,i=Object(r.__rest)(e,["children","className","component"]);const u=o;return c.createElement(u,Object.assign({},i,{"data-pf-content":!0,className:Object(l.css)(a)}),t)};o.displayName="TextList"},980:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var n,r=a(2),c=a(0),l=a(1);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(n||(n={}));const o=e=>{var{children:t=null,className:a="",component:o=n.li}=e,i=Object(r.__rest)(e,["children","className","component"]);const u=o;return c.createElement(u,Object.assign({},i,{"data-pf-content":!0,className:Object(l.css)(a)}),t)};o.displayName="TextListItem"}}]);
//# sourceMappingURL=../sourcemaps/approval-request~31ecd969.js.map