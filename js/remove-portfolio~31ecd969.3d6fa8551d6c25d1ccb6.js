(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1027:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(97),r=a(21),c=a(832),s=a(617),o=a(333),p=a(1),m=a(647),u=a.n(m),f=a(2);const d=e=>{var{hasGutter:t=!1,className:a="",children:n=null,component:i="div"}=e,r=Object(p.__rest)(e,["hasGutter","className","children","component"]);const c=i;return l.createElement(c,Object.assign({},r,{className:Object(f.css)(u.a.split,t&&u.a.modifiers.gutter,a)}),n)};d.displayName="Split";const g=e=>{var{isFilled:t=!1,className:a="",children:n=null}=e,i=Object(p.__rest)(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},i,{className:Object(f.css)(u.a.splitItem,t&&u.a.modifiers.fill,a)}),n)};g.displayName="SplitItem";var b=a(160),h=a(159),v=a(165),O=a(98),E=a(35),j=a(9),_=a(226),w=a(32),y=a(54),k=a(133),N=a(118),x=a(20);t.default=function(e){var t=e.viewState,a=void 0===t?w.a:t,l=Object(x.a)(),p=Object(O.a)(["portfolio"])[0].portfolio,m=Object(r.useDispatch)(),u=Object(r.useSelector)((function(e){var t=e.portfolioReducer;return Object(E.g)(t,p)})),f=Object(i.g)(),M=f.push,R=f.goBack;return u?!1===u.metadata.user_capabilities.destroy?n.a.createElement(_.a,null):n.a.createElement(s.a,{"aria-label":l(y.a.portfolioRemoveTitle),header:n.a.createElement(o.a,null,n.a.createElement(d,{hasGutter:!0},n.a.createElement(g,null,n.a.createElement(c.a,{size:"lg",style:{fill:"#f0ab00"}})),n.a.createElement(g,null,n.a.createElement(b.a,{component:"h1"},l(y.a.portfolioRemoveTitle))))),isOpen:!0,variant:"small",onClose:R,actions:[n.a.createElement(h.a,{key:"submit",variant:"danger",type:"button",id:"confirm-delete-portfolio",onClick:function(){return M(j.u),m(Object(v.k)(p,a))}},l(k.a.delete)),n.a.createElement(h.a,{key:"cancel",variant:"link",type:"button",onClick:R},l(N.a.cancel))]},n.a.createElement(o.a,null,n.a.createElement(b.a,{component:b.b.p},l(y.a.portfolioRemoveDescription,{name:u.name})))):null}},647:function(e,t,a){"use strict";t.__esModule=!0,a(692),t.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},692:function(e,t,a){var l=a(7),n=a(693);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};l(n,i);e.exports=n.locals||{}},693:function(e,t,a){(t=a(8)(!1)).push([e.i,".pf-l-split {\n  --pf-l-split--m-gutter--MarginRight: var(--pf-global--gutter);\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 0;\n  margin: 0; }\n\n.pf-l-split__item.pf-m-fill {\n  flex-grow: 1; }\n\n.pf-l-split.pf-m-gutter > *:not(:last-child) {\n  margin-right: var(--pf-l-split--m-gutter--MarginRight); }\n",""]),e.exports=t},832:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(129);const n=Object(l.a)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0});t.b=n}}]);
//# sourceMappingURL=../sourcemaps/remove-portfolio~31ecd969.js.map