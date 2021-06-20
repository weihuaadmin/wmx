(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/elm/index" ], {
    3139: function(e, t, a) {
        (function(i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = getApp(), e = {
                data: function() {
                    return {
                        module_name: c.globalData.module_name,
                        p: 0,
                        appid_type: 0,
                        qudao_tkl: "",
                        h5: "",
                        is_qudao_tkl: 0,
                        showAlert_taobaoauth: !1,
                        showAlert_login: !1,
                        elm_url: [],
                        meituan_url: [],
                        show_poster: !1,
                        currentIndex: 0,
                        tabs: [ "外卖", "果蔬商超" ],
                        mainHeight: 300,
                        pageLoading: !0,
                        pagebgcolor: i.getStorageSync("setting").waimaitt_meituanwm_bgcolor,
                        userinfo: i.getStorageSync("userinfo"),
                        setting: i.getStorageSync("setting"),
                        qrcode: "",
                        elmwmqrcode: "",
                        elmscqrcode: "",
                        elmwmposter: "",
                        elmscposter: "",
                        width: 750,
                        height: 1334,
                        widthIn: 300,
                        heightIn: 500,
                        bgColor: "#7ACBDC",
                        bgImg: "",
                        imgSrc: null,
                        rpx2px: 1,
                        context: null,
                        multiple: 1,
                        showToast_login: !1,
                        footerCurrent: 0
                    };
                },
                components: {
                    gracePage: (a("e5c8"), function() {
                        a.e("graceUI/components/gracePage").then(function() {
                            return resolve(a("1021"));
                        }.bind(null, a)).catch(a.oe);
                    }),
                    graceHeader: function() {
                        a.e("graceUI/components/graceHeader").then(function() {
                            return resolve(a("266b"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceNavBar: function() {
                        a.e("graceUI/components/graceNavBar").then(function() {
                            return resolve(a("a631"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceShade: function() {
                        a.e("graceUI/components/graceShade").then(function() {
                            return resolve(a("31ed"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceDialog: function() {
                        a.e("graceUI/components/graceDialog").then(function() {
                            return resolve(a("f85d"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    graceLoading: function() {
                        a.e("graceUI/components/graceLoading").then(function() {
                            return resolve(a("1d04"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onShow: function() {
                    this.userinfo = i.getStorageSync("userinfo"), this.load_elmwmqrcode2(), this.load_elmscqrcode2();
                    var e = c.globalData.util.url("entry/wxapp/api", {
                        m: c.globalData.module_name,
                        o: "chkpid"
                    });
                    i.request({
                        url: e,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: i.getStorageSync("openid")
                        },
                        success: function(e) {
                            e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                            console.log(e), i.setStorageSync("pid_use_time", e), i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && (i.setStorageSync("elmwm_url", ""), 
                            i.setStorageSync("elmsc_url", ""), i.setStorageSync("elmwmposter", ""), i.setStorageSync("elmscposter", ""), 
                            i.setStorageSync("pid_time", i.getStorageSync("pid_use_time")));
                        }
                    });
                },
                onReady: function() {
                    var t = this;
                    setTimeout(function() {
                        i.createSelectorQuery().select("#gBody").fields({
                            size: !0
                        }, function(e) {
                            t.mainHeight = e.height;
                        }).exec();
                    }, 1e3), setTimeout(function() {
                        t.pageLoading = !1;
                    }, 1500);
                },
                onLoad: function(e) {
                    this.module_name = c.globalData.module_name, this.setting = i.getStorageSync("setting"), 
                    this.userinfo = i.getStorageSync("userinfo"), this.elmwmqrcode = i.getStorageSync("elmwmqrcode"), 
                    this.elmscqrcode = i.getStorageSync("elmscqrcode"), this.elmwmposter = i.getStorageSync("elmwmposter"), 
                    this.elmscposter = i.getStorageSync("elmscposter"), this.pagebgcolor = i.getStorageSync("setting").waimaitt_elmwm_bgcolor, 
                    this.bgImg = i.getStorageSync("setting").waimaitt_elmwm_poster ? i.getStorageSync("setting").waimaitt_elmwm_poster : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmwm.png";
                    var t = c.globalData.util.url("entry/wxapp/api", {
                        m: c.globalData.module_name,
                        o: "chkpid"
                    });
                    i.request({
                        url: t,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            openid: i.getStorageSync("openid")
                        },
                        success: function(e) {
                            e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                            console.log(e), i.setStorageSync("pid_use_time", e), i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && (i.setStorageSync("elmwm_url", ""), 
                            i.setStorageSync("elmsc_url", ""), i.setStorageSync("elmwmposter", ""), i.setStorageSync("elmscposter", ""), 
                            i.setStorageSync("pid_time", i.getStorageSync("pid_use_time")));
                        }
                    }), this.load_elmwmqrcode(), this.load_elmscqrcode();
                    t = new Date(new Date().setHours(0, 0, 0, 0)) / 1e3;
                    console.log(t), i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && (i.setStorageSync("elmwm_url", ""), 
                    i.setStorageSync("elmsc_url", ""), i.setStorageSync("elmwmposter", ""), i.setStorageSync("elmscposter", ""));
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
                    load_elmwmqrcode: function() {
                        this.elmwmqrcode = "../../static/images/loadding-max.gif";
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "elmwm",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), e.poster_url ? (t.elmwmqrcode = e.data, i.setStorageSync("elmwmqrcode", e.data), 
                                i.setStorageSync("elmwmposter", e.poster_url)) : t.elmwmqrcode = "../../static/images/elmwm.png";
                            }
                        });
                    },
                    load_elmscqrcode: function() {
                        this.elmscqrcode = "../../static/images/loadding-max.gif";
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "elmsc",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), e.poster_url ? (t.elmscqrcode = e.data, i.setStorageSync("elmscqrcode", e.data), 
                                i.setStorageSync("elmscposter", e.poster_url)) : t.elmscqrcode = "../../static/images/elmcs.png";
                            }
                        });
                    },
                    load_elmwmqrcode2: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "elmwm",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), e.poster_url ? i.setStorageSync("elmwmposter", e.poster_url) : t.elmwmqrcode = "../../static/images/elmwm.png";
                            }
                        });
                    },
                    load_elmscqrcode2: function() {
                        var t = this, e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "qrcode"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                type: "elmsc",
                                uid: i.getStorageSync("userinfo").user_id
                            },
                            success: function(e) {
                                e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), e = JSON.parse(e);
                                console.log(e), e.poster_url ? i.setStorageSync("elmscposter", e.poster_url) : t.elmscqrcode = "../../static/images/elmcs.png";
                            }
                        });
                    },
                    userlogin: function() {
                        i.getStorageSync("userinfo").nickname ? this.closeDialog2() : this.showDialog2();
                    },
                    login: function(t) {
                        var a = this;
                        this.closeDialog2(), i.getSetting({
                            success: function(e) {
                                e.authSetting["scope.userInfo"] ? i.getUserInfo({
                                    success: function(e) {
                                        a.userAuth(t, e.userInfo, "login");
                                    }
                                }) : a.userAuth(t, null, "login");
                            }
                        });
                    },
                    getWxCode: function() {
                        var t = this;
                        wx.login({
                            success: function(e) {
                                t.wxCode = e.code;
                            }
                        });
                    },
                    userAuth: function(a, e, o) {
                        var n = this;
                        "getUserInfo:ok" == a.detail.errMsg ? wx.login({
                            success: function(e) {
                                var t = c.globalData.util.url("entry/wxapp/api", {
                                    m: c.globalData.module_name,
                                    o: "userinfo"
                                }), e = {
                                    code: e.code,
                                    encryptedData: a.detail.encryptedData,
                                    iv: a.detail.iv,
                                    openid: i.getStorageSync("openid"),
                                    invite_uid: wx.getStorageSync("invite_uid")
                                };
                                i.request({
                                    url: t,
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: e,
                                    success: function(e) {
                                        1 == e.data.status ? (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                        e = JSON.parse(e), i.setStorageSync("userinfo", e.userinfo), n.userinfo = e.userinfo, 
                                        "login" == o && (n.closeDialog2(), i.showToast({
                                            title: "登录成功",
                                            icon: "none"
                                        }), n.load_elmwmqrcode(), n.load_elmscqrcode())) : i.showToast({
                                            title: "您取消了请求",
                                            icon: "none"
                                        });
                                    }
                                });
                            }
                        }) : i.showToast({
                            title: "获取用户信息失败",
                            icon: "none"
                        });
                    },
                    closeAlert: function() {
                        this.closeDialog2();
                    },
                    updatepid: function() {
                        var e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "updatepid"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid")
                            },
                            success: function(e) {}
                        });
                    },
                    gethongbao_elmwm: function() {
                        if (i.getStorageSync("userinfo").nickname) {
                            if (0 == this.currentIndex && i.getStorageSync("elmwm_url")) i.navigateToMiniProgram({
                                appId: "wxece3a9a4c82f58c9",
                                path: i.getStorageSync("elmwm_url")
                            }), this.updatepid(), console.log(i.getStorageSync("elmwm_url")); else if (0 == this.currentIndex && !i.getStorageSync("elmwm_url")) return this.appid_type = 3, 
                            void this.gettaobaoauth();
                            if (1 == this.currentIndex && i.getStorageSync("elmsc_url")) i.navigateToMiniProgram({
                                appId: "wxece3a9a4c82f58c9",
                                path: i.getStorageSync("elmsc_url")
                            }), this.updatepid(), console.log(i.getStorageSync("elmsc_url")); else if (1 == this.currentIndex && !i.getStorageSync("elmsc_url")) return this.appid_type = 4, 
                            void this.gettaobaoauth();
                        } else this.showDialog2();
                    },
                    taobaoauth: function() {
                        var t = this;
                        i.setClipboardData({
                            data: this.qudao_tkl,
                            success: function(e) {
                                i.showToast({
                                    title: "复制成功，请打开淘宝APP授权",
                                    icon: "none"
                                }), t.is_qudao_tkl = 1;
                            }
                        });
                    },
                    tapButton: function() {
                        1 == this.currentIndex ? this.h5 = i.getStorageSync("setting").waimaitt_elmsc_tuantext_c : this.h5 = i.getStorageSync("setting").waimaitt_elmwm_tuantext_c, 
                        i.setClipboardData({
                            data: this.h5,
                            success: function(e) {
                                i.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    copy_wm: function() {
                        i.setClipboardData({
                            data: i.getStorageSync("setting").waimaitt_elmwm_tuantext_c,
                            success: function(e) {
                                i.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    copy_sc: function() {
                        i.setClipboardData({
                            data: i.getStorageSync("setting").waimaitt_elmsc_tuantext_c,
                            success: function(e) {
                                i.showToast({
                                    title: "复制成功",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    retaobaoauth: function() {
                        this.is_qudao_tkl = 0, this.qudao_tkl = "", this.gettaobaoauth();
                    },
                    notaobaoauth: function() {
                        3 == this.appid_type && i.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: i.getStorageSync("setting").default_elmwmpath
                        }), 4 == this.appid_type && i.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: i.getStorageSync("setting").default_elmscpath
                        });
                    },
                    taobaoauth_done: function() {
                        var a = this;
                        0 == a.currentIndex ? a.appid_type = 3 : a.appid_type = 4;
                        var e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "taobaoauth_done"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(e) {
                                var t;
                                0 != e.data.status ? (t = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                t = JSON.parse(t), 1 == e.data.status ? (3 == a.appid_type && (i.setStorageSync("elmwm_url", t.elmwm_url), 
                                a.elmwmqrcode = t.elmwm_qrcode, a.closeDialog1(), i.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmwm_url
                                }), console.log(i.getStorageSync("elmwm_url"))), 4 == a.appid_type && (i.setStorageSync("elmsc_url", t.elmsc_url), 
                                a.elmscqrcode = t.elmsc_qrcode, a.closeDialog1(), i.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: t.elmsc_url
                                }), console.log(i.getStorageSync("elmsc_url")))) : i.showModal({
                                    title: "提示",
                                    content: "未获取到您的授权信息，请重试！",
                                    showCancel: !1,
                                    success: function(e) {
                                        e.confirm || e.cancel;
                                    }
                                })) : i.showModal({
                                    title: "提示",
                                    content: "未获取到您的授权信息，请重试！",
                                    showCancel: !1,
                                    success: function(e) {
                                        e.confirm || e.cancel;
                                    }
                                });
                            }
                        });
                    },
                    gettaobaoauth: function() {
                        var t = this, a = this;
                        if (0 == a.currentIndex && i.getStorageSync("elmwm_url")) return i.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: i.getStorageSync("elmwm_url")
                        }), void console.log(i.getStorageSync("elmwm_url"));
                        if (1 == a.currentIndex && i.getStorageSync("elmsc_url")) return i.navigateToMiniProgram({
                            appId: "wxece3a9a4c82f58c9",
                            path: i.getStorageSync("elmsc_url")
                        }), void console.log(i.getStorageSync("elmsc_url"));
                        0 == a.currentIndex ? a.appid_type = 3 : a.appid_type = 4;
                        var e = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "gettaobaoauth"
                        });
                        i.request({
                            url: e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(e) {
                                1 == e.data.status ? (a.showDialog1(), a.qudao_tkl = e.data.data) : 0 == e.data.status ? i.showToast({
                                    title: "获取授权信息出错",
                                    icon: "none"
                                }) : 2 == e.data.status && (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), 3 == t.appid_type && (i.setStorageSync("elmwm_url", e.elmwm_url), 
                                i.setStorageSync("elmwm_h5", e.elmwm_h5), i.setStorageSync("pid_time", +e.pid_time), 
                                i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && i.setStorageSync("pid_use_time", i.getStorageSync("pid_time")), 
                                i.setStorageSync("is_qudao", e.is_qudao), i.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmwm_url
                                }), console.log(i.getStorageSync("elmwm_url"))), 4 == t.appid_type && (i.setStorageSync("elmsc_url", e.elmsc_url), 
                                i.setStorageSync("elmsc_h5", e.elmsc_h5), i.setStorageSync("pid_time", +e.pid_time), 
                                i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && i.setStorageSync("pid_use_time", i.getStorageSync("pid_time")), 
                                i.setStorageSync("is_qudao", e.is_qudao), i.navigateToMiniProgram({
                                    appId: "wxece3a9a4c82f58c9",
                                    path: e.elmsc_url
                                }), console.log(i.getStorageSync("elmsc_url"))));
                            }
                        });
                    },
                    gettaobaoauth1: function(e) {
                        var t = this, a = this;
                        0 == a.currentIndex ? a.appid_type = 3 : a.appid_type = 4;
                        var o = c.globalData.util.url("entry/wxapp/api", {
                            m: c.globalData.module_name,
                            o: "qrcode_mtelm"
                        });
                        i.request({
                            url: o,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                openid: i.getStorageSync("openid"),
                                appid_type: a.appid_type
                            },
                            success: function(e) {
                                1 == e.data.status ? (a.showDialog1(), a.qudao_tkl = e.data.data) : 0 == e.data.status ? i.showToast({
                                    title: "获取授权信息出错",
                                    icon: "none"
                                }) : 2 == e.data.status && (e = c.globalData.crypt.Decrypt(e.data.data.data, e.data.data.key), 
                                e = JSON.parse(e), 3 == t.appid_type && (i.setStorageSync("elmwm_url", e.elmwm_url), 
                                i.setStorageSync("elmwm_h5", e.elmwm_h5), i.setStorageSync("pid_time", +e.pid_time), 
                                i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && i.setStorageSync("pid_use_time", i.getStorageSync("pid_time")), 
                                i.setStorageSync("is_qudao", e.is_qudao)), 4 == t.appid_type && (i.setStorageSync("elmsc_url", e.elmsc_url), 
                                i.setStorageSync("elmwm_h5", e.elmwm_h5), i.setStorageSync("pid_time", +e.pid_time), 
                                i.getStorageSync("pid_time") != i.getStorageSync("pid_use_time") && i.setStorageSync("pid_use_time", i.getStorageSync("pid_time")), 
                                i.setStorageSync("is_qudao", e.is_qudao)));
                            }
                        });
                    },
                    close_poster: function() {
                        this.show_poster = !1;
                    },
                    previewImage: function(e) {
                        i.previewImage({
                            urls: [ e.currentTarget.dataset.src ],
                            current: 0
                        });
                    },
                    navChange: function(e) {
                        this.currentIndex = e, 1 == this.currentIndex ? (this.pagebgcolor = i.getStorageSync("setting").waimaitt_elmsc_bgcolor, 
                        this.bgImg = i.getStorageSync("setting").waimaitt_elmsc_poster ? i.getStorageSync("setting").waimaitt_elmsc_poster : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmsc.png", 
                        this.qrcode = i.getStorageSync("elmscqrcode")) : (this.pagebgcolor = i.getStorageSync("setting").waimaitt_elmwm_bgcolor, 
                        this.bgImg = i.getStorageSync("setting").waimaitt_elmwm_poster ? i.getStorageSync("setting").waimaitt_elmwm_poster : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmwm.png", 
                        this.qrcode = i.getStorageSync("elmwmqrcode"));
                    },
                    swiperChange: function(e) {
                        e = e.detail.current;
                        this.currentIndex = e, 1 == this.currentIndex ? (this.pagebgcolor = i.getStorageSync("setting").waimaitt_elmsc_bgcolor, 
                        this.bgImg = i.getStorageSync("setting").waimaitt_elmsc_poster ? i.getStorageSync("setting").waimaitt_elmsc_poster : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmsc.png", 
                        this.qrcode = i.getStorageSync("elmscqrcode"), this.elmscposter ? this.imgSrc = this.elmscposter : this.imgSrc = "") : (this.pagebgcolor = i.getStorageSync("setting").waimaitt_elmwm_bgcolor, 
                        this.bgImg = i.getStorageSync("setting").waimaitt_elmwm_poster ? i.getStorageSync("setting").waimaitt_elmwm_poster : i.getStorageSync("setting").static_domain + "addons/" + this.module_name + "/static/images/poster/elmwm.png", 
                        this.qrcode = i.getStorageSync("elmwmqrcode"), this.elmwmposter ? this.imgSrc = this.elmwmposter : this.imgSrc = "");
                    },
                    goback: function() {
                        i.navigateBack({});
                    },
                    gohome: function() {
                        i.switchTab({
                            url: "../index/index"
                        });
                    },
                    getposter_elmwm: function() {
                        var t;
                        i.getStorageSync("userinfo").nickname ? 1 == (t = this).currentIndex ? i.getStorageSync("elmscposter") && -1 != i.getStorageSync("elmscposter").indexOf("mp.weixin") ? i.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(i.getStorageSync("elmscposter"))
                        }) : (t.qrcode = t.elmscqrcode, i.getStorageSync("elmscposter") ? i.getImageInfo({
                            src: i.getStorageSync("elmscposter"),
                            success: function(e) {
                                console.log(e), t.show_poster = !0, t.imgSrc = i.getStorageSync("elmscposter");
                            },
                            fail: function(e) {
                                i.showLoading({
                                    title: "加载中...",
                                    mask: !0
                                }), t.show_poster = !0, t.context = i.createCanvasContext("graceCanvas"), t.initSize(), 
                                setTimeout(function() {
                                    t.draw();
                                }, 1e3);
                            }
                        }) : (i.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), t.show_poster = !0, t.context = i.createCanvasContext("graceCanvas"), t.initSize(), 
                        setTimeout(function() {
                            t.draw();
                        }, 1e3))) : i.getStorageSync("elmwmposter") && -1 != i.getStorageSync("elmwmposter").indexOf("mp.weixin") ? i.navigateTo({
                            url: "../kefu/webview?return_url=" + encodeURIComponent(i.getStorageSync("elmwmposter"))
                        }) : (t.qrcode = t.elmwmqrcode, i.getStorageSync("elmwmposter") ? i.getImageInfo({
                            src: i.getStorageSync("elmwmposter"),
                            success: function(e) {
                                console.log(e), t.show_poster = !0, t.imgSrc = i.getStorageSync("elmwmposter");
                            },
                            fail: function(e) {
                                i.showLoading({
                                    title: "加载中...",
                                    mask: !0
                                }), t.show_poster = !0, t.context = i.createCanvasContext("graceCanvas"), t.initSize(), 
                                setTimeout(function() {
                                    t.draw();
                                }, 1e3);
                            }
                        }) : (i.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), t.show_poster = !0, t.context = i.createCanvasContext("graceCanvas"), t.initSize(), 
                        setTimeout(function() {
                            t.draw();
                        }, 1e3))) : this.showDialog2();
                    },
                    initSize: function() {
                        this.widthIn = i.upx2px(this.width) * this.multiple, this.heightIn = i.upx2px(this.height) * this.multiple;
                    },
                    draw: function() {
                        var e = this;
                        this.step01(), "" != this.bgImg ? this.drawBGIMG(this.bgImg, function() {
                            e.step03();
                        }) : this.step03();
                    },
                    step01: function() {
                        this.context.setFillStyle(this.bgColor), this.context.fillRect(0, 0, this.widthIn, this.heightIn);
                    },
                    step03: function() {
                        var n = this;
                        1 == this.currentIndex ? this.qrcode = this.elmscqrcode : this.qrcode = this.elmwmqrcode, 
                        console.log(this.qrcode), i.downloadFile({
                            url: this.qrcode,
                            success: function(e) {
                                var t, a, o;
                                200 === e.statusCode && (console.log("ok"), t = 0 == n.currentIndex ? (a = i.getStorageSync("setting").waimaitt_elmwm_poster_qrcode ? i.getStorageSync("setting").waimaitt_elmwm_poster_qrcode : 350, 
                                o = i.getStorageSync("setting").waimaitt_elmwm_poster_qrcodex ? i.getStorageSync("setting").waimaitt_elmwm_poster_qrcodex : 0, 
                                i.getStorageSync("setting").waimaitt_elmwm_poster_qrcodey ? i.getStorageSync("setting").waimaitt_elmwm_poster_qrcodey : 615) : (a = i.getStorageSync("setting").waimaitt_elmsc_poster_qrcode ? i.getStorageSync("setting").waimaitt_elmsc_poster_qrcode : 350, 
                                o = i.getStorageSync("setting").waimaitt_elmsc_poster_qrcodex ? i.getStorageSync("setting").waimaitt_elmsc_poster_qrcodex : 0, 
                                i.getStorageSync("setting").waimaitt_elmsc_poster_qrcodey ? i.getStorageSync("setting").waimaitt_elmsc_poster_qrcodey : 615), 
                                a = i.upx2px(a) * n.multiple, o = i.upx2px(o) * n.multiple, o = (n.widthIn - a + o) / 2, 
                                n.context.drawImage(e.tempFilePath, o, n.heightIn - i.upx2px(t) * n.multiple, a, a), 
                                n.drawIt());
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    drawText: function(e, t, a, o, n, i) {
                        this.context.setFontSize(n), this.context.setFillStyle(o), this.context.setTextAlign(i), 
                        this.context.fillText(e, t, a);
                    },
                    drawIt: function() {
                        var t = this;
                        this.imgSrc = "", this.show_poster = !1, this.context.draw(!0, function() {
                            i.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: t.widthIn,
                                height: t.heightIn,
                                destWidth: t.widthIn,
                                destHeight: t.heightIn,
                                canvasId: "graceCanvas",
                                success: function(e) {
                                    console.log(e), 1 == t.currentIndex ? (t.elmscposter = e.tempFilePath, t.imgSrc = e.tempFilePath, 
                                    t.show_poster = 1, t.h5 = i.getStorageSync("elmsc_h5"), i.setStorageSync("elmscposter", e.tempFilePath)) : (t.elmwmposter = e.tempFilePath, 
                                    t.imgSrc = e.tempFilePath, t.show_poster = 1, i.setStorageSync("elmwmposter", e.tempFilePath), 
                                    t.h5 = i.getStorageSync("elmwm_h5")), setTimeout(function() {
                                        i.hideLoading();
                                    }, 1e3);
                                },
                                fail: function(e) {
                                    console.log(e), i.hideLoading(), i.showToast({
                                        title: "海报生成失败",
                                        icon: "none"
                                    });
                                }
                            });
                        });
                    },
                    drawBGIMG: function(e, a) {
                        var o = this;
                        i.downloadFile({
                            url: e,
                            success: function(t) {
                                200 == t.statusCode && i.getImageInfo({
                                    src: t.tempFilePath,
                                    success: function(e) {
                                        e = o.widthIn / e.width * e.height;
                                        console.log(e), o.context.drawImage(t.tempFilePath, 0, 0, o.widthIn, e), a();
                                    }
                                });
                            }
                        });
                    },
                    onShareAppMessage: function() {
                        var e = "pages/index/index?to=elm&uid=" + i.getStorageSync("userinfo").user_id;
                        return {
                            title: i.getStorageSync("setting").sharetitle,
                            imageUrl: i.getStorageSync("setting").sharethumb,
                            path: e
                        };
                    }
                }
            };
            t.default = e;
        }).call(this, a("543d").default);
    },
    3291: function(e, t, a) {
        a.d(t, "b", function() {
            return o;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
    },
    "3d19": function(e, t, a) {
        var o = a("a3e7");
        a.n(o).a;
    },
    "3f12": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("0cda"), t(a("66fd")), e(t(a("6fe8")).default);
        }).call(this, a("543d").createPage);
    },
    "6fe8": function(e, t, a) {
        a.r(t);
        var o, n = a("3291"), i = a("b3eb");
        for (o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("3d19");
        var c = a("f0c5"), n = Object(c.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = n.exports;
    },
    a3e7: function(e, t, a) {},
    b3eb: function(e, t, a) {
        a.r(t);
        var o, n = a("3139"), i = a.n(n);
        for (o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = i.a;
    }
}, [ [ "3f12", "common/runtime", "common/vendor" ] ] ]);