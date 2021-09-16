"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[8386],{47255:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var r=n(30624),a=n.n(r),l=n(334),o=n(80708),i=n(67463),c=n(5866),u=n(45237),s=n(47962),m=n(40229),d=n(23349);const p=function(e){var t=e.orderId,n=(0,d.Z)();return a().createElement(o.Title,{headingLevel:"h1",size:"3xl"},n(m.Z.detailTitle,{id:t}))};var f=n(82398);const b=function(e){var t=e.name,n=e.cancelOrder,r=e.onClose,l=e.isOpen,i=(0,d.Z)();return a().createElement(o.Modal,{isOpen:l,onClose:r,title:" ","aria-labelledby":"cancel-order",header:a().createElement(o.Title,{size:"2xl",headingLevel:"h2"},a().createElement(f.ExclamationTriangleIcon,{style:{fill:"#F0AB00"}})," ",i(m.Z.cancelOrder)),variant:"small",actions:[a().createElement(o.Button,{onClick:n,ouiaId:"cancel-order",key:"cancel-order",id:"cancel-order",variant:"danger"},i(m.Z.cancelOrder)),a().createElement(o.Button,{onClick:r,ouiaId:"keep-order",key:"keep-order",id:"keep-order",variant:"link"},i(m.Z.keepOrder))]},i(m.Z.cancelDescription,{name:t}))};var v=n(36722),E=n(74798),h=["Approval Pending"],I=["Completed"],k=function(e){return void 0===e&&(e=""),h.includes(e)};const y=function(e){var t=e.state,n=e.orderId,l=e.portfolioItemName,i=e.portfolioItemId,c=e.portfolioId,p=e.sourceId,f=e.orderable,h=void 0!==f&&f,y=(0,d.Z)(),g=(0,u.useDispatch)(),Z=(0,r.useState)(!1),O=Z[0],P=Z[1],j=(0,E.Z)(),w=function(){return h&&t&&I.includes(t)};return a().createElement(r.Fragment,null,a().createElement(b,{onClose:function(){return P(!1)},isOpen:O,cancelOrder:function(){P(!1),g((0,s.sl)(n))},name:l}),a().createElement(o.ActionGroup,null,k(t)&&a().createElement(o.Button,{onClick:function(){return P(!0)},isDisabled:!k(t),type:"button",className:"pf-u-mr-md",id:"cancel-order-action",ouiaId:"cancel-order-action"},y(m.Z.cancelOrder)),w()&&a().createElement(o.Button,{onClick:function(){return function(e,t,n){j.push({pathname:v.HN,search:"?portfolio="+e+"&portfolio-item="+t+"&source="+n})}(c,i,p)},isDisabled:!w(),type:"button",className:"pf-u-mr-md",id:"reorder-order-action",ouiaId:"reorder-order-action"},y(m.Z.reOrder))))};var g=n(32642),Z=n(35388),O=n(20697),P=n(31644),j=n(42413),w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const N=function(e){var t=e.portfolioId,n=e.jobName,r=e.portfolioItemId,l=e.sourceId,i=e.state,c=(0,d.Z)();return a().createElement(o.Level,{className:"pf-u-mt-sm",hasGutter:!0},a().createElement(o.Level,{hasGutter:!0},a().createElement(g.Z,{sourceId:l,height:60,src:Z.Vs+"/portfolio_items/"+r+"/icon"}),a().createElement(o.Title,{headingLevel:"h2",size:"lg"},a().createElement(O.Z,{pathname:"/portfolios/portfolio/portfolio-item",searchParams:{portfolio:t,source:l,"portfolio-item":r}},n))),a().createElement(o.LevelItem,null,a().createElement(o.Label,w({},j.Z[i],{variant:"outline"}),c(P.Z[(0,P.C)(i)]))))};var D=n(29163),S=n(63035),C=(n(92566),function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},L=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},_=(0,D.ZP)(O.Z)(B||(B=C(["\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n"],["\n  color: var(--pf-c-tabs__link--Color);\n  text-decoration: none;\n"]))),A=(0,D.ZP)((function(e){e.isDisabled;var t=L(e,["isDisabled"]);return a().createElement("button",x({},t))}))(R||(R=C(["\n  pointer-events: ",";\n"],["\n  pointer-events: ",";\n"])),(function(e){return e.isDisabled?"none":"initial"})),F=(0,D.ZP)((function(e){e.isDisabled;var t=L(e,["isDisabled"]);return a().createElement("li",x({},t))}))(T||(T=C(["\n  cursor: ",";\n"],["\n  cursor: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}));const z=function(e){var t=e.baseUrl,n=e.isFetching,r=(0,d.Z)(),o=(0,E.Z)().push,i=(0,u.useSelector)((function(e){return e.orderReducer.orderDetail||{}})),c=(0,l.useLocation)(),s=c.pathname,p=c.search,f=function(e,t){var n=(void 0===e?{}:e).state;return[{link:"",title:t(m.Z.orderDetails)},{link:"/approval",title:t(m.Z.menuApproval)},{link:"/provision",title:t(m.Z.menuProvision)},{link:"/lifecycle",title:t(m.Z.menuLifecycle),isDisabled:(0,S.hd)(n)}]}(i.order,r),b=f.findIndex((function(e){var t=e.link;return s.split("/").pop()===t.replace("/","")}));return b=b>0?b:0,a().createElement("div",{className:"pf-c-tabs pf-u-pl-md pf-u-pr-md"},a().createElement("ul",{className:"pf-c-tabs__list"},f.map((function(e,r){var l=e.link,i=e.title,c=e.isDisabled;return a().createElement(F,{className:"pf-c-tabs__item"+(r===b?" pf-m-current":""),isDisabled:c||n,key:l||r},a().createElement(A,x({className:"pf-c-tabs__link",isDisabled:c||n},c||n?{tabIndex:-1}:{},{onClick:function(){return o({pathname:""+t+f[r].link,search:p})}}),a().createElement(_,x({exact:!0,nav:!0,isDisabled:c||n,pathname:""+t+l,preserveSearch:!0,activeClassName:"pf-m-active"},c||n?{tabIndex:-1}:{}),i)))}))))};var B,R,T,G=n(8666),U=n(47786),H=n(52579),M=n(11608);const V=D.ZP.div(K||(q=["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"],J=["\n  width: 100%;\n  > *:not(:last-child) {\n    margin-bottom: 4px;\n    width: 100%;\n  }\n"],Object.defineProperty?Object.defineProperty(q,"raw",{value:J}):q.raw=J,K=q));var q,J,K,Q=(0,r.lazy)((function(){return Promise.all([n.e(6410),n.e(5795),n.e(2798)]).then(n.bind(n,53538))})),W=(0,r.lazy)((function(){return Promise.all([n.e(4736),n.e(1244)]).then(n.bind(n,50018))})),X=(0,r.lazy)((function(){return Promise.all([n.e(6410),n.e(4736),n.e(5795),n.e(6267)]).then(n.bind(n,17281))})),Y=(0,r.lazy)((function(){return Promise.all([n.e(4736),n.e(2633)]).then(n.bind(n,27475))})),$=["order-item","portfolio-item","platform","portfolio","order"];const ee=function(){var e,t=(0,d.Z)(),n=(0,r.useState)(!0),f=n[0],b=n[1],E=(0,U.Z)($)[0],h=(0,u.useSelector)((function(e){return e.orderReducer.orderDetail})),I=(0,u.useDispatch)(),k=(0,H.Z)([h]);(0,r.useEffect)((function(){return b(!0),Promise.all([I((0,M.dw)()),I((0,s.gP)(E))]).then((function(){return b(!1)})),function(){"function"==typeof k&&k()}}),[]);var g=h.order,Z=h.portfolioItem,P=h.platform,j=h.portfolio,w=function(){var e=[Z,P,j||{}].filter((function(e){return e.notFound}));if(0===e.length)return null;var n=[];return Z.notFound?n.push(Z.object):n=e.map((function(e){return e.object})),a().createElement(o.Alert,{key:"order-object-missing",variant:"warning",isInline:!0,title:t(m.Z.objectsNotFound,{objects:n.join(", "),count:n.length})})}();return a().createElement(o.Stack,null,a().createElement(o.StackItem,{className:"pf-u-p-lg global-primary-background"},f?a().createElement(G.OB,null):a().createElement(r.Fragment,null,a().createElement(o.Level,{className:"pf-u-mb-md"},a().createElement(o.LevelItem,null,a().createElement(c.ZP,{className:"pf-u-mr-md"}),a().createElement(O.Z,{pathname:"/orders"},t(m.Z.backToOrders)))),a().createElement(o.Level,{className:"flex-no-wrap"},w?a().createElement(V,null,w):a().createElement(r.Fragment,null,a().createElement(o.LevelItem,null,a().createElement(p,{orderId:g.id})),a().createElement(o.LevelItem,null,a().createElement(y,{portfolioItemName:Z.name,orderId:g.id,state:g.state,portfolioItemId:Z.id,portfolioId:j.id,sourceId:P.id,orderable:(null===(e=Z.metadata)||void 0===e?void 0:e.orderable)||!1})))),!w&&a().createElement(N,{portfolioItemId:Z.id,portfolioId:j.id,sourceId:P.id,jobName:Z.name,state:g.state}))),a().createElement(o.StackItem,null,a().createElement(o.Stack,{hasGutter:!0},a().createElement(o.StackItem,{className:"global-primary-background"},a().createElement(z,{isFetching:f,baseUrl:v.A5})),a().createElement(o.StackItem,{className:"pf-u-pl-lg pf-u-pr-lg pf-u-mb-lg"},f?a().createElement(o.Bullseye,null,a().createElement(i.Spinner,null)):a().createElement(r.Suspense,{fallback:a().createElement("div",null)},a().createElement(l.Switch,null,a().createElement(l.Route,{path:v.A5+"/approval",component:Q}),a().createElement(l.Route,{path:v.A5+"/provision"},a().createElement(X,null)),a().createElement(l.Route,{path:v.A5+"/lifecycle"},a().createElement(W,null)),a().createElement(l.Route,{path:v.A5,component:Y})))))))}}}]);