if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return c[a]||(e=new Promise(async e=>{if("document"in self){const c=document.createElement("script");c.src=a,document.head.appendChild(c),c.onload=e}else importScripts(a),e()})),e.then(()=>{if(!c[a])throw new Error(`Module ${a} didn’t register its module`);return c[a]})},e=(e,c)=>{Promise.all(e.map(a)).then(a=>c(1===a.length?a[0]:a))},c={require:Promise.resolve(e)};self.define=(e,s,b)=>{c[e]||(c[e]=Promise.resolve().then(()=>{let c={};const o={uri:location.origin+e.slice(1)};return Promise.all(s.map(e=>{switch(e){case"exports":return c;case"module":return o;default:return a(e)}})).then(a=>{const e=b(...a);return c.default||(c.default=e),c})}))}}define("./service-worker.js",["./workbox-e50bde17"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"78bcd99d4aacfd4bd4026a6730876bb5"},{url:"/beta/apps/catalog/js/49.952d90f331aa9f7399a7.js",revision:"8259e044cf6f0d199cb5fbe911a1bae3"},{url:"/beta/apps/catalog/js/7.825698964baf79296ee7.js",revision:"3e6193f1aad2671210ba257d6c92d221"},{url:"/beta/apps/catalog/js/App.ff35095a0df9a1b27bec.js",revision:"2d841d63e311521ed70df6f2c11d1ec8"},{url:"/beta/apps/catalog/js/add-portfolio~31ecd969.467126e859d5fe34ace0.js",revision:"d341a353ca878c7790c03999b45fa008"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~3d9b8e9e.17bf383d9ed5feede5ba.js",revision:"408bb6602ab780ce5e74717cf9ad1580"},{url:"/beta/apps/catalog/js/approval-request~ed7808ee.ef415725a3403dd610b6.js",revision:"8cdecdf13384111f3b472551bf96967f"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~31ecd969.dc549526a00875d35c7d.js",revision:"c5ddf0a5e6a7ec8f8a0cdb09f6644fbc"},{url:"/beta/apps/catalog/js/edit-approval-workflow~31ecd969.68ef3f5a58f627337c85.js",revision:"a4859972beacb30d9ce6d46561f23ed1"},{url:"/beta/apps/catalog/js/error-page~31ecd969.6182d25171f6a0dfa681.js",revision:"0593a53c68b077e33826554cf98d34f3"},{url:"/beta/apps/catalog/js/framework~f9ca8911.9b36b882e312e8a91f0c.js",revision:"88c61c1fc1b5e4075cab51d56a12fcd4"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.41095f86af5416fb53f5.js",revision:"efd27ccc115107573d6efc07df8bd491"},{url:"/beta/apps/catalog/js/lib~App~0f485567.7e41ac4784dd40782200.js",revision:"0fd6cabf8bf22113bf15efa962fe05a7"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.1c247190a49bf456a542.js",revision:"67bfea006eac4c3a56c7e0bc1f08e193"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.80a1fb67811d3c8f540a.js",revision:"e445180ec33fee4ad84b7a331ffdf435"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.5826bd2eb83005151a71.js",revision:"fb61238e019fc291b8473e8aa879a014"},{url:"/beta/apps/catalog/js/lib~App~678f84af.56c8908083d6793602ad.js",revision:"eabb498ed2aa4c55e38c1d794a10c657"},{url:"/beta/apps/catalog/js/lib~App~690b702c.971cae3db656986cab91.js",revision:"7f1cac921b747b6db8130c48a3b5461d"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.812073a84b290f42a838.js",revision:"09755a5169e9491f9e015cc42288ce26"},{url:"/beta/apps/catalog/js/lib~App~c6d1b060.b060b252b9cfacb72a4f.js",revision:"c26bec40ebdf321324b3cebbc92717a1"},{url:"/beta/apps/catalog/js/lib~App~f9ca8911.5ef124d6dd29d80d0eb4.js",revision:"629170578f2c5d04e72c9b5a43a071e9"},{url:"/beta/apps/catalog/js/lib~add-portfolio~add-products-to-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-m~36ed02ea.52f96c3f721e52065016.js",revision:"88a0c60500ebc485bedfd2c194750705"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~edit-approval-workflow~order-modal~portfolio-item-detail~55ab1030.b25dab2fb1fed535c667.js",revision:"744335a6ee389ec096f0131e3637a331"},{url:"/beta/apps/catalog/js/lib~add-portfolio~copy-portfolio-item-modal~portfolio~portfolios~products~remove-portfolio~share-por~a2fe5007.f25a0e27de5adabedf7b.js",revision:"ec47e335373553eb68cb994159dc6bcf"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.fec16291dfcb33a770b2.js",revision:"d1d495d67c704effd1742135fa378e7e"},{url:"/beta/apps/catalog/js/lib~orders~platform-inventories~31ecd969.fac8f9a36b3c0ad7fabc.js",revision:"1f47f6404a3329b30beebb468c47c635"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~portfolios~products~31ecd969.9871ca75d3fbc69511b4.js",revision:"ed43d5688b8ac1378a93df8ed9a8207e"},{url:"/beta/apps/catalog/js/order-details~a7f15e37.2a05310d791d1b224797.js",revision:"4b231e08ae6c73621bff9676f3129290"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.69d33a8bcbb1968ba3ba.js",revision:"73a1a0ea6e8f1a70ad7ad9702b3e9aaa"},{url:"/beta/apps/catalog/js/order-lifecycle~aa3a0269.40e3779e8268d21b2945.js",revision:"22082e581e70dc007271a5a0662d5544"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.bc389b40abc8416a7758.js",revision:"ccd87a1bab4671b2f4c527629d38f8d1"},{url:"/beta/apps/catalog/js/orders~31ecd969.b63cfd6081ddfa67e3f2.js",revision:"77a98a08c6d8bd3b349753433e0af8ff"},{url:"/beta/apps/catalog/js/patternfly~2539590c.7f3d447773276a2f0610.js",revision:"f47b30594545110f66b9736546157025"},{url:"/beta/apps/catalog/js/patternfly~46efc90e.106228cbb5ff6ad9aaa2.js",revision:"25c03942cf5f62661bd7406789a19073"},{url:"/beta/apps/catalog/js/patternfly~6625447d.d06e26a1598f2412f0cf.js",revision:"6d2bedd638eb8fd237d759811bdf6777"},{url:"/beta/apps/catalog/js/patternfly~b2e0d743.2ba97b25fcb16fb420d0.js",revision:"e0fc9a1bba4784797461085684f9c1b5"},{url:"/beta/apps/catalog/js/patternfly~b3141737.a82de4d0165556e36068.js",revision:"2010415f765bceb434e9e03bacde724d"},{url:"/beta/apps/catalog/js/patternfly~b8ebd723.509e03e00e52692a619a.js",revision:"7687ab7fcbd0b1083bfc8e01822d7b73"},{url:"/beta/apps/catalog/js/patternfly~f79053e5.dcd7ed6edec07540e242.js",revision:"6dc8f0b03cb89ec991fa67bb7f3cf9f5"},{url:"/beta/apps/catalog/js/platform-inventories~3d9b8e9e.063fa6f3e01b6f926b5c.js",revision:"4133a960c38e862f2ff4f5abec477273"},{url:"/beta/apps/catalog/js/platform-templates~3d9b8e9e.fa8a72862f80424673ee.js",revision:"37c5d861f4b8d0e346c1a46c7021a7b6"},{url:"/beta/apps/catalog/js/platforms~f71cff67.5228ba4387bbb60bc4b7.js",revision:"3091309bd4a7612a6837fd84f7fa8cdd"},{url:"/beta/apps/catalog/js/platform~91f4305a.954f9b6cfabe8d37a80c.js",revision:"822646be9816b7af5971e6794740034e"},{url:"/beta/apps/catalog/js/portfolio-item-detail~5a4d8549.f399edc2a704bc42ee65.js",revision:"e115b06f43b65d0e7573ea2d587b64bc"},{url:"/beta/apps/catalog/js/portfolios~3d9b8e9e.0e591b5f1b93b7031e5c.js",revision:"cc070c4770a94f616cc17423493a9d73"},{url:"/beta/apps/catalog/js/portfolio~91f4305a.ace6376c4abbc272d767.js",revision:"a582838d75e051328a49113b7a932867"},{url:"/beta/apps/catalog/js/products~91f4305a.f18118c41b3f7975cbcc.js",revision:"702f31b55708d875fcb4ac355aa0cefe"},{url:"/beta/apps/catalog/js/remove-portfolio~5fa3c05e.acbf49fb5242d81e4bfb.js",revision:"655a8db6145a9fc121aae0d8de269d4e"},{url:"/beta/apps/catalog/js/service-offering-detail~3d9b8e9e.3bf6e365cf6c1b6faadb.js",revision:"510e16da5e87a928db12e8697acac989"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.42a87c2c855c71960c65.js",revision:"257ec5dd8eb8730090f270f4fae13ddf"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.07ba6cf7756175f26ae2.js",revision:"bb650597920cade10b43a5628ea88fba"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
