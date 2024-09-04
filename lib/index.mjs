const M = (s) => {
  if (typeof s == "string" && s.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
    const f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);
    if (!f)
      throw new Error("Color can be only hex or rgb array (ex. [10,20,30])");
    return [
      Math.round(parseInt(f[1], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(f[2], 16) / 255 * 1e3) / 1e3,
      Math.round(parseInt(f[3], 16) / 255 * 1e3) / 1e3,
      1
    ];
  } else {
    if (typeof s == "object" && s.length === 3 && s.every((f) => f >= 0 && f <= 255))
      return [
        Math.round(s[0] / 255 * 1e3) / 1e3,
        Math.round(s[1] / 255 * 1e3) / 1e3,
        Math.round(s[2] / 255 * 1e3) / 1e3,
        1
      ];
    if (typeof s == "object" && s.length === 4 && s.every((f) => f >= 0 && f <= 255))
      return [
        Math.round(s[0] / 255 * 1e3) / 1e3,
        Math.round(s[1] / 255 * 1e3) / 1e3,
        Math.round(s[2] / 255 * 1e3) / 1e3,
        s[3]
      ];
    throw s ? new Error("Color can be only hex or rgb(a) array (ex. [10,20,30,1])") : new Error("Color not defined");
  }
}, S = (s) => {
  const f = Math.round(s[0] * 255).toString(16).padStart(2, "0"), h = Math.round(s[1] * 255).toString(16).padStart(2, "0"), a = Math.round(s[2] * 255).toString(16).padStart(2, "0");
  return `#${f}${h}${a}`;
}, l = (s) => [Math.round(s[0] * 255), Math.round(s[1] * 255), Math.round(s[2] * 255)], t = (s) => [
  Math.round(s[0] * 255),
  Math.round(s[1] * 255),
  Math.round(s[2] * 255),
  s[3]
], w = (s) => {
  const f = [];
  function h(a) {
    if (a.g && a.g.k && a.g.k.k && Array.isArray(a.g.k.k) && a.g.k.k.length % 4 === 0) {
      Array.isArray(a.g.k.k) && typeof a.g.k.k[0] != "number" && h(a.g.k.k);
      const k = [...a.g.k.k];
      for (; k.length; ) {
        const g = [...k.splice(1, 3), k.shift()];
        f.push(t(g));
      }
    } else if (a.s && Array.isArray(a.s) && a.s.length === 4)
      f.push(t(a.s));
    else if (a.c && a.c.k)
      Array.isArray(a.c.k) && typeof a.c.k[0] != "number" ? h(a.c.k) : f.push(l(a.c.k));
    else
      for (const k in a)
        typeof a[k] == "object" && h(a[k]);
    return f;
  }
  return h(s), f;
}, x = (s) => {
  const h = w(s).map((k) => JSON.stringify(k)), a = new Set(h);
  return Array.from(a, (k) => JSON.parse(k));
}, m = (s, f, h = !0) => {
  let a = 0;
  function k(g, r) {
    r && r.s && Array.isArray(r.s) && r.s.length === 4 ? (g[a] && (r.s = [...g[a]]), a++) : r && r.c && r.c.k && (Array.isArray(r.c.k) && typeof r.c.k[0] != "number" ? k(g, r.c.k) : (g[a] && (r.c.k = g[a]), a++));
    for (const o in r)
      typeof r[o] == "object" && k(g, r[o]);
    return r;
  }
  return k(s, h ? structuredClone(f) : f);
}, E = (s = [], f, h = !0) => {
  const a = [];
  return s.forEach((k) => {
    a.push(M(k));
  }), m(a, h ? structuredClone(f) : f);
}, v = (s, f, h = !0) => {
  const a = M(s);
  if (!a)
    throw new Error("Proper colors must be used for target");
  function k(g, r) {
    if (r && r.s && Array.isArray(r.s) && r.s.length === 4)
      r.s = [...g];
    else if (r && r.c && r.c.k)
      Array.isArray(r.c.k) && typeof r.c.k[0] != "number" ? k(g, r.c.k) : r.c.k = g;
    else
      for (const o in r)
        typeof r[o] == "object" && k(g, r[o]);
    return r;
  }
  return k(a, h ? structuredClone(f) : f);
}, d = (s) => Math.round(s * 1e3) / 1e3;
const A = (s, f, h, a = !0) => {
  const k = M(s), g = M(f);
  if (!k || !g)
    throw new Error("Proper colors must be used for both source and target");
  function r(o, p, u) {
    if (u && u.s && Array.isArray(u.s) && u.s.length === 4)
      o[0] === u.s[0] && o[1] === u.s[1] && o[2] === u.s[2] && (u.s = [...p]);
    else if (u && u.c && u.c.k)
      Array.isArray(u.c.k) && typeof u.c.k[0] != "number" ? r(o, p, u.c.k) : Math.abs(o[0] - d(u.c.k[0])) < 3e-3 && Math.abs(o[1] - d(u.c.k[1])) < 3e-3 && Math.abs(o[2] - d(u.c.k[2])) < 3e-3 && (u.c.k = p);
    else if (u.g && u.g.k && u.g.k.k && u.g.k.k.length % 4 === 0)
      for (let y = 0; y < u.g.k.k.length; y += 4)
        Math.abs(d(o[0]) - d(u.g.k.k[y + 1])) < 3e-3 && Math.abs(d(o[1]) - d(u.g.k.k[y + 2])) < 3e-3 && Math.abs(d(o[2]) - d(u.g.k.k[y + 3])) < 3e-3 && (u.g.k.k[y + 1] = p[0], u.g.k.k[y + 2] = p[1], u.g.k.k[y + 3] = p[2], u.g.k.k[y + 4] = p[3]);
    else
      for (const y in u)
        typeof u[y] == "object" && r(o, p, u[y]);
    return u;
  }
  return r(k, g, a ? structuredClone(h) : h);
}, T = (s, f) => s.reduce((h, [a, k]) => A(a, k, h), f), $ = (s, f, h) => {
  let a = { ...h };
  return s.forEach((k, g) => {
    const r = f[g % f.length];
    a = A(k, r, a);
  }), a;
};
export {
  E as colorify,
  M as convertColorToLottieColor,
  S as convertLottieColorToHex,
  l as convertLottieColorToRgb,
  t as convertLottieColorToRgba,
  v as flatten,
  w as getColors,
  x as getUniqueColors,
  m as modifyColors,
  A as replaceColor,
  T as replaceColors,
  $ as replaceColorsLoop
};
