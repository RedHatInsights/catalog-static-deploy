(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{625:function(e,t,r){"use strict";var a=r(97),n=function(){return(n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};t.a=function(e){var t=void 0===e?{}:e,r=t.removeSearch,s=t.keepHash,o=Object(a.g)();return n(n({},o),{push:function(e){var t=e;return s&&o.location.hash.length>0&&(t="object"==typeof t?n(n({},t),{hash:o.location.hash}):""+t+o.location.hash),r?o.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"==typeof e?n(n({},e),{search:void 0}):e}(t)):o.push(t)}})}},629:function(e,t,r){"use strict";var a=r(22),n=Object(a.b)({noItems:{id:"common.filtering.noItems",defaultMessage:"No items found"},filterByProduct:{id:"common.filtering.filterByProduct",defaultMessage:"Filter by product"},noResults:{id:"common.filtering.noResults",defaultMessage:"No results found"},noResultsDescription:{id:"common.filtering.noResultsDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},clearFilters:{id:"common.filtering.clear-filters",defaultMessage:"Clear all filters"},noProducts:{id:"common.filtering.no-products",defaultMessage:"No products yet"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"}});t.a=n},904:function(e,t,r){"use strict";r.r(t);var a=r(117),n=r.n(a),s=r(757),o=r.n(s),c=r(165),l=r.n(c),i=r(0),u=r.n(i),d=r(21),f=r(97),m=r(79),p=r(163),g=r(58),b=r(59),h=r(641),y=r(627),O=r.n(y),v=r(801),P=r(799),E=r(228),j=r(16),M=r.n(j),F=r(342),S=r(119),C=Object(i.createContext)({selectedOrderProcesses:[]}),k=function(e){var t=e.id,r=Object(i.useContext)(C),a=r.selectedOrderProcesses,n=r.setSelectedOrderProcesses;return u.a.createElement(F.Checkbox,{id:"select-".concat(t),isChecked:a.includes(t),onChange:function(){return n(t)}})};k.propTypes={id:M.a.string.isRequired};var w=function(e){return e.map((function(e){var t=e.id,r=e.name,a=e.description,n=e.created_at;return{id:t,cells:[u.a.createElement(u.a.Fragment,{key:"".concat(t,"-checkbox")},u.a.createElement(k,{id:t})),r,a,u.a.createElement(u.a.Fragment,{key:t},u.a.createElement(S.a,{date:n}))]}}))},R=r(648),D=r(708),N=r(709),T=r(32),V=r(99),x=r(199),B=r(221),A=r(723),q=r(44),I=function(){return(I=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},L=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),n=0;for(t=0;t<r;t++)for(var s=arguments[t],o=0,c=s.length;o<c;o++,n++)a[n]=s[o];return a},_=function(e){var t=e.columns,r=e.fetchData,a=e.toolbarButtons,n=e.actionResolver,s=e.routes,o=void 0===s?function(){return null}:s,c=e.plural,l=e.pagination,d=void 0===l?T.a:l,f=e.filterValue,m=e.onFilterChange,p=e.isLoading,g=void 0!==p&&p,b=e.renderEmptyState,h=void 0===b?function(){return null}:b,y=e.sortBy,O=e.onSort,v=e.activeFiltersConfig,P=e.filterConfig,E=void 0===P?[]:P,j=e.rows,M=Object(x.a)(),F={itemCount:d.count,page:Object(T.b)(d.limit,d.offset),perPage:d.limit,onSetPage:function(e,t){return r(I(I({},d),{offset:Object(T.c)(t,d.limit)}))},onPerPageSelect:function(e,t){return r(I(I({},d),{limit:t}))},isDisabled:g};return u.a.createElement(B.Section,{type:"content","page-type":"tab-"+c,id:"tab-"+c},o(),u.a.createElement(A.PrimaryToolbar,I({className:"pf-u-p-lg",pagination:F},a&&{actionsConfig:{dropdownProps:{position:"right"},actions:[a()]}},{filterConfig:{items:L([{label:M.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{id:"filter-by-name",placeholder:M.formatMessage(q.a.orderProcessesFilter),"aria-label":M.formatMessage(q.a.orderProcessesFilter),onChange:function(e,t){return m(t)},value:f}}],E)},activeFiltersConfig:v})),g&&u.a.createElement(V.e,null),g||0!==j.length?u.a.createElement(i.Fragment,null,!g&&u.a.createElement(R.c,{"aria-label":c+" table",rows:j,cells:t,actionResolver:n,className:"pf-u-pt-0",sortBy:y,onSort:O},u.a.createElement(D.a,null),u.a.createElement(N.a,null)),d.count>0&&u.a.createElement(A.PrimaryToolbar,{className:"pf-u-pl-lg pf-u-pr-lg",pagination:I(I({},F),{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):h())},z=r(660),H=r(132),J=r(762),U=r(763),G=r(335),K=r(161),Q=r(764),W=r(776),X=r(784),Y=function(e){var t=e.title,r=e.Icon,a=e.description,n=e.PrimaryAction,s=e.renderDescription;return u.a.createElement(X.EmptyTable,{centered:!0,"aria-label":"No records"},u.a.createElement(J.a,{className:"pf-u-ml-auto pf-u-mr-auto"},u.a.createElement(U.a,{icon:r}),u.a.createElement(G.a,null,u.a.createElement(K.a,{component:K.b.h1},t)),u.a.createElement(Q.a,null,a,s&&s()),u.a.createElement(W.a,null,n&&u.a.createElement(n,null))))};Y.propTypes={title:M.a.string.isRequired,Icon:M.a.any.isRequired,description:M.a.string.isRequired,PrimaryAction:M.a.any,renderDescription:M.a.func};var Z=Y,$=r(629),ee=r(118),te=r(220),re=r(9),ae=r(620),ne=r(889),se=r(219),oe=r(98),ce=r(625),le=function(e){var t,r=Object(d.useSelector)((function(e){return e.orderProcessReducer.orderProcesses}),d.shallowEqual);return null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.find((function(t){return t.id===e}))},ie=function(){return(ie=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},ue=function(e,t){var r=t.type,a=t.initialValues,n=t.schema;switch(r){case"loaded":return ie(ie({},e),{initialValues:a,schema:n,isLoading:!1});default:return e}},de=function(e){var t=e.edit,r=void 0!==t&&t,a=Object(d.useDispatch)(),n=Object(oe.a)(["order_process"])[0].order_process,s=Object(d.useSelector)((function(e){var t=e.orderProcessReducer.orderProcesses.data;return r?t.find((function(e){return e.id===n})):{}})),o=Object(ce.a)({keepHash:!0}).push,c=Object(x.a)(),l=le(n),f=Object(i.useReducer)(ue,{isLoading:!0}),m=f[0].initialValues,p=f[1];Object(i.useEffect)((function(){l||void 0===l?void 0!==l&&p({type:"loaded",initialValues:l,schema:Object(ne.a)(c,l.id)}):Object(E.b)(n).then((function(e){return p({type:"loaded",initialValues:e,schema:Object(ne.a)(c,e.id)})}))}),[]);var g=function(){return o(re.n)};return r&&!s?null:u.a.createElement(ae.a,{isOpen:!0,onClose:g,title:c.formatMessage(r?q.a.updateOrderProcess:q.a.createOrderProcess),variant:"small"},u.a.createElement(se.c,{initialValues:m,onSubmit:function(e){var t=r?function(){return Object(E.h)(n,ie({name:"",description:""},e),c)}:function(){return Object(E.a)(e,c)};return g(),a(t()).then((function(){return a(Object(E.c)())}))},onCancel:g,schema:Object(ne.a)(c,n),templateProps:{submitLabel:r?c.formatMessage(ee.a.save):c.formatMessage(ee.a.create),disableSubmit:["validating","pristine"]}}))},fe=r(224),me=r(859),pe=r(168),ge=r(367),be=r(371),he=r.n(be),ye=r(135),Oe=function(e){var t=e.ids,r=void 0===t?[]:t,a=e.fetchData,s=e.resetSelectedOrderProcesses,o=Object(d.useDispatch)(),c=Object(i.useState)(),l=n()(c,2),f=l[0],m=l[1],h=Object(i.useState)(!1),y=n()(h,2),O=y[0],v=y[1],P=Object(ce.a)({keepHash:!0}).push,j=Object(oe.a)(["order_process"]),M=n()(j,1)[0].order_process||1===r.length&&r[0],F=Object(x.a)(),S=le(M);if(Object(i.useEffect)((function(){M&&!S&&o(Object(E.b)(M)).then((function(e){var t=e.value;return m(t)})).catch((function(){return P(re.n)}))}),[]),!M&&0===r.length)return null;var C=function(){return P(re.n)},k=u.a.createElement("b",{key:"remove-key"},M?f&&f.name||S&&S.name:u.a.createElement(u.a.Fragment,null,r.length," ",F.formatMessage(q.a.orderProcesses))),w=M&&!S&&!f;return u.a.createElement(me.Modal,{isOpen:!0,variant:"small","aria-label":F.formatMessage(q.a.removeProcessAriaLabel,{count:M?1:r.length}),header:u.a.createElement(ge.Title,{size:"2xl",headingLevel:"h1"},u.a.createElement(he.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),F.formatMessage(q.a.removeProcessTitle,{count:M?1:r.length})),onClose:C,actions:[u.a.createElement(p.Button,{id:"submit-remove-order-process",key:"submit",variant:"danger",type:"button",isDisabled:O,onClick:function(){return v(!0),o(M?Object(E.d)(M,F):Object(E.e)(r,F)).catch((function(){return v(!1)})).then((function(){return P(re.n)})).then((function(){return s()})).then((function(){return a()}))}},O?u.a.createElement(u.a.Fragment,null,u.a.createElement(pe.Spinner,{size:"sm",className:"pf-u-mr-md"}),F.formatMessage(ye.a.deleting)):F.formatMessage(ye.a.delete)),u.a.createElement(p.Button,{id:"cancel-remove-order-process",key:"cancel",variant:"link",type:"button",isDisabled:O,onClick:C},F.formatMessage(ee.a.cancel))]},u.a.createElement(b.TextContent,null,u.a.createElement(g.Text,{component:g.TextVariants.p},w?u.a.createElement(V.c,null):F.formatMessage(q.a.removeProcessDescription,{name:k}))))};Oe.propTypes={fetchData:M.a.func.isRequired,ids:M.a.array,resetSelectedOrderProcesses:M.a.func.isRequired};var ve=Oe;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=function(e,t,r){return[{title:u.a.createElement(F.Checkbox,{onChange:r,isChecked:t,id:"select-all"}),transforms:[Object(v.a)(1)]},{title:e.formatMessage(ee.a.name),transforms:[P.a]},{title:e.formatMessage(ee.a.description),transforms:[P.a]},{title:e.formatMessage(ee.a.created),transforms:[P.a]}]},Me=Object(H.a)((function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T.a;return r(!0),t(Object(E.c)(Ee({filterValue:e},a))).then((function(){return r(!1)}))}),1e3),Fe=function(e,t){return e?[{category:t.formatMessage(ee.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},Se={filter:"",isFetching:!0,isFiltering:!1,selectedOrderProcesses:[],allSelected:!1,rows:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},ke=function(e,t,r){return r.indexOf(e)===t},we=function(e,t){switch(t.type){case"setRows":return Ee(Ee({},e),{},{rows:t.payload,allSelected:Ce(t.payload,e.selectedOrderProcesses)});case"setFetching":return Ee(Ee({},e),{},{isFetching:t.payload});case"setFilterValue":return Ee(Ee({},e),{},{filterValue:t.payload});case"select":return Ee(Ee({},e),{},{allSelected:!1,selectedOrderProcesses:e.selectedOrderProcesses.includes(t.payload)?e.selectedOrderProcesses.filter((function(e){return e!==t.payload})):[].concat(o()(e.selectedOrderProcesses),[t.payload])});case"selectAll":return Ee(Ee({},e),{},{selectedOrderProcesses:[].concat(o()(e.selectedOrderProcesses),o()(t.payload)).filter(ke),allSelected:!0});case"unselectAll":return Ee(Ee({},e),{},{selectedOrderProcesses:e.selectedOrderProcesses.filter((function(e){return!t.payload.includes(e)})),allSelected:!1});case"resetSelected":return Ee(Ee({},e),{},{selectedOrderProceses:[],allSelected:!1});case"setFilteringFlag":return Ee(Ee({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e,t=Object(fe.a)(),r=Object(d.useSelector)((function(e){var t=e.orderProcessReducer;return{orderProcesses:t.orderProcesses,sortBy:t.sortBy}}),d.shallowEqual),a=r.orderProcesses,s=a.data,o=a.meta,c=r.sortBy,l=Object(i.useReducer)(we,Ee(Ee({},Se),{},{filterValue:(null==t||null===(e=t.orderProcesses)||void 0===e?void 0:e.filter)||Se.filterValue})),y=n()(l,2),v=y[0],P=v.filterValue,j=v.isFetching,M=v.isFiltering,F=v.selectedOrderProcesses,k=v.allSelected,R=v.rows,D=y[1],N=Object(d.useDispatch)(),V=Object(x.a)(),B=Object(ce.a)({keepHash:!0}),A=function(e){return D({type:"setFetching",payload:!0}),N(Object(E.c)(e)).then((function(){return D({type:"setFetching",payload:!1})})).catch((function(){return D({type:"setFetching",payload:!1})}))};Object(i.useEffect)((function(){insights.chrome.appNavClick({id:"order-processes",secondaryNav:!0}),A((null==t?void 0:t.orderProcesses)?Ee(Ee({},t.orderProcesses),{},{filterValue:P}):T.a),Object(S.d)()}),[]),Object(i.useEffect)((function(){D({type:"setRows",payload:w(s)})}),[s]);var I=function(e){D({type:"setFilterValue",payload:e}),Me(e,N,(function(e){return D({type:"setFilteringFlag",payload:e})}),Ee(Ee({},o),{},{offset:0}))},L=F.length>0;return u.a.createElement(i.Fragment,null,u.a.createElement(z.b,null,u.a.createElement(b.TextContent,{className:"pf-u-ml-md"},u.a.createElement(g.Text,{component:g.TextVariants.h1},V.formatMessage(q.a.title)))),u.a.createElement(C.Provider,{value:{selectedOrderProcesses:F,setSelectedOrderProcesses:function(e){return D({type:"select",payload:e})}}},u.a.createElement(_,{sortBy:c,onSort:function(e,t,r,a){var n=a.property;return N(Object(E.g)({index:t,direction:r,property:n})),A(Ee(Ee({},o),{},{filterValue:P}))},rows:R,columns:je(V,k,(function(){return D(k?{type:"unselectAll",payload:s.map((function(e){return e.id}))}:{type:"selectAll",payload:s.map((function(e){return e.id}))})})),routes:function(){return u.a.createElement(i.Fragment,null,u.a.createElement(f.b,{exact:!0,path:re.a},u.a.createElement(de,{postMethod:A})),u.a.createElement(f.b,{exact:!0,path:re.z},u.a.createElement(ve,{ids:F,fetchData:A,resetSelectedOrderProcesses:function(){return D({type:"resetSelected"})}})),u.a.createElement(f.b,{exact:!0,path:re.C},u.a.createElement(de,{edit:!0})))},fetchData:A,titlePlural:V.formatMessage(q.a.title),titleSingular:V.formatMessage(q.a.orderProcess),pagination:o,filterValue:P,onFilterChange:I,isLoading:j||M,toolbarButtons:function(){return u.a.createElement(te.b,{className:"pf-u-pl-lg top-toolbar"},u.a.createElement(h.ToolbarItem,null,u.a.createElement(m.a,{id:"add-order-process-link",to:{pathname:re.a}},u.a.createElement(p.Button,{variant:"primary","aria-label":V.formatMessage(ee.a.create)},V.formatMessage(ee.a.create)))),u.a.createElement(h.ToolbarItem,null,u.a.createElement(m.a,{id:"remove-multiple-order-processes'",className:L?"":"disabled-link",to:{pathname:re.z}},u.a.createElement(p.Button,{variant:"secondary",isDisabled:!L,"aria-label":V.formatMessage(q.a.deleteOrderProcess)},V.formatMessage(ye.a.delete)))))},actionResolver:function(){return[{title:V.formatMessage(ye.a.edit),onClick:function(e,t,r){return B.push({pathname:re.C,search:"?order_process=".concat(r.id)})}},{title:V.formatMessage(ye.a.delete),onClick:function(e,t,r){return B.push({pathname:re.z,search:"?order_process=".concat(r.id)})}}]},renderEmptyState:function(){return u.a.createElement(Z,{title:""===P?V.formatMessage(q.a.noOrderProcesses):V.formatMessage($.a.noResultsFound),Icon:O.a,PrimaryAction:function(){return""!==P?u.a.createElement(p.Button,{onClick:function(){return I("")},variant:"link"},V.formatMessage($.a.clearFilters)):null},description:""===P?V.formatMessage(q.a.noOrderProcesses):V.formatMessage($.a.noResultsDescription)})},activeFiltersConfig:{filters:Fe(P,V),onDelete:function(){return I("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/order-processes~5a11b65b.js.map