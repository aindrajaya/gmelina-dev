if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const d=e=>i(e,n),o={module:{uri:n},exports:t,require:d};s[n]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QEoyF0e7sCgIXwmX749HZ/_buildManifest.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/QEoyF0e7sCgIXwmX749HZ/_ssgManifest.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/0b9910fe57451cbcf8a3229a5677defded8c7301.ad1e9737212ab42ed61a.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/142faf573ba72281c4836b0c542a05097e269811.d5f305ae2e74460f8a03.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/18.437132143da0df09209b.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/3568da3152d31ee6610e124c57fe2421b5cebb77.7dba285e462d641fcc37.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/4b05817cff8afa43fd7d7e76daf673d0bc6ebf7c.e4d9c54acf783b152e91.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/4dd6304199e3b563777ac4cddaa19db816d472f0.9579bbc108071dfe67ba.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/63f3a80e7154d357c97cbb123248a459f800d742.930ad90f97955c791e0d.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/73aa2424849aedcbf5ab30761efda8c9e43b2bf0.dc0dded1c52797c86a49.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/75fc9c18.7bd38a61552b4ff1b4f6.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/7b827b2daec3587951107672e6acf5a5c55c8ad9.9f0d1243d1ae4700994e.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/9ba74ffc4bcc50a2b66c2fcb953dcbf95521cb41.707e5829d417fb417359.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/a5a19fb95c4d149b745c0b34690f8df961bf9a16.eb27be61e09bc4fb2add.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/b50ff5d7e8979c46a9fc6d766979b1dd9b8f9ba7.55d13e11d269dacb7d69.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/c7e7d6d46bf9bd678fc0bee7bb7ba95fb36edd4d.244efdc5351fc8f9b931.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/ca8a49ce110ff97e4d0d9bad8d5ed3d4b89eb237.61bf017171ee9329c779.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/d030b2cee13b2d969415830873cc66f6247c17a9.8be9590d994a82f6018f.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/d98ef359cb675320c6b02fc556823818aea57552.0533fd97377adf986102.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/framework.b1eea712b389c46584f9.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/main-8f94dac31ae064ed4f75.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/404-23d20a54a553551bf774.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/500-16bfdf864ee91479dfb1.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/_app-fd68f507dc44e9c929ce.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/_error-a5482513d82d84565887.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/about-f85bd6216c77a662bd31.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin-80d32b824f385e1c30e0.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/add-category-302bf57e8ad161cf82cc.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/add-product-773bacda3fdc0e6861d2.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/dashboard-7a0d6a9121fee1f279e4.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/order-details/%5Bid%5D-1a03b2f2bf2a7fe14bc0.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/products-58a57718e1837edcf0f7.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/update-product/%5Bid%5D-f2cd8d01eaf81af352b8.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/admin/users-7e12cf1261de1a39ba6d.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/cart-b994bea7012880e4ceee.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/index-43de64c7817e262bd23a.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/order-details/%5Bid%5D-c6284bb3d76606be4800.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/orders-79225198add634b05932.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/product-details/%5Bid%5D-e87867fd9452ee2e5fd7.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/profile-14677231d6366d91497e.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/pages/success-2bcfc9cd4d142079c84d.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/polyfills-e479c6e9625ada71bd60.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/chunks/webpack-dbfc417122b6856335ce.js",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/_next/static/css/41366f3d33d2165fee87.css",revision:"QEoyF0e7sCgIXwmX749HZ"},{url:"/img/Radon.svg",revision:"101b22c50a8621bbd312456d12a35b02"},{url:"/img/about.svg",revision:"b78d22206cec29b87b178c7ebbae1a87"},{url:"/img/authentication.svg",revision:"fa4053c42eb8284549ed2c0aa6b6c150"},{url:"/img/empty.svg",revision:"b305789a59031cf0fe31885ed2ec3aa0"},{url:"/img/empty_cart.svg",revision:"1d5d13dce2ed9dee220ded46b074cc7d"},{url:"/img/favicons/android-chrome-192x192.png",revision:"3989b66f06c40d5849333c8e4467132a"},{url:"/img/favicons/android-chrome-512x512.png",revision:"13bd8f553ddec526f09b9dbc8d1e2d7c"},{url:"/img/favicons/apple-touch-icon.jpeg",revision:"9117dac0873c45103e1489f9225080f3"},{url:"/img/favicons/browserconfig.xml",revision:"38e0d5e6889d7aa3815fe68056fb3fcc"},{url:"/img/favicons/favicon-16x16.png",revision:"410822de1dd6c13f4a4c6e287f4a2e62"},{url:"/img/favicons/favicon-32x32.png",revision:"9d8c9f6697597a7ef11c1b45f5492f68"},{url:"/img/favicons/favicon.jpg",revision:"656230b94b0b208879686c4dffe5eceb"},{url:"/img/favicons/mstile-144x144.png",revision:"596a0e5446903e23b980b58fc16fd593"},{url:"/img/favicons/mstile-150x150.png",revision:"a2d07540a0ef9932beca8bae301f9918"},{url:"/img/favicons/mstile-310x150.png",revision:"671a09cee60b2f211d25cfd01416cd7d"},{url:"/img/favicons/mstile-310x310.png",revision:"a7da699cab7875c69178ce43a077c5b1"},{url:"/img/favicons/mstile-70x70.png",revision:"a5b6b9d16c5291f72e5d8c219ed6d78d"},{url:"/img/favicons/safari-pinned-tab.svg",revision:"c4654101b2174b96b2ff337e95127c0d"},{url:"/img/favicons/site.webmanifest",revision:"525ff6df5536ed1379ee6c78c1448da6"},{url:"/img/gmelina.jpg",revision:"13bd8f553ddec526f09b9dbc8d1e2d7c"},{url:"/img/hero.svg",revision:"894298381fde84e82b5ea5c4e2bb922e"},{url:"/img/heroDefault.svg",revision:"c392a959fc1257205fc4f4fb7e177476"},{url:"/img/profile_pic.svg",revision:"4cef916b26cc5e5adc6545ccdc02b205"},{url:"/img/programming.svg",revision:"01a2c686cc3e525d2e920dbc99af6737"},{url:"/img/social/email.svg",revision:"4af15de585c06a5be03669d66eda3b1d"},{url:"/img/social/github.svg",revision:"c43c197b5418b5cbba66bb327ecdab2c"},{url:"/img/social/linkedin.svg",revision:"c6681bcbd77af1ba984875187d522485"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));