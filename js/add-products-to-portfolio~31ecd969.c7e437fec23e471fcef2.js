(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{428:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(10),i=n.n(a),c=n(390),s=function(e){var t=e.handleCheck,n=e.isChecked,r=e.id;return o.a.createElement(c.Checkbox,{onClick:function(e){return e.stopPropagation()},isChecked:n,onChange:t,"aria-label":"card checkbox",id:r})};s.propTypes={handleCheck:i.a.func,isChecked:i.a.bool,id:i.a.string},t.a=s},429:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(376),i=n.n(a),c=n(40),s=n.n(c),l=n(0),u=n.n(l),p=n(10),f=n.n(p),d=n(35),m=n(50),h=n(407),b=n(442),g=n(408),v=n(409),y=function(e){var t=e.name,n=(e.display_name,e.distributor),r=e.pathname,o=e.searchParams,a=e.preserveSearch,c=e.portfolioName,p=s()(e,["name","display_name","distributor","pathname","searchParams","preserveSearch","portfolioName"]);return u.a.createElement(v.a,null,u.a.createElement(m.TextContent,null,u.a.createElement(b.a,{pathname:r,searchParams:o,preserveSearch:a},u.a.createElement(d.Text,{component:d.TextVariants.h3,title:t},u.a.createElement(g.a,null,t))),n&&u.a.createElement(d.Text,{component:d.TextVariants.small},n),c&&u.a.createElement(l.Fragment,null,u.a.createElement(d.Text,{className:"pf-u-mb-0",component:"small"},"Portfolio"),u.a.createElement(d.Text,null,c))),u.a.createElement(h.a,i()({toDisplay:[p.description?"description":"long_description"]},p)))};y.propTypes={name:f.a.string,display_name:f.a.string,distributor:f.a.string,long_description:f.a.string,description:f.a.string,pathname:f.a.string,preserveSearch:f.a.bool,searchParams:f.a.shape(o()({},f.a.string,f.a.string)),portfolioName:f.a.string},t.a=y},446:function(e,t,n){"use strict";t.__esModule=!0,t.FilterIconConfig={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0,transform:""},t.FilterIcon=n(172).createIcon(t.FilterIconConfig),t.default=t.FilterIcon},472:function(e,t,n){"use strict";var r=n(376),o=n.n(r),a=n(40),i=n.n(a),c=n(19),s=n.n(c),l=n(0),u=n.n(l),p=n(20),f=n(10),d=n.n(f),m=n(52),h=n(99);function b(){var e=s()(["\n  margin-right: ",";\n"]);return b=function(){return e},e}function g(){var e=s()(["\n  display: flex !important;\n  align-items: center;\n"]);return g=function(){return e},e}var v=Object(p.b)(m.Button)(g()),y=p.b.span(b(),(function(e){return e.showSpinner?"8px":"0"})),O=function(e){var t=e.children,n=e.showSpinner,r=e.isDisabled,a=i()(e,["children","showSpinner","isDisabled"]);return u.a.createElement(v,o()({},a,{isDisabled:r}),u.a.createElement(y,{showSpinner:n},t),n&&u.a.createElement(h.Spinner,{size:"md"}))};O.propTypes={showSpinner:d.a.bool,children:d.a.oneOfType([d.a.node,d.a.arrayOf(d.a.node)]),isDisabled:d.a.bool},O.defaultProps={showSpinner:!1,isDisabled:!1},t.a=O},473:function(e,t,n){var r=n(641);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},499:function(e,t,n){"use strict";var r=n(40),o=n.n(r),a=n(19),i=n.n(a),c=n(0),s=n.n(c),l=n(10),u=n.n(l),p=n(395),f=n(411),d=n(67),m=n(421),h=n(428),b=n(429),g=n(410),v=n(20);function y(){var e=i()(["\n  flex: 1;\n"]);return y=function(){return e},e}var O=Object(v.b)(d.Level)(y()),j=function(e){e.src;var t=o()(e,["src"]);return s.a.createElement(g.a,{key:t.id},s.a.createElement(p.CardHeader,null,s.a.createElement(O,null,s.a.createElement(m.a,{height:40,sourceId:t.source_id}),t.editMode&&s.a.createElement(h.a,{id:t.id,isChecked:t.checked,handleCheck:t.onToggleItemSelect}))),s.a.createElement(b.a,t),s.a.createElement(f.CardFooter,null))};j.propTypes={id:u.a.string.isRequired,service_offering_icon_id:u.a.string,source_id:u.a.string,platformId:u.a.string,name:u.a.string,editMode:u.a.bool,checked:u.a.bool,onToggleItemSelect:u.a.func,src:u.a.string},t.a=j},635:function(e,t,n){var r=n(636);e.exports=function(e,t){return r(e,t)}},636:function(e,t,n){var r=n(637),o=n(657);e.exports=function e(t,n,a,i,c){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,i,e,c))}},637:function(e,t,n){var r=n(638),o=n(645),a=n(650),i=n(651),c=n(654),s=n(113),l=n(655),u=n(656),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,d,m,h){var b=s(e),g=s(t),v=b?"[object Array]":c(e),y=g?"[object Array]":c(t),O=(v="[object Arguments]"==v?p:v)==p,j=(y="[object Arguments]"==y?p:y)==p,_=v==y;if(_&&l(e)){if(!l(t))return!1;b=!0,O=!1}if(_&&!O)return h||(h=new r),b||u(e)?o(e,t,n,d,m,h):a(e,t,v,n,d,m,h);if(!(1&n)){var E=O&&f.call(e,"__wrapped__"),k=j&&f.call(t,"__wrapped__");if(E||k){var P=E?e.value():e,x=k?t.value():t;return h||(h=new r),m(P,x,n,d,h)}}return!!_&&(h||(h=new r),i(e,t,n,d,m,h))}},638:function(e,t,n){var r=n(639),o=n(640),a=n(642),i=n(643),c=n(644);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,e.exports=s},639:function(e,t){e.exports=function(){this.__data__=[],this.size=0}},640:function(e,t,n){var r=n(473),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},641:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},642:function(e,t,n){var r=n(473);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},643:function(e,t,n){var r=n(473);e.exports=function(e){return r(this.__data__,e)>-1}},644:function(e,t,n){var r=n(473);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},645:function(e,t,n){var r=n(646),o=n(647),a=n(648);e.exports=function(e,t,n,i,c,s){var l=1&n,u=e.length,p=t.length;if(u!=p&&!(l&&p>u))return!1;var f=s.get(e);if(f&&s.get(t))return f==t;var d=-1,m=!0,h=2&n?new r:void 0;for(s.set(e,t),s.set(t,e);++d<u;){var b=e[d],g=t[d];if(i)var v=l?i(g,b,d,t,e,s):i(b,g,d,e,t,s);if(void 0!==v){if(v)continue;m=!1;break}if(h){if(!o(t,(function(e,t){if(!a(h,t)&&(b===e||c(b,e,n,i,s)))return h.push(t)}))){m=!1;break}}else if(b!==g&&!c(b,g,n,i,s)){m=!1;break}}return s.delete(e),s.delete(t),m}},646:function(e,t,n){var r=n(113);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},647:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},648:function(e,t,n){var r=n(649);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},649:function(e,t){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},650:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},651:function(e,t,n){var r=n(652),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,a,i,c){var s=1&n,l=r(e),u=l.length;if(u!=r(t).length&&!s)return!1;for(var p=u;p--;){var f=l[p];if(!(s?f in t:o.call(t,f)))return!1}var d=c.get(e);if(d&&c.get(t))return d==t;var m=!0;c.set(e,t),c.set(t,e);for(var h=s;++p<u;){var b=e[f=l[p]],g=t[f];if(a)var v=s?a(g,b,f,t,e,c):a(b,g,f,e,t,c);if(!(void 0===v?b===g||i(b,g,n,a,c):v)){m=!1;break}h||(h="constructor"==f)}if(m&&!h){var y=e.constructor,O=t.constructor;y==O||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof O&&O instanceof O||(m=!1)}return c.delete(e),c.delete(t),m}},652:function(e,t,n){var r=n(653)(Object.keys,Object);e.exports=r},653:function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},654:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},655:function(e,t){e.exports=function(){return!1}},656:function(e,t){e.exports=function(){return!1}},657:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},686:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n.n(r),a=n(31),i=n.n(a),c=n(1),s=n.n(c),l=n(376),u=n.n(l),p=n(0),f=n.n(p),d=n(10),m=n.n(d),h=n(40),b=n.n(h),g=n(397),v=n.n(g),y=n(446),O=n.n(y),j=n(413),_=n(399),E=function(e){var t=e.platform;return f.a.createElement(_.b,{Icon:t?v.a:O.a,title:t?"No products match filter parameters":"Please choose platform",description:t?"Please try to extend your search parameters ":"In order to select products for your portfolio you must choose platform first"})};E.propTypes={platform:m.a.any};var k=function(e){var t=e.platform,n=b()(e,["platform"]);return f.a.createElement(j.a,u()({editMode:!0},n,{renderEmptyState:function(){return f.a.createElement(E,{platform:t})}}))};k.propTypes={checkedItems:m.a.arrayOf(m.a.string),platform:m.a.any},k.defaultProps={checkedItems:[]};var P=k,x=n(403),T=n(51),w=n(499),C=n(406),F=n(478),S=n(441),I=n(635),R=n.n(I);m.a.oneOfType([m.a.node,m.a.arrayOf(m.a.node)]).isRequired;var D=function(e){var t=e.onChange,n=b()(e,["onChange"]),r=Object(p.useState)(void 0),o=i()(r,2),a=o[0],c=o[1];return f.a.createElement("div",{key:"filter-select",id:"filter-select",className:"filter-select"},f.a.createElement(S.InternalSelect,u()({isDisabled:!n.options||0===n.options.length,name:"filter-select",simpleValue:!1,onChange:function(e){t(e||a),c(e||a)},value:a},n)))};D.propTypes={options:m.a.array,onChange:m.a.func.isRequired};var A=Object(p.memo)(D,(function(e,t){return R()(e.options,t.options)})),L=n(472),V=n(381);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.options,n=e.isFetching,r=e.searchValue,o=e.portfolioName,a=e.itemsSelected,i=e.onOptionSelect,c=e.onFilterChange,s=e.portfolioRoute,l=e.onClickAddToPortfolio,u=e.meta,p=e.platformId,f=e.fetchPlatformItems;return{fields:[{component:C.b.TOP_TOOLBAR,key:"add-products-toolbar",fields:[{component:C.b.TOP_TOOLBAR_TITLE,title:"Add products: ".concat(o),key:"add-products-title"},{component:C.b.LEVEL,key:"add-products-actions",fields:[{component:C.b.TOOLBAR,key:"add-products-actions-toolbar",fields:[{component:C.b.TOOLBAR_GROUP,key:"products-filter-group",fields:[{component:A,key:"select-platforms",id:"products-platform-select",isMulti:!1,placeholder:"Filter by Platform",options:t,onChange:i},{component:C.b.FILTER_TOOLBAR_ITEM,key:"filter-products-input",onFilterChange:c,searchValue:r,isDisabled:!p,placeholder:"Filter products"}]},N({groupName:"cancel-group-item"},Object(F.a)({key:"add-products-cancel-button",pathname:s,variant:"link","aria-label":"Cancel Add products to Portfolio",preserveSearch:!0,title:"Cancel"})),{component:C.b.TOOLBAR_ITEM,key:"add-group-item",fields:[{key:"portfolio-items-add-group",component:L.a,variant:"primary","aria-label":"Add products to Portfolio",title:"Add",type:"button",onClick:l,isDisabled:!a||n,showSpinner:n,children:"Add",id:"add-products-to-portfolio"}]}]},{component:C.b.LEVEL_ITEM,key:"pagination-item",fields:u?[{component:V.a,key:"add-products-pagination",meta:u,apiProps:p,apiRequest:f,isCompact:!0}]:[]}]}]}]}},q=n(384),z=n(394),H=n(412),J=n(23),G=n(414),U=n(378);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return e.map((function(e){return f.a.createElement(w.a,u()({key:e.id},e,{editMode:!0,onToggleItemSelect:function(){return t(e.id)},checked:n.includes(e.id)}))}))},X={filterValue:"",isFetching:!1,isFiltering:!1},Y=function(e,t){switch(t.type){case"setFetching":return Q(Q({},e),{},{isFetching:t.payload});case"setFilterValue":return Q(Q({},e),{},{filterValue:t.payload});case"setFilteringFlag":return Q(Q({},e),{},{isFiltering:t.payload})}return e},Z=Object(U.a)((function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T.a;r(!0),n(Object(q.b)(e,t,Q(Q({},o),{},{filter:t}))).then((function(){return r(!1)}))}),1e3),$=function(e){var t=e.portfolioRoute,n=Object(p.useState)(void 0),r=i()(n,2),a=r[0],c=r[1],s=Object(p.useState)([]),l=i()(s,2),u=l[0],d=l[1],m=Object(p.useReducer)(Y,X),h=i()(m,2),b=h[0],g=b.filterValue,v=b.isFetching,y=h[1],O=Object(H.a)().push,j=Object(J.useDispatch)(),_=Object(J.useSelector)((function(e){var t=e.portfolioReducer.selectedPortfolio,n=e.platformReducer;return{platforms:n.platforms,platformItems:n.platformItems,isLoading:n.isPlatformDataLoading,portfolio:t}})),E=_.portfolio,k=_.platforms,w=_.platformItems,C=_.isLoading;Object(p.useEffect)((function(){j(Object(q.c)())}),[]);var F=a&&w[a.id]?w[a.id].data:[],S=a&&w[a.id]&&w[a.id].meta;return f.a.createElement(p.Fragment,null,f.a.createElement(x.a,{schema:B({options:k.map((function(e){return{value:e.id,label:e.name,id:e.id}})),isFetching:v,portfolioName:E&&E.name||"",itemsSelected:u.length>0,onOptionSelect:function(e){c(e),j(Object(q.b)(e.id,g,T.a))},onFilterChange:function(e){return function(e){y({type:"setFilterValue",payload:e}),Z(a.id,e,j,(function(e){return y({type:"setFilteringFlag",payload:e})}),Q(Q({},S),{},{offset:0}))}(e)},portfolioRoute:t,onClickAddToPortfolio:function(){return j({type:"setFetching",payload:!0}),j(Object(z.b)(E.id,u)).then((function(){return j({type:"setFetching",payload:!1})})).then((function(){return O({pathname:t,search:"?portfolio=".concat(E.id)})})).then((function(){return j(Object(z.f)(E.id))})).catch((function(){return j({type:"setFetching",payload:!1})}))},meta:S,platformId:a&&a.id,searchValue:g,fetchPlatformItems:function(e,t){return j(Object(q.b)(e,g,t))}})}),f.a.createElement(P,{platform:!!a,checkedItems:u,isLoading:C,items:W(F,(function(e){return d(function(e){var t=u.indexOf(e);return t>-1?[].concat(o()(u.slice(0,t)),o()(u.slice(t+1))):[].concat(o()(u),[e])}(e))}),u)}),S&&S.count>0&&f.a.createElement(G.a,null,f.a.createElement(V.a,{meta:S,apiProps:a&&a.id,apiRequest:function(e,t){return Object(q.b)(e,g,t)},dropDirection:"up"})))};$.propTypes={portfolioRoute:m.a.string.isRequired};t.default=$}}]);
//# sourceMappingURL=../sourcemaps/add-products-to-portfolio~31ecd969.js.map