!function(t){function n(n){for(var r,i,c=n[0],l=n[1],u=n[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(s&&s(n);p.length;)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,c=1;c<e.length;c++){var l=e[c];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={3:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=o[t]=[n,r]});n.push(e[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+"js/"+({}[t]||t)+".js"}(t),a=function(n){c.onerror=c.onload=null,clearTimeout(l);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,e[1](i)}o[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/insights/platform/service-portal/",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var s=l;a.push([639,4]),e()}({11:function(t,n,e){"use strict";e.d(n,"m",function(){return r}),e.d(n,"n",function(){return o}),e.d(n,"x",function(){return a}),e.d(n,"v",function(){return i}),e.d(n,"t",function(){return c}),e.d(n,"r",function(){return l}),e.d(n,"u",function(){return u}),e.d(n,"q",function(){return s}),e.d(n,"d",function(){return f}),e.d(n,"e",function(){return p}),e.d(n,"g",function(){return d}),e.d(n,"f",function(){return m}),e.d(n,"c",function(){return h}),e.d(n,"o",function(){return y}),e.d(n,"i",function(){return v}),e.d(n,"j",function(){return g}),e.d(n,"k",function(){return E}),e.d(n,"l",function(){return P}),e.d(n,"h",function(){return L}),e.d(n,"p",function(){return b}),e.d(n,"a",function(){return F}),e.d(n,"b",function(){return _}),e.d(n,"w",function(){return I}),e.d(n,"s",function(){return O});var r="FETCH_SERVICE_PLANS",o="FETCH_SERVICE_PLAN_PARAMETERS",a="UPDATE_SERVICE_DATA",i="SUBMIT_SERVICE_ORDER",c="SET_SELECTED_PLAN",l="LIST_ORDERS",u="SHOW_MODAL",s="HIDE_MODAL",f="FETCH_PLATFORM",p="FETCH_PLATFORMS",d="FETCH_PLATFORM_ITEMS",m="FETCH_PLATFORM_ITEM;",h="FETCH_MULTIPLE_PLATFORM_ITEMS",y="FILTER_PLATFORM_ITEMS",v="FETCH_PORTFOLIOS",g="FETCH_PORTFOLIO_ITEM",E="FETCH_PORTFOLIO_ITEMS",P="FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO",L="FETCH_PORTFOLIO",b="FILTER_PORTFOLIO_ITEMS",F="ADD_PORTFOLIO",_="ADD_TO_PORTFOLIO",I="UPDATE_PORTFOLIO",O="REMOVE_PORTFOLIO"},125:function(t,n,e){"use strict";e.d(n,"b",function(){return E}),e.d(n,"c",function(){return L}),e.d(n,"a",function(){return b});var r=e(66),o=e.n(r),a=e(251),i=e.n(a),c=e(91),l=e.n(c),u=e(1),s=e.n(u),f=e(136),p=e(0),d=e.n(p),m=e(134),h=e(111),y=e(263),v=e(264),g=e(265),E=function(t){var n=t.items,e=l()(t,["items"]);return s.a.createElement(m.a,{gutter:"md"},s.a.createElement(h.a,{sm:12,style:{padding:24}},s.a.createElement(m.a,{gutter:"md"},i()(Array(n)).map(function(t,n){return s.a.createElement(h.a,{sm:12,md:6,lg:3,key:n},s.a.createElement(y.a,null,s.a.createElement(v.a,null,s.a.createElement(f.a,o()({height:160,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),s.a.createElement("rect",{x:"2",y:"99",rx:"3",ry:"3",width:"300",height:"6.4"}),s.a.createElement("rect",{x:"2",y:"119.72",rx:"3",ry:"3",width:"290",height:"5.76"}),s.a.createElement("rect",{x:"2",y:"139",rx:"3",ry:"3",width:"201",height:"6.4"}),s.a.createElement("rect",{x:"-2.16",y:"0.67",rx:"0",ry:"0",width:"271.6",height:"82.74"}),s.a.createElement("rect",{x:"136.84",y:"37.67",rx:"0",ry:"0",width:"6",height:"3"})))))}))))};E.propTypes={items:d.a.number},E.defaultProps={items:5};var P=function(t){var n=t.items,e=l()(t,["items"]);return s.a.createElement(m.a,{gutter:"md"},s.a.createElement(h.a,{sm:12},s.a.createElement(f.a,o()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"16"}))),s.a.createElement(h.a,{sm:12,style:{paddingLeft:16,paddingRight:16}},s.a.createElement(E,{items:n})))};P.propTypes={items:d.a.number},P.defaultProps={items:5};var L=function(t){var n=t.items,e=l()(t,["items"]);return i()(Array(n)).map(function(t,n){return s.a.createElement(g.a,{key:"loader-placeholder-".concat(n),style:{cursor:"pointer"}},s.a.createElement("div",{style:{overflow:"hidden"}},s.a.createElement(f.a,o()({height:16,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"20"}))))})};L.propTypes={items:d.a.number},L.defaultProps={items:5};var b=function(t){return s.a.createElement("div",null,s.a.createElement(f.a,o()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},t),s.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),s.a.createElement(E,null))}},212:function(t,n,e){"use strict";e.d(n,"a",function(){return l}),e.d(n,"b",function(){return u});var r=e(252),o=e(271),a=e(253),i=new r.AdminsApi;o.ApiClient.instance.basePath=a.b,r.ApiClient.instance.basePath=a.a;var c=new o.DefaultApi;function l(){return c}function u(){return i}},253:function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return o});var r="/r/insights/platform/topological-inventory/v0.0",o="https://".concat("access.ci.itop.redhat.com",":").concat("443").concat("/r/insights/platform/service-portal").concat("/v0.0".replace(/\/+$/,""))},273:function(t,n,e){"use strict";e.d(n,"d",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"e",function(){return c}),e.d(n,"a",function(){return l}),e.d(n,"b",function(){return u}),e.d(n,"g",function(){return s}),e.d(n,"f",function(){return f});var r=e(11),o=e(65),a=function(t){return function(n,e){if(!e().portfolioReducer.isLoading)return n(function(t){return{type:r.i,payload:new Promise(function(n){n(o.f(t))})}}(t))}},i=function(t){return{type:r.l,payload:new Promise(function(n){n(o.e(t))})}},c=function(t){return{type:r.h,payload:o.c(t)}},l=function(t,n){return{type:r.a,payload:o.a(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding portfolio",description:"The portfolio was added successfully."},rejected:{variant:"danger",title:"Failed adding portfolio",description:"The portfolio was not added successfuly."}}}}},u=function(t,n){return{type:r.b,payload:o.b(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding products",description:"Products were successfully added to portfolio."}}}}},s=function(t){return{type:r.w,payload:o.i(t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating portfolio",description:"The portfolio was updated successfully."},rejected:{variant:"danger",title:"Failed updating portfolio",description:"The portfolio was not updated successfuly."}}}}},f=function(t){return{type:r.s,payload:o.g(t),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing portfolio",description:"The portfolio was removed successfully."}}}}}},274:function(t,n,e){"use strict";var r=e(19),o=e.n(r),a=e(12),i=e.n(a),c=e(11),l=e(212),u=Object(l.a)();function s(t){return t?u.listSourceServiceOfferings(t):u.listServiceOfferings()}e.d(n,"c",function(){return p}),e.d(n,"b",function(){return d}),e.d(n,"a",function(){return m}),e.d(n,"d",function(){return h});var f=function(){return{type:c.e,payload:new Promise(function(t){t(u.listSources())})}},p=function(){return function(t,n){if(!n().platformReducer.isPlatformDataLoading)return t(f())}},d=function(t){return{type:c.g,payload:s(t),meta:{platformId:t}}},m=function(t){var n=t.map(function(t){return s(t).then(function(n){return i()({},t,n)})});return{type:c.c,payload:Promise.all(n).then(function(t){return t.reduce(function(t,n){return o()({},t,n)},{})})}},h=function(t){return{type:c.d,payload:new Promise(function(n){var e;n((e=t,u.showSource(e).then(function(t){return t},function(t){return console.error(t)})))})}}},629:function(t,n,e){var r=e(630);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(215)(r,o);r.locals&&(t.exports=r.locals)},630:function(t,n,e){(n=t.exports=e(137)(!1)).i(e(272),""),n.push([t.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n",""])},634:function(t,n,e){var r=e(635);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(215)(r,o);r.locals&&(t.exports=r.locals)},635:function(t,n,e){(n=t.exports=e(137)(!1)).i(e(272),""),n.push([t.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.portal-nav .pf-c-nav__link.active {\n  color: #007bba;\n  font-weight: 500;\n  background-color: #f5f5f5; }\n",""])},639:function(t,n,e){"use strict";e.r(n);var r,o,a,i,c=e(1),l=e.n(c),u=e(14),s=e.n(u),f=e(352),p=e(67),d=e(389),m=e(68),h=e(123),y=e(386),v=e.n(y),g=e(387),E=e(12),P=e.n(E),L=e(19),b=e.n(L),F=e(11),_={modalType:null,modalProps:{}},I=(r={},P()(r,F.u,function(t,n){var e=n.payload,r=e.modalProps,o=e.modalType,a=n.type;return b()({},t,{modalProps:r,modalType:o,type:a})}),P()(r,F.q,function(){return b()({},_)}),r),O=function(t){return b()({},t,{isLoading:!0})},w=(o={},P()(o,"".concat(F.m,"_PENDING"),O),P()(o,"".concat(F.m,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{servicePlans:e,isLoading:!1})}),P()(o,"".concat(F.r,"_PENDING"),O),P()(o,"".concat(F.r,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{orders:e,isLoading:!1})}),P()(o,"".concat(F.n,"_PENDING"),O),P()(o,"".concat(F.n,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{planParameters:e,isLoading:!1})}),P()(o,"".concat(F.v,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,e,{isLoading:!1})}),P()(o,F.x,function(t,n){var e=n.payload;return b()({},t,{serviceData:e,isLoading:!1})}),P()(o,F.t,function(t,n){var e=n.payload;return b()({},t,{selectedPlan:e,isLoading:!1})}),o),x=function(t){return b()({},t,{isPlatformDataLoading:!0})},T=(a={},P()(a,"".concat(F.e,"_PENDING"),x),P()(a,"".concat(F.e,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{platforms:e,isPlatformDataLoading:!1})}),P()(a,"".concat(F.g,"_PENDING"),x),P()(a,"".concat(F.g,"_FULFILLED"),function(t,n){var e=n.payload,r=n.meta.platformId;return b()({},t,{platformItems:b()({},t.platformItems,P()({},r,e)),isPlatformDataLoading:!1})}),P()(a,"".concat(F.f,"_PENDING"),x),P()(a,"".concat(F.f,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{portfolioItem:e,isPlatformDataLoading:!1})}),P()(a,"".concat(F.d,"_PENDING"),x),P()(a,"".concat(F.d,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{selectedPlatform:e,isLoading:!1})}),P()(a,"".concat(F.o,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{filterValue:e})}),P()(a,"".concat(F.c,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{platformItems:b()({},t.platformItems,e),isPlatformDataLoading:!1})}),a),D=function(t){return b()({},t,{isLoading:!0})},R=function(t,n){var e=n.payload;return b()({},t,{portfolioItems:e,isLoading:!1})},C=(i={},P()(i,"".concat(F.i,"_PENDING"),D),P()(i,"".concat(F.i,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{portfolios:e,isLoading:!1})}),P()(i,"".concat(F.k,"_PENDING"),D),P()(i,"".concat(F.k,"_FULFILLED"),R),P()(i,"".concat(F.l,"_PENDING"),D),P()(i,"".concat(F.l,"_FULFILLED"),R),P()(i,"".concat(F.j,"_PENDING"),D),P()(i,"".concat(F.j,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{portfolioItem:e,isLoading:!1})}),P()(i,"".concat(F.h,"_PENDING"),D),P()(i,"".concat(F.h,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{selectedPortfolio:e,isLoading:!1})}),P()(i,"".concat(F.p,"_FULFILLED"),function(t,n){var e=n.payload;return b()({},t,{filterValue:e})}),i),N=new m.ReducerRegistry({},[g.a,Object(d.a)(),Object(h.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),v.a]);N.register({mainModalReducer:Object(m.applyReducerHash)(I,_),orderReducer:Object(m.applyReducerHash)(w,{servicePlans:[],selectedPlan:{},serviceData:{},isLoading:!0}),platformReducer:Object(m.applyReducerHash)(T,{isPlatformDataLoading:!1,platforms:[],platformItems:{},platformItem:{},platform:{},filterValue:""}),portfolioReducer:Object(m.applyReducerHash)(C,{portfolioItems:[],portfolioItem:{},portfolios:[],portfolio:{},filterValue:"",isLoading:!1}),notifications:h.notifications});var k=N.getStore(),S=e(138),A=e.n(S),j=e(139),M=e.n(j),U=e(140),H=e.n(U),G=e(141),V=e.n(G),z=e(142),W=e.n(z),J=e(35),q=e.n(J),B=e(0),K=e.n(B),$=e(367),Q=e(91),X=e.n(Q),Y=e(186),Z=e(369),tt=e(368),nt=e(261),et=e.n(nt),rt=e(125),ot=Object(c.lazy)(function(){return Promise.all([e.e(0),e.e(1),e.e(7)]).then(e.bind(null,706))}),at=Object(c.lazy)(function(){return e.e(6).then(e.bind(null,702))}),it=Object(c.lazy)(function(){return Promise.all([e.e(0),e.e(2),e.e(8)]).then(e.bind(null,704))}),ct=Object(c.lazy)(function(){return Promise.all([e.e(0),e.e(1),e.e(2),e.e(5)]).then(e.bind(null,703))}),lt=Object(c.lazy)(function(){return e.e(9).then(e.bind(null,705))}),ut={service_portal:"/",platforms:"/platforms",platform:"/platform/:id",portfolios:"/portfolios",portfolio:"/portfolio/:id",orders:"/orders"},st=function(t){var n=t.rootClass,e=X()(t,["rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(n),"pf-l-page__main"),r.setAttribute("role","main"),l.a.createElement(Y.a,e)};st.propTypes={component:K.a.func,rootClass:K.a.string};var ft=function(t){var n=t.childProps.location.pathname;return l.a.createElement(c.Suspense,{fallback:l.a.createElement(rt.a,null)},l.a.createElement(Z.a,null,l.a.createElement(st,{path:ut.platforms,component:ot,rootClass:"platforms"}),l.a.createElement(st,{path:ut.platform,component:at,rootClass:"platform"}),l.a.createElement(st,{path:ut.portfolios,component:it,rootClass:"portfolios"}),l.a.createElement(st,{path:ut.portfolio,component:ct,rootClass:"portfolio"}),l.a.createElement(st,{exact:!0,path:ut.orders,component:lt,rootClass:"service_portal"}),l.a.createElement(Y.a,{render:function(){return et()(ut,function(t){return t===n})?null:l.a.createElement(tt.a,{to:ut.portfolios})}})))};ft.propTypes={childProps:K.a.object};e(629);var pt=e(353),dt=e(92),mt=e(265),ht=e(86),yt=e(361),vt=e(274),gt=e(273),Et=(e(634),"/platform"),Pt="/portfolio",Lt=function(t){function n(){var t,e;A()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=H()(this,(t=V()(n)).call.apply(t,[this].concat(o))),P()(q()(q()(e)),"fetchData",function(){e.props.fetchPortfolios(),e.props.fetchPlatforms()}),P()(q()(q()(e)),"platformNavItems",function(){return e.props.platforms.map(function(t){return l.a.createElement(mt.a,{key:t.id,id:t.id,groupId:"platforms"},l.a.createElement(pt.a,{to:"".concat(Et,"/").concat(t.id)},t.name))})}),P()(q()(q()(e)),"portfolioNavItems",function(){return e.props.portfolios.map(function(t){return l.a.createElement(mt.a,{key:t.id,id:t.id},l.a.createElement(pt.a,{to:"".concat(Pt,"/").concat(t.id)},t.name))})}),P()(q()(q()(e)),"renderPlatformNav",function(){return e.props.isPlatformDataLoading&&0===e.props.platforms.length?l.a.createElement(rt.c,{items:3}):e.platformNavItems()}),P()(q()(q()(e)),"renderPortfilioNav",function(){return e.props.isLoading&&0===e.props.portfolios.length?l.a.createElement(rt.c,{items:5}):e.portfolioNavItems()}),e}return W()(n,t),M()(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement(ht.b,{"aria-label":"Service Portal",className:"portal-nav"},l.a.createElement(yt.a,{title:"Platforms"},l.a.createElement(mt.a,{key:"all",id:"all-platforms"},l.a.createElement(pt.a,{exact:!0,to:"/platforms"},"All Platforms")),this.renderPlatformNav()),l.a.createElement(yt.a,{title:"Portfolios"},l.a.createElement(mt.a,{key:"all",id:"all-portfolios"},l.a.createElement(pt.a,{exact:!0,to:"/portfolios"},"All Portfolios")),this.renderPortfilioNav()))}}]),n}(c.Component);Lt.propTypes={portfolios:K.a.array,platforms:K.a.array,isPlatformDataLoading:K.a.bool,fetchPortfolios:K.a.func,fetchPlatforms:K.a.func,isLoading:K.a.bool},Lt.defaultProps={platforms:[]};var bt=Object(p.connect)(function(t){var n=t.platformReducer,e=n.platforms,r=n.isPlatformDataLoading,o=t.portfolioReducer;return{isPlatformDataLoading:r,platforms:e,isLoading:o.isLoading,portfolios:o.portfolios}},function(t){return Object(dt.bindActionCreators)({fetchPlatforms:vt.c,fetchPortfolios:gt.d},t)})(Lt),Ft=e(134),_t=e(111),It=(e(636),function(t){function n(){var t,e;A()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=H()(this,(t=V()(n)).call.apply(t,[this].concat(o))),P()(q()(q()(e)),"state",{chromeNavAvailable:!0}),e}return W()(n,t),M()(n,[{key:"componentDidMount",value:function(){insights.chrome.init();try{insights.chrome.identifyApp("service-portal")}catch(t){this.setState({chromeNavAvailable:!1})}}},{key:"componentWillUnmount",value:function(){this.state.chromeNavAvailable&&(this.appNav(),this.buildNav())}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.NotificationsPortal,null),l.a.createElement(m.Main,{style:{marginLeft:0,padding:0}},l.a.createElement(Ft.a,{style:{minHeight:"calc(100vh - 76px)"}},l.a.createElement(_t.a,{style:{backgroundColor:"#FFFFFF"},sm:4,md:4,lg:2,xl:2},l.a.createElement(bt,null)),l.a.createElement(_t.a,{sm:8,md:8,lg:10,xl:10},l.a.createElement(ft,{childProps:this.props})))))}}]),n}(c.Component));It.propTypes={history:K.a.object};var Ot=Object($.a)(Object(p.connect)()(It));s.a.render(l.a.createElement(p.Provider,{store:k},l.a.createElement(f.a,{basename:"/insights/platform/service-portal"},l.a.createElement(Ot,null))),document.getElementById("root"))},65:function(t,n,e){"use strict";e.d(n,"f",function(){return u}),e.d(n,"d",function(){return s}),e.d(n,"c",function(){return f}),e.d(n,"e",function(){return p}),e.d(n,"a",function(){return d}),e.d(n,"b",function(){return h}),e.d(n,"i",function(){return v}),e.d(n,"g",function(){return E}),e.d(n,"h",function(){return F});var r=e(40),o=e.n(r),a=e(80),i=e.n(a),c=e(212),l=Object(c.b)();function u(){return l.listPortfolios().then(function(t){return t},function(t){return console.error(t)})}function s(){return l.listPortfolioItems().then(function(t){return t},function(t){return console.error(t)})}function f(t){return l.fetchPortfolioWithId(t).then(function(t){return t},function(t){return console.error(t)})}function p(t){return l.fetchPortfolioItemsWithPortfolio(t).then(function(t){return t},function(t){return console.error(t)})}function d(t,n){return m.apply(this,arguments)}function m(){return(m=i()(o.a.mark(function t(n,e){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.addPortfolio(n);case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",r);case 5:if(!(e&&e.length>0)){t.next=7;break}return t.abrupt("return",h(r,e));case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function h(t,n){return y.apply(this,arguments)}function y(){return(y=i()(o.a.mark(function t(n,e){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=0,a=null,r=0;case 3:if(!(r<e.length)){t.next=13;break}return t.next=6,l.addPortfolioItem(JSON.stringify({service_offering_ref:e[r]}));case 6:if(!(a=t.sent)){t.next=10;break}return t.next=10,l.addPortfolioItemToPortfolio(n,JSON.stringify({portfolio_item_id:a.id}));case 10:r++,t.next=3;break;case 13:return t.abrupt("return",a);case 14:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=i()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.editPortfolio(n.id,n);case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function E(t){return P.apply(this,arguments)}function P(){return(P=i()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.destroyPortfolio(n);case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t){return b.apply(this,arguments)}function b(){return(b=i()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.destroyPortfolioItem(n));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function F(t){return _.apply(this,arguments)}function _(){return(_=i()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(n.map(function(){var t=i()(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}())));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}}});
//# sourceMappingURL=../sourcemaps/App.js.map