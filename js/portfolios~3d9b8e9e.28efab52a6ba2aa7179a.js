(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{649:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(699),i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t=e.children,r=e.className,a=l(e,["children","className"]);return n.a.createElement("div",i({className:Object(o.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",r)},a),t)}},795:function(e,t,r){"use strict";var a=r(0);t.a=function(){var e=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e}},922:function(e,t,r){"use strict";r.r(t);var a,n,o=r(648),i=r.n(o),l=r(117),c=r.n(l),s=r(165),p=r.n(s),u=r(0),f=r.n(u),d=r(21),m=r(97),y=r(627),b=r.n(y),h=r(737),O=r.n(h),g=r(163),v=r(119),j=r(702),E=r(32),w=r(167),P=r(695),D=r(723),F=r(869),C=r(131),S=r(844),R=r(793),k=r(335),_=r(161),q=r(794),T=r(848),N=r(221),x=r(80),B=r(608),I=r(594),A=r(909),V=r(696),H=r(23),U=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},W=Object(H.b)(B.a)(a||(a=U(["\n  max-width: calc(100% - 80px);\n  width: calc(100% - 80px);\n"],["\n  max-width: calc(100% - 80px);\n  width: calc(100% - 80px);\n"]))),J=Object(H.b)(I.a)(n||(n=U(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),L=function(e){var t=e.id,r=e.to,a=e.portfolioName,n=e.portfolio_items,o=e.headerActions,i=void 0===o?[]:o;return f.a.createElement(J,null,f.a.createElement(W,null,f.a.createElement(k.a,null,f.a.createElement(x.a,{to:r,id:"portfolio-link-"+t},f.a.createElement(_.a,{title:a,className:"pf-u-mb-0",component:_.b.h3},f.a.createElement(V.a,null,a))))),f.a.createElement(A.a,{isRead:!0},n),f.a.createElement("div",{onClick:function(e){return e.preventDefault()}},i))},z=r(625),G=r(9),K=r(698),M=r(697),Q=r(135),X=r(118),Y=r(20),Z=r(44),$=function(){return($=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},ee=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},te=["description"],re=function(e){var t=e.portfolioId,r=e.handleCopyPortfolio,a=e.userCapabilities,n=a.share,o=a.copy,i=a.unshare,l=a.update,c=a.destroy,s=a.set_approval,p=Object(Y.a)(),d=Object(u.useState)(!1),m=d[0],y=d[1],b=[];if((n||i)&&b.push(f.a.createElement(D.a,{key:"share-portfolio-action",id:"share-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.B,preserveHash:!0},p(Q.a.share))})),o&&b.push(f.a.createElement(D.a,{key:"copy-portfolio-action",id:"copy-portfolio-action",onClick:function(){return r(t)}},p(Q.a.copy))),s&&b.push(f.a.createElement(D.a,{key:"workflow-portfolio-action",id:"workflow-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.f,preserveHash:!0},p(Q.a.setApproval))})),window.insights.chrome.isBeta()&&l){var h=p(Z.a.setOrderProcess);b.push(f.a.createElement(D.a,{"aria-label":h,key:"attach-order-processes",id:"attach-order-processes",component:f.a.createElement(z.a,{preserveSearch:!0,pathname:G.d,searchParams:{portfolio:t}},h),role:"link"}))}return l&&b.push(f.a.createElement(D.a,{key:"edit-portfolio-action",id:"edit-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.e,preserveHash:!0},p(Q.a.edit))})),c&&b.push(f.a.createElement(D.a,{key:"remove-portfolio-action",id:"remove-portfolio-action",component:f.a.createElement(z.a,{searchParams:{portfolio:t},pathname:G.A,preserveHash:!0},p(Q.a.delete))})),0===b.length?null:f.a.createElement(F.a,{key:"portfolio-dropdown",id:"portfolio-"+t+"-dropdown",isOpen:m,isPlain:!0,onSelect:function(){return y(!1)},position:C.d.right,toggle:f.a.createElement(S.a,{id:"portfolio-"+t+"-toggle",onToggle:function(e){return y(e)}}),dropdownItems:b})},ae=function(e){var t=e.imageUrl,r=e.isDisabled,a=e.name,n=e.id,o=e.handleCopyPortfolio,i=e.metadata,l=i.user_capabilities,c=i.statistics,s=c.shared_groups,p=c.portfolio_items,u=ee(e,["imageUrl","isDisabled","name","id","handleCopyPortfolio","metadata"]),d=Object(Y.a)(),m={pathname:G.y,search:"?portfolio="+n};return f.a.createElement(K.b,{isDisabled:r},f.a.createElement(K.a,null,f.a.createElement(R.a,null,f.a.createElement(L,{id:n,to:m,portfolioName:a,portfolio_items:p||0,headerActions:f.a.createElement(re,{portfolioId:n,userCapabilities:l,handleCopyPortfolio:o})})),f.a.createElement(M.a,null,f.a.createElement(k.a,{className:"pf-u-mb-md"},f.a.createElement(_.a,{component:_.b.small,className:"pf-u-mb-0"},"Last updated ",f.a.createElement(N.DateFormat,{date:u.updated_at||u.created_at,type:"relative"})),f.a.createElement(_.a,{component:_.b.small},"by ",u.owner)),f.a.createElement(P.a,$({},$({name:a,imageUrl:t},u),{toDisplay:te}))),f.a.createElement(q.a,null,s&&s>0&&f.a.createElement(T.a,{variant:"filled",color:"grey"},d(X.a.shared)))))},ne=r(662),oe=r(132),ie=r(639),le=r(649),ce=r(139),se=r(223),pe=r(629),ue=r(54),fe=r(630),de=r(795),me=r(16),ye=r.n(me),be=r(744);function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var Oe={name:X.a.name,owner:X.a.owner,sort_by:X.a.sortBy},ge={name:X.a.name,owner:X.a.owner,updated_at:X.a.updated,created_at:X.a.created},ve=function(e){var t=e.filters,r=e.stateDispatch,a=e.debouncedFilter,n=e.initialState,o=e.meta,l=e.filterType,s=e.handleFilterItems,u=e.sortDirection,m=e.handleSort,y=e.fetchPortfoliosWithState,b=e.isFetching,h=e.isFiltering,O=e.canCreate,v=Object(d.useDispatch)(),j=Object(Y.a)();return o.noData?null:f.a.createElement(be.PrimaryToolbar,i()({},O?{dedicatedAction:f.a.createElement(z.a,{pathname:"/portfolios/add-portfolio"},f.a.createElement(g.Button,{variant:"primary",id:"create-portfolio",type:"button"},j(X.a.create)))}:{},{activeFiltersConfig:{filters:Object.entries(t).filter((function(e){var t=c()(e,2)[1];return t&&t.length>0})).map((function(e){var t=c()(e,2),r=t[0],a=t[1];return{category:j(Oe[r]),type:r,chips:Array.isArray(a)?a.map((function(e){return{name:e}})):[{name:"sort_by"===r?j(ge[a]):a}]}})),onDelete:function(e,i,l){var s=c()(i,1)[0];if(l)return r({type:"replaceFilterChip",payload:n.filters}),a(n.filters,o,v,(function(e){return r({type:"setFilteringFlag",payload:e})}));var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);"state"===s.type?u[s.type]=u[s.type].filter((function(e){return e!==s.chips[0].name})):u[s.type]="",r({type:"replaceFilterChip",payload:u}),a(u,o,v,(function(e){return r({type:"setFilteringFlag",payload:e})}))}},filterConfig:{onChange:function(e,t){return r({type:"setFilterType",payload:t})},value:l,items:[{filterValues:{value:t.name,onChange:function(e,t){return s(t)}},label:j(X.a.name),value:"name"},{filterValues:{value:t.owner,onChange:function(e,t){return s(t)}},label:j(X.a.owner),value:"owner"},{filterValues:{value:t.sort_by||"name",onChange:function(e,t){return s(t)},items:[{label:j(X.a.name),value:"name"},{label:j(X.a.owner),value:"owner"},{label:j(X.a.created),value:"created_at"},{label:j(X.a.updated),value:"updated_at"}]},placeholder:t.sort_by?j(ge[t.sort_by]):j(X.a.name),label:j(X.a.sortBy),value:"sort_by",type:"radio"}]},sortByConfig:{direction:u,onSortChange:function(e,t){return m(t)}},pagination:o.count>0?f.a.createElement(ie.a,{isDisabled:b||h,meta:o,apiRequest:function(e,r){return v(y(t,r))},isCompact:!0}):void 0}))};ve.propTypes={filters:ye.a.shape({name:ye.a.string.isRequired,owner:ye.a.string.isRequired,sort_by:ye.a.string}).isRequired,stateDispatch:ye.a.func.isRequired,debouncedFilter:ye.a.func.isRequired,initialState:ye.a.shape({filters:ye.a.shape(p()({},ye.a.string,ye.a.any)).isRequired}).isRequired,meta:ye.a.object.isRequired,filterType:ye.a.string.isRequired,handleFilterItems:ye.a.func.isRequired,sortDirection:ye.a.string.isRequired,handleSort:ye.a.func.isRequired,fetchPortfoliosWithState:ye.a.func.isRequired,isFetching:ye.a.bool.isRequired,isFiltering:ye.a.bool.isRequired,canCreate:ye.a.bool};var je=ve,Ee=r(684);function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De=Object(oe.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.a,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;a(!0),r(Object(w.h)(e,t)).then((function(){return a(!1)}))}),1e3),Fe={isOpen:!1,isFetching:!0,isFiltering:!1,filterType:"name",filters:{name:"",owner:"",sort_by:void 0},sortDirection:fe.b.asc},Ce=function(e,t){switch(t.type){case"setFetching":return Pe(Pe({},e),{},{isFetching:t.payload});case"setFilterValue":return Pe(Pe({},e),{},{filters:(r=t.payload,a=e.filterType,n=e.filters,Pe(Pe({},n),{},p()({},a,r)))});case"replaceFilterChip":return Pe(Pe({},e),{},{sortDirection:fe.b.asc,filters:t.payload});case"setFilteringFlag":return Pe(Pe({},e),{},{isFiltering:t.payload});case"setFilterType":return Pe(Pe({},e),{},{filterType:t.payload});case"setSortBy":return Pe(Pe({},e),{},{sortDirection:t.payload,filters:e.filters.sort_by?e.filters:Pe(Pe({},e.filters),{},{sort_by:"name"})})}var r,a,n;return e};t.default=function(){var e=Object(Y.a)(),t=Object(se.a)(),r=Object(de.a)(),a=Object(u.useReducer)(Ce,Pe(Pe({},Fe),null==t?void 0:t.portfolio)),n=c()(a,2),o=n[0],l=o.isFetching,s=o.isFiltering,y=o.filters,h=o.filterType,E=o.sortDirection,P=n[1],D=Object(d.useSelector)((function(e){return e.portfolioReducer.portfolios})),F=D.data,C=D.meta,S=Object(d.useDispatch)(),R=Object(u.useContext)(ce.a).permissions,k=Object(m.g)();Object(u.useEffect)((function(){S(Object(w.h)(y,Pe(Pe({},C),{},{sortDirection:E}))).then((function(){return P({type:"setFetching",payload:!1})})),Object(v.d)(),insights.chrome.appNavClick({id:"portfolios",secondaryNav:!0})}),[]);var _=function(e){P({type:"setFilterValue",payload:e}),De(Pe(Pe({},y),{},p()({},h,e)),Pe(Pe({},C),{},{offset:0,sortDirection:E}),S,(function(e){return P({type:"setFilteringFlag",payload:e})}))};Object(u.useEffect)((function(){!r||s&&l||_(y[h])}),[E]);var q=function(e){return S(Object(w.c)(e)).then((function(e){var t=e.id;return k.push({pathname:G.y,search:"?portfolio=".concat(t)})}))},T=Object(v.b)(R,["catalog:portfolios:create"]),N={PrimaryAction:C.noData?function(){return f.a.createElement(ne.a,{url:G.b,id:"create-portfolio",label:"Create portfolio",hasPermission:T})}:function(){return f.a.createElement(g.Button,{variant:"link",onClick:function(){return _("")}},e(pe.a.clearFilters))},title:C.noData?e(ue.a.portfoliosNoData):e(pe.a.noResults),description:C.noData?e(ue.a.portfoliosNoDataDescription):e(pe.a.noResultsDescription),Icon:C.noData?O.a:b.a},x=F.map((function(e){return f.a.createElement(ae,i()({key:e.id},e,{handleCopyPortfolio:q}))}));return f.a.createElement(u.Fragment,null,f.a.createElement(Ee.b,null,f.a.createElement(Ee.a,{title:e(ue.a.portfoliosTitle)}),f.a.createElement(je,{filters:y,stateDispatch:P,debouncedFilter:De,initialState:Fe,meta:C,filterType:h,handleFilterItems:_,sortDirection:E,handleSort:function(e){return P({type:"setSortBy",payload:e})},fetchPortfoliosWithState:w.h,isFetching:l,isFiltering:s,canCreate:T})),f.a.createElement(j.a,{items:x,isLoading:l||s,renderEmptyState:function(){return f.a.createElement(ne.b,N)}}),C.count>0&&f.a.createElement(le.a,null,f.a.createElement(ie.a,{meta:C,apiRequest:function(e,t){return S(Object(w.h)(y,t))},dropDirection:"up"})))}}}]);
//# sourceMappingURL=../sourcemaps/portfolios~3d9b8e9e.js.map