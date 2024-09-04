const ut = (t) => {
  if (typeof t == "string") {
    const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    if (!e)
      throw new Error("Color does not match hex format");
    return [
      Math.round(parseInt(e[1], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(e[2], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(e[3], 16) / 255 * 1e3) / 1e3,
      1
    ];
  } else {
    if (typeof t == "object" && t.length === 3 && t.every((e) => e >= 0 && e <= 255))
      return [
        Math.round(t[0] / 255 * 1e3) / 1e3,
        Math.round(t[1] / 255 * 1e3) / 1e3,
        Math.round(t[2] / 255 * 1e3) / 1e3,
        1
      ];
    if (typeof t == "object" && t.length === 4 && t.every((e) => e >= 0 && e <= 255))
      return [
        Math.round(t[0] / 255 * 1e3) / 1e3,
        Math.round(t[1] / 255 * 1e3) / 1e3,
        Math.round(t[2] / 255 * 1e3) / 1e3,
        t[3]
      ];
    throw t ? new Error("Color can be only hex or rgb(a) array (ex. [10,20,30,1])") : new Error("Color not defined");
  }
}, Fp = (t) => {
  const e = Math.round(t[0] * 255).toString(16).padStart(2, "0"), a = Math.round(t[1] * 255).toString(16).padStart(2, "0"), o = Math.round(t[2] * 255).toString(16).padStart(2, "0");
  return `#${e}${a}${o}`;
}, Qa = (t) => [Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)], kr = (t) => [
  Math.round(t[0] * 255),
  Math.round(t[1] * 255),
  Math.round(t[2] * 255),
  t[3]
], tn = (t) => {
  const e = [];
  function a(o) {
    if (o.g && o.g.k && o.g.k.k && Array.isArray(o.g.k.k) && o.g.k.k.length % 4 === 0) {
      Array.isArray(o.g.k.k) && typeof o.g.k.k[0] != "number" && a(o.g.k.k);
      const c = [...o.g.k.k];
      for (; c.length; ) {
        const l = [...c.splice(1, 3), c.shift()];
        e.push(kr(l));
      }
    } else if (o.s && Array.isArray(o.s) && o.s.length === 4)
      e.push(kr(o.s));
    else if (o.c && o.c.k)
      Array.isArray(o.c.k) && typeof o.c.k[0] != "number" ? a(o.c.k) : e.push(Qa(o.c.k));
    else
      for (const c in o)
        typeof o[c] == "object" && a(o[c]);
    return e;
  }
  return a(t), e;
}, Bp = (t) => {
  const a = tn(t).map((c) => JSON.stringify(c)), o = new Set(a);
  return Array.from(o, (c) => JSON.parse(c));
};
var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ft = { exports: {} };
ft.exports;
(function(t, e) {
  var a = 200, o = "__lodash_hash_undefined__", c = 9007199254740991, l = "[object Arguments]", i = "[object Array]", p = "[object Boolean]", g = "[object Date]", f = "[object Error]", _ = "[object Function]", A = "[object GeneratorFunction]", w = "[object Map]", W = "[object Number]", q = "[object Object]", J = "[object Promise]", S = "[object RegExp]", T = "[object Set]", Yt = "[object String]", Xt = "[object Symbol]", bt = "[object WeakMap]", Zt = "[object ArrayBuffer]", rt = "[object DataView]", Qt = "[object Float32Array]", tr = "[object Float64Array]", rr = "[object Int8Array]", er = "[object Int16Array]", ar = "[object Int32Array]", nr = "[object Uint8Array]", or = "[object Uint8ClampedArray]", sr = "[object Uint16Array]", ir = "[object Uint32Array]", Me = /[\\^$.*+?()[\]{}|]/g, Pe = /\w*$/, je = /^\[object .+?Constructor\]$/, Ee = /^(?:0|[1-9]\d*)$/, h = {};
  h[l] = h[i] = h[Zt] = h[rt] = h[p] = h[g] = h[Qt] = h[tr] = h[rr] = h[er] = h[ar] = h[w] = h[W] = h[q] = h[S] = h[T] = h[Yt] = h[Xt] = h[nr] = h[or] = h[sr] = h[ir] = !0, h[f] = h[_] = h[bt] = !1;
  var ke = typeof j == "object" && j && j.Object === Object && j, Oe = typeof self == "object" && self && self.Object === Object && self, C = ke || Oe || Function("return this")(), cr = e && !e.nodeType && e, ur = cr && !0 && t && !t.nodeType && t, De = ur && ur.exports === cr;
  function Ge(r, n) {
    return r.set(n[0], n[1]), r;
  }
  function Fe(r, n) {
    return r.add(n), r;
  }
  function Be(r, n) {
    for (var s = -1, u = r ? r.length : 0; ++s < u && n(r[s], s, r) !== !1; )
      ;
    return r;
  }
  function Ue(r, n) {
    for (var s = -1, u = n.length, d = r.length; ++s < u; )
      r[d + s] = n[s];
    return r;
  }
  function fr(r, n, s, u) {
    for (var d = -1, $ = r ? r.length : 0; ++d < $; )
      s = n(s, r[d], d, r);
    return s;
  }
  function Le(r, n) {
    for (var s = -1, u = Array(r); ++s < r; )
      u[s] = n(s);
    return u;
  }
  function Ne(r, n) {
    return r == null ? void 0 : r[n];
  }
  function lr(r) {
    var n = !1;
    if (r != null && typeof r.toString != "function")
      try {
        n = !!(r + "");
      } catch {
      }
    return n;
  }
  function pr(r) {
    var n = -1, s = Array(r.size);
    return r.forEach(function(u, d) {
      s[++n] = [d, u];
    }), s;
  }
  function At(r, n) {
    return function(s) {
      return r(n(s));
    };
  }
  function gr(r) {
    var n = -1, s = Array(r.size);
    return r.forEach(function(u) {
      s[++n] = u;
    }), s;
  }
  var Ke = Array.prototype, He = Function.prototype, et = Object.prototype, Tt = C["__core-js_shared__"], hr = function() {
    var r = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }(), yr = He.toString, P = et.hasOwnProperty, at = et.toString, Re = RegExp(
    "^" + yr.call(P).replace(Me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), vr = De ? C.Buffer : void 0, _r = C.Symbol, dr = C.Uint8Array, Ve = At(Object.getPrototypeOf, Object), ze = Object.create, We = et.propertyIsEnumerable, qe = Ke.splice, $r = Object.getOwnPropertySymbols, Je = vr ? vr.isBuffer : void 0, Ye = At(Object.keys, Object), St = U(C, "DataView"), Y = U(C, "Map"), wt = U(C, "Promise"), mt = U(C, "Set"), Ct = U(C, "WeakMap"), X = U(Object, "create"), Xe = O(St), Ze = O(Y), Qe = O(wt), ta = O(mt), ra = O(Ct), br = _r ? _r.prototype : void 0, Ar = br ? br.valueOf : void 0;
  function E(r) {
    var n = -1, s = r ? r.length : 0;
    for (this.clear(); ++n < s; ) {
      var u = r[n];
      this.set(u[0], u[1]);
    }
  }
  function ea() {
    this.__data__ = X ? X(null) : {};
  }
  function aa(r) {
    return this.has(r) && delete this.__data__[r];
  }
  function na(r) {
    var n = this.__data__;
    if (X) {
      var s = n[r];
      return s === o ? void 0 : s;
    }
    return P.call(n, r) ? n[r] : void 0;
  }
  function oa(r) {
    var n = this.__data__;
    return X ? n[r] !== void 0 : P.call(n, r);
  }
  function sa(r, n) {
    var s = this.__data__;
    return s[r] = X && n === void 0 ? o : n, this;
  }
  E.prototype.clear = ea, E.prototype.delete = aa, E.prototype.get = na, E.prototype.has = oa, E.prototype.set = sa;
  function I(r) {
    var n = -1, s = r ? r.length : 0;
    for (this.clear(); ++n < s; ) {
      var u = r[n];
      this.set(u[0], u[1]);
    }
  }
  function ia() {
    this.__data__ = [];
  }
  function ca(r) {
    var n = this.__data__, s = nt(n, r);
    if (s < 0)
      return !1;
    var u = n.length - 1;
    return s == u ? n.pop() : qe.call(n, s, 1), !0;
  }
  function ua(r) {
    var n = this.__data__, s = nt(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  function fa(r) {
    return nt(this.__data__, r) > -1;
  }
  function la(r, n) {
    var s = this.__data__, u = nt(s, r);
    return u < 0 ? s.push([r, n]) : s[u][1] = n, this;
  }
  I.prototype.clear = ia, I.prototype.delete = ca, I.prototype.get = ua, I.prototype.has = fa, I.prototype.set = la;
  function F(r) {
    var n = -1, s = r ? r.length : 0;
    for (this.clear(); ++n < s; ) {
      var u = r[n];
      this.set(u[0], u[1]);
    }
  }
  function pa() {
    this.__data__ = {
      hash: new E(),
      map: new (Y || I)(),
      string: new E()
    };
  }
  function ga(r) {
    return ot(this, r).delete(r);
  }
  function ha(r) {
    return ot(this, r).get(r);
  }
  function ya(r) {
    return ot(this, r).has(r);
  }
  function va(r, n) {
    return ot(this, r).set(r, n), this;
  }
  F.prototype.clear = pa, F.prototype.delete = ga, F.prototype.get = ha, F.prototype.has = ya, F.prototype.set = va;
  function B(r) {
    this.__data__ = new I(r);
  }
  function _a() {
    this.__data__ = new I();
  }
  function da(r) {
    return this.__data__.delete(r);
  }
  function $a(r) {
    return this.__data__.get(r);
  }
  function ba(r) {
    return this.__data__.has(r);
  }
  function Aa(r, n) {
    var s = this.__data__;
    if (s instanceof I) {
      var u = s.__data__;
      if (!Y || u.length < a - 1)
        return u.push([r, n]), this;
      s = this.__data__ = new F(u);
    }
    return s.set(r, n), this;
  }
  B.prototype.clear = _a, B.prototype.delete = da, B.prototype.get = $a, B.prototype.has = ba, B.prototype.set = Aa;
  function Ta(r, n) {
    var s = Mt(r) || za(r) ? Le(r.length, String) : [], u = s.length, d = !!u;
    for (var $ in r)
      P.call(r, $) && !(d && ($ == "length" || Ka($, u))) && s.push($);
    return s;
  }
  function Tr(r, n, s) {
    var u = r[n];
    (!(P.call(r, n) && Cr(u, s)) || s === void 0 && !(n in r)) && (r[n] = s);
  }
  function nt(r, n) {
    for (var s = r.length; s--; )
      if (Cr(r[s][0], n))
        return s;
    return -1;
  }
  function Sa(r, n) {
    return r && Sr(n, Pt(n), r);
  }
  function It(r, n, s, u, d, $, x) {
    var b;
    if (u && (b = $ ? u(r, d, $, x) : u(r)), b !== void 0)
      return b;
    if (!st(r))
      return r;
    var Mr = Mt(r);
    if (Mr) {
      if (b = Ua(r), !n)
        return Ga(r, b);
    } else {
      var L = k(r), Pr = L == _ || L == A;
      if (qa(r))
        return Ma(r, n);
      if (L == q || L == l || Pr && !$) {
        if (lr(r))
          return $ ? r : {};
        if (b = La(Pr ? {} : r), !n)
          return Fa(r, Sa(b, r));
      } else {
        if (!h[L])
          return $ ? r : {};
        b = Na(r, L, It, n);
      }
    }
    x || (x = new B());
    var jr = x.get(r);
    if (jr)
      return jr;
    if (x.set(r, b), !Mr)
      var Er = s ? Ba(r) : Pt(r);
    return Be(Er || r, function(jt, it) {
      Er && (it = jt, jt = r[it]), Tr(b, it, It(jt, n, s, u, it, r, x));
    }), b;
  }
  function wa(r) {
    return st(r) ? ze(r) : {};
  }
  function ma(r, n, s) {
    var u = n(r);
    return Mt(r) ? u : Ue(u, s(r));
  }
  function Ca(r) {
    return at.call(r);
  }
  function Ia(r) {
    if (!st(r) || Ra(r))
      return !1;
    var n = xr(r) || lr(r) ? Re : je;
    return n.test(O(r));
  }
  function xa(r) {
    if (!mr(r))
      return Ye(r);
    var n = [];
    for (var s in Object(r))
      P.call(r, s) && s != "constructor" && n.push(s);
    return n;
  }
  function Ma(r, n) {
    if (n)
      return r.slice();
    var s = new r.constructor(r.length);
    return r.copy(s), s;
  }
  function xt(r) {
    var n = new r.constructor(r.byteLength);
    return new dr(n).set(new dr(r)), n;
  }
  function Pa(r, n) {
    var s = n ? xt(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.byteLength);
  }
  function ja(r, n, s) {
    var u = n ? s(pr(r), !0) : pr(r);
    return fr(u, Ge, new r.constructor());
  }
  function Ea(r) {
    var n = new r.constructor(r.source, Pe.exec(r));
    return n.lastIndex = r.lastIndex, n;
  }
  function ka(r, n, s) {
    var u = n ? s(gr(r), !0) : gr(r);
    return fr(u, Fe, new r.constructor());
  }
  function Oa(r) {
    return Ar ? Object(Ar.call(r)) : {};
  }
  function Da(r, n) {
    var s = n ? xt(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.length);
  }
  function Ga(r, n) {
    var s = -1, u = r.length;
    for (n || (n = Array(u)); ++s < u; )
      n[s] = r[s];
    return n;
  }
  function Sr(r, n, s, u) {
    s || (s = {});
    for (var d = -1, $ = n.length; ++d < $; ) {
      var x = n[d], b = void 0;
      Tr(s, x, b === void 0 ? r[x] : b);
    }
    return s;
  }
  function Fa(r, n) {
    return Sr(r, wr(r), n);
  }
  function Ba(r) {
    return ma(r, Pt, wr);
  }
  function ot(r, n) {
    var s = r.__data__;
    return Ha(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  function U(r, n) {
    var s = Ne(r, n);
    return Ia(s) ? s : void 0;
  }
  var wr = $r ? At($r, Object) : Xa, k = Ca;
  (St && k(new St(new ArrayBuffer(1))) != rt || Y && k(new Y()) != w || wt && k(wt.resolve()) != J || mt && k(new mt()) != T || Ct && k(new Ct()) != bt) && (k = function(r) {
    var n = at.call(r), s = n == q ? r.constructor : void 0, u = s ? O(s) : void 0;
    if (u)
      switch (u) {
        case Xe:
          return rt;
        case Ze:
          return w;
        case Qe:
          return J;
        case ta:
          return T;
        case ra:
          return bt;
      }
    return n;
  });
  function Ua(r) {
    var n = r.length, s = r.constructor(n);
    return n && typeof r[0] == "string" && P.call(r, "index") && (s.index = r.index, s.input = r.input), s;
  }
  function La(r) {
    return typeof r.constructor == "function" && !mr(r) ? wa(Ve(r)) : {};
  }
  function Na(r, n, s, u) {
    var d = r.constructor;
    switch (n) {
      case Zt:
        return xt(r);
      case p:
      case g:
        return new d(+r);
      case rt:
        return Pa(r, u);
      case Qt:
      case tr:
      case rr:
      case er:
      case ar:
      case nr:
      case or:
      case sr:
      case ir:
        return Da(r, u);
      case w:
        return ja(r, u, s);
      case W:
      case Yt:
        return new d(r);
      case S:
        return Ea(r);
      case T:
        return ka(r, u, s);
      case Xt:
        return Oa(r);
    }
  }
  function Ka(r, n) {
    return n = n ?? c, !!n && (typeof r == "number" || Ee.test(r)) && r > -1 && r % 1 == 0 && r < n;
  }
  function Ha(r) {
    var n = typeof r;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null;
  }
  function Ra(r) {
    return !!hr && hr in r;
  }
  function mr(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || et;
    return r === s;
  }
  function O(r) {
    if (r != null) {
      try {
        return yr.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  function Va(r) {
    return It(r, !0, !0);
  }
  function Cr(r, n) {
    return r === n || r !== r && n !== n;
  }
  function za(r) {
    return Wa(r) && P.call(r, "callee") && (!We.call(r, "callee") || at.call(r) == l);
  }
  var Mt = Array.isArray;
  function Ir(r) {
    return r != null && Ja(r.length) && !xr(r);
  }
  function Wa(r) {
    return Ya(r) && Ir(r);
  }
  var qa = Je || Za;
  function xr(r) {
    var n = st(r) ? at.call(r) : "";
    return n == _ || n == A;
  }
  function Ja(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= c;
  }
  function st(r) {
    var n = typeof r;
    return !!r && (n == "object" || n == "function");
  }
  function Ya(r) {
    return !!r && typeof r == "object";
  }
  function Pt(r) {
    return Ir(r) ? Ta(r) : xa(r);
  }
  function Xa() {
    return [];
  }
  function Za() {
    return !1;
  }
  t.exports = Va;
})(ft, ft.exports);
var rn = ft.exports;
const Bt = /* @__PURE__ */ oe(rn);
function en() {
  this.__data__ = [], this.size = 0;
}
var an = en;
function nn(t, e) {
  return t === e || t !== t && e !== e;
}
var se = nn, on = se;
function sn(t, e) {
  for (var a = t.length; a--; )
    if (on(t[a][0], e))
      return a;
  return -1;
}
var ht = sn, cn = ht, un = Array.prototype, fn = un.splice;
function ln(t) {
  var e = this.__data__, a = cn(e, t);
  if (a < 0)
    return !1;
  var o = e.length - 1;
  return a == o ? e.pop() : fn.call(e, a, 1), --this.size, !0;
}
var pn = ln, gn = ht;
function hn(t) {
  var e = this.__data__, a = gn(e, t);
  return a < 0 ? void 0 : e[a][1];
}
var yn = hn, vn = ht;
function _n(t) {
  return vn(this.__data__, t) > -1;
}
var dn = _n, $n = ht;
function bn(t, e) {
  var a = this.__data__, o = $n(a, t);
  return o < 0 ? (++this.size, a.push([t, e])) : a[o][1] = e, this;
}
var An = bn, Tn = an, Sn = pn, wn = yn, mn = dn, Cn = An;
function K(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
K.prototype.clear = Tn;
K.prototype.delete = Sn;
K.prototype.get = wn;
K.prototype.has = mn;
K.prototype.set = Cn;
var yt = K, In = yt;
function xn() {
  this.__data__ = new In(), this.size = 0;
}
var Mn = xn;
function Pn(t) {
  var e = this.__data__, a = e.delete(t);
  return this.size = e.size, a;
}
var jn = Pn;
function En(t) {
  return this.__data__.get(t);
}
var kn = En;
function On(t) {
  return this.__data__.has(t);
}
var Dn = On, Gn = typeof j == "object" && j && j.Object === Object && j, ie = Gn, Fn = ie, Bn = typeof self == "object" && self && self.Object === Object && self, Un = Fn || Bn || Function("return this")(), m = Un, Ln = m, Nn = Ln.Symbol, Ut = Nn, Or = Ut, ce = Object.prototype, Kn = ce.hasOwnProperty, Hn = ce.toString, Z = Or ? Or.toStringTag : void 0;
function Rn(t) {
  var e = Kn.call(t, Z), a = t[Z];
  try {
    t[Z] = void 0;
    var o = !0;
  } catch {
  }
  var c = Hn.call(t);
  return o && (e ? t[Z] = a : delete t[Z]), c;
}
var Vn = Rn, zn = Object.prototype, Wn = zn.toString;
function qn(t) {
  return Wn.call(t);
}
var Jn = qn, Dr = Ut, Yn = Vn, Xn = Jn, Zn = "[object Null]", Qn = "[object Undefined]", Gr = Dr ? Dr.toStringTag : void 0;
function to(t) {
  return t == null ? t === void 0 ? Qn : Zn : Gr && Gr in Object(t) ? Yn(t) : Xn(t);
}
var vt = to;
function ro(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Q = ro, eo = vt, ao = Q, no = "[object AsyncFunction]", oo = "[object Function]", so = "[object GeneratorFunction]", io = "[object Proxy]";
function co(t) {
  if (!ao(t))
    return !1;
  var e = eo(t);
  return e == oo || e == so || e == no || e == io;
}
var ue = co, uo = m, fo = uo["__core-js_shared__"], lo = fo, Et = lo, Fr = function() {
  var t = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function po(t) {
  return !!Fr && Fr in t;
}
var go = po, ho = Function.prototype, yo = ho.toString;
function vo(t) {
  if (t != null) {
    try {
      return yo.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var fe = vo, _o = ue, $o = go, bo = Q, Ao = fe, To = /[\\^$.*+?()[\]{}|]/g, So = /^\[object .+?Constructor\]$/, wo = Function.prototype, mo = Object.prototype, Co = wo.toString, Io = mo.hasOwnProperty, xo = RegExp(
  "^" + Co.call(Io).replace(To, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mo(t) {
  if (!bo(t) || $o(t))
    return !1;
  var e = _o(t) ? xo : So;
  return e.test(Ao(t));
}
var Po = Mo;
function jo(t, e) {
  return t == null ? void 0 : t[e];
}
var Eo = jo, ko = Po, Oo = Eo;
function Do(t, e) {
  var a = Oo(t, e);
  return ko(a) ? a : void 0;
}
var G = Do, Go = G, Fo = m, Bo = Go(Fo, "Map"), Lt = Bo, Uo = G, Lo = Uo(Object, "create"), _t = Lo, Br = _t;
function No() {
  this.__data__ = Br ? Br(null) : {}, this.size = 0;
}
var Ko = No;
function Ho(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ro = Ho, Vo = _t, zo = "__lodash_hash_undefined__", Wo = Object.prototype, qo = Wo.hasOwnProperty;
function Jo(t) {
  var e = this.__data__;
  if (Vo) {
    var a = e[t];
    return a === zo ? void 0 : a;
  }
  return qo.call(e, t) ? e[t] : void 0;
}
var Yo = Jo, Xo = _t, Zo = Object.prototype, Qo = Zo.hasOwnProperty;
function ts(t) {
  var e = this.__data__;
  return Xo ? e[t] !== void 0 : Qo.call(e, t);
}
var rs = ts, es = _t, as = "__lodash_hash_undefined__";
function ns(t, e) {
  var a = this.__data__;
  return this.size += this.has(t) ? 0 : 1, a[t] = es && e === void 0 ? as : e, this;
}
var os = ns, ss = Ko, is = Ro, cs = Yo, us = rs, fs = os;
function H(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
H.prototype.clear = ss;
H.prototype.delete = is;
H.prototype.get = cs;
H.prototype.has = us;
H.prototype.set = fs;
var ls = H, Ur = ls, ps = yt, gs = Lt;
function hs() {
  this.size = 0, this.__data__ = {
    hash: new Ur(),
    map: new (gs || ps)(),
    string: new Ur()
  };
}
var ys = hs;
function vs(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var _s = vs, ds = _s;
function $s(t, e) {
  var a = t.__data__;
  return ds(e) ? a[typeof e == "string" ? "string" : "hash"] : a.map;
}
var dt = $s, bs = dt;
function As(t) {
  var e = bs(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var Ts = As, Ss = dt;
function ws(t) {
  return Ss(this, t).get(t);
}
var ms = ws, Cs = dt;
function Is(t) {
  return Cs(this, t).has(t);
}
var xs = Is, Ms = dt;
function Ps(t, e) {
  var a = Ms(this, t), o = a.size;
  return a.set(t, e), this.size += a.size == o ? 0 : 1, this;
}
var js = Ps, Es = ys, ks = Ts, Os = ms, Ds = xs, Gs = js;
function R(t) {
  var e = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++e < a; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
R.prototype.clear = Es;
R.prototype.delete = ks;
R.prototype.get = Os;
R.prototype.has = Ds;
R.prototype.set = Gs;
var Fs = R, Bs = yt, Us = Lt, Ls = Fs, Ns = 200;
function Ks(t, e) {
  var a = this.__data__;
  if (a instanceof Bs) {
    var o = a.__data__;
    if (!Us || o.length < Ns - 1)
      return o.push([t, e]), this.size = ++a.size, this;
    a = this.__data__ = new Ls(o);
  }
  return a.set(t, e), this.size = a.size, this;
}
var Hs = Ks, Rs = yt, Vs = Mn, zs = jn, Ws = kn, qs = Dn, Js = Hs;
function V(t) {
  var e = this.__data__ = new Rs(t);
  this.size = e.size;
}
V.prototype.clear = Vs;
V.prototype.delete = zs;
V.prototype.get = Ws;
V.prototype.has = qs;
V.prototype.set = Js;
var Ys = V;
function Xs(t, e) {
  for (var a = -1, o = t == null ? 0 : t.length; ++a < o && e(t[a], a, t) !== !1; )
    ;
  return t;
}
var Zs = Xs, Qs = G, ti = function() {
  try {
    var t = Qs(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), ri = ti, Lr = ri;
function ei(t, e, a) {
  e == "__proto__" && Lr ? Lr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : t[e] = a;
}
var le = ei, ai = le, ni = se, oi = Object.prototype, si = oi.hasOwnProperty;
function ii(t, e, a) {
  var o = t[e];
  (!(si.call(t, e) && ni(o, a)) || a === void 0 && !(e in t)) && ai(t, e, a);
}
var pe = ii, ci = pe, ui = le;
function fi(t, e, a, o) {
  var c = !a;
  a || (a = {});
  for (var l = -1, i = e.length; ++l < i; ) {
    var p = e[l], g = o ? o(a[p], t[p], p, a, t) : void 0;
    g === void 0 && (g = t[p]), c ? ui(a, p, g) : ci(a, p, g);
  }
  return a;
}
var $t = fi;
function li(t, e) {
  for (var a = -1, o = Array(t); ++a < t; )
    o[a] = e(a);
  return o;
}
var pi = li;
function gi(t) {
  return t != null && typeof t == "object";
}
var tt = gi, hi = vt, yi = tt, vi = "[object Arguments]";
function _i(t) {
  return yi(t) && hi(t) == vi;
}
var di = _i, Nr = di, $i = tt, ge = Object.prototype, bi = ge.hasOwnProperty, Ai = ge.propertyIsEnumerable, Ti = Nr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Nr : function(t) {
  return $i(t) && bi.call(t, "callee") && !Ai.call(t, "callee");
}, Si = Ti, wi = Array.isArray, Nt = wi, lt = { exports: {} };
function mi() {
  return !1;
}
var Ci = mi;
lt.exports;
(function(t, e) {
  var a = m, o = Ci, c = e && !e.nodeType && e, l = c && !0 && t && !t.nodeType && t, i = l && l.exports === c, p = i ? a.Buffer : void 0, g = p ? p.isBuffer : void 0, f = g || o;
  t.exports = f;
})(lt, lt.exports);
var he = lt.exports, Ii = 9007199254740991, xi = /^(?:0|[1-9]\d*)$/;
function Mi(t, e) {
  var a = typeof t;
  return e = e ?? Ii, !!e && (a == "number" || a != "symbol" && xi.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var Pi = Mi, ji = 9007199254740991;
function Ei(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ji;
}
var ye = Ei, ki = vt, Oi = ye, Di = tt, Gi = "[object Arguments]", Fi = "[object Array]", Bi = "[object Boolean]", Ui = "[object Date]", Li = "[object Error]", Ni = "[object Function]", Ki = "[object Map]", Hi = "[object Number]", Ri = "[object Object]", Vi = "[object RegExp]", zi = "[object Set]", Wi = "[object String]", qi = "[object WeakMap]", Ji = "[object ArrayBuffer]", Yi = "[object DataView]", Xi = "[object Float32Array]", Zi = "[object Float64Array]", Qi = "[object Int8Array]", tc = "[object Int16Array]", rc = "[object Int32Array]", ec = "[object Uint8Array]", ac = "[object Uint8ClampedArray]", nc = "[object Uint16Array]", oc = "[object Uint32Array]", v = {};
v[Xi] = v[Zi] = v[Qi] = v[tc] = v[rc] = v[ec] = v[ac] = v[nc] = v[oc] = !0;
v[Gi] = v[Fi] = v[Ji] = v[Bi] = v[Yi] = v[Ui] = v[Li] = v[Ni] = v[Ki] = v[Hi] = v[Ri] = v[Vi] = v[zi] = v[Wi] = v[qi] = !1;
function sc(t) {
  return Di(t) && Oi(t.length) && !!v[ki(t)];
}
var ic = sc;
function cc(t) {
  return function(e) {
    return t(e);
  };
}
var Kt = cc, pt = { exports: {} };
pt.exports;
(function(t, e) {
  var a = ie, o = e && !e.nodeType && e, c = o && !0 && t && !t.nodeType && t, l = c && c.exports === o, i = l && a.process, p = function() {
    try {
      var g = c && c.require && c.require("util").types;
      return g || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  t.exports = p;
})(pt, pt.exports);
var Ht = pt.exports, uc = ic, fc = Kt, Kr = Ht, Hr = Kr && Kr.isTypedArray, lc = Hr ? fc(Hr) : uc, pc = lc, gc = pi, hc = Si, yc = Nt, vc = he, _c = Pi, dc = pc, $c = Object.prototype, bc = $c.hasOwnProperty;
function Ac(t, e) {
  var a = yc(t), o = !a && hc(t), c = !a && !o && vc(t), l = !a && !o && !c && dc(t), i = a || o || c || l, p = i ? gc(t.length, String) : [], g = p.length;
  for (var f in t)
    (e || bc.call(t, f)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    c && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    _c(f, g))) && p.push(f);
  return p;
}
var ve = Ac, Tc = Object.prototype;
function Sc(t) {
  var e = t && t.constructor, a = typeof e == "function" && e.prototype || Tc;
  return t === a;
}
var Rt = Sc;
function wc(t, e) {
  return function(a) {
    return t(e(a));
  };
}
var _e = wc, mc = _e, Cc = mc(Object.keys, Object), Ic = Cc, xc = Rt, Mc = Ic, Pc = Object.prototype, jc = Pc.hasOwnProperty;
function Ec(t) {
  if (!xc(t))
    return Mc(t);
  var e = [];
  for (var a in Object(t))
    jc.call(t, a) && a != "constructor" && e.push(a);
  return e;
}
var kc = Ec, Oc = ue, Dc = ye;
function Gc(t) {
  return t != null && Dc(t.length) && !Oc(t);
}
var de = Gc, Fc = ve, Bc = kc, Uc = de;
function Lc(t) {
  return Uc(t) ? Fc(t) : Bc(t);
}
var Vt = Lc, Nc = $t, Kc = Vt;
function Hc(t, e) {
  return t && Nc(e, Kc(e), t);
}
var Rc = Hc;
function Vc(t) {
  var e = [];
  if (t != null)
    for (var a in Object(t))
      e.push(a);
  return e;
}
var zc = Vc, Wc = Q, qc = Rt, Jc = zc, Yc = Object.prototype, Xc = Yc.hasOwnProperty;
function Zc(t) {
  if (!Wc(t))
    return Jc(t);
  var e = qc(t), a = [];
  for (var o in t)
    o == "constructor" && (e || !Xc.call(t, o)) || a.push(o);
  return a;
}
var Qc = Zc, tu = ve, ru = Qc, eu = de;
function au(t) {
  return eu(t) ? tu(t, !0) : ru(t);
}
var zt = au, nu = $t, ou = zt;
function su(t, e) {
  return t && nu(e, ou(e), t);
}
var iu = su, gt = { exports: {} };
gt.exports;
(function(t, e) {
  var a = m, o = e && !e.nodeType && e, c = o && !0 && t && !t.nodeType && t, l = c && c.exports === o, i = l ? a.Buffer : void 0, p = i ? i.allocUnsafe : void 0;
  function g(f, _) {
    if (_)
      return f.slice();
    var A = f.length, w = p ? p(A) : new f.constructor(A);
    return f.copy(w), w;
  }
  t.exports = g;
})(gt, gt.exports);
var cu = gt.exports;
function uu(t, e) {
  var a = -1, o = t.length;
  for (e || (e = Array(o)); ++a < o; )
    e[a] = t[a];
  return e;
}
var fu = uu;
function lu(t, e) {
  for (var a = -1, o = t == null ? 0 : t.length, c = 0, l = []; ++a < o; ) {
    var i = t[a];
    e(i, a, t) && (l[c++] = i);
  }
  return l;
}
var pu = lu;
function gu() {
  return [];
}
var $e = gu, hu = pu, yu = $e, vu = Object.prototype, _u = vu.propertyIsEnumerable, Rr = Object.getOwnPropertySymbols, du = Rr ? function(t) {
  return t == null ? [] : (t = Object(t), hu(Rr(t), function(e) {
    return _u.call(t, e);
  }));
} : yu, Wt = du, $u = $t, bu = Wt;
function Au(t, e) {
  return $u(t, bu(t), e);
}
var Tu = Au;
function Su(t, e) {
  for (var a = -1, o = e.length, c = t.length; ++a < o; )
    t[c + a] = e[a];
  return t;
}
var be = Su, wu = _e, mu = wu(Object.getPrototypeOf, Object), Ae = mu, Cu = be, Iu = Ae, xu = Wt, Mu = $e, Pu = Object.getOwnPropertySymbols, ju = Pu ? function(t) {
  for (var e = []; t; )
    Cu(e, xu(t)), t = Iu(t);
  return e;
} : Mu, Te = ju, Eu = $t, ku = Te;
function Ou(t, e) {
  return Eu(t, ku(t), e);
}
var Du = Ou, Gu = be, Fu = Nt;
function Bu(t, e, a) {
  var o = e(t);
  return Fu(t) ? o : Gu(o, a(t));
}
var Se = Bu, Uu = Se, Lu = Wt, Nu = Vt;
function Ku(t) {
  return Uu(t, Nu, Lu);
}
var Hu = Ku, Ru = Se, Vu = Te, zu = zt;
function Wu(t) {
  return Ru(t, zu, Vu);
}
var qu = Wu, Ju = G, Yu = m, Xu = Ju(Yu, "DataView"), Zu = Xu, Qu = G, tf = m, rf = Qu(tf, "Promise"), ef = rf, af = G, nf = m, of = af(nf, "Set"), sf = of, cf = G, uf = m, ff = cf(uf, "WeakMap"), lf = ff, kt = Zu, Ot = Lt, Dt = ef, Gt = sf, Ft = lf, we = vt, z = fe, Vr = "[object Map]", pf = "[object Object]", zr = "[object Promise]", Wr = "[object Set]", qr = "[object WeakMap]", Jr = "[object DataView]", gf = z(kt), hf = z(Ot), yf = z(Dt), vf = z(Gt), _f = z(Ft), D = we;
(kt && D(new kt(new ArrayBuffer(1))) != Jr || Ot && D(new Ot()) != Vr || Dt && D(Dt.resolve()) != zr || Gt && D(new Gt()) != Wr || Ft && D(new Ft()) != qr) && (D = function(t) {
  var e = we(t), a = e == pf ? t.constructor : void 0, o = a ? z(a) : "";
  if (o)
    switch (o) {
      case gf:
        return Jr;
      case hf:
        return Vr;
      case yf:
        return zr;
      case vf:
        return Wr;
      case _f:
        return qr;
    }
  return e;
});
var qt = D, df = Object.prototype, $f = df.hasOwnProperty;
function bf(t) {
  var e = t.length, a = new t.constructor(e);
  return e && typeof t[0] == "string" && $f.call(t, "index") && (a.index = t.index, a.input = t.input), a;
}
var Af = bf, Tf = m, Sf = Tf.Uint8Array, wf = Sf, Yr = wf;
function mf(t) {
  var e = new t.constructor(t.byteLength);
  return new Yr(e).set(new Yr(t)), e;
}
var Jt = mf, Cf = Jt;
function If(t, e) {
  var a = e ? Cf(t.buffer) : t.buffer;
  return new t.constructor(a, t.byteOffset, t.byteLength);
}
var xf = If, Mf = /\w*$/;
function Pf(t) {
  var e = new t.constructor(t.source, Mf.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var jf = Pf, Xr = Ut, Zr = Xr ? Xr.prototype : void 0, Qr = Zr ? Zr.valueOf : void 0;
function Ef(t) {
  return Qr ? Object(Qr.call(t)) : {};
}
var kf = Ef, Of = Jt;
function Df(t, e) {
  var a = e ? Of(t.buffer) : t.buffer;
  return new t.constructor(a, t.byteOffset, t.length);
}
var Gf = Df, Ff = Jt, Bf = xf, Uf = jf, Lf = kf, Nf = Gf, Kf = "[object Boolean]", Hf = "[object Date]", Rf = "[object Map]", Vf = "[object Number]", zf = "[object RegExp]", Wf = "[object Set]", qf = "[object String]", Jf = "[object Symbol]", Yf = "[object ArrayBuffer]", Xf = "[object DataView]", Zf = "[object Float32Array]", Qf = "[object Float64Array]", tl = "[object Int8Array]", rl = "[object Int16Array]", el = "[object Int32Array]", al = "[object Uint8Array]", nl = "[object Uint8ClampedArray]", ol = "[object Uint16Array]", sl = "[object Uint32Array]";
function il(t, e, a) {
  var o = t.constructor;
  switch (e) {
    case Yf:
      return Ff(t);
    case Kf:
    case Hf:
      return new o(+t);
    case Xf:
      return Bf(t, a);
    case Zf:
    case Qf:
    case tl:
    case rl:
    case el:
    case al:
    case nl:
    case ol:
    case sl:
      return Nf(t, a);
    case Rf:
      return new o();
    case Vf:
    case qf:
      return new o(t);
    case zf:
      return Uf(t);
    case Wf:
      return new o();
    case Jf:
      return Lf(t);
  }
}
var cl = il, ul = Q, te = Object.create, fl = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!ul(e))
      return {};
    if (te)
      return te(e);
    t.prototype = e;
    var a = new t();
    return t.prototype = void 0, a;
  };
}(), ll = fl, pl = ll, gl = Ae, hl = Rt;
function yl(t) {
  return typeof t.constructor == "function" && !hl(t) ? pl(gl(t)) : {};
}
var vl = yl, _l = qt, dl = tt, $l = "[object Map]";
function bl(t) {
  return dl(t) && _l(t) == $l;
}
var Al = bl, Tl = Al, Sl = Kt, re = Ht, ee = re && re.isMap, wl = ee ? Sl(ee) : Tl, ml = wl, Cl = qt, Il = tt, xl = "[object Set]";
function Ml(t) {
  return Il(t) && Cl(t) == xl;
}
var Pl = Ml, jl = Pl, El = Kt, ae = Ht, ne = ae && ae.isSet, kl = ne ? El(ne) : jl, Ol = kl, Dl = Ys, Gl = Zs, Fl = pe, Bl = Rc, Ul = iu, Ll = cu, Nl = fu, Kl = Tu, Hl = Du, Rl = Hu, Vl = qu, zl = qt, Wl = Af, ql = cl, Jl = vl, Yl = Nt, Xl = he, Zl = ml, Ql = Q, tp = Ol, rp = Vt, ep = zt, ap = 1, np = 2, op = 4, me = "[object Arguments]", sp = "[object Array]", ip = "[object Boolean]", cp = "[object Date]", up = "[object Error]", Ce = "[object Function]", fp = "[object GeneratorFunction]", lp = "[object Map]", pp = "[object Number]", Ie = "[object Object]", gp = "[object RegExp]", hp = "[object Set]", yp = "[object String]", vp = "[object Symbol]", _p = "[object WeakMap]", dp = "[object ArrayBuffer]", $p = "[object DataView]", bp = "[object Float32Array]", Ap = "[object Float64Array]", Tp = "[object Int8Array]", Sp = "[object Int16Array]", wp = "[object Int32Array]", mp = "[object Uint8Array]", Cp = "[object Uint8ClampedArray]", Ip = "[object Uint16Array]", xp = "[object Uint32Array]", y = {};
y[me] = y[sp] = y[dp] = y[$p] = y[ip] = y[cp] = y[bp] = y[Ap] = y[Tp] = y[Sp] = y[wp] = y[lp] = y[pp] = y[Ie] = y[gp] = y[hp] = y[yp] = y[vp] = y[mp] = y[Cp] = y[Ip] = y[xp] = !0;
y[up] = y[Ce] = y[_p] = !1;
function ct(t, e, a, o, c, l) {
  var i, p = e & ap, g = e & np, f = e & op;
  if (a && (i = c ? a(t, o, c, l) : a(t)), i !== void 0)
    return i;
  if (!Ql(t))
    return t;
  var _ = Yl(t);
  if (_) {
    if (i = Wl(t), !p)
      return Nl(t, i);
  } else {
    var A = zl(t), w = A == Ce || A == fp;
    if (Xl(t))
      return Ll(t, p);
    if (A == Ie || A == me || w && !c) {
      if (i = g || w ? {} : Jl(t), !p)
        return g ? Hl(t, Ul(i, t)) : Kl(t, Bl(i, t));
    } else {
      if (!y[A])
        return c ? t : {};
      i = ql(t, A, p);
    }
  }
  l || (l = new Dl());
  var W = l.get(t);
  if (W)
    return W;
  l.set(t, i), tp(t) ? t.forEach(function(S) {
    i.add(ct(S, e, a, S, t, l));
  }) : Zl(t) && t.forEach(function(S, T) {
    i.set(T, ct(S, e, a, T, t, l));
  });
  var q = f ? g ? Vl : Rl : g ? ep : rp, J = _ ? void 0 : q(t);
  return Gl(J || t, function(S, T) {
    J && (T = S, S = t[T]), Fl(i, T, ct(S, e, a, T, t, l));
  }), i;
}
var Mp = ct, Pp = Mp, jp = 1, Ep = 4;
function kp(t) {
  return Pp(t, jp | Ep);
}
var Op = kp;
const Dp = /* @__PURE__ */ oe(Op), Gp = (t, e, a = !0) => {
  let o = 0;
  function c(l, i) {
    i && i.s && Array.isArray(i.s) && i.s.length === 4 ? (l[o] && (i.s = [...l[o]]), o++) : i && i.c && i.c.k && (Array.isArray(i.c.k) && typeof i.c.k[0] != "number" ? c(l, i.c.k) : (l[o] && (i.c.k = l[o]), o++));
    for (const p in i)
      typeof i[p] == "object" && c(l, i[p]);
    return i;
  }
  return c(t, a ? Dp(e) : e);
}, Up = (t = [], e, a = !0) => {
  const o = [];
  return t.forEach((c) => {
    o.push(ut(c));
  }), Gp(o, a ? Bt(e) : e);
}, Lp = (t, e, a = !0) => {
  const o = ut(t);
  if (!o)
    throw new Error("Proper colors must be used for target");
  function c(l, i) {
    if (i && i.s && Array.isArray(i.s) && i.s.length === 4)
      i.s = [...l];
    else if (i && i.c && i.c.k)
      Array.isArray(i.c.k) && typeof i.c.k[0] != "number" ? c(l, i.c.k) : i.c.k = l;
    else
      for (const p in i)
        typeof i[p] == "object" && c(l, i[p]);
    return i;
  }
  return c(o, a ? Bt(e) : e);
}, M = (t) => Math.round(t * 1e3) / 1e3, N = 3e-3, xe = (t, e, a, o = !0) => {
  const c = ut(t), l = ut(e);
  if (!c || !l)
    throw new Error("Proper colors must be used for both source and target");
  function i(p, g, f) {
    if (f && f.s && Array.isArray(f.s) && f.s.length === 4)
      p[0] === f.s[0] && p[1] === f.s[1] && p[2] === f.s[2] && (f.s = [...g]);
    else if (f && f.c && f.c.k)
      Array.isArray(f.c.k) && typeof f.c.k[0] != "number" ? i(p, g, f.c.k) : Math.abs(p[0] - M(f.c.k[0])) < N && Math.abs(p[1] - M(f.c.k[1])) < N && Math.abs(p[2] - M(f.c.k[2])) < N && (f.c.k = g);
    else if (f.g && f.g.k && f.g.k.k && f.g.k.k.length % 4 === 0)
      for (let _ = 0; _ < f.g.k.k.length; _ += 4)
        Math.abs(M(p[0]) - M(f.g.k.k[_ + 1])) < N && Math.abs(M(p[1]) - M(f.g.k.k[_ + 2])) < N && Math.abs(M(p[2]) - M(f.g.k.k[_ + 3])) < N && (f.g.k.k[_ + 1] = g[0], f.g.k.k[_ + 2] = g[1], f.g.k.k[_ + 3] = g[2], f.g.k.k[_ + 4] = g[3]);
    else
      for (const _ in f)
        typeof f[_] == "object" && i(p, g, f[_]);
    return f;
  }
  return i(c, l, o ? Bt(a) : a);
}, Np = (t, e) => t.reduce((a, [o, c]) => xe(o, c, a), e), Kp = (t, e, a) => {
  let o = { ...a };
  return t.forEach((c, l) => {
    const i = e[l % e.length];
    o = xe(c, i, o);
  }), o;
};
export {
  Up as colorify,
  ut as convertColorToLottieColor,
  Fp as convertLottieColorToHex,
  Qa as convertLottieColorToRgb,
  kr as convertLottieColorToRgba,
  Lp as flatten,
  tn as getColors,
  Bp as getUniqueColors,
  Gp as modifyColors,
  xe as replaceColor,
  Np as replaceColors,
  Kp as replaceColorsLoop
};
