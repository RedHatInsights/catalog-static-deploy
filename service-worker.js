if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise((async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()}))),e.then((()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]}))},e=(e,s)=>{Promise.all(e.map(a)).then((a=>s(1===a.length?a[0]:a)))},s={require:Promise.resolve(e)};self.define=(e,l,r)=>{s[e]||(s[e]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return s;case"module":return o;default:return a(e)}}))).then((a=>{const e=r(...a);return s.default||(s.default=e),s}))})))}}define("./service-worker.js",["./workbox-126da8a6"],(function(a){"use strict";a.enable(),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"0e555f2c723d66380b461acd71a83b7f"},{url:"/beta/apps/catalog/js/0.0ac2a805352f254952db.js",revision:null},{url:"/beta/apps/catalog/js/12.cfd915db3dc95747b40d.js",revision:null},{url:"/beta/apps/catalog/js/15.8ab6ef145d8c280b9794.js",revision:null},{url:"/beta/apps/catalog/js/4.572ca493a1abec330dbc.js",revision:null},{url:"/beta/apps/catalog/js/73.57cce11db43f1f75e45e.js",revision:null},{url:"/beta/apps/catalog/js/App.3e7a13346a0dffee44f0.js",revision:null},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.53bab0b9ac3d4b4f83c7.js",revision:null},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.9f8222dba859139cb288.js",revision:null},{url:"/beta/apps/catalog/js/approval-request~31ecd969.e320cba3f5c57142bda9.js",revision:null},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.dcbf8d1fddc23b2456f4.js",revision:null},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.140666a1220a6891a2ed.js",revision:null},{url:"/beta/apps/catalog/js/error-page~31ecd969.b8cf3937f63ec4520530.js",revision:null},{url:"/beta/apps/catalog/js/framework~f9ca8911.dee01dd7089ea81984f5.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~06837ae4.5f47a44565836bc6bed7.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~0f485567.51240c9811c27a99ff3b.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~253ae210.282809f322f09c00cb1f.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~2a42e354.540ba186adfebd07d91f.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~47974c6d.b6b010a5803a6308eceb.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~50314d7e.6aa9cceffda5c718c00a.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~56d643cd.3e4989106855e15bb9bb.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~60b88c48.a6007ba42bd4d88cb01d.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~678f84af.3bb6802cda324112a8c8.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~690b702c.7e93ba161fd37bafbf7d.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~807bc7cd.27aefa269db730a68fb6.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8ac75459.6b70eecc9a899a1483f9.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.3edf056a4b6009ab045e.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a0377823.3de0826ce08bec6d4752.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a3f6ebf5.d3c016e732fd8287609a.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a8298385.7f50ad05082dc3bc2648.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b26ff0e5.7bef905086fc03326286.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.05fc84b69f533f4f9842.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~253ae210.ca3fe0213dd74c8710ae.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~2930ad93.14ffed81885dc702ce24.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~7293ddd8.47a1bdeb692823a30a27.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~8c657992.d5f13adfbb313111b872.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~bc848bd0.a53c19036ca24d9f9887.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.fb4910ca1fa7882e57fc.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.ea44e1ae63ecbe9a6a15.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.51f264832fe284610ec7.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.39a4bb1bfbd24f38f6e6.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.0cc7cf94c80e62f0fcab.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.971d133bac50afd3b087.js",revision:null},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.3cd73be172ab12a4b6c2.js",revision:null},{url:"/beta/apps/catalog/js/order-details~31ecd969.9702c415815f9663037b.js",revision:null},{url:"/beta/apps/catalog/js/order-detail~31ecd969.e7f43d2f2259bfa0366a.js",revision:null},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.0a0971bd5be22d224e0e.js",revision:null},{url:"/beta/apps/catalog/js/order-modal~31ecd969.d4b80a72df9ca6982ad0.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~0f485567.eddfec65e6c0c5cd2697.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~31ecd969.72a8bce59a28269e31c7.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.4fc15fa40f35e8b676d0.js",revision:null},{url:"/beta/apps/catalog/js/order-provision~31ecd969.8e495cceb63f0044ca70.js",revision:null},{url:"/beta/apps/catalog/js/orders~0f485567.fd9127b0116f9a09a951.js",revision:null},{url:"/beta/apps/catalog/js/orders~2930ad93.aa99e7e851745e39c50d.js",revision:null},{url:"/beta/apps/catalog/js/orders~50314d7e.e1b8eeae08f0c0586a42.js",revision:null},{url:"/beta/apps/catalog/js/orders~7293ddd8.7d8469c69ddf90042e03.js",revision:null},{url:"/beta/apps/catalog/js/orders~8c657992.2ad6978626566cdccab5.js",revision:null},{url:"/beta/apps/catalog/js/orders~91f4305a.1a1e27340d4ab6e9c0af.js",revision:null},{url:"/beta/apps/catalog/js/orders~949db3e5.582ab5a22335a6f41018.js",revision:null},{url:"/beta/apps/catalog/js/orders~bc848bd0.2d7c5b79ae0a2ec78026.js",revision:null},{url:"/beta/apps/catalog/js/platform-details~31ecd969.984bc1202cbeffda550a.js",revision:null},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.0d5fb8e47f71581ced43.js",revision:null},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.a963aa77bf9f69fc824c.js",revision:null},{url:"/beta/apps/catalog/js/platforms~31ecd969.ec44214c686698b20a82.js",revision:null},{url:"/beta/apps/catalog/js/platform~31ecd969.5e925afcda57a9960beb.js",revision:null},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.8257f34b293fcc74ad5f.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~0f485567.97a797e7e308e039ab90.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.78923f76355cd45ac6c5.js",revision:null},{url:"/beta/apps/catalog/js/portfolio~31ecd969.393ad151cb0304f2e58d.js",revision:null},{url:"/beta/apps/catalog/js/products~31ecd969.864b93a8c23e7ff123ca.js",revision:null},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.3e439fc9cc5ab4f99c85.js",revision:null},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.6a59ecaad5711834ab44.js",revision:null},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.c1d96c0f529871e8cb7b.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.a7f4dd8b1c708abdf9cf.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.9a6706af945ae5d3a137.js",revision:null}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
