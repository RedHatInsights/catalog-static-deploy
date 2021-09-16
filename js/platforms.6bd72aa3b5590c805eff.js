"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[2943],{69733:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(22122),r=n(28481),l=n(30624),o=n.n(l),i=n(45237),c=n(6202),s=n(63540),u=n(48794),m=n(31257),f=n(63035),p=n(66678),d=n(59837),h=n(11608),b=n(80708),y=n(90459),v=n(36722),E=n(95645),g=n(20697),x=n(52587),Z=n(92156),T=n(32642),w=n(62410),k=n(56682),C=n(23349),P=n(82398),_=n(53352),D=function(){return(D=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},O=["description","modified"],I={isFetching:!1},N=function(e,t){switch(t.type){case"setFetching":return D(D({},e),{isFetching:t.payload})}return e};const V=function(e){var t,n,a=e.name,r=e.id,c=e.updateData,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["name","id","updateData"]),u=(0,C.Z)(),m=(0,i.useDispatch)(),p=(0,l.useReducer)(N,I),d=p[0].isFetching,V=p[1];return o().createElement(b.GalleryItem,null,o().createElement(x.r,{key:r,ouiaId:"platform-"+r},o().createElement(b.CardHeader,null,o().createElement(y.$h,null,o().createElement(y.Gh,null,o().createElement(T.Z,{height:40,sourceId:r})),o().createElement(b.Tooltip,{content:o().createElement(b.Text,null,u(_.Z.refreshTooltip))},o().createElement(b.Button,{id:"refresh-platform-"+r,ouiaId:"refresh-platform-"+r,variant:"link",onClick:function(){return e=r,V({type:"setFetching",payload:!0}),void Promise.resolve(m((0,h.TP)(e))).then((function(){return e=void 0,t=void 0,a=function(){return function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,(function(e){switch(e.label){case 0:return[4,(0,f.gw)(1e4)];case 1:return e.sent(),V({type:"setFetching",payload:!1}),c(),[2]}}))},new((n=void 0)||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}));var e,t,n,a}));var e},isDisabled:d},d?o().createElement(P.SyncAltIcon,{key:"refresh-"+r,color:"grey"}):o().createElement(P.SyncAltIcon,{key:"refresh-"+r,color:"blue"}))))),o().createElement(Z.k,null,o().createElement(b.TextContent,null,o().createElement(g.Z,{pathname:v.d2,searchParams:{platform:r}},o().createElement(b.Text,{title:a,className:"pf-u-mb-0",component:b.TextVariants.h3},o().createElement(E.Z,null,a))),d?o().createElement(b.TextContent,{className:"pf-u-mb-md"},o().createElement(b.Text,{component:b.TextVariants.small,className:"pf-u-mb-0"},"Retrieving data....  ")):s.last_successful_refresh_at&&o().createElement(b.TextContent,{className:"pf-u-mb-md"},o().createElement(b.Text,{component:b.TextVariants.small,className:"pf-u-mb-0"},"Last refreshed  ",o().createElement(w.Z,{date:s.last_successful_refresh_at,type:"relative"}))),s.info&&o().createElement(b.TextContent,{className:"pf-u-mb-md"},o().createElement(b.Text,{component:b.TextVariants.small,className:"pf-u-mb-0"},u(_.Z.platformVersion)),o().createElement(b.Text,{component:b.TextVariants.small,className:"pf-u-mb-0"},null===(t=null==s?void 0:s.info)||void 0===t?void 0:t.version),o().createElement(b.Text,{component:b.TextVariants.small,className:"pf-u-mb-0"},u(_.Z.ansibleVersion)),o().createElement(b.Text,{component:b.TextVariants.small,className:"pf-u-mb-0"},null===(n=null==s?void 0:s.info)||void 0===n?void 0:n.ansible_version))),o().createElement(y.ZP,D({},D({name:a},s),{toDisplay:O}))),o().createElement(b.CardFooter,null,o().createElement(b.Label,{variant:"filled",color:"available"===s.availability_status?"green":"red"},"available"===s.availability_status?u(k.Z.available):u(k.Z.notAvailable)))))};var F=n(12700),S=n(33188),L=n(72510),j=n(97881),R=n(35388);const A=function(){var e=(0,C.Z)(),t=(0,l.useState)(""),n=(0,r.Z)(t,2),b=n[0],y=n[1],v=(0,i.useSelector)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),E=v.platforms,g=v.isLoading,x=(0,i.useDispatch)();(0,l.useContext)(L.Z).userIdentity.identity.user.is_org_admin,(0,l.useEffect)((function(){x((0,h.dw)()),(0,f.k3)()}),[]);var Z={items:E.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})).map((function(e){return o().createElement(V,(0,a.Z)({ouiaId:"platform-".concat(e.id),key:e.id},e,{updateData:function(){return x((0,h.dw)())}}))})),isLoading:g&&0===E.length},T={PrimaryAction:b&&""!==b?function(){return o().createElement(c.Button,{ouiaId:"clear-filter",variant:"link",onClick:function(){return y("")}},e(j.Z.clearFilters))}:void 0,title:e(b&&""!==b?j.Z.noResults:_.Z.noPlatforms),description:b&&""!==b?e(j.Z.noResultsDescription):o().createElement(s.Text,{id:"platform_doc_url",component:s.TextVariants.p},e(_.Z.platformsNoDataDescription),"  ",o().createElement("a",{href:R.qb,target:"_blank",rel:"noopener noreferrer"},e(_.Z.platformsDocTitle))),Icon:b&&""!==b?u.ZP:m.ZP};return o().createElement(l.Fragment,null,o().createElement(p.Z,{schema:(0,F.qG)({onFilterChange:function(e){return y(e)},searchValue:b,title:e(_.Z.title)})}),o().createElement(d.Z,(0,a.Z)({},Z,{renderEmptyState:function(){return o().createElement(S.Z,T)}})))}}}]);