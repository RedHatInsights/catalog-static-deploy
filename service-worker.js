if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise((async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()}))),e.then((()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]}))},e=(e,s)=>{Promise.all(e.map(a)).then((a=>s(1===a.length?a[0]:a)))},s={require:Promise.resolve(e)};self.define=(e,l,r)=>{s[e]||(s[e]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return s;case"module":return o;default:return a(e)}}))).then((a=>{const e=r(...a);return s.default||(s.default=e),s}))})))}}define("./service-worker.js",["./workbox-126da8a6"],(function(a){"use strict";a.enable(),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"e0e6a5a34c5cfcf2606eb90e549c924f"},{url:"/beta/apps/catalog/js/0.90b3ef20902c04ef05cc.js",revision:null},{url:"/beta/apps/catalog/js/13.868efb86366c36ff7758.js",revision:null},{url:"/beta/apps/catalog/js/4.75fe3f8589a226609a84.js",revision:null},{url:"/beta/apps/catalog/js/70.d9d70b48b62168124b2e.js",revision:null},{url:"/beta/apps/catalog/js/App.c35146ec4b89f5373091.js",revision:null},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.f7419ff839fa5f2db7fb.js",revision:null},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.e302978a1745c88d29e6.js",revision:null},{url:"/beta/apps/catalog/js/approval-request~31ecd969.c82a2d3838c667649eaf.js",revision:null},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.2fc0bf30f30ad7707975.js",revision:null},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.8160fa63868dd663e5ce.js",revision:null},{url:"/beta/apps/catalog/js/error-page~31ecd969.3e5d0a8745d9499d3fdd.js",revision:null},{url:"/beta/apps/catalog/js/framework~f9ca8911.a70f0028cf230e7b6f4c.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~06837ae4.57ed0e0eb9db6e39c61d.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~0f485567.0c01e5eac1a34de970ed.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~253ae210.35cb4da728f0d1022e34.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~2a42e354.e63edf6a1a675d29bff2.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~47974c6d.eab39c0fc74618ca2f83.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~50314d7e.f39d0f0fd9b5e08aec6c.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~545c15e3.587db24f8586af5be934.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~56d643cd.71be3b36db1a5aa2b9a5.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.174deb4b0df3812ead3f.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~60b88c48.5bb950ef87eb6c14ab66.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~678f84af.bccffc3b16170b84ee08.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~690b702c.57b324d1bb5f58b2a4b4.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8ac75459.6aa58502205cd73bf67c.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.6d6563c8db8845b7060f.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a0377823.4fe5c41d0000d3aaa505.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a3f6ebf5.19aa70ac7e043f099706.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b26ff0e5.c6c9e7393ea7b4c1ab89.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.f69614ec8520eee7ca98.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~253ae210.a8ebc9b373fa9251aacb.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~2930ad93.f569ce9d0f4e1e941cf1.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~cf15acf0.4e46503dd99d14de8632.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.d66dab47ac8952fd45ae.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.1c0cc33b0c304a14e289.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.191a71e4539f767fe3e6.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.4dc6d91c2e2776a65381.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.12612682c5084829c4e0.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.8f19da9d4927f68cf6e5.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-processes~survey-editor~cf15acf0.e1c4384917430b58011a.js",revision:null},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.0e4d4ae0902321abaffc.js",revision:null},{url:"/beta/apps/catalog/js/order-details~31ecd969.137a554c70a3c308d1dc.js",revision:null},{url:"/beta/apps/catalog/js/order-detail~31ecd969.debf87ce6797ccf7a6c6.js",revision:null},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.0d078381002460b26115.js",revision:null},{url:"/beta/apps/catalog/js/order-modal~31ecd969.47252033028f711d4e8b.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~0f485567.0969cf8183a80dc148c4.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~31ecd969.07b13fbd514f0a59b98e.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.7eb2f84939de5f62c26f.js",revision:null},{url:"/beta/apps/catalog/js/order-provision~31ecd969.94e35ade0b4e24477ae7.js",revision:null},{url:"/beta/apps/catalog/js/orders~0f485567.0d54912d3300a4565b9e.js",revision:null},{url:"/beta/apps/catalog/js/orders~1469e04f.0f865985c7608bcfe14b.js",revision:null},{url:"/beta/apps/catalog/js/orders~2930ad93.d09163da3f27fa632f69.js",revision:null},{url:"/beta/apps/catalog/js/orders~91f4305a.f248eddfb17a306053fa.js",revision:null},{url:"/beta/apps/catalog/js/orders~949db3e5.3ea351a236d2e1fd04c2.js",revision:null},{url:"/beta/apps/catalog/js/orders~b3141737.fd0044cbca6b90bb94e5.js",revision:null},{url:"/beta/apps/catalog/js/orders~bc848bd0.b3b4875848ba6f1ccfe7.js",revision:null},{url:"/beta/apps/catalog/js/platform-details~31ecd969.96deccb83fd387ed0527.js",revision:null},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.4bd83c22b9afeb588c91.js",revision:null},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.4cf7b8a60e63294f0bd6.js",revision:null},{url:"/beta/apps/catalog/js/platforms~31ecd969.f757a14ca1f94d5bd6ee.js",revision:null},{url:"/beta/apps/catalog/js/platform~31ecd969.2e11f584de3f68c60760.js",revision:null},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.9e1e685f26d72eca138a.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~0f485567.689c800445a7c7a09acd.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.00fc985badab01fbbd5f.js",revision:null},{url:"/beta/apps/catalog/js/portfolio~31ecd969.05cfb785b5b222a6c32a.js",revision:null},{url:"/beta/apps/catalog/js/products~31ecd969.2c764dcb34f7a9aea66a.js",revision:null},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.ad2cb8c14dbef1bb2983.js",revision:null},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.2351ecdb40d726c22ab2.js",revision:null},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.043375f7e07c45980d2b.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.bbd9835cb598af73f7bb.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.2ccc1456e1b7c4ec8ad6.js",revision:null}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
