(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1035:function(e,t,r){"use strict";r.r(t);var a=r(94),n=r.n(a),o=r(106),s=r.n(o),c=r(26),i=r.n(c),l=r(0),u=r.n(l),d=r(27),f=r(102),p=r(83),m=r(332),b=r(66),g=r(67),h=r(970),v=r(592),y=r.n(v),O=r(714),j=r(810),P=r(233),E=r(5),M=r.n(E),w=r(355),F=r(127),k=Object(l.createContext)({selectedOrderProcesses:[]}),S=function(e){var t=e.id,r=Object(l.useContext)(k),a=r.selectedOrderProcesses,n=r.setSelectedOrderProcesses;return u.a.createElement(w.Checkbox,{id:"select-".concat(t),isChecked:a.includes(t),onChange:function(){return n(t)}})};S.propTypes={id:M.a.string.isRequired};var C=function(e){return e.map((function(e){var t=e.id,r=e.name,a=e.description,n=e.created_at;return{id:t,"data-ouia-component-id":"test-".concat(t),cells:[u.a.createElement("div",{key:"".concat(t,"-checkbox"),ouiaId:"".concat(t,"-checkbox")},u.a.createElement(S,{id:t})),u.a.createElement("div",{key:"".concat(t,"-").concat(r),ouiaId:"".concat(t,"-").concat(r)},r),a,u.a.createElement(u.a.Fragment,{key:t},u.a.createElement(F.a,{date:n}))]}}))},D=r(1013),R=r(1018),x=r(1014),B=r(37),N=r(108),V=r(199),T=r(522),_=r(910),I=r(48),A=function(){return(A=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},L=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,c=o.length;s<c;s++,n++)a[n]=o[s];return a},q=function(e){var t=e.columns,r=e.fetchData,a=e.toolbarButtons,n=e.actionResolver,o=e.routes,s=void 0===o?function(){return null}:o,c=e.plural,i=e.pagination,d=void 0===i?B.a:i,f=e.filterValue,p=e.onFilterChange,m=e.isLoading,b=void 0!==m&&m,g=e.renderEmptyState,h=void 0===g?function(){return null}:g,v=e.sortBy,y=e.onSort,O=e.activeFiltersConfig,j=e.filterConfig,P=void 0===j?[]:j,E=e.rows,M=e.ouiaId,w=Object(V.a)(),F={itemCount:d.count,page:Object(B.b)(d.limit,d.offset),perPage:d.limit,onSetPage:function(e,t){return r(A(A({},d),{offset:Object(B.c)(t,d.limit)}))},onPerPageSelect:function(e,t){return r(A(A({},d),{limit:t}))},isDisabled:b};return u.a.createElement(T.a,{type:"content","page-type":"tab-"+c,id:"tab-"+c},s(),u.a.createElement(_.a,A({className:"pf-u-p-lg",pagination:F},a&&{actionsConfig:{dropdownProps:{position:"right"},actions:[a()]}},{filterConfig:{items:L([{label:w.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{id:"filter-by-name",placeholder:w.formatMessage(I.a.orderProcessesFilter),"aria-label":w.formatMessage(I.a.orderProcessesFilter),onChange:function(e,t){return p(t)},value:f}}],P)},activeFiltersConfig:O})),b&&u.a.createElement(N.e,null),b||0!==E.length?u.a.createElement(l.Fragment,null,!b&&u.a.createElement(D.a,{"aria-label":c+" table",rows:E,cells:t,actionResolver:n,className:"pf-u-pt-0",sortBy:v,onSort:y,ouiaId:M},u.a.createElement(R.a,null),u.a.createElement(x.a,null)),d.count>0&&u.a.createElement(_.a,{className:"pf-u-pl-lg pf-u-pr-lg",pagination:A(A({},F),{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):h())},H=r(610),z=r(144),J=r(736),U=r(737),G=r(139),K=r(75),Q=r(738),W=r(797),X=r(955),Y=function(e){var t=e.title,r=e.Icon,a=e.description,n=e.PrimaryAction,o=e.renderDescription;return u.a.createElement(X.a,{centered:!0,"aria-label":"No records"},u.a.createElement(J.a,{className:"pf-u-ml-auto pf-u-mr-auto"},u.a.createElement(U.a,{icon:r}),u.a.createElement(G.a,null,u.a.createElement(K.a,{component:K.b.h1},t)),u.a.createElement(Q.a,null,a,o&&o()),u.a.createElement(W.a,null,n&&u.a.createElement(n,null))))};Y.propTypes={title:M.a.string.isRequired,Icon:M.a.any.isRequired,description:M.a.string.isRequired,PrimaryAction:M.a.any,renderDescription:M.a.func};var Z=Y,$=r(567),ee=r(126),te=r(221),re=r(12),ae=r(548),ne=r(1017),oe=r(219),se=r(107),ce=r(557),ie=function(e){var t,r=Object(d.e)((function(e){return e.orderProcessReducer.orderProcesses}),d.c);return null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.find((function(t){return t.id===e}))},le=r(63),ue=function(){return(ue=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},de=function(e,t){var r=t.type,a=t.initialValues,n=t.schema;switch(r){case"loaded":return ue(ue({},e),{initialValues:a,schema:n,isLoading:!1});default:return e}},fe=function(e){var t=e.edit,r=void 0!==t&&t,a=Object(d.d)(),n=Object(se.a)(["order_process"])[0].order_process,o=Object(d.e)((function(e){var t=e.orderProcessReducer.orderProcesses.data;return r?t.find((function(e){return e.id===n})):{}})),s=Object(ce.a)({keepHash:!0}).push,c=Object(V.a)(),i=ie(n),f=Object(l.useReducer)(de,{isLoading:!0}),p=f[0].initialValues,m=f[1];Object(l.useEffect)((function(){!i&&n?Object(le.b)(n).then((function(e){return m({type:"loaded",initialValues:ue(ue({},e),{order_process_type:e.return_portfolio_item_id?"return":"itsm"}),schema:Object(ne.a)(c,e.id||"")})})):void 0!==i&&m({type:"loaded",initialValues:ue(ue({},i),{order_process_type:i.return_portfolio_item_id?"return":"itsm"}),schema:Object(ne.a)(c,i.id)})}),[]);var b=function(){return s(re.n)};return r&&!o?null:u.a.createElement(ae.a,{isOpen:!0,onClose:b,title:c.formatMessage(r?I.a.updateOrderProcess:I.a.createOrderProcess),variant:"small"},u.a.createElement(oe.c,{onSubmit:function(e){var t=r?function(){return Object(P.h)(n,o,ue({name:"",description:""},e),c)}:function(){return Object(P.a)(e,c)};return b(),a(t()).then((function(){return a(Object(P.c)())}))},onCancel:b,schema:Object(ne.a)(c,n),initialValues:p,templateProps:{submitLabel:r?c.formatMessage(ee.a.save):c.formatMessage(ee.a.create),disableSubmit:["validating","pristine"]}}))},pe=r(224),me=r(958),be=r(180),ge=r(354),he=r(969),ve=r.n(he),ye=r(146),Oe=function(e){var t=e.ids,r=void 0===t?[]:t,a=e.fetchData,o=e.resetSelectedOrderProcesses,s=Object(d.d)(),c=Object(l.useState)(),i=n()(c,2),f=i[0],p=i[1],h=Object(l.useState)(!1),v=n()(h,2),y=v[0],O=v[1],j=Object(ce.a)({keepHash:!0}).push,E=Object(se.a)(["order_process"]),M=n()(E,1)[0].order_process||1===r.length&&r[0],w=Object(V.a)(),F=ie(M);if(Object(l.useEffect)((function(){M&&!F&&s(Object(P.b)(M)).then((function(e){var t=e.value;return p(t)})).catch((function(){return j(re.n)}))}),[]),!M&&0===r.length)return null;var k=function(){return j(re.n)},S=u.a.createElement("b",{key:"remove-key"},M?f&&f.name||F&&F.name:u.a.createElement(u.a.Fragment,null,r.length," ",w.formatMessage(I.a.orderProcesses))),C=M&&!F&&!f;return u.a.createElement(me.Modal,{isOpen:!0,variant:"small","aria-label":w.formatMessage(I.a.removeProcessAriaLabel,{count:M?1:r.length}),header:u.a.createElement(ge.Title,{size:"2xl",headingLevel:"h1"},u.a.createElement(ve.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),w.formatMessage(I.a.removeProcessTitle,{count:M?1:r.length})),onClose:k,actions:[u.a.createElement(m.Button,{id:"submit-remove-order-process",ouiaId:"submit-remove-order-process",key:"submit",variant:"danger",type:"button",isDisabled:y,onClick:function(){return O(!0),s(M?Object(P.d)(M,w):Object(P.e)(r,w)).catch((function(){return O(!1)})).then((function(){return j(re.n)})).then((function(){return o()})).then((function(){return a()}))}},y?u.a.createElement(u.a.Fragment,null,u.a.createElement(be.Spinner,{size:"sm",className:"pf-u-mr-md"}),w.formatMessage(ye.a.deleting)):w.formatMessage(ye.a.delete)),u.a.createElement(m.Button,{id:"cancel-remove-order-process",ouiaId:"cancel-remove-order-process",key:"cancel",variant:"link",type:"button",isDisabled:y,onClick:k},w.formatMessage(ee.a.cancel))]},u.a.createElement(g.TextContent,null,u.a.createElement(b.Text,{component:b.TextVariants.p},C?u.a.createElement(N.c,null):w.formatMessage(I.a.removeProcessDescription,{name:S}))))};Oe.propTypes={fetchData:M.a.func.isRequired,ids:M.a.array,resetSelectedOrderProcesses:M.a.func.isRequired};var je=Oe;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Me=function(e,t,r){return[{title:u.a.createElement(w.Checkbox,{onChange:r,isChecked:t,id:"select-all"}),transforms:[Object(O.a)(1)]},{title:e.formatMessage(ee.a.name),transforms:[j.a]},{title:e.formatMessage(ee.a.description),transforms:[j.a]},{title:e.formatMessage(ee.a.created),transforms:[j.a]}]},we=Object(z.a)((function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.a,n=arguments.length>4?arguments[4]:void 0;return r(!0),t(Object(P.c)(Ee(Ee({filterValue:e},a),{},{sortBy:n}))).then((function(){return r(!1)}))}),1e3),Fe=function(e,t){return e?[{category:t.formatMessage(ee.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},ke={filter:"",isFetching:!0,isFiltering:!1,selectedOrderProcesses:[],allSelected:!1,rows:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},Ce=function(e,t,r){return r.indexOf(e)===t},De=function(e,t){switch(t.type){case"setRows":return Ee(Ee({},e),{},{rows:t.payload,allSelected:Se(t.payload,e.selectedOrderProcesses)});case"setFetching":return Ee(Ee({},e),{},{isFetching:t.payload});case"setFilterValue":return Ee(Ee({},e),{},{filterValue:t.payload});case"select":return Ee(Ee({},e),{},{allSelected:!1,selectedOrderProcesses:e.selectedOrderProcesses.includes(t.payload)?e.selectedOrderProcesses.filter((function(e){return e!==t.payload})):[].concat(s()(e.selectedOrderProcesses),[t.payload])});case"selectAll":return Ee(Ee({},e),{},{selectedOrderProcesses:[].concat(s()(e.selectedOrderProcesses),s()(t.payload)).filter(Ce),allSelected:!0});case"unselectAll":return Ee(Ee({},e),{},{selectedOrderProcesses:e.selectedOrderProcesses.filter((function(e){return!t.payload.includes(e)})),allSelected:!1});case"resetSelected":return Ee(Ee({},e),{},{selectedOrderProceses:[],allSelected:!1});case"setFilteringFlag":return Ee(Ee({},e),{},{isFiltering:t.payload});default:return e}},Re={1:"name",2:"description",3:"created_at"};t.default=function(){var e,t=Object(pe.a)(),r=Object(d.e)((function(e){var t=e.orderProcessReducer;return{orderProcesses:t.orderProcesses,sortBy:t.sortBy}}),d.c),a=r.orderProcesses,o=a.data,s=a.meta,c=r.sortBy,i=Object(l.useReducer)(De,Ee(Ee({},ke),{},{filterValue:(null==t||null===(e=t.orderProcesses)||void 0===e?void 0:e.filter)||ke.filterValue})),v=n()(i,2),O=v[0],j=O.filterValue,E=O.isFetching,M=O.isFiltering,w=O.selectedOrderProcesses,S=O.allSelected,D=O.rows,R=v[1],x=Object(d.d)(),N=Object(V.a)(),T=Object(ce.a)({keepHash:!0}),_=function(e,t){return R({type:"setFetching",payload:!0}),x(Object(P.c)(e,t)).then((function(){return R({type:"setFetching",payload:!1})})).catch((function(){return R({type:"setFetching",payload:!1})}))};Object(l.useEffect)((function(){insights.chrome.appNavClick({id:"order-processes",secondaryNav:!0}),_((null==t?void 0:t.orderProcesses)?Ee(Ee({},t.orderProcesses),{},{filterValue:j}):B.a,c),Object(F.e)()}),[]),Object(l.useEffect)((function(){R({type:"setRows",payload:C(o)})}),[o]);var A=function(e){R({type:"setFilterValue",payload:e}),we(e,x,(function(e){return R({type:"setFilteringFlag",payload:e})}),Ee(Ee({},s),{},{offset:0}))},L=w.length>0;return u.a.createElement(l.Fragment,null,u.a.createElement(H.b,null,u.a.createElement(g.TextContent,{className:"pf-u-ml-md"},u.a.createElement(b.Text,{component:b.TextVariants.h1},N.formatMessage(I.a.title)))),u.a.createElement(k.Provider,{value:{selectedOrderProcesses:w,setSelectedOrderProcesses:function(e){return R({type:"select",payload:e})}}},u.a.createElement(q,{ouiaId:"OrderProcessesTable",sortBy:c,onSort:function(e,t,r,a){var n=a.property;return x(Object(P.g)({index:t,direction:r,property:Re[t]||n})),_(Ee(Ee({},s),{},{filterValue:j}),{index:t,direction:r,property:Re[t]||n})},rows:D,columns:Me(N,S,(function(){return R(S?{type:"unselectAll",payload:o.map((function(e){return e.id}))}:{type:"selectAll",payload:o.map((function(e){return e.id}))})})),routes:function(){return u.a.createElement(l.Fragment,null,u.a.createElement(f.b,{exact:!0,path:re.a},u.a.createElement(fe,{postMethod:_})),u.a.createElement(f.b,{exact:!0,path:re.B},u.a.createElement(je,{ids:w,fetchData:_,resetSelectedOrderProcesses:function(){return R({type:"resetSelected"})}})),u.a.createElement(f.b,{exact:!0,path:re.E},u.a.createElement(fe,{edit:!0})))},fetchData:_,titlePlural:N.formatMessage(I.a.title),titleSingular:N.formatMessage(I.a.orderProcess),pagination:s,filterValue:j,onFilterChange:A,isLoading:E||M,toolbarButtons:function(){return u.a.createElement(te.b,{className:"pf-u-pl-lg top-toolbar"},u.a.createElement(h.ToolbarItem,null,u.a.createElement(p.a,{id:"add-order-process-link",to:{pathname:re.a}},u.a.createElement(m.Button,{variant:"primary",ouiaid:"create-order-process","aria-label":N.formatMessage(ee.a.create)},N.formatMessage(ee.a.create)))),u.a.createElement(h.ToolbarItem,null,u.a.createElement(p.a,{id:"remove-multiple-order-processes'",className:L?"":"disabled-link",to:{pathname:re.B}},u.a.createElement(m.Button,{variant:"secondary",ouiaid:"delete-order-process",isDisabled:!L,"aria-label":N.formatMessage(I.a.deleteOrderProcess)},N.formatMessage(ye.a.delete)))))},actionResolver:function(){return[{title:N.formatMessage(ye.a.edit),onClick:function(e,t,r){return T.push({pathname:re.E,search:"?order_process=".concat(r.id)})}},{title:N.formatMessage(ye.a.delete),onClick:function(e,t,r){return T.push({pathname:re.B,search:"?order_process=".concat(r.id)})}}]},renderEmptyState:function(){return u.a.createElement(Z,{title:""===j?N.formatMessage(I.a.noOrderProcesses):N.formatMessage($.a.noResultsFound),Icon:y.a,PrimaryAction:function(){return""!==j?u.a.createElement(m.Button,{ouiaId:"clear-filter",onClick:function(){return A("")},variant:"link"},N.formatMessage($.a.clearFilters)):null},description:""===j?N.formatMessage(I.a.noOrderProcesses):N.formatMessage($.a.noResultsDescription)})},activeFiltersConfig:{filters:Fe(j,N),onDelete:function(){return A("")}}})))}},557:function(e,t,r){"use strict";var a=r(102),n=function(){return(n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,o=t.keepHash,s=Object(a.g)();return n(n({},s),{push:function(e){var t=e;return o&&s.location.hash.length>0&&(t="object"==typeof t?n(n({},t),{hash:s.location.hash}):""+t+s.location.hash),r?s.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?n(n({},e),{search:void 0}):e}(t)):s.push(t)}})}},558:function(e,t,r){"use strict";var a,n,o=r(0),s=r.n(o),c=r(83),i=r(102),l=r(31),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d=function(){return(d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},p=Object(l.b)((function(e){e.isDisabled;var t=f(e,["isDisabled"]);return s.a.createElement(c.a,d({},t))}))(a||(a=u(["\n  pointer-events: ",";\n"],["\n  pointer-events: ",";\n"])),(function(e){return e.isDisabled?"none":"initial"})),m=Object(l.b)((function(e){e.isDisabled;var t=f(e,["isDisabled"]);return s.a.createElement(c.b,d({},t))}))(n||(n=u(["\n  pointer-events: ",";\n"],["\n  pointer-events: ",";\n"])),(function(e){return e.isDisabled?"none":"initial"})),b=function(e,t,r){var a=Object.entries(t).map((function(e){return e[0]+"="+e[1]})).join("&");return r?e+(a.length>0?"&"+a:""):a.length>0?"?"+a:""};t.a=function(e){var t=e.pathname,r=e.searchParams,a=void 0===r?{}:r,n=e.nav,o=void 0!==n&&n,c=e.preserveSearch,l=void 0!==c&&c,u=e.preserveHash,g=void 0!==u&&u,h=(e.showDivider,f(e,["pathname","searchParams","nav","preserveSearch","preserveHash","showDivider"])),v=Object(i.h)(),y=v.search,O=v.hash,j=o?m:p,P={pathname:t,search:b(y,a,l),hash:g?O:void 0};return s.a.createElement(j,d({},h,{to:P}))}},567:function(e,t,r){"use strict";var a=r(30),n=Object(a.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=n}}]);
//# sourceMappingURL=../sourcemaps/order-processes~5a11b65b.js.map