if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise((async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()}))),e.then((()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]}))},e=(e,s)=>{Promise.all(e.map(a)).then((a=>s(1===a.length?a[0]:a)))},s={require:Promise.resolve(e)};self.define=(e,l,r)=>{s[e]||(s[e]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return s;case"module":return o;default:return a(e)}}))).then((a=>{const e=r(...a);return s.default||(s.default=e),s}))})))}}define("./service-worker.js",["./workbox-126da8a6"],(function(a){"use strict";a.enable(),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"2ed17f7ae02dee3cafbb480d07bc883a"},{url:"/beta/apps/catalog/js/0.324469ac5445f8cbbac1.js",revision:null},{url:"/beta/apps/catalog/js/14.4232524ed906109d1844.js",revision:null},{url:"/beta/apps/catalog/js/15.d4c2e53f171132b5e1c6.js",revision:null},{url:"/beta/apps/catalog/js/4.a45665f2e7dfe2373eb7.js",revision:null},{url:"/beta/apps/catalog/js/71.8d99c2ee11890ef66ee9.js",revision:null},{url:"/beta/apps/catalog/js/App.dcb91faffcf08765f0d5.js",revision:null},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.e3aab12076cf6e8d8c5e.js",revision:null},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.fa536586479f5fbd9c26.js",revision:null},{url:"/beta/apps/catalog/js/approval-request~31ecd969.22e9c0961f8488b49a2d.js",revision:null},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.fcbb0d5fffebaf6e69ba.js",revision:null},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.2ba5008b1f44dc7b9e5c.js",revision:null},{url:"/beta/apps/catalog/js/error-page~31ecd969.f9f081e1993bcaf4c65c.js",revision:null},{url:"/beta/apps/catalog/js/framework~f9ca8911.3f9787bcff278891c0e0.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~06837ae4.ca68487b73552d7bc002.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~0f485567.da7b1be1f6e4c787c792.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~253ae210.db18395822c0725963fb.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~2a42e354.3b2a0290b6fcdffb763c.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~47974c6d.fcffd77d0bec007e950e.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~50314d7e.8f631fffcc16e9a1f82a.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~545c15e3.18b3567aba73f1170469.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~56d643cd.ba54257f476214226ef7.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.97009ebd1ad1bc2c6d00.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~60b88c48.8640c3474d315dac21c4.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~678f84af.e6a5c07ecceaec5017df.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~690b702c.aeda7d833c7fc5a27939.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8ac75459.05d9aff7ab7e7edaf62a.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.c20f77256727dc7ebc59.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a0377823.d79774b8945007cf7b79.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~a3f6ebf5.54122774385d0c5d4d74.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b26ff0e5.8b58a65b3edea6fa6e4b.js",revision:null},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.6bb52c63ea36d59816de.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~253ae210.3de01bc0d9b44f104c05.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~2930ad93.29daef242a1ee4e40f56.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~bc848bd0.240077c256b6f29d64a6.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~platform-inventories~cf15acf0.9dc08e8fbf357a12374b.js",revision:null},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.401293d2106036adf00f.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.e0d966d1ed4b638f40b3.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.ba139c150f90f66fe8c8.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.8c17e6faae421ccc20aa.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.7a20b4612cbca01f8284.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.cf407d84737bfd1f4685.js",revision:null},{url:"/beta/apps/catalog/js/lib~order-processes~survey-editor~cf15acf0.56c1108a83efdc267943.js",revision:null},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.7ed84dcb60f9b5973b2a.js",revision:null},{url:"/beta/apps/catalog/js/order-details~31ecd969.effa8e3efa10356c1ced.js",revision:null},{url:"/beta/apps/catalog/js/order-detail~31ecd969.3d5cc9a7fd02448f4458.js",revision:null},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.0d0d7f493f35a4d490ba.js",revision:null},{url:"/beta/apps/catalog/js/order-modal~31ecd969.63f9f2a94c0b6ab07713.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~31ecd969.06e9813501470bff47bb.js",revision:null},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.7a2ae3500dc1d70b0ace.js",revision:null},{url:"/beta/apps/catalog/js/order-provision~31ecd969.68ed299a734fe061e62e.js",revision:null},{url:"/beta/apps/catalog/js/orders~0f485567.b7cd92ca35e7684d0c29.js",revision:null},{url:"/beta/apps/catalog/js/orders~1469e04f.3bc5ec941453ca6a830a.js",revision:null},{url:"/beta/apps/catalog/js/orders~2930ad93.13a4a1bb7423173cd623.js",revision:null},{url:"/beta/apps/catalog/js/orders~91f4305a.e8bb8c82d4b21e7c35c5.js",revision:null},{url:"/beta/apps/catalog/js/orders~949db3e5.92aa1762b6d4bf6dc87f.js",revision:null},{url:"/beta/apps/catalog/js/orders~b3141737.6e45e0caf191da628104.js",revision:null},{url:"/beta/apps/catalog/js/orders~bc848bd0.a4043ae00946ba107e83.js",revision:null},{url:"/beta/apps/catalog/js/platform-details~31ecd969.a6f1dabeb0320c445359.js",revision:null},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.f117aabcb39f8f54b8eb.js",revision:null},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.c48661b812e923a112ee.js",revision:null},{url:"/beta/apps/catalog/js/platforms~31ecd969.362b0cde86013131a3db.js",revision:null},{url:"/beta/apps/catalog/js/platform~31ecd969.64f3568ef1ba3c4d63aa.js",revision:null},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.ecc67cecd36790d39a13.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~0f485567.17e7597f6a8970dc43b7.js",revision:null},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.488fd63eabf153ff7132.js",revision:null},{url:"/beta/apps/catalog/js/portfolio~31ecd969.8b7cb0d743c8ff406c3a.js",revision:null},{url:"/beta/apps/catalog/js/products~31ecd969.c3a10dd54ca124d304b0.js",revision:null},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.9413e9cc03ad9ce7c366.js",revision:null},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.50588bdda7ee554581d0.js",revision:null},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.af654a0168e37c88ef8d.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.0df4ae11d4ab4f3f05f9.js",revision:null},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.ec7c908b74bb9b53e103.js",revision:null}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
