(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{915:function(e,t,n){"use strict";n.r(t);var o=n(638),r=n.n(o),i=n(639),a=n.n(i),c=n(0),l=n.n(c),u=n(4),s=n.n(u),p=n(18),f=n(85),m=n(184),d=n(185),b=n(21),h=n(138),v=n(109),_=n(28),g=n(9),O=n(111),j=n(95),w=n(46),I=n(17),y=function(e){return Object(_.k)({name:e},{limit:100,offset:0}).then((function(e){return e.data.filter((function(e){return e.metadata.user_capabilities.update})).map((function(e){var t=e.name;return{value:e.id,label:t}}))}))},q=function(e,t,n){return{fields:[{component:"copy-name-display",name:"portfolio_item_name",label:t(j.a.name),getName:e,fieldSpy:"portfolio_id"},{component:"initial-select",name:"portfolio_id",label:t(j.a.portfolio),isRequired:!0,loadOptions:Object(v.a)(y),isSearchable:!0,options:n,menuIsPortal:!0}]}},N=function(e){var t=e.portfolioId,n=e.portfolioItemId,o=e.closeUrl,i=e.search,c=e.portfolioName,u=Object(I.a)(),s=Object(p.useDispatch)(),v=Object(f.g)().push,_=function(){var e=a()(r.a.mark((function e(o){var i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(Object(h.i)(o.portfolio_id));case 2:return i=e.sent,a=i.value,e.abrupt("return",s(Object(h.d)(n,o,a)).then((function(e){var t=e.id,n=e.service_offering_source_ref;return v({pathname:g.w,search:"?portfolio=".concat(o.portfolio_id,"&portfolio-item=").concat(t,"&source=").concat(n)})})).then((function(){return o.portfolio_id===t&&s(Object(h.f)(t))})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(m.Modal,{isOpen:!0,title:u(w.a.copyItemTitle),onClose:function(){return v({pathname:o,search:i})},variant:"small"},l.a.createElement(d.c,{initialValues:{portfolio_id:t},schema:q((function(e){return Object(b.g)().getPortfolioItemNextName(n,e).then((function(e){return e.next_name}))}),u,[{value:t,label:c}]),onSubmit:_,onCancel:function(){return v({pathname:o,search:i})},templateProps:{submitLabel:u(O.a.save),disableSubmit:["validating","submitting"]}}))};N.propTypes={closeUrl:s.a.string.isRequired,portfolioId:s.a.string,portfolioItemId:s.a.string.isRequired,search:s.a.string.isRequired,portfolioName:s.a.string.isRequired},t.default=N}}]);
//# sourceMappingURL=../sourcemaps/copy-portfolio-item-modal~1601866c.js.map