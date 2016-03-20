/*xmst.js v1.5.1 20160315*/
(function() {
    function u() {
        var e = window.location.hostname,
        t = e.split(".");
        size = t.length;
        var n = "." + t[size - 2] + "." + t[size - 1];
        return n
    }
    function a() {
        return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
    }
    function f() {
        return navigator.vendor
    }
    function l() {
        return navigator.platform
    }
    function c() {
        return screen.width + "*" + screen.height
    }
    function h(e, t, n, r) {
        var i = arguments.length;
        i == 3 ? document.cookie = e + "=" + t + ";path=/;domain=" + n: document.cookie = e + "=" + t + ";path=/;domain=" + n + ";expires=" + r
    }
    function p(e) {
        var t = document.cookie,
        n = d(t),
        r = n.split(";");
        for (var i = 0; i < r.length; i++) {
            var s = r[i].split("=");
            if (s.length > 1 && s[0] == e) return s[1]
        }
        return ""
    }
    function d(e) {
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charAt(n);
            r != " " && (t += r)
        }
        return t
    }
    function v() {
        return t.round(2147483647 * t.random())
    }
    function m(e, t) {
        var n = new Date;
        n.setTime(n.getTime() + 31104e6);
        var r = e + "=" + t + ";" + "path=/;domain=" + u() + ";expires=" + n.toGMTString();
        window.document.cookie = r
    }
    function g(e) {
        var t = document.createElement("a");
        return t.href = e,
        t.hostname
    }
    function y() {
        var e = new Date,
        t = e.getTime() + "_" + Math.round(Math.random() * 1e4);
        return t
    }
    function b() {
        var e = "";
        if (s == []) return "";
        for (var t in s) e += "&" + t + "=" + encodeURIComponent(s[t]);
        return e
    }
    function w(e) {
        var t = document.createElement("script");
        t.type = "text/javascript",
        t.async = !0,
        t.src = e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n)
    }
    function E() {
        var e = document.location.href.replace(/&/g, "|"),
        t = document.referrer.replace(/&/g, "|");
        t = t.toLowerCase();
        if (t) {
            var n = g(t),
            r = p("lastsource");
            r && h("lastsource", r, u()),
            (n.indexOf(".mi.com") < 0 || n.indexOf("s1.mi.com") > -1 || n.indexOf("p.www.xiaomi.com") > -1 || n.indexOf("a.union.mi.com") > -1) && h("lastsource", n, u())
        }
        var i = p("xm_www_sid"),
        d = p("mstuid"),
        m = p("muuid"),
        b = p("mucid"),
        w = p("mutid"),
        E = p("mstz") || "";
        if (E === "" || E.split("|").length < 3) {
            var T = [];
            T[0] = "",
            T[1] = "",
            T[2] = v().toString() + "." + 0;
            var N = "mstz",
            C = T.join("|");
            h(N, C, u())
        }
        E = p("mstz");
        var k = E.split("|") || [],
        L = k.length == 4 ? 0 : 1,
        A = k[0] || "",
        O = k[1] || "",
        M = [];
        M = k[2].split(".");
        var _ = M[0],
        D = parseInt(M[1]) + 1;
        k[2] = M[0] + "." + D.toString();
        var P = k[3] || "",
        H = k[4] || "",
        B = k[5] || "",
        j = 0,
        F = encodeURIComponent(t);
        F == "" && (H = "", B = ""),
        F != H && e != t ? (B = H, H = F) : F != "" && (j = 1),
        k[3] = P,
        k[4] = H,
        k[5] = B,
        h("mstz", k.join("|"), u());
        var I = p("lastsource"),
        q = 0,
        R = new Date;
        R.setTime(R.getTime() + 62208e6),
        d === "" && (q = 1, d = y()),
        h("mstuid", d, u(), R.toGMTString());
        var U = "",
        z = new Date;
        return s.curl === undefined || s["curl"] == "" ? s.curl = location.href: s.curl = s.curl,
        s.xmv = x(d),
        s.v = o,
        s.vuuid === undefined && (s.vuuid = S(16, 32)),
        U = "mid=" + p("userId") + "&phpsessid=" + i + "&mstuid=" + d + "&muuid=" + m + "&mucid=" + b + "&sessionId=" + _ + "&step=" + D + "&new_visitor=" + q + "&mstprevpid=" + encodeURIComponent(A) + "&mstprev_pid_loc=" + P + "&prevtarget=" + O + "&lastsource=" + I + "&timestamp=" + z.getTime() + "&ref=" + F + "&domain=" + u() + "&screen=" + c() + "&language=" + a() + "&vendor=" + f() + "&platform=" + l() + "&gu=" + B + "&pu=" + H + "&rf=" + j + "&mutid=" + w,
        U
    }
    function S(e, t) {
        var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        r = [],
        i;
        t = t || n.length;
        if (e) for (i = 0; i < e; i++) r[i] = n[0 | Math.random() * t];
        else {
            var s;
            r[8] = r[13] = r[18] = r[23] = "-",
            r[14] = "4";
            for (i = 0; i < 36; i++) r[i] || (s = 0 | Math.random() * 16, r[i] = n[i == 19 ? s & 3 | 8 : s])
        }
        return r.join("")
    }
    function x(e) {
        var t = p("xm_vistor"),
        n = !0,
        r = "",
        i = 0,
        s = (new Date).getTime();
        if (t !== "") {
            var o = t.split("-");
            o.length == 2 && (r = o[0], i = o[1], s - i <= 18e5 && (n = !1))
        }
        return n && (r = e + "_" + s),
        i = s,
        h("xm_vistor", r + "-" + i, u()),
        r
    }
    function T() {
        var e = window.performance || window.webkitPerformance,
        e = e && e.timing;
        if (!e) return "";
        var t = e.navigationStart,
        n = [];
        n.ldns = e.domainLookupEnd - e.domainLookupStart,
        n.con = e.connectEnd - e.connectStart,
        n.res = e.responseStart - e.requestStart,
        n.down = e.responseEnd - e.responseStart,
        n.redi = e.fetchStart - t;
        var r = "";
        for (var i in n) r += "&" + i + "=" + n[i];
        return r
    }
    function N(e) {
        w(e)
    }
    function C(e) {
        return "function" == typeof e
    }
    function _(e, t) {
        var n, r = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        n = document.createElement("script"),
        n.async = "async",
        n.src = e,
        n.onload = n.onreadystatechange = function() {
            if (!n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null,
            r && n.parentNode && r.removeChild(n),
            n = undefined,
            t()
        },
        r.insertBefore(n, r.firstChild)
    }
    function H() {
        var e = "";
        if (B(s.domain_id, P)) {
            var t = window.location.href,
            n = !0;
            for (var r = 0; r < D.length && n; r++) - 1 != t.indexOf(D[r]) && (n = !1);
            if (n) {
                e = j();
                var i = new Date,
                o = function() {
                    w("//c1.mifile.cn/f/i/15/stat/js/jquery.statData.min.js?d=" + i.getFullYear() + (i.getMonth() + 1) + i.getDate())
                };
                typeof jQuery == "undefined" ? _("//s01.mifile.cn/js/lib/jquery.min.js", o) : o()
            }
        }
        return s.pageid = e,
        s.pageid
    }
    function B(e, t) {
        for (var n in t) if (t[n] == e) return ! 0;
        return ! 1
    }
    function j() {
        var e = /\/(index.php|index.html|index.htm|index)$/,
        t = location.protocol + "//",
        n = location.host,
        r = location.pathname.replace(e, "/"),
        i = t + n + r;
        return md5("undefined" != typeof _STAT_HASHNAME && "" != _STAT_HASHNAME ? _STAT_HASHNAME: i)
    }
    var e = "prototype",
    t = Math,
    n = "",
    r = "",
    s = [],
    o = "1.4.09",
    k = function() {
        this.p = []
    },
    L = k[e],
    A = /^AA\d+$/,
    O = "(http|https)://item.mi.com/([0-9]+).html.*";
    O = new RegExp(O);
    var M = new Object;
    L.trackPerformance = function(e) {
        var t = E();
        _mi_ti = e[0];
        var n = [];
        "undefined" != typeof _mi_ti && ("undefined" != typeof _mi_ti.fs && (n.fs = _mi_ti.fs), "undefined" != typeof _mi_ti.ws && (n.ws = _mi_ti.ws), "undefined" != typeof _mi_ti.ua && (n.ua = _mi_ti.ua), "undefined" != typeof _mi_ti.td && (n.td = _mi_ti.td));
        var r = b();
        for (var i in n) r += "&" + i + "=" + n[i];
        N(F + t + r + "&type=performance")
    },
    L.trackJSError = function(e) {
        var t = E();
        _mi_je = e[0];
        var n = [];
        "undefined" != typeof _mi_je && ("undefined" != typeof _mi_je.ec && (n.ec = _mi_je.ec), "undefined" != typeof _mi_je.us && (n.us = _mi_je.us));
        var r = b();
        for (var i in n) r += "&" + i + "=" + n[i];
        N(F + t + r + "&type=jserror")
    },
    L.trackPanelShow = function(e) {
        if (e.length < 2) return;
        var t = e[0],
        n = encodeURIComponent(e[1]),
        r = document.getElementById(t);
        if ("undefined" != typeof r && r != null) try {
            var i = r.getElementsByTagName("a"),
            s = "",
            o = E() + b(),
            u = 0;
            for (var a = 0; a < i.length; a++) {
                var f = i[a].getAttribute("data-stat-pid"),
                l = i[a].getAttribute("data-stat-aid");
                if (f != null && l != null) {
                    var c = i[a].getAttribute("href"),
                    h = l + "+" + f;
                    if ("undefined" == typeof M[h]) {
                        if (O.test(c)) {
                            var p = O.exec(c);
                            "object" == typeof p && p.length >= 3 && (c = p[2])
                        }
                        s += l + "+" + f + "+" + c + ";",
                        u++,
                        M[h] = 1,
                        u % 20 == 0 && s != "" && (N(F + o + "&type=sp&spt=" + n + "&log=" + encodeURIComponent(s)), s = "")
                    }
                }
            }
            s != "" && N(F + o + "&type=sp&spt=" + n + "&log=" + encodeURIComponent(s))
        } catch(d) {}
    },
    L.trackPageView = function() {
        H();
        var e = E();
        varParam = b();
        var t = T();
        N(F + e + t + varParam);
        var n = new Date,
        r = encodeURIComponent(window.location.href);
        n.setTime(n.getTime() + 18e4),
        h("msttime", r, u(), n.toGMTString()),
        n.setTime(n.getTime() - 12e4),
        h("msttime1", r, u(), n.toGMTString())
    },
    L.push = function(e) {
        if (C(e[0])) {
            e[0](e.slice(1));
            return
        }
        L[e[0]](e.slice(1))
    },
    L.setDomainId = function(e) {
        s.domain_id = e[0]
    },
    L.setUid = function(e) {
        s.uid = e[0]
    },
    L.setVars = function(e) {
        s[e[0]] = e[1]
    },
    L.getDomainId = function() {
        return s.domain_id
    },
    L.getVars = function(e) {
        return s[e]
    },
    L.trackEvent = function(e) {
        var t = "",
        n = "",
        r = "",
        i = "",
        s = "",
        o = "",
        d = new Date,
        m = p("mstz").split("|") || [],
        g = "",
        y = "",
        w = "",
        E = "",
        S = 0;
        m.length >= 3 && (g = m[0], y = m[1], w = m[2].split(".")[0] || v().toString() + "." + 0);
        var x = e.length == 4 ? 1 : 0;
        if (x) t = e[1],
        s = e[2],
        r = encodeURIComponent(e[3]),
        g != s && (m[0] = s, S = 1);
        else {
            n = e[0],
            r = encodeURIComponent(e[1]),
            i = e[2],
            m[0] = n,
            E = m[3] || "",
            E != i && (m[3] = i, S = 1);
            var T = [];
            T = m[2].split("."),
            w = T[0]
        }
        var d = new Date,
        C = p("xm_www_sid");
        y != r && (m[1] = r, S = 1),
        S && h("mstz", m.join("|"), u());
        var k = "mid=" + p("userId") + "&phpsessid=" + C + "&mstuid=" + p("mstuid") + "&sessionId=" + w + "&muuid=" + p("muuid") + "&mucid=" + p("mucid") + "&mstprevpid=" + g + "&lastsource=" + p("lastsource") + "&timestamp=" + d.getTime() + "&domain=" + u() + "&screen=" + c() + "&language=" + a() + "&vendor=" + f() + "&platform=" + l(),
        L = "";
        x ? L = "mstpid=" + s + "&" + k + "&target=" + r + "&prevtarget=" + y + "&category=" + t: L = "mstpid=" + encodeURIComponent(n) + "&" + k + "&target=" + r + "&prevtarget=" + y + "&pid_loc=" + i + "&mstprev_pid_loc=" + E;
        var A = b();
        N(F + L + A)
    };
    var D = new Array("http://service.order.mi.com/cservice", "http://me.mi.com", "https://service.order.mi.com/cservice", "https://me.mi.com"),
    P = new Array(100, 101, 129); (function(e) {
        "use strict";
        function t(e, t) {
            var n = (e & 65535) + (t & 65535),
            r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | n & 65535
        }
        function n(e, t) {
            return e << t | e >>> 32 - t
        }
        function r(e, r, i, s, o, u) {
            return t(n(t(t(r, e), t(s, u)), o), i)
        }
        function i(e, t, n, i, s, o, u) {
            return r(t & n | ~t & i, e, t, s, o, u)
        }
        function s(e, t, n, i, s, o, u) {
            return r(t & i | n & ~i, e, t, s, o, u)
        }
        function o(e, t, n, i, s, o, u) {
            return r(t ^ n ^ i, e, t, s, o, u)
        }
        function u(e, t, n, i, s, o, u) {
            return r(n ^ (t | ~i), e, t, s, o, u)
        }
        function a(e, n) {
            e[n >> 5] |= 128 << n % 32,
            e[(n + 64 >>> 9 << 4) + 14] = n;
            var r, a, f, l, c, h = 1732584193,
            p = -271733879,
            d = -1732584194,
            v = 271733878;
            for (r = 0; r < e.length; r += 16) a = h,
            f = p,
            l = d,
            c = v,
            h = i(h, p, d, v, e[r], 7, -680876936),
            v = i(v, h, p, d, e[r + 1], 12, -389564586),
            d = i(d, v, h, p, e[r + 2], 17, 606105819),
            p = i(p, d, v, h, e[r + 3], 22, -1044525330),
            h = i(h, p, d, v, e[r + 4], 7, -176418897),
            v = i(v, h, p, d, e[r + 5], 12, 1200080426),
            d = i(d, v, h, p, e[r + 6], 17, -1473231341),
            p = i(p, d, v, h, e[r + 7], 22, -45705983),
            h = i(h, p, d, v, e[r + 8], 7, 1770035416),
            v = i(v, h, p, d, e[r + 9], 12, -1958414417),
            d = i(d, v, h, p, e[r + 10], 17, -42063),
            p = i(p, d, v, h, e[r + 11], 22, -1990404162),
            h = i(h, p, d, v, e[r + 12], 7, 1804603682),
            v = i(v, h, p, d, e[r + 13], 12, -40341101),
            d = i(d, v, h, p, e[r + 14], 17, -1502002290),
            p = i(p, d, v, h, e[r + 15], 22, 1236535329),
            h = s(h, p, d, v, e[r + 1], 5, -165796510),
            v = s(v, h, p, d, e[r + 6], 9, -1069501632),
            d = s(d, v, h, p, e[r + 11], 14, 643717713),
            p = s(p, d, v, h, e[r], 20, -373897302),
            h = s(h, p, d, v, e[r + 5], 5, -701558691),
            v = s(v, h, p, d, e[r + 10], 9, 38016083),
            d = s(d, v, h, p, e[r + 15], 14, -660478335),
            p = s(p, d, v, h, e[r + 4], 20, -405537848),
            h = s(h, p, d, v, e[r + 9], 5, 568446438),
            v = s(v, h, p, d, e[r + 14], 9, -1019803690),
            d = s(d, v, h, p, e[r + 3], 14, -187363961),
            p = s(p, d, v, h, e[r + 8], 20, 1163531501),
            h = s(h, p, d, v, e[r + 13], 5, -1444681467),
            v = s(v, h, p, d, e[r + 2], 9, -51403784),
            d = s(d, v, h, p, e[r + 7], 14, 1735328473),
            p = s(p, d, v, h, e[r + 12], 20, -1926607734),
            h = o(h, p, d, v, e[r + 5], 4, -378558),
            v = o(v, h, p, d, e[r + 8], 11, -2022574463),
            d = o(d, v, h, p, e[r + 11], 16, 1839030562),
            p = o(p, d, v, h, e[r + 14], 23, -35309556),
            h = o(h, p, d, v, e[r + 1], 4, -1530992060),
            v = o(v, h, p, d, e[r + 4], 11, 1272893353),
            d = o(d, v, h, p, e[r + 7], 16, -155497632),
            p = o(p, d, v, h, e[r + 10], 23, -1094730640),
            h = o(h, p, d, v, e[r + 13], 4, 681279174),
            v = o(v, h, p, d, e[r], 11, -358537222),
            d = o(d, v, h, p, e[r + 3], 16, -722521979),
            p = o(p, d, v, h, e[r + 6], 23, 76029189),
            h = o(h, p, d, v, e[r + 9], 4, -640364487),
            v = o(v, h, p, d, e[r + 12], 11, -421815835),
            d = o(d, v, h, p, e[r + 15], 16, 530742520),
            p = o(p, d, v, h, e[r + 2], 23, -995338651),
            h = u(h, p, d, v, e[r], 6, -198630844),
            v = u(v, h, p, d, e[r + 7], 10, 1126891415),
            d = u(d, v, h, p, e[r + 14], 15, -1416354905),
            p = u(p, d, v, h, e[r + 5], 21, -57434055),
            h = u(h, p, d, v, e[r + 12], 6, 1700485571),
            v = u(v, h, p, d, e[r + 3], 10, -1894986606),
            d = u(d, v, h, p, e[r + 10], 15, -1051523),
            p = u(p, d, v, h, e[r + 1], 21, -2054922799),
            h = u(h, p, d, v, e[r + 8], 6, 1873313359),
            v = u(v, h, p, d, e[r + 15], 10, -30611744),
            d = u(d, v, h, p, e[r + 6], 15, -1560198380),
            p = u(p, d, v, h, e[r + 13], 21, 1309151649),
            h = u(h, p, d, v, e[r + 4], 6, -145523070),
            v = u(v, h, p, d, e[r + 11], 10, -1120210379),
            d = u(d, v, h, p, e[r + 2], 15, 718787259),
            p = u(p, d, v, h, e[r + 9], 21, -343485551),
            h = t(h, a),
            p = t(p, f),
            d = t(d, l),
            v = t(v, c);
            return [p, d]
        }
        function f(e) {
            var t, n = "";
            for (t = 0; t < e.length * 32; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }
        function l(e) {
            var t, n = [];
            n[(e.length >> 2) - 1] = undefined;
            for (t = 0; t < n.length; t += 1) n[t] = 0;
            for (t = 0; t < e.length * 8; t += 8) n[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32;
            return n
        }
        function c(e) {
            return f(a(l(e), e.length * 8))
        }
        function h(e, t) {
            var n, r = l(e),
            i = [],
            s = [],
            o;
            i[15] = s[15] = undefined,
            r.length > 16 && (r = a(r, e.length * 8));
            for (n = 0; n < 16; n += 1) i[n] = r[n] ^ 909522486,
            s[n] = r[n] ^ 1549556828;
            return o = a(i.concat(l(t)), 512 + t.length * 8),
            f(a(s.concat(o), 640))
        }
        function p(e) {
            var t = "0123456789abcdef",
            n = "",
            r, i;
            for (i = 0; i < e.length; i += 1) r = e.charCodeAt(i),
            n += t.charAt(r >>> 4 & 15) + t.charAt(r & 15);
            return n
        }
        function d(e) {
            return unescape(encodeURIComponent(e))
        }
        function v(e) {
            return c(d(e))
        }
        function m(e) {
            return p(v(e))
        }
        function g(e, t) {
            return h(d(e), d(t))
        }
        function y(e, t) {
            return p(g(e, t))
        }
        function b(e, t, n) {
            return t ? n ? g(t, e) : y(t, e) : n ? v(e) : m(e)
        }
        window.md5 = b,
        typeof define == "function" && define.amd ? define(function() {
            return b
        }) : e.md5 = b
    })(this);
    var F = "//a.stat.xiaomi.com/js/mstr.js?",
    I = new k;
    I.p = window._msq;
    if ("undefined" != typeof window._msq) for (i = 0; i < I.p.length; i++) I.push(I.p[i]);
    window._msq = I,
    (s["domain_id"] == 100 || s["domain_id"] == 101) && w("//c1.mifile.cn/f/i/15/stat/js/unjcV2.js")
})();