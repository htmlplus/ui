var n, l, u, i, r, o, e, f, c, s, a, h, p, v, d = {}, w = [], _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, g = Array.isArray;
function m(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function k(l2, u2, t) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return x(l2, e2, i2, r2, null);
}
function x(n2, t, i2, r2, o2) {
  var e2 = { type: n2, props: t, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function S(n2) {
  return n2.children;
}
function C(n2, l2) {
  this.props = n2, this.context = l2;
}
function $(n2, l2) {
  if (null == l2) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u2 = n2.__v, t = u2.__e, i2 = [], r2 = [], o2 = m({}, u2);
    o2.__v = u2.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u2, n2.__n, n2.__P.namespaceURI, 32 & u2.__u ? [t] : null, i2, null == t ? $(u2) : t, !!(32 & u2.__u), r2), o2.__v = u2.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u2.__e = u2.__ = null, o2.__e != t && P(o2);
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l2, u2, t, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y, _2, g2, m2 = t && t.__k || w, b2 = l2.length;
  for (f2 = T(u2, l2, m2, f2, b2), a2 = 0; a2 < b2; a2++) null != (p2 = u2.__k[a2]) && (h2 = -1 != p2.__i && m2[p2.__i] || d, p2.__i = a2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f2, c2, s2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), s2.push(p2.ref, p2.__c || v2, p2)), null == y && null != v2 && (y = v2), (g2 = !!(4 & p2.__u)) || h2.__k === p2.__k ? (f2 = j(p2, f2, n2, g2), g2 && h2.__e && (h2.__e = null)) : "function" == typeof p2.type && void 0 !== _2 ? f2 = _2 : v2 && (f2 = v2.nextSibling), p2.__u &= -7);
  return u2.__e = y, f2;
}
function T(n2, l2, u2, t, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f2 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = O(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t && (t = $(e2)), K(e2, e2));
  return t;
}
function j(n2, l2, u2, t) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = j(i2[r2], l2, u2, t));
    return l2;
  }
  n2.__e != l2 && (t && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function O(n2, l2, u2, t) {
  var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], s2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == e2 || s2 && e2 == c2.key && f2 == c2.type) return u2;
  if (t > (s2 ? 1 : 0)) {
    for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f2 == c2.type) return o2;
  }
  return -1;
}
function z(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || _.test(l2) ? u2 : u2 + "px";
}
function N(n2, l2, u2, t, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t && (n2.style.cssText = t = ""), t) for (l2 in t) u2 && l2 in u2 || z(n2.style, l2, "");
    if (u2) for (l2 in u2) t && u2[l2] == t[l2] || z(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(a, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t ? u2[s] = t[s] : (u2[s] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function V(n2) {
  return function(u2) {
    if (this.l) {
      var t = this.l[u2.type + n2];
      if (null == u2[c]) u2[c] = h++;
      else if (u2[c] < t[s]) return;
      return t(l.event ? l.event(u2) : u2);
    }
  };
}
function q(n2, u2, t, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y, d2, _2, k2, x2, M, $2, I2, P2, A2, H2, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t.__u && (c2 = !!(32 & t.__u), o2 = [f2 = u2.__e = t.__e]), (a2 = l.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (k2 = u2.props, x2 = T2.prototype && T2.prototype.render, M = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M ? M.props.value : a2.__ : i2, t.__c ? _2 = (h2 = u2.__c = t.__c).__ = h2.__E : (x2 ? u2.__c = h2 = new T2(k2, $2) : (u2.__c = h2 = new C(k2, $2), h2.constructor = T2, h2.render = Q), M && M.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = m({}, h2.__s)), m(h2.__s, T2.getDerivedStateFromProps(k2, h2.__s))), v2 = h2.props, y = h2.state, h2.__v = u2, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (x2 && null == T2.getDerivedStateFromProps && k2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(k2, $2), u2.__v == t.__v || !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(k2, h2.__s, $2)) {
        u2.__v != t.__v && (h2.props = k2, h2.state = h2.__s, h2.__d = false), u2.__e = t.__e, u2.__k = t.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), w.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(k2, h2.__s, $2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y, d2);
      });
    }
    if (h2.context = $2, h2.props = k2, h2.__P = n2, h2.__e = false, I2 = l.__r, P2 = 0, x2) h2.state = h2.__s, h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), w.push.apply(h2.__h, h2._sb), h2._sb = [];
    else do {
      h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++P2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = m(m({}, i2), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (d2 = h2.getSnapshotBeforeUpdate(v2, y)), A2 = null != a2 && a2.type === S && null == a2.key ? E(a2.props.children) : a2, f2 = L(n2, g(A2) ? A2 : [A2], u2, t, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), _2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else {
      for (H2 = o2.length; H2--; ) b(o2[H2]);
      B(u2);
    }
    else u2.__e = t.__e, u2.__k = t.__k, n3.then || B(u2);
    l.__e(n3, u2, t);
  }
  else null == o2 && u2.__v == t.__v ? (u2.__k = t.__k, u2.__e = t.__e) : f2 = u2.__e = G(t.__e, u2, t, i2, r2, o2, e2, c2, s2);
  return (a2 = l.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u2, t) {
  for (var i2 = 0; i2 < t.length; i2++) J(t[i2], t[++i2], t[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : m({}, n2);
}
function G(u2, t, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y, w2, _2, m2 = i2.props || d, k2 = t.props, x2 = t.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((y = e2[a2]) && "setAttribute" in y == !!x2 && (x2 ? y.localName == x2 : 3 == y.nodeType)) {
      u2 = y, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t, e2), c2 = false), e2 = null;
  }
  if (null == x2) m2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n.call(u2.childNodes), !c2 && null != e2) for (m2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) m2[(y = u2.attributes[a2]).name] = y.value;
    for (a2 in m2) y = m2[a2], "dangerouslySetInnerHTML" == a2 ? p2 = y : "children" == a2 || a2 in k2 || "value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2 || N(u2, a2, null, y, o2);
    for (a2 in k2) y = k2[a2], "children" == a2 ? v2 = y : "dangerouslySetInnerHTML" == a2 ? h2 = y : "value" == a2 ? w2 = y : "checked" == a2 ? _2 = y : c2 && "function" != typeof y || m2[a2] === y || N(u2, a2, y, m2[a2], o2);
    if (h2) c2 || p2 && (h2.__html == p2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t.__k = [];
    else if (p2 && (u2.innerHTML = ""), L("template" == t.type ? u2.content : u2, g(v2) ? v2 : [v2], t, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && $(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) b(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == w2 ? u2.removeAttribute("value") : null != w2 && (w2 !== u2[a2] || "progress" == x2 && !w2 || "option" == x2 && w2 != m2[a2]) && N(u2, a2, w2, m2[a2], o2), a2 = "checked", null != _2 && _2 != u2[a2] && N(u2, a2, _2, m2[a2], o2));
  }
  return u2;
}
function J(n2, u2, t) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l.__e(n3, t);
  }
}
function K(n2, u2, t) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && K(i2[r2], u2, t || "function" != typeof n2.type);
  t || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function Q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function R(u2, t, i2) {
  var r2, o2, e2, f2;
  t == document && (t = document.documentElement), l.__ && l.__(u2, t), o2 = (r2 = false) ? null : t.__k, e2 = [], f2 = [], q(t, u2 = t.__k = k(S, null, [u2]), o2 || d, d, t.namespaceURI, o2 ? null : t.firstChild ? n.call(t.childNodes) : null, e2, o2 ? o2.__e : t.firstChild, r2, f2), D(e2, u2, f2);
}
n = w.slice, l = { __e: function(n2, l2, u2, t) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, C.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u2), this.props)), n2 && m(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true);
const KEY = "htmlplus";
const API_CONNECTED = /* @__PURE__ */ Symbol();
const API_DEFAULTS = /* @__PURE__ */ Symbol();
const API_HOST = /* @__PURE__ */ Symbol();
const API_REQUEST = /* @__PURE__ */ Symbol();
const API_RENDER_COMPLETED = /* @__PURE__ */ Symbol();
const API_STACKS = /* @__PURE__ */ Symbol();
const API_STYLE = /* @__PURE__ */ Symbol();
const LIFECYCLE_ADOPTED = "adoptedCallback";
const LIFECYCLE_CONNECTED = "connectedCallback";
const LIFECYCLE_CONSTRUCTED = "constructedCallback";
const LIFECYCLE_DISCONNECTED = "disconnectedCallback";
const LIFECYCLE_READY = "readyCallback";
const LIFECYCLE_UPDATE = "updateCallback";
const LIFECYCLE_UPDATED = "updatedCallback";
const METHOD_RENDER = "render";
const STATIC_STYLE = "style";
const STATIC_TAG = "tag";
const TYPE_ANY = 2 ** 0;
const TYPE_ARRAY = 2 ** 1;
const TYPE_BIGINT = 2 ** 2;
const TYPE_BOOLEAN = 2 ** 3;
const TYPE_DATE = 2 ** 4;
const TYPE_ENUM = 2 ** 5;
const TYPE_FUNCTION = 2 ** 6;
const TYPE_NULL = 2 ** 7;
const TYPE_NUMBER = 2 ** 8;
const TYPE_OBJECT = 2 ** 9;
const TYPE_STRING = 2 ** 10;
const TYPE_UNDEFINED = 2 ** 11;
const SPLIT_LOWER_UPPER_RE = new RegExp("([\\p{Ll}\\d])(\\p{Lu})", "gu");
const SPLIT_UPPER_UPPER_RE = new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])", "gu");
const SPLIT_SEPARATE_NUMBER_RE = new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d", "u");
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
const SPLIT_REPLACE_VALUE = "$1\0$2";
const DEFAULT_PREFIX_SUFFIX_CHARACTERS = "";
function split(value) {
  let result = value.trim();
  result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
  result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  if (start === end)
    return [];
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split(/\0/g);
}
function splitSeparateNumbers(value) {
  const words = split(value);
  for (let i2 = 0; i2 < words.length; i2++) {
    const word = words[i2];
    const match = SPLIT_SEPARATE_NUMBER_RE.exec(word);
    if (match) {
      const offset = match.index + (match[1] ?? match[2]).length;
      words.splice(i2, 1, word.slice(0, offset), word.slice(offset));
    }
  }
  return words;
}
function noCase(input, options) {
  const [prefix, words, suffix] = splitPrefixSuffix(input, options);
  return prefix + words.map(lowerFactory(options?.locale)).join(options?.delimiter ?? " ") + suffix;
}
function pascalCase(input, options) {
  const [prefix, words, suffix] = splitPrefixSuffix(input, options);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  const transform = pascalCaseTransformFactory(lower, upper);
  return prefix + words.map(transform).join("") + suffix;
}
function kebabCase(input, options) {
  return noCase(input, { delimiter: "-", ...options });
}
function lowerFactory(locale) {
  return locale === false ? (input) => input.toLowerCase() : (input) => input.toLocaleLowerCase(locale);
}
function upperFactory(locale) {
  return (input) => input.toLocaleUpperCase(locale);
}
function pascalCaseTransformFactory(lower, upper) {
  return (word, index) => {
    const char0 = word[0];
    const initial = index > 0 && char0 >= "0" && char0 <= "9" ? "_" + char0 : upper(char0);
    return initial + lower(word.slice(1));
  };
}
function splitPrefixSuffix(input, options = {}) {
  const splitFn = options.split ?? (options.separateNumbers ? splitSeparateNumbers : split);
  const prefixCharacters = options.prefixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  const suffixCharacters = options.suffixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
  let prefixIndex = 0;
  let suffixIndex = input.length;
  while (prefixIndex < input.length) {
    const char = input.charAt(prefixIndex);
    if (!prefixCharacters.includes(char))
      break;
    prefixIndex++;
  }
  while (suffixIndex > prefixIndex) {
    const index = suffixIndex - 1;
    const char = input.charAt(index);
    if (!suffixCharacters.includes(char))
      break;
    suffixIndex = index;
  }
  return [
    input.slice(0, prefixIndex),
    splitFn(input.slice(prefixIndex, suffixIndex)),
    input.slice(suffixIndex)
  ];
}
const call = (target, key, ...args) => {
  return target[key]?.apply(target, args);
};
const typeOf = (input) => {
  return Object.prototype.toString.call(input).replace(/\[|\]|object| /g, "").toLowerCase();
};
const classes = (input, smart) => {
  const result = [];
  switch (typeOf(input)) {
    case "array": {
      for (const item of input) {
        result.push(classes(item));
      }
      break;
    }
    case "object": {
      const obj = input;
      const keys = Object.keys(obj);
      for (const key of keys) {
        const value = obj[key];
        const name = kebabCase(key);
        const type = typeOf(value);
        switch (type) {
          case "boolean": {
            value && result.push(`${name}`);
            break;
          }
          case "number":
          case "string": {
            result.push(`${name}-${value}`);
            break;
          }
        }
      }
      break;
    }
    case "string": {
      result.push(input);
      break;
    }
  }
  return result.filter((item) => item).join(" ");
};
const merge = (target, ...sources) => {
  for (const source of sources) {
    if (!source) continue;
    if (typeOf(source) !== "object") {
      target = source;
      continue;
    }
    for (const key of Object.keys(source)) {
      if (target[key] instanceof Object && source[key] instanceof Object && target[key] !== source[key]) {
        target[key] = merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const getConfig$1 = (namespace) => {
  return globalThis[`$htmlplus:${namespace}$`] || {};
};
const getConfigCreator = (namespace) => () => {
  return getConfig$1(namespace);
};
const setConfig$1 = (namespace, config, options) => {
  const previous = options?.override ? {} : globalThis[`$htmlplus:${namespace}$`];
  const next = merge({}, previous, config);
  globalThis[`$htmlplus:${namespace}$`] = next;
};
const setConfigCreator = (namespace) => (config, options) => {
  return setConfig$1(namespace, config, options);
};
const defineProperty = Object.defineProperty;
const host = (target) => {
  try {
    return target[API_HOST]();
  } catch {
    return target;
  }
};
const direction = (target) => {
  return getComputedStyle(host(target)).getPropertyValue("direction");
};
const outsides = [];
const dispatch = (target, type, eventInitDict) => {
  const event = new CustomEvent(type, eventInitDict);
  host(target).dispatchEvent(event);
  return event;
};
const on = (target, type, handler, options) => {
  const element = host(target);
  if (type !== "outside") {
    return element.addEventListener(type, handler, options);
  }
  const callback = (event) => {
    const has = event.composedPath().some((item) => item === element);
    if (has) return;
    if (typeof handler === "function") {
      handler(event);
    } else {
      handler.handleEvent(event);
    }
  };
  type = "ontouchstart" in window.document.documentElement ? "touchstart" : "click";
  on(document, type, callback, options);
  outsides.push({
    callback,
    element,
    handler,
    options,
    type
  });
};
const off = (target, type, handler, options) => {
  const element = host(target);
  if (type !== "outside") {
    return void element.removeEventListener(type, handler, options);
  }
  const index = outsides.findIndex((outside2) => {
    return outside2.element === element && outside2.handler === handler && outside2.options === options;
  });
  const outside = outsides[index];
  if (!outside) return;
  off(document, outside.type, outside.callback, outside.options);
  outsides.splice(index, 1);
};
const getFramework = (target) => {
  const element = host(target);
  if ("_qc_" in element) return "qwik";
  if ("_$owner" in element) return "solid";
  if ("__svelte_meta" in element) return "svelte";
  if ("__vnode" in element) return "vue";
  const keys = Object.keys(element);
  const has = (input) => keys.some((key) => key.startsWith(input));
  if (has("_blazor")) return "blazor";
  if (has("__react")) return "react";
  if (has("__zone_symbol__")) return "angular";
};
const getTag = (target) => {
  return target.constructor[STATIC_TAG] ?? target[STATIC_TAG];
};
const getNamespace = (target) => {
  return getTag(target)?.split("-")?.at(0);
};
const isCSSColor = (input) => {
  const option = new Option();
  option.style.color = input;
  return option.style.color !== "";
};
const isCSSUnit = (input) => {
  const option = new Option();
  option.style.width = input;
  return option.style.width !== "";
};
const isRTL = (target) => {
  return direction(target) === "rtl";
};
const isServer = () => {
  return !(typeof window !== "undefined" && window.document);
};
const shadowRoot = (target) => {
  return host(target)?.shadowRoot;
};
function query(target, selectors) {
  return shadowRoot(target)?.querySelector(selectors);
}
function queryAll(target, selectors) {
  return shadowRoot(target)?.querySelectorAll(selectors);
}
const task = (options) => {
  let running;
  let promise;
  const run = () => {
    if (options.canStart && !options.canStart()) return Promise.resolve(false);
    if (!running) promise = enqueue();
    return promise;
  };
  const enqueue = async () => {
    running = true;
    try {
      await promise;
    } catch (error) {
      Promise.reject(error);
    }
    if (!running) return promise;
    try {
      if (options.canRun && !options.canRun()) {
        running = false;
        return running;
      }
      options.handler();
      running = false;
      return true;
    } catch (error) {
      running = false;
      throw error;
    }
  };
  return run;
};
const requestUpdate = (target, name, previous, callback) => {
  target[API_STACKS] ||= /* @__PURE__ */ new Map();
  const stacks = target[API_STACKS];
  const stack = stacks.get(name) || { callbacks: [], previous };
  callback && stack.callbacks.push(callback);
  stacks.set(name, stack);
  const handler = () => {
    if (!target[API_CONNECTED]) return;
    const states = new Map(
      Array.from(stacks).filter((stack2) => stack2[0]).map((stack2) => [stack2[0], stack2[1].previous])
    );
    call(target, LIFECYCLE_UPDATE, states);
    R(call(target, METHOD_RENDER) ?? null, shadowRoot(target));
    stacks.forEach((state) => {
      state.callbacks.forEach((callback2, index, callbacks) => {
        callback2(callbacks.length - 1 !== index);
      });
    });
    (() => {
      const raw = target.constructor[STATIC_STYLE];
      if (!raw) return;
      const regex = /global\s+[^{]+\{[^{}]*\{[^{}]*\}[^{}]*\}|global\s+[^{]+\{[^{}]*\}/g;
      if (!target[API_STYLE]) {
        const style = raw.replace(regex, "");
        if (!style) return;
        const element = document.createElement("style");
        element.textContent = style;
        target[API_STYLE] = element;
        shadowRoot(target)?.appendChild(element);
      }
      if (!target.constructor[API_STYLE]) {
        const style = raw?.match(regex)?.join("")?.replaceAll("global", "")?.replaceAll(":host", getTag(target) || "");
        if (!style) return;
        const element = document.createElement("style");
        element.textContent = style;
        target.constructor[API_STYLE] = element;
        document.head.appendChild(element);
      }
    })();
    call(target, LIFECYCLE_UPDATED, states);
    stacks.clear();
    target[API_RENDER_COMPLETED] = true;
  };
  target[API_REQUEST] ||= task({ handler });
  call(target, API_REQUEST);
};
function toDecorator(util, ...args) {
  return (target, key) => {
    defineProperty(target, key, {
      get() {
        return util(this, ...args);
      }
    });
  };
}
const TYPES = [
  {
    flag: TYPE_NULL,
    check: (value) => {
      return value === null;
    },
    parse: (value) => {
      if (value === "null") {
        return {
          value: null
        };
      }
    }
  },
  {
    flag: TYPE_UNDEFINED,
    check: (value) => {
      return value === void 0;
    },
    parse: (value) => {
      if (value === "undefined") {
        return {
          value: void 0
        };
      }
    }
  },
  {
    flag: TYPE_BOOLEAN,
    check: (value) => {
      return typeof value === "boolean";
    },
    parse: (value) => {
      if (value === "") {
        return {
          value: true
        };
      }
    }
  },
  {
    flag: TYPE_BIGINT,
    check: (value) => {
      return typeof value === "bigint";
    },
    parse: (value) => {
      if (/^\d+n$/.test(value)) {
        return {
          value: BigInt(value.slice(0, -1))
        };
      }
    }
  },
  {
    flag: TYPE_NUMBER,
    check: (value) => {
      return typeof value === "number" && !Number.isNaN(value);
    },
    parse: (value) => {
      if (value !== "" && !Number.isNaN(Number(value))) {
        return {
          value: parseFloat(value)
        };
      }
    }
  },
  {
    flag: TYPE_DATE,
    check: (value) => {
      return value instanceof Date && !Number.isNaN(value.getTime());
    },
    parse: (value) => {
      const date = new Date(value);
      if (!Number.isNaN(date.getTime())) {
        return {
          value: date
        };
      }
    }
  },
  {
    flag: TYPE_ARRAY,
    check: (value) => {
      return Array.isArray(value);
    },
    parse: (value) => {
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed)) {
            return {
              value: parsed
            };
          }
        } catch {
        }
      }
    }
  },
  {
    flag: TYPE_OBJECT,
    check: (value) => {
      return typeof value === "object" && value !== null && !Array.isArray(value);
    },
    parse: (value) => {
      if (value.startsWith("{") && value.endsWith("}")) {
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed)) {
            return {
              value: parsed
            };
          }
        } catch {
        }
      }
    }
  },
  {
    flag: TYPE_FUNCTION,
    check: (value) => {
      return typeof value === "function";
    },
    parse: () => {
      throw new Error("TODO");
    }
  },
  {
    flag: TYPE_ENUM,
    check: (value) => {
      return typeof value === "string";
    },
    parse: (value) => {
      return {
        value
      };
    }
  },
  {
    flag: TYPE_STRING,
    check: (value) => {
      return typeof value === "string";
    },
    parse: (value) => {
      return {
        value
      };
    }
  },
  // TODO
  {
    flag: TYPE_ANY,
    check: () => {
      return true;
    },
    parse: (value) => {
      try {
        return JSON.parse(value);
      } catch {
        return {
          value
        };
      }
    }
  }
];
const ensureIsType = (value, type = 0) => {
  for (const handler of TYPES) {
    if (!(type & handler.flag)) continue;
    if (!handler.check(value)) continue;
    return;
  }
  throw new Error(`Invalid value "${value}" for allowed types.`);
};
const toProperty = (value, type = 0) => {
  for (const handler of TYPES) {
    if (!(type & handler.flag)) continue;
    const result = handler.parse(value);
    if (result === void 0) continue;
    return result.value;
  }
  throw new Error(`Cannot parse value "${value}" for allowed types.`);
};
const updateAttribute = (target, key, value) => {
  const element = host(target);
  if (value === void 0 || value === null || value === false) {
    return void element.removeAttribute(key);
  }
  const next = value === true ? "" : String(value);
  element.setAttribute(key, next);
};
const wrapMethod = (mode, target, key, handler) => {
  const original = target[key];
  if (original && typeof original !== "function") {
    throw new TypeError(`Property ${String(key)} is not a function`);
  }
  function wrapped(...args) {
    if (mode === "before") {
      handler.apply(this, args);
    }
    const result = original?.apply(this, args);
    if (mode === "after") {
      handler.apply(this, args);
    }
    return result;
  }
  target[key] = wrapped;
};
function Bind() {
  return (_target, key, descriptor) => {
    const original = descriptor.value;
    return {
      configurable: true,
      get() {
        const next = original.bind(this);
        defineProperty(this, key, {
          value: next,
          configurable: true,
          writable: true
        });
        return next;
      }
    };
  };
}
function Provider(namespace) {
  return (target, key) => {
    const symbol = /* @__PURE__ */ Symbol();
    const [MAIN, SUB] = namespace.split(".");
    const prefix = `${KEY}:${MAIN}`;
    const cleanups = (instance) => {
      return instance[symbol] ||= /* @__PURE__ */ new Map();
    };
    const update = (instance) => {
      const options = {};
      options.detail = instance[key];
      dispatch(instance, `${prefix}:update`, options);
      if (!SUB) return;
      options.bubbles = true;
      dispatch(instance, `${prefix}:${instance[SUB]}:update`, options);
    };
    wrapMethod("after", target, LIFECYCLE_CONNECTED, function() {
      const cleanup = () => {
        off(this, `${prefix}:presence`, onPresence);
        cleanups(this).delete(prefix);
      };
      const onPresence = (event) => {
        event.stopPropagation();
        event.detail(this, this[key]);
      };
      on(this, `${prefix}:presence`, onPresence);
      cleanups(this).set(prefix, cleanup);
    });
    wrapMethod("after", target, LIFECYCLE_UPDATE, function(states) {
      update(this);
      if (cleanups(this).size && !states.has(SUB)) return;
      cleanups(this).get(`${prefix}:${states.get(SUB)}`)?.();
      const type = `${prefix}:${this[SUB]}`;
      const cleanup = () => {
        off(window, `${type}:presence`, onPresence);
        cleanups(this).delete(type);
        dispatch(window, `${type}:disconnect`);
      };
      const onPresence = () => {
        update(this);
      };
      on(window, `${type}:presence`, onPresence);
      cleanups(this).set(type, cleanup);
    });
    wrapMethod("after", target, LIFECYCLE_DISCONNECTED, function() {
      cleanups(this).forEach((cleanup) => {
        cleanup();
      });
    });
  };
}
function Consumer(namespace) {
  return (target, key) => {
    const symbol = /* @__PURE__ */ Symbol();
    const [MAIN, SUB] = namespace.split(".");
    const prefix = `${KEY}:${MAIN}`;
    const cleanups = (instance) => {
      return instance[symbol] ||= /* @__PURE__ */ new Map();
    };
    const update = (instance, state) => {
      instance[key] = state;
    };
    wrapMethod("after", target, LIFECYCLE_CONNECTED, function() {
      if (SUB && this[SUB]) return;
      let connected = false;
      const options = {
        bubbles: true
      };
      options.detail = (parent, state) => {
        connected = true;
        update(this, state);
        const cleanup = () => {
          off(parent, `${prefix}:update`, onUpdate);
          cleanups(this).delete(prefix);
          update(this, void 0);
        };
        const onUpdate = (event) => {
          update(this, event.detail);
        };
        on(parent, `${prefix}:update`, onUpdate);
        cleanups(this).set(prefix, cleanup);
      };
      dispatch(this, `${prefix}:presence`, options);
      !connected && setTimeout(() => dispatch(this, `${prefix}:presence`, options));
    });
    wrapMethod("after", target, LIFECYCLE_UPDATE, function(states) {
      if (cleanups(this).size && !states.has(SUB)) return;
      cleanups(this).get(`${prefix}:${states.get(SUB)}`)?.();
      const type = `${prefix}:${this[SUB]}`;
      const cleanup = () => {
        off(window, `${type}:disconnect`, onDisconnect);
        off(window, `${type}:update`, onUpdate);
        cleanups(this).delete(type);
        update(this, void 0);
      };
      const onDisconnect = () => {
        update(this, void 0);
      };
      const onUpdate = (event) => {
        update(this, event.detail);
      };
      on(window, `${type}:disconnect`, onDisconnect);
      on(window, `${type}:update`, onUpdate);
      cleanups(this).set(type, cleanup);
      dispatch(window, `${type}:presence`);
    });
    wrapMethod("after", target, LIFECYCLE_DISCONNECTED, function() {
      cleanups(this).forEach((cleanup) => {
        cleanup();
      });
    });
  };
}
function Element() {
  return (constructor) => {
    if (isServer()) return;
    const tag = getTag(constructor);
    if (!tag) return;
    if (customElements.get(tag)) return;
    customElements.define(tag, proxy(constructor));
  };
}
const proxy = (constructor) => {
  return class Plus extends HTMLElement {
    #instance;
    // biome-ignore lint: TODO
    static formAssociated = constructor["formAssociated"];
    // biome-ignore lint: TODO
    static observedAttributes = constructor["observedAttributes"];
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
        serializable: true,
        // biome-ignore lint: TODO
        delegatesFocus: constructor["delegatesFocus"],
        // biome-ignore lint: TODO
        slotAssignment: constructor["slotAssignment"]
      });
      this.#instance = new constructor();
      this.#instance[API_HOST] = () => this;
      call(this.#instance, LIFECYCLE_CONSTRUCTED);
    }
    adoptedCallback() {
      call(this.#instance, LIFECYCLE_ADOPTED);
    }
    attributeChangedCallback(key, prev, next) {
      if (prev !== next) {
        this.#instance[`RAW:${key}`] = next;
      }
    }
    connectedCallback() {
      (() => {
        const namespace = getNamespace(this.#instance) || "";
        const tag = getTag(this.#instance) || "";
        const properties = getConfig$1(namespace).elements?.[tag]?.properties;
        if (!properties) return;
        const defaults = Object.fromEntries(
          Object.entries(properties).map(([key, value]) => [
            key,
            value?.default
          ])
        );
        Object.assign(this, defaults);
      })();
      (() => {
        const key = Object.keys(this).find((key2) => key2.startsWith("__reactProps"));
        const props = this[key];
        if (!props) return;
        for (const [key2, value] of Object.entries(props)) {
          if (this[key2] !== void 0) continue;
          if (key2 === "children") continue;
          if (typeof value !== "object") continue;
          this[key2] = value;
        }
      })();
      this.#instance[API_CONNECTED] = true;
      call(this.#instance, LIFECYCLE_CONNECTED);
      requestUpdate(this.#instance, void 0, void 0, () => {
        call(this.#instance, LIFECYCLE_READY);
      });
    }
    disconnectedCallback() {
      call(this.#instance, LIFECYCLE_DISCONNECTED);
    }
  };
};
function Event(options = {}) {
  return (target, key) => {
    target[key] = function(detail) {
      const element = host(this);
      const framework = getFramework(this);
      options.bubbles ??= false;
      let type = String(key);
      switch (framework) {
        // TODO: Experimental
        case "blazor":
          options.bubbles = true;
          type = pascalCase(type);
          try {
            window["Blazor"].registerCustomEventType(type, {
              createEventArgs: (event2) => ({
                detail: event2.detail
              })
            });
          } catch {
          }
          break;
        case "qwik":
        case "solid":
          type = pascalCase(type).toLowerCase();
          break;
        case "react":
        case "preact":
          type = pascalCase(type);
          break;
        default:
          type = kebabCase(type);
          break;
      }
      let event;
      const resolver = getConfig$1(getNamespace(target) || "").event?.resolver;
      event ||= resolver?.({ detail, element, framework, options, type });
      event && element.dispatchEvent(event);
      event ||= dispatch(this, type, { ...options, detail });
      return event;
    };
  };
}
function Host() {
  return toDecorator(host);
}
function Listen(type, options) {
  return (target, key, descriptor) => {
    const element = (instance) => {
      switch (options?.target) {
        case "body":
          return window.document.body;
        case "document":
          return window.document;
        case "window":
          return window;
        case "host":
          return instance;
        default:
          return instance;
      }
    };
    wrapMethod("before", target, LIFECYCLE_CONNECTED, function() {
      on(element(this), type, this[key], options);
    });
    wrapMethod("before", target, LIFECYCLE_DISCONNECTED, function() {
      off(element(this), type, this[key], options);
    });
    return Bind()(target, key, descriptor);
  };
}
function Method() {
  return (target, key, _descriptor) => {
    wrapMethod("before", target, LIFECYCLE_CONSTRUCTED, function() {
      host(this)[key] = this[key].bind(this);
    });
  };
}
const CONTAINER_DATA = /* @__PURE__ */ Symbol();
const getContainers = (breakpoints) => {
  return Object.entries(breakpoints || {}).reduce(
    (result, [key, breakpoint]) => {
      if (breakpoint.type !== "container") return result;
      result[key] = {
        min: breakpoint.min,
        max: breakpoint.max
      };
      return result;
    },
    {}
  );
};
const getMedias = (breakpoints) => {
  return Object.entries(breakpoints || {}).reduce(
    (result, [key, breakpoint]) => {
      if (breakpoint.type !== "media") return result;
      const parts = [];
      const min = "min" in breakpoint ? breakpoint.min : void 0;
      const max = "max" in breakpoint ? breakpoint.max : void 0;
      if (min !== void 0) parts.push(`(min-width: ${min}px)`);
      if (max !== void 0) parts.push(`(max-width: ${max}px)`);
      const query2 = parts.join(" and ");
      if (query2) result[key] = query2;
      return result;
    },
    {}
  );
};
const matchContainer = (element, container) => {
  const getData = () => {
    if (element[CONTAINER_DATA]) return element[CONTAINER_DATA];
    const listeners = /* @__PURE__ */ new Set();
    const observer = new ResizeObserver(() => {
      listeners.forEach((listener) => {
        listener();
      });
    });
    observer.observe(element);
    element[CONTAINER_DATA] = { listeners, observer };
    return element[CONTAINER_DATA];
  };
  const getMatches = () => {
    const width = element.offsetWidth;
    const matches = (container.min === void 0 || width >= container.min) && (container.max === void 0 || width <= container.max);
    return matches;
  };
  const addEventListener = (_type, listener) => {
    getData().listeners.add(listener);
  };
  const removeEventListener = (_type, listener) => {
    const data = getData();
    data.listeners.delete(listener);
    if (data.listeners.size !== 0) return;
    data.observer.disconnect();
    delete element[CONTAINER_DATA];
  };
  return {
    get matches() {
      return getMatches();
    },
    addEventListener,
    removeEventListener
  };
};
function Overrides() {
  return (target, key) => {
    const DISPOSERS = /* @__PURE__ */ Symbol();
    const breakpoints = getConfig$1(getNamespace(target) || "").breakpoints || {};
    const containers = getContainers(breakpoints);
    const medias = getMedias(breakpoints);
    wrapMethod(
      "after",
      target,
      LIFECYCLE_UPDATE,
      function(states) {
        if (!states.has(key)) return;
        this[DISPOSERS] ??= /* @__PURE__ */ new Map();
        const disposers = this[DISPOSERS];
        const overrides = this[key] || {};
        const activeKeys = new Set(disposers.keys());
        const overrideKeys = Object.keys(overrides);
        const containerKeys = overrideKeys.filter((breakpoint) => breakpoint in containers);
        const mediaKeys = overrideKeys.filter((breakpoint) => breakpoint in medias);
        let next = {};
        let scheduled = false;
        const apply = (overrideKey) => {
          overrideKey && Object.assign(next, overrides[overrideKey]);
          if (scheduled) return;
          scheduled = true;
          queueMicrotask(() => {
            scheduled = false;
            const defaults = Object.assign({}, this[API_DEFAULTS], next);
            delete defaults[key];
            Object.assign(host(this), defaults);
            next = {};
          });
        };
        for (const overrideKey of overrideKeys) {
          if (activeKeys.delete(overrideKey)) continue;
          const breakpoint = breakpoints[overrideKey];
          if (!breakpoint) continue;
          switch (breakpoint.type) {
            case "container": {
              const container = containers[overrideKey];
              if (!container) break;
              const containerQueryList = matchContainer(host(this), container);
              const change = () => {
                for (const containerKey of containerKeys) {
                  if (matchContainer(host(this), containers[containerKey]).matches) {
                    apply(containerKey);
                  }
                }
                apply();
              };
              containerQueryList.addEventListener("change", change);
              const disposer = () => {
                containerQueryList.removeEventListener("change", change);
              };
              disposers.set(overrideKey, disposer);
              if (!containerQueryList.matches) break;
              change();
              break;
            }
            case "media": {
              const media = medias[overrideKey];
              if (!media) break;
              const mediaQueryList = window.matchMedia(media);
              const change = () => {
                for (const mediaKey of mediaKeys) {
                  if (window.matchMedia(medias[mediaKey]).matches) {
                    apply(mediaKey);
                  }
                }
                apply();
              };
              mediaQueryList.addEventListener("change", change);
              const disposer = () => {
                mediaQueryList.removeEventListener("change", change);
              };
              disposers.set(overrideKey, disposer);
              if (!mediaQueryList.matches) break;
              change();
              break;
            }
          }
        }
        for (const activeKey of activeKeys) {
          const disposer = disposers.get(activeKey);
          disposer?.();
          disposers.delete(activeKey);
        }
      }
    );
    wrapMethod("after", target, LIFECYCLE_DISCONNECTED, function() {
      this[DISPOSERS] ??= /* @__PURE__ */ new Map();
      const disposers = this[DISPOSERS];
      disposers.forEach((disposer) => {
        disposer();
      });
      disposers.clear();
    });
  };
}
function Property(options) {
  return (target, key, descriptor) => {
    const KEY2 = /* @__PURE__ */ Symbol();
    const LOCKED = /* @__PURE__ */ Symbol();
    const attribute = options?.attribute || kebabCase(key);
    const originalSetter = descriptor?.set;
    target.constructor["observedAttributes"] ||= [];
    target.constructor["observedAttributes"].push(attribute);
    function get() {
      return this[KEY2];
    }
    function set(value) {
      const previous = this[KEY2];
      const next = value;
      if (!originalSetter && next === previous) return;
      if (originalSetter) {
        originalSetter.call(this, next);
      } else {
        this[KEY2] = next;
      }
      requestUpdate(this, key, previous, (skipped) => {
        if (skipped) return;
        if (!options?.reflect) return;
        this[LOCKED] = true;
        updateAttribute(this, attribute, next);
        this[LOCKED] = false;
      });
    }
    if (originalSetter) {
      descriptor.set = set;
    }
    if (!descriptor) {
      defineProperty(target, key, { configurable: true, get, set });
    }
    defineProperty(target, `RAW:${attribute}`, {
      set(value) {
        if (this[LOCKED]) return;
        if (value === null) {
          this[key] = this[API_DEFAULTS][key];
          return;
        }
        try {
          this[key] = toProperty(value, options?.type);
        } catch {
          if (!options?.reflect) return;
          this[LOCKED] = true;
          updateAttribute(this, attribute, this[key]);
          this[LOCKED] = false;
        }
      }
    });
    wrapMethod("before", target, LIFECYCLE_CONNECTED, function() {
      this[API_DEFAULTS] ||= {};
      this[API_DEFAULTS][key] = this[key];
    });
    wrapMethod("before", target, LIFECYCLE_CONSTRUCTED, function() {
      const get2 = () => {
        if (descriptor && !descriptor.get) {
          throw new Error(`Property '${key}' does not have a getter. Unable to retrieve value.`);
        }
        return this[key];
      };
      const set2 = (value) => {
        if (descriptor && !descriptor.set) {
          throw new Error(`Property '${key}' does not have a setter. Unable to assign value.`);
        }
        try {
          ensureIsType(value, options?.type);
          this[key] = value;
        } catch {
        }
      };
      defineProperty(host(this), key, { configurable: true, get: get2, set: set2 });
    });
    if (options?.reflect && descriptor?.get) {
      wrapMethod("before", target, LIFECYCLE_UPDATED, function() {
        this[LOCKED] = true;
        updateAttribute(this, attribute, this[key]);
        this[LOCKED] = false;
      });
    }
  };
}
function Query(selectors) {
  return toDecorator(query, selectors);
}
function QueryAll(selectors) {
  return toDecorator(queryAll, selectors);
}
function State() {
  return (target, key) => {
    const KEY2 = /* @__PURE__ */ Symbol();
    const name = String(key);
    defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get() {
        return this[KEY2];
      },
      set(next) {
        const previous = this[KEY2];
        if (next === previous) return;
        this[KEY2] = next;
        requestUpdate(this, name, previous);
      }
    });
  };
}
function Style() {
  return (target, key) => {
    const KEY2 = /* @__PURE__ */ Symbol();
    const SHEET = /* @__PURE__ */ Symbol();
    const LAST = /* @__PURE__ */ Symbol();
    wrapMethod("before", target, LIFECYCLE_UPDATED, function() {
      applyStyle(this, this[key]);
    });
    defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get() {
        return this[KEY2];
      },
      set(next) {
        const previous = this[KEY2];
        if (next === previous) return;
        this[KEY2] = next;
        applyStyle(this, next);
      }
    });
    const applyStyle = (instance, input) => {
      const adoptedStyleSheets = shadowRoot(instance)?.adoptedStyleSheets;
      if (!adoptedStyleSheets) return;
      let sheet = instance[SHEET];
      if (!sheet) {
        sheet = new CSSStyleSheet();
        instance[SHEET] = sheet;
        adoptedStyleSheets.push(sheet);
      }
      const update = (value2) => (result) => {
        if (value2 && value2 !== instance[LAST]) return;
        sheet.replaceSync(toCssString(result));
        instance[LAST] = void 0;
      };
      const value = typeof input === "function" ? input.call(instance) : input;
      if (value instanceof Promise) {
        instance[LAST] = value;
        value.then(update(value)).catch((error) => {
          throw new Error("Style promise failed", { cause: error });
        });
      } else {
        update()(value);
      }
    };
  };
}
const toCssString = (input) => {
  if (typeof input === "string") {
    return input.trim();
  }
  if (Array.isArray(input)) {
    return input.map((item) => toCssString(item)).filter(Boolean).join("\n");
  }
  if (input === null) return "";
  if (typeof input !== "object") return "";
  let result = "";
  for (const key of Object.keys(input)) {
    const value = input[key];
    const ignore = [null, void 0, false].includes(value);
    if (ignore) continue;
    const cssKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    if (typeof value === "object") {
      result += `${cssKey} {${toCssString(value)}}`;
    } else {
      result += `${cssKey}: ${value};`;
    }
  }
  return result;
};
function Variant() {
  return (target, key) => {
    wrapMethod(
      "after",
      target,
      LIFECYCLE_UPDATE,
      function(states) {
        if (!states.has(key)) return;
        const namespace = getNamespace(target) || "";
        const tag = getTag(this) || "";
        const properties = getConfig$1(namespace).elements?.[tag]?.variants?.[this[key]]?.properties;
        if (!properties) return;
        const defaults = Object.assign({}, this[API_DEFAULTS], properties);
        delete defaults[key];
        Object.assign(this, defaults);
      }
    );
  };
}
function Watch(keys, immediate) {
  return (target, key) => {
    const all = [keys].flat().filter((item) => item);
    wrapMethod(
      "after",
      target,
      LIFECYCLE_UPDATED,
      function(states) {
        if (!immediate && !this[API_RENDER_COMPLETED]) return;
        states.forEach((previous, item) => {
          if (all.length && !all.includes(item)) return;
          this[key](this[item], previous, item);
        });
      }
    );
  };
}
const LISTENERS = /* @__PURE__ */ Symbol();
function createElement(type, props, key) {
  const { children, value: instance, ...rest } = props || {};
  if (type !== "host") {
    return k(type, props, ...[children].flat(1));
  }
  if (!instance) {
    throw new Error("host tag requires `value` prop");
  }
  const element = host(instance);
  for (const key2 in rest) {
    const value = rest[key2];
    if (key2 === "className") {
      element.className = value;
    } else if (key2 === "style") {
      if (typeof value === "string") {
        element.style = value;
      } else {
        for (const key3 in value) {
          if (key3.startsWith("--")) {
            element.style.setProperty(key3, value[key3]);
          } else {
            element.style[key3] = value[key3];
          }
        }
      }
    } else if (key2.startsWith("on")) {
      const listeners = element[LISTENERS] ||= {};
      const event = key2.slice(2).toLowerCase();
      listeners[event]?.();
      element.addEventListener(event, value);
      listeners[event] = () => {
        element.removeEventListener(event, value);
      };
    } else {
      element.setAttribute(key2, value);
    }
  }
  return createElement(Fragment, { children, ...rest });
}
const Fragment = S;
function jsx(type, props, key) {
  return createElement(type, props);
}
function jsxs(type, props, key) {
  return createElement(type, props);
}
const BREAKPOINTS = {
  xs: {
    type: "media",
    min: 0
  },
  sm: {
    type: "media",
    min: 600
  },
  md: {
    type: "media",
    min: 900
  },
  lg: {
    type: "media",
    min: 1200
  },
  xl: {
    type: "media",
    min: 1536
  },
  "@xs": {
    type: "container",
    min: 0
  },
  "@sm": {
    type: "container",
    min: 384
  },
  "@md": {
    type: "container",
    min: 640
  },
  "@lg": {
    type: "container",
    min: 768
  },
  "@xl": {
    type: "container",
    min: 1024
  }
};
const NAMESPACE = "plus";
const getConfig = getConfigCreator(NAMESPACE);
const setConfig = setConfigCreator(NAMESPACE);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
setConfig({
  breakpoints: BREAKPOINTS
});
class PlusCore {
  // TODO
  get dir() {
    return direction(this);
  }
  get isRTL() {
    return isRTL(this);
  }
  get $shadowRoot() {
    return this.$host.shadowRoot;
  }
  forceUpdate() {
    this.tick = Math.random();
  }
}
__decorateClass$1([
  Host()
], PlusCore.prototype, "$host", 2);
__decorateClass$1([
  State()
], PlusCore.prototype, "tick", 2);
__decorateClass$1([
  Bind()
], PlusCore.prototype, "forceUpdate", 1);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
const _PlusForm = class _PlusForm extends PlusCore {
  get form() {
    return this.internals.form;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }
  get validity() {
    return this.internals.validity;
  }
  get willValidate() {
    return this.internals.willValidate;
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }
  setCustomValidity(error) {
    this.internals.setValidity({ customError: true }, error);
  }
  valueWatcher() {
    this.internals.setFormValue(this.value);
  }
  constructedCallback() {
    this.internals = this.$host.attachInternals();
  }
  connectedCallback() {
    if (this.internals.form) {
      on(this.internals.form, "reset", this.onReset);
    }
  }
  disconnectedCallback() {
    if (this.internals.form) {
      off(this.internals.form, "reset", this.onReset);
    }
  }
};
_PlusForm.delegatesFocus = true;
_PlusForm.formAssociated = true;
let PlusForm = _PlusForm;
__decorateClass([
  Property({
    reflect: true,
    type: 2 ** 3
  })
], PlusForm.prototype, "disabled", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2 ** 10
  })
], PlusForm.prototype, "name", 2);
__decorateClass([
  Property({
    attribute: "readonly",
    reflect: true,
    type: 2 ** 3
  })
], PlusForm.prototype, "readOnly", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2 ** 3
  })
], PlusForm.prototype, "required", 2);
__decorateClass([
  Property()
], PlusForm.prototype, "form", 1);
__decorateClass([
  Property()
], PlusForm.prototype, "validationMessage", 1);
__decorateClass([
  Property()
], PlusForm.prototype, "validity", 1);
__decorateClass([
  Property()
], PlusForm.prototype, "willValidate", 1);
__decorateClass([
  Method()
], PlusForm.prototype, "checkValidity", 1);
__decorateClass([
  Method()
], PlusForm.prototype, "reportValidity", 1);
__decorateClass([
  Method()
], PlusForm.prototype, "setCustomValidity", 1);
__decorateClass([
  Watch("value", true)
], PlusForm.prototype, "valueWatcher", 1);
class ExternalDependencyError extends Error {
  constructor(element, key, options) {
    const message = [
      `The "${element.localName}" element depends on an external package, `,
      `but it doesn't seem to be installed. `,
      `Running "npm install ${key}" will fix this problem.`
    ].join("");
    super(message, options);
    this.name = "ExternalDependencyError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExternalDependencyError);
    }
  }
}
class NotEmptyPropertyError extends Error {
  constructor(element, key, options) {
    const message = `The "${element.localName}" element has a property named "${key}" that must not be empty.`;
    super(message, options);
    this.name = "NotEmptyPropertyError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotEmptyPropertyError);
    }
  }
}
const toCSSColor = (input) => {
  if (!input) return;
  if (isCSSColor(input)) return input;
  const key = input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[_\s.:]+/g, "-").replace(/-+/g, "-").toLowerCase().replace(/^-+|-+$/g, "");
  return `var(--${NAMESPACE}-color-${key})`;
};
const getCSSColor = (element, input) => {
  if (!input) return;
  if (isCSSColor(input)) return input;
  const color = toCSSColor(input);
  if (!color) return input;
  return window.getComputedStyle(element).getPropertyValue(color.trim().slice(4, -1)).trim();
};
const toAxis = (input, rtl) => {
  if (!input) return input;
  if (input.match(/start/)) input = rtl ? "right" : "left";
  if (input.match(/end/)) input = rtl ? "left" : "right";
  return input;
};
const toCSSUnit = (input) => {
  if (typeof input === "string" && isCSSUnit(input)) {
    return input;
  }
  if (typeof input === "number" || typeof input === "string" && !Number.isNaN(Number(input))) {
    return `calc(var(--plus-spacing, 1px) * ${input})`;
  }
};
class Animation {
  constructor(config) {
    this.state = "leaved";
    this.config = Object.assign({}, config, {
      states: Object.assign(
        {},
        {
          enter: "enter",
          entering: "entering",
          entered: "entered",
          leave: "leave",
          leaving: "leaving",
          leaved: "leaved"
        },
        config.states
      )
    });
  }
  get animation() {
    return this.source.getAnimations()[0];
  }
  get source() {
    const element = this.config.source;
    if (typeof element === "function") return element();
    return element;
  }
  get target() {
    const element = this.config.target;
    if (typeof element === "function") return element();
    return element;
  }
  dispose() {
    this.destroy?.();
  }
  enter(parameters) {
    return new Promise((resolve) => {
      this.destroy?.();
      this.update("enter");
      this.config.onEnter?.(parameters);
      this.next(() => {
        this.update("entering");
        this.config.onEntering?.(parameters);
        const onCancel = () => {
          resolve(true);
        };
        const onFinish = () => {
          this.update("entered");
          this.config.onEntered?.(parameters);
          resolve(false);
        };
        if (!this.animation) return onFinish();
        this.destroy = () => {
          resolve(true);
          this.animation?.removeEventListener("cancel", onCancel);
          this.animation?.removeEventListener("finish", onFinish);
        };
        this.animation.addEventListener("cancel", onCancel, { once: true });
        this.animation.addEventListener("finish", onFinish, { once: true });
      });
    });
  }
  initialize(state) {
    this.update(state);
  }
  leave(parameters) {
    return new Promise((resolve) => {
      this.destroy?.();
      this.update("leave");
      this.config.onLeave?.(parameters);
      this.next(() => {
        this.update("leaving");
        this.config.onLeaving?.(parameters);
        const onCancel = () => {
          resolve(true);
        };
        const onFinish = () => {
          this.update("leaved");
          this.config.onLeaved?.(parameters);
          resolve(false);
        };
        if (!this.animation) return onFinish();
        this.destroy = () => {
          resolve(true);
          this.animation?.removeEventListener("cancel", onCancel);
          this.animation?.removeEventListener("finish", onFinish);
        };
        this.animation.addEventListener("cancel", onCancel, { once: true });
        this.animation.addEventListener("finish", onFinish, { once: true });
      });
    });
  }
  next(callback) {
    requestAnimationFrame(() => setTimeout(() => callback(), 5));
  }
  update(state) {
    this.state = state;
    const value = this.config.states?.[this.state];
    if (!value) return;
    this.target.setAttribute(this.config.key, value);
  }
}
const _AsyncCache = class _AsyncCache {
  constructor(config) {
    this.config = config;
    this.cache = {};
  }
  get currentCache() {
    switch (this.config.type) {
      case "basic":
        return this.cache;
      case "external":
        return this.config.cache();
      case "global":
        return _AsyncCache.globalCache;
      default:
        return {};
    }
  }
  has(key) {
    return Object.hasOwn(this.currentCache, key);
  }
  get(key) {
    return this.currentCache[key];
  }
  remove(key) {
    delete this.currentCache[key];
  }
  set(key, value) {
    this.currentCache[key] = value;
  }
  getKey(...params) {
    if (this.config.type === "external") {
      return this.config.key(...params);
    }
    const namespace = this.config.type === "global" ? this.config.namespace : "";
    const key = [namespace].concat(...params).filter((key2) => !!key2).map((param) => JSON.stringify(param)).join(":");
    return key;
  }
  async resolve(...params) {
    const key = this.getKey(...params);
    const has = this.has(key);
    const value = this.get(key);
    const pending = value instanceof Promise;
    if (has && !pending) return value;
    if (!has) {
      this.set(key, this.config.resolver(...params));
    }
    try {
      const result = await this.get(key);
      this.set(key, result);
      return result;
    } catch (error) {
      this.remove(key);
      throw error;
    }
  }
};
_AsyncCache.globalCache = {};
let AsyncCache = _AsyncCache;
const _Scrollbar = class _Scrollbar {
  static get width() {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "-9999px";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    document.body.appendChild(div);
    const width = div.getBoundingClientRect().width - div.clientWidth;
    document.body.removeChild(div);
    return width;
  }
  static remove(key) {
    _Scrollbar.keys.add(key);
    if (_Scrollbar.keys.size > 1) return;
    const rect = document.body.getBoundingClientRect();
    const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    if (!isOverflowing) return;
    const direction2 = window.getComputedStyle(window.document.body).getPropertyValue("direction").toLowerCase();
    const property = direction2 == "rtl" ? "paddingLeft" : "paddingRight";
    const value = window.getComputedStyle(window.document.body).getPropertyValue(property.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase());
    _Scrollbar.style.overflow = document.body.style.overflow;
    _Scrollbar.style[property] = document.body.style[property];
    document.body.style.overflow = "hidden";
    const scrollbarWidth = _Scrollbar.width;
    document.body.style[property] = `${parseFloat(value) + scrollbarWidth}px`;
  }
  static reset(key) {
    _Scrollbar.keys.delete(key);
    if (_Scrollbar.keys.size) return;
    const keys = Object.keys(_Scrollbar.style);
    for (const key2 of keys) {
      document.body.style[key2] = _Scrollbar.style[key2] || "";
    }
    _Scrollbar.style = {};
  }
};
_Scrollbar.keys = /* @__PURE__ */ new Set();
_Scrollbar.style = {};
let Scrollbar = _Scrollbar;
export {
  AsyncCache as A,
  Bind as B,
  Consumer as C,
  ExternalDependencyError as E,
  Fragment as F,
  Listen as L,
  Method as M,
  NotEmptyPropertyError as N,
  Overrides as O,
  PlusCore as P,
  Query as Q,
  State as S,
  Variant as V,
  Watch as W,
  off as a,
  jsx as b,
  Property as c,
  Element as d,
  Event as e,
  Provider as f,
  Style as g,
  toCSSColor as h,
  PlusForm as i,
  jsxs as j,
  getCSSColor as k,
  getConfig as l,
  Animation as m,
  Scrollbar as n,
  on as o,
  toAxis as p,
  query as q,
  classes as r,
  setConfig as s,
  toCSSUnit as t,
  QueryAll as u,
  setConfig$1 as v
};
