(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{654:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(653),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.children,a=e.className,r=i(e,["children","className"]);return n.a.createElement("div",l({className:Object(s.a)("pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto",a)},r),t)}},655:function(e,t,a){"use strict";var r=a(28),n=Object(r.b)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},platformsNoDataDescription:{id:"platforms.list.configure-source",defaultMessage:"To get started, add an Ansible Tower cluster as a source."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"Go to Sources"},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"},platformVersion:{id:"platforms.version",defaultMessage:"Platform version"},ansibleVersion:{id:"platforms.ansible.version",defaultMessage:"Ansible version"},platformSummary:{id:"platforms.summary",defaultMessage:"Summmary"},mqttClientId:{id:"platform.mqttClientId",defaultMessage:"MQTT Client Id"},refreshState:{id:"platforms.refreshState",defaultMessage:"Refresh state"},refreshStarted:{id:"platforms.refreshStarted",defaultMessage:"Refresh started"},refreshFinished:{id:"platforms.refreshFinished",defaultMessage:"Refresh finished"},lastSuccessfulRefresh:{id:"platforms.lastSuccessfulRefresh",defaultMessage:"Last successful refresh"},lastChecked:{id:"platforms.lastChecked",defaultMessage:"Last checked"},lastAvailable:{id:"platforms.lastAvailable",defaultMessage:"Last available"},enabled:{id:"platforms.enabled",defaultMessage:"Enabled"},availabilityStatus:{id:"platforms.availabilityStatus",defaultMessage:"Availability status"},dateAdded:{id:"platforms.dateAdded",defaultMessage:"Date added"}});t.a=n},696:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(147),l=a(77),i=a(737),c=a(671),o=a(719),d=a(720),u=function(){return(u=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},f=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.name,a=e.distributor,p=e.pathname,m=e.searchParams,h=e.preserveSearch,b=e.portfolioName,g=f(e,["name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return n.a.createElement(d.a,null,n.a.createElement(s.a,null,n.a.createElement(c.a,{pathname:p,searchParams:m,preserveSearch:h},n.a.createElement(l.a,{component:l.b.h3,title:t},n.a.createElement(o.a,null,t))),a&&n.a.createElement(l.a,{component:l.b.small},a),b&&n.a.createElement(r.Fragment,null,n.a.createElement(l.a,{className:"pf-u-mb-0",component:"small"},"Portfolio"),n.a.createElement(l.a,null,b))),n.a.createElement(i.a,u({toDisplay:[g.description?"description":"long_description"]},g)))}},718:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(2),l=a(368),i=a.n(l),c=a(1);const o=()=>{};class d extends r.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)}}render(){const e=this.props,{"aria-label":t,className:a,onChange:n,isValid:l,isDisabled:d,isChecked:u,label:f,checked:p,defaultChecked:m,description:h}=e,b=Object(s.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description"]);b.id||console.error("Checkbox:","id is required to make input accessible");const g={};return([!0,!1].includes(p)||!0===u)&&(g.checked=p||u),n!==o&&(g.checked=u),[!1,!0].includes(m)&&(g.defaultChecked=m),g.checked=null!==g.checked&&g.checked,r.createElement("div",{className:Object(c.css)(i.a.check,a)},r.createElement("input",Object.assign({},b,{className:Object(c.css)(i.a.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!l,"aria-label":t,disabled:d,ref:e=>e&&(e.indeterminate=null===u)},g)),f&&r.createElement("label",{className:Object(c.css)(i.a.checkLabel,d&&i.a.modifiers.disabled),htmlFor:b.id},f),h&&r.createElement("div",{className:Object(c.css)(i.a.checkDescription)},h))}}d.displayName="Checkbox",d.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:o};t.a=function(e){var t=e.handleCheck,a=e.isChecked,r=e.id;return n.a.createElement(d,{onClick:function(e){return e.stopPropagation()},isChecked:a,onChange:t,"aria-label":"card checkbox",id:r})}},820:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(2),n=a(0),s=a(1),l=a(62),i=a.n(l),c=a(193),o=a(75),d=a(239);const u=e=>{var{children:t=null,className:a="",id:l,onExpand:u,toggleButtonProps:f}=e,p=Object(r.__rest)(e,["children","className","id","onExpand","toggleButtonProps"]);return n.createElement(c.b.Consumer,null,({cardId:e})=>n.createElement("div",Object.assign({className:Object(s.css)(i.a.cardHeader,a),id:l},p),u&&n.createElement("div",{className:Object(s.css)(i.a.cardHeaderToggle)},n.createElement(o.a,Object.assign({variant:"plain",type:"button",onClick:t=>{u(t,e)}},f),n.createElement("span",{className:Object(s.css)(i.a.cardHeaderToggleIcon)},n.createElement(d.a,{"aria-hidden":"true"})))),t))};u.displayName="CardHeader"},821:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(2),n=a(0),s=a(62),l=a.n(s),i=a(1);const c=e=>{var{children:t=null,className:a="",component:s="div"}=e,c=Object(r.__rest)(e,["children","className","component"]);const o=s;return n.createElement(o,Object.assign({className:Object(i.css)(l.a.cardFooter,a)},c),t)};c.displayName="CardFooter"},836:function(e,t,a){"use strict";var r,n=a(0),s=a.n(n),l=a(224),i=a(820),c=a(821),o=a(668),d=a(718),u=a(696),f=a(721),p=a(30),m=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},h=function(){return(h=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},b=Object(p.b)(l.a)(r||(r=m(["\n  flex: 1;\n"],["\n  flex: 1;\n"])));t.a=function(e){return s.a.createElement(f.a,{key:e.id,ouiaId:"platform-item"+e.id},s.a.createElement(i.a,null,s.a.createElement(b,null,s.a.createElement(o.a,{height:40,sourceId:e.source_id}),e.editMode&&s.a.createElement(d.a,{id:e.id,isChecked:e.checked,handleCheck:e.onToggleItemSelect}))),s.a.createElement(u.a,h({},e)),s.a.createElement(c.a,null))}},926:function(e,t,a){"use strict";a.r(t);var r=a(151),n=a.n(r),s=a(107),l=a.n(s),i=a(40),c=a.n(i),o=a(0),d=a.n(o),u=a(25),f=a(635),p=a.n(f),m=a(130),h=a(672),b=a(36),g=a(663),O=a(836),y=a(743),v=a(679),j=a(149),E=a(723),k=a(364),C=a(633),P=a(654),M=a(108),w=a(12),F=a(638),N=a(655),S=a(27);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},x=function(e,t){switch(t.type){case"setFetching":return D(D({},e),{},{isFetching:t.payload});case"setFilterValue":return D(D({},e),{},{filterValue:t.payload});case"setFilteringFlag":return D(D({},e),{},{isFiltering:t.payload});default:return e}},R=Object(j.a)((function(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:b.a;r(!0),a(Object(g.b)(e,t,n)).then((function(){return r(!1)}))}),1e3);t.default=function(){var e=Object(S.a)(),t=Object(M.a)(["platform"]),a=l()(t,1)[0].platform,r=Object(o.useReducer)(x,T),s=l()(r,2),i=s[0],c=i.filterValue,f=i.isFetching,j=i.isFiltering,I=s[1],V=Object(u.e)((function(e){var t=e.platformReducer.platformItems;return t[a]?t[a]:{data:[],meta:b.a}})),A=V.data,_=V.meta,q=Object(u.e)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),L=q.platform,H=q.platformIconMapping,B=Object(u.d)();Object(o.useEffect)((function(){B(Object(g.b)(a,c,b.a)).then((function(){return I({type:"setFetching",payload:!1})})),Object(m.d)()}),[a]);var J=function(e){I({type:"setFilterValue",payload:e}),R(a,e,B,(function(e){return I({type:"setFilteringFlag",payload:e})}),D(D({},_),{},{offset:0}))},z={items:A?A.map((function(e){return d.a.createElement(O.a,n()({key:e.id,pathname:w.t,searchParams:{service:e.id},preserveSearch:!0,src:H[a]},e))})):[]},G=L?L.name:"";return d.a.createElement(o.Fragment,null,d.a.createElement(h.a,{schema:Object(y.a)({onFilterChange:J,searchValue:c,filterPlaceholder:e(N.a.templatesFilter),meta:_,apiRequest:function(e,t){return B(Object(g.b)(a,c,t))}})}),d.a.createElement(E.a,n()({title:G,isLoading:f||j,renderEmptyState:function(){return d.a.createElement(v.b,{title:e(""===c?N.a.noTemplatesTitle:F.a.noResults),Icon:p.a,PrimaryAction:function(){return""!==c?d.a.createElement(k.Button,{ouiaId:"clear-filters",onClick:function(){return J("")},variant:"link"},e(F.a.clearFilters)):null},description:e(""===c?N.a.noTemplatesDescription:F.a.noResultsDescription)})}},z)),_.count>0&&d.a.createElement(P.a,null,d.a.createElement(C.a,{dropDirection:"up",meta:_,apiRequest:function(e,t){return B(Object(g.b)(a,c,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~31ecd969.js.map