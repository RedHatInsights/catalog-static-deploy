(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1038:function(e,t,r){"use strict";r.r(t);var a,n,o=r(652),i=r.n(o),l=r(118),c=r.n(l),s=r(164),p=r.n(s),u=r(0),f=r.n(u),d=r(21),m=r(97),y=r(626),b=r.n(y),h=r(746),O=r.n(h),g=r(162),v=r(119),j=r(729),E=r(32),w=r(165),P=r(743),D=r(1021),F=r(1024),k=r(135),C=r(1044),S=r(836),_=r(333),R=r(160),q=r(837),T=r(869),N=r(217),x=r(78),I=r(605),A=r(592),B=r(1023),L=r(725),V=r(23),H=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},U=Object(V.b)(I.a)(a||(a=H(["\n  max-width: calc(100% - 80px);\n  width: calc(100% - 80px);\n"],["\n  max-width: calc(100% - 80px);\n  width: calc(100% - 80px);\n"]))),W=Object(V.b)(A.a)(n||(n=H(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),J=function(e){var t=e.id,r=e.to,a=e.portfolioName,n=e.portfolio_items,o=e.headerActions,i=void 0===o?[]:o;return f.a.createElement(W,null,f.a.createElement(U,null,f.a.createElement(_.a,null,f.a.createElement(x.a,{to:r,id:"portfolio-link-"+t},f.a.createElement(R.a,{title:a,className:"pf-u-mb-0",component:R.b.h3},f.a.createElement(L.a,null,a))))),f.a.createElement(B.a,{isRead:!0},n),f.a.createElement("div",{onClick:function(e){return e.preventDefault()}},i))},z=r(623),G=r(9),K=r(727),M=r(726),Q=r(133),X=r(117),Y=r(20),Z=r(44),$=function(){return($=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},ee=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},te=["description"],re=function(e){var t=e.portfolioId,r=e.handleCopyPortfolio,a=e.canLinkOrderProcesses,n=e.userCapabilities,o=n.share,i=n.copy,l=n.unshare,c=n.update,s=n.destroy,p=n.set_approval,d=Object(Y.a)(),m=Object(u.useState)(!1),y=m[0],b=m[1],h=[];if((o||l)&&h.push(f.a.createElement(D.a,{key:"share-portfolio-action",id:"share-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.B,preserveHash:!0},d(Q.a.share))})),i&&h.push(f.a.createElement(D.a,{key:"copy-portfolio-action",id:"copy-portfolio-action",onClick:function(){return r(t)}},d(Q.a.copy))),p&&h.push(f.a.createElement(D.a,{key:"workflow-portfolio-action",id:"workflow-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.f,preserveHash:!0},d(Q.a.setApproval))})),c&&a){var O=d(Z.a.setOrderProcess);h.push(f.a.createElement(D.a,{"aria-label":O,key:"attach-order-processes",id:"attach-order-processes",component:f.a.createElement(z.a,{preserveSearch:!0,pathname:G.d,searchParams:{portfolio:t}},O),role:"link"}))}return c&&h.push(f.a.createElement(D.a,{key:"edit-portfolio-action",id:"edit-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.e,preserveHash:!0},d(Q.a.edit))})),s&&h.push(f.a.createElement(D.a,{key:"remove-portfolio-action",id:"remove-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.A,preserveHash:!0},d(Q.a.delete))})),0===h.length?null:f.a.createElement(F.a,{key:"portfolio-dropdown",id:"portfolio-"+t+"-dropdown",isOpen:y,isPlain:!0,onSelect:function(){return b(!1)},position:k.d.right,toggle:f.a.createElement(C.a,{id:"portfolio-"+t+"-toggle",onToggle:function(e){return b(e)}}),dropdownItems:h})},ae=function(e){var t=e.imageUrl,r=e.isDisabled,a=e.name,n=e.id,o=e.handleCopyPortfolio,i=e.metadata,l=i.user_capabilities,c=i.statistics,s=c.shared_groups,p=c.approval_processes,u=c.portfolio_items,d=e.canLinkOrderProcesses,m=ee(e,["imageUrl","isDisabled","name","id","handleCopyPortfolio","metadata","canLinkOrderProcesses"]),y=Object(Y.a)(),b={pathname:G.y,search:"?portfolio="+n};return f.a.createElement(K.b,{isDisabled:r},f.a.createElement(K.a,null,f.a.createElement(S.a,null,f.a.createElement(J,{id:n,to:b,portfolioName:a,portfolio_items:u||0,headerActions:f.a.createElement(re,{portfolioId:n,userCapabilities:l,handleCopyPortfolio:o,canLinkOrderProcesses:d})})),f.a.createElement(M.a,null,f.a.createElement(_.a,{className:"pf-u-mb-md"},f.a.createElement(R.a,{component:R.b.small,className:"pf-u-mb-0"},"Last updated ",f.a.createElement(N.DateFormat,{date:m.updated_at||m.created_at,type:"relative"})),f.a.createElement(R.a,{component:R.b.small},"by ",m.owner)),f.a.createElement(P.a,$({},$({name:a,imageUrl:t},m),{toDisplay:te}))),f.a.createElement(q.a,null,p&&p>0&&f.a.createElement(T.a,{variant:"filled",color:"grey"},y(X.a.approvalProcessSet))," ",s&&s>0&&f.a.createElement(T.a,{variant:"filled",color:"grey"},y(X.a.shared)))))},ne=r(676),oe=r(130),ie=r(642),le=r(646),ce=r(134),se=r(223),pe=r(630),ue=r(54),fe=r(706),de=r(838),me=r(16),ye=r.n(me),be=r(750);function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var Oe={name:X.a.name,owner:X.a.owner,sort_by:X.a.sortBy},ge={name:X.a.name,owner:X.a.owner,updated_at:X.a.updated,created_at:X.a.created},ve=function(e){var t=e.filters,r=e.stateDispatch,a=e.debouncedFilter,n=e.initialState,o=e.meta,l=e.filterType,s=e.handleFilterItems,u=e.sortDirection,m=e.handleSort,y=e.fetchPortfoliosWithState,b=e.isFetching,h=e.isFiltering,O=e.canCreate,v=Object(d.useDispatch)(),j=Object(Y.a)();return o.noData?null:f.a.createElement(be.PrimaryToolbar,i()({},O?{dedicatedAction:f.a.createElement(z.a,{pathname:"/portfolios/add-portfolio"},f.a.createElement(g.Button,{variant:"primary",id:"create-portfolio",type:"button"},j(X.a.create)))}:{},{activeFiltersConfig:{filters:Object.entries(t).filter((function(e){var t=c()(e,2)[1];return t&&t.length>0})).map((function(e){var t=c()(e,2),r=t[0],a=t[1];return{category:j(Oe[r]),type:r,chips:Array.isArray(a)?a.map((function(e){return{name:e}})):[{name:"sort_by"===r?j(ge[a]):a}]}})),onDelete:function(e,i,l){var s=c()(i,1)[0];if(l)return r({type:"replaceFilterChip",payload:n.filters}),a(n.filters,o,v,(function(e){return r({type:"setFilteringFlag",payload:e})}));var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);"state"===s.type?u[s.type]=u[s.type].filter((function(e){return e!==s.chips[0].name})):u[s.type]="",r({type:"replaceFilterChip",payload:u}),a(u,o,v,(function(e){return r({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return r({type:"setFilterType",payload:t})},value:l,items:[{filterValues:{value:t.name,onChange:function(e,t){return s(t)}},label:j(X.a.name),value:"name"},{filterValues:{value:t.owner,onChange:function(e,t){return s(t)}},label:j(X.a.owner),value:"owner"},{filterValues:{value:t.sort_by||"name",onChange:function(e,t){return s(t)},items:[{label:j(X.a.name),value:"name"},{label:j(X.a.owner),value:"owner"},{label:j(X.a.created),value:"created_at"},{label:j(X.a.updated),value:"updated_at"}]},placeholder:t.sort_by?j(ge[t.sort_by]):j(X.a.name),label:j(X.a.sortBy),value:"sort_by",type:"radio"}]},sortByConfig:{direction:u,onSortChange:function(e,t){return m(t)}},pagination:o.count>0?f.a.createElement(ie.a,{isDisabled:b||h,meta:o,apiRequest:function(e,r){return v(y(t,r))},isCompact:!0}):void 0}))};ve.propTypes={filters:ye.a.shape({name:ye.a.string.isRequired,owner:ye.a.string.isRequired,sort_by:ye.a.string}).isRequired,stateDispatch:ye.a.func.isRequired,debouncedFilter:ye.a.func.isRequired,initialState:ye.a.shape({filters:ye.a.shape(p()({},ye.a.string,ye.a.any)).isRequired}).isRequired,meta:ye.a.object.isRequired,filterType:ye.a.string.isRequired,handleFilterItems:ye.a.func.isRequired,sortDirection:ye.a.string.isRequired,handleSort:ye.a.func.isRequired,fetchPortfoliosWithState:ye.a.func.isRequired,isFetching:ye.a.bool.isRequired,isFiltering:ye.a.bool.isRequired,canCreate:ye.a.bool};var je=ve,Ee=r(672);function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De=Object(oe.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.a,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;a(!0),r(Object(w.h)(e,t)).then((function(){return a(!1)}))}),1e3),Fe={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"name",filters:{name:"",owner:"",sort_by:void 0},sortDirection:fe.a.asc},ke=function(e,t){switch(t.type){case"setFetching":return Pe(Pe({},e),{},{isFetching:t.payload});case"setFilterValue":return Pe(Pe({},e),{},{filters:(r=t.payload,a=e.filterType,n=e.filters,Pe(Pe({},n),{},p()({},a,r)))});case"replaceFilterChip":return Pe(Pe({},e),{},{sortDirection:fe.a.asc,filters:t.payload});case"setFilteringFlag":return Pe(Pe({},e),{},{isFiltering:t.payload});case"setFilterType":return Pe(Pe({},e),{},{filterType:t.payload});case"setSortBy":return Pe(Pe({},e),{},{sortDirection:t.payload,filters:e.filters.sort_by?e.filters:Pe(Pe({},e.filters),{},{sort_by:"name"})})}var r,a,n;return e};t.default=function(){var e=Object(Y.a)(),t=Object(se.a)(),r=Object(de.a)(),a=Object(u.useReducer)(ke,Pe(Pe({},Fe),null==t?void 0:t.portfolio)),n=c()(a,2),o=n[0],l=o.isFetching,s=o.isFiltering,y=o.filters,h=o.filterType,E=o.sortDirection,P=n[1],D=Object(d.useSelector)((function(e){return e.portfolioReducer.portfolios})),F=D.data,k=D.meta,C=Object(d.useDispatch)(),S=Object(u.useContext)(ce.a).permissions,_=Object(m.g)();Object(u.useEffect)((function(){C(Object(w.h)(y,Pe(Pe({},k),{},{sortDirection:E}))).then((function(){return P({type:"setFetching",payload:!1})})),Object(v.d)(),insights.chrome.appNavClick({id:"portfolios",secondaryNav:!0})}),[]);var R=function(e){P({type:"setFilterValue",payload:e}),De(Pe(Pe({},y),{},p()({},h,e)),Pe(Pe({},k),{},{offset:0,sortDirection:E}),C,(function(e){return P({type:"setFilteringFlag",payload:e})}))};Object(u.useEffect)((function(){!r||s&&l||R(y[h])}),[E]);var q=function(e){return C(Object(w.c)(e)).then((function(e){var t=e.id;return _.push({pathname:G.y,search:"?portfolio=".concat(t)})}))},T=Object(v.b)(S,["catalog:portfolios:create"]),N=Object(v.b)(S,["catalog:order_processes:link"]),x={PrimaryAction:k.noData?function(){return f.a.createElement(ne.a,{url:G.b,id:"create-portfolio",label:"Create portfolio",hasPermission:T})}:function(){return f.a.createElement(g.Button,{variant:"link",onClick:function(){return R("")}},e(pe.a.clearFilters))},title:k.noData?e(ue.a.portfoliosNoData):e(pe.a.noResults),description:k.noData?e(ue.a.portfoliosNoDataDescription):e(pe.a.noResultsDescription),Icon:k.noData?O.a:b.a},I=F.map((function(e){return f.a.createElement(ae,i()({key:e.id},e,{canLinkOrderProcesses:N,handleCopyPortfolio:q}))}));return f.a.createElement(u.Fragment,null,f.a.createElement(Ee.b,null,f.a.createElement(Ee.a,{title:e(ue.a.portfoliosTitle)}),f.a.createElement(je,{filters:y,stateDispatch:P,debouncedFilter:De,initialState:Fe,meta:k,filterType:h,handleFilterItems:R,sortDirection:E,handleSort:function(e){return P({type:"setSortBy",payload:e})},fetchPortfoliosWithState:w.h,isFetching:l,isFiltering:s,canCreate:T})),f.a.createElement(j.a,{items:I,isLoading:l||s,renderEmptyState:function(){return f.a.createElement(ne.b,x)}}),k.count>0&&f.a.createElement(le.a,null,f.a.createElement(ie.a,{meta:k,apiRequest:function(e,t){return C(Object(w.h)(y,t))},dropDirection:"up"})))}},646:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(699),i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t=e.children,r=e.className,a=l(e,["children","className"]);return n.a.createElement("div",i({className:Object(o.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",r)},a),t)}},838:function(e,t,r){"use strict";var a=r(0);t.a=function(){var e=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e}}}]);
//# sourceMappingURL=../sourcemaps/portfolios~3d9b8e9e.js.map