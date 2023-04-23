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
})({"guI63":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "77f010e93146b2fd";
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

},{}],"8GOHn":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores noalcobasa_1 admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "alcobasa", ciudadT = "Alcoba\xe7a";
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
window.siguiente_horizontal_alcobasa = cargar_alcobasa_h;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_alcobasa();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    var t = Math.random() * 2000 + 3000;
    var inc = Math.floor(Math.random() * 3 + 1);
    cargar_alcobasa_h(inc, 1);
    setTimeout(CambiarAutomaticamente, t);
}
function cargar_alcobasa_h(incremento, parametro) {
    var w = img.clientWidth, h = img.clientHeight;
    var listado, comentario, c, tiempo;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_1.alcobasa_1;
    listado = (0, _listadosJs.l).fotos.alcobasa_png_300_1;
    if (w > 600) {
        listado = (0, _listadosJs.l).fotos.alcobasa_png_600_1;
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).fotos.alcobasa_png_900_1;
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
  cargar_alcobasa_h(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_alcobasa_h(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_1.alcobasa_1; 
  listado=   l.fotos.alcobasa_png_300_1;  
  if (w >  600) { listado=  l.fotos.alcobasa_png_100_1;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.alcobasa_png_900_1;  c= " grande " ; }
  
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

},{"86781a753eb4dbf":"i5xuG","89ea5d03c92266e0":"kUVpR","4b3eab43661026ee":"j4up5","1b58bb2c4e8118db":"6n95R","a73d7c9e4390513b":"v6QW6","18f01d5dbbda959":"lNJHU","5b20b0e56b82945a":"UvVyt","c5cb6c0359b0662d":"JGZG7","a63b65706a9c9fe5":"jbO0w","e748f6caa373ab73":"fC0XJ","dfdedac191fae4f0":"dJc1z","f6f096fdb88eaef6":"lBpRB","9280d8a758940830":"inRs0","282ccbf2baeec961":"3wtS1","d39f9622f5686817":"kqcyH","483f2d56ab4cdedd":"4m6yu","da461ea778990854":"ajtnK","96f651fb571aa9eb":"17i5t","e543a391b0f85f4f":"cNzBk","a8cf664de7077859":"Nb0pj","598ca8ca53d8a49b":"hmop1","3c3b7f9d3e56e115":"dYn3N","954440e7a3d1f441":"jlb3E","b4cb97e52f2cbd52":"jWByk","7b09e4309565582d":"7NuKz","e6ea0af4531463e2":"015Se","42085257a46e5e09":"f1mw3","6b3ddeea96e7d95a":"jsF9E","afe3ae5977faa1f8":"57YDG","9446df6f7494726d":"6s0VQ","62a84e90f44c3be3":"1WJbr","a531b65afc6a06b0":"gf7qe","323e4a910dee7e0a":"7t5yH","5adaf0b1f2da779b":"4s5Xo","18015bf652a8590c":"74N0w","839e19b40af20bc9":"bozt4","a51b127073443e8b":"gNMch","334a20b09cebc20f":"iY03P","d3c31bcf734c4b17":"koVNC","91fb4da4c9f50617":"gMm72","7951652e2eeb278f":"5bT3S","9d81a0598f30e880":"5OwgO","f7184a54f57fe61e":"1pJCw","aa4e305c904a8bdc":"jJdeR","e3c230bc4328e939":"eQTH0","91da9c9beb8cec92":"hSvL8","6788e9eb952c5639":"CugHd","3e1f56c3a8f09a92":"ldqSp","ba8d1fe6ef07e224":"4jRMW","e7ed43fffc09e558":"c11dQ","eb7f4bebc9ae34f3":"8ZGKL","f49bbc3ce90230f3":"afxIH","c6cc8feb00c43ccc":"4tEND","da3e98b22adbeb4d":"ayiua","ac988f97513b753d":"jzu0m","9870197f68f46ce0":"kPjMj","1909d7c96cdc25f":"hY4If","71900ce38a39f45e":"9webe","d10c891d581aa72e":"9TQEO","4e86e364e53b9592":"jEiWp","da9d375ff4cc6e20":"fia3P","4dc71cac2c1091fe":"i5ZLx","2ae7e13dc9f19b08":"l0eJb","d4a94a2ec96f0f2a":"kmX4t","4d0999fb1640b484":"2bTZt","7eb1276e543406ee":"fWbiW","a1c7d50e344e35d":"hpGAF","d8d3e9b2c45514ef":"baeBJ","73770b04ebc58a8f":"g48Al","3e326606efe38636":"8g01b","6911c8c8c7ec7f4b":"5e7rf","8bfeb5a28916238c":"cZokI","f9da5f86d76bdb5b":"1wBhL","ab0ad55909afb45d":"98zzc","12b4ab72d67dbba1":"jboif","3fdef08c5feabc1f":"ax8n4","97900455fc019c34":"iTxBa","b1db13bef3dedd4":"2pGRy","8c3d146eaaa021db":"j7AGD","8188eea6f1104e67":"7upUX","ddf969591a3cfbba":"dPDxf","f51181bb6365decf":"5aFLX","cd282a7a417c03b7":"74ttx","32d9f1c4543900f0":"jO3cg","e759ed436cf99224":"kzbKI","dfb837cbc24b9472":"8dtWH","e112f5b01b10cbb3":"4lZwv","1166f1f821e20afd":"2Anwy","201fc2d2fa0f7eac":"vpnHr","11280debdefd0431":"lDGTD","cdfa70ae1d308d00":"40qFy","f34fe41922b2586d":"1GAX3","8fe9ec68514a39e3":"7zfOM","deb2151dfbb509cd":"f5A3W","10cc9bcddfb0a9e3":"53WLa","8766a5d2d9a1cbe5":"4iCFd","2346505ad78baa47":"7toKP","565cc7de1c720893":"aihUN","20604925b297b483":"eiv98","b60f28e19ed5645d":"9vwLJ","46a3ac90ead8eb4b":"bdz7j","8f8930169555991d":"lgRyZ","54bfe7ee4aef0962":"eMK2R","773d8be78472f983":"iWpNq","d562071e9c1ece6":"luCbw","b4fcf97888be254":"hKQtK","9935775539310a4":"6SYPa","dfd60661f83422de":"3MGGV","9d0c04b5449c6e78":"lnxwh","720ccb4e93255b25":"7wDBa","6ccaff7eb0bdeb93":"gbgnd","4806d8e218627ab5":"cnBa5","2c4f60e32f378ca9":"7mqtP","865f538633d0b1dc":"7opR3","39be71bc5a9474e0":"13gKK","862f63336e6a3803":"bktdX","64389f8910c4a5b9":"1Tm8P","47d3b6b473ade444":"fts4I","af58e9024f3ec2aa":"e3t7C","d5c714291b3e2173":"cSxo2","d9f14ea8509d3156":"1yrjY","e23e1493d8180c78":"kNpUT","bd8f00b86989f84b":"8L0Vz","f164ec680e944d6d":"elo8X","fc926fb4ed15df4":"lM2EJ","77d47f70247ccaa0":"7SWLw","213ed12e877bdf8":"6S00A","337f47ad9c8e55bb":"cMC1n","dc15afeda3fdbc10":"ae9xI","ffdc7890af793ea9":"kcFGd","dd871b27f50d719f":"jTJ5y","e3ed8d3f9f24501d":"jzlHp","a661ec8bde091a63":"ilJKf","289dada425dcdbf0":"3lRFz","93ca55a06b72c0f4":"kX33I","3343679c8bbbb107":"7t4p5","fb58c487e522e11b":"5jnZ9","d696c059aa7292c1":"hn4i0","4f72da706ff07282":"utbMK","2d95b671d5e6b31d":"j1neg","2f4a2df8e9e6c6c5":"7FI4m","c26a8c456b0bfbbd":"acwwX","3f701d22f6a1ae4f":"jLPNz","19450e227fa8d4e6":"77iT9","1e27e0a9c5922d42":"hBvtv","a084f06dc30f536f":"b7wpZ","2fa52e674a840793":"kliR9","e94ec1065f59594f":"jGyI2","4a3d192459069081":"iLPFz","b65864aa197fa6d0":"6kMrS","c7939ca45e20c9e6":"1uBtN","4e948917a9e514ef":"56e9I","3898a29ba68820":"3cWL3","26317caa31b191b2":"fdBWM","42715847c1bc4744":"jSMtV","421a5f52f1a54bf2":"lJG1O","7b382b2b0bbad026":"b2REB","efcbb5cde267920c":"62Jwp","ecaccd9706afa493":"5Njwn","29dd4c45ad77a411":"fhn9A","9ebc252dff86358a":"S8Aqf","181e6b8ac3026ce3":"dq9eB","f0d63a691568917b":"cuMxG","cb2bff42f9bf1da3":"2lMs1","2008e68ae020640b":"jEmJJ","7703d2aff3ac19f2":"klniU","cc7873bdb72ab106":"fIllx","ddb0c8ec6e1128ec":"3CSdL","f0fdfe553e8b2b8b":"40vvu","83fd77e6e3d1ed4d":"aG0dv","bfdc94773439b970":"424oV","e53408e84c34725c":"4zz6A","dee32d35a055d161":"3AMHU","8eb0fe6d497319ac":"kZurM","2d4bf2da7d0a6ebf":"dQSgK","97707bd921d6bd97":"b6mit","112c0986b11e3773":"hkFXf","3d504689dbdd2069":"ebicy","38539e1f0ba5a0da":"cRV3w","adf6607a48b65015":"fsaK3","6a060de4f8cd5f51":"jermF","a1a4532e178c00e4":"kL4Qa","644f90a72aefea2f":"7yywo","67704ca106e263d":"en6FW","5aa9c5adff06bff6":"ikW1o","d2192ee8df9e83c3":"fj5IU","11023e0d66f4a5c6":"6V6is","a1c31f725c1b9044":"1Qelm","557036c03b3c0cf2":"cep4N","cfcd6ed14b0881ce":"ksCix","c49dc6a73b22dff2":"eNP4x","feb7bc20d8ad2999":"hNejJ","44700e4b32d1904e":"4jXHz","b917fe1860ba64a6":"8Gz7X","19f93dc81edaaaf1":"iiKCK","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"i5xuG":[function(require,module,exports) {
module.exports = require("f474023fc591131").getBundleURL("aiqp3") + "0.48981f22.png" + "?" + Date.now();

},{"f474023fc591131":"dhz1j"}],"dhz1j":[function(require,module,exports) {
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

},{}],"kUVpR":[function(require,module,exports) {
module.exports = require("5e89b7cbe40e8b57").getBundleURL("aiqp3") + "1.f94ee4de.png" + "?" + Date.now();

},{"5e89b7cbe40e8b57":"dhz1j"}],"j4up5":[function(require,module,exports) {
module.exports = require("13ca06ae151c1e77").getBundleURL("aiqp3") + "2.31f5056c.png" + "?" + Date.now();

},{"13ca06ae151c1e77":"dhz1j"}],"6n95R":[function(require,module,exports) {
module.exports = require("63f9844fa2dac9a9").getBundleURL("aiqp3") + "3.ce1b885f.png" + "?" + Date.now();

},{"63f9844fa2dac9a9":"dhz1j"}],"v6QW6":[function(require,module,exports) {
module.exports = require("838b53e284185681").getBundleURL("aiqp3") + "4.6fe91547.png" + "?" + Date.now();

},{"838b53e284185681":"dhz1j"}],"lNJHU":[function(require,module,exports) {
module.exports = require("efeff1bee473c5a7").getBundleURL("aiqp3") + "5.a917cfd3.png" + "?" + Date.now();

},{"efeff1bee473c5a7":"dhz1j"}],"UvVyt":[function(require,module,exports) {
module.exports = require("f31f28a885dfaea6").getBundleURL("aiqp3") + "6.0d46346e.png" + "?" + Date.now();

},{"f31f28a885dfaea6":"dhz1j"}],"JGZG7":[function(require,module,exports) {
module.exports = require("b53fbb14b5cae7ad").getBundleURL("aiqp3") + "7.320708f3.png" + "?" + Date.now();

},{"b53fbb14b5cae7ad":"dhz1j"}],"jbO0w":[function(require,module,exports) {
module.exports = require("88e5e86d2e670457").getBundleURL("aiqp3") + "8.5e948736.png" + "?" + Date.now();

},{"88e5e86d2e670457":"dhz1j"}],"fC0XJ":[function(require,module,exports) {
module.exports = require("92a4ef06e8480538").getBundleURL("aiqp3") + "9.ff59ab43.png" + "?" + Date.now();

},{"92a4ef06e8480538":"dhz1j"}],"dJc1z":[function(require,module,exports) {
module.exports = require("45b33bb724be95").getBundleURL("aiqp3") + "10.31b47b87.png" + "?" + Date.now();

},{"45b33bb724be95":"dhz1j"}],"lBpRB":[function(require,module,exports) {
module.exports = require("9b975adca226d09c").getBundleURL("aiqp3") + "11.cc89efaf.png" + "?" + Date.now();

},{"9b975adca226d09c":"dhz1j"}],"inRs0":[function(require,module,exports) {
module.exports = require("ebd1d59bfd65ef59").getBundleURL("aiqp3") + "12.9cf068b9.png" + "?" + Date.now();

},{"ebd1d59bfd65ef59":"dhz1j"}],"3wtS1":[function(require,module,exports) {
module.exports = require("19d8052ddf1898a0").getBundleURL("aiqp3") + "13.3fd5fa74.png" + "?" + Date.now();

},{"19d8052ddf1898a0":"dhz1j"}],"kqcyH":[function(require,module,exports) {
module.exports = require("99df4c5918a0fac2").getBundleURL("aiqp3") + "14.85f8074c.png" + "?" + Date.now();

},{"99df4c5918a0fac2":"dhz1j"}],"4m6yu":[function(require,module,exports) {
module.exports = require("6ae41b6db2dc5697").getBundleURL("aiqp3") + "15.b3971def.png" + "?" + Date.now();

},{"6ae41b6db2dc5697":"dhz1j"}],"ajtnK":[function(require,module,exports) {
module.exports = require("95ed60a4b37d8d1c").getBundleURL("aiqp3") + "16.e924273a.png" + "?" + Date.now();

},{"95ed60a4b37d8d1c":"dhz1j"}],"17i5t":[function(require,module,exports) {
module.exports = require("d604f71f6496b1b8").getBundleURL("aiqp3") + "0.827cb71f.png" + "?" + Date.now();

},{"d604f71f6496b1b8":"dhz1j"}],"cNzBk":[function(require,module,exports) {
module.exports = require("60f814a524dc4cbb").getBundleURL("aiqp3") + "1.1ba72b2c.png" + "?" + Date.now();

},{"60f814a524dc4cbb":"dhz1j"}],"Nb0pj":[function(require,module,exports) {
module.exports = require("559c5a264825172").getBundleURL("aiqp3") + "2.a537714e.png" + "?" + Date.now();

},{"559c5a264825172":"dhz1j"}],"hmop1":[function(require,module,exports) {
module.exports = require("201b335198409aff").getBundleURL("aiqp3") + "3.968442f0.png" + "?" + Date.now();

},{"201b335198409aff":"dhz1j"}],"dYn3N":[function(require,module,exports) {
module.exports = require("d0766e461ac879b3").getBundleURL("aiqp3") + "4.1087c966.png" + "?" + Date.now();

},{"d0766e461ac879b3":"dhz1j"}],"jlb3E":[function(require,module,exports) {
module.exports = require("6c0b9caef251f363").getBundleURL("aiqp3") + "5.10b3d4d5.png" + "?" + Date.now();

},{"6c0b9caef251f363":"dhz1j"}],"jWByk":[function(require,module,exports) {
module.exports = require("21dba744fb97df80").getBundleURL("aiqp3") + "6.b8b5ea54.png" + "?" + Date.now();

},{"21dba744fb97df80":"dhz1j"}],"7NuKz":[function(require,module,exports) {
module.exports = require("4c7bb6f69c4216f3").getBundleURL("aiqp3") + "7.a88fc70f.png" + "?" + Date.now();

},{"4c7bb6f69c4216f3":"dhz1j"}],"015Se":[function(require,module,exports) {
module.exports = require("a4afb44d9e0aeddb").getBundleURL("aiqp3") + "8.624d70bd.png" + "?" + Date.now();

},{"a4afb44d9e0aeddb":"dhz1j"}],"f1mw3":[function(require,module,exports) {
module.exports = require("6e392492fe309b81").getBundleURL("aiqp3") + "9.85986fa7.png" + "?" + Date.now();

},{"6e392492fe309b81":"dhz1j"}],"jsF9E":[function(require,module,exports) {
module.exports = require("c3aa2051adb378a8").getBundleURL("aiqp3") + "10.5d974f61.png" + "?" + Date.now();

},{"c3aa2051adb378a8":"dhz1j"}],"57YDG":[function(require,module,exports) {
module.exports = require("96ba7135a0c0985c").getBundleURL("aiqp3") + "11.00514082.png" + "?" + Date.now();

},{"96ba7135a0c0985c":"dhz1j"}],"6s0VQ":[function(require,module,exports) {
module.exports = require("16e1c554c296d55a").getBundleURL("aiqp3") + "12.8e43d119.png" + "?" + Date.now();

},{"16e1c554c296d55a":"dhz1j"}],"1WJbr":[function(require,module,exports) {
module.exports = require("b73d1581f8357f70").getBundleURL("aiqp3") + "13.6d974d03.png" + "?" + Date.now();

},{"b73d1581f8357f70":"dhz1j"}],"gf7qe":[function(require,module,exports) {
module.exports = require("f8d4fd7eb6726899").getBundleURL("aiqp3") + "14.c01188a0.png" + "?" + Date.now();

},{"f8d4fd7eb6726899":"dhz1j"}],"7t5yH":[function(require,module,exports) {
module.exports = require("f7fe154c4c8d941c").getBundleURL("aiqp3") + "15.98c7edf9.png" + "?" + Date.now();

},{"f7fe154c4c8d941c":"dhz1j"}],"4s5Xo":[function(require,module,exports) {
module.exports = require("ae56f7d00bb32085").getBundleURL("aiqp3") + "16.46395d71.png" + "?" + Date.now();

},{"ae56f7d00bb32085":"dhz1j"}],"74N0w":[function(require,module,exports) {
module.exports = require("6b2a6b7560b0df44").getBundleURL("aiqp3") + "0.6135d861.png" + "?" + Date.now();

},{"6b2a6b7560b0df44":"dhz1j"}],"bozt4":[function(require,module,exports) {
module.exports = require("400b4fb0a4241eaf").getBundleURL("aiqp3") + "1.ab36ca3c.png" + "?" + Date.now();

},{"400b4fb0a4241eaf":"dhz1j"}],"gNMch":[function(require,module,exports) {
module.exports = require("fa903694497e6217").getBundleURL("aiqp3") + "2.637b0503.png" + "?" + Date.now();

},{"fa903694497e6217":"dhz1j"}],"iY03P":[function(require,module,exports) {
module.exports = require("3a39a699026e2fc0").getBundleURL("aiqp3") + "3.ea6e2859.png" + "?" + Date.now();

},{"3a39a699026e2fc0":"dhz1j"}],"koVNC":[function(require,module,exports) {
module.exports = require("cc403fe3150f4627").getBundleURL("aiqp3") + "4.302416e9.png" + "?" + Date.now();

},{"cc403fe3150f4627":"dhz1j"}],"gMm72":[function(require,module,exports) {
module.exports = require("39b96e09bf6869bf").getBundleURL("aiqp3") + "5.69800b21.png" + "?" + Date.now();

},{"39b96e09bf6869bf":"dhz1j"}],"5bT3S":[function(require,module,exports) {
module.exports = require("c1078f6f9c848e48").getBundleURL("aiqp3") + "6.9611621f.png" + "?" + Date.now();

},{"c1078f6f9c848e48":"dhz1j"}],"5OwgO":[function(require,module,exports) {
module.exports = require("5f6686678650505e").getBundleURL("aiqp3") + "7.387a99b8.png" + "?" + Date.now();

},{"5f6686678650505e":"dhz1j"}],"1pJCw":[function(require,module,exports) {
module.exports = require("36808a58e0995a25").getBundleURL("aiqp3") + "8.868e1eb3.png" + "?" + Date.now();

},{"36808a58e0995a25":"dhz1j"}],"jJdeR":[function(require,module,exports) {
module.exports = require("aec9313eae359168").getBundleURL("aiqp3") + "9.73cbc4df.png" + "?" + Date.now();

},{"aec9313eae359168":"dhz1j"}],"eQTH0":[function(require,module,exports) {
module.exports = require("1c7a56746a92200f").getBundleURL("aiqp3") + "10.5089e6a9.png" + "?" + Date.now();

},{"1c7a56746a92200f":"dhz1j"}],"hSvL8":[function(require,module,exports) {
module.exports = require("173c4b83441d4421").getBundleURL("aiqp3") + "11.f9276e6c.png" + "?" + Date.now();

},{"173c4b83441d4421":"dhz1j"}],"CugHd":[function(require,module,exports) {
module.exports = require("17f81af760f3923a").getBundleURL("aiqp3") + "12.28e07f45.png" + "?" + Date.now();

},{"17f81af760f3923a":"dhz1j"}],"ldqSp":[function(require,module,exports) {
module.exports = require("b22db1beb493b56e").getBundleURL("aiqp3") + "13.3e9a788c.png" + "?" + Date.now();

},{"b22db1beb493b56e":"dhz1j"}],"4jRMW":[function(require,module,exports) {
module.exports = require("8163d3cc262adf10").getBundleURL("aiqp3") + "14.55e925f3.png" + "?" + Date.now();

},{"8163d3cc262adf10":"dhz1j"}],"c11dQ":[function(require,module,exports) {
module.exports = require("a844a8cf84dfe91f").getBundleURL("aiqp3") + "15.45dd04ca.png" + "?" + Date.now();

},{"a844a8cf84dfe91f":"dhz1j"}],"8ZGKL":[function(require,module,exports) {
module.exports = require("f0f0405421b42cc9").getBundleURL("aiqp3") + "16.da3dfac2.png" + "?" + Date.now();

},{"f0f0405421b42cc9":"dhz1j"}],"afxIH":[function(require,module,exports) {
module.exports = require("b3bd2324de4a422d").getBundleURL("aiqp3") + "0.1859081d.png" + "?" + Date.now();

},{"b3bd2324de4a422d":"dhz1j"}],"4tEND":[function(require,module,exports) {
module.exports = require("6f6bfa16bd1d4d0e").getBundleURL("aiqp3") + "1.927d66ed.png" + "?" + Date.now();

},{"6f6bfa16bd1d4d0e":"dhz1j"}],"ayiua":[function(require,module,exports) {
module.exports = require("5854afdf606c4b17").getBundleURL("aiqp3") + "2.363f17fd.png" + "?" + Date.now();

},{"5854afdf606c4b17":"dhz1j"}],"jzu0m":[function(require,module,exports) {
module.exports = require("e63cfdc38276f6f6").getBundleURL("aiqp3") + "0.a7ae4123.png" + "?" + Date.now();

},{"e63cfdc38276f6f6":"dhz1j"}],"kPjMj":[function(require,module,exports) {
module.exports = require("8aab4d23655fb9ef").getBundleURL("aiqp3") + "1.88470ddf.png" + "?" + Date.now();

},{"8aab4d23655fb9ef":"dhz1j"}],"hY4If":[function(require,module,exports) {
module.exports = require("41bbeb58f63f65cc").getBundleURL("aiqp3") + "2.de54b28c.png" + "?" + Date.now();

},{"41bbeb58f63f65cc":"dhz1j"}],"9webe":[function(require,module,exports) {
module.exports = require("bcf77d92bef5e6b5").getBundleURL("aiqp3") + "0.bdeefb48.png" + "?" + Date.now();

},{"bcf77d92bef5e6b5":"dhz1j"}],"9TQEO":[function(require,module,exports) {
module.exports = require("7a438e28d6d9cb4").getBundleURL("aiqp3") + "1.c862755d.png" + "?" + Date.now();

},{"7a438e28d6d9cb4":"dhz1j"}],"jEiWp":[function(require,module,exports) {
module.exports = require("efc9a7a248b6fd4a").getBundleURL("aiqp3") + "2.3a3879c0.png" + "?" + Date.now();

},{"efc9a7a248b6fd4a":"dhz1j"}],"fia3P":[function(require,module,exports) {
module.exports = require("89bd56e17917180e").getBundleURL("aiqp3") + "0.2d5254b4.png" + "?" + Date.now();

},{"89bd56e17917180e":"dhz1j"}],"i5ZLx":[function(require,module,exports) {
module.exports = require("1f6b00fb9df18a6f").getBundleURL("aiqp3") + "1.53be37fa.png" + "?" + Date.now();

},{"1f6b00fb9df18a6f":"dhz1j"}],"l0eJb":[function(require,module,exports) {
module.exports = require("bff5d766a7f7d99f").getBundleURL("aiqp3") + "2.f6226c8b.png" + "?" + Date.now();

},{"bff5d766a7f7d99f":"dhz1j"}],"kmX4t":[function(require,module,exports) {
module.exports = require("f17e39bab9d96d85").getBundleURL("aiqp3") + "3.cbffaa2e.png" + "?" + Date.now();

},{"f17e39bab9d96d85":"dhz1j"}],"2bTZt":[function(require,module,exports) {
module.exports = require("3f3abe0cfac6f9d2").getBundleURL("aiqp3") + "4.13acbc59.png" + "?" + Date.now();

},{"3f3abe0cfac6f9d2":"dhz1j"}],"fWbiW":[function(require,module,exports) {
module.exports = require("72d8d9f917233dd2").getBundleURL("aiqp3") + "5.ef65f0ad.png" + "?" + Date.now();

},{"72d8d9f917233dd2":"dhz1j"}],"hpGAF":[function(require,module,exports) {
module.exports = require("f9f4eb7af32c62ca").getBundleURL("aiqp3") + "6.93bb63df.png" + "?" + Date.now();

},{"f9f4eb7af32c62ca":"dhz1j"}],"baeBJ":[function(require,module,exports) {
module.exports = require("4f29eb73e90c75b0").getBundleURL("aiqp3") + "0.c7b4b27a.png" + "?" + Date.now();

},{"4f29eb73e90c75b0":"dhz1j"}],"g48Al":[function(require,module,exports) {
module.exports = require("f87af57199be0325").getBundleURL("aiqp3") + "1.a62dfbae.png" + "?" + Date.now();

},{"f87af57199be0325":"dhz1j"}],"8g01b":[function(require,module,exports) {
module.exports = require("1ab7e76db992fd5d").getBundleURL("aiqp3") + "2.e3978c80.png" + "?" + Date.now();

},{"1ab7e76db992fd5d":"dhz1j"}],"5e7rf":[function(require,module,exports) {
module.exports = require("b3234dcc61b88cae").getBundleURL("aiqp3") + "3.4641ec5b.png" + "?" + Date.now();

},{"b3234dcc61b88cae":"dhz1j"}],"cZokI":[function(require,module,exports) {
module.exports = require("c6cb2d96cad4dc88").getBundleURL("aiqp3") + "4.46679935.png" + "?" + Date.now();

},{"c6cb2d96cad4dc88":"dhz1j"}],"1wBhL":[function(require,module,exports) {
module.exports = require("fd7e986ab01d0763").getBundleURL("aiqp3") + "5.7cb7235f.png" + "?" + Date.now();

},{"fd7e986ab01d0763":"dhz1j"}],"98zzc":[function(require,module,exports) {
module.exports = require("484dbd6be6616f94").getBundleURL("aiqp3") + "6.25e0793b.png" + "?" + Date.now();

},{"484dbd6be6616f94":"dhz1j"}],"jboif":[function(require,module,exports) {
module.exports = require("3b45279b00b06a05").getBundleURL("aiqp3") + "0.3c81352a.png" + "?" + Date.now();

},{"3b45279b00b06a05":"dhz1j"}],"ax8n4":[function(require,module,exports) {
module.exports = require("bd31202c966b113a").getBundleURL("aiqp3") + "1.5cc77829.png" + "?" + Date.now();

},{"bd31202c966b113a":"dhz1j"}],"iTxBa":[function(require,module,exports) {
module.exports = require("482934b475874bfd").getBundleURL("aiqp3") + "2.8e275dc1.png" + "?" + Date.now();

},{"482934b475874bfd":"dhz1j"}],"2pGRy":[function(require,module,exports) {
module.exports = require("e00f4b654994ca85").getBundleURL("aiqp3") + "3.a9db7ab7.png" + "?" + Date.now();

},{"e00f4b654994ca85":"dhz1j"}],"j7AGD":[function(require,module,exports) {
module.exports = require("477f37e1fcfeec91").getBundleURL("aiqp3") + "4.e32a50ca.png" + "?" + Date.now();

},{"477f37e1fcfeec91":"dhz1j"}],"7upUX":[function(require,module,exports) {
module.exports = require("3a80e01887ffecc3").getBundleURL("aiqp3") + "5.c1536481.png" + "?" + Date.now();

},{"3a80e01887ffecc3":"dhz1j"}],"dPDxf":[function(require,module,exports) {
module.exports = require("c048daaf2666eb4d").getBundleURL("aiqp3") + "6.288f575f.png" + "?" + Date.now();

},{"c048daaf2666eb4d":"dhz1j"}],"5aFLX":[function(require,module,exports) {
module.exports = require("fcf579c3920d0462").getBundleURL("aiqp3") + "0.1fd51615.png" + "?" + Date.now();

},{"fcf579c3920d0462":"dhz1j"}],"74ttx":[function(require,module,exports) {
module.exports = require("bc0ce0eeebecd964").getBundleURL("aiqp3") + "1.e84c2436.png" + "?" + Date.now();

},{"bc0ce0eeebecd964":"dhz1j"}],"jO3cg":[function(require,module,exports) {
module.exports = require("a61f80dfb2047318").getBundleURL("aiqp3") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"a61f80dfb2047318":"dhz1j"}],"kzbKI":[function(require,module,exports) {
module.exports = require("dfd0762d4fc73e6").getBundleURL("aiqp3") + "0.7a68699b.png" + "?" + Date.now();

},{"dfd0762d4fc73e6":"dhz1j"}],"8dtWH":[function(require,module,exports) {
module.exports = require("885606e4f7cd1e11").getBundleURL("aiqp3") + "1.fff421cb.png" + "?" + Date.now();

},{"885606e4f7cd1e11":"dhz1j"}],"4lZwv":[function(require,module,exports) {
module.exports = require("9d4b824d6da5b681").getBundleURL("aiqp3") + "2.2fdbefa7.png" + "?" + Date.now();

},{"9d4b824d6da5b681":"dhz1j"}],"2Anwy":[function(require,module,exports) {
module.exports = require("9c8a1875a3fce424").getBundleURL("aiqp3") + "0.5282a781.png" + "?" + Date.now();

},{"9c8a1875a3fce424":"dhz1j"}],"vpnHr":[function(require,module,exports) {
module.exports = require("2961dea345af09c3").getBundleURL("aiqp3") + "1.6a9b3b01.png" + "?" + Date.now();

},{"2961dea345af09c3":"dhz1j"}],"lDGTD":[function(require,module,exports) {
module.exports = require("78a4e5945153e112").getBundleURL("aiqp3") + "2.6ed29ec3.png" + "?" + Date.now();

},{"78a4e5945153e112":"dhz1j"}],"40qFy":[function(require,module,exports) {
module.exports = require("6eeef2302a675c70").getBundleURL("aiqp3") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"6eeef2302a675c70":"dhz1j"}],"1GAX3":[function(require,module,exports) {
module.exports = require("662cc63405c34808").getBundleURL("aiqp3") + "1.065ffd47.png" + "?" + Date.now();

},{"662cc63405c34808":"dhz1j"}],"7zfOM":[function(require,module,exports) {
module.exports = require("331e2073e9238ff8").getBundleURL("aiqp3") + "2.29f32c63.png" + "?" + Date.now();

},{"331e2073e9238ff8":"dhz1j"}],"f5A3W":[function(require,module,exports) {
module.exports = require("d607f880e6ad1e34").getBundleURL("aiqp3") + "0.c2bc436e.png" + "?" + Date.now();

},{"d607f880e6ad1e34":"dhz1j"}],"53WLa":[function(require,module,exports) {
module.exports = require("5281014cb65e1217").getBundleURL("aiqp3") + "1.e224ca18.png" + "?" + Date.now();

},{"5281014cb65e1217":"dhz1j"}],"4iCFd":[function(require,module,exports) {
module.exports = require("315c27e7427db256").getBundleURL("aiqp3") + "2.20af644b.png" + "?" + Date.now();

},{"315c27e7427db256":"dhz1j"}],"7toKP":[function(require,module,exports) {
module.exports = require("60c8f633e955d6c8").getBundleURL("aiqp3") + "0.740b269f.png" + "?" + Date.now();

},{"60c8f633e955d6c8":"dhz1j"}],"aihUN":[function(require,module,exports) {
module.exports = require("640c8a9bdc53a50b").getBundleURL("aiqp3") + "1.88c581e4.png" + "?" + Date.now();

},{"640c8a9bdc53a50b":"dhz1j"}],"eiv98":[function(require,module,exports) {
module.exports = require("939eb64fb5f12c4").getBundleURL("aiqp3") + "2.e91aa1d2.png" + "?" + Date.now();

},{"939eb64fb5f12c4":"dhz1j"}],"9vwLJ":[function(require,module,exports) {
module.exports = require("bb1d7d42bdf8ffc1").getBundleURL("aiqp3") + "0.1bd287a0.png" + "?" + Date.now();

},{"bb1d7d42bdf8ffc1":"dhz1j"}],"bdz7j":[function(require,module,exports) {
module.exports = require("74cd7a2d279f5978").getBundleURL("aiqp3") + "1.d58a5780.png" + "?" + Date.now();

},{"74cd7a2d279f5978":"dhz1j"}],"lgRyZ":[function(require,module,exports) {
module.exports = require("e219c0168c0b29e").getBundleURL("aiqp3") + "0.d9a399c3.png" + "?" + Date.now();

},{"e219c0168c0b29e":"dhz1j"}],"eMK2R":[function(require,module,exports) {
module.exports = require("63fb34e6fc566ba8").getBundleURL("aiqp3") + "1.062ed605.png" + "?" + Date.now();

},{"63fb34e6fc566ba8":"dhz1j"}],"iWpNq":[function(require,module,exports) {
module.exports = require("b87bb82d908cfa48").getBundleURL("aiqp3") + "0.7a9f2455.png" + "?" + Date.now();

},{"b87bb82d908cfa48":"dhz1j"}],"luCbw":[function(require,module,exports) {
module.exports = require("da8c76b4f198a43e").getBundleURL("aiqp3") + "1.572a6598.png" + "?" + Date.now();

},{"da8c76b4f198a43e":"dhz1j"}],"hKQtK":[function(require,module,exports) {
module.exports = require("22cfd74600a6162f").getBundleURL("aiqp3") + "0.0a92d131.png" + "?" + Date.now();

},{"22cfd74600a6162f":"dhz1j"}],"6SYPa":[function(require,module,exports) {
module.exports = require("dd664446e5e9d9ee").getBundleURL("aiqp3") + "1.d24763ee.png" + "?" + Date.now();

},{"dd664446e5e9d9ee":"dhz1j"}],"3MGGV":[function(require,module,exports) {
module.exports = require("6c09621899eb84c0").getBundleURL("aiqp3") + "2.0e1b919c.png" + "?" + Date.now();

},{"6c09621899eb84c0":"dhz1j"}],"lnxwh":[function(require,module,exports) {
module.exports = require("bea907ea7cff8e1b").getBundleURL("aiqp3") + "0.fda31a8c.png" + "?" + Date.now();

},{"bea907ea7cff8e1b":"dhz1j"}],"7wDBa":[function(require,module,exports) {
module.exports = require("7c5f220b087f6457").getBundleURL("aiqp3") + "1.36e21bb7.png" + "?" + Date.now();

},{"7c5f220b087f6457":"dhz1j"}],"gbgnd":[function(require,module,exports) {
module.exports = require("2f770f06e5a80179").getBundleURL("aiqp3") + "2.845e9168.png" + "?" + Date.now();

},{"2f770f06e5a80179":"dhz1j"}],"cnBa5":[function(require,module,exports) {
module.exports = require("4aeafa5ddd136b59").getBundleURL("aiqp3") + "0.d1a19ca9.png" + "?" + Date.now();

},{"4aeafa5ddd136b59":"dhz1j"}],"7mqtP":[function(require,module,exports) {
module.exports = require("4a2eb81be4b668fb").getBundleURL("aiqp3") + "1.16a743db.png" + "?" + Date.now();

},{"4a2eb81be4b668fb":"dhz1j"}],"7opR3":[function(require,module,exports) {
module.exports = require("a9350bd2ffb658e6").getBundleURL("aiqp3") + "2.3ecdc17d.png" + "?" + Date.now();

},{"a9350bd2ffb658e6":"dhz1j"}],"13gKK":[function(require,module,exports) {
module.exports = require("d59eee7b4912d4b4").getBundleURL("aiqp3") + "0.fd0add9a.png" + "?" + Date.now();

},{"d59eee7b4912d4b4":"dhz1j"}],"bktdX":[function(require,module,exports) {
module.exports = require("2aeecd0ac345f07d").getBundleURL("aiqp3") + "1.2192498e.png" + "?" + Date.now();

},{"2aeecd0ac345f07d":"dhz1j"}],"1Tm8P":[function(require,module,exports) {
module.exports = require("ba95fcfab59b9a9d").getBundleURL("aiqp3") + "2.ab8117eb.png" + "?" + Date.now();

},{"ba95fcfab59b9a9d":"dhz1j"}],"fts4I":[function(require,module,exports) {
module.exports = require("27764e02af426da0").getBundleURL("aiqp3") + "3.1fe13043.png" + "?" + Date.now();

},{"27764e02af426da0":"dhz1j"}],"e3t7C":[function(require,module,exports) {
module.exports = require("fa9a11a51a9c04").getBundleURL("aiqp3") + "0.27a8c375.png" + "?" + Date.now();

},{"fa9a11a51a9c04":"dhz1j"}],"cSxo2":[function(require,module,exports) {
module.exports = require("8ec28d4ca4cf0c85").getBundleURL("aiqp3") + "1.f500f41c.png" + "?" + Date.now();

},{"8ec28d4ca4cf0c85":"dhz1j"}],"1yrjY":[function(require,module,exports) {
module.exports = require("35f403574b840000").getBundleURL("aiqp3") + "2.a8b32497.png" + "?" + Date.now();

},{"35f403574b840000":"dhz1j"}],"kNpUT":[function(require,module,exports) {
module.exports = require("a6e76941c9f0007d").getBundleURL("aiqp3") + "3.6650c9b1.png" + "?" + Date.now();

},{"a6e76941c9f0007d":"dhz1j"}],"8L0Vz":[function(require,module,exports) {
module.exports = require("5c52b8808c41499d").getBundleURL("aiqp3") + "0.3a521425.png" + "?" + Date.now();

},{"5c52b8808c41499d":"dhz1j"}],"elo8X":[function(require,module,exports) {
module.exports = require("9cb78cd495395b12").getBundleURL("aiqp3") + "1.69dd99e1.png" + "?" + Date.now();

},{"9cb78cd495395b12":"dhz1j"}],"lM2EJ":[function(require,module,exports) {
module.exports = require("fb724852098049e7").getBundleURL("aiqp3") + "2.63a32ea2.png" + "?" + Date.now();

},{"fb724852098049e7":"dhz1j"}],"7SWLw":[function(require,module,exports) {
module.exports = require("d1fc32691239b6bc").getBundleURL("aiqp3") + "3.74bfe1cd.png" + "?" + Date.now();

},{"d1fc32691239b6bc":"dhz1j"}],"6S00A":[function(require,module,exports) {
module.exports = require("a54dd8bfc42ea63a").getBundleURL("aiqp3") + "0.5c07456d.png" + "?" + Date.now();

},{"a54dd8bfc42ea63a":"dhz1j"}],"cMC1n":[function(require,module,exports) {
module.exports = require("c51b57eb00b46d2d").getBundleURL("aiqp3") + "1.9e2781aa.png" + "?" + Date.now();

},{"c51b57eb00b46d2d":"dhz1j"}],"ae9xI":[function(require,module,exports) {
module.exports = require("51aea322dd472c40").getBundleURL("aiqp3") + "2.80d8a9dc.png" + "?" + Date.now();

},{"51aea322dd472c40":"dhz1j"}],"kcFGd":[function(require,module,exports) {
module.exports = require("3583b4c896a2f3b9").getBundleURL("aiqp3") + "3.4505c156.png" + "?" + Date.now();

},{"3583b4c896a2f3b9":"dhz1j"}],"jTJ5y":[function(require,module,exports) {
module.exports = require("b3f654c3515241e9").getBundleURL("aiqp3") + "0.a5627eb9.png" + "?" + Date.now();

},{"b3f654c3515241e9":"dhz1j"}],"jzlHp":[function(require,module,exports) {
module.exports = require("d93d6d02e3aa3813").getBundleURL("aiqp3") + "1.29be576d.png" + "?" + Date.now();

},{"d93d6d02e3aa3813":"dhz1j"}],"ilJKf":[function(require,module,exports) {
module.exports = require("9c5d1c92da682b8f").getBundleURL("aiqp3") + "2.2c9d3072.png" + "?" + Date.now();

},{"9c5d1c92da682b8f":"dhz1j"}],"3lRFz":[function(require,module,exports) {
module.exports = require("45007e738b066388").getBundleURL("aiqp3") + "3.b10a87dc.png" + "?" + Date.now();

},{"45007e738b066388":"dhz1j"}],"kX33I":[function(require,module,exports) {
module.exports = require("c747ecf049c90cbd").getBundleURL("aiqp3") + "0.b66475e8.png" + "?" + Date.now();

},{"c747ecf049c90cbd":"dhz1j"}],"7t4p5":[function(require,module,exports) {
module.exports = require("db1b1b6b5775ba94").getBundleURL("aiqp3") + "1.ae4ec885.png" + "?" + Date.now();

},{"db1b1b6b5775ba94":"dhz1j"}],"5jnZ9":[function(require,module,exports) {
module.exports = require("a2eb206a486fc0d").getBundleURL("aiqp3") + "2.89619ac1.png" + "?" + Date.now();

},{"a2eb206a486fc0d":"dhz1j"}],"hn4i0":[function(require,module,exports) {
module.exports = require("b26c9e1e41ca0aa2").getBundleURL("aiqp3") + "3.e861d630.png" + "?" + Date.now();

},{"b26c9e1e41ca0aa2":"dhz1j"}],"utbMK":[function(require,module,exports) {
module.exports = require("1848781b4febd2ab").getBundleURL("aiqp3") + "0.c0daae54.png" + "?" + Date.now();

},{"1848781b4febd2ab":"dhz1j"}],"j1neg":[function(require,module,exports) {
module.exports = require("606b6eb15b57f720").getBundleURL("aiqp3") + "1.81ba4702.png" + "?" + Date.now();

},{"606b6eb15b57f720":"dhz1j"}],"7FI4m":[function(require,module,exports) {
module.exports = require("e165ba0a71ee460a").getBundleURL("aiqp3") + "2.2b44de5f.png" + "?" + Date.now();

},{"e165ba0a71ee460a":"dhz1j"}],"acwwX":[function(require,module,exports) {
module.exports = require("60601d68babe5ac5").getBundleURL("aiqp3") + "3.0a3548da.png" + "?" + Date.now();

},{"60601d68babe5ac5":"dhz1j"}],"jLPNz":[function(require,module,exports) {
module.exports = require("12f062265d304019").getBundleURL("aiqp3") + "4.7dc2c927.png" + "?" + Date.now();

},{"12f062265d304019":"dhz1j"}],"77iT9":[function(require,module,exports) {
module.exports = require("a39f0debd91275f7").getBundleURL("aiqp3") + "5.a3e2eda3.png" + "?" + Date.now();

},{"a39f0debd91275f7":"dhz1j"}],"hBvtv":[function(require,module,exports) {
module.exports = require("cd22ec7c498d1515").getBundleURL("aiqp3") + "6.93d93658.png" + "?" + Date.now();

},{"cd22ec7c498d1515":"dhz1j"}],"b7wpZ":[function(require,module,exports) {
module.exports = require("dd5d8c56d45f5fcd").getBundleURL("aiqp3") + "0.cf371571.png" + "?" + Date.now();

},{"dd5d8c56d45f5fcd":"dhz1j"}],"kliR9":[function(require,module,exports) {
module.exports = require("6ccc90f25f3be06c").getBundleURL("aiqp3") + "1.40091dcf.png" + "?" + Date.now();

},{"6ccc90f25f3be06c":"dhz1j"}],"jGyI2":[function(require,module,exports) {
module.exports = require("6780a28747d07c0d").getBundleURL("aiqp3") + "2.62b42786.png" + "?" + Date.now();

},{"6780a28747d07c0d":"dhz1j"}],"iLPFz":[function(require,module,exports) {
module.exports = require("f10365967204e6be").getBundleURL("aiqp3") + "3.f21956af.png" + "?" + Date.now();

},{"f10365967204e6be":"dhz1j"}],"6kMrS":[function(require,module,exports) {
module.exports = require("fce372e20a314e88").getBundleURL("aiqp3") + "4.0978be17.png" + "?" + Date.now();

},{"fce372e20a314e88":"dhz1j"}],"1uBtN":[function(require,module,exports) {
module.exports = require("3e20eaec2e90429c").getBundleURL("aiqp3") + "5.4ebfd290.png" + "?" + Date.now();

},{"3e20eaec2e90429c":"dhz1j"}],"56e9I":[function(require,module,exports) {
module.exports = require("5bb972263c8f0acc").getBundleURL("aiqp3") + "6.1ace3298.png" + "?" + Date.now();

},{"5bb972263c8f0acc":"dhz1j"}],"3cWL3":[function(require,module,exports) {
module.exports = require("84aa25da8d7ceac2").getBundleURL("aiqp3") + "0.10cb56bf.png" + "?" + Date.now();

},{"84aa25da8d7ceac2":"dhz1j"}],"fdBWM":[function(require,module,exports) {
module.exports = require("ddb42a6f40c642c0").getBundleURL("aiqp3") + "1.0f7c63f1.png" + "?" + Date.now();

},{"ddb42a6f40c642c0":"dhz1j"}],"jSMtV":[function(require,module,exports) {
module.exports = require("8f715eeada8f2b").getBundleURL("aiqp3") + "2.6eebf201.png" + "?" + Date.now();

},{"8f715eeada8f2b":"dhz1j"}],"lJG1O":[function(require,module,exports) {
module.exports = require("c79152bc14ddc625").getBundleURL("aiqp3") + "3.e3e59270.png" + "?" + Date.now();

},{"c79152bc14ddc625":"dhz1j"}],"b2REB":[function(require,module,exports) {
module.exports = require("13dbb918c7a40d0").getBundleURL("aiqp3") + "4.a1a6b94b.png" + "?" + Date.now();

},{"13dbb918c7a40d0":"dhz1j"}],"62Jwp":[function(require,module,exports) {
module.exports = require("3fc30467505e3a40").getBundleURL("aiqp3") + "5.04ee9ca2.png" + "?" + Date.now();

},{"3fc30467505e3a40":"dhz1j"}],"5Njwn":[function(require,module,exports) {
module.exports = require("b7df2a7676a54c4a").getBundleURL("aiqp3") + "6.2aa4cc81.png" + "?" + Date.now();

},{"b7df2a7676a54c4a":"dhz1j"}],"fhn9A":[function(require,module,exports) {
module.exports = require("34f84aa7116b8acc").getBundleURL("aiqp3") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"34f84aa7116b8acc":"dhz1j"}],"S8Aqf":[function(require,module,exports) {
module.exports = require("bcb59ca66790cbc3").getBundleURL("aiqp3") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"bcb59ca66790cbc3":"dhz1j"}],"dq9eB":[function(require,module,exports) {
module.exports = require("8cba4a705763827d").getBundleURL("aiqp3") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"8cba4a705763827d":"dhz1j"}],"cuMxG":[function(require,module,exports) {
module.exports = require("fc25cd933ef43ae8").getBundleURL("aiqp3") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"fc25cd933ef43ae8":"dhz1j"}],"2lMs1":[function(require,module,exports) {
module.exports = require("a172bcff7437468e").getBundleURL("aiqp3") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"a172bcff7437468e":"dhz1j"}],"jEmJJ":[function(require,module,exports) {
module.exports = require("5096fbb5e3979b0d").getBundleURL("aiqp3") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"5096fbb5e3979b0d":"dhz1j"}],"klniU":[function(require,module,exports) {
module.exports = require("151723795acf5ca1").getBundleURL("aiqp3") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"151723795acf5ca1":"dhz1j"}],"fIllx":[function(require,module,exports) {
module.exports = require("7b42713409e53cd0").getBundleURL("aiqp3") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"7b42713409e53cd0":"dhz1j"}],"3CSdL":[function(require,module,exports) {
module.exports = require("cdaac6f94812742e").getBundleURL("aiqp3") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"cdaac6f94812742e":"dhz1j"}],"40vvu":[function(require,module,exports) {
module.exports = require("8244c9f421a9c275").getBundleURL("aiqp3") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"8244c9f421a9c275":"dhz1j"}],"aG0dv":[function(require,module,exports) {
module.exports = require("434ba5c4fcd6c62b").getBundleURL("aiqp3") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"434ba5c4fcd6c62b":"dhz1j"}],"424oV":[function(require,module,exports) {
module.exports = require("a7047147292e3132").getBundleURL("aiqp3") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"a7047147292e3132":"dhz1j"}],"4zz6A":[function(require,module,exports) {
module.exports = require("af7f92c7b37211cc").getBundleURL("aiqp3") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"af7f92c7b37211cc":"dhz1j"}],"3AMHU":[function(require,module,exports) {
module.exports = require("6880a6fb01b0e843").getBundleURL("aiqp3") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"6880a6fb01b0e843":"dhz1j"}],"kZurM":[function(require,module,exports) {
module.exports = require("544eb2963bdc07e").getBundleURL("aiqp3") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"544eb2963bdc07e":"dhz1j"}],"dQSgK":[function(require,module,exports) {
module.exports = require("7d0854c317e379f").getBundleURL("aiqp3") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"7d0854c317e379f":"dhz1j"}],"b6mit":[function(require,module,exports) {
module.exports = require("ae65957f69e79e74").getBundleURL("aiqp3") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"ae65957f69e79e74":"dhz1j"}],"hkFXf":[function(require,module,exports) {
module.exports = require("d6cfb33a7a1abe5e").getBundleURL("aiqp3") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"d6cfb33a7a1abe5e":"dhz1j"}],"ebicy":[function(require,module,exports) {
module.exports = require("6c5bc477b702e957").getBundleURL("aiqp3") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"6c5bc477b702e957":"dhz1j"}],"cRV3w":[function(require,module,exports) {
module.exports = require("269a1e6f8a165ec8").getBundleURL("aiqp3") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"269a1e6f8a165ec8":"dhz1j"}],"fsaK3":[function(require,module,exports) {
module.exports = require("eb76fd3c57142398").getBundleURL("aiqp3") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"eb76fd3c57142398":"dhz1j"}],"jermF":[function(require,module,exports) {
module.exports = require("c8bc50a23b60ae7a").getBundleURL("aiqp3") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"c8bc50a23b60ae7a":"dhz1j"}],"kL4Qa":[function(require,module,exports) {
module.exports = require("bf223ad55e9ae06f").getBundleURL("aiqp3") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"bf223ad55e9ae06f":"dhz1j"}],"7yywo":[function(require,module,exports) {
module.exports = require("6bf6fff3981f383d").getBundleURL("aiqp3") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"6bf6fff3981f383d":"dhz1j"}],"en6FW":[function(require,module,exports) {
module.exports = require("19d7078979ef8514").getBundleURL("aiqp3") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"19d7078979ef8514":"dhz1j"}],"ikW1o":[function(require,module,exports) {
module.exports = require("4f7108d06600f610").getBundleURL("aiqp3") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"4f7108d06600f610":"dhz1j"}],"fj5IU":[function(require,module,exports) {
module.exports = require("41ad0b49c3dae65").getBundleURL("aiqp3") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"41ad0b49c3dae65":"dhz1j"}],"6V6is":[function(require,module,exports) {
module.exports = require("4573f560ef2f36ef").getBundleURL("aiqp3") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"4573f560ef2f36ef":"dhz1j"}],"1Qelm":[function(require,module,exports) {
module.exports = require("1648f93fed8e7b91").getBundleURL("aiqp3") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"1648f93fed8e7b91":"dhz1j"}],"cep4N":[function(require,module,exports) {
module.exports = require("ff1650a5f4ad5df3").getBundleURL("aiqp3") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"ff1650a5f4ad5df3":"dhz1j"}],"ksCix":[function(require,module,exports) {
module.exports = require("7e2df2d717b85239").getBundleURL("aiqp3") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"7e2df2d717b85239":"dhz1j"}],"eNP4x":[function(require,module,exports) {
module.exports = require("fb916d951d54a21d").getBundleURL("aiqp3") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"fb916d951d54a21d":"dhz1j"}],"hNejJ":[function(require,module,exports) {
module.exports = require("ea574c64fc2fe3d7").getBundleURL("aiqp3") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"ea574c64fc2fe3d7":"dhz1j"}],"4jXHz":[function(require,module,exports) {
module.exports = require("123b9a9862051080").getBundleURL("aiqp3") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"123b9a9862051080":"dhz1j"}],"8Gz7X":[function(require,module,exports) {
module.exports = require("d612e25d5cab22ad").getBundleURL("aiqp3") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"d612e25d5cab22ad":"dhz1j"}],"iiKCK":[function(require,module,exports) {
module.exports = require("95fdb56e01d46217").getBundleURL("aiqp3") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"95fdb56e01d46217":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["guI63","8GOHn"], "8GOHn", "parcelRequire3c64")

//# sourceMappingURL=011detalle-alcobasa.3146b2fd.js.map
