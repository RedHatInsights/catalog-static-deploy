!function(t){function n(n){for(var o,i,c=n[0],l=n[1],u=n[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(s&&s(n);p.length;)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,c=1;c<e.length;c++){var l=e[c];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={2:0},a=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise(function(n,o){e=r[t]=[n,o]});n.push(e[2]=o);var a,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(t){return i.p+"js/"+({}[t]||t)+".js"}(t),a=function(n){l.onerror=l.onload=null,clearTimeout(u);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,e[1](i)}r[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,c.appendChild(l)}return Promise.all(n)},i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/insights/platform/service-portal/",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var s=l;a.push([631,3]),e()}({15:function(t,n,e){"use strict";e.d(n,"m",function(){return o}),e.d(n,"n",function(){return r}),e.d(n,"x",function(){return a}),e.d(n,"v",function(){return i}),e.d(n,"t",function(){return c}),e.d(n,"r",function(){return l}),e.d(n,"u",function(){return u}),e.d(n,"q",function(){return s}),e.d(n,"d",function(){return f}),e.d(n,"e",function(){return p}),e.d(n,"g",function(){return d}),e.d(n,"f",function(){return m}),e.d(n,"c",function(){return v}),e.d(n,"o",function(){return h}),e.d(n,"i",function(){return y}),e.d(n,"j",function(){return g}),e.d(n,"k",function(){return E}),e.d(n,"l",function(){return L}),e.d(n,"h",function(){return P}),e.d(n,"p",function(){return _}),e.d(n,"a",function(){return b}),e.d(n,"b",function(){return I}),e.d(n,"w",function(){return O}),e.d(n,"s",function(){return F});var o="FETCH_SERVICE_PLANS",r="FETCH_SERVICE_PLAN_PARAMETERS",a="UPDATE_SERVICE_DATA",i="SUBMIT_SERVICE_ORDER",c="SET_SELECTED_PLAN",l="LIST_ORDERS",u="SHOW_MODAL",s="HIDE_MODAL",f="FETCH_PLATFORM",p="FETCH_PLATFORMS",d="FETCH_PLATFORM_ITEMS",m="FETCH_PLATFORM_ITEM;",v="FETCH_MULTIPLE_PLATFORM_ITEMS",h="FILTER_PLATFORM_ITEMS",y="FETCH_PORTFOLIOS",g="FETCH_PORTFOLIO_ITEM",E="FETCH_PORTFOLIO_ITEMS",L="FETCH_PORTFOLIO_ITEMS_WITH_PORTFOLIO",P="FETCH_PORTFOLIO",_="FILTER_PORTFOLIO_ITEMS",b="ADD_PORTFOLIO",I="ADD_TO_PORTFOLIO",O="UPDATE_PORTFOLIO",F="REMOVE_PORTFOLIO"},202:function(t,n,e){"use strict";e.d(n,"b",function(){return c}),e.d(n,"a",function(){return u});var o=e(630),r=e(373),a={"x-rh-auth-identity":btoa(JSON.stringify({identity:{is_org_admin:!0}}))},i=new r.AdminsApi;function c(){return i}Object.assign(i.apiClient.defaultHeaders,a);var l=new o.DefaultApi;function u(){return l}},257:function(t,n,e){"use strict";var o=e(15),r=e(46),a=e.n(r),i=e(87),c=e.n(i),l=e(202),u=Object(l.b)();function s(){return(s=c()(a.a.mark(function t(n,e){var o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.addPortfolio(n);case 2:if(o=t.sent){t.next=5;break}return t.abrupt("return",o);case 5:if(!(e&&e.length>0)){t.next=7;break}return t.abrupt("return",f(o,e));case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function f(t,n){return p.apply(this,arguments)}function p(){return(p=c()(a.a.mark(function t(n,e){var o,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=0,r=null,o=0;case 3:if(!(o<e.length)){t.next=13;break}return t.next=6,u.addPortfolioItem(JSON.stringify({service_offering_ref:e[o]}));case 6:if(!(r=t.sent)){t.next=10;break}return t.next=10,u.addPortfolioItemToPortfolio(n,JSON.stringify({portfolio_item_id:r.id}));case 10:o++,t.next=3;break;case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function d(){return(d=c()(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.updatePortfolio(n).then(function(){console.log("Update Portfolio Called successfully.")},function(t){window.console.error(t)}));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function m(){return(m=c()(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.destroyPortfolio(n).then(function(t){return console.log("Remove Portfolio Called successfully."),t}));case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}e.d(n,"d",function(){return v}),e.d(n,"c",function(){return h}),e.d(n,"e",function(){return y}),e.d(n,"a",function(){return g}),e.d(n,"b",function(){return E}),e.d(n,"g",function(){return L}),e.d(n,"f",function(){return P});var v=function(t){return{type:o.i,payload:new Promise(function(t){t(u.listPortfolios().then(function(t){return t},function(t){return console.error(t)}))})}},h=function(t){return{type:o.l,payload:new Promise(function(n){n(function(t){return u.fetchPortfolioItemsWithPortfolio(t).then(function(t){return t},function(t){return console.error(t)})}(t))})}},y=function(t){return{type:o.h,payload:function(t){return u.fetchPortfolioWithId(t).then(function(t){return t},function(t){return console.error(t)})}(t)}},g=function(t,n){return{type:o.a,payload:function(t,n){return s.apply(this,arguments)}(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding portfolio",description:"The portfolio was added successfully."},rejected:{variant:"danger",title:"Failed adding portfolio",description:"The portfolio was not added successfuly."}}}}},E=function(t,n){return{type:o.b,payload:f(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding products",description:"Products were successfully added to portfolio."}}}}},L=function(t){return{type:o.w,payload:function(t){return d.apply(this,arguments)}(t),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating portfolio",description:"The portfolio was updated successfully."},rejected:{variant:"danger",title:"Failed updating portfolio",description:"The portfolio was not updated successfuly."}}}}},P=function(t){return{type:o.s,payload:function(t){return m.apply(this,arguments)}(t),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing portfolio",description:"The portfolio was removed successfully."}}}}}},260:function(t,n,e){"use strict";var o=e(21),r=e.n(o),a=e(3),i=e.n(a),c=e(15),l=e(202),u=Object(l.a)();function s(t){return t?u.listSourceServiceOfferings(t):u.listServiceOfferings()}e.d(n,"c",function(){return f}),e.d(n,"b",function(){return p}),e.d(n,"a",function(){return d}),e.d(n,"d",function(){return m});var f=function(){return{type:c.e,payload:new Promise(function(t){t(u.listSources().then(function(t){return t},function(t){return console.error(t)}))})}},p=function(t){return{type:c.g,payload:s(t),meta:{platformId:t}}},d=function(t){var n=t.map(function(t){return s(t).then(function(n){return i()({},t,n)})});return{type:c.c,payload:Promise.all(n).then(function(t){return t.reduce(function(t,n){return r()({},t,n)},{})})}},m=function(t){return{type:c.d,payload:new Promise(function(n){n(function(t){return u.showSource(t).then(function(t){return t},function(t){return console.error(t)})}(t))})}}},610:function(t,n,e){var o=e(611);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(204)(o,r);o.locals&&(t.exports=o.locals)},611:function(t,n,e){(n=t.exports=e(140)(!1)).i(e(252),""),n.push([t.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n",""])},623:function(t,n){},624:function(t,n){},625:function(t,n,e){var o=e(626);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(204)(o,r);o.locals&&(t.exports=o.locals)},626:function(t,n,e){(n=t.exports=e(140)(!1)).i(e(252),""),n.push([t.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.editable-item {\n  visibility: hidden; }\n\n.portal-nav .pf-c-nav__link.active {\n  color: #007bba;\n  font-weight: 500;\n  background-color: #f5f5f5; }\n",""])},631:function(t,n,e){"use strict";e.r(n);var o,r,a,i,c=e(1),l=e.n(c),u=e(20),s=e.n(u),f=e(323),p=e(64),d=e(365),m=e(61),v=e(127),h=e(362),y=e.n(h),g=e(363),E=e(3),L=e.n(E),P=e(21),_=e.n(P),b=e(15),I={modalType:null,modalProps:{}},O=(o={},L()(o,b.u,function(t,n){var e=n.payload,o=e.modalProps,r=e.modalType,a=n.type;return _()({},t,{modalProps:o,modalType:r,type:a})}),L()(o,b.q,function(){return _()({},I)}),o),F=function(t){return _()({},t,{isLoading:!0})},T=(r={},L()(r,"".concat(b.m,"_PENDING"),F),L()(r,"".concat(b.m,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{servicePlans:e,isLoading:!1})}),L()(r,"".concat(b.r,"_PENDING"),F),L()(r,"".concat(b.r,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{orders:e,isLoading:!1})}),L()(r,"".concat(b.n,"_PENDING"),F),L()(r,"".concat(b.n,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{planParameters:e,isLoading:!1})}),L()(r,"".concat(b.v,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,e,{isLoading:!1})}),L()(r,b.x,function(t,n){var e=n.payload;return _()({},t,{serviceData:e,isLoading:!1})}),L()(r,b.t,function(t,n){var e=n.payload;return _()({},t,{selectedPlan:e,isLoading:!1})}),r),D=function(t){return _()({},t,{isPlatformDataLoading:!0})},w=(a={},L()(a,"".concat(b.e,"_PENDING"),D),L()(a,"".concat(b.e,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{platforms:e,isPlatformDataLoading:!1})}),L()(a,"".concat(b.g,"_PENDING"),D),L()(a,"".concat(b.g,"_FULFILLED"),function(t,n){var e=n.payload,o=n.meta.platformId;return _()({},t,{platformItems:_()({},t.platformItems,L()({},o,e)),isPlatformDataLoading:!1})}),L()(a,"".concat(b.f,"_PENDING"),D),L()(a,"".concat(b.f,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{portfolioItem:e,isPlatformDataLoading:!1})}),L()(a,"".concat(b.d,"_PENDING"),D),L()(a,"".concat(b.d,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{selectedPlatform:e,isLoading:!1})}),L()(a,"".concat(b.o,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{filterValue:e})}),L()(a,"".concat(b.c,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{platformItems:_()({},t.platformItems,e),isPlatformDataLoading:!1})}),a),x=function(t){return _()({},t,{isLoading:!0})},R=function(t,n){var e=n.payload;return _()({},t,{portfolioItems:e,isLoading:!1})},N=(i={},L()(i,"".concat(b.i,"_PENDING"),x),L()(i,"".concat(b.i,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{portfolios:e,isLoading:!1})}),L()(i,"".concat(b.k,"_PENDING"),x),L()(i,"".concat(b.k,"_FULFILLED"),R),L()(i,"".concat(b.l,"_PENDING"),x),L()(i,"".concat(b.l,"_FULFILLED"),R),L()(i,"".concat(b.j,"_PENDING"),x),L()(i,"".concat(b.j,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{portfolioItem:e,isLoading:!1})}),L()(i,"".concat(b.h,"_PENDING"),x),L()(i,"".concat(b.h,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{selectedPortfolio:e,isLoading:!1})}),L()(i,"".concat(b.p,"_FULFILLED"),function(t,n){var e=n.payload;return _()({},t,{filterValue:e})}),i),S="".concat("@@service-portal/ui/","toggle-edit"),C=L()({},S,function(t){return _()({},t,{isEditing:!t.isEditing})}),k=new m.ReducerRegistry({},[Object(d.a)(),Object(v.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),g.a,y.a]);k.register({mainModalReducer:Object(m.applyReducerHash)(O,I),orderReducer:Object(m.applyReducerHash)(T,{servicePlans:[],selectedPlan:{},serviceData:{},isLoading:!0}),platformReducer:Object(m.applyReducerHash)(w,{isPlatformDataLoading:!0,platforms:[],platformItems:{},platformItem:{},platform:{},filterValue:""}),portfolioReducer:Object(m.applyReducerHash)(N,{portfolioItems:[],portfolioItem:{},portfolios:[],portfolio:{},filterValue:"",isLoading:!0}),uiReducer:Object(m.applyReducerHash)(C,{isEditing:!1}),notifications:v.notifications});var A=k.getStore(),j=e(11),M=e.n(j),H=e(12),U=e.n(H),G=e(92),V=e.n(G),J=e(93),W=e.n(J),B=e(94),q=e.n(B),z=e(49),K=e.n(z),Q=e(0),X=e.n(Q),Y=e(348),Z=e(253),$=e.n(Z),tt=e(180),nt=e(345),et=e(349),ot=e(46),rt=e.n(ot),at=e(87),it=e.n(at);function ct(t){return function(n){function e(t){var n;return M()(this,e),(n=V()(this,W()(e).call(this,t))).state={component:null},n}return q()(e,n),U()(e,[{key:"componentDidMount",value:function(){var n=it()(rt.a.mark(function n(){var e,o;return rt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e=n.sent,o=e.default,this.setState({component:o});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.component;return t?l.a.createElement(t,this.props):l.a.createElement("div",null,"Loading...")}}]),e}(c.Component)}var lt=e(245),ut=e.n(lt),st=ct(function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,847))}),ft=ct(function(){return e.e(5).then(e.bind(null,844))}),pt=ct(function(){return Promise.all([e.e(1),e.e(7)]).then(e.bind(null,846))}),dt=ct(function(){return Promise.all([e.e(1),e.e(0),e.e(4)]).then(e.bind(null,845))}),mt=ct(function(){return e.e(8).then(e.bind(null,848))}),vt={service_portal:"/",platforms:"/platforms",platform:"/platform/:id",portfolios:"/portfolios",portfolio:"/portfolio/:id",orders:"/orders"},ht=function(t){var n=t.rootClass,e=$()(t,["rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main"),o.setAttribute("role","main"),l.a.createElement(tt.a,e)};ht.propTypes={component:X.a.func,rootClass:X.a.string};var yt=function(t){var n=t.childProps.location.pathname;return l.a.createElement(nt.a,null,l.a.createElement(ht,{path:vt.platforms,component:st,rootClass:"platforms"}),l.a.createElement(ht,{path:vt.platform,component:ft,rootClass:"platform"}),l.a.createElement(ht,{path:vt.portfolios,component:pt,rootClass:"portfolios"}),l.a.createElement(ht,{path:vt.portfolio,component:dt,rootClass:"portfolio"}),l.a.createElement(ht,{exact:!0,path:vt.orders,component:mt,rootClass:"service_portal"}),l.a.createElement(tt.a,{render:function(){return ut()(vt,function(t){return t===n})?null:l.a.createElement(et.a,{to:vt.portfolios})}}))};yt.propTypes={childProps:X.a.object};e(610);var gt=e(324),Et=e(98),Lt=e(334),Pt=e(86),_t=e(333),bt=e(260),It=e(257),Ot=function(){return{type:S}},Ft=(e(625),"/platform"),Tt="/portfolio",Dt=function(t){function n(){var t,e;M()(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=V()(this,(t=W()(n)).call.apply(t,[this].concat(r))),L()(K()(K()(e)),"fetchData",function(){e.props.fetchPlatforms(),e.props.fetchPortfolios()}),L()(K()(K()(e)),"platformNavItems",function(){return e.props.platforms.map(function(t){return l.a.createElement(Lt.a,{key:t.id,id:t.id,groupId:"platforms"},l.a.createElement(gt.a,{to:"".concat(Ft,"/").concat(t.id)},t.name))})}),L()(K()(K()(e)),"portfolioNavItems",function(){return e.props.portfolios.map(function(t){return l.a.createElement(Lt.a,{key:t.id,id:t.id},l.a.createElement(gt.a,{to:"".concat(Tt,"/").concat(t.id)},t.name))})}),e}return q()(n,t),U()(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return l.a.createElement(Pt.b,{"aria-label":"Service Portal",className:"portal-nav"},l.a.createElement(_t.a,{title:"Platforms"},l.a.createElement(Lt.a,{key:"all",id:"all-platforms"},l.a.createElement(gt.a,{exact:!0,to:"/platforms"},"All Platforms")),this.platformNavItems()),l.a.createElement(_t.a,{title:"Portfolios"},l.a.createElement(Lt.a,{key:"all",id:"all-portfolios"},l.a.createElement(gt.a,{exact:!0,to:"/portfolios"},"All Portfolios")),this.portfolioNavItems()))}}]),n}(l.a.Component);Dt.propTypes={portfolios:X.a.array,platforms:X.a.array,isPlatformDataLoading:X.a.bool,fetchPortfolios:X.a.func,fetchPlatforms:X.a.func,toggleEdit:X.a.func,isLoading:X.a.bool};var wt=Object(p.connect)(function(t){var n=t.platformReducer,e=n.platforms,o=n.isPlatformDataLoading,r=t.portfolioReducer;return{isPlatformDataLoading:o,platforms:e,isLoading:r.isLoading,portfolios:r.portfolios}},function(t){return Object(Et.bindActionCreators)({fetchPlatforms:bt.c,fetchPortfolios:It.d,toggleEdit:Ot},t)})(Dt),xt=e(336),Rt=e(337),Nt=(e(627),function(t){function n(){var t,e;M()(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=V()(this,(t=W()(n)).call.apply(t,[this].concat(r))),L()(K()(K()(e)),"state",{chromeNavAvailable:!0}),e}return q()(n,t),U()(n,[{key:"componentDidMount",value:function(){insights.chrome.init();try{insights.chrome.identifyApp("service-portal")}catch(t){this.setState({chromeNavAvailable:!1})}}},{key:"componentWillUnmount",value:function(){this.state.chromeNavAvailable&&(this.appNav(),this.buildNav())}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.NotificationsPortal,null),l.a.createElement(m.Main,{style:{marginLeft:0,padding:0}},l.a.createElement(xt.a,{style:{minHeight:"calc(100vh - 76px)"}},l.a.createElement(Rt.a,{style:{backgroundColor:"#FFFFFF"},sm:4,md:4,lg:2,xl:2},l.a.createElement(wt,null)),l.a.createElement(Rt.a,{sm:8,md:8,lg:10,xl:10},l.a.createElement(yt,{childProps:this.props})))))}}]),n}(c.Component));Nt.propTypes={history:X.a.object};var St=Object(Y.a)(Object(p.connect)()(Nt));s.a.render(l.a.createElement(p.Provider,{store:A},l.a.createElement(f.a,{basename:"/insights/platform/service-portal"},l.a.createElement(St,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map