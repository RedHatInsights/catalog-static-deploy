(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{389:function(e,t,o){"use strict";var r=o(385),a=o.n(r),n=o(45),i=o.n(n),s=o(0),c=o.n(s),l=o(12),p=o.n(l),u=o(386),d=o(186),f=o(59),m=function(e){var t=e.meta,o=t.limit,r=t.count,n=t.offset,s=e.apiProps,l=e.apiRequest,p=e.className,m=e.isCompact,b=i()(e,["meta","apiProps","apiRequest","className","isCompact"]);return c.a.createElement("div",{className:p},c.a.createElement(d.Pagination,a()({perPage:o||50,itemCount:r||0,onPerPageSelect:function(e,t){return l(s,{offset:n,limit:t})},page:Object(f.b)(o,n),onSetPage:function(e,t,r){var a={offset:Object(f.c)(t,o),limit:o},n=function(){return l(s,a)};return r?Object(u.a)(n,250)():n()},direction:"down",isCompact:m},b)))};m.propTypes={meta:p.a.shape({count:p.a.number,limit:p.a.number.isRequired,offset:p.a.number.isRequired}),apiRequest:p.a.func.isRequired,apiProps:p.a.any,className:p.a.string,isCompact:p.a.bool},m.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=m},397:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o(3),a=r.__importStar(o(0)),n=r.__importDefault(o(192)),i=o(4),s=()=>{};class c extends a.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:o,onChange:c,isValid:l,isDisabled:p,isChecked:u,label:d,checked:f,defaultChecked:m,description:b}=e,h=r.__rest(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]),g={};return([!0,!1].includes(f)||!0===u)&&(g.checked=f||u),c!==s&&(g.checked=u),[!1,!0].includes(m)&&(g.defaultChecked=m),g.checked=null!==g.checked&&g.checked,a.createElement("div",{className:i.css(n.default.check,o)},a.createElement("input",Object.assign({},h,{className:i.css(n.default.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:p,ref:e=>e&&(e.indeterminate=null===u)},g)),d&&a.createElement("label",{className:i.css(n.default.checkLabel,p&&n.default.modifiers.disabled),htmlFor:h.id},d),b&&a.createElement("div",{className:i.css(n.default.checkDescription)},b))}}t.Checkbox=c,c.displayName="Checkbox",c.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s}},406:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(12),i=o.n(n),s=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};s.propTypes={children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])},t.a=s},436:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(12),i=o.n(n),s=o(397),c=function(e){var t=e.handleCheck,o=e.isChecked,r=e.id;return a.a.createElement(s.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:o,onChange:t,"aria-label":"card checkbox",id:r})};c.propTypes={handleCheck:i.a.func,isChecked:i.a.bool,id:i.a.string},t.a=c},437:function(e,t,o){"use strict";var r=o(1),a=o.n(r),n=o(385),i=o.n(n),s=o(45),c=o.n(s),l=o(0),p=o.n(l),u=o(12),d=o.n(u),f=o(40),m=o(58),b=o(438),h=o(456),g=o(439),y=o(440),P=function(e){var t=e.name,o=(e.display_name,e.distributor),r=e.pathname,a=e.searchParams,n=e.preserveSearch,s=e.portfolioName,u=c()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return p.a.createElement(y.a,null,p.a.createElement(m.TextContent,null,p.a.createElement(h.a,{pathname:r,searchParams:a,preserveSearch:n},p.a.createElement(f.Text,{component:f.TextVariants.h3,title:t},p.a.createElement(g.a,null,t))),o&&p.a.createElement(f.Text,{component:f.TextVariants.small},o),s&&p.a.createElement(l.Fragment,null,p.a.createElement(f.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),p.a.createElement(f.Text,null,s))),p.a.createElement(b.a,i()({toDisplay:[u.description?"description":"long_description"]},u)))};P.propTypes={name:d.a.string,display_name:d.a.string,distributor:d.a.string,long_description:d.a.string,description:d.a.string,pathname:d.a.string,preserveSearch:d.a.bool,searchParams:d.a.shape(a()({},d.a.string,d.a.string)),portfolioName:d.a.string},t.a=P},457:function(e,t,o){"use strict";t.__esModule=!0,t.WrenchIconConfig={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0,transform:""},t.WrenchIcon=o(183).createIcon(t.WrenchIconConfig),t.default=t.WrenchIcon},459:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var r=o(1),a=o.n(r),n=o(45),i=o.n(n),s=o(400);function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var p=function(e){var t=e.pathname,o=e.preserveSearch,r=i()(e,["pathname","preserveSearch"]);return{component:s.b.TOOLBAR_ITEM,key:"".concat(r.key,"/button-link"),fields:[{component:s.b.LINK,pathname:t,preserveSearch:o,key:"".concat(r.key,"/button-link"),isDisabled:r.isDisabled,fields:[l({component:s.b.BUTTON},r)]}]}}},489:function(e,t,o){"use strict";var r=o(23),a=o.n(r),n=o(0),i=o.n(n),s=o(12),c=o.n(s),l=o(412),p=o(442),u=o(76),d=o(14),f=o(423),m=o(436),b=o(437),h=o(441),g=o(24);function y(){var e=a()(["\n  flex: 1;\n"]);return y=function(){return e},e}var P=Object(g.b)(u.Level)(y()),v=function(e){return i.a.createElement(h.b,{isDisabled:e.removeInProgress&&e.isSelected},i.a.createElement(h.a,null,i.a.createElement(l.CardHeader,null,i.a.createElement(P,null,i.a.createElement(f.a,{src:"".concat(d.c,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&i.a.createElement(m.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),i.a.createElement(b.a,e),i.a.createElement(p.CardFooter,null)))};v.propTypes={id:c.a.string,platformId:c.a.string,service_offering_source_ref:c.a.string,isSelectable:c.a.bool,isSelected:c.a.bool,onSelect:c.a.func,orderUrl:c.a.string,removeInProgress:c.a.bool,portfolio_id:c.a.string,metadata:c.a.shape({user_capabilities:c.a.shape({destroy:c.a.bool}).isRequired}).isRequired},t.a=v},697:function(e,t,o){"use strict";o.r(t);var r=o(1),a=o.n(r),n=o(385),i=o.n(n),s=o(34),c=o.n(s),l=o(0),p=o.n(l),u=o(12),d=o.n(u),f=o(48),m=o(26),b=o(410),h=o(45),g=o.n(h),y=o(187),P=o(29),v=o(190),O=o(185),k=o(400),E=o(459),C=o(389),R=o(394);function j(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?j(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var D=function(e){var t=e.editPortfolioRoute,o=e.workflowPortfolioRoute,r=e.removePortfolioRoute,a=e.copyInProgress,n=e.copyPortfolio,i=e.userCapabilities,s=i.copy,u=i.destroy,d=i.update,f=i.set_approval,m=Object(l.useState)(!1),b=c()(m,2),h=b[0],g=b[1],k=[];return s&&k.push(p.a.createElement(O.DropdownItem,{component:"button","aria-label":"Copy Portfolio",key:"copy-portfolio",id:"copy-portfolio",onClick:n},"Copy")),f&&k.push(p.a.createElement(O.DropdownItem,{"aria-label":"Set approval workflow",key:"set-approval-portfolio-action",id:"set-approval-portfolio-action",component:p.a.createElement(R.a,{preserveSearch:!0,pathname:o},"Set approval"),role:"link"})),d&&k.push(p.a.createElement(O.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio",id:"edit-portfolio",component:p.a.createElement(R.a,{id:"edit-portfolio",preserveSearch:!0,pathname:t},"Edit"),role:"link"})),u&&k.push(p.a.createElement(O.DropdownItem,{"aria-label":"Remove Portfolio",key:"delete-portfolio",id:"delete-portfolio",component:p.a.createElement(R.a,{preserveSearch:!0,pathname:r},"Delete"),role:"link",className:"pf-c-dropdown__menu-item"})),0===k.length?null:p.a.createElement(y.Dropdown,{className:"pf-u-ml-md",onSelect:function(){return g(!1)},position:P.DropdownPosition.right,toggle:p.a.createElement(v.KebabToggle,{id:"toggle-portfolio-actions",onToggle:g,isDisabled:a}),isOpen:h,isPlain:!0,dropdownItems:k})};D.propTypes={removePortfolioRoute:d.a.string.isRequired,editPortfolioRoute:d.a.string.isRequired,workflowPortfolioRoute:d.a.string.isRequired,copyPortfolio:d.a.func.isRequired,copyInProgress:d.a.bool,userCapabilities:d.a.shape({copy:d.a.bool,update:d.a.bool,destroy:d.a.bool,set_approval:d.a.bool}).isRequired};var I=function(e){var t=e.title,o=e.addProductsRoute,r=e.copyPortfolio,a=e.sharePortfolioRoute,n=e.editPortfolioRoute,i=e.workflowPortfolioRoute,s=e.removePortfolioRoute,c=e.copyInProgress,l=e.isLoading,p=e.removeProducts,u=e.itemsSelected,d=e.meta,f=e.fetchPortfolioItemsWithPortfolio,m=e.portfolioId,b=e.description,h=e.filterProps,y=h.searchValue,P=h.onFilterChange,v=h.placeholder,O=e.userCapabilities,R=O.share,j=O.unshare,I=g()(O,["share","unshare"]);return{fields:[{component:k.b.TOP_TOOLBAR,key:"portfolio-top-toolbar",fields:[{component:k.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",noData:d.noData,title:t,description:b,fields:[{component:k.b.TOOLBAR,key:"portfolio-actions",noWrap:!0,fields:[Object(E.a)({pathname:a,preserveSearch:!0,variant:"secondary",title:"Share",isDisabled:c,key:"portfolio-share-button",id:"portfolio-share-button",hidden:!R&&!j}),{component:k.b.TOOLBAR_ITEM,key:"portfolio-actions-dropdown-item",fields:[{component:D,editPortfolioRoute:n,workflowPortfolioRoute:i,removePortfolioRoute:s,copyPortfolio:r,copyInProgress:c,userCapabilities:I,key:"portfolio-actions-dropdown"}]}]}]},{component:k.b.LEVEL,key:"portfolio-items-actions",fields:d.noData?[]:[{component:k.b.TOOLBAR,key:"portfolio-items-actions",fields:[{groupName:"filter-portfolio-items",component:k.b.FILTER_TOOLBAR_ITEM,isClearable:!0,key:"portfolio-items-filter",searchValue:y,onFilterChange:P,placeholder:v},w({hidden:0===d.count||!I.update,groupName:"add-portfolio-items",key:"portfolio-items-add-group"},Object(E.a)({preserveSearch:!0,pathname:o,isDisabled:l||c,variant:"primary",title:"Add",key:"add-products-button"})),{component:k.b.TOOLBAR_ITEM,key:"remove-products-item",hidden:0===d.count||!I.update,fields:[{component:k.b.BUTTON,groupName:"remove-portfolio-items",variant:"link",title:"Remove",key:"remove-products-button",id:"remove-products-button",isDisabled:!u,onClick:p}]}]},{component:k.b.LEVEL_ITEM,key:"pagination-item",fields:d.count>0?[{component:C.a,key:"portfolio-items-pagination",meta:d,apiRequest:f,apiProps:m,isCompact:!0}]:[]}]}]}]}},S=o(404),T=o.n(S),_=o(457),q=o.n(_),N=o(414),L=o(60),F=o(73),x=o(398),B=o(395),V=function(e){var t=e.url,o=e.handleFilterChange,r=e.meta,a=e.userCapabilities.update,n=Object(F.a)().formatMessage,i={PrimaryAction:r.noData?function(){return p.a.createElement(N.a,{url:t,label:n(B.a.addProducts),id:"add-products-to-portfolio",hasPermission:a})}:function(){return p.a.createElement(L.Button,{id:"clear-portfolio-filter",variant:"link",onClick:function(){return o("")}},n(x.a.clearFilters))},title:r.noData?n(x.a.noProducts):n(x.a.noResults),description:r.noData?n(B.a.emptyNoProducts):n(x.a.noResultsDescription),Icon:r.noData?q.a:T.a};return p.a.createElement(N.b,i)};V.propTypes={url:d.a.string.isRequired,handleFilterChange:d.a.func.isRequired,meta:d.a.shape({noData:d.a.bool}).isRequired,userCapabilities:d.a.shape({update:d.a.bool}).isRequired};var M=V,A=o(443),W=o(489),U=o(402),z=o(406),J=o(61),K=o(11);function H(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function G(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?H(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):H(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var Q=function(e){var t=e.routes,o=e.handleFilterChange,r=e.removeProducts,a=e.copyPortfolio,n=e.stateDispatch,s=e.state,u=s.removeInProgress,d=s.isFetching,h=s.isFiltering,g=s.copyInProgress,y=s.selectedItems,P=s.filterValue,v=Object(F.a)().formatMessage,O=Object(m.useSelector)((function(e){var t=e.portfolioReducer,o=t.portfolioItems,r=o.data,a=o.meta,n=t.selectedPortfolio;return{data:r,meta:a,name:n.name,description:n.description,userCapabilities:n.metadata.user_capabilities}})),k=O.data,E=O.meta,R=O.name,j=O.description,w=O.userCapabilities,D=Object(f.i)(K.u).url,S=Object(J.a)(["portfolio"]),T=c()(S,1)[0].portfolio,_=Object(m.useDispatch)(),q=k.map((function(e){return p.a.createElement(W.a,i()({key:e.id},e,{pathname:"".concat(D,"/portfolio-item"),searchParams:{source:e.service_offering_source_ref,"portfolio-item":e.id},preserveSearch:!0,isSelectable:w.update,onSelect:function(e){return n({type:"selectItem",payload:e})},isSelected:y.includes(e.id),removeInProgress:u}))}));return p.a.createElement(l.Fragment,null,p.a.createElement(b.a,{schema:I(G(G({filterProps:{searchValue:P,onFilterChange:o,placeholder:v(x.a.filterByProduct)},title:R,description:j},t),{},{copyPortfolio:a,isLoading:d||h,copyInProgress:g,removeProducts:function(){return r(y)},itemsSelected:y.length>0,meta:E,fetchPortfolioItemsWithPortfolio:function(){return _(U.f.apply(void 0,arguments))},portfolioId:T,userCapabilities:w}))}),p.a.createElement(A.a,{items:q,isLoading:d||h,renderEmptyState:function(){return p.a.createElement(M,{handleFilterChange:o,meta:E,userCapabilities:w,url:t.addProductsRoute})}}),E.count>0&&p.a.createElement(z.a,null,p.a.createElement(C.a,{dropDirection:"up",meta:E,apiProps:T,apiRequest:function(){return _(U.f.apply(void 0,arguments))}})))};Q.propTypes={routes:d.a.shape({addProductsRoute:d.a.string.isRequired,portfolioRoute:d.a.string.isRequired}).isRequired,handleFilterChange:d.a.func.isRequired,removeProducts:d.a.func.isRequired,copyPortfolio:d.a.func.isRequired,stateDispatch:d.a.func.isRequired,state:d.a.shape({removeInProgress:d.a.bool,isFetching:d.a.bool,isFiltering:d.a.bool,copyInProgress:d.a.bool,selectedItems:d.a.arrayOf(d.a.string),filterValue:d.a.string}).isRequired};t.default=Q}}]);
//# sourceMappingURL=../sourcemaps/54.js.map