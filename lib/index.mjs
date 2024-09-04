const ur = (r) => {
    if (typeof r == 'string' && r.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
      const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
      if (!e) throw new Error('Color can be only hex or rgb array (ex. [10,20,30])');
      return [
        Math.round((parseInt(e[1], 16) / 255) * 1e3) / 1e3,
        Math.round((parseInt(e[2], 16) / 255) * 1e3) / 1e3,
        Math.round((parseInt(e[3], 16) / 255) * 1e3) / 1e3,
        1,
      ];
    } else {
      if (typeof r == 'object' && r.length === 3 && r.every((e) => e >= 0 && e <= 255))
        return [
          Math.round((r[0] / 255) * 1e3) / 1e3,
          Math.round((r[1] / 255) * 1e3) / 1e3,
          Math.round((r[2] / 255) * 1e3) / 1e3,
          1,
        ];
      if (typeof r == 'object' && r.length === 4 && r.every((e) => e >= 0 && e <= 255))
        return [
          Math.round((r[0] / 255) * 1e3) / 1e3,
          Math.round((r[1] / 255) * 1e3) / 1e3,
          Math.round((r[2] / 255) * 1e3) / 1e3,
          r[3],
        ];
      throw r ? new Error('Color can be only hex or rgb(a) array (ex. [10,20,30,1])') : new Error('Color not defined');
    }
  },
  Fp = (r) => {
    const e = Math.round(r[0] * 255)
        .toString(16)
        .padStart(2, '0'),
      a = Math.round(r[1] * 255)
        .toString(16)
        .padStart(2, '0'),
      o = Math.round(r[2] * 255)
        .toString(16)
        .padStart(2, '0');
    return `#${e}${a}${o}`;
  },
  Qa = (r) => [Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)],
  kt = (r) => [Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255), r[3]],
  rn = (r) => {
    const e = [];
    function a(o) {
      if (o.g && o.g.k && o.g.k.k && Array.isArray(o.g.k.k) && o.g.k.k.length % 4 === 0) {
        Array.isArray(o.g.k.k) && typeof o.g.k.k[0] != 'number' && a(o.g.k.k);
        const c = [...o.g.k.k];
        for (; c.length; ) {
          const l = [...c.splice(1, 3), c.shift()];
          e.push(kt(l));
        }
      } else if (o.s && Array.isArray(o.s) && o.s.length === 4) e.push(kt(o.s));
      else if (o.c && o.c.k) Array.isArray(o.c.k) && typeof o.c.k[0] != 'number' ? a(o.c.k) : e.push(Qa(o.c.k));
      else for (const c in o) typeof o[c] == 'object' && a(o[c]);
      return e;
    }
    return a(r), e;
  },
  Bp = (r) => {
    const a = rn(r).map((c) => JSON.stringify(c)),
      o = new Set(a);
    return Array.from(o, (c) => JSON.parse(c));
  };
var j =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function oe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r;
}
var fr = { exports: {} };
fr.exports;
(function (r, e) {
  var a = 200,
    o = '__lodash_hash_undefined__',
    c = 9007199254740991,
    l = '[object Arguments]',
    i = '[object Array]',
    p = '[object Boolean]',
    g = '[object Date]',
    f = '[object Error]',
    _ = '[object Function]',
    A = '[object GeneratorFunction]',
    w = '[object Map]',
    W = '[object Number]',
    q = '[object Object]',
    J = '[object Promise]',
    S = '[object RegExp]',
    T = '[object Set]',
    Yr = '[object String]',
    Xr = '[object Symbol]',
    br = '[object WeakMap]',
    Zr = '[object ArrayBuffer]',
    tr = '[object DataView]',
    Qr = '[object Float32Array]',
    rt = '[object Float64Array]',
    tt = '[object Int8Array]',
    et = '[object Int16Array]',
    at = '[object Int32Array]',
    nt = '[object Uint8Array]',
    ot = '[object Uint8ClampedArray]',
    st = '[object Uint16Array]',
    it = '[object Uint32Array]',
    Me = /[\\^$.*+?()[\]{}|]/g,
    Pe = /\w*$/,
    je = /^\[object .+?Constructor\]$/,
    Ee = /^(?:0|[1-9]\d*)$/,
    h = {};
  (h[l] =
    h[i] =
    h[Zr] =
    h[tr] =
    h[p] =
    h[g] =
    h[Qr] =
    h[rt] =
    h[tt] =
    h[et] =
    h[at] =
    h[w] =
    h[W] =
    h[q] =
    h[S] =
    h[T] =
    h[Yr] =
    h[Xr] =
    h[nt] =
    h[ot] =
    h[st] =
    h[it] =
      !0),
    (h[f] = h[_] = h[br] = !1);
  var ke = typeof j == 'object' && j && j.Object === Object && j,
    Oe = typeof self == 'object' && self && self.Object === Object && self,
    C = ke || Oe || Function('return this')(),
    ct = e && !e.nodeType && e,
    ut = ct && !0 && r && !r.nodeType && r,
    De = ut && ut.exports === ct;
  function Ge(t, n) {
    return t.set(n[0], n[1]), t;
  }
  function Fe(t, n) {
    return t.add(n), t;
  }
  function Be(t, n) {
    for (var s = -1, u = t ? t.length : 0; ++s < u && n(t[s], s, t) !== !1; );
    return t;
  }
  function Ue(t, n) {
    for (var s = -1, u = n.length, d = t.length; ++s < u; ) t[d + s] = n[s];
    return t;
  }
  function ft(t, n, s, u) {
    for (var d = -1, $ = t ? t.length : 0; ++d < $; ) s = n(s, t[d], d, t);
    return s;
  }
  function Le(t, n) {
    for (var s = -1, u = Array(t); ++s < t; ) u[s] = n(s);
    return u;
  }
  function Ne(t, n) {
    return t == null ? void 0 : t[n];
  }
  function lt(t) {
    var n = !1;
    if (t != null && typeof t.toString != 'function')
      try {
        n = !!(t + '');
      } catch {}
    return n;
  }
  function pt(t) {
    var n = -1,
      s = Array(t.size);
    return (
      t.forEach(function (u, d) {
        s[++n] = [d, u];
      }),
      s
    );
  }
  function Ar(t, n) {
    return function (s) {
      return t(n(s));
    };
  }
  function gt(t) {
    var n = -1,
      s = Array(t.size);
    return (
      t.forEach(function (u) {
        s[++n] = u;
      }),
      s
    );
  }
  var Ke = Array.prototype,
    He = Function.prototype,
    er = Object.prototype,
    Tr = C['__core-js_shared__'],
    ht = (function () {
      var t = /[^.]+$/.exec((Tr && Tr.keys && Tr.keys.IE_PROTO) || '');
      return t ? 'Symbol(src)_1.' + t : '';
    })(),
    yt = He.toString,
    P = er.hasOwnProperty,
    ar = er.toString,
    Re = RegExp(
      '^' +
        yt
          .call(P)
          .replace(Me, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    ),
    vt = De ? C.Buffer : void 0,
    _t = C.Symbol,
    dt = C.Uint8Array,
    Ve = Ar(Object.getPrototypeOf, Object),
    ze = Object.create,
    We = er.propertyIsEnumerable,
    qe = Ke.splice,
    $t = Object.getOwnPropertySymbols,
    Je = vt ? vt.isBuffer : void 0,
    Ye = Ar(Object.keys, Object),
    Sr = U(C, 'DataView'),
    Y = U(C, 'Map'),
    wr = U(C, 'Promise'),
    mr = U(C, 'Set'),
    Cr = U(C, 'WeakMap'),
    X = U(Object, 'create'),
    Xe = O(Sr),
    Ze = O(Y),
    Qe = O(wr),
    ra = O(mr),
    ta = O(Cr),
    bt = _t ? _t.prototype : void 0,
    At = bt ? bt.valueOf : void 0;
  function E(t) {
    var n = -1,
      s = t ? t.length : 0;
    for (this.clear(); ++n < s; ) {
      var u = t[n];
      this.set(u[0], u[1]);
    }
  }
  function ea() {
    this.__data__ = X ? X(null) : {};
  }
  function aa(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function na(t) {
    var n = this.__data__;
    if (X) {
      var s = n[t];
      return s === o ? void 0 : s;
    }
    return P.call(n, t) ? n[t] : void 0;
  }
  function oa(t) {
    var n = this.__data__;
    return X ? n[t] !== void 0 : P.call(n, t);
  }
  function sa(t, n) {
    var s = this.__data__;
    return (s[t] = X && n === void 0 ? o : n), this;
  }
  (E.prototype.clear = ea),
    (E.prototype.delete = aa),
    (E.prototype.get = na),
    (E.prototype.has = oa),
    (E.prototype.set = sa);
  function I(t) {
    var n = -1,
      s = t ? t.length : 0;
    for (this.clear(); ++n < s; ) {
      var u = t[n];
      this.set(u[0], u[1]);
    }
  }
  function ia() {
    this.__data__ = [];
  }
  function ca(t) {
    var n = this.__data__,
      s = nr(n, t);
    if (s < 0) return !1;
    var u = n.length - 1;
    return s == u ? n.pop() : qe.call(n, s, 1), !0;
  }
  function ua(t) {
    var n = this.__data__,
      s = nr(n, t);
    return s < 0 ? void 0 : n[s][1];
  }
  function fa(t) {
    return nr(this.__data__, t) > -1;
  }
  function la(t, n) {
    var s = this.__data__,
      u = nr(s, t);
    return u < 0 ? s.push([t, n]) : (s[u][1] = n), this;
  }
  (I.prototype.clear = ia),
    (I.prototype.delete = ca),
    (I.prototype.get = ua),
    (I.prototype.has = fa),
    (I.prototype.set = la);
  function F(t) {
    var n = -1,
      s = t ? t.length : 0;
    for (this.clear(); ++n < s; ) {
      var u = t[n];
      this.set(u[0], u[1]);
    }
  }
  function pa() {
    this.__data__ = {
      hash: new E(),
      map: new (Y || I)(),
      string: new E(),
    };
  }
  function ga(t) {
    return or(this, t).delete(t);
  }
  function ha(t) {
    return or(this, t).get(t);
  }
  function ya(t) {
    return or(this, t).has(t);
  }
  function va(t, n) {
    return or(this, t).set(t, n), this;
  }
  (F.prototype.clear = pa),
    (F.prototype.delete = ga),
    (F.prototype.get = ha),
    (F.prototype.has = ya),
    (F.prototype.set = va);
  function B(t) {
    this.__data__ = new I(t);
  }
  function _a() {
    this.__data__ = new I();
  }
  function da(t) {
    return this.__data__.delete(t);
  }
  function $a(t) {
    return this.__data__.get(t);
  }
  function ba(t) {
    return this.__data__.has(t);
  }
  function Aa(t, n) {
    var s = this.__data__;
    if (s instanceof I) {
      var u = s.__data__;
      if (!Y || u.length < a - 1) return u.push([t, n]), this;
      s = this.__data__ = new F(u);
    }
    return s.set(t, n), this;
  }
  (B.prototype.clear = _a),
    (B.prototype.delete = da),
    (B.prototype.get = $a),
    (B.prototype.has = ba),
    (B.prototype.set = Aa);
  function Ta(t, n) {
    var s = Mr(t) || za(t) ? Le(t.length, String) : [],
      u = s.length,
      d = !!u;
    for (var $ in t) P.call(t, $) && !(d && ($ == 'length' || Ka($, u))) && s.push($);
    return s;
  }
  function Tt(t, n, s) {
    var u = t[n];
    (!(P.call(t, n) && Ct(u, s)) || (s === void 0 && !(n in t))) && (t[n] = s);
  }
  function nr(t, n) {
    for (var s = t.length; s--; ) if (Ct(t[s][0], n)) return s;
    return -1;
  }
  function Sa(t, n) {
    return t && St(n, Pr(n), t);
  }
  function Ir(t, n, s, u, d, $, x) {
    var b;
    if ((u && (b = $ ? u(t, d, $, x) : u(t)), b !== void 0)) return b;
    if (!sr(t)) return t;
    var Mt = Mr(t);
    if (Mt) {
      if (((b = Ua(t)), !n)) return Ga(t, b);
    } else {
      var L = k(t),
        Pt = L == _ || L == A;
      if (qa(t)) return Ma(t, n);
      if (L == q || L == l || (Pt && !$)) {
        if (lt(t)) return $ ? t : {};
        if (((b = La(Pt ? {} : t)), !n)) return Fa(t, Sa(b, t));
      } else {
        if (!h[L]) return $ ? t : {};
        b = Na(t, L, Ir, n);
      }
    }
    x || (x = new B());
    var jt = x.get(t);
    if (jt) return jt;
    if ((x.set(t, b), !Mt)) var Et = s ? Ba(t) : Pr(t);
    return (
      Be(Et || t, function (jr, ir) {
        Et && ((ir = jr), (jr = t[ir])), Tt(b, ir, Ir(jr, n, s, u, ir, t, x));
      }),
      b
    );
  }
  function wa(t) {
    return sr(t) ? ze(t) : {};
  }
  function ma(t, n, s) {
    var u = n(t);
    return Mr(t) ? u : Ue(u, s(t));
  }
  function Ca(t) {
    return ar.call(t);
  }
  function Ia(t) {
    if (!sr(t) || Ra(t)) return !1;
    var n = xt(t) || lt(t) ? Re : je;
    return n.test(O(t));
  }
  function xa(t) {
    if (!mt(t)) return Ye(t);
    var n = [];
    for (var s in Object(t)) P.call(t, s) && s != 'constructor' && n.push(s);
    return n;
  }
  function Ma(t, n) {
    if (n) return t.slice();
    var s = new t.constructor(t.length);
    return t.copy(s), s;
  }
  function xr(t) {
    var n = new t.constructor(t.byteLength);
    return new dt(n).set(new dt(t)), n;
  }
  function Pa(t, n) {
    var s = n ? xr(t.buffer) : t.buffer;
    return new t.constructor(s, t.byteOffset, t.byteLength);
  }
  function ja(t, n, s) {
    var u = n ? s(pt(t), !0) : pt(t);
    return ft(u, Ge, new t.constructor());
  }
  function Ea(t) {
    var n = new t.constructor(t.source, Pe.exec(t));
    return (n.lastIndex = t.lastIndex), n;
  }
  function ka(t, n, s) {
    var u = n ? s(gt(t), !0) : gt(t);
    return ft(u, Fe, new t.constructor());
  }
  function Oa(t) {
    return At ? Object(At.call(t)) : {};
  }
  function Da(t, n) {
    var s = n ? xr(t.buffer) : t.buffer;
    return new t.constructor(s, t.byteOffset, t.length);
  }
  function Ga(t, n) {
    var s = -1,
      u = t.length;
    for (n || (n = Array(u)); ++s < u; ) n[s] = t[s];
    return n;
  }
  function St(t, n, s, u) {
    s || (s = {});
    for (var d = -1, $ = n.length; ++d < $; ) {
      var x = n[d],
        b = void 0;
      Tt(s, x, b === void 0 ? t[x] : b);
    }
    return s;
  }
  function Fa(t, n) {
    return St(t, wt(t), n);
  }
  function Ba(t) {
    return ma(t, Pr, wt);
  }
  function or(t, n) {
    var s = t.__data__;
    return Ha(n) ? s[typeof n == 'string' ? 'string' : 'hash'] : s.map;
  }
  function U(t, n) {
    var s = Ne(t, n);
    return Ia(s) ? s : void 0;
  }
  var wt = $t ? Ar($t, Object) : Xa,
    k = Ca;
  ((Sr && k(new Sr(new ArrayBuffer(1))) != tr) ||
    (Y && k(new Y()) != w) ||
    (wr && k(wr.resolve()) != J) ||
    (mr && k(new mr()) != T) ||
    (Cr && k(new Cr()) != br)) &&
    (k = function (t) {
      var n = ar.call(t),
        s = n == q ? t.constructor : void 0,
        u = s ? O(s) : void 0;
      if (u)
        switch (u) {
          case Xe:
            return tr;
          case Ze:
            return w;
          case Qe:
            return J;
          case ra:
            return T;
          case ta:
            return br;
        }
      return n;
    });
  function Ua(t) {
    var n = t.length,
      s = t.constructor(n);
    return n && typeof t[0] == 'string' && P.call(t, 'index') && ((s.index = t.index), (s.input = t.input)), s;
  }
  function La(t) {
    return typeof t.constructor == 'function' && !mt(t) ? wa(Ve(t)) : {};
  }
  function Na(t, n, s, u) {
    var d = t.constructor;
    switch (n) {
      case Zr:
        return xr(t);
      case p:
      case g:
        return new d(+t);
      case tr:
        return Pa(t, u);
      case Qr:
      case rt:
      case tt:
      case et:
      case at:
      case nt:
      case ot:
      case st:
      case it:
        return Da(t, u);
      case w:
        return ja(t, u, s);
      case W:
      case Yr:
        return new d(t);
      case S:
        return Ea(t);
      case T:
        return ka(t, u, s);
      case Xr:
        return Oa(t);
    }
  }
  function Ka(t, n) {
    return (n = n ?? c), !!n && (typeof t == 'number' || Ee.test(t)) && t > -1 && t % 1 == 0 && t < n;
  }
  function Ha(t) {
    var n = typeof t;
    return n == 'string' || n == 'number' || n == 'symbol' || n == 'boolean' ? t !== '__proto__' : t === null;
  }
  function Ra(t) {
    return !!ht && ht in t;
  }
  function mt(t) {
    var n = t && t.constructor,
      s = (typeof n == 'function' && n.prototype) || er;
    return t === s;
  }
  function O(t) {
    if (t != null) {
      try {
        return yt.call(t);
      } catch {}
      try {
        return t + '';
      } catch {}
    }
    return '';
  }
  function Va(t) {
    return Ir(t, !0, !0);
  }
  function Ct(t, n) {
    return t === n || (t !== t && n !== n);
  }
  function za(t) {
    return Wa(t) && P.call(t, 'callee') && (!We.call(t, 'callee') || ar.call(t) == l);
  }
  var Mr = Array.isArray;
  function It(t) {
    return t != null && Ja(t.length) && !xt(t);
  }
  function Wa(t) {
    return Ya(t) && It(t);
  }
  var qa = Je || Za;
  function xt(t) {
    var n = sr(t) ? ar.call(t) : '';
    return n == _ || n == A;
  }
  function Ja(t) {
    return typeof t == 'number' && t > -1 && t % 1 == 0 && t <= c;
  }
  function sr(t) {
    var n = typeof t;
    return !!t && (n == 'object' || n == 'function');
  }
  function Ya(t) {
    return !!t && typeof t == 'object';
  }
  function Pr(t) {
    return It(t) ? Ta(t) : xa(t);
  }
  function Xa() {
    return [];
  }
  function Za() {
    return !1;
  }
  r.exports = Va;
})(fr, fr.exports);
var tn = fr.exports;
const Br = /* @__PURE__ */ oe(tn);
function en() {
  (this.__data__ = []), (this.size = 0);
}
var an = en;
function nn(r, e) {
  return r === e || (r !== r && e !== e);
}
var se = nn,
  on = se;
function sn(r, e) {
  for (var a = r.length; a--; ) if (on(r[a][0], e)) return a;
  return -1;
}
var hr = sn,
  cn = hr,
  un = Array.prototype,
  fn = un.splice;
function ln(r) {
  var e = this.__data__,
    a = cn(e, r);
  if (a < 0) return !1;
  var o = e.length - 1;
  return a == o ? e.pop() : fn.call(e, a, 1), --this.size, !0;
}
var pn = ln,
  gn = hr;
function hn(r) {
  var e = this.__data__,
    a = gn(e, r);
  return a < 0 ? void 0 : e[a][1];
}
var yn = hn,
  vn = hr;
function _n(r) {
  return vn(this.__data__, r) > -1;
}
var dn = _n,
  $n = hr;
function bn(r, e) {
  var a = this.__data__,
    o = $n(a, r);
  return o < 0 ? (++this.size, a.push([r, e])) : (a[o][1] = e), this;
}
var An = bn,
  Tn = an,
  Sn = pn,
  wn = yn,
  mn = dn,
  Cn = An;
function K(r) {
  var e = -1,
    a = r == null ? 0 : r.length;
  for (this.clear(); ++e < a; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
K.prototype.clear = Tn;
K.prototype.delete = Sn;
K.prototype.get = wn;
K.prototype.has = mn;
K.prototype.set = Cn;
var yr = K,
  In = yr;
function xn() {
  (this.__data__ = new In()), (this.size = 0);
}
var Mn = xn;
function Pn(r) {
  var e = this.__data__,
    a = e.delete(r);
  return (this.size = e.size), a;
}
var jn = Pn;
function En(r) {
  return this.__data__.get(r);
}
var kn = En;
function On(r) {
  return this.__data__.has(r);
}
var Dn = On,
  Gn = typeof j == 'object' && j && j.Object === Object && j,
  ie = Gn,
  Fn = ie,
  Bn = typeof self == 'object' && self && self.Object === Object && self,
  Un = Fn || Bn || Function('return this')(),
  m = Un,
  Ln = m,
  Nn = Ln.Symbol,
  Ur = Nn,
  Ot = Ur,
  ce = Object.prototype,
  Kn = ce.hasOwnProperty,
  Hn = ce.toString,
  Z = Ot ? Ot.toStringTag : void 0;
function Rn(r) {
  var e = Kn.call(r, Z),
    a = r[Z];
  try {
    r[Z] = void 0;
    var o = !0;
  } catch {}
  var c = Hn.call(r);
  return o && (e ? (r[Z] = a) : delete r[Z]), c;
}
var Vn = Rn,
  zn = Object.prototype,
  Wn = zn.toString;
function qn(r) {
  return Wn.call(r);
}
var Jn = qn,
  Dt = Ur,
  Yn = Vn,
  Xn = Jn,
  Zn = '[object Null]',
  Qn = '[object Undefined]',
  Gt = Dt ? Dt.toStringTag : void 0;
function ro(r) {
  return r == null ? (r === void 0 ? Qn : Zn) : Gt && Gt in Object(r) ? Yn(r) : Xn(r);
}
var vr = ro;
function to(r) {
  var e = typeof r;
  return r != null && (e == 'object' || e == 'function');
}
var Q = to,
  eo = vr,
  ao = Q,
  no = '[object AsyncFunction]',
  oo = '[object Function]',
  so = '[object GeneratorFunction]',
  io = '[object Proxy]';
function co(r) {
  if (!ao(r)) return !1;
  var e = eo(r);
  return e == oo || e == so || e == no || e == io;
}
var ue = co,
  uo = m,
  fo = uo['__core-js_shared__'],
  lo = fo,
  Er = lo,
  Ft = (function () {
    var r = /[^.]+$/.exec((Er && Er.keys && Er.keys.IE_PROTO) || '');
    return r ? 'Symbol(src)_1.' + r : '';
  })();
function po(r) {
  return !!Ft && Ft in r;
}
var go = po,
  ho = Function.prototype,
  yo = ho.toString;
function vo(r) {
  if (r != null) {
    try {
      return yo.call(r);
    } catch {}
    try {
      return r + '';
    } catch {}
  }
  return '';
}
var fe = vo,
  _o = ue,
  $o = go,
  bo = Q,
  Ao = fe,
  To = /[\\^$.*+?()[\]{}|]/g,
  So = /^\[object .+?Constructor\]$/,
  wo = Function.prototype,
  mo = Object.prototype,
  Co = wo.toString,
  Io = mo.hasOwnProperty,
  xo = RegExp(
    '^' +
      Co.call(Io)
        .replace(To, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );
function Mo(r) {
  if (!bo(r) || $o(r)) return !1;
  var e = _o(r) ? xo : So;
  return e.test(Ao(r));
}
var Po = Mo;
function jo(r, e) {
  return r == null ? void 0 : r[e];
}
var Eo = jo,
  ko = Po,
  Oo = Eo;
function Do(r, e) {
  var a = Oo(r, e);
  return ko(a) ? a : void 0;
}
var G = Do,
  Go = G,
  Fo = m,
  Bo = Go(Fo, 'Map'),
  Lr = Bo,
  Uo = G,
  Lo = Uo(Object, 'create'),
  _r = Lo,
  Bt = _r;
function No() {
  (this.__data__ = Bt ? Bt(null) : {}), (this.size = 0);
}
var Ko = No;
function Ho(r) {
  var e = this.has(r) && delete this.__data__[r];
  return (this.size -= e ? 1 : 0), e;
}
var Ro = Ho,
  Vo = _r,
  zo = '__lodash_hash_undefined__',
  Wo = Object.prototype,
  qo = Wo.hasOwnProperty;
function Jo(r) {
  var e = this.__data__;
  if (Vo) {
    var a = e[r];
    return a === zo ? void 0 : a;
  }
  return qo.call(e, r) ? e[r] : void 0;
}
var Yo = Jo,
  Xo = _r,
  Zo = Object.prototype,
  Qo = Zo.hasOwnProperty;
function rs(r) {
  var e = this.__data__;
  return Xo ? e[r] !== void 0 : Qo.call(e, r);
}
var ts = rs,
  es = _r,
  as = '__lodash_hash_undefined__';
function ns(r, e) {
  var a = this.__data__;
  return (this.size += this.has(r) ? 0 : 1), (a[r] = es && e === void 0 ? as : e), this;
}
var os = ns,
  ss = Ko,
  is = Ro,
  cs = Yo,
  us = ts,
  fs = os;
function H(r) {
  var e = -1,
    a = r == null ? 0 : r.length;
  for (this.clear(); ++e < a; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
H.prototype.clear = ss;
H.prototype.delete = is;
H.prototype.get = cs;
H.prototype.has = us;
H.prototype.set = fs;
var ls = H,
  Ut = ls,
  ps = yr,
  gs = Lr;
function hs() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Ut(),
      map: new (gs || ps)(),
      string: new Ut(),
    });
}
var ys = hs;
function vs(r) {
  var e = typeof r;
  return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? r !== '__proto__' : r === null;
}
var _s = vs,
  ds = _s;
function $s(r, e) {
  var a = r.__data__;
  return ds(e) ? a[typeof e == 'string' ? 'string' : 'hash'] : a.map;
}
var dr = $s,
  bs = dr;
function As(r) {
  var e = bs(this, r).delete(r);
  return (this.size -= e ? 1 : 0), e;
}
var Ts = As,
  Ss = dr;
function ws(r) {
  return Ss(this, r).get(r);
}
var ms = ws,
  Cs = dr;
function Is(r) {
  return Cs(this, r).has(r);
}
var xs = Is,
  Ms = dr;
function Ps(r, e) {
  var a = Ms(this, r),
    o = a.size;
  return a.set(r, e), (this.size += a.size == o ? 0 : 1), this;
}
var js = Ps,
  Es = ys,
  ks = Ts,
  Os = ms,
  Ds = xs,
  Gs = js;
function R(r) {
  var e = -1,
    a = r == null ? 0 : r.length;
  for (this.clear(); ++e < a; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
R.prototype.clear = Es;
R.prototype.delete = ks;
R.prototype.get = Os;
R.prototype.has = Ds;
R.prototype.set = Gs;
var Fs = R,
  Bs = yr,
  Us = Lr,
  Ls = Fs,
  Ns = 200;
function Ks(r, e) {
  var a = this.__data__;
  if (a instanceof Bs) {
    var o = a.__data__;
    if (!Us || o.length < Ns - 1) return o.push([r, e]), (this.size = ++a.size), this;
    a = this.__data__ = new Ls(o);
  }
  return a.set(r, e), (this.size = a.size), this;
}
var Hs = Ks,
  Rs = yr,
  Vs = Mn,
  zs = jn,
  Ws = kn,
  qs = Dn,
  Js = Hs;
function V(r) {
  var e = (this.__data__ = new Rs(r));
  this.size = e.size;
}
V.prototype.clear = Vs;
V.prototype.delete = zs;
V.prototype.get = Ws;
V.prototype.has = qs;
V.prototype.set = Js;
var Ys = V;
function Xs(r, e) {
  for (var a = -1, o = r == null ? 0 : r.length; ++a < o && e(r[a], a, r) !== !1; );
  return r;
}
var Zs = Xs,
  Qs = G,
  ri = (function () {
    try {
      var r = Qs(Object, 'defineProperty');
      return r({}, '', {}), r;
    } catch {}
  })(),
  ti = ri,
  Lt = ti;
function ei(r, e, a) {
  e == '__proto__' && Lt
    ? Lt(r, e, {
        configurable: !0,
        enumerable: !0,
        value: a,
        writable: !0,
      })
    : (r[e] = a);
}
var le = ei,
  ai = le,
  ni = se,
  oi = Object.prototype,
  si = oi.hasOwnProperty;
function ii(r, e, a) {
  var o = r[e];
  (!(si.call(r, e) && ni(o, a)) || (a === void 0 && !(e in r))) && ai(r, e, a);
}
var pe = ii,
  ci = pe,
  ui = le;
function fi(r, e, a, o) {
  var c = !a;
  a || (a = {});
  for (var l = -1, i = e.length; ++l < i; ) {
    var p = e[l],
      g = o ? o(a[p], r[p], p, a, r) : void 0;
    g === void 0 && (g = r[p]), c ? ui(a, p, g) : ci(a, p, g);
  }
  return a;
}
var $r = fi;
function li(r, e) {
  for (var a = -1, o = Array(r); ++a < r; ) o[a] = e(a);
  return o;
}
var pi = li;
function gi(r) {
  return r != null && typeof r == 'object';
}
var rr = gi,
  hi = vr,
  yi = rr,
  vi = '[object Arguments]';
function _i(r) {
  return yi(r) && hi(r) == vi;
}
var di = _i,
  Nt = di,
  $i = rr,
  ge = Object.prototype,
  bi = ge.hasOwnProperty,
  Ai = ge.propertyIsEnumerable,
  Ti = Nt(
    /* @__PURE__ */ (function () {
      return arguments;
    })(),
  )
    ? Nt
    : function (r) {
        return $i(r) && bi.call(r, 'callee') && !Ai.call(r, 'callee');
      },
  Si = Ti,
  wi = Array.isArray,
  Nr = wi,
  lr = { exports: {} };
function mi() {
  return !1;
}
var Ci = mi;
lr.exports;
(function (r, e) {
  var a = m,
    o = Ci,
    c = e && !e.nodeType && e,
    l = c && !0 && r && !r.nodeType && r,
    i = l && l.exports === c,
    p = i ? a.Buffer : void 0,
    g = p ? p.isBuffer : void 0,
    f = g || o;
  r.exports = f;
})(lr, lr.exports);
var he = lr.exports,
  Ii = 9007199254740991,
  xi = /^(?:0|[1-9]\d*)$/;
function Mi(r, e) {
  var a = typeof r;
  return (e = e ?? Ii), !!e && (a == 'number' || (a != 'symbol' && xi.test(r))) && r > -1 && r % 1 == 0 && r < e;
}
var Pi = Mi,
  ji = 9007199254740991;
function Ei(r) {
  return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= ji;
}
var ye = Ei,
  ki = vr,
  Oi = ye,
  Di = rr,
  Gi = '[object Arguments]',
  Fi = '[object Array]',
  Bi = '[object Boolean]',
  Ui = '[object Date]',
  Li = '[object Error]',
  Ni = '[object Function]',
  Ki = '[object Map]',
  Hi = '[object Number]',
  Ri = '[object Object]',
  Vi = '[object RegExp]',
  zi = '[object Set]',
  Wi = '[object String]',
  qi = '[object WeakMap]',
  Ji = '[object ArrayBuffer]',
  Yi = '[object DataView]',
  Xi = '[object Float32Array]',
  Zi = '[object Float64Array]',
  Qi = '[object Int8Array]',
  rc = '[object Int16Array]',
  tc = '[object Int32Array]',
  ec = '[object Uint8Array]',
  ac = '[object Uint8ClampedArray]',
  nc = '[object Uint16Array]',
  oc = '[object Uint32Array]',
  v = {};
v[Xi] = v[Zi] = v[Qi] = v[rc] = v[tc] = v[ec] = v[ac] = v[nc] = v[oc] = !0;
v[Gi] =
  v[Fi] =
  v[Ji] =
  v[Bi] =
  v[Yi] =
  v[Ui] =
  v[Li] =
  v[Ni] =
  v[Ki] =
  v[Hi] =
  v[Ri] =
  v[Vi] =
  v[zi] =
  v[Wi] =
  v[qi] =
    !1;
function sc(r) {
  return Di(r) && Oi(r.length) && !!v[ki(r)];
}
var ic = sc;
function cc(r) {
  return function (e) {
    return r(e);
  };
}
var Kr = cc,
  pr = { exports: {} };
pr.exports;
(function (r, e) {
  var a = ie,
    o = e && !e.nodeType && e,
    c = o && !0 && r && !r.nodeType && r,
    l = c && c.exports === o,
    i = l && a.process,
    p = (function () {
      try {
        var g = c && c.require && c.require('util').types;
        return g || (i && i.binding && i.binding('util'));
      } catch {}
    })();
  r.exports = p;
})(pr, pr.exports);
var Hr = pr.exports,
  uc = ic,
  fc = Kr,
  Kt = Hr,
  Ht = Kt && Kt.isTypedArray,
  lc = Ht ? fc(Ht) : uc,
  pc = lc,
  gc = pi,
  hc = Si,
  yc = Nr,
  vc = he,
  _c = Pi,
  dc = pc,
  $c = Object.prototype,
  bc = $c.hasOwnProperty;
function Ac(r, e) {
  var a = yc(r),
    o = !a && hc(r),
    c = !a && !o && vc(r),
    l = !a && !o && !c && dc(r),
    i = a || o || c || l,
    p = i ? gc(r.length, String) : [],
    g = p.length;
  for (var f in r)
    (e || bc.call(r, f)) &&
      !(
        i && // Safari 9 has enumerable `arguments.length` in strict mode.
        (f == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
          (c && (f == 'offset' || f == 'parent')) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          (l && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) || // Skip index properties.
          _c(f, g))
      ) &&
      p.push(f);
  return p;
}
var ve = Ac,
  Tc = Object.prototype;
function Sc(r) {
  var e = r && r.constructor,
    a = (typeof e == 'function' && e.prototype) || Tc;
  return r === a;
}
var Rr = Sc;
function wc(r, e) {
  return function (a) {
    return r(e(a));
  };
}
var _e = wc,
  mc = _e,
  Cc = mc(Object.keys, Object),
  Ic = Cc,
  xc = Rr,
  Mc = Ic,
  Pc = Object.prototype,
  jc = Pc.hasOwnProperty;
function Ec(r) {
  if (!xc(r)) return Mc(r);
  var e = [];
  for (var a in Object(r)) jc.call(r, a) && a != 'constructor' && e.push(a);
  return e;
}
var kc = Ec,
  Oc = ue,
  Dc = ye;
function Gc(r) {
  return r != null && Dc(r.length) && !Oc(r);
}
var de = Gc,
  Fc = ve,
  Bc = kc,
  Uc = de;
function Lc(r) {
  return Uc(r) ? Fc(r) : Bc(r);
}
var Vr = Lc,
  Nc = $r,
  Kc = Vr;
function Hc(r, e) {
  return r && Nc(e, Kc(e), r);
}
var Rc = Hc;
function Vc(r) {
  var e = [];
  if (r != null) for (var a in Object(r)) e.push(a);
  return e;
}
var zc = Vc,
  Wc = Q,
  qc = Rr,
  Jc = zc,
  Yc = Object.prototype,
  Xc = Yc.hasOwnProperty;
function Zc(r) {
  if (!Wc(r)) return Jc(r);
  var e = qc(r),
    a = [];
  for (var o in r) (o == 'constructor' && (e || !Xc.call(r, o))) || a.push(o);
  return a;
}
var Qc = Zc,
  ru = ve,
  tu = Qc,
  eu = de;
function au(r) {
  return eu(r) ? ru(r, !0) : tu(r);
}
var zr = au,
  nu = $r,
  ou = zr;
function su(r, e) {
  return r && nu(e, ou(e), r);
}
var iu = su,
  gr = { exports: {} };
gr.exports;
(function (r, e) {
  var a = m,
    o = e && !e.nodeType && e,
    c = o && !0 && r && !r.nodeType && r,
    l = c && c.exports === o,
    i = l ? a.Buffer : void 0,
    p = i ? i.allocUnsafe : void 0;
  function g(f, _) {
    if (_) return f.slice();
    var A = f.length,
      w = p ? p(A) : new f.constructor(A);
    return f.copy(w), w;
  }
  r.exports = g;
})(gr, gr.exports);
var cu = gr.exports;
function uu(r, e) {
  var a = -1,
    o = r.length;
  for (e || (e = Array(o)); ++a < o; ) e[a] = r[a];
  return e;
}
var fu = uu;
function lu(r, e) {
  for (var a = -1, o = r == null ? 0 : r.length, c = 0, l = []; ++a < o; ) {
    var i = r[a];
    e(i, a, r) && (l[c++] = i);
  }
  return l;
}
var pu = lu;
function gu() {
  return [];
}
var $e = gu,
  hu = pu,
  yu = $e,
  vu = Object.prototype,
  _u = vu.propertyIsEnumerable,
  Rt = Object.getOwnPropertySymbols,
  du = Rt
    ? function (r) {
        return r == null
          ? []
          : ((r = Object(r)),
            hu(Rt(r), function (e) {
              return _u.call(r, e);
            }));
      }
    : yu,
  Wr = du,
  $u = $r,
  bu = Wr;
function Au(r, e) {
  return $u(r, bu(r), e);
}
var Tu = Au;
function Su(r, e) {
  for (var a = -1, o = e.length, c = r.length; ++a < o; ) r[c + a] = e[a];
  return r;
}
var be = Su,
  wu = _e,
  mu = wu(Object.getPrototypeOf, Object),
  Ae = mu,
  Cu = be,
  Iu = Ae,
  xu = Wr,
  Mu = $e,
  Pu = Object.getOwnPropertySymbols,
  ju = Pu
    ? function (r) {
        for (var e = []; r; ) Cu(e, xu(r)), (r = Iu(r));
        return e;
      }
    : Mu,
  Te = ju,
  Eu = $r,
  ku = Te;
function Ou(r, e) {
  return Eu(r, ku(r), e);
}
var Du = Ou,
  Gu = be,
  Fu = Nr;
function Bu(r, e, a) {
  var o = e(r);
  return Fu(r) ? o : Gu(o, a(r));
}
var Se = Bu,
  Uu = Se,
  Lu = Wr,
  Nu = Vr;
function Ku(r) {
  return Uu(r, Nu, Lu);
}
var Hu = Ku,
  Ru = Se,
  Vu = Te,
  zu = zr;
function Wu(r) {
  return Ru(r, zu, Vu);
}
var qu = Wu,
  Ju = G,
  Yu = m,
  Xu = Ju(Yu, 'DataView'),
  Zu = Xu,
  Qu = G,
  rf = m,
  tf = Qu(rf, 'Promise'),
  ef = tf,
  af = G,
  nf = m,
  of = af(nf, 'Set'),
  sf = of,
  cf = G,
  uf = m,
  ff = cf(uf, 'WeakMap'),
  lf = ff,
  kr = Zu,
  Or = Lr,
  Dr = ef,
  Gr = sf,
  Fr = lf,
  we = vr,
  z = fe,
  Vt = '[object Map]',
  pf = '[object Object]',
  zt = '[object Promise]',
  Wt = '[object Set]',
  qt = '[object WeakMap]',
  Jt = '[object DataView]',
  gf = z(kr),
  hf = z(Or),
  yf = z(Dr),
  vf = z(Gr),
  _f = z(Fr),
  D = we;
((kr && D(new kr(new ArrayBuffer(1))) != Jt) ||
  (Or && D(new Or()) != Vt) ||
  (Dr && D(Dr.resolve()) != zt) ||
  (Gr && D(new Gr()) != Wt) ||
  (Fr && D(new Fr()) != qt)) &&
  (D = function (r) {
    var e = we(r),
      a = e == pf ? r.constructor : void 0,
      o = a ? z(a) : '';
    if (o)
      switch (o) {
        case gf:
          return Jt;
        case hf:
          return Vt;
        case yf:
          return zt;
        case vf:
          return Wt;
        case _f:
          return qt;
      }
    return e;
  });
var qr = D,
  df = Object.prototype,
  $f = df.hasOwnProperty;
function bf(r) {
  var e = r.length,
    a = new r.constructor(e);
  return e && typeof r[0] == 'string' && $f.call(r, 'index') && ((a.index = r.index), (a.input = r.input)), a;
}
var Af = bf,
  Tf = m,
  Sf = Tf.Uint8Array,
  wf = Sf,
  Yt = wf;
function mf(r) {
  var e = new r.constructor(r.byteLength);
  return new Yt(e).set(new Yt(r)), e;
}
var Jr = mf,
  Cf = Jr;
function If(r, e) {
  var a = e ? Cf(r.buffer) : r.buffer;
  return new r.constructor(a, r.byteOffset, r.byteLength);
}
var xf = If,
  Mf = /\w*$/;
function Pf(r) {
  var e = new r.constructor(r.source, Mf.exec(r));
  return (e.lastIndex = r.lastIndex), e;
}
var jf = Pf,
  Xt = Ur,
  Zt = Xt ? Xt.prototype : void 0,
  Qt = Zt ? Zt.valueOf : void 0;
function Ef(r) {
  return Qt ? Object(Qt.call(r)) : {};
}
var kf = Ef,
  Of = Jr;
function Df(r, e) {
  var a = e ? Of(r.buffer) : r.buffer;
  return new r.constructor(a, r.byteOffset, r.length);
}
var Gf = Df,
  Ff = Jr,
  Bf = xf,
  Uf = jf,
  Lf = kf,
  Nf = Gf,
  Kf = '[object Boolean]',
  Hf = '[object Date]',
  Rf = '[object Map]',
  Vf = '[object Number]',
  zf = '[object RegExp]',
  Wf = '[object Set]',
  qf = '[object String]',
  Jf = '[object Symbol]',
  Yf = '[object ArrayBuffer]',
  Xf = '[object DataView]',
  Zf = '[object Float32Array]',
  Qf = '[object Float64Array]',
  rl = '[object Int8Array]',
  tl = '[object Int16Array]',
  el = '[object Int32Array]',
  al = '[object Uint8Array]',
  nl = '[object Uint8ClampedArray]',
  ol = '[object Uint16Array]',
  sl = '[object Uint32Array]';
function il(r, e, a) {
  var o = r.constructor;
  switch (e) {
    case Yf:
      return Ff(r);
    case Kf:
    case Hf:
      return new o(+r);
    case Xf:
      return Bf(r, a);
    case Zf:
    case Qf:
    case rl:
    case tl:
    case el:
    case al:
    case nl:
    case ol:
    case sl:
      return Nf(r, a);
    case Rf:
      return new o();
    case Vf:
    case qf:
      return new o(r);
    case zf:
      return Uf(r);
    case Wf:
      return new o();
    case Jf:
      return Lf(r);
  }
}
var cl = il,
  ul = Q,
  re = Object.create,
  fl = /* @__PURE__ */ (function () {
    function r() {}
    return function (e) {
      if (!ul(e)) return {};
      if (re) return re(e);
      r.prototype = e;
      var a = new r();
      return (r.prototype = void 0), a;
    };
  })(),
  ll = fl,
  pl = ll,
  gl = Ae,
  hl = Rr;
function yl(r) {
  return typeof r.constructor == 'function' && !hl(r) ? pl(gl(r)) : {};
}
var vl = yl,
  _l = qr,
  dl = rr,
  $l = '[object Map]';
function bl(r) {
  return dl(r) && _l(r) == $l;
}
var Al = bl,
  Tl = Al,
  Sl = Kr,
  te = Hr,
  ee = te && te.isMap,
  wl = ee ? Sl(ee) : Tl,
  ml = wl,
  Cl = qr,
  Il = rr,
  xl = '[object Set]';
function Ml(r) {
  return Il(r) && Cl(r) == xl;
}
var Pl = Ml,
  jl = Pl,
  El = Kr,
  ae = Hr,
  ne = ae && ae.isSet,
  kl = ne ? El(ne) : jl,
  Ol = kl,
  Dl = Ys,
  Gl = Zs,
  Fl = pe,
  Bl = Rc,
  Ul = iu,
  Ll = cu,
  Nl = fu,
  Kl = Tu,
  Hl = Du,
  Rl = Hu,
  Vl = qu,
  zl = qr,
  Wl = Af,
  ql = cl,
  Jl = vl,
  Yl = Nr,
  Xl = he,
  Zl = ml,
  Ql = Q,
  rp = Ol,
  tp = Vr,
  ep = zr,
  ap = 1,
  np = 2,
  op = 4,
  me = '[object Arguments]',
  sp = '[object Array]',
  ip = '[object Boolean]',
  cp = '[object Date]',
  up = '[object Error]',
  Ce = '[object Function]',
  fp = '[object GeneratorFunction]',
  lp = '[object Map]',
  pp = '[object Number]',
  Ie = '[object Object]',
  gp = '[object RegExp]',
  hp = '[object Set]',
  yp = '[object String]',
  vp = '[object Symbol]',
  _p = '[object WeakMap]',
  dp = '[object ArrayBuffer]',
  $p = '[object DataView]',
  bp = '[object Float32Array]',
  Ap = '[object Float64Array]',
  Tp = '[object Int8Array]',
  Sp = '[object Int16Array]',
  wp = '[object Int32Array]',
  mp = '[object Uint8Array]',
  Cp = '[object Uint8ClampedArray]',
  Ip = '[object Uint16Array]',
  xp = '[object Uint32Array]',
  y = {};
y[me] =
  y[sp] =
  y[dp] =
  y[$p] =
  y[ip] =
  y[cp] =
  y[bp] =
  y[Ap] =
  y[Tp] =
  y[Sp] =
  y[wp] =
  y[lp] =
  y[pp] =
  y[Ie] =
  y[gp] =
  y[hp] =
  y[yp] =
  y[vp] =
  y[mp] =
  y[Cp] =
  y[Ip] =
  y[xp] =
    !0;
y[up] = y[Ce] = y[_p] = !1;
function cr(r, e, a, o, c, l) {
  var i,
    p = e & ap,
    g = e & np,
    f = e & op;
  if ((a && (i = c ? a(r, o, c, l) : a(r)), i !== void 0)) return i;
  if (!Ql(r)) return r;
  var _ = Yl(r);
  if (_) {
    if (((i = Wl(r)), !p)) return Nl(r, i);
  } else {
    var A = zl(r),
      w = A == Ce || A == fp;
    if (Xl(r)) return Ll(r, p);
    if (A == Ie || A == me || (w && !c)) {
      if (((i = g || w ? {} : Jl(r)), !p)) return g ? Hl(r, Ul(i, r)) : Kl(r, Bl(i, r));
    } else {
      if (!y[A]) return c ? r : {};
      i = ql(r, A, p);
    }
  }
  l || (l = new Dl());
  var W = l.get(r);
  if (W) return W;
  l.set(r, i),
    rp(r)
      ? r.forEach(function (S) {
          i.add(cr(S, e, a, S, r, l));
        })
      : Zl(r) &&
        r.forEach(function (S, T) {
          i.set(T, cr(S, e, a, T, r, l));
        });
  var q = f ? (g ? Vl : Rl) : g ? ep : tp,
    J = _ ? void 0 : q(r);
  return (
    Gl(J || r, function (S, T) {
      J && ((T = S), (S = r[T])), Fl(i, T, cr(S, e, a, T, r, l));
    }),
    i
  );
}
var Mp = cr,
  Pp = Mp,
  jp = 1,
  Ep = 4;
function kp(r) {
  return Pp(r, jp | Ep);
}
var Op = kp;
const Dp = /* @__PURE__ */ oe(Op),
  Gp = (r, e, a = !0) => {
    let o = 0;
    function c(l, i) {
      i && i.s && Array.isArray(i.s) && i.s.length === 4
        ? (l[o] && (i.s = [...l[o]]), o++)
        : i &&
          i.c &&
          i.c.k &&
          (Array.isArray(i.c.k) && typeof i.c.k[0] != 'number' ? c(l, i.c.k) : (l[o] && (i.c.k = l[o]), o++));
      for (const p in i) typeof i[p] == 'object' && c(l, i[p]);
      return i;
    }
    return c(r, a ? Dp(e) : e);
  },
  Up = (r = [], e, a = !0) => {
    const o = [];
    return (
      r.forEach((c) => {
        o.push(ur(c));
      }),
      Gp(o, a ? Br(e) : e)
    );
  },
  Lp = (r, e, a = !0) => {
    const o = ur(r);
    if (!o) throw new Error('Proper colors must be used for target');
    function c(l, i) {
      if (i && i.s && Array.isArray(i.s) && i.s.length === 4) i.s = [...l];
      else if (i && i.c && i.c.k) Array.isArray(i.c.k) && typeof i.c.k[0] != 'number' ? c(l, i.c.k) : (i.c.k = l);
      else for (const p in i) typeof i[p] == 'object' && c(l, i[p]);
      return i;
    }
    return c(o, a ? Br(e) : e);
  },
  M = (r) => Math.round(r * 1e3) / 1e3,
  N = 3e-3,
  xe = (r, e, a, o = !0) => {
    const c = ur(r),
      l = ur(e);
    if (!c || !l) throw new Error('Proper colors must be used for both source and target');
    function i(p, g, f) {
      if (f && f.s && Array.isArray(f.s) && f.s.length === 4)
        p[0] === f.s[0] && p[1] === f.s[1] && p[2] === f.s[2] && (f.s = [...g]);
      else if (f && f.c && f.c.k)
        Array.isArray(f.c.k) && typeof f.c.k[0] != 'number'
          ? i(p, g, f.c.k)
          : Math.abs(p[0] - M(f.c.k[0])) < N &&
            Math.abs(p[1] - M(f.c.k[1])) < N &&
            Math.abs(p[2] - M(f.c.k[2])) < N &&
            (f.c.k = g);
      else if (f.g && f.g.k && f.g.k.k && f.g.k.k.length % 4 === 0)
        for (let _ = 0; _ < f.g.k.k.length; _ += 4)
          Math.abs(M(p[0]) - M(f.g.k.k[_ + 1])) < N &&
            Math.abs(M(p[1]) - M(f.g.k.k[_ + 2])) < N &&
            Math.abs(M(p[2]) - M(f.g.k.k[_ + 3])) < N &&
            ((f.g.k.k[_ + 1] = g[0]), (f.g.k.k[_ + 2] = g[1]), (f.g.k.k[_ + 3] = g[2]), (f.g.k.k[_ + 4] = g[3]));
      else for (const _ in f) typeof f[_] == 'object' && i(p, g, f[_]);
      return f;
    }
    return i(c, l, o ? Br(a) : a);
  },
  Np = (r, e) => r.reduce((a, [o, c]) => xe(o, c, a), e),
  Kp = (r, e, a) => {
    let o = { ...a };
    return (
      r.forEach((c, l) => {
        const i = e[l % e.length];
        o = xe(c, i, o);
      }),
      o
    );
  };
export {
  Up as colorify,
  ur as convertColorToLottieColor,
  Fp as convertLottieColorToHex,
  Qa as convertLottieColorToRgb,
  kt as convertLottieColorToRgba,
  Lp as flatten,
  rn as getColors,
  Bp as getUniqueColors,
  Gp as modifyColors,
  xe as replaceColor,
  Np as replaceColors,
  Kp as replaceColorsLoop,
};
