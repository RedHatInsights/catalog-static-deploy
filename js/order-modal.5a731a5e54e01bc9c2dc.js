"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[7709],{91858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(30624),l=n.n(r),o=n(45237),a=n(334),c=n(23212),i=n(67463),s=n(30137),u=n(47962),m=n(58603),f=n(47786),p=n(56682),d=n(23349),h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};const v=function(e){var t=e.closeUrl,n=(0,r.useState)(!0),v=n[0],b=n[1],E=(0,a.useLocation)().search,g=(0,a.useHistory)().push,S=(0,o.useDispatch)(),k=(0,f.Z)(["portfolio-item"])[0]["portfolio-item"],y=(0,o.useSelector)((function(e){return e.portfolioReducer.portfolioItem})).portfolioItem,C=(0,d.Z)(),L=(0,o.useSelector)((function(e){return e.orderReducer.servicePlans}));(0,r.useEffect)((function(){S((0,u.kL)(k)).then((function(){return b(!1)}))}),[]);var O=function(){return g({pathname:t,search:E})};return l().createElement(c.Modal,{isOpen:!0,onClose:O,title:"Order submission",variant:"small"},l().createElement(c.Level,{className:"pf-u-mb-md"},l().createElement(c.LevelItem,null,l().createElement(c.TextContent,null,l().createElement(c.Text,null,l().createElement("strong",null,y.name))))),v?l().createElement(m.Z,{className:"pf-u-m-sm"},l().createElement(i.Spinner,null)):l().createElement(s.ZP,{schema:function(e){var t,n=null===(t=null==e?void 0:e.fields)||void 0===t?void 0:t.map((function(e){return e.isSubstitution&&(delete e.validate,delete e.dataType),e}));return h(h({},e),{fields:n})}(L[0].create_json_schema.schema),onSubmit:function(e){S((0,u.g3)({portfolio_item_id:y.id,service_parameters:e},y)),O()},onCancel:O,templateProps:{submitLabel:C(p.Z.confirm)}}))}}}]);
//# sourceMappingURL=../sourcemaps/order-modal.2c25a06b13d6ee191fd7.js.map