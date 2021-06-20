(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "15e8": function(t, e, a) {
        a.r(e);
        var i, n = a("f368"), o = a.n(n);
        for (i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    2881: function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return i;
        });
        var i = {
            addMiniTip: function() {
                return Promise.all([ a.e("common/vendor"), a.e("components/add-mini-tip/add-mini-tip") ]).then(a.bind(null, "00a6"));
            }
        }, n = function() {
            var t = this, e = (t.$createElement, t._self._c, 2 == t.setting.index_type || "ios" == t.systemtype && 1 == t.setting.ios_index_type && 3 != t.setting.index_type ? parseInt(t.setting.lunbo_padding) : null), a = 2 == t.setting.index_type || "ios" == t.systemtype && 1 == t.setting.ios_index_type && 3 != t.setting.index_type ? parseInt(t.setting.lunbo_height) : null, i = 2 == t.setting.index_type || "ios" == t.systemtype && 1 == t.setting.ios_index_type && 3 != t.setting.index_type ? parseInt(t.setting.lunbo_width) : null, n = 2 == t.setting.index_type || "ios" == t.systemtype && 1 == t.setting.ios_index_type && 3 != t.setting.index_type ? parseInt(t.setting.lunbo_spacing) : null, o = 3 == t.setting.index_type ? parseInt(t.setting.waimaitt_lunbo_padding) : null, r = 3 == t.setting.index_type ? parseInt(t.setting.waimaitt_lunbo_height) : null, s = 3 == t.setting.index_type ? parseInt(t.setting.waimaitt_lunbo_width) : null, c = 3 == t.setting.index_type ? parseInt(t.setting.waimaitt_lunbo_spacing) : null, g = 4 == t.setting.index_type ? parseInt(t.setting.waimainew_lunbo_padding) : null, d = 4 == t.setting.index_type ? parseInt(t.setting.waimainew_lunbo_height) : null, l = 4 == t.setting.index_type ? parseInt(t.setting.waimainew_lunbo_width) : null, u = 4 == t.setting.index_type ? parseInt(t.setting.waimainew_lunbo_spacing) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: a,
                    m2: i,
                    m3: n,
                    m4: o,
                    m5: r,
                    m6: s,
                    m7: c,
                    m8: g,
                    m9: d,
                    m10: l,
                    m11: u
                }
            });
        }, o = [];
    },
    "44f2": function(t, e, a) {},
    "4d92": function(t, e, a) {
        var i = a("44f2");
        a.n(i).a;
    },
    b628: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("0cda"), e(a("66fd")), t(e(a("b7bc")).default);
        }).call(this, a("543d").createPage);
    },
    b7bc: function(t, e, a) {
        a.r(e);
        var i, n = a("2881"), o = a("15e8");
        for (i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("4d92");
        var r = a("f0c5"), n = Object(r.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = n.exports;
    },
    f368: function(t, e, a) {
        (function(o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = getApp(), n = 500, t = {
                data: function() {
                    return {
                        warn_num: o.getStorageSync("userinfo").s_1_num,
                        module_name: r.globalData.module_name,
                        appid_type: 0,
                        qudao_tkl: "",
                        is_qudao_tkl: 0,
                        showAlert_taobaoauth: !1,
                        showAlert_login: !1,
                        elm_url: [],
                        meituan_url: [],
                        wxCode: "",
                        userinfo: o.getStorageSync("userinfo"),
                        waimaidaohang: [],
                        waimailist: [],
                        systemtype: o.getStorageSync("systemtype"),
                        setting: o.getStorageSync("setting"),
                        showAlert_meituan: !1,
                        kwd: "",
                        showAlert: !1,
                        currentCateIndex: 0,
                        leftTo: "cate1",
                        productListTo: "",
                        mainCate: [],
                        allProducts: [],
                        allProducts_temp: [],
                        mainHeight: 500,
                        scrollTimer: null,
                        swiperItems: [],
                        authors: [],
                        contact_title: "",
                        contact_title_text: "",
                        contact_title_desc: "",
                        contact_id: "",
                        contact_type: "",
                        contact_thumb: "",
                        coupons_meituan: {
                            color: "#ce0000",
                            ltBg: "#fffbd5",
                            height: "150rpx",
                            unit: "￥",
                            number: 56,
                            txt: "最高可领",
                            title: "可叠加使用",
                            desc: "次日24点失效",
                            btn: "领取"
                        },
                        footerCurrent: 0,
                        showToast_login: !1
                    };
                },
                components: {
                    gracePage: function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceSearch: function() {
                        a.e("graceUI/components/graceSearch").then(function() {
                            return resolve(a("de21"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceSwiper: function() {
                        a.e("graceUI/components/graceSwiper").then(function() {
                            return resolve(a("9fc3"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    addMiniTip: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/add-mini-tip/add-mini-tip") ]).then(function() {
                            return resolve(a("00a6"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceDialog: function() {
                        a.e("graceUI/components/graceDialog").then(function() {
                            return resolve(a("f85d"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceCoupons: function() {
                        a.e("graceUI/components/graceCoupons").then(function() {
                            return resolve(a("6546"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceFullLoading: function() {
                        a.e("graceUI/components/graceFullLoading").then(function() {
                            return resolve(a("3be5"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onReady: function() {
                    var a = this;
                    o.getSystemInfo({
                        success: function(t) {
                            n = t.windowHeight;
                        }
                    }), 0 == this.is_waimai && setTimeout(function() {
                        o.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(e) {
                            o.createSelectorQuery().select("#hSearch").fields({
                                size: !0
                            }, function(t) {
                                a.mainHeight = e.height - t.height;
                            }).exec();
                        }).exec();
                    }, 1e3), this.autoUpdate();
                },
                onShow: function() {
                    var t;
                    this.userinfo = o.getStorageSync("userinfo"), o.setStorageSync("tabbar", 0), o.getStorageSync("openid") && (t = r.globalData.util.url("entry/wxapp/api", {
                        m: r.globalData.module_name,
                        o: "chkpid"
                    }), o.request({
                        url: t,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: o.getStorageSync("openid")
                        },
                        success: function(t) {
                            t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                            o.setStorageSync("pid_use_time", t), console.log(o.getStorageSync("pid_time")), 
                            console.log(o.getStorageSync("pid_use_time")), o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && (o.setStorageSync("elmwm_url", ""), 
                            o.setStorageSync("elmsc_url", ""), o.setStorageSync("elmwmposter", ""), o.setStorageSync("elmscposter", ""), 
                            o.setStorageSync("pid_time", o.getStorageSync("pid_use_time")));
                        }
                    }));
                },
                onPullDownRefresh: function() {
                    this.loadWaimaidaohang(), this.loadWaimailist(), this.loadSwiperitems();
                },
                onLoad: function(t) {
                    var e = this;
                    this.module_name = r.globalData.module_name;
                    var a = t;
                    o.setStorageSync("invite_uid", a.uid), o.setStorageSync("tabbar", 0);
                    var i = this;
                    this.loadsetting(), o.login({
                        success: function(t) {
                            e.wxCode = t.code;
                            t = t.code;
                            r.globalData.util.request({
                                url: "auth/session/openid",
                                data: {
                                    code: t
                                },
                                cachetime: 0,
                                success: function(t) {
                                    var e;
                                    t.data.errno || (o.setStorageSync("openid", t.data.data.openid), o.setStorageSync("unionid", t.data.data.userinfo.unionid), 
                                    e = t.data.data.openid, t.data.data.userinfo.unionid, t = r.globalData.util.url("entry/wxapp/api", {
                                        m: r.globalData.module_name,
                                        o: "userinfo"
                                    }), o.request({
                                        url: t,
                                        method: "GET",
                                        data: {
                                            openid: e,
                                            invite_uid: o.getStorageSync("invite_uid")
                                        },
                                        success: function(t) {
                                            t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                            t.openid && (o.setStorageSync("userinfo", t.userinfo), o.setStorageSync("pid_use_time", t.pid_time), 
                                            console.log(o.getStorageSync("pid_time")), console.log(o.getStorageSync("pid_use_time")), 
                                            o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && (o.setStorageSync("elmwm_url", ""), 
                                            o.setStorageSync("elmsc_url", ""), o.setStorageSync("elmwmposter", ""), o.setStorageSync("elmscposter", ""), 
                                            o.setStorageSync("pid_time", o.getStorageSync("pid_use_time"))), i.systemtype = o.getStorageSync("systemtype"), 
                                            i.userinfo = t.userinfo, i.getWxCode(), o.getStorageSync("userinfo").s_1_num ? i.warn_num = o.getStorageSync("userinfo").s_1_num : i.warn_num = 0, 
                                            a.to && ("meituan" == a.to ? wx.switchTab({
                                                url: "../meituan/index"
                                            }) : "elm" == a.to ? wx.switchTab({
                                                url: "../elm/index"
                                            }) : "user" == a.to && wx.switchTab({
                                                url: "../user/index"
                                            })));
                                        }
                                    }));
                                }
                            });
                        }
                    });
                },
                onShareAppMessage: function() {
                    var t = "pages/index/index?uid=" + o.getStorageSync("userinfo").user_id;
                    return {
                        title: o.getStorageSync("setting").sharetitle,
                        imageUrl: o.getStorageSync("setting").sharethumb,
                        path: t
                    };
                },
                methods: {
                    showDialog1: function() {
                        this.$refs.showAlert_taobaoauth.open();
                    },
                    closeDialog1: function() {
                        this.$refs.showAlert_taobaoauth.hide();
                    },
                    showDialog2: function() {
                        this.$refs.showAlert_login.open();
                    },
                    closeDialog2: function() {
                        this.$refs.showAlert_login.hide();
                    },
                    showDialog3: function() {
                        this.$refs.showAlert.open();
                    },
                    closeDialog3: function() {
                        this.$refs.showAlert.hide();
                    },
                    userlogin: function() {
                        o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? this.closeDialog2() : this.showDialog2();
                    },
                    checksubmessage: function(t) {
                        var a;
                        o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (a = this, 
                        wx.requestSubscribeMessage({
                            tmplIds: [ o.getStorageSync("setting").warn_yhq_tplid, o.getStorageSync("setting").warn_hy_tplid, o.getStorageSync("setting").warn_order_tplid ],
                            success: function(t) {
                                console.log(t), "reject" == t[o.getStorageSync("setting").warn_yhq_tplid] ? wx.showToast({
                                    title: "您拒绝了订阅消息",
                                    duration: 1e3,
                                    success: function(t) {}
                                }) : wx.showToast({
                                    title: "订阅成功",
                                    duration: 1e3,
                                    success: function(t) {
                                        var e = r.globalData.util.url("entry/wxapp/api", {
                                            m: r.globalData.module_name,
                                            o: "subscribemessage"
                                        });
                                        o.request({
                                            url: e,
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            data: {
                                                openid: o.getStorageSync("openid"),
                                                type: 1
                                            },
                                            success: function(t) {
                                                var e = a.userinfo;
                                                a.warn_num++, e.s_1_num++, a.userinfo = e;
                                            }
                                        });
                                    }
                                });
                            },
                            fail: function(t) {}
                        })) : this.showDialog2();
                    },
                    getWxCode: function() {
                        var e = this;
                        wx.login({
                            success: function(t) {
                                e.wxCode = t.code;
                            }
                        });
                    },
                    updatepid: function() {
                        var t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "updatepid"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid")
                            },
                            success: function(t) {}
                        });
                    },
                    login: function(e) {
                        var a = this;
                        this.closeDialog2(), o.getSetting({
                            success: function(t) {
                                t.authSetting["scope.userInfo"] ? o.getUserInfo({
                                    success: function(t) {
                                        a.userAuth(e, t.userInfo, "login");
                                    }
                                }) : a.userAuth(e, null, "login");
                            }
                        });
                    },
                    userAuth: function(a, t, i) {
                        var n = this;
                        "getUserInfo:ok" == a.detail.errMsg ? wx.login({
                            success: function(t) {
                                var e = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "userinfo"
                                }), t = {
                                    code: t.code,
                                    encryptedData: a.detail.encryptedData,
                                    iv: a.detail.iv,
                                    openid: o.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                o.request({
                                    url: e,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: t,
                                    success: function(t) {
                                        1 == t.data.status ? (t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                        t = JSON.parse(t), o.setStorageSync("userinfo", t.userinfo), n.userinfo = t.userinfo, 
                                        "login" == i && (n.closeDialog2(), o.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        }))) : o.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : o.showToast({
                            title: "获取用户信息失败",
                            icon: "none"
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    loadsetting: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "setting"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                o.setStorageSync("setting", t.setting), e.setting = o.getStorageSync("setting"), 
                                e.systemtype = o.getStorageSync("systemtype"), 3 == o.getStorageSync("setting").index_type && (o.setNavigationBarTitle({
                                    title: o.getStorageSync("setting").waimaitt_navigationBarTitleText
                                }), o.setNavigationBarColor({
                                    backgroundColor: o.getStorageSync("setting").waimaitt_navigationBarBackgroundColor,
                                    frontColor: o.getStorageSync("setting").waimaitt_navigationBarTextStyle
                                })), 4 == o.getStorageSync("setting").index_type && (o.setNavigationBarTitle({
                                    title: o.getStorageSync("setting").waimainew_navigationBarTitleText
                                }), o.setNavigationBarColor({
                                    backgroundColor: o.getStorageSync("setting").waimainew_navigationBarBackgroundColor,
                                    frontColor: o.getStorageSync("setting").waimainew_navigationBarTextStyle
                                })), 2 == o.getStorageSync("setting").index_type && (o.setNavigationBarTitle({
                                    title: o.getStorageSync("setting").waimai_navigationBarTitleText
                                }), o.setNavigationBarColor({
                                    backgroundColor: o.getStorageSync("setting").waimai_navigationBarBackgroundColor,
                                    frontColor: o.getStorageSync("setting").waimai_navigationBarTextStyle
                                })), 1 == o.getStorageSync("setting").index_type && (o.setNavigationBarTitle({
                                    title: o.getStorageSync("setting").card_navigationBarTitleText
                                }), o.setNavigationBarColor({
                                    backgroundColor: o.getStorageSync("setting").card_navigationBarBackgroundColor,
                                    frontColor: o.getStorageSync("setting").card_navigationBarTextStyle
                                })), e.loadSwiperitems(), e.loadWaimaidaohang(), e.loadWaimailist();
                            }
                        });
                    },
                    meituan_urlFun: function() {
                        var t, e = this;
                        1 == e.appid_type && o.getStorageSync("mtwm_url") ? o.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: o.getStorageSync("mtwm_url")
                        }) : 2 == e.appid_type && o.getStorageSync("mtsc_url") ? o.navigateToMiniProgram({
                            appId: "wxde8ac0a21135c07d",
                            path: o.getStorageSync("mtsc_url")
                        }) : (t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "qrcode_mtelm"
                        }), o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                appid_type: e.appid_type
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                console.log("qrcode_mtelm:" + t), 1 == e.appid_type && (o.setStorageSync("mtwm_url", t.mtwm_url), 
                                o.setStorageSync("mtwm_h5", t.mtwm_h5), o.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: t.mtwm_url
                                })), 2 == e.appid_type && (o.setStorageSync("mtsc_url", t.mtsc_url), o.setStorageSync("mtsc_h5", t.mtsc_h5), 
                                o.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: t.mtsc_url
                                }));
                            }
                        }));
                    },
                    loadSwiperitems: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "ad"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                cateid: 1,
                                openid: o.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.swiperItems = t.data.swiperitems, o.stopPullDownRefresh();
                            }
                        });
                    },
                    taped: function(t) {
                        if (o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type) {
                            var e = this;
                            if (1 == this.swiperItems[t].is_ios && "ios" == o.getStorageSync("systemtype") && 0 == o.getStorageSync("setting").ios) {
                                var a = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return o.request({
                                    url: a,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: e.swiperItems[t].item_id,
                                        openid: o.getStorageSync("openid")
                                    },
                                    success: function(t) {}
                                }), this.contact_type = "ad", this.contact_id = this.swiperItems[t].item_id, this.contact_title = this.swiperItems[t].title, 
                                this.contact_title_text = "暂不可用", this.contact_title_desc = "由于相关规范，ios功能暂不可用", 
                                this.contact_thumb = o.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 == this.swiperItems[t].adtype) {
                                if (1 == this.swiperItems[t].appid_type && o.getStorageSync("mtwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? void o.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: o.getStorageSync("mtwm_url")
                                }) : void this.showDialog2();
                                if (1 == this.swiperItems[t].appid_type && !o.getStorageSync("mtwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 1, 
                                void e.meituan_urlFun()) : void this.showDialog2();
                                if (2 == this.swiperItems[t].appid_type && o.getStorageSync("mtsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? void o.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: o.getStorageSync("mtsc_url")
                                }) : void this.showDialog2();
                                if (2 == this.swiperItems[t].appid_type && !o.getStorageSync("mtsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 2, 
                                void e.meituan_urlFun()) : void this.showDialog2();
                                if (3 == this.swiperItems[t].appid_type && o.getStorageSync("elmwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: o.getStorageSync("elmwm_url")
                                }), e.updatepid(), void console.log(o.getStorageSync("elmwm_url"))) : void this.showDialog2();
                                if (3 == this.swiperItems[t].appid_type && !o.getStorageSync("elmwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 3, 
                                void e.gettaobaoauth()) : void this.showDialog2();
                                if (4 == this.swiperItems[t].appid_type && o.getStorageSync("elmsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: o.getStorageSync("elmsc_url")
                                }), e.updatepid(), void console.log(o.getStorageSync("elmsc_url"))) : void this.showDialog2();
                                if (4 == this.swiperItems[t].appid_type && !o.getStorageSync("elmsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 4, 
                                void e.gettaobaoauth()) : void this.showDialog2();
                                if (0 == this.swiperItems[t].appid_type) return void o.navigateToMiniProgram({
                                    appId: this.swiperItems[t].appid,
                                    path: this.swiperItems[t].path
                                });
                            }
                            5 == this.swiperItems[t].adtype && o.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(this.swiperItems[t].url)
                            }), 4 == this.swiperItems[t].adtype && (-1 != this.swiperItems[t].url.indexOf("news") ? o.switchTab({
                                url: this.swiperItems[t].url
                            }) : o.navigateTo({
                                url: this.swiperItems[t].url
                            })), 2 != this.swiperItems[t].adtype && 3 != this.swiperItems[t].adtype || (a = r.globalData.util.url("entry/wxapp/api", {
                                m: r.globalData.module_name,
                                o: "ad_kefubind"
                            }), o.request({
                                url: a,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    adtype: "ad",
                                    adid: e.swiperItems[t].item_id,
                                    openid: o.getStorageSync("openid")
                                },
                                success: function(t) {}
                            }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = this.swiperItems[t].item_id, 
                            this.contact_title = this.swiperItems[t].title, this.contact_title_text = this.swiperItems[t].title_text, 
                            this.contact_title_desc = this.swiperItems[t].title_desc, this.contact_thumb = o.getStorageSync("setting").dianwo, 
                            this.showDialog3());
                        } else this.showDialog2();
                    },
                    loadWaimaidaohang: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "waimaidaohang"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.waimaidaohang = t.data.waimaidaohang;
                            }
                        });
                    },
                    loadWaimailist: function() {
                        var e = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "waimailist"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid")
                            },
                            success: function(t) {
                                t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), t = JSON.parse(t);
                                e.waimailist = t.data.waimailist;
                            }
                        });
                    },
                    openShopad: function(t) {
                        if (o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type) {
                            var e = this;
                            if (1 == t.currentTarget.dataset.is_ios && "ios" == o.getStorageSync("systemtype") && 0 == o.getStorageSync("setting").ios) {
                                var a = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "ad_kefubind"
                                });
                                return o.request({
                                    url: a,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: t.currentTarget.dataset.adid,
                                        openid: o.getStorageSync("openid")
                                    },
                                    success: function(t) {}
                                }), this.contact_type = "ad", this.contact_id = t.currentTarget.dataset.adid, this.contact_title = t.currentTarget.dataset.title, 
                                this.contact_title_text = "暂不支持购买", this.contact_title_desc = "苹果iOS系统手机暂不支持购买，请分享给非iOS系统的微信购买！", 
                                this.contact_thumb = o.getStorageSync("setting").dianwo, void this.showDialog3();
                            }
                            if (1 == t.currentTarget.dataset.adtype) {
                                if (1 == t.currentTarget.dataset.appid_type && o.getStorageSync("mtwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? void o.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: o.getStorageSync("mtwm_url")
                                }) : void this.showDialog2();
                                if (1 == t.currentTarget.dataset.appid_type && !o.getStorageSync("mtwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 1, 
                                void e.meituan_urlFun()) : void this.showDialog2();
                                if (2 == t.currentTarget.dataset.appid_type && o.getStorageSync("mtsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? void o.navigateToMiniProgram({
                                    appId: "wxde8ac0a21135c07d",
                                    path: o.getStorageSync("mtsc_url")
                                }) : void this.showDialog2();
                                if (2 == t.currentTarget.dataset.appid_type && !o.getStorageSync("mtsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 2, 
                                void e.meituan_urlFun()) : void this.showDialog2();
                                if (3 == t.currentTarget.dataset.appid_type && o.getStorageSync("elmwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: o.getStorageSync("elmwm_url")
                                }), e.updatepid(), void console.log(o.getStorageSync("elmwm_url"))) : void this.showDialog2();
                                if (3 == t.currentTarget.dataset.appid_type && !o.getStorageSync("elmwm_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (e.appid_type = 3, 
                                void e.gettaobaoauth()) : void this.showDialog2();
                                if (4 == t.currentTarget.dataset.appid_type && o.getStorageSync("elmsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: o.getStorageSync("elmsc_url")
                                }), e.updatepid(), void console.log(o.getStorageSync("elmsc_url"))) : void this.showDialog2();
                                if (4 == t.currentTarget.dataset.appid_type && !o.getStorageSync("elmsc_url")) return o.getStorageSync("userinfo").nickname || 1 != o.getStorageSync("setting").login_type ? (console.log("ccc"), 
                                e.appid_type = 4, void e.gettaobaoauth()) : void this.showDialog2();
                                if (0 == t.currentTarget.dataset.appid_type) return void o.navigateToMiniProgram({
                                    appId: t.currentTarget.dataset.appid,
                                    path: t.currentTarget.dataset.path
                                });
                            }
                            if (5 != t.currentTarget.dataset.adtype) {
                                if (4 == t.currentTarget.dataset.adtype) return -1 != t.currentTarget.dataset.url.indexOf("news") ? void o.switchTab({
                                    url: t.currentTarget.dataset.url
                                }) : void o.navigateTo({
                                    url: t.currentTarget.dataset.url
                                });
                                2 != t.currentTarget.dataset.adtype && 3 != t.currentTarget.dataset.adtype || (a = r.globalData.util.url("entry/wxapp/api", {
                                    m: r.globalData.module_name,
                                    o: "ad_kefubind"
                                }), o.request({
                                    url: a,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        adtype: "ad",
                                        adid: t.currentTarget.dataset.adid,
                                        openid: o.getStorageSync("openid")
                                    },
                                    success: function(t) {}
                                }), this.contact_title_desc = "", this.contact_type = "ad", this.contact_id = t.currentTarget.dataset.adid, 
                                this.contact_title = t.currentTarget.dataset.title, this.contact_title_text = t.currentTarget.dataset.title_text, 
                                this.contact_title_desc = t.currentTarget.dataset.title_desc, this.contact_thumb = o.getStorageSync("setting").dianwo, 
                                this.showDialog3());
                            } else o.navigateTo({
                                url: "../kefu/webview?return_url=" + encodeURIComponent(t.currentTarget.dataset.url)
                            });
                        } else this.showDialog2();
                    },
                    taobaoauth: function() {
                        var e = this;
                        o.setClipboardData({
                            data: this.qudao_tkl,
                            success: function(t) {
                                o.showToast({
                                    title: "复制成功，请打开淘宝授权",
                                    icon: "none"
                                }), e.is_qudao_tkl = 1;
                            }
                        });
                    },
                    retaobaoauth: function() {
                        this.is_qudao_tkl = 0, this.qudao_tkl = "", this.gettaobaoauth();
                    },
                    notaobaoauth: function() {
                        3 == this.appid_type && o.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: o.getStorageSync("setting").default_elmwmpath
                        }), 4 == this.appid_type && o.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: o.getStorageSync("setting").default_elmscpath
                        });
                    },
                    taobaoauth_done: function() {
                        var a = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "taobaoauth_done"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(t) {
                                var e;
                                0 != t.data.status ? (e = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                e = JSON.parse(e), 1 == t.data.status ? (3 == a.appid_type && (o.setStorageSync("elmwm_url", e.elmwm_url), 
                                o.setStorageSync("elmwmqrcode", e.elmwm_qrcode), o.setStorageSync("elmwm_h5", e.elmwm_h5), 
                                o.setStorageSync("pid_time", +e.pid_time), o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && o.setStorageSync("pid_use_time", o.getStorageSync("pid_time")), 
                                o.setStorageSync("is_qudao", e.is_qudao), a.closeDialog1(), o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmwm_url
                                })), 4 == a.appid_type && (o.setStorageSync("elmsc_url", e.elmsc_url), o.setStorageSync("elmscqrcode", e.elmsc_qrcode), 
                                o.setStorageSync("elmsc_h5", e.elmsc_h5), o.setStorageSync("pid_time", +e.pid_time), 
                                o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && o.setStorageSync("pid_use_time", o.getStorageSync("pid_time")), 
                                o.setStorageSync("is_qudao", e.is_qudao), a.closeDialog1(), o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmsc_url
                                }))) : o.showModal({
                                    title: "提示",
                                    content: "未获取到您的授权信息，请重试！",
                                    showCancel: !1,
                                    success: function(t) {
                                        t.confirm || t.cancel;
                                    }
                                })) : o.showModal({
                                    title: "提示",
                                    content: "未获取到您的授权信息，请重试！",
                                    showCancel: !1,
                                    success: function(t) {
                                        t.confirm || t.cancel;
                                    }
                                });
                            }
                        });
                    },
                    gettaobaoauth: function() {
                        var e = this, a = this, t = r.globalData.util.url("entry/wxapp/api", {
                            m: r.globalData.module_name,
                            o: "gettaobaoauth"
                        });
                        o.request({
                            url: t,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: o.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(t) {
                                1 == t.data.status ? (a.showDialog1(), a.qudao_tkl = t.data.data) : 0 == t.data.status ? o.showToast({
                                    title: "获取授权信息出错",
                                    icon: "none"
                                }) : 2 == t.data.status && (t = r.globalData.crypt.Decrypt(t.data.data.data, t.data.data.key), 
                                t = JSON.parse(t), console.log("gettaobaoauth:" + t), 3 == e.appid_type && (o.setStorageSync("elmwm_url", t.elmwm_url), 
                                o.setStorageSync("elmwmqrcode", t.elmwm_qrcode), o.setStorageSync("elmwm_h5", t.elmwm_h5), 
                                o.setStorageSync("pid_time", +t.pid_time), o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && o.setStorageSync("pid_use_time", o.getStorageSync("pid_time")), 
                                o.setStorageSync("is_qudao", t.is_qudao), o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmwm_url
                                }), console.log(o.getStorageSync("elmwm_url"))), 4 == e.appid_type && (o.setStorageSync("elmsc_url", t.elmsc_url), 
                                o.setStorageSync("elmscqrcode", t.elmsc_qrcode), o.setStorageSync("elmsc_h5", t.elmsc_h5), 
                                o.setStorageSync("pid_time", +t.pid_time), o.getStorageSync("pid_time") != o.getStorageSync("pid_use_time") && o.setStorageSync("pid_use_time", o.getStorageSync("pid_time")), 
                                o.setStorageSync("is_qudao", t.is_qudao), o.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmsc_url
                                }), console.log(o.getStorageSync("elmsc_url"))));
                            }
                        });
                    },
                    closeContact: function() {
                        this.closeDialog3();
                    },
                    addmini: function() {
                        this.$refs.addmini.showAddMiniProgramTips = 1;
                    },
                    autoUpdate: function() {
                        var e = o.getUpdateManager();
                        e.onCheckForUpdate(), e.onUpdateReady(function() {
                            o.showModal({
                                title: "更新提示",
                                content: "新版本已经准备好，是否重启应用？",
                                success: function(t) {
                                    t.confirm && e.applyUpdate();
                                }
                            });
                        });
                    },
                    changCate: function(t) {
                        var e, a = t.currentTarget.dataset.cateid, i = t.currentTarget.dataset.maincateid, n = this.mainCate;
                        for (e in this.mainCate) n[e].hidden = e == i ? 0 : 1;
                        this.productListTo = "", this.currentCateIndex = a, this.mainCate = n, this.kwd = "", 
                        this.allProducts_temp = [], this.rscroll();
                    },
                    rscroll: function() {
                        var t = this;
                        null != this.scrollTimer && clearTimeout(this.scrollTimer), this.scrollTimer = setTimeout(function() {
                            t.getIndex();
                        }, 100);
                    },
                    getIndex: function() {
                        var i = this, t = o.createSelectorQuery();
                        t.selectAll(".products").boundingClientRect(), t.selectViewport().scrollOffset(), 
                        t.exec(function(t) {
                            for (var e = t[0], a = 0; a < e.length; a++) if (0 < e[a].top && e[a].top >= n / 2) return i.productListTo = "", 
                            i.currentCateIndex = e[a].dataset.parentid, void (i.leftTo = "cate" + e[a].dataset.parentid);
                        });
                    },
                    search: function(t) {
                        var e = t.detail;
                        if (e) {
                            this.kwd = e, this.allProducts_temp = [], this.currentCateIndex = 0, this.leftTo = "cate1", 
                            this.productListTo = "";
                            var a, i, n = this.mainCate;
                            for (a in this.mainCate) n[a].hidden = 0;
                            for (i in this.mainCate = n, this.allProducts) for (var o = 0; o < this.allProducts[i].length; o++) -1 != this.allProducts[i][o].title.indexOf(e) && "cate0products" != i && (this.allProducts_temp = this.allProducts_temp.concat(this.allProducts[i][o]));
                        }
                    },
                    onShareTimeline: function() {
                        var t = "uid=" + o.getStorageSync("userinfo").user_id;
                        return {
                            title: o.getStorageSync("setting").sharetitle,
                            imageUrl: o.getStorageSync("setting").sharethumb,
                            query: t
                        };
                    }
                }
            };
            e.default = t;
        }).call(this, a("543d").default);
    }
}, [ [ "b628", "common/runtime", "common/vendor" ] ] ]);