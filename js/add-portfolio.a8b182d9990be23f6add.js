"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[5868],{5693:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var o=t(30624),r=t.n(o),a=t(45237),i=t(30137),l=t(96354),u=t(35388),c=t(81624),s=t(83629),f=(0,c.Z)((function(e,n){return(0,s.IE)(e).then((function(t){var o=t.data;if(!e||0===e.trim().length)throw"Required";if(o.find((function(t){return t.name===e&&t.id!==n})))throw"Name has already been taken"}))})),d=function(e,n){var t,o,r,a,i;return{fields:[{label:"schemas.portfolio.name",name:"name",component:l.Z.TEXT_FIELD,isRequired:!0,maxLength:(null===(i=null===(a=null===(r=null===(o=null===(t=null==e?void 0:e.components)||void 0===t?void 0:t.schemas)||void 0===o?void 0:o.Portfolio)||void 0===r?void 0:r.properties)||void 0===a?void 0:a.name)||void 0===i?void 0:i.maxLength)||u.Nb,validate:[function(e){return f(e,n)}]},{label:"schemas.portfolio.description",component:l.Z.TEXTAREA,name:"description"}]}},p=t(89231),v=t(47786),h=t(74798),m=t(9456),b=t(36722),y=t(72510),w=t(7579),g=t(64466),Z=t(56682),k=t(23349),E=function(){return(E=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};const S=function(e){var n,t,l=e.removeQuery,u=e.closeTarget,c=e.viewState,f=(0,k.Z)(),S=(0,a.useDispatch)(),T=(0,o.useState)(!0),x=T[0],C=T[1],P=(0,o.useContext)(y.Z).openApiSchema,L=(0,v.Z)(["portfolio"])[0].portfolio,O=(0,h.Z)({removeSearch:l,keepHash:!0}).push,j=(0,a.useSelector)((function(e){var n=e.portfolioReducer;return(0,s.nX)(n,L)})),R=L&&j&&Object.keys(j).length>0;return!1===(null===(t=null===(n=null==j?void 0:j.metadata)||void 0===n?void 0:n.user_capabilities)||void 0===t?void 0:t.update)?r().createElement(m.M,null):r().createElement(i.ZP,{schema:d(P,L),onSubmit:function(e){return j?(C(!1),S((0,p.o9)(e,c)).then((function(){return O(u)}))):function(e){return n=void 0,t=void 0,a=function(){var n,t;return function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(o){switch(o.label){case 0:return n={variant:"success",title:f(g.Z.addSuccessTitle),description:f(g.Z.addSuccessDescription,{name:e.name,b:function(e){return r().createElement("b",{key:"strong"},e)}})},[4,S((0,p.jM)(e,n))];case 1:return[2,(t=o.sent())&&t.value&&t.value.id?O({pathname:b.hT,search:"?portfolio="+t.value.id}):O(u)]}}))},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{u(a.next(e))}catch(e){r(e)}}function l(e){try{u(a.throw(e))}catch(e){r(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}u((a=a.apply(n,t||[])).next())}));var n,t,o,a}(e)},onCancel:function(){return O(u)},initialValues:E({},j),isModal:!0,modalProps:{title:f(L?g.Z.modalEditTitle:g.Z.modalCreateTitle),isOpen:x,onClose:function(){return O(u)},variant:"small",isLoading:!(L&&!R)},templateProps:{submitLabel:f(L?w.Z.save:Z.Z.create)}})}}}]);
//# sourceMappingURL=../sourcemaps/add-portfolio.78ad49abec4801dc4c552de986bbc87c.js.map