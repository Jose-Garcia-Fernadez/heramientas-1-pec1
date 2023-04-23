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
})({"iYQy2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "558ed9a744ab99fb";
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

},{}],"dfWJz":[function(require,module,exports) {
// Internet Explorer 10 y versiones anteriores noobidos_1 admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
var _listadosJs = require("/src/12-js/listados.js");
var _debugJs = require("/src/12-js/debug.js");
// Variables globales de este fichero
var ciudad = "obidos", ciudadT = "\xd3bidos";
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
window.siguiente_horizontal_obidos = cargar_obidos_h;
div.addEventListener("dblclick", ()=>{
    pantallaCompleta_obidos();
});
// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();
// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() {
    var t = Math.random() * 2000 + 3000;
    var inc = Math.floor(Math.random() * 3 + 1);
    cargar_obidos_h(inc, 1);
    setTimeout(CambiarAutomaticamente, t);
}
function cargar_obidos_h(incremento, parametro) {
    var w = img.clientWidth, h = img.clientHeight;
    var listado, comentario, c, tiempo;
    c = " peque\xf1o ";
    comentario = (0, _listadosJs.l).comentario_1.obidos_1;
    listado = (0, _listadosJs.l).fotos.obidos_png_300_1;
    if (w > 600) {
        listado = (0, _listadosJs.l).fotos.obidos_png_600_1;
        c = " mediana ";
    }
    if (w > 1000) {
        listado = (0, _listadosJs.l).fotos.obidos_png_900_1;
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
function pantallaCompleta_obidos() {
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
  cargar_obidos_h(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_obidos_h(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_1.obidos_1; 
  listado=   l.fotos.obidos_png_300_1;  
  if (w >  600) { listado=  l.fotos.obidos_png_100_1;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.obidos_png_900_1;  c= " grande " ; }
  
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

},{"86781a753eb4dbf":"bZ6ip","89ea5d03c92266e0":"47TDf","4b3eab43661026ee":"iRNcH","1b58bb2c4e8118db":"5dBiW","a73d7c9e4390513b":"20BS5","18f01d5dbbda959":"3Sd5a","5b20b0e56b82945a":"5OUlu","c5cb6c0359b0662d":"cHZmy","a63b65706a9c9fe5":"8alIB","e748f6caa373ab73":"jnAoU","dfdedac191fae4f0":"4tXBH","f6f096fdb88eaef6":"7BeHc","9280d8a758940830":"ismEV","282ccbf2baeec961":"1FnKf","d39f9622f5686817":"iqBzQ","483f2d56ab4cdedd":"ep8Jj","da461ea778990854":"6kF9o","96f651fb571aa9eb":"4XoJC","e543a391b0f85f4f":"iLEJw","a8cf664de7077859":"4aDqe","598ca8ca53d8a49b":"7S2yz","3c3b7f9d3e56e115":"9AwCi","954440e7a3d1f441":"alUar","b4cb97e52f2cbd52":"db6Gt","7b09e4309565582d":"a1tGY","e6ea0af4531463e2":"7LgPX","42085257a46e5e09":"iMtD9","6b3ddeea96e7d95a":"ejif9","afe3ae5977faa1f8":"gwnOP","9446df6f7494726d":"1qIwi","62a84e90f44c3be3":"43dbn","a531b65afc6a06b0":"2t1A7","323e4a910dee7e0a":"9VkHL","5adaf0b1f2da779b":"c428L","18015bf652a8590c":"6KV16","839e19b40af20bc9":"2s8uN","a51b127073443e8b":"5H9Bl","334a20b09cebc20f":"jLbK6","d3c31bcf734c4b17":"03iHy","91fb4da4c9f50617":"3nr0Y","7951652e2eeb278f":"lcm4z","9d81a0598f30e880":"h0lQE","f7184a54f57fe61e":"b0Dcb","aa4e305c904a8bdc":"l9pNm","e3c230bc4328e939":"f2kin","91da9c9beb8cec92":"2oRG9","6788e9eb952c5639":"OKrgo","3e1f56c3a8f09a92":"7gy1L","ba8d1fe6ef07e224":"kbYgU","e7ed43fffc09e558":"6z3Xy","eb7f4bebc9ae34f3":"hY1XH","f49bbc3ce90230f3":"hMpNq","c6cc8feb00c43ccc":"d1pHa","da3e98b22adbeb4d":"lUqLR","ac988f97513b753d":"3KGxM","9870197f68f46ce0":"eH6at","1909d7c96cdc25f":"Q0YH4","71900ce38a39f45e":"aOu40","d10c891d581aa72e":"4id28","4e86e364e53b9592":"ckeHj","da9d375ff4cc6e20":"lu67Q","4dc71cac2c1091fe":"8q7Ms","2ae7e13dc9f19b08":"4TTUF","d4a94a2ec96f0f2a":"3qXGE","4d0999fb1640b484":"dhc74","7eb1276e543406ee":"7wdqH","a1c7d50e344e35d":"eXj6S","d8d3e9b2c45514ef":"3gZ5V","73770b04ebc58a8f":"aECXk","3e326606efe38636":"5A80d","6911c8c8c7ec7f4b":"g80Yk","8bfeb5a28916238c":"2qoyU","f9da5f86d76bdb5b":"4c1Ka","ab0ad55909afb45d":"lv1i1","12b4ab72d67dbba1":"g2D99","3fdef08c5feabc1f":"bKrRO","97900455fc019c34":"aPAxx","b1db13bef3dedd4":"42OuZ","8c3d146eaaa021db":"6ZHMt","8188eea6f1104e67":"b9SPo","ddf969591a3cfbba":"grdhe","f51181bb6365decf":"8mOfu","cd282a7a417c03b7":"hPymP","32d9f1c4543900f0":"1Na2r","e759ed436cf99224":"6u0Bp","dfb837cbc24b9472":"fPlQ5","e112f5b01b10cbb3":"fKpiJ","1166f1f821e20afd":"3veXQ","201fc2d2fa0f7eac":"61V47","11280debdefd0431":"8np7d","cdfa70ae1d308d00":"eaHFI","f34fe41922b2586d":"aLTC9","8fe9ec68514a39e3":"d1Q2D","deb2151dfbb509cd":"gFGza","10cc9bcddfb0a9e3":"apmk0","8766a5d2d9a1cbe5":"7Dv3V","2346505ad78baa47":"bMe30","565cc7de1c720893":"23TSf","20604925b297b483":"66Xi3","b60f28e19ed5645d":"1uhZo","46a3ac90ead8eb4b":"ivwEH","8f8930169555991d":"3b3mn","54bfe7ee4aef0962":"9TBmB","773d8be78472f983":"4ZNgF","d562071e9c1ece6":"evAel","b4fcf97888be254":"cFQVW","9935775539310a4":"2yntB","dfd60661f83422de":"gLiDM","9d0c04b5449c6e78":"gjN8B","720ccb4e93255b25":"baPnH","6ccaff7eb0bdeb93":"gQA62","4806d8e218627ab5":"7QxTs","2c4f60e32f378ca9":"5NOzH","865f538633d0b1dc":"7GfRO","39be71bc5a9474e0":"feghH","862f63336e6a3803":"4eRls","64389f8910c4a5b9":"5RLZV","47d3b6b473ade444":"adCLw","af58e9024f3ec2aa":"er9dq","d5c714291b3e2173":"eoReL","d9f14ea8509d3156":"jnC87","e23e1493d8180c78":"2JyJj","bd8f00b86989f84b":"8Z9wf","f164ec680e944d6d":"2glrC","fc926fb4ed15df4":"bze9a","77d47f70247ccaa0":"8pIJu","213ed12e877bdf8":"lWBMf","337f47ad9c8e55bb":"2FDbE","dc15afeda3fdbc10":"bKTJs","ffdc7890af793ea9":"gUkwG","dd871b27f50d719f":"73xYM","e3ed8d3f9f24501d":"6cvea","a661ec8bde091a63":"i2llY","289dada425dcdbf0":"3K3xf","93ca55a06b72c0f4":"bi5jX","3343679c8bbbb107":"hhgKn","fb58c487e522e11b":"6WJpx","d696c059aa7292c1":"fhkGp","4f72da706ff07282":"2rGx9","2d95b671d5e6b31d":"lV6aO","2f4a2df8e9e6c6c5":"5y5GB","c26a8c456b0bfbbd":"a2yFw","3f701d22f6a1ae4f":"cEGJz","19450e227fa8d4e6":"gm1Bt","1e27e0a9c5922d42":"1AP2y","a084f06dc30f536f":"jXXj5","2fa52e674a840793":"26U1w","e94ec1065f59594f":"5Zw5E","4a3d192459069081":"2PpKM","b65864aa197fa6d0":"5VMnC","c7939ca45e20c9e6":"5d8Xm","4e948917a9e514ef":"3pYTG","3898a29ba68820":"cmsux","26317caa31b191b2":"jleBP","42715847c1bc4744":"g6lr5","421a5f52f1a54bf2":"dcG2p","7b382b2b0bbad026":"jtt5n","efcbb5cde267920c":"6jqRk","ecaccd9706afa493":"6TUB5","29dd4c45ad77a411":"6D9nM","9ebc252dff86358a":"64lwP","181e6b8ac3026ce3":"avJsH","f0d63a691568917b":"1JJJp","cb2bff42f9bf1da3":"3Z2UQ","2008e68ae020640b":"duMg4","7703d2aff3ac19f2":"jGAPy","cc7873bdb72ab106":"ebEpJ","ddb0c8ec6e1128ec":"gr4rX","f0fdfe553e8b2b8b":"cTpIw","83fd77e6e3d1ed4d":"j88XX","bfdc94773439b970":"3udrM","e53408e84c34725c":"l6gw1","dee32d35a055d161":"fb6Ef","8eb0fe6d497319ac":"8F790","2d4bf2da7d0a6ebf":"by7tC","97707bd921d6bd97":"iAHzb","112c0986b11e3773":"eFwKP","3d504689dbdd2069":"8Ootk","38539e1f0ba5a0da":"dbRrK","adf6607a48b65015":"gdUGW","6a060de4f8cd5f51":"2963U","a1a4532e178c00e4":"fD7P8","644f90a72aefea2f":"3OyK3","67704ca106e263d":"knKFa","5aa9c5adff06bff6":"6pRWx","d2192ee8df9e83c3":"cFevu","11023e0d66f4a5c6":"dlilc","a1c31f725c1b9044":"8yjSh","557036c03b3c0cf2":"eUsPk","cfcd6ed14b0881ce":"3gyuN","c49dc6a73b22dff2":"aWEyQ","feb7bc20d8ad2999":"bRRie","44700e4b32d1904e":"fYfdk","b917fe1860ba64a6":"2hDFK","19f93dc81edaaaf1":"ltWDz","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bZ6ip":[function(require,module,exports) {
module.exports = require("c7f9fa97e2081a3d").getBundleURL("7lqf3") + "0.48981f22.png" + "?" + Date.now();

},{"c7f9fa97e2081a3d":"dhz1j"}],"dhz1j":[function(require,module,exports) {
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

},{}],"47TDf":[function(require,module,exports) {
module.exports = require("fc5025d2dc7476b0").getBundleURL("7lqf3") + "1.f94ee4de.png" + "?" + Date.now();

},{"fc5025d2dc7476b0":"dhz1j"}],"iRNcH":[function(require,module,exports) {
module.exports = require("d0c0c8d9befe17fe").getBundleURL("7lqf3") + "2.31f5056c.png" + "?" + Date.now();

},{"d0c0c8d9befe17fe":"dhz1j"}],"5dBiW":[function(require,module,exports) {
module.exports = require("390fc3cd28465db0").getBundleURL("7lqf3") + "3.ce1b885f.png" + "?" + Date.now();

},{"390fc3cd28465db0":"dhz1j"}],"20BS5":[function(require,module,exports) {
module.exports = require("f398176796f120da").getBundleURL("7lqf3") + "4.6fe91547.png" + "?" + Date.now();

},{"f398176796f120da":"dhz1j"}],"3Sd5a":[function(require,module,exports) {
module.exports = require("3c4ceae31b043f54").getBundleURL("7lqf3") + "5.a917cfd3.png" + "?" + Date.now();

},{"3c4ceae31b043f54":"dhz1j"}],"5OUlu":[function(require,module,exports) {
module.exports = require("79b6110b2c9ac026").getBundleURL("7lqf3") + "6.0d46346e.png" + "?" + Date.now();

},{"79b6110b2c9ac026":"dhz1j"}],"cHZmy":[function(require,module,exports) {
module.exports = require("82c04fc7e4228a06").getBundleURL("7lqf3") + "7.320708f3.png" + "?" + Date.now();

},{"82c04fc7e4228a06":"dhz1j"}],"8alIB":[function(require,module,exports) {
module.exports = require("423ff3c5eb7d6002").getBundleURL("7lqf3") + "8.5e948736.png" + "?" + Date.now();

},{"423ff3c5eb7d6002":"dhz1j"}],"jnAoU":[function(require,module,exports) {
module.exports = require("3f175621a8b8ebf0").getBundleURL("7lqf3") + "9.ff59ab43.png" + "?" + Date.now();

},{"3f175621a8b8ebf0":"dhz1j"}],"4tXBH":[function(require,module,exports) {
module.exports = require("bf1e89b02b4c7f38").getBundleURL("7lqf3") + "10.31b47b87.png" + "?" + Date.now();

},{"bf1e89b02b4c7f38":"dhz1j"}],"7BeHc":[function(require,module,exports) {
module.exports = require("998c4cdd7daded46").getBundleURL("7lqf3") + "11.cc89efaf.png" + "?" + Date.now();

},{"998c4cdd7daded46":"dhz1j"}],"ismEV":[function(require,module,exports) {
module.exports = require("40d18402e7c2b623").getBundleURL("7lqf3") + "12.9cf068b9.png" + "?" + Date.now();

},{"40d18402e7c2b623":"dhz1j"}],"1FnKf":[function(require,module,exports) {
module.exports = require("6277295fe99bff78").getBundleURL("7lqf3") + "13.3fd5fa74.png" + "?" + Date.now();

},{"6277295fe99bff78":"dhz1j"}],"iqBzQ":[function(require,module,exports) {
module.exports = require("fc621a5315e708bf").getBundleURL("7lqf3") + "14.85f8074c.png" + "?" + Date.now();

},{"fc621a5315e708bf":"dhz1j"}],"ep8Jj":[function(require,module,exports) {
module.exports = require("616a7a3d9bc7f082").getBundleURL("7lqf3") + "15.b3971def.png" + "?" + Date.now();

},{"616a7a3d9bc7f082":"dhz1j"}],"6kF9o":[function(require,module,exports) {
module.exports = require("723e94798c404591").getBundleURL("7lqf3") + "16.e924273a.png" + "?" + Date.now();

},{"723e94798c404591":"dhz1j"}],"4XoJC":[function(require,module,exports) {
module.exports = require("54db553146e0c71c").getBundleURL("7lqf3") + "0.827cb71f.png" + "?" + Date.now();

},{"54db553146e0c71c":"dhz1j"}],"iLEJw":[function(require,module,exports) {
module.exports = require("b856fc6680d4daac").getBundleURL("7lqf3") + "1.1ba72b2c.png" + "?" + Date.now();

},{"b856fc6680d4daac":"dhz1j"}],"4aDqe":[function(require,module,exports) {
module.exports = require("ad95d7325bd749a8").getBundleURL("7lqf3") + "2.a537714e.png" + "?" + Date.now();

},{"ad95d7325bd749a8":"dhz1j"}],"7S2yz":[function(require,module,exports) {
module.exports = require("8dcdeeedeaccf34c").getBundleURL("7lqf3") + "3.968442f0.png" + "?" + Date.now();

},{"8dcdeeedeaccf34c":"dhz1j"}],"9AwCi":[function(require,module,exports) {
module.exports = require("5d58279eaa0a9f40").getBundleURL("7lqf3") + "4.1087c966.png" + "?" + Date.now();

},{"5d58279eaa0a9f40":"dhz1j"}],"alUar":[function(require,module,exports) {
module.exports = require("388c8f52d515310c").getBundleURL("7lqf3") + "5.10b3d4d5.png" + "?" + Date.now();

},{"388c8f52d515310c":"dhz1j"}],"db6Gt":[function(require,module,exports) {
module.exports = require("cf0b0cf0d6f0b908").getBundleURL("7lqf3") + "6.b8b5ea54.png" + "?" + Date.now();

},{"cf0b0cf0d6f0b908":"dhz1j"}],"a1tGY":[function(require,module,exports) {
module.exports = require("4e779e031fd59c45").getBundleURL("7lqf3") + "7.a88fc70f.png" + "?" + Date.now();

},{"4e779e031fd59c45":"dhz1j"}],"7LgPX":[function(require,module,exports) {
module.exports = require("5aba31a49f8b0614").getBundleURL("7lqf3") + "8.624d70bd.png" + "?" + Date.now();

},{"5aba31a49f8b0614":"dhz1j"}],"iMtD9":[function(require,module,exports) {
module.exports = require("271bcf45a85f76ad").getBundleURL("7lqf3") + "9.85986fa7.png" + "?" + Date.now();

},{"271bcf45a85f76ad":"dhz1j"}],"ejif9":[function(require,module,exports) {
module.exports = require("d8067359407aa2b0").getBundleURL("7lqf3") + "10.5d974f61.png" + "?" + Date.now();

},{"d8067359407aa2b0":"dhz1j"}],"gwnOP":[function(require,module,exports) {
module.exports = require("de8178430a22728d").getBundleURL("7lqf3") + "11.00514082.png" + "?" + Date.now();

},{"de8178430a22728d":"dhz1j"}],"1qIwi":[function(require,module,exports) {
module.exports = require("163f3a8e0d54293a").getBundleURL("7lqf3") + "12.8e43d119.png" + "?" + Date.now();

},{"163f3a8e0d54293a":"dhz1j"}],"43dbn":[function(require,module,exports) {
module.exports = require("3d1a8ac63e98b984").getBundleURL("7lqf3") + "13.6d974d03.png" + "?" + Date.now();

},{"3d1a8ac63e98b984":"dhz1j"}],"2t1A7":[function(require,module,exports) {
module.exports = require("160e1a67b88be4e9").getBundleURL("7lqf3") + "14.c01188a0.png" + "?" + Date.now();

},{"160e1a67b88be4e9":"dhz1j"}],"9VkHL":[function(require,module,exports) {
module.exports = require("8453e446c344b13e").getBundleURL("7lqf3") + "15.98c7edf9.png" + "?" + Date.now();

},{"8453e446c344b13e":"dhz1j"}],"c428L":[function(require,module,exports) {
module.exports = require("f7c1e2d645c5dd68").getBundleURL("7lqf3") + "16.46395d71.png" + "?" + Date.now();

},{"f7c1e2d645c5dd68":"dhz1j"}],"6KV16":[function(require,module,exports) {
module.exports = require("86fd974118275447").getBundleURL("7lqf3") + "0.6135d861.png" + "?" + Date.now();

},{"86fd974118275447":"dhz1j"}],"2s8uN":[function(require,module,exports) {
module.exports = require("9e174ddc6f2b853f").getBundleURL("7lqf3") + "1.ab36ca3c.png" + "?" + Date.now();

},{"9e174ddc6f2b853f":"dhz1j"}],"5H9Bl":[function(require,module,exports) {
module.exports = require("3a47dadf4e4a9c0c").getBundleURL("7lqf3") + "2.637b0503.png" + "?" + Date.now();

},{"3a47dadf4e4a9c0c":"dhz1j"}],"jLbK6":[function(require,module,exports) {
module.exports = require("76f95bcde6624020").getBundleURL("7lqf3") + "3.ea6e2859.png" + "?" + Date.now();

},{"76f95bcde6624020":"dhz1j"}],"03iHy":[function(require,module,exports) {
module.exports = require("ecdc6bb25b2df4ee").getBundleURL("7lqf3") + "4.302416e9.png" + "?" + Date.now();

},{"ecdc6bb25b2df4ee":"dhz1j"}],"3nr0Y":[function(require,module,exports) {
module.exports = require("cc5f150916889960").getBundleURL("7lqf3") + "5.69800b21.png" + "?" + Date.now();

},{"cc5f150916889960":"dhz1j"}],"lcm4z":[function(require,module,exports) {
module.exports = require("c456be658a36165").getBundleURL("7lqf3") + "6.9611621f.png" + "?" + Date.now();

},{"c456be658a36165":"dhz1j"}],"h0lQE":[function(require,module,exports) {
module.exports = require("825198d15f52ddb8").getBundleURL("7lqf3") + "7.387a99b8.png" + "?" + Date.now();

},{"825198d15f52ddb8":"dhz1j"}],"b0Dcb":[function(require,module,exports) {
module.exports = require("50d98fe3cff00092").getBundleURL("7lqf3") + "8.868e1eb3.png" + "?" + Date.now();

},{"50d98fe3cff00092":"dhz1j"}],"l9pNm":[function(require,module,exports) {
module.exports = require("bead2428e375d460").getBundleURL("7lqf3") + "9.73cbc4df.png" + "?" + Date.now();

},{"bead2428e375d460":"dhz1j"}],"f2kin":[function(require,module,exports) {
module.exports = require("bd6a341a6ffd7c7f").getBundleURL("7lqf3") + "10.5089e6a9.png" + "?" + Date.now();

},{"bd6a341a6ffd7c7f":"dhz1j"}],"2oRG9":[function(require,module,exports) {
module.exports = require("3b79cef2f673ddd").getBundleURL("7lqf3") + "11.f9276e6c.png" + "?" + Date.now();

},{"3b79cef2f673ddd":"dhz1j"}],"OKrgo":[function(require,module,exports) {
module.exports = require("8cb3e33d14b1bc08").getBundleURL("7lqf3") + "12.28e07f45.png" + "?" + Date.now();

},{"8cb3e33d14b1bc08":"dhz1j"}],"7gy1L":[function(require,module,exports) {
module.exports = require("31b057dc2f763ff0").getBundleURL("7lqf3") + "13.3e9a788c.png" + "?" + Date.now();

},{"31b057dc2f763ff0":"dhz1j"}],"kbYgU":[function(require,module,exports) {
module.exports = require("522cbc9a6f819921").getBundleURL("7lqf3") + "14.55e925f3.png" + "?" + Date.now();

},{"522cbc9a6f819921":"dhz1j"}],"6z3Xy":[function(require,module,exports) {
module.exports = require("be177677056b8bb6").getBundleURL("7lqf3") + "15.45dd04ca.png" + "?" + Date.now();

},{"be177677056b8bb6":"dhz1j"}],"hY1XH":[function(require,module,exports) {
module.exports = require("82d6075d5e80f20f").getBundleURL("7lqf3") + "16.da3dfac2.png" + "?" + Date.now();

},{"82d6075d5e80f20f":"dhz1j"}],"hMpNq":[function(require,module,exports) {
module.exports = require("1a091a8e7bad4c0").getBundleURL("7lqf3") + "0.1859081d.png" + "?" + Date.now();

},{"1a091a8e7bad4c0":"dhz1j"}],"d1pHa":[function(require,module,exports) {
module.exports = require("e07968e6c35d6510").getBundleURL("7lqf3") + "1.927d66ed.png" + "?" + Date.now();

},{"e07968e6c35d6510":"dhz1j"}],"lUqLR":[function(require,module,exports) {
module.exports = require("83b13ce6c598520b").getBundleURL("7lqf3") + "2.363f17fd.png" + "?" + Date.now();

},{"83b13ce6c598520b":"dhz1j"}],"3KGxM":[function(require,module,exports) {
module.exports = require("1a253a76271d9847").getBundleURL("7lqf3") + "0.a7ae4123.png" + "?" + Date.now();

},{"1a253a76271d9847":"dhz1j"}],"eH6at":[function(require,module,exports) {
module.exports = require("6c17baab4e9f39ab").getBundleURL("7lqf3") + "1.88470ddf.png" + "?" + Date.now();

},{"6c17baab4e9f39ab":"dhz1j"}],"Q0YH4":[function(require,module,exports) {
module.exports = require("8dce1491bbd91a96").getBundleURL("7lqf3") + "2.de54b28c.png" + "?" + Date.now();

},{"8dce1491bbd91a96":"dhz1j"}],"aOu40":[function(require,module,exports) {
module.exports = require("123e67ae80c30ed2").getBundleURL("7lqf3") + "0.bdeefb48.png" + "?" + Date.now();

},{"123e67ae80c30ed2":"dhz1j"}],"4id28":[function(require,module,exports) {
module.exports = require("9992da54c554b779").getBundleURL("7lqf3") + "1.c862755d.png" + "?" + Date.now();

},{"9992da54c554b779":"dhz1j"}],"ckeHj":[function(require,module,exports) {
module.exports = require("a35b436367a86402").getBundleURL("7lqf3") + "2.3a3879c0.png" + "?" + Date.now();

},{"a35b436367a86402":"dhz1j"}],"lu67Q":[function(require,module,exports) {
module.exports = require("6a48af889ed9290").getBundleURL("7lqf3") + "0.2d5254b4.png" + "?" + Date.now();

},{"6a48af889ed9290":"dhz1j"}],"8q7Ms":[function(require,module,exports) {
module.exports = require("389366ce3f067363").getBundleURL("7lqf3") + "1.53be37fa.png" + "?" + Date.now();

},{"389366ce3f067363":"dhz1j"}],"4TTUF":[function(require,module,exports) {
module.exports = require("45e6d8d99e252750").getBundleURL("7lqf3") + "2.f6226c8b.png" + "?" + Date.now();

},{"45e6d8d99e252750":"dhz1j"}],"3qXGE":[function(require,module,exports) {
module.exports = require("76a09c06314bbed8").getBundleURL("7lqf3") + "3.cbffaa2e.png" + "?" + Date.now();

},{"76a09c06314bbed8":"dhz1j"}],"dhc74":[function(require,module,exports) {
module.exports = require("91bcef758fdb01f8").getBundleURL("7lqf3") + "4.13acbc59.png" + "?" + Date.now();

},{"91bcef758fdb01f8":"dhz1j"}],"7wdqH":[function(require,module,exports) {
module.exports = require("4b71b2ae595b89f7").getBundleURL("7lqf3") + "5.ef65f0ad.png" + "?" + Date.now();

},{"4b71b2ae595b89f7":"dhz1j"}],"eXj6S":[function(require,module,exports) {
module.exports = require("188583cbe849f505").getBundleURL("7lqf3") + "6.93bb63df.png" + "?" + Date.now();

},{"188583cbe849f505":"dhz1j"}],"3gZ5V":[function(require,module,exports) {
module.exports = require("62f8109cb3e2816f").getBundleURL("7lqf3") + "0.c7b4b27a.png" + "?" + Date.now();

},{"62f8109cb3e2816f":"dhz1j"}],"aECXk":[function(require,module,exports) {
module.exports = require("218b2fc74eaff345").getBundleURL("7lqf3") + "1.a62dfbae.png" + "?" + Date.now();

},{"218b2fc74eaff345":"dhz1j"}],"5A80d":[function(require,module,exports) {
module.exports = require("3a384cc623fdd1b3").getBundleURL("7lqf3") + "2.e3978c80.png" + "?" + Date.now();

},{"3a384cc623fdd1b3":"dhz1j"}],"g80Yk":[function(require,module,exports) {
module.exports = require("ade5f31a53d56f9").getBundleURL("7lqf3") + "3.4641ec5b.png" + "?" + Date.now();

},{"ade5f31a53d56f9":"dhz1j"}],"2qoyU":[function(require,module,exports) {
module.exports = require("2d432d035fe01b59").getBundleURL("7lqf3") + "4.46679935.png" + "?" + Date.now();

},{"2d432d035fe01b59":"dhz1j"}],"4c1Ka":[function(require,module,exports) {
module.exports = require("c5ce03dc9cf3b6d2").getBundleURL("7lqf3") + "5.7cb7235f.png" + "?" + Date.now();

},{"c5ce03dc9cf3b6d2":"dhz1j"}],"lv1i1":[function(require,module,exports) {
module.exports = require("5b2e1836d12f4c27").getBundleURL("7lqf3") + "6.25e0793b.png" + "?" + Date.now();

},{"5b2e1836d12f4c27":"dhz1j"}],"g2D99":[function(require,module,exports) {
module.exports = require("fdf5b5e6845143ac").getBundleURL("7lqf3") + "0.3c81352a.png" + "?" + Date.now();

},{"fdf5b5e6845143ac":"dhz1j"}],"bKrRO":[function(require,module,exports) {
module.exports = require("63a66ffabc4d4e4a").getBundleURL("7lqf3") + "1.5cc77829.png" + "?" + Date.now();

},{"63a66ffabc4d4e4a":"dhz1j"}],"aPAxx":[function(require,module,exports) {
module.exports = require("6473bab2e1b62991").getBundleURL("7lqf3") + "2.8e275dc1.png" + "?" + Date.now();

},{"6473bab2e1b62991":"dhz1j"}],"42OuZ":[function(require,module,exports) {
module.exports = require("ff727567c44e87de").getBundleURL("7lqf3") + "3.a9db7ab7.png" + "?" + Date.now();

},{"ff727567c44e87de":"dhz1j"}],"6ZHMt":[function(require,module,exports) {
module.exports = require("c6ba1d349129d0ea").getBundleURL("7lqf3") + "4.e32a50ca.png" + "?" + Date.now();

},{"c6ba1d349129d0ea":"dhz1j"}],"b9SPo":[function(require,module,exports) {
module.exports = require("82b91924cdc579fc").getBundleURL("7lqf3") + "5.c1536481.png" + "?" + Date.now();

},{"82b91924cdc579fc":"dhz1j"}],"grdhe":[function(require,module,exports) {
module.exports = require("2cd615c656d5d007").getBundleURL("7lqf3") + "6.288f575f.png" + "?" + Date.now();

},{"2cd615c656d5d007":"dhz1j"}],"8mOfu":[function(require,module,exports) {
module.exports = require("f26a1a3b9ba7b332").getBundleURL("7lqf3") + "0.1fd51615.png" + "?" + Date.now();

},{"f26a1a3b9ba7b332":"dhz1j"}],"hPymP":[function(require,module,exports) {
module.exports = require("7b87cb3852655cd").getBundleURL("7lqf3") + "1.e84c2436.png" + "?" + Date.now();

},{"7b87cb3852655cd":"dhz1j"}],"1Na2r":[function(require,module,exports) {
module.exports = require("9c88fb7579c60317").getBundleURL("7lqf3") + "2.2ec6d7b0.png" + "?" + Date.now();

},{"9c88fb7579c60317":"dhz1j"}],"6u0Bp":[function(require,module,exports) {
module.exports = require("c8b6759f1c2b53eb").getBundleURL("7lqf3") + "0.7a68699b.png" + "?" + Date.now();

},{"c8b6759f1c2b53eb":"dhz1j"}],"fPlQ5":[function(require,module,exports) {
module.exports = require("793bc6302c4b9baf").getBundleURL("7lqf3") + "1.fff421cb.png" + "?" + Date.now();

},{"793bc6302c4b9baf":"dhz1j"}],"fKpiJ":[function(require,module,exports) {
module.exports = require("bdc35bafb8d80919").getBundleURL("7lqf3") + "2.2fdbefa7.png" + "?" + Date.now();

},{"bdc35bafb8d80919":"dhz1j"}],"3veXQ":[function(require,module,exports) {
module.exports = require("bc2a143a7f72047a").getBundleURL("7lqf3") + "0.5282a781.png" + "?" + Date.now();

},{"bc2a143a7f72047a":"dhz1j"}],"61V47":[function(require,module,exports) {
module.exports = require("505698d485362a82").getBundleURL("7lqf3") + "1.6a9b3b01.png" + "?" + Date.now();

},{"505698d485362a82":"dhz1j"}],"8np7d":[function(require,module,exports) {
module.exports = require("6d79edd8e1df097a").getBundleURL("7lqf3") + "2.6ed29ec3.png" + "?" + Date.now();

},{"6d79edd8e1df097a":"dhz1j"}],"eaHFI":[function(require,module,exports) {
module.exports = require("b0e2ab17009428d4").getBundleURL("7lqf3") + "0.5ecdc1ae.png" + "?" + Date.now();

},{"b0e2ab17009428d4":"dhz1j"}],"aLTC9":[function(require,module,exports) {
module.exports = require("c0046d52fb1816e2").getBundleURL("7lqf3") + "1.065ffd47.png" + "?" + Date.now();

},{"c0046d52fb1816e2":"dhz1j"}],"d1Q2D":[function(require,module,exports) {
module.exports = require("86b09514f2a6648c").getBundleURL("7lqf3") + "2.29f32c63.png" + "?" + Date.now();

},{"86b09514f2a6648c":"dhz1j"}],"gFGza":[function(require,module,exports) {
module.exports = require("17e2253dc556248c").getBundleURL("7lqf3") + "0.c2bc436e.png" + "?" + Date.now();

},{"17e2253dc556248c":"dhz1j"}],"apmk0":[function(require,module,exports) {
module.exports = require("3d4e3c2a1e65465c").getBundleURL("7lqf3") + "1.e224ca18.png" + "?" + Date.now();

},{"3d4e3c2a1e65465c":"dhz1j"}],"7Dv3V":[function(require,module,exports) {
module.exports = require("ff7e574127269455").getBundleURL("7lqf3") + "2.20af644b.png" + "?" + Date.now();

},{"ff7e574127269455":"dhz1j"}],"bMe30":[function(require,module,exports) {
module.exports = require("8601e892ba209a9f").getBundleURL("7lqf3") + "0.740b269f.png" + "?" + Date.now();

},{"8601e892ba209a9f":"dhz1j"}],"23TSf":[function(require,module,exports) {
module.exports = require("772b10ae084af965").getBundleURL("7lqf3") + "1.88c581e4.png" + "?" + Date.now();

},{"772b10ae084af965":"dhz1j"}],"66Xi3":[function(require,module,exports) {
module.exports = require("1f6c43e6e08d83df").getBundleURL("7lqf3") + "2.e91aa1d2.png" + "?" + Date.now();

},{"1f6c43e6e08d83df":"dhz1j"}],"1uhZo":[function(require,module,exports) {
module.exports = require("ed63aeec00c3d6db").getBundleURL("7lqf3") + "0.1bd287a0.png" + "?" + Date.now();

},{"ed63aeec00c3d6db":"dhz1j"}],"ivwEH":[function(require,module,exports) {
module.exports = require("65ad1f4961bf01a4").getBundleURL("7lqf3") + "1.d58a5780.png" + "?" + Date.now();

},{"65ad1f4961bf01a4":"dhz1j"}],"3b3mn":[function(require,module,exports) {
module.exports = require("3382d515105621ef").getBundleURL("7lqf3") + "0.d9a399c3.png" + "?" + Date.now();

},{"3382d515105621ef":"dhz1j"}],"9TBmB":[function(require,module,exports) {
module.exports = require("83d58eb93f270865").getBundleURL("7lqf3") + "1.062ed605.png" + "?" + Date.now();

},{"83d58eb93f270865":"dhz1j"}],"4ZNgF":[function(require,module,exports) {
module.exports = require("898d6f2d850ed139").getBundleURL("7lqf3") + "0.7a9f2455.png" + "?" + Date.now();

},{"898d6f2d850ed139":"dhz1j"}],"evAel":[function(require,module,exports) {
module.exports = require("e7fbd5f3cf2d2688").getBundleURL("7lqf3") + "1.572a6598.png" + "?" + Date.now();

},{"e7fbd5f3cf2d2688":"dhz1j"}],"cFQVW":[function(require,module,exports) {
module.exports = require("2edf913649311c14").getBundleURL("7lqf3") + "0.0a92d131.png" + "?" + Date.now();

},{"2edf913649311c14":"dhz1j"}],"2yntB":[function(require,module,exports) {
module.exports = require("a64190bc894b9001").getBundleURL("7lqf3") + "1.d24763ee.png" + "?" + Date.now();

},{"a64190bc894b9001":"dhz1j"}],"gLiDM":[function(require,module,exports) {
module.exports = require("d50c7123e36da42d").getBundleURL("7lqf3") + "2.0e1b919c.png" + "?" + Date.now();

},{"d50c7123e36da42d":"dhz1j"}],"gjN8B":[function(require,module,exports) {
module.exports = require("78fba69fb82e7aec").getBundleURL("7lqf3") + "0.fda31a8c.png" + "?" + Date.now();

},{"78fba69fb82e7aec":"dhz1j"}],"baPnH":[function(require,module,exports) {
module.exports = require("9723871140148779").getBundleURL("7lqf3") + "1.36e21bb7.png" + "?" + Date.now();

},{"9723871140148779":"dhz1j"}],"gQA62":[function(require,module,exports) {
module.exports = require("55b0df048a6bbbb7").getBundleURL("7lqf3") + "2.845e9168.png" + "?" + Date.now();

},{"55b0df048a6bbbb7":"dhz1j"}],"7QxTs":[function(require,module,exports) {
module.exports = require("37d206f405430117").getBundleURL("7lqf3") + "0.d1a19ca9.png" + "?" + Date.now();

},{"37d206f405430117":"dhz1j"}],"5NOzH":[function(require,module,exports) {
module.exports = require("694e327a94abaa9a").getBundleURL("7lqf3") + "1.16a743db.png" + "?" + Date.now();

},{"694e327a94abaa9a":"dhz1j"}],"7GfRO":[function(require,module,exports) {
module.exports = require("a3bb019319eb7ae4").getBundleURL("7lqf3") + "2.3ecdc17d.png" + "?" + Date.now();

},{"a3bb019319eb7ae4":"dhz1j"}],"feghH":[function(require,module,exports) {
module.exports = require("549671a5d583f3df").getBundleURL("7lqf3") + "0.fd0add9a.png" + "?" + Date.now();

},{"549671a5d583f3df":"dhz1j"}],"4eRls":[function(require,module,exports) {
module.exports = require("8255a4207174b09c").getBundleURL("7lqf3") + "1.2192498e.png" + "?" + Date.now();

},{"8255a4207174b09c":"dhz1j"}],"5RLZV":[function(require,module,exports) {
module.exports = require("a08ff2e0bee0371e").getBundleURL("7lqf3") + "2.ab8117eb.png" + "?" + Date.now();

},{"a08ff2e0bee0371e":"dhz1j"}],"adCLw":[function(require,module,exports) {
module.exports = require("3b33aef771566c67").getBundleURL("7lqf3") + "3.1fe13043.png" + "?" + Date.now();

},{"3b33aef771566c67":"dhz1j"}],"er9dq":[function(require,module,exports) {
module.exports = require("6f29a507785ce01a").getBundleURL("7lqf3") + "0.27a8c375.png" + "?" + Date.now();

},{"6f29a507785ce01a":"dhz1j"}],"eoReL":[function(require,module,exports) {
module.exports = require("4b4ff2121acd9eba").getBundleURL("7lqf3") + "1.f500f41c.png" + "?" + Date.now();

},{"4b4ff2121acd9eba":"dhz1j"}],"jnC87":[function(require,module,exports) {
module.exports = require("85828378287ce7d9").getBundleURL("7lqf3") + "2.a8b32497.png" + "?" + Date.now();

},{"85828378287ce7d9":"dhz1j"}],"2JyJj":[function(require,module,exports) {
module.exports = require("2660cbd0cc432908").getBundleURL("7lqf3") + "3.6650c9b1.png" + "?" + Date.now();

},{"2660cbd0cc432908":"dhz1j"}],"8Z9wf":[function(require,module,exports) {
module.exports = require("2077b32048035c90").getBundleURL("7lqf3") + "0.3a521425.png" + "?" + Date.now();

},{"2077b32048035c90":"dhz1j"}],"2glrC":[function(require,module,exports) {
module.exports = require("58daf8fdfe85ecf6").getBundleURL("7lqf3") + "1.69dd99e1.png" + "?" + Date.now();

},{"58daf8fdfe85ecf6":"dhz1j"}],"bze9a":[function(require,module,exports) {
module.exports = require("f126c6c7f6cb3ef8").getBundleURL("7lqf3") + "2.63a32ea2.png" + "?" + Date.now();

},{"f126c6c7f6cb3ef8":"dhz1j"}],"8pIJu":[function(require,module,exports) {
module.exports = require("1b49caac4916f623").getBundleURL("7lqf3") + "3.74bfe1cd.png" + "?" + Date.now();

},{"1b49caac4916f623":"dhz1j"}],"lWBMf":[function(require,module,exports) {
module.exports = require("571d89f2f3cef2d").getBundleURL("7lqf3") + "0.5c07456d.png" + "?" + Date.now();

},{"571d89f2f3cef2d":"dhz1j"}],"2FDbE":[function(require,module,exports) {
module.exports = require("14c753ad82299def").getBundleURL("7lqf3") + "1.9e2781aa.png" + "?" + Date.now();

},{"14c753ad82299def":"dhz1j"}],"bKTJs":[function(require,module,exports) {
module.exports = require("4a18e6adb2fd6992").getBundleURL("7lqf3") + "2.80d8a9dc.png" + "?" + Date.now();

},{"4a18e6adb2fd6992":"dhz1j"}],"gUkwG":[function(require,module,exports) {
module.exports = require("ddc4d89e9b5f3382").getBundleURL("7lqf3") + "3.4505c156.png" + "?" + Date.now();

},{"ddc4d89e9b5f3382":"dhz1j"}],"73xYM":[function(require,module,exports) {
module.exports = require("d3880330964f38bc").getBundleURL("7lqf3") + "0.a5627eb9.png" + "?" + Date.now();

},{"d3880330964f38bc":"dhz1j"}],"6cvea":[function(require,module,exports) {
module.exports = require("acb3bf1d758b132f").getBundleURL("7lqf3") + "1.29be576d.png" + "?" + Date.now();

},{"acb3bf1d758b132f":"dhz1j"}],"i2llY":[function(require,module,exports) {
module.exports = require("e2044f890d374380").getBundleURL("7lqf3") + "2.2c9d3072.png" + "?" + Date.now();

},{"e2044f890d374380":"dhz1j"}],"3K3xf":[function(require,module,exports) {
module.exports = require("139a5dd064f5bab5").getBundleURL("7lqf3") + "3.b10a87dc.png" + "?" + Date.now();

},{"139a5dd064f5bab5":"dhz1j"}],"bi5jX":[function(require,module,exports) {
module.exports = require("854f2f3a51223f49").getBundleURL("7lqf3") + "0.b66475e8.png" + "?" + Date.now();

},{"854f2f3a51223f49":"dhz1j"}],"hhgKn":[function(require,module,exports) {
module.exports = require("336881ac177b582a").getBundleURL("7lqf3") + "1.ae4ec885.png" + "?" + Date.now();

},{"336881ac177b582a":"dhz1j"}],"6WJpx":[function(require,module,exports) {
module.exports = require("bf47ea5fd439b037").getBundleURL("7lqf3") + "2.89619ac1.png" + "?" + Date.now();

},{"bf47ea5fd439b037":"dhz1j"}],"fhkGp":[function(require,module,exports) {
module.exports = require("8dc564300fb8bc20").getBundleURL("7lqf3") + "3.e861d630.png" + "?" + Date.now();

},{"8dc564300fb8bc20":"dhz1j"}],"2rGx9":[function(require,module,exports) {
module.exports = require("122d338fce88954f").getBundleURL("7lqf3") + "0.c0daae54.png" + "?" + Date.now();

},{"122d338fce88954f":"dhz1j"}],"lV6aO":[function(require,module,exports) {
module.exports = require("267931656de1c076").getBundleURL("7lqf3") + "1.81ba4702.png" + "?" + Date.now();

},{"267931656de1c076":"dhz1j"}],"5y5GB":[function(require,module,exports) {
module.exports = require("a1d3982e8828247e").getBundleURL("7lqf3") + "2.2b44de5f.png" + "?" + Date.now();

},{"a1d3982e8828247e":"dhz1j"}],"a2yFw":[function(require,module,exports) {
module.exports = require("d6d090b7698d6087").getBundleURL("7lqf3") + "3.0a3548da.png" + "?" + Date.now();

},{"d6d090b7698d6087":"dhz1j"}],"cEGJz":[function(require,module,exports) {
module.exports = require("bb51c2f355f3b525").getBundleURL("7lqf3") + "4.7dc2c927.png" + "?" + Date.now();

},{"bb51c2f355f3b525":"dhz1j"}],"gm1Bt":[function(require,module,exports) {
module.exports = require("6f76b2f39467e31c").getBundleURL("7lqf3") + "5.a3e2eda3.png" + "?" + Date.now();

},{"6f76b2f39467e31c":"dhz1j"}],"1AP2y":[function(require,module,exports) {
module.exports = require("a3e13db227ff4cd6").getBundleURL("7lqf3") + "6.93d93658.png" + "?" + Date.now();

},{"a3e13db227ff4cd6":"dhz1j"}],"jXXj5":[function(require,module,exports) {
module.exports = require("9e8cf6f99dfc7217").getBundleURL("7lqf3") + "0.cf371571.png" + "?" + Date.now();

},{"9e8cf6f99dfc7217":"dhz1j"}],"26U1w":[function(require,module,exports) {
module.exports = require("e695825a79363860").getBundleURL("7lqf3") + "1.40091dcf.png" + "?" + Date.now();

},{"e695825a79363860":"dhz1j"}],"5Zw5E":[function(require,module,exports) {
module.exports = require("ee5996a2029a5421").getBundleURL("7lqf3") + "2.62b42786.png" + "?" + Date.now();

},{"ee5996a2029a5421":"dhz1j"}],"2PpKM":[function(require,module,exports) {
module.exports = require("bf570f11b21f67f6").getBundleURL("7lqf3") + "3.f21956af.png" + "?" + Date.now();

},{"bf570f11b21f67f6":"dhz1j"}],"5VMnC":[function(require,module,exports) {
module.exports = require("4d408b201172d32a").getBundleURL("7lqf3") + "4.0978be17.png" + "?" + Date.now();

},{"4d408b201172d32a":"dhz1j"}],"5d8Xm":[function(require,module,exports) {
module.exports = require("fb2f86ac313254b4").getBundleURL("7lqf3") + "5.4ebfd290.png" + "?" + Date.now();

},{"fb2f86ac313254b4":"dhz1j"}],"3pYTG":[function(require,module,exports) {
module.exports = require("6d67eba5a3b3a981").getBundleURL("7lqf3") + "6.1ace3298.png" + "?" + Date.now();

},{"6d67eba5a3b3a981":"dhz1j"}],"cmsux":[function(require,module,exports) {
module.exports = require("ef24cd15583820e5").getBundleURL("7lqf3") + "0.10cb56bf.png" + "?" + Date.now();

},{"ef24cd15583820e5":"dhz1j"}],"jleBP":[function(require,module,exports) {
module.exports = require("1bd301acc7012078").getBundleURL("7lqf3") + "1.0f7c63f1.png" + "?" + Date.now();

},{"1bd301acc7012078":"dhz1j"}],"g6lr5":[function(require,module,exports) {
module.exports = require("bad5783c03472c28").getBundleURL("7lqf3") + "2.6eebf201.png" + "?" + Date.now();

},{"bad5783c03472c28":"dhz1j"}],"dcG2p":[function(require,module,exports) {
module.exports = require("d728d52a6bfb6cfb").getBundleURL("7lqf3") + "3.e3e59270.png" + "?" + Date.now();

},{"d728d52a6bfb6cfb":"dhz1j"}],"jtt5n":[function(require,module,exports) {
module.exports = require("472b01fecb735554").getBundleURL("7lqf3") + "4.a1a6b94b.png" + "?" + Date.now();

},{"472b01fecb735554":"dhz1j"}],"6jqRk":[function(require,module,exports) {
module.exports = require("f6b6d3f35c17dea6").getBundleURL("7lqf3") + "5.04ee9ca2.png" + "?" + Date.now();

},{"f6b6d3f35c17dea6":"dhz1j"}],"6TUB5":[function(require,module,exports) {
module.exports = require("2236068b7352d8aa").getBundleURL("7lqf3") + "6.2aa4cc81.png" + "?" + Date.now();

},{"2236068b7352d8aa":"dhz1j"}],"6D9nM":[function(require,module,exports) {
module.exports = require("a496f30432e3b0e3").getBundleURL("7lqf3") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.0f54d1b5.MP4" + "?" + Date.now();

},{"a496f30432e3b0e3":"dhz1j"}],"64lwP":[function(require,module,exports) {
module.exports = require("156d76f1eca61a40").getBundleURL("7lqf3") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.81f5dc51.MP4" + "?" + Date.now();

},{"156d76f1eca61a40":"dhz1j"}],"avJsH":[function(require,module,exports) {
module.exports = require("ad967ce9a367b6fa").getBundleURL("7lqf3") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.55d82234.MP4" + "?" + Date.now();

},{"ad967ce9a367b6fa":"dhz1j"}],"1JJJp":[function(require,module,exports) {
module.exports = require("5130bb2be0cad5e4").getBundleURL("7lqf3") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.b40d1174.MP4" + "?" + Date.now();

},{"5130bb2be0cad5e4":"dhz1j"}],"3Z2UQ":[function(require,module,exports) {
module.exports = require("77f383283cdf3da1").getBundleURL("7lqf3") + "2021_09_09 21_29_02    @   Portugal Monasterio de Alcobasa @.7cfb9fbb.MP4" + "?" + Date.now();

},{"77f383283cdf3da1":"dhz1j"}],"duMg4":[function(require,module,exports) {
module.exports = require("483378c7036adbec").getBundleURL("7lqf3") + "2021_09_09 21_21_14    @   Portugal Monasterio de Alcobasa @.355354eb.MP4" + "?" + Date.now();

},{"483378c7036adbec":"dhz1j"}],"jGAPy":[function(require,module,exports) {
module.exports = require("90f798fbfb2d40f8").getBundleURL("7lqf3") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.387f9eee.MP4" + "?" + Date.now();

},{"90f798fbfb2d40f8":"dhz1j"}],"ebEpJ":[function(require,module,exports) {
module.exports = require("fea779c2619bf425").getBundleURL("7lqf3") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.f657a26f.MP4" + "?" + Date.now();

},{"fea779c2619bf425":"dhz1j"}],"gr4rX":[function(require,module,exports) {
module.exports = require("15aa3d3694635af").getBundleURL("7lqf3") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.b3355e52.MP4" + "?" + Date.now();

},{"15aa3d3694635af":"dhz1j"}],"cTpIw":[function(require,module,exports) {
module.exports = require("d9872998893b16e7").getBundleURL("7lqf3") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.5348d14e.MP4" + "?" + Date.now();

},{"d9872998893b16e7":"dhz1j"}],"j88XX":[function(require,module,exports) {
module.exports = require("3e20b685bcbcd043").getBundleURL("7lqf3") + "2021_09_09 17_51_34    @   Portugal Santuario de F\xe1tima @.d45b2c74.MP4" + "?" + Date.now();

},{"3e20b685bcbcd043":"dhz1j"}],"3udrM":[function(require,module,exports) {
module.exports = require("cb55c4be5e17dafe").getBundleURL("7lqf3") + "2021_09_09 17_49_22    @   Portugal Santuario de F\xe1tima @.b09786a5.MP4" + "?" + Date.now();

},{"cb55c4be5e17dafe":"dhz1j"}],"l6gw1":[function(require,module,exports) {
module.exports = require("7115b7f9b7596871").getBundleURL("7lqf3") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f6b86c61.MP4" + "?" + Date.now();

},{"7115b7f9b7596871":"dhz1j"}],"fb6Ef":[function(require,module,exports) {
module.exports = require("d526c738c595d697").getBundleURL("7lqf3") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.e59268c6.MP4" + "?" + Date.now();

},{"d526c738c595d697":"dhz1j"}],"8F790":[function(require,module,exports) {
module.exports = require("78fd53920187849f").getBundleURL("7lqf3") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.44cb9cbb.MP4" + "?" + Date.now();

},{"78fd53920187849f":"dhz1j"}],"by7tC":[function(require,module,exports) {
module.exports = require("29ff171044fa2550").getBundleURL("7lqf3") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.c2caa54a.MP4" + "?" + Date.now();

},{"29ff171044fa2550":"dhz1j"}],"iAHzb":[function(require,module,exports) {
module.exports = require("e3a8efa8208851da").getBundleURL("7lqf3") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.522de540.MP4" + "?" + Date.now();

},{"e3a8efa8208851da":"dhz1j"}],"eFwKP":[function(require,module,exports) {
module.exports = require("49c96f6b2f033fbb").getBundleURL("7lqf3") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.b1f98c04.MP4" + "?" + Date.now();

},{"49c96f6b2f033fbb":"dhz1j"}],"8Ootk":[function(require,module,exports) {
module.exports = require("e0301c31cf45e760").getBundleURL("7lqf3") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.dbd6bb26.MP4" + "?" + Date.now();

},{"e0301c31cf45e760":"dhz1j"}],"dbRrK":[function(require,module,exports) {
module.exports = require("b582f4cf4dab0c90").getBundleURL("7lqf3") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.bebce03e.MP4" + "?" + Date.now();

},{"b582f4cf4dab0c90":"dhz1j"}],"gdUGW":[function(require,module,exports) {
module.exports = require("5e9f2dd0a21ff114").getBundleURL("7lqf3") + "2021_09_10 00_23_08    @   Portugal Nazar\xe9 @.f4401dbd.MP4" + "?" + Date.now();

},{"5e9f2dd0a21ff114":"dhz1j"}],"2963U":[function(require,module,exports) {
module.exports = require("bad7c32b35404796").getBundleURL("7lqf3") + "2021_09_10 00_21_34    @   Portugal Nazar\xe9 @.f98aa729.MP4" + "?" + Date.now();

},{"bad7c32b35404796":"dhz1j"}],"fD7P8":[function(require,module,exports) {
module.exports = require("52daf40172b31eca").getBundleURL("7lqf3") + "2021_09_09 23_45_26    @   Portugal Nazar\xe9 @.7ea7575a.MP4" + "?" + Date.now();

},{"52daf40172b31eca":"dhz1j"}],"3OyK3":[function(require,module,exports) {
module.exports = require("83473d41e6c265b6").getBundleURL("7lqf3") + "2019_04_13 10_47_42    @   Portugal Nazar\xe9 @.984f0f6b.MP4" + "?" + Date.now();

},{"83473d41e6c265b6":"dhz1j"}],"knKFa":[function(require,module,exports) {
module.exports = require("604e3180cfff7594").getBundleURL("7lqf3") + "2021_09_11 22_49_16    @   Portugal Sintra @.7163431c.MP4" + "?" + Date.now();

},{"604e3180cfff7594":"dhz1j"}],"6pRWx":[function(require,module,exports) {
module.exports = require("760b3ad4bf595b9e").getBundleURL("7lqf3") + "2021_09_11 22_49_16    @   Portugal Sintra @.1fb33247.MP4" + "?" + Date.now();

},{"760b3ad4bf595b9e":"dhz1j"}],"cFevu":[function(require,module,exports) {
module.exports = require("444ed9d5924e649").getBundleURL("7lqf3") + "2021_09_11 22_49_16    @   Portugal Sintra @.5e0795d5.MP4" + "?" + Date.now();

},{"444ed9d5924e649":"dhz1j"}],"dlilc":[function(require,module,exports) {
module.exports = require("c994a93e4ecf9fa6").getBundleURL("7lqf3") + "2021_09_11 18_36_02    @   Portugal Obidos @.7420ed41.MP4" + "?" + Date.now();

},{"c994a93e4ecf9fa6":"dhz1j"}],"8yjSh":[function(require,module,exports) {
module.exports = require("1cff1e854d6d1dc").getBundleURL("7lqf3") + "2021_09_11 18_15_50    @   Portugal Obidos @.60f4c151.MP4" + "?" + Date.now();

},{"1cff1e854d6d1dc":"dhz1j"}],"eUsPk":[function(require,module,exports) {
module.exports = require("44e9f6a70d871742").getBundleURL("7lqf3") + "2021_09_11 17_56_56    @   Portugal Obidos @.437a5087.MP4" + "?" + Date.now();

},{"44e9f6a70d871742":"dhz1j"}],"3gyuN":[function(require,module,exports) {
module.exports = require("b470dc901790c89").getBundleURL("7lqf3") + "2021_09_11 18_36_02    @   Portugal Obidos @.f58db13d.MP4" + "?" + Date.now();

},{"b470dc901790c89":"dhz1j"}],"aWEyQ":[function(require,module,exports) {
module.exports = require("cff3e08846e80769").getBundleURL("7lqf3") + "2021_09_11 18_15_50    @   Portugal Obidos @.6444c9bd.MP4" + "?" + Date.now();

},{"cff3e08846e80769":"dhz1j"}],"bRRie":[function(require,module,exports) {
module.exports = require("b4290147c7e1c513").getBundleURL("7lqf3") + "2021_09_11 17_56_56    @   Portugal Obidos @.81185490.MP4" + "?" + Date.now();

},{"b4290147c7e1c513":"dhz1j"}],"fYfdk":[function(require,module,exports) {
module.exports = require("208f4dafa08e17f4").getBundleURL("7lqf3") + "2021_09_11 18_36_02    @   Portugal Obidos @.3692cf69.MP4" + "?" + Date.now();

},{"208f4dafa08e17f4":"dhz1j"}],"2hDFK":[function(require,module,exports) {
module.exports = require("4de99237de53d9a0").getBundleURL("7lqf3") + "2021_09_11 18_15_50    @   Portugal Obidos @.921a25a8.MP4" + "?" + Date.now();

},{"4de99237de53d9a0":"dhz1j"}],"ltWDz":[function(require,module,exports) {
module.exports = require("d88d8e2504b7b963").getBundleURL("7lqf3") + "2021_09_11 17_56_56    @   Portugal Obidos @.08b6b87a.MP4" + "?" + Date.now();

},{"d88d8e2504b7b963":"dhz1j"}],"dBYYk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["iYQy2","dfWJz"], "dfWJz", "parcelRequire3c64")

//# sourceMappingURL=014detalle-obidos.44ab99fb.js.map
