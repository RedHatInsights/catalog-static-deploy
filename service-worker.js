if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,b,c)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+e.slice(1)};return Promise.all(b.map(e=>{switch(e){case"exports":return s;case"module":return r;default:return a(e)}})).then(a=>{const e=c(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"95218869cef97798ecd9e7f90293cf39"},{url:"/beta/apps/catalog/js/0.e96c7a2d46ad671b3281.js",revision:"9e239bd56f2b10bf8fef6366737e1974"},{url:"/beta/apps/catalog/js/2.dc1d27590fea725f9081.js",revision:"a33b93fc6890e52f23f13c6316a0e414"},{url:"/beta/apps/catalog/js/59.732294db66476c5b127a.js",revision:"062a7bfe2a903cd28a0cc87aa4a25362"},{url:"/beta/apps/catalog/js/App.7c919d0dd73925cd394b.js",revision:"43e49a6af2d8a2db7939b07b6e5ebf9e"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.987b092c856da260c300.js",revision:"837614b3c854b08b9065c549d9427f9b"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.4d7ee870ed6e6ae81eea.js",revision:"d49e1104e4d03ea4a5563fb97b855ce1"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.34540744408cc8263031.js",revision:"a31f6f7dfb36382b58d580dddfa8d98a"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~1601866c.5f824e1d5e2cbec3338f.js",revision:"aa8738b531431a60cd25b72613856437"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.fde7cc7ec0435371f66d.js",revision:"2f58e84930f46d2e1de3b8bef97f4c19"},{url:"/beta/apps/catalog/js/error-page~31ecd969.610a22ac24f01f2ad650.js",revision:"f854358fe7d7b5f7701a054643fa161e"},{url:"/beta/apps/catalog/js/framework~f9ca8911.324752af961b488b56df.js",revision:"c84f9e7bc32ac2c955846e9953e4ba4e"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.6885536dc6d28ad54e18.js",revision:"c5a52e2103bbe2bdac895bdbd4bba381"},{url:"/beta/apps/catalog/js/lib~App~0f485567.d659da42c9bc3e815c4a.js",revision:"3ec7162fb2ea2915b5e5691b9079b4a9"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.16fc3a7e7b132a710a7d.js",revision:"176e6f0e483ae350e46da7150ecda427"},{url:"/beta/apps/catalog/js/lib~App~2539590c.8a2858568fa5de76324f.js",revision:"75e8c406eeb120a154266f8081b85d1b"},{url:"/beta/apps/catalog/js/lib~App~253ae210.f54284c11a9ab3f61474.js",revision:"8c6929bcb40188a7352002b34952484a"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.03d683708a8785e604a5.js",revision:"d049a1c39a30b6f8fb2836ad7a8dccb1"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.27939bec6bb47e905fff.js",revision:"9b0b0313d2d637d8de3bbc9cc810cf9e"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.5f0c36336085b61ec290.js",revision:"4f2c9a11e7e47610d0d37374337dc436"},{url:"/beta/apps/catalog/js/lib~App~6625447d.d19e49db6ab5ccff8f1e.js",revision:"0f3abd34f683dc295a108ce88817371e"},{url:"/beta/apps/catalog/js/lib~App~678f84af.e49a6549f758178f98b3.js",revision:"f2391d65c33127d2934bb0abd1a54396"},{url:"/beta/apps/catalog/js/lib~App~690b702c.066cab4dc1ebd2f75c97.js",revision:"33ef1b2554213520d181dd1827a4b490"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.39fac3ba15ba99110865.js",revision:"df688b9898e09bd98a80b7efe56dc8e6"},{url:"/beta/apps/catalog/js/lib~App~b2e0d743.99b4033752bb98a5bab5.js",revision:"04dc895a7b63193c1fb2e2348cf979cc"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.cf2b36dad47e6d64c13a.js",revision:"ed46e0da0a2be24af552e2cca1b81dcb"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.dffce60569d6e71497f7.js",revision:"13c1f2b82585b958d7d4cd22606a1452"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.f33b3a93837395ca5c02.js",revision:"4ece92975b6e9c7e50f6fd79525b3975"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~77bf5e45.cb3b90492ab620fa6206.js",revision:"378e9e076bff4a47f67288c07009688e"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~a8298385.56d33617a1138e1c934e.js",revision:"cc0d8edf6c1695024d937498e0c33882"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~b09b0461.1acc031fc60e2e9c4b4c.js",revision:"5869bd7c5cfbbaf5187f69ca92f26bbb"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~bc848bd0.babbc4e21883e1243a44.js",revision:"d2109dd8cd15a83abb7b14f824de88e4"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~807bc7cd.c7ebdc16b93145421b16.js",revision:"3a7022f1a3f0d92a5963c3620d11fa4d"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.0494cd1579273978bd16.js",revision:"fe1d948de68cdcb6e32d3c20590eb113"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.7c98ed4787acb7c858bb.js",revision:"ef9eaa1643a01b31d5f261fe34f1ff7f"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.b2a5dd5f3e0698e82f15.js",revision:"d7102ea80ea506abc1a74efe00352fbc"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~c895ce40.4a33aca6c14ef7a2d2aa.js",revision:"51781477b9bf7080350aa36f25050873"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~cf15acf0.34ce78363bbc4bdaaceb.js",revision:"439296654079ecabdd781d069fe89166"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~products~31ecd969.6f28a9ad509d363656dc.js",revision:"b63f7bdf03db3d590cae6ec71bab8bf8"},{url:"/beta/apps/catalog/js/order-details~31ecd969.c041ebbaf53f986cb04e.js",revision:"4a04cc6da099662d4208e8db5d4bc6d1"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.6a585fa14b246e51232d.js",revision:"5caa442d6c926101b1ea5db47f9f42db"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.88b0bf1735795e9d4ea5.js",revision:"015c694be7ce5f8ebeeb910da879c3da"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.dc8bec475b39ac6d76af.js",revision:"f6c701ae2b237191404716267fe0ab9f"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.edb5edc55eeda540ef59.js",revision:"25dff69525757674d1cdbd7a82b036bb"},{url:"/beta/apps/catalog/js/orders~5a358dc8.5490753473a95ac85358.js",revision:"3a3e2ceeb20a8ec20aa75a88de00d499"},{url:"/beta/apps/catalog/js/orders~91f4305a.12f3218e7252f577f614.js",revision:"2d9f88f8d4b21b39e5c0f3cc7ba18467"},{url:"/beta/apps/catalog/js/orders~c895ce40.b95befa66bfdf29bfe3d.js",revision:"d2d6ca67ae7e85a6299a2ab8c90943ff"},{url:"/beta/apps/catalog/js/orders~cf15acf0.249cec411c567d6aebf2.js",revision:"c6d7f9b6380638b0a7e9afdc5b1c776a"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.2b92ead1ad30cb751020.js",revision:"ab9e2599b9d594e218543f64f2dcf819"},{url:"/beta/apps/catalog/js/platform-templates~5a11b65b.680bd86f73cdbbd1987c.js",revision:"92117203a471aaa526269c358116ddfb"},{url:"/beta/apps/catalog/js/platforms~f71cff67.116e13334c1104a14b02.js",revision:"54ccc137970652cebc047a686eccad1f"},{url:"/beta/apps/catalog/js/platform~91f4305a.2c3d6790707493063414.js",revision:"daff627d5fc3abe547bcb0543372b020"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.f23c28ac8770b20797e7.js",revision:"01a599d7f67beebad1c8f2c940917ab2"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.1d9ba852bd496a3bc055.js",revision:"73401f2e519443638b5f9553da54b3c3"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.d2616016fd5873321f3b.js",revision:"f5640bb732b7802ae2071dfc30303726"},{url:"/beta/apps/catalog/js/products~31ecd969.f6874e33185002773a52.js",revision:"4ceb64acf0b98250b90bedb742157fdf"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.a703d53094fbb802320d.js",revision:"44708d0a6d0e95d99b80a580323ccf74"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.976c330dce870b740b3a.js",revision:"d47d35a030eeb89ffe05543690285ab6"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.a5bca0dc93565b4ba998.js",revision:"a159db71b838f364f220156bb1eebf46"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.34a7dd19837bea8a11bb.js",revision:"56956dad2459ae65bed8ab7dfe4a0898"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.671d616adbdf9107d3c4.js",revision:"6d0c09742a7bf7ec36d8d7269b6911aa"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
