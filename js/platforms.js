(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(25),c=n.n(o),i=n(37),l=n.n(i),u=n(81),s=n.n(u),p=n(0),f=n.n(p),m=n(3),d=n.n(m),b=n(24),y=n(46),v=function(e,t,n){var r=Object.entries(t).map((function(e){var t=s()(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&");return n?"".concat(e).concat(r.length>0?"&".concat(r):""):r.length>0?"?".concat(r):""},O=function(e){var t=e.pathname,n=e.searchParams,r=e.nav,a=e.preserveSearch,o=l()(e,["pathname","searchParams","nav","preserveSearch"]),i=Object(b.h)().search,u=r?y.c:y.b,s={pathname:t,search:v(i,n,a)};return f.a.createElement(u,c()({to:s},o))};O.propTypes={pathname:d.a.string.isRequired,searchParams:d.a.shape(a()({},d.a.string,d.a.string)),nav:d.a.bool,preserveSearch:d.a.bool},O.defaultProps={nav:!1,preserveSearch:!1,searchParams:{}},t.a=O},336:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(37),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(82),f=n(144),m=n(145),d=n(381),b=n(357),y=n(400),v=n(344),O=n.n(v),g=n(149),h=n.n(g),E=n(376),T=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.placeholder,a=e.isClearable;return l.a.createElement(b.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(E.TextInput,{placeholder:r,value:t,type:"text",onChange:n,"aria-label":r}),l.a.createElement("span",{className:"filter-icons-container"},a&&t&&l.a.createElement(h.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(O.a,null))))};T.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},T.defaultProps={searchValue:"",isClearable:!1};var j=T,P=n(355),_=n(356),L=n(333);n.d(t,"b",(function(){return k}));var w=function(e){var t=e.title,n=c()(e,["title"]);return l.a.createElement(p.Button,n,t)};w.propTypes={title:s.a.string.isRequired};var I={TopToolbar:P.b,TopToolbarTitle:P.a,Toolbar:function(e){var t=a()({},e);return l.a.createElement(d.Toolbar,a()({className:"pf-u-pr-lg toolbar"},t))},ToolbarGroup:y.ToolbarGroup,ToolbarItem:b.ToolbarItem,FilterToolbarItem:j,Link:L.a,Level:f.Level,LevelItem:m.LevelItem,Button:w,AppTabs:_.a},k={TOP_TOOLBAR:"TopToolbar",TOP_TOOLBAR_TITLE:"TopToolbarTitle",TOOLBAR:"Toolbar",TOOLBAR_ITEM:"ToolbarItem",TOOLBAR_GROUP:"ToolbarGroup",FILTER_TOOLBAR_ITEM:"FilterToolbarItem",LINK:"Link",BUTTON:"Button",LEVEL:"Level",LEVEL_ITEM:"LevelItem",TABS:"AppTabs"};t.a=I},337:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(401),c=n.n(o),i=n(24);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.g)();return u({},t,{push:function(n){return e?t.push(function(e){return"string"==typeof e?e.split("?")[0]:"object"===c()(e)?u({},e,{search:void 0}):e}(n)):t.push(n)}})}},338:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(37),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(364),f=n(148),m=n(47),d=function(e){var t=e.meta,n=t.limit,r=t.count,o=t.offset,i=e.apiProps,u=e.apiRequest,s=e.className,d=e.isCompact,b=c()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:s},l.a.createElement(f.Pagination,a()({perPage:n||50,itemCount:r||0,onPerPageSelect:function(e,t){return u(i,{offset:o,limit:t})},page:Object(m.b)(n,o),onSetPage:function(e,t,r){var a={offset:Object(m.c)(t,n),limit:n},o=function(){return u(i,a)};return r?Object(p.a)(o,250)():o()},direction:"down",isCompact:d},b)))};d.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},d.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1},t.a=d},342:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getPlatforms",(function(){return b})),n.d(r,"getPlatform",(function(){return y})),n.d(r,"getPlatformItems",(function(){return v})),n.d(r,"getPlatformInventories",(function(){return O})),n.d(r,"getServiceOffering",(function(){return g}));var a=n(1),o=n.n(a),c=n(2),i=n(81),l=n.n(i),u=n(54),s=n(11),p=n(47);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=Object(u.a)(),d=Object(u.b)(),b=function(){return d.post("".concat(s.h,"/graphql"),{query:'\nquery {\n  application_types (filter: { name: "/insights/platform/catalog" }) {\n    id\n    name\n    sources {\n      id\n      name\n      source_type_id\n    }\n  }\n}'}).then((function(e){return e.data.application_types})).then((function(e){return l()(e,1)[0].sources}))},y=function(e){return m.get("".concat(s.h,"/sources/").concat(e))},v=function(e,t,n){var r=t?"&filter[name][contains_i]=".concat(t):"";return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_offerings?filter[archived_at][nil]").concat(r).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_offerings"))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a;return e?m.get("".concat(s.i,"/sources/").concat(e,"/service_inventories?filter[name][contains_i]=").concat(t).concat(n?"&limit=".concat(n.limit,"&offset=").concat(n.offset):"")):m.get("".concat(s.i,"/service_inventories?limit=").concat(n.limit,"&offset=").concat(n.offset))},g=function(e,t){return Promise.all([m.get("".concat(s.i,"/service_offerings/").concat(e)),m.get("".concat(s.h,"/sources/").concat(t)).then((function(e){return m.get("".concat(s.h,"/source_types/").concat(e.source_type_id)).then((function(t){var n=t.icon_url;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{icon_url:n})}))}))]).then((function(e){var t=l()(e,2);return{service:t[0],source:t[1]}}))};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return P})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return L}));var T=function(){return function(e){return e((function(e){return e({type:"".concat(c.j,"_PENDING")}),b().then((function(t){return e({type:"".concat(c.j,"_FULFILLED"),payload:t})})).catch((function(t){return e({type:"".concat(c.j,"_REJECTED"),payload:t})}))}))}},j=function(e,t,n){return{type:c.m,payload:v(e,t,n),meta:E({platformId:e,filter:t},n)}},P=function(e){return{type:c.i,payload:y(e)}},_=function(e,t,n){return{type:c.k,payload:O(e,t,n)}},L=function(){return{type:c.u,payload:g.apply(r,arguments)}}},343:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(37),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(333),f=function(e){var t=e.children,n=e.pathname,r=c()(e,["children","pathname"]);return n?l.a.createElement(p.a,a()({pathname:n},r),t):t};f.propTypes={pathname:s.a.string,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]).isRequired},t.a=f},347:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(26),c=n.n(o),i=n(0),l=n.n(i),u=n(378),s=n.n(u),p=n(349);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return O}));var d=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},b=function(e,t){var n=e.display_name,r=e.name;return(n||r).trim().toLowerCase().includes(t.toLowerCase())},y={PortfolioItem:["name","description","long_description","distributor","documentation_url","support_url"],Portfolio:["description"]},v=function(e,t,n){var r,o,i=n.getState().openApiReducer.schema.components.schemas,l=Object.keys(e).filter((function(e){return!s()(i,"".concat(t,".properties.").concat(e,".readOnly"))})).reduce((function(t,n){return e[n]?m({},t,a()({},n,e[n])):t}),{});return r=l,o=y[t],[].concat(c()(Object.keys(r)),c()(o)).reduce((function(e,t){return m({},e,a()({},t,void 0===r[t]?null:r[t]))}),{})},O=function(e){return l.a.createElement("span",{key:e},l.a.createElement(p.DateFormat,{date:e,type:"relative"}))}},350:function(e,t,n){"use strict";var r=n(25),a=n.n(r),o=n(37),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(336),f=Object(i.createContext)(),m=function(e){var t=e.component,n=c()(e,["component"]);return l.a.createElement(f.Consumer,null,(function(e){var r=e.componentMapper,a="string"==typeof t?r[t]:t;return l.a.createElement(a,n)}))};m.propTypes={component:s.a.oneOfType([s.a.string,s.a.node,s.a.func,s.a.element]).isRequired};var d=function e(t){return t.hidden?null:t.map((function(t){var n=t.fields,r=t.key,o=c()(t,["fields","key"]);return n?l.a.createElement(m,a()({key:r},o),e(n)):l.a.createElement(m,a()({key:r},o))}))},b=function(e){var t=e.schema,n=e.componentMapper;return l.a.createElement(f.Provider,{value:{render:d,componentMapper:n}},d(t.fields))};b.propTypes={schema:s.a.shape({fields:s.a.array.isRequired}).isRequired,componentMapper:s.a.object},b.defaultProps={componentMapper:p.a},t.a=b},351:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(374),c=n(375),i=n(32),l=n(343);t.a=function(){var e=Object(i.useSelector)((function(e){return e.breadcrumbsReducer.fragments}));return e.length<=1?null:a.a.createElement(o.Breadcrumb,null,e.map((function(t,n){var r=t.title,o=t.pathname,i=t.searchParams;return a.a.createElement(l.a,{pathname:e.length!==n+1?o:void 0,searchParams:i,nav:!0,exact:!0,key:o,className:"pf-c-breadcrumb__item"},a.a.createElement(c.BreadcrumbItem,{isActive:e.length===n+1},r))})))}},355:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(25),a=n.n(r),o=n(37),c=n.n(o),i=n(0),l=n.n(i),u=n(3),s=n.n(u),p=n(144),f=n(145),m=n(20),d=n(38),b=n(382),y=n(48),v=n(351),O=function(e){var t=e.children,n=e.paddingBottom,r=e.breadcrumbs,o=(e.breadcrumbsSpacing,c()(e,["children","paddingBottom","breadcrumbs","breadcrumbsSpacing"]));return l.a.createElement("div",a()({className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-lg":""," top-toolbar")},o),r&&l.a.createElement("div",{className:"pf-u-mb-md"}," ",l.a.createElement(v.a,null)),t)};O.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired,paddingBottom:s.a.bool,breadcrumbs:s.a.bool,breadcrumbsSpacing:s.a.bool},O.defaultProps={paddingBottom:!0,breadcrumbs:!0},t.b=O;var g=function(e){var t=e.title,n=e.description,r=e.children,o=e.noData,u=c()(e,["title","description","children","noData"]);return l.a.createElement(i.Fragment,null,l.a.createElement(p.Level,a()({className:Object(b.a)("top-toolbar-title-container",{"pf-u-mb-lg":!o})},u),l.a.createElement(f.LevelItem,null,l.a.createElement(d.TextContent,{className:"top-toolbar-title"},l.a.createElement(m.Text,{component:m.TextVariants.h2,className:"pf-u-m-0 pf-u-mr-md"},t),n&&l.a.createElement(m.Text,{className:"top-toolbar-title-description",component:m.TextVariants.p},n))),r))};g.propTypes={title:s.a.node,description:s.a.node,children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)]),noData:s.a.bool},g.defaultProps={title:l.a.createElement(y.h,null)}},356:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(383),l=n(384),u=n(24),s=n(337),p=function(e){var t=e.tabItems,n=Object(s.a)().push,r=Object(u.h)(),o=r.pathname,c=r.search,p=t.find((function(e){var t=e.name;return o.includes(t)}));return a.a.createElement(i.Tabs,{activeKey:p?p.eventKey:0,onSelect:function(e,r){return n({pathname:t[r].name,search:c})}},t.map((function(e){return a.a.createElement(l.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};p.propTypes={tabItems:c.a.array.isRequired},t.a=p},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(82),l=n(403),u=n(404),s=n(405),p=n(406),f=n(20),m=n(38),d=n(333),b=function(e){var t=e.title,n=e.Icon,r=e.description,o=e.PrimaryAction,c=e.renderDescription;return a.a.createElement("div",{className:"pf-u-mt-xl"},a.a.createElement(l.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(u.EmptyStateIcon,{icon:n}),a.a.createElement(m.TextContent,null,a.a.createElement(f.Text,{component:f.TextVariants.h1},t)),a.a.createElement(s.EmptyStateBody,null,r,c()),a.a.createElement(p.EmptyStateSecondaryActions,null,o&&a.a.createElement(o,null))))};b.defaultProps={renderDescription:function(){return null}},b.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string.isRequired,PrimaryAction:c.a.any,renderDescription:c.a.func},t.b=b;var y=function(e){var t=e.url,n=e.label;return a.a.createElement(d.a,{pathname:t,preserveSearch:!0},a.a.createElement(i.Button,{variant:"primary"},n))};y.propTypes={url:c.a.string.isRequired,label:c.a.string.isRequired}},360:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(361),l=n(20),u=n(87),s=n(48),p=function(){return a.a.createElement("div",null,a.a.createElement(l.Text,{component:l.TextVariants.h1},"No items found"))},f=function(e){var t=e.isLoading,n=e.items,r=e.renderEmptyState;return t?a.a.createElement(s.b,null):0===n.length?r?r():a.a.createElement(p,null):a.a.createElement(i.Section,{type:"content"},a.a.createElement(u.Gallery,{gutter:"md",className:"content-gallery"},n))};f.propTypes={isLoading:c.a.bool,items:c.a.array,renderEmptyState:c.a.func},t.a=f},365:function(e,t){var n=Array.isArray;e.exports=n},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;var r=u(n(3)),a=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(4),c=u(n(83)),i=u(n(372));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,l=void 0===r?"":r,u=p(e,["children","className"]);return a.createElement("div",s({className:(0,o.css)(c.default.cardHeader,i.default.title,i.default.modifiers.md,l)},u),n)};t.CardHeader=f,f.propTypes={children:r.default.node,className:r.default.string}},368:function(e,t,n){"use strict";var r=n(37),a=n.n(r),o=n(0),c=n.n(o),i=n(3),l=n.n(i),u=function(e){var t=e.toDisplay,n=void 0===t?[]:t,r=a()(e,["toDisplay"]);return n.map((function(e){return c.a.createElement("div",{className:"card-prop-text",key:"card-prop-".concat(e)},r[e])}))};u.propTypes={toDisplay:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.node,l.a.arrayOf(l.a.node)]))},u.defaultProps={toDisplay:[]},t.a=u},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardFooter=void 0;var r=l(n(3)),a=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n(0)),o=l(n(83)),c=n(4);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,i=void 0===r?"":r,l=e.component,p=void 0===l?"div":l,f=s(e,["children","className","component"]),m=p;return a.createElement(m,u({className:(0,c.css)(o.default.cardFooter,i)},f),n)};t.CardFooter=p,p.propTypes={children:r.default.node,className:r.default.string,component:r.default.any}},378:function(e,t,n){var r=n(390);e.exports=function(e,t,n){var a=null==e?void 0:r(e,t);return void 0===a?n:a}},390:function(e,t,n){var r=n(391),a=n(397);e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[a(t[n++])];return n&&n==o?e:void 0}},391:function(e,t,n){var r=n(365),a=n(392),o=n(394),c=n(396);e.exports=function(e,t){return r(e)?e:a(e,t)?[e]:o(c(e))}},392:function(e,t,n){var r=n(365),a=n(393),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(c.test(e)||!o.test(e)||null!=t&&e in Object(t))}},393:function(e,t){e.exports=function(){return!1}},394:function(e,t,n){var r=n(395),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,c=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,(function(e,n,r,a){t.push(r?a.replace(o,"$1"):n||e)})),t}));e.exports=c},395:function(e,t){e.exports=function(e){return e}},396:function(e,t){e.exports=function(e){return e}},397:function(e,t){e.exports=function(e){return e}},411:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var r=n(356),a=n(336),o=n(338),c=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.title;return{fields:[{component:a.b.TOP_TOOLBAR,key:"platforms-toolbar",fields:[{component:a.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:r},{component:a.b.LEVEL,key:"platforms-toolbar-actions",fields:[{component:a.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:a.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:"Filter by platform..."}]},{component:a.b.LEVEL_ITEM,key:"pagination-level-item",fields:[]}]}]}]}},i=function(e){var t=e.title,n=e.paddingBottom,o=e.tabItems;return{fields:[{component:a.b.TOP_TOOLBAR,key:"platforms-toolbar",paddingBottom:n,fields:[{component:a.b.TOP_TOOLBAR_TITLE,key:"platforms-toolbar-title",title:t},{component:a.b.LEVEL_ITEM,key:"tabs-level-item",fields:o?[{component:r.a,key:"platform-tabs",tabItems:o}]:[]}]}]}},l=function(e){var t=e.searchValue,n=e.onFilterChange,r=e.meta,c=e.apiRequest,i=e.filterPlaceholder;return{fields:[{component:a.b.TOOLBAR,key:"platforms-filter-toolbar",className:"pf-u-pt-md pf-u-pb-md pf-u-pr-lg pf-u-pl-lg toolbar",fields:[{component:a.b.LEVEL,key:"platforms-toolbar-actions",className:"pf-m-grow",fields:[{component:a.b.LEVEL_ITEM,key:"input-level-item",fields:[{component:a.b.FILTER_TOOLBAR_ITEM,key:"platforms-toolbar-filter-input",searchValue:t,onFilterChange:n,placeholder:i}]},{component:a.b.LEVEL_ITEM,key:"pagination-level-item",fields:r.count>0?[{component:o.a,key:"platform-pagination",apiRequest:c,meta:r,isCompact:!0}]:[]}]}]}]}}},486:function(e,t,n){e.exports=n.p+"fonts/platform-openshift.svg"},487:function(e,t,n){e.exports=n.p+"fonts/platform-amazon.png"},488:function(e,t,n){e.exports=n.p+"fonts/platform-tower.png"},489:function(e,t,n){e.exports=n.p+"fonts/platform-default.svg"},573:function(e,t,n){"use strict";n.r(t);var r=n(25),a=n.n(r),o=n(81),c=n.n(o),i=n(0),l=n.n(i),u=n(32),s=n(20),p=n(38),f=n(344),m=n.n(f),d=n(347),b=n(350),y=n(360),v=n(342),O=n(1),g=n.n(O),h=n(37),E=n.n(h),T=n(3),j=n.n(T),P=n(56),_=n(366),L=n(57),w=n(369),I=n(88),k=n(489),R=n.n(k),D=n(486),x=n.n(D),C=n(487),S=n.n(C),N=n(488),B=n.n(N),q=function(e){var t=e.src,n=E()(e,["src"]);return l.a.createElement("img",a()({src:t},n))};q.propTypes={src:j.a.string.isRequired};var M=q,A=n(368),V=n(333),F=n(49);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var K=["description","modified"],U={1:x.a,2:S.a,3:B.a},H=function(e){var t=e.name,n=e.id,r=E()(e,["name","id"]);return l.a.createElement(I.GalleryItem,null,l.a.createElement(V.a,{pathname:F.r,searchParams:{platform:n},className:"card-link"},l.a.createElement(P.Card,{key:n,className:"content-gallery-card"},l.a.createElement(_.CardHeader,null,l.a.createElement(M,{src:U[r.source_type_id]||R.a,width:"80",height:"40"})),l.a.createElement(L.CardBody,null,l.a.createElement("h4",null,t),l.a.createElement(A.a,a()({},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:t},r),{toDisplay:K}))),l.a.createElement(w.CardFooter,null))))};H.propTypes={history:j.a.object,imageUrl:j.a.string,name:j.a.string,source_type_id:j.a.string,id:j.a.string};var W=H,J=n(411),$=n(358);t.default=function(){var e=Object(i.useState)(""),t=c()(e,2),n=t[0],r=t[1],o=Object(u.useSelector)((function(e){var t=e.platformReducer;return{platforms:t.platforms,isLoading:t.isPlatformDataLoading}})),f=o.platforms,O=o.isLoading,g=Object(u.useDispatch)();Object(i.useEffect)((function(){g(Object(v.c)()),Object(d.c)(),insights.chrome.appNavClick({id:"platforms",secondaryNav:!0})}),[]);var h=function(){return l.a.createElement(i.Fragment,null,l.a.createElement(p.TextContent,null,l.a.createElement(s.Text,{component:s.TextVariants.p},"Configure a source in order to add products to portfolios."),l.a.createElement(s.Text,{component:s.TextVariants.p},"To connect to a source, go to"," ",l.a.createElement("a",{href:"".concat(document.baseURI,"settings/sources")},"Catalog sources")," under Settings."),l.a.createElement(s.Text,{component:s.TextVariants.p},l.a.createElement("a",{href:"javascript:void(0)"},"Learn more in the documentation"))))},E={items:f.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return l.a.createElement(W,a()({key:e.id},e))})),isLoading:O&&0===f.length};return l.a.createElement(i.Fragment,null,l.a.createElement(b.a,{schema:Object(J.b)({onFilterChange:function(e){return r(e)},searchValue:n,title:"Platforms"})}),l.a.createElement(y.a,a()({},E,{renderEmptyState:function(){return l.a.createElement($.b,{title:"No platforms yet",renderDescription:h,Icon:m.a})}})))}}}]);
//# sourceMappingURL=../sourcemaps/platforms.js.map