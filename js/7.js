(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{683:function(e,a,o){var t=o(812);"string"==typeof t&&(t=[[e.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(199)(t,n);t.locals&&(e.exports=t.locals)},812:function(e,a,o){(a=e.exports=o(136)(!1)).i(o(250),""),a.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.card-image-header {\n  padding: 0 !important; }\n\n.portfolio-card-header {\n  min-height: 100px;\n  max-height: 200px;\n  background-size: stretch;\n  color: white;\n  padding: 8px 24px; }\n",""])},813:function(e,a,o){e.exports=o.p+"fonts/default-portfolio.jpg"},833:function(e,a,o){"use strict";o.r(a);var t=o(620),n=o.n(t),r=o(17),i=o.n(r),l=o(87),c=o.n(l),s=o(88),p=o.n(s),d=o(89),f=o.n(d),m=o(90),u=o.n(m),h=o(91),g=o.n(h),v=o(44),b=o.n(v),E=o(11),y=o.n(E),w=o(1),x=o.n(w),k=o(60),O=o(0),j=o.n(O),C=o(127),N=o(176),P=o(336),M=o(338),T=o(337),A=o(124),L=o(125),S=o(12),D=o(637),F=o.n(D),I=o(653),R=o.n(I),U=o(622),z=o(251),q=o.n(z),B=(o(683),o(623)),J=o(335),X=o(323),V=o(326),G=o(324),H=o(325),K=o(684),Q=o(685),W=o(235),Y=o(813),Z=o.n(Y),$=function(e){var a=e.backgroundSrc,o=e.portfolioName,t=e.headerActions;return x.a.createElement("div",{className:"portfolio-card-header",style:{backgroundImage:"url(".concat(a,")")}},x.a.createElement(P.a,null,x.a.createElement(M.a,{style:{marginLeft:"auto",paddingBottom:16}},t)),x.a.createElement(W.b,{className:"elipsis-text-overflow",component:W.a.h4},o))};$.propTypes={backgroundSrc:j.a.string,portfolioName:j.a.string.isRequired,headerActions:j.a.arrayOf(j.a.node)},$.defaultProps={backgroundSrc:Z.a,headerActions:[]};var _=$,ee=["description","modified"],ae=function(e){var a=e.imageUrl,o=e.name,t=e.id,r=q()(e,["imageUrl","name","id"]);return x.a.createElement(J.a,{sm:6,md:4,lg:4,xl:3},x.a.createElement(X.a,null,x.a.createElement(V.a,{className:"card-image-header"},x.a.createElement(_,{portfolioName:o,headerActions:function(e,a){return[x.a.createElement(C.a,{key:"edit-portfolio-action",to:"/portfolios/edit/".concat(a)},x.a.createElement(L.c,{variant:"plain","aria-label":"edit-portfolio-".concat(e),onClick:function(){return console.log("Edit portfolio api helper not available.")}},x.a.createElement(K.a,{fill:"white"}))),x.a.createElement(C.a,{key:"remove-portfolio-action",to:"/portfolios/remove/".concat(a)},x.a.createElement(L.c,{key:"remove-portfolio-action",variant:"plain","aria-label":"remove-portfolio-".concat(e),onClick:function(){return console.log("Remove portfolio api helper not available.")}},x.a.createElement(Q.a,{fill:"white"})))]}(o,t)})),x.a.createElement(G.a,null,x.a.createElement(B.a,n()({},i()({name:o,imageUrl:a},r),{toDisplay:ee}))),x.a.createElement(H.a,null)))};ae.propTypes={history:j.a.object,imageUrl:j.a.string,name:j.a.string,id:j.a.string};var oe=ae,te=o(655),ne=o(656),re=(o(657),function(e){return x.a.createElement(P.a,{className:"searchToolbar"},x.a.createElement(ne.a,n()({},e,{placeholder:"Find a Portfolio"})),x.a.createElement(te.a,e))}),ie=o(255),le=o(640),ce=o(688),se=(o(625),o(631)),pe=function(e){function a(){var e,o;c()(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o=f()(this,(e=u()(a)).call.apply(e,[this].concat(n))),y()(b()(b()(o)),"state",{filteredItems:[],isOpen:!1}),y()(b()(b()(o)),"fetchData",function(){o.props.fetchPortfolios()}),y()(b()(b()(o)),"onClickCreatePortfolio",function(){o.props.showModal({open:!0,closeModal:o.props.hideModal},"addportfolio"),o.setState(i()({},o.state,{isOpen:!o.state.isOpen}))}),o}return g()(a,e),p()(a,[{key:"componentDidMount",value:function(){this.fetchData(),Object(se.a)()}},{key:"renderToolbar",value:function(){return x.a.createElement(P.a,{className:Object(S.b)(R.a.justifyContentSpaceBetween,F.a.mxXl,F.a.myMd)},x.a.createElement(M.a,null,x.a.createElement(T.a,{className:Object(S.b)(F.a.mrXl)},x.a.createElement(A.b,{size:"2xl"}," All Portfolios"))),x.a.createElement(M.a,{className:"pf-u-ml-auto-on-xl"},x.a.createElement(T.a,null,x.a.createElement(C.a,{to:"/portfolios/add-portfolio"},x.a.createElement(L.c,{variant:"primary","aria-label":"Create Portfolio"},"Create Portfolio")))))}},{key:"render",value:function(){var e={items:this.props.portfolios.map(function(e){return x.a.createElement(oe,n()({key:e.id},e))}),isLoading:this.props.isLoading};return x.a.createElement(w.Fragment,null,x.a.createElement(re,null),x.a.createElement(N.a,{exact:!0,path:"/portfolios/add-portfolio",component:ce.a}),x.a.createElement(N.a,{exact:!0,path:"/portfolios/edit/:id",component:ce.a}),this.renderToolbar(),x.a.createElement(U.a,e))}}]),a}(w.Component);pe.propTypes={filteredItems:j.a.array,portfolios:j.a.array,platforms:j.a.array,isLoading:j.a.bool,searchFilter:j.a.string,showModal:j.a.func,hideModal:j.a.func,fetchPortfolios:j.a.func.isRequired};a.default=Object(k.connect)(function(e){var a=e.portfolioReducer;return{portfolios:a.portfolios,isLoading:a.isLoading,searchFilter:a.filterValue}},function(e){return{fetchPortfolios:function(a){return e(Object(ie.d)(a))},hideModal:function(){return e(Object(le.a)())},showModal:function(a,o){e(Object(le.b)({modalProps:a,modalType:o}))}}})(pe)}}]);
//# sourceMappingURL=../sourcemaps/7.js.map