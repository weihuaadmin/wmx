(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/order" ], {
    "04dc": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("0cda"), t(n("66fd")), e(t(n("4962")).default);
        }).call(this, n("543d").createPage);
    },
    "2bc3": function(e, t, n) {},
    4962: function(e, t, n) {
        n.r(t);
        var r, s = n("7268"), o = n("b383");
        for (r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("73b8");
        var a = n("f0c5"), s = Object(a.a)(o.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        t.default = s.exports;
    },
    7268: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    "73b8": function(e, t, n) {
        var r = n("2bc3");
        n.n(r).a;
    },
    b383: function(e, t, n) {
        n.r(t);
        var r, s = n("fa2e"), o = n.n(s);
        for (r in s) "default" !== r && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(r);
        t.default = o.a;
    },
    fa2e: function(e, t, n) {
        (function(r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = getApp(), e = (n("10cd"), {
                data: function() {
                    return {
                        module_name: s.globalData.module_name,
                        swiperCurrentIndex: 0,
                        tabs: [ "全部", "已付款", "已完成", "已取消" ],
                        mainHeight: 0,
                        orders: [ [], [], [], [] ],
                        pages: [ 1, 1, 1, 1 ],
                        loadingTypes: [ 3, 3, 3, 3 ],
                        pageLoading: !0,
                        type: ""
                    };
                },
                onReady: function() {
                    var n = this;
                    setTimeout(function() {
                        r.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(t) {
                            r.createSelectorQuery().select("#nav").fields({
                                size: !0
                            }, function(e) {
                                n.mainHeight = t.height - e.height, n.pageLoading = !1;
                            }).exec();
                        }).exec();
                    }, 1500);
                },
                onLoad: function(e) {
                    this.module_name = s.globalData.module_name, this.type = e.op, "wjs" != this.type && "yjs" != this.type && "today" != this.type && "month" != this.type && "lastmonth" != this.type || (this.tabs = [ "全部" ], 
                    this.orders = [ [] ], this.pages = [ 1 ], this.loadingTypes = [ 3 ]), this.getOrders();
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
                        var t = this;
                        console.log("类型 : " + this.tabs[this.swiperCurrentIndex] + " 第" + this.pages[this.swiperCurrentIndex] + "页"), 
                        this.loadingTypes.splice(this.swiperCurrentIndex, 1, 1);
                        var e = s.globalData.util.url("entry/wxapp/api", {
                            m: s.globalData.module_name,
                            o: "orders"
                        }), n = {
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
                            data: n,
                            success: function(e) {
                                e = s.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                "ok" == e.status || "nomore" == e.status ? (1 == t.pages[t.swiperCurrentIndex] ? t.orders.splice(t.swiperCurrentIndex, 1, e.orders) : t.orders[t.swiperCurrentIndex] = t.orders[t.swiperCurrentIndex].concat(e.orders), 
                                t.pages[t.swiperCurrentIndex]++, "nomore" == e.status ? t.loadingTypes.splice(t.swiperCurrentIndex, 1, 2) : t.loadingTypes.splice(t.swiperCurrentIndex, 1, 3)) : "empty" == e.status ? (console.log("empty"), 
                                t.loadingTypes.splice(t.swiperCurrentIndex, 1, 5)) : "nomore" == e.status && (console.log("nomore"), 
                                t.loadingTypes.splice(t.swiperCurrentIndex, 1, 2));
                            }
                        });
                    }
                },
                components: {
                    gracePage: function() {
                        n.e("graceUI/components/gracePage").then(function() {
                            return resolve(n("1021"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceNavBar: function() {
                        n.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(n("a631"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceEmpty: function() {
                        n.e("graceUI/components/graceEmptyNew").then(function() {
                            return resolve(n("f8df"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    graceLoading: function() {
                        n.e("graceUI/components/graceLoading").then(function() {
                            return resolve(n("1d04"));
                        }.bind(null, n)).catch(n.oe);
                    }
                }
            });
            t.default = e;
        }).call(this, n("543d").default);
    }
}, [ [ "04dc", "common/runtime", "common/vendor" ] ] ]);