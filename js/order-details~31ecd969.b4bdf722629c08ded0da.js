(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{453:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),s=a(4);var i;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:a="",component:c=i.ul}=e,o=n.__rest(e,["children","className","component"]);const m=c;return r.createElement(m,Object.assign({},o,{"data-pf-content":!0,className:s.css(a)}),t)},t.TextList.displayName="TextList"},454:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a(3),r=n.__importStar(a(0)),s=a(4);var i;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:a="",component:c=i.li}=e,o=n.__rest(e,["children","className","component"]);const m=c;return r.createElement(m,Object.assign({},o,{"data-pf-content":!0,className:s.css(a)}),t)},t.TextListItem.displayName="TextListItem"},675:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),i=a(50),c=a(35),o=a(453),m=a(454),l=a(101),d=a(532),p=a.n(d);t.default=function(){var e=Object(s.useSelector)((function(e){return e.orderReducer.orderDetail})),t=e.order,a=e.platform,n=e.progressMessages,d=e.portfolio,x=e.orderItem;return r.a.createElement(i.TextContent,null,r.a.createElement(c.Text,{component:c.TextVariants.h2},"Order details"),r.a.createElement(o.TextList,{component:o.TextListVariants.dl},r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dt},"Order ID"),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dd},t.id),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dt},"Ordered"),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dd},r.a.createElement(l.DateFormat,{date:t.created_at,variant:"relative"})),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dt},"Portfolio"),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dd},null==d?void 0:d.name),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dt},"Platform"),r.a.createElement(m.TextListItem,{component:m.TextListItemVariants.dd},(null==a?void 0:a.name)||void 0)),r.a.createElement("hr",{className:"pf-c-divider"}),r.a.createElement(c.Text,{component:c.TextVariants.h2},"Order parameters"),(null==x?void 0:x.service_parameters)&&r.a.createElement(p.a,{src:x.service_parameters}),r.a.createElement(c.Text,{component:c.TextVariants.h2},"Progress messages"),(null==n?void 0:n.data)&&r.a.createElement(p.a,{src:n.data}))}}}]);
//# sourceMappingURL=../sourcemaps/order-details~31ecd969.js.map