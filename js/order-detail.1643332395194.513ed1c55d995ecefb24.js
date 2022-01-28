(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[8386],{5866:(e,t,n)=>{"use strict";t.gk={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},t.fP=n(35183).createIcon(t.gk),t.ZP=t.fP},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(30624),o=n.n(r),a=n(94184),l=n.n(a),i=n(65832);const c=function(e){var t=e.className,n=e.title,r=l()(t);return o().createElement(i.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},n)}},31644:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>c});var r=n(56682),o=n(50049),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=(0,o.vU)({title:{id:"common.states.title",defaultMessage:"State"},ordered:{id:"common.states.ordered",defaultMessage:"Ordered"},approvalPending:{id:"common.states.approval-pending",defaultMessage:"Approval Pending"},canceled:{id:"common.states.canceled",defaultMessage:"Canceled"},completed:{id:"common.states.completed",defaultMessage:"Completed"},failed:{id:"common.states.failed",defaultMessage:"Failed"},undecided:{id:"common.states.undecided",defaultMessage:"Undecided"},approved:{id:"common.states.approved",defaultMessage:"Approved"},denied:{id:"common.states.denied",defaultMessage:"Denied"},error:{id:"common.states.error",defaultMessage:"Error"},pending:{id:"common.states.pending",defaultMessage:"Pending"},skipped:{id:"common.states.skipped",defaultMessage:"Skipped"},started:{id:"common.states.started",defaultMessage:"Started"},notified:{id:"common.states.notified",defaultMessage:"Notified"},unknown:{id:"common.states.unknown",defaultMessage:"Unknown"}}),i=function(e){return e?e.replace(/\s/g,"").replace(/^./,(function(e){return e.toLowerCase()})):"unknown"};const c=a(a({},l),{created:r.Z.created})},32642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(30624),o=n.n(r),a=n(29163),l=n(14494),i=n(8666),c=n(36288),s=n(72892),u=n(72679);const d=(0,a.ZP)(u.LazyLoadImage)(f||(m=["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"],p=["\n  height: ",";\n  display: ",";\n  float: ",";\n  width: ",";\n"],Object.defineProperty?Object.defineProperty(m,"raw",{value:p}):m.raw=p,f=m),(function(e){var t=e.height;return e.hidden?"0px":t+"px"||0}),(function(e){return e.hidden?"none":"inherit"}),(function(e){return e.hidden?"left":"inherit"}),(function(e){return e.hidden?0:"inherit"}));var m,p,f,h=n(63035),v=a.ZP.div(E||(E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(["\n  display: inline-block;\n  height: ",";\n"],["\n  display: inline-block;\n  height: ",";\n"])),(function(e){return e.height+"px"}));const g=function(e){var t=e.src,n=e.height,a=void 0===n?40:n,u=e.sourceId,m=(0,r.useState)(!1),p=m[0],f=m[1],g=(0,r.useState)(!1),E=g[0],b=g[1],y=(0,l.v9)((function(e){return e.platformReducer.platformIconMapping})),I=u?y[u]:c,P=(0,h.$W)()?s:I;return o().createElement(v,{height:a},!p&&o().createElement(i.bz,{height:a}),o().createElement(d,{threshold:2e3,delayTime:0,hidden:!p,height:p?a:0,onError:function(){return b(!0)},onLoad:function(){return f(!0)},src:!t||E?P:t}))};var E},47255:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ne});var r=n(30624),o=n.n(r),a=n(334),l=n(65832),i=n(67463),c=n(5866),s=n(14494),u=n(2482),d=n(85132),m=n(40229),p=n(23349);const f=function(e){var t=e.orderId,n=(0,p.Z)();return o().createElement(l.Title,{headingLevel:"h1",size:"3xl"},n(m.Z.detailTitle,{id:t}))};var h=n(81778);const v=function(e){var t=e.name,n=e.cancelOrder,r=e.onClose,a=e.isOpen,i=(0,p.Z)();return o().createElement(l.Modal,{isOpen:a,onClose:r,title:" ","aria-labelledby":"cancel-order",header:o().createElement(l.Title,{size:"2xl",headingLevel:"h2"},o().createElement(h.ExclamationTriangleIcon,{style:{fill:"#F0AB00"}})," ",i(m.Z.cancelOrder)),variant:"small",actions:[o().createElement(l.Button,{onClick:n,ouiaId:"cancel-order",key:"cancel-order",id:"cancel-order",variant:"danger"},i(m.Z.cancelOrder)),o().createElement(l.Button,{onClick:r,ouiaId:"keep-order",key:"keep-order",id:"keep-order",variant:"link"},i(m.Z.keepOrder))]},i(m.Z.cancelDescription,{name:t}))};var g=n(36722),E=n(74798),b=["Approval Pending"],y=["Completed"],I=function(e){return void 0===e&&(e=""),b.includes(e)};const P=function(e){var t=e.state,n=e.orderId,a=e.portfolioItemName,i=e.portfolioItemId,c=e.portfolioId,d=e.sourceId,f=e.orderable,h=void 0!==f&&f,b=(e.icon_url,(0,p.Z)()),P=(0,s.I0)(),k=(0,r.useState)(!1),O=k[0],Z=k[1],w=(0,E.Z)(),C=function(){return h&&t&&y.includes(t)};return o().createElement(r.Fragment,null,o().createElement(v,{onClose:function(){return Z(!1)},isOpen:O,cancelOrder:function(){Z(!1),P((0,u.sl)(n))},name:a}),o().createElement(l.ActionGroup,null,I(t)&&o().createElement(l.Button,{onClick:function(){return Z(!0)},isDisabled:!I(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action",ouiaId:"cancel-order-action"},b(m.Z.cancelOrder)),C()&&o().createElement(l.Button,{onClick:function(){return function(e,t,n){w.push({pathname:g.HN,search:"?portfolio="+e+"&portfolio-item="+t+"&source="+n})}(c,i,d)},isDisabled:!C(),type:"button",className:"pf-u-mr-md",id:"reorder-order-action",ouiaId:"reorder-order-action"},b(m.Z.reOrder))))};var k=n(32642),O=n(20697),Z=n(31644),w=n(42413),C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};const j=function(e){var t=e.portfolioId,n=e.jobName,r=e.portfolioItemId,a=e.sourceId,i=e.state,c=e.icon_url,s=(0,p.Z)();return o().createElement(l.Level,{className:"pf-u-mt-sm",hasGutter:!0},o().createElement(l.Level,{hasGutter:!0},o().createElement(k.Z,{sourceId:a,height:60,src:c}),o().createElement(l.Title,{headingLevel:"h2",size:"lg"},o().createElement(O.Z,{pathname:"/portfolios/portfolio/portfolio-item",searchParams:{portfolio:t,source:a,"portfolio-item":r}},n))),o().createElement(l.LevelItem,null,o().createElement(l.Label,C({},w.Z[i],{variant:"outline"}),s(Z.Z[(0,Z.C)(i)]))))};var x=n(29163),L=n(63035),A=(n(80219),function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}),N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},M=(0,x.ZP)(O.Z)(T||(T=A(["\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n"],["\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n"]))),S=(0,x.ZP)((function(e){e.isDisabled;var t=D(e,["isDisabled"]);return o().createElement("button",N({},t))}))(z||(z=A(["\n  pointer-events: ",";\n"],["\n  pointer-events: ",";\n"])),(function(e){return e.isDisabled?"none":"initial"})),_=(0,x.ZP)((function(e){e.isDisabled;var t=D(e,["isDisabled"]);return o().createElement("li",N({},t))}))(F||(F=A(["\n  cursor: ",";\n"],["\n  cursor: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}));const R=function(e){var t=e.baseUrl,n=e.isFetching,r=(0,p.Z)(),l=(0,E.Z)().push,i=(0,s.v9)((function(e){return e.orderReducer.orderDetail||{}})),c=(0,a.useLocation)(),u=c.pathname,d=c.search,f=function(e,t){var n=(void 0===e?{}:e).state;return[{link:"",title:t(m.Z.orderDetails)},{link:"/approval",title:t(m.Z.menuApproval)},{link:"/provision",title:t(m.Z.menuProvision)},{link:"/lifecycle",title:t(m.Z.menuLifecycle),isDisabled:(0,L.hd)(n)}]}(i.order,r),h=f.findIndex((function(e){var t=e.link;return u.split("/").pop()===t.replace("/","")}));return h=h>0?h:0,o().createElement("div",{className:"pf-c-tabs pf-u-pl-xl pf-u-pr-md"},o().createElement("ul",{className:"pf-c-tabs__list"},f.map((function(e,r){var a=e.link,i=e.title,c=e.isDisabled;return o().createElement(_,{className:"pf-c-tabs__item"+(r===h?" pf-m-current":""),isDisabled:c||n,key:a||r},o().createElement(S,N({className:"pf-c-tabs__link",isDisabled:c||n},c||n?{tabIndex:-1}:{},{onClick:function(){return l({pathname:""+t+f[r].link,search:d})}}),o().createElement(M,N({exact:!0,nav:!0,isDisabled:c||n,pathname:""+t+a,preserveSearch:!0,activeClassName:"pf-m-active"},c||n?{tabIndex:-1}:{}),i)))}))))};var T,z,F,U=n(8666),B=n(47786),W=n(52579),G=n(11608),$=n(49827);const H=x.ZP.div(K||(Q=["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"],J=["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"],Object.defineProperty?Object.defineProperty(Q,"raw",{value:J}):Q.raw=J,K=Q));var Q,J,K,X=n(15811),Y=(0,r.lazy)((function(){return Promise.all([n.e(1436),n.e(2798)]).then(n.bind(n,53538))})),q=(0,r.lazy)((function(){return Promise.all([n.e(5171),n.e(1244)]).then(n.bind(n,50018))})),V=(0,r.lazy)((function(){return Promise.all([n.e(5171),n.e(1436),n.e(6267)]).then(n.bind(n,17281))})),ee=(0,r.lazy)((function(){return Promise.all([n.e(5171),n.e(2633)]).then(n.bind(n,27475))})),te=["order-item","portfolio-item","platform","portfolio","order"];const ne=function(){var e,t=(0,p.Z)(),n=(0,r.useState)(!0),h=n[0],v=n[1],E=(0,B.Z)(te)[0],b=(0,s.v9)((function(e){return e.orderReducer.orderDetail})),y=(0,s.I0)(),I=(0,W.Z)([b]);(0,r.useEffect)((function(){return v(!0),Promise.all([y((0,L.$W)()?(0,$.dw)():(0,G.dw)()),y((0,L.$W)()?(0,d.gP)(E):(0,u.gP)(E))]).then((function(){return v(!1)})),function(){"function"==typeof I&&I()}}),[]);var k=b.order,Z=b.portfolioItem,w=b.platform,C=b.portfolio,x=function(){var e=[Z,w,C||{}].filter((function(e){return e.notFound}));if(0===e.length)return null;var n=[];return Z.notFound?n.push(Z.object):n=e.map((function(e){return e.object})),o().createElement(l.Alert,{key:"order-object-missing",variant:"warning",isInline:!0,title:t(m.Z.objectsNotFound,{objects:n.join(", "),count:n.length})})}();return o().createElement(r.Fragment,null,h?o().createElement(U.OB,null):o().createElement(X.Z,null,o().createElement(l.Level,{className:"pf-u-mb-md"},o().createElement(l.LevelItem,null,o().createElement(c.ZP,{className:"pf-u-mr-md"}),o().createElement(O.Z,{pathname:"/orders"},t(m.Z.backToOrders)))),o().createElement(l.Level,{className:"flex-no-wrap"},x?o().createElement(H,null,x):o().createElement(r.Fragment,null,o().createElement(l.LevelItem,null,o().createElement(f,{orderId:k.id})),o().createElement(l.LevelItem,null,o().createElement(P,{portfolioItemName:Z.name,orderId:k.id,state:k.state,portfolioItemId:Z.id,portfolioId:null==C?void 0:C.id,sourceId:null==w?void 0:w.id,orderable:(null===(e=Z.metadata)||void 0===e?void 0:e.orderable)||!1,icon_url:Z.icon_url})))),!x&&o().createElement(j,{portfolioItemId:Z.id,portfolioId:C.id,sourceId:null==w?void 0:w.id,jobName:null==Z?void 0:Z.name,state:k.state,icon_url:Z.icon_url})),o().createElement(l.Stack,null,o().createElement(l.StackItem,{className:"global-primary-background"},o().createElement(R,{isFetching:h,baseUrl:g.A5})),o().createElement(l.StackItem,{className:"pf-u-pl-lg pf-u-pr-lg pf-u-mb-lg pf-u-mt-0 pf-u-pt-0"},h?o().createElement(l.Bullseye,null,o().createElement(i.Spinner,null)):o().createElement(r.Suspense,{fallback:o().createElement("div",null)},o().createElement(a.Switch,null,o().createElement(a.Route,{path:g.A5+"/approval",component:Y}),o().createElement(a.Route,{path:g.A5+"/provision"},o().createElement(V,null)),o().createElement(a.Route,{path:g.A5+"/lifecycle"},o().createElement(q,null)),o().createElement(a.Route,{path:g.A5,component:ee}))))))}},42413:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(30624),o=n.n(r),a=n(81778);const l={Completed:{icon:o().createElement(a.CheckCircleIcon,null),color:"green"},"Approval Pending":{icon:o().createElement(a.ClockIcon,null),color:"blue"},Ordered:{icon:o().createElement(a.PlusCircleIcon,null),color:"grey"},Failed:{icon:o().createElement(a.ExclamationCircleIcon,null),color:"red"},Canceled:{icon:o().createElement(a.ExclamationTriangleIcon,null),color:"orange"},Created:{icon:o().createElement(a.PlusCircleIcon,null),color:"grey"},Approved:{icon:o().createElement(a.CheckCircleIcon,null),color:"green"},Denied:{icon:o().createElement(a.ExclamationCircleIcon,null),color:"red"},Error:{icon:o().createElement(a.ExclamationCircleIcon,null),color:"red"},Undecided:{icon:o().createElement(a.ClockIcon,null),color:"blue"},Unknown:{icon:o().createElement(a.ExclamationTriangleIcon,null),color:"grey"}}},52579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r,o,a=n(30624),l=n(334),i=n(14494),c=n(90060),s=n(36722),u=(s.oQ,{"portfolio-item":["source","portfolio"],"edit-survey":["source","portfolio","portfolio-item"]}),d=((r={})[s.hT]=function(e){return e().portfolioReducer.selectedPortfolio.name},r[s.YJ]=function(e){return e().portfolioReducer.portfolioItem.portfolioItem.name},r[s.PC]=function(){return"Edit survey"},r[s.kp]=function(){return"Add products"},r[s.AG]=function(e){return e().platformReducer.selectedPlatform.name},r[s.rg]=function(e){return e().platformReducer.serviceOffering.service.name},r[s.A5]=function(e){var t=e().orderReducer.orderDetail,n=t.portfolioItem,r=t.order;return n.name+" # "+r.id},r[s.Kf]=function(){return"Edit product"},r),m=((o={})[s.hT]={pathname:s.oQ,title:"Portfolios",searchParams:{}},o[s.AG]={pathname:s.gw,title:"Platforms",searchParams:{}},o[s.A5]={pathname:s.Xr,title:"Orders",searchParams:{}},o),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},h=function(e,t){return void 0===e&&(e=""),void 0===t&&(t={}),function(n,r){if(0===e.length)return n({type:c.EL,payload:[]});var o=[];"/portfolios/portfolio"===e&&o.push("/portfolios"),e.startsWith("/portfolios/portfolio/portfolio-item")&&(o[0]="/portfolios",o[1]="/portfolio",e.startsWith("/portfolios/portfolio/portfolio-item/")&&(o[2]="/portfolio-item")),e.startsWith("/platforms/platform")&&(o[0]="/platforms");var a=(e=e.replace(o[0],"")).replace(/^\//,"").split("/").reduce((function(e,n,a){var l,i,c=""+(a>0&&e[a-1]?e[a-1].pathname:"")+o[a]+"/"+n,s=d[c];if(!s)return e;var h=p(p({},a>0&&(null===(i=e[a-1])||void 0===i?void 0:i.searchParams)),t[n]?((l={})[n]=t[n],l):{});u[n]&&u[n].forEach((function(e){h[e]=t[e]})),m[c]&&(e=[m[c]]);var v=s(r);return v?f(f([],e,!0),[{pathname:c,searchParams:h,title:v}],!1):e}),[]);return a.length>0&&m[a[0].pathname]&&(a=f([m[a[0].pathname]],a,!0)),n({type:c.EL,payload:a})}};const v=function(e){void 0===e&&(e=[]);var t=(0,i.I0)(),n=(0,l.useLocation)(),r=n.pathname,o=n.search;if(0===e.length)return t(h("",{}));var c=new URLSearchParams(o),s={};return c.forEach((function(e,t){s[t]=e})),(0,a.useEffect)((function(){t(h(r,s))}),function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([r],e,!0)),function(){return t(h("",{}))}}},72892:(e,t,n)=>{"use strict";e.exports=n.p+"fonts/card-icon-default-s.svg"},36288:(e,t,n)=>{"use strict";e.exports=n.p+"fonts/card-icon-default.svg"},80219:()=>{}}]);
//# sourceMappingURL=../sourcemaps/order-detail.dc32db67673e3f0e580b3521291c3253.js.map