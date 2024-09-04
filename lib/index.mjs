var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var N = { exports: {} };
N.exports;
(function(a, s) {
  var l = 200, i = "__lodash_hash_undefined__", h = 9007199254740991, c = "[object Arguments]", f = "[object Array]", p = "[object Boolean]", v = "[object Date]", u = "[object Error]", C = "[object Function]", it = "[object GeneratorFunction]", P = "[object Map]", ct = "[object Number]", V = "[object Object]", st = "[object Promise]", ot = "[object RegExp]", G = "[object Set]", ft = "[object String]", ut = "[object Symbol]", W = "[object WeakMap]", ht = "[object ArrayBuffer]", R = "[object DataView]", lt = "[object Float32Array]", dt = "[object Float64Array]", pt = "[object Int8Array]", gt = "[object Int16Array]", yt = "[object Int32Array]", _t = "[object Uint8Array]", wt = "[object Uint8ClampedArray]", At = "[object Uint16Array]", Tt = "[object Uint32Array]", qt = /[\\^$.*+?()[\]{}|]/g, Jt = /\w*$/, Xt = /^\[object .+?Constructor\]$/, Yt = /^(?:0|[1-9]\d*)$/, o = {};
  o[c] = o[f] = o[ht] = o[R] = o[p] = o[v] = o[lt] = o[dt] = o[pt] = o[gt] = o[yt] = o[P] = o[ct] = o[V] = o[ot] = o[G] = o[ft] = o[ut] = o[_t] = o[wt] = o[At] = o[Tt] = !0, o[u] = o[C] = o[W] = !1;
  var Zt = typeof K == "object" && K && K.Object === Object && K, zt = typeof self == "object" && self && self.Object === Object && self, _ = Zt || zt || Function("return this")(), vt = s && !s.nodeType && s, mt = vt && !0 && a && !a.nodeType && a, Qt = mt && mt.exports === vt;
  function jt(t, e) {
    return t.set(e[0], e[1]), t;
  }
  function te(t, e) {
    return t.add(e), t;
  }
  function ee(t, e) {
    for (var r = -1, n = t ? t.length : 0; ++r < n && e(t[r], r, t) !== !1; )
      ;
    return t;
  }
  function re(t, e) {
    for (var r = -1, n = e.length, d = t.length; ++r < n; )
      t[d + r] = e[r];
    return t;
  }
  function St(t, e, r, n) {
    for (var d = -1, g = t ? t.length : 0; ++d < g; )
      r = e(r, t[d], d, t);
    return r;
  }
  function ne(t, e) {
    for (var r = -1, n = Array(t); ++r < t; )
      n[r] = e(r);
    return n;
  }
  function ae(t, e) {
    return t == null ? void 0 : t[e];
  }
  function xt(t) {
    var e = !1;
    if (t != null && typeof t.toString != "function")
      try {
        e = !!(t + "");
      } catch {
      }
    return e;
  }
  function Ct(t) {
    var e = -1, r = Array(t.size);
    return t.forEach(function(n, d) {
      r[++e] = [d, n];
    }), r;
  }
  function q(t, e) {
    return function(r) {
      return t(e(r));
    };
  }
  function Ot(t) {
    var e = -1, r = Array(t.size);
    return t.forEach(function(n) {
      r[++e] = n;
    }), r;
  }
  var ie = Array.prototype, ce = Function.prototype, B = Object.prototype, J = _["__core-js_shared__"], Mt = function() {
    var t = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), bt = ce.toString, T = B.hasOwnProperty, F = B.toString, se = RegExp(
    "^" + bt.call(T).replace(qt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Et = Qt ? _.Buffer : void 0, kt = _.Symbol, It = _.Uint8Array, oe = q(Object.getPrototypeOf, Object), fe = Object.create, ue = B.propertyIsEnumerable, he = ie.splice, Pt = Object.getOwnPropertySymbols, le = Et ? Et.isBuffer : void 0, de = q(Object.keys, Object), X = b(_, "DataView"), k = b(_, "Map"), Y = b(_, "Promise"), Z = b(_, "Set"), z = b(_, "WeakMap"), I = b(Object, "create"), pe = x(X), ge = x(k), ye = x(Y), _e = x(Z), we = x(z), Gt = kt ? kt.prototype : void 0, Rt = Gt ? Gt.valueOf : void 0;
  function m(t) {
    var e = -1, r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Ae() {
    this.__data__ = I ? I(null) : {};
  }
  function Te(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function ve(t) {
    var e = this.__data__;
    if (I) {
      var r = e[t];
      return r === i ? void 0 : r;
    }
    return T.call(e, t) ? e[t] : void 0;
  }
  function me(t) {
    var e = this.__data__;
    return I ? e[t] !== void 0 : T.call(e, t);
  }
  function Se(t, e) {
    var r = this.__data__;
    return r[t] = I && e === void 0 ? i : e, this;
  }
  m.prototype.clear = Ae, m.prototype.delete = Te, m.prototype.get = ve, m.prototype.has = me, m.prototype.set = Se;
  function w(t) {
    var e = -1, r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function xe() {
    this.__data__ = [];
  }
  function Ce(t) {
    var e = this.__data__, r = $(e, t);
    if (r < 0)
      return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : he.call(e, r, 1), !0;
  }
  function Oe(t) {
    var e = this.__data__, r = $(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function Me(t) {
    return $(this.__data__, t) > -1;
  }
  function be(t, e) {
    var r = this.__data__, n = $(r, t);
    return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
  }
  w.prototype.clear = xe, w.prototype.delete = Ce, w.prototype.get = Oe, w.prototype.has = Me, w.prototype.set = be;
  function O(t) {
    var e = -1, r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Ee() {
    this.__data__ = {
      hash: new m(),
      map: new (k || w)(),
      string: new m()
    };
  }
  function ke(t) {
    return D(this, t).delete(t);
  }
  function Ie(t) {
    return D(this, t).get(t);
  }
  function Pe(t) {
    return D(this, t).has(t);
  }
  function Ge(t, e) {
    return D(this, t).set(t, e), this;
  }
  O.prototype.clear = Ee, O.prototype.delete = ke, O.prototype.get = Ie, O.prototype.has = Pe, O.prototype.set = Ge;
  function M(t) {
    this.__data__ = new w(t);
  }
  function Re() {
    this.__data__ = new w();
  }
  function Be(t) {
    return this.__data__.delete(t);
  }
  function Fe(t) {
    return this.__data__.get(t);
  }
  function $e(t) {
    return this.__data__.has(t);
  }
  function De(t, e) {
    var r = this.__data__;
    if (r instanceof w) {
      var n = r.__data__;
      if (!k || n.length < l - 1)
        return n.push([t, e]), this;
      r = this.__data__ = new O(n);
    }
    return r.set(t, e), this;
  }
  M.prototype.clear = Re, M.prototype.delete = Be, M.prototype.get = Fe, M.prototype.has = $e, M.prototype.set = De;
  function He(t, e) {
    var r = tt(t) || fr(t) ? ne(t.length, String) : [], n = r.length, d = !!n;
    for (var g in t)
      T.call(t, g) && !(d && (g == "length" || ir(g, n))) && r.push(g);
    return r;
  }
  function Bt(t, e, r) {
    var n = t[e];
    (!(T.call(t, e) && Ht(n, r)) || r === void 0 && !(e in t)) && (t[e] = r);
  }
  function $(t, e) {
    for (var r = t.length; r--; )
      if (Ht(t[r][0], e))
        return r;
    return -1;
  }
  function Ue(t, e) {
    return t && Ft(e, et(e), t);
  }
  function Q(t, e, r, n, d, g, A) {
    var y;
    if (n && (y = g ? n(t, d, g, A) : n(t)), y !== void 0)
      return y;
    if (!H(t))
      return t;
    var Nt = tt(t);
    if (Nt) {
      if (y = rr(t), !e)
        return je(t, y);
    } else {
      var E = S(t), Lt = E == C || E == it;
      if (hr(t))
        return qe(t, e);
      if (E == V || E == c || Lt && !g) {
        if (xt(t))
          return g ? t : {};
        if (y = nr(Lt ? {} : t), !e)
          return tr(t, Ue(y, t));
      } else {
        if (!o[E])
          return g ? t : {};
        y = ar(t, E, Q, e);
      }
    }
    A || (A = new M());
    var Vt = A.get(t);
    if (Vt)
      return Vt;
    if (A.set(t, y), !Nt)
      var Wt = r ? er(t) : et(t);
    return ee(Wt || t, function(rt, U) {
      Wt && (U = rt, rt = t[U]), Bt(y, U, Q(rt, e, r, n, U, t, A));
    }), y;
  }
  function Ke(t) {
    return H(t) ? fe(t) : {};
  }
  function Ne(t, e, r) {
    var n = e(t);
    return tt(t) ? n : re(n, r(t));
  }
  function Le(t) {
    return F.call(t);
  }
  function Ve(t) {
    if (!H(t) || sr(t))
      return !1;
    var e = Kt(t) || xt(t) ? se : Xt;
    return e.test(x(t));
  }
  function We(t) {
    if (!Dt(t))
      return de(t);
    var e = [];
    for (var r in Object(t))
      T.call(t, r) && r != "constructor" && e.push(r);
    return e;
  }
  function qe(t, e) {
    if (e)
      return t.slice();
    var r = new t.constructor(t.length);
    return t.copy(r), r;
  }
  function j(t) {
    var e = new t.constructor(t.byteLength);
    return new It(e).set(new It(t)), e;
  }
  function Je(t, e) {
    var r = e ? j(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.byteLength);
  }
  function Xe(t, e, r) {
    var n = e ? r(Ct(t), !0) : Ct(t);
    return St(n, jt, new t.constructor());
  }
  function Ye(t) {
    var e = new t.constructor(t.source, Jt.exec(t));
    return e.lastIndex = t.lastIndex, e;
  }
  function Ze(t, e, r) {
    var n = e ? r(Ot(t), !0) : Ot(t);
    return St(n, te, new t.constructor());
  }
  function ze(t) {
    return Rt ? Object(Rt.call(t)) : {};
  }
  function Qe(t, e) {
    var r = e ? j(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length);
  }
  function je(t, e) {
    var r = -1, n = t.length;
    for (e || (e = Array(n)); ++r < n; )
      e[r] = t[r];
    return e;
  }
  function Ft(t, e, r, n) {
    r || (r = {});
    for (var d = -1, g = e.length; ++d < g; ) {
      var A = e[d], y = void 0;
      Bt(r, A, y === void 0 ? t[A] : y);
    }
    return r;
  }
  function tr(t, e) {
    return Ft(t, $t(t), e);
  }
  function er(t) {
    return Ne(t, et, $t);
  }
  function D(t, e) {
    var r = t.__data__;
    return cr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function b(t, e) {
    var r = ae(t, e);
    return Ve(r) ? r : void 0;
  }
  var $t = Pt ? q(Pt, Object) : pr, S = Le;
  (X && S(new X(new ArrayBuffer(1))) != R || k && S(new k()) != P || Y && S(Y.resolve()) != st || Z && S(new Z()) != G || z && S(new z()) != W) && (S = function(t) {
    var e = F.call(t), r = e == V ? t.constructor : void 0, n = r ? x(r) : void 0;
    if (n)
      switch (n) {
        case pe:
          return R;
        case ge:
          return P;
        case ye:
          return st;
        case _e:
          return G;
        case we:
          return W;
      }
    return e;
  });
  function rr(t) {
    var e = t.length, r = t.constructor(e);
    return e && typeof t[0] == "string" && T.call(t, "index") && (r.index = t.index, r.input = t.input), r;
  }
  function nr(t) {
    return typeof t.constructor == "function" && !Dt(t) ? Ke(oe(t)) : {};
  }
  function ar(t, e, r, n) {
    var d = t.constructor;
    switch (e) {
      case ht:
        return j(t);
      case p:
      case v:
        return new d(+t);
      case R:
        return Je(t, n);
      case lt:
      case dt:
      case pt:
      case gt:
      case yt:
      case _t:
      case wt:
      case At:
      case Tt:
        return Qe(t, n);
      case P:
        return Xe(t, n, r);
      case ct:
      case ft:
        return new d(t);
      case ot:
        return Ye(t);
      case G:
        return Ze(t, n, r);
      case ut:
        return ze(t);
    }
  }
  function ir(t, e) {
    return e = e ?? h, !!e && (typeof t == "number" || Yt.test(t)) && t > -1 && t % 1 == 0 && t < e;
  }
  function cr(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function sr(t) {
    return !!Mt && Mt in t;
  }
  function Dt(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || B;
    return t === r;
  }
  function x(t) {
    if (t != null) {
      try {
        return bt.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function or(t) {
    return Q(t, !0, !0);
  }
  function Ht(t, e) {
    return t === e || t !== t && e !== e;
  }
  function fr(t) {
    return ur(t) && T.call(t, "callee") && (!ue.call(t, "callee") || F.call(t) == c);
  }
  var tt = Array.isArray;
  function Ut(t) {
    return t != null && lr(t.length) && !Kt(t);
  }
  function ur(t) {
    return dr(t) && Ut(t);
  }
  var hr = le || gr;
  function Kt(t) {
    var e = H(t) ? F.call(t) : "";
    return e == C || e == it;
  }
  function lr(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= h;
  }
  function H(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function dr(t) {
    return !!t && typeof t == "object";
  }
  function et(t) {
    return Ut(t) ? He(t) : We(t);
  }
  function pr() {
    return [];
  }
  function gr() {
    return !1;
  }
  a.exports = or;
})(N, N.exports);
var _r = N.exports;
const at = /* @__PURE__ */ yr(_r), mr = (a = [], s, l = !0) => {
  const i = [];
  for (const c of a)
    i.push(L(c));
  return Ar(i, l ? at(s) : s);
}, L = (a) => {
  if (typeof a == "string" && a.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
    const s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    if (!s)
      throw new Error("Color can be only hex or rgb array (ex. [10,20,30])");
    return [
      Math.round(parseInt(s[1], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(s[2], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(s[3], 16) / 255 * 1e3) / 1e3
    ];
  } else {
    if (typeof a == "object" && a.length === 3 && a.every((s) => s >= 0 && s <= 255))
      return [
        Math.round(a[0] / 255 * 1e3) / 1e3,
        Math.round(a[1] / 255 * 1e3) / 1e3,
        Math.round(a[2] / 255 * 1e3) / 1e3
      ];
    if (a)
      throw new Error("Color can be only hex or rgb array (ex. [10,20,30])");
    return;
  }
}, nt = (a) => Math.round(a * 1e3) / 1e3, wr = (a, s, l, i = !0) => {
  const h = L(a), c = L(s);
  if (!h || !c)
    throw new Error("Proper colors must be used for both source and target");
  function f(p, v, u) {
    if (u && u.s && Array.isArray(u.s) && u.s.length === 4)
      p[0] === u.s[0] && p[1] === u.s[1] && p[2] === u.s[2] && (u.s = [...v, 1]);
    else if (u && u.c && u.c.k)
      Array.isArray(u.c.k) && typeof u.c.k[0] != "number" ? f(p, v, u.c.k) : p[0] === nt(u.c.k[0]) && p[1] === nt(u.c.k[1]) && p[2] === nt(u.c.k[2]) && (u.c.k = v);
    else
      for (const C in u)
        typeof u[C] == "object" && f(p, v, u[C]);
    return u;
  }
  return f(h, c, i ? at(l) : l);
}, Sr = (a, s, l = !0) => {
  const i = L(a);
  if (!i)
    throw new Error("Proper colors must be used for target");
  function h(c, f) {
    if (f && f.s && Array.isArray(f.s) && f.s.length === 4)
      f.s = [...c, 1];
    else if (f && f.c && f.c.k)
      Array.isArray(f.c.k) && typeof f.c.k[0] != "number" ? h(c, f.c.k) : f.c.k = c;
    else
      for (const p in f)
        typeof f[p] == "object" && h(c, f[p]);
    return f;
  }
  return h(i, l ? at(s) : s);
}, Ar = (a, s) => {
  let l = 0;
  function i(h, c) {
    c && c.s && Array.isArray(c.s) && c.s.length === 4 ? (h[l] && (c.s = [...h[l], 1]), l++) : c && c.c && c.c.k && (Array.isArray(c.c.k) && typeof c.c.k[0] != "number" ? i(h, c.c.k) : (h[l] && (c.c.k = h[l]), l++));
    for (const f in c)
      typeof c[f] == "object" && i(h, c[f]);
    return c;
  }
  return i(a, s);
}, Tr = (a) => [Math.round(a[0] * 255), Math.round(a[1] * 255), Math.round(a[2] * 255)], vr = (a) => [
  Math.round(a[0] * 255),
  Math.round(a[1] * 255),
  Math.round(a[2] * 255),
  a[3]
], xr = (a) => {
  const s = [];
  function l(i) {
    if (i && i.s && Array.isArray(i.s) && i.s.length === 4)
      s.push(vr(i.s));
    else if (i.c && i.c.k)
      Array.isArray(i.c.k) && typeof i.c.k[0] != "number" ? l(i.c.k) : s.push(Tr(i.c.k));
    else
      for (const h in i)
        typeof i[h] == "object" && l(i[h]);
    return s;
  }
  return l(a), s;
}, Cr = (a, s) => a.reduce((l, [i, h]) => wr(i, h, l), s);
export {
  mr as colorify,
  Sr as flatten,
  xr as getColors,
  wr as replaceColor,
  Cr as replaceColors
};
