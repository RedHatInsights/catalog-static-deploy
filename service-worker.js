if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,b)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return r;default:return a(e)}})).then(a=>{const e=b(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/index.html",revision:"afe308915f542ccbd6e4e79493c68f42"},{url:"/beta/apps/catalog/js/0.4472952836aacf4373c9.js",revision:"bf915f965e6eb6b255c254b3cb384ed5"},{url:"/beta/apps/catalog/js/68.c216ff9867f5ddac2e7e.js",revision:"e06a0b03931d47077ad32c4b2886efe7"},{url:"/beta/apps/catalog/js/7.e23a15e44cae4607eb08.js",revision:"00da4cd06aa1f51838bafab9acbce3f3"},{url:"/beta/apps/catalog/js/9.9fa152efce0d4e3a5aa3.js",revision:"2a4f6f98d49ec562800158b2407de7c1"},{url:"/beta/apps/catalog/js/App.cfe76851bdaf8e0fb71b.js",revision:"c9295cf44c9b2c54a38f2dd8a3fdb2eb"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.0dc2bf901d4ba27c7d16.js",revision:"b75d3bb7368f4ded6a53335795d0c306"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.51b1c50e009efda71a2a.js",revision:"bd4b5c8def1a935e8a95f7538e3f4b2d"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.8afb0c217ea350e0dee8.js",revision:"584b9da6903a9ca3402f44396a29a186"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~6f498858.cf1b08f2ac1fe4464d21.js",revision:"b1ac2356c9294cc1db60052da1ef2991"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.29902d2f86c1b1ee4ea4.js",revision:"7ba872343bda055ee588d49f9cfbb1d7"},{url:"/beta/apps/catalog/js/error-page~31ecd969.b3f639b4bf5f0af9a840.js",revision:"cf6d33cb0d49c23f34f6acaeea58710c"},{url:"/beta/apps/catalog/js/framework~f9ca8911.78ea57d8807bb0408a8f.js",revision:"e212e7855e8091f66c4229d50d043911"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.8d79bb04a3aeec92b169.js",revision:"e40da69523c0a538502c202dc03c15fe"},{url:"/beta/apps/catalog/js/lib~App~0f485567.d24bfe84428ea9ad26f2.js",revision:"2c0628bd2a83cef012c8fce96433f709"},{url:"/beta/apps/catalog/js/lib~App~253ae210.49c1e1499ce270aaccee.js",revision:"15ae5e1c31d79c693a10bb1147b637c0"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.aa4337a718309b1d3ec2.js",revision:"12d23c7831856fd00eb501dfaded1765"},{url:"/beta/apps/catalog/js/lib~App~43bb34aa.d593292d9745e32974cf.js",revision:"3e2f2b7fd9e51f0831e85ca8ee310118"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.e3ad478bd8e38e1cc88c.js",revision:"9eea325a7714ee580502c4aca9d64bba"},{url:"/beta/apps/catalog/js/lib~App~50314d7e.6d210bd16c78cf4ab99a.js",revision:"fdcd9e121eefcca5a8dc97369f208a17"},{url:"/beta/apps/catalog/js/lib~App~56d643cd.5572c25615c8fdd31d61.js",revision:"b649bf4d2ff05c372a7d0d42881f7dec"},{url:"/beta/apps/catalog/js/lib~App~5a358dc8.19afd8f9e19b2eff4294.js",revision:"2c1be3f526d4155dd9fe48f7eb226dca"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.cb625037082df0778f08.js",revision:"1ea9dbe4466f5165f06f995a78e6e5a0"},{url:"/beta/apps/catalog/js/lib~App~678f84af.b83396dc77c4bbab7749.js",revision:"5cb5b3d8766d5d47c2ab41652958a856"},{url:"/beta/apps/catalog/js/lib~App~690b702c.3c94aa5e02d92f2a1539.js",revision:"32dffd6a438cf5cf094306b36e696c3b"},{url:"/beta/apps/catalog/js/lib~App~8ac75459.af15aa2a827c65a183aa.js",revision:"a515eef6abd69e22cc27fe13924b2f38"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.cd9f35c07b2a38564971.js",revision:"a11c676121c3743f75e0d5ec3b4a44ff"},{url:"/beta/apps/catalog/js/lib~App~a0377823.2c536f7f82f8a744c40f.js",revision:"89c58b2ed1769082091684b962fce7f7"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.54e0efd48d08b3f66b1f.js",revision:"17761f83c32bc5664c86924318ed3891"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.96257d42ba60f201cdb7.js",revision:"43302587fece9ada655efabc3869baec"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~2930ad93.905a2b34e2d70d21ec2a.js",revision:"bc72b458f3eaf3ac294e75a6be267bd3"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~763301a3.e8b2a25db16ba4baa459.js",revision:"3f2def501d14a38b4595de41f1e66975"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~8c657992.fe82df1f7ba64773a2fc.js",revision:"1ca844f5bb26a68b90621f90c0afc6f5"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~order-provision~orders~platform-inventories~portfolios~b3141737.b5da98c09a39ceb5e430.js",revision:"d68fc74974931cb1ef53f23118fbe1a2"},{url:"/beta/apps/catalog/js/lib~approval-request~order-provision~portfolio-item-detail~e2647e31.b1351828735ac26073f5.js",revision:"dc45176e7dc88c6e030377f52dc071fa"},{url:"/beta/apps/catalog/js/lib~order-details~order-lifecycle~order-provision~service-offering-detail~4bec7f87.3214e7efee58bb393f55.js",revision:"0e4c89160a242184e82c3b4f0fb55b4f"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.096912499eebc3354bc2.js",revision:"3c50f3c2802824b84d68b294bd8382df"},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~portfolios~products~31ecd969.c3456e4ae4525af94e14.js",revision:"8fe972b19590b09efb4112c6986aaca9"},{url:"/beta/apps/catalog/js/lib~order-detail~orders~platform~platforms~portfolio~products~31ecd969.d7c3c7eb42d8768112cb.js",revision:"3c9dcae902a8172076a6534555306639"},{url:"/beta/apps/catalog/js/lib~platform~portfolio~31ecd969.72b4048d4255f3d1849d.js",revision:"1806abab06a6b67e6c6d97b4f12d0d2a"},{url:"/beta/apps/catalog/js/order-details~31ecd969.af52dc2277d9e3b4ca50.js",revision:"d685e45e9481eedd24d8263e773b009b"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.6b3970679e88089e0cbe.js",revision:"2613c5367a7ca7a15a8374b04fda3f4f"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.aeb199d584188bc6d172.js",revision:"eaa0aa2c4a137103093f82410b515c04"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.6b4761004b92c1a177e2.js",revision:"1b48d4b95b3b027987ed2b7b9287800b"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.13ddc50d95ca3e01bc60.js",revision:"7219693ed71aad353b637920f08b5581"},{url:"/beta/apps/catalog/js/order-processes~43bb34aa.d5cef8229055db70b625.js",revision:"18e35b5f7068b8f9890a1cf077710cb2"},{url:"/beta/apps/catalog/js/order-processes~5a11b65b.2f16d68fd07a0bf16e93.js",revision:"aa4a80c163e00bda0da007c18c50976f"},{url:"/beta/apps/catalog/js/order-processes~b3141737.53192a53732bfaefc172.js",revision:"3e555e9656cbcba8c60f3ac3461c6395"},{url:"/beta/apps/catalog/js/order-provision~31ecd969.14dca4bfbb5de3024878.js",revision:"494143b92192801598f64d748cd71c84"},{url:"/beta/apps/catalog/js/orders~253ae210.21b4eec4001f7765d01e.js",revision:"5a4729c4e39a84a2220937b07ebf7787"},{url:"/beta/apps/catalog/js/orders~43bb34aa.c275b60323f8788a73de.js",revision:"9bb20c0440284288fdf82ec187ae6b64"},{url:"/beta/apps/catalog/js/orders~91f4305a.a7c80acca129dbc95840.js",revision:"c3eea559e340f5dbd0cb2de261eaf65e"},{url:"/beta/apps/catalog/js/orders~b3141737.d85709c777dca9f1bacb.js",revision:"2aa3c05ce2ff8272947c12f97c3d0967"},{url:"/beta/apps/catalog/js/platform-details~31ecd969.4506279d4478e652041d.js",revision:"f63c619448d5458e405955f7c626d592"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.59144edbc8fc125fc31e.js",revision:"477164e3752e1e5b14afe4ff51399be2"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.4d2bea7eb794322f9d73.js",revision:"8f56b75d3dbdc422d014192482000a5d"},{url:"/beta/apps/catalog/js/platforms~31ecd969.48e2db3fb49b3df1c8a8.js",revision:"593454cb2d807a602ed2b4d4f8a1a925"},{url:"/beta/apps/catalog/js/platform~31ecd969.d9bc512e80f50bece309.js",revision:"62116cb7470a698c6c0abaf842de10a3"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.02c30ac408e3212b5942.js",revision:"00ef505066e2e9101e6c5cbf38a7778f"},{url:"/beta/apps/catalog/js/portfolios~253ae210.fcc21d07b0ee52cda7de.js",revision:"41ec785ea0c0ba47a69c93cee87d2956"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.240c412723949b04da8d.js",revision:"5520552af0d01de7f83d2f82fe6f9843"},{url:"/beta/apps/catalog/js/portfolios~43bb34aa.df0ed174b2cff9e138b2.js",revision:"6db8d993b970b9bd67d663c55d8ad5af"},{url:"/beta/apps/catalog/js/portfolios~b3141737.8edc1d83325b8fd07429.js",revision:"5f7318d838c84e02c2c29b1ec6294230"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.184acaf870494fcc1a48.js",revision:"796d17c84f56c49f3561ca7ccdc7e737"},{url:"/beta/apps/catalog/js/products~31ecd969.11a45f2df6199384765e.js",revision:"56e764e4eb80436e311db891f9d4816e"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.e5a0dcdd5156d66eb9de.js",revision:"92c26e0009946196ccc31b1643525dce"},{url:"/beta/apps/catalog/js/service-offering-detail~31ecd969.eb6f8e4c45dc8bd68085.js",revision:"cf5ffa45fc9505385212d08aae9191a9"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.c930165966381968c88d.js",revision:"1c30ecfa4484702d99e08fb191e7a7e5"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.e148c7951328621471c2.js",revision:"0268cb5f99a0abb085783de16a46ed3a"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.9019252dad8fdb379485.js",revision:"86a17b8e2e0f2d037749950db3012d9e"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
