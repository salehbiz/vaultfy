(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) e(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === "childList")
        for (const o of n.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function e(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = i(r);
    fetch(r.href, n);
  }
})();
function ri(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return s;
}
function ia(s, t) {
  ((s.prototype = Object.create(t.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = t));
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ee = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  jr = { duration: 0.5, overwrite: !1, delay: 0 },
  Bs,
  Bt,
  ut,
  De = 1e8,
  at = 1 / De,
  _s = Math.PI * 2,
  Ll = _s / 4,
  zl = 0,
  ra = Math.sqrt,
  Nl = Math.cos,
  Fl = Math.sin,
  Lt = function (t) {
    return typeof t == "string";
  },
  gt = function (t) {
    return typeof t == "function";
  },
  li = function (t) {
    return typeof t == "number";
  },
  Ys = function (t) {
    return typeof t > "u";
  },
  Ze = function (t) {
    return typeof t == "object";
  },
  le = function (t) {
    return t !== !1;
  },
  Xs = function () {
    return typeof window < "u";
  },
  dn = function (t) {
    return gt(t) || Lt(t);
  },
  na =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Kt = Array.isArray,
  Il = /random\([^)]+\)/g,
  Bl = /,\s*/g,
  ho = /(?:-?\.?\d|\.)+/gi,
  sa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  cr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Jn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  oa = /[+-]=-?[.\d]+/,
  Yl = /[^,'"\[\]\s]+/gi,
  Xl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ht,
  Ve,
  gs,
  Ws,
  Pe = {},
  Fn = {},
  aa,
  la = function (t) {
    return (Fn = wr(t, Pe)) && he;
  },
  Hs = function (t, i) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Jr = function (t, i) {
    return !i && console.warn(t);
  },
  ua = function (t, i) {
    return (t && (Pe[t] = i) && Fn && (Fn[t] = i)) || Pe;
  },
  tn = function () {
    return 0;
  },
  Wl = { suppressEvents: !0, isStart: !0, kill: !1 },
  kn = { suppressEvents: !0, kill: !1 },
  Hl = { suppressEvents: !0 },
  qs = {},
  Si = [],
  ms = {},
  ca,
  we = {},
  ts = {},
  po = 30,
  On = [],
  Vs = "",
  Us = function (t) {
    var i = t[0],
      e,
      r;
    if ((Ze(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = On.length; r-- && !On[r].targetTest(i););
      e = On[r];
    }
    for (r = t.length; r--;)
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Aa(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  },
  Hi = function (t) {
    return t._gsap || Us(Le(t))[0]._gsap;
  },
  fa = function (t, i, e) {
    return (e = t[i]) && gt(e)
      ? t[i]()
      : (Ys(e) && t.getAttribute && t.getAttribute(i)) || e;
  },
  ue = function (t, i) {
    return (t = t.split(",")).forEach(i) || t;
  },
  wt = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  ft = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  dr = function (t, i) {
    var e = i.charAt(0),
      r = parseFloat(i.substr(2));
    return (
      (t = parseFloat(t)),
      e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r
    );
  },
  ql = function (t, i) {
    for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e;);
    return r < e;
  },
  In = function () {
    var t = Si.length,
      i = Si.slice(0),
      e,
      r;
    for (ms = {}, Si.length = 0, e = 0; e < t; e++)
      ((r = i[e]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  $s = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  ha = function (t, i, e, r) {
    (Si.length && !Bt && In(),
      t.render(i, e, !!(Bt && i < 0 && $s(t))),
      Si.length && !Bt && In());
  },
  da = function (t) {
    var i = parseFloat(t);
    return (i || i === 0) && (t + "").match(Yl).length < 2
      ? i
      : Lt(t)
        ? t.trim()
        : t;
  },
  pa = function (t) {
    return t;
  },
  ke = function (t, i) {
    for (var e in i) e in t || (t[e] = i[e]);
    return t;
  },
  Vl = function (t) {
    return function (i, e) {
      for (var r in e)
        r in i || (r === "duration" && t) || r === "ease" || (i[r] = e[r]);
    };
  },
  wr = function (t, i) {
    for (var e in i) t[e] = i[e];
    return t;
  },
  _o = function s(t, i) {
    for (var e in i)
      e !== "__proto__" &&
        e !== "constructor" &&
        e !== "prototype" &&
        (t[e] = Ze(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
    return t;
  },
  Bn = function (t, i) {
    var e = {},
      r;
    for (r in t) r in i || (e[r] = t[r]);
    return e;
  },
  Yr = function (t) {
    var i = t.parent || ht,
      e = t.keyframes ? Vl(Kt(t.keyframes)) : ke;
    if (le(t.inherit))
      for (; i;) (e(t, i.vars.defaults), (i = i.parent || i._dp));
    return t;
  },
  Ul = function (t, i) {
    for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e];);
    return e < 0;
  },
  _a = function (t, i, e, r, n) {
    var o = t[r],
      a;
    if (n) for (a = i[n]; o && o[n] > a;) o = o._prev;
    return (
      o ? ((i._next = o._next), (o._next = i)) : ((i._next = t[e]), (t[e] = i)),
      i._next ? (i._next._prev = i) : (t[r] = i),
      (i._prev = o),
      (i.parent = i._dp = t),
      i
    );
  },
  Gn = function (t, i, e, r) {
    (e === void 0 && (e = "_first"), r === void 0 && (r = "_last"));
    var n = i._prev,
      o = i._next;
    (n ? (n._next = o) : t[e] === i && (t[e] = o),
      o ? (o._prev = n) : t[r] === i && (t[r] = n),
      (i._next = i._prev = i.parent = null));
  },
  Ei = function (t, i) {
    (t.parent &&
      (!i || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0));
  },
  qi = function (t, i) {
    if (t && (!i || i._end > t._dur || i._start < 0))
      for (var e = t; e;) ((e._dirty = 1), (e = e.parent));
    return t;
  },
  $l = function (t) {
    for (var i = t.parent; i && i.parent;)
      ((i._dirty = 1), i.totalDuration(), (i = i.parent));
    return t;
  },
  vs = function (t, i, e, r) {
    return (
      t._startAt &&
      (Bt
        ? t._startAt.revert(kn)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(i, !0, r))
    );
  },
  Gl = function s(t) {
    return !t || (t._ts && s(t.parent));
  },
  go = function (t) {
    return t._repeat ? xr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  xr = function (t, i) {
    var e = Math.floor((t = ft(t / i)));
    return t && e === t ? e - 1 : e;
  },
  Yn = function (t, i) {
    return (
      (t - i._start) * i._ts +
      (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
    );
  },
  Kn = function (t) {
    return (t._end = ft(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || at) || 0),
    ));
  },
  Qn = function (t, i) {
    var e = t._dp;
    return (
      e &&
        e.smoothChildTiming &&
        t._ts &&
        ((t._start = ft(
          e._time -
            (t._ts > 0
              ? i / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts),
        )),
        Kn(t),
        e._dirty || qi(e, t)),
      t
    );
  },
  ga = function (t, i) {
    var e;
    if (
      ((i._time ||
        (!i._dur && i._initted) ||
        (i._start < t._time && (i._dur || !i.add))) &&
        ((e = Yn(t.rawTime(), i)),
        (!i._dur || un(0, i.totalDuration(), e) - i._tTime > at) &&
          i.render(e, !0)),
      qi(t, i)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (e = t; e._dp;)
          (e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp));
      t._zTime = -at;
    }
  },
  $e = function (t, i, e, r) {
    return (
      i.parent && Ei(i),
      (i._start = ft(
        (li(e) ? e : e || t !== ht ? Me(t, e, i) : t._time) + i._delay,
      )),
      (i._end = ft(
        i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0),
      )),
      _a(t, i, "_first", "_last", t._sort ? "_start" : 0),
      ys(i) || (t._recent = i),
      r || ga(t, i),
      t._ts < 0 && Qn(t, t._tTime),
      t
    );
  },
  ma = function (t, i) {
    return (
      (Pe.ScrollTrigger || Hs("scrollTrigger", i)) &&
      Pe.ScrollTrigger.create(i, t)
    );
  },
  va = function (t, i, e, r, n) {
    if ((Ks(t, i, n), !t._initted)) return 1;
    if (
      !e &&
      t._pt &&
      !Bt &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      ca !== be.frame
    )
      return (Si.push(t), (t._lazy = [n, r]), 1);
  },
  Kl = function s(t) {
    var i = t.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
  },
  ys = function (t) {
    var i = t.data;
    return i === "isFromStart" || i === "isStart";
  },
  Ql = function (t, i, e, r) {
    var n = t.ratio,
      o =
        i < 0 ||
        (!i &&
          ((!t._start && Kl(t) && !(!t._initted && ys(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !ys(t))))
          ? 0
          : 1,
      a = t._rDelay,
      l = 0,
      u,
      c,
      d;
    if (
      (a &&
        t._repeat &&
        ((l = un(0, t._tDur, i)),
        (c = xr(l, a)),
        t._yoyo && c & 1 && (o = 1 - o),
        c !== xr(t._tTime, a) &&
          ((n = 1 - o), t.vars.repeatRefresh && t._initted && t.invalidate())),
      o !== n || Bt || r || t._zTime === at || (!i && t._zTime))
    ) {
      if (!t._initted && va(t, i, r, e, l)) return;
      for (
        d = t._zTime,
          t._zTime = i || (e ? at : 0),
          e || (e = i && !d),
          t.ratio = o,
          t._from && (o = 1 - o),
          t._time = 0,
          t._tTime = l,
          u = t._pt;
        u;
      )
        (u.r(o, u.d), (u = u._next));
      (i < 0 && vs(t, i, e, !0),
        t._onUpdate && !e && Te(t, "onUpdate"),
        l && t._repeat && !e && t.parent && Te(t, "onRepeat"),
        (i >= t._tDur || i < 0) &&
          t.ratio === o &&
          (o && Ei(t, 1),
          !e &&
            !Bt &&
            (Te(t, o ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom())));
    } else t._zTime || (t._zTime = i);
  },
  Zl = function (t, i, e) {
    var r;
    if (e > i)
      for (r = t._first; r && r._start <= e;) {
        if (r.data === "isPause" && r._start > i) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= e;) {
        if (r.data === "isPause" && r._start < i) return r;
        r = r._prev;
      }
  },
  br = function (t, i, e, r) {
    var n = t._repeat,
      o = ft(i) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= o / t._dur),
      (t._dur = o),
      (t._tDur = n ? (n < 0 ? 1e10 : ft(o * (n + 1) + t._rDelay * n)) : o),
      a > 0 && !r && Qn(t, (t._tTime = t._tDur * a)),
      t.parent && Kn(t),
      e || qi(t.parent, t),
      t
    );
  },
  mo = function (t) {
    return t instanceof ae ? qi(t) : br(t, t._dur);
  },
  jl = { _start: 0, endTime: tn, totalDuration: tn },
  Me = function s(t, i, e) {
    var r = t.labels,
      n = t._recent || jl,
      o = t.duration() >= De ? n.endTime(!1) : t._dur,
      a,
      l,
      u;
    return Lt(i) && (isNaN(i) || i in r)
      ? ((l = i.charAt(0)),
        (u = i.substr(-1) === "%"),
        (a = i.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (i = i.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (u ? (a < 0 ? n : e).totalDuration() / 100 : 1))
          : a < 0
            ? (i in r || (r[i] = o), r[i])
            : ((l = parseFloat(i.charAt(a - 1) + i.substr(a + 1))),
              u && e && (l = (l / 100) * (Kt(e) ? e[0] : e).totalDuration()),
              a > 1 ? s(t, i.substr(0, a - 1), e) + l : o + l))
      : i == null
        ? o
        : +i;
  },
  Xr = function (t, i, e) {
    var r = li(i[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      o = i[n],
      a,
      l;
    if ((r && (o.duration = i[1]), (o.parent = e), t)) {
      for (a = o, l = e; l && !("immediateRender" in a);)
        ((a = l.vars.defaults || {}), (l = le(l.vars.inherit) && l.parent));
      ((o.immediateRender = le(a.immediateRender)),
        t < 2 ? (o.runBackwards = 1) : (o.startAt = i[n - 1]));
    }
    return new Ct(i[0], o, i[n + 1]);
  },
  Mi = function (t, i) {
    return t || t === 0 ? i(t) : i;
  },
  un = function (t, i, e) {
    return e < t ? t : e > i ? i : e;
  },
  $t = function (t, i) {
    return !Lt(t) || !(i = Xl.exec(t)) ? "" : i[1];
  },
  Jl = function (t, i, e) {
    return Mi(e, function (r) {
      return un(t, i, r);
    });
  },
  ws = [].slice,
  ya = function (t, i) {
    return (
      t &&
      Ze(t) &&
      "length" in t &&
      ((!i && !t.length) || (t.length - 1 in t && Ze(t[0]))) &&
      !t.nodeType &&
      t !== Ve
    );
  },
  tu = function (t, i, e) {
    return (
      e === void 0 && (e = []),
      t.forEach(function (r) {
        var n;
        return (Lt(r) && !i) || ya(r, 1)
          ? (n = e).push.apply(n, Le(r))
          : e.push(r);
      }) || e
    );
  },
  Le = function (t, i, e) {
    return ut && !i && ut.selector
      ? ut.selector(t)
      : Lt(t) && !e && (gs || !Sr())
        ? ws.call((i || Ws).querySelectorAll(t), 0)
        : Kt(t)
          ? tu(t, e)
          : ya(t)
            ? ws.call(t, 0)
            : t
              ? [t]
              : [];
  },
  xs = function (t) {
    return (
      (t = Le(t)[0] || Jr("Invalid scope") || {}),
      function (i) {
        var e = t.current || t.nativeElement || t;
        return Le(
          i,
          e.querySelectorAll
            ? e
            : e === t
              ? Jr("Invalid scope") || Ws.createElement("div")
              : t,
        );
      }
    );
  },
  wa = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  xa = function (t) {
    if (gt(t)) return t;
    var i = Ze(t) ? t : { each: t },
      e = Vi(i.ease),
      r = i.from || 0,
      n = parseFloat(i.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      u = i.axis,
      c = r,
      d = r;
    return (
      Lt(r)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((c = r[0]), (d = r[1])),
      function (h, f, _) {
        var p = (_ || i).length,
          m = o[p],
          x,
          y,
          T,
          v,
          S,
          k,
          b,
          O,
          P;
        if (!m) {
          if (((P = i.grid === "auto" ? 0 : (i.grid || [1, De])[1]), !P)) {
            for (
              b = -De;
              b < (b = _[P++].getBoundingClientRect().left) && P < p;
            );
            P < p && P--;
          }
          for (
            m = o[p] = [],
              x = l ? Math.min(P, p) * c - 0.5 : r % P,
              y = P === De ? 0 : l ? (p * d) / P - 0.5 : (r / P) | 0,
              b = 0,
              O = De,
              k = 0;
            k < p;
            k++
          )
            ((T = (k % P) - x),
              (v = y - ((k / P) | 0)),
              (m[k] = S = u ? Math.abs(u === "y" ? v : T) : ra(T * T + v * v)),
              S > b && (b = S),
              S < O && (O = S));
          (r === "random" && wa(m),
            (m.max = b - O),
            (m.min = O),
            (m.v = p =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  (P > p
                    ? p - 1
                    : u
                      ? u === "y"
                        ? p / P
                        : P
                      : Math.max(P, p / P)) ||
                0) * (r === "edges" ? -1 : 1)),
            (m.b = p < 0 ? n - p : n),
            (m.u = $t(i.amount || i.each) || 0),
            (e = e && p < 0 ? du(e) : e));
        }
        return (
          (p = (m[h] - m.min) / m.max || 0),
          ft(m.b + (e ? e(p) : p) * m.v) + m.u
        );
      }
    );
  },
  bs = function (t) {
    var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (e) {
      var r = ft(Math.round(parseFloat(e) / t) * t * i);
      return (r - (r % 1)) / i + (li(e) ? 0 : $t(e));
    };
  },
  ba = function (t, i) {
    var e = Kt(t),
      r,
      n;
    return (
      !e &&
        Ze(t) &&
        ((r = e = t.radius || De),
        t.values
          ? ((t = Le(t.values)), (n = !li(t[0])) && (r *= r))
          : (t = bs(t.increment))),
      Mi(
        i,
        e
          ? gt(t)
            ? function (o) {
                return ((n = t(o)), Math.abs(n - o) <= r ? n : o);
              }
            : function (o) {
                for (
                  var a = parseFloat(n ? o.x : o),
                    l = parseFloat(n ? o.y : 0),
                    u = De,
                    c = 0,
                    d = t.length,
                    h,
                    f;
                  d--;
                )
                  (n
                    ? ((h = t[d].x - a), (f = t[d].y - l), (h = h * h + f * f))
                    : (h = Math.abs(t[d] - a)),
                    h < u && ((u = h), (c = d)));
                return (
                  (c = !r || u <= r ? t[c] : o),
                  n || c === o || li(o) ? c : c + $t(o)
                );
              }
          : bs(t),
      )
    );
  },
  Sa = function (t, i, e, r) {
    return Mi(Kt(t) ? !i : e === !0 ? !!(e = 0) : !r, function () {
      return Kt(t)
        ? t[~~(Math.random() * t.length)]
        : (e = e || 1e-5) &&
            (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) *
                e *
                r,
            ) / r;
    });
  },
  eu = function () {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    return function (r) {
      return i.reduce(function (n, o) {
        return o(n);
      }, r);
    };
  },
  iu = function (t, i) {
    return function (e) {
      return t(parseFloat(e)) + (i || $t(e));
    };
  },
  ru = function (t, i, e) {
    return Ca(t, i, 0, 1, e);
  },
  Ta = function (t, i, e) {
    return Mi(e, function (r) {
      return t[~~i(r)];
    });
  },
  nu = function s(t, i, e) {
    var r = i - t;
    return Kt(t)
      ? Ta(t, s(0, t.length), i)
      : Mi(e, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  su = function s(t, i, e) {
    var r = i - t,
      n = r * 2;
    return Kt(t)
      ? Ta(t, s(0, t.length - 1), i)
      : Mi(e, function (o) {
          return ((o = (n + ((o - t) % n)) % n || 0), t + (o > r ? n - o : o));
        });
  },
  en = function (t) {
    return t.replace(Il, function (i) {
      var e = i.indexOf("[") + 1,
        r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(Bl);
      return Sa(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
    });
  },
  Ca = function (t, i, e, r, n) {
    var o = i - t,
      a = r - e;
    return Mi(n, function (l) {
      return e + (((l - t) / o) * a || 0);
    });
  },
  ou = function s(t, i, e, r) {
    var n = isNaN(t + i)
      ? 0
      : function (f) {
          return (1 - f) * t + f * i;
        };
    if (!n) {
      var o = Lt(t),
        a = {},
        l,
        u,
        c,
        d,
        h;
      if ((e === !0 && (r = 1) && (e = null), o))
        ((t = { p: t }), (i = { p: i }));
      else if (Kt(t) && !Kt(i)) {
        for (c = [], d = t.length, h = d - 2, u = 1; u < d; u++)
          c.push(s(t[u - 1], t[u]));
        (d--,
          (n = function (_) {
            _ *= d;
            var p = Math.min(h, ~~_);
            return c[p](_ - p);
          }),
          (e = i));
      } else r || (t = wr(Kt(t) ? [] : {}, t));
      if (!c) {
        for (l in i) Gs.call(a, t, l, "get", i[l]);
        n = function (_) {
          return js(_, a) || (o ? t.p : t);
        };
      }
    }
    return Mi(e, n);
  },
  vo = function (t, i, e) {
    var r = t.labels,
      n = De,
      o,
      a,
      l;
    for (o in r)
      ((a = r[o] - i),
        a < 0 == !!e && a && n > (a = Math.abs(a)) && ((l = o), (n = a)));
    return l;
  },
  Te = function (t, i, e) {
    var r = t.vars,
      n = r[i],
      o = ut,
      a = t._ctx,
      l,
      u,
      c;
    if (n)
      return (
        (l = r[i + "Params"]),
        (u = r.callbackScope || t),
        e && Si.length && In(),
        a && (ut = a),
        (c = l ? n.apply(u, l) : n.call(u)),
        (ut = o),
        c
      );
  },
  Dr = function (t) {
    return (
      Ei(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!Bt),
      t.progress() < 1 && Te(t, "onInterrupt"),
      t
    );
  },
  fr,
  Ea = [],
  Pa = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), Xs() || t.headless)) {
        var i = t.name,
          e = gt(t),
          r =
            i && !e && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: tn,
            render: js,
            add: Gs,
            kill: Su,
            modifier: bu,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Zs,
            aliases: {},
            register: 0,
          };
        if ((Sr(), t !== r)) {
          if (we[i]) return;
          (ke(r, ke(Bn(t, n), o)),
            wr(r.prototype, wr(n, Bn(t, o))),
            (we[(r.prop = i)] = r),
            t.targetTest && (On.push(r), (qs[i] = 1)),
            (i =
              (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
              "Plugin"));
        }
        (ua(i, r), t.register && t.register(he, r, ce));
      } else Ea.push(t);
  },
  ot = 255,
  Lr = {
    aqua: [0, ot, ot],
    lime: [0, ot, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ot],
    navy: [0, 0, 128],
    white: [ot, ot, ot],
    olive: [128, 128, 0],
    yellow: [ot, ot, 0],
    orange: [ot, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ot, 0, 0],
    pink: [ot, 192, 203],
    cyan: [0, ot, ot],
    transparent: [ot, ot, ot, 0],
  },
  es = function (t, i, e) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? i + (e - i) * t * 6
        : t < 0.5
          ? e
          : t * 3 < 2
            ? i + (e - i) * (2 / 3 - t) * 6
            : i) *
        ot +
        0.5) |
        0
    );
  },
  ka = function (t, i, e) {
    var r = t ? (li(t) ? [t >> 16, (t >> 8) & ot, t & ot] : 0) : Lr.black,
      n,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      _;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Lr[t]))
        r = Lr[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (o = t.charAt(2)),
            (a = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              o +
              o +
              a +
              a +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ot, r & ot, parseInt(t.substr(7), 16) / 255]
          );
        ((t = parseInt(t.substr(1), 16)),
          (r = [t >> 16, (t >> 8) & ot, t & ot]));
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = _ = t.match(ho)), !i))
          ((l = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (c = +r[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (n = c * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = es(l + 1 / 3, n, o)),
            (r[1] = es(l, n, o)),
            (r[2] = es(l - 1 / 3, n, o)));
        else if (~t.indexOf("="))
          return ((r = t.match(sa)), e && r.length < 4 && (r[3] = 1), r);
      } else r = t.match(ho) || Lr.transparent;
      r = r.map(Number);
    }
    return (
      i &&
        !_ &&
        ((n = r[0] / ot),
        (o = r[1] / ot),
        (a = r[2] / ot),
        (d = Math.max(n, o, a)),
        (h = Math.min(n, o, a)),
        (c = (d + h) / 2),
        d === h
          ? (l = u = 0)
          : ((f = d - h),
            (u = c > 0.5 ? f / (2 - d - h) : f / (d + h)),
            (l =
              d === n
                ? (o - a) / f + (o < a ? 6 : 0)
                : d === o
                  ? (a - n) / f + 2
                  : (n - o) / f + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(c * 100 + 0.5))),
      e && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Oa = function (t) {
    var i = [],
      e = [],
      r = -1;
    return (
      t.split(Ti).forEach(function (n) {
        var o = n.match(cr) || [];
        (i.push.apply(i, o), e.push((r += o.length + 1)));
      }),
      (i.c = e),
      i
    );
  },
  yo = function (t, i, e) {
    var r = "",
      n = (t + r).match(Ti),
      o = i ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      d;
    if (!n) return t;
    if (
      ((n = n.map(function (h) {
        return (
          (h = ka(h, i, 1)) &&
          o +
            (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      e && ((c = Oa(t)), (l = e.c), l.join(r) !== c.c.join(r)))
    )
      for (u = t.replace(Ti, "1").split(cr), d = u.length - 1; a < d; a++)
        r +=
          u[a] +
          (~l.indexOf(a)
            ? n.shift() || o + "0,0,0,0)"
            : (c.length ? c : n.length ? n : e).shift());
    if (!u)
      for (u = t.split(Ti), d = u.length - 1; a < d; a++) r += u[a] + n[a];
    return r + u[d];
  },
  Ti = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in Lr) s += "|" + t + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  au = /hsl[a]?\(/,
  Ma = function (t) {
    var i = t.join(" "),
      e;
    if (((Ti.lastIndex = 0), Ti.test(i)))
      return (
        (e = au.test(i)),
        (t[1] = yo(t[1], e)),
        (t[0] = yo(t[0], e, Oa(t[1]))),
        !0
      );
  },
  rn,
  be = (function () {
    var s = Date.now,
      t = 500,
      i = 33,
      e = s(),
      r = e,
      n = 1e3 / 240,
      o = n,
      a = [],
      l,
      u,
      c,
      d,
      h,
      f,
      _ = function p(m) {
        var x = s() - r,
          y = m === !0,
          T,
          v,
          S,
          k;
        if (
          ((x > t || x < 0) && (e += x - i),
          (r += x),
          (S = r - e),
          (T = S - o),
          (T > 0 || y) &&
            ((k = ++d.frame),
            (h = S - d.time * 1e3),
            (d.time = S = S / 1e3),
            (o += T + (T >= n ? 4 : n - T)),
            (v = 1)),
          y || (l = u(p)),
          v)
        )
          for (f = 0; f < a.length; f++) a[f](S, h, k, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          _(!0);
        },
        deltaRatio: function (m) {
          return h / (1e3 / (m || 60));
        },
        wake: function () {
          aa &&
            (!gs &&
              Xs() &&
              ((Ve = gs = window),
              (Ws = Ve.document || {}),
              (Pe.gsap = he),
              (Ve.gsapVersions || (Ve.gsapVersions = [])).push(he.version),
              la(Fn || Ve.GreenSockGlobals || (!Ve.gsap && Ve) || {}),
              Ea.forEach(Pa)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && d.sleep(),
            (u =
              c ||
              function (m) {
                return setTimeout(m, (o - d.time * 1e3 + 1) | 0);
              }),
            (rn = 1),
            _(2));
        },
        sleep: function () {
          ((c ? cancelAnimationFrame : clearTimeout)(l), (rn = 0), (u = tn));
        },
        lagSmoothing: function (m, x) {
          ((t = m || 1 / 0), (i = Math.min(x || 33, t)));
        },
        fps: function (m) {
          ((n = 1e3 / (m || 240)), (o = d.time * 1e3 + n));
        },
        add: function (m, x, y) {
          var T = x
            ? function (v, S, k, b) {
                (m(v, S, k, b), d.remove(T));
              }
            : m;
          return (d.remove(m), a[y ? "unshift" : "push"](T), Sr(), T);
        },
        remove: function (m, x) {
          ~(x = a.indexOf(m)) && a.splice(x, 1) && f >= x && f--;
        },
        _listeners: a,
      }),
      d
    );
  })(),
  Sr = function () {
    return !rn && be.wake();
  },
  j = {},
  lu = /^[\d.\-M][\d.\-,\s]/,
  uu = /["']/g,
  cu = function (t) {
    for (
      var i = {},
        e = t.substr(1, t.length - 3).split(":"),
        r = e[0],
        n = 1,
        o = e.length,
        a,
        l,
        u;
      n < o;
      n++
    )
      ((l = e[n]),
        (a = n !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (i[r] = isNaN(u) ? u.replace(uu, "").trim() : +u),
        (r = l.substr(a + 1).trim()));
    return i;
  },
  fu = function (t) {
    var i = t.indexOf("(") + 1,
      e = t.indexOf(")"),
      r = t.indexOf("(", i);
    return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
  },
  hu = function (t) {
    var i = (t + "").split("("),
      e = j[i[0]];
    return e && i.length > 1 && e.config
      ? e.config.apply(
          null,
          ~t.indexOf("{") ? [cu(i[1])] : fu(t).split(",").map(da),
        )
      : j._CE && lu.test(t)
        ? j._CE("", t)
        : e;
  },
  du = function (t) {
    return function (i) {
      return 1 - t(1 - i);
    };
  },
  Vi = function (t, i) {
    return (t && (gt(t) ? t : j[t] || hu(t))) || i;
  },
  Ji = function (t, i, e, r) {
    (e === void 0 &&
      (e = function (l) {
        return 1 - i(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
        }));
    var n = { easeIn: i, easeOut: e, easeInOut: r },
      o;
    return (
      ue(t, function (a) {
        ((j[a] = Pe[a] = n), (j[(o = a.toLowerCase())] = e));
        for (var l in n)
          j[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = j[a + "." + l] = n[l];
      }),
      n
    );
  },
  Ra = function (t) {
    return function (i) {
      return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
    };
  },
  is = function s(t, i, e) {
    var r = i >= 1 ? i : 1,
      n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      o = (n / _s) * (Math.asin(1 / r) || 0),
      a = function (c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Fl((c - o) * n) + 1;
      },
      l =
        t === "out"
          ? a
          : t === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Ra(a);
    return (
      (n = _s / n),
      (l.config = function (u, c) {
        return s(t, u, c);
      }),
      l
    );
  },
  rs = function s(t, i) {
    i === void 0 && (i = 1.70158);
    var e = function (o) {
        return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
      },
      r =
        t === "out"
          ? e
          : t === "in"
            ? function (n) {
                return 1 - e(1 - n);
              }
            : Ra(e);
    return (
      (r.config = function (n) {
        return s(t, n);
      }),
      r
    );
  };
ue("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
  var i = t < 5 ? t + 1 : t;
  Ji(
    s + ",Power" + (i - 1),
    t
      ? function (e) {
          return Math.pow(e, i);
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - Math.pow(1 - e, i);
    },
    function (e) {
      return e < 0.5
        ? Math.pow(e * 2, i) / 2
        : 1 - Math.pow((1 - e) * 2, i) / 2;
    },
  );
});
j.Linear.easeNone = j.none = j.Linear.easeIn;
Ji("Elastic", is("in"), is("out"), is());
(function (s, t) {
  var i = 1 / t,
    e = 2 * i,
    r = 2.5 * i,
    n = function (a) {
      return a < i
        ? s * a * a
        : a < e
          ? s * Math.pow(a - 1.5 / t, 2) + 0.75
          : a < r
            ? s * (a -= 2.25 / t) * a + 0.9375
            : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  Ji(
    "Bounce",
    function (o) {
      return 1 - n(1 - o);
    },
    n,
  );
})(7.5625, 2.75);
Ji("Expo", function (s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
Ji("Circ", function (s) {
  return -(ra(1 - s * s) - 1);
});
Ji("Sine", function (s) {
  return s === 1 ? 1 : -Nl(s * Ll) + 1;
});
Ji("Back", rs("in"), rs("out"), rs());
j.SteppedEase =
  j.steps =
  Pe.SteppedEase =
    {
      config: function (t, i) {
        t === void 0 && (t = 1);
        var e = 1 / t,
          r = t + (i ? 0 : 1),
          n = i ? 1 : 0,
          o = 1 - at;
        return function (a) {
          return (((r * un(0, o, a)) | 0) + n) * e;
        };
      },
    };
jr.ease = j["quad.out"];
ue(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (Vs += s + "," + s + "Params,");
  },
);
var Aa = function (t, i) {
    ((this.id = zl++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = i),
      (this.get = i ? i.get : fa),
      (this.set = i ? i.getSetter : Zs));
  },
  nn = (function () {
    function s(i) {
      ((this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0),
          (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        br(this, +i.duration, 1, 1),
        (this.data = i.data),
        ut && ((this._ctx = ut), ut.data.push(this)),
        rn || be.wake());
    }
    var t = s.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            br(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, r) {
        if ((Sr(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Qn(this, e), !n._dp || n.parent || ga(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            $e(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === at) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), ha(this, e, r)),
          this
        );
      }),
      (t.time = function (e, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + go(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              r,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                go(this),
              r,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (t.iteration = function (e, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, r)
          : this._repeat
            ? xr(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, r) {
        if (!arguments.length) return this._rts === -at ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? Yn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -at ? 0 : this._rts),
          this.totalTime(
            un(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1,
          ),
          Kn(this),
          $l(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Sr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== at &&
                      (this._tTime -= at),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = ft(e);
          var r = this.parent || this._dp;
          return (
            r &&
              (r._sort || !this.parent) &&
              $e(r, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (le(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var r = this.parent || this._dp;
        return r
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Yn(r.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = Hl);
        var r = Bt;
        return (
          (Bt = e),
          $s(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== "nested" && e.kill !== !1 && this.kill(),
          (Bt = r),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var r = this, n = arguments.length ? e : r.rawTime(); r;)
          ((n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), mo(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = e), mo(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, r) {
        return this.totalTime(Me(this, e), le(r));
      }),
      (t.restart = function (e, r) {
        return (
          this.play().totalTime(e ? -this._delay : 0, le(r)),
          this._dur || (this._zTime = -at),
          this
        );
      }),
      (t.play = function (e, r) {
        return (e != null && this.seek(e, r), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, r) {
        return (
          e != null && this.seek(e || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, r) {
        return (e != null && this.seek(e, r), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -at : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -at), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= r &&
            n < this.endTime(!0) - at)
        );
      }),
      (t.eventCallback = function (e, r, n) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[e] = r),
                n && (o[e + "Params"] = n),
                e === "onUpdate" && (this._onUpdate = r))
              : delete o[e],
            this)
          : o[e];
      }),
      (t.then = function (e) {
        var r = this,
          n = r._prom;
        return new Promise(function (o) {
          var a = gt(e) ? e : pa,
            l = function () {
              var c = r.then;
              ((r.then = null),
                n && n(),
                gt(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                o(a),
                (r.then = c));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? l()
            : (r._prom = l);
        });
      }),
      (t.kill = function () {
        Dr(this);
      }),
      s
    );
  })();
ke(nn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -at,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var ae = (function (s) {
  ia(t, s);
  function t(e, r) {
    var n;
    return (
      e === void 0 && (e = {}),
      (n = s.call(this, e) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!e.smoothChildTiming),
      (n.autoRemoveChildren = !!e.autoRemoveChildren),
      (n._sort = le(e.sortChildren)),
      ht && $e(e.parent || ht, ri(n), r),
      e.reversed && n.reverse(),
      e.paused && n.paused(!0),
      e.scrollTrigger && ma(ri(n), e.scrollTrigger),
      n
    );
  }
  var i = t.prototype;
  return (
    (i.to = function (r, n, o) {
      return (Xr(0, arguments, this), this);
    }),
    (i.from = function (r, n, o) {
      return (Xr(1, arguments, this), this);
    }),
    (i.fromTo = function (r, n, o, a) {
      return (Xr(2, arguments, this), this);
    }),
    (i.set = function (r, n, o) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Yr(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ct(r, n, Me(this, o), 1),
        this
      );
    }),
    (i.call = function (r, n, o) {
      return $e(this, Ct.delayedCall(0, r, n), o);
    }),
    (i.staggerTo = function (r, n, o, a, l, u, c) {
      return (
        (o.duration = n),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Ct(r, o, Me(this, l)),
        this
      );
    }),
    (i.staggerFrom = function (r, n, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (Yr(o).immediateRender = le(o.immediateRender)),
        this.staggerTo(r, n, o, a, l, u, c)
      );
    }),
    (i.staggerFromTo = function (r, n, o, a, l, u, c, d) {
      return (
        (a.startAt = o),
        (Yr(a).immediateRender = le(a.immediateRender)),
        this.staggerTo(r, n, a, l, u, c, d)
      );
    }),
    (i.render = function (r, n, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = r <= 0 ? 0 : ft(r),
        d = this._zTime < 0 != r < 0 && (this._initted || !u),
        h,
        f,
        _,
        p,
        m,
        x,
        y,
        T,
        v,
        S,
        k,
        b;
      if (
        (this !== ht && c > l && r >= 0 && (c = l), c !== this._tTime || o || d)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (r += this._time - a)),
          (h = c),
          (v = this._start),
          (T = this._ts),
          (x = !T),
          d && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (m = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(m * 100 + r, n, o);
          if (
            ((h = ft(c % m)),
            c === l
              ? ((p = this._repeat), (h = u))
              : ((S = ft(c / m)),
                (p = ~~S),
                p && p === S && ((h = u), p--),
                h > u && (h = u)),
            (S = xr(this._tTime, m)),
            !a &&
              this._tTime &&
              S !== p &&
              this._tTime - S * m - this._dur <= 0 &&
              (S = p),
            k && p & 1 && ((h = u - h), (b = 1)),
            p !== S && !this._lock)
          ) {
            var O = k && S & 1,
              P = O === (k && p & 1);
            if (
              (p < S && (O = !O),
              (a = O ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (b ? 0 : ft(p * m)), n, !u)._lock = 0),
              (this._tTime = c),
              !n && this.parent && Te(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !b &&
                ((this.invalidate()._lock = 1), (S = p)),
              (a && a !== this._time) ||
                x !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              P &&
                ((this._lock = 2),
                (a = O ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !b && this.invalidate()),
              (this._lock = 0),
              !this._ts && !x)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = Zl(this, ft(a), ft(h))), y && (c -= h - (h = y._start))),
          (this._tTime = c),
          (this._time = h),
          (this._act = !!T),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && c && u && !n && !S && (Te(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= a && r >= 0)
          for (f = this._first; f;) {
            if (
              ((_ = f._next), (f._act || h >= f._start) && f._ts && y !== f)
            ) {
              if (f.parent !== this) return this.render(r, n, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (h - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (h - f._start) * f._ts,
                  n,
                  o,
                ),
                h !== this._time || (!this._ts && !x))
              ) {
                ((y = 0), _ && (c += this._zTime = -at));
                break;
              }
            }
            f = _;
          }
        else {
          f = this._last;
          for (var C = r < 0 ? r : h; f;) {
            if (((_ = f._prev), (f._act || C <= f._end) && f._ts && y !== f)) {
              if (f.parent !== this) return this.render(r, n, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (C - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (C - f._start) * f._ts,
                  n,
                  o || (Bt && $s(f)),
                ),
                h !== this._time || (!this._ts && !x))
              ) {
                ((y = 0), _ && (c += this._zTime = C ? -at : at));
                break;
              }
            }
            f = _;
          }
        }
        if (
          y &&
          !n &&
          (this.pause(),
          (y.render(h >= a ? 0 : -at)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return ((this._start = v), Kn(this), this.render(r, n, o));
        (this._onUpdate && !n && Te(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (v === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Ei(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (c || a || !l) &&
                (Te(
                  this,
                  c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (i.add = function (r, n) {
      var o = this;
      if ((li(n) || (n = Me(this, n, r)), !(r instanceof nn))) {
        if (Kt(r))
          return (
            r.forEach(function (a) {
              return o.add(a, n);
            }),
            this
          );
        if (Lt(r)) return this.addLabel(r, n);
        if (gt(r)) r = Ct.delayedCall(0, r);
        else return this;
      }
      return this !== r ? $e(this, r, n) : this;
    }),
    (i.getChildren = function (r, n, o, a) {
      (r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -De));
      for (var l = [], u = this._first; u;)
        (u._start >= a &&
          (u instanceof Ct
            ? n && l.push(u)
            : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, o)))),
          (u = u._next));
      return l;
    }),
    (i.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), o = n.length; o--;)
        if (n[o].vars.id === r) return n[o];
    }),
    (i.remove = function (r) {
      return Lt(r)
        ? this.removeLabel(r)
        : gt(r)
          ? this.killTweensOf(r)
          : (r.parent === this && Gn(this, r),
            r === this._recent && (this._recent = this._last),
            qi(this));
    }),
    (i.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ft(
              be.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts),
            )),
          s.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (r, n) {
      return ((this.labels[r] = Me(this, n)), this);
    }),
    (i.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (i.addPause = function (r, n, o) {
      var a = Ct.delayedCall(0, n || tn, o);
      return (
        (a.data = "isPause"),
        (this._hasPause = 1),
        $e(this, a, Me(this, r))
      );
    }),
    (i.removePause = function (r) {
      var n = this._first;
      for (r = Me(this, r); n;)
        (n._start === r && n.data === "isPause" && Ei(n), (n = n._next));
    }),
    (i.killTweensOf = function (r, n, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--;)
        vi !== a[l] && a[l].kill(r, n);
      return this;
    }),
    (i.getTweensOf = function (r, n) {
      for (var o = [], a = Le(r), l = this._first, u = li(n), c; l;)
        (l instanceof Ct
          ? ql(l._targets, a) &&
            (u
              ? (!vi || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c),
          (l = l._next));
      return o;
    }),
    (i.tweenTo = function (r, n) {
      n = n || {};
      var o = this,
        a = Me(o, r),
        l = n,
        u = l.startAt,
        c = l.onStart,
        d = l.onStartParams,
        h = l.immediateRender,
        f,
        _ = Ct.to(
          o,
          ke(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale(),
                ) ||
                at,
              onStart: function () {
                if ((o.pause(), !f)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale(),
                    );
                  (_._dur !== m && br(_, m, 0, 1).render(_._time, !0, !0),
                    (f = 1));
                }
                c && c.apply(_, d || []);
              },
            },
            n,
          ),
        );
      return h ? _.render(0) : _;
    }),
    (i.tweenFromTo = function (r, n, o) {
      return this.tweenTo(n, ke({ startAt: { time: Me(this, r) } }, o));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), vo(this, Me(this, r)));
    }),
    (i.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), vo(this, Me(this, r), 1));
    }),
    (i.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + at);
    }),
    (i.shiftChildren = function (r, n, o) {
      o === void 0 && (o = 0);
      var a = this._first,
        l = this.labels,
        u;
      for (r = ft(r); a;)
        (a._start >= o && ((a._start += r), (a._end += r)), (a = a._next));
      if (n) for (u in l) l[u] >= o && (l[u] += r);
      return qi(this);
    }),
    (i.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(r), (n = n._next));
      return s.prototype.invalidate.call(this, r);
    }),
    (i.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, o; n;) ((o = n._next), this.remove(n), (n = o));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        qi(this)
      );
    }),
    (i.totalDuration = function (r) {
      var n = 0,
        o = this,
        a = o._last,
        l = De,
        u,
        c,
        d;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r),
        );
      if (o._dirty) {
        for (d = o.parent; a;)
          ((u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), ($e(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((n -= c),
              ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                ((o._start += ft(c / o._ts)), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = u));
        (br(o, o === ht && o._time > n ? o._time : n, 1, 1), (o._dirty = 0));
      }
      return o._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((ht._ts && (ha(ht, Yn(r, ht)), (ca = be.frame)), be.frame >= po)) {
        po += Ee.autoSleep || 120;
        var n = ht._first;
        if ((!n || !n._ts) && Ee.autoSleep && be._listeners.length < 2) {
          for (; n && !n._ts;) n = n._next;
          n || be.sleep();
        }
      }
    }),
    t
  );
})(nn);
ke(ae.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var pu = function (t, i, e, r, n, o, a) {
    var l = new ce(this._pt, t, i, 0, 1, Ia, null, n),
      u = 0,
      c = 0,
      d,
      h,
      f,
      _,
      p,
      m,
      x,
      y;
    for (
      l.b = e,
        l.e = r,
        e += "",
        r += "",
        (x = ~r.indexOf("random(")) && (r = en(r)),
        o && ((y = [e, r]), o(y, t, i), (e = y[0]), (r = y[1])),
        h = e.match(Jn) || [];
      (d = Jn.exec(r));
    )
      ((_ = d[0]),
        (p = r.substring(u, d.index)),
        f ? (f = (f + 1) % 5) : p.substr(-5) === "rgba(" && (f = 1),
        _ !== h[c++] &&
          ((m = parseFloat(h[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: m,
            c: _.charAt(1) === "=" ? dr(m, _) - m : parseFloat(_) - m,
            m: f && f < 4 ? Math.round : 0,
          }),
          (u = Jn.lastIndex)));
    return (
      (l.c = u < r.length ? r.substring(u, r.length) : ""),
      (l.fp = a),
      (oa.test(r) || x) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Gs = function (t, i, e, r, n, o, a, l, u, c) {
    gt(r) && (r = r(n || 0, t, o));
    var d = t[i],
      h =
        e !== "get"
          ? e
          : gt(d)
            ? u
              ? t[
                  i.indexOf("set") || !gt(t["get" + i.substr(3)])
                    ? i
                    : "get" + i.substr(3)
                ](u)
              : t[i]()
            : d,
      f = gt(d) ? (u ? yu : Na) : Qs,
      _;
    if (
      (Lt(r) &&
        (~r.indexOf("random(") && (r = en(r)),
        r.charAt(1) === "=" &&
          ((_ = dr(h, r) + ($t(h) || 0)), (_ || _ === 0) && (r = _))),
      !c || h !== r || Ss)
    )
      return !isNaN(h * r) && r !== ""
        ? ((_ = new ce(
            this._pt,
            t,
            i,
            +h || 0,
            r - (h || 0),
            typeof d == "boolean" ? xu : Fa,
            0,
            f,
          )),
          u && (_.fp = u),
          a && _.modifier(a, this, t),
          (this._pt = _))
        : (!d && !(i in t) && Hs(i, r),
          pu.call(this, t, i, h, r, f, l || Ee.stringFilter, u));
  },
  _u = function (t, i, e, r, n) {
    if (
      (gt(t) && (t = Wr(t, n, i, e, r)),
      !Ze(t) || (t.style && t.nodeType) || Kt(t) || na(t))
    )
      return Lt(t) ? Wr(t, n, i, e, r) : t;
    var o = {},
      a;
    for (a in t) o[a] = Wr(t[a], n, i, e, r);
    return o;
  },
  Da = function (t, i, e, r, n, o) {
    var a, l, u, c;
    if (
      we[t] &&
      (a = new we[t]()).init(
        n,
        a.rawVars ? i[t] : _u(i[t], r, n, o, e),
        e,
        r,
        o,
      ) !== !1 &&
      ((e._pt = l = new ce(e._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      e !== fr)
    )
      for (u = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--;)
        u[a._props[c]] = l;
    return a;
  },
  vi,
  Ss,
  Ks = function s(t, i, e) {
    var r = t.vars,
      n = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      u = r.onUpdate,
      c = r.runBackwards,
      d = r.yoyoEase,
      h = r.keyframes,
      f = r.autoRevert,
      _ = t._dur,
      p = t._startAt,
      m = t._targets,
      x = t.parent,
      y = x && x.data === "nested" ? x.vars.targets : m,
      T = t._overwrite === "auto" && !Bs,
      v = t.timeline,
      S = r.easeReverse || d,
      k,
      b,
      O,
      P,
      C,
      H,
      A,
      Q,
      E,
      M,
      N,
      D,
      Y;
    if (
      (v && (!h || !n) && (n = "none"),
      (t._ease = Vi(n, jr.ease)),
      (t._rEase = S && (Vi(S) || t._ease)),
      (t._from = !v && !!r.runBackwards),
      t._from && (t.ratio = 1),
      !v || (h && !r.stagger))
    ) {
      if (
        ((Q = m[0] ? Hi(m[0]).harness : 0),
        (D = Q && r[Q.prop]),
        (k = Bn(r, qs)),
        p &&
          (p._zTime < 0 && p.progress(1),
          i < 0 && c && a && !f ? p.render(-1, !0) : p.revert(c && _ ? kn : Wl),
          (p._lazy = 0)),
        o)
      ) {
        if (
          (Ei(
            (t._startAt = Ct.set(
              m,
              ke(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: x,
                  immediateRender: !0,
                  lazy: !p && le(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return Te(t, "onUpdate");
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          i < 0 && (Bt || (!a && !f)) && t._startAt.revert(kn),
          a && _ && i <= 0 && e <= 0)
        ) {
          i && (t._zTime = i);
          return;
        }
      } else if (c && _ && !p) {
        if (
          (i && (a = !1),
          (O = ke(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !p && le(l),
              immediateRender: a,
              stagger: 0,
              parent: x,
            },
            k,
          )),
          D && (O[Q.prop] = D),
          Ei((t._startAt = Ct.set(m, O))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          i < 0 && (Bt ? t._startAt.revert(kn) : t._startAt.render(-1, !0)),
          (t._zTime = i),
          !a)
        )
          s(t._startAt, at, at);
        else if (!i) return;
      }
      for (
        t._pt = t._ptCache = 0, l = (_ && le(l)) || (l && !_), b = 0;
        b < m.length;
        b++
      ) {
        if (
          ((C = m[b]),
          (A = C._gsap || Us(m)[b]._gsap),
          (t._ptLookup[b] = M = {}),
          ms[A.id] && Si.length && In(),
          (N = y === m ? b : y.indexOf(C)),
          Q &&
            (E = new Q()).init(C, D || k, t, N, y) !== !1 &&
            ((t._pt = P =
              new ce(t._pt, C, E.name, 0, 1, E.render, E, 0, E.priority)),
            E._props.forEach(function (V) {
              M[V] = P;
            }),
            E.priority && (H = 1)),
          !Q || D)
        )
          for (O in k)
            we[O] && (E = Da(O, k, t, N, C, y))
              ? E.priority && (H = 1)
              : (M[O] = P =
                  Gs.call(t, C, O, "get", k[O], N, y, 0, r.stringFilter));
        (t._op && t._op[b] && t.kill(C, t._op[b]),
          T &&
            t._pt &&
            ((vi = t),
            ht.killTweensOf(C, M, t.globalTime(i)),
            (Y = !t.parent),
            (vi = 0)),
          t._pt && l && (ms[A.id] = 1));
      }
      (H && Ba(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = u),
      (t._initted = (!t._op || t._pt) && !Y),
      h && i <= 0 && v.render(De, !0, !0));
  },
  gu = function (t, i, e, r, n, o, a, l) {
    var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[i],
      c,
      d,
      h,
      f;
    if (!u)
      for (
        u = t._ptCache[i] = [], h = t._ptLookup, f = t._targets.length;
        f--;
      ) {
        if (((c = h[f][i]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== i && c.fp !== i;) c = c._next;
        if (!c)
          return (
            (Ss = 1),
            (t.vars[i] = "+=0"),
            Ks(t, a),
            (Ss = 0),
            l
              ? Jr(
                  i +
                    " not eligible for reset. Try splitting into individual properties",
                )
              : 1
          );
        u.push(c);
      }
    for (f = u.length; f--;)
      ((d = u[f]),
        (c = d._pt || d),
        (c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c),
        (c.c = e - c.s),
        d.e && (d.e = wt(e) + $t(d.e)),
        d.b && (d.b = c.s + $t(d.b)));
  },
  mu = function (t, i) {
    var e = t[0] ? Hi(t[0]).harness : 0,
      r = e && e.aliases,
      n,
      o,
      a,
      l;
    if (!r) return i;
    n = wr({}, i);
    for (o in r)
      if (o in n) for (l = r[o].split(","), a = l.length; a--;) n[l[a]] = n[o];
    return n;
  },
  vu = function (t, i, e, r) {
    var n = i.ease || r || "power1.inOut",
      o,
      a;
    if (Kt(i))
      ((a = e[t] || (e[t] = [])),
        i.forEach(function (l, u) {
          return a.push({ t: (u / (i.length - 1)) * 100, v: l, e: n });
        }));
    else
      for (o in i)
        ((a = e[o] || (e[o] = [])),
          o === "ease" || a.push({ t: parseFloat(t), v: i[o], e: n }));
  },
  Wr = function (t, i, e, r, n) {
    return gt(t)
      ? t.call(i, e, r, n)
      : Lt(t) && ~t.indexOf("random(")
        ? en(t)
        : t;
  },
  La =
    Vs +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  za = {};
ue(La + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (za[s] = 1);
});
var Ct = (function (s) {
  ia(t, s);
  function t(e, r, n, o) {
    var a;
    (typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (a = s.call(this, o ? r : Yr(r)) || this));
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      _ = l.keyframes,
      p = l.defaults,
      m = l.scrollTrigger,
      x = r.parent || ht,
      y = (Kt(e) || na(e) ? li(e[0]) : "length" in r) ? [e] : Le(e),
      T,
      v,
      S,
      k,
      b,
      O,
      P,
      C;
    if (
      ((a._targets = y.length
        ? Us(y)
        : Jr(
            "GSAP target " + e + " not found. https://gsap.com",
            !Ee.nullTargetWarn,
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      _ || h || dn(u) || dn(c))
    ) {
      r = a.vars;
      var H = r.easeReverse || r.yoyoEase;
      if (
        ((T = a.timeline =
          new ae({
            data: "nested",
            defaults: p || {},
            targets: x && x.data === "nested" ? x.vars.targets : y,
          })),
        T.kill(),
        (T.parent = T._dp = ri(a)),
        (T._start = 0),
        h || dn(u) || dn(c))
      ) {
        if (((k = y.length), (P = h && xa(h)), Ze(h)))
          for (b in h) ~La.indexOf(b) && (C || (C = {}), (C[b] = h[b]));
        for (v = 0; v < k; v++)
          ((S = Bn(r, za)),
            (S.stagger = 0),
            H && (S.easeReverse = H),
            C && wr(S, C),
            (O = y[v]),
            (S.duration = +Wr(u, ri(a), v, O, y)),
            (S.delay = (+Wr(c, ri(a), v, O, y) || 0) - a._delay),
            !h &&
              k === 1 &&
              S.delay &&
              ((a._delay = c = S.delay), (a._start += c), (S.delay = 0)),
            T.to(O, S, P ? P(v, O, y) : 0),
            (T._ease = j.none));
        T.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (_) {
        (Yr(ke(T.vars.defaults, { ease: "none" })),
          (T._ease = Vi(_.ease || r.ease || "none")));
        var A = 0,
          Q,
          E,
          M;
        if (Kt(_))
          (_.forEach(function (N) {
            return T.to(y, N, ">");
          }),
            T.duration());
        else {
          S = {};
          for (b in _)
            b === "ease" || b === "easeEach" || vu(b, _[b], S, _.easeEach);
          for (b in S)
            for (
              Q = S[b].sort(function (N, D) {
                return N.t - D.t;
              }),
                A = 0,
                v = 0;
              v < Q.length;
              v++
            )
              ((E = Q[v]),
                (M = {
                  ease: E.e,
                  duration: ((E.t - (v ? Q[v - 1].t : 0)) / 100) * u,
                }),
                (M[b] = E.v),
                T.to(y, M, A),
                (A += M.duration));
          T.duration() < u && T.to({}, { duration: u - T.duration() });
        }
      }
      u || a.duration((u = T.duration()));
    } else a.timeline = 0;
    return (
      f === !0 && !Bs && ((vi = ri(a)), ht.killTweensOf(y), (vi = 0)),
      $e(x, ri(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (d ||
        (!u &&
          !_ &&
          a._start === ft(x._time) &&
          le(d) &&
          Gl(ri(a)) &&
          x.data !== "nested")) &&
        ((a._tTime = -at), a.render(Math.max(0, -c) || 0)),
      m && ma(ri(a), m),
      a
    );
  }
  var i = t.prototype;
  return (
    (i.render = function (r, n, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = r < 0,
        d = r > l - at && !c ? l : r < at ? 0 : r,
        h,
        f,
        _,
        p,
        m,
        x,
        y,
        T;
      if (!u) Ql(this, r, n, o);
      else if (
        d !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c) ||
        this._lazy
      ) {
        if (((h = d), (T = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(p * 100 + r, n, o);
          if (
            ((h = ft(d % p)),
            d === l
              ? ((_ = this._repeat), (h = u))
              : ((m = ft(d / p)),
                (_ = ~~m),
                _ && _ === m ? ((h = u), _--) : h > u && (h = u)),
            (x = this._yoyo && _ & 1),
            x && (h = u - h),
            (m = xr(this._tTime, p)),
            h === a && !o && this._initted && _ === m)
          )
            return ((this._tTime = d), this);
          _ !== m &&
            this.vars.repeatRefresh &&
            !x &&
            !this._lock &&
            h !== p &&
            this._initted &&
            ((this._lock = o = 1),
            (this.render(ft(p * _), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (va(this, c ? r : h, o, n, d)) return ((this._tTime = 0), this);
          if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
            return this;
          if (u !== this._dur) return this.render(r, n, o);
        }
        if (this._rEase) {
          var v = h < a;
          if (v !== this._inv) {
            var S = v ? a : u - a;
            ((this._inv = v),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = a),
              (this._invRecip = S ? (v ? -1 : 1) / S : 0),
              (this._invScale = v ? -this.ratio : 1 - this.ratio),
              (this._invEase = v ? this._rEase : this._ease));
          }
          this.ratio = y =
            this._invRatio +
            this._invScale *
              this._invEase((h - this._invTime) * this._invRecip);
        } else this.ratio = y = this._ease(h / u);
        if (
          (this._from && (this.ratio = y = 1 - y),
          (this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !a && d && !n && !m && (Te(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (f = this._pt; f;) (f.r(y, f.d), (f = f._next));
        ((T && T.render(r < 0 ? r : T._dur * T._ease(h / this._dur), n, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (c && vs(this, r, n, o), Te(this, "onUpdate")),
          this._repeat &&
            _ !== m &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            Te(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && vs(this, r, !0, !0),
            (r || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Ei(this, 1),
            !n &&
              !(c && !a) &&
              (d || a || x) &&
              (Te(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        s.prototype.invalidate.call(this, r)
      );
    }),
    (i.resetTo = function (r, n, o, a, l) {
      (rn || be.wake(), this._ts || this.play());
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || Ks(this, u),
        (c = this._ease(u / this._dur)),
        gu(this, r, n, o, a, c, u, l)
          ? this.resetTo(r, n, o, a, 1)
          : (Qn(this, 0),
            this.parent ||
              _a(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (i.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Dr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Bt),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, vi && vi.vars.overwrite !== !0)
            ._first || Dr(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            br(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? Le(r) : a,
        u = this._ptLookup,
        c = this._pt,
        d,
        h,
        f,
        _,
        p,
        m,
        x;
      if ((!n || n === "all") && Ul(a, l))
        return (n === "all" && (this._pt = 0), Dr(this));
      for (
        d = this._op = this._op || [],
          n !== "all" &&
            (Lt(n) &&
              ((p = {}),
              ue(n, function (y) {
                return (p[y] = 1);
              }),
              (n = p)),
            (n = mu(a, n))),
          x = a.length;
        x--;
      )
        if (~l.indexOf(a[x])) {
          ((h = u[x]),
            n === "all"
              ? ((d[x] = n), (_ = h), (f = {}))
              : ((f = d[x] = d[x] || {}), (_ = n)));
          for (p in _)
            ((m = h && h[p]),
              m &&
                ((!("kill" in m.d) || m.d.kill(p) === !0) && Gn(this, m, "_pt"),
                delete h[p]),
              f !== "all" && (f[p] = 1));
        }
      return (this._initted && !this._pt && c && Dr(this), this);
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return Xr(1, arguments);
    }),
    (t.delayedCall = function (r, n, o, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (r, n, o) {
      return Xr(2, arguments);
    }),
    (t.set = function (r, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n));
    }),
    (t.killTweensOf = function (r, n, o) {
      return ht.killTweensOf(r, n, o);
    }),
    t
  );
})(nn);
ke(Ct.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ue("staggerTo,staggerFrom,staggerFromTo", function (s) {
  Ct[s] = function () {
    var t = new ae(),
      i = ws.call(arguments, 0);
    return (i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i));
  };
});
var Qs = function (t, i, e) {
    return (t[i] = e);
  },
  Na = function (t, i, e) {
    return t[i](e);
  },
  yu = function (t, i, e, r) {
    return t[i](r.fp, e);
  },
  wu = function (t, i, e) {
    return t.setAttribute(i, e);
  },
  Zs = function (t, i) {
    return gt(t[i]) ? Na : Ys(t[i]) && t.setAttribute ? wu : Qs;
  },
  Fa = function (t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
  },
  xu = function (t, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * t), i);
  },
  Ia = function (t, i) {
    var e = i._pt,
      r = "";
    if (!t && i.b) r = i.b;
    else if (t === 1 && i.e) r = i.e;
    else {
      for (; e;)
        ((r =
          e.p +
          (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) +
          r),
          (e = e._next));
      r += i.c;
    }
    i.set(i.t, i.p, r, i);
  },
  js = function (t, i) {
    for (var e = i._pt; e;) (e.r(t, e.d), (e = e._next));
  },
  bu = function (t, i, e, r) {
    for (var n = this._pt, o; n;)
      ((o = n._next), n.p === r && n.modifier(t, i, e), (n = o));
  },
  Su = function (t) {
    for (var i = this._pt, e, r; i;)
      ((r = i._next),
        (i.p === t && !i.op) || i.op === t
          ? Gn(this, i, "_pt")
          : i.dep || (e = 1),
        (i = r));
    return !e;
  },
  Tu = function (t, i, e, r) {
    r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
  },
  Ba = function (t) {
    for (var i = t._pt, e, r, n, o; i;) {
      for (e = i._next, r = n; r && r.pr > i.pr;) r = r._next;
      ((i._prev = r ? r._prev : o) ? (i._prev._next = i) : (n = i),
        (i._next = r) ? (r._prev = i) : (o = i),
        (i = e));
    }
    t._pt = n;
  },
  ce = (function () {
    function s(i, e, r, n, o, a, l, u, c) {
      ((this.t = e),
        (this.s = n),
        (this.c = o),
        (this.p = r),
        (this.r = a || Fa),
        (this.d = l || this),
        (this.set = u || Qs),
        (this.pr = c || 0),
        (this._next = i),
        i && (i._prev = this));
    }
    var t = s.prototype;
    return (
      (t.modifier = function (e, r, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = Tu),
          (this.m = e),
          (this.mt = n),
          (this.tween = r));
      }),
      s
    );
  })();
ue(
  Vs +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (s) {
    return (qs[s] = 1);
  },
);
Pe.TweenMax = Pe.TweenLite = Ct;
Pe.TimelineLite = Pe.TimelineMax = ae;
ht = new ae({
  sortChildren: !1,
  defaults: jr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Ee.stringFilter = Ma;
var Ui = [],
  Mn = {},
  Cu = [],
  wo = 0,
  Eu = 0,
  ns = function (t) {
    return (Mn[t] || Cu).map(function (i) {
      return i();
    });
  },
  Ts = function () {
    var t = Date.now(),
      i = [];
    t - wo > 2 &&
      (ns("matchMediaInit"),
      Ui.forEach(function (e) {
        var r = e.queries,
          n = e.conditions,
          o,
          a,
          l,
          u;
        for (a in r)
          ((o = Ve.matchMedia(r[a]).matches),
            o && (l = 1),
            o !== n[a] && ((n[a] = o), (u = 1)));
        u && (e.revert(), l && i.push(e));
      }),
      ns("matchMediaRevert"),
      i.forEach(function (e) {
        return e.onMatch(e, function (r) {
          return e.add(null, r);
        });
      }),
      (wo = t),
      ns("matchMedia"));
  },
  Ya = (function () {
    function s(i, e) {
      ((this.selector = e && xs(e)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Eu++),
        i && this.add(i));
    }
    var t = s.prototype;
    return (
      (t.add = function (e, r, n) {
        gt(e) && ((n = r), (r = e), (e = gt));
        var o = this,
          a = function () {
            var u = ut,
              c = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              n && (o.selector = xs(n)),
              (ut = o),
              (d = r.apply(o, arguments)),
              gt(d) && o._r.push(d),
              (ut = u),
              (o.selector = c),
              (o.isReverted = !1),
              d
            );
          };
        return (
          (o.last = a),
          e === gt
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : e
              ? (o[e] = a)
              : a
        );
      }),
      (t.ignore = function (e) {
        var r = ut;
        ((ut = null), e(this), (ut = r));
      }),
      (t.getTweens = function () {
        var e = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof s
              ? e.push.apply(e, r.getTweens())
              : r instanceof Ct &&
                  !(r.parent && r.parent.data === "nested") &&
                  e.push(r);
          }),
          e
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, r) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var a = n.getTweens(), l = n.data.length, u; l--;)
                  ((u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return a.splice(a.indexOf(c), 1);
                      })));
                for (
                  a
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, d) {
                      return d.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(e);
                    }),
                    l = n.data.length;
                  l--;
                )
                  ((u = n.data[l]),
                    u instanceof ae
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ct) && u.revert && u.revert(e));
                (n._r.forEach(function (c) {
                  return c(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = Ui.length; o--;) Ui[o].id === this.id && Ui.splice(o, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      s
    );
  })(),
  Pu = (function () {
    function s(i) {
      ((this.contexts = []), (this.scope = i), ut && ut.data.push(this));
    }
    var t = s.prototype;
    return (
      (t.add = function (e, r, n) {
        Ze(e) || (e = { matches: e });
        var o = new Ya(0, n || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        (ut && !o.selector && (o.selector = ut.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = e));
        for (u in e)
          u === "all"
            ? (c = 1)
            : ((l = Ve.matchMedia(e[u])),
              l &&
                (Ui.indexOf(o) < 0 && Ui.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(Ts)
                  : l.addEventListener("change", Ts)));
        return (
          c &&
            r(o, function (d) {
              return o.add(null, d);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (r) {
          return r.kill(e, !0);
        });
      }),
      s
    );
  })(),
  Xn = {
    registerPlugin: function () {
      for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
        i[e] = arguments[e];
      i.forEach(function (r) {
        return Pa(r);
      });
    },
    timeline: function (t) {
      return new ae(t);
    },
    getTweensOf: function (t, i) {
      return ht.getTweensOf(t, i);
    },
    getProperty: function (t, i, e, r) {
      Lt(t) && (t = Le(t)[0]);
      var n = Hi(t || {}).get,
        o = e ? pa : da;
      return (
        e === "native" && (e = ""),
        t &&
          (i
            ? o(((we[i] && we[i].get) || n)(t, i, e, r))
            : function (a, l, u) {
                return o(((we[a] && we[a].get) || n)(t, a, l, u));
              })
      );
    },
    quickSetter: function (t, i, e) {
      if (((t = Le(t)), t.length > 1)) {
        var r = t.map(function (c) {
            return he.quickSetter(c, i, e);
          }),
          n = r.length;
        return function (c) {
          for (var d = n; d--;) r[d](c);
        };
      }
      t = t[0] || {};
      var o = we[i],
        a = Hi(t),
        l = (a.harness && (a.harness.aliases || {})[i]) || i,
        u = o
          ? function (c) {
              var d = new o();
              ((fr._pt = 0),
                d.init(t, e ? c + e : c, fr, 0, [t]),
                d.render(1, d),
                fr._pt && js(1, fr));
            }
          : a.set(t, l);
      return o
        ? u
        : function (c) {
            return u(t, l, e ? c + e : c, a, 1);
          };
    },
    quickTo: function (t, i, e) {
      var r,
        n = he.to(
          t,
          ke(
            ((r = {}), (r[i] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            e || {},
          ),
        ),
        o = function (l, u, c) {
          return n.resetTo(i, l, u, c);
        };
      return ((o.tween = n), o);
    },
    isTweening: function (t) {
      return ht.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return (t && t.ease && (t.ease = Vi(t.ease, jr.ease)), _o(jr, t || {}));
    },
    config: function (t) {
      return _o(Ee, t || {});
    },
    registerEffect: function (t) {
      var i = t.name,
        e = t.effect,
        r = t.plugins,
        n = t.defaults,
        o = t.extendTimeline;
      ((r || "").split(",").forEach(function (a) {
        return (
          a && !we[a] && !Pe[a] && Jr(i + " effect requires " + a + " plugin.")
        );
      }),
        (ts[i] = function (a, l, u) {
          return e(Le(a), ke(l || {}, n), u);
        }),
        o &&
          (ae.prototype[i] = function (a, l, u) {
            return this.add(ts[i](a, Ze(l) ? l : (u = l) && {}, this), u);
          }));
    },
    registerEase: function (t, i) {
      j[t] = Vi(i);
    },
    parseEase: function (t, i) {
      return arguments.length ? Vi(t, i) : j;
    },
    getById: function (t) {
      return ht.getById(t);
    },
    exportRoot: function (t, i) {
      t === void 0 && (t = {});
      var e = new ae(t),
        r,
        n;
      for (
        e.smoothChildTiming = le(t.smoothChildTiming),
          ht.remove(e),
          e._dp = 0,
          e._time = e._tTime = ht._time,
          r = ht._first;
        r;
      )
        ((n = r._next),
          (i ||
            !(
              !r._dur &&
              r instanceof Ct &&
              r.vars.onComplete === r._targets[0]
            )) &&
            $e(e, r, r._start - r._delay),
          (r = n));
      return ($e(ht, e, 0), e);
    },
    context: function (t, i) {
      return t ? new Ya(t, i) : ut;
    },
    matchMedia: function (t) {
      return new Pu(t);
    },
    matchMediaRefresh: function () {
      return (
        Ui.forEach(function (t) {
          var i = t.conditions,
            e,
            r;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Ts()
      );
    },
    addEventListener: function (t, i) {
      var e = Mn[t] || (Mn[t] = []);
      ~e.indexOf(i) || e.push(i);
    },
    removeEventListener: function (t, i) {
      var e = Mn[t],
        r = e && e.indexOf(i);
      r >= 0 && e.splice(r, 1);
    },
    utils: {
      wrap: nu,
      wrapYoyo: su,
      distribute: xa,
      random: Sa,
      snap: ba,
      normalize: ru,
      getUnit: $t,
      clamp: Jl,
      splitColor: ka,
      toArray: Le,
      selector: xs,
      mapRange: Ca,
      pipe: eu,
      unitize: iu,
      interpolate: ou,
      shuffle: wa,
    },
    install: la,
    effects: ts,
    ticker: be,
    updateRoot: ae.updateRoot,
    plugins: we,
    globalTimeline: ht,
    core: {
      PropTween: ce,
      globals: ua,
      Tween: Ct,
      Timeline: ae,
      Animation: nn,
      getCache: Hi,
      _removeLinkedListItem: Gn,
      reverting: function () {
        return Bt;
      },
      context: function (t) {
        return (t && ut && (ut.data.push(t), (t._ctx = ut)), ut);
      },
      suppressOverwrites: function (t) {
        return (Bs = t);
      },
    },
  };
ue("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (Xn[s] = Ct[s]);
});
be.add(ae.updateRoot);
fr = Xn.to({}, { duration: 0 });
var ku = function (t, i) {
    for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i;)
      e = e._next;
    return e;
  },
  Ou = function (t, i) {
    var e = t._targets,
      r,
      n,
      o;
    for (r in i)
      for (n = e.length; n--;)
        ((o = t._ptLookup[n][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = ku(o, r)),
            o && o.modifier && o.modifier(i[r], t, e[n], r)));
  },
  ss = function (t, i) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (r, n, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (Lt(n) &&
              ((l = {}),
              ue(n, function (c) {
                return (l[c] = 1);
              }),
              (n = l)),
            i)
          ) {
            l = {};
            for (u in n) l[u] = i(n[u]);
            n = l;
          }
          Ou(a, n);
        };
      },
    };
  },
  he =
    Xn.registerPlugin(
      {
        name: "attr",
        init: function (t, i, e, r, n) {
          var o, a, l;
          this.tween = e;
          for (o in i)
            ((l = t.getAttribute(o) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (l || 0) + "",
                i[o],
                r,
                n,
                0,
                0,
                o,
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o));
        },
        render: function (t, i) {
          for (var e = i._pt; e;)
            (Bt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, i) {
          for (var e = i.length; e--;)
            this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
        },
      },
      ss("roundProps", bs),
      ss("modifiers"),
      ss("snap", ba),
    ) || Xn;
Ct.version = ae.version = he.version = "3.15.0";
aa = 1;
Xs() && Sr();
j.Power0;
j.Power1;
j.Power2;
j.Power3;
j.Power4;
j.Linear;
j.Quad;
j.Cubic;
j.Quart;
j.Quint;
j.Strong;
j.Elastic;
j.Back;
j.SteppedEase;
j.Bounce;
j.Sine;
j.Expo;
j.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var xo,
  yi,
  pr,
  Js,
  Xi,
  bo,
  to,
  Mu = function () {
    return typeof window < "u";
  },
  ui = {},
  Ii = 180 / Math.PI,
  _r = Math.PI / 180,
  rr = Math.atan2,
  So = 1e8,
  eo = /([A-Z])/g,
  Ru = /(left|right|width|margin|padding|x)/i,
  Au = /[\s,\(]\S/,
  Ge = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Cs = function (t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
  },
  Du = function (t, i) {
    return i.set(
      i.t,
      i.p,
      t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u,
      i,
    );
  },
  Lu = function (t, i) {
    return i.set(
      i.t,
      i.p,
      t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  zu = function (t, i) {
    return i.set(
      i.t,
      i.p,
      t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b,
      i,
    );
  },
  Nu = function (t, i) {
    var e = i.s + i.c * t;
    i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  Xa = function (t, i) {
    return i.set(i.t, i.p, t ? i.e : i.b, i);
  },
  Wa = function (t, i) {
    return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
  },
  Fu = function (t, i, e) {
    return (t.style[i] = e);
  },
  Iu = function (t, i, e) {
    return t.style.setProperty(i, e);
  },
  Bu = function (t, i, e) {
    return (t._gsap[i] = e);
  },
  Yu = function (t, i, e) {
    return (t._gsap.scaleX = t._gsap.scaleY = e);
  },
  Xu = function (t, i, e, r, n) {
    var o = t._gsap;
    ((o.scaleX = o.scaleY = e), o.renderTransform(n, o));
  },
  Wu = function (t, i, e, r, n) {
    var o = t._gsap;
    ((o[i] = e), o.renderTransform(n, o));
  },
  dt = "transform",
  fe = dt + "Origin",
  Hu = function s(t, i) {
    var e = this,
      r = this.target,
      n = r.style,
      o = r._gsap;
    if (t in ui && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        ((t = Ge[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (e.tfm[a] = ni(r, a));
              })
            : (this.tfm[t] = o.x ? o[t] : ni(r, t)),
          t === fe && (this.tfm.zOrigin = o.zOrigin));
      else
        return Ge.transform.split(",").forEach(function (a) {
          return s.call(e, a, i);
        });
      if (this.props.indexOf(dt) >= 0) return;
      (o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(fe, i, "")),
        (t = dt));
    }
    (n || i) && this.props.push(t, i, n[t]);
  },
  Ha = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  qu = function () {
    var t = this.props,
      i = this.target,
      e = i.style,
      r = i._gsap,
      n,
      o;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? t[n + 1] === 2
          ? i[t[n]](t[n + 2])
          : (i[t[n]] = t[n + 2])
        : t[n + 2]
          ? (e[t[n]] = t[n + 2])
          : e.removeProperty(
              t[n].substr(0, 2) === "--"
                ? t[n]
                : t[n].replace(eo, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      (r.svg &&
        (r.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        (n = to()),
        (!n || !n.isStart) &&
          !e[dt] &&
          (Ha(e),
          r.zOrigin &&
            e[fe] &&
            ((e[fe] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  qa = function (t, i) {
    var e = { target: t, props: [], revert: qu, save: Hu };
    return (
      t._gsap || he.core.getCache(t),
      i &&
        t.style &&
        t.nodeType &&
        i.split(",").forEach(function (r) {
          return e.save(r);
        }),
      e
    );
  },
  Va,
  Es = function (t, i) {
    var e = yi.createElementNS
      ? yi.createElementNS(
          (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t,
        )
      : yi.createElement(t);
    return e && e.style ? e : yi.createElement(t);
  },
  Ce = function s(t, i, e) {
    var r = getComputedStyle(t);
    return (
      r[i] ||
      r.getPropertyValue(i.replace(eo, "-$1").toLowerCase()) ||
      r.getPropertyValue(i) ||
      (!e && s(t, Tr(i) || i, 1)) ||
      ""
    );
  },
  To = "O,Moz,ms,Ms,Webkit".split(","),
  Tr = function (t, i, e) {
    var r = i || Xi,
      n = r.style,
      o = 5;
    if (t in n && !e) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      o-- && !(To[o] + t in n);
    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? To[o] : "") + t;
  },
  Ps = function () {
    Mu() &&
      window.document &&
      ((xo = window),
      (yi = xo.document),
      (pr = yi.documentElement),
      (Xi = Es("div") || { style: {} }),
      Es("div"),
      (dt = Tr(dt)),
      (fe = dt + "Origin"),
      (Xi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Va = !!Tr("perspective")),
      (to = he.core.reverting),
      (Js = 1));
  },
  Co = function (t) {
    var i = t.ownerSVGElement,
      e = Es(
        "svg",
        (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      r = t.cloneNode(!0),
      n;
    ((r.style.display = "block"), e.appendChild(r), pr.appendChild(e));
    try {
      n = r.getBBox();
    } catch {}
    return (e.removeChild(r), pr.removeChild(e), n);
  },
  Eo = function (t, i) {
    for (var e = i.length; e--;)
      if (t.hasAttribute(i[e])) return t.getAttribute(i[e]);
  },
  Ua = function (t) {
    var i, e;
    try {
      i = t.getBBox();
    } catch {
      ((i = Co(t)), (e = 1));
    }
    return (
      (i && (i.width || i.height)) || e || (i = Co(t)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +Eo(t, ["x", "cx", "x1"]) || 0,
            y: +Eo(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  $a = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ua(t));
  },
  Pi = function (t, i) {
    if (i) {
      var e = t.style,
        r;
      (i in ui && i !== fe && (i = dt),
        e.removeProperty
          ? ((r = i.substr(0, 2)),
            (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            e.removeProperty(
              r === "--" ? i : i.replace(eo, "-$1").toLowerCase(),
            ))
          : e.removeAttribute(i));
    }
  },
  wi = function (t, i, e, r, n, o) {
    var a = new ce(t._pt, i, e, 0, 1, o ? Wa : Xa);
    return ((t._pt = a), (a.b = r), (a.e = n), t._props.push(e), a);
  },
  Po = { deg: 1, rad: 1, turn: 1 },
  Vu = { grid: 1, flex: 1 },
  ki = function s(t, i, e, r) {
    var n = parseFloat(e) || 0,
      o = (e + "").trim().substr((n + "").length) || "px",
      a = Xi.style,
      l = Ru.test(i),
      u = t.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = r === "px",
      f = r === "%",
      _,
      p,
      m,
      x;
    if (r === o || !n || Po[r] || Po[o]) return n;
    if (
      (o !== "px" && !h && (n = s(t, i, e, "px")),
      (x = t.getCTM && $a(t)),
      (f || o === "%") && (ui[i] || ~i.indexOf("adius")))
    )
      return (
        (_ = x ? t.getBBox()[l ? "width" : "height"] : t[c]),
        wt(f ? (n / _) * d : (n / 100) * _)
      );
    if (
      ((a[l ? "width" : "height"] = d + (h ? o : r)),
      (p =
        (r !== "rem" && ~i.indexOf("adius")) ||
        (r === "em" && t.appendChild && !u)
          ? t
          : t.parentNode),
      x && (p = (t.ownerSVGElement || {}).parentNode),
      (!p || p === yi || !p.appendChild) && (p = yi.body),
      (m = p._gsap),
      m && f && m.width && l && m.time === be.time && !m.uncache)
    )
      return wt((n / m.width) * d);
    if (f && (i === "height" || i === "width")) {
      var y = t.style[i];
      ((t.style[i] = d + r), (_ = t[c]), y ? (t.style[i] = y) : Pi(t, i));
    } else
      ((f || o === "%") &&
        !Vu[Ce(p, "display")] &&
        (a.position = Ce(t, "position")),
        p === t && (a.position = "static"),
        p.appendChild(Xi),
        (_ = Xi[c]),
        p.removeChild(Xi),
        (a.position = "absolute"));
    return (
      l && f && ((m = Hi(p)), (m.time = be.time), (m.width = p[c])),
      wt(h ? (_ * n) / d : _ && n ? (d / _) * n : 0)
    );
  },
  ni = function (t, i, e, r) {
    var n;
    return (
      Js || Ps(),
      i in Ge &&
        i !== "transform" &&
        ((i = Ge[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      ui[i] && i !== "transform"
        ? ((n = on(t, r)),
          (n =
            i !== "transformOrigin"
              ? n[i]
              : n.svg
                ? n.origin
                : Hn(Ce(t, fe)) + " " + n.zOrigin + "px"))
        : ((n = t.style[i]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Wn[i] && Wn[i](t, i, e)) ||
              Ce(t, i) ||
              fa(t, i) ||
              (i === "opacity" ? 1 : 0))),
      e && !~(n + "").trim().indexOf(" ") ? ki(t, i, n, e) + e : n
    );
  },
  Uu = function (t, i, e, r) {
    if (!e || e === "none") {
      var n = Tr(i, t, 1),
        o = n && Ce(t, n, 1);
      o && o !== e
        ? ((i = n), (e = o))
        : i === "borderColor" && (e = Ce(t, "borderTopColor"));
    }
    var a = new ce(this._pt, t.style, i, 0, 1, Ia),
      l = 0,
      u = 0,
      c,
      d,
      h,
      f,
      _,
      p,
      m,
      x,
      y,
      T,
      v,
      S;
    if (
      ((a.b = e),
      (a.e = r),
      (e += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = Ce(t, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((p = t.style[i]),
        (t.style[i] = r),
        (r = Ce(t, i) || r),
        p ? (t.style[i] = p) : Pi(t, i)),
      (c = [e, r]),
      Ma(c),
      (e = c[0]),
      (r = c[1]),
      (h = e.match(cr) || []),
      (S = r.match(cr) || []),
      S.length)
    ) {
      for (; (d = cr.exec(r));)
        ((m = d[0]),
          (y = r.substring(l, d.index)),
          _
            ? (_ = (_ + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1),
          m !== (p = h[u++] || "") &&
            ((f = parseFloat(p) || 0),
            (v = p.substr((f + "").length)),
            m.charAt(1) === "=" && (m = dr(f, m) + v),
            (x = parseFloat(m)),
            (T = m.substr((x + "").length)),
            (l = cr.lastIndex - T.length),
            T ||
              ((T = T || Ee.units[i] || v),
              l === r.length && ((r += T), (a.e += T))),
            v !== T && (f = ki(t, i, p, T) || 0),
            (a._pt = {
              _next: a._pt,
              p: y || u === 1 ? y : ",",
              s: f,
              c: x - f,
              m: (_ && _ < 4) || i === "zIndex" ? Math.round : 0,
            })));
      a.c = l < r.length ? r.substring(l, r.length) : "";
    } else a.r = i === "display" && r === "none" ? Wa : Xa;
    return (oa.test(r) && (a.e = 0), (this._pt = a), a);
  },
  ko = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  $u = function (t) {
    var i = t.split(" "),
      e = i[0],
      r = i[1] || "50%";
    return (
      (e === "top" || e === "bottom" || r === "left" || r === "right") &&
        ((t = e), (e = r), (r = t)),
      (i[0] = ko[e] || e),
      (i[1] = ko[r] || r),
      i.join(" ")
    );
  },
  Gu = function (t, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var e = i.t,
        r = e.style,
        n = i.u,
        o = e._gsap,
        a,
        l,
        u;
      if (n === "all" || n === !0) ((r.cssText = ""), (l = 1));
      else
        for (n = n.split(","), u = n.length; --u > -1;)
          ((a = n[u]),
            ui[a] && ((l = 1), (a = a === "transformOrigin" ? fe : dt)),
            Pi(e, a));
      l &&
        (Pi(e, dt),
        o &&
          (o.svg && e.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          on(e, 1),
          (o.uncache = 1),
          Ha(r)));
    }
  },
  Wn = {
    clearProps: function (t, i, e, r, n) {
      if (n.data !== "isFromStart") {
        var o = (t._pt = new ce(t._pt, i, e, 0, 0, Gu));
        return ((o.u = r), (o.pr = -10), (o.tween = n), t._props.push(e), 1);
      }
    },
  },
  sn = [1, 0, 0, 1, 0, 0],
  Ga = {},
  Ka = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Oo = function (t) {
    var i = Ce(t, dt);
    return Ka(i) ? sn : i.substr(7).match(sa).map(wt);
  },
  io = function (t, i) {
    var e = t._gsap || Hi(t),
      r = t.style,
      n = Oo(t),
      o,
      a,
      l,
      u;
    return e.svg && t.getAttribute("transform")
      ? ((l = t.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? sn : n)
      : (n === sn &&
          !t.offsetParent &&
          t !== pr &&
          !e.svg &&
          ((l = r.display),
          (r.display = "block"),
          (o = t.parentNode),
          (!o || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
            ((u = 1), (a = t.nextElementSibling), pr.appendChild(t)),
          (n = Oo(t)),
          l ? (r.display = l) : Pi(t, "display"),
          u &&
            (a
              ? o.insertBefore(t, a)
              : o
                ? o.appendChild(t)
                : pr.removeChild(t))),
        i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  ks = function (t, i, e, r, n, o) {
    var a = t._gsap,
      l = n || io(t, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      d = a.xOffset || 0,
      h = a.yOffset || 0,
      f = l[0],
      _ = l[1],
      p = l[2],
      m = l[3],
      x = l[4],
      y = l[5],
      T = i.split(" "),
      v = parseFloat(T[0]) || 0,
      S = parseFloat(T[1]) || 0,
      k,
      b,
      O,
      P;
    (e
      ? l !== sn &&
        (b = f * m - _ * p) &&
        ((O = v * (m / b) + S * (-p / b) + (p * y - m * x) / b),
        (P = v * (-_ / b) + S * (f / b) - (f * y - _ * x) / b),
        (v = O),
        (S = P))
      : ((k = Ua(t)),
        (v = k.x + (~T[0].indexOf("%") ? (v / 100) * k.width : v)),
        (S = k.y + (~(T[1] || T[0]).indexOf("%") ? (S / 100) * k.height : S))),
      r || (r !== !1 && a.smooth)
        ? ((x = v - u),
          (y = S - c),
          (a.xOffset = d + (x * f + y * p) - x),
          (a.yOffset = h + (x * _ + y * m) - y))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = v),
      (a.yOrigin = S),
      (a.smooth = !!r),
      (a.origin = i),
      (a.originIsAbsolute = !!e),
      (t.style[fe] = "0px 0px"),
      o &&
        (wi(o, a, "xOrigin", u, v),
        wi(o, a, "yOrigin", c, S),
        wi(o, a, "xOffset", d, a.xOffset),
        wi(o, a, "yOffset", h, a.yOffset)),
      t.setAttribute("data-svg-origin", v + " " + S));
  },
  on = function (t, i) {
    var e = t._gsap || new Aa(t);
    if ("x" in e && !i && !e.uncache) return e;
    var r = t.style,
      n = e.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(t),
      u = Ce(t, fe) || "0",
      c,
      d,
      h,
      f,
      _,
      p,
      m,
      x,
      y,
      T,
      v,
      S,
      k,
      b,
      O,
      P,
      C,
      H,
      A,
      Q,
      E,
      M,
      N,
      D,
      Y,
      V,
      g,
      tt,
      zt,
      de,
      nt,
      Et;
    return (
      (c = d = h = p = m = x = y = T = v = 0),
      (f = _ = 1),
      (e.svg = !!(t.getCTM && $a(t))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (r[dt] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[dt] !== "none" ? l[dt] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (b = io(t, e.svg)),
      e.svg &&
        (e.uncache
          ? ((Y = t.getBBox()),
            (u = e.xOrigin - Y.x + "px " + (e.yOrigin - Y.y) + "px"),
            (D = ""))
          : (D = !i && t.getAttribute("data-svg-origin")),
        ks(t, D || u, !!D || e.originIsAbsolute, e.smooth !== !1, b)),
      (S = e.xOrigin || 0),
      (k = e.yOrigin || 0),
      b !== sn &&
        ((H = b[0]),
        (A = b[1]),
        (Q = b[2]),
        (E = b[3]),
        (c = M = b[4]),
        (d = N = b[5]),
        b.length === 6
          ? ((f = Math.sqrt(H * H + A * A)),
            (_ = Math.sqrt(E * E + Q * Q)),
            (p = H || A ? rr(A, H) * Ii : 0),
            (y = Q || E ? rr(Q, E) * Ii + p : 0),
            y && (_ *= Math.abs(Math.cos(y * _r))),
            e.svg && ((c -= S - (S * H + k * Q)), (d -= k - (S * A + k * E))))
          : ((Et = b[6]),
            (de = b[7]),
            (g = b[8]),
            (tt = b[9]),
            (zt = b[10]),
            (nt = b[11]),
            (c = b[12]),
            (d = b[13]),
            (h = b[14]),
            (O = rr(Et, zt)),
            (m = O * Ii),
            O &&
              ((P = Math.cos(-O)),
              (C = Math.sin(-O)),
              (D = M * P + g * C),
              (Y = N * P + tt * C),
              (V = Et * P + zt * C),
              (g = M * -C + g * P),
              (tt = N * -C + tt * P),
              (zt = Et * -C + zt * P),
              (nt = de * -C + nt * P),
              (M = D),
              (N = Y),
              (Et = V)),
            (O = rr(-Q, zt)),
            (x = O * Ii),
            O &&
              ((P = Math.cos(-O)),
              (C = Math.sin(-O)),
              (D = H * P - g * C),
              (Y = A * P - tt * C),
              (V = Q * P - zt * C),
              (nt = E * C + nt * P),
              (H = D),
              (A = Y),
              (Q = V)),
            (O = rr(A, H)),
            (p = O * Ii),
            O &&
              ((P = Math.cos(O)),
              (C = Math.sin(O)),
              (D = H * P + A * C),
              (Y = M * P + N * C),
              (A = A * P - H * C),
              (N = N * P - M * C),
              (H = D),
              (M = Y)),
            m &&
              Math.abs(m) + Math.abs(p) > 359.9 &&
              ((m = p = 0), (x = 180 - x)),
            (f = wt(Math.sqrt(H * H + A * A + Q * Q))),
            (_ = wt(Math.sqrt(N * N + Et * Et))),
            (O = rr(M, N)),
            (y = Math.abs(O) > 2e-4 ? O * Ii : 0),
            (v = nt ? 1 / (nt < 0 ? -nt : nt) : 0)),
        e.svg &&
          ((D = t.getAttribute("transform")),
          (e.forceCSS = t.setAttribute("transform", "") || !Ka(Ce(t, dt))),
          D && t.setAttribute("transform", D))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (n
          ? ((f *= -1), (y += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((_ *= -1), (y += y <= 0 ? 180 : -180))),
      (i = i || e.uncache),
      (e.x =
        c -
        ((e.xPercent =
          c &&
          ((!i && e.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (t.offsetWidth * e.xPercent) / 100
          : 0) +
        o),
      (e.y =
        d -
        ((e.yPercent =
          d &&
          ((!i && e.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (t.offsetHeight * e.yPercent) / 100
          : 0) +
        o),
      (e.z = h + o),
      (e.scaleX = wt(f)),
      (e.scaleY = wt(_)),
      (e.rotation = wt(p) + a),
      (e.rotationX = wt(m) + a),
      (e.rotationY = wt(x) + a),
      (e.skewX = y + a),
      (e.skewY = T + a),
      (e.transformPerspective = v + o),
      (e.zOrigin = parseFloat(u.split(" ")[2]) || (!i && e.zOrigin) || 0) &&
        (r[fe] = Hn(u)),
      (e.xOffset = e.yOffset = 0),
      (e.force3D = Ee.force3D),
      (e.renderTransform = e.svg ? Qu : Va ? Qa : Ku),
      (e.uncache = 0),
      e
    );
  },
  Hn = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  os = function (t, i, e) {
    var r = $t(i);
    return wt(parseFloat(i) + parseFloat(ki(t, "x", e + "px", r))) + r;
  },
  Ku = function (t, i) {
    ((i.z = "0px"),
      (i.rotationY = i.rotationX = "0deg"),
      (i.force3D = 0),
      Qa(t, i));
  },
  Ni = "0deg",
  Mr = "0px",
  Fi = ") ",
  Qa = function (t, i) {
    var e = i || this,
      r = e.xPercent,
      n = e.yPercent,
      o = e.x,
      a = e.y,
      l = e.z,
      u = e.rotation,
      c = e.rotationY,
      d = e.rotationX,
      h = e.skewX,
      f = e.skewY,
      _ = e.scaleX,
      p = e.scaleY,
      m = e.transformPerspective,
      x = e.force3D,
      y = e.target,
      T = e.zOrigin,
      v = "",
      S = (x === "auto" && t && t !== 1) || x === !0;
    if (T && (d !== Ni || c !== Ni)) {
      var k = parseFloat(c) * _r,
        b = Math.sin(k),
        O = Math.cos(k),
        P;
      ((k = parseFloat(d) * _r),
        (P = Math.cos(k)),
        (o = os(y, o, b * P * -T)),
        (a = os(y, a, -Math.sin(k) * -T)),
        (l = os(y, l, O * P * -T + T)));
    }
    (m !== Mr && (v += "perspective(" + m + Fi),
      (r || n) && (v += "translate(" + r + "%, " + n + "%) "),
      (S || o !== Mr || a !== Mr || l !== Mr) &&
        (v +=
          l !== Mr || S
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + Fi),
      u !== Ni && (v += "rotate(" + u + Fi),
      c !== Ni && (v += "rotateY(" + c + Fi),
      d !== Ni && (v += "rotateX(" + d + Fi),
      (h !== Ni || f !== Ni) && (v += "skew(" + h + ", " + f + Fi),
      (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Fi),
      (y.style[dt] = v || "translate(0, 0)"));
  },
  Qu = function (t, i) {
    var e = i || this,
      r = e.xPercent,
      n = e.yPercent,
      o = e.x,
      a = e.y,
      l = e.rotation,
      u = e.skewX,
      c = e.skewY,
      d = e.scaleX,
      h = e.scaleY,
      f = e.target,
      _ = e.xOrigin,
      p = e.yOrigin,
      m = e.xOffset,
      x = e.yOffset,
      y = e.forceCSS,
      T = parseFloat(o),
      v = parseFloat(a),
      S,
      k,
      b,
      O,
      P;
    ((l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= _r),
          (u *= _r),
          (S = Math.cos(l) * d),
          (k = Math.sin(l) * d),
          (b = Math.sin(l - u) * -h),
          (O = Math.cos(l - u) * h),
          u &&
            ((c *= _r),
            (P = Math.tan(u - c)),
            (P = Math.sqrt(1 + P * P)),
            (b *= P),
            (O *= P),
            c &&
              ((P = Math.tan(c)),
              (P = Math.sqrt(1 + P * P)),
              (S *= P),
              (k *= P))),
          (S = wt(S)),
          (k = wt(k)),
          (b = wt(b)),
          (O = wt(O)))
        : ((S = d), (O = h), (k = b = 0)),
      ((T && !~(o + "").indexOf("px")) || (v && !~(a + "").indexOf("px"))) &&
        ((T = ki(f, "x", o, "px")), (v = ki(f, "y", a, "px"))),
      (_ || p || m || x) &&
        ((T = wt(T + _ - (_ * S + p * b) + m)),
        (v = wt(v + p - (_ * k + p * O) + x))),
      (r || n) &&
        ((P = f.getBBox()),
        (T = wt(T + (r / 100) * P.width)),
        (v = wt(v + (n / 100) * P.height))),
      (P =
        "matrix(" + S + "," + k + "," + b + "," + O + "," + T + "," + v + ")"),
      f.setAttribute("transform", P),
      y && (f.style[dt] = P));
  },
  Zu = function (t, i, e, r, n) {
    var o = 360,
      a = Lt(n),
      l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1),
      u = l - r,
      c = r + u + "deg",
      d,
      h;
    return (
      a &&
        ((d = n.split("_")[1]),
        d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        d === "cw" && u < 0
          ? (u = ((u + o * So) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * So) % o) - ~~(u / o) * o)),
      (t._pt = h = new ce(t._pt, i, e, r, u, Du)),
      (h.e = c),
      (h.u = "deg"),
      t._props.push(e),
      h
    );
  },
  Mo = function (t, i) {
    for (var e in i) t[e] = i[e];
    return t;
  },
  ju = function (t, i, e) {
    var r = Mo({}, e._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      o = e.style,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      _;
    r.svg
      ? ((u = e.getAttribute("transform")),
        e.setAttribute("transform", ""),
        (o[dt] = i),
        (a = on(e, 1)),
        Pi(e, dt),
        e.setAttribute("transform", u))
      : ((u = getComputedStyle(e)[dt]),
        (o[dt] = i),
        (a = on(e, 1)),
        (o[dt] = u));
    for (l in ui)
      ((u = r[l]),
        (c = a[l]),
        u !== c &&
          n.indexOf(l) < 0 &&
          ((f = $t(u)),
          (_ = $t(c)),
          (d = f !== _ ? ki(e, l, u, _) : parseFloat(u)),
          (h = parseFloat(c)),
          (t._pt = new ce(t._pt, a, l, d, h - d, Cs)),
          (t._pt.u = _ || 0),
          t._props.push(l)));
    Mo(a, r);
  };
ue("padding,margin,Width,Radius", function (s, t) {
  var i = "Top",
    e = "Right",
    r = "Bottom",
    n = "Left",
    o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function (a) {
      return t < 2 ? s + a : "border" + a + s;
    });
  Wn[t > 1 ? "border" + s : s] = function (a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return (
        (h = o.map(function (_) {
          return ni(a, _, u);
        })),
        (f = h.join(" ")),
        f.split(h[0]).length === 5 ? h[0] : f
      );
    ((h = (c + "").split(" ")),
      (f = {}),
      o.forEach(function (_, p) {
        return (f[_] = h[p] = h[p] || h[((p - 1) / 2) | 0]);
      }),
      a.init(l, f, d));
  };
});
var Za = {
  name: "css",
  register: Ps,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, i, e, r, n) {
    var o = this._props,
      a = t.style,
      l = e.vars.startAt,
      u,
      c,
      d,
      h,
      f,
      _,
      p,
      m,
      x,
      y,
      T,
      v,
      S,
      k,
      b,
      O,
      P;
    (Js || Ps(),
      (this.styles = this.styles || qa(t)),
      (O = this.styles.props),
      (this.tween = e));
    for (p in i)
      if (p !== "autoRound" && ((c = i[p]), !(we[p] && Da(p, i, e, r, t, n)))) {
        if (
          ((f = typeof c),
          (_ = Wn[p]),
          f === "function" && ((c = c.call(e, r, t, n)), (f = typeof c)),
          f === "string" && ~c.indexOf("random(") && (c = en(c)),
          _)
        )
          _(this, t, p, c, e) && (b = 1);
        else if (p.substr(0, 2) === "--")
          ((u = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
            (c += ""),
            (Ti.lastIndex = 0),
            Ti.test(u) ||
              ((m = $t(u)),
              (x = $t(c)),
              x ? m !== x && (u = ki(t, p, u, x) + x) : m && (c += m)),
            this.add(a, "setProperty", u, c, r, n, 0, 0, p),
            o.push(p),
            O.push(p, 0, a[p]));
        else if (f !== "undefined") {
          if (
            (l && p in l
              ? ((u = typeof l[p] == "function" ? l[p].call(e, r, t, n) : l[p]),
                Lt(u) && ~u.indexOf("random(") && (u = en(u)),
                $t(u + "") ||
                  u === "auto" ||
                  (u += Ee.units[p] || $t(ni(t, p)) || ""),
                (u + "").charAt(1) === "=" && (u = ni(t, p)))
              : (u = ni(t, p)),
            (h = parseFloat(u)),
            (y = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            y && (c = c.substr(2)),
            (d = parseFloat(c)),
            p in Ge &&
              (p === "autoAlpha" &&
                (h === 1 && ni(t, "visibility") === "hidden" && d && (h = 0),
                O.push("visibility", 0, a.visibility),
                wi(
                  this,
                  a,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d,
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = Ge[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (T = p in ui),
            T)
          ) {
            if (
              (this.styles.save(p),
              (P = c),
              f === "string" && c.substring(0, 6) === "var(--")
            ) {
              if (
                ((c = Ce(t, c.substring(4, c.indexOf(")")))),
                c.substring(0, 5) === "calc(")
              ) {
                var C = t.style.perspective;
                ((t.style.perspective = c),
                  (c = Ce(t, "perspective")),
                  C ? (t.style.perspective = C) : Pi(t, "perspective"));
              }
              d = parseFloat(c);
            }
            if (
              (v ||
                ((S = t._gsap),
                (S.renderTransform && !i.parseTransform) ||
                  on(t, i.parseTransform),
                (k = i.smoothOrigin !== !1 && S.smooth),
                (v = this._pt =
                  new ce(this._pt, a, dt, 0, 1, S.renderTransform, S, 0, -1)),
                (v.dep = 1)),
              p === "scale")
            )
              ((this._pt = new ce(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (y ? dr(S.scaleY, y + d) : d) - S.scaleY || 0,
                Cs,
              )),
                (this._pt.u = 0),
                o.push("scaleY", p),
                (p += "X"));
            else if (p === "transformOrigin") {
              (O.push(fe, 0, a[fe]),
                (c = $u(c)),
                S.svg
                  ? ks(t, c, 0, k, 0, this)
                  : ((x = parseFloat(c.split(" ")[2]) || 0),
                    x !== S.zOrigin && wi(this, S, "zOrigin", S.zOrigin, x),
                    wi(this, a, p, Hn(u), Hn(c))));
              continue;
            } else if (p === "svgOrigin") {
              ks(t, c, 1, k, 0, this);
              continue;
            } else if (p in Ga) {
              Zu(this, S, p, h, y ? dr(h, y + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              wi(this, S, "smooth", S.smooth, c);
              continue;
            } else if (p === "force3D") {
              S[p] = c;
              continue;
            } else if (p === "transform") {
              ju(this, c, t);
              continue;
            }
          } else p in a || (p = Tr(p) || p);
          if (T || ((d || d === 0) && (h || h === 0) && !Au.test(c) && p in a))
            ((m = (u + "").substr((h + "").length)),
              d || (d = 0),
              (x = $t(c) || (p in Ee.units ? Ee.units[p] : m)),
              m !== x && (h = ki(t, p, u, x)),
              (this._pt = new ce(
                this._pt,
                T ? S : a,
                p,
                h,
                (y ? dr(h, y + d) : d) - h,
                !T && (x === "px" || p === "zIndex") && i.autoRound !== !1
                  ? Nu
                  : Cs,
              )),
              (this._pt.u = x || 0),
              T && P !== c
                ? ((this._pt.b = u), (this._pt.e = P), (this._pt.r = zu))
                : m !== x &&
                  x !== "%" &&
                  ((this._pt.b = u), (this._pt.r = Lu)));
          else if (p in a) Uu.call(this, t, p, u, y ? y + c : c);
          else if (p in t) this.add(t, p, u || t[p], y ? y + c : c, r, n);
          else if (p !== "parseTransform") {
            Hs(p, c);
            continue;
          }
          (T ||
            (p in a
              ? O.push(p, 0, a[p])
              : typeof t[p] == "function"
                ? O.push(p, 2, t[p]())
                : O.push(p, 1, u || t[p])),
            o.push(p));
        }
      }
    b && Ba(this);
  },
  render: function (t, i) {
    if (i.tween._time || !to())
      for (var e = i._pt; e;) (e.r(t, e.d), (e = e._next));
    else i.styles.revert();
  },
  get: ni,
  aliases: Ge,
  getSetter: function (t, i, e) {
    var r = Ge[i];
    return (
      r && r.indexOf(",") < 0 && (i = r),
      i in ui && i !== fe && (t._gsap.x || ni(t, "x"))
        ? e && bo === e
          ? i === "scale"
            ? Yu
            : Bu
          : (bo = e || {}) && (i === "scale" ? Xu : Wu)
        : t.style && !Ys(t.style[i])
          ? Fu
          : ~i.indexOf("-")
            ? Iu
            : Zs(t, i)
    );
  },
  core: { _removeProperty: Pi, _getMatrix: io },
};
he.utils.checkPrefix = Tr;
he.core.getStyleSaver = qa;
(function (s, t, i, e) {
  var r = ue(s + "," + t + "," + i, function (n) {
    ui[n] = 1;
  });
  (ue(t, function (n) {
    ((Ee.units[n] = "deg"), (Ga[n] = 1));
  }),
    (Ge[r[13]] = s + "," + t),
    ue(e, function (n) {
      var o = n.split(":");
      Ge[o[1]] = r[o[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
ue(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    Ee.units[s] = "px";
  },
);
he.registerPlugin(Za);
var L = he.registerPlugin(Za) || he;
L.core.Tween;
function Ju(s, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    ((e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      "value" in e && (e.writable = !0),
      Object.defineProperty(s, e.key, e));
  }
}
function tc(s, t, i) {
  return (t && Ju(s.prototype, t), s);
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var It,
  Rn,
  Se,
  xi,
  bi,
  gr,
  ja,
  Bi,
  mr,
  Ja,
  oi,
  Xe,
  tl,
  el = function () {
    return (
      It ||
      (typeof window < "u" && (It = window.gsap) && It.registerPlugin && It)
    );
  },
  il = 1,
  hr = [],
  G = [],
  Qe = [],
  Hr = Date.now,
  Os = function (t, i) {
    return i;
  },
  ec = function () {
    var t = mr.core,
      i = t.bridge || {},
      e = t._scrollers,
      r = t._proxies;
    (e.push.apply(e, G),
      r.push.apply(r, Qe),
      (G = e),
      (Qe = r),
      (Os = function (o, a) {
        return i[o](a);
      }));
  },
  Ci = function (t, i) {
    return ~Qe.indexOf(t) && Qe[Qe.indexOf(t) + 1][i];
  },
  qr = function (t) {
    return !!~Ja.indexOf(t);
  },
  te = function (t, i, e, r, n) {
    return t.addEventListener(i, e, { passive: r !== !1, capture: !!n });
  },
  Jt = function (t, i, e, r) {
    return t.removeEventListener(i, e, !!r);
  },
  pn = "scrollLeft",
  _n = "scrollTop",
  Ms = function () {
    return (oi && oi.isPressed) || G.cache++;
  },
  qn = function (t, i) {
    var e = function r(n) {
      if (n || n === 0) {
        il && (Se.history.scrollRestoration = "manual");
        var o = oi && oi.isPressed;
        ((n = r.v = Math.round(n) || (oi && oi.iOS ? 1 : 0)),
          t(n),
          (r.cacheID = G.cache),
          o && Os("ss", n));
      } else
        (i || G.cache !== r.cacheID || Os("ref")) &&
          ((r.cacheID = G.cache), (r.v = t()));
      return r.v + r.offset;
    };
    return ((e.offset = 0), t && e);
  },
  ne = {
    s: pn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: qn(function (s) {
      return arguments.length
        ? Se.scrollTo(s, Ot.sc())
        : Se.pageXOffset || xi[pn] || bi[pn] || gr[pn] || 0;
    }),
  },
  Ot = {
    s: _n,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: ne,
    sc: qn(function (s) {
      return arguments.length
        ? Se.scrollTo(ne.sc(), s)
        : Se.pageYOffset || xi[_n] || bi[_n] || gr[_n] || 0;
    }),
  },
  oe = function (t, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || It.utils.toArray)(t)[0] ||
      (typeof t == "string" && It.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", t)
        : null)
    );
  },
  ic = function (t, i) {
    for (var e = i.length; e--;) if (i[e] === t || i[e].contains(t)) return !0;
    return !1;
  },
  Oi = function (t, i) {
    var e = i.s,
      r = i.sc;
    qr(t) && (t = xi.scrollingElement || bi);
    var n = G.indexOf(t),
      o = r === Ot.sc ? 1 : 2;
    (!~n && (n = G.push(t) - 1), G[n + o] || te(t, "scroll", Ms));
    var a = G[n + o],
      l =
        a ||
        (G[n + o] =
          qn(Ci(t, e), !0) ||
          (qr(t)
            ? r
            : qn(function (u) {
                return arguments.length ? (t[e] = u) : t[e];
              })));
    return (
      (l.target = t),
      a || (l.smooth = It.getProperty(t, "scrollBehavior") === "smooth"),
      l
    );
  },
  Rs = function (t, i, e) {
    var r = t,
      n = t,
      o = Hr(),
      a = o,
      l = i || 50,
      u = Math.max(500, l * 3),
      c = function (_, p) {
        var m = Hr();
        p || m - o > l
          ? ((n = r), (r = _), (a = o), (o = m))
          : e
            ? (r += _)
            : (r = n + ((_ - n) / (m - a)) * (o - a));
      },
      d = function () {
        ((n = r = e ? 0 : r), (a = o = 0));
      },
      h = function (_) {
        var p = a,
          m = n,
          x = Hr();
        return (
          (_ || _ === 0) && _ !== r && c(_),
          o === a || x - a > u
            ? 0
            : ((r + (e ? m : -m)) / ((e ? x : o) - p)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: h };
  },
  Rr = function (t, i) {
    return (
      i && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  Ro = function (t) {
    var i = Math.max.apply(Math, t),
      e = Math.min.apply(Math, t);
    return Math.abs(i) >= Math.abs(e) ? i : e;
  },
  rl = function () {
    ((mr = It.core.globals().ScrollTrigger), mr && mr.core && ec());
  },
  nl = function (t) {
    return (
      (It = t || el()),
      !Rn &&
        It &&
        typeof document < "u" &&
        document.body &&
        ((Se = window),
        (xi = document),
        (bi = xi.documentElement),
        (gr = xi.body),
        (Ja = [Se, xi, bi, gr]),
        It.utils.clamp,
        (tl = It.core.context || function () {}),
        (Bi = "onpointerenter" in gr ? "pointer" : "mouse"),
        (ja = xt.isTouch =
          Se.matchMedia &&
          Se.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Se ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Xe = xt.eventTypes =
          (
            "ontouchstart" in bi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in bi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (il = 0);
        }, 500),
        (Rn = 1)),
      mr || rl(),
      Rn
    );
  };
ne.op = Ot;
G.cache = 0;
var xt = (function () {
  function s(i) {
    this.init(i);
  }
  var t = s.prototype;
  return (
    (t.init = function (e) {
      (Rn || nl(It) || console.warn("Please gsap.registerPlugin(Observer)"),
        mr || rl());
      var r = e.tolerance,
        n = e.dragMinimum,
        o = e.type,
        a = e.target,
        l = e.lineHeight,
        u = e.debounce,
        c = e.preventDefault,
        d = e.onStop,
        h = e.onStopDelay,
        f = e.ignore,
        _ = e.wheelSpeed,
        p = e.event,
        m = e.onDragStart,
        x = e.onDragEnd,
        y = e.onDrag,
        T = e.onPress,
        v = e.onRelease,
        S = e.onRight,
        k = e.onLeft,
        b = e.onUp,
        O = e.onDown,
        P = e.onChangeX,
        C = e.onChangeY,
        H = e.onChange,
        A = e.onToggleX,
        Q = e.onToggleY,
        E = e.onHover,
        M = e.onHoverEnd,
        N = e.onMove,
        D = e.ignoreCheck,
        Y = e.isNormalizer,
        V = e.onGestureStart,
        g = e.onGestureEnd,
        tt = e.onWheel,
        zt = e.onEnable,
        de = e.onDisable,
        nt = e.onClick,
        Et = e.scrollSpeed,
        Yt = e.capture,
        bt = e.allowClicks,
        Qt = e.lockAxis,
        Xt = e.onLockAxis;
      ((this.target = a = oe(a) || bi),
        (this.vars = e),
        f && (f = It.utils.toArray(f)),
        (r = r || 1e-9),
        (n = n || 0),
        (_ = _ || 1),
        (Et = Et || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Se.getComputedStyle(gr).lineHeight) || 22));
      var ci,
        Zt,
        jt,
        J,
        mt,
        se,
        pe,
        w = this,
        _e = 0,
        je = 0,
        fi = e.passive || (!c && e.passive !== !1),
        pt = Oi(a, ne),
        Je = Oi(a, Ot),
        hi = pt(),
        Ri = Je(),
        Mt =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          Xe[0] === "pointerdown",
        di = qr(a),
        vt = a.ownerDocument || xi,
        Ne = [0, 0, 0],
        Oe = [0, 0, 0],
        ti = 0,
        Er = function () {
          return (ti = Hr());
        },
        St = function (B, et) {
          return (
            ((w.event = B) && f && ic(B.target, f)) ||
            (et && Mt && B.pointerType !== "touch") ||
            (D && D(B, et))
          );
        },
        cn = function () {
          (w._vx.reset(), w._vy.reset(), Zt.pause(), d && d(w));
        },
        ei = function () {
          var B = (w.deltaX = Ro(Ne)),
            et = (w.deltaY = Ro(Oe)),
            R = Math.abs(B) >= r,
            X = Math.abs(et) >= r;
          (H && (R || X) && H(w, B, et, Ne, Oe),
            R &&
              (S && w.deltaX > 0 && S(w),
              k && w.deltaX < 0 && k(w),
              P && P(w),
              A && w.deltaX < 0 != _e < 0 && A(w),
              (_e = w.deltaX),
              (Ne[0] = Ne[1] = Ne[2] = 0)),
            X &&
              (O && w.deltaY > 0 && O(w),
              b && w.deltaY < 0 && b(w),
              C && C(w),
              Q && w.deltaY < 0 != je < 0 && Q(w),
              (je = w.deltaY),
              (Oe[0] = Oe[1] = Oe[2] = 0)),
            (J || jt) &&
              (N && N(w),
              jt && (m && jt === 1 && m(w), y && y(w), (jt = 0)),
              (J = !1)),
            se && !(se = !1) && Xt && Xt(w),
            mt && (tt(w), (mt = !1)),
            (ci = 0));
        },
        tr = function (B, et, R) {
          ((Ne[R] += B),
            (Oe[R] += et),
            w._vx.update(B),
            w._vy.update(et),
            u ? ci || (ci = requestAnimationFrame(ei)) : ei());
        },
        er = function (B, et) {
          (Qt &&
            !pe &&
            ((w.axis = pe = Math.abs(B) > Math.abs(et) ? "x" : "y"), (se = !0)),
            pe !== "y" && ((Ne[2] += B), w._vx.update(B, !0)),
            pe !== "x" && ((Oe[2] += et), w._vy.update(et, !0)),
            u ? ci || (ci = requestAnimationFrame(ei)) : ei());
        },
        pi = function (B) {
          if (!St(B, 1)) {
            B = Rr(B, c);
            var et = B.clientX,
              R = B.clientY,
              X = et - w.x,
              F = R - w.y,
              W = w.isDragging;
            ((w.x = et),
              (w.y = R),
              (W ||
                ((X || F) &&
                  (Math.abs(w.startX - et) >= n ||
                    Math.abs(w.startY - R) >= n))) &&
                (jt || (jt = W ? 2 : 1), W || (w.isDragging = !0), er(X, F)));
          }
        },
        Ai = (w.onPress = function (q) {
          St(q, 1) ||
            (q && q.button) ||
            ((w.axis = pe = null),
            Zt.pause(),
            (w.isPressed = !0),
            (q = Rr(q)),
            (_e = je = 0),
            (w.startX = w.x = q.clientX),
            (w.startY = w.y = q.clientY),
            w._vx.reset(),
            w._vy.reset(),
            te(Y ? a : vt, Xe[1], pi, fi, !0),
            (w.deltaX = w.deltaY = 0),
            T && T(w));
        }),
        K = (w.onRelease = function (q) {
          if (!St(q, 1)) {
            Jt(Y ? a : vt, Xe[1], pi, !0);
            var B = !isNaN(w.y - w.startY),
              et = w.isDragging,
              R =
                et &&
                (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3),
              X = Rr(q);
            (!R &&
              B &&
              (w._vx.reset(),
              w._vy.reset(),
              c &&
                bt &&
                It.delayedCall(0.08, function () {
                  if (Hr() - ti > 300 && !q.defaultPrevented) {
                    if (q.target.click) q.target.click();
                    else if (vt.createEvent) {
                      var F = vt.createEvent("MouseEvents");
                      (F.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Se,
                        1,
                        X.screenX,
                        X.screenY,
                        X.clientX,
                        X.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        q.target.dispatchEvent(F));
                    }
                  }
                })),
              (w.isDragging = w.isGesturing = w.isPressed = !1),
              d && et && !Y && Zt.restart(!0),
              jt && ei(),
              x && et && x(w),
              v && v(w, R));
          }
        }),
        Di = function (B) {
          return (
            B.touches &&
            B.touches.length > 1 &&
            (w.isGesturing = !0) &&
            V(B, w.isDragging)
          );
        },
        Fe = function () {
          return (w.isGesturing = !1) || g(w);
        },
        Ie = function (B) {
          if (!St(B)) {
            var et = pt(),
              R = Je();
            (tr((et - hi) * Et, (R - Ri) * Et, 1),
              (hi = et),
              (Ri = R),
              d && Zt.restart(!0));
          }
        },
        Be = function (B) {
          if (!St(B)) {
            ((B = Rr(B, c)), tt && (mt = !0));
            var et =
              (B.deltaMode === 1 ? l : B.deltaMode === 2 ? Se.innerHeight : 1) *
              _;
            (tr(B.deltaX * et, B.deltaY * et, 0), d && !Y && Zt.restart(!0));
          }
        },
        Li = function (B) {
          if (!St(B)) {
            var et = B.clientX,
              R = B.clientY,
              X = et - w.x,
              F = R - w.y;
            ((w.x = et),
              (w.y = R),
              (J = !0),
              d && Zt.restart(!0),
              (X || F) && er(X, F));
          }
        },
        ir = function (B) {
          ((w.event = B), E(w));
        },
        ii = function (B) {
          ((w.event = B), M(w));
        },
        Pr = function (B) {
          return St(B) || (Rr(B, c) && nt(w));
        };
      ((Zt = w._dc = It.delayedCall(h || 0.25, cn).pause()),
        (w.deltaX = w.deltaY = 0),
        (w._vx = Rs(0, 50, !0)),
        (w._vy = Rs(0, 50, !0)),
        (w.scrollX = pt),
        (w.scrollY = Je),
        (w.isDragging = w.isGesturing = w.isPressed = !1),
        tl(this),
        (w.enable = function (q) {
          return (
            w.isEnabled ||
              (te(di ? vt : a, "scroll", Ms),
              o.indexOf("scroll") >= 0 && te(di ? vt : a, "scroll", Ie, fi, Yt),
              o.indexOf("wheel") >= 0 && te(a, "wheel", Be, fi, Yt),
              ((o.indexOf("touch") >= 0 && ja) || o.indexOf("pointer") >= 0) &&
                (te(a, Xe[0], Ai, fi, Yt),
                te(vt, Xe[2], K),
                te(vt, Xe[3], K),
                bt && te(a, "click", Er, !0, !0),
                nt && te(a, "click", Pr),
                V && te(vt, "gesturestart", Di),
                g && te(vt, "gestureend", Fe),
                E && te(a, Bi + "enter", ir),
                M && te(a, Bi + "leave", ii),
                N && te(a, Bi + "move", Li)),
              (w.isEnabled = !0),
              (w.isDragging = w.isGesturing = w.isPressed = J = jt = !1),
              w._vx.reset(),
              w._vy.reset(),
              (hi = pt()),
              (Ri = Je()),
              q && q.type && Ai(q),
              zt && zt(w)),
            w
          );
        }),
        (w.disable = function () {
          w.isEnabled &&
            (hr.filter(function (q) {
              return q !== w && qr(q.target);
            }).length || Jt(di ? vt : a, "scroll", Ms),
            w.isPressed &&
              (w._vx.reset(), w._vy.reset(), Jt(Y ? a : vt, Xe[1], pi, !0)),
            Jt(di ? vt : a, "scroll", Ie, Yt),
            Jt(a, "wheel", Be, Yt),
            Jt(a, Xe[0], Ai, Yt),
            Jt(vt, Xe[2], K),
            Jt(vt, Xe[3], K),
            Jt(a, "click", Er, !0),
            Jt(a, "click", Pr),
            Jt(vt, "gesturestart", Di),
            Jt(vt, "gestureend", Fe),
            Jt(a, Bi + "enter", ir),
            Jt(a, Bi + "leave", ii),
            Jt(a, Bi + "move", Li),
            (w.isEnabled = w.isPressed = w.isDragging = !1),
            de && de(w));
        }),
        (w.kill = w.revert =
          function () {
            w.disable();
            var q = hr.indexOf(w);
            (q >= 0 && hr.splice(q, 1), oi === w && (oi = 0));
          }),
        hr.push(w),
        Y && qr(a) && (oi = w),
        w.enable(p));
    }),
    tc(s, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    s
  );
})();
xt.version = "3.15.0";
xt.create = function (s) {
  return new xt(s);
};
xt.register = nl;
xt.getAll = function () {
  return hr.slice();
};
xt.getById = function (s) {
  return hr.filter(function (t) {
    return t.vars.id === s;
  })[0];
};
el() && It.registerPlugin(xt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var z,
  lr,
  $,
  rt,
  xe,
  it,
  ro,
  Vn,
  an,
  Vr,
  zr,
  gn,
  Vt,
  Zn,
  As,
  ie,
  Ao,
  Do,
  ur,
  sl,
  as,
  ol,
  ee,
  Ds,
  al,
  ll,
  mi,
  Ls,
  no,
  vr,
  so,
  Ur,
  zs,
  ls,
  mn = 1,
  Ut = Date.now,
  us = Ut(),
  ze = 0,
  Nr = 0,
  Lo = function (t, i, e) {
    var r = ye(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return ((e["_" + i + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t);
  },
  zo = function (t, i) {
    return i && (!ye(t) || t.substr(0, 6) !== "clamp(")
      ? "clamp(" + t + ")"
      : t;
  },
  rc = function s() {
    return Nr && requestAnimationFrame(s);
  },
  No = function () {
    return (Zn = 1);
  },
  Fo = function () {
    return (Zn = 0);
  },
  Ue = function (t) {
    return t;
  },
  Fr = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  ul = function () {
    return typeof window < "u";
  },
  cl = function () {
    return z || (ul() && (z = window.gsap) && z.registerPlugin && z);
  },
  Qi = function (t) {
    return !!~ro.indexOf(t);
  },
  fl = function (t) {
    return (
      (t === "Height" ? so : $["inner" + t]) ||
      xe["client" + t] ||
      it["client" + t]
    );
  },
  hl = function (t) {
    return (
      Ci(t, "getBoundingClientRect") ||
      (Qi(t)
        ? function () {
            return ((Nn.width = $.innerWidth), (Nn.height = so), Nn);
          }
        : function () {
            return si(t);
          })
    );
  },
  nc = function (t, i, e) {
    var r = e.d,
      n = e.d2,
      o = e.a;
    return (o = Ci(t, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (i ? fl(n) : t["client" + n]) || 0;
        };
  },
  sc = function (t, i) {
    return !i || ~Qe.indexOf(t)
      ? hl(t)
      : function () {
          return Nn;
        };
  },
  Ke = function (t, i) {
    var e = i.s,
      r = i.d2,
      n = i.d,
      o = i.a;
    return Math.max(
      0,
      (e = "scroll" + r) && (o = Ci(t, e))
        ? o() - hl(t)()[n]
        : Qi(t)
          ? (xe[e] || it[e]) - fl(r)
          : t[e] - t["offset" + r],
    );
  },
  vn = function (t, i) {
    for (var e = 0; e < ur.length; e += 3)
      (!i || ~i.indexOf(ur[e + 1])) && t(ur[e], ur[e + 1], ur[e + 2]);
  },
  ye = function (t) {
    return typeof t == "string";
  },
  Gt = function (t) {
    return typeof t == "function";
  },
  Ir = function (t) {
    return typeof t == "number";
  },
  Yi = function (t) {
    return typeof t == "object";
  },
  Ar = function (t, i, e) {
    return t && t.progress(i ? 0 : 1) && e && t.pause();
  },
  nr = function (t, i, e) {
    if (t.enabled) {
      var r = t._ctx
        ? t._ctx.add(function () {
            return i(t, e);
          })
        : i(t, e);
      r && r.totalTime && (t.callbackAnimation = r);
    }
  },
  sr = Math.abs,
  dl = "left",
  pl = "top",
  oo = "right",
  ao = "bottom",
  $i = "width",
  Gi = "height",
  $r = "Right",
  Gr = "Left",
  Kr = "Top",
  Qr = "Bottom",
  Tt = "padding",
  Re = "margin",
  Cr = "Width",
  lo = "Height",
  kt = "px",
  Ae = function (t) {
    return $.getComputedStyle(
      t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t,
    );
  },
  oc = function (t) {
    var i = Ae(t).position;
    t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  Io = function (t, i) {
    for (var e in i) e in t || (t[e] = i[e]);
    return t;
  },
  si = function (t, i) {
    var e =
        i &&
        Ae(t)[As] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        z
          .to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = t.getBoundingClientRect
        ? t.getBoundingClientRect()
        : t.scrollingElement.getBoundingClientRect();
    return (e && e.progress(0).kill(), r);
  },
  Un = function (t, i) {
    var e = i.d2;
    return t["offset" + e] || t["client" + e] || 0;
  },
  _l = function (t) {
    var i = [],
      e = t.labels,
      r = t.duration(),
      n;
    for (n in e) i.push(e[n] / r);
    return i;
  },
  ac = function (t) {
    return function (i) {
      return z.utils.snap(_l(t), i);
    };
  },
  uo = function (t) {
    var i = z.utils.snap(t),
      e =
        Array.isArray(t) &&
        t.slice(0).sort(function (r, n) {
          return r - n;
        });
    return e
      ? function (r, n, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!n) return i(r);
          if (n > 0) {
            for (r -= o, a = 0; a < e.length; a++) if (e[a] >= r) return e[a];
            return e[a - 1];
          } else for (a = e.length, r += o; a--;) if (e[a] <= r) return e[a];
          return e[0];
        }
      : function (r, n, o) {
          o === void 0 && (o = 0.001);
          var a = i(r);
          return !n || Math.abs(a - r) < o || a - r < 0 == n < 0
            ? a
            : i(n < 0 ? r - t : r + t);
        };
  },
  lc = function (t) {
    return function (i, e) {
      return uo(_l(t))(i, e.direction);
    };
  },
  yn = function (t, i, e, r) {
    return e.split(",").forEach(function (n) {
      return t(i, n, r);
    });
  },
  Dt = function (t, i, e, r, n) {
    return t.addEventListener(i, e, { passive: !r, capture: !!n });
  },
  At = function (t, i, e, r) {
    return t.removeEventListener(i, e, !!r);
  },
  wn = function (t, i, e) {
    ((e = e && e.wheelHandler), e && (t(i, "wheel", e), t(i, "touchmove", e)));
  },
  Bo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  xn = { toggleActions: "play", anticipatePin: 0 },
  $n = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  An = function (t, i) {
    if (ye(t)) {
      var e = t.indexOf("="),
        r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
      (~e && (t.indexOf("%") > e && (r *= i / 100), (t = t.substr(0, e - 1))),
        (t =
          r +
          (t in $n
            ? $n[t] * i
            : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0)));
    }
    return t;
  },
  bn = function (t, i, e, r, n, o, a, l) {
    var u = n.startColor,
      c = n.endColor,
      d = n.fontSize,
      h = n.indent,
      f = n.fontWeight,
      _ = rt.createElement("div"),
      p = Qi(e) || Ci(e, "pinType") === "fixed",
      m = t.indexOf("scroller") !== -1,
      x = p ? it : e.tagName === "IFRAME" ? e.contentDocument.body : e,
      y = t.indexOf("start") !== -1,
      T = y ? u : c,
      v =
        "border-color:" +
        T +
        ";font-size:" +
        d +
        ";color:" +
        T +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (v += "position:" + ((m || l) && p ? "fixed;" : "absolute;")),
      (m || l || !p) &&
        (v += (r === Ot ? oo : ao) + ":" + (o + parseFloat(h)) + "px;"),
      a &&
        (v +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (_._isStart = y),
      _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
      (_.style.cssText = v),
      (_.innerText = i || i === 0 ? t + "-" + i : t),
      x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_),
      (_._offset = _["offset" + r.op.d2]),
      Dn(_, 0, r, y),
      _
    );
  },
  Dn = function (t, i, e, r) {
    var n = { display: "block" },
      o = e[r ? "os2" : "p2"],
      a = e[r ? "p2" : "os2"];
    ((t._isFlipped = r),
      (n[e.a + "Percent"] = r ? -100 : 0),
      (n[e.a] = r ? "1px" : 0),
      (n["border" + o + Cr] = 1),
      (n["border" + a + Cr] = 0),
      (n[e.p] = i + "px"),
      z.set(t, n));
  },
  U = [],
  Ns = {},
  ln,
  Yo = function () {
    return Ut() - ze > 34 && (ln || (ln = requestAnimationFrame(ai)));
  },
  or = function () {
    (!ee || !ee.isPressed || ee.startX > it.clientWidth) &&
      (G.cache++,
      ee ? ln || (ln = requestAnimationFrame(ai)) : ai(),
      ze || ji("scrollStart"),
      (ze = Ut()));
  },
  cs = function () {
    ((ll = $.innerWidth), (al = $.innerHeight));
  },
  Br = function (t) {
    (G.cache++,
      (t === !0 ||
        (!Vt &&
          !ol &&
          !rt.fullscreenElement &&
          !rt.webkitFullscreenElement &&
          (!Ds ||
            ll !== $.innerWidth ||
            Math.abs($.innerHeight - al) > $.innerHeight * 0.25))) &&
        Vn.restart(!0));
  },
  Zi = {},
  uc = [],
  gl = function s() {
    return At(I, "scrollEnd", s) || Wi(!0);
  },
  ji = function (t) {
    return (
      (Zi[t] &&
        Zi[t].map(function (i) {
          return i();
        })) ||
      uc
    );
  },
  ve = [],
  ml = function (t) {
    for (var i = 0; i < ve.length; i += 5)
      (!t || (ve[i + 4] && ve[i + 4].query === t)) &&
        ((ve[i].style.cssText = ve[i + 1]),
        ve[i].getBBox && ve[i].setAttribute("transform", ve[i + 2] || ""),
        (ve[i + 3].uncache = 1));
  },
  vl = function () {
    return G.forEach(function (t) {
      return Gt(t) && ++t.cacheID && (t.rec = t());
    });
  },
  co = function (t, i) {
    var e;
    for (ie = 0; ie < U.length; ie++)
      ((e = U[ie]),
        e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0)));
    ((Ur = !0), i && ml(i), i || ji("revert"));
  },
  yl = function (t, i) {
    (G.cache++,
      (i || !re) &&
        G.forEach(function (e) {
          return Gt(e) && e.cacheID++ && (e.rec = 0);
        }),
      ye(t) && ($.history.scrollRestoration = no = t));
  },
  re,
  Ki = 0,
  Xo,
  cc = function () {
    if (Xo !== Ki) {
      var t = (Xo = Ki);
      requestAnimationFrame(function () {
        return t === Ki && Wi(!0);
      });
    }
  },
  wl = function () {
    (it.appendChild(vr),
      (so = (!ee && vr.offsetHeight) || $.innerHeight),
      it.removeChild(vr));
  },
  Wo = function (t) {
    return an(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (i) {
      return (i.style.display = t ? "none" : "block");
    });
  },
  Wi = function (t, i) {
    if (
      ((xe = rt.documentElement),
      (it = rt.body),
      (ro = [$, rt, xe, it]),
      ze && !t && !Ur)
    ) {
      Dt(I, "scrollEnd", gl);
      return;
    }
    (wl(), (re = I.isRefreshing = !0), Ur || vl());
    var e = ji("refreshInit");
    (sl && I.sort(),
      i || co(),
      G.forEach(function (r) {
        Gt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      U.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (Ur = !1),
      U.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[n];
          (r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh());
        }
      }),
      (zs = 1),
      Wo(!0),
      U.forEach(function (r) {
        var n = Ke(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > n),
          a = r._startClamp && r.start >= n;
        (o || a) &&
          r.setPositions(
            a ? n - 1 : r.start,
            o ? Math.max(a ? n : r.start + 1, n) : r.end,
            !0,
          );
      }),
      Wo(!1),
      (zs = 0),
      e.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      G.forEach(function (r) {
        Gt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      yl(no, 1),
      Vn.pause(),
      Ki++,
      (re = 2),
      ai(2),
      U.forEach(function (r) {
        return Gt(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (re = I.isRefreshing = !1),
      ji("refresh"));
  },
  Fs = 0,
  Ln = 1,
  Zr,
  ai = function (t) {
    if (t === 2 || (!re && !Ur)) {
      ((I.isUpdating = !0), Zr && Zr.update(0));
      var i = U.length,
        e = Ut(),
        r = e - us >= 50,
        n = i && U[0].scroll();
      if (
        ((Ln = Fs > n ? -1 : 1),
        re || (Fs = n),
        r &&
          (ze && !Zn && e - ze > 200 && ((ze = 0), ji("scrollEnd")),
          (zr = us),
          (us = e)),
        Ln < 0)
      ) {
        for (ie = i; ie-- > 0;) U[ie] && U[ie].update(0, r);
        Ln = 1;
      } else for (ie = 0; ie < i; ie++) U[ie] && U[ie].update(0, r);
      I.isUpdating = !1;
    }
    ln = 0;
  },
  Is = [
    dl,
    pl,
    ao,
    oo,
    Re + Qr,
    Re + $r,
    Re + Kr,
    Re + Gr,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  zn = Is.concat([
    $i,
    Gi,
    "boxSizing",
    "max" + Cr,
    "max" + lo,
    "position",
    Re,
    Tt,
    Tt + Kr,
    Tt + $r,
    Tt + Qr,
    Tt + Gr,
  ]),
  fc = function (t, i, e) {
    yr(e);
    var r = t._gsap;
    if (r.spacerIsNative) yr(r.spacerState);
    else if (t._gsap.swappedIn) {
      var n = i.parentNode;
      n && (n.insertBefore(t, i), n.removeChild(i));
    }
    t._gsap.swappedIn = !1;
  },
  fs = function (t, i, e, r) {
    if (!t._gsap.swappedIn) {
      for (var n = Is.length, o = i.style, a = t.style, l; n--;)
        ((l = Is[n]), (o[l] = e[l]));
      ((o.position = e.position === "absolute" ? "absolute" : "relative"),
        e.display === "inline" && (o.display = "inline-block"),
        (a[ao] = a[oo] = "auto"),
        (o.flexBasis = e.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[$i] = Un(t, ne) + kt),
        (o[Gi] = Un(t, Ot) + kt),
        (o[Tt] = a[Re] = a[pl] = a[dl] = "0"),
        yr(r),
        (a[$i] = a["max" + Cr] = e[$i]),
        (a[Gi] = a["max" + lo] = e[Gi]),
        (a[Tt] = e[Tt]),
        t.parentNode !== i &&
          (t.parentNode.insertBefore(i, t), i.appendChild(t)),
        (t._gsap.swappedIn = !0));
    }
  },
  hc = /([A-Z])/g,
  yr = function (t) {
    if (t) {
      var i = t.t.style,
        e = t.length,
        r = 0,
        n,
        o;
      for ((t.t._gsap || z.core.getCache(t.t)).uncache = 1; r < e; r += 2)
        ((o = t[r + 1]),
          (n = t[r]),
          o
            ? (i[n] = o)
            : i[n] && i.removeProperty(n.replace(hc, "-$1").toLowerCase()));
    }
  },
  Sn = function (t) {
    for (var i = zn.length, e = t.style, r = [], n = 0; n < i; n++)
      r.push(zn[n], e[zn[n]]);
    return ((r.t = t), r);
  },
  dc = function (t, i, e) {
    for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
      ((a = t[o]), r.push(a, a in i ? i[a] : t[o + 1]));
    return ((r.t = t.t), r);
  },
  Nn = { left: 0, top: 0 },
  Ho = function (t, i, e, r, n, o, a, l, u, c, d, h, f, _) {
    (Gt(t) && (t = t(l)),
      ye(t) &&
        t.substr(0, 3) === "max" &&
        (t = h + (t.charAt(4) === "=" ? An("0" + t.substr(3), e) : 0)));
    var p = f ? f.time() : 0,
      m,
      x,
      y;
    if ((f && f.seek(0), isNaN(t) || (t = +t), Ir(t)))
      (f &&
        (t = z.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          h,
          t,
        )),
        a && Dn(a, e, r, !0));
    else {
      Gt(i) && (i = i(l));
      var T = (t || "0").split(" "),
        v,
        S,
        k,
        b;
      ((y = oe(i, l) || it),
        (v = si(y) || {}),
        (!v || (!v.left && !v.top)) &&
          Ae(y).display === "none" &&
          ((b = y.style.display),
          (y.style.display = "block"),
          (v = si(y)),
          b ? (y.style.display = b) : y.style.removeProperty("display")),
        (S = An(T[0], v[r.d])),
        (k = An(T[1] || "0", e)),
        (t = v[r.p] - u[r.p] - c + S + n - k),
        a && Dn(a, k, r, e - k < 20 || (a._isStart && k > 20)),
        (e -= e - k));
    }
    if ((_ && ((l[_] = t || -0.001), t < 0 && (t = 0)), o)) {
      var O = t + e,
        P = o._isStart;
      ((m = "scroll" + r.d2),
        Dn(
          o,
          O,
          r,
          (P && O > 20) ||
            (!P && (d ? Math.max(it[m], xe[m]) : o.parentNode[m]) <= O + 1),
        ),
        d &&
          ((u = si(a)),
          d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + kt)));
    }
    return (
      f &&
        y &&
        ((m = si(y)),
        f.seek(h),
        (x = si(y)),
        (f._caScrollDist = m[r.p] - x[r.p]),
        (t = (t / f._caScrollDist) * h)),
      f && f.seek(p),
      f ? t : Math.round(t)
    );
  },
  pc = /(webkit|moz|length|cssText|inset)/i,
  qo = function (t, i, e, r) {
    if (t.parentNode !== i) {
      var n = t.style,
        o,
        a;
      if (i === it) {
        ((t._stOrig = n.cssText), (a = Ae(t)));
        for (o in a)
          !+o &&
            !pc.test(o) &&
            a[o] &&
            typeof n[o] == "string" &&
            o !== "0" &&
            (n[o] = a[o]);
        ((n.top = e), (n.left = r));
      } else n.cssText = t._stOrig;
      ((z.core.getCache(t).uncache = 1), i.appendChild(t));
    }
  },
  xl = function (t, i, e) {
    var r = i,
      n = r;
    return function (o) {
      var a = Math.round(t());
      return (
        a !== r &&
          a !== n &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - n) > 3 &&
          ((o = a), e && e()),
        (n = r),
        (r = Math.round(o)),
        r
      );
    };
  },
  Tn = function (t, i, e) {
    var r = {};
    ((r[i.p] = "+=" + e), z.set(t, r));
  },
  Vo = function (t, i) {
    var e = Oi(t, i),
      r = "_scroll" + i.p2,
      n = function o(a, l, u, c, d) {
        var h = o.tween,
          f = l.onComplete,
          _ = {};
        u = u || e();
        var p = xl(e, u, function () {
          (h.kill(), (o.tween = 0));
        });
        return (
          (d = (c && d) || 0),
          (c = c || a - u),
          h && h.kill(),
          (l[r] = a),
          (l.inherit = !1),
          (l.modifiers = _),
          (_[r] = function () {
            return p(u + c * h.ratio + d * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            (G.cache++, o.tween && ai());
          }),
          (l.onComplete = function () {
            ((o.tween = 0), f && f.call(h));
          }),
          (h = o.tween = z.to(t, l)),
          h
        );
      };
    return (
      (t[r] = e),
      (e.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Dt(t, "wheel", e.wheelHandler),
      I.isTouch && Dt(t, "touchmove", e.wheelHandler),
      n
    );
  },
  I = (function () {
    function s(i, e) {
      (lr ||
        s.register(z) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Ls(this),
        this.init(i, e));
    }
    var t = s.prototype;
    return (
      (t.init = function (e, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Nr)
        ) {
          this.update = this.refresh = this.kill = Ue;
          return;
        }
        e = Io(ye(e) || Ir(e) || e.nodeType ? { trigger: e } : e, xn);
        var n = e,
          o = n.onUpdate,
          a = n.toggleClass,
          l = n.id,
          u = n.onToggle,
          c = n.onRefresh,
          d = n.scrub,
          h = n.trigger,
          f = n.pin,
          _ = n.pinSpacing,
          p = n.invalidateOnRefresh,
          m = n.anticipatePin,
          x = n.onScrubComplete,
          y = n.onSnapComplete,
          T = n.once,
          v = n.snap,
          S = n.pinReparent,
          k = n.pinSpacer,
          b = n.containerAnimation,
          O = n.fastScrollEnd,
          P = n.preventOverlaps,
          C =
            e.horizontal || (e.containerAnimation && e.horizontal !== !1)
              ? ne
              : Ot,
          H = !d && d !== 0,
          A = oe(e.scroller || $),
          Q = z.core.getCache(A),
          E = Qi(A),
          M =
            ("pinType" in e
              ? e.pinType
              : Ci(A, "pinType") || (E && "fixed")) === "fixed",
          N = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
          D = H && e.toggleActions.split(" "),
          Y = "markers" in e ? e.markers : xn.markers,
          V = E ? 0 : parseFloat(Ae(A)["border" + C.p2 + Cr]) || 0,
          g = this,
          tt =
            e.onRefreshInit &&
            function () {
              return e.onRefreshInit(g);
            },
          zt = nc(A, E, C),
          de = sc(A, E),
          nt = 0,
          Et = 0,
          Yt = 0,
          bt = Oi(A, C),
          Qt,
          Xt,
          ci,
          Zt,
          jt,
          J,
          mt,
          se,
          pe,
          w,
          _e,
          je,
          fi,
          pt,
          Je,
          hi,
          Ri,
          Mt,
          di,
          vt,
          Ne,
          Oe,
          ti,
          Er,
          St,
          cn,
          ei,
          tr,
          er,
          pi,
          Ai,
          K,
          Di,
          Fe,
          Ie,
          Be,
          Li,
          ir,
          ii;
        if (
          ((g._startClamp = g._endClamp = !1),
          (g._dir = C),
          (m *= 45),
          (g.scroller = A),
          (g.scroll = b ? b.time.bind(b) : bt),
          (Zt = bt()),
          (g.vars = e),
          (r = r || e.animation),
          "refreshPriority" in e &&
            ((sl = 1), e.refreshPriority === -9999 && (Zr = g)),
          (Q.tweenScroll = Q.tweenScroll || {
            top: Vo(A, Ot),
            left: Vo(A, ne),
          }),
          (g.tweenTo = Qt = Q.tweenScroll[C.p]),
          (g.scrubDuration = function (R) {
            ((Di = Ir(R) && R),
              Di
                ? K
                  ? K.duration(R)
                  : (K = z.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Di,
                      paused: !0,
                      onComplete: function () {
                        return x && x(g);
                      },
                    }))
                : (K && K.progress(1).kill(), (K = 0)));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !g.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                e.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (g.animation = r.pause()),
            (r.scrollTrigger = g),
            g.scrubDuration(d),
            (pi = 0),
            l || (l = r.vars.id)),
          v &&
            ((!Yi(v) || v.push) && (v = { snapTo: v }),
            "scrollBehavior" in it.style &&
              z.set(E ? [it, xe] : A, { scrollBehavior: "auto" }),
            G.forEach(function (R) {
              return (
                Gt(R) &&
                R.target === (E ? rt.scrollingElement || xe : A) &&
                (R.smooth = !1)
              );
            }),
            (ci = Gt(v.snapTo)
              ? v.snapTo
              : v.snapTo === "labels"
                ? ac(r)
                : v.snapTo === "labelsDirectional"
                  ? lc(r)
                  : v.directional !== !1
                    ? function (R, X) {
                        return uo(v.snapTo)(
                          R,
                          Ut() - Et < 500 ? 0 : X.direction,
                        );
                      }
                    : z.utils.snap(v.snapTo)),
            (Fe = v.duration || { min: 0.1, max: 2 }),
            (Fe = Yi(Fe) ? Vr(Fe.min, Fe.max) : Vr(Fe, Fe)),
            (Ie = z
              .delayedCall(v.delay || Di / 2 || 0.1, function () {
                var R = bt(),
                  X = Ut() - Et < 500,
                  F = Qt.tween;
                if (
                  (X || Math.abs(g.getVelocity()) < 10) &&
                  !F &&
                  !Zn &&
                  nt !== R
                ) {
                  var W = (R - J) / pt,
                    Rt = r && !H ? r.totalProgress() : W,
                    Z = X ? 0 : ((Rt - Ai) / (Ut() - zr)) * 1e3 || 0,
                    yt = z.utils.clamp(-W, 1 - W, (sr(Z / 2) * Z) / 0.185),
                    Wt = W + (v.inertia === !1 ? 0 : yt),
                    _t,
                    lt,
                    st = v,
                    Ye = st.onStart,
                    ct = st.onInterrupt,
                    ge = st.onComplete;
                  if (
                    ((_t = ci(Wt, g)),
                    Ir(_t) || (_t = Wt),
                    (lt = Math.max(0, Math.round(J + _t * pt))),
                    R <= mt && R >= J && lt !== R)
                  ) {
                    if (F && !F._initted && F.data <= sr(lt - R)) return;
                    (v.inertia === !1 && (yt = _t - W),
                      Qt(
                        lt,
                        {
                          duration: Fe(
                            sr(
                              (Math.max(sr(Wt - Rt), sr(_t - Rt)) * 0.185) /
                                Z /
                                0.05 || 0,
                            ),
                          ),
                          ease: v.ease || "power3",
                          data: sr(lt - R),
                          onInterrupt: function () {
                            return Ie.restart(!0) && ct && nr(g, ct);
                          },
                          onComplete: function () {
                            (g.update(),
                              (nt = bt()),
                              r &&
                                !H &&
                                (K
                                  ? K.resetTo(
                                      "totalProgress",
                                      _t,
                                      r._tTime / r._tDur,
                                    )
                                  : r.progress(_t)),
                              (pi = Ai =
                                r && !H ? r.totalProgress() : g.progress),
                              y && y(g),
                              ge && nr(g, ge));
                          },
                        },
                        R,
                        yt * pt,
                        lt - R - yt * pt,
                      ),
                      Ye && nr(g, Ye, Qt.tween));
                  }
                } else g.isActive && nt !== R && Ie.restart(!0);
              })
              .pause())),
          l && (Ns[l] = g),
          (h = g.trigger = oe(h || (f !== !0 && f))),
          (ii = h && h._gsap && h._gsap.stRevert),
          ii && (ii = ii(g)),
          (f = f === !0 ? h : oe(f)),
          ye(a) && (a = { targets: h, className: a }),
          f &&
            (_ === !1 ||
              _ === Re ||
              (_ =
                !_ &&
                f.parentNode &&
                f.parentNode.style &&
                Ae(f.parentNode).display === "flex"
                  ? !1
                  : Tt),
            (g.pin = f),
            (Xt = z.core.getCache(f)),
            Xt.spacer
              ? (Je = Xt.pinState)
              : (k &&
                  ((k = oe(k)),
                  k && !k.nodeType && (k = k.current || k.nativeElement),
                  (Xt.spacerIsNative = !!k),
                  k && (Xt.spacerState = Sn(k))),
                (Xt.spacer = Mt = k || rt.createElement("div")),
                Mt.classList.add("pin-spacer"),
                l && Mt.classList.add("pin-spacer-" + l),
                (Xt.pinState = Je = Sn(f))),
            e.force3D !== !1 && z.set(f, { force3D: !0 }),
            (g.spacer = Mt = Xt.spacer),
            (er = Ae(f)),
            (Er = er[_ + C.os2]),
            (vt = z.getProperty(f)),
            (Ne = z.quickSetter(f, C.a, kt)),
            fs(f, Mt, er),
            (Ri = Sn(f))),
          Y)
        ) {
          ((je = Yi(Y) ? Io(Y, Bo) : Bo),
            (w = bn("scroller-start", l, A, C, je, 0)),
            (_e = bn("scroller-end", l, A, C, je, 0, w)),
            (di = w["offset" + C.op.d2]));
          var Pr = oe(Ci(A, "content") || A);
          ((se = this.markerStart = bn("start", l, Pr, C, je, di, 0, b)),
            (pe = this.markerEnd = bn("end", l, Pr, C, je, di, 0, b)),
            b && (ir = z.quickSetter([se, pe], C.a, kt)),
            !M &&
              !(Qe.length && Ci(A, "fixedMarkers") === !0) &&
              (oc(E ? it : A),
              z.set([w, _e], { force3D: !0 }),
              (cn = z.quickSetter(w, C.a, kt)),
              (tr = z.quickSetter(_e, C.a, kt))));
        }
        if (b) {
          var q = b.vars.onUpdate,
            B = b.vars.onUpdateParams;
          b.eventCallback("onUpdate", function () {
            (g.update(0, 0, 1), q && q.apply(b, B || []));
          });
        }
        if (
          ((g.previous = function () {
            return U[U.indexOf(g) - 1];
          }),
          (g.next = function () {
            return U[U.indexOf(g) + 1];
          }),
          (g.revert = function (R, X) {
            if (!X) return g.kill(!0);
            var F = R !== !1 || !g.enabled,
              W = Vt;
            F !== g.isReverted &&
              (F &&
                ((Be = Math.max(bt(), g.scroll.rec || 0)),
                (Yt = g.progress),
                (Li = r && r.progress())),
              se &&
                [se, pe, w, _e].forEach(function (Rt) {
                  return (Rt.style.display = F ? "none" : "block");
                }),
              F && ((Vt = g), g.update(F)),
              f &&
                (!S || !g.isActive) &&
                (F ? fc(f, Mt, Je) : fs(f, Mt, Ae(f), St)),
              F || g.update(F),
              (Vt = W),
              (g.isReverted = F));
          }),
          (g.refresh = function (R, X, F, W) {
            if (!((Vt || !g.enabled) && !X)) {
              if (f && R && ze) {
                Dt(s, "scrollEnd", gl);
                return;
              }
              (!re && tt && tt(g),
                (Vt = g),
                Qt.tween && !F && (Qt.tween.kill(), (Qt.tween = 0)),
                K && K.pause(),
                p &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren
                    ? r.getChildren(!0, !0, !1).forEach(function (_i) {
                        return _i.vars.immediateRender && _i.render(0, !0, !0);
                      })
                    : r.vars.immediateRender && r.render(0, !0, !0)),
                g.isReverted || g.revert(!0, !0),
                (g._subPinOffset = !1));
              var Rt = zt(),
                Z = de(),
                yt = b ? b.duration() : Ke(A, C),
                Wt = pt <= 0.01 || !pt,
                _t = 0,
                lt = W || 0,
                st = Yi(F) ? F.end : e.end,
                Ye = e.endTrigger || h,
                ct = Yi(F)
                  ? F.start
                  : e.start || (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
                ge = (g.pinnedContainer =
                  e.pinnedContainer && oe(e.pinnedContainer, g)),
                We = (h && Math.max(0, U.indexOf(g))) || 0,
                Nt = We,
                Ft,
                Ht,
                zi,
                fn,
                qt,
                Pt,
                He,
                jn,
                fo,
                kr,
                qe,
                Or,
                hn;
              for (
                Y &&
                Yi(F) &&
                ((Or = z.getProperty(w, C.p)), (hn = z.getProperty(_e, C.p)));
                Nt-- > 0;
              )
                ((Pt = U[Nt]),
                  Pt.end || Pt.refresh(0, 1) || (Vt = g),
                  (He = Pt.pin),
                  He &&
                    (He === h || He === f || He === ge) &&
                    !Pt.isReverted &&
                    (kr || (kr = []), kr.unshift(Pt), Pt.revert(!0, !0)),
                  Pt !== U[Nt] && (We--, Nt--));
              for (
                Gt(ct) && (ct = ct(g)),
                  ct = Lo(ct, "start", g),
                  J =
                    Ho(
                      ct,
                      h,
                      Rt,
                      C,
                      bt(),
                      se,
                      w,
                      g,
                      Z,
                      V,
                      M,
                      yt,
                      b,
                      g._startClamp && "_startClamp",
                    ) || (f ? -0.001 : 0),
                  Gt(st) && (st = st(g)),
                  ye(st) &&
                    !st.indexOf("+=") &&
                    (~st.indexOf(" ")
                      ? (st = (ye(ct) ? ct.split(" ")[0] : "") + st)
                      : ((_t = An(st.substr(2), Rt)),
                        (st = ye(ct)
                          ? ct
                          : (b
                              ? z.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  J,
                                )
                              : J) + _t),
                        (Ye = h))),
                  st = Lo(st, "end", g),
                  mt =
                    Math.max(
                      J,
                      Ho(
                        st || (Ye ? "100% 0" : yt),
                        Ye,
                        Rt,
                        C,
                        bt() + _t,
                        pe,
                        _e,
                        g,
                        Z,
                        V,
                        M,
                        yt,
                        b,
                        g._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  _t = 0,
                  Nt = We;
                Nt--;
              )
                ((Pt = U[Nt] || {}),
                  (He = Pt.pin),
                  He &&
                    Pt.start - Pt._pinPush <= J &&
                    !b &&
                    Pt.end > 0 &&
                    ((Ft =
                      Pt.end -
                      (g._startClamp ? Math.max(0, Pt.start) : Pt.start)),
                    ((He === h && Pt.start - Pt._pinPush < J) || He === ge) &&
                      isNaN(ct) &&
                      (_t += Ft * (1 - Pt.progress)),
                    He === f && (lt += Ft)));
              if (
                ((J += _t),
                (mt += _t),
                g._startClamp && (g._startClamp += _t),
                g._endClamp &&
                  !re &&
                  ((g._endClamp = mt || -0.001), (mt = Math.min(mt, Ke(A, C)))),
                (pt = mt - J || ((J -= 0.01) && 0.001)),
                Wt && (Yt = z.utils.clamp(0, 1, z.utils.normalize(J, mt, Be))),
                (g._pinPush = lt),
                se &&
                  _t &&
                  ((Ft = {}),
                  (Ft[C.a] = "+=" + _t),
                  ge && (Ft[C.p] = "-=" + bt()),
                  z.set([se, pe], Ft)),
                f && !(zs && g.end >= Ke(A, C)))
              )
                ((Ft = Ae(f)),
                  (fn = C === Ot),
                  (zi = bt()),
                  (Oe = parseFloat(vt(C.a)) + lt),
                  !yt &&
                    mt > 1 &&
                    ((qe = (E ? rt.scrollingElement || xe : A).style),
                    (qe = {
                      style: qe,
                      value: qe["overflow" + C.a.toUpperCase()],
                    }),
                    E &&
                      Ae(it)["overflow" + C.a.toUpperCase()] !== "scroll" &&
                      (qe.style["overflow" + C.a.toUpperCase()] = "scroll")),
                  fs(f, Mt, Ft),
                  (Ri = Sn(f)),
                  (Ht = si(f, !0)),
                  (jn = M && Oi(A, fn ? ne : Ot)()),
                  _
                    ? ((St = [_ + C.os2, pt + lt + kt]),
                      (St.t = Mt),
                      (Nt = _ === Tt ? Un(f, C) + pt + lt : 0),
                      Nt &&
                        (St.push(C.d, Nt + kt),
                        Mt.style.flexBasis !== "auto" &&
                          (Mt.style.flexBasis = Nt + kt)),
                      yr(St),
                      ge &&
                        U.forEach(function (_i) {
                          _i.pin === ge &&
                            _i.vars.pinSpacing !== !1 &&
                            (_i._subPinOffset = !0);
                        }),
                      M && bt(Be))
                    : ((Nt = Un(f, C)),
                      Nt &&
                        Mt.style.flexBasis !== "auto" &&
                        (Mt.style.flexBasis = Nt + kt)),
                  M &&
                    ((qt = {
                      top: Ht.top + (fn ? zi - J : jn) + kt,
                      left: Ht.left + (fn ? jn : zi - J) + kt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (qt[$i] = qt["max" + Cr] = Math.ceil(Ht.width) + kt),
                    (qt[Gi] = qt["max" + lo] = Math.ceil(Ht.height) + kt),
                    (qt[Re] =
                      qt[Re + Kr] =
                      qt[Re + $r] =
                      qt[Re + Qr] =
                      qt[Re + Gr] =
                        "0"),
                    (qt[Tt] = Ft[Tt]),
                    (qt[Tt + Kr] = Ft[Tt + Kr]),
                    (qt[Tt + $r] = Ft[Tt + $r]),
                    (qt[Tt + Qr] = Ft[Tt + Qr]),
                    (qt[Tt + Gr] = Ft[Tt + Gr]),
                    (hi = dc(Je, qt, S)),
                    re && bt(0)),
                  r
                    ? ((fo = r._initted),
                      as(1),
                      r.render(r.duration(), !0, !0),
                      (ti = vt(C.a) - Oe + pt + lt),
                      (ei = Math.abs(pt - ti) > 1),
                      M && ei && hi.splice(hi.length - 2, 2),
                      r.render(0, !0, !0),
                      fo || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      as(0))
                    : (ti = pt),
                  qe &&
                    (qe.value
                      ? (qe.style["overflow" + C.a.toUpperCase()] = qe.value)
                      : qe.style.removeProperty("overflow-" + C.a)));
              else if (h && bt() && !b)
                for (Ht = h.parentNode; Ht && Ht !== it;)
                  (Ht._pinOffset &&
                    ((J -= Ht._pinOffset), (mt -= Ht._pinOffset)),
                    (Ht = Ht.parentNode));
              (kr &&
                kr.forEach(function (_i) {
                  return _i.revert(!1, !0);
                }),
                (g.start = J),
                (g.end = mt),
                (Zt = jt = re ? Be : bt()),
                !b && !re && (Zt < Be && bt(Be), (g.scroll.rec = 0)),
                g.revert(!1, !0),
                (Et = Ut()),
                Ie && ((nt = -1), Ie.restart(!0)),
                (Vt = 0),
                r &&
                  H &&
                  (r._initted || Li) &&
                  r.progress() !== Li &&
                  r.progress(Li || 0, !0).render(r.time(), !0, !0),
                (Wt || Yt !== g.progress || b || p || (r && !r._initted)) &&
                  (r &&
                    !H &&
                    (r._initted || Yt || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      b && J < -0.001 && !Yt ? z.utils.normalize(J, mt, 0) : Yt,
                      !0,
                    ),
                  (g.progress = Wt || (Zt - J) / pt === Yt ? 0 : Yt)),
                f && _ && (Mt._pinOffset = Math.round(g.progress * ti)),
                K && K.invalidate(),
                isNaN(Or) ||
                  ((Or -= z.getProperty(w, C.p)),
                  (hn -= z.getProperty(_e, C.p)),
                  Tn(w, C, Or),
                  Tn(se, C, Or - (W || 0)),
                  Tn(_e, C, hn),
                  Tn(pe, C, hn - (W || 0))),
                Wt && !re && g.update(),
                c && !re && !fi && ((fi = !0), c(g), (fi = !1)));
            }
          }),
          (g.getVelocity = function () {
            return ((bt() - jt) / (Ut() - zr)) * 1e3 || 0;
          }),
          (g.endAnimation = function () {
            (Ar(g.callbackAnimation),
              r &&
                (K
                  ? K.progress(1)
                  : r.paused()
                    ? H || Ar(r, g.direction < 0, 1)
                    : Ar(r, r.reversed())));
          }),
          (g.labelToScroll = function (R) {
            return (
              (r &&
                r.labels &&
                (J || g.refresh() || J) + (r.labels[R] / r.duration()) * pt) ||
              0
            );
          }),
          (g.getTrailing = function (R) {
            var X = U.indexOf(g),
              F = g.direction > 0 ? U.slice(0, X).reverse() : U.slice(X + 1);
            return (
              ye(R)
                ? F.filter(function (W) {
                    return W.vars.preventOverlaps === R;
                  })
                : F
            ).filter(function (W) {
              return g.direction > 0 ? W.end <= J : W.start >= mt;
            });
          }),
          (g.update = function (R, X, F) {
            if (!(b && !F && !R)) {
              var W = re === !0 ? Be : g.scroll(),
                Rt = R ? 0 : (W - J) / pt,
                Z = Rt < 0 ? 0 : Rt > 1 ? 1 : Rt || 0,
                yt = g.progress,
                Wt,
                _t,
                lt,
                st,
                Ye,
                ct,
                ge,
                We;
              if (
                (X &&
                  ((jt = Zt),
                  (Zt = b ? bt() : W),
                  v && ((Ai = pi), (pi = r && !H ? r.totalProgress() : Z))),
                m &&
                  f &&
                  !Vt &&
                  !mn &&
                  ze &&
                  (!Z && J < W + ((W - jt) / (Ut() - zr)) * m
                    ? (Z = 1e-4)
                    : Z === 1 &&
                      mt > W + ((W - jt) / (Ut() - zr)) * m &&
                      (Z = 0.9999)),
                Z !== yt && g.enabled)
              ) {
                if (
                  ((Wt = g.isActive = !!Z && Z < 1),
                  (_t = !!yt && yt < 1),
                  (ct = Wt !== _t),
                  (Ye = ct || !!Z != !!yt),
                  (g.direction = Z > yt ? 1 : -1),
                  (g.progress = Z),
                  Ye &&
                    !Vt &&
                    ((lt = Z && !yt ? 0 : Z === 1 ? 1 : yt === 1 ? 2 : 3),
                    H &&
                      ((st =
                        (!ct && D[lt + 1] !== "none" && D[lt + 1]) || D[lt]),
                      (We =
                        r &&
                        (st === "complete" || st === "reset" || st in r)))),
                  P &&
                    (ct || We) &&
                    (We || d || !r) &&
                    (Gt(P)
                      ? P(g)
                      : g.getTrailing(P).forEach(function (zi) {
                          return zi.endAnimation();
                        })),
                  H ||
                    (K && !Vt && !mn
                      ? (K._dp._time - K._start !== K._time &&
                          K.render(K._dp._time - K._start),
                        K.resetTo
                          ? K.resetTo("totalProgress", Z, r._tTime / r._tDur)
                          : ((K.vars.totalProgress = Z),
                            K.invalidate().restart()))
                      : r && r.totalProgress(Z, !!(Vt && (Et || R)))),
                  f)
                ) {
                  if ((R && _ && (Mt.style[_ + C.os2] = Er), !M))
                    Ne(Fr(Oe + ti * Z));
                  else if (Ye) {
                    if (
                      ((ge = !R && Z > yt && mt + 1 > W && W + 1 >= Ke(A, C)),
                      S)
                    )
                      if (!R && (Wt || ge)) {
                        var Nt = si(f, !0),
                          Ft = W - J;
                        qo(
                          f,
                          it,
                          Nt.top + (C === Ot ? Ft : 0) + kt,
                          Nt.left + (C === Ot ? 0 : Ft) + kt,
                        );
                      } else qo(f, Mt);
                    (yr(Wt || ge ? hi : Ri),
                      (ei && Z < 1 && Wt) ||
                        Ne(Oe + (Z === 1 && !ge ? ti : 0)));
                  }
                }
                (v && !Qt.tween && !Vt && !mn && Ie.restart(!0),
                  a &&
                    (ct || (T && Z && (Z < 1 || !ls))) &&
                    an(a.targets).forEach(function (zi) {
                      return zi.classList[Wt || T ? "add" : "remove"](
                        a.className,
                      );
                    }),
                  o && !H && !R && o(g),
                  Ye && !Vt
                    ? (H &&
                        (We &&
                          (st === "complete"
                            ? r.pause().totalProgress(1)
                            : st === "reset"
                              ? r.restart(!0).pause()
                              : st === "restart"
                                ? r.restart(!0)
                                : r[st]()),
                        o && o(g)),
                      (ct || !ls) &&
                        (u && ct && nr(g, u),
                        N[lt] && nr(g, N[lt]),
                        T && (Z === 1 ? g.kill(!1, 1) : (N[lt] = 0)),
                        ct || ((lt = Z === 1 ? 1 : 3), N[lt] && nr(g, N[lt]))),
                      O &&
                        !Wt &&
                        Math.abs(g.getVelocity()) > (Ir(O) ? O : 2500) &&
                        (Ar(g.callbackAnimation),
                        K
                          ? K.progress(1)
                          : Ar(r, st === "reverse" ? 1 : !Z, 1)))
                    : H && o && !Vt && o(g));
              }
              if (tr) {
                var Ht = b ? (W / b.duration()) * (b._caScrollDist || 0) : W;
                (cn(Ht + (w._isFlipped ? 1 : 0)), tr(Ht));
              }
              ir && ir((-W / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (g.enable = function (R, X) {
            g.enabled ||
              ((g.enabled = !0),
              Dt(A, "resize", Br),
              E || Dt(A, "scroll", or),
              tt && Dt(s, "refreshInit", tt),
              R !== !1 && ((g.progress = Yt = 0), (Zt = jt = nt = bt())),
              X !== !1 && g.refresh());
          }),
          (g.getTween = function (R) {
            return R && Qt ? Qt.tween : K;
          }),
          (g.setPositions = function (R, X, F, W) {
            if (b) {
              var Rt = b.scrollTrigger,
                Z = b.duration(),
                yt = Rt.end - Rt.start;
              ((R = Rt.start + (yt * R) / Z), (X = Rt.start + (yt * X) / Z));
            }
            (g.refresh(
              !1,
              !1,
              {
                start: zo(R, F && !!g._startClamp),
                end: zo(X, F && !!g._endClamp),
              },
              W,
            ),
              g.update());
          }),
          (g.adjustPinSpacing = function (R) {
            if (St && R) {
              var X = St.indexOf(C.d) + 1;
              ((St[X] = parseFloat(St[X]) + R + kt),
                (St[1] = parseFloat(St[1]) + R + kt),
                yr(St));
            }
          }),
          (g.disable = function (R, X) {
            if (
              (R !== !1 && g.revert(!0, !0),
              g.enabled &&
                ((g.enabled = g.isActive = !1),
                X || (K && K.pause()),
                (Be = 0),
                Xt && (Xt.uncache = 1),
                tt && At(s, "refreshInit", tt),
                Ie &&
                  (Ie.pause(), Qt.tween && Qt.tween.kill() && (Qt.tween = 0)),
                !E))
            ) {
              for (var F = U.length; F--;)
                if (U[F].scroller === A && U[F] !== g) return;
              (At(A, "resize", Br), E || At(A, "scroll", or));
            }
          }),
          (g.kill = function (R, X) {
            (g.disable(R, X), K && !X && K.kill(), l && delete Ns[l]);
            var F = U.indexOf(g);
            (F >= 0 && U.splice(F, 1),
              F === ie && Ln > 0 && ie--,
              (F = 0),
              U.forEach(function (W) {
                return W.scroller === g.scroller && (F = 1);
              }),
              F || re || (g.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                R && r.revert({ kill: !1 }),
                X || r.kill()),
              se &&
                [se, pe, w, _e].forEach(function (W) {
                  return W.parentNode && W.parentNode.removeChild(W);
                }),
              Zr === g && (Zr = 0),
              f &&
                (Xt && (Xt.uncache = 1),
                (F = 0),
                U.forEach(function (W) {
                  return W.pin === f && F++;
                }),
                F || (Xt.spacer = 0)),
              e.onKill && e.onKill(g));
          }),
          U.push(g),
          g.enable(!1, !1),
          ii && ii(g),
          r && r.add && !pt)
        ) {
          var et = g.update;
          ((g.update = function () {
            ((g.update = et), G.cache++, J || mt || g.refresh());
          }),
            z.delayedCall(0.01, g.update),
            (pt = 0.01),
            (J = mt = 0));
        } else g.refresh();
        f && cc();
      }),
      (s.register = function (e) {
        return (
          lr ||
            ((z = e || cl()), ul() && window.document && s.enable(), (lr = Nr)),
          lr
        );
      }),
      (s.defaults = function (e) {
        if (e) for (var r in e) xn[r] = e[r];
        return xn;
      }),
      (s.disable = function (e, r) {
        ((Nr = 0),
          U.forEach(function (o) {
            return o[r ? "kill" : "disable"](e);
          }),
          At($, "wheel", or),
          At(rt, "scroll", or),
          clearInterval(gn),
          At(rt, "touchcancel", Ue),
          At(it, "touchstart", Ue),
          yn(At, rt, "pointerdown,touchstart,mousedown", No),
          yn(At, rt, "pointerup,touchend,mouseup", Fo),
          Vn.kill(),
          vn(At));
        for (var n = 0; n < G.length; n += 3)
          (wn(At, G[n], G[n + 1]), wn(At, G[n], G[n + 2]));
      }),
      (s.enable = function () {
        if (
          (($ = window),
          (rt = document),
          (xe = rt.documentElement),
          (it = rt.body),
          z)
        ) {
          if (
            ((an = z.utils.toArray),
            (Vr = z.utils.clamp),
            (Ls = z.core.context || Ue),
            (as = z.core.suppressOverwrites || Ue),
            (no = $.history.scrollRestoration || "auto"),
            (Fs = $.pageYOffset || 0),
            z.core.globals("ScrollTrigger", s),
            it)
          ) {
            ((Nr = 1),
              (vr = document.createElement("div")),
              (vr.style.height = "100vh"),
              (vr.style.position = "absolute"),
              wl(),
              rc(),
              xt.register(z),
              (s.isTouch = xt.isTouch),
              (mi =
                xt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ds = xt.isTouch === 1),
              Dt($, "wheel", or),
              (ro = [$, rt, xe, it]),
              z.matchMedia
                ? ((s.matchMedia = function (c) {
                    var d = z.matchMedia(),
                      h;
                    for (h in c) d.add(h, c[h]);
                    return d;
                  }),
                  z.addEventListener("matchMediaInit", function () {
                    (vl(), co());
                  }),
                  z.addEventListener("matchMediaRevert", function () {
                    return ml();
                  }),
                  z.addEventListener("matchMedia", function () {
                    (Wi(0, 1), ji("matchMedia"));
                  }),
                  z.matchMedia().add("(orientation: portrait)", function () {
                    return (cs(), cs);
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              cs(),
              Dt(rt, "scroll", or));
            var e = it.hasAttribute("style"),
              r = it.style,
              n = r.borderTopStyle,
              o = z.core.Animation.prototype,
              a,
              l;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                a = si(it),
                Ot.m = Math.round(a.top + Ot.sc()) || 0,
                ne.m = Math.round(a.left + ne.sc()) || 0,
                n
                  ? (r.borderTopStyle = n)
                  : r.removeProperty("border-top-style"),
                e ||
                  (it.setAttribute("style", ""), it.removeAttribute("style")),
                gn = setInterval(Yo, 250),
                z.delayedCall(0.5, function () {
                  return (mn = 0);
                }),
                Dt(rt, "touchcancel", Ue),
                Dt(it, "touchstart", Ue),
                yn(Dt, rt, "pointerdown,touchstart,mousedown", No),
                yn(Dt, rt, "pointerup,touchend,mouseup", Fo),
                As = z.utils.checkPrefix("transform"),
                zn.push(As),
                lr = Ut(),
                Vn = z.delayedCall(0.2, Wi).pause(),
                ur = [
                  rt,
                  "visibilitychange",
                  function () {
                    var c = $.innerWidth,
                      d = $.innerHeight;
                    rt.hidden
                      ? ((Ao = c), (Do = d))
                      : (Ao !== c || Do !== d) && Br();
                  },
                  rt,
                  "DOMContentLoaded",
                  Wi,
                  $,
                  "load",
                  Wi,
                  $,
                  "resize",
                  Br,
                ],
                vn(Dt),
                U.forEach(function (c) {
                  return c.enable(0, 1);
                }),
                l = 0;
              l < G.length;
              l += 3
            )
              (wn(At, G[l], G[l + 1]), wn(At, G[l], G[l + 2]));
          } else if (rt) {
            var u = function c() {
              (s.enable(), rt.removeEventListener("DOMContentLoaded", c));
            };
            rt.addEventListener("DOMContentLoaded", u);
          }
        }
      }),
      (s.config = function (e) {
        "limitCallbacks" in e && (ls = !!e.limitCallbacks);
        var r = e.syncInterval;
        ((r && clearInterval(gn)) || ((gn = r) && setInterval(Yo, r)),
          "ignoreMobileResize" in e &&
            (Ds = s.isTouch === 1 && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (vn(At) || vn(Dt, e.autoRefreshEvents || "none"),
            (ol = (e.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (s.scrollerProxy = function (e, r) {
        var n = oe(e),
          o = G.indexOf(n),
          a = Qi(n);
        (~o && G.splice(o, a ? 6 : 2),
          r && (a ? Qe.unshift($, r, it, r, xe, r) : Qe.unshift(n, r)));
      }),
      (s.clearMatchMedia = function (e) {
        U.forEach(function (r) {
          return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
        });
      }),
      (s.isInViewport = function (e, r, n) {
        var o = (ye(e) ? oe(e) : e).getBoundingClientRect(),
          a = o[n ? $i : Gi] * r || 0;
        return n
          ? o.right - a > 0 && o.left + a < $.innerWidth
          : o.bottom - a > 0 && o.top + a < $.innerHeight;
      }),
      (s.positionInViewport = function (e, r, n) {
        ye(e) && (e = oe(e));
        var o = e.getBoundingClientRect(),
          a = o[n ? $i : Gi],
          l =
            r == null
              ? a / 2
              : r in $n
                ? $n[r] * a
                : ~r.indexOf("%")
                  ? (parseFloat(r) * a) / 100
                  : parseFloat(r) || 0;
        return n ? (o.left + l) / $.innerWidth : (o.top + l) / $.innerHeight;
      }),
      (s.killAll = function (e) {
        if (
          (U.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          e !== !0)
        ) {
          var r = Zi.killAll || [];
          ((Zi = {}),
            r.forEach(function (n) {
              return n();
            }));
        }
      }),
      s
    );
  })();
I.version = "3.15.0";
I.saveStyles = function (s) {
  return s
    ? an(s).forEach(function (t) {
        if (t && t.style) {
          var i = ve.indexOf(t);
          (i >= 0 && ve.splice(i, 5),
            ve.push(
              t,
              t.style.cssText,
              t.getBBox && t.getAttribute("transform"),
              z.core.getCache(t),
              Ls(),
            ));
        }
      })
    : ve;
};
I.revert = function (s, t) {
  return co(!s, t);
};
I.create = function (s, t) {
  return new I(s, t);
};
I.refresh = function (s) {
  return s ? Br(!0) : (lr || I.register()) && Wi(!0);
};
I.update = function (s) {
  return ++G.cache && ai(s === !0 ? 2 : 0);
};
I.clearScrollMemory = yl;
I.maxScroll = function (s, t) {
  return Ke(s, t ? ne : Ot);
};
I.getScrollFunc = function (s, t) {
  return Oi(oe(s), t ? ne : Ot);
};
I.getById = function (s) {
  return Ns[s];
};
I.getAll = function () {
  return U.filter(function (s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
I.isScrolling = function () {
  return !!ze;
};
I.snapDirectional = uo;
I.addEventListener = function (s, t) {
  var i = Zi[s] || (Zi[s] = []);
  ~i.indexOf(t) || i.push(t);
};
I.removeEventListener = function (s, t) {
  var i = Zi[s],
    e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
I.batch = function (s, t) {
  var i = [],
    e = {},
    r = t.interval || 0.016,
    n = t.batchMax || 1e9,
    o = function (u, c) {
      var d = [],
        h = [],
        f = z
          .delayedCall(r, function () {
            (c(d, h), (d = []), (h = []));
          })
          .pause();
      return function (_) {
        (d.length || f.restart(!0),
          d.push(_.trigger),
          h.push(_),
          n <= d.length && f.progress(1));
      };
    },
    a;
  for (a in t)
    e[a] =
      a.substr(0, 2) === "on" && Gt(t[a]) && a !== "onRefreshInit"
        ? o(a, t[a])
        : t[a];
  return (
    Gt(n) &&
      ((n = n()),
      Dt(I, "refresh", function () {
        return (n = t.batchMax());
      })),
    an(s).forEach(function (l) {
      var u = {};
      for (a in e) u[a] = e[a];
      ((u.trigger = l), i.push(I.create(u)));
    }),
    i
  );
};
var Uo = function (t, i, e, r) {
    return (
      i > r ? t(r) : i < 0 && t(0),
      e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1
    );
  },
  hs = function s(t, i) {
    (i === !0
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
          i === !0
            ? "auto"
            : i
              ? "pan-" + i + (xt.isTouch ? " pinch-zoom" : "")
              : "none"),
      t === xe && s(it, i));
  },
  Cn = { auto: 1, scroll: 1 },
  _c = function (t) {
    var i = t.event,
      e = t.target,
      r = t.axis,
      n = (i.changedTouches ? i.changedTouches[0] : i).target,
      o = n._gsap || z.core.getCache(n),
      a = Ut(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== it &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(Cn[(l = Ae(n)).overflowY] || Cn[l.overflowX]));
      )
        n = n.parentNode;
      ((o._isScroll =
        n &&
        n !== e &&
        !Qi(n) &&
        (Cn[(l = Ae(n)).overflowY] || Cn[l.overflowX])),
        (o._isScrollT = a));
    }
    (o._isScroll || r === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  bl = function (t, i, e, r) {
    return xt.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (r = r && _c),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return e && Dt(rt, xt.eventTypes[0], Go, !1, !0);
      },
      onDisable: function () {
        return At(rt, xt.eventTypes[0], Go, !0);
      },
    });
  },
  gc = /(input|label|select|textarea)/i,
  $o,
  Go = function (t) {
    var i = gc.test(t.target.tagName);
    (i || $o) && ((t._gsapAllow = !0), ($o = i));
  },
  mc = function (t) {
    (Yi(t) || (t = {}),
      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer"));
    var i = t,
      e = i.normalizeScrollX,
      r = i.momentum,
      n = i.allowNestedScroll,
      o = i.onRelease,
      a,
      l,
      u = oe(t.target) || xe,
      c = z.core.globals().ScrollSmoother,
      d = c && c.get(),
      h =
        mi &&
        ((t.content && oe(t.content)) ||
          (d && t.content !== !1 && !d.smooth() && d.content())),
      f = Oi(u, Ot),
      _ = Oi(u, ne),
      p = 1,
      m =
        (xt.isTouch && $.visualViewport
          ? $.visualViewport.scale * $.visualViewport.width
          : $.outerWidth) / $.innerWidth,
      x = 0,
      y = Gt(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      T,
      v,
      S = bl(u, t.type, !0, n),
      k = function () {
        return (v = !1);
      },
      b = Ue,
      O = Ue,
      P = function () {
        ((l = Ke(u, Ot)),
          (O = Vr(mi ? 1 : 0, l)),
          e && (b = Vr(0, Ke(u, ne))),
          (T = Ki));
      },
      C = function () {
        ((h._gsap.y = Fr(parseFloat(h._gsap.y) + f.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0));
      },
      H = function () {
        if (v) {
          requestAnimationFrame(k);
          var Y = Fr(a.deltaY / 2),
            V = O(f.v - Y);
          if (h && V !== f.v + f.offset) {
            f.offset = V - f.v;
            var g = Fr((parseFloat(h && h._gsap.y) || 0) - f.offset);
            ((h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              g +
              ", 0, 1)"),
              (h._gsap.y = g + "px"),
              (f.cacheID = G.cache),
              ai());
          }
          return !0;
        }
        (f.offset && C(), (v = !0));
      },
      A,
      Q,
      E,
      M,
      N = function () {
        (P(),
          A.isActive() &&
            A.vars.scrollY > l &&
            (f() > l ? A.progress(1) && f(l) : A.resetTo("scrollY", l)));
      };
    return (
      h && z.set(h, { y: "+=0" }),
      (t.ignoreCheck = function (D) {
        return (
          (mi && D.type === "touchmove" && H()) ||
          (p > 1.05 && D.type !== "touchstart") ||
          a.isGesturing ||
          (D.touches && D.touches.length > 1)
        );
      }),
      (t.onPress = function () {
        v = !1;
        var D = p;
        ((p = Fr((($.visualViewport && $.visualViewport.scale) || 1) / m)),
          A.pause(),
          D !== p && hs(u, p > 1.01 ? !0 : e ? !1 : "x"),
          (Q = _()),
          (E = f()),
          P(),
          (T = Ki));
      }),
      (t.onRelease = t.onGestureStart =
        function (D, Y) {
          if ((f.offset && C(), !Y)) M.restart(!0);
          else {
            G.cache++;
            var V = y(),
              g,
              tt;
            (e &&
              ((g = _()),
              (tt = g + (V * 0.05 * -D.velocityX) / 0.227),
              (V *= Uo(_, g, tt, Ke(u, ne))),
              (A.vars.scrollX = b(tt))),
              (g = f()),
              (tt = g + (V * 0.05 * -D.velocityY) / 0.227),
              (V *= Uo(f, g, tt, Ke(u, Ot))),
              (A.vars.scrollY = O(tt)),
              A.invalidate().duration(V).play(0.01),
              ((mi && A.vars.scrollY >= l) || g >= l - 1) &&
                z.to({}, { onUpdate: N, duration: V }));
          }
          o && o(D);
        }),
      (t.onWheel = function () {
        (A._ts && A.pause(), Ut() - x > 1e3 && ((T = 0), (x = Ut())));
      }),
      (t.onChange = function (D, Y, V, g, tt) {
        if (
          (Ki !== T && P(),
          Y && e && _(b(g[2] === Y ? Q + (D.startX - D.x) : _() + Y - g[1])),
          V)
        ) {
          f.offset && C();
          var zt = tt[2] === V,
            de = zt ? E + D.startY - D.y : f() + V - tt[1],
            nt = O(de);
          (zt && de !== nt && (E += nt - de), f(nt));
        }
        (V || Y) && ai();
      }),
      (t.onEnable = function () {
        (hs(u, e ? !1 : "x"),
          I.addEventListener("refresh", N),
          Dt($, "resize", N),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = _.smooth = !1)),
          S.enable());
      }),
      (t.onDisable = function () {
        (hs(u, !0),
          At($, "resize", N),
          I.removeEventListener("refresh", N),
          S.kill());
      }),
      (t.lockAxis = t.lockAxis !== !1),
      (a = new xt(t)),
      (a.iOS = mi),
      mi && !f() && f(1),
      mi && z.ticker.add(Ue),
      (M = a._dc),
      (A = z.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: e ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: xl(f, f(), function () {
            return A.pause();
          }),
        },
        onUpdate: ai,
        onComplete: M.vars.onComplete,
      })),
      a
    );
  };
I.sort = function (s) {
  if (Gt(s)) return U.sort(s);
  var t = $.pageYOffset || 0;
  return (
    I.getAll().forEach(function (i) {
      return (i._sortY = i.trigger
        ? t + i.trigger.getBoundingClientRect().top
        : i.start + $.innerHeight);
    }),
    U.sort(
      s ||
        function (i, e) {
          return (
            (i.vars.refreshPriority || 0) * -1e6 +
            (i.vars.containerAnimation ? 1e6 : i._sortY) -
            ((e.vars.containerAnimation ? 1e6 : e._sortY) +
              (e.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
I.observe = function (s) {
  return new xt(s);
};
I.normalizeScroll = function (s) {
  if (typeof s > "u") return ee;
  if (s === !0 && ee) return ee.enable();
  if (s === !1) {
    (ee && ee.kill(), (ee = s));
    return;
  }
  var t = s instanceof xt ? s : mc(s);
  return (
    ee && ee.target === t.target && ee.kill(),
    Qi(t.target) && (ee = t),
    t
  );
};
I.core = {
  _getVelocityProp: Rs,
  _inputObserver: bl,
  _scrollers: G,
  _proxies: Qe,
  bridge: {
    ss: function () {
      (ze || ji("scrollStart"), (ze = Ut()));
    },
    ref: function () {
      return Vt;
    },
  },
};
cl() && z.registerPlugin(I);
const vc = 192,
  yc = 192,
  wc = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  xc = () => window.matchMedia("(min-width: 1024px)").matches,
  bc = () => window.matchMedia("(pointer: fine)").matches,
  Sc = (s) => String(s).padStart(4, "0");
var Ko = "1.3.23";
function Sl(s, t, i) {
  return Math.max(s, Math.min(t, i));
}
function Tc(s, t, i) {
  return (1 - i) * s + i * t;
}
function Cc(s, t, i, e) {
  return Tc(s, t, 1 - Math.exp(-i * e));
}
function Ec(s, t) {
  return ((s % t) + t) % t;
}
var Pc = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(s) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += s;
      const i = Sl(0, this.currentTime / this.duration, 1);
      t = i >= 1;
      const e = t ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * e;
    } else
      this.lerp
        ? ((this.value = Cc(this.value, this.to, this.lerp * 60, s)),
          Math.round(this.value) === Math.round(this.to) &&
            ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0));
    (t && this.stop(), this.onUpdate?.(this.value, t));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(s, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: o }) {
    ((this.from = this.value = s),
      (this.to = t),
      (this.lerp = i),
      (this.duration = e),
      (this.easing = r),
      (this.currentTime = 0),
      (this.isRunning = !0),
      n?.(),
      (this.onUpdate = o));
  }
};
function kc(s, t) {
  let i;
  return function (...e) {
    (clearTimeout(i),
      (i = setTimeout(() => {
        ((i = void 0), s.apply(this, e));
      }, t)));
  };
}
var Oc = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
      ((this.wrapper = s),
        (this.content = t),
        i &&
          ((this.debouncedResize = kc(this.resize, e)),
          this.wrapper instanceof Window
            ? window.addEventListener("resize", this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize,
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    destroy() {
      (this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener("resize", this.debouncedResize));
    }
    resize = () => {
      (this.onWrapperResize(), this.onContentResize());
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  Tl = class {
    events = {};
    emit(s, ...t) {
      const i = this.events[s] || [];
      for (let e = 0, r = i.length; e < r; e++) i[e]?.(...t);
    }
    on(s, t) {
      return (
        this.events[s] ? this.events[s].push(t) : (this.events[s] = [t]),
        () => {
          this.events[s] = this.events[s]?.filter((i) => t !== i);
        }
      );
    }
    off(s, t) {
      this.events[s] = this.events[s]?.filter((i) => t !== i);
    }
    destroy() {
      this.events = {};
    }
  };
const Mc = 100 / 6,
  gi = { passive: !1 };
function Qo(s, t) {
  return s === 1 ? Mc : s === 2 ? t : 1;
}
var Rc = class {
  touchStart = { x: 0, y: 0 };
  lastDelta = { x: 0, y: 0 };
  window = { width: 0, height: 0 };
  emitter = new Tl();
  constructor(s, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    ((this.element = s),
      (this.options = t),
      window.addEventListener("resize", this.onWindowResize),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, gi),
      this.element.addEventListener("touchstart", this.onTouchStart, gi),
      this.element.addEventListener("touchmove", this.onTouchMove, gi),
      this.element.addEventListener("touchend", this.onTouchEnd, gi));
  }
  on(s, t) {
    return this.emitter.on(s, t);
  }
  destroy() {
    (this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize),
      this.element.removeEventListener("wheel", this.onWheel, gi),
      this.element.removeEventListener("touchstart", this.onTouchStart, gi),
      this.element.removeEventListener("touchmove", this.onTouchMove, gi),
      this.element.removeEventListener("touchend", this.onTouchEnd, gi));
  }
  onTouchStart = (s) => {
    const { clientX: t, clientY: i } = s.targetTouches ? s.targetTouches[0] : s;
    ((this.touchStart.x = t),
      (this.touchStart.y = i),
      (this.lastDelta = { x: 0, y: 0 }),
      this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s }));
  };
  onTouchMove = (s) => {
    const { clientX: t, clientY: i } = s.targetTouches ? s.targetTouches[0] : s,
      e = -(t - this.touchStart.x) * this.options.touchMultiplier,
      r = -(i - this.touchStart.y) * this.options.touchMultiplier;
    ((this.touchStart.x = t),
      (this.touchStart.y = i),
      (this.lastDelta = { x: e, y: r }),
      this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: s }));
  };
  onTouchEnd = (s) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event: s,
    });
  };
  onWheel = (s) => {
    let { deltaX: t, deltaY: i, deltaMode: e } = s;
    const r = Qo(e, this.window.width),
      n = Qo(e, this.window.height);
    ((t *= r),
      (i *= n),
      (t *= this.options.wheelMultiplier),
      (i *= this.options.wheelMultiplier),
      this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: s }));
  };
  onWindowResize = () => {
    this.window = { width: window.innerWidth, height: window.innerHeight };
  };
};
const Zo = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Ac = class {
  _isScrolling = !1;
  _isStopped = !1;
  _isLocked = !1;
  _preventNextNativeScrollEvent = !1;
  _resetVelocityTimeout = null;
  _rafId = null;
  isTouching;
  time = 0;
  userData = {};
  lastVelocity = 0;
  velocity = 0;
  direction = 0;
  options;
  targetScroll;
  animatedScroll;
  animate = new Pc();
  emitter = new Tl();
  dimensions;
  virtualScroll;
  constructor({
    wrapper: s = window,
    content: t = document.documentElement,
    eventsTarget: i = s,
    smoothWheel: e = !0,
    syncTouch: r = !1,
    syncTouchLerp: n = 0.075,
    touchInertiaExponent: o = 1.7,
    duration: a,
    easing: l,
    lerp: u = 0.1,
    infinite: c = !1,
    orientation: d = "vertical",
    gestureOrientation: h = d === "horizontal" ? "both" : "vertical",
    touchMultiplier: f = 1,
    wheelMultiplier: _ = 1,
    autoResize: p = !0,
    prevent: m,
    virtualScroll: x,
    overscroll: y = !0,
    autoRaf: T = !1,
    anchors: v = !1,
    autoToggle: S = !1,
    allowNestedScroll: k = !1,
    __experimental__naiveDimensions: b = !1,
    naiveDimensions: O = b,
    stopInertiaOnNavigate: P = !1,
  } = {}) {
    ((window.lenisVersion = Ko),
      window.lenis || (window.lenis = {}),
      (window.lenis.version = Ko),
      d === "horizontal" && (window.lenis.horizontal = !0),
      r === !0 && (window.lenis.touch = !0),
      (!s || s === document.documentElement) && (s = window),
      typeof a == "number" && typeof l != "function"
        ? (l = Zo)
        : typeof l == "function" && typeof a != "number" && (a = 1),
      (this.options = {
        wrapper: s,
        content: t,
        eventsTarget: i,
        smoothWheel: e,
        syncTouch: r,
        syncTouchLerp: n,
        touchInertiaExponent: o,
        duration: a,
        easing: l,
        lerp: u,
        infinite: c,
        gestureOrientation: h,
        orientation: d,
        touchMultiplier: f,
        wheelMultiplier: _,
        autoResize: p,
        prevent: m,
        virtualScroll: x,
        overscroll: y,
        autoRaf: T,
        anchors: v,
        autoToggle: S,
        allowNestedScroll: k,
        naiveDimensions: O,
        stopInertiaOnNavigate: P,
      }),
      (this.dimensions = new Oc(s, t, { autoResize: p })),
      this.updateClassName(),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: !0,
      }),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.addEventListener("click", this.onClick),
      this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
      (this.virtualScroll = new Rc(i, {
        touchMultiplier: f,
        wheelMultiplier: _,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll),
      this.options.autoToggle &&
        (this.checkOverflow(),
        this.rootElement.addEventListener(
          "transitionend",
          this.onTransitionEnd,
        )),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
  }
  destroy() {
    (this.emitter.destroy(),
      this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: !0,
      }),
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
      ),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.removeEventListener("click", this.onClick),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName(),
      this._rafId && cancelAnimationFrame(this._rafId));
  }
  on(s, t) {
    return this.emitter.on(s, t);
  }
  off(s, t) {
    return this.emitter.off(s, t);
  }
  onScrollEnd = (s) => {
    s instanceof CustomEvent ||
      ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
        s.stopPropagation());
  };
  dispatchScrollendEvent = () => {
    this.options.wrapper.dispatchEvent(
      new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: { lenisScrollEnd: !0 },
      }),
    );
  };
  get overflow() {
    const s = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[s];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow)
      ? this.internalStop()
      : this.internalStart();
  }
  onTransitionEnd = (s) => {
    s.propertyName?.includes("overflow") &&
      s.target === this.rootElement &&
      this.checkOverflow();
  };
  setScroll(s) {
    this.isHorizontal
      ? this.options.wrapper.scrollTo({ left: s, behavior: "instant" })
      : this.options.wrapper.scrollTo({ top: s, behavior: "instant" });
  }
  onClick = (s) => {
    const t = s
        .composedPath()
        .filter((e) => e instanceof HTMLAnchorElement && e.href)
        .map((e) => new URL(e.href)),
      i = new URL(window.location.href);
    if (this.options.anchors) {
      const e = t.find(
        (r) => i.host === r.host && i.pathname === r.pathname && r.hash,
      );
      if (e) {
        const r =
            typeof this.options.anchors == "object" && this.options.anchors
              ? this.options.anchors
              : void 0,
          n = `#${e.hash.split("#")[1]}`;
        this.scrollTo(n, r);
        return;
      }
    }
    if (
      this.options.stopInertiaOnNavigate &&
      t.some((e) => i.host === e.host && i.pathname !== e.pathname)
    ) {
      this.reset();
      return;
    }
  };
  onPointerDown = (s) => {
    s.button === 1 && this.reset();
  };
  onVirtualScroll = (s) => {
    if (
      typeof this.options.virtualScroll == "function" &&
      this.options.virtualScroll(s) === !1
    )
      return;
    const { deltaX: t, deltaY: i, event: e } = s;
    if (
      (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: i, event: e }),
      e.ctrlKey || e.lenisStopPropagation)
    )
      return;
    const r = e.type.includes("touch"),
      n = e.type.includes("wheel");
    this.isTouching = e.type === "touchstart" || e.type === "touchmove";
    const o = t === 0 && i === 0;
    if (
      this.options.syncTouch &&
      r &&
      e.type === "touchstart" &&
      o &&
      !this.isStopped &&
      !this.isLocked
    ) {
      this.reset();
      return;
    }
    const a =
      (this.options.gestureOrientation === "vertical" && i === 0) ||
      (this.options.gestureOrientation === "horizontal" && t === 0);
    if (o || a) return;
    let l = e.composedPath();
    l = l.slice(0, l.indexOf(this.rootElement));
    const u = this.options.prevent,
      c = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    if (
      l.find(
        (_) =>
          _ instanceof HTMLElement &&
          ((typeof u == "function" && u?.(_)) ||
            _.hasAttribute?.("data-lenis-prevent") ||
            (c === "vertical" &&
              _.hasAttribute?.("data-lenis-prevent-vertical")) ||
            (c === "horizontal" &&
              _.hasAttribute?.("data-lenis-prevent-horizontal")) ||
            (r && _.hasAttribute?.("data-lenis-prevent-touch")) ||
            (n && _.hasAttribute?.("data-lenis-prevent-wheel")) ||
            (this.options.allowNestedScroll &&
              this.hasNestedScroll(_, { deltaX: t, deltaY: i }))),
      )
    )
      return;
    if (this.isStopped || this.isLocked) {
      e.cancelable && e.preventDefault();
      return;
    }
    if (!((this.options.syncTouch && r) || (this.options.smoothWheel && n))) {
      ((this.isScrolling = "native"),
        this.animate.stop(),
        (e.lenisStopPropagation = !0));
      return;
    }
    let d = i;
    (this.options.gestureOrientation === "both"
      ? (d = Math.abs(i) > Math.abs(t) ? i : t)
      : this.options.gestureOrientation === "horizontal" && (d = t),
      (!this.options.overscroll ||
        this.options.infinite ||
        (this.options.wrapper !== window &&
          this.limit > 0 &&
          ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
            (this.animatedScroll === 0 && i > 0) ||
            (this.animatedScroll === this.limit && i < 0)))) &&
        (e.lenisStopPropagation = !0),
      e.cancelable && e.preventDefault());
    const h = r && this.options.syncTouch,
      f = r && e.type === "touchend";
    (f &&
      (d =
        Math.sign(d) *
        Math.abs(this.velocity) ** this.options.touchInertiaExponent),
      this.scrollTo(this.targetScroll + d, {
        programmatic: !1,
        ...(h
          ? { lerp: f ? this.options.syncTouchLerp : 1 }
          : {
              lerp: this.options.lerp,
              duration: this.options.duration,
              easing: this.options.easing,
            }),
      }));
  };
  resize() {
    (this.dimensions.resize(),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      this.emit());
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  onNativeScroll = () => {
    if (
      (this._resetVelocityTimeout !== null &&
        (clearTimeout(this._resetVelocityTimeout),
        (this._resetVelocityTimeout = null)),
      this._preventNextNativeScrollEvent)
    ) {
      this._preventNextNativeScrollEvent = !1;
      return;
    }
    if (this.isScrolling === !1 || this.isScrolling === "native") {
      const s = this.animatedScroll;
      ((this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity),
        (this.velocity = this.animatedScroll - s),
        (this.direction = Math.sign(this.animatedScroll - s)),
        this.isStopped || (this.isScrolling = "native"),
        this.emit(),
        this.velocity !== 0 &&
          (this._resetVelocityTimeout = setTimeout(() => {
            ((this.lastVelocity = this.velocity),
              (this.velocity = 0),
              (this.isScrolling = !1),
              this.emit());
          }, 400)));
    }
  };
  reset() {
    ((this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop());
  }
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
  }
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
  }
  raf = (s) => {
    const t = s - (this.time || s);
    ((this.time = s),
      this.animate.advance(t * 0.001),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
  };
  scrollTo(
    s,
    {
      offset: t = 0,
      immediate: i = !1,
      lock: e = !1,
      programmatic: r = !0,
      lerp: n = r ? this.options.lerp : void 0,
      duration: o = r ? this.options.duration : void 0,
      easing: a = r ? this.options.easing : void 0,
      onStart: l,
      onComplete: u,
      force: c = !1,
      userData: d,
    } = {},
  ) {
    if ((this.isStopped || this.isLocked) && !c) return;
    let h = s,
      f = t;
    if (typeof h == "string" && ["top", "left", "start", "#"].includes(h))
      h = 0;
    else if (typeof h == "string" && ["bottom", "right", "end"].includes(h))
      h = this.limit;
    else {
      let _ = null;
      if (
        (typeof h == "string"
          ? ((_ = document.querySelector(h)),
            _ ||
              (h === "#top"
                ? (h = 0)
                : console.warn("Lenis: Target not found", h)))
          : h instanceof HTMLElement && h?.nodeType && (_ = h),
        _)
      ) {
        if (this.options.wrapper !== window) {
          const v = this.rootElement.getBoundingClientRect();
          f -= this.isHorizontal ? v.left : v.top;
        }
        const p = _.getBoundingClientRect(),
          m = getComputedStyle(_),
          x = this.isHorizontal
            ? Number.parseFloat(m.scrollMarginLeft)
            : Number.parseFloat(m.scrollMarginTop),
          y = getComputedStyle(this.rootElement),
          T = this.isHorizontal
            ? Number.parseFloat(y.scrollPaddingLeft)
            : Number.parseFloat(y.scrollPaddingTop);
        h =
          (this.isHorizontal ? p.left : p.top) +
          this.animatedScroll -
          (Number.isNaN(x) ? 0 : x) -
          (Number.isNaN(T) ? 0 : T);
      }
    }
    if (typeof h == "number") {
      if (((h += f), this.options.infinite)) {
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2
            ? (h -= this.limit)
            : _ < -this.limit / 2 && (h += this.limit);
        }
      } else h = Sl(0, h, this.limit);
      if (h === this.targetScroll) {
        (l?.(this), u?.(this));
        return;
      }
      if (((this.userData = d ?? {}), i)) {
        ((this.animatedScroll = this.targetScroll = h),
          this.setScroll(this.scroll),
          this.reset(),
          this.preventNextNativeScrollEvent(),
          this.emit(),
          u?.(this),
          (this.userData = {}),
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          }));
        return;
      }
      (r || (this.targetScroll = h),
        typeof o == "number" && typeof a != "function"
          ? (a = Zo)
          : typeof a == "function" && typeof o != "number" && (o = 1),
        this.animate.fromTo(this.animatedScroll, h, {
          duration: o,
          easing: a,
          lerp: n,
          onStart: () => {
            (e && (this.isLocked = !0),
              (this.isScrolling = "smooth"),
              l?.(this));
          },
          onUpdate: (_, p) => {
            ((this.isScrolling = "smooth"),
              (this.lastVelocity = this.velocity),
              (this.velocity = _ - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = _),
              this.setScroll(this.scroll),
              r && (this.targetScroll = _),
              p || this.emit(),
              p &&
                (this.reset(),
                this.emit(),
                u?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }),
                this.preventNextNativeScrollEvent()));
          },
        }));
    }
  }
  preventNextNativeScrollEvent() {
    ((this._preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1;
      }));
  }
  hasNestedScroll(s, { deltaX: t, deltaY: i }) {
    const e = Date.now();
    s._lenis || (s._lenis = {});
    const r = s._lenis;
    let n, o, a, l, u, c, d, h, f, _;
    if (e - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const k = window.getComputedStyle(s);
      if (
        ((r.computedStyle = k),
        (n = ["auto", "overlay", "scroll"].includes(k.overflowX)),
        (o = ["auto", "overlay", "scroll"].includes(k.overflowY)),
        (u = ["auto"].includes(k.overscrollBehaviorX)),
        (c = ["auto"].includes(k.overscrollBehaviorY)),
        (r.hasOverflowX = n),
        (r.hasOverflowY = o),
        !(n || o))
      )
        return !1;
      ((d = s.scrollWidth),
        (h = s.scrollHeight),
        (f = s.clientWidth),
        (_ = s.clientHeight),
        (a = d > f),
        (l = h > _),
        (r.isScrollableX = a),
        (r.isScrollableY = l),
        (r.scrollWidth = d),
        (r.scrollHeight = h),
        (r.clientWidth = f),
        (r.clientHeight = _),
        (r.hasOverscrollBehaviorX = u),
        (r.hasOverscrollBehaviorY = c));
    } else
      ((a = r.isScrollableX),
        (l = r.isScrollableY),
        (n = r.hasOverflowX),
        (o = r.hasOverflowY),
        (d = r.scrollWidth),
        (h = r.scrollHeight),
        (f = r.clientWidth),
        (_ = r.clientHeight),
        (u = r.hasOverscrollBehaviorX),
        (c = r.hasOverscrollBehaviorY));
    if (!((n && a) || (o && l))) return !1;
    const p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let m, x, y, T, v, S;
    if (p === "horizontal")
      ((m = Math.round(s.scrollLeft)),
        (x = d - f),
        (y = t),
        (T = n),
        (v = a),
        (S = u));
    else if (p === "vertical")
      ((m = Math.round(s.scrollTop)),
        (x = h - _),
        (y = i),
        (T = o),
        (v = l),
        (S = c));
    else return !1;
    return !S && (m >= x || m <= 0) ? !0 : (y > 0 ? m < x : m > 0) && T && v;
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    const s = this.options.wrapper;
    return this.isHorizontal
      ? (s.scrollX ?? s.scrollLeft)
      : (s.scrollY ?? s.scrollTop);
  }
  get scroll() {
    return this.options.infinite
      ? Ec(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(s) {
    this._isScrolling !== s &&
      ((this._isScrolling = s), this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(s) {
    this._isStopped !== s && ((this._isStopped = s), this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(s) {
    this._isLocked !== s && ((this._isLocked = s), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let s = "lenis";
    return (
      this.options.autoToggle && (s += " lenis-autoToggle"),
      this.isStopped && (s += " lenis-stopped"),
      this.isLocked && (s += " lenis-locked"),
      this.isScrolling && (s += " lenis-scrolling"),
      this.isScrolling === "smooth" && (s += " lenis-smooth"),
      s
    );
  }
  updateClassName() {
    (this.cleanUpClassName(),
      this.className.split(" ").forEach((s) => {
        this.rootElement.classList.add(s);
      }));
  }
  cleanUpClassName() {
    for (const s of Array.from(this.rootElement.classList))
      (s === "lenis" || s.startsWith("lenis-")) &&
        this.rootElement.classList.remove(s);
  }
};
function Dc(s) {
  const t = new Ac({
    duration: 1.8,
    easing: (i) => Math.min(1, 1.001 - Math.pow(2, -10 * i)),
    smoothWheel: !0,
    wheelMultiplier: 0.82,
    touchMultiplier: 1.5,
    syncTouch: !0,
  });
  return (
    t.on("scroll", I.update),
    L.ticker.add((i) => {
      t.raf(i * 1e3);
    }),
    L.ticker.lagSmoothing(0),
    t
  );
}
function Lc(s) {
  const t = document.getElementById("cursor-dot"),
    i = document.getElementById("cursor-ring");
  if (!t || !i) return;
  document.body.classList.add("has-custom-cursor");
  const e = L.quickSetter(t, "x", "px"),
    r = L.quickSetter(t, "y", "px"),
    n = L.quickTo(i, "x", { duration: 0.5, ease: "expo.out" }),
    o = L.quickTo(i, "y", { duration: 0.5, ease: "expo.out" });
  (window.addEventListener(
    "pointermove",
    (u) => {
      (e(u.clientX), r(u.clientY), n(u.clientX), o(u.clientY));
    },
    { passive: !0 },
  ),
    document
      .querySelectorAll(
        "a, button, [data-magnetic], [data-magnetic-soft], .house-card, .review-card, .finale-cta",
      )
      .forEach((u) => {
        (u.addEventListener("pointerenter", () => i.classList.add("is-active")),
          u.addEventListener("pointerleave", () =>
            i.classList.remove("is-active"),
          ));
      }),
    document
      .querySelectorAll("[data-magnetic], [data-magnetic-soft]")
      .forEach((u) => {
        const c = u.hasAttribute("data-magnetic") ? 0.4 : 0.18,
          d = L.quickTo(u, "x", { duration: 0.6, ease: "expo.out" }),
          h = L.quickTo(u, "y", { duration: 0.6, ease: "expo.out" });
        (u.addEventListener("pointermove", (f) => {
          const _ = u.getBoundingClientRect(),
            p = f.clientX - (_.left + _.width / 2),
            m = f.clientY - (_.top + _.height / 2);
          (d(p * c), h(m * c));
        }),
          u.addEventListener("pointerleave", () => {
            (d(0), h(0));
          }));
      }));
}
function zc(s) {
  const i = (s.textContent ?? "").trim().split(/\s+/);
  s.textContent = "";
  const e = [];
  return (
    i.forEach((r, n) => {
      const o = document.createElement("span");
      o.className = "split-word";
      const a = document.createElement("span");
      ((a.textContent = r),
        o.appendChild(a),
        s.appendChild(o),
        e.push(a),
        n < i.length - 1 && s.appendChild(document.createTextNode(" ")));
    }),
    e
  );
}
function Nc(s) {
  const t = (s.textContent ?? "").trim();
  s.textContent = "";
  const i = [];
  for (const e of t) {
    const r = document.createElement("span");
    ((r.textContent = e === " " ? " " : e), s.appendChild(r), i.push(r));
  }
  return i;
}
function Fc() {
  const s = document.querySelector("[data-split-letters]");
  return s ? Nc(s) : [];
}
const ar = "expo.out";
function Cl(s) {
  const t = L.utils.toArray("[data-reveal]");
  if (s) {
    (t.forEach((e) => L.set(e, { opacity: 1, y: 0 })),
      L.utils
        .toArray("[data-hairline]")
        .forEach((e) => L.set(e, { scaleX: 1 })));
    return;
  }
  t.forEach((e) => {
    const r = e.dataset.reveal;
    if (r === "words") {
      const n = zc(e);
      (L.set(n, { yPercent: 115 }),
        I.create({
          trigger: e,
          start: "top 85%",
          once: !0,
          onEnter: () =>
            L.to(n, { yPercent: 0, duration: 1.1, ease: ar, stagger: 0.08 }),
        }));
    } else if (r === "lines") {
      const n = e.querySelectorAll(".reveal-line > span");
      (L.set(n, { yPercent: 115 }),
        I.create({
          trigger: e,
          start: "top 85%",
          once: !0,
          onEnter: () =>
            L.to(n, { yPercent: 0, duration: 1, ease: ar, stagger: 0.1 }),
        }));
    } else
      r === "brand"
        ? (L.set(e, { yPercent: 30, opacity: 0 }),
          I.create({
            trigger: e,
            start: "top 92%",
            once: !0,
            onEnter: () =>
              L.to(e, { yPercent: 0, opacity: 1, duration: 1.4, ease: ar }),
          }))
        : r !== "rise" &&
          (L.set(e, { opacity: 0, y: 28 }),
          I.create({
            trigger: e,
            start: "top 88%",
            once: !0,
            onEnter: () => L.to(e, { opacity: 1, y: 0, duration: 1, ease: ar }),
          }));
  });
  const i = L.utils.toArray('[data-reveal="rise"]');
  (L.set(i, { opacity: 0, y: 46 }),
    I.batch(i, {
      start: "top 86%",
      onEnter: (e) =>
        L.to(e, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: ar,
          stagger: 0.12,
          overwrite: !0,
        }),
    }),
    L.utils.toArray("[data-hairline]").forEach((e) => {
      (L.set(e, { scaleX: 0, transformOrigin: "left center" }),
        I.create({
          trigger: e,
          start: "top 92%",
          once: !0,
          onEnter: () => L.to(e, { scaleX: 1, duration: 1.3, ease: ar }),
        }));
    }),
    L.utils.toArray(".glow").forEach((e) => {
      L.to(e, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: e.closest("section"),
          start: "top bottom",
          end: "bottom top",
          scrub: !0,
        },
      });
    }));
}
function El(s) {
  L.utils.toArray("[data-count]").forEach((i) => {
    const e = Number(i.dataset.count ?? "0"),
      r = i.dataset.suffix ?? "",
      n = i.dataset.prefix ?? "",
      o = (l) => {
        i.textContent = `${n}${Math.round(l)}${r}`;
      };
    if (s) {
      o(e);
      return;
    }
    const a = { v: 0 };
    (o(0),
      I.create({
        trigger: i,
        start: "top 90%",
        once: !0,
        onEnter: () =>
          L.to(a, {
            v: e,
            duration: 2.4,
            ease: "power3.out",
            onUpdate: () => o(a.v),
          }),
      }));
  });
}
const Ic = 6;
function Pl(s, t = {}) {
  const i = t.basePath ?? "frames",
    e = t.stream ?? !1,
    r = t.dprCap ?? 2,
    n = t.windowAhead ?? 48,
    o = t.windowBehind ?? 16,
    a = t.windowEvict ?? 64,
    l = (E) =>
      `./${window.currentTheme === "night" ? (i === "assets/vault-frames-mobile" ? "assets/vault-frames-mobile-night" : "assets/vault-frames-night") : i}/frame_${Sc(E + 1)}.webp`,
    u = document.getElementById("hero-canvas");
  if (!u) throw new Error("#hero-canvas not found");
  const c = u.getContext("2d", { alpha: !1, desynchronized: !0 });
  if (!c) throw new Error("2D canvas context unavailable");
  const d = e ? [] : new Array(s),
    h = e ? new Array(s) : [],
    f = new Map(),
    _ = new Set();
  let p = -1;
  function m() {
    const E = Math.min(window.devicePixelRatio || 1, r),
      M = u.clientWidth || window.innerWidth,
      N = u.clientHeight || window.innerHeight;
    ((u.width = Math.round(M * E)),
      (u.height = Math.round(N * E)),
      (c.imageSmoothingEnabled = !0),
      (c.imageSmoothingQuality = "high"));
  }
  function x(E) {
    const M = u.width,
      N = u.height,
      D = E.width,
      Y = E.height,
      V = Math.max(M / D, N / Y),
      g = D * V,
      tt = Y * V;
    c.drawImage(E, (M - g) * 0.5, (N - tt) * 0.5, g, tt);
  }
  const y = (E) => (e ? f.get(E) : d[E]);
  function T(E) {
    const M = y(E);
    if (M) return M;
    for (let N = 1; N <= s; N++) {
      const D = y(E - N);
      if (D) return D;
      const Y = y(E + N);
      if (Y) return Y;
    }
  }
  async function v(E) {
    if (E < 0 || E >= s || f.has(E) || _.has(E)) return;
    _.add(E);
    if (e && !h[E]) {
      try {
        const res = await fetch(l(E));
        if (res.ok) {
          h[E] = await res.blob();
        } else {
          _.delete(E);
          return;
        }
      } catch {
        _.delete(E);
        return;
      }
    }
    const M = h[E];
    if (M) {
      try {
        const N = await createImageBitmap(M);
        if (p !== -1 && Math.abs(E - p) > Math.max(48, 3 * a)) {
          N.close();
        } else {
          if (f.has(E)) {
            f.delete(E);
          } else if (f.size >= 25) {
            const oldestKey = f.keys().next().value;
            const oldestImg = f.get(oldestKey);
            if (oldestImg && typeof oldestImg.close === "function") {
              oldestImg.close();
            }
            f.delete(oldestKey);
          }
          f.set(E, N);
        }
      } catch {}
    }
    _.delete(E);
  }
  function S(E) {
    for (const M of f.keys())
      (M < E - a || M > E + a) && (f.get(M)?.close(), f.delete(M));
  }
  function k(E) {
    if (e) {
      for (let M = 0; M <= n; M++) {
        const N = M === 0 ? [E] : [E + M, E - M];
        for (const D of N)
          if (
            !(D < 0 || D >= s) &&
            !(M > o && D < E) &&
            !(f.has(D) || _.has(D))
          ) {
            if (_.size >= Ic) {
              S(E);
              return;
            }
            v(D);
          }
      }
      S(E);
    }
  }
  function b(E) {
    const M = Math.max(0, Math.min(s - 1, E));
    e && k(M);
    const N = y(M) ?? T(M);
    N && ((c.globalAlpha = 1), x(N), (p = M));
  }
  function O(E) {
    const M = Math.max(0, Math.min(s - 1, E)),
      N = Math.floor(M),
      D = M - N;
    e && k(N);
    const Y = y(N);
    if (!Y) {
      const V = T(N);
      V && ((c.globalAlpha = 1), x(V));
      return;
    }
    if (((c.globalAlpha = 1), x(Y), D > 0.001 && N + 1 < s)) {
      const V = y(N + 1);
      V && ((c.globalAlpha = D), x(V), (c.globalAlpha = 1));
    }
    p = Math.round(M);
  }
  function P() {
    (m(), b(p < 0 ? 0 : p));
  }
  async function C(E) {
    try {
      const M = await fetch(E);
      if (!M.ok) throw new Error(`HTTP ${M.status}`);
      return await createImageBitmap(await M.blob());
    } catch (M) {
      console.warn("[hero] frame failed:", E, M);
      return;
    }
  }
  async function H(E) {
    if (e) {
      if (!h[E])
        try {
          h[E] = await (await fetch(l(E))).blob();
        } catch {}
      await v(E);
      return;
    }
    d[E] || (d[E] = await C(l(E)));
  }
  const A = async (E) => {
    if (e) {
      if (h[E]) return;
      try {
        h[E] = await (await fetch(l(E))).blob();
      } catch {}
    } else d[E] = await C(l(E));
  };
  async function Q(E, M = s) {
    const N = s;
    await A(0);
    await v(0);
    E(1, 1);
    const preloadNextFrames = async () => {
      const preloadCount = Math.min(8, N - 1);
      const promises = [];
      for (let idx = 1; idx <= preloadCount; idx++) {
        promises.push(v(idx));
      }
      await Promise.all(promises);
    };
    if (document.readyState === "complete") {
      preloadNextFrames();
    } else {
      window.addEventListener("load", preloadNextFrames, { once: true });
    }
  }
  return (
    m(),
    {
      frameCount: s,
      draw: b,
      drawAt: O,
      resize: P,
      preloadAll: Q,
      preloadOne: H,
      getCurrentFrame: () => p,
      clearCache: () => {
        f.forEach((E) => E.close());
        f.clear();
        h.fill(undefined);
        d.fill(undefined);
      },
    }
  );
}
const me = (s) => document.querySelector(s);
window.Bc = [
  { sel: "#chapter-residences", in: 80 / 800, out: 119 / 800 },
  { sel: "#chapter-horology", in: 119 / 800, out: 217 / 800 },
  { sel: "#chapter-events", in: 217 / 800, out: 349 / 800 },
  { sel: "#chapter-automotive", in: 349 / 800, out: 471 / 800 },
  { sel: "#chapter-yachts", in: 471 / 800, out: 622 / 800 },
  { sel: "#chapter-aviation", in: 622 / 800, out: 0.95 },
];
const Yc = 0.95;
window.ds = [
  { until: 80 / 800, label: "I · Sky" },
  { until: 119 / 800, label: "II · Residences" },
  { until: 217 / 800, label: "III · Horology" },
  { until: 349 / 800, label: "IV · Private Events" },
  { until: 471 / 800, label: "V · Automotive" },
  { until: 622 / 800, label: "VI · Yachts" },
  { until: 1 / 0, label: "VII · Aviation" },
];
window.Xc = (s) =>
  (window.ds.find((t) => s < t.until) ?? window.ds[window.ds.length - 1]).label;
window.Wc = Wc;
function Wc(s, t) {
  const i = me(t.sel);
  if (!i) return;
  const e = i.querySelector(".chapter-index"),
    r = i.querySelector(".chapter-word"),
    n = i.querySelector(".chapter-rule"),
    o = i.querySelector(".chapter-caption");
  (L.set(i, { opacity: 0 }),
    L.set(e, { opacity: 0, y: -10 }),
    L.set(r, { yPercent: 110 }),
    L.set(n, { scaleX: 0, transformOrigin: "center center" }),
    L.set(o, { opacity: 0, y: 14 }),
    s
      .to(i, { opacity: 1, duration: 0.015 }, t.in)
      .to(
        e,
        { opacity: 1, y: 0, duration: 0.03, ease: "power2.out" },
        t.in + 0.004,
      )
      .to(r, { yPercent: 0, duration: 0.05, ease: "power3.out" }, t.in + 0.01)
      .to(n, { scaleX: 1, duration: 0.06, ease: "power3.out" }, t.in + 0.02)
      .to(
        o,
        { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" },
        t.in + 0.03,
      )
      .to(i, { opacity: 0, duration: 0.03, ease: "power2.in" }, t.out - 0.018));
}
function Hc(s, t) {
  const { pinPxPerFrame: i, eyebrowLetters: e } = t,
    r = s.frameCount - 1,
    n = me("#hero");
  if (!n) return;
  const o = me("#zone-eyebrow"),
    a = me("#zone-name"),
    l = me("#zone-closing"),
    u = me("#brand-reveal"),
    c = me(".brand-sub"),
    d = me("#hero-rail"),
    h = me("#rail-fill"),
    f = me("#rail-node"),
    _ = me("#rail-label"),
    p = me("#scroll-hint"),
    m = me(".mobile-scroll-cue");
  (L.set(e, { yPercent: 120, opacity: 0 }),
    L.set(c, { opacity: 0, y: 16 }),
    L.set(l, { opacity: 0, y: 30 }),
    d && L.to(d, { opacity: 1, duration: 0.8, delay: 0.2 }));
  const x = { f: 0 };
  let y = !1;
  const T = L.timeline({
    scrollTrigger: {
      trigger: n,
      start: "top top",
      end: `+=${s.frameCount * i}`,
      pin: !0,
      scrub: 1.15,
      anticipatePin: 1,
      invalidateOnRefresh: !0,
      onUpdate: (v) => {
        const S = v.progress;
        (h && (h.style.height = `${S * 100}%`),
          f && (f.style.top = `${S * 100}%`),
          _ && (_.textContent = window.Xc(S)),
          !y &&
            S > 0.01 &&
            ((y = !0),
            p && L.to(p, { opacity: 0, duration: 0.5 }),
            m && L.to(m, { opacity: 0, duration: 0.5 })));
      },
      onLeave: () => {
        d && L.to(d, { opacity: 0, duration: 0.5 });
      },
      onEnterBack: () => {
        d && L.to(d, { opacity: 1, duration: 0.5 });
      },
    },
  });
  window.heroTimeline = T;
  (T.to(
    x,
    { f: r, ease: "none", duration: 1, onUpdate: () => s.drawAt(x.f) },
    0,
  ),
    T.to(o, { opacity: 1, duration: 0.002 }, 0.001)
      .to(
        e,
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.0005,
          duration: 0.003,
          ease: "power2.out",
        },
        0.003,
      )
      .to(
        e,
        {
          yPercent: -120,
          opacity: 0,
          stagger: 0.0005,
          duration: 0.003,
          ease: "power2.in",
        },
        0.007,
      )
      .to(o, { opacity: 0, duration: 0.002 }, 0.01),
    T.to(a, { opacity: 1, duration: 0.01 }, 0.0125)
      .fromTo(
        u,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.03, ease: "power3.inOut" },
        0.02,
      )
      .to(c, { opacity: 1, y: 0, duration: 0.02, ease: "power2.out" }, 0.05)
      .to(a, { opacity: 0, duration: 0.015 }, 0.08),
    window.Bc.forEach((v) => Wc(T, v)),
    T.to(l, { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" }, Yc));
  window.Hc = Hc;
}
const En = [
  {
    quote:
      "They delivered the site exactly as promised, on time and pixel perfect. Our launch traffic converted at a rate we had never seen.",
    name: "Eleanor Vance",
    role: "Marketing Director, Marina Residences",
  },
  {
    quote:
      "I have commissioned three agencies for our maison. VAULTFY is the only one whose work felt as considered as our movements.",
    name: "Hiroshi Tanaka",
    role: "Brand Director, Horology",
  },
  {
    quote:
      "Our flagship sold a forty metre yacht from the website alone, before the client ever stepped aboard.",
    name: "Marcus Reå",
    role: "Founder, Reå Yachts",
  },
  {
    quote:
      "One team designed, built, and still runs our site. The continuity is something you can feel on every page.",
    name: "Sofia Almeida",
    role: "CMO, Private Collection",
  },
  {
    quote:
      "A reputation is built slowly. Five years in, every deadline this studio has set with us has been met to the day.",
    name: "Camille Laurent",
    role: "Director, Laurent Estates",
  },
  {
    quote:
      "The 24/7 support is not a line in a contract. They answered at two in the morning during our global launch and fixed it in minutes.",
    name: "Dieter Voss",
    role: "Digital Lead, Maison Voss",
  },
  {
    quote:
      "Their AI agents personalize our site for every market without a single extra hire on our side. It simply works.",
    name: "Priya Nair",
    role: "Head of Ecommerce, Atelier Group",
  },
  {
    quote:
      "We briefed a hundred studios. VAULTFY is the only name that made restraint feel like the most expensive choice.",
    name: "Jonah Whitfield",
    role: "Creative Director, Residence Brands",
  },
  {
    quote:
      "The handover never really ended. Years later they still tune performance and watch the numbers for us.",
    name: "Lucia Romano",
    role: "Owner, Selene Charters",
  },
  {
    quote:
      "Light is their primary material, on screen as much as on water. One vision, carried across every page.",
    name: "Anders Holm",
    role: "Design Critic",
  },
];
function qc(s) {
  return s
    .split(" ")
    .slice(0, 2)
    .map((t) => t[0])
    .join("")
    .toUpperCase();
}
function Vc(s) {
  return `
  <article class="review-card">
    <p class="review-quote"><span class="qmark" aria-hidden="true">&ldquo;</span>${s.quote}</p>
    <div class="review-meta">
      <div class="review-avatar" aria-hidden="true">${qc(s.name)}</div>
      <div>
        <div class="review-name">${s.name}</div>
        <div class="review-role">${s.role}</div>
      </div>
    </div>
  </article>`;
}
function Pn(s, t, i) {
  const e = t.map(Vc).join("");
  s.innerHTML = i ? e + e : e;
}
function jo(s, t, i, e) {
  const r =
    i < 0
      ? L.to(s, { xPercent: -50, duration: e, ease: "none", repeat: -1 })
      : L.fromTo(
          s,
          { xPercent: -50 },
          { xPercent: 0, duration: e, ease: "none", repeat: -1 },
        );
  return (
    t.addEventListener("pointerenter", () =>
      L.to(r, { timeScale: 0.18, duration: 0.6 }),
    ),
    t.addEventListener("pointerleave", () =>
      L.to(r, { timeScale: 1, duration: 0.6 }),
    ),
    r
  );
}
function Jo(s) {
  s &&
    (s.setAttribute("tabindex", "0"),
    s.setAttribute("role", "group"),
    s.setAttribute("aria-label", "Client testimonials, scroll to read more"));
}
function kl(s) {
  const t = document.getElementById("marquee-a"),
    i = document.getElementById("marquee-b");
  if (!t || !i) return [];
  const e = t.closest(".marquee-row"),
    r = i.closest(".marquee-row");
  if (s)
    return (
      Pn(t, En.slice(0, 5), !1),
      Pn(i, En.slice(5, 10), !1),
      Jo(e),
      Jo(r),
      []
    );
  if ((Pn(t, En.slice(0, 5), !0), Pn(i, En.slice(5, 10), !0), !e || !r))
    return [];
  const n = jo(t, e, -1, 72),
    o = jo(i, r, 1, 82);
  return [n, o];
}
function Uc(s) {
  const t = (s.textContent ?? "").trim();
  s.textContent = "";
  const i = [];
  for (const e of t) {
    const r = document.createElement("span");
    ((r.className = "fw-letter"),
      (r.textContent = e === " " ? " " : e),
      s.appendChild(r),
      i.push(r));
  }
  return i;
}
function Ol({ reduced: s, marqueeLoops: t }) {
  const i = document.getElementById("finale");
  if (!i) return;
  const e = i.querySelector(".finale-eyebrow"),
    r = i.querySelector(".finale-wordmark"),
    n = r ? Uc(r) : [],
    o = i.querySelectorAll(".finale-tagline .reveal-line > span"),
    a = i.querySelector(".finale-cta");
  if (s) {
    (L.set([e, a], { opacity: 1, y: 0 }),
      L.set(n, { opacity: 1 }),
      L.set(r, { letterSpacing: "0.2em" }),
      L.set(o, { yPercent: 0 }));
    return;
  }
  (L.set(e, { opacity: 0, y: 16 }),
    L.set(n, { opacity: 0, filter: "blur(8px)" }),
    L.set(r, { letterSpacing: "0.02em" }),
    L.set(o, { yPercent: 125 }),
    L.set(a, { opacity: 0, y: 22 }),
    I.create({
      trigger: i,
      start: "top 85%",
      onEnter: () =>
        t.forEach((u) =>
          L.to(u, { timeScale: 0.03, duration: 2.6, ease: "power2.out" }),
        ),
      onLeaveBack: () =>
        t.forEach((u) =>
          L.to(u, { timeScale: 1, duration: 1.6, ease: "power2.out" }),
        ),
    }),
    L.timeline({
      scrollTrigger: { trigger: i, start: "top 58%", once: !0 },
      defaults: { ease: "expo.out" },
    })
      .to(e, { opacity: 1, y: 0, duration: 1.8 }, 0)
      .to(
        n,
        { opacity: 1, filter: "blur(0px)", duration: 2, stagger: 0.055 },
        0.35,
      )
      .to(r, { letterSpacing: "0.2em", duration: 3, ease: "power2.out" }, 0.35)
      .to(o, { yPercent: 0, duration: 1.6, stagger: 0.16 }, 1.5)
      .to(a, { opacity: 1, y: 0, duration: 1.6 }, 2.2));
}
L.registerPlugin(I);
const $c = 4,
  Gc = 90,
  Kc = {
    frameCount: vc,
    basePath: "assets/vault-frames",
    stream: !0,
    windowAhead: 4,
    windowBehind: 2,
    windowEvict: 8,
  },
  Qc = {
    frameCount: yc,
    basePath: "assets/vault-frames-mobile",
    stream: !0,
    dprCap: 2,
    windowAhead: 3,
    windowBehind: 1,
    windowEvict: 6,
  },
  ps = document.getElementById("loader"),
  ta = document.getElementById("loader-fill"),
  ea = document.getElementById("loader-pct");
function Ml(s) {
  (ta && (ta.style.right = `${100 - s * 100}%`),
    ea && (ea.textContent = `${Math.round(s * 100)}%`));
}
function Rl() {
  return new Promise((s) => {
    if (!ps) return s();
    L.to(ps, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        ((ps.style.display = "none"), s());
      },
    });
  });
}
async function Al() {
  try {
    await document.fonts?.ready;
  } catch {}
  I.refresh();
}
function Dl(s) {
  let t;
  window.addEventListener("resize", () => {
    (s.resize(),
      t && clearTimeout(t),
      (t = window.setTimeout(() => I.refresh(), 200)));
  });
}
async function Zc(s) {
  document.documentElement.classList.add("is-static");
  const t = Pl(s.frameCount, s),
    i = s.frameCount - 1;
  (Dl(t),
    await t.preloadOne(i),
    t.resize(),
    t.draw(i),
    L.set("#zone-name", { opacity: 1 }),
    L.set("#brand-reveal", { clipPath: "inset(0 0% 0 0)" }),
    L.set(".brand-sub", { opacity: 1, y: 0 }));
  const e = kl(!0);
  (Cl(!0),
    El(!0),
    Ol({ reduced: !0, marqueeLoops: e }),
    await Al(),
    await Rl(),
    I.refresh());
}
async function jc(s, t) {
  const i = Pl(s.frameCount, s);
  window.activePlayer = i;
  window.activeConfig = s;
  window.gsap = L;
  window.ScrollTrigger = I;
  const e = t.smooth ? Dc() : null;
  ((window.__lenis = e),
    document.documentElement.classList.add("is-loading"),
    e?.stop(),
    window.scrollTo(0, 0),
    Dl(i),
    await i.preloadAll((o, a) => Ml(o / a), Gc),
    i.resize(),
    i.draw(0));
  const r = kl(!1);
  t.cursor && Lc();
  const n = Fc();
  (Hc(i, { pinPxPerFrame: $c, eyebrowLetters: n }),
    Cl(!1),
    El(!1),
    Ol({ reduced: !1, marqueeLoops: r }),
    await Al(),
    await Rl(),
    document.documentElement.classList.remove("is-loading"),
    e?.start(),
    I.refresh());
}
async function Jc() {
  I.config({ ignoreMobileResize: !0 });
  const s = !xc(),
    t = s ? Qc : Kc;
  (wc()
    ? (Ml(1), await Zc(t))
    : await jc(t, { cursor: !s && bc(), smooth: !s }),
    window.addEventListener("load", () => I.refresh()));
}
Jc();
