(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{611:function(e,a,t){var n=t(624);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(151)(n,o);n.locals&&(e.exports=n.locals)},624:function(e,a,t){(a=e.exports=t(110)(!1)).i(t(203),""),a.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n.card-image-header {\n  padding: 0 !important; }\n\n.portfolio-card-header {\n  min-height: 100px;\n  max-height: 200px;\n  background-size: stretch;\n  color: white;\n  padding: 8px 24px; }\n",""])},625:function(e,a,t){e.exports=t.p+"fonts/default-portfolio.jpg"},649:function(e,a,t){"use strict";t.r(a);var n=t(51),o=t.n(n),r=t(111),i=t.n(r),l=t(112),c=t.n(l),s=t(113),p=t.n(s),f=t(114),d=t.n(f),m=t(115),u=t.n(m),g=t(26),h=t.n(g),v=t(8),E=t.n(v),b=t(1),w=t.n(b),y=t(52),x=t(0),k=t.n(x),C=t(105),F=t(132),V=t(310),L=t(296),N=t(307),P=t(186),A=t(82),T=t(592),j=t(10),O=t.n(j),D=t(72),I=t.n(D),R=(t(611),t(596)),S=t(91),U=t(194),q=t(280),z=t(195),J=t(279),M=t(210),_=t(209),B=t(299),G=t(301),H=t(625),K=t.n(H),Q=function(e){var a=e.backgroundSrc,t=e.portfolioName,n=e.headerActions;return w.a.createElement("div",{className:"portfolio-card-header",style:{backgroundImage:"url(".concat(a,")")}},w.a.createElement(B.a,null,w.a.createElement(G.a,{style:{marginLeft:"auto",paddingBottom:16}},n)),w.a.createElement(P.b,{className:"elipsis-text-overflow",component:P.a.h4},t))};Q.propTypes={backgroundSrc:k.a.string,portfolioName:k.a.string.isRequired,headerActions:k.a.arrayOf(k.a.node)},Q.defaultProps={backgroundSrc:K.a,headerActions:[]};var W=Q,X=["description","modified"],Y=function(e){var a,t,n=e.imageUrl,r=e.name,i=e.id,l=I()(e,["imageUrl","name","id"]);return w.a.createElement(S.a,{sm:6,md:4,lg:4,xl:3},w.a.createElement(C.a,{className:"card-link",to:"/portfolio/".concat(i)},w.a.createElement(U.a,null,w.a.createElement(q.a,{className:"card-image-header"},w.a.createElement(W,{portfolioName:r,headerActions:(a=r,t=i,[w.a.createElement(C.a,{key:"edit-portfolio-action",to:"/portfolios/edit/".concat(t)},w.a.createElement(A.c,{variant:"plain","aria-label":"edit-portfolio-".concat(a)},w.a.createElement(M.a,{fill:"white"}))),w.a.createElement(C.a,{key:"remove-portfolio-action",to:"/portfolios/remove/".concat(t)},w.a.createElement(A.c,{key:"remove-portfolio-action",variant:"plain","aria-label":"remove-portfolio-".concat(a)},w.a.createElement(_.a,{fill:"white"})))])})),w.a.createElement(z.a,null,w.a.createElement(R.a,o()({},O()({name:r,imageUrl:n},l),{toDisplay:X}))),w.a.createElement(J.a,null))))};Y.propTypes={history:k.a.object,imageUrl:k.a.string,name:k.a.string,id:k.a.string};var Z=Y,$=t(590),ee=t(589),ae=t(588),te=(t(609),function(e){var a=e.onFilterChange,t=e.filterValue,n=I()(e,["onFilterChange","filterValue"]);return w.a.createElement(ae.a,null,w.a.createElement(V.a,null,w.a.createElement(L.a,null,w.a.createElement(ee.a,o()({},n,{searchValue:t,onFilterChange:a,placeholder:"Find a Portfolio"}))),w.a.createElement(L.a,null,w.a.createElement($.a,n))))});te.propTypes={onFilterChange:k.a.func.isRequired,filterValue:k.a.string};var ne=te,oe=t(204),re=t(612),ie=t(613),le=(t(587),t(591)),ce=function(e){function a(){var e,t;i()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=p()(this,(e=d()(a)).call.apply(e,[this].concat(o))),E()(h()(h()(t)),"state",{filteredItems:[],isOpen:!1,filterValue:""}),E()(h()(h()(t)),"fetchData",function(){t.props.fetchPortfolios()}),E()(h()(h()(t)),"onFilterChange",function(e){return t.setState({filterValue:e})}),t}return u()(a,e),c()(a,[{key:"componentDidMount",value:function(){this.fetchData(),Object(le.b)()}},{key:"renderToolbar",value:function(){return w.a.createElement(V.a,{className:"pf-u-pt-md pf-u-pr-xl pf-u-pl-xl"},w.a.createElement(L.a,null,w.a.createElement(N.a,null,w.a.createElement(P.b,{component:P.a.h2},"All Portfolios"))),w.a.createElement(L.a,null,w.a.createElement(C.a,{to:"/portfolios/add-portfolio"},w.a.createElement(A.c,{variant:"primary","aria-label":"Create portfolio"},"Create portfolio"))))}},{key:"render",value:function(){var e=this,a={items:this.props.portfolios.filter(function(a){return a.name.toLowerCase().includes(e.state.filterValue.trim().toLowerCase())}).map(function(e){return w.a.createElement(Z,o()({key:e.id},e))}),isLoading:this.props.isLoading&&0===this.props.portfolios.length};return w.a.createElement(b.Fragment,null,w.a.createElement(ne,{onFilterChange:this.onFilterChange,filterValue:this.state.filterValue}),w.a.createElement(F.a,{exact:!0,path:"/portfolios/add-portfolio",component:re.a}),w.a.createElement(F.a,{exact:!0,path:"/portfolios/edit/:id",component:re.a}),w.a.createElement(F.a,{exact:!0,path:"/portfolios/remove/:id",component:ie.a}),this.renderToolbar(),w.a.createElement(T.a,a))}}]),a}(b.Component);ce.propTypes={filteredItems:k.a.array,portfolios:k.a.array,platforms:k.a.array,isLoading:k.a.bool,searchFilter:k.a.string,showModal:k.a.func,fetchPortfolios:k.a.func.isRequired},ce.defaultProps={portfolios:[]};a.default=Object(y.connect)(function(e){var a=e.portfolioReducer;return{portfolios:a.portfolios,isLoading:a.isLoading,searchFilter:a.filterValue}},function(e){return{fetchPortfolios:function(a){return e(Object(oe.d)(a))}}})(ce)}}]);
//# sourceMappingURL=../sourcemaps/7.js.map