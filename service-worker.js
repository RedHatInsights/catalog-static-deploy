if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return o;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"7cc306608005afe0010239ef82d27cc1"},{url:"/beta/apps/catalog/js/0.3ce20386c6516277f1cb.js",revision:"a39fad3ccf74c8855fe1d6e10af466f6"},{url:"/beta/apps/catalog/js/64.52afef0585d03314c18a.js",revision:"b366ff5e3d6c8f461ab75b7d7ba26b96"},{url:"/beta/apps/catalog/js/7.60b2863a9974e225f240.js",revision:"29648d9ca143b9524e76a73f415a6d57"},{url:"/beta/apps/catalog/js/App.666e8d34c66a88f45e21.js",revision:"f3319504d1656192a5aa003a486f78e1"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.a816a0e968628770aeca.js",revision:"6f24057dd3393d823bc2c5c1d6b822b2"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.264001e7b6d5ea48c76b.js",revision:"8fbccee2c4e5b39bb8b5d64eb06e1cf1"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.cddcb9940334194d2b7a.js",revision:"af1205241352227de671e21e0ca49d8a"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~1601866c.aeee7162fead62f3a364.js",revision:"3b28ebf8e3f1db87ca03e3c4aa30a8da"},{url:"/beta/apps/catalog/js/edit-approval-workflow~31ecd969.623757d38f7ae7a80612.js",revision:"8e738b2d3a3dd227411ce0fd8e146c75"},{url:"/beta/apps/catalog/js/error-page~31ecd969.90cf4cf54b46a3ca5028.js",revision:"2a0a1bde7063a2e637335c23875ca722"},{url:"/beta/apps/catalog/js/framework~f9ca8911.b89f15f93d43d6396c42.js",revision:"e0afe10876a01209d85bffeefc0deb44"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.01cd652fdb2b78618f55.js",revision:"818c80e204c14b7b1bc647e9de92a64a"},{url:"/beta/apps/catalog/js/lib~App~0f485567.7091a274230b0b7e695f.js",revision:"11dd8ec156bd079947df4517537508aa"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.2cc61e81ac72bbc58163.js",revision:"17e739a3579cac501dd7497a3b690c0b"},{url:"/beta/apps/catalog/js/lib~App~2539590c.dc88127ba51e71374c3c.js",revision:"4a196c476ff61e75d4a76f21993cfe4a"},{url:"/beta/apps/catalog/js/lib~App~253ae210.d3db01a65c4fbfaa9d7e.js",revision:"783a960c2816e46f95d16bd3144836fb"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.b0a6abb85701c4904e6b.js",revision:"d4eb2186ce2f80f85bf6bb9560a4c0dc"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.dee1faaa3b93abe6813e.js",revision:"7fb880cf03a77f36f136fc683db757aa"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.2e223c146d9f21aa8dc6.js",revision:"f3b973610e20cd36818eea2752f16643"},{url:"/beta/apps/catalog/js/lib~App~6625447d.6494c5f40589b5b4b2e0.js",revision:"18b6eb2f67e720ba5e62842656f048b9"},{url:"/beta/apps/catalog/js/lib~App~678f84af.ff63bbb96a4dc290f3b3.js",revision:"2c3c9c1645308e684d6325c0e216c070"},{url:"/beta/apps/catalog/js/lib~App~690b702c.a73147a5938219176df4.js",revision:"3729603109de7c19e05e2e4fdf7a5e34"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.1f10b24eb14c986fb3a8.js",revision:"1e1f1c273d5fa6c9897545c5e36f88d6"},{url:"/beta/apps/catalog/js/lib~App~b2e0d743.2946e6be026c42c49e2d.js",revision:"a81195f387b7b88687c851368d80de4f"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.bb6e55d08df5af133410.js",revision:"94f5fd98c1500a5c1e269a654a7ffbeb"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.23d8c79e8bb8c7059fa8.js",revision:"aa2d83c57011f13e1e4bff8c518a6c0b"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.44ca31397b96b9b78cd2.js",revision:"0b65bd00d473772fe66251003f89960a"},{url:"/beta/apps/catalog/js/lib~App~f373cf78.bfe0f97623bf19f233eb.js",revision:"e59ad95db9e7dfbd1f3995f9d6c88ddf"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.4dd17b4b1a66fbd8088b.js",revision:"dd9064acfb494435496d3e76f693371e"},{url:"/beta/apps/catalog/js/lib~add-portfolio~approval-request~copy-portfolio-item-modal~253ae210.adec340c62c30960a047.js",revision:"81314fd7d357b73e0d34d5f99b75bfc1"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~76d93fce.9f079b6852142062b9d6.js",revision:"6f9d5dcad250bebb6d0605135120cfaf"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~77bf5e45.bf33293a71b356d9cda1.js",revision:"048c8419e16a3cd2221851ba2df9c350"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~b09b0461.020a48c095996f40d497.js",revision:"18aad7cfcdd7c6f662a5740a96111037"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cbe9451d.bb0338d9f72a407a089a.js",revision:"ab7cefc5b582527e71d79d1e68ce7344"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~807bc7cd.ec7f7eb60b1d5d267163.js",revision:"00647d7f56bab37b1eea50dfff1569af"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.4a6c3e127dc6b532d316.js",revision:"633b9dddd1a954999a5433f9232b53c3"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.e00797a376218dbaea37.js",revision:"042a30e5dd3a6ff587a216cc3c921471"},{url:"/beta/apps/catalog/js/lib~order-detail~portfolios~c84bddb0.4cc1b594af148f17ad46.js",revision:"51cbf1e9c7b2144eb2efcc47a7018e04"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.98f3945e1a12a2a5697b.js",revision:"e5d5fd1045fe4fb05eaa1b8c24538387"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~31ecd969.f0737322e18c74f9272a.js",revision:"7c909a5a270dd45fc8c188f1e11b2dd7"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~807bc7cd.9a33af5aece5d01744c3.js",revision:"ee21eb8781ee4657cd07935a4a171b43"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~b3141737.86381e71b1388ee47a85.js",revision:"39c7e619317710f32cde86865e9d9ee0"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~products~31ecd969.0eef1e5efb2354ce224b.js",revision:"76d72974cbc2089e0e0f364fc38ad333"},{url:"/beta/apps/catalog/js/order-details~31ecd969.b19bb62a3568fed37b2f.js",revision:"f923e7000fe835efcdc6279d9241486b"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.4e4218dbddc19c1c0b71.js",revision:"cf20f78dc4652d4b2b2b600fc9eafca5"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.4417c2191a70111fc5a7.js",revision:"762fb18ad4a1d029fb305178e119d89e"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.0b9a185b1bc007ff8c7b.js",revision:"289a3318476dd9e5529ea29ecbe4344b"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.6f3808e8c3904a8ed8c3.js",revision:"8487b2024b7c3da774e54356be71e564"},{url:"/beta/apps/catalog/js/orders~0f485567.0c5b8d848f665e960220.js",revision:"973769d905017f52f8a877de4138da22"},{url:"/beta/apps/catalog/js/orders~763301a3.600851c3c2ff0e987c60.js",revision:"419e25510077f52a8cfc55396bfc757b"},{url:"/beta/apps/catalog/js/orders~91f4305a.2c73f5c3e2a411b9a587.js",revision:"bde9ea133d06038eb93f09e7619e8a86"},{url:"/beta/apps/catalog/js/orders~c895ce40.98ac1d58dc7679701df3.js",revision:"92ee477a26dfb53d6c6c1dd48c6c19d4"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.b94857ce29a9ad412fb3.js",revision:"713213ed5dfc98390ce3505b10c01710"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.7cc3bb4bd5c885b8960e.js",revision:"25c45d18743b62c7a0d026c55f40488d"},{url:"/beta/apps/catalog/js/platforms~31ecd969.4c0227805c919b717d27.js",revision:"f4ca781d1c03069a655408fb0c722c95"},{url:"/beta/apps/catalog/js/platform~31ecd969.44fb92543c79572d1f6b.js",revision:"8ea95084e20cc8bea4715f1cab1d9a29"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.c8bdee0b871b0ca64c72.js",revision:"1c798fd37e8a116655156de42a7cba86"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.0b5c62bb91bc82b9151d.js",revision:"c395cb3bf279ec47085f48520c877416"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.90536b37bd30d5e0ed15.js",revision:"633cc8920c6256cf4926c1b0fbd90f1c"},{url:"/beta/apps/catalog/js/products~31ecd969.8810f409cd12894ef0d5.js",revision:"a86ee71b8f95efbb79034f27f4c6f592"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.a52f8eb99783d92f5af9.js",revision:"5033dd09fd98fefa9e202c493be07d53"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.5392a364dac389e759e6.js",revision:"901064665e8e807e526495ad38c71098"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.66be01556c2ba8bfe1a4.js",revision:"dc738abd11fbe272ccb4e7290b6609f2"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.266abbb849d5385ae181.js",revision:"a324f8d0da105aed47272e1a1d86e1ed"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.31cfdd6340109cfe7c7b.js",revision:"043f027f2efda08a04fe9ae2e851f447"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
