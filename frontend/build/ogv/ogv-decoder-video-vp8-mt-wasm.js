var OGVDecoderVideoVP8MTW=(()=>{var e="undefined"!=typeof document?document.currentScript?.src:void 0;return"undefined"!=typeof __filename&&(e||=__filename),function(r={}){function t(){return S.buffer!=I.buffer&&B(),U}function n(){return S.buffer!=I.buffer&&B(),H}function a(){return S.buffer!=I.buffer&&B(),F}function o(){return S.buffer!=I.buffer&&B(),O}var i,s,u,f,d,c=r,h=new Promise(((e,r)=>{i=e,s=r})),l=c,p=Object.assign({},c),m=(e,r)=>{throw r},v="object"==typeof window,_="function"==typeof importScripts,y="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,g=c.ENVIRONMENT_IS_PTHREAD||!1,w="";function b(e){return c.locateFile?c.locateFile(e,w):w+e}if(y){var W=require("fs"),k=require("path");w=_?k.dirname(w)+"/":__dirname+"/",u=(e,r)=>(e=Z(e)?new URL(e):k.normalize(e),W.readFileSync(e,r?void 0:"utf8")),d=e=>{var r=u(e,!0);return r.buffer||(r=new Uint8Array(r)),r},f=(e,r,t,n=!0)=>{e=Z(e)?new URL(e):k.normalize(e),W.readFile(e,n?void 0:"utf8",((e,a)=>{e?t(e):r(n?a.buffer:a)}))},!c.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),m=(e,r)=>{throw process.exitCode=e,r},global.Worker=require("worker_threads").Worker}else(v||_)&&(_?w=self.location.href:"undefined"!=typeof document&&document.currentScript&&(w=document.currentScript.src),e&&(w=e),w=w.startsWith("blob:")?"":w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),y||(u=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},_&&(d=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),f=(e,r,t)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{200==n.status||0==n.status&&n.response?r(n.response):t()},n.onerror=t,n.send(null)}));y&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var A=void 0,T=void 0;y&&(A=(...e)=>W.writeSync(1,e.join(" ")+"\n"),T=(...e)=>W.writeSync(2,e.join(" ")+"\n"));var M,S,x,R=c.print||A,P=c.printErr||T;Object.assign(c,p),p=null,c.arguments&&c.arguments,c.thisProgram&&c.thisProgram,c.quit&&(m=c.quit),c.wasmBinary&&(M=c.wasmBinary);var E,I,U,H,F,O,L=!1;function B(){var e=S.buffer;c.HEAP8=I=new Int8Array(e),c.HEAP16=new Int16Array(e),c.HEAPU8=U=new Uint8Array(e),c.HEAPU16=new Uint16Array(e),c.HEAP32=H=new Int32Array(e),c.HEAPU32=F=new Uint32Array(e),c.HEAPF32=new Float32Array(e),c.HEAPF64=O=new Float64Array(e)}var C=c.INITIAL_MEMORY||16777216;if(g)S=c.wasmMemory;else if(c.wasmMemory)S=c.wasmMemory;else if(!((S=new WebAssembly.Memory({initial:C/65536,maximum:16384,shared:!0})).buffer instanceof SharedArrayBuffer))throw P("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),y&&P("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");B(),C=S.buffer.byteLength;var j=[],$=[],q=[];function V(){g||me($)}function D(e){j.unshift(e)}var N=0,G=null,z=null;function X(e){N++,c.monitorRunDependencies?.(N)}function Y(e){if(N--,c.monitorRunDependencies?.(N),0==N&&(null!==G&&(clearInterval(G),G=null),z)){var r=z;z=null,r()}}function J(e){c.onAbort?.(e),P(e="Aborted("+e+")"),L=!0,E=1,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw s(r),r}var K,Q=e=>e.startsWith("data:application/octet-stream;base64,"),Z=e=>e.startsWith("file://");function ee(e){if(e==K&&M)return new Uint8Array(M);if(d)return d(e);throw"both async and sync fetching of the wasm failed"}function re(e,r,t){return function(e){if(!M&&(v||_)){if("function"==typeof fetch&&!Z(e))return fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw`failed to load wasm binary file at '${e}'`;return r.arrayBuffer()})).catch((()=>ee(e)));if(f)return new Promise(((r,t)=>{f(e,(e=>r(new Uint8Array(e))),t)}))}return Promise.resolve().then((()=>ee(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then(t,(e=>{P(`failed to asynchronously prepare wasm: ${e}`),J(e)}))}function te(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}Q(K="ogv-decoder-video-vp8-mt-wasm.wasm")||(K=b(K));var ne=e=>{e.terminate(),e.onmessage=e=>{}},ae=e=>{var r=pe.pthreads[e];pe.returnWorkerToPool(r)},oe=e=>{var r=pe.getNewWorker();if(!r)return 6;pe.runningWorkers.push(r),pe.pthreads[e.pthread_ptr]=r,r.pthread_ptr=e.pthread_ptr;var t={cmd:"run",start_routine:e.startRoutine,arg:e.arg,pthread_ptr:e.pthread_ptr};return y&&r.unref(),r.postMessage(t,e.transferList),0},ie=0,se=()=>we||ie>0,ue=()=>Ke(),fe=e=>Ye(e),de=(e,r,t,...n)=>{return a=()=>{for(var a=n.length,i=Je(8*a),s=i>>3,u=0;u<n.length;u++){var f=n[u];o()[s+u]=f}return Ve(e,r,a,i,t)},i=ue(),s=a(),fe(i),s;var a,i,s};function ce(e){if(g)return de(0,0,1,e);E=e,se()||(pe.terminateAllThreads(),c.onExit?.(e),L=!0),m(e,new te(e))}var he=(e,r)=>{if(E=e,g)throw ve(e),"unwind";ce(e)},le=e=>{if(e instanceof te||"unwind"==e)return E;m(1,e)},pe={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init(){g?pe.initWorker():pe.initMainThread()},initMainThread(){for(var e=1;e--;)pe.allocateUnusedWorker();D((()=>{X(),pe.loadWasmModuleToAllWorkers((()=>Y()))}))},initWorker(){we=!1},setExitStatus:e=>E=e,terminateAllThreads__deps:["$terminateWorker"],terminateAllThreads:()=>{for(var e of pe.runningWorkers)ne(e);for(var e of pe.unusedWorkers)ne(e);pe.unusedWorkers=[],pe.runningWorkers=[],pe.pthreads=[]},returnWorkerToPool:e=>{var r=e.pthread_ptr;delete pe.pthreads[r],pe.unusedWorkers.push(e),pe.runningWorkers.splice(pe.runningWorkers.indexOf(e),1),e.pthread_ptr=0,De(r)},receiveObjectTransfer(e){},threadInitTLS(){pe.tlsInitFunctions.forEach((e=>e()))},loadWasmModuleToWorker:r=>new Promise((t=>{r.onmessage=e=>{var n=e.data,a=n.cmd;if(n.targetThread&&n.targetThread!=$e()){var o=pe.pthreads[n.targetThread];o?o.postMessage(n,n.transferList):P(`Internal error! Worker sent a message "${a}" to target pthread ${n.targetThread}, but that thread no longer exists!`)}else{var i;"checkMailbox"===a?Me():"spawnThread"===a?oe(n):"cleanupThread"===a?ae(n.thread):"killThread"===a?(e=>{var r=pe.pthreads[e];delete pe.pthreads[e],ne(r),De(e),pe.runningWorkers.splice(pe.runningWorkers.indexOf(r),1),r.pthread_ptr=0})(n.thread):"cancelThread"===a?(i=n.thread,pe.pthreads[i].postMessage({cmd:"cancel"})):"loaded"===a?(r.loaded=!0,y&&!r.pthread_ptr&&r.unref(),t(r)):"alert"===a?alert(`Thread ${n.threadId}: ${n.text}`):"setimmediate"===n.target?r.postMessage(n):"callHandler"===a?c[n.handler](...n.args):a&&P(`worker sent an unknown command ${a}`)}},r.onerror=e=>{throw P(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e},y&&(r.on("message",(e=>r.onmessage({data:e}))),r.on("error",(e=>r.onerror(e))));var n=[];for(var a of["onExit","onAbort","print","printErr"])c.hasOwnProperty(a)&&n.push(a);r.postMessage({cmd:"load",handlers:n,urlOrBlob:c.mainScriptUrlOrBlob||e,wasmMemory:S,wasmModule:x})})),loadWasmModuleToAllWorkers(e){if(g)return e();Promise.all(pe.unusedWorkers.map(pe.loadWasmModuleToWorker)).then(e)},allocateUnusedWorker(){var e,r=b("ogv-decoder-video-vp8-mt-wasm.worker.js");e=new Worker(r),pe.unusedWorkers.push(e)},getNewWorker:()=>(0==pe.unusedWorkers.length&&(pe.allocateUnusedWorker(),pe.loadWasmModuleToWorker(pe.unusedWorkers[0])),pe.unusedWorkers.pop())};c.PThread=pe;var me=e=>{for(;e.length>0;)e.shift()(c)};function ve(e){if(g)return de(1,0,0,e);he(e)}c.establishStackSpace=()=>{var e=$e(),r=a()[e+52>>2],t=a()[e+56>>2];Xe(r,r-t),fe(r)};var _e,ye=[],ge=e=>{var r=ye[e];return r||(e>=ye.length&&(ye.length=e+1),ye[e]=r=_e.get(e)),r};c.invokeEntryPoint=(e,r)=>{ie=0,function(e){se()?pe.setExitStatus(e):Ne(e)}(ge(e)(r))};var we=c.noExitRuntime||!0,be=e=>pe.tlsInitFunctions.push(e);function We(e,r,t,n){return g?de(2,0,1,e,r,t,n):ke(e,r,t,n)}var ke=(e,r,t,n)=>{if("undefined"==typeof SharedArrayBuffer)return P("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var a=[];if(g&&0===a.length)return We(e,r,t,n);var o={startRoutine:t,pthread_ptr:e,arg:n,transferList:a};return g?(o.cmd="spawnThread",postMessage(o,a),0):oe(o)},Ae=e=>{if(!L)try{e(),(()=>{if(!se())try{g?Ne(E):he(E)}catch(e){le(e)}})()}catch(e){le(e)}},Te=e=>{if("function"==typeof Atomics.waitAsync){Atomics.waitAsync(n(),e>>2,e).value.then(Me);var r=e+128;Atomics.store(n(),r>>2,1)}};c.__emscripten_thread_mailbox_await=Te;var Me=()=>{var e=$e();e&&(Te(e),Ae(Ge))};c.checkMailbox=Me;var Se,xe=[];Se=()=>performance.timeOrigin+performance.now();var Re=e=>{var r=(e-S.buffer.byteLength+65535)/65536;try{return S.grow(r),B(),1}catch(e){}},Pe=[null,[],[]],Ee="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Ie=(e,r)=>{var t=Pe[e];0===r||10===r?((1===e?R:P)(((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&Ee)return Ee.decode(e.buffer instanceof SharedArrayBuffer?e.slice(r,a):e.subarray(r,a));for(var o="";r<a;){var i=e[r++];if(128&i){var s=63&e[r++];if(192!=(224&i)){var u=63&e[r++];if((i=224==(240&i)?(15&i)<<12|s<<6|u:(7&i)<<18|s<<12|u<<6|63&e[r++])<65536)o+=String.fromCharCode(i);else{var f=i-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&i)<<6|s)}else o+=String.fromCharCode(i)}return o})(t,0)),t.length=0):t.push(r)};function Ue(e,r,n,o){if(g)return de(3,0,1,e,r,n,o);for(var i=0,s=0;s<n;s++){var u=a()[r>>2],f=a()[r+4>>2];r+=8;for(var d=0;d<f;d++)Ie(e,t()[u+d]);i+=f}return a()[o>>2]=i,0}pe.init();var He,Fe,Oe,Le,Be=[ce,ve,We,Ue],Ce={x:e=>{qe(e,!_,1,!v,65536,!1),pe.threadInitTLS()},i:e=>{g?postMessage({cmd:"cleanupThread",thread:e}):ae(e)},u:ke,q:(e,r,t)=>{if(e==r)setTimeout(Me);else if(g)postMessage({targetThread:e,cmd:"checkMailbox"});else{var n=pe.pthreads[e];if(!n)return;n.postMessage({cmd:"checkMailbox"})}},v:(e,r,t,n,a)=>{xe.length=n;for(var i=a>>3,s=0;s<n;s++)xe[s]=o()[i+s];var u=Be[e];pe.currentProxiedOperationCallerThread=t;var f=u(...xe);return pe.currentProxiedOperationCallerThread=0,f},w:Te,z:e=>{y&&pe.pthreads[e].ref()},o:()=>{throw 1/0},C:()=>{J("")},j:()=>{},y:()=>{throw ie+=1,"unwind"},r:()=>1073741824,b:Se,k:()=>y?require("os").cpus().length:navigator.hardwareConcurrency,p:e=>{var r=t().length;if((e>>>=0)<=r)return!1;var n=1073741824;if(e>n)return!1;for(var a,o,i=1;i<=4;i*=2){var s=r*(1+.2/i);s=Math.min(s,e+100663296);var u=Math.min(n,(a=Math.max(e,s))+((o=65536)-a%o)%o);if(Re(u))return!0}return!1},s:()=>{throw"unwind"},t:he,h:Ue,A:function(e){var r=ue();try{return ge(e)()}catch(e){if(fe(r),e!==e+0)throw e;ze(1,0)}},d:function(e,r){var t=ue();try{return ge(e)(r)}catch(e){if(fe(t),e!==e+0)throw e;ze(1,0)}},g:function(e,r,t){var n=ue();try{return ge(e)(r,t)}catch(e){if(fe(n),e!==e+0)throw e;ze(1,0)}},B:function(e,r,t,n){var a=ue();try{return ge(e)(r,t,n)}catch(e){if(fe(a),e!==e+0)throw e;ze(1,0)}},n:function(e,r,t,n,a,o){var i=ue();try{return Qe(e,r,t,n,a,o)}catch(e){if(fe(i),e!==e+0)throw e;ze(1,0)}},c:function(e,r){var t=ue();try{ge(e)(r)}catch(e){if(fe(t),e!==e+0)throw e;ze(1,0)}},e:function(e,r,t,n){var a=ue();try{ge(e)(r,t,n)}catch(e){if(fe(a),e!==e+0)throw e;ze(1,0)}},f:function(e,r,t,n,a){var o=ue();try{ge(e)(r,t,n,a)}catch(e){if(fe(o),e!==e+0)throw e;ze(1,0)}},a:S||c.wasmMemory,l:function(e,r){var t=c.callbacks.shift();c.cpuTime+=r,t(e)},m:function(e,r,t,n,a,o,i,s,u,f,d,h,l,p,m,v){var _=S.buffer;function y(e,r,t,n,a,o,i,s,u){var f,d,c;for(e.set(new Uint8Array(_,r,t*n)),c=0,d=0;d<o;d++,c+=t)for(f=0;f<t;f++)e[c+f]=u;for(;d<o+s;d++,c+=t){for(f=0;f<a;f++)e[c+f]=u;for(f=a+i;f<t;f++)e[c+f]=u}for(;d<n;d++,c+=t)for(f=0;f<t;f++)e[c+f]=u;return e}var g=(-2&l)*u/i,w=(-2&p)*f/s,b=d*u/i,W=h*f/s;d===(R=c.videoFormat).cropWidth&&h===R.cropHeight&&(m=R.displayWidth,v=R.displayHeight);for(var k,A=c.recycledFrames,T=s*r,M=f*n,x=f*o;A.length>0;){var R,P=A.shift();if((R=P.format).width===i&&R.height===s&&R.chromaWidth===u&&R.chromaHeight===f&&R.cropLeft===l&&R.cropTop===p&&R.cropWidth===d&&R.cropHeight===h&&R.displayWidth===m&&R.displayHeight===v&&P.y.bytes.length===T&&P.u.bytes.length===M&&P.v.bytes.length===x){k=P;break}}k||(k={format:{width:i,height:s,chromaWidth:u,chromaHeight:f,cropLeft:l,cropTop:p,cropWidth:d,cropHeight:h,displayWidth:m,displayHeight:v},y:{bytes:new Uint8Array(T),stride:r},u:{bytes:new Uint8Array(M),stride:n},v:{bytes:new Uint8Array(x),stride:o}}),y(k.y.bytes,e,r,s,l,p,d,h,0),y(k.u.bytes,t,n,f,g,w,b,W,128),y(k.v.bytes,a,o,f,g,w,b,W,128),c.frameBuffer=k}},je=function(){var e,r,t,n,a={a:Ce};function o(e,r){var t;return je=e.exports,be(je.M),_e=je.J,t=je.D,$.unshift(t),x=r,Y(),je}if(X(),c.instantiateWasm)try{return c.instantiateWasm(a,o)}catch(e){P(`Module.instantiateWasm callback failed with error: ${e}`),s(e)}return(e=M,r=K,t=a,n=function(e){o(e.instance,e.module)},e||"function"!=typeof WebAssembly.instantiateStreaming||Q(r)||Z(r)||y||"function"!=typeof fetch?re(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return P(`wasm streaming compile failed: ${e}`),P("falling back to ArrayBuffer instantiation"),re(r,t,n)}))))).catch(s),{}}(),$e=(c._ogv_video_decoder_init=()=>(c._ogv_video_decoder_init=je.E)(),c._ogv_video_decoder_async=()=>(c._ogv_video_decoder_async=je.F)(),c._ogv_video_decoder_destroy=()=>(c._ogv_video_decoder_destroy=je.G)(),c._ogv_video_decoder_process_header=(e,r)=>(c._ogv_video_decoder_process_header=je.H)(e,r),c._ogv_video_decoder_process_frame=(e,r)=>(c._ogv_video_decoder_process_frame=je.I)(e,r),c._free=e=>(c._free=je.K)(e),c._malloc=e=>(c._malloc=je.L)(e),c.__emscripten_tls_init=()=>(c.__emscripten_tls_init=je.M)(),c._pthread_self=()=>($e=c._pthread_self=je.N)()),qe=c.__emscripten_thread_init=(e,r,t,n,a,o)=>(qe=c.__emscripten_thread_init=je.O)(e,r,t,n,a,o),Ve=(c.__emscripten_thread_crashed=()=>(c.__emscripten_thread_crashed=je.P)(),(e,r,t,n,a)=>(Ve=je.Q)(e,r,t,n,a)),De=e=>(De=je.R)(e),Ne=c.__emscripten_thread_exit=e=>(Ne=c.__emscripten_thread_exit=je.S)(e),Ge=()=>(Ge=je.T)(),ze=(e,r)=>(ze=je.U)(e,r),Xe=(e,r)=>(Xe=je.V)(e,r),Ye=e=>(Ye=je.W)(e),Je=e=>(Je=je.X)(e),Ke=()=>(Ke=je.Y)(),Qe=c.dynCall_iiiij=(e,r,t,n,a,o)=>(Qe=c.dynCall_iiiij=je.Z)(e,r,t,n,a,o);function Ze(){if(!(N>0)){if(g)return i(c),V(),void startWorker(c);!function(){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)D(c.preRun.shift());me(j)}(),N>0||(c.setStatus?(c.setStatus("Running..."),setTimeout((function(){setTimeout((function(){c.setStatus("")}),1),e()}),1)):e())}function e(){He||(He=!0,c.calledRun=!0,L||(V(),i(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),function(){if(!g){if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;)e=c.postRun.shift(),q.unshift(e);var e;me(q)}}()))}}if(c.wasmMemory=S,c.keepRuntimeAlive=se,c.ExitStatus=te,c.PThread=pe,z=function e(){He||Ze(),He||(z=e)},c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();function er(e){var r,t=Le();return r=e(),c.cpuTime+=Le()-t,r}return Ze(),Le="undefined"==typeof performance||void 0===performance.now?Date.now:performance.now.bind(performance),c.loadedMetadata=!!l.videoFormat,c.videoFormat=l.videoFormat||null,c.frameBuffer=null,c.cpuTime=0,Object.defineProperty(c,"processing",{get:function(){return!1}}),c.init=function(e){er((function(){c._ogv_video_decoder_init()})),e()},c.processHeader=function(e,r){r(er((function(){var r,t=e.byteLength,n=(r=t,Fe&&Oe>=r?Fe:(Fe&&c._free(Fe),Oe=r,Fe=c._malloc(Oe)));return new Uint8Array(S.buffer,n,t).set(new Uint8Array(e)),c._ogv_video_decoder_process_header(n,t)})))},c.callbacks=[],c.processFrame=function(e,r){var t=c._ogv_video_decoder_async(),n=e.byteLength,a=c._malloc(n);function o(e){c._free(a),r(e)}t&&c.callbacks.push(o);var i=er((function(){return new Uint8Array(S.buffer,a,n).set(new Uint8Array(e)),c._ogv_video_decoder_process_frame(a,n)}));t||o(i)},c.close=function(){},c.sync=function(){c._ogv_video_decoder_async()&&(c.callbacks.push((function(){})),er((function(){c._ogv_video_decoder_process_frame(0,0)})))},c.recycledFrames=[],c.recycleFrame=function(e){var r=c.recycledFrames;r.push(e),r.length>16&&r.shift()},h}})();"object"==typeof exports&&"object"==typeof module?module.exports=OGVDecoderVideoVP8MTW:"function"==typeof define&&define.amd&&define([],(()=>OGVDecoderVideoVP8MTW));