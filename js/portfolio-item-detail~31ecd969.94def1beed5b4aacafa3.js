(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1029:function(e,t,a){"use strict";a.r(t);var r=a(40),n=a.n(r),o=a(107),i=a.n(o),l=a(0),c=a.n(l),s=a(26),u=a(106),d=a(198),p=a(199),m=a(988),f=a(241),b=a(5),g=a.n(b),v=a(68),h=a(69),_=a(239),E=a(27),I={id:"portfolio.item.detail.info.platform",defaultMessage:"Platform"},O={id:"portfolio.item.detail.info.portfolio",defaultMessage:"Portfolio"},y={id:"portfolio.item.detail.info.vendor",defaultMessage:"Vendor"},j={id:"portfolio.item.detail.info.created",defaultMessage:"Created"},w=function(e){var t=e.product,a=e.source,r=e.portfolio,n=Object(E.a)();return c.a.createElement(h.TextContent,{className:"pf-u-mb-md"},c.a.createElement(v.Text,{className:"font-14"},n(I)),c.a.createElement(v.Text,{id:"source-name",className:"overflow-wrap",component:v.TextVariants.p},a.name),c.a.createElement(v.Text,{className:"font-14"},n(O)),c.a.createElement(v.Text,{id:"portfolio-name",className:"overflow-wrap",component:v.TextVariants.p},r.name),t.distributor&&c.a.createElement("span",{id:"distributor"},c.a.createElement(v.Text,{className:"font-14"},n(y)),c.a.createElement(v.Text,{className:"overflow-wrap",component:v.TextVariants.p},t.distributor)),c.a.createElement(v.Text,{className:"font-14"},n(j)),c.a.createElement(v.Text,{id:"created_at",component:v.TextVariants.p},c.a.createElement(_.DateFormat,{variant:"relative",date:t.created_at})))};w.propTypes={product:g.a.shape({distributor:g.a.string,updated_at:g.a.string,created_at:g.a.string.isRequired}).isRequired,source:g.a.shape({name:g.a.string}).isRequired,portfolio:g.a.shape({name:g.a.string}).isRequired};var k=w,C=a(245),S=a.n(C),T=a(243),x=a(48),P=a.n(x),N=a(38),R=a.n(N),D={fields:[{component:P.a.TEXT_FIELD,name:"name",label:"schemas.portfolio-item.name",isRequired:!0,validate:[{type:R.a.REQUIRED}]},{component:P.a.TEXT_FIELD,name:"description",label:"schemas.portfolio-item.description"},{component:P.a.TEXT_FIELD,name:"long_description",label:"schemas.portfolio-item.long_description"},{component:P.a.TEXT_FIELD,name:"distributor",label:"schemas.portfolio-item.vendor"},{component:P.a.TEXT_FIELD,name:"documentation_url",label:"schemas.portfolio-item.documentation_url",validate:[{type:R.a.URL}]},{component:P.a.TEXT_FIELD,name:"support_url",label:"schemas.portfolio-item.support_url",validate:[{type:R.a.URL}]}]},M=a(150),L=a(985),q=a(986),A=a(255),U=a.n(A),F=a(984),z=a.n(F),B=a(191),V=a(624),W=a(628),G=a(625),H=a(41),X=a(30),K=a(58),J=a(29),Z=Object(J.b)({changeIcon:{id:"icons.actions.change",defaultMessage:"Upload image"},resetIcon:{id:"icons.actions.reset",defaultMessage:"Reset image"}});function Q(){var e=U()(["\n  .pf-c-dropdown__menu {\n    top: 24px;\n    left: calc(100% - 24px);\n  }\n"]);return Q=function(){return e},e}function Y(){var e=U()(["\n  height: 64px;\n  max-width: 300px;\n  object-fit: cover;\n"]);return Y=function(){return e},e}function $(){var e=U()(["\n  position: relative;\n  display: inline-block;\n"]);return $=function(){return e},e}function ee(){var e=U()(["\n  border: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  &::after {\n    content: ' ';\n    position: absolute;\n    display: block;\n    top: -0.3em;\n    right: -0.3em;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    background-color: rgba(255, 255, 255, 0.8);\n    z-index: 0;\n  }\n  svg,\n  .pf-c-spinner {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"]);return ee=function(){return e},e}var te=X.b.span(ee()),ae=X.b.div($()),re=X.b.img(Y()),ne=Object(X.b)(V.Dropdown)(Q()),oe=function(e){var t=e.uploadIcon,a=e.resetIcon,r=e.enableReset,n=e.children,o=Object(E.a)(),u=Object(l.useRef)(),d=Object(l.useState)(),p=i()(d,2),m=p[0],f=p[1],b=Object(l.useState)(!1),g=i()(b,2),v=g[0],h=g[1],_=Object(l.useState)(!1),I=i()(_,2),O=I[0],y=I[1],j=Object(s.d)(),w=[c.a.createElement(G.DropdownItem,{onClick:function(){return y(!1),u.current.click()},key:"change-icon"},o(Z.changeIcon)),c.a.createElement(G.DropdownItem,{isDisabled:!r,onClick:function(){return f(void 0),h(!0),a().then((function(){return h(!1)}))},key:"reset-icon"},o(Z.resetIcon))];return c.a.createElement(ae,null,c.a.createElement("input",{accept:".png,.svg,.jpeg",onChange:function(e){f(e.target.files[0]),h(!0),t(e.target.files[0]).then((function(){return h(!1)})).catch((function(e){j(Object(H.c)({variant:"danger",title:o(K.a.portfolioItemIconTitle),description:e.data.errors[0].detail,dismissable:!0})),f(void 0),h(!1)}))},ref:u,type:"file",id:"icon-upload",hidden:!0}),c.a.createElement(ne,{onSelect:function(){return y(!1)},isOpen:O,isPlain:!0,disabled:v,dropdownItems:w,toggle:c.a.createElement(W.DropdownToggle,{disabled:v,toggleIndicator:null,onToggle:function(e,t){t.stopPropagation(),y(e)}},c.a.createElement(te,{ouiaId:"upload-icon"},v?c.a.createElement(B.Spinner,{size:"md"}):c.a.createElement(z.a,{size:"sm"})),!m&&n,m&&c.a.createElement(re,{style:{height:64},src:URL.createObjectURL(m),id:m.name}))}))};oe.propTypes={uploadIcon:g.a.func.isRequired,children:g.a.oneOfType([g.a.node,g.a.arrayOf(g.a.node)]),resetIcon:g.a.func.isRequired,enableReset:g.a.bool};var ie=oe,le=a(6),ce=a(678);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de=function(e){var t=e.cancelUrl,a=e.uploadIcon,r=e.resetIcon,n=e.product,o=(n.owner,n.created_at,n.updated_at,S()(n,["owner","created_at","updated_at"])),i=e.userCapabilities,l=Object(s.d)(),d=Object(u.g)().push,p=Object(u.h)().search;return c.a.createElement(L.Stack,{hasGutter:!0},c.a.createElement(q.StackItem,{key:o.icon_id||"default"},c.a.createElement(ie,{uploadIcon:a,resetIcon:r,enableReset:!!o.icon_id},c.a.createElement(ce.a,{src:"".concat(le.e,"/portfolio_items/").concat(o.id,"/icon?cache_id=").concat(o.icon_id||"default"),sourceId:o.service_offering_source_ref,height:64}))),c.a.createElement(q.StackItem,null,c.a.createElement(T.c,{initialValues:ue({},o),onSubmit:function(e){return d({pathname:t,search:p}),l(Object(M.p)(ue(ue({},e),{},{metadata:{user_capabilities:i}})))},schema:D,templateProps:{disableSubmit:["pristine"]},onCancel:function(){return d({pathname:t,search:p})}})))};de.propTypes={cancelUrl:g.a.string.isRequired,product:g.a.object.isRequired,userCapabilities:g.a.object.isRequired,uploadIcon:g.a.func.isRequired,resetIcon:g.a.func.isRequired};var pe=de,me=a(903),fe=a(56),be=a(285),ge=a(13),ve=function(e){var t=e.userCapabilities,a=e.product,r=e.url,n=e.search,o=e.detailPaths,i=e.uploadIcon,s=e.resetIcon,d=Object(E.a)();return c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"".concat(r,"/edit-workflow")},c.a.createElement(me.default,{pushParam:{pathname:r,search:n},objectType:le.j,objectId:a.id,objectName:function(){return a.name},querySelector:"portfolio-item"})),c.a.createElement(u.b,{path:ge.w},c.a.createElement(be.a,{querySelector:"portfolio-item",objectType:le.j,objectName:function(){return a.name},pushParam:{pathname:r,search:n}})),c.a.createElement(u.b,{exact:!0,path:o,render:function(){return c.a.createElement(h.TextContent,null,(a.description||a.long_description)&&c.a.createElement(v.Text,{component:v.TextVariants.h6},d(K.a.portfolioItemOverview)),a.description&&c.a.createElement(v.Text,{id:"description",component:v.TextVariants.p},a.description),a.long_description&&c.a.createElement(v.Text,{id:"long_description",component:v.TextVariants.p},a.long_description),a.support_url&&c.a.createElement(v.Text,{id:"support_url",component:v.TextVariants.p},c.a.createElement("a",{href:a.support_url,target:"_blank",rel:"noopener noreferrer"},d(K.a.portfolioItemSupport))),a.documentation_url&&c.a.createElement(l.Fragment,null,c.a.createElement(v.Text,{component:v.TextVariants.h6},d(K.a.portfolioItemDocumentation)),c.a.createElement(v.Text,{id:"documentation_url",component:v.TextVariants.p},c.a.createElement("a",{href:a.documentation_url,target:"_blank",rel:"noopener noreferrer"},d(K.a.portfolioItemDocLink)))))}}),c.a.createElement(fe.a,{exact:!0,path:"".concat(r,"/edit"),requiredCapabilities:"update",userCapabilities:t},c.a.createElement(pe,{cancelUrl:r,product:a,userCapabilities:t,uploadIcon:i,resetIcon:s})))};ve.propTypes={product:g.a.shape({name:g.a.string,long_description:g.a.string,support_url:g.a.string,documentation_url:g.a.string,description:g.a.string,id:g.a.string.isRequired}).isRequired,url:g.a.string.isRequired,search:g.a.string.isRequired,userCapabilities:g.a.object.isRequired,detailPaths:g.a.arrayOf(g.a.string),uploadIcon:g.a.func.isRequired,resetIcon:g.a.func.isRequired};var he=ve,_e=a(904),Ee=a(647),Ie=a(108),Oe=a(39),ye=a(109),je=a(835),we=a(130),ke=a(154);function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var Se=Object(l.lazy)((function(){return Promise.all([a.e(12),a.e(66),a.e(67)]).then(a.bind(null,1026))})),Te=["portfolio","source","portfolio-item","from-products"];t.default=function(){var e,t,a,r,o,b,g=Object(E.a)(),v=Object(l.useState)(!1),h=i()(v,2),_=h[0],I=h[1],O=Object(l.useState)(!0),y=i()(O,2),j=y[0],w=y[1],C=Object(s.d)(),S=Object(ye.a)(Te),T=i()(S,2),x=T[0],P=T[1],N=Object(u.h)().pathname,R=Object(u.i)(ge.y).url,D=Object(s.e)((function(e){return e.portfolioReducer.portfolioItem})),L=Object(s.e)((function(e){return e.portfolioReducer.selectedPortfolio})),q="true"===x["from-products"],A=Object(l.useContext)(ke.a).permissions,U=Object(we.c)(A,["catalog:order_processes:link"]),F=function(e){e||w(!0),C(Object(M.j)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({portfolioItem:x["portfolio-item"]},x))).then((function(){return w(!1)})).catch((function(){return w(!1)}))};if(Object(l.useEffect)((function(){insights.chrome.appNavClick({id:q?"products":"portfolios",secondaryNav:!0}),F(!1)}),[x["portfolio-item"]]),j||0===Object.keys(D).length)return c.a.createElement(f.Section,{className:"global-primary-background full-height"},c.a.createElement(Ee.b,{breadcrumbs:!q},q&&c.a.createElement(je.a,null),c.a.createElement(Ie.h,null)));var z=(null==D||null===(e=D.source)||void 0===e?void 0:e.availability_status)||"unavailable",B=[null==D?void 0:D.source].filter((function(e){return e.notFound})).map((function(e){var t=e.object;return c.a.createElement(m.Alert,{className:"pf-u-mb-sm",key:t,variant:"warning",isInline:!0,title:g(K.a.objectUnavaiable,{object:t})})})),V=function(e){var t;return Object(Oe.s)(null==D||null===(t=D.portfolioItem)||void 0===t?void 0:t.id,e).then((function(){return F(!0)}))},W=[ge.y,"".concat(R,"/order"),"".concat(R,"/copy"),"".concat(R,"/edit-workflow"),ge.w];return c.a.createElement(l.Fragment,null,c.a.createElement(u.d,null,c.a.createElement(fe.a,{requiredCapabilities:"update",userCapabilities:null==D||null===(t=D.portfolioItem)||void 0===t?void 0:t.metadata.user_capabilities,path:"".concat(R,"/edit-survey")},c.a.createElement(l.Suspense,{fallback:c.a.createElement(Ie.a,null)},c.a.createElement(Se,{closeUrl:R,search:P,uploadIcon:V,portfolioItem:D.portfolioItem,portfolio:L}))),c.a.createElement(u.b,null,c.a.createElement(f.Section,{className:"full-height global-primary-background"},c.a.createElement(_e.a,{fromProducts:q,url:R,isOpen:_,product:D.portfolioItem,setOpen:I,isFetching:j,availability:z,userCapabilities:null==D||null===(a=D.portfolioItem)||void 0===a?void 0:a.metadata.user_capabilities,orderable:null==D||null===(r=D.portfolioItem.metadata)||void 0===r?void 0:r.orderable,canLinkOrderProcesses:U}),B.length>0&&c.a.createElement("div",{className:"pf-u-mr-lg pf-u-ml-lg"},B),"unavailable"===(null==D||null===(o=D.source)||void 0===o?void 0:o.availability_status)&&c.a.createElement(m.Alert,{className:"pf-u-ml-lg pf-u-mr-lg",id:"unavailable-alert-info",variant:"info",isInline:!0,title:g(K.a.sourceUnavaiable)}),c.a.createElement(d.Grid,{hasGutter:!0,className:"pf-u-p-lg"},c.a.createElement(u.b,{path:W,exact:!0},c.a.createElement(p.GridItem,{md:3,lg:2},c.a.createElement(k,{product:D.portfolioItem,portfolio:L,source:D.source}))),c.a.createElement(p.GridItem,{md:N===ge.z?12:9,lg:N===ge.z?12:10},c.a.createElement(he,{resetIcon:function(){var e;return Object(Oe.n)(null==D||null===(e=D.portfolioItem)||void 0===e?void 0:e.icon_id).then(F)},uploadIcon:V,product:D.portfolioItem,userCapabilities:null==D||null===(b=D.portfolioItem)||void 0===b?void 0:b.metadata.user_capabilities,url:R,detailPaths:W,search:P})))))))}},628:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownToggle=void 0;const r=a(2),n=r.__importStar(a(0)),o=r.__importDefault(a(240)),i=a(718),l=r.__importDefault(a(11)),c=a(618),s=a(1),u=a(148);t.DropdownToggle=e=>{var{id:a="",children:d=null,className:p="",isOpen:m=!1,parentRef:f=null,getMenuRef:b=null,isDisabled:g=!1,isPlain:v=!1,isPrimary:h=!1,isActive:_=!1,onToggle:E=(e=>{}),icon:I=null,toggleIndicator:O=o.default,splitButtonItems:y,splitButtonVariant:j="checkbox","aria-haspopup":w,ouiaId:k,ouiaSafe:C,ref:S}=e,T=r.__rest(e,["id","children","className","isOpen","parentRef","getMenuRef","isDisabled","isPlain","isPrimary","isActive","onToggle","icon","toggleIndicator","splitButtonItems","splitButtonVariant","aria-haspopup","ouiaId","ouiaSafe","ref"]);const x=u.useOUIAProps(t.DropdownToggle.displayName,k,C),P=n.createElement(c.DropdownContext.Consumer,null,({toggleTextClass:e,toggleIndicatorClass:t,toggleIconClass:r})=>n.createElement(i.Toggle,Object.assign({},T,{id:a,className:p,isOpen:m,parentRef:f,getMenuRef:b,isActive:_,isDisabled:g,isPlain:v,isPrimary:h,onToggle:E,"aria-haspopup":w},x,y&&{isSplitButton:!0,"aria-label":T["aria-label"]||"Select"}),I&&n.createElement("span",{className:s.css(r)},I),d&&n.createElement("span",{className:O&&s.css(e)},d),O&&n.createElement("span",{className:s.css(!y&&t)},n.createElement(O,null))));return y?n.createElement("div",{className:s.css(l.default.dropdownToggle,l.default.modifiers.splitButton,"action"===j&&l.default.modifiers.action,g&&l.default.modifiers.disabled)},y,P):P},t.DropdownToggle.displayName="DropdownToggle"},715:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Level=void 0;const r=a(2),n=r.__importStar(a(0)),o=a(1),i=r.__importDefault(a(194));t.Level=e=>{var{hasGutter:t,className:a="",children:l=null}=e,c=r.__rest(e,["hasGutter","className","children"]);return n.createElement("div",Object.assign({},c,{className:o.css(i.default.level,t&&i.default.modifiers.gutter,a)}),l)},t.Level.displayName="Level"},772:function(e,t,a){"use strict";t.__esModule=!0,t.InfoCircleIconConfig={name:"InfoCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",yOffset:0,xOffset:0},t.InfoCircleIcon=a(98).createIcon(t.InfoCircleIconConfig),t.default=t.InfoCircleIcon},830:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LevelItem=void 0;const r=a(2),n=r.__importStar(a(0));t.LevelItem=e=>{var{children:t=null}=e,a=r.__rest(e,["children"]);return n.createElement("div",Object.assign({},a),t)},t.LevelItem.displayName="LevelItem"},836:function(e,t,a){"use strict";t.__esModule=!0,t.ExclamationCircleIconConfig={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.ExclamationCircleIcon=a(98).createIcon(t.ExclamationCircleIconConfig),t.default=t.ExclamationCircleIcon},837:function(e,t,a){"use strict";t.__esModule=!0,t.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.ExclamationTriangleIcon=a(98).createIcon(t.ExclamationTriangleIconConfig),t.default=t.ExclamationTriangleIcon},839:function(e,t,a){"use strict";var r,n,o=a(0),i=a.n(o),l=a(30),c=a(77),s=a(191),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d=function(){return(d=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},m=Object(l.b)(c.a)(r||(r=u(["\n  display: flex !important;\n  align-items: center;\n"],["\n  display: flex !important;\n  align-items: center;\n"]))),f=l.b.span(n||(n=u(["\n  margin-right: ",";\n"],["\n  margin-right: ",";\n"])),(function(e){return e.showSpinner?"8px":"0"})),b=Object(o.forwardRef)((function(e,t){var a=e.children,r=e.showSpinner,n=void 0!==r&&r,o=e.isDisabled,l=void 0!==o&&o,c=p(e,["children","showSpinner","isDisabled"]);return i.a.createElement(m,d({ref:t},c,{isDisabled:l}),i.a.createElement(f,{showSpinner:n},a),n&&i.a.createElement(s.Spinner,{size:"md"}))}));b.displayName="ButtonWithSpinner",t.a=b},865:function(e,t,a){"use strict";t.__esModule=!0,t.CheckCircleIconConfig={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},t.CheckCircleIcon=a(98).createIcon(t.CheckCircleIconConfig),t.default=t.CheckCircleIcon},866:function(e,t,a){"use strict";t.__esModule=!0,t.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},t.BellIcon=a(98).createIcon(t.BellIconConfig),t.default=t.BellIcon},903:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(26),i=a(143),l=a(18),c=a(6),s=a(36),u=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<a;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,n++)r[n]=o[i];return r},d=function(e,t){void 0===e&&(e=""),void 0===t&&(t=[]);var a=t.map((function(e){return"filter[id][]="+e})).join("&");return Object(l.a)().get(c.b+"/workflows?filter[name][contains]="+e+"&"+(a||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},p=function(e,t,a){var r=e?e.map((function(e){return Object(l.j)().unlinkWorkflow(e,a)})):[],n=t?t.map((function(e){return Object(l.j)().linkWorkflow(e,a)})):[];return Promise.all(u(r,n))},m=function(e,t,a){void 0===t&&(t={limit:s.a.limit,offset:s.a.offset}),void 0===a&&(a="");var r="app_name="+e.appName+"&object_type="+e.objectType+"&object_id="+e.objectId,n="&limit="+t.limit+"&offset="+t.offset,o="&filter[name][contains]="+a;return Object(l.a)().get(c.b+"/workflows?"+r+o+n)},f=a(41),b=function(e){return e().i18nReducer.formatMessage},g=a(29),v=Object(g.b)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"},currentWorkflows:{id:"approval.workflows.current",defaultMessage:"Current approval processes"}}),h=a(109),_=a(629),E=a(27),I=a(259),O=a(254);t.default=function(e){var t=e.objectType,a=e.removeSearch,l=e.keepHash,s=void 0!==l&&l,u=e.querySelector,y=e.pushParam,j=e.objectName,w=void 0===j?function(){return t}:j,k=e.postMethod,C=e.onClose,S=Object(E.a)(),T=Object(r.useRef)(S(Object(g.a)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,x=Object(o.d)(),P=Object(_.a)({removeSearch:a,keepHash:s}),N=Object(h.a)([u])[0],R=function(){C&&C(),P.push(y)};return n.a.createElement(I.a,{title:T,onClose:R,onSubmit:function(e,a){var r,n,o;R(),x((r=e,n=a,o={object_type:t,app_name:c.c[t],object_id:N[u]},function(e,t){var a=b(t);return e({type:i.a.UPDATE_WORKFLOWS,payload:p(n,r,o).then((function(){return e(Object(f.c)({variant:"success",title:"Success updating approval process",dismissable:!0,description:(n.length>0?a&&a(v.unlinkNotification,{count:n.length}):"")+"\n          "+(r.length>0?a(v.linkNotification,{count:r.length}):"")}))}))})})).then((function(){k&&x(k())}))},getInitialTags:function(){return m({objectType:t,appName:c.c[t],objectId:N[u]}).then((function(e){return e.data}))},loadTags:d,subTitle:S(v.setWorkflow,{strong:O.a,objectName:w(N[u])}),existingTagsMessage:S(v.currentWorkflows)})}},904:function(e,t,a){"use strict";a.d(t,"a",(function(){return L})),a.d(t,"b",(function(){return A}));var r=a(107),n=a.n(r),o=a(0),i=a.n(o),l=a(5),c=a.n(l),s=a(106),u=a(87),d=a(715),p=a(830),m=a(68),f=a(69),b=a(362),g=a(987),v=a(624),h=a(677),_=a(625),E=a(618),I=a(839),O=a(619),y=a(153),j=a(58),w=a(27),k=a(49),C=a(13),S=function(e){var t=e.copyUrl,a=e.orderUrl,r=e.editUrl,n=e.workflowUrl,l=e.editSurveyUrl,c=e.isOpen,s=e.setOpen,u=e.isFetching,d=e.availability,m=e.orderable,f=e.userCapabilities,b=f.update,g=f.copy,S=f.set_approval,T=e.canLinkOrderProcesses,x=Object(w.a)(),P=[];if(b&&P.push(i.a.createElement(_.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio-item",id:"edit-portfolio-item",component:i.a.createElement(O.a,{pathname:r,preserveSearch:!0},x(y.a.edit)),role:"link"})),g&&P.push(i.a.createElement(_.DropdownItem,{"aria-label":"Copy Portfolio",key:"copy-portfolio-item",id:"copy-portfolio-item",component:i.a.createElement(O.a,{pathname:t,preserveSearch:!0},x(y.a.copy)),role:"link"})),S&&P.push(i.a.createElement(_.DropdownItem,{"aria-label":"Set approval",key:"set-approval_workflow",id:"set-approval_workflow",component:i.a.createElement(O.a,{pathname:n,preserveSearch:!0},x(y.a.setApproval)),role:"link"})),b&&T){var N=x(k.a.setOrderProcess);P.push(i.a.createElement(_.DropdownItem,{"aria-label":N,key:"attach-order-processes",id:"attach-order-processes",component:i.a.createElement(O.a,{preserveSearch:!0,pathname:C.w},N),role:"link"}))}return b&&P.push(i.a.createElement(_.DropdownItem,{"aria-label":"Edit survey",key:"edit-survey",id:"edit-survey",component:i.a.createElement(O.a,{pathname:l,preserveSearch:!0},x(j.a.portfolioItemSurvey)),role:"link"})),i.a.createElement(o.Fragment,null,i.a.createElement(p.LevelItem,null,i.a.createElement(O.a,{isDisabled:u||"unavailable"===d||!m,pathname:a,preserveSearch:!0},i.a.createElement(I.a,{isDisabled:u||"unavailable"===d||!m,showSpinner:u,variant:"primary",id:"order-portfolio-item",ouiaId:"order-portfolio-item"},x(j.a.portfolioItemOrder)))),i.a.createElement(p.LevelItem,{style:{marginLeft:16}},"unavailable"!==d&&P.length>0&&i.a.createElement(v.Dropdown,{isPlain:!0,onToggle:s,onSelect:function(){return s(!1)},position:E.DropdownPosition.right,toggle:i.a.createElement(h.KebabToggle,{id:"portfolio-item-actions-toggle",onToggle:function(e){return s(e)}}),isOpen:c,dropdownItems:P})))};S.propTypes={orderUrl:c.a.string.isRequired,editUrl:c.a.string.isRequired,copyUrl:c.a.string.isRequired,editSurveyUrl:c.a.string.isRequired,workflowUrl:c.a.string.isRequired,isOpen:c.a.bool,setOpen:c.a.func.isRequired,isFetching:c.a.bool,availability:c.a.oneOf(["available","unavailable"]).isRequired,orderable:c.a.bool,userCapabilities:c.a.shape({update:c.a.bool,copy:c.a.bool,set_approval:c.a.bool}).isRequired,canLinkOrderProcesses:c.a.bool},S.defaultProps={isFetching:!1,orderable:!0,canLinkOrderProcesses:!1};var T=S,x=a(6),P=a(678),N=a(647),R=a(117),D=a(835),M=function(e){var t=e.id,a=e.sourceId;return i.a.createElement(P.a,{src:"".concat(x.e,"/portfolio_items/").concat(t,"/icon"),sourceId:a,height:64})};M.propTypes={id:c.a.string.isRequired,sourceId:c.a.string.isRequired};var L=function(e){var t=e.url,a=e.isOpen,r=e.product,n=e.setOpen,o=e.isFetching,l=e.availability,c=e.userCapabilities,u=e.orderable,b=e.fromProducts,g=e.canLinkOrderProcesses,v=Object(w.a)(),h=Object(s.h)().pathname;return i.a.createElement(N.b,{paddingBottom:h!==C.z,breadcrumbs:!b},b&&i.a.createElement(D.a,null),i.a.createElement(d.Level,{className:"flex-no-wrap"},i.a.createElement(s.d,null,i.a.createElement(s.b,{path:C.z,exact:!0},i.a.createElement(N.a,{title:v(j.a.editProduct),noData:!0})),i.a.createElement(s.b,null,i.a.createElement(R.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},c.update?i.a.createElement(M,{id:r.id,sourceId:r.service_offering_source_ref}):i.a.createElement(P.a,{src:"".concat(x.e,"/portfolio_items/").concat(r.id,"/icon"),sourceId:r.service_offering_source_ref,height:64}),i.a.createElement(f.TextContent,{className:"pf-u-ml-md"},i.a.createElement(m.Text,{component:m.TextVariants.h1},r.name))),i.a.createElement(p.LevelItem,{style:{minHeight:36},className:"flex-item-no-wrap"},i.a.createElement(d.Level,{className:"flex-no-wrap"},i.a.createElement(T,{isOpen:a,setOpen:function(e){return n(e)},orderUrl:"".concat(t,"/order"),editUrl:"".concat(t,"/edit"),copyUrl:"".concat(t,"/copy"),editSurveyUrl:"".concat(t,"/edit-survey"),workflowUrl:"".concat(t,"/edit-workflow"),isFetching:o,availability:l,orderable:u,userCapabilities:c,canLinkOrderProcesses:g})))))))};L.propTypes={url:c.a.string.isRequired,isOpen:c.a.bool,product:c.a.shape({distributor:c.a.string,name:c.a.string.isRequired,id:c.a.string.isRequired,service_offering_source_ref:c.a.string.isRequired,metadata:c.a.shape({orderable:c.a.bool})}).isRequired,setOpen:c.a.func.isRequired,isFetching:c.a.bool,availability:c.a.oneOf(["available","unavailable"]).isRequired,userCapabilities:c.a.object,fromProducts:c.a.bool,orderable:c.a.bool,canLinkOrderProcesses:c.a.bool},L.defaultProps={isFetching:!1,orderable:!0};var q=function(e){var t=e.handleResetSurvey,a=Object(w.a)(),r=Object(o.useState)(!1),l=n()(r,2),c=l[0],s=l[1];return i.a.createElement(v.Dropdown,{isOpen:c,isPlain:!0,onSelect:function(){return s(!1)},position:"right",toggle:i.a.createElement(h.KebabToggle,{onToggle:function(e){return s(e)}}),dropdownItems:[i.a.createElement(_.DropdownItem,{onClick:t,component:"button",key:"synchronize"},a(j.a.restoreSurvey))]})};q.propTypes={handleResetSurvey:c.a.func.isRequired};var A=function(e){var t=e.handleSaveSurvey,a=e.closeUrl,r=e.search,n=e.isFetching,o=e.isValid,l=e.modified,c=e.handleResetSurvey,s=Object(w.a)();return i.a.createElement(N.b,{breadcrumbs:!0},i.a.createElement(d.Level,null,i.a.createElement(R.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},i.a.createElement(f.TextContent,null,i.a.createElement(m.Text,{component:m.TextVariants.h1},s(j.a.portfolioItemSurvey)))),i.a.createElement(p.LevelItem,null,i.a.createElement(g.Flex,{className:"align-items-center"},i.a.createElement(I.a,{variant:"primary",ouiaId:"save-survey",showSpinner:n,isDisabled:n||!o,onClick:t},s(y.a.save)),i.a.createElement(u.a,{to:{pathname:a,search:r}},i.a.createElement(b.Button,{ouiaId:"cancel",variant:"link"},"Cancel")),l&&i.a.createElement(q,{handleResetSurvey:c})))))};A.propTypes={handleSaveSurvey:c.a.func.isRequired,closeUrl:c.a.string.isRequired,search:c.a.string.isRequired,isFetching:c.a.bool,isValid:c.a.bool,modified:c.a.bool,handleResetSurvey:c.a.func,fromProducts:c.a.bool,canLinkOrderProcesses:c.a.bool}},984:function(e,t,a){"use strict";t.__esModule=!0,t.PencilAltIconConfig={name:"PencilAltIcon",height:512,width:512,svgPath:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z",yOffset:0,xOffset:0},t.PencilAltIcon=a(98).createIcon(t.PencilAltIconConfig),t.default=t.PencilAltIcon},985:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stack=void 0;const r=a(2),n=r.__importStar(a(0)),o=r.__importDefault(a(118)),i=a(1);t.Stack=e=>{var{hasGutter:t=!1,className:a="",children:l=null,component:c="div"}=e,s=r.__rest(e,["hasGutter","className","children","component"]);const u=c;return n.createElement(u,Object.assign({},s,{className:i.css(o.default.stack,t&&o.default.modifiers.gutter,a)}),l)},t.Stack.displayName="Stack"},986:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StackItem=void 0;const r=a(2),n=r.__importStar(a(0)),o=r.__importDefault(a(118)),i=a(1);t.StackItem=e=>{var{isFilled:t=!1,className:a="",children:l=null}=e,c=r.__rest(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},c,{className:i.css(o.default.stackItem,t&&o.default.modifiers.fill,a)}),l)},t.StackItem.displayName="StackItem"},987:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Flex=void 0;const r=a(2),n=r.__importStar(a(0)),o=a(1),i=r.__importDefault(a(824)),l=a(189);t.Flex=e=>{var{children:t=null,className:a="",spacer:c,spaceItems:s,grow:u,shrink:d,flex:p,direction:m,alignItems:f,alignContent:b,alignSelf:g,align:v,justifyContent:h,display:_,fullWidth:E,flexWrap:I}=e,O=r.__rest(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return n.createElement("div",Object.assign({className:o.css(i.default.flex,l.formatBreakpointMods(c,i.default),l.formatBreakpointMods(s,i.default),l.formatBreakpointMods(u,i.default),l.formatBreakpointMods(d,i.default),l.formatBreakpointMods(p,i.default),l.formatBreakpointMods(m,i.default),l.formatBreakpointMods(f,i.default),l.formatBreakpointMods(b,i.default),l.formatBreakpointMods(g,i.default),l.formatBreakpointMods(v,i.default),l.formatBreakpointMods(h,i.default),l.formatBreakpointMods(_,i.default),l.formatBreakpointMods(E,i.default),l.formatBreakpointMods(I,i.default),a)},O),t)},t.Flex.displayName="Flex"},988:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=t.AlertVariant=void 0;const r=a(2),n=r.__importStar(a(0)),o=a(0),i=a(1),l=r.__importDefault(a(67)),c=r.__importDefault(a(158)),s=a(989),u=a(148),d=a(990),p=r.__importDefault(a(991)),m=a(638);var f;!function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(f=t.AlertVariant||(t.AlertVariant={})),t.Alert=e=>{var{variant:a=f.default,isInline:b=!1,isLiveRegion:g=!1,variantLabel:v=u.capitalize(a)+" alert:","aria-label":h=u.capitalize(a)+" Alert",actionClose:_,actionLinks:E,title:I,children:O="",className:y="",ouiaId:j,ouiaSafe:w=!0,timeout:k=!1,onTimeout:C,truncateTitle:S=0,tooltipPosition:T,customIcon:x}=e,P=r.__rest(e,["variant","isInline","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","children","className","ouiaId","ouiaSafe","timeout","onTimeout","truncateTitle","tooltipPosition","customIcon"]);const N=u.useOUIAProps(t.Alert.displayName,j,w,a),R=n.createElement(n.Fragment,null,n.createElement("span",{className:i.css(c.default.screenReader)},v),I),[D,M]=o.useState(!1),[L,q]=o.useState(!1),A=n.useRef(null);n.useEffect(()=>{if(!A.current||!S)return;A.current.style.setProperty(p.default.name,S.toString());const e=A.current&&A.current.offsetHeight<A.current.scrollHeight;L!==e&&q(e)},[A,S,L]);const U=i.css(l.default.alert,b&&l.default.modifiers.inline,a!==f.default&&l.default.modifiers[a],y),F=n.createElement("h4",Object.assign({},L&&{tabIndex:0},{ref:A,className:i.css(l.default.alertTitle,S&&l.default.modifiers.truncate)}),R);return!1===D&&k&&0!==k&&setTimeout(()=>{M(!0),C&&C()},!0===k?8e3:k),!1===D?n.createElement("div",Object.assign({},P,{className:U,"aria-label":h},N,g&&{"aria-live":"polite","aria-atomic":"false"}),n.createElement(s.AlertIcon,{variant:a,customIcon:x}),L?n.createElement(m.Tooltip,{content:R,position:T},F):F,_&&n.createElement(d.AlertContext.Provider,{value:{title:I,variantLabel:v}},n.createElement("div",{className:i.css(l.default.alertAction)},_)),O&&n.createElement("div",{className:i.css(l.default.alertDescription)},O),E&&n.createElement("div",{className:i.css(l.default.alertActionGroup)},E)):null},t.Alert.displayName="Alert"},989:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertIcon=t.variantIcons=void 0;const r=a(2),n=r.__importStar(a(0)),o=a(1),i=r.__importDefault(a(67)),l=r.__importDefault(a(865)),c=r.__importDefault(a(836)),s=r.__importDefault(a(837)),u=r.__importDefault(a(772)),d=r.__importDefault(a(866));t.variantIcons={success:l.default,danger:c.default,warning:s.default,info:u.default,default:d.default},t.AlertIcon=e=>{var{variant:a,customIcon:l,className:c=""}=e,s=r.__rest(e,["variant","customIcon","className"]);const u=t.variantIcons[a];return n.createElement("div",Object.assign({},s,{className:o.css(i.default.alertIcon,c)}),l||n.createElement(u,null))}},990:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertContext=void 0;const r=a(2).__importStar(a(0));t.AlertContext=r.createContext(null)},991:function(e,t,a){"use strict";t.__esModule=!0,t.c_alert__title_max_lines={name:"--pf-c-alert__title--max-lines",value:"1",var:"var(--pf-c-alert__title--max-lines)"},t.default=t.c_alert__title_max_lines}}]);
//# sourceMappingURL=../sourcemaps/portfolio-item-detail~31ecd969.js.map