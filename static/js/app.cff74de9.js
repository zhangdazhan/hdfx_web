(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"], {
    0: function (t, a, e) {
        t.exports = e("56d7")
    },
    "09b1": function (t, a, e) {
        t.exports = e.p + "static/img/toux.d58c25d8.jpg"
    },
    "0bb4": function (t, a, e) {
        "use strict";
        e.d(a, "b", (function () {
            return n
        }
        )),
            e.d(a, "c", (function () {
                return o
            }
            )),
            e.d(a, "a", (function () {
                return l
            }
            ));
        e("99af");
        var c = e("b775")
            , i = {
                create: "/notices/create",
                findall: "/notices/findall",
                update: "/notices/update",
                delete: "/notices/deleteone",
                delmany: "/notices/deletemany"
            };
        function n(t) {
            return Promise.resolve({ data: [{ id: 1, text: "软件数据仅供参考", state: "open" }] });
        }
        function o(t) {
            return Promise.resolve({ success: true });
        }
        function l(t) {
            return Promise.resolve({ success: true });
        }
    },
    "14ec": function (t, a, e) {
        "use strict";
        e("37ba")
    },
    "18f0": function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-link",
                use: "icon-link-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-link"><path d="M115.625 127.937H.063V12.375h57.781v12.374H12.438v90.813h90.813V70.156h12.374z" /><path d="M116.426 2.821l8.753 8.753-56.734 56.734-8.753-8.745z" /><path d="M127.893 37.982h-12.375V12.375H88.706V0h39.187z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    2114: function (t, a, e) { },
    2821: function (t, a, e) { },
    "28e8": function (t, a, e) { },
    "2a3d": function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-password",
                use: "icon-password-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-password"><path d="M108.8 44.322H89.6v-5.36c0-9.04-3.308-24.163-25.6-24.163-23.145 0-25.6 16.881-25.6 24.162v5.361H19.2v-5.36C19.2 15.281 36.798 0 64 0c27.202 0 44.8 15.281 44.8 38.961v5.361zm-32 39.356c0-5.44-5.763-9.832-12.8-9.832-7.037 0-12.8 4.392-12.8 9.832 0 3.682 2.567 6.808 6.407 8.477v11.205c0 2.718 2.875 4.962 6.4 4.962 3.524 0 6.4-2.244 6.4-4.962V92.155c3.833-1.669 6.393-4.795 6.393-8.477zM128 64v49.201c0 8.158-8.645 14.799-19.2 14.799H19.2C8.651 128 0 121.359 0 113.201V64c0-8.153 8.645-14.799 19.2-14.799h89.6c10.555 0 19.2 6.646 19.2 14.799z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    3031: function (t, a, e) { },
    "30c3": function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-example",
                use: "icon-example-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-example"><path d="M96.258 57.462h31.421C124.794 27.323 100.426 2.956 70.287.07v31.422a32.856 32.856 0 0 1 25.971 25.97zm-38.796-25.97V.07C27.323 2.956 2.956 27.323.07 57.462h31.422a32.856 32.856 0 0 1 25.97-25.97zm12.825 64.766v31.421c30.46-2.885 54.507-27.253 57.713-57.712H96.579c-2.886 13.466-13.146 23.726-26.292 26.291zM31.492 70.287H.07c2.886 30.46 27.253 54.507 57.713 57.713V96.579c-13.466-2.886-23.726-13.146-26.291-26.292z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    "32e5": function (t, a, e) {
        "use strict";
        e("ee49")
    },
    "331a": function (t, a) {
        var e = {
            admin: {
                token: "admin-token"
            },
            editor: {
                token: "editor-token"
            }
        }
            , c = {
                "admin-token": {
                    roles: ["admin"],
                    introduction: "I am a super administrator",
                    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                    name: "Super Admin"
                },
                "editor-token": {
                    roles: ["editor"],
                    introduction: "I am an editor",
                    avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                    name: "Normal Editor"
                }
            };
        t.exports = [{
            url: "/vue-admin-template/user/login",
            type: "post",
            response: function (t) {
                var a = t.body.username
                    , c = e[a];
                return c ? {
                    code: 200,
                    data: c
                } : {
                    code: 60204,
                    message: "Account and password are incorrect."
                }
            }
        }, {
            url: "/vue-admin-template/user/info.*",
            type: "get",
            response: function (t) {
                var a = t.query.token
                    , e = c[a];
                return e ? {
                    code: 200,
                    data: e
                } : {
                    code: 50008,
                    message: "Login failed, unable to get user details."
                }
            }
        }, {
            url: "/vue-admin-template/user/logout",
            type: "post",
            response: function (t) {
                return {
                    code: 200,
                    data: "success"
                }
            }
        }]
    },
    "37aa": function (t, a, e) { },
    "37ba": function (t, a, e) { },
    4360: function (t, a, e) {
        "use strict";
        var c = e("2b0e")
            , i = e("2f62")
            , n = (e("b0c0"),
            {
                sidebar: function (t) {
                    return t.app.sidebar
                },
                device: function (t) {
                    return t.app.device
                },
                token: function (t) {
                    return t.user.token
                },
                avatar: function (t) {
                    return t.user.avatar
                },
                viptime: function (t) {
                    return t.user.viptime
                },
                name: function (t) {
                    return t.user.name
                },
                role: function (t) {
                    return t.user.role
                }
            })
            , o = n
            , l = e("a78e")
            , s = e.n(l)
            , r = {
                sidebar: {
                    opened: !s.a.get("sidebarStatus") || !!+s.a.get("sidebarStatus"),
                    withoutAnimation: !1
                },
                device: "desktop"
            }
            , u = {
                TOGGLE_SIDEBAR: function (t) {
                    t.sidebar.opened = !t.sidebar.opened,
                        t.sidebar.withoutAnimation = !1,
                        t.sidebar.opened ? s.a.set("sidebarStatus", 1) : s.a.set("sidebarStatus", 0)
                },
                CLOSE_SIDEBAR: function (t, a) {
                    s.a.set("sidebarStatus", 0),
                        t.sidebar.opened = !1,
                        t.sidebar.withoutAnimation = a
                },
                TOGGLE_DEVICE: function (t, a) {
                    t.device = a
                }
            }
            , h = {
                toggleSideBar: function (t) {
                    var a = t.commit;
                    a("TOGGLE_SIDEBAR")
                },
                closeSideBar: function (t, a) {
                    var e = t.commit
                        , c = a.withoutAnimation;
                    e("CLOSE_SIDEBAR", c)
                },
                toggleDevice: function (t, a) {
                    var e = t.commit;
                    e("TOGGLE_DEVICE", a)
                }
            }
            , d = {
                namespaced: !0,
                state: r,
                mutations: u,
                actions: h
            }
            , f = e("83d6")
            , m = e.n(f)
            , p = m.a.showSettings
            , C = m.a.fixedHeader
            , g = m.a.sidebarLogo
            , D = {
                showSettings: p,
                fixedHeader: C,
                sidebarLogo: g
            }
            , _ = {
                CHANGE_SETTING: function (t, a) {
                    var e = a.key
                        , c = a.value;
                    t.hasOwnProperty(e) && (t[e] = c)
                }
            }
            , b = {
                changeSetting: function (t, a) {
                    var e = t.commit;
                    e("CHANGE_SETTING", a)
                }
            }
            , v = {
                namespaced: !0,
                state: D,
                mutations: _,
                actions: b
            }
            , z = (e("d3b7"),
                e("498a"),
                e("c24f"))
            , y = e("5f87")
            , j = e("a18c")
            , T = function () {
                return {
                    token: Object(y["a"])(),
                    name: "",
                    avatar: "",
                    role: "user"
                }
            }
            , J = T()
            , x = {
                RESET_STATE: function (t) {
                    Object.assign(t, T())
                },
                SET_TOKEN: function (t, a) {
                    t.token = a
                },
                SET_NAME: function (t, a) {
                    t.name = a
                },
                SET_ROLE: function (t, a) {
                    t.role = a
                },
                SET_VIPTIME: function (t, a) {
                    t.viptime = a
                },
                SET_AVATAR: function (t, a) {
                    t.avatar = a
                }
            }
            , A = {
                login: function (t, a) {
                    var e = t.commit
                        , c = a.account
                        , i = a.password;
                    return new Promise((function (t, a) {
                        var _account = c.trim();
                        var _password = i;
                        if (!window.__hdfx_mqtt || !window.__hdfx_mqtt.login) {
                            return a("MQTT 模块未加载");
                        }
                        window.__hdfx_mqtt.login(_account, _password).then((function (result) {
                            e("SET_TOKEN", result.token || _account),
                                e("SET_ROLE", result.role || "user"),
                                e("SET_VIPTIME", result.viptime || ""),
                                Object(y["c"])(result.token || _account);
                            t()
                        })).catch((function (err) {
                            a(err.reason || err.message || "登录失败")
                        }))
                    }))
                },
                getInfo: function (t) {
                    var a = t.commit
                        , e = t.state;
                    return new Promise((function (t, c) {
                        Object(z["c"])(e.token).then((function (e) {
                            var i = e.data;
                            if (!i)
                                return c("Verification failed, please Login again.");
                            var n = i.name
                                , o = i.avatar
                                , l = i.role
                                , s = i.viptime;
                            a("SET_NAME", n),
                                a("SET_AVATAR", o),
                                a("SET_VIPTIME", s),
                                a("SET_ROLE", l),
                                t(i)
                        }
                        )).catch((function (t) {
                            c(t)
                        }
                        ))
                    }
                    ))
                },
                logout: function (t) {
                    var a = t.commit;
                    return new Promise((function (t) {
                        // 断开 MQTT
                        if (window.__hdfx_mqtt && window.__hdfx_mqtt.disconnect) {
                            window.__hdfx_mqtt.disconnect();
                        }
                        // 清除 token 和状态
                        Object(y["b"])(),
                            Object(j["b"])(),
                            a("RESET_STATE"),
                            t()
                    }))
                },
                resetToken: function (t) {
                    var a = t.commit;
                    return new Promise((function (t) {
                        Object(y["b"])(),
                            a("RESET_STATE"),
                            t()
                    }
                    ))
                }
            }
            , w = {
                namespaced: !0,
                state: J,
                mutations: x,
                actions: A
            };
        c["default"].use(i["a"]);
        var B = new i["a"].Store({
            modules: {
                app: d,
                settings: v,
                user: w
            },
            getters: o
        });
        a["a"] = B
    },
    4604: function (t, a, e) { },
    "47f1": function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-table",
                use: "icon-table-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-table"><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    "4b0f": function (t, a, e) {
        var c = e("63748").default
            , i = e("448a").default;
        e("99af"),
            e("b64b"),
            e("4d63"),
            e("c607"),
            e("ac1f"),
            e("2c3e"),
            e("25f0");
        var n = e("96eb")
            , o = e("8a60")
            , l = o.param2Obj
            , s = e("331a")
            , r = e("a0bc")
            , u = [].concat(i(s), i(r));
        function h() {
            function t(t) {
                return function (a) {
                    var e = null;
                    if (t instanceof Function) {
                        var c = a.body
                            , i = a.type
                            , o = a.url;
                        e = t({
                            method: i,
                            body: JSON.parse(c),
                            query: l(o)
                        })
                    } else
                        e = t;
                    return n.mock(e)
                }
            }
            n.XHR.prototype.proxy_send = n.XHR.prototype.send,
                n.XHR.prototype.send = function () {
                    this.custom.xhr && (this.custom.xhr.withCredentials = this.withCredentials || !1,
                        this.responseType && (this.custom.xhr.responseType = this.responseType)),
                        this.proxy_send.apply(this, arguments)
                }
                ;
            var a, e = c(u);
            try {
                for (e.s(); !(a = e.n()).done;) {
                    var i = a.value;
                    n.mock(new RegExp(i.url), i.type || "get", t(i.response))
                }
            } catch (o) {
                e.e(o)
            } finally {
                e.f()
            }
        }
        t.exports = {
            mocks: u,
            mockXHR: h
        }
    },
    "4b63": function (t, a, e) {
        t.exports = e.p + "static/media/tsy1.2a65fe89.mp3"
    },
    "4df5": function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-eye",
                use: "icon-eye-usage",
                viewBox: "0 0 128 64",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 64" id="icon-eye"><path d="M127.072 7.994c1.37-2.208.914-5.152-.914-6.87-2.056-1.717-4.797-1.226-6.396.982-.229.245-25.586 32.382-55.74 32.382-29.24 0-55.74-32.382-55.968-32.627-1.6-1.963-4.57-2.208-6.397-.49C-.17 3.086-.399 6.275 1.2 8.238c.457.736 5.94 7.36 14.62 14.72L4.17 35.96c-1.828 1.963-1.6 5.152.228 6.87.457.98 1.6 1.471 2.742 1.471s2.284-.49 3.198-1.472l12.564-13.983c5.94 4.416 13.021 8.587 20.788 11.53l-4.797 17.418c-.685 2.699.686 5.397 3.198 6.133h1.37c2.057 0 3.884-1.472 4.341-3.68L52.6 42.83c3.655.736 7.538 1.227 11.422 1.227 3.883 0 7.767-.49 11.422-1.227l4.797 17.173c.457 2.208 2.513 3.68 4.34 3.68.457 0 .914 0 1.143-.246 2.513-.736 3.883-3.434 3.198-6.133l-4.797-17.172c7.767-2.944 14.848-7.114 20.788-11.53l12.336 13.738c.913.981 2.056 1.472 3.198 1.472s2.284-.49 3.198-1.472c1.828-1.963 1.828-4.906.228-6.87l-11.65-13.001c9.366-7.36 14.849-14.474 14.849-14.474z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    "4ffd": function (t, a, e) {
        t.exports = e.p + "static/img/logo.0c7d9010.png"
    },
    "51ff": function (t, a, e) {
        var c = {
            "./dashboard.svg": "f782",
            "./example.svg": "30c3",
            "./eye-open.svg": "d7ec",
            "./eye.svg": "4df5",
            "./form.svg": "eb1b",
            "./link.svg": "18f0",
            "./nested.svg": "dcf8",
            "./password.svg": "2a3d",
            "./table.svg": "47f1",
            "./tree.svg": "93cd",
            "./user.svg": "b3b5"
        };
        function i(t) {
            var a = n(t);
            return e(a)
        }
        function n(t) {
            if (!e.o(c, t)) {
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND",
                a
            }
            return c[t]
        }
        i.keys = function () {
            return Object.keys(c)
        }
            ,
            i.resolve = n,
            t.exports = i,
            i.id = "51ff"
    },
    "56d7": function (t, a, e) {
        "use strict";
        e.r(a);
        e("e260"),
            e("e6cf"),
            e("cca6"),
            e("a79d");
        var c = e("2b0e")
            , i = (e("f5df1"),
                e("5c96"))
            , n = e.n(i)
            , o = (e("0fae"),
                e("b2d6"))
            , l = e.n(o)
            , s = (e("b20f"),
                function () {
                    var t = this
                        , a = t.$createElement
                        , e = t._self._c || a;
                    return e("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [e("router-view")], 1)
                }
            )
            , r = []
            , u = (e("99af"),
                e("ac1f"),
                e("466d"),
                window.innerWidth / 1920)
            , h = (window.innerWidth,
            {
                name: "App",
                metaInfo: {
                    title: "红单分析",
                    meta: [{
                        name: "viewport",
                        content: "width=device-width, user-scalable=yes, initial-scale=".concat(u, ", maximum-scale=", 10, ", minimum-scale=").concat(u)
                    }]
                },
                mounted: function () {
                    var self = this;
                    if (!e()) {
                        var t = window.innerWidth / 1920;
                        $("html").css("zoom", t),
                            window.addEventListener("resize", a)
                    }
                    function a() {
                        var t = window.innerWidth / 1920;
                        try { console.log(self.$route && self.$route.path); } catch (err) {}
                        $("html").css("zoom", t)
                    }
                    function e() {
                        return null != navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                    }
                }
            })
            , d = h
            , f = (e("804e"),
                e("2877"))
            , m = Object(f["a"])(d, s, r, !1, null, null, null)
            , p = m.exports
            , C = e("4360")
            , g = e("a18c")
            , D = e("2570")
            , _ = e.n(D)
            , b = (e("d81d"),
                e("d3b7"),
                e("ddb0"),
                function () {
                    var t = this
                        , a = t.$createElement
                        , e = t._self._c || a;
                    return t.isExternal ? e("div", t._g({
                        staticClass: "svg-external-icon svg-icon",
                        style: t.styleExternalIcon
                    }, t.$listeners)) : e("svg", t._g({
                        class: t.svgClass,
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, t.$listeners), [e("use", {
                        attrs: {
                            "xlink:href": t.iconName
                        }
                    })])
                }
            )
            , v = []
            , z = e("61f7")
            , y = {
                name: "SvgIcon",
                props: {
                    iconClass: {
                        type: String,
                        required: !0
                    },
                    className: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    isExternal: function () {
                        return Object(z["a"])(this.iconClass)
                    },
                    iconName: function () {
                        return "#icon-".concat(this.iconClass)
                    },
                    svgClass: function () {
                        return this.className ? "svg-icon " + this.className : "svg-icon"
                    },
                    styleExternalIcon: function () {
                        return {
                            mask: "url(".concat(this.iconClass, ") no-repeat 50% 50%"),
                            "-webkit-mask": "url(".concat(this.iconClass, ") no-repeat 50% 50%")
                        }
                    }
                }
            }
            , j = y
            , T = (e("c295"),
                Object(f["a"])(j, b, v, !1, null, "48f35816", null))
            , J = T.exports;
        c["default"].component("svg-icon", J);
        var x = e("51ff")
            , A = function (t) {
                return t.keys().map(t)
            };
        A(x);
        var w = e("c7eb")
            , B = e("1da1")
            , k = (e("b0c0"),
                e("323e"))
            , S = e.n(k)
            , O = (e("a5d8"),
                e("5f87"))
            , F = e("83d6")
            , H = e.n(F)
            , G = H.a.title || "Vue Admin Template";
        function q(t) {
            return t ? "".concat(t, " - ").concat(G) : "".concat(G)
        }
        S.a.configure({
            showSpinner: !1
        });
        var L = ["/login", "/angentUser"];
        g["a"].beforeEach(function () {
            var t = Object(B["a"])(Object(w["a"])().mark((function t(a, e, c) {
                var n, o;
                return Object(w["a"])().wrap((function (t) {
                    while (1)
                        switch (t.prev = t.next) {
                            case 0:
                                if (S.a.start(),
                                    document.title = q(a.meta.title),
                                    n = Object(O["a"])(),
                                    !n) {
                                    t.next = 29;
                                    break
                                }
                                if ("/login" !== a.path) {
                                    t.next = 9;
                                    break
                                }
                                c({
                                    path: "/"
                                }),
                                    S.a.done(),
                                    t.next = 27;
                                break;
                            case 9:
                                if (o = C["a"].getters.name,
                                    !o) {
                                    t.next = 14;
                                    break
                                }
                                c(),
                                    t.next = 27;
                                break;
                            case 14:
                                return t.prev = 14,
                                    t.next = 17,
                                    C["a"].dispatch("user/getInfo");
                            case 17:
                                c(),
                                    t.next = 27;
                                break;
                            case 20:
                                return t.prev = 20,
                                    t.t0 = t["catch"](14),
                                    t.next = 24,
                                    C["a"].dispatch("user/resetToken");
                            case 24:
                                i["Message"].error(t.t0 || "Has Error"),
                                    c("/login?redirect=".concat(a.path)),
                                    S.a.done();
                            case 27:
                                t.next = 30;
                                break;
                            case 29:
                                -1 !== L.indexOf(a.path) ? c() : (c("/login?redirect=".concat(a.path)),
                                    S.a.done());
                            case 30:
                            case "end":
                                return t.stop()
                        }
                }
                ), t, null, [[14, 20]])
            }
            )));
            return function (a, e, c) {
                return t.apply(this, arguments)
            }
        }()),
            g["a"].afterEach((function () {
                S.a.done()
            }
            ));
        e("caad"),
            e("2532"),
            e("5319");
        c["default"].directive("dialogDrag", {
            bind: function (t, a, e, c) {
                var i = t.querySelector(".el-dialog__header")
                    , n = t.querySelector(".el-dialog");
                if (!i || !n) return;
                i.style.cssText += ";cursor:move;",
                    n.style.cssText += ";top:0px;";
                var o = function () {
                    return window.document.currentStyle ? function (t, a) {
                        return t.currentStyle[a]
                    }
                        : function (t, a) {
                            return getComputedStyle(t, !1)[a]
                        }
                }();
                i.onmousedown = function (t) {
                    var a = t.clientX - i.offsetLeft
                        , e = t.clientY - i.offsetTop
                        , c = document.body.clientWidth
                        , l = document.documentElement.clientHeight
                        , s = n.offsetWidth
                        , r = n.offsetHeight
                        , u = n.offsetLeft
                        , h = c - n.offsetLeft - s
                        , d = n.offsetTop
                        , f = l - n.offsetTop - r
                        , m = o(n, "left")
                        , p = o(n, "top");
                    m.includes("%") ? (m = +document.body.clientWidth * (+m.replace(/\%/g, "") / 100),
                        p = +document.body.clientHeight * (+p.replace(/\%/g, "") / 100)) : (m = +m.replace(/\px/g, ""),
                            p = +p.replace(/\px/g, "")),
                        document.onmousemove = function (t) {
                            var c = t.clientX - a
                                , i = t.clientY - e;
                            -c > u ? c = -u : c > h && (c = h),
                                -i > d ? i = -d : i > f && (i = f),
                                n.style.cssText += ";left:".concat(c + m, "px;top:").concat(i + p, "px;")
                        }
                        ,
                        document.onmouseup = function (t) {
                            document.onmousemove = null,
                                document.onmouseup = null
                        }
                }
            }
        });
        var M, P, I, R, N = e("521e"), V = {
            maxbsktProfit: M,
            maxftChuanProfit: P,
            maxftSinProfit: I,
            maxfttgProfit: R
        };
        n.a.Drawer.props.wrapperClosable.default = !1,
            c["default"].use(_.a),
            c["default"].directive("el-table-infinite-scroll", N["a"]),
            c["default"].prototype.globalData = V;
        var E = e("4b0f")
            , Z = E.mockXHR;
        Z(),
            c["default"].use(n.a, {
                locale: l.a
            }),
            c["default"].config.productionTip = !1,
            new c["default"]({
                el: "#app",
                router: g["a"],
                store: C["a"],
                render: function (t) {
                    return t(p)
                }
            })
    },
    "5b23": function (t, a, e) {
        "use strict";
        e("37aa")
    },
    "5f87": function (t, a, e) {
        "use strict";
        e.d(a, "a", (function () {
            return o
        }
        )),
            e.d(a, "c", (function () {
                return l
            }
            )),
            e.d(a, "b", (function () {
                return s
            }
            ));
        var c = e("a78e")
            , i = e.n(c)
            , n = "vue_admin_template_token";
        function o() {
            return i.a.get(n)
        }
        function l(t) {
            return i.a.set(n, t)
        }
        function s() {
            return i.a.remove(n)
        }
    },
    "60a8": function (t, a, e) {
        "use strict";
        e.d(a, "b", (function () {
            return n
        }
        )),
            e.d(a, "a", (function () {
                return o
            }
            ));
        var c = e("b775")
            , i = {
                getOddsHistory: "https://webapi.sporttery.cn/gateway/uniform/football/getOddsHistoryV1.qry",
                getBaskgetOddsHistory: "https://webapi.sporttery.cn/gateway/uniform/basketball/getOddsHistoryV1.qry"
            };
        function n(t) {
            var q = Object.keys(t || {}).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(t[k])
            }).join("&");
            return fetch(i.getOddsHistory + (q ? "?" + q : ""), {
                method: "GET"
            }).then(function (r) {
                return r.json()
            })
        }
        function o(t) {
            var q = Object.keys(t || {}).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(t[k])
            }).join("&");
            return fetch(i.getBaskgetOddsHistory + (q ? "?" + q : ""), {
                method: "GET"
            }).then(function (r) {
                return r.json()
            })
        }
    },
    "61f7": function (t, a, e) {
        "use strict";
        e.d(a, "a", (function () {
            return c
        }
        )),
            e.d(a, "b", (function () {
                return i
            }
            ));
        e("ac1f"),
            e("00b4"),
            e("498a");
        function c(t) {
            return /^(https?:|mailto:|tel:)/.test(t)
        }
        function i(t) {
            var a = ["admin", "editor"];
            return a.indexOf(t.trim()) >= 0
        }
    },
    7666: function (t, a, e) {
        t.exports = e.p + "static/media/tsy4.3cd0d1c8.mp3"
    },
    "7c4f": function (t, a, e) {
        t.exports = e.p + "static/media/tsy2.892297d8.mp3"
    },
    "7d51": function (t, a, e) {
        t.exports = e.p + "static/media/tsy3.794f5c9a.mp3"
    },
    "804e": function (t, a, e) {
        "use strict";
        e("2821")
    },
    "83d6": function (t, a) {
        t.exports = {
            title: "Vue Admin Template",
            fixedHeader: !1,
            sidebarLogo: !0
        }
    },
    "8a60": function (t, a, e) {
        function c(t) {
            var a = decodeURIComponent(t.split("?")[1]).replace(/\+/g, " ");
            if (!a)
                return {};
            var e = {}
                , c = a.split("&");
            return c.forEach((function (t) {
                var a = t.indexOf("=");
                if (-1 !== a) {
                    var c = t.substring(0, a)
                        , i = t.substring(a + 1, t.length);
                    e[c] = i
                }
            }
            )),
                e
        }
        e("ac1f"),
            e("5319"),
            e("d3b7"),
            e("159b"),
            t.exports = {
                param2Obj: c
            }
    },
    "907f": function (t, a, e) { },
    "93cd": function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-tree",
                use: "icon-tree-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-tree"><path d="M126.713 90.023c.858.985 1.287 2.134 1.287 3.447v29.553c0 1.423-.429 2.6-1.287 3.53-.858.93-1.907 1.395-3.146 1.395H97.824c-1.145 0-2.146-.465-3.004-1.395-.858-.93-1.287-2.107-1.287-3.53V93.47c0-.875.19-1.696.572-2.462.382-.766.906-1.368 1.573-1.806a3.84 3.84 0 0 1 2.146-.657h9.725V69.007a3.84 3.84 0 0 0-.43-1.806 3.569 3.569 0 0 0-1.143-1.313 2.714 2.714 0 0 0-1.573-.492h-36.47v23.149h9.725c1.144 0 2.145.492 3.004 1.478.858.985 1.287 2.134 1.287 3.447v29.553c0 .876-.191 1.696-.573 2.463-.38.766-.905 1.368-1.573 1.806a3.84 3.84 0 0 1-2.145.656H51.915a3.84 3.84 0 0 1-2.145-.656c-.668-.438-1.216-1.04-1.645-1.806a4.96 4.96 0 0 1-.644-2.463V93.47c0-1.313.43-2.462 1.288-3.447.858-.986 1.907-1.478 3.146-1.478h9.582v-23.15h-37.9c-.953 0-1.74.356-2.359 1.068-.62.711-.93 1.56-.93 2.544v19.538h9.726c1.239 0 2.264.492 3.074 1.478.81.985 1.216 2.134 1.216 3.447v29.553c0 1.423-.405 2.6-1.216 3.53-.81.93-1.835 1.395-3.074 1.395H4.29c-.476 0-.93-.082-1.358-.246a4.1 4.1 0 0 1-1.144-.657 4.658 4.658 0 0 1-.93-1.067 5.186 5.186 0 0 1-.643-1.395 5.566 5.566 0 0 1-.215-1.56V93.47c0-.437.048-.875.143-1.313a3.95 3.95 0 0 1 .429-1.15c.19-.328.429-.656.715-.984.286-.329.572-.602.858-.821.286-.22.62-.383 1.001-.493.382-.11.763-.164 1.144-.164h9.726V61.619c0-.985.31-1.833.93-2.544.619-.712 1.358-1.068 2.216-1.068h44.335V39.62h-9.582c-1.24 0-2.288-.492-3.146-1.477a5.09 5.09 0 0 1-1.287-3.448V5.14c0-1.423.429-2.627 1.287-3.612.858-.985 1.907-1.477 3.146-1.477h25.743c.763 0 1.478.246 2.145.739a5.17 5.17 0 0 1 1.573 1.888c.382.766.573 1.587.573 2.462v29.553c0 1.313-.43 2.463-1.287 3.448-.859.985-1.86 1.477-3.004 1.477h-9.725v18.389h42.762c.954 0 1.74.355 2.36 1.067.62.711.93 1.56.93 2.545v26.925h9.582c1.239 0 2.288.492 3.146 1.478z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    "9d9f": function (t, a, e) {
        "use strict";
        e.d(a, "b", (function () {
            return n
        }
        )),
            e.d(a, "c", (function () {
                return o
            }
            )),
            e.d(a, "a", (function () {
                return l
            }
            ));
        e("99af");
        var c = e("b775")
            , i = {
                create: "/chuanplan/create",
                findall: "/chuanplan/findallback",
                update: "/chuanplan/update",
                delete: "/chuanplan/deleteone",
                delmany: "/chuanplan/deletemany"
            };
        function n(t) {
            return window.__hdfx_mqtt.planRequest("plan_list", t)
        }
        function o(t) {
            var action = t.uuid ? "plan_update" : "plan_create";
            return window.__hdfx_mqtt.planRequest(action, t);
        }
        function l(t) {
            return window.__hdfx_mqtt.planRequest("plan_delete", t)
        }
    },
    "9eaf": function (t, a, e) {
        t.exports = e.p + "static/media/tsy5.9ebf3129.mp3"
    },
    a0bc: function (t, a, e) {
        var c = e("96eb")
            , i = c.mock({
                "items|30": [{
                    id: "@id",
                    title: "@sentence(10, 20)",
                    "status|1": ["published", "draft", "deleted"],
                    author: "name",
                    display_time: "@datetime",
                    pageviews: "@integer(300, 5000)"
                }]
            });
        t.exports = [{
            url: "/vue-admin-template/table/list",
            type: "get",
            response: function (t) {
                var a = i.items;
                return {
                    code: 200,
                    data: {
                        total: a.length,
                        items: a
                    }
                }
            }
        }]
    },
    a18c: function (t, a, e) {
        "use strict";
        e.d(a, "b", (function () {
            return Wt
        }
        ));
        e("d3b7"),
            e("3ca3"),
            e("ddb0");
        var c, i, n = e("2b0e"), o = e("8c4f"), l = function () {
            var t = this
                , a = t.$createElement
                , c = t._self._c || a;
            return c("div", {
                staticClass: "app-wrapper demandFormVisible_dialog",
                class: t.classObj
            }, [c("audio", {
                staticStyle: {
                    visibility: "hidden"
                },
                attrs: {
                    id: "tsy1",
                    src: e("4b63")
                }
            }), c("audio", {
                staticStyle: {
                    visibility: "hidden"
                },
                attrs: {
                    id: "tsy2",
                    src: e("7c4f")
                }
            }), c("audio", {
                staticStyle: {
                    visibility: "hidden"
                },
                attrs: {
                    id: "tsy3",
                    src: e("7d51")
                }
            }), c("audio", {
                staticStyle: {
                    visibility: "hidden"
                },
                attrs: {
                    id: "tsy4",
                    src: e("7666")
                }
            }), c("audio", {
                staticStyle: {
                    visibility: "hidden"
                },
                attrs: {
                    id: "tsy5",
                    src: e("9eaf")
                }
            }), c("audio", {
                staticStyle: {
                    visibility: "hidden"
                },
                attrs: {
                    id: "tsy6",
                    src: e("d3a5")
                }
            }), "mobile" === t.device && t.sidebar.opened ? c("div", {
                staticClass: "drawer-bg",
                on: {
                    click: t.handleClickOutside
                }
            }) : t._e(), c("sidebar", {
                staticClass: "sidebar-container"
            }), c("div", {
                staticClass: "main-container"
            }, [c("div", {
                class: {
                    "fixed-header": t.fixedHeader
                }
            }, [c("navbar")], 1), c("el-card", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: -1 == t.$route.path.indexOf("system"),
                    expression: "$route.path.indexOf('system') == -1"
                }]
            }, [c("el-row", {
                attrs: {
                    gutter: 24
                }
            }, [c("el-col", {
                staticStyle: {
                    "line-height": "50px"
                },
                attrs: {
                    span: 24
                }
            }, [t._v(" jc单返点 : "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "mini"
                },
                on: {
                    change: function (a) {
                        return t.changePoint()
                    }
                },
                model: {
                    value: t.configData.JCPointSin,
                    callback: function (a) {
                        t.$set(t.configData, "JCPointSin", a)
                    },
                    expression: "configData.JCPointSin"
                }
            }), t._v(" jc串返点 : "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "100px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "mini"
                },
                on: {
                    change: function (a) {
                        return t.changePoint()
                    }
                },
                model: {
                    value: t.configData.JCPointChuan,
                    callback: function (a) {
                        t.$set(t.configData, "JCPointChuan", a)
                    },
                    expression: "configData.JCPointChuan"
                }
            }), t._v(" jc投注 : "), c("el-input", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "80px"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    change: function (a) {
                        return t.changeConfig()
                    }
                },
                model: {
                    value: t.configData.JCTzAmt,
                    callback: function (a) {
                        t.$set(t.configData, "JCTzAmt", a)
                    },
                    expression: "configData.JCTzAmt"
                }
            }), t._v(" hg返点 : "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "100px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .001,
                    size: "mini"
                },
                on: {
                    change: function (a) {
                        return t.changeConfig()
                    }
                },
                model: {
                    value: t.configData.HGPoint,
                    callback: function (a) {
                        t.$set(t.configData, "HGPoint", a)
                    },
                    expression: "configData.HGPoint"
                }
            }), c("el-button", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    size: "mini",
                    type: "info"
                },
                on: {
                    click: function (a) {
                        t.vedioVisible = !0
                    }
                }
            }, [t._v(" 提示音设置 ")]), t._v(" 范围 : "), c("el-radio-group", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    size: "mini"
                },
                model: {
                    value: t.configData.scope,
                    callback: function (a) {
                        t.$set(t.configData, "scope", a)
                    },
                    expression: "configData.scope"
                }
            }, [c("el-radio-button", {
                attrs: {
                    label: "all"
                }
            }, [t._v(" 全部 ")]), c("el-radio-button", {
                attrs: {
                    label: "today"
                }
            }, [t._v(" 今天 ")]), c("el-radio-button", {
                attrs: {
                    label: "tom"
                }
            }, [t._v(" 明天 ")])], 1), t._v(" 自动刷新 : "), c("el-switch", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949"
                },
                model: {
                    value: t.configData.autoflash,
                    callback: function (a) {
                        t.$set(t.configData, "autoflash", a)
                    },
                    expression: "configData.autoflash"
                }
            }), c("el-button", {
                attrs: {
                    size: "mini",
                    type: "success"
                },
                on: {
                    click: function (a) {
                        return t.flash()
                    }
                }
            }, [t._v(" 刷新 ")]), c("el-button", {
                attrs: {
                    size: "mini",
                    type: "success"
                },
                on: {
                    click: function (a) {
                        return t.calculatetmp()
                    }
                }
            }, [t._v(" 计算器 ")])], 1)], 1)], 1), t.arrNotices && t.arrNotices.length > 0 ? c("el-alert", {
                attrs: {
                    title: t.arrNotices[0].text,
                    type: "success"
                }
            }) : t._e(), t.ifConfigGeted ? c("app-main", {
                attrs: {
                    "select-mactch": t.selectMactch,
                    "flash-flag": t.flashFlag,
                    "plan-list": t.planList,
                    "his-plan-list": t.hisPlanList,
                    "config-data": t.configData
                },
                on: {
                    ttgcalculate: function (a) {
                        return t.ttgcalculate(a)
                    },
                    calculate: function (a) {
                        return t.calculate(a)
                    },
                    qbcalculate: function (a) {
                        return t.qbcalculate(a)
                    },
                    ccCalcute: function (a) {
                        return t.ccCalcute(a)
                    },
                    selectccGames: function (a) {
                        return t.selectccGames(a)
                    },
                    delPlan: function (a) {
                        return t.delPlan(a)
                    },
                    hafucalculate: function (a) {
                        return t.hafucalculate(a)
                    },
                    showhistoryplan: function (a) {
                        return t.showhistoryplan(a)
                    }
                }
            }) : t._e()], 1), c("el-dialog", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                staticClass: "intf-dialog",
                attrs: {
                    title: "提示音设置(点击播放)",
                    visible: t.vedioVisible,
                    width: "60%",
                    modal: !1,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function (a) {
                        t.vedioVisible = a
                    }
                }
            }, [c("table", {
                staticClass: "vediotable"
            }, [c("tr", [c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("玩法")]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("开关")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v("音效")])]), c("tr", [c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("单关")]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-switch", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949",
                    size: "mini"
                },
                model: {
                    value: t.configData.danSwitch,
                    callback: function (a) {
                        t.$set(t.configData, "danSwitch", a)
                    },
                    expression: "configData.danSwitch"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-radio", {
                attrs: {
                    label: 1
                },
                model: {
                    value: t.danRadio,
                    callback: function (a) {
                        t.danRadio = a
                    },
                    expression: "danRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("1")
                    }
                }
            }, [t._v("提示音1")])], 1), c("el-radio", {
                attrs: {
                    label: 2
                },
                model: {
                    value: t.danRadio,
                    callback: function (a) {
                        t.danRadio = a
                    },
                    expression: "danRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("2")
                    }
                }
            }, [t._v("提示音2")])], 1), c("el-radio", {
                attrs: {
                    label: 3
                },
                model: {
                    value: t.danRadio,
                    callback: function (a) {
                        t.danRadio = a
                    },
                    expression: "danRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("3")
                    }
                }
            }, [t._v("提示音3")])], 1), c("el-radio", {
                attrs: {
                    label: 4
                },
                model: {
                    value: t.danRadio,
                    callback: function (a) {
                        t.danRadio = a
                    },
                    expression: "danRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("4")
                    }
                }
            }, [t._v("提示音4")])], 1), c("el-radio", {
                attrs: {
                    label: 5
                },
                model: {
                    value: t.danRadio,
                    callback: function (a) {
                        t.danRadio = a
                    },
                    expression: "danRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("5")
                    }
                }
            }, [t._v("提示音5")])], 1), c("el-radio", {
                attrs: {
                    label: 6
                },
                model: {
                    value: t.danRadio,
                    callback: function (a) {
                        t.danRadio = a
                    },
                    expression: "danRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("6")
                    }
                }
            }, [t._v("提示音6")])], 1)], 1)]), c("tr", [c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("二串一")]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-switch", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949",
                    size: "mini"
                },
                model: {
                    value: t.configData.chuanSwitch,
                    callback: function (a) {
                        t.$set(t.configData, "chuanSwitch", a)
                    },
                    expression: "configData.chuanSwitch"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-radio", {
                attrs: {
                    label: 1
                },
                model: {
                    value: t.chuanRadio,
                    callback: function (a) {
                        t.chuanRadio = a
                    },
                    expression: "chuanRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("1")
                    }
                }
            }, [t._v("提示音1")])], 1), c("el-radio", {
                attrs: {
                    label: 2
                },
                model: {
                    value: t.chuanRadio,
                    callback: function (a) {
                        t.chuanRadio = a
                    },
                    expression: "chuanRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("2")
                    }
                }
            }, [t._v("提示音2")])], 1), c("el-radio", {
                attrs: {
                    label: 3
                },
                model: {
                    value: t.chuanRadio,
                    callback: function (a) {
                        t.chuanRadio = a
                    },
                    expression: "chuanRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("3")
                    }
                }
            }, [t._v("提示音3")])], 1), c("el-radio", {
                attrs: {
                    label: 4
                },
                model: {
                    value: t.chuanRadio,
                    callback: function (a) {
                        t.chuanRadio = a
                    },
                    expression: "chuanRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("4")
                    }
                }
            }, [t._v("提示音4")])], 1), c("el-radio", {
                attrs: {
                    label: 5
                },
                model: {
                    value: t.chuanRadio,
                    callback: function (a) {
                        t.chuanRadio = a
                    },
                    expression: "chuanRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("5")
                    }
                }
            }, [t._v("提示音5")])], 1), c("el-radio", {
                attrs: {
                    label: 6
                },
                model: {
                    value: t.chuanRadio,
                    callback: function (a) {
                        t.chuanRadio = a
                    },
                    expression: "chuanRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("6")
                    }
                }
            }, [t._v("提示音6")])], 1)], 1)]), c("tr", [c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("总进球数")]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-switch", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949",
                    size: "mini"
                },
                model: {
                    value: t.configData.zjqsSwitch,
                    callback: function (a) {
                        t.$set(t.configData, "zjqsSwitch", a)
                    },
                    expression: "configData.zjqsSwitch"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-radio", {
                attrs: {
                    label: 1
                },
                model: {
                    value: t.zjqsRadio,
                    callback: function (a) {
                        t.zjqsRadio = a
                    },
                    expression: "zjqsRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("1")
                    }
                }
            }, [t._v("提示音1")])], 1), c("el-radio", {
                attrs: {
                    label: 2
                },
                model: {
                    value: t.zjqsRadio,
                    callback: function (a) {
                        t.zjqsRadio = a
                    },
                    expression: "zjqsRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("2")
                    }
                }
            }, [t._v("提示音2")])], 1), c("el-radio", {
                attrs: {
                    label: 3
                },
                model: {
                    value: t.zjqsRadio,
                    callback: function (a) {
                        t.zjqsRadio = a
                    },
                    expression: "zjqsRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("3")
                    }
                }
            }, [t._v("提示音3")])], 1), c("el-radio", {
                attrs: {
                    label: 4
                },
                model: {
                    value: t.zjqsRadio,
                    callback: function (a) {
                        t.zjqsRadio = a
                    },
                    expression: "zjqsRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("4")
                    }
                }
            }, [t._v("提示音4")])], 1), c("el-radio", {
                attrs: {
                    label: 5
                },
                model: {
                    value: t.zjqsRadio,
                    callback: function (a) {
                        t.zjqsRadio = a
                    },
                    expression: "zjqsRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("5")
                    }
                }
            }, [t._v("提示音5")])], 1), c("el-radio", {
                attrs: {
                    label: 6
                },
                model: {
                    value: t.zjqsRadio,
                    callback: function (a) {
                        t.zjqsRadio = a
                    },
                    expression: "zjqsRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("6")
                    }
                }
            }, [t._v("提示音6")])], 1)], 1)]), c("tr", [c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("半全场")]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-switch", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949",
                    size: "mini"
                },
                model: {
                    value: t.configData.bqcSwitch,
                    callback: function (a) {
                        t.$set(t.configData, "bqcSwitch", a)
                    },
                    expression: "configData.bqcSwitch"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-radio", {
                attrs: {
                    label: 1
                },
                model: {
                    value: t.bqcRadio,
                    callback: function (a) {
                        t.bqcRadio = a
                    },
                    expression: "bqcRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("1")
                    }
                }
            }, [t._v("提示音1")])], 1), c("el-radio", {
                attrs: {
                    label: 2
                },
                model: {
                    value: t.bqcRadio,
                    callback: function (a) {
                        t.bqcRadio = a
                    },
                    expression: "bqcRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("2")
                    }
                }
            }, [t._v("提示音2")])], 1), c("el-radio", {
                attrs: {
                    label: 3
                },
                model: {
                    value: t.bqcRadio,
                    callback: function (a) {
                        t.bqcRadio = a
                    },
                    expression: "bqcRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("3")
                    }
                }
            }, [t._v("提示音3")])], 1), c("el-radio", {
                attrs: {
                    label: 4
                },
                model: {
                    value: t.bqcRadio,
                    callback: function (a) {
                        t.bqcRadio = a
                    },
                    expression: "bqcRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("4")
                    }
                }
            }, [t._v("提示音4")])], 1), c("el-radio", {
                attrs: {
                    label: 5
                },
                model: {
                    value: t.bqcRadio,
                    callback: function (a) {
                        t.bqcRadio = a
                    },
                    expression: "bqcRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("5")
                    }
                }
            }, [t._v("提示音5")])], 1), c("el-radio", {
                attrs: {
                    label: 6
                },
                model: {
                    value: t.bqcRadio,
                    callback: function (a) {
                        t.bqcRadio = a
                    },
                    expression: "bqcRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("6")
                    }
                }
            }, [t._v("提示音6")])], 1)], 1)]), c("tr", [c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [t._v("篮球")]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-switch", {
                staticStyle: {
                    "margin-right": "20px"
                },
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949",
                    size: "mini"
                },
                model: {
                    value: t.configData.otherSwitch,
                    callback: function (a) {
                        t.$set(t.configData, "otherSwitch", a)
                    },
                    expression: "configData.otherSwitch"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-radio", {
                attrs: {
                    label: 1
                },
                model: {
                    value: t.otherRadio,
                    callback: function (a) {
                        t.otherRadio = a
                    },
                    expression: "otherRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("1")
                    }
                }
            }, [t._v("提示音1")])], 1), c("el-radio", {
                attrs: {
                    label: 2
                },
                model: {
                    value: t.otherRadio,
                    callback: function (a) {
                        t.otherRadio = a
                    },
                    expression: "otherRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("2")
                    }
                }
            }, [t._v("提示音2")])], 1), c("el-radio", {
                attrs: {
                    label: 3
                },
                model: {
                    value: t.otherRadio,
                    callback: function (a) {
                        t.otherRadio = a
                    },
                    expression: "otherRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("3")
                    }
                }
            }, [t._v("提示音3")])], 1), c("el-radio", {
                attrs: {
                    label: 4
                },
                model: {
                    value: t.otherRadio,
                    callback: function (a) {
                        t.otherRadio = a
                    },
                    expression: "otherRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("4")
                    }
                }
            }, [t._v("提示音4")])], 1), c("el-radio", {
                attrs: {
                    label: 5
                },
                model: {
                    value: t.otherRadio,
                    callback: function (a) {
                        t.otherRadio = a
                    },
                    expression: "otherRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("5")
                    }
                }
            }, [t._v("提示音5")])], 1), c("el-radio", {
                attrs: {
                    label: 6
                },
                model: {
                    value: t.otherRadio,
                    callback: function (a) {
                        t.otherRadio = a
                    },
                    expression: "otherRadio"
                }
            }, [c("el-button", {
                attrs: {
                    id: "play-pause",
                    type: "info",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.playVedio("6")
                    }
                }
            }, [t._v("提示音6")])], 1)], 1)])]), c("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [c("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.setVedio()
                    }
                }
            }, [t._v("保存")]), c("el-button", {
                on: {
                    click: function (a) {
                        t.vedioVisible = !1
                    }
                }
            }, [t._v("取 消")])], 1)]), c("el-dialog", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                staticClass: "intf-dialog",
                attrs: {
                    title: "单关计算器",
                    visible: t.dialogVisible,
                    width: "50%",
                    modal: !1,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function (a) {
                        t.dialogVisible = a
                    }
                }
            }, [c("table", {
                staticClass: "dangtable"
            }, [c("tr", [c("td", {
                attrs: {
                    colspan: "4"
                }
            }, [t._v(" [" + t._s(t.matchInfo.matchNumStr) + "] " + t._s(t.matchInfo.matchTimeFormat) + " 【" + t._s(t.matchInfo.leagueAbbName) + "】"), c("span", {
                staticStyle: {
                    color: "blue"
                }
            }, [t._v(t._s(t.matchInfo.homeTeamAbbName))]), t._v(" VS "), c("span", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v(t._s(t.matchInfo.awayTeamAbbName))])]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-select", {
                attrs: {
                    placeholder: "请选择",
                    size: "small"
                },
                model: {
                    value: t.caluteData.method,
                    callback: function (a) {
                        t.$set(t.caluteData, "method", a)
                    },
                    expression: "caluteData.method"
                }
            }, t._l(t.arrdgtztype, (function (t) {
                return c("el-option", {
                    key: t.value,
                    attrs: {
                        label: t.name,
                        value: t.value
                    }
                })
            }
            )), 1)], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" 官方 "), c("el-button", {
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietu(t.matchInfo, t.gametype)
                    }
                }
            }, [t._v(" 截图 ")])], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v("平台")])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" JC返点： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "120px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.computeData()
                    }
                },
                model: {
                    value: t.caluteData.JCPoint,
                    callback: function (a) {
                        t.$set(t.caluteData, "JCPoint", a)
                    },
                    expression: "caluteData.JCPoint"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" HG返点： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "120px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.computeData()
                    }
                },
                model: {
                    value: t.caluteData.HGPoint,
                    callback: function (a) {
                        t.$set(t.caluteData, "HGPoint", a)
                    },
                    expression: "caluteData.HGPoint"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("赔率")]), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getTextJC(t.caluteData.JCTouz1, t.caluteData.JCgoalLine1)))]), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.computeData()
                    }
                },
                model: {
                    value: t.caluteData.jcOdds1,
                    callback: function (a) {
                        t.$set(t.caluteData, "jcOdds1", a)
                    },
                    expression: "caluteData.jcOdds1"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getTextJC(t.caluteData.JCTouz2, t.caluteData.JCgoalLine2)))]), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "1" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        return t.computeData()
                    }
                },
                model: {
                    value: t.caluteData.jcOdds2,
                    callback: function (a) {
                        t.$set(t.caluteData, "jcOdds2", a)
                    },
                    expression: "caluteData.jcOdds2"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getText(t.caluteData.HGTouz1, t.caluteData.HGgoalLine1)))]), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.computeData()
                    }
                },
                model: {
                    value: t.caluteData.hgOdds1,
                    callback: function (a) {
                        t.$set(t.caluteData, "hgOdds1", a)
                    },
                    expression: "caluteData.hgOdds1"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getText(t.caluteData.HGTouz2, t.caluteData.HGgoalLine2)))]), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "2" !== t.seltztype.slice(-1) && "3" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        return t.computeData()
                    }
                },
                model: {
                    value: t.caluteData.hgOdds2,
                    callback: function (a) {
                        t.$set(t.caluteData, "hgOdds2", a)
                    },
                    expression: "caluteData.hgOdds2"
                }
            })], 1)]), c("tr", {
                staticStyle: {
                    color: "red",
                    background: "#ecf5ff"
                }
            }, [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("下注")]), c("td", [c("el-input", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.computeData("jc")
                    }
                },
                model: {
                    value: t.caluteData.jcBet1,
                    callback: function (a) {
                        t.$set(t.caluteData, "jcBet1", a)
                    },
                    expression: "caluteData.jcBet1"
                }
            })], 1), c("td", [c("span", [t._v(t._s(parseFloat(t.caluteData.jcBet2).toFixed(0)))])]), c("td", [c("span", [t._v(t._s(parseFloat(t.caluteData.hgBet1).toFixed(0)))])]), c("td", [c("span", [t._v(t._s(parseFloat(t.caluteData.hgBet2).toFixed(0)))])])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("返点")]), c("td", [t._v(" " + t._s(parseFloat(t.caluteData.JCPoint1).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(parseFloat(t.caluteData.JCPoint2).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(parseFloat(t.caluteData.HGPoint1).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(parseFloat(t.caluteData.HGPoint2).toFixed(0)) + " ")])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("中奖金额")]), c("td", [t._v(t._s(parseFloat(t.caluteData.jcAmount1).toFixed(0)))]), c("td", [t._v(t._s(parseFloat(t.caluteData.jcAmount2).toFixed(0)))]), c("td", [t._v(t._s(parseFloat(t.caluteData.hgAmount1).toFixed(0)))]), c("td", [t._v(t._s(parseFloat(t.caluteData.hgAmount2).toFixed(0)))])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("利润")]), c("td", {
                attrs: {
                    colspan: "4"
                }
            }, [t._v(" " + t._s(parseFloat(t.caluteData.profit).toFixed(0)) + " ")])])]), c("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [c("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.computeData()
                    }
                }
            }, [t._v("计算")]), c("el-button", {
                on: {
                    click: function (a) {
                        t.dialogVisible = !1
                    }
                }
            }, [t._v("取 消")])], 1)]), c("el-drawer", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                style: t.sidebar.opened ? "left:210px;" : "left:54px;",
                attrs: {
                    modal: !1,
                    title: "串子计算器",
                    visible: t.cccalshow,
                    direction: "btt",
                    "show-close": !0,
                    "with-header": !1,
                    "append-to-body": !0,
                    size: "mobile" === t.device ? "650px" : "340px"
                },
                on: {
                    "update:visible": function (a) {
                        t.cccalshow = a
                    }
                }
            }, [c("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [c("div", {
                staticClass: "rightbox"
            }, [c("el-table", {
                key: t.isKey,
                attrs: {
                    data: t.twoDatas,
                    border: "",
                    fit: "",
                    "show-header": !1
                }
            }, [c("el-table-column", {
                attrs: {
                    label: "赛事",
                    width: "180",
                    align: "center"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (a) {
                        return [c("div", {
                            on: {
                                click: function (e) {
                                    return t.toMatch(a.row.jcMatch.matchId)
                                }
                            }
                        }, [c("span", {
                            staticStyle: {
                                color: "#ea3d09",
                                "font-size": "16px",
                                "font-weight": "bolder"
                            }
                        }, [t._v(t._s(a.row.jcMatch.matchNumStr))]), c("br"), t._v(" " + t._s(a.row.jcMatch.matchTimeFormat)), c("br")]), c("div", {
                            on: {
                                click: function (e) {
                                    return t.toMatch(a.row.jcMatch.matchId)
                                }
                            }
                        }, [c("span", {
                            staticStyle: {
                                "white-space": "nowrap",
                                "text-overflow": "ellipsis",
                                overflow: "hidden"
                            },
                            attrs: {
                                title: a.row.hgMatch.leagueAbbName
                            }
                        }, [t._v("【" + t._s(a.row.hgMatch.leagueAbbName) + "】")]), c("br"), c("span", {
                            staticStyle: {
                                color: "red"
                            }
                        }, [t._v(t._s(a.row.hgMatch.homeTeamAbbName))]), t._v(" VS "), c("span", {
                            staticStyle: {
                                color: "blue"
                            }
                        }, [t._v(t._s(a.row.hgMatch.awayTeamAbbName))])])]
                    }
                }])
            }), c("el-table-column", {
                attrs: {
                    label: "JC投注",
                    align: "center"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (a) {
                        return ["3" === a.row.jcMatch.matchNumStr.slice(2, 3) ? c("div", {
                            staticStyle: {
                                padding: "0"
                            }
                        }, [c("el-row", {
                            attrs: {
                                gutter: 20
                            }
                        }, [c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 类型 ")]), c("el-col", {
                            attrs: {
                                span: 9
                            }
                        }, [t._v(" " + t._s("大小" === a.row.jcodds[0].type.slice(0, 2) ? "大" : "主负") + " ")]), c("el-col", {
                            attrs: {
                                span: 9
                            }
                        }, [t._v(" " + t._s("大小" === a.row.jcodds[0].type.slice(0, 2) ? "小" : "主胜") + " ")])], 1), t._l(a.row.jcodds, (function (e, i) {
                            return c("el-row", {
                                key: i,
                                attrs: {
                                    gutter: 20
                                }
                            }, [c("el-popover", {
                                attrs: {
                                    placement: "left",
                                    width: "260",
                                    trigger: "hover"
                                },
                                on: {
                                    show: function (c) {
                                        return t.showOddsChg(e.goalLine, a.row.jcMatch.matchId)
                                    }
                                }
                            }, [c("div", {
                                attrs: {
                                    id: "oddsChgDiv"
                                }
                            }, [c("div", {
                                staticStyle: {
                                    "background-color": "#ff6000",
                                    color: "#ffffff",
                                    "line-height": "21px"
                                }
                            }, [t._v(" " + t._s(a.row.jcMatch.homeTeamAbbName) + " VS " + t._s(a.row.jcMatch.awayTeamAbbName) + " 奖金变化 ")]), c("div", {
                                staticClass: "OpenDivTop"
                            }, [c("table", {
                                staticClass: "OpenDivMain",
                                attrs: {
                                    cellpadding: "0",
                                    cellspacing: "0"
                                }
                            }, [c("tbody", [c("tr", {
                                attrs: {
                                    bgcolor: "#F0F8FF"
                                }
                            }, [c("td", [t._v("胜")]), c("td", [t._v("平")]), c("td", [t._v("负")]), c("td", [t._v("时间")])]), t._l(t.arrChgOdds, (function (a, e) {
                                return c("tr", {
                                    key: e
                                }, [c("td", [c("font", {
                                    attrs: {
                                        color: "-1" === a.hf ? "#269803" : "1" === a.hf ? "#FF0000" : ""
                                    }
                                }, [t._v(" " + t._s(a.h) + t._s("-1" === a.hf ? "↓" : "1" === a.hf ? "↑" : "") + " ")])], 1), c("td", [c("font", {
                                    attrs: {
                                        color: "-1" === a.df ? "#269803" : "1" === a.df ? "#FF0000" : ""
                                    }
                                }, [t._v(" " + t._s(a.d) + t._s("-1" === a.df ? "↓" : "1" === a.df ? "↑" : "") + " ")])], 1), c("td", [c("font", {
                                    attrs: {
                                        color: "-1" === a.af ? "#269803" : "1" === a.af ? "#FF0000" : ""
                                    }
                                }, [t._v(" " + t._s(a.a) + t._s("-1" === a.af ? "↓" : "1" === a.af ? "↑" : "") + " ")])], 1), c("td", [t._v(" " + t._s(a.updateDate.slice(5)) + " " + t._s(a.updateTime.slice(0, 5)) + " ")])])
                            }
                            ))], 2)])])]), c("el-col", {
                                attrs: {
                                    slot: "reference",
                                    span: 6
                                },
                                slot: "reference"
                            }, [t._v(" " + t._s(e.type) + " ")])], 1), c("el-col", {
                                class: a.row.jctz[e.goalLine] && (a.row.jctz[e.goalLine].indexOf("a") > -1 || a.row.jctz[e.goalLine].indexOf("d") > -1) ? "selecttd" : "",
                                attrs: {
                                    span: 9
                                }
                            }, [t._v(" " + t._s(e.a) + " ")]), c("el-col", {
                                class: a.row.jctz[e.goalLine] && (a.row.jctz[e.goalLine].indexOf("h") > -1 || a.row.jctz[e.goalLine].indexOf("x") > -1) ? "selecttd" : "",
                                attrs: {
                                    span: 9
                                }
                            }, [t._v(" " + t._s(e.h) + " ")])], 1)
                        }
                        ))], 2) : c("div", {
                            staticStyle: {
                                padding: "0"
                            }
                        }, [c("el-row", {
                            attrs: {
                                gutter: 20
                            }
                        }, [c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 类型 ")]), c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 胜 ")]), c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 平 ")]), c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 负 ")])], 1), t._l(a.row.jcodds, (function (e, i) {
                            return c("el-row", {
                                key: i,
                                attrs: {
                                    gutter: 20
                                }
                            }, [c("el-popover", {
                                attrs: {
                                    placement: "left",
                                    width: "260",
                                    trigger: "hover"
                                },
                                on: {
                                    show: function (c) {
                                        return t.showOddsChg(e.goalLine, a.row.jcMatch.matchId)
                                    }
                                }
                            }, [c("div", {
                                attrs: {
                                    id: "oddsChgDiv"
                                }
                            }, [c("div", {
                                staticStyle: {
                                    "background-color": "#ff6000",
                                    color: "#ffffff",
                                    "line-height": "21px"
                                }
                            }, [t._v(" " + t._s(a.row.jcMatch.homeTeamAbbName) + " VS " + t._s(a.row.jcMatch.awayTeamAbbName) + " 奖金变化 ")]), c("div", {
                                staticClass: "OpenDivTop"
                            }, [c("table", {
                                staticClass: "OpenDivMain",
                                attrs: {
                                    cellpadding: "0",
                                    cellspacing: "0"
                                }
                            }, [c("tbody", [c("tr", {
                                attrs: {
                                    bgcolor: "#F0F8FF"
                                }
                            }, [c("td", [t._v("胜")]), c("td", [t._v("平")]), c("td", [t._v("负")]), c("td", [t._v("时间")])]), t._l(t.arrChgOdds, (function (a, e) {
                                return c("tr", {
                                    key: e
                                }, [c("td", [c("font", {
                                    attrs: {
                                        color: "-1" === a.hf ? "#269803" : "1" === a.hf ? "#FF0000" : ""
                                    }
                                }, [t._v(" " + t._s(a.h) + t._s("-1" === a.hf ? "↓" : "1" === a.hf ? "↑" : "") + " ")])], 1), c("td", [c("font", {
                                    attrs: {
                                        color: "-1" === a.df ? "#269803" : "1" === a.df ? "#FF0000" : ""
                                    }
                                }, [t._v(" " + t._s(a.d) + t._s("-1" === a.df ? "↓" : "1" === a.df ? "↑" : "") + " ")])], 1), c("td", [c("font", {
                                    attrs: {
                                        color: "-1" === a.af ? "#269803" : "1" === a.af ? "#FF0000" : ""
                                    }
                                }, [t._v(" " + t._s(a.a) + t._s("-1" === a.af ? "↓" : "1" === a.af ? "↑" : "") + " ")])], 1), c("td", [t._v(" " + t._s(a.updateDate.slice(5)) + " " + t._s(a.updateTime.slice(0, 5)) + " ")])])
                            }
                            ))], 2)])])]), c("el-col", {
                                attrs: {
                                    slot: "reference",
                                    span: 6
                                },
                                slot: "reference"
                            }, [t._v(" " + t._s(e.type) + " ")])], 1), c("el-col", {
                                class: a.row.jctz[e.goalLine] && a.row.jctz[e.goalLine].indexOf("h") > -1 ? "selecttd" : "",
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.h) + " ")]), c("el-col", {
                                class: a.row.jctz[e.goalLine] && a.row.jctz[e.goalLine].indexOf("d") > -1 ? "selecttd" : "",
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.d) + " ")]), c("el-col", {
                                class: a.row.jctz[e.goalLine] && a.row.jctz[e.goalLine].indexOf("a") > -1 ? "selecttd" : "",
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.a) + " ")])], 1)
                        }
                        ))], 2)]
                    }
                }])
            }), c("el-table-column", {
                attrs: {
                    "class-name": "status-col",
                    label: "平台投注",
                    align: "center"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (a) {
                        return ["3" === a.row.jcMatch.matchNumStr.slice(2, 3) ? c("div", {
                            staticStyle: {
                                padding: "0"
                            }
                        }, [a.row.hgodds[0] ? c("el-row", {
                            attrs: {
                                gutter: 20
                            }
                        }, [c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 类型 ")]), c("el-col", {
                            attrs: {
                                span: 9
                            }
                        }, [t._v(" " + t._s(a.row.hgodds[0] && "大小" === a.row.hgodds[0].type.slice(0, 2) ? "大" : a.row.hgMatch.homeTeamAbbName) + " ")]), c("el-col", {
                            attrs: {
                                span: 9
                            }
                        }, [t._v(" " + t._s(a.row.hgodds[0] && "大小" === a.row.hgodds[0].type.slice(0, 2) ? "大" : a.row.hgMatch.awayTeamAbbName) + " ")])], 1) : c("el-row", [c("el-col", {
                            attrs: {
                                span: 24
                            }
                        }, [t._v(" " + t._s(a.row.error) + " ")])], 1), t._l(a.row.hgodds, (function (e, i) {
                            return c("el-row", {
                                key: i,
                                staticStyle: {
                                    "margin-top": "5px"
                                },
                                attrs: {
                                    gutter: 20
                                }
                            }, [c("div", [c("el-col", {
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.type) + " ")]), c("el-col", {
                                class: a.row.hgtz[e.goalLine] && (a.row.hgtz[e.goalLine].indexOf("h") > -1 || a.row.hgtz[e.goalLine].indexOf("d") > -1) ? "selecttd" : "",
                                attrs: {
                                    span: 9
                                }
                            }, [t._v(" " + t._s(e.h) + " ")]), c("el-col", {
                                class: a.row.hgtz[e.goalLine] && (a.row.hgtz[e.goalLine].indexOf("a") > -1 || a.row.hgtz[e.goalLine].indexOf("x") > -1) ? "selecttd" : "",
                                attrs: {
                                    span: 9
                                }
                            }, [t._v(" " + t._s(e.a) + " ")])], 1)])
                        }
                        ))], 2) : c("div", {
                            staticStyle: {
                                padding: "0"
                            }
                        }, [c("el-row", {
                            attrs: {
                                gutter: 20
                            }
                        }, [c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 类型 ")]), c("el-col", {
                            staticStyle: {
                                "white-space": "nowrap",
                                overflow: "hidden"
                            },
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" " + t._s(a.row.hgMatch.homeTeamAbbName) + " ")]), c("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" 和局 ")]), c("el-col", {
                            staticStyle: {
                                "white-space": "nowrap",
                                overflow: "hidden"
                            },
                            attrs: {
                                span: 6
                            }
                        }, [t._v(" " + t._s(a.row.hgMatch.awayTeamAbbName) + " ")])], 1), t._l(a.row.hgodds, (function (e, i) {
                            return a.row.hgodds[0] ? c("el-row", {
                                key: i,
                                staticStyle: {
                                    "margin-top": "5px"
                                },
                                attrs: {
                                    gutter: 20
                                }
                            }, [c("div", [c("el-col", {
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.type) + " ")]), c("el-col", {
                                class: a.row.hgtz[e.goalLine] && a.row.hgtz[e.goalLine].indexOf("h") > -1 ? "selecttd" : "",
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.h) + " ")]), c("el-col", {
                                class: a.row.hgtz[e.goalLine] && a.row.hgtz[e.goalLine].indexOf("d") > -1 ? "selecttd" : "",
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.d ? e.d : "--") + " ")]), c("el-col", {
                                class: a.row.hgtz[e.goalLine] && a.row.hgtz[e.goalLine].indexOf("a") > -1 ? "selecttd" : "",
                                attrs: {
                                    span: 6
                                }
                            }, [t._v(" " + t._s(e.a) + " ")])], 1)]) : t._e()
                        }
                        )), a.row.error ? c("el-row", [c("el-col", {
                            attrs: {
                                span: 24
                            }
                        }, [t._v(" " + t._s(a.row.error) + " ")])], 1) : t._e()], 2)]
                    }
                }])
            })], 1), c("div", {
                staticClass: "beizuinfo"
            }, [c("el-button", {
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.flashccOdds()
                    }
                }
            }, [t._v(" 刷新 ")])], 1)], 1), c("div", {
                staticClass: "leftbox"
            }, [c("table", {
                staticClass: "dangtable cctable"
            }, [c("tr", [c("td", {
                staticStyle: {
                    padding: "5px 0",
                    "font-size": "16px"
                },
                attrs: {
                    colspan: "3"
                }
            }, [t._v(" " + t._s(t.cccaluteData.planId && t.cccaluteData.planId.replace(/%0A/, " "))), c("el-button", {
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        t.seltgame = t.cccaluteData.planId,
                            t.jietuVisible = !0,
                            t.sportteryUrl = "lqdg" == t.gametype ? "/sporttery/lqhhgg.html" : "/sporttery"
                    }
                }
            }, [t._v(" 截图 ")])], 1), c("td", {
                staticStyle: {
                    padding: "5px 0"
                },
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" 第一场 "), c("el-select", {
                staticStyle: {
                    width: "150px"
                },
                attrs: {
                    placeholder: "请选择",
                    size: "mini"
                },
                model: {
                    value: t.cccaluteData.method1,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "method1", a)
                    },
                    expression: "cccaluteData.method1"
                }
            }, t._l(t.arrdgtztype, (function (t) {
                return c("el-option", {
                    key: t.value,
                    staticStyle: {
                        "font-size": "16px"
                    },
                    attrs: {
                        label: t.name,
                        value: t.value
                    }
                })
            }
            )), 1)], 1), c("td", {
                staticStyle: {
                    padding: "5px 0"
                },
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" 第二场 "), c("el-select", {
                staticStyle: {
                    width: "150px"
                },
                attrs: {
                    placeholder: "请选择",
                    size: "mini"
                },
                model: {
                    value: t.cccaluteData.method2,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "method2", a)
                    },
                    expression: "cccaluteData.method2"
                }
            }, t._l(t.arrdgtztype, (function (t) {
                return c("el-option", {
                    key: t.value,
                    attrs: {
                        label: t.name,
                        value: t.value
                    }
                })
            }
            )), 1)], 1)]), c("tr", [c("td", {
                staticStyle: {
                    padding: "1px 0"
                },
                attrs: {
                    colspan: "3"
                }
            }, [t._v(" JC返点： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    "font-size": "20px",
                    width: "120px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.JCPoint,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "JCPoint", a)
                    },
                    expression: "cccaluteData.JCPoint"
                }
            })], 1), c("td", {
                staticStyle: {
                    padding: "1px 0"
                },
                attrs: {
                    colspan: "4"
                }
            }, [t._v(" HG返点： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "120px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .001,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.HGPoint,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "HGPoint", a)
                    },
                    expression: "cccaluteData.HGPoint"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("赔率")]), c("td", {
                staticStyle: {
                    width: "200px"
                },
                attrs: {
                    colspan: "2"
                }
            }, [c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.JCTzOdd1,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "JCTzOdd1", a)
                    },
                    expression: "cccaluteData.JCTzOdd1"
                }
            }), t._v(" X "), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "1" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.JCTzOdd2,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "JCTzOdd2", a)
                    },
                    expression: "cccaluteData.JCTzOdd2"
                }
            })], 1), c("td", [c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.HGTzOdd1_1,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "HGTzOdd1_1", a)
                    },
                    expression: "cccaluteData.HGTzOdd1_1"
                }
            })], 1), c("td", [c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "2" !== t.seltztype.slice(-1) && "3" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.HGTzOdd1_2,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "HGTzOdd1_2", a)
                    },
                    expression: "cccaluteData.HGTzOdd1_2"
                }
            })], 1), c("td", [c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.HGTzOdd2_1,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "HGTzOdd2_1", a)
                    },
                    expression: "cccaluteData.HGTzOdd2_1"
                }
            })], 1), c("td", [c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "2" !== t.seltztype.slice(-1) && "3" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.HGTzOdd2_2,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "HGTzOdd2_2", a)
                    },
                    expression: "cccaluteData.HGTzOdd2_2"
                }
            })], 1)]), c("tr", {
                staticStyle: {
                    color: "red",
                    background: "#ecf5ff"
                }
            }, [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("下注")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-input", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.cccaluteData.JCTzAmt,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "JCTzAmt", a)
                    },
                    expression: "cccaluteData.JCTzAmt"
                }
            })], 1), c("td", [c("span", [t._v(t._s(t.cccaluteData.HGTzAmt1_1 && parseFloat(t.cccaluteData.HGTzAmt1_1).toFixed(0)))])]), c("td", [c("span", [t._v(t._s(t.cccaluteData.HGTzAmt1_2 && parseFloat(t.cccaluteData.HGTzAmt1_2).toFixed(0)))])]), c("td", [c("span", [t._v(t._s(t.cccaluteData.HGTzAmt2_1 && parseFloat(t.cccaluteData.HGTzAmt2_1).toFixed(0)))])]), c("td", [c("span", [t._v(t._s(t.cccaluteData.HGTzAmt2_2 && parseFloat(t.cccaluteData.HGTzAmt2_2).toFixed(0)))])])]), c("tr", {
                staticStyle: {
                    color: "#817d7d"
                }
            }, [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("中奖")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" " + t._s(t.cccaluteData.JCAmount && parseFloat(t.cccaluteData.JCAmount).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(t.cccaluteData.HGAmount1_1 && parseFloat(t.cccaluteData.HGAmount1_1).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(t.cccaluteData.HGAmount1_2 && parseFloat(t.cccaluteData.HGAmount1_2).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(t.cccaluteData.HGAmount2_1 && parseFloat(t.cccaluteData.HGAmount2_1).toFixed(0)) + " ")]), c("td", [t._v(" " + t._s(t.cccaluteData.HGAmount2_2 && parseFloat(t.cccaluteData.HGAmount2_2).toFixed(0)) + " ")])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("利润")]), c("td", {
                staticClass: "star-chose",
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" " + t._s(t.cccaluteData.JcProfit && parseFloat(t.cccaluteData.JcProfit).toFixed(0)) + " ")]), c("td", {
                staticClass: "star-chose",
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" " + t._s(t.cccaluteData.HgProfit1 && parseFloat(t.cccaluteData.HgProfit1).toFixed(0)) + " "), c("span", {
                class: {
                    "el-icon-star-off": !t.firStar
                },
                staticStyle: {
                    "font-size": "20px",
                    cursor: "pointer"
                },
                on: {
                    click: function (a) {
                        return t.changeLaid(1)
                    }
                }
            }), c("span", {
                class: {
                    "el-icon-star-on": t.firStar
                },
                staticStyle: {
                    "font-size": "22px",
                    cursor: "pointer",
                    color: "green"
                },
                on: {
                    click: function (a) {
                        return t.changeLaid(2)
                    }
                }
            })]), c("td", {
                staticClass: "star-chose",
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" " + t._s(t.cccaluteData.HgProfit2 && parseFloat(t.cccaluteData.HgProfit2).toFixed(0)) + " "), c("span", {
                class: {
                    "el-icon-star-off": !t.secStar
                },
                staticStyle: {
                    "font-size": "20px",
                    cursor: "pointer"
                },
                on: {
                    click: function (a) {
                        return t.changeLaid(3)
                    }
                }
            }), c("span", {
                class: {
                    "el-icon-star-on": t.secStar
                },
                staticStyle: {
                    "font-size": "22px",
                    cursor: "pointer",
                    color: "green"
                },
                on: {
                    click: function (a) {
                        return t.changeLaid(4)
                    }
                }
            })])])]), c("div", {
                staticClass: "beizuinfo"
            }, [t._v(" 收益调节：平均："), c("el-switch", {
                attrs: {
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949"
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.ifAverg,
                    callback: function (a) {
                        t.ifAverg = a
                    },
                    expression: "ifAverg"
                }
            }), t._v(" 自定义："), c("el-input-number", {
                attrs: {
                    precision: 5,
                    size: "mini",
                    step: .001
                },
                on: {
                    change: function (a) {
                        return t.computeDatacc()
                    }
                },
                model: {
                    value: t.yields,
                    callback: function (a) {
                        t.yields = a
                    },
                    expression: "yields"
                }
            }), t._v(" 备注："), c("el-input", {
                staticStyle: {
                    display: "inline-block",
                    width: "220px"
                },
                model: {
                    value: t.cccaluteData.Marks,
                    callback: function (a) {
                        t.$set(t.cccaluteData, "Marks", a)
                    },
                    expression: "cccaluteData.Marks"
                }
            }), c("el-button", {
                attrs: {
                    type: "success",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.savePlan()
                    }
                }
            }, [t._v(" 保存 ")]), c("el-button", {
                attrs: {
                    type: "danger",
                    size: "mini"
                },
                on: {
                    click: function (a) {
                        return t.closePlan()
                    }
                }
            }, [t._v(" 关闭 ")])], 1)])])]), c("el-dialog", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                staticClass: "intf-dialog",
                attrs: {
                    title: "进球数计算器",
                    visible: t.ttgCalShow,
                    width: "65%",
                    modal: !1,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function (a) {
                        t.ttgCalShow = a
                    }
                }
            }, [c("table", {
                staticClass: "dangtable"
            }, [c("tr", [c("td", {
                attrs: {
                    colspan: "11"
                }
            }, [t._v(" [" + t._s(t.matchInfo.matchNumStr) + "] " + t._s(t.matchInfo.matchTimeFormat) + " 【" + t._s(t.matchInfo.leagueAbbName) + "】"), c("span", {
                staticStyle: {
                    color: "blue"
                }
            }, [t._v(t._s(t.matchInfo.homeTeamAbbName))]), t._v(" VS "), c("span", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v(t._s(t.matchInfo.awayTeamAbbName))])])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "8"
                }
            }, [t._v("官方")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v("平台")])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "8"
                }
            }, [t._v(" JC投注总金额： "), c("el-input", {
                staticStyle: {
                    width: "100px",
                    "margin-right": "60px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("yh", 0)
                    }
                },
                model: {
                    value: t.ttgCalData.ttgTzAmt,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "ttgTzAmt", a)
                    },
                    expression: "ttgCalData.ttgTzAmt"
                }
            }), t._v(" jc返点 : "), c("el-input-number", {
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("yh", 0)
                    }
                },
                model: {
                    value: t.ttgCalData.JCPoint,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCPoint", a)
                    },
                    expression: "ttgCalData.JCPoint"
                }
            }), c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, -1)
                    }
                }
            }, [t._v(" 复制 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, -1)
                    }
                }
            }, [t._v(" 凑整复制 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, -1)
                    }
                }
            }, [t._v(" 截图 ")])], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" hg返点 : "), c("el-input-number", {
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("yh", 0)
                    }
                },
                model: {
                    value: t.ttgCalData.HGPoint,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "HGPoint", a)
                    },
                    expression: "ttgCalData.HGPoint"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("赔率")]), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 0)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 0)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 0)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("0球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 0)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds0,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds0", a)
                    },
                    expression: "ttgCalData.JCTzOdds0"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 1)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 1)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 1)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("1球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 1)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds1,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds1", a)
                    },
                    expression: "ttgCalData.JCTzOdds1"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 2)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 2)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 2)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("2球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 2)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds2,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds2", a)
                    },
                    expression: "ttgCalData.JCTzOdds2"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 3)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 3)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 3)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("3球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 3)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds3,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds3", a)
                    },
                    expression: "ttgCalData.JCTzOdds3"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 4)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 4)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 4)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("4球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 4)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds4,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds4", a)
                    },
                    expression: "ttgCalData.JCTzOdds4"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 5)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 5)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 5)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("5球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 5)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds5,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds5", a)
                    },
                    expression: "ttgCalData.JCTzOdds5"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 6)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 6)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 6)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("6球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 6)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds6,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds6", a)
                    },
                    expression: "ttgCalData.JCTzOdds6"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 0, 7)
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.ttgCopy(t.ttgCalData, t.matchInfo, 1, 7)
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietuttg(t.matchInfo, 7)
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("7+球")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("", 7)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzOdds7,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzOdds7", a)
                    },
                    expression: "ttgCalData.JCTzOdds7"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.ttgCalData.HGgoalLine1 ? t.getText(t.ttgCalData.HGTouz1, t.ttgCalData.HGgoalLine1) : ""))]), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("")
                    }
                },
                model: {
                    value: t.ttgCalData.HGTzOdds1,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "HGTzOdds1", a)
                    },
                    expression: "ttgCalData.HGTzOdds1"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.ttgCalData.HGgoalLine2 ? t.getText(t.ttgCalData.HGTouz2, t.ttgCalData.HGgoalLine2) : "无需投注"))]), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("")
                    }
                },
                model: {
                    value: t.ttgCalData.HGTzOdds2,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "HGTzOdds2", a)
                    },
                    expression: "ttgCalData.HGTzOdds2"
                }
            })], 1)]), c("tr", {
                staticStyle: {
                    color: "red",
                    background: "#ecf5ff"
                }
            }, [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("下注")]), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 0)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt0,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt0", a)
                    },
                    expression: "ttgCalData.JCTzAmt0"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 1)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt1,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt1", a)
                    },
                    expression: "ttgCalData.JCTzAmt1"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 2)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt2,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt2", a)
                    },
                    expression: "ttgCalData.JCTzAmt2"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 3)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt3,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt3", a)
                    },
                    expression: "ttgCalData.JCTzAmt3"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 4)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt4,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt4", a)
                    },
                    expression: "ttgCalData.JCTzAmt4"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 5)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt5,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt5", a)
                    },
                    expression: "ttgCalData.JCTzAmt5"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 6)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt6,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt6", a)
                    },
                    expression: "ttgCalData.JCTzAmt6"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("jc", 7)
                    }
                },
                model: {
                    value: t.ttgCalData.JCTzAmt7,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "JCTzAmt7", a)
                    },
                    expression: "ttgCalData.JCTzAmt7"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("hg")
                    }
                },
                model: {
                    value: t.ttgCalData.HGTzAmt1,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "HGTzAmt1", a)
                    },
                    expression: "ttgCalData.HGTzAmt1"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.ttgcomputeData("hg2")
                    }
                },
                model: {
                    value: t.ttgCalData.HGTzAmt2,
                    callback: function (a) {
                        t.$set(t.ttgCalData, "HGTzAmt2", a)
                    },
                    expression: "ttgCalData.HGTzAmt2"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "20%"
                }
            }, [t._v("中奖金额")]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt0))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt1))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt2))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt3))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt4))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt5))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.JCZjAmt6))])]), c("td", [c("span", [t._v(t._s(this.ttgCalData.JCZjAmt7))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.HGZjAmt1))])]), c("td", [c("span", [t._v(t._s(t.ttgCalData.HGZjAmt2))])])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("利润")]), c("td", {
                attrs: {
                    colspan: "10"
                }
            }, [t._v(" " + t._s(t.ttgCalData.profit) + " ")])])]), c("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [c("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.computeData()
                    }
                }
            }, [t._v("计算")]), c("el-button", {
                on: {
                    click: function (a) {
                        t.ttgCalShow = !1
                    }
                }
            }, [t._v("取 消")])], 1)]), c("el-dialog", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                staticClass: "intf-dialog",
                staticStyle: {
                    paddig: "10px 0"
                },
                attrs: {
                    title: "半全场计算器",
                    visible: t.hufaCalShow,
                    width: "70%",
                    modal: !1,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function (a) {
                        t.hufaCalShow = a
                    }
                }
            }, [c("table", {
                staticClass: "dangtable"
            }, [c("tr", [c("td", {
                attrs: {
                    colspan: "12"
                }
            }, [t._v(" [" + t._s(t.matchInfo.matchNumStr) + "] " + t._s(t.matchInfo.matchTimeFormat) + " 【" + t._s(t.matchInfo.leagueAbbName) + "】"), c("span", {
                staticStyle: {
                    color: "blue"
                }
            }, [t._v(t._s(t.matchInfo.homeTeamAbbName))]), t._v(" VS "), c("span", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v(t._s(t.matchInfo.awayTeamAbbName))])])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "9"
                }
            }, [t._v("官方")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v("平台")])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "9"
                }
            }, [t._v(" JC投注总金额： "), c("el-input", {
                staticStyle: {
                    width: "120px",
                    "margin-right": "60px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("yh", 0)
                    }
                },
                model: {
                    value: t.hafuCalData.bqcTzAmt,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "bqcTzAmt", a)
                    },
                    expression: "hafuCalData.bqcTzAmt"
                }
            }), t._v(" jc返点 : "), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("yh", 0)
                    }
                },
                model: {
                    value: t.hafuCalData.JCPoint,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "JCPoint", a)
                    },
                    expression: "hafuCalData.JCPoint"
                }
            }), c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, -1)
                    }
                }
            }, [t._v(" 复制 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, -1)
                    }
                }
            }, [t._v(" 凑整复制 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, -1)
                    }
                }
            }, [t._v(" 截图 ")])], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" hg返点 : "), c("el-input-number", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("yh", 0)
                    }
                },
                model: {
                    value: t.hafuCalData.HGPoint,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "HGPoint", a)
                    },
                    expression: "hafuCalData.HGPoint"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("赔率")]), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "hh")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "hh")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "hh")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("胜胜")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "hh")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_hh,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_hh", a)
                    },
                    expression: "hafuCalData.hafu_hh"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "hd")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "hd")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "hd")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("胜平")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "hd")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_hd,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_hd", a)
                    },
                    expression: "hafuCalData.hafu_hd"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "ha")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "ha")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "ha")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("胜负")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "ha")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_ha,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_ha", a)
                    },
                    expression: "hafuCalData.hafu_ha"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "dh")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "dh")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "dh")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("平胜")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "dh")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_dh,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_dh", a)
                    },
                    expression: "hafuCalData.hafu_dh"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "dd")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "dd")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "dd")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("平平")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "dd")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_dd,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_dd", a)
                    },
                    expression: "hafuCalData.hafu_dd"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "da")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "da")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "da")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("平负")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "da")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_da,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_da", a)
                    },
                    expression: "hafuCalData.hafu_da"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "ah")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "ah")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "ah")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("负胜")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "ah")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_ah,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_ah", a)
                    },
                    expression: "hafuCalData.hafu_ah"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "ad")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "ad")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "ad")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("负平")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "ad")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_ad,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_ad", a)
                    },
                    expression: "hafuCalData.hafu_ad"
                }
            })], 1), c("td", [c("el-button", {
                staticClass: "ccl-copy",
                staticStyle: {
                    "margin-left": "10px"
                },
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 0, "aa")
                    }
                }
            }, [t._v(" 复 ")]), c("el-button", {
                staticClass: "ccl-round-copy",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.bqcCopy(t.hafuCalData, t.matchInfo, 1, "aa")
                    }
                }
            }, [t._v(" 整 ")]), c("el-button", {
                staticClass: "ccl-jietu",
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietubqc(t.matchInfo, "aa")
                    }
                }
            }, [t._v(" 截 ")]), c("br"), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v("负负")]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "aa")
                    }
                },
                model: {
                    value: t.hafuCalData.hafu_aa,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hafu_aa", a)
                    },
                    expression: "hafuCalData.hafu_aa"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.hafuCalData.HGgoalLine1 ? t.getText(t.hafuCalData.HGTouz1, t.hafuCalData.HGgoalLine1) : ""))]), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "hgBet1")
                    }
                },
                model: {
                    value: t.hafuCalData.hgOdds1,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hgOdds1", a)
                    },
                    expression: "hafuCalData.hgOdds1"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.hafuCalData.HGgoalLine2 ? t.getText(t.hafuCalData.HGTouz2, t.hafuCalData.HGgoalLine2) : ""))]), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("", "hgBet2")
                    }
                },
                model: {
                    value: t.hafuCalData.hgOdds2,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hgOdds2", a)
                    },
                    expression: "hafuCalData.hgOdds2"
                }
            })], 1)]), c("tr", {
                staticStyle: {
                    color: "red",
                    background: "#ecf5ff"
                }
            }, [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("下注")]), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "hh")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_hh,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_hh", a)
                    },
                    expression: "hafuCalData.jcBet_hh"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "hd")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_hd,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_hd", a)
                    },
                    expression: "hafuCalData.jcBet_hd"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "ha")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_ha,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_ha", a)
                    },
                    expression: "hafuCalData.jcBet_ha"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "dh")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_dh,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_dh", a)
                    },
                    expression: "hafuCalData.jcBet_dh"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "dd")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_dd,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_dd", a)
                    },
                    expression: "hafuCalData.jcBet_dd"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "da")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_da,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_da", a)
                    },
                    expression: "hafuCalData.jcBet_da"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "ah")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_ah,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_ah", a)
                    },
                    expression: "hafuCalData.jcBet_ah"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "ad")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_ad,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_ad", a)
                    },
                    expression: "hafuCalData.jcBet_ad"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("jc", "aa")
                    }
                },
                model: {
                    value: t.hafuCalData.jcBet_aa,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "jcBet_aa", a)
                    },
                    expression: "hafuCalData.jcBet_aa"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("hg", "hgBet1")
                    }
                },
                model: {
                    value: t.hafuCalData.hgBet1,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hgBet1", a)
                    },
                    expression: "hafuCalData.hgBet1"
                }
            })], 1), c("td", [c("el-input", {
                staticStyle: {
                    width: "100px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.hufacomputeData("hg", "hgBet2")
                    }
                },
                model: {
                    value: t.hafuCalData.hgBet2,
                    callback: function (a) {
                        t.$set(t.hafuCalData, "hgBet2", a)
                    },
                    expression: "hafuCalData.hgBet2"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "20%"
                }
            }, [t._v("中奖金额")]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_hh))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_hd))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_ha))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_dh))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_dd))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_da))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_ah))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_ad))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.JCZjAmt_aa))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.HGZjAmt_1))])]), c("td", [c("span", [t._v(t._s(t.hafuCalData.HGZjAmt_2))])])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("利润")]), c("td", {
                attrs: {
                    colspan: "11"
                }
            }, [t._v(" " + t._s(t.hafuCalData.profit) + " ")])])]), c("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [c("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.hufacomputeData()
                    }
                }
            }, [t._v("计算")]), c("el-button", {
                on: {
                    click: function (a) {
                        t.hufaCalShow = !1
                    }
                }
            }, [t._v("取 消")])], 1)]), c("el-dialog", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                staticClass: "intf-dialog",
                attrs: {
                    title: "全包计算器",
                    visible: t.qbShowCal,
                    width: "70%",
                    modal: !1,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function (a) {
                        t.qbShowCal = a
                    }
                }
            }, [c("table", {
                staticClass: "dangtable"
            }, [c("tr", [c("td", {
                attrs: {
                    colspan: "6"
                }
            }, [t._v(" [" + t._s(t.matchInfo1.matchNumStr) + "] " + t._s(t.matchInfo1.matchTimeFormat) + " 【" + t._s(t.matchInfo1.leagueAbbName) + "】"), c("span", {
                staticStyle: {
                    color: "blue"
                }
            }, [t._v(t._s(t.matchInfo1.homeTeamAbbName))]), t._v(" VS "), c("span", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v(t._s(t.matchInfo1.awayTeamAbbName))]), c("br"), t._v(" [" + t._s(t.matchInfo2.matchNumStr) + "] " + t._s(t.matchInfo2.matchTimeFormat) + " 【" + t._s(t.matchInfo2.leagueAbbName) + "】"), c("span", {
                staticStyle: {
                    color: "blue"
                }
            }, [t._v(t._s(t.matchInfo2.homeTeamAbbName))]), t._v(" VS "), c("span", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v(t._s(t.matchInfo2.awayTeamAbbName))])]), c("td", {
                attrs: {
                    colspan: "1"
                }
            }, [c("el-select", {
                attrs: {
                    placeholder: "请选择",
                    size: "small"
                },
                model: {
                    value: t.qbcaluteData.method,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "method", a)
                    },
                    expression: "qbcaluteData.method"
                }
            }, t._l(t.arrdgtztype, (function (t) {
                return c("el-option", {
                    key: t.value,
                    attrs: {
                        label: t.name,
                        value: t.value
                    }
                })
            }
            )), 1)], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" 官方投注1 "), c("el-button", {
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietucc(t.qbcaluteData, 1, t.matchInfo1, t.matchInfo2)
                    }
                }
            }, [t._v(" 截图 ")])], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" 官方投注2 "), c("el-button", {
                attrs: {
                    size: "mini",
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.jietucc(t.qbcaluteData, 2, t.matchInfo1, t.matchInfo2)
                    }
                }
            }, [t._v(" 截图 ")])], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v("平台")])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" JC返点1： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "110px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.JCPoint,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCPoint", a)
                    },
                    expression: "qbcaluteData.JCPoint"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" JC返点2： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "110px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.JCPoint2,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCPoint2", a)
                    },
                    expression: "qbcaluteData.JCPoint2"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" HG返点： "), c("el-input-number", {
                staticStyle: {
                    "margin-right": "20px",
                    width: "110px"
                },
                attrs: {
                    "controls-position": "right",
                    precision: 3,
                    step: .01,
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.HGPoint,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "HGPoint", a)
                    },
                    expression: "qbcaluteData.HGPoint"
                }
            })], 1)]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("赔率")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getTextJC(t.qbcaluteData.JCTouz1_1, t.qbcaluteData.JCgoalLine1_1)))]), t._v(" X "), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getTextJC(t.qbcaluteData.JCTouz1_2, t.qbcaluteData.JCgoalLine1_2)))]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        if (t.qbcaluteData.JCgoalLine1_1 === t.qbcaluteData.JCgoalLine2_1 && t.qbcaluteData.JCTouz1_1 === t.qbcaluteData.JCTouz2_1) t.$set(t.qbcaluteData, "JCTzOdd2_1", a);
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.JCTzOdd1_1,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCTzOdd1_1", a)
                    },
                    expression: "qbcaluteData.JCTzOdd1_1"
                }
            }), t._v(" X "), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "1" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        if (t.qbcaluteData.JCgoalLine1_2 === t.qbcaluteData.JCgoalLine2_2 && t.qbcaluteData.JCTouz1_2 === t.qbcaluteData.JCTouz2_2) t.$set(t.qbcaluteData, "JCTzOdd2_2", a);
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.JCTzOdd1_2,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCTzOdd1_2", a)
                    },
                    expression: "qbcaluteData.JCTzOdd1_2"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getTextJC(t.qbcaluteData.JCTouz2_1, t.qbcaluteData.JCgoalLine2_1)))]), t._v("X "), c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getTextJC(t.qbcaluteData.JCTouz2_2, t.qbcaluteData.JCgoalLine2_2)))]), c("br"), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        if (t.qbcaluteData.JCgoalLine1_1 === t.qbcaluteData.JCgoalLine2_1 && t.qbcaluteData.JCTouz1_1 === t.qbcaluteData.JCTouz2_1) t.$set(t.qbcaluteData, "JCTzOdd1_1", a);
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.JCTzOdd2_1,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCTzOdd2_1", a)
                    },
                    expression: "qbcaluteData.JCTzOdd2_1"
                }
            }), t._v(" X "), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "1" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        if (t.qbcaluteData.JCgoalLine1_2 === t.qbcaluteData.JCgoalLine2_2 && t.qbcaluteData.JCTouz1_2 === t.qbcaluteData.JCTouz2_2) t.$set(t.qbcaluteData, "JCTzOdd1_2", a);
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.JCTzOdd2_2,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCTzOdd2_2", a)
                    },
                    expression: "qbcaluteData.JCTzOdd2_2"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getText(t.qbcaluteData.HGTouz1_1, t.qbcaluteData.HGgoalLine1_1)))]), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01
                },
                on: {
                    change: function (a) {
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.HGTzOdd1_1,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "HGTzOdd1_1", a)
                    },
                    expression: "qbcaluteData.HGTzOdd1_1"
                }
            })], 1), c("td", [c("span", {
                staticStyle: {
                    color: "rgb(0, 168, 118)"
                }
            }, [t._v(t._s(t.getText(t.qbcaluteData.HGTouz1_2, t.qbcaluteData.HGgoalLine1_2)))]), c("el-input-number", {
                staticStyle: {
                    width: "110px"
                },
                attrs: {
                    size: "small",
                    step: .01,
                    disabled: t.seltztype && "2" !== t.seltztype.slice(-1) && "3" !== t.seltztype.slice(-1)
                },
                on: {
                    change: function (a) {
                        return t.qbcomputeData()
                    }
                },
                model: {
                    value: t.qbcaluteData.HGTzOdd1_2,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "HGTzOdd1_2", a)
                    },
                    expression: "qbcaluteData.HGTzOdd1_2"
                }
            })], 1)]), c("tr", {
                staticStyle: {
                    color: "red",
                    background: "#ecf5ff"
                }
            }, [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("下注")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("el-input", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    change: function (a) {
                        return t.qbcomputeData("jc")
                    }
                },
                model: {
                    value: t.qbcaluteData.JCTzAmt1,
                    callback: function (a) {
                        t.$set(t.qbcaluteData, "JCTzAmt1", a)
                    },
                    expression: "qbcaluteData.JCTzAmt1"
                }
            })], 1), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [c("span", [t._v(t._s(t.qbcaluteData.JCTzAmt2))])]), c("td", [c("span", [t._v(t._s(t.qbcaluteData.HGTzAmt1))])]), c("td", [c("span", [t._v(t._s(t.qbcaluteData.HGTzAmt2))])])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("中奖金额")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" " + t._s(t.qbcaluteData.JCAmount1) + " ")]), c("td", {
                attrs: {
                    colspan: "2"
                }
            }, [t._v(" " + t._s(t.qbcaluteData.JCAmount2) + " ")]), c("td", [t._v(t._s(t.qbcaluteData.HGAmount1))]), c("td", [t._v(t._s(t.qbcaluteData.HGAmount2))])]), c("tr", [c("td", {
                staticStyle: {
                    width: "10%"
                }
            }, [t._v("利润")]), c("td", {
                attrs: {
                    colspan: "6"
                }
            }, [t._v(" " + t._s(t.qbcaluteData.profit) + " ")])])]), c("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [c("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function (a) {
                        return t.qbcomputeData()
                    }
                }
            }, [t._v("计算")]), c("el-button", {
                on: {
                    click: function (a) {
                        t.qbShowCal = !1
                    }
                }
            }, [t._v("取 消")])], 1)]), c("el-dialog", {
                staticClass: "intf-dialog",
                attrs: {
                    title: "截图",
                    visible: t.jietuVisible,
                    width: "425px",
                    modal: !1,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function (a) {
                        t.jietuVisible = a
                    }
                }
            }, [c("iframe", {
                key: "" + Math.random(),
                attrs: {
                    src: t.sportteryUrl + "?copy=" + t.seltgame,
                    width: "375px",
                    height: "667px",
                    frameborder: "0"
                }
            })])], 1)
        }, s = [], r = e("c7eb"), u = e("1da1"), h = (e("b0c0"),
            e("99af"),
            e("fb6a"),
            e("14d9"),
            e("b680"),
            e("25f0"),
            e("a9e3"),
            e("ac1f"),
            e("5319"),
            function () {
                var t = this
                    , a = t.$createElement
                    , c = t._self._c || a;
                return c("div", {
                    staticClass: "navbar"
                }, [c("hamburger", {
                    staticClass: "hamburger-container",
                    attrs: {
                        "is-active": t.sidebar.opened
                    },
                    on: {
                        toggleClick: t.toggleSideBar
                    }
                }), c("breadcrumb", {
                    staticClass: "breadcrumb-container"
                }), c("div", {
                    staticClass: "right-menu"
                }, [c("el-dropdown", {
                    staticClass: "avatar-container",
                    attrs: {
                        trigger: "click"
                    }
                }, [c("div", {
                    staticClass: "avatar-wrapper"
                }, [c("span", {
                    staticStyle: {
                        color: "red"
                    }
                }, [t._v(" " + t._s(t.viptime ? t.dateFormat(new Date(t.viptime), "yyyy-MM-dd hh:mm:ss") : "") + "到期 ")]), c("img", {
                    staticClass: "user-avatar",
                    attrs: {
                        src: e("09b1")
                    }
                }), c("i", {
                    staticClass: "el-icon-caret-bottom"
                })]), c("el-dropdown-menu", {
                    staticClass: "user-dropdown",
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [c("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [c("el-dropdown-item", [t._v(" Home ")])], 1), c("el-dropdown-item", {
                    attrs: {
                        divided: ""
                    },
                    nativeOn: {
                        click: function (a) {
                            return t.logout(a)
                        }
                    }
                }, [c("span", {
                    staticStyle: {
                        display: "block"
                    }
                }, [t._v("Log Out")])])], 1)], 1)], 1)], 1)
            }
        ), d = [], f = e("5530"), m = (e("00b4"),
            e("4d63"),
            e("c607"),
            e("2c3e"),
            e("2f62")), p = function () {
                var t = this
                    , a = t.$createElement
                    , e = t._self._c || a;
                return e("el-breadcrumb", {
                    staticClass: "app-breadcrumb",
                    attrs: {
                        separator: "/"
                    }
                }, [e("transition-group", {
                    attrs: {
                        name: "breadcrumb"
                    }
                }, t._l(t.levelList, (function (a, c) {
                    return e("el-breadcrumb-item", {
                        key: a.path
                    }, ["noRedirect" === a.redirect || c == t.levelList.length - 1 ? e("span", {
                        staticClass: "no-redirect"
                    }, [t._v(t._s(a.meta.title))]) : e("a", {
                        on: {
                            click: function (e) {
                                return e.preventDefault(),
                                    t.handleLink(a)
                            }
                        }
                    }, [t._v(t._s(a.meta.title))])])
                }
                )), 1)], 1)
            }, C = [], g = (e("4de4"),
                e("498a"),
                e("bd11")), D = e.n(g), _ = {
                    data: function () {
                        return {
                            levelList: null
                        }
                    },
                    watch: {
                        $route: function () {
                            this.getBreadcrumb()
                        }
                    },
                    created: function () {
                        this.getBreadcrumb()
                    },
                    methods: {
                        getBreadcrumb: function () {
                            var t = this.$route.matched.filter((function (t) {
                                return t.meta && t.meta.title
                            }
                            ))
                                , a = t[0];
                            this.isDashboard(a) || (t = [{
                                path: "/dashboard",
                                meta: {
                                    title: "Dashboard"
                                }
                            }].concat(t)),
                                this.levelList = t.filter((function (t) {
                                    return t.meta && t.meta.title && !1 !== t.meta.breadcrumb
                                }
                                ))
                        },
                        isDashboard: function (t) {
                            var a = t && t.name;
                            return !!a && a.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
                        },
                        pathCompile: function (t) {
                            var a = this.$route.params
                                , e = D.a.compile(t);
                            return e(a)
                        },
                        handleLink: function (t) {
                            var a = t.redirect
                                , e = t.path;
                            a ? this.$router.push(a) : this.$router.push(this.pathCompile(e))
                        }
                    }
                }, b = _, v = (e("14ec"),
                    e("2877")), z = Object(v["a"])(b, p, C, !1, null, "a963f6d0", null), y = z.exports, j = function () {
                        var t = this
                            , a = t.$createElement
                            , e = t._self._c || a;
                        return e("div", {
                            staticStyle: {
                                padding: "0 15px"
                            },
                            on: {
                                click: t.toggleClick
                            }
                        }, [e("svg", {
                            staticClass: "hamburger",
                            class: {
                                "is-active": t.isActive
                            },
                            attrs: {
                                viewBox: "0 0 1024 1024",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "64",
                                height: "64"
                            }
                        }, [e("path", {
                            attrs: {
                                d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
                            }
                        })])])
                    }, T = [], J = {
                        name: "Hamburger",
                        props: {
                            isActive: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        methods: {
                            toggleClick: function () {
                                this.$emit("toggleClick")
                            }
                        }
                    }, x = J, A = (e("e7e7"),
                        Object(v["a"])(x, j, T, !1, null, "351820a6", null)), w = A.exports, B = {
                            components: {
                                Breadcrumb: y,
                                Hamburger: w
                            },
                            computed: Object(f["a"])({}, Object(m["b"])(["sidebar", "avatar", "viptime"])),
                            methods: {
                                dateFormat: function (t, a) {
                                    var e = {
                                        "M+": t.getMonth() + 1,
                                        "d+": t.getDate(),
                                        "h+": t.getHours(),
                                        "H+": t.getHours(),
                                        "m+": t.getMinutes(),
                                        "s+": t.getSeconds(),
                                        "q+": Math.floor((t.getMonth() + 3) / 3),
                                        S: t.getMilliseconds()
                                    };
                                    for (var c in /(y+)/.test(a) && (a = a.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                                        e)
                                        new RegExp("(" + c + ")").test(a) && (a = a.replace(RegExp.$1, 1 === RegExp.$1.length ? e[c] : ("00" + e[c]).substr(("" + e[c]).length)));
                                    return a
                                },
                                toggleSideBar: function () {
                                    this.$store.dispatch("app/toggleSideBar")
                                },
                                logout: function () {
                                    var t = this;
                                    return Object(u["a"])(Object(r["a"])().mark((function a() {
                                        return Object(r["a"])().wrap((function (a) {
                                            while (1)
                                                switch (a.prev = a.next) {
                                                    case 0:
                                                        return a.next = 2,
                                                            t.$store.dispatch("user/logout");
                                                    case 2:
                                                        t.$router.push("/login?redirect=".concat(t.$route.fullPath));
                                                    case 3:
                                                    case "end":
                                                        return a.stop()
                                                }
                                        }
                                        ), a)
                                    }
                                    )))()
                                }
                            }
                        }, k = B, S = (e("32e5"),
                            Object(v["a"])(k, h, d, !1, null, "24d508f3", null)), O = S.exports, F = function () {
                                var t = this
                                    , a = t.$createElement
                                    , e = t._self._c || a;
                                return e("div", {
                                    class: {
                                        "has-logo": t.showLogo
                                    }
                                }, [t.showLogo ? e("logo", {
                                    attrs: {
                                        collapse: t.isCollapse
                                    }
                                }) : t._e(), e("el-scrollbar", {
                                    attrs: {
                                        "wrap-class": "scrollbar-wrapper"
                                    }
                                }, [e("el-menu", {
                                    attrs: {
                                        "default-active": t.activeMenu,
                                        collapse: t.isCollapse,
                                        "background-color": t.variables.menuBg,
                                        "text-color": t.variables.menuText,
                                        "unique-opened": !1,
                                        "active-text-color": t.variables.menuActiveText,
                                        "collapse-transition": !1,
                                        mode: "vertical"
                                    }
                                }, t._l(t.routes, (function (t) {
                                    return e("sidebar-item", {
                                        key: t.path,
                                        attrs: {
                                            item: t,
                                            "base-path": t.path
                                        }
                                    })
                                }
                                )), 1)], 1)], 1)
                            }, H = [], G = function () {
                                var t = this
                                    , a = t.$createElement
                                    , c = t._self._c || a;
                                return c("div", {
                                    staticClass: "sidebar-logo-container",
                                    class: {
                                        collapse: t.collapse
                                    }
                                }, [c("transition", {
                                    attrs: {
                                        name: "sidebarLogoFade"
                                    }
                                }, [t.collapse ? c("router-link", {
                                    key: "collapse",
                                    staticClass: "sidebar-logo-link",
                                    attrs: {
                                        to: "/"
                                    }
                                }, [c("img", {
                                    staticClass: "sidebar-logo",
                                    attrs: {
                                        src: e("4ffd")
                                    }
                                })]) : c("router-link", {
                                    key: "expand",
                                    staticClass: "sidebar-logo-link",
                                    attrs: {
                                        to: "/"
                                    }
                                }, [c("h1", {
                                    staticClass: "sidebar-title"
                                }, [t._v(" 红单分析 ")])])], 1)], 1)
                            }, q = [], L = {
                                name: "SidebarLogo",
                                props: {
                                    collapse: {
                                        type: Boolean,
                                        required: !0
                                    }
                                },
                                data: function () {
                                    return {
                                        title: "红单分析",
                                        logo: "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
                                    }
                                }
                            }, M = L, P = (e("e23b"),
                                Object(v["a"])(M, G, q, !1, null, "6f274a1c", null)), I = P.exports, R = function () {
                                    var t = this
                                        , a = t.$createElement
                                        , e = t._self._c || a;
                                    return t.item.hidden ? t._e() : e("div", [!t.hasOneShowingChild(t.item.children, t.item) || t.onlyOneChild.children && !t.onlyOneChild.noShowingChildren || t.item.alwaysShow ? e("el-submenu", {
                                        ref: "subMenu",
                                        attrs: {
                                            index: t.resolvePath(t.item.path),
                                            "popper-append-to-body": ""
                                        }
                                    }, [e("template", {
                                        slot: "title"
                                    }, [t.item.meta ? e("item", {
                                        attrs: {
                                            icon: t.item.meta && t.item.meta.icon,
                                            title: t.item.meta.title
                                        }
                                    }) : t._e()], 1), t._l(t.item.children, (function (a) {
                                        return e("sidebar-item", {
                                            key: a.path,
                                            staticClass: "nest-menu",
                                            attrs: {
                                                "is-nest": !0,
                                                item: a,
                                                "base-path": t.resolvePath(a.path)
                                            }
                                        })
                                    }
                                    ))], 2) : [t.onlyOneChild.meta ? e("app-link", {
                                        attrs: {
                                            to: t.resolvePath(t.onlyOneChild.path)
                                        }
                                    }, [e("el-menu-item", {
                                        class: {
                                            "submenu-title-noDropdown": !t.isNest
                                        },
                                        attrs: {
                                            index: t.resolvePath(t.onlyOneChild.path)
                                        }
                                    }, [e("item", {
                                        attrs: {
                                            icon: t.onlyOneChild.meta.icon || t.item.meta && t.item.meta.icon,
                                            title: t.onlyOneChild.meta.title
                                        }
                                    })], 1)], 1) : t._e()]], 2)
                                }, $ = [], N = e("df7c"), V = e.n(N), E = e("61f7"), Z = (e("caad"),
                                    e("2532"),
                                {
                                    name: "MenuItem",
                                    functional: !0,
                                    props: {
                                        icon: {
                                            type: String,
                                            default: ""
                                        },
                                        title: {
                                            type: String,
                                            default: ""
                                        }
                                    },
                                    render: function (t, a) {
                                        var e = a.props
                                            , c = e.icon
                                            , i = e.title
                                            , n = [];
                                        return c && (c.includes("el-icon") ? n.push(t("i", {
                                            class: [c, "sub-el-icon"]
                                        })) : n.push(t("svg-icon", {
                                            attrs: {
                                                "icon-class": c
                                            }
                                        }))),
                                            i && n.push(t("span", {
                                                slot: "title"
                                            }, [i])),
                                            n
                                    }
                                }), U = Z, W = (e("f15b"),
                                    Object(v["a"])(U, c, i, !1, null, "18eeea00", null)), X = W.exports, Q = function () {
                                        var t = this
                                            , a = t.$createElement
                                            , e = t._self._c || a;
                                        return e(t.type, t._b({
                                            tag: "component"
                                        }, "component", t.linkProps(t.to), !1), [t._t("default")], 2)
                                    }, K = [], Y = {
                                        props: {
                                            to: {
                                                type: String,
                                                required: !0
                                            }
                                        },
                                        computed: {
                                            isExternal: function () {
                                                return Object(E["a"])(this.to)
                                            },
                                            type: function () {
                                                return this.isExternal ? "a" : "router-link"
                                            }
                                        },
                                        methods: {
                                            linkProps: function (t) {
                                                return this.isExternal ? {
                                                    href: t,
                                                    target: "_blank",
                                                    rel: "noopener"
                                                } : {
                                                    to: t
                                                }
                                            }
                                        }
                                    }, tt = Y, at = Object(v["a"])(tt, Q, K, !1, null, null, null), et = at.exports, ct = {
                                        computed: {
                                            device: function () {
                                                return this.$store.state.app.device
                                            }
                                        },
                                        mounted: function () {
                                            this.fixBugIniOS()
                                        },
                                        methods: {
                                            fixBugIniOS: function () {
                                                var t = this
                                                    , a = this.$refs.subMenu;
                                                if (a) {
                                                    var e = a.handleMouseleave;
                                                    a.handleMouseleave = function (a) {
                                                        "mobile" !== t.device && e(a)
                                                    }
                                                }
                                            }
                                        }
                                    }, it = {
                                        name: "SidebarItem",
                                        components: {
                                            Item: X,
                                            AppLink: et
                                        },
                                        mixins: [ct],
                                        props: {
                                            item: {
                                                type: Object,
                                                required: !0
                                            },
                                            isNest: {
                                                type: Boolean,
                                                default: !1
                                            },
                                            basePath: {
                                                type: String,
                                                default: ""
                                            }
                                        },
                                        data: function () {
                                            return this.onlyOneChild = null,
                                                {}
                                        },
                                        methods: {
                                            hasOneShowingChild: function () {
                                                var t = this
                                                    , a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                                                    , e = arguments.length > 1 ? arguments[1] : void 0
                                                    , c = a.filter((function (a) {
                                                        return !a.hidden && (t.onlyOneChild = a,
                                                            !0)
                                                    }
                                                    ));
                                                return 1 === c.length || 0 === c.length && (this.onlyOneChild = Object(f["a"])(Object(f["a"])({}, e), {}, {
                                                    path: "",
                                                    noShowingChildren: !0
                                                }),
                                                    !0)
                                            },
                                            resolvePath: function (t) {
                                                return Object(E["a"])(t) ? t : Object(E["a"])(this.basePath) ? this.basePath : V.a.resolve(this.basePath, t)
                                            }
                                        }
                                    }, nt = it, ot = Object(v["a"])(nt, R, $, !1, null, null, null), lt = ot.exports, st = e("cf1e"), rt = e.n(st), ut = {
                                        components: {
                                            SidebarItem: lt,
                                            Logo: I
                                        },
                                        computed: Object(f["a"])(Object(f["a"])(Object(f["a"])({}, Object(m["b"])(["sidebar"])), Object(m["b"])(["role", "name"])), {}, {
                                            routes: function () {
                                                return "admin" === this.role ? this.$router.options.routes : this.$router.options.routes.filter((function (t) {
                                                    return "/system" !== t.path
                                                }
                                                ))
                                            },
                                            activeMenu: function () {
                                                var t = this.$route
                                                    , a = t.meta
                                                    , e = t.path;
                                                return a.activeMenu ? a.activeMenu : e
                                            },
                                            showLogo: function () {
                                                return this.$store.state.settings.sidebarLogo
                                            },
                                            variables: function () {
                                                return rt.a
                                            },
                                            isCollapse: function () {
                                                return !this.sidebar.opened
                                            }
                                        })
                                    }, ht = ut, dt = Object(v["a"])(ht, F, H, !1, null, null, null), ft = dt.exports, mt = function () {
                                        var t = this
                                            , a = t.$createElement
                                            , e = t._self._c || a;
                                        return e("section", {
                                            staticClass: "app-main"
                                        }, [e("transition", {
                                            attrs: {
                                                name: "fade-transform",
                                                mode: "out-in"
                                            }
                                        }, [e("router-view", {
                                            key: t.key,
                                            attrs: {
                                                "select-mactch": t.selectMactch,
                                                "flash-flag": t.flashFlag,
                                                "plan-list": t.planList,
                                                "his-plan-list": t.hisPlanList,
                                                "config-data": t.configData
                                            },
                                            on: {
                                                delPlan: function (a) {
                                                    return t.$emit("delPlan", a)
                                                },
                                                ttgcalculate: function (a) {
                                                    return t.$emit("ttgcalculate", a)
                                                },
                                                calculate: function (a) {
                                                    return t.$emit("calculate", a)
                                                },
                                                qbcalculate: function (a) {
                                                    return t.$emit("qbcalculate", a)
                                                },
                                                ccCalcute: function (a) {
                                                    return t.$emit("ccCalcute", a)
                                                },
                                                selectccGames: function (a) {
                                                    return t.$emit("selectccGames", a)
                                                },
                                                hafucalculate: function (a) {
                                                    return t.$emit("hafucalculate", a)
                                                },
                                                showhistoryplan: function (a) {
                                                    return t.$emit("showhistoryplan", a)
                                                }
                                            }
                                        })], 1)], 1)
                                    }, pt = [], Ct = {
                                        name: "AppMain",
                                        props: {
                                            configData: Object,
                                            planList: Array,
                                            hisPlanList: Array,
                                            flashFlag: Boolean,
                                            selectMactch: String
                                        },
                                        computed: {
                                            key: function () {
                                                return this.$route.path
                                            }
                                        }
                                    }, gt = Ct, Dt = (e("5b23"),
                                        e("c2cc"),
                                        Object(v["a"])(gt, mt, pt, !1, null, "738f9500", null)), _t = Dt.exports, bt = e("4360"), vt = document, zt = vt.body, yt = 992, jt = {
                                            watch: {
                                                $route: function (t) {
                                                    "mobile" === this.device && this.sidebar.opened && bt["a"].dispatch("app/closeSideBar", {
                                                        withoutAnimation: !1
                                                    })
                                                }
                                            },
                                            beforeMount: function () {
                                                window.addEventListener("resize", this.$_resizeHandler)
                                            },
                                            beforeDestroy: function () {
                                                window.removeEventListener("resize", this.$_resizeHandler)
                                            },
                                            mounted: function () {
                                                var t = this.$_isMobile();
                                                t && (bt["a"].dispatch("app/toggleDevice", "mobile"),
                                                    bt["a"].dispatch("app/closeSideBar", {
                                                        withoutAnimation: !0
                                                    }))
                                            },
                                            methods: {
                                                $_isMobile: function () {
                                                    var t = zt.getBoundingClientRect();
                                                    return t.width - 1 < yt
                                                },
                                                $_resizeHandler: function () {
                                                    if (!document.hidden) {
                                                        var t = this.$_isMobile();
                                                        bt["a"].dispatch("app/toggleDevice", t ? "mobile" : "desktop"),
                                                            t && bt["a"].dispatch("app/closeSideBar", {
                                                                withoutAnimation: !0
                                                            })
                                                    }
                                                }
                                            }
                                        }, Tt = e("b775");
        function Jt(t) {
            return window.__hdfx_mqtt.calcRequest("calc_sin", t);
        }
        function xt(t) {
            return window.__hdfx_mqtt.calcRequest("calc_qb", t);
        }
        function At(t) {
            return window.__hdfx_mqtt.calcRequest("calc_chuan", t);
        }
        function wt(t) {
            return window.__hdfx_mqtt.calcRequest("calc_totalgoal", t);
        }
        function Bt(t) {
            return window.__hdfx_mqtt.calcRequest("calc_bqc", t);
        }
        var kt = e("9d9f")
            , St = {
                findall: "/matchs/getMatchById"
            };
        function Ot(t) {
            // 赛事详情：通过 MQTT planRequest 获取
            return window.__hdfx_mqtt.planRequest("plan_matchinfo", t);
        }
        var Ft = {
            create: "/userConfig/create",
            findall: "/userConfig/getMyConfig",
            update: "/userConfig/update"
        };
        function Ht(t) {
            // 配置已通过 MQTT auth 推送，这里返回缓存
            var cache = window.__hdfx_mqtt && window.__hdfx_mqtt.getCache && window.__hdfx_mqtt.getCache();
            if (cache && cache.config) return Promise.resolve({ data: cache.config });
            return Promise.resolve({ data: null });
        }
        function Gt(t) {
            if (window.__hdfx_mqtt) {
                window.__hdfx_mqtt.publishConfig(t);
            }
            return Promise.resolve({ success: true });
        }
        var qt = e("5c96")
            , Lt = e("60a8")
            , Mt = e("0bb4")
            , Pt = {
                getVersion: "/jcmatch/version"
            };
        function It(t) {
            // 版本检查不需要 HTTP，返回 0 跳过更新弹窗
            return Promise.resolve({ value: "0" });
        }
        var Rt = {
            name: "Layout",
            components: {
                Navbar: O,
                Sidebar: ft,
                AppMain: _t
            },
            mixins: [jt],
            data: function () {
                return {
                    ifConfigGeted: !1,
                    flashFlag: !1,
                    planList: [],
                    hisPlanList: [],
                    isKey: 0,
                    ifAverg: !0,
                    seltgame: "",
                    sportteryUrl: "/sporttery",
                    jietuVisible: !1,
                    danRadio: 1,
                    chuanRadio: 2,
                    zjqsRadio: 2,
                    bqcRadio: 2,
                    qbRadio: 2,
                    otherRadio: 6,
                    caluteData: {
                        JCgoalLine1: "",
                        JCgoalLine2: "",
                        HGgoalLine1: "",
                        HGgoalLine2: "",
                        jcOdds1: void 0,
                        jcOdds2: void 0,
                        hgOdds1: void 0,
                        hgOdds2: void 0,
                        JCTouz1: "",
                        JCTouz2: "",
                        HGTouz1: "",
                        HGTouz2: "",
                        method: "",
                        jcBet1: void 0,
                        jcBet2: void 0,
                        hgBet1: void 0,
                        hgBet2: void 0,
                        jctexta: "",
                        jctextb: "",
                        hgtexta: "",
                        hgtextb: "",
                        JCPoint1: "",
                        JCPoint2: "",
                        HGPoint1: "",
                        HGPoint2: "",
                        jcAmount1: "",
                        jcAmount2: "",
                        hgAmount1: "",
                        hgAmount2: "",
                        profit: ""
                    },
                    ttgCalData: {
                        JCTzAmt0: "",
                        JCTzOdds0: "",
                        JCTzAmt1: "",
                        JCTzOdds1: "",
                        JCTzAmt2: "",
                        JCTzOdds2: "",
                        JCTzOdds3: "-",
                        JCTzOdds4: "-",
                        JCTzOdds5: "-",
                        JCTzOdds6: "-",
                        JCTzOdds7: "-",
                        HGgoalLine: "",
                        HGTzAmt: 1e4,
                        TzAmt: 1e4,
                        ttgTzAmt: 1e4,
                        JCZjAmt0: 0,
                        JCZjAmt1: 0,
                        JCZjAmt2: 0,
                        JCZjAmt3: 0,
                        JCZjAmt4: 0,
                        JCZjAmt5: 0,
                        JCZjAmt6: 0,
                        JCZjAmt7: 0,
                        HGTzOdds: "",
                        consult: "HG",
                        profit: "",
                        JCPoint: "",
                        HGPoint: ""
                    },
                    hafuCalData: {
                        HGTzAmt: 1e4,
                        TzAmt: 1e4,
                        HGTzOdds: "",
                        profit: ""
                    },
                    JCPointSin: "",
                    JCPointChuan: "",
                    configData: {
                        JCPointSinLq: .07,
                        JCPointSinTgg: .07,
                        JCPointSinHalf: .07,
                        JCPointSin: .07,
                        JCPointChuan: .07,
                        JCPointSinHad: .07,
                        JCPointChuanHad: .07,
                        JCPointChuanLq: .07,
                        JCPointChuanQb: .07,
                        JCPointChuanLqQb: .07,
                        HGPoint: .02,
                        minrate: 0,
                        interval: 10,
                        autoflash: !0,
                        JCTzAmt: 1e4,
                        maxmultiple: 10,
                        scope: "today",
                        tiptone: !0,
                        outFootWall: !1,
                        danRadio: 1,
                        chuanRadio: 2,
                        zjqsRadio: 2,
                        bqcRadio: 2,
                        qbRadio: 2,
                        otherRadio: 6,
                        danSwitch: !0,
                        chuanSwitch: !0,
                        zjqsSwitch: !0,
                        bqcSwitch: !0,
                        qbSwitch: !0,
                        otherSwitch: !0
                    },
                    dialogVisible: !1,
                    gametype: "dg",
                    arrdgtztype: [{
                        value: "WL",
                        name: "生死"
                    }, {
                        value: "WLD1",
                        name: "内平生死平"
                    }, {
                        value: "WLD2",
                        name: "外平生死平"
                    }, {
                        value: "WH1",
                        name: "内平赢一半"
                    }, {
                        value: "WH2",
                        name: "外平赢一半"
                    }, {
                        value: "WH3",
                        name: "内只平赢一半"
                    }, {
                        value: "D1",
                        name: "内平手盘"
                    }, {
                        value: "D2",
                        name: "外平手盘"
                    }, {
                        value: "D3",
                        name: "内只平手盘"
                    }, {
                        value: "LH1",
                        name: "内平输一半"
                    }, {
                        value: "LH2",
                        name: "外平输一半"
                    }, {
                        value: "LH3",
                        name: "内只平输一半"
                    }],
                    seltztype: void 0,
                    matchInfo: {},
                    matchInfo1: {},
                    matchInfo2: {},
                    cccalshow: !1,
                    ttgCalShow: !1,
                    vedioVisible: !1,
                    cccaluteData: {
                        jcMatch1: {},
                        hgMatch1: {},
                        jcMatch2: {},
                        hgMatch2: {},
                        JCTzAmt: 1e4,
                        JCPoint: "",
                        HGPoint: "",
                        method1: "",
                        method2: "",
                        JCgoalLine1: "",
                        JCgoalLine2: "",
                        JCTouz1: "",
                        JCTouz2: "",
                        HGgoalLine1_1: "",
                        HGgoalLine1_2: "",
                        HGgoalLine2_1: "",
                        HGgoalLine2_2: "",
                        HGTouz1_1: "",
                        HGTouz1_2: "",
                        HGTouz2_1: "",
                        HGTouz2_2: "",
                        HGTzOdd1_1: "",
                        HGTzOdd1_2: "",
                        HGTzOdd2_1: "",
                        HGTzOdd2_2: "",
                        JcProfit: "",
                        HgProfit1: "",
                        HgProfit2: "",
                        JCAmount: "",
                        HGAmount1_1: "",
                        HGAmount1_2: "",
                        HGAmount2_1: "",
                        HGAmount2_2: "",
                        yield: "",
                        planId: "",
                        planName1: "",
                        planName2: ""
                    },
                    qbcaluteData: {
                        matchId1: "",
                        matchId2: "",
                        JCPoint: .14,
                        HGPoint: .02,
                        JCTzAmt1: "10000",
                        JCTzAmt2: 0,
                        HGTzAmt1: 0,
                        HGTzAmt2: 0,
                        JCAmount1: "",
                        JCAmount2: "",
                        HGAmount1: "",
                        HGAmount2: "",
                        JCgoalLine1_1: "",
                        JCgoalLine1_2: "",
                        JCgoalLine2_1: "",
                        JCgoalLine2_2: "",
                        HGgoalLine1_1: "",
                        HGgoalLine1_2: "",
                        JCTzOdd1_1: "",
                        JCTzOdd1_2: "",
                        JCTzOdd2_1: "",
                        JCTzOdd2_2: "",
                        HGTzOdd1_1: "",
                        HGTzOdd1_2: "",
                        JCTouz1_1: "",
                        JCTouz1_2: "",
                        JCTouz2_1: "",
                        JCTouz2_2: "",
                        HGTouz1_1: "",
                        HGTouz1_2: "",
                        method: "",
                        profit: "",
                        profitRate: ""
                    },
                    qbShowCal: !1,
                    hufaCalShow: !1,
                    yields: 0,
                    twoDatas: [],
                    currJcMatch1: {},
                    currJcMatch2: {},
                    arrChgOdds: [],
                    selectMactch: "",
                    arrNotices: [],
                    version: "1.0.9058",
                    versionTimer: null,
                    firStar: 0,
                    secStar: 0
                }
            },
            computed: {
                sidebar: function () {
                    return this.$store.state.app.sidebar
                },
                device: function () {
                    return this.$store.state.app.device
                },
                fixedHeader: function () {
                    return this.$store.state.settings.fixedHeader
                },
                classObj: function () {
                    return {
                        hideSidebar: !this.sidebar.opened,
                        openSidebar: this.sidebar.opened,
                        withoutAnimation: this.sidebar.withoutAnimation,
                        mobile: "mobile" === this.device
                    }
                }
            },
            watch: {
                dialogVisible: function (t) { },
                cccalshow: function (t) {
                    !1 === t && (this.ifAverg = !0)
                },
                $route: "routerChange"
            },
            mounted: function () {
                var t = this;
                Object(Mt["b"])({
                    server: "form",
                    state: "open",
                    sort: "createdAt,DESC"
                }).then((function (a) {
                    t.arrNotices = a.data
                }
                )),
                    this.versionTimer = setInterval((function () {
                        Object(Mt["b"])({
                            server: "form",
                            state: "open",
                            sort: "createdAt,DESC"
                        }).then((function (a) {
                            t.arrNotices = a.data
                        }
                        )),
                            It({
                                _t: Math.random()
                            }).then((function (a) {
                                t.version < a.value && t.$alert("请刷新网页获取最新版本", "版本更新", {
                                    confirmButtonText: "刷新",
                                    callback: function (t) {
                                        location.reload()
                                    }
                                })
                            }
                            ))
                    }
                    ), 6e4)
            },
            created: function () {
                var t = this;
                Ht().then((function (a) {
                    a.data && (t.danRadio = a.data.danRadio,
                        t.chuanRadio = a.data.chuanRadio,
                        t.zjqsRadio = a.data.zjqsRadio,
                        t.bqcRadio = a.data.bqcRadio,
                        t.qbRadio = a.data.qbRadio,
                        t.otherRadio = a.data.otherRadio,
                        t.configData.danRadio = a.data.danRadio,
                        t.configData.chuanRadio = a.data.chuanRadio,
                        t.configData.zjqsRadio = a.data.zjqsRadio,
                        t.configData.bqcRadio = a.data.bqcRadio,
                        t.configData.otherRadio = a.data.otherRadio,
                        t.configData.danSwitch = 1 == a.data.danSwitch,
                        t.configData.chuanSwitch = 1 == a.data.chuanSwitch,
                        t.configData.zjqsSwitch = 1 == a.data.zjqsSwitch,
                        t.configData.bqcSwitch = 1 == a.data.bqcSwitch,
                        t.configData.otherSwitch = 1 == a.data.otherSwitch,
                        t.configData.JCPointSinLq = a.data.JCPointSinLq,
                        t.configData.JCPointSinHad = a.data.JCPointSinHad,
                        t.configData.JCPointChuanHad = a.data.JCPointChuanHad,
                        t.configData.JCPointSinTgg = a.data.JCPointSinTgg,
                        t.configData.JCPointSinHalf = a.data.JCPointSinHalf,
                        t.configData.JCPointChuanQb = a.data.JCPointChuanQb,
                        t.configData.JCPointChuanLq = a.data.JCPointChuanLq,
                        t.configData.JCPointChuanLqQb = a.data.JCPointChuanLqQb,
                        t.configData.HGPoint = a.data.HGPoint,
                        t.configData.minrate = a.data.minrate,
                        t.configData.JCTzAmt = a.data.JCTzAmt,
                        t.configData.uuid = a.data.uuid,
                        t.routerChange()),
                        t.ifConfigGeted = !0
                }
                )).catch((function (a) {
                    t.ifConfigGeted = !0
                }
                )),
                    Object(kt["b"])({
                        delFlag: 1,
                        sort: "createdAt,ASC"
                    }).then((function (a) {
                        t.planList = a.data
                    }
                    ))
            },
            beforeDestroy: function () {
                clearInterval(this.versionTimer)
            },
            methods: {
                routerChange: function () {
                    switch (console.log(this.$route.name),
                    this.$route.name) {
                        case "足球二串一":
                            this.configData.JCPointSin = this.configData.JCPointSinHad,
                                this.configData.JCPointChuan = this.configData.JCPointChuanHad;
                            break;
                        case "半全场":
                            this.configData.JCPointSin = this.configData.JCPointSinHalf;
                            break;
                        case "总进球数":
                            this.configData.JCPointSin = this.configData.JCPointSinTgg;
                            break;
                        case "足球全包":
                            this.configData.JCPointChuan = this.configData.JCPointChuanQb;
                            break;
                        case "篮球二串一":
                            this.configData.JCPointSin = this.configData.JCPointSinLq,
                                this.configData.JCPointChuan = this.configData.JCPointChuanLq;
                            break;
                        case "篮球全包":
                            this.configData.JCPointChuan = this.configData.JCPointChuanLqQb;
                            break
                    }
                },
                delPlan: function (t) {
                    var a = this;
                    Object(kt["a"])(t).then((function () {
                        a.$message({
                            message: "删除成功!",
                            type: "success"
                        }),
                            Object(kt["b"])({
                                delFlag: 1,
                                sort: "createdAt,ASC"
                            }).then((function (t) {
                                a.planList = t.data
                            }
                            )),
                            0 == t.delFlag && Object(kt["b"])({
                                delFlag: 0,
                                sort: "createdAt,DESC"
                            }).then((function (t) {
                                a.hisPlanList = t.data
                            }
                            ))
                    }
                    ))
                },
                toMatch: function (t) {
                    this.selectMactch = t
                },
                showOddsChg: function (t, a) {
                    var e = this;
                    this.arrChgOdds = [],
                        Object(Lt["b"])({
                            matchId: a,
                            poolCode: "-" === t ? "had" : "hhad"
                        }).then((function (a) {
                            e.arrChgOdds = "-" === t ? a.value.hadList : a.value.hhadList
                        }
                        ))
                },
                changePoint: function () {
                    switch (this.$route.name) {
                        case "足球二串一":
                            this.configData.JCPointSinHad = this.configData.JCPointSin,
                                this.configData.JCPointChuanHad = this.configData.JCPointChuan;
                            break;
                        case "总进球数":
                            this.configData.JCPointSinTgg = this.configData.JCPointSin;
                            break;
                        case "半全场":
                            this.configData.JCPointSinHalf = this.configData.JCPointSin;
                            break;
                        case "足球全包":
                            this.configData.JCPointChuanQb = this.configData.JCPointChuan;
                            break;
                        case "篮球二串一":
                            this.configData.JCPointSinLq = this.configData.JCPointSin,
                                this.configData.JCPointChuanLq = this.configData.JCPointChuan;
                            break;
                        case "篮球全包":
                            this.configData.JCPointChuanLqQb = this.configData.JCPointChuan;
                            break
                    }
                    Gt(this.configData).then((function (t) { }
                    ))
                },
                setVedio: function () {
                    var t = this;
                    this.configData.danRadio = this.danRadio,
                        this.configData.chuanRadio = this.chuanRadio,
                        this.configData.zjqsRadio = this.zjqsRadio,
                        this.configData.bqcRadio = this.bqcRadio,
                        this.configData.qbRadio = this.qbRadio,
                        this.configData.otherRadio = this.otherRadio,
                        Gt(this.configData).then((function (a) {
                            t.$message({
                                message: "保存成功!",
                                type: "success"
                            })
                        }
                        )),
                        this.vedioVisible = !1
                },
                playVedio: function (t) {
                    var a;
                    "1" === t ? a = document.getElementById("tsy1") : "2" === t ? a = document.getElementById("tsy2") : "3" === t ? a = document.getElementById("tsy3") : "4" === t ? a = document.getElementById("tsy4") : "5" === t ? a = document.getElementById("tsy5") : "6" === t && (a = document.getElementById("tsy6")),
                        a.play()
                },
                changeConfig: function () {
                    Gt(this.configData).then((function (t) { }
                    ))
                },
                showhistoryplan: function (t) {
                    var a = this;
                    0 == t ? this.hisPlanList = [] : Object(kt["b"])({
                        delFlag: 0,
                        sort: "updatedAt,DESC",
                        limit: 10
                    }).then((function (t) {
                        a.hisPlanList = t.data
                    }
                    ))
                },
                savePlan: function () {
                    var t = this;
                    return Object(u["a"])(Object(r["a"])().mark((function a() {
                        var e;
                        return Object(r["a"])().wrap((function (a) {
                            while (1)
                                switch (a.prev = a.next) {
                                    case 0:
                                        return e = 1,
                                            0 == t.cccaluteData.delFlag && (t.cccaluteData.delFlag = 1,
                                                e = 0),
                                            t.cccaluteData.firStar = t.firStar,
                                            t.cccaluteData.secStar = t.secStar,
                                            t.cccaluteData.flag = "saved",
                                            t.cccaluteData.ifAverg = t.ifAverg,
                                            t.cccaluteData.planName1 = t.dealPlanName(t.currJcMatch1.matchNumStr, t.cccaluteData.JCTouz1, t.cccaluteData.JCgoalLine1, t.cccaluteData.JCTzOdd1, t.gametype),
                                            t.cccaluteData.planName2 = t.dealPlanName(t.currJcMatch2.matchNumStr, t.cccaluteData.JCTouz2, t.cccaluteData.JCgoalLine2, t.cccaluteData.JCTzOdd2, t.gametype),
                                            t.cccaluteData.planName1 && t.cccaluteData.planName2 && (t.cccaluteData.planId = t.cccaluteData.planName1 + "%0A" + t.cccaluteData.planName2),
                                            a.next = 12,
                                            t.computeDatacc();
                                    case 12:
                                        t.cccaluteData.uuid = null,
                                        Object(kt["c"])(t.cccaluteData).then((function (a) {
                                            t.$message({
                                                message: "保存成功!",
                                                type: "success"
                                            }),
                                                Object(kt["b"])({
                                                    delFlag: 1,
                                                    sort: "createdAt,ASC"
                                                }).then((function (a) {
                                                    t.planList = a.data
                                                }
                                                )),
                                                0 == e && Object(kt["b"])({
                                                    delFlag: 0,
                                                    sort: "createdAt,DESC"
                                                }).then((function (a) {
                                                    t.hisPlanList = a.data
                                                }
                                                ))
                                        }
                                        ));
                                    case 13:
                                    case "end":
                                        return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                changeLaid: function (t) {
                    1 == t ? this.firStar = 1 : 2 == t && 0 == this.secStar ? this.firStar = 0 : 3 == t && 1 == this.firStar ? this.secStar = 1 : 4 == t && (this.secStar = 0)
                },
                closePlan: function () {
                    this.cccalshow = !1,
                        this.cccaluteData.JCPoint = "",
                        this.cccaluteData.HGPoint = ""
                },
                jietucc: function (t, a, e, c) {
                    this.sportteryUrl = "/sporttery";
                    var i = ""
                        , n = "";
                    switch (t["JCgoalLine" + a + "_1"] && "-" !== t["JCgoalLine" + a + "_1"] ? i = "让" : t["JCgoalLine" + a + "_1"] && "-" === t["JCgoalLine" + a + "_1"] && (i = ""),
                    t["JCTouz" + a + "_1"]) {
                        case "h":
                            i += "胜";
                            break;
                        case "a":
                            i += "负";
                            break;
                        case "d":
                            i += "平";
                            break
                    }
                    switch (t["JCgoalLine" + a + "_2"] && "-" !== t["JCgoalLine" + a + "_2"] ? n = "让" : t["JCgoalLine" + a + "_2"] && "-" === t["JCgoalLine" + a + "_2"] && (n = ""),
                    t["JCTouz" + a + "_2"]) {
                        case "h":
                            n += "胜";
                            break;
                        case "a":
                            n += "负";
                            break;
                        case "d":
                            n += "平";
                            break
                    }
                    this.seltgame = "".concat(e.matchNumStr).concat(i).concat(t["JCTzOdd" + a + "_1"]),
                        n && (this.seltgame += "%0A".concat(c.matchNumStr).concat(n).concat(t["JCTzOdd" + a + "_2"])),
                        this.jietuVisible = !0
                },
                jietu: function (t, a) {
                    var e = ""
                        , c = "";
                    if ("lqdg" == a) {
                        if (this.sportteryUrl = "/sporttery/lqhhgg.html",
                            this.caluteData.JCgoalLine1 && "-" !== this.caluteData.JCgoalLine1)
                            switch (this.caluteData.JCTouz1) {
                                case "h":
                                    e += "让分主胜";
                                    break;
                                case "a":
                                    e += "让分主负";
                                    break;
                                case "d":
                                    e += "大";
                                    break;
                                case "x":
                                    e += "小";
                                    break
                            }
                        else if (this.caluteData.JCgoalLine1 && "-" === this.caluteData.JCgoalLine1)
                            switch (e = "",
                            this.caluteData.JCTouz1) {
                                case "h":
                                    e += "主胜";
                                    break;
                                case "a":
                                    e += "主负";
                                    break
                            }
                        if (this.caluteData.JCgoalLine2 && "-" !== this.caluteData.JCgoalLine2)
                            switch (this.caluteData.JCTouz2) {
                                case "h":
                                    c += "让分主胜";
                                    break;
                                case "a":
                                    c += "让分主负";
                                    break;
                                case "d":
                                    c += "大";
                                    break;
                                case "x":
                                    c += "小";
                                    break
                            }
                        else if (this.caluteData.JCgoalLine2 && "-" === this.caluteData.JCgoalLine2)
                            switch (c = "",
                            this.caluteData.JCTouz2) {
                                case "h":
                                    c += "主胜";
                                    break;
                                case "a":
                                    c += "主负";
                                    break
                            }
                        this.seltgame = "".concat(t.matchNumStr).concat(e).concat(this.caluteData.jcOdds1),
                            c && (this.seltgame += "%0A".concat(t.matchNumStr).concat(c).concat(this.caluteData.jcOdds2))
                    } else {
                        switch (this.sportteryUrl = "/sporttery/",
                        this.caluteData.JCgoalLine1 && "-" !== this.caluteData.JCgoalLine1 ? e = "让" : this.caluteData.JCgoalLine1 && "-" === this.caluteData.JCgoalLine1 && (e = ""),
                        this.caluteData.JCTouz1) {
                            case "h":
                                e += "胜";
                                break;
                            case "a":
                                e += "负";
                                break;
                            case "d":
                                e += "平";
                                break
                        }
                        switch (this.caluteData.JCgoalLine2 && "-" !== this.caluteData.JCgoalLine2 ? c = "让" : this.caluteData.JCgoalLine2 && "-" === this.caluteData.JCgoalLine2 && (c = ""),
                        this.caluteData.JCTouz2) {
                            case "h":
                                c += "胜";
                                break;
                            case "a":
                                c += "负";
                                break;
                            case "d":
                                c += "平";
                                break
                        }
                        this.seltgame = "".concat(t.matchNumStr).concat(e).concat(this.caluteData.jcOdds1),
                            c && (this.seltgame += "%0A".concat(t.matchNumStr).concat(c).concat(this.caluteData.jcOdds2))
                    }
                    this.jietuVisible = !0
                },
                jietuttg: function (t, a) {
                    this.seltgame = "",
                        this.sportteryUrl = "/sporttery/";
                    var e = t.matchNumStr;
                    -1 == a ? (this.ttgCalData.JCTzAmt0 && 0 != this.ttgCalData.JCTzAmt0 && (e += " 0球" + t.ttg_s0 + " " + Math.floor(this.ttgCalData.JCTzAmt0)),
                        this.ttgCalData.JCTzAmt1 && 0 != this.ttgCalData.JCTzAmt1 && (e += " 1球" + t.ttg_s1 + " " + Math.floor(this.ttgCalData.JCTzAmt1)),
                        this.ttgCalData.JCTzAmt2 && 0 != this.ttgCalData.JCTzAmt2 && (e += " 2球" + t.ttg_s2 + " " + Math.floor(this.ttgCalData.JCTzAmt2)),
                        this.ttgCalData.JCTzAmt3 && 0 != this.ttgCalData.JCTzAmt3 && (e += " 3球" + t.ttg_s3 + " " + Math.floor(this.ttgCalData.JCTzAmt3)),
                        this.ttgCalData.JCTzAmt4 && 0 != this.ttgCalData.JCTzAmt4 && (e += " 4球" + t.ttg_s4 + " " + Math.floor(this.ttgCalData.JCTzAmt4)),
                        this.ttgCalData.JCTzAmt5 && 0 != this.ttgCalData.JCTzAmt5 && (e += " 5球" + t.ttg_s5 + " " + Math.floor(this.ttgCalData.JCTzAmt5)),
                        this.ttgCalData.JCTzAmt6 && 0 != this.ttgCalData.JCTzAmt6 && (e += " 6球" + t.ttg_s6 + " " + Math.floor(this.ttgCalData.JCTzAmt6)),
                        this.ttgCalData.JCTzAmt7 && 0 != this.ttgCalData.JCTzAmt7 && (e += " 7球" + t.ttg_s7 + " " + Math.floor(this.ttgCalData.JCTzAmt7))) : 0 == a && this.ttgCalData.JCTzAmt0 && 0 != this.ttgCalData.JCTzAmt0 ? e += " 0球" + t.ttg_s0 + " " + Math.floor(this.ttgCalData.JCTzAmt0) : 1 == a && this.ttgCalData.JCTzAmt1 && 0 != this.ttgCalData.JCTzAmt1 ? e += " 1球" + t.ttg_s1 + " " + Math.floor(this.ttgCalData.JCTzAmt1) : 2 == a && this.ttgCalData.JCTzAmt2 && 0 != this.ttgCalData.JCTzAmt2 ? e += " 2球" + t.ttg_s2 + " " + Math.floor(this.ttgCalData.JCTzAmt2) : 3 == a && this.ttgCalData.JCTzAmt3 && 0 != this.ttgCalData.JCTzAmt3 ? e += " 3球" + t.ttg_s3 + " " + Math.floor(this.ttgCalData.JCTzAmt3) : 4 == a && this.ttgCalData.JCTzAmt4 && 0 != this.ttgCalData.JCTzAmt4 ? e += " 4球" + t.ttg_s4 + " " + Math.floor(this.ttgCalData.JCTzAmt4) : 5 == a && this.ttgCalData.JCTzAmt5 && 0 != this.ttgCalData.JCTzAmt5 ? e += " 5球" + t.ttg_s5 + " " + Math.floor(this.ttgCalData.JCTzAmt5) : 6 == a && this.ttgCalData.JCTzAmt6 && 0 != this.ttgCalData.JCTzAmt6 ? e += " 6球" + t.ttg_s6 + " " + Math.floor(this.ttgCalData.JCTzAmt6) : 7 == a && this.ttgCalData.JCTzAmt7 && 0 != this.ttgCalData.JCTzAmt7 && (e += " 7球" + t.ttg_s7 + " " + Math.floor(this.ttgCalData.JCTzAmt7)),
                        this.seltgame += "%0A".concat(e),
                        this.jietuVisible = !0
                },
                jietubqc: function (t, a) {
                    console.log(this.hafuCalData),
                        this.seltgame = "",
                        this.sportteryUrl = "/sporttery/";
                    var e = t.matchNumStr;
                    -1 == a ? (this.hafuCalData.jcBet_hh && 0 != this.hafuCalData.jcBet_hh && (e += " 胜胜" + t.hafu_hh + " " + 100 * Math.floor(this.hafuCalData.jcBet_hh / 100)),
                        this.hafuCalData.jcBet_hd && 0 != this.hafuCalData.jcBet_hd && (e += " 胜平" + t.hafu_hd + " " + 100 * Math.floor(this.hafuCalData.jcBet_hd / 100)),
                        this.hafuCalData.jcBet_ha && 0 != this.hafuCalData.jcBet_ha && (e += " 胜负" + t.hafu_ha + " " + 100 * Math.floor(this.hafuCalData.jcBet_ha / 100)),
                        this.hafuCalData.jcBet_dh && 0 != this.hafuCalData.jcBet_dh && (e += " 平胜" + t.hafu_dh + " " + 100 * Math.floor(this.hafuCalData.jcBet_dh / 100)),
                        this.hafuCalData.jcBet_dd && 0 != this.hafuCalData.jcBet_dd && (e += " 平平" + t.hafu_dd + " " + 100 * Math.floor(this.hafuCalData.jcBet_dd / 100)),
                        this.hafuCalData.jcBet_da && 0 != this.hafuCalData.jcBet_da && (e += " 平负" + t.hafu_da + " " + 100 * Math.floor(this.hafuCalData.jcBet_da / 100)),
                        this.hafuCalData.jcBet_ah && 0 != this.hafuCalData.jcBet_ah && (e += " 负胜" + t.hafu_ah + " " + 100 * Math.floor(this.hafuCalData.jcBet_ah / 100)),
                        this.hafuCalData.jcBet_ad && 0 != this.hafuCalData.jcBet_ad && (e += " 负平" + t.hafu_ad + " " + 100 * Math.floor(this.hafuCalData.jcBet_ad / 100)),
                        this.hafuCalData.jcBet_aa && 0 != this.hafuCalData.jcBet_aa && (e += " 负负" + t.hafu_aa + " " + 100 * Math.floor(this.hafuCalData.jcBet_aa / 100))) : "hh" == a && this.hafuCalData.jcBet_hh && 0 != this.hafuCalData.jcBet_hh ? e += " 胜胜" + t.hafu_hh + " " + 100 * Math.floor(this.hafuCalData.jcBet_hh / 100) : "hd" == a && this.hafuCalData.jcBet_hd && 0 != this.hafuCalData.jcBet_hd ? e += " 胜平" + t.hafu_hd + " " + 100 * Math.floor(this.hafuCalData.jcBet_hd / 100) : "ha" == a && this.hafuCalData.jcBet_ha && 0 != this.hafuCalData.jcBet_ha ? e += " 胜负" + t.hafu_ha + " " + 100 * Math.floor(this.hafuCalData.jcBet_ha / 100) : "dh" == a && this.hafuCalData.jcBet_dh && 0 != this.hafuCalData.jcBet_dh ? e += " 平胜" + t.hafu_dh + " " + 100 * Math.floor(this.hafuCalData.jcBet_dh / 100) : "dd" == a && this.hafuCalData.jcBet_dd && 0 != this.hafuCalData.jcBet_dd ? e += " 平平" + t.hafu_dd + " " + 100 * Math.floor(this.hafuCalData.jcBet_dd / 100) : "da" == a && this.hafuCalData.jcBet_da && 0 != this.hafuCalData.jcBet_da ? e += " 平负" + t.hafu_da + " " + 100 * Math.floor(this.hafuCalData.jcBet_da / 100) : "ah" == a && this.hafuCalData.jcBet_ah && 0 != this.hafuCalData.jcBet_ah ? e += " 负胜" + t.hafu_ah + " " + 100 * Math.floor(this.hafuCalData.jcBet_ah / 100) : "ad" == a && this.hafuCalData.jcBet_ad && 0 != this.hafuCalData.jcBet_ad ? e += " 负平" + t.hafu_ad + " " + 100 * Math.floor(this.hafuCalData.jcBet_ad / 100) : "aa" == a && this.hafuCalData.jcBet_aa && 0 != this.hafuCalData.jcBet_aa && (e += " 负负" + t.hafu_aa + " " + 100 * Math.floor(this.hafuCalData.jcBet_aa / 100)),
                        this.seltgame += "%0A".concat(e),
                        this.jietuVisible = !0
                },
                dealPlanName: function (t, a, e, c, i) {
                    var n = "";
                    if ("lqdg" == i) {
                        if (e && "-" !== e)
                            switch (a) {
                                case "h":
                                    n += "让分主胜";
                                    break;
                                case "a":
                                    n += "让分主负";
                                    break;
                                case "d":
                                    n += "大";
                                    break;
                                case "x":
                                    n += "小";
                                    break
                            }
                        else if (e && "-" === e)
                            switch (a) {
                                case "h":
                                    n += "胜";
                                    break;
                                case "a":
                                    n += "负";
                                    break;
                                case "d":
                                    n += "平";
                                    break
                            }
                    } else
                        switch (e && "-" !== e ? n = "让" : e && "-" === e && (n = ""),
                        a) {
                            case "h":
                                n += "胜";
                                break;
                            case "a":
                                n += "负";
                                break;
                            case "d":
                                n += "平";
                                break
                        }
                    return "".concat(t).concat(n).concat(c)
                },
                ttgCopy: function (t, a, e, c) {
                    var i = a.matchNumStr;
                    -1 == c ? 1 == e ? (t.JCTzAmt0 && 0 != t.JCTzAmt0 && (i += " 0球" + a.ttg_s0 + " " + 100 * Math.round(t.JCTzAmt0 / 100)),
                        t.JCTzAmt1 && 0 != t.JCTzAmt1 && (i += " 1球" + a.ttg_s1 + " " + 100 * Math.round(t.JCTzAmt1 / 100)),
                        t.JCTzAmt2 && 0 != t.JCTzAmt2 && (i += " 2球" + a.ttg_s2 + " " + 100 * Math.round(t.JCTzAmt2 / 100)),
                        t.JCTzAmt3 && 0 != t.JCTzAmt3 && (i += " 3球" + a.ttg_s3 + " " + 100 * Math.round(t.JCTzAmt3 / 100)),
                        t.JCTzAmt4 && 0 != t.JCTzAmt4 && (i += " 4球" + a.ttg_s4 + " " + 100 * Math.round(t.JCTzAmt4 / 100)),
                        t.JCTzAmt5 && 0 != t.JCTzAmt5 && (i += " 5球" + a.ttg_s5 + " " + 100 * Math.round(t.JCTzAmt5 / 100)),
                        t.JCTzAmt6 && 0 != t.JCTzAmt6 && (i += " 6球" + a.ttg_s6 + " " + 100 * Math.round(t.JCTzAmt6 / 100)),
                        t.JCTzAmt7 && 0 != t.JCTzAmt7 && (i += " 7+球" + a.ttg_s7 + " " + 100 * Math.round(t.JCTzAmt7 / 100))) : (t.JCTzAmt0 && 0 != t.JCTzAmt0 && (i += " 0球" + a.ttg_s0 + " " + Math.floor(t.JCTzAmt0)),
                            t.JCTzAmt1 && 0 != t.JCTzAmt1 && (i += " 1球" + a.ttg_s1 + " " + Math.floor(t.JCTzAmt1)),
                            t.JCTzAmt2 && 0 != t.JCTzAmt2 && (i += " 2球" + a.ttg_s2 + " " + Math.floor(t.JCTzAmt2)),
                            t.JCTzAmt3 && 0 != t.JCTzAmt3 && (i += " 3球" + a.ttg_s3 + " " + Math.floor(t.JCTzAmt3)),
                            t.JCTzAmt4 && 0 != t.JCTzAmt4 && (i += " 4球" + a.ttg_s4 + " " + Math.floor(t.JCTzAmt4)),
                            t.JCTzAmt5 && 0 != t.JCTzAmt5 && (i += " 5球" + a.ttg_s5 + " " + Math.floor(t.JCTzAmt5)),
                            t.JCTzAmt6 && 0 != t.JCTzAmt6 && (i += " 6球" + a.ttg_s6 + " " + Math.floor(t.JCTzAmt6)),
                            t.JCTzAmt7 && 0 != t.JCTzAmt7 && (i += " 7+球" + a.ttg_s7 + " " + Math.floor(t.JCTzAmt7))) : 1 == e ? 0 == c && t.JCTzAmt0 && 0 != t.JCTzAmt0 ? i += " 0球" + a.ttg_s0 + " " + 100 * Math.round(t.JCTzAmt0 / 100) : 1 == c && t.JCTzAmt1 && 0 != t.JCTzAmt1 ? i += " 1球" + a.ttg_s1 + " " + 100 * Math.round(t.JCTzAmt1 / 100) : 2 == c && t.JCTzAmt2 && 0 != t.JCTzAmt2 ? i += " 2球" + a.ttg_s2 + " " + 100 * Math.round(t.JCTzAmt2 / 100) : 3 == c && t.JCTzAmt3 && 0 != t.JCTzAmt3 ? i += " 3球" + a.ttg_s3 + " " + 100 * Math.round(t.JCTzAmt3 / 100) : 4 == c && t.JCTzAmt4 && 0 != t.JCTzAmt4 ? i += " 4球" + a.ttg_s4 + " " + 100 * Math.round(t.JCTzAmt4 / 100) : 5 == c && t.JCTzAmt5 && 0 != t.JCTzAmt5 ? i += " 5球" + a.ttg_s5 + " " + 100 * Math.round(t.JCTzAmt5 / 100) : 6 == c && t.JCTzAmt6 && 0 != t.JCTzAmt6 ? i += " 6球" + a.ttg_s6 + " " + 100 * Math.round(t.JCTzAmt6 / 100) : 7 == c && t.JCTzAmt7 && 0 != t.JCTzAmt7 && (i += " 7+球" + a.ttg_s7 + " " + 100 * Math.round(t.JCTzAmt7 / 100)) : 0 == c && t.JCTzAmt0 && 0 != t.JCTzAmt0 ? i += " 0球" + a.ttg_s0 + " " + Math.floor(t.JCTzAmt0) : 1 == c && t.JCTzAmt1 && 0 != t.JCTzAmt1 ? i += " 1球" + a.ttg_s1 + " " + Math.floor(t.JCTzAmt1) : 2 == c && t.JCTzAmt2 && 0 != t.JCTzAmt2 ? i += " 2球" + a.ttg_s2 + " " + Math.floor(t.JCTzAmt2) : 3 == c && t.JCTzAmt3 && 0 != t.JCTzAmt3 ? i += " 3球" + a.ttg_s3 + " " + Math.floor(t.JCTzAmt3) : 4 == c && t.JCTzAmt4 && 0 != t.JCTzAmt4 ? i += " 4球" + a.ttg_s4 + " " + Math.floor(t.JCTzAmt4) : 5 == c && t.JCTzAmt5 && 0 != t.JCTzAmt5 ? i += " 5球" + a.ttg_s5 + " " + Math.floor(t.JCTzAmt5) : 6 == c && t.JCTzAmt6 && 0 != t.JCTzAmt6 ? i += " 6球" + a.ttg_s6 + " " + Math.floor(t.JCTzAmt6) : 7 == c && t.JCTzAmt7 && 0 != t.JCTzAmt7 && (i += " 7+球" + a.ttg_s7 + " " + Math.floor(t.JCTzAmt7)),
                        console.log(t, a, e, c);
                    var n = document.createElement("input");
                    n.setAttribute("readonly", "readonly"),
                        n.setAttribute("value", i),
                        document.body.appendChild(n),
                        n.select(),
                        n.setSelectionRange(0, 9999),
                        document.execCommand("Copy"),
                        n.remove(),
                        document.execCommand("Copy") && this.$message("复制成功!")
                },
                bqcCopy: function (t, a, e, c) {
                    console.log(t, a, e, c);
                    var i = a.matchNumStr;
                    1 == e ? -1 == c ? (t.jcBet_hh && 0 != t.jcBet_hh && (i += " 胜胜" + a.hafu_hh + " " + 100 * Math.round(t.jcBet_hh / 100)),
                        t.jcBet_hd && 0 != t.jcBet_hd && (i += " 胜平" + a.hafu_hd + " " + 100 * Math.round(t.jcBet_hd / 100)),
                        t.jcBet_ha && 0 != t.jcBet_ha && (i += " 胜负" + a.hafu_ha + " " + 100 * Math.round(t.jcBet_ha / 100)),
                        t.jcBet_dh && 0 != t.jcBet_dh && (i += " 平胜" + a.hafu_dh + " " + 100 * Math.round(t.jcBet_dh / 100)),
                        t.jcBet_dd && 0 != t.jcBet_dd && (i += " 平平" + a.hafu_dd + " " + 100 * Math.round(t.jcBet_dd / 100)),
                        t.jcBet_da && 0 != t.jcBet_da && (i += " 平负" + a.hafu_da + " " + 100 * Math.round(t.jcBet_da / 100)),
                        t.jcBet_ah && 0 != t.jcBet_ah && (i += " 负胜" + a.hafu_ah + " " + 100 * Math.round(t.jcBet_ah / 100)),
                        t.jcBet_ad && 0 != t.jcBet_ad && (i += " 负平" + a.hafu_ad + " " + 100 * Math.round(t.jcBet_ad / 100)),
                        t.jcBet_aa && 0 != t.jcBet_aa && (i += " 负负" + a.hafu_aa + " " + 100 * Math.round(t.jcBet_aa / 100))) : "hh" == c && t.jcBet_hh && 0 != t.jcBet_hh ? i += " 胜胜" + a.hafu_hh + " " + 100 * Math.round(t.jcBet_hh / 100) : "hd" == c && t.jcBet_hd && 0 != t.jcBet_hd ? i += " 胜平" + a.hafu_hd + " " + 100 * Math.round(t.jcBet_hd / 100) : "ha" == c && t.jcBet_ha && 0 != t.jcBet_ha ? i += " 胜负" + a.hafu_ha + " " + 100 * Math.round(t.jcBet_ha / 100) : "dh" == c && t.jcBet_dh && 0 != t.jcBet_dh ? i += " 平胜" + a.hafu_dh + " " + 100 * Math.round(t.jcBet_dh / 100) : "dd" == c && t.jcBet_dd && 0 != t.jcBet_dd ? i += " 平平" + a.hafu_dd + " " + 100 * Math.round(t.jcBet_dd / 100) : "da" == c && t.jcBet_da && 0 != t.jcBet_da ? i += " 平负" + a.hafu_da + " " + 100 * Math.round(t.jcBet_da / 100) : "ah" == c && t.jcBet_ah && 0 != t.jcBet_ah ? i += " 负胜" + a.hafu_ah + " " + 100 * Math.round(t.jcBet_ah / 100) : "ad" == c && t.jcBet_ad && 0 != t.jcBet_ad ? i += " 负平" + a.hafu_ad + " " + 100 * Math.round(t.jcBet_ad / 100) : "aa" == c && t.jcBet_aa && 0 != t.jcBet_aa && (i += " 负负" + a.hafu_aa + " " + 100 * Math.round(t.jcBet_aa / 100)) : -1 == c ? (t.jcBet_hh && 0 != t.jcBet_hh && (i += " 胜胜" + a.hafu_hh + " " + Math.floor(t.jcBet_hh)),
                            t.jcBet_hd && 0 != t.jcBet_hd && (i += " 胜平" + a.hafu_hd + " " + Math.floor(t.jcBet_hd)),
                            t.jcBet_ha && 0 != t.jcBet_ha && (i += " 胜负" + a.hafu_ha + " " + Math.floor(t.jcBet_ha)),
                            t.jcBet_dh && 0 != t.jcBet_dh && (i += " 平胜" + a.hafu_dh + " " + Math.floor(t.jcBet_dh)),
                            t.jcBet_dd && 0 != t.jcBet_dd && (i += " 平平" + a.hafu_dd + " " + Math.floor(t.jcBet_dd)),
                            t.jcBet_da && 0 != t.jcBet_da && (i += " 平负" + a.hafu_da + " " + Math.floor(t.jcBet_da)),
                            t.jcBet_ah && 0 != t.jcBet_ah && (i += " 负胜" + a.hafu_ah + " " + Math.floor(t.jcBet_ah)),
                            t.jcBet_ad && 0 != t.jcBet_ad && (i += " 负平" + a.hafu_ad + " " + Math.floor(t.jcBet_ad)),
                            t.jcBet_aa && 0 != t.jcBet_aa && (i += " 负负" + a.hafu_aa + " " + Math.floor(t.jcBet_aa))) : "hh" == c && t.jcBet_hh && 0 != t.jcBet_hh ? i += " 胜胜" + a.hafu_hh + " " + Math.floor(t.jcBet_hh) : "hd" == c && t.jcBet_hd && 0 != t.jcBet_hd ? i += " 胜平" + a.hafu_hd + " " + Math.floor(t.jcBet_hd) : "ha" == c && t.jcBet_ha && 0 != t.jcBet_ha ? i += " 胜负" + a.hafu_ha + " " + Math.floor(t.jcBet_ha) : "dh" == c && t.jcBet_dh && 0 != t.jcBet_dh ? i += " 平胜" + a.hafu_dh + " " + Math.floor(t.jcBet_dh) : "dd" == c && t.jcBet_dd && 0 != t.jcBet_dd ? i += " 平平" + a.hafu_dd + " " + Math.floor(t.jcBet_dd) : "da" == c && t.jcBet_da && 0 != t.jcBet_da ? i += " 平负" + a.hafu_da + " " + Math.floor(t.jcBet_da) : "ah" == c && t.jcBet_ah && 0 != t.jcBet_ah ? i += " 负胜" + a.hafu_ah + " " + Math.floor(t.jcBet_ah) : "ad" == c && t.jcBet_ad && 0 != t.jcBet_ad ? i += " 负平" + a.hafu_ad + " " + Math.floor(t.jcBet_ad) : "aa" == c && t.jcBet_aa && 0 != t.jcBet_aa && (i += " 负负" + a.hafu_aa + " " + Math.floor(t.jcBet_aa));
                    var n = document.createElement("input");
                    n.setAttribute("readonly", "readonly"),
                        n.setAttribute("value", i),
                        document.body.appendChild(n),
                        n.select(),
                        n.setSelectionRange(0, 9999),
                        document.execCommand("Copy"),
                        n.remove(),
                        document.execCommand("Copy") && this.$message("复制成功!")
                },
                clearData: function () {
                    this.jcpla = void 0,
                        this.jcplb = void 0,
                        this.hgpla = void 0,
                        this.hgplb = void 0,
                        this.jcxza = void 0,
                        this.jcxzb = void 0,
                        this.hgxza = void 0,
                        this.hgxzb = void 0,
                        this.jctexta = "",
                        this.jctextb = "",
                        this.hgtexta = "",
                        this.hgtextb = "",
                        this.jcfda = "",
                        this.jcfdb = "",
                        this.hgfda = "",
                        this.hgfdb = "",
                        this.jczja = "",
                        this.jczjb = "",
                        this.hgzja = "",
                        this.hgzjb = "",
                        this.jclra = "",
                        this.jclrb = "",
                        this.hglra = "",
                        this.hglrb = "",
                        this.seltztype = void 0,
                        this.matchInfo = {}
                },
                clearCcData: function (t) {
                    1 === t ? (this.cccaluteData.method1 = "",
                        this.cccaluteData.JCgoalLine1 = "",
                        this.cccaluteData.JCTouz1 = "",
                        this.cccaluteData.HGgoalLine1_1 = "",
                        this.cccaluteData.HGgoalLine1_2 = "",
                        this.cccaluteData.HGTouz1_1 = "",
                        this.cccaluteData.HGTouz1_2 = "",
                        this.cccaluteData.HGTzOdd1_1 = "",
                        this.cccaluteData.HGTzOdd1_2 = "",
                        this.cccaluteData.HGTzAmt1_1 = "",
                        this.cccaluteData.HGTzAmt1_2 = "",
                        this.cccaluteData.HgProfit1_1 = "",
                        this.cccaluteData.HgProfit1_2 = "") : (this.cccaluteData.method2 = "",
                            this.cccaluteData.JCgoalLine2 = "",
                            this.cccaluteData.JCTouz2 = "",
                            this.cccaluteData.HGgoalLine2_1 = "",
                            this.cccaluteData.HGgoalLine2_2 = "",
                            this.cccaluteData.HGTouz2_1 = "",
                            this.cccaluteData.HGTouz2_2 = "",
                            this.cccaluteData.HGTzOdd2_1 = "",
                            this.cccaluteData.HGTzOdd2_2 = "",
                            this.cccaluteData.HGTzAmt2_1 = "",
                            this.cccaluteData.HGTzAmt2_2 = "",
                            this.cccaluteData.HgProfit2_1 = "",
                            this.cccaluteData.HgProfit2_2 = ""),
                        this.cccaluteData.JcProfit = "",
                        this.cccaluteData.HgProfit1 = "",
                        this.cccaluteData.HgProfit2 = "",
                        this.cccaluteData.JCAmount = "",
                        this.cccaluteData.HGAmount1_1 = "",
                        this.cccaluteData.HGAmount1_2 = "",
                        this.cccaluteData.HGAmount2_1 = "",
                        this.cccaluteData.HGAmount2_2 = ""
                },
                calculatetmp: function () {
                    this.$route.path.indexOf("ttg") > -1 ? this.ttgCalShow = !0 : this.$route.path.indexOf("allin") > -1 ? (this.matchInfo1 = {},
                        this.matchInfo2 = {},
                        this.qbShowCal = !0) : this.dialogVisible = !0
                },
                dealShowData: function (t, a, e) {
                    this.twoDatas[t - 1] = {
                        jctz: {},
                        hgtz: {}
                    };
                    var c = "zq";
                    "3" === a.matchNumStr.slice(2, 3) && (c = "lq"),
                        this.twoDatas[t - 1].jcMatch = a,
                        this.twoDatas[t - 1].hgMatch = e;
                    var i = this.cccaluteData["JCgoalLine" + t];
                    "-" === i ? this.twoDatas[t - 1].jcodds = [{
                        type: "lq" === c ? "胜负" : "胜平负",
                        h: "lq" === c ? a.mnl_h : a.had_h,
                        d: a.had_d,
                        a: "lq" === c ? a.mnl_a : a.had_a,
                        goalLine: "-"
                    }] : this.twoDatas[t - 1].jcodds = (function(a,c,i){
                        if (i === a.hilo_goalLine) return [{type:"大小> "+a.hilo_goalLine,a:a.hilo_a,h:a.hilo_h,goalLine:a.hilo_goalLine}];
                        if ("lq"===c) for(var _k=1;_k<6;_k++) if(a["hilo_goalLine"+_k]===i) return [{type:"大小> "+i,a:a["hilo_a"+_k],h:a["hilo_h"+_k],goalLine:i}];
                        return [{
                            type: "lq" === c ? "让>" + a.hdc_goalLine : "让>" + a.hhad_goalLine,
                            a: "lq" === c ? a.hdc_a : a.hhad_a,
                            d: a.hhad_d,
                            h: "lq" === c ? a.hdc_h : a.hhad_h,
                            goalLine: "lq" === c ? a.hdc_goalLine : a.hhad_goalLine
                        }];
                    })(a,c,i),
                        this.twoDatas[t - 1].jctz[i] = this.cccaluteData["JCTouz" + t];
                    var n = this.cccaluteData["HGgoalLine" + t + "_1"]
                        , o = this.cccaluteData["HGgoalLine" + t + "_2"];
                    if (this.twoDatas[t - 1].hgodds = [],
                        n && "-" === n)
                        this.twoDatas[t - 1].hgodds.push({
                            type: "独赢",
                            a: "lq" === c ? e.mnl_a : e.had_a,
                            h: "lq" === c ? e.mnl_h : e.had_h,
                            d: e.had_d,
                            goalLine: "-"
                        });
                    else if (n && "J" === n.slice(0, 1)) {
                        var l = n.slice(-1);
                        this.twoDatas[t - 1].hgodds.push({
                            type: "净>" + l + "球",
                            h: e["wm_h" + l],
                            a: e["wm_a" + l],
                            goalLine: "J" + l
                        })
                    } else if (n)
                        if ("lq" === c) {
                            var s;
                            for (s = 1; s < 6; s++)
                                if (e["hilo_goalLine" + s] === n) {
                                    this.twoDatas[t - 1].hgodds.push({
                                        type: "大小>" + e["hilo_goalLine" + s],
                                        h: e["hilo_a" + s],
                                        a: e["hilo_h" + s],
                                        goalLine: e["hilo_goalLine" + s]
                                    });
                                    break
                                }
                            if (6 === s)
                                for (s = 1; s < 7; s++)
                                    if (e["hdc_goalLine" + s] === n) {
                                        this.twoDatas[t - 1].hgodds.push({
                                            type: "让> " + e["hdc_goalLine" + s],
                                            a: e["hdc_a" + s],
                                            h: e["hdc_h" + s],
                                            goalLine: e["hdc_goalLine" + s]
                                        });
                                        break
                                    }
                            7 === s && (this.twoDatas[t - 1].error = "盘口" + n + "不存在")
                        } else {
                            var r;
                            for (r = 1; r < 7; r++)
                                if (n === e["hhad_goalLine" + r]) {
                                    this.twoDatas[t - 1].hgodds.push({
                                        type: "让>" + e["hhad_goalLine" + r],
                                        a: e["hhad_a" + r],
                                        h: e["hhad_h" + r],
                                        goalLine: e["hhad_goalLine" + r]
                                    });
                                    break
                                }
                            7 === r && (this.twoDatas[t - 1].error = "盘口" + n + "不存在")
                        }
                    if (n && (this.twoDatas[t - 1].hgtz[n] = this.cccaluteData["HGTouz".concat(t, "_1")]),
                        o && (this.twoDatas[t - 1].hgtz[o] = this.twoDatas[t - 1].hgtz[o] ? this.twoDatas[t - 1].hgtz[o] + this.cccaluteData["HGTouz".concat(t, "_2")] : this.cccaluteData["HGTouz".concat(t, "_2")]),
                        o && "-" === o && o !== n)
                        this.twoDatas[t - 1].hgodds.push({
                            type: "独赢",
                            a: e.had_a,
                            h: e.had_h,
                            d: e.had_d,
                            goalLine: "-"
                        });
                    else if (o && "J" === o.slice(0, 1) && o !== n) {
                        var u = o.slice(-1);
                        this.twoDatas[t - 1].hgodds.push({
                            type: "净>" + u + "球",
                            h: e["wm_h" + u],
                            a: e["wm_a" + u],
                            goalLine: "J" + u
                        })
                    } else if (o && o !== n) {
                        var h;
                        for (h = 1; h < 7; h++)
                            if (o === e["hhad_goalLine" + h]) {
                                this.twoDatas[t - 1].hgodds.push({
                                    type: "让>" + e["hhad_goalLine" + h],
                                    a: e["hhad_a" + h],
                                    h: e["hhad_h" + h],
                                    goalLine: e["hhad_goalLine" + h]
                                });
                                break
                            }
                        7 === h && (this.twoDatas[t - 1].error = "盘口" + o + "不存在")
                    }
                    this.isKey++
                },
                ccCalcute: function (t) {
                    var a = t.tzInfo
                        , e = t.jcMatch
                        , c = t.hgMatch
                        , i = t.id;
                    this.clearCcData(i),
                        this.gametype = t.gametype,
                        this.cccaluteData.JCPoint || (this.cccaluteData.JCPoint = this.configData.JCPointChuan),
                        this.cccaluteData.HGPoint || (this.cccaluteData.HGPoint = this.configData.HGPoint),
                        1 === i ? (this.currJcMatch1 = e,
                            this.cccaluteData.matchId1 = e.matchId,
                            this.cccaluteData.method1 = a.data.method,
                            this.cccaluteData.jcMatch1 = e,
                            this.cccaluteData.hgMatch1 = c,
                            this.cccaluteData.JCTouz1 = a.data.JCTouz1,
                            this.cccaluteData.JCTzOdd1 = a.data.jcOdds1,
                            this.cccaluteData.JCgoalLine1 = a.data.JCgoalLine1,
                            this.cccaluteData.planName1 = this.dealPlanName(e.matchNumStr, a.data.JCTouz1, a.data.JCgoalLine1, a.data.jcOdds1, this.gametype),
                            this.cccaluteData.HGgoalLine1_1 = a.data.HGgoalLine1,
                            this.cccaluteData.HGgoalLine1_2 = a.data.HGgoalLine2,
                            this.cccaluteData.HGTzOdd1_1 = a.data.hgOdds1,
                            this.cccaluteData.HGTzOdd1_2 = a.data.hgOdds2,
                            this.cccaluteData.HGTouz1_1 = a.data.HGTouz1,
                            this.cccaluteData.HGTouz1_2 = a.data.HGTouz2,
                            this.dealShowData(1, e, c)) : 2 === i && (this.currJcMatch2 = e,
                                this.cccaluteData.matchId2 = e.matchId,
                                this.cccaluteData.method2 = a.data.method,
                                this.cccaluteData.jcMatch2 = e,
                                this.cccaluteData.hgMatch2 = c,
                                this.cccaluteData.JCTouz2 = a.data.JCTouz1,
                                this.cccaluteData.JCTzOdd2 = a.data.jcOdds1,
                                this.cccaluteData.JCgoalLine2 = a.data.JCgoalLine1,
                                this.cccaluteData.planName2 = this.dealPlanName(e.matchNumStr, a.data.JCTouz1, a.data.JCgoalLine1, a.data.jcOdds1, this.gametype),
                                this.cccaluteData.HGgoalLine2_1 = a.data.HGgoalLine1,
                                this.cccaluteData.HGgoalLine2_2 = a.data.HGgoalLine2,
                                this.cccaluteData.HGTzOdd2_1 = a.data.hgOdds1,
                                this.cccaluteData.HGTzOdd2_2 = a.data.hgOdds2,
                                this.cccaluteData.HGTouz2_1 = a.data.HGTouz1,
                                this.cccaluteData.HGTouz2_2 = a.data.HGTouz2,
                                this.dealShowData(2, e, c)),
                        this.cccalshow = !0,
                        this.cccaluteData.planName1 && this.cccaluteData.planName2 && (this.cccaluteData.planId = this.cccaluteData.planName1 + "%0A" + this.cccaluteData.planName2,
                            this.computeDatacc())
                },
                flashccOdds: function () {
                    var t = this;
                    return Object(u["a"])(Object(r["a"])().mark((function a() {
                        var e, c, i, n, o, l;
                        return Object(r["a"])().wrap((function (a) {
                            while (1)
                                switch (a.prev = a.next) {
                                    case 0:
                                        if (!t.currJcMatch1) {
                                            a.next = 7;
                                            break
                                        }
                                        return a.next = 3,
                                            Ot({
                                                matchId: t.currJcMatch1.matchId
                                            });
                                    case 3:
                                        o = a.sent,
                                            o = o.data,
                                            e = o.JCFootBoll,
                                            i = o.HGFootBoll;
                                    case 7:
                                        if (!t.currJcMatch2) {
                                            a.next = 14;
                                            break
                                        }
                                        return a.next = 10,
                                            Ot({
                                                matchId: t.currJcMatch2.matchId
                                            });
                                    case 10:
                                        l = a.sent,
                                            l = l.data,
                                            c = l.JCFootBoll,
                                            n = l.HGFootBoll;
                                    case 14:
                                        t.currJcMatch1 = e,
                                            t.currJcMatch2 = c,
                                            t.dealShowData(1, e, i),
                                            t.dealShowData(2, c, n),
                                            qt["Message"].success("已更新");
                                    case 19:
                                    case "end":
                                        return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                selectccGames: function (t) {
                    var a = this;
                    return Object(u["a"])(Object(r["a"])().mark((function e() {
                        var c, i, n, o, l, s, u;
                        return Object(r["a"])().wrap((function (e) {
                            while (1)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (a.gametype = t.gametype,
                                            a.cccaluteData = t.ccDatas,
                                            c = t.jcMatch1,
                                            i = t.jcMatch2,
                                            n = t.hgMatch1,
                                            o = t.hgMatch2,
                                            l = "zq",
                                            "3" === a.cccaluteData.planId.slice(2, 3) && (l = "lq"),
                                            c && n) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 11,
                                            Ot({
                                                matchId: a.cccaluteData.matchId1,
                                                type: l
                                            });
                                    case 11:
                                        s = e.sent,
                                            s = s.data,
                                            c = s.JCFootBoll,
                                            n = s.HGFootBoll;
                                    case 15:
                                        if (i && o) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.next = 18,
                                            Ot({
                                                matchId: a.cccaluteData.matchId2,
                                                type: l
                                            });
                                    case 18:
                                        u = e.sent,
                                            u = u.data,
                                            i = u.JCFootBoll,
                                            o = u.HGFootBoll;
                                    case 22:
                                        "3" === c.matchNumStr.slice(2, 3) ? a.gametype = "lqdg" : a.gametype = "",
                                            a.currJcMatch1 = c,
                                            a.currJcMatch2 = i,
                                            a.dealShowData(1, c, n),
                                            a.dealShowData(2, i, o),
                                            a.cccaluteData.planName1 = a.dealPlanName(c.matchNumStr, a.cccaluteData.JCTouz1, a.cccaluteData.JCgoalLine1, a.cccaluteData.JCTzOdd1, a.gametype),
                                            a.cccaluteData.planName2 = a.dealPlanName(i.matchNumStr, a.cccaluteData.JCTouz2, a.cccaluteData.JCgoalLine2, a.cccaluteData.JCTzOdd2, a.gametype),
                                            a.cccaluteData.planName1 && a.cccaluteData.planName2 && (a.cccaluteData.planId = a.cccaluteData.planName1 + "%0A" + a.cccaluteData.planName2),
                                            a.ifAverg = a.cccaluteData.ifAverg,
                                            a.yields = a.comAccDiv(a.cccaluteData.HgProfit1, a.cccaluteData.JCTzAmt),
                                            a.firStar = a.cccaluteData.firStar,
                                            a.secStar = a.cccaluteData.secStar,
                                            a.cccalshow = !0;
                                    case 35:
                                    case "end":
                                        return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                hufacomputeData: function (t, a) {
                    var e = this;
                    return Object(u["a"])(Object(r["a"])().mark((function c() {
                        var i, n;
                        return Object(r["a"])().wrap((function (c) {
                            while (1)
                                switch (c.prev = c.next) {
                                    case 0:
                                        return e.hafuCalData.modifyFlag = !1,
                                            "jc" === t ? (e.hafuCalData.JCTzAmt = e.hafuCalData["jcBet_" + a],
                                                e.hafuCalData.consult = "jcBet_" + a) : "hg" === t ? (e.hafuCalData.JCTzAmt = e.hafuCalData[a],
                                                    e.hafuCalData.consult = a) : "yh" !== t && t || (e.hafuCalData.modifyFlag = !0,
                                                        a && a.indexOf("hgBet") > -1 ? (e.hafuCalData.JCTzAmt = e.hafuCalData[a],
                                                            e.hafuCalData.consult = a) : a ? (e.hafuCalData.JCTzAmt = e.hafuCalData["jcBet_" + a],
                                                                e.hafuCalData.consult = "jcBet_" + a) : e.hafuCalData.jcBet_hh && 0 != e.hafuCalData.jcBet_hh ? e.hafuCalData.consult = "jcBet_hh" : e.hafuCalData.jcBet_hd && 0 != e.hafuCalData.jcBet_hd ? e.hafuCalData.consult = "jcBet_hd" : e.hafuCalData.jcBet_ha && 0 != e.hafuCalData.jcBet_ha ? e.hafuCalData.consult = "jcBet_ha" : e.hafuCalData.jcBet_dh && 0 != e.hafuCalData.jcBet_dh ? e.hafuCalData.consult = "jcBet_dh" : e.hafuCalData.jcBet_dd && 0 != e.hafuCalData.jcBet_dd ? e.hafuCalData.consult = "jcBet_dd" : e.hafuCalData.jcBet_da && 0 != e.hafuCalData.jcBet_da ? e.hafuCalData.consult = "jcBet_hd" : e.hafuCalData.jcBet_ah && 0 != e.hafuCalData.jcBet_ah ? e.hafuCalData.consult = "jcBet_ah" : e.hafuCalData.jcBet_ad && 0 != e.hafuCalData.jcBet_ad ? e.hafuCalData.consult = "jcBet_ad" : e.hafuCalData.jcBet_aa && 0 != e.hafuCalData.jcBet_aa && (e.hafuCalData.consult = "jcBet_aa")),
                                            e.hafuCalData.consult || (parseInt(e.hafuCalData.jcBet_hh) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_hh,
                                                e.hafuCalData.consult = "jcBet_hh") : parseInt(e.hafuCalData.jcBet_hd) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_hd,
                                                    e.hafuCalData.consult = "jcBet_hd") : parseInt(e.hafuCalData.jcBet_ha) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_ha,
                                                        e.hafuCalData.consult = "jcBet_ha") : parseInt(e.hafuCalData.jcBet_dh) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_dh,
                                                            e.hafuCalData.consult = "jcBet_dh") : parseInt(e.hafuCalData.jcBet_dd) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_dd,
                                                                e.hafuCalData.consult = "jcBet_dd") : parseInt(e.hafuCalData.jcBet_da) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_da,
                                                                    e.hafuCalData.consult = "jcBet_da") : parseInt(e.hafuCalData.jcBet_ah) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_ah,
                                                                        e.hafuCalData.consult = "jcBet_ah") : parseInt(e.hafuCalData.jcBet_ad) === parseInt(e.configData.JCTzAmt) ? (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_ad,
                                                                            e.hafuCalData.consult = "jcBet_ad") : parseInt(e.hafuCalData.jcBet_aa) === parseInt(e.configData.JCTzAmt) && (e.hafuCalData.JCTzAmt = e.hafuCalData.jcBet_aa,
                                                                                e.hafuCalData.consult = "jcBet_aa")),
                                            c.next = 5,
                                            Bt(e.hafuCalData);
                                    case 5:
                                        i = c.sent,
                                            n = i && i.data,
                                            e.hafuCalData.jcBet_hh = parseFloat(n.jcBet_hh),
                                            e.hafuCalData.jcBet_hd = parseFloat(n.jcBet_hd),
                                            e.hafuCalData.jcBet_ha = parseFloat(n.jcBet_ha),
                                            e.hafuCalData.jcBet_dh = parseFloat(n.jcBet_dh),
                                            e.hafuCalData.jcBet_dd = parseFloat(n.jcBet_dd),
                                            e.hafuCalData.jcBet_da = parseFloat(n.jcBet_da),
                                            e.hafuCalData.jcBet_ah = parseFloat(n.jcBet_ah),
                                            e.hafuCalData.jcBet_ad = parseFloat(n.jcBet_ad),
                                            e.hafuCalData.jcBet_aa = parseFloat(n.jcBet_aa),
                                            e.hafuCalData.hgBet1 = parseFloat(n.hgBet1),
                                            e.hafuCalData.hgBet2 = parseFloat(n.hgBet2),
                                            e.hafuCalData.HGZjAmt_1 = (parseFloat(n.hgBet1) * parseFloat(e.hafuCalData.hgOdds1)).toFixed(0),
                                            e.hafuCalData.hgBet2 && e.hafuCalData.hgOdds2 ? e.hafuCalData.HGZjAmt_2 = (parseFloat(n.hgBet2) * parseFloat(e.hafuCalData.hgOdds2)).toFixed(0) : e.hafuCalData.HGZjAmt_2 = 0,
                                            e.hafuCalData.jcBet_hh && 0 != parseFloat(e.hafuCalData.jcBet_hh) && e.hafuCalData.hafu_hh ? e.hafuCalData.JCZjAmt_hh = (parseFloat(e.hafuCalData.jcBet_hh) * parseFloat(e.hafuCalData.hafu_hh)).toFixed(0) : e.hafuCalData.jcBet_hh = 0,
                                            e.hafuCalData.jcBet_hd && 0 != parseFloat(e.hafuCalData.jcBet_hd) && e.hafuCalData.hafu_hd ? e.hafuCalData.JCZjAmt_hd = (parseFloat(e.hafuCalData.jcBet_hd) * parseFloat(e.hafuCalData.hafu_hd)).toFixed(0) : e.hafuCalData.jcBet_hd = 0,
                                            e.hafuCalData.jcBet_ha && 0 != parseFloat(e.hafuCalData.jcBet_ha) && e.hafuCalData.hafu_ha ? e.hafuCalData.JCZjAmt_ha = (parseFloat(e.hafuCalData.jcBet_ha) * parseFloat(e.hafuCalData.hafu_ha)).toFixed(0) : e.hafuCalData.jcBet_ha = 0,
                                            e.hafuCalData.jcBet_dh && 0 != parseFloat(e.hafuCalData.jcBet_dh) && e.hafuCalData.hafu_dh ? e.hafuCalData.JCZjAmt_dh = (parseFloat(e.hafuCalData.jcBet_dh) * parseFloat(e.hafuCalData.hafu_dh)).toFixed(0) : e.hafuCalData.jcBet_dh = 0,
                                            e.hafuCalData.jcBet_dd && 0 != parseFloat(e.hafuCalData.jcBet_dd) && e.hafuCalData.hafu_dd ? e.hafuCalData.JCZjAmt_dd = (parseFloat(e.hafuCalData.jcBet_dd) * parseFloat(e.hafuCalData.hafu_dd)).toFixed(0) : e.hafuCalData.jcBet_dd = 0,
                                            e.hafuCalData.jcBet_da && 0 != parseFloat(e.hafuCalData.jcBet_da) && e.hafuCalData.hafu_da ? e.hafuCalData.JCZjAmt_da = (parseFloat(e.hafuCalData.jcBet_da) * parseFloat(e.hafuCalData.hafu_da)).toFixed(0) : e.hafuCalData.jcBet_da = 0,
                                            e.hafuCalData.jcBet_ah && 0 != parseFloat(e.hafuCalData.jcBet_ah) && e.hafuCalData.hafu_ah ? e.hafuCalData.JCZjAmt_ah = (parseFloat(e.hafuCalData.jcBet_ah) * parseFloat(e.hafuCalData.hafu_ah)).toFixed(0) : e.hafuCalData.jcBet_ah = 0,
                                            e.hafuCalData.jcBet_ad && 0 != parseFloat(e.hafuCalData.jcBet_ad) && e.hafuCalData.hafu_ad ? e.hafuCalData.JCZjAmt_ad = (parseFloat(e.hafuCalData.jcBet_ad) * parseFloat(e.hafuCalData.hafu_ad)).toFixed(0) : e.hafuCalData.jcBet_ad = 0,
                                            e.hafuCalData.jcBet_aa && 0 != parseFloat(e.hafuCalData.jcBet_aa) && e.hafuCalData.hafu_aa ? e.hafuCalData.JCZjAmt_aa = (parseFloat(e.hafuCalData.jcBet_aa) * parseFloat(e.hafuCalData.hafu_aa)).toFixed(0) : e.hafuCalData.jcBet_aa = 0,
                                            e.hafuCalData.jcBet_hh = parseFloat(n.jcBet_hh).toFixed(0),
                                            e.hafuCalData.jcBet_hd = parseFloat(n.jcBet_hd).toFixed(0),
                                            e.hafuCalData.jcBet_ha = parseFloat(n.jcBet_ha).toFixed(0),
                                            e.hafuCalData.jcBet_dh = parseFloat(n.jcBet_dh).toFixed(0),
                                            e.hafuCalData.jcBet_dd = parseFloat(n.jcBet_dd).toFixed(0),
                                            e.hafuCalData.jcBet_da = parseFloat(n.jcBet_da).toFixed(0),
                                            e.hafuCalData.jcBet_ah = parseFloat(n.jcBet_ah).toFixed(0),
                                            e.hafuCalData.jcBet_ad = parseFloat(n.jcBet_ad).toFixed(0),
                                            e.hafuCalData.jcBet_aa = parseFloat(n.jcBet_aa).toFixed(0),
                                            e.hafuCalData.hgBet1 = parseFloat(n.hgBet1).toFixed(0),
                                            e.hafuCalData.hgBet2 = parseFloat(n.hgBet2).toFixed(0),
                                            e.hafuCalData.profit = parseFloat(n.profit).toFixed(0),
                                            e.hafuCalData.bqcTzAmt = parseFloat(n.bqcTzAmt).toFixed(0),
                                            e.$forceUpdate();
                                    case 43:
                                    case "end":
                                        return c.stop()
                                }
                        }
                        ), c)
                    }
                    )))()
                },
                ttgcomputeData: function (t, a) {
                    var e = this;
                    return Object(u["a"])(Object(r["a"])().mark((function c() {
                        var i, n;
                        return Object(r["a"])().wrap((function (c) {
                            while (1)
                                switch (c.prev = c.next) {
                                    case 0:
                                        return "yh" !== t && t ? e.ttgCalData.modifyFlag = !1 : (a ? (e.ttgCalData.TzAmt = e.ttgCalData["JCTzAmt" + a],
                                            e.ttgCalData.consult = "JC" + a) : (e.ttgCalData.TzAmt = e.ttgCalData.HGTzAmt1,
                                                e.ttgCalData.consult = "HG"),
                                            e.ttgCalData.modifyFlag = !0,
                                            e.ttgCalData.ttgTzAmt = e.ttgCalData.ttgTzAmt),
                                            "jc" === t ? (e.ttgCalData.TzAmt = e.ttgCalData["JCTzAmt" + a],
                                                e.ttgCalData.consult = "JC" + a) : "hg" === t ? (e.ttgCalData.TzAmt = e.ttgCalData.HGTzAmt1,
                                                    e.ttgCalData.consult = "HG") : "hg2" === t && (e.ttgCalData.TzAmt = e.ttgCalData.HGTzAmt2,
                                                        e.ttgCalData.consult = "HG2"),
                                            c.next = 4,
                                            wt(e.ttgCalData);
                                    case 4:
                                        i = c.sent,
                                            n = i && i.data,
                                            e.ttgCalData.HGZjAmt1 = (parseFloat(n.HGTzAmt1) * parseFloat(n.HGTzOdds1)).toFixed(0),
                                            e.ttgCalData.HGZjAmt2 = (parseFloat(n.HGTzAmt2) * parseFloat(n.HGTzOdds2)).toFixed(0),
                                            e.ttgCalData.HGTzAmt1 = parseFloat(n.HGTzAmt1).toFixed(0),
                                            e.ttgCalData.HGTzAmt2 = parseFloat(n.HGTzAmt2).toFixed(0),
                                            "-" == n.HGTzOdds1 && (e.ttgCalData.HGZjAmt1 = 0),
                                            "-" == n.HGTzOdds2 && (e.ttgCalData.HGZjAmt2 = 0),
                                            n.JCTzAmt0 && n.JCTzOdds0 && "-" != n.JCTzOdds0 && (e.ttgCalData.JCZjAmt0 = (parseFloat(n.JCTzAmt0) * parseFloat(n.JCTzOdds0)).toFixed(0)),
                                            n.JCTzAmt1 && n.JCTzOdds1 && "-" != n.JCTzOdds1 && (e.ttgCalData.JCZjAmt1 = (parseFloat(n.JCTzAmt1) * parseFloat(n.JCTzOdds1)).toFixed(0)),
                                            n.JCTzAmt2 && n.JCTzOdds2 && "-" != n.JCTzOdds2 && (e.ttgCalData.JCZjAmt2 = (parseFloat(n.JCTzAmt2) * parseFloat(n.JCTzOdds2)).toFixed(0)),
                                            n.JCTzAmt3 && n.JCTzOdds3 && "-" != n.JCTzOdds3 && (e.ttgCalData.JCZjAmt3 = (parseFloat(n.JCTzAmt3) * parseFloat(n.JCTzOdds3)).toFixed(0)),
                                            n.JCTzAmt4 && n.JCTzOdds4 && "-" != n.JCTzOdds4 && (e.ttgCalData.JCZjAmt4 = (parseFloat(n.JCTzAmt4) * parseFloat(n.JCTzOdds4)).toFixed(0)),
                                            n.JCTzAmt5 && n.JCTzOdds5 && "-" != n.JCTzOdds5 && (e.ttgCalData.JCZjAmt5 = (parseFloat(n.JCTzAmt5) * parseFloat(n.JCTzOdds5)).toFixed(0)),
                                            n.JCTzAmt6 && n.JCTzOdds6 && "-" != n.JCTzOdds6 && (e.ttgCalData.JCZjAmt6 = (parseFloat(n.JCTzAmt6) * parseFloat(n.JCTzOdds6)).toFixed(0)),
                                            n.JCTzAmt7 && n.JCTzOdds7 && "-" != n.JCTzOdds7 && (e.ttgCalData.JCZjAmt7 = (parseFloat(n.JCTzAmt7) * parseFloat(n.JCTzOdds7)).toFixed(0)),
                                            e.ttgCalData.JCTzAmt0 = parseFloat(n.JCTzAmt0).toFixed(0),
                                            e.ttgCalData.JCTzAmt1 = parseFloat(n.JCTzAmt1).toFixed(0),
                                            e.ttgCalData.JCTzAmt2 = parseFloat(n.JCTzAmt2).toFixed(0),
                                            e.ttgCalData.JCTzAmt3 = parseFloat(n.JCTzAmt3).toFixed(0),
                                            e.ttgCalData.JCTzAmt4 = parseFloat(n.JCTzAmt4).toFixed(0),
                                            e.ttgCalData.JCTzAmt5 = parseFloat(n.JCTzAmt5).toFixed(0),
                                            e.ttgCalData.JCTzAmt6 = parseFloat(n.JCTzAmt6).toFixed(0),
                                            e.ttgCalData.JCTzAmt7 = parseFloat(n.JCTzAmt7).toFixed(0),
                                            e.ttgCalData.profit = parseFloat(n.profit).toFixed(0),
                                            e.ttgCalData.ttgTzAmt = parseFloat(n.ttgTzAmt).toFixed(0),
                                            e.$forceUpdate();
                                    case 31:
                                    case "end":
                                        return c.stop()
                                }
                        }
                        ), c)
                    }
                    )))()
                },
                qbcomputeData: function () {
                    var t = this;
                    return Object(u["a"])(Object(r["a"])().mark((function a() {
                        var e, c, i;
                        return Object(r["a"])().wrap((function (a) {
                            while (1)
                                switch (a.prev = a.next) {
                                    case 0:
                                        return e = {},
                                            e.jcOdds1 = parseFloat(t.qbcaluteData.JCTzOdd1_1) * parseFloat(t.qbcaluteData.JCTzOdd1_2),
                                            e.secJcOdds = parseFloat(t.qbcaluteData.JCTzOdd2_1) * parseFloat(t.qbcaluteData.JCTzOdd2_2),
                                            e.JCTzOdd1_1 = t.qbcaluteData.JCTzOdd1_1,
                                            e.JCTzOdd1_2 = t.qbcaluteData.JCTzOdd1_2,
                                            e.JCTzOdd2_1 = t.qbcaluteData.JCTzOdd2_1,
                                            e.JCTzOdd2_2 = t.qbcaluteData.JCTzOdd2_2,
                                            e.JCgoalLine1_1 = t.qbcaluteData.JCgoalLine1_1,
                                            e.JCgoalLine1_2 = t.qbcaluteData.JCgoalLine1_2,
                                            e.JCgoalLine2_1 = t.qbcaluteData.JCgoalLine2_1,
                                            e.JCgoalLine2_2 = t.qbcaluteData.JCgoalLine2_2,
                                            e.JCTouz1_1 = t.qbcaluteData.JCTouz1_1,
                                            e.JCTouz1_2 = t.qbcaluteData.JCTouz1_2,
                                            e.JCTouz2_1 = t.qbcaluteData.JCTouz2_1,
                                            e.JCTouz2_2 = t.qbcaluteData.JCTouz2_2,
                                            e.hgOdds1 = t.qbcaluteData.HGTzOdd1_1,
                                            e.hgOdds2 = t.qbcaluteData.HGTzOdd1_2,
                                            e.HGTzOdd1_1 = t.qbcaluteData.HGTzOdd1_1,
                                            e.HGTzOdd1_2 = t.qbcaluteData.HGTzOdd1_2,
                                            e.HGTzOdd2_1 = t.qbcaluteData.HGTzOdd2_1,
                                            e.HGTzOdd2_2 = t.qbcaluteData.HGTzOdd2_2,
                                            e.HGgoalLine1_1 = t.qbcaluteData.HGgoalLine1_1,
                                            e.HGgoalLine1_2 = t.qbcaluteData.HGgoalLine1_2,
                                            e.HGgoalLine2_1 = t.qbcaluteData.HGgoalLine2_1,
                                            e.HGgoalLine2_2 = t.qbcaluteData.HGgoalLine2_2,
                                            e.HGTouz1_1 = t.qbcaluteData.HGTouz1_1,
                                            e.HGTouz1_2 = t.qbcaluteData.HGTouz1_2,
                                            e.HGTouz2_1 = t.qbcaluteData.HGTouz2_1,
                                            e.HGTouz2_2 = t.qbcaluteData.HGTouz2_2,
                                            e.method = t.qbcaluteData.method,
                                            e.JCPoint = t.qbcaluteData.JCPoint,
                                            e.JCPoint2 = t.qbcaluteData.JCPoint2,
                                            e.HGPoint = t.qbcaluteData.HGPoint,
                                            e.JCTzAmt = t.qbcaluteData.JCTzAmt1,
                                            e.JCgoalLine1 = t.qbcaluteData.JCgoalLine2_1,
                                            e.JCgoalLine2 = t.qbcaluteData.JCgoalLine2_1,
                                            e.HGgoalLine1 = t.qbcaluteData.HGgoalLine1_1,
                                            e.HGgoalLine2 = t.qbcaluteData.HGgoalLine1_2,
                                            e.uuid = t.qbcaluteData.uuid,
                                            e.matchId1 = t.qbcaluteData.matchId1,
                                            e.matchId2 = t.qbcaluteData.matchId2,
                                            e.bunchType = t.qbcaluteData.bunchType,
                                            a.next = 16,
                                            xt(e);
                                    case 16:
                                        c = a.sent,
                                            i = c && c.data,
                                            t.qbcaluteData.JCTzAmt2 = parseFloat(i.JCTzAmt2).toFixed(0),
                                            t.qbcaluteData.HGTzAmt1 = parseFloat(i.HGTzAmt1).toFixed(0),
                                            t.qbcaluteData.HGTzAmt2 = parseFloat(i.HGTzAmt2).toFixed(0),
                                            t.qbcaluteData.JCAmount1 = parseFloat(i.JCAmount1).toFixed(0),
                                            t.qbcaluteData.JCAmount2 = parseFloat(i.JCAmount2).toFixed(0),
                                            t.qbcaluteData.HGAmount1 = parseFloat(i.HGAmount1).toFixed(0),
                                            t.qbcaluteData.HGAmount2 = parseFloat(i.HGAmount2).toFixed(0),
                                            t.qbcaluteData.profit = parseFloat(i.profit).toFixed(0);
                                    case 26:
                                    case "end":
                                        return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                computeData: function () {
                    var t = this;
                    return Object(u["a"])(Object(r["a"])().mark((function a() {
                        var e, c;
                        return Object(r["a"])().wrap((function (a) {
                            while (1)
                                switch (a.prev = a.next) {
                                    case 0:
                                        if (t.caluteData.method) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return t.caluteData.JCTzAmt = t.caluteData.jcBet1,
                                            a.next = 5,
                                            Jt(t.caluteData);
                                    case 5:
                                        e = a.sent,
                                            c = e && e.data,
                                            t.caluteData.jcBet1 = c.jcBet1,
                                            t.caluteData.jcBet2 = c.jcBet2,
                                            t.caluteData.hgBet1 = c.hgBet1,
                                            t.caluteData.hgBet2 = c.hgBet2,
                                            t.caluteData.JCPoint1 = c.JCPoint1,
                                            t.caluteData.JCPoint2 = c.JCPoint2,
                                            t.caluteData.HGPoint1 = c.HGPoint1,
                                            t.caluteData.HGPoint2 = c.HGPoint2,
                                            t.caluteData.jcAmount1 = c.jcAmount1,
                                            t.caluteData.jcAmount2 = c.jcAmount2,
                                            t.caluteData.hgAmount1 = c.hgAmount1,
                                            t.caluteData.hgAmount2 = c.hgAmount2,
                                            t.caluteData.profit = c.profit,
                                            t.$forceUpdate();
                                    case 21:
                                    case "end":
                                        return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                computeDatacc: function () {
                    var t = this;
                    return Object(u["a"])(Object(r["a"])().mark((function a() {
                        var e, c;
                        return Object(r["a"])().wrap((function (a) {
                            while (1)
                                switch (a.prev = a.next) {
                                    case 0:
                                        if (t.cccaluteData.method1 && t.cccaluteData.method2) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return t.ifAverg ? t.cccaluteData.yield = "Sin" : t.cccaluteData.yield = t.yields,
                                            a.next = 5,
                                            At(t.cccaluteData);
                                    case 5:
                                        e = a.sent,
                                            c = e && e.data,
                                            t.cccaluteData.JCAmount = c.JCAmount,
                                            t.cccaluteData.HGAmount1_1 = c.HGAmount1_1,
                                            t.cccaluteData.HGAmount1_2 = c.HGAmount1_2,
                                            t.cccaluteData.HGAmount2_1 = c.HGAmount2_1,
                                            t.cccaluteData.HGAmount2_2 = c.HGAmount2_2,
                                            t.cccaluteData.JCTzAmt = c.JCTzAmt,
                                            t.cccaluteData.HGTzAmt1_1 = c.HGTzAmt1_1,
                                            t.cccaluteData.HGTzAmt1_2 = c.HGTzAmt1_2,
                                            t.cccaluteData.HGTzAmt2_1 = c.HGTzAmt2_1,
                                            t.cccaluteData.HGTzAmt2_2 = c.HGTzAmt2_2,
                                            t.cccaluteData.JcProfit = c.JcProfit,
                                            t.cccaluteData.HgProfit1 = c.HgProfit1,
                                            t.cccaluteData.HgProfit2 = c.HgProfit2,
                                            t.ifAverg && (t.yields = t.comAccDiv(t.cccaluteData.HgProfit1, t.cccaluteData.JCTzAmt)),
                                            t.$forceUpdate();
                                    case 22:
                                    case "end":
                                        return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                calculate: function (t) {
                    this.gametype = t.gametype,
                        this.caluteData = Object.assign({
                            uuid: t.matchInfo.uuid,
                            matchId: t.matchInfo.matchId
                        }, t.matchInfo.data);
                    var a = t.JCInfos;
                    this.matchInfo = a[t.matchInfo.matchId],
                        this.dialogVisible = !0
                },
                qbcalculate: function (t) {
                    this.qbcaluteData = t.matchInfo,
                        this.qbcaluteData.JCTzAmt1 = parseFloat(t.matchInfo.JCTzAmt1).toFixed(0),
                        this.qbcaluteData.JCTzAmt2 = parseFloat(t.matchInfo.JCTzAmt2).toFixed(0),
                        this.qbcaluteData.HGTzAmt1 = parseFloat(t.matchInfo.HGTzAmt1).toFixed(0),
                        this.qbcaluteData.HGTzAmt2 = parseFloat(t.matchInfo.HGTzAmt2).toFixed(0),
                        this.qbcaluteData.JCAmount1 = parseFloat(t.matchInfo.JCAmount1).toFixed(0),
                        this.qbcaluteData.JCAmount2 = parseFloat(t.matchInfo.JCAmount2).toFixed(0),
                        this.qbcaluteData.HGAmount1 = parseFloat(t.matchInfo.HGAmount1).toFixed(0),
                        this.qbcaluteData.HGAmount2 = parseFloat(t.matchInfo.HGAmount2).toFixed(0),
                        this.qbcaluteData.profit = parseFloat(t.matchInfo.profit).toFixed(0);
                    var a = t.JCInfos;
                    this.matchInfo1 = a[t.matchInfo.matchId1],
                        this.matchInfo2 = a[t.matchInfo.matchId2],
                        this.qbShowCal = !0
                },
                ttgcalculate: function (t) {
                    this.ttgCalData = Object.assign({
                        uuid: t.matchInfo.uuid,
                        matchId: t.matchInfo.matchId
                    }, t.matchInfo.data);
                    var a = t.JCInfos;
                    this.matchInfo = a[t.matchInfo.matchId],
                        this.ttgCalData.HGZjAmt1 = (parseFloat(this.ttgCalData.HGTzAmt1) * parseFloat(this.ttgCalData.HGTzOdds1)).toFixed(0),
                        this.ttgCalData.HGZjAmt2 = (parseFloat(this.ttgCalData.HGTzAmt2) * parseFloat(this.ttgCalData.HGTzOdds2)).toFixed(0),
                        "-" == this.ttgCalData.HGTzOdds1 && (this.ttgCalData.HGZjAmt1 = 0),
                        "-" == this.ttgCalData.HGTzOdds2 && (this.ttgCalData.HGZjAmt2 = 0),
                        this.ttgCalData.JCTzAmt0 && this.ttgCalData.JCTzOdds0 && "-" != this.ttgCalData.JCTzOdds0 ? this.ttgCalData.JCZjAmt0 = (parseFloat(this.ttgCalData.JCTzAmt0) * parseFloat(this.ttgCalData.JCTzOdds0)).toFixed(0) : this.ttgCalData.JCZjAmt0 = 0,
                        this.ttgCalData.JCTzAmt1 && this.ttgCalData.JCTzOdds1 && "-" != this.ttgCalData.JCTzOdds1 ? this.ttgCalData.JCZjAmt1 = (parseFloat(this.ttgCalData.JCTzAmt1) * parseFloat(this.ttgCalData.JCTzOdds1)).toFixed(0) : this.ttgCalData.JCZjAmt1 = 0,
                        this.ttgCalData.JCTzAmt2 && this.ttgCalData.JCTzOdds2 && "-" != this.ttgCalData.JCTzOdds2 ? this.ttgCalData.JCZjAmt2 = (parseFloat(this.ttgCalData.JCTzAmt2) * parseFloat(this.ttgCalData.JCTzOdds2)).toFixed(0) : this.ttgCalData.JCZjAmt2 = 0,
                        this.ttgCalData.JCTzAmt3 && this.ttgCalData.JCTzOdds3 && "-" != this.ttgCalData.JCTzOdds3 ? this.ttgCalData.JCZjAmt3 = (parseFloat(this.ttgCalData.JCTzAmt3) * parseFloat(this.ttgCalData.JCTzOdds3)).toFixed(0) : this.ttgCalData.JCZjAmt3 = 0,
                        this.ttgCalData.JCTzAmt4 && this.ttgCalData.JCTzOdds4 && "-" != this.ttgCalData.JCTzOdds4 ? this.ttgCalData.JCZjAmt4 = (parseFloat(this.ttgCalData.JCTzAmt4) * parseFloat(this.ttgCalData.JCTzOdds4)).toFixed(0) : this.ttgCalData.JCZjAmt4 = 0,
                        this.ttgCalData.JCTzAmt5 && this.ttgCalData.JCTzOdds5 && "-" != this.ttgCalData.JCTzOdds5 ? this.ttgCalData.JCZjAmt5 = (parseFloat(this.ttgCalData.JCTzAmt5) * parseFloat(this.ttgCalData.JCTzOdds5)).toFixed(0) : this.ttgCalData.JCZjAmt5 = 0,
                        this.ttgCalData.JCTzAmt6 && this.ttgCalData.JCTzOdds6 && "-" != this.ttgCalData.JCTzOdds6 ? this.ttgCalData.JCZjAmt6 = (parseFloat(this.ttgCalData.JCTzAmt6) * parseFloat(this.ttgCalData.JCTzOdds6)).toFixed(0) : this.ttgCalData.JCZjAmt6 = 0,
                        this.ttgCalData.JCTzAmt7 && this.ttgCalData.JCTzOdds7 && "-" != this.ttgCalData.JCTzOdds7 ? this.ttgCalData.JCZjAmt7 = (parseFloat(this.ttgCalData.JCTzAmt7) * parseFloat(this.ttgCalData.JCTzOdds7)).toFixed(0) : this.ttgCalData.JCZjAmt7 = 0,
                        this.ttgCalData.JCTzAmt0 = parseFloat(this.ttgCalData.JCTzAmt0).toFixed(0),
                        this.ttgCalData.JCTzAmt1 = parseFloat(this.ttgCalData.JCTzAmt1).toFixed(0),
                        this.ttgCalData.JCTzAmt2 = parseFloat(this.ttgCalData.JCTzAmt2).toFixed(0),
                        this.ttgCalData.JCTzAmt3 = parseFloat(this.ttgCalData.JCTzAmt3).toFixed(0),
                        this.ttgCalData.JCTzAmt4 = parseFloat(this.ttgCalData.JCTzAmt4).toFixed(0),
                        this.ttgCalData.JCTzAmt5 = parseFloat(this.ttgCalData.JCTzAmt5).toFixed(0),
                        this.ttgCalData.JCTzAmt6 = parseFloat(this.ttgCalData.JCTzAmt6).toFixed(0),
                        this.ttgCalData.JCTzAmt7 = parseFloat(this.ttgCalData.JCTzAmt7).toFixed(0),
                        this.ttgCalData.HGTzAmt1 = parseFloat(this.ttgCalData.HGTzAmt1).toFixed(0),
                        this.ttgCalData.HGTzAmt2 = parseFloat(this.ttgCalData.HGTzAmt2).toFixed(0),
                        this.ttgCalData.profit = parseFloat(this.ttgCalData.profit).toFixed(0),
                        this.ttgCalShow = !0
                },
                hafucalculate: function (t) {
                    this.hafuCalData = t.matchInfo;
                    var a = t.JCInfos;
                    this.matchInfo = a[t.matchInfo.matchId],
                        this.hafuCalData.HGZjAmt_1 = (parseFloat(this.hafuCalData.hgBet1) * parseFloat(this.hafuCalData.hgOdds1)).toFixed(0),
                        this.hafuCalData.hgBet2 && this.hafuCalData.hgOdds2 ? this.hafuCalData.HGZjAmt_2 = (parseFloat(this.hafuCalData.hgBet2) * parseFloat(this.hafuCalData.hgOdds2)).toFixed(0) : this.hafuCalData.hgBet2 = 0,
                        this.hafuCalData.jcBet_hh && this.hafuCalData.hafu_hh ? this.hafuCalData.JCZjAmt_hh = (parseFloat(this.hafuCalData.jcBet_hh) * parseFloat(this.hafuCalData.hafu_hh)).toFixed(0) : this.hafuCalData.jcBet_hh = 0,
                        this.hafuCalData.jcBet_hd && this.hafuCalData.hafu_hd ? this.hafuCalData.JCZjAmt_hd = (parseFloat(this.hafuCalData.jcBet_hd) * parseFloat(this.hafuCalData.hafu_hd)).toFixed(0) : this.hafuCalData.jcBet_hd = 0,
                        this.hafuCalData.jcBet_ha && this.hafuCalData.hafu_ha ? this.hafuCalData.JCZjAmt_ha = (parseFloat(this.hafuCalData.jcBet_ha) * parseFloat(this.hafuCalData.hafu_ha)).toFixed(0) : this.hafuCalData.jcBet_ha = 0,
                        this.hafuCalData.jcBet_dh && this.hafuCalData.hafu_dh ? this.hafuCalData.JCZjAmt_dh = (parseFloat(this.hafuCalData.jcBet_dh) * parseFloat(this.hafuCalData.hafu_dh)).toFixed(0) : this.hafuCalData.jcBet_dh = 0,
                        this.hafuCalData.jcBet_dd && this.hafuCalData.hafu_dd ? this.hafuCalData.JCZjAmt_dd = (parseFloat(this.hafuCalData.jcBet_dd) * parseFloat(this.hafuCalData.hafu_dd)).toFixed(0) : this.hafuCalData.jcBet_dd = 0,
                        this.hafuCalData.jcBet_da && this.hafuCalData.hafu_da ? this.hafuCalData.JCZjAmt_da = (parseFloat(this.hafuCalData.jcBet_da) * parseFloat(this.hafuCalData.hafu_da)).toFixed(0) : this.hafuCalData.jcBet_da = 0,
                        this.hafuCalData.jcBet_ah && this.hafuCalData.hafu_ah ? this.hafuCalData.JCZjAmt_ah = (parseFloat(this.hafuCalData.jcBet_ah) * parseFloat(this.hafuCalData.hafu_ah)).toFixed(0) : this.hafuCalData.jcBet_ah = 0,
                        this.hafuCalData.jcBet_ad && this.hafuCalData.hafu_ad ? this.hafuCalData.JCZjAmt_ad = (parseFloat(this.hafuCalData.jcBet_ad) * parseFloat(this.hafuCalData.hafu_ad)).toFixed(0) : this.hafuCalData.jcBet_ad = 0,
                        this.hafuCalData.jcBet_aa && this.hafuCalData.hafu_aa ? this.hafuCalData.JCZjAmt_aa = (parseFloat(this.hafuCalData.jcBet_aa) * parseFloat(this.hafuCalData.hafu_aa)).toFixed(0) : this.hafuCalData.jcBet_aa = 0,
                        this.hafuCalData.jcBet_hh = parseFloat(this.hafuCalData.jcBet_hh).toFixed(0),
                        this.hafuCalData.jcBet_hd = parseFloat(this.hafuCalData.jcBet_hd).toFixed(0),
                        this.hafuCalData.jcBet_ha = parseFloat(this.hafuCalData.jcBet_ha).toFixed(0),
                        this.hafuCalData.jcBet_dh = parseFloat(this.hafuCalData.jcBet_dh).toFixed(0),
                        this.hafuCalData.jcBet_dd = parseFloat(this.hafuCalData.jcBet_dd).toFixed(0),
                        this.hafuCalData.jcBet_da = parseFloat(this.hafuCalData.jcBet_da).toFixed(0),
                        this.hafuCalData.jcBet_ah = parseFloat(this.hafuCalData.jcBet_ah).toFixed(0),
                        this.hafuCalData.jcBet_ad = parseFloat(this.hafuCalData.jcBet_ad).toFixed(0),
                        this.hafuCalData.jcBet_aa = parseFloat(this.hafuCalData.jcBet_aa).toFixed(0),
                        this.hafuCalData.hgBet1 = parseFloat(this.hafuCalData.hgBet1).toFixed(0),
                        this.hafuCalData.hgBet2 = parseFloat(this.hafuCalData.hgBet2).toFixed(0),
                        this.hafuCalData.profit = parseFloat(this.hafuCalData.profit).toFixed(0),
                        this.hafuCalData.bqcTzAmt = parseFloat(this.hafuCalData.bqcTzAmt).toFixed(0),
                        this.hufaCalShow = !0
                },
                getText: function (t, a) {
                    if ("" === t)
                        return "";
                    if ("X" === t && "-" === a)
                        return "";
                    var e = "";
                    if ("-" === a)
                        e += "独赢";
                    else if ("J" === a.slice(0, 1))
                        e += "净胜" + a.slice(1, 2) + "球";
                    else {
                        if (!isNaN(a) && (parseFloat(a) > 80 || "D" === t || "X" === t)) {
                            switch (e += a,
                            t) {
                                case "d":
                                case "D":
                                    e += ">大";
                                    break;
                                case "x":
                                case "X":
                                    e += ">小";
                                    break
                            }
                            return e
                        }
                        e += "让" + a
                    }
                    switch (t) {
                        case "h":
                        case "hj":
                            e += ">主";
                            break;
                        case "a":
                        case "aj":
                            e += ">客";
                            break;
                        case "d":
                            e += ">平";
                            break
                    }
                    return e
                },
                getTextJC: function (t, a) {
                    if ("" === t)
                        return "";
                    var e = "";
                    if ("-" === a)
                        switch (e += "胜平负",
                        t) {
                            case "h":
                                e += ">胜";
                                break;
                            case "a":
                                e += ">负";
                                break;
                            case "d":
                                e += ">平";
                                break
                        }
                    else {
                        if (!isNaN(a) && parseFloat(a) > 80) {
                            switch (e += a,
                            t) {
                                case "d":
                                    e += ">大";
                                    break;
                                case "x":
                                    e += ">小";
                                    break
                            }
                            return e
                        }
                        switch (e += "让" + a,
                        t) {
                            case "h":
                                e += ">让胜";
                                break;
                            case "a":
                                e += ">让负";
                                break;
                            case "d":
                                e += ">让平";
                                break
                        }
                    }
                    return e
                },
                getOdds: function (t, a) {
                    var e = a.jcodds
                        , c = {};
                    for (var i in t)
                        for (var n = 0; n < e.length; n++)
                            if (i === e[n].goalLine)
                                if (!isNaN(i) && parseFloat(i) > 80)
                                    "d" === t[i] ? (c.oddx = e[n]["h"],
                                        c.goalLinex = i,
                                        c.Touzx = t[i],
                                        c.textx = this.getTextJC("d", e[n].goalLine)) : "x" === t[i] && (c.oddx = e[n]["a"],
                                            c.goalLinex = i,
                                            c.Touzx = t[i],
                                            c.textx = this.getTextJC("x", e[n].goalLine));
                                else if ("hj" === t[i] || "aj" === t[i])
                                    c.oddy = e[n][t[i].slice(0, 1)],
                                        c.goalLiney = i,
                                        c.Touzy = t[i],
                                        c.texty = this.getTextJC(t[i], e[n].goalLine);
                                else
                                    for (var o = t[i].split(""), l = 0; l < o.length; l++)
                                        "d" === o[l] ? (c.oddy = e[n][o[l]],
                                            c.goalLiney = i,
                                            c.Touzy = t[i],
                                            c.texty = this.getTextJC(o[l], e[n].goalLine)) : (c.oddx = e[n][o[l]],
                                                c.goalLinex = i,
                                                c.Touzx = t[i],
                                                c.textx = this.getTextJC(o[l], e[n].goalLine));
                    return c
                },
                getOdds_hg: function (t, a) {
                    var e = a.hgodds
                        , c = {}
                        , i = 0;
                    for (var n in t)
                        t[n] && i++;
                    if (i > 1 && t["-"] && 1 === t["-"].length && "d" !== t["-"])
                        for (var o in t)
                            for (var l = 0; l < e.length; l++)
                                o === e[l].goalLine && ("-" !== o ? (c.oddy = e[l][t[o]],
                                    c.texty = this.getText(t[o], e[l].goalLine),
                                    c.goalLiney = o,
                                    c.Touzy = t[o]) : (c.oddx = e[l][t[o]],
                                        c.textx = this.getText(t[o], e[l].goalLine),
                                        c.goalLinex = o,
                                        c.Touzx = t[o]));
                    else
                        for (var s in t)
                            for (var r = 0; r < e.length; r++) {
                                if (s === e[r].goalLine && !isNaN(s) && parseFloat(s) > 80)
                                    return "d" === t[s] ? (c.oddy = e[r]["h"],
                                        c.texty = this.getText("d", e[r].goalLine),
                                        c.goalLiney = s,
                                        c.Touzy = t[s]) : "x" === t[s] && (c.oddy = e[r]["a"],
                                            c.texty = this.getText("x", e[r].goalLine),
                                            c.goalLiney = s,
                                            c.Touzy = t[s]),
                                        c;
                                if (s === e[r].goalLine)
                                    if ("hj" === t[s] || "aj" === t[s])
                                        c.oddx = e[r][t[s].slice(0, 1)],
                                            c.textx = this.getText(t[s], e[r].goalLine),
                                            c.goalLinex = s,
                                            c.Touzx = t[s];
                                    else
                                        for (var u = t[s].split(""), h = 0; h < u.length; h++)
                                            "d" === u[h] || "-" === s && 2 === t["-"].length && -1 === t["-"].indexOf("d") && "h" === u[h] ? (c.oddx = e[r][u[h]],
                                                c.goalLinex = s,
                                                c.textx = this.getText(u[h], e[r].goalLine),
                                                c.Touzx = u[h]) : (c.oddy = e[r][u[h]],
                                                    c.texty = this.getText(u[h], e[r].goalLine),
                                                    c.goalLiney = s,
                                                    c.Touzy = u[h])
                            }
                    return c
                },
                flash: function () {
                    this.flashFlag = !this.flashFlag
                },
                handleClickOutside: function () {
                    this.$store.dispatch("app/closeSideBar", {
                        withoutAnimation: !1
                    })
                },
                comAccDiv: function (t, a) {
                    var e, c, i = 0, n = 0;
                    -1 === t.toString().indexOf(".") && (t += ".00"),
                        -1 === a.toString().indexOf(".") && (a += ".00");
                    try {
                        i = t.toString().split(".")[1].length
                    } catch (o) {
                        console.log(o)
                    }
                    try {
                        n = a.toString().split(".")[1].length
                    } catch (o) {
                        console.log(o)
                    }
                    return e = Number(t.toString().replace(".", "")),
                        c = Number(a.toString().replace(".", "")),
                        e / c * Math.pow(10, n - i)
                }
            }
        }
            , $t = Rt
            , Nt = (e("e8ca"),
                Object(v["a"])($t, l, s, !1, null, "19403240", null))
            , Vt = Nt.exports;
        n["default"].use(o["a"]);
        var Et = [{
            path: "/login",
            component: function () {
                return e.e("chunk-d4c1d6f4").then(e.bind(null, "9ed6"))
            },
            hidden: !0
        }, {
            path: "/angentUser",
            component: function () {
                return e.e("chunk-426c668e").then(e.bind(null, "2bd1"))
            },
            hidden: !0
        }, {
            path: "/404",
            component: function () {
                return e.e("chunk-6db8ccd0").then(e.bind(null, "8cdb"))
            },
            hidden: !0
        }, {
            path: "/",
            component: Vt,
            redirect: "/baskball/danguan",
            name: "篮球",
            meta: {
                title: "篮球",
                icon: "dashboard"
            },
            children: [{
                path: "baskball/danguan",
                name: "篮球二串一",
                component: function () {
                    return e.e("chunk-49990cc4").then(e.bind(null, "8919"))
                },
                meta: {
                    title: "篮球二串一",
                    icon: "dashboard"
                }
            }, {
                path: "baskball/qujian",
                name: "篮球区间",
                component: function () {
                    return e.e("chunk-41dfe85b").then(e.bind(null, "cff0"))
                },
                meta: {
                    title: "篮球区间",
                    icon: "dashboard"
                }
            }, {
                path: "baskball/allin",
                name: "篮球全包",
                component: function () {
                    return e.e("chunk-7895deac").then(e.bind(null, "1895"))
                },
                meta: {
                    title: "篮球全包",
                    icon: "dashboard"
                }
            }]
        }, {
            path: "/football",
            component: Vt,
            redirect: "/football/shengpf",
            name: "足球",
            meta: {
                title: "足球",
                icon: "dashboard"
            },
            children: [{
                path: "football/shengpf",
                name: "足球二串一",
                component: function () {
                    return e.e("chunk-79fe1278").then(e.bind(null, "83e4"))
                },
                meta: {
                    title: "足球二串一",
                    icon: "dashboard"
                }
            }, {
                path: "football/ttg",
                name: "总进球数",
                component: function () {
                    return e.e("chunk-edb7bca2").then(e.bind(null, "e3ff"))
                },
                meta: {
                    title: "总进球数",
                    icon: "dashboard"
                }
            }, {
                path: "football/hafu",
                name: "半全场",
                component: function () {
                    return e.e("chunk-5b318488").then(e.bind(null, "7148"))
                },
                meta: {
                    title: "半全场",
                    icon: "dashboard"
                }
            }, {
                path: "football/allin",
                name: "足球全包",
                component: function () {
                    return e.e("chunk-f82aeb04").then(e.bind(null, "2194"))
                },
                meta: {
                    title: "足球全包",
                    icon: "dashboard"
                }
            }]
        }, {
            path: "/analysis",
            component: Vt,
            redirect: "/analysis/tcAdapter",
            name: "数据分析",
            meta: {
                title: "数据分析",
                icon: "dashboard"
            },
            children: [{
                path: "analysis/tcAdapter",
                name: "JC>>HG适配器",
                component: function () {
                    return e.e("chunk-07711831").then(e.bind(null, "18a0"))
                },
                meta: {
                    title: "JC>>HG适配器",
                    icon: "dashboard"
                }
            }, {
                path: "analysis/hgAdapter",
                name: "平台适配器",
                component: function () {
                    return e.e("chunk-ddda2320").then(e.bind(null, "cc37"))
                },
                meta: {
                    title: "平台适配器",
                    icon: "dashboard"
                }
            }, {
                path: "analysis/others",
                name: "其他",
                component: function () {
                    return e.e("chunk-3f0588fc").then(e.bind(null, "a031"))
                },
                meta: {
                    title: "其他",
                    icon: "dashboard"
                }
            }]
        }, {
            path: "/system",
            component: Vt,
            redirect: "/system/personSet",
            name: "设置",
            meta: {
                title: "设置",
                icon: "dashboard"
            },
            children: [{
                path: "system/teamSet",
                name: "球队设置",
                component: function () {
                    return e.e("chunk-2815857a").then(e.bind(null, "237c"))
                },
                meta: {
                    title: "球队设置",
                    icon: "dashboard"
                }
            }, {
                path: "system/userSet",
                name: "用户设置",
                component: function () {
                    return e.e("chunk-0aeae326").then(e.bind(null, "2ef8"))
                },
                meta: {
                    title: "用户设置",
                    icon: "dashboard"
                }
            }, {
                path: "system/uidSet",
                name: "uid管理",
                component: function () {
                    return e.e("chunk-21abca40").then(e.bind(null, "dd5c"))
                },
                meta: {
                    title: "uid管理",
                    icon: "dashboard"
                }
            }, {
                path: "system/ipSet",
                name: "地址管理",
                component: function () {
                    return e.e("chunk-1d365b2e").then(e.bind(null, "d0cc"))
                },
                meta: {
                    title: "地址管理",
                    icon: "dashboard"
                }
            }, {
                path: "system/noticeSet",
                name: "公告管理",
                component: function () {
                    return e.e("chunk-779dc214").then(e.bind(null, "fbae"))
                },
                meta: {
                    title: "公告管理",
                    icon: "dashboard"
                }
            }]
        }, {
            path: "*",
            redirect: "/404",
            hidden: !0
        }]
            , Zt = function () {
                return new o["a"]({
                    scrollBehavior: function () {
                        return {
                            y: 0
                        }
                    },
                    routes: Et
                })
            }
            , Ut = Zt();
        function Wt() {
            var t = Zt();
            Ut.matcher = t.matcher
        }
        a["a"] = Ut
    },
    b20f: function (t, a, e) {
        t.exports = {
            menuText: "#bfcbd9",
            menuActiveText: "#409eff",
            subMenuActiveText: "#f4f4f5",
            menuBg: "#304156",
            menuHover: "#263445",
            subMenuBg: "#1f2d3d",
            subMenuHover: "#001528",
            sideBarWidth: "210px"
        }
    },
    b3b5: function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-user",
                use: "icon-user-usage",
                viewBox: "0 0 130 130",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" id="icon-user"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    b775: function (t, a, e) {
        "use strict";
        e("d3b7"),
            e("d9e2");
        var c = e("bc3a")
            , i = e.n(c)
            , n = e("5c96")
            , o = e("4360")
            , l = e("5f87")
            , s = i.a.create({
                baseURL: "/api",
                timeout: 5e4
            });
        s.interceptors.request.use((function (t) {
            return o["a"].getters.token && (t.headers["X-Token"] = Object(l["a"])()),
                t
        }
        ), (function (t) {
            return console.log(t),
                Promise.reject(t)
        }
        ));
        var r = function (t) {
            if (t.response) {
                var a = t.response.data;
                403 === t.response.status || 405 === t.response.status || t.response.status,
                    n["Message"].error(a.error)
            }
            return Promise.reject(t)
        };
        s.interceptors.response.use((function (t) {
            var a = t.data;
            return 200 !== a.code && !0 !== a.success ? (Object(n["Message"])({
                message: a.message || "Error",
                type: "error",
                duration: 5e3
            }),
                403 !== a.code && 401 !== a.code && 405 !== a.code || n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again", "Confirm logout", {
                    confirmButtonText: "Re-Login",
                    cancelButtonText: "Cancel",
                    type: "warning"
                }).then((function () {
                    o["a"].dispatch("user/resetToken").then((function () {
                        location.reload()
                    }
                    ))
                }
                )),
                Promise.reject(new Error(a.error || "Error"))) : a
        }
        ), r, (function (t) {
            return console.log("err" + t),
                Object(n["Message"])({
                    message: t.message,
                    type: "error",
                    duration: 5e3
                }),
                Promise.reject(t)
        }
        )),
            a["a"] = s
    },
    bb0e: function (t, a, e) { },
    c24f: function (t, a, e) {
        "use strict";
        e.d(a, "e", (function () {
            return n
        }
        )),
            e.d(a, "c", (function () {
                return o
            }
            )),
            e.d(a, "f", (function () {
                return l
            }
            )),
            e.d(a, "d", (function () {
                return s
            }
            )),
            e.d(a, "g", (function () {
                return r
            }
            )),
            e.d(a, "a", (function () {
                return u
            }
            )),
            e.d(a, "b", (function () {
                return h
            }
            ));
        e("99af");
        var c = e("b775")
            , i = {
                agtCreate: "/users/angentRegister",
                create: "/users/register",
                findall: "/users/findall",
                findone: "/users/findone",
                update: "/users/update",
                delete: "/users/deleteone",
                delmany: "/users/deletemany"
            };
        function n(t) {
            return Object(c["a"])({
                url: "/users/login",
                method: "post",
                data: t
            })
        }
        function o(t) {
            // 用户信息通过 MQTT 鉴权获取，不走 HTTP
            var mqtt = window.__hdfx_mqtt;
            if (mqtt && mqtt.getUserInfo) {
                var info = mqtt.getUserInfo();
                if (info) return Promise.resolve({ data: info });
            }
            // 兜底：从本地存储读取
            try {
                var stored = localStorage.getItem("hdfx_userinfo");
                if (stored) return Promise.resolve({ data: JSON.parse(stored) });
            } catch(e) {}
            return Promise.resolve({ data: { name: "user", role: "user", avatar: null, viptime: null } });
        }
        function l() {
            return Object(c["a"])({
                url: "/users/logout",
                method: "post"
            })
        }
        function s(t) {
            return Object(c["a"])({
                url: i.findall,
                method: "get",
                params: t
            })
        }
        function r(t) {
            return Object(c["a"])({
                url: t.uuid ? "".concat(i.update, "/").concat(t.uuid) : i.create,
                method: t.uuid ? "put" : "post",
                data: t
            })
        }
        function u(t) {
            return Object(c["a"])({
                url: i.agtCreate,
                method: "post",
                params: t
            })
        }
        function h(t) {
            return Object(c["a"])({
                url: "".concat(i.delete, "/").concat(t.uuid),
                method: "delete"
            })
        }
    },
    c295: function (t, a, e) {
        "use strict";
        e("3031")
    },
    c2cc: function (t, a, e) {
        "use strict";
        e("bb0e")
    },
    cf1e: function (t, a, e) {
        t.exports = {
            menuText: "#bfcbd9",
            menuActiveText: "#409eff",
            subMenuActiveText: "#f4f4f5",
            menuBg: "#304156",
            menuHover: "#263445",
            subMenuBg: "#1f2d3d",
            subMenuHover: "#001528",
            sideBarWidth: "210px"
        }
    },
    d3a5: function (t, a, e) {
        t.exports = e.p + "static/media/tsy6.880d1406.mp3"
    },
    d7ec: function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-eye-open",
                use: "icon-eye-open-usage",
                viewBox: "0 0 1024 1024",
                content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-eye-open"><defs><style></style></defs><path d="M512 128q69.675 0 135.51 21.163t115.498 54.997 93.483 74.837 73.685 82.006 51.67 74.837 32.17 54.827L1024 512q-2.347 4.992-6.315 13.483T998.87 560.17t-31.658 51.669-44.331 59.99-56.832 64.34-69.504 60.16-82.347 51.5-94.848 34.687T512 896q-69.675 0-135.51-21.163t-115.498-54.826-93.483-74.326-73.685-81.493-51.67-74.496-32.17-54.997L0 513.707q2.347-4.992 6.315-13.483t18.816-34.816 31.658-51.84 44.331-60.33 56.832-64.683 69.504-60.331 82.347-51.84 94.848-34.816T512 128.085zm0 85.333q-46.677 0-91.648 12.331t-81.152 31.83-70.656 47.146-59.648 54.485-48.853 57.686-37.675 52.821-26.325 43.99q12.33 21.674 26.325 43.52t37.675 52.351 48.853 57.003 59.648 53.845T339.2 767.02t81.152 31.488T512 810.667t91.648-12.331 81.152-31.659 70.656-46.848 59.648-54.186 48.853-57.344 37.675-52.651T927.957 512q-12.33-21.675-26.325-43.648t-37.675-52.65-48.853-57.345-59.648-54.186-70.656-46.848-81.152-31.659T512 213.334zm0 128q70.656 0 120.661 50.006T682.667 512 632.66 632.661 512 682.667 391.339 632.66 341.333 512t50.006-120.661T512 341.333zm0 85.334q-35.328 0-60.33 25.002T426.666 512t25.002 60.33T512 597.334t60.33-25.002T597.334 512t-25.002-60.33T512 426.666z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    dcf8: function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-nested",
                use: "icon-nested-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-nested"><path d="M.002 9.2c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-5.043-3.58-9.132-7.997-9.132S.002 4.157.002 9.2zM31.997.066h95.981V18.33H31.997V.066zm0 45.669c0 5.044 3.58 9.132 7.998 9.132 4.417 0 7.997-4.088 7.997-9.132 0-3.263-1.524-6.278-3.998-7.91-2.475-1.63-5.524-1.63-7.998 0-2.475 1.632-4 4.647-4 7.91zM63.992 36.6h63.986v18.265H63.992V36.6zm-31.995 82.2c0 5.043 3.58 9.132 7.998 9.132 4.417 0 7.997-4.089 7.997-9.132 0-5.044-3.58-9.133-7.997-9.133s-7.998 4.089-7.998 9.133zm31.995-9.131h63.986v18.265H63.992V109.67zm0-27.404c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-3.263-1.524-6.277-3.998-7.909-2.475-1.631-5.524-1.631-7.998 0-2.475 1.632-4 4.646-4 7.91zm31.995-9.13h31.991V91.4H95.987V73.135z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    e23b: function (t, a, e) {
        "use strict";
        e("907f")
    },
    e7e7: function (t, a, e) {
        "use strict";
        e("2114")
    },
    e8ca: function (t, a, e) {
        "use strict";
        e("4604")
    },
    eb1b: function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-form",
                use: "icon-form-usage",
                viewBox: "0 0 128 128",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-form"><path d="M84.068 23.784c-1.02 0-1.877-.32-2.572-.96a8.588 8.588 0 0 1-1.738-2.237 11.524 11.524 0 0 1-1.042-2.621c-.232-.895-.348-1.641-.348-2.238V0h.278c.834 0 1.622.085 2.363.256.742.17 1.645.575 2.711 1.214 1.066.64 2.363 1.535 3.892 2.686 1.53 1.15 3.453 2.664 5.77 4.54 2.502 2.045 4.494 3.771 5.977 5.178 1.483 1.406 2.618 2.6 3.406 3.58.787.98 1.274 1.812 1.46 2.494.185.682.277 1.278.277 1.79v2.046H84.068zM127.3 84.01c.278.682.464 1.535.556 2.558.093 1.023-.37 2.003-1.39 2.94-.463.427-.88.832-1.25 1.215-.372.384-.696.704-.974.96a6.69 6.69 0 0 1-.973.767l-11.816-10.741a44.331 44.331 0 0 0 1.877-1.535 31.028 31.028 0 0 1 1.737-1.406c1.112-.938 2.317-1.343 3.615-1.215 1.297.128 2.363.405 3.197.83.927.427 1.923 1.173 2.989 2.239 1.065 1.065 1.876 2.195 2.432 3.388zM78.23 95.902c2.038 0 3.752-.511 5.143-1.534l-26.969 25.83H18.037c-1.761 0-3.684-.47-5.77-1.407a24.549 24.549 0 0 1-5.838-3.709 21.373 21.373 0 0 1-4.518-5.306c-1.204-2.003-1.807-4.07-1.807-6.202V16.495c0-1.79.44-3.665 1.32-5.626A18.41 18.41 0 0 1 5.04 5.562a21.798 21.798 0 0 1 5.213-3.964C12.198.533 14.237 0 16.37 0h53.24v15.984c0 1.62.278 3.367.834 5.242a16.704 16.704 0 0 0 2.572 5.179c1.159 1.577 2.665 2.898 4.518 3.964 1.853 1.066 4.078 1.598 6.673 1.598h20.295v42.325L85.458 92.45c1.02-1.364 1.529-2.856 1.529-4.476 0-2.216-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1c-2.409 0-4.448.789-6.116 2.366-1.668 1.577-2.502 3.474-2.502 5.69 0 2.217.834 4.092 2.502 5.626 1.668 1.535 3.707 2.302 6.117 2.302h52.13zM26.1 47.951c-2.41 0-4.449.789-6.117 2.366-1.668 1.577-2.502 3.473-2.502 5.69 0 2.216.834 4.092 2.502 5.626 1.668 1.534 3.707 2.302 6.117 2.302h52.13c2.409 0 4.47-.768 6.185-2.302 1.715-1.534 2.572-3.41 2.572-5.626 0-2.217-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1zm52.407 64.063l1.807-1.663 3.476-3.196a479.75 479.75 0 0 0 4.587-4.284 500.757 500.757 0 0 1 5.004-4.667c3.985-3.666 8.48-7.758 13.485-12.276l11.677 10.741-13.485 12.404-5.004 4.603-4.587 4.22a179.46 179.46 0 0 0-3.267 3.068c-.88.853-1.367 1.322-1.46 1.407-.463.341-.973.703-1.529 1.087-.556.383-1.112.703-1.668.959-.556.256-1.413.575-2.572.959a83.5 83.5 0 0 1-3.545 1.087 72.2 72.2 0 0 1-3.475.895c-1.112.256-1.946.426-2.502.511-1.112.17-1.854.043-2.224-.383-.371-.426-.464-1.151-.278-2.174.092-.511.278-1.279.556-2.302.278-1.023.602-2.067.973-3.132l1.042-3.005c.325-.938.58-1.577.765-1.918a10.157 10.157 0 0 1 2.224-2.941z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    },
    ee49: function (t, a, e) { },
    f15b: function (t, a, e) {
        "use strict";
        e("28e8")
    },
    f782: function (t, a, e) {
        "use strict";
        e.r(a);
        var c = e("e017")
            , i = e.n(c)
            , n = e("21a1")
            , o = e.n(n)
            , l = new i.a({
                id: "icon-dashboard",
                use: "icon-dashboard-usage",
                viewBox: "0 0 128 100",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100" id="icon-dashboard"><path d="M27.429 63.638c0-2.508-.893-4.65-2.679-6.424-1.786-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.465 2.662-1.785 1.774-2.678 3.916-2.678 6.424 0 2.508.893 4.65 2.678 6.424 1.786 1.775 3.94 2.662 6.465 2.662 2.524 0 4.678-.887 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm13.714-31.801c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM71.714 65.98l7.215-27.116c.285-1.23.107-2.378-.536-3.443-.643-1.064-1.56-1.762-2.75-2.094-1.19-.33-2.333-.177-3.429.462-1.095.639-1.81 1.573-2.143 2.804l-7.214 27.116c-2.857.237-5.405 1.266-7.643 3.088-2.238 1.822-3.738 4.152-4.5 6.992-.952 3.644-.476 7.098 1.429 10.364 1.905 3.265 4.69 5.37 8.357 6.317 3.667.947 7.143.474 10.429-1.42 3.285-1.892 5.404-4.66 6.357-8.305.762-2.84.619-5.607-.429-8.305-1.047-2.697-2.762-4.85-5.143-6.46zm47.143-2.342c0-2.508-.893-4.65-2.678-6.424-1.786-1.775-3.94-2.662-6.465-2.662-2.524 0-4.678.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.786 1.775 3.94 2.662 6.464 2.662 2.524 0 4.679-.887 6.465-2.662 1.785-1.775 2.678-3.916 2.678-6.424zm-45.714-45.43c0-2.509-.893-4.65-2.679-6.425C68.68 10.01 66.524 9.122 64 9.122c-2.524 0-4.679.887-6.464 2.661-1.786 1.775-2.679 3.916-2.679 6.425 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm32 13.629c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM128 63.638c0 12.351-3.357 23.78-10.071 34.286-.905 1.372-2.19 2.058-3.858 2.058H13.93c-1.667 0-2.953-.686-3.858-2.058C3.357 87.465 0 76.037 0 63.638c0-8.613 1.69-16.847 5.071-24.703C8.452 31.08 13 24.312 18.714 18.634c5.715-5.68 12.524-10.199 20.429-13.559C47.048 1.715 55.333.035 64 .035c8.667 0 16.952 1.68 24.857 5.04 7.905 3.36 14.714 7.88 20.429 13.559 5.714 5.678 10.262 12.446 13.643 20.301 3.38 7.856 5.071 16.09 5.071 24.703z" /></symbol>'
            });
        o.a.add(l);
        a["default"] = l
    }
}, [[0, "runtime", "chunk-elementUI", "chunk-libs"]]]);
