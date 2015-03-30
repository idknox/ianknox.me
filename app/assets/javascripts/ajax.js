$(document).ready(function () {

  function numberWithCommas(t) {
    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  function kFormatter(t) {
    return t > 999 ? (t / 1e3).toFixed(1) + "k" : t
  }

  function lineFormatter(t) {
    return(t / 30).toFixed(0)
  }

  function colorGenerator(t) {
    return githubLangs[t] ? githubLangs[t] : "#666"
  }

  function repoLabelHelper(t) {
    for (var e = "", n = Object.keys(t), i = 0; i < n.length; i++)e += kFormatter(t[n[i]]), e += t[n[i]] > 1 ? " are " : " is ", e += '<strong><span style="color: ' + colorGenerator(n[i]) + '">' + n[i] + "</span></strong>", e += i + 2 < n.length ? ", " : i + 2 == n.length ? " and " : ". ";
    return e
  }

  function codeRepoHelper(t) {
    for (var e = "", n = Object.keys(t), i = 0; i < n.length; i++)e += kFormatter(lineFormatter(t[n[i]])), e += t[n[i]] > 1 ? " are " : " is ", e += '<strong><span style="color: ' + colorGenerator(n[i]) + '">' + n[i] + "</span></strong>", e += i + 2 < n.length ? ", " : i + 2 == n.length ? " and " : ". ";
    return e
  }

  function chartHelper(t) {
    for (var e = [], n = Object.keys(t), i = 0; i < n.length; i++)e.push({name: n[i], color: colorGenerator(n[i]), y: t[n[i]]});
    return e
  }

  function redirect() {
    "" != $(".search-input").val() && (window.location.href = "/u/" + $(".search-input").val())
  }

  !function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
      if (!t.document)throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
      var e = t.length, n = oe.type(t);
      return"function" === n || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
      if (oe.isFunction(e))return oe.grep(t, function (t, i) {
        return!!e.call(t, i, t) !== n
      });
      if (e.nodeType)return oe.grep(t, function (t) {
        return t === e !== n
      });
      if ("string" == typeof e) {
        if (pe.test(e))return oe.filter(e, t, n);
        e = oe.filter(e, t)
      }
      return oe.grep(t, function (t) {
        return oe.inArray(t, e) >= 0 !== n
      })
    }

    function o(t, e) {
      do t = t[e]; while (t && 1 !== t.nodeType);
      return t
    }

    function r(t) {
      var e = xe[t] = {};
      return oe.each(t.match(be) || [], function (t, n) {
        e[n] = !0
      }), e
    }

    function a() {
      he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }

    function s() {
      (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), oe.ready())
    }

    function l(t, e, n) {
      if (void 0 === n && 1 === t.nodeType) {
        var i = "data-" + e.replace(Se, "-$1").toLowerCase();
        if (n = t.getAttribute(i), "string" == typeof n) {
          try {
            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? oe.parseJSON(n) : n
          } catch (o) {
          }
          oe.data(t, e, n)
        } else n = void 0
      }
      return n
    }

    function u(t) {
      var e;
      for (e in t)if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e)return!1;
      return!0
    }

    function c(t, e, n, i) {
      if (oe.acceptData(t)) {
        var o, r, a = oe.expando, s = t.nodeType, l = s ? oe.cache : t, u = s ? t[a] : t[a] && a;
        if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)return u || (u = s ? t[a] = V.pop() || oe.guid++ : a), l[u] || (l[u] = s ? {} : {toJSON: oe.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = oe.extend(l[u], e) : l[u].data = oe.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[oe.camelCase(e)])) : o = r, o
      }
    }

    function d(t, e, n) {
      if (oe.acceptData(t)) {
        var i, o, r = t.nodeType, a = r ? oe.cache : t, s = r ? t[oe.expando] : oe.expando;
        if (a[s]) {
          if (e && (i = n ? a[s] : a[s].data)) {
            oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in i ? e = [e] : (e = oe.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
            for (; o--;)delete i[e[o]];
            if (n ? !u(i) : !oe.isEmptyObject(i))return
          }
          (n || (delete a[s].data, u(a[s]))) && (r ? oe.cleanData([t], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
        }
      }
    }

    function p() {
      return!0
    }

    function f() {
      return!1
    }

    function h() {
      try {
        return he.activeElement
      } catch (t) {
      }
    }

    function m(t) {
      var e = Fe.split("|"), n = t.createDocumentFragment();
      if (n.createElement)for (; e.length;)n.createElement(e.pop());
      return n
    }

    function g(t, e) {
      var n, i, o = 0, r = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
      if (!r)for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)!e || oe.nodeName(i, e) ? r.push(i) : oe.merge(r, g(i, e));
      return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], r) : r
    }

    function v(t) {
      $e.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
      return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
      return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
    }

    function x(t) {
      var e = Ge.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
      for (var n, i = 0; null != (n = t[i]); i++)oe._data(n, "globalEval", !e || oe._data(e[i], "globalEval"))
    }

    function T(t, e) {
      if (1 === e.nodeType && oe.hasData(t)) {
        var n, i, o, r = oe._data(t), a = oe._data(e, r), s = r.events;
        if (s) {
          delete a.handle, a.events = {};
          for (n in s)for (i = 0, o = s[n].length; o > i; i++)oe.event.add(e, n, s[n][i])
        }
        a.data && (a.data = oe.extend({}, a.data))
      }
    }

    function C(t, e) {
      var n, i, o;
      if (1 === e.nodeType) {
        if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[oe.expando]) {
          o = oe._data(e);
          for (i in o.events)oe.removeEvent(e, i, o.handle);
          e.removeAttribute(oe.expando)
        }
        "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && $e.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
      }
    }

    function E(e, n) {
      var i, o = oe(n.createElement(e)).appendTo(n.body), r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
      return o.detach(), r
    }

    function S(t) {
      var e = he, n = Ze[t];
      return n || (n = E(t, e), "none" !== n && n || (Ye = (Ye || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ye[0].contentWindow || Ye[0].contentDocument).document, e.write(), e.close(), n = E(t, e), Ye.detach()), Ze[t] = n), n
    }

    function k(t, e) {
      return{get: function () {
        var n = t();
        if (null != n)return n ? void delete this.get : (this.get = e).apply(this, arguments)
      }}
    }

    function N(t, e) {
      if (e in t)return e;
      for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = fn.length; o--;)if (e = fn[o] + n, e in t)return e;
      return i
    }

    function A(t, e) {
      for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++)i = t[a], i.style && (r[a] = oe._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ae(i) && (r[a] = oe._data(i, "olddisplay", S(i.nodeName)))) : (o = Ae(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
      for (a = 0; s > a; a++)i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
      return t
    }

    function D(t, e, n) {
      var i = un.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function $(t, e, n, i, o) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += oe.css(t, n + Ne[r], !0, o)), i ? ("content" === n && (a -= oe.css(t, "padding" + Ne[r], !0, o)), "margin" !== n && (a -= oe.css(t, "border" + Ne[r] + "Width", !0, o))) : (a += oe.css(t, "padding" + Ne[r], !0, o), "padding" !== n && (a += oe.css(t, "border" + Ne[r] + "Width", !0, o)));
      return a
    }

    function L(t, e, n) {
      var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = tn(t), a = ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (o = en(t, e, r), (0 > o || null == o) && (o = t.style[e]), on.test(o))return o;
        i = a && (ne.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
      }
      return o + $(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }

    function j(t, e, n, i, o) {
      return new j.prototype.init(t, e, n, i, o)
    }

    function O() {
      return setTimeout(function () {
        hn = void 0
      }), hn = oe.now()
    }

    function H(t, e) {
      var n, i = {height: t}, o = 0;
      for (e = e ? 1 : 0; 4 > o; o += 2 - e)n = Ne[o], i["margin" + n] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i
    }

    function R(t, e, n) {
      for (var i, o = (xn[e] || []).concat(xn["*"]), r = 0, a = o.length; a > r; r++)if (i = o[r].call(n, e, t))return i
    }

    function F(t, e, n) {
      var i, o, r, a, s, l, u, c, d = this, p = {}, f = t.style, h = t.nodeType && Ae(t), m = oe._data(t, "fxshow");
      n.queue || (s = oe._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
        s.unqueued || l()
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, oe.queue(t, "fx").length || s.empty.fire()
        })
      })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = oe.css(t, "display"), c = "none" === u ? oe._data(t, "olddisplay") || S(t.nodeName) : u, "inline" === c && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
      }));
      for (i in e)if (o = e[i], gn.exec(o)) {
        if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
          if ("show" !== o || !m || void 0 === m[i])continue;
          h = !0
        }
        p[i] = m && m[i] || oe.style(t, i)
      } else u = void 0;
      if (oe.isEmptyObject(p))"inline" === ("none" === u ? S(t.nodeName) : u) && (f.display = u); else {
        m ? "hidden"in m && (h = m.hidden) : m = oe._data(t, "fxshow", {}), r && (m.hidden = !h), h ? oe(t).show() : d.done(function () {
          oe(t).hide()
        }), d.done(function () {
          var e;
          oe._removeData(t, "fxshow");
          for (e in p)oe.style(t, e, p[e])
        });
        for (i in p)a = R(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function _(t, e) {
      var n, i, o, r, a;
      for (n in t)if (i = oe.camelCase(n), o = e[i], r = t[n], oe.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = oe.cssHooks[i], a && "expand"in a) {
        r = a.expand(r), delete t[i];
        for (n in r)n in t || (t[n] = r[n], e[n] = o)
      } else e[i] = o
    }

    function I(t, e, n) {
      var i, o, r = 0, a = bn.length, s = oe.Deferred().always(function () {
        delete l.elem
      }), l = function () {
        if (o)return!1;
        for (var e = hn || O(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++)u.tweens[a].run(r);
        return s.notifyWith(t, [u, r, n]), 1 > r && l ? n : (s.resolveWith(t, [u]), !1)
      }, u = s.promise({elem: t, props: oe.extend({}, e), opts: oe.extend(!0, {specialEasing: {}}, n), originalProperties: e, originalOptions: n, startTime: hn || O(), duration: n.duration, tweens: [], createTween: function (e, n) {
        var i = oe.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
        return u.tweens.push(i), i
      }, stop: function (e) {
        var n = 0, i = e ? u.tweens.length : 0;
        if (o)return this;
        for (o = !0; i > n; n++)u.tweens[n].run(1);
        return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
      }}), c = u.props;
      for (_(c, u.opts.specialEasing); a > r; r++)if (i = bn[r].call(u, t, c, u.opts))return i;
      return oe.map(c, R, u), oe.isFunction(u.opts.start) && u.opts.start.call(t, u), oe.fx.timer(oe.extend(l, {elem: t, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function P(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i, o = 0, r = e.toLowerCase().match(be) || [];
        if (oe.isFunction(n))for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
    }

    function M(t, e, n, i) {
      function o(s) {
        var l;
        return r[s] = !0, oe.each(t[s] || [], function (t, s) {
          var u = s(e, n, i);
          return"string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
        }), l
      }

      var r = {}, a = t === Un;
      return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function q(t, e) {
      var n, i, o = oe.ajaxSettings.flatOptions || {};
      for (i in e)void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
      return n && oe.extend(!0, t, n), t
    }

    function B(t, e, n) {
      for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
      if (o)for (a in s)if (s[a] && s[a].test(o)) {
        l.unshift(a);
        break
      }
      if (l[0]in n)r = l[0]; else {
        for (a in n) {
          if (!l[0] || t.converters[a + " " + l[0]]) {
            r = a;
            break
          }
          i || (i = a)
        }
        r = r || i
      }
      return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function W(t, e, n, i) {
      var o, r, a, s, l, u = {}, c = t.dataTypes.slice();
      if (c[1])for (a in t.converters)u[a.toLowerCase()] = t.converters[a];
      for (r = c.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
        if (a = u[l + " " + r] || u["* " + r], !a)for (o in u)if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
          a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
          break
        }
        if (a !== !0)if (a && t["throws"])e = a(e); else try {
          e = a(e)
        } catch (d) {
          return{state: "parsererror", error: a ? d : "No conversion from " + l + " to " + r}
        }
      }
      return{state: "success", data: e}
    }

    function U(t, e, n, i) {
      var o;
      if (oe.isArray(e))oe.each(e, function (e, o) {
        n || Vn.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
      }); else if (n || "object" !== oe.type(e))i(t, e); else for (o in e)U(t + "[" + o + "]", e[o], n, i)
    }

    function z() {
      try {
        return new t.XMLHttpRequest
      } catch (e) {
      }
    }

    function X() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
      }
    }

    function G(t) {
      return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var V = [], Q = V.slice, J = V.concat, K = V.push, Y = V.indexOf, Z = {}, te = Z.toString, ee = Z.hasOwnProperty, ne = {}, ie = "1.11.2", oe = function (t, e) {
      return new oe.fn.init(t, e)
    }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, le = function (t, e) {
      return e.toUpperCase()
    };
    oe.fn = oe.prototype = {jquery: ie, constructor: oe, selector: "", length: 0, toArray: function () {
      return Q.call(this)
    }, get: function (t) {
      return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
    }, pushStack: function (t) {
      var e = oe.merge(this.constructor(), t);
      return e.prevObject = this, e.context = this.context, e
    }, each: function (t, e) {
      return oe.each(this, t, e)
    }, map: function (t) {
      return this.pushStack(oe.map(this, function (e, n) {
        return t.call(e, n, e)
      }))
    }, slice: function () {
      return this.pushStack(Q.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (t) {
      var e = this.length, n = +t + (0 > t ? e : 0);
      return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: K, sort: V.sort, splice: V.splice}, oe.extend = oe.fn.extend = function () {
      var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
      for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)if (null != (o = arguments[s]))for (i in o)t = a[i], n = o[i], a !== n && (u && n && (oe.isPlainObject(n) || (e = oe.isArray(n))) ? (e ? (e = !1, r = t && oe.isArray(t) ? t : []) : r = t && oe.isPlainObject(t) ? t : {}, a[i] = oe.extend(u, r, n)) : void 0 !== n && (a[i] = n));
      return a
    }, oe.extend({expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
      throw new Error(t)
    }, noop: function () {
    }, isFunction: function (t) {
      return"function" === oe.type(t)
    }, isArray: Array.isArray || function (t) {
      return"array" === oe.type(t)
    }, isWindow: function (t) {
      return null != t && t == t.window
    }, isNumeric: function (t) {
      return!oe.isArray(t) && t - parseFloat(t) + 1 >= 0
    }, isEmptyObject: function (t) {
      var e;
      for (e in t)return!1;
      return!0
    }, isPlainObject: function (t) {
      var e;
      if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t))return!1;
      try {
        if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return!1
      } catch (n) {
        return!1
      }
      if (ne.ownLast)for (e in t)return ee.call(t, e);
      for (e in t);
      return void 0 === e || ee.call(t, e)
    }, type: function (t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
    }, globalEval: function (e) {
      e && oe.trim(e) && (t.execScript || function (e) {
        t.eval.call(t, e)
      })(e)
    }, camelCase: function (t) {
      return t.replace(ae, "ms-").replace(se, le)
    }, nodeName: function (t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }, each: function (t, e, i) {
      var o, r = 0, a = t.length, s = n(t);
      if (i) {
        if (s)for (; a > r && (o = e.apply(t[r], i), o !== !1); r++); else for (r in t)if (o = e.apply(t[r], i), o === !1)break
      } else if (s)for (; a > r && (o = e.call(t[r], r, t[r]), o !== !1); r++); else for (r in t)if (o = e.call(t[r], r, t[r]), o === !1)break;
      return t
    }, trim: function (t) {
      return null == t ? "" : (t + "").replace(re, "")
    }, makeArray: function (t, e) {
      var i = e || [];
      return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
    }, inArray: function (t, e, n) {
      var i;
      if (e) {
        if (Y)return Y.call(e, t, n);
        for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
      }
      return-1
    }, merge: function (t, e) {
      for (var n = +e.length, i = 0, o = t.length; n > i;)t[o++] = e[i++];
      if (n !== n)for (; void 0 !== e[i];)t[o++] = e[i++];
      return t.length = o, t
    }, grep: function (t, e, n) {
      for (var i, o = [], r = 0, a = t.length, s = !n; a > r; r++)i = !e(t[r], r), i !== s && o.push(t[r]);
      return o
    }, map: function (t, e, i) {
      var o, r = 0, a = t.length, s = n(t), l = [];
      if (s)for (; a > r; r++)o = e(t[r], r, i), null != o && l.push(o); else for (r in t)o = e(t[r], r, i), null != o && l.push(o);
      return J.apply([], l)
    }, guid: 1, proxy: function (t, e) {
      var n, i, o;
      return"string" == typeof e && (o = t[e], e = t, t = o), oe.isFunction(t) ? (n = Q.call(arguments, 2), i = function () {
        return t.apply(e || this, n.concat(Q.call(arguments)))
      }, i.guid = t.guid = t.guid || oe.guid++, i) : void 0
    }, now: function () {
      return+new Date
    }, support: ne}), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
      Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function (t) {
      function e(t, e, n, i) {
        var o, r, a, s, l, u, d, f, h, m;
        if ((e ? e.ownerDocument || e : M) !== j && L(e), e = e || j, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s)return n;
        if (!i && H) {
          if (11 !== s && (o = ye.exec(t)))if (a = o[1]) {
            if (9 === s) {
              if (r = e.getElementById(a), !r || !r.parentNode)return n;
              if (r.id === a)return n.push(r), n
            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && I(e, r) && r.id === a)return n.push(r), n
          } else {
            if (o[2])return Y.apply(n, e.getElementsByTagName(t)), n;
            if ((a = o[3]) && w.getElementsByClassName)return Y.apply(n, e.getElementsByClassName(a)), n
          }
          if (w.qsa && (!R || !R.test(t))) {
            if (f = d = P, h = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
              for (u = S(t), (d = e.getAttribute("id")) ? f = d.replace(xe, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;)u[l] = f + p(u[l]);
              h = be.test(t) && c(e.parentNode) || e, m = u.join(",")
            }
            if (m)try {
              return Y.apply(n, h.querySelectorAll(m)), n
            } catch (g) {
            } finally {
              d || e.removeAttribute("id")
            }
          }
        }
        return N(t.replace(le, "$1"), e, n, i)
      }

      function n() {
        function t(n, i) {
          return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
        }

        var e = [];
        return t
      }

      function i(t) {
        return t[P] = !0, t
      }

      function o(t) {
        var e = j.createElement("div");
        try {
          return!!t(e)
        } catch (n) {
          return!1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function r(t, e) {
        for (var n = t.split("|"), i = t.length; i--;)T.attrHandle[n[i]] = e
      }

      function a(t, e) {
        var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
        if (i)return i;
        if (n)for (; n = n.nextSibling;)if (n === e)return-1;
        return t ? 1 : -1
      }

      function s(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return"input" === n && e.type === t
        }
      }

      function l(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return("input" === n || "button" === n) && e.type === t
        }
      }

      function u(t) {
        return i(function (e) {
          return e = +e, i(function (n, i) {
            for (var o, r = t([], n.length, e), a = r.length; a--;)n[o = r[a]] && (n[o] = !(i[o] = n[o]))
          })
        })
      }

      function c(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t
      }

      function d() {
      }

      function p(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
        return i
      }

      function f(t, e, n) {
        var i = e.dir, o = n && "parentNode" === i, r = B++;
        return e.first ? function (e, n, r) {
          for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
        } : function (e, n, a) {
          var s, l, u = [q, r];
          if (a) {
            for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, a))return!0
          } else for (; e = e[i];)if (1 === e.nodeType || o) {
            if (l = e[P] || (e[P] = {}), (s = l[i]) && s[0] === q && s[1] === r)return u[2] = s[2];
            if (l[i] = u, u[2] = t(e, n, a))return!0
          }
        }
      }

      function h(t) {
        return t.length > 1 ? function (e, n, i) {
          for (var o = t.length; o--;)if (!t[o](e, n, i))return!1;
          return!0
        } : t[0]
      }

      function m(t, n, i) {
        for (var o = 0, r = n.length; r > o; o++)e(t, n[o], i);
        return i
      }

      function g(t, e, n, i, o) {
        for (var r, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(r = t[s]) && (!n || n(r, i, o)) && (a.push(r), u && e.push(s));
        return a
      }

      function v(t, e, n, o, r, a) {
        return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, a)), i(function (i, a, s, l) {
          var u, c, d, p = [], f = [], h = a.length, v = i || m(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? v : g(v, p, t, s, l), b = n ? r || (i ? t : h || o) ? [] : a : y;
          if (n && n(y, b, s, l), o)for (u = g(b, f), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
          if (i) {
            if (r || t) {
              if (r) {
                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                r(null, b = [], u, l)
              }
              for (c = b.length; c--;)(d = b[c]) && (u = r ? te(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
            }
          } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : Y.apply(a, b)
        })
      }

      function y(t) {
        for (var e, n, i, o = t.length, r = T.relative[t[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = f(function (t) {
          return t === e
        }, a, !0), u = f(function (t) {
          return te(e, t) > -1
        }, a, !0), c = [function (t, n, i) {
          var o = !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
          return e = null, o
        }]; o > s; s++)if (n = T.relative[t[s].type])c = [f(h(c), n)]; else {
          if (n = T.filter[t[s].type].apply(null, t[s].matches), n[P]) {
            for (i = ++s; o > i && !T.relative[t[i].type]; i++);
            return v(s > 1 && h(c), s > 1 && p(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(le, "$1"), n, i > s && y(t.slice(s, i)), o > i && y(t = t.slice(i)), o > i && p(t))
          }
          c.push(n)
        }
        return h(c)
      }

      function b(t, n) {
        var o = n.length > 0, r = t.length > 0, a = function (i, a, s, l, u) {
          var c, d, p, f = 0, h = "0", m = i && [], v = [], y = A, b = i || r && T.find.TAG("*", u), x = q += null == y ? 1 : Math.random() || .1, w = b.length;
          for (u && (A = a !== j && a); h !== w && null != (c = b[h]); h++) {
            if (r && c) {
              for (d = 0; p = t[d++];)if (p(c, a, s)) {
                l.push(c);
                break
              }
              u && (q = x)
            }
            o && ((c = !p && c) && f--, i && m.push(c))
          }
          if (f += h, o && h !== f) {
            for (d = 0; p = n[d++];)p(m, v, a, s);
            if (i) {
              if (f > 0)for (; h--;)m[h] || v[h] || (v[h] = J.call(l));
              v = g(v)
            }
            Y.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
          }
          return u && (q = x, A = y), m
        };
        return o ? i(a) : a
      }

      var x, w, T, C, E, S, k, N, A, D, $, L, j, O, H, R, F, _, I, P = "sizzle" + 1 * new Date, M = t.document, q = 0, B = 0, W = n(), U = n(), z = n(), X = function (t, e) {
        return t === e && ($ = !0), 0
      }, G = 1 << 31, V = {}.hasOwnProperty, Q = [], J = Q.pop, K = Q.push, Y = Q.push, Z = Q.slice, te = function (t, e) {
        for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
        return-1
      }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(ae), fe = new RegExp("^" + oe + "$"), he = {ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + ee + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Te = function (t, e, n) {
        var i = "0x" + e - 65536;
        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, Ce = function () {
        L()
      };
      try {
        Y.apply(Q = Z.call(M.childNodes), M.childNodes), Q[M.childNodes.length].nodeType
      } catch (Ee) {
        Y = {apply: Q.length ? function (t, e) {
          K.apply(t, Z.call(e))
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];);
          t.length = n - 1
        }}
      }
      w = e.support = {}, E = e.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return e ? "HTML" !== e.nodeName : !1
      }, L = e.setDocument = function (t) {
        var e, n, i = t ? t.ownerDocument || t : M;
        return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), H = !E(i), w.attributes = o(function (t) {
          return t.className = "i", !t.getAttribute("className")
        }), w.getElementsByTagName = o(function (t) {
          return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
        }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = o(function (t) {
          return O.appendChild(t).id = P, !i.getElementsByName || !i.getElementsByName(P).length
        }), w.getById ? (T.find.ID = function (t, e) {
          if ("undefined" != typeof e.getElementById && H) {
            var n = e.getElementById(t);
            return n && n.parentNode ? [n] : []
          }
        }, T.filter.ID = function (t) {
          var e = t.replace(we, Te);
          return function (t) {
            return t.getAttribute("id") === e
          }
        }) : (delete T.find.ID, T.filter.ID = function (t) {
          var e = t.replace(we, Te);
          return function (t) {
            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
            return n && n.value === e
          }
        }), T.find.TAG = w.getElementsByTagName ? function (t, e) {
          return"undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
        } : function (t, e) {
          var n, i = [], o = 0, r = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; n = r[o++];)1 === n.nodeType && i.push(n);
            return i
          }
          return r
        }, T.find.CLASS = w.getElementsByClassName && function (t, e) {
          return H ? e.getElementsByClassName(t) : void 0
        }, F = [], R = [], (w.qsa = ve.test(i.querySelectorAll)) && (o(function (t) {
          O.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + P + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || R.push(".#.+[+~]")
        }), o(function (t) {
          var e = i.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
        })), (w.matchesSelector = ve.test(_ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (t) {
          w.disconnectedMatch = _.call(t, "div"), _.call(t, "[s!='']:x"), F.push("!=", ae)
        }), R = R.length && new RegExp(R.join("|")), F = F.length && new RegExp(F.join("|")), e = ve.test(O.compareDocumentPosition), I = e || ve.test(O.contains) ? function (t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
          return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
        } : function (t, e) {
          if (e)for (; e = e.parentNode;)if (e === t)return!0;
          return!1
        }, X = e ? function (t, e) {
          if (t === e)return $ = !0, 0;
          var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === M && I(M, t) ? -1 : e === i || e.ownerDocument === M && I(M, e) ? 1 : D ? te(D, t) - te(D, e) : 0 : 4 & n ? -1 : 1)
        } : function (t, e) {
          if (t === e)return $ = !0, 0;
          var n, o = 0, r = t.parentNode, s = e.parentNode, l = [t], u = [e];
          if (!r || !s)return t === i ? -1 : e === i ? 1 : r ? -1 : s ? 1 : D ? te(D, t) - te(D, e) : 0;
          if (r === s)return a(t, e);
          for (n = t; n = n.parentNode;)l.unshift(n);
          for (n = e; n = n.parentNode;)u.unshift(n);
          for (; l[o] === u[o];)o++;
          return o ? a(l[o], u[o]) : l[o] === M ? -1 : u[o] === M ? 1 : 0
        }, i) : j
      }, e.matches = function (t, n) {
        return e(t, null, null, n)
      }, e.matchesSelector = function (t, n) {
        if ((t.ownerDocument || t) !== j && L(t), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !H || F && F.test(n) || R && R.test(n)))try {
          var i = _.call(t, n);
          if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
        } catch (o) {
        }
        return e(n, j, null, [t]).length > 0
      }, e.contains = function (t, e) {
        return(t.ownerDocument || t) !== j && L(t), I(t, e)
      }, e.attr = function (t, e) {
        (t.ownerDocument || t) !== j && L(t);
        var n = T.attrHandle[e.toLowerCase()], i = n && V.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !H) : void 0;
        return void 0 !== i ? i : w.attributes || !H ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }, e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t)
      }, e.uniqueSort = function (t) {
        var e, n = [], i = 0, o = 0;
        if ($ = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(X), $) {
          for (; e = t[o++];)e === t[o] && (i = n.push(o));
          for (; i--;)t.splice(n[i], 1)
        }
        return D = null, t
      }, C = e.getText = function (t) {
        var e, n = "", i = 0, o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent)return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling)n += C(t)
          } else if (3 === o || 4 === o)return t.nodeValue
        } else for (; e = t[i++];)n += C(e);
        return n
      }, T = e.selectors = {cacheLength: 50, createPseudo: i, match: he, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (t) {
        return t[1] = t[1].replace(we, Te), t[3] = (t[3] || t[4] || t[5] || "").replace(we, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
      }, CHILD: function (t) {
        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
      }, PSEUDO: function (t) {
        var e, n = !t[6] && t[2];
        return he.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pe.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
      }}, filter: {TAG: function (t) {
        var e = t.replace(we, Te).toLowerCase();
        return"*" === t ? function () {
          return!0
        } : function (t) {
          return t.nodeName && t.nodeName.toLowerCase() === e
        }
      }, CLASS: function (t) {
        var e = W[t + " "];
        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function (t) {
          return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
        })
      }, ATTR: function (t, n, i) {
        return function (o) {
          var r = e.attr(o, t);
          return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
        }
      }, CHILD: function (t, e, n, i, o) {
        var r = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
        return 1 === i && 0 === o ? function (t) {
          return!!t.parentNode
        } : function (e, n, l) {
          var u, c, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s;
          if (g) {
            if (r) {
              for (; m;) {
                for (d = e; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return!1;
                h = m = "only" === t && !h && "nextSibling"
              }
              return!0
            }
            if (h = [a ? g.firstChild : g.lastChild], a && y) {
              for (c = g[P] || (g[P] = {}), u = c[t] || [], f = u[0] === q && u[1], p = u[0] === q && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)if (1 === d.nodeType && ++p && d === e) {
                c[t] = [q, f, p];
                break
              }
            } else if (y && (u = (e[P] || (e[P] = {}))[t]) && u[0] === q)p = u[1]; else for (; (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[P] || (d[P] = {}))[t] = [q, p]), d !== e)););
            return p -= o, p === i || p % i === 0 && p / i >= 0
          }
        }
      }, PSEUDO: function (t, n) {
        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
        return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
          for (var i, o = r(t, n), a = o.length; a--;)i = te(t, o[a]), t[i] = !(e[i] = o[a])
        }) : function (t) {
          return r(t, 0, o)
        }) : r
      }}, pseudos: {not: i(function (t) {
        var e = [], n = [], o = k(t.replace(le, "$1"));
        return o[P] ? i(function (t, e, n, i) {
          for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
        }) : function (t, i, r) {
          return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
        }
      }), has: i(function (t) {
        return function (n) {
          return e(t, n).length > 0
        }
      }), contains: i(function (t) {
        return t = t.replace(we, Te), function (e) {
          return(e.textContent || e.innerText || C(e)).indexOf(t) > -1
        }
      }), lang: i(function (t) {
        return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, Te).toLowerCase(), function (e) {
          var n;
          do if (n = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
          return!1
        }
      }), target: function (e) {
        var n = t.location && t.location.hash;
        return n && n.slice(1) === e.id
      }, root: function (t) {
        return t === O
      }, focus: function (t) {
        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
      }, enabled: function (t) {
        return t.disabled === !1
      }, disabled: function (t) {
        return t.disabled === !0
      }, checked: function (t) {
        var e = t.nodeName.toLowerCase();
        return"input" === e && !!t.checked || "option" === e && !!t.selected
      }, selected: function (t) {
        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
      }, empty: function (t) {
        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return!1;
        return!0
      }, parent: function (t) {
        return!T.pseudos.empty(t)
      }, header: function (t) {
        return ge.test(t.nodeName)
      }, input: function (t) {
        return me.test(t.nodeName)
      }, button: function (t) {
        var e = t.nodeName.toLowerCase();
        return"input" === e && "button" === t.type || "button" === e
      }, text: function (t) {
        var e;
        return"input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
      }, first: u(function () {
        return[0]
      }), last: u(function (t, e) {
        return[e - 1]
      }), eq: u(function (t, e, n) {
        return[0 > n ? n + e : n]
      }), even: u(function (t, e) {
        for (var n = 0; e > n; n += 2)t.push(n);
        return t
      }), odd: u(function (t, e) {
        for (var n = 1; e > n; n += 2)t.push(n);
        return t
      }), lt: u(function (t, e, n) {
        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
        return t
      }), gt: u(function (t, e, n) {
        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
        return t
      })}}, T.pseudos.nth = T.pseudos.eq;
      for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[x] = s(x);
      for (x in{submit: !0, reset: !0})T.pseudos[x] = l(x);
      return d.prototype = T.filters = T.pseudos, T.setFilters = new d, S = e.tokenize = function (t, n) {
        var i, o, r, a, s, l, u, c = U[t + " "];
        if (c)return n ? 0 : c.slice(0);
        for (s = t, l = [], u = T.preFilter; s;) {
          (!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({value: i, type: o[0].replace(le, " ")}), s = s.slice(i.length));
          for (a in T.filter)!(o = he[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({value: i, type: a, matches: o}), s = s.slice(i.length));
          if (!i)break
        }
        return n ? s.length : s ? e.error(t) : U(t, l).slice(0)
      }, k = e.compile = function (t, e) {
        var n, i = [], o = [], r = z[t + " "];
        if (!r) {
          for (e || (e = S(t)), n = e.length; n--;)r = y(e[n]), r[P] ? i.push(r) : o.push(r);
          r = z(t, b(o, i)), r.selector = t
        }
        return r
      }, N = e.select = function (t, e, n, i) {
        var o, r, a, s, l, u = "function" == typeof t && t, d = !i && S(t = u.selector || t);
        if (n = n || [], 1 === d.length) {
          if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === e.nodeType && H && T.relative[r[1].type]) {
            if (e = (T.find.ID(a.matches[0].replace(we, Te), e) || [])[0], !e)return n;
            u && (e = e.parentNode), t = t.slice(r.shift().value.length)
          }
          for (o = he.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !T.relative[s = a.type]);)if ((l = T.find[s]) && (i = l(a.matches[0].replace(we, Te), be.test(r[0].type) && c(e.parentNode) || e))) {
            if (r.splice(o, 1), t = i.length && p(r), !t)return Y.apply(n, i), n;
            break
          }
        }
        return(u || k(t, d))(i, e, !H, n, be.test(t) && c(e.parentNode) || e), n
      }, w.sortStable = P.split("").sort(X).join("") === P, w.detectDuplicates = !!$, L(), w.sortDetached = o(function (t) {
        return 1 & t.compareDocumentPosition(j.createElement("div"))
      }), o(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function (t, e, n) {
        return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), w.attributes && o(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || r("value", function (t, e, n) {
        return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
      }), o(function (t) {
        return null == t.getAttribute("disabled")
      }) || r(ee, function (t, e, n) {
        var i;
        return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }), e
    }(t);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var ce = oe.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pe = /^.[^:#\[\.,]*$/;
    oe.filter = function (t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function (t) {
        return 1 === t.nodeType
      }))
    }, oe.fn.extend({find: function (t) {
      var e, n = [], i = this, o = i.length;
      if ("string" != typeof t)return this.pushStack(oe(t).filter(function () {
        for (e = 0; o > e; e++)if (oe.contains(i[e], this))return!0
      }));
      for (e = 0; o > e; e++)oe.find(t, i[e], n);
      return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
    }, filter: function (t) {
      return this.pushStack(i(this, t || [], !1))
    }, not: function (t) {
      return this.pushStack(i(this, t || [], !0))
    }, is: function (t) {
      return!!i(this, "string" == typeof t && ce.test(t) ? oe(t) : t || [], !1).length
    }});
    var fe, he = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = oe.fn.init = function (t, e) {
      var n, i;
      if (!t)return this;
      if ("string" == typeof t) {
        if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e)return!e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
        if (n[1]) {
          if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : he, !0)), de.test(n[1]) && oe.isPlainObject(e))for (n in e)oe.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this
        }
        if (i = he.getElementById(n[2]), i && i.parentNode) {
          if (i.id !== n[2])return fe.find(t);
          this.length = 1, this[0] = i
        }
        return this.context = he, this.selector = t, this
      }
      return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
    };
    ge.prototype = oe.fn, fe = oe(he);
    var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0, contents: !0, next: !0, prev: !0};
    oe.extend({dir: function (t, e, n) {
      for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));)1 === o.nodeType && i.push(o), o = o[e];
      return i
    }, sibling: function (t, e) {
      for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
      return n
    }}), oe.fn.extend({has: function (t) {
      var e, n = oe(t, this), i = n.length;
      return this.filter(function () {
        for (e = 0; i > e; e++)if (oe.contains(this, n[e]))return!0
      })
    }, closest: function (t, e) {
      for (var n, i = 0, o = this.length, r = [], a = ce.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
        r.push(n);
        break
      }
      return this.pushStack(r.length > 1 ? oe.unique(r) : r)
    }, index: function (t) {
      return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (t, e) {
      return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
    }, addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }}), oe.each({parent: function (t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null
    }, parents: function (t) {
      return oe.dir(t, "parentNode")
    }, parentsUntil: function (t, e, n) {
      return oe.dir(t, "parentNode", n)
    }, next: function (t) {
      return o(t, "nextSibling")
    }, prev: function (t) {
      return o(t, "previousSibling")
    }, nextAll: function (t) {
      return oe.dir(t, "nextSibling")
    }, prevAll: function (t) {
      return oe.dir(t, "previousSibling")
    }, nextUntil: function (t, e, n) {
      return oe.dir(t, "nextSibling", n)
    }, prevUntil: function (t, e, n) {
      return oe.dir(t, "previousSibling", n)
    }, siblings: function (t) {
      return oe.sibling((t.parentNode || {}).firstChild, t)
    }, children: function (t) {
      return oe.sibling(t.firstChild)
    }, contents: function (t) {
      return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
    }}, function (t, e) {
      oe.fn[t] = function (n, i) {
        var o = oe.map(this, e, n);
        return"Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[t] || (o = oe.unique(o)), ve.test(t) && (o = o.reverse())), this.pushStack(o)
      }
    });
    var be = /\S+/g, xe = {};
    oe.Callbacks = function (t) {
      t = "string" == typeof t ? xe[t] || r(t) : oe.extend({}, t);
      var e, n, i, o, a, s, l = [], u = !t.once && [], c = function (r) {
        for (n = t.memory && r, i = !0, a = s || 0, s = 0, o = l.length, e = !0; l && o > a; a++)if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
          n = !1;
          break
        }
        e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
      }, d = {add: function () {
        if (l) {
          var i = l.length;
          !function r(e) {
            oe.each(e, function (e, n) {
              var i = oe.type(n);
              "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
            })
          }(arguments), e ? o = l.length : n && (s = i, c(n))
        }
        return this
      }, remove: function () {
        return l && oe.each(arguments, function (t, n) {
          for (var i; (i = oe.inArray(n, l, i)) > -1;)l.splice(i, 1), e && (o >= i && o--, a >= i && a--)
        }), this
      }, has: function (t) {
        return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
      }, empty: function () {
        return l = [], o = 0, this
      }, disable: function () {
        return l = u = n = void 0, this
      }, disabled: function () {
        return!l
      }, lock: function () {
        return u = void 0, n || d.disable(), this
      }, locked: function () {
        return!u
      }, fireWith: function (t, n) {
        return!l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
      }, fire: function () {
        return d.fireWith(this, arguments), this
      }, fired: function () {
        return!!i
      }};
      return d
    }, oe.extend({Deferred: function (t) {
      var e = [
        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
        ["notify", "progress", oe.Callbacks("memory")]
      ], n = "pending", i = {state: function () {
        return n
      }, always: function () {
        return o.done(arguments).fail(arguments), this
      }, then: function () {
        var t = arguments;
        return oe.Deferred(function (n) {
          oe.each(e, function (e, r) {
            var a = oe.isFunction(t[e]) && t[e];
            o[r[1]](function () {
              var t = a && a.apply(this, arguments);
              t && oe.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
            })
          }), t = null
        }).promise()
      }, promise: function (t) {
        return null != t ? oe.extend(t, i) : i
      }}, o = {};
      return i.pipe = i.then, oe.each(e, function (t, r) {
        var a = r[2], s = r[3];
        i[r[1]] = a.add, s && a.add(function () {
          n = s
        }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
          return o[r[0] + "With"](this === o ? i : this, arguments), this
        }, o[r[0] + "With"] = a.fireWith
      }), i.promise(o), t && t.call(o, o), o
    }, when: function (t) {
      var e, n, i, o = 0, r = Q.call(arguments), a = r.length, s = 1 !== a || t && oe.isFunction(t.promise) ? a : 0, l = 1 === s ? t : oe.Deferred(), u = function (t, n, i) {
        return function (o) {
          n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
        }
      };
      if (a > 1)for (e = new Array(a), n = new Array(a), i = new Array(a); a > o; o++)r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --s;
      return s || l.resolveWith(i, r), l.promise()
    }});
    var we;
    oe.fn.ready = function (t) {
      return oe.ready.promise().done(t), this
    }, oe.extend({isReady: !1, readyWait: 1, holdReady: function (t) {
      t ? oe.readyWait++ : oe.ready(!0)
    }, ready: function (t) {
      if (t === !0 ? !--oe.readyWait : !oe.isReady) {
        if (!he.body)return setTimeout(oe.ready);
        oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (we.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
      }
    }}), oe.ready.promise = function (e) {
      if (!we)if (we = oe.Deferred(), "complete" === he.readyState)setTimeout(oe.ready); else if (he.addEventListener)he.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1); else {
        he.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
        var n = !1;
        try {
          n = null == t.frameElement && he.documentElement
        } catch (i) {
        }
        n && n.doScroll && !function o() {
          if (!oe.isReady) {
            try {
              n.doScroll("left")
            } catch (t) {
              return setTimeout(o, 50)
            }
            a(), oe.ready()
          }
        }()
      }
      return we.promise(e)
    };
    var Te, Ce = "undefined";
    for (Te in oe(ne))break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, oe(function () {
      var t, e, n, i;
      n = he.getElementsByTagName("body")[0], n && n.style && (e = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
      var t = he.createElement("div");
      if (null == ne.deleteExpando) {
        ne.deleteExpando = !0;
        try {
          delete t.test
        } catch (e) {
          ne.deleteExpando = !1
        }
      }
      t = null
    }(), oe.acceptData = function (t) {
      var e = oe.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
      return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g;
    oe.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (t) {
      return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !!t && !u(t)
    }, data: function (t, e, n) {
      return c(t, e, n)
    }, removeData: function (t, e) {
      return d(t, e)
    }, _data: function (t, e, n) {
      return c(t, e, n, !0)
    }, _removeData: function (t, e) {
      return d(t, e, !0)
    }}), oe.fn.extend({data: function (t, e) {
      var n, i, o, r = this[0], a = r && r.attributes;
      if (void 0 === t) {
        if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
          for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
          oe._data(r, "parsedAttrs", !0)
        }
        return o
      }
      return"object" == typeof t ? this.each(function () {
        oe.data(this, t)
      }) : arguments.length > 1 ? this.each(function () {
        oe.data(this, t, e)
      }) : r ? l(r, t, oe.data(r, t)) : void 0
    }, removeData: function (t) {
      return this.each(function () {
        oe.removeData(this, t)
      })
    }}), oe.extend({queue: function (t, e, n) {
      var i;
      return t ? (e = (e || "fx") + "queue", i = oe._data(t, e), n && (!i || oe.isArray(n) ? i = oe._data(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
    }, dequeue: function (t, e) {
      e = e || "fx";
      var n = oe.queue(t, e), i = n.length, o = n.shift(), r = oe._queueHooks(t, e), a = function () {
        oe.dequeue(t, e)
      };
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
    }, _queueHooks: function (t, e) {
      var n = e + "queueHooks";
      return oe._data(t, n) || oe._data(t, n, {empty: oe.Callbacks("once memory").add(function () {
        oe._removeData(t, e + "queue"), oe._removeData(t, n)
      })})
    }}), oe.fn.extend({queue: function (t, e) {
      var n = 2;
      return"string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var n = oe.queue(this, t, e);
        oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
      })
    }, dequeue: function (t) {
      return this.each(function () {
        oe.dequeue(this, t)
      })
    }, clearQueue: function (t) {
      return this.queue(t || "fx", [])
    }, promise: function (t, e) {
      var n, i = 1, o = oe.Deferred(), r = this, a = this.length, s = function () {
        --i || o.resolveWith(r, [r])
      };
      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)n = oe._data(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
      return s(), o.promise(e)
    }});
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ne = ["Top", "Right", "Bottom", "Left"], Ae = function (t, e) {
      return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
    }, De = oe.access = function (t, e, n, i, o, r, a) {
      var s = 0, l = t.length, u = null == n;
      if ("object" === oe.type(n)) {
        o = !0;
        for (s in n)oe.access(t, e, s, n[s], !0, r, a)
      } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
        return u.call(oe(t), n)
      })), e))for (; l > s; s++)e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
      return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
    }, $e = /^(?:checkbox|radio)$/i;
    !function () {
      var t = he.createElement("input"), e = he.createElement("div"), n = he.createDocumentFragment();
      if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
        ne.noCloneEvent = !1
      }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
        ne.deleteExpando = !0;
        try {
          delete e.test
        } catch (i) {
          ne.deleteExpando = !1
        }
      }
    }(), function () {
      var e, n, i = he.createElement("div");
      for (e in{submit: !0, change: !0, focusin: !0})n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
      i = null
    }();
    var Le = /^(?:input|select|textarea)$/i, je = /^key/, Oe = /^(?:mouse|pointer|contextmenu)|click/, He = /^(?:focusinfocus|focusoutblur)$/, Re = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {global: {}, add: function (t, e, n, i, o) {
      var r, a, s, l, u, c, d, p, f, h, m, g = oe._data(t);
      if (g) {
        for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
          return typeof oe === Ce || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
        }, c.elem = t), e = (e || "").match(be) || [""], s = e.length; s--;)r = Re.exec(e[s]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (u = oe.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = oe.event.special[f] || {}, d = oe.extend({type: f, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && oe.expr.match.needsContext.test(o), namespace: h.join(".")}, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, i, h, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), oe.event.global[f] = !0);
        t = null
      }
    }, remove: function (t, e, n, i, o) {
      var r, a, s, l, u, c, d, p, f, h, m, g = oe.hasData(t) && oe._data(t);
      if (g && (c = g.events)) {
        for (e = (e || "").match(be) || [""], u = e.length; u--;)if (s = Re.exec(e[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
          for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(t, a));
          l && !p.length && (d.teardown && d.teardown.call(t, h, g.handle) !== !1 || oe.removeEvent(t, f, g.handle), delete c[f])
        } else for (f in c)oe.event.remove(t, f + e[u], n, i, !0);
        oe.isEmptyObject(c) && (delete g.handle, oe._removeData(t, "events"))
      }
    }, trigger: function (e, n, i, o) {
      var r, a, s, l, u, c, d, p = [i || he], f = ee.call(e, "type") ? e.type : e, h = ee.call(e, "namespace") ? e.namespace.split(".") : [];
      if (s = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !He.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, e = e[oe.expando] ? e : new oe.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), u = oe.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
        if (!o && !u.noBubble && !oe.isWindow(i)) {
          for (l = u.delegateType || f, He.test(l + f) || (s = s.parentNode); s; s = s.parentNode)p.push(s), c = s;
          c === (i.ownerDocument || he) && p.push(c.defaultView || c.parentWindow || t)
        }
        for (d = 0; (s = p[d++]) && !e.isPropagationStopped();)e.type = d > 1 ? l : u.bindType || f, r = (oe._data(s, "events") || {})[e.type] && oe._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && oe.acceptData(s) && (e.result = r.apply(s, n), e.result === !1 && e.preventDefault());
        if (e.type = f, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && oe.acceptData(i) && a && i[f] && !oe.isWindow(i)) {
          c = i[a], c && (i[a] = null), oe.event.triggered = f;
          try {
            i[f]()
          } catch (m) {
          }
          oe.event.triggered = void 0, c && (i[a] = c)
        }
        return e.result
      }
    }, dispatch: function (t) {
      t = oe.event.fix(t);
      var e, n, i, o, r, a = [], s = Q.call(arguments), l = (oe._data(this, "events") || {})[t.type] || [], u = oe.event.special[t.type] || {};
      if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
        for (a = oe.event.handlers.call(this, t, l), e = 0; (o = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, t), t.result
      }
    }, handlers: function (t, e) {
      var n, i, o, r, a = [], s = e.delegateCount, l = t.target;
      if (s && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
        for (o = [], r = 0; s > r; r++)i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
        o.length && a.push({elem: l, handlers: o})
      }
      return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
    }, fix: function (t) {
      if (t[oe.expando])return t;
      var e, n, i, o = t.type, r = t, a = this.fixHooks[o];
      for (a || (this.fixHooks[o] = a = Oe.test(o) ? this.mouseHooks : je.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new oe.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
      return t.target || (t.target = r.srcElement || he), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (t, e) {
      return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (t, e) {
      var n, i, o, r = e.button, a = e.fromElement;
      return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || he, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
      if (this !== h() && this.focus)try {
        return this.focus(), !1
      } catch (t) {
      }
    }, delegateType: "focusin"}, blur: {trigger: function () {
      return this === h() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function () {
      return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }, _default: function (t) {
      return oe.nodeName(t.target, "a")
    }}, beforeunload: {postDispatch: function (t) {
      void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
    }}}, simulate: function (t, e, n, i) {
      var o = oe.extend(new oe.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
      i ? oe.event.trigger(o, null, e) : oe.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
    }}, oe.removeEvent = he.removeEventListener ? function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
      var i = "on" + e;
      t.detachEvent && (typeof t[i] === Ce && (t[i] = null), t.detachEvent(i, n))
    }, oe.Event = function (t, e) {
      return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
    }, oe.Event.prototype = {isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f, preventDefault: function () {
      var t = this.originalEvent;
      this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    }, stopPropagation: function () {
      var t = this.originalEvent;
      this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
    }}, oe.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (t, e) {
      oe.event.special[t] = {delegateType: e, bindType: e, handle: function (t) {
        var n, i = this, o = t.relatedTarget, r = t.handleObj;
        return(!o || o !== i && !oe.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
      }}
    }), ne.submitBubbles || (oe.event.special.submit = {setup: function () {
      return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (t) {
        var e = t.target, n = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
        n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (t) {
          t._submit_bubble = !0
        }), oe._data(n, "submitBubbles", !0))
      })
    }, postDispatch: function (t) {
      t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
    }, teardown: function () {
      return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
    }}), ne.changeBubbles || (oe.event.special.change = {setup: function () {
      return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (t) {
        "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
      }), oe.event.add(this, "click._change", function (t) {
        this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
      })), !1) : void oe.event.add(this, "beforeactivate._change", function (t) {
        var e = t.target;
        Le.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function (t) {
          !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
        }), oe._data(e, "changeBubbles", !0))
      })
    }, handle: function (t) {
      var e = t.target;
      return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
      return oe.event.remove(this, "._change"), !Le.test(this.nodeName)
    }}), ne.focusinBubbles || oe.each({focus: "focusin", blur: "focusout"}, function (t, e) {
      var n = function (t) {
        oe.event.simulate(e, t.target, oe.event.fix(t), !0)
      };
      oe.event.special[e] = {setup: function () {
        var i = this.ownerDocument || this, o = oe._data(i, e);
        o || i.addEventListener(t, n, !0), oe._data(i, e, (o || 0) + 1)
      }, teardown: function () {
        var i = this.ownerDocument || this, o = oe._data(i, e) - 1;
        o ? oe._data(i, e, o) : (i.removeEventListener(t, n, !0), oe._removeData(i, e))
      }}
    }), oe.fn.extend({on: function (t, e, n, i, o) {
      var r, a;
      if ("object" == typeof t) {
        "string" != typeof e && (n = n || e, e = void 0);
        for (r in t)this.on(r, e, n, t[r], o);
        return this
      }
      if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = f; else if (!i)return this;
      return 1 === o && (a = i, i = function (t) {
        return oe().off(t), a.apply(this, arguments)
      }, i.guid = a.guid || (a.guid = oe.guid++)), this.each(function () {
        oe.event.add(this, t, i, n, e)
      })
    }, one: function (t, e, n, i) {
      return this.on(t, e, n, i, 1)
    }, off: function (t, e, n) {
      var i, o;
      if (t && t.preventDefault && t.handleObj)return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof t) {
        for (o in t)this.off(o, e, t[o]);
        return this
      }
      return(e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function () {
        oe.event.remove(this, t, n, e)
      })
    }, trigger: function (t, e) {
      return this.each(function () {
        oe.event.trigger(t, e, this)
      })
    }, triggerHandler: function (t, e) {
      var n = this[0];
      return n ? oe.event.trigger(t, e, n, !0) : void 0
    }});
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", _e = / jQuery\d+="(?:null|\d+)"/g, Ie = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"), Pe = /^\s+/, Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, Be = /<tbody/i, We = /<|&#?\w+;/, Ue = /<(?:script|style|link)/i, ze = /checked\s*(?:[^=]|=\s*.checked.)/i, Xe = /^$|\/(?:java|ecma)script/i, Ge = /^true\/(.*)/, Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Je = m(he), Ke = Je.appendChild(he.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, oe.extend({clone: function (t, e, n) {
      var i, o, r, a, s, l = oe.contains(t.ownerDocument, t);
      if (ne.html5Clone || oe.isXMLDoc(t) || !Ie.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))for (i = g(r), s = g(t), a = 0; null != (o = s[a]); ++a)i[a] && C(o, i[a]);
      if (e)if (n)for (s = s || g(t), i = i || g(r), a = 0; null != (o = s[a]); a++)T(o, i[a]); else T(t, r);
      return i = g(r, "script"), i.length > 0 && w(i, !l && g(t, "script")), i = s = o = null, r
    }, buildFragment: function (t, e, n, i) {
      for (var o, r, a, s, l, u, c, d = t.length, p = m(e), f = [], h = 0; d > h; h++)if (r = t[h], r || 0 === r)if ("object" === oe.type(r))oe.merge(f, r.nodeType ? [r] : r); else if (We.test(r)) {
        for (s = s || p.appendChild(e.createElement("div")), l = (qe.exec(r) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, s.innerHTML = c[1] + r.replace(Me, "<$1></$2>") + c[2], o = c[0]; o--;)s = s.lastChild;
        if (!ne.leadingWhitespace && Pe.test(r) && f.push(e.createTextNode(Pe.exec(r)[0])), !ne.tbody)for (r = "table" !== l || Be.test(r) ? "<table>" !== c[1] || Be.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;)oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
        for (oe.merge(f, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
        s = p.lastChild
      } else f.push(e.createTextNode(r));
      for (s && p.removeChild(s), ne.appendChecked || oe.grep(g(f, "input"), v), h = 0; r = f[h++];)if ((!i || -1 === oe.inArray(r, i)) && (a = oe.contains(r.ownerDocument, r), s = g(p.appendChild(r), "script"), a && w(s), n))for (o = 0; r = s[o++];)Xe.test(r.type || "") && n.push(r);
      return s = null, p
    }, cleanData: function (t, e) {
      for (var n, i, o, r, a = 0, s = oe.expando, l = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (n = t[a]); a++)if ((e || oe.acceptData(n)) && (o = n[s], r = o && l[o])) {
        if (r.events)for (i in r.events)c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
        l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, V.push(o))
      }
    }}), oe.fn.extend({text: function (t) {
      return De(this, function (t) {
        return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(t))
      }, null, t, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = y(this, t);
          e.appendChild(t)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = y(this, t);
          e.insertBefore(t, e.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
      })
    }, remove: function (t, e) {
      for (var n, i = t ? oe.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (e && oe.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
      return this
    }, empty: function () {
      for (var t, e = 0; null != (t = this[e]); e++) {
        for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
        t.options && oe.nodeName(t, "select") && (t.options.length = 0)
      }
      return this
    }, clone: function (t, e) {
      return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
        return oe.clone(this, t, e)
      })
    }, html: function (t) {
      return De(this, function (t) {
        var e = this[0] || {}, n = 0, i = this.length;
        if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(_e, "") : void 0;
        if (!("string" != typeof t || Ue.test(t) || !ne.htmlSerialize && Ie.test(t) || !ne.leadingWhitespace && Pe.test(t) || Qe[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
          t = t.replace(Me, "<$1></$2>");
          try {
            for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(g(e, !1)), e.innerHTML = t);
            e = 0
          } catch (o) {
          }
        }
        e && this.empty().append(t)
      }, null, t, arguments.length)
    }, replaceWith: function () {
      var t = arguments[0];
      return this.domManip(arguments, function (e) {
        t = this.parentNode, oe.cleanData(g(this)), t && t.replaceChild(e, this)
      }), t && (t.length || t.nodeType) ? this : this.remove()
    }, detach: function (t) {
      return this.remove(t, !0)
    }, domManip: function (t, e) {
      t = J.apply([], t);
      var n, i, o, r, a, s, l = 0, u = this.length, c = this, d = u - 1, p = t[0], f = oe.isFunction(p);
      if (f || u > 1 && "string" == typeof p && !ne.checkClone && ze.test(p))return this.each(function (n) {
        var i = c.eq(n);
        f && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
      });
      if (u && (s = oe.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
        for (r = oe.map(g(s, "script"), b), o = r.length; u > l; l++)i = s, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, g(i, "script"))), e.call(this[l], i, l);
        if (o)for (a = r[r.length - 1].ownerDocument, oe.map(r, x), l = 0; o > l; l++)i = r[l], Xe.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(a, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ve, "")));
        s = n = null
      }
      return this
    }}), oe.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
      oe.fn[t] = function (t) {
        for (var n, i = 0, o = [], r = oe(t), a = r.length - 1; a >= i; i++)n = i === a ? this : this.clone(!0), oe(r[i])[e](n), K.apply(o, n.get());
        return this.pushStack(o)
      }
    });
    var Ye, Ze = {};
    !function () {
      var t;
      ne.shrinkWrapBlocks = function () {
        if (null != t)return t;
        t = !1;
        var e, n, i;
        return n = he.getElementsByTagName("body")[0], n && n.style ? (e = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(he.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
      }
    }();
    var tn, en, nn = /^margin/, on = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"), rn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function (e) {
      return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    }, en = function (t, e, n) {
      var i, o, r, a, s = t.style;
      return n = n || tn(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || oe.contains(t.ownerDocument, t) || (a = oe.style(t, e)), on.test(a) && nn.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (tn = function (t) {
      return t.currentStyle
    }, en = function (t, e, n) {
      var i, o, r, a, s = t.style;
      return n = n || tn(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), on.test(a) && !rn.test(e) && (i = s.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
    }), function () {
      function e() {
        var e, n, i, o;
        n = he.getElementsByTagName("body")[0], n && n.style && (e = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, o = e.appendChild(he.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
      }

      var n, i, o, r, a, s, l;
      n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {reliableHiddenOffsets: function () {
        return null == s && e(), s
      }, boxSizingReliable: function () {
        return null == a && e(), a
      }, pixelPosition: function () {
        return null == r && e(), r
      }, reliableMarginRight: function () {
        return null == l && e(), l
      }}))
    }(), oe.swap = function (t, e, n, i) {
      var o, r, a = {};
      for (r in e)a[r] = t.style[r], t.style[r] = e[r];
      o = n.apply(t, i || []);
      for (r in e)t.style[r] = a[r];
      return o
    };
    var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, un = new RegExp("^(" + ke + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + ke + ")", "i"), dn = {position: "absolute", visibility: "hidden", display: "block"}, pn = {letterSpacing: "0", fontWeight: "400"}, fn = ["Webkit", "O", "Moz", "ms"];
    oe.extend({cssHooks: {opacity: {get: function (t, e) {
      if (e) {
        var n = en(t, "opacity");
        return"" === n ? "1" : n
      }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"}, style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o, r, a, s = oe.camelCase(e), l = t.style;
        if (e = oe.cssProps[s] || (oe.cssProps[s] = N(l, s)), a = oe.cssHooks[e] || oe.cssHooks[s], void 0 === n)return a && "get"in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
        if (r = typeof n, "string" === r && (o = cn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(t, n, i)))))try {
          l[e] = n
        } catch (u) {
        }
      }
    }, css: function (t, e, n, i) {
      var o, r, a, s = oe.camelCase(e);
      return e = oe.cssProps[s] || (oe.cssProps[s] = N(t.style, s)), a = oe.cssHooks[e] || oe.cssHooks[s], a && "get"in a && (r = a.get(t, !0, n)), void 0 === r && (r = en(t, e, i)), "normal" === r && e in pn && (r = pn[e]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
    }}), oe.each(["height", "width"], function (t, e) {
      oe.cssHooks[e] = {get: function (t, n, i) {
        return n ? ln.test(oe.css(t, "display")) && 0 === t.offsetWidth ? oe.swap(t, dn, function () {
          return L(t, e, i)
        }) : L(t, e, i) : void 0
      }, set: function (t, n, i) {
        var o = i && tn(t);
        return D(t, n, i ? $(t, e, i, ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o), o) : 0)
      }}
    }), ne.opacity || (oe.cssHooks.opacity = {get: function (t, e) {
      return sn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    }, set: function (t, e) {
      var n = t.style, i = t.currentStyle, o = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", r = i && i.filter || n.filter || "";
      n.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(r) ? r.replace(an, o) : r + " " + o)
    }}), oe.cssHooks.marginRight = k(ne.reliableMarginRight, function (t, e) {
      return e ? oe.swap(t, {display: "inline-block"}, en, [t, "marginRight"]) : void 0
    }), oe.each({margin: "", padding: "", border: "Width"}, function (t, e) {
      oe.cssHooks[t + e] = {expand: function (n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[t + Ne[i] + e] = r[i] || r[i - 2] || r[0];
        return o
      }}, nn.test(t) || (oe.cssHooks[t + e].set = D)
    }), oe.fn.extend({css: function (t, e) {
      return De(this, function (t, e, n) {
        var i, o, r = {}, a = 0;
        if (oe.isArray(e)) {
          for (i = tn(t), o = e.length; o > a; a++)r[e[a]] = oe.css(t, e[a], !1, i);
          return r
        }
        return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
      }, t, e, arguments.length > 1)
    }, show: function () {
      return A(this, !0)
    }, hide: function () {
      return A(this)
    }, toggle: function (t) {
      return"boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        Ae(this) ? oe(this).show() : oe(this).hide()
      })
    }}), oe.Tween = j, j.prototype = {constructor: j, init: function (t, e, n, i, o, r) {
      this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var t = j.propHooks[this.prop];
      return t && t.get ? t.get(this) : j.propHooks._default.get(this)
    }, run: function (t) {
      var e, n = j.propHooks[this.prop];
      return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
    }}, j.prototype.init.prototype = j.prototype, j.propHooks = {_default: {get: function (t) {
      var e;
      return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
    }, set: function (t) {
      oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
    }}}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {set: function (t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }}, oe.easing = {linear: function (t) {
      return t
    }, swing: function (t) {
      return.5 - Math.cos(t * Math.PI) / 2
    }}, oe.fx = j.prototype.init, oe.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"), yn = /queueHooks$/, bn = [F], xn = {"*": [function (t, e) {
      var n = this.createTween(t, e), i = n.cur(), o = vn.exec(e), r = o && o[3] || (oe.cssNumber[t] ? "" : "px"), a = (oe.cssNumber[t] || "px" !== r && +i) && vn.exec(oe.css(n.elem, t)), s = 1, l = 20;
      if (a && a[3] !== r) {
        r = r || a[3], o = o || [], a = +i || 1;
        do s = s || ".5", a /= s, oe.style(n.elem, t, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
      }
      return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
    }]};
    oe.Animation = oe.extend(I, {tweener: function (t, e) {
      oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
      for (var n, i = 0, o = t.length; o > i; i++)n = t[i], xn[n] = xn[n] || [], xn[n].unshift(e)
    }, prefilter: function (t, e) {
      e ? bn.unshift(t) : bn.push(t)
    }}), oe.speed = function (t, e, n) {
      var i = t && "object" == typeof t ? oe.extend({}, t) : {complete: n || !n && e || oe.isFunction(t) && t, duration: t, easing: n && e || e && !oe.isFunction(e) && e};
      return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
      }, i
    }, oe.fn.extend({fadeTo: function (t, e, n, i) {
      return this.filter(Ae).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
    }, animate: function (t, e, n, i) {
      var o = oe.isEmptyObject(t), r = oe.speed(e, n, i), a = function () {
        var e = I(this, oe.extend({}, t), r);
        (o || oe._data(this, "finish")) && e.stop(!0)
      };
      return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
    }, stop: function (t, e, n) {
      var i = function (t) {
        var e = t.stop;
        delete t.stop, e(n)
      };
      return"string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
        var e = !0, o = null != t && t + "queueHooks", r = oe.timers, a = oe._data(this);
        if (o)a[o] && a[o].stop && i(a[o]); else for (o in a)a[o] && a[o].stop && yn.test(o) && i(a[o]);
        for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
        (e || !n) && oe.dequeue(this, t)
      })
    }, finish: function (t) {
      return t !== !1 && (t = t || "fx"), this.each(function () {
        var e, n = oe._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = oe.timers, a = i ? i.length : 0;
        for (n.finish = !0, oe.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
        for (e = 0; a > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
        delete n.finish
      })
    }}), oe.each(["toggle", "show", "hide"], function (t, e) {
      var n = oe.fn[e];
      oe.fn[e] = function (t, i, o) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, o)
      }
    }), oe.each({slideDown: H("show"), slideUp: H("hide"), slideToggle: H("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
      oe.fn[t] = function (t, n, i) {
        return this.animate(e, t, n, i)
      }
    }), oe.timers = [], oe.fx.tick = function () {
      var t, e = oe.timers, n = 0;
      for (hn = oe.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
      e.length || oe.fx.stop(), hn = void 0
    }, oe.fx.timer = function (t) {
      oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
      mn || (mn = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
      clearInterval(mn), mn = null
    }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (t, e) {
      return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
        var i = setTimeout(e, t);
        n.stop = function () {
          clearTimeout(i)
        }
      })
    }, function () {
      var t, e, n, i, o;
      e = he.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, t = he.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
    }();
    var wn = /\r/g;
    oe.fn.extend({val: function (t) {
      var e, n, i, o = this[0];
      {
        if (arguments.length)return i = oe.isFunction(t), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = i ? t.call(this, n, oe(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (t) {
            return null == t ? "" : t + ""
          })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
        });
        if (o)return e = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
      }
    }}), oe.extend({valHooks: {option: {get: function (t) {
      var e = oe.find.attr(t, "value");
      return null != e ? e : oe.trim(oe.text(t))
    }}, select: {get: function (t) {
      for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
        if (e = oe(n).val(), r)return e;
        a.push(e)
      }
      return a
    }, set: function (t, e) {
      for (var n, i, o = t.options, r = oe.makeArray(e), a = o.length; a--;)if (i = o[a], oe.inArray(oe.valHooks.option.get(i), r) >= 0)try {
        i.selected = n = !0
      } catch (s) {
        i.scrollHeight
      } else i.selected = !1;
      return n || (t.selectedIndex = -1), o
    }}}}), oe.each(["radio", "checkbox"], function () {
      oe.valHooks[this] = {set: function (t, e) {
        return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
      }}, ne.checkOn || (oe.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    });
    var Tn, Cn, En = oe.expr.attrHandle, Sn = /^(?:checked|selected)$/i, kn = ne.getSetAttribute, Nn = ne.input;
    oe.fn.extend({attr: function (t, e) {
      return De(this, oe.attr, t, e, arguments.length > 1)
    }, removeAttr: function (t) {
      return this.each(function () {
        oe.removeAttr(this, t)
      })
    }}), oe.extend({attr: function (t, e, n) {
      var i, o, r = t.nodeType;
      if (t && 3 !== r && 8 !== r && 2 !== r)return typeof t.getAttribute === Ce ? oe.prop(t, e, n) : (1 === r && oe.isXMLDoc(t) || (e = e.toLowerCase(), i = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? Cn : Tn)), void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = oe.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void oe.removeAttr(t, e))
    }, removeAttr: function (t, e) {
      var n, i, o = 0, r = e && e.match(be);
      if (r && 1 === t.nodeType)for (; n = r[o++];)i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Nn && kn || !Sn.test(n) ? t[i] = !1 : t[oe.camelCase("default-" + n)] = t[i] = !1 : oe.attr(t, n, ""), t.removeAttribute(kn ? n : i)
    }, attrHooks: {type: {set: function (t, e) {
      if (!ne.radioValue && "radio" === e && oe.nodeName(t, "input")) {
        var n = t.value;
        return t.setAttribute("type", e), n && (t.value = n), e
      }
    }}}}), Cn = {set: function (t, e, n) {
      return e === !1 ? oe.removeAttr(t, n) : Nn && kn || !Sn.test(n) ? t.setAttribute(!kn && oe.propFix[n] || n, n) : t[oe.camelCase("default-" + n)] = t[n] = !0, n
    }}, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = En[e] || oe.find.attr;
      En[e] = Nn && kn || !Sn.test(e) ? function (t, e, i) {
        var o, r;
        return i || (r = En[e], En[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, En[e] = r), o
      } : function (t, e, n) {
        return n ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
      }
    }), Nn && kn || (oe.attrHooks.value = {set: function (t, e, n) {
      return oe.nodeName(t, "input") ? void(t.defaultValue = e) : Tn && Tn.set(t, e, n)
    }}), kn || (Tn = {set: function (t, e, n) {
      var i = t.getAttributeNode(n);
      return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
    }}, En.id = En.name = En.coords = function (t, e, n) {
      var i;
      return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {get: function (t, e) {
      var n = t.getAttributeNode(e);
      return n && n.specified ? n.value : void 0
    }, set: Tn.set}, oe.attrHooks.contenteditable = {set: function (t, e, n) {
      Tn.set(t, "" === e ? !1 : e, n)
    }}, oe.each(["width", "height"], function (t, e) {
      oe.attrHooks[e] = {set: function (t, n) {
        return"" === n ? (t.setAttribute(e, "auto"), n) : void 0
      }}
    })), ne.style || (oe.attrHooks.style = {get: function (t) {
      return t.style.cssText || void 0
    }, set: function (t, e) {
      return t.style.cssText = e + ""
    }});
    var An = /^(?:input|select|textarea|button|object)$/i, Dn = /^(?:a|area)$/i;
    oe.fn.extend({prop: function (t, e) {
      return De(this, oe.prop, t, e, arguments.length > 1)
    }, removeProp: function (t) {
      return t = oe.propFix[t] || t, this.each(function () {
        try {
          this[t] = void 0, delete this[t]
        } catch (e) {
        }
      })
    }}), oe.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
      var i, o, r, a = t.nodeType;
      if (t && 3 !== a && 8 !== a && 2 !== a)return r = 1 !== a || !oe.isXMLDoc(t), r && (e = oe.propFix[e] || e, o = oe.propHooks[e]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
    }, propHooks: {tabIndex: {get: function (t) {
      var e = oe.find.attr(t, "tabindex");
      return e ? parseInt(e, 10) : An.test(t.nodeName) || Dn.test(t.nodeName) && t.href ? 0 : -1
    }}}}), ne.hrefNormalized || oe.each(["href", "src"], function (t, e) {
      oe.propHooks[e] = {get: function (t) {
        return t.getAttribute(e, 4)
      }}
    }), ne.optSelected || (oe.propHooks.selected = {get: function (t) {
      var e = t.parentNode;
      return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }}), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var $n = /[\t\r\n\f]/g;
    oe.fn.extend({addClass: function (t) {
      var e, n, i, o, r, a, s = 0, l = this.length, u = "string" == typeof t && t;
      if (oe.isFunction(t))return this.each(function (e) {
        oe(this).addClass(t.call(this, e, this.className))
      });
      if (u)for (e = (t || "").match(be) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($n, " ") : " ")) {
        for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
        a = oe.trim(i), n.className !== a && (n.className = a)
      }
      return this
    }, removeClass: function (t) {
      var e, n, i, o, r, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
      if (oe.isFunction(t))return this.each(function (e) {
        oe(this).removeClass(t.call(this, e, this.className))
      });
      if (u)for (e = (t || "").match(be) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($n, " ") : "")) {
        for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
        a = t ? oe.trim(i) : "", n.className !== a && (n.className = a)
      }
      return this
    }, toggleClass: function (t, e) {
      var n = typeof t;
      return"boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function (n) {
        oe(this).toggleClass(t.call(this, n, this.className, e), e)
      } : function () {
        if ("string" === n)for (var e, i = 0, o = oe(this), r = t.match(be) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(n === Ce || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
      })
    }, hasClass: function (t) {
      for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($n, " ").indexOf(e) >= 0)return!0;
      return!1
    }}), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
      oe.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
    }), oe.fn.extend({hover: function (t, e) {
      return this.mouseenter(t).mouseleave(e || t)
    }, bind: function (t, e, n) {
      return this.on(t, null, e, n)
    }, unbind: function (t, e) {
      return this.off(t, null, e)
    }, delegate: function (t, e, n, i) {
      return this.on(e, t, n, i)
    }, undelegate: function (t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
    }});
    var Ln = oe.now(), jn = /\?/, On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function (e) {
      if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
      var n, i = null, o = oe.trim(e + "");
      return o && !oe.trim(o.replace(On, function (t, e, o, r) {
        return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
      })) ? Function("return " + o)() : oe.error("Invalid JSON: " + e)
    }, oe.parseXML = function (e) {
      var n, i;
      if (!e || "string" != typeof e)return null;
      try {
        t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
      } catch (o) {
        n = void 0
      }
      return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), n
    };
    var Hn, Rn, Fn = /#.*$/, _n = /([?&])_=[^&]*/, In = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mn = /^(?:GET|HEAD)$/, qn = /^\/\//, Bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Wn = {}, Un = {}, zn = "*/".concat("*");
    try {
      Rn = location.href
    } catch (Xn) {
      Rn = he.createElement("a"), Rn.href = "", Rn = Rn.href
    }
    Hn = Bn.exec(Rn.toLowerCase()) || [], oe.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Rn, type: "GET", isLocal: Pn.test(Hn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": zn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (t, e) {
      return e ? q(q(t, oe.ajaxSettings), e) : q(oe.ajaxSettings, t)
    }, ajaxPrefilter: P(Wn), ajaxTransport: P(Un), ajax: function (t, e) {
      function n(t, e, n, i) {
        var o, c, v, y, x, T = e;
        2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = B(d, w, n)), y = W(d, y, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (oe.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (oe.etag[r] = x)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, o = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || T) + "", o ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(g), g = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? c : v]), m.fireWith(p, [w, T]), l && (f.trigger("ajaxComplete", [w, d]), --oe.active || oe.event.trigger("ajaxStop")))
      }

      "object" == typeof t && (e = t, t = void 0), e = e || {};
      var i, o, r, a, s, l, u, c, d = oe.ajaxSetup({}, e), p = d.context || d, f = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event, h = oe.Deferred(), m = oe.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {readyState: 0, getResponseHeader: function (t) {
        var e;
        if (2 === b) {
          if (!c)for (c = {}; e = In.exec(a);)c[e[1].toLowerCase()] = e[2];
          e = c[t.toLowerCase()]
        }
        return null == e ? null : e
      }, getAllResponseHeaders: function () {
        return 2 === b ? a : null
      }, setRequestHeader: function (t, e) {
        var n = t.toLowerCase();
        return b || (t = y[n] = y[n] || t, v[t] = e), this
      }, overrideMimeType: function (t) {
        return b || (d.mimeType = t), this
      }, statusCode: function (t) {
        var e;
        if (t)if (2 > b)for (e in t)g[e] = [g[e], t[e]]; else w.always(t[w.status]);
        return this
      }, abort: function (t) {
        var e = t || x;
        return u && u.abort(e), n(0, e), this
      }};
      if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || Rn) + "").replace(Fn, "").replace(qn, Hn[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Bn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Hn[1] && i[2] === Hn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Hn[3] || ("http:" === Hn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), M(Wn, d, e, w), 2 === b)return w;
      l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Mn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (jn.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = _n.test(r) ? r.replace(_n, "$1_=" + Ln++) : r + (jn.test(r) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (oe.lastModified[r] && w.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && w.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : d.accepts["*"]);
      for (o in d.headers)w.setRequestHeader(o, d.headers[o]);
      if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b))return w.abort();
      x = "abort";
      for (o in{success: 1, error: 1, complete: 1})w[o](d[o]);
      if (u = M(Un, d, e, w)) {
        w.readyState = 1, l && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
          w.abort("timeout")
        }, d.timeout));
        try {
          b = 1, u.send(v, n)
        } catch (T) {
          if (!(2 > b))throw T;
          n(-1, T)
        }
      } else n(-1, "No Transport");
      return w
    }, getJSON: function (t, e, n) {
      return oe.get(t, e, n, "json")
    }, getScript: function (t, e) {
      return oe.get(t, void 0, e, "script")
    }}), oe.each(["get", "post"], function (t, e) {
      oe[e] = function (t, n, i, o) {
        return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({url: t, type: e, dataType: o, data: n, success: i})
      }
    }), oe._evalUrl = function (t) {
      return oe.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, oe.fn.extend({wrapAll: function (t) {
      if (oe.isFunction(t))return this.each(function (e) {
        oe(this).wrapAll(t.call(this, e))
      });
      if (this[0]) {
        var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
          return t
        }).append(this)
      }
      return this
    }, wrapInner: function (t) {
      return this.each(oe.isFunction(t) ? function (e) {
        oe(this).wrapInner(t.call(this, e))
      } : function () {
        var e = oe(this), n = e.contents();
        n.length ? n.wrapAll(t) : e.append(t)
      })
    }, wrap: function (t) {
      var e = oe.isFunction(t);
      return this.each(function (n) {
        oe(this).wrapAll(e ? t.call(this, n) : t)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
      }).end()
    }}), oe.expr.filters.hidden = function (t) {
      return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
    }, oe.expr.filters.visible = function (t) {
      return!oe.expr.filters.hidden(t)
    };
    var Gn = /%20/g, Vn = /\[\]$/, Qn = /\r?\n/g, Jn = /^(?:submit|button|image|reset|file)$/i, Kn = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (t, e) {
      var n, i = [], o = function (t, e) {
        e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
      };
      if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t))oe.each(t, function () {
        o(this.name, this.value)
      }); else for (n in t)U(n, t[n], e, o);
      return i.join("&").replace(Gn, "+")
    }, oe.fn.extend({serialize: function () {
      return oe.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var t = oe.prop(this, "elements");
        return t ? oe.makeArray(t) : this
      }).filter(function () {
        var t = this.type;
        return this.name && !oe(this).is(":disabled") && Kn.test(this.nodeName) && !Jn.test(t) && (this.checked || !$e.test(t))
      }).map(function (t, e) {
        var n = oe(this).val();
        return null == n ? null : oe.isArray(n) ? oe.map(n, function (t) {
          return{name: e.name, value: t.replace(Qn, "\r\n")}
        }) : {name: e.name, value: n.replace(Qn, "\r\n")}
      }).get()
    }}), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
      return!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || X()
    } : z;
    var Yn = 0, Zn = {}, ti = oe.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
      for (var t in Zn)Zn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials"in ti, ti = ne.ajax = !!ti, ti && oe.ajaxTransport(function (t) {
      if (!t.crossDomain || ne.cors) {
        var e;
        return{send: function (n, i) {
          var o, r = t.xhr(), a = ++Yn;
          if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)r[o] = t.xhrFields[o];
          t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (o in n)void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
          r.send(t.hasContent && t.data || null), e = function (n, o) {
            var s, l, u;
            if (e && (o || 4 === r.readyState))if (delete Zn[a], e = void 0, r.onreadystatechange = oe.noop, o)4 !== r.readyState && r.abort(); else {
              u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
              try {
                l = r.statusText
              } catch (c) {
                l = ""
              }
              s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
            }
            u && i(s, l, u, r.getAllResponseHeaders())
          }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Zn[a] = e : e()
        }, abort: function () {
          e && e(void 0, !0)
        }}
      }
    }), oe.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (t) {
      return oe.globalEval(t), t
    }}}), oe.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), oe.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e, n = he.head || oe("head")[0] || he.documentElement;
        return{send: function (i, o) {
          e = he.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
          }, n.insertBefore(e, n.firstChild)
        }, abort: function () {
          e && e.onload(void 0, !0)
        }}
      }
    });
    var ei = [], ni = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
      var t = ei.pop() || oe.expando + "_" + Ln++;
      return this[t] = !0, t
    }}), oe.ajaxPrefilter("json jsonp", function (e, n, i) {
      var o, r, a, s = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
      return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(ni, "$1" + o) : e.jsonp !== !1 && (e.url += (jn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return a || oe.error(o + " was not called"), a[0]
      }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
        a = arguments
      }, i.always(function () {
        t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, ei.push(o)), a && oe.isFunction(r) && r(a[0]), a = r = void 0
      }), "script") : void 0
    }), oe.parseHTML = function (t, e, n) {
      if (!t || "string" != typeof t)return null;
      "boolean" == typeof e && (n = e, e = !1), e = e || he;
      var i = de.exec(t), o = !n && [];
      return i ? [e.createElement(i[1])] : (i = oe.buildFragment([t], e, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var ii = oe.fn.load;
    oe.fn.load = function (t, e, n) {
      if ("string" != typeof t && ii)return ii.apply(this, arguments);
      var i, o, r, a = this, s = t.indexOf(" ");
      return s >= 0 && (i = oe.trim(t.slice(s, t.length)), t = t.slice(0, s)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && oe.ajax({url: t, type: r, dataType: "html", data: e}).done(function (t) {
        o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
      }).complete(n && function (t, e) {
        a.each(n, o || [t.responseText, e, t])
      }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      oe.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), oe.expr.filters.animated = function (t) {
      return oe.grep(oe.timers, function (e) {
        return t === e.elem
      }).length
    };
    var oi = t.document.documentElement;
    oe.offset = {setOffset: function (t, e, n) {
      var i, o, r, a, s, l, u, c = oe.css(t, "position"), d = oe(t), p = {};
      "static" === c && (t.style.position = "relative"), s = d.offset(), r = oe.css(t, "top"), l = oe.css(t, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + o), "using"in e ? e.using.call(t, p) : d.css(p)
    }}, oe.fn.extend({offset: function (t) {
      if (arguments.length)return void 0 === t ? this : this.each(function (e) {
        oe.offset.setOffset(this, t, e)
      });
      var e, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
      if (r)return e = r.documentElement, oe.contains(e, o) ? (typeof o.getBoundingClientRect !== Ce && (i = o.getBoundingClientRect()), n = G(r), {top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}) : i
    }, position: function () {
      if (this[0]) {
        var t, e, n = {top: 0, left: 0}, i = this[0];
        return"fixed" === oe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (n = t.offset()), n.top += oe.css(t[0], "borderTopWidth", !0), n.left += oe.css(t[0], "borderLeftWidth", !0)), {top: e.top - n.top - oe.css(i, "marginTop", !0), left: e.left - n.left - oe.css(i, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent || oi; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");)t = t.offsetParent;
        return t || oi
      })
    }}), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
      var n = /Y/.test(e);
      oe.fn[t] = function (i) {
        return De(this, function (t, i, o) {
          var r = G(t);
          return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : t[i] = o)
        }, t, i, arguments.length, null)
      }
    }), oe.each(["top", "left"], function (t, e) {
      oe.cssHooks[e] = k(ne.pixelPosition, function (t, n) {
        return n ? (n = en(t, e), on.test(n) ? oe(t).position()[e] + "px" : n) : void 0
      })
    }), oe.each({Height: "height", Width: "width"}, function (t, e) {
      oe.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
        oe.fn[i] = function (i, o) {
          var r = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || o === !0 ? "margin" : "border");
          return De(this, function (e, n, i) {
            var o;
            return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? oe.css(e, n, a) : oe.style(e, n, i, a)
          }, e, r ? i : void 0, r, null)
        }
      })
    }), oe.fn.size = function () {
      return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
      return oe
    });
    var ri = t.jQuery, ai = t.$;
    return oe.noConflict = function (e) {
      return t.$ === oe && (t.$ = ai), e && t.jQuery === oe && (t.jQuery = ri), oe
    }, typeof e === Ce && (t.jQuery = t.$ = oe), oe
  }), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]", buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]", CSRFProtection: function (e) {
      var n = t('meta[name="csrf-token"]').attr("content");
      n && e.setRequestHeader("X-CSRF-Token", n)
    }, refreshCSRFTokens: function () {
      var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
      t('form input[name="' + n + '"]').val(e)
    }, fire: function (e, n, i) {
      var o = t.Event(n);
      return e.trigger(o, i), o.result !== !1
    }, confirm: function (t) {
      return confirm(t)
    }, ajax: function (e) {
      return t.ajax(e)
    }, href: function (t) {
      return t.attr("href")
    }, handleRemote: function (i) {
      var o, r, a, s, l, u, c, d;
      if (n.fire(i, "ajax:before")) {
        if (s = i.data("cross-domain"), l = s === e ? null : s, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
          o = i.attr("method"), r = i.attr("action"), a = i.serializeArray();
          var p = i.data("ujs:submit-button");
          p && (a.push(p), i.data("ujs:submit-button", null))
        } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
        return d = {type: o || "GET", data: a, dataType: c, beforeSend: function (t, o) {
          return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [t, o]) ? void i.trigger("ajax:send", t) : !1
        }, success: function (t, e, n) {
          i.trigger("ajax:success", [t, e, n])
        }, complete: function (t, e) {
          i.trigger("ajax:complete", [t, e])
        }, error: function (t, e, n) {
          i.trigger("ajax:error", [t, e, n])
        }, crossDomain: l}, u && (d.xhrFields = {withCredentials: u}), r && (d.url = r), n.ajax(d)
      }
      return!1
    }, handleMethod: function (i) {
      var o = n.href(i), r = i.data("method"), a = i.attr("target"), s = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), u = t('<form method="post" action="' + o + '"></form>'), c = '<input name="_method" value="' + r + '" type="hidden" />';
      l !== e && s !== e && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
    }, formElements: function (e, n) {
      return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
    }, disableFormElements: function (e) {
      n.formElements(e, n.disableSelector).each(function () {
        n.disableFormElement(t(this))
      })
    }, disableFormElement: function (t) {
      var n, i;
      n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
    }, enableFormElements: function (e) {
      n.formElements(e, n.enableSelector).each(function () {
        n.enableFormElement(t(this))
      })
    }, enableFormElement: function (t) {
      var e = t.is("button") ? "html" : "val";
      t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
    }, allowAction: function (t) {
      var e, i = t.data("confirm"), o = !1;
      return i ? (n.fire(t, "confirm") && (o = n.confirm(i), e = n.fire(t, "confirm:complete", [o])), o && e) : !0
    }, blankInputs: function (e, n, i) {
      var o, r, a = t(), s = n || "input,textarea", l = e.find(s);
      return l.each(function () {
        if (o = t(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
          if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length)return!0;
          a = a.add(o)
        }
      }), a.length ? a : !1
    }, nonBlankInputs: function (t, e) {
      return n.blankInputs(t, e, !0)
    }, stopEverything: function (e) {
      return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
    }, disableElement: function (t) {
      var i = t.data("disable-with");
      t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function (t) {
        return n.stopEverything(t)
      })
    }, enableElement: function (t) {
      t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
    }}, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
      t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function () {
      t(t.rails.enableSelector).each(function () {
        var e = t(this);
        e.data("ujs:enable-with") && t.rails.enableFormElement(e)
      }), t(t.rails.linkDisableSelector).each(function () {
        var e = t(this);
        e.data("ujs:enable-with") && t.rails.enableElement(e)
      })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
      n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
      n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
      var o = t(this), r = o.data("method"), a = o.data("params"), s = i.metaKey || i.ctrlKey;
      if (!n.allowAction(o))return n.stopEverything(i);
      if (!s && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== e) {
        if (s && (!r || "GET" === r) && !a)return!0;
        var l = n.handleRemote(o);
        return l === !1 ? n.enableElement(o) : l.fail(function () {
          n.enableElement(o)
        }), !1
      }
      return r ? (n.handleMethod(o), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
      var i = t(this);
      if (!n.allowAction(i))return n.stopEverything(e);
      i.is(n.buttonDisableSelector) && n.disableFormElement(i);
      var o = n.handleRemote(i);
      return o === !1 ? n.enableFormElement(i) : o.fail(function () {
        n.enableFormElement(i)
      }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
      var i = t(this);
      return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
      var o, r, a = t(this), s = a.data("remote") !== e;
      if (!n.allowAction(a))return n.stopEverything(i);
      if (a.attr("novalidate") == e && (o = n.blankInputs(a, n.requiredInputSelector), o && n.fire(a, "ajax:aborted:required", [o])))return n.stopEverything(i);
      if (s) {
        if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
          setTimeout(function () {
            n.disableFormElements(a)
          }, 13);
          var l = n.fire(a, "ajax:aborted:file", [r]);
          return l || setTimeout(function () {
            n.enableFormElements(a)
          }, 13), l
        }
        return n.handleRemote(a), !1
      }
      setTimeout(function () {
        n.disableFormElements(a)
      }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
      var i = t(this);
      if (!n.allowAction(i))return n.stopEverything(e);
      var o = i.attr("name"), r = o ? {name: o, value: i.val()} : null;
      i.closest("form").data("ujs:submit-button", r)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
      this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
      this == e.target && n.enableFormElements(t(this))
    }), t(function () {
      n.refreshCSRFTokens()
    }))
  }(jQuery), function () {
    var t, e, n, i, o, r, a, s, l, u, c, d, p, f, h, m, g, v, y, b, x, w, T, C, E, S, k, N, A, D, $, L, j, O, H, R, F, _, I, P, M, q, B, W, U, z, X, G, V, Q, J, K, Y, Z, te, ee, ne = [].indexOf || function (t) {
      for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
      return-1
    }, ie = function (t, e) {
      function n() {
        this.constructor = t
      }

      for (var i in e)oe.call(e, i) && (t[i] = e[i]);
      return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, oe = {}.hasOwnProperty, re = [].slice, ae = function (t, e) {
      return function () {
        return t.apply(e, arguments)
      }
    };
    O = {}, p = 10, K = !1, I = null, y = null, L = null, q = null, ee = null, i = {BEFORE_CHANGE: "page:before-change", FETCH: "page:fetch", RECEIVE: "page:receive", CHANGE: "page:change", UPDATE: "page:update", LOAD: "page:load", RESTORE: "page:restore", BEFORE_UNLOAD: "page:before-unload", EXPIRE: "page:expire"}, C = function (t) {
      var e;
      return t = new n(t), X(), d(), null != I && I.start(), K && (e = Y(t.absolute)) ? (E(e), S(t, null, !1)) : S(t, Q)
    }, Y = function (t) {
      var e;
      return e = O[t], e && !e.transitionCacheDisabled ? e : void 0
    }, x = function (t) {
      return null == t && (t = !0), K = t
    }, b = function (t) {
      return null == t && (t = !0), u ? t ? null != I ? I : I = new r("html") : (null != I && I.uninstall(), I = null) : void 0
    }, S = function (t, e, n) {
      return null == n && (n = !0), Z(i.FETCH, {url: t.absolute}), null != ee && ee.abort(), ee = new XMLHttpRequest, ee.open("GET", t.withoutHashForIE10compatibility(), !0), ee.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), ee.setRequestHeader("X-XHR-Referer", q), ee.onload = function () {
        var n;
        return Z(i.RECEIVE, {url: t.absolute}), (n = _()) ? (B(t), W(), f.apply(null, T(n)), j(), "function" == typeof e && e(), Z(i.LOAD)) : document.location.href = v() || t.absolute
      }, I && n && (ee.onprogress = function () {
        return function (t) {
          var e;
          return e = t.lengthComputable ? t.loaded / t.total * 100 : I.value + (100 - I.value) / 10, I.advanceTo(e)
        }
      }(this)), ee.onloadend = function () {
        return ee = null
      }, ee.onerror = function () {
        return document.location.href = t.absolute
      }, ee.send()
    }, E = function (t) {
      return null != ee && ee.abort(), f(t.title, t.body), P(t), Z(i.RESTORE)
    }, d = function () {
      var t;
      return t = new n(y.url), O[t.absolute] = {url: t.relative, body: document.body, title: document.title, positionY: window.pageYOffset, positionX: window.pageXOffset, cachedAt: (new Date).getTime(), transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")}, m(p)
    }, R = function (t) {
      return null == t && (t = p), /^[\d]+$/.test(t) ? p = parseInt(t) : void 0
    }, m = function (t) {
      var e, n, o, r, a, s;
      for (a = Object.keys(O), e = a.map(function (t) {
        return O[t].cachedAt
      }).sort(function (t, e) {
        return e - t
      }), s = [], n = 0, r = a.length; r > n; n++)o = a[n], O[o].cachedAt <= e[t] && (Z(i.EXPIRE, O[o]), s.push(delete O[o]));
      return s
    }, f = function (e, n, o, r) {
      return Z(i.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(n, document.body), null != o && t.update(o), J(), r && w(), y = window.history.state, null != I && I.done(), Z(i.CHANGE), Z(i.UPDATE)
    }, w = function () {
      var t, e, n, i, o, r, a, s, l, u, c, d;
      for (d = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, o = d.length; o > n; n++)if (c = d[n], "" === (l = c.type) || "text/javascript" === l) {
        for (e = document.createElement("script"), u = c.attributes, i = 0, r = u.length; r > i; i++)t = u[i], e.setAttribute(t.name, t.value);
        c.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(c.innerHTML)), s = c.parentNode, a = c.nextSibling, s.removeChild(c), s.insertBefore(e, a)
      }
    }, G = function (t) {
      return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, J = function () {
      var t, e;
      return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
    }, B = function (t) {
      return(t = new n(t)).absolute !== q ? window.history.pushState({turbolinks: !0, url: t.absolute}, "", t.absolute) : void 0
    }, W = function () {
      var t, e;
      return(t = ee.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
    }, v = function () {
      var t;
      return null != (t = ee.getResponseHeader("Location")) && new n(t).crossOrigin() ? t : void 0
    }, X = function () {
      return q = document.location.href
    }, z = function () {
      return window.history.replaceState({turbolinks: !0, url: document.location.href}, "", document.location.href)
    }, U = function () {
      return y = window.history.state
    }, j = function () {
      var t;
      return navigator.userAgent.match(/Firefox/) && !(t = new n).hasNoHash() ? (window.history.replaceState(y, "", t.withoutHash()), document.location.hash = t.hash) : void 0
    }, P = function (t) {
      return window.scrollTo(t.positionX, t.positionY)
    }, Q = function () {
      return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, h = function (t) {
      var e, n, i;
      if (null == t || "object" != typeof t)return t;
      e = new t.constructor;
      for (n in t)i = t[n], e[n] = h(i);
      return e
    }, F = function (t) {
      var e, n;
      return n = (null != (e = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? e[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n
    }, Z = function (t, e) {
      var n;
      return"undefined" != typeof Prototype && Event.fire(document, t, e, !0), n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
    }, H = function (t) {
      return!Z(i.BEFORE_CHANGE, {url: t})
    }, _ = function () {
      var t, e, n, i, o, r;
      return e = function () {
        var t;
        return 400 <= (t = ee.status) && 600 > t
      }, r = function () {
        var t;
        return null != (t = ee.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
      }, i = function (t) {
        var e, n, i, o, r;
        for (o = t.querySelector("head").childNodes, r = [], e = 0, n = o.length; n > e; e++)i = o[e], null != ("function" == typeof i.getAttribute ? i.getAttribute("data-turbolinks-track") : void 0) && r.push(i.getAttribute("src") || i.getAttribute("href"));
        return r
      }, t = function (t) {
        var e;
        return L || (L = i(document)), e = i(t), e.length !== L.length || o(e, L).length !== L.length
      }, o = function (t, e) {
        var n, i, o, r, a;
        for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), r = [], n = 0, i = t.length; i > n; n++)a = t[n], ne.call(e, a) >= 0 && r.push(a);
        return r
      }, !e() && r() && (n = g(ee.responseText), n && !t(n)) ? n : void 0
    }, T = function (e) {
      var n;
      return n = e.querySelector("title"), [null != n ? n.textContent : void 0, G(e.querySelector("body")), t.get(e).token, "runScripts"]
    }, t = {get: function (t) {
      var e;
      return null == t && (t = document), {node: e = t.querySelector('meta[name="csrf-token"]'), token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0}
    }, update: function (t) {
      var e;
      return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
    }}, g = function (t) {
      var e;
      return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
    }, n = function () {
      function t(e) {
        return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
      }

      return t.prototype.withoutHash = function () {
        return this.href.replace(this.hash, "").replace("#", "")
      }, t.prototype.withoutHashForIE10compatibility = function () {
        return this.withoutHash()
      }, t.prototype.hasNoHash = function () {
        return 0 === this.hash.length
      }, t.prototype.crossOrigin = function () {
        return this.origin !== (new t).origin
      }, t.prototype._parse = function () {
        var t;
        return(null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
      }, t
    }(), o = function (t) {
      function e(t) {
        return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
      }

      return ie(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
        var t, n, i, o;
        for (n = 1 <= arguments.length ? re.call(arguments, 0) : [], i = 0, o = n.length; o > i; i++)t = n[i], e.HTML_EXTENSIONS.push(t);
        return e.HTML_EXTENSIONS
      }, e.prototype.shouldIgnore = function () {
        return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
      }, e.prototype._anchored = function () {
        return(this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
      }, e.prototype._nonHtml = function () {
        return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
      }, e.prototype._optOut = function () {
        var t, e;
        for (e = this.originalElement; !t && e !== document;)t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
        return t
      }, e.prototype._target = function () {
        return 0 !== this.link.target.length
      }, e
    }(n), e = function () {
      function t(t) {
        this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (H(this.link.absolute) || te(this.link.href), this.event.preventDefault()))
      }

      return t.installHandlerLast = function (e) {
        return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
      }, t.handle = function (e) {
        return new t(e)
      }, t.prototype._extractLink = function () {
        var t;
        for (t = this.event.target; t.parentNode && "A" !== t.nodeName;)t = t.parentNode;
        return"A" === t.nodeName && 0 !== t.href.length ? this.link = new o(t) : void 0
      }, t.prototype._validForTurbolinks = function () {
        return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
      }, t.prototype._nonStandardClick = function () {
        return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
      }, t
    }(), r = function () {
      function t(t) {
        this.elementSelector = t, this._trickle = ae(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
      }

      var e;
      return e = "turbolinks-progress-bar", t.prototype.install = function () {
        return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
      }, t.prototype.uninstall = function () {
        return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
      }, t.prototype.start = function () {
        return this.advanceTo(5)
      }, t.prototype.advanceTo = function (t) {
        var e;
        if (t > (e = this.value) && 100 >= e) {
          if (this.value = t, this._updateStyle(), 100 === this.value)return this._stopTrickle();
          if (this.value > 0)return this._startTrickle()
        }
      }, t.prototype.done = function () {
        return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
      }, t.prototype._reset = function () {
        var t;
        return t = this.opacity, setTimeout(function (t) {
          return function () {
            return t.opacity = 0, t._updateStyle()
          }
        }(this), this.speed / 2), setTimeout(function (e) {
          return function () {
            return e.value = 0, e.opacity = t, e._withSpeed(0, function () {
              return e._updateStyle(!0)
            })
          }
        }(this), this.speed)
      }, t.prototype._startTrickle = function () {
        return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
      }, t.prototype._stopTrickle = function () {
        return delete this.trickling
      }, t.prototype._trickle = function () {
        return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
      }, t.prototype._withSpeed = function (t, e) {
        var n, i;
        return n = this.speed, this.speed = t, i = e(), this.speed = n, i
      }, t.prototype._updateStyle = function (t) {
        return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
      }, t.prototype._changeContentToForceRepaint = function () {
        return this.content = "" === this.content ? " " : ""
      }, t.prototype._createCSSRule = function () {
        return this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
      }, t
    }(), c = function (t) {
      return setTimeout(t, 500)
    }, A = function () {
      return document.addEventListener("DOMContentLoaded", function () {
        return Z(i.CHANGE), Z(i.UPDATE)
      }, !0)
    }, $ = function () {
      return"undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
        return jQuery.trim(e.responseText) ? Z(i.UPDATE) : void 0
      }) : void 0
    }, D = function (t) {
      var e, i;
      return(null != (i = t.state) ? i.turbolinks : void 0) ? (e = O[new n(t.state.url).absolute]) ? (d(), E(e)) : te(t.target.location.href) : void 0
    }, N = function () {
      return z(), U(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function () {
        return z(), U()
      }, !1), c(function () {
        return window.addEventListener("popstate", D, !1)
      })
    }, k = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && k, a = !navigator.userAgent.match(/CriOS\//), V = "GET" === (M = F("request_method")) || "" === M, u = l && a && V, s = document.addEventListener && document.createEvent, s && (A(), $()), u ? (te = C, N()) : te = function (t) {
      return document.location.href = t
    }, this.Turbolinks = {visit: te, pagesCached: R, enableTransitionCache: x, enableProgressBar: b, allowLinkExtensions: o.allowExtensions, supported: u, EVENTS: h(i)}
  }.call(this), $(document).on("page:change", function () {
    if (function (t, e, n, i, o, r, a) {
      t.GoogleAnalyticsObject = o, t[o] = t[o] || function () {
        (t[o].q = t[o].q || []).push(arguments)
      }, t[o].l = 1 * new Date, r = e.createElement(n), a = e.getElementsByTagName(n)[0], r.async = 1, r.src = i, a.parentNode.insertBefore(r, a)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-61019072-1", "auto"), ga("send", "pageview"), $(".search-input").keyup(function (t) {
      13 == t.keyCode && redirect()
    }), $(".glyphicon-search").click(function () {
      redirect()
    }), "" != $(".username").text().trim()) {
      var t = {lines: 9, length: 0, width: 12, radius: 40, corners: 1, rotate: 0, direction: 1, color: "#000", speed: 1.3, trail: 36, shadow: !1, hwaccel: !0, className: "spinner", zIndex: 2e9, top: "50%", left: "50%"}, e = document.getElementById("spin"), n = new Spinner(t).spin(e);
      setTimeout(function () {
        $(".loading-message").fadeIn()
      }, 5e3), $.ajax({method: "get", url: document.URL + "/statistics", dataType: "json", success: function (t) {
        n.stop(), $(".loading").hide(), $(".loading-message").remove(), $(".statistics").fadeIn(function () {
          var e = t.repo_lang, n = t.code_lang;
          $(".repo-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
            var t = "\u25cf <strong>Repos:</strong> " + this.y + " (" + this.percentage.toFixed(1) + "%)";
            return t
          }}, series: [
            {type: "pie", name: "Repos", data: chartHelper(e), dataLabels: {enabled: !0}}
          ]});
          var i = "Of  " + t.total_repos + " repos, " + repoLabelHelper(e) + "The rest were too small to be identified.";
          $(".repo-languages p").html(i), $(".code-languages .chart").highcharts({credits: {enabled: !1}, chart: {backgroundColor: "transparent"}, title: {text: null}, tooltip: {formatter: function () {
            var t = "\u25cf <strong>Characters:</strong> " + numberWithCommas(this.y) + "<br>\u25cf <strong>Lines:</strong> " + numberWithCommas((this.y / 30).toFixed(0));
            return t
          }}, series: [
            {type: "pie", name: "Characters", data: chartHelper(n), dataLabels: {enabled: !0}}
          ]});
          var o = "A total of " + kFormatter(lineFormatter(t.total_characters)) + " lines, of which " + codeRepoHelper(n);
          $(".code-languages p").html(o), $(".stars table td").first().html(kFormatter(t.total_stars)), $(".stars table td").last().html(kFormatter(t.average_stars)), $(".forks table td").first().html(kFormatter(t.total_forks)), $(".forks table td").last().html(kFormatter(t.average_forks)), $(".pages table td").first().html(t.total_pages), $(".pages table td").last().html((100 * t.percentage_pages).toFixed(0) + "%"), $(".issues table td").first().html(t.total_issues), $(".issues table td").last().html(t.average_issues)
        })
      }})
    }
  }), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
        o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
      })
    }

    var n = function (e, i) {
      this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {offset: 0, target: window}, n.prototype.getState = function (t, e, n, i) {
      var o = this.$target.scrollTop(), r = this.$element.offset(), a = this.$target.height();
      if (null != n && "top" == this.affixed)return n > o ? "top" : !1;
      if ("bottom" == this.affixed)return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + a ? !1 : "bottom";
      var s = null == this.affixed, l = s ? o : r.top, u = s ? a : e;
      return null != n && n >= o ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
      if (this.pinnedOffset)return this.pinnedOffset;
      this.$element.removeClass(n.RESET).addClass("affix");
      var t = this.$target.scrollTop(), e = this.$element.offset();
      return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
      setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
      if (this.$element.is(":visible")) {
        var e = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom, a = t(document.body).height();
        "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
        var s = this.getState(a, e, o, r);
        if (this.affixed != s) {
          null != this.unpin && this.$element.css("top", "");
          var l = "affix" + (s ? "-" + s : ""), u = t.Event(l + ".bs.affix");
          if (this.$element.trigger(u), u.isDefaultPrevented())return;
          this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == s && this.$element.offset({top: a - e - r})
      }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
      return t.fn.affix = i, this
    }, t(window).on("load", function () {
      t('[data-spy="affix"]').each(function () {
        var n = t(this), i = n.data();
        i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
      })
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this), o = n.data("bs.alert");
        o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
      })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
      t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
      function n() {
        a.detach().trigger("closed.bs.alert").remove()
      }

      var o = t(this), r = o.attr("data-target");
      r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
      var a = t(r);
      e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
      return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
        o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
      })
    }

    var n = function (e, i) {
      this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.4", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
      var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
      e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
        i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
      }, this), 0)
    }, n.prototype.toggle = function () {
      var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
      if (e.length) {
        var n = this.$element.find("input");
        "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
      } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
      t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
      return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
      var i = t(n.target);
      i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
      t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.carousel"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), a = "string" == typeof e ? e : r.slide;
        o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
      })
    }

    var n = function (e, n) {
      this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {interval: 5e3, pause: "hover", wrap: !0, keyboard: !0}, n.prototype.keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
          case 37:
            this.prev();
            break;
          case 39:
            this.next();
            break;
          default:
            return
        }
        t.preventDefault()
      }
    }, n.prototype.cycle = function (e) {
      return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
      return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
      var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
      if (i && !this.options.wrap)return e;
      var o = "prev" == t ? -1 : 1, r = (n + o) % this.$items.length;
      return this.$items.eq(r)
    }, n.prototype.to = function (t) {
      var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
      return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
        e.to(t)
      }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
      return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
      return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
      return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
      var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(e, o), a = this.interval, s = "next" == e ? "left" : "right", l = this;
      if (r.hasClass("active"))return this.sliding = !1;
      var u = r[0], c = t.Event("slide.bs.carousel", {relatedTarget: u, direction: s});
      if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
          this.$indicators.find(".active").removeClass("active");
          var d = t(this.$indicators.children()[this.getItemIndex(r)]);
          d && d.addClass("active")
        }
        var p = t.Event("slid.bs.carousel", {relatedTarget: u, direction: s});
        return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function () {
          r.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
            l.$element.trigger(p)
          }, 0)
        }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
      }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
      return t.fn.carousel = i, this
    };
    var o = function (n) {
      var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      if (r.hasClass("carousel")) {
        var a = t.extend({}, r.data(), o.data()), s = o.attr("data-slide-to");
        s && (a.interval = !1), e.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
      }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
      t('[data-ride="carousel"]').each(function () {
        var n = t(this);
        e.call(n, n.data())
      })
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
      return t(i)
    }

    function n(e) {
      return this.each(function () {
        var n = t(this), o = n.data("bs.collapse"), r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
      })
    }

    var i = function (e, n) {
      this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.4", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
      var t = this.$element.hasClass("width");
      return t ? "width" : "height"
    }, i.prototype.show = function () {
      if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
          var r = t.Event("show.bs.collapse");
          if (this.$element.trigger(r), !r.isDefaultPrevented()) {
            o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
            var a = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
            var s = function () {
              this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
            };
            if (!t.support.transition)return s.call(this);
            var l = t.camelCase(["scroll", a].join("-"));
            this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
          }
        }
      }
    }, i.prototype.hide = function () {
      if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
          var n = this.dimension();
          this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
          var o = function () {
            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
          };
          return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
        }
      }
    }, i.prototype.toggle = function () {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
      return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
        var o = t(i);
        this.addAriaAndCollapsedClass(e(o), o)
      }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
      var n = t.hasClass("in");
      t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
      return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
      var o = t(this);
      o.attr("data-target") || i.preventDefault();
      var r = e(o), a = r.data("bs.collapse"), s = a ? "toggle" : o.data();
      n.call(r, s)
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      e && 3 === e.which || (t(o).remove(), t(r).each(function () {
        var i = t(this), o = n(i), r = {relatedTarget: this};
        o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r)))
      }))
    }

    function n(e) {
      var n = e.attr("data-target");
      n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && t(n);
      return i && i.length ? i : e.parent()
    }

    function i(e) {
      return this.each(function () {
        var n = t(this), i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
      })
    }

    var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', a = function (e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.4", a.prototype.toggle = function (i) {
      var o = t(this);
      if (!o.is(".disabled, :disabled")) {
        var r = n(o), a = r.hasClass("open");
        if (e(), !a) {
          "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
          var s = {relatedTarget: this};
          if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented())return;
          o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
        }
        return!1
      }
    }, a.prototype.keydown = function (e) {
      if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
        var i = t(this);
        if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
          var o = n(i), a = o.hasClass("open");
          if (!a && 27 != e.which || a && 27 == e.which)return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
          var s = " li:not(.disabled):visible a", l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
          if (l.length) {
            var u = l.index(e.target);
            38 == e.which && u > 0 && u--, 40 == e.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
          }
        }
      }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
      return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
  }(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
      return this.each(function () {
        var o = t(this), r = o.data("bs.modal"), a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", r = new n(this, a)), "string" == typeof e ? r[e](i) : a.show && r.show(i)
      })
    }

    var n = function (e, n) {
      this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
        this.$element.trigger("loaded.bs.modal")
      }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, n.prototype.toggle = function (t) {
      return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
      var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
      this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
        i.$element.one("mouseup.dismiss.bs.modal", function (e) {
          t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
        })
      }), this.backdrop(function () {
        var o = t.support.transition && i.$element.hasClass("fade");
        i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
        var r = t.Event("shown.bs.modal", {relatedTarget: e});
        o ? i.$dialog.one("bsTransitionEnd", function () {
          i.$element.trigger("focus").trigger(r)
        }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
      }))
    }, n.prototype.hide = function (e) {
      e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
      t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
        this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
      }, this))
    }, n.prototype.escape = function () {
      this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
        27 == t.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
      this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
      var t = this;
      this.$element.hide(), this.backdrop(function () {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
      })
    }, n.prototype.removeBackdrop = function () {
      this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
      var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
        var r = t.support.transition && o;
        if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
        r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
      } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var a = function () {
          i.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
      } else e && e()
    }, n.prototype.handleUpdate = function () {
      this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
      var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""})
    }, n.prototype.resetAdjustments = function () {
      this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
      var t = window.innerWidth;
      if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
      var t = parseInt(this.$body.css("padding-right") || 0, 10);
      this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
      this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", this.$body.append(t);
      var e = t.offsetWidth - t.clientWidth;
      return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
      return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
      var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), a = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
      i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
        t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
          i.is(":visible") && i.trigger("focus")
        })
      }), e.call(r, a, this)
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
      this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
        o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
      })
    }

    e.VERSION = "3.3.4", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
      return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
      var e = this, n = "offset", i = 0;
      this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
        var e = t(this), o = e.data("target") || e.attr("href"), r = /^#./.test(o) && t(o);
        return r && r.length && r.is(":visible") && [
          [r[n]().top + i, o]
        ] || null
      }).sort(function (t, e) {
        return t[0] - e[0]
      }).each(function () {
        e.offsets.push(this[0]), e.targets.push(this[1])
      })
    }, e.prototype.process = function () {
      var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, a = this.activeTarget;
      if (this.scrollHeight != n && this.refresh(), e >= i)return a != (t = r[r.length - 1]) && this.activate(t);
      if (a && e < o[0])return this.activeTarget = null, this.clear();
      for (t = o.length; t--;)a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
      this.activeTarget = e, this.clear();
      var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
      i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
      t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
      return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
      t('[data-spy="scroll"]').each(function () {
        var e = t(this);
        n.call(e, e.data())
      })
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.tab");
        o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
      })
    }

    var n = function (e) {
      this.element = t(e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
      var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
      if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var o = n.find(".active:last a"), r = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: o[0]});
        if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
          var s = t(i);
          this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
            o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({type: "shown.bs.tab", relatedTarget: o[0]})
          })
        }
      }
    }, n.prototype.activate = function (e, i, o) {
      function r() {
        a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
      }

      var a = i.find("> .active"), s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
      a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
      return t.fn.tab = i, this
    };
    var o = function (n) {
      n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
  }(jQuery), +function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"), e = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"};
      for (var n in e)if (void 0 !== t.style[n])return{end: e[n]};
      return!1
    }

    t.fn.emulateTransitionEnd = function (e) {
      var n = !1, i = this;
      t(this).one("bsTransitionEnd", function () {
        n = !0
      });
      var o = function () {
        n || t(i).trigger(t.support.transition.end)
      };
      return setTimeout(o, e), this
    }, t(function () {
      t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function (e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }})
    })
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
      })
    }

    var n = function (t, e) {
      this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: {selector: "body", padding: 0}}, n.prototype.init = function (e, n, i) {
      if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
      for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
        var a = o[r];
        if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
          var s = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
          this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
      }
      this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual", selector: ""}) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
      return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
      return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay, hide: e.delay}), e
    }, n.prototype.getDelegateOptions = function () {
      var e = {}, n = this.getDefaults();
      return this._options && t.each(this._options, function (t, i) {
        n[t] != i && (e[t] = i)
      }), e
    }, n.prototype.enter = function (e) {
      var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
        "in" == n.hoverState && n.show()
      }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function (e) {
      var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
        "out" == n.hoverState && n.hide()
      }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function () {
      var e = t.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (e.isDefaultPrevented() || !i)return;
        var o = this, r = this.tip(), a = this.getUID(this.type);
        this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
        var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, u = l.test(s);
        u && (s = s.replace(l, "") || "top"), r.detach().css({top: 0, left: 0, display: "block"}).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
        var c = this.getPosition(), d = r[0].offsetWidth, p = r[0].offsetHeight;
        if (u) {
          var f = s, h = this.options.container ? t(this.options.container) : this.$element.parent(), m = this.getPosition(h);
          s = "bottom" == s && c.bottom + p > m.bottom ? "top" : "top" == s && c.top - p < m.top ? "bottom" : "right" == s && c.right + d > m.width ? "left" : "left" == s && c.left - d < m.left ? "right" : s, r.removeClass(f).addClass(s)
        }
        var g = this.getCalculatedOffset(s, c, d, p);
        this.applyPlacement(g, s);
        var v = function () {
          var t = o.hoverState;
          o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
        };
        t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
      }
    }, n.prototype.applyPlacement = function (e, n) {
      var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, a = parseInt(i.css("margin-top"), 10), s = parseInt(i.css("margin-left"), 10);
      isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(i[0], t.extend({using: function (t) {
        i.css({top: Math.round(t.top), left: Math.round(t.left)})
      }}, e), 0), i.addClass("in");
      var l = i[0].offsetWidth, u = i[0].offsetHeight;
      "top" == n && u != r && (e.top = e.top + r - u);
      var c = this.getViewportAdjustedDelta(n, e, l, u);
      c.left ? e.left += c.left : e.top += c.top;
      var d = /top|bottom/.test(n), p = d ? 2 * c.left - o + l : 2 * c.top - r + u, f = d ? "offsetWidth" : "offsetHeight";
      i.offset(e), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function (t, e, n) {
      this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
      var t = this.tip(), e = this.getTitle();
      t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
      function i() {
        "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
      }

      var o = this, r = t(this.$tip), a = t.Event("hide.bs." + this.type);
      return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
      var t = this.$element;
      (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
      return this.getTitle()
    }, n.prototype.getPosition = function (e) {
      e = e || this.$element;
      var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
      null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
      var r = i ? {top: 0, left: 0} : e.offset(), a = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, s = i ? {width: t(window).width(), height: t(window).height()} : null;
      return t.extend({}, o, a, s, r)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
      return"bottom" == t ? {top: e.top + e.height, left: e.left + e.width / 2 - n / 2} : "top" == t ? {top: e.top - i, left: e.left + e.width / 2 - n / 2} : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {top: e.top + e.height / 2 - i / 2, left: e.left + e.width}
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
      var o = {top: 0, left: 0};
      if (!this.$viewport)return o;
      var r = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
      if (/right|left/.test(t)) {
        var s = e.top - r - a.scroll, l = e.top + r - a.scroll + i;
        s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
      } else {
        var u = e.left - r, c = e.left + r + n;
        u < a.left ? o.left = a.left - u : c > a.width && (o.left = a.left + a.width - c)
      }
      return o
    }, n.prototype.getTitle = function () {
      var t, e = this.$element, n = this.options;
      return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
      do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
      return t
    }, n.prototype.tip = function () {
      return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function () {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
      this.enabled = !0
    }, n.prototype.disable = function () {
      this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
      this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
      var n = this;
      e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
      var t = this;
      clearTimeout(this.timeout), this.hide(function () {
        t.$element.off("." + t.type).removeData("bs." + t.type)
      })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
      return t.fn.tooltip = i, this
    }
  }(jQuery), +function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
      })
    }

    var n = function (t, e) {
      this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
      return n.DEFAULTS
    }, n.prototype.setContent = function () {
      var t = this.tip(), e = this.getTitle(), n = this.getContent();
      t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
      return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
      var t = this.$element, e = this.options;
      return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
      return t.fn.popover = i, this
    }
  }(jQuery);
  var githubLangs = {Mercury: "#abcdef", PureBasic: "#5a6986", "Objective-C++": "#4886FC", DTrace: null, Self: "#0579aa", Lean: null, NewLisp: "#eedd66", Rebol: "#358a5b", Brightscript: null, RAML: "#77d9fb", Logos: null, edn: "#db5855", Perl6: "#0298c3", Bison: null, "Gentoo Ebuild": null, Less: null, COBOL: null, Go: "#375eab", HTTP: null, "Raw token data": null, Makefile: null, BitBake: null, Stata: null, Red: "#ee0000", LSL: "#3d9970", HTML: "#e44b23", "Graphviz (DOT)": null, Org: null, Swift: "#ffac45", PLpgSQL: null, Myghty: null, "Python traceback": null, "HTML+ERB": null, AutoIt: "#36699B", Rust: "#dea584", CMake: null, Shen: "#120F14", INI: null, GLSL: null, VHDL: "#543978", ObjDump: null, JSON5: null, LFE: "#004200", Oxygene: "#5a63a3", BlitzBasic: null, WebIDL: null, "Emacs Lisp": "#c065db", "Protocol Buffer": null, LOLCODE: "#cc9900", ooc: "#b0b77e", Mask: "#f97732", Cuda: null, Text: null, Sage: null, ChucK: null, "F#": "#b845fc", "Parrot Internal Representation": null, Smalltalk: "#596706", Monkey: null, LiveScript: "#499886", JavaScript: "#f1e05a", QMake: null, ABAP: null, Redcode: null, Erlang: "#0faf8d", Eagle: "#3994bc", Scheme: "#1e4aec", Nimrod: "#37775b", "IGOR Pro": null, Dylan: "#3ebc27", Xojo: null, Gradle: null, CLIPS: null, "Gentoo Eclass": null, Alloy: "#cc5c24", Haskell: "#29b544", TOML: null, Rouge: "#cc0088", Haml: null, Ceylon: null, Latte: "#A8FF97", "Maven POM": null, Shell: "#89e051", Nginx: null, SAS: "#1E90FF", Grace: null, "Gettext Catalog": null, Kotlin: null, "Groovy Server Pages": null, STON: null, APL: "#8a0707", NumPy: null, ApacheConf: null, Perl: "#0298c3", Lua: "#fa1fa1", GDScript: null, "Cap'n Proto": null, Factor: "#636746", "Darcs Patch": null, Jasmin: null, eC: "#4A4773", LilyPond: null, Cool: null, Zimpl: null, "Inform 7": null, Modelica: null, CSS: "#563d7c", "C-ObjDump": null, ColdFusion: "#ed2cd6", Harbour: "#0e60e3", "Literate Agda": null, BlitzMax: "#cd6400", PigLatin: "#fcd7de", Lasso: "#2584c3", Arduino: "#bd79d1", OpenCL: null, MUF: null, ATS: "#1ac620", RHTML: null, ASP: "#6a40fd", Vala: "#ee7d06", ECL: "#8a1267", Bluespec: null, Pike: "#066ab2", XC: "#99DA07", AsciiDoc: null, R: "#198ce7", SaltStack: null, XS: null, "Unified Parallel C": "#755223", Markdown: null, SQLPL: null, UnrealScript: "#a54c4d", "Ragel in Ruby Host": "#ff9c2e", Zephir: "#118f9e", DM: "#075ff1", JSONLD: null, VimL: "#199c4b", Matlab: "#bb92ac", mupad: null, Pan: "#cc0000", LookML: "#652B81", Kit: null, Nix: "#7070ff", Nit: "#0d8921", Groovy: "#e69f56", LLVM: null, Parrot: "#f3ca0a", "Grammatical Framework": "#ff0000", VCL: "#0298c3", "C++": "#f34b7d", TeX: "#3D6117", Slim: "#ff8877", PowerShell: null, Omgrofl: "#cabbff", Racket: "#ae17ff", Pod: null, "Literate CoffeeScript": null, xBase: "#3a4040", "Web Ontology Language": "#3994bc", Eiffel: "#946d57", Opa: null, Elixir: "#6e4a7e", Agda: "#467C91", "Ant Build System": null, Thrift: null, "Parrot Assembly": null, "HTML+Django": null, Sass: null, "Inno Setup": null, Crystal: null, "Objective-C": "#438eff", Mirah: "#c7a938", "Objective-J": "#ff0c5a", Gosu: "#82937f", "HTML+PHP": null, Smarty: null, "Component Pascal": "#b0ce4e", "Visual Basic": "#945db7", PHP: "#4F5D95", Cirru: "#aaaaff", Formatted: null, Textile: null, Verilog: "#848bf3", "D-ObjDump": null, XProc: null, wisp: "#7582D1", MiniD: null, CoffeeScript: "#244776", Awk: null, "G-code": null, Idris: null, C: "#555555", Isabelle: "#fdcd00", Scaml: null, ShellSession: null, "Literate Haskell": null, REALbasic: null, Moocode: null, "C2hs Haskell": null, SourcePawn: "#f69e1d", ANTLR: "#9DC3FF", YAML: null, Tcl: "#e4cc98", Xtend: null, "Ecere Projects": null, JSONiq: null, SCSS: null, Assembly: "#6E4C13", "C#": "#178600", Turing: "#45f715", Processing: "#2779ab", NSIS: null, JSON: null, Cucumber: null, XML: null, Forth: "#341708", Liquid: null, XSLT: null, RMarkdown: null, EmberScript: "#f64e3e", LabVIEW: null, Nemerle: "#0d3c6e", KRL: "#f5c800", Scilab: null, OCaml: "#3be133", LoomScript: null, PogoScript: "#d80074", Slash: "#007eff", Squirrel: null, Python: "#3581ba", GAS: null, GAP: null, Chapel: "#8dc63f", Coq: null, Clean: "#3a81ad", PLSQL: null, PureScript: "#bcdc53", Julia: "#a270ba", Io: "#a9188d", Dogescript: "#cca760", nesC: "#ffce3b", TypeScript: "#31859c", Frege: "#00cafe", Groff: null, AspectJ: "#1957b0", Tcsh: null, AppleScript: null, desktop: null, SuperCollider: "#46390b", MTML: "#0095d9", Ninja: null, D: "#fcd46d", SVG: null, Opal: "#f7ede0", "Standard ML": "#dc566d", "ColdFusion CFC": "#ed2cd6", Batchfile: null, Oz: "#fcaf3e", Ox: null, Handlebars: "#01a9d6", Cycript: null, "Pure Data": "#91de79", Arc: "#ca2afe", Brainfuck: null, Genshi: null, Hack: null, SQF: "#FFCB1F", Glyph: "#e4cc98", Java: "#b07219", Scala: "#7dd3b0", OpenSCAD: null, PostScript: null, Haxe: "#f7941e", Dockerfile: null, Hy: "#7891b1", RobotFramework: null, Ruby: "#701516", AutoHotkey: "#6594b9", M: null, SQL: null, RDoc: null, "Graph Modeling Language": null, "Java Server Pages": null, Logtalk: null, Boo: "#d4bec1", Clojure: "#db5855", Prolog: "#74283c", Turtle: null, SPARQL: null, AMPL: "#00008B", Jade: null, reStructuredText: null, Mako: null, GAMS: null, Elm: "#60B5CC", "Propeller Spin": "#2b446d", IDL: "#e3592c", Ada: "#02f88c", Creole: null, Nu: "#c9df40", NL: null, FLUX: "#33CCFF", NetLogo: "#ff2b2b", QML: "#44a51c", "Public Key": null, fish: null, Fantom: "#dbded5", J: "#2d8abd", MoonScript: null, "IRC log": null, Befunge: null, MediaWiki: null, Tea: null, Golo: "#f6a51f", Stylus: null, Volt: "#0098db", Pascal: "#b0ce4e", Puppet: "#cc5555", ActionScript: "#e3491a", Diff: "#88dddd", "Cpp-ObjDump": null, Twig: null, Cython: null, Ioke: "#078193", Gnuplot: "#f0a9f0", Apex: null, Mathematica: null, "OpenEdge ABL": null, TXL: null, PAWN: "#dbb284", Max: "#ce279c", "Common Lisp": "#3fb68b", Dart: "#98BAD6", XQuery: "#2700e2", SystemVerilog: "#343761", E: "#ccce35", Papyrus: "#6600cc", FORTRAN: "#4d41b1", CartoCSS: null, Augeas: null, Fancy: "#7b9db4", Bro: null, "Game Maker Language": "#8ad353", "AGS Script": "#B9D9FF"};

});

