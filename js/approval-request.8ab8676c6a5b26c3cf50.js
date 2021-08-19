"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[2798],{53538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var r=n(30624),a=n.n(r),l=n(45237),o=n(97066),i=n(22160),c=n(62410),s=n(79074),m=n(47962),u=n(40229),d=n(31644),p=n(56682),x=n(23349),f=n(42413),E=n(35388),T=n(63035),v=["updated","group_name","decision"],I=function(e){return!e||!e.data||0===e.data.length};const L=function(){var e=(0,x.Z)(),t=(0,l.useDispatch)(),n=(0,r.useState)({}),L=n[0],h=n[1],y=(0,l.useSelector)((function(e){return e.orderReducer.orderDetail})),b=y.order,w=y.approvalRequest,g=y.platform,V=y.orderItem,Z=y.portfolio,k=y.portfolioItem,B=(0,r.useState)(!0),C=B[0],S=B[1];if((0,r.useEffect)((function(){var e,n,r,a,l;(null==V?void 0:V.id)&&I(w)&&(S(!0),(e=function(){return t((0,m.MX)(V.id))},n=void 0,r=void 0,a=void 0,l=function(){var t,n;return function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,(function(r){switch(r.label){case 0:t=0,r.label=1;case 1:return t<=E.xX?[4,e()]:[3,4];case 2:return(null==(n=r.sent())?void 0:n.data.length)>0||t++>=E.xX?[2,"Finished"]:[4,(0,T.gw)(3e3)];case 3:return r.sent(),[3,1];case 4:return[2]}}))},new(a||(a=Promise))((function(e,t){function o(e){try{c(l.next(e))}catch(e){t(e)}}function i(e){try{c(l.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}c((l=l.apply(n,r||[])).next())}))).then((function(){return S(!1)})))}),[]),I(w)&&!C)return a().createElement(o.Bullseye,{id:"no-approval-requests"},a().createElement(o.Flex,{direction:{default:"column"},grow:{default:"grow"}},a().createElement(o.Bullseye,null,a().createElement(s.ZP,{size:"xl"})),a().createElement(o.Bullseye,null,a().createElement(o.Title,{headingLevel:"h1",size:"2xl"},e(u.Z.noApprovalRequests)))));var q=[{title:"Updated",transforms:[i.sortable]},{title:"Name",transforms:[i.sortable]},"Decision"],D=function(e){return f.Z[d.Z[(0,d.C)(e.decision)].defaultMessage||"Unknown"]},G=(null==w?void 0:w.data.map((function(t){return v.map((function(n){return"decision"===n?a().createElement(i.TableText,null,a().createElement(o.TextContent,{style:{color:D(t).color}},D(t).icon," ",e(d.Z[(0,d.C)(t[n])]))):"updated"===n?a().createElement(r.Fragment,null,a().createElement(c.Z,{date:t[n],type:"exact"})):t[n]}))})).sort((function(e,t){return e[L.index]<t[L.index]?-1:e[L.index]<t[L.index]?1:0})))||[];return a().createElement(o.TextContent,null,I(w)?a().createElement(o.Bullseye,null,a().createElement(o.Flex,{direction:{default:"column"},grow:{default:"grow"}},a().createElement(o.Bullseye,{id:"creating-approval-request"},a().createElement(o.Title,{headingLevel:"h1",size:"xl"},e(u.Z.creatingApprovalRequest))),a().createElement(o.Bullseye,null,a().createElement(o.Spinner,{size:"xl"})))):a().createElement(o.Grid,{hasGutter:!0},a().createElement(o.GridItem,{md:12,lg:6,xl:4},a().createElement(o.Stack,{hasGutter:!0},a().createElement(o.StackItem,null,a().createElement(o.Card,null,a().createElement(o.CardBody,null,a().createElement(o.Text,{className:"pf-u-mb-md",component:o.TextVariants.h2},e(u.Z.approvalTitle)),a().createElement(o.TextList,{component:o.TextListVariants.dl},a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},e(p.Z.product)),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},k.name),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},e(u.Z.orderID)),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},b.id),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},e(u.Z.orderDate)),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},a().createElement(c.Z,{date:b.created_at,variant:"relative"})),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},e(u.Z.orderedByLabel)),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},b.owner),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},e(p.Z.portfolio)),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},Z.name),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},e(p.Z.platform)),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},g.name))))),a().createElement(o.StackItem,null,a().createElement(o.Card,null,a().createElement(o.CardBody,null,a().createElement(o.Text,{className:"pf-u-mb-md",component:o.TextVariants.h2},e(u.Z.approvalParameters)),a().createElement(o.TextList,{className:"overflow-wrap",component:o.TextListVariants.dl},Object.entries((null==V?void 0:V.service_parameters)||[]).map((function(e){var t=e[0],n=e[1];return a().createElement(r.Fragment,{key:t},a().createElement(o.TextListItem,{component:o.TextListItemVariants.dt},t),a().createElement(o.TextListItem,{component:o.TextListItemVariants.dd},n))})))))))),a().createElement(o.GridItem,{md:12,lg:6,xl:8},a().createElement(o.Card,null,a().createElement(o.CardBody,null,a().createElement(o.Text,{className:"pf-u-mb-md",component:o.TextVariants.h2},e(u.Z.activity)),a().createElement(i.Table,{"aria-label":"Approval request activity",onSort:function(e,t,n){return h({index:t,direction:n})},sortBy:L,cells:q,rows:L.direction===i.SortByDirection.asc?G:G.reverse()},a().createElement(i.TableHeader,null),a().createElement(i.TableBody,null)))))))}}}]);
//# sourceMappingURL=../sourcemaps/approval-request.2d51f0b62b86c881c113.js.map