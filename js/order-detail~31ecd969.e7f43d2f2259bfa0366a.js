(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1026:function(e,t,n){"use strict";n.r(t);var a,r,l,o,c=n(0),i=n.n(c),s=n(100),d=n(324),u=n(540),m=n(541),f=n(204),p=n(176),b=n(519),h=n(179),g=n(743),v=n.n(g),O=n(26),E=n(644),j=n(886),y=n(567),I=n(28),k=function(e){var t=e.orderId,n=Object(I.a)();return i.a.createElement(j.a,{headingLevel:"h1",size:"3xl"},n(y.a.detailTitle,{id:t}))},w=n(520),x=n(67),N=n(543),P=n(151),C=function(e){var t=e.name,n=e.cancelOrder,a=e.onClose,r=e.isOpen,l=Object(I.a)();return i.a.createElement(N.a,{isOpen:r,onClose:a,title:" ","aria-labelledby":"cancel-order",header:i.a.createElement(j.a,{size:"2xl",headingLevel:"h2"},i.a.createElement(P.a,{style:{fill:"#F0AB00"}})," ",l(y.a.cancelOrder)),variant:"small",actions:[i.a.createElement(x.a,{onClick:n,ouiaId:"cancel-order",key:"cancel-order",id:"cancel-order",variant:"danger"},l(y.a.cancelOrder)),i.a.createElement(x.a,{onClick:a,ouiaId:"keep-order",key:"keep-order",id:"keep-order",variant:"link"},l(y.a.keepOrder))]},l(y.a.cancelDescription,{name:t}))},D=n(13),M=n(552),_=["Approval Pending"],L=["Completed"],A=function(e){return void 0===e&&(e=""),_.includes(e)},z=function(e){var t=e.state,n=e.orderId,a=e.portfolioItemName,r=e.portfolioItemId,l=e.portfolioId,o=e.sourceId,s=e.orderable,d=void 0!==s&&s,u=Object(I.a)(),m=Object(O.d)(),f=Object(c.useState)(!1),p=f[0],b=f[1],h=Object(M.a)(),g=function(){return d&&t&&L.includes(t)};return i.a.createElement(c.Fragment,null,i.a.createElement(C,{onClose:function(){return b(!1)},isOpen:p,cancelOrder:function(){b(!1),m(Object(E.a)(n))},name:a}),i.a.createElement(w.a,null,A(t)&&i.a.createElement(x.a,{onClick:function(){return b(!0)},isDisabled:!A(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action",ouiaId:"cancel-order-action"},u(y.a.cancelOrder)),g()&&i.a.createElement(x.a,{onClick:function(){return function(e,t,n){h.push({pathname:D.x,search:"?portfolio="+e+"&portfolio-item="+t+"&source="+n})}(l,r,o)},isDisabled:!g(),type:"button",className:"pf-u-mr-md",id:"reorder-order-action",ouiaId:"reorder-order-action"},u(y.a.reOrder))))},S=n(1014),F=n(590),U=n(6),G=n(553),T=n(638),J=n(701),R=function(){return(R=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},V=function(e){var t=e.portfolioId,n=e.jobName,a=e.portfolioItemId,r=e.sourceId,l=e.state,o=Object(I.a)();return i.a.createElement(f.a,{className:"pf-u-mt-sm",hasGutter:!0},i.a.createElement(f.a,{hasGutter:!0},i.a.createElement(F.a,{sourceId:r,height:60,src:U.e+"/portfolio_items/"+a+"/icon"}),i.a.createElement(j.a,{headingLevel:"h2",size:"lg"},i.a.createElement(G.a,{pathname:"/portfolio/portfolio-item",searchParams:{portfolio:t,source:r,"portfolio-item":a}},n))),i.a.createElement(p.a,null,i.a.createElement(S.a,R({},J.a[l],{variant:"outline"}),o(T.a[Object(T.b)(l)]))))},Z=n(30),B=n(126),q=(n(607),function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}),H=function(){return(H=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},K=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},Q=Object(Z.b)(G.a)(a||(a=q(["\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n"],["\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n"]))),W=Object(Z.b)((function(e){e.isDisabled;var t=K(e,["isDisabled"]);return i.a.createElement("button",H({},t))}))(r||(r=q(["\n  pointer-events: ",";\n"],["\n  pointer-events: ",";\n"])),(function(e){return e.isDisabled?"none":"initial"})),X=Object(Z.b)((function(e){e.isDisabled;var t=K(e,["isDisabled"]);return i.a.createElement("li",H({},t))}))(l||(l=q(["\n  cursor: ",";\n"],["\n  cursor: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"})),Y=function(e){var t=e.baseUrl,n=e.isFetching,a=Object(I.a)(),r=Object(M.a)().push,l=Object(O.e)((function(e){return e.orderReducer.orderDetail||{}})),o=Object(s.h)(),c=o.pathname,d=o.search,u=function(e,t){var n=(void 0===e?{}:e).state;return[{link:"",title:t(y.a.orderDetails)},{link:"/approval",title:t(y.a.menuApproval)},{link:"/provision",title:t(y.a.menuProvision)},{link:"/lifecycle",title:t(y.a.menuLifecycle),isDisabled:Object(B.f)(n)}]}(l.order,a),m=u.findIndex((function(e){var t=e.link;return c.split("/").pop()===t.replace("/","")}));m=m>0?m:0;return i.a.createElement("div",{className:"pf-c-tabs pf-u-pl-md pf-u-pr-md"},i.a.createElement("ul",{className:"pf-c-tabs__list"},u.map((function(e,a){var l=e.link,o=e.title,c=e.isDisabled;return i.a.createElement(X,{className:"pf-c-tabs__item"+(a===m?" pf-m-current":""),isDisabled:c||n,key:l||a},i.a.createElement(W,H({className:"pf-c-tabs__link",isDisabled:c||n},c||n?{tabIndex:-1}:{},{onClick:function(){return r({pathname:""+t+u[a].link,search:d})}}),i.a.createElement(Q,H({exact:!0,nav:!0,isDisabled:c||n,pathname:""+t+l,preserveSearch:!0,activeClassName:"pf-m-active"},c||n?{tabIndex:-1}:{}),o)))}))))},$=n(106),ee=n(105),te=n(875),ne=n(568),ae=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},re=Z.b.div(o||(o=ae(["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"],["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"]))),le=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(8),n.e(7),n.e(6),n.e(5),n.e(10),n.e(19)]).then(n.bind(null,1020))})),oe=Object(c.lazy)((function(){return Promise.all([n.e(9),n.e(44)]).then(n.bind(null,1021))})),ce=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(8),n.e(7),n.e(6),n.e(5),n.e(9),n.e(10),n.e(49)]).then(n.bind(null,1037))})),ie=Object(c.lazy)((function(){return Promise.all([n.e(9),n.e(42)]).then(n.bind(null,1022))})),se=["order-item","portfolio-item","platform","portfolio","order"];t.default=function(){var e,t=Object(I.a)(),n=Object(c.useState)(!0),a=n[0],r=n[1],l=Object(ee.a)(se)[0],o=Object(O.e)((function(e){return e.orderReducer.orderDetail})),g=Object(O.d)(),j=Object(te.a)([o]);Object(c.useEffect)((function(){return window.insights.chrome.appNavClick({id:"orders",secondaryNav:!0}),r(!0),Promise.all([g(Object(ne.c)()),g(Object(E.c)(l))]).then((function(){return r(!1)})),function(){"function"==typeof j&&j()}}),[]);var w=o.order,x=o.portfolioItem,N=o.platform,P=o.portfolio,C=function(){var e=[x,N,P||{}].filter((function(e){return e.notFound}));if(0===e.length)return null;var n=[];return x.notFound?n.push(x.object):n=e.map((function(e){return e.object})),i.a.createElement(d.a,{key:"order-object-missing",variant:"warning",isInline:!0,title:t(y.a.objectsNotFound,{objects:n.join(", "),count:n.length})})}();return i.a.createElement(u.a,null,i.a.createElement(m.a,{className:"pf-u-p-lg global-primary-background"},a?i.a.createElement($.f,null):i.a.createElement(c.Fragment,null,i.a.createElement(f.a,{className:"pf-u-mb-md"},i.a.createElement(p.a,null,i.a.createElement(v.a,{className:"pf-u-mr-md"}),i.a.createElement(G.a,{pathname:"/orders"},t(y.a.backToOrders)))),i.a.createElement(f.a,{className:"flex-no-wrap"},C?i.a.createElement(re,null,C):i.a.createElement(c.Fragment,null,i.a.createElement(p.a,null,i.a.createElement(k,{orderId:w.id})),i.a.createElement(p.a,null,i.a.createElement(z,{portfolioItemName:x.name,orderId:w.id,state:w.state,portfolioItemId:x.id,portfolioId:P.id,sourceId:N.id,orderable:(null===(e=x.metadata)||void 0===e?void 0:e.orderable)||!1})))),!C&&i.a.createElement(V,{portfolioItemId:x.id,portfolioId:P.id,sourceId:N.id,jobName:x.name,state:w.state}))),i.a.createElement(m.a,null,i.a.createElement(u.a,{hasGutter:!0},i.a.createElement(m.a,{className:"global-primary-background"},i.a.createElement(Y,{isFetching:a,baseUrl:D.o})),i.a.createElement(m.a,{className:"pf-u-pl-lg pf-u-pr-lg pf-u-mb-lg"},a?i.a.createElement(b.a,null,i.a.createElement(h.Spinner,null)):i.a.createElement(c.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement(s.d,null,i.a.createElement(s.b,{path:D.o+"/approval",component:le}),i.a.createElement(s.b,{path:D.o+"/provision"},i.a.createElement(ce,null)),i.a.createElement(s.b,{path:D.o+"/lifecycle"},i.a.createElement(oe,null)),i.a.createElement(s.b,{path:D.o,component:ie})))))))}},638:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(125),r=n(29),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=Object(r.b)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"},unknown:{id:"common.states.unknown",defaultMessage:"Unknown"}}),c=function(e){return e?e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()})):"unknown"};t.a=l(l({},o),{created:a.a.created})},701:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(149),o=n(945),c=n(946),i=n(150),s=n(151),d={Completed:{icon:r.a.createElement(l.a,null),color:"green"},"Approval Pending":{icon:r.a.createElement(o.a,null),color:"blue"},Ordered:{icon:r.a.createElement(c.a,null),color:"grey"},Failed:{icon:r.a.createElement(i.a,null),color:"red"},Canceled:{icon:r.a.createElement(s.a,null),color:"orange"},Created:{icon:r.a.createElement(c.a,null),color:"grey"},Approved:{icon:r.a.createElement(l.a,null),color:"green"},Denied:{icon:r.a.createElement(i.a,null),color:"red"},Error:{icon:r.a.createElement(i.a,null),color:"red"},Undecided:{icon:r.a.createElement(o.a,null),color:"blue"},Unknown:{icon:r.a.createElement(s.a,null),color:"grey"}};t.a=d},743:function(e,t,n){"use strict";t.__esModule=!0,t.AngleLeftIconConfig={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},t.AngleLeftIcon=n(92).createIcon(t.AngleLeftIconConfig),t.default=t.AngleLeftIcon},886:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,l=n(2),o=n(0),c=n(1),i=n(341),s=n.n(i);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(a||(a={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(r||(r={}));const d=e=>{var{className:t="",children:n="",headingLevel:a,size:i=r[a]}=e,d=Object(l.__rest)(e,["className","children","headingLevel","size"]);return o.createElement(a,Object.assign({},d,{className:Object(c.css)(s.a.title,i&&s.a.modifiers[i],t)}),n)};d.displayName="Title"},945:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12);const r=Object(a.a)({name:"ClockIcon",height:512,width:512,svgPath:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z",yOffset:0,xOffset:0})},946:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12);const r=Object(a.a)({name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=../sourcemaps/order-detail~31ecd969.js.map