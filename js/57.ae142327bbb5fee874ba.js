(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{430:function(e,t,o){"use strict";var r=o(425),a=o.n(r),n=o(49),i=o.n(n),s=o(0),c=o.n(s),l=o(11),p=o.n(l),u=o(427),d=o(203),f=o(66),m=function(e){var t=e.meta,o=t.limit,r=t.count,n=t.offset,s=e.apiProps,l=e.apiRequest,p=e.className,m=e.isCompact,b=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return c.a.createElement("div",{className:p},c.a.createElement(d.Pagination,a()({perPage:o||50,itemCount:r||0,onPerPageSelect:function(e,t){return l(s,{offset:n,limit:t})},page:Object(f.b)(o,n),onSetPage:function(e,t,r){var a={offset:Object(f.c)(t,o),limit:o},n=function(){return l(s,a)};return r?Object(u.a)(n,250)():n()},direction:"down",isCompact:m},b)))};m.propTypes={meta:p.a.shape({count:p.a.number,limit:p.a.number.isRequired,offset:p.a.number.isRequired}),apiRequest:p.a.func.isRequired,apiProps:p.a.any,className:p.a.string,isCompact:p.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},438:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(2),a=r.__importStar(o(0)),n=r.__importDefault(o(210)),i=o(4),s=()=>{};class c extends a.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:o,onChange:c,isValid:l,isDisabled:p,isChecked:u,label:d,checked:f,defaultChecked:m,description:b}=e,h=r.__rest(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),g={};return([!0,!1].includes(f)||!0===u)&&(g.checked=f||u),c!==s&&(g.checked=u),[!1,!0].includes(m)&&(g.defaultChecked=m),g.checked=null!==g.checked&&g.checked,a.createElement("div",{className:i.css(n.default.check,o)},a.createElement("input",Object.assign({},h,{className:i.css(n.default.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:p,ref:e=>e&&(e.indeterminate=null===u)},g)),d&&a.createElement("label",{className:i.css(n.default.checkLabel,p&&n.default.modifiers.disabled),htmlFor:h.id},d),b&&a.createElement("div",{className:i.css(n.default.checkDescription)},b))}}t.Checkbox=c,c.displayName="Checkbox",c.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s}},449:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(11),i=o.n(n),s=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};s.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=s},483:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(11),i=o.n(n),s=o(438),c=function(e){var t=e.handleCheck,o=e.isChecked,r=e.id;return a.a.createElement(s.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:o,onChange:t,"aria-label":"card checkbox",id:r})};c.propTypes={handleCheck:i.a.func,isChecked:i.a.bool,id:i.a.string},t.a=c},484:function(e,t,o){"use strict";var r=o(1),a=o.n(r),n=o(425),i=o.n(n),s=o(49),c=o.n(s),l=o(0),p=o.n(l),u=o(11),d=o.n(u),f=o(43),m=o(65),b=o(488),h=o(505),g=o(489),y=o(490),P=function(e){var t=e.name,o=(e.display_name,e.distributor),r=e.pathname,a=e.searchParams,n=e.preserveSearch,s=e.portfolioName,u=c()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return p.a.createElement(y.a,null,p.a.createElement(m.TextContent,null,p.a.createElement(h.a,{pathname:r,searchParams:a,preserveSearch:n},p.a.createElement(f.Text,{component:f.TextVariants.h3,title:t},p.a.createElement(g.a,null,t))),o&&p.a.createElement(f.Text,{component:f.TextVariants.small},o),s&&p.a.createElement(l.Fragment,null,p.a.createElement(f.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),p.a.createElement(f.Text,null,s))),p.a.createElement(b.a,i()({toDisplay:[u.description?"description":"long_description"]},u)))};P.propTypes={name:d.a.string,display_name:d.a.string,distributor:d.a.string,long_description:d.a.string,description:d.a.string,pathname:d.a.string,preserveSearch:d.a.bool,searchParams:d.a.shape(a()({},d.a.string,d.a.string)),portfolioName:d.a.string},t.a=P},507:function(e,t,o){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0,transform:""},t.WrenchIcon=o(201).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},509:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var r=o(1),a=o.n(r),n=o(49),i=o.n(n),s=o(442);function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var p=function(e){var t=e.pathname,o=e.preserveSearch,r=i()(e,["pathname","preserveSearch"]);return{component:s.b.TOOLBAR_ITEM,key:"".concat(r.key,"/button-link"),fields:[{component:s.b.LINK,pathname:t,preserveSearch:o,key:"".concat(r.key,"/button-link"),isDisabled:r.isDisabled,fields:[l({component:s.b.BUTTON},r)]}]}}},547:function(e,t,o){"use strict";var r=o(22),a=o.n(r),n=o(0),i=o.n(n),s=o(11),c=o.n(s),l=o(467),p=o(492),u=o(85),d=o(13),f=o(466),m=o(483),b=o(484),h=o(491),g=o(23);function y(){var e=a()(["\n  flex: 1;\n"]);return y=function(){return e},e}var P=Object(g.b)(u.Level)(y()),v=function(e){return i.a.createElement(h.b,{isDisabled:e.removeInProgress&&e.isSelected},i.a.createElement(h.a,null,i.a.createElement(l.CardHeader,null,i.a.createElement(P,null,i.a.createElement(f.a,{src:"".concat(d.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&i.a.createElement(m.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),i.a.createElement(b.a,e),i.a.createElement(p.CardFooter,null)))};v.propTypes={id:c.a.string,platformId:c.a.string,service_offering_source_ref:c.a.string,isSelectable:c.a.bool,isSelected:c.a.bool,onSelect:c.a.func,orderUrl:c.a.string,removeInProgress:c.a.bool,portfolio_id:c.a.string,metadata:c.a.shape({user_capabilities:c.a.shape({destroy:c.a.bool}).isRequired}).isRequired},t.a=v},862:function(e,t,o){"use strict";o.r(t);var r=o(1),a=o.n(r),n=o(425),i=o.n(n),s=o(33),c=o.n(s),l=o(0),p=o.n(l),u=o(11),d=o.n(u),f=o(53),m=o(26),b=o(453),h=o(49),g=o.n(h),y=o(204),P=o(27),v=o(209),O=o(205),k=o(442),E=o(509),C=o(430),R=o(432),j=o(523);function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var I=function(e){var t=e.editPortfolioRoute,o=e.workflowPortfolioRoute,r=e.removePortfolioRoute,a=e.copyInProgress,n=e.copyPortfolio,i=e.userCapabilities,s=i.copy,u=i.destroy,d=i.update,f=i.set_approval,m=Object(l.useState)(!1),b=c()(m,2),h=b[0],g=b[1],k=[];return s&&k.push(p.a.createElement(O.DropdownItem,{component:"button","aria-label":"Copy Portfolio",key:"copy-portfolio",id:"copy-portfolio",onClick:n},"Copy")),f&&k.push(p.a.createElement(O.DropdownItem,{"aria-label":"Set approval workflow",key:"set-approval-portfolio-action",id:"set-approval-portfolio-action",component:p.a.createElement(R.a,{preserveSearch:!0,pathname:o},"Set approval"),role:"link"})),d&&k.push(p.a.createElement(O.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio",id:"edit-portfolio",component:p.a.createElement(R.a,{id:"edit-portfolio",preserveSearch:!0,pathname:t},"Edit"),role:"link"})),u&&k.push(p.a.createElement(O.DropdownItem,{"aria-label":"Remove Portfolio",key:"delete-portfolio",id:"delete-portfolio",component:p.a.createElement(R.a,{preserveSearch:!0,pathname:r},"Delete"),role:"link",className:"pf-c-dropdown__menu-item"})),0===k.length?null:p.a.createElement(y.Dropdown,{className:"pf-u-ml-md",onSelect:function(){return g(!1)},position:P.DropdownPosition.right,toggle:p.a.createElement(v.KebabToggle,{id:"toggle-portfolio-actions",onToggle:g,isDisabled:a}),isOpen:h,isPlain:!0,dropdownItems:k})};I.propTypes={removePortfolioRoute:d.a.string.isRequired,editPortfolioRoute:d.a.string.isRequired,workflowPortfolioRoute:d.a.string.isRequired,copyPortfolio:d.a.func.isRequired,copyInProgress:d.a.bool,userCapabilities:d.a.shape({copy:d.a.bool,update:d.a.bool,destroy:d.a.bool,set_approval:d.a.bool}).isRequired};var S=function(e){var t=e.title,o=e.addProductsRoute,r=e.copyPortfolio,a=e.sharePortfolioRoute,n=e.editPortfolioRoute,i=e.workflowPortfolioRoute,s=e.removePortfolioRoute,c=e.copyInProgress,l=e.isLoading,p=e.removeProducts,u=e.itemsSelected,d=e.meta,f=e.fetchPortfolioItemsWithPortfolio,m=e.portfolioId,b=e.description,h=e.fromProducts,y=e.filterProps,P=y.searchValue,v=y.onFilterChange,O=y.placeholder,R=e.userCapabilities,w=R.share,S=R.unshare,T=g()(R,["share","unshare"]);return{fields:[{component:k.b.TOP_TOOLBAR,breadcrumbs:!h,key:"portfolio-top-toolbar",fields:[{key:"back-to-products",hidden:!h,component:j.a},{component:k.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",noData:d.noData,title:t,description:b,fields:[{component:k.b.TOOLBAR,key:"portfolio-actions",noWrap:!0,fields:[Object(E.a)({pathname:a,preserveSearch:!0,variant:"secondary",title:"Share",isDisabled:c,key:"portfolio-share-button",id:"portfolio-share-button",hidden:!w&&!S}),{component:k.b.TOOLBAR_ITEM,key:"portfolio-actions-dropdown-item",fields:[{component:I,editPortfolioRoute:n,workflowPortfolioRoute:i,removePortfolioRoute:s,copyPortfolio:r,copyInProgress:c,userCapabilities:T,key:"portfolio-actions-dropdown"}]}]}]},{component:k.b.LEVEL,key:"portfolio-items-actions",fields:d.noData?[]:[{component:k.b.TOOLBAR,key:"portfolio-items-actions",fields:[{groupName:"filter-portfolio-items",component:k.b.FILTER_TOOLBAR_ITEM,isClearable:!0,key:"portfolio-items-filter",searchValue:P,onFilterChange:v,placeholder:O},D({hidden:0===d.count||!T.update,groupName:"add-portfolio-items",key:"portfolio-items-add-group"},Object(E.a)({preserveSearch:!0,pathname:o,isDisabled:l||c,variant:"primary",title:"Add",key:"add-products-button"})),{component:k.b.TOOLBAR_ITEM,key:"remove-products-item",hidden:0===d.count||!T.update,fields:[{component:k.b.BUTTON,groupName:"remove-portfolio-items",variant:"link",title:"Remove",key:"remove-products-button",id:"remove-products-button",isDisabled:!u,onClick:p}]}]},{component:k.b.LEVEL_ITEM,key:"pagination-item",fields:d.count>0?[{component:C.a,key:"portfolio-items-pagination",meta:d,apiRequest:f,apiProps:m,isCompact:!0}]:[]}]}]}]}},T=o(445),_=o.n(T),q=o(507),N=o.n(q),L=o(468),F=o(67),x=o(82),B=o(448),V=o(435),M=function(e){var t=e.url,o=e.handleFilterChange,r=e.meta,a=e.userCapabilities.update,n=Object(x.a)().formatMessage,i={PrimaryAction:r.noData?function(){return p.a.createElement(L.a,{url:t,label:n(V.a.addProducts),id:"add-products-to-portfolio",hasPermission:a})}:function(){return p.a.createElement(F.Button,{id:"clear-portfolio-filter",variant:"link",onClick:function(){return o("")}},n(B.a.clearFilters))},title:r.noData?n(B.a.noProducts):n(B.a.noResults),description:r.noData?n(V.a.emptyNoProducts):n(B.a.noResultsDescription),Icon:r.noData?N.a:_.a};return p.a.createElement(L.b,i)};M.propTypes={url:d.a.string.isRequired,handleFilterChange:d.a.func.isRequired,meta:d.a.shape({noData:d.a.bool}).isRequired,userCapabilities:d.a.shape({update:d.a.bool}).isRequired};var A=M,W=o(493),U=o(547),z=o(444),J=o(449),K=o(68),H=o(10);function G(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Q(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?G(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):G(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var X=function(e){var t=e.routes,o=e.handleFilterChange,r=e.removeProducts,a=e.copyPortfolio,n=e.stateDispatch,s=e.fromProducts,u=e.state,d=u.removeInProgress,h=u.isFetching,g=u.isFiltering,y=u.copyInProgress,P=u.selectedItems,v=u.filterValue,O=Object(x.a)().formatMessage,k=Object(m.useSelector)((function(e){var t=e.portfolioReducer,o=t.portfolioItems,r=o.data,a=o.meta,n=t.selectedPortfolio;return{data:r,meta:a,name:n.name,description:n.description,userCapabilities:n.metadata.user_capabilities}})),E=k.data,R=k.meta,j=k.name,w=k.description,D=k.userCapabilities,I=Object(f.i)(H.u).url,T=Object(K.a)(["portfolio"]),_=c()(T,1)[0].portfolio,q=Object(m.useDispatch)(),N=E.map((function(e){return p.a.createElement(U.a,i()({key:e.id},e,{pathname:"".concat(I,"/portfolio-item"),searchParams:{source:e.service_offering_source_ref,"portfolio-item":e.id},preserveSearch:!0,isSelectable:D.update,onSelect:function(e){return n({type:"selectItem",payload:e})},isSelected:P.includes(e.id),removeInProgress:d}))}));return p.a.createElement(l.Fragment,null,p.a.createElement(b.a,{schema:S(Q(Q({fromProducts:s,filterProps:{searchValue:v,onFilterChange:o,placeholder:O(B.a.filterByProduct)},title:j,description:w},t),{},{copyPortfolio:a,isLoading:h||g,copyInProgress:y,removeProducts:function(){return r(P)},itemsSelected:P.length>0,meta:R,fetchPortfolioItemsWithPortfolio:function(){return q(z.f.apply(void 0,arguments))},portfolioId:_,userCapabilities:D}))}),p.a.createElement(W.a,{items:N,isLoading:h||g,renderEmptyState:function(){return p.a.createElement(A,{handleFilterChange:o,meta:R,userCapabilities:D,url:t.addProductsRoute})}}),R.count>0&&p.a.createElement(J.a,null,p.a.createElement(C.a,{dropDirection:"up",meta:R,apiProps:_,apiRequest:function(){return q(z.f.apply(void 0,arguments))}})))};X.propTypes={routes:d.a.shape({addProductsRoute:d.a.string.isRequired,portfolioRoute:d.a.string.isRequired}).isRequired,handleFilterChange:d.a.func.isRequired,removeProducts:d.a.func.isRequired,copyPortfolio:d.a.func.isRequired,stateDispatch:d.a.func.isRequired,state:d.a.shape({removeInProgress:d.a.bool,isFetching:d.a.bool,isFiltering:d.a.bool,copyInProgress:d.a.bool,selectedItems:d.a.arrayOf(d.a.string),filterValue:d.a.string}).isRequired,fromProducts:d.a.bool};t.default=X}}]);
//# sourceMappingURL=../sourcemaps/57.js.map