if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,r)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const b={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return b;default:return a(e)}})).then(a=>{const e=r(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"036b854010487af93aa1e193af090efa"},{url:"/beta/apps/catalog/js/0.7486f26d4b553cecffad.js",revision:"ae6b688a7508914532c15bbf00582839"},{url:"/beta/apps/catalog/js/2.36f7feccf0b31b9de80b.js",revision:"77cc4b75d482bfec1dcdcab117bc45b9"},{url:"/beta/apps/catalog/js/69.55f0612ed876ad9f94f7.js",revision:"323367cb876f37ba95a0ac2323ba7c87"},{url:"/beta/apps/catalog/js/7.9da4ff13394fe3bf3580.js",revision:"f5ddde1118bf99febc60f3e714b5830e"},{url:"/beta/apps/catalog/js/App.5b1b2f5c638365f5e49d.js",revision:"340ebd1973ecbd2e2de5d79742c30b63"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.401a1a03370f60a14c0c.js",revision:"b7a632196b092ea95eb059752043175e"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.9a4066a18947d0ba874b.js",revision:"522ee95a0ff391a43cd22f0559ac81f5"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.b475ce8849d7a06ba40e.js",revision:"75e0023cac9563232bd8f1ffbbee5148"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.05c740556623c5f91ddf.js",revision:"a763e934f293843871ff26f418dc5345"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.75ec0c13634964e66541.js",revision:"0033a078daf21a10c22cb397b600ac50"},{url:"/beta/apps/catalog/js/error-page~31ecd969.779722459ae68a6fabf5.js",revision:"7b47f7882360f4dfc19c818ed5f60bd3"},{url:"/beta/apps/catalog/js/framework~f9ca8911.999e6bf93361516af1c6.js",revision:"752797f88a7e76fb3b76d3b7ab5b371e"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.e35b419055d0e63ed4f8.js",revision:"41c328ea304262c93dbd873fd86f2273"},{url:"/beta/apps/catalog/js/lib~App~0f485567.6381efa71ae702ed26cb.js",revision:"a99d328a573a4202ce2eeed03be36389"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.7cc2dc2360eff1c2a60c.js",revision:"a9b5c501ac4bf51b3c5fb3269d8e3c47"},{url:"/beta/apps/catalog/js/lib~App~253ae210.07b38a65a0ed0eb206e0.js",revision:"2facacc9990415d8ec6b57b2cb5e899a"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.c10f6f68f814e7380ddc.js",revision:"c459d7985e1829283f2cf3ce05436ac7"},{url:"/beta/apps/catalog/js/lib~App~2f284f0b.86881a3e1c2966d1c8ea.js",revision:"2ba37b88a5b4515715f55914ea7ce278"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.0c0918959ddf071906d3.js",revision:"eba38a4bc832c2c80595065df93092bd"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.02d8df0037a6a7995618.js",revision:"ffc48662e639f17358a88f4b74f699ee"},{url:"/beta/apps/catalog/js/lib~App~50314d7e.5d7b80ac7149c2070b1f.js",revision:"30c86227df0493ff8d1699364659e7e9"},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.57053904c754082cd61f.js",revision:"d1a6f4429ee881e1ca7c19ef19bbb501"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.5834a8be161a1edace34.js",revision:"337bf709bc36690de41184925857bcf0"},{url:"/beta/apps/catalog/js/lib~App~6625447d.d6921c7fa82a3bc8bb0d.js",revision:"104ee9971fccfb5ba0e8e7fdb96fb69d"},{url:"/beta/apps/catalog/js/lib~App~678f84af.0832bfdc27c9982636d8.js",revision:"7226411fbda66900ef4b72be9203b0f8"},{url:"/beta/apps/catalog/js/lib~App~690b702c.e831bfa474fdf3cd5f67.js",revision:"92d6e56be1057b377d8b2d3eec03c80f"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.de856d64a1380628d889.js",revision:"505c06c1869d02399f1d0c820dcc9fc4"},{url:"/beta/apps/catalog/js/lib~App~b3141737.d84863c7d70e411a361c.js",revision:"7a4f922c4bf4b3308d3fec84a48bc5ee"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.a250cd9758904f7bca90.js",revision:"a9dd5d1c111384e521cd8d4af21ac857"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.9aa0825d6ddb7387dc22.js",revision:"861f29023045a014a48813302b70ea75"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~2930ad93.4933ef02e318c293078a.js",revision:"ff5b523470c1dc0be773c1d46c137301"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~7293ddd8.909abb3018494eb10075.js",revision:"fe69b5d6d0161c8493a3f63d77f3fe1e"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~b0d0e706.96ccba3826f5587a460f.js",revision:"c89e71518635420f487e48e190a9f1ea"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~b3141737.b2944a0c0a5d47054592.js",revision:"6e8de199939b7571d1b6eefbe81ec2da"},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.27310d7edfd543e071d6.js",revision:"966f64e906a1b4b9b58013599c0450bb"},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.def821ada1f8c187fad1.js",revision:"b50cb860d18debb906e947be37414c0e"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.0a8190178b5e3dd89257.js",revision:"e0d194e0b393cbacd3072558878dc6d1"},{url:"/beta/apps/catalog/js/lib~order-detail~platform~portfolio~31ecd969.62c1c1fd8c095796be5f.js",revision:"9af7863f0928f785c847f9908700492f"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.d2414fc173e712665c9e.js",revision:"7abde6d750869df043ec10440b5e38a8"},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.3c793461c4ccbe881d22.js",revision:"a5205b5c65b7f53d13713cadd873e249"},{url:"/beta/apps/catalog/js/order-details~31ecd969.69a0420afe47f1aed4f9.js",revision:"3f69e4447e0256f797cf3e22d7232c7e"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.8867cb494174899f0074.js",revision:"c0dd90e934235965016f7aef3765e0b6"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.d264f38d66564b290e1d.js",revision:"3093a868010573f78efd3b03ab220159"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.2a87d52c5120a7aa9dc0.js",revision:"9d9a675a64f6839ca9b8b1d7c6f39cf8"},{url:"/beta/apps/catalog/js/order-processes~0f485567.e9b4bac2953b7984891a.js",revision:"16d41e9b3e904f1e4f78ac7d703117e9"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.7895dc7d1a523c5c2e8c.js",revision:"290424657988f8733f5f6f113a13ef3d"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.327f397dfc6727af40fa.js",revision:"7ac516670decb92c4de7ff01a7f1ad1c"},{url:"/beta/apps/catalog/js/order-processes~bc848bd0.13600c40370d32667b28.js",revision:"b1f8d2c6cf518e30b8f08e22e4b916ff"},{url:"/beta/apps/catalog/js/order-provision~31ecd969.20782809261d6f7b5d59.js",revision:"8ef50c66e07509a52d9c3220364897e9"},{url:"/beta/apps/catalog/js/orders~50314d7e.c36f66a395f02dd9cd4d.js",revision:"b5fd391b9596f3700349659f63d3d634"},{url:"/beta/apps/catalog/js/orders~91f4305a.a06f4ff710172d35cf1d.js",revision:"6ae8c1942eceb1ff09f08306fff76070"},{url:"/beta/apps/catalog/js/orders~bc848bd0.62ae6b83e4d106857527.js",revision:"29f5b8a21e1bee0228f099c7e16b7cac"},{url:"/beta/apps/catalog/js/orders~c895ce40.3f1a5ec3b715718ae433.js",revision:"6df8391c641cbbf6efda53daddb0a43b"},{url:"/beta/apps/catalog/js/orders~cf15acf0.85d78c8c3272b3ab5ea1.js",revision:"fbbbebd0f86984e0034c3f0f019cc1cb"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.8f7181ffa612e225fdee.js",revision:"f975c202298b977e45d75a750df8220d"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.1243cc84b92bb39b2235.js",revision:"373f96eccfcd1e94393f5cb9e1d6967c"},{url:"/beta/apps/catalog/js/platforms~31ecd969.ab551cd5a7748e9305bd.js",revision:"e3249a44e041e922089ac9a723ebf881"},{url:"/beta/apps/catalog/js/platform~ea1f58e8.2e9a580a2d57713681d0.js",revision:"828c9df622b9561b5b65c60e04866794"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.99c9b18e6fc33d48a1f5.js",revision:"d80b329da99f0321d80d8cde101ffd36"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.cb5932f28d715ccfd960.js",revision:"3ea8547ba6ade3d76eabb63d0c3dc94d"},{url:"/beta/apps/catalog/js/portfolios~bc848bd0.c9ea7184ac09ee1ab1be.js",revision:"89d2bbb5160b8613a1e22699dd953bbb"},{url:"/beta/apps/catalog/js/portfolios~c895ce40.af7ef3fd3645aa227685.js",revision:"6061ed5df140a5b1301098adeadb3ce4"},{url:"/beta/apps/catalog/js/portfolios~cf15acf0.0183b5458122a3be694a.js",revision:"c06229a2f561e579a26d40436b4985f3"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.6b1f1cb817647ccf6a4d.js",revision:"6168a0e9741bc3f7257df34b20e042c8"},{url:"/beta/apps/catalog/js/products~31ecd969.9353f9681eb833ac0777.js",revision:"6a93d7c4c8581d37988d137709d68fed"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.0be1f4ad607c3edfc4d6.js",revision:"7d6bd1bb34508d48ebd7a9dc42af805f"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.6ac10c91ecc512d37253.js",revision:"1822a706f505579f487f9612dc77a9d6"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.7646e634ae75f928688c.js",revision:"a2ac07ec770257c0dda538d8d9926883"},{url:"/beta/apps/catalog/js/survey-editor~0f485567.483cb928cedf25091f8c.js",revision:"c002a76e4f61cde419e99464673aa454"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.1974283649a4181084e5.js",revision:"53d50fb0542834c079d66cff7bac37ea"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
