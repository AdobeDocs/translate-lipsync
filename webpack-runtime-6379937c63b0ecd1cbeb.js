!function(){"use strict";var e,n,t,r={},o={};function c(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=r,c.amdO={},e=[],c.O=function(n,t,r,o){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],o=e[u][2];for(var d=!0,i=0;i<t.length;i++)(!1&o||a>=o)&&Object.keys(c.O).every((function(e){return c.O[e](t[i])}))?t.splice(i--,1):(d=!1,o<a&&(a=o));if(d){e.splice(u--,1);var f=r();void 0!==f&&(n=f)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,r,o]},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,{a:n}),n},c.d=function(e,n){for(var t in n)c.o(n,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(n,t){return c.f[t](e,n),n}),[]))},c.u=function(e){return({3:"b6f3ea4c",40:"e82996df",99:"cdae3cd1",159:"component---src-pages-guides-video-index-md",223:"commons",258:"490477d6",298:"987e9e88",317:"5e65052d",342:"ea88be26",349:"b5b0150a",441:"c9f1e04f",522:"f5cc1685",542:"component---src-pages-api-index-md",569:"component---src-pages-guides-index-md",624:"483feae5",661:"1e479c3f",747:"component---src-pages-guides-usage-index-md",757:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",760:"862bb76f",851:"b19b3968",893:"2dee68d8",947:"component---src-pages-index-md",982:"8b61fb39"}[e]||e)+"-"+{3:"741493132c53246dcf27",40:"d168c8b9bae9b1b2a18b",99:"e6530ad16994f612f522",159:"cc04baafcbdf1e55a8bc",188:"a85ff22ae9d7fe8d14a0",223:"6c5b49979d2eb7a477d2",258:"b03792a67c6ba604c6d4",298:"e6086e811d19b8d799eb",317:"61be9e515d66e9d22aed",342:"297c176d8be97dc525d0",349:"f4349426430e8698ae6e",441:"57ca36797336605d22b1",472:"83795f2fd50650c3ef55",522:"c9f85942f55044f26068",539:"1f0290a1943b76abe0b1",542:"4006c97f0afe918a5e6f",569:"3da2a1dbb6e12436dd98",624:"3482f482dd0208ba531b",661:"27ad5eb2b5ba9cc42944",747:"3455d1c1a524cb061993",757:"279d4f0063a6fd57abf0",760:"1240bf4219c478c89a69",851:"5475e1a268defe5a5bfd",893:"2430e2f53b1c7d99af09",947:"59f2052722d3fa4b0429",982:"807d2427ead9f5e42f32"}[e]+".js"},c.miniCssF=function(e){return"styles.08807a18de1624921471.css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="dev-site-documentation-template:",c.l=function(e,r,o,a){if(n[e])n[e].push(r);else{var d,i;if(void 0!==o)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var s=f[u];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+o){d=s;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",t+o),d.src=e),n[e]=[r];var b=function(t,r){d.onerror=d.onload=null,clearTimeout(l);var o=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((function(e){return e(r)})),t)return t(r)},l=setTimeout(b.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=b.bind(null,d.onerror),d.onload=b.bind(null,d.onload),i&&document.head.appendChild(d)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},c.p="/translate-lipsync/",function(){var e={311:0,869:0};c.f.j=function(n,t){var r=c.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(311|869)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var a=c.p+c.u(n),d=new Error;c.l(a,(function(t){if(c.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,r[1](d)}}),"chunk-"+n,n)}},c.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,a=t[0],d=t[1],i=t[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(r in d)c.o(d,r)&&(c.m[r]=d[r]);if(i)var u=i(c)}for(n&&n(t);f<a.length;f++)o=a[f],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},t=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),c.nc=void 0}();
//# sourceMappingURL=webpack-runtime-6379937c63b0ecd1cbeb.js.map