(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/fans" ], {
    "2ac2": function(e, n, t) {
        var r = t("cec2");
        t.n(r).a;
    },
    "2b84": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("0cda"), n(t("66fd")), e(n(t("7864")).default);
        }).call(this, t("543d").createPage);
    },
    7864: function(e, n, t) {
        t.r(n);
        var r, a = t("f2fd"), o = t("a65c");
        for (r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("2ac2");
        var i = t("f0c5"), a = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = a.exports;
    },
    a65c: function(e, n, t) {
        t.r(n);
        var r, a = t("d92a"), o = t.n(a);
        for (r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    cec2: function(e, n, t) {},
    d92a: function(e, n, t) {
        (function(r) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = getApp(), e = (t("10cd"), {
                data: function() {
                    return {
                        module_name: a.globalData.module_name,
                        swiperCurrentIndex: 0,
                        tabs: [ "全部" ],
                        mainHeight: 0,
                        orders: [ [] ],
                        pages: [ 1 ],
                        loadingTypes: [ 3 ],
                        pageLoading: !0,
                        type: ""
                    };
                },
                onReady: function() {
                    var t = this;
                    setTimeout(function() {
                        r.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(n) {
                            r.createSelectorQuery().select("#nav").fields({
                                size: !0
                            }, function(e) {
                                t.mainHeight = n.height - e.height, t.pageLoading = !1;
                            }).exec();
                        }).exec();
                    }, 1500);
                },
                onLoad: function(e) {
                    this.module_name = a.globalData.module_name, this.type = e.op, this.getOrders();
                },
                watch: {
                    swiperCurrentIndex: function(e) {
                        this.orders[this.swiperCurrentIndex].length < 1 && 3 == this.loadingTypes[this.swiperCurrentIndex] && this.getOrders();
                    }
                },
                methods: {
                    navChange: function(e) {
                        this.swiperCurrentIndex = e;
                    },
                    swiperChange: function(e) {
                        e = e.detail.current;
                        this.swiperCurrentIndex = e;
                    },
                    scrollend: function(e) {
                        console.log(e), 3 == this.loadingTypes[this.swiperCurrentIndex] && this.getOrders();
                    },
                    getOrders: function() {
                        var n = this;
                        console.log("类型 : " + this.tabs[this.swiperCurrentIndex] + " 第" + this.pages[this.swiperCurrentIndex] + "页"), 
                        this.loadingTypes.splice(this.swiperCurrentIndex, 1, 1);
                        var e = a.globalData.util.url("entry/wxapp/api", {
                            m: a.globalData.module_name,
                            o: "fans"
                        }), t = {
                            openid: r.getStorageSync("openid"),
                            type: this.type,
                            status: this.tabs[this.swiperCurrentIndex],
                            page: this.pages[this.swiperCurrentIndex]
                        };
                        r.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: t,
                            success: function(e) {
                                e = a.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                "ok" == e.status || "nomore" == e.status ? (1 == n.pages[n.swiperCurrentIndex] ? n.orders.splice(n.swiperCurrentIndex, 1, e.orders) : n.orders[n.swiperCurrentIndex] = n.orders[n.swiperCurrentIndex].concat(e.orders), 
                                n.pages[n.swiperCurrentIndex]++, "nomore" == e.status ? n.loadingTypes.splice(n.swiperCurrentIndex, 1, 2) : n.loadingTypes.splice(n.swiperCurrentIndex, 1, 3)) : "empty" == e.status ? (console.log("empty"), 
                                n.loadingTypes.splice(n.swiperCurrentIndex, 1, 5)) : "nomore" == e.status && (console.log("nomore"), 
                                n.loadingTypes.splice(n.swiperCurrentIndex, 1, 2));
                            }
                        });
                    }
                },
                components: {
                    gracePage: function() {
                        t.e("graceUI/components/gracePage").then(function() {
                            return resolve(t("1021"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    graceNavBar: function() {
                        t.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(t("a631"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    graceEmpty: function() {
                        t.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(t("f8df"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    graceLoading: function() {
                        t.e("graceUI/components/graceLoading").then(function() {
                            return resolve(t("1d04"));
                        }.bind(null, t)).catch(t.oe);
                    }
                }
            });
            n.default = e;
        }).call(this, t("543d").default);
    },
    f2fd: function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
}, [ [ "2b84", "common/runtime", "common/vendor" ] ] ]);