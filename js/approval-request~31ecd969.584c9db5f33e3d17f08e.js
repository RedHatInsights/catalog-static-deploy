(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{680:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(1),r=n.__importStar(a(0)),l=a(2);var c;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(c=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:a="",component:s=c.ul}=e,i=n.__rest(e,["children","className","component"]);const o=s;return r.createElement(o,Object.assign({},i,{"data-pf-content":!0,className:l.css(a)}),t)},t.TextList.displayName="TextList"},681:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(1),r=n.__importStar(a(0)),l=a(2);var c;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(c=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:a="",component:s=c.li}=e,i=n.__rest(e,["children","className","component"]);const o=s;return r.createElement(o,Object.assign({},i,{"data-pf-content":!0,className:l.css(a)}),t)},t.TextListItem.displayName="TextListItem"},917:function(e,t,a){"use strict";t.__esModule=!0,t.InfoIconConfig={name:"InfoIcon",height:512,width:192,svgPath:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z",yOffset:0,xOffset:0,transform:""},t.InfoIcon=a(78).createIcon(t.InfoIconConfig),t.default=t.InfoIcon},933:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a.n(n),l=a(756),c=a.n(l),s=a(757),i=a.n(s),o=a(0),m=a.n(o),d=a(19),u=a(187),p=a(694),x=a(175),f=a(28),E=a(23),T=a(680),I=a(681),L=a(291),v=a(137),h=a(138),V=a(182),b=a(139),g=a(297),y=a(298),_=a(788),w=a(619),O=a(697),N=a(696),j=a(181),B=a(917),F=a.n(B),S=a(649),C=a(588),k=a(648),q=a(97),z=a(693),D=a.n(z),G=a(18),M=["updated","group_name","state"],P=function(e){return new Promise((function(t){return setTimeout(t,e)}))},R=function(){var e=i()(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t();case 3:if(!((null==(a=e.sent)?void 0:a.data.length)>0)){e.next=6;break}return e.abrupt("return","Finished");case 6:return e.next=8,P(3e3);case 8:e.next=0;break;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return!e||!e.data||0===e.data.length};t.default=function(){var e=Object(G.a)(),t=Object(d.useDispatch)(),a=Object(o.useState)({}),n=r()(a,2),l=n[0],c=n[1],s=Object(d.useSelector)((function(e){return e.orderReducer.orderDetail})),i=s.order,B=s.approvalRequest,z=void 0===B?{data:[]}:B,P=s.platform,H=s.orderItem,J=s.portfolio,U=s.portfolioItem;Object(o.useEffect)((function(){"Failed"!==i.state&&(null==H?void 0:H.id)&&A(z)&&R((function(){return t(Object(S.b)(H.id))}))}),[]);if("Failed"===i.state&&A(z))return m.a.createElement(u.Bullseye,{id:"no-approval-requests"},m.a.createElement(p.Flex,{direction:{default:"column"},grow:{default:"grow"}},m.a.createElement(u.Bullseye,null,m.a.createElement(F.a,{size:"xl"})),m.a.createElement(u.Bullseye,null,m.a.createElement(L.Title,{headingLevel:"h1",size:"2xl"},e(C.a.noApprovalRequests)))));var K=[{title:"Updated",transforms:[_.a]},{title:"Name",transforms:[_.a]},"Status"],Q=z.data.map((function(t){return M.map((function(a){return"state"===a?m.a.createElement(o.Fragment,null,"completed"===t[a]&&m.a.createElement(o.Fragment,null,m.a.createElement(D.a,{color:"var(--pf-global--success-color--100)"})," "),e(k.a[t[a]])):"updated"===a?m.a.createElement(o.Fragment,null,m.a.createElement(j.DateFormat,{date:t[a],type:"exact"})):t[a]}))})).sort((function(e,t){return e[l.index]<t[l.index]?-1:e[l.index]<t[l.index]?1:0}));return m.a.createElement(f.TextContent,null,A(z)?m.a.createElement(u.Bullseye,null,m.a.createElement(p.Flex,{direction:{default:"column"},grow:{default:"grow"}},m.a.createElement(u.Bullseye,{id:"creating-approval-request"},m.a.createElement(L.Title,{headingLevel:"h1",size:"xl"},e(C.a.creatingApprovalRequest))),m.a.createElement(u.Bullseye,null,m.a.createElement(x.Spinner,{size:"xl"})))):m.a.createElement(v.Grid,{hasGutter:!0},m.a.createElement(h.GridItem,{md:12,lg:6,xl:4},m.a.createElement(V.Stack,{hasGutter:!0},m.a.createElement(b.StackItem,null,m.a.createElement(g.Card,null,m.a.createElement(y.CardBody,null,m.a.createElement(E.Text,{className:"pf-u-mb-md",component:E.TextVariants.h2},e(C.a.approvalTitle)),m.a.createElement(T.TextList,{component:T.TextListVariants.dl},m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},e(q.a.product)),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},U.name),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},e(C.a.orderID)),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},i.id),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},e(C.a.orderDate)),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},m.a.createElement(j.DateFormat,{date:i.created_at,variant:"relative"})),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},e(C.a.orderedByLabel)),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},i.owner),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},e(q.a.portfolio)),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},J.name),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},e(q.a.platform)),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},P.name))))),m.a.createElement(b.StackItem,null,m.a.createElement(g.Card,null,m.a.createElement(y.CardBody,null,m.a.createElement(E.Text,{className:"pf-u-mb-md",component:E.TextVariants.h2},e(C.a.approvalParameters)),m.a.createElement(T.TextList,{component:T.TextListVariants.dl},Object.entries(H.service_parameters).map((function(e){var t=r()(e,2),a=t[0],n=t[1];return m.a.createElement(o.Fragment,{key:a},m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dt},a),m.a.createElement(I.TextListItem,{component:I.TextListItemVariants.dd},n))})))))))),m.a.createElement(h.GridItem,{md:12,lg:6,xl:8},m.a.createElement(g.Card,null,m.a.createElement(y.CardBody,null,m.a.createElement(E.Text,{className:"pf-u-mb-md",component:E.TextVariants.h2},e(C.a.activity)),m.a.createElement(w.b,{"aria-label":"Approval request activity",onSort:function(e,t,a){return c({index:t,direction:a})},sortBy:l,cells:K,rows:l.direction===w.a.asc?Q:Q.reverse()},m.a.createElement(O.a,null),m.a.createElement(N.a,null)))))))}}}]);
//# sourceMappingURL=../sourcemaps/approval-request~31ecd969.js.map