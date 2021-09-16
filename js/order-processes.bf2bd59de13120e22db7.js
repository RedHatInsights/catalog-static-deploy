"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[7010],{88403:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Oe});var n=r(28481),a=r(85061),o=r(96156),s=r(30624),c=r.n(s),i=r(45237),l=r(334),u=r(6202),d=r(63540),f=r(20018),m=r(59505),p=r(48794),g=r(75795),h=r(71648),y=r(45697),v=r.n(y),E=r(32752),b=r(63035);const Z=(0,s.createContext)({selectedOrderProcesses:[]});var P=function(e){var t=e.id,r=(0,s.useContext)(Z),n=r.selectedOrderProcesses,a=r.setSelectedOrderProcesses;return c().createElement(E.X,{id:"select-".concat(t),isChecked:n.includes(t),onChange:function(){return a(t)}})};P.propTypes={id:v().string.isRequired};var O=function(e){return e.map((function(e){var t=e.id,r=e.name,n=e.description,a=e.created_at;return{id:t,"data-ouia-component-id":"test-".concat(t),cells:[c().createElement("div",{key:"".concat(t,"-checkbox"),ouiaId:"".concat(t,"-checkbox")},c().createElement(P,{id:t})),c().createElement("div",{key:"".concat(t,"-").concat(r),ouiaId:"".concat(t,"-").concat(r)},r),n,c().createElement(c().Fragment,{key:t},c().createElement(b.bb,{date:a}))]}}))},S=r(7247),M=r(8666),k=r(67100),F=r(54213),C=r(66031),_=r(29751),D=function(){return(D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},w=function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e},R=function(e){var t=e.columns,r=e.fetchData,n=e.toolbarButtons,a=e.actionResolver,o=e.routes,i=void 0===o?function(){return null}:o,l=e.plural,u=e.pagination,d=void 0===u?S.he:u,f=e.filterValue,m=e.onFilterChange,p=e.isLoading,h=void 0!==p&&p,y=e.renderEmptyState,v=void 0===y?function(){return null}:y,E=e.sortBy,b=e.onSort,Z=e.activeFiltersConfig,P=e.filterConfig,O=void 0===P?[]:P,R=e.rows,T=e.ouiaId,V=(0,k.Z)(),x={itemCount:d.count,page:(0,S.FZ)(d.limit,d.offset),perPage:d.limit,onSetPage:function(e,t){return r(D(D({},d),{offset:(0,S.SJ)(t,d.limit)}))},onPerPageSelect:function(e,t){return r(D(D({},d),{limit:t}))},isDisabled:h};return c().createElement(F.Z,{type:"content","page-type":"tab-"+l,id:"tab-"+l},i(),c().createElement(C.Z,D({className:"pf-u-p-lg",pagination:x},n&&{actionsConfig:{dropdownProps:{position:"right"},actions:[n()]}},{filterConfig:{items:w([{label:V.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{id:"filter-by-name",placeholder:V.formatMessage(_.Z.orderProcessesFilter),"aria-label":V.formatMessage(_.Z.orderProcessesFilter),onChange:function(e,t){return m(t)},value:f}}],O)},activeFiltersConfig:Z})),h&&c().createElement(M.Wi,null),h||0!==R.length?c().createElement(s.Fragment,null,!h&&c().createElement(g.Table,{"aria-label":l+" table",rows:R,cells:t,actionResolver:a,className:"pf-u-pt-0",sortBy:E,onSort:b,ouiaId:T},c().createElement(g.TableHeader,null),c().createElement(g.TableBody,null)),d.count>0&&c().createElement(C.Z,{className:"pf-u-pl-lg pf-u-pr-lg",pagination:D(D({},x),{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):v())},T=r(15811),V=r(81624),x=r(80708),B=r(92223),I=function(e){var t=e.title,r=e.Icon,n=e.description,a=e.PrimaryAction,o=e.renderDescription;return c().createElement(B.Z,{centered:!0,"aria-label":"No records"},c().createElement(x.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},c().createElement(x.EmptyStateIcon,{icon:r}),c().createElement(x.TextContent,null,c().createElement(x.Text,{component:x.TextVariants.h1},t)),c().createElement(x.EmptyStateBody,null,n,o&&o()),c().createElement(x.EmptyStateSecondaryActions,null,a&&c().createElement(a,null))))};I.propTypes={title:v().string.isRequired,Icon:v().any.isRequired,description:v().string.isRequired,PrimaryAction:v().any,renderDescription:v().func};const j=I;var N=r(97881),A=r(56682),q=r(18682),L=r(36722),H=r(96354),X=r(64124),z=r(50378),U=r(88737);const W=(0,V.Z)((function(e,t,r){return(0,z.gS)(e).then((function(n){var a=n.data;if(t?a.find((function(r){return e===r.name&&t!==r.id})):a.find((function(t){return e===t.name})))throw r.formatMessage(U.Z.nameTaken)}))}));var $=r(35388);const G=function(e,t,r){return[{component:H.Z.SELECT,name:e+"_portfolio_item_id",id:e+"_portfolio_item_id",label:function(e){var r;switch(e){case $.FT:r=t.formatMessage(U.Z.beforeProvision);break;case $.BG:r=t.formatMessage(U.Z.afterProvision);break;default:r=t.formatMessage(U.Z.returnProvision)}return r}(e),loadOptions:(0,V.Z)(z.k),initialValue:"",noValueUpdates:!0,isSearchable:!0,isClearable:!0,condition:r}]};var J=function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};const Q=function(e,t){return{fields:J(J(J([{component:H.Z.RADIO,name:"order_process_type",id:"order-process-type",label:e.formatMessage(_.Z.orderProcessType),options:[{label:"ITSM",value:"itsm"},{label:"Return",value:"return"}]},{component:H.Z.TEXT_FIELD,name:"name",isRequired:!0,id:"order-process-name",label:e.formatMessage(_.Z.orderProcessName),validate:[function(r){return W(r,t,e)},{type:X.Z.REQUIRED,message:e.formatMessage(_.Z.enterOrderProcessName)}]},{component:H.Z.TEXTAREA,name:"description",id:"order-process-description",label:e.formatMessage(A.Z.description)}],G($.FT,e,{when:"order_process_type",is:"itsm"})),G($.BG,e,{when:"order_process_type",is:"itsm"})),G($.os,e,{when:"order_process_type",is:"return"}))}};var K=r(30137),Y=r(47786),ee=r(74798);const te=function(e){var t,r=(0,i.useSelector)((function(e){return e.orderProcessReducer.orderProcesses}),i.shallowEqual);return null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.find((function(t){return t.id===e}))};var re=function(){return(re=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ne=function(e,t){var r=t.type,n=t.initialValues,a=t.schema;switch(r){case"loaded":return re(re({},e),{initialValues:n,schema:a,isLoading:!1});default:return e}};const ae=function(e){var t=e.edit,r=void 0!==t&&t,n=(0,i.useDispatch)(),a=(0,Y.Z)(["order_process"])[0].order_process,o=(0,i.useSelector)((function(e){var t=e.orderProcessReducer.orderProcesses.data;return r?t.find((function(e){return e.id===a})):{}})),l=(0,ee.Z)({keepHash:!0}).push,u=(0,k.Z)(),d=te(a),f=(0,s.useReducer)(ne,{isLoading:!0}),m=f[0].initialValues,p=f[1];(0,s.useEffect)((function(){!d&&a?(0,z.Cc)(a).then((function(e){return p({type:"loaded",initialValues:re(re({},e),{order_process_type:e.return_portfolio_item_id?"return":"itsm"}),schema:Q(u,e.id||"")})})):void 0!==d&&p({type:"loaded",initialValues:re(re({},d),{order_process_type:d.return_portfolio_item_id?"return":"itsm"}),schema:Q(u,d.id)})}),[]);var g=function(){return l(L.sr)};return r&&!o?null:c().createElement(x.Modal,{isOpen:!0,onClose:g,title:u.formatMessage(r?_.Z.updateOrderProcess:_.Z.createOrderProcess),variant:"small"},c().createElement(K.ZP,{onSubmit:function(e){var t=r?function(){return(0,h.nZ)(a,o,re({name:"",description:""},e),u)}:function(){return(0,h.Qw)(e,u)};return g(),n(t()).then((function(){return n((0,h.V$)())}))},onCancel:g,schema:Q(u,a),initialValues:m,templateProps:{submitLabel:r?u.formatMessage(A.Z.save):u.formatMessage(A.Z.create),disableSubmit:["validating","pristine"]}}))};var oe=r(44058),se=r(78826),ce=r(67463),ie=r(34348),le=r(19694),ue=r(7579),de=function(e){var t=e.ids,r=void 0===t?[]:t,a=e.fetchData,o=e.resetSelectedOrderProcesses,l=(0,i.useDispatch)(),m=(0,s.useState)(),p=(0,n.Z)(m,2),g=p[0],y=p[1],v=(0,s.useState)(!1),E=(0,n.Z)(v,2),b=E[0],Z=E[1],P=(0,ee.Z)({keepHash:!0}).push,O=(0,Y.Z)(["order_process"]),S=(0,n.Z)(O,1)[0].order_process||1===r.length&&r[0],F=(0,k.Z)(),C=te(S);if((0,s.useEffect)((function(){S&&!C&&l((0,h.Cc)(S)).then((function(e){var t=e.value;return y(t)})).catch((function(){return P(L.sr)}))}),[]),!S&&0===r.length)return null;var D=function(){return P(L.sr)},w=c().createElement("b",{key:"remove-key"},S?g&&g.name||C&&C.name:c().createElement(c().Fragment,null,r.length," ",F.formatMessage(_.Z.orderProcesses))),R=S&&!C&&!g;return c().createElement(se.u_,{isOpen:!0,variant:"small","aria-label":F.formatMessage(_.Z.removeProcessAriaLabel,{count:S?1:r.length}),header:c().createElement(ie.Dx,{size:"2xl",headingLevel:"h1"},c().createElement(le.default,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),F.formatMessage(_.Z.removeProcessTitle,{count:S?1:r.length})),onClose:D,actions:[c().createElement(u.Button,{id:"submit-remove-order-process",ouiaId:"submit-remove-order-process",key:"submit",variant:"danger",type:"button",isDisabled:b,onClick:function(){return Z(!0),l(S?(0,h.Ae)(S,F):(0,h.PU)(r,F)).catch((function(){return Z(!1)})).then((function(){return P(L.sr)})).then((function(){return o()})).then((function(){return a()}))}},b?c().createElement(c().Fragment,null,c().createElement(ce.Spinner,{size:"sm",className:"pf-u-mr-md"}),F.formatMessage(ue.Z.deleting)):F.formatMessage(ue.Z.delete)),c().createElement(u.Button,{id:"cancel-remove-order-process",ouiaId:"cancel-remove-order-process",key:"cancel",variant:"link",type:"button",isDisabled:b,onClick:D},F.formatMessage(A.Z.cancel))]},c().createElement(f.TextContent,null,c().createElement(d.Text,{component:d.TextVariants.p},R?c().createElement(M.Z0,null):F.formatMessage(_.Z.removeProcessDescription,{name:w}))))};de.propTypes={fetchData:v().func.isRequired,ids:v().array,resetSelectedOrderProcesses:v().func.isRequired};const fe=de;function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ge=function(e,t,r){return[{title:c().createElement(E.X,{onChange:r,isChecked:t,id:"select-all"}),transforms:[(0,g.cellWidth)(1)]},{title:e.formatMessage(A.Z.name),transforms:[g.sortable]},{title:e.formatMessage(A.Z.description),transforms:[g.sortable]},{title:e.formatMessage(A.Z.created),transforms:[g.sortable]}]},he=(0,V.Z)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:S.he,a=arguments.length>4?arguments[4]:void 0;return r(!0),t((0,h.V$)(pe(pe({filterValue:e},n),{},{sortBy:a}))).then((function(){return r(!1)}))}),1e3),ye=function(e,t){return e?[{category:t.formatMessage(A.Z.name),key:"name",chips:[{name:e,value:e}]}]:[]},ve={filter:"",isFetching:!0,isFiltering:!1,selectedOrderProcesses:[],allSelected:!1,rows:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},be=function(e,t,r){return r.indexOf(e)===t},Ze=function(e,t){switch(t.type){case"setRows":return pe(pe({},e),{},{rows:t.payload,allSelected:Ee(t.payload,e.selectedOrderProcesses)});case"setFetching":return pe(pe({},e),{},{isFetching:t.payload});case"setFilterValue":return pe(pe({},e),{},{filterValue:t.payload});case"select":return pe(pe({},e),{},{allSelected:!1,selectedOrderProcesses:e.selectedOrderProcesses.includes(t.payload)?e.selectedOrderProcesses.filter((function(e){return e!==t.payload})):[].concat((0,a.Z)(e.selectedOrderProcesses),[t.payload])});case"selectAll":return pe(pe({},e),{},{selectedOrderProcesses:[].concat((0,a.Z)(e.selectedOrderProcesses),(0,a.Z)(t.payload)).filter(be),allSelected:!0});case"unselectAll":return pe(pe({},e),{},{selectedOrderProcesses:e.selectedOrderProcesses.filter((function(e){return!t.payload.includes(e)})),allSelected:!1});case"resetSelected":return pe(pe({},e),{},{selectedOrderProceses:[],allSelected:!1});case"setFilteringFlag":return pe(pe({},e),{},{isFiltering:t.payload});default:return e}},Pe={1:"name",2:"description",3:"created_at"};const Oe=function(){var e,t=(0,oe.Z)(),r=(0,i.useSelector)((function(e){var t=e.orderProcessReducer;return{orderProcesses:t.orderProcesses,sortBy:t.sortBy}}),i.shallowEqual),a=r.orderProcesses,o=a.data,g=a.meta,y=r.sortBy,v=(0,s.useReducer)(Ze,pe(pe({},ve),{},{filterValue:(null==t||null===(e=t.orderProcesses)||void 0===e?void 0:e.filter)||ve.filterValue})),E=(0,n.Z)(v,2),P=E[0],M=P.filterValue,F=P.isFetching,C=P.isFiltering,D=P.selectedOrderProcesses,w=P.allSelected,V=P.rows,x=E[1],B=(0,i.useDispatch)(),I=(0,k.Z)(),H=(0,ee.Z)({keepHash:!0}),X=function(e,t){return x({type:"setFetching",payload:!0}),B((0,h.V$)(e,t)).then((function(){return x({type:"setFetching",payload:!1})})).catch((function(){return x({type:"setFetching",payload:!1})}))};(0,s.useEffect)((function(){X(null!=t&&t.orderProcesses?pe(pe({},t.orderProcesses),{},{filterValue:M}):S.he,y),(0,b.k3)()}),[]),(0,s.useEffect)((function(){x({type:"setRows",payload:O(o)})}),[o]);var z=function(e){x({type:"setFilterValue",payload:e}),he(e,B,(function(e){return x({type:"setFilteringFlag",payload:e})}),pe(pe({},g),{},{offset:0}))},U=D.length>0;return c().createElement(s.Fragment,null,c().createElement(T.Z,null,c().createElement(f.TextContent,{className:"pf-u-ml-md"},c().createElement(d.Text,{component:d.TextVariants.h1},I.formatMessage(_.Z.title)))),c().createElement(Z.Provider,{value:{selectedOrderProcesses:D,setSelectedOrderProcesses:function(e){return x({type:"select",payload:e})}}},c().createElement(R,{ouiaId:"OrderProcessesTable",sortBy:y,onSort:function(e,t,r,n){var a=n.property;return B((0,h.JW)({index:t,direction:r,property:Pe[t]||a})),X(pe(pe({},g),{},{filterValue:M}),{index:t,direction:r,property:Pe[t]||a})},rows:V,columns:ge(I,w,(function(){return x(w?{type:"unselectAll",payload:o.map((function(e){return e.id}))}:{type:"selectAll",payload:o.map((function(e){return e.id}))})})),routes:function(){return c().createElement(s.Fragment,null,c().createElement(l.Route,{exact:!0,path:L.DD},c().createElement(ae,{postMethod:X})),c().createElement(l.Route,{exact:!0,path:L.cq},c().createElement(fe,{ids:D,fetchData:X,resetSelectedOrderProcesses:function(){return x({type:"resetSelected"})}})),c().createElement(l.Route,{exact:!0,path:L.ES},c().createElement(ae,{edit:!0})))},fetchData:X,titlePlural:I.formatMessage(_.Z.title),titleSingular:I.formatMessage(_.Z.orderProcess),pagination:g,filterValue:M,onFilterChange:z,isLoading:F||C,toolbarButtons:function(){return c().createElement(q.ED,{className:"pf-u-pl-lg top-toolbar"},c().createElement(m.Eg,null,c().createElement(l.Link,{id:"add-order-process-link",to:{pathname:L.DD}},c().createElement(u.Button,{variant:"primary",ouiaid:"create-order-process","aria-label":I.formatMessage(A.Z.create)},I.formatMessage(A.Z.create)))),c().createElement(m.Eg,null,c().createElement(l.Link,{id:"remove-multiple-order-processes'",className:U?"":"disabled-link",to:{pathname:L.cq}},c().createElement(u.Button,{variant:"secondary",ouiaid:"delete-order-process",isDisabled:!U,"aria-label":I.formatMessage(_.Z.deleteOrderProcess)},I.formatMessage(ue.Z.delete)))))},actionResolver:function(){return[{title:I.formatMessage(ue.Z.edit),onClick:function(e,t,r){return H.push({pathname:L.ES,search:"?order_process=".concat(r.id)})}},{title:I.formatMessage(ue.Z.delete),onClick:function(e,t,r){return H.push({pathname:L.cq,search:"?order_process=".concat(r.id)})}}]},renderEmptyState:function(){return c().createElement(j,{title:""===M?I.formatMessage(_.Z.noOrderProcesses):I.formatMessage(N.Z.noResultsFound),Icon:p.ZP,PrimaryAction:function(){return""!==M?c().createElement(u.Button,{ouiaId:"clear-filter",onClick:function(){return z("")},variant:"link"},I.formatMessage(N.Z.clearFilters)):null},description:""===M?I.formatMessage(_.Z.noOrderProcesses):I.formatMessage(N.Z.noResultsDescription)})},activeFiltersConfig:{filters:ye(M,I),onDelete:function(){return z("")}}})))}}}]);