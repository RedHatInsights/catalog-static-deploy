(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{577:function(e,t,o){"use strict";var r=o(69),a=o.n(r),i=o(70),n=o.n(i),s=o(0),c=o.n(s),l=o(4),p=o.n(l),u=o(179),d=o(284),f=o(23),m=function(e){var t=e.meta,o=t.limit,r=t.count,i=t.offset,s=e.apiProps,l=e.apiRequest,p=e.className,m=e.isCompact,b=n()(e,["meta","apiProps","apiRequest","className","isCompact"]);return c.a.createElement("div",{className:p},c.a.createElement(d.Pagination,a()({perPage:o||50,itemCount:r||0,onPerPageSelect:function(e,t){return l(s,{offset:i,limit:t})},page:Object(f.b)(o,i),onSetPage:function(e,t,r){var a={offset:Object(f.c)(t,o),limit:o},i=function(){return l(s,a)};return r?Object(u.a)(i,250)():i()},direction:"down",isCompact:m},b)))};m.propTypes={meta:p.a.shape({count:p.a.number,limit:p.a.number.isRequired,offset:p.a.number.isRequired}),apiRequest:p.a.func.isRequired,apiProps:p.a.any,className:p.a.string,isCompact:p.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},644:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(1),a=r.__importStar(o(0)),i=o(2),n=r.__importDefault(o(47));t.CardHeader=e=>{var{children:t=null,className:o=""}=e,s=r.__rest(e,["children","className"]);return a.createElement("div",Object.assign({className:i.css(n.default.cardHeader,o)},s),t)},t.CardHeader.displayName="CardHeader"},648:function(e,t,o){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0,transform:""},t.WrenchIcon=o(78).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},701:function(e,t,o){"use strict";var r=o(182),a=o.n(r),i=o(0),n=o.n(i),s=o(4),c=o.n(s),l=o(644),p=o(702),u=o(287),d=o(5),f=o(612),m=o(695),b=o(675),h=o(613),y=o(20);function P(){var e=a()(["\n  flex: 1;\n"]);return P=function(){return e},e}var g=Object(y.b)(u.Level)(P()),O=function(e){return n.a.createElement(h.b,{isDisabled:e.removeInProgress&&e.isSelected},n.a.createElement(h.a,null,n.a.createElement(l.CardHeader,null,n.a.createElement(g,null,n.a.createElement(f.a,{src:"".concat(d.e,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&n.a.createElement(m.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),n.a.createElement(b.a,e),n.a.createElement(p.CardFooter,null)))};O.propTypes={id:c.a.string,platformId:c.a.string,service_offering_source_ref:c.a.string,isSelectable:c.a.bool,isSelected:c.a.bool,onSelect:c.a.func,orderUrl:c.a.string,removeInProgress:c.a.bool,portfolio_id:c.a.string,metadata:c.a.shape({user_capabilities:c.a.shape({destroy:c.a.bool}).isRequired}).isRequired},t.a=O},702:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(1),a=r.__importStar(o(0)),i=r.__importDefault(o(47)),n=o(2);t.CardFooter=e=>{var{children:t=null,className:o="",component:s="div"}=e,c=r.__rest(e,["children","className","component"]);const l=s;return a.createElement(l,Object.assign({className:n.css(i.default.cardFooter,o)},c),t)},t.CardFooter.displayName="CardFooter"},784:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var r=o(13),a=o.n(r),i=o(70),n=o.n(i),s=o(598);function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var p=function(e){var t=e.pathname,o=e.preserveSearch,r=e.id,a=n()(e,["pathname","preserveSearch","id"]);return{component:s.b.TOOLBAR_ITEM,key:"".concat(a.key,"/button-link"),fields:[{component:s.b.LINK,pathname:t,preserveSearch:o,key:"".concat(a.key,"/button-link"),isDisabled:a.isDisabled,id:r,fields:[l({component:s.b.BUTTON},a)]}]}}},951:function(e,t,o){"use strict";o.r(t);var r=o(13),a=o.n(r),i=o(69),n=o.n(i),s=o(26),c=o.n(s),l=o(0),p=o.n(l),u=o(4),d=o.n(u),f=o(85),m=o(19),b=o(601),h=o(70),y=o.n(h),P=o(281),g=o(53),O=o(294),v=o(282),R=o(598),E=o(784),j=o(577),k=o(576),w=o(689),I=o(18),_=o(34),C=o(9);function D(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?D(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var T=function(e){var t=e.editPortfolioRoute,o=e.workflowPortfolioRoute,r=e.removePortfolioRoute,a=e.copyInProgress,i=e.copyPortfolio,n=e.userCapabilities,s=n.copy,u=n.destroy,d=n.update,f=n.set_approval,m=Object(l.useState)(!1),b=c()(m,2),h=b[0],y=b[1],R=Object(I.a)(),E=[];if(d&&E.push(p.a.createElement(v.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio",id:"edit-portfolio",component:p.a.createElement(k.a,{id:"edit-portfolio",preserveSearch:!0,pathname:t},"Edit"),role:"link"})),s&&E.push(p.a.createElement(v.DropdownItem,{component:"button","aria-label":"Copy Portfolio",key:"copy-portfolio",id:"copy-portfolio",onClick:i},"Copy")),f&&E.push(p.a.createElement(v.DropdownItem,{"aria-label":"Set approval workflow",key:"set-approval-portfolio-action",id:"set-approval-portfolio-action",component:p.a.createElement(k.a,{preserveSearch:!0,pathname:o},"Set approval"),role:"link"})),window.insights.chrome.isBeta()&&d){var j=R(_.a.setOrderProcess);E.push(p.a.createElement(v.DropdownItem,{"aria-label":j,key:"attach-order-processes",id:"attach-order-processes",component:p.a.createElement(k.a,{preserveSearch:!0,pathname:C.h},j),role:"link"}))}return u&&E.push(p.a.createElement(v.DropdownItem,{"aria-label":"Remove Portfolio",key:"delete-portfolio",id:"delete-portfolio",component:p.a.createElement(k.a,{preserveSearch:!0,pathname:r},"Delete"),role:"link",className:"pf-c-dropdown__menu-item"})),0===E.length?null:p.a.createElement(P.Dropdown,{className:"pf-u-ml-md",onSelect:function(){return y(!1)},position:g.DropdownPosition.right,toggle:p.a.createElement(O.KebabToggle,{id:"toggle-portfolio-actions",onToggle:y,isDisabled:a}),isOpen:h,isPlain:!0,dropdownItems:E})};T.propTypes={removePortfolioRoute:d.a.string.isRequired,editPortfolioRoute:d.a.string.isRequired,workflowPortfolioRoute:d.a.string.isRequired,copyPortfolio:d.a.func.isRequired,copyInProgress:d.a.bool,userCapabilities:d.a.shape({copy:d.a.bool,update:d.a.bool,destroy:d.a.bool,set_approval:d.a.bool}).isRequired};var q=function(e){var t=e.title,o=e.addProductsRoute,r=e.copyPortfolio,a=e.sharePortfolioRoute,i=e.editPortfolioRoute,n=e.workflowPortfolioRoute,s=e.removePortfolioRoute,c=e.copyInProgress,l=e.isLoading,p=e.removeProducts,u=e.itemsSelected,d=e.meta,f=e.fetchPortfolioItemsWithPortfolio,m=e.portfolioId,b=e.description,h=e.fromProducts,P=e.filterProps,g=P.searchValue,O=P.onFilterChange,v=P.placeholder,k=e.userCapabilities,I=k.share,_=k.unshare,C=y()(k,["share","unshare"]);return{fields:[{component:R.b.TOP_TOOLBAR,breadcrumbs:!h,key:"portfolio-top-toolbar",fields:[{key:"back-to-products",hidden:!h,component:w.a},{component:R.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",noData:d.noData,title:t,description:b,fields:[{component:R.b.TOOLBAR,key:"portfolio-actions",noWrap:!0,fields:[Object(E.a)({pathname:a,preserveSearch:!0,variant:"secondary",title:"Share",isDisabled:c,key:"portfolio-share-button",id:"portfolio-share-button",hidden:!I&&!_}),{component:R.b.TOOLBAR_ITEM,key:"portfolio-actions-dropdown-item",fields:[{component:T,editPortfolioRoute:i,workflowPortfolioRoute:n,removePortfolioRoute:s,copyPortfolio:r,copyInProgress:c,userCapabilities:C,key:"portfolio-actions-dropdown"}]}]}]},{component:R.b.LEVEL,key:"portfolio-items-actions",fields:d.noData?[]:[{component:R.b.TOOLBAR,key:"portfolio-items-actions",fields:[{groupName:"filter-portfolio-items",component:R.b.FILTER_TOOLBAR_ITEM,isClearable:!0,key:"portfolio-items-filter",searchValue:g,onFilterChange:O,placeholder:v},S({hidden:0===d.count||!C.update,groupName:"add-portfolio-items",key:"portfolio-items-add-group"},Object(E.a)({preserveSearch:!0,pathname:o,isDisabled:l||c,variant:"primary",title:"Add",id:"add-products-button",key:"add-products-button"})),{component:R.b.TOOLBAR_ITEM,key:"remove-products-item",hidden:0===d.count||!C.update,fields:[{component:R.b.BUTTON,groupName:"remove-portfolio-items",variant:"link",title:"Remove",key:"remove-products-button",id:"remove-products-button",isDisabled:!u,onClick:p}]}]},{component:R.b.LEVEL_ITEM,key:"pagination-item",fields:d.count>0?[{component:j.a,key:"portfolio-items-pagination",meta:d,apiRequest:f,apiProps:m,isCompact:!0}]:[]}]}]}]}},N=o(580),F=o.n(N),L=o(648),B=o.n(L),A=o(596),M=o(132),W=o(578),V=o(48),H=function(e){var t=e.url,o=e.handleFilterChange,r=e.meta,a=e.userCapabilities.update,i=Object(I.a)(),n={PrimaryAction:r.noData?function(){return p.a.createElement(A.a,{url:t,label:i(V.a.addProducts),id:"add-products-to-portfolio",hasPermission:a})}:function(){return p.a.createElement(M.Button,{id:"clear-portfolio-filter",variant:"link",onClick:function(){return o("")}},i(W.a.clearFilters))},title:r.noData?i(W.a.noProducts):i(W.a.noResults),description:r.noData?i(V.a.emptyNoProducts):i(W.a.noResultsDescription),Icon:r.noData?B.a:F.a};return p.a.createElement(A.b,n)};H.propTypes={url:d.a.string.isRequired,handleFilterChange:d.a.func.isRequired,meta:d.a.shape({noData:d.a.bool}).isRequired,userCapabilities:d.a.shape({update:d.a.bool}).isRequired};var U=H,x=o(614),z=o(701),J=o(135),K=o(615),G=o(86);function Q(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function X(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Q(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var Y=function(e){var t=e.routes,o=e.handleFilterChange,r=e.removeProducts,a=e.copyPortfolio,i=e.stateDispatch,s=e.fromProducts,u=e.state,d=u.removeInProgress,h=u.isFetching,y=u.isFiltering,P=u.copyInProgress,g=u.selectedItems,O=u.filterValue,v=Object(I.a)(),R=Object(m.useSelector)((function(e){var t=e.portfolioReducer,o=t.portfolioItems,r=o.data,a=o.meta,i=t.selectedPortfolio;return{data:r,meta:a,name:i.name,description:i.description,userCapabilities:i.metadata.user_capabilities}})),E=R.data,k=R.meta,w=R.name,_=R.description,D=R.userCapabilities,S=Object(f.i)(C.y).url,T=Object(G.a)(["portfolio"]),N=c()(T,1)[0].portfolio,F=Object(m.useDispatch)(),L=E.map((function(e){return p.a.createElement(z.a,n()({key:e.id},e,{pathname:"".concat(S,"/portfolio-item"),searchParams:{source:e.service_offering_source_ref,"portfolio-item":e.id},preserveSearch:!0,isSelectable:D.update,onSelect:function(t){return i({type:"selectItem",payload:{selectedItem:t,product:e}})},isSelected:g.includes(e.id),removeInProgress:d}))}));return p.a.createElement(l.Fragment,null,p.a.createElement(b.a,{schema:q(X(X({fromProducts:s,filterProps:{searchValue:O,onFilterChange:o,placeholder:v(W.a.filterByProduct)},title:w,description:_},t),{},{copyPortfolio:a,isLoading:h||y,copyInProgress:P,removeProducts:function(){return r(g)},itemsSelected:g.length>0,meta:k,fetchPortfolioItemsWithPortfolio:function(){return F(J.f.apply(void 0,arguments))},portfolioId:N,userCapabilities:D}))}),p.a.createElement(x.a,{items:L,isLoading:h||y,renderEmptyState:function(){return p.a.createElement(U,{handleFilterChange:o,meta:k,userCapabilities:D,url:t.addProductsRoute})}}),k.count>0&&p.a.createElement(K.a,null,p.a.createElement(j.a,{dropDirection:"up",meta:k,apiProps:N,apiRequest:function(){return F(J.f.apply(void 0,arguments))}})))};Y.propTypes={routes:d.a.shape({addProductsRoute:d.a.string.isRequired,portfolioRoute:d.a.string.isRequired}).isRequired,handleFilterChange:d.a.func.isRequired,removeProducts:d.a.func.isRequired,copyPortfolio:d.a.func.isRequired,stateDispatch:d.a.func.isRequired,state:d.a.shape({removeInProgress:d.a.bool,isFetching:d.a.bool,isFiltering:d.a.bool,copyInProgress:d.a.bool,selectedItems:d.a.arrayOf(d.a.string),filterValue:d.a.string}).isRequired,fromProducts:d.a.bool};t.default=Y}}]);
//# sourceMappingURL=../sourcemaps/64.js.map