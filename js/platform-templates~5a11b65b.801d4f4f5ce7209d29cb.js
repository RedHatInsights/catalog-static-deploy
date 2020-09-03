(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{599:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=function(e){var t=e.children;return n.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};s.propTypes={children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])},t.a=s},611:function(e,t,a){"use strict";var r=(0,a(30).defineMessages)({workflowColumn:{id:"platform.inventories.columns.workflow",defaultMessage:"Workflow"},noInventoriesDescription:{id:"platform.inventories.empty.no-inventories",defaultMessage:"No inventories found."},noInventoriesFilterDescription:{id:"platform.inventories.empty.no-results",defaultMessage:"No inventories match your filter criteria."},inventoriesFilter:{id:"platform.inventories.filter.placeholder",defaultMessage:"Filter by inventory"},templatesFilter:{id:"platform.templates.filter.placeholder",defaultMessage:"Filter by template"},noTemplatesTitle:{id:"platform.templates.no-templates",defaultMessage:"No templates"},noTemplatesDescription:{id:"platform.templates.empty.no-templates",defaultMessage:"This platform has no templates."},configureSourceTitle:{id:"platforms.list.configure-source",defaultMessage:"Configure a source in order to add products to portfolios."},connectSource:{id:"platforms.list.connect-source",defaultMessage:"To connect to a source, go to <a>Sources</a> under Settings."},contactAdmin:{id:"platforms.list.contact-admin",defaultMessage:"Contact your organization administrator to setup sources for Catalog."},title:{id:"platforms.title",defaultMessage:"Platforms"},noPlatforms:{id:"platforms.list.empty.title",defaultMessage:"No platforms yet"},offeringTitle:{id:"platforms.offerings.detail.title",defaultMessage:"Service offering"},offeringParameters:{id:"platforms.offerings.detail.extra-params",defaultMessage:"Extra parameters"}});t.a=r},628:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(296),l=function(e){var t=e.handleCheck,a=e.isChecked,r=e.id;return n.a.createElement(s.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:a,onChange:t,"aria-label":"card checkbox",id:r})};l.propTypes={handleCheck:o.a.func,isChecked:o.a.bool,id:o.a.string},t.a=l},629:function(e,t,a){"use strict";var r=a(12),n=a.n(r),i=a(49),o=a.n(i),s=a(29),l=a.n(s),c=a(0),u=a.n(c),p=a(4),f=a.n(p),m=a(13),d=a(20),g=a(640),h=a(655),b=a(641),y=a(642),v=function(e){var t=e.name,a=(e.display_name,e.distributor),r=e.pathname,n=e.searchParams,i=e.preserveSearch,s=e.portfolioName,p=l()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return u.a.createElement(y.a,null,u.a.createElement(d.TextContent,null,u.a.createElement(h.a,{pathname:r,searchParams:n,preserveSearch:i},u.a.createElement(m.Text,{component:m.TextVariants.h3,title:t},u.a.createElement(b.a,null,t))),a&&u.a.createElement(m.Text,{component:m.TextVariants.small},a),s&&u.a.createElement(c.Fragment,null,u.a.createElement(m.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),u.a.createElement(m.Text,null,s))),u.a.createElement(g.a,o()({toDisplay:[p.description?"description":"long_description"]},p)))};v.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(n()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=v},772:function(e,t,a){"use strict";var r=a(29),n=a.n(r),i=a(50),o=a.n(i),s=a(0),l=a.n(s),c=a(4),u=a.n(c),p=a(619),f=a(644),m=a(137),d=a(618),g=a(628),h=a(629),b=a(643),y=a(19);function v(){var e=o()(["\n  flex: 1;\n"]);return v=function(){return e},e}var O=Object(y.b)(m.Level)(v()),E=function(e){e.src;var t=n()(e,["src"]);return l.a.createElement(b.a,{key:t.id},l.a.createElement(p.CardHeader,null,l.a.createElement(O,null,l.a.createElement(d.a,{height:40,sourceId:t.source_id}),t.editMode&&l.a.createElement(g.a,{id:t.id,isChecked:t.checked,handleCheck:t.onToggleItemSelect}))),l.a.createElement(h.a,t),l.a.createElement(f.CardFooter,null))};E.propTypes={id:u.a.string.isRequired,service_offering_icon_id:u.a.string,source_id:u.a.string,platformId:u.a.string,name:u.a.string,editMode:u.a.bool,checked:u.a.bool,onToggleItemSelect:u.a.func,src:u.a.string},t.a=E},899:function(e,t,a){"use strict";a.r(t);var r=a(49),n=a.n(r),i=a(23),o=a.n(i),s=a(12),l=a.n(s),c=a(0),u=a.n(c),p=a(18),f=a(592),m=a.n(f),d=a(96),g=a(602),h=a(24),b=a(597),y=a(772),v=a(658),O=a(620),E=a(109),j=a(645),F=a(94),T=a(588),k=a(599),P=a(86),M=a(9),C=a(593),w=a(611),S=a(17);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},_=function(e,t){switch(t.type){case"setFetching":return D(D({},e),{},{isFetching:t.payload});case"setFilterValue":return D(D({},e),{},{filterValue:t.payload});case"setFilteringFlag":return D(D({},e),{},{isFiltering:t.payload});default:return e}},N=Object(E.a)((function(e,t,a,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:h.a;r(!0),a(Object(b.b)(e,t,n)).then((function(){return r(!1)}))}),1e3);t.default=function(){var e=Object(S.a)(),t=Object(P.a)(["platform"]),a=o()(t,1)[0].platform,r=Object(c.useReducer)(_,I),i=o()(r,2),s=i[0],l=s.filterValue,f=s.isFetching,E=s.isFiltering,x=i[1],R=Object(p.useSelector)((function(e){var t=e.platformReducer.platformItems;return t[a]?t[a]:{data:[],meta:h.a}})),V=R.data,q=R.meta,A=Object(p.useSelector)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),J=A.platform,L=A.platformIconMapping,z=Object(p.useDispatch)();Object(c.useEffect)((function(){z(Object(b.b)(a,l,h.a)).then((function(){return x({type:"setFetching",payload:!1})})),Object(d.d)()}),[a]);var B=function(e){x({type:"setFilterValue",payload:e}),N(a,e,z,(function(e){return x({type:"setFilteringFlag",payload:e})}),D(D({},q),{},{offset:0}))},H={items:V?V.map((function(e){return u.a.createElement(y.a,n()({key:e.id,pathname:M.s,searchParams:{service:e.id},preserveSearch:!0,src:L[a]},e))})):[]},W=J?J.name:"";return u.a.createElement(c.Fragment,null,u.a.createElement(g.a,{schema:Object(v.a)({onFilterChange:B,searchValue:l,filterPlaceholder:e(w.a.templatesFilter),meta:q,apiRequest:function(e,t){return z(Object(b.b)(a,l,t))}})}),u.a.createElement(j.a,n()({title:W,isLoading:f||E,renderEmptyState:function(){return u.a.createElement(O.b,{title:e(""===l?w.a.noTemplatesTitle:C.a.noResults),Icon:m.a,PrimaryAction:function(){return""!==l?u.a.createElement(F.Button,{onClick:function(){return B("")},variant:"link"},e(C.a.clearFilters)):null},description:e(""===l?w.a.noTemplatesDescription:C.a.noResultsDescription)})}},H)),q.count>0&&u.a.createElement(k.a,null,u.a.createElement(T.a,{dropDirection:"up",meta:q,apiRequest:function(e,t){return z(Object(b.b)(a,l,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates~5a11b65b.js.map