if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,o)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const b={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return b;default:return a(e)}})).then(a=>{const e=o(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"8842a0d3f1d77f7da79b068d280b3776"},{url:"/beta/apps/catalog/js/0.b89cc3d8e169d5efd9d6.js",revision:"bd3d3a1ac65338889d1563458c7c4d49"},{url:"/beta/apps/catalog/js/53.22aad372d261f3cd47b0.js",revision:"9ba928ef257bc9fa1f314afb5393bf9a"},{url:"/beta/apps/catalog/js/6.acdfe7a60f0ee37dc8c8.js",revision:"04da5a27f1366a357aa76ad250eaf684"},{url:"/beta/apps/catalog/js/App.accd13b703357596fee0.js",revision:"cf577e7ce5a62e2afe506272ed649c42"},{url:"/beta/apps/catalog/js/add-portfolio~31ecd969.1f2241342b9a829870f0.js",revision:"bf4067e45017110788d692772fafef15"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.4e8802032cb1f4e39f15.js",revision:"3e00fb0b44dc9b431f06b1a4b8a165fc"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.303b81ed4270090842d7.js",revision:"922a004463fbdb67434d7968b3b8d618"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~31ecd969.c58a4644ed8789e1afc6.js",revision:"3686f6f7bb1d9f48a644f115a78bac5d"},{url:"/beta/apps/catalog/js/edit-approval-workflow~31ecd969.845d09f644ce3117205f.js",revision:"2c7c479a379c9f0cd478c30eebb84e8c"},{url:"/beta/apps/catalog/js/error-page~31ecd969.18f77cdaf2f63ec7e6db.js",revision:"f66dba76024775a0d636036126e05668"},{url:"/beta/apps/catalog/js/framework~f9ca8911.11781db72a408a843edb.js",revision:"528bae0c335f255ff3015c460f12dd05"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.f2ec3ef847d6551abbfc.js",revision:"f3a2db8514e010c2684e2f86744199bd"},{url:"/beta/apps/catalog/js/lib~App~0f485567.7ac3cbdae0348ce09afc.js",revision:"a2478090f53d659a3c26c5c159d6a057"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.d0fa75ec8d1db6f7e70a.js",revision:"5d5ba21c440a0720a15e85dcb7a93d1c"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.50aa97f060e3ab336b05.js",revision:"b61d09d228afd94aff39a0729840b1d8"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.abb2faf21bd9b961c69b.js",revision:"7455febf979c83762a7caaa1bb008160"},{url:"/beta/apps/catalog/js/lib~App~545c15e3.6091fb3234b72e788a3b.js",revision:"4ae0038e825a1af5f26ae3d46c480edd"},{url:"/beta/apps/catalog/js/lib~App~6353c401.9fda67df39469a46e41e.js",revision:"decdfe4557f9bcce4b70f8b44a5d5035"},{url:"/beta/apps/catalog/js/lib~App~678f84af.9d3fc8d63997d77df1f4.js",revision:"db696f2824fbe42d1dc225bb029ecb6c"},{url:"/beta/apps/catalog/js/lib~App~690b702c.1120250e640c7fe168cd.js",revision:"97ee58264a47953bfa2736cef25c496a"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.3da00528240eeb3cb434.js",revision:"d6ebe41bc2e0c1d16bb5c632e2b25253"},{url:"/beta/apps/catalog/js/lib~App~c0a32c9f.8ed04afbb5bc5fa38e00.js",revision:"96ec51528488b87c2d11405bcf898c4b"},{url:"/beta/apps/catalog/js/lib~App~c6d1b060.42c1cf5f3cd3f54b4dc9.js",revision:"ae3895ed5f7df560d1563b122c377918"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.8d2ba7c8e513fadeed3b.js",revision:"6cce13c05c87824bde2901fdf1f88664"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.f37ce8dd9a147ac25608.js",revision:"1aec1d790c0b92c8ffe6b074848c1146"},{url:"/beta/apps/catalog/js/lib~App~f9ca8911.1fa2877f0a376b93171c.js",revision:"4d3b490225a84bad074d840506f4db29"},{url:"/beta/apps/catalog/js/lib~add-portfolio~add-products-to-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-m~0629c9d2.bad4419268e271715c39.js",revision:"37421e203696881c6aca958a8757e021"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-detail~order-modal~portfoli~5b362261.70aadd5d8cb7e88c3013.js",revision:"42ef9afc2ca10f1cb78198c1806448b6"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-modal~portfolio-item-detail~55ab1030.6a48e4ab68c16b59376c.js",revision:"10dea51825e3f72008e0d79189c293bc"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~portfolio~portfolios~products~remove-portfolio~share-por~a2fe5007.157c49091deeb3b60a28.js",revision:"3bfb9296815672ea1c63822cc2164607"},{url:"/beta/apps/catalog/js/lib~approval-request~orders~807bc7cd.81a751cd238902294b78.js",revision:"8345bd91bd4c467359bfc9aeaab0fed8"},{url:"/beta/apps/catalog/js/lib~approval-request~orders~platform-inventories~77bf5e45.f7b18f0b6eb6e3966a8c.js",revision:"23956ef5a5703f30a0d5cf32715b410f"},{url:"/beta/apps/catalog/js/lib~approval-request~orders~platform-inventories~cf15acf0.92d9ade2bd70836cde15.js",revision:"3598bfca2ef34af76e5a922271fe2be1"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~31ecd969.b2950387ec612472981e.js",revision:"f26f7a334c42ea0ae1221f9c563c724f"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~portfolios~products~31ecd969.b4ed142eec90a6198f60.js",revision:"7b686995ff69cc8bdb0d7da39e891657"},{url:"/beta/apps/catalog/js/order-details~31ecd969.42cf83e7ebce0c5eba25.js",revision:"fa0056575839b860356e25d863c76512"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.f374704c3e514bcd5e1c.js",revision:"1e093bf63358ab5fdae2c025f788beb3"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.39cab4bd51102e1ac0de.js",revision:"58ab31a69ec65704fd2b4f0e397134fa"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.3f79d6dcdd4787001e0f.js",revision:"b0b3d3cb9c5b41a0f440dcd52d11fd98"},{url:"/beta/apps/catalog/js/orders~0f485567.51e605f227d193322f99.js",revision:"b47b92f3cd34714111ee5d87a91aac7a"},{url:"/beta/apps/catalog/js/orders~91f4305a.e658d9e831738ffe5446.js",revision:"fa6af60c90413d8be064e4fff2eb30c5"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.a0b2bf96b3cd34983f80.js",revision:"8c93d465ab729267427c6a485a715336"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.def4d4e429373d0d72c4.js",revision:"d16ffb267ff77daf5601f87c6b21d645"},{url:"/beta/apps/catalog/js/platforms~31ecd969.e3648d9ecbdc6b2fd7d3.js",revision:"8d929c85103bdc37aa1f9897d9faa8e5"},{url:"/beta/apps/catalog/js/platform~31ecd969.d1199a3a0914a79b24bf.js",revision:"d39514c545c4641f334e38c0fd7045f3"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.104d3f211d3ed39b2adb.js",revision:"b45fb136f6ab2ff6968090b89285936c"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.48b716f972b118c9ebe1.js",revision:"b05c3e2b22a527d3be8f70680ff515a1"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.4b39a9c71a48ffe8b7bb.js",revision:"1548cdcec710ad8c10f2a98e2671e355"},{url:"/beta/apps/catalog/js/products~31ecd969.6b4a1ffc973af1ecfa10.js",revision:"1808402ac4d40626b51cf7ded9ffa22f"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.90521695d0b063031386.js",revision:"7d491fdb0859b893a7d0e6b0fe45801b"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.a217e88d39fa8113c63f.js",revision:"e0a481583e28561ef8361cdfbb48d62a"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.7ae50b9bf0ba8ad7e3d3.js",revision:"3bda30daf40c48c25c947d5e1bbd1de1"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.49e4b4db7288d014bf94.js",revision:"035740a512d3f64ee5df9a4c4910141f"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.db9808a227eb7c71b0b0.js",revision:"55cc9efdedd1822f3ff13b999bf10e4b"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
