// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2TR0m":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "6209dd6c157d5439";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"iwYUe":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "alcobasa", ciudadT = "Alcoba\xe7a";
var i_listado = 0, tiempo_video;
var div = document.getElementById("div-video-" + ciudad);
var video = document.getElementById("video-video-" + ciudad);
var h2 = document.getElementById("h2-video-" + ciudad);
var h3 = document.getElementById("h3-video-" + ciudad);
// Asignar funciones al navegador
window.onload = ()=>{
    document.write((0, _listadosJs.l));
    document.write((0, _debugJs.debug));
};
window.siguiente_video_alcobasa = cargar_alcobasa_video;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_alcobasa();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    cargar_alcobasa_video(1, 1);
    setTimeout(CambiarAutomaticamente, tiempo_video * 1000);
}
function cargar_alcobasa_video(incremento, parametro) {
    var w = video.clientWidth, h = video.clientHeight;
    var listado, comentario, c;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_mp4.alcobasa_mp4;
    listado = (0, _listadosJs.l).mp4.alcobasa_mp4[0];
    if (w > 600) {
        listado = (0, _listadosJs.l).mp4.alcobasa_mp4[1];
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).mp4.alcobasa_mp4[2];
        c = " grande ";
    }
    switch(parametro){
        case 1:
            i_listado = i_listado + incremento;
            if (i_listado > listado.length - 1) i_listado = 0;
            if (i_listado < 0) i_listado = listado.length - 1;
            video.src = listado[i_listado];
            h2.innerHTML = "Videos de " + ciudadT + " " + (i_listado + 1) + " de " + listado.length; //+ " carga " +  tiempo_carga + "msg";
            h3.innerHTML = comentario[i_listado]; //+ ' ' + i_listado +  "(horizontal"  +  c + ")" + " w=" + w + " h=" + h;  
            //h2.innerHTML='Presentación de Videos de '+ ciudad + " " + tiempo_carga;
            //h3.innerHTML=comentario[i_listado] + ' ' + i_listado +  "(video " +  c + ")" +" w=" + w + " h=" + h;            
            tiempo_video = (0, _listadosJs.l).duracion.alcobasa_duracion[i_listado];
            break;
        case 2:
            break; // ????
    }
}
function pantallaCompleta_alcobasa() {
    var s = {
        navigationUI: "hide"
    };
    if (div.requestFullscreen) {
        div.requestFullscreen(s);
        return;
    }
    if (div.webkitRequestFullscreen) {
        div.webkitRequestFullscreen(s);
        return;
    } //safari
    if (div.msRequestFullscreen) {
        div.msRequestFullscreen(s);
        return;
    } // IE11 
} // ctrl + h  ---> alcobasa - 'otra ciudad'
 /*var ciudad='alcobasa'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_alcobasa=cargar_alcobasa_video;  


var div=document.getElementById('div-'+ ciudad);
var img= new Image(), p= document.createElement("p"),i_listado = 0;


img.className='diapositivas-img-ciudad'; 
p.className="diapositivas-p-ciudad";
div.appendChild(p); 
div.appendChild(img);  

if (div==null) 
  console.log("div con id=div-%s no existe y la imagen de %s no se vera",ciudad,ciudad); 
console.log("style=%s",img.className);
solo();


function cargar_alcobasa_video(incremento,parametro){
  var w=document.documentElement.clientWidth,h=document.documentElement.clientHeight;
  var listado, comentario;
  // Dependiendo del ancho cargo un conjunto distintos de fotos y la ciudad
  comentario= w>h ? l.comentario_1.alcobasa_1: l.comentario_6.alcobasa_6;
  listado= w>h ? l.fotos.alcobasa_png_300_1: l.fotos.alcobasa_png_300_6; 
  if (w >  600) listado= w>h ? l.fotos.alcobasa_png_600_1: l.fotos.alcobasa_png_600_6;
  if (w > 1000) listado= w>h ? l.fotos.alcobasa_png_900_1: l.fotos.alcobasa_png_900_6;
 
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1; 
      img.src=listado[i_listado];
      img.alt=comentario[i_listado] + ' ' + i_listado;
      p.innerHTML=comentario[i_listado] + ' ' + i_listado;
      //console.log("Fin carga de imagen= %s con éxito de la ciudad %s ",i_listado,ciudad);
      break;
    case 2: break; // ????
  }  
}
*/  /*
var ciudad='alcobasa'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_video_alcobasa=cargar_video_alcobasa;  
var p= document.createElement("p"),i_listado = 0;

var d=document.getElementById('div-video-'+ ciudad);
var video=document.createElement('video');

p.className='diapositivas-horizontal-p-ciudad';
video.autoplay=true; video.muted=true; video.controls=true;video.loop=true;
d.appendChild(video);

solo();
function solo() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_video_alcobasa(inc,1);  
  setTimeout(solo, t);
}

function cargar_video_alcobasa(incremento,parametro){
  var ww=video.clientWidth;
  var listado, comentario,c;
  listado=l.mp4.alcobasa_mp4[0]; c= " pequeña " ;
  if (ww >  600)  { listado=l.mp4.alcobasa_mp4[1];c= " mediana " ; }
  if (ww > 1000)  { listado=l.mp4.alcobasa_mp4[2];c= " grande " ;}
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1; 
      video.src=listado[i_listado];
      video.alt=comentario[i_listado] + ' ' + i_listado;
      //p.innerHTML=comentario[i_listado] + ' ' + i_listado + c;      
      break;
    case 2: break; // ????
  }    
}
*/  /*  var t=video.duration*1000; // no funciona ????
  if (t==NaN ) t=tiempo_video*1000;
  if (t<5000) t=5000;
  //alert(tiempo_video*1000);*/ 

},{"/src/12-js/listados.js":"1pr6H","/src/12-js/debug.js":"ct35Q"}],"1pr6H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l);
parcelHelpers.export(exports, "tiempo_carga", ()=>tiempo_carga);
parcelHelpers.export(exports, "escribir_tiempo", ()=>escribir_tiempo);
var nazare_mp4 = [
    "Portugal playa sur Nazar\xe9",
    "Portugal playa sur Nazar\xe9",
    "Portugal playa sur Nazar\xe9",
    "Portugal olas Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9"
];
var fatima_mp4 = [
    "Portugal  interior Santuario de F\xe1tima",
    "Portugal  interior Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima"
];
var obidos_mp4 = [
    "Portugal castillo de Obidos",
    "Portugal ciudad amurallada de Obidos",
    "Portugal ciudad amurallada de Obidos",
    "Portugal Obidos"
];
var alcobasa_mp4 = [
    "Portugal vista interior del Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a"
];
var sintra_mp4 = [
    "Portugal Palacio Nacional de Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra"
];
var nazare_1 = [
    "Portugal Santuario de Nuestra Se\xf1ora de Nazar\xe9",
    "Portugal Puerta faro Nazar\xe9",
    "Portugal Vista desde el faro de Nazar\xe9",
    "Portugal Vista desde el faro de Nazar\xe9",
    "Portugal Playa Sur Nazar\xe9",
    "Portugal entrada faro Nazar\xe9",
    "Portugal ciudad de Nazar\xe9 ",
    "Portugal vista monta\xf1a faro Nazar\xe9",
    "Portugal playa Sur de Nazar\xe9",
    "Portugal frutos del mar de Nazar\xe9",
    "Portugal vista desde el faro de Nazar\xe9",
    "Portugal museo de surf faro de Nazar\xe9",
    "Portugal museo de surf faro de Nazar\xe9",
    "Portugal vista del faro Nazar\xe9",
    "Portugal playa norte de Nazar\xe9",
    "Portugal monta\xf1a del faro de Nazar\xe9",
    "Portugal faro de Nazar\xe9",
    "Portugal faro de Nazar\xe9"
];
var fatima_1 = [
    "Portugal Santuario de F\xe1tima",
    "Portugal lapidas de Jacinta y Lucia Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima de noche",
    "Portugal interior del Santuario de F\xe1tima",
    "Portugal exterior del Santuario de F\xe1tima",
    "Portugal exterior del Santuario de F\xe1tima",
    "Portugal exterior del Santuario de F\xe1tima"
];
var obidos_1 = [
    "Portugal castilo de Obidos",
    "Portugal castillo de Obidos",
    "Portugal museo Museu de Sardinha de Obidos",
    "Portugal vista de Obidos"
];
var alcobasa_1 = [
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal vista interior Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal jardines del Monasterio de Alcoba\xe7a"
];
var sintra_1 = [
    "Portugal Sintra",
    "Portugal sala das Pegas Sintra",
    "Portugal vista de Sintra",
    "Portugal Pal\xe1cio da Regaleira Sintra",
    "Portugal Palacio da Pena Sintra"
];
var nazare_6 = [
    "Portugal estatua faro Nazar\xe9",
    "Portugal museo faro Nazar\xe9",
    "Portugal faro Nazar\xe9",
    "Portugal caseta faro Nazar\xe9"
];
var fatima_6 = [
    "Portugal Santuario de F\xe1tima",
    "Portugal Imagen pastoras del Santuario de F\xe1tima",
    "Portugal imagen  del Santuario de F\xe1tima",
    "Portugal exterior delSantuario de F\xe1tima"
];
var obidos_6 = [
    "Portugal puerta de la muralla de Obidos",
    "Portugal muralla de Obidos",
    "Portugal puerta de la muralla Obidos"
];
var alcobasa_6 = [
    "Portugal exterior Monasterio de Alcoba\xe7a",
    "Portugal exterior Monasterio de Alcoba\xe7a",
    "Portugal interior Monasterio de Alcoba\xe7a",
    "Portugal interior Monasterio de Alcoba\xe7a",
    "Portugal interior Monasterio de Alcoba\xe7a"
];
var sintra_6 = [
    "Portugal ciudad de Sintra",
    "Portugal Pal\xe1cio Nacional Sintra",
    "Portugal Pal\xe1cio Nacional Sintra",
    "Portugal Pal\xe1cio da Regaleira Sintra",
    "Portugal Pal\xe1cio da pena Sintra",
    "Portugal Pal\xe1cio da pena Sintra",
    "Portugal Pal\xe1cio da Regaleira Sintra",
    "Portugal Pal\xe1cio da Regaleira Sintra"
];
var nazare_png_300_1 = [
    new URL(require("86781a753eb4dbf")),
    new URL(require("89ea5d03c92266e0")),
    new URL(require("4b3eab43661026ee")),
    new URL(require("1b58bb2c4e8118db")),
    new URL(require("a73d7c9e4390513b")),
    new URL(require("18f01d5dbbda959")),
    new URL(require("5b20b0e56b82945a")),
    new URL(require("c5cb6c0359b0662d")),
    new URL(require("a63b65706a9c9fe5")),
    new URL(require("e748f6caa373ab73")),
    new URL(require("dfdedac191fae4f0")),
    new URL(require("f6f096fdb88eaef6")),
    new URL(require("9280d8a758940830")),
    new URL(require("282ccbf2baeec961")),
    new URL(require("d39f9622f5686817")),
    new URL(require("483f2d56ab4cdedd")),
    new URL(require("da461ea778990854"))
];
var nazare_png_600_1 = [
    new URL(require("96f651fb571aa9eb")),
    new URL(require("e543a391b0f85f4f")),
    new URL(require("a8cf664de7077859")),
    new URL(require("598ca8ca53d8a49b")),
    new URL(require("3c3b7f9d3e56e115")),
    new URL(require("954440e7a3d1f441")),
    new URL(require("b4cb97e52f2cbd52")),
    new URL(require("7b09e4309565582d")),
    new URL(require("e6ea0af4531463e2")),
    new URL(require("42085257a46e5e09")),
    new URL(require("6b3ddeea96e7d95a")),
    new URL(require("afe3ae5977faa1f8")),
    new URL(require("9446df6f7494726d")),
    new URL(require("62a84e90f44c3be3")),
    new URL(require("a531b65afc6a06b0")),
    new URL(require("323e4a910dee7e0a")),
    new URL(require("5adaf0b1f2da779b"))
];
var nazare_png_900_1 = [
    new URL(require("18015bf652a8590c")),
    new URL(require("839e19b40af20bc9")),
    new URL(require("a51b127073443e8b")),
    new URL(require("334a20b09cebc20f")),
    new URL(require("d3c31bcf734c4b17")),
    new URL(require("91fb4da4c9f50617")),
    new URL(require("7951652e2eeb278f")),
    new URL(require("9d81a0598f30e880")),
    new URL(require("f7184a54f57fe61e")),
    new URL(require("aa4e305c904a8bdc")),
    new URL(require("e3c230bc4328e939")),
    new URL(require("91da9c9beb8cec92")),
    new URL(require("6788e9eb952c5639")),
    new URL(require("3e1f56c3a8f09a92")),
    new URL(require("ba8d1fe6ef07e224")),
    new URL(require("e7ed43fffc09e558")),
    new URL(require("eb7f4bebc9ae34f3"))
];
var nazare_png_300_6 = [
    new URL(require("f49bbc3ce90230f3")),
    new URL(require("c6cc8feb00c43ccc")),
    new URL(require("da3e98b22adbeb4d"))
];
var nazare_png_600_6 = [
    new URL(require("ac988f97513b753d")),
    new URL(require("9870197f68f46ce0")),
    new URL(require("1909d7c96cdc25f"))
];
var nazare_png_900_6 = [
    new URL(require("71900ce38a39f45e")),
    new URL(require("d10c891d581aa72e")),
    new URL(require("4e86e364e53b9592"))
];
var fatima_png_300_1 = [
    new URL(require("da9d375ff4cc6e20")),
    new URL(require("4dc71cac2c1091fe")),
    new URL(require("2ae7e13dc9f19b08")),
    new URL(require("d4a94a2ec96f0f2a")),
    new URL(require("4d0999fb1640b484")),
    new URL(require("7eb1276e543406ee")),
    new URL(require("a1c7d50e344e35d"))
];
var fatima_png_600_1 = [
    new URL(require("d8d3e9b2c45514ef")),
    new URL(require("73770b04ebc58a8f")),
    new URL(require("3e326606efe38636")),
    new URL(require("6911c8c8c7ec7f4b")),
    new URL(require("8bfeb5a28916238c")),
    new URL(require("f9da5f86d76bdb5b")),
    new URL(require("ab0ad55909afb45d"))
];
var fatima_png_900_1 = [
    new URL(require("12b4ab72d67dbba1")),
    new URL(require("3fdef08c5feabc1f")),
    new URL(require("97900455fc019c34")),
    new URL(require("b1db13bef3dedd4")),
    new URL(require("8c3d146eaaa021db")),
    new URL(require("8188eea6f1104e67")),
    new URL(require("ddf969591a3cfbba"))
];
var fatima_png_300_6 = [
    new URL(require("f51181bb6365decf")),
    new URL(require("cd282a7a417c03b7")),
    new URL(require("32d9f1c4543900f0"))
];
var fatima_png_600_6 = [
    new URL(require("e759ed436cf99224")),
    new URL(require("dfb837cbc24b9472")),
    new URL(require("e112f5b01b10cbb3"))
];
var fatima_png_900_6 = [
    new URL(require("1166f1f821e20afd")),
    new URL(require("201fc2d2fa0f7eac")),
    new URL(require("11280debdefd0431"))
];
var obidos_png_300_1 = [
    new URL(require("cdfa70ae1d308d00")),
    new URL(require("f34fe41922b2586d")),
    new URL(require("8fe9ec68514a39e3"))
];
var obidos_png_600_1 = [
    new URL(require("deb2151dfbb509cd")),
    new URL(require("10cc9bcddfb0a9e3")),
    new URL(require("8766a5d2d9a1cbe5"))
];
var obidos_png_900_1 = [
    new URL(require("2346505ad78baa47")),
    new URL(require("565cc7de1c720893")),
    new URL(require("20604925b297b483"))
];
var obidos_png_300_6 = [
    new URL(require("b60f28e19ed5645d")),
    new URL(require("46a3ac90ead8eb4b"))
];
var obidos_png_600_6 = [
    new URL(require("8f8930169555991d")),
    new URL(require("54bfe7ee4aef0962"))
];
var obidos_png_900_6 = [
    new URL(require("773d8be78472f983")),
    new URL(require("d562071e9c1ece6"))
];
var alcobasa_png_300_1 = [
    new URL(require("b4fcf97888be254")),
    new URL(require("9935775539310a4")),
    new URL(require("dfd60661f83422de"))
];
var alcobasa_png_600_1 = [
    new URL(require("9d0c04b5449c6e78")),
    new URL(require("720ccb4e93255b25")),
    new URL(require("6ccaff7eb0bdeb93"))
];
var alcobasa_png_900_1 = [
    new URL(require("4806d8e218627ab5")),
    new URL(require("2c4f60e32f378ca9")),
    new URL(require("865f538633d0b1dc"))
];
var alcobasa_png_300_6 = [
    new URL(require("39be71bc5a9474e0")),
    new URL(require("862f63336e6a3803")),
    new URL(require("64389f8910c4a5b9")),
    new URL(require("47d3b6b473ade444"))
];
var alcobasa_png_600_6 = [
    new URL(require("af58e9024f3ec2aa")),
    new URL(require("d5c714291b3e2173")),
    new URL(require("d9f14ea8509d3156")),
    new URL(require("e23e1493d8180c78"))
];
var alcobasa_png_900_6 = [
    new URL(require("bd8f00b86989f84b")),
    new URL(require("f164ec680e944d6d")),
    new URL(require("fc926fb4ed15df4")),
    new URL(require("77d47f70247ccaa0"))
];
var sintra_png_300_1 = [
    new URL(require("213ed12e877bdf8")),
    new URL(require("337f47ad9c8e55bb")),
    new URL(require("dc15afeda3fdbc10")),
    new URL(require("ffdc7890af793ea9"))
];
var sintra_png_600_1 = [
    new URL(require("dd871b27f50d719f")),
    new URL(require("e3ed8d3f9f24501d")),
    new URL(require("a661ec8bde091a63")),
    new URL(require("289dada425dcdbf0"))
];
var sintra_png_900_1 = [
    new URL(require("93ca55a06b72c0f4")),
    new URL(require("3343679c8bbbb107")),
    new URL(require("fb58c487e522e11b")),
    new URL(require("d696c059aa7292c1"))
];
var sintra_png_300_6 = [
    new URL(require("4f72da706ff07282")),
    new URL(require("2d95b671d5e6b31d")),
    new URL(require("2f4a2df8e9e6c6c5")),
    new URL(require("c26a8c456b0bfbbd")),
    new URL(require("3f701d22f6a1ae4f")),
    new URL(require("19450e227fa8d4e6")),
    new URL(require("1e27e0a9c5922d42"))
];
var sintra_png_600_6 = [
    new URL(require("a084f06dc30f536f")),
    new URL(require("2fa52e674a840793")),
    new URL(require("e94ec1065f59594f")),
    new URL(require("4a3d192459069081")),
    new URL(require("b65864aa197fa6d0")),
    new URL(require("c7939ca45e20c9e6")),
    new URL(require("4e948917a9e514ef"))
];
var sintra_png_900_6 = [
    new URL(require("3898a29ba68820")),
    new URL(require("26317caa31b191b2")),
    new URL(require("42715847c1bc4744")),
    new URL(require("421a5f52f1a54bf2")),
    new URL(require("7b382b2b0bbad026")),
    new URL(require("efcbb5cde267920c")),
    new URL(require("ecaccd9706afa493"))
];
var comentario_1 = {
    nazare_1: nazare_1,
    fatima_1: fatima_1,
    obidos_1: obidos_1,
    alcobasa_1: alcobasa_1,
    sintra_1: sintra_1
};
var comentario_6 = {
    nazare_6: nazare_6,
    fatima_6: fatima_6,
    obidos_6: obidos_6,
    alcobasa_6: alcobasa_6,
    sintra_6: sintra_6
};
var comentario_mp4 = {
    nazare_mp4: nazare_mp4,
    fatima_mp4: fatima_mp4,
    obidos_mp4: obidos_mp4,
    alcobasa_mp4: alcobasa_mp4,
    sintra_mp4: sintra_mp4
};
var fotos = {
    nazare_png_300_1: nazare_png_300_1,
    nazare_png_600_1: nazare_png_600_1,
    nazare_png_900_1: nazare_png_900_1,
    nazare_png_300_6: nazare_png_300_6,
    nazare_png_600_6: nazare_png_600_6,
    nazare_png_900_6: nazare_png_900_6,
    fatima_png_300_1: fatima_png_300_1,
    fatima_png_600_1: fatima_png_600_1,
    fatima_png_900_1: fatima_png_900_1,
    fatima_png_300_6: fatima_png_300_6,
    fatima_png_600_6: fatima_png_600_6,
    fatima_png_900_6: fatima_png_900_6,
    obidos_png_300_1: obidos_png_300_1,
    obidos_png_600_1: obidos_png_600_1,
    obidos_png_900_1: obidos_png_900_1,
    obidos_png_300_6: obidos_png_300_6,
    obidos_png_600_6: obidos_png_600_6,
    obidos_png_900_6: obidos_png_900_6,
    alcobasa_png_300_1: alcobasa_png_300_1,
    alcobasa_png_600_1: alcobasa_png_600_1,
    alcobasa_png_900_1: alcobasa_png_900_1,
    alcobasa_png_300_6: alcobasa_png_300_6,
    alcobasa_png_600_6: alcobasa_png_600_6,
    alcobasa_png_900_6: alcobasa_png_900_6,
    sintra_png_300_1: sintra_png_300_1,
    sintra_png_600_1: sintra_png_600_1,
    sintra_png_900_1: sintra_png_900_1,
    sintra_png_300_6: sintra_png_300_6,
    sintra_png_600_6: sintra_png_600_6,
    sintra_png_900_6: sintra_png_900_6
};
var alcobasa_mp4_320 = [
    new URL(require("29dd4c45ad77a411")),
    new URL(require("9ebc252dff86358a"))
];
var alcobasa_mp4_640 = [
    new URL(require("181e6b8ac3026ce3")),
    new URL(require("f0d63a691568917b"))
];
var alcobasa_mp4_1280 = [
    new URL(require("cb2bff42f9bf1da3")),
    new URL(require("2008e68ae020640b"))
];
var fatima_mp4_320 = [
    new URL(require("7703d2aff3ac19f2")),
    new URL(require("cc7873bdb72ab106"))
];
var fatima_mp4_640 = [
    new URL(require("ddb0c8ec6e1128ec")),
    new URL(require("f0fdfe553e8b2b8b"))
];
var fatima_mp4_1280 = [
    new URL(require("83fd77e6e3d1ed4d")),
    new URL(require("bfdc94773439b970"))
];
var nazare_mp4_320 = [
    new URL(require("e53408e84c34725c")),
    new URL(require("dee32d35a055d161")),
    new URL(require("8eb0fe6d497319ac")),
    new URL(require("2d4bf2da7d0a6ebf"))
];
var nazare_mp4_640 = [
    new URL(require("97707bd921d6bd97")),
    new URL(require("112c0986b11e3773")),
    new URL(require("3d504689dbdd2069")),
    new URL(require("38539e1f0ba5a0da"))
];
var nazare_mp4_1280 = [
    new URL(require("adf6607a48b65015")),
    new URL(require("6a060de4f8cd5f51")),
    new URL(require("a1a4532e178c00e4")),
    new URL(require("644f90a72aefea2f"))
];
var sintra_mp4_320 = [
    new URL(require("67704ca106e263d"))
];
var sintra_mp4_640 = [
    new URL(require("5aa9c5adff06bff6"))
];
var sintra_mp4_1280 = [
    new URL(require("d2192ee8df9e83c3"))
];
var obidos_mp4_320 = [
    new URL(require("11023e0d66f4a5c6")),
    new URL(require("a1c31f725c1b9044")),
    new URL(require("557036c03b3c0cf2"))
];
var obidos_mp4_640 = [
    new URL(require("cfcd6ed14b0881ce")),
    new URL(require("c49dc6a73b22dff2")),
    new URL(require("feb7bc20d8ad2999"))
];
var obidos_mp4_1280 = [
    new URL(require("44700e4b32d1904e")),
    new URL(require("b917fe1860ba64a6")),
    new URL(require("19f93dc81edaaaf1"))
];
var alcobasa_mp4 = [
    alcobasa_mp4_320,
    alcobasa_mp4_640,
    alcobasa_mp4_1280
];
var fatima_mp4 = [
    fatima_mp4_320,
    fatima_mp4_640,
    fatima_mp4_1280
];
var nazare_mp4 = [
    nazare_mp4_320,
    nazare_mp4_640,
    nazare_mp4_1280
];
var sintra_mp4 = [
    sintra_mp4_320,
    sintra_mp4_640,
    sintra_mp4_1280
];
var obidos_mp4 = [
    obidos_mp4_320,
    obidos_mp4_640,
    obidos_mp4_1280
];
var mp4 = {
    alcobasa_mp4: alcobasa_mp4,
    fatima_mp4: fatima_mp4,
    nazare_mp4: nazare_mp4,
    sintra_mp4: sintra_mp4,
    obidos_mp4: obidos_mp4
};
var alcobasa_duracion = [
    33,
    17
];
var fatima_duracion = [
    34,
    29
];
var nazare_duracion = [
    29,
    23,
    18,
    38
];
var sintra_duracion = [
    30
];
var obidos_duracion = [
    28,
    17,
    18
];
var duracion = {
    alcobasa_duracion: alcobasa_duracion,
    fatima_duracion: fatima_duracion,
    nazare_duracion: nazare_duracion,
    sintra_duracion: sintra_duracion,
    obidos_duracion: obidos_duracion
};
var ciudades = [
    "alcobasa",
    "nazare",
    "fatima",
    "obidos",
    "sintra"
];
var l = {
    comentario_1: comentario_1,
    comentario_6: comentario_6,
    comentario_mp4: comentario_mp4,
    fotos: fotos,
    mp4: mp4,
    ciudades: ciudades,
    duracion: duracion
};
var tiempo_carga = 10; // solo se puede leer fuera para eesribir utilizar la función
function escribir_tiempo(t) {
    tiempo_carga = t;
} // Para escibir los datos

},{"86781a753eb4dbf":"7WNIL","89ea5d03c92266e0":"ffbre","4b3eab43661026ee":"2Q3vT","1b58bb2c4e8118db":"gOFnv","a73d7c9e4390513b":"8VHXL","18f01d5dbbda959":"03UQJ","5b20b0e56b82945a":"eIR1l","c5cb6c0359b0662d":"a5eiG","a63b65706a9c9fe5":"3qH9c","e748f6caa373ab73":"3AAf4","dfdedac191fae4f0":"43ffd","f6f096fdb88eaef6":"koKK4","9280d8a758940830":"dOA8L","282ccbf2baeec961":"Ji336","d39f9622f5686817":"kSi9W","483f2d56ab4cdedd":"hWWT1","da461ea778990854":"b6CKt","96f651fb571aa9eb":"iOwo5","e543a391b0f85f4f":"gn7cV","a8cf664de7077859":"7syQQ","598ca8ca53d8a49b":"lbwLS","3c3b7f9d3e56e115":"3xlSn","954440e7a3d1f441":"bBi93","b4cb97e52f2cbd52":"01Rak","7b09e4309565582d":"bSRBN","e6ea0af4531463e2":"4tnGC","42085257a46e5e09":"3zGw2","6b3ddeea96e7d95a":"hTAYA","afe3ae5977faa1f8":"4AK7l","9446df6f7494726d":"c4zyB","62a84e90f44c3be3":"8jIKr","a531b65afc6a06b0":"2wsx8","323e4a910dee7e0a":"a9Rhf","5adaf0b1f2da779b":"fpoHA","18015bf652a8590c":"vlvf4","839e19b40af20bc9":"gNK8Y","a51b127073443e8b":"cOsug","334a20b09cebc20f":"lbdo6","d3c31bcf734c4b17":"1ptNT","91fb4da4c9f50617":"kjapj","7951652e2eeb278f":"dxgUN","9d81a0598f30e880":"ccvMd","f7184a54f57fe61e":"3kwFd","aa4e305c904a8bdc":"hL8wB","e3c230bc4328e939":"AX8Ks","91da9c9beb8cec92":"1FOee","6788e9eb952c5639":"7FK0L","3e1f56c3a8f09a92":"2EdTC","ba8d1fe6ef07e224":"27K5a","e7ed43fffc09e558":"bHkSY","eb7f4bebc9ae34f3":"kYoaN","f49bbc3ce90230f3":"bhI1b","c6cc8feb00c43ccc":"goRQU","da3e98b22adbeb4d":"lRp1h","ac988f97513b753d":"545tJ","9870197f68f46ce0":"cbD8l","1909d7c96cdc25f":"ghDxp","71900ce38a39f45e":"1Pjvv","d10c891d581aa72e":"68Mes","4e86e364e53b9592":"7MjwA","da9d375ff4cc6e20":"adDHG","4dc71cac2c1091fe":"4JHQz","2ae7e13dc9f19b08":"6rmRd","d4a94a2ec96f0f2a":"65fdG","4d0999fb1640b484":"iWa9Y","7eb1276e543406ee":"hP53V","a1c7d50e344e35d":"5SpBQ","d8d3e9b2c45514ef":"4lR9X","73770b04ebc58a8f":"gUlLZ","3e326606efe38636":"4IAgU","6911c8c8c7ec7f4b":"8g9uY","8bfeb5a28916238c":"eEHtk","f9da5f86d76bdb5b":"bHrhC","ab0ad55909afb45d":"hmJzQ","12b4ab72d67dbba1":"XKvfo","3fdef08c5feabc1f":"gEibH","97900455fc019c34":"duZ9Z","b1db13bef3dedd4":"b0AYY","8c3d146eaaa021db":"luhYV","8188eea6f1104e67":"9XSNc","ddf969591a3cfbba":"7zQQi","f51181bb6365decf":"bEpBe","cd282a7a417c03b7":"3yNjQ","32d9f1c4543900f0":"60zM0","e759ed436cf99224":"8QMEV","dfb837cbc24b9472":"cNDi5","e112f5b01b10cbb3":"b9Y1u","1166f1f821e20afd":"5hjPw","201fc2d2fa0f7eac":"c874O","11280debdefd0431":"6ogsr","cdfa70ae1d308d00":"Kt0uw","f34fe41922b2586d":"6g9eg","8fe9ec68514a39e3":"49Qvs","deb2151dfbb509cd":"hSkq2","10cc9bcddfb0a9e3":"jZtOb","8766a5d2d9a1cbe5":"7dcbs","2346505ad78baa47":"lIUUW","565cc7de1c720893":"jJ5Kc","20604925b297b483":"qmQtV","b60f28e19ed5645d":"arB8H","46a3ac90ead8eb4b":"3luQH","8f8930169555991d":"3lkc0","54bfe7ee4aef0962":"2zCIq","773d8be78472f983":"eaXL0","d562071e9c1ece6":"7C99s","b4fcf97888be254":"6HK1b","9935775539310a4":"atKat","dfd60661f83422de":"4e9hz","9d0c04b5449c6e78":"7GQqx","720ccb4e93255b25":"8Ls13","6ccaff7eb0bdeb93":"41pJU","4806d8e218627ab5":"fFFhJ","2c4f60e32f378ca9":"hY0kB","865f538633d0b1dc":"bqjZc","39be71bc5a9474e0":"bvZFj","862f63336e6a3803":"6aOtR","64389f8910c4a5b9":"1wpMf","47d3b6b473ade444":"dQYQX","af58e9024f3ec2aa":"9APK2","d5c714291b3e2173":"hOQl3","d9f14ea8509d3156":"flrbD","e23e1493d8180c78":"9UYVg","bd8f00b86989f84b":"3G5LL","f164ec680e944d6d":"qS9RH","fc926fb4ed15df4":"g1Dms","77d47f70247ccaa0":"9rAm5","213ed12e877bdf8":"9wUHU","337f47ad9c8e55bb":"7eOnU","dc15afeda3fdbc10":"keMDk","ffdc7890af793ea9":"9eZf0","dd871b27f50d719f":"8g7yz","e3ed8d3f9f24501d":"eZuJk","a661ec8bde091a63":"3xOnQ","289dada425dcdbf0":"9nXld","93ca55a06b72c0f4":"5VpxE","3343679c8bbbb107":"9yIWc","fb58c487e522e11b":"1pW2Z","d696c059aa7292c1":"6OK2P","4f72da706ff07282":"dUClP","2d95b671d5e6b31d":"eKTm8","2f4a2df8e9e6c6c5":"hKFDS","c26a8c456b0bfbbd":"cT200","3f701d22f6a1ae4f":"emQc1","19450e227fa8d4e6":"eacoT","1e27e0a9c5922d42":"7GdTx","a084f06dc30f536f":"7l1zL","2fa52e674a840793":"iPjmY","e94ec1065f59594f":"5WIa3","4a3d192459069081":"jS5ZL","b65864aa197fa6d0":"gL0yf","c7939ca45e20c9e6":"4ebwg","4e948917a9e514ef":"8z1EY","3898a29ba68820":"47yGV","26317caa31b191b2":"10ma1","42715847c1bc4744":"6oSFY","421a5f52f1a54bf2":"fkKhv","7b382b2b0bbad026":"c9NjA","efcbb5cde267920c":"gbRWk","ecaccd9706afa493":"7RxMF","29dd4c45ad77a411":"2h6Zj","9ebc252dff86358a":"e5ByD","181e6b8ac3026ce3":"y84Ge","f0d63a691568917b":"lBCfY","cb2bff42f9bf1da3":"5mHMa","2008e68ae020640b":"l8fBS","7703d2aff3ac19f2":"aAamK","cc7873bdb72ab106":"a6UOY","ddb0c8ec6e1128ec":"dg5hq","f0fdfe553e8b2b8b":"lhnfE","83fd77e6e3d1ed4d":"b4gdk","bfdc94773439b970":"h9HET","e53408e84c34725c":"ViP1f","dee32d35a055d161":"bMrK9","8eb0fe6d497319ac":"ayM7I","2d4bf2da7d0a6ebf":"9fhmF","97707bd921d6bd97":"dzgR1","112c0986b11e3773":"7Oxma","3d504689dbdd2069":"8kj5t","38539e1f0ba5a0da":"9hpHj","adf6607a48b65015":"35HfQ","6a060de4f8cd5f51":"bbs9p","a1a4532e178c00e4":"4JYMR","644f90a72aefea2f":"rx6Lk","67704ca106e263d":"5MEeh","5aa9c5adff06bff6":"4fv6b","d2192ee8df9e83c3":"4hSSk","11023e0d66f4a5c6":"8nhBR","a1c31f725c1b9044":"75apI","557036c03b3c0cf2":"kiwBB","cfcd6ed14b0881ce":"3jNmM","c49dc6a73b22dff2":"tHbiL","feb7bc20d8ad2999":"dXVo3","44700e4b32d1904e":"dyYDr","b917fe1860ba64a6":"cgT2T","19f93dc81edaaaf1":"jDy7L","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7WNIL":[function(require,module,exports) {
module.exports = require("2a6503bfa62dd6b1").getBundleURL("8pR7C") + "0.48981f22.png" + "?" + Date.now();

},{"2a6503bfa62dd6b1":"dhz1j"}],"ffbre":[function(require,module,exports) {
module.exports = require("2b310d895949d0d3").getBundleURL("8pR7C") + "1.f94ee4de.png" + "?" + Date.now();

},{"2b310d895949d0d3":"dhz1j"}],"2Q3vT":[function(require,module,exports) {
module.exports = require("7de5ff77fbbe777b").getBundleURL("8pR7C") + "2.31f5056c.png" + "?" + Date.now();

},{"7de5ff77fbbe777b":"dhz1j"}],"gOFnv":[function(require,module,exports) {
module.exports = require("e3ad9d963ec4de5e").getBundleURL("8pR7C") + "3.ce1b885f.png" + "?" + Date.now();

},{"e3ad9d963ec4de5e":"dhz1j"}],"8VHXL":[function(require,module,exports) {
module.exports = require("8580a82d81824e13").getBundleURL("8pR7C") + "4.6fe91547.png" + "?" + Date.now();

},{"8580a82d81824e13":"dhz1j"}],"03UQJ":[function(require,module,exports) {
module.exports = require("54a7afe3811dc267").getBundleURL("8pR7C") + "5.a917cfd3.png" + "?" + Date.now();

},{"54a7afe3811dc267":"dhz1j"}],"eIR1l":[function(require,module,exports) {
module.exports = require("67e061ff815560a6").getBundleURL("8pR7C") + "6.0d46346e.png" + "?" + Date.now();

},{"67e061ff815560a6":"dhz1j"}],"a5eiG":[function(require,module,exports) {
module.exports = require("429f87cbb64698a").getBundleURL("8pR7C") + "7.320708f3.png" + "?" + Date.now();

},{"429f87cbb64698a":"dhz1j"}],"3qH9c":[function(require,module,exports) {
module.exports = require("782bcd18de2e1b7d").getBundleURL("8pR7C") + "8.5e948736.png" + "?" + Date.now();

},{"782bcd18de2e1b7d":"dhz1j"}],"3AAf4":[function(require,module,exports) {
module.exports = require("13935ea591211f91").getBundleURL("8pR7C") + "9.ff59ab43.png" + "?" + Date.now();

},{"13935ea591211f91":"dhz1j"}],"43ffd":[function(require,module,exports) {
module.exports = require("74f5eb84a22cef57").getBundleURL("8pR7C") + "10.31b47b87.png" + "?" + Date.now();

},{"74f5eb84a22cef57":"dhz1j"}],"koKK4":[function(require,module,exports) {
module.exports = require("7f824816494688b").getBundleURL("8pR7C") + "11.cc89efaf.png" + "?" + Date.now();

},{"7f824816494688b":"dhz1j"}],"dOA8L":[function(require,module,exports) {
module.exports = require("b81d2de942c0fefe").getBundleURL("8pR7C") + "12.9cf068b9.png" + "?" + Date.now();

},{"b81d2de942c0fefe":"dhz1j"}],"Ji336":[function(require,module,exports) {
module.exports = require("5917d2465892a7dd").getBundleURL("8pR7C") + "13.3fd5fa74.png" + "?" + Date.now();

},{"5917d2465892a7dd":"dhz1j"}],"kSi9W":[function(require,module,exports) {
module.exports = require("6ec8cbfa3e1be120").getBundleURL("8pR7C") + "14.85f8074c.png" + "?" + Date.now();

},{"6ec8cbfa3e1be120":"dhz1j"}],"hWWT1":[function(require,module,exports) {
module.exports = require("72225f4556e21d9d").getBundleURL("8pR7C") + "15.b3971def.png" + "?" + Date.now();

},{"72225f4556e21d9d":"dhz1j"}],"b6CKt":[function(require,module,exports) {
module.exports = require("f588020696495624").getBundleURL("8pR7C") + "16.e924273a.png" + "?" + Date.now();

},{"f588020696495624":"dhz1j"}],"iOwo5":[function(require,module,exports) {
module.exports = require("2d3a344f0398c248").getBundleURL("8pR7C") + "0.827cb71f.png" + "?" + Date.now();

},{"2d3a344f0398c248":"dhz1j"}],"gn7cV":[function(require,module,exports) {
module.exports = require("99c2598c8eb1f1bb").getBundleURL("8pR7C") + "1.1ba72b2c.png" + "?" + Date.now();

},{"99c2598c8eb1f1bb":"dhz1j"}],"7syQQ":[function(require,module,exports) {
module.exports = require("9b9daea8f7b0317").getBundleURL("8pR7C") + "2.a537714e.png" + "?" + Date.now();

},{"9b9daea8f7b0317":"dhz1j"}],"lbwLS":[function(require,module,exports) {
module.exports = require("47ec807fcffa8ba4").getBundleURL("8pR7C") + "3.968442f0.png" + "?" + Date.now();

},{"47ec807fcffa8ba4":"dhz1j"}],"3xlSn":[function(require,module,exports) {
module.exports = require("64c4e655d88958fb").getBundleURL("8pR7C") + "4.1087c966.png" + "?" + Date.now();

},{"64c4e655d88958fb":"dhz1j"}],"bBi93":[function(require,module,exports) {
module.exports = require("652b7f4fb678efb2").getBundleURL("8pR7C") + "5.10b3d4d5.png" + "?" + Date.now();

},{"652b7f4fb678efb2":"dhz1j"}],"01Rak":[function(require,module,exports) {
module.exports = require("b861f33fe0fdc3f6").getBundleURL("8pR7C") + "6.b8b5ea54.png" + "?" + Date.now();

},{"b861f33fe0fdc3f6":"dhz1j"}],"bSRBN":[function(require,module,exports) {
module.exports = require("25f7c4ed35fe8da2").getBundleURL("8pR7C") + "7.a88fc70f.png" + "?" + Date.now();

},{"25f7c4ed35fe8da2":"dhz1j"}],"4tnGC":[function(require,module,exports) {
module.exports = require("7b969cb11b4f4024").getBundleURL("8pR7C") + "8.624d70bd.png" + "?" + Date.now();

},{"7b969cb11b4f4024":"dhz1j"}],"3zGw2":[function(require,module,exports) {
module.exports = require("8a404dfc12d4814e").getBundleURL("8pR7C") + "9.85986fa7.png" + "?" + Date.now();

},{"8a404dfc12d4814e":"dhz1j"}],"hTAYA":[function(require,module,exports) {
module.exports = require("c22cfaaf1e69f6d9").getBundleURL("8pR7C") + "10.5d974f61.png" + "?" + Date.now();

},{"c22cfaaf1e69f6d9":"dhz1j"}],"4AK7l":[function(require,module,exports) {
module.exports = require("9e288966b8521a35").getBundleURL("8pR7C") + "11.00514082.png" + "?" + Date.now();

},{"9e288966b8521a35":"dhz1j"}],"c4zyB":[function(require,module,exports) {
module.exports = require("a31e7411bc5a10eb").getBundleURL("8pR7C") + "12.8e43d119.png" + "?" + Date.now();

},{"a31e7411bc5a10eb":"dhz1j"}],"8jIKr":[function(require,module,exports) {
module.exports = require("83fa56261dcba451").getBundleURL("8pR7C") + "13.6d974d03.png" + "?" + Date.now();

},{"83fa56261dcba451":"dhz1j"}],"2wsx8":[function(require,module,exports) {
module.exports = require("90a6428d1bef9a65").getBundleURL("8pR7C") + "14.c01188a0.png" + "?" + Date.now();

},{"90a6428d1bef9a65":"dhz1j"}],"a9Rhf":[function(require,module,exports) {
module.exports = require("45a55491a9fb4324").getBundleURL("8pR7C") + "15.98c7edf9.png" + "?" + Date.now();

},{"45a55491a9fb4324":"dhz1j"}],"fpoHA":[function(require,module,exports) {
module.exports = require("3638c30ea3b5f569").getBundleURL("8pR7C") + "16.46395d71.png" + "?" + Date.now();

},{"3638c30ea3b5f569":"dhz1j"}],"vlvf4":[function(require,module,exports) {
module.exports = require("237c9524f253523c").getBundleURL("8pR7C") + "0.6135d861.png" + "?" + Date.now();

},{"237c9524f253523c":"dhz1j"}],"gNK8Y":[function(require,module,exports) {
module.exports = require("7f0833403c34ab26").getBundleURL("8pR7C") + "1.ab36ca3c.png" + "?" + Date.now();

},{"7f0833403c34ab26":"dhz1j"}],"cOsug":[function(require,module,exports) {
module.exports = require("4bda45c21b154829").getBundleURL("8pR7C") + "2.637b0503.png" + "?" + Date.now();

},{"4bda45c21b154829":"dhz1j"}],"lbdo6":[function(require,module,exports) {
module.exports = require("1618c18fce6d0fb0").getBundleURL("8pR7C") + "3.ea6e2859.png" + "?" + Date.now();

},{"1618c18fce6d0fb0":"dhz1j"}],"1ptNT":[function(require,module,exports) {
module.exports = require("8c657a605f458894").getBundleURL("8pR7C") + "4.302416e9.png" + "?" + Date.now();

},{"8c657a605f458894":"dhz1j"}],"kjapj":[function(require,module,exports) {
module.exports = require("ea609470c4635bde").getBundleURL("8pR7C") + "5.69800b21.png" + "?" + Date.now();

},{"ea609470c4635bde":"dhz1j"}],"dxgUN":[function(require,module,exports) {
module.exports = require("3921684cd64d6bed").getBundleURL("8pR7C") + "6.9611621f.png" + "?" + Date.now();

},{"3921684cd64d6bed":"dhz1j"}],"ccvMd":[function(require,module,exports) {
module.exports = require("ad62db3c980c34e9").getBundleURL("8pR7C") + "7.387a99b8.png" + "?" + Date.now();

},{"ad62db3c980c34e9":"dhz1j"}],"3kwFd":[function(require,module,exports) {
module.exports = require("294b274f81595bdb").getBundleURL("8pR7C") + "8.868e1eb3.png" + "?" + Date.now();

},{"294b274f81595bdb":"dhz1j"}],"hL8wB":[function(require,module,exports) {
module.exports = require("45343a46a9c39d9").getBundleURL("8pR7C") + "9.73cbc4df.png" + "?" + Date.now();

},{"45343a46a9c39d9":"dhz1j"}],"AX8Ks":[function(require,module,exports) {
module.exports = require("674c05afb59965ed").getBundleURL("8pR7C") + "10.5089e6a9.png" + "?" + Date.now();

},{"674c05afb59965ed":"dhz1j"}],"1FOee":[function(require,module,exports) {
module.exports = require("4643d651336715da").getBundleURL("8pR7C") + "11.f9276e6c.png" + "?" + Date.now();

},{"4643d651336715da":"dhz1j"}],"7FK0L":[function(require,module,exports) {
module.exports = require("d56d75ab61e422b2").getBundleURL("8pR7C") + "12.28e07f45.png" + "?" + Date.now();

},{"d56d75ab61e422b2":"dhz1j"}],"2EdTC":[function(require,module,exports) {
module.exports = require("dec91c66b847fb47").getBundleURL("8pR7C") + "13.3e9a788c.png" + "?" + Date.now();

},{"dec91c66b847fb47":"dhz1j"}],"27K5a":[function(require,module,exports) {
module.exports = require("8c423aaa77824dda").getBundleURL("8pR7C") + "14.55e925f3.png" + "?" + Date.now();

},{"8c423aaa77824dda":"dhz1j"}],"bHkSY":[function(require,module,exports) {
module.exports = require("e44219acfc142ed7").getBundleURL("8pR7C") + "15.45dd04ca.png" + "?" + Date.now();

},{"e44219acfc142ed7":"dhz1j"}],"kYoaN":[function(require,module,exports) {
module.exports = require("ea5d4b9255959948").getBundleURL("8pR7C") + "16.da3dfac2.png" + "?" + Date.now();

},{"ea5d4b9255959948":"dhz1j"}],"bhI1b":[function(require,module,exports) {
module.exports = require("a12c2559d4a6db0c").getBundleURL("8pR7C") + "0.1859081d.png" + "?" + Date.now();

},{"a12c2559d4a6db0c":"dhz1j"}],"goRQU":[function(require,module,exports) {
module.exports = require("df2c6809499d5986").getBundleURL("8pR7C") + "1.927d66ed.png" + "?" + Date.now();

},{"df2c6809499d5986":"dhz1j"}],"lRp1h":[function(require,module,exports) {
module.exports = require("bff5f788bfce6448").getBundleURL("8pR7C") + "2.363f17fd.png" + "?" + Date.now();

},{"bff5f788bfce6448":"dhz1j"}],"545tJ":[function(require,module,exports) {
module.exports = require("d3563ae12c8ea725").getBundleURL("8pR7C") + "0.a7ae4123.png" + "?" + Date.now();

},{"d3563ae12c8ea725":"dhz1j"}],"cbD8l":[function(require,module,exports) {
module.exports = require("3dbaecd5b4c8dde8").getBundleURL("8pR7C") + "1.88470ddf.png" + "?" + Date.now();

},{"3dbaecd5b4c8dde8":"dhz1j"}],"ghDxp":[function(require,module,exports) {
module.exports = require("6e24130a8aabde25").getBundleURL("8pR7C") + "2.de54b28c.png" + "?" + Date.now();

},{"6e24130a8aabde25":"dhz1j"}],"1Pjvv":[function(require,module,exports) {
module.exports = require("c343d80514808694").getBundleURL("8pR7C") + "0.bdeefb48.png" + "?" + Date.now();

},{"c343d80514808694":"dhz1j"}],"68Mes":[function(require,module,exports) {
module.exports = require("423f190f20969a0").getBundleURL("8pR7C") + "1.c862755d.png" + "?" + Date.now();

},{"423f190f20969a0":"dhz1j"}],"7MjwA":[function(require,module,exports) {
module.exports = require("37e4ee17ae9e7a6c").getBundleURL("8pR7C") + "2.3a3879c0.png" + "?" + Date.now();

},{"37e4ee17ae9e7a6c":"dhz1j"}],"adDHG":[function(require,module,exports) {
module.exports = require("c82410e8d1dd6f48").getBundleURL("8pR7C") + "0.2d5254b4.png" + "?" + Date.now();

},{"c82410e8d1dd6f48":"dhz1j"}],"4JHQz":[function(require,module,exports) {
module.exports = require("e9c90931c55600e4").getBundleURL("8pR7C") + "1.53be37fa.png" + "?" + Date.now();

},{"e9c90931c55600e4":"dhz1j"}],"6rmRd":[function(require,module,exports) {
module.exports = require("23d8028fc230044c").getBundleURL("8pR7C") + "2.f6226c8b.png" + "?" + Date.now();

},{"23d8028fc230044c":"dhz1j"}],"65fdG":[function(require,module,exports) {
module.exports = require("11692cd615ca6483").getBundleURL("8pR7C") + "3.cbffaa2e.png" + "?" + Date.now();

},{"11692cd615ca6483":"dhz1j"}],"iWa9Y":[function(require,module,exports) {
module.exports = require("9ff30e63c688b9cf").getBundleURL("8pR7C") + "4.13acbc59.png" + "?" + Date.now();

},{"9ff30e63c688b9cf":"dhz1j"}],"hP53V":[function(require,module,exports) {
module.exports = require("8f2919d4b122286d").getBundleURL("8pR7C") + "5.ef65f0ad.png" + "?" + Date.now();

},{"8f2919d4b122286d":"dhz1j"}],"5SpBQ":[function(require,module,exports) {
module.exports = require("1c0b83e66b2859dd").getBundleURL("8pR7C") + "6.93bb63df.png" + "?" + Date.now();

},{"1c0b83e66b2859dd":"dhz1j"}],"4lR9X":[function(require,module,exports) {
module.exports = require("89b9ae184167f1ac").getBundleURL("8pR7C") + "0.c7b4b27a.png" + "?" + Date.now();

},{"89b9ae184167f1ac":"dhz1j"}],"gUlLZ":[function(require,module,exports) {
module.exports = require("d1e65ff59e6c43e6").getBundleURL("8pR7C") + "1.a62dfbae.png" + "?" + Date.now();

},{"d1e65ff59e6c43e6":"dhz1j"}],"4IAgU":[function(require,module,exports) {
module.exports = require("bb6d09cfc212ae27").getBundleURL("8pR7C") + "2.e3978c80.png" + "?" + Date.now();

},{"bb6d09cfc212ae27":"dhz1j"}],"8g9uY":[function(require,module,exports) {
module.exports = require("295edc9ac7f6c455").getBundleURL("8pR7C") + "3.4641ec5b.png" + "?" + Date.now();

},{"295edc9ac7f6c455":"dhz1j"}],"eEHtk":[function(require,module,exports) {
module.exports = require("15cfbb009d4bb754").getBundleURL("8pR7C") + "4.46679935.png" + "?" + Date.now();

},{"15cfbb009d4bb754":"dhz1j"}],"bHrhC":[function(require,module,exports) {
module.exports = require("a52079966f80b3d2").getBundleURL("8pR7C") + "5.7cb7235f.png" + "?" + Date.now();

},{"a52079966f80b3d2":"dhz1j"}],"hmJzQ":[function(require,module,exports) {
module.exports = require("35de820de0b49929").getBundleURL("8pR7C") + "6.25e0793b.png" + "?" + Date.now();

},{"35de820de0b49929":"dhz1j"}],"XKvfo":[function(require,module,exports) {
module.exports = require("238eaa9ebe4f8165").getBundleURL("8pR7C") + "0.3c81352a.png" + "?" + Date.now();

},{"238eaa9ebe4f8165":"dhz1j"}],"gEibH":[function(require,module,exports) {
module.exports = require("fe0f413b49e39db5").getBundleURL("8pR7C") + "1.5cc77829.png" + "?" + Date.now();

},{"fe0f413b49e39db5":"dhz1j"}],"duZ9Z":[function(require,module,exports) {
module.exports = require("df57d3d3483a9cc7").getBundleURL("8pR7C") + "2.8e275dc1.png" + "?" + Date.now();

},{"df57d3d3483a9cc7":"dhz1j"}],"b0AYY":[function(require,module,exports) {
module.exports = require("dcd36d6644f736c9").getBundleURL("8pR7C") + "3.a9db7ab7.png" + "?" + Date.now();

},{"dcd36d6644f736c9":"dhz1j"}],"luhYV":[function(require,module,exports) {
module.exports = require("cda0c2aa9025f345").getBundleURL("8pR7C") + "4.e32a50ca.png" + "?" + Date.now();

},{"cda0c2aa9025f345":"dhz1j"}],"9XSNc":[function(require,module,exports) {
module.exports = require("629b6e45633513a1").getBundleURL("8pR7C") + "5.c1536481.png" + "?" + Date.now();

},{"629b6e45633513a1":"dhz1j"}],"7zQQi":[function(require,module,exports) {
module.exports = require("d64cbc9b9178e86e").getBundleURL("8pR7C") + "6.288f575f.png" + "?" + Date.now();

},{"d64cbc9b9178e86e":"dhz1j"}],"bEpBe":[function(require,module,exports) {
module.exports = require("f89f861cc22a5b3c").getBundleURL("8pR7C") + "0.1fd51615.png" + "?" + Date.now();

},{"f89f861cc22a5b3c":"dhz1j"}],"3yNjQ":[function(require,module,exports) {
module.exports = require("2cdf70112e5cff06").getBundleURL("8pR7C") + "1.e84c2436.png" + "?" + Date.now();

},{"2cdf70112e5cff06":"dhz1j"}],"60zM0":[function(require,module,exports) {
module.exports = require("f0ce0f76a036b600").getBundleURL("8pR7C") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"f0ce0f76a036b600":"dhz1j"}],"8QMEV":[function(require,module,exports) {
module.exports = require("224b7107bac7d4e0").getBundleURL("8pR7C") + "0.7a68699b.png" + "?" + Date.now();

},{"224b7107bac7d4e0":"dhz1j"}],"cNDi5":[function(require,module,exports) {
module.exports = require("537f513e99185f48").getBundleURL("8pR7C") + "1.fff421cb.png" + "?" + Date.now();

},{"537f513e99185f48":"dhz1j"}],"b9Y1u":[function(require,module,exports) {
module.exports = require("3d44bf6827d06b0a").getBundleURL("8pR7C") + "2.2fdbefa7.png" + "?" + Date.now();

},{"3d44bf6827d06b0a":"dhz1j"}],"5hjPw":[function(require,module,exports) {
module.exports = require("86b9a1414e7c18ff").getBundleURL("8pR7C") + "0.5282a781.png" + "?" + Date.now();

},{"86b9a1414e7c18ff":"dhz1j"}],"c874O":[function(require,module,exports) {
module.exports = require("27211d14f8faefc4").getBundleURL("8pR7C") + "1.6a9b3b01.png" + "?" + Date.now();

},{"27211d14f8faefc4":"dhz1j"}],"6ogsr":[function(require,module,exports) {
module.exports = require("a96096006c696df9").getBundleURL("8pR7C") + "2.6ed29ec3.png" + "?" + Date.now();

},{"a96096006c696df9":"dhz1j"}],"Kt0uw":[function(require,module,exports) {
module.exports = require("d6543ca55104c436").getBundleURL("8pR7C") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"d6543ca55104c436":"dhz1j"}],"6g9eg":[function(require,module,exports) {
module.exports = require("89b4fde540019c51").getBundleURL("8pR7C") + "1.065ffd47.png" + "?" + Date.now();

},{"89b4fde540019c51":"dhz1j"}],"49Qvs":[function(require,module,exports) {
module.exports = require("7038a0046acac4a5").getBundleURL("8pR7C") + "2.29f32c63.png" + "?" + Date.now();

},{"7038a0046acac4a5":"dhz1j"}],"hSkq2":[function(require,module,exports) {
module.exports = require("321097220344d90e").getBundleURL("8pR7C") + "0.c2bc436e.png" + "?" + Date.now();

},{"321097220344d90e":"dhz1j"}],"jZtOb":[function(require,module,exports) {
module.exports = require("27b27dd1207082f0").getBundleURL("8pR7C") + "1.e224ca18.png" + "?" + Date.now();

},{"27b27dd1207082f0":"dhz1j"}],"7dcbs":[function(require,module,exports) {
module.exports = require("f0fef3a6ce25961b").getBundleURL("8pR7C") + "2.20af644b.png" + "?" + Date.now();

},{"f0fef3a6ce25961b":"dhz1j"}],"lIUUW":[function(require,module,exports) {
module.exports = require("9646b643395656d5").getBundleURL("8pR7C") + "0.740b269f.png" + "?" + Date.now();

},{"9646b643395656d5":"dhz1j"}],"jJ5Kc":[function(require,module,exports) {
module.exports = require("4ffa4481abc6ae0e").getBundleURL("8pR7C") + "1.88c581e4.png" + "?" + Date.now();

},{"4ffa4481abc6ae0e":"dhz1j"}],"qmQtV":[function(require,module,exports) {
module.exports = require("38c75abc4feef631").getBundleURL("8pR7C") + "2.e91aa1d2.png" + "?" + Date.now();

},{"38c75abc4feef631":"dhz1j"}],"arB8H":[function(require,module,exports) {
module.exports = require("deac6a1e20de3439").getBundleURL("8pR7C") + "0.1bd287a0.png" + "?" + Date.now();

},{"deac6a1e20de3439":"dhz1j"}],"3luQH":[function(require,module,exports) {
module.exports = require("2ab049c007c1d1a").getBundleURL("8pR7C") + "1.d58a5780.png" + "?" + Date.now();

},{"2ab049c007c1d1a":"dhz1j"}],"3lkc0":[function(require,module,exports) {
module.exports = require("148d70b7e6cc11c6").getBundleURL("8pR7C") + "0.d9a399c3.png" + "?" + Date.now();

},{"148d70b7e6cc11c6":"dhz1j"}],"2zCIq":[function(require,module,exports) {
module.exports = require("f6add08bac92b32a").getBundleURL("8pR7C") + "1.062ed605.png" + "?" + Date.now();

},{"f6add08bac92b32a":"dhz1j"}],"eaXL0":[function(require,module,exports) {
module.exports = require("d3d2eb931033c37a").getBundleURL("8pR7C") + "0.7a9f2455.png" + "?" + Date.now();

},{"d3d2eb931033c37a":"dhz1j"}],"7C99s":[function(require,module,exports) {
module.exports = require("7479d37f7cf47806").getBundleURL("8pR7C") + "1.572a6598.png" + "?" + Date.now();

},{"7479d37f7cf47806":"dhz1j"}],"6HK1b":[function(require,module,exports) {
module.exports = require("f62559a3185681b8").getBundleURL("8pR7C") + "0.0a92d131.png" + "?" + Date.now();

},{"f62559a3185681b8":"dhz1j"}],"atKat":[function(require,module,exports) {
module.exports = require("c97d1116a6fc4d07").getBundleURL("8pR7C") + "1.d24763ee.png" + "?" + Date.now();

},{"c97d1116a6fc4d07":"dhz1j"}],"4e9hz":[function(require,module,exports) {
module.exports = require("d4cef63ce491d947").getBundleURL("8pR7C") + "2.0e1b919c.png" + "?" + Date.now();

},{"d4cef63ce491d947":"dhz1j"}],"7GQqx":[function(require,module,exports) {
module.exports = require("184be519313aa0f6").getBundleURL("8pR7C") + "0.fda31a8c.png" + "?" + Date.now();

},{"184be519313aa0f6":"dhz1j"}],"8Ls13":[function(require,module,exports) {
module.exports = require("ff73efc93995564a").getBundleURL("8pR7C") + "1.36e21bb7.png" + "?" + Date.now();

},{"ff73efc93995564a":"dhz1j"}],"41pJU":[function(require,module,exports) {
module.exports = require("f71a481f9e591d96").getBundleURL("8pR7C") + "2.845e9168.png" + "?" + Date.now();

},{"f71a481f9e591d96":"dhz1j"}],"fFFhJ":[function(require,module,exports) {
module.exports = require("6cffa833aea9d512").getBundleURL("8pR7C") + "0.d1a19ca9.png" + "?" + Date.now();

},{"6cffa833aea9d512":"dhz1j"}],"hY0kB":[function(require,module,exports) {
module.exports = require("ee7629e89ab6aa65").getBundleURL("8pR7C") + "1.16a743db.png" + "?" + Date.now();

},{"ee7629e89ab6aa65":"dhz1j"}],"bqjZc":[function(require,module,exports) {
module.exports = require("33a4e2903c218911").getBundleURL("8pR7C") + "2.3ecdc17d.png" + "?" + Date.now();

},{"33a4e2903c218911":"dhz1j"}],"bvZFj":[function(require,module,exports) {
module.exports = require("b57235488f63a1c3").getBundleURL("8pR7C") + "0.fd0add9a.png" + "?" + Date.now();

},{"b57235488f63a1c3":"dhz1j"}],"6aOtR":[function(require,module,exports) {
module.exports = require("b7305f1f4df22a").getBundleURL("8pR7C") + "1.2192498e.png" + "?" + Date.now();

},{"b7305f1f4df22a":"dhz1j"}],"1wpMf":[function(require,module,exports) {
module.exports = require("bb9d1fbcdd44a583").getBundleURL("8pR7C") + "2.ab8117eb.png" + "?" + Date.now();

},{"bb9d1fbcdd44a583":"dhz1j"}],"dQYQX":[function(require,module,exports) {
module.exports = require("ec1061cf46397153").getBundleURL("8pR7C") + "3.1fe13043.png" + "?" + Date.now();

},{"ec1061cf46397153":"dhz1j"}],"9APK2":[function(require,module,exports) {
module.exports = require("f532de76d2c54311").getBundleURL("8pR7C") + "0.27a8c375.png" + "?" + Date.now();

},{"f532de76d2c54311":"dhz1j"}],"hOQl3":[function(require,module,exports) {
module.exports = require("918508095cd176db").getBundleURL("8pR7C") + "1.f500f41c.png" + "?" + Date.now();

},{"918508095cd176db":"dhz1j"}],"flrbD":[function(require,module,exports) {
module.exports = require("a8874645bf7e2673").getBundleURL("8pR7C") + "2.a8b32497.png" + "?" + Date.now();

},{"a8874645bf7e2673":"dhz1j"}],"9UYVg":[function(require,module,exports) {
module.exports = require("10f205b41b9b824a").getBundleURL("8pR7C") + "3.6650c9b1.png" + "?" + Date.now();

},{"10f205b41b9b824a":"dhz1j"}],"3G5LL":[function(require,module,exports) {
module.exports = require("b6967af13ee347be").getBundleURL("8pR7C") + "0.3a521425.png" + "?" + Date.now();

},{"b6967af13ee347be":"dhz1j"}],"qS9RH":[function(require,module,exports) {
module.exports = require("5127d2f5520f9f8a").getBundleURL("8pR7C") + "1.69dd99e1.png" + "?" + Date.now();

},{"5127d2f5520f9f8a":"dhz1j"}],"g1Dms":[function(require,module,exports) {
module.exports = require("87dd4788028628a6").getBundleURL("8pR7C") + "2.63a32ea2.png" + "?" + Date.now();

},{"87dd4788028628a6":"dhz1j"}],"9rAm5":[function(require,module,exports) {
module.exports = require("c245b571ddea5287").getBundleURL("8pR7C") + "3.74bfe1cd.png" + "?" + Date.now();

},{"c245b571ddea5287":"dhz1j"}],"9wUHU":[function(require,module,exports) {
module.exports = require("161272adad56ad5c").getBundleURL("8pR7C") + "0.5c07456d.png" + "?" + Date.now();

},{"161272adad56ad5c":"dhz1j"}],"7eOnU":[function(require,module,exports) {
module.exports = require("21a4e581f79ee5fc").getBundleURL("8pR7C") + "1.9e2781aa.png" + "?" + Date.now();

},{"21a4e581f79ee5fc":"dhz1j"}],"keMDk":[function(require,module,exports) {
module.exports = require("d3d7c798fd11ae4b").getBundleURL("8pR7C") + "2.80d8a9dc.png" + "?" + Date.now();

},{"d3d7c798fd11ae4b":"dhz1j"}],"9eZf0":[function(require,module,exports) {
module.exports = require("87f7393607ffc3b0").getBundleURL("8pR7C") + "3.4505c156.png" + "?" + Date.now();

},{"87f7393607ffc3b0":"dhz1j"}],"8g7yz":[function(require,module,exports) {
module.exports = require("9c170ef47bc11dac").getBundleURL("8pR7C") + "0.a5627eb9.png" + "?" + Date.now();

},{"9c170ef47bc11dac":"dhz1j"}],"eZuJk":[function(require,module,exports) {
module.exports = require("e91adbc7436f1b57").getBundleURL("8pR7C") + "1.29be576d.png" + "?" + Date.now();

},{"e91adbc7436f1b57":"dhz1j"}],"3xOnQ":[function(require,module,exports) {
module.exports = require("c4301f7e60d365b6").getBundleURL("8pR7C") + "2.2c9d3072.png" + "?" + Date.now();

},{"c4301f7e60d365b6":"dhz1j"}],"9nXld":[function(require,module,exports) {
module.exports = require("6f8c9fb9af7f675d").getBundleURL("8pR7C") + "3.b10a87dc.png" + "?" + Date.now();

},{"6f8c9fb9af7f675d":"dhz1j"}],"5VpxE":[function(require,module,exports) {
module.exports = require("b6afce0c9343817a").getBundleURL("8pR7C") + "0.b66475e8.png" + "?" + Date.now();

},{"b6afce0c9343817a":"dhz1j"}],"9yIWc":[function(require,module,exports) {
module.exports = require("5afb20bd000255").getBundleURL("8pR7C") + "1.ae4ec885.png" + "?" + Date.now();

},{"5afb20bd000255":"dhz1j"}],"1pW2Z":[function(require,module,exports) {
module.exports = require("5080410a9d546f95").getBundleURL("8pR7C") + "2.89619ac1.png" + "?" + Date.now();

},{"5080410a9d546f95":"dhz1j"}],"6OK2P":[function(require,module,exports) {
module.exports = require("3428f51a889a8c9d").getBundleURL("8pR7C") + "3.e861d630.png" + "?" + Date.now();

},{"3428f51a889a8c9d":"dhz1j"}],"dUClP":[function(require,module,exports) {
module.exports = require("d047e7abdb6afd02").getBundleURL("8pR7C") + "0.c0daae54.png" + "?" + Date.now();

},{"d047e7abdb6afd02":"dhz1j"}],"eKTm8":[function(require,module,exports) {
module.exports = require("eb022388f4d6e65f").getBundleURL("8pR7C") + "1.81ba4702.png" + "?" + Date.now();

},{"eb022388f4d6e65f":"dhz1j"}],"hKFDS":[function(require,module,exports) {
module.exports = require("88ed9f878f2a2ae3").getBundleURL("8pR7C") + "2.2b44de5f.png" + "?" + Date.now();

},{"88ed9f878f2a2ae3":"dhz1j"}],"cT200":[function(require,module,exports) {
module.exports = require("c0902a15950a60dc").getBundleURL("8pR7C") + "3.0a3548da.png" + "?" + Date.now();

},{"c0902a15950a60dc":"dhz1j"}],"emQc1":[function(require,module,exports) {
module.exports = require("b9162535930c4af").getBundleURL("8pR7C") + "4.7dc2c927.png" + "?" + Date.now();

},{"b9162535930c4af":"dhz1j"}],"eacoT":[function(require,module,exports) {
module.exports = require("d0364c644b2b6411").getBundleURL("8pR7C") + "5.a3e2eda3.png" + "?" + Date.now();

},{"d0364c644b2b6411":"dhz1j"}],"7GdTx":[function(require,module,exports) {
module.exports = require("eecac6cb929f9552").getBundleURL("8pR7C") + "6.93d93658.png" + "?" + Date.now();

},{"eecac6cb929f9552":"dhz1j"}],"7l1zL":[function(require,module,exports) {
module.exports = require("6413448b587a9a76").getBundleURL("8pR7C") + "0.cf371571.png" + "?" + Date.now();

},{"6413448b587a9a76":"dhz1j"}],"iPjmY":[function(require,module,exports) {
module.exports = require("6b8e7de5aac3552b").getBundleURL("8pR7C") + "1.40091dcf.png" + "?" + Date.now();

},{"6b8e7de5aac3552b":"dhz1j"}],"5WIa3":[function(require,module,exports) {
module.exports = require("98f646601015536b").getBundleURL("8pR7C") + "2.62b42786.png" + "?" + Date.now();

},{"98f646601015536b":"dhz1j"}],"jS5ZL":[function(require,module,exports) {
module.exports = require("df86f0a5be9bd98d").getBundleURL("8pR7C") + "3.f21956af.png" + "?" + Date.now();

},{"df86f0a5be9bd98d":"dhz1j"}],"gL0yf":[function(require,module,exports) {
module.exports = require("f6c720c44926d870").getBundleURL("8pR7C") + "4.0978be17.png" + "?" + Date.now();

},{"f6c720c44926d870":"dhz1j"}],"4ebwg":[function(require,module,exports) {
module.exports = require("19b7cfd176592291").getBundleURL("8pR7C") + "5.4ebfd290.png" + "?" + Date.now();

},{"19b7cfd176592291":"dhz1j"}],"8z1EY":[function(require,module,exports) {
module.exports = require("740df619761c8fa").getBundleURL("8pR7C") + "6.1ace3298.png" + "?" + Date.now();

},{"740df619761c8fa":"dhz1j"}],"47yGV":[function(require,module,exports) {
module.exports = require("44e046325aa992b3").getBundleURL("8pR7C") + "0.10cb56bf.png" + "?" + Date.now();

},{"44e046325aa992b3":"dhz1j"}],"10ma1":[function(require,module,exports) {
module.exports = require("2f6c93b6b3bdb3cf").getBundleURL("8pR7C") + "1.0f7c63f1.png" + "?" + Date.now();

},{"2f6c93b6b3bdb3cf":"dhz1j"}],"6oSFY":[function(require,module,exports) {
module.exports = require("1462165220e78ea3").getBundleURL("8pR7C") + "2.6eebf201.png" + "?" + Date.now();

},{"1462165220e78ea3":"dhz1j"}],"fkKhv":[function(require,module,exports) {
module.exports = require("3f0093d9c89ce52b").getBundleURL("8pR7C") + "3.e3e59270.png" + "?" + Date.now();

},{"3f0093d9c89ce52b":"dhz1j"}],"c9NjA":[function(require,module,exports) {
module.exports = require("b15fae509d0d35c2").getBundleURL("8pR7C") + "4.a1a6b94b.png" + "?" + Date.now();

},{"b15fae509d0d35c2":"dhz1j"}],"gbRWk":[function(require,module,exports) {
module.exports = require("8c2cda6f6ec8260b").getBundleURL("8pR7C") + "5.04ee9ca2.png" + "?" + Date.now();

},{"8c2cda6f6ec8260b":"dhz1j"}],"7RxMF":[function(require,module,exports) {
module.exports = require("e9fed9f94e6de196").getBundleURL("8pR7C") + "6.2aa4cc81.png" + "?" + Date.now();

},{"e9fed9f94e6de196":"dhz1j"}],"2h6Zj":[function(require,module,exports) {
module.exports = require("e01dab42b3544e12").getBundleURL("8pR7C") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"e01dab42b3544e12":"dhz1j"}],"e5ByD":[function(require,module,exports) {
module.exports = require("9a2e0877cddb90d2").getBundleURL("8pR7C") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"9a2e0877cddb90d2":"dhz1j"}],"y84Ge":[function(require,module,exports) {
module.exports = require("dac12741d6003917").getBundleURL("8pR7C") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"dac12741d6003917":"dhz1j"}],"lBCfY":[function(require,module,exports) {
module.exports = require("c062e6c70e347c45").getBundleURL("8pR7C") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"c062e6c70e347c45":"dhz1j"}],"5mHMa":[function(require,module,exports) {
module.exports = require("8a5f69d4a305c54").getBundleURL("8pR7C") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"8a5f69d4a305c54":"dhz1j"}],"l8fBS":[function(require,module,exports) {
module.exports = require("b188398cede11787").getBundleURL("8pR7C") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"b188398cede11787":"dhz1j"}],"aAamK":[function(require,module,exports) {
module.exports = require("705b17cfba5986f7").getBundleURL("8pR7C") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"705b17cfba5986f7":"dhz1j"}],"a6UOY":[function(require,module,exports) {
module.exports = require("bf76de60ab4b76a").getBundleURL("8pR7C") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"bf76de60ab4b76a":"dhz1j"}],"dg5hq":[function(require,module,exports) {
module.exports = require("9bbd4ea9043f49e9").getBundleURL("8pR7C") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"9bbd4ea9043f49e9":"dhz1j"}],"lhnfE":[function(require,module,exports) {
module.exports = require("ab7996ac379c1a3f").getBundleURL("8pR7C") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"ab7996ac379c1a3f":"dhz1j"}],"b4gdk":[function(require,module,exports) {
module.exports = require("b350836f06b69213").getBundleURL("8pR7C") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"b350836f06b69213":"dhz1j"}],"h9HET":[function(require,module,exports) {
module.exports = require("7915354fccd2f54c").getBundleURL("8pR7C") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"7915354fccd2f54c":"dhz1j"}],"ViP1f":[function(require,module,exports) {
module.exports = require("fca842595003cfc7").getBundleURL("8pR7C") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"fca842595003cfc7":"dhz1j"}],"bMrK9":[function(require,module,exports) {
module.exports = require("1d964ca489605fdd").getBundleURL("8pR7C") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"1d964ca489605fdd":"dhz1j"}],"ayM7I":[function(require,module,exports) {
module.exports = require("58cfcaff9aba6c96").getBundleURL("8pR7C") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"58cfcaff9aba6c96":"dhz1j"}],"9fhmF":[function(require,module,exports) {
module.exports = require("8063e988cfd5df15").getBundleURL("8pR7C") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"8063e988cfd5df15":"dhz1j"}],"dzgR1":[function(require,module,exports) {
module.exports = require("219c27f210f769c6").getBundleURL("8pR7C") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"219c27f210f769c6":"dhz1j"}],"7Oxma":[function(require,module,exports) {
module.exports = require("54041b3bb8c4ea54").getBundleURL("8pR7C") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"54041b3bb8c4ea54":"dhz1j"}],"8kj5t":[function(require,module,exports) {
module.exports = require("80db2c9076f7454").getBundleURL("8pR7C") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"80db2c9076f7454":"dhz1j"}],"9hpHj":[function(require,module,exports) {
module.exports = require("67116d805fe16298").getBundleURL("8pR7C") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"67116d805fe16298":"dhz1j"}],"35HfQ":[function(require,module,exports) {
module.exports = require("d1ec044b5fc0194").getBundleURL("8pR7C") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"d1ec044b5fc0194":"dhz1j"}],"bbs9p":[function(require,module,exports) {
module.exports = require("d848622ff88c889e").getBundleURL("8pR7C") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"d848622ff88c889e":"dhz1j"}],"4JYMR":[function(require,module,exports) {
module.exports = require("a039ec90150033e6").getBundleURL("8pR7C") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"a039ec90150033e6":"dhz1j"}],"rx6Lk":[function(require,module,exports) {
module.exports = require("ccebdd7d6b917797").getBundleURL("8pR7C") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"ccebdd7d6b917797":"dhz1j"}],"5MEeh":[function(require,module,exports) {
module.exports = require("f3d2ad572f55ebd1").getBundleURL("8pR7C") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"f3d2ad572f55ebd1":"dhz1j"}],"4fv6b":[function(require,module,exports) {
module.exports = require("7b5306efa3f2d364").getBundleURL("8pR7C") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"7b5306efa3f2d364":"dhz1j"}],"4hSSk":[function(require,module,exports) {
module.exports = require("a090e1ecd2f19216").getBundleURL("8pR7C") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"a090e1ecd2f19216":"dhz1j"}],"8nhBR":[function(require,module,exports) {
module.exports = require("694e7a2257f09a4c").getBundleURL("8pR7C") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"694e7a2257f09a4c":"dhz1j"}],"75apI":[function(require,module,exports) {
module.exports = require("b6cb456e90278b22").getBundleURL("8pR7C") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"b6cb456e90278b22":"dhz1j"}],"kiwBB":[function(require,module,exports) {
module.exports = require("a54a8d86477f8563").getBundleURL("8pR7C") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"a54a8d86477f8563":"dhz1j"}],"3jNmM":[function(require,module,exports) {
module.exports = require("caf1592f172d8400").getBundleURL("8pR7C") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"caf1592f172d8400":"dhz1j"}],"tHbiL":[function(require,module,exports) {
module.exports = require("5e1a2a9fede2f7b1").getBundleURL("8pR7C") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"5e1a2a9fede2f7b1":"dhz1j"}],"dXVo3":[function(require,module,exports) {
module.exports = require("6d07e2fa26a3972f").getBundleURL("8pR7C") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"6d07e2fa26a3972f":"dhz1j"}],"dyYDr":[function(require,module,exports) {
module.exports = require("c3003a78646413f3").getBundleURL("8pR7C") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"c3003a78646413f3":"dhz1j"}],"cgT2T":[function(require,module,exports) {
module.exports = require("f3546f82531b82ce").getBundleURL("8pR7C") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"f3546f82531b82ce":"dhz1j"}],"jDy7L":[function(require,module,exports) {
module.exports = require("1951fa7b998e5389").getBundleURL("8pR7C") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"1951fa7b998e5389":"dhz1j"}],"dBYYk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ct35Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debug", ()=>debug);
var debug = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["2TR0m","iwYUe"], "iwYUe", "parcelRequire3c64")

//# sourceMappingURL=011detalle-alcobasa.157d5439.js.map
