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
})({"2iri2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "480906fc44a0dd7c";
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

},{}],"eCq0d":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores nofatima_1 admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "fatima", ciudadT = "F\xe1tima";
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
window.siguiente_horizontal_fatima = cargar_fatima_h;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_fatima();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    var t = Math.random() * 2000 + 3000;
    var inc = Math.floor(Math.random() * 3 + 1);
    cargar_fatima_h(inc, 1);
    setTimeout(CambiarAutomaticamente, t);
}
function cargar_fatima_h(incremento, parametro) {
    var w = img.clientWidth, h = img.clientHeight;
    var listado, comentario, c, tiempo;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_1.fatima_1;
    listado = (0, _listadosJs.l).fotos.fatima_png_300_1;
    if (w > 600) {
        listado = (0, _listadosJs.l).fotos.fatima_png_600_1;
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).fotos.fatima_png_900_1;
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
  cargar_fatima_h(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_fatima_h(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_1.fatima_1; 
  listado=   l.fotos.fatima_png_300_1;  
  if (w >  600) { listado=  l.fotos.fatima_png_100_1;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.fatima_png_900_1;  c= " grande " ; }
  
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

},{"86781a753eb4dbf":"e46Oh","89ea5d03c92266e0":"98jE5","4b3eab43661026ee":"bov3x","1b58bb2c4e8118db":"2x4Le","a73d7c9e4390513b":"40DXx","18f01d5dbbda959":"jeHA7","5b20b0e56b82945a":"11m6c","c5cb6c0359b0662d":"8ujwo","a63b65706a9c9fe5":"lY28Z","e748f6caa373ab73":"f2xh5","dfdedac191fae4f0":"9qjDL","f6f096fdb88eaef6":"38LqU","9280d8a758940830":"9cgCu","282ccbf2baeec961":"ifFFI","d39f9622f5686817":"6g4Ih","483f2d56ab4cdedd":"5noDO","da461ea778990854":"bhPFk","96f651fb571aa9eb":"h01am","e543a391b0f85f4f":"cylpx","a8cf664de7077859":"cHUHZ","598ca8ca53d8a49b":"fDV8C","3c3b7f9d3e56e115":"iQrNK","954440e7a3d1f441":"gvys5","b4cb97e52f2cbd52":"9NE18","7b09e4309565582d":"4u3ga","e6ea0af4531463e2":"bx0Dj","42085257a46e5e09":"9kw4O","6b3ddeea96e7d95a":"kVTsL","afe3ae5977faa1f8":"dG6I6","9446df6f7494726d":"b7f6F","62a84e90f44c3be3":"8CBAQ","a531b65afc6a06b0":"iC3dW","323e4a910dee7e0a":"3Jt3C","5adaf0b1f2da779b":"9F2eC","18015bf652a8590c":"cjh8U","839e19b40af20bc9":"elJdZ","a51b127073443e8b":"hR8c1","334a20b09cebc20f":"k5p5P","d3c31bcf734c4b17":"cOo7g","91fb4da4c9f50617":"2OaGo","7951652e2eeb278f":"kqjTU","9d81a0598f30e880":"e8M7B","f7184a54f57fe61e":"gnSjE","aa4e305c904a8bdc":"5qeqv","e3c230bc4328e939":"i3kgk","91da9c9beb8cec92":"bq3or","6788e9eb952c5639":"grdmF","3e1f56c3a8f09a92":"i4ur6","ba8d1fe6ef07e224":"3RMe6","e7ed43fffc09e558":"cAUSI","eb7f4bebc9ae34f3":"h0qLB","f49bbc3ce90230f3":"ksLiL","c6cc8feb00c43ccc":"39YZy","da3e98b22adbeb4d":"dXfld","ac988f97513b753d":"8392U","9870197f68f46ce0":"8BFtg","1909d7c96cdc25f":"7YoPz","71900ce38a39f45e":"5ZyH2","d10c891d581aa72e":"1mG66","4e86e364e53b9592":"hX53K","da9d375ff4cc6e20":"cpQli","4dc71cac2c1091fe":"31nZ8","2ae7e13dc9f19b08":"3tmJI","d4a94a2ec96f0f2a":"lkNvL","4d0999fb1640b484":"cLcXl","7eb1276e543406ee":"lnwL0","a1c7d50e344e35d":"j2lPL","d8d3e9b2c45514ef":"CgsID","73770b04ebc58a8f":"22qEb","3e326606efe38636":"7D05h","6911c8c8c7ec7f4b":"5LaEr","8bfeb5a28916238c":"5VEjA","f9da5f86d76bdb5b":"7uJjb","ab0ad55909afb45d":"d2MjO","12b4ab72d67dbba1":"9vDTl","3fdef08c5feabc1f":"j7nLI","97900455fc019c34":"3c6QL","b1db13bef3dedd4":"af62y","8c3d146eaaa021db":"k3E7D","8188eea6f1104e67":"3XYqO","ddf969591a3cfbba":"90nqv","f51181bb6365decf":"9pFLG","cd282a7a417c03b7":"avYJq","32d9f1c4543900f0":"hqMdG","e759ed436cf99224":"579tk","dfb837cbc24b9472":"f6QTC","e112f5b01b10cbb3":"8W09Y","1166f1f821e20afd":"dSFc6","201fc2d2fa0f7eac":"kseUA","11280debdefd0431":"7z01q","cdfa70ae1d308d00":"kv4q1","f34fe41922b2586d":"44mtq","8fe9ec68514a39e3":"5vUJE","deb2151dfbb509cd":"1Wc4o","10cc9bcddfb0a9e3":"79K5x","8766a5d2d9a1cbe5":"jgXzw","2346505ad78baa47":"h8yVB","565cc7de1c720893":"eeCZR","20604925b297b483":"cN9lf","b60f28e19ed5645d":"7EMIb","46a3ac90ead8eb4b":"jwz0H","8f8930169555991d":"50UrD","54bfe7ee4aef0962":"7P5To","773d8be78472f983":"jHFFv","d562071e9c1ece6":"9jIJb","b4fcf97888be254":"5tzVv","9935775539310a4":"lO5bp","dfd60661f83422de":"79j7F","9d0c04b5449c6e78":"49Vsr","720ccb4e93255b25":"6gfui","6ccaff7eb0bdeb93":"13Blj","4806d8e218627ab5":"2UFxU","2c4f60e32f378ca9":"2OaYN","865f538633d0b1dc":"gHf1f","39be71bc5a9474e0":"gHb5x","862f63336e6a3803":"cy0ZE","64389f8910c4a5b9":"5jTw9","47d3b6b473ade444":"2T0Oy","af58e9024f3ec2aa":"1SOjF","d5c714291b3e2173":"W9unf","d9f14ea8509d3156":"c2qWP","e23e1493d8180c78":"1uiIV","bd8f00b86989f84b":"6LJ1E","f164ec680e944d6d":"2x5og","fc926fb4ed15df4":"f3a3o","77d47f70247ccaa0":"asSB1","213ed12e877bdf8":"lmgVh","337f47ad9c8e55bb":"hmr5r","dc15afeda3fdbc10":"27FIk","ffdc7890af793ea9":"4wkJR","dd871b27f50d719f":"lJjmw","e3ed8d3f9f24501d":"9Cxyk","a661ec8bde091a63":"3s1b9","289dada425dcdbf0":"bQWsZ","93ca55a06b72c0f4":"gpawz","3343679c8bbbb107":"12KOi","fb58c487e522e11b":"3AMMx","d696c059aa7292c1":"iXSOY","4f72da706ff07282":"ekhzD","2d95b671d5e6b31d":"bCUuA","2f4a2df8e9e6c6c5":"ckIWR","c26a8c456b0bfbbd":"9JLY1","3f701d22f6a1ae4f":"8C1Dn","19450e227fa8d4e6":"7pWKn","1e27e0a9c5922d42":"9itEj","a084f06dc30f536f":"a3vj5","2fa52e674a840793":"29uxk","e94ec1065f59594f":"jeacw","4a3d192459069081":"88q92","b65864aa197fa6d0":"jZYhU","c7939ca45e20c9e6":"hR3IA","4e948917a9e514ef":"l2kU0","3898a29ba68820":"gFiV1","26317caa31b191b2":"5U9Mp","42715847c1bc4744":"3f29P","421a5f52f1a54bf2":"32b5R","7b382b2b0bbad026":"67QtQ","efcbb5cde267920c":"inF8P","ecaccd9706afa493":"evMr3","29dd4c45ad77a411":"jimD3","9ebc252dff86358a":"24cZw","181e6b8ac3026ce3":"2bZlU","f0d63a691568917b":"7lOCs","cb2bff42f9bf1da3":"gnE8n","2008e68ae020640b":"aTPSC","7703d2aff3ac19f2":"bALUU","cc7873bdb72ab106":"flvU6","ddb0c8ec6e1128ec":"6EKJz","f0fdfe553e8b2b8b":"cuSaC","83fd77e6e3d1ed4d":"1IhuY","bfdc94773439b970":"dGzrx","e53408e84c34725c":"1tXjS","dee32d35a055d161":"4vE2Z","8eb0fe6d497319ac":"eJYdG","2d4bf2da7d0a6ebf":"iVD9P","97707bd921d6bd97":"le71d","112c0986b11e3773":"jFDnM","3d504689dbdd2069":"kADqt","38539e1f0ba5a0da":"8M4yA","adf6607a48b65015":"ctyyb","6a060de4f8cd5f51":"hobiy","a1a4532e178c00e4":"airr7","644f90a72aefea2f":"ldSDm","67704ca106e263d":"bH9Cs","5aa9c5adff06bff6":"2s9D5","d2192ee8df9e83c3":"gFnHi","11023e0d66f4a5c6":"flQxc","a1c31f725c1b9044":"jj6Kg","557036c03b3c0cf2":"bQ7YX","cfcd6ed14b0881ce":"d4vQ3","c49dc6a73b22dff2":"baVHB","feb7bc20d8ad2999":"fWpOf","44700e4b32d1904e":"iAuGT","b917fe1860ba64a6":"lxzsg","19f93dc81edaaaf1":"1cieC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"e46Oh":[function(require,module,exports) {
module.exports = require("9a4b553ad16dd7b5").getBundleURL("6brp6") + "0.48981f22.png" + "?" + Date.now();

},{"9a4b553ad16dd7b5":"dhz1j"}],"dhz1j":[function(require,module,exports) {
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

},{}],"98jE5":[function(require,module,exports) {
module.exports = require("253fcc250128a415").getBundleURL("6brp6") + "1.f94ee4de.png" + "?" + Date.now();

},{"253fcc250128a415":"dhz1j"}],"bov3x":[function(require,module,exports) {
module.exports = require("574ca7333ac3eb85").getBundleURL("6brp6") + "2.31f5056c.png" + "?" + Date.now();

},{"574ca7333ac3eb85":"dhz1j"}],"2x4Le":[function(require,module,exports) {
module.exports = require("fd33d927ebc1f65a").getBundleURL("6brp6") + "3.ce1b885f.png" + "?" + Date.now();

},{"fd33d927ebc1f65a":"dhz1j"}],"40DXx":[function(require,module,exports) {
module.exports = require("bde536fd1cfc6ef3").getBundleURL("6brp6") + "4.6fe91547.png" + "?" + Date.now();

},{"bde536fd1cfc6ef3":"dhz1j"}],"jeHA7":[function(require,module,exports) {
module.exports = require("686434d7583e78f").getBundleURL("6brp6") + "5.a917cfd3.png" + "?" + Date.now();

},{"686434d7583e78f":"dhz1j"}],"11m6c":[function(require,module,exports) {
module.exports = require("4db6f74599595c90").getBundleURL("6brp6") + "6.0d46346e.png" + "?" + Date.now();

},{"4db6f74599595c90":"dhz1j"}],"8ujwo":[function(require,module,exports) {
module.exports = require("685dedb5446f5cd8").getBundleURL("6brp6") + "7.320708f3.png" + "?" + Date.now();

},{"685dedb5446f5cd8":"dhz1j"}],"lY28Z":[function(require,module,exports) {
module.exports = require("36f040f1c73d4bb0").getBundleURL("6brp6") + "8.5e948736.png" + "?" + Date.now();

},{"36f040f1c73d4bb0":"dhz1j"}],"f2xh5":[function(require,module,exports) {
module.exports = require("c8d606600cef8c21").getBundleURL("6brp6") + "9.ff59ab43.png" + "?" + Date.now();

},{"c8d606600cef8c21":"dhz1j"}],"9qjDL":[function(require,module,exports) {
module.exports = require("31f24a78a32ece0a").getBundleURL("6brp6") + "10.31b47b87.png" + "?" + Date.now();

},{"31f24a78a32ece0a":"dhz1j"}],"38LqU":[function(require,module,exports) {
module.exports = require("614dcd5baa7cd45").getBundleURL("6brp6") + "11.cc89efaf.png" + "?" + Date.now();

},{"614dcd5baa7cd45":"dhz1j"}],"9cgCu":[function(require,module,exports) {
module.exports = require("666957dbeaf31eba").getBundleURL("6brp6") + "12.9cf068b9.png" + "?" + Date.now();

},{"666957dbeaf31eba":"dhz1j"}],"ifFFI":[function(require,module,exports) {
module.exports = require("285ded73a245b481").getBundleURL("6brp6") + "13.3fd5fa74.png" + "?" + Date.now();

},{"285ded73a245b481":"dhz1j"}],"6g4Ih":[function(require,module,exports) {
module.exports = require("2278a7d04d408584").getBundleURL("6brp6") + "14.85f8074c.png" + "?" + Date.now();

},{"2278a7d04d408584":"dhz1j"}],"5noDO":[function(require,module,exports) {
module.exports = require("67af56c27455f28e").getBundleURL("6brp6") + "15.b3971def.png" + "?" + Date.now();

},{"67af56c27455f28e":"dhz1j"}],"bhPFk":[function(require,module,exports) {
module.exports = require("a9de10a3445642c4").getBundleURL("6brp6") + "16.e924273a.png" + "?" + Date.now();

},{"a9de10a3445642c4":"dhz1j"}],"h01am":[function(require,module,exports) {
module.exports = require("56a67a41cc729402").getBundleURL("6brp6") + "0.827cb71f.png" + "?" + Date.now();

},{"56a67a41cc729402":"dhz1j"}],"cylpx":[function(require,module,exports) {
module.exports = require("ad63a687a1f4a081").getBundleURL("6brp6") + "1.1ba72b2c.png" + "?" + Date.now();

},{"ad63a687a1f4a081":"dhz1j"}],"cHUHZ":[function(require,module,exports) {
module.exports = require("3fa0fc4a1ae828b9").getBundleURL("6brp6") + "2.a537714e.png" + "?" + Date.now();

},{"3fa0fc4a1ae828b9":"dhz1j"}],"fDV8C":[function(require,module,exports) {
module.exports = require("c01e1c9fb57b3bba").getBundleURL("6brp6") + "3.968442f0.png" + "?" + Date.now();

},{"c01e1c9fb57b3bba":"dhz1j"}],"iQrNK":[function(require,module,exports) {
module.exports = require("65ffec9fb9d48d3c").getBundleURL("6brp6") + "4.1087c966.png" + "?" + Date.now();

},{"65ffec9fb9d48d3c":"dhz1j"}],"gvys5":[function(require,module,exports) {
module.exports = require("228e1ad49ec0bd07").getBundleURL("6brp6") + "5.10b3d4d5.png" + "?" + Date.now();

},{"228e1ad49ec0bd07":"dhz1j"}],"9NE18":[function(require,module,exports) {
module.exports = require("d63aa120d5f60e51").getBundleURL("6brp6") + "6.b8b5ea54.png" + "?" + Date.now();

},{"d63aa120d5f60e51":"dhz1j"}],"4u3ga":[function(require,module,exports) {
module.exports = require("4f94acf7c77f2676").getBundleURL("6brp6") + "7.a88fc70f.png" + "?" + Date.now();

},{"4f94acf7c77f2676":"dhz1j"}],"bx0Dj":[function(require,module,exports) {
module.exports = require("4a0d34a7ba1ef2fc").getBundleURL("6brp6") + "8.624d70bd.png" + "?" + Date.now();

},{"4a0d34a7ba1ef2fc":"dhz1j"}],"9kw4O":[function(require,module,exports) {
module.exports = require("23408afcaf2fddc5").getBundleURL("6brp6") + "9.85986fa7.png" + "?" + Date.now();

},{"23408afcaf2fddc5":"dhz1j"}],"kVTsL":[function(require,module,exports) {
module.exports = require("fd4638a8ab1058c1").getBundleURL("6brp6") + "10.5d974f61.png" + "?" + Date.now();

},{"fd4638a8ab1058c1":"dhz1j"}],"dG6I6":[function(require,module,exports) {
module.exports = require("836ddc6b274ee68b").getBundleURL("6brp6") + "11.00514082.png" + "?" + Date.now();

},{"836ddc6b274ee68b":"dhz1j"}],"b7f6F":[function(require,module,exports) {
module.exports = require("491b075b1771bd7b").getBundleURL("6brp6") + "12.8e43d119.png" + "?" + Date.now();

},{"491b075b1771bd7b":"dhz1j"}],"8CBAQ":[function(require,module,exports) {
module.exports = require("7f4e1ad5a1516bd7").getBundleURL("6brp6") + "13.6d974d03.png" + "?" + Date.now();

},{"7f4e1ad5a1516bd7":"dhz1j"}],"iC3dW":[function(require,module,exports) {
module.exports = require("ac8dac5078af5b6f").getBundleURL("6brp6") + "14.c01188a0.png" + "?" + Date.now();

},{"ac8dac5078af5b6f":"dhz1j"}],"3Jt3C":[function(require,module,exports) {
module.exports = require("ac0bef062420c5a3").getBundleURL("6brp6") + "15.98c7edf9.png" + "?" + Date.now();

},{"ac0bef062420c5a3":"dhz1j"}],"9F2eC":[function(require,module,exports) {
module.exports = require("b219166c477ab68c").getBundleURL("6brp6") + "16.46395d71.png" + "?" + Date.now();

},{"b219166c477ab68c":"dhz1j"}],"cjh8U":[function(require,module,exports) {
module.exports = require("1d798f5e58bcb26a").getBundleURL("6brp6") + "0.6135d861.png" + "?" + Date.now();

},{"1d798f5e58bcb26a":"dhz1j"}],"elJdZ":[function(require,module,exports) {
module.exports = require("213502b787983404").getBundleURL("6brp6") + "1.ab36ca3c.png" + "?" + Date.now();

},{"213502b787983404":"dhz1j"}],"hR8c1":[function(require,module,exports) {
module.exports = require("64285bc501e800ee").getBundleURL("6brp6") + "2.637b0503.png" + "?" + Date.now();

},{"64285bc501e800ee":"dhz1j"}],"k5p5P":[function(require,module,exports) {
module.exports = require("8baf5af139a5f1fa").getBundleURL("6brp6") + "3.ea6e2859.png" + "?" + Date.now();

},{"8baf5af139a5f1fa":"dhz1j"}],"cOo7g":[function(require,module,exports) {
module.exports = require("eb880c8a16a2a9fd").getBundleURL("6brp6") + "4.302416e9.png" + "?" + Date.now();

},{"eb880c8a16a2a9fd":"dhz1j"}],"2OaGo":[function(require,module,exports) {
module.exports = require("ed591c46bd8a79e1").getBundleURL("6brp6") + "5.69800b21.png" + "?" + Date.now();

},{"ed591c46bd8a79e1":"dhz1j"}],"kqjTU":[function(require,module,exports) {
module.exports = require("c8ed9dde8ccf9293").getBundleURL("6brp6") + "6.9611621f.png" + "?" + Date.now();

},{"c8ed9dde8ccf9293":"dhz1j"}],"e8M7B":[function(require,module,exports) {
module.exports = require("f9e7e23edca22869").getBundleURL("6brp6") + "7.387a99b8.png" + "?" + Date.now();

},{"f9e7e23edca22869":"dhz1j"}],"gnSjE":[function(require,module,exports) {
module.exports = require("2c860fb3dec6b0a3").getBundleURL("6brp6") + "8.868e1eb3.png" + "?" + Date.now();

},{"2c860fb3dec6b0a3":"dhz1j"}],"5qeqv":[function(require,module,exports) {
module.exports = require("9042ec0c8a9d8fa6").getBundleURL("6brp6") + "9.73cbc4df.png" + "?" + Date.now();

},{"9042ec0c8a9d8fa6":"dhz1j"}],"i3kgk":[function(require,module,exports) {
module.exports = require("33f2b399e2d6702e").getBundleURL("6brp6") + "10.5089e6a9.png" + "?" + Date.now();

},{"33f2b399e2d6702e":"dhz1j"}],"bq3or":[function(require,module,exports) {
module.exports = require("c7a9300b5688c12e").getBundleURL("6brp6") + "11.f9276e6c.png" + "?" + Date.now();

},{"c7a9300b5688c12e":"dhz1j"}],"grdmF":[function(require,module,exports) {
module.exports = require("b2d662242a666a2e").getBundleURL("6brp6") + "12.28e07f45.png" + "?" + Date.now();

},{"b2d662242a666a2e":"dhz1j"}],"i4ur6":[function(require,module,exports) {
module.exports = require("6da490c9ea29a8b6").getBundleURL("6brp6") + "13.3e9a788c.png" + "?" + Date.now();

},{"6da490c9ea29a8b6":"dhz1j"}],"3RMe6":[function(require,module,exports) {
module.exports = require("82f9029d06e73903").getBundleURL("6brp6") + "14.55e925f3.png" + "?" + Date.now();

},{"82f9029d06e73903":"dhz1j"}],"cAUSI":[function(require,module,exports) {
module.exports = require("6e39a9c112a1106f").getBundleURL("6brp6") + "15.45dd04ca.png" + "?" + Date.now();

},{"6e39a9c112a1106f":"dhz1j"}],"h0qLB":[function(require,module,exports) {
module.exports = require("b07154448b321045").getBundleURL("6brp6") + "16.da3dfac2.png" + "?" + Date.now();

},{"b07154448b321045":"dhz1j"}],"ksLiL":[function(require,module,exports) {
module.exports = require("17babb7778be368b").getBundleURL("6brp6") + "0.1859081d.png" + "?" + Date.now();

},{"17babb7778be368b":"dhz1j"}],"39YZy":[function(require,module,exports) {
module.exports = require("de546b3d357a22d").getBundleURL("6brp6") + "1.927d66ed.png" + "?" + Date.now();

},{"de546b3d357a22d":"dhz1j"}],"dXfld":[function(require,module,exports) {
module.exports = require("c22c8b4ce89f040f").getBundleURL("6brp6") + "2.363f17fd.png" + "?" + Date.now();

},{"c22c8b4ce89f040f":"dhz1j"}],"8392U":[function(require,module,exports) {
module.exports = require("7c0370f735e499d9").getBundleURL("6brp6") + "0.a7ae4123.png" + "?" + Date.now();

},{"7c0370f735e499d9":"dhz1j"}],"8BFtg":[function(require,module,exports) {
module.exports = require("3da1e72230586277").getBundleURL("6brp6") + "1.88470ddf.png" + "?" + Date.now();

},{"3da1e72230586277":"dhz1j"}],"7YoPz":[function(require,module,exports) {
module.exports = require("c55a62befb43021a").getBundleURL("6brp6") + "2.de54b28c.png" + "?" + Date.now();

},{"c55a62befb43021a":"dhz1j"}],"5ZyH2":[function(require,module,exports) {
module.exports = require("338ff1111de285eb").getBundleURL("6brp6") + "0.bdeefb48.png" + "?" + Date.now();

},{"338ff1111de285eb":"dhz1j"}],"1mG66":[function(require,module,exports) {
module.exports = require("4280d7e84dbd2fe5").getBundleURL("6brp6") + "1.c862755d.png" + "?" + Date.now();

},{"4280d7e84dbd2fe5":"dhz1j"}],"hX53K":[function(require,module,exports) {
module.exports = require("ebad1ca58e9a7b7a").getBundleURL("6brp6") + "2.3a3879c0.png" + "?" + Date.now();

},{"ebad1ca58e9a7b7a":"dhz1j"}],"cpQli":[function(require,module,exports) {
module.exports = require("73c0a053e7841a31").getBundleURL("6brp6") + "0.2d5254b4.png" + "?" + Date.now();

},{"73c0a053e7841a31":"dhz1j"}],"31nZ8":[function(require,module,exports) {
module.exports = require("8ced4829888203df").getBundleURL("6brp6") + "1.53be37fa.png" + "?" + Date.now();

},{"8ced4829888203df":"dhz1j"}],"3tmJI":[function(require,module,exports) {
module.exports = require("49a9a504e7a34e38").getBundleURL("6brp6") + "2.f6226c8b.png" + "?" + Date.now();

},{"49a9a504e7a34e38":"dhz1j"}],"lkNvL":[function(require,module,exports) {
module.exports = require("e3a526af09c3ef51").getBundleURL("6brp6") + "3.cbffaa2e.png" + "?" + Date.now();

},{"e3a526af09c3ef51":"dhz1j"}],"cLcXl":[function(require,module,exports) {
module.exports = require("63805ac3767357a1").getBundleURL("6brp6") + "4.13acbc59.png" + "?" + Date.now();

},{"63805ac3767357a1":"dhz1j"}],"lnwL0":[function(require,module,exports) {
module.exports = require("b5681d75f5c79907").getBundleURL("6brp6") + "5.ef65f0ad.png" + "?" + Date.now();

},{"b5681d75f5c79907":"dhz1j"}],"j2lPL":[function(require,module,exports) {
module.exports = require("14957108f427568d").getBundleURL("6brp6") + "6.93bb63df.png" + "?" + Date.now();

},{"14957108f427568d":"dhz1j"}],"CgsID":[function(require,module,exports) {
module.exports = require("e5f94e6ec0389988").getBundleURL("6brp6") + "0.c7b4b27a.png" + "?" + Date.now();

},{"e5f94e6ec0389988":"dhz1j"}],"22qEb":[function(require,module,exports) {
module.exports = require("f1d0dab597086651").getBundleURL("6brp6") + "1.a62dfbae.png" + "?" + Date.now();

},{"f1d0dab597086651":"dhz1j"}],"7D05h":[function(require,module,exports) {
module.exports = require("3f7bd00c135d4cfa").getBundleURL("6brp6") + "2.e3978c80.png" + "?" + Date.now();

},{"3f7bd00c135d4cfa":"dhz1j"}],"5LaEr":[function(require,module,exports) {
module.exports = require("baaa8f672cd53255").getBundleURL("6brp6") + "3.4641ec5b.png" + "?" + Date.now();

},{"baaa8f672cd53255":"dhz1j"}],"5VEjA":[function(require,module,exports) {
module.exports = require("a57494880bd2653e").getBundleURL("6brp6") + "4.46679935.png" + "?" + Date.now();

},{"a57494880bd2653e":"dhz1j"}],"7uJjb":[function(require,module,exports) {
module.exports = require("1391391d6a9659de").getBundleURL("6brp6") + "5.7cb7235f.png" + "?" + Date.now();

},{"1391391d6a9659de":"dhz1j"}],"d2MjO":[function(require,module,exports) {
module.exports = require("bbe256e3bff88eda").getBundleURL("6brp6") + "6.25e0793b.png" + "?" + Date.now();

},{"bbe256e3bff88eda":"dhz1j"}],"9vDTl":[function(require,module,exports) {
module.exports = require("7611e6f53345e412").getBundleURL("6brp6") + "0.3c81352a.png" + "?" + Date.now();

},{"7611e6f53345e412":"dhz1j"}],"j7nLI":[function(require,module,exports) {
module.exports = require("b4b5ebd984b961d0").getBundleURL("6brp6") + "1.5cc77829.png" + "?" + Date.now();

},{"b4b5ebd984b961d0":"dhz1j"}],"3c6QL":[function(require,module,exports) {
module.exports = require("a7f76ba3cc34f535").getBundleURL("6brp6") + "2.8e275dc1.png" + "?" + Date.now();

},{"a7f76ba3cc34f535":"dhz1j"}],"af62y":[function(require,module,exports) {
module.exports = require("2b5a5723c0a4089a").getBundleURL("6brp6") + "3.a9db7ab7.png" + "?" + Date.now();

},{"2b5a5723c0a4089a":"dhz1j"}],"k3E7D":[function(require,module,exports) {
module.exports = require("90519a6a3e9a7770").getBundleURL("6brp6") + "4.e32a50ca.png" + "?" + Date.now();

},{"90519a6a3e9a7770":"dhz1j"}],"3XYqO":[function(require,module,exports) {
module.exports = require("26677ceece21a881").getBundleURL("6brp6") + "5.c1536481.png" + "?" + Date.now();

},{"26677ceece21a881":"dhz1j"}],"90nqv":[function(require,module,exports) {
module.exports = require("be61b3056b273467").getBundleURL("6brp6") + "6.288f575f.png" + "?" + Date.now();

},{"be61b3056b273467":"dhz1j"}],"9pFLG":[function(require,module,exports) {
module.exports = require("c817d74b78dc18fa").getBundleURL("6brp6") + "0.1fd51615.png" + "?" + Date.now();

},{"c817d74b78dc18fa":"dhz1j"}],"avYJq":[function(require,module,exports) {
module.exports = require("f02455961dcfde2").getBundleURL("6brp6") + "1.e84c2436.png" + "?" + Date.now();

},{"f02455961dcfde2":"dhz1j"}],"hqMdG":[function(require,module,exports) {
module.exports = require("dc5c04bf070bb7e6").getBundleURL("6brp6") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"dc5c04bf070bb7e6":"dhz1j"}],"579tk":[function(require,module,exports) {
module.exports = require("cacaf2fdec2c88bb").getBundleURL("6brp6") + "0.7a68699b.png" + "?" + Date.now();

},{"cacaf2fdec2c88bb":"dhz1j"}],"f6QTC":[function(require,module,exports) {
module.exports = require("ac9ee7272914c93c").getBundleURL("6brp6") + "1.fff421cb.png" + "?" + Date.now();

},{"ac9ee7272914c93c":"dhz1j"}],"8W09Y":[function(require,module,exports) {
module.exports = require("f571ba1a192ac550").getBundleURL("6brp6") + "2.2fdbefa7.png" + "?" + Date.now();

},{"f571ba1a192ac550":"dhz1j"}],"dSFc6":[function(require,module,exports) {
module.exports = require("13495a09b5ddf0e5").getBundleURL("6brp6") + "0.5282a781.png" + "?" + Date.now();

},{"13495a09b5ddf0e5":"dhz1j"}],"kseUA":[function(require,module,exports) {
module.exports = require("13b46939cecff1aa").getBundleURL("6brp6") + "1.6a9b3b01.png" + "?" + Date.now();

},{"13b46939cecff1aa":"dhz1j"}],"7z01q":[function(require,module,exports) {
module.exports = require("d842346b559e0329").getBundleURL("6brp6") + "2.6ed29ec3.png" + "?" + Date.now();

},{"d842346b559e0329":"dhz1j"}],"kv4q1":[function(require,module,exports) {
module.exports = require("fd1164612e42eb89").getBundleURL("6brp6") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"fd1164612e42eb89":"dhz1j"}],"44mtq":[function(require,module,exports) {
module.exports = require("35c4b414e35dbfeb").getBundleURL("6brp6") + "1.065ffd47.png" + "?" + Date.now();

},{"35c4b414e35dbfeb":"dhz1j"}],"5vUJE":[function(require,module,exports) {
module.exports = require("2567dc26ba3b1f00").getBundleURL("6brp6") + "2.29f32c63.png" + "?" + Date.now();

},{"2567dc26ba3b1f00":"dhz1j"}],"1Wc4o":[function(require,module,exports) {
module.exports = require("f80d520dd71ba95a").getBundleURL("6brp6") + "0.c2bc436e.png" + "?" + Date.now();

},{"f80d520dd71ba95a":"dhz1j"}],"79K5x":[function(require,module,exports) {
module.exports = require("a391177ae1f1432e").getBundleURL("6brp6") + "1.e224ca18.png" + "?" + Date.now();

},{"a391177ae1f1432e":"dhz1j"}],"jgXzw":[function(require,module,exports) {
module.exports = require("1113ef0abb7b946d").getBundleURL("6brp6") + "2.20af644b.png" + "?" + Date.now();

},{"1113ef0abb7b946d":"dhz1j"}],"h8yVB":[function(require,module,exports) {
module.exports = require("fd5005f0ca8126fd").getBundleURL("6brp6") + "0.740b269f.png" + "?" + Date.now();

},{"fd5005f0ca8126fd":"dhz1j"}],"eeCZR":[function(require,module,exports) {
module.exports = require("9b46e41113eb16d").getBundleURL("6brp6") + "1.88c581e4.png" + "?" + Date.now();

},{"9b46e41113eb16d":"dhz1j"}],"cN9lf":[function(require,module,exports) {
module.exports = require("4a320b0309884976").getBundleURL("6brp6") + "2.e91aa1d2.png" + "?" + Date.now();

},{"4a320b0309884976":"dhz1j"}],"7EMIb":[function(require,module,exports) {
module.exports = require("c5077ca5b7f553e6").getBundleURL("6brp6") + "0.1bd287a0.png" + "?" + Date.now();

},{"c5077ca5b7f553e6":"dhz1j"}],"jwz0H":[function(require,module,exports) {
module.exports = require("e4b5e75f8510c574").getBundleURL("6brp6") + "1.d58a5780.png" + "?" + Date.now();

},{"e4b5e75f8510c574":"dhz1j"}],"50UrD":[function(require,module,exports) {
module.exports = require("78680a30424eddc5").getBundleURL("6brp6") + "0.d9a399c3.png" + "?" + Date.now();

},{"78680a30424eddc5":"dhz1j"}],"7P5To":[function(require,module,exports) {
module.exports = require("454077de6e2d29fc").getBundleURL("6brp6") + "1.062ed605.png" + "?" + Date.now();

},{"454077de6e2d29fc":"dhz1j"}],"jHFFv":[function(require,module,exports) {
module.exports = require("749a8c255ffc1364").getBundleURL("6brp6") + "0.7a9f2455.png" + "?" + Date.now();

},{"749a8c255ffc1364":"dhz1j"}],"9jIJb":[function(require,module,exports) {
module.exports = require("e0817917aff3f5f2").getBundleURL("6brp6") + "1.572a6598.png" + "?" + Date.now();

},{"e0817917aff3f5f2":"dhz1j"}],"5tzVv":[function(require,module,exports) {
module.exports = require("5fe8d1bec21e0e20").getBundleURL("6brp6") + "0.0a92d131.png" + "?" + Date.now();

},{"5fe8d1bec21e0e20":"dhz1j"}],"lO5bp":[function(require,module,exports) {
module.exports = require("4815d47d8266d430").getBundleURL("6brp6") + "1.d24763ee.png" + "?" + Date.now();

},{"4815d47d8266d430":"dhz1j"}],"79j7F":[function(require,module,exports) {
module.exports = require("1daccf62175f7b4f").getBundleURL("6brp6") + "2.0e1b919c.png" + "?" + Date.now();

},{"1daccf62175f7b4f":"dhz1j"}],"49Vsr":[function(require,module,exports) {
module.exports = require("161373704c61570e").getBundleURL("6brp6") + "0.fda31a8c.png" + "?" + Date.now();

},{"161373704c61570e":"dhz1j"}],"6gfui":[function(require,module,exports) {
module.exports = require("b172d706bebac618").getBundleURL("6brp6") + "1.36e21bb7.png" + "?" + Date.now();

},{"b172d706bebac618":"dhz1j"}],"13Blj":[function(require,module,exports) {
module.exports = require("16b3b08341406b5e").getBundleURL("6brp6") + "2.845e9168.png" + "?" + Date.now();

},{"16b3b08341406b5e":"dhz1j"}],"2UFxU":[function(require,module,exports) {
module.exports = require("ac4b2345bb7a2529").getBundleURL("6brp6") + "0.d1a19ca9.png" + "?" + Date.now();

},{"ac4b2345bb7a2529":"dhz1j"}],"2OaYN":[function(require,module,exports) {
module.exports = require("ad277709237ecc58").getBundleURL("6brp6") + "1.16a743db.png" + "?" + Date.now();

},{"ad277709237ecc58":"dhz1j"}],"gHf1f":[function(require,module,exports) {
module.exports = require("4a0bd8447ca9873e").getBundleURL("6brp6") + "2.3ecdc17d.png" + "?" + Date.now();

},{"4a0bd8447ca9873e":"dhz1j"}],"gHb5x":[function(require,module,exports) {
module.exports = require("e26bd6fbacb11c86").getBundleURL("6brp6") + "0.fd0add9a.png" + "?" + Date.now();

},{"e26bd6fbacb11c86":"dhz1j"}],"cy0ZE":[function(require,module,exports) {
module.exports = require("7aad030f07e5c").getBundleURL("6brp6") + "1.2192498e.png" + "?" + Date.now();

},{"7aad030f07e5c":"dhz1j"}],"5jTw9":[function(require,module,exports) {
module.exports = require("be0bac03621e7d54").getBundleURL("6brp6") + "2.ab8117eb.png" + "?" + Date.now();

},{"be0bac03621e7d54":"dhz1j"}],"2T0Oy":[function(require,module,exports) {
module.exports = require("14ba40d4532af430").getBundleURL("6brp6") + "3.1fe13043.png" + "?" + Date.now();

},{"14ba40d4532af430":"dhz1j"}],"1SOjF":[function(require,module,exports) {
module.exports = require("dfa361f5124c04ac").getBundleURL("6brp6") + "0.27a8c375.png" + "?" + Date.now();

},{"dfa361f5124c04ac":"dhz1j"}],"W9unf":[function(require,module,exports) {
module.exports = require("44eca2ecd701fdbc").getBundleURL("6brp6") + "1.f500f41c.png" + "?" + Date.now();

},{"44eca2ecd701fdbc":"dhz1j"}],"c2qWP":[function(require,module,exports) {
module.exports = require("6a792587211bad8").getBundleURL("6brp6") + "2.a8b32497.png" + "?" + Date.now();

},{"6a792587211bad8":"dhz1j"}],"1uiIV":[function(require,module,exports) {
module.exports = require("e76f7cf6bc38abf0").getBundleURL("6brp6") + "3.6650c9b1.png" + "?" + Date.now();

},{"e76f7cf6bc38abf0":"dhz1j"}],"6LJ1E":[function(require,module,exports) {
module.exports = require("a4dba0b0f2b95258").getBundleURL("6brp6") + "0.3a521425.png" + "?" + Date.now();

},{"a4dba0b0f2b95258":"dhz1j"}],"2x5og":[function(require,module,exports) {
module.exports = require("2fe20bf1e9ca2af3").getBundleURL("6brp6") + "1.69dd99e1.png" + "?" + Date.now();

},{"2fe20bf1e9ca2af3":"dhz1j"}],"f3a3o":[function(require,module,exports) {
module.exports = require("9cdffc3709b4d427").getBundleURL("6brp6") + "2.63a32ea2.png" + "?" + Date.now();

},{"9cdffc3709b4d427":"dhz1j"}],"asSB1":[function(require,module,exports) {
module.exports = require("f7377baebff6a4a7").getBundleURL("6brp6") + "3.74bfe1cd.png" + "?" + Date.now();

},{"f7377baebff6a4a7":"dhz1j"}],"lmgVh":[function(require,module,exports) {
module.exports = require("70ad799b9dd79c43").getBundleURL("6brp6") + "0.5c07456d.png" + "?" + Date.now();

},{"70ad799b9dd79c43":"dhz1j"}],"hmr5r":[function(require,module,exports) {
module.exports = require("4476797c5ec4ad0b").getBundleURL("6brp6") + "1.9e2781aa.png" + "?" + Date.now();

},{"4476797c5ec4ad0b":"dhz1j"}],"27FIk":[function(require,module,exports) {
module.exports = require("86ec52a063d98943").getBundleURL("6brp6") + "2.80d8a9dc.png" + "?" + Date.now();

},{"86ec52a063d98943":"dhz1j"}],"4wkJR":[function(require,module,exports) {
module.exports = require("b08af3727dd49163").getBundleURL("6brp6") + "3.4505c156.png" + "?" + Date.now();

},{"b08af3727dd49163":"dhz1j"}],"lJjmw":[function(require,module,exports) {
module.exports = require("259021440ced897c").getBundleURL("6brp6") + "0.a5627eb9.png" + "?" + Date.now();

},{"259021440ced897c":"dhz1j"}],"9Cxyk":[function(require,module,exports) {
module.exports = require("23bcc30fd7d28231").getBundleURL("6brp6") + "1.29be576d.png" + "?" + Date.now();

},{"23bcc30fd7d28231":"dhz1j"}],"3s1b9":[function(require,module,exports) {
module.exports = require("b5a9b36d412eb5f1").getBundleURL("6brp6") + "2.2c9d3072.png" + "?" + Date.now();

},{"b5a9b36d412eb5f1":"dhz1j"}],"bQWsZ":[function(require,module,exports) {
module.exports = require("1fbc787ab7186811").getBundleURL("6brp6") + "3.b10a87dc.png" + "?" + Date.now();

},{"1fbc787ab7186811":"dhz1j"}],"gpawz":[function(require,module,exports) {
module.exports = require("51b03c619dd99cda").getBundleURL("6brp6") + "0.b66475e8.png" + "?" + Date.now();

},{"51b03c619dd99cda":"dhz1j"}],"12KOi":[function(require,module,exports) {
module.exports = require("8e7362b76e238d58").getBundleURL("6brp6") + "1.ae4ec885.png" + "?" + Date.now();

},{"8e7362b76e238d58":"dhz1j"}],"3AMMx":[function(require,module,exports) {
module.exports = require("3a79d9c9d985a08b").getBundleURL("6brp6") + "2.89619ac1.png" + "?" + Date.now();

},{"3a79d9c9d985a08b":"dhz1j"}],"iXSOY":[function(require,module,exports) {
module.exports = require("8882c8488c54a873").getBundleURL("6brp6") + "3.e861d630.png" + "?" + Date.now();

},{"8882c8488c54a873":"dhz1j"}],"ekhzD":[function(require,module,exports) {
module.exports = require("954857e2b042d030").getBundleURL("6brp6") + "0.c0daae54.png" + "?" + Date.now();

},{"954857e2b042d030":"dhz1j"}],"bCUuA":[function(require,module,exports) {
module.exports = require("d0c890fb710a9414").getBundleURL("6brp6") + "1.81ba4702.png" + "?" + Date.now();

},{"d0c890fb710a9414":"dhz1j"}],"ckIWR":[function(require,module,exports) {
module.exports = require("deccc96977a87ce4").getBundleURL("6brp6") + "2.2b44de5f.png" + "?" + Date.now();

},{"deccc96977a87ce4":"dhz1j"}],"9JLY1":[function(require,module,exports) {
module.exports = require("aad7e515ab4c909a").getBundleURL("6brp6") + "3.0a3548da.png" + "?" + Date.now();

},{"aad7e515ab4c909a":"dhz1j"}],"8C1Dn":[function(require,module,exports) {
module.exports = require("37d7b4d5a6e19cc3").getBundleURL("6brp6") + "4.7dc2c927.png" + "?" + Date.now();

},{"37d7b4d5a6e19cc3":"dhz1j"}],"7pWKn":[function(require,module,exports) {
module.exports = require("4ed46177630399cc").getBundleURL("6brp6") + "5.a3e2eda3.png" + "?" + Date.now();

},{"4ed46177630399cc":"dhz1j"}],"9itEj":[function(require,module,exports) {
module.exports = require("e30cd2421d7890b1").getBundleURL("6brp6") + "6.93d93658.png" + "?" + Date.now();

},{"e30cd2421d7890b1":"dhz1j"}],"a3vj5":[function(require,module,exports) {
module.exports = require("f57b407bb87edc34").getBundleURL("6brp6") + "0.cf371571.png" + "?" + Date.now();

},{"f57b407bb87edc34":"dhz1j"}],"29uxk":[function(require,module,exports) {
module.exports = require("e885f0dbfb1a702d").getBundleURL("6brp6") + "1.40091dcf.png" + "?" + Date.now();

},{"e885f0dbfb1a702d":"dhz1j"}],"jeacw":[function(require,module,exports) {
module.exports = require("553d9a1a09414898").getBundleURL("6brp6") + "2.62b42786.png" + "?" + Date.now();

},{"553d9a1a09414898":"dhz1j"}],"88q92":[function(require,module,exports) {
module.exports = require("8ed7d2b0006d09e5").getBundleURL("6brp6") + "3.f21956af.png" + "?" + Date.now();

},{"8ed7d2b0006d09e5":"dhz1j"}],"jZYhU":[function(require,module,exports) {
module.exports = require("a2c1fb5e744fa57e").getBundleURL("6brp6") + "4.0978be17.png" + "?" + Date.now();

},{"a2c1fb5e744fa57e":"dhz1j"}],"hR3IA":[function(require,module,exports) {
module.exports = require("87fec8cd8d5f2856").getBundleURL("6brp6") + "5.4ebfd290.png" + "?" + Date.now();

},{"87fec8cd8d5f2856":"dhz1j"}],"l2kU0":[function(require,module,exports) {
module.exports = require("22eec5609e14abc8").getBundleURL("6brp6") + "6.1ace3298.png" + "?" + Date.now();

},{"22eec5609e14abc8":"dhz1j"}],"gFiV1":[function(require,module,exports) {
module.exports = require("531b2662e0d06392").getBundleURL("6brp6") + "0.10cb56bf.png" + "?" + Date.now();

},{"531b2662e0d06392":"dhz1j"}],"5U9Mp":[function(require,module,exports) {
module.exports = require("1cfb7081986c277a").getBundleURL("6brp6") + "1.0f7c63f1.png" + "?" + Date.now();

},{"1cfb7081986c277a":"dhz1j"}],"3f29P":[function(require,module,exports) {
module.exports = require("72d79f02cbce3f7d").getBundleURL("6brp6") + "2.6eebf201.png" + "?" + Date.now();

},{"72d79f02cbce3f7d":"dhz1j"}],"32b5R":[function(require,module,exports) {
module.exports = require("cc20fc6ae5cc5a9b").getBundleURL("6brp6") + "3.e3e59270.png" + "?" + Date.now();

},{"cc20fc6ae5cc5a9b":"dhz1j"}],"67QtQ":[function(require,module,exports) {
module.exports = require("a9a2e651a0fc2d7c").getBundleURL("6brp6") + "4.a1a6b94b.png" + "?" + Date.now();

},{"a9a2e651a0fc2d7c":"dhz1j"}],"inF8P":[function(require,module,exports) {
module.exports = require("3fabf2644cdea1aa").getBundleURL("6brp6") + "5.04ee9ca2.png" + "?" + Date.now();

},{"3fabf2644cdea1aa":"dhz1j"}],"evMr3":[function(require,module,exports) {
module.exports = require("4c86b2228c56b684").getBundleURL("6brp6") + "6.2aa4cc81.png" + "?" + Date.now();

},{"4c86b2228c56b684":"dhz1j"}],"jimD3":[function(require,module,exports) {
module.exports = require("a549dbebeba1f2ec").getBundleURL("6brp6") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"a549dbebeba1f2ec":"dhz1j"}],"24cZw":[function(require,module,exports) {
module.exports = require("b49f71ee4e8313e3").getBundleURL("6brp6") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"b49f71ee4e8313e3":"dhz1j"}],"2bZlU":[function(require,module,exports) {
module.exports = require("71a119ffc7865835").getBundleURL("6brp6") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"71a119ffc7865835":"dhz1j"}],"7lOCs":[function(require,module,exports) {
module.exports = require("f365c497a4715f42").getBundleURL("6brp6") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"f365c497a4715f42":"dhz1j"}],"gnE8n":[function(require,module,exports) {
module.exports = require("b7070ef53a267205").getBundleURL("6brp6") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"b7070ef53a267205":"dhz1j"}],"aTPSC":[function(require,module,exports) {
module.exports = require("9b9f3bf54ac5775c").getBundleURL("6brp6") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"9b9f3bf54ac5775c":"dhz1j"}],"bALUU":[function(require,module,exports) {
module.exports = require("a934db6a4b798cd1").getBundleURL("6brp6") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"a934db6a4b798cd1":"dhz1j"}],"flvU6":[function(require,module,exports) {
module.exports = require("62f757320c1f691b").getBundleURL("6brp6") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"62f757320c1f691b":"dhz1j"}],"6EKJz":[function(require,module,exports) {
module.exports = require("2dcf15df0305870d").getBundleURL("6brp6") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"2dcf15df0305870d":"dhz1j"}],"cuSaC":[function(require,module,exports) {
module.exports = require("cba56ab8bcedb9b8").getBundleURL("6brp6") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"cba56ab8bcedb9b8":"dhz1j"}],"1IhuY":[function(require,module,exports) {
module.exports = require("1537584a175a323f").getBundleURL("6brp6") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"1537584a175a323f":"dhz1j"}],"dGzrx":[function(require,module,exports) {
module.exports = require("2eb6b835b39f2030").getBundleURL("6brp6") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"2eb6b835b39f2030":"dhz1j"}],"1tXjS":[function(require,module,exports) {
module.exports = require("dc3a25cd25520a54").getBundleURL("6brp6") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"dc3a25cd25520a54":"dhz1j"}],"4vE2Z":[function(require,module,exports) {
module.exports = require("ba42116e874215f0").getBundleURL("6brp6") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"ba42116e874215f0":"dhz1j"}],"eJYdG":[function(require,module,exports) {
module.exports = require("c5b9374ea9f9f118").getBundleURL("6brp6") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"c5b9374ea9f9f118":"dhz1j"}],"iVD9P":[function(require,module,exports) {
module.exports = require("7f0f04135dbe6e2f").getBundleURL("6brp6") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"7f0f04135dbe6e2f":"dhz1j"}],"le71d":[function(require,module,exports) {
module.exports = require("bf84e75c4eef117f").getBundleURL("6brp6") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"bf84e75c4eef117f":"dhz1j"}],"jFDnM":[function(require,module,exports) {
module.exports = require("228b324e27f2cf05").getBundleURL("6brp6") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"228b324e27f2cf05":"dhz1j"}],"kADqt":[function(require,module,exports) {
module.exports = require("3bff924948e36ed5").getBundleURL("6brp6") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"3bff924948e36ed5":"dhz1j"}],"8M4yA":[function(require,module,exports) {
module.exports = require("d9e5b8b96bbefd7b").getBundleURL("6brp6") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"d9e5b8b96bbefd7b":"dhz1j"}],"ctyyb":[function(require,module,exports) {
module.exports = require("54c80b88794a8245").getBundleURL("6brp6") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"54c80b88794a8245":"dhz1j"}],"hobiy":[function(require,module,exports) {
module.exports = require("9452ab8c907a434a").getBundleURL("6brp6") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"9452ab8c907a434a":"dhz1j"}],"airr7":[function(require,module,exports) {
module.exports = require("4c4e4c360fe1ab7b").getBundleURL("6brp6") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"4c4e4c360fe1ab7b":"dhz1j"}],"ldSDm":[function(require,module,exports) {
module.exports = require("4ae0ae196b039b39").getBundleURL("6brp6") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"4ae0ae196b039b39":"dhz1j"}],"bH9Cs":[function(require,module,exports) {
module.exports = require("9665337e4fe14b0d").getBundleURL("6brp6") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"9665337e4fe14b0d":"dhz1j"}],"2s9D5":[function(require,module,exports) {
module.exports = require("35bceb70bb0e15c8").getBundleURL("6brp6") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"35bceb70bb0e15c8":"dhz1j"}],"gFnHi":[function(require,module,exports) {
module.exports = require("46257a8547c56313").getBundleURL("6brp6") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"46257a8547c56313":"dhz1j"}],"flQxc":[function(require,module,exports) {
module.exports = require("24aa7c23476da5c8").getBundleURL("6brp6") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"24aa7c23476da5c8":"dhz1j"}],"jj6Kg":[function(require,module,exports) {
module.exports = require("9c8a9b574af9888a").getBundleURL("6brp6") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"9c8a9b574af9888a":"dhz1j"}],"bQ7YX":[function(require,module,exports) {
module.exports = require("71725dec00ad4a58").getBundleURL("6brp6") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"71725dec00ad4a58":"dhz1j"}],"d4vQ3":[function(require,module,exports) {
module.exports = require("8a85f326fe05e174").getBundleURL("6brp6") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"8a85f326fe05e174":"dhz1j"}],"baVHB":[function(require,module,exports) {
module.exports = require("6279ea753bbdf67c").getBundleURL("6brp6") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"6279ea753bbdf67c":"dhz1j"}],"fWpOf":[function(require,module,exports) {
module.exports = require("d88a9bfeb8056414").getBundleURL("6brp6") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"d88a9bfeb8056414":"dhz1j"}],"iAuGT":[function(require,module,exports) {
module.exports = require("a1c3ed6e8f02dce6").getBundleURL("6brp6") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"a1c3ed6e8f02dce6":"dhz1j"}],"lxzsg":[function(require,module,exports) {
module.exports = require("424a3e9d722c70f0").getBundleURL("6brp6") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"424a3e9d722c70f0":"dhz1j"}],"1cieC":[function(require,module,exports) {
module.exports = require("81f671697abebf5").getBundleURL("6brp6") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"81f671697abebf5":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["2iri2","eCq0d"], "eCq0d", "parcelRequire3c64")

//# sourceMappingURL=012detalle-fatima.44a0dd7c.js.map
