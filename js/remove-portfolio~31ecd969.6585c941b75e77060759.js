(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{597:function(e,t,n){
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var t=!("undefined"==typeof window||!window.document||!window.document.createElement),n={canUseDOM:t,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen};"function"==typeof define&&"object"==typeof define.amd&&define.amd?define((function(){return n})):e.exports?e.exports=n:window.ExecutionEnvironment=n}()},760:function(e,t,n){"use strict";n.r(t);var a=n(39),o=n.n(a),i=n(0),r=n.n(i),l=n(1),c=n.n(l),u=n(60),s=n(33),d=n(621),f=n.n(d),p=n(578),m=n(75),w=n(44),b=n(73),E=n(582),v=n(581),k=n(653),y=n(77),O=n(675),S=n(11),g=n(158),j=n(74),x=function(e){var t=e.viewState,n=Object(y.a)(["portfolio"]),a=o()(n,1)[0].portfolio,i=Object(s.useDispatch)(),l=Object(s.useSelector)((function(e){var t=e.portfolioReducer;return Object(O.g)(t,a)})),c=Object(u.g)(),d=c.push,j=c.goBack;return l?!1===l.metadata.user_capabilities.destroy?r.a.createElement(g.a,null):r.a.createElement(p.Modal,{title:"Delete Portfolio?",isOpen:!0,isSmall:!0,onClose:j,isFooterLeftAligned:!0,actions:[r.a.createElement(m.Button,{key:"submit",variant:"danger",type:"button",id:"confirm-delete-portfolio",onClick:function(){return d(S.s),i(Object(k.k)(a,t))}},"Confirm"),r.a.createElement(m.Button,{key:"cancel",variant:"link",type:"button",onClick:j},"Cancel")]},r.a.createElement(E.Split,{gutter:"md"},r.a.createElement(v.SplitItem,null,r.a.createElement(f.a,{size:"xl",fill:"#f0ab00"})),r.a.createElement(v.SplitItem,null,r.a.createElement(b.TextContent,null,r.a.createElement(w.Text,{component:w.TextVariants.p},"This action will permanently delete portfolio ",l.name," and its data."))))):null};x.propTypes={viewState:c.a.shape({count:c.a.number,limit:c.a.number,offset:c.a.number,filter:c.a.string})},x.defaultProps={viewState:j.a},t.default=x}}]);
//# sourceMappingURL=../sourcemaps/remove-portfolio~31ecd969.js.map