"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[7506],{18792:(t,e,n)=>{n.r(e),n.d(e,{default:()=>P});var o=n(30624),r=n.n(o),a=n(14494),i=n(334),l=n(65832),u=n(30137),c=n(22437),s=n(89231),f=n(77503),p=n(81624),m=n(83629),d=n(73712),h=n(36722),b=n(7579),v=n(56682),g=n(64466),y=n(23349),_=function(){return(_=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},w=function(t){return(0,m.vV)({name:t},{limit:100,offset:0}).then((function(t){return t.data?t.data.filter((function(t){return t.metadata.user_capabilities.update})).map((function(t){var e=t.name;return{value:t.id,label:e}})):[]}))},I=function(t){return(0,d.vV)({name:t},{limit:100,offset:0}).then((function(t){return t.results?t.results.map((function(t){var e=t.name;return{value:t.id,label:e}})):[]}))},S=function(t,e,n){return localStorage.getItem("catalog_standalone")?function(t,e){return{fields:[{component:"initial-select",name:"portfolio_id",label:t(v.Z.to_portfolio),isRequired:!0,loadOptions:(0,p.Z)(I),isSearchable:!0,options:e,menuIsPortal:!0}]}}(e,n):function(t,e,n){return{fields:[{component:"copy-name-display",name:"portfolio_item_name",label:e(v.Z.name),getName:t,fieldSpy:"portfolio_id"},{component:"initial-select",name:"portfolio_id",label:e(v.Z.portfolio),isRequired:!0,loadOptions:(0,p.Z)(w),isSearchable:!0,options:n,menuIsPortal:!0}]}}(t,e,n)};const P=function(t){var e=t.portfolioId,n=t.portfolioItemId,o=t.closeUrl,p=t.search,m=t.portfolioName,d=(0,y.Z)(),v=(0,a.I0)(),w=(0,i.useHistory)().push;return r().createElement(l.Modal,{isOpen:!0,title:d(g.Z.copyItemTitle),onClose:function(){return w({pathname:o,search:p})},variant:"small"},r().createElement(u.ZP,{initialValues:{portfolio_id:e},schema:S((function(t){return(0,c.HK)().getPortfolioItemNextName(n,t).then((function(t){return t.next_name}))}),d,[{value:e,label:m}]),onSubmit:function(t){return o=void 0,r=void 0,i=function(){var o;return function(t,e){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(r){switch(r.label){case 0:return[4,v(localStorage.getItem("catalog_standalone")?(0,f.al)(t.portfolio_id):(0,s.al)(t.portfolio_id))];case 1:return o=r.sent().value,[2,v(localStorage.getItem("catalog_standalone")?(0,f.$I)(n,_(_({},t),{portfolio:t.portfolio_id}),o):(0,s.$I)(n,t,o)).then((function(e){var n=e.id,o=e.service_offering_source_ref;return w({pathname:h.YJ,search:"?portfolio="+t.portfolio_id+"&portfolio-item="+n+"&source="+o})})).then((function(){return t.portfolio_id===e&&v(localStorage.getItem("catalog_standalone")?(0,f.cP)(e):(0,s.cP)(e))}))]}}))},new((a=void 0)||(a=Promise))((function(t,e){function n(t){try{u(i.next(t))}catch(t){e(t)}}function l(t){try{u(i.throw(t))}catch(t){e(t)}}function u(e){var o;e.done?t(e.value):(o=e.value,o instanceof a?o:new a((function(t){t(o)}))).then(n,l)}u((i=i.apply(o,r||[])).next())}));var o,r,a,i},onCancel:function(){return w({pathname:o,search:p})},templateProps:{submitLabel:d(b.Z.save),disableSubmit:["validating","submitting"]}}))}}}]);
//# sourceMappingURL=../sourcemaps/copy-portfolio-item-modal.50b1cedca1ce92cf2ad526246f978029.js.map