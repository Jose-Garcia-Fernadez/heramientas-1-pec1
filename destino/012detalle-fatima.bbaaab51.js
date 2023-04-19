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
})({"4J858":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "b7a6892bbbaaab51";
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

},{}],"l3oHL":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "fatima";
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
window.siguiente_video_fatima = cargar_fatima_video;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_fatima();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    cargar_fatima_video(1, 1);
    setTimeout(CambiarAutomaticamente, tiempo_video * 1000);
}
function cargar_fatima_video(incremento, parametro) {
    var w = video.clientWidth, h = video.clientHeight;
    var listado, comentario, c;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_mp4.fatima_mp4;
    listado = (0, _listadosJs.l).mp4.fatima_mp4[0];
    if (w > 600) {
        listado = (0, _listadosJs.l).mp4.fatima_mp4[1];
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).mp4.fatima_mp4[2];
        c = " grande ";
    }
    switch(parametro){
        case 1:
            i_listado = i_listado + incremento;
            if (i_listado > listado.length - 1) i_listado = 0;
            if (i_listado < 0) i_listado = listado.length - 1;
            video.src = listado[i_listado];
            h2.innerHTML = "Presentaci\xf3n de Videos de " + ciudad + " " + (0, _listadosJs.tiempo_carga);
            h3.innerHTML = comentario[i_listado] + " " + i_listado + "(video " + c + ")" + " w=" + w + " h=" + h;
            tiempo_video = (0, _listadosJs.l).duracion.fatima_duracion[i_listado];
            break;
        case 2:
            break; // ????
    }
}
function pantallaCompleta_fatima() {
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
} // ctrl + h  ---> fatima - 'otra ciudad'
 /*var ciudad='fatima'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_fatima=cargar_fatima_video;  


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


function cargar_fatima_video(incremento,parametro){
  var w=document.documentElement.clientWidth,h=document.documentElement.clientHeight;
  var listado, comentario;
  // Dependiendo del ancho cargo un conjunto distintos de fotos y la ciudad
  comentario= w>h ? l.comentario_1.fatima_1: l.comentario_6.fatima_6;
  listado= w>h ? l.fotos.fatima_png_300_1: l.fotos.fatima_png_300_6; 
  if (w >  600) listado= w>h ? l.fotos.fatima_png_600_1: l.fotos.fatima_png_600_6;
  if (w > 1000) listado= w>h ? l.fotos.fatima_png_900_1: l.fotos.fatima_png_900_6;
 
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
var ciudad='fatima'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_video_fatima=cargar_video_fatima;  
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
  cargar_video_fatima(inc,1);  
  setTimeout(solo, t);
}

function cargar_video_fatima(incremento,parametro){
  var ww=video.clientWidth;
  var listado, comentario,c;
  listado=l.mp4.fatima_mp4[0]; c= " pequeña " ;
  if (ww >  600)  { listado=l.mp4.fatima_mp4[1];c= " mediana " ; }
  if (ww > 1000)  { listado=l.mp4.fatima_mp4[2];c= " grande " ;}
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
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9"
];
var fatima_mp4 = [
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima"
];
var obidos_mp4 = [
    "Portugal Obidos",
    "Portugal Obidos",
    "Portugal Obidos",
    "Portugal Obidos"
];
var alcobasa_mp4 = [
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a"
];
var sintra_mp4 = [
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra"
];
var nazare_1 = [
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
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9"
];
var fatima_1 = [
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima"
];
var obidos_1 = [
    "Portugal Obidos",
    "Portugal Obidos",
    "Portugal Obidos",
    "Portugal Obidos"
];
var alcobasa_1 = [
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a"
];
var sintra_1 = [
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra"
];
var nazare_6 = [
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9",
    "Portugal Nazar\xe9"
];
var fatima_6 = [
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima",
    "Portugal  Santuario de F\xe1tima"
];
var obidos_6 = [
    "Portugal Obidos",
    "Portugal Obidos",
    "Portugal Obidos"
];
var alcobasa_6 = [
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a",
    "Portugal Monasterio de Alcoba\xe7a"
];
var sintra_6 = [
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra",
    "Portugal Sintra"
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

},{"86781a753eb4dbf":"7PxlG","89ea5d03c92266e0":"bxcOr","4b3eab43661026ee":"dVwX4","1b58bb2c4e8118db":"6eC3O","a73d7c9e4390513b":"bAIvC","18f01d5dbbda959":"fIz39","5b20b0e56b82945a":"kTIKf","c5cb6c0359b0662d":"5BODH","a63b65706a9c9fe5":"fygJX","e748f6caa373ab73":"9vIfv","dfdedac191fae4f0":"gmnhM","f6f096fdb88eaef6":"8DudJ","9280d8a758940830":"2cuwk","282ccbf2baeec961":"cW38z","d39f9622f5686817":"12nvt","483f2d56ab4cdedd":"1RFU9","da461ea778990854":"323Hs","96f651fb571aa9eb":"jL8wd","e543a391b0f85f4f":"9uvRj","a8cf664de7077859":"gZtCh","598ca8ca53d8a49b":"cLuHW","3c3b7f9d3e56e115":"4xMXK","954440e7a3d1f441":"eWJwX","b4cb97e52f2cbd52":"64vMC","7b09e4309565582d":"lMJtv","e6ea0af4531463e2":"8n7K6","42085257a46e5e09":"5z1Eo","6b3ddeea96e7d95a":"cL9Lk","afe3ae5977faa1f8":"9Gyig","9446df6f7494726d":"dKf7M","62a84e90f44c3be3":"cxMf7","a531b65afc6a06b0":"4aSYP","323e4a910dee7e0a":"7IH71","5adaf0b1f2da779b":"52T0t","18015bf652a8590c":"7VELQ","839e19b40af20bc9":"1ARJD","a51b127073443e8b":"dh2TV","334a20b09cebc20f":"fM2G1","d3c31bcf734c4b17":"gYSUK","91fb4da4c9f50617":"fs85t","7951652e2eeb278f":"a1avP","9d81a0598f30e880":"c2sNd","f7184a54f57fe61e":"lNLwS","aa4e305c904a8bdc":"gLj2V","e3c230bc4328e939":"hPImh","91da9c9beb8cec92":"7RtaS","6788e9eb952c5639":"5p6hG","3e1f56c3a8f09a92":"2uBGc","ba8d1fe6ef07e224":"6Ko1I","e7ed43fffc09e558":"hD1Vr","eb7f4bebc9ae34f3":"5ZObD","f49bbc3ce90230f3":"hE4dx","c6cc8feb00c43ccc":"6Pbxo","da3e98b22adbeb4d":"1D8jt","ac988f97513b753d":"cGE0J","9870197f68f46ce0":"hSZsX","1909d7c96cdc25f":"d39AR","71900ce38a39f45e":"7XBGe","d10c891d581aa72e":"eZju7","4e86e364e53b9592":"jPxp3","da9d375ff4cc6e20":"hxYw0","4dc71cac2c1091fe":"eNvOk","2ae7e13dc9f19b08":"6R3w3","d4a94a2ec96f0f2a":"lwr0z","4d0999fb1640b484":"7PAA9","7eb1276e543406ee":"dP8ke","a1c7d50e344e35d":"1tLus","d8d3e9b2c45514ef":"dpOJ8","73770b04ebc58a8f":"PTutI","3e326606efe38636":"b36X3","6911c8c8c7ec7f4b":"kiW30","8bfeb5a28916238c":"gNLLo","f9da5f86d76bdb5b":"fYRyc","ab0ad55909afb45d":"cqS6s","12b4ab72d67dbba1":"c1J4M","3fdef08c5feabc1f":"9KuIH","97900455fc019c34":"8upF4","b1db13bef3dedd4":"3k86n","8c3d146eaaa021db":"gw2DJ","8188eea6f1104e67":"gchYJ","ddf969591a3cfbba":"aHI0q","f51181bb6365decf":"iv03S","cd282a7a417c03b7":"aZ0sg","32d9f1c4543900f0":"a5wKZ","e759ed436cf99224":"fKMsR","dfb837cbc24b9472":"7hVMh","e112f5b01b10cbb3":"j6mwh","1166f1f821e20afd":"1ammN","201fc2d2fa0f7eac":"43wJL","11280debdefd0431":"lvSwh","cdfa70ae1d308d00":"e5VS0","f34fe41922b2586d":"aVTgd","8fe9ec68514a39e3":"4Txd0","deb2151dfbb509cd":"aJruV","10cc9bcddfb0a9e3":"jqa2c","8766a5d2d9a1cbe5":"jELTP","2346505ad78baa47":"lxZQH","565cc7de1c720893":"7VvKq","20604925b297b483":"k7QKe","b60f28e19ed5645d":"3RcwV","46a3ac90ead8eb4b":"3ZaC9","8f8930169555991d":"hWDWm","54bfe7ee4aef0962":"djXt5","773d8be78472f983":"kHUDr","d562071e9c1ece6":"jZLWR","b4fcf97888be254":"bsx3H","9935775539310a4":"bbbsu","dfd60661f83422de":"R6XgF","9d0c04b5449c6e78":"9TGgO","720ccb4e93255b25":"i5JDg","6ccaff7eb0bdeb93":"auOkM","4806d8e218627ab5":"03ABU","2c4f60e32f378ca9":"8VKhm","865f538633d0b1dc":"c3Q49","39be71bc5a9474e0":"e670a","862f63336e6a3803":"sZyhz","64389f8910c4a5b9":"hsIrG","47d3b6b473ade444":"aPUpv","af58e9024f3ec2aa":"esjCZ","d5c714291b3e2173":"jExRb","d9f14ea8509d3156":"ci7r6","e23e1493d8180c78":"ZIpE4","bd8f00b86989f84b":"6EYSq","f164ec680e944d6d":"bf3DB","fc926fb4ed15df4":"1e74S","77d47f70247ccaa0":"h3zex","213ed12e877bdf8":"9FdKY","337f47ad9c8e55bb":"f5i4k","dc15afeda3fdbc10":"bQh6b","ffdc7890af793ea9":"2zTMC","dd871b27f50d719f":"igsld","e3ed8d3f9f24501d":"hTChm","a661ec8bde091a63":"dcN2J","289dada425dcdbf0":"9Ykm4","93ca55a06b72c0f4":"8aUm3","3343679c8bbbb107":"1fDx8","fb58c487e522e11b":"k8BhZ","d696c059aa7292c1":"2Sp0k","4f72da706ff07282":"3vOIE","2d95b671d5e6b31d":"bDwsV","2f4a2df8e9e6c6c5":"7D4yL","c26a8c456b0bfbbd":"2HO1b","3f701d22f6a1ae4f":"hOz58","19450e227fa8d4e6":"b12Wj","1e27e0a9c5922d42":"1qr44","a084f06dc30f536f":"fYaUk","2fa52e674a840793":"7MhRe","e94ec1065f59594f":"hGy5x","4a3d192459069081":"72vsb","b65864aa197fa6d0":"bvPLn","c7939ca45e20c9e6":"98BNY","4e948917a9e514ef":"i00OR","3898a29ba68820":"glbOL","26317caa31b191b2":"2Pf7p","42715847c1bc4744":"FKtKW","421a5f52f1a54bf2":"9YICl","7b382b2b0bbad026":"7GCDp","efcbb5cde267920c":"dAUlq","ecaccd9706afa493":"fFGBA","29dd4c45ad77a411":"2vZOZ","9ebc252dff86358a":"452sq","181e6b8ac3026ce3":"bpG8U","f0d63a691568917b":"8d5FV","cb2bff42f9bf1da3":"gBugk","2008e68ae020640b":"7mnhw","7703d2aff3ac19f2":"2ltCO","cc7873bdb72ab106":"euP7b","ddb0c8ec6e1128ec":"3WAZ5","f0fdfe553e8b2b8b":"3fjMP","83fd77e6e3d1ed4d":"2nsDs","bfdc94773439b970":"imvdJ","e53408e84c34725c":"3kKYA","dee32d35a055d161":"jyoDi","8eb0fe6d497319ac":"lGz52","2d4bf2da7d0a6ebf":"3Vyjw","97707bd921d6bd97":"1GwvV","112c0986b11e3773":"jg0xk","3d504689dbdd2069":"4JYc4","38539e1f0ba5a0da":"9DnUP","adf6607a48b65015":"ilgJ6","6a060de4f8cd5f51":"91UjH","a1a4532e178c00e4":"hs74E","644f90a72aefea2f":"guiK4","67704ca106e263d":"aEv5F","5aa9c5adff06bff6":"lNcRp","d2192ee8df9e83c3":"bb49E","11023e0d66f4a5c6":"hqatR","a1c31f725c1b9044":"17hTF","557036c03b3c0cf2":"j57K7","cfcd6ed14b0881ce":"2lHgN","c49dc6a73b22dff2":"9khKh","feb7bc20d8ad2999":"ltJLV","44700e4b32d1904e":"3QKnE","b917fe1860ba64a6":"dCX1K","19f93dc81edaaaf1":"bN10C","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7PxlG":[function(require,module,exports) {
module.exports = require("968fbf6c4a93266d").getBundleURL("fLzbk") + "0.48981f22.png" + "?" + Date.now();

},{"968fbf6c4a93266d":"dhz1j"}],"bxcOr":[function(require,module,exports) {
module.exports = require("308e682b23950f75").getBundleURL("fLzbk") + "1.f94ee4de.png" + "?" + Date.now();

},{"308e682b23950f75":"dhz1j"}],"dVwX4":[function(require,module,exports) {
module.exports = require("934c8f499954e5bb").getBundleURL("fLzbk") + "2.31f5056c.png" + "?" + Date.now();

},{"934c8f499954e5bb":"dhz1j"}],"6eC3O":[function(require,module,exports) {
module.exports = require("3306074269c3bef7").getBundleURL("fLzbk") + "3.ce1b885f.png" + "?" + Date.now();

},{"3306074269c3bef7":"dhz1j"}],"bAIvC":[function(require,module,exports) {
module.exports = require("149b121d43d18349").getBundleURL("fLzbk") + "4.6fe91547.png" + "?" + Date.now();

},{"149b121d43d18349":"dhz1j"}],"fIz39":[function(require,module,exports) {
module.exports = require("ae02403b8ce71b43").getBundleURL("fLzbk") + "5.a917cfd3.png" + "?" + Date.now();

},{"ae02403b8ce71b43":"dhz1j"}],"kTIKf":[function(require,module,exports) {
module.exports = require("2eaed9b02444ba31").getBundleURL("fLzbk") + "6.0d46346e.png" + "?" + Date.now();

},{"2eaed9b02444ba31":"dhz1j"}],"5BODH":[function(require,module,exports) {
module.exports = require("248eb4f89fe9a4db").getBundleURL("fLzbk") + "7.320708f3.png" + "?" + Date.now();

},{"248eb4f89fe9a4db":"dhz1j"}],"fygJX":[function(require,module,exports) {
module.exports = require("83b79f152658166").getBundleURL("fLzbk") + "8.5e948736.png" + "?" + Date.now();

},{"83b79f152658166":"dhz1j"}],"9vIfv":[function(require,module,exports) {
module.exports = require("6810fe18ca99288f").getBundleURL("fLzbk") + "9.ff59ab43.png" + "?" + Date.now();

},{"6810fe18ca99288f":"dhz1j"}],"gmnhM":[function(require,module,exports) {
module.exports = require("814de718286dadb5").getBundleURL("fLzbk") + "10.31b47b87.png" + "?" + Date.now();

},{"814de718286dadb5":"dhz1j"}],"8DudJ":[function(require,module,exports) {
module.exports = require("c37e506492d8a38d").getBundleURL("fLzbk") + "11.cc89efaf.png" + "?" + Date.now();

},{"c37e506492d8a38d":"dhz1j"}],"2cuwk":[function(require,module,exports) {
module.exports = require("2d3d1893994557dc").getBundleURL("fLzbk") + "12.9cf068b9.png" + "?" + Date.now();

},{"2d3d1893994557dc":"dhz1j"}],"cW38z":[function(require,module,exports) {
module.exports = require("fe8453d544c58a43").getBundleURL("fLzbk") + "13.3fd5fa74.png" + "?" + Date.now();

},{"fe8453d544c58a43":"dhz1j"}],"12nvt":[function(require,module,exports) {
module.exports = require("f3367beec07c5c63").getBundleURL("fLzbk") + "14.85f8074c.png" + "?" + Date.now();

},{"f3367beec07c5c63":"dhz1j"}],"1RFU9":[function(require,module,exports) {
module.exports = require("f3f247990cc0ba01").getBundleURL("fLzbk") + "15.b3971def.png" + "?" + Date.now();

},{"f3f247990cc0ba01":"dhz1j"}],"323Hs":[function(require,module,exports) {
module.exports = require("1e5ce1b417cb14cd").getBundleURL("fLzbk") + "16.e924273a.png" + "?" + Date.now();

},{"1e5ce1b417cb14cd":"dhz1j"}],"jL8wd":[function(require,module,exports) {
module.exports = require("34a8ac30a103acd6").getBundleURL("fLzbk") + "0.827cb71f.png" + "?" + Date.now();

},{"34a8ac30a103acd6":"dhz1j"}],"9uvRj":[function(require,module,exports) {
module.exports = require("47d93212b1fbb661").getBundleURL("fLzbk") + "1.1ba72b2c.png" + "?" + Date.now();

},{"47d93212b1fbb661":"dhz1j"}],"gZtCh":[function(require,module,exports) {
module.exports = require("2ba9dcd98ebbb840").getBundleURL("fLzbk") + "2.a537714e.png" + "?" + Date.now();

},{"2ba9dcd98ebbb840":"dhz1j"}],"cLuHW":[function(require,module,exports) {
module.exports = require("384aaf83fa4dd791").getBundleURL("fLzbk") + "3.968442f0.png" + "?" + Date.now();

},{"384aaf83fa4dd791":"dhz1j"}],"4xMXK":[function(require,module,exports) {
module.exports = require("5a0cb4485287162b").getBundleURL("fLzbk") + "4.1087c966.png" + "?" + Date.now();

},{"5a0cb4485287162b":"dhz1j"}],"eWJwX":[function(require,module,exports) {
module.exports = require("f836f5cadfb10e0e").getBundleURL("fLzbk") + "5.10b3d4d5.png" + "?" + Date.now();

},{"f836f5cadfb10e0e":"dhz1j"}],"64vMC":[function(require,module,exports) {
module.exports = require("f84a1935b3f07ff5").getBundleURL("fLzbk") + "6.b8b5ea54.png" + "?" + Date.now();

},{"f84a1935b3f07ff5":"dhz1j"}],"lMJtv":[function(require,module,exports) {
module.exports = require("9ab13b4ccab7632e").getBundleURL("fLzbk") + "7.a88fc70f.png" + "?" + Date.now();

},{"9ab13b4ccab7632e":"dhz1j"}],"8n7K6":[function(require,module,exports) {
module.exports = require("60a343e873f53793").getBundleURL("fLzbk") + "8.624d70bd.png" + "?" + Date.now();

},{"60a343e873f53793":"dhz1j"}],"5z1Eo":[function(require,module,exports) {
module.exports = require("3118115c45e83cf3").getBundleURL("fLzbk") + "9.85986fa7.png" + "?" + Date.now();

},{"3118115c45e83cf3":"dhz1j"}],"cL9Lk":[function(require,module,exports) {
module.exports = require("1683e16b931212df").getBundleURL("fLzbk") + "10.5d974f61.png" + "?" + Date.now();

},{"1683e16b931212df":"dhz1j"}],"9Gyig":[function(require,module,exports) {
module.exports = require("de9b93fe3a0a8a1c").getBundleURL("fLzbk") + "11.00514082.png" + "?" + Date.now();

},{"de9b93fe3a0a8a1c":"dhz1j"}],"dKf7M":[function(require,module,exports) {
module.exports = require("396e02eca99efe9a").getBundleURL("fLzbk") + "12.8e43d119.png" + "?" + Date.now();

},{"396e02eca99efe9a":"dhz1j"}],"cxMf7":[function(require,module,exports) {
module.exports = require("285560b5572ecb8c").getBundleURL("fLzbk") + "13.6d974d03.png" + "?" + Date.now();

},{"285560b5572ecb8c":"dhz1j"}],"4aSYP":[function(require,module,exports) {
module.exports = require("b538b502fb6f3d29").getBundleURL("fLzbk") + "14.c01188a0.png" + "?" + Date.now();

},{"b538b502fb6f3d29":"dhz1j"}],"7IH71":[function(require,module,exports) {
module.exports = require("5a8feb642156d6e0").getBundleURL("fLzbk") + "15.98c7edf9.png" + "?" + Date.now();

},{"5a8feb642156d6e0":"dhz1j"}],"52T0t":[function(require,module,exports) {
module.exports = require("e53523cffbc73597").getBundleURL("fLzbk") + "16.46395d71.png" + "?" + Date.now();

},{"e53523cffbc73597":"dhz1j"}],"7VELQ":[function(require,module,exports) {
module.exports = require("f7e2d4270148edef").getBundleURL("fLzbk") + "0.6135d861.png" + "?" + Date.now();

},{"f7e2d4270148edef":"dhz1j"}],"1ARJD":[function(require,module,exports) {
module.exports = require("5f8b089c2858c1ab").getBundleURL("fLzbk") + "1.ab36ca3c.png" + "?" + Date.now();

},{"5f8b089c2858c1ab":"dhz1j"}],"dh2TV":[function(require,module,exports) {
module.exports = require("db6daf20944a2a6b").getBundleURL("fLzbk") + "2.637b0503.png" + "?" + Date.now();

},{"db6daf20944a2a6b":"dhz1j"}],"fM2G1":[function(require,module,exports) {
module.exports = require("c7cb1f39580e720").getBundleURL("fLzbk") + "3.ea6e2859.png" + "?" + Date.now();

},{"c7cb1f39580e720":"dhz1j"}],"gYSUK":[function(require,module,exports) {
module.exports = require("ff806fe304786a17").getBundleURL("fLzbk") + "4.302416e9.png" + "?" + Date.now();

},{"ff806fe304786a17":"dhz1j"}],"fs85t":[function(require,module,exports) {
module.exports = require("6ba6cfe90c4dfd71").getBundleURL("fLzbk") + "5.69800b21.png" + "?" + Date.now();

},{"6ba6cfe90c4dfd71":"dhz1j"}],"a1avP":[function(require,module,exports) {
module.exports = require("e498793aa0813ee6").getBundleURL("fLzbk") + "6.9611621f.png" + "?" + Date.now();

},{"e498793aa0813ee6":"dhz1j"}],"c2sNd":[function(require,module,exports) {
module.exports = require("629bbf7ab58251fd").getBundleURL("fLzbk") + "7.387a99b8.png" + "?" + Date.now();

},{"629bbf7ab58251fd":"dhz1j"}],"lNLwS":[function(require,module,exports) {
module.exports = require("676e380040cf53cb").getBundleURL("fLzbk") + "8.868e1eb3.png" + "?" + Date.now();

},{"676e380040cf53cb":"dhz1j"}],"gLj2V":[function(require,module,exports) {
module.exports = require("d40839d521f139d0").getBundleURL("fLzbk") + "9.73cbc4df.png" + "?" + Date.now();

},{"d40839d521f139d0":"dhz1j"}],"hPImh":[function(require,module,exports) {
module.exports = require("3b42c7ab574dab19").getBundleURL("fLzbk") + "10.5089e6a9.png" + "?" + Date.now();

},{"3b42c7ab574dab19":"dhz1j"}],"7RtaS":[function(require,module,exports) {
module.exports = require("2c339d13c43b759c").getBundleURL("fLzbk") + "11.f9276e6c.png" + "?" + Date.now();

},{"2c339d13c43b759c":"dhz1j"}],"5p6hG":[function(require,module,exports) {
module.exports = require("f70ade4e71155130").getBundleURL("fLzbk") + "12.28e07f45.png" + "?" + Date.now();

},{"f70ade4e71155130":"dhz1j"}],"2uBGc":[function(require,module,exports) {
module.exports = require("ad899f15fa37280e").getBundleURL("fLzbk") + "13.3e9a788c.png" + "?" + Date.now();

},{"ad899f15fa37280e":"dhz1j"}],"6Ko1I":[function(require,module,exports) {
module.exports = require("475734df370ae7a3").getBundleURL("fLzbk") + "14.55e925f3.png" + "?" + Date.now();

},{"475734df370ae7a3":"dhz1j"}],"hD1Vr":[function(require,module,exports) {
module.exports = require("22068952e5e77e15").getBundleURL("fLzbk") + "15.45dd04ca.png" + "?" + Date.now();

},{"22068952e5e77e15":"dhz1j"}],"5ZObD":[function(require,module,exports) {
module.exports = require("3620e0bd138dde9e").getBundleURL("fLzbk") + "16.da3dfac2.png" + "?" + Date.now();

},{"3620e0bd138dde9e":"dhz1j"}],"hE4dx":[function(require,module,exports) {
module.exports = require("7a59e6907bf2b94d").getBundleURL("fLzbk") + "0.1859081d.png" + "?" + Date.now();

},{"7a59e6907bf2b94d":"dhz1j"}],"6Pbxo":[function(require,module,exports) {
module.exports = require("9c45e51770aeecd0").getBundleURL("fLzbk") + "1.927d66ed.png" + "?" + Date.now();

},{"9c45e51770aeecd0":"dhz1j"}],"1D8jt":[function(require,module,exports) {
module.exports = require("a7ace6786958a197").getBundleURL("fLzbk") + "2.363f17fd.png" + "?" + Date.now();

},{"a7ace6786958a197":"dhz1j"}],"cGE0J":[function(require,module,exports) {
module.exports = require("7884b018093bdc04").getBundleURL("fLzbk") + "0.a7ae4123.png" + "?" + Date.now();

},{"7884b018093bdc04":"dhz1j"}],"hSZsX":[function(require,module,exports) {
module.exports = require("fef3d1a563aaa728").getBundleURL("fLzbk") + "1.88470ddf.png" + "?" + Date.now();

},{"fef3d1a563aaa728":"dhz1j"}],"d39AR":[function(require,module,exports) {
module.exports = require("fe55c1d05b40e10e").getBundleURL("fLzbk") + "2.de54b28c.png" + "?" + Date.now();

},{"fe55c1d05b40e10e":"dhz1j"}],"7XBGe":[function(require,module,exports) {
module.exports = require("8828bfb566c4d6b8").getBundleURL("fLzbk") + "0.bdeefb48.png" + "?" + Date.now();

},{"8828bfb566c4d6b8":"dhz1j"}],"eZju7":[function(require,module,exports) {
module.exports = require("5b376ac6bf4c792e").getBundleURL("fLzbk") + "1.c862755d.png" + "?" + Date.now();

},{"5b376ac6bf4c792e":"dhz1j"}],"jPxp3":[function(require,module,exports) {
module.exports = require("ec0a251b47df6534").getBundleURL("fLzbk") + "2.3a3879c0.png" + "?" + Date.now();

},{"ec0a251b47df6534":"dhz1j"}],"hxYw0":[function(require,module,exports) {
module.exports = require("977082a06e122a23").getBundleURL("fLzbk") + "0.2d5254b4.png" + "?" + Date.now();

},{"977082a06e122a23":"dhz1j"}],"eNvOk":[function(require,module,exports) {
module.exports = require("daeb91dacf4eaa7d").getBundleURL("fLzbk") + "1.53be37fa.png" + "?" + Date.now();

},{"daeb91dacf4eaa7d":"dhz1j"}],"6R3w3":[function(require,module,exports) {
module.exports = require("76ff7d293f5762c3").getBundleURL("fLzbk") + "2.f6226c8b.png" + "?" + Date.now();

},{"76ff7d293f5762c3":"dhz1j"}],"lwr0z":[function(require,module,exports) {
module.exports = require("263e1bc273b917ff").getBundleURL("fLzbk") + "3.cbffaa2e.png" + "?" + Date.now();

},{"263e1bc273b917ff":"dhz1j"}],"7PAA9":[function(require,module,exports) {
module.exports = require("ad47f0c261bfc1de").getBundleURL("fLzbk") + "4.13acbc59.png" + "?" + Date.now();

},{"ad47f0c261bfc1de":"dhz1j"}],"dP8ke":[function(require,module,exports) {
module.exports = require("4ce67846ab82ee20").getBundleURL("fLzbk") + "5.ef65f0ad.png" + "?" + Date.now();

},{"4ce67846ab82ee20":"dhz1j"}],"1tLus":[function(require,module,exports) {
module.exports = require("c3874d8ddd21a61f").getBundleURL("fLzbk") + "6.93bb63df.png" + "?" + Date.now();

},{"c3874d8ddd21a61f":"dhz1j"}],"dpOJ8":[function(require,module,exports) {
module.exports = require("5390c1f26d296294").getBundleURL("fLzbk") + "0.c7b4b27a.png" + "?" + Date.now();

},{"5390c1f26d296294":"dhz1j"}],"PTutI":[function(require,module,exports) {
module.exports = require("831d1075dc470857").getBundleURL("fLzbk") + "1.a62dfbae.png" + "?" + Date.now();

},{"831d1075dc470857":"dhz1j"}],"b36X3":[function(require,module,exports) {
module.exports = require("e2dc1145c80dfa84").getBundleURL("fLzbk") + "2.e3978c80.png" + "?" + Date.now();

},{"e2dc1145c80dfa84":"dhz1j"}],"kiW30":[function(require,module,exports) {
module.exports = require("f446e241258b163f").getBundleURL("fLzbk") + "3.4641ec5b.png" + "?" + Date.now();

},{"f446e241258b163f":"dhz1j"}],"gNLLo":[function(require,module,exports) {
module.exports = require("d2640d9695513f17").getBundleURL("fLzbk") + "4.46679935.png" + "?" + Date.now();

},{"d2640d9695513f17":"dhz1j"}],"fYRyc":[function(require,module,exports) {
module.exports = require("c883b6ff1e87a9ba").getBundleURL("fLzbk") + "5.7cb7235f.png" + "?" + Date.now();

},{"c883b6ff1e87a9ba":"dhz1j"}],"cqS6s":[function(require,module,exports) {
module.exports = require("a61ac590c8cd2053").getBundleURL("fLzbk") + "6.25e0793b.png" + "?" + Date.now();

},{"a61ac590c8cd2053":"dhz1j"}],"c1J4M":[function(require,module,exports) {
module.exports = require("7cc471246995625").getBundleURL("fLzbk") + "0.3c81352a.png" + "?" + Date.now();

},{"7cc471246995625":"dhz1j"}],"9KuIH":[function(require,module,exports) {
module.exports = require("d533a87842ad07fd").getBundleURL("fLzbk") + "1.5cc77829.png" + "?" + Date.now();

},{"d533a87842ad07fd":"dhz1j"}],"8upF4":[function(require,module,exports) {
module.exports = require("ceb7c30f35ef1129").getBundleURL("fLzbk") + "2.8e275dc1.png" + "?" + Date.now();

},{"ceb7c30f35ef1129":"dhz1j"}],"3k86n":[function(require,module,exports) {
module.exports = require("be8127be4fbb4ee2").getBundleURL("fLzbk") + "3.a9db7ab7.png" + "?" + Date.now();

},{"be8127be4fbb4ee2":"dhz1j"}],"gw2DJ":[function(require,module,exports) {
module.exports = require("a0f7cb8a0507175b").getBundleURL("fLzbk") + "4.e32a50ca.png" + "?" + Date.now();

},{"a0f7cb8a0507175b":"dhz1j"}],"gchYJ":[function(require,module,exports) {
module.exports = require("9a04021a774597ff").getBundleURL("fLzbk") + "5.c1536481.png" + "?" + Date.now();

},{"9a04021a774597ff":"dhz1j"}],"aHI0q":[function(require,module,exports) {
module.exports = require("3997c4160fcc839c").getBundleURL("fLzbk") + "6.288f575f.png" + "?" + Date.now();

},{"3997c4160fcc839c":"dhz1j"}],"iv03S":[function(require,module,exports) {
module.exports = require("400efd8ca6d8b121").getBundleURL("fLzbk") + "0.1fd51615.png" + "?" + Date.now();

},{"400efd8ca6d8b121":"dhz1j"}],"aZ0sg":[function(require,module,exports) {
module.exports = require("bc6c55e2dd2749c2").getBundleURL("fLzbk") + "1.e84c2436.png" + "?" + Date.now();

},{"bc6c55e2dd2749c2":"dhz1j"}],"a5wKZ":[function(require,module,exports) {
module.exports = require("c414685e54390b0").getBundleURL("fLzbk") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"c414685e54390b0":"dhz1j"}],"fKMsR":[function(require,module,exports) {
module.exports = require("4a2b78d1dd363b23").getBundleURL("fLzbk") + "0.7a68699b.png" + "?" + Date.now();

},{"4a2b78d1dd363b23":"dhz1j"}],"7hVMh":[function(require,module,exports) {
module.exports = require("80bbfab1622702c4").getBundleURL("fLzbk") + "1.fff421cb.png" + "?" + Date.now();

},{"80bbfab1622702c4":"dhz1j"}],"j6mwh":[function(require,module,exports) {
module.exports = require("b59de910114bad96").getBundleURL("fLzbk") + "2.2fdbefa7.png" + "?" + Date.now();

},{"b59de910114bad96":"dhz1j"}],"1ammN":[function(require,module,exports) {
module.exports = require("d9211a9f38b8abe8").getBundleURL("fLzbk") + "0.5282a781.png" + "?" + Date.now();

},{"d9211a9f38b8abe8":"dhz1j"}],"43wJL":[function(require,module,exports) {
module.exports = require("ce245db33d1cd01f").getBundleURL("fLzbk") + "1.6a9b3b01.png" + "?" + Date.now();

},{"ce245db33d1cd01f":"dhz1j"}],"lvSwh":[function(require,module,exports) {
module.exports = require("c4925b7679022367").getBundleURL("fLzbk") + "2.6ed29ec3.png" + "?" + Date.now();

},{"c4925b7679022367":"dhz1j"}],"e5VS0":[function(require,module,exports) {
module.exports = require("3c1541f62c0363b2").getBundleURL("fLzbk") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"3c1541f62c0363b2":"dhz1j"}],"aVTgd":[function(require,module,exports) {
module.exports = require("600dab1ee17ad341").getBundleURL("fLzbk") + "1.065ffd47.png" + "?" + Date.now();

},{"600dab1ee17ad341":"dhz1j"}],"4Txd0":[function(require,module,exports) {
module.exports = require("e57545e7e0a52219").getBundleURL("fLzbk") + "2.29f32c63.png" + "?" + Date.now();

},{"e57545e7e0a52219":"dhz1j"}],"aJruV":[function(require,module,exports) {
module.exports = require("af0d933b2c9223a8").getBundleURL("fLzbk") + "0.c2bc436e.png" + "?" + Date.now();

},{"af0d933b2c9223a8":"dhz1j"}],"jqa2c":[function(require,module,exports) {
module.exports = require("bf4f83bf28f05a4f").getBundleURL("fLzbk") + "1.e224ca18.png" + "?" + Date.now();

},{"bf4f83bf28f05a4f":"dhz1j"}],"jELTP":[function(require,module,exports) {
module.exports = require("76d8290894fffb8c").getBundleURL("fLzbk") + "2.20af644b.png" + "?" + Date.now();

},{"76d8290894fffb8c":"dhz1j"}],"lxZQH":[function(require,module,exports) {
module.exports = require("5b38d1caa94a262f").getBundleURL("fLzbk") + "0.740b269f.png" + "?" + Date.now();

},{"5b38d1caa94a262f":"dhz1j"}],"7VvKq":[function(require,module,exports) {
module.exports = require("71038447968fe180").getBundleURL("fLzbk") + "1.88c581e4.png" + "?" + Date.now();

},{"71038447968fe180":"dhz1j"}],"k7QKe":[function(require,module,exports) {
module.exports = require("d12ae1b6e4fa4edb").getBundleURL("fLzbk") + "2.e91aa1d2.png" + "?" + Date.now();

},{"d12ae1b6e4fa4edb":"dhz1j"}],"3RcwV":[function(require,module,exports) {
module.exports = require("d77c86db390f453e").getBundleURL("fLzbk") + "0.1bd287a0.png" + "?" + Date.now();

},{"d77c86db390f453e":"dhz1j"}],"3ZaC9":[function(require,module,exports) {
module.exports = require("3d5db0e043b9bfcf").getBundleURL("fLzbk") + "1.d58a5780.png" + "?" + Date.now();

},{"3d5db0e043b9bfcf":"dhz1j"}],"hWDWm":[function(require,module,exports) {
module.exports = require("bcfdeb62aa389e07").getBundleURL("fLzbk") + "0.d9a399c3.png" + "?" + Date.now();

},{"bcfdeb62aa389e07":"dhz1j"}],"djXt5":[function(require,module,exports) {
module.exports = require("1bf15ff5170412eb").getBundleURL("fLzbk") + "1.062ed605.png" + "?" + Date.now();

},{"1bf15ff5170412eb":"dhz1j"}],"kHUDr":[function(require,module,exports) {
module.exports = require("3d0077835b5f07bb").getBundleURL("fLzbk") + "0.7a9f2455.png" + "?" + Date.now();

},{"3d0077835b5f07bb":"dhz1j"}],"jZLWR":[function(require,module,exports) {
module.exports = require("ff1f1ba756aa0ffb").getBundleURL("fLzbk") + "1.572a6598.png" + "?" + Date.now();

},{"ff1f1ba756aa0ffb":"dhz1j"}],"bsx3H":[function(require,module,exports) {
module.exports = require("e25a9722fc632ad7").getBundleURL("fLzbk") + "0.0a92d131.png" + "?" + Date.now();

},{"e25a9722fc632ad7":"dhz1j"}],"bbbsu":[function(require,module,exports) {
module.exports = require("d4d8fd73be4e0262").getBundleURL("fLzbk") + "1.d24763ee.png" + "?" + Date.now();

},{"d4d8fd73be4e0262":"dhz1j"}],"R6XgF":[function(require,module,exports) {
module.exports = require("e5c7c5a152025153").getBundleURL("fLzbk") + "2.0e1b919c.png" + "?" + Date.now();

},{"e5c7c5a152025153":"dhz1j"}],"9TGgO":[function(require,module,exports) {
module.exports = require("b644753f817a55d3").getBundleURL("fLzbk") + "0.fda31a8c.png" + "?" + Date.now();

},{"b644753f817a55d3":"dhz1j"}],"i5JDg":[function(require,module,exports) {
module.exports = require("cd02bd606eb055a").getBundleURL("fLzbk") + "1.36e21bb7.png" + "?" + Date.now();

},{"cd02bd606eb055a":"dhz1j"}],"auOkM":[function(require,module,exports) {
module.exports = require("7bd9753f49c3a0d3").getBundleURL("fLzbk") + "2.845e9168.png" + "?" + Date.now();

},{"7bd9753f49c3a0d3":"dhz1j"}],"03ABU":[function(require,module,exports) {
module.exports = require("72fba994eb9e45d0").getBundleURL("fLzbk") + "0.d1a19ca9.png" + "?" + Date.now();

},{"72fba994eb9e45d0":"dhz1j"}],"8VKhm":[function(require,module,exports) {
module.exports = require("dc32f758683d0181").getBundleURL("fLzbk") + "1.16a743db.png" + "?" + Date.now();

},{"dc32f758683d0181":"dhz1j"}],"c3Q49":[function(require,module,exports) {
module.exports = require("259eab027659cc84").getBundleURL("fLzbk") + "2.3ecdc17d.png" + "?" + Date.now();

},{"259eab027659cc84":"dhz1j"}],"e670a":[function(require,module,exports) {
module.exports = require("3ec6d8e66e948ccc").getBundleURL("fLzbk") + "0.fd0add9a.png" + "?" + Date.now();

},{"3ec6d8e66e948ccc":"dhz1j"}],"sZyhz":[function(require,module,exports) {
module.exports = require("1ebce2b685b2dc4").getBundleURL("fLzbk") + "1.2192498e.png" + "?" + Date.now();

},{"1ebce2b685b2dc4":"dhz1j"}],"hsIrG":[function(require,module,exports) {
module.exports = require("158633541322f82e").getBundleURL("fLzbk") + "2.ab8117eb.png" + "?" + Date.now();

},{"158633541322f82e":"dhz1j"}],"aPUpv":[function(require,module,exports) {
module.exports = require("be70dab6a06742e8").getBundleURL("fLzbk") + "3.1fe13043.png" + "?" + Date.now();

},{"be70dab6a06742e8":"dhz1j"}],"esjCZ":[function(require,module,exports) {
module.exports = require("8abe6bd0dfadd037").getBundleURL("fLzbk") + "0.27a8c375.png" + "?" + Date.now();

},{"8abe6bd0dfadd037":"dhz1j"}],"jExRb":[function(require,module,exports) {
module.exports = require("9ea00056c709b770").getBundleURL("fLzbk") + "1.f500f41c.png" + "?" + Date.now();

},{"9ea00056c709b770":"dhz1j"}],"ci7r6":[function(require,module,exports) {
module.exports = require("3306c57e97d32dfe").getBundleURL("fLzbk") + "2.a8b32497.png" + "?" + Date.now();

},{"3306c57e97d32dfe":"dhz1j"}],"ZIpE4":[function(require,module,exports) {
module.exports = require("91553cc2655a2752").getBundleURL("fLzbk") + "3.6650c9b1.png" + "?" + Date.now();

},{"91553cc2655a2752":"dhz1j"}],"6EYSq":[function(require,module,exports) {
module.exports = require("eebfda009a8f6be6").getBundleURL("fLzbk") + "0.3a521425.png" + "?" + Date.now();

},{"eebfda009a8f6be6":"dhz1j"}],"bf3DB":[function(require,module,exports) {
module.exports = require("172ba830d8d77eef").getBundleURL("fLzbk") + "1.69dd99e1.png" + "?" + Date.now();

},{"172ba830d8d77eef":"dhz1j"}],"1e74S":[function(require,module,exports) {
module.exports = require("27f85c4d723943ad").getBundleURL("fLzbk") + "2.63a32ea2.png" + "?" + Date.now();

},{"27f85c4d723943ad":"dhz1j"}],"h3zex":[function(require,module,exports) {
module.exports = require("4f68ff47f9b214b2").getBundleURL("fLzbk") + "3.74bfe1cd.png" + "?" + Date.now();

},{"4f68ff47f9b214b2":"dhz1j"}],"9FdKY":[function(require,module,exports) {
module.exports = require("6554257eb5bf413f").getBundleURL("fLzbk") + "0.5c07456d.png" + "?" + Date.now();

},{"6554257eb5bf413f":"dhz1j"}],"f5i4k":[function(require,module,exports) {
module.exports = require("ba513b6138cea5b1").getBundleURL("fLzbk") + "1.9e2781aa.png" + "?" + Date.now();

},{"ba513b6138cea5b1":"dhz1j"}],"bQh6b":[function(require,module,exports) {
module.exports = require("29cb0cf61c45cef2").getBundleURL("fLzbk") + "2.80d8a9dc.png" + "?" + Date.now();

},{"29cb0cf61c45cef2":"dhz1j"}],"2zTMC":[function(require,module,exports) {
module.exports = require("2e4a19cd8116d921").getBundleURL("fLzbk") + "3.4505c156.png" + "?" + Date.now();

},{"2e4a19cd8116d921":"dhz1j"}],"igsld":[function(require,module,exports) {
module.exports = require("7fb10cc196c43d18").getBundleURL("fLzbk") + "0.a5627eb9.png" + "?" + Date.now();

},{"7fb10cc196c43d18":"dhz1j"}],"hTChm":[function(require,module,exports) {
module.exports = require("153383f0883abc0a").getBundleURL("fLzbk") + "1.29be576d.png" + "?" + Date.now();

},{"153383f0883abc0a":"dhz1j"}],"dcN2J":[function(require,module,exports) {
module.exports = require("bc911df392e5e90e").getBundleURL("fLzbk") + "2.2c9d3072.png" + "?" + Date.now();

},{"bc911df392e5e90e":"dhz1j"}],"9Ykm4":[function(require,module,exports) {
module.exports = require("7fd85726e3a5a2f7").getBundleURL("fLzbk") + "3.b10a87dc.png" + "?" + Date.now();

},{"7fd85726e3a5a2f7":"dhz1j"}],"8aUm3":[function(require,module,exports) {
module.exports = require("95e37504c5265e49").getBundleURL("fLzbk") + "0.b66475e8.png" + "?" + Date.now();

},{"95e37504c5265e49":"dhz1j"}],"1fDx8":[function(require,module,exports) {
module.exports = require("ea7fe0e4754209cb").getBundleURL("fLzbk") + "1.ae4ec885.png" + "?" + Date.now();

},{"ea7fe0e4754209cb":"dhz1j"}],"k8BhZ":[function(require,module,exports) {
module.exports = require("78cbbcaa61c431b3").getBundleURL("fLzbk") + "2.89619ac1.png" + "?" + Date.now();

},{"78cbbcaa61c431b3":"dhz1j"}],"2Sp0k":[function(require,module,exports) {
module.exports = require("8a561eb348c9a50").getBundleURL("fLzbk") + "3.e861d630.png" + "?" + Date.now();

},{"8a561eb348c9a50":"dhz1j"}],"3vOIE":[function(require,module,exports) {
module.exports = require("15f147889ac79bfd").getBundleURL("fLzbk") + "0.c0daae54.png" + "?" + Date.now();

},{"15f147889ac79bfd":"dhz1j"}],"bDwsV":[function(require,module,exports) {
module.exports = require("ad40da1795199494").getBundleURL("fLzbk") + "1.81ba4702.png" + "?" + Date.now();

},{"ad40da1795199494":"dhz1j"}],"7D4yL":[function(require,module,exports) {
module.exports = require("fd1bf29cc462da81").getBundleURL("fLzbk") + "2.2b44de5f.png" + "?" + Date.now();

},{"fd1bf29cc462da81":"dhz1j"}],"2HO1b":[function(require,module,exports) {
module.exports = require("1c540bc6530ff21f").getBundleURL("fLzbk") + "3.0a3548da.png" + "?" + Date.now();

},{"1c540bc6530ff21f":"dhz1j"}],"hOz58":[function(require,module,exports) {
module.exports = require("99e9a5accac18c73").getBundleURL("fLzbk") + "4.7dc2c927.png" + "?" + Date.now();

},{"99e9a5accac18c73":"dhz1j"}],"b12Wj":[function(require,module,exports) {
module.exports = require("12750350f2166b4d").getBundleURL("fLzbk") + "5.a3e2eda3.png" + "?" + Date.now();

},{"12750350f2166b4d":"dhz1j"}],"1qr44":[function(require,module,exports) {
module.exports = require("988cbdd359cf9832").getBundleURL("fLzbk") + "6.93d93658.png" + "?" + Date.now();

},{"988cbdd359cf9832":"dhz1j"}],"fYaUk":[function(require,module,exports) {
module.exports = require("3db4ffc155a4e7e").getBundleURL("fLzbk") + "0.cf371571.png" + "?" + Date.now();

},{"3db4ffc155a4e7e":"dhz1j"}],"7MhRe":[function(require,module,exports) {
module.exports = require("92a6e032482603d2").getBundleURL("fLzbk") + "1.40091dcf.png" + "?" + Date.now();

},{"92a6e032482603d2":"dhz1j"}],"hGy5x":[function(require,module,exports) {
module.exports = require("fba7e22b0bb87a65").getBundleURL("fLzbk") + "2.62b42786.png" + "?" + Date.now();

},{"fba7e22b0bb87a65":"dhz1j"}],"72vsb":[function(require,module,exports) {
module.exports = require("846eafbc91b23f71").getBundleURL("fLzbk") + "3.f21956af.png" + "?" + Date.now();

},{"846eafbc91b23f71":"dhz1j"}],"bvPLn":[function(require,module,exports) {
module.exports = require("296ed8a6ea886fba").getBundleURL("fLzbk") + "4.0978be17.png" + "?" + Date.now();

},{"296ed8a6ea886fba":"dhz1j"}],"98BNY":[function(require,module,exports) {
module.exports = require("d69b1b24e5fc597").getBundleURL("fLzbk") + "5.4ebfd290.png" + "?" + Date.now();

},{"d69b1b24e5fc597":"dhz1j"}],"i00OR":[function(require,module,exports) {
module.exports = require("a145f98038d57c1").getBundleURL("fLzbk") + "6.1ace3298.png" + "?" + Date.now();

},{"a145f98038d57c1":"dhz1j"}],"glbOL":[function(require,module,exports) {
module.exports = require("55e140b017317678").getBundleURL("fLzbk") + "0.10cb56bf.png" + "?" + Date.now();

},{"55e140b017317678":"dhz1j"}],"2Pf7p":[function(require,module,exports) {
module.exports = require("8b4ed6a2cd8f290f").getBundleURL("fLzbk") + "1.0f7c63f1.png" + "?" + Date.now();

},{"8b4ed6a2cd8f290f":"dhz1j"}],"FKtKW":[function(require,module,exports) {
module.exports = require("12fd39704c217d2d").getBundleURL("fLzbk") + "2.6eebf201.png" + "?" + Date.now();

},{"12fd39704c217d2d":"dhz1j"}],"9YICl":[function(require,module,exports) {
module.exports = require("84e30dcb15af9ea").getBundleURL("fLzbk") + "3.e3e59270.png" + "?" + Date.now();

},{"84e30dcb15af9ea":"dhz1j"}],"7GCDp":[function(require,module,exports) {
module.exports = require("1bef981a96a449ea").getBundleURL("fLzbk") + "4.a1a6b94b.png" + "?" + Date.now();

},{"1bef981a96a449ea":"dhz1j"}],"dAUlq":[function(require,module,exports) {
module.exports = require("1a513d30d6a0ef8c").getBundleURL("fLzbk") + "5.04ee9ca2.png" + "?" + Date.now();

},{"1a513d30d6a0ef8c":"dhz1j"}],"fFGBA":[function(require,module,exports) {
module.exports = require("775189b89629c8e6").getBundleURL("fLzbk") + "6.2aa4cc81.png" + "?" + Date.now();

},{"775189b89629c8e6":"dhz1j"}],"2vZOZ":[function(require,module,exports) {
module.exports = require("d5d003ac49b8e5c6").getBundleURL("fLzbk") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"d5d003ac49b8e5c6":"dhz1j"}],"452sq":[function(require,module,exports) {
module.exports = require("4932f39f73a3110c").getBundleURL("fLzbk") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"4932f39f73a3110c":"dhz1j"}],"bpG8U":[function(require,module,exports) {
module.exports = require("50eb694c75dd779c").getBundleURL("fLzbk") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"50eb694c75dd779c":"dhz1j"}],"8d5FV":[function(require,module,exports) {
module.exports = require("e2ec5bffd844b457").getBundleURL("fLzbk") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"e2ec5bffd844b457":"dhz1j"}],"gBugk":[function(require,module,exports) {
module.exports = require("f24a62a430d4fdcf").getBundleURL("fLzbk") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"f24a62a430d4fdcf":"dhz1j"}],"7mnhw":[function(require,module,exports) {
module.exports = require("c0f6499211681429").getBundleURL("fLzbk") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"c0f6499211681429":"dhz1j"}],"2ltCO":[function(require,module,exports) {
module.exports = require("f1f2044a243b0435").getBundleURL("fLzbk") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"f1f2044a243b0435":"dhz1j"}],"euP7b":[function(require,module,exports) {
module.exports = require("4e38df31738f53bc").getBundleURL("fLzbk") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"4e38df31738f53bc":"dhz1j"}],"3WAZ5":[function(require,module,exports) {
module.exports = require("16392685896c43f2").getBundleURL("fLzbk") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"16392685896c43f2":"dhz1j"}],"3fjMP":[function(require,module,exports) {
module.exports = require("71a8cf11a64daef1").getBundleURL("fLzbk") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"71a8cf11a64daef1":"dhz1j"}],"2nsDs":[function(require,module,exports) {
module.exports = require("11350027d8c8e2a5").getBundleURL("fLzbk") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"11350027d8c8e2a5":"dhz1j"}],"imvdJ":[function(require,module,exports) {
module.exports = require("e9a5dc59bb80948d").getBundleURL("fLzbk") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"e9a5dc59bb80948d":"dhz1j"}],"3kKYA":[function(require,module,exports) {
module.exports = require("462431b0e1eb0216").getBundleURL("fLzbk") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"462431b0e1eb0216":"dhz1j"}],"jyoDi":[function(require,module,exports) {
module.exports = require("545e76450e5ad9b7").getBundleURL("fLzbk") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"545e76450e5ad9b7":"dhz1j"}],"lGz52":[function(require,module,exports) {
module.exports = require("f86493d70e78846b").getBundleURL("fLzbk") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"f86493d70e78846b":"dhz1j"}],"3Vyjw":[function(require,module,exports) {
module.exports = require("a892786488f26b9d").getBundleURL("fLzbk") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"a892786488f26b9d":"dhz1j"}],"1GwvV":[function(require,module,exports) {
module.exports = require("d31dc9c4331ccf88").getBundleURL("fLzbk") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"d31dc9c4331ccf88":"dhz1j"}],"jg0xk":[function(require,module,exports) {
module.exports = require("2272d706c0d6f518").getBundleURL("fLzbk") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"2272d706c0d6f518":"dhz1j"}],"4JYc4":[function(require,module,exports) {
module.exports = require("f92735812343348b").getBundleURL("fLzbk") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"f92735812343348b":"dhz1j"}],"9DnUP":[function(require,module,exports) {
module.exports = require("c4e856d8b3d5c27c").getBundleURL("fLzbk") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"c4e856d8b3d5c27c":"dhz1j"}],"ilgJ6":[function(require,module,exports) {
module.exports = require("6d2012882b7133d2").getBundleURL("fLzbk") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"6d2012882b7133d2":"dhz1j"}],"91UjH":[function(require,module,exports) {
module.exports = require("2fbe5d8c2fb5979a").getBundleURL("fLzbk") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"2fbe5d8c2fb5979a":"dhz1j"}],"hs74E":[function(require,module,exports) {
module.exports = require("a1de166b3a27de15").getBundleURL("fLzbk") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"a1de166b3a27de15":"dhz1j"}],"guiK4":[function(require,module,exports) {
module.exports = require("488911ef555ce190").getBundleURL("fLzbk") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"488911ef555ce190":"dhz1j"}],"aEv5F":[function(require,module,exports) {
module.exports = require("b3215db74216cc00").getBundleURL("fLzbk") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"b3215db74216cc00":"dhz1j"}],"lNcRp":[function(require,module,exports) {
module.exports = require("1fe2e284b16379a8").getBundleURL("fLzbk") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"1fe2e284b16379a8":"dhz1j"}],"bb49E":[function(require,module,exports) {
module.exports = require("4bcf5010dd96a6d9").getBundleURL("fLzbk") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"4bcf5010dd96a6d9":"dhz1j"}],"hqatR":[function(require,module,exports) {
module.exports = require("aacb4d4cc7290031").getBundleURL("fLzbk") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"aacb4d4cc7290031":"dhz1j"}],"17hTF":[function(require,module,exports) {
module.exports = require("14f0d72ba1a55ccb").getBundleURL("fLzbk") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"14f0d72ba1a55ccb":"dhz1j"}],"j57K7":[function(require,module,exports) {
module.exports = require("3489c86d14cca19d").getBundleURL("fLzbk") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"3489c86d14cca19d":"dhz1j"}],"2lHgN":[function(require,module,exports) {
module.exports = require("3e88aaf1e1a0f0b4").getBundleURL("fLzbk") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"3e88aaf1e1a0f0b4":"dhz1j"}],"9khKh":[function(require,module,exports) {
module.exports = require("b325ba8d5b9f7178").getBundleURL("fLzbk") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"b325ba8d5b9f7178":"dhz1j"}],"ltJLV":[function(require,module,exports) {
module.exports = require("9e679ca3c4a73a8a").getBundleURL("fLzbk") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"9e679ca3c4a73a8a":"dhz1j"}],"3QKnE":[function(require,module,exports) {
module.exports = require("253b1622d51f596f").getBundleURL("fLzbk") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"253b1622d51f596f":"dhz1j"}],"dCX1K":[function(require,module,exports) {
module.exports = require("d2a2c018e4b485e").getBundleURL("fLzbk") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"d2a2c018e4b485e":"dhz1j"}],"bN10C":[function(require,module,exports) {
module.exports = require("e2c2811ee935ca85").getBundleURL("fLzbk") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"e2c2811ee935ca85":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["4J858","l3oHL"], "l3oHL", "parcelRequire3c64")

//# sourceMappingURL=012detalle-fatima.bbaaab51.js.map
