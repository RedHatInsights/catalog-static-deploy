(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{607:function(e,a,t){var n=t(626);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(150)(n,o);n.locals&&(e.exports=n.locals)},626:function(e,a,t){(a=e.exports=t(109)(!1)).i(t(203),""),a.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link {\n  cursor: pointer; }\n  .card-link:hover {\n    text-decoration: none; }\n\n.text-align-right {\n  text-align: right; }\n\n.card-image-header {\n  padding: 0 !important; }\n\n.portfolio-card-header {\n  min-height: 100px;\n  max-height: 200px;\n  background-size: stretch;\n  color: white;\n  padding: 8px 24px; }\n",""])},627:function(e,a,t){e.exports=t.p+"fonts/default-portfolio.jpg"},647:function(e,a,t){"use strict";t.r(a);var n=t(50),o=t.n(n),r=t(110),i=t.n(r),l=t(111),c=t.n(l),s=t(112),p=t.n(s),f=t(113),d=t.n(f),u=t(114),m=t.n(u),h=t(26),g=t.n(h),v=t(7),E=t.n(v),b=t(1),y=t.n(b),x=t(51),k=t(0),w=t.n(k),C=t(104),F=t(131),N=t(296),P=t(298),V=t(297),L=t(65),T=t(80),j=t(583),O=t(10),A=t.n(O),M=t(70),R=t.n(M),D=(t(607),t(585)),I=t(89),S=t(194),U=t(280),q=t(195),z=t(279),J=t(210),B=t(209),G=t(185),H=t(627),K=t.n(H),Q=function(e){var a=e.backgroundSrc,t=e.portfolioName,n=e.headerActions;return y.a.createElement("div",{className:"portfolio-card-header",style:{backgroundImage:"url(".concat(a,")")}},y.a.createElement(N.a,null,y.a.createElement(P.a,{style:{marginLeft:"auto",paddingBottom:16}},n)),y.a.createElement(G.b,{className:"elipsis-text-overflow",component:G.a.h4},t))};Q.propTypes={backgroundSrc:w.a.string,portfolioName:w.a.string.isRequired,headerActions:w.a.arrayOf(w.a.node)},Q.defaultProps={backgroundSrc:K.a,headerActions:[]};var W=Q,X=["description","modified"],Y=function(e){var a,t,n=e.imageUrl,r=e.name,i=e.id,l=R()(e,["imageUrl","name","id"]);return y.a.createElement(I.a,{sm:6,md:4,lg:4,xl:3},y.a.createElement(C.a,{className:"card-link",to:"/portfolio/".concat(i)},y.a.createElement(S.a,null,y.a.createElement(U.a,{className:"card-image-header"},y.a.createElement(W,{portfolioName:r,headerActions:(a=r,t=i,[y.a.createElement(C.a,{key:"edit-portfolio-action",to:"/portfolios/edit/".concat(t)},y.a.createElement(T.c,{variant:"plain","aria-label":"edit-portfolio-".concat(a),onClick:function(){return console.log("Edit portfolio api helper not available.")}},y.a.createElement(J.a,{fill:"white"}))),y.a.createElement(C.a,{key:"remove-portfolio-action",to:"/portfolios/remove/".concat(t)},y.a.createElement(T.c,{key:"remove-portfolio-action",variant:"plain","aria-label":"remove-portfolio-".concat(a),onClick:function(){return console.log("Remove portfolio api helper not available.")}},y.a.createElement(B.a,{fill:"white"})))])})),y.a.createElement(q.a,null,y.a.createElement(D.a,o()({},A()({name:r,imageUrl:n},l),{toDisplay:X}))),y.a.createElement(z.a,null))))};Y.propTypes={history:w.a.object,imageUrl:w.a.string,name:w.a.string,id:w.a.string};var Z=Y,$=t(596),_=t(598),ee=(t(599),function(e){var a=e.onFilterChange,t=e.filterValue,n=R()(e,["onFilterChange","filterValue"]);return y.a.createElement(N.a,{className:"searchToolbar"},y.a.createElement(_.a,o()({},n,{searchValue:t,onFilterChange:a,placeholder:"Find a Portfolio"})),y.a.createElement($.a,n))});ee.propTypes={onFilterChange:w.a.func.isRequired,filterValue:w.a.string};var ae=ee,te=t(204),ne=t(590),oe=t(608),re=t(609),ie=(t(582),t(587)),le=function(e){function a(){var e,t;i()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=p()(this,(e=d()(a)).call.apply(e,[this].concat(o))),E()(g()(g()(t)),"state",{filteredItems:[],isOpen:!1,filterValue:""}),E()(g()(g()(t)),"fetchData",function(){t.props.fetchPortfolios()}),E()(g()(g()(t)),"onFilterChange",function(e){return t.setState({filterValue:e})}),t}return m()(a,e),c()(a,[{key:"componentDidMount",value:function(){this.fetchData(),Object(ie.a)()}},{key:"renderToolbar",value:function(){return y.a.createElement(N.a,{className:"toolbar-padding"},y.a.createElement(P.a,null,y.a.createElement(V.a,null,y.a.createElement(L.b,{size:"2xl"},"All Portfolios"))),y.a.createElement(P.a,{className:"pf-u-ml-auto-on-xl"},y.a.createElement(V.a,null,y.a.createElement(C.a,{to:"/portfolios/add-portfolio"},y.a.createElement(T.c,{variant:"primary","aria-label":"Create Portfolio"},"Create Portfolio")))))}},{key:"render",value:function(){var e=this,a={items:this.props.portfolios.filter(function(a){return a.name.toLowerCase().includes(e.state.filterValue.trim().toLowerCase())}).map(function(e){return y.a.createElement(Z,o()({key:e.id},e))}),isLoading:this.props.isLoading&&0===this.props.portfolios.length};return y.a.createElement(b.Fragment,null,y.a.createElement(ae,{onFilterChange:this.onFilterChange,filterValue:this.state.filterValue}),y.a.createElement(F.a,{exact:!0,path:"/portfolios/add-portfolio",component:oe.a}),y.a.createElement(F.a,{exact:!0,path:"/portfolios/edit/:id",component:oe.a}),y.a.createElement(F.a,{exact:!0,path:"/portfolios/remove/:id",component:re.a}),this.renderToolbar(),y.a.createElement(j.a,a))}}]),a}(b.Component);le.propTypes={filteredItems:w.a.array,portfolios:w.a.array,platforms:w.a.array,isLoading:w.a.bool,searchFilter:w.a.string,showModal:w.a.func,hideModal:w.a.func,fetchPortfolios:w.a.func.isRequired},le.defaultProps={portfolios:[]};a.default=Object(x.connect)(function(e){var a=e.portfolioReducer;return{portfolios:a.portfolios,isLoading:a.isLoading,searchFilter:a.filterValue}},function(e){return{fetchPortfolios:function(a){return e(Object(te.d)(a))},hideModal:function(){return e(Object(ne.a)())},showModal:function(a,t){e(Object(ne.b)({modalProps:a,modalType:t}))}}})(le)}}]);
//# sourceMappingURL=../sourcemaps/8.js.map