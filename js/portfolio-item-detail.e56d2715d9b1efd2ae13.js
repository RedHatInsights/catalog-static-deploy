"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[3814],{42697:(e,t,r)=>{r.d(t,{s:()=>C,X:()=>L});var n=r(28481),o=r(30624),a=r.n(o),i=r(45697),l=r.n(i),c=r(334),s=r(24774),u=r(80256),p=r(63540),d=r(20018),m=r(6202),f=r(36001),b=r(22910),h=r(60396),g=r(96823),v=r(92512),E=r(68212),y=r(20697),Z=r(7579),_=r(64466),I=r(23349),O=r(29751),R=r(36722),T=function(e){var t=e.copyUrl,r=e.orderUrl,n=e.editUrl,i=e.workflowUrl,l=e.editSurveyUrl,c=e.isOpen,s=e.setOpen,p=e.isFetching,d=e.availability,m=e.orderable,f=e.userCapabilities,T=f.update,w=f.copy,k=f.set_approval,P=e.canLinkOrderProcesses,x=(0,I.Z)(),S=[];if(T&&S.push(a().createElement(g.h,{"aria-label":"Edit Portfolio",key:"edit-portfolio-item",id:"edit-portfolio-item",component:a().createElement(y.Z,{pathname:n,preserveSearch:!0},x(Z.Z.edit)),role:"link"})),w&&S.push(a().createElement(g.h,{"aria-label":"Copy Portfolio",key:"copy-portfolio-item",id:"copy-portfolio-item",component:a().createElement(y.Z,{pathname:t,preserveSearch:!0},x(Z.Z.copy)),role:"link"})),k&&S.push(a().createElement(g.h,{"aria-label":"Set approval",key:"set-approval_workflow",id:"set-approval_workflow",component:a().createElement(y.Z,{pathname:i,preserveSearch:!0},x(Z.Z.setApproval)),role:"link"})),T&&P){var q=x(O.Z.setOrderProcess);S.push(a().createElement(g.h,{"aria-label":q,key:"attach-order-processes",id:"attach-order-processes",component:a().createElement(y.Z,{preserveSearch:!0,pathname:R.$t},q),role:"link"}))}return T&&S.push(a().createElement(g.h,{"aria-label":"Edit survey",key:"edit-survey",id:"edit-survey",component:a().createElement(y.Z,{pathname:l,preserveSearch:!0},x(_.Z.portfolioItemSurvey)),role:"link"})),a().createElement(o.Fragment,null,a().createElement(u.Z,null,a().createElement(y.Z,{isDisabled:p||"unavailable"===d||!m,pathname:r,preserveSearch:!0},a().createElement(E.Z,{isDisabled:p||"unavailable"===d||!m,showSpinner:p,variant:"primary",id:"order-portfolio-item",ouiaId:"order-portfolio-item"},x(_.Z.portfolioItemOrder)))),a().createElement(u.Z,{style:{marginLeft:16}},"unavailable"!==d&&S.length>0&&a().createElement(b.L,{isPlain:!0,onToggle:s,onSelect:function(){return s(!1)},position:v.DropdownPosition.right,toggle:a().createElement(h.a,{id:"portfolio-item-actions-toggle",onToggle:function(e){return s(e)}}),isOpen:c,dropdownItems:S})))};T.propTypes={orderUrl:l().string.isRequired,editUrl:l().string.isRequired,copyUrl:l().string.isRequired,editSurveyUrl:l().string.isRequired,workflowUrl:l().string.isRequired,isOpen:l().bool,setOpen:l().func.isRequired,isFetching:l().bool,availability:l().oneOf(["available","unavailable"]).isRequired,orderable:l().bool,userCapabilities:l().shape({update:l().bool,copy:l().bool,set_approval:l().bool}).isRequired,canLinkOrderProcesses:l().bool},T.defaultProps={isFetching:!1,orderable:!0,canLinkOrderProcesses:!1};const w=T;var k=r(35388),P=r(32642),x=r(15811),S=r(57628),q=r(21976),j=function(e){var t=e.id,r=e.sourceId;return a().createElement(P.Z,{src:"".concat(k.Vs,"/portfolio_items/").concat(t,"/icon"),sourceId:r,height:64})};j.propTypes={id:l().string.isRequired,sourceId:l().string.isRequired};var C=function(e){var t=e.url,r=e.isOpen,n=e.product,o=e.setOpen,i=e.isFetching,l=e.availability,m=e.userCapabilities,f=e.orderable,b=e.fromProducts,h=e.canLinkOrderProcesses,g=(0,I.Z)(),v=(0,c.useLocation)().pathname;return a().createElement(x.Z,{paddingBottom:v!==R.Kf,breadcrumbs:!b},b&&a().createElement(q.Z,null),a().createElement(s.a,{className:"flex-no-wrap"},a().createElement(c.Switch,null,a().createElement(c.Route,{path:R.Kf,exact:!0},a().createElement(x.y,{title:g(_.Z.editProduct),noData:!0})),a().createElement(c.Route,null,a().createElement(S.v,{grow:!0,alignStart:!0,className:"pf-l-flex"},m.update?a().createElement(j,{id:n.id,sourceId:n.service_offering_source_ref}):a().createElement(P.Z,{src:"".concat(k.Vs,"/portfolio_items/").concat(n.id,"/icon"),sourceId:n.service_offering_source_ref,height:64}),a().createElement(d.TextContent,{className:"pf-u-ml-md"},a().createElement(p.Text,{component:p.TextVariants.h1},n.name))),a().createElement(u.Z,{style:{minHeight:36},className:"flex-item-no-wrap"},a().createElement(s.a,{className:"flex-no-wrap"},a().createElement(w,{isOpen:r,setOpen:function(e){return o(e)},orderUrl:"".concat(t,"/order"),editUrl:"".concat(t,"/edit"),copyUrl:"".concat(t,"/copy"),editSurveyUrl:"".concat(t,"/edit-survey"),workflowUrl:"".concat(t,"/edit-workflow"),isFetching:i,availability:l,orderable:f,userCapabilities:m,canLinkOrderProcesses:h})))))))};C.propTypes={url:l().string.isRequired,isOpen:l().bool,product:l().shape({distributor:l().string,name:l().string.isRequired,id:l().string.isRequired,service_offering_source_ref:l().string.isRequired,metadata:l().shape({orderable:l().bool})}).isRequired,setOpen:l().func.isRequired,isFetching:l().bool,availability:l().oneOf(["available","unavailable"]).isRequired,userCapabilities:l().object,fromProducts:l().bool,orderable:l().bool,canLinkOrderProcesses:l().bool},C.defaultProps={isFetching:!1,orderable:!0};var U=function(e){var t=e.handleResetSurvey,r=(0,I.Z)(),i=(0,o.useState)(!1),l=(0,n.Z)(i,2),c=l[0],s=l[1];return a().createElement(b.L,{isOpen:c,isPlain:!0,onSelect:function(){return s(!1)},position:"right",toggle:a().createElement(h.a,{onToggle:function(e){return s(e)}}),dropdownItems:[a().createElement(g.h,{onClick:t,component:"button",key:"synchronize"},r(_.Z.restoreSurvey))]})};U.propTypes={handleResetSurvey:l().func.isRequired};var L=function(e){var t=e.handleSaveSurvey,r=e.closeUrl,n=e.search,o=e.isFetching,i=e.isValid,l=e.modified,b=e.handleResetSurvey,h=(0,I.Z)();return a().createElement(x.Z,{breadcrumbs:!0},a().createElement(s.a,null,a().createElement(S.v,{grow:!0,alignStart:!0,className:"pf-l-flex"},a().createElement(d.TextContent,null,a().createElement(p.Text,{component:p.TextVariants.h1},h(_.Z.portfolioItemSurvey)))),a().createElement(u.Z,null,a().createElement(f.k,{className:"align-items-center"},a().createElement(E.Z,{variant:"primary",ouiaId:"save-survey",showSpinner:o,isDisabled:o||!i,onClick:t},h(Z.Z.save)),a().createElement(c.Link,{to:{pathname:r,search:n}},a().createElement(m.Button,{ouiaId:"cancel",variant:"link"},"Cancel")),l&&a().createElement(U,{handleResetSurvey:b})))))};L.propTypes={handleSaveSurvey:l().func.isRequired,closeUrl:l().string.isRequired,search:l().string.isRequired,isFetching:l().bool,isValid:l().bool,modified:l().bool,handleResetSurvey:l().func,fromProducts:l().bool,canLinkOrderProcesses:l().bool}},81166:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ie});var n=r(96156),o=r(28481),a=r(30624),i=r.n(a),l=r(45237),c=r(334),s=r(49287),u=r(18038),p=r(70044),d=r(54213),m=r(45697),f=r.n(m),b=r(63540),h=r(20018),g=r(62410),v=r(23349),E={id:"portfolio.item.detail.info.platform",defaultMessage:"Platform"},y={id:"portfolio.item.detail.info.portfolio",defaultMessage:"Portfolio"},Z={id:"portfolio.item.detail.info.vendor",defaultMessage:"Vendor"},_={id:"portfolio.item.detail.info.created",defaultMessage:"Created"},I=function(e){var t=e.product,r=e.source,n=e.portfolio,o=(0,v.Z)();return i().createElement(h.TextContent,{className:"pf-u-mb-md"},i().createElement(b.Text,{className:"font-14"},o(E)),i().createElement(b.Text,{id:"source-name",className:"overflow-wrap",component:b.TextVariants.p},r.name),i().createElement(b.Text,{className:"font-14"},o(y)),i().createElement(b.Text,{id:"portfolio-name",className:"overflow-wrap",component:b.TextVariants.p},n.name),t.distributor&&i().createElement("span",{id:"distributor"},i().createElement(b.Text,{className:"font-14"},o(Z)),i().createElement(b.Text,{className:"overflow-wrap",component:b.TextVariants.p},t.distributor)),i().createElement(b.Text,{className:"font-14"},o(_)),i().createElement(b.Text,{id:"created_at",component:b.TextVariants.p},i().createElement(g.Z,{variant:"relative",date:t.created_at})))};I.propTypes={product:f().shape({distributor:f().string,updated_at:f().string,created_at:f().string.isRequired}).isRequired,source:f().shape({name:f().string}).isRequired,portfolio:f().shape({name:f().string}).isRequired};const O=I;var R=r(81253),T=r(30137),w=r(96354),k=r(64124);const P={fields:[{component:w.Z.TEXT_FIELD,name:"name",label:"schemas.portfolio-item.name",isRequired:!0,validate:[{type:k.Z.REQUIRED}]},{component:w.Z.TEXT_FIELD,name:"description",label:"schemas.portfolio-item.description"},{component:w.Z.TEXT_FIELD,name:"long_description",label:"schemas.portfolio-item.long_description"},{component:w.Z.TEXT_FIELD,name:"distributor",label:"schemas.portfolio-item.vendor"},{component:w.Z.TEXT_FIELD,name:"documentation_url",label:"schemas.portfolio-item.documentation_url",validate:[{type:k.Z.URL}]},{component:w.Z.TEXT_FIELD,name:"support_url",label:"schemas.portfolio-item.support_url",validate:[{type:k.Z.URL}]}]};var x=r(89231),S=r(81159),q=r(34023),j=r(32465),C=r(92098),U=r(67463),L=r(22910),N=r(80765),D=r(96823),F=r(83215),V=r(29163),z=r(64466);const M=(0,r(62945).vU)({changeIcon:{id:"icons.actions.change",defaultMessage:"Upload image"},resetIcon:{id:"icons.actions.reset",defaultMessage:"Reset image"}});var X,K,A,$,B=V.ZP.span(X||(X=(0,j.Z)(["\n  border: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  &::after {\n    content: ' ';\n    position: absolute;\n    display: block;\n    top: -0.3em;\n    right: -0.3em;\n    width: 1.5em;\n    height: 1.5em;\n    border-radius: 50%;\n    background-color: rgba(255, 255, 255, 0.8);\n    z-index: 0;\n  }\n  svg,\n  .pf-c-spinner {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"]))),G=V.ZP.div(K||(K=(0,j.Z)(["\n  position: relative;\n  display: inline-block;\n"]))),H=V.ZP.img(A||(A=(0,j.Z)(["\n  height: 64px;\n  max-width: 300px;\n  object-fit: cover;\n"]))),J=(0,V.ZP)(L.L)($||($=(0,j.Z)(["\n  .pf-c-dropdown__menu {\n    top: 24px;\n    left: calc(100% - 24px);\n  }\n"]))),Y=function(e){var t=e.uploadIcon,r=e.resetIcon,n=e.enableReset,c=e.children,s=(0,v.Z)(),u=(0,a.useRef)(),p=(0,a.useState)(),d=(0,o.Z)(p,2),m=d[0],f=d[1],b=(0,a.useState)(!1),h=(0,o.Z)(b,2),g=h[0],E=h[1],y=(0,a.useState)(!1),Z=(0,o.Z)(y,2),_=Z[0],I=Z[1],O=(0,l.useDispatch)(),R=[i().createElement(D.h,{onClick:function(){return I(!1),u.current.click()},key:"change-icon"},s(M.changeIcon)),i().createElement(D.h,{isDisabled:!n,onClick:function(){return f(void 0),E(!0),r().then((function(){return E(!1)}))},key:"reset-icon"},s(M.resetIcon))];return i().createElement(G,null,i().createElement("input",{accept:".png,.svg,.jpeg",onChange:function(e){f(e.target.files[0]),E(!0),t(e.target.files[0]).then((function(){return E(!1)})).catch((function(e){O((0,F.wN)({variant:"danger",title:s(z.Z.portfolioItemIconTitle),description:e.data.errors[0].detail,dismissable:!0})),f(void 0),E(!1)}))},ref:u,type:"file",id:"icon-upload",hidden:!0}),i().createElement(J,{onSelect:function(){return I(!1)},isOpen:_,isPlain:!0,disabled:g,dropdownItems:R,toggle:i().createElement(N.Z,{disabled:g,toggleIndicator:null,onToggle:function(e,t){t.stopPropagation(),I(e)}},i().createElement(B,{ouiaId:"upload-icon"},g?i().createElement(U.Spinner,{size:"md"}):i().createElement(C.ZP,{size:"sm"})),!m&&c,m&&i().createElement(H,{style:{height:64},src:URL.createObjectURL(m),id:m.name}))}))};Y.propTypes={uploadIcon:f().func.isRequired,children:f().oneOfType([f().node,f().arrayOf(f().node)]),resetIcon:f().func.isRequired,enableReset:f().bool};const Q=Y;var W=r(35388),ee=r(32642),te=["owner","created_at","updated_at"];function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e){var t=e.cancelUrl,r=e.uploadIcon,n=e.resetIcon,o=e.product,a=(o.owner,o.created_at,o.updated_at,(0,R.Z)(o,te)),s=e.userCapabilities,u=(0,l.useDispatch)(),p=(0,c.useHistory)().push,d=(0,c.useLocation)().search;return i().createElement(S.K,{hasGutter:!0},i().createElement(q.v,{key:a.icon_id||"default"},i().createElement(Q,{uploadIcon:r,resetIcon:n,enableReset:!!a.icon_id},i().createElement(ee.Z,{src:"".concat(W.Vs,"/portfolio_items/").concat(a.id,"/icon?cache_id=").concat(a.icon_id||"default"),sourceId:a.service_offering_source_ref,height:64}))),i().createElement(q.v,null,i().createElement(T.ZP,{initialValues:ne({},a),onSubmit:function(e){return p({pathname:t,search:d}),u((0,x.qR)(ne(ne({},e),{},{metadata:{user_capabilities:s}})))},schema:P,templateProps:{disableSubmit:["pristine"]},onCancel:function(){return p({pathname:t,search:d})}})))};oe.propTypes={cancelUrl:f().string.isRequired,product:f().object.isRequired,userCapabilities:f().object.isRequired,uploadIcon:f().func.isRequired,resetIcon:f().func.isRequired};const ae=oe;var ie=r(16936),le=r(94002),ce=r(32796),se=r(36722),ue=function(e){var t=e.userCapabilities,r=e.product,n=e.url,o=e.search,l=e.detailPaths,s=e.uploadIcon,u=e.resetIcon,p=(0,v.Z)();return i().createElement(c.Switch,null,i().createElement(c.Route,{path:"".concat(n,"/edit-workflow")},i().createElement(ie.default,{pushParam:{pathname:n,search:o},objectType:W._5,objectId:r.id,objectName:function(){return r.name},querySelector:"portfolio-item"})),i().createElement(c.Route,{path:se.$t},i().createElement(ce.Z,{querySelector:"portfolio-item",objectType:W._5,objectName:function(){return r.name},pushParam:{pathname:n,search:o}})),i().createElement(c.Route,{exact:!0,path:l,render:function(){return i().createElement(h.TextContent,null,(r.description||r.long_description)&&i().createElement(b.Text,{component:b.TextVariants.h6},p(z.Z.portfolioItemOverview)),r.description&&i().createElement(b.Text,{id:"description",component:b.TextVariants.p},r.description),r.long_description&&i().createElement(b.Text,{id:"long_description",component:b.TextVariants.p},r.long_description),r.support_url&&i().createElement(b.Text,{id:"support_url",component:b.TextVariants.p},i().createElement("a",{href:r.support_url,target:"_blank",rel:"noopener noreferrer"},p(z.Z.portfolioItemSupport))),r.documentation_url&&i().createElement(a.Fragment,null,i().createElement(b.Text,{component:b.TextVariants.h6},p(z.Z.portfolioItemDocumentation)),i().createElement(b.Text,{id:"documentation_url",component:b.TextVariants.p},i().createElement("a",{href:r.documentation_url,target:"_blank",rel:"noopener noreferrer"},p(z.Z.portfolioItemDocLink)))))}}),i().createElement(le.Z,{exact:!0,path:"".concat(n,"/edit"),requiredCapabilities:"update",userCapabilities:t},i().createElement(ae,{cancelUrl:n,product:r,userCapabilities:t,uploadIcon:s,resetIcon:u})))};ue.propTypes={product:f().shape({name:f().string,long_description:f().string,support_url:f().string,documentation_url:f().string,description:f().string,id:f().string.isRequired}).isRequired,url:f().string.isRequired,search:f().string.isRequired,userCapabilities:f().object.isRequired,detailPaths:f().arrayOf(f().string),uploadIcon:f().func.isRequired,resetIcon:f().func.isRequired};const pe=ue;var de=r(42697),me=r(15811),fe=r(8666),be=r(83629),he=r(47786),ge=r(21976),ve=r(63035),Ee=r(72510);function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Ze=(0,a.lazy)((function(){return Promise.all([r.e(6410),r.e(4736),r.e(5201)]).then(r.bind(r,13148))})),_e=["portfolio","source","portfolio-item","from-products"];const Ie=function(){var e,t,r,m,f,b,h=(0,v.Z)(),g=(0,a.useState)(!1),E=(0,o.Z)(g,2),y=E[0],Z=E[1],_=(0,a.useState)(!0),I=(0,o.Z)(_,2),R=I[0],T=I[1],w=(0,l.useDispatch)(),k=(0,he.Z)(_e),P=(0,o.Z)(k,2),S=P[0],q=P[1],j=(0,c.useLocation)().pathname,C=(0,c.useRouteMatch)(se.YJ).url,U=(0,l.useSelector)((function(e){return e.portfolioReducer.portfolioItem})),L=(0,l.useSelector)((function(e){return e.portfolioReducer.selectedPortfolio})),N="true"===S["from-products"],D=(0,a.useContext)(Ee.Z).permissions,F=(0,ve.Fs)(D,["catalog:order_processes:link"]),V=function(e){e||T(!0),w((0,x.s8)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({portfolioItem:S["portfolio-item"]},S))).then((function(){return T(!1)})).catch((function(){return T(!1)}))};if((0,a.useEffect)((function(){insights.chrome.appNavClick({id:N?"products":"portfolios",secondaryNav:!0}),V(!1)}),[S["portfolio-item"]]),R||0===Object.keys(U).length)return i().createElement(d.Z,{className:"global-primary-background full-height"},i().createElement(me.Z,{breadcrumbs:!N},N&&i().createElement(ge.Z,null),i().createElement(fe.bx,null)));var M=(null==U||null===(e=U.source)||void 0===e?void 0:e.availability_status)||"unavailable",X=[null==U?void 0:U.source].filter((function(e){return e.notFound})).map((function(e){var t=e.object;return i().createElement(p.Alert,{className:"pf-u-mb-sm",key:t,variant:"warning",isInline:!0,title:h(z.Z.objectUnavaiable,{object:t})})})),K=function(e){var t;return(0,be.tN)(null==U||null===(t=U.portfolioItem)||void 0===t?void 0:t.id,e).then((function(){return V(!0)}))},A=[se.YJ,"".concat(C,"/order"),"".concat(C,"/copy"),"".concat(C,"/edit-workflow"),se.$t];return i().createElement(a.Fragment,null,i().createElement(c.Switch,null,i().createElement(le.Z,{requiredCapabilities:"update",userCapabilities:null==U||null===(t=U.portfolioItem)||void 0===t?void 0:t.metadata.user_capabilities,path:"".concat(C,"/edit-survey")},i().createElement(a.Suspense,{fallback:i().createElement(fe.zx,null)},i().createElement(Ze,{closeUrl:C,search:q,uploadIcon:K,portfolioItem:U.portfolioItem,portfolio:L}))),i().createElement(c.Route,null,i().createElement(d.Z,{className:"full-height global-primary-background"},i().createElement(de.s,{fromProducts:N,url:C,isOpen:y,product:U.portfolioItem,setOpen:Z,isFetching:R,availability:M,userCapabilities:null==U||null===(r=U.portfolioItem)||void 0===r?void 0:r.metadata.user_capabilities,orderable:null==U||null===(m=U.portfolioItem.metadata)||void 0===m?void 0:m.orderable,canLinkOrderProcesses:F}),X.length>0&&i().createElement("div",{className:"pf-u-mr-lg pf-u-ml-lg"},X),"unavailable"===(null==U||null===(f=U.source)||void 0===f?void 0:f.availability_status)&&i().createElement(p.Alert,{className:"pf-u-ml-lg pf-u-mr-lg",id:"unavailable-alert-info",variant:"info",isInline:!0,title:h(z.Z.sourceUnavaiable)}),i().createElement(s.r,{hasGutter:!0,className:"pf-u-p-lg"},i().createElement(c.Route,{path:A,exact:!0},i().createElement(u.P,{md:3,lg:2},i().createElement(O,{product:U.portfolioItem,portfolio:L,source:U.source}))),i().createElement(u.P,{md:j===se.Kf?12:9,lg:j===se.Kf?12:10},i().createElement(pe,{resetIcon:function(){var e;return(0,be.w6)(null==U||null===(e=U.portfolioItem)||void 0===e?void 0:e.icon_id).then(V)},uploadIcon:K,product:U.portfolioItem,userCapabilities:null==U||null===(b=U.portfolioItem)||void 0===b?void 0:b.metadata.user_capabilities,url:C,detailPaths:A,search:q})))))))}}}]);