! function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = /\s*,\s*/,
        h = "*",
        i = function(a, b) {
            return a - b
        }, j = {
            n: {}
        }, k = function() {
            for (var a = 0, b = this.length; b > a; a++)
                if ("undefined" != typeof this[a]) return this[a]
        }, l = function() {
            for (var a = this.length; --a;)
                if ("undefined" != typeof this[a]) return this[a]
        }, m = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = m.listeners(a),
                j = 0,
                n = [],
                o = {}, p = [],
                q = b;
            p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
            for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
            for (n.sort(i); n[j] < 0;)
                if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
            for (r = 0; s > r; r++)
                if (e = h[r], "zIndex" in e)
                    if (e.zIndex == n[j]) {
                        if (p.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
                    } else o[e.zIndex] = e;
                    else if (p.push(e.apply(d, g)), c) break;
            return c = f, b = q, p
        };
    m._events = j, m.listeners = function(a) {
        var b, c, d, e, g, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, g = m.length; g > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, m.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(g), d = 0, e = c.length; e > d; d++)! function(a) {
            for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
                n: {}
            });
            for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                if (e.f[g] == b) {
                    c = !0;
                    break
                }!c && e.f.push(b)
        }(c[d]);
        return function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, m.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, m.stop = function() {
        c = 1
    }, m.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, m.nts = function() {
        return b.split(f)
    }, m.off = m.unbind = function(a, b) {
        if (!a) return void(m._events = j = {
            n: {}
        });
        var c = a.split(g);
        if (c.length > 1)
            for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
        else {
            c = a.split(f);
            var k, l, n, d, i, o, p, q = [j];
            for (d = 0, i = c.length; i > d; d++)
                for (o = 0; o < q.length; o += n.length - 2) {
                    if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
                    else
                        for (l in k) k[e](l) && n.push(k[l]);
                    q.splice.apply(q, n)
                }
            for (d = 0, i = q.length; i > d; d++)
                for (k = q[d]; k.n;) {
                    if (b) {
                        if (k.f) {
                            for (o = 0, p = k.f.length; p > o; o++)
                                if (k.f[o] == b) {
                                    k.f.splice(o, 1);
                                    break
                                }!k.f.length && delete k.f
                        }
                        for (l in k.n)
                            if (k.n[e](l) && k.n[l].f) {
                                var r = k.n[l].f;
                                for (o = 0, p = r.length; p > o; o++)
                                    if (r[o] == b) {
                                        r.splice(o, 1);
                                        break
                                    }!r.length && delete k.n[l].f
                            }
                    } else {
                        delete k.f;
                        for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                    }
                    k = k.n
                }
        }
    }, m.once = function(a, b) {
        var c = function() {
            return m.unbind(a, c), b.apply(this, arguments)
        };
        return m.on(a, c)
    }, m.version = d, m.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function() {
        return m
    }) : a.eve = m
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    var c = function(b) {
        var c = {}, d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
                setTimeout(a, 16)
            }, e = Array.isArray || function(a) {
                return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
            }, f = 0,
            g = "M" + (+new Date).toString(36),
            h = function() {
                return g + (f++).toString(36)
            }, i = Date.now || function() {
                return +new Date
            }, j = function(a) {
                var b = this;
                if (null == a) return b.s;
                var c = b.s - a;
                b.b += b.dur * c, b.B += b.dur * c, b.s = a
            }, k = function(a) {
                var b = this;
                return null == a ? b.spd : void(b.spd = a)
            }, l = function(a) {
                var b = this;
                return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
            }, m = function() {
                var a = this;
                delete c[a.id], a.update(), b("mina.stop." + a.id, a)
            }, n = function() {
                var a = this;
                a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
            }, o = function() {
                var a = this;
                a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
            }, p = function() {
                var a, b = this;
                if (e(b.start)) {
                    a = [];
                    for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                b.set(a)
            }, q = function() {
                var a = 0;
                for (var e in c)
                    if (c.hasOwnProperty(e)) {
                        var f = c[e],
                            g = f.get();
                        a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function(a) {
                            setTimeout(function() {
                                b("mina.finish." + a.id, a)
                            })
                        }(f)), f.update()
                    }
                a && d(q)
            }, r = function(a, b, e, f, g, i, s) {
                var t = {
                    id: h(),
                    start: a,
                    end: b,
                    b: e,
                    s: 0,
                    dur: f - e,
                    spd: 1,
                    get: g,
                    set: i,
                    easing: s || r.linear,
                    status: j,
                    speed: k,
                    duration: l,
                    stop: m,
                    pause: n,
                    resume: o,
                    update: p
                };
                c[t.id] = t;
                var u, v = 0;
                for (u in c)
                    if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                return 1 == v && d(q), t
            };
        return r.time = i, r.getById = function(a) {
            return c[a] || null
        }, r.linear = function(a) {
            return a
        }, r.easeout = function(a) {
            return Math.pow(a, 1.7)
        }, r.easein = function(a) {
            return Math.pow(a, .48)
        }, r.easeinout = function(a) {
            if (1 == a) return 1;
            if (0 == a) return 0;
            var b = .48 - a / 1.04,
                c = Math.sqrt(.1734 + b * b),
                d = c - b,
                e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        }, r.backin = function(a) {
            if (1 == a) return 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, r.backout = function(a) {
            if (0 == a) return 0;
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }, r.elastic = function(a) {
            return a == !! a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
        }, r.bounce = function(a) {
            var b, c = 7.5625,
                d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }, a.mina = r, r
    }("undefined" == typeof b ? function() {} : b),
        d = function() {
            function d(a, b) {
                if (a) {
                    if (a.tagName) return y(a);
                    if (f(a, "array") && d.set) return d.set.apply(d, a);
                    if (a instanceof u) return a;
                    if (null == b) return a = z.doc.querySelector(a), y(a)
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new x(a, b)
            }

            function e(a, b) {
                if (b) {
                    if ("#text" == a && (a = z.doc.createTextNode(b.text || "")), "string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(W, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(X, b.substring(4)) : a.getAttribute(b);
                    for (var c in b)
                        if (b[A](c)) {
                            var d = B(b[c]);
                            d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(W, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(X, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                        }
                } else a = z.doc.createElementNS(X, a);
                return a
            }

            function f(a, b) {
                return b = B.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || L.call(a).slice(8, -1).toLowerCase() == b
            }

            function h(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var c in a) a[A](c) && (b[c] = h(a[c]));
                return b
            }

            function i(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function j(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("␀"),
                        g = d.cache = d.cache || {}, h = d.count = d.count || [];
                    return g[A](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function k(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * E.atan2(-h, -g) / I + 360) % 360 : 0
                }
                return k(a, b, e, f) - k(c, d, e, f)
            }

            function l(a) {
                return a % 360 * I / 180
            }

            function m(a) {
                return 180 * a / I % 360
            }

            function n(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                    return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, E.tan(l(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, E.tan(l(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
                }), b
            }

            function o(a, b) {
                var c = eb(a),
                    e = new d.Matrix;
                if (c)
                    for (var f = 0, g = c.length; g > f; f++) {
                        var h, i, j, k, l, m = c[f],
                            n = m.length,
                            o = B(m[0]).toLowerCase(),
                            p = m[0] != o,
                            q = p ? e.invert() : 0;
                        "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
                    }
                return e
            }

            function p(a, b) {
                if (null == b) {
                    var c = !0;
                    if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
                    b = n(b)
                } else b = d._.rgTransform.test(b) ? B(b).replace(/\.{3}|\u2026/g, a._.transform || J) : n(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : B(b)), a._.transform = b;
                var e = o(b, a.getBBox(1));
                return c ? e : void(a.matrix = e)
            }

            function q(a) {
                var b = a.node.ownerSVGElement && y(a.node.ownerSVGElement) || a.node.parentNode && y(a.node.parentNode) || d.select("svg") || d(0, 0),
                    c = b.select("defs"),
                    e = null == c ? !1 : c.node;
                return e || (e = w("defs", b.node).node), e
            }

            function r(a) {
                return a.node.ownerSVGElement && y(a.node.ownerSVGElement) || d.select("svg")
            }

            function s(a, b, c) {
                function d(a) {
                    if (null == a) return J;
                    if (a == +a) return a;
                    e(j, {
                        width: a
                    });
                    try {
                        return j.getBBox().width
                    } catch (b) {
                        return 0
                    }
                }

                function f(a) {
                    if (null == a) return J;
                    if (a == +a) return a;
                    e(j, {
                        height: a
                    });
                    try {
                        return j.getBBox().height
                    } catch (b) {
                        return 0
                    }
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                }
                var h = r(a).node,
                    i = {}, j = h.querySelector(".svg---mgr");
                switch (j || (j = e("rect"), e(j, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", d), g("ry", f);
                    case "image":
                        g("width", d), g("height", f);
                    case "text":
                        g("x", d), g("y", f);
                        break;
                    case "circle":
                        g("cx", d), g("cy", f), g("r", d);
                        break;
                    case "ellipse":
                        g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                        break;
                    case "line":
                        g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", d), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", d), g("dy", f);
                        break;
                    default:
                        g(b, d)
                }
                return h.removeChild(j), i
            }

            function t(a) {
                f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var e = d.childNodes;
                for (b = 0; b < e.length; b++) this[c++] = y(e[b]);
                return this
            }

            function u(a) {
                if (a.snap in Y) return Y[a.snap];
                var b, c = this.id = V();
                try {
                    b = a.ownerSVGElement
                } catch (d) {}
                if (this.node = a, b && (this.paper = new x(b)), this.type = a.tagName, this.anims = {}, this._ = {
                    transform: []
                }, a.snap = c, Y[c] = this, "g" == this.type && (this.add = t), this.type in {
                    g: 1,
                    mask: 1,
                    pattern: 1
                })
                    for (var e in x.prototype) x.prototype[A](e) && (this[e] = x.prototype[e])
            }

            function v(a) {
                this.node = a
            }

            function w(a, b) {
                var c = e(a);
                b.appendChild(c);
                var d = y(c);
                return d
            }

            function x(a, b) {
                var c, d, f, g = x.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in Y) return Y[a.snap];
                    var h = a.ownerDocument;
                    c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var i in g) g[A](i) && (c[i] = g[i]);
                    c.paper = c.root = c
                } else c = w("svg", z.doc.body), e(c.node, {
                    height: b,
                    version: 1.1,
                    width: a,
                    xmlns: X
                });
                return c
            }

            function y(a) {
                return a ? a instanceof u || a instanceof v ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new x(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new x(a.contentDocument.getElementsByTagName("svg")[0]) : new u(a) : a
            }
            d.version = "0.3.0", d.toString = function() {
                return "Snap v" + this.version
            }, d._ = {};
            var z = {
                win: a,
                doc: a.document
            };
            d._.glob = z;
            var A = "hasOwnProperty",
                B = String,
                C = parseFloat,
                D = parseInt,
                E = Math,
                F = E.max,
                G = E.min,
                H = E.abs,
                I = (E.pow, E.PI),
                J = (E.round, ""),
                K = " ",
                L = Object.prototype.toString,
                M = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                N = "	\nf\r   ᠎             　\u2028\u2029",
                O = (d._.separator = new RegExp("[," + N + "]+"), new RegExp("[" + N + "]", "g"), new RegExp("[" + N + "]*,[" + N + "]*")),
                P = {
                    hs: 1,
                    rg: 1
                }, Q = new RegExp("([a-z])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
                R = new RegExp("([rstm])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
                S = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + N + "]*,?[" + N + "]*", "ig"),
                T = 0,
                U = "S" + (+new Date).toString(36),
                V = function() {
                    return U + (T++).toString(36)
                }, W = "http://www.w3.org/1999/xlink",
                X = "http://www.w3.org/2000/svg",
                Y = {}, Z = d.url = function(a) {
                    return "url('#" + a + "')"
                };
            d._.$ = e, d._.id = V, d.format = function() {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function(a, c, d) {
                        var e = d;
                        return c.replace(b, function(a, b, c, d, f) {
                            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                        }), e = (null == e || e == d ? a : e) + ""
                    };
                return function(b, d) {
                    return B(b).replace(a, function(a, b) {
                        return c(a, b, d)
                    })
                }
            }(), d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function(a, b, c) {
                if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                    for (var d = a.length; d--;)
                        if (H(a[d] - b) <= c) return a[d]
                } else {
                    a = +a;
                    var e = b % a;
                    if (c > e) return b - e;
                    if (e > a - c) return b - e + a
                }
                return b
            }, d.getRGB = j(function(a) {
                if (!a || (a = B(a)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                };
                if ("none" == a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: bb
                };
                if (!(P[A](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = $(a)), !a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                };
                var b, c, e, g, h, i, j = a.match(M);
                return j ? (j[2] && (e = D(j[2].substring(5), 16), c = D(j[2].substring(3, 5), 16), b = D(j[2].substring(1, 3), 16)), j[3] && (e = D((h = j[3].charAt(3)) + h, 16), c = D((h = j[3].charAt(2)) + h, 16), b = D((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = C(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = C(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = G(E.round(b), 255), c = G(E.round(c), 255), e = G(E.round(e), 255), g = G(F(g, 0), 1), j = {
                    r: b,
                    g: c,
                    b: e,
                    toString: bb
                }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                }
            }, d), d.hsb = j(function(a, b, c) {
                return d.hsb2rgb(a, b, c).hex
            }), d.hsl = j(function(a, b, c) {
                return d.hsl2rgb(a, b, c).hex
            }), d.rgb = j(function(a, b, c, d) {
                if (f(d, "finite")) {
                    var e = E.round;
                    return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
                }
                return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
            });
            var $ = function(a) {
                var b = z.doc.getElementsByTagName("head")[0] || z.doc.getElementsByTagName("svg")[0],
                    c = "rgb(255, 0, 0)";
                return ($ = j(function(a) {
                    if ("red" == a.toLowerCase()) return c;
                    b.style.color = c, b.style.color = a;
                    var d = z.doc.defaultView.getComputedStyle(b, J).getPropertyValue("color");
                    return d == c ? null : d
                }))(a)
            }, _ = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                }, ab = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                }, bb = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                }, cb = function(a, b, c) {
                    if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                        var e = d.getRGB(a);
                        a = e.r, b = e.g, c = e.b
                    }
                    return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
                }, db = function(a, b, c, e) {
                    a = E.round(255 * a), b = E.round(255 * b), c = E.round(255 * c);
                    var g = {
                        r: a,
                        g: b,
                        b: c,
                        opacity: f(e, "finite") ? e : 1,
                        hex: d.rgb(a, b, c),
                        toString: bb
                    };
                    return f(e, "finite") && (g.opacity = e), g
                };
            d.color = function(a) {
                var b;
                return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = bb, a
            }, d.hsb2rgb = function(a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - H(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
            }, d.hsl2rgb = function(a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - H(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
            }, d.rgb2hsb = function(a, b, c) {
                c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = F(a, b, c), g = f - G(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: _
                }
            }, d.rgb2hsl = function(a, b, c) {
                c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = F(a, b, c), h = G(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: ab
                }
            }, d.parsePathString = function(a) {
                if (!a) return null;
                var b = d.path(a);
                if (b.arr) return d.path.clone(b.arr);
                var c = {
                    a: 7,
                    c: 6,
                    o: 2,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    u: 3,
                    z: 0
                }, e = [];
                return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || B(a).replace(Q, function(a, b, d) {
                    var f = [],
                        g = b.toLowerCase();
                    if (d.replace(S, function(a, b) {
                        b && f.push(+b)
                    }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
                    else
                        for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
                }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
            };
            var eb = d.parseTransformString = function(a) {
                if (!a) return null;
                var b = [];
                return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || B(a).replace(R, function(a, c, d) {
                    {
                        var e = [];
                        c.toLowerCase()
                    }
                    d.replace(S, function(a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = d.path.toString, b
            };
            d._.svgTransform2string = n, d._.rgTransform = new RegExp("^[a-z][" + N + "]*-?\\.?\\d", "i"), d._.transform2matrix = o, d._unit2px = s;
            z.doc.contains || z.doc.compareDocumentPosition ? function(a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b;)
                        if (b = b.parentNode, b == a) return !0;
                return !1
            };
            d._.getSomeDefs = q, d._.getSomeSVG = r, d.select = function(a) {
                return y(z.doc.querySelector(a))
            }, d.selectAll = function(a) {
                for (var b = z.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                return c
            }, setInterval(function() {
                for (var a in Y)
                    if (Y[A](a)) {
                        var b = Y[a],
                            c = b.node;
                        ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete Y[a]
                    }
            }, 1e4),
            function(a) {
                function g(a) {
                    function b(a, b) {
                        var c = e(a.node, b);
                        c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function(c) {
                            var d = {};
                            d[b] = Z(c), e(a.node, d)
                        })))
                    }

                    function c(a) {
                        var b = e(a.node, "xlink:href");
                        b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) {
                            a.attr("xlink:href", "#" + b)
                        })))
                    }
                    for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                        d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                        var l = e(d.node, "id");
                        l && (e(d.node, {
                            id: d.id
                        }), h.push({
                            old: l,
                            id: d.id
                        }))
                    }
                    for (j = 0, k = h.length; k > j; j++) {
                        var m = i[h[j].old];
                        if (m)
                            for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
                    }
                }

                function h(a, b, c) {
                    return function(d) {
                        var e = d.slice(a, b);
                        return 1 == e.length && (e = e[0]), c ? c(e) : e
                    }
                }

                function i(a) {
                    return function() {
                        var b = a ? "<" + this.type : "",
                            c = this.node.attributes,
                            d = this.node.childNodes;
                        if (a)
                            for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                        if (d.length) {
                            for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += y(d[e]).toString());
                            a && (b += "</" + this.type + ">")
                        } else a && (b += "/>");
                        return b
                    }
                }
                a.attr = function(a, c) {
                    {
                        var d = this;
                        d.node
                    }
                    if (!a) return d;
                    if (f(a, "string")) {
                        if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                        var e = {};
                        e[a] = c, a = e
                    }
                    for (var g in a) a[A](g) && b("snap.util.attr." + g, d, a[g]);
                    return d
                }, a.getBBox = function(a) {
                    if (!d.Matrix || !d.path) return this.node.getBBox();
                    var b = this,
                        c = new d.Matrix;
                    if (b.removed) return d._.box();
                    for (;
                        "use" == b.type;)
                        if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
                        else {
                            var e = b.attr("xlink:href");
                            b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                        }
                    var f = b._,
                        g = d.path.get[b.type] || d.path.get.deflt;
                    try {
                        return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
                    } catch (h) {
                        return d._.box()
                    }
                };
                var j = function() {
                    return this.string
                };
                a.transform = function(a) {
                    var b = this._;
                    if (null == a) {
                        for (var c, f = this, g = new d.Matrix(this.node.getCTM()), h = p(this), i = [h], k = new d.Matrix, l = h.toTransformString(), m = B(h) == B(this.matrix) ? B(b.transform) : l;
                            "svg" != f.type && (f = f.parent());) i.push(p(f));
                        for (c = i.length; c--;) k.add(i[c]);
                        return {
                            string: m,
                            globalMatrix: g,
                            totalMatrix: k,
                            localMatrix: h,
                            diffMatrix: g.clone().add(h.invert()),
                            global: g.toTransformString(),
                            total: k.toTransformString(),
                            local: l,
                            toString: j
                        }
                    }
                    return a instanceof d.Matrix ? this.matrix = a : p(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
                        gradientTransform: this.matrix
                    }) : "pattern" == this.type ? e(this.node, {
                        patternTransform: this.matrix
                    }) : e(this.node, {
                        transform: this.matrix
                    })), this
                }, a.parent = function() {
                    return y(this.node.parentNode)
                }, a.append = a.add = function(a) {
                    if (a) {
                        if ("set" == a.type) {
                            var b = this;
                            return a.forEach(function(a) {
                                b.add(a)
                            }), this
                        }
                        a = y(a), this.node.appendChild(a.node), a.paper = this.paper
                    }
                    return this
                }, a.appendTo = function(a) {
                    return a && (a = y(a), a.append(this)), this
                }, a.prepend = function(a) {
                    if (a) {
                        if ("set" == a.type) {
                            var b, c = this;
                            return a.forEach(function(a) {
                                b ? b.after(a) : c.prepend(a), b = a
                            }), this
                        }
                        a = y(a);
                        var d = a.parent();
                        this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
                    }
                    return this
                }, a.prependTo = function(a) {
                    return a = y(a), a.prepend(this), this
                }, a.before = function(a) {
                    if ("set" == a.type) {
                        var b = this;
                        return a.forEach(function(a) {
                            var c = a.parent();
                            b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                        }), this.parent().add(), this
                    }
                    a = y(a);
                    var c = a.parent();
                    return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
                }, a.after = function(a) {
                    a = y(a);
                    var b = a.parent();
                    return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
                }, a.insertBefore = function(a) {
                    a = y(a);
                    var b = this.parent();
                    return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                }, a.insertAfter = function(a) {
                    a = y(a);
                    var b = this.parent();
                    return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                }, a.remove = function() {
                    var a = this.parent();
                    return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
                }, a.select = function(a) {
                    return y(this.node.querySelector(a))
                }, a.selectAll = function(a) {
                    for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                    return c
                }, a.asPX = function(a, b) {
                    return null == b && (b = this.attr(a)), +s(this, a, b)
                }, a.use = function() {
                    var a, b = this.node.id;
                    return b || (b = this.id, e(this.node, {
                        id: b
                    })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? w(this.type, this.node.parentNode) : w("use", this.node.parentNode), e(a.node, {
                        "xlink:href": "#" + b
                    }), a.original = this, a
                };
                var k = /\S+/g;
                a.addClass = function(a) {
                    var b, c, d, e, f = (a || "").match(k) || [],
                        g = this.node,
                        h = g.className.baseVal,
                        i = h.match(k) || [];
                    if (f.length) {
                        for (b = 0; d = f[b++];) c = i.indexOf(d), ~c || i.push(d);
                        e = i.join(" "), h != e && (g.className.baseVal = e)
                    }
                    return this
                }, a.removeClass = function(a) {
                    var b, c, d, e, f = (a || "").match(k) || [],
                        g = this.node,
                        h = g.className.baseVal,
                        i = h.match(k) || [];
                    if (i.length) {
                        for (b = 0; d = f[b++];) c = i.indexOf(d), ~c && i.splice(c, 1);
                        e = i.join(" "), h != e && (g.className.baseVal = e)
                    }
                    return this
                }, a.hasClass = function(a) {
                    var b = this.node,
                        c = b.className.baseVal,
                        d = c.match(k) || [];
                    return !!~d.indexOf(a)
                }, a.toggleClass = function(a, b) {
                    if (null != b) return b ? this.addClass(a) : this.removeClass(a);
                    var c, d, e, f, g = (a || "").match(k) || [],
                        h = this.node,
                        i = h.className.baseVal,
                        j = i.match(k) || [];
                    for (c = 0; e = g[c++];) d = j.indexOf(e), ~d ? j.splice(d, 1) : j.push(e);
                    return f = j.join(" "), i != f && (h.className.baseVal = f), this
                }, a.clone = function() {
                    var a = y(this.node.cloneNode(!0));
                    return e(a.node, "id") && e(a.node, {
                        id: a.id
                    }), g(a), a.insertAfter(this), a
                }, a.toDefs = function() {
                    var a = q(this);
                    return a.appendChild(this.node), this
                }, a.pattern = a.toPattern = function(a, b, c, d) {
                    var g = w("pattern", q(this));
                    return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
                        x: a,
                        y: b,
                        width: c,
                        height: d,
                        patternUnits: "userSpaceOnUse",
                        id: g.id,
                        viewBox: [a, b, c, d].join(" ")
                    }), g.node.appendChild(this.node), g
                }, a.marker = function(a, b, c, d, g, h) {
                    var i = w("marker", q(this));
                    return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
                        viewBox: [a, b, c, d].join(K),
                        markerWidth: c,
                        markerHeight: d,
                        orient: "auto",
                        refX: g || 0,
                        refY: h || 0,
                        id: i.id
                    }), i.node.appendChild(this.node), i
                };
                var l = function(a, b, d, e) {
                    "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
                };
                d._.Animation = l, d.animation = function(a, b, c, d) {
                    return new l(a, b, c, d)
                }, a.inAnim = function() {
                    var a = this,
                        b = [];
                    for (var c in a.anims) a.anims[A](c) && ! function(a) {
                        b.push({
                            anim: new l(a._attrs, a.dur, a.easing, a._callback),
                            mina: a,
                            curStatus: a.status(),
                            status: function(b) {
                                return a.status(b)
                            },
                            stop: function() {
                                a.stop()
                            }
                        })
                    }(a.anims[c]);
                    return b
                }, d.animate = function(a, d, e, f, g, h) {
                    "function" != typeof g || g.length || (h = g, g = c.linear);
                    var i = c.time(),
                        j = c(a, d, i, i + f, c.time, e, g);
                    return h && b.once("mina.finish." + j.id, h), j
                }, a.stop = function() {
                    for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                    return this
                }, a.animate = function(a, d, e, g) {
                    "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof l && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                    var i, j, k, m, n = [],
                        o = [],
                        p = {}, q = this;
                    for (var r in a)
                        if (a[A](r)) {
                            q.equal ? (m = q.equal(r, B(a[r])), i = m.from, j = m.to, k = m.f) : (i = +q.attr(r), j = +a[r]);
                            var s = f(i, "array") ? i.length : 1;
                            p[r] = h(n.length, n.length + s, k), n = n.concat(i), o = o.concat(j)
                        }
                    var t = c.time(),
                        u = c(n, o, t, t + d, c.time, function(a) {
                            var b = {};
                            for (var c in p) p[A](c) && (b[c] = p[c](a));
                            q.attr(b)
                        }, e);
                    return q.anims[u.id] = u, u._attrs = a, u._callback = g, b("snap.animcreated." + q.id, u), b.once("mina.finish." + u.id, function() {
                        delete q.anims[u.id], g && g.call(q)
                    }), b.once("mina.stop." + u.id, function() {
                        delete q.anims[u.id]
                    }), q
                };
                var m = {};
                a.data = function(a, c) {
                    var e = m[this.id] = m[this.id] || {};
                    if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
                    if (1 == arguments.length) {
                        if (d.is(a, "object")) {
                            for (var f in a) a[A](f) && this.data(f, a[f]);
                            return this
                        }
                        return b("snap.data.get." + this.id, this, e[a], a), e[a]
                    }
                    return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
                }, a.removeData = function(a) {
                    return null == a ? m[this.id] = {} : m[this.id] && delete m[this.id][a], this
                }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
            }(u.prototype), d.parse = function(a) {
                var b = z.doc.createDocumentFragment(),
                    c = !0,
                    d = z.doc.createElement("div");
                if (a = B(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                    if (c) b = a;
                    else
                        for (; a.firstChild;) b.appendChild(a.firstChild);
                return d.innerHTML = J, new v(b)
            }, v.prototype.select = u.prototype.select, v.prototype.selectAll = u.prototype.selectAll, d.fragment = function() {
                for (var a = Array.prototype.slice.call(arguments, 0), b = z.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                    var f = a[c];
                    f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
                }
                return new v(b)
            }, d._.make = w, d._.wrap = y, x.prototype.el = function(a, b) {
                var c = w(a, this.node);
                return b && c.attr(b), c
            }, b.on("snap.util.getattr", function() {
                var a = b.nt();
                a = a.substring(a.lastIndexOf(".") + 1);
                var c = a.replace(/[A-Z]/g, function(a) {
                    return "-" + a.toLowerCase()
                });
                return fb[A](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
            });
            var fb = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function(a) {
                var c = b.nt(),
                    d = {};
                c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
                var f = c.replace(/-(\w)/gi, function(a, b) {
                    return b.toUpperCase()
                }),
                    g = c.replace(/[A-Z]/g, function(a) {
                        return "-" + a.toLowerCase()
                    });
                fb[A](g) ? this.node.style[f] = null == a ? J : a : e(this.node, d)
            }),
            function() {}(x.prototype), d.ajax = function(a, c, d, e) {
                var g = new XMLHttpRequest,
                    h = V();
                if (g) {
                    if (f(c, "function")) e = d, d = c, c = null;
                    else if (f(c, "object")) {
                        var i = [];
                        for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                        c = i.join("&")
                    }
                    return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                        4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
                    }, 4 == g.readyState ? g : (g.send(c), g)
                }
            }, d.load = function(a, b, c) {
                d.ajax(a, function(a) {
                    var e = d.parse(a.responseText);
                    c ? b.call(c, e) : b(e)
                })
            };
            var gb = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {
                    y: i,
                    x: j
                }
            };
            return d.getElementByPoint = function(a, b) {
                var c = this,
                    d = (c.canvas, z.doc.elementFromPoint(a, b));
                if (z.win.opera && "svg" == d.tagName) {
                    var e = gb(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? y(d) : null
            }, d.plugin = function(a) {
                a(d, u, x, z, v)
            }, z.win.Snap = d, d
        }();
    return d.plugin(function(a) {
        function b(a, b, d, e, f, g) {
            return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var c = Object.prototype.toString,
            d = String,
            e = Math,
            f = "";
        ! function(c) {
            function g(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function h(a) {
                var b = e.sqrt(g(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            c.add = function(a, c, d, e, f, g) {
                var h, i, j, k, l = [
                        [],
                        [],
                        []
                    ],
                    m = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    n = [
                        [a, d, f],
                        [c, e, g],
                        [0, 0, 1]
                    ];
                for (a && a instanceof b && (n = [
                    [a.a, a.c, a.e],
                    [a.b, a.d, a.f],
                    [0, 0, 1]
                ]), h = 0; 3 > h; h++)
                    for (i = 0; 3 > i; i++) {
                        for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                        l[h][i] = k
                    }
                return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
            }, c.invert = function() {
                var a = this,
                    c = a.a * a.d - a.b * a.c;
                return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
            }, c.clone = function() {
                return new b(this.a, this.b, this.c, this.d, this.e, this.f)
            }, c.translate = function(a, b) {
                return this.add(1, 0, 0, 1, a, b)
            }, c.scale = function(a, b, c, d) {
                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
            }, c.rotate = function(b, c, d) {
                b = a.rad(b), c = c || 0, d = d || 0;
                var f = +e.cos(b).toFixed(9),
                    g = +e.sin(b).toFixed(9);
                return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
            }, c.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, c.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, c.get = function(a) {
                return +this[d.fromCharCode(97 + a)].toFixed(4)
            }, c.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, c.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, c.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, c.split = function() {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var c = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                var d = -c[0][1],
                    f = c[1][1];
                return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
            }, c.toTransformString = function(a) {
                var b = a || this.split();
                return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
            }
        }(b.prototype), a.Matrix = b, a.matrix = function(a, c, d, e, f, g) {
            return new b(a, c, d, e, f, g)
        }
    }), d.plugin(function(a, c, d, e, f) {
        function g(d) {
            return function(e) {
                if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
                    if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                        e.node.id || p(e.node, {
                            id: e.id
                        });
                        var g = q(e.node.id)
                    } else g = e.attr(d);
                    else if (g = a.color(e), g.error) {
                    var h = a(n(this).ownerSVGElement).gradient(e);
                    h ? (h.node.id || p(h.node, {
                        id: h.id
                    }), g = q(h.node.id)) : g = e
                } else g = r(g);
                var i = {};
                i[d] = g, p(this.node, i), this.node.style[d] = t
            }
        }

        function h(a) {
            b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }

        function i(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
            }
            return b
        }

        function j() {
            return b.stop(), this.node.style.fontSize
        }
        var k = a._.make,
            l = a._.wrap,
            m = a.is,
            n = a._.getSomeDefs,
            o = /^url\(#?([^)]+)\)$/,
            p = a._.$,
            q = a.url,
            r = String,
            s = a._.separator,
            t = "";
        b.on("snap.util.attr.mask", function(a) {
            if (a instanceof c || a instanceof f) {
                if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
                else d = k("mask", n(this)), d.node.appendChild(a.node);
                !d.node.id && p(d.node, {
                    id: d.id
                }), p(this.node, {
                    mask: q(d.id)
                })
            }
        }),
        function(a) {
            b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
        }(function(a) {
            if (a instanceof c || a instanceof f) {
                if (b.stop(), "clipPath" == a.type) var d = a;
                else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                    id: d.id
                });
                p(this.node, {
                    "clip-path": q(d.id)
                })
            }
        }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
            a = r(a);
            var b = a.match(u);
            if (!b) return null;
            var c = b[1],
                d = b[2],
                e = b[3];
            return d = d.split(/\s*,\s*/).map(function(a) {
                return +a == a ? +a : a
            }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
                a = a.split(":");
                var b = {
                    color: a[0]
                };
                return a[1] && (b.offset = parseFloat(a[1])), b
            }), {
                type: c,
                params: d,
                stops: e
            }
        }), b.on("snap.util.attr.d", function(c) {
            b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
                d: c
            })
        })(-1), b.on("snap.util.attr.#text", function(a) {
            b.stop(), a = r(a);
            for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(c)
        })(-1), b.on("snap.util.attr.path", function(a) {
            b.stop(), this.attr({
                d: a
            })
        })(-1), b.on("snap.util.attr.class", function(a) {
            b.stop(), this.node.className.baseVal = a
        })(-1), b.on("snap.util.attr.viewBox", function(a) {
            var c;
            c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
                viewBox: c
            }), b.stop()
        })(-1), b.on("snap.util.attr.transform", function(a) {
            this.transform(a), b.stop()
        })(-1), b.on("snap.util.attr.r", function(a) {
            "rect" == this.type && (b.stop(), p(this.node, {
                rx: a,
                ry: a
            }))
        })(-1), b.on("snap.util.attr.textpath", function(a) {
            if (b.stop(), "text" == this.type) {
                var d, e, f;
                if (!a && this.textPath) {
                    for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                    return e.remove(), void delete this.textPath
                }
                if (m(a, "string")) {
                    var g = n(this),
                        h = l(g.parentNode).path(a);
                    g.appendChild(h.node), d = h.id, h.attr({
                        id: d
                    })
                } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                    id: d
                }))); if (d)
                    if (e = this.textPath, f = this.node, e) e.attr({
                        "xlink:href": "#" + d
                    });
                    else {
                        for (e = p("textPath", {
                            "xlink:href": "#" + d
                        }); f.firstChild;) e.appendChild(f.firstChild);
                        f.appendChild(e), this.textPath = l(e)
                    }
            }
        })(-1), b.on("snap.util.attr.text", function(a) {
            if ("text" == this.type) {
                for (var c = this.node, d = function(a) {
                        var b = p("tspan");
                        if (m(a, "array"))
                            for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                        else b.appendChild(e.doc.createTextNode(a));
                        return b.normalize && b.normalize(), b
                    }; c.firstChild;) c.removeChild(c.firstChild);
                for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
            }
            b.stop()
        })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
            return b.stop(), this.transform()
        })(-1), b.on("snap.util.getattr.textpath", function() {
            return b.stop(), this.textPath
        })(-1),
        function() {
            function c(c) {
                return function() {
                    b.stop();
                    var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                    return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                }
            }

            function d(a) {
                return function(c) {
                    b.stop();
                    var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                    if ("" == c || !c) return void(this.node.style[d] = "none");
                    if ("marker" == c.type) {
                        var e = c.node.id;
                        return e || p(c.node, {
                            id: c.id
                        }), void(this.node.style[d] = q(e))
                    }
                }
            }
            b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
        }(), b.on("snap.util.getattr.r", function() {
            return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
        })(-1), b.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
                b.stop();
                var a = i(this.node);
                return 1 == a.length ? a[0] : a
            }
        })(-1), b.on("snap.util.getattr.#text", function() {
            return this.node.textContent
        })(-1), b.on("snap.util.getattr.viewBox", function() {
            b.stop();
            var c = p(this.node, "viewBox");
            return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
        })(-1), b.on("snap.util.getattr.points", function() {
            var a = p(this.node, "points");
            return b.stop(), a ? a.split(s) : void 0
        })(-1), b.on("snap.util.getattr.path", function() {
            var a = p(this.node, "d");
            return b.stop(), a
        })(-1), b.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal
        })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
    }), d.plugin(function() {
        function a(a) {
            return a
        }

        function c(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        var d = {
            "+": function(a, b) {
                return a + b
            },
            "-": function(a, b) {
                return a - b
            },
            "/": function(a, b) {
                return a / b
            },
            "*": function(a, b) {
                return a * b
            }
        }, e = String,
            f = /[a-z]+$/i,
            g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function(a) {
            var c = e(a).match(g);
            if (c) {
                var h = b.nt(),
                    i = h.substring(h.lastIndexOf(".") + 1),
                    j = this.attr(i),
                    k = {};
                b.stop();
                var l = c[3] || "",
                    m = j.match(f),
                    n = d[c[1]];
                if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
                k[i] = a, this.attr(k)
            }
        })(-10), b.on("snap.util.equal", function(h, i) {
            var j = e(this.attr(h) || ""),
                k = e(i).match(g);
            if (k) {
                b.stop();
                var l = k[3] || "",
                    m = j.match(f),
                    n = d[k[1]];
                return m && m == l ? {
                    from: parseFloat(j),
                    to: n(parseFloat(j), +k[2]),
                    f: c(m)
                } : (j = this.asPX(h), {
                    from: j,
                    to: n(j, this.asPX(h, k[2] + l)),
                    f: a
                })
            }
        })(-10)
    }), d.plugin(function(a, c, d, e) {
        var f = d.prototype,
            g = a.is;
        f.rect = function(a, b, c, d, e, f) {
            var h;
            return null == f && (f = e), g(a, "object") && "[object Object]" == a ? h = a : null != a && (h = {
                x: a,
                y: b,
                width: c,
                height: d
            }, null != e && (h.rx = e, h.ry = f)), this.el("rect", h)
        }, f.circle = function(a, b, c) {
            var d;
            return g(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                cx: a,
                cy: b,
                r: c
            }), this.el("circle", d)
        };
        var h = function() {
            function a() {
                this.parentNode.removeChild(this)
            }
            return function(b, c) {
                var d = e.doc.createElement("img"),
                    f = e.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                    c.call(d), d.onload = d.onerror = null, f.removeChild(d)
                }, d.onerror = a, f.appendChild(d), d.src = b
            }
        }();
        f.image = function(b, c, d, e, f) {
            var i = this.el("image");
            if (g(b, "object") && "src" in b) i.attr(b);
            else if (null != b) {
                var j = {
                    "xlink:href": b,
                    preserveAspectRatio: "none"
                };
                null != c && null != d && (j.x = c, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : h(b, function() {
                    a._.$(i.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    })
                }), a._.$(i.node, j)
            }
            return i
        }, f.ellipse = function(a, b, c, d) {
            var e;
            return g(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                cx: a,
                cy: b,
                rx: c,
                ry: d
            }), this.el("ellipse", e)
        }, f.path = function(a) {
            var b;
            return g(a, "object") && !g(a, "array") ? b = a : a && (b = {
                d: a
            }), this.el("path", b)
        }, f.group = f.g = function(a) {
            var b = this.el("g");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
        }, f.svg = function(a, b, c, d, e, f, h, i) {
            var j = {};
            return g(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])), this.el("svg", j)
        }, f.mask = function(a) {
            var b = this.el("mask");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
        }, f.ptrn = function(a, b, c, d, e, f, h, i) {
            if (g(a, "object")) var j = a;
            else arguments.length ? (j = {}, null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])) : j = {
                patternUnits: "userSpaceOnUse"
            };
            return this.el("pattern", j)
        }, f.use = function(a) {
            if (null != a) {
                {
                    make("use", this.node)
                }
                return a instanceof c && (a.attr("id") || a.attr({
                    id: ID()
                }), a = a.attr("id")), this.el("use", {
                    "xlink:href": a
                })
            }
            return c.prototype.use.call(this)
        }, f.text = function(a, b, c) {
            var d = {};
            return g(a, "object") ? d = a : null != a && (d = {
                x: a,
                y: b,
                text: c || ""
            }), this.el("text", d)
        }, f.line = function(a, b, c, d) {
            var e = {};
            return g(a, "object") ? e = a : null != a && (e = {
                x1: a,
                x2: c,
                y1: b,
                y2: d
            }), this.el("line", e)
        }, f.polyline = function(a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
                points: a
            }), this.el("polyline", b)
        }, f.polygon = function(a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
                points: a
            }), this.el("polygon", b)
        },
        function() {
            function c() {
                return this.selectAll("stop")
            }

            function d(b, c) {
                var d = j("stop"),
                    e = {
                        offset: +c + "%"
                    };
                return b = a.color(b), e["stop-color"] = b.hex, b.opacity < 1 && (e["stop-opacity"] = b.opacity), j(d, e), this.node.appendChild(d), this
            }

            function e() {
                if ("linearGradient" == this.type) {
                    var b = j(this.node, "x1") || 0,
                        c = j(this.node, "x2") || 1,
                        d = j(this.node, "y1") || 0,
                        e = j(this.node, "y2") || 0;
                    return a._.box(b, d, math.abs(c - b), math.abs(e - d))
                }
                var f = this.node.cx || .5,
                    g = this.node.cy || .5,
                    h = this.node.r || 0;
                return a._.box(f - h, g - h, 2 * h, 2 * h)
            }

            function g(a, c) {
                function d(a, b) {
                    for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                    m = a, l = b
                }
                var e, f = b("snap.util.grad.parse", null, c).firstDefined();
                if (!f) return null;
                f.params.unshift(a), e = "l" == f.type.toLowerCase() ? h.apply(0, f.params) : i.apply(0, f.params), f.type != f.type.toLowerCase() && j(e.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var g = f.stops,
                    k = g.length,
                    l = 0,
                    m = 0;
                k--;
                for (var n = 0; k > n; n++) "offset" in g[n] && d(n, g[n].offset);
                for (g[k].offset = g[k].offset || 100, d(k, g[k].offset), n = 0; k >= n; n++) {
                    var o = g[n];
                    e.addStop(o.color, o.offset)
                }
                return e
            }

            function h(b, f, g, h, i) {
                var k = a._.make("linearGradient", b);
                return k.stops = c, k.addStop = d, k.getBBox = e, null != f && j(k.node, {
                    x1: f,
                    y1: g,
                    x2: h,
                    y2: i
                }), k
            }

            function i(b, f, g, h, i, k) {
                var l = a._.make("radialGradient", b);
                return l.stops = c, l.addStop = d, l.getBBox = e, null != f && j(l.node, {
                    cx: f,
                    cy: g,
                    r: h
                }), null != i && null != k && j(l.node, {
                    fx: i,
                    fy: k
                }), l
            }
            var j = a._.$;
            f.gradient = function(a) {
                return g(this.defs, a)
            }, f.gradientLinear = function(a, b, c, d) {
                return h(this.defs, a, b, c, d)
            }, f.gradientRadial = function(a, b, c, d, e) {
                return i(this.defs, a, b, c, d, e)
            }, f.toString = function() {
                var b, c = this.node.ownerDocument,
                    d = c.createDocumentFragment(),
                    e = c.createElement("div"),
                    f = this.node.cloneNode(!0);
                return d.appendChild(e), e.appendChild(f), a._.$(f, {
                    xmlns: "http://www.w3.org/2000/svg"
                }), b = e.innerHTML, d.removeChild(d.firstChild), b
            }, f.clear = function() {
                for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : f.clear.call({
                    node: b
                }), b = a
            }
        }()
    }), d.plugin(function(a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function() {
                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: N.min(c, d) / 2,
                r2: N.max(c, d) / 2,
                r0: N.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function e() {
            return this.join(",").replace(L, "$1")
        }

        function f(a) {
            var b = J(a);
            return b.toString = e, b
        }

        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
        }

        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function(a, f, h) {
                a instanceof b && (a = a.attr("d")), a = E(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                    else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = R(j, 3),
                l = R(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * N.atan2(q - s, r - t) / O;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            }
        }

        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
            var k = D.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = m(q, a, c, e, g),
                    s = m(q, b, d, f, h),
                    t = r * r + s * s;
                o += n[p] * N.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a),
                e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~ (f / 8), k = ~~ (g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                })
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                x: t.x,
                y: t.y,
                t: s / k
            });
            for (s = 0; h > s; s++)
                for (var u = 0; k > u; u++) {
                    var v = m[s],
                        w = m[s + 1],
                        x = o[u],
                        y = o[u + 1],
                        z = S(w.x - v.x) < .001 ? "y" : "x",
                        A = S(y.x - x.x) < .001 ? "y" : "x",
                        B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                            x: B.x,
                            y: B.y,
                            t1: C,
                            t2: D
                        }))
                    }
                }
            return r
        }

        function r(a, b) {
            return t(a, b)
        }

        function s(a, b) {
            return t(a, b, 1)
        }

        function t(a, b, c) {
            a = E(a), b = E(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2];
                else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && t(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2 == 1
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return J(b.bbox);
            if (!a) return d();
            a = E(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                else {
                    var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                }
            var m = P.apply(0, h),
                n = P.apply(0, i),
                o = Q.apply(0, h),
                p = Q.apply(0, i),
                q = d(m, n, o - m, p - n);
            return b.bbox = J(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [["M", +a + +f, b], ["l", c - 2 * f, 0], ["a", f, f, 0, 0, 1, f, f], ["l", 0, d - 2 * f], ["a", f, f, 0, 0, 1, -f, f], ["l", 2 * f - c, 0], ["a", f, f, 0, 0, 1, -f, -f], ["l", 0, 2 * f - d], ["a", f, f, 0, 0, 1, f, -f], ["z"]];
            var g = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
            h = a + c * Math.cos(-d * g), i = a + c * Math.cos(-f * g), j = b + c * Math.sin(-d * g), k = b + c * Math.sin(-f * g), l = [
                ["M", h, j],
                ["A", c, c, 0, +(f - d > 180), 0, i, k]
            ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b),
                g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [],
                    q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                }
                var v = h[n].length;
                switch (h[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +h[n][v - 1];
                        break;
                    case "v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [["M", 0, 0]];
            var g, h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                    case "A":
                        n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                        break;
                    case "V":
                        n[1] = +o[1] + j;
                        break;
                    case "H":
                        n[1] = +o[1] + i;
                        break;
                    case "R":
                        for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                        h.pop(), h = h.concat(G(s, p));
                        break;
                    case "O":
                        h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                        break;
                    case "U":
                        h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                        break;
                    case "M":
                        k = +o[1] + i, l = +o[2] + j;
                    default:
                        for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
                else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v]; if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case "Z":
                        i = +k, j = +l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * O / 180,
                n = O / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = N.asin(((c - x) / e).toFixed(9)),
                    z = N.asin(((j - x) / e).toFixed(9));
                y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
            }
            var A = z - y;
            if (S(A) > m) {
                var B = z,
                    D = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                J = N.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                P = [b + K * G, c - L * F],
                Q = [i + K * I, j - L * H],
                R = [i, j];
            if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
            o = [P, Q, R].concat(o).join().split(",");
            for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return T
        }

        function D(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [
                    [],
                    []
                ], s = 0; 2 > s; ++s)
                if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                    if (S(j) < 1e-12) continue;
                    l = -k / j, l > 0 && 1 > l && q.push(l)
                } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: P.apply(0, r[0]),
                    y: P.apply(0, r[1])
                },
                max: {
                    x: Q.apply(0, r[0]),
                    y: Q.apply(0, r[1])
                }
            }
        }

        function E(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, j = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                    }
                }, l = function(a, b, c, d, f) {
                    a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
                }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                var s = e[q],
                    t = g && g[q],
                    u = s.length,
                    v = g && t.length;
                h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function F(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = E(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function G(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                }];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var H = b.prototype,
            I = a.is,
            J = a._.clone,
            K = "hasOwnProperty",
            L = /,?([a-z]),?/gi,
            M = parseFloat,
            N = Math,
            O = N.PI,
            P = N.min,
            Q = N.max,
            R = N.pow,
            S = N.abs,
            T = h(1),
            U = h(),
            V = h(0, 1),
            W = a._unit2px,
            X = {
                path: function(a) {
                    return a.attr("path")
                },
                circle: function(a) {
                    var b = W(a);
                    return x(b.cx, b.cy, b.r)
                },
                ellipse: function(a) {
                    var b = W(a);
                    return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                },
                rect: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                },
                image: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height)
                },
                line: function(a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                },
                polyline: function(a) {
                    return "M" + a.attr("points")
                },
                polygon: function(a) {
                    return "M" + a.attr("points") + "z"
                },
                deflt: function(a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
        a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
            var d = V(a, c, 1);
            return b ? V(d, b).end : d
        }, H.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, H.getPointAtLength = function(a) {
            return U(this.attr("d"), a)
        }, H.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
    }), d.plugin(function(a) {
        var d = Math.max,
            e = Math.min,
            f = function(a) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            }, g = f.prototype;
        g.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, g.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, g.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, g.animate = function(d, e, f, g) {
            "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
            var h = arguments;
            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
            var j, k = function() {
                    j ? this.b = j : j = this.b
                }, l = 0,
                m = g && function() {
                    l++ == this.length && g.call(this)
                };
            return this.forEach(function(a, c) {
                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, m)
            })
        }, g.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, g.bind = function(a, b, c) {
            var d = {};
            if ("function" == typeof b) this.bindings[a] = b;
            else {
                var e = c || a;
                this.bindings[a] = function(a) {
                    d[e] = a, b.attr(d)
                }
            }
            return this
        }, g.attr = function(a) {
            var b = {};
            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
            return this
        }, g.clear = function() {
            for (; this.length;) this.pop()
        }, g.splice = function(a, b) {
            a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
            var c, g = [],
                h = [],
                i = [];
            for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
            for (c = 0; b > c; c++) h.push(this[a + c]);
            for (; c < this.length - a; c++) g.push(this[a + c]);
            var j = i.length;
            for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
            for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
            return new f(h)
        }, g.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, g.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, g.getBBox = function() {
            for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
                if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
                }
            return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
                x: a,
                y: b,
                x2: c,
                y2: f,
                width: c - a,
                height: f - b,
                cx: a + (c - a) / 2,
                cy: b + (f - b) / 2
            }
        }, g.clone = function(a) {
            a = new f;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, g.toString = function() {
            return "Snap‘s set"
        }, g.type = "set", a.set = function() {
            var a = new f;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function(a, c) {
        function d(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function e(b, c, e) {
            c = m(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            for (var f, g, h, k, l = Math.max(b.length, c.length), n = [], o = [], p = 0; l > p; p++) {
                if (h = b[p] || d(c[p]), k = c[p] || d(h), h[0] != k[0] || "r" == h[0].toLowerCase() && (h[2] != k[2] || h[3] != k[3]) || "s" == h[0].toLowerCase() && (h[3] != k[3] || h[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), n = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], o = [
                        ["m", c.a, c.b, c.c, c.d, c.e, c.f]
                    ];
                    break
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(h.length, k.length); g > f; f++) f in h && (n[p][f] = h[f]), f in k && (o[p][f] = k[f])
            }
            return {
                from: j(n),
                to: j(o),
                f: i(n)
            }
        }

        function f(a) {
            return a
        }

        function g(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }

        function h(b) {
            return a.rgb(b[0], b[1], b[2])
        }

        function i(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h+++"]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function j(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }
        var k = {}, l = /[a-z]+$/i,
            m = String;
        k.stroke = k.fill = "colour", c.prototype.equal = function(a, c) {
            return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function(b, c) {
            var d, n, o = m(this.attr(b) || ""),
                p = this;
            if (o == +o && c == +c) return {
                from: +o,
                to: +c,
                f: f
            };
            if ("colour" == k[b]) return d = a.color(o), n = a.color(c), {
                from: [d.r, d.g, d.b, d.opacity],
                to: [n.r, n.g, n.b, n.opacity],
                f: h
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(o, c, function() {
                return p.getBBox(1)
            });
            if ("d" == b || "path" == b) return d = a.path.toCubic(o, c), {
                from: j(d[0]),
                to: j(d[1]),
                f: i(d[0])
            };
            if ("points" == b) return d = m(o).split(a._.separator), n = m(c).split(a._.separator), {
                from: d,
                to: n,
                f: function(a) {
                    return a
                }
            };
            aUnit = o.match(l);
            var q = m(c).match(l);
            return aUnit && aUnit == q ? {
                from: parseFloat(o),
                to: parseFloat(c),
                f: g(aUnit)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: f
            }
        })
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = (function(a, b) {
                var c = "y" == a ? "scrollTop" : "scrollLeft",
                    d = b && b.node ? b.node.ownerDocument : e.doc;
                return d[c in d.documentElement ? "documentElement" : "body"][c]
            }), l = function() {
                this.returnValue = !1
            }, m = function() {
                return this.originalEvent.preventDefault()
            }, n = function() {
                this.cancelBubble = !0
            }, o = function() {
                return this.originalEvent.stopPropagation()
            }, p = function() {
                return e.doc.addEventListener ? function(a, b, c, d) {
                    var e = h && j[b] ? j[b] : b,
                        f = function(e) {
                            var f = k("y", d),
                                i = k("x", d);
                            if (h && j[g](b))
                                for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++)
                                    if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
                                        var p = e;
                                        e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
                                        break
                                    }
                            var q = e.clientX + i,
                                r = e.clientY + f;
                            return c.call(d, e, q, r)
                        };
                    return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                    function() {
                        return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                    }
                } : e.doc.attachEvent ? function(a, b, c, d) {
                    var e = function(a) {
                        a = a || d.node.ownerDocument.window.event;
                        var b = k("y", d),
                            e = k("x", d),
                            f = a.clientX + e,
                            g = a.clientY + b;
                        return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, f, g)
                    };
                    a.attachEvent("on" + b, e);
                    var f = function() {
                        return a.detachEvent("on" + b, e), !0
                    };
                    return f
                } : void 0
            }(), q = [], r = function(a) {
                for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = q.length; i--;) {
                    if (c = q[i], h) {
                        for (var j, l = a.touches && a.touches.length; l--;)
                            if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                                break
                            }
                    } else a.preventDefault(); {
                        var m = c.el.node;
                        m.nextSibling, m.parentNode, m.style.display
                    }
                    d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
                }
            }, s = function(c) {
                a.unmousemove(r).unmouseup(s);
                for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                q = []
            }, t = i.length; t--;)! function(b) {
            a[b] = f[b] = function(c, d) {
                return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: p(this.node || document, b, c, d || this)
                })), this
            }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[t]);
        f.hover = function(a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var u = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i, j, k) {
                (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
                    el: this,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
            }
            if (!arguments.length) {
                var j;
                return this.drag(function(a, b) {
                    this.attr({
                        transform: j + (j ? "T" : "t") + [a, b]
                    })
                }, function() {
                    j = this.transform().local
                })
            }
            return this._drag = {}, u.push({
                el: this,
                start: i
            }), this.mousedown(i), this
        }, f.undrag = function() {
            for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
            return !u.length && a.unmousemove(r).unmouseup(s), this
        }
    }), d.plugin(function(a, c, d) {
        var e = (c.prototype, d.prototype),
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$;
        a.filter = {}, e.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)),
                f = a._.id(),
                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, {
                id: f,
                filterUnits: "userSpaceOnUse"
            }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function() {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function(d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, {
                    id: d.id
                }), e = d.id), h(this.node, {
                    filter: a.url(e)
                })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }, a.filter.blur.toString = function() {
            return this()
        }, a.filter.shadow = function(b, c, d, e, f) {
            return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function() {
            return this()
        }, a.filter.grayscale = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function() {
            return this()
        }, a.filter.sepia = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function() {
            return this()
        }, a.filter.saturate = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            })
        }, a.filter.saturate.toString = function() {
            return this()
        }, a.filter.hueRotate = function(b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            })
        }, a.filter.hueRotate.toString = function() {
            return this()
        }, a.filter.invert = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function() {
            return this()
        }, a.filter.brightness = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            })
        }, a.filter.brightness.toString = function() {
            return this()
        }, a.filter.contrast = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function() {
            return this()
        }
    }), d
}),
function(a, b, c, d) {
    "use strict";

    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    };
    f(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
    });
    var g = function(b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0], !e) return d
                } else e = d;
                return a(e.querySelectorAll(b))
            }
            return a(c.querySelectorAll(b))
        }
        return a(b, d)
    }, h = function(a) {
            var b = [];
            return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
        }, i = function(a) {
            for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
            return d.reverse().join("-")
        }, j = function(b, c) {
            var d = this,
                e = !g(this).data(this.attr_name(!0));
            return g(this.scope).is("[" + this.attr_name() + "]") ? (g(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), e && this.events(this.scope)) : g("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = !g(this).data(d.attr_name(!0) + "-init");
                g(this).data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), e && d.events(this)
            }), "string" == typeof b ? this[b].call(this, c) : void 0
        }, k = function(a, b) {
            function c() {
                b(a[0])
            }

            function d() {
                if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        b = a.match(/\?/) ? "&" : "?";
                    b += "random=" + (new Date).getTime(), this.attr("src", a + b)
                }
            }
            return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
        };
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
        function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            }
        }
    }(c),
    function() {
        function a() {
            c && (f(a), h && jQuery.fx.tick())
        }
        for (var c, d = 0, e = ["webkit", "moz"], f = b.requestAnimationFrame, g = b.cancelAnimationFrame, h = "undefined" != typeof jQuery.fx; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
        f ? (b.requestAnimationFrame = f, b.cancelAnimationFrame = g, h && (jQuery.fx.timer = function(b) {
            b() && jQuery.timers.push(b) && !c && (c = !0, a())
        }, jQuery.fx.stop = function() {
            c = !1
        })) : (b.requestAnimationFrame = function(a) {
            var c = (new Date).getTime(),
                e = Math.max(0, 16 - (c - d)),
                f = b.setTimeout(function() {
                    a(c + e)
                }, e);
            return d = c + e, f
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(jQuery), b.Foundation = {
        name: "Foundation",
        version: "5.3.1",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: d
        },
        init: function(a, b, c, d, e) {
            var f = [a, c, d, e],
                h = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f));
            else
                for (var i in this.libs) h.push(this.init_lib(i, b));
            return a
        },
        init_lib: function(b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function() {}
        },
        patch: function(a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
        },
        set_namespace: function() {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b
        },
        libs: {},
        utils: {
            S: g,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this,
                        e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e), c = null
                    }, b))
                }
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var f = this,
                        g = arguments,
                        h = function() {
                            d = null, c || (e = a.apply(f, g))
                        }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                }
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                }

                function e(b) {
                    return "string" == typeof b ? a.trim(b) : b
                }
                c = c || "options";
                var f, g, h, i = {}, j = function(a) {
                        var b = Foundation.global.namespace;
                        return a.data(b.length > 0 ? b + "-" + c : c)
                    }, k = j(b);
                if ("object" == typeof k) return k;
                for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (g[1] = -1 === g[1].indexOf(".") ? parseInt(g[1], 10) : parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                return i
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
            },
            add_custom_rule: function(a, b) {
                if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
                else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
                }
            },
            image_loaded: function(a, b) {
                var c = this,
                    d = a.length;
                0 === d && b(a), a.each(function() {
                    k(c.S(this), function() {
                        d -= 1, 0 === d && b(a)
                    })
                })
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [this].concat(a)), this
        })
    }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.3.3",
        settings: {
            live_validate: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a) {
                    var b = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                        d = a.value,
                        e = b === d;
                    return e
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            var c = this,
                d = c.S(b).attr("novalidate", "novalidate"),
                e = d.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), d.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(a) {
                var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                return c.validate(c.S(this).find("input, textarea, select").get(), a, b)
            }).on("reset", function() {
                return c.reset(a(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                c.validate([this], a)
            }).on("keydown.fndtn.abide", function(a) {
                e.live_validate === !0 && (clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([this], a)
                }.bind(this), e.timeout))
            })
        },
        reset: function(b) {
            b.removeAttr(this.invalid_attr), a(this.invalid_attr, b).removeAttr(this.invalid_attr), a(".error", b).not("small").removeClass("error")
        },
        validate: function(a, b, c) {
            for (var d = this.parse_patterns(a), e = d.length, f = this.S(a[0]).closest("form"), g = /submit/.test(b.type), h = 0; e > h; h++)
                if (!d[h] && (g || c)) return this.settings.focus_on_invalid && a[h].focus(), f.trigger("invalid"), this.S(a[h]).closest("form").attr(this.invalid_attr, ""), !1;
            return (g || c) && f.trigger("valid"), f.removeAttr(this.invalid_attr), c ? !1 : !0
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c)
        },
        pattern: function(a) {
            var b = a.getAttribute("type"),
                c = "string" == typeof a.getAttribute("required"),
                d = a.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [a, this.settings.patterns[d], c] : d.length > 0 ? [a, new RegExp(d), c] : this.settings.patterns.hasOwnProperty(b) ? [a, this.settings.patterns[b], c] : (d = /.*/, [a, d, c])
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length,
                d = [],
                e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (e.data(this.attr_name(!0) + "-init") || {}; c--;) {
                var f, g, h = b[c][0],
                    i = b[c][2],
                    j = h.value.trim(),
                    k = this.S(h).parent(),
                    l = h.getAttribute(this.add_namespace("data-abide-validator")),
                    m = "radio" === h.type,
                    n = "checkbox" === h.type,
                    o = this.S('label[for="' + h.getAttribute("id") + '"]'),
                    p = i ? h.value.length > 0 : !0;
                h.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f = k.is("label") ? k.parent() : k, m && i ? d.push(this.valid_radio(h, i)) : n && i ? d.push(this.valid_checkbox(h, i)) : (l && (g = this.settings.validators[l].apply(this, [h, i, f]), d.push(g)), d.push(b[c][1].test(j) && p || !i && h.value.length < 1 || a(h).attr("disabled") ? !0 : !1), d = [d.every(function(a) {
                    return a
                })], d[0] ? (this.S(h).removeAttr(this.invalid_attr), f.removeClass("error"), o.length > 0 && this.settings.error_labels && o.removeClass("error"), a(h).triggerHandler("valid")) : (f.addClass("error"), this.S(h).attr(this.invalid_attr, ""), o.length > 0 && this.settings.error_labels && o.addClass("error"), a(h).triggerHandler("invalid")))
            }
            return d
        },
        valid_checkbox: function(a, b) {
            var a = this.S(a),
                c = a.is(":checked") || !b;
            return c ? a.removeAttr(this.invalid_attr).parent().removeClass("error") : a.attr(this.invalid_attr, "").parent().addClass("error"), c
        },
        valid_radio: function(a) {
            for (var b = a.getAttribute("name"), c = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + b + "']"), d = c.length, e = !1, f = 0; d > f; f++) c[f].checked && (e = !0);
            for (var f = 0; d > f; f++) e ? this.S(c[f]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(c[f]).attr(this.invalid_attr, "").parent().addClass("error");
            return e
        },
        valid_equal: function(a, b, d) {
            var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                f = a.value,
                g = e === f;
            return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass("error")) : (this.S(a).attr(this.invalid_attr, ""), d.addClass("error")), g
        },
        valid_oneof: function(a, b, c, d) {
            var a = this.S(a),
                e = this.S("[" + this.add_namespace("data-oneof") + "]"),
                f = e.filter(":checked").length > 0;
            if (f ? a.removeAttr(this.invalid_attr).parent().removeClass("error") : a.attr(this.invalid_attr, "").parent().addClass("error"), !d) {
                var g = this;
                e.each(function() {
                    g.valid_oneof.call(g, this, null, null, !0)
                })
            }
            return f
        }
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.3.3",
        settings: {
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = this.S;
            c(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(d) {
                var e = c(this).closest("[" + b.attr_name() + "]"),
                    f = b.attr_name() + "=" + e.attr(b.attr_name()),
                    g = e.data(b.attr_name(!0) + "-init"),
                    h = c("#" + this.href.split("#")[1]),
                    i = a("> dd", e),
                    j = i.children(".content"),
                    k = j.filter("." + g.active_class);
                return d.preventDefault(), e.attr(b.attr_name()) && (j = j.add("[" + f + "] dd > .content"), i = i.add("[" + f + "] dd")), g.toggleable && h.is(k) ? (h.parent("dd").toggleClass(g.active_class, !1), h.toggleClass(g.active_class, !1), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h])) : (g.multi_expand || (j.removeClass(g.active_class), i.removeClass(g.active_class)), h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h]))
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.3.3",
        settings: {
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = this.S;
            a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function(a) {
                var d = c(this).closest("[" + b.attr_name() + "]"),
                    e = d.data(b.attr_name(!0) + "-init") || b.settings;
                a.preventDefault(), Modernizr.csstransitions ? (d.addClass("alert-close"), d.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback()
                })) : d.fadeOut(300, function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.3.3",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(a, b, c) {
            var d = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                d.assemble(d.S("li", this))
            })
        },
        events: function(d) {
            var e = this,
                f = e.S,
                g = a(".scroll-container");
            g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                var b = b || f(this),
                    c = c || b,
                    d = b.next("li"),
                    g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"),
                    h = f(a.target);
                a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, h = f("img", c)), e.open(h, b, c), e.update_paddles(c)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                e.nav(a, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                e.nav(a, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this)
            }), a(c).on("keydown.fndtn.clearing", function(a) {
                e.keydown(a)
            }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                e.resize()
            }), this.swipe_events(d)
        },
        swipe_events: function() {
            var a = this,
                b = a.S;
            b(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                a.touches || (a = a.originalEvent);
                var c = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                b(this).data("swipe-transition", c), a.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(c) {
                if (c.touches || (c = c.originalEvent), !(c.touches.length > 1 || c.scale && 1 !== c.scale)) {
                    var d = b(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = c.touches[0].pageX - d.start_page_x, Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !! (d.is_scrolling || Math.abs(d.delta_x) < Math.abs(c.touches[0].pageY - d.start_page_y))), !d.is_scrolling && !d.active) {
                        c.preventDefault();
                        var e = d.delta_x < 0 ? "next" : "prev";
                        d.active = !0, a.nav(c, e)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                b(this).data("swipe-transition", {}), a.stopPropagation()
            })
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = c.detach(),
                    e = "";
                if (null != d[0]) {
                    e = d[0].outerHTML;
                    var f = this.S("#foundationClearingHolder"),
                        g = c.data(this.attr_name(!0) + "-init"),
                        h = {
                            grid: '<div class="carousel">' + e + "</div>",
                            viewing: g.templates.viewing
                        }, i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>",
                        j = this.settings.touch_label;
                    Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove()
                }
            }
        },
        open: function(b, d, e) {
            function f() {
                setTimeout(function() {
                    this.image_loaded(m, function() {
                        1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this)
                    }.bind(this))
                }.bind(this), 100)
            }

            function g(b) {
                var c = a(b);
                c.css("visibility", "visible"), i.css("overflow", "hidden"), j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                    e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible")
                }), l.trigger("opened.fndtn.clearing")
            }
            var h = this,
                i = a(c.body),
                j = e.closest(".clearing-assembled"),
                k = h.S("div", j).first(),
                l = h.S(".visible-img", k),
                m = h.S("img", l).not(b),
                n = h.S(".clearing-touch-label", k),
                o = !1;
            a("body").on("touchmove", function(a) {
                a.preventDefault()
            }), m.error(function() {
                o = !0
            }), this.locked() || (l.trigger("open.fndtn.clearing"), m.attr("src", this.load(b)).css("visibility", "hidden"), f.call(this))
        },
        close: function(b, d) {
            b.preventDefault();
            var e, f, g = function(a) {
                    return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
                }(a(d)),
                h = a(c.body);
            return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), a("body").off("touchmove"), !1
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0
        },
        keydown: function(b) {
            var c = a(".clearing-blackout ul[" + this.attr_name() + "]"),
                d = this.rtl ? 37 : 39,
                e = this.rtl ? 39 : 37,
                f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        },
        nav: function(b, c) {
            var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c)
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img"),
                c = a(".clearing-touch-label", ".clearing-blackout");
            b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"))
        },
        fix_height: function(a) {
            var b = a.parent().children(),
                c = this;
            return b.each(function() {
                var a = c.S(this),
                    b = a.find("img");
                a.height() > b.outerHeight() && a.addClass("fix-height")
            }).closest("ul").width(100 * b.length + "%"), this
        },
        update_paddles: function(a) {
            a = a.closest("li");
            var b = a.closest(".carousel").siblings(".visible-img");
            a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled")
        },
        center_and_label: function(a, b) {
            return this.rtl ? (a.css({
                marginRight: -(a.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2),
                left: "auto",
                right: "50%"
            }), b.length > 0 && b.css({
                marginRight: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                left: "auto",
                right: "50%"
            })) : (a.css({
                marginLeft: -(a.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2)
            }), b.length > 0 && b.css({
                marginLeft: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
            })), this
        },
        load: function(a) {
            var b;
            return b = "A" === a[0].nodeName ? a.attr("href") : a.parent().attr("href"), this.preload(a), b ? b : a.attr("src")
        },
        preload: function(a) {
            this.img(a.closest("li").next()).img(a.closest("li").prev())
        },
        img: function(a) {
            if (a.length) {
                var b = new Image,
                    c = this.S("a", a);
                b.src = c.length ? c.attr("href") : this.S("img", a).attr("src")
            }
            return this
        },
        caption: function(a, b) {
            var c = b.attr("data-caption");
            return c ? a.html(c).show() : a.text("").hide(), this
        },
        go: function(a, b) {
            var c = this.S(".visible", a),
                d = c[b]();
            this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), d.length && this.S("img", d).trigger("click", [c, d]).trigger("click.fndtn.clearing", [c, d]).trigger("change.fndtn.clearing")
        },
        shift: function(a, b, c) {
            var d, e = b.parent(),
                f = this.settings.prev_index || b.index(),
                g = this.direction(e, a, b),
                h = this.rtl ? "right" : "left",
                i = parseInt(e.css("left"), 10),
                j = b.outerWidth(),
                k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, e.animate(k, 300, this.unlock())), c()
        },
        direction: function(a, b, c) {
            var d, e = this.S("li", a),
                f = e.outerWidth() + e.outerWidth() / 4,
                g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1,
                h = e.index(c);
            return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = h, d
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b - 1; c--)
                if (c === a) return !0;
            return !1
        },
        lock: function() {
            this.settings.locked = !0
        },
        unlock: function() {
            this.settings.locked = !1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.3.3",
        settings: {
            active_class: "open",
            align: "bottom",
            is_hover: !1,
            opened: function() {},
            closed: function() {}
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c)
        },
        events: function() {
            var c = this,
                d = c.S;
            d(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var e = d(this).data(c.attr_name(!0) + "-init") || c.settings;
                (!e.is_hover || Modernizr.touch) && (b.preventDefault(), c.toggle(a(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, e, f = d(this);
                clearTimeout(c.timeout), f.data(c.data_attr()) ? (b = d("#" + f.data(c.data_attr())), e = f) : (b = f, e = d("[" + c.attr_name() + "='" + b.attr("id") + "']"));
                var g = e.data(c.attr_name(!0) + "-init") || c.settings;
                d(a.target).data(c.data_attr()) && g.is_hover && c.closeall.call(c), g.is_hover && c.open.apply(c, [b, e])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var a = d(this);
                c.timeout = setTimeout(function() {
                    if (a.data(c.data_attr())) {
                        var b = a.data(c.data_attr(!0) + "-init") || c.settings;
                        b.is_hover && c.close.call(c, d("#" + a.data(c.data_attr())))
                    } else {
                        var e = d("[" + c.attr_name() + '="' + d(this).attr("id") + '"]'),
                            b = e.data(c.attr_name(!0) + "-init") || c.settings;
                        b.is_hover && c.close.call(c, a)
                    }
                }.bind(this), 150)
            }).on("click.fndtn.dropdown", function(b) {
                var e = d(b.target).closest("[" + c.attr_name() + "-content]");
                if (!(d(b.target).closest("[" + c.attr_name() + "]").length > 0)) return !d(b.target).data("revealId") && e.length > 0 && (d(b.target).is("[" + c.attr_name() + "-content]") || a.contains(e.first()[0], b.target)) ? void b.stopPropagation() : void c.close.call(c, d("[" + c.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + c.attr_name() + "-content]", function() {
                c.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + c.attr_name() + "-content]", function() {
                c.settings.closed.call(this)
            }), d(b).off(".dropdown").on("resize.fndtn.dropdown", c.throttle(function() {
                c.resize.call(c)
            }, 50)), this.resize()
        },
        close: function(a) {
            var b = this;
            a.each(function() {
                b.S(this).hasClass(b.settings.active_class) && (b.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(b.settings.active_class).prev("[" + b.attr_name() + "]").removeClass(b.settings.active_class).removeData("target"), b.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [a]))
            })
        },
        closeall: function() {
            var b = this;
            a.each(b.S("[" + this.attr_name() + "-content]"), function() {
                b.close.call(b, b.S(this))
            })
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), a.data("target", b.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [a, b])
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(a) {
            var b = this.S("#" + a.data(this.data_attr()));
            0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a))
        },
        resize: function() {
            var a = this.S("[" + this.attr_name() + "-content].open"),
                b = this.S("[" + this.attr_name() + "='" + a.attr("id") + "']");
            a.length && b.length && this.css(a, b)
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8);
            if (this.clear_idx(), this.small()) {
                var d = this.dirs.bottom.call(a, b);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: d.top
                }), a.css(Foundation.rtl ? "right" : "left", c)
            } else {
                var e = b.data(this.attr_name(!0) + "-init") || this.settings;
                this.style(a, b, e)
            }
            return a
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e)
        },
        dirs: {
            _base: function(a) {
                var b = this.offsetParent(),
                    c = b.offset(),
                    d = a.offset();
                return d.top -= c.top, d.left -= c.left, d
            },
            top: function(a) {
                var b = Foundation.libs.dropdown,
                    c = b.dirs._base.call(this, a),
                    d = 8;
                return this.addClass("drop-top"), (a.outerWidth() < this.outerWidth() || b.small()) && b.adjust_pip(d, c), Foundation.rtl ? {
                    left: c.left - this.outerWidth() + a.outerWidth(),
                    top: c.top - this.outerHeight()
                } : {
                    left: c.left,
                    top: c.top - this.outerHeight()
                }
            },
            bottom: function(a) {
                var b = Foundation.libs.dropdown,
                    c = b.dirs._base.call(this, a),
                    d = 8;
                return (a.outerWidth() < this.outerWidth() || b.small()) && b.adjust_pip(d, c), b.rtl ? {
                    left: c.left - this.outerWidth() + a.outerWidth(),
                    top: c.top + a.outerHeight()
                } : {
                    left: c.left,
                    top: c.top + a.outerHeight()
                }
            },
            left: function(a) {
                var b = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-left"), {
                    left: b.left - this.outerWidth(),
                    top: b.top
                }
            },
            right: function(a) {
                var b = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-right"), {
                    left: b.left + a.outerWidth(),
                    top: b.top
                }
            }
        },
        adjust_pip: function(a, b) {
            var c = Foundation.stylesheet;
            this.small() && (a += b.left - 8), this.rule_idx = c.cssRules.length;
            var d = ".f-dropdown.open:before",
                e = ".f-dropdown.open:after",
                f = "left: " + a + "px;",
                g = "left: " + (a - 1) + "px;";
            c.insertRule ? (c.insertRule([d, "{", f, "}"].join(" "), this.rule_idx), c.insertRule([e, "{", g, "}"].join(" "), this.rule_idx + 1)) : (c.addRule(d, f, this.rule_idx), c.addRule(e, g, this.rule_idx + 1))
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.3.3",
        settings: {
            use_tallest: !0,
            before_height_change: a.noop,
            after_height_change: a.noop,
            equalize_on_stack: !1
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow()
        },
        events: function() {
            this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow()
            }.bind(this))
        },
        equalize: function(b) {
            var c = !1,
                d = b.find("[" + this.attr_name() + "-watch]:visible"),
                e = b.data(this.attr_name(!0) + "-init");
            if (0 !== d.length) {
                var f = d.first().offset().top;
                if (e.before_height_change(), b.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), d.height("inherit"), d.each(function() {
                    var b = a(this);
                    b.offset().top !== f && (c = !0)
                }), e.equalize_on_stack !== !1 || !c) {
                    var g = d.map(function() {
                        return a(this).outerHeight(!1)
                    }).get();
                    if (e.use_tallest) {
                        var h = Math.max.apply(null, g);
                        d.css("height", h)
                    } else {
                        var i = Math.min.apply(null, g);
                        d.css("height", i)
                    }
                    e.after_height_change(), b.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        },
        reflow: function() {
            var b = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var c = a(this);
                b.image_loaded(b.S("img", this), function() {
                    b.equalize(c)
                })
            })
        }
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.3.3",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e)) return;
                        return b[0].src = c, d(b[0].src)
                    }
                    var f = b.data(this.data_attr + "-last-path"),
                        g = this;
                    if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                        b.html(a), b.data(g.data_attr + "-last-path", c), d()
                    })
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
        },
        get_media_hash: function() {
            var a = "";
            for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
            return a
        },
        events: function() {
            var c, d = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                var a = d.get_media_hash();
                a !== c && d.resize(), c = a
            }, 50)), this
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
            for (var c in b)
                if (b.hasOwnProperty(c)) {
                    var d = this.results(c, b[c]);
                    d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function() {
                        if (arguments[0] instanceof Array) var a = arguments[0];
                        else var a = Array.prototype.slice.call(arguments, 0);
                        d.el.trigger(d.scenario[1], a)
                    })
                }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0)
                for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
                    var e, f = b[c][2];
                    if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), e.matches) return {
                        el: d,
                        scenario: b[c]
                    }
                }
            return !1
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"),
                b = a.length,
                c = b,
                d = 0,
                e = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
                if (d++, a[c]) {
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_images.push(a[c])
                }
                d === b && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"),
                b = a.length,
                c = b,
                d = 0,
                e = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
                d++;
                var f = a[c].getAttribute(e) || "";
                f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length; d--;) this.object(a(this["cached_" + c][d]));
            return a(b).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace"
        },
        parse_scenario: function(a) {
            var b = a[0].match(/(.+),\s*(\w+)\s*$/),
                c = a[1];
            if (b) var d = b[1],
            e = b[2];
            else var f = a[0].split(/,\s*$/),
            d = f[0], e = "";
            return [this.trim(d), this.convert_directive(e), this.trim(c)]
        },
        object: function(a) {
            var b = this.parse_data_attr(a),
                c = [],
                d = b.length;
            if (d > 0)
                for (; d--;) {
                    var e = b[d].split(/\((.*?)(\))$/);
                    if (e.length > 1) {
                        var f = this.parse_scenario(e);
                        c.push(f)
                    }
                }
            return this.store(a, c)
        },
        store: function(a, b) {
            var c = this.random_str(),
                d = a.data(this.add_namespace("uuid", !0));
            return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b
        },
        set_data_attr: function(a) {
            return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(a) {
            for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
            return d
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.3.3",
        defaults: {
            expose: !1,
            modal: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || a.extend({}, this.defaults, d || c), this.bindings(c, d)
        },
        events: function() {
            var c = this;
            a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                a.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(a) {
                a.preventDefault(), this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
                a.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
                if (a("[" + c.attr_name() + "]").length > 0 && c.settings.$next_tip) {
                    if (c.settings.exposed.length > 0) {
                        var b = a(c.settings.exposed);
                        b.each(function() {
                            var b = a(this);
                            c.un_expose(b), c.expose(b)
                        })
                    }
                    c.is_phone() ? c.pos_phone() : c.pos_default(!1)
                }
            }, 100))
        },
        start: function() {
            var b = this,
                c = a("[" + this.attr_name() + "]", this.scope),
                d = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                e = d.length;
            !c.length > 0 || (this.settings.init || this.events(), this.settings = c.data(this.attr_name(!0) + "-init"), this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof a.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
                var f = a(this);
                this.settings = a.extend({}, b.defaults, b.data_options(f));
                for (var g = e; g--;) b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
                b.create({
                    $li: f,
                    index: c
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        },
        resume: function() {
            this.set_li(), this.show()
        },
        tip_template: function(b) {
            var c, d;
            return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), d = a.trim(a(b.li).html()) + this.prev_button_text(b.prev_button_text, b.index) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), c.append(a(this.settings.template.wrapper)), c.first().attr(this.add_namespace("data-index"), b.index), a(".joyride-content-wrapper", c).append(d), c[0]
        },
        timer_instance: function(b) {
            var c;
            return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML
        },
        button_text: function(b) {
            return this.settings.tip_settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", b
        },
        prev_button_text: function(b, c) {
            return this.settings.tip_settings.prev_button ? (b = a.trim(b) || "Previous", b = 0 == c ? a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML : a(this.settings.template.prev_button).append(b)[0].outerHTML) : b = "", b
        },
        create: function(b) {
            this.settings.tip_settings = a.extend({}, this.settings, this.data_options(b.$li));
            var c = b.$li.attr(this.add_namespace("data-button")) || b.$li.attr(this.add_namespace("data-text")),
                d = b.$li.attr(this.add_namespace("data-button-prev")) || b.$li.attr(this.add_namespace("data-prev-text")),
                e = b.$li.attr("class"),
                f = a(this.tip_template({
                    tip_class: e,
                    index: b.index,
                    button_text: c,
                    prev_button_text: d,
                    li: b.$li
                }));
            a(this.settings.tip_container).append(f)
        },
        show: function(b, c) {
            var e = null;
            this.settings.$li === d || -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(b, c), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), e = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                e.animate({
                    width: e.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                e.animate({
                    width: e.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function(a, b) {
            a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = b ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },
        set_next_tip: function() {
            this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        },
        set_target: function() {
            var b = this.settings.$li.attr(this.add_namespace("data-class")),
                d = this.settings.$li.attr(this.add_namespace("data-id")),
                e = function() {
                    return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body")
                };
            this.settings.$target = e()
        },
        scroll_to: function() {
            var c, d;
            c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 0 != d && a("html, body").stop().animate({
                scrollTop: d
            }, this.settings.scroll_speed, "swing")
        },
        paused: function() {
            return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        },
        restart: function() {
            this.hide(), this.settings.$li = d, this.show("init")
        },
        pos_default: function(a) {
            var b = this.settings.$next_tip.find(".joyride-nub"),
                c = Math.ceil(b.outerWidth() / 2),
                d = Math.ceil(b.outerHeight() / 2),
                e = a || !1;
            if (e && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(b);
            else {
                var f = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                    g = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + g
                } : {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            }
            e && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function(b) {
            var c = this.settings.$next_tip.outerHeight(),
                d = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                e = a(".joyride-nub", this.settings.$next_tip),
                f = Math.ceil(e.outerHeight() / 2),
                g = b || !1;
            e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f
            }), e.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f
            }), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function(a) {
            this.center(), a.hide(), this.show_modal()
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var b = a(".joyride-modal-bg");
                b.length < 1 && a("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function() {
            var c, d, e, f, g, h = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                e = this.settings.$target
            }
            return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), this.settings.$body.append(c), c.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), d = a(this.settings.template.expose_cover), f = {
                zIndex: e.css("z-index"),
                position: e.css("position")
            }, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), d.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), void this.add_exposed(e))
        },
        un_expose: function() {
            var c, d, e, f, g, h = !1;
            if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                d = this.settings.$target
            }
            return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), e = a("." + c), arguments.length > 1 && (h = arguments[1]), h === !0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), d.removeData("expose-z-index"), void this.remove_exposed(d))
        },
        add_exposed: function(b) {
            this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b)
        },
        remove_exposed: function(b) {
            var c, d;
            for (b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], d = this.settings.exposed.length; d--;)
                if (this.settings.exposed[d] == c) return void this.settings.exposed.splice(d, 1)
        },
        center: function() {
            var c = a(b);
            return this.settings.$next_tip.css({
                top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
                left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
            }), !0
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function(c) {
            var d = a(b),
                e = d.height() / 2,
                f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()),
                g = d.width() + d.scrollLeft(),
                h = d.height() + f,
                i = d.height() + d.scrollTop(),
                j = d.scrollTop();
            return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left]
        },
        visible: function(a) {
            for (var b = a.length; b--;)
                if (a[b]) return !1;
            return !0
        },
        nub_position: function(a, b, c) {
            a.addClass("auto" === b ? c : b)
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function(b) {
            this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof b || b === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), a(".joyride-tip-guide").remove()
        },
        off: function() {
            a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.3.3",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c)
        },
        events: function() {
            var c = this,
                d = c.S,
                e = c.settings;
            c.set_expedition_position(), d(c.scope).off(".magellan").on("click.fndtn.magellan", "[" + c.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(b) {
                b.preventDefault();
                var d = a(this).closest("[" + c.attr_name() + "]"),
                    e = d.data("magellan-expedition-init"),
                    f = this.hash.split("#").join(""),
                    g = a("a[name='" + f + "']");
                0 === g.length && (g = a("#" + f));
                var h = g.offset().top - e.destination_threshold + 1;
                h -= d.outerHeight(), a("html, body").stop().animate({
                    scrollTop: h
                }, 700, "swing", function() {
                    history.pushState ? history.pushState(null, null, "#" + f) : location.hash = "#" + f
                })
            }).on("scroll.fndtn.magellan", c.throttle(this.check_for_arrivals.bind(this), e.throttle_delay)), a(b).on("resize.fndtn.magellan", c.throttle(this.set_expedition_position.bind(this), e.throttle_delay))
        },
        check_for_arrivals: function() {
            var a = this;
            a.update_arrivals(), a.update_expedition_positions()
        },
        set_expedition_position: function() {
            var b = this;
            a("[" + this.attr_name() + "=fixed]", b.scope).each(function() {
                var c, d, e = a(this),
                    f = e.data("magellan-expedition-init"),
                    g = e.attr("styles");
                e.attr("style", ""), c = e.offset().top + f.threshold, d = parseInt(e.data("magellan-fixed-top")), isNaN(d) || (b.settings.fixed_top = d), e.data(b.data_attr("magellan-top-offset"), c), e.attr("style", g)
            })
        },
        update_expedition_positions: function() {
            var c = this,
                d = a(b).scrollTop();
            a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
                var b = a(this),
                    e = b.data("magellan-expedition-init"),
                    f = b.attr("style"),
                    g = b.data("magellan-top-offset");
                if (d + c.settings.fixed_top >= g) {
                    var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), b.before(h)), b.css({
                        position: "fixed",
                        top: e.fixed_top
                    })
                } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), b.attr("style", f).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var c = this,
                d = a(b).scrollTop();
            a("[" + this.attr_name() + "]", c.scope).each(function() {
                var b = a(this),
                    e = b.data(c.attr_name(!0) + "-init"),
                    f = c.offsets(b, d),
                    g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"),
                    h = !1;
                f.each(function(a, d) {
                    if (d.viewport_offset >= d.top_offset) {
                        var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
                        return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), h = !0, !0
                    }
                }), h || g.removeClass(e.active_class)
            })
        },
        offsets: function(b, c) {
            var d = this,
                e = b.data(d.attr_name(!0) + "-init"),
                f = c;
            return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function() {
                var c = a(this).data(d.data_attr("magellan-arrival")),
                    g = a("[" + d.add_namespace("data-magellan-destination") + "=" + c + "]");
                if (g.length > 0) {
                    var h = Math.floor(g.offset().top - e.destination_threshold - b.outerHeight());
                    return {
                        destination: g,
                        arrival: a(this),
                        top_offset: h,
                        viewport_offset: f
                    }
                }
            }).sort(function(a, b) {
                return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0
            })
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(b).off(".magellan")
        },
        reflow: function() {
            var b = this;
            a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove()
        }
    }
}(jQuery, window, window.document),
function() {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.3.3",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var a = this,
                b = a.S,
                c = "",
                d = "",
                e = "";
            "move" === this.settings.open_method ? (c = "move-", d = "right", e = "left") : "overlap" === this.settings.open_method && (c = "offcanvas-overlap"), b(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(b) {
                a.click_toggle_class(b, c + d)
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(b) {
                var e = a.get_settings(b);
                e.close_on_click && a.hide.call(a, c + d, a.get_wrapper(b))
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(b) {
                a.click_toggle_class(b, c + e)
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(b) {
                var d = a.get_settings(b);
                d.close_on_click && a.hide.call(a, c + e, a.get_wrapper(b))
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(b) {
                a.click_remove_class(b, c + e), d && a.click_remove_class(b, c + d)
            })
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper(), b.is("." + a) ? this.hide(a, b) : this.show(a, b)
        },
        show: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("open").trigger("open.fndtn.offcanvas"), b.addClass(a)
        },
        hide: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("close").trigger("close.fndtn.offcanvas"), b.removeClass(a)
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c)
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c)
        },
        get_settings: function(a) {
            var b = this.S(a.target).closest("[" + this.attr_name() + "]");
            return b.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(a) {
            var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            return 0 === b.length && (b = this.S(".off-canvas-wrap")), b
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    var e = function() {}, f = function(e, f) {
            if (e.hasClass(f.slides_container_class)) return this;
            var j, k, l, m, n, o, p = this,
                q = e,
                r = 0,
                s = !1;
            p.slides = function() {
                return q.children(f.slide_selector)
            }, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
                f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class))
            }, p.update_active_link = function(b) {
                var c = a('[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
                c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class)
            }, p.build_markup = function() {
                q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), f.stack_on_small && j.addClass(f.stack_on_small_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), p.slides().each(function(b) {
                    var c = a("<li>").attr("data-orbit-slide", b).on("click", p.link_bullet);
                    l.append(c)
                }))
            }, p._goto = function(b, c) {
                if (b === r) return !1;
                "object" == typeof o && o.restart();
                var d = p.slides(),
                    e = "next";
                if (s = !0, r > b && (e = "prev"), b >= d.length) {
                    if (!f.circular) return !1;
                    b = 0
                } else if (0 > b) {
                    if (!f.circular) return !1;
                    b = d.length - 1
                }
                var g = a(d.get(r)),
                    h = a(d.get(b));
                g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
                var i = function() {
                    var a = function() {
                        r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), q.trigger("after-slide-change.fndtn.orbit", [{
                            slide_number: r,
                            total_slides: d.length
                        }]), f.after_slide_change(r, d.length)
                    };
                    q.height() != h.height() && f.variable_height ? q.animate({
                        height: h.height()
                    }, 250, "linear", a) : a()
                };
                if (1 === d.length) return i(), !1;
                var j = function() {
                    "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i)
                };
                h.height() > q.height() && f.variable_height ? q.animate({
                    height: h.height()
                }, 250, "linear", j) : j()
            }, p.next = function(a) {
                a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1)
            }, p.prev = function(a) {
                a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1)
            }, p.link_custom = function(b) {
                b.preventDefault();
                var c = a(this).attr("data-orbit-link");
                if ("string" == typeof c && "" != (c = a.trim(c))) {
                    var d = j.find("[data-orbit-slide=" + c + "]"); - 1 != d.index() && p._goto(d.index())
                }
            }, p.link_bullet = function() {
                var b = a(this).attr("data-orbit-slide");
                if ("string" == typeof b && "" != (b = a.trim(b)))
                    if (isNaN(parseInt(b))) {
                        var c = j.find("[data-orbit-slide=" + b + "]"); - 1 != c.index() && p._goto(c.index() + 1)
                    } else p._goto(parseInt(b))
            }, p.timer_callback = function() {
                p._goto(r + 1, !0)
            }, p.compute_dimensions = function() {
                var b = a(p.slides().get(r)),
                    c = b.height();
                f.variable_height || p.slides().each(function() {
                    a(this).height() > c && (c = a(this).height())
                }), q.height(c)
            }, p.create_timer = function() {
                var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
                return a
            }, p.stop_timer = function() {
                "object" == typeof o && o.stop()
            }, p.toggle_timer = function() {
                var a = j.find("." + f.timer_container_class);
                a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), o.start()) : "object" == typeof o && o.stop()
            }, p.init = function() {
                p.build_markup(), f.timer && (o = p.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), o.start)), n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), j.on("click", "." + f.prev_class, p.prev), f.next_on_click && j.on("click", "." + f.slides_container_class + " [data-orbit-slide]", p.link_bullet), j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                    a.touches || (a = a.originalEvent);
                    var b = {
                        start_page_x: a.touches[0].pageX,
                        start_page_y: a.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: d
                    };
                    j.data("swipe-transition", b), a.stopPropagation()
                }).on("touchmove.fndtn.orbit", function(a) {
                    if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                        var b = j.data("swipe-transition");
                        if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, "undefined" == typeof b.is_scrolling && (b.is_scrolling = !! (b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), !b.is_scrolling && !b.active) {
                            a.preventDefault();
                            var c = b.delta_x < 0 ? r + 1 : r - 1;
                            b.active = !0, p._goto(c)
                        }
                    }
                }).on("touchend.fndtn.orbit", function(a) {
                    j.data("swipe-transition", {}), a.stopPropagation()
                }), j.on("mouseenter.fndtn.orbit", function() {
                    f.timer && f.pause_on_hover && p.stop_timer()
                }).on("mouseleave.fndtn.orbit", function() {
                    f.timer && f.resume_on_mouseout && o.start()
                }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("load resize", p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                    j.prev("." + f.preloader_class).css("display", "none"), p.update_slide_number(0), p.update_active_link(0), q.trigger("ready.fndtn.orbit")
                })
            }, p.init()
        }, g = function(a, b, c) {
            var d, e, f = this,
                g = b.timer_speed,
                h = a.find("." + b.timer_progress_class),
                i = -1;
            this.update_progress = function(a) {
                var b = h.clone();
                b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b
            }, this.restart = function() {
                clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0)
            }, this.start = function() {
                return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), d = (new Date).getTime(), h.animate({
                    width: "100%"
                }, i, "linear"), e = setTimeout(function() {
                    f.restart(), c()
                }, i), void a.trigger("timer-started.fndtn.orbit")) : !0
            }, this.stop = function() {
                if (a.hasClass(b.timer_paused_class)) return !0;
                clearTimeout(e), a.addClass(b.timer_paused_class);
                var c = (new Date).getTime();
                i -= c - d;
                var h = 100 - i / g * 100;
                f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit")
            }
        }, h = function(b) {
            var c = b.animation_speed,
                d = 1 === a("html[dir=rtl]").length,
                e = d ? "marginRight" : "marginLeft",
                f = {};
            f[e] = "0%", this.next = function(a, b, d) {
                a.animate({
                    marginLeft: "-100%"
                }, c), b.animate(f, c, function() {
                    a.css(e, "100%"), d()
                })
            }, this.prev = function(a, b, d) {
                a.animate({
                    marginLeft: "100%"
                }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                    a.css(e, "100%"), d()
                })
            }
        }, i = function(b) {
            {
                var c = b.animation_speed;
                1 === a("html[dir=rtl]").length
            }
            this.next = function(a, b, d) {
                b.css({
                    margin: "0%",
                    opacity: "0.01"
                }), b.animate({
                    opacity: "1"
                }, c, "linear", function() {
                    a.css("margin", "100%"), d()
                })
            }, this.prev = function(a, b, d) {
                b.css({
                    margin: "0%",
                    opacity: "0.01"
                }), b.animate({
                    opacity: "1"
                }, c, "linear", function() {
                    a.css("margin", "100%"), d()
                })
            }
        };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.3.1",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(a) {
            var b = new f(this.S(a), this.S(a).data("orbit-init"));
            this.S(a).data(this.name + "-instance", b)
        },
        reflow: function() {
            var a = this;
            if (a.S(a.scope).is("[data-orbit]")) {
                var b = a.S(a.scope),
                    c = b.data(a.name + "-instance");
                c.compute_dimensions()
            } else a.S("[data-orbit]", a.scope).each(function(b, c) {
                var d = a.S(c),
                    e = (a.data_options(d), d.data(a.name + "-instance"));
                e.compute_dimensions()
            })
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";

    function e(a) {
        var b = /fade/i.test(a),
            c = /pop/i.test(a);
        return {
            animate: b || c,
            pop: c,
            fade: b
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.3.3",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function() {
            var a = this,
                b = a.S;
            return b(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b(this),
                        e = d.data(a.data_attr("reveal-ajax"));
                    if (a.locked = !0, "undefined" == typeof e) a.open.call(a, d);
                    else {
                        var f = e === !0 ? d.attr("href") : e;
                        a.open.call(a, d, {
                            url: f
                        })
                    }
                }
            }), b(c).on("click.fndtn.reveal", this.close_targets(), function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b("[" + a.attr_name() + "].open").data(a.attr_name(!0) + "-init"),
                        e = b(c.target)[0] === b("." + d.bg_class)[0];
                    if (e) {
                        if (!d.close_on_background_click) return;
                        c.stopPropagation()
                    }
                    a.locked = !0, a.close.call(a, e ? b("[" + a.attr_name() + "].open") : b(this).closest("[" + a.attr_name() + "]"))
                }
            }), b("[" + a.attr_name() + "]", this.scope).length > 0 ? b(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : b(this.scope).on("open.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function() {
            var a = this;
            return a.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(b) {
                var c = a.S("[" + a.attr_name() + "].open"),
                    d = c.data(a.attr_name(!0) + "-init") || a.settings;
                d && 27 === b.which && d.close_on_esc && !a.locked && a.close.call(a, c)
            }), !0
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(b, c) {
            var d, e = this;
            b ? "undefined" != typeof b.selector ? d = e.S("#" + b.data(e.data_attr("reveal-id"))).first() : (d = e.S(this.scope), c = b) : d = e.S(this.scope);
            var f = d.data(e.attr_name(!0) + "-init");
            if (f = f || this.settings, d.hasClass("open") && b.attr("data-reveal-id") == d.attr("id")) return e.close(d);
            if (!d.hasClass("open")) {
                var g = e.S("[" + e.attr_name() + "].open");
                if ("undefined" == typeof d.data("css-top") && d.data("css-top", parseInt(d.css("top"), 10)).data("offset", this.cache_offset(d)), this.key_up_on(d), d.trigger("open").trigger("open.fndtn.reveal"), g.length < 1 && this.toggle_bg(d, !0), "string" == typeof c && (c = {
                    url: c
                }), "undefined" != typeof c && c.url) {
                    var h = "undefined" != typeof c.success ? c.success : null;
                    a.extend(c, {
                        success: function(b, c, i) {
                            a.isFunction(h) && h(b, c, i), d.html(b), e.S(d).foundation("section", "reflow"), e.S(d).children().foundation(), g.length > 0 && e.hide(g, f.css.close), e.show(d, f.css.open)
                        }
                    }), a.ajax(c)
                } else g.length > 0 && this.hide(g, f.css.close), this.show(d, f.css.open)
            }
        },
        close: function(a) {
            var a = a && a.length ? a : this.S(this.scope),
                b = this.S("[" + this.attr_name() + "].open"),
                c = a.data(this.attr_name(!0) + "-init") || this.settings;
            b.length > 0 && (this.locked = !0, this.key_up_off(a), a.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(a, !1), this.hide(b, c.css.close, c))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b, c) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var e = this.settings.bg.filter(":visible").length > 0;
            c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init") || this.settings,
                    g = f.root_element;
                if (0 === c.parent(g).length) {
                    var h = c.wrap('<div style="display: none;" />').parent();
                    c.on("closed.fndtn.reveal.wrapped", function() {
                        c.detach().appendTo(h), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), c.detach().appendTo(g)
                }
                var i = e(f.animation);
                if (i.animate || (this.locked = !1), i.pop) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var j = {
                        top: a(b).scrollTop() + c.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                if (i.fade) {
                    d.top = a(b).scrollTop() + c.data("css-top") + "px";
                    var j = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                return c.css(d).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
        },
        hide: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init");
                f = f || this.settings;
                var g = e(f.animation);
                if (g.animate || (this.locked = !1), g.pop) {
                    var h = {
                        top: -a(b).scrollTop() - c.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                if (g.fade) {
                    var h = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                return c.hide().css(d).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
        },
        close_video: function(b) {
            var c = a(".flex-video", b.target),
                d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide())
        },
        open_video: function(b) {
            var c = a(".flex-video", b.target),
                e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f) e[0].src = e.attr("data-src");
                else {
                    var g = e[0].src;
                    e[0].src = d, e[0].src = g
                }
                c.show()
            }
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            return a.hide(), b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.3.3",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            initial: null,
            display_selector: "",
            vertical: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c), this.reflow()
        },
        events: function() {
            var c = this;
            a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + c.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(b) {
                c.cache.active || (b.preventDefault(), c.set_active_slider(a(b.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(d) {
                if (c.cache.active)
                    if (d.preventDefault(), a.data(c.cache.active[0], "settings").vertical) {
                        var e = 0;
                        d.pageY || (e = b.scrollY), c.calculate_position(c.cache.active, (d.pageY || d.originalEvent.clientY || d.originalEvent.touches[0].clientY || d.currentPoint.y) + e)
                    } else c.calculate_position(c.cache.active, d.pageX || d.originalEvent.clientX || d.originalEvent.touches[0].clientX || d.currentPoint.x)
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                c.remove_active_slider()
            }).on("change.fndtn.slider", function() {
                c.settings.on_change()
            }), c.S(b).on("resize.fndtn.slider", c.throttle(function() {
                c.reflow()
            }, 300))
        },
        set_active_slider: function(a) {
            this.cache.active = a
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(b, c) {
            var d = this,
                e = a.data(b[0], "settings"),
                f = (a.data(b[0], "handle_l"), a.data(b[0], "handle_o"), a.data(b[0], "bar_l")),
                g = a.data(b[0], "bar_o");
            requestAnimationFrame(function() {
                var a;
                a = Foundation.rtl && !e.vertical ? d.limit_to((g + f - c) / f, 0, 1) : d.limit_to((c - g) / f, 0, 1), a = e.vertical ? 1 - a : a;
                var h = d.normalized_value(a, e.start, e.end, e.step);
                d.set_ui(b, h)
            })
        },
        set_ui: function(b, c) {
            var d = a.data(b[0], "settings"),
                e = a.data(b[0], "handle_l"),
                f = a.data(b[0], "bar_l"),
                g = this.normalized_percentage(c, d.start, d.end),
                h = g * (f - e) - 1,
                i = 100 * g;
            Foundation.rtl && !d.vertical && (h = -h), h = d.vertical ? -h + f - e + 1 : h, this.set_translate(b, h, d.vertical), d.vertical ? b.siblings(".range-slider-active-segment").css("height", i + "%") : b.siblings(".range-slider-active-segment").css("width", i + "%"), b.parent().attr(this.attr_name(), c).trigger("change").trigger("change.fndtn.slider"), b.parent().children("input[type=hidden]").val(c), "" != d.input_id && a(d.display_selector).each(function() {
                this.hasOwnProperty("value") ? a(this).val(c) : a(this).text(c)
            })
        },
        normalized_percentage: function(a, b, c) {
            return (a - b) / (c - b)
        },
        normalized_value: function(a, b, c, d) {
            var e = c - b,
                f = a * e,
                g = (f - f % d) / d,
                h = f % d,
                i = h >= .5 * d ? d : 0;
            return g * d + i + b
        },
        set_translate: function(b, c, d) {
            d ? a(b).css("-webkit-transform", "translateY(" + c + "px)").css("-moz-transform", "translateY(" + c + "px)").css("-ms-transform", "translateY(" + c + "px)").css("-o-transform", "translateY(" + c + "px)").css("transform", "translateY(" + c + "px)") : a(b).css("-webkit-transform", "translateX(" + c + "px)").css("-moz-transform", "translateX(" + c + "px)").css("-ms-transform", "translateX(" + c + "px)").css("-o-transform", "translateX(" + c + "px)").css("transform", "translateX(" + c + "px)")
        },
        limit_to: function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        },
        initialize_settings: function(b) {
            var c = a.extend({}, this.settings, this.data_options(a(b).parent()));
            c.vertical ? (a.data(b, "bar_o", a(b).parent().offset().top), a.data(b, "bar_l", a(b).parent().outerHeight()), a.data(b, "handle_o", a(b).offset().top), a.data(b, "handle_l", a(b).outerHeight())) : (a.data(b, "bar_o", a(b).parent().offset().left), a.data(b, "bar_l", a(b).parent().outerWidth()), a.data(b, "handle_o", a(b).offset().left), a.data(b, "handle_l", a(b).outerWidth())), a.data(b, "bar", a(b).parent()), a.data(b, "settings", c)
        },
        set_initial_position: function(b) {
            var c = a.data(b.children(".range-slider-handle")[0], "settings"),
                d = c.initial ? c.initial : Math.floor(.5 * (c.end - c.start) / c.step) * c.step + c.start,
                e = b.children(".range-slider-handle");
            this.set_ui(e, d)
        },
        set_value: function(b) {
            var c = this;
            a("[" + c.attr_name() + "]", this.scope).each(function() {
                a(this).attr(c.attr_name(), b)
            }), a(this.scope).attr(c.attr_name()) && a(this.scope).attr(c.attr_name(), b), c.reflow()
        },
        reflow: function() {
            var b = this;
            b.S("[" + this.attr_name() + "]").each(function() {
                var c = a(this).children(".range-slider-handle")[0],
                    d = a(this).attr(b.attr_name());
                b.initialize_settings(c), d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this))
            })
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.3.3",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(a, b, c) {
            var d = this,
                e = this.S;
            this.bindings(b, c), this.handle_location_hash_change(), e("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                d.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var a = this,
                c = this.S;
            c(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(b) {
                var d = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                (!d.is_hover || Modernizr.touch) && (b.preventDefault(), b.stopPropagation(), a.toggle_active_tab(c(this).parent()))
            }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var b = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                b.is_hover && a.toggle_active_tab(c(this).parent())
            }), c(b).on("hashchange.fndtn.tab", function(b) {
                b.preventDefault(), a.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var b = this,
                c = this.S;
            c("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = c(this).data(b.attr_name(!0) + "-init");
                if (e.deep_linking) {
                    var f = b.scope.location.hash;
                    if ("" != f) {
                        var g = c(f);
                        if (g.hasClass("content") && g.parent().hasClass("tab-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent());
                        else {
                            var h = g.closest(".content").attr("id");
                            h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f)
                        }
                    } else
                        for (var i in b.default_tab_hashes) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(c, e) {
            var f = this.S,
                g = c.closest("[" + this.attr_name() + "]"),
                h = c.children("a").first(),
                i = "#" + h.attr("href").split("#")[1],
                j = f(i),
                k = c.siblings(),
                l = g.data(this.attr_name(!0) + "-init");
            if (f(this).data(this.data_attr("tab-content")) && (i = "#" + f(this).data(this.data_attr("tab-content")).split("#")[1], j = f(i)), l.deep_linking) {
                var m = a("body,html").scrollTop();
                b.location.hash = e != d ? e : i, l.scroll_to_content ? e == d || e == i ? c.parent()[0].scrollIntoView() : f(i)[0].scrollIntoView() : (e == d || e == i) && a("body,html").scrollTop(m)
            }
            c.addClass(l.active_class).triggerHandler("opened"), k.removeClass(l.active_class), j.siblings().removeClass(l.active_class).end().addClass(l.active_class), l.callback(c), j.triggerHandler("toggled", [c]), g.triggerHandler("toggled", [j])
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.3.3",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + b + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "random_str"), this.bindings(b, c)
        },
        should_show: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b));
            return "all" === c.show_on ? !0 : this.small() && "small" === c.show_on ? !0 : this.medium() && "medium" === c.show_on ? !0 : this.large() && "large" === c.show_on ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(b) {
            var c = this,
                d = c.S;
            c.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
                var e = d(this),
                    f = a.extend({}, c.settings, c.data_options(e)),
                    g = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && d(b.target).is("a")) return !1;
                if (/mouse/i.test(b.type) && c.ie_touch(b)) return !1;
                if (e.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), c.hide(e);
                else {
                    if (f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
                    !f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), d(f.tooltip_class + ".open").hide(), g = !0), /enter|over/i.test(b.type) ? this.timer = setTimeout(function() {
                        c.showTip(e)
                    }.bind(this), c.settings.hover_delay) : "mouseout" === b.type || "mouseleave" === b.type ? (clearTimeout(this.timer), c.hide(e)) : c.showTip(e)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
                return /mouse/i.test(b.type) && c.ie_touch(b) ? !1 : void(("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? c.convert_to_touch(a(this)) : c.hide(a(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                c.hide(d(this))
            })
        },
        ie_touch: function() {
            return !1
        },
        showTip: function(a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0
        },
        getTip: function(b) {
            var c = this.selector(b),
                d = a.extend({}, this.settings, this.data_options(b)),
                e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1
        },
        selector: function(a) {
            var b = a.attr("id"),
                c = a.attr(this.attr_name()) || a.attr("data-selector");
            return (b && b.length < 1 || !b) && "string" != typeof c && (c = this.random_str(6), a.attr("data-selector", c)), b && b.length > 0 ? b : c
        },
        create: function(c) {
            var d = this,
                e = a.extend({}, this.settings, this.data_options(c)),
                f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())),
                h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                d.hide(c)
            })), c.removeAttr("title").attr("title", "")
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            if (c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), g = f.outerHeight(), h = f.outerHeight(), c.css(this.small() ? {
                width: "100%"
            } : {
                width: e ? e : "auto"
            }), i = function(a, b, c, d, e) {
                return a.css({
                    top: b ? b : "auto",
                    bottom: d ? d : "auto",
                    left: e ? e : "auto",
                    right: c ? c : "auto"
                }).end()
            }, i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left), this.small()) i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()), c.addClass("tip-override"), i(f, -g, "auto", "auto", b.offset().left);
            else {
                var j = b.offset().left;
                Foundation.rtl && (f.addClass("rtl"), j = b.offset().left + b.outerWidth() - c.outerWidth()), i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j), c.removeClass("tip-override"), d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, b.offset().top - c.outerHeight(), "auto", "auto", j).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override"), f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override"), f.removeClass("rtl"))
            }
            c.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b)),
                d = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(c.additional_inheritable_classes),
                e = b.attr("class"),
                f = e ? a.map(e.split(" "), function(b) {
                    return -1 !== a.inArray(b, d) ? b : void 0
                }).join(" ") : "";
            return a.trim(f)
        },
        convert_to_touch: function(b) {
            var c = this,
                d = c.getTip(b),
                e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                c.hide(b)
            })), b.data("tooltip-open-event-type", "touch")
        },
        show: function(a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), a.addClass("open"), b.fadeIn(150)
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(150, function() {
                b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), a.removeClass("open")
            })
        },
        off: function() {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.3.3",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this),
                        c = b.data(e.attr_name(!0) + "-init");
                    e.S("section", this)
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class);
            return d && "all" === c.sticky_on ? !0 : d && this.small() && "small" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.medium() && "medium" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : d && this.large() && "large" === c.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"),
                g = e.S("section, .section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), d.parent().removeClass("expanded"), e.update_sticky_positioning())))
        },
        timer: null,
        events: function() {
            var c = this,
                d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li");
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this),
                    f = d(b.target),
                    g = e.closest("[" + c.attr_name() + "]"),
                    h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void(c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
                    var b = d(this),
                        e = b.closest("[" + c.attr_name() + "]"),
                        f = e.find("section, .section"),
                        g = (b.next(".dropdown").outerHeight(), b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"))
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar"), d("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover")
            }), d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
                var b = d(this),
                    e = b.closest("[" + c.attr_name() + "]"),
                    f = e.find("section, .section"),
                    g = (e.data(c.attr_name(!0) + "-init"), b.closest("li.moved")),
                    h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), setTimeout(function() {
                    g.removeClass("moved")
                }, 300)
            })
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this),
                    e = d.data(a.attr_name(!0) + "-init"),
                    f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d)
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function(b) {
            var c = this,
                d = b.data(this.attr_name(!0) + "-init"),
                e = c.S("section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this),
                    f = e.siblings(".dropdown"),
                    g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), a("h5>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), f.prepend(b))
            }), e.appendTo(b), this.sticky(), this.assembled(b)
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(b) {
            var c = 0,
                d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0)
            }), c
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class,
                c = this.S(b),
                d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), d.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, this, this.document);

