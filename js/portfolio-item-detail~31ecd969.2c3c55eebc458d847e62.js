(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1034:function(e,t,a){"use strict";a.r(t);var r=a(164),n=a.n(r),o=a(118),i=a.n(o),l=a(0),c=a.n(l),s=a(21),u=a(97),p=a(172),d=a(173),m=a(364),f=a(221),b=a(16),g=a.n(b),v=a(58),h=a(59),O=a(217),y=a(20),E={id:"portfolio.item.detail.info.platform",defaultMessage:"Platform"},j={id:"portfolio.item.detail.info.portfolio",defaultMessage:"Portfolio"},w={id:"portfolio.item.detail.info.vendor",defaultMessage:"Vendor"},k={id:"portfolio.item.detail.info.created",defaultMessage:"Created"},I=function(e){var t=e.product,a=e.source,r=e.portfolio,n=Object(y.a)();return c.a.createElement(h.TextContent,{className:"pf-u-mb-md"},c.a.createElement(v.Text,{className:"font-14"},n(E)),c.a.createElement(v.Text,{id:"source-name",className:"overflow-wrap",component:v.TextVariants.p},a.name),c.a.createElement(v.Text,{className:"font-14"},n(j)),c.a.createElement(v.Text,{id:"portfolio-name",className:"overflow-wrap",component:v.TextVariants.p},r.name),t.distributor&&c.a.createElement("span",{id:"distributor"},c.a.createElement(v.Text,{className:"font-14"},n(w)),c.a.createElement(v.Text,{className:"overflow-wrap",component:v.TextVariants.p},t.distributor)),c.a.createElement(v.Text,{className:"font-14"},n(k)),c.a.createElement(v.Text,{id:"created_at",component:v.TextVariants.p},c.a.createElement(O.DateFormat,{variant:"relative",date:t.created_at})))};I.propTypes={product:g.a.shape({distributor:g.a.string,updated_at:g.a.string,created_at:g.a.string.isRequired}).isRequired,source:g.a.shape({name:g.a.string}).isRequired,portfolio:g.a.shape({name:g.a.string}).isRequired};var _=I,S=a(694),x=a.n(S),T=a(219),P=a(43),R=a.n(P),N=a(34),D=a.n(N),q={fields:[{component:R.a.TEXT_FIELD,name:"name",label:"schemas.portfolio-item.name",isRequired:!0,validate:[{type:D.a.REQUIRED}]},{component:R.a.TEXT_FIELD,name:"description",label:"schemas.portfolio-item.description"},{component:R.a.TEXT_FIELD,name:"long_description",label:"schemas.portfolio-item.long_description"},{component:R.a.TEXT_FIELD,name:"distributor",label:"schemas.portfolio-item.vendor"},{component:R.a.TEXT_FIELD,name:"documentation_url",label:"schemas.portfolio-item.documentation_url",validate:[{type:D.a.URL}]},{component:R.a.TEXT_FIELD,name:"support_url",label:"schemas.portfolio-item.support_url",validate:[{type:D.a.URL}]}]},C=a(165),M=a(993),L=a(994),U=a(232),F=a.n(U),B=a(992),V=a.n(B),W=a(167),z=a(334),A=a(337),G=a(335),X=a(131),H=a(23),K=a(54),J=a(22),Q=Object(J.b)({changeIcon:{id:"icons.actions.change",defaultMessage:"Upload image"},resetIcon:{id:"icons.actions.reset",defaultMessage:"Reset image"}});function Y(){var e=F()(["\n  .pf-c-dropdown__menu {\n    top: 24px;\n    left: calc(100% - 24px);\n  }\n"]);return Y=function(){return e},e}function Z(){var e=F()(["\n  height: 64px;\n  max-width: 300px;\n  object-fit: cover;\n"]);return Z=function(){return e},e}function $(){var e=F()(["\n  position: relative;\n  display: inline-block;\n"]);return $=function(){return e},e}function ee(){var e=F()(["\n  border: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  &::after {\n    content: ' ';\n    position: absolute;\n    display: block;\n    top: -0.3em;\n    right: -0.3em;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    background-color: rgba(255, 255, 255, 0.8);\n    z-index: 0;\n  }\n  svg,\n  .pf-c-spinner {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"]);return ee=function(){return e},e}var te=H.b.span(ee()),ae=H.b.div($()),re=H.b.img(Z()),ne=Object(H.b)(z.Dropdown)(Y()),oe=function(e){var t=e.uploadIcon,a=e.resetIcon,r=e.enableReset,n=e.children,o=Object(y.a)(),u=Object(l.useRef)(),p=Object(l.useState)(),d=i()(p,2),m=d[0],f=d[1],b=Object(l.useState)(!1),g=i()(b,2),v=g[0],h=g[1],O=Object(l.useState)(!1),E=i()(O,2),j=E[0],w=E[1],k=Object(s.useDispatch)(),I=[c.a.createElement(G.DropdownItem,{onClick:function(){return w(!1),u.current.click()},key:"change-icon"},o(Q.changeIcon)),c.a.createElement(G.DropdownItem,{isDisabled:!r,onClick:function(){return f(void 0),h(!0),a().then((function(){return h(!1)}))},key:"reset-icon"},o(Q.resetIcon))];return c.a.createElement(ae,null,c.a.createElement("input",{accept:".png,.svg,.jpeg",onChange:function(e){f(e.target.files[0]),h(!0),t(e.target.files[0]).then((function(){return h(!1)})).catch((function(e){k(Object(X.addNotification)({variant:"danger",title:o(K.a.portfolioItemIconTitle),description:e.data.errors[0].detail,dismissable:!0})),f(void 0),h(!1)}))},ref:u,type:"file",id:"icon-upload",hidden:!0}),c.a.createElement(ne,{onSelect:function(){return w(!1)},isOpen:j,isPlain:!0,disabled:v,dropdownItems:I,toggle:c.a.createElement(A.DropdownToggle,{disabled:v,toggleIndicator:null,onToggle:function(e,t){t.stopPropagation(),w(e)}},c.a.createElement(te,{ouiaId:"upload-icon"},v?c.a.createElement(W.Spinner,{size:"md"}):c.a.createElement(V.a,{size:"sm"})),!m&&n,m&&c.a.createElement(re,{style:{height:64},src:URL.createObjectURL(m),id:m.name}))}))};oe.propTypes={uploadIcon:g.a.func.isRequired,children:g.a.oneOfType([g.a.node,g.a.arrayOf(g.a.node)]),resetIcon:g.a.func.isRequired,enableReset:g.a.bool};var ie=oe,le=a(5),ce=a(657);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var pe=function(e){var t=e.cancelUrl,a=e.uploadIcon,r=e.resetIcon,n=e.product,o=(n.owner,n.created_at,n.updated_at,x()(n,["owner","created_at","updated_at"])),i=e.userCapabilities,l=Object(s.useDispatch)(),p=Object(u.g)().push,d=Object(u.h)().search;return c.a.createElement(M.Stack,{hasGutter:!0},c.a.createElement(L.StackItem,{key:o.icon_id||"default"},c.a.createElement(ie,{uploadIcon:a,resetIcon:r,enableReset:!!o.icon_id},c.a.createElement(ce.a,{src:"".concat(le.e,"/portfolio_items/").concat(o.id,"/icon?cache_id=").concat(o.icon_id||"default"),sourceId:o.service_offering_source_ref,height:64}))),c.a.createElement(L.StackItem,null,c.a.createElement(T.c,{initialValues:ue({},o),onSubmit:function(e){return p({pathname:t,search:d}),l(Object(C.p)(ue(ue({},e),{},{metadata:{user_capabilities:i}})))},schema:q,templateProps:{disableSubmit:["pristine"]},onCancel:function(){return p({pathname:t,search:d})}})))};pe.propTypes={cancelUrl:g.a.string.isRequired,product:g.a.object.isRequired,userCapabilities:g.a.object.isRequired,uploadIcon:g.a.func.isRequired,resetIcon:g.a.func.isRequired};var de=pe,me=a(893),fe=a(50),be=a(262),ge=a(9),ve=function(e){var t=e.userCapabilities,a=e.product,r=e.url,n=e.search,o=e.detailPaths,i=e.uploadIcon,s=e.resetIcon,p=Object(y.a)();return c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"".concat(r,"/edit-workflow")},c.a.createElement(me.default,{pushParam:{pathname:r,search:n},objectType:le.h,objectId:a.id,objectName:function(){return a.name},querySelector:"portfolio-item"})),c.a.createElement(u.b,{path:ge.v},c.a.createElement(be.a,{querySelector:"portfolio-item",objectType:le.h,objectName:function(){return a.name},pushParam:{pathname:r,search:n}})),c.a.createElement(u.b,{exact:!0,path:o,render:function(){return c.a.createElement(h.TextContent,null,(a.description||a.long_description)&&c.a.createElement(v.Text,{component:v.TextVariants.h6},p(K.a.portfolioItemOverview)),a.description&&c.a.createElement(v.Text,{id:"description",component:v.TextVariants.p},a.description),a.long_description&&c.a.createElement(v.Text,{id:"long_description",component:v.TextVariants.p},a.long_description),a.support_url&&c.a.createElement(v.Text,{id:"support_url",component:v.TextVariants.p},c.a.createElement("a",{href:a.support_url,target:"_blank",rel:"noopener noreferrer"},p(K.a.portfolioItemSupport))),a.documentation_url&&c.a.createElement(l.Fragment,null,c.a.createElement(v.Text,{component:v.TextVariants.h6},p(K.a.portfolioItemDocumentation)),c.a.createElement(v.Text,{id:"documentation_url",component:v.TextVariants.p},c.a.createElement("a",{href:a.documentation_url,target:"_blank",rel:"noopener noreferrer"},p(K.a.portfolioItemDocLink)))))}}),c.a.createElement(fe.a,{exact:!0,path:"".concat(r,"/edit"),requiredCapabilities:"update",userCapabilities:t},c.a.createElement(de,{cancelUrl:r,product:a,userCapabilities:t,uploadIcon:i,resetIcon:s})))};ve.propTypes={product:g.a.shape({name:g.a.string,long_description:g.a.string,support_url:g.a.string,documentation_url:g.a.string,description:g.a.string,id:g.a.string.isRequired}).isRequired,url:g.a.string.isRequired,search:g.a.string.isRequired,userCapabilities:g.a.object.isRequired,detailPaths:g.a.arrayOf(g.a.string),uploadIcon:g.a.func.isRequired,resetIcon:g.a.func.isRequired};var he=ve,Oe=a(895),ye=a(672),Ee=a(99),je=a(35),we=a(98),ke=a(822),Ie=a(119),_e=a(134);function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var xe=Object(l.lazy)((function(){return Promise.all([a.e(69),a.e(68)]).then(a.bind(null,1030))})),Te=["portfolio","source","portfolio-item","from-products"];t.default=function(){var e,t,a,r,o,b,g=Object(y.a)(),v=Object(l.useState)(!1),h=i()(v,2),O=h[0],E=h[1],j=Object(l.useState)(!0),w=i()(j,2),k=w[0],I=w[1],S=Object(s.useDispatch)(),x=Object(we.a)(Te),T=i()(x,2),P=T[0],R=T[1],N=Object(u.h)().pathname,D=Object(u.i)(ge.w).url,q=Object(s.useSelector)((function(e){return e.portfolioReducer.portfolioItem})),M=Object(s.useSelector)((function(e){return e.portfolioReducer.selectedPortfolio})),L="true"===P["from-products"],U=Object(l.useContext)(_e.a).permissions,F=Object(Ie.b)(U,["catalog:order_processes:link"]),B=function(e){e||I(!0),S(Object(C.j)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({portfolioItem:P["portfolio-item"]},P))).then((function(){return I(!1)})).catch((function(){return I(!1)}))};if(Object(l.useEffect)((function(){insights.chrome.appNavClick({id:L?"products":"portfolios",secondaryNav:!0}),B(!1)}),[P["portfolio-item"]]),k||0===Object.keys(q).length)return c.a.createElement(f.Section,{className:"global-primary-background full-height"},c.a.createElement(ye.b,{breadcrumbs:!L},L&&c.a.createElement(ke.a,null),c.a.createElement(Ee.h,null)));var V=(null==q||null===(e=q.source)||void 0===e?void 0:e.availability_status)||"unavailable",W=[null==q?void 0:q.source].filter((function(e){return e.notFound})).map((function(e){var t=e.object;return c.a.createElement(m.Alert,{className:"pf-u-mb-sm",key:t,variant:"warning",isInline:!0,title:g(K.a.objectUnavaiable,{object:t})})})),z=function(e){var t;return Object(je.s)(null==q||null===(t=q.portfolioItem)||void 0===t?void 0:t.id,e).then((function(){return B(!0)}))},A=[ge.w,"".concat(D,"/order"),"".concat(D,"/copy"),"".concat(D,"/edit-workflow"),ge.v];return c.a.createElement(l.Fragment,null,c.a.createElement(u.d,null,c.a.createElement(fe.a,{requiredCapabilities:"update",userCapabilities:null==q||null===(t=q.portfolioItem)||void 0===t?void 0:t.metadata.user_capabilities,path:"".concat(D,"/edit-survey")},c.a.createElement(l.Suspense,{fallback:c.a.createElement(Ee.a,null)},c.a.createElement(xe,{closeUrl:D,search:R,uploadIcon:z,portfolioItem:q.portfolioItem,portfolio:M}))),c.a.createElement(u.b,null,c.a.createElement(f.Section,{className:"full-height global-primary-background"},c.a.createElement(Oe.a,{fromProducts:L,url:D,isOpen:O,product:q.portfolioItem,setOpen:E,isFetching:k,availability:V,userCapabilities:null==q||null===(a=q.portfolioItem)||void 0===a?void 0:a.metadata.user_capabilities,orderable:null==q||null===(r=q.portfolioItem.metadata)||void 0===r?void 0:r.orderable,canLinkOrderProcesses:F}),W.length>0&&c.a.createElement("div",{className:"pf-u-mr-lg pf-u-ml-lg"},W),"unavailable"===(null==q||null===(o=q.source)||void 0===o?void 0:o.availability_status)&&c.a.createElement(m.Alert,{className:"pf-u-ml-lg pf-u-mr-lg",id:"unavailable-alert-info",variant:"info",isInline:!0,title:g(K.a.sourceUnavaiable)}),c.a.createElement(p.Grid,{hasGutter:!0,className:"pf-u-p-lg"},c.a.createElement(u.b,{path:A,exact:!0},c.a.createElement(d.GridItem,{md:3,lg:2},c.a.createElement(_,{product:q.portfolioItem,portfolio:M,source:q.source}))),c.a.createElement(d.GridItem,{md:N===ge.x?12:9,lg:N===ge.x?12:10},c.a.createElement(he,{resetIcon:function(){var e;return Object(je.n)(null==q||null===(e=q.portfolioItem)||void 0===e?void 0:e.icon_id).then(B)},uploadIcon:z,product:q.portfolioItem,userCapabilities:null==q||null===(b=q.portfolioItem)||void 0===b?void 0:b.metadata.user_capabilities,url:D,detailPaths:A,search:R})))))))}},694:function(e,t,a){var r=a(809);e.exports=function(e,t){if(null==e)return{};var a,n,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},809:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}},825:function(e,t,a){"use strict";var r,n,o=a(0),i=a.n(o),l=a(23),c=a(159),s=a(167),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},p=function(){return(p=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},m=Object(l.b)(c.a)(r||(r=u(["\n  display: flex !important;\n  align-items: center;\n"],["\n  display: flex !important;\n  align-items: center;\n"]))),f=l.b.span(n||(n=u(["\n  margin-right: ",";\n"],["\n  margin-right: ",";\n"])),(function(e){return e.showSpinner?"8px":"0"})),b=Object(o.forwardRef)((function(e,t){var a=e.children,r=e.showSpinner,n=void 0!==r&&r,o=e.isDisabled,l=void 0!==o&&o,c=d(e,["children","showSpinner","isDisabled"]);return i.a.createElement(m,p({ref:t},c,{isDisabled:l}),i.a.createElement(f,{showSpinner:n},a),n&&i.a.createElement(s.Spinner,{size:"md"}))}));b.displayName="ButtonWithSpinner",t.a=b},893:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(21),i=a(126),l=a(28),c=a(5),s=a(32),u=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<a;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,n++)r[n]=o[i];return r},p=function(e,t){void 0===e&&(e=""),void 0===t&&(t=[]);var a=t.map((function(e){return"filter[id][]="+e})).join("&");return Object(l.a)().get(c.b+"/workflows?filter[name][contains]="+e+"&"+(a||"")).then((function(e){return e.data.map((function(e){var t=e.id;return{label:e.name,value:t}}))}))},d=function(e,t,a){var r=e?e.map((function(e){return Object(l.j)().unlinkWorkflow(e,a)})):[],n=t?t.map((function(e){return Object(l.j)().linkWorkflow(e,a)})):[];return Promise.all(u(r,n))},m=function(e,t,a){void 0===t&&(t={limit:s.a.limit,offset:s.a.offset}),void 0===a&&(a="");var r="app_name="+e.appName+"&object_type="+e.objectType+"&object_id="+e.objectId,n="&limit="+t.limit+"&offset="+t.offset,o="&filter[name][contains]="+a;return Object(l.a)().get(c.b+"/workflows?"+r+o+n)},f=a(131),b=function(e){return e().i18nReducer.formatMessage},g=a(22),v=Object(g.b)({unlinkNotification:{id:"approval.notifications.unlink",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} unlinked successfully."},linkNotification:{id:"approval.notifications.link",defaultMessage:"{count, number} {count, plural, one {approval process was} other {approval processes were}} linked successfully."},setWorkflow:{id:"approval.workflows.set",defaultMessage:"Select approval processes for <strong>{objectName}</strong>"},currentWorkflows:{id:"approval.workflows.current",defaultMessage:"Current approval processes"}}),h=a(98),O=a(624),y=a(20),E=a(233),j=a(231);t.default=function(e){var t=e.objectType,a=e.removeSearch,l=e.keepHash,s=void 0!==l&&l,u=e.querySelector,w=e.pushParam,k=e.objectName,I=void 0===k?function(){return t}:k,_=e.onClose,S=Object(y.a)(),x=Object(r.useRef)(S(Object(g.a)({id:"workflows.modal.title",defaultMessage:"Set approval process"}))).current,T=Object(o.useDispatch)(),P=Object(O.a)({removeSearch:a,keepHash:s}),R=Object(h.a)([u])[0],N=function(){_&&_(),P.push(w)};return n.a.createElement(E.a,{title:x,onClose:N,onSubmit:function(e,a){var r,n,o;N(),T((r=e,n=a,o={object_type:t,app_name:c.c[t],object_id:R[u]},function(e,t){var a=b(t);return e({type:i.a.UPDATE_WORKFLOWS,payload:d(n,r,o).then((function(){return e(Object(f.addNotification)({variant:"success",title:"Success updating approval process",dismissable:!0,description:(n.length>0?a&&a(v.unlinkNotification,{count:n.length}):"")+"\n          "+(r.length>0?a(v.linkNotification,{count:r.length}):"")}))}))})}))},getInitialTags:function(){return m({objectType:t,appName:c.c[t],objectId:R[u]}).then((function(e){return e.data}))},loadTags:p,subTitle:S(v.setWorkflow,{strong:j.a,objectName:I(R[u])}),existingTagsMessage:S(v.currentWorkflows)})}},895:function(e,t,a){"use strict";a.d(t,"a",(function(){return M})),a.d(t,"b",(function(){return U}));var r=a(118),n=a.n(r),o=a(0),i=a.n(o),l=a(16),c=a.n(l),s=a(97),u=a(78),p=a(349),d=a(360),m=a(58),f=a(59),b=a(162),g=a(995),v=a(334),h=a(346),O=a(335),y=a(63),E=a(825),j=a(623),w=a(133),k=a(54),I=a(20),_=a(44),S=a(9),x=function(e){var t=e.copyUrl,a=e.orderUrl,r=e.editUrl,n=e.workflowUrl,l=e.editSurveyUrl,c=e.isOpen,s=e.setOpen,u=e.isFetching,p=e.availability,m=e.orderable,f=e.userCapabilities,b=f.update,g=f.copy,x=f.set_approval,T=e.canLinkOrderProcesses,P=Object(I.a)(),R=[];if(b&&R.push(i.a.createElement(O.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio-item",id:"edit-portfolio-item",component:i.a.createElement(j.a,{pathname:r,preserveSearch:!0},P(w.a.edit)),role:"link"})),g&&R.push(i.a.createElement(O.DropdownItem,{"aria-label":"Copy Portfolio",key:"copy-portfolio-item",id:"copy-portfolio-item",component:i.a.createElement(j.a,{pathname:t,preserveSearch:!0},P(w.a.copy)),role:"link"})),x&&R.push(i.a.createElement(O.DropdownItem,{"aria-label":"Set approval",key:"set-approval_workflow",id:"set-approval_workflow",component:i.a.createElement(j.a,{pathname:n,preserveSearch:!0},P(w.a.setApproval)),role:"link"})),b&&T){var N=P(_.a.setOrderProcess);R.push(i.a.createElement(O.DropdownItem,{"aria-label":N,key:"attach-order-processes",id:"attach-order-processes",component:i.a.createElement(j.a,{preserveSearch:!0,pathname:S.v},N),role:"link"}))}return b&&R.push(i.a.createElement(O.DropdownItem,{"aria-label":"Edit survey",key:"edit-survey",id:"edit-survey",component:i.a.createElement(j.a,{pathname:l,preserveSearch:!0},P(k.a.portfolioItemSurvey)),role:"link"})),i.a.createElement(o.Fragment,null,i.a.createElement(d.LevelItem,null,i.a.createElement(j.a,{isDisabled:u||"unavailable"===p||!m,pathname:a,preserveSearch:!0},i.a.createElement(E.a,{isDisabled:u||"unavailable"===p||!m,showSpinner:u,variant:"primary",id:"order-portfolio-item",ouiaId:"order-portfolio-item"},P(k.a.portfolioItemOrder)))),i.a.createElement(d.LevelItem,{style:{marginLeft:16}},"unavailable"!==p&&R.length>0&&i.a.createElement(v.Dropdown,{isPlain:!0,onToggle:s,onSelect:function(){return s(!1)},position:y.DropdownPosition.right,toggle:i.a.createElement(h.KebabToggle,{id:"portfolio-item-actions-toggle",onToggle:function(e){return s(e)}}),isOpen:c,dropdownItems:R})))};x.propTypes={orderUrl:c.a.string.isRequired,editUrl:c.a.string.isRequired,copyUrl:c.a.string.isRequired,editSurveyUrl:c.a.string.isRequired,workflowUrl:c.a.string.isRequired,isOpen:c.a.bool,setOpen:c.a.func.isRequired,isFetching:c.a.bool,availability:c.a.oneOf(["available","unavailable"]).isRequired,orderable:c.a.bool,userCapabilities:c.a.shape({update:c.a.bool,copy:c.a.bool,set_approval:c.a.bool}).isRequired,canLinkOrderProcesses:c.a.bool},x.defaultProps={isFetching:!1,orderable:!0,canLinkOrderProcesses:!1};var T=x,P=a(5),R=a(657),N=a(672),D=a(105),q=a(822),C=function(e){var t=e.id,a=e.sourceId;return i.a.createElement(R.a,{src:"".concat(P.e,"/portfolio_items/").concat(t,"/icon"),sourceId:a,height:64})};C.propTypes={id:c.a.string.isRequired,sourceId:c.a.string.isRequired};var M=function(e){var t=e.url,a=e.isOpen,r=e.product,n=e.setOpen,o=e.isFetching,l=e.availability,c=e.userCapabilities,u=e.orderable,b=e.fromProducts,g=e.canLinkOrderProcesses,v=Object(I.a)(),h=Object(s.h)().pathname;return i.a.createElement(N.b,{paddingBottom:h!==S.x,breadcrumbs:!b},b&&i.a.createElement(q.a,null),i.a.createElement(p.Level,{className:"flex-no-wrap"},i.a.createElement(s.d,null,i.a.createElement(s.b,{path:S.x,exact:!0},i.a.createElement(N.a,{title:v(k.a.editProduct),noData:!0})),i.a.createElement(s.b,null,i.a.createElement(D.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},c.update?i.a.createElement(C,{id:r.id,sourceId:r.service_offering_source_ref}):i.a.createElement(R.a,{src:"".concat(P.e,"/portfolio_items/").concat(r.id,"/icon"),sourceId:r.service_offering_source_ref,height:64}),i.a.createElement(f.TextContent,{className:"pf-u-ml-md"},i.a.createElement(m.Text,{component:m.TextVariants.h1},r.name))),i.a.createElement(d.LevelItem,{style:{minHeight:36},className:"flex-item-no-wrap"},i.a.createElement(p.Level,{className:"flex-no-wrap"},i.a.createElement(T,{isOpen:a,setOpen:function(e){return n(e)},orderUrl:"".concat(t,"/order"),editUrl:"".concat(t,"/edit"),copyUrl:"".concat(t,"/copy"),editSurveyUrl:"".concat(t,"/edit-survey"),workflowUrl:"".concat(t,"/edit-workflow"),isFetching:o,availability:l,orderable:u,userCapabilities:c,canLinkOrderProcesses:g})))))))};M.propTypes={url:c.a.string.isRequired,isOpen:c.a.bool,product:c.a.shape({distributor:c.a.string,name:c.a.string.isRequired,id:c.a.string.isRequired,service_offering_source_ref:c.a.string.isRequired,metadata:c.a.shape({orderable:c.a.bool})}).isRequired,setOpen:c.a.func.isRequired,isFetching:c.a.bool,availability:c.a.oneOf(["available","unavailable"]).isRequired,userCapabilities:c.a.object,fromProducts:c.a.bool,orderable:c.a.bool,canLinkOrderProcesses:c.a.bool},M.defaultProps={isFetching:!1,orderable:!0};var L=function(e){var t=e.handleResetSurvey,a=Object(I.a)(),r=Object(o.useState)(!1),l=n()(r,2),c=l[0],s=l[1];return i.a.createElement(v.Dropdown,{isOpen:c,isPlain:!0,onSelect:function(){return s(!1)},position:"right",toggle:i.a.createElement(h.KebabToggle,{onToggle:function(e){return s(e)}}),dropdownItems:[i.a.createElement(O.DropdownItem,{onClick:t,component:"button",key:"synchronize"},a(k.a.restoreSurvey))]})};L.propTypes={handleResetSurvey:c.a.func.isRequired};var U=function(e){var t=e.handleSaveSurvey,a=e.closeUrl,r=e.search,n=e.isFetching,o=e.isValid,l=e.modified,c=e.handleResetSurvey,s=Object(I.a)();return i.a.createElement(N.b,{breadcrumbs:!0},i.a.createElement(p.Level,null,i.a.createElement(D.a,{grow:!0,alignStart:!0,className:"pf-l-flex"},i.a.createElement(f.TextContent,null,i.a.createElement(m.Text,{component:m.TextVariants.h1},s(k.a.portfolioItemSurvey)))),i.a.createElement(d.LevelItem,null,i.a.createElement(g.Flex,{className:"align-items-center"},i.a.createElement(E.a,{variant:"primary",ouiaId:"save-survey",showSpinner:n,isDisabled:n||!o,onClick:t},s(w.a.save)),i.a.createElement(u.a,{to:{pathname:a,search:r}},i.a.createElement(b.Button,{ouiaId:"cancel",variant:"link"},"Cancel")),l&&i.a.createElement(L,{handleResetSurvey:c})))))};U.propTypes={handleSaveSurvey:c.a.func.isRequired,closeUrl:c.a.string.isRequired,search:c.a.string.isRequired,isFetching:c.a.bool,isValid:c.a.bool,modified:c.a.bool,handleResetSurvey:c.a.func,fromProducts:c.a.bool,canLinkOrderProcesses:c.a.bool}},992:function(e,t,a){"use strict";t.__esModule=!0,t.PencilAltIconConfig={name:"PencilAltIcon",height:512,width:512,svgPath:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z",yOffset:0,xOffset:0},t.PencilAltIcon=a(26).createIcon(t.PencilAltIconConfig),t.default=t.PencilAltIcon},993:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stack=void 0;const r=a(1),n=r.__importStar(a(0)),o=r.__importDefault(a(107)),i=a(2);t.Stack=e=>{var{hasGutter:t=!1,className:a="",children:l=null,component:c="div"}=e,s=r.__rest(e,["hasGutter","className","children","component"]);const u=c;return n.createElement(u,Object.assign({},s,{className:i.css(o.default.stack,t&&o.default.modifiers.gutter,a)}),l)},t.Stack.displayName="Stack"},994:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StackItem=void 0;const r=a(1),n=r.__importStar(a(0)),o=r.__importDefault(a(107)),i=a(2);t.StackItem=e=>{var{isFilled:t=!1,className:a="",children:l=null}=e,c=r.__rest(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},c,{className:i.css(o.default.stackItem,t&&o.default.modifiers.fill,a)}),l)},t.StackItem.displayName="StackItem"},995:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Flex=void 0;const r=a(1),n=r.__importStar(a(0)),o=a(2),i=r.__importDefault(a(804)),l=a(116);t.Flex=e=>{var{children:t=null,className:a="",spacer:c,spaceItems:s,grow:u,shrink:p,flex:d,direction:m,alignItems:f,alignContent:b,alignSelf:g,align:v,justifyContent:h,display:O,fullWidth:y,flexWrap:E}=e,j=r.__rest(e,["children","className","spacer","spaceItems","grow","shrink","flex","direction","alignItems","alignContent","alignSelf","align","justifyContent","display","fullWidth","flexWrap"]);return n.createElement("div",Object.assign({className:o.css(i.default.flex,l.formatBreakpointMods(c,i.default),l.formatBreakpointMods(s,i.default),l.formatBreakpointMods(u,i.default),l.formatBreakpointMods(p,i.default),l.formatBreakpointMods(d,i.default),l.formatBreakpointMods(m,i.default),l.formatBreakpointMods(f,i.default),l.formatBreakpointMods(b,i.default),l.formatBreakpointMods(g,i.default),l.formatBreakpointMods(v,i.default),l.formatBreakpointMods(h,i.default),l.formatBreakpointMods(O,i.default),l.formatBreakpointMods(y,i.default),l.formatBreakpointMods(E,i.default),a)},j),t)},t.Flex.displayName="Flex"}}]);
//# sourceMappingURL=../sourcemaps/portfolio-item-detail~31ecd969.js.map