(()=>{var e,t,r,n,a,o,i={},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return i[e](r,r.exports,c),r.loaded=!0,r.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(a,o,i)=>{var s;i&&((s=[]).d=-1);var c,l,u,d=new Set,p=a.exports,f=new Promise(((e,t)=>{u=t,l=e}));f[t]=p,f[e]=e=>(s&&e(s),d.forEach(e),f.catch((e=>{}))),a.exports=f,o((a=>{var o;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{i[t]=e,n(o)}),(e=>{i[r]=e,n(o)}));var i={};return i[e]=e=>e(o),i}}var s={};return s[e]=e=>{},s[t]=a,s})))(a);var i=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(o=()=>t(i)).r=0;var r=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(o.r++,e.push(o)));c.map((t=>t[e](r)))}));return o.r?l:i()}),(e=>(e?u(f[r]=e):l(p),n(s)))),s&&s.d<0&&(s.d=0)},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+".index.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="image-effects:",c.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var i,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){i=d;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+r),i.src=e),a[e]=[t];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.v=(e,t,r,n)=>{var a=fetch(c.p+""+r+".module.wasm"),o=()=>a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)));return a.then((t=>"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,n).then((t=>Object.assign(e,t.instance.exports)),(e=>{if("application/wasm"!==t.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),o();throw e})):o()))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={590:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=c.p+c.u(t),i=new Error;c.l(o,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,i,s]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);s&&s(c)}for(t&&t(r);l<o.length;l++)a=o[l],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkimage_effects=self.webpackChunkimage_effects||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),async function(){let e=null;try{e=await c.e(419).then(c.bind(c,419))}catch(e){return void console.error(e)}const t=document.getElementById("upload"),r=new FileReader;r.onloadend=()=>{let t=r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,""),n=e.grayscale(t);document.getElementById("new-img").setAttribute("src",n)},t.addEventListener("change",(()=>{r.readAsDataURL(t.files[0])}))}()})();