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
})({"d11vk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "15dda6ea3c24c16e";
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

},{}],"2TDrw":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "nazare", ciudadT = "Nazar\xe9";
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
window.siguiente_video_nazare = cargar_nazare_video;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_nazare();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    cargar_nazare_video(1, 1);
    setTimeout(CambiarAutomaticamente, tiempo_video * 1000);
}
function cargar_nazare_video(incremento, parametro) {
    var w = video.clientWidth, h = video.clientHeight;
    var listado, comentario, c;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_mp4.nazare_mp4;
    listado = (0, _listadosJs.l).mp4.nazare_mp4[0];
    if (w > 600) {
        listado = (0, _listadosJs.l).mp4.nazare_mp4[1];
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).mp4.nazare_mp4[2];
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
            tiempo_video = (0, _listadosJs.l).duracion.nazare_duracion[i_listado];
            break;
        case 2:
            break; // ????
    }
}
function pantallaCompleta_nazare() {
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
} // ctrl + h  ---> nazare - 'otra ciudad'
 /*var ciudad='nazare'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_nazare=cargar_nazare_video;  


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


function cargar_nazare_video(incremento,parametro){
  var w=document.documentElement.clientWidth,h=document.documentElement.clientHeight;
  var listado, comentario;
  // Dependiendo del ancho cargo un conjunto distintos de fotos y la ciudad
  comentario= w>h ? l.comentario_1.nazare_1: l.comentario_6.nazare_6;
  listado= w>h ? l.fotos.nazare_png_300_1: l.fotos.nazare_png_300_6; 
  if (w >  600) listado= w>h ? l.fotos.nazare_png_600_1: l.fotos.nazare_png_600_6;
  if (w > 1000) listado= w>h ? l.fotos.nazare_png_900_1: l.fotos.nazare_png_900_6;
 
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
var ciudad='nazare'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_video_nazare=cargar_video_nazare;  
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
  cargar_video_nazare(inc,1);  
  setTimeout(solo, t);
}

function cargar_video_nazare(incremento,parametro){
  var ww=video.clientWidth;
  var listado, comentario,c;
  listado=l.mp4.nazare_mp4[0]; c= " pequeña " ;
  if (ww >  600)  { listado=l.mp4.nazare_mp4[1];c= " mediana " ; }
  if (ww > 1000)  { listado=l.mp4.nazare_mp4[2];c= " grande " ;}
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

},{"86781a753eb4dbf":"dW9KP","89ea5d03c92266e0":"csS77","4b3eab43661026ee":"70u64","1b58bb2c4e8118db":"89RtT","a73d7c9e4390513b":"6AalK","18f01d5dbbda959":"4LvyH","5b20b0e56b82945a":"jl9CT","c5cb6c0359b0662d":"iWovW","a63b65706a9c9fe5":"dMWCO","e748f6caa373ab73":"5IHhu","dfdedac191fae4f0":"d0304","f6f096fdb88eaef6":"8NVsW","9280d8a758940830":"4STmC","282ccbf2baeec961":"9iPvx","d39f9622f5686817":"1f4aj","483f2d56ab4cdedd":"1v8rh","da461ea778990854":"9nFe3","96f651fb571aa9eb":"2s1bM","e543a391b0f85f4f":"97mOH","a8cf664de7077859":"2j050","598ca8ca53d8a49b":"loHt2","3c3b7f9d3e56e115":"audKg","954440e7a3d1f441":"jJKpo","b4cb97e52f2cbd52":"2S3KO","7b09e4309565582d":"fd6UY","e6ea0af4531463e2":"fi2u5","42085257a46e5e09":"jYKvQ","6b3ddeea96e7d95a":"j3gL5","afe3ae5977faa1f8":"9FEGn","9446df6f7494726d":"ktACc","62a84e90f44c3be3":"3pyp7","a531b65afc6a06b0":"bmU6T","323e4a910dee7e0a":"3M3Z2","5adaf0b1f2da779b":"cui3H","18015bf652a8590c":"3qRH7","839e19b40af20bc9":"9XqYB","a51b127073443e8b":"bt1Jq","334a20b09cebc20f":"2U45H","d3c31bcf734c4b17":"izJva","91fb4da4c9f50617":"imd6c","7951652e2eeb278f":"6VsSz","9d81a0598f30e880":"dnyiB","f7184a54f57fe61e":"4xHjo","aa4e305c904a8bdc":"2blvb","e3c230bc4328e939":"2NiR8","91da9c9beb8cec92":"5NJcR","6788e9eb952c5639":"ft0L1","3e1f56c3a8f09a92":"4L5Ai","ba8d1fe6ef07e224":"8qd0p","e7ed43fffc09e558":"8F33r","eb7f4bebc9ae34f3":"9BIvt","f49bbc3ce90230f3":"kLyag","c6cc8feb00c43ccc":"e2Veh","da3e98b22adbeb4d":"dq4DZ","ac988f97513b753d":"5ABZX","9870197f68f46ce0":"5TcYh","1909d7c96cdc25f":"iWlwN","71900ce38a39f45e":"60qpj","d10c891d581aa72e":"24AWD","4e86e364e53b9592":"3ykiE","da9d375ff4cc6e20":"8n80R","4dc71cac2c1091fe":"418xR","2ae7e13dc9f19b08":"7MtmN","d4a94a2ec96f0f2a":"8tcnz","4d0999fb1640b484":"1h8rf","7eb1276e543406ee":"7rQS7","a1c7d50e344e35d":"8Jk74","d8d3e9b2c45514ef":"fHtF5","73770b04ebc58a8f":"h0rzO","3e326606efe38636":"kFalB","6911c8c8c7ec7f4b":"b00Pz","8bfeb5a28916238c":"9rwEO","f9da5f86d76bdb5b":"as5Yh","ab0ad55909afb45d":"lzZcn","12b4ab72d67dbba1":"g5NSj","3fdef08c5feabc1f":"9nCCY","97900455fc019c34":"i7tOJ","b1db13bef3dedd4":"bNzAX","8c3d146eaaa021db":"71CiM","8188eea6f1104e67":"1MiEi","ddf969591a3cfbba":"cYQlb","f51181bb6365decf":"3Y7uC","cd282a7a417c03b7":"iAtRG","32d9f1c4543900f0":"cvD6t","e759ed436cf99224":"hIoVQ","dfb837cbc24b9472":"3T203","e112f5b01b10cbb3":"k7KdZ","1166f1f821e20afd":"foEqB","201fc2d2fa0f7eac":"iTwm5","11280debdefd0431":"daLCn","cdfa70ae1d308d00":"jnXbT","f34fe41922b2586d":"7JVeO","8fe9ec68514a39e3":"e6PAd","deb2151dfbb509cd":"9SWJX","10cc9bcddfb0a9e3":"8y0sz","8766a5d2d9a1cbe5":"fHG4r","2346505ad78baa47":"6FAIz","565cc7de1c720893":"9QjzJ","20604925b297b483":"4kd2E","b60f28e19ed5645d":"cI3Ae","46a3ac90ead8eb4b":"5oxsc","8f8930169555991d":"aiCNh","54bfe7ee4aef0962":"5ttmu","773d8be78472f983":"6y9vR","d562071e9c1ece6":"62nfM","b4fcf97888be254":"lr3yG","9935775539310a4":"2CmJ8","dfd60661f83422de":"6qyM6","9d0c04b5449c6e78":"kwOZY","720ccb4e93255b25":"knP7A","6ccaff7eb0bdeb93":"7EhbN","4806d8e218627ab5":"4l0Bn","2c4f60e32f378ca9":"fMDWW","865f538633d0b1dc":"d3ZIb","39be71bc5a9474e0":"8r9c9","862f63336e6a3803":"1XXu8","64389f8910c4a5b9":"fEAmY","47d3b6b473ade444":"lH4rW","af58e9024f3ec2aa":"l197w","d5c714291b3e2173":"cnG6T","d9f14ea8509d3156":"jrZBe","e23e1493d8180c78":"ic4aV","bd8f00b86989f84b":"4NfFR","f164ec680e944d6d":"kwTdl","fc926fb4ed15df4":"cJ4pK","77d47f70247ccaa0":"8zHNS","213ed12e877bdf8":"hUYeA","337f47ad9c8e55bb":"87P3b","dc15afeda3fdbc10":"1t5Re","ffdc7890af793ea9":"hhqWZ","dd871b27f50d719f":"3ae7C","e3ed8d3f9f24501d":"fOBAH","a661ec8bde091a63":"kP4ZM","289dada425dcdbf0":"aOZN1","93ca55a06b72c0f4":"ksRg5","3343679c8bbbb107":"1YG1A","fb58c487e522e11b":"eJ2Zs","d696c059aa7292c1":"lHiUs","4f72da706ff07282":"4tqyy","2d95b671d5e6b31d":"fR9XB","2f4a2df8e9e6c6c5":"5SnMv","c26a8c456b0bfbbd":"9VjwI","3f701d22f6a1ae4f":"ksyGY","19450e227fa8d4e6":"e0Y2N","1e27e0a9c5922d42":"2oIg4","a084f06dc30f536f":"7BQOn","2fa52e674a840793":"8mMV5","e94ec1065f59594f":"03gxg","4a3d192459069081":"bWeLJ","b65864aa197fa6d0":"jNBhL","c7939ca45e20c9e6":"fTonU","4e948917a9e514ef":"8XNt3","3898a29ba68820":"5nryT","26317caa31b191b2":"dCI83","42715847c1bc4744":"jPTrE","421a5f52f1a54bf2":"eP7vG","7b382b2b0bbad026":"2ZDRg","efcbb5cde267920c":"6gmxa","ecaccd9706afa493":"bx5PX","29dd4c45ad77a411":"8W0Ks","9ebc252dff86358a":"aN4zp","181e6b8ac3026ce3":"lEUO3","f0d63a691568917b":"8F0Ni","cb2bff42f9bf1da3":"4JnAQ","2008e68ae020640b":"i29zk","7703d2aff3ac19f2":"6r1x7","cc7873bdb72ab106":"j5O67","ddb0c8ec6e1128ec":"6Dnum","f0fdfe553e8b2b8b":"2soGk","83fd77e6e3d1ed4d":"1iJuh","bfdc94773439b970":"57ZLX","e53408e84c34725c":"6JzlW","dee32d35a055d161":"khCNG","8eb0fe6d497319ac":"g3zP4","2d4bf2da7d0a6ebf":"aoI2O","97707bd921d6bd97":"fEuoT","112c0986b11e3773":"6BmPM","3d504689dbdd2069":"g7NyW","38539e1f0ba5a0da":"g33ed","adf6607a48b65015":"bGQoZ","6a060de4f8cd5f51":"a6jmd","a1a4532e178c00e4":"jKbMS","644f90a72aefea2f":"47iak","67704ca106e263d":"30etO","5aa9c5adff06bff6":"4y098","d2192ee8df9e83c3":"a9pOd","11023e0d66f4a5c6":"g2UkV","a1c31f725c1b9044":"d79M2","557036c03b3c0cf2":"f86QD","cfcd6ed14b0881ce":"8KdBz","c49dc6a73b22dff2":"kmH8c","feb7bc20d8ad2999":"6SeFp","44700e4b32d1904e":"9La36","b917fe1860ba64a6":"6imS2","19f93dc81edaaaf1":"5RKxb","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dW9KP":[function(require,module,exports) {
module.exports = require("86ad315641d452b7").getBundleURL("1Sog7") + "0.48981f22.png" + "?" + Date.now();

},{"86ad315641d452b7":"dhz1j"}],"csS77":[function(require,module,exports) {
module.exports = require("581ab3e40bc168c7").getBundleURL("1Sog7") + "1.f94ee4de.png" + "?" + Date.now();

},{"581ab3e40bc168c7":"dhz1j"}],"70u64":[function(require,module,exports) {
module.exports = require("b908629ca5077af").getBundleURL("1Sog7") + "2.31f5056c.png" + "?" + Date.now();

},{"b908629ca5077af":"dhz1j"}],"89RtT":[function(require,module,exports) {
module.exports = require("5bcc4c55f8fde3a").getBundleURL("1Sog7") + "3.ce1b885f.png" + "?" + Date.now();

},{"5bcc4c55f8fde3a":"dhz1j"}],"6AalK":[function(require,module,exports) {
module.exports = require("fb4d6724ea4b9401").getBundleURL("1Sog7") + "4.6fe91547.png" + "?" + Date.now();

},{"fb4d6724ea4b9401":"dhz1j"}],"4LvyH":[function(require,module,exports) {
module.exports = require("e7510be78b334758").getBundleURL("1Sog7") + "5.a917cfd3.png" + "?" + Date.now();

},{"e7510be78b334758":"dhz1j"}],"jl9CT":[function(require,module,exports) {
module.exports = require("5b2080829dcc5d33").getBundleURL("1Sog7") + "6.0d46346e.png" + "?" + Date.now();

},{"5b2080829dcc5d33":"dhz1j"}],"iWovW":[function(require,module,exports) {
module.exports = require("db3f9b391f70e54b").getBundleURL("1Sog7") + "7.320708f3.png" + "?" + Date.now();

},{"db3f9b391f70e54b":"dhz1j"}],"dMWCO":[function(require,module,exports) {
module.exports = require("d6b2239f0002a446").getBundleURL("1Sog7") + "8.5e948736.png" + "?" + Date.now();

},{"d6b2239f0002a446":"dhz1j"}],"5IHhu":[function(require,module,exports) {
module.exports = require("5d01d6bf2d5531a").getBundleURL("1Sog7") + "9.ff59ab43.png" + "?" + Date.now();

},{"5d01d6bf2d5531a":"dhz1j"}],"d0304":[function(require,module,exports) {
module.exports = require("ca7f1605e53203c4").getBundleURL("1Sog7") + "10.31b47b87.png" + "?" + Date.now();

},{"ca7f1605e53203c4":"dhz1j"}],"8NVsW":[function(require,module,exports) {
module.exports = require("d785a849f78c0f9").getBundleURL("1Sog7") + "11.cc89efaf.png" + "?" + Date.now();

},{"d785a849f78c0f9":"dhz1j"}],"4STmC":[function(require,module,exports) {
module.exports = require("8e2b149378856eab").getBundleURL("1Sog7") + "12.9cf068b9.png" + "?" + Date.now();

},{"8e2b149378856eab":"dhz1j"}],"9iPvx":[function(require,module,exports) {
module.exports = require("ae30e12f4c9b6d82").getBundleURL("1Sog7") + "13.3fd5fa74.png" + "?" + Date.now();

},{"ae30e12f4c9b6d82":"dhz1j"}],"1f4aj":[function(require,module,exports) {
module.exports = require("838aeb2a983c8cbf").getBundleURL("1Sog7") + "14.85f8074c.png" + "?" + Date.now();

},{"838aeb2a983c8cbf":"dhz1j"}],"1v8rh":[function(require,module,exports) {
module.exports = require("618d12d26c42c8ea").getBundleURL("1Sog7") + "15.b3971def.png" + "?" + Date.now();

},{"618d12d26c42c8ea":"dhz1j"}],"9nFe3":[function(require,module,exports) {
module.exports = require("d7d675ae5aa0754d").getBundleURL("1Sog7") + "16.e924273a.png" + "?" + Date.now();

},{"d7d675ae5aa0754d":"dhz1j"}],"2s1bM":[function(require,module,exports) {
module.exports = require("6f70fa7dac3f22cc").getBundleURL("1Sog7") + "0.827cb71f.png" + "?" + Date.now();

},{"6f70fa7dac3f22cc":"dhz1j"}],"97mOH":[function(require,module,exports) {
module.exports = require("de8e14e79e573348").getBundleURL("1Sog7") + "1.1ba72b2c.png" + "?" + Date.now();

},{"de8e14e79e573348":"dhz1j"}],"2j050":[function(require,module,exports) {
module.exports = require("c4dceb5dc4edcdf4").getBundleURL("1Sog7") + "2.a537714e.png" + "?" + Date.now();

},{"c4dceb5dc4edcdf4":"dhz1j"}],"loHt2":[function(require,module,exports) {
module.exports = require("10867fbbf1375935").getBundleURL("1Sog7") + "3.968442f0.png" + "?" + Date.now();

},{"10867fbbf1375935":"dhz1j"}],"audKg":[function(require,module,exports) {
module.exports = require("382c1b899f154a4").getBundleURL("1Sog7") + "4.1087c966.png" + "?" + Date.now();

},{"382c1b899f154a4":"dhz1j"}],"jJKpo":[function(require,module,exports) {
module.exports = require("8765e9f6b210c4e").getBundleURL("1Sog7") + "5.10b3d4d5.png" + "?" + Date.now();

},{"8765e9f6b210c4e":"dhz1j"}],"2S3KO":[function(require,module,exports) {
module.exports = require("3aee5b94f6075fa2").getBundleURL("1Sog7") + "6.b8b5ea54.png" + "?" + Date.now();

},{"3aee5b94f6075fa2":"dhz1j"}],"fd6UY":[function(require,module,exports) {
module.exports = require("db9b73d274d4c72d").getBundleURL("1Sog7") + "7.a88fc70f.png" + "?" + Date.now();

},{"db9b73d274d4c72d":"dhz1j"}],"fi2u5":[function(require,module,exports) {
module.exports = require("753520b7c9782786").getBundleURL("1Sog7") + "8.624d70bd.png" + "?" + Date.now();

},{"753520b7c9782786":"dhz1j"}],"jYKvQ":[function(require,module,exports) {
module.exports = require("3b181ca29e3783fc").getBundleURL("1Sog7") + "9.85986fa7.png" + "?" + Date.now();

},{"3b181ca29e3783fc":"dhz1j"}],"j3gL5":[function(require,module,exports) {
module.exports = require("d4be1fe812740a05").getBundleURL("1Sog7") + "10.5d974f61.png" + "?" + Date.now();

},{"d4be1fe812740a05":"dhz1j"}],"9FEGn":[function(require,module,exports) {
module.exports = require("ec3edb555f3454c7").getBundleURL("1Sog7") + "11.00514082.png" + "?" + Date.now();

},{"ec3edb555f3454c7":"dhz1j"}],"ktACc":[function(require,module,exports) {
module.exports = require("abd74429fb0af2d8").getBundleURL("1Sog7") + "12.8e43d119.png" + "?" + Date.now();

},{"abd74429fb0af2d8":"dhz1j"}],"3pyp7":[function(require,module,exports) {
module.exports = require("9f88591e17f82add").getBundleURL("1Sog7") + "13.6d974d03.png" + "?" + Date.now();

},{"9f88591e17f82add":"dhz1j"}],"bmU6T":[function(require,module,exports) {
module.exports = require("9040833964dc3f1b").getBundleURL("1Sog7") + "14.c01188a0.png" + "?" + Date.now();

},{"9040833964dc3f1b":"dhz1j"}],"3M3Z2":[function(require,module,exports) {
module.exports = require("aeafdd47a79b9fc3").getBundleURL("1Sog7") + "15.98c7edf9.png" + "?" + Date.now();

},{"aeafdd47a79b9fc3":"dhz1j"}],"cui3H":[function(require,module,exports) {
module.exports = require("2fd9fb65edd1c6c0").getBundleURL("1Sog7") + "16.46395d71.png" + "?" + Date.now();

},{"2fd9fb65edd1c6c0":"dhz1j"}],"3qRH7":[function(require,module,exports) {
module.exports = require("9fa4b732ea304563").getBundleURL("1Sog7") + "0.6135d861.png" + "?" + Date.now();

},{"9fa4b732ea304563":"dhz1j"}],"9XqYB":[function(require,module,exports) {
module.exports = require("ff001b531153b79d").getBundleURL("1Sog7") + "1.ab36ca3c.png" + "?" + Date.now();

},{"ff001b531153b79d":"dhz1j"}],"bt1Jq":[function(require,module,exports) {
module.exports = require("f9303642729cbe07").getBundleURL("1Sog7") + "2.637b0503.png" + "?" + Date.now();

},{"f9303642729cbe07":"dhz1j"}],"2U45H":[function(require,module,exports) {
module.exports = require("df6da525f046dff9").getBundleURL("1Sog7") + "3.ea6e2859.png" + "?" + Date.now();

},{"df6da525f046dff9":"dhz1j"}],"izJva":[function(require,module,exports) {
module.exports = require("89b27f63b5cc2571").getBundleURL("1Sog7") + "4.302416e9.png" + "?" + Date.now();

},{"89b27f63b5cc2571":"dhz1j"}],"imd6c":[function(require,module,exports) {
module.exports = require("9a0690653d1fdd10").getBundleURL("1Sog7") + "5.69800b21.png" + "?" + Date.now();

},{"9a0690653d1fdd10":"dhz1j"}],"6VsSz":[function(require,module,exports) {
module.exports = require("540f71b18a811b0f").getBundleURL("1Sog7") + "6.9611621f.png" + "?" + Date.now();

},{"540f71b18a811b0f":"dhz1j"}],"dnyiB":[function(require,module,exports) {
module.exports = require("1f5a03a90f1e97cc").getBundleURL("1Sog7") + "7.387a99b8.png" + "?" + Date.now();

},{"1f5a03a90f1e97cc":"dhz1j"}],"4xHjo":[function(require,module,exports) {
module.exports = require("3a22c5b429f989e6").getBundleURL("1Sog7") + "8.868e1eb3.png" + "?" + Date.now();

},{"3a22c5b429f989e6":"dhz1j"}],"2blvb":[function(require,module,exports) {
module.exports = require("c33ae7441f62b1e0").getBundleURL("1Sog7") + "9.73cbc4df.png" + "?" + Date.now();

},{"c33ae7441f62b1e0":"dhz1j"}],"2NiR8":[function(require,module,exports) {
module.exports = require("48bcff9d4fcc2fc9").getBundleURL("1Sog7") + "10.5089e6a9.png" + "?" + Date.now();

},{"48bcff9d4fcc2fc9":"dhz1j"}],"5NJcR":[function(require,module,exports) {
module.exports = require("5703bea52280e38a").getBundleURL("1Sog7") + "11.f9276e6c.png" + "?" + Date.now();

},{"5703bea52280e38a":"dhz1j"}],"ft0L1":[function(require,module,exports) {
module.exports = require("20eb989c85386177").getBundleURL("1Sog7") + "12.28e07f45.png" + "?" + Date.now();

},{"20eb989c85386177":"dhz1j"}],"4L5Ai":[function(require,module,exports) {
module.exports = require("9e3d64da2ea54c3a").getBundleURL("1Sog7") + "13.3e9a788c.png" + "?" + Date.now();

},{"9e3d64da2ea54c3a":"dhz1j"}],"8qd0p":[function(require,module,exports) {
module.exports = require("5badc866d6f05b48").getBundleURL("1Sog7") + "14.55e925f3.png" + "?" + Date.now();

},{"5badc866d6f05b48":"dhz1j"}],"8F33r":[function(require,module,exports) {
module.exports = require("f7938887f354349d").getBundleURL("1Sog7") + "15.45dd04ca.png" + "?" + Date.now();

},{"f7938887f354349d":"dhz1j"}],"9BIvt":[function(require,module,exports) {
module.exports = require("20cb2678faf5ff9b").getBundleURL("1Sog7") + "16.da3dfac2.png" + "?" + Date.now();

},{"20cb2678faf5ff9b":"dhz1j"}],"kLyag":[function(require,module,exports) {
module.exports = require("23a602eff0e6a727").getBundleURL("1Sog7") + "0.1859081d.png" + "?" + Date.now();

},{"23a602eff0e6a727":"dhz1j"}],"e2Veh":[function(require,module,exports) {
module.exports = require("bca0156bd44b908f").getBundleURL("1Sog7") + "1.927d66ed.png" + "?" + Date.now();

},{"bca0156bd44b908f":"dhz1j"}],"dq4DZ":[function(require,module,exports) {
module.exports = require("a30ac6eb741a5a00").getBundleURL("1Sog7") + "2.363f17fd.png" + "?" + Date.now();

},{"a30ac6eb741a5a00":"dhz1j"}],"5ABZX":[function(require,module,exports) {
module.exports = require("f493e8ff91455239").getBundleURL("1Sog7") + "0.a7ae4123.png" + "?" + Date.now();

},{"f493e8ff91455239":"dhz1j"}],"5TcYh":[function(require,module,exports) {
module.exports = require("32f7b8b0088ba209").getBundleURL("1Sog7") + "1.88470ddf.png" + "?" + Date.now();

},{"32f7b8b0088ba209":"dhz1j"}],"iWlwN":[function(require,module,exports) {
module.exports = require("bf3da8dd1381d18a").getBundleURL("1Sog7") + "2.de54b28c.png" + "?" + Date.now();

},{"bf3da8dd1381d18a":"dhz1j"}],"60qpj":[function(require,module,exports) {
module.exports = require("aa1c39458e52252d").getBundleURL("1Sog7") + "0.bdeefb48.png" + "?" + Date.now();

},{"aa1c39458e52252d":"dhz1j"}],"24AWD":[function(require,module,exports) {
module.exports = require("8ec335c2684aa9ef").getBundleURL("1Sog7") + "1.c862755d.png" + "?" + Date.now();

},{"8ec335c2684aa9ef":"dhz1j"}],"3ykiE":[function(require,module,exports) {
module.exports = require("60888f4d9f220941").getBundleURL("1Sog7") + "2.3a3879c0.png" + "?" + Date.now();

},{"60888f4d9f220941":"dhz1j"}],"8n80R":[function(require,module,exports) {
module.exports = require("c58dd90158ab6e3").getBundleURL("1Sog7") + "0.2d5254b4.png" + "?" + Date.now();

},{"c58dd90158ab6e3":"dhz1j"}],"418xR":[function(require,module,exports) {
module.exports = require("8b7b01ec0e676ae8").getBundleURL("1Sog7") + "1.53be37fa.png" + "?" + Date.now();

},{"8b7b01ec0e676ae8":"dhz1j"}],"7MtmN":[function(require,module,exports) {
module.exports = require("d9b71efe35429a87").getBundleURL("1Sog7") + "2.f6226c8b.png" + "?" + Date.now();

},{"d9b71efe35429a87":"dhz1j"}],"8tcnz":[function(require,module,exports) {
module.exports = require("58a550d1d60fb75f").getBundleURL("1Sog7") + "3.cbffaa2e.png" + "?" + Date.now();

},{"58a550d1d60fb75f":"dhz1j"}],"1h8rf":[function(require,module,exports) {
module.exports = require("b3638085bc99254").getBundleURL("1Sog7") + "4.13acbc59.png" + "?" + Date.now();

},{"b3638085bc99254":"dhz1j"}],"7rQS7":[function(require,module,exports) {
module.exports = require("fc3ed7edfc203096").getBundleURL("1Sog7") + "5.ef65f0ad.png" + "?" + Date.now();

},{"fc3ed7edfc203096":"dhz1j"}],"8Jk74":[function(require,module,exports) {
module.exports = require("a3decacba320b27f").getBundleURL("1Sog7") + "6.93bb63df.png" + "?" + Date.now();

},{"a3decacba320b27f":"dhz1j"}],"fHtF5":[function(require,module,exports) {
module.exports = require("a389db407344db30").getBundleURL("1Sog7") + "0.c7b4b27a.png" + "?" + Date.now();

},{"a389db407344db30":"dhz1j"}],"h0rzO":[function(require,module,exports) {
module.exports = require("542e467c38beee68").getBundleURL("1Sog7") + "1.a62dfbae.png" + "?" + Date.now();

},{"542e467c38beee68":"dhz1j"}],"kFalB":[function(require,module,exports) {
module.exports = require("3cc9d0294e66e635").getBundleURL("1Sog7") + "2.e3978c80.png" + "?" + Date.now();

},{"3cc9d0294e66e635":"dhz1j"}],"b00Pz":[function(require,module,exports) {
module.exports = require("8562e107531b2fa0").getBundleURL("1Sog7") + "3.4641ec5b.png" + "?" + Date.now();

},{"8562e107531b2fa0":"dhz1j"}],"9rwEO":[function(require,module,exports) {
module.exports = require("b45b22be671ce908").getBundleURL("1Sog7") + "4.46679935.png" + "?" + Date.now();

},{"b45b22be671ce908":"dhz1j"}],"as5Yh":[function(require,module,exports) {
module.exports = require("de93bedbc03de840").getBundleURL("1Sog7") + "5.7cb7235f.png" + "?" + Date.now();

},{"de93bedbc03de840":"dhz1j"}],"lzZcn":[function(require,module,exports) {
module.exports = require("d002cbe73228ad3b").getBundleURL("1Sog7") + "6.25e0793b.png" + "?" + Date.now();

},{"d002cbe73228ad3b":"dhz1j"}],"g5NSj":[function(require,module,exports) {
module.exports = require("20bf657322156462").getBundleURL("1Sog7") + "0.3c81352a.png" + "?" + Date.now();

},{"20bf657322156462":"dhz1j"}],"9nCCY":[function(require,module,exports) {
module.exports = require("b4a04e625bbe1508").getBundleURL("1Sog7") + "1.5cc77829.png" + "?" + Date.now();

},{"b4a04e625bbe1508":"dhz1j"}],"i7tOJ":[function(require,module,exports) {
module.exports = require("a5fc03c0ae9fbc83").getBundleURL("1Sog7") + "2.8e275dc1.png" + "?" + Date.now();

},{"a5fc03c0ae9fbc83":"dhz1j"}],"bNzAX":[function(require,module,exports) {
module.exports = require("84546a37e9d7efe2").getBundleURL("1Sog7") + "3.a9db7ab7.png" + "?" + Date.now();

},{"84546a37e9d7efe2":"dhz1j"}],"71CiM":[function(require,module,exports) {
module.exports = require("2694c5c36405d08b").getBundleURL("1Sog7") + "4.e32a50ca.png" + "?" + Date.now();

},{"2694c5c36405d08b":"dhz1j"}],"1MiEi":[function(require,module,exports) {
module.exports = require("2845d47155d05a78").getBundleURL("1Sog7") + "5.c1536481.png" + "?" + Date.now();

},{"2845d47155d05a78":"dhz1j"}],"cYQlb":[function(require,module,exports) {
module.exports = require("6661c2f97a29271e").getBundleURL("1Sog7") + "6.288f575f.png" + "?" + Date.now();

},{"6661c2f97a29271e":"dhz1j"}],"3Y7uC":[function(require,module,exports) {
module.exports = require("902f07591ceb2f61").getBundleURL("1Sog7") + "0.1fd51615.png" + "?" + Date.now();

},{"902f07591ceb2f61":"dhz1j"}],"iAtRG":[function(require,module,exports) {
module.exports = require("d94e6e0c8efa5a0d").getBundleURL("1Sog7") + "1.e84c2436.png" + "?" + Date.now();

},{"d94e6e0c8efa5a0d":"dhz1j"}],"cvD6t":[function(require,module,exports) {
module.exports = require("b319b1fb77cb3094").getBundleURL("1Sog7") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"b319b1fb77cb3094":"dhz1j"}],"hIoVQ":[function(require,module,exports) {
module.exports = require("130a488043aef5cf").getBundleURL("1Sog7") + "0.7a68699b.png" + "?" + Date.now();

},{"130a488043aef5cf":"dhz1j"}],"3T203":[function(require,module,exports) {
module.exports = require("bbf5af7458fd7240").getBundleURL("1Sog7") + "1.fff421cb.png" + "?" + Date.now();

},{"bbf5af7458fd7240":"dhz1j"}],"k7KdZ":[function(require,module,exports) {
module.exports = require("a5f4522215e1aa14").getBundleURL("1Sog7") + "2.2fdbefa7.png" + "?" + Date.now();

},{"a5f4522215e1aa14":"dhz1j"}],"foEqB":[function(require,module,exports) {
module.exports = require("aa609165243a82d9").getBundleURL("1Sog7") + "0.5282a781.png" + "?" + Date.now();

},{"aa609165243a82d9":"dhz1j"}],"iTwm5":[function(require,module,exports) {
module.exports = require("cb54a62b9fd1896b").getBundleURL("1Sog7") + "1.6a9b3b01.png" + "?" + Date.now();

},{"cb54a62b9fd1896b":"dhz1j"}],"daLCn":[function(require,module,exports) {
module.exports = require("774196d4660ba46e").getBundleURL("1Sog7") + "2.6ed29ec3.png" + "?" + Date.now();

},{"774196d4660ba46e":"dhz1j"}],"jnXbT":[function(require,module,exports) {
module.exports = require("e09cabe3458abc23").getBundleURL("1Sog7") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"e09cabe3458abc23":"dhz1j"}],"7JVeO":[function(require,module,exports) {
module.exports = require("313a7118f41feac7").getBundleURL("1Sog7") + "1.065ffd47.png" + "?" + Date.now();

},{"313a7118f41feac7":"dhz1j"}],"e6PAd":[function(require,module,exports) {
module.exports = require("7609c12024442752").getBundleURL("1Sog7") + "2.29f32c63.png" + "?" + Date.now();

},{"7609c12024442752":"dhz1j"}],"9SWJX":[function(require,module,exports) {
module.exports = require("bd87908fbf407100").getBundleURL("1Sog7") + "0.c2bc436e.png" + "?" + Date.now();

},{"bd87908fbf407100":"dhz1j"}],"8y0sz":[function(require,module,exports) {
module.exports = require("a8c8a42345f99daf").getBundleURL("1Sog7") + "1.e224ca18.png" + "?" + Date.now();

},{"a8c8a42345f99daf":"dhz1j"}],"fHG4r":[function(require,module,exports) {
module.exports = require("a1c3f7b8ffb5c1db").getBundleURL("1Sog7") + "2.20af644b.png" + "?" + Date.now();

},{"a1c3f7b8ffb5c1db":"dhz1j"}],"6FAIz":[function(require,module,exports) {
module.exports = require("3f1368ab2820f8bf").getBundleURL("1Sog7") + "0.740b269f.png" + "?" + Date.now();

},{"3f1368ab2820f8bf":"dhz1j"}],"9QjzJ":[function(require,module,exports) {
module.exports = require("889dfb9a7d211850").getBundleURL("1Sog7") + "1.88c581e4.png" + "?" + Date.now();

},{"889dfb9a7d211850":"dhz1j"}],"4kd2E":[function(require,module,exports) {
module.exports = require("141f6af5cf74f18d").getBundleURL("1Sog7") + "2.e91aa1d2.png" + "?" + Date.now();

},{"141f6af5cf74f18d":"dhz1j"}],"cI3Ae":[function(require,module,exports) {
module.exports = require("33aad715f720d67a").getBundleURL("1Sog7") + "0.1bd287a0.png" + "?" + Date.now();

},{"33aad715f720d67a":"dhz1j"}],"5oxsc":[function(require,module,exports) {
module.exports = require("c80b9f0c7b3f01c7").getBundleURL("1Sog7") + "1.d58a5780.png" + "?" + Date.now();

},{"c80b9f0c7b3f01c7":"dhz1j"}],"aiCNh":[function(require,module,exports) {
module.exports = require("4644fefe03f2c7de").getBundleURL("1Sog7") + "0.d9a399c3.png" + "?" + Date.now();

},{"4644fefe03f2c7de":"dhz1j"}],"5ttmu":[function(require,module,exports) {
module.exports = require("6972b19425279736").getBundleURL("1Sog7") + "1.062ed605.png" + "?" + Date.now();

},{"6972b19425279736":"dhz1j"}],"6y9vR":[function(require,module,exports) {
module.exports = require("a1eb8207cf623e3b").getBundleURL("1Sog7") + "0.7a9f2455.png" + "?" + Date.now();

},{"a1eb8207cf623e3b":"dhz1j"}],"62nfM":[function(require,module,exports) {
module.exports = require("82dee241b9e1edf").getBundleURL("1Sog7") + "1.572a6598.png" + "?" + Date.now();

},{"82dee241b9e1edf":"dhz1j"}],"lr3yG":[function(require,module,exports) {
module.exports = require("be0aa3952709609d").getBundleURL("1Sog7") + "0.0a92d131.png" + "?" + Date.now();

},{"be0aa3952709609d":"dhz1j"}],"2CmJ8":[function(require,module,exports) {
module.exports = require("7e074bf044bc1831").getBundleURL("1Sog7") + "1.d24763ee.png" + "?" + Date.now();

},{"7e074bf044bc1831":"dhz1j"}],"6qyM6":[function(require,module,exports) {
module.exports = require("f9e318eb3f32d8d7").getBundleURL("1Sog7") + "2.0e1b919c.png" + "?" + Date.now();

},{"f9e318eb3f32d8d7":"dhz1j"}],"kwOZY":[function(require,module,exports) {
module.exports = require("6956fec694b7e3a").getBundleURL("1Sog7") + "0.fda31a8c.png" + "?" + Date.now();

},{"6956fec694b7e3a":"dhz1j"}],"knP7A":[function(require,module,exports) {
module.exports = require("5497b39ba635fb5b").getBundleURL("1Sog7") + "1.36e21bb7.png" + "?" + Date.now();

},{"5497b39ba635fb5b":"dhz1j"}],"7EhbN":[function(require,module,exports) {
module.exports = require("88c2e870a2bd661b").getBundleURL("1Sog7") + "2.845e9168.png" + "?" + Date.now();

},{"88c2e870a2bd661b":"dhz1j"}],"4l0Bn":[function(require,module,exports) {
module.exports = require("a6fe6303e1afea06").getBundleURL("1Sog7") + "0.d1a19ca9.png" + "?" + Date.now();

},{"a6fe6303e1afea06":"dhz1j"}],"fMDWW":[function(require,module,exports) {
module.exports = require("acb992321163ac3b").getBundleURL("1Sog7") + "1.16a743db.png" + "?" + Date.now();

},{"acb992321163ac3b":"dhz1j"}],"d3ZIb":[function(require,module,exports) {
module.exports = require("63d619c6ca632d56").getBundleURL("1Sog7") + "2.3ecdc17d.png" + "?" + Date.now();

},{"63d619c6ca632d56":"dhz1j"}],"8r9c9":[function(require,module,exports) {
module.exports = require("d194daa232a6be3f").getBundleURL("1Sog7") + "0.fd0add9a.png" + "?" + Date.now();

},{"d194daa232a6be3f":"dhz1j"}],"1XXu8":[function(require,module,exports) {
module.exports = require("3cf7808aaa9a8e24").getBundleURL("1Sog7") + "1.2192498e.png" + "?" + Date.now();

},{"3cf7808aaa9a8e24":"dhz1j"}],"fEAmY":[function(require,module,exports) {
module.exports = require("1451aa90965e6c18").getBundleURL("1Sog7") + "2.ab8117eb.png" + "?" + Date.now();

},{"1451aa90965e6c18":"dhz1j"}],"lH4rW":[function(require,module,exports) {
module.exports = require("c54d26b727f52796").getBundleURL("1Sog7") + "3.1fe13043.png" + "?" + Date.now();

},{"c54d26b727f52796":"dhz1j"}],"l197w":[function(require,module,exports) {
module.exports = require("a12f3bdcca3a0a7").getBundleURL("1Sog7") + "0.27a8c375.png" + "?" + Date.now();

},{"a12f3bdcca3a0a7":"dhz1j"}],"cnG6T":[function(require,module,exports) {
module.exports = require("60c341d6aa01ac0d").getBundleURL("1Sog7") + "1.f500f41c.png" + "?" + Date.now();

},{"60c341d6aa01ac0d":"dhz1j"}],"jrZBe":[function(require,module,exports) {
module.exports = require("4bb5df60ecdf855e").getBundleURL("1Sog7") + "2.a8b32497.png" + "?" + Date.now();

},{"4bb5df60ecdf855e":"dhz1j"}],"ic4aV":[function(require,module,exports) {
module.exports = require("33776f5f1a84d675").getBundleURL("1Sog7") + "3.6650c9b1.png" + "?" + Date.now();

},{"33776f5f1a84d675":"dhz1j"}],"4NfFR":[function(require,module,exports) {
module.exports = require("a084859e75e59e09").getBundleURL("1Sog7") + "0.3a521425.png" + "?" + Date.now();

},{"a084859e75e59e09":"dhz1j"}],"kwTdl":[function(require,module,exports) {
module.exports = require("a5abd290245f7cb5").getBundleURL("1Sog7") + "1.69dd99e1.png" + "?" + Date.now();

},{"a5abd290245f7cb5":"dhz1j"}],"cJ4pK":[function(require,module,exports) {
module.exports = require("7d5bf42d60b63658").getBundleURL("1Sog7") + "2.63a32ea2.png" + "?" + Date.now();

},{"7d5bf42d60b63658":"dhz1j"}],"8zHNS":[function(require,module,exports) {
module.exports = require("f9bc6d3f46a13bda").getBundleURL("1Sog7") + "3.74bfe1cd.png" + "?" + Date.now();

},{"f9bc6d3f46a13bda":"dhz1j"}],"hUYeA":[function(require,module,exports) {
module.exports = require("624b33eaf60c0234").getBundleURL("1Sog7") + "0.5c07456d.png" + "?" + Date.now();

},{"624b33eaf60c0234":"dhz1j"}],"87P3b":[function(require,module,exports) {
module.exports = require("7f165ef942b243b1").getBundleURL("1Sog7") + "1.9e2781aa.png" + "?" + Date.now();

},{"7f165ef942b243b1":"dhz1j"}],"1t5Re":[function(require,module,exports) {
module.exports = require("1e9da4bd5b097764").getBundleURL("1Sog7") + "2.80d8a9dc.png" + "?" + Date.now();

},{"1e9da4bd5b097764":"dhz1j"}],"hhqWZ":[function(require,module,exports) {
module.exports = require("aad15c07a3d721e1").getBundleURL("1Sog7") + "3.4505c156.png" + "?" + Date.now();

},{"aad15c07a3d721e1":"dhz1j"}],"3ae7C":[function(require,module,exports) {
module.exports = require("96ecbf3a382b40cd").getBundleURL("1Sog7") + "0.a5627eb9.png" + "?" + Date.now();

},{"96ecbf3a382b40cd":"dhz1j"}],"fOBAH":[function(require,module,exports) {
module.exports = require("d2a3d71b2e7de096").getBundleURL("1Sog7") + "1.29be576d.png" + "?" + Date.now();

},{"d2a3d71b2e7de096":"dhz1j"}],"kP4ZM":[function(require,module,exports) {
module.exports = require("bdc8205873fdcdf4").getBundleURL("1Sog7") + "2.2c9d3072.png" + "?" + Date.now();

},{"bdc8205873fdcdf4":"dhz1j"}],"aOZN1":[function(require,module,exports) {
module.exports = require("f7d956fe7422024d").getBundleURL("1Sog7") + "3.b10a87dc.png" + "?" + Date.now();

},{"f7d956fe7422024d":"dhz1j"}],"ksRg5":[function(require,module,exports) {
module.exports = require("ed62daa46d28774e").getBundleURL("1Sog7") + "0.b66475e8.png" + "?" + Date.now();

},{"ed62daa46d28774e":"dhz1j"}],"1YG1A":[function(require,module,exports) {
module.exports = require("22accddeb6316ea3").getBundleURL("1Sog7") + "1.ae4ec885.png" + "?" + Date.now();

},{"22accddeb6316ea3":"dhz1j"}],"eJ2Zs":[function(require,module,exports) {
module.exports = require("696b83ed9bd2e44f").getBundleURL("1Sog7") + "2.89619ac1.png" + "?" + Date.now();

},{"696b83ed9bd2e44f":"dhz1j"}],"lHiUs":[function(require,module,exports) {
module.exports = require("1eef9a66e0acc330").getBundleURL("1Sog7") + "3.e861d630.png" + "?" + Date.now();

},{"1eef9a66e0acc330":"dhz1j"}],"4tqyy":[function(require,module,exports) {
module.exports = require("2331c1ae5cf884f2").getBundleURL("1Sog7") + "0.c0daae54.png" + "?" + Date.now();

},{"2331c1ae5cf884f2":"dhz1j"}],"fR9XB":[function(require,module,exports) {
module.exports = require("8859fa4f9ff77d73").getBundleURL("1Sog7") + "1.81ba4702.png" + "?" + Date.now();

},{"8859fa4f9ff77d73":"dhz1j"}],"5SnMv":[function(require,module,exports) {
module.exports = require("dce7ae4dcef874d4").getBundleURL("1Sog7") + "2.2b44de5f.png" + "?" + Date.now();

},{"dce7ae4dcef874d4":"dhz1j"}],"9VjwI":[function(require,module,exports) {
module.exports = require("ca38dec7858a1c3d").getBundleURL("1Sog7") + "3.0a3548da.png" + "?" + Date.now();

},{"ca38dec7858a1c3d":"dhz1j"}],"ksyGY":[function(require,module,exports) {
module.exports = require("e6b496eafb256728").getBundleURL("1Sog7") + "4.7dc2c927.png" + "?" + Date.now();

},{"e6b496eafb256728":"dhz1j"}],"e0Y2N":[function(require,module,exports) {
module.exports = require("5c819041198bc0c").getBundleURL("1Sog7") + "5.a3e2eda3.png" + "?" + Date.now();

},{"5c819041198bc0c":"dhz1j"}],"2oIg4":[function(require,module,exports) {
module.exports = require("9725946dde1480e7").getBundleURL("1Sog7") + "6.93d93658.png" + "?" + Date.now();

},{"9725946dde1480e7":"dhz1j"}],"7BQOn":[function(require,module,exports) {
module.exports = require("b13168fdf1aa86d8").getBundleURL("1Sog7") + "0.cf371571.png" + "?" + Date.now();

},{"b13168fdf1aa86d8":"dhz1j"}],"8mMV5":[function(require,module,exports) {
module.exports = require("9821a0f7d84f789d").getBundleURL("1Sog7") + "1.40091dcf.png" + "?" + Date.now();

},{"9821a0f7d84f789d":"dhz1j"}],"03gxg":[function(require,module,exports) {
module.exports = require("c63a9e138d868d3b").getBundleURL("1Sog7") + "2.62b42786.png" + "?" + Date.now();

},{"c63a9e138d868d3b":"dhz1j"}],"bWeLJ":[function(require,module,exports) {
module.exports = require("feabf2ca0e600ebe").getBundleURL("1Sog7") + "3.f21956af.png" + "?" + Date.now();

},{"feabf2ca0e600ebe":"dhz1j"}],"jNBhL":[function(require,module,exports) {
module.exports = require("6a5f4737e3ba1cfa").getBundleURL("1Sog7") + "4.0978be17.png" + "?" + Date.now();

},{"6a5f4737e3ba1cfa":"dhz1j"}],"fTonU":[function(require,module,exports) {
module.exports = require("56fc4c7319e52e16").getBundleURL("1Sog7") + "5.4ebfd290.png" + "?" + Date.now();

},{"56fc4c7319e52e16":"dhz1j"}],"8XNt3":[function(require,module,exports) {
module.exports = require("8fb0a93b55b1bac3").getBundleURL("1Sog7") + "6.1ace3298.png" + "?" + Date.now();

},{"8fb0a93b55b1bac3":"dhz1j"}],"5nryT":[function(require,module,exports) {
module.exports = require("d92a001c6bbdc287").getBundleURL("1Sog7") + "0.10cb56bf.png" + "?" + Date.now();

},{"d92a001c6bbdc287":"dhz1j"}],"dCI83":[function(require,module,exports) {
module.exports = require("7b74d9fe80b0c48b").getBundleURL("1Sog7") + "1.0f7c63f1.png" + "?" + Date.now();

},{"7b74d9fe80b0c48b":"dhz1j"}],"jPTrE":[function(require,module,exports) {
module.exports = require("42f1b3c043f7d29").getBundleURL("1Sog7") + "2.6eebf201.png" + "?" + Date.now();

},{"42f1b3c043f7d29":"dhz1j"}],"eP7vG":[function(require,module,exports) {
module.exports = require("6ca558ea3c98ef4c").getBundleURL("1Sog7") + "3.e3e59270.png" + "?" + Date.now();

},{"6ca558ea3c98ef4c":"dhz1j"}],"2ZDRg":[function(require,module,exports) {
module.exports = require("5606630c18ba923d").getBundleURL("1Sog7") + "4.a1a6b94b.png" + "?" + Date.now();

},{"5606630c18ba923d":"dhz1j"}],"6gmxa":[function(require,module,exports) {
module.exports = require("268fdb8e366a7cd3").getBundleURL("1Sog7") + "5.04ee9ca2.png" + "?" + Date.now();

},{"268fdb8e366a7cd3":"dhz1j"}],"bx5PX":[function(require,module,exports) {
module.exports = require("170646e85757563d").getBundleURL("1Sog7") + "6.2aa4cc81.png" + "?" + Date.now();

},{"170646e85757563d":"dhz1j"}],"8W0Ks":[function(require,module,exports) {
module.exports = require("2a572d342b7531a4").getBundleURL("1Sog7") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"2a572d342b7531a4":"dhz1j"}],"aN4zp":[function(require,module,exports) {
module.exports = require("5ece679970328c9").getBundleURL("1Sog7") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"5ece679970328c9":"dhz1j"}],"lEUO3":[function(require,module,exports) {
module.exports = require("d7df23118a4202b6").getBundleURL("1Sog7") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"d7df23118a4202b6":"dhz1j"}],"8F0Ni":[function(require,module,exports) {
module.exports = require("612228612e3f51c2").getBundleURL("1Sog7") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"612228612e3f51c2":"dhz1j"}],"4JnAQ":[function(require,module,exports) {
module.exports = require("a7a7cc0b4f2595").getBundleURL("1Sog7") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"a7a7cc0b4f2595":"dhz1j"}],"i29zk":[function(require,module,exports) {
module.exports = require("ac357b7dfbee25ae").getBundleURL("1Sog7") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"ac357b7dfbee25ae":"dhz1j"}],"6r1x7":[function(require,module,exports) {
module.exports = require("5bab5a00d68411cc").getBundleURL("1Sog7") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"5bab5a00d68411cc":"dhz1j"}],"j5O67":[function(require,module,exports) {
module.exports = require("37fc93ba320a7a0f").getBundleURL("1Sog7") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"37fc93ba320a7a0f":"dhz1j"}],"6Dnum":[function(require,module,exports) {
module.exports = require("4091396e98189cc6").getBundleURL("1Sog7") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"4091396e98189cc6":"dhz1j"}],"2soGk":[function(require,module,exports) {
module.exports = require("3312f6d495ffbad4").getBundleURL("1Sog7") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"3312f6d495ffbad4":"dhz1j"}],"1iJuh":[function(require,module,exports) {
module.exports = require("550fb584ea3f79bb").getBundleURL("1Sog7") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"550fb584ea3f79bb":"dhz1j"}],"57ZLX":[function(require,module,exports) {
module.exports = require("b4e637d7d181819e").getBundleURL("1Sog7") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"b4e637d7d181819e":"dhz1j"}],"6JzlW":[function(require,module,exports) {
module.exports = require("3b931b89f77da028").getBundleURL("1Sog7") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"3b931b89f77da028":"dhz1j"}],"khCNG":[function(require,module,exports) {
module.exports = require("5bd6cc89d8141e35").getBundleURL("1Sog7") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"5bd6cc89d8141e35":"dhz1j"}],"g3zP4":[function(require,module,exports) {
module.exports = require("3ed8728b32bbed3f").getBundleURL("1Sog7") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"3ed8728b32bbed3f":"dhz1j"}],"aoI2O":[function(require,module,exports) {
module.exports = require("12289f627e71f998").getBundleURL("1Sog7") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"12289f627e71f998":"dhz1j"}],"fEuoT":[function(require,module,exports) {
module.exports = require("ab2dce2964cb57fb").getBundleURL("1Sog7") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"ab2dce2964cb57fb":"dhz1j"}],"6BmPM":[function(require,module,exports) {
module.exports = require("23edbad5edb80b78").getBundleURL("1Sog7") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"23edbad5edb80b78":"dhz1j"}],"g7NyW":[function(require,module,exports) {
module.exports = require("638980b5367142ff").getBundleURL("1Sog7") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"638980b5367142ff":"dhz1j"}],"g33ed":[function(require,module,exports) {
module.exports = require("c79286214598051c").getBundleURL("1Sog7") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"c79286214598051c":"dhz1j"}],"bGQoZ":[function(require,module,exports) {
module.exports = require("6c9cdbe67e347044").getBundleURL("1Sog7") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"6c9cdbe67e347044":"dhz1j"}],"a6jmd":[function(require,module,exports) {
module.exports = require("988d3c80c8afb180").getBundleURL("1Sog7") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"988d3c80c8afb180":"dhz1j"}],"jKbMS":[function(require,module,exports) {
module.exports = require("2bf85ad1d414a58").getBundleURL("1Sog7") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"2bf85ad1d414a58":"dhz1j"}],"47iak":[function(require,module,exports) {
module.exports = require("900e5d35b620998").getBundleURL("1Sog7") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"900e5d35b620998":"dhz1j"}],"30etO":[function(require,module,exports) {
module.exports = require("f861b97ce89b9f54").getBundleURL("1Sog7") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"f861b97ce89b9f54":"dhz1j"}],"4y098":[function(require,module,exports) {
module.exports = require("ffc1879ecf0499bf").getBundleURL("1Sog7") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"ffc1879ecf0499bf":"dhz1j"}],"a9pOd":[function(require,module,exports) {
module.exports = require("c82fa44eb1d81f4").getBundleURL("1Sog7") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"c82fa44eb1d81f4":"dhz1j"}],"g2UkV":[function(require,module,exports) {
module.exports = require("4155d29a72876595").getBundleURL("1Sog7") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"4155d29a72876595":"dhz1j"}],"d79M2":[function(require,module,exports) {
module.exports = require("65bd2494b0c58823").getBundleURL("1Sog7") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"65bd2494b0c58823":"dhz1j"}],"f86QD":[function(require,module,exports) {
module.exports = require("5b698dfaca846a75").getBundleURL("1Sog7") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"5b698dfaca846a75":"dhz1j"}],"8KdBz":[function(require,module,exports) {
module.exports = require("19ec18e5b81a9454").getBundleURL("1Sog7") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"19ec18e5b81a9454":"dhz1j"}],"kmH8c":[function(require,module,exports) {
module.exports = require("c96b3eb5f945f814").getBundleURL("1Sog7") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"c96b3eb5f945f814":"dhz1j"}],"6SeFp":[function(require,module,exports) {
module.exports = require("8e6eb3211bc2e24f").getBundleURL("1Sog7") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"8e6eb3211bc2e24f":"dhz1j"}],"9La36":[function(require,module,exports) {
module.exports = require("586d916aba6aa4d8").getBundleURL("1Sog7") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"586d916aba6aa4d8":"dhz1j"}],"6imS2":[function(require,module,exports) {
module.exports = require("82f55e08a64bf983").getBundleURL("1Sog7") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"82f55e08a64bf983":"dhz1j"}],"5RKxb":[function(require,module,exports) {
module.exports = require("2f37011d23246e43").getBundleURL("1Sog7") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"2f37011d23246e43":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["d11vk","2TDrw"], "2TDrw", "parcelRequire3c64")

//# sourceMappingURL=013detalle-nazare.3c24c16e.js.map
