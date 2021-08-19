"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[5201],{13148:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r,a=n(90484),i=n(85061),u=n(28481),o=n(22122),l=n(81253),c=n(96156),s=n(30624),p=n.n(s),d=n(45697),f=n.n(d),m=n(334),v=n(96354),h=n(13969),b=n(14512),D=n(67463),y=n(15654),E=n(35388),Z=n(8896),g=n(23811),O=n(80887),S=n(77221),P=n(12282),T=n(42697),_=n(45237),V=n(83215),R=n(30137),C=n(64124),I=["propertyValidation","children"],A=["label","initialValueOptions","value","fieldId","innerProps","onChange"],j=["validate"],w=["type"],M=["validate"],U=["type"],k=["getSchema","isValid"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=X(X({},b.uD.Pv),{},{propertyName:"isSubstitution",label:"Substitution"}),N=function(e){var t=e.propertyValidation.message,n=e.children,r=(0,l.Z)(e,I);return p().createElement(g.c,(0,o.Z)({helperTextInvalid:t,validated:t?"error":"default"},r),n)};N.propTypes={propertyValidation:f().shape({message:f().string}),children:f().oneOfType([f().node,f().arrayOf(f().node)])},N.defaultProps={propertyValidation:{}};var F=function(e){var t=e.label,n=e.initialValueOptions,r=e.value,c=e.fieldId,d=e.innerProps.propertyValidation,f=e.onChange,m=(0,l.Z)(e,A),v=(0,s.useState)((0,i.Z)(n)),h=(0,u.Z)(v,2),b=h[0],D=h[1],y=(0,s.useState)(!1),E=(0,u.Z)(y,2),Z=E[0],g=E[1];return b.length>0?p().createElement(N,{label:t,fieldId:c,propertyValidation:d},p().createElement(O.P,{variant:"typeahead",onToggle:g,isOpen:Z,typeAheadAriaLabel:"Select initial value",onSelect:function(e,t){f(t),g(!1)},placeholderText:"Select initial value",isCreatable:!0,onCreateOption:function(e){return D((function(t){return[].concat((0,i.Z)(t),[e])}))},selections:[r]},b.map((function(e){return p().createElement(S.SelectOption,{key:e,value:e})})))):p().createElement(s.Fragment,null,p().createElement(N,{label:t,fieldId:c,propertyValidation:d},p().createElement(P.oi,(0,o.Z)({id:c,value:void 0===(0,a.Z)(r)?"":r.toString(),onChange:f},m))))};F.propTypes={label:f().oneOfType([f().string]).isRequired,value:f().any,fieldId:f().string.isRequired,innerProps:f().shape({propertyValidation:f().shape({message:f().string})}).isRequired,onChange:f().func,initialValueOptions:f().arrayOf(f().string)},F.defaultProps={onChange:function(){},value:"",initialValueOptions:[]};var G=X(X({},b.oU),{},{input:F}),x=(r={},(0,c.Z)(r,v.Z.TEXT_FIELD,{attributes:[b.uD.GP,b.uD.bw,b.uD.l7,b.uD.Pv,b.uD.l,b.uD.aO,L]}),(0,c.Z)(r,v.Z.CHECKBOX,{attributes:[b.uD.GP,b.uD.Pv,b.uD.JY,b.uD.aO]}),(0,c.Z)(r,v.Z.SELECT,{attributes:[b.uD.JY,b.uD.GP,b.uD.Pv,b.uD.l7,b.uD.bw,b.uD.aO,L]}),(0,c.Z)(r,v.Z.DATE_PICKER,{attributes:[b.uD.GP,b.uD.ol,b.uD.SI,b.uD.fe,b.uD.u5,b.uD.aO,L]}),(0,c.Z)(r,v.Z.PLAIN_TEXT,{attributes:[b.uD.m3,L]}),(0,c.Z)(r,v.Z.RADIO,{attributes:[b.uD.GP,b.uD.Pv,b.uD.JY,b.uD.aO]}),(0,c.Z)(r,v.Z.SWITCH,{attributes:[b.uD.GP,b.uD.l,b.uD.Pv,b.uD.aO]}),(0,c.Z)(r,v.Z.TEXTAREA,{attributes:[b.uD.GP,b.uD.bw,b.uD.l,b.uD.Pv,b.uD.aO,L]}),r);x["select-field"]=x[v.Z.SELECT],x["textarea-field"]=x[v.Z.TEXTAREA];var H={componentMapper:X({},R.De),builderMapper:X({},b.tm),pickerMapper:X(X({},b.ts),{},{"select-field":b.ts[v.Z.SELECT],"textarea-field":b.ts[v.Z.TEXTAREA]}),propertiesMapper:G,componentProperties:x},J=function(e){var t=X({},e);return t.fields=t.fields.map((function(e){var t=e.validate,n=(0,l.Z)(e,j);return t?X(X({},n),{},{validate:t.map((function(e){var t=e.type;return X(X({},(0,l.Z)(e,w)),{},{type:R.NQ[t]||t})}))}):n})),t},Y=function(e){return p().createElement(h.Z,e)},B=function(e){var t=e.closeUrl,n=e.search,r=e.portfolioItem,a=(0,s.useState)(),i=(0,u.Z)(a,2),c=i[0],d=i[1],f=(0,s.useState)(!1),v=(0,u.Z)(f,2),h=v[0],g=v[1],O=(0,s.useState)(),S=(0,u.Z)(O,2),P=S[0],R=S[1],I=(0,s.useState)(),A=(0,u.Z)(I,2),j=A[0],w=A[1],q=(0,s.useState)(0),L=(0,u.Z)(q,2),N=L[0],F=L[1],G=(0,_.useDispatch)(),x=(0,m.useHistory)().push,B=function(){return(0,y.Hx)().get("".concat(E.Vs,"/portfolio_items/").concat(r.id,"/service_plans")).then((function(e){var t=(0,u.Z)(e,1)[0].create_json_schema.schema;return w(e[0]),e[0].imported?(0,y.Hx)().get("".concat(E.Vs,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return R(J(e.create_json_schema.schema)),J(t)})):J(t)})).then((function(e){d(e),g(!1)}))};(0,s.useEffect)((function(){B()}),[]);var K=function(e){return(0,y._m)().patchServicePlanModified("".concat(j.id),{modified:{schema:e}})},Q=function(e){return(0,y._m)().createServicePlan({portfolio_item_id:r.id}).then((function(e){return(0,u.Z)(e,1)[0].id})).then((function(t){return(0,y._m)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},W=function(e){return g(!0),(j.imported?K:Q)(function(e){var t=X({},e);return t.fields=t.fields.map((function(e){var t=e.validate,n=(0,l.Z)(e,M);return t?X(X({},n),{},{validate:t.map((function(e){var t=e.type;return X(X({},(0,l.Z)(e,U)),{},{type:t!==C.Z.MAX_NUMBER_VALUE&&t!==C.Z.MIN_NUMBER_VALUE?"".concat(t,"-validator"):t})}))}):n})),t}(function(e){var t=e.fields.map((function(e){var t=e;return t.isSubstitution&&(t.isDisabled=!0,t.placeholder=e.initialValue),t}));return X(X({},e),{},{fields:t})}(e))).then((function(){return g(!1),G((0,V.wN)({variant:"success",title:"Survey of ".concat(r.name," has been modified."),dismissable:!0})),x({pathname:t,search:n})})).catch((function(e){g(!1),G({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return p().createElement(s.Fragment,null,c?[p().createElement(Y,(0,o.Z)({},H,{key:N,schema:c,disableDrag:!0,disableAdd:!0,schemaTemplate:P,mode:"subset",openEditor:!0}),(function(e){var a=e.getSchema,i=e.isValid,u=(0,l.Z)(e,k);return p().createElement(s.Fragment,null,p().createElement(T.X,{key:"survey-editor-toolbar",handleSaveSurvey:function(){return W(a())},isValid:i,closeUrl:t,search:n,isFetching:h||!c,modified:null==j?void 0:j.modified,handleResetSurvey:function(){return e=j.id,d(void 0),void(0,y._m)().resetServicePlanModified(e).then(B).then((function(){return F((function(e){return e+1})),G((0,V.wN)({variant:"success",title:"Survey of ".concat(r.name," has been restored."),dismissable:!0}))}));var e}}),p().createElement(b.vU,u),";")}))]:p().createElement(s.Fragment,null,p().createElement(T.X,{handleSaveSurvey:W,closeUrl:t,search:n,isFetching:!c||h}),p().createElement(Z.b,null,p().createElement(D.Spinner,null))))};B.propTypes={closeUrl:f().string.isRequired,search:f().string.isRequired,portfolioItem:f().shape({id:f().string.isRequired,name:f().string.isRequired}).isRequired,portfolio:f().object.isRequired};const K=B}}]);
//# sourceMappingURL=../sourcemaps/survey-editor.2d51f0b62b86c881c113.js.map