/*!
* Tailwind Elements 1.0.0
* 
* Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
*/
var Mh = Object.defineProperty;
var Rh = (s, t, e) => t in s ? Mh(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var Ct = (s, t, e) => (Rh(s, typeof t != "symbol" ? t + "" : t, e), e);
const gn = (() => {
  const s = {};
  let t = 1;
  return {
    set(e, i, n) {
      typeof e[i] > "u" && (e[i] = {
        key: i,
        id: t
      }, t++), s[e[i].id] = n;
    },
    get(e, i) {
      if (!e || typeof e[i] > "u")
        return null;
      const n = e[i];
      return n.key === i ? s[n.id] : null;
    },
    delete(e, i) {
      if (typeof e[i] > "u")
        return;
      const n = e[i];
      n.key === i && (delete s[n.id], delete e[i]);
    }
  };
})(), y = {
  setData(s, t, e) {
    gn.set(s, t, e);
  },
  getData(s, t) {
    return gn.get(s, t);
  },
  removeData(s, t) {
    gn.delete(s, t);
  }
}, Ph = 1e6, Bh = 1e3, yo = "transitionend", Hh = (s) => s == null ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(), rt = (s) => {
  do
    s += Math.floor(Math.random() * Ph);
  while (document.getElementById(s));
  return s;
}, Fl = (s) => {
  let t = s.getAttribute("data-te-target");
  if (!t || t === "#") {
    let e = s.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
}, Uo = (s) => {
  const t = Fl(s);
  return t && document.querySelector(t) ? t : null;
}, Qt = (s) => {
  const t = Fl(s);
  return t ? document.querySelector(t) : null;
}, Vh = (s) => {
  if (!s)
    return 0;
  let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(s);
  const i = Number.parseFloat(t), n = Number.parseFloat(e);
  return !i && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * Bh);
}, Yl = (s) => {
  s.dispatchEvent(new Event(yo));
}, Fe = (s) => !s || typeof s != "object" ? !1 : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u"), Jt = (s) => Fe(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null, I = (s, t, e) => {
  Object.keys(e).forEach((i) => {
    const n = e[i], o = t[i], r = o && Fe(o) ? "element" : Hh(o);
    if (!new RegExp(n).test(r))
      throw new Error(
        `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
      );
  });
}, $t = (s) => {
  if (!s || s.getClientRects().length === 0)
    return !1;
  if (s.style && s.parentNode && s.parentNode.style) {
    const t = getComputedStyle(s), e = getComputedStyle(s.parentNode);
    return getComputedStyle(s).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, fe = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? !0 : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false", jl = (s) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof s.getRootNode == "function") {
    const t = s.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return s instanceof ShadowRoot ? s : s.parentNode ? jl(s.parentNode) : null;
}, Zs = () => function() {
}, Ze = (s) => {
  s.offsetHeight;
}, Kl = () => {
  const { jQuery: s } = window;
  return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
}, bn = [], zl = (s) => {
  document.readyState === "loading" ? (bn.length || document.addEventListener("DOMContentLoaded", () => {
    bn.forEach((t) => t());
  }), bn.push(s)) : s();
}, F = () => document.documentElement.dir === "rtl", Wh = (s) => Array.from(s), D = (s) => document.createElement(s), _e = (s) => {
  typeof s == "function" && s();
}, Ul = (s, t, e = !0) => {
  if (!e) {
    _e(s);
    return;
  }
  const i = 5, n = Vh(t) + i;
  let o = !1;
  const r = ({ target: a }) => {
    a === t && (o = !0, t.removeEventListener(yo, r), _e(s));
  };
  t.addEventListener(yo, r), setTimeout(() => {
    o || Yl(t);
  }, n);
}, Xl = (s, t, e, i) => {
  let n = s.indexOf(t);
  if (n === -1)
    return s[!e && i ? s.length - 1 : 0];
  const o = s.length;
  return n += e ? 1 : -1, i && (n = (n + o) % o), s[Math.max(0, Math.min(n, o - 1))];
}, Fh = /[^.]*(?=\..*)\.|.*/, Yh = /\..*/, jh = /::\d+$/, vn = {};
let yr = 1;
const Kh = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, zh = /^(mouseenter|mouseleave)/i, Gl = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function ql(s, t) {
  return t && `${t}::${yr++}` || s.uidEvent || yr++;
}
function Zl(s) {
  const t = ql(s);
  return s.uidEvent = t, vn[t] = vn[t] || {}, vn[t];
}
function Uh(s, t) {
  return function e(i) {
    return i.delegateTarget = s, e.oneOff && c.off(s, i.type, t), t.apply(s, [i]);
  };
}
function Xh(s, t, e) {
  return function i(n) {
    const o = s.querySelectorAll(t);
    for (let { target: r } = n; r && r !== this; r = r.parentNode)
      for (let a = o.length; a--; "")
        if (o[a] === r)
          return n.delegateTarget = r, i.oneOff && c.off(s, n.type, e), e.apply(r, [n]);
    return null;
  };
}
function Ql(s, t, e = null) {
  const i = Object.keys(s);
  for (let n = 0, o = i.length; n < o; n++) {
    const r = s[i[n]];
    if (r.originalHandler === t && r.delegationSelector === e)
      return r;
  }
  return null;
}
function Jl(s, t, e) {
  const i = typeof t == "string", n = i ? e : t;
  let o = tc(s);
  return Gl.has(o) || (o = s), [i, n, o];
}
function wr(s, t, e, i, n) {
  if (typeof t != "string" || !s)
    return;
  if (e || (e = i, i = null), zh.test(t)) {
    const g = (m) => function(b) {
      if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
        return m.call(this, b);
    };
    i ? i = g(i) : e = g(e);
  }
  const [o, r, a] = Jl(
    t,
    e,
    i
  ), l = Zl(s), p = l[a] || (l[a] = {}), u = Ql(
    p,
    r,
    o ? e : null
  );
  if (u) {
    u.oneOff = u.oneOff && n;
    return;
  }
  const _ = ql(
    r,
    t.replace(Fh, "")
  ), f = o ? Xh(s, e, i) : Uh(s, e);
  f.delegationSelector = o ? e : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = _, p[_] = f, s.addEventListener(a, f, o);
}
function wo(s, t, e, i, n) {
  const o = Ql(t[e], i, n);
  o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
}
function Gh(s, t, e, i) {
  const n = t[e] || {};
  Object.keys(n).forEach((o) => {
    if (o.includes(i)) {
      const r = n[o];
      wo(
        s,
        t,
        e,
        r.originalHandler,
        r.delegationSelector
      );
    }
  });
}
function tc(s) {
  return s = s.replace(Yh, ""), Kh[s] || s;
}
const c = {
  on(s, t, e, i) {
    wr(s, t, e, i, !1);
  },
  one(s, t, e, i) {
    wr(s, t, e, i, !0);
  },
  off(s, t, e, i) {
    if (typeof t != "string" || !s)
      return;
    const [n, o, r] = Jl(
      t,
      e,
      i
    ), a = r !== t, l = Zl(s), p = t.startsWith(".");
    if (typeof o < "u") {
      if (!l || !l[r])
        return;
      wo(
        s,
        l,
        r,
        o,
        n ? e : null
      );
      return;
    }
    p && Object.keys(l).forEach((_) => {
      Gh(
        s,
        l,
        _,
        t.slice(1)
      );
    });
    const u = l[r] || {};
    Object.keys(u).forEach((_) => {
      const f = _.replace(jh, "");
      if (!a || t.includes(f)) {
        const g = u[_];
        wo(
          s,
          l,
          r,
          g.originalHandler,
          g.delegationSelector
        );
      }
    });
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s)
      return null;
    const i = Kl(), n = tc(t), o = t !== n, r = Gl.has(n);
    let a, l = !0, p = !0, u = !1, _ = null;
    return o && i && (a = i.Event(t, e), i(s).trigger(a), l = !a.isPropagationStopped(), p = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(n, l, !0)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), typeof e < "u" && Object.keys(e).forEach((f) => {
      Object.defineProperty(_, f, {
        get() {
          return e[f];
        }
      });
    }), u && _.preventDefault(), p && s.dispatchEvent(_), _.defaultPrevented && typeof a < "u" && a.preventDefault(), _;
  }
}, oe = {
  on(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      c.on(s, n[o], e, i);
  },
  off(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      c.off(s, n[o], e, i);
  }
}, qh = "5.1.3";
class gt {
  constructor(t) {
    t = Jt(t), t && (this._element = t, y.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    y.removeData(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, e, i = !0) {
    Ul(t, e, i);
  }
  /** Static */
  static getInstance(t) {
    return y.getData(Jt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return qh;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
}
const Zh = "button", Qh = "active";
class ec extends gt {
  // Getters
  static get NAME() {
    return Zh;
  }
  // Public
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(Qh)
    );
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ec.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
var Q = "top", ht = "bottom", dt = "right", J = "left", en = "auto", Qe = [Q, ht, dt, J], be = "start", Ye = "end", ic = "clippingParents", Xo = "viewport", Ie = "popper", sc = "reference", ko = /* @__PURE__ */ Qe.reduce(function(s, t) {
  return s.concat([t + "-" + be, t + "-" + Ye]);
}, []), Go = /* @__PURE__ */ [].concat(Qe, [en]).reduce(function(s, t) {
  return s.concat([t, t + "-" + be, t + "-" + Ye]);
}, []), nc = "beforeRead", oc = "read", rc = "afterRead", ac = "beforeMain", lc = "main", cc = "afterMain", hc = "beforeWrite", dc = "write", uc = "afterWrite", pc = [nc, oc, rc, ac, lc, cc, hc, dc, uc];
function Nt(s) {
  return s ? (s.nodeName || "").toLowerCase() : null;
}
function ut(s) {
  if (s == null)
    return window;
  if (s.toString() !== "[object Window]") {
    var t = s.ownerDocument;
    return t && t.defaultView || window;
  }
  return s;
}
function ve(s) {
  var t = ut(s).Element;
  return s instanceof t || s instanceof Element;
}
function mt(s) {
  var t = ut(s).HTMLElement;
  return s instanceof t || s instanceof HTMLElement;
}
function qo(s) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ut(s).ShadowRoot;
  return s instanceof t || s instanceof ShadowRoot;
}
function Jh(s) {
  var t = s.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
    !mt(o) || !Nt(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(r) {
      var a = n[r];
      a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? "" : a);
    }));
  });
}
function td(s) {
  var t = s.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var n = t.elements[i], o = t.attributes[i] || {}, r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = r.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !mt(n) || !Nt(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
const Zo = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Jh,
  effect: td,
  requires: ["computeStyles"]
};
function Lt(s) {
  return s.split("-")[0];
}
var me = Math.max, Qs = Math.min, je = Math.round;
function xo() {
  var s = navigator.userAgentData;
  return s != null && s.brands && Array.isArray(s.brands) ? s.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _c() {
  return !/^((?!chrome|android).)*safari/i.test(xo());
}
function Ke(s, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var i = s.getBoundingClientRect(), n = 1, o = 1;
  t && mt(s) && (n = s.offsetWidth > 0 && je(i.width) / s.offsetWidth || 1, o = s.offsetHeight > 0 && je(i.height) / s.offsetHeight || 1);
  var r = ve(s) ? ut(s) : window, a = r.visualViewport, l = !_c() && e, p = (i.left + (l && a ? a.offsetLeft : 0)) / n, u = (i.top + (l && a ? a.offsetTop : 0)) / o, _ = i.width / n, f = i.height / o;
  return {
    width: _,
    height: f,
    top: u,
    right: p + _,
    bottom: u + f,
    left: p,
    x: p,
    y: u
  };
}
function Qo(s) {
  var t = Ke(s), e = s.offsetWidth, i = s.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: s.offsetLeft,
    y: s.offsetTop,
    width: e,
    height: i
  };
}
function fc(s, t) {
  var e = t.getRootNode && t.getRootNode();
  if (s.contains(t))
    return !0;
  if (e && qo(e)) {
    var i = t;
    do {
      if (i && s.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Pt(s) {
  return ut(s).getComputedStyle(s);
}
function ed(s) {
  return ["table", "td", "th"].indexOf(Nt(s)) >= 0;
}
function te(s) {
  return ((ve(s) ? s.ownerDocument : (
    // $FlowFixMe[prop-missing]
    s.document
  )) || window.document).documentElement;
}
function sn(s) {
  return Nt(s) === "html" ? s : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    s.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    s.parentNode || // DOM Element detected
    (qo(s) ? s.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    te(s)
  );
}
function kr(s) {
  return !mt(s) || // https://github.com/popperjs/popper-core/issues/837
  Pt(s).position === "fixed" ? null : s.offsetParent;
}
function id(s) {
  var t = /firefox/i.test(xo()), e = /Trident/i.test(xo());
  if (e && mt(s)) {
    var i = Pt(s);
    if (i.position === "fixed")
      return null;
  }
  var n = sn(s);
  for (qo(n) && (n = n.host); mt(n) && ["html", "body"].indexOf(Nt(n)) < 0; ) {
    var o = Pt(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function Pi(s) {
  for (var t = ut(s), e = kr(s); e && ed(e) && Pt(e).position === "static"; )
    e = kr(e);
  return e && (Nt(e) === "html" || Nt(e) === "body" && Pt(e).position === "static") ? t : e || id(s) || t;
}
function Jo(s) {
  return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
}
function xi(s, t, e) {
  return me(s, Qs(t, e));
}
function sd(s, t, e) {
  var i = xi(s, t, e);
  return i > e ? e : i;
}
function mc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gc(s) {
  return Object.assign({}, mc(), s);
}
function bc(s, t) {
  return t.reduce(function(e, i) {
    return e[i] = s, e;
  }, {});
}
var nd = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, gc(typeof t != "number" ? t : bc(t, Qe));
};
function od(s) {
  var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = Lt(e.placement), l = Jo(a), p = [J, dt].indexOf(a) >= 0, u = p ? "height" : "width";
  if (!(!o || !r)) {
    var _ = nd(n.padding, e), f = Qo(o), g = l === "y" ? Q : J, m = l === "y" ? ht : dt, b = e.rects.reference[u] + e.rects.reference[l] - r[l] - e.rects.popper[u], v = r[l] - e.rects.reference[l], E = Pi(o), w = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, C = b / 2 - v / 2, T = _[g], A = w - f[u] - _[m], k = w / 2 - f[u] / 2 + C, S = xi(T, k, A), O = l;
    e.modifiersData[i] = (t = {}, t[O] = S, t.centerOffset = S - k, t);
  }
}
function rd(s) {
  var t = s.state, e = s.options, i = e.element, n = i === void 0 ? "[data-popper-arrow]" : i;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || fc(t.elements.popper, n) && (t.elements.arrow = n));
}
const vc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: od,
  effect: rd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ze(s) {
  return s.split("-")[1];
}
var ad = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ld(s, t) {
  var e = s.x, i = s.y, n = t.devicePixelRatio || 1;
  return {
    x: je(e * n) / n || 0,
    y: je(i * n) / n || 0
  };
}
function xr(s) {
  var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, r = s.offsets, a = s.position, l = s.gpuAcceleration, p = s.adaptive, u = s.roundOffsets, _ = s.isFixed, f = r.x, g = f === void 0 ? 0 : f, m = r.y, b = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: g,
    y: b
  }) : {
    x: g,
    y: b
  };
  g = v.x, b = v.y;
  var E = r.hasOwnProperty("x"), w = r.hasOwnProperty("y"), C = J, T = Q, A = window;
  if (p) {
    var k = Pi(e), S = "clientHeight", O = "clientWidth";
    if (k === ut(e) && (k = te(e), Pt(k).position !== "static" && a === "absolute" && (S = "scrollHeight", O = "scrollWidth")), k = k, n === Q || (n === J || n === dt) && o === Ye) {
      T = ht;
      var x = _ && k === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[S]
      );
      b -= x - i.height, b *= l ? 1 : -1;
    }
    if (n === J || (n === Q || n === ht) && o === Ye) {
      C = dt;
      var L = _ && k === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[O]
      );
      g -= L - i.width, g *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: a
  }, p && ad), M = u === !0 ? ld({
    x: g,
    y: b
  }, ut(e)) : {
    x: g,
    y: b
  };
  if (g = M.x, b = M.y, l) {
    var P;
    return Object.assign({}, $, (P = {}, P[T] = w ? "0" : "", P[C] = E ? "0" : "", P.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, $, (t = {}, t[T] = w ? b + "px" : "", t[C] = E ? g + "px" : "", t.transform = "", t));
}
function cd(s) {
  var t = s.state, e = s.options, i = e.gpuAcceleration, n = i === void 0 ? !0 : i, o = e.adaptive, r = o === void 0 ? !0 : o, a = e.roundOffsets, l = a === void 0 ? !0 : a, p = {
    placement: Lt(t.placement),
    variation: ze(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, xr(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, xr(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const tr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cd,
  data: {}
};
var Zi = {
  passive: !0
};
function hd(s) {
  var t = s.state, e = s.instance, i = s.options, n = i.scroll, o = n === void 0 ? !0 : n, r = i.resize, a = r === void 0 ? !0 : r, l = ut(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(u) {
    u.addEventListener("scroll", e.update, Zi);
  }), a && l.addEventListener("resize", e.update, Zi), function() {
    o && p.forEach(function(u) {
      u.removeEventListener("scroll", e.update, Zi);
    }), a && l.removeEventListener("resize", e.update, Zi);
  };
}
const er = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hd,
  data: {}
};
var dd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $s(s) {
  return s.replace(/left|right|bottom|top/g, function(t) {
    return dd[t];
  });
}
var ud = {
  start: "end",
  end: "start"
};
function Or(s) {
  return s.replace(/start|end/g, function(t) {
    return ud[t];
  });
}
function ir(s) {
  var t = ut(s), e = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: i
  };
}
function sr(s) {
  return Ke(te(s)).left + ir(s).scrollLeft;
}
function pd(s, t) {
  var e = ut(s), i = te(s), n = e.visualViewport, o = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    o = n.width, r = n.height;
    var p = _c();
    (p || !p && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a + sr(s),
    y: l
  };
}
function _d(s) {
  var t, e = te(s), i = ir(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = me(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = me(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + sr(s), l = -i.scrollTop;
  return Pt(n || e).direction === "rtl" && (a += me(e.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function nr(s) {
  var t = Pt(s), e = t.overflow, i = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + i);
}
function Tc(s) {
  return ["html", "body", "#document"].indexOf(Nt(s)) >= 0 ? s.ownerDocument.body : mt(s) && nr(s) ? s : Tc(sn(s));
}
function Oi(s, t) {
  var e;
  t === void 0 && (t = []);
  var i = Tc(s), n = i === ((e = s.ownerDocument) == null ? void 0 : e.body), o = ut(i), r = n ? [o].concat(o.visualViewport || [], nr(i) ? i : []) : i, a = t.concat(r);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Oi(sn(r)))
  );
}
function Oo(s) {
  return Object.assign({}, s, {
    left: s.x,
    top: s.y,
    right: s.x + s.width,
    bottom: s.y + s.height
  });
}
function fd(s, t) {
  var e = Ke(s, !1, t === "fixed");
  return e.top = e.top + s.clientTop, e.left = e.left + s.clientLeft, e.bottom = e.top + s.clientHeight, e.right = e.left + s.clientWidth, e.width = s.clientWidth, e.height = s.clientHeight, e.x = e.left, e.y = e.top, e;
}
function Sr(s, t, e) {
  return t === Xo ? Oo(pd(s, e)) : ve(t) ? fd(t, e) : Oo(_d(te(s)));
}
function md(s) {
  var t = Oi(sn(s)), e = ["absolute", "fixed"].indexOf(Pt(s).position) >= 0, i = e && mt(s) ? Pi(s) : s;
  return ve(i) ? t.filter(function(n) {
    return ve(n) && fc(n, i) && Nt(n) !== "body";
  }) : [];
}
function gd(s, t, e, i) {
  var n = t === "clippingParents" ? md(s) : [].concat(t), o = [].concat(n, [e]), r = o[0], a = o.reduce(function(l, p) {
    var u = Sr(s, p, i);
    return l.top = me(u.top, l.top), l.right = Qs(u.right, l.right), l.bottom = Qs(u.bottom, l.bottom), l.left = me(u.left, l.left), l;
  }, Sr(s, r, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ec(s) {
  var t = s.reference, e = s.element, i = s.placement, n = i ? Lt(i) : null, o = i ? ze(i) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (n) {
    case Q:
      l = {
        x: r,
        y: t.y - e.height
      };
      break;
    case ht:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case dt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case J:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var p = n ? Jo(n) : null;
  if (p != null) {
    var u = p === "y" ? "height" : "width";
    switch (o) {
      case be:
        l[p] = l[p] - (t[u] / 2 - e[u] / 2);
        break;
      case Ye:
        l[p] = l[p] + (t[u] / 2 - e[u] / 2);
        break;
    }
  }
  return l;
}
function Ue(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = i === void 0 ? s.placement : i, o = e.strategy, r = o === void 0 ? s.strategy : o, a = e.boundary, l = a === void 0 ? ic : a, p = e.rootBoundary, u = p === void 0 ? Xo : p, _ = e.elementContext, f = _ === void 0 ? Ie : _, g = e.altBoundary, m = g === void 0 ? !1 : g, b = e.padding, v = b === void 0 ? 0 : b, E = gc(typeof v != "number" ? v : bc(v, Qe)), w = f === Ie ? sc : Ie, C = s.rects.popper, T = s.elements[m ? w : f], A = gd(ve(T) ? T : T.contextElement || te(s.elements.popper), l, u, r), k = Ke(s.elements.reference), S = Ec({
    reference: k,
    element: C,
    strategy: "absolute",
    placement: n
  }), O = Oo(Object.assign({}, C, S)), x = f === Ie ? O : k, L = {
    top: A.top - x.top + E.top,
    bottom: x.bottom - A.bottom + E.bottom,
    left: A.left - x.left + E.left,
    right: x.right - A.right + E.right
  }, $ = s.modifiersData.offset;
  if (f === Ie && $) {
    var M = $[n];
    Object.keys(L).forEach(function(P) {
      var tt = [dt, ht].indexOf(P) >= 0 ? 1 : -1, et = [Q, ht].indexOf(P) >= 0 ? "y" : "x";
      L[P] += M[et] * tt;
    });
  }
  return L;
}
function bd(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, p = l === void 0 ? Go : l, u = ze(i), _ = u ? a ? ko : ko.filter(function(m) {
    return ze(m) === u;
  }) : Qe, f = _.filter(function(m) {
    return p.indexOf(m) >= 0;
  });
  f.length === 0 && (f = _);
  var g = f.reduce(function(m, b) {
    return m[b] = Ue(s, {
      placement: b,
      boundary: n,
      rootBoundary: o,
      padding: r
    })[Lt(b)], m;
  }, {});
  return Object.keys(g).sort(function(m, b) {
    return g[m] - g[b];
  });
}
function vd(s) {
  if (Lt(s) === en)
    return [];
  var t = $s(s);
  return [Or(s), t, Or(t)];
}
function Td(s) {
  var t = s.state, e = s.options, i = s.name;
  if (!t.modifiersData[i]._skip) {
    for (var n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !0 : r, l = e.fallbackPlacements, p = e.padding, u = e.boundary, _ = e.rootBoundary, f = e.altBoundary, g = e.flipVariations, m = g === void 0 ? !0 : g, b = e.allowedAutoPlacements, v = t.options.placement, E = Lt(v), w = E === v, C = l || (w || !m ? [$s(v)] : vd(v)), T = [v].concat(C).reduce(function(Ce, Ht) {
      return Ce.concat(Lt(Ht) === en ? bd(t, {
        placement: Ht,
        boundary: u,
        rootBoundary: _,
        padding: p,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : Ht);
    }, []), A = t.rects.reference, k = t.rects.popper, S = /* @__PURE__ */ new Map(), O = !0, x = T[0], L = 0; L < T.length; L++) {
      var $ = T[L], M = Lt($), P = ze($) === be, tt = [Q, ht].indexOf(M) >= 0, et = tt ? "width" : "height", U = Ue(t, {
        placement: $,
        boundary: u,
        rootBoundary: _,
        altBoundary: f,
        padding: p
      }), bt = tt ? P ? dt : J : P ? ht : Q;
      A[et] > k[et] && (bt = $s(bt));
      var zi = $s(bt), ie = [];
      if (o && ie.push(U[M] <= 0), a && ie.push(U[bt] <= 0, U[zi] <= 0), ie.every(function(Ce) {
        return Ce;
      })) {
        x = $, O = !1;
        break;
      }
      S.set($, ie);
    }
    if (O)
      for (var Ui = m ? 3 : 1, pn = function(Ht) {
        var ni = T.find(function(Gi) {
          var se = S.get(Gi);
          if (se)
            return se.slice(0, Ht).every(function(_n) {
              return _n;
            });
        });
        if (ni)
          return x = ni, "break";
      }, si = Ui; si > 0; si--) {
        var Xi = pn(si);
        if (Xi === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[i]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const Cc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Td,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ir(s, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: s.top - t.height - e.y,
    right: s.right - t.width + e.x,
    bottom: s.bottom - t.height + e.y,
    left: s.left - t.width - e.x
  };
}
function Dr(s) {
  return [Q, dt, ht, J].some(function(t) {
    return s[t] >= 0;
  });
}
function Ed(s) {
  var t = s.state, e = s.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = Ue(t, {
    elementContext: "reference"
  }), a = Ue(t, {
    altBoundary: !0
  }), l = Ir(r, i), p = Ir(a, n, o), u = Dr(l), _ = Dr(p);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: u,
    hasPopperEscaped: _
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": _
  });
}
const Ac = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ed
};
function Cd(s, t, e) {
  var i = Lt(s), n = [J, Q].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
    placement: s
  })) : e, r = o[0], a = o[1];
  return r = r || 0, a = (a || 0) * n, [J, dt].indexOf(i) >= 0 ? {
    x: a,
    y: r
  } : {
    x: r,
    y: a
  };
}
function Ad(s) {
  var t = s.state, e = s.options, i = s.name, n = e.offset, o = n === void 0 ? [0, 0] : n, r = Go.reduce(function(u, _) {
    return u[_] = Cd(_, t.rects, o), u;
  }, {}), a = r[t.placement], l = a.x, p = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = r;
}
const yc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ad
};
function yd(s) {
  var t = s.state, e = s.name;
  t.modifiersData[e] = Ec({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const or = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yd,
  data: {}
};
function wd(s) {
  return s === "x" ? "y" : "x";
}
function kd(s) {
  var t = s.state, e = s.options, i = s.name, n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !1 : r, l = e.boundary, p = e.rootBoundary, u = e.altBoundary, _ = e.padding, f = e.tether, g = f === void 0 ? !0 : f, m = e.tetherOffset, b = m === void 0 ? 0 : m, v = Ue(t, {
    boundary: l,
    rootBoundary: p,
    padding: _,
    altBoundary: u
  }), E = Lt(t.placement), w = ze(t.placement), C = !w, T = Jo(E), A = wd(T), k = t.modifiersData.popperOffsets, S = t.rects.reference, O = t.rects.popper, x = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (k) {
    if (o) {
      var P, tt = T === "y" ? Q : J, et = T === "y" ? ht : dt, U = T === "y" ? "height" : "width", bt = k[T], zi = bt + v[tt], ie = bt - v[et], Ui = g ? -O[U] / 2 : 0, pn = w === be ? S[U] : O[U], si = w === be ? -O[U] : -S[U], Xi = t.elements.arrow, Ce = g && Xi ? Qo(Xi) : {
        width: 0,
        height: 0
      }, Ht = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mc(), ni = Ht[tt], Gi = Ht[et], se = xi(0, S[U], Ce[U]), _n = C ? S[U] / 2 - Ui - se - ni - L.mainAxis : pn - se - ni - L.mainAxis, Sh = C ? -S[U] / 2 + Ui + se + Gi + L.mainAxis : si + se + Gi + L.mainAxis, fn = t.elements.arrow && Pi(t.elements.arrow), Ih = fn ? T === "y" ? fn.clientTop || 0 : fn.clientLeft || 0 : 0, fr = (P = $ == null ? void 0 : $[T]) != null ? P : 0, Dh = bt + _n - fr - Ih, $h = bt + Sh - fr, mr = xi(g ? Qs(zi, Dh) : zi, bt, g ? me(ie, $h) : ie);
      k[T] = mr, M[T] = mr - bt;
    }
    if (a) {
      var gr, Lh = T === "x" ? Q : J, Nh = T === "x" ? ht : dt, ne = k[A], qi = A === "y" ? "height" : "width", br = ne + v[Lh], vr = ne - v[Nh], mn = [Q, J].indexOf(E) !== -1, Tr = (gr = $ == null ? void 0 : $[A]) != null ? gr : 0, Er = mn ? br : ne - S[qi] - O[qi] - Tr + L.altAxis, Cr = mn ? ne + S[qi] + O[qi] - Tr - L.altAxis : vr, Ar = g && mn ? sd(Er, ne, Cr) : xi(g ? Er : br, ne, g ? Cr : vr);
      k[A] = Ar, M[A] = Ar - ne;
    }
    t.modifiersData[i] = M;
  }
}
const wc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: kd,
  requiresIfExists: ["offset"]
};
function xd(s) {
  return {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  };
}
function Od(s) {
  return s === ut(s) || !mt(s) ? ir(s) : xd(s);
}
function Sd(s) {
  var t = s.getBoundingClientRect(), e = je(t.width) / s.offsetWidth || 1, i = je(t.height) / s.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
function Id(s, t, e) {
  e === void 0 && (e = !1);
  var i = mt(t), n = mt(t) && Sd(t), o = te(t), r = Ke(s, n, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !e) && ((Nt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  nr(o)) && (a = Od(t)), mt(t) ? (l = Ke(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = sr(o))), {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Dd(s) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  s.forEach(function(o) {
    t.set(o.name, o);
  });
  function n(o) {
    e.add(o.name);
    var r = [].concat(o.requires || [], o.requiresIfExists || []);
    r.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && n(l);
      }
    }), i.push(o);
  }
  return s.forEach(function(o) {
    e.has(o.name) || n(o);
  }), i;
}
function $d(s) {
  var t = Dd(s);
  return pc.reduce(function(e, i) {
    return e.concat(t.filter(function(n) {
      return n.phase === i;
    }));
  }, []);
}
function Ld(s) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(s());
      });
    })), t;
  };
}
function Nd(s) {
  var t = s.reduce(function(e, i) {
    var n = e[i.name];
    return e[i.name] = n ? Object.assign({}, n, i, {
      options: Object.assign({}, n.options, i.options),
      data: Object.assign({}, n.data, i.data)
    }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var $r = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Lr() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function nn(s) {
  s === void 0 && (s = {});
  var t = s, e = t.defaultModifiers, i = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? $r : n;
  return function(a, l, p) {
    p === void 0 && (p = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $r, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, _ = [], f = !1, g = {
      state: u,
      setOptions: function(E) {
        var w = typeof E == "function" ? E(u.options) : E;
        b(), u.options = Object.assign({}, o, u.options, w), u.scrollParents = {
          reference: ve(a) ? Oi(a) : a.contextElement ? Oi(a.contextElement) : [],
          popper: Oi(l)
        };
        var C = $d(Nd([].concat(i, u.options.modifiers)));
        return u.orderedModifiers = C.filter(function(T) {
          return T.enabled;
        }), m(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var E = u.elements, w = E.reference, C = E.popper;
          if (Lr(w, C)) {
            u.rects = {
              reference: Id(w, Pi(C), u.options.strategy === "fixed"),
              popper: Qo(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(L) {
              return u.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var T = 0; T < u.orderedModifiers.length; T++) {
              if (u.reset === !0) {
                u.reset = !1, T = -1;
                continue;
              }
              var A = u.orderedModifiers[T], k = A.fn, S = A.options, O = S === void 0 ? {} : S, x = A.name;
              typeof k == "function" && (u = k({
                state: u,
                options: O,
                name: x,
                instance: g
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ld(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Lr(a, l))
      return g;
    g.setOptions(p).then(function(v) {
      !f && p.onFirstUpdate && p.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var E = v.name, w = v.options, C = w === void 0 ? {} : w, T = v.effect;
        if (typeof T == "function") {
          var A = T({
            state: u,
            name: E,
            instance: g,
            options: C
          }), k = function() {
          };
          _.push(A || k);
        }
      });
    }
    function b() {
      _.forEach(function(v) {
        return v();
      }), _ = [];
    }
    return g;
  };
}
var Md = /* @__PURE__ */ nn(), Rd = [er, or, tr, Zo], Pd = /* @__PURE__ */ nn({
  defaultModifiers: Rd
}), Bd = [er, or, tr, Zo, yc, Cc, wc, vc, Ac], Te = /* @__PURE__ */ nn({
  defaultModifiers: Bd
});
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: cc,
  afterRead: rc,
  afterWrite: uc,
  applyStyles: Zo,
  arrow: vc,
  auto: en,
  basePlacements: Qe,
  beforeMain: ac,
  beforeRead: nc,
  beforeWrite: hc,
  bottom: ht,
  clippingParents: ic,
  computeStyles: tr,
  createPopper: Te,
  createPopperBase: Md,
  createPopperLite: Pd,
  detectOverflow: Ue,
  end: Ye,
  eventListeners: er,
  flip: Cc,
  hide: Ac,
  left: J,
  main: lc,
  modifierPhases: pc,
  offset: yc,
  placements: Go,
  popper: Ie,
  popperGenerator: nn,
  popperOffsets: or,
  preventOverflow: wc,
  read: oc,
  reference: sc,
  right: dt,
  start: be,
  top: Q,
  variationPlacements: ko,
  viewport: Xo,
  write: dc
}, Symbol.toStringTag, { value: "Module" }));
function Tn(s) {
  return s === "true" ? !0 : s === "false" ? !1 : s === Number(s).toString() ? Number(s) : s === "" || s === "null" ? null : s;
}
function En(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const h = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-te-${En(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-te-${En(t)}`);
  },
  getDataAttributes(s) {
    if (!s)
      return {};
    const t = {};
    return Object.keys(s.dataset).filter((e) => e.startsWith("te")).forEach((e) => {
      if (e.startsWith("teClass"))
        return;
      let i = e.replace(/^te/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Tn(s.dataset[e]);
    }), t;
  },
  getDataClassAttributes(s) {
    if (!s)
      return {};
    const t = {
      ...s.dataset
    };
    return Object.keys(t).filter((e) => e.startsWith("teClass")).forEach((e) => {
      let i = e.replace(/^teClass/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Tn(t[e]);
    }), t;
  },
  getDataAttribute(s, t) {
    return Tn(
      s.getAttribute(`data-te-${En(t)}`)
    );
  },
  offset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(s) {
    return {
      top: s.offsetTop,
      left: s.offsetLeft
    };
  },
  style(s, t) {
    Object.assign(s.style, t);
  },
  toggleClass(s, t) {
    s && Cn(t).forEach((e) => {
      s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e);
    });
  },
  addClass(s, t) {
    Cn(t).forEach(
      (e) => !s.classList.contains(e) && s.classList.add(e)
    );
  },
  addStyle(s, t) {
    Object.keys(t).forEach((e) => {
      s.style[e] = t[e];
    });
  },
  removeClass(s, t) {
    Cn(t).forEach(
      (e) => s.classList.contains(e) && s.classList.remove(e)
    );
  },
  hasClass(s, t) {
    return s.classList.contains(t);
  },
  maxOffset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function Cn(s) {
  return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : !1;
}
const Hd = 3, d = {
  closest(s, t) {
    return s.closest(t);
  },
  matches(s, t) {
    return s.matches(t);
  },
  find(s, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, s)
    );
  },
  findOne(s, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, s);
  },
  children(s, t) {
    return [].concat(...s.children).filter((i) => i.matches(t));
  },
  parents(s, t) {
    const e = [];
    let i = s.parentNode;
    for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== Hd; )
      this.matches(i, t) && e.push(i), i = i.parentNode;
    return e;
  },
  prev(s, t) {
    let e = s.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  next(s, t) {
    let e = s.nextElementSibling;
    for (; e; ) {
      if (this.matches(e, t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(s) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
    return this.find(t, s).filter(
      (e) => !fe(e) && $t(e)
    );
  }
}, An = "dropdown", Vd = "te.dropdown", Ee = `.${Vd}`, rr = ".data-api", Ls = "Escape", Nr = "Space", Mr = "Tab", So = "ArrowUp", Ns = "ArrowDown", Wd = 2, Fd = new RegExp(
  `${So}|${Ns}|${Ls}`
), Yd = `hide${Ee}`, jd = `hidden${Ee}`, Kd = `show${Ee}`, zd = `shown${Ee}`, Ud = `click${Ee}${rr}`, Rr = `keydown${Ee}${rr}`, Xd = `keyup${Ee}${rr}`, Vt = "show", Gd = "dropup", qd = "dropend", Zd = "dropstart", Qd = "[data-te-navbar-ref]", Qi = "[data-te-dropdown-toggle-ref]", yn = "[data-te-dropdown-menu-ref]", Jd = "[data-te-navbar-nav-ref]", tu = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)", eu = F() ? "top-end" : "top-start", iu = F() ? "top-start" : "top-end", su = F() ? "bottom-end" : "bottom-start", nu = F() ? "bottom-start" : "bottom-end", ou = F() ? "left-start" : "right-start", ru = F() ? "right-start" : "left-start", au = [{ opacity: "0" }, { opacity: "1" }], lu = [{ opacity: "1" }, { opacity: "0" }], Ji = {
  duration: 550,
  iterations: 1,
  easing: "ease",
  fill: "both"
}, cu = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0,
  dropdownAnimation: "on"
}, hu = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string"
};
class St extends gt {
  constructor(t, e) {
    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const i = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !i, this._didInit = !1, this._init();
  }
  // Getters
  static get Default() {
    return cu;
  }
  static get DefaultType() {
    return hu;
  }
  static get NAME() {
    return An;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (fe(this._element) || this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    if (c.trigger(
      this._element,
      Kd,
      t
    ).defaultPrevented)
      return;
    const i = St.getParentFromElement(this._element);
    this._inNavbar ? h.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(Jd) && [].concat(...document.body.children).forEach((n) => c.on(n, "mouseover", Zs)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.setAttribute(`data-te-dropdown-${Vt}`, ""), this._animationCanPlay && this._menu.animate(au, Ji), this._element.setAttribute(`data-te-dropdown-${Vt}`, ""), setTimeout(
      () => {
        c.trigger(this._element, zd, t);
      },
      this._animationCanPlay ? Ji.duration : 0
    );
  }
  hide() {
    if (fe(this._element) || !this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      Rr,
      Qi,
      St.dataApiKeydownHandler
    ), c.on(
      document,
      Rr,
      yn,
      St.dataApiKeydownHandler
    ), c.on(document, Ud, St.clearMenus), c.on(document, Xd, St.clearMenus), this._didInit = !0);
  }
  _completeHide(t) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || c.trigger(
      this._element,
      Yd,
      t
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((i) => c.off(i, "mouseover", Zs)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(
      lu,
      Ji
    )), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Vt}`), this._element.removeAttribute(`data-te-dropdown-${Vt}`), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), c.trigger(this._element, jd, t);
      },
      this._animationCanPlay ? Ji.duration : 0
    ));
  }
  _getConfig(t) {
    if (t = {
      ...this.constructor.Default,
      ...h.getDataAttributes(this._element),
      ...t
    }, I(An, t, this.constructor.DefaultType), typeof t.reference == "object" && !Fe(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${An.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof kc > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    this._config.reference === "parent" ? e = t : Fe(this._config.reference) ? e = Jt(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const i = this._getPopperConfig(), n = i.modifiers.find(
      (o) => o.name === "applyStyles" && o.enabled === !1
    );
    this._popper = Te(
      e,
      this._menu,
      i
    ), n && h.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.dataset[`teDropdown${Vt.charAt(0).toUpperCase() + Vt.slice(1)}`] === "";
  }
  _getMenuElement() {
    return d.next(this._element, yn)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.dataset.teDropdownPosition === qd)
      return ou;
    if (t.dataset.teDropdownPosition === Zd)
      return ru;
    const e = t.dataset.teDropdownAlignment === "end";
    return t.dataset.teDropdownPosition === Gd ? e ? iu : eu : e ? nu : su;
  }
  _detectNavbar() {
    return this._element.closest(Qd) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (t.modifiers = [
      {
        name: "applyStyles",
        enabled: !1
      }
    ]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({ key: t, target: e }) {
    const i = d.find(
      tu,
      this._menu
    ).filter($t);
    i.length && Xl(
      i,
      e,
      t === Ns,
      !i.includes(e)
    ).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = St.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === Wd || t.type === "keyup" && t.key !== Mr))
      return;
    const e = d.find(Qi);
    for (let i = 0, n = e.length; i < n; i++) {
      const o = St.getInstance(e[i]);
      if (!o || o._config.autoClose === !1 || !o._isShown())
        continue;
      const r = {
        relatedTarget: o._element
      };
      if (t) {
        const a = t.composedPath(), l = a.includes(o._menu);
        if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Mr || /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        t.type === "click" && (r.clickEvent = t);
      }
      o._completeHide(r);
    }
  }
  static getParentFromElement(t) {
    return Qt(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (/input|textarea/i.test(t.target.tagName) ? t.key === Nr || t.key !== Ls && (t.key !== Ns && t.key !== So || t.target.closest(yn)) : !Fd.test(t.key))
      return;
    const e = this.dataset[`teDropdown${Vt.charAt(0).toUpperCase() + Vt.slice(1)}`] === "";
    if (!e && t.key === Ls || (t.preventDefault(), t.stopPropagation(), fe(this)))
      return;
    const i = this.matches(Qi) ? this : d.prev(this, Qi)[0], n = St.getOrCreateInstance(i);
    if (t.key === Ls) {
      n.hide();
      return;
    }
    if (t.key === So || t.key === Ns) {
      e || n.show(), n._selectMenuItem(t);
      return;
    }
    (!e || t.key === Nr) && St.clearMenus();
  }
}
const wn = "collapse", xc = "te.collapse", on = `.${xc}`, Pr = {
  toggle: !0,
  parent: null
}, du = {
  toggle: "boolean",
  parent: "(null|element)"
}, uu = `show${on}`, pu = `shown${on}`, _u = `hide${on}`, fu = `hidden${on}`, kn = "data-te-collapse-show", Br = "data-te-collapse-collapsed", ts = "data-te-collapse-collapsing", mu = "data-te-collapse-horizontal", Le = "data-te-collapse-item", Hr = `:scope [${Le}] [${Le}]`, gu = "width", bu = "height", vu = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Vr = "[data-te-collapse-init]", Tu = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, Eu = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class qt extends gt {
  constructor(t, e, i) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._triggerArray = [];
    const n = d.find(Vr);
    for (let o = 0, r = n.length; o < r; o++) {
      const a = n[o], l = Uo(a), p = d.find(l).filter(
        (u) => u === this._element
      );
      l !== null && p.length && (this._selector = l, this._triggerArray.push(a));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Pr;
  }
  static get NAME() {
    return wn;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], e;
    if (this._config.parent) {
      const u = d.find(
        Hr,
        this._config.parent
      );
      t = d.find(
        vu,
        this._config.parent
      ).filter((_) => !u.includes(_));
    }
    const i = d.findOne(this._selector);
    if (t.length) {
      const u = t.find((_) => i !== _);
      if (e = u ? qt.getInstance(u) : null, e && e._isTransitioning)
        return;
    }
    if (c.trigger(this._element, uu).defaultPrevented)
      return;
    t.forEach((u) => {
      i !== u && qt.getOrCreateInstance(u, { toggle: !1 }).hide(), e || y.setData(u, xc, null);
    });
    const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), h.addClass(this._element, r), this._element.removeAttribute(Le), this._element.setAttribute(ts, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, h.removeClass(this._element, this._classes.hidden), h.removeClass(this._element, r), h.addClass(this._element, this._classes.visible), this._element.removeAttribute(ts), this._element.setAttribute(Le, ""), this._element.setAttribute(kn, ""), this._element.style[o] = "", c.trigger(this._element, pu);
    }, p = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(a, this._element, !0), this._element.style[o] = `${this._element[p]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || c.trigger(this._element, _u).defaultPrevented)
      return;
    const e = this._getDimension(), i = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Ze(this._element), h.addClass(this._element, i), h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), this._element.setAttribute(ts, ""), this._element.removeAttribute(Le), this._element.removeAttribute(kn);
    const n = this._triggerArray.length;
    for (let r = 0; r < n; r++) {
      const a = this._triggerArray[r], l = Qt(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, h.removeClass(this._element, i), h.addClass(this._element, this._classes.visible), h.addClass(this._element, this._classes.hidden), this._element.removeAttribute(ts), this._element.setAttribute(Le, ""), c.trigger(this._element, fu);
    };
    this._element.style[e] = "", this._queueCallback(o, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(kn);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Pr,
      ...h.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = Jt(t.parent), I(wn, t, du), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Tu,
      ...e,
      ...t
    }, I(wn, t, Eu), t;
  }
  _getDimension() {
    return this._element.hasAttribute(mu) ? gu : bu;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = d.find(
      Hr,
      this._config.parent
    );
    d.find(Vr, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
      const i = Qt(e);
      i && this._addAriaAndCollapsedClass([e], this._isShown(i));
    });
  }
  _addAriaAndCollapsedClass(t, e) {
    t.length && t.forEach((i) => {
      e ? i.removeAttribute(Br) : i.setAttribute(`${Br}`, ""), i.setAttribute("aria-expanded", e);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = {};
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1);
      const i = qt.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    });
  }
}
const Wr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Fr = ".sticky-top";
class Xe {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(
      this._element,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      Wr,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      Fr,
      "marginRight",
      (e) => e - t
    );
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, i) {
    const n = this.getWidth(), o = (r) => {
      if (r !== this._element && window.innerWidth > r.clientWidth + n)
        return;
      this._saveInitialAttribute(r, e);
      const a = window.getComputedStyle(r)[e];
      r.style[e] = `${i(
        Number.parseFloat(a)
      )}px`;
    };
    this._applyManipulationCallback(t, o);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Wr, "paddingRight"), this._resetElementAttributes(Fr, "marginRight");
  }
  _saveInitialAttribute(t, e) {
    const i = t.style[e];
    i && h.setDataAttribute(t, e, i);
  }
  _resetElementAttributes(t, e) {
    const i = (n) => {
      const o = h.getDataAttribute(n, e);
      typeof o > "u" ? n.style.removeProperty(e) : (h.removeDataAttribute(n, e), n.style[e] = o);
    };
    this._applyManipulationCallback(t, i);
  }
  _applyManipulationCallback(t, e) {
    Fe(t) ? e(t) : d.find(t, this._element).forEach(e);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
}
const Cu = {
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: !1,
  rootElement: "body",
  // give the choice to place backdrop under different elements
  clickCallback: null,
  backdropClasses: null
}, Au = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)",
  backdropClasses: "(array|null)"
}, Oc = "backdrop", Yr = `mousedown.te.${Oc}`;
class ar {
  constructor(t) {
    this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  show(t) {
    if (!this._config.isVisible) {
      _e(t);
      return;
    }
    this._append(), this._config.isAnimated && Ze(this._getElement());
    const e = this._config.backdropClasses || [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "fixed",
      "top-0",
      "left-0",
      "z-[1040]",
      "bg-black",
      "w-screen",
      "h-screen"
    ];
    h.removeClass(this._getElement(), "opacity-0"), h.addClass(this._getElement(), e), this._element.setAttribute("data-te-backdrop-show", ""), this._emulateAnimation(() => {
      _e(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      _e(t);
      return;
    }
    this._element.removeAttribute("data-te-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(() => {
      this.dispose(), _e(t);
    });
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add("opacity-50"), this._element = t;
    }
    return this._element;
  }
  _getConfig(t) {
    return t = {
      ...Cu,
      ...typeof t == "object" ? t : {}
    }, t.rootElement = Jt(t.rootElement), I(Oc, t, Au), t;
  }
  _append() {
    this._isAppended || (this._config.rootElement.append(this._getElement()), c.on(this._getElement(), Yr, () => {
      _e(this._config.clickCallback);
    }), this._isAppended = !0);
  }
  dispose() {
    this._isAppended && (c.off(this._element, Yr), this._element.remove(), this._isAppended = !1);
  }
  _emulateAnimation(t) {
    Ul(
      t,
      this._getElement(),
      this._config.isAnimated
    );
  }
}
class Bi {
  constructor(t, e = {}, i) {
    this._element = t, this._toggler = i, this._event = e.event || "blur", this._condition = e.condition || (() => !0), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || !1, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n) => {
      this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
    };
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap();
  }
  disable() {
    this._focusableElements.forEach((t) => {
      t.removeEventListener(this._event, this.handler);
    }), this._toggler && this._toggler.focus();
  }
  update() {
    this._setElements(), this._setFocusTrap();
  }
  _init() {
    const t = (e) => {
      !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
    };
    window.addEventListener("keydown", t);
  }
  _filterVisible(t) {
    return t.filter((e) => {
      if (!$t(e))
        return !1;
      const i = d.parents(e, "*");
      for (let n = 0; n < i.length; n++) {
        const o = window.getComputedStyle(i[n]);
        if (o && (o.display === "none" || o.visibility === "hidden"))
          return !1;
      }
      return !0;
    });
  }
  _setElements() {
    this._focusableElements = d.focusableChildren(this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
  }
  _setFocusTrap() {
    this._focusableElements.forEach((t, e) => {
      e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
    });
  }
}
let jr = [];
const rn = (s, t = "hide") => {
  const e = `click.dismiss${s.EVENT_KEY}`, i = s.NAME;
  jr.includes(i) || (jr.push(i), c.on(
    document,
    e,
    `[data-te-${i}-dismiss]`,
    function(n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), fe(this))
        return;
      const o = Qt(this) || this.closest(`.${i}`) || this.closest(`[data-te-${i}-init]`);
      if (!o)
        return;
      s.getOrCreateInstance(o)[t]();
    }
  ));
}, Kr = "offcanvas", yu = "te.offcanvas", Je = `.${yu}`, wu = ".data-api", ku = `load${Je}${wu}`, xu = "Escape", zr = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, Ou = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
}, Ur = "show", Su = "[data-te-offcanvas-init][data-te-offcanvas-show]", Iu = `show${Je}`, Du = `shown${Je}`, $u = `hide${Je}`, Lu = `hidden${Je}`, Nu = `keydown.dismiss${Je}`;
class Ms extends gt {
  constructor(t, e) {
    super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = !1, this._init();
  }
  // Getters
  static get NAME() {
    return Kr;
  }
  static get Default() {
    return zr;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || c.trigger(this._element, Iu, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new Xe().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-te-offcanvas-${Ur}`, "");
    const i = () => {
      this._config.scroll || this._focustrap.trap(), c.trigger(this._element, Du, { relatedTarget: t });
    };
    this._queueCallback(i, this._element, !0);
  }
  hide() {
    if (!this._isShown || c.trigger(this._element, $u).defaultPrevented)
      return;
    this._focustrap.disable(), this._element.blur(), this._isShown = !1, this._element.removeAttribute(`data-te-offcanvas-${Ur}`), this._backdrop.hide();
    const e = () => {
      this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new Xe().reset(), c.trigger(this._element, Lu);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (c.on(
      window,
      ku,
      () => d.find(Su).forEach(
        (t) => Ms.getOrCreateInstance(t).show()
      )
    ), this._didInit = !0, rn(Ms));
  }
  _getConfig(t) {
    return t = {
      ...zr,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, I(Kr, t, Ou), t;
  }
  _initializeBackDrop() {
    return new ar({
      isVisible: this._config.backdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }
  _initializeFocusTrap() {
    return new Bi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _addEventListeners() {
    c.on(this._element, Nu, (t) => {
      this._config.keyboard && t.key === xu && this.hide();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ms.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const xn = "alert", Mu = "te.alert", Sc = `.${Mu}`, Ru = `close${Sc}`, Pu = `closed${Sc}`, oi = "data-te-alert-show", Bu = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Xr = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, Hu = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, Vu = {
  fadeIn: "string",
  fadeOut: "string"
};
class Io extends gt {
  constructor(t, e, i) {
    super(t), this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return Bu;
  }
  static get Default() {
    return Xr;
  }
  static get NAME() {
    return xn;
  }
  // Public
  close() {
    if (c.trigger(this._element, Ru).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, h.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(oi), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(oi) && (h.removeClass(this._element, "hidden"), h.addClass(this._element, "block"), $t(this._element))) {
        const t = (e) => {
          h.removeClass(this._element, "hidden"), h.addClass(this._element, "block"), c.off(e.target, "animationend", t);
        };
        this._element.setAttribute(oi, ""), c.on(this._element, "animationend", t);
      }
      this._config.animation && (h.removeClass(this._element, this._classes.fadeOut), h.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(oi)) {
      this._element.removeAttribute(oi);
      const t = (e) => {
        h.addClass(this._element, "hidden"), h.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), c.off(e.target, "animationend", t);
      };
      c.on(this._element, "animationend", t), h.removeClass(this._element, this._classes.fadeIn), h.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (rn(Io, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...Xr,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, I(xn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Hu,
      ...e,
      ...t
    }, I(xn, t, Vu), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), c.trigger(this._element, Pu), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Io.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const On = "carousel", Wu = "te.carousel", pt = `.${Wu}`, Ic = ".data-api", Fu = "ArrowLeft", Yu = "ArrowRight", ju = 500, Ku = 40, Gr = {
  interval: 5e3,
  keyboard: !0,
  ride: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
}, zu = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  ride: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
}, Uu = {
  pointer: "touch-pan-y",
  block: "!block",
  visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
  invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-[600ms] data-[te-carousel-fade]:delay-600",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full"
}, Xu = {
  pointer: "string",
  block: "string",
  visible: "string",
  invisible: "string",
  slideRight: "string",
  slideLeft: "string"
}, re = "next", ae = "prev", ue = "left", _i = "right", Gu = {
  [Fu]: _i,
  [Yu]: ue
}, qu = `slide${pt}`, Sn = `slid${pt}`, Zu = `keydown${pt}`, Qu = `mouseenter${pt}`, Ju = `mouseleave${pt}`, tp = `touchstart${pt}`, ep = `touchmove${pt}`, ip = `touchend${pt}`, sp = `pointerdown${pt}`, np = `pointerup${pt}`, op = `dragstart${pt}`, rp = `load${pt}${Ic}`, ap = `click${pt}${Ic}`, qr = "data-te-carousel-init", le = "data-te-carousel-active", lp = "data-te-carousel-item-end", In = "data-te-carousel-item-start", cp = "data-te-carousel-item-next", hp = "data-te-carousel-item-prev", dp = "data-te-carousel-pointer-event", up = "[data-te-carousel-init]", Dc = "[data-te-carousel-active]", lr = "[data-te-carousel-item]", Ae = `${Dc}${lr}`, pp = `${lr} img`, _p = "[data-te-carousel-item-next], [data-te-carousel-item-prev]", fp = "[data-te-carousel-indicators]", mp = "[data-te-target]", gp = "[data-te-slide], [data-te-slide-to]", bp = "touch", vp = "pen";
class zt extends gt {
  constructor(t, e, i) {
    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._indicatorsElement = d.findOne(
      fp,
      this._element
    ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = !1, this._init(), this._config.ride === "carousel" && this.cycle();
  }
  // Getters
  static get Default() {
    return Gr;
  }
  static get NAME() {
    return On;
  }
  // Public
  next() {
    this._slide(re);
  }
  nextWhenVisible() {
    !document.hidden && $t(this._element) && this.next();
  }
  prev() {
    this._slide(ae);
  }
  pause(t) {
    t || (this._isPaused = !0), d.findOne(_p, this._element) && (Yl(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
  }
  cycle(t) {
    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
      (document.visibilityState ? this.nextWhenVisible : this.next).bind(
        this
      ),
      this._config.interval
    ));
  }
  to(t) {
    this._activeElement = d.findOne(
      Ae,
      this._element
    );
    const e = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      c.one(this._element, Sn, () => this.to(t));
      return;
    }
    if (e === t) {
      this.pause(), this.cycle();
      return;
    }
    const i = t > e ? re : ae;
    this._slide(i, this._items[t]);
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      ap,
      gp,
      zt.dataApiClickHandler
    ), c.on(window, rp, () => {
      const t = d.find(up);
      for (let e = 0, i = t.length; e < i; e++)
        zt.carouselInterface(
          t[e],
          zt.getInstance(t[e])
        );
    }), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...Gr,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, I(On, t, zu), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Uu,
      ...e,
      ...t
    }, I(On, t, Xu), t;
  }
  _enableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        c.one(this._element, Sn, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  _applyInitialClasses() {
    const t = d.findOne(
      Ae,
      this._element
    );
    t.classList.add(
      this._classes.block,
      ...this._classes.visible.split(" ")
    ), this._setActiveIndicatorElement(t);
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= Ku)
      return;
    const e = t / this.touchDeltaX;
    this.touchDeltaX = 0, e && this._slide(e > 0 ? _i : ue);
  }
  _setActiveElementClass() {
    this._activeElement = d.findOne(
      Ae,
      this._element
    ), h.addClass(this._activeElement, "hidden");
  }
  _addEventListeners() {
    this._config.keyboard && c.on(
      this._element,
      Zu,
      (t) => this._keydown(t)
    ), this._config.pause === "hover" && (c.on(
      this._element,
      Qu,
      (t) => this.pause(t)
    ), c.on(
      this._element,
      Ju,
      (t) => this._enableCycle(t)
    )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
  }
  _addTouchEventListeners() {
    const t = (o) => this._pointerEvent && (o.pointerType === vp || o.pointerType === bp), e = (o) => {
      t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
    }, i = (o) => {
      this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
    }, n = (o) => {
      t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
        (r) => this._enableCycle(r),
        ju + this._config.interval
      ));
    };
    d.find(pp, this._element).forEach(
      (o) => {
        c.on(
          o,
          op,
          (r) => r.preventDefault()
        );
      }
    ), this._pointerEvent ? (c.on(
      this._element,
      sp,
      (o) => e(o)
    ), c.on(this._element, np, (o) => n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${dp}`, "")) : (c.on(this._element, tp, (o) => e(o)), c.on(this._element, ep, (o) => i(o)), c.on(this._element, ip, (o) => n(o)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = Gu[t.key];
    e && (t.preventDefault(), this._slide(e));
  }
  _getItemIndex(t) {
    return this._items = t && t.parentNode ? d.find(lr, t.parentNode) : [], this._items.indexOf(t);
  }
  _getItemByOrder(t, e) {
    const i = t === re;
    return Xl(
      this._items,
      e,
      i,
      this._config.wrap
    );
  }
  _triggerSlideEvent(t, e) {
    const i = this._getItemIndex(t), n = this._getItemIndex(
      d.findOne(Ae, this._element)
    );
    return c.trigger(this._element, qu, {
      relatedTarget: t,
      direction: e,
      from: n,
      to: i
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const e = d.findOne(
        Dc,
        this._indicatorsElement
      );
      e.removeAttribute(le), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
      const i = d.find(
        mp,
        this._indicatorsElement
      );
      for (let n = 0; n < i.length; n++)
        if (Number.parseInt(
          i[n].getAttribute("data-te-slide-to"),
          10
        ) === this._getItemIndex(t)) {
          i[n].setAttribute(`${le}`, ""), i[n].setAttribute("aria-current", "true"), i[n].classList.add("!opacity-100");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || d.findOne(Ae, this._element);
    if (!t)
      return;
    const e = Number.parseInt(
      t.getAttribute("data-te-interval"),
      10
    );
    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
  }
  _slide(t, e) {
    const i = this._directionToOrder(t), n = d.findOne(
      Ae,
      this._element
    ), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), a = this._getItemIndex(r), l = !!this._interval, p = i === re, u = p ? In : lp, _ = p ? cp : hp, f = this._orderToDirection(i), g = u === In ? this._classes.slideLeft : this._classes.slideRight, m = u !== In ? this._classes.slideLeft : this._classes.slideRight;
    if (r && r.hasAttribute(le)) {
      this._isSliding = !1;
      return;
    }
    if (this._isSliding || this._triggerSlideEvent(r, f).defaultPrevented || !n || !r)
      return;
    this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
    const v = () => {
      c.trigger(this._element, Sn, {
        relatedTarget: r,
        direction: f,
        from: o,
        to: a
      });
    };
    if (this._element.hasAttribute(qr)) {
      r.setAttribute(`${_}`, ""), r.classList.add(this._classes.block, m), Ze(r), n.setAttribute(`${u}`, ""), n.classList.add(
        g,
        ...this._classes.invisible.split(" ")
      ), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${u}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(
        this._classes.slideRight,
        this._classes.slideLeft
      );
      const E = () => {
        r.removeAttribute(u), r.removeAttribute(_), r.setAttribute(`${le}`, ""), n.removeAttribute(le), n.classList.remove(
          g,
          ...this._classes.invisible.split(" "),
          this._classes.block
        ), n.removeAttribute(_), n.removeAttribute(u), this._isSliding = !1, setTimeout(v, 0);
      };
      this._queueCallback(E, n, !0);
    } else
      n.removeAttribute(le), n.classList.remove(this._classes.block), r.setAttribute(`${le}`, ""), r.classList.add(this._classes.block), this._isSliding = !1, v();
    l && this.cycle();
  }
  _directionToOrder(t) {
    return [_i, ue].includes(t) ? F() ? t === ue ? ae : re : t === ue ? re : ae : t;
  }
  _orderToDirection(t) {
    return [re, ae].includes(t) ? F() ? t === ae ? ue : _i : t === ae ? _i : ue : t;
  }
  // Static
  static carouselInterface(t, e) {
    const i = zt.getOrCreateInstance(t, e);
    let { _config: n } = i;
    typeof e == "object" && (n = {
      ...n,
      ...e
    });
    const o = typeof e == "string" ? e : e.slide;
    if (typeof e == "number") {
      i.to(e);
      return;
    }
    if (typeof o == "string") {
      if (typeof i[o] > "u")
        throw new TypeError(`No method named "${o}"`);
      i[o]();
    } else
      n.interval && n.ride === !0 && i.pause();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      zt.carouselInterface(this, t);
    });
  }
  static dataApiClickHandler(t) {
    const e = Qt(this);
    if (!e || !e.hasAttribute(qr))
      return;
    const i = {
      ...h.getDataAttributes(e),
      ...h.getDataAttributes(this)
    }, n = this.getAttribute("data-te-slide-to");
    n && (i.interval = !1), zt.carouselInterface(e, i), n && zt.getInstance(e).to(n), t.preventDefault();
  }
}
const Dn = "modal", Tp = "te.modal", Et = `.${Tp}`, Zr = "Escape", Qr = {
  backdrop: !0,
  keyboard: !0,
  focus: !0,
  modalNonInvasive: !1
}, Ep = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean",
  modalNonInvasive: "boolean"
}, Cp = {
  show: "transform-none",
  static: "scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out"
}, Ap = {
  show: "string",
  static: "string",
  staticProperties: "string"
}, yp = `hide${Et}`, wp = `hidePrevented${Et}`, kp = `hidden${Et}`, xp = `show${Et}`, Op = `shown${Et}`, Jr = `resize${Et}`, ta = `click.dismiss${Et}`, ea = `keydown.dismiss${Et}`, Sp = `mouseup.dismiss${Et}`, ia = `mousedown.dismiss${Et}`, sa = "data-te-modal-open", na = "data-te-open", ri = "[data-te-modal-dialog-ref]", Ip = "[data-te-modal-body-ref]";
class Do extends gt {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._dialog = d.findOne(ri, this._element), this._backdrop = this._config.modalNonInvasive ? null : this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Xe(), this._didInit = !1, this._init();
  }
  // Getters
  static get Default() {
    return Qr;
  }
  static get NAME() {
    return Dn;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || c.trigger(this._element, xp, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), !this._config.modalNonInvasive && this._scrollBar.hide(), document.body.setAttribute(sa, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), c.on(this._dialog, ia, () => {
      c.one(this._element, Sp, (i) => {
        i.target === this._element && (this._ignoreBackdropClick = !0);
      });
    }), this._showElement(t), !this._config.modalNonInvasive && this._showBackdrop());
  }
  hide() {
    if (!this._isShown || this._isTransitioning || c.trigger(this._element, yp).defaultPrevented)
      return;
    this._isShown = !1;
    const e = this._isAnimated();
    e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), d.findOne(ri, this._element).classList.remove(this._classes.show), c.off(this._element, ta), c.off(this._dialog, ia), this._queueCallback(() => this._hideModal(), this._element, e), this._element.removeAttribute(na);
  }
  dispose() {
    [window, this._dialog].forEach(
      (t) => c.off(t, Et)
    ), this._backdrop && this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _init() {
    this._didInit || (rn(Do), this._didInit = !0);
  }
  _initializeBackDrop() {
    return new ar({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Bi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _getConfig(t) {
    return t = {
      ...Qr,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, I(Dn, t, Ep), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Cp,
      ...e,
      ...t
    }, I(Dn, t, Ap), t;
  }
  _showElement(t) {
    const e = this._isAnimated(), i = d.findOne(Ip, this._dialog);
    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${na}`, "true"), this._element.scrollTop = 0;
    const n = d.findOne(ri, this._element);
    n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), i && (i.scrollTop = 0), e && Ze(this._element);
    const o = () => {
      this._config.focus && this._focustrap.trap(), this._isTransitioning = !1, c.trigger(this._element, Op, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, e);
  }
  _setEscapeEvent() {
    this._isShown ? c.on(document, ea, (t) => {
      this._config.keyboard && t.key === Zr ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === Zr && this._triggerBackdropTransition();
    }) : c.off(this._element, ea);
  }
  _setResizeEvent() {
    this._isShown ? c.on(window, Jr, () => this._adjustDialog()) : c.off(window, Jr);
  }
  _hideModal() {
    const t = d.findOne(ri, this._element);
    t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0"), setTimeout(() => {
      this._element.style.display = "none";
    }, 300), this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop && this._backdrop.hide(() => {
      document.body.removeAttribute(sa), this._resetAdjustments(), !this._config.modalNonInvasive && this._scrollBar.reset(), c.trigger(this._element, kp);
    });
  }
  _showBackdrop(t) {
    c.on(this._element, ta, (e) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = !1;
        return;
      }
      e.target === e.currentTarget && (this._config.backdrop === !0 ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
    }), this._backdrop && this._backdrop.show(t);
  }
  _isAnimated() {
    return !!d.findOne(ri, this._element);
  }
  _triggerBackdropTransition() {
    if (c.trigger(this._element, wp).defaultPrevented)
      return;
    const { classList: e, scrollHeight: i, style: n } = this._element, o = i > document.documentElement.clientHeight;
    !o && n.overflowY === "hidden" || e.contains(this._classes.static) || (o || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" ")), this._queueCallback(() => {
      e.remove(this._classes.static), setTimeout(() => {
        e.remove(...this._classes.staticProperties.split(" "));
      }, 300), o || this._queueCallback(() => {
        n.overflowY = "";
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
    (!i && t && !F() || i && !t && F()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !F() || !i && t && F()) && (this._element.style.paddingRight = `${e}px`);
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = Do.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
const Dp = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]), $p = /^aria-[\w-]*$/i, Lp = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Np = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Mp = (s, t) => {
  const e = s.nodeName.toLowerCase();
  if (t.includes(e))
    return Dp.has(e) ? !!(Lp.test(s.nodeValue) || Np.test(s.nodeValue)) : !0;
  const i = t.filter(
    (n) => n instanceof RegExp
  );
  for (let n = 0, o = i.length; n < o; n++)
    if (i[n].test(e))
      return !0;
  return !1;
}, Rp = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", $p],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function oa(s, t, e) {
  if (!s.length)
    return s;
  if (e && typeof e == "function")
    return e(s);
  const n = new window.DOMParser().parseFromString(s, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
  for (let r = 0, a = o.length; r < a; r++) {
    const l = o[r], p = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(p)) {
      l.remove();
      continue;
    }
    const u = [].concat(...l.attributes), _ = [].concat(
      t["*"] || [],
      t[p] || []
    );
    u.forEach((f) => {
      Mp(f, _) || l.removeAttribute(f.nodeName);
    });
  }
  return n.body.innerHTML;
}
const ra = "tooltip", Pp = "te.tooltip", At = `.${Pp}`, Bp = "te-tooltip", Hp = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Vp = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
}, Wp = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: F() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: F() ? "right" : "left"
}, Fp = {
  animation: !0,
  template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: Rp,
  popperConfig: { hide: !0 }
}, Yp = {
  HIDE: `hide${At}`,
  HIDDEN: `hidden${At}`,
  SHOW: `show${At}`,
  SHOWN: `shown${At}`,
  INSERTED: `inserted${At}`,
  CLICK: `click${At}`,
  FOCUSIN: `focusin${At}`,
  FOCUSOUT: `focusout${At}`,
  MOUSEENTER: `mouseenter${At}`,
  MOUSELEAVE: `mouseleave${At}`
}, jp = "fade", Kp = "modal", $n = "show", ai = "show", Ln = "out", aa = ".tooltip-inner", la = `.${Kp}`, ca = "hide.te.modal", li = "hover", Nn = "focus", zp = "click", Up = "manual";
class ti extends gt {
  constructor(t, e) {
    if (typeof kc > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
  }
  // Getters
  static get Default() {
    return Fp;
  }
  static get NAME() {
    return ra;
  }
  static get Event() {
    return Yp;
  }
  static get DefaultType() {
    return Vp;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (this._isEnabled)
      if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains($n)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout), c.off(
      this._element.closest(la),
      ca,
      this._hideModalHandler
    ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled))
      return;
    const t = c.trigger(
      this._element,
      this.constructor.Event.SHOW
    ), e = jl(this._element), i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
    if (t.defaultPrevented || !i)
      return;
    this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(aa).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
    const n = this.getTipElement(), o = rt(this.constructor.NAME);
    n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(() => {
      this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
    }, 100);
    const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
    this._addAttachmentClass(a);
    const { container: l } = this._config;
    if (y.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), c.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Te(
      this._element,
      n,
      this._getPopperConfig(a)
    ), n.getAttribute("id").includes("tooltip"))
      switch (r) {
        case "bottom":
          n.classList.add("py-[0.4rem]");
          break;
        case "left":
          n.classList.add("px-[0.4rem]");
          break;
        case "right":
          n.classList.add("px-[0.4rem]");
          break;
        default:
          n.classList.add("py-[0.4rem]");
          break;
      }
    const u = this._resolvePossibleFunction(this._config.customClass);
    u && n.classList.add(...u.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((g) => {
      c.on(g, "mouseover", Zs);
    });
    const _ = () => {
      const g = this._hoverState;
      this._hoverState = null, c.trigger(this._element, this.constructor.Event.SHOWN), g === Ln && this._leave(null, this);
    }, f = this.tip.classList.contains("transition-opacity");
    this._queueCallback(_, this.tip, f);
  }
  hide() {
    if (!this._popper)
      return;
    const t = this.getTipElement(), e = () => {
      this._isWithActiveTrigger() || (this._hoverState !== ai && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), c.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
    };
    if (c.trigger(
      this._element,
      this.constructor.Event.HIDE
    ).defaultPrevented)
      return;
    t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o) => c.off(o, "mouseover", Zs)), this._activeTrigger[zp] = !1, this._activeTrigger[Nn] = !1, this._activeTrigger[li] = !1;
    const n = this.tip.classList.contains("opacity-0");
    this._queueCallback(e, this.tip, n), this._hoverState = "";
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  // Protected
  isWithContent() {
    return !!this.getTitle();
  }
  getTipElement() {
    if (this.tip)
      return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const e = t.children[0];
    return this.setContent(e), e.classList.remove(jp, $n), this.tip = e, this.tip;
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), aa);
  }
  _sanitizeAndSetContent(t, e, i) {
    const n = d.findOne(i, t);
    if (!e && n) {
      n.remove();
      return;
    }
    this.setElementContent(n, e);
  }
  setElementContent(t, e) {
    if (t !== null) {
      if (Fe(e)) {
        e = Jt(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
        return;
      }
      this._config.html ? (this._config.sanitize && (e = oa(
        e,
        this._config.allowList,
        this._config.sanitizeFn
      )), t.innerHTML = e) : t.textContent = e;
    }
  }
  getTitle() {
    const t = this._element.getAttribute("data-te-original-title") || this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  // Private
  _initializeOnDelegatedTarget(t, e) {
    return e || this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        },
        {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: (i) => this._handlePopperPlacementChange(i)
        }
      ],
      onFirstUpdate: (i) => {
        i.options.placement !== i.placement && this._handlePopperPlacementChange(i);
      }
    };
    return {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return Wp[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((e) => {
      if (e === "click")
        c.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (i) => this.toggle(i)
        );
      else if (e !== Up) {
        const i = e === li ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === li ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        c.on(
          this._element,
          i,
          this._config.selector,
          (o) => this._enter(o)
        ), c.on(
          this._element,
          n,
          this._config.selector,
          (o) => this._leave(o)
        );
      }
    }), this._hideModalHandler = () => {
      this._element && this.hide();
    }, c.on(
      this._element.closest(la),
      ca,
      this._hideModalHandler
    ), this._config.selector ? this._config = {
      ...this._config,
      trigger: "manual",
      selector: ""
    } : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
      "data-te-original-title"
    );
    (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
  }
  _enter(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? Nn : li] = !0), e.getTipElement().classList.contains($n) || e._hoverState === ai) {
      e._hoverState = ai;
      return;
    }
    if (clearTimeout(e._timeout), e._hoverState = ai, !e._config.delay || !e._config.delay.show) {
      e.show();
      return;
    }
    e._timeout = setTimeout(() => {
      e._hoverState === ai && e.show();
    }, e._config.delay.show);
  }
  _leave(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? Nn : li] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
      if (clearTimeout(e._timeout), e._hoverState = Ln, !e._config.delay || !e._config.delay.hide) {
        e.hide();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === Ln && e.hide();
      }, e._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger)
      if (this._activeTrigger[t])
        return !0;
    return !1;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return Object.keys(e).forEach((i) => {
      Hp.has(i) && delete e[i];
    }), t = {
      ...this.constructor.Default,
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t.container = t.container === !1 ? document.body : Jt(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), I(ra, t, this.constructor.DefaultType), t.sanitize && (t.template = oa(
      t.template,
      t.allowList,
      t.sanitizeFn
    )), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(), e = new RegExp(
      `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
      "g"
    ), i = t.getAttribute("class").match(e);
    i !== null && i.length > 0 && i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
  }
  _getBasicClassPrefix() {
    return Bp;
  }
  _handlePopperPlacementChange(t) {
    const { state: e } = t;
    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ti.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Xp = "popover", Gp = "te.popover", yt = `.${Gp}`, qp = "te-popover", Zp = {
  ...ti.Default,
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
}, Qp = {
  ...ti.DefaultType,
  content: "(string|element|function)"
}, Jp = {
  HIDE: `hide${yt}`,
  HIDDEN: `hidden${yt}`,
  SHOW: `show${yt}`,
  SHOWN: `shown${yt}`,
  INSERTED: `inserted${yt}`,
  CLICK: `click${yt}`,
  FOCUSIN: `focusin${yt}`,
  FOCUSOUT: `focusout${yt}`,
  MOUSEENTER: `mouseenter${yt}`,
  MOUSELEAVE: `mouseleave${yt}`
}, t_ = ".popover-header", e_ = ".popover-body";
class $c extends ti {
  // Getters
  static get Default() {
    return Zp;
  }
  static get NAME() {
    return Xp;
  }
  static get Event() {
    return Jp;
  }
  static get DefaultType() {
    return Qp;
  }
  // Overrides
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), t_), this._sanitizeAndSetContent(t, this._getContent(), e_);
  }
  // Private
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return qp;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = $c.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Mn = "scrollspy", i_ = "te.scrollspy", cr = `.${i_}`, ha = {
  offset: 10,
  method: "auto",
  target: ""
}, s_ = {
  offset: "number",
  method: "string",
  target: "(string|element)"
}, n_ = {
  active: "!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
}, o_ = {
  active: "string"
}, r_ = `activate${cr}`, a_ = `scroll${cr}`, Rn = "data-te-nav-link-active", Lc = "[data-te-dropdown-item-ref]", l_ = "[data-te-nav-list-ref]", $o = "[data-te-nav-link-ref]", c_ = "[data-te-nav-item-ref]", Nc = "[data-te-list-group-item-ref]", Pn = `${$o}, ${Nc}, ${Lc}`, h_ = "[data-te-dropdown-ref]", d_ = "[data-te-dropdown-toggle-ref]", u_ = "maxOffset", da = "position";
class Mc extends gt {
  constructor(t, e, i) {
    super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, c.on(this._scrollElement, a_, () => this._process()), this.refresh(), this._process();
  }
  // Getters
  static get Default() {
    return ha;
  }
  static get NAME() {
    return Mn;
  }
  // Public
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? u_ : da, e = this._config.method === "auto" ? t : this._config.method, i = e === da ? this._getScrollTop() : 0;
    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), d.find(
      Pn,
      this._config.target
    ).map((o) => {
      const r = Uo(o), a = r ? d.findOne(r) : null;
      if (a) {
        const l = a.getBoundingClientRect();
        if (l.width || l.height)
          return [
            h[e](a).top + i,
            r
          ];
      }
      return null;
    }).filter((o) => o).sort((o, r) => o[0] - r[0]).forEach((o) => {
      this._offsets.push(o[0]), this._targets.push(o[1]);
    });
  }
  dispose() {
    c.off(this._scrollElement, cr), super.dispose();
  }
  // Private
  _getConfig(t) {
    return t = {
      ...ha,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, t.target = Jt(t.target) || document.documentElement, I(Mn, t, s_), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...n_,
      ...e,
      ...t
    }, I(Mn, t, o_), t;
  }
  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
    if (this._scrollHeight !== e && this.refresh(), t >= i) {
      const n = this._targets[this._targets.length - 1];
      this._activeTarget !== n && this._activate(n);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null, this._clear();
      return;
    }
    for (let n = this._offsets.length; n--; )
      this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
  }
  _activate(t) {
    this._activeTarget = t, this._clear();
    const e = Pn.split(",").map(
      (n) => `${n}[data-te-target="${t}"],${n}[href="${t}"]`
    ), i = d.findOne(e.join(","), this._config.target);
    i.classList.add(...this._classes.active.split(" ")), i.setAttribute(Rn, ""), i.getAttribute(Lc) ? d.findOne(
      d_,
      i.closest(h_)
    ).classList.add(...this._classes.active.split(" ")) : d.parents(i, l_).forEach(
      (n) => {
        d.prev(
          n,
          `${$o}, ${Nc}`
        ).forEach((o) => {
          o.classList.add(...this._classes.active.split(" ")), o.setAttribute(Rn, "");
        }), d.prev(n, c_).forEach(
          (o) => {
            d.children(o, $o).forEach(
              (r) => r.classList.add(...this._classes.active.split(" "))
            );
          }
        );
      }
    ), c.trigger(this._scrollElement, r_, {
      relatedTarget: t
    });
  }
  _clear() {
    d.find(Pn, this._config.target).filter(
      (t) => t.classList.contains(...this._classes.active.split(" "))
    ).forEach((t) => {
      t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(Rn);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Mc.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const ua = "tab", p_ = "te.tab", an = `.${p_}`, __ = `hide${an}`, f_ = `hidden${an}`, m_ = `show${an}`, g_ = `shown${an}`, b_ = "data-te-dropdown-menu-ref", De = "data-te-tab-active", Rs = "data-te-nav-active", v_ = "[data-te-dropdown-ref]", T_ = "[data-te-nav-ref]", pa = `[${De}]`, E_ = `[${Rs}]`, _a = ":scope > li > .active", C_ = "[data-te-dropdown-toggle-ref]", A_ = ":scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]", y_ = {
  show: "opacity-100",
  hide: "opacity-0"
}, w_ = {
  show: "string",
  hide: "string"
};
class Rc extends gt {
  constructor(t, e) {
    super(t), this._classes = this._getClasses(e);
  }
  // Getters
  static get NAME() {
    return ua;
  }
  // Public
  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(Rs) === "")
      return;
    let t;
    const e = Qt(this._element), i = this._element.closest(T_), n = d.findOne(
      E_,
      i
    );
    if (i) {
      const l = i.nodeName === "UL" || i.nodeName === "OL" ? _a : pa;
      t = d.find(l, i), t = t[t.length - 1];
    }
    const o = t ? c.trigger(t, __, {
      relatedTarget: this._element
    }) : null;
    if (c.trigger(this._element, m_, {
      relatedTarget: t
    }).defaultPrevented || o !== null && o.defaultPrevented)
      return;
    this._activate(
      this._element,
      i,
      null,
      n,
      this._element
    );
    const a = () => {
      c.trigger(t, f_, {
        relatedTarget: this._element
      }), c.trigger(this._element, g_, {
        relatedTarget: t
      });
    };
    e ? this._activate(
      e,
      e.parentNode,
      a,
      n,
      this._element
    ) : a();
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...y_,
      ...e,
      ...t
    }, I(ua, t, w_), t;
  }
  _activate(t, e, i, n, o) {
    const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? d.find(_a, e) : d.children(e, pa))[0], l = i && a && a.hasAttribute(De), p = () => this._transitionComplete(
      t,
      a,
      i,
      n,
      o
    );
    a && l ? (h.removeClass(a, this._classes.show), h.addClass(a, this._classes.hide), this._queueCallback(p, t, !0)) : p();
  }
  _transitionComplete(t, e, i, n, o) {
    if (e && n) {
      e.removeAttribute(De), n.removeAttribute(Rs);
      const a = d.findOne(
        A_,
        e.parentNode
      );
      a && a.removeAttribute(De), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", !1);
    }
    t.setAttribute(De, ""), o.setAttribute(Rs, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !0), Ze(t), t.classList.contains(this._classes.hide) && (h.removeClass(t, this._classes.hide), h.addClass(t, this._classes.show));
    let r = t.parentNode;
    if (r && r.nodeName === "LI" && (r = r.parentNode), r && r.hasAttribute(b_)) {
      const a = t.closest(v_);
      a && d.find(C_, a).forEach(
        (l) => l.setAttribute(De, "")
      ), t.setAttribute("aria-expanded", !0);
    }
    i && i();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Rc.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Bn = "toast", k_ = "te.toast", ee = `.${k_}`, x_ = `mouseover${ee}`, O_ = `mouseout${ee}`, S_ = `focusin${ee}`, I_ = `focusout${ee}`, D_ = `hide${ee}`, $_ = `hidden${ee}`, L_ = `show${ee}`, N_ = `shown${ee}`, fa = "data-te-toast-hide", Hn = "data-te-toast-show", es = "data-te-toast-showing", M_ = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, ma = {
  animation: !0,
  autohide: !0,
  delay: 5e3
}, R_ = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, P_ = {
  fadeIn: "string",
  fadeOut: "string"
};
class Lo extends gt {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners(), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return M_;
  }
  static get Default() {
    return ma;
  }
  static get NAME() {
    return Bn;
  }
  // Public
  show() {
    if (c.trigger(this._element, L_).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && (h.removeClass(this._element, this._classes.fadeOut), h.addClass(this._element, this._classes.fadeIn));
    const e = () => {
      this._element.removeAttribute(es), c.trigger(this._element, N_), this._maybeScheduleHide();
    };
    this._element.removeAttribute(fa), Ze(this._element), this._element.setAttribute(Hn, ""), this._element.setAttribute(es, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this._element || this._element.dataset.teToastShow === void 0 || c.trigger(this._element, D_).defaultPrevented)
      return;
    const e = () => {
      let i = 0;
      this._config.animation && (i = 300, h.removeClass(this._element, this._classes.fadeIn), h.addClass(this._element, this._classes.fadeOut)), setTimeout(() => {
        this._element.setAttribute(fa, ""), this._element.removeAttribute(es), this._element.removeAttribute(Hn), c.trigger(this._element, $_);
      }, i);
    };
    this._element.setAttribute(es, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this._element.dataset.teToastShow !== void 0 && this._element.removeAttribute(Hn), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (rn(Lo), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...ma,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, I(Bn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...R_,
      ...e,
      ...t
    }, I(Bn, t, P_), t;
  }
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout":
        this._hasMouseInteraction = e;
        break;
      case "focusin":
      case "focusout":
        this._hasKeyboardInteraction = e;
        break;
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const i = t.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    c.on(
      this._element,
      x_,
      (t) => this._onInteraction(t, !0)
    ), c.on(
      this._element,
      O_,
      (t) => this._onInteraction(t, !1)
    ), c.on(
      this._element,
      S_,
      (t) => this._onInteraction(t, !0)
    ), c.on(
      this._element,
      I_,
      (t) => this._onInteraction(t, !1)
    );
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Lo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
(() => {
  var s = { 454: (i, n, o) => {
    o.d(n, { Z: () => l });
    var r = o(645), a = o.n(r)()(function(p) {
      return p[1];
    });
    a.push([i.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = a;
  }, 645: (i) => {
    i.exports = function(n) {
      var o = [];
      return o.toString = function() {
        return this.map(function(r) {
          var a = n(r);
          return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
        }).join("");
      }, o.i = function(r, a, l) {
        typeof r == "string" && (r = [[null, r, ""]]);
        var p = {};
        if (l)
          for (var u = 0; u < this.length; u++) {
            var _ = this[u][0];
            _ != null && (p[_] = !0);
          }
        for (var f = 0; f < r.length; f++) {
          var g = [].concat(r[f]);
          l && p[g[0]] || (a && (g[2] ? g[2] = "".concat(a, " and ").concat(g[2]) : g[2] = a), o.push(g));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var i = new window.CustomEvent("test", { cancelable: !0 });
          if (i.preventDefault(), i.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var n = function(r, a) {
            var l, p;
            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), p = l.preventDefault, l.preventDefault = function() {
              p.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, l;
          };
          n.prototype = window.Event.prototype, window.CustomEvent = n;
        }
    })();
  }, 379: (i, n, o) => {
    var r, a = function() {
      var C = {};
      return function(T) {
        if (C[T] === void 0) {
          var A = document.querySelector(T);
          if (window.HTMLIFrameElement && A instanceof window.HTMLIFrameElement)
            try {
              A = A.contentDocument.head;
            } catch {
              A = null;
            }
          C[T] = A;
        }
        return C[T];
      };
    }(), l = [];
    function p(C) {
      for (var T = -1, A = 0; A < l.length; A++)
        if (l[A].identifier === C) {
          T = A;
          break;
        }
      return T;
    }
    function u(C, T) {
      for (var A = {}, k = [], S = 0; S < C.length; S++) {
        var O = C[S], x = T.base ? O[0] + T.base : O[0], L = A[x] || 0, $ = "".concat(x, " ").concat(L);
        A[x] = L + 1;
        var M = p($), P = { css: O[1], media: O[2], sourceMap: O[3] };
        M !== -1 ? (l[M].references++, l[M].updater(P)) : l.push({ identifier: $, updater: w(P, T), references: 1 }), k.push($);
      }
      return k;
    }
    function _(C) {
      var T = document.createElement("style"), A = C.attributes || {};
      if (A.nonce === void 0) {
        var k = o.nc;
        k && (A.nonce = k);
      }
      if (Object.keys(A).forEach(function(O) {
        T.setAttribute(O, A[O]);
      }), typeof C.insert == "function")
        C.insert(T);
      else {
        var S = a(C.insert || "head");
        if (!S)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        S.appendChild(T);
      }
      return T;
    }
    var f, g = (f = [], function(C, T) {
      return f[C] = T, f.filter(Boolean).join(`
`);
    });
    function m(C, T, A, k) {
      var S = A ? "" : k.media ? "@media ".concat(k.media, " {").concat(k.css, "}") : k.css;
      if (C.styleSheet)
        C.styleSheet.cssText = g(T, S);
      else {
        var O = document.createTextNode(S), x = C.childNodes;
        x[T] && C.removeChild(x[T]), x.length ? C.insertBefore(O, x[T]) : C.appendChild(O);
      }
    }
    function b(C, T, A) {
      var k = A.css, S = A.media, O = A.sourceMap;
      if (S ? C.setAttribute("media", S) : C.removeAttribute("media"), O && typeof btoa < "u" && (k += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), C.styleSheet)
        C.styleSheet.cssText = k;
      else {
        for (; C.firstChild; )
          C.removeChild(C.firstChild);
        C.appendChild(document.createTextNode(k));
      }
    }
    var v = null, E = 0;
    function w(C, T) {
      var A, k, S;
      if (T.singleton) {
        var O = E++;
        A = v || (v = _(T)), k = m.bind(null, A, O, !1), S = m.bind(null, A, O, !0);
      } else
        A = _(T), k = b.bind(null, A, T), S = function() {
          (function(x) {
            if (x.parentNode === null)
              return !1;
            x.parentNode.removeChild(x);
          })(A);
        };
      return k(C), function(x) {
        if (x) {
          if (x.css === C.css && x.media === C.media && x.sourceMap === C.sourceMap)
            return;
          k(C = x);
        } else
          S();
      };
    }
    i.exports = function(C, T) {
      (T = T || {}).singleton || typeof T.singleton == "boolean" || (T.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
      var A = u(C = C || [], T);
      return function(k) {
        if (k = k || [], Object.prototype.toString.call(k) === "[object Array]") {
          for (var S = 0; S < A.length; S++) {
            var O = p(A[S]);
            l[O].references--;
          }
          for (var x = u(k, T), L = 0; L < A.length; L++) {
            var $ = p(A[L]);
            l[$].references === 0 && (l[$].updater(), l.splice($, 1));
          }
          A = x;
        }
      };
    };
  } }, t = {};
  function e(i) {
    var n = t[i];
    if (n !== void 0)
      return n.exports;
    var o = t[i] = { id: i, exports: {} };
    return s[i](o, o.exports, e), o.exports;
  }
  e.n = (i) => {
    var n = i && i.__esModule ? () => i.default : () => i;
    return e.d(n, { a: n }), n;
  }, e.d = (i, n) => {
    for (var o in n)
      e.o(n, o) && !e.o(i, o) && Object.defineProperty(i, o, { enumerable: !0, get: n[o] });
  }, e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n), (() => {
    var i = e(379), n = e.n(i), o = e(454);
    function r(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var p = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        l.dispatchEvent(p) || (l.value = "");
      }
    }
    function a(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    n()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
    }, !0), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
    }, !0);
  })();
})();
const Vn = "input", is = "te.input", Pc = "data-te-input-wrapper-init", Bc = "data-te-input-notch-ref", Hc = "data-te-input-notch-leading-ref", Vc = "data-te-input-notch-middle-ref", B_ = "data-te-input-notch-trailing-ref", H_ = "data-te-input-helper-ref", V_ = "data-te-input-placeholder-active", Wt = "data-te-input-state-active", ga = "data-te-input-focused", ba = "data-te-input-form-counter", ce = `[${Pc}] input`, he = `[${Pc}] textarea`, ye = `[${Bc}]`, va = `[${Hc}]`, Ta = `[${Vc}]`, W_ = `[${H_}]`, F_ = {
  inputFormWhite: !1
}, Y_ = {
  inputFormWhite: "(boolean)"
}, Wc = {
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0",
  notchLeadingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchLeadingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent",
  notchMiddleNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchMiddleWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0",
  notchTrailingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchTrailingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  counter: "text-right leading-[1.6]"
}, j_ = {
  notch: "string",
  notchLeading: "string",
  notchLeadingNormal: "string",
  notchLeadingWhite: "string",
  notchMiddle: "string",
  notchMiddleNormal: "string",
  notchMiddleWhite: "string",
  notchTrailing: "string",
  notchTrailingNormal: "string",
  notchTrailingWhite: "string",
  counter: "string"
};
class V {
  constructor(t, e, i) {
    this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(i), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = !1, this._helper = null, this._counter = !1, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (y.setData(t, is, this), this.init());
  }
  // Getters
  static get NAME() {
    return Vn;
  }
  get input() {
    return d.findOne("input", this._element) || d.findOne("textarea", this._element);
  }
  // Public
  init() {
    this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = !0);
  }
  update() {
    this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
  }
  forceActive() {
    this.input.setAttribute(Wt, ""), d.findOne(ye, this.input.parentNode).setAttribute(
      Wt,
      ""
    );
  }
  forceInactive() {
    this.input.removeAttribute(Wt), d.findOne(
      ye,
      this.input.parentNode
    ).removeAttribute(Wt);
  }
  dispose() {
    this._removeBorder(), y.removeData(this._element, is), this._element = null;
  }
  // Private
  _getConfig(t, e) {
    return t = {
      ...F_,
      ...h.getDataAttributes(e),
      ...typeof t == "object" ? t : {}
    }, I(Vn, t, Y_), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Wc,
      ...e,
      ...t
    }, I(Vn, t, j_), t;
  }
  _getLabelData() {
    this._label = d.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
  }
  _getHelper() {
    this._helper = d.findOne(W_, this._element);
  }
  _getCounter() {
    this._counter = h.getDataAttribute(
      this.input,
      "inputShowcounter"
    ), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
  }
  _getEvents() {
    c.on(
      document,
      "focus",
      ce,
      V.activate(new V())
    ), c.on(
      document,
      "input",
      ce,
      V.activate(new V())
    ), c.on(
      document,
      "blur",
      ce,
      V.deactivate(new V())
    ), c.on(
      document,
      "focus",
      he,
      V.activate(new V())
    ), c.on(
      document,
      "input",
      he,
      V.activate(new V())
    ), c.on(
      document,
      "blur",
      he,
      V.deactivate(new V())
    ), c.on(window, "shown.te.modal", (t) => {
      d.find(ce, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.update();
        }
      ), d.find(he, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.update();
        }
      );
    }), c.on(window, "shown.te.dropdown", (t) => {
      const e = t.target.parentNode.querySelector(
        "[data-te-dropdown-menu-ref]"
      );
      e && (d.find(ce, e).forEach(
        (i) => {
          const n = V.getInstance(i.parentNode);
          n && n.update();
        }
      ), d.find(he, e).forEach(
        (i) => {
          const n = V.getInstance(i.parentNode);
          n && n.update();
        }
      ));
    }), c.on(window, "shown.te.tab", (t) => {
      let e;
      t.target.href ? e = t.target.href.split("#")[1] : e = h.getDataAttribute(t.target, "target").split(
        "#"
      )[1];
      const i = d.findOne(`#${e}`);
      d.find(ce, i).forEach((n) => {
        const o = V.getInstance(n.parentNode);
        o && o.update();
      }), d.find(he, i).forEach(
        (n) => {
          const o = V.getInstance(n.parentNode);
          o && o.update();
        }
      );
    }), c.on(window, "reset", (t) => {
      d.find(ce, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      ), d.find(he, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      );
    }), c.on(window, "onautocomplete", (t) => {
      const e = V.getInstance(t.target.parentNode);
      !e || !t.cancelable || e.forceActive();
    });
  }
  _showCounter() {
    if (d.find(
      `[${ba}]`,
      this._element
    ).length > 0)
      return;
    this._counterElement = document.createElement("div"), h.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(ba, "");
    const e = this.input.value.length;
    this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
  }
  _bindCounter() {
    c.on(this.input, "input", () => {
      const t = this.input.value.length;
      this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
    });
  }
  _toggleDefaultDatePlaceholder(t = this.input) {
    if (!(t.getAttribute("type") === "date"))
      return;
    !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
  }
  _showPlaceholder() {
    this.input.setAttribute(V_, "");
  }
  _getNotchData() {
    this._notchMiddle = d.findOne(
      Ta,
      this._element
    ), this._notchLeading = d.findOne(
      va,
      this._element
    );
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _getLabelPositionInInputGroup() {
    if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-te-input-group-ref"))
      return;
    const t = this.input, e = d.prev(
      t,
      "[data-te-input-group-text-ref]"
    )[0];
    e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
  }
  _applyDivs() {
    const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, i = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = d.find(ye, this._element), o = D("div");
    h.addClass(o, this._classes.notch), o.setAttribute(Bc, ""), this._notchLeading = D("div"), h.addClass(
      this._notchLeading,
      `${this._classes.notchLeading} ${t}`
    ), this._notchLeading.setAttribute(Hc, ""), this._notchMiddle = D("div"), h.addClass(
      this._notchMiddle,
      `${this._classes.notchMiddle} ${e}`
    ), this._notchMiddle.setAttribute(Vc, ""), this._notchTrailing = D("div"), h.addClass(
      this._notchTrailing,
      `${this._classes.notchTrailing} ${i}`
    ), this._notchTrailing.setAttribute(B_, ""), !(n.length >= 1) && (o.append(this._notchLeading), o.append(this._notchMiddle), o.append(this._notchTrailing), this._element.append(o));
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _removeBorder() {
    const t = d.findOne(ye, this._element);
    t && t.remove();
  }
  _activate(t) {
    zl(() => {
      this._getElements(t);
      const e = t ? t.target : this.input, i = d.findOne(
        ye,
        this._element
      );
      t && t.type === "focus" && i && i.setAttribute(ga, ""), e.value !== "" && (e.setAttribute(Wt, ""), i && i.setAttribute(Wt, "")), this._toggleDefaultDatePlaceholder(e);
    });
  }
  _getElements(t) {
    if (t && (this._element = t.target.parentNode, this._label = d.findOne("label", this._element)), t && this._label) {
      const e = this._labelWidth;
      this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = d.findOne(
        Ta,
        t.target.parentNode
      ), this._notchLeading = d.findOne(
        va,
        t.target.parentNode
      ), this._applyNotch());
    }
  }
  _deactivate(t) {
    const e = t ? t.target : this.input, i = d.findOne(
      ye,
      e.parentNode
    );
    i.removeAttribute(ga), e.value === "" && (e.removeAttribute(Wt), i.removeAttribute(Wt)), this._toggleDefaultDatePlaceholder(e);
  }
  static activate(t) {
    return function(e) {
      t._activate(e);
    };
  }
  static deactivate(t) {
    return function(e) {
      t._deactivate(e);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, is);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new V(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, is);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Ea = "animation", Wn = "te.animation", K_ = {
  animation: "string",
  animationStart: "string",
  animationShowOnLoad: "boolean",
  onStart: "(null|function)",
  onEnd: "(null|function)",
  onHide: "(null|function)",
  onShow: "(null|function)",
  animationOnScroll: "(string)",
  animationWindowHeight: "number",
  animationOffset: "(number|string)",
  animationDelay: "(number|string)",
  animationReverse: "boolean",
  animationInterval: "(number|string)",
  animationRepeat: "(number|boolean)",
  animationReset: "boolean"
}, z_ = {
  animation: "fade",
  animationStart: "onClick",
  animationShowOnLoad: !0,
  onStart: null,
  onEnd: null,
  onHide: null,
  onShow: null,
  animationOnScroll: "once",
  animationWindowHeight: 0,
  animationOffset: 0,
  animationDelay: 0,
  animationReverse: !1,
  animationInterval: 0,
  animationRepeat: !1,
  animationReset: !1
};
class hr {
  constructor(t, e) {
    this._element = t, this._animateElement = this._getAnimateElement(), this._isFirstScroll = !0, this._repeatAnimateOnScroll = !0, this._options = this._getConfig(e), this._element && (y.setData(t, Wn, this), this._init());
  }
  // Getters
  static get NAME() {
    return Ea;
  }
  // Public
  init() {
    this._init();
  }
  startAnimation() {
    this._startAnimation();
  }
  stopAnimation() {
    this._clearAnimationClass();
  }
  changeAnimationType(t) {
    this._options.animation = t;
  }
  dispose() {
    c.off(this._element, "mousedown"), c.off(this._animateElement, "animationend"), c.off(window, "scroll"), c.off(this._element, "mouseover"), y.removeData(this._element, Wn), this._element = null, this._animateElement = null, this._isFirstScroll = null, this._repeatAnimateOnScroll = null, this._options = null;
  }
  // Private
  _init() {
    switch (this._options.animationStart) {
      case "onHover":
        this._bindHoverEvents();
        break;
      case "onLoad":
        this._startAnimation();
        break;
      case "onScroll":
        this._bindScrollEvents();
        break;
      case "onClick":
        this._bindClickEvents();
        break;
    }
    this._bindTriggerOnEndCallback(), this._options.animationReset && this._bindResetAnimationAfterFinish();
  }
  _getAnimateElement() {
    const t = h.getDataAttribute(
      this._element,
      "animation-target"
    );
    return t ? d.find(t)[0] : this._element;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._animateElement);
    return t = {
      ...z_,
      ...e,
      ...t
    }, I(Ea, t, K_), t;
  }
  _animateOnScroll() {
    const t = h.offset(this._animateElement).top, e = this._animateElement.offsetHeight, i = window.innerHeight, n = t + this._options.animationOffset <= i && t + this._options.animationOffset + e >= 0, o = this._animateElement.style.visibility === "visible";
    switch (!0) {
      case (n && this._isFirstScroll):
        this._isFirstScroll = !1, this._startAnimation();
        break;
      case (!n && this._isFirstScroll):
        this._isFirstScroll = !1, this._hideAnimateElement();
        break;
      case (n && !o && this._repeatAnimateOnScroll):
        this._options.animationOnScroll !== "repeat" && (this._repeatAnimateOnScroll = !1), this._callback(this._options.onShow), this._showAnimateElement(), this._startAnimation();
        break;
      case (!n && o && this._repeatAnimateOnScroll):
        this._hideAnimateElement(), this._clearAnimationClass(), this._callback(this._options.onHide);
        break;
    }
  }
  _addAnimatedClass() {
    h.addClass(
      this._animateElement,
      `animate-${this._options.animation}`
    );
  }
  _clearAnimationClass() {
    this._animateElement.classList.remove(`animate-${this._options.animation}`);
  }
  _startAnimation() {
    this._callback(this._options.onStart), this._addAnimatedClass(), this._options.animationRepeat && !this._options.animationInterval && this._setAnimationRepeat(), this._options.animationReverse && this._setAnimationReverse(), this._options.animationDelay && this._setAnimationDelay(), this._options.animationDuration && this._setAnimationDuration(), this._options.animationInterval && this._setAnimationInterval();
  }
  _setAnimationReverse() {
    h.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : "2",
      animationDirection: "alternate"
    });
  }
  _setAnimationDuration() {
    h.style(this._animateElement, {
      animationDuration: `${this._options.animationDuration}ms`
    });
  }
  _setAnimationDelay() {
    h.style(this._animateElement, {
      animationDelay: `${this._options.animationDelay}ms`
    });
  }
  _setAnimationRepeat() {
    h.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : this._options.animationRepeat
    });
  }
  _setAnimationInterval() {
    c.on(this._animateElement, "click", () => {
      this._clearAnimationClass(), setTimeout(() => {
        this._addAnimatedClass();
      }, this._options.animationInterval);
    });
  }
  _hideAnimateElement() {
    h.style(this._animateElement, { visibility: "hidden" });
  }
  _showAnimateElement() {
    h.style(this._animateElement, { visibility: "visible" });
  }
  _bindResetAnimationAfterFinish() {
    c.on(this._animateElement, "animationend", () => {
      this._clearAnimationClass();
    });
  }
  _bindTriggerOnEndCallback() {
    c.on(this._animateElement, "animationend", () => {
      this._callback(this._options.onEnd);
    });
  }
  _bindScrollEvents() {
    this._options.animationShowOnLoad || this._animateOnScroll(), c.on(window, "scroll", () => {
      this._animateOnScroll();
    });
  }
  _bindClickEvents() {
    c.on(this._element, "mousedown", () => {
      this._startAnimation();
    });
  }
  _bindHoverEvents() {
    c.one(this._element, "mouseover", () => {
      this._startAnimation();
    }), c.one(this._animateElement, "animationend", () => {
      setTimeout(() => {
        this._bindHoverEvents();
      }, 100);
    });
  }
  _callback(t) {
    t instanceof Function && t();
  }
  // Static
  static autoInit(t) {
    t._init();
  }
  static jQueryInterface(t) {
    new hr(this[0], t).init();
  }
  static getInstance(t) {
    return y.getData(t, Wn);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Fn = "ripple", ss = "te.ripple", U_ = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", X_ = ["[data-te-ripple-init]"], ns = [0, 0, 0], G_ = [
  { name: "primary", gradientColor: "#3B71CA" },
  { name: "secondary", gradientColor: "#9FA6B2" },
  { name: "success", gradientColor: "#14A44D" },
  { name: "danger", gradientColor: "#DC4C64" },
  { name: "warning", gradientColor: "#E4A11B" },
  { name: "info", gradientColor: "#54B4D3" },
  { name: "light", gradientColor: "#fbfbfb" },
  { name: "dark", gradientColor: "#262626" }
], Ca = 0.5, q_ = {
  rippleCentered: !1,
  rippleColor: "",
  rippleColorDark: "",
  rippleDuration: "500ms",
  rippleRadius: 0,
  rippleUnbound: !1
}, Z_ = {
  rippleCentered: "boolean",
  rippleColor: "string",
  rippleColorDark: "string",
  rippleDuration: "string",
  rippleRadius: "number",
  rippleUnbound: "boolean"
}, Q_ = {
  ripple: "relative overflow-hidden inline-block align-bottom",
  rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
  unbound: "overflow-visible"
}, J_ = {
  ripple: "string",
  rippleWave: "string",
  unbound: "string"
};
class Ge {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && (y.setData(t, ss, this), h.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = !1, this._initialClasses = null, this.init();
  }
  // Getters
  static get NAME() {
    return Fn;
  }
  // Public
  init() {
    this._addClickEvent(this._element);
  }
  dispose() {
    y.removeData(this._element, ss), c.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
  }
  // Private
  _autoInit(t) {
    X_.forEach((e) => {
      d.closest(t.target, e) && (this._element = d.closest(t.target, e));
    }), this._element.style.minWidth || (h.style(this._element, {
      "min-width": getComputedStyle(this._element).width
    }), this._isMinWidthSet = !0), this._options = this._getConfig(), this._classes = this._getClasses(), this._initialClasses = [...this._element.classList], h.addClass(this._element, this._classes.ripple), this._createRipple(t);
  }
  _addClickEvent(t) {
    c.on(t, "mousedown", this._clickHandler);
  }
  _createRipple(t) {
    this._element.className.indexOf(this._classes.ripple) < 0 && h.addClass(this._element, this._classes.ripple);
    const { layerX: e, layerY: i } = t, n = t.offsetX || e, o = t.offsetY || i, r = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), p = {
      offsetX: this._options.rippleCentered ? r / 2 : n,
      offsetY: this._options.rippleCentered ? a / 2 : o,
      height: r,
      width: a
    }, u = this._getDiameter(p), _ = this._options.rippleRadius || u / 2, f = {
      delay: l * Ca,
      duration: l - l * Ca
    }, g = {
      left: this._options.rippleCentered ? `${a / 2 - _}px` : `${n - _}px`,
      top: this._options.rippleCentered ? `${r / 2 - _}px` : `${o - _}px`,
      height: `${this._options.rippleRadius * 2 || u}px`,
      width: `${this._options.rippleRadius * 2 || u}px`,
      transitionDelay: `0s, ${f.delay}ms`,
      transitionDuration: `${l}ms, ${f.duration}ms`
    }, m = D("div");
    this._createHTMLRipple({
      wrapper: this._element,
      ripple: m,
      styles: g
    }), this._removeHTMLRipple({ ripple: m, duration: l });
  }
  _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
    Object.keys(i).forEach(
      (n) => e.style[n] = i[n]
    ), h.addClass(e, this._classes.rippleWave), e.setAttribute("data-te-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
  }
  _removeHTMLRipple({ ripple: t, duration: e }) {
    this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(() => {
      t.classList.add("!opacity-0");
    }, 10), this._rippleTimer = setTimeout(() => {
      if (t && (t.remove(), this._element)) {
        d.find("[data-te-ripple-ref]", this._element).forEach(
          (n) => {
            n.remove();
          }
        ), this._isMinWidthSet && (h.style(this._element, { "min-width": "" }), this._isMinWidthSet = !1);
        const i = this._initialClasses ? this._addedNewRippleClasses(
          this._classes.ripple,
          this._initialClasses
        ) : this._classes.ripple.split(" ");
        h.removeClass(this._element, i);
      }
    }, e);
  }
  _addedNewRippleClasses(t, e) {
    return t.split(" ").filter(
      (i) => e.findIndex((n) => i === n) === -1
    );
  }
  _durationToMsNumber(t) {
    return Number(t.replace("ms", "").replace("s", "000"));
  }
  _getConfig(t = {}) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...q_,
      ...e,
      ...t
    }, I(Fn, t, Z_), t;
  }
  _getClasses(t = {}) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Q_,
      ...e,
      ...t
    }, I(Fn, t, J_), t;
  }
  _getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
    const o = e <= i / 2, r = t <= n / 2, a = (f, g) => Math.sqrt(f ** 2 + g ** 2), l = e === i / 2 && t === n / 2, p = {
      first: o === !0 && r === !1,
      second: o === !0 && r === !0,
      third: o === !1 && r === !0,
      fourth: o === !1 && r === !1
    }, u = {
      topLeft: a(t, e),
      topRight: a(n - t, e),
      bottomLeft: a(t, i - e),
      bottomRight: a(n - t, i - e)
    };
    let _ = 0;
    return l || p.fourth ? _ = u.topLeft : p.third ? _ = u.topRight : p.second ? _ = u.bottomRight : p.first && (_ = u.bottomLeft), _ * 2;
  }
  _appendRipple(t, e) {
    e.appendChild(t), setTimeout(() => {
      h.addClass(t, "opacity-0 scale-100");
    }, 50);
  }
  _toggleUnbound(t) {
    this._options.rippleUnbound === !0 ? h.addClass(t, this._classes.unbound) : h.removeClass(t, this._classes.unbound);
  }
  _addColor(t) {
    let e = this._options.rippleColor || "rgb(0,0,0)";
    (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
    const i = G_.find(
      (r) => r.name === e.toLowerCase()
    ), n = i ? this._colorToRGB(i.gradientColor).join(",") : this._colorToRGB(e).join(","), o = U_.split("{{color}}").join(`${n}`);
    t.style.backgroundImage = `radial-gradient(circle, ${o})`;
  }
  _colorToRGB(t) {
    function e(o) {
      return o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`), [
        parseInt(o.substr(1, 2), 16),
        parseInt(o.substr(3, 2), 16),
        parseInt(o.substr(5, 2), 16)
      ];
    }
    function i(o) {
      const r = document.body.appendChild(
        document.createElement("fictum")
      ), a = "rgb(1, 2, 3)";
      return r.style.color = a, r.style.color !== a || (r.style.color = o, r.style.color === a || r.style.color === "") ? ns : (o = getComputedStyle(r).color, document.body.removeChild(r), o);
    }
    function n(o) {
      return o = o.match(/[.\d]+/g).map((r) => +Number(r)), o.length = 3, o;
    }
    return t.toLowerCase() === "transparent" ? ns : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = i(t)), t.indexOf("rgb") === 0 ? n(t) : ns);
  }
  // Static
  static autoInitial(t) {
    return function(e) {
      t._autoInit(e);
    };
  }
  static jQueryInterface(t) {
    return this.each(function() {
      return y.getData(this, ss) ? null : new Ge(this, t);
    });
  }
  static getInstance(t) {
    return y.getData(t, ss);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
function Z(s) {
  return s.getDate();
}
function Ps(s) {
  return s.getDay();
}
function Y(s) {
  return s.getMonth();
}
function B(s) {
  return s.getFullYear();
}
function tf(s, t, e) {
  const i = e.startDay, n = i > 0 ? 7 - i : 0, r = new Date(s, t).getDay() + n;
  return r >= 7 ? r - 7 : r;
}
function No(s) {
  return ef(s).getDate();
}
function ef(s) {
  return Tt(s.getFullYear(), s.getMonth() + 1, 0);
}
function Re() {
  return /* @__PURE__ */ new Date();
}
function it(s, t) {
  return nt(s, t * 12);
}
function nt(s, t) {
  const e = Tt(
    s.getFullYear(),
    s.getMonth() + t,
    s.getDate()
  ), i = Z(s), n = Z(e);
  return i !== n && e.setDate(0), e;
}
function we(s, t) {
  return Tt(s.getFullYear(), s.getMonth(), s.getDate() + t);
}
function Tt(s, t, e) {
  const i = new Date(s, t, e);
  return s >= 0 && s < 100 && i.setFullYear(i.getFullYear() - 1900), i;
}
function Aa(s) {
  const t = s.split("-"), e = t[0], i = t[1], n = t[2];
  return Tt(e, i, n);
}
function sf(s) {
  return !Number.isNaN(s.getTime());
}
function Ne(s, t) {
  return B(s) - B(t) || Y(s) - Y(t) || Z(s) - Z(t);
}
function pe(s, t) {
  return s.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), s.getTime() === t.getTime();
}
function Bs(s, t) {
  const i = B(s) - of();
  return nf(i, t);
}
function nf(s, t) {
  return (s % t + t) % t;
}
function of(s, t, e) {
  let i = 0;
  return e ? i = B(e) - s + 1 : t && (i = B(t)), i;
}
function Js(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date();
  r.setHours(0, 0, 0, 0);
  const a = t && Ne(s, t) <= -1, l = e && Ne(s, e) >= 1, p = n && Ne(s, r) <= -1, u = o && Ne(s, r) >= 1, _ = i && i(s) === !1;
  return a || l || _ || p || u;
}
function Fc(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date(), a = i && B(i), l = i && Y(i), p = e && B(e), u = e && Y(e), _ = B(r), f = Y(r), g = l && a && (t > a || t === a && s > l), m = u && p && (t < p || t === p && s < u), b = n && (t < _ || t === _ && s < f), v = o && (t > _ || t === _ && s > f);
  return g || m || b || v;
}
function Mo(s, t, e, i, n) {
  const o = t && B(t), r = e && B(e), a = B(/* @__PURE__ */ new Date()), l = r && s > r, p = o && s < o, u = i && s < a, _ = n && s > a;
  return l || p || u || _;
}
function rf(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && o && Ne(o, l) < 0 || s) && (o = l), o && Si(
    t,
    o,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function af(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && n && Ne(n, l) < 0 || s) && (n = l), n && Si(
    t,
    n,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function Si(s, t, e, i, n, o, r, a) {
  return e === "days" ? B(s) === B(t) && Y(s) === Y(t) : e === "months" ? B(s) === B(t) : e === "years" ? B(t) >= a && B(t) <= r : !1;
}
const lf = "data-te-datepicker-modal-container-ref", cf = "data-te-datepicker-dropdown-container-ref", hf = "data-te-dropdown-backdrop-ref", df = "data-te-datepicker-date-text-ref", ya = "data-te-datepicker-view-ref", uf = "data-te-datepicker-previous-button-ref", pf = "data-te-datepicker-next-button-ref", _f = "data-te-datepicker-ok-button-ref", ff = "data-te-datepicker-cancel-button-ref", mf = "data-te-datepicker-clear-button-ref", gf = "data-te-datepicker-view-change-button-ref";
function bf(s, t, e, i, n, o, r, a, l, p) {
  const u = Y(s), _ = B(s), f = Z(s), g = Ps(s), m = D("div"), b = `
        ${wa(
    s,
    u,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `, v = `
      ${Tf(f, g, u, n, p)}
      ${wa(
    s,
    u,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `;
  return n.inline ? (h.addClass(m, p.datepickerDropdownContainer), m.setAttribute(cf, l), m.innerHTML = b) : (h.addClass(m, p.modalContainer), m.setAttribute(lf, l), m.innerHTML = v), m;
}
function vf(s) {
  const t = D("div");
  return h.addClass(t, s), t.setAttribute(hf, ""), t;
}
function Tf(s, t, e, i, n) {
  return `
      <div class="${n.datepickerHeader}" data-te-datepicker-header>
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${i.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${df} >${i.weekdaysShort[t]}, ${i.monthsShort[e]} ${s}</span>
        </div>
      </div>
    `;
}
function wa(s, t, e, i, n, o, r, a, l, p, u) {
  let _;
  return r.inline ? _ = `
    <div class="${u.datepickerMain}">
      ${xa(t, e, r, u)}
      <div class="${u.datepickerView}" ${ya} tabindex="0">
        ${ka(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
    </div>
  ` : _ = `
    <div class="${u.datepickerMain}">
      ${xa(t, e, r, u)}
      <div class="${u.datepickerView}" ${ya} tabindex="0">
        ${ka(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
      ${Ef(r, u)}
    </div>
  `, _;
}
function ka(s, t, e, i, n, o, r, a, l, p) {
  let u;
  return o.view === "days" ? u = Hs(s, e, o, p) : o.view === "months" ? u = Vs(
    t,
    i,
    n,
    o,
    r,
    p
  ) : u = Ws(
    s,
    i,
    o,
    a,
    l,
    p
  ), u;
}
function xa(s, t, e, i) {
  return `
    <div class="${i.datepickerDateControls}">
      <button class="${i.datepickerViewChangeButton}" aria-label="${e.switchToMultiYearViewLabel}" ${gf}>
        ${e.monthsFull[s]} ${t} ${It(
    e,
    i
  )}
      </button>
      <div class="${i.datepickerArrowControls}">
        <button class="${i.datepickerPreviousButton}" aria-label="${e.prevMonthLabel}" ${uf}>${e.changeMonthIconTemplate}</button>
        <button class="${i.datepickerNextButton}" aria-label="${e.nextMonthLabel}" ${pf}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `;
}
function It(s, t) {
  return `
  <span class="${t.datepickerViewChangeIcon}">
  ${s.viewChangeIconTemplate}
  </span>
  `;
}
function Ef(s, t) {
  const e = `<button class="${t.datepickerFooterBtn}" aria-label="${s.okBtnLabel}" ${_f}>${s.okBtnText}</button>`, i = `<button class="${t.datepickerFooterBtn}" aria-label="${s.cancelBtnLabel}" ${ff}>${s.cancelBtnText}</button>`, n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${s.clearBtnLabel}" ${mf}>${s.clearBtnText}</button>`;
  return `
        <div class="${t.datepickerFooter}">
          
        ${s.removeClearBtn ? "" : n}
        ${s.removeCancelBtn ? "" : i}
        ${s.removeOkBtn ? "" : e}
        </div>
      `;
}
function Hs(s, t, e, i) {
  const n = Cf(s, t, e), r = `
      <tr>
        ${e.weekdaysNarrow.map((l, p) => `<th class="${i.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[p]}">${l}</th>`).join("")}
      </tr>
    `, a = n.map((l) => `
        <tr>
          ${l.map((p) => `
              <td
              class="${i.datepickerCell} ${i.datepickerCellSmall}"
              data-te-date="${B(p.date)}-${Y(
    p.date
  )}-${Z(p.date)}"
              aria-label="${p.date}"
              aria-selected="${p.isSelected}"
              ${p.isSelected ? "data-te-datepicker-cell-selected" : ""}
              ${!p.currentMonth || p.disabled ? "data-te-datepicker-cell-disabled" : ""}
              ${p.isToday ? "data-te-datepicker-cell-current" : ""}
              >
                <div
                  class="${i.datepickerCellContent} ${i.datepickerCellContentSmall}"
                  style="${p.currentMonth ? "display: block" : "display: none"}"
                  >
                  ${p.dayNumber}
                  </div>
              </td>
            `).join("")}
        </tr>
      `).join("");
  return `
      <table class="${i.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `;
}
function Cf(s, t, e) {
  const i = [], n = Y(s), o = Y(nt(s, -1)), r = Y(nt(s, 1)), a = B(s), l = tf(a, n, e), p = No(s), u = No(nt(s, -1)), _ = 7;
  let f = 1, g = !1;
  for (let m = 1; m < _; m++) {
    const b = [];
    if (m === 1) {
      const v = u - l + 1;
      for (let w = v; w <= u; w++) {
        const C = Tt(a, o, w);
        b.push({
          date: C,
          currentMonth: g,
          isSelected: t && pe(C, t),
          isToday: pe(C, Re()),
          dayNumber: Z(C)
        });
      }
      g = !0;
      const E = _ - b.length;
      for (let w = 0; w < E; w++) {
        const C = Tt(a, n, f);
        b.push({
          date: C,
          currentMonth: g,
          isSelected: t && pe(C, t),
          isToday: pe(C, Re()),
          dayNumber: Z(C),
          disabled: Js(
            C,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    } else
      for (let v = 1; v < 8; v++) {
        f > p && (f = 1, g = !1);
        const E = Tt(
          a,
          g ? n : r,
          f
        );
        b.push({
          date: E,
          currentMonth: g,
          isSelected: t && pe(E, t),
          isToday: pe(E, Re()),
          dayNumber: Z(E),
          disabled: Js(
            E,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    i.push(b);
  }
  return i;
}
function Vs(s, t, e, i, n, o) {
  const r = Af(i, n), a = Y(Re()), l = B(Re()), p = `
      ${r.map((u) => `
          <tr>
            ${u.map((_) => {
    const f = i.monthsShort.indexOf(_);
    return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${Fc(
      f,
      s,
      i.min,
      i.max,
      i.disablePast,
      i.disableFuture
    ) ? "data-te-datepicker-cell-disabled" : ""}
                
                data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}"
                ${f === e && s === t ? "data-te-datepicker-cell-selected" : ""}
                ${f === a && s === l ? "data-te-datepicker-cell-current" : ""}" data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}">
                  <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${_}</div>
                </td>
              `;
  }).join("")}
          </tr>
        `).join("")}
    `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${p}
        </tbody>
      </table>
    `;
}
function Af(s, t) {
  const e = [];
  let i = [];
  for (let n = 0; n < s.monthsShort.length; n++)
    if (i.push(s.monthsShort[n]), i.length === t) {
      const o = i;
      e.push(o), i = [];
    }
  return e;
}
function Ws(s, t, e, i, n, o) {
  const r = yf(s, i, n), a = B(Re()), l = `
    ${r.map((p) => `
        <tr>
          ${p.map((u) => `
              <td class="${o.datepickerCell} ${o.datepickerCellLarge}"  aria-label="${u}" data-te-year="${u}"
              ${Mo(
    u,
    e.min,
    e.max,
    e.disablePast,
    e.disableFuture
  ) ? "data-te-datepicker-cell-disabled" : ""}
              ${u === t ? "data-te-datepicker-cell-selected" : ""}
              ${u === a ? "data-te-datepicker-cell-current" : ""}
              >
                <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${u}</div>
              </td>
            `).join("")}
        </tr>
      `).join("")}
  `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `;
}
function yf(s, t, e) {
  const i = [], n = B(s), o = Bs(s, t), r = n - o;
  let a = [];
  for (let l = 0; l < t; l++)
    if (a.push(r + l), a.length === e) {
      const p = a;
      i.push(p), a = [];
    }
  return i;
}
function wf(s, t) {
  return `
    <button id="${s}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `;
}
const Pe = 37, at = 38, Be = 39, z = 40, He = 36, Ve = 35, Yn = 33, jn = 34, ct = 13, Fs = 32, Hi = 27, Mi = 9, kf = 8, xf = 46, vt = 24, os = 4, rs = 4, Kn = "datepicker", Ys = "te.datepicker", ln = `.${Ys}`, Of = ".data-api", Sf = `close${ln}`, If = `open${ln}`, Df = `dateChange${ln}`, as = `click${ln}${Of}`, Yc = "data-te-datepicker-modal-container-ref", jc = "data-te-datepicker-dropdown-container-ref", ls = "[data-te-datepicker-toggle-ref]", $f = `[${Yc}]`, Lf = `[${jc}]`, Nf = "[data-te-datepicker-view-change-button-ref]", Mf = "[data-te-datepicker-previous-button-ref]", Rf = "[data-te-datepicker-next-button-ref]", Pf = "[data-te-datepicker-ok-button-ref]", Bf = "[data-te-datepicker-cancel-button-ref]", Hf = "[data-te-datepicker-clear-button-ref]", Vf = "[data-te-datepicker-view-ref]", Wf = "[data-te-datepicker-toggle-button-ref]", Ff = "[data-te-datepicker-date-text-ref]", Yf = "[data-te-dropdown-backdrop-ref]", jf = "animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Kf = "animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", zf = "animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Uf = "animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Xf = "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-zinc-700", Gf = "w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]", qf = "relative h-full", Zf = "xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-zinc-800", Qf = "h-8 flex flex-col justify-end", Jf = "text-[10px] font-normal uppercase tracking-[1.7px] text-white", tm = "xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end", em = "text-[34px] font-normal text-white", im = "outline-none px-3", sm = "px-3 pt-2.5 pb-0 flex justify-between text-black/[64]", nm = "flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", om = "mt-2.5", rm = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto", am = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto", lm = "h-14 flex absolute w-full bottom-0 justify-end items-center px-3", cm = "outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", hm = "mr-auto", dm = "w-10 h-10 text-center text-[12px] font-normal dark:text-white", um = "text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group", pm = "w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8", _m = "w-[76px] h-[42px]", fm = "mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500", mm = "w-9 h-9 leading-9 rounded-[50%] text-[13px]", gm = "w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]", bm = "mx-auto w-[304px]", vm = "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200", Tm = "inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white", Em = "w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-zinc-700", Cm = {
  title: "Select date",
  container: "body",
  disablePast: !1,
  disableFuture: !1,
  monthsFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  weekdaysFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"],
  okBtnText: "Ok",
  clearBtnText: "Clear",
  cancelBtnText: "Cancel",
  okBtnLabel: "Confirm selection",
  clearBtnLabel: "Clear selection",
  cancelBtnLabel: "Cancel selection",
  nextMonthLabel: "Next month",
  prevMonthLabel: "Previous month",
  nextYearLabel: "Next year",
  prevYearLabel: "Previous year",
  changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
  nextMultiYearLabel: "Next 24 years",
  prevMultiYearLabel: "Previous 24 years",
  switchToMultiYearViewLabel: "Choose year and month",
  switchToMonthViewLabel: "Choose date",
  switchToDayViewLabel: "Choose date",
  startDate: null,
  startDay: 0,
  format: "dd/mm/yyyy",
  view: "days",
  viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
  min: null,
  max: null,
  filter: null,
  inline: !1,
  toggleButton: !0,
  disableToggleButton: !1,
  disableInput: !1,
  animations: !0,
  confirmDateOnSelect: !1,
  removeOkBtn: !1,
  removeCancelBtn: !1,
  removeClearBtn: !1
}, Am = {
  title: "string",
  container: "string",
  disablePast: "boolean",
  disableFuture: "boolean",
  monthsFull: "array",
  monthsShort: "array",
  weekdaysFull: "array",
  weekdaysShort: "array",
  weekdaysNarrow: "array",
  okBtnText: "string",
  clearBtnText: "string",
  cancelBtnText: "string",
  okBtnLabel: "string",
  clearBtnLabel: "string",
  cancelBtnLabel: "string",
  nextMonthLabel: "string",
  prevMonthLabel: "string",
  nextYearLabel: "string",
  prevYearLabel: "string",
  nextMultiYearLabel: "string",
  prevMultiYearLabel: "string",
  changeMonthIconTemplate: "string",
  switchToMultiYearViewLabel: "string",
  switchToMonthViewLabel: "string",
  switchToDayViewLabel: "string",
  startDate: "(null|string|date)",
  startDay: "number",
  format: "string",
  view: "string",
  viewChangeIconTemplate: "string",
  min: "(null|string|date)",
  max: "(null|string|date)",
  filter: "(null|function)",
  inline: "boolean",
  toggleButton: "boolean",
  disableToggleButton: "boolean",
  disableInput: "boolean",
  animations: "boolean",
  confirmDateOnSelect: "boolean",
  removeOkBtn: "boolean",
  removeCancelBtn: "boolean",
  removeClearBtn: "boolean"
}, ym = {
  fadeIn: jf,
  fadeOut: Kf,
  fadeInShort: zf,
  fadeOutShort: Uf,
  modalContainer: Xf,
  datepickerBackdrop: Gf,
  datepickerMain: qf,
  datepickerHeader: Zf,
  datepickerTitle: Qf,
  datepickerTitleText: Jf,
  datepickerDate: tm,
  datepickerDateText: em,
  datepickerView: im,
  datepickerDateControls: sm,
  datepickerViewChangeButton: nm,
  datepickerViewChangeIcon: Tm,
  datepickerArrowControls: om,
  datepickerPreviousButton: rm,
  datepickerNextButton: am,
  datepickerFooter: lm,
  datepickerFooterBtn: cm,
  datepickerClearBtn: hm,
  datepickerDayHeading: dm,
  datepickerCell: um,
  datepickerCellSmall: pm,
  datepickerCellLarge: _m,
  datepickerCellContent: fm,
  datepickerCellContentSmall: mm,
  datepickerCellContentLarge: gm,
  datepickerTable: bm,
  datepickerToggleButton: vm,
  datepickerDropdownContainer: Em
}, wm = {
  fadeIn: "string",
  fadeOut: "string",
  fadeInShort: "string",
  fadeOutShort: "string",
  modalContainer: "string",
  datepickerBackdrop: "string",
  datepickerMain: "string",
  datepickerHeader: "string",
  datepickerTitle: "string",
  datepickerTitleText: "string",
  datepickerDate: "string",
  datepickerDateText: "string",
  datepickerView: "string",
  datepickerDateControls: "string",
  datepickerViewChangeButton: "string",
  datepickerArrowControls: "string",
  datepickerPreviousButton: "string",
  datepickerNextButton: "string",
  datepickerFooter: "string",
  datepickerFooterBtn: "string",
  datepickerClearBtn: "string",
  datepickerDayHeading: "string",
  datepickerCell: "string",
  datepickerCellSmall: "string",
  datepickerCellLarge: "string",
  datepickerCellContent: "string",
  datepickerCellContentSmall: "string",
  datepickerCellContentLarge: "string",
  datepickerTable: "string",
  datepickerToggleButton: "string",
  datepickerDropdownContainer: "string"
};
class km {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = !1, this._toggleButtonId = rt("datepicker-toggle-"), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this._scrollBar = new Xe(), this._element && y.setData(t, Ys, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
  }
  // Getters
  static get NAME() {
    return Kn;
  }
  get container() {
    return d.findOne(
      `[${Yc}='${this._toggleButtonId}']`
    ) || d.findOne(
      `[${jc}='${this._toggleButtonId}']`
    );
  }
  get options() {
    return this._options;
  }
  get activeCell() {
    let t;
    return this._view === "days" && (t = this._getActiveDayCell()), this._view === "months" && (t = this._getActiveMonthCell()), this._view === "years" && (t = this._getActiveYearCell()), t;
  }
  get activeDay() {
    return Z(this._activeDate);
  }
  get activeMonth() {
    return Y(this._activeDate);
  }
  get activeYear() {
    return B(this._activeDate);
  }
  get firstYearInView() {
    return this.activeYear - Bs(this._activeDate, vt);
  }
  get lastYearInView() {
    return this.firstYearInView + vt - 1;
  }
  get viewChangeButton() {
    return d.findOne(Nf, this.container);
  }
  get previousButton() {
    return d.findOne(Mf, this.container);
  }
  get nextButton() {
    return d.findOne(Rf, this.container);
  }
  get okButton() {
    return d.findOne(Pf, this.container);
  }
  get cancelButton() {
    return d.findOne(Bf, this.container);
  }
  get clearButton() {
    return d.findOne(Hf, this.container);
  }
  get datesContainer() {
    return d.findOne(Vf, this.container);
  }
  get toggleButton() {
    return d.findOne(Wf, this._element);
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    if (t = {
      ...Cm,
      ...e,
      ...t
    }, I(Kn, t, Am), t.max && typeof t.max == "string" && (t.max = new Date(t.max)), t.min && typeof t.min == "string" && (t.min = new Date(t.min)), t.startDay && t.startDay !== 0) {
      const i = this._getNewDaysOrderArray(t);
      t.weekdaysNarrow = i;
    }
    return t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...ym,
      ...e,
      ...t
    }, I(Kn, t, wm), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getNewDaysOrderArray(t) {
    const e = t.startDay, i = t.weekdaysNarrow;
    return i.slice(e).concat(i.slice(0, e));
  }
  _init() {
    !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
  }
  _appendToggleButton() {
    const t = wf(
      this._toggleButtonId,
      this._classes.datepickerToggleButton
    );
    this._element.insertAdjacentHTML("beforeend", t);
  }
  open() {
    if (this._input.readOnly || this._input.disabled)
      return;
    const t = c.trigger(this._element, If);
    if (this._isOpen || t.defaultPrevented)
      return;
    this._setInitialDate();
    const e = vf(this._classes.datepickerBackdrop), i = bf(
      this._activeDate,
      this._selectedDate,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      rs,
      vt,
      os,
      this._toggleButtonId,
      this._classes
    );
    this._options.inline ? this._openDropdown(i) : (this._openModal(e, i), this._scrollBar.hide()), this._animations && (h.addClass(this.container, this._classes.fadeIn), h.addClass(e, this._classes.fadeInShort)), this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._updateControlsDisabledState(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = !0, setTimeout(() => {
      this._listenToOutsideClick();
    }, 0);
  }
  _openDropdown(t) {
    this._popper = Te(this._input, t, {
      placement: "bottom-start"
    }), this._getContainer().appendChild(t);
  }
  _openModal(t, e) {
    const i = this._getContainer();
    i.appendChild(t), i.appendChild(e);
  }
  _setFocusTrap(t) {
    this._focusTrap = new Bi(t, {
      event: "keydown",
      condition: (e) => e.key === "Tab"
    }), this._focusTrap.trap();
  }
  _listenToUserInput() {
    c.on(this._input, "input", (t) => {
      this._handleUserInput(t.target.value);
    });
  }
  _listenToToggleClick() {
    c.on(
      this._element,
      as,
      ls,
      (t) => {
        t.preventDefault(), this.open();
      }
    );
  }
  _listenToToggleKeydown() {
    c.on(
      this._element,
      "keydown",
      ls,
      (t) => {
        t.keyCode === ct && !this._isOpen && this.open();
      }
    );
  }
  _listenToDateSelection() {
    c.on(this.datesContainer, "click", (t) => {
      this._handleDateSelection(t);
    });
  }
  _handleDateSelection(t) {
    const e = t.target.nodeName === "DIV" ? t.target.parentNode.dataset : t.target.dataset, i = t.target.nodeName === "DIV" ? t.target.parentNode : t.target;
    if (e.teDate && this._pickDay(e.teDate, i), e.teMonth && e.teYear) {
      const n = parseInt(e.teMonth, 10), o = parseInt(e.teYear, 10);
      this._pickMonth(n, o);
    }
    if (e.teYear && !e.teMonth) {
      const n = parseInt(e.teYear, 10);
      this._pickYear(n);
    }
    this._options.inline || this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _updateHeaderDate(t, e, i) {
    const n = d.findOne(
      Ff,
      this.container
    ), o = Y(t), r = Z(t), a = Ps(t);
    n.innerHTML = `${i[a]}, ${e[o]} ${r}`;
  }
  _addControlsListeners() {
    c.on(this.nextButton, "click", () => {
      this._view === "days" ? this.nextMonth() : this._view === "years" ? this.nextYears() : this.nextYear(), this._updateControlsDisabledState();
    }), c.on(this.previousButton, "click", () => {
      this._view === "days" ? this.previousMonth() : this._view === "years" ? this.previousYears() : this.previousYear(), this._updateControlsDisabledState();
    }), c.on(this.viewChangeButton, "click", () => {
      this._view === "days" ? this._changeView("years") : (this._view === "years" || this._view === "months") && this._changeView("days");
    }), this._options.inline || this._listenToFooterButtonsClick();
  }
  _listenToFooterButtonsClick() {
    c.on(this.okButton, "click", () => this.handleOk()), c.on(this.cancelButton, "click", () => this.handleCancel()), c.on(this.clearButton, "click", () => this.handleClear());
  }
  _listenToOutsideClick() {
    c.on(document, as, (t) => {
      const e = t.target === this.container, i = this.container && this.container.contains(t.target);
      !e && !i && this.close();
    });
  }
  _listenToEscapeClick() {
    c.on(document, "keydown", (t) => {
      t.keyCode === Hi && this._isOpen && this.close();
    });
  }
  _listenToKeyboardNavigation() {
    c.on(this.datesContainer, "keydown", (t) => {
      this._handleKeydown(t);
    });
  }
  _listenToDatesContainerFocus() {
    c.on(this.datesContainer, "focus", () => {
      this._focusActiveCell(this.activeCell);
    });
  }
  _listenToDatesContainerBlur() {
    c.on(this.datesContainer, "blur", () => {
      this._removeCurrentFocusStyles();
    });
  }
  _handleKeydown(t) {
    this._view === "days" && this._handleDaysViewKeydown(t), this._view === "months" && this._handleMonthsViewKeydown(t), this._view === "years" && this._handleYearsViewKeydown(t);
  }
  _handleDaysViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Pe:
        this._activeDate = we(this._activeDate, F() ? 1 : -1);
        break;
      case Be:
        this._activeDate = we(this._activeDate, F() ? -1 : 1);
        break;
      case at:
        this._activeDate = we(this._activeDate, -7);
        break;
      case z:
        this._activeDate = we(this._activeDate, 7);
        break;
      case He:
        this._activeDate = we(
          this._activeDate,
          1 - Z(this._activeDate)
        );
        break;
      case Ve:
        this._activeDate = we(
          this._activeDate,
          No(this._activeDate) - Z(this._activeDate)
        );
        break;
      case Yn:
        this._activeDate = nt(this._activeDate, -1);
        break;
      case jn:
        this._activeDate = nt(this._activeDate, 1);
        break;
      case ct:
      case Fs:
        this._selectDate(this._activeDate), this._handleDateSelection(t), t.preventDefault();
        return;
      default:
        return;
    }
    Si(
      e,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max
    ) || this._changeView("days"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _asyncFocusDatesContainer() {
    setTimeout(() => {
      this.datesContainer.focus();
    }, 0);
  }
  _focusActiveCell(t) {
    t && t.setAttribute("data-te-datepicker-cell-focused", "");
  }
  _removeHighlightFromCell(t) {
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  _getActiveDayCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = Aa(i.dataset.teDate);
      return pe(n, this._activeDate);
    });
  }
  _handleMonthsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Pe:
        this._activeDate = nt(this._activeDate, F() ? 1 : -1);
        break;
      case Be:
        this._activeDate = nt(this._activeDate, F() ? -1 : 1);
        break;
      case at:
        this._activeDate = nt(this._activeDate, -4);
        break;
      case z:
        this._activeDate = nt(this._activeDate, 4);
        break;
      case He:
        this._activeDate = nt(this._activeDate, -this.activeMonth);
        break;
      case Ve:
        this._activeDate = nt(this._activeDate, 11 - this.activeMonth);
        break;
      case Yn:
        this._activeDate = it(this._activeDate, -1);
        break;
      case jn:
        this._activeDate = it(this._activeDate, 1);
        break;
      case ct:
      case Fs:
        this._selectMonth(this.activeMonth);
        return;
      default:
        return;
    }
    Si(
      e,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max
    ) || this._changeView("months"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveMonthCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = parseInt(i.dataset.teYear, 10), o = parseInt(i.dataset.teMonth, 10);
      return n === this.activeYear && o === this.activeMonth;
    });
  }
  _handleYearsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell, n = 4, o = 24;
    switch (t.keyCode) {
      case Pe:
        this._activeDate = it(this._activeDate, F() ? 1 : -1);
        break;
      case Be:
        this._activeDate = it(this._activeDate, F() ? -1 : 1);
        break;
      case at:
        this._activeDate = it(this._activeDate, -n);
        break;
      case z:
        this._activeDate = it(this._activeDate, n);
        break;
      case He:
        this._activeDate = it(
          this._activeDate,
          -Bs(this._activeDate, o)
        );
        break;
      case Ve:
        this._activeDate = it(
          this._activeDate,
          o - Bs(this._activeDate, o) - 1
        );
        break;
      case Yn:
        this._activeDate = it(this._activeDate, -o);
        break;
      case jn:
        this._activeDate = it(this._activeDate, o);
        break;
      case ct:
      case Fs:
        this._selectYear(this.activeYear);
        return;
      default:
        return;
    }
    Si(
      e,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max
    ) || this._changeView("years"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveYearCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => parseInt(i.dataset.teYear, 10) === this.activeYear);
  }
  _setInitialDate() {
    this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = /* @__PURE__ */ new Date();
  }
  close() {
    const t = c.trigger(this._element, Sf);
    !this._isOpen || t.defaultPrevented || (this._removeDatepickerListeners(), this._animations && h.addClass(this.container, this._classes.fadeOut), this._options.inline ? this._closeDropdown() : this._closeModal(), this._isOpen = !1, this._view = this._options.view, this.toggleButton ? this.toggleButton.focus() : this._input.focus());
  }
  _closeDropdown() {
    const t = d.findOne(Lf), e = this._getContainer();
    window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t && e.removeChild(t), this._popper && this._popper.destroy()), t.addEventListener("animationend", () => {
      t && e.removeChild(t), this._popper && this._popper.destroy();
    }), this._removeFocusTrap();
  }
  _closeModal() {
    const t = d.findOne(Yf), e = d.findOne($f);
    !e || !t || (this._animations ? (h.addClass(t, this._classes.fadeOutShort), t.addEventListener("animationend", () => {
      this._removePicker(t, e), this._scrollBar.reset();
    })) : (this._removePicker(t, e), this._scrollBar.reset()));
  }
  _removePicker(t, e) {
    const i = this._getContainer();
    i.removeChild(t), i.removeChild(e);
  }
  _removeFocusTrap() {
    this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
  }
  _removeDatepickerListeners() {
    c.off(this.nextButton, "click"), c.off(this.previousButton, "click"), c.off(this.viewChangeButton, "click"), c.off(this.okButton, "click"), c.off(this.cancelButton, "click"), c.off(this.clearButton, "click"), c.off(this.datesContainer, "click"), c.off(this.datesContainer, "keydown"), c.off(this.datesContainer, "focus"), c.off(this.datesContainer, "blur"), c.off(document, as);
  }
  dispose() {
    this._isOpen && this.close(), this._removeInputAndToggleListeners();
    const t = d.findOne(
      `#${this._toggleButtonId}`
    );
    t && this._element.removeChild(t), y.removeData(this._element, Ys), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
  }
  _removeInputAndToggleListeners() {
    c.off(this._input, "input"), c.off(
      this._element,
      as,
      ls
    ), c.off(this._element, "keydown", ls);
  }
  handleOk() {
    this._confirmSelection(this._headerDate), this.close();
  }
  _selectDate(t, e = this.activeCell) {
    const { min: i, max: n, filter: o, disablePast: r, disableFuture: a } = this._options;
    Js(t, i, n, o, r, a) || (this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._selectedDate = t, this._selectedYear = B(t), this._selectedMonth = Y(t), this._headerDate = t, (this._options.inline || this.options.confirmDateOnSelect) && (this._confirmSelection(t), this.close()));
  }
  _selectYear(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerYear = t, this._asyncChangeView("months");
  }
  _selectMonth(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerMonth = t, this._asyncChangeView("days");
  }
  _removeSelectedStyles(t) {
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _addSelectedStyles(t) {
    t && t.setAttribute("data-te-datepicker-cell-selected", "");
  }
  _confirmSelection(t) {
    if (t) {
      const e = this.formatDate(t);
      this._input.value = e, c.trigger(this._element, Df, { date: t }), c.trigger(this._input, "input");
    }
  }
  handleCancel() {
    this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
  }
  handleClear() {
    this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._setInitialDate(), this._changeView("days"), this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _removeCurrentSelectionStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-selected]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _removeCurrentFocusStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-focused]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  formatDate(t) {
    const e = Z(t), i = this._addLeadingZero(Z(t)), n = this._options.weekdaysShort[Ps(t)], o = this._options.weekdaysFull[Ps(t)], r = Y(t) + 1, a = this._addLeadingZero(Y(t) + 1), l = this._options.monthsShort[Y(t)], p = this._options.monthsFull[Y(t)], u = B(t).toString().length === 2 ? B(t) : B(t).toString().slice(2, 4), _ = B(t), f = this._options.format.split(
      /(d{1,4}|m{1,4}|y{4}|yy|!.)/g
    );
    let g = "";
    return f.forEach((m) => {
      switch (m) {
        case "dddd":
          m = m.replace(m, o);
          break;
        case "ddd":
          m = m.replace(m, n);
          break;
        case "dd":
          m = m.replace(m, i);
          break;
        case "d":
          m = m.replace(m, e);
          break;
        case "mmmm":
          m = m.replace(m, p);
          break;
        case "mmm":
          m = m.replace(m, l);
          break;
        case "mm":
          m = m.replace(m, a);
          break;
        case "m":
          m = m.replace(m, r);
          break;
        case "yyyy":
          m = m.replace(m, _);
          break;
        case "yy":
          m = m.replace(m, u);
          break;
      }
      g += m;
    }), g;
  }
  _addLeadingZero(t) {
    return parseInt(t, 10) < 10 ? `0${t}` : t;
  }
  _pickDay(t, e) {
    const i = Aa(t), { min: n, max: o, filter: r, disablePast: a, disableFuture: l } = this._options;
    Js(i, n, o, r, a, l) || (this._activeDate = i, this._selectDate(i, e));
  }
  _pickYear(t) {
    const { min: e, max: i, disablePast: n, disableFuture: o } = this._options;
    if (Mo(t, e, i, n, o))
      return;
    const r = Tt(t, this.activeMonth, this.activeDay);
    this._activeDate = r, this._selectedDate = r, this._selectYear(t);
  }
  _pickMonth(t, e) {
    const { min: i, max: n, disablePast: o, disableFuture: r } = this._options;
    if (Fc(t, e, i, n, o, r) || Mo(e, i, n, o, r))
      return;
    const a = Tt(e, t, this.activeDay);
    this._activeDate = a, this._selectMonth(t);
  }
  nextMonth() {
    const t = nt(this._activeDate, 1), e = Hs(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this._activeDate = t, this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousMonth() {
    const t = nt(this._activeDate, -1);
    this._activeDate = t;
    const e = Hs(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  nextYear() {
    const t = it(this._activeDate, 1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    );
    const e = Vs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      rs,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  previousYear() {
    const t = it(this._activeDate, -1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    );
    const e = Vs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      rs,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  nextYears() {
    const t = it(this._activeDate, 24);
    this._activeDate = t;
    const e = Ws(
      t,
      this._selectedYear,
      this._options,
      vt,
      os,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousYears() {
    const t = it(this._activeDate, -24);
    this._activeDate = t;
    const e = Ws(
      t,
      this._selectedYear,
      this._options,
      vt,
      os,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  _asyncChangeView(t) {
    setTimeout(() => {
      this._changeView(t);
    }, 0);
  }
  _changeView(t) {
    this._view = t, this.datesContainer.blur(), t === "days" && (this.datesContainer.innerHTML = Hs(
      this._activeDate,
      this._headerDate,
      this._options,
      this._classes
    )), t === "months" && (this.datesContainer.innerHTML = Vs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      rs,
      this._classes
    )), t === "years" && (this.datesContainer.innerHTML = Ws(
      this._activeDate,
      this._selectedYear,
      this._options,
      vt,
      os,
      this._classes
    )), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t), this._updateControlsDisabledState();
  }
  _updateViewControlsAndAttributes(t) {
    t === "days" && (this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMultiYearViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMonthLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t === "months" && (this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToDayViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevYearLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t === "years" && (this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += It(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMonthViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMultiYearLabel
    ), this.nextButton.setAttribute(
      "aria-label",
      this._options.nextMultiYearLabel
    ));
  }
  _updateControlsDisabledState() {
    rf(
      this._options.disableFuture,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.nextButton.disabled = !0 : this.nextButton.disabled = !1, af(
      this._options.disablePast,
      this._activeDate,
      this._view,
      vt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.previousButton.disabled = !0 : this.previousButton.disabled = !1;
  }
  _handleUserInput(t) {
    const e = this._getDelimeters(this._options.format), i = this._parseDate(t, this._options.format, e);
    sf(i) ? (this._activeDate = i, this._selectedDate = i, this._selectedYear = B(i), this._selectedMonth = Y(i), this._headerDate = i) : (this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null);
  }
  _getDelimeters(t) {
    return t.match(/[^(dmy)]{1,}/g);
  }
  _parseDate(t, e, i) {
    let n;
    i[0] !== i[1] ? n = i[0] + i[1] : n = i[0];
    const o = new RegExp(`[${n}]`), r = t.split(o), a = e.split(o), l = e.indexOf("mmm") !== -1, p = [];
    for (let b = 0; b < a.length; b++)
      a[b].indexOf("yy") !== -1 && (p[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (p[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (p[2] = { value: r[b], format: a[b] });
    let u;
    e.indexOf("mmmm") !== -1 ? u = this._options.monthsFull : u = this._options.monthsShort;
    const _ = Number(p[0].value), f = l ? this.getMonthNumberByMonthName(p[1].value, u) : Number(p[1].value) - 1, g = Number(p[2].value);
    return Tt(_, f, g);
  }
  getMonthNumberByMonthName(t, e) {
    return e.findIndex((i) => i === t);
  }
  static getInstance(t) {
    return y.getData(t, Ys);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const xm = ({
  format24: s,
  okLabel: t,
  cancelLabel: e,
  headID: i,
  footerID: n,
  bodyID: o,
  pickerID: r,
  clearLabel: a,
  inline: l,
  showClearBtn: p,
  amLabel: u,
  pmLabel: _
}, f) => {
  const g = `<div id='${r}' class='${f.timepickerWrapper}' data-te-timepicker-wrapper>
      <div class="${f.timepickerContainer}">
        <div class="${f.timepickerElements}" data-te-timepicker-elements-wrapper>
        <div id='${i}' class='${f.timepickerHead}' style='padding-right:${s ? 50 : 10}px'>
        <div class='${f.timepickerHeadContent}'>
            <div class="${f.timepickerCurrentWrapper}">
              <span class="${f.timepickerCurrentButtonWrapper}">
                <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${f.timepickerDot}' disabled>:</button>
            <span class="${f.timepickerCurrentButtonWrapper}">
              <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${s ? "" : `<div class="${f.timepickerModeWrapper}">
                  <button type='button' class="${f.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${u}</button>
                  <button class="${f.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${_}</button>
                </div>`}
        </div>
      </div>
      ${l ? "" : `<div id='${o}' class='${f.timepickerClockWrapper}' data-te-timepicker-clock-wrapper>
            <div class='${f.timepickerClock}' data-te-timepicker-clock>
              <span class='${f.timepickerMiddleDot}' data-te-timepicker-middle-dot></span>
              <div class='${f.timepickerHandPointer}' data-te-timepicker-hand-pointer>
                <div class='${f.timepickerPointerCircle}' data-te-timepicker-circle></div>
              </div>
              ${s ? '<div class="' + f.timepickerClockInner + '" data-te-timepicker-clock-inner></div>' : ""}
            </div>
          </div>`}
    </div>
    <div id='${n}' class='${f.timepickerFooterWrapper}'>
      <div class="${f.timepickerFooter}">
        ${p ? `<button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>` : ""}
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`, m = `<div id='${r}' class='${f.timepickerInlineWrapper}' data-te-timepicker-wrapper>
        <div class="${f.timepickerInlineContainer}">
          <div class="${f.timepickerInlineElements}" data-te-timepicker-elements-wrapper>
          <div id='${i}' class='${f.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${f.timepickerInlineHeadContent}'>
              <div class="${f.timepickerCurrentWrapper}">
                <span class="${f.timepickerInlineHourWrapper}" data-te-timepicker-inline-hour-icons>
                  <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineDot}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${f.timepickerCurrentMinuteWrapper}">
                <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${s ? "" : `<div class="${f.timepickerInlineModeWrapper}">
                      <button type='button' class="${f.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${u}</button>
                      <button class="${f.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${_}</button>
                      <button type='button' class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`}
              ${s ? `<button class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
</div>`;
  return l ? m : g;
}, Om = (s, t, e) => {
  const { iconSVG: i } = s;
  return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${i}
  </button>
`;
}, cn = "data-te-timepicker-disabled", cs = "data-te-timepicker-active", ge = (s) => {
  if (s === "")
    return;
  let t, e, i, n;
  return Kc(s) ? (t = s.getHours(), n = t, e = s.getMinutes(), t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM"), e = e < 10 ? `0${e}` : e) : ([t, e, i] = R(s, !1), n = t, t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM")), {
    hours: t,
    minutes: e,
    amOrPm: i
  };
}, Kc = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !Number.isNaN(s), Oa = (s) => {
  if (s === "")
    return;
  let t, e;
  return Kc(s) ? (t = s.getHours(), e = s.getMinutes()) : [t, e] = R(s, !1), e = Number(e) < 10 ? `0${Number(e)}` : e, {
    hours: t,
    minutes: e
  };
}, Sm = (s, t, e) => c.on(document, s, t, ({ target: i }) => {
  if (i.hasAttribute(cs))
    return;
  document.querySelectorAll(t).forEach((o) => {
    o.hasAttribute(cs) && (h.removeClass(o, e.opacity), o.removeAttribute(cs));
  }), h.addClass(i, e.opacity), i.setAttribute(cs, "");
}), Sa = ({ clientX: s, clientY: t, touches: e }, i, n = !1) => {
  const { left: o, top: r } = i.getBoundingClientRect();
  let a = {};
  return !n || !e ? a = {
    x: s - o,
    y: t - r
  } : n && Object.keys(e).length > 0 && (a = {
    x: e[0].clientX - o,
    y: e[0].clientY - r
  }), a;
}, hs = () => navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), R = (s, t = !0) => t ? s.value.replace(/:/gi, " ").split(" ") : s.replace(/:/gi, " ").split(" "), zc = (s, t) => {
  const [e, i, n] = R(s, !1), [o, r, a] = R(t, !1);
  return n === "PM" && a === "AM" || n === a && e > o || i > r;
}, Uc = () => {
  const s = /* @__PURE__ */ new Date(), t = s.getHours(), e = s.getMinutes();
  return `${t}:${e < 10 ? `0${e}` : e}`;
}, Ut = (s, t, e) => {
  if (!t)
    return s;
  let i = Uc();
  return e && (i = `${ge(i).hours}:${ge(i).minutes} ${ge(i).amOrPm}`), (s !== "" && zc(i, s) || s === "") && (s = i), s;
}, Xt = (s, t, e) => {
  if (!t)
    return s;
  let i = Uc();
  return e && (i = `${ge(i).hours}:${ge(i).minutes} ${ge(i).amOrPm}`), (s !== "" && !zc(i, s) || s === "") && (s = i), s;
}, Im = ({ format12: s, maxTime: t, minTime: e, disablePast: i, disableFuture: n }, o, r) => {
  const a = R(o)[1];
  e = Ut(e, i, s), t = Xt(t, n, s);
  const [l, p, u] = R(t, !1), [_, f, g] = R(e, !1);
  if (u !== void 0 || g !== void 0)
    return [r, a];
  if (!(l !== "" && _ === "" && Number(r) > Number(l)) && !(l === "" && _ !== "" && p === void 0 && f !== "" && Number(r) < Number(_)))
    return [r, a];
}, Ia = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, (n.textContent === "00" || Number(n.textContent === "12" && i ? "0" : n.textContent) > t) && (h.addClass(n, e.tipsDisabled), n.setAttribute(cn, ""));
  });
}, Da = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, n.textContent !== "00" && Number(n.textContent === "12" && i ? "0" : n.textContent) < Number(t) && (h.addClass(n, e.tipsDisabled), n.setAttribute(cn, ""));
  });
}, Xc = (s, t, e, i) => {
  if (t === "12" || t === "24")
    return;
  const n = e ? 12 : 24;
  return i === "max" ? (Number(s) === n ? 0 : Number(s)) > Number(t) : (Number(s) === n ? 0 : Number(s)) < Number(t);
}, Dm = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Xc(i, e, o, "max") || Number(r.textContent) > t && Number(i) === Number(e)) && (h.addClass(r, n.tipsDisabled), r.setAttribute(cn, ""));
  });
}, $m = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Xc(i, e, o, "min") || Number(r.textContent) < t && Number(i) === Number(e)) && (h.addClass(r, n.tipsDisabled), r.setAttribute(cn, ""));
  });
}, Lm = (s) => s.startsWith("0") ? Number(s.slice(1)) : Number(s), Ii = "timepicker", N = `data-te-${Ii}`, $a = "[data-te-toggle]", js = `te.${Ii}`, Mt = `.${js}`, Rt = ".data-api", La = `click${Mt}${Rt}`, ds = `keydown${Mt}${Rt}`, Na = `mousedown${Mt}${Rt}`, Ma = `mouseup${Mt}${Rt}`, Ra = `mousemove${Mt}${Rt}`, Pa = `mouseleave${Mt}${Rt}`, Ba = `mouseover${Mt}${Rt}`, Ha = `touchmove${Mt}${Rt}`, Va = `touchend${Mt}${Rt}`, Wa = `touchstart${Mt}${Rt}`, Nm = `[${N}-am]`, Mm = `[${N}-pm]`, Rm = `[${N}-format24]`, us = `[${N}-current]`, ps = `[${N}-hour-mode]`, Pm = `[${N}-toggle-button]`, zn = `${N}-cancel`, Fa = `${N}-clear`, Un = `${N}-submit`, Bm = `${N}-icon`, Xn = `${N}-icon-up`, Gn = `${N}-icon-down`, Hm = `${N}-icon-inline-hour`, Vm = `${N}-icon-inline-minute`, Ya = `${N}-inline-hour-icons`, Wm = `${N}-current-inline`, Fm = "readonly", Ym = `${N}-invalid-feedback`, qn = `${N}-is-invalid`, Ft = `${N}-disabled`, H = `${N}-active`, jm = `${N}-input`, de = `${N}-clock`, ci = `${N}-clock-inner`, Zn = `${N}-wrapper`, ja = `${N}-clock-wrapper`, _s = `${N}-hour`, Qn = `${N}-minute`, fs = `${N}-tips-element`, K = `${N}-tips-hours`, X = `${N}-tips-minutes`, lt = `${N}-tips-inner`, ms = `${N}-tips-inner-element`, Ka = `${N}-middle-dot`, Jn = `${N}-hand-pointer`, to = `${N}-circle`, za = `${N}-modal`, Km = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`, zm = {
  appendValidationInfo: !0,
  bodyID: "",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  closeModalOnBackdropClick: !0,
  closeModalOnMinutesClick: !1,
  container: "body",
  defaultTime: "",
  disabled: !1,
  disablePast: !1,
  disableFuture: !1,
  enableValidation: !0,
  focusInputAfterApprove: !1,
  footerID: "",
  format12: !0,
  format24: !1,
  headID: "",
  increment: !1,
  inline: !1,
  invalidLabel: "Invalid Time Format",
  maxTime: "",
  minTime: "",
  modalID: "",
  okLabel: "Ok",
  overflowHidden: !0,
  pickerID: "",
  readOnly: !1,
  showClearBtn: !0,
  switchHoursToMinutesOnClick: !0,
  iconSVG: Km,
  withIcon: !0,
  pmLabel: "PM",
  amLabel: "AM",
  animations: !0
}, Um = {
  appendValidationInfo: "boolean",
  bodyID: "string",
  cancelLabel: "string",
  clearLabel: "string",
  closeModalOnBackdropClick: "boolean",
  closeModalOnMinutesClick: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  enableValidation: "boolean",
  footerID: "string",
  format12: "boolean",
  format24: "boolean",
  headID: "string",
  increment: "boolean",
  inline: "boolean",
  invalidLabel: "string",
  modalID: "string",
  okLabel: "string",
  overflowHidden: "boolean",
  pickerID: "string",
  readOnly: "boolean",
  showClearBtn: "boolean",
  switchHoursToMinutesOnClick: "boolean",
  defaultTime: "(string|date|number)",
  iconSVG: "string",
  withIcon: "boolean",
  pmLabel: "string",
  amLabel: "string",
  animations: "boolean"
}, Xm = {
  tips: "absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent",
  tipsActive: "text-white bg-[#3b71ca] font-normal",
  tipsDisabled: "text-[#b3afaf] pointer-events-none bg-transparent",
  transform: "transition-[transform,height] ease-in-out duration-[400ms]",
  modal: "z-[1065]",
  clockAnimation: "animate-[show-up-clock_350ms_linear]",
  opacity: "!opacity-100",
  timepickerWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed",
  timepickerContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg",
  timepickerElements: "flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center",
  timepickerHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly",
  timepickerCurrentWrapper: "[direction:ltr] rtl:[direction:rtl]",
  timepickerCurrentButtonWrapper: "relative h-full",
  timepickerCurrentButton: "text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ",
  timepickerDot: "font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal",
  timepickerModeWrapper: "flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerModeAm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerModePm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerClockWrapper: "min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500",
  timepickerClock: "relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50",
  timepickerMiddleDot: "top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute",
  timepickerHandPointer: "bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute",
  timepickerPointerCircle: "-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute",
  timepickerClockInner: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]",
  timepickerFooterWrapper: "rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500",
  timepickerFooter: "w-full flex justify-between",
  timepickerFooterButton: "text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none",
  timepickerInlineWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg",
  timepickerInlineContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
  timepickerInlineElements: "flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerInlineHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg",
  timepickerInlineHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center",
  timepickerInlineHourWrapper: "relative h-full !opacity-100",
  timepickerCurrentMinuteWrapper: "relative h-full",
  timepickerInlineIconUp: "absolute text-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineIconSvg: "h-4 w-4",
  timepickerInlineCurrentButton: "font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]",
  timepickerInlineIconDown: "absolute text-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineDot: "font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]",
  timepickerInlineModeWrapper: "flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerInlineModeAm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6",
  timepickerInlineModePm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer",
  timepickerInlineSubmitButton: "hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0",
  timepickerToggleButton: "h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white"
}, Gm = {
  tips: "string",
  tipsActive: "string",
  tipsDisabled: "string",
  transform: "string",
  modal: "string",
  clockAnimation: "string",
  opacity: "string",
  timepickerWrapper: "string",
  timepickerContainer: "string",
  timepickerElements: "string",
  timepickerHead: "string",
  timepickerHeadContent: "string",
  timepickerCurrentWrapper: "string",
  timepickerCurrentButtonWrapper: "string",
  timepickerCurrentButton: "string",
  timepickerDot: "string",
  timepickerModeWrapper: "string",
  timepickerModeAm: "string",
  timepickerModePm: "string",
  timepickerClockWrapper: "string",
  timepickerClock: "string",
  timepickerMiddleDot: "string",
  timepickerHandPointer: "string",
  timepickerPointerCircle: "string",
  timepickerClockInner: "string",
  timepickerFooterWrapper: "string",
  timepickerFooterButton: "string",
  timepickerInlineWrapper: "string",
  timepickerInlineContainer: "string",
  timepickerInlineElements: "string",
  timepickerInlineHead: "string",
  timepickerInlineHeadContent: "string",
  timepickerInlineHourWrapper: "string",
  timepickerCurrentMinuteWrapper: "string",
  timepickerInlineIconUp: "string",
  timepickerInlineIconSvg: "string",
  timepickerInlineCurrentButton: "string",
  timepickerInlineIconDown: "string",
  timepickerInlineDot: "string",
  timepickerInlineModeWrapper: "string",
  timepickerInlineModeAm: "string",
  timepickerInlineModePm: "string",
  timepickerInlineSubmitButton: "string",
  timepickerToggleButton: "string"
};
class qm {
  constructor(t, e = {}, i) {
    Ct(this, "_toggleAmPm", (t) => {
      t === "PM" ? (this._isPmEnabled = !0, this._isAmEnabled = !1) : t === "AM" && (this._isPmEnabled = !1, this._isAmEnabled = !0);
    });
    Ct(this, "_toggleBackgroundColorCircle", (t) => {
      if (this._modal.querySelector(`${t}[${H}]`) !== null) {
        h.addStyle(this._circle, {
          backgroundColor: "#1976d2"
        });
        return;
      }
      h.addStyle(this._circle, {
        backgroundColor: "transparent"
      });
    });
    Ct(this, "_toggleClassActive", (t, { textContent: e }, i) => {
      const n = [...t].find(
        (o) => Number(o) === Number(e)
      );
      return i.forEach((o) => {
        if (!o.hasAttribute(Ft)) {
          if (o.textContent === n) {
            h.addClass(o, this._classes.tipsActive), o.setAttribute(H, "");
            return;
          }
          h.removeClass(o, this._classes.tipsActive), o.removeAttribute(H);
        }
      });
    });
    Ct(this, "_makeMinutesDegrees", (t, e) => {
      const { increment: i } = this._options;
      return t < 0 ? (e = Math.round(360 + t / 6) % 60, t = 360 + Math.round(t / 6) * 6) : (e = Math.round(t / 6) % 60, t = Math.round(t / 6) * 6), i && (t = Math.round(t / 30) * 30, e = Math.round(t / 6) * 6 / 6, e === 60 && (e = "00")), t >= 360 && (t = 0), {
        degrees: t,
        minute: e,
        addDegrees: i ? 30 : 6
      };
    });
    Ct(this, "_makeHourDegrees", (t, e, i) => {
      if (t)
        return this._hasTargetInnerClass(t) ? e < 0 ? (i = Math.round(360 + e / 30) % 24, e = 360 + e) : (i = Math.round(e / 30) + 12, i === 12 && (i = "00")) : e < 0 ? (i = Math.round(360 + e / 30) % 12, e = 360 + e) : (i = Math.round(e / 30) % 12, (i === 0 || i > 12) && (i = 12)), e >= 360 && (e = 0), {
          degrees: e,
          hour: i,
          addDegrees: 30
        };
    });
    Ct(this, "_makeInnerHoursDegrees", (t, e) => (t < 0 ? (e = Math.round(360 + t / 30) % 24, t = 360 + t) : (e = Math.round(t / 30) + 12, e === 12 && (e = "00")), {
      degrees: t,
      hour: e,
      addDegrees: 30
    }));
    Ct(this, "_getAppendClock", (t = [], e = `[${de}]`, i) => {
      let { minTime: n, maxTime: o } = this._options;
      const { inline: r, format12: a, disablePast: l, disableFuture: p } = this._options;
      n = Ut(n, l, a), o = Xt(o, p, a);
      const [u, _, f] = R(
        o,
        !1
      ), [g, m, b] = R(
        n,
        !1
      );
      !r && a && this._isInvalidTimeFormat && !this._AM.hasAttribute(H) && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
      const v = d.findOne(e), E = 360 / t.length;
      function w(k) {
        return k * (Math.PI / 180);
      }
      if (v === null)
        return;
      const C = (v.offsetWidth - 32) / 2, T = (v.offsetHeight - 32) / 2, A = C - 4;
      setTimeout(() => {
        let k;
        a && (k = d.findOne(
          `${ps}[${H}]`
        ).textContent), this._handleDisablingTipsMinTime(
          k,
          b,
          m,
          g
        ), this._handleDisablingTipsMaxTime(
          k,
          f,
          _,
          u
        );
      }, 0), [...t].forEach((k, S) => {
        const O = w(S * E), x = D("span"), L = D("span");
        L.innerHTML = k, h.addClass(x, this._classes.tips), x.setAttribute(i, "");
        const $ = x.offsetWidth, M = x.offsetHeight;
        return h.addStyle(x, {
          left: `${C + Math.sin(O) * A - $}px`,
          bottom: `${T + Math.cos(O) * A - M}px`
        }), t.includes("05") && x.setAttribute(X, ""), t.includes("13") ? L.setAttribute(ms, "") : L.setAttribute(fs, ""), x.appendChild(L), v.appendChild(x);
      });
    });
    this._element = t, this._element && y.setData(t, js, this), this._document = document, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._currentTime = null, this._toggleButtonId = rt("timepicker-toggle-"), this.hoursArray = [
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ], this.innerHours = [
      "00",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ], this.minutesArray = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ], this.input = d.findOne("input", this._element), this.dataWithIcon = t.dataset.withIcon, this.dataToggle = t.dataset.toggle, this.customIcon = d.findOne(
      Pm,
      this._element
    ), this._checkToggleButton(), this.inputFormatShow = d.findOne(
      Rm,
      this._element
    ), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = d.findOne(
      $a,
      this._element
    ), this.toggleElement = Object.values(
      t.querySelector($a).dataset
    )[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._timeoutInterval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format24 && (this._options.format12 = !1, this._currentTime = Oa(this._inputValue)), this._options.format12 && (this._options.format24 = !1, this._currentTime = ge(this._inputValue)), this._options.readOnly && this.input.setAttribute(Fm, !0), this.inputFormat === "true" && this.inputFormat !== "" && (this._options.format12 = !1, this._options.format24 = !0, this._currentTime = Oa(this._inputValue)), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this.init(), this._isHours = !0, this._isMinutes = !1, this._isInvalidTimeFormat = !1, this._isMouseMove = !1, this._isInner = !1, this._isAmEnabled = !1, this._isPmEnabled = !1, this._options.format12 && !this._options.defaultTime && (this._isPmEnabled = !0), this._objWithDataOnChange = { degrees: null }, this._scrollBar = new Xe();
  }
  // Getters
  static get NAME() {
    return Ii;
  }
  // Public
  init() {
    const { format12: t, format24: e, enableValidation: i } = this._options;
    let n, o, r;
    if (this.input.setAttribute(jm, ""), this._currentTime !== void 0) {
      const { hours: a, minutes: l, amOrPm: p } = this._currentTime;
      n = Number(a) < 10 ? 0 : "", o = `${n}${Number(a)}:${l}`, r = p, t ? this.input.value = `${o} ${r}` : e && (this.input.value = `${o}`);
    } else
      n = "", o = "", r = "", this.input.value = "";
    this.input.value.length > 0 && this.input.value !== "" && (this.input.setAttribute(H, ""), c.trigger(this.input, "input")), !(this._options === null && this._element === null) && (i && this._getValidate("keydown change blur focus"), this._handleOpen(), this._listenToToggleKeydown());
  }
  dispose() {
    this._removeModal(), this._element !== null && y.removeData(this._element, js), setTimeout(() => {
      this._element = null, this._options = null, this.input = null, this._focusTrap = null;
    }, 350), c.off(
      this._document,
      "click",
      `[data-te-toggle='${this.toggleElement}']`
    ), c.off(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`
    );
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  // private
  _checkToggleButton() {
    this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
  }
  _appendToggleButton() {
    const t = Om(
      this._options,
      this._toggleButtonId,
      this._classes
    );
    this.input.insertAdjacentHTML("afterend", t);
  }
  _getDomElements() {
    this._hour = d.findOne(`[${_s}]`), this._minutes = d.findOne(`[${Qn}]`), this._AM = d.findOne(Nm), this._PM = d.findOne(Mm), this._wrapper = d.findOne(`[${Zn}]`), this._modal = d.findOne(`[${za}]`), this._hand = d.findOne(`[${Jn}]`), this._circle = d.findOne(`[${to}]`), this._clock = d.findOne(`[${de}]`), this._clockInner = d.findOne(
      `[${ci}]`
    );
  }
  _handlerMaxMinHoursOptions(t, e, i, n, o, r) {
    if (!e && !i)
      return !0;
    const { format24: a, format12: l, disablePast: p, disableFuture: u } = this._options, { _isAmEnabled: _, _isPmEnabled: f } = this, g = r.keyCode, m = r.target.hasAttribute(ci) || r.target.hasAttribute(lt) || r.target.hasAttribute(ms);
    i = Ut(i, p, l), e = Xt(e, u, l), typeof e != "number" && (e = R(e, !1)[0]);
    const b = e !== "" ? e * 30 : "", v = i !== "" ? i * 30 : "";
    t < 0 && (t = 360 + t), t = t === 360 ? 0 : t;
    const E = () => {
      const S = document.querySelectorAll(
        `[${fs}]`
      ), O = document.querySelectorAll(
        `[${ms}]`
      ), x = Lm(this._hour.innerText);
      let L, $, M;
      return g === at ? $ = 1 : g === z && ($ = -1), x === 12 && g === at ? M = 1 : x === 0 && g === at ? M = 13 : x === 0 && g === z ? M = 23 : x === 13 && g === z ? M = 0 : x === 1 && g === z ? M = 12 : M = x + $, S.forEach((P) => {
        Number(P.textContent) === M && (L = P);
      }), O.forEach((P) => {
        Number(P.textContent) === M && (L = P);
      }), !L.parentElement.hasAttribute(Ft);
    }, w = () => {
      const S = i !== "" && i > 12 ? (i - 12) * 30 : "", O = e !== "" && e > 12 ? (e - 12) * 30 : "";
      if (!(S && t < S || O && t > O || e && e < 12))
        return !0;
    };
    if (a && r.type !== "keydown" && m)
      return w();
    if (r.type === "keydown")
      return E();
    const C = !o || o === "PM" && f || i !== "" && o === "AM" && _, T = !n || n === "PM" && f || e !== "" && n === "AM" && _, A = () => {
      const S = v === 360 && l ? 0 : v;
      if (i) {
        if (o === "PM" && _ || C && t < S)
          return;
      } else
        return !0;
      return !0;
    }, k = () => {
      const S = b === 360 && l ? 0 : b;
      if (e) {
        if (n === "AM" && f || T && t > S)
          return;
      } else
        return !0;
      return !0;
    };
    return A() && k();
  }
  _handleKeyboard() {
    c.on(this._document, ds, "", (t) => {
      let e, i, n;
      const {
        increment: o,
        maxTime: r,
        minTime: a,
        format12: l,
        disablePast: p,
        disableFuture: u
      } = this._options;
      let _ = R(a, !1)[0], f = R(r, !1)[0];
      const g = R(a, !1)[2], m = R(r, !1)[2];
      _ = Ut(_, p, l), f = Xt(f, u, l), typeof f != "number" && (f = R(f, !1)[0]);
      const b = d.findOne(`[${X}]`) === null, v = d.findOne(`[${lt}]`) !== null, E = Number(this._hand.style.transform.replace(/[^\d-]/g, "")), w = d.find(
        `[${X}]`,
        this._modal
      ), C = d.find(
        `[${K}]`,
        this._modal
      ), T = d.find(
        `[${lt}]`,
        this._modal
      );
      let A = this._makeHourDegrees(t.target, E, e).hour;
      const { degrees: k, addDegrees: S } = this._makeHourDegrees(
        t.target,
        E,
        e
      );
      let { minute: O, degrees: x } = this._makeMinutesDegrees(E, i);
      const L = this._makeMinutesDegrees(
        E,
        i
      ).addDegrees;
      let { hour: $ } = this._makeInnerHoursDegrees(
        E,
        n
      );
      if (t.keyCode === Hi) {
        const M = d.findOne(
          `[${zn}]`,
          this._modal
        );
        c.trigger(M, "click");
      } else if (b) {
        if (v && (t.keyCode === Be && (this._isInner = !1, h.addStyle(this._hand, {
          height: "calc(40% + 1px)"
        }), this._hour.textContent = this._setHourOrMinute(
          A > 12 ? 1 : A
        ), this._toggleClassActive(this.hoursArray, this._hour, C), this._toggleClassActive(this.innerHours, this._hour, T)), t.keyCode === Pe && (this._isInner = !0, h.addStyle(this._hand, {
          height: "21.5%"
        }), this._hour.textContent = this._setHourOrMinute(
          $ >= 24 || $ === "00" ? 0 : $
        ), this._toggleClassActive(this.innerHours, this._hour, T), this._toggleClassActive(
          this.hoursArray,
          this._hour - 1,
          C
        ))), t.keyCode === at) {
          if (!this._handlerMaxMinHoursOptions(
            k + 30,
            f,
            _,
            m,
            g,
            t
          ))
            return;
          h.addStyle(this._hand, {
            transform: `rotateZ(${k + S}deg)`
          }), this._isInner ? ($ += 1, $ === 24 ? $ = 0 : ($ === 25 || $ === "001") && ($ = 13), this._hour.textContent = this._setHourOrMinute($), this._toggleClassActive(this.innerHours, this._hour, T)) : (A += 1, this._hour.textContent = this._setHourOrMinute(
            A > 12 ? 1 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, C));
        }
        if (t.keyCode === z) {
          if (!this._handlerMaxMinHoursOptions(
            k - 30,
            f,
            _,
            m,
            g,
            t
          ))
            return;
          h.addStyle(this._hand, {
            transform: `rotateZ(${k - S}deg)`
          }), this._isInner ? ($ -= 1, $ === 12 ? $ = 0 : $ === -1 && ($ = 23), this._hour.textContent = this._setHourOrMinute($), this._toggleClassActive(this.innerHours, this._hour, T)) : (A -= 1, this._hour.textContent = this._setHourOrMinute(
            A === 0 ? 12 : A
          ), this._toggleClassActive(this.hoursArray, this._hour, C));
        }
      } else
        t.keyCode === at && (x += L, h.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), O += 1, o && (O += 4, O === "0014" && (O = 5)), this._minutes.textContent = this._setHourOrMinute(
          O > 59 ? 0 : O
        ), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          w
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        )), t.keyCode === z && (x -= L, h.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), o ? O -= 5 : O -= 1, O === -1 ? O = 59 : O === -5 && (O = 55), this._minutes.textContent = this._setHourOrMinute(O), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          w
        ), this._toggleBackgroundColorCircle(
          `[${X}]`
        ));
    });
  }
  _setActiveClassToTipsOnOpen(t, ...e) {
    if (!this._isInvalidTimeFormat)
      if (this._options.format24) {
        const i = d.find(
          `[${K}]`,
          this._modal
        ), n = d.find(
          `[${lt}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t), this._addActiveClassToTip(n, t);
      } else {
        [...e].filter((n) => (n === "PM" ? (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")) : n === "AM" ? (h.addClass(this._AM, this._classes.opacity), this._AM.setAttribute(H, "")) : (h.removeClass(this._AM, this._classes.opacity), h.removeClass(this._PM, this._classes.opacity), this._AM.removeAttribute(H), this._PM.removeAttribute(H)), n));
        const i = d.find(
          `[${K}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t);
      }
  }
  _setTipsAndTimesDependOnInputValue(t, e) {
    const { inline: i, format12: n } = this._options;
    if (this._isInvalidTimeFormat)
      this._hour.textContent = "12", this._minutes.textContent = "00", i || h.addStyle(this._hand, {
        transform: "rotateZ(0deg)"
      }), n && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
    else {
      const o = t > 12 ? t * 30 - 360 : t * 30;
      this._hour.textContent = t, this._minutes.textContent = e, i || (h.addStyle(this._hand, {
        transform: `rotateZ(${o}deg)`
      }), h.addStyle(this._circle, {
        backgroundColor: "#1976d2"
      }), (Number(t) > 12 || t === "00") && h.addStyle(this._hand, {
        height: "21.5%"
      }));
    }
  }
  _listenToToggleKeydown() {
    c.on(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`,
      (t) => {
        t.keyCode === ct && (t.preventDefault(), c.trigger(this.elementToggle, "click"));
      }
    );
  }
  _handleOpen() {
    const t = this._getContainer();
    oe.on(
      this._element,
      "click",
      `[data-te-toggle='${this.toggleElement}']`,
      (e) => {
        if (this._options === null)
          return;
        const i = h.getDataAttribute(this.input, "toggle") !== null ? 200 : 0;
        setTimeout(() => {
          h.addStyle(this.elementToggle, {
            pointerEvents: "none"
          }), this.elementToggle.blur();
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const { modalID: o, inline: r, format12: a } = this._options, [l, p, u] = n, _ = D("div");
          if ((Number(l) > 12 || l === "00") && (this._isInner = !0), this.input.blur(), e.target.blur(), _.innerHTML = xm(this._options, this._classes), h.addClass(_, this._classes.modal), _.setAttribute(za, ""), _.setAttribute("role", "dialog"), _.setAttribute("tabIndex", "-1"), _.setAttribute("id", o), r ? (this._popper = Te(this.input, _, {
            placement: "bottom-start"
          }), t.appendChild(_)) : (t.appendChild(_), this._scrollBar.hide()), this._getDomElements(), this._animations ? this._toggleBackdropAnimation() : h.addClass(this._wrapper, this._classes.opacity), this._setActiveClassToTipsOnOpen(l, p, u), this._appendTimes(), this._setActiveClassToTipsOnOpen(l, p, u), this._setTipsAndTimesDependOnInputValue(l, p), this.input.value === "") {
            const f = d.find(
              `[${K}]`,
              this._modal
            );
            a && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")), this._hour.textContent = "12", this._minutes.textContent = "00", this._addActiveClassToTip(
              f,
              Number(this._hour.textContent)
            );
          }
          if (this._handleSwitchTimeMode(), this._handleOkButton(), this._handleClose(), r)
            this._handleHoverInlineBtn(), this._handleDocumentClickInline(), this._handleInlineClicks();
          else {
            this._handleSwitchHourMinute(), this._handleClockClick(), this._handleKeyboard();
            const f = document.querySelector(
              `${us}[${H}]`
            );
            h.addClass(f, this._classes.opacity), h.addStyle(this._hour, {
              pointerEvents: "none"
            }), h.addStyle(this._minutes, {
              pointerEvents: ""
            });
          }
          this._focusTrap = new Bi(this._wrapper, {
            event: "keydown",
            condition: ({ key: f }) => f === "Tab"
          }), this._focusTrap.trap();
        }, i);
      }
    );
  }
  _handleInlineClicks() {
    let t, e;
    const i = (g) => {
      let m = g;
      return m > 59 ? m = 0 : m < 0 && (m = 59), m;
    }, n = (g) => {
      let m = g;
      return this._options.format24 ? (m > 24 ? m = 1 : m < 0 && (m = 23), m > 23 && (m = 0)) : (m > 12 ? m = 1 : m < 1 && (m = 12), m > 12 && (m = 1)), m;
    }, o = (g) => {
      const m = n(g);
      this._hour.textContent = this._setHourOrMinute(m);
    }, r = (g) => {
      const m = i(g);
      this._minutes.textContent = this._setHourOrMinute(m);
    }, a = () => {
      t = n(t) + 1, o(t);
    }, l = () => {
      e = i(e) + 1, r(e);
    }, p = () => {
      t = n(t) - 1, o(t);
    }, u = () => {
      e = i(e) - 1, r(e);
    }, _ = () => {
      clearInterval(this._interval), clearTimeout(this._timeoutInterval);
    }, f = (g) => {
      _(), this._timeoutInterval = setTimeout(() => {
        this._interval = setInterval(g, 100);
      }, 500);
    };
    oe.on(
      this._modal,
      "click mousedown mouseup touchstart touchend contextmenu",
      `[${Xn}], [${Gn}]`,
      (g) => {
        t = Number(this._hour.textContent), e = Number(this._minutes.textContent);
        const { target: m, type: b } = g, v = b === "mousedown" || b === "touchstart";
        m.closest(`[${Xn}]`) ? m.closest(`[${Xn}]`).parentNode.hasAttribute(Ya) ? v ? f(a) : b === "mouseup" || b === "touchend" || b === "contextmenu" ? _() : a() : v ? f(l) : b === "mouseup" || b === "touchend" || b === "contextmenu" ? _() : l() : m.closest(`[${Gn}]`) && (m.closest(`[${Gn}]`).parentNode.hasAttribute(Ya) ? v ? f(p) : b === "mouseup" || b === "touchend" ? _() : p() : v ? f(u) : b === "mouseup" || b === "touchend" ? _() : u());
      }
    ), c.on(window, ds, (g) => {
      const m = g.code, b = document.activeElement.hasAttribute(_s), v = document.activeElement.hasAttribute(
        Qn
      ), E = document.activeElement === document.body;
      switch (t = Number(this._hour.textContent), e = Number(this._minutes.textContent), m) {
        case "ArrowUp":
          g.preventDefault(), E || b ? (this._hour.focus(), a()) : v && l();
          break;
        case "ArrowDown":
          g.preventDefault(), E || b ? (this._hour.focus(), p()) : v && u();
          break;
      }
    });
  }
  _handleClose() {
    c.on(
      this._modal,
      "click",
      `[${Zn}], [${zn}], [${Fa}]`,
      ({ target: t }) => {
        const { closeModalOnBackdropClick: e } = this._options, i = () => {
          var n;
          h.addStyle(this.elementToggle, {
            pointerEvents: "auto"
          }), this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), (n = this._focusTrap) == null || n.disable(), this._focusTrap = null, this.elementToggle ? this.elementToggle.focus() : this.input && this.input.focus();
        };
        if (t.hasAttribute(Fa)) {
          this._toggleAmPm("PM"), this.input.value = "", this.input.removeAttribute(H);
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const [o, r, a] = n;
          this._setTipsAndTimesDependOnInputValue("12", "00"), this._setActiveClassToTipsOnOpen(o, r, a), this._hour.click();
        } else
          (t.hasAttribute(zn) || t.hasAttribute(Un) || t.hasAttribute(Zn) && e) && i();
      }
    );
  }
  showValueInput() {
    return this.input.value;
  }
  _handleOkButton() {
    oe.on(
      this._modal,
      "click",
      `[${Un}]`,
      () => {
        let { maxTime: t, minTime: e } = this._options;
        const {
          format12: i,
          format24: n,
          readOnly: o,
          focusInputAfterApprove: r,
          disablePast: a,
          disableFuture: l
        } = this._options, p = this._document.querySelector(
          `${ps}[${H}]`
        ), u = `${this._hour.textContent}:${this._minutes.textContent}`, _ = Number(this._hour.textContent), f = _ === 12 && i ? 0 : _, g = Number(this._minutes.textContent);
        e = Ut(e, a, i), t = Xt(t, l, i);
        let [m, b, v] = R(
          t,
          !1
        ), [E, w, C] = R(
          e,
          !1
        );
        E = E === "12" && i ? "00" : E, m = m === "12" && i ? "00" : m;
        const T = f < Number(E), A = f > Number(m);
        let k = !0;
        p && (k = v === p.textContent);
        let S = !0;
        p && (S = C === p.textContent);
        const O = g > b && f === Number(m), x = g < w && f === Number(E);
        if (this.input.setAttribute(H, ""), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), t !== "") {
          if (k && (A || O))
            return;
          if (v === "AM" && p.textContent === "PM")
            return;
        }
        e !== "" && (S && (T || x) || C === "PM" && p.textContent === "AM") || Im(
          this._options,
          this.input,
          this._hour.textContent
        ) !== void 0 && (this._isInvalidTimeFormat && this.input.removeAttribute(qn), !o && r && this.input.focus(), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), n ? this.input.value = u : p === null ? this.input.value = `${u} PM` : this.input.value = `${u} ${p.textContent}`, this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), c.trigger(this.input, "input.te.timepicker"), c.trigger(this.input, "input"));
      }
    );
  }
  _handleHoverInlineBtn() {
    oe.on(
      this._modal,
      "mouseover mouseleave",
      `[${Wm}]`,
      ({ type: t, target: e }) => {
        const i = d.find(
          `[${Hm}]`,
          this._modal
        ), n = d.find(
          `[${Vm}]`,
          this._modal
        ), o = (l, p) => l.forEach((u) => {
          if (p) {
            h.addClass(u, this._classes.opacity), u.setAttribute(H, "");
            return;
          }
          h.removeClass(u, this._classes.opacity), u.removeAttribute(H);
        }), a = e.hasAttribute(_s) ? i : n;
        o(a, t === "mouseover");
      }
    );
  }
  _handleDocumentClickInline() {
    c.on(document, La, ({ target: t }) => {
      if (this._modal && !this._modal.contains(t) && !t.hasAttribute(Bm)) {
        if (clearInterval(this._interval), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), this._removeModal(), !this._animations)
          return;
        this._toggleBackdropAnimation(!0);
      }
    });
  }
  _handleSwitchHourMinute() {
    Sm(
      "click",
      us,
      this._classes
    ), c.on(
      this._modal,
      "click",
      us,
      () => {
        const { format24: t } = this._options, e = d.find(
          us,
          this._modal
        ), i = d.find(
          `[${X}]`,
          this._modal
        ), n = d.find(
          `[${K}]`,
          this._modal
        ), o = d.find(
          `[${lt}]`,
          this._modal
        ), r = Number(this._hour.textContent), a = Number(this._minutes.textContent), l = (p, u) => {
          n.forEach((f) => f.remove()), i.forEach((f) => f.remove()), h.addClass(this._hand, this._classes.transform), setTimeout(() => {
            h.removeClass(this._hand, this._classes.transform);
          }, 401), this._getAppendClock(p, `[${de}]`, u);
          const _ = () => {
            const f = d.find(
              `[${K}]`,
              this._modal
            ), g = d.find(
              `[${X}]`,
              this._modal
            );
            this._addActiveClassToTip(f, r), this._addActiveClassToTip(g, a);
          };
          if (!t)
            setTimeout(() => {
              _();
            }, 401);
          else {
            const f = d.find(
              `[${lt}]`,
              this._modal
            );
            setTimeout(() => {
              this._addActiveClassToTip(f, r), _();
            }, 401);
          }
        };
        e.forEach((p) => {
          p.hasAttribute(H) && (p.hasAttribute(Qn) ? (h.addClass(this._hand, this._classes.transform), h.addStyle(this._hand, {
            transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
            height: "calc(40% + 1px)"
          }), t && o.length > 0 && o.forEach((u) => u.remove()), l(
            this.minutesArray,
            X
          ), this._hour.style.pointerEvents = "", this._minutes.style.pointerEvents = "none") : p.hasAttribute(_s) && (h.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30}deg)`
          }), Number(this._hour.textContent) > 12 ? (h.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30 - 360}deg)`,
            height: "21.5%"
          }), Number(this._hour.textContent) > 12 && h.addStyle(this._hand, {
            height: "21.5%"
          })) : h.addStyle(this._hand, {
            height: "calc(40% + 1px)"
          }), t && this._getAppendClock(
            this.innerHours,
            `[${ci}]`,
            lt
          ), o.length > 0 && o.forEach((u) => u.remove()), l(
            this.hoursArray,
            K
          ), h.addStyle(this._hour, {
            pointerEvents: "none"
          }), h.addStyle(this._minutes, {
            pointerEvents: ""
          })));
        });
      }
    );
  }
  _handleDisablingTipsMaxTime(t, e, i, n) {
    if (!this._options.maxTime && !this._options.disableFuture)
      return;
    const o = d.find(
      `[${K}]`
    ), r = d.find(
      `[${lt}]`
    ), a = d.find(
      `[${X}]`
    );
    if (!e || e === t) {
      Ia(
        r,
        n,
        this._classes,
        this._options.format12
      ), Ia(
        o,
        n,
        this._classes,
        this._options.format12
      ), Dm(
        a,
        i,
        n,
        this._hour.textContent,
        this._classes,
        this._options.format12
      );
      return;
    }
    e === "AM" && t === "PM" && (o.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ft, "");
    }), a.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ft, "");
    }));
  }
  _handleDisablingTipsMinTime(t, e, i, n) {
    if (!this._options.minTime && !this._options.disablePast)
      return;
    const o = d.find(
      `[${K}]`
    ), r = d.find(
      `[${lt}]`
    ), a = d.find(
      `[${X}]`
    );
    !e || e === t ? (Da(
      o,
      n,
      this._classes,
      this._options.format12
    ), Da(
      r,
      n,
      this._classes,
      this._options.format12
    ), $m(
      a,
      i,
      n,
      this._hour.textContent,
      this._classes,
      this._options.format12
    )) : e === "PM" && t === "AM" && (o.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ft, "");
    }), a.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ft, "");
    }));
  }
  _handleSwitchTimeMode() {
    c.on(
      document,
      "click",
      ps,
      ({ target: t }) => {
        let { maxTime: e, minTime: i } = this._options;
        const { disablePast: n, disableFuture: o, format12: r } = this._options;
        i = Ut(i, n, r), e = Xt(e, o, r);
        const [a, l, p] = R(
          e,
          !1
        ), [u, _, f] = R(
          i,
          !1
        ), g = d.find(
          `[${K}]`
        ), m = d.find(
          `[${X}]`
        );
        (() => {
          g.forEach((v) => {
            h.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(Ft);
          }), m.forEach((v) => {
            h.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(Ft);
          });
        })(), this._handleDisablingTipsMinTime(
          t.textContent,
          f,
          _,
          u
        ), this._handleDisablingTipsMaxTime(
          t.textContent,
          p,
          l,
          a
        ), this._toggleAmPm(t.textContent), t.hasAttribute(H) || (d.find(
          ps
        ).forEach((E) => {
          E.hasAttribute(H) && (h.removeClass(E, this._classes.opacity), E.removeAttribute(H));
        }), h.addClass(t, this._classes.opacity), t.setAttribute(H, ""));
      }
    );
  }
  _handleClockClick() {
    let { maxTime: t, minTime: e } = this._options;
    const { disablePast: i, disableFuture: n, format12: o } = this._options;
    e = Ut(e, i, o), t = Xt(t, n, o);
    const r = R(t, !1)[2], a = R(e, !1)[2], l = R(t, !1)[0], p = R(e, !1)[0], u = d.findOne(
      `[${ja}]`
    );
    oe.on(
      document,
      `${Na} ${Ma} ${Ra} ${Pa} ${Ba} ${Wa} ${Ha} ${Va}`,
      "",
      (_) => {
        hs() || _.preventDefault();
        const { type: f, target: g } = _, { closeModalOnMinutesClick: m, switchHoursToMinutesOnClick: b } = this._options, v = d.findOne(
          `[${X}]`,
          this._modal
        ) !== null, E = d.findOne(
          `[${K}]`,
          this._modal
        ) !== null, w = d.findOne(
          `[${lt}]`,
          this._modal
        ) !== null, C = d.find(
          `[${X}]`,
          this._modal
        ), T = Sa(_, u), A = u.offsetWidth / 2;
        let k = Math.atan2(T.y - A, T.x - A);
        if (hs()) {
          const L = Sa(_, u, !0);
          k = Math.atan2(L.y - A, L.x - A);
        }
        let S = null, O = null, x = null;
        if (f === "mousedown" || f === "mousemove" || f === "touchmove" || f === "touchstart")
          (f === "mousedown" || f === "touchstart" || f === "touchmove") && (this._hasTargetInnerClass(g) || g.hasAttribute(ja) || g.hasAttribute(de) || g.hasAttribute(X) || g.hasAttribute(K) || g.hasAttribute(to) || g.hasAttribute(Jn) || g.hasAttribute(Ka) || g.hasAttribute(fs)) && (this._isMouseMove = !0, hs() && _.touches && (S = _.touches[0].clientX, O = _.touches[0].clientY, x = document.elementFromPoint(S, O)));
        else if (f === "mouseup" || f === "touchend") {
          if (this._isMouseMove = !1, this._hasTargetInnerClass(g) || g.hasAttribute(de) || g.hasAttribute(K) || g.hasAttribute(to) || g.hasAttribute(Jn) || g.hasAttribute(Ka) || g.hasAttribute(fs)) {
            if ((E || w) && b) {
              const L = Number(this._hour.textContent) > l || Number(this._hour.textContent) < p;
              if (this._options.format24 && l !== "" && p !== "" && L)
                return;
              if (this._options.format24 && p !== "" && Number(this._hour.textContent) < p)
                return;
            }
            c.trigger(this._minutes, "click");
          }
          if (v && m) {
            const L = d.findOne(
              `[${Un}]`,
              this._modal
            );
            c.trigger(L, "click");
          }
        }
        if (v) {
          let L;
          const $ = Math.trunc(k * 180 / Math.PI) + 90, { degrees: M, minute: P } = this._makeMinutesDegrees($, L);
          if (this._handlerMaxMinMinutesOptions(M, P) === void 0)
            return;
          const { degrees: tt, minute: et } = this._handlerMaxMinMinutesOptions(M, P);
          if (this._isMouseMove) {
            if (h.addStyle(this._hand, {
              transform: `rotateZ(${tt}deg)`
            }), et === void 0)
              return;
            const U = () => et >= 10 || et === "00" ? et : `0${et}`;
            this._minutes.textContent = U(), this._toggleClassActive(
              this.minutesArray,
              this._minutes,
              C
            ), this._toggleBackgroundColorCircle(
              `[${X}]`
            ), this._objWithDataOnChange.degreesMinutes = tt, this._objWithDataOnChange.minutes = et;
          }
        }
        if (E || w) {
          let L, $ = Math.trunc(k * 180 / Math.PI) + 90;
          if ($ = Math.round($ / 30) * 30, h.addStyle(this._circle, {
            backgroundColor: "#1976d2"
          }), this._makeHourDegrees(g, $, L) === void 0)
            return;
          const M = () => {
            if (hs() && $ && x) {
              const { degrees: P, hour: tt } = this._makeHourDegrees(x, $, L);
              return this._handleMoveHand(
                x,
                tt,
                P
              );
            } else {
              const { degrees: P, hour: tt } = this._makeHourDegrees(g, $, L);
              return this._handleMoveHand(g, tt, P);
            }
          };
          this._objWithDataOnChange.degreesHours = $, this._handlerMaxMinHoursOptions(
            $,
            l,
            p,
            r,
            a,
            _
          ) && M();
        }
        _.stopPropagation();
      }
    );
  }
  _hasTargetInnerClass(t) {
    return t.hasAttribute(ci) || t.hasAttribute(lt) || t.hasAttribute(ms);
  }
  _handleMoveHand(t, e, i) {
    const n = d.find(
      `[${K}]`,
      this._modal
    ), o = d.find(
      `[${lt}]`,
      this._modal
    );
    this._isMouseMove && (this._hasTargetInnerClass(t) ? h.addStyle(this._hand, {
      height: "21.5%"
    }) : h.addStyle(this._hand, {
      height: "calc(40% + 1px)"
    }), h.addStyle(this._hand, {
      transform: `rotateZ(${i}deg)`
    }), this._hour.textContent = e >= 10 || e === "00" ? e : `0${e}`, this._toggleClassActive(this.hoursArray, this._hour, n), this._toggleClassActive(this.innerHours, this._hour, o), this._objWithDataOnChange.hour = e >= 10 || e === "00" ? e : `0${e}`);
  }
  _handlerMaxMinMinutesOptions(t, e) {
    let { maxTime: i, minTime: n } = this._options;
    const { format12: o, increment: r, disablePast: a, disableFuture: l } = this._options;
    n = Ut(n, a, o), i = Xt(i, l, o);
    const p = R(i, !1)[1], u = R(n, !1)[1], _ = R(i, !1)[0], f = R(n, !1)[0], g = f === "12" && o ? "0" : f, m = _ === "12" && o ? "0" : _, b = R(i, !1)[2], v = R(n, !1)[2], E = p !== "" ? p * 6 : "", w = u !== "" ? u * 6 : "", C = Number(this._hour.textContent), T = C === 12 && o ? 0 : C;
    if (!b && !v) {
      if (i !== "" && n !== "") {
        if (Number(m) === T && t > E || Number(g) === T && t < w)
          return t;
      } else if (n !== "" && T <= Number(g)) {
        if (t <= w - 6)
          return t;
      } else if (i !== "" && T >= Number(m) && t >= E + 6)
        return t;
    } else {
      if (n !== "") {
        if (v === "PM" && this._isAmEnabled)
          return;
        if (v === "PM" && this._isPmEnabled) {
          if (T < Number(g))
            return;
          if (T <= Number(g) && t <= w - 6)
            return t;
        } else if (v === "AM" && this._isAmEnabled) {
          if (T < Number(g))
            return;
          if (T <= Number(g) && t <= w - 6)
            return t;
        }
      }
      if (i !== "") {
        if (b === "AM" && this._isPmEnabled)
          return;
        if (b === "PM" && this._isPmEnabled) {
          if (T >= Number(m) && t >= E + 6)
            return t;
        } else if (b === "AM" && this._isAmEnabled && T >= Number(m) && t >= E + 6)
          return t;
      }
    }
    return r && (t = Math.round(t / 30) * 30), t < 0 ? t = 360 + t : t >= 360 && (t = 0), {
      degrees: t,
      minute: e
    };
  }
  _removeModal() {
    this._animations ? setTimeout(() => {
      this._removeModalElements(), this._scrollBar.reset();
    }, 300) : (this._removeModalElements(), this._scrollBar.reset()), oe.off(
      this._document,
      `${La} ${ds} ${Na} ${Ma} ${Ra} ${Pa} ${Ba} ${Wa} ${Ha} ${Va}`
    ), c.off(window, ds);
  }
  _removeModalElements() {
    this._modal && this._modal.remove();
  }
  _toggleBackdropAnimation(t = !1) {
    t ? this._wrapper.classList.add("animate-[fade-out_350ms_ease-in-out]") : (this._wrapper.classList.add("animate-[fade-in_350ms_ease-in-out]"), this._options.inline || h.addClass(this._clock, this._classes.clockAnimation)), setTimeout(() => {
      this._wrapper.classList.remove(
        "animate-[fade-out_350ms_ease-in-out]",
        "animate-[fade-in_350ms_ease-in-out]"
      );
    }, 351);
  }
  _addActiveClassToTip(t, e) {
    t.forEach((i) => {
      Number(i.textContent) === Number(e) && (h.addClass(i, this._classes.tipsActive), i.setAttribute(H, ""));
    });
  }
  _setHourOrMinute(t) {
    return t < 10 ? `0${t}` : t;
  }
  _appendTimes() {
    const { format24: t } = this._options;
    if (t) {
      this._getAppendClock(
        this.hoursArray,
        `[${de}]`,
        K
      ), this._getAppendClock(
        this.innerHours,
        `[${ci}]`,
        lt
      );
      return;
    }
    this._getAppendClock(
      this.hoursArray,
      `[${de}]`,
      K
    );
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...zm,
      ...e,
      ...t
    }, I(Ii, t, Um), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Xm,
      ...e,
      ...t
    }, I(Ii, t, Gm), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getValidate(t) {
    const { format24: e, format12: i, appendValidationInfo: n } = this._options;
    oe.on(this.input, t, ({ target: o }) => {
      if (this._options === null || this.input.value === "")
        return;
      const r = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, a = /^([01]\d|2[0-3])(:[0-5]\d)$/, l = r.test(o.value);
      if (a.test(o.value) !== !0 && e || l !== !0 && i) {
        n && this.input.setAttribute(qn, ""), h.addStyle(o, { marginBottom: 0 }), this._isInvalidTimeFormat = !0;
        return;
      }
      this.input.removeAttribute(qn), this._isInvalidTimeFormat = !1;
      const u = d.findOne(
        `[${Ym}]`
      );
      u !== null && u.remove();
    });
  }
  // Static
  static getInstance(t) {
    return y.getData(t, js);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Zm = {
  threshold: 10,
  direction: "all"
};
let Qm = class {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = {
      ...Zm,
      ...e
    };
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      c.trigger(this._element, `swipe${r}`), c.trigger(this._element, "swipe", { direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (c.trigger(this._element, `swipe${n[o].direction}`), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
}, Jm = class {
  constructor(t, e = "swipe", i = {}) {
    this._element = t, this._event = e, this.swipe = new Qm(t, i), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this);
  }
  dispose() {
    this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler);
  }
  init() {
    this._element.addEventListener(
      "touchstart",
      (t) => this._handleTouchStart(t)
    ), this._element.addEventListener(
      "touchmove",
      (t) => this._handleTouchMove(t)
    ), window.addEventListener("touchend", (t) => this._handleTouchEnd(t));
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
};
const Ua = "sidenav", gs = "te.sidenav", tg = "data-te-sidenav-rotate-icon-ref", eo = "[data-te-sidenav-toggle-ref]", eg = "[data-te-collapse-init]", ig = '[data-te-sidenav-slim="true"]', sg = '[data-te-sidenav-slim="false"]', ng = "[data-te-sidenav-menu-ref]", ke = "[data-te-sidenav-collapse-ref]", hi = "[data-te-sidenav-link-ref]", og = F() ? 100 : -100, rg = F() ? -100 : 100, ag = {
  sidenavAccordion: "(boolean)",
  sidenavBackdrop: "(boolean)",
  sidenavBackdropClass: "(null|string)",
  sidenavCloseOnEsc: "(boolean)",
  sidenavColor: "(string)",
  sidenavContent: "(null|string)",
  sidenavExpandable: "(boolean)",
  sidenavExpandOnHover: "(boolean)",
  sidenavFocusTrap: "(boolean)",
  sidenavHidden: "(boolean)",
  sidenavMode: "(string)",
  sidenavModeBreakpointOver: "(null|string|number)",
  sidenavModeBreakpointSide: "(null|string|number)",
  sidenavModeBreakpointPush: "(null|string|number)",
  sidenavBreakpointSm: "(number)",
  sidenavBreakpointMd: "(number)",
  sidenavBreakpointLg: "(number)",
  sidenavBreakpointXl: "(number)",
  sidenavBreakpoint2xl: "(number)",
  sidenavScrollContainer: "(null|string)",
  sidenavSlim: "(boolean)",
  sidenavSlimCollapsed: "(boolean)",
  sidenavSlimWidth: "(number)",
  sidenavPosition: "(string)",
  sidenavRight: "(boolean)",
  sidenavTransitionDuration: "(number)",
  sidenavWidth: "(number)"
}, lg = {
  sidenavAccordion: !1,
  sidenavBackdrop: !0,
  sidenavBackdropClass: null,
  sidenavCloseOnEsc: !0,
  sidenavColor: "primary",
  sidenavContent: null,
  sidenavExpandable: !0,
  sidenavExpandOnHover: !1,
  sidenavFocusTrap: !0,
  sidenavHidden: !0,
  sidenavMode: "over",
  sidenavModeBreakpointOver: null,
  sidenavModeBreakpointSide: null,
  sidenavModeBreakpointPush: null,
  sidenavBreakpointSm: 640,
  sidenavBreakpointMd: 768,
  sidenavBreakpointLg: 1024,
  sidenavBreakpointXl: 1280,
  sidenavBreakpoint2xl: 1536,
  sidenavScrollContainer: null,
  sidenavSlim: !1,
  sidenavSlimCollapsed: !1,
  sidenavSlimWidth: 77,
  sidenavPosition: "fixed",
  sidenavRight: !1,
  sidenavTransitionDuration: 300,
  sidenavWidth: 240
};
class fi {
  constructor(t, e = {}) {
    Ct(this, "_addBackdropOnInit", () => {
      this._options.sidenavHidden || (this._backdrop.show(), c.off(this._element, "transitionend", this._addBackdropOnInit));
    });
    this._element = t, this._options = e, this._ID = rt(""), this._content = null, this._initialContentStyle = null, this._slimCollapsed = !1, this._activeNode = null, this._tempSlim = !1, this._backdrop = this._initializeBackDrop(), this._focusTrap = null, this._perfectScrollbar = null, this._touch = null, this._setModeFromBreakpoints(), this.escHandler = (i) => {
      i.keyCode === Hi && this.toggler && $t(this.toggler) && (this._update(!1), c.off(window, "keydown", this.escHandler));
    }, this.hashHandler = () => {
      this._setActiveElements();
    }, t && (y.setData(t, gs, this), this._setup()), this.options.sidenavBackdrop && !this.options.sidenavHidden && this.options.sidenavMode === "over" && c.on(this._element, "transitionend", this._addBackdropOnInit), this._didInit = !1, this._init();
  }
  // Getters
  static get NAME() {
    return Ua;
  }
  get container() {
    if (this.options.sidenavPosition === "fixed")
      return d.findOne("body");
    const t = (e) => !e.parentNode || e.parentNode === document ? e : e.parentNode.style.position === "relative" || e.parentNode.classList.contains("relative") ? e.parentNode : t(e.parentNode);
    return t(this._element);
  }
  get isVisible() {
    let t = 0, e = window.innerWidth;
    if (this.options.sidenavPosition !== "fixed") {
      const n = this.container.getBoundingClientRect();
      t = n.x, e = n.x + n.width;
    }
    const { x: i } = this._element.getBoundingClientRect();
    return this.options.sidenavRight ? Math.abs(i - e) > 10 : Math.abs(i - t) < 10;
  }
  get links() {
    return d.find(hi, this._element);
  }
  get navigation() {
    return d.find(ng, this._element);
  }
  get options() {
    const t = {
      ...lg,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return I(Ua, t, ag), t;
  }
  get sidenavStyle() {
    return {
      width: `${this.width}px`,
      height: this.options.sidenavPosition === "fixed" ? "100vh" : "100%",
      position: this.options.sidenavPosition,
      transition: `all ${this.transitionDuration} linear`
    };
  }
  get toggler() {
    return d.find(eo).find(
      (e) => {
        const i = h.getDataAttribute(e, "target");
        return d.findOne(i) === this._element;
      }
    );
  }
  get transitionDuration() {
    return `${this.options.sidenavTransitionDuration / 1e3}s`;
  }
  get translation() {
    return this.options.sidenavRight ? rg : og;
  }
  get width() {
    return this._slimCollapsed ? this.options.sidenavSlimWidth : this.options.sidenavWidth;
  }
  get isBackdropVisible() {
    return !!this._backdrop._element;
  }
  // Public
  changeMode(t) {
    this._setMode(t);
  }
  dispose() {
    c.off(window, "keydown", this.escHandler), this.options.sidenavBackdrop && this._backdrop.dispose(), c.off(window, "hashchange", this.hashHandler), this._touch.dispose(), y.removeData(this._element, gs), this._element = null;
  }
  hide() {
    this._emitEvents(!1), this._update(!1), this._options.sidenavBackdrop && this.isBackdropVisible && this._backdrop.hide();
  }
  show() {
    this._emitEvents(!0), this._update(!0), this._options.sidenavBackdrop && this._options.sidenavMode === "over" && this._backdrop.show();
  }
  toggle() {
    this._emitEvents(!this.isVisible), this._update(!this.isVisible);
  }
  toggleSlim() {
    this._setSlim(!this._slimCollapsed);
  }
  update(t) {
    this._options = t, this._setup();
  }
  getBreakpoint(t) {
    return this._transformBreakpointValuesToObject()[t];
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      "click",
      eo,
      fi.toggleSidenav()
    ), this._didInit = !0);
  }
  _transformBreakpointValuesToObject() {
    return {
      sm: this.options.sidenavBreakpointSm,
      md: this.options.sidenavBreakpointMd,
      lg: this.options.sidenavBreakpointLg,
      xl: this.options.sidenavBreakpointXl,
      "2xl": this.options.sidenavBreakpoint2xl
    };
  }
  _setModeFromBreakpoints() {
    const t = window.innerWidth, e = this._transformBreakpointValuesToObject();
    if (t === void 0 || !e)
      return;
    const i = typeof this.options.sidenavModeBreakpointOver == "number" ? t - this.options.sidenavModeBreakpointOver : t - e[this.options.sidenavModeBreakpointOver], n = typeof this.options.sidenavModeBreakpointSide == "number" ? t - this.options.sidenavModeBreakpointSide : t - e[this.options.sidenavModeBreakpointSide], o = typeof this.options.sidenavModeBreakpointPush == "number" ? t - this.options.sidenavModeBreakpointPush : t - e[this.options.sidenavModeBreakpointPush], r = (l, p) => l - p < 0 ? -1 : p - l < 0 ? 1 : 0, a = [i, n, o].filter((l) => l != null && l >= 0).sort(r)[0];
    i > 0 && i === a ? (this._options.sidenavMode = "over", this._options.sidenavHidden = !0) : n > 0 && n === a ? this._options.sidenavMode = "side" : o > 0 && o === a && (this._options.sidenavMode = "push");
  }
  _collapseItems() {
    this.navigation.forEach((t) => {
      d.find(ke, t).forEach((i) => {
        qt.getInstance(i).hide();
      });
    });
  }
  _getOffsetValue(t, { index: e, property: i, offsets: n }) {
    const o = this._getPxValue(
      this._initialContentStyle[e][n[i].property]
    ), r = t ? n[i].value : 0;
    return o + r;
  }
  _getProperty(...t) {
    return t.map((e, i) => i === 0 ? e : e[0].toUpperCase().concat(e.slice(1))).join("");
  }
  _getPxValue(t) {
    return t ? parseFloat(t) : 0;
  }
  _handleSwipe(t, e) {
    e && this._slimCollapsed && this.options.sidenavSlim && this.options.sidenavExpandable ? this.toggleSlim() : e || (this._slimCollapsed || !this.options.sidenavSlim || !this.options.sidenavExpandable ? this.toggler && $t(this.toggler) && this.toggle() : this.toggleSlim());
  }
  _isActive(t, e) {
    return e ? e === t : t.attributes.href ? new URL(t, window.location.href).href === window.location.href : !1;
  }
  _isAllToBeCollapsed() {
    return d.find(
      eg,
      this._element
    ).filter(
      (i) => i.getAttribute("aria-expanded") === "true"
    ).length === 0;
  }
  _isAllCollapsed() {
    return d.find(ke, this._element).filter(
      (t) => $t(t)
    ).length === 0;
  }
  _initializeBackDrop() {
    if (!this.options.sidenavBackdrop)
      return;
    const t = this.options.sidenavBackdropClass ? this.options.sidenavBackdropClass.split(" ") : this.options.sidenavPosition ? [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      this.options.sidenavPosition,
      "top-0",
      "left-0",
      "z-50",
      "bg-black/10",
      "dark:bg-black-60",
      "w-full",
      "h-full",
      this._element.id
    ] : null;
    return new ar({
      isVisible: this.options.sidenavBackdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      backdropClasses: t,
      clickCallback: () => this.hide()
    });
  }
  _updateBackdrop(t) {
    if (this.options.sidenavMode === "over") {
      t ? this._backdrop.show() : this.isBackdropVisible && this._backdrop.hide();
      return;
    }
    this.isBackdropVisible && this._backdrop.hide();
  }
  _setup() {
    this._setupTouch(), this.options.sidenavFocusTrap && this._setupFocusTrap(), this._setupCollapse(), this.options.sidenavSlim && this._setupSlim(), this._setupInitialStyling(), this._setupScrolling(), this.options.sidenavContent && this._setupContent(), this._setupActiveState(), this._setupRippleEffect(), this.options.sidenavHidden || this._updateOffsets(!0, !0), this.options.sidenavMode === "over" && this._setTabindex(!0);
  }
  _setupActiveState() {
    this._setActiveElements(), this.links.forEach((t) => {
      c.on(t, "click", () => this._setActiveElements(t)), c.on(t, "keydown", (e) => {
        e.keyCode === ct && this._setActiveElements(t);
      });
    }), c.on(window, "hashchange", this.hashHandler);
  }
  _setupCollapse() {
    this.navigation.forEach((t, e) => {
      d.find(ke, t).forEach(
        (n, o) => this._setupCollapseList({ list: n, index: o, menu: t, menuIndex: e })
      );
    });
  }
  _generateCollpaseID(t, e) {
    return `sidenav-collapse-${this._ID}-${e}-${t}`;
  }
  _setupCollapseList({ list: t, index: e, menu: i, menuIndex: n }) {
    const o = this._generateCollpaseID(e, n);
    t.setAttribute("id", o), t.setAttribute("data-te-collapse-item", "");
    const [r] = d.prev(t, hi);
    h.setDataAttribute(r, "collapse-init", ""), r.setAttribute("href", `#${o}`), r.setAttribute("role", "button");
    const a = qt.getInstance(t) || new qt(t, {
      toggle: !1,
      parent: this.options.sidenavAccordion ? i : t
    });
    (t.dataset.teSidenavStateShow === "" || t.dataset.teCollapseShow === "") && this._rotateArrow(r, !1), c.on(r, "click", (l) => {
      this._toggleCategory(l, a, t), this._tempSlim && this._isAllToBeCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), c.on(
      t,
      "show.te.collapse",
      () => this._rotateArrow(r, !1)
    ), c.on(
      t,
      "hide.te.collapse",
      () => this._rotateArrow(r, !0)
    ), c.on(t, "shown.te.collapse", () => {
      this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), c.on(t, "hidden.te.collapse", () => {
      this._tempSlim && this._isAllCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    });
  }
  _setupContent() {
    this._content = d.find(this.options.sidenavContent), this._content.forEach((t) => {
      const e = [
        "!p",
        "!m",
        "!px",
        "!pl",
        "!pr",
        "!mx",
        "!ml",
        "!mr",
        "!-p",
        "!-m",
        "!-px",
        "!-pl",
        "!-pr",
        "!-mx",
        "!-ml",
        "!-mr"
      ];
      [...t.classList].filter(
        (n) => e.findIndex((o) => n.includes(o)) >= 0
      ).forEach((n) => t.classList.remove(n));
    }), this._initialContentStyle = this._content.map((t) => {
      const { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r } = window.getComputedStyle(t);
      return { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r };
    });
  }
  _setupFocusTrap() {
    this._focusTrap = new Bi(
      this._element,
      {
        event: "keydown",
        condition: (t) => t.keyCode === Mi,
        onlyVisible: !0
      },
      this.toggler
    );
  }
  _setupInitialStyling() {
    this._setColor(), h.style(this._element, this.sidenavStyle);
  }
  _setupScrolling() {
    let t = this._element;
    if (this.options.sidenavScrollContainer) {
      t = d.findOne(
        this.options.sidenavScrollContainer,
        this._element
      );
      const i = Wh(t.parentNode.children).filter(
        (n) => n !== t
      ).reduce((n, o) => n + o.clientHeight, 0);
      h.style(t, {
        maxHeight: `calc(100% - ${i}px)`,
        position: "relative"
      });
    }
    this._perfectScrollbar = new uh(t, {
      suppressScrollX: !0,
      handlers: ["click-rail", "drag-thumb", "wheel", "touch"]
    });
  }
  _setupSlim() {
    this._slimCollapsed = this.options.sidenavSlimCollapsed, this._toggleSlimDisplay(this._slimCollapsed), this.options.sidenavExpandOnHover && (this._element.addEventListener("mouseenter", () => {
      this._slimCollapsed && this._setSlim(!1);
    }), this._element.addEventListener("mouseleave", () => {
      this._slimCollapsed || this._setSlim(!0);
    }));
  }
  _setupRippleEffect() {
    this.links.forEach((t) => {
      let e = Ge.getInstance(t), i = this.options.sidenavColor;
      if (e && e._options.sidenavColor !== this.options.sidenavColor)
        e.dispose();
      else if (e)
        return;
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (i = "white"), e = new Ge(t, { rippleColor: i });
    });
  }
  _setupTouch() {
    this._touch = new Jm(this._element, "swipe", { threshold: 20 }), this._touch.init(), c.on(
      this._element,
      "swipeleft",
      (t) => this._handleSwipe(t, this.options.sidenavRight)
    ), c.on(
      this._element,
      "swiperight",
      (t) => this._handleSwipe(t, !this.options.sidenavRight)
    );
  }
  _setActive(t, e) {
    t.setAttribute("data-te-sidebar-state-active", ""), this._activeNode && t.removeAttribute("data-te-sidebar-state-active"), this._activeNode = t;
    const [i] = d.parents(
      this._activeNode,
      ke
    );
    if (!i) {
      this._setActiveCategory();
      return;
    }
    const [n] = d.prev(i, hi);
    this._setActiveCategory(n), !e && !this._slimCollapsed && qt.getInstance(i).show();
  }
  _setActiveCategory(t) {
    this.navigation.forEach((e) => {
      d.find(ke, e).forEach((n) => {
        const [o] = d.prev(n, hi);
        o !== t ? o.removeAttribute("data-te-sidenav-state-active") : o.setAttribute("data-te-sidenav-state-active", "");
      });
    });
  }
  _setActiveElements(t) {
    this.navigation.forEach((e) => {
      d.find(hi, e).filter((n) => d.next(n, ke).length === 0).forEach((n) => {
        this._isActive(n, t) && n !== this._activeNode && this._setActive(n, t);
      });
    }), t && this._updateFocus(this.isVisible);
  }
  _setColor() {
    const t = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "light",
      "dark"
    ], { sidenavColor: e } = this.options, i = t.includes(e) ? e : "primary";
    t.forEach((n) => {
      this._element.classList.remove(`sidenav-${n}`);
    }), h.addClass(this._element, `sidenav-${i}`);
  }
  _setContentOffsets(t, e, i) {
    this._content.forEach((n, o) => {
      const r = this._getOffsetValue(t, {
        index: o,
        property: "padding",
        offsets: e
      }), a = this._getOffsetValue(t, {
        index: o,
        property: "margin",
        offsets: e
      }), l = {};
      if (i || (l.transition = `all ${this.transitionDuration} linear`), l[e.padding.property] = `${r}px`, l[e.margin.property] = `${a}px`, h.style(n, l), !!t) {
        if (i) {
          h.style(n, {
            transition: this._initialContentStyle[o].transition
          });
          return;
        }
        c.on(n, "transitionend", () => {
          h.style(n, {
            transition: this._initialContentStyle[o].transition
          });
        });
      }
    });
  }
  _setMode(t) {
    this.options.sidenavMode !== t && (this._options.sidenavMode = t, this._update(this.isVisible));
  }
  _setSlim(t) {
    const e = t ? ["collapse", "collapsed"] : ["expand", "expanded"];
    this._triggerEvents(...e), t && this._collapseItems(), this._slimCollapsed = t, this._toggleSlimDisplay(t), h.style(this._element, { width: `${this.width}px` }), this._updateOffsets(this.isVisible);
  }
  _setTabindex(t) {
    this.links.forEach((e) => {
      e.tabIndex = t ? 0 : -1;
    });
  }
  _emitEvents(t) {
    const e = t ? ["show", "shown"] : ["hide", "hidden"];
    this._triggerEvents(...e);
  }
  _rotateArrow(t, e) {
    const [i] = d.children(t, `[${tg}]`);
    i && (e ? h.removeClass(i, "rotate-180") : h.addClass(i, "rotate-180"));
  }
  _toggleCategory(t, e) {
    t.preventDefault(), e.toggle(), this._slimCollapsed && this.options.sidenavExpandable && (this._tempSlim = !0, this._setSlim(!1));
  }
  _toggleSlimDisplay(t) {
    const e = d.find(
      ig,
      this._element
    ), i = d.find(
      sg,
      this._element
    ), n = () => {
      e.forEach((o) => {
        h.style(o, {
          display: this._slimCollapsed ? "unset" : "none"
        });
      }), i.forEach((o) => {
        h.style(o, {
          display: this._slimCollapsed ? "none" : "unset"
        });
      });
    };
    t ? setTimeout(
      () => n(),
      this.options.sidenavTransitionDuration
    ) : n();
  }
  async _triggerEvents(t, e) {
    c.trigger(this._element, `${t}.te.sidenav`), e && await setTimeout(() => {
      c.trigger(this._element, `${e}.te.sidenav`);
    }, this.options.sidenavTransitionDuration + 5);
  }
  _isiPhone() {
    return /iPhone|iPod/i.test(navigator.userAgent);
  }
  _update(t) {
    t && this._isiPhone() && h.addClass(this._element, "ps--scrolling-y"), this.toggler && this._updateTogglerAria(t), this._updateDisplay(t), this.options.sidenavBackdrop && this._updateBackdrop(t), this._updateOffsets(t), t && this.options.sidenavCloseOnEsc && this.options.sidenavMode !== "side" && c.on(window, "keydown", this.escHandler), this.options.sidenavFocusTrap && this._updateFocus(t);
  }
  _updateDisplay(t) {
    const e = t ? 0 : this.translation;
    h.style(this._element, {
      transform: `translateX(${e}%)`
    });
  }
  _updateFocus(t) {
    if (this._setTabindex(t), this.options.sidenavMode === "over" && this.options.sidenavFocusTrap) {
      if (t) {
        this._focusTrap.trap();
        return;
      }
      this._focusTrap.disable();
    }
    this._focusTrap.disable();
  }
  _updateOffsets(t, e = !1) {
    const [i, n] = this.options.sidenavRight ? ["right", "left"] : ["left", "right"], o = {
      property: this._getProperty("padding", i),
      value: this.options.sidenavMode === "over" ? 0 : this.width
    }, r = {
      property: this._getProperty("margin", n),
      value: this.options.sidenavMode === "push" ? -1 * this.width : 0
    };
    c.trigger(this._element, "update.te.sidenav", {
      margin: r,
      padding: o
    }), this._content && (this._content.className = "", this._setContentOffsets(t, { padding: o, margin: r }, e));
  }
  _updateTogglerAria(t) {
    this.toggler.setAttribute("aria-expanded", t);
  }
  // Static
  static toggleSidenav() {
    return function(t) {
      const e = d.closest(t.target, eo), i = h.getDataAttributes(e).target;
      d.find(i).forEach((n) => {
        (fi.getInstance(n) || new fi(n)).toggle();
      });
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, gs);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new fi(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, gs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Ro = "stepper", Ks = "te.stepper", hn = `.${Ks}`, Vi = `data-te-${Ro}`, mi = "horizontal", wt = "vertical", cg = {
  stepperType: "string",
  stepperLinear: "boolean",
  stepperNoEditable: "boolean",
  stepperActive: "string",
  stepperCompleted: "string",
  stepperInvalid: "string",
  stepperDisabled: "string",
  stepperVerticalBreakpoint: "number",
  stepperMobileBreakpoint: "number",
  stepperMobileBarBreakpoint: "number"
}, hg = {
  stepperType: mi,
  stepperLinear: !1,
  stepperNoEditable: !1,
  stepperActive: "",
  stepperCompleted: "",
  stepperInvalid: "",
  stepperDisabled: "",
  stepperVerticalBreakpoint: 0,
  stepperMobileBreakpoint: 0,
  stepperMobileBarBreakpoint: 4
}, Xa = `mousedown${hn}`, Ga = `keydown${hn}`, dg = `keyup${hn}`, qa = `resize${hn}`, Yt = `[${Vi}-step-ref]`, G = `[${Vi}-head-ref]`, Za = `[${Vi}-head-text-ref]`, bs = `[${Vi}-head-icon-ref]`, st = `[${Vi}-content-ref]`;
class FC {
  constructor(t, e) {
    this._element = t, this._options = this._getConfig(e), this._elementHeight = 0, this._steps = d.find(`${Yt}`, this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._element && (y.setData(t, Ks, this), this._init());
  }
  // Getters
  static get NAME() {
    return Ro;
  }
  get activeStep() {
    return this._steps[this._activeStepIndex];
  }
  get activeStepIndex() {
    return this._activeStepIndex;
  }
  // Public
  dispose() {
    this._steps.forEach((t) => {
      c.off(t, Xa), c.off(t, Ga);
    }), c.off(window, qa), y.removeData(this._element, Ks), this._element = null;
  }
  changeStep(t) {
    this._toggleStep(t);
  }
  nextStep() {
    this._toggleStep(this._activeStepIndex + 1);
  }
  previousStep() {
    this._toggleStep(this._activeStepIndex - 1);
  }
  // Private
  _init() {
    const t = d.find(`${Yt}`, this._element)[this._activeStepIndex].setAttribute("data-te", "active-step"), e = d.find(
      `${Za}`,
      this._element
    ), i = d.find(
      `${bs}`,
      this._element
    );
    switch (t ? (this._activeStepIndex = this._steps.indexOf(t), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    ), e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700")) : (e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    )), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType) {
      case wt:
        this._toggleVertical();
        break;
      default:
        this._toggleHorizontal();
        break;
    }
    (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...hg,
      ...e,
      ...t
    }, I(Ro, t, cg), t;
  }
  _bindMouseDown() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${G}`, t);
      c.on(e, Xa, (i) => {
        const n = d.parents(i.target, `${Yt}`)[0], o = this._steps.indexOf(n);
        i.preventDefault(), this._toggleStep(o);
      });
    });
  }
  _bindResize() {
    c.on(window, qa, () => {
      this._currentView === wt && this._setSingleStepHeight(this.activeStep), this._currentView === mi && this._setHeight(this.activeStep), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView();
    });
  }
  _toggleStepperView() {
    const t = this._options.stepperVerticalBreakpoint < window.innerWidth, e = this._options.stepperVerticalBreakpoint > window.innerWidth, i = this._options.stepperMobileBreakpoint > window.innerWidth;
    t && this._currentView !== mi && this._toggleHorizontal(), e && !i && this._currentView !== wt && (this._steps.forEach((n) => {
      const o = d.findOne(`${st}`, n);
      this._resetStepperHeight(), this._showElement(o);
    }), this._toggleVertical());
  }
  _toggleStep(t) {
    this._activeStepIndex !== t && (this._options.stepperNoEditable && this._toggleDisabled(), this._showElement(
      d.findOne(`${st}`, this._steps[t])
    ), this._toggleActive(t), t > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === mi ? this._animateHorizontalStep(t) : (this._animateVerticalStep(t), this._setSingleStepHeight(this._steps[t])), this._toggleStepTabIndex(
      d.findOne(`${G}`, this.activeStep),
      d.findOne(`${G}`, this._steps[t])
    ), this._activeStepIndex = t, this._steps[this._activeStepIndex].setAttribute("data-te", "active-step"), this._steps.forEach((e, i) => {
      e[this._activeStepIndex] !== i && e.removeAttribute("data-te");
    }));
  }
  _resetStepperHeight() {
    this._element.style.height = "";
  }
  _setStepsHeight() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${st}`, t), i = window.getComputedStyle(e);
      this._verticalStepperStyles.push({
        paddingTop: parseFloat(i.paddingTop),
        paddingBottom: parseFloat(i.paddingBottom)
      });
      const n = e.scrollHeight;
      e.style.height = `${n}px`;
    });
  }
  _setSingleStepHeight(t) {
    const e = d.findOne(`${st}`, t), i = this.activeStep === t, n = this._steps.indexOf(t);
    let o;
    i ? (e.style.height = "", o = e.scrollHeight) : o = e.scrollHeight + this._verticalStepperStyles[n].paddingTop + this._verticalStepperStyles[n].paddingBottom, e.style.height = `${o}px`;
  }
  _toggleVertical() {
    this._currentView = wt, this._setStepsHeight(), this._hideInactiveSteps();
  }
  _toggleHorizontal() {
    this._currentView = mi, this._setHeight(this.activeStep), this._hideInactiveSteps();
  }
  _toggleStepperClass() {
    d.findOne(
      "[data-te-stepper-type]",
      this._element
    ) !== null && this._steps.forEach((e) => {
      d.findOne(`${st}`, e).classList.remove("!my-0"), d.findOne(`${st}`, e).classList.remove("!py-0"), d.findOne(`${st}`, e).classList.remove("!h-0");
    });
  }
  _toggleStepClass(t, e, i) {
    i && this._steps[t].classList[e](i);
  }
  _bindKeysNavigation() {
    this._toggleStepTabIndex(
      !1,
      d.findOne(`${G}`, this.activeStep)
    ), this._steps.forEach((t) => {
      const e = d.findOne(`${G}`, t);
      c.on(e, Ga, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${Yt}`
        )[0], o = d.next(n, `${Yt}`)[0], r = d.prev(n, `${Yt}`)[0], a = d.findOne(
          `${G}`,
          n
        ), l = d.findOne(
          `${G}`,
          this.activeStep
        );
        let p = null, u = null;
        if (o && (p = d.findOne(`${G}`, o)), r && (u = d.findOne(`${G}`, r)), i.keyCode === Pe && this._currentView !== wt && (u ? (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus()) : p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === Be && this._currentView !== wt && (p ? (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus()) : u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === z && this._currentView === wt && (i.preventDefault(), p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === at && this._currentView === wt && (i.preventDefault(), u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === He) {
          const _ = d.findOne(
            `${G}`,
            this._steps[0]
          );
          this._toggleStepTabIndex(a, _), this._toggleOutlineStyles(a, _), _.focus();
        }
        if (i.keyCode === Ve) {
          const _ = this._steps[this._steps.length - 1], f = d.findOne(`${G}`, _);
          this._toggleStepTabIndex(a, f), this._toggleOutlineStyles(a, f), f.focus();
        }
        (i.keyCode === ct || i.keyCode === Fs) && (i.preventDefault(), this.changeStep(this._steps.indexOf(n))), i.keyCode === Mi && (this._toggleStepTabIndex(a, l), this._toggleOutlineStyles(a, !1), l.focus());
      }), c.on(e, dg, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${Yt}`
        )[0], o = d.findOne(
          `${G}`,
          n
        ), r = d.findOne(
          `${G}`,
          this.activeStep
        );
        i.keyCode === Mi && (this._toggleStepTabIndex(o, r), this._toggleOutlineStyles(!1, r), r.focus());
      });
    });
  }
  _toggleStepTabIndex(t, e) {
    t && t.setAttribute("tabIndex", -1), e && e.setAttribute("tabIndex", 0);
  }
  _toggleOutlineStyles(t, e) {
    t && (t.style.outline = ""), e && (e.style.outline = "revert");
  }
  _toggleDisabled() {
    const t = d.find(`${G}`, this._element), e = d.find(
      `${bs}`,
      this._element
    );
    t[this._activeStepIndex].classList.add("color-[#858585]"), t[this._activeStepIndex].classList.add("cursor-default"), e[this._activeStepIndex].classList.add("!bg-[#858585]"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperDisabled
    );
  }
  _toggleActive(t) {
    const e = d.find(
      `${Za}`,
      this._element
    ), i = d.find(
      `${bs}`,
      this._element
    );
    e[t].classList.add("font-medium"), i[t].classList.add("!bg-primary-100"), i[t].classList.add("!text-primary-700"), i[t].classList.remove("!bg-success-100"), i[t].classList.remove("!text-success-700"), e[this._activeStepIndex].classList.remove("font-medium"), i[this._activeStepIndex].classList.remove("!bg-primary-100"), i[this._activeStepIndex].classList.remove(
      "!text-primary-700"
    ), this._toggleStepClass(t, "add", this._options.stepperActive), this._toggleStepClass(
      this._activeStepIndex,
      "remove",
      this._options.stepperActive
    );
  }
  _toggleCompleted(t) {
    const e = d.find(
      `${bs}`,
      this._element
    );
    e[t].classList.add("!bg-success-100"), e[t].classList.add("!text-success-700"), e[t].classList.remove("!bg-danger-100"), e[t].classList.remove("!text-danger-700"), this._toggleStepClass(t, "add", this._options.stepperCompleted), this._toggleStepClass(t, "remove", this._options.stepperInvalid);
  }
  _hideInactiveSteps() {
    this._steps.forEach((t) => {
      t.getAttribute("data-te") || this._hideElement(d.findOne(`${st}`, t));
    });
  }
  _setHeight(t) {
    const e = d.findOne(`${st}`, t), i = getComputedStyle(e), n = d.findOne(`${G}`, t), o = getComputedStyle(n), r = e.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom), a = n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom);
    this._element.style.height = `${a + r}px`;
  }
  _hideElement(t) {
    !d.parents(
      t,
      `${Yt}`
    )[0].getAttribute("data-te") && this._currentView !== wt || (t.classList.add("!my-0"), t.classList.add("!py-0"), t.classList.add("!h-0"));
  }
  _showElement(t) {
    this._currentView === wt ? (t.classList.remove("!my-0"), t.classList.remove("!py-0"), t.classList.remove("!h-0")) : t.style.display = "block";
  }
  _animateHorizontalStep(t) {
    const e = t > this._activeStepIndex, i = d.findOne(
      `${st}`,
      this._steps[t]
    ), n = d.findOne(
      `${st}`,
      this.activeStep
    );
    let o, r;
    this._steps.forEach((u, _) => {
      const f = d.findOne(`${st}`, u);
      _ !== t && _ !== this._activeStepIndex && this._hideElement(f);
    });
    const a = "translate-x-[150%]", l = "-translate-x-[150%]", p = "translate-0";
    e ? (r = l, o = p, i.classList.remove("translate-x-[150%]"), i.classList.remove("-translate-x-[150%]")) : (r = a, o = p, i.classList.remove("-translate-x-[150%]"), i.classList.remove("translate-x-[150%]")), n.classList.add(r), i.classList.add(o), this._setHeight(this._steps[t]);
  }
  _animateVerticalStep(t) {
    const e = d.findOne(
      `${st}`,
      this._steps[t]
    ), i = d.findOne(
      `${st}`,
      this.activeStep
    );
    this._hideElement(i), this._showElement(e);
  }
  static getInstance(t) {
    return y.getData(t, Ks);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Qa = "data-te-input-state-active", vs = "data-te-input-selected", Ja = "data-te-input-multiple-active", tl = "[data-te-form-check-input]";
class el {
  constructor(t, e, i, n, o, r, a, l, p, u, _) {
    this.id = t, this.nativeOption = e, this.multiple = i, this.value = n, this.label = o, this.selected = r, this.disabled = a, this.hidden = l, this.secondaryText = p, this.groupId = u, this.icon = _, this.node = null, this.active = !1;
  }
  select() {
    this.multiple ? this._selectMultiple() : this._selectSingle();
  }
  _selectSingle() {
    this.selected || (this.node.setAttribute(vs, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0));
  }
  _selectMultiple() {
    if (!this.selected) {
      const t = d.findOne(
        tl,
        this.node
      );
      t.checked = !0, this.node.setAttribute(vs, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0);
    }
  }
  deselect() {
    this.multiple ? this._deselectMultiple() : this._deselectSingle();
  }
  _deselectSingle() {
    this.selected && (this.node.removeAttribute(vs), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1));
  }
  _deselectMultiple() {
    if (this.selected) {
      const t = d.findOne(
        tl,
        this.node
      );
      t.checked = !1, this.node.removeAttribute(vs), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1);
    }
  }
  setNode(t) {
    this.node = t;
  }
  setActiveStyles() {
    if (!this.active) {
      if (this.multiple) {
        this.node.setAttribute(Ja, "");
        return;
      }
      this.active = !0, this.node.setAttribute(Qa, "");
    }
  }
  removeActiveStyles() {
    this.active && (this.active = !1, this.node.removeAttribute(Qa)), this.multiple && this.node.removeAttribute(Ja);
  }
}
class ug {
  constructor(t = !1) {
    this._multiple = t, this._selections = [];
  }
  select(t) {
    this._multiple ? this._selections.push(t) : this._selections = [t];
  }
  deselect(t) {
    if (this._multiple) {
      const e = this._selections.findIndex(
        (i) => t === i
      );
      this._selections.splice(e, 1);
    } else
      this._selections = [];
  }
  clear() {
    this._selections = [];
  }
  get selection() {
    return this._selections[0];
  }
  get selections() {
    return this._selections;
  }
  get label() {
    return this._selections[0] && this.selection.label;
  }
  get labels() {
    return this._selections.map((t) => t.label).join(", ");
  }
  get value() {
    return this.selections[0] && this.selection.value;
  }
  get values() {
    return this._selections.map((t) => t.value);
  }
}
function Po(s) {
  return s.filter((t) => !t.disabled).every((t) => t.selected);
}
const pg = "data-te-select-form-outline-ref", _g = "data-te-select-wrapper-ref", fg = "data-te-select-input-ref", mg = "data-te-select-clear-btn-ref", gg = "data-te-select-dropdown-container-ref", bg = "data-te-select-dropdown-ref", vg = "data-te-select-options-wrapper-ref", Tg = "data-te-select-options-list-ref", Eg = "data-te-select-input-filter-ref", Gc = "data-te-select-option-ref", Cg = "data-te-select-option-all-ref", Ag = "data-te-select-option-text-ref", yg = "data-te-form-check-input", wg = "data-te-select-option-group-ref", kg = "data-te-select-option-group-label-ref", qc = "data-te-select-selected", xg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`, Og = (s) => {
  s.code === "Tab" || s.code === "Esc" || s.preventDefault();
};
function Ts(s, t, e, i, n) {
  t.selectSize === "default" && h.addClass(s, e), t.selectSize === "sm" && h.addClass(s, i), t.selectSize === "lg" && h.addClass(s, n);
}
function Sg(s, t, e, i, n) {
  const o = document.createElement("div");
  o.setAttribute("id", s), o.setAttribute(_g, "");
  const r = D("div");
  r.setAttribute(pg, ""), h.addClass(r, i.formOutline);
  const a = D("input"), l = t.selectFilter ? "combobox" : "listbox", p = t.multiple ? "true" : "false", u = t.disabled ? "true" : "false";
  a.setAttribute(fg, ""), h.addClass(a, i.selectInput), Ts(
    a,
    t,
    i.selectInputSizeDefault,
    i.selectInputSizeSm,
    i.selectInputSizeLg
  ), t.selectFormWhite && h.addClass(a, i.selectInputWhite), a.setAttribute("type", "text"), a.setAttribute("role", l), a.setAttribute("aria-multiselectable", p), a.setAttribute("aria-disabled", u), a.setAttribute("aria-haspopup", "true"), a.setAttribute("aria-expanded", !1), a.name = n, t.tabIndex && a.setAttribute("tabIndex", t.tabIndex), t.disabled && a.setAttribute("disabled", ""), t.selectPlaceholder !== "" && a.setAttribute("placeholder", t.selectPlaceholder), t.selectValidation ? (h.addStyle(a, {
    "pointer-events": "none",
    "caret-color": "transparent"
  }), h.addStyle(r, { cursor: "pointer" })) : a.setAttribute("readonly", "true"), t.selectValidation && (a.setAttribute("required", "true"), a.setAttribute("aria-required", "true"), a.addEventListener("keydown", Og));
  const _ = D("div");
  h.addClass(_, i.selectValidationValid);
  const f = document.createTextNode(
    `${t.selectValidFeedback}`
  );
  _.appendChild(f);
  const g = D("div");
  h.addClass(g, i.selectValidationInvalid);
  const m = document.createTextNode(
    `${t.selectInvalidFeedback}`
  );
  g.appendChild(m);
  const b = D("span");
  b.setAttribute(mg, ""), h.addClass(b, i.selectClearBtn), Ts(
    b,
    t,
    i.selectClearBtnDefault,
    i.selectClearBtnSm,
    i.selectClearBtnLg
  ), t.selectFormWhite && h.addClass(b, i.selectClearBtnWhite);
  const v = document.createTextNode("✕");
  b.appendChild(v), b.setAttribute("tabindex", "0");
  const E = D("span");
  return h.addClass(E, i.selectArrow), Ts(
    E,
    t,
    i.selectArrowDefault,
    i.selectArrowSm,
    i.selectArrowLg
  ), t.selectFormWhite && h.addClass(E, i.selectArrowWhite), E.innerHTML = xg, r.appendChild(a), e && (h.addClass(e, i.selectLabel), Ts(
    e,
    t,
    i.selectLabelSizeDefault,
    i.selectLabelSizeSm,
    i.selectLabelSizeLg
  ), t.selectFormWhite && h.addClass(e, i.selectLabelWhite), r.appendChild(e)), t.selectValidation && (r.appendChild(_), r.appendChild(g)), t.selectClearButton && r.appendChild(b), r.appendChild(E), o.appendChild(r), o;
}
function il(s, t, e, i, n, o, r, a) {
  const l = document.createElement("div");
  l.setAttribute(gg, ""), h.addClass(l, a.selectDropdownContainer), l.setAttribute("id", `${s}`), l.style.width = `${e}px`;
  const p = document.createElement("div");
  p.setAttribute("tabindex", 0), p.setAttribute(bg, ""), h.addClass(p, a.dropdown);
  const u = D("div");
  u.setAttribute(vg, ""), h.addClass(u, a.optionsWrapper), h.addClass(u, a.optionsWrapperScrollbar), u.style.maxHeight = `${i}px`;
  const _ = Zc(
    o,
    n,
    t,
    a
  );
  return u.appendChild(_), t.selectFilter && p.appendChild(
    Ig(t.selectSearchPlaceholder, a)
  ), p.appendChild(u), r && p.appendChild(r), l.appendChild(p), l;
}
function Zc(s, t, e, i) {
  const n = D("div");
  n.setAttribute(Tg, ""), h.addClass(n, i.optionsList);
  let o;
  return e.multiple ? o = $g(
    s,
    t,
    e,
    i
  ) : o = Dg(s, e, i), o.forEach((r) => {
    n.appendChild(r);
  }), n;
}
function Ig(s, t) {
  const e = D("div");
  h.addClass(e, t.inputGroup);
  const i = D("input");
  return i.setAttribute(Eg, ""), h.addClass(i, t.selectFilterInput), i.placeholder = s, i.setAttribute("role", "searchbox"), i.setAttribute("type", "text"), e.appendChild(i), e;
}
function Dg(s, t, e) {
  return Qc(s, t, e);
}
function $g(s, t, e, i) {
  let n = null;
  e.selectAll && (n = Lg(
    t,
    s,
    e,
    i
  ));
  const o = Qc(s, e, i);
  return n ? [n, ...o] : o;
}
function Qc(s, t, e) {
  const i = [];
  return s.forEach((n) => {
    if (Object.prototype.hasOwnProperty.call(
      n,
      "options"
    )) {
      const r = Pg(n, t, e);
      i.push(r);
    } else
      i.push(Jc(n, t, e));
  }), i;
}
function Lg(s, t, e, i) {
  const n = Po(t), o = D("div");
  return o.setAttribute(Gc, ""), h.addClass(o, i.selectOption), o.setAttribute(Cg, ""), h.addStyle(o, {
    height: `${e.selectOptionHeight}px`
  }), o.setAttribute("role", "option"), o.setAttribute("aria-selected", n), n && o.setAttribute(qc, ""), o.appendChild(th(s, e, i)), s.setNode(o), o;
}
function Jc(s, t, e) {
  if (s.node)
    return s.node;
  const i = D("div");
  return i.setAttribute(Gc, ""), h.addClass(i, e.selectOption), h.addStyle(i, {
    height: `${t.selectOptionHeight}px`
  }), h.setDataAttribute(i, "id", s.id), i.setAttribute("role", "option"), i.setAttribute("aria-selected", s.selected), i.setAttribute("aria-disabled", s.disabled), s.selected && i.setAttribute(qc, ""), s.disabled && i.setAttribute("data-te-select-option-disabled", !0), s.hidden && h.addClass(i, "hidden"), i.appendChild(th(s, t, e)), s.icon && i.appendChild(Rg(s, e)), s.setNode(i), i;
}
function th(s, t, e) {
  const i = D("span");
  i.setAttribute(Ag, ""), h.addClass(i, e.selectOptionText);
  const n = document.createTextNode(s.label);
  return t.multiple && i.appendChild(Mg(s, e)), i.appendChild(n), (s.secondaryText || typeof s.secondaryText == "number") && i.appendChild(
    Ng(s.secondaryText, e)
  ), i;
}
function Ng(s, t) {
  const e = D("span");
  h.addClass(e, t.selectOptionSecondaryText);
  const i = document.createTextNode(s);
  return e.appendChild(i), e;
}
function Mg(s, t) {
  const e = D("input");
  e.setAttribute("type", "checkbox"), h.addClass(e, t.formCheckInput), e.setAttribute(yg, "");
  const i = D("label");
  return s.selected && e.setAttribute("checked", !0), s.disabled && e.setAttribute("disabled", !0), e.appendChild(i), e;
}
function Rg(s, t) {
  const e = D("span"), i = D("img");
  return h.addClass(i, t.selectOptionIcon), i.src = s.icon, e.appendChild(i), e;
}
function Pg(s, t, e) {
  const i = D("div");
  i.setAttribute(wg, ""), h.addClass(i, e.selectOptionGroup), i.setAttribute("role", "group"), i.setAttribute("id", s.id), s.hidden && h.addClass(i, "hidden");
  const n = D("label");
  return n.setAttribute(kg, ""), h.addClass(n, e.selectOptionGroupLabel), h.addStyle(n, { height: `${t.selectOptionHeight}px` }), n.setAttribute("for", s.id), n.textContent = s.label, i.appendChild(n), s.options.forEach((o) => {
    i.appendChild(Jc(o, t, e));
  }), i;
}
function Bg(s, t) {
  const e = D("div");
  return e.innerHTML = s, h.addClass(e, t.selectLabel), h.addClass(e, t.selectFakeValue), e;
}
const io = "select", gi = "te.select", Wi = `.${gi}`, Hg = `close${Wi}`, Vg = `open${Wi}`, sl = `optionSelect${Wi}`, nl = `optionDeselect${Wi}`, Wg = `valueChange${Wi}`, Fg = "change", ol = "data-te-select-init", eh = "data-te-select-no-results-ref", rl = "data-te-select-open", q = "data-te-input-state-active", jt = "data-te-input-focused", so = "data-te-input-disabled", Yg = "data-te-select-option-group-label-ref", jg = "data-te-select-option-all-ref", di = "data-te-select-selected", Kg = "[data-te-select-label-ref]", al = "[data-te-select-input-ref]", zg = "[data-te-select-input-filter-ref]", Ug = "[data-te-select-dropdown-ref]", Xg = "[data-te-select-options-wrapper-ref]", ll = "[data-te-select-options-list-ref]", Gg = "[data-te-select-option-ref]", qg = "[data-te-select-clear-btn-ref]", Zg = "[data-te-select-custom-content-ref]", Qg = `[${eh}]`, cl = "[data-te-select-form-outline-ref]", Jg = "[data-te-select-toggle]", no = "[data-te-input-notch-ref]", tb = 200, eb = {
  selectAutoSelect: !1,
  selectContainer: "body",
  selectClearButton: !1,
  disabled: !1,
  selectDisplayedLabels: 5,
  selectFormWhite: !1,
  multiple: !1,
  selectOptionsSelectedLabel: "options selected",
  selectOptionHeight: 38,
  selectAll: !0,
  selectAllLabel: "Select all",
  selectSearchPlaceholder: "Search...",
  selectSize: "default",
  selectVisibleOptions: 5,
  selectFilter: !1,
  selectFilterDebounce: 300,
  selectNoResultText: "No results",
  selectValidation: !1,
  selectValidFeedback: "Valid",
  selectInvalidFeedback: "Invalid",
  selectPlaceholder: ""
}, ib = {
  selectAutoSelect: "boolean",
  selectContainer: "string",
  selectClearButton: "boolean",
  disabled: "boolean",
  selectDisplayedLabels: "number",
  selectFormWhite: "boolean",
  multiple: "boolean",
  selectOptionsSelectedLabel: "string",
  selectOptionHeight: "number",
  selectAll: "boolean",
  selectAllLabel: "string",
  selectSearchPlaceholder: "string",
  selectSize: "string",
  selectVisibleOptions: "number",
  selectFilter: "boolean",
  selectFilterDebounce: "number",
  selectNoResultText: "string",
  selectValidation: "boolean",
  selectValidFeedback: "string",
  selectInvalidFeedback: "string",
  selectPlaceholder: "string"
}, sb = {
  dropdown: "relative outline-none min-w-[100px] m-0 scale-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-zinc-700",
  formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
  formOutline: "relative",
  initialized: "hidden",
  inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
  noResult: "flex items-center px-4",
  optionsList: "list-none m-0 p-0",
  optionsWrapper: "overflow-y-auto",
  optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5",
  selectArrowWhite: "text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white",
  selectArrowDefault: "top-2",
  selectArrowLg: "top-[13px]",
  selectArrowSm: "top-1",
  selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200",
  selectClearBtnWhite: "!text-gray-50",
  selectClearBtnDefault: "top-2 text-base",
  selectClearBtnLg: "top-[11px] text-base",
  selectClearBtnSm: "top-1 text-[0.8rem]",
  selectDropdownContainer: "z-[1070]",
  selectFakeValue: "transform-none hidden data-[te-input-state-active]:block",
  selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
  selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600",
  selectInputWhite: "!text-gray-50",
  selectInputSizeDefault: "py-[0.32rem] px-3 leading-[1.6]",
  selectInputSizeLg: "py-[0.32rem] px-3 leading-[2.15]",
  selectInputSizeSm: "py-[0.33rem] px-3 text-xs leading-[1.5]",
  selectLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary",
  selectLabelWhite: "!text-gray-50",
  selectLabelSizeDefault: "pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]",
  selectLabelSizeLg: "pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]",
  selectLabelSizeSm: "pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]",
  selectOption: "flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30",
  selectOptionGroup: "group/opt",
  selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
  selectOptionIcon: "w-7 h-7 rounded-full",
  selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300",
  selectOptionText: "group",
  selectValidationValid: "hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block",
  selectValidationInvalid: "hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block"
}, nb = {
  dropdown: "string",
  formCheckInput: "string",
  formOutline: "string",
  initialized: "string",
  inputGroup: "string",
  noResult: "string",
  optionsList: "string",
  optionsWrapper: "string",
  optionsWrapperScrollbar: "string",
  selectArrow: "string",
  selectArrowDefault: "string",
  selectArrowLg: "string",
  selectArrowSm: "string",
  selectClearBtn: "string",
  selectClearBtnDefault: "string",
  selectClearBtnLg: "string",
  selectClearBtnSm: "string",
  selectDropdownContainer: "string",
  selectFakeValue: "string",
  selectFilterInput: "string",
  selectInput: "string",
  selectInputSizeDefault: "string",
  selectInputSizeLg: "string",
  selectInputSizeSm: "string",
  selectLabel: "string",
  selectLabelSizeDefault: "string",
  selectLabelSizeLg: "string",
  selectLabelSizeSm: "string",
  selectOption: "string",
  selectOptionGroup: "string",
  selectOptionGroupLabel: "string",
  selectOptionIcon: "string",
  selectOptionSecondaryText: "string",
  selectOptionText: "string"
};
class dr {
  constructor(t, e, i) {
    this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._config.selectPlaceholder && !this._config.multiple && this._addPlaceholderOption(), this._optionsToRender = this._getOptionsToRender(t), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._filteredOptionsList = null, this._selectionModel = new ug(this.multiple), this._activeOptionIndex = -1, this._activeOption = null, this._wrapperId = rt("select-wrapper-"), this._dropdownContainerId = rt("select-dropdown-container-"), this._selectAllId = rt("select-all-"), this._debounceTimeoutId = null, this._dropdownHeight = this._config.selectOptionHeight * this._config.selectVisibleOptions, this._popper = null, this._input = null, this._label = d.next(this._element, Kg)[0], this._notch = null, this._fakeValue = null, this._isFakeValueActive = !1, this._customContent = d.next(
      t,
      Zg
    )[0], this._toggleButton = null, this._elementToggle = null, this._wrapper = null, this._inputEl = null, this._dropdownContainer = null, this._container = null, this._selectAllOption = null, this._init(), this._mutationObserver = null, this._isOpen = !1, this._addMutationObserver(), this._element && y.setData(t, gi, this);
  }
  static get NAME() {
    return io;
  }
  get filterInput() {
    return d.findOne(
      zg,
      this._dropdownContainer
    );
  }
  get dropdown() {
    return d.findOne(Ug, this._dropdownContainer);
  }
  get optionsList() {
    return d.findOne(
      ll,
      this._dropdownContainer
    );
  }
  get optionsWrapper() {
    return d.findOne(
      Xg,
      this._dropdownContainer
    );
  }
  get clearButton() {
    return d.findOne(qg, this._wrapper);
  }
  get options() {
    return this._filteredOptionsList ? this._filteredOptionsList : this._plainOptions;
  }
  get value() {
    return this.multiple ? this._selectionModel.values : this._selectionModel.value;
  }
  get multiple() {
    return this._config.multiple;
  }
  get hasSelectAll() {
    return this.multiple && this._config.selectAll;
  }
  get hasSelection() {
    return this._selectionModel.selection || this._selectionModel.selections.length > 0;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...eb,
      ...e,
      ...t
    }, this._element.hasAttribute("multiple") && (t.multiple = !0), this._element.hasAttribute("disabled") && (t.disabled = !0), this._element.tabIndex && (t.tabIndex = this._element.getAttribute("tabIndex")), I(io, t, ib), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...sb,
      ...e,
      ...t
    }, I(io, t, nb), t;
  }
  _addPlaceholderOption() {
    const t = new Option("", "", !0, !0);
    t.hidden = !0, t.selected = !0, this._element.prepend(t);
  }
  _getOptionsToRender(t) {
    const e = [];
    return t.childNodes.forEach((n) => {
      if (n.nodeName === "OPTGROUP") {
        const o = {
          id: rt("group-"),
          label: n.label,
          disabled: n.hasAttribute("disabled"),
          hidden: n.hasAttribute("hidden"),
          options: []
        };
        n.childNodes.forEach((a) => {
          a.nodeName === "OPTION" && o.options.push(
            this._createOptionObject(a, o)
          );
        }), e.push(o);
      } else
        n.nodeName === "OPTION" && e.push(this._createOptionObject(n));
    }), e;
  }
  _getPlainOptions(t) {
    if (!d.findOne("optgroup", this._element))
      return t;
    const i = [];
    return t.forEach((n) => {
      Object.prototype.hasOwnProperty.call(
        n,
        "options"
      ) ? n.options.forEach((r) => {
        i.push(r);
      }) : i.push(n);
    }), i;
  }
  _createOptionObject(t, e = {}) {
    const i = rt("option-"), n = e.id ? e.id : null, o = e.disabled ? e.disabled : !1, r = t.selected || t.hasAttribute(di), a = t.hasAttribute("disabled") || o, l = t.hasAttribute("hidden") || e && e.hidden, p = this.multiple, u = t.value, _ = t.label, f = h.getDataAttribute(
      t,
      "selectSecondaryText"
    ), g = h.getDataAttribute(t, "select-icon");
    return new el(
      i,
      t,
      p,
      u,
      _,
      r,
      a,
      l,
      f,
      n,
      g
    );
  }
  _getNavigationOptions() {
    const t = this.options.filter((e) => !e.hidden);
    return this.hasSelectAll ? [this._selectAllOption, ...t] : t;
  }
  _init() {
    this._renderMaterialWrapper(), this._wrapper = d.findOne(`#${this._wrapperId}`), this._input = d.findOne(al, this._wrapper), this._config.disabled && this._input.setAttribute(so, "");
    const t = this._config.selectContainer;
    t === "body" ? this._container = document.body : this._container = d.findOne(t), this._initOutlineInput(), this._setDefaultSelections(), this._updateInputValue(), this._appendFakeValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._bindComponentEvents(), this.hasSelectAll && (this._selectAllOption = this._createSelectAllOption()), this._dropdownContainer = il(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    ), this._setFirstActiveOption(), this._listenToFocusChange();
  }
  _renderMaterialWrapper() {
    const t = Sg(
      this._wrapperId,
      this._config,
      this._label,
      this._classes,
      this._element.name
    );
    this._element.parentNode.insertBefore(t, this._element), h.addClass(this._element, this._classes.initialized), t.appendChild(this._element);
  }
  _initOutlineInput() {
    const t = d.findOne(
      cl,
      this._wrapper
    );
    new V(
      t,
      {
        inputFormWhite: this._config.selectFormWhite
      },
      this._classes
    ).init(), this._notch = d.findOne(no, this._wrapper);
  }
  _bindComponentEvents() {
    this._listenToComponentKeydown(), this._listenToWrapperClick(), this._listenToClearBtnClick(), this._listenToClearBtnKeydown();
  }
  _setDefaultSelections() {
    this.options.forEach((t) => {
      t.selected && this._selectionModel.select(t);
    });
  }
  _listenToComponentKeydown() {
    c.on(this._wrapper, "keydown", this._handleKeydown.bind(this));
  }
  _handleKeydown(t) {
    this._isOpen && !this._config.selectFilter ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
  }
  _handleOpenKeydown(t) {
    const e = t.keyCode, i = e === Hi || e === at && t.altKey || e === Mi;
    if (e === Mi && this._config.selectAutoSelect && !this.multiple && this._handleAutoSelection(this._activeOption), i) {
      this.close(), this._input.focus();
      return;
    }
    switch (e) {
      case z:
        this._setNextOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case at:
        this._setPreviousOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case He:
        this._setFirstOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case Ve:
        this._setLastOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case ct:
        t.preventDefault(), this._activeOption && (this.hasSelectAll && this._activeOptionIndex === 0 ? this._handleSelectAll() : this._handleSelection(this._activeOption));
        return;
      default:
        return;
    }
    t.preventDefault();
  }
  _handleClosedKeydown(t) {
    const e = t.keyCode;
    if (e === ct && t.preventDefault(), (e === ct || e === z && t.altKey || e === z && this.multiple) && this.open(), this.multiple)
      switch (e) {
        case z:
          this.open();
          break;
        case at:
          this.open();
          break;
        default:
          return;
      }
    else
      switch (e) {
        case z:
          this._setNextOptionActive(), this._handleSelection(this._activeOption);
          break;
        case at:
          this._setPreviousOptionActive(), this._handleSelection(this._activeOption);
          break;
        case He:
          this._setFirstOptionActive(), this._handleSelection(this._activeOption);
          break;
        case Ve:
          this._setLastOptionActive(), this._handleSelection(this._activeOption);
          break;
        default:
          return;
      }
    t.preventDefault();
  }
  _scrollToOption(t) {
    if (!t)
      return;
    let e;
    const i = this.options.filter((u) => !u.hidden);
    this.hasSelectAll ? e = i.indexOf(t) + 1 : e = i.indexOf(t);
    const n = this._getNumberOfGroupsBeforeOption(e), o = e + n, r = this.optionsWrapper, a = r.offsetHeight, l = this._config.selectOptionHeight, p = r.scrollTop;
    if (e > -1) {
      const u = o * l, _ = u + l > p + a;
      u < p ? r.scrollTop = u : _ ? r.scrollTop = u - a + l : r.scrollTop = p;
    }
  }
  _getNumberOfGroupsBeforeOption(t) {
    const e = this.options.filter((r) => !r.hidden), i = this._optionsToRender.filter((r) => !r.hidden), n = this.hasSelectAll ? t - 1 : t;
    let o = 0;
    for (let r = 0; r <= n; r++)
      e[r].groupId && i[o] && i[o].id && e[r].groupId === i[o].id && o++;
    return o;
  }
  _setNextOptionActive() {
    let t = this._activeOptionIndex + 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t += 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setPreviousOptionActive() {
    let t = this._activeOptionIndex - 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t -= 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setFirstOptionActive() {
    const e = this._getNavigationOptions();
    this._updateActiveOption(e[0], 0);
  }
  _setLastOptionActive() {
    const t = this._getNavigationOptions(), e = t.length - 1;
    this._updateActiveOption(t[e], e);
  }
  _updateActiveOption(t, e) {
    const i = this._activeOption;
    i && i.removeActiveStyles(), t.setActiveStyles(), this._activeOptionIndex = e, this._activeOption = t;
  }
  _listenToWrapperClick() {
    c.on(this._wrapper, "click", () => {
      this.toggle();
    });
  }
  _listenToClearBtnClick() {
    c.on(this.clearButton, "click", (t) => {
      t.preventDefault(), t.stopPropagation(), this._handleClear();
    });
  }
  _listenToClearBtnKeydown() {
    c.on(this.clearButton, "keydown", (t) => {
      t.keyCode === ct && (this._handleClear(), t.preventDefault(), t.stopPropagation());
    });
  }
  _handleClear() {
    if (this.multiple)
      this._selectionModel.clear(), this._deselectAllOptions(this.options), this.hasSelectAll && this._updateSelectAllState();
    else {
      const t = this._selectionModel.selection;
      this._selectionModel.clear(), t.deselect();
    }
    this._fakeValue.innerHTML = "", this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(null), this._emitNativeChangeEvent();
  }
  _listenToOptionsClick() {
    c.on(this.optionsWrapper, "click", (t) => {
      if (t.target.hasAttribute(
        Yg
      ))
        return;
      const i = t.target.nodeName === "DIV" ? t.target : d.closest(t.target, Gg);
      if (i.hasAttribute(jg)) {
        this._handleSelectAll();
        return;
      }
      const o = i.dataset.teId, r = this.options.find((a) => a.id === o);
      r && !r.disabled && this._handleSelection(r);
    });
  }
  _handleSelectAll() {
    this._selectAllOption.selected ? (this._deselectAllOptions(this.options), this._selectAllOption.deselect()) : (this._selectAllOptions(this.options), this._selectAllOption.select()), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _selectAllOptions(t) {
    t.forEach((e) => {
      !e.selected && !e.disabled && (this._selectionModel.select(e), e.select());
    });
  }
  _deselectAllOptions(t) {
    t.forEach((e) => {
      e.selected && !e.disabled && (this._selectionModel.deselect(e), e.deselect());
    });
  }
  _handleSelection(t) {
    this.multiple ? (this._handleMultiSelection(t), this.hasSelectAll && this._updateSelectAllState()) : this._handleSingleSelection(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleAutoSelection(t) {
    this._singleOptionSelect(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleSingleSelection(t) {
    this._singleOptionSelect(t), this.close(), this._input.focus();
  }
  _singleOptionSelect(t) {
    const e = this._selectionModel.selections[0];
    e && e !== t && (this._selectionModel.deselect(e), e.deselect(), e.node.setAttribute(di, !1), c.trigger(this._element, nl, {
      value: e.value
    })), (!e || e && t !== e) && (this._selectionModel.select(t), t.select(), t.node.setAttribute(di, !0), c.trigger(this._element, sl, {
      value: t.value
    }), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent());
  }
  _handleMultiSelection(t) {
    t.selected ? (this._selectionModel.deselect(t), t.deselect(), t.node.setAttribute(di, !1), c.trigger(this._element, nl, {
      value: t.value
    })) : (this._selectionModel.select(t), t.select(), t.node.setAttribute(di, !0), c.trigger(this._element, sl, {
      value: t.value
    })), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _emitValueChangeEvent(t) {
    c.trigger(this._element, Wg, { value: t });
  }
  _emitNativeChangeEvent() {
    c.trigger(this._element, Fg);
  }
  _updateInputValue() {
    const t = this.multiple ? this._selectionModel.labels : this._selectionModel.label;
    let e;
    this.multiple && this._config.selectDisplayedLabels !== -1 && this._selectionModel.selections.length > this._config.selectDisplayedLabels ? e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}` : e = t, !this.multiple && !this._isSelectionValid(this._selectionModel.selection) ? this._input.value = "" : this._isLabelEmpty(this._selectionModel.selection) ? this._input.value = " " : e ? this._input.value = e : this.multiple || !this._optionsToRender[0] ? this._input.value = "" : this._input.value = this._optionsToRender[0].label;
  }
  _isSelectionValid(t) {
    return !(t && (t.disabled || t.value === ""));
  }
  _isLabelEmpty(t) {
    return !!(t && t.label === "");
  }
  _appendFakeValue() {
    if (!this._selectionModel.selection || this._selectionModel._multiple)
      return;
    const t = this._selectionModel.selection.label;
    this._fakeValue = Bg(t, this._classes), d.findOne(
      cl,
      this._wrapper
    ).appendChild(this._fakeValue);
  }
  _updateLabelPosition() {
    const t = this._element.hasAttribute(ol), e = this._input.value !== "";
    this._label && (t && (e || this._isOpen || this._isFakeValueActive) ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q, "")));
  }
  _updateLabelPositionWhileClosing() {
    this._label && (this._input.value !== "" || this._isFakeValueActive ? (this._label.setAttribute(q, ""), this._notch.setAttribute(q, "")) : (this._label.removeAttribute(q), this._notch.removeAttribute(q)));
  }
  _updateFakeLabelPosition() {
    this._fakeValue && (this._input.value === "" && this._fakeValue.innerHTML !== "" && !this._config.selectPlaceholder ? (this._isFakeValueActive = !0, this._fakeValue.setAttribute(q, "")) : (this._isFakeValueActive = !1, this._fakeValue.removeAttribute(q)));
  }
  _updateClearButtonVisibility() {
    if (!this.clearButton)
      return;
    this._selectionModel.selection || this._selectionModel.selections.length > 0 ? h.addStyle(this.clearButton, { display: "block" }) : h.addStyle(this.clearButton, { display: "none" });
  }
  _updateSelectAllState() {
    const t = this._selectAllOption.selected, e = Po(this.options);
    !e && t ? this._selectAllOption.deselect() : e && !t && this._selectAllOption.select();
  }
  toggle() {
    this._isOpen ? this.close() : this.open();
  }
  open() {
    const t = this._config.disabled, e = c.trigger(this._element, Vg);
    this._isOpen || t || e.defaultPrevented || (this._openDropdown(), this._updateDropdownWidth(), this._setFirstActiveOption(), this._scrollToOption(this._activeOption), this._config.selectFilter && (setTimeout(() => {
      this.filterInput.focus();
    }, 0), this._listenToSelectSearch(), this._listenToDropdownKeydown()), this._listenToOptionsClick(), this._listenToOutsideClick(), this._listenToWindowResize(), this._isOpen = !0, this._updateLabelPosition(), this._setInputActiveStyles());
  }
  _openDropdown() {
    this._popper = Te(this._input, this._dropdownContainer, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 1]
          }
        }
      ]
    }), this._container.appendChild(this._dropdownContainer), setTimeout(() => {
      this.dropdown.setAttribute(rl, "");
    }, 0);
  }
  _updateDropdownWidth() {
    const t = this._input.offsetWidth;
    h.addStyle(this._dropdownContainer, { width: `${t}px` });
  }
  _setFirstActiveOption() {
    const t = this._getNavigationOptions(), e = this._activeOption;
    e && e.removeActiveStyles();
    const i = this.multiple ? this._selectionModel.selections[0] : this._selectionModel.selection;
    i ? (this._activeOption = i, i.setActiveStyles(), this._activeOptionIndex = t.findIndex(
      (n) => n === i
    )) : (this._activeOption = null, this._activeOptionIndex = -1);
  }
  _setInputActiveStyles() {
    this._input.setAttribute(jt, ""), d.findOne(no, this._wrapper).setAttribute(
      jt,
      ""
    );
  }
  _listenToWindowResize() {
    c.on(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleWindowResize() {
    this._dropdownContainer && this._updateDropdownWidth();
  }
  _listenToSelectSearch() {
    this.filterInput.addEventListener("input", (t) => {
      const e = t.target.value, i = this._config.selectFilterDebounce;
      this._debounceFilter(e, i);
    });
  }
  _debounceFilter(t, e) {
    this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(() => {
      this._filterOptions(t);
    }, e);
  }
  _filterOptions(t) {
    const e = [];
    this._optionsToRender.forEach((o) => {
      const r = Object.prototype.hasOwnProperty.call(
        o,
        "options"
      ), a = !r && o.label.toLowerCase().includes(t.toLowerCase()), l = {};
      r && (l.label = o.label, l.options = this._filter(t, o.options), l.options.length > 0 && e.push(l)), a && e.push(o);
    });
    const i = this._config.selectNoResultText !== "", n = e.length !== 0;
    if (n)
      this._updateOptionsListTemplate(e), this._popper.forceUpdate(), this._filteredOptionsList = this._getPlainOptions(e), this.hasSelectAll && this._updateSelectAllState(), this._setFirstActiveOption();
    else if (!n && i) {
      const o = this._getNoResultTemplate();
      this.optionsWrapper.innerHTML = o;
    }
  }
  _updateOptionsListTemplate(t) {
    const e = d.findOne(ll, this._dropdownContainer) || d.findOne(Qg, this._dropdownContainer), i = Zc(
      t,
      this._selectAllOption,
      this._config,
      this._classes
    );
    this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(i);
  }
  _getNoResultTemplate() {
    return `<div class="${this._classes.noResult}" ${eh} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`;
  }
  _filter(t, e) {
    const i = t.toLowerCase();
    return e.filter(
      (n) => n.label.toLowerCase().includes(i)
    );
  }
  _listenToDropdownKeydown() {
    c.on(
      this.dropdown,
      "keydown",
      this._handleOpenKeydown.bind(this)
    );
  }
  _listenToOutsideClick() {
    this._outsideClick = this._handleOutSideClick.bind(this), c.on(document, "click", this._outsideClick);
  }
  _listenToFocusChange(t = !0) {
    if (t === !1) {
      c.off(
        this._input,
        "focus",
        () => this._notch.setAttribute(jt, "")
      ), c.off(
        this._input,
        "blur",
        () => this._notch.removeAttribute(jt)
      );
      return;
    }
    c.on(
      this._input,
      "focus",
      () => this._notch.setAttribute(jt, "")
    ), c.on(
      this._input,
      "blur",
      () => this._notch.removeAttribute(jt)
    );
  }
  _handleOutSideClick(t) {
    const e = this._wrapper && this._wrapper.contains(t.target), i = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
    let o;
    this._toggleButton || (this._elementToggle = d.find(Jg)), this._elementToggle && this._elementToggle.forEach((r) => {
      const a = h.getDataAttribute(
        r,
        "select-toggle"
      );
      (a === this._element.id || this._element.classList.contains(a)) && (this._toggleButton = r, o = this._toggleButton.contains(t.target));
    }), !e && !i && !n && !o && this.close();
  }
  close() {
    const t = c.trigger(this._element, Hg);
    !this._isOpen || t.defaultPrevented || (this._config.selectFilter && this.hasSelectAll && (this._resetFilterState(), this._updateOptionsListTemplate(this._optionsToRender), this._config.multiple && this._updateSelectAllState()), this._removeDropdownEvents(), this.dropdown.removeAttribute(rl), setTimeout(() => {
      this._input.removeAttribute(jt), this._input.blur(), d.findOne(no, this._wrapper).removeAttribute(
        jt
      ), this._label && !this.hasSelection && (this._label.removeAttribute(q), this._notch.setAttribute(q, ""), this._input.removeAttribute(q), this._notch.removeAttribute(q)), this._updateLabelPositionWhileClosing();
    }, 0), setTimeout(() => {
      this._container && this._dropdownContainer.parentNode === this._container && this._container.removeChild(this._dropdownContainer), this._popper.destroy(), this._isOpen = !1, c.off(this.dropdown, "transitionend");
    }, tb));
  }
  _resetFilterState() {
    this.filterInput.value = "", this._filteredOptionsList = null;
  }
  _removeDropdownEvents() {
    c.off(document, "click", this._outsideClick), this._config.selectFilter && c.off(this.dropdown, "keydown"), c.off(this.optionsWrapper, "click");
  }
  _addMutationObserver() {
    this._mutationObserver = new MutationObserver(() => {
      this._wrapper && (this._updateSelections(), this._updateDisabledState());
    }), this._observeMutationObserver();
  }
  _updateSelections() {
    this._optionsToRender = this._getOptionsToRender(this._element), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._selectionModel.clear(), this._setDefaultSelections(), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this.hasSelectAll && this._updateSelectAllState();
    const t = this._config.filter && this.filterInput && this.filterInput.value;
    this._isOpen && !t ? (this._updateOptionsListTemplate(this._optionsToRender), this._setFirstActiveOption()) : this._isOpen && t ? (this._filterOptions(this.filterInput.value), this._setFirstActiveOption()) : this._dropdownContainer = il(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    );
  }
  _updateDisabledState() {
    const t = d.findOne(al, this._wrapper);
    this._element.hasAttribute("disabled") ? (this._config.disabled = !0, t.setAttribute("disabled", ""), t.setAttribute(so, "")) : (this._config.disabled = !1, t.removeAttribute("disabled"), t.removeAttribute(so));
  }
  _observeMutationObserver() {
    this._mutationObserver && this._mutationObserver.observe(this._element, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    });
  }
  _disconnectMutationObserver() {
    this.mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
  }
  _createSelectAllOption() {
    const t = this._selectAllId, e = null, i = !0, n = "select-all", o = this._config.selectAllLabel, r = Po(this.options), a = !1, l = !1, p = null, u = null, _ = null;
    return new el(
      t,
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      _
    );
  }
  dispose() {
    this._removeComponentEvents(), this._destroyMaterialSelect(), this._listenToFocusChange(!1), y.removeData(this._element, gi);
  }
  _removeComponentEvents() {
    c.off(this.input, "click"), c.off(this.wrapper, this._handleKeydown.bind(this)), c.off(this.clearButton, "click"), c.off(this.clearButton, "keydown"), c.off(window, "resize", this._handleWindowResize.bind(this));
  }
  _destroyMaterialSelect() {
    this._isOpen && this.close(), this._destroyMaterialTemplate();
  }
  _destroyMaterialTemplate() {
    const t = this._wrapper.parentNode, e = d.find("label", this._wrapper);
    t.appendChild(this._element), e.forEach((i) => {
      t.appendChild(i);
    }), e.forEach((i) => {
      i.removeAttribute(q);
    }), h.removeClass(this._element, this._classes.initialized), this._element.removeAttribute(ol), t.removeChild(this._wrapper);
  }
  setValue(t) {
    this.options.filter((i) => i.selected).forEach((i) => i.nativeOption.selected = !1), Array.isArray(t) ? t.forEach((i) => {
      this._selectByValue(i);
    }) : this._selectByValue(t), this._updateSelections();
  }
  _selectByValue(t) {
    const e = this.options.find(
      (i) => i.value === t
    );
    return e ? (e.nativeOption.selected = !0, !0) : !1;
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, gi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new dr(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, gi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const ob = ({ inputID: s, labelText: t }, e) => `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${s}"
          placeholder="Example label" />
        <label
          for="${s}"
          class="${e.chipsLabel}"
          >${t}
        </label>
      </div>
    </div>`, rb = ({ text: s, iconSVG: t }, e) => `<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${s}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`, zs = "chip", ab = `te.${zs}`, ih = "data-te-chip-close", oo = `[${ih}]`, lb = "delete.te.chips", cb = "select.te.chip", hb = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>', db = {
  text: "string",
  closeIcon: "boolean",
  img: "object",
  iconSVG: "string"
}, ub = {
  text: "",
  closeIcon: !1,
  img: { path: "", alt: "" },
  iconSVG: hb
}, pb = {
  icon: "float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out",
  chipElement: "flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded",
  chipCloseIcon: "w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
}, _b = {
  icon: "string",
  chipElement: "string",
  chipCloseIcon: "string"
};
class ui {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i);
  }
  // Getters
  static get NAME() {
    return zs;
  }
  // Public
  init() {
    this._appendCloseIcon(), this._handleDelete(), this._handleTextChip(), this._handleClickOnChip();
  }
  dispose() {
    this._element = null, this._options = null, c.off(this._element, "click");
  }
  appendChip() {
    const { text: t, closeIcon: e, iconSVG: i } = this._options;
    return rb({ text: t, closeIcon: e, iconSVG: i }, this._classes);
  }
  // Private
  _appendCloseIcon(t = this._element) {
    if (!(d.find(oo, this._element).length > 0) && this._options.closeIcon) {
      const e = D("span");
      e.classList = this._classes.icon, e.setAttribute(ih), e.innerHTML = this._options.iconSVG, t.insertAdjacentElement("beforeend", e);
    }
  }
  _handleClickOnChip() {
    c.on(this._element, "click", (t) => {
      const { textContent: e } = t.target, i = {};
      i.tag = e.trim(), c.trigger(cb, { event: t, obj: i });
    });
  }
  _handleDelete() {
    d.find(
      oo,
      this._element
    ).length !== 0 && c.on(this._element, "click", oo, () => {
      c.trigger(this._element, lb), this._element.remove();
    });
  }
  _handleTextChip() {
    this._element.innerText === "" && (this._element.innerText = this._options.text);
  }
  _getConfig(t) {
    const e = {
      ...ub,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(zs, e, db), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...pb,
      ...e,
      ...t
    }, I(zs, t, _b), t;
  }
  static getInstance(t) {
    return y.getData(t, ab);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Di = "chips", Fi = `data-te-${Di}`, hl = `te.${Di}`, fb = `${Fi}-input-init`, ft = `${Fi}-active`, dl = `${Fi}-initial`, sh = `${Fi}-placeholder`, mb = `${Fi}-input-wrapper`, Bo = "data-te-chip-init", nh = "data-te-chip-close", oh = "data-te-chip-text", gb = `[${ft}]`, Ho = `[${Bo}]`, bb = `${Ho}${gb}`, ro = `[${nh}]`, vb = `[${mb}]`, Tb = `[${oh}]`, Eb = `[${sh}]`, Cb = "data-te-input-notch-leading-ref", Ab = "data-te-input-notch-middle-ref", yb = `[${Cb}]`, wb = `[${Ab}]`, xe = "data-te-input-state-active", ao = "[data-te-input-notch-ref]", kb = "add.te.chips", xb = "arrowDown.te.chips", Ob = "arrowLeft.te.chips", Sb = "arrowRight.te.chips", Ib = "arrowUp.te.chips", ul = "delete.te.chips", pl = "select.te.chips", Db = {
  inputID: "string",
  parentSelector: "string",
  initialValues: "array",
  editable: "boolean",
  labelText: "string",
  inputClasses: "object",
  inputOptions: "object"
}, $b = {
  inputID: rt("chips-input-"),
  parentSelector: "",
  initialValues: [{ tag: "init1" }, { tag: "init2" }],
  editable: !1,
  labelText: "Example label",
  inputClasses: {},
  inputOptions: {}
}, Lb = {
  opacity: "opacity-0",
  inputWrapperPadding: "p-[5px]",
  transition: "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  contentEditable: "outline-none !border-[3px] !border-solid !border-[#b2b3b4]",
  chipsInputWrapper: "relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  chipsInput: "peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
  chipsLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200"
}, Nb = {
  opacity: "string",
  inputWrapperPadding: "string",
  transition: "string",
  contentEditable: "string",
  chipsInputWrapper: "string",
  chipsInput: "string",
  chipsLabel: "string"
};
class YC extends ui {
  constructor(e, i = {}, n) {
    super(e, i);
    Ct(this, "_handleBlurInput", ({ target: e }) => {
      e.value.length > 0 && this._handleCreateChip(e, e.value), this.allChips.length > 0 ? (e.setAttribute(ft, ""), this.input.setAttribute(xe, ""), d.findOne(
        ao,
        this.input.parentNode
      ).setAttribute(xe, ""), this.chipsInputWrapper.classList.add(
        ...this._classes.inputWrapperPadding.split(" ")
      )) : (e.removeAttribute(ft), this.input.removeAttribute(xe), d.findOne(
        ao,
        this.input.parentNode
      ).removeAttribute(xe), this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      )), this.allChips.forEach((i) => i.removeAttribute(ft));
    });
    this._element = e, this._inputInstance = null, this._element && y.setData(e, hl, this), this._options = this._getConfig(i), this._classes = this._getClasses(n), this.numberClicks = 0, this.init();
  }
  // Getters
  static get NAME() {
    return Di;
  }
  get activeChip() {
    return d.findOne(bb, this._element);
  }
  get input() {
    return d.findOne("input", this._element);
  }
  get allChips() {
    return d.find(Ho, this._element);
  }
  get chipsInputWrapper() {
    return d.findOne(vb, this._element);
  }
  // Public
  init() {
    this._setChipsClass(), this._appendInputToElement(sh), this._handleInitialValue(), this._handleInputText(), this._handleKeyboard(), this._handleChipsOnSelect(), this._handleEditable(), this._handleChipsFocus(), this._handleClicksOnChips(), this._inputInstance._getLabelWidth(), this._inputInstance._applyNotch();
  }
  dispose() {
    this._element = null, this._options = null;
  }
  // Private
  _getNotchData() {
    this._notchMiddle = d.findOne(
      wb,
      this._element
    ), this._notchLeading = d.findOne(
      yb,
      this._element
    );
  }
  _setChipsClass() {
    this._element.setAttribute(fb, "");
  }
  _handleDeleteEvents(e) {
    const [i] = this.allChips.slice(-1);
    if (this.activeChip === null)
      i.remove(), this._handleEvents(e, ul);
    else {
      const n = this.allChips.findIndex((a) => a === this.activeChip), o = this._handleActiveChipAfterRemove(n), r = [];
      if (this.activeChip === null)
        return;
      this.activeChip.remove(), this._handleEvents(e, ul), this.numberClicks = n, o.setAttribute(ft, ""), this.allChips.forEach((a) => {
        a.hasAttribute(ft) && (r.push(a), r.length > 1 && this.allChips.forEach((l) => l.remove()));
      });
    }
  }
  _handleUpEvents(e) {
    this.numberClicks += 1, this.numberClicks === this.allChips.length + 1 && (this.numberClicks = 0), this._handleRightKeyboardArrow(this.numberClicks), this._handleEvents(e, Sb), this._handleEvents(e, Ib);
  }
  _handleDownEvents(e) {
    this.numberClicks -= 1, this.numberClicks <= 0 && (this.numberClicks = this.allChips.length), this._handleLeftKeyboardArrow(this.numberClicks), this._handleEvents(e, Ob), this._handleEvents(e, xb);
  }
  _keyboardEvents(e) {
    const { target: i, keyCode: n, ctrlKey: o } = e;
    i.value.length > 0 || this.allChips.length === 0 || (n === kf || n === xf ? this._handleDeleteEvents(e) : n === Be || n === at ? this._handleUpEvents(e) : n === Pe || n === z ? this._handleDownEvents(e) : n === 65 && o && this._handleAddActiveClass());
  }
  _handleKeyboard() {
    c.on(
      this.input,
      "keydown",
      (e) => this._keyboardEvents(e)
    );
  }
  _handleEditable() {
    const { editable: e } = this._options;
    e && this.allChips.forEach((i) => {
      c.on(i, "dblclick", (n) => {
        const o = d.findOne(ro, i);
        i.classList.add(...this._classes.contentEditable.split(" ")), i.contentEditable = !0, i.focus(), setTimeout(() => {
          h.addStyle(o, { display: "none" });
        }, 200), o.classList.add(...this._classes.opacity.split(" ")), n.target.textContent, c.trigger(i, pl, {
          event: n,
          allChips: this.allChips
        });
      }), c.on(document, "click", ({ target: n }) => {
        const o = d.findOne(ro, i), r = d.findOne(Tb, i), a = n === i, l = i && i.contains(n);
        !a && !l && (i.contentEditable = !1, i.classList.remove(...this._classes.contentEditable.split(" ")), r.textContent !== "" && setTimeout(() => {
          h.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
        }, 160)), r.textContent === "" && (setTimeout(() => {
          i.classList.add(...this._classes.opacity.split(" "));
        }, 200), setTimeout(() => {
          i.remove();
        }, 300));
      });
    });
  }
  _handleRemoveActiveClass() {
    this.allChips.forEach((e) => e.removeAttribute(ft));
  }
  _handleAddActiveClass() {
    this.allChips.forEach((e) => e.setAttribute(ft, ""));
  }
  _handleRightKeyboardArrow(e) {
    this._handleRemoveActiveClass(), e === 0 && (e = 1), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleLeftKeyboardArrow(e) {
    this._handleRemoveActiveClass(), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleActiveChipAfterRemove(e) {
    const i = e === 0 ? 1 : e - 1;
    return this.allChips[i];
  }
  _handleClicksOnChips() {
    c.on(this._element, "click", () => {
      this.allChips.length === 0 && (this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      ), this.input.removeAttribute(ft));
    });
  }
  _handleTextContent() {
    const e = [];
    return this.allChips.forEach((i) => e.push({ tag: i.textContent.trim() })), e;
  }
  _handleEvents(e, i) {
    const n = this._handleTextContent(), o = this.allChips.filter(
      (r) => r.hasAttribute(ft) && r
    );
    c.trigger(this._element, i, {
      event: e,
      allChips: this.allChips,
      arrOfObjects: n,
      active: o,
      activeObj: {
        tag: o.length <= 0 ? "" : o[0].textContent.trim()
      }
    });
  }
  _handleChipsFocus() {
    c.on(this._element, "click", ({ target: { attributes: e } }) => {
      const i = [...e];
      i.includes(Bo) || i.includes(nh) || i.includes(oh) || this.input.focus();
    });
  }
  _handleInitialValue() {
    if (this._appendInputToElement(dl), this._element.hasAttribute(dl)) {
      const { initialValues: e } = this._options;
      e.forEach(
        ({ tag: i }) => this._handleCreateChip(this.input, i)
      ), d.findOne(
        ao,
        this.input.parentNode
      ).setAttribute(xe, ""), this.input.setAttribute(ft, ""), this.input.setAttribute(xe, "");
    }
    this.allChips.length > 0 && (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    ));
  }
  _handleKeysInputToElement(e) {
    const { keyCode: i, target: n } = e;
    if (n.hasAttribute(Bo)) {
      const o = d.findOne(ro, n);
      i === ct && (n.contentEditable = !1, n.classList.remove(...this._classes.contentEditable.split(" ")), n.textContent !== "" ? setTimeout(() => {
        h.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
      }, 160) : n.textContent === "" && (setTimeout(() => {
        n.classList.add(...this._classes.opacity.split(" "));
      }, 200), setTimeout(() => {
        n.remove();
      }, 300)));
      return;
    }
    if (i === ct) {
      if (n.value === "")
        return;
      this._handleCreateChip(n, n.value), this._handleRemoveActiveClass(), this.numberClicks = this.allChips.length + 1, this._handleEvents(e, kb);
    }
    this.allChips.length > 0 ? (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    )) : this.chipsInputWrapper.classList.remove(
      ...this._classes.inputWrapperPadding.split(" ")
    );
  }
  _handleInputText() {
    const e = d.findOne(
      Eb,
      this._element
    );
    c.on(
      this._element,
      "keyup",
      e,
      (i) => this._handleKeysInputToElement(i)
    ), c.on(this.input, "blur", (i) => this._handleBlurInput(i));
  }
  _appendInputToElement(e) {
    if (!this._element.hasAttribute(e))
      return;
    const i = ob(this._options, this._classes);
    this._element.insertAdjacentHTML("beforeend", i);
    const n = d.findOne(
      "[data-te-chips-input-wrapper]",
      this._element
    );
    this._inputInstance = new V(
      n,
      this._options.inputOptions,
      this._options.inputClasses
    );
  }
  _handleCreateChip(e, i) {
    const n = D("div"), o = ui.getInstance(n), r = new ui(o, { text: i }, this._classes);
    this._options.parentSelector !== "" ? document.querySelector(this._options.parentSelector).insertAdjacentHTML("beforeend", r.appendChip()) : e.insertAdjacentHTML("beforebegin", r.appendChip()), e.value = "", d.find(Ho).forEach((a) => {
      let l = ui.getInstance(a);
      return l || (l = new ui(a, {}, this._classes)), l.init();
    }), this._handleEditable();
  }
  _handleChipsOnSelect() {
    this.allChips.forEach((e) => {
      c.on(this._element, "click", (i) => {
        c.trigger(e, pl, {
          event: i,
          allChips: this.allChips
        });
      });
    });
  }
  _handleAddActiveClassWithKebyboard(e) {
    let i;
    this.allChips[e - 1] === void 0 ? i = this.allChips[e - 2] : i = this.allChips[e - 1], i.setAttribute(ft);
  }
  _getConfig(e) {
    const i = {
      ...$b,
      ...h.getDataAttributes(this._element),
      ...e
    };
    return I(Di, i, Db), i;
  }
  _getClasses(e) {
    const i = h.getDataClassAttributes(this._element);
    return e = {
      ...Lb,
      ...i,
      ...e
    }, I(Di, e, Nb), e;
  }
  static getInstance(e) {
    return y.getData(e, hl);
  }
  static getOrCreateInstance(e, i = {}) {
    return this.getInstance(e) || new this(e, typeof i == "object" ? i : null);
  }
}
const Kt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, bi = {
  line: {
    options: {
      ...Kt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...Kt,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !0,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...Kt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  doughnut: {
    options: {
      ...Kt,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  polarArea: {
    options: {
      ...Kt,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  radar: {
    options: {
      ...Kt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  scatter: {
    options: {
      ...Kt,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...Kt,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      scales: {
        x: {
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
function Mb(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Rb = function(t) {
  return Pb(t) && !Bb(t);
};
function Pb(s) {
  return !!s && typeof s == "object";
}
function Bb(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || Wb(s);
}
var Hb = typeof Symbol == "function" && Symbol.for, Vb = Hb ? Symbol.for("react.element") : 60103;
function Wb(s) {
  return s.$$typeof === Vb;
}
function Fb(s) {
  return Array.isArray(s) ? [] : {};
}
function Ri(s, t) {
  return t.clone !== !1 && t.isMergeableObject(s) ? qe(Fb(s), s, t) : s;
}
function Yb(s, t, e) {
  return s.concat(t).map(function(i) {
    return Ri(i, e);
  });
}
function jb(s, t) {
  if (!t.customMerge)
    return qe;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : qe;
}
function Kb(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return Object.propertyIsEnumerable.call(s, t);
  }) : [];
}
function _l(s) {
  return Object.keys(s).concat(Kb(s));
}
function rh(s, t) {
  try {
    return t in s;
  } catch {
    return !1;
  }
}
function zb(s, t) {
  return rh(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function Ub(s, t, e) {
  var i = {};
  return e.isMergeableObject(s) && _l(s).forEach(function(n) {
    i[n] = Ri(s[n], e);
  }), _l(t).forEach(function(n) {
    zb(s, n) || (rh(s, n) && e.isMergeableObject(t[n]) ? i[n] = jb(n, e)(s[n], t[n], e) : i[n] = Ri(t[n], e));
  }), i;
}
function qe(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || Yb, e.isMergeableObject = e.isMergeableObject || Rb, e.cloneUnlessOtherwiseSpecified = Ri;
  var i = Array.isArray(t), n = Array.isArray(s), o = i === n;
  return o ? i ? e.arrayMerge(s, t, e) : Ub(s, t, e) : Ri(t, e);
}
qe.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, n) {
    return qe(i, n, e);
  }, {});
};
var Xb = qe, Gb = Xb;
const Vo = /* @__PURE__ */ Mb(Gb), fl = "chart", Es = "te.chart", qb = "chart", lo = (s, t, e) => {
  const i = (n, o, r) => {
    const a = n.slice();
    return o.forEach((l, p) => {
      typeof a[p] > "u" ? a[p] = r.cloneUnlessOtherwiseSpecified(
        l,
        r
      ) : r.isMergeableObject(l) ? a[p] = Vo(n[p], l, r) : n.indexOf(l) === -1 && a.push(l);
    }), a;
  };
  return Vo(e[t], s, {
    arrayMerge: i
  });
}, Zb = {
  darkTicksColor: "#fff",
  darkLabelColor: "#fff",
  darkGridLinesColor: "#555",
  darkmodeOff: "undefined",
  darkMode: null,
  darkBgColor: "#262626",
  darkBgColorLight: "#fff",
  options: null
}, Qb = {
  darkTicksColor: "string",
  darkLabelColor: "string",
  darkGridLinesColor: "string",
  darkmodeOff: "(string|null)",
  darkMode: "(string|null)",
  darkBgColor: "string",
  darkBgColorLight: "string",
  options: "(object|null)"
};
class ah {
  constructor(t, e, i = {}, n = {}) {
    this._waitForCharts(t, e, i, n);
  }
  async _getChartjs() {
    const {
      Chart: t,
      ArcElement: e,
      LineElement: i,
      BarElement: n,
      PointElement: o,
      BarController: r,
      BubbleController: a,
      DoughnutController: l,
      LineController: p,
      PieController: u,
      PolarAreaController: _,
      RadarController: f,
      ScatterController: g,
      CategoryScale: m,
      LinearScale: b,
      LogarithmicScale: v,
      RadialLinearScale: E,
      TimeScale: w,
      TimeSeriesScale: C,
      Decimation: T,
      Filler: A,
      Legend: k,
      Title: S,
      Tooltip: O,
      SubTitle: x
    } = await import("./chart.es.js").then((L) => L.f);
    return t.register(
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      _,
      f,
      g,
      m,
      b,
      v,
      E,
      w,
      C,
      T,
      A,
      k,
      S,
      O,
      x
    ), t;
  }
  async _getChartDataLabels() {
    return await import("./chartjs-plugin-datalabels.es.js");
  }
  async _waitForCharts(t, e, i = {}, n = {}) {
    if (this._Chartjs = await this._getChartjs(), this._ChartDataLabels = await this._getChartDataLabels(), this._element = t, this._data = e, this._options = i, this._type = e.type, this._canvas = null, this._chart = null, this._darkOptions = this._getDarkConfig(n), this._darkModeClassContainer = document.querySelector("html"), this._prevConfig = null, this._observer = null, this._element && (y.setData(t, Es, this), h.addClass(this._element, qb), this._chartConstructor()), this._darkOptions.darkmodeOff !== null) {
      const o = this._darkOptions.darkMode === "dark" ? "dark" : this._darkOptions.darkMode === "light" ? "light" : this.systemColorMode;
      this._handleMode(o), this._observer = new MutationObserver(this._observerCallback.bind(this)), this._observer.observe(this._darkModeClassContainer, {
        attributes: !0
      });
    }
  }
  // Getters
  static get NAME() {
    return fl;
  }
  get systemColorMode() {
    return localStorage.theme || (this._darkModeClassContainer.classList.contains("dark") ? "dark" : "light");
  }
  // Public
  dispose() {
    this._observer.disconnect(), y.removeData(this._element, Es), this._element = null;
  }
  update(t, e) {
    t && (this._data = { ...this._data, ...t }, this._chart.data = this._data);
    const i = Object.prototype.hasOwnProperty.call(
      e,
      "options"
    ) ? e : { options: { ...e } };
    this._options = Vo(this._options, i), this._chart.options = lo(
      this._options,
      this._type,
      bi
    ).options, this._chart.update();
  }
  setTheme(t) {
    t !== "dark" && t !== "light" || !this._data || this._handleMode(t);
  }
  // Private
  _getDarkConfig(t) {
    let e = {};
    const i = h.getDataAttributes(this._element);
    Object.keys(i).forEach(
      (p) => p.startsWith("dark") && (e[p] = i[p])
    ), e = {
      ...Zb,
      ...e
    };
    const n = {
      y: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      },
      x: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      }
    }, o = {
      r: {
        ticks: {
          color: e.darkTicksColor,
          backdropColor: e.darkBgColor
        },
        grid: {
          color: e.darkGridLinesColor
        },
        pointLabels: {
          color: e.darkTicksColor
        }
      }
    }, l = {
      scales: ["pie", "doughnut", "polarArea", "radar"].includes(this._type) ? ["polarArea", "radar"].includes(this._type) ? o : {} : n,
      plugins: {
        legend: {
          labels: {
            color: e.darkLabelColor
          }
        }
      }
    };
    return t = {
      ...e,
      options: {
        ...l
      },
      ...t
    }, I(fl, t, Qb), t;
  }
  _chartConstructor() {
    if (this._data) {
      this._createCanvas();
      const t = lo(this._options, this._type, bi), e = [];
      t.dataLabelsPlugin && e.push(this._ChartDataLabels.default), this._prevConfig = t, this._chart = new this._Chartjs(this._canvas, {
        ...this._data,
        ...t,
        plugins: e
      });
    }
  }
  _createCanvas() {
    this._canvas || (this._element.nodeName === "CANVAS" ? this._canvas = this._element : (this._canvas = D("canvas"), this._element.appendChild(this._canvas)));
  }
  _handleMode(t) {
    t === "dark" ? (this._changeDatasetBorderColor(), this.update(null, this._darkOptions.options)) : (this._changeDatasetBorderColor(!1), this._prevConfig && this.update(null, this._prevConfig));
  }
  _observerCallback(t) {
    for (const e of t)
      e.type === "attributes" && this._handleMode(this.systemColorMode);
  }
  _changeDatasetBorderColor(t = !0) {
    [...this._data.data.datasets].forEach(
      (e) => ["pie", "doughnut", "polarArea"].includes(this._type) && (e.borderColor = t ? this._darkOptions.darkBgColor : this._darkOptions.darkBgColorLight)
    );
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = y.getData(this, Es);
      if (!(!n && /dispose/.test(t))) {
        if (!n) {
          const o = e ? lo(e, i, bi) : bi[i];
          n = new ah(this, {
            ...t,
            ...o
          });
        }
        if (typeof t == "string") {
          if (typeof n[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          n[t](e, i);
        }
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Es);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function Dt(s) {
  return getComputedStyle(s);
}
function ot(s, t) {
  for (var e in t) {
    var i = t[e];
    typeof i == "number" && (i = i + "px"), s.style[e] = i;
  }
  return s;
}
function Cs(s) {
  var t = document.createElement("div");
  return t.className = s, t;
}
var ml = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function Zt(s, t) {
  if (!ml)
    throw new Error("No element matching method supported");
  return ml.call(s, t);
}
function Me(s) {
  s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s);
}
function gl(s, t) {
  return Array.prototype.filter.call(
    s.children,
    function(e) {
      return Zt(e, t);
    }
  );
}
var j = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function(s) {
      return "ps__thumb-" + s;
    },
    rail: function(s) {
      return "ps__rail-" + s;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function(s) {
      return "ps--active-" + s;
    },
    scrolling: function(s) {
      return "ps--scrolling-" + s;
    }
  }
}, lh = { x: null, y: null };
function ch(s, t) {
  var e = s.element.classList, i = j.state.scrolling(t);
  e.contains(i) ? clearTimeout(lh[t]) : e.add(i);
}
function hh(s, t) {
  lh[t] = setTimeout(
    function() {
      return s.isAlive && s.element.classList.remove(j.state.scrolling(t));
    },
    s.settings.scrollingThreshold
  );
}
function Jb(s, t) {
  ch(s, t), hh(s, t);
}
var Yi = function(t) {
  this.element = t, this.handlers = {};
}, dh = { isEmpty: { configurable: !0 } };
Yi.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Yi.prototype.unbind = function(t, e) {
  var i = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (i.element.removeEventListener(t, n, !1), !1);
  });
};
Yi.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
dh.isEmpty.get = function() {
  var s = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return s.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(Yi.prototype, dh);
var ei = function() {
  this.eventElements = [];
};
ei.prototype.eventElement = function(t) {
  var e = this.eventElements.filter(function(i) {
    return i.element === t;
  })[0];
  return e || (e = new Yi(t), this.eventElements.push(e)), e;
};
ei.prototype.bind = function(t, e, i) {
  this.eventElement(t).bind(e, i);
};
ei.prototype.unbind = function(t, e, i) {
  var n = this.eventElement(t);
  n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
};
ei.prototype.unbindAll = function() {
  this.eventElements.forEach(function(t) {
    return t.unbindAll();
  }), this.eventElements = [];
};
ei.prototype.once = function(t, e, i) {
  var n = this.eventElement(t), o = function(r) {
    n.unbind(e, o), i(r);
  };
  n.bind(e, o);
};
function As(s) {
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(s);
  var t = document.createEvent("CustomEvent");
  return t.initCustomEvent(s, !1, !1, void 0), t;
}
function tn(s, t, e, i, n) {
  i === void 0 && (i = !0), n === void 0 && (n = !1);
  var o;
  if (t === "top")
    o = [
      "contentHeight",
      "containerHeight",
      "scrollTop",
      "y",
      "up",
      "down"
    ];
  else if (t === "left")
    o = [
      "contentWidth",
      "containerWidth",
      "scrollLeft",
      "x",
      "left",
      "right"
    ];
  else
    throw new Error("A proper axis should be provided");
  tv(s, e, o, i, n);
}
function tv(s, t, e, i, n) {
  var o = e[0], r = e[1], a = e[2], l = e[3], p = e[4], u = e[5];
  i === void 0 && (i = !0), n === void 0 && (n = !1);
  var _ = s.element;
  s.reach[l] = null, _[a] < 1 && (s.reach[l] = "start"), _[a] > s[o] - s[r] - 1 && (s.reach[l] = "end"), t && (_.dispatchEvent(As("ps-scroll-" + l)), t < 0 ? _.dispatchEvent(As("ps-scroll-" + p)) : t > 0 && _.dispatchEvent(As("ps-scroll-" + u)), i && Jb(s, l)), s.reach[l] && (t || n) && _.dispatchEvent(As("ps-" + l + "-reach-" + s.reach[l]));
}
function W(s) {
  return parseInt(s, 10) || 0;
}
function ev(s) {
  return Zt(s, "input,[contenteditable]") || Zt(s, "select,[contenteditable]") || Zt(s, "textarea,[contenteditable]") || Zt(s, "button,[contenteditable]");
}
function iv(s) {
  var t = Dt(s);
  return W(t.width) + W(t.paddingLeft) + W(t.paddingRight) + W(t.borderLeftWidth) + W(t.borderRightWidth);
}
var $e = {
  isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
};
function Bt(s) {
  var t = s.element, e = Math.floor(t.scrollTop), i = t.getBoundingClientRect();
  s.containerWidth = Math.round(i.width), s.containerHeight = Math.round(i.height), s.contentWidth = t.scrollWidth, s.contentHeight = t.scrollHeight, t.contains(s.scrollbarXRail) || (gl(t, j.element.rail("x")).forEach(
    function(n) {
      return Me(n);
    }
  ), t.appendChild(s.scrollbarXRail)), t.contains(s.scrollbarYRail) || (gl(t, j.element.rail("y")).forEach(
    function(n) {
      return Me(n);
    }
  ), t.appendChild(s.scrollbarYRail)), !s.settings.suppressScrollX && s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth ? (s.scrollbarXActive = !0, s.railXWidth = s.containerWidth - s.railXMarginWidth, s.railXRatio = s.containerWidth / s.railXWidth, s.scrollbarXWidth = bl(
    s,
    W(s.railXWidth * s.containerWidth / s.contentWidth)
  ), s.scrollbarXLeft = W(
    (s.negativeScrollAdjustment + t.scrollLeft) * (s.railXWidth - s.scrollbarXWidth) / (s.contentWidth - s.containerWidth)
  )) : s.scrollbarXActive = !1, !s.settings.suppressScrollY && s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight ? (s.scrollbarYActive = !0, s.railYHeight = s.containerHeight - s.railYMarginHeight, s.railYRatio = s.containerHeight / s.railYHeight, s.scrollbarYHeight = bl(
    s,
    W(s.railYHeight * s.containerHeight / s.contentHeight)
  ), s.scrollbarYTop = W(
    e * (s.railYHeight - s.scrollbarYHeight) / (s.contentHeight - s.containerHeight)
  )) : s.scrollbarYActive = !1, s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth && (s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth), s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight && (s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight), sv(t, s), s.scrollbarXActive ? t.classList.add(j.state.active("x")) : (t.classList.remove(j.state.active("x")), s.scrollbarXWidth = 0, s.scrollbarXLeft = 0, t.scrollLeft = s.isRtl === !0 ? s.contentWidth : 0), s.scrollbarYActive ? t.classList.add(j.state.active("y")) : (t.classList.remove(j.state.active("y")), s.scrollbarYHeight = 0, s.scrollbarYTop = 0, t.scrollTop = 0);
}
function bl(s, t) {
  return s.settings.minScrollbarLength && (t = Math.max(t, s.settings.minScrollbarLength)), s.settings.maxScrollbarLength && (t = Math.min(t, s.settings.maxScrollbarLength)), t;
}
function sv(s, t) {
  var e = { width: t.railXWidth }, i = Math.floor(s.scrollTop);
  t.isRtl ? e.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth - t.contentWidth : e.left = s.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - i : e.top = t.scrollbarXTop + i, ot(t.scrollbarXRail, e);
  var n = { top: i, height: t.railYHeight };
  t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + s.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - s.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + s.scrollLeft, ot(t.scrollbarYRail, n), ot(t.scrollbarX, {
    left: t.scrollbarXLeft,
    width: t.scrollbarXWidth - t.railBorderXWidth
  }), ot(t.scrollbarY, {
    top: t.scrollbarYTop,
    height: t.scrollbarYHeight - t.railBorderYWidth
  });
}
function nv(s) {
  s.element, s.event.bind(s.scrollbarY, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarYRail, "mousedown", function(t) {
    var e = t.pageY - window.pageYOffset - s.scrollbarYRail.getBoundingClientRect().top, i = e > s.scrollbarYTop ? 1 : -1;
    s.element.scrollTop += i * s.containerHeight, Bt(s), t.stopPropagation();
  }), s.event.bind(s.scrollbarX, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarXRail, "mousedown", function(t) {
    var e = t.pageX - window.pageXOffset - s.scrollbarXRail.getBoundingClientRect().left, i = e > s.scrollbarXLeft ? 1 : -1;
    s.element.scrollLeft += i * s.containerWidth, Bt(s), t.stopPropagation();
  });
}
function ov(s) {
  vl(s, [
    "containerWidth",
    "contentWidth",
    "pageX",
    "railXWidth",
    "scrollbarX",
    "scrollbarXWidth",
    "scrollLeft",
    "x",
    "scrollbarXRail"
  ]), vl(s, [
    "containerHeight",
    "contentHeight",
    "pageY",
    "railYHeight",
    "scrollbarY",
    "scrollbarYHeight",
    "scrollTop",
    "y",
    "scrollbarYRail"
  ]);
}
function vl(s, t) {
  var e = t[0], i = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], p = t[7], u = t[8], _ = s.element, f = null, g = null, m = null;
  function b(w) {
    w.touches && w.touches[0] && (w[n] = w.touches[0].pageY), _[l] = f + m * (w[n] - g), ch(s, p), Bt(s), w.stopPropagation(), w.type.startsWith("touch") && w.changedTouches.length > 1 && w.preventDefault();
  }
  function v() {
    hh(s, p), s[u].classList.remove(j.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", b);
  }
  function E(w, C) {
    f = _[l], C && w.touches && (w[n] = w.touches[0].pageY), g = w[n], m = (s[i] - s[e]) / (s[o] - s[a]), C ? s.event.bind(s.ownerDocument, "touchmove", b) : (s.event.bind(s.ownerDocument, "mousemove", b), s.event.once(s.ownerDocument, "mouseup", v), w.preventDefault()), s[u].classList.add(j.state.clicking), w.stopPropagation();
  }
  s.event.bind(s[r], "mousedown", function(w) {
    E(w);
  }), s.event.bind(s[r], "touchstart", function(w) {
    E(w, !0);
  });
}
function rv(s) {
  var t = s.element, e = function() {
    return Zt(t, ":hover");
  }, i = function() {
    return Zt(s.scrollbarX, ":focus") || Zt(s.scrollbarY, ":focus");
  };
  function n(o, r) {
    var a = Math.floor(t.scrollTop);
    if (o === 0) {
      if (!s.scrollbarYActive)
        return !1;
      if (a === 0 && r > 0 || a >= s.contentHeight - s.containerHeight && r < 0)
        return !s.settings.wheelPropagation;
    }
    var l = t.scrollLeft;
    if (r === 0) {
      if (!s.scrollbarXActive)
        return !1;
      if (l === 0 && o < 0 || l >= s.contentWidth - s.containerWidth && o > 0)
        return !s.settings.wheelPropagation;
    }
    return !0;
  }
  s.event.bind(s.ownerDocument, "keydown", function(o) {
    if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !i())) {
      var r = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
      if (r) {
        if (r.tagName === "IFRAME")
          r = r.contentDocument.activeElement;
        else
          for (; r.shadowRoot; )
            r = r.shadowRoot.activeElement;
        if (ev(r))
          return;
      }
      var a = 0, l = 0;
      switch (o.which) {
        case 37:
          o.metaKey ? a = -s.contentWidth : o.altKey ? a = -s.containerWidth : a = -30;
          break;
        case 38:
          o.metaKey ? l = s.contentHeight : o.altKey ? l = s.containerHeight : l = 30;
          break;
        case 39:
          o.metaKey ? a = s.contentWidth : o.altKey ? a = s.containerWidth : a = 30;
          break;
        case 40:
          o.metaKey ? l = -s.contentHeight : o.altKey ? l = -s.containerHeight : l = -30;
          break;
        case 32:
          o.shiftKey ? l = s.containerHeight : l = -s.containerHeight;
          break;
        case 33:
          l = s.containerHeight;
          break;
        case 34:
          l = -s.containerHeight;
          break;
        case 36:
          l = s.contentHeight;
          break;
        case 35:
          l = -s.contentHeight;
          break;
        default:
          return;
      }
      s.settings.suppressScrollX && a !== 0 || s.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Bt(s), n(a, l) && o.preventDefault());
    }
  });
}
function av(s) {
  var t = s.element;
  function e(r, a) {
    var l = Math.floor(t.scrollTop), p = t.scrollTop === 0, u = l + t.offsetHeight === t.scrollHeight, _ = t.scrollLeft === 0, f = t.scrollLeft + t.offsetWidth === t.scrollWidth, g;
    return Math.abs(a) > Math.abs(r) ? g = p || u : g = _ || f, g ? !s.settings.wheelPropagation : !0;
  }
  function i(r) {
    var a = r.deltaX, l = -1 * r.deltaY;
    return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [-l, -a] : [a, l];
  }
  function n(r, a, l) {
    if (!$e.isWebKit && t.querySelector("select:focus"))
      return !0;
    if (!t.contains(r))
      return !1;
    for (var p = r; p && p !== t; ) {
      if (p.classList.contains(j.element.consuming))
        return !0;
      var u = Dt(p);
      if (l && u.overflowY.match(/(scroll|auto)/)) {
        var _ = p.scrollHeight - p.clientHeight;
        if (_ > 0 && (p.scrollTop > 0 && l < 0 || p.scrollTop < _ && l > 0))
          return !0;
      }
      if (a && u.overflowX.match(/(scroll|auto)/)) {
        var f = p.scrollWidth - p.clientWidth;
        if (f > 0 && (p.scrollLeft > 0 && a < 0 || p.scrollLeft < f && a > 0))
          return !0;
      }
      p = p.parentNode;
    }
    return !1;
  }
  function o(r) {
    var a = i(r), l = a[0], p = a[1];
    if (!n(r.target, l, p)) {
      var u = !1;
      s.settings.useBothWheelAxes ? s.scrollbarYActive && !s.scrollbarXActive ? (p ? t.scrollTop -= p * s.settings.wheelSpeed : t.scrollTop += l * s.settings.wheelSpeed, u = !0) : s.scrollbarXActive && !s.scrollbarYActive && (l ? t.scrollLeft += l * s.settings.wheelSpeed : t.scrollLeft -= p * s.settings.wheelSpeed, u = !0) : (t.scrollTop -= p * s.settings.wheelSpeed, t.scrollLeft += l * s.settings.wheelSpeed), Bt(s), u = u || e(l, p), u && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
    }
  }
  typeof window.onwheel < "u" ? s.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && s.event.bind(t, "mousewheel", o);
}
function lv(s) {
  if (!$e.supportsTouch && !$e.supportsIePointer)
    return;
  var t = s.element;
  function e(m, b) {
    var v = Math.floor(t.scrollTop), E = t.scrollLeft, w = Math.abs(m), C = Math.abs(b);
    if (C > w) {
      if (b < 0 && v === s.contentHeight - s.containerHeight || b > 0 && v === 0)
        return window.scrollY === 0 && b > 0 && $e.isChrome;
    } else if (w > C && (m < 0 && E === s.contentWidth - s.containerWidth || m > 0 && E === 0))
      return !0;
    return !0;
  }
  function i(m, b) {
    t.scrollTop -= b, t.scrollLeft -= m, Bt(s);
  }
  var n = {}, o = 0, r = {}, a = null;
  function l(m) {
    return m.targetTouches ? m.targetTouches[0] : m;
  }
  function p(m) {
    return m.pointerType && m.pointerType === "pen" && m.buttons === 0 ? !1 : !!(m.targetTouches && m.targetTouches.length === 1 || m.pointerType && m.pointerType !== "mouse" && m.pointerType !== m.MSPOINTER_TYPE_MOUSE);
  }
  function u(m) {
    if (p(m)) {
      var b = l(m);
      n.pageX = b.pageX, n.pageY = b.pageY, o = (/* @__PURE__ */ new Date()).getTime(), a !== null && clearInterval(a);
    }
  }
  function _(m, b, v) {
    if (!t.contains(m))
      return !1;
    for (var E = m; E && E !== t; ) {
      if (E.classList.contains(j.element.consuming))
        return !0;
      var w = Dt(E);
      if (v && w.overflowY.match(/(scroll|auto)/)) {
        var C = E.scrollHeight - E.clientHeight;
        if (C > 0 && (E.scrollTop > 0 && v < 0 || E.scrollTop < C && v > 0))
          return !0;
      }
      if (b && w.overflowX.match(/(scroll|auto)/)) {
        var T = E.scrollWidth - E.clientWidth;
        if (T > 0 && (E.scrollLeft > 0 && b < 0 || E.scrollLeft < T && b > 0))
          return !0;
      }
      E = E.parentNode;
    }
    return !1;
  }
  function f(m) {
    if (p(m)) {
      var b = l(m), v = { pageX: b.pageX, pageY: b.pageY }, E = v.pageX - n.pageX, w = v.pageY - n.pageY;
      if (_(m.target, E, w))
        return;
      i(E, w), n = v;
      var C = (/* @__PURE__ */ new Date()).getTime(), T = C - o;
      T > 0 && (r.x = E / T, r.y = w / T, o = C), e(E, w) && m.preventDefault();
    }
  }
  function g() {
    s.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
      if (s.isInitialized) {
        clearInterval(a);
        return;
      }
      if (!r.x && !r.y) {
        clearInterval(a);
        return;
      }
      if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
        clearInterval(a);
        return;
      }
      if (!s.element) {
        clearInterval(a);
        return;
      }
      i(r.x * 30, r.y * 30), r.x *= 0.8, r.y *= 0.8;
    }, 10));
  }
  $e.supportsTouch ? (s.event.bind(t, "touchstart", u), s.event.bind(t, "touchmove", f), s.event.bind(t, "touchend", g)) : $e.supportsIePointer && (window.PointerEvent ? (s.event.bind(t, "pointerdown", u), s.event.bind(t, "pointermove", f), s.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (s.event.bind(t, "MSPointerDown", u), s.event.bind(t, "MSPointerMove", f), s.event.bind(t, "MSPointerUp", g)));
}
var cv = function() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: !1,
    suppressScrollY: !1,
    swipeEasing: !0,
    useBothWheelAxes: !1,
    wheelPropagation: !0,
    wheelSpeed: 1
  };
}, hv = {
  "click-rail": nv,
  "drag-thumb": ov,
  keyboard: rv,
  wheel: av,
  touch: lv
}, ji = function(t, e) {
  var i = this;
  if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName)
    throw new Error("no element is specified to initialize PerfectScrollbar");
  this.element = t, t.classList.add(j.main), this.settings = cv();
  for (var n in e)
    this.settings[n] = e[n];
  this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
  var o = function() {
    return t.classList.add(j.state.focus);
  }, r = function() {
    return t.classList.remove(j.state.focus);
  };
  this.isRtl = Dt(t).direction === "rtl", this.isRtl === !0 && t.classList.add(j.rtl), this.isNegativeScroll = function() {
    var p = t.scrollLeft, u = null;
    return t.scrollLeft = -1, u = t.scrollLeft < 0, t.scrollLeft = p, u;
  }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new ei(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Cs(j.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Cs(j.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
  var a = Dt(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = W(a.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = W(a.borderLeftWidth) + W(a.borderRightWidth), ot(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = W(a.marginLeft) + W(a.marginRight), ot(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Cs(j.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Cs(j.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
  var l = Dt(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = W(l.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? iv(this.scrollbarY) : null, this.railBorderYWidth = W(l.borderTopWidth) + W(l.borderBottomWidth), ot(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = W(l.marginTop) + W(l.marginBottom), ot(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = {
    x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  }, this.isAlive = !0, this.settings.handlers.forEach(function(p) {
    return hv[p](i);
  }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(p) {
    return i.onScroll(p);
  }), Bt(this);
};
ji.prototype.update = function() {
  this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, ot(this.scrollbarXRail, { display: "block" }), ot(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = W(Dt(this.scrollbarXRail).marginLeft) + W(Dt(this.scrollbarXRail).marginRight), this.railYMarginHeight = W(Dt(this.scrollbarYRail).marginTop) + W(Dt(this.scrollbarYRail).marginBottom), ot(this.scrollbarXRail, { display: "none" }), ot(this.scrollbarYRail, { display: "none" }), Bt(this), tn(this, "top", 0, !1, !0), tn(this, "left", 0, !1, !0), ot(this.scrollbarXRail, { display: "" }), ot(this.scrollbarYRail, { display: "" }));
};
ji.prototype.onScroll = function(t) {
  this.isAlive && (Bt(this), tn(this, "top", this.element.scrollTop - this.lastScrollTop), tn(
    this,
    "left",
    this.element.scrollLeft - this.lastScrollLeft
  ), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
};
ji.prototype.destroy = function() {
  this.isAlive && (this.event.unbindAll(), Me(this.scrollbarX), Me(this.scrollbarY), Me(this.scrollbarXRail), Me(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
};
ji.prototype.removePsClasses = function() {
  this.element.className = this.element.className.split(" ").filter(function(t) {
    return !t.match(/^ps([-_].+|)$/);
  }).join(" ");
};
const co = "perfectScrollbar", dv = "perfect-scrollbar", ys = "te.perfectScrollbar", kt = "te", xt = "ps", ho = [
  { te: `scrollX.${kt}.${xt}`, ps: "ps-scroll-x" },
  { te: `scrollY.${kt}.${xt}`, ps: "ps-scroll-y" },
  { te: `scrollUp.${kt}.${xt}`, ps: "ps-scroll-up" },
  { te: `scrollDown.${kt}.${xt}`, ps: "ps-scroll-down" },
  { te: `scrollLeft.${kt}.${xt}`, ps: "ps-scroll-left" },
  { te: `scrollRight.${kt}.${xt}`, ps: "ps-scroll-right" },
  { te: `scrollXEnd.${kt}.${xt}`, ps: "ps-x-reach-end" },
  { te: `scrollYEnd.${kt}.${xt}`, ps: "ps-y-reach-end" },
  { te: `scrollXStart.${kt}.${xt}`, ps: "ps-x-reach-start" },
  { te: `scrollYStart.${kt}.${xt}`, ps: "ps-y-reach-start" }
], uv = {
  handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 1,
  wheelPropagation: !0,
  swipeEasing: !0,
  minScrollbarLength: null,
  maxScrollbarLength: null,
  scrollingThreshold: 1e3,
  useBothWheelAxes: !1,
  suppressScrollX: !1,
  suppressScrollY: !1,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  positionRight: !0
}, pv = {
  handlers: "(string|array)",
  wheelSpeed: "number",
  wheelPropagation: "boolean",
  swipeEasing: "boolean",
  minScrollbarLength: "(number|null)",
  maxScrollbarLength: "(number|null)",
  scrollingThreshold: "number",
  useBothWheelAxes: "boolean",
  suppressScrollX: "boolean",
  suppressScrollY: "boolean",
  scrollXMarginOffset: "number",
  scrollYMarginOffset: "number",
  positionRight: "boolean"
}, _v = {
  ps: "group/ps overflow-hidden [overflow-anchor:none] touch-none",
  railX: "group/x absolute bottom-0 h-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-x]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railXColors: "group-[&.ps--active-x]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railXThumb: "absolute bottom-0.5 rounded-md h-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:h-[11px] group-focus/x:h-[0.6875rem] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none",
  railXThumbColors: "bg-[#aaa] group-hover/x:bg-[#999] group-focus/x:bg-[#999]",
  railY: "group/y absolute right-0 w-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-y]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railYColors: "group-[&.ps--active-y]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railYThumb: "absolute right-0.5 rounded-md w-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_width_.2s_ease-in-out,_opacity] group-hover/y:w-[11px] group-focus/y:w-[0.6875rem] group-[&.ps--clicking]/y:w-[11px] outline-none",
  railYThumbColors: "bg-[#aaa] group-hover/y:bg-[#999] group-focus/y:bg-[#999] group-[&.ps--clicking]/y:bg-[#999]"
}, fv = {
  ps: "string",
  railX: "string",
  railXColors: "string",
  railXThumb: "string",
  railXThumbColors: "string",
  railY: "string",
  railYColors: "string",
  railYThumb: "string",
  railYThumbColors: "string"
};
class ur {
  constructor(t, e = {}, i = {}) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this.perfectScrollbar = null, this._observer = null, this._psClasses = [
      {
        ps: "ps__rail-x",
        te: this._classes.railX,
        teColor: this._classes.railXColors
      },
      {
        ps: "ps__rail-y",
        te: this._classes.railY,
        teColor: this._classes.railYColors
      },
      {
        ps: "ps__thumb-x",
        te: this._classes.railXThumb,
        teColor: this._classes.railXThumbColors
      },
      {
        ps: "ps__thumb-y",
        te: this._classes.railYThumb,
        teColor: this._classes.railYThumbColors
      }
    ], this._element && (y.setData(t, ys, this), h.addClass(this._element, dv)), this.init();
  }
  // Getters
  static get NAME() {
    return co;
  }
  get railX() {
    return d.findOne(".ps__rail-x", this._element);
  }
  get railY() {
    return d.findOne(".ps__rail-y", this._element);
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return e.handlers !== void 0 && (e.handlers = e.handlers.split(" ")), t = {
      ...uv,
      ...e,
      ...t
    }, I(co, t, pv), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ..._v,
      ...e,
      ...t
    }, I(co, t, fv), t;
  }
  // Public
  dispose() {
    this._options.positionRight && this._observer.disconnect(), y.removeData(this._element, ys), this._element = null, this._dataAttrOptions = null, this._options = null, this.perfectScrollbar.destroy(), this.removeEvent(ho), this.perfectScrollbar = null;
  }
  init() {
    if (this.perfectScrollbar = new ji(this._element, this._options), this._addPerfectScrollbarStyles(), this._updateScrollPosition(), this.perfectScrollbar.update(), this._initEvents(ho), this._options.positionRight) {
      this._observer = new ResizeObserver(() => {
        setTimeout(() => {
          this._updateScrollPosition();
        }, 100);
      });
      const t = {
        attributes: !0,
        attributeFilter: ["class", "className"]
      };
      this._observer.observe(this._element, t);
    }
  }
  _updateScrollPosition() {
    const t = getComputedStyle(this._element).getPropertyValue("height"), e = getComputedStyle(this._element).getPropertyValue("width");
    this.railX && (this.railX.style.transform = `translateY(calc(-100% + ${this._canTransform(t) ? t : "0px"}))`), this.railY && (this.railY.style.transform = `translateX(calc(-100% + ${this._canTransform(e) ? e : "0px"}))`);
  }
  _canTransform(t) {
    return t && t.includes("px");
  }
  update() {
    return this.perfectScrollbar.update();
  }
  _initEvents(t = []) {
    t.forEach(
      ({ ps: e, te: i }) => c.on(
        this._element,
        e,
        (n) => c.trigger(this._element, i, { e: n })
      )
    );
  }
  _addPerfectScrollbarStyles() {
    this._psClasses.forEach((t) => {
      const e = d.findOne(`.${t.ps}`, this._element);
      h.addClass(e, t.te), h.addClass(e, t.teColor);
    }), h.addClass(this._element, this._classes.ps), h.removeClass(this._element, "ps");
  }
  removeEvent(t) {
    let e = [];
    typeof t == "string" && (e = ho.filter(({ te: i }) => i === t)), e.forEach(({ ps: i, te: n }) => {
      c.off(this._element, i), c.off(this._element, n);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, ys);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose|hide/.test(t)) && (e || (e = new ur(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, ys);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const uh = ur, mv = "data-te-datatable-select-ref", gv = "data-te-datatable-pagination-nav-ref", bv = "data-te-datatable-pagination-right-ref", vv = "data-te-datatable-pagination-left-ref", Tv = "data-te-datatable-pagination-start-ref", Ev = "data-te-datatable-pagination-end-ref", Cv = ({
  text: s,
  entries: t,
  entriesOptions: e,
  fullPagination: i,
  rowsText: n,
  allText: o,
  paginationStartIconTemplate: r,
  paginationLeftIconTemplate: a,
  paginationRightIconTemplate: l,
  paginationEndIconTemplate: p,
  classes: u
}, _, f) => {
  const g = e.map((m) => m === "All" ? `<option value="${m}" ${m === t ? "selected" : ""}>${o}</option>` : `<option value="${m}" ${m === t ? "selected" : ""}>${m}</option>`).join(`
`);
  return `
<div class="${u.pagination} ${f ? `${u.paginationBordered}` : ""} ${u.borderColor} ${u.color}">
  <div class="${u.selectItemsWrapper}">  
    <p class="${u.paginationRowsText} ${_ ? `${u.loadingPaginationRowsText}` : ""}">${n}</p>
    <div class="${u.selectWrapper} ${_ ? `${u.loadingPaginationSelectWrapper}` : ""}">
      <select name="entries"
        ${_ ? "disabled" : ""} class="select" ${mv}>
        ${g}
      </select>
    </div>
  </div>
  <div class="${u.paginationNav} ${_ ? `${u.loadingPaginationNav}` : ""}" ${gv}>
  ${s}
  </div>
  <div class="${u.paginationButtonsWrapper}">
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationStartButton}" ${Tv}>
           ${r}
          </button>` : ""}
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationLeftButton}" ${vv}>
      ${a}
  </button>
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationRightButton}" ${bv}>
      ${l}
  </button>
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationEndButton}" ${Ev}>
           ${p}
          </button>` : ""}
  </div>
</div>
`;
}, Av = "data-te-datatable-sort-icon-ref", yv = "data-te-datatable-header-checkbox-ref", wv = (s, t, e, i, n, o, r, a) => {
  const l = e ? `
  <th scope="col">
    <div class="${a.checkboxHeaderWrapper}">
      <input
        class="${a.checkboxHeader}"
        type="checkbox"
        value=""
        ${yv}
        />
    </div>
  </th>
  ` : '<th scope="col"></th>', p = s.map((u, _) => {
    const f = u.fixed ? s.filter((g, m) => g.fixed === u.fixed && m < _).reduce((g, m) => g + m.width, 0) : null;
    return `<th class="${a.column} ${i ? `${a.tableBordered}` : ""} ${a.borderColor} ${n ? `${a.sm}` : ""} ${u.fixed ? `${a.fixedHeader} ${a.color}` : ""} ${o ? `${a.loadingColumn}` : ""}" style="${u.fixed ? `${u.fixed === "right" ? "right" : "left"}: ${f}px;` : ""}" scope="col">${u.sort ? `<div class="${a.sortIconWrapper}"><span class="${a.sortIcon} ${o ? "invisible" : ""}" data-te-sort="${u.field}" ${Av}>${r}</span>` : ""} <span class="${u.sort ? "" : "pl-[18px]"}">${u.label}</span></div></th>`;
  });
  return [t ? l : "", ...p].join(`
`);
}, kv = "data-te-datatable-row-ref", xv = "data-te-datatable-row-checkbox-ref", Ov = "data-te-datatable-cell-ref", Sv = ({
  rows: s,
  columns: t,
  noFoundMessage: e,
  edit: i,
  selectable: n,
  loading: o,
  bordered: r,
  borderless: a,
  striped: l,
  hover: p,
  sm: u,
  classes: _
}) => {
  const f = s.map((g) => {
    const m = `
      <td data-te-field="checkbox" class="${r ? `${_.tableBordered} ${_.borderColor}` : ""}">
        <div class="${_.checkboxRowWrapper}">
          <input
            class="${_.checkboxRow}"
            type="checkbox"
            value=""
            data-te-row-index="${g.rowIndex}"  ${xv}/>
        </div>
      </td>`, b = t.map((v, E) => {
      const w = {};
      if (v.width && (w["min-width"] = `${v.width - 1}px`, w["max-width"] = `${v.width}px`, w.width = `${v.width}px`), v.fixed) {
        const T = t.filter((A, k) => A.fixed === v.fixed && k < E).reduce((A, k) => A + k.width, 0);
        w[v.fixed === "right" ? "right" : "left"] = `${T}px`;
      }
      return `<td style="${Object.keys(w).map((T) => `${T}: ${w[T]}`).join("; ")}" class="${_.rowItem} ${_.borderColor} ${i ? `${_.edit}` : ""} ${r ? `${_.tableBordered}` : ""} ${u ? `${_.sm}` : ""} ${v.fixed ? `${_.fixedHeader} ${_.color}` : ""}" ${Ov} data-te-field="${v.field}" ${i && 'contenteditable="true"'}>${g[v.field]}</td>`;
    }).join("");
    return `<tr scope="row" class="${_.row} ${_.borderColor} ${_.rowAnimation} ${l ? `${_.striped}` : ""} ${a ? `${_.borderless}` : ""} ${p ? `${_.hoverRow}` : ""}" data-te-index="${g.rowIndex}" ${kv}>${n ? m : ""}${b}</tr>`;
  });
  return s.length > 0 || o ? f.join(`
`) : `<tr class="${_.noFoundMessageWrapper} ${_.borderColor}"><td class="${_.noFoundMessage}">${e}</td></tr>`;
}, Iv = "data-te-datatable-inner-ref", Dv = "data-te-datatable-header-ref", Tl = ({
  columns: s,
  rows: t,
  noFoundMessage: e,
  edit: i,
  multi: n,
  selectable: o,
  loading: r,
  loadingMessage: a,
  pagination: l,
  bordered: p,
  borderless: u,
  striped: _,
  hover: f,
  fixedHeader: g,
  sm: m,
  sortIconTemplate: b,
  classes: v
}) => {
  const E = Sv({
    rows: t,
    columns: s,
    noFoundMessage: e,
    edit: i,
    loading: r,
    selectable: o,
    bordered: p,
    borderless: u,
    striped: _,
    hover: f,
    sm: m,
    classes: v
  }), w = wv(
    s,
    o,
    n,
    p,
    m,
    r,
    b,
    v
  );
  return { table: `
<div class="${v.color}" ${Iv}>
  <table class="${v.table}">
    <thead class="${v.tableHeader} ${p ? `${v.tableBordered}` : ""} ${u ? `${v.borderless}` : ""} ${v.borderColor}" ${Dv}>
      <tr>
        ${w}
      </tr>
    </thead>
    <tbody class="${g ? `${v.fixedHeaderBody}` : ""}">
      ${r ? "" : E}
    </tbody>
  </table>
</div>
${r ? `
  <div class="${v.loadingItemsWrapper}">
    <div class="${v.loadingProgressBarWrapper}">
      <div class="${v.loadingProgressBar}"></div>
    </div>
  </div>
<p class="${v.loadingMessage}">${a}</p>
` : ""}
${l.enable ? Cv(l, r, p) : ""}
  `, rows: E, column: w };
}, $v = ({ rows: s, field: t, order: e }) => s.sort((n, o) => {
  let r = n[t], a = o[t];
  return typeof r == "string" && (r = r.toLowerCase()), typeof a == "string" && (a = a.toLowerCase()), r < a ? e === "desc" ? 1 : -1 : r > a ? e === "desc" ? -1 : 1 : 0;
}), Lv = (s, t, e) => {
  if (!t)
    return s;
  const i = (n) => {
    const o = document.createElement("div");
    return o.innerHTML = n, n = o.textContent || o.innerText || "", n.toString().toLowerCase().match(t.toLowerCase());
  };
  return s.filter((n) => {
    if (e && typeof e == "string")
      return i(n[e]);
    let o = Object.values(n);
    return e && Array.isArray(e) && (o = Object.keys(n).filter((r) => e.includes(r)).map((r) => n[r])), o.filter((r) => i(r)).length > 0;
  });
}, El = ({ rows: s, entries: t, activePage: e }) => {
  const i = e * t;
  return s.slice(i, i + Number(t));
}, $i = "datatable", _t = `data-te-${$i}`, vi = `te.${$i}`, dn = `.${vi}`, Nv = `[${_t}-inner-ref]`, uo = `[${_t}-cell-ref]`, Mv = `[${_t}-header-ref]`, Rv = `[${_t}-header-checkbox-ref]`, Pv = `[${_t}-pagination-right-ref]`, Bv = `[${_t}-pagination-left-ref]`, Hv = `[${_t}-pagination-start-ref]`, Vv = `[${_t}-pagination-end-ref]`, Wv = `[${_t}-pagination-nav-ref]`, Fv = `[${_t}-select-ref]`, po = `[${_t}-sort-icon-ref]`, pi = `[${_t}-row-ref]`, _o = `[${_t}-row-checkbox-ref]`, Yv = `selectRows${dn}`, Cl = `render${dn}`, jv = `rowClick${dn}`, Kv = `update${dn}`, zv = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>`, Uv = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>`, Xv = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>`, Gv = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`, qv = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
</svg>`, Zv = "border-neutral-200 dark:border-neutral-500", Qv = "border-none", Jv = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400", tT = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center", eT = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400", iT = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center", sT = "bg-white dark:bg-neutral-800", nT = "py-4 pl-1 text-clip overflow-hidden text-[#212529] dark:text-white", oT = "focus:outline-none", rT = "sticky top-0 z-30", aT = "sticky z-10 bg-inherit", lT = "hover:bg-neutral-100 dark:hover:bg-neutral-700", cT = "pointer-events-none cursor-none text-neutral-400 dark:text-neutral-300", hT = "h-[2px] relative w-full overflow-hidden", dT = "text-center text-neutral-500 font-ligh text-sm my-4 dark:text-neutral-400", uT = "text-neutral-500 dark:text-neutral-300", pT = "text-neutral-500 dark:text-neutral-300", _T = "pointer-events-none cursor-none", fT = "h-full w-[45%] bg-primary-400 dark:bg-primary-600", mT = "h-full animate-[progress_3s_ease-in-out_infinite]", gT = "pl-2 py-3 font-light text-sm dark:text-neutral-300", bT = "border-b", vT = "flex md:flex-row justify-end items-center py-2 space-x-4 text-sm flex-col leading-[1.6]", TT = "border border-t-0", ET = "order-1 my-3 md:order-none md:my-0 md:pr-1", CT = "inline-block rounded p-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", AT = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", yT = "font-normal order-2 mb-3 md:order-none md:mb-0", wT = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", kT = "font-light", xT = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", OT = "border-b", ST = "transition ease-in-out duration-300 motion-reduce:transition-none", IT = "whitespace-nowrap text-clip overflow-hidden px-[1.4rem] py-4", DT = "relative", $T = "!bg-neutral-100 dark:!bg-neutral-600", LT = "flex items-center space-x-4 order-3 md:order-none", NT = "w-[70px]", MT = "!py-2", RT = "w-[15px] h-[10px] origin-bottom font-black mr-1 opacity-0 text-neutral-500 group-hover:opacity-100 transition hover:ease-in-out transform ease-linear duration-300 motion-reduce:transition-none dark:text-neutral-400", PT = "flex flex-row group", BT = "[&:nth-child(odd)]:bg-neutral-50 [&:nth-child(odd)]:dark:bg-neutral-700", HT = "border", VT = "border-b font-normal px-[1.4rem]", WT = "text-left text-sm font-light w-full leading-[1.6]", FT = {
  bordered: "boolean",
  borderless: "boolean",
  clickableRows: "boolean",
  defaultValue: "string",
  edit: "boolean",
  entries: "(number|string)",
  entriesOptions: "array",
  fullPagination: "boolean",
  hover: "boolean",
  loading: "boolean",
  loadingMessage: "string",
  maxWidth: "(null|number|string)",
  maxHeight: "(null|number|string)",
  multi: "boolean",
  noFoundMessage: "string",
  pagination: "boolean",
  selectable: "boolean",
  sm: "boolean",
  sortField: "(null|string)",
  sortOrder: "string",
  fixedHeader: "boolean",
  striped: "boolean",
  rowsText: "string",
  ofText: "string",
  allText: "string",
  forceSort: "boolean",
  sortIconTemplate: "string",
  paginationStartIconTemplate: "string",
  paginationEndIconTemplate: "string",
  paginationLeftIconTemplate: "string",
  paginationRightIconTemplate: "string"
}, YT = {
  bordered: !1,
  borderless: !1,
  clickableRows: !1,
  defaultValue: "-",
  edit: !1,
  entries: 10,
  entriesOptions: [10, 25, 50, 200],
  fixedHeader: !1,
  fullPagination: !1,
  hover: !1,
  loading: !1,
  loadingMessage: "Loading results...",
  maxWidth: null,
  maxHeight: null,
  multi: !1,
  noFoundMessage: "No matching results found",
  pagination: !0,
  selectable: !1,
  sm: !1,
  sortField: null,
  sortOrder: "asc",
  striped: !1,
  rowsText: "Rows per page:",
  ofText: "of",
  allText: "All",
  forceSort: !1,
  sortIconTemplate: zv,
  paginationStartIconTemplate: Uv,
  paginationEndIconTemplate: qv,
  paginationLeftIconTemplate: Xv,
  paginationRightIconTemplate: Gv
}, jT = {
  label: "string",
  field: "string",
  fixed: "(boolean|string)",
  format: "(function|null)",
  width: "(number|null)",
  sort: "boolean",
  columnIndex: "number"
}, KT = {
  label: "",
  field: "",
  fixed: !1,
  format: null,
  width: null,
  sort: !0,
  columnIndex: 0
}, zT = {
  table: WT,
  tableHeader: VT,
  column: nT,
  pagination: vT,
  selectWrapper: NT,
  scroll: DT,
  tableBordered: HT,
  paginationBordered: TT,
  borderless: Qv,
  checkboxRowWrapper: iT,
  checkboxRow: eT,
  checkboxHeaderWrapper: tT,
  checkboxHeader: Jv,
  row: OT,
  rowItem: IT,
  striped: BT,
  sortIconWrapper: PT,
  sortIcon: RT,
  paginationRowsText: kT,
  paginationNav: yT,
  paginationButtonsWrapper: ET,
  hoverRow: lT,
  borderColor: Zv,
  color: sT,
  fixedHeader: rT,
  fixedHeaderBody: aT,
  selectableRow: $T,
  rowAnimation: ST,
  sm: MT,
  edit: oT,
  selectItemsWrapper: LT,
  paginationStartButton: xT,
  paginationLeftButton: AT,
  paginationRightButton: wT,
  paginationEndButton: CT,
  loadingItemsWrapper: hT,
  loadingProgressBarWrapper: mT,
  loadingProgressBar: fT,
  loadingMessage: dT,
  loadingPaginationRowsText: pT,
  loadingPaginationSelectWrapper: _T,
  loadingPaginationNav: uT,
  loadingColumn: cT,
  noFoundMessageWrapper: bT,
  noFoundMessage: gT
}, UT = {
  table: "string",
  tableHeader: "string",
  column: "string",
  pagination: "string",
  selectWrapper: "string",
  scroll: "string",
  tableBordered: "string",
  paginationBordered: "string",
  borderless: "string",
  checkboxRowWrapper: "string",
  checkboxRow: "string",
  checkboxHeaderWrapper: "string",
  checkboxHeader: "string",
  row: "string",
  rowItem: "string",
  striped: "string",
  sortIconWrapper: "string",
  sortIcon: "string",
  paginationRowsText: "string",
  paginationNav: "string",
  paginationButtonsWrapper: "string",
  hoverRow: "string",
  borderColor: "string",
  color: "string",
  fixedHeader: "string",
  fixedHeaderBody: "string",
  selectableRow: "string",
  rowAnimation: "string",
  sm: "string",
  edit: "string",
  selectItemsWrapper: "string",
  paginationStartButton: "string",
  paginationLeftButton: "string",
  paginationRightButton: "string",
  paginationEndButton: "string",
  loadingItemsWrapper: "string",
  loadingProgressBarWrapper: "string",
  loadingProgressBar: "string",
  loadingMessage: "string",
  loadingPaginationRowsText: "string",
  loadingPaginationSelectWrapper: "string",
  loadingPaginationNav: "string",
  loadingColumn: "string",
  noFoundMessageWrapper: "string",
  noFoundMessage: "string"
};
class ph {
  constructor(t, e = {}, i = {}, n = {}) {
    this._element = t, this._options = this._getOptions(i), this._classes = this._getClasses(n), this._sortReverse = !1, this._activePage = 0, this._search = "", this._searchColumn = null, this._paginationLeft = null, this._paginationRight = null, this._paginationStart = null, this._paginationEnd = null, this._select = null, this._selectInstance = null, this._selected = [], this._checkboxes = null, this._headerCheckbox = null, this._rows = this._getRows(e.rows), this._columns = this._getColumns(e.columns), this._element && (y.setData(t, vi, this), this._perfectScrollbar = null, this._setup());
  }
  // Getters
  static get NAME() {
    return $i;
  }
  get columns() {
    return this._columns.map((t, e) => {
      let i = {
        ...KT,
        field: `field_${e}`,
        columnIndex: e
      };
      return typeof t == "string" ? i.label = t : typeof t == "object" && (i = {
        ...i,
        ...t
      }), I("column", i, jT), i;
    });
  }
  get rows() {
    return this._rows.map((t, e) => {
      const i = {
        rowIndex: e
      };
      return Array.isArray(t) ? this.columns.forEach((n, o) => {
        t[o] === 0 ? i[n.field] = t[o] : i[n.field] = t[o] || this._options.defaultValue;
      }) : typeof t == "object" && this.columns.forEach((n) => {
        t[n.field] === 0 ? i[n.field] = t[n.field] : i[n.field] = t[n.field] || this._options.defaultValue;
      }), i;
    });
  }
  get searchResult() {
    return Lv(this.rows, this._search, this._searchColumn);
  }
  get computedRows() {
    let t = [...this.searchResult];
    return this._options.sortOrder && (t = $v({
      rows: t,
      field: this._options.sortField,
      order: this._options.sortOrder
    })), this._options.pagination && (this._options.entries === "All" ? t = El({
      rows: t,
      entries: t.length,
      activePage: this._activePage
    }) : t = El({
      rows: t,
      entries: this._options.entries,
      activePage: this._activePage
    })), t;
  }
  get pages() {
    return this._options.entries === "All" ? 1 : Math.ceil(this.searchResult.length / this._options.entries);
  }
  get navigationText() {
    const t = this._activePage * this._options.entries;
    return this.searchResult.length === 0 ? `0 ${this._options.ofText} 0` : this._options.entries === "All" ? `1 - ${this.searchResult.length} ${this._options.ofText} ${this.searchResult.length}` : `${t + 1} - ${this.computedRows.length + t} ${this._options.ofText} ${this.searchResult.length}`;
  }
  get tableOptions() {
    return {
      classes: this._classes,
      columns: this.columns,
      rows: this.computedRows,
      noFoundMessage: this._options.noFoundMessage,
      edit: this._options.edit,
      loading: this._options.loading,
      loaderClass: this._options.loaderClass,
      loadingMessage: this._options.loadingMessage,
      selectable: this._options.selectable,
      multi: this._options.multi,
      bordered: this._options.bordered,
      borderless: this._options.borderless,
      striped: this._options.striped,
      hover: this._options.hover,
      fixedHeader: this._options.fixedHeader,
      sm: this._options.sm,
      sortIconTemplate: this._options.sortIconTemplate,
      pagination: {
        enable: this._options.pagination,
        text: this.navigationText,
        entries: this._options.entries,
        entriesOptions: this._options.entriesOptions,
        fullPagination: this._options.fullPagination,
        rowsText: this._options.rowsText,
        ofText: this._options.ofText,
        allText: this._options.allText,
        paginationStartIconTemplate: this._options.paginationStartIconTemplate,
        paginationLeftIconTemplate: this._options.paginationLeftIconTemplate,
        paginationRightIconTemplate: this._options.paginationRightIconTemplate,
        paginationEndIconTemplate: this._options.paginationEndIconTemplate,
        classes: this._classes
      },
      forceSort: this._options.forceSort
    };
  }
  // Public
  update(t, e = {}) {
    t && t.rows && (this._rows = t.rows), t && t.columns && (this._columns = t.columns), this._clearClassList(e), this._options = this._getOptions({ ...this._options, ...e }), this._setup(), this._performSort();
  }
  dispose() {
    this._selectInstance && this._selectInstance.dispose(), y.removeData(this._element, vi), this._removeEventListeners(), this._perfectScrollbar.destroy(), this._element = null;
  }
  search(t, e) {
    this._search = t, this._searchColumn = e, this._activePage = 0, this._options.pagination && this._toggleDisableState(), this._renderRows(), this._options.maxHeight && (this._perfectScrollbar.element.scrollTop = 0, this._perfectScrollbar.update());
  }
  sort(t, e = "asc") {
    this._options.sortOrder = e, typeof t == "string" ? this._options.sortField = this.columns.find(
      (n) => n.label === t
    ).field : this._options.sortField = t.field;
    const i = d.findOne(
      `[data-te-sort="${this._options.sortField}"]`,
      this._element
    );
    this._activePage = 0, this._toggleDisableState(), this._renderRows(), this._setActiveSortIcon(i);
  }
  setActivePage(t) {
    t < this.pages && this._changeActivePage(t);
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...zT,
      ...e,
      ...t
    }, I($i, t, UT), t;
  }
  _changeActivePage(t) {
    this._activePage = t, this._toggleDisableState(), this._renderRows();
  }
  _clearClassList(t) {
    ["hover", "bordered", "borderless", "sm", "striped"].forEach((e) => {
      this._options[e] && !t[e] && h.removeDataAttribute(`data-te-${e}`);
    });
  }
  _emitSelectEvent() {
    c.trigger(this._element, Yv, {
      selectedRows: this.rows.filter(
        (t) => this._selected.indexOf(t.rowIndex) !== -1
      ),
      selectedIndexes: this._selected,
      allSelected: this._selected.length === this.rows.length
    });
  }
  _getRows(t = []) {
    const e = d.findOne("tbody", this._element);
    return e ? [...d.find("tr", e).map((n) => d.find("td", n).map((o) => o.innerHTML)), ...t] : t;
  }
  _getColumns(t = []) {
    const e = d.findOne("thead", this._element);
    if (!e)
      return t;
    const i = d.findOne("tr", e);
    return [...d.find("th", i).map((o) => ({
      label: o.innerHTML,
      ...h.getDataAttributes(o)
    })), ...t];
  }
  _getCSSValue(t) {
    return typeof t == "string" ? t : `${t}px`;
  }
  _getOptions(t) {
    const e = {
      ...YT,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I($i, e, FT), e;
  }
  _setActiveRows() {
    d.find(pi, this._element).forEach((t) => {
      this._selected.includes(h.getDataAttribute(t, "index")) ? h.addClass(t, `active ${this._classes.selectableRow}`) : h.removeClass(t, `active ${this._classes.selectableRow}`);
    });
  }
  _setEntries(t) {
    this._options = this._getOptions({
      ...this._options,
      entries: t.target.value
    }), this._activePage > this.pages - 1 && (this._activePage = this.pages - 1), this._toggleDisableState(), this._renderRows();
  }
  _setSelected() {
    d.find(_o, this._element).forEach(
      (t) => {
        const e = h.getDataAttribute(t, "rowIndex");
        t.checked = this._selected.includes(e);
      }
    ), this._setActiveRows();
  }
  _setActiveSortIcon(t) {
    d.find(po, this._element).forEach((e) => {
      const i = this._options.sortOrder === "desc" && e === t ? 180 : 0;
      h.style(e, {
        transform: `rotate(${i}deg)`
      }), e === t && this._options.sortOrder ? h.addClass(e, "opacity-100") : h.removeClass(e, "opacity-100");
    });
  }
  _setup() {
    this._renderTable(), this._options.pagination && this._setupPagination(), this._options.edit && this._setupEditable(), this._options.clickableRows && this._setupClickableRows(), this._options.selectable && this._setupSelectable(), this._setupScroll(), this._setupSort();
  }
  _setupClickableRows() {
    d.find(pi, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "index");
      h.addClass(t, "cursor-pointer"), c.on(t, "click", (i) => {
        d.matches(i.target, _o) || c.trigger(this._element, jv, {
          index: e,
          row: this.rows[e]
        });
      });
    });
  }
  _setupEditable() {
    d.find(pi, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "index");
      d.find(uo, t).forEach((i) => {
        c.on(i, "input", (n) => this._updateRow(n, e));
      });
    });
  }
  _setupScroll() {
    const t = d.findOne(Nv, this._element), e = {};
    if (this._options.maxHeight && (e.maxHeight = this._getCSSValue(this._options.maxHeight)), this._options.maxWidth) {
      const i = this._getCSSValue(this._options.maxWidth);
      e.maxWidth = i, h.style(this._element, { maxWidth: i });
    }
    if (h.style(t, e), h.addClass(t, `${this._classes.scroll}`), this._options.fixedHeader) {
      let i = d.find(Mv, this._element);
      this._options.selectable && (i = i.filter((n, o) => (h.addClass(
        n,
        `${this._classes.fixedHeader} ${this._classes.color}`
      ), o !== 0))), i.forEach((n, o) => {
        h.addClass(
          n,
          `${this._classes.fixedHeader} ${this._classes.color}`
        ), this.columns[o].fixed && h.addClass(n, "!z-40");
      });
    }
    this._perfectScrollbar = new uh(t);
  }
  _setupSort() {
    d.find(po, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "sort"), [i] = d.parents(t, "th");
      if (this.columns.sort)
        h.addClass(i, "cursor-pointer");
      else
        return;
      e === this._options.sortField && this._setActiveSortIcon(t), c.on(i, "click", () => {
        this._options.sortField === e && this._options.sortOrder === "asc" ? this._options.sortOrder = "desc" : this._options.sortField === e && this._options.sortOrder === "desc" ? this._options.sortOrder = this._options.forceSort ? "asc" : null : this._options.sortOrder = "asc", this._options.sortField = e, this._activePage = 0, this._performSort(), this._setActiveSortIcon(t);
      });
    });
  }
  _performSort() {
    this._toggleDisableState(), this._renderRows();
  }
  _setupSelectable() {
    this._checkboxes = d.find(_o, this._element), this._headerCheckbox = d.findOne(
      Rv,
      this._element
    ), c.on(
      this._headerCheckbox,
      "input",
      (t) => this._toggleSelectAll(t)
    ), this._checkboxes.forEach((t) => {
      const e = h.getDataAttribute(t, "rowIndex");
      c.on(
        t,
        "input",
        (i) => this._toggleSelectRow(i, e)
      );
    });
  }
  _setupPagination() {
    this._paginationRight = d.findOne(
      Pv,
      this._element
    ), this._paginationLeft = d.findOne(
      Bv,
      this._element
    ), c.on(
      this._paginationRight,
      "click",
      () => this._changeActivePage(this._activePage + 1)
    ), c.on(
      this._paginationLeft,
      "click",
      () => this._changeActivePage(this._activePage - 1)
    ), this._options.fullPagination && (this._paginationStart = d.findOne(
      Hv,
      this._element
    ), this._paginationEnd = d.findOne(
      Vv,
      this._element
    ), c.on(
      this._paginationStart,
      "click",
      () => this._changeActivePage(0)
    ), c.on(
      this._paginationEnd,
      "click",
      () => this._changeActivePage(this.pages - 1)
    )), this._toggleDisableState(), this._setupPaginationSelect();
  }
  _setupPaginationSelect() {
    this._select = d.findOne(Fv, this._element), this._selectInstance = new dr(this._select), c.on(
      this._select,
      "valueChange.te.select",
      (t) => this._setEntries(t)
    );
  }
  _removeEventListeners() {
    this._options.pagination && (c.off(this._paginationRight, "click"), c.off(this._paginationLeft, "click"), c.off(this._select, "valueChange.te.select"), this._options.fullPagination && (c.off(this._paginationStart, "click"), c.off(this._paginationEnd, "click"))), this._options.edit && d.find(uo, this._element).forEach((t) => {
      c.off(t, "input");
    }), this._options.clickableRows && d.find(pi, this._element).forEach((t) => {
      c.off(t, "click");
    }), d.find(po, this._element).forEach((t) => {
      const [e] = d.parents(t, "th");
      c.off(e, "click");
    }), this._options.selectable && (c.off(this._headerCheckbox, "input"), this._checkboxes.forEach((t) => {
      c.off(t, "input");
    }));
  }
  _renderTable() {
    this._element.innerHTML = Tl(this.tableOptions).table, this._formatCells(), c.trigger(this._element, Cl);
  }
  _renderRows() {
    const t = d.findOne("tbody", this._element);
    if (this._options.pagination) {
      const e = d.findOne(
        Wv,
        this._element
      );
      e.innerText = this.navigationText;
    }
    t.innerHTML = Tl(this.tableOptions).rows, this._formatCells(), this._options.edit && this._setupEditable(), this._options.selectable && (this._setupSelectable(), this._setSelected()), this._options.clickableRows && this._setupClickableRows(), c.trigger(this._element, Cl);
  }
  _formatCells() {
    d.find(pi, this._element).forEach((e) => {
      const i = h.getDataAttribute(e, "index");
      d.find(uo, e).forEach((o) => {
        const r = h.getDataAttribute(o, "field"), a = this.columns.find((l) => l.field === r);
        a && a.format !== null && a.format(o, this.rows[i][r]);
      });
    });
  }
  _toggleDisableState() {
    this._options.pagination !== !1 && (this._activePage === 0 || this._options.loading ? (this._paginationLeft.setAttribute("disabled", ""), this._options.fullPagination && this._paginationStart.setAttribute("disabled", "")) : (this._paginationLeft.removeAttribute("disabled"), this._options.fullPagination && this._paginationStart.removeAttribute("disabled")), this._activePage === this.pages - 1 || this._options.loading || this.pages === 0 ? (this._paginationRight.setAttribute("disabled", ""), this._options.fullPagination && this._paginationEnd.setAttribute("disabled", "")) : (this._paginationRight.removeAttribute("disabled"), this._options.fullPagination && this._paginationEnd.removeAttribute("disabled")));
  }
  _toggleSelectAll(t) {
    t.target.checked ? this._selected = this.rows.map((e) => e.rowIndex) : this._selected = [], this._setSelected(), this._emitSelectEvent();
  }
  _toggleSelectRow(t, e) {
    t.target.checked ? this._options.multi && !this._selected.includes(e) ? this._selected = [...this._selected, e] : (this._selected = [e], this._checkboxes.forEach((i) => {
      i !== t.target && (i.checked = !1);
    })) : this._selected = this._selected.filter((i) => i !== e), this._options.multi && !t.target.checked && (this._headerCheckbox.checked = !1), this._setActiveRows(), this._emitSelectEvent();
  }
  _updateRow(t, e) {
    const i = h.getDataAttribute(t.target, "field"), n = t.target.textContent, o = this._rows[e];
    if (Array.isArray(o)) {
      const a = this.columns.find((l) => l.field === i).columnIndex;
      o[a] = n;
    } else
      o[i] = n;
    c.trigger(this._element, Kv, {
      rows: this._rows,
      columns: this._columns
    });
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = y.getData(this, vi);
      const o = typeof t == "object" && t;
      if (!(!n && /dispose/.test(t)) && (n || (n = new ph(this, o, e)), typeof t == "string")) {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](e, i);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, vi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Al = "rating", Us = "te.rating", XT = "data-te-rating-init", GT = "[data-te-rating-icon-ref]", ii = `.${Us}`, qT = "ArrowLeft", ZT = "ArrowRight", QT = {
  tooltip: "string",
  value: "(string|number)",
  readonly: "boolean",
  after: "string",
  before: "string",
  dynamic: "boolean",
  active: "string"
}, JT = {
  tooltip: "top",
  value: "",
  readonly: !1,
  after: "",
  before: "",
  dynamic: !1,
  active: "fill-current"
}, yl = `onSelect${ii}`, t0 = `onHover${ii}`, wl = `keyup${ii}`, kl = `focusout${ii}`, xl = `keydown${ii}`, Ol = `mousedown${ii}`;
class jC {
  constructor(t, e) {
    this._element = t, this._icons = d.find(GT, this._element), this._options = this._getConfig(e), this._index = -1, this._savedIndex = null, this._originalClassList = [], this._originalIcons = [], this._fn = {}, this._tooltips = [], this._element && (y.setData(t, Us, this), this._init());
  }
  // Getters
  static get NAME() {
    return Al;
  }
  dispose() {
    y.removeData(this._element, Us), this._options.readonly || (c.off(this._element, wl), c.off(this._element, kl), c.off(this._element, xl), this._element.removeEventListener("mouseleave", this._fn.mouseleave), this._icons.forEach((t, e) => {
      c.off(t, Ol), t.removeEventListener("mouseenter", this._fn.mouseenter[e]), h.removeClass(t, "cursor-pointer");
    }), this._tooltips.forEach((t) => {
      t._element.removeAttribute(XT), t.dispose();
    }), this._icons.removeAttribute("tabIndex")), this._element = null;
  }
  // Private
  _init() {
    this._options.readonly || (this._bindMouseEnter(), this._bindMouseLeave(), this._bindMouseDown(), this._bindKeyDown(), this._bindKeyUp(), this._bindFocusLost(), this._icons.forEach((t) => {
      h.addClass(t, "cursor-pointer");
    })), this._options.dynamic && (this._saveOriginalClassList(), this._saveOriginalIcons()), this._setCustomText(), this._setToolTips(), this._options.value && (this._index = this._options.value - 1, this._updateRating(this._index));
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...JT,
      ...e,
      ...t
    }, I(Al, t, QT), t;
  }
  _bindMouseEnter() {
    this._fn.mouseenter = [], this._icons.forEach((t, e) => {
      t.addEventListener(
        "mouseenter",
        // this._fn.mouseenter[i] is needed to create reference and unpin events after call dispose
        // prettier-ignore
        this._fn.mouseenter[e] = (i) => {
          this._index = this._icons.indexOf(i.target), this._updateRating(this._index), this._triggerEvents(t, t0);
        }
      );
    });
  }
  _bindMouseLeave() {
    this._element.addEventListener(
      "mouseleave",
      // this._fn.mouseleave is needed to create reference and unpin events after call dispose
      // prettier-ignore
      this._fn.mouseleave = () => {
        this._savedIndex !== null ? (this._updateRating(this._savedIndex), this._index = this._savedIndex) : this._options.value ? (this._updateRating(this._options.value - 1), this._index = this._options.value - 1) : (this._index = -1, this._clearRating());
      }
    );
  }
  _bindMouseDown() {
    this._icons.forEach((t) => {
      c.on(t, Ol, () => {
        this._setElementOutline("none"), this._savedIndex = this._index, this._triggerEvents(t, yl);
      });
    });
  }
  _bindKeyDown() {
    this._element.tabIndex = 0, c.on(
      this._element,
      xl,
      (t) => this._updateAfterKeyDown(t)
    );
  }
  _bindKeyUp() {
    c.on(
      this._element,
      wl,
      () => this._setElementOutline("auto")
    );
  }
  _bindFocusLost() {
    c.on(
      this._element,
      kl,
      () => this._setElementOutline("none")
    );
  }
  _setElementOutline(t) {
    this._element.style.outline = t;
  }
  _triggerEvents(t, e) {
    c.trigger(t, e, {
      value: this._index + 1
    });
  }
  _updateAfterKeyDown(t) {
    const e = this._icons.length - 1, i = this._index;
    t.key === ZT && this._index < e && (this._index += 1), t.key === qT && this._index > -1 && (this._index -= 1), i !== this._index && (this._savedIndex = this._index, this._updateRating(this._savedIndex), this._triggerEvents(this._icons[this._savedIndex], yl));
  }
  _updateRating(t) {
    this._clearRating(), this._options.dynamic && this._restoreOriginalIcon(t), this._icons.forEach((e, i) => {
      i <= t && h.addClass(e.querySelector("svg"), this._options.active);
    });
  }
  _clearRating() {
    this._icons.forEach((t, e) => {
      const i = t.querySelector("svg");
      this._options.dynamic && (t.classList = this._originalClassList[e], i.innerHTML = this._originalIcons[e]), h.removeClass(i, this._options.active);
    });
  }
  _setToolTips() {
    this._icons.forEach((t, e) => {
      const i = h.getDataAttribute(t, "toggle");
      t.title && !i && (h.setDataAttribute(t, "toggle", "tooltip"), this._tooltips[e] = new ti(t, {
        placement: this._options.tooltip
      }));
    });
  }
  _setCustomText() {
    this._icons.forEach((t) => {
      const e = h.getDataAttribute(t, "after"), i = h.getDataAttribute(t, "before");
      e && t.insertAdjacentHTML("afterEnd", e), i && t.insertAdjacentHTML("beforeBegin", i);
    });
  }
  _saveOriginalClassList() {
    this._icons.forEach((t) => {
      const e = t.classList.value;
      this._originalClassList.push(e);
    });
  }
  _saveOriginalIcons() {
    this._icons.forEach((t) => {
      const e = t.querySelector("svg").innerHTML;
      this._originalIcons.push(e);
    });
  }
  _restoreOriginalIcon(t) {
    const e = this._originalClassList[t], i = this._originalIcons[t];
    this._icons.forEach((n, o) => {
      if (o <= t) {
        const r = n.querySelector("svg");
        r.innerHTML = i, n.classList = e;
      }
    });
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Us);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const fo = "popconfirm", Ti = "te.popconfirm", _h = `.${Ti}`, e0 = `cancel${_h}`, i0 = `confirm${_h}`, s0 = "[data-te-popconfirm-body]", mo = "data-te-popconfirm-popover", n0 = "data-te-popconfirm-modal", Sl = "data-te-popconfirm-backdrop", o0 = {
  popconfirmMode: "string",
  message: "string",
  cancelText: "(null|string)",
  okText: "(null|string)",
  popconfirmIconTemplate: "string",
  cancelLabel: "(null|string)",
  confirmLabel: "(null|string)",
  position: "(null|string)"
}, r0 = {
  popconfirmMode: "inline",
  message: "Are you sure?",
  cancelText: "Cancel",
  okText: "OK",
  popconfirmIconTemplate: "",
  cancelLabel: "Cancel",
  confirmLabel: "Confirm",
  position: "bottom"
}, a0 = {
  backdrop: "string",
  body: "string",
  btnCancel: "string",
  btnConfirm: "string",
  btnsContainer: "string",
  fade: "string",
  icon: "string",
  message: "string",
  messageText: "string",
  modal: "string",
  popover: "string"
}, l0 = {
  backdrop: "h-full w-full z-[1070] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center",
  body: "p-[1rem] bg-white rounded-[0.5rem] opacity-0 dark:bg-neutral-700",
  btnCancel: "inline-block rounded bg-primary-100 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200",
  btnConfirm: "inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  btnsContainer: "flex justify-end space-x-2",
  fade: "transition-opacity duration-[150ms] ease-linear",
  icon: "pr-2",
  message: "flex mb-3",
  messageText: "text-neutral-600 dark:text-white",
  modal: "absolute w-[300px] z-[1080] shadow-sm rounded-[0.5rem]",
  popover: "w-[300px] border-0 rounded-[0.5rem] z-[1080] shadow-sm"
};
class fh {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._popper = null, this._cancelButton = "", this._confirmButton = "", this._isOpen = !1, this._uid = this._element.id ? `popconfirm-${this._element.id}` : rt("popconfirm-"), t && y.setData(t, Ti, this), this._clickHandler = this.open.bind(this), c.on(this._element, "click", this._clickHandler);
  }
  // Getters
  static get NAME() {
    return fo;
  }
  get container() {
    return d.findOne(`#${this._uid}`);
  }
  get popconfirmBody() {
    return d.findOne(
      s0,
      this.container
    );
  }
  // Public
  dispose() {
    (this._isOpen || this.container !== null) && this.close(), y.removeData(this._element, Ti), c.off(this._element, "click", this._clickHandler), this._element = null;
  }
  open() {
    this._isOpen || (this._options.popconfirmMode === "inline" ? this._openPopover(this._getPopoverTemplate()) : this._openModal(this._getModalTemplate()), this._handleCancelButtonClick(), this._handleConfirmButtonClick(), this._listenToEscapeKey(), this._listenToOutsideClick());
  }
  close() {
    if (this._isOpen) {
      if (this._popper !== null || d.findOne(`[${mo}]`) !== null)
        c.on(
          this.popconfirmBody,
          "transitionend",
          this._handlePopconfirmTransitionEnd.bind(this)
        ), h.removeClass(this.popconfirmBody, "opacity-100");
      else {
        const t = d.findOne(
          `[${Sl}]`
        );
        h.removeClass(this.popconfirmBody, "opacity-100"), document.body.removeChild(t), this._isOpen = !1;
      }
      c.off(document, "click", this._handleOutsideClick.bind(this)), c.off(document, "keydown", this._handleEscapeKey.bind(this));
    }
  }
  _handlePopconfirmTransitionEnd(t) {
    if (t.target !== this.popconfirmBody)
      return;
    const e = d.findOne(
      `[${mo}]`
    );
    c.off(this.popconfirmBody, "transitionend"), this._isOpen && t && t.propertyName === "opacity" && (this._popper.destroy(), e && document.body.removeChild(e), this._isOpen = !1);
  }
  // Private
  _getPopoverTemplate() {
    const t = D("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(mo, ""), h.addClass(t, this._classes.popover), t.id = this._uid, t.innerHTML = e, t;
  }
  _getModalTemplate() {
    const t = D("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(n0, ""), h.addClass(t, `${this._classes.modal}`), t.id = this._uid, t.innerHTML = e, t;
  }
  _getPopconfirmTemplate() {
    return `<div data-te-popconfirm-body class="${this._classes.body}">
      <p class="${this._classes.message}">
      ${this._options.popconfirmIconTemplate ? `<span class="${this._classes.icon}">${this._options.popconfirmIconTemplate}</span>` : ""}
      <span class="${this._classes.messageText}">${this._options.message}</span>
      </p>
      <div class="${this._classes.btnsContainer}">
      ${this._options.cancelText ? `<button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-cancel" aria-label="${this._options.cancelLabel}"
        class="${this._classes.btnCancel}">${this._options.cancelText}</button>` : ""}
      <button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-confirm"
      aria-label="${this._options.confirmLabel}"
      class="${this._classes.btnConfirm}">${this._options.okText ? this._options.okText : "Ok"}</button>
      </div>
    </div>`;
  }
  _getConfig(t) {
    return t = {
      ...r0,
      ...h.getDataAttributes(this._element),
      ...t
    }, I(fo, t, o0), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...l0,
      ...e,
      ...t
    }, I(fo, t, a0), t;
  }
  _openPopover(t) {
    this._popper = Te(this._element, t, {
      placement: this._translatePositionValue(),
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 5]
          }
        }
      ]
    }), document.body.appendChild(t), setTimeout(() => {
      h.addClass(
        this.popconfirmBody,
        `${this._classes.fade} opacity-100`
      ), this._isOpen = !0;
    }, 0);
  }
  _openModal(t) {
    const e = D("div");
    e.setAttribute(Sl, ""), h.addClass(e, this._classes.backdrop), document.body.appendChild(e), e.appendChild(t), h.addClass(this.popconfirmBody, "opacity-100"), this._isOpen = !0;
  }
  _handleCancelButtonClick() {
    const t = this.container;
    this._cancelButton = d.findOne(
      "#popconfirm-button-cancel",
      t
    ), Ge.getOrCreateInstance(this._cancelButton, { rippleColor: "light" }), this._cancelButton !== null && c.on(this._cancelButton, "click", () => {
      this.close(), c.trigger(this._element, e0);
    });
  }
  _handleConfirmButtonClick() {
    const t = this.container;
    this._confirmButton = d.findOne(
      "#popconfirm-button-confirm",
      t
    ), Ge.getOrCreateInstance(this._confirmButton, { rippleColor: "light" }), c.on(this._confirmButton, "click", () => {
      this.close(), c.trigger(this._element, i0);
    });
  }
  _listenToEscapeKey() {
    c.on(document, "keydown", this._handleEscapeKey.bind(this));
  }
  _handleEscapeKey(t) {
    t.keyCode === Hi && this.close();
  }
  _listenToOutsideClick() {
    c.on(document, "click", this._handleOutsideClick.bind(this));
  }
  _handleOutsideClick(t) {
    const e = this.container, i = t.target === e, n = e && e.contains(t.target), o = t.target === this._element, r = this._element && this._element.contains(t.target);
    !i && !n && !o && !r && this.close();
  }
  _translatePositionValue() {
    switch (this._options.position) {
      case "top left":
        return "top-end";
      case "top":
        return "top";
      case "top right":
        return "top-start";
      case "bottom left":
        return "bottom-end";
      case "bottom":
        return "bottom";
      case "bottom right":
        return "bottom-start";
      case "left":
        return "left";
      case "left top":
        return "left-end";
      case "left bottom":
        return "left-start";
      case "right":
        return "right";
      case "right top":
        return "right-end";
      case "right bottom":
        return "right-start";
      case void 0:
        return "bottom";
      default:
        return "bottom";
    }
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = y.getData(this, Ti), n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t))) {
        if (!i)
          return new fh(this, n);
        if (typeof t == "string") {
          if (typeof i[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Ti);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const go = "lightbox", Ei = "te.lightbox", c0 = `.${Ei}`, h0 = ".data-api", Oe = `click${c0}${h0}`, mh = "[data-te-lightbox-init]", d0 = `${mh} img:not([data-te-lightbox-disabled])`, Il = "data-te-lightbox-caption", u0 = "data-te-lightbox-disabled", Ot = "data-te-lightbox-active", p0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
`, _0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
`, f0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
`, m0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>
`, g0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
</svg>
`, b0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
</svg>
`, v0 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`, T0 = {
  container: "string",
  zoomLevel: "(number|string)",
  prevIconTemplate: "string",
  nextIconTemplate: "string",
  showFullscreenIconTemplate: "string",
  hideFullscreenIconTemplate: "string",
  zoomInIconTemplate: "string",
  closeIconTemplate: "string",
  zoomOutIconTemplate: "string",
  spinnerContent: "string"
}, E0 = {
  container: "body",
  zoomLevel: 1,
  prevIconTemplate: p0,
  nextIconTemplate: _0,
  showFullscreenIconTemplate: f0,
  hideFullscreenIconTemplate: m0,
  zoomInIconTemplate: g0,
  zoomOutIconTemplate: b0,
  closeIconTemplate: v0,
  spinnerContent: "Loading..."
}, C0 = {
  caption: "text-white text-ellipsis overflow-hidden whitespace-nowrap mx-[10px] text-center",
  captionWrapper: "fixed left-0 bottom-0 w-full h-[50px] flex justify-center items-center",
  closeBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  fullscreenBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  gallery: "invisible fixed left-0 top-0 w-full h-full z-[1100] pointer-events-none opacity-0 bg-[#000000e6] transition-all duration-[400ms] motion-reduce:transition-none",
  galleryContent: "fixed top-[50px] left-[50px] w-[calc(100%-100px)] h-[calc(100%-100px)]",
  galleryCounter: "flex justify-center items-center px-[10px] mb-0 h-full text-[#b3b3b3]",
  img: "absolute left-0 top-0 w-full max-h-full h-auto cursor-pointer pointer-events-auto",
  imgWrapper: "absolute top-0 left-0 w-full h-full opacity-0 transform scale-[0.25] transition-all duration-[400ms] ease-out pointer-events-none motion-reduce:transition-none motion-reduce:transform-none",
  leftTools: "float-left h-full",
  loader: "fixed left-0 top-0 z-[2] w-full h-full text-neutral-50 opacity-1 flex justify-center items-center pointer-events-none transition-opacity duration-[1000ms] motion-reduce:transition-none",
  nextBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  nextBtnWrapper: "fixed right-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  prevBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  prevBtnWrapper: "fixed left-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  rightTools: "float-right",
  spinner: "inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]",
  spinnerContent: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
  toolbar: "absolute top-0 left-0 w-full h-[50px] z-20 transition-opacity duration-[400ms] motion-reduce:transition-none",
  vertical: "h-full max-h-full w-auto",
  zoomBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none"
}, A0 = {
  caption: "string",
  captionWrapper: "string",
  closeBtn: "string",
  fullscreenBtn: "string",
  gallery: "string",
  galleryContent: "string",
  galleryCounter: "string",
  img: "string",
  imgWrapper: "string",
  leftTools: "string",
  loader: "string",
  nextBtn: "string",
  nextBtnWrapper: "string",
  prevBtn: "string",
  prevBtnWrapper: "string",
  rightTools: "string",
  spinner: "string",
  spinnerContent: "string",
  toolbar: "string",
  vertical: "string",
  zoomBtn: "string"
};
class Xs {
  constructor(t, e = {}, i) {
    this._element = t, this._options = e, this._classes = this._getClasses(i), this._getContainer(), this._id = `lightbox-${Math.random().toString(36).substr(2, 9)}`, this._activeImg = 0, this._images = [], this._zoom = 1, this._gallery = null, this._galleryToolbar = null, this._galleryContent = null, this._loader = null, this._imgCounter = null, this._animating = !1, this._fullscreen = !1, this._zoomBtn = null, this._fullscreenBtn = null, this._toolsToggleTimer = 0, this._mousedown = !1, this._mousedownPositionX = 0, this._mousedownPositionY = 0, this._originalPositionX = 0, this._originalPositionY = 0, this._positionX = 0, this._positionY = 0, this._zoomTimer = 0, this._tapCounter = 0, this._tapTime = 0, this._rightArrow = null, this._leftArrowWrapper = null, this._rightArrowWrapper = null, this._initiated = !1, this._multitouch = !1, this._touchZoomPosition = [], this._element && (y.setData(t, Ei, this), this.init());
  }
  // Getters
  static get NAME() {
    return go;
  }
  get activeImg() {
    return this._activeImg;
  }
  get currentImg() {
    return d.findOne(
      `[${Ot}]`,
      this._galleryContent
    );
  }
  get options() {
    const t = {
      ...E0,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return I(go, t, T0), t;
  }
  // Public
  init() {
    this._initiated || (this._appendTemplate(), this._initiated = !0);
  }
  open(t = 0) {
    this._getImages(), this._setActiveImg(t), this._sortImages(), this._triggerEvents("open", "opened"), this._loadImages().then((e) => {
      this._resizeImages(e), this._toggleTemplate(), this._addEvents(), this._focusFullscreenBtn();
    });
  }
  close() {
    this.reset(), this._removeEvents(), this._toggleTemplate(), this._triggerEvents("close", "closed");
  }
  slide(t = "right") {
    this._animating === !0 || this._images.length <= 1 || (this._triggerEvents("slide", "slided"), this._beforeSlideEvents(), t === "right" && this._slideHorizontally(t), t === "left" && this._slideHorizontally(t), t === "first" && this._slideToTarget(t), t === "last" && this._slideToTarget(t), this._afterSlideEvents());
  }
  zoomIn() {
    this._zoom >= 3 || (this._triggerEvents("zoomIn", "zoomedIn"), this._zoom += parseFloat(this.options.zoomLevel), h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn());
  }
  zoomOut() {
    this._zoom <= 1 || (this._triggerEvents("zoomOut", "zoomedOut"), this._zoom -= parseFloat(this.options.zoomLevel), h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  toggleFullscreen() {
    this._fullscreen === !1 ? (this._fullscreenBtn.setAttribute(Ot, ""), this._fullscreenBtn.innerHTML = this.options.hideFullscreenIconTemplate, this._gallery.requestFullscreen && this._gallery.requestFullscreen(), this._fullscreen = !0) : (this._fullscreenBtn.removeAttribute(Ot), document.exitFullscreen && document.exitFullscreen(), this._fullscreen = !1);
  }
  reset() {
    this._restoreDefaultFullscreen(), this._restoreDefaultPosition(), this._restoreDefaultZoom(), clearTimeout(this._toolsToggleTimer), clearTimeout(this._doubleTapTimer);
  }
  dispose() {
    c.off(
      document,
      Oe,
      d0,
      this.toggle
    ), this._galleryContent && this._removeEvents(), this._gallery && this._gallery.remove(), y.removeData(this._element, Ei), this._element = null;
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...C0,
      ...e,
      ...t
    }, I(go, t, A0), t;
  }
  _getImages() {
    const e = d.find("img", this._element).filter(
      (i) => !i.hasAttribute(u0)
    );
    this._images = e;
  }
  _getContainer() {
    this._container = d.findOne(this.options.container);
  }
  _setActiveImg(t) {
    this._activeImg = typeof t == "number" ? t : this._images.indexOf(t.target);
  }
  _appendTemplate() {
    this._gallery = D("div"), h.addClass(this._gallery, `${this._classes.gallery}`), this._element.dataset.id = this._id, this._gallery.id = this._id, this._appendLoader(), this._appendToolbar(), this._appendContent(), this._appendArrows(), this._appendCaption(), this._container.append(this._gallery);
  }
  _appendToolbar() {
    this._galleryToolbar = D("div"), this._imgCounter = D("p"), this._fullscreenBtn = D("button"), this._zoomBtn = D("button");
    const t = D("button"), e = D("div"), i = D("div");
    h.addClass(this._galleryToolbar, `${this._classes.toolbar}`), h.addClass(this._imgCounter, `${this._classes.galleryCounter}`), h.addClass(this._fullscreenBtn, `${this._classes.fullscreenBtn}`), h.addClass(this._zoomBtn, `${this._classes.zoomInBtn}`), h.addClass(this._zoomBtn, this._classes.zoomBtn), h.addClass(e, `${this._classes.leftTools}`), h.addClass(i, `${this._classes.rightTools}`), h.addClass(t, `${this._classes.closeBtn}`), this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, t.innerHTML = this.options.closeIconTemplate, this._zoomBtn.innerHTML = this.options.zoomInIconTemplate, this._fullscreenBtn.setAttribute("aria-label", "Toggle fullscreen"), this._zoomBtn.setAttribute("aria-label", "Zoom in"), t.setAttribute("aria-label", "Close"), c.on(
      this._fullscreenBtn,
      Oe,
      () => this.toggleFullscreen()
    ), c.on(
      this._zoomBtn,
      Oe,
      () => this._toggleZoom()
    ), c.on(t, Oe, () => this.close()), e.append(this._imgCounter), i.append(this._fullscreenBtn), i.append(this._zoomBtn), i.append(t), this._galleryToolbar.append(e), this._galleryToolbar.append(i), this._gallery.append(this._galleryToolbar);
  }
  _appendContent() {
    this._galleryContent = D("div"), h.addClass(
      this._galleryContent,
      `${this._classes.galleryContent}`
    ), this._gallery.append(this._galleryContent);
  }
  _appendLoader() {
    this._loader = D("div");
    const t = D("div"), e = D("span");
    h.addClass(this._loader, `${this._classes.loader}`), h.addClass(t, `${this._classes.spinner}`), h.addClass(e, `${this._classes.spinnerContent}`), t.setAttribute("role", "status"), e.innerHTML = this.options.spinnerContent, t.append(e), this._loader.append(t), this._gallery.append(this._loader);
  }
  _appendArrows() {
    this._leftArrowWrapper = D("div"), h.addClass(
      this._leftArrowWrapper,
      `${this._classes.prevBtnWrapper}`
    );
    const t = D("button");
    t.setAttribute("aria-label", "Previous"), h.addClass(t, `${this._classes.prevBtn}`), c.on(t, Oe, () => this.slide("left")), this._leftArrowWrapper.append(t), this._rightArrowWrapper = D("div"), h.addClass(
      this._rightArrowWrapper,
      `${this._classes.nextBtnWrapper}`
    ), this._rightArrow = D("button"), this._rightArrow.setAttribute("aria-label", "Next"), h.addClass(this._rightArrow, `${this._classes.nextBtn}`), c.on(this._rightArrow, Oe, () => this.slide()), this._rightArrowWrapper.append(this._rightArrow), this._rightArrow.innerHTML = this.options.nextIconTemplate, t.innerHTML = this.options.prevIconTemplate, this._getImages(), !(this._images.length <= 1) && (this._gallery.append(this._leftArrowWrapper), this._gallery.append(this._rightArrowWrapper));
  }
  _appendCaption() {
    const t = D("div"), e = D("p");
    e.setAttribute(Il, ""), h.addClass(t, `${this._classes.captionWrapper}`), h.addClass(e, `${this._classes.caption}`), t.append(e), this._gallery.append(t);
  }
  _sortImages() {
    for (let t = 0; t < this._activeImg; t++)
      this._images.push(this._images.shift());
  }
  async _loadImages() {
    const t = [], e = [];
    this._galleryContent.innerHTML = "";
    let i = 0;
    return this._images.forEach((n, o) => {
      t.push(
        new Promise((r) => {
          const a = new Image(), l = D("div");
          h.addClass(l, `${this._classes.imgWrapper}`), h.addClass(a, `${this._classes.img}`), this._addImgStyles(a, l, i, o, n), l.append(a), this._galleryContent.append(l), a.onload = r, a.src = n.dataset.teImg || n.src, e.push(a), i += 100;
        })
      );
    }), await Promise.all(t), e;
  }
  _addImgStyles(t, e, i, n, o) {
    t.alt = o.alt, t.draggable = !1, h.style(e, {
      position: "absolute",
      left: `${i}%`,
      top: 0
    }), (o.dataset.teCaption || o.dataset.teCaption === "") && (t.dataset.caption = o.dataset.teCaption), i === 0 ? (o.width < o.height && h.addClass(t, `${this._classes.vertical}`), h.style(e, { opacity: 1 }), t.setAttribute(Ot, "")) : t.removeAttribute(Ot), n === this._images.length - 1 && this._images.length > 1 && h.style(e, { left: "-100%" });
  }
  _resizeImages(t) {
    t.forEach((e) => {
      this._calculateImgSize(e);
    });
  }
  _calculateImgSize(t) {
    t.width >= t.height ? (t.style.width = "100%", t.style.maxWidth = "100%", t.style.height = "auto", t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`, t.style.left = 0) : (t.style.height = "100%", t.style.maxHeight = "100%", t.style.width = "auto", t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`, t.style.top = 0), t.width >= t.parentNode.offsetWidth && (t.style.width = `${t.parentNode.offsetWidth}px`, t.style.height = "auto", t.style.left = 0, t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`), t.height >= t.parentNode.offsetHeight && (t.style.height = `${t.parentNode.offsetHeight}px`, t.style.width = "auto", t.style.top = 0, t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`), this._positionX = parseFloat(t.style.left) || 0, this._positionY = parseFloat(t.style.top) || 0;
  }
  _onResize() {
    this._images = d.find("img", this._galleryContent), this._images.forEach((t) => {
      this._calculateImgSize(t);
    });
  }
  _onFullscreenChange() {
    (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) === void 0 && (this._fullscreen = !1, this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, this._fullscreenBtn.removeAttribute(Ot));
  }
  _beforeSlideEvents() {
    this._animationStart(), this._restoreDefaultZoom(), this._restoreDefaultPosition(), this._resetDoubleTap();
  }
  _slideHorizontally(t) {
    this._images = d.find("img", this._galleryContent), this._images.forEach((e) => {
      let i;
      t === "right" ? (i = parseInt(e.parentNode.style.left, 10) - 100, i < -100 && (i = (this._images.length - 2) * 100)) : (i = parseInt(e.parentNode.style.left, 10) + 100, i === (this._images.length - 1) * 100 && (i = -100)), this._slideImg(e, i);
    }), this._updateActiveImg(t);
  }
  _slideImg(t, e) {
    e === 0 ? (t.setAttribute(Ot, ""), h.style(t.parentNode, { opacity: 1, transform: "scale(1)" })) : (t.removeAttribute(Ot), h.style(t.parentNode, {
      opacity: 0,
      transform: "scale(0.25)"
    })), t.parentNode.style.left = `${e}%`;
  }
  _slideToTarget(t) {
    t === "first" && this._activeImg === 0 || t === "last" && this._activeImg === this._images.length - 1 || (this.reset(), this._removeEvents(), this._showLoader(), this._getImages(), this._activeImg = t === "first" ? 0 : this._images.length - 1, this._sortImages(), h.style(this.currentImg.parentNode, {
      transform: "scale(0.25)",
      opacity: 0
    }), setTimeout(() => {
      this._loadImages().then((e) => {
        this._resizeImages(e), this._addEvents(), this._updateCaption(), this._hideLoader(), setTimeout(() => {
          h.style(this.currentImg.parentNode, {
            transform: "scale(1)",
            opacity: 1
          });
        }, 10);
      });
    }, 400));
  }
  _updateActiveImg(t) {
    t === "right" && (this._activeImg === this._images.length - 1 ? this._activeImg = 0 : this._activeImg++), t === "left" && (this._activeImg === 0 ? this._activeImg = this._images.length - 1 : this._activeImg--);
  }
  _afterSlideEvents() {
    this._updateCounter(), this._updateCaption();
  }
  _updateCounter() {
    this._images.length <= 1 || setTimeout(() => {
      this._imgCounter.innerHTML = `${this._activeImg + 1} / ${this._images.length}`;
    }, 200);
  }
  _updateCaption() {
    setTimeout(() => {
      let t = this.currentImg.alt;
      (this.currentImg.dataset.caption || this.currentImg.dataset.caption === "") && (t = this.currentImg.dataset.caption), d.findOne(
        `[${Il}]`,
        this._gallery
      ).innerHTML = t;
    }, 200);
  }
  _toggleTemplate() {
    this._gallery.style.visibility === "visible" ? (h.style(this.currentImg.parentNode, {
      transform: "scale(0.25)"
    }), setTimeout(() => {
      this._hideGallery(), this._enableScroll(), this._showLoader();
    }, 100)) : (this._showGallery(), this._disableScroll(), this._updateCounter(), this._updateCaption(), this._setToolsToggleTimout(), this._hideLoader());
  }
  _showLoader() {
    h.style(this._loader, { opacity: 1 });
  }
  _hideLoader() {
    h.style(this._loader, { opacity: 0 });
  }
  _hideGallery() {
    h.style(this._gallery, {
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden"
    });
  }
  _showGallery() {
    h.style(this._gallery, {
      opacity: 1,
      pointerEvents: "initial",
      visibility: "visible"
    }), setTimeout(() => {
      h.style(this.currentImg.parentNode, { transform: "scale(1)" });
    }, 50);
  }
  _toggleZoom() {
    this._zoom !== 1 ? this.zoomOut() : this.zoomIn();
  }
  _updateZoomBtn() {
    this._zoom > 1 ? (this._zoomBtn.setAttribute(Ot, ""), this._zoomBtn.setAttribute("aria-label", "Zoom out"), this._zoomBtn.innerHTML = this.options.zoomOutIconTemplate) : (this._zoomBtn.removeAttribute(Ot), this._zoomBtn.setAttribute("aria-label", "Zoom in"), this._zoomBtn.innerHTML = this.options.zoomInIconTemplate);
  }
  _updateImgPosition() {
    this._zoom === 1 && this._restoreDefaultPosition();
  }
  _addEvents() {
    const t = d.find("img", this._galleryContent);
    this._onWindowTouchmove = this._onWindowTouchmove.bind(this), this._onWindowTouchstart = this._onWindowTouchstart.bind(this), this._onImgMousedown = this._onMousedown.bind(this), this._onImgMousemove = this._onMousemove.bind(this), this._onImgWheel = this._onZoom.bind(this), this._onImgMouseup = this._onMouseup.bind(this), this._onImgTouchend = this._onTouchend.bind(this), this._onImgDoubleClick = this._onDoubleClick.bind(this), this._onWindowResize = this._onResize.bind(this), this._onWindowFullscreenChange = this._onFullscreenChange.bind(this), this._onAnyImgAction = this._resetToolsToggler.bind(this), this._onGalleryClick = this._onBackdropClick.bind(this), this._onKeyupEvent = this._onKeyup.bind(this), this._onRightArrowKeydownEvent = this._onRightArrowKeydown.bind(this), this._onFullscreenBtnKeydownEvent = this._onFullscreenBtnKeydown.bind(this), t.forEach((e) => {
      c.on(e, "mousedown", this._onImgMousedown, {
        passive: !0
      }), c.on(e, "touchstart", this._onImgMousedown, {
        passive: !0
      }), c.on(e, "mousemove", this._onImgMousemove, {
        passive: !0
      }), c.on(e, "touchmove", this._onImgMousemove, {
        passive: !0
      }), c.on(e, "wheel", this._onImgWheel, { passive: !0 }), c.on(e, "dblclick", this._onImgDoubleClick, {
        passive: !0
      });
    }), document.addEventListener("touchmove", this._onWindowTouchmove, {
      passive: !1
    }), c.on(window, "touchstart", this._onWindowTouchstart), c.on(window, "mouseup", this._onImgMouseup), c.on(window, "touchend", this._onImgTouchend), c.on(window, "resize", this._onWindowResize), c.on(window, "orientationchange", this._onWindowResize), c.on(window, "keyup", this._onKeyupEvent), c.on(window, "fullscreenchange", this._onWindowFullscreenChange), c.on(this._gallery, "mousemove", this._onAnyImgAction), c.on(this._gallery, "click", this._onGalleryClick), c.on(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), c.on(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _removeEvents() {
    d.find("img", this._galleryContent).forEach((e) => {
      c.off(e, "mousedown", this._onImgMousedown), c.off(e, "touchstart", this._onImgMousedown), c.off(e, "mousemove", this._onImgMousemove), c.off(e, "touchmove", this._onImgMousemove), c.off(e, "wheel", this._onImgWheel), c.off(e, "dblclick", this._onImgDoubleClick);
    }), document.removeEventListener("touchmove", this._onWindowTouchmove, {
      passive: !1
    }), c.off(window, "touchstart", this._onWindowTouchstart), c.off(window, "mouseup", this._onImgMouseup), c.off(window, "touchend", this._onImgTouchend), c.off(window, "resize", this._onWindowResize), c.off(window, "orientationchange", this._onWindowResize), c.off(window, "keyup", this._onKeyupEvent), c.off(
      window,
      "fullscreenchange",
      this._onWindowFullscreenChange
    ), c.off(this._gallery, "mousemove", this._onAnyImgAction), c.off(this._gallery, "click", this._onGalleryClick), c.off(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), c.off(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _onMousedown(t) {
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    this._originalPositionX = parseFloat(this.currentImg.style.left) || 0, this._originalPositionY = parseFloat(this.currentImg.style.top) || 0, this._positionX = this._originalPositionX, this._positionY = this._originalPositionY, this._mousedownPositionX = i * (1 / this._zoom) - this._positionX, this._mousedownPositionY = n * (1 / this._zoom) - this._positionY, this._mousedown = !0, t.type === "touchstart" && t.touches.length > 1 && (this._multitouch = !0, this._touchZoomPosition = t.touches);
  }
  _onMousemove(t) {
    if (!this._mousedown)
      return;
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    if (e && this._resetToolsToggler(), !this._multitouch)
      if (this._zoom !== 1)
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, this._positionY = n * (1 / this._zoom) - this._mousedownPositionY, h.style(this.currentImg, {
          left: `${this._positionX}px`,
          top: `${this._positionY}px`
        });
      else {
        if (this._images.length <= 1)
          return;
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, h.style(this.currentImg, { left: `${this._positionX}px` });
      }
  }
  _onMouseup(t) {
    this._mousedown = !1, this._moveImg(t.target);
  }
  _onTouchend(t) {
    this._mousedown = !1, this._multitouch ? t.targetTouches.length === 0 && (this._multitouch = !1, this._touchZoomPosition = []) : this._multitouch || (this._checkDoubleTap(t), this._moveImg(t.target));
  }
  _calculateTouchZoom(t) {
    const e = Math.hypot(
      this._touchZoomPosition[1].pageX - this._touchZoomPosition[0].pageX,
      this._touchZoomPosition[1].pageY - this._touchZoomPosition[0].pageY
    ), i = Math.hypot(
      t.touches[1].pageX - t.touches[0].pageX,
      t.touches[1].pageY - t.touches[0].pageY
    ), n = Math.abs(e - i), o = t.view.screen.width;
    n > o * 0.03 && (e <= i ? this.zoomIn() : this.zoomOut(), this._touchZoomPosition = t.touches);
  }
  _onWindowTouchstart(t) {
    t.touches.length > 1 && (this._multitouch = !0, this._touchZoomPosition = t.touches);
  }
  _onWindowTouchmove(t) {
    t.preventDefault(), t.type === "touchmove" && t.targetTouches.length > 1 && this._calculateTouchZoom(t);
  }
  _onRightArrowKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (t.shiftKey)
          break;
        t.preventDefault(), this._focusFullscreenBtn();
        break;
    }
  }
  _onFullscreenBtnKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (!t.shiftKey)
          break;
        t.preventDefault(), this._focusRightArrow();
        break;
    }
  }
  _onKeyup(t) {
    switch (this._resetToolsToggler(), t.keyCode) {
      case 39:
        this.slide();
        break;
      case 37:
        this.slide("left");
        break;
      case 27:
        this.close();
        break;
      case 36:
        this.slide("first");
        break;
      case 35:
        this.slide("last");
        break;
      case 38:
        this.zoomIn();
        break;
      case 40:
        this.zoomOut();
        break;
    }
  }
  _focusFullscreenBtn() {
    setTimeout(() => {
      this._fullscreenBtn.focus();
    }, 100);
  }
  _focusRightArrow() {
    this._rightArrow.focus();
  }
  _moveImg(t) {
    if (this._multitouch || this._zoom !== 1 || t !== this.currentImg || this._images.length <= 1)
      return;
    const e = this._positionX - this._originalPositionX;
    e > 0 ? this.slide("left") : e < 0 && this.slide();
  }
  _checkDoubleTap(t) {
    clearTimeout(this._doubleTapTimer);
    const i = (/* @__PURE__ */ new Date()).getTime() - this._tapTime;
    this._tapCounter > 0 && i < 500 ? (this._onDoubleClick(t), this._doubleTapTimer = setTimeout(() => {
      this._tapTime = (/* @__PURE__ */ new Date()).getTime(), this._tapCounter = 0;
    }, 300)) : (this._tapCounter++, this._tapTime = (/* @__PURE__ */ new Date()).getTime());
  }
  _resetDoubleTap() {
    this._tapTime = 0, this._tapCounter = 0, clearTimeout(this._doubleTapTimer);
  }
  _onDoubleClick(t) {
    this._multitouch || (t.touches || this._setNewPositionOnZoomIn(t), this._zoom !== 1 ? this._restoreDefaultZoom() : this.zoomIn());
  }
  _onZoom(t) {
    if (t.deltaY > 0)
      this.zoomOut();
    else {
      if (this._zoom >= 3)
        return;
      this._setNewPositionOnZoomIn(t), this.zoomIn();
    }
  }
  _onBackdropClick(t) {
    this._resetToolsToggler(), t.target.tagName === "DIV" && this.close();
  }
  _setNewPositionOnZoomIn(t) {
    clearTimeout(this._zoomTimer), this._positionX = window.innerWidth / 2 - t.offsetX - 50, this._positionY = window.innerHeight / 2 - t.offsetY - 50, this.currentImg.style.transition = "all 0.5s ease-out", this.currentImg.style.left = `${this._positionX}px`, this.currentImg.style.top = `${this._positionY}px`, this._zoomTimer = setTimeout(() => {
      this.currentImg.style.transition = "none";
    }, 500);
  }
  _resetToolsToggler() {
    this._showTools(), clearTimeout(this._toolsToggleTimer), this._setToolsToggleTimout();
  }
  _setToolsToggleTimout() {
    this._toolsToggleTimer = setTimeout(() => {
      this._hideTools(), clearTimeout(this._toolsToggleTimer);
    }, 4e3);
  }
  _hideTools() {
    h.style(this._galleryToolbar, { opacity: 0 }), h.style(this._leftArrowWrapper, { opacity: 0 }), h.style(this._rightArrowWrapper, { opacity: 0 });
  }
  _showTools() {
    h.style(this._galleryToolbar, { opacity: 1 }), h.style(this._leftArrowWrapper, { opacity: 1 }), h.style(this._rightArrowWrapper, { opacity: 1 });
  }
  _disableScroll() {
    h.addClass(document.body, "overflow-y-hidden relative"), document.documentElement.scrollHeight > document.documentElement.clientHeight && h.addClass(document.body, "md:pr-[17px]");
  }
  _enableScroll() {
    setTimeout(() => {
      h.removeClass(document.body, "overflow-y-hidden relative"), h.removeClass(document.body, "md:pr-[17px]");
    }, 300);
  }
  _animationStart() {
    this._animating = !0, setTimeout(() => {
      this._animating = !1;
    }, 400);
  }
  _restoreDefaultZoom() {
    this._zoom !== 1 && (this._zoom = 1, h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  _restoreDefaultFullscreen() {
    this._fullscreen && this.toggleFullscreen();
  }
  _restoreDefaultPosition() {
    clearTimeout(this._zoomTimer);
    const t = this.currentImg;
    h.style(this.currentImg.parentNode, { left: 0, top: 0 }), h.style(this.currentImg, {
      transition: "all 0.5s ease-out",
      left: 0,
      top: 0
    }), this._calculateImgSize(t), setTimeout(() => {
      h.style(this.currentImg, { transition: "none" });
    }, 500);
  }
  async _triggerEvents(t, e) {
    c.trigger(this._element, `${t}.te.lightbox`), e && await setTimeout(() => {
      c.trigger(this._element, `${e}.te.lightbox`);
    }, 505);
  }
  static getInstance(t) {
    return y.getData(t, Ei);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static toggle() {
    return function(t) {
      const e = d.closest(
        t.target,
        `${mh}`
      );
      (Xs.getInstance(e) || new Xs(e)).open(t);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, Ei);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new Xs(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
const y0 = {
  isRequired: "This is required",
  isEmail: "Please enter a valid email address",
  isLongerThan: "This field must be longer than {length} characters",
  isShorterThan: "This field must be shorter than {length} characters",
  isChecked: "This is required",
  isPhone: "Please enter a valid phone number",
  isNumber: "Expected value with type Number",
  isString: "Expected value with type String",
  isBoolean: "Expected value with type Boolean",
  isDate: "Please enter a valid date",
  is12hFormat: "Please enter a valid time in 12h format",
  is24hFormat: "Please enter a valid time in 24h format"
}, w0 = {
  isRequired: (s, t) => (s == null ? void 0 : s.trim()) ? !0 : t,
  isEmail: (s, t) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s) ? !0 : t,
  isLongerThan: (s, t, e) => s.length > e ? !0 : t.replace("{length}", e),
  isShorterThan: (s, t, e) => s.length < e ? !0 : t.replace("{length}", e),
  isChecked: (s) => s ? !0 : "This is required",
  isPhone: (s, t) => s.length === 9 ? !0 : t,
  isNumber: (s, t) => s && !isNaN(Number(s)) ? !0 : t,
  isString: (s, t) => typeof s == "string" ? !0 : t,
  isBoolean: (s, t) => typeof s == "boolean" ? !0 : t,
  isDate: (s, t) => {
    const e = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
    return s.match(e) ? !0 : t;
  },
  is12hFormat: (s, t) => {
    const e = /^(0?[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/;
    return s.match(e) ? !0 : t;
  },
  is24hFormat: (s, t) => {
    const e = /^(?:[01]\d|2[0-3]):[0-5][0-9]$/;
    return s.match(e) ? !0 : t;
  }
}, bo = "validation", Wo = "te.validation", un = `.${Wo}`, gh = "data-te-validate", ws = "data-te-validated", ks = "data-te-validation-state", xs = "data-te-validation-feedback", vo = "data-te-valid-feedback", Os = "data-te-invalid-feedback", Dl = "data-te-validation-ruleset", k0 = "data-te-submit-btn-ref", x0 = `[${gh}]`, O0 = "[data-te-input-notch-ref] div", S0 = `[${k0}]`, I0 = `validated${un}`, D0 = `valid${un}`, $0 = `invalid${un}`, L0 = `changed${un}`, N0 = {
  validFeedback: "string",
  invalidFeedback: "string",
  disableFeedback: "boolean",
  customRules: "object",
  customErrorMessages: "object",
  activeValidation: "boolean",
  submitCallback: "(function|null)"
}, $l = {
  validFeedback: "Looks good!",
  invalidFeedback: "Something is wrong!",
  disableFeedback: !1,
  customRules: {},
  customErrorMessages: {},
  activeValidation: !1,
  submitCallback: null
}, M0 = {
  // default notch
  notchLeadingValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[-1px_0_0_#14a44d,_0_1px_0_0_#14a44d,_0_-1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchMiddleValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchTrailingValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[1px_0_0_#14a44d,_0_-1px_0_0_#14a44d,_0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchLeadingInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  notchMiddleInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  notchTrailingInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  // basic inputs
  basicInputValid: "!border-[#14a44d] focus:!border-[#14a44d] focus:!shadow-[inset_0_0_0_1px_#14a44d]",
  basicInputInvalid: "!border-[#dc4c64] focus:!border-[#dc4c64] focus:!shadow-[inset_0_0_0_1px_#dc4c64]",
  // checkbox
  checkboxValid: "checked:!border-[#14a44d] checked:!bg-[#14a44d] checked:after:!bg-[#14a44d]",
  checkboxInvalid: "checked:!border-[#dc4c64] checked:!bg-[#dc4c64] checked:after:!bg-[#dc4c64]",
  radioValid: "checked:!border-[#14a44d] checked:after:!bg-[#14a44d]",
  radioInvalid: "checked:!border-[#dc4c64] checked:after:!bg-[#dc4c64]",
  // labels
  labelValid: "!text-[#14a44d]",
  labelInvalid: "!text-[#dc4c64]",
  // feedback
  validFeedback: "absolute top-full left-0 m-1 w-auto text-sm text-[#14a44d] animate-[fade-in_0.3s_both]",
  invalidFeedback: "absolute top-full left-0 m-1 w-auto text-sm text-[#dc4c64] animate-[fade-in_0.3s_both]",
  // element validated
  elementValidated: "mb-8"
}, R0 = {
  notchLeadingValid: "string",
  notchMiddleValid: "string",
  notchTrailingValid: "string",
  notchLeadingInvalid: "string",
  notchMiddleInvalid: "string",
  notchTrailingInvalid: "string",
  basicInputValid: "string",
  basicInputInvalid: "string",
  checkboxValid: "string",
  checkboxInvalid: "string",
  radioValid: "string",
  radioInvalid: "string",
  labelValid: "string",
  labelInvalid: "string",
  validFeedback: "string",
  invalidFeedback: "string",
  elementValidated: "string"
};
class bh extends gt {
  constructor(t, e, i) {
    super(t), this._element = t, this._element && y.setData(t, Wo, this), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._isValid = !0, this._shouldApplyInputEvents = !0, this._submitCallback = null, this._errorMessages = {
      ...y0,
      ...this._config.customErrorMessages
    }, this._validationElements = this._getValidationElements(), this._validationElements.forEach(({ element: n, input: o }) => {
      this._createFeedbackWrapper(n, o);
    }), this._validationObserver = this._watchForValidationChanges(), this._validationObserver.observe(this._element, { attributes: !0 }), this._submitButton = null, this._handleSubmitButton(), this._validationResult = [];
  }
  // Getters
  static get DefaultType() {
    return N0;
  }
  static get Default() {
    return $l;
  }
  static get NAME() {
    return bo;
  }
  // Public
  dispose() {
    var t;
    (t = this._validationObserver) == null || t.disconnect(), this._validationObserver = null, this._submitCallback = null, this._element.removeAttribute(ws), this._removeValidationTraces(), this._validationResult = [], this._submitButton && c.off(this._submitButton, "click"), this._config.activeValidation && (this._validationElements.forEach((e) => {
      const { input: i } = e;
      c.off(i, "input");
    }), this._shouldApplyInputEvents = !0);
  }
  // Private
  _removeValidationTraces() {
    this._removeFeedbackWrapper(), this._validationElements.forEach(({ element: t, classes: e, initialHTML: i }) => {
      t.className = e, t.innerHTML = i, t.removeAttribute(ks), t.removeAttribute(Os), t.removeAttribute(vo);
    }), this._validationElements = [];
  }
  _getValidationElements() {
    return d.find(
      x0,
      this._element
    ).map((e) => {
      const i = d.findOne("input", e) || d.findOne("textarea", e);
      return {
        id: i.name || i.id || rt("validation-"),
        element: e,
        type: e.getAttribute(gh),
        input: i,
        validFeedback: e.getAttribute(vo),
        invalidFeedback: e.getAttribute(Os),
        classes: e.className,
        initialHTML: e.innerHTML,
        ruleset: e.getAttribute(Dl)
      };
    });
  }
  _createFeedbackWrapper(t, e) {
    if (t.querySelectorAll(`[${xs}]`).length > 0)
      return;
    const i = document.createElement("span");
    i.setAttribute(xs, ""), e.parentNode.appendChild(i);
  }
  _removeFeedbackWrapper() {
    d.find(
      `[${xs}]`,
      this._element
    ).forEach((e) => {
      e.remove();
    });
  }
  _watchForValidationChanges() {
    return new MutationObserver((e) => {
      e.forEach((i) => {
        const { attributeName: n } = i;
        n === ws && (this._handleValidation(), this._config.activeValidation && this._shouldApplyInputEvents && this._applyInputEvents());
      });
    });
  }
  _handleValidation() {
    this._element.getAttribute(ws) && (this._validationResult = [], this._isValid = !0, this._validationElements.forEach(
      (t) => this._validateSingleElement(t)
    ), this._emitEvents(this._isValid), this._submitCallback && this._submitCallback(this._isValid));
  }
  _validateSingleElement(t) {
    var p;
    const { element: e, type: i, input: n, ruleset: o, id: r } = t;
    o && this._validateByRuleset(t);
    const a = e.getAttribute(ks);
    if (a !== "valid" && a !== "invalid")
      return;
    const l = a.replace(
      a.charAt(0),
      a.charAt(0).toUpperCase()
    );
    i === "input" && this._restyleNotches(e, l), i === "basic" && this._restyleBasicInputs(n, l), (i === "checkbox" || i === "radio") && this._restyleCheckboxes(n, l, i), this._restyleLabels(e, l), a === "invalid" && (this._isValid = !1), this._config.disableFeedback || this._applyFeedback(e, a), c.trigger(this._element, L0, {
      value: {
        name: r,
        result: a,
        validation: (p = this._validationResult[r]) == null ? void 0 : p.validation
      }
    });
  }
  _validateByRuleset({ element: t, type: e, invalidFeedback: i, input: n, id: o }) {
    const r = this._getRuleset(t);
    if (!r.length)
      return;
    const a = e === "checkbox" || e === "radio" ? n.checked : n.value;
    let l = "", p = [];
    for (const u of r) {
      const _ = u.callback(
        a,
        this._errorMessages[u.name] || this._config.invalidFeedback,
        u.parameter
      );
      p.push({
        result: _ === !0,
        name: u.name,
        fullName: u.fullName
      }), typeof _ == "string" && !l && (l = _);
    }
    if (this._validationResult[o] = { element: t, validation: p }, !l) {
      t.setAttribute(ks, "valid");
      return;
    }
    t.setAttribute(ks, "invalid"), i || t.setAttribute(Os, l);
  }
  _handleInputChange(t) {
    this._validateSingleElement(t);
  }
  _getRuleset(t) {
    const i = t.getAttribute(Dl).split("|");
    let n = [];
    const o = {
      ...w0,
      ...this._config.customRules
    };
    return i.forEach((r) => {
      const a = this._getRuleData(r, o);
      a.callback ? n.push(a) : console.warn(`Rule ${r} does not exist`);
    }), n;
  }
  _getRuleData(t, e) {
    const i = t.split("(");
    return {
      callback: e[i[0]],
      parameter: i[1] ? i[1].split(")")[0] : null,
      name: i[0],
      fullName: t
    };
  }
  _applyFeedback(t, e) {
    const i = d.findOne(
      `[${xs}]`,
      t
    ), n = t.getAttribute(vo) || this._config.validFeedback, o = t.getAttribute(Os) || this._config.invalidFeedback;
    h.addClass(t, this._classes.elementValidated), i.textContent = e === "valid" ? n : o, i.className = this._classes[e === "valid" ? "validFeedback" : "invalidFeedback"];
  }
  _restyleCheckboxes(t, e, i) {
    h.removeClass(t, this._classes.checkboxValid), h.removeClass(t, this._classes.checkboxInvalid), h.addClass(t, this._classes[`${i}${e}`]);
  }
  _restyleBasicInputs(t, e) {
    h.removeClass(t, this._classes.basicInputValid), h.removeClass(t, this._classes.basicInputInvalid), h.addClass(t, this._classes[`basicInput${e}`]);
  }
  _restyleNotches(t, e) {
    d.find(O0, t).forEach((n, o) => {
      let r = o === 0 ? "notchLeading" : o === 1 ? "notchMiddle" : "notchTrailing";
      n.className = "", h.addClass(n, Wc[r]), r += e, h.addClass(n, this._classes[r]);
    });
  }
  _restyleLabels(t, e) {
    const i = d.find("label", t);
    i.length && i.forEach((n) => {
      h.removeClass(n, this._classes.labelValid), h.removeClass(n, this._classes.labelInvalid), h.addClass(n, this._classes[`label${e}`]);
    });
  }
  _emitEvents(t) {
    if (c.trigger(this._element, I0), t) {
      c.trigger(this._element, D0, {
        value: this._validationResult
      });
      return;
    }
    c.trigger(this._element, $0, {
      value: this._validationResult
    });
  }
  _applyInputEvents() {
    this._validationElements.forEach((t) => {
      const { input: e } = t;
      c.on(
        e,
        "input",
        () => this._handleInputChange(t)
      );
    }), this._shouldApplyInputEvents = !1;
  }
  _handleSubmitButton() {
    this._submitButton = d.findOne(
      S0,
      this._element
    ), this._submitButton && c.on(
      this._submitButton,
      "click",
      (t) => this._handleSubmitButtonClick(t)
    );
  }
  _handleSubmitButtonClick(t) {
    if (this._element.setAttribute(ws, !0), this._config.submitCallback) {
      this._submitCallback = (e) => this._config.submitCallback(t, e);
      return;
    }
  }
  _getConfig(t) {
    return t = {
      ...$l,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, I(bo, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...M0,
      ...e,
      ...t
    }, I(bo, t, R0), t;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Wo);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const e = bh.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
class Ki {
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection({ x: t, y: e }) {
    return {
      x: {
        direction: t < 0 ? "left" : "right",
        value: Math.abs(t)
      },
      y: {
        direction: e < 0 ? "up" : "down",
        value: Math.abs(e)
      }
    };
  }
  _getOrigin({ x: t, y: e }, { x: i, y: n }) {
    return {
      x: t - i,
      y: e - n
    };
  }
  _getDistanceBetweenTwoPoints(t, e, i, n) {
    return Math.hypot(e - t, n - i);
  }
  _getMidPoint({ x1: t, x2: e, y1: i, y2: n }) {
    return {
      x: (t + e) / 2,
      y: (i + n) / 2
    };
  }
  _getVectorLength({ x1: t, x2: e, y1: i, y2: n }) {
    return Math.sqrt((e - t) ** 2 + (n - i) ** 2);
  }
  _getRightMostTouch(t) {
    let e = null;
    const i = Number.MIN_VALUE;
    return t.forEach((n) => {
      n.clientX > i && (e = n);
    }), e;
  }
  _getAngle(t, e, i, n) {
    return Math.atan2(n - e, i - t);
  }
  _getAngularDistance(t, e) {
    return e - t;
  }
  _getCenterXY({ x1: t, x2: e, y1: i, y2: n }) {
    return {
      x: t + (e - t) / 2,
      y: i + (n - i) / 2
    };
  }
  _getPinchTouchOrigin(t) {
    const [e, i] = t, n = {
      x1: e.clientX,
      x2: i.clientX,
      y1: e.clientY,
      y2: i.clientY
    };
    return [this._getVectorLength(n), this._getCenterXY(n)];
  }
  _getPosition({ x1: t, x2: e, y1: i, y2: n }) {
    return { x1: t, x2: e, y1: i, y2: n };
  }
}
const To = "press", P0 = "pressup", B0 = {
  time: "number",
  pointers: "number"
}, H0 = {
  time: 250,
  pointers: 1
};
class V0 extends Ki {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._timer = null;
  }
  // Getters
  static get NAME() {
    return To;
  }
  handleTouchStart(t) {
    const { time: e, pointers: i } = this._options;
    t.touches.length === i && (this._timer = setTimeout(() => {
      c.trigger(this._element, To, { touch: t, time: e }), c.trigger(this._element, P0, { touch: t });
    }, e));
  }
  handleTouchEnd() {
    clearTimeout(this._timer);
  }
  _getConfig(t) {
    const e = {
      ...H0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(To, e, B0), e;
  }
}
const W0 = "swipe", F0 = {
  threshold: "number",
  direction: "string"
}, Y0 = {
  threshold: 10,
  direction: "all"
};
class j0 {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = this._getConfig(e);
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      c.trigger(this._element, `swipe${r}`, { touch: t }), c.trigger(this._element, "swipe", { touch: t, direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (c.trigger(this._element, `swipe${n[o].direction}`, {
      touch: t
    }), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
  _getConfig(t) {
    const e = {
      ...Y0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(W0, e, F0), e;
  }
}
const Gt = "pan", K0 = `${Gt}start`, z0 = `${Gt}end`, U0 = `${Gt}move`, X0 = "left", G0 = "right", q0 = {
  threshold: "number",
  direction: "string",
  pointers: "number"
}, Z0 = {
  threshold: 20,
  direction: "all",
  pointers: 1
};
class Q0 extends Ki {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._startTouch = null;
  }
  // Getters
  static get NAME() {
    return Gt;
  }
  handleTouchStart(t) {
    this._startTouch = this._getCoordinates(t), this._movedTouch = t, c.trigger(this._element, K0, { touch: t });
  }
  handleTouchMove(t) {
    t.type === "touchmove" && t.preventDefault();
    const { threshold: e, direction: i } = this._options, n = this._getCoordinates(t), o = this._getCoordinates(this._movedTouch), r = this._getOrigin(n, this._startTouch), a = this._getOrigin(n, o), l = this._getDirection(r), p = this._getDirection(a), { x: u, y: _ } = l;
    if (i === "all" && (_.value > e || u.value > e)) {
      const g = _.value > u.value ? _.direction : u.direction;
      c.trigger(this._element, `${Gt}${g}`, { touch: t }), c.trigger(this._element, Gt, {
        ...a,
        touch: t
      });
    }
    const f = i === X0 || i === G0 ? "x" : "y";
    p[f].direction === i && l[f].value > e && c.trigger(this._element, `${Gt}${i}`, {
      touch: t,
      [f]: n[f] - o[f]
    }), this._movedTouch = t, c.trigger(this._element, U0, { touch: t });
  }
  handleTouchEnd(t) {
    t.type === "touchend" && t.preventDefault(), this._movedTouch = null, this._startTouch = null, c.trigger(this._element, z0, { touch: t });
  }
  _getConfig(t) {
    const e = {
      ...Z0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Gt, e, q0), e;
  }
}
const We = "pinch", J0 = `${We}end`, tE = `${We}start`, eE = `${We}move`, iE = {
  threshold: "number",
  pointers: "number"
}, sE = {
  threshold: 10,
  pointers: 2
};
class nE extends Ki {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._startTouch = null, this._origin = null, this._touch = null, this._math = null, this._ratio = null;
  }
  // Getters
  static get NAME() {
    return We;
  }
  get isNumber() {
    return typeof this._startTouch == "number" && typeof this._touch == "number" && // eslint-disable-next-line no-restricted-globals
    !isNaN(this._startTouch) && // eslint-disable-next-line no-restricted-globals
    !isNaN(this._touch);
  }
  handleTouchStart(t) {
    if (t.touches.length !== this._options.pointers)
      return;
    t.type === "touchstart" && t.preventDefault();
    const [e, i] = this._getPinchTouchOrigin(t.touches);
    this._touch = e, this._origin = i, this._startTouch = this._touch, c.trigger(this._element, tE, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    });
  }
  handleTouchMove(t) {
    const { threshold: e, pointers: i } = this._options;
    t.touches.length === i && (t.type === "touchmove" && t.preventDefault(), this._touch = this._getPinchTouchOrigin(t.touches)[0], this._ratio = this._touch / this._startTouch, this.isNumber && (this._origin.x > e || this._origin.y > e) && (this._startTouch = this._touch, c.trigger(this._element, We, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    }), c.trigger(this._element, eE, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    })));
  }
  handleTouchEnd(t) {
    this.isNumber && (this._startTouch = null, c.trigger(this._element, J0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    }));
  }
  _getConfig(t) {
    const e = {
      ...sE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(We, e, iE), e;
  }
}
const Eo = "tap", oE = {
  interval: "number",
  time: "number",
  taps: "number",
  pointers: "number"
}, rE = {
  interval: 500,
  time: 250,
  taps: 1,
  pointers: 1
};
class aE extends Ki {
  constructor(t, e) {
    super(), this._element = t, this._options = this._getConfig(e), this._timer = null, this._tapCount = 0;
  }
  // Getters
  static get NAME() {
    return Eo;
  }
  handleTouchStart(t) {
    const { x: e, y: i } = this._getCoordinates(t), { interval: n, taps: o, pointers: r } = this._options;
    return t.touches.length === r && (this._tapCount += 1, this._tapCount === 1 && (this._timer = setTimeout(() => {
      this._tapCount = 0;
    }, n)), this._tapCount === o && (clearTimeout(this._timer), this._tapCount = 0, c.trigger(this._element, Eo, {
      touch: t,
      origin: {
        x: e,
        y: i
      }
    }))), t;
  }
  handleTouchEnd() {
  }
  handleTouchMove() {
  }
  _getConfig(t) {
    const e = {
      ...rE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Eo, e, oE), e;
  }
}
const Li = "rotate", lE = `${Li}end`, cE = `${Li}start`, hE = {
  angle: "number",
  pointers: "number"
}, dE = {
  angle: 0,
  pointers: 2
};
class uE extends Ki {
  constructor(t, e) {
    super(), this._element = t, this._options = this._getConfig(e), this._origin = {};
  }
  // Getters
  static get NAME() {
    return Li;
  }
  handleTouchStart(t) {
    t.type === "touchstart" && t.preventDefault(), !(t.touches.length < 2) && (this._startTouch = t, this._origin = {}, c.trigger(this._element, cE, { touch: t }));
  }
  handleTouchMove(t) {
    t.type === "touchmove" && t.preventDefault();
    let e, i;
    const n = t.touches;
    if (n.length === 1 && this._options.pointers === 1) {
      const { left: o, top: r, width: a, height: l } = this._element.getBoundingClientRect();
      e = {
        x: o + a / 2,
        y: r + l / 2
      }, i = n[0];
    } else if (t.touches.length === 2 && this._options.pointers === 2) {
      const [o, r] = t.touches, a = {
        x1: r.clientX,
        x2: o.clientX,
        y1: r.clientY,
        y2: o.clientY
      };
      e = this._getMidPoint(a), i = this._getRightMostTouch(t.touches);
    } else
      return;
    this.currentAngle = this._getAngle(
      e.x,
      e.y,
      i.clientX,
      i.clientY
    ), this._origin.initialAngle ? (this._origin.change = this._getAngularDistance(
      this._origin.previousAngle,
      this.currentAngle
    ), this._origin.distance += this._origin.change) : (this._origin.initialAngle = this._origin.previousAngle = this.currentAngle, this._origin.distance = this._origin.change = 0), this._origin.previousAngle = this.currentAngle, this.rotate = {
      currentAngle: this.currentAngle,
      distance: this._origin.distance,
      change: this._origin.change
    }, c.trigger(this._element, Li, { ...this.rotate, touch: t });
  }
  handleTouchEnd(t) {
    t.type === "touchend" && t.preventDefault(), this._origin = {}, c.trigger(this._element, lE, { touch: t });
  }
  _getConfig(t) {
    const e = {
      ...dE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Li, e, hE), e;
  }
}
const Fo = "touch", Co = `te.${Fo}`, pE = {
  event: "string"
}, _E = {
  event: "swipe"
};
class vh {
  constructor(t, e = {}) {
    this._element = t, this._options = this._getConfig(e), this._event = this._options.event, this.swipe = this._event === "swipe" ? new j0(t, e) : null, this.press = this._event === "press" ? new V0(t, e) : null, this.pan = this._event === "pan" ? new Q0(t, e) : null, this.pinch = this._event === "pinch" ? new nE(t, e) : null, this.tap = this._event === "tap" ? new aE(t, e) : null, this.rotate = this._event === "rotate" ? new uE(t, e) : null, this._touchStartHandler = (i) => this._handleTouchStart(i), this._touchMoveHandler = (i) => this._handleTouchMove(i), this._touchEndHandler = (i) => this._handleTouchEnd(i), c.on(this._element, "touchstart", this._touchStartHandler), c.on(this._element, "touchmove", this._touchMoveHandler), c.on(this._element, "touchend", this._touchEndHandler), this._element && y.setData(t, Co, this);
  }
  // Getters
  static get NAME() {
    return Fo;
  }
  dispose() {
    c.off(this._element, "touchstart", this._touchStartHandler), c.off(this._element, "touchmove", this._touchMoveHandler), c.off(this._element, "touchend", this._touchEndHandler), this.swipe = null, this.press = null, this.pan = null, this.pinch = null, this.tap = null, this.rotate = null;
  }
  _getConfig(t) {
    const e = {
      ..._E,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Fo, e, pE), e;
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove && this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Co);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose/.test(t)) && (e || (e = new vh(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        return e[t];
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Co);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Yo = "smoothScroll", Ci = `te.${Yo}`, pr = `.${Ci}`, fE = {
  container: "string",
  offset: "number",
  easing: "string",
  duration: "number"
}, mE = {
  container: "body",
  offset: 0,
  easing: "linear",
  duration: 500
}, gE = `scrollStart${pr}`, bE = `scrollEnd${pr}`, vE = `scrollCancel${pr}`;
class Th {
  constructor(t, e = {}) {
    this._element = t, this._options = this._getConfig(e), this._href = this._element.getAttribute("href"), this.isCancel = !1, this._element && (y.setData(t, Ci, this), this._setup());
  }
  // getters
  static get NAME() {
    return Yo;
  }
  get isWindow() {
    return this._options.container === "body";
  }
  get containerToScroll() {
    return this.isWindow ? document.documentElement : d.findOne(
      this._options.container,
      document.documentElement
    );
  }
  get elFromHrefExist() {
    return !!d.findOne(this._href, this.containerToScroll);
  }
  get offsetFromEl() {
    const t = this.containerToScroll.scrollTop, e = d.findOne(this._href, this.containerToScroll);
    if (this.isWindow)
      return h.offset(e).top - this._options.offset + t;
    const i = e.getBoundingClientRect().y, n = this.containerToScroll.getBoundingClientRect().y;
    return i - n - this._options.offset + t;
  }
  get easingFunction() {
    const t = this._options.easing, e = `_motion${t[0].toUpperCase()}${t.slice(1)}`;
    return this[e] ? this[e] : this._motionLinear;
  }
  // public
  dispose() {
    c.off(this._element, "click", this._handleClick), y.removeData(this._element, Ci), this._element = null;
  }
  cancelScroll() {
    this.isCancel = !0;
  }
  // private
  _getConfig(t) {
    const e = {
      ...mE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Yo, e, fE), e;
  }
  _inViewport() {
    if (this.isWindow)
      return !0;
    const t = this.containerToScroll.getBoundingClientRect();
    return t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  _setup() {
    const t = typeof this._href < "u", e = this._href.includes("#");
    t && e && this.elFromHrefExist && (this._scrollOnClickEvent(), this._preventNativeScroll());
  }
  _scrollOnClickEvent() {
    c.on(this._element, "click", (t) => {
      this._handleClick(t);
    });
  }
  _handleClick(t) {
    t.preventDefault(), this.isCancel = !1, c.trigger(this._element, gE);
    const e = this.containerToScroll, i = this.containerToScroll.scrollTop, n = this.offsetFromEl, o = 0, r = 1 / this._options.duration, a = 4.25, l = this.easingFunction;
    this._inViewport() ? this._scrollOnNextTick(
      e,
      i,
      n,
      o,
      r,
      a,
      l
    ) : (this._scrollOnNextTick(
      document.documentElement,
      document.documentElement.scrollTop,
      this.containerToScroll.offsetTop,
      o,
      r,
      a,
      l
    ), setTimeout(() => {
      this._scrollOnNextTick(
        e,
        i,
        n,
        o,
        r,
        a,
        l
      ), this.isCancel = !1;
    }, this._options.duration));
  }
  _scrollOnNextTick(t, e, i, n, o, r, a) {
    const l = n < 0, p = n > 1, u = o <= 0;
    if (l || p || u || this.isCancel) {
      if (this.isCancel) {
        this.isInViewport && (this.isCancel = !1), c.trigger(this._element, vE);
        return;
      }
      c.trigger(this._element, bE), t.scrollTop = i;
      return;
    }
    t.scrollTo({
      top: e - (e - i) * a(n)
    }), n += o * r, setTimeout(() => {
      this._scrollOnNextTick(
        t,
        e,
        i,
        n,
        o,
        r,
        a
      );
    });
  }
  _preventDefault(t) {
    t.preventDefault();
  }
  _preventNativeScroll() {
    let t = !1;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: () => t = !0
        })
      );
    } catch (n) {
      this._scrollError = n;
    }
    const e = t ? { passive: !1 } : !1, i = "onwheel" in D("div") ? "wheel" : "mousewheel";
    this.isWindow && (this._deleteScrollOnStart(e, i), this._addScrollOnEnd(e, i), this._addScrollOnCancel(e, i));
  }
  _deleteScrollOnStart(t, e) {
    c.on(this._element, "scrollStart.te.smoothScroll", () => {
      window.addEventListener(e, this._preventDefault, t), window.addEventListener("touchmove", this._preventDefault, t);
    });
  }
  _addScrollOnEnd(t, e) {
    c.on(this._element, "scrollEnd.te.smoothScroll", () => {
      window.removeEventListener(e, this._preventDefault, t), window.removeEventListener("touchmove", this._preventDefault, t);
    });
  }
  _addScrollOnCancel(t, e) {
    c.on(this._element, "scrollCancel.te.smoothScroll", () => {
      window.removeEventListener(e, this._preventDefault, t), window.removeEventListener("touchmove", this._preventDefault, t);
    });
  }
  // Motions
  // Linear
  _motionLinear(t) {
    return t;
  }
  // Ease-In
  _motionEaseInQuad(t) {
    return t * t;
  }
  _motionEaseInCubic(t) {
    return t * t * t;
  }
  _motionEaseInQuart(t) {
    return t * t * t * t;
  }
  _motionEaseInQuint(t) {
    return t * t * t * t * t;
  }
  // Ease-In-Out
  _motionEaseInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  _motionEaseInOutCubic(t) {
    return t /= 0.5, t < 1 ? t * t * t / 2 : (t -= 2, (t * t * t + 2) / 2);
  }
  _motionEaseInOutQuart(t) {
    return t /= 0.5, t < 1 ? 0.5 * t * t * t * t : (t -= 2, -(t * t * t * t - 2) / 2);
  }
  _motionEaseInOutQuint(t) {
    return t /= 0.5, t < 1 ? t * t * t * t * t / 2 : (t -= 2, (t * t * t * t * t + 2) / 2);
  }
  // Ease-Out
  _motionEaseOutQuad(t) {
    return -t * (t - 2);
  }
  _motionEaseOutCubic(t) {
    return t--, t * t * t + 1;
  }
  _motionEaseOutQuart(t) {
    return t--, -(t * t * t * t - 1);
  }
  _motionEaseOutQuint(t) {
    return t--, t * t * t * t * t + 1;
  }
  // static
  static getInstance(t) {
    return y.getData(t, Ci);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Ci);
      const i = typeof t == "object" && t;
      if (e || (e = new Th(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const Ll = "lazyLoad", Ss = "te.lazyLoad", TE = "[data-te-lazy-load-init]", Nl = "data-te-lazy-load", EE = "onLoad.te.lazy", CE = "onError.te.lazy", Ml = ["img", "video"], AE = {
  lazySrc: "(string|null)",
  lazyDelay: "number",
  lazyAnimation: "string",
  lazyOffset: "number",
  lazyPlaceholder: "(string|undefined)",
  lazyError: "(string|undefined)"
}, yE = {
  lazySrc: null,
  lazyDelay: 500,
  lazyAnimation: "[fade-in_1s_ease-in-out]",
  lazyOffset: 0
};
class jo {
  constructor(t, e) {
    this._element = t, this._element && y.setData(t, Ss, this), this._options = this._getConfig(e), this.scrollHandler = this._scrollHandler.bind(this), this.errorHandler = this._setElementError.bind(this), this._childrenInstances = null, this._init();
  }
  // Getters
  static get NAME() {
    return Ll;
  }
  get offsetValues() {
    return this._element.getBoundingClientRect();
  }
  get inViewport() {
    if (this.parent) {
      const t = this.parent.getBoundingClientRect();
      return t.y > 0 && t.y < window.innerHeight && this.offsetValues.y >= t.y && this.offsetValues.y <= t.y + t.height && this.offsetValues.y <= window.innerHeight;
    }
    return this.offsetValues.top + this._options.lazyOffset <= window.innerHeight && this.offsetValues.bottom >= 0;
  }
  get parent() {
    const [t] = d.parents(
      this._element,
      TE
    );
    return t;
  }
  get node() {
    return this._element.nodeName;
  }
  get isContainer() {
    return !d.matches(this._element, Ml);
  }
  // Public
  dispose() {
    y.removeData(this._element, Ss), this._animation && (this._animation.dispose(), this._animation = null), this._element = null, this._childrenInstances && this._childrenInstances.forEach((t) => t.dispose());
  }
  // Private
  _init() {
    if (this._element.setAttribute(Nl, ""), this.isContainer) {
      this._setupContainer();
      return;
    }
    this._setupElement();
  }
  _setupElement() {
    c.one(this._element, "error", this.errorHandler), this._options.lazyPlaceholder && this._setPlaceholder(), this._animation = new hr(this._element, {
      animation: `${this._options.lazyAnimation}`,
      animationStart: "onLoad"
    }), c.one(this._element, "load", () => this._scrollHandler()), this.parent && c.on(this.parent, "scroll", this.scrollHandler), c.on(window, "scroll", this.scrollHandler);
  }
  _scrollHandler() {
    this.inViewport && (this._timeout = setTimeout(() => {
      this._setSrc(), this._element.removeAttribute(Nl), this._removeAttrs(), this._animation.init();
    }, this._options.lazyDelay), this.parent && c.off(this.parent, "scroll", this.scrollHandler), c.off(window, "scroll", this.scrollHandler));
  }
  _setElementError() {
    !this._options.lazyError || this._element.src === this._options.lazyError ? this._element.alt = "404 not found" : this._element.setAttribute("src", this._options.lazyError), c.trigger(this._element, CE);
  }
  _setSrc() {
    this._element.setAttribute("src", this._options.lazySrc), c.trigger(this._element, EE);
  }
  _setPlaceholder() {
    this.node === "IMG" ? this._element.setAttribute("src", this._options.lazyPlaceholder) : this.node === "VIDEO" && this._element.setAttribute("poster", this._options.lazyPlaceholder);
  }
  _removeAttrs() {
    ["src", "delay", "animation", "placeholder", "offset", "error"].forEach(
      (t) => {
        h.removeDataAttribute(this._element, `lazy-${t}`);
      }
    );
  }
  _setupContainer() {
    this._childrenInstances = d.children(
      this._element,
      Ml
    ).map((t) => new jo(t, this._options));
  }
  _getConfig(t) {
    const e = {
      ...yE,
      ...t,
      ...h.getDataAttributes(this._element)
    };
    return I(Ll, e, AE), e;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Ss);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Ss);
      const i = typeof t == "object" && t;
      if (e || (e = new jo(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const Rl = "clipboard", Ai = "te.clipboard", wE = `.${Ai}`, kE = {
  clipboardTarget: null
}, xE = {
  clipboardTarget: "null|string"
}, OE = `copy${wE}`;
class Eh {
  constructor(t, e = {}) {
    this._element = t, this._options = e, this._element && (y.setData(t, Ai, this), this._initCopy = this._initCopy.bind(this), this._setup());
  }
  // Getters
  static get NAME() {
    return Rl;
  }
  get options() {
    const t = {
      ...kE,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return I(Rl, t, xE), t;
  }
  get clipboardTarget() {
    return d.findOne(this.options.clipboardTarget);
  }
  get copyText() {
    const t = this.clipboardTarget.hasAttribute(
      "data-te-clipboard-text"
    ), e = this.clipboardTarget.value, i = this.clipboardTarget.textContent;
    return t ? this.clipboardTarget.getAttribute("data-te-clipboard-text") : e || i;
  }
  // Public
  dispose() {
    c.off(this._element, "click", this._initCopy), y.removeData(this._element, Ai), this._element = null;
  }
  // Private
  _setup() {
    c.on(this._element, "click", this._initCopy);
  }
  _initCopy() {
    const t = this._createNewInput();
    document.body.appendChild(t), this._selectInput(t), c.trigger(this._element, OE, {
      copyText: this.copyText
    }), t.remove();
  }
  _createNewInput() {
    const t = this.clipboardTarget.tagName === "TEXTAREA" ? "textarea" : "input", e = D(t);
    return e.value = this.copyText, h.addClass(e, "-left-[9999px] absolute"), e;
  }
  _selectInput(t) {
    t.select(), t.focus(), t.setSelectionRange(0, 99999), document.execCommand("copy");
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Ai);
      const i = typeof t == "object" && t;
      if (e || (e = new Eh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, Ai);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Ko = "infiniteScroll", Is = `te.${Ko}`, SE = {
  infiniteDirection: "y"
}, IE = {
  infiniteDirection: "string"
};
class Ch {
  constructor(t, e) {
    this._element = t, this._element && y.setData(t, Is, this), this._options = this._getConfig(e), this.scrollHandler = this._scrollHandler.bind(this), this._init();
  }
  // Getters
  static get NAME() {
    return Ko;
  }
  get rect() {
    return this._element.getBoundingClientRect();
  }
  get condition() {
    return this._element === window ? Math.abs(
      window.scrollY + window.innerHeight - document.documentElement.scrollHeight
    ) < 1 : this._options.infiniteDirection === "x" ? this.rect.width + this._element.scrollLeft + 10 >= this._element.scrollWidth : Math.ceil(this.rect.height + this._element.scrollTop) >= this._element.scrollHeight;
  }
  // Public
  dispose() {
    c.off(this._element, "scroll", this.scrollHandler), y.removeData(this._element, Is), this._element = null;
  }
  // Private
  _init() {
    c.on(this._element, "scroll", () => this._scrollHandler());
  }
  _scrollHandler() {
    this.condition && c.trigger(this._element, "complete.te.infiniteScroll"), c.off(this._element, "scroll", this.scrollHandler);
  }
  _getConfig(t) {
    const e = {
      ...SE,
      ...this._element !== window ? h.getDataAttributes(this._element) : {},
      ...t
    };
    return I(Ko, e, IE), e;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Is);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Is);
      const i = typeof t == "object" && t;
      if (e || (e = new Ch(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
function DE({ backdropID: s }, t) {
  const e = D("div");
  return h.addClass(
    e,
    `${t.backdrop} ${t.backdropColor}`
  ), e.id = s, e;
}
const Ni = "loadingManagement", Ds = `te.${Ni}`, $E = "[data-te-loading-icon-ref]", LE = "[data-te-loading-text-ref]", NE = `show.te.${Ni}`, ME = {
  backdrop: "(null|boolean)",
  backdropID: "(null|string|number)",
  delay: "(null|number)",
  loader: "(null|string|number)",
  parentSelector: "(null|string)",
  loadingIcon: "boolean",
  loadingText: "boolean",
  scroll: "boolean"
}, RE = {
  backdrop: !0,
  backdropID: null,
  delay: 0,
  loader: "",
  parentSelector: null,
  scroll: !0,
  loadingText: !0,
  loadingIcon: !0
}, PE = {
  loadingSpinner: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center z-40",
  spinnerColor: "text-primary dark:text-primary-400",
  backdrop: "w-full h-full fixed top-0 left-0 bottom-0 right-0 z-30",
  backdropColor: "bg-[rgba(0,0,0,0.4)]"
}, BE = {
  loadingSpinner: "string",
  spinnerColor: "string",
  backdrop: "string",
  backdropColor: "string"
};
class Ah {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && y.setData(t, Ds, this), this._backdropElement = null, this._parentElement = d.findOne(this._options.parentSelector), this._loadingIcon = d.findOne(
      $E,
      this._element
    ), this._loadingText = d.findOne(
      LE,
      this._element
    ), this.init();
  }
  // Getters
  static get NAME() {
    return Ni;
  }
  // Public
  init() {
    const t = this._loadingIcon.cloneNode(!0), e = this._loadingText.cloneNode(!0);
    this._removeElementsOnStart(), setTimeout(() => {
      h.addClass(
        this._element,
        `${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
      ), this._setBackdrop(), this._setLoadingIcon(t), this._setLoadingText(e), this._setScrollOption(), c.trigger(this._element, NE);
    }, this._options.delay);
  }
  dispose() {
    y.removeData(this._element, Ds), h.removeClass(
      this._element,
      `${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
    );
    const t = this._options.delay;
    setTimeout(() => {
      this._removeBackdrop(), this._backdropElement = null, this._element = null, this._options = null;
    }, t);
  }
  // Private
  _setBackdrop() {
    const { backdrop: t } = this._options;
    t && (this._backdropElement = DE(this._options, this._classes), this._parentElement !== null ? (h.addClass(this._element, "absolute"), h.addClass(this._parentElement, "relative"), h.addClass(this._backdropElement, "absolute"), this._parentElement.appendChild(this._backdropElement)) : (h.addClass(this._element, "!fixed"), document.body.appendChild(this._backdropElement), document.body.appendChild(this._element)));
  }
  _removeBackdrop() {
    const { backdrop: t } = this._options;
    t && (this._parentElement !== null ? (h.removeClass(this._element, "absolute"), h.removeClass(this._parentElement, "relative"), this._backdropElement.remove()) : (this._backdropElement.remove(), this._element.remove()));
  }
  _setLoadingIcon(t) {
    if (!this._options.loadingIcon) {
      t.remove();
      return;
    }
    this._element.appendChild(t), t.id = this._options.loader;
  }
  _setLoadingText(t) {
    if (!this._options.loadingText) {
      t.remove();
      return;
    }
    this._element.appendChild(t);
  }
  _removeElementsOnStart() {
    this._element !== null && (this._loadingIcon.remove(), this._loadingText.remove());
  }
  _setScrollOption() {
    if (this._options.scroll) {
      if (this._parentElement === null) {
        h.addClass(document.body, "overflow-auto");
        return;
      }
      h.addClass(this._parentElement, "overflow-auto");
    } else {
      if (this._parentElement === null) {
        h.addClass(document.body, "overflow-hidden");
        return;
      }
      h.addClass(this._parentElement, "overflow-hidden");
    }
  }
  _getConfig(t) {
    const e = {
      ...RE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Ni, e, ME), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...PE,
      ...e,
      ...t
    }, I(Ni, t, BE), t;
  }
  // Static
  static getInstance(t) {
    return y.getData(t, Ds);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = y.getData(this, Ds);
      const i = typeof t == "object" && t;
      if (e || (e = new Ah(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const HE = (s) => {
  const t = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, e = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
  return s.match(t) || s.match(e);
}, VE = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !isNaN(s), WE = (s) => s.getMonth(), FE = (s) => s.getFullYear(), YE = (s) => s.match(/[^(dmy)]{1,}/g), jE = (s, t, e, i) => {
  let n;
  e[0] !== e[1] ? n = e[0] + e[1] : n = e[0];
  const o = new RegExp(`[${n}]`), r = s.split(o), a = t.split(o), l = t.indexOf("mmm") !== -1, p = [];
  for (let b = 0; b < a.length; b++)
    a[b].indexOf("yy") !== -1 && (p[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (p[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (p[2] = { value: r[b], format: a[b] });
  let u;
  t.indexOf("mmmm") !== -1 ? u = i.monthsFull : u = i.monthsShort;
  const _ = Number(p[0].value), f = l ? KE(p[1].value, u) : Number(p[1].value) - 1, g = Number(p[2].value);
  return Tt(_, f, g);
}, KE = (s, t) => t.findIndex((e) => e === s), zE = (s, t, e) => `
  <button type="button" class="${e.pickerIcon}" data-te-datepicker-toggle-button-ref>
    ${s}
  </button>
  <button type="button" class="${e.pickerIcon}" data-te-timepicker-toggle-button-ref>
    ${t}
  </button>
`, UE = (s, t) => `
  <button type="button" class="${t.toggleButton}" data-te-date-timepicker-toggle-ref>
    ${s} 
  </button>
`, Gs = "datetimepicker", yi = `te.${Gs}`, _r = `.${yi}`, yh = "data-te-datepicker-init", wh = "data-te-timepicker-init", XE = "data-te-datepicker-header", GE = "data-te-datepicker-cancel-button-ref", qE = "data-te-datepicker-ok-button-ref", Ao = "data-te-timepicker-wrapper", Pl = "data-te-timepicker-cancel", ZE = "data-te-timepicker-submit", QE = "data-te-timepicker-clear", Bl = "data-te-buttons-timepicker", JE = "data-te-date-timepicker-toggle-ref", tC = "data-te-datepicker-toggle-button-ref", eC = "data-te-timepicker-toggle-button-ref", iC = `[${wh}]`, sC = `[${yh}]`, nC = `[${JE}]`, oC = `[${eC}]`, rC = "[data-te-input-notch-ref]", aC = "[data-te-date-timepicker-toggle-ref]", lC = "[data-te-timepicker-elements-wrapper]", cC = "[data-te-timepicker-clock-wrapper]", hC = `open${_r}`, dC = `close${_r}`, uC = `datetimeChange${_r}`, Hl = "close.te.datepicker", Vl = "input.te.timepicker", Se = D("div"), Wl = {
  inline: !1,
  toggleButton: !0,
  container: "body",
  disabled: !1,
  disablePast: !1,
  disableFuture: !1,
  defaultTime: "",
  defaultDate: "",
  timepicker: {},
  datepicker: {},
  showFormat: !1,
  dateTimepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
  datepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
  timepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`
}, pC = {
  inline: "boolean",
  toggleButton: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  defaultTime: "(string|date|number)",
  defaultDate: "(string|date|number)",
  timepicker: "object",
  datepicker: "object",
  showFormat: "boolean",
  dateTimepickerToggleIconTemplate: "string",
  datepickerToggleIconTemplate: "string",
  timepickerToggleIconTemplate: "string"
}, _C = {
  toggleButton: "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200",
  pickerIcon: "[&>svg]:w-6 [&>svg]:h-6 [&>svg]:mx-auto [&>svg]:pointer-events-none w-1/2 px-1.5 py-[1px] rounded-[10px] min-h-[40px] cursor-pointer outline-none border-none text-white hover:bg-primary-600 dark:hover:bg-neutral-600",
  buttonsContainer: "flex justify-evenly items-end bg-primary dark:bg-zinc-800 dark:data-[te-buttons-timepicker]:bg-zinc-700",
  timepicker: {},
  datepicker: {}
}, fC = {
  toggleButton: "string",
  pickerIcon: "string",
  buttonsContainer: "string",
  timepicker: "object",
  datepicker: "object"
};
class kh {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._timepicker = null, this._datepicker = null, this._dateValue = this._options.defaultDate ? this._options.defaultDate : "", this._timeValue = this._options.defaultTime ? this._options.defaultTime : "", this._isInvalidTimeFormat = !1, this._format = this._options.datepicker.format ? this._options.datepicker.format : "dd/mm/yyyy", this._cancel = !1, this._scrollBar = new Xe(), this._element && y.setData(t, yi, this), this._init();
  }
  // Getters
  static get NAME() {
    return Gs;
  }
  get toggleButton() {
    return d.findOne(nC, this._element);
  }
  get notch() {
    return d.findOne(rC, this._element);
  }
  dispose() {
    c.off(this._element, "click", this._openDatePicker), c.off(this._input, "input", this._handleInput), c.off(this._element, "click"), y.removeData(this._element, yi), this._removeTimePicker(), this._removeDatepicker(), this.toggleButton.remove(), this._options = Wl, this._timepicker = null, this._datepicker = null, this._dateValue = null, this._timeValue = null, this._isInvalidTimeFormat = null;
  }
  update(t = {}) {
    const e = this._getConfig({ ...this._options, ...t });
    this.dispose(), this._options = e, this._init();
  }
  // Private
  _init() {
    this._addDatepicker(), this._addTimePicker(), this._appendToggleButton(), this._listenToToggleClick(), this._listenToUserInput(), this._disableInput(), this._setInitialDefaultInput(), this._applyFormatPlaceholder(), this._options.disablePast && this._handleTimepickerDisablePast(), this._options.disableFuture && this._handleTimepickerDisableFuture();
  }
  _removeDatepicker() {
    const t = this._element.querySelector(sC);
    t && t.remove();
  }
  _addDatepicker() {
    const t = D("div");
    t.id = this._element.id ? `datepicker-${this._element.id}` : rt("datepicker-");
    const e = '<input type="text">';
    t.innerHTML = e, t.setAttribute(yh, ""), this._element.appendChild(t), h.addClass(t, "hidden");
    let i = {
      ...this._options.datepicker,
      container: this._options.container,
      disablePast: this._options.disablePast,
      disableFuture: this._options.disableFuture
    };
    (this._options.inline || this._options.datepicker.inline) && (i = { ...i, inline: !0 }), this._datepicker = new km(t, i, {
      ...this._classes.datepicker
    }), this._datepicker._input.value = this._dateValue;
  }
  _removeTimePicker() {
    const t = this._element.querySelector(iC);
    t && (t.remove(), this._scrollBar.reset());
  }
  _addTimePicker() {
    const t = D("div");
    t.id = this._element.id ? `timepicker-${this._element.id}` : rt("timepicker-");
    const e = '<input type="text">';
    t.innerHTML = e, t.setAttribute(wh, ""), this._element.appendChild(t), h.addClass(t, "hidden");
    let i = {
      ...this._options.timepicker,
      container: this._options.container
    };
    (this._options.inline || this._options.timepicker.inline) && (i = { timepickerOptions: i, inline: !0 }), this._timepicker = new qm(t, i, {
      ...this._classes.timepicker
    }), this._timepicker.input.value = this._timeValue;
  }
  _addIconButtons() {
    if (h.addClass(Se, this._classes.buttonsContainer), Se.innerHTML = zE(
      this._options.datepickerToggleIconTemplate,
      this._options.timepickerToggleIconTemplate,
      this._classes
    ), Se.removeAttribute(Bl), !(this._options.inline || this._options.datepicker.inline)) {
      if (this._scrollBar.hide(), this._datepicker._isOpen)
        d.findOne(
          `[${XE}]`,
          document.body
        ).appendChild(Se);
      else if (this._timepicker._modal && !this._options.timepicker.inline) {
        const t = d.findOne(
          lC,
          document.body
        ), e = d.findOne(
          cC,
          document.body
        );
        Se.setAttribute(Bl, ""), t.insertBefore(Se, e);
      }
    }
  }
  _enableOrDisableToggleButton() {
    this._options.disabled ? (this.toggleButton.disabled = !0, h.addClass(this.toggleButton, "pointer-events-none")) : (this.toggleButton.disabled = !1, h.removeClass(this.toggleButton, "pointer-events-none"));
  }
  _appendToggleButton() {
    this._options.toggleButton && (this._element.insertAdjacentHTML(
      "beforeend",
      UE(
        this._options.dateTimepickerToggleIconTemplate,
        this._classes
      )
    ), this._enableOrDisableToggleButton());
  }
  _applyFormatPlaceholder() {
    this._options.showFormat && (this._input.placeholder = this._format);
  }
  _listenToCancelClick() {
    const t = d.findOne(
      `[${GE}]`,
      document.body
    );
    c.one(t, "mousedown", () => {
      this._cancel = !0, this._scrollBar.reset(), c.off(t, "mousedown");
    });
  }
  _listenToToggleClick() {
    c.on(this._element, "click", aC, (t) => {
      t.preventDefault(), this._openDatePicker();
    });
  }
  _listenToUserInput() {
    c.on(this._input, "input", (t) => {
      this._handleInput(t.target.value);
    });
  }
  _disableInput() {
    this._options.disabled && (this._input.disabled = "true");
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...Wl,
      ...e,
      ...t
    }, I(Gs, t, pC), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ..._C,
      ...e,
      ...t
    }, I(Gs, t, fC), t;
  }
  _handleInput(t) {
    const e = t.split(", "), i = YE(this._format), n = e[0], o = e[1] || "", r = jE(
      n,
      this._format,
      i,
      this._datepicker._options
    );
    e.length === 2 && (VE(r) && HE(o) ? (this._dateValue = n, this._timeValue = o, this._datepicker._input.value = this._dateValue, this._datepicker._activeDate = this._dateValue, this._datepicker._selectedYear = FE(r), this._datepicker._selectedMonth = WE(r), this._datepicker._headerDate = r, this._timepicker.input.value = this._timeValue, this._timepicker._isInvalidTimeFormat = !1) : (this._datepicker._activeDate = /* @__PURE__ */ new Date(), this._datepicker._selectedDate = null, this._datepicker._selectedMonth = null, this._datepicker._selectedYear = null, this._datepicker._headerDate = null, this._datepicker._headerMonth = null, this._datepicker._headerYear = null, this._timepicker._isInvalidTimeFormat = !0));
  }
  _openDatePicker() {
    if (c.trigger(this._element, hC).defaultPrevented)
      return;
    this._datepicker.open(), this._options.inline || this._scrollBar.hide(), (this._options.inline || this._options.datepicker.inline) && this._openDropdownDate(), this._addIconButtons(), this._listenToCancelClick(), this._options.inline && this._datepicker._isOpen && h.addClass(this.toggleButton, "pointer-events-none"), c.one(this._datepicker._element, Hl, () => {
      if (this._dateValue = this._datepicker._input.value, this._updateInputValue(), this._cancel) {
        this._cancel = !1;
        return;
      }
      c.on(this._datepicker.container, "click", (i) => {
        !this._datepicker._selectedDate && i.target.hasAttribute(qE) || this._openTimePicker();
      }), setTimeout(() => {
        d.findOne(
          `[${Ao}]`,
          document.body
        ) || this._scrollBar.reset();
      }, 10), this._options.inline && h.removeClass(this.toggleButton, "pointer-events-none");
    });
    const e = d.findOne(
      oC,
      document.body
    );
    c.on(e, "click", () => {
      this._datepicker.close(), this._scrollBar.hide(), c.trigger(this._datepicker._element, Hl);
    });
  }
  _handleTimepickerDisablePast() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0), c.on(
      this._datepicker._element,
      "dateChange.te.datepicker",
      () => {
        this._datepicker._selectedDate.getTime() === t.getTime() ? this._timepicker.update({ disablePast: !0 }) : this._timepicker.update({ disablePast: !1 });
      }
    );
  }
  _handleTimepickerDisableFuture() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0), c.on(
      this._datepicker._element,
      "dateChange.te.datepicker",
      () => {
        this._datepicker._selectedDate.getTime() === t.getTime() ? this._timepicker.update({ disableFuture: !0 }) : this._timepicker.update({ disableFuture: !1 });
      }
    );
  }
  _handleEscapeKey() {
    c.one(document.body, "keyup", () => {
      setTimeout(() => {
        d.findOne(
          `[${Ao}]`,
          document.body
        ) || this._scrollBar.reset();
      }, 250);
    });
  }
  _handleCancelButton() {
    const t = d.findOne(
      `[${Pl}]`,
      document.body
    );
    c.one(t, "mousedown", () => {
      this._scrollBar.reset();
    });
  }
  _openDropdownDate() {
    const t = this._datepicker._popper;
    t.state.elements.reference = this._input, this._scrollBar.reset();
  }
  _openTimePicker() {
    c.trigger(this._timepicker.elementToggle, "click"), setTimeout(() => {
      if (this._addIconButtons(), (this._options.inline || this._options.timepicker.inline) && this._openDropdownTime(), this._timepicker._modal) {
        const t = d.findOne(
          `[${Pl}]`,
          document.body
        );
        this._handleEscapeKey(), this._handleCancelButton(), c.on(this._timepicker._modal, "click", (e) => {
          (e.target.hasAttribute(Ao) || e.target.hasAttribute(ZE)) && setTimeout(() => {
            this._scrollBar.reset();
          }, 200), e.target.hasAttribute(QE) && c.trigger(
            this._timepicker._element,
            Vl
          ), e.target.hasAttribute(tC) && (c.trigger(t, "click"), setTimeout(() => {
            this._openDatePicker(), this._scrollBar.hide();
          }, 200));
        });
      }
    }), c.one(this._timepicker._element, Vl, () => {
      this._timeValue = this._timepicker.input.value, this._updateInputValue(), c.trigger(this._element, dC);
    });
  }
  _openDropdownTime() {
    const t = this._timepicker._popper;
    t.state.elements.reference = this._input, t.update(), this._scrollBar.reset();
  }
  _setInitialDefaultInput() {
    (this._options.defaultDate || this._options.defaultTime) && this._updateInputValue();
  }
  _updateInputValue() {
    this._timeValue && this._dateValue && (this._input.value = `${this._dateValue}, ${this._timeValue}`, c.trigger(
      this._element,
      uC
    ).defaultPrevented) || (c.trigger(this._input, "focus"), this.notch && this.notch.removeAttribute("data-te-input-focused"));
  }
  // static
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, yi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new kh(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, yi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const qs = "sticky", wi = `te.${qs}`, xh = `.${wi}`, mC = `active${xh}`, gC = `inactive${xh}`, bC = {
  stickyAnimationSticky: "",
  stickyAnimationUnsticky: "",
  stickyBoundary: !1,
  stickyDelay: 0,
  stickyDirection: "down",
  stickyMedia: 0,
  stickyOffset: 0,
  stickyPosition: "top",
  stickyZIndex: 100
}, vC = {
  stickyAnimationSticky: "string",
  stickyAnimationUnsticky: "string",
  stickyBoundary: "(boolean|string)",
  stickyDelay: "number",
  stickyDirection: "string",
  stickyMedia: "number",
  stickyOffset: "number",
  stickyPosition: "string",
  stickyZIndex: "(string|number)"
}, TC = {
  stickyActive: ""
}, EC = {
  stickyActive: "string"
};
class Oh {
  constructor(t, e, i) {
    this._element = t, this._hiddenElement = null, this._elementPositionStyles = {}, this._scrollDirection = "", this._isSticked = !1, this._elementOffsetTop = null, this._scrollTop = 0, this._pushPoint = "", this._manuallyDeactivated = !1, this._element && (this._options = this._getConfig(e), this._classes = this._getClasses(i), y.setData(t, wi, this), this._init());
  }
  // Getters
  static get NAME() {
    return qs;
  }
  // Public
  dispose() {
    const { stickyAnimationUnsticky: t } = this._options;
    let { animationDuration: e } = getComputedStyle(this._element);
    e = t !== "" ? parseFloat(e) * 1e3 : 0, this._disableSticky(), setTimeout(() => {
      y.removeData(this._element, wi), this._element = null, this._options = null, this._hiddenElement = null, this._elementPositionStyles = null, this._scrollDirection = null, this._isSticked = null, this._elementOffsetTop = null, this._scrollTop = null, this._pushPoint = null, this._manuallyDeactivated = null;
    }, e);
  }
  active() {
    this._isSticked || (this._createHiddenElement(), this._enableSticky(), this._changeBoundaryPosition(), this._isSticked = !0, this._manuallyDeactivated = !1);
  }
  inactive() {
    this._isSticked && (this._disableSticky(), this._isSticked = !1, this._manuallyDeactivated = !0);
  }
  // Private
  _init() {
    this._userActivityListener();
  }
  _userActivityListener() {
    c.on(window, "resize", () => {
      this._updateElementPosition(), this._updateElementOffset();
    }), c.on(window, "scroll", () => {
      if (!this._element || window.innerWidth <= this._options.stickyMedia || this._manuallyDeactivated)
        return;
      const t = document.documentElement, { stickyDirection: e } = this._options, i = window.pageYOffset || t.scrollTop;
      this._updateElementOffset(), this._updatePushPoint(), this._updateScrollDirection(i), this._clearInProgressAnimations();
      const n = [this._scrollDirection, "both"].includes(
        e
      ), o = this._pushPoint <= i, r = o && !this._isSticked && n, a = (!o || !n) && this._isSticked;
      r && (this._createHiddenElement(), this._enableSticky(), this._changeBoundaryPosition(), this._isSticked = !0), a && (this._disableSticky(), this._isSticked = !1), this._isSticked && (this._updatePosition({ styles: this._elementPositionStyles }), this._changeBoundaryPosition()), this._scrollTop = i <= 0 ? 0 : i;
    });
  }
  _updatePushPoint() {
    this._options.stickyPosition === "top" ? this._pushPoint = this._elementOffsetTop - this._options.stickyDelay : this._pushPoint = this._elementOffsetTop + this._element.height - document.body.scrollHeight + this._options.stickyDelay;
  }
  _updateElementOffset() {
    this._hiddenElement ? this._elementOffsetTop = this._hiddenElement.offsetTop : this._elementOffsetTop = this._element.offsetTop, this._options.stickyAnimationUnsticky && (this._elementOffsetTop += this._element.height || 0);
  }
  _updateElementPosition() {
    if (this._hiddenElement) {
      const { left: t } = this._hiddenElement.getBoundingClientRect();
      this._elementPositionStyles = {
        left: `${t}px`
      };
    } else
      this._elementPositionStyles = {};
    this._setStyle(this._element, this._elementPositionStyles);
  }
  _updateScrollDirection(t) {
    t > this._scrollTop ? this._scrollDirection = "down" : this._scrollDirection = "up";
  }
  _clearInProgressAnimations() {
    const t = this._scrollDirection === "up", e = this._element.classList.contains(
      this._options.stickyAnimationUnsticky
    ), i = window.scrollY <= this._elementOffsetTop - this._element.height;
    t && e && i && (this._removeUnstickyAnimation(), this._resetStyles(), this._removeHiddenElement());
  }
  _enableSticky() {
    const {
      stickyAnimationSticky: t,
      stickyAnimationUnsticky: e,
      stickyOffset: i,
      stickyPosition: n,
      stickyZIndex: o
    } = this._options, { height: r, left: a, width: l } = this._element.getBoundingClientRect();
    t !== "" && this._toggleClass(
      t,
      e,
      this._element
    ), this._toggleClass(this._classes.stickyActive, "", this._element), this._setStyle(this._element, {
      top: n === "top" && `${0 + i}px`,
      bottom: n === "bottom" && `${0 + i}px`,
      height: `${r}px`,
      width: `${l}px`,
      left: `${a}px`,
      zIndex: `${o}`,
      position: "fixed"
    }), this._hiddenElement.hidden = !1, c.trigger(this._element, mC);
  }
  _changeBoundaryPosition() {
    const { stickyPosition: t, stickyBoundary: e, stickyOffset: i } = this._options, { height: n } = this._element.getBoundingClientRect(), o = {
      height: this._element.parentElement.getBoundingClientRect().height,
      ...this._getOffset(this._element.parentElement)
    };
    let r;
    const a = d.findOne(e);
    a ? r = this._getOffset(a).top - n - i : r = o.height + o[t] - n - i;
    const l = t === "top", p = t === "bottom", u = e, _ = r < 0, f = r > o.height - n;
    let g;
    l && (_ && u ? g = { top: `${i + r}px` } : g = { top: `${i + 0}px` }), p && (_ && u ? g = { bottom: `${i + r}px` } : f && u ? g = { bottom: `${i + o.bottom}px` } : g = { bottom: `${i + 0}px` }), this._setStyle(this._element, g);
  }
  _disableSticky() {
    const { stickyAnimationUnsticky: t, stickyAnimationSticky: e } = this._options;
    let { animationDuration: i } = getComputedStyle(this._element);
    i = t !== "" ? parseFloat(i) * 1e3 : 0, this._options.stickyAnimationUnsticky !== "" && this._toggleClass(
      t,
      e,
      this._element
    ), setTimeout(() => {
      this._element.classList.contains(e) || (this._removeUnstickyAnimation(), this._resetStyles(), this._removeHiddenElement(), this._toggleClass("", this._classes.stickyActive, this._element), c.trigger(this._element, gC));
    }, i);
  }
  _createHiddenElement() {
    this._hiddenElement || (this._hiddenElement = this._copyElement(this._element));
  }
  _removeHiddenElement() {
    this._hiddenElement && (this._hiddenElement.remove(), this._hiddenElement = null);
  }
  _removeUnstickyAnimation() {
    this._toggleClass("", this._options.stickyAnimationUnsticky, this._element);
  }
  _resetStyles() {
    this._setStyle(this._element, {
      top: null,
      bottom: null,
      position: null,
      left: null,
      zIndex: null,
      width: null,
      height: null
    });
  }
  _updatePosition({ styles: t }) {
    this._setStyle(this._element, t);
  }
  _toggleClass(t, e, i) {
    t && h.addClass(i, t), e && h.removeClass(i, e);
  }
  _getOffset(t) {
    const e = h.offset(t), i = t.getBoundingClientRect(), n = e.left === 0 && e.top === 0 ? 0 : window.innerHeight - i.bottom;
    return {
      ...e,
      bottom: n
    };
  }
  _copyElement(t) {
    const { height: e, width: i } = t.getBoundingClientRect(), n = t.cloneNode(!1);
    return n.hidden = !0, this._setStyle(n, {
      height: `${e}px`,
      width: `${i}px`,
      opacity: "0"
    }), t.parentElement.insertBefore(n, t), n;
  }
  _getConfig(t = {}) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...bC,
      ...e,
      ...t
    }, I(qs, t, vC), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...TC,
      ...e,
      ...t
    }, I(qs, t, EC), t;
  }
  _setStyle(t, e) {
    Object.keys(e).forEach((i) => {
      t.style[i] = e[i];
    });
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = y.getData(this, wi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose|hide/.test(t)) && (i || (i = new Oh(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return y.getData(t, wi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const CC = (s) => {
  zl(() => {
    const t = Kl();
    if (t) {
      const e = s.NAME, i = t.fn[e];
      t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface);
    }
  });
}, AC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      e.preventDefault(), s.getOrCreateInstance(this).toggle();
    }
  );
}, yC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), fe(this))
        return;
      s.getOrCreateInstance(this).show();
    }
  );
}, wC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      const i = Qt(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), fe(this))
        return;
      c.one(i, s.EVENT_HIDDEN, () => {
        $t(this) && this.focus();
      });
      const n = d.findOne(s.OPEN_SELECTOR);
      n && n !== i && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
}, kC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    (e) => {
      e.preventDefault();
      const i = e.target.closest(t);
      s.getOrCreateInstance(i).toggle();
    }
  );
}, xC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      const i = Qt(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), c.one(i, s.EVENT_SHOW, (r) => {
        r.defaultPrevented || c.one(i, s.EVENT_HIDDEN, () => {
          $t(this) && this.focus();
        });
      });
      const n = d.findOne(
        `[${s.OPEN_SELECTOR}="true"]`
      );
      n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
}, OC = (s, t) => {
  c.one(
    document,
    "mousedown",
    t,
    s.autoInitial(new s())
  );
}, SC = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
      const i = Uo(this);
      d.find(i).forEach((o) => {
        s.getOrCreateInstance(o, { toggle: !1 }).toggle();
      });
    }
  );
}, IC = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
}, DC = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
}, $C = (s, t) => {
  d.find(t).forEach((e) => {
    new s(e);
  }), c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    s.toggle()
  );
}, LC = (s, t) => {
  const e = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", i = (o) => typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o) => {
    const r = {};
    return Object.keys(o).forEach((a) => {
      if (a.match(/dataset.*/)) {
        const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
        r[l] = i(o[a]);
      }
    }), r;
  };
  d.find(t).forEach((o) => {
    if (h.getDataAttribute(o, "chart") !== "bubble" && h.getDataAttribute(o, "chart") !== "scatter") {
      const r = h.getDataAttributes(o), a = {
        data: {
          datasets: [n(r)]
        }
      };
      return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new s(o, {
        ...a,
        ...bi[a.type]
      });
    }
    return null;
  });
};
class NC {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.isInited(t) || this.inits.push(t);
  }
}
const zo = new NC(), ki = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: !1
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: !1
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: !1
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-input-init]",
    isToggler: !1
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: !1,
    onInit: "init"
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: !1
  },
  datetimepicker: {
    name: "Datetimepicker",
    selector: "[data-te-date-timepicker-init]",
    isToggler: !1
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: !1
  },
  perfectScrollbar: {
    name: "PerfectScrollbar",
    selector: "[data-te-perfect-scrollbar-init]",
    isToggler: !1
  },
  rating: {
    name: "Rating",
    selector: "[data-te-rating-init]",
    isToggler: !1
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: !1
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: !1
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: !1
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: !1
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: !1
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: !1
  },
  datatable: {
    name: "Datatable",
    selector: "[data-te-datatable-init]"
  },
  popconfirm: {
    name: "Popconfirm",
    selector: "[data-te-toggle='popconfirm']"
  },
  validation: {
    name: "Validation",
    selector: "[data-te-validation-init]"
  },
  smoothScroll: {
    name: "SmoothScroll",
    selector: "a[data-te-smooth-scroll-init]"
  },
  lazyLoad: {
    name: "LazyLoad",
    selector: "[data-te-lazy-load-init]"
  },
  clipboard: {
    name: "Clipboard",
    selector: "[data-te-clipboard-init]"
  },
  infiniteScroll: {
    name: "InfiniteScroll",
    selector: "[data-te-infinite-scroll-init]"
  },
  loadingManagement: {
    name: "LoadingManagement",
    selector: "[data-te-loading-management-init]"
  },
  sticky: {
    name: "Sticky",
    selector: "[data-te-sticky-init]"
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: !1,
    advanced: LC
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: kC
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: SC
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: AC
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: xC
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: OC
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: wC
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: yC
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: IC
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: DC
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: $C
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, MC = (s) => ki[s.NAME] || null, RC = (s, t) => {
  if (!s || !t.allowReinits && zo.isInited(s.NAME))
    return;
  zo.add(s.NAME);
  const e = MC(s), i = (e == null ? void 0 : e.isToggler) || !1;
  if (CC(s), e != null && e.advanced) {
    e == null || e.advanced(s, e == null ? void 0 : e.selector);
    return;
  }
  if (i) {
    e == null || e.callback(s, e == null ? void 0 : e.selector);
    return;
  }
  d.find(e == null ? void 0 : e.selector).forEach((n) => {
    let o = s.getInstance(n);
    o || (o = new s(n), e != null && e.onInit && o[e.onInit]());
  });
}, PC = (s, t) => {
  s.forEach((e) => RC(e, t));
}, BC = {
  allowReinits: !1,
  checkOtherImports: !1
}, KC = (s, t = {}) => {
  t = { ...BC, ...t };
  const e = Object.keys(ki).map((i) => {
    if (!!document.querySelector(ki[i].selector)) {
      const o = s[ki[i].name];
      return !o && !zo.isInited(i) && t.checkOtherImports && console.warn(
        `Please import ${ki[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  PC(e, t);
};
export {
  Io as Alert,
  hr as Animate,
  ec as Button,
  zt as Carousel,
  ah as Chart,
  ui as Chip,
  YC as ChipsInput,
  Eh as Clipboard,
  qt as Collapse,
  ph as Datatable,
  km as Datepicker,
  kh as Datetimepicker,
  St as Dropdown,
  Ch as InfiniteScroll,
  V as Input,
  jo as LazyLoad,
  Xs as Lightbox,
  Ah as LoadingManagement,
  Do as Modal,
  Ms as Offcanvas,
  uh as PerfectScrollbar,
  fh as Popconfirm,
  $c as Popover,
  jC as Rating,
  Ge as Ripple,
  Mc as ScrollSpy,
  dr as Select,
  fi as Sidenav,
  Th as SmoothScroll,
  FC as Stepper,
  Oh as Sticky,
  Rc as Tab,
  qm as Timepicker,
  Lo as Toast,
  ti as Tooltip,
  vh as Touch,
  bh as Validation,
  KC as initTE
};
//# sourceMappingURL=tw-elements.es.min.js.map
