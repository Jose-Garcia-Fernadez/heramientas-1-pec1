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
})({"5ohdR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "0e52afbe9f8801b7";
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

},{}],"hNfZx":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores nonazare_1 admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "nazare", ciudadT = "Nazar\xe9";
var i_listado = 0;
var div = document.getElementById("div-hor-" + ciudad);
var img = document.getElementById("img-hor-" + ciudad);
var h2 = document.getElementById("h2-hor-" + ciudad);
var h3 = document.getElementById("h3-hor-" + ciudad);
// Asignar funciones al navegador
window.onload = ()=>{
    document.write((0, _listadosJs.l));
    document.write((0, _debugJs.debug));
};
window.siguiente_horizontal_nazare = cargar_nazare_h;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_nazare();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    var t = Math.random() * 2000 + 3000;
    var inc = Math.floor(Math.random() * 3 + 1);
    cargar_nazare_h(inc, 1);
    setTimeout(CambiarAutomaticamente, t);
}
function cargar_nazare_h(incremento, parametro) {
    var w = img.clientWidth, h = img.clientHeight;
    var listado, comentario, c, tiempo;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_1.nazare_1;
    listado = (0, _listadosJs.l).fotos.nazare_png_300_1;
    if (w > 600) {
        listado = (0, _listadosJs.l).fotos.nazare_png_600_1;
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).fotos.nazare_png_900_1;
        c = " grande ";
    }
    switch(parametro){
        case 1:
            i_listado = i_listado + incremento;
            if (i_listado > listado.length - 1) i_listado = 0;
            if (i_listado < 0) i_listado = listado.length - 1;
            tiempo = new Date().getTime();
            img.onload = ()=>{
                tiempo = new Date().getTime() - tiempo;
                (0, _listadosJs.escribir_tiempo)(tiempo);
            };
            img.src = listado[i_listado];
            img.alt = comentario[i_listado] + " " + i_listado;
            h2.innerHTML = "Fotos de la " + ciudadT + " " + (i_listado + 1) + " de " + listado.length; //+ " carga " +  tiempo_carga + "msg";
            h3.innerHTML = comentario[i_listado]; //+ ' ' + i_listado +  "(horizontal"  +  c + ")" + " w=" + w + " h=" + h;  
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
} /*var div=document.getElementById('div-'+ ciudad);
var img= new Image();
var p= document.createElement("p")
var h2= document.createElement("h2")
img.className='diapositivas-horizontal-img-ciudad'; 
h3.className='diapositivas-horizontal-p-ciudad';
h2.className='diapositivas-horizontal-h2-ciudad';
div.appendChild(img);  
div.appendChild(h2);
div.appendChild(p); */  /*if (div==null)   console.log("div con id=div-%s no existe y la imagen de %s no se vera",ciudad,ciudad); */  /* Funciones */  /*
function CambiarAutomaticamente() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_nazare_h(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_nazare_h(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_1.nazare_1; 
  listado=   l.fotos.nazare_png_300_1;  
  if (w >  600) { listado=  l.fotos.nazare_png_100_1;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.nazare_png_900_1;  c= " grande " ; }
  
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1;       
      img.src=listado[i_listado];      
      img.alt= comentario[i_listado] + ' ' + i_listado;
      h3.innerHTML=comentario[i_listado] + ' ' + i_listado + " horizontal " +  c + ") Dobleclick para Pantalla completa ";      
      h2.innerHTML='hola';
      break;
    case 2: break; // ????
  }  
}
function pantallaCompleta() {  
  var s={ navigationUI: "hide" };
  if (div.requestFullscreen) {    
    div.requestFullscreen(s);
  } else {
      if (div.webkitRequestFullscreen) { // safari
          div.webkitRequestFullscreen(s);
      } else {
          if (div.msRequestFullscreen) { // IE11 
            div.msRequestFullscreen(s);
          }
    }
  }  
}
/*
function getFullscreenElement(div) {
  if (
    document.fullscreenElement || //* Standard syntax 
    document.webkitFullscreenElement || //* Safari and Opera syntax 
    document.msFullscreenElement || /* IE11 syntax 
    div.mozFullscreenElement
  ) 
  { return true;}
  return false;
  

function open_FullScreen()  {
  //var s=getFullscreenElement(div);
  //console.log(s);
  //if (s===undefined)  {console.log("abrir");}
  //else        {console.log("cerrar");closeFullscreen(div);}
  pantallaCompleta(div);
}
function closeFullscreen(div) {  
    
  if (div.exitFullscreen) {    
    div.exitFullscreen();
  } else {
      if (div.webkitexitFullscreen) { // safari
          div.webkitexitFullscreen();
      } else {
          if (div.msexitFullscreen) { // IE11 
            div.msexitFullscreen();
          }
    }
  }
  // Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa.
}






















/*
document.getElementById("button").addEventListener("click", () => {
toggleFullscreen()});
*/  //https://www.delftstack.com/es/howto/javascript/fullscreen-in-javascript/
 // https://webdesign.tutsplus.com/es/tutorials/how-to-build-a-full-screen-responsive-page-with-flexbox--cms-32086
 //function toggleFullscreen() { return pantallaCompleta(div).catch(console.log);}
 //function Open_Full_Screen() { pantallaCompleta(div).catch(console.log);}
 //function Close_Full_Screen(){closeFullscreen(div).catch(console.log);}

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

},{"86781a753eb4dbf":"idCsu","89ea5d03c92266e0":"7XNjD","4b3eab43661026ee":"5rADX","1b58bb2c4e8118db":"iwcWg","a73d7c9e4390513b":"l84gD","18f01d5dbbda959":"fSeKQ","5b20b0e56b82945a":"jnPMN","c5cb6c0359b0662d":"kv9rZ","a63b65706a9c9fe5":"8pPsd","e748f6caa373ab73":"a6ZrZ","dfdedac191fae4f0":"17cwB","f6f096fdb88eaef6":"lRSLj","9280d8a758940830":"iAXaK","282ccbf2baeec961":"9gaBa","d39f9622f5686817":"7PxI8","483f2d56ab4cdedd":"kp3Za","da461ea778990854":"lVlc9","96f651fb571aa9eb":"lLVxE","e543a391b0f85f4f":"icZXf","a8cf664de7077859":"25bay","598ca8ca53d8a49b":"dLlQD","3c3b7f9d3e56e115":"4a9WR","954440e7a3d1f441":"7dQIh","b4cb97e52f2cbd52":"9zMK1","7b09e4309565582d":"7tVrn","e6ea0af4531463e2":"keWnH","42085257a46e5e09":"iMPp7","6b3ddeea96e7d95a":"jb7lQ","afe3ae5977faa1f8":"99qVH","9446df6f7494726d":"awNUx","62a84e90f44c3be3":"206pg","a531b65afc6a06b0":"iZzQA","323e4a910dee7e0a":"lNHd3","5adaf0b1f2da779b":"h7NYQ","18015bf652a8590c":"1c3Rq","839e19b40af20bc9":"7tOgl","a51b127073443e8b":"2QN8i","334a20b09cebc20f":"dkEpa","d3c31bcf734c4b17":"6l51P","91fb4da4c9f50617":"29QCc","7951652e2eeb278f":"ixYMY","9d81a0598f30e880":"6dxux","f7184a54f57fe61e":"5jDQm","aa4e305c904a8bdc":"jBJRb","e3c230bc4328e939":"7X01j","91da9c9beb8cec92":"bCJvc","6788e9eb952c5639":"3K21H","3e1f56c3a8f09a92":"eBsq2","ba8d1fe6ef07e224":"d1Q4y","e7ed43fffc09e558":"3z6R9","eb7f4bebc9ae34f3":"aDp2s","f49bbc3ce90230f3":"fe2sV","c6cc8feb00c43ccc":"g6PPK","da3e98b22adbeb4d":"99X5K","ac988f97513b753d":"ksff3","9870197f68f46ce0":"zq8Gd","1909d7c96cdc25f":"3AMIL","71900ce38a39f45e":"hEhFU","d10c891d581aa72e":"jicMx","4e86e364e53b9592":"eOP2l","da9d375ff4cc6e20":"24YsB","4dc71cac2c1091fe":"dZTWd","2ae7e13dc9f19b08":"efJr1","d4a94a2ec96f0f2a":"7W4JL","4d0999fb1640b484":"gNdkR","7eb1276e543406ee":"29NpL","a1c7d50e344e35d":"geXpO","d8d3e9b2c45514ef":"dFkQn","73770b04ebc58a8f":"jMi1n","3e326606efe38636":"ajWy3","6911c8c8c7ec7f4b":"idwK7","8bfeb5a28916238c":"8dQUV","f9da5f86d76bdb5b":"9tAhk","ab0ad55909afb45d":"4zl7e","12b4ab72d67dbba1":"kNTKh","3fdef08c5feabc1f":"jMwqk","97900455fc019c34":"eMqP3","b1db13bef3dedd4":"8BkGz","8c3d146eaaa021db":"i23zW","8188eea6f1104e67":"gbZ55","ddf969591a3cfbba":"lqxn7","f51181bb6365decf":"bh3J8","cd282a7a417c03b7":"3c9r0","32d9f1c4543900f0":"c7Ms9","e759ed436cf99224":"jqb5R","dfb837cbc24b9472":"873KS","e112f5b01b10cbb3":"hmpdm","1166f1f821e20afd":"d6r7I","201fc2d2fa0f7eac":"4btGX","11280debdefd0431":"2DED0","cdfa70ae1d308d00":"gmrFP","f34fe41922b2586d":"D1Mgg","8fe9ec68514a39e3":"e71xI","deb2151dfbb509cd":"7J8Zl","10cc9bcddfb0a9e3":"hWTvP","8766a5d2d9a1cbe5":"0124e","2346505ad78baa47":"12kPE","565cc7de1c720893":"adDLF","20604925b297b483":"6S4ZF","b60f28e19ed5645d":"6KJYu","46a3ac90ead8eb4b":"hZU4B","8f8930169555991d":"fCEau","54bfe7ee4aef0962":"aOvwD","773d8be78472f983":"6hB13","d562071e9c1ece6":"30bjL","b4fcf97888be254":"iDqhC","9935775539310a4":"lgWyT","dfd60661f83422de":"63vdv","9d0c04b5449c6e78":"UXTXE","720ccb4e93255b25":"385da","6ccaff7eb0bdeb93":"lnX6g","4806d8e218627ab5":"1QvgY","2c4f60e32f378ca9":"kMPU7","865f538633d0b1dc":"dsxBq","39be71bc5a9474e0":"bzZwg","862f63336e6a3803":"W7We5","64389f8910c4a5b9":"idWlj","47d3b6b473ade444":"lRw9R","af58e9024f3ec2aa":"fLwZ5","d5c714291b3e2173":"7amnX","d9f14ea8509d3156":"k8Zr5","e23e1493d8180c78":"ipn7m","bd8f00b86989f84b":"ciBew","f164ec680e944d6d":"8GQEH","fc926fb4ed15df4":"1CvMN","77d47f70247ccaa0":"1xjvb","213ed12e877bdf8":"g3dru","337f47ad9c8e55bb":"qPXvl","dc15afeda3fdbc10":"cBlQA","ffdc7890af793ea9":"7A1Hx","dd871b27f50d719f":"gEt95","e3ed8d3f9f24501d":"hWmFp","a661ec8bde091a63":"gFocn","289dada425dcdbf0":"8Gs4o","93ca55a06b72c0f4":"b2qqu","3343679c8bbbb107":"15MZx","fb58c487e522e11b":"fv7bA","d696c059aa7292c1":"aMkgz","4f72da706ff07282":"bxUjl","2d95b671d5e6b31d":"9l0k8","2f4a2df8e9e6c6c5":"7bQuC","c26a8c456b0bfbbd":"e4q71","3f701d22f6a1ae4f":"dBlmb","19450e227fa8d4e6":"iLn8h","1e27e0a9c5922d42":"f5TmC","a084f06dc30f536f":"j9OIl","2fa52e674a840793":"jaskl","e94ec1065f59594f":"3J5Lk","4a3d192459069081":"eb89V","b65864aa197fa6d0":"n9Wrd","c7939ca45e20c9e6":"5Qe5z","4e948917a9e514ef":"htMSI","3898a29ba68820":"8PgkL","26317caa31b191b2":"9SEML","42715847c1bc4744":"gWmqI","421a5f52f1a54bf2":"8BPCU","7b382b2b0bbad026":"aVA8G","efcbb5cde267920c":"5pZLW","ecaccd9706afa493":"1iBhX","29dd4c45ad77a411":"3VW52","9ebc252dff86358a":"2S2bz","181e6b8ac3026ce3":"3jshA","f0d63a691568917b":"dndTg","cb2bff42f9bf1da3":"eSAAI","2008e68ae020640b":"j8Jco","7703d2aff3ac19f2":"dTHSA","cc7873bdb72ab106":"hN9xG","ddb0c8ec6e1128ec":"dDdJs","f0fdfe553e8b2b8b":"27gn1","83fd77e6e3d1ed4d":"hKR5i","bfdc94773439b970":"flEXo","e53408e84c34725c":"65utz","dee32d35a055d161":"b1sLN","8eb0fe6d497319ac":"ixfyz","2d4bf2da7d0a6ebf":"9bTKt","97707bd921d6bd97":"6dvpF","112c0986b11e3773":"dx0bw","3d504689dbdd2069":"hzLSC","38539e1f0ba5a0da":"lkGho","adf6607a48b65015":"9EiDQ","6a060de4f8cd5f51":"i1Uuu","a1a4532e178c00e4":"k0EX4","644f90a72aefea2f":"caOBy","67704ca106e263d":"3HZq0","5aa9c5adff06bff6":"eedaP","d2192ee8df9e83c3":"29zzt","11023e0d66f4a5c6":"52ksX","a1c31f725c1b9044":"7nqLy","557036c03b3c0cf2":"ejEod","cfcd6ed14b0881ce":"6rLT1","c49dc6a73b22dff2":"haIsn","feb7bc20d8ad2999":"lmo9h","44700e4b32d1904e":"ciTwR","b917fe1860ba64a6":"bPgN9","19f93dc81edaaaf1":"4eE60","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"idCsu":[function(require,module,exports) {
module.exports = require("6adebaebd5b72073").getBundleURL("1eeWf") + "0.48981f22.png" + "?" + Date.now();

},{"6adebaebd5b72073":"dhz1j"}],"dhz1j":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7XNjD":[function(require,module,exports) {
module.exports = require("f9c102843ad83f95").getBundleURL("1eeWf") + "1.f94ee4de.png" + "?" + Date.now();

},{"f9c102843ad83f95":"dhz1j"}],"5rADX":[function(require,module,exports) {
module.exports = require("f16b3036daf3b32b").getBundleURL("1eeWf") + "2.31f5056c.png" + "?" + Date.now();

},{"f16b3036daf3b32b":"dhz1j"}],"iwcWg":[function(require,module,exports) {
module.exports = require("5b5a5be437b1c23e").getBundleURL("1eeWf") + "3.ce1b885f.png" + "?" + Date.now();

},{"5b5a5be437b1c23e":"dhz1j"}],"l84gD":[function(require,module,exports) {
module.exports = require("c9a57e13e97e2878").getBundleURL("1eeWf") + "4.6fe91547.png" + "?" + Date.now();

},{"c9a57e13e97e2878":"dhz1j"}],"fSeKQ":[function(require,module,exports) {
module.exports = require("e63582c7700e4b10").getBundleURL("1eeWf") + "5.a917cfd3.png" + "?" + Date.now();

},{"e63582c7700e4b10":"dhz1j"}],"jnPMN":[function(require,module,exports) {
module.exports = require("27eb3afa09318ce3").getBundleURL("1eeWf") + "6.0d46346e.png" + "?" + Date.now();

},{"27eb3afa09318ce3":"dhz1j"}],"kv9rZ":[function(require,module,exports) {
module.exports = require("a7b0becb7c44c7e5").getBundleURL("1eeWf") + "7.320708f3.png" + "?" + Date.now();

},{"a7b0becb7c44c7e5":"dhz1j"}],"8pPsd":[function(require,module,exports) {
module.exports = require("e725a7284d1d5884").getBundleURL("1eeWf") + "8.5e948736.png" + "?" + Date.now();

},{"e725a7284d1d5884":"dhz1j"}],"a6ZrZ":[function(require,module,exports) {
module.exports = require("e43aaa336c53af78").getBundleURL("1eeWf") + "9.ff59ab43.png" + "?" + Date.now();

},{"e43aaa336c53af78":"dhz1j"}],"17cwB":[function(require,module,exports) {
module.exports = require("1725bc8cccde29e4").getBundleURL("1eeWf") + "10.31b47b87.png" + "?" + Date.now();

},{"1725bc8cccde29e4":"dhz1j"}],"lRSLj":[function(require,module,exports) {
module.exports = require("e407b922fdeae87d").getBundleURL("1eeWf") + "11.cc89efaf.png" + "?" + Date.now();

},{"e407b922fdeae87d":"dhz1j"}],"iAXaK":[function(require,module,exports) {
module.exports = require("d94c2665ecc0ecc6").getBundleURL("1eeWf") + "12.9cf068b9.png" + "?" + Date.now();

},{"d94c2665ecc0ecc6":"dhz1j"}],"9gaBa":[function(require,module,exports) {
module.exports = require("eab9c883f8008bc4").getBundleURL("1eeWf") + "13.3fd5fa74.png" + "?" + Date.now();

},{"eab9c883f8008bc4":"dhz1j"}],"7PxI8":[function(require,module,exports) {
module.exports = require("c1aba7329298cc4e").getBundleURL("1eeWf") + "14.85f8074c.png" + "?" + Date.now();

},{"c1aba7329298cc4e":"dhz1j"}],"kp3Za":[function(require,module,exports) {
module.exports = require("470e47b54dc59497").getBundleURL("1eeWf") + "15.b3971def.png" + "?" + Date.now();

},{"470e47b54dc59497":"dhz1j"}],"lVlc9":[function(require,module,exports) {
module.exports = require("a2dfea612266472").getBundleURL("1eeWf") + "16.e924273a.png" + "?" + Date.now();

},{"a2dfea612266472":"dhz1j"}],"lLVxE":[function(require,module,exports) {
module.exports = require("ead8d8122af1b9bf").getBundleURL("1eeWf") + "0.827cb71f.png" + "?" + Date.now();

},{"ead8d8122af1b9bf":"dhz1j"}],"icZXf":[function(require,module,exports) {
module.exports = require("6861638dee2c371e").getBundleURL("1eeWf") + "1.1ba72b2c.png" + "?" + Date.now();

},{"6861638dee2c371e":"dhz1j"}],"25bay":[function(require,module,exports) {
module.exports = require("4ad62ca02c8674d6").getBundleURL("1eeWf") + "2.a537714e.png" + "?" + Date.now();

},{"4ad62ca02c8674d6":"dhz1j"}],"dLlQD":[function(require,module,exports) {
module.exports = require("844be6667dc2936b").getBundleURL("1eeWf") + "3.968442f0.png" + "?" + Date.now();

},{"844be6667dc2936b":"dhz1j"}],"4a9WR":[function(require,module,exports) {
module.exports = require("ebc704c7a0d4798c").getBundleURL("1eeWf") + "4.1087c966.png" + "?" + Date.now();

},{"ebc704c7a0d4798c":"dhz1j"}],"7dQIh":[function(require,module,exports) {
module.exports = require("e44e06c96fe91387").getBundleURL("1eeWf") + "5.10b3d4d5.png" + "?" + Date.now();

},{"e44e06c96fe91387":"dhz1j"}],"9zMK1":[function(require,module,exports) {
module.exports = require("fcfa0f29d9b29427").getBundleURL("1eeWf") + "6.b8b5ea54.png" + "?" + Date.now();

},{"fcfa0f29d9b29427":"dhz1j"}],"7tVrn":[function(require,module,exports) {
module.exports = require("6f3e4d9da6c573ed").getBundleURL("1eeWf") + "7.a88fc70f.png" + "?" + Date.now();

},{"6f3e4d9da6c573ed":"dhz1j"}],"keWnH":[function(require,module,exports) {
module.exports = require("fc7d38389447bd24").getBundleURL("1eeWf") + "8.624d70bd.png" + "?" + Date.now();

},{"fc7d38389447bd24":"dhz1j"}],"iMPp7":[function(require,module,exports) {
module.exports = require("3a3c2c72df2546cf").getBundleURL("1eeWf") + "9.85986fa7.png" + "?" + Date.now();

},{"3a3c2c72df2546cf":"dhz1j"}],"jb7lQ":[function(require,module,exports) {
module.exports = require("5c2c31cf5a4ac7dc").getBundleURL("1eeWf") + "10.5d974f61.png" + "?" + Date.now();

},{"5c2c31cf5a4ac7dc":"dhz1j"}],"99qVH":[function(require,module,exports) {
module.exports = require("e52aaa766a7a0199").getBundleURL("1eeWf") + "11.00514082.png" + "?" + Date.now();

},{"e52aaa766a7a0199":"dhz1j"}],"awNUx":[function(require,module,exports) {
module.exports = require("db13aa9a3eecb9cb").getBundleURL("1eeWf") + "12.8e43d119.png" + "?" + Date.now();

},{"db13aa9a3eecb9cb":"dhz1j"}],"206pg":[function(require,module,exports) {
module.exports = require("8b00e237fa9ddf85").getBundleURL("1eeWf") + "13.6d974d03.png" + "?" + Date.now();

},{"8b00e237fa9ddf85":"dhz1j"}],"iZzQA":[function(require,module,exports) {
module.exports = require("a7daa9f975eb9440").getBundleURL("1eeWf") + "14.c01188a0.png" + "?" + Date.now();

},{"a7daa9f975eb9440":"dhz1j"}],"lNHd3":[function(require,module,exports) {
module.exports = require("c22bbabd59dd5e45").getBundleURL("1eeWf") + "15.98c7edf9.png" + "?" + Date.now();

},{"c22bbabd59dd5e45":"dhz1j"}],"h7NYQ":[function(require,module,exports) {
module.exports = require("585755faa9b7d64c").getBundleURL("1eeWf") + "16.46395d71.png" + "?" + Date.now();

},{"585755faa9b7d64c":"dhz1j"}],"1c3Rq":[function(require,module,exports) {
module.exports = require("cfa48cd392685dc9").getBundleURL("1eeWf") + "0.6135d861.png" + "?" + Date.now();

},{"cfa48cd392685dc9":"dhz1j"}],"7tOgl":[function(require,module,exports) {
module.exports = require("5b214349360dbb7b").getBundleURL("1eeWf") + "1.ab36ca3c.png" + "?" + Date.now();

},{"5b214349360dbb7b":"dhz1j"}],"2QN8i":[function(require,module,exports) {
module.exports = require("d9bd2494100cb91b").getBundleURL("1eeWf") + "2.637b0503.png" + "?" + Date.now();

},{"d9bd2494100cb91b":"dhz1j"}],"dkEpa":[function(require,module,exports) {
module.exports = require("eb0aea7baf8f3042").getBundleURL("1eeWf") + "3.ea6e2859.png" + "?" + Date.now();

},{"eb0aea7baf8f3042":"dhz1j"}],"6l51P":[function(require,module,exports) {
module.exports = require("1f81b776fb9eebfc").getBundleURL("1eeWf") + "4.302416e9.png" + "?" + Date.now();

},{"1f81b776fb9eebfc":"dhz1j"}],"29QCc":[function(require,module,exports) {
module.exports = require("ba3900e9e60c6f61").getBundleURL("1eeWf") + "5.69800b21.png" + "?" + Date.now();

},{"ba3900e9e60c6f61":"dhz1j"}],"ixYMY":[function(require,module,exports) {
module.exports = require("12a38ee89542459b").getBundleURL("1eeWf") + "6.9611621f.png" + "?" + Date.now();

},{"12a38ee89542459b":"dhz1j"}],"6dxux":[function(require,module,exports) {
module.exports = require("e29c19524bd33ee9").getBundleURL("1eeWf") + "7.387a99b8.png" + "?" + Date.now();

},{"e29c19524bd33ee9":"dhz1j"}],"5jDQm":[function(require,module,exports) {
module.exports = require("b4c193f23260a979").getBundleURL("1eeWf") + "8.868e1eb3.png" + "?" + Date.now();

},{"b4c193f23260a979":"dhz1j"}],"jBJRb":[function(require,module,exports) {
module.exports = require("224957636de0949c").getBundleURL("1eeWf") + "9.73cbc4df.png" + "?" + Date.now();

},{"224957636de0949c":"dhz1j"}],"7X01j":[function(require,module,exports) {
module.exports = require("9147dc7f16fb5060").getBundleURL("1eeWf") + "10.5089e6a9.png" + "?" + Date.now();

},{"9147dc7f16fb5060":"dhz1j"}],"bCJvc":[function(require,module,exports) {
module.exports = require("a79d693905e82fcc").getBundleURL("1eeWf") + "11.f9276e6c.png" + "?" + Date.now();

},{"a79d693905e82fcc":"dhz1j"}],"3K21H":[function(require,module,exports) {
module.exports = require("9ec3a9a6a39d371e").getBundleURL("1eeWf") + "12.28e07f45.png" + "?" + Date.now();

},{"9ec3a9a6a39d371e":"dhz1j"}],"eBsq2":[function(require,module,exports) {
module.exports = require("b501426f12ed28b").getBundleURL("1eeWf") + "13.3e9a788c.png" + "?" + Date.now();

},{"b501426f12ed28b":"dhz1j"}],"d1Q4y":[function(require,module,exports) {
module.exports = require("dbe368d1fedd7917").getBundleURL("1eeWf") + "14.55e925f3.png" + "?" + Date.now();

},{"dbe368d1fedd7917":"dhz1j"}],"3z6R9":[function(require,module,exports) {
module.exports = require("2d7056a74c369372").getBundleURL("1eeWf") + "15.45dd04ca.png" + "?" + Date.now();

},{"2d7056a74c369372":"dhz1j"}],"aDp2s":[function(require,module,exports) {
module.exports = require("9afa6072849efdc9").getBundleURL("1eeWf") + "16.da3dfac2.png" + "?" + Date.now();

},{"9afa6072849efdc9":"dhz1j"}],"fe2sV":[function(require,module,exports) {
module.exports = require("88229f62f8f5ccec").getBundleURL("1eeWf") + "0.1859081d.png" + "?" + Date.now();

},{"88229f62f8f5ccec":"dhz1j"}],"g6PPK":[function(require,module,exports) {
module.exports = require("3e667e9790db17f0").getBundleURL("1eeWf") + "1.927d66ed.png" + "?" + Date.now();

},{"3e667e9790db17f0":"dhz1j"}],"99X5K":[function(require,module,exports) {
module.exports = require("49925aa078faca03").getBundleURL("1eeWf") + "2.363f17fd.png" + "?" + Date.now();

},{"49925aa078faca03":"dhz1j"}],"ksff3":[function(require,module,exports) {
module.exports = require("da599dea694ed3f3").getBundleURL("1eeWf") + "0.a7ae4123.png" + "?" + Date.now();

},{"da599dea694ed3f3":"dhz1j"}],"zq8Gd":[function(require,module,exports) {
module.exports = require("6a7c15bf47e9466c").getBundleURL("1eeWf") + "1.88470ddf.png" + "?" + Date.now();

},{"6a7c15bf47e9466c":"dhz1j"}],"3AMIL":[function(require,module,exports) {
module.exports = require("74362f678d366428").getBundleURL("1eeWf") + "2.de54b28c.png" + "?" + Date.now();

},{"74362f678d366428":"dhz1j"}],"hEhFU":[function(require,module,exports) {
module.exports = require("bc7c968f68c5f666").getBundleURL("1eeWf") + "0.bdeefb48.png" + "?" + Date.now();

},{"bc7c968f68c5f666":"dhz1j"}],"jicMx":[function(require,module,exports) {
module.exports = require("5af8807d64743251").getBundleURL("1eeWf") + "1.c862755d.png" + "?" + Date.now();

},{"5af8807d64743251":"dhz1j"}],"eOP2l":[function(require,module,exports) {
module.exports = require("aa2297a5e0eae001").getBundleURL("1eeWf") + "2.3a3879c0.png" + "?" + Date.now();

},{"aa2297a5e0eae001":"dhz1j"}],"24YsB":[function(require,module,exports) {
module.exports = require("576f73fa3dbe0f84").getBundleURL("1eeWf") + "0.2d5254b4.png" + "?" + Date.now();

},{"576f73fa3dbe0f84":"dhz1j"}],"dZTWd":[function(require,module,exports) {
module.exports = require("5835dc7d8a14c7cc").getBundleURL("1eeWf") + "1.53be37fa.png" + "?" + Date.now();

},{"5835dc7d8a14c7cc":"dhz1j"}],"efJr1":[function(require,module,exports) {
module.exports = require("da9133f5ee8241a6").getBundleURL("1eeWf") + "2.f6226c8b.png" + "?" + Date.now();

},{"da9133f5ee8241a6":"dhz1j"}],"7W4JL":[function(require,module,exports) {
module.exports = require("ca0ce3d081cf92ca").getBundleURL("1eeWf") + "3.cbffaa2e.png" + "?" + Date.now();

},{"ca0ce3d081cf92ca":"dhz1j"}],"gNdkR":[function(require,module,exports) {
module.exports = require("29360f994d1065d3").getBundleURL("1eeWf") + "4.13acbc59.png" + "?" + Date.now();

},{"29360f994d1065d3":"dhz1j"}],"29NpL":[function(require,module,exports) {
module.exports = require("c55ccb7de1234a5a").getBundleURL("1eeWf") + "5.ef65f0ad.png" + "?" + Date.now();

},{"c55ccb7de1234a5a":"dhz1j"}],"geXpO":[function(require,module,exports) {
module.exports = require("a2fd22fd1a63d258").getBundleURL("1eeWf") + "6.93bb63df.png" + "?" + Date.now();

},{"a2fd22fd1a63d258":"dhz1j"}],"dFkQn":[function(require,module,exports) {
module.exports = require("f2804bc9bc1921fe").getBundleURL("1eeWf") + "0.c7b4b27a.png" + "?" + Date.now();

},{"f2804bc9bc1921fe":"dhz1j"}],"jMi1n":[function(require,module,exports) {
module.exports = require("7a4eabcaa15bed5c").getBundleURL("1eeWf") + "1.a62dfbae.png" + "?" + Date.now();

},{"7a4eabcaa15bed5c":"dhz1j"}],"ajWy3":[function(require,module,exports) {
module.exports = require("e93c83db28bd98f7").getBundleURL("1eeWf") + "2.e3978c80.png" + "?" + Date.now();

},{"e93c83db28bd98f7":"dhz1j"}],"idwK7":[function(require,module,exports) {
module.exports = require("43039bc6b9af2997").getBundleURL("1eeWf") + "3.4641ec5b.png" + "?" + Date.now();

},{"43039bc6b9af2997":"dhz1j"}],"8dQUV":[function(require,module,exports) {
module.exports = require("fc3e2fc501a9d84f").getBundleURL("1eeWf") + "4.46679935.png" + "?" + Date.now();

},{"fc3e2fc501a9d84f":"dhz1j"}],"9tAhk":[function(require,module,exports) {
module.exports = require("c76967972fb3f56b").getBundleURL("1eeWf") + "5.7cb7235f.png" + "?" + Date.now();

},{"c76967972fb3f56b":"dhz1j"}],"4zl7e":[function(require,module,exports) {
module.exports = require("7f50624ec92201b5").getBundleURL("1eeWf") + "6.25e0793b.png" + "?" + Date.now();

},{"7f50624ec92201b5":"dhz1j"}],"kNTKh":[function(require,module,exports) {
module.exports = require("8069ec9ff1dd4771").getBundleURL("1eeWf") + "0.3c81352a.png" + "?" + Date.now();

},{"8069ec9ff1dd4771":"dhz1j"}],"jMwqk":[function(require,module,exports) {
module.exports = require("23c73c1e4244a2b5").getBundleURL("1eeWf") + "1.5cc77829.png" + "?" + Date.now();

},{"23c73c1e4244a2b5":"dhz1j"}],"eMqP3":[function(require,module,exports) {
module.exports = require("ad26d7866bddebd2").getBundleURL("1eeWf") + "2.8e275dc1.png" + "?" + Date.now();

},{"ad26d7866bddebd2":"dhz1j"}],"8BkGz":[function(require,module,exports) {
module.exports = require("b390969ed8536c02").getBundleURL("1eeWf") + "3.a9db7ab7.png" + "?" + Date.now();

},{"b390969ed8536c02":"dhz1j"}],"i23zW":[function(require,module,exports) {
module.exports = require("feeffcef39868f64").getBundleURL("1eeWf") + "4.e32a50ca.png" + "?" + Date.now();

},{"feeffcef39868f64":"dhz1j"}],"gbZ55":[function(require,module,exports) {
module.exports = require("6b9f7a805df05430").getBundleURL("1eeWf") + "5.c1536481.png" + "?" + Date.now();

},{"6b9f7a805df05430":"dhz1j"}],"lqxn7":[function(require,module,exports) {
module.exports = require("1d1a71105734c55").getBundleURL("1eeWf") + "6.288f575f.png" + "?" + Date.now();

},{"1d1a71105734c55":"dhz1j"}],"bh3J8":[function(require,module,exports) {
module.exports = require("ea7fe45a4fd966fb").getBundleURL("1eeWf") + "0.1fd51615.png" + "?" + Date.now();

},{"ea7fe45a4fd966fb":"dhz1j"}],"3c9r0":[function(require,module,exports) {
module.exports = require("bbc2033fe6bd9ff9").getBundleURL("1eeWf") + "1.e84c2436.png" + "?" + Date.now();

},{"bbc2033fe6bd9ff9":"dhz1j"}],"c7Ms9":[function(require,module,exports) {
module.exports = require("373cc91dcde3e3d6").getBundleURL("1eeWf") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"373cc91dcde3e3d6":"dhz1j"}],"jqb5R":[function(require,module,exports) {
module.exports = require("7fc408e6070f5be5").getBundleURL("1eeWf") + "0.7a68699b.png" + "?" + Date.now();

},{"7fc408e6070f5be5":"dhz1j"}],"873KS":[function(require,module,exports) {
module.exports = require("cb8014e970ad87c5").getBundleURL("1eeWf") + "1.fff421cb.png" + "?" + Date.now();

},{"cb8014e970ad87c5":"dhz1j"}],"hmpdm":[function(require,module,exports) {
module.exports = require("9b20467aee25685f").getBundleURL("1eeWf") + "2.2fdbefa7.png" + "?" + Date.now();

},{"9b20467aee25685f":"dhz1j"}],"d6r7I":[function(require,module,exports) {
module.exports = require("1240b585c1365c86").getBundleURL("1eeWf") + "0.5282a781.png" + "?" + Date.now();

},{"1240b585c1365c86":"dhz1j"}],"4btGX":[function(require,module,exports) {
module.exports = require("896a28a82ba9a7b5").getBundleURL("1eeWf") + "1.6a9b3b01.png" + "?" + Date.now();

},{"896a28a82ba9a7b5":"dhz1j"}],"2DED0":[function(require,module,exports) {
module.exports = require("835b046e8c5b8707").getBundleURL("1eeWf") + "2.6ed29ec3.png" + "?" + Date.now();

},{"835b046e8c5b8707":"dhz1j"}],"gmrFP":[function(require,module,exports) {
module.exports = require("70f8cdb16594152").getBundleURL("1eeWf") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"70f8cdb16594152":"dhz1j"}],"D1Mgg":[function(require,module,exports) {
module.exports = require("6ad137b99f1999cf").getBundleURL("1eeWf") + "1.065ffd47.png" + "?" + Date.now();

},{"6ad137b99f1999cf":"dhz1j"}],"e71xI":[function(require,module,exports) {
module.exports = require("6a76d59428df0fa5").getBundleURL("1eeWf") + "2.29f32c63.png" + "?" + Date.now();

},{"6a76d59428df0fa5":"dhz1j"}],"7J8Zl":[function(require,module,exports) {
module.exports = require("495c9644a6593f41").getBundleURL("1eeWf") + "0.c2bc436e.png" + "?" + Date.now();

},{"495c9644a6593f41":"dhz1j"}],"hWTvP":[function(require,module,exports) {
module.exports = require("5bfe371ecc411ed5").getBundleURL("1eeWf") + "1.e224ca18.png" + "?" + Date.now();

},{"5bfe371ecc411ed5":"dhz1j"}],"0124e":[function(require,module,exports) {
module.exports = require("af0bfb17a2fd80d1").getBundleURL("1eeWf") + "2.20af644b.png" + "?" + Date.now();

},{"af0bfb17a2fd80d1":"dhz1j"}],"12kPE":[function(require,module,exports) {
module.exports = require("4d2d14656dd0a677").getBundleURL("1eeWf") + "0.740b269f.png" + "?" + Date.now();

},{"4d2d14656dd0a677":"dhz1j"}],"adDLF":[function(require,module,exports) {
module.exports = require("f8749423f8db7305").getBundleURL("1eeWf") + "1.88c581e4.png" + "?" + Date.now();

},{"f8749423f8db7305":"dhz1j"}],"6S4ZF":[function(require,module,exports) {
module.exports = require("eadb7a3e4f13f7be").getBundleURL("1eeWf") + "2.e91aa1d2.png" + "?" + Date.now();

},{"eadb7a3e4f13f7be":"dhz1j"}],"6KJYu":[function(require,module,exports) {
module.exports = require("7ba5b140602739da").getBundleURL("1eeWf") + "0.1bd287a0.png" + "?" + Date.now();

},{"7ba5b140602739da":"dhz1j"}],"hZU4B":[function(require,module,exports) {
module.exports = require("cbe4f60bcab3a10").getBundleURL("1eeWf") + "1.d58a5780.png" + "?" + Date.now();

},{"cbe4f60bcab3a10":"dhz1j"}],"fCEau":[function(require,module,exports) {
module.exports = require("40aac7a897a80ebe").getBundleURL("1eeWf") + "0.d9a399c3.png" + "?" + Date.now();

},{"40aac7a897a80ebe":"dhz1j"}],"aOvwD":[function(require,module,exports) {
module.exports = require("c0b9119da82109ef").getBundleURL("1eeWf") + "1.062ed605.png" + "?" + Date.now();

},{"c0b9119da82109ef":"dhz1j"}],"6hB13":[function(require,module,exports) {
module.exports = require("efe8a8615194ee05").getBundleURL("1eeWf") + "0.7a9f2455.png" + "?" + Date.now();

},{"efe8a8615194ee05":"dhz1j"}],"30bjL":[function(require,module,exports) {
module.exports = require("76f0505998a8864d").getBundleURL("1eeWf") + "1.572a6598.png" + "?" + Date.now();

},{"76f0505998a8864d":"dhz1j"}],"iDqhC":[function(require,module,exports) {
module.exports = require("33076e5f027b8000").getBundleURL("1eeWf") + "0.0a92d131.png" + "?" + Date.now();

},{"33076e5f027b8000":"dhz1j"}],"lgWyT":[function(require,module,exports) {
module.exports = require("7f3b3655da584a7f").getBundleURL("1eeWf") + "1.d24763ee.png" + "?" + Date.now();

},{"7f3b3655da584a7f":"dhz1j"}],"63vdv":[function(require,module,exports) {
module.exports = require("28d023d1416e7f5e").getBundleURL("1eeWf") + "2.0e1b919c.png" + "?" + Date.now();

},{"28d023d1416e7f5e":"dhz1j"}],"UXTXE":[function(require,module,exports) {
module.exports = require("1075859403a5e0ea").getBundleURL("1eeWf") + "0.fda31a8c.png" + "?" + Date.now();

},{"1075859403a5e0ea":"dhz1j"}],"385da":[function(require,module,exports) {
module.exports = require("a07daebb19d5db3e").getBundleURL("1eeWf") + "1.36e21bb7.png" + "?" + Date.now();

},{"a07daebb19d5db3e":"dhz1j"}],"lnX6g":[function(require,module,exports) {
module.exports = require("b77221f17b75028e").getBundleURL("1eeWf") + "2.845e9168.png" + "?" + Date.now();

},{"b77221f17b75028e":"dhz1j"}],"1QvgY":[function(require,module,exports) {
module.exports = require("595508bc93241c88").getBundleURL("1eeWf") + "0.d1a19ca9.png" + "?" + Date.now();

},{"595508bc93241c88":"dhz1j"}],"kMPU7":[function(require,module,exports) {
module.exports = require("3630cbed0808acb").getBundleURL("1eeWf") + "1.16a743db.png" + "?" + Date.now();

},{"3630cbed0808acb":"dhz1j"}],"dsxBq":[function(require,module,exports) {
module.exports = require("8afbe712de0b053e").getBundleURL("1eeWf") + "2.3ecdc17d.png" + "?" + Date.now();

},{"8afbe712de0b053e":"dhz1j"}],"bzZwg":[function(require,module,exports) {
module.exports = require("e0569e80518c8490").getBundleURL("1eeWf") + "0.fd0add9a.png" + "?" + Date.now();

},{"e0569e80518c8490":"dhz1j"}],"W7We5":[function(require,module,exports) {
module.exports = require("2afb2fcfa6489283").getBundleURL("1eeWf") + "1.2192498e.png" + "?" + Date.now();

},{"2afb2fcfa6489283":"dhz1j"}],"idWlj":[function(require,module,exports) {
module.exports = require("1c1e08bcb78d104f").getBundleURL("1eeWf") + "2.ab8117eb.png" + "?" + Date.now();

},{"1c1e08bcb78d104f":"dhz1j"}],"lRw9R":[function(require,module,exports) {
module.exports = require("56991806e4566abb").getBundleURL("1eeWf") + "3.1fe13043.png" + "?" + Date.now();

},{"56991806e4566abb":"dhz1j"}],"fLwZ5":[function(require,module,exports) {
module.exports = require("2fdb50dd2e755cec").getBundleURL("1eeWf") + "0.27a8c375.png" + "?" + Date.now();

},{"2fdb50dd2e755cec":"dhz1j"}],"7amnX":[function(require,module,exports) {
module.exports = require("46e550cf706ce0e3").getBundleURL("1eeWf") + "1.f500f41c.png" + "?" + Date.now();

},{"46e550cf706ce0e3":"dhz1j"}],"k8Zr5":[function(require,module,exports) {
module.exports = require("f3c43a0836e0bfac").getBundleURL("1eeWf") + "2.a8b32497.png" + "?" + Date.now();

},{"f3c43a0836e0bfac":"dhz1j"}],"ipn7m":[function(require,module,exports) {
module.exports = require("f98fb0b03334fc72").getBundleURL("1eeWf") + "3.6650c9b1.png" + "?" + Date.now();

},{"f98fb0b03334fc72":"dhz1j"}],"ciBew":[function(require,module,exports) {
module.exports = require("31c163f631dee256").getBundleURL("1eeWf") + "0.3a521425.png" + "?" + Date.now();

},{"31c163f631dee256":"dhz1j"}],"8GQEH":[function(require,module,exports) {
module.exports = require("22ad0217ffe4ffa8").getBundleURL("1eeWf") + "1.69dd99e1.png" + "?" + Date.now();

},{"22ad0217ffe4ffa8":"dhz1j"}],"1CvMN":[function(require,module,exports) {
module.exports = require("9857604980ca6947").getBundleURL("1eeWf") + "2.63a32ea2.png" + "?" + Date.now();

},{"9857604980ca6947":"dhz1j"}],"1xjvb":[function(require,module,exports) {
module.exports = require("5b3c3bc444c55718").getBundleURL("1eeWf") + "3.74bfe1cd.png" + "?" + Date.now();

},{"5b3c3bc444c55718":"dhz1j"}],"g3dru":[function(require,module,exports) {
module.exports = require("f7a926483cd47f58").getBundleURL("1eeWf") + "0.5c07456d.png" + "?" + Date.now();

},{"f7a926483cd47f58":"dhz1j"}],"qPXvl":[function(require,module,exports) {
module.exports = require("9a2138a1e7540659").getBundleURL("1eeWf") + "1.9e2781aa.png" + "?" + Date.now();

},{"9a2138a1e7540659":"dhz1j"}],"cBlQA":[function(require,module,exports) {
module.exports = require("979390010e98bb91").getBundleURL("1eeWf") + "2.80d8a9dc.png" + "?" + Date.now();

},{"979390010e98bb91":"dhz1j"}],"7A1Hx":[function(require,module,exports) {
module.exports = require("6a0193f7f67b82f5").getBundleURL("1eeWf") + "3.4505c156.png" + "?" + Date.now();

},{"6a0193f7f67b82f5":"dhz1j"}],"gEt95":[function(require,module,exports) {
module.exports = require("e47c40bf8429fc58").getBundleURL("1eeWf") + "0.a5627eb9.png" + "?" + Date.now();

},{"e47c40bf8429fc58":"dhz1j"}],"hWmFp":[function(require,module,exports) {
module.exports = require("ed90dbd4ff60a12c").getBundleURL("1eeWf") + "1.29be576d.png" + "?" + Date.now();

},{"ed90dbd4ff60a12c":"dhz1j"}],"gFocn":[function(require,module,exports) {
module.exports = require("f6e30618a44d40b0").getBundleURL("1eeWf") + "2.2c9d3072.png" + "?" + Date.now();

},{"f6e30618a44d40b0":"dhz1j"}],"8Gs4o":[function(require,module,exports) {
module.exports = require("8c8493865a15d990").getBundleURL("1eeWf") + "3.b10a87dc.png" + "?" + Date.now();

},{"8c8493865a15d990":"dhz1j"}],"b2qqu":[function(require,module,exports) {
module.exports = require("fb1e76816adb8732").getBundleURL("1eeWf") + "0.b66475e8.png" + "?" + Date.now();

},{"fb1e76816adb8732":"dhz1j"}],"15MZx":[function(require,module,exports) {
module.exports = require("214b007e4c0bf82b").getBundleURL("1eeWf") + "1.ae4ec885.png" + "?" + Date.now();

},{"214b007e4c0bf82b":"dhz1j"}],"fv7bA":[function(require,module,exports) {
module.exports = require("a6108e79f1461638").getBundleURL("1eeWf") + "2.89619ac1.png" + "?" + Date.now();

},{"a6108e79f1461638":"dhz1j"}],"aMkgz":[function(require,module,exports) {
module.exports = require("5c67df8a3ae359a4").getBundleURL("1eeWf") + "3.e861d630.png" + "?" + Date.now();

},{"5c67df8a3ae359a4":"dhz1j"}],"bxUjl":[function(require,module,exports) {
module.exports = require("bd9fa36d80ba2423").getBundleURL("1eeWf") + "0.c0daae54.png" + "?" + Date.now();

},{"bd9fa36d80ba2423":"dhz1j"}],"9l0k8":[function(require,module,exports) {
module.exports = require("edd1f6f431075290").getBundleURL("1eeWf") + "1.81ba4702.png" + "?" + Date.now();

},{"edd1f6f431075290":"dhz1j"}],"7bQuC":[function(require,module,exports) {
module.exports = require("58d60f809df2ffab").getBundleURL("1eeWf") + "2.2b44de5f.png" + "?" + Date.now();

},{"58d60f809df2ffab":"dhz1j"}],"e4q71":[function(require,module,exports) {
module.exports = require("80212e4e9a033bb8").getBundleURL("1eeWf") + "3.0a3548da.png" + "?" + Date.now();

},{"80212e4e9a033bb8":"dhz1j"}],"dBlmb":[function(require,module,exports) {
module.exports = require("3263863399829fd4").getBundleURL("1eeWf") + "4.7dc2c927.png" + "?" + Date.now();

},{"3263863399829fd4":"dhz1j"}],"iLn8h":[function(require,module,exports) {
module.exports = require("5e7836d8f005e9b2").getBundleURL("1eeWf") + "5.a3e2eda3.png" + "?" + Date.now();

},{"5e7836d8f005e9b2":"dhz1j"}],"f5TmC":[function(require,module,exports) {
module.exports = require("f1345cc5acca8260").getBundleURL("1eeWf") + "6.93d93658.png" + "?" + Date.now();

},{"f1345cc5acca8260":"dhz1j"}],"j9OIl":[function(require,module,exports) {
module.exports = require("126fb6ff19603b61").getBundleURL("1eeWf") + "0.cf371571.png" + "?" + Date.now();

},{"126fb6ff19603b61":"dhz1j"}],"jaskl":[function(require,module,exports) {
module.exports = require("ef18e36deaa18295").getBundleURL("1eeWf") + "1.40091dcf.png" + "?" + Date.now();

},{"ef18e36deaa18295":"dhz1j"}],"3J5Lk":[function(require,module,exports) {
module.exports = require("8801c609b68c646").getBundleURL("1eeWf") + "2.62b42786.png" + "?" + Date.now();

},{"8801c609b68c646":"dhz1j"}],"eb89V":[function(require,module,exports) {
module.exports = require("ff210cb6dd5587ae").getBundleURL("1eeWf") + "3.f21956af.png" + "?" + Date.now();

},{"ff210cb6dd5587ae":"dhz1j"}],"n9Wrd":[function(require,module,exports) {
module.exports = require("649957b1ed0faccc").getBundleURL("1eeWf") + "4.0978be17.png" + "?" + Date.now();

},{"649957b1ed0faccc":"dhz1j"}],"5Qe5z":[function(require,module,exports) {
module.exports = require("4655ce35155caf6a").getBundleURL("1eeWf") + "5.4ebfd290.png" + "?" + Date.now();

},{"4655ce35155caf6a":"dhz1j"}],"htMSI":[function(require,module,exports) {
module.exports = require("dc35c28dc20c5b1d").getBundleURL("1eeWf") + "6.1ace3298.png" + "?" + Date.now();

},{"dc35c28dc20c5b1d":"dhz1j"}],"8PgkL":[function(require,module,exports) {
module.exports = require("fd7f845b0be351ba").getBundleURL("1eeWf") + "0.10cb56bf.png" + "?" + Date.now();

},{"fd7f845b0be351ba":"dhz1j"}],"9SEML":[function(require,module,exports) {
module.exports = require("b56b02bfd5d1a109").getBundleURL("1eeWf") + "1.0f7c63f1.png" + "?" + Date.now();

},{"b56b02bfd5d1a109":"dhz1j"}],"gWmqI":[function(require,module,exports) {
module.exports = require("1ae09561cfe0c75a").getBundleURL("1eeWf") + "2.6eebf201.png" + "?" + Date.now();

},{"1ae09561cfe0c75a":"dhz1j"}],"8BPCU":[function(require,module,exports) {
module.exports = require("99faf0e531fcfcfa").getBundleURL("1eeWf") + "3.e3e59270.png" + "?" + Date.now();

},{"99faf0e531fcfcfa":"dhz1j"}],"aVA8G":[function(require,module,exports) {
module.exports = require("212ffde443bb24ea").getBundleURL("1eeWf") + "4.a1a6b94b.png" + "?" + Date.now();

},{"212ffde443bb24ea":"dhz1j"}],"5pZLW":[function(require,module,exports) {
module.exports = require("f6b407e4d7ea35ba").getBundleURL("1eeWf") + "5.04ee9ca2.png" + "?" + Date.now();

},{"f6b407e4d7ea35ba":"dhz1j"}],"1iBhX":[function(require,module,exports) {
module.exports = require("c03f172d1f9d7465").getBundleURL("1eeWf") + "6.2aa4cc81.png" + "?" + Date.now();

},{"c03f172d1f9d7465":"dhz1j"}],"3VW52":[function(require,module,exports) {
module.exports = require("12e1133d66e76dcc").getBundleURL("1eeWf") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"12e1133d66e76dcc":"dhz1j"}],"2S2bz":[function(require,module,exports) {
module.exports = require("97d99fb7c8ab162a").getBundleURL("1eeWf") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"97d99fb7c8ab162a":"dhz1j"}],"3jshA":[function(require,module,exports) {
module.exports = require("d04b7ef79d83eb36").getBundleURL("1eeWf") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"d04b7ef79d83eb36":"dhz1j"}],"dndTg":[function(require,module,exports) {
module.exports = require("90e8b95a007ad28b").getBundleURL("1eeWf") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"90e8b95a007ad28b":"dhz1j"}],"eSAAI":[function(require,module,exports) {
module.exports = require("723b7099d4598f0").getBundleURL("1eeWf") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"723b7099d4598f0":"dhz1j"}],"j8Jco":[function(require,module,exports) {
module.exports = require("7aa0694cd41e682e").getBundleURL("1eeWf") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"7aa0694cd41e682e":"dhz1j"}],"dTHSA":[function(require,module,exports) {
module.exports = require("dca67ef077ad376").getBundleURL("1eeWf") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"dca67ef077ad376":"dhz1j"}],"hN9xG":[function(require,module,exports) {
module.exports = require("eef379fadeef99b0").getBundleURL("1eeWf") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"eef379fadeef99b0":"dhz1j"}],"dDdJs":[function(require,module,exports) {
module.exports = require("a11d77fb54adf751").getBundleURL("1eeWf") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"a11d77fb54adf751":"dhz1j"}],"27gn1":[function(require,module,exports) {
module.exports = require("5c9f1acc0c067ca0").getBundleURL("1eeWf") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"5c9f1acc0c067ca0":"dhz1j"}],"hKR5i":[function(require,module,exports) {
module.exports = require("e695321cfdef735e").getBundleURL("1eeWf") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"e695321cfdef735e":"dhz1j"}],"flEXo":[function(require,module,exports) {
module.exports = require("2c4cc453336d0631").getBundleURL("1eeWf") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"2c4cc453336d0631":"dhz1j"}],"65utz":[function(require,module,exports) {
module.exports = require("8986afde342c2069").getBundleURL("1eeWf") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"8986afde342c2069":"dhz1j"}],"b1sLN":[function(require,module,exports) {
module.exports = require("fbaeee8e3455b2aa").getBundleURL("1eeWf") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"fbaeee8e3455b2aa":"dhz1j"}],"ixfyz":[function(require,module,exports) {
module.exports = require("a7d2b783e140e702").getBundleURL("1eeWf") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"a7d2b783e140e702":"dhz1j"}],"9bTKt":[function(require,module,exports) {
module.exports = require("b79946f28d538709").getBundleURL("1eeWf") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"b79946f28d538709":"dhz1j"}],"6dvpF":[function(require,module,exports) {
module.exports = require("17124bf6dfa10dae").getBundleURL("1eeWf") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"17124bf6dfa10dae":"dhz1j"}],"dx0bw":[function(require,module,exports) {
module.exports = require("bbc20cc509f38654").getBundleURL("1eeWf") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"bbc20cc509f38654":"dhz1j"}],"hzLSC":[function(require,module,exports) {
module.exports = require("e7a8323b048ece2c").getBundleURL("1eeWf") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"e7a8323b048ece2c":"dhz1j"}],"lkGho":[function(require,module,exports) {
module.exports = require("dee195bca767f2fa").getBundleURL("1eeWf") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"dee195bca767f2fa":"dhz1j"}],"9EiDQ":[function(require,module,exports) {
module.exports = require("d3069ab6581dfe25").getBundleURL("1eeWf") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"d3069ab6581dfe25":"dhz1j"}],"i1Uuu":[function(require,module,exports) {
module.exports = require("40cfa12cca360cf6").getBundleURL("1eeWf") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"40cfa12cca360cf6":"dhz1j"}],"k0EX4":[function(require,module,exports) {
module.exports = require("99231236e721eaa2").getBundleURL("1eeWf") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"99231236e721eaa2":"dhz1j"}],"caOBy":[function(require,module,exports) {
module.exports = require("8b0bf8afe5c6733").getBundleURL("1eeWf") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"8b0bf8afe5c6733":"dhz1j"}],"3HZq0":[function(require,module,exports) {
module.exports = require("39639590edbf9f2a").getBundleURL("1eeWf") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"39639590edbf9f2a":"dhz1j"}],"eedaP":[function(require,module,exports) {
module.exports = require("1d6ba77c1181926c").getBundleURL("1eeWf") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"1d6ba77c1181926c":"dhz1j"}],"29zzt":[function(require,module,exports) {
module.exports = require("6eda44d6458d1d6b").getBundleURL("1eeWf") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"6eda44d6458d1d6b":"dhz1j"}],"52ksX":[function(require,module,exports) {
module.exports = require("c81a62d9adb92e36").getBundleURL("1eeWf") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"c81a62d9adb92e36":"dhz1j"}],"7nqLy":[function(require,module,exports) {
module.exports = require("7d5ba0d619c16428").getBundleURL("1eeWf") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"7d5ba0d619c16428":"dhz1j"}],"ejEod":[function(require,module,exports) {
module.exports = require("1be951a42d6fc295").getBundleURL("1eeWf") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"1be951a42d6fc295":"dhz1j"}],"6rLT1":[function(require,module,exports) {
module.exports = require("db9ec0b9f5c5a96e").getBundleURL("1eeWf") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"db9ec0b9f5c5a96e":"dhz1j"}],"haIsn":[function(require,module,exports) {
module.exports = require("ef4f8c8b5cee5a2f").getBundleURL("1eeWf") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"ef4f8c8b5cee5a2f":"dhz1j"}],"lmo9h":[function(require,module,exports) {
module.exports = require("a561ead994bfc72e").getBundleURL("1eeWf") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"a561ead994bfc72e":"dhz1j"}],"ciTwR":[function(require,module,exports) {
module.exports = require("1ff65cb2e7280cde").getBundleURL("1eeWf") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"1ff65cb2e7280cde":"dhz1j"}],"bPgN9":[function(require,module,exports) {
module.exports = require("da001fadab7b258f").getBundleURL("1eeWf") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"da001fadab7b258f":"dhz1j"}],"4eE60":[function(require,module,exports) {
module.exports = require("691554827d5655c7").getBundleURL("1eeWf") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"691554827d5655c7":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["5ohdR","hNfZx"], "hNfZx", "parcelRequire3c64")

//# sourceMappingURL=013detalle-nazare.9f8801b7.js.map
