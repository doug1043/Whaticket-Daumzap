var OGVDecoderAudioVorbisW=(()=>{var e="undefined"!=typeof document?document.currentScript?.src:void 0;return"undefined"!=typeof __filename&&(e||=__filename),function(n={}){var t,r,o,i,a,u=n,s=new Promise(((e,n)=>{t=e,r=n})),f=Object.assign({},u),c=(e,n)=>{throw n},d="object"==typeof window,l="function"==typeof importScripts,p="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="";if(p){var y=require("fs"),_=require("path");m=l?_.dirname(m)+"/":__dirname+"/",o=(e,n)=>(e=x(e)?new URL(e):_.normalize(e),y.readFileSync(e,n?void 0:"utf8")),a=e=>((e=o(e,!0)).buffer||(e=new Uint8Array(e)),e),i=(e,n,t,r=!0)=>{e=x(e)?new URL(e):_.normalize(e),y.readFile(e,r?void 0:"utf8",((e,o)=>{e?t(e):n(r?o.buffer:o)}))},process.argv.slice(2),c=(e,n)=>{throw process.exitCode=e,n}}else(d||l)&&(l?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),e&&(m=e),m=m.startsWith("blob:")?"":m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),o=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},l&&(a=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),i=(e,n,t)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?n(r.response):t()},r.onerror=t,r.send(null)});u.print;var h,v=u.printErr||void 0;Object.assign(u,f),f=null,u.quit&&(c=u.quit),u.wasmBinary&&(h=u.wasmBinary);var w,b,A=!1;function g(){var e=w.buffer;u.HEAP8=new Int8Array(e),u.HEAP16=new Int16Array(e),u.HEAPU8=b=new Uint8Array(e),u.HEAPU16=new Uint16Array(e),u.HEAP32=new Int32Array(e),u.HEAPU32=new Uint32Array(e),u.HEAPF32=new Float32Array(e),u.HEAPF64=new Float64Array(e)}var R=[],E=[],U=[];function F(){var e=u.preRun.shift();R.unshift(e)}var I,S=0,W=null,P=null,H=e=>e.startsWith("data:application/octet-stream;base64,"),x=e=>e.startsWith("file://");if(!H(I="ogv-decoder-audio-vorbis-wasm.wasm")){var T=I;I=u.locateFile?u.locateFile(T,m):m+T}function j(e){if(e==I&&h)return new Uint8Array(h);if(a)return a(e);throw"both async and sync fetching of the wasm failed"}function M(e,n,t){return function(e){if(!h&&(d||l)){if("function"==typeof fetch&&!x(e))return fetch(e,{credentials:"same-origin"}).then((n=>{if(!n.ok)throw`failed to load wasm binary file at '${e}'`;return n.arrayBuffer()})).catch((()=>j(e)));if(i)return new Promise(((n,t)=>{i(e,(e=>n(new Uint8Array(e))),t)}))}return Promise.resolve().then((()=>j(e)))}(e).then((e=>WebAssembly.instantiate(e,n))).then(t,(e=>{throw v(`failed to asynchronously prepare wasm: ${e}`),u.onAbort?.(e),v(e="Aborted("+e+")"),A=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),r(e),e}))}function L(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var O,q,B,D,G=e=>{for(;0<e.length;)e.shift()(u)},V=u.noExitRuntime||!0,k={b:(e,n,t)=>b.copyWithin(e,n,n+t),a:e=>{var n=b.length;if(2147483648<(e>>>=0))return!1;for(var t=1;4>=t;t*=2){var r=n*(1+.2/t);r=Math.min(r,e+100663296);var o=Math;r=Math.max(e,r);e:{o=(o.min.call(o,2147483648,r+(65536-r%65536)%65536)-w.buffer.byteLength+65535)/65536;try{w.grow(o),g();var i=1;break e}catch(e){}i=void 0}if(i)return!0}return!1},c:e=>{V||(u.onExit?.(e),A=!0),c(e,new L(e))},d:function(e,n,t){var r=w.buffer,o=new Uint32Array(r,e,n),i=[];if(0!==e)for(e=0;e<n;e++){var a=o[e];r.slice?(a=r.slice(a,a+4*t),a=new Float32Array(a)):(a=new Float32Array(r,a,t),a=new Float32Array(a)),i.push(a)}u.audioBuffer=i},e:function(e,n){u.audioFormat={channels:e,rate:n},u.loadedMetadata=!0}},$=function(){function e(e){return $=e.exports,w=$.f,g(),E.unshift($.g),S--,u.monitorRunDependencies?.(S),0==S&&(null!==W&&(clearInterval(W),W=null),P&&(e=P,P=null,e())),$}var n={a:k};if(S++,u.monitorRunDependencies?.(S),u.instantiateWasm)try{return u.instantiateWasm(n,e)}catch(e){v(`Module.instantiateWasm callback failed with error: ${e}`),r(e)}return function(e,n){var t=I;return h||"function"!=typeof WebAssembly.instantiateStreaming||H(t)||x(t)||p||"function"!=typeof fetch?M(t,e,n):fetch(t,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,e).then(n,(function(r){return v(`wasm streaming compile failed: ${r}`),v("falling back to ArrayBuffer instantiation"),M(t,e,n)}))))}(n,(function(n){e(n.instance)})).catch(r),{}}();function z(){function e(){if(!O&&(O=!0,u.calledRun=!0,!A)){if(G(E),t(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;){var e=u.postRun.shift();U.unshift(e)}G(U)}}if(!(0<S)){if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)F();G(R),0<S||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("")}),1),e()}),1)):e())}}if(u._ogv_audio_decoder_init=()=>(u._ogv_audio_decoder_init=$.h)(),u._ogv_audio_decoder_process_header=(e,n)=>(u._ogv_audio_decoder_process_header=$.i)(e,n),u._ogv_audio_decoder_process_audio=(e,n)=>(u._ogv_audio_decoder_process_audio=$.j)(e,n),u._ogv_audio_decoder_destroy=()=>(u._ogv_audio_decoder_destroy=$.k)(),u._malloc=e=>(u._malloc=$.l)(e),u._free=e=>(u._free=$.m)(e),P=function e(){O||z(),O||(P=e)},u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);0<u.preInit.length;)u.preInit.pop()();function X(e){return q&&B>=e?q:(q&&u._free(q),B=e,q=u._malloc(B))}function C(e){var n=D();return e=e(),u.cpuTime+=D()-n,e}return z(),D="undefined"==typeof performance||void 0===performance.now?Date.now:performance.now.bind(performance),u.loadedMetadata=!!u.audioFormat,u.audioFormat=u.audioFormat||null,u.audioBuffer=null,u.cpuTime=0,Object.defineProperty(u,"processing",{get:function(){return!1}}),u.init=function(e){C((function(){u._ogv_audio_decoder_init()})),e()},u.processHeader=function(e,n){n(C((function(){var n=e.byteLength,t=X(n);return new Uint8Array(w.buffer,t,n).set(new Uint8Array(e)),u._ogv_audio_decoder_process_header(t,n)})))},u.processAudio=function(e,n){n(C((function(){var n=e.byteLength,t=X(n);return new Uint8Array(w.buffer,t,n).set(new Uint8Array(e)),u._ogv_audio_decoder_process_audio(t,n)})))},u.close=function(){},s}})();"object"==typeof exports&&"object"==typeof module?module.exports=OGVDecoderAudioVorbisW:"function"==typeof define&&define.amd&&define([],(()=>OGVDecoderAudioVorbisW));