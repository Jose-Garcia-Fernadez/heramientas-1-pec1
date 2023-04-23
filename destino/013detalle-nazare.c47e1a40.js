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
})({"2xlZs":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "76d4d80cc47e1a40";
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

},{"86781a753eb4dbf":"waRO2","89ea5d03c92266e0":"9LNWj","4b3eab43661026ee":"9YCIZ","1b58bb2c4e8118db":"j19zG","a73d7c9e4390513b":"g7nop","18f01d5dbbda959":"65XXO","5b20b0e56b82945a":"gYWJ1","c5cb6c0359b0662d":"arvlb","a63b65706a9c9fe5":"3Bmcp","e748f6caa373ab73":"cY8TN","dfdedac191fae4f0":"l0GrO","f6f096fdb88eaef6":"krXPp","9280d8a758940830":"dkl3u","282ccbf2baeec961":"9JwxU","d39f9622f5686817":"gUZ5V","483f2d56ab4cdedd":"fRW4v","da461ea778990854":"gYgWT","96f651fb571aa9eb":"12RwG","e543a391b0f85f4f":"5FZJi","a8cf664de7077859":"dvLFh","598ca8ca53d8a49b":"hmCIz","3c3b7f9d3e56e115":"kCbtt","954440e7a3d1f441":"8yQRn","b4cb97e52f2cbd52":"6Vi0C","7b09e4309565582d":"7JYeD","e6ea0af4531463e2":"9U3Ea","42085257a46e5e09":"92cvZ","6b3ddeea96e7d95a":"hNXic","afe3ae5977faa1f8":"j2YYo","9446df6f7494726d":"QhUV7","62a84e90f44c3be3":"giZxQ","a531b65afc6a06b0":"iVUPI","323e4a910dee7e0a":"2NjDO","5adaf0b1f2da779b":"NirOq","18015bf652a8590c":"BAscT","839e19b40af20bc9":"62Wuj","a51b127073443e8b":"72yY6","334a20b09cebc20f":"3qgzP","d3c31bcf734c4b17":"aQvQE","91fb4da4c9f50617":"ePsio","7951652e2eeb278f":"c96NK","9d81a0598f30e880":"8FfbH","f7184a54f57fe61e":"2hz0U","aa4e305c904a8bdc":"622Y8","e3c230bc4328e939":"6wZzp","91da9c9beb8cec92":"hIg4f","6788e9eb952c5639":"2VlTo","3e1f56c3a8f09a92":"51UeD","ba8d1fe6ef07e224":"ane6y","e7ed43fffc09e558":"99BPU","eb7f4bebc9ae34f3":"2Mdby","f49bbc3ce90230f3":"h5UrD","c6cc8feb00c43ccc":"IAyrs","da3e98b22adbeb4d":"ltRJf","ac988f97513b753d":"g4w64","9870197f68f46ce0":"9CTOh","1909d7c96cdc25f":"1ZRbA","71900ce38a39f45e":"lKV4R","d10c891d581aa72e":"8aw5Y","4e86e364e53b9592":"kqxdQ","da9d375ff4cc6e20":"gTmK1","4dc71cac2c1091fe":"6hOs5","2ae7e13dc9f19b08":"gCZNP","d4a94a2ec96f0f2a":"fU0pR","4d0999fb1640b484":"gqaFw","7eb1276e543406ee":"iFRLJ","a1c7d50e344e35d":"arYvF","d8d3e9b2c45514ef":"af167","73770b04ebc58a8f":"2ENj1","3e326606efe38636":"8mkly","6911c8c8c7ec7f4b":"bpjf2","8bfeb5a28916238c":"6xDcM","f9da5f86d76bdb5b":"fxA5f","ab0ad55909afb45d":"b5Bj3","12b4ab72d67dbba1":"9ew6v","3fdef08c5feabc1f":"8lrjK","97900455fc019c34":"1VMCZ","b1db13bef3dedd4":"lBAX6","8c3d146eaaa021db":"idHtQ","8188eea6f1104e67":"fiD3q","ddf969591a3cfbba":"iLtVO","f51181bb6365decf":"ijKOL","cd282a7a417c03b7":"3vz3z","32d9f1c4543900f0":"gx8yA","e759ed436cf99224":"4BdU1","dfb837cbc24b9472":"dTgBe","e112f5b01b10cbb3":"2Qkiw","1166f1f821e20afd":"41EOt","201fc2d2fa0f7eac":"48N7F","11280debdefd0431":"jLVt0","cdfa70ae1d308d00":"7tMcJ","f34fe41922b2586d":"XOBs2","8fe9ec68514a39e3":"04zIi","deb2151dfbb509cd":"cqtnE","10cc9bcddfb0a9e3":"4ToNy","8766a5d2d9a1cbe5":"9TLtJ","2346505ad78baa47":"lf8Jx","565cc7de1c720893":"iWN5U","20604925b297b483":"aBUwv","b60f28e19ed5645d":"cfLcc","46a3ac90ead8eb4b":"8KlGN","8f8930169555991d":"16V9b","54bfe7ee4aef0962":"jz6T3","773d8be78472f983":"gpVRZ","d562071e9c1ece6":"a6w5i","b4fcf97888be254":"4RX2S","9935775539310a4":"9vs8T","dfd60661f83422de":"5xw76","9d0c04b5449c6e78":"2S842","720ccb4e93255b25":"fw59W","6ccaff7eb0bdeb93":"ey2As","4806d8e218627ab5":"23WVQ","2c4f60e32f378ca9":"cfvBN","865f538633d0b1dc":"61jRH","39be71bc5a9474e0":"dGcfD","862f63336e6a3803":"dqwC6","64389f8910c4a5b9":"g6MJA","47d3b6b473ade444":"9nwch","af58e9024f3ec2aa":"6pAPi","d5c714291b3e2173":"dkkJr","d9f14ea8509d3156":"1HD7h","e23e1493d8180c78":"d7tC3","bd8f00b86989f84b":"dVvZ1","f164ec680e944d6d":"TuLai","fc926fb4ed15df4":"9usn9","77d47f70247ccaa0":"7FkdC","213ed12e877bdf8":"58onJ","337f47ad9c8e55bb":"9AMSQ","dc15afeda3fdbc10":"2hnnS","ffdc7890af793ea9":"ixGKc","dd871b27f50d719f":"38jaC","e3ed8d3f9f24501d":"ebP7q","a661ec8bde091a63":"g2BCM","289dada425dcdbf0":"efRxJ","93ca55a06b72c0f4":"lnUJJ","3343679c8bbbb107":"itCiR","fb58c487e522e11b":"7CTF3","d696c059aa7292c1":"gKfW3","4f72da706ff07282":"g0yoh","2d95b671d5e6b31d":"hNctK","2f4a2df8e9e6c6c5":"3ZSXE","c26a8c456b0bfbbd":"4LuOo","3f701d22f6a1ae4f":"aQiAx","19450e227fa8d4e6":"gOOJT","1e27e0a9c5922d42":"36jxX","a084f06dc30f536f":"c3hwE","2fa52e674a840793":"37II4","e94ec1065f59594f":"irDF9","4a3d192459069081":"a2iLs","b65864aa197fa6d0":"eNwOr","c7939ca45e20c9e6":"8HRf5","4e948917a9e514ef":"71X9k","3898a29ba68820":"jJkqw","26317caa31b191b2":"8Wz3p","42715847c1bc4744":"8wsJG","421a5f52f1a54bf2":"cGbwh","7b382b2b0bbad026":"bjW3k","efcbb5cde267920c":"glQPj","ecaccd9706afa493":"j3SmK","29dd4c45ad77a411":"ddkCR","9ebc252dff86358a":"bjrZZ","181e6b8ac3026ce3":"jvs5D","f0d63a691568917b":"2qJ11","cb2bff42f9bf1da3":"7v7TI","2008e68ae020640b":"iuRGj","7703d2aff3ac19f2":"i1brw","cc7873bdb72ab106":"bDjFw","ddb0c8ec6e1128ec":"9Xxl8","f0fdfe553e8b2b8b":"iwG75","83fd77e6e3d1ed4d":"kVYQq","bfdc94773439b970":"g65Jv","e53408e84c34725c":"d9WDx","dee32d35a055d161":"4uXw0","8eb0fe6d497319ac":"26k7u","2d4bf2da7d0a6ebf":"f126k","97707bd921d6bd97":"koQJz","112c0986b11e3773":"67OWY","3d504689dbdd2069":"5uuJf","38539e1f0ba5a0da":"fAiQM","adf6607a48b65015":"9NzaL","6a060de4f8cd5f51":"hqG3s","a1a4532e178c00e4":"7giQp","644f90a72aefea2f":"5uU1T","67704ca106e263d":"2E4o7","5aa9c5adff06bff6":"2wBEo","d2192ee8df9e83c3":"21oF2","11023e0d66f4a5c6":"btrgK","a1c31f725c1b9044":"6OJxD","557036c03b3c0cf2":"70H9m","cfcd6ed14b0881ce":"3F4pB","c49dc6a73b22dff2":"4CBrI","feb7bc20d8ad2999":"dakAl","44700e4b32d1904e":"4IXtI","b917fe1860ba64a6":"iMRQE","19f93dc81edaaaf1":"bo9Ce","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"waRO2":[function(require,module,exports) {
module.exports = require("e201c0d350677e84").getBundleURL("acxhI") + "0.c05f597e.png" + "?" + Date.now();

},{"e201c0d350677e84":"dhz1j"}],"dhz1j":[function(require,module,exports) {
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

},{}],"9LNWj":[function(require,module,exports) {
module.exports = require("cc745423ed759918").getBundleURL("acxhI") + "1.f5e0bbca.png" + "?" + Date.now();

},{"cc745423ed759918":"dhz1j"}],"9YCIZ":[function(require,module,exports) {
module.exports = require("9513cbba19d20f70").getBundleURL("acxhI") + "2.6e5a4f0f.png" + "?" + Date.now();

},{"9513cbba19d20f70":"dhz1j"}],"j19zG":[function(require,module,exports) {
module.exports = require("780e26c14538364d").getBundleURL("acxhI") + "3.f5fa0501.png" + "?" + Date.now();

},{"780e26c14538364d":"dhz1j"}],"g7nop":[function(require,module,exports) {
module.exports = require("1e6a3fc10d6681b8").getBundleURL("acxhI") + "4.4abc774b.png" + "?" + Date.now();

},{"1e6a3fc10d6681b8":"dhz1j"}],"65XXO":[function(require,module,exports) {
module.exports = require("5f904c37e2d61f1e").getBundleURL("acxhI") + "5.da2c8650.png" + "?" + Date.now();

},{"5f904c37e2d61f1e":"dhz1j"}],"gYWJ1":[function(require,module,exports) {
module.exports = require("e5a874c38ddeaf40").getBundleURL("acxhI") + "6.ea9ec2f6.png" + "?" + Date.now();

},{"e5a874c38ddeaf40":"dhz1j"}],"arvlb":[function(require,module,exports) {
module.exports = require("afff1021c2360e6b").getBundleURL("acxhI") + "7.301ec684.png" + "?" + Date.now();

},{"afff1021c2360e6b":"dhz1j"}],"3Bmcp":[function(require,module,exports) {
module.exports = require("ff3167c1d55feb1c").getBundleURL("acxhI") + "8.b06abc28.png" + "?" + Date.now();

},{"ff3167c1d55feb1c":"dhz1j"}],"cY8TN":[function(require,module,exports) {
module.exports = require("43fe9aaee5722d5e").getBundleURL("acxhI") + "9.26742fae.png" + "?" + Date.now();

},{"43fe9aaee5722d5e":"dhz1j"}],"l0GrO":[function(require,module,exports) {
module.exports = require("807b79dfe6365c50").getBundleURL("acxhI") + "10.822bf667.png" + "?" + Date.now();

},{"807b79dfe6365c50":"dhz1j"}],"krXPp":[function(require,module,exports) {
module.exports = require("2e6f6f83a47feedd").getBundleURL("acxhI") + "11.449a5e9c.png" + "?" + Date.now();

},{"2e6f6f83a47feedd":"dhz1j"}],"dkl3u":[function(require,module,exports) {
module.exports = require("1c38d020ccc424c4").getBundleURL("acxhI") + "12.d9546cf7.png" + "?" + Date.now();

},{"1c38d020ccc424c4":"dhz1j"}],"9JwxU":[function(require,module,exports) {
module.exports = require("5c8b50e8f09a0bb0").getBundleURL("acxhI") + "13.974d4d52.png" + "?" + Date.now();

},{"5c8b50e8f09a0bb0":"dhz1j"}],"gUZ5V":[function(require,module,exports) {
module.exports = require("7ac6a55e557d68").getBundleURL("acxhI") + "14.52e1ebb3.png" + "?" + Date.now();

},{"7ac6a55e557d68":"dhz1j"}],"fRW4v":[function(require,module,exports) {
module.exports = require("a29c5b1ef9996c4a").getBundleURL("acxhI") + "15.d1a1daf0.png" + "?" + Date.now();

},{"a29c5b1ef9996c4a":"dhz1j"}],"gYgWT":[function(require,module,exports) {
module.exports = require("8d050332614f1ee3").getBundleURL("acxhI") + "16.50f9fa1d.png" + "?" + Date.now();

},{"8d050332614f1ee3":"dhz1j"}],"12RwG":[function(require,module,exports) {
module.exports = require("cb63017554902d90").getBundleURL("acxhI") + "0.193e2e66.png" + "?" + Date.now();

},{"cb63017554902d90":"dhz1j"}],"5FZJi":[function(require,module,exports) {
module.exports = require("dc99c9088f9d4884").getBundleURL("acxhI") + "1.a5561b19.png" + "?" + Date.now();

},{"dc99c9088f9d4884":"dhz1j"}],"dvLFh":[function(require,module,exports) {
module.exports = require("eb4d8e22c0e662df").getBundleURL("acxhI") + "2.4495a959.png" + "?" + Date.now();

},{"eb4d8e22c0e662df":"dhz1j"}],"hmCIz":[function(require,module,exports) {
module.exports = require("cfa790726120d827").getBundleURL("acxhI") + "3.17530a32.png" + "?" + Date.now();

},{"cfa790726120d827":"dhz1j"}],"kCbtt":[function(require,module,exports) {
module.exports = require("a8ec7edb61c25fb0").getBundleURL("acxhI") + "4.2b6bb0c6.png" + "?" + Date.now();

},{"a8ec7edb61c25fb0":"dhz1j"}],"8yQRn":[function(require,module,exports) {
module.exports = require("4b391a6adfa6bf0a").getBundleURL("acxhI") + "5.15620d2d.png" + "?" + Date.now();

},{"4b391a6adfa6bf0a":"dhz1j"}],"6Vi0C":[function(require,module,exports) {
module.exports = require("edaf7dc601277c9e").getBundleURL("acxhI") + "6.d6e35f7b.png" + "?" + Date.now();

},{"edaf7dc601277c9e":"dhz1j"}],"7JYeD":[function(require,module,exports) {
module.exports = require("61f0451d9ca291b2").getBundleURL("acxhI") + "7.9ec250db.png" + "?" + Date.now();

},{"61f0451d9ca291b2":"dhz1j"}],"9U3Ea":[function(require,module,exports) {
module.exports = require("e03d3af075a037b0").getBundleURL("acxhI") + "8.ac44445a.png" + "?" + Date.now();

},{"e03d3af075a037b0":"dhz1j"}],"92cvZ":[function(require,module,exports) {
module.exports = require("1428fa79f56bc689").getBundleURL("acxhI") + "9.66d0deb5.png" + "?" + Date.now();

},{"1428fa79f56bc689":"dhz1j"}],"hNXic":[function(require,module,exports) {
module.exports = require("c42bb57a965a5dfc").getBundleURL("acxhI") + "10.919b07f0.png" + "?" + Date.now();

},{"c42bb57a965a5dfc":"dhz1j"}],"j2YYo":[function(require,module,exports) {
module.exports = require("f4e6e1c7c3b0f805").getBundleURL("acxhI") + "11.7ae218ca.png" + "?" + Date.now();

},{"f4e6e1c7c3b0f805":"dhz1j"}],"QhUV7":[function(require,module,exports) {
module.exports = require("b05ce74e39a5d27").getBundleURL("acxhI") + "12.ab13bd0d.png" + "?" + Date.now();

},{"b05ce74e39a5d27":"dhz1j"}],"giZxQ":[function(require,module,exports) {
module.exports = require("d5222f2c8eb7690f").getBundleURL("acxhI") + "13.e7fbb1d0.png" + "?" + Date.now();

},{"d5222f2c8eb7690f":"dhz1j"}],"iVUPI":[function(require,module,exports) {
module.exports = require("4828602288ce9873").getBundleURL("acxhI") + "14.7cd9ba3f.png" + "?" + Date.now();

},{"4828602288ce9873":"dhz1j"}],"2NjDO":[function(require,module,exports) {
module.exports = require("771963a54d6ceb3a").getBundleURL("acxhI") + "15.48c0ac6b.png" + "?" + Date.now();

},{"771963a54d6ceb3a":"dhz1j"}],"NirOq":[function(require,module,exports) {
module.exports = require("1866dde2301ba6e2").getBundleURL("acxhI") + "16.5a9c6892.png" + "?" + Date.now();

},{"1866dde2301ba6e2":"dhz1j"}],"BAscT":[function(require,module,exports) {
module.exports = require("897b518713a6685c").getBundleURL("acxhI") + "0.3639ed90.png" + "?" + Date.now();

},{"897b518713a6685c":"dhz1j"}],"62Wuj":[function(require,module,exports) {
module.exports = require("1ad3246068e28c15").getBundleURL("acxhI") + "1.8ae217f4.png" + "?" + Date.now();

},{"1ad3246068e28c15":"dhz1j"}],"72yY6":[function(require,module,exports) {
module.exports = require("15d7e03ee60485f").getBundleURL("acxhI") + "2.3624aafa.png" + "?" + Date.now();

},{"15d7e03ee60485f":"dhz1j"}],"3qgzP":[function(require,module,exports) {
module.exports = require("1458cbd8a8eb9aa1").getBundleURL("acxhI") + "3.26d4178a.png" + "?" + Date.now();

},{"1458cbd8a8eb9aa1":"dhz1j"}],"aQvQE":[function(require,module,exports) {
module.exports = require("9b2e3be9ed09c5a8").getBundleURL("acxhI") + "4.a9fcc8c6.png" + "?" + Date.now();

},{"9b2e3be9ed09c5a8":"dhz1j"}],"ePsio":[function(require,module,exports) {
module.exports = require("7aa34ec67d6186a4").getBundleURL("acxhI") + "5.9687d14b.png" + "?" + Date.now();

},{"7aa34ec67d6186a4":"dhz1j"}],"c96NK":[function(require,module,exports) {
module.exports = require("2faa08f5ea756897").getBundleURL("acxhI") + "6.181ecc68.png" + "?" + Date.now();

},{"2faa08f5ea756897":"dhz1j"}],"8FfbH":[function(require,module,exports) {
module.exports = require("d2e817f4d71d54f6").getBundleURL("acxhI") + "7.eba5d7fc.png" + "?" + Date.now();

},{"d2e817f4d71d54f6":"dhz1j"}],"2hz0U":[function(require,module,exports) {
module.exports = require("72293e34a115c9df").getBundleURL("acxhI") + "8.3989665e.png" + "?" + Date.now();

},{"72293e34a115c9df":"dhz1j"}],"622Y8":[function(require,module,exports) {
module.exports = require("4450fc0ee9bce651").getBundleURL("acxhI") + "9.399e354b.png" + "?" + Date.now();

},{"4450fc0ee9bce651":"dhz1j"}],"6wZzp":[function(require,module,exports) {
module.exports = require("b4f6493be91827bc").getBundleURL("acxhI") + "10.86c52300.png" + "?" + Date.now();

},{"b4f6493be91827bc":"dhz1j"}],"hIg4f":[function(require,module,exports) {
module.exports = require("53012f6a73e7ae7d").getBundleURL("acxhI") + "11.b5df9679.png" + "?" + Date.now();

},{"53012f6a73e7ae7d":"dhz1j"}],"2VlTo":[function(require,module,exports) {
module.exports = require("6b3a4c7681d84305").getBundleURL("acxhI") + "12.60821c78.png" + "?" + Date.now();

},{"6b3a4c7681d84305":"dhz1j"}],"51UeD":[function(require,module,exports) {
module.exports = require("4ccc0fd6b608fc27").getBundleURL("acxhI") + "13.00ff10d2.png" + "?" + Date.now();

},{"4ccc0fd6b608fc27":"dhz1j"}],"ane6y":[function(require,module,exports) {
module.exports = require("bf5cc7e018ccf647").getBundleURL("acxhI") + "14.80d403ef.png" + "?" + Date.now();

},{"bf5cc7e018ccf647":"dhz1j"}],"99BPU":[function(require,module,exports) {
module.exports = require("1cbf42ae8a2a4d1f").getBundleURL("acxhI") + "15.b82aa396.png" + "?" + Date.now();

},{"1cbf42ae8a2a4d1f":"dhz1j"}],"2Mdby":[function(require,module,exports) {
module.exports = require("f829cb529640a39").getBundleURL("acxhI") + "16.550c461a.png" + "?" + Date.now();

},{"f829cb529640a39":"dhz1j"}],"h5UrD":[function(require,module,exports) {
module.exports = require("2edc1621f2c844e1").getBundleURL("acxhI") + "0.665bc96e.png" + "?" + Date.now();

},{"2edc1621f2c844e1":"dhz1j"}],"IAyrs":[function(require,module,exports) {
module.exports = require("32c691fdbf8bcc3f").getBundleURL("acxhI") + "1.bb08120e.png" + "?" + Date.now();

},{"32c691fdbf8bcc3f":"dhz1j"}],"ltRJf":[function(require,module,exports) {
module.exports = require("c076a7ec7bf47dcb").getBundleURL("acxhI") + "2.1919af40.png" + "?" + Date.now();

},{"c076a7ec7bf47dcb":"dhz1j"}],"g4w64":[function(require,module,exports) {
module.exports = require("3e7bce4ea7b70142").getBundleURL("acxhI") + "0.b9b166ae.png" + "?" + Date.now();

},{"3e7bce4ea7b70142":"dhz1j"}],"9CTOh":[function(require,module,exports) {
module.exports = require("81158bfe549c4ef9").getBundleURL("acxhI") + "1.494dee77.png" + "?" + Date.now();

},{"81158bfe549c4ef9":"dhz1j"}],"1ZRbA":[function(require,module,exports) {
module.exports = require("857090d89a3c1595").getBundleURL("acxhI") + "2.22409302.png" + "?" + Date.now();

},{"857090d89a3c1595":"dhz1j"}],"lKV4R":[function(require,module,exports) {
module.exports = require("8d24e4072a132f75").getBundleURL("acxhI") + "0.b53c2dc9.png" + "?" + Date.now();

},{"8d24e4072a132f75":"dhz1j"}],"8aw5Y":[function(require,module,exports) {
module.exports = require("d0778555dd6584d7").getBundleURL("acxhI") + "1.3a2fef45.png" + "?" + Date.now();

},{"d0778555dd6584d7":"dhz1j"}],"kqxdQ":[function(require,module,exports) {
module.exports = require("4a832bb5d193f982").getBundleURL("acxhI") + "2.a436573c.png" + "?" + Date.now();

},{"4a832bb5d193f982":"dhz1j"}],"gTmK1":[function(require,module,exports) {
module.exports = require("7f5f3c449a65573a").getBundleURL("acxhI") + "0.47fafcca.png" + "?" + Date.now();

},{"7f5f3c449a65573a":"dhz1j"}],"6hOs5":[function(require,module,exports) {
module.exports = require("da880ca0848eaff6").getBundleURL("acxhI") + "1.07a7f6f3.png" + "?" + Date.now();

},{"da880ca0848eaff6":"dhz1j"}],"gCZNP":[function(require,module,exports) {
module.exports = require("4607ac4e4390e0a9").getBundleURL("acxhI") + "2.8adc8632.png" + "?" + Date.now();

},{"4607ac4e4390e0a9":"dhz1j"}],"fU0pR":[function(require,module,exports) {
module.exports = require("42b5f33c4bc0005").getBundleURL("acxhI") + "3.70eb75c6.png" + "?" + Date.now();

},{"42b5f33c4bc0005":"dhz1j"}],"gqaFw":[function(require,module,exports) {
module.exports = require("4e3fd6901ff95305").getBundleURL("acxhI") + "4.ce12d47a.png" + "?" + Date.now();

},{"4e3fd6901ff95305":"dhz1j"}],"iFRLJ":[function(require,module,exports) {
module.exports = require("a2bebe61c0e42def").getBundleURL("acxhI") + "5.071c1240.png" + "?" + Date.now();

},{"a2bebe61c0e42def":"dhz1j"}],"arYvF":[function(require,module,exports) {
module.exports = require("bd06876d8c2aef03").getBundleURL("acxhI") + "6.8684514b.png" + "?" + Date.now();

},{"bd06876d8c2aef03":"dhz1j"}],"af167":[function(require,module,exports) {
module.exports = require("e64171965f599990").getBundleURL("acxhI") + "0.b9d8eb08.png" + "?" + Date.now();

},{"e64171965f599990":"dhz1j"}],"2ENj1":[function(require,module,exports) {
module.exports = require("a993da5a3fb6e736").getBundleURL("acxhI") + "1.02d137e6.png" + "?" + Date.now();

},{"a993da5a3fb6e736":"dhz1j"}],"8mkly":[function(require,module,exports) {
module.exports = require("988bfd4a632438ae").getBundleURL("acxhI") + "2.937b6f73.png" + "?" + Date.now();

},{"988bfd4a632438ae":"dhz1j"}],"bpjf2":[function(require,module,exports) {
module.exports = require("fe383ff78b314af6").getBundleURL("acxhI") + "3.53511686.png" + "?" + Date.now();

},{"fe383ff78b314af6":"dhz1j"}],"6xDcM":[function(require,module,exports) {
module.exports = require("f3f468572b4f6b65").getBundleURL("acxhI") + "4.e0b9e2d0.png" + "?" + Date.now();

},{"f3f468572b4f6b65":"dhz1j"}],"fxA5f":[function(require,module,exports) {
module.exports = require("42046312efa92e53").getBundleURL("acxhI") + "5.44f19494.png" + "?" + Date.now();

},{"42046312efa92e53":"dhz1j"}],"b5Bj3":[function(require,module,exports) {
module.exports = require("1da6235df4181a93").getBundleURL("acxhI") + "6.ae7d27e4.png" + "?" + Date.now();

},{"1da6235df4181a93":"dhz1j"}],"9ew6v":[function(require,module,exports) {
module.exports = require("f5344c35555d4005").getBundleURL("acxhI") + "0.8fa95051.png" + "?" + Date.now();

},{"f5344c35555d4005":"dhz1j"}],"8lrjK":[function(require,module,exports) {
module.exports = require("7e47335e134f8883").getBundleURL("acxhI") + "1.b89394f0.png" + "?" + Date.now();

},{"7e47335e134f8883":"dhz1j"}],"1VMCZ":[function(require,module,exports) {
module.exports = require("1b3f96b7fa95c7e").getBundleURL("acxhI") + "2.86e25a86.png" + "?" + Date.now();

},{"1b3f96b7fa95c7e":"dhz1j"}],"lBAX6":[function(require,module,exports) {
module.exports = require("9c293e45899172a2").getBundleURL("acxhI") + "3.cbf74ba1.png" + "?" + Date.now();

},{"9c293e45899172a2":"dhz1j"}],"idHtQ":[function(require,module,exports) {
module.exports = require("33818c0e548c7240").getBundleURL("acxhI") + "4.cf20c243.png" + "?" + Date.now();

},{"33818c0e548c7240":"dhz1j"}],"fiD3q":[function(require,module,exports) {
module.exports = require("88c50860d62093f5").getBundleURL("acxhI") + "5.52e02548.png" + "?" + Date.now();

},{"88c50860d62093f5":"dhz1j"}],"iLtVO":[function(require,module,exports) {
module.exports = require("49d4456cab719b8f").getBundleURL("acxhI") + "6.d5751dd7.png" + "?" + Date.now();

},{"49d4456cab719b8f":"dhz1j"}],"ijKOL":[function(require,module,exports) {
module.exports = require("2e07bb563760b4a4").getBundleURL("acxhI") + "0.7bf4b80b.png" + "?" + Date.now();

},{"2e07bb563760b4a4":"dhz1j"}],"3vz3z":[function(require,module,exports) {
module.exports = require("208e5d5837703e91").getBundleURL("acxhI") + "1.1e459d26.png" + "?" + Date.now();

},{"208e5d5837703e91":"dhz1j"}],"gx8yA":[function(require,module,exports) {
module.exports = require("541106d1065b627b").getBundleURL("acxhI") + "2.2fdb3422.png" + "?" + Date.now();

},{"541106d1065b627b":"dhz1j"}],"4BdU1":[function(require,module,exports) {
module.exports = require("dbeb7fea7d59a9ed").getBundleURL("acxhI") + "0.02fcac5d.png" + "?" + Date.now();

},{"dbeb7fea7d59a9ed":"dhz1j"}],"dTgBe":[function(require,module,exports) {
module.exports = require("dc4d75d5fce832de").getBundleURL("acxhI") + "1.d47ded85.png" + "?" + Date.now();

},{"dc4d75d5fce832de":"dhz1j"}],"2Qkiw":[function(require,module,exports) {
module.exports = require("fa56723fd1e24a57").getBundleURL("acxhI") + "2.fd8d1431.png" + "?" + Date.now();

},{"fa56723fd1e24a57":"dhz1j"}],"41EOt":[function(require,module,exports) {
module.exports = require("63ef3c11cb6efcca").getBundleURL("acxhI") + "0.d58179f3.png" + "?" + Date.now();

},{"63ef3c11cb6efcca":"dhz1j"}],"48N7F":[function(require,module,exports) {
module.exports = require("54d5c34f148aa596").getBundleURL("acxhI") + "1.c90533b8.png" + "?" + Date.now();

},{"54d5c34f148aa596":"dhz1j"}],"jLVt0":[function(require,module,exports) {
module.exports = require("2778806153934658").getBundleURL("acxhI") + "2.e531ead6.png" + "?" + Date.now();

},{"2778806153934658":"dhz1j"}],"7tMcJ":[function(require,module,exports) {
module.exports = require("86e3aeba7bffbf9a").getBundleURL("acxhI") + "0.1ca82a97.png" + "?" + Date.now();

},{"86e3aeba7bffbf9a":"dhz1j"}],"XOBs2":[function(require,module,exports) {
module.exports = require("880ba8541f2f6fe8").getBundleURL("acxhI") + "1.183544ea.png" + "?" + Date.now();

},{"880ba8541f2f6fe8":"dhz1j"}],"04zIi":[function(require,module,exports) {
module.exports = require("58a8809aedffc64f").getBundleURL("acxhI") + "2.925ff2fe.png" + "?" + Date.now();

},{"58a8809aedffc64f":"dhz1j"}],"cqtnE":[function(require,module,exports) {
module.exports = require("d2c65e087df0e8ed").getBundleURL("acxhI") + "0.7f2655b9.png" + "?" + Date.now();

},{"d2c65e087df0e8ed":"dhz1j"}],"4ToNy":[function(require,module,exports) {
module.exports = require("90627e4b90a7d508").getBundleURL("acxhI") + "1.29b1634a.png" + "?" + Date.now();

},{"90627e4b90a7d508":"dhz1j"}],"9TLtJ":[function(require,module,exports) {
module.exports = require("79c2ebefcada5988").getBundleURL("acxhI") + "2.e9ae6571.png" + "?" + Date.now();

},{"79c2ebefcada5988":"dhz1j"}],"lf8Jx":[function(require,module,exports) {
module.exports = require("4398be269c9c7c3b").getBundleURL("acxhI") + "0.f67f4ca5.png" + "?" + Date.now();

},{"4398be269c9c7c3b":"dhz1j"}],"iWN5U":[function(require,module,exports) {
module.exports = require("d728283a3b3a6efb").getBundleURL("acxhI") + "1.7a00a821.png" + "?" + Date.now();

},{"d728283a3b3a6efb":"dhz1j"}],"aBUwv":[function(require,module,exports) {
module.exports = require("b1471b58c2db9b4f").getBundleURL("acxhI") + "2.0fd24eab.png" + "?" + Date.now();

},{"b1471b58c2db9b4f":"dhz1j"}],"cfLcc":[function(require,module,exports) {
module.exports = require("7f197c2b6504bc8f").getBundleURL("acxhI") + "0.d664e154.png" + "?" + Date.now();

},{"7f197c2b6504bc8f":"dhz1j"}],"8KlGN":[function(require,module,exports) {
module.exports = require("745857a45114fa5d").getBundleURL("acxhI") + "1.84e98fe3.png" + "?" + Date.now();

},{"745857a45114fa5d":"dhz1j"}],"16V9b":[function(require,module,exports) {
module.exports = require("a64eb73bd68b66d").getBundleURL("acxhI") + "0.25491624.png" + "?" + Date.now();

},{"a64eb73bd68b66d":"dhz1j"}],"jz6T3":[function(require,module,exports) {
module.exports = require("520b79e018420f69").getBundleURL("acxhI") + "1.72447919.png" + "?" + Date.now();

},{"520b79e018420f69":"dhz1j"}],"gpVRZ":[function(require,module,exports) {
module.exports = require("d9a6c48e42456574").getBundleURL("acxhI") + "0.69e48132.png" + "?" + Date.now();

},{"d9a6c48e42456574":"dhz1j"}],"a6w5i":[function(require,module,exports) {
module.exports = require("61c1feea5bae320a").getBundleURL("acxhI") + "1.bed8f360.png" + "?" + Date.now();

},{"61c1feea5bae320a":"dhz1j"}],"4RX2S":[function(require,module,exports) {
module.exports = require("5daced5d4cf1d54f").getBundleURL("acxhI") + "0.a945627c.png" + "?" + Date.now();

},{"5daced5d4cf1d54f":"dhz1j"}],"9vs8T":[function(require,module,exports) {
module.exports = require("9232305aab7c004a").getBundleURL("acxhI") + "1.d67f7f85.png" + "?" + Date.now();

},{"9232305aab7c004a":"dhz1j"}],"5xw76":[function(require,module,exports) {
module.exports = require("87d7f4b835321379").getBundleURL("acxhI") + "2.856e4f6a.png" + "?" + Date.now();

},{"87d7f4b835321379":"dhz1j"}],"2S842":[function(require,module,exports) {
module.exports = require("cec8ff7379d49029").getBundleURL("acxhI") + "0.789fd4a1.png" + "?" + Date.now();

},{"cec8ff7379d49029":"dhz1j"}],"fw59W":[function(require,module,exports) {
module.exports = require("6b7518564e3b103e").getBundleURL("acxhI") + "1.8b40dd4a.png" + "?" + Date.now();

},{"6b7518564e3b103e":"dhz1j"}],"ey2As":[function(require,module,exports) {
module.exports = require("eee511e4ea77afb5").getBundleURL("acxhI") + "2.ca95d9a6.png" + "?" + Date.now();

},{"eee511e4ea77afb5":"dhz1j"}],"23WVQ":[function(require,module,exports) {
module.exports = require("ec87246107d6fbc5").getBundleURL("acxhI") + "0.4458cafc.png" + "?" + Date.now();

},{"ec87246107d6fbc5":"dhz1j"}],"cfvBN":[function(require,module,exports) {
module.exports = require("48b25e09a8881b6f").getBundleURL("acxhI") + "1.b03a4630.png" + "?" + Date.now();

},{"48b25e09a8881b6f":"dhz1j"}],"61jRH":[function(require,module,exports) {
module.exports = require("c7afd189a947f4fa").getBundleURL("acxhI") + "2.51782ce6.png" + "?" + Date.now();

},{"c7afd189a947f4fa":"dhz1j"}],"dGcfD":[function(require,module,exports) {
module.exports = require("7e7fb905e872a56e").getBundleURL("acxhI") + "0.344dfc5d.png" + "?" + Date.now();

},{"7e7fb905e872a56e":"dhz1j"}],"dqwC6":[function(require,module,exports) {
module.exports = require("e41bf8b919f9a9e8").getBundleURL("acxhI") + "1.6cfd4c0f.png" + "?" + Date.now();

},{"e41bf8b919f9a9e8":"dhz1j"}],"g6MJA":[function(require,module,exports) {
module.exports = require("73ed2a0ddecb65f2").getBundleURL("acxhI") + "2.d3829fbe.png" + "?" + Date.now();

},{"73ed2a0ddecb65f2":"dhz1j"}],"9nwch":[function(require,module,exports) {
module.exports = require("20646cf89336d2e1").getBundleURL("acxhI") + "3.f973e4e6.png" + "?" + Date.now();

},{"20646cf89336d2e1":"dhz1j"}],"6pAPi":[function(require,module,exports) {
module.exports = require("2c5919f5134b645e").getBundleURL("acxhI") + "0.8a16c0d1.png" + "?" + Date.now();

},{"2c5919f5134b645e":"dhz1j"}],"dkkJr":[function(require,module,exports) {
module.exports = require("b096ae2d4418d1da").getBundleURL("acxhI") + "1.b7e32682.png" + "?" + Date.now();

},{"b096ae2d4418d1da":"dhz1j"}],"1HD7h":[function(require,module,exports) {
module.exports = require("2d9f25487749c210").getBundleURL("acxhI") + "2.56781b8b.png" + "?" + Date.now();

},{"2d9f25487749c210":"dhz1j"}],"d7tC3":[function(require,module,exports) {
module.exports = require("c7fc5cd4578b7ea9").getBundleURL("acxhI") + "3.9ad0da0e.png" + "?" + Date.now();

},{"c7fc5cd4578b7ea9":"dhz1j"}],"dVvZ1":[function(require,module,exports) {
module.exports = require("80fbfe6404f630d0").getBundleURL("acxhI") + "0.67ca11be.png" + "?" + Date.now();

},{"80fbfe6404f630d0":"dhz1j"}],"TuLai":[function(require,module,exports) {
module.exports = require("4d44da9eb6c61786").getBundleURL("acxhI") + "1.58a318a4.png" + "?" + Date.now();

},{"4d44da9eb6c61786":"dhz1j"}],"9usn9":[function(require,module,exports) {
module.exports = require("90f9b6e17fcd54c6").getBundleURL("acxhI") + "2.3a2455c9.png" + "?" + Date.now();

},{"90f9b6e17fcd54c6":"dhz1j"}],"7FkdC":[function(require,module,exports) {
module.exports = require("d52eade3934a6037").getBundleURL("acxhI") + "3.2eddc175.png" + "?" + Date.now();

},{"d52eade3934a6037":"dhz1j"}],"58onJ":[function(require,module,exports) {
module.exports = require("80b7f10cde8c0b81").getBundleURL("acxhI") + "0.6d26c893.png" + "?" + Date.now();

},{"80b7f10cde8c0b81":"dhz1j"}],"9AMSQ":[function(require,module,exports) {
module.exports = require("f43729c7c6e32cf0").getBundleURL("acxhI") + "1.a7ad66df.png" + "?" + Date.now();

},{"f43729c7c6e32cf0":"dhz1j"}],"2hnnS":[function(require,module,exports) {
module.exports = require("ed25330e1ce2fc49").getBundleURL("acxhI") + "2.4d31e85d.png" + "?" + Date.now();

},{"ed25330e1ce2fc49":"dhz1j"}],"ixGKc":[function(require,module,exports) {
module.exports = require("ac53ca785172fbd1").getBundleURL("acxhI") + "3.03170b54.png" + "?" + Date.now();

},{"ac53ca785172fbd1":"dhz1j"}],"38jaC":[function(require,module,exports) {
module.exports = require("6eae32e476d6c923").getBundleURL("acxhI") + "0.32920bc1.png" + "?" + Date.now();

},{"6eae32e476d6c923":"dhz1j"}],"ebP7q":[function(require,module,exports) {
module.exports = require("480657b8a4c526af").getBundleURL("acxhI") + "1.e87a028f.png" + "?" + Date.now();

},{"480657b8a4c526af":"dhz1j"}],"g2BCM":[function(require,module,exports) {
module.exports = require("6b42dc2c4194362e").getBundleURL("acxhI") + "2.461f64a2.png" + "?" + Date.now();

},{"6b42dc2c4194362e":"dhz1j"}],"efRxJ":[function(require,module,exports) {
module.exports = require("d3992cff1a37b80e").getBundleURL("acxhI") + "3.7d1e4de7.png" + "?" + Date.now();

},{"d3992cff1a37b80e":"dhz1j"}],"lnUJJ":[function(require,module,exports) {
module.exports = require("ee3203ede9fb5043").getBundleURL("acxhI") + "0.feb1f169.png" + "?" + Date.now();

},{"ee3203ede9fb5043":"dhz1j"}],"itCiR":[function(require,module,exports) {
module.exports = require("85d5faca2a0be2d9").getBundleURL("acxhI") + "1.9864c0d8.png" + "?" + Date.now();

},{"85d5faca2a0be2d9":"dhz1j"}],"7CTF3":[function(require,module,exports) {
module.exports = require("998058c148d17190").getBundleURL("acxhI") + "2.96b03293.png" + "?" + Date.now();

},{"998058c148d17190":"dhz1j"}],"gKfW3":[function(require,module,exports) {
module.exports = require("eaa8820841668e8f").getBundleURL("acxhI") + "3.9b35045e.png" + "?" + Date.now();

},{"eaa8820841668e8f":"dhz1j"}],"g0yoh":[function(require,module,exports) {
module.exports = require("45d7d2df84a42ae3").getBundleURL("acxhI") + "0.519e3560.png" + "?" + Date.now();

},{"45d7d2df84a42ae3":"dhz1j"}],"hNctK":[function(require,module,exports) {
module.exports = require("102a01b444a96943").getBundleURL("acxhI") + "1.df870eb6.png" + "?" + Date.now();

},{"102a01b444a96943":"dhz1j"}],"3ZSXE":[function(require,module,exports) {
module.exports = require("cdcc16d9fabd477f").getBundleURL("acxhI") + "2.05831082.png" + "?" + Date.now();

},{"cdcc16d9fabd477f":"dhz1j"}],"4LuOo":[function(require,module,exports) {
module.exports = require("d4ac3a197e0c03a4").getBundleURL("acxhI") + "3.9e4676ba.png" + "?" + Date.now();

},{"d4ac3a197e0c03a4":"dhz1j"}],"aQiAx":[function(require,module,exports) {
module.exports = require("a6716a72ecb20f77").getBundleURL("acxhI") + "4.cfbe719f.png" + "?" + Date.now();

},{"a6716a72ecb20f77":"dhz1j"}],"gOOJT":[function(require,module,exports) {
module.exports = require("751b2913c94c1f8f").getBundleURL("acxhI") + "5.d69f4ebb.png" + "?" + Date.now();

},{"751b2913c94c1f8f":"dhz1j"}],"36jxX":[function(require,module,exports) {
module.exports = require("b5d6cd83f6967400").getBundleURL("acxhI") + "6.3e30cbe5.png" + "?" + Date.now();

},{"b5d6cd83f6967400":"dhz1j"}],"c3hwE":[function(require,module,exports) {
module.exports = require("3f7e06ce36c852b6").getBundleURL("acxhI") + "0.de9a1197.png" + "?" + Date.now();

},{"3f7e06ce36c852b6":"dhz1j"}],"37II4":[function(require,module,exports) {
module.exports = require("423c185eb9fcb5ca").getBundleURL("acxhI") + "1.f144bb4a.png" + "?" + Date.now();

},{"423c185eb9fcb5ca":"dhz1j"}],"irDF9":[function(require,module,exports) {
module.exports = require("c0119c991184f231").getBundleURL("acxhI") + "2.e5258106.png" + "?" + Date.now();

},{"c0119c991184f231":"dhz1j"}],"a2iLs":[function(require,module,exports) {
module.exports = require("a164beecb2d60604").getBundleURL("acxhI") + "3.2a976c28.png" + "?" + Date.now();

},{"a164beecb2d60604":"dhz1j"}],"eNwOr":[function(require,module,exports) {
module.exports = require("971ea06a071fd990").getBundleURL("acxhI") + "4.aa561ad9.png" + "?" + Date.now();

},{"971ea06a071fd990":"dhz1j"}],"8HRf5":[function(require,module,exports) {
module.exports = require("f3d4502a89c83113").getBundleURL("acxhI") + "5.cb5750b3.png" + "?" + Date.now();

},{"f3d4502a89c83113":"dhz1j"}],"71X9k":[function(require,module,exports) {
module.exports = require("2392f56806de7507").getBundleURL("acxhI") + "6.45b87dec.png" + "?" + Date.now();

},{"2392f56806de7507":"dhz1j"}],"jJkqw":[function(require,module,exports) {
module.exports = require("19dc4a3e0f714c77").getBundleURL("acxhI") + "0.a86e0f14.png" + "?" + Date.now();

},{"19dc4a3e0f714c77":"dhz1j"}],"8Wz3p":[function(require,module,exports) {
module.exports = require("b62a93023b31dc8e").getBundleURL("acxhI") + "1.198fb7df.png" + "?" + Date.now();

},{"b62a93023b31dc8e":"dhz1j"}],"8wsJG":[function(require,module,exports) {
module.exports = require("b9cb038bd05f7e68").getBundleURL("acxhI") + "2.95895dc3.png" + "?" + Date.now();

},{"b9cb038bd05f7e68":"dhz1j"}],"cGbwh":[function(require,module,exports) {
module.exports = require("c300a57c33854ddd").getBundleURL("acxhI") + "3.d9d409b4.png" + "?" + Date.now();

},{"c300a57c33854ddd":"dhz1j"}],"bjW3k":[function(require,module,exports) {
module.exports = require("6ef81b8d2d481103").getBundleURL("acxhI") + "4.9adab829.png" + "?" + Date.now();

},{"6ef81b8d2d481103":"dhz1j"}],"glQPj":[function(require,module,exports) {
module.exports = require("ad505a2e99b24508").getBundleURL("acxhI") + "5.e1e413c6.png" + "?" + Date.now();

},{"ad505a2e99b24508":"dhz1j"}],"j3SmK":[function(require,module,exports) {
module.exports = require("f18f9fa8de13a7f6").getBundleURL("acxhI") + "6.822d523f.png" + "?" + Date.now();

},{"f18f9fa8de13a7f6":"dhz1j"}],"ddkCR":[function(require,module,exports) {
module.exports = require("d356e665825efddb").getBundleURL("acxhI") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.622bc019.MP4" + "?" + Date.now();

},{"d356e665825efddb":"dhz1j"}],"bjrZZ":[function(require,module,exports) {
module.exports = require("1428d872cb28bda3").getBundleURL("acxhI") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.6a4c9c74.MP4" + "?" + Date.now();

},{"1428d872cb28bda3":"dhz1j"}],"jvs5D":[function(require,module,exports) {
module.exports = require("73761213c2715085").getBundleURL("acxhI") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.ca27e8d7.MP4" + "?" + Date.now();

},{"73761213c2715085":"dhz1j"}],"2qJ11":[function(require,module,exports) {
module.exports = require("8fc316e17f744352").getBundleURL("acxhI") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.7e1a6fe0.MP4" + "?" + Date.now();

},{"8fc316e17f744352":"dhz1j"}],"7v7TI":[function(require,module,exports) {
module.exports = require("f0562d0470e4a183").getBundleURL("acxhI") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.71195177.MP4" + "?" + Date.now();

},{"f0562d0470e4a183":"dhz1j"}],"iuRGj":[function(require,module,exports) {
module.exports = require("fce3807ad5463b10").getBundleURL("acxhI") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.0174dd88.MP4" + "?" + Date.now();

},{"fce3807ad5463b10":"dhz1j"}],"i1brw":[function(require,module,exports) {
module.exports = require("1f06377052205bd").getBundleURL("acxhI") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.123228f5.MP4" + "?" + Date.now();

},{"1f06377052205bd":"dhz1j"}],"bDjFw":[function(require,module,exports) {
module.exports = require("5387586c06390eb6").getBundleURL("acxhI") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b253633b.MP4" + "?" + Date.now();

},{"5387586c06390eb6":"dhz1j"}],"9Xxl8":[function(require,module,exports) {
module.exports = require("a604308ba6790adc").getBundleURL("acxhI") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.06dd88ee.MP4" + "?" + Date.now();

},{"a604308ba6790adc":"dhz1j"}],"iwG75":[function(require,module,exports) {
module.exports = require("93849642f0f258d4").getBundleURL("acxhI") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.d0558e52.MP4" + "?" + Date.now();

},{"93849642f0f258d4":"dhz1j"}],"kVYQq":[function(require,module,exports) {
module.exports = require("f80922e246042263").getBundleURL("acxhI") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.db86c704.MP4" + "?" + Date.now();

},{"f80922e246042263":"dhz1j"}],"g65Jv":[function(require,module,exports) {
module.exports = require("e62bd762efb0fdea").getBundleURL("acxhI") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.fbfc1b21.MP4" + "?" + Date.now();

},{"e62bd762efb0fdea":"dhz1j"}],"d9WDx":[function(require,module,exports) {
module.exports = require("e1528571fb6535b5").getBundleURL("acxhI") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4026b1b9.MP4" + "?" + Date.now();

},{"e1528571fb6535b5":"dhz1j"}],"4uXw0":[function(require,module,exports) {
module.exports = require("dd6f5bd8b4ce969a").getBundleURL("acxhI") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.9ee181f7.MP4" + "?" + Date.now();

},{"dd6f5bd8b4ce969a":"dhz1j"}],"26k7u":[function(require,module,exports) {
module.exports = require("e4654db193c7dbdf").getBundleURL("acxhI") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.992112fd.MP4" + "?" + Date.now();

},{"e4654db193c7dbdf":"dhz1j"}],"f126k":[function(require,module,exports) {
module.exports = require("bb17e5ec38f08c42").getBundleURL("acxhI") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.e83c0f3a.MP4" + "?" + Date.now();

},{"bb17e5ec38f08c42":"dhz1j"}],"koQJz":[function(require,module,exports) {
module.exports = require("38270f71e80ef136").getBundleURL("acxhI") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.d879fa06.MP4" + "?" + Date.now();

},{"38270f71e80ef136":"dhz1j"}],"67OWY":[function(require,module,exports) {
module.exports = require("9e4ae99b1f865fa3").getBundleURL("acxhI") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.fb1b0300.MP4" + "?" + Date.now();

},{"9e4ae99b1f865fa3":"dhz1j"}],"5uuJf":[function(require,module,exports) {
module.exports = require("cd07fcb003775592").getBundleURL("acxhI") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.58840480.MP4" + "?" + Date.now();

},{"cd07fcb003775592":"dhz1j"}],"fAiQM":[function(require,module,exports) {
module.exports = require("5944f21785dbd2ec").getBundleURL("acxhI") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.5728a622.MP4" + "?" + Date.now();

},{"5944f21785dbd2ec":"dhz1j"}],"9NzaL":[function(require,module,exports) {
module.exports = require("7c8b93fdab3661f6").getBundleURL("acxhI") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.4d11b1bd.MP4" + "?" + Date.now();

},{"7c8b93fdab3661f6":"dhz1j"}],"hqG3s":[function(require,module,exports) {
module.exports = require("e63513c684f37e63").getBundleURL("acxhI") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.efd250da.MP4" + "?" + Date.now();

},{"e63513c684f37e63":"dhz1j"}],"7giQp":[function(require,module,exports) {
module.exports = require("b6f6f6121bca9999").getBundleURL("acxhI") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.042ad484.MP4" + "?" + Date.now();

},{"b6f6f6121bca9999":"dhz1j"}],"5uU1T":[function(require,module,exports) {
module.exports = require("d24599033cac0ef9").getBundleURL("acxhI") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.0f278cb4.MP4" + "?" + Date.now();

},{"d24599033cac0ef9":"dhz1j"}],"2E4o7":[function(require,module,exports) {
module.exports = require("2ee4bd4c943ecc59").getBundleURL("acxhI") + "2021_09_11 22_49_16    @   Portugal Sintra @.29b755d2.MP4" + "?" + Date.now();

},{"2ee4bd4c943ecc59":"dhz1j"}],"2wBEo":[function(require,module,exports) {
module.exports = require("f238651fc73203ce").getBundleURL("acxhI") + "2021_09_11 22_49_16    @   Portugal Sintra @.dc60a31b.MP4" + "?" + Date.now();

},{"f238651fc73203ce":"dhz1j"}],"21oF2":[function(require,module,exports) {
module.exports = require("1ac3a7a2f1d58b65").getBundleURL("acxhI") + "2021_09_11 22_49_16    @   Portugal Sintra @.03f64803.MP4" + "?" + Date.now();

},{"1ac3a7a2f1d58b65":"dhz1j"}],"btrgK":[function(require,module,exports) {
module.exports = require("44829116d9b4c55c").getBundleURL("acxhI") + "2021_09_11 18_36_02    @   Portugal Obidos @.72fa430a.MP4" + "?" + Date.now();

},{"44829116d9b4c55c":"dhz1j"}],"6OJxD":[function(require,module,exports) {
module.exports = require("7f74bcdb17fb8df6").getBundleURL("acxhI") + "2021_09_11 18_15_50    @   Portugal Obidos @.db01c981.MP4" + "?" + Date.now();

},{"7f74bcdb17fb8df6":"dhz1j"}],"70H9m":[function(require,module,exports) {
module.exports = require("1de70eebe52576f3").getBundleURL("acxhI") + "2021_09_11 17_56_56    @   Portugal Obidos @.acb207c4.MP4" + "?" + Date.now();

},{"1de70eebe52576f3":"dhz1j"}],"3F4pB":[function(require,module,exports) {
module.exports = require("1fccef82fde1e7b2").getBundleURL("acxhI") + "2021_09_11 18_36_02    @   Portugal Obidos @.5b6bd0f0.MP4" + "?" + Date.now();

},{"1fccef82fde1e7b2":"dhz1j"}],"4CBrI":[function(require,module,exports) {
module.exports = require("ee91f0453e5a4b62").getBundleURL("acxhI") + "2021_09_11 18_15_50    @   Portugal Obidos @.eb6a3c48.MP4" + "?" + Date.now();

},{"ee91f0453e5a4b62":"dhz1j"}],"dakAl":[function(require,module,exports) {
module.exports = require("58b83ccb8bc12f5b").getBundleURL("acxhI") + "2021_09_11 17_56_56    @   Portugal Obidos @.3b06e62c.MP4" + "?" + Date.now();

},{"58b83ccb8bc12f5b":"dhz1j"}],"4IXtI":[function(require,module,exports) {
module.exports = require("747b75df59b350b1").getBundleURL("acxhI") + "2021_09_11 18_36_02    @   Portugal Obidos @.e282e9f3.MP4" + "?" + Date.now();

},{"747b75df59b350b1":"dhz1j"}],"iMRQE":[function(require,module,exports) {
module.exports = require("42b27d5da1cd85ae").getBundleURL("acxhI") + "2021_09_11 18_15_50    @   Portugal Obidos @.54eb92dc.MP4" + "?" + Date.now();

},{"42b27d5da1cd85ae":"dhz1j"}],"bo9Ce":[function(require,module,exports) {
module.exports = require("b866b0da29b34c67").getBundleURL("acxhI") + "2021_09_11 17_56_56    @   Portugal Obidos @.2bca2198.MP4" + "?" + Date.now();

},{"b866b0da29b34c67":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["2xlZs","hNfZx"], "hNfZx", "parcelRequire3c64")

//# sourceMappingURL=013detalle-nazare.c47e1a40.js.map
