if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise((async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()}))),e.then((()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]}))},e=(e,s)=>{Promise.all(e.map(a)).then((a=>s(1===a.length?a[0]:a)))},s={require:Promise.resolve(e)};self.define=(e,l,r)=>{s[e]||(s[e]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return s;case"module":return o;default:return a(e)}}))).then((a=>{const e=r(...a);return s.default||(s.default=e),s}))})))}}define("./service-worker.js",["./workbox-126da8a6"],(function(a){"use strict";a.enable(),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"1ac1f3b6e77eea43fabf9e54c0ce7f70"},{url:"/beta/apps/catalog/js/0.f56bc8575c8e00564930.js",revision:null},{url:"/beta/apps/catalog/js/12.2fc4eea7f2818b49399d.js",revision:null},{url:"/beta/apps/catalog/js/4.4f1062815890f152b51a.js",revision:null},{url:"/beta/apps/catalog/js/68.66c37e52c14bc5cab8ff.js",revision:null},{url:"/beta/apps/catalog/js/9.feeb41fac911bf8f6fce.js",revision:null},{url:"/beta/apps/catalog/js/App.101fe032b8f61cf27862.js",revision:null},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.0d18fa4bc705b992d7f6.js",revision:null},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.49d509185b102cd1ebbd.js",revision:null},{url:"/beta/apps/catalog/js/approval-request~31ecd969.4b307796672fe29a07de.js",revision:null},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.2dd4b2a837d52c74b8e8.js",revision:null},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.e796a1518b1938ef9f8c.js",revision:null},{url:"/beta/apps/catalog/js/error-page~31ecd969.b546da4ac35eadd80c96.js",revision:null},{url:"/beta/apps/catalog/js/framework~f9ca8911.53268a36e44d9add823a.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~06837ae4.fdf7cae4aa4ffeb5fc0e.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~0f485567.3d39ff13d92d1764259f.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~253ae210.c69fdf9d907cb7c36e43.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~2a42e354.c7e99eb74de6b8a0e039.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~47974c6d.84ba268627b49a3a00dc.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~50314d7e.7641cee1488675b886f5.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~545c15e3.2fc26ece4ac270b26174.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~56d643cd.d701dd24c9002e2fad22.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.078a11bce65e9210fb5d.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~60b88c48.265f84c15389243d0ac4.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~678f84af.296a6ff02b8794c0fce0.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~690b702c.61eb315bdce2079bb66d.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8ac75459.0a93ce0ac745cf31dac0.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.d61435e597912414c339.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a0377823.2a1da8fa37b3d06bab0b.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a3f6ebf5.2d9f5a9dbb9f570b7194.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b26ff0e5.adb2e21df8ce51211073.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.503d71378c31247daa6f.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~253ae210.eda45eff694c2baaffb8.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~253ae210.920f944cc9cc3752775a.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.bf91167c17e93f193d51.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.942cf47334fa9d43c53a.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.793109067de23067bcf8.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.a14b4e273a06478b8544.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.101805adbcd369a6e047.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.f4308b4d4705a1fe9024.js",revision:null},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.30f0a8de3074cd7579ab.js",revision:null},{url:"/beta/apps/catalog/js/order-details~31ecd969.1b6bf1fb0fea46df779f.js",revision:null},{url:"/beta/apps/catalog/js/order-detail~31ecd969.370c5ec8aa2bee208c9c.js",revision:null},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.edede580d8f87478ccb1.js",revision:null},{url:"/beta/apps/catalog/js/order-modal~31ecd969.f662aac872c02480f68a.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~0f485567.64e2b99dbb47f2568505.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~31ecd969.2fc861ab4cb8712b6efa.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.b968209cc37fa490c7ae.js",revision:null},{url:"/beta/apps/catalog/js/order-provision~31ecd969.ed3dd48ae31e39f55d36.js",revision:null},{url:"/beta/apps/catalog/js/orders~0f485567.0fa7cd946a1fd779a088.js",revision:null},{url:"/beta/apps/catalog/js/orders~1469e04f.788635b16693dc35d9e9.js",revision:null},{url:"/beta/apps/catalog/js/orders~2930ad93.aa20a7c2595c4e589c6e.js",revision:null},{url:"/beta/apps/catalog/js/orders~91f4305a.6caa5539ae0990195d77.js",revision:null},{url:"/beta/apps/catalog/js/orders~949db3e5.49617b0c72d08e6b2b43.js",revision:null},{url:"/beta/apps/catalog/js/orders~b3141737.ec2b00ae9e4918cfbdda.js",revision:null},{url:"/beta/apps/catalog/js/orders~bc848bd0.955bb5ff01e712b904c0.js",revision:null},{url:"/beta/apps/catalog/js/platform-details~31ecd969.67663cd776f24842f727.js",revision:null},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.428cdb4a8fbb8399c714.js",revision:null},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.cf1f5c5de2dcb215bafa.js",revision:null},{url:"/beta/apps/catalog/js/platforms~31ecd969.d459dc0590fbb2da3f8c.js",revision:null},{url:"/beta/apps/catalog/js/platform~31ecd969.0f46d29d9236b86f9635.js",revision:null},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.f23aa940e9d61499911e.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~31ecd969.8e776fccaa7690020243.js",revision:null},{url:"/beta/apps/catalog/js/portfolio~31ecd969.152f4daaf0c4b2c671c2.js",revision:null},{url:"/beta/apps/catalog/js/products~31ecd969.d6d78f36d1f719b033f9.js",revision:null},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.bdc18769fa0995b598b5.js",revision:null},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.b758f0a3c7d6c7eab2a6.js",revision:null},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.ea0ae0ffd5e5d3e3f107.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.af12520373ec507f82ee.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.576400873388d59a44fa.js",revision:null}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
