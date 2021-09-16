"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[3452],{3452:(e,o,t)=>{t.r(o),t.d(o,{default:()=>K});var r=t(96156),i=t(22122),n=t(28481),a=t(30624),s=t.n(a),l=t(45697),c=t.n(l),p=t(334),u=t(45237),d=t(66678),f=t(81253),m=t(22910),P=t(92512),h=t(60396),y=t(96823),b=t(91703),g=t(56824),O=t(77172),v=t(20697),R=t(21976),k=t(23349),E=t(29751),Z=t(36722),I=["share","unshare"];function w(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?w(Object(t),!0).forEach((function(o){(0,r.Z)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var D=function(e){var o=e.editPortfolioRoute,t=e.workflowPortfolioRoute,r=e.removePortfolioRoute,i=e.copyInProgress,l=e.copyPortfolio,c=e.userCapabilities,p=c.copy,u=c.destroy,d=c.update,f=c.set_approval,b=e.canLinkOrderProcesses,g=(0,a.useState)(!1),O=(0,n.Z)(g,2),R=O[0],I=O[1],w=(0,k.Z)(),C=[];if(d&&C.push(s().createElement(y.h,{"aria-label":"Edit Portfolio",key:"edit-portfolio",id:"edit-portfolio",component:s().createElement(v.Z,{id:"edit-portfolio",preserveSearch:!0,pathname:o},"Edit"),role:"link"})),p&&C.push(s().createElement(y.h,{component:"button","aria-label":"Copy Portfolio",key:"copy-portfolio",id:"copy-portfolio",onClick:l},"Copy")),f&&C.push(s().createElement(y.h,{"aria-label":"Set approval workflow",key:"set-approval-portfolio-action",id:"set-approval-portfolio-action",component:s().createElement(v.Z,{preserveSearch:!0,pathname:t},"Set approval"),role:"link"})),d&&b){var D=w(E.Z.setOrderProcess);C.push(s().createElement(y.h,{"aria-label":D,key:"attach-order-processes",id:"attach-order-processes",component:s().createElement(v.Z,{preserveSearch:!0,pathname:Z.OI},D),role:"link"}))}return u&&C.push(s().createElement(y.h,{"aria-label":"Remove Portfolio",key:"delete-portfolio",id:"delete-portfolio",component:s().createElement(v.Z,{preserveSearch:!0,pathname:r},"Delete"),role:"link",className:"pf-c-dropdown__menu-item"})),0===C.length?null:s().createElement(m.L,{className:"pf-u-ml-md",onSelect:function(){return I(!1)},position:P.DropdownPosition.right,toggle:s().createElement(h.a,{id:"toggle-portfolio-actions",onToggle:I,isDisabled:i}),isOpen:R,isPlain:!0,dropdownItems:C})};D.propTypes={removePortfolioRoute:c().string.isRequired,editPortfolioRoute:c().string.isRequired,workflowPortfolioRoute:c().string.isRequired,copyPortfolio:c().func.isRequired,copyInProgress:c().bool,userCapabilities:c().shape({copy:c().bool,update:c().bool,destroy:c().bool,set_approval:c().bool}).isRequired,canLinkOrderProcesses:c().bool};const S=function(e){var o=e.title,t=e.addProductsRoute,r=e.copyPortfolio,i=e.sharePortfolioRoute,n=e.editPortfolioRoute,a=e.workflowPortfolioRoute,s=e.removePortfolioRoute,l=e.copyInProgress,c=e.isLoading,p=e.removeProducts,u=e.itemsSelected,d=e.meta,m=e.fetchPortfolioItemsWithPortfolio,P=e.portfolioId,h=e.description,y=e.fromProducts,v=e.filterProps,k=v.searchValue,E=v.onFilterChange,Z=v.placeholder,w=e.userCapabilities,S=w.share,T=w.unshare,j=(0,f.Z)(w,I),L=e.canLinkOrderProcesses;return{fields:[{component:b.H.TOP_TOOLBAR,breadcrumbs:!y,key:"portfolio-top-toolbar",fields:[{key:"back-to-products",hidden:!y,component:R.Z},{component:b.H.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",noData:d.noData,title:o,description:h,fields:[{component:b.H.TOOLBAR,key:"portfolio-actions",noWrap:!0,fields:[(0,g.g)({pathname:i,preserveSearch:!0,variant:"secondary",title:"Share",isDisabled:l,key:"portfolio-share-button",id:"portfolio-share-button",hidden:!S&&!T}),{component:b.H.TOOLBAR_ITEM,key:"portfolio-actions-dropdown-item",fields:[{component:D,editPortfolioRoute:n,workflowPortfolioRoute:a,removePortfolioRoute:s,copyPortfolio:r,copyInProgress:l,userCapabilities:j,canLinkOrderProcesses:L,key:"portfolio-actions-dropdown"}]}]}]},{component:b.H.LEVEL,key:"portfolio-items-actions",fields:d.noData?[]:[{component:b.H.TOOLBAR,key:"portfolio-items-actions",fields:[{groupName:"filter-portfolio-items",component:b.H.FILTER_TOOLBAR_ITEM,isClearable:!0,key:"portfolio-items-filter",searchValue:k,onFilterChange:E,placeholder:Z},C({hidden:0===d.count||!j.update,groupName:"add-portfolio-items",key:"portfolio-items-add-group"},(0,g.g)({preserveSearch:!0,pathname:t,isDisabled:c||l,variant:"primary",title:"Add",id:"add-products-button",key:"add-products-button"})),{component:b.H.TOOLBAR_ITEM,key:"remove-products-item",hidden:0===d.count||!j.update,fields:[{component:b.H.BUTTON,groupName:"remove-portfolio-items",variant:"link",title:"Remove",key:"remove-products-button",id:"remove-products-button",isDisabled:!u,onClick:p}]}]},{component:b.H.LEVEL_ITEM,key:"pagination-item",fields:d.count>0?[{component:O.Z,key:"portfolio-items-pagination",meta:d,apiRequest:m,apiProps:P,isCompact:!0}]:[]}]}]}]}};var T=t(48794),j=t(20777),L=t(33188),q=t(6202),F=t(97881),_=t(64466),B=function(e){var o=e.url,t=e.handleFilterChange,r=e.meta,i=e.userCapabilities.update,n=(0,k.Z)(),a={PrimaryAction:r.noData?function(){return s().createElement(L._,{url:o,label:n(_.Z.addProducts),id:"add-products-to-portfolio",hasPermission:i})}:function(){return s().createElement(q.Button,{id:"clear-portfolio-filter",ouiaId:"clear-portfolio-filter",variant:"link",onClick:function(){return t("")}},n(F.Z.clearFilters))},title:r.noData?n(F.Z.noProducts):n(F.Z.noResults),description:r.noData?n(_.Z.emptyNoProducts):n(F.Z.noResultsDescription),Icon:r.noData?j.ZP:T.ZP};return s().createElement(L.Z,a)};B.propTypes={url:c().string.isRequired,handleFilterChange:c().func.isRequired,meta:c().shape({noData:c().bool}).isRequired,userCapabilities:c().shape({update:c().bool}).isRequired};const H=B;var A=t(59837),V=t(59797),N=t(89231),M=t(92183),W=t(47786),x=t(72510),U=t(63035);function z(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?z(Object(t),!0).forEach((function(o){(0,r.Z)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var J=function(e){var o=e.routes,t=e.handleFilterChange,r=e.removeProducts,l=e.copyPortfolio,c=e.stateDispatch,f=e.fromProducts,m=e.state,P=m.removeInProgress,h=m.isFetching,y=m.isFiltering,b=m.copyInProgress,g=m.selectedItems,v=m.filterValue,R=(0,k.Z)(),E=(0,u.useSelector)((function(e){var o=e.portfolioReducer,t=o.portfolioItems,r=t.data,i=t.meta,n=o.selectedPortfolio;return{data:r,meta:i,name:n.name,description:n.description,userCapabilities:n.metadata.user_capabilities}})),I=E.data,w=E.meta,C=E.name,D=E.description,T=E.userCapabilities,j=(0,p.useRouteMatch)(Z.hT).url,L=(0,W.Z)(["portfolio"]),q=(0,n.Z)(L,1)[0].portfolio,_=(0,u.useDispatch)(),B=(0,a.useContext)(x.Z).permissions,z=(0,U.Fs)(B,["catalog:order_processes:link"]),J=I.map((function(e){return s().createElement(V.Z,(0,i.Z)({key:e.id},e,{pathname:"".concat(j,"/portfolio-item"),searchParams:{source:e.service_offering_source_ref,"portfolio-item":e.id},preserveSearch:!0,isSelectable:T.update,onSelect:function(o){return c({type:"selectItem",payload:{selectedItem:o,product:e}})},isSelected:g.includes(e.id),removeInProgress:P}))}));return s().createElement(a.Fragment,null,s().createElement(d.Z,{schema:S(G(G({fromProducts:f,filterProps:{searchValue:v,onFilterChange:t,placeholder:R(F.Z.filterByProduct)},title:C,description:D},o),{},{copyPortfolio:l,isLoading:h||y,copyInProgress:b,removeProducts:function(){return r(g)},itemsSelected:g.length>0,meta:w,fetchPortfolioItemsWithPortfolio:function(){return _(N.cP.apply(void 0,arguments))},portfolioId:q,userCapabilities:T,canLinkOrderProcesses:z}))}),s().createElement(A.Z,{items:J,isLoading:h||y,renderEmptyState:function(){return s().createElement(H,{handleFilterChange:t,meta:w,userCapabilities:T,url:o.addProductsRoute})}}),w.count>0&&s().createElement(M.Z,null,s().createElement(O.Z,{dropDirection:"up",meta:w,apiProps:q,apiRequest:function(){return _(N.cP.apply(void 0,arguments))}})))};J.propTypes={routes:c().shape({addProductsRoute:c().string.isRequired,portfolioRoute:c().string.isRequired}).isRequired,handleFilterChange:c().func.isRequired,removeProducts:c().func.isRequired,copyPortfolio:c().func.isRequired,stateDispatch:c().func.isRequired,state:c().shape({removeInProgress:c().bool,isFetching:c().bool,isFiltering:c().bool,copyInProgress:c().bool,selectedItems:c().arrayOf(c().string),filterValue:c().string}).isRequired,fromProducts:c().bool},J.defaultProps={state:{removeInProgress:!1,isFetching:!1,isFiltering:!1,copyInProgress:!1,selectedItems:[],filterValue:void 0}};const K=J}}]);