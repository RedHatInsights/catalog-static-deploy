if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return o[a]||(e=new Promise(async e=>{if("document"in self){const o=document.createElement("script");o.src=a,document.head.appendChild(o),o.onload=e}else importScripts(a),e()})),e.then(()=>{if(!o[a])throw new Error(`Module ${a} didn’t register its module`);return o[a]})},e=(e,o)=>{Promise.all(e.map(a)).then(a=>o(1===a.length?a[0]:a))},o={require:Promise.resolve(e)};self.define=(e,s,c)=>{o[e]||(o[e]=Promise.resolve().then(()=>{let o={};const d={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return o;case"module":return d;default:return a(e)}})).then(a=>{const e=c(...a);return o.default||(o.default=e),o})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"2c693ecfb6328dcfb5560959ce70909d"},{url:"/beta/apps/catalog/js/0.8e4c57e47806095eda54.js",revision:"2df0be9aaf2298433799f2a55319a3cd"},{url:"/beta/apps/catalog/js/54.840b0f3af529851ab8cb.js",revision:"19019cd021d7e44f36ac1ca7fad60342"},{url:"/beta/apps/catalog/js/7.75fdffa7302b9bdfde10.js",revision:"d2b39a94c0b4bf855c1f1144d15f3ebc"},{url:"/beta/apps/catalog/js/App.681e964a3148c2e44874.js",revision:"a70ba6836e99572f656e99b4c0b8110b"},{url:"/beta/apps/catalog/js/add-portfolio~31ecd969.bc79ea770be728c34f43.js",revision:"17ef87d600d141bf794d42b178adf5ad"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.c7e437fec23e471fcef2.js",revision:"9d2ec8a65a1395cfcd262b5c2bd278ad"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.ecf48234403d211d3a3c.js",revision:"787d2a91978fda4de58b4ea175750948"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~31ecd969.6cd2afeb7cccb0357873.js",revision:"13c600a925263af21fd222261401cd63"},{url:"/beta/apps/catalog/js/edit-approval-workflow~31ecd969.1b7cf78f30ad21d17b0e.js",revision:"897c24dd2f326b58a5d4ff5a4bfafcc5"},{url:"/beta/apps/catalog/js/error-page~31ecd969.491d0d060ada261776c5.js",revision:"1485a43b5b00f8b7eb87b4dc58f7d9be"},{url:"/beta/apps/catalog/js/framework~f9ca8911.67d1e2b6db120cea9e45.js",revision:"777cb1026b57894692379c590d1554dc"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.d244d5c2d4d8407413f1.js",revision:"e7e8c5ecab58ca9aa8625d13312d3a41"},{url:"/beta/apps/catalog/js/lib~App~0f485567.ab4035f35906cec07328.js",revision:"3fe4bc3b086afc1b679924d8010090e1"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.cb8076a163b45f8b7207.js",revision:"acb6fa4a87de653f1b371826539bcf48"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.c1be9b887bf386131eda.js",revision:"008ad289e57532395344f38fd8c3040e"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.62b149f0aa4f8fbd8ea7.js",revision:"a3deb14c9b7728d0b1291a972f7b4300"},{url:"/beta/apps/catalog/js/lib~App~545c15e3.0b4e7030c81b1532fcd8.js",revision:"e2986b0773a2976190952abda1e7416b"},{url:"/beta/apps/catalog/js/lib~App~6353c401.30c201e8018304883231.js",revision:"f501ade7d4d4d3f626a1dc261865c49d"},{url:"/beta/apps/catalog/js/lib~App~678f84af.6973c26dc952a48cb97e.js",revision:"8039d70e54c6f1ab0e1d8394f668e17c"},{url:"/beta/apps/catalog/js/lib~App~690b702c.eb1455100b167cdf8be2.js",revision:"05e519a0761f7e3044598777f736edd8"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.0bde7f82116020a0034b.js",revision:"f9c57831baacc11c3330fc504da2d8a2"},{url:"/beta/apps/catalog/js/lib~App~c0a32c9f.d9443fd6ea7b9d4f43a5.js",revision:"15af9f4449ae011b782278443369f754"},{url:"/beta/apps/catalog/js/lib~App~c6d1b060.d61c55d1d6d50ed4d0de.js",revision:"e50036361a4bf48e789fd38d28494b0a"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.9105d4e96d79c3c1e2a2.js",revision:"5bf3499254962f05800e8277dffe891b"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.9eef1f8c0bb4bff792d8.js",revision:"41fcaf6b8cd7f0ce7d78f34a5225989a"},{url:"/beta/apps/catalog/js/lib~App~f9ca8911.55c28520a1a853d2b874.js",revision:"f254d92eb43f06e0a3f689cb0f37efa4"},{url:"/beta/apps/catalog/js/lib~add-portfolio~add-products-to-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-m~0629c9d2.87b1af1e7e09f12fddda.js",revision:"6560c55a7019c4711898731a44a61d36"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-detail~order-modal~portfoli~5b362261.12a0113256ecbcf598de.js",revision:"022748eadb173a43684a32426572f421"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-modal~portfolio-item-detail~55ab1030.1fbb415125681bce9a7a.js",revision:"3eddbc409911de114fd9706eac479013"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~portfolio~portfolios~products~remove-portfolio~share-por~a2fe5007.c918a0a9a18fb18a3eab.js",revision:"9c067213ab815f0770b3eb734c52e6f2"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.f2d012192044bd072ecf.js",revision:"26b2772d3c85316a8976ef453d536cc7"},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.fda5241ad65f7f8d1fff.js",revision:"2a02f3b2e5362d61feaa6d380a66f210"},{url:"/beta/apps/catalog/js/lib~orders~platform-inventories~31ecd969.89408c0df7d2cf3d5e72.js",revision:"743b6556d4c0adfb55c6ce9e6a8d1e80"},{url:"/beta/apps/catalog/js/lib~orders~platform-inventories~77bf5e45.a7bd839f4392fd364c07.js",revision:"4376e490fd12e7e0c47a0eb4a0e59228"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~portfolios~products~31ecd969.f1c1ada2aaaa3cadb163.js",revision:"7118ac1a2b4eb9345b2052627d13ca1d"},{url:"/beta/apps/catalog/js/order-details~31ecd969.23b3c889c6c4f7d5ea28.js",revision:"6e8b9f82927a777eeb8b4ef58a00b009"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.22090ee9e43b107450cd.js",revision:"83e168bb2550cb0cf7153f71bc7be6ef"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.821c3e4aa82b2502a778.js",revision:"dd4dfb81ac7d5624161fba1f69132872"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.29a17bbaee68b573d503.js",revision:"12bc0d386d0a7a65b4254974602527a0"},{url:"/beta/apps/catalog/js/orders~91f4305a.9f3b42639cf49f8535cc.js",revision:"f738f4581a762620c3367a32fd744d86"},{url:"/beta/apps/catalog/js/orders~c895ce40.fe8ba94850b192a48b7f.js",revision:"877c9ed7f99ee2dba102d987020b2307"},{url:"/beta/apps/catalog/js/orders~cf15acf0.b62c32b507992f0ec97a.js",revision:"9358bd7ad51ec602689f3bce397a41aa"},{url:"/beta/apps/catalog/js/platform-inventories~3d9b8e9e.01876844cae1586144b3.js",revision:"4eb8397e990a60d5a0ef947a03abb850"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.bf3f76d801b29a9d63b7.js",revision:"bf0d127f58aee2e379e93a23105b82d4"},{url:"/beta/apps/catalog/js/platforms~31ecd969.dc01bb1f433534df480f.js",revision:"17136bc624522507c96e4257cd310612"},{url:"/beta/apps/catalog/js/platform~91f4305a.ceeffce3745f224239df.js",revision:"e56cda3d7d6f6bb9e79f852b656661cd"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.01a3857531699e902c65.js",revision:"c3da2728ed39c70893b1a0a06db542a1"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.dae423fb475e01f4bc08.js",revision:"95e89d02550125e47720a0b8efd3f04a"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.873598c5ec667b0e502a.js",revision:"8e4113b4a168557ce9ad99651971baa7"},{url:"/beta/apps/catalog/js/products~31ecd969.57bd6149fa42d3270ef1.js",revision:"1fa68f31c52a10106ab49a5b3d1a3add"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.d6d471011f64a3332fca.js",revision:"ed9f013e764d39759497807d0c52879d"},{url:"/beta/apps/catalog/js/service-offering-detail~3d9b8e9e.1bd6e3d359a455ebde09.js",revision:"1b206d7e43e39154723b15d6963cce5e"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.ad855cf55788f905c8d3.js",revision:"7bb502744dd42edb62df17c268f6706c"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.133d8c4f8bc25bfe0f6d.js",revision:"2757c372fcece20a0f45b799c4d7abd4"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.9f888854f51547584e87.js",revision:"9131526999e96612f7556d67d27cfbf1"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
