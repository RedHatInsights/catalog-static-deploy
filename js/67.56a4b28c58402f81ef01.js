(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{555:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(220),i=o(150),c=o(36),s=function(){return(s=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o};t.a=function(e){var t=e.meta,o=t.limit,r=void 0===o?50:o,d=t.count,p=void 0===d?0:d,u=t.offset,f=void 0===u?0:u,m=e.apiProps,b=e.apiRequest,h=e.className,g=void 0===h?"":h,O=e.isCompact,y=void 0!==O&&O,v=l(e,["meta","apiProps","apiRequest","className","isCompact"]);return a.a.createElement("div",{className:g},a.a.createElement(i.a,s({perPage:r||50,itemCount:p||0,onPerPageSelect:function(e,t){return b(m,{offset:f,limit:t})},page:Object(c.b)(r,f),onSetPage:function(e,t,o){var a={offset:Object(c.c)(t,r),limit:r},i=function(){return b(m,a)};return o?Object(n.a)(i,250)():i()},dropDirection:"down",isCompact:y},v)))}},570:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(2).__exportStar(o(330),t)},573:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(610),i=function(){return(i=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o};t.a=function(e){var t=e.children,o=e.className,r=c(e,["children","className"]);return a.a.createElement("div",i({className:Object(n.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",o)},r),t)}},579:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var r=o(2),a=o(0),n=o(331),i=o.n(n),c=o(1);const s=()=>{};class l extends a.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:o,onChange:n,isValid:l,isDisabled:d,isChecked:p,label:u,checked:f,defaultChecked:m,description:b,body:h}=e,g=Object(r.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description","body"]);g.id||console.error("Checkbox:","id is required to make input accessible");const O={};return([!0,!1].includes(f)||!0===p)&&(O.checked=f||p),n!==s&&(O.checked=p),[!1,!0].includes(m)&&(O.defaultChecked=m),O.checked=null!==O.checked&&O.checked,a.createElement("div",{className:Object(c.css)(i.a.check,!u&&i.a.modifiers.standalone,o)},a.createElement("input",Object.assign({},g,{className:Object(c.css)(i.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:d,ref:e=>e&&(e.indeterminate=null===p)},O)),u&&a.createElement("label",{className:Object(c.css)(i.a.checkLabel,d&&i.a.modifiers.disabled),htmlFor:g.id},u),b&&a.createElement("span",{className:Object(c.css)(i.a.checkDescription)},b),h&&a.createElement("span",{className:Object(c.css)(i.a.checkBody)},h))}}l.displayName="Checkbox",l.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:s}},592:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const r=o(2),a=r.__importStar(o(0)),n=r.__importDefault(o(50)),i=o(1),c=o(142);t.CardContext=a.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:o=null,id:s="",className:l="",component:d="article",isHoverable:p=!1,isCompact:u=!1,isSelectable:f=!1,isSelected:m=!1,isFlat:b=!1,isExpanded:h=!1,isRounded:g=!1,isLarge:O=!1,ouiaId:y,ouiaSafe:v=!0}=e,P=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","isExpanded","isRounded","isLarge","ouiaId","ouiaSafe"]);const C=d,E=c.useOUIAProps(t.Card.displayName,y,v);return u&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1),a.createElement(t.CardContext.Provider,{value:{cardId:s,isExpanded:h}},a.createElement(C,Object.assign({id:s,className:i.css(n.default.card,p&&n.default.modifiers.hoverable,u&&n.default.modifiers.compact,f&&n.default.modifiers.selectable,m&&f&&n.default.modifiers.selected,h&&n.default.modifiers.expanded,b&&n.default.modifiers.flat,g&&n.default.modifiers.rounded,O&&n.default.modifiers.displayLg,l),tabIndex:f?"0":void 0},P,E),o))},t.Card.displayName="Card"},594:function(e,t,o){"use strict";t.__esModule=!0,t.TimesIconConfig={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},t.TimesIcon=o(92).createIcon(t.TimesIconConfig),t.default=t.TimesIcon},603:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(579);t.a=function(e){var t=e.handleCheck,o=e.isChecked,r=e.id;return a.a.createElement(n.a,{onClick:function(e){return e.stopPropagation()},isChecked:o,onChange:t,"aria-label":"card checkbox",id:r})}},604:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(138),i=o(73),c=o(631),s=o(642),l=o(632),d=o(633),p=function(){return(p=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o};t.a=function(e){var t=e.name,o=e.distributor,f=e.pathname,m=e.searchParams,b=e.preserveSearch,h=e.portfolioName,g=u(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return a.a.createElement(d.a,null,a.a.createElement(n.a,null,a.a.createElement(s.a,{pathname:f,searchParams:m,preserveSearch:b},a.a.createElement(i.a,{component:i.b.h3,title:t},a.a.createElement(l.a,null,t))),o&&a.a.createElement(i.a,{component:i.b.small},o),h&&a.a.createElement(r.Fragment,null,a.a.createElement(i.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),a.a.createElement(i.a,null,h))),a.a.createElement(c.c,p({toDisplay:[g.description?"description":"long_description"]},g)))}},636:function(e,t,o){"use strict";t.__esModule=!0,t.AngleRightIconConfig={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},t.AngleRightIcon=o(92).createIcon(t.AngleRightIconConfig),t.default=t.AngleRightIcon},643:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const r=o(2),a=r.__importStar(o(0)),n=o(1),i=r.__importDefault(o(50)),c=o(592),s=o(570),l=r.__importDefault(o(636));t.CardHeader=e=>{var{children:t=null,className:o="",id:d,onExpand:p,toggleButtonProps:u}=e,f=r.__rest(e,["children","className","id","onExpand","toggleButtonProps"]);return a.createElement(c.CardContext.Consumer,null,({cardId:e})=>a.createElement("div",Object.assign({className:n.css(i.default.cardHeader,o),id:d},f),p&&a.createElement("div",{className:n.css(i.default.cardHeaderToggle)},a.createElement(s.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{p(t,e)}},u),a.createElement("span",{className:n.css(i.default.cardHeaderToggleIcon)},a.createElement(l.default,{"aria-hidden":"true"})))),t))},t.CardHeader.displayName="CardHeader"},722:function(e,t,o){"use strict";var r=o(237),a=o.n(r),n=o(0),i=o.n(n),c=o(5),s=o.n(c),l=o(643),d=o(723),p=o(635),u=o(724),f=o(6),m=o(583),b=o(603),h=o(604),g=o(634),O=o(30),y=o(28),v=o(125);function P(){var e=a()(["\n  flex: 1;\n"]);return P=function(){return e},e}var C=Object(O.b)(p.Level)(P()),E=function(e){var t,o,r=Object(y.a)();return i.a.createElement(g.b,{isDisabled:e.removeInProgress&&e.isSelected},i.a.createElement(g.a,{ouiaId:"portfolio-item-".concat(e.id)},i.a.createElement(l.CardHeader,null,i.a.createElement(C,null,i.a.createElement(m.a,{src:"".concat(f.e,"/portfolio_items/").concat(e.id,"/icon"),sourceId:e.service_offering_source_ref}),e.isSelectable&&i.a.createElement(b.a,{handleCheck:function(){return e.onSelect(e.id)},isChecked:e.isSelected,id:e.id}))),i.a.createElement(h.a,e),i.a.createElement(d.CardFooter,null,(null===(t=e.metadata)||void 0===t||null===(o=t.statistics)||void 0===o?void 0:o.approval_processes)>0?i.a.createElement(u.Label,{variant:"filled",color:"grey"},r(v.a.approvalProcessSet)):"")))};E.propTypes={id:s.a.string,platformId:s.a.string,service_offering_source_ref:s.a.string,isSelectable:s.a.bool,isSelected:s.a.bool,onSelect:s.a.func,orderUrl:s.a.string,removeInProgress:s.a.bool,portfolio_id:s.a.string,metadata:s.a.shape({user_capabilities:s.a.shape({destroy:s.a.bool}).isRequired}).isRequired},t.a=E},723:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;const r=o(2),a=r.__importStar(o(0)),n=r.__importDefault(o(50)),i=o(1);t.CardFooter=e=>{var{children:t=null,className:o="",component:c="div"}=e,s=r.__rest(e,["children","className","component"]);const l=c;return a.createElement(l,Object.assign({className:i.css(n.default.cardFooter,o)},s),t)},t.CardFooter.displayName="CardFooter"},724:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const r=o(2),a=r.__importStar(o(0)),n=r.__importDefault(o(725)),i=o(570),c=o(593),s=o(1),l=r.__importDefault(o(594)),d={blue:n.default.modifiers.blue,cyan:n.default.modifiers.cyan,green:n.default.modifiers.green,orange:n.default.modifiers.orange,purple:n.default.modifiers.purple,red:n.default.modifiers.red,grey:""};t.Label=e=>{var{children:t,className:o="",color:p="grey",variant:u="filled",isTruncated:f=!1,tooltipPosition:m,icon:b,onClose:h,closeBtn:g,closeBtnProps:O,href:y,isOverflowLabel:v,render:P}=e,C=r.__rest(e,["children","className","color","variant","isTruncated","tooltipPosition","icon","onClose","closeBtn","closeBtnProps","href","isOverflowLabel","render"]);const E=v?"button":"span",j=y?"a":"span",k=g||a.createElement(i.Button,Object.assign({type:"button",variant:"plain",onClick:h},Object.assign({"aria-label":"label-close-button"},O)),a.createElement(l.default,null)),_=a.createRef(),I=a.useRef(),[w,R]=a.useState(!1);a.useLayoutEffect(()=>{R(_.current&&_.current.offsetWidth<_.current.scrollWidth)},[]);const S=a.createElement(a.Fragment,null,b&&a.createElement("span",{className:s.css(n.default.labelIcon)},b),f&&a.createElement("span",{ref:_,className:s.css(n.default.labelText)},t),!f&&t);let D=a.createElement(j,Object.assign({className:s.css(n.default.labelContent)},y&&{href:y}),S);return P?D=a.createElement(a.Fragment,null,w&&a.createElement(c.Tooltip,{reference:I,content:t,position:m}),P({className:n.default.labelContent,content:S,componentRef:I})):w&&(D=a.createElement(c.Tooltip,{content:t,position:m},a.createElement(j,Object.assign({className:s.css(n.default.labelContent)},y&&{href:y}),S))),a.createElement(E,Object.assign({},C,{className:s.css(n.default.label,d[p],"outline"===u&&n.default.modifiers.outline,v&&n.default.modifiers.overflow,o)}),D,h&&k)},t.Label.displayName="Label"},768:function(e,t,o){"use strict";t.__esModule=!0,t.PlusCircleIconConfig={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.PlusCircleIcon=o(92).createIcon(t.PlusCircleIconConfig),t.default=t.PlusCircleIcon},813:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var r=o(25),a=o.n(r),n=o(139),i=o.n(n),c=o(560);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d=function(e){var t=e.pathname,o=e.preserveSearch,r=e.id,a=i()(e,["pathname","preserveSearch","id"]);return{component:c.b.TOOLBAR_ITEM,key:"".concat(a.key,"/button-link"),fields:[{component:c.b.LINK,pathname:t,preserveSearch:o,key:"".concat(a.key,"/button-link"),isDisabled:a.isDisabled,id:r,fields:[l({component:c.b.BUTTON},a)]}]}}},941:function(e,t,o){"use strict";o.r(t);var r=o(25),a=o.n(r),n=o(83),i=o.n(n),c=o(93),s=o.n(c),l=o(0),d=o.n(l),p=o(5),u=o.n(p),f=o(100),m=o(26),b=o(567),h=o(139),g=o.n(h),O=o(720),y=o(582),v=o(814),P=o(719),C=o(560),E=o(813),j=o(555),k=o(552),_=o(713),I=o(28),w=o(48),R=o(13);function S(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function D(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?S(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var N=function(e){var t=e.editPortfolioRoute,o=e.workflowPortfolioRoute,r=e.removePortfolioRoute,a=e.copyInProgress,n=e.copyPortfolio,i=e.userCapabilities,c=i.copy,p=i.destroy,u=i.update,f=i.set_approval,m=e.canLinkOrderProcesses,b=Object(l.useState)(!1),h=s()(b,2),g=h[0],C=h[1],E=Object(I.a)(),j=[];if(u&&j.push(d.a.createElement(P.DropdownItem,{"aria-label":"Edit Portfolio",key:"edit-portfolio",id:"edit-portfolio",component:d.a.createElement(k.a,{id:"edit-portfolio",preserveSearch:!0,pathname:t},"Edit"),role:"link"})),c&&j.push(d.a.createElement(P.DropdownItem,{component:"button","aria-label":"Copy Portfolio",key:"copy-portfolio",id:"copy-portfolio",onClick:n},"Copy")),f&&j.push(d.a.createElement(P.DropdownItem,{"aria-label":"Set approval workflow",key:"set-approval-portfolio-action",id:"set-approval-portfolio-action",component:d.a.createElement(k.a,{preserveSearch:!0,pathname:o},"Set approval"),role:"link"})),u&&m){var _=E(w.a.setOrderProcess);j.push(d.a.createElement(P.DropdownItem,{"aria-label":_,key:"attach-order-processes",id:"attach-order-processes",component:d.a.createElement(k.a,{preserveSearch:!0,pathname:R.h},_),role:"link"}))}return p&&j.push(d.a.createElement(P.DropdownItem,{"aria-label":"Remove Portfolio",key:"delete-portfolio",id:"delete-portfolio",component:d.a.createElement(k.a,{preserveSearch:!0,pathname:r},"Delete"),role:"link",className:"pf-c-dropdown__menu-item"})),0===j.length?null:d.a.createElement(O.Dropdown,{className:"pf-u-ml-md",onSelect:function(){return C(!1)},position:y.DropdownPosition.right,toggle:d.a.createElement(v.KebabToggle,{id:"toggle-portfolio-actions",onToggle:C,isDisabled:a}),isOpen:g,isPlain:!0,dropdownItems:j})};N.propTypes={removePortfolioRoute:u.a.string.isRequired,editPortfolioRoute:u.a.string.isRequired,workflowPortfolioRoute:u.a.string.isRequired,copyPortfolio:u.a.func.isRequired,copyInProgress:u.a.bool,userCapabilities:u.a.shape({copy:u.a.bool,update:u.a.bool,destroy:u.a.bool,set_approval:u.a.bool}).isRequired,canLinkOrderProcesses:u.a.bool};var L=function(e){var t=e.title,o=e.addProductsRoute,r=e.copyPortfolio,a=e.sharePortfolioRoute,n=e.editPortfolioRoute,i=e.workflowPortfolioRoute,c=e.removePortfolioRoute,s=e.copyInProgress,l=e.isLoading,d=e.removeProducts,p=e.itemsSelected,u=e.meta,f=e.fetchPortfolioItemsWithPortfolio,m=e.portfolioId,b=e.description,h=e.fromProducts,O=e.filterProps,y=O.searchValue,v=O.onFilterChange,P=O.placeholder,k=e.userCapabilities,I=k.share,w=k.unshare,R=g()(k,["share","unshare"]),S=e.canLinkOrderProcesses;return{fields:[{component:C.b.TOP_TOOLBAR,breadcrumbs:!h,key:"portfolio-top-toolbar",fields:[{key:"back-to-products",hidden:!h,component:_.a},{component:C.b.TOP_TOOLBAR_TITLE,key:"portfolio-toolbar-title",noData:u.noData,title:t,description:b,fields:[{component:C.b.TOOLBAR,key:"portfolio-actions",noWrap:!0,fields:[Object(E.a)({pathname:a,preserveSearch:!0,variant:"secondary",title:"Share",isDisabled:s,key:"portfolio-share-button",id:"portfolio-share-button",hidden:!I&&!w}),{component:C.b.TOOLBAR_ITEM,key:"portfolio-actions-dropdown-item",fields:[{component:N,editPortfolioRoute:n,workflowPortfolioRoute:i,removePortfolioRoute:c,copyPortfolio:r,copyInProgress:s,userCapabilities:R,canLinkOrderProcesses:S,key:"portfolio-actions-dropdown"}]}]}]},{component:C.b.LEVEL,key:"portfolio-items-actions",fields:u.noData?[]:[{component:C.b.TOOLBAR,key:"portfolio-items-actions",fields:[{groupName:"filter-portfolio-items",component:C.b.FILTER_TOOLBAR_ITEM,isClearable:!0,key:"portfolio-items-filter",searchValue:y,onFilterChange:v,placeholder:P},D({hidden:0===u.count||!R.update,groupName:"add-portfolio-items",key:"portfolio-items-add-group"},Object(E.a)({preserveSearch:!0,pathname:o,isDisabled:l||s,variant:"primary",title:"Add",id:"add-products-button",key:"add-products-button"})),{component:C.b.TOOLBAR_ITEM,key:"remove-products-item",hidden:0===u.count||!R.update,fields:[{component:C.b.BUTTON,groupName:"remove-portfolio-items",variant:"link",title:"Remove",key:"remove-products-button",id:"remove-products-button",isDisabled:!p,onClick:d}]}]},{component:C.b.LEVEL_ITEM,key:"pagination-item",fields:u.count>0?[{component:j.a,key:"portfolio-items-pagination",meta:u,apiRequest:f,apiProps:m,isCompact:!0}]:[]}]}]}]}},T=o(580),x=o.n(T),F=o(768),q=o.n(F),B=o(599),A=o(330),M=o(559),H=o(55),V=function(e){var t=e.url,o=e.handleFilterChange,r=e.meta,a=e.userCapabilities.update,n=Object(I.a)(),i={PrimaryAction:r.noData?function(){return d.a.createElement(B.a,{url:t,label:n(H.a.addProducts),id:"add-products-to-portfolio",hasPermission:a})}:function(){return d.a.createElement(A.Button,{id:"clear-portfolio-filter",ouiaId:"clear-portfolio-filter",variant:"link",onClick:function(){return o("")}},n(M.a.clearFilters))},title:r.noData?n(M.a.noProducts):n(M.a.noResults),description:r.noData?n(H.a.emptyNoProducts):n(M.a.noResultsDescription),Icon:r.noData?q.a:x.a};return d.a.createElement(B.b,i)};V.propTypes={url:u.a.string.isRequired,handleFilterChange:u.a.func.isRequired,meta:u.a.shape({noData:u.a.bool}).isRequired,userCapabilities:u.a.shape({update:u.a.bool}).isRequired};var W=V,z=o(637),U=o(722),J=o(144),K=o(573),G=o(105),Q=o(146),X=o(126);function Y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Z(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Y(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var $=function(e){var t=e.routes,o=e.handleFilterChange,r=e.removeProducts,a=e.copyPortfolio,n=e.stateDispatch,c=e.fromProducts,p=e.state,u=p.removeInProgress,h=p.isFetching,g=p.isFiltering,O=p.copyInProgress,y=p.selectedItems,v=p.filterValue,P=Object(I.a)(),C=Object(m.e)((function(e){var t=e.portfolioReducer,o=t.portfolioItems,r=o.data,a=o.meta,n=t.selectedPortfolio;return{data:r,meta:a,name:n.name,description:n.description,userCapabilities:n.metadata.user_capabilities}})),E=C.data,k=C.meta,_=C.name,w=C.description,S=C.userCapabilities,D=Object(f.i)(R.A).url,N=Object(G.a)(["portfolio"]),T=s()(N,1)[0].portfolio,x=Object(m.d)(),F=Object(l.useContext)(Q.a).permissions,q=Object(X.c)(F,["catalog:order_processes:link"]),B=E.map((function(e){return d.a.createElement(U.a,i()({key:e.id},e,{pathname:"".concat(D,"/portfolio-item"),searchParams:{source:e.service_offering_source_ref,"portfolio-item":e.id},preserveSearch:!0,isSelectable:S.update,onSelect:function(t){return n({type:"selectItem",payload:{selectedItem:t,product:e}})},isSelected:y.includes(e.id),removeInProgress:u}))}));return d.a.createElement(l.Fragment,null,d.a.createElement(b.a,{schema:L(Z(Z({fromProducts:c,filterProps:{searchValue:v,onFilterChange:o,placeholder:P(M.a.filterByProduct)},title:_,description:w},t),{},{copyPortfolio:a,isLoading:h||g,copyInProgress:O,removeProducts:function(){return r(y)},itemsSelected:y.length>0,meta:k,fetchPortfolioItemsWithPortfolio:function(){return x(J.f.apply(void 0,arguments))},portfolioId:T,userCapabilities:S,canLinkOrderProcesses:q}))}),d.a.createElement(z.a,{items:B,isLoading:h||g,renderEmptyState:function(){return d.a.createElement(W,{handleFilterChange:o,meta:k,userCapabilities:S,url:t.addProductsRoute})}}),k.count>0&&d.a.createElement(K.a,null,d.a.createElement(j.a,{dropDirection:"up",meta:k,apiProps:T,apiRequest:function(){return x(J.f.apply(void 0,arguments))}})))};$.propTypes={routes:u.a.shape({addProductsRoute:u.a.string.isRequired,portfolioRoute:u.a.string.isRequired}).isRequired,handleFilterChange:u.a.func.isRequired,removeProducts:u.a.func.isRequired,copyPortfolio:u.a.func.isRequired,stateDispatch:u.a.func.isRequired,state:u.a.shape({removeInProgress:u.a.bool,isFetching:u.a.bool,isFiltering:u.a.bool,copyInProgress:u.a.bool,selectedItems:u.a.arrayOf(u.a.string),filterValue:u.a.string}).isRequired,fromProducts:u.a.bool};t.default=$}}]);
//# sourceMappingURL=../sourcemaps/67.js.map