(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{879:function(e,t,n){"use strict";n.r(t);var o=n(18),r=n.n(o),a=n(43),i=n.n(a),c=n(0),l=n.n(c),u=n(4),s=n.n(u),p=n(20),f=n(78),m=n(171),d=n(172),b=n(45),h=n(123),v=n(100),_=n(26),g=n(11),O=n(102),j=n(166),I=n(41),w=n(23),y=function(e){return Object(_.k)({name:e},{limit:100,offset:0}).then((function(e){return e.data.filter((function(e){return e.metadata.user_capabilities.update})).map((function(e){var t=e.name;return{value:e.id,label:t}}))}))},q=function(e,t,n){return{fields:[{component:"copy-name-display",name:"portfolio_item_name",label:t(j.a.name),getName:e,fieldSpy:"portfolio_id"},{component:"initial-select",name:"portfolio_id",label:t(j.a.portfolio),isRequired:!0,loadOptions:Object(v.a)(y),isSearchable:!0,options:n,menuIsPortal:!0}]}},N=function(e){var t=e.portfolioId,n=e.portfolioItemId,o=e.closeUrl,a=e.search,c=e.portfolioName,u=Object(w.a)(),s=Object(p.useDispatch)(),v=Object(f.g)().push,_=function(){var e=i()(r.a.mark((function e(o){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(Object(h.i)(o.portfolio_id));case 2:return a=e.sent,i=a.value,e.abrupt("return",s(Object(h.d)(n,o,i)).then((function(e){var t=e.id,n=e.service_offering_source_ref;return v({pathname:g.y,search:"?portfolio=".concat(o.portfolio_id,"&portfolio-item=").concat(t,"&source=").concat(n)})})).then((function(){return o.portfolio_id===t&&s(Object(h.f)(t))})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(m.Modal,{isOpen:!0,title:u(I.a.copyItemTitle),onClose:function(){return v({pathname:o,search:a})},variant:"small"},l.a.createElement(d.c,{initialValues:{portfolio_id:t},schema:q((function(e){return Object(b.g)().getPortfolioItemNextName(n,e).then((function(e){return e.next_name}))}),u,[{value:t,label:c}]),onSubmit:_,onCancel:function(){return v({pathname:o,search:a})},formContainer:"modal",templateProps:{submitLabel:u(O.a.save),disableSubmit:["validating","submitting"]}}))};N.propTypes={closeUrl:s.a.string.isRequired,portfolioId:s.a.string,portfolioItemId:s.a.string.isRequired,search:s.a.string.isRequired,portfolioName:s.a.string.isRequired},t.default=N}}]);
//# sourceMappingURL=../sourcemaps/copy-portfolio-item-modal~1601866c.js.map