// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/keen-slider/keen-slider.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/keen-slider/keen-slider.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * keen-slider 5.5.1
 * The HTML touch slider carousel with the most native feeling you will get.
 * https://keen-slider.io
 * Copyright 2020-2021 Eric Beyer <contact@ericbeyer.de>
 * License: MIT
 * Released on: 2021-06-10
 */
function t(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}

function n(t, n) {
  var e = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function (n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), e.push.apply(e, r);
  }

  return e;
}

function e(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = null != arguments[r] ? arguments[r] : {};
    r % 2 ? n(Object(i), !0).forEach(function (n) {
      t(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
    });
  }

  return e;
}

function r(t) {
  return function (t) {
    if (Array.isArray(t)) return i(t);
  }(t) || function (t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
  }(t) || function (t, n) {
    if (!t) return;
    if ("string" == typeof t) return i(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    "Object" === e && t.constructor && (e = t.constructor.name);
    if ("Map" === e || "Set" === e) return Array.from(t);
    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(t, n);
  }(t) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function i(t, n) {
  (null == n || n > t.length) && (n = t.length);

  for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];

  return r;
}

function o(t) {
  var n,
      i,
      o,
      a,
      f,
      s,
      l,
      d,
      h,
      v,
      p,
      m,
      b,
      g,
      w,
      y,
      M,
      O,
      S,
      A,
      j,
      k,
      x,
      P,
      E,
      T,
      D,
      C,
      L,
      V,
      X,
      Y,
      z,
      H,
      I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      q = "data-keen-slider-moves",
      F = "data-keen-slider-v",
      W = [],
      _ = null,
      N = !1,
      R = !1,
      U = 0,
      $ = [];

  function B(t, n, e) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    t.addEventListener(n, e, r), W.push([t, n, e, r]);
  }

  function G(t) {
    if (O && S === Z(t) && ft()) {
      var e = nt(t).x;
      if (!rt(t) && P) return K(t);
      P && (Nt(), A = e, P = !1), t.cancelable && t.preventDefault();
      var r = A - e;
      E += Math.abs(r), !T && E > 5 && (T = !0, n.setAttribute(q, !0)), Yt(x(r, Jt) * (lt() ? -1 : 1), t.timeStamp), A = e;
    }
  }

  function J(t) {
    O || !ft() || et(t.target) || (O = !0, P = !0, S = Z(t), T = !1, E = 0, rt(t), pt(), M = v, A = nt(t).x, Yt(0, t.timeStamp), ut("dragStart"));
  }

  function K(t) {
    O && S === Z(t, !0) && ft() && (n.removeAttribute(q), O = !1, gt(), ut("dragEnd"));
  }

  function Q(t) {
    return t.changedTouches;
  }

  function Z(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = n ? Q(t) : tt(t);
    return e ? e[0] ? e[0].identifier : "error" : "default";
  }

  function tt(t) {
    return t.targetTouches;
  }

  function nt(t) {
    var n = tt(t);
    return {
      x: ht() ? n ? n[0].screenY : t.pageY : n ? n[0].screenX : t.pageX,
      timestamp: t.timeStamp
    };
  }

  function et(t) {
    return t.hasAttribute(y.preventEvent);
  }

  function rt(t) {
    var n = tt(t);
    if (!n) return !0;
    var e = n[0],
        r = ht() ? e.clientY : e.clientX,
        i = ht() ? e.clientX : e.clientY,
        o = void 0 !== j && void 0 !== k && Math.abs(k - i) <= Math.abs(j - r);
    return j = r, k = i, o;
  }

  function it(t) {
    ft() && O && t.preventDefault();
  }

  function ot() {
    B(window, "orientationchange", Dt), B(window, "resize", function () {
      return Tt();
    }), B(n, "dragstart", function (t) {
      ft() && t.preventDefault();
    }), B(n, "mousedown", J), B(y.cancelOnLeave ? n : window, "mousemove", G), y.cancelOnLeave && B(n, "mouseleave", K), B(window, "mouseup", K), B(n, "touchstart", J, {
      passive: !0
    }), B(n, "touchmove", G, {
      passive: !1
    }), B(n, "touchend", K, {
      passive: !0
    }), B(n, "touchcancel", K, {
      passive: !0
    }), B(window, "wheel", it, {
      passive: !1
    });
  }

  function at() {
    W.forEach(function (t) {
      t[0].removeEventListener(t[1], t[2], t[3]);
    }), W = [];
  }

  function ut(t) {
    y[t] && y[t](Jt);
  }

  function ct() {
    return y.centered;
  }

  function ft() {
    return void 0 !== i ? i : y.controls;
  }

  function st() {
    return y.loop && o > 1;
  }

  function lt() {
    return y.rtl;
  }

  function dt() {
    return !y.loop && y.rubberband;
  }

  function ht() {
    return !!y.vertical;
  }

  function vt() {
    D = window.requestAnimationFrame(mt);
  }

  function pt() {
    D && (window.cancelAnimationFrame(D), D = null), C = null;
  }

  function mt(t) {
    C || (C = t);
    var n = t - C,
        e = bt(n);
    if (n >= V) return Yt(L - Y, !1), H ? H() : void ut("afterChange");
    var r = zt(e);

    if (0 === r || st() || dt() || z) {
      if (0 !== r && dt() && !z) return St();
      Y += e, Yt(e, !1), vt();
    } else Yt(e - r, !1);
  }

  function bt(t) {
    return L * X(t / V) - Y;
  }

  function gt() {
    switch (ut("beforeChange"), y.mode) {
      case "free":
        Mt();
        break;

      case "free-snap":
        Ot();
        break;

      case "snap":
      default:
        wt();
    }
  }

  function wt() {
    yt((1 === l && 0 !== p ? M : v) + Math.sign(p));
  }

  function yt(t, n) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.duration,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = function (t) {
      return 1 + --t * t * t * t * t;
    };

    At(Ft(t = qt(t, r, i)), e, o, n);
  }

  function Mt() {
    if (0 === b) return !(!zt(0) || st()) && yt(v);
    var t = y.friction / Math.pow(Math.abs(b), -.5);
    At(Math.pow(b, 2) / t * Math.sign(b), 6 * Math.abs(b / t), function (t) {
      return 1 - Math.pow(1 - t, 5);
    });
  }

  function Ot() {
    if (0 === b) return yt(v);
    var t = y.friction / Math.pow(Math.abs(b), -.5),
        n = Math.pow(b, 2) / t * Math.sign(b),
        e = 6 * Math.abs(b / t),
        r = (U + n) / (s / l);
    At((-1 === p ? Math.floor(r) : Math.ceil(r)) * (s / l) - U, e, function (t) {
      return 1 - Math.pow(1 - t, 5);
    });
  }

  function St() {
    if (pt(), 0 === b) return yt(v, !0);

    var t = .04 / Math.pow(Math.abs(b), -.5),
        n = Math.pow(b, 2) / t * Math.sign(b),
        e = function (t) {
      return --t * t * t + 1;
    },
        r = b;

    At(n, 3 * Math.abs(r / t), e, !0, function () {
      At(Ft(qt(v)), 500, e, !0);
    });
  }

  function At(t, n, e, r, i) {
    pt(), L = t, Y = 0, V = n, X = e, z = r, H = i, C = null, vt();
  }

  function jt(e) {
    var r = u(t);
    r.length && (n = r[0], Tt(e), ot(), ut("mounted"));
  }

  function kt() {
    var t,
        n = I.breakpoints || [];

    for (var r in n) window.matchMedia(r).matches && (t = r);

    if (t === _) return !0;
    var i = (_ = t) ? n[_] : I;
    i.breakpoints && _ && delete i.breakpoints, y = e(e(e({}, Gt), I), i), N = !0, h = null, ut("optionsChanged"), Et();
  }

  function xt(t) {
    if ("function" == typeof t) return t();
    var n = y.autoAdjustSlidesPerView;
    n || (o = Math.max(t, o));
    var e = st() && n ? o - 1 : o;
    return c(t, 1, Math.max(e, 1));
  }

  function Pt() {
    kt(), R = !0, ut("created");
  }

  function Et(t, n) {
    t && (I = t), n && (_ = null), Ct(), jt(n);
  }

  function Tt(t) {
    var e = window.innerWidth;

    if (kt() && (e !== h || t)) {
      h = e;
      var r = y.slides;
      "number" == typeof r ? (f = null, o = r) : (f = u(r, n), o = f ? f.length : 0);
      var i = y.dragSpeed;
      x = "function" == typeof i ? i : function (t) {
        return t * i;
      }, s = ht() ? n.offsetHeight : n.offsetWidth, l = xt(y.slidesPerView), d = c(y.spacing, 0, s / (l - 1) - 1), s += d, a = ct() ? (s / 2 - s / l / 2) / s : 0, Vt();
      var p = !R || N && y.resetSlide ? y.initial : v;
      Bt(st() ? p : Ht(p)), ht() && n.setAttribute(F, !0), N = !1;
    }
  }

  function Dt(t) {
    Tt(), setTimeout(Tt, 500), setTimeout(Tt, 2e3);
  }

  function Ct() {
    at(), Xt(), n && n.hasAttribute(F) && n.removeAttribute(F), ut("destroyed");
  }

  function Lt() {
    f && f.forEach(function (t, n) {
      var e = g[n].distance * s - n * (s / l - d / l - d / l * (l - 1)),
          r = ht() ? 0 : e,
          i = ht() ? e : 0,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0)");
      t.style.transform = o, t.style["-webkit-transform"] = o;
    });
  }

  function Vt() {
    f && f.forEach(function (t) {
      var n = "calc(".concat(100 / l, "% - ").concat(d / l * (l - 1), "px)");
      ht() ? (t.style["min-height"] = n, t.style["max-height"] = n) : (t.style["min-width"] = n, t.style["max-width"] = n);
    });
  }

  function Xt() {
    if (f) {
      var t = ["transform", "-webkit-transform"];
      t = [].concat(r(t), ht ? ["min-height", "max-height"] : ["min-width", "max-width"]), f.forEach(function (n) {
        t.forEach(function (t) {
          n.style.removeProperty(t);
        });
      });
    }
  }

  function Yt(t) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
    _t(t, e), n && (t = Ut(t)), U += t, Rt();
  }

  function zt(t) {
    var n = s * (o - 1 * (ct() ? 1 : l)) / l,
        e = U + t;
    return e > n ? e - n : e < 0 ? e : 0;
  }

  function Ht(t) {
    return c(t, 0, o - 1 - (ct() ? 0 : l - 1));
  }

  function It() {
    var t = Math.abs(w),
        n = U < 0 ? 1 - t : t;
    return {
      direction: p,
      progressTrack: n,
      progressSlides: n * o / (o - 1),
      positions: g,
      position: U,
      speed: b,
      relativeSlide: (v % o + o) % o,
      absoluteSlide: v,
      size: o,
      slidesPerView: l,
      widthOrHeight: s
    };
  }

  function qt(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return st() ? n ? Wt(t, e) : t : Ht(t);
  }

  function Ft(t) {
    return -(-s / l * t + U);
  }

  function Wt(t, n) {
    var e = (v % o + o) % o,
        r = e < (t = (t % o + o) % o) ? -e - o + t : -(e - t),
        i = e > t ? o - e + t : t - e,
        a = n ? Math.abs(r) <= i ? r : i : t < e ? r : i;
    return v + a;
  }

  function _t(t, n) {
    clearTimeout(m);
    var e = Math.sign(t);
    if (e !== p && Nt(), p = e, $.push({
      distance: t,
      time: n
    }), m = setTimeout(function () {
      $ = [], b = 0;
    }, 50), ($ = $.slice(-6)).length <= 1 || 0 === p) return b = 0;
    var r = $.slice(0, -1).reduce(function (t, n) {
      return t + n.distance;
    }, 0),
        i = $[$.length - 1].time,
        o = $[0].time;
    b = c(r / (i - o), -10, 10);
  }

  function Nt() {
    $ = [];
  }

  function Rt() {
    w = st() ? U % (s * o / l) / (s * o / l) : U / (s * o / l), $t();

    for (var t = [], n = 0; n < o; n++) {
      var e = (1 / o * n - (w < 0 && st() ? w + 1 : w)) * o / l + a;
      st() && (e += e > (o - 1) / l ? -o / l : e < -o / l + 1 ? o / l : 0);
      var r = 1 / l,
          i = e + r,
          u = i < r ? i / r : i > 1 ? 1 - (i - 1) * l / 1 : 1;
      t.push({
        portion: u < 0 || u > 1 ? 0 : u,
        distance: lt() ? -1 * e + 1 - r : e
      });
    }

    g = t, Lt(), ut("move");
  }

  function Ut(t) {
    if (st()) return t;
    var n = zt(t);
    if (!dt()) return t - n;
    if (0 === n) return t;
    var e;
    return t * (e = n / s, (1 - Math.abs(e)) * (1 - Math.abs(e)));
  }

  function $t() {
    var t = Math.round(U / (s / l));
    t !== v && (!st() && (t < 0 || t > o - 1) || (v = t, ut("slideChanged")));
  }

  function Bt(t) {
    ut("beforeChange"), Yt(Ft(t), !1), ut("afterChange");
  }

  var Gt = {
    autoAdjustSlidesPerView: !0,
    centered: !1,
    breakpoints: null,
    controls: !0,
    dragSpeed: 1,
    friction: .0025,
    loop: !1,
    initial: 0,
    duration: 500,
    preventEvent: "data-keen-slider-pe",
    slides: ".keen-slider__slide",
    vertical: !1,
    resetSlide: !1,
    slidesPerView: 1,
    spacing: 0,
    mode: "snap",
    rtl: !1,
    rubberband: !0,
    cancelOnLeave: !0
  },
      Jt = {
    controls: function (t) {
      i = t;
    },
    destroy: Ct,
    refresh: function (t) {
      Et(t, !0);
    },
    next: function () {
      yt(v + 1, !0);
    },
    prev: function () {
      yt(v - 1, !0);
    },
    moveToSlide: function (t, n) {
      yt(t, !0, n);
    },
    moveToSlideRelative: function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          e = arguments.length > 2 ? arguments[2] : void 0;
      yt(t, !0, e, !0, n);
    },
    resize: function () {
      Tt(!0);
    },
    details: function () {
      return It();
    },
    options: function () {
      var t = e({}, y);
      return delete t.breakpoints, t;
    }
  };
  return Pt(), Jt;
}

function a(t) {
  return Array.prototype.slice.call(t);
}

function u(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
  return "function" == typeof t ? a(t()) : "string" == typeof t ? a(n.querySelectorAll(t)) : t instanceof HTMLElement != !1 ? [t] : t instanceof NodeList != !1 ? t : [];
}

function c(t, n, e) {
  return Math.min(Math.max(t, n), e);
}

Math.sign || (Math.sign = function (t) {
  return (t > 0) - (t < 0) || +t;
});
var _default = o;
exports.default = _default;
},{}],"js/categoria.js":[function(require,module,exports) {
"use strict";

require("keen-slider/keen-slider.min.css");

var _keenSlider = _interopRequireDefault(require("keen-slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderElement = document.getElementById("my-keen-slider");
var interval = 0;

function autoplay(run) {
  clearInterval(interval);
  interval = setInterval(function () {
    if (run && slider) {
      slider.next();
    }
  }, 2000);
}

var slider = new _keenSlider.default(sliderElement, {
  loop: true,
  duration: 1000,
  dragStart: function dragStart() {
    autoplay(false);
  },
  dragEnd: function dragEnd() {
    autoplay(true);
  }
});
sliderElement.addEventListener("mouseover", function () {
  autoplay(false);
});
sliderElement.addEventListener("mouseout", function () {
  autoplay(true);
});
autoplay(true);
},{"keen-slider/keen-slider.min.css":"node_modules/keen-slider/keen-slider.min.css","keen-slider":"node_modules/keen-slider/keen-slider.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54383" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("js/categoria.js");});
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/categoria.43bfa879.js.map