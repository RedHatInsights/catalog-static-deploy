(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{587:function(n,e,a){var t=a(601);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(151)(t,o);t.locals&&(n.exports=t.locals)},588:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=a(0),i=a.n(r),l=(a(594),function(n){var e=n.children,a=n.paddingBottom;return o.a.createElement("div",{className:"pf-u-pt-xl pf-u-pr-xl pf-u-pl-xl ".concat(a?"pf-u-pb-xl":""," top-toolbar")},e)});l.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,paddingBottom:i.a.bool},l.defaultProps={paddingBottom:!0},e.a=l},589:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=a(0),i=a.n(r),l=a(301),c=a(300),s=a(291),p=a(82),d=function(n){var e=n.searchValue,a=n.onFilterChange,t=n.placeholder;return o.a.createElement(l.a,{className:"searchToolbar"},o.a.createElement(c.a,null,o.a.createElement("div",{className:"pf-c-input-group"},o.a.createElement(s.a,{placeholder:t,value:e,type:"text",onChange:a,"aria-label":"Find product button"}),o.a.createElement(p.c,{variant:"tertiary",id:"searchProductButton",onClick:function(){return a(e)}},o.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"})))))};d.propTypes={onFilterChange:i.a.func.isRequired,placeholder:i.a.string,searchValue:i.a.string},d.defaultProps={searchValue:""},e.a=d},590:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=a(105),i=a(301),l=a(300),c=a(82),s=(a(587),{alignSelf:"baseline"});e.a=function(){return o.a.createElement(i.a,{className:"pf-u-ml-auto-on-xl",style:s},o.a.createElement(l.a,null,o.a.createElement(r.a,{key:"show_order-list",to:"/orders"},o.a.createElement(c.c,{variant:"link",id:"ordersButton"},o.a.createElement("i",{className:"fas fa-shopping-cart","aria-hidden":"true"}),"Orders"))))}},591:function(n,e,a){"use strict";a.d(e,"b",function(){return t}),a.d(e,"a",function(){return o});var t=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},o=function(n,e){var a=n.display_name,t=n.name;return(a||t).trim().toLowerCase().includes(e.toLowerCase())}},592:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=(a(597),a(0)),i=a.n(r),l=a(108),c=a(47),s=a(66),p=a(83),d=a(186),u=function(){return o.a.createElement(p.a,null,o.a.createElement(d.b,{component:d.a.h1},"No items found"))},f=function(n){var e=n.isLoading,a=n.items;return o.a.createElement(t.Fragment,null,e?o.a.createElement(s.b,null):o.a.createElement(c.Section,{type:"content"},o.a.createElement(l.a,{gutter:"md"},a.length>0?a:o.a.createElement(u,null))))};f.propTypes={isLoading:i.a.bool,items:i.a.array},e.a=f},593:function(n,e,a){"use strict";var t=a(51),o=a.n(t),r=a(72),i=a.n(r),l=a(1),c=a.n(l),s=a(0),p=function(n){var e=n.src,a=i()(n,["src"]);return c.a.createElement("img",o()({src:e},a))};p.propTypes={src:a.n(s).a.string.isRequired},e.a=p},594:function(n,e,a){var t=a(595);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(151)(t,o);t.locals&&(n.exports=t.locals)},595:function(n,e,a){(n.exports=a(110)(!1)).push([n.i,".top-toolbar {\n  background-color: #FFFFFF; }\n  .top-toolbar .pf-c-breadcrumb__item .active {\n    color: var(--pf-c-breadcrumb__item--Color);\n    text-decoration: none;\n    pointer-events: none; }\n  .top-toolbar h2 {\n    margin-bottom: 0 !important; }\n",""])},596:function(n,e,a){"use strict";var t=a(72),o=a.n(t),r=a(1),i=a.n(r),l=a(0),c=a.n(l),s=function(n){var e=n.value;return i.a.createElement("div",null,e)};s.propTypes={value:c.a.oneOfType([c.a.string,c.a.number,c.a.arrayOf(c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]))]).isRequired};var p=function(n){var e=n.toDisplay,a=void 0===e?[]:e,t=o()(n,["toDisplay"]);return i.a.createElement("div",{className:"line-clamp"},a.map(function(n){return i.a.createElement(s,{key:"card-prop-".concat(n),value:t[n]})}))};p.propTypes={toDisplay:c.a.arrayOf(c.a.oneOfType([c.a.string,c.a.node,c.a.arrayOf(c.a.node)]))},p.defaultProps={toDisplay:[]},e.a=p},597:function(n,e,a){var t=a(598);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(151)(t,o);t.locals&&(n.exports=t.locals)},598:function(n,e,a){(e=n.exports=a(110)(!1)).i(a(203),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n",""])},599:function(n,e,a){var t=a(600);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(151)(t,o);t.locals&&(n.exports=t.locals)},600:function(n,e,a){(e=n.exports=a(110)(!1)).i(a(203),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n.pcard_header {\n  height: 60px; }\n\n.pcard_body {\n  height: 140px;\n  overflow: hidden;\n  font-size: small; }\n",""])},601:function(n,e,a){(e=n.exports=a(110)(!1)).i(a(203),""),e.push([n.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n.space-between-toolbar-items > div {\n  margin-right: var(--pf-global--gutter);\n  align-self: flex-end; }\n\n.searchPlatforms {\n  min-width: 30%; }\n  .searchPlatforms > div {\n    width: 100%; }\n\n/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.elipsis-text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.toolbar-padding {\n  padding: 24px 24px 0 24px; }\n\n.card-link, .card-link:hover, .card-link:active {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #282d33 !important;\n  font-weight: 400 !important; }\n\n.text-align-right {\n  text-align: right; }\n\n.w-100 {\n  width: 100%; }\n\n.align-items-base {\n  align-items: baseline; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word; }\n\n.card-image-header {\n  padding: 0 !important; }\n\n.portfolio-card-header {\n  min-height: 100px;\n  max-height: 200px;\n  background-size: stretch;\n  color: white;\n  padding: 8px 24px; }\n\n.center_message {\n  padding-top: 35px;\n  padding-left: 10px;\n  padding-right: 10px; }\n",""])},605:function(n,e,a){"use strict";var t=a(1),o=a.n(t),r=a(0),i=a.n(r),l=a(310),c=a(296),s=a(588),p=a(589),d=a(590),u=function(n){var e=n.searchValue,a=n.onFilterChange;return o.a.createElement(s.a,null,o.a.createElement(l.a,null,o.a.createElement(c.a,null,o.a.createElement(p.a,{searchValue:e,onFilterChange:a,placeholder:"Find a product"})),o.a.createElement(c.a,null,o.a.createElement(d.a,null))))};u.propTypes={searchValue:i.a.string,onFilterChange:i.a.func.isRequired},e.a=u},621:function(n,e,a){n.exports=a.p+"fonts/platform-default.svg"},622:function(n,e,a){n.exports=a.p+"fonts/platform-openshift.svg"},623:function(n,e,a){n.exports=a.p+"fonts/platform-amazon.png"},651:function(n,e,a){"use strict";a.r(e);var t=a(51),o=a.n(t),r=a(111),i=a.n(r),l=a(112),c=a.n(l),s=a(113),p=a.n(s),d=a(114),u=a.n(d),f=a(115),m=a.n(f),g=a(26),h=a.n(g),v=a(8),b=a.n(v),x=a(1),w=a.n(x),y=a(52),k=a(0),E=a.n(k),C=a(47),_=a(310),F=a(296),T=a(307),O=a(186),N=a(592),V=a(10),L=a.n(V),P=a(72),z=a.n(P),D=a(105),B=a(91),I=a(194),R=a(280),j=a(195),q=a(279),S=a(621),M=a.n(S),A=a(622),J=a.n(A),U=a(623),G=a.n(U),H=a(593),K=a(596),Q=(a(599),["description","modified"]),W={1:J.a,2:G.a},X=function(n){var e=n.name,a=n.id,t=z()(n,["name","id"]);return w.a.createElement(B.a,{sm:6,md:4,lg:4,xl:3},w.a.createElement(D.a,{to:"/platform/".concat(a),className:"card-link"},w.a.createElement(I.a,{key:a},w.a.createElement(R.a,{className:"pcard_header"},w.a.createElement(H.a,{src:W[t.source_type_id]||M.a,width:"80",height:"40"})),w.a.createElement(j.a,{className:"pcard_body"},w.a.createElement("h4",null,e),w.a.createElement(K.a,o()({},L()({name:e},t),{toDisplay:Q}))),w.a.createElement(q.a,null))))};X.propTypes={history:E.a.object,imageUrl:E.a.string,name:E.a.string,source_type_id:E.a.string,id:E.a.string};var Y=X,Z=a(605),$=a(206),nn=a(591),en=function(n){function e(){var n,a;i()(this,e);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return a=p()(this,(n=u()(e)).call.apply(n,[this].concat(o))),b()(h()(h()(a)),"state",{filterValue:"",isOpen:!1}),b()(h()(h()(a)),"fetchData",function(){return a.props.fetchPlatforms()}),b()(h()(h()(a)),"handleFilterChange",function(n){return a.setState({filterValue:n})}),a}return m()(e,n),c()(e,[{key:"componentDidMount",value:function(){this.fetchData(),Object(nn.b)()}},{key:"renderToolbar",value:function(){return w.a.createElement(_.a,{className:"pf-u-pt-md pf-u-pr-xl pf-u-pl-xl"},w.a.createElement(F.a,null,w.a.createElement(T.a,null,w.a.createElement(O.b,{component:O.a.h2},"All Platforms "))))}},{key:"render",value:function(){var n=this,e={items:this.props.platforms.filter(function(e){return e.name.toLowerCase().includes(n.state.filterValue.toLowerCase())}).map(function(n){return w.a.createElement(Y,o()({key:n.id},n))}),isLoading:this.props.isLoading};return w.a.createElement(C.Section,null,w.a.createElement(Z.a,{onFilterChange:this.handleFilterChange,searchValue:this.state.filterValue}),this.renderToolbar(),w.a.createElement(N.a,e))}}]),e}(x.Component);en.propTypes={filteredItems:E.a.array,platforms:E.a.array,isLoading:E.a.bool,searchFilter:E.a.string,showModal:E.a.func,hideModal:E.a.func,history:E.a.object,fetchPlatforms:E.a.func};e.default=Object(y.connect)(function(n){var e=n.platformReducer;return{platforms:e.platforms,isLoading:e.isLoading,searchFilter:e.filterValue}},function(n){return{fetchPlatforms:function(e){return n(Object($.c)(e))}}})(en)}}]);
//# sourceMappingURL=../sourcemaps/5.js.map