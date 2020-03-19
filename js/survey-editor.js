(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{664:function(e,t,i){"use strict";i.r(t);var r,n=i(22),o=i.n(n),a=i(26),s=i.n(a),c=i(40),p=i.n(c),d=i(1),l=i.n(d),u=i(0),E=i.n(u),f=i(2),m=i.n(f),P=i(25),L=i(385),I=i(661),_=i.n(I),S=i(662),D=i(92),T=i(62),b=i(11),h=i(55),O=i(553),A=i(34),v=i(44),R=(r={},l()(r,L.componentTypes.TEXT_FIELD,{attributes:[S.fieldProperties.LABEL,S.fieldProperties.HELPER_TEXT,S.fieldProperties.PLACEHOLDER,S.fieldProperties.IS_DISABLED,S.fieldProperties.IS_READ_ONLY,S.fieldProperties.HIDE_FIELD]}),l()(r,L.componentTypes.CHECKBOX,{attributes:[S.fieldProperties.LABEL,S.fieldProperties.IS_DISABLED,S.fieldProperties.OPTIONS,S.fieldProperties.HIDE_FIELD]}),l()(r,L.componentTypes.SELECT,{attributes:[S.fieldProperties.OPTIONS,S.fieldProperties.LABEL,S.fieldProperties.IS_DISABLED,S.fieldProperties.PLACEHOLDER,S.fieldProperties.HELPER_TEXT,S.fieldProperties.HIDE_FIELD]}),l()(r,L.componentTypes.DATE_PICKER,{attributes:[S.fieldProperties.LABEL,S.fieldProperties.TODAY_BUTTON_LABEL,S.fieldProperties.IS_CLEARABLE,S.fieldProperties.CLOSE_ON_DAY_SELECT,S.fieldProperties.SHOW_TODAY_BUTTON,S.fieldProperties.HIDE_FIELD]}),l()(r,L.componentTypes.PLAIN_TEXT,{attributes:[S.fieldProperties.MULTI_LINE_LABEL]}),l()(r,L.componentTypes.RADIO,{attributes:[S.fieldProperties.LABEL,S.fieldProperties.IS_DISABLED,S.fieldProperties.OPTIONS,S.fieldProperties.HIDE_FIELD]}),l()(r,L.componentTypes.SWITCH,{attributes:[S.fieldProperties.LABEL,S.fieldProperties.IS_READ_ONLY,S.fieldProperties.IS_DISABLED,S.fieldProperties.HIDE_FIELD]}),l()(r,L.componentTypes.TEXTAREA,{attributes:[S.fieldProperties.LABEL,S.fieldProperties.HELPER_TEXT,S.fieldProperties.IS_READ_ONLY,S.fieldProperties.IS_DISABLED,S.fieldProperties.HIDE_FIELD]}),r),B={componentMapper:S.builderMapper,pickerMapper:S.pickerMapper,propertiesMapper:S.propertiesMapper,componentProperties:R},y=function(e){return E.a.createElement(_.a,e)},j=function(e){var t=e.closeUrl,i=e.search,r=e.portfolioItem,n=e.uploadIcon,a=Object(u.useState)(),c=p()(a,2),d=c[0],l=c[1],f=Object(u.useState)(!1),m=p()(f,2),L=m[0],I=m[1],_=Object(u.useState)(),R=p()(_,2),j=R[0],g=R[1],H=Object(u.useState)(),F=p()(H,2),N=F[0],C=F[1],M=Object(A.useDispatch)(),U=Object(P.g)().push,q=function(){return Object(T.a)().get("".concat(b.c,"/portfolio_items/").concat(r.id,"/service_plans")).then((function(e){var t=p()(e,1)[0].create_json_schema.schema;return C(e[0]),e[0].imported?Object(T.a)().get("".concat(b.c,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return g(e.create_json_schema.schema),t})):t})).then((function(e){l(e),I(!1)}))};Object(u.useEffect)((function(){q()}),[]);var X=function(e){return Object(T.i)().patchServicePlanModified("".concat(N.id),{modified:{schema:e}})},Y=function(e){return Object(T.i)().createServicePlan({portfolio_item_id:r.id}).then((function(e){return p()(e,1)[0].id})).then((function(t){return Object(T.i)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},w=function(e){return I(!0),(N.imported?X:Y)(e).then((function(){return I(!1),M(Object(v.addNotification)({variant:"success",title:"Survey of ".concat(r.name," has been modified."),dismissable:!0})),U({pathname:t,search:i})})).catch((function(e){I(!1),M({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return E.a.createElement(u.Fragment,null,d?E.a.createElement(y,o()({},B,{schema:d,disableDrag:!0,disableAdd:!0,schemaTemplate:j,mode:"subset"}),(function(e){var o=e.getSchema,a=e.isValid,c=s()(e,["getSchema","isValid"]);return E.a.createElement(u.Fragment,null,E.a.createElement(O.b,{key:"survey-editor-toolbar",uploadIcon:n,product:r,handleSaveSurvey:function(){return w(o())},isValid:a,closeUrl:t,search:i,isFetching:L||!d,modified:N.modified,handleResetSurvey:function(){return e=N.id,l(void 0),void Object(T.i)().resetServicePlanModified(e).then(q).then((function(){return M(Object(v.addNotification)({variant:"success",title:"Survey of ".concat(r.name," has been restored."),dismissable:!0}))}));var e}}),E.a.createElement(S.BuilderTemplate,c),";")})):E.a.createElement(u.Fragment,null,E.a.createElement(O.b,{uploadIcon:n,product:r,handleSaveSurvey:w,closeUrl:t,search:i,isFetching:!d||L}),E.a.createElement(h.Bullseye,null,E.a.createElement(D.Spinner,null))))};j.propTypes={closeUrl:m.a.string.isRequired,search:m.a.string.isRequired,uploadIcon:m.a.func.isRequired,portfolioItem:m.a.shape({id:m.a.string.isRequired,name:m.a.string.isRequired}).isRequired,portfolio:m.a.object.isRequired},t.default=j}}]);
//# sourceMappingURL=../sourcemaps/survey-editor.js.map