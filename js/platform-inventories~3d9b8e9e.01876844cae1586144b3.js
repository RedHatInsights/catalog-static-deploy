(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{399:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=n(52),l=n(386),u=n(387),s=n(389),p=n(404),f=n(35),m=n(50),d=n(383),b=function(e){var t=e.title,n=e.Icon,r=e.description,i=e.PrimaryAction,o=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(l.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(u.EmptyStateIcon,{icon:n}),a.a.createElement(m.TextContent,null,a.a.createElement(f.Text,{component:f.TextVariants.h1},t)),a.a.createElement(s.EmptyStateBody,null,r,o()),a.a.createElement(p.EmptyStateSecondaryActions,null,i&&a.a.createElement(i,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:o.a.string.isRequired,Icon:o.a.any.isRequired,description:o.a.string,PrimaryAction:o.a.any,renderDescription:o.a.func},t.b=b;var y=function(e){var t=e.url,n=e.label,r=e.hasPermission,i=void 0!==r&&r,o=e.id;return i&&a.a.createElement(d.a,{id:o,pathname:t,preserveSearch:!0},a.a.createElement(c.Button,{variant:"primary"},n))};y.propTypes={url:o.a.string.isRequired,label:o.a.string.isRequired,id:o.a.string,hasPermission:o.a.bool}},414:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=function(e){var t=e.children;return a.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};c.propTypes={children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])},t.a=c},668:function(e,t,n){"use strict";n.r(t);var r=n(31),a=n.n(r),i=n(1),o=n.n(i),c=n(0),l=n.n(c),u=n(23),s=n(41),p=n(397),f=n.n(p),m=n(97),d=n(94),b=n(403),y=n(51),g=n(384),O=n(444),v=n(399),E=n(378),h=n(10),j=n.n(h),w=n(35),F=n(435),P=n(538),S=n(536),R=n(53),D=function(){return l.a.createElement(w.Text,{component:w.TextVariants.h1},"No items found")},T=function(e){var t=e.data,n=e.columns,r=e.isCompact,i=e.isLoading,o=e.actionResolver,u=e.areActionsDisabled,s=e.borders,p=e.routes,f=e.titlePlural,m=e.renderEmptyState,d=Object(c.useState)([]),b=a()(d,2),y=b[0],g=b[1];Object(c.useEffect)((function(){g(t)}),[t]);return i?l.a.createElement(R.d,null):0===y.length?m?m():l.a.createElement(D,null):l.a.createElement(c.Fragment,null,p(),l.a.createElement(F.b,{"aria-label":"".concat(f," table"),variant:r?F.e.compact:null,borders:s,rows:y,cells:n,actionResolver:o,areActionsDisabled:u},l.a.createElement(P.a,null),l.a.createElement(S.a,null)))};T.propTypes={borders:j.a.bool,isCompact:j.a.bool,columns:j.a.array.isRequired,renderEmptyState:j.a.func.isRequired,data:j.a.array,pagination:j.a.shape({limit:j.a.number,offset:j.a.number,count:j.a.number}),titlePlural:j.a.string,titleSingular:j.a.string,routes:j.a.func,actionResolver:j.a.func,areActionsDisabled:j.a.func,isLoading:j.a.bool},T.defaultProps={requests:[],isLoading:!1,isCompact:!1,borders:!0,routes:function(){return null},items:j.a.array,renderEmptyState:j.a.func};var k=T,q=n(14),N=n.n(q),V=n(381),C=n(414),x=n(54);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},B=Object(E.a)((function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:y.a;r(!0),n(Object(g.a)(e,t,a)).then((function(){return r(!1)}))}),1e3),J=function(e,t){switch(t.type){case"setFetching":return I(I({},e),{},{isFetching:t.payload});case"setFilterValue":return I(I({},e),{},{filterValue:t.payload});case"setFilteringFlag":return I(I({},e),{},{isFiltering:t.payload});default:return e}},W=["Name","Description","Created","Workflow"];t.default=function(){var e=Object(c.useReducer)(J,L),t=a()(e,2),n=t[0],r=n.filterValue,i=n.isFetching,o=n.isFiltering,p=t[1],E=Object(u.useSelector)((function(e){return e.platformReducer.platformInventories})),h=E.data,j=E.meta,w=Object(u.useSelector)((function(e){return e.platformReducer.selectedPlatform})),F=Object(u.useDispatch)(),P=Object(x.a)(["platform"]),S=a()(P,1)[0].platform,R=Object(s.g)();Object(c.useEffect)((function(){F(Object(g.a)(S,r,y.a)).then((function(){return p({type:"setFetching",payload:!1})})),Object(d.c)()}),[]);var D=h?function(e){return e.reduce((function(e,t,n){var r=t.id,a=t.name,i=t.description,o=t.created_at,c=t.workflow;return[].concat(N()(e),[{id:r,key:n,isOpen:!1,cells:[a,i,Object(d.d)(o),c]}])}),[])}(h):[],T=w?w.name:"";return l.a.createElement(c.Fragment,null,l.a.createElement(b.a,{schema:Object(O.a)({onFilterChange:function(e){p({type:"setFilterValue",payload:e}),B(S,e,F,(function(e){return p({type:"setFilteringFlag",payload:e})}),I(I({},j),{},{offset:0}))},searchValue:r,filterPlaceholder:"Filter by inventory",meta:j,apiRequest:function(e,t){return F(Object(g.a)(S,r,t))}})}),l.a.createElement(m.Section,{type:"content"},l.a.createElement(k,{title:T,data:D,columns:W,isLoading:i||o,actionResolver:function(e){return[{title:"Set approval",onClick:function(){return R.push({pathname:"/platform/platform-inventories/edit-workflow",search:"?platform=".concat(S,"&inventory=").concat(e.id)})}}]},renderEmptyState:function(){return l.a.createElement(v.b,{title:"No inventories",Icon:f.a,description:""===r?"No inventories found.":"No inventories match your filter criteria."})}})),j.count>0&&l.a.createElement(C.a,null,l.a.createElement(V.a,{dropDirection:"up",meta:j,apiRequest:function(e,t){return F(Object(g.a)(S,r,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-inventories~3d9b8e9e.js.map