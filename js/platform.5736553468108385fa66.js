"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[7745],{4852:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var a=l(28481),n=l(30624),r=l.n(n),m=l(334),i=l(63035),c=l(11608),o=l(47786),u=l(45237),f=l(52579),s=l(36722),p=l(66678),d=l(12700),v=l(8666),E=l(80256),b=l(31369),h=l(56682),g=l(23349),y=(0,n.lazy)((function(){return Promise.all([l.e(6410),l.e(3352),l.e(25)]).then(l.bind(l,43256))})),P=(0,n.lazy)((function(){return Promise.all([l.e(6410),l.e(4736),l.e(7881),l.e(2642),l.e(3188),l.e(5167),l.e(3352),l.e(2183),l.e(4351),l.e(4056),l.e(4727)]).then(l.bind(l,47179))})),Z=(0,n.lazy)((function(){return Promise.all([l.e(6410),l.e(7881),l.e(3188),l.e(3352),l.e(2183),l.e(4168),l.e(7792)]).then(l.bind(l,87552))})),k=(0,n.lazy)((function(){return Promise.all([l.e(6410),l.e(4736),l.e(2642),l.e(3352),l.e(1806)]).then(l.bind(l,69872))})),R=[{eventKey:0,title:"Templates",name:"/platforms/platform/platform-templates"},{eventKey:1,title:"Inventories",name:"/platforms/platform/platform-inventories"},{eventKey:2,title:"Summary",name:"/platforms/platform/platform-details"}];const w=function(){var e=(0,u.useDispatch)(),t=(0,o.Z)(["platform"]),l=(0,a.Z)(t,1)[0].platform,w=(0,u.useSelector)((function(e){var t=e.platformReducer;return{selectedPlatform:t.selectedPlatform,serviceOffering:t.serviceOffering}})),z=w.selectedPlatform,A=w.serviceOffering,S=(0,f.Z)([z,A]),D=(0,g.Z)();return(0,n.useEffect)((function(){return Promise.all([e((0,c.x6)(l)),e((0,c.dw)())]),(0,i.k3)(),function(){S()}}),[l]),r().createElement(n.Fragment,null,r().createElement(m.Route,{exact:!0,path:[s.mg,s.AG,s.d2,s.Dq,"".concat(s.mg,"/*")]},r().createElement(E.Z,null,r().createElement(p.Z,{schema:(0,d.wr)({title:z.name,paddingBottom:!1,tabItems:R,platformAvailable:function(){return function(e){return{color:"available"===e.availability_status?"green":"red",icon:r().createElement(b.default,null),title:"available"===e.availability_status?D(h.Z.available):D(h.Z.notAvailable)}}(z)}})}))),r().createElement(n.Suspense,{fallback:r().createElement(v.Ii,null)},r().createElement(m.Switch,null,r().createElement(m.Route,{path:s.rg},r().createElement(k,null)),r().createElement(m.Route,{path:s.mg},r().createElement(Z,null)),r().createElement(m.Route,{path:s.Dq},r().createElement(y,null)),r().createElement(m.Route,{path:[s.d2,s.AG]},r().createElement(P,null)))))}}}]);