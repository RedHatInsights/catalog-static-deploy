if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return s[a]||(e=new Promise(async e=>{if("document"in self){const s=document.createElement("script");s.src=a,document.head.appendChild(s),s.onload=e}else importScripts(a),e()})),e.then(()=>{if(!s[a])throw new Error(`Module ${a} didn’t register its module`);return s[a]})},e=(e,s)=>{Promise.all(e.map(a)).then(a=>s(1===a.length?a[0]:a))},s={require:Promise.resolve(e)};self.define=(e,c,d)=>{s[e]||(s[e]=Promise.resolve().then(()=>{let s={};const b={uri:location.origin+e.slice(1)};return Promise.all(c.map(e=>{switch(e){case"exports":return s;case"module":return b;default:return a(e)}})).then(a=>{const e=d(...a);return s.default||(s.default=e),s})}))}}define("./service-worker.js",["./workbox-1a4f2008"],(function(a){"use strict";a.enable(),self.addEventListener("message",a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()}),a.clientsClaim(),a.precacheAndRoute([{url:"/beta/apps/catalog/fonts/card-icon-default.svg",revision:"68bb7c18d36341dac0789cf0775e35d1"},{url:"/beta/apps/catalog/fonts/pfbg_2000.jpg",revision:"4f5989446497f0ee3c379ee231879111"},{url:"/beta/apps/catalog/fonts/pfbg_576.jpg",revision:"85341a9c100625a9129bb92ea921247f"},{url:"/beta/apps/catalog/fonts/pfbg_576@2x.jpg",revision:"b48e77bc91c0f0efd6d70d8bc1fdd303"},{url:"/beta/apps/catalog/fonts/pfbg_768.jpg",revision:"c983971754d12d6d72483d87da6cbafc"},{url:"/beta/apps/catalog/fonts/pfbg_768@2x.jpg",revision:"0099dea36b1077b3c38f031b7607c1f3"},{url:"/beta/apps/catalog/fonts/pfbg_992@2x.jpg",revision:"1423e11ee9ff3dac6d2ced2ca15eb650"},{url:"/beta/apps/catalog/fonts/platform-amazon.png",revision:"8b190df931e2054ee7d5a0c5101b5308"},{url:"/beta/apps/catalog/fonts/platform-default.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-openshift.svg",revision:"8fabd0dc92a3b107ea4792cf2f6253d5"},{url:"/beta/apps/catalog/fonts/platform-tower.png",revision:"01c109fb5977d84edfbe585276bf9cad"},{url:"/beta/apps/catalog/index.html",revision:"e3d1071d9348efcdec96f95d18add279"},{url:"/beta/apps/catalog/js/0.48cc4ab0cef841a86aaf.js",revision:"1517726e6e8fb31e4c20ea7e86a8c05e"},{url:"/beta/apps/catalog/js/64.5e4c8a79120b374fae6a.js",revision:"c75edd00e4231573c66f4c4e286901c0"},{url:"/beta/apps/catalog/js/7.26c8b956d8efda709075.js",revision:"857c80094665c1eb9822952ea81c0113"},{url:"/beta/apps/catalog/js/App.33b4b1b8206de116544b.js",revision:"1df405eefb38ebdfd15d4cd3b5e85c46"},{url:"/beta/apps/catalog/js/add-portfolio~5a4d8549.5518d22b36de899dc7b3.js",revision:"ecfcaee5b78ffa5204535f3262af6d9e"},{url:"/beta/apps/catalog/js/add-products-to-portfolio~31ecd969.7b165a7ed30b4fa83b09.js",revision:"8a0f7c2d0e4dba8d58fe1bfd4999f294"},{url:"/beta/apps/catalog/js/approval-request~31ecd969.b97c243f7ddefd8ee65b.js",revision:"7e81a16ffad48fbf30af355221c2ae7c"},{url:"/beta/apps/catalog/js/copy-portfolio-item-modal~1601866c.8d203a4f6a5dd1ae9b1c.js",revision:"3b28ebf8e3f1db87ca03e3c4aa30a8da"},{url:"/beta/apps/catalog/js/edit-approval-workflow~91f4305a.227e87281924f8f256f4.js",revision:"814229b0ab26d4094da155d2361716ca"},{url:"/beta/apps/catalog/js/error-page~31ecd969.830f69d2a585fec627e3.js",revision:"d6ce3e114a74aa1d7d3dbc1b66afce09"},{url:"/beta/apps/catalog/js/framework~f9ca8911.b89f15f93d43d6396c42.js",revision:"e0afe10876a01209d85bffeefc0deb44"},{url:"/beta/apps/catalog/js/lib~App~06837ae4.46fe4e7de59881bedf26.js",revision:"d14e268da0a4b5865ac0796733ecf9bc"},{url:"/beta/apps/catalog/js/lib~App~0f485567.d601b70823a5b2a25a11.js",revision:"babbc509cf0b05bc63ee4f9eacd4225e"},{url:"/beta/apps/catalog/js/lib~App~1c3a2c3f.2cc61e81ac72bbc58163.js",revision:"17e739a3579cac501dd7497a3b690c0b"},{url:"/beta/apps/catalog/js/lib~App~2539590c.dc88127ba51e71374c3c.js",revision:"4a196c476ff61e75d4a76f21993cfe4a"},{url:"/beta/apps/catalog/js/lib~App~253ae210.d3db01a65c4fbfaa9d7e.js",revision:"783a960c2816e46f95d16bd3144836fb"},{url:"/beta/apps/catalog/js/lib~App~2a42e354.10a5b1c8922ccb4d70f3.js",revision:"1b3b3ad2fb88f0e3098e21531b4c986b"},{url:"/beta/apps/catalog/js/lib~App~47974c6d.dee1faaa3b93abe6813e.js",revision:"7fb880cf03a77f36f136fc683db757aa"},{url:"/beta/apps/catalog/js/lib~App~60b88c48.2e223c146d9f21aa8dc6.js",revision:"f3b973610e20cd36818eea2752f16643"},{url:"/beta/apps/catalog/js/lib~App~6625447d.a9b9e22ef22e3960e073.js",revision:"f8ee61f46494dc9d5c71dc73a7aa5f6a"},{url:"/beta/apps/catalog/js/lib~App~678f84af.c1c2a005ec3c4e353ec5.js",revision:"f2a202ce40612a8a9d9987c6b5b0c8b7"},{url:"/beta/apps/catalog/js/lib~App~690b702c.a73147a5938219176df4.js",revision:"3729603109de7c19e05e2e4fdf7a5e34"},{url:"/beta/apps/catalog/js/lib~App~8b4a6063.eb72a09e0a1a60d91c53.js",revision:"d97ca18c3c7cb11bbad50e7dcc7a4f98"},{url:"/beta/apps/catalog/js/lib~App~b2e0d743.94b1fde1d013632fadf3.js",revision:"665c4375874b9e6236b2b6748f6fcc31"},{url:"/beta/apps/catalog/js/lib~App~b8ebd723.bb6e55d08df5af133410.js",revision:"94f5fd98c1500a5c1e269a654a7ffbeb"},{url:"/beta/apps/catalog/js/lib~App~b9cf3951.a6f35b78c9d9c027452f.js",revision:"d61dbe0dc7154ab938969b5a9fb31b7b"},{url:"/beta/apps/catalog/js/lib~App~cf15acf0.44ca31397b96b9b78cd2.js",revision:"0b65bd00d473772fe66251003f89960a"},{url:"/beta/apps/catalog/js/lib~App~f373cf78.bfe0f97623bf19f233eb.js",revision:"e59ad95db9e7dfbd1f3995f9d6c88ddf"},{url:"/beta/apps/catalog/js/lib~App~f79053e5.4dd17b4b1a66fbd8088b.js",revision:"dd9064acfb494435496d3e76f693371e"},{url:"/beta/apps/catalog/js/lib~add-portfolio~approval-request~copy-portfolio-item-modal~253ae210.adec340c62c30960a047.js",revision:"81314fd7d357b73e0d34d5f99b75bfc1"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~76d93fce.8dd88451be8cbdf50a41.js",revision:"349bce4f398a204d946b5c6d262bc228"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~77bf5e45.bf33293a71b356d9cda1.js",revision:"048c8419e16a3cd2221851ba2df9c350"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~b09b0461.c5848d1bb48623a6f1af.js",revision:"0594764208bce4813fa9e3cd90618c21"},{url:"/beta/apps/catalog/js/lib~approval-request~order-processes~orders~platform-inventories~portfolios~cbe9451d.80aea28625726c63fb06.js",revision:"cb98b61e3e1752977df78c4d00c267cb"},{url:"/beta/apps/catalog/js/lib~approval-request~portfolio-item-detail~807bc7cd.ec7f7eb60b1d5d267163.js",revision:"00647d7f56bab37b1eea50dfff1569af"},{url:"/beta/apps/catalog/js/lib~order-details~service-offering-detail~4bec7f87.4a6c3e127dc6b532d316.js",revision:"633b9dddd1a954999a5433f9232b53c3"},{url:"/beta/apps/catalog/js/lib~order-detail~order-modal~91f4305a.d1de5d137e432a929af2.js",revision:"ad97c18ba2071f646584155ec7f8b66e"},{url:"/beta/apps/catalog/js/lib~order-detail~portfolios~c84bddb0.4cc1b594af148f17ad46.js",revision:"51cbf1e9c7b2144eb2efcc47a7018e04"},{url:"/beta/apps/catalog/js/lib~order-processes~orders~platform~platforms~portfolio~portfolios~products~31ecd969.2df88aae2a6e2f8bee7f.js",revision:"ff28c939193e952422cc2f53375e6d5a"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~31ecd969.993e804e4d8bf7eadffd.js",revision:"38687d735f9d8e435c597fe0052c1bfc"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~807bc7cd.e16f075556ac80898df3.js",revision:"928dafd67803af0d1b2fc4615cc6c9fa"},{url:"/beta/apps/catalog/js/lib~order-processes~portfolios~b3141737.93d24ccdc5d678e5c5e1.js",revision:"09f0930c1032f15f50f90ee3355659a8"},{url:"/beta/apps/catalog/js/lib~orders~platform~platforms~portfolio~products~31ecd969.9084a561e84ea95a15cd.js",revision:"9f5e522b66743a133e21926df6bcb30c"},{url:"/beta/apps/catalog/js/order-details~31ecd969.cd50318b87ba399ffdf5.js",revision:"9fb819fa78659975cee794eb50c9cfe0"},{url:"/beta/apps/catalog/js/order-detail~31ecd969.99158115d6aababe6a6d.js",revision:"d3810f56256d9ab01dbb40f0af0066d6"},{url:"/beta/apps/catalog/js/order-lifecycle~31ecd969.f9063d6fb93599d3dacc.js",revision:"00b53bb538ed9be7e34f48173f1d46d7"},{url:"/beta/apps/catalog/js/order-modal~31ecd969.5d44134803802cc95669.js",revision:"5224ae32fb3b2111719d0424e3b8df81"},{url:"/beta/apps/catalog/js/order-processes~31ecd969.31f5371ecf252253d9f2.js",revision:"d6c9bf2a8564fb1efd343ad92e01b595"},{url:"/beta/apps/catalog/js/orders~0f485567.bde2c5d50a52598ee38c.js",revision:"139718da4d786cee64ca2a5b27017e09"},{url:"/beta/apps/catalog/js/orders~763301a3.90d1b5a8c2461b59684b.js",revision:"3c89d13fbd57e2cace7af0389b3ddee4"},{url:"/beta/apps/catalog/js/orders~91f4305a.85b65e909bec19f4daab.js",revision:"5ee2c0f38a907f605c435ff9f7859b61"},{url:"/beta/apps/catalog/js/orders~c895ce40.c2e5e9b454078eea450e.js",revision:"4f30276428fe49a0c7f89cd3368fbef7"},{url:"/beta/apps/catalog/js/platform-inventories~31ecd969.e4045e30501130692f09.js",revision:"ac7f746ff9c4142be840c7898cb7bd5a"},{url:"/beta/apps/catalog/js/platform-templates~31ecd969.a3737997742768c9a007.js",revision:"45ddd9ea0991ce5e50f0078f5e8e66f9"},{url:"/beta/apps/catalog/js/platforms~31ecd969.dd13823672ac5f10d841.js",revision:"5c488b6dc9d27fda257140972539fdff"},{url:"/beta/apps/catalog/js/platform~31ecd969.430080d49c45428c6d94.js",revision:"1045bcd1200c5de405252411c274e9db"},{url:"/beta/apps/catalog/js/portfolio-item-detail~31ecd969.cbd8304d966ceb59d002.js",revision:"e68f49a4562adb944016af8210ce8bc0"},{url:"/beta/apps/catalog/js/portfolios~31ecd969.950b162bfff5241feac5.js",revision:"4c4d61da8acfc25004120a702a5339d5"},{url:"/beta/apps/catalog/js/portfolio~31ecd969.5bfccf85ee7c8ed7396a.js",revision:"5b41a1ecd2dfe00a2f3d84566aecd18b"},{url:"/beta/apps/catalog/js/products~31ecd969.dd6716760fbcaaae0a76.js",revision:"f13c1ea5e48ef549c41ceddd93723534"},{url:"/beta/apps/catalog/js/remove-portfolio~31ecd969.d8549d68a78e043c060b.js",revision:"5033dd09fd98fefa9e202c493be07d53"},{url:"/beta/apps/catalog/js/service-offering-detail~5a11b65b.912cad51e5fe5241e86b.js",revision:"7fe91854dc0e2e18d2e3d3c590a8bbd7"},{url:"/beta/apps/catalog/js/share-portfolio~31ecd969.1f71ed346a0872d97bc4.js",revision:"7485fa24ce9f6911d2429331e7e05769"},{url:"/beta/apps/catalog/js/survey-editor~31ecd969.266abbb849d5385ae181.js",revision:"a324f8d0da105aed47272e1a1d86e1ed"},{url:"/beta/apps/catalog/js/survey-editor~cacb8e57.31cfdd6340109cfe7c7b.js",revision:"043f027f2efda08a04fe9ae2e851f447"}],{}),a.registerRoute(/^https?.*\.js$/,new a.CacheFirst({cacheName:"offlineCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET"),a.registerRoute(/\.(png|svg|jpg)$/,new a.CacheFirst({cacheName:"imageCache",plugins:[new a.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
